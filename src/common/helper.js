/**
 * Contains generic helper methods
 */
const _ = require('lodash')
const axios = require('axios')
const config = require('config')
const m2mAuth = require('tc-core-library-js').auth.m2m
const logger = require('./logger')

const topcoderM2MConfig = _.pick(config, ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME', 'AUTH0_PROXY_SERVER_URL'])
const topcoderM2M = m2mAuth({ ...topcoderM2MConfig, AUTH0_AUDIENCE: topcoderM2MConfig.AUTH0_AUDIENCE })

/* Function to get M2M token
 * (Topcoder APIs only)
 * @returns {Promise}
 */
async function getTopcoderM2Mtoken () {
  try {
    return topcoderM2M.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET)
  } catch (error) {
    logger.error('An error occurred fetching the m2m token for Topcoder APIs')
    logger.error(error)
    throw error
  }
}

/**
 * Get Kafka options
 * @return {Object} the Kafka options
 */
function getKafkaOptions () {
  const options = { connectionString: config.KAFKA_URL, groupId: config.KAFKA_GROUP_ID }

  /* istanbul ignore next */
  if (config.KAFKA_CLIENT_CERT && config.KAFKA_CLIENT_CERT_KEY) {
    options.ssl = { cert: config.KAFKA_CLIENT_CERT, key: config.KAFKA_CLIENT_CERT_KEY }
  }
  return options
}

/**
 * Fuction to get an Error with statusCode property
 * @param {String} message error message
 * @param {Number} statusCode
 * @returns {Error} an Error with statusCode property
 */
function getErrorWithStatus (message, statusCode) {
  const error = Error(message)
  error.statusCode = statusCode
  return error
}

/**
 * Get challenge by id
 * @param challengeId the challenge id
 * @returns {object} challenge
 */
async function getChallenge (challengeId) {
  const url = `${config.CHALLENGE_API_URL}/${challengeId}`
  const token = await getTopcoderM2Mtoken()

  logger.debug(`request GET ${url}`)
  try {
    const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    logger.error(err.message)

    if (err.response) {
      if (err.response.status === 404) {
        logger.error(`The Challenge with the id: ${challengeId} not exist`)
        throw getErrorWithStatus('[resource_not_found_exception]', 404)
      }
    }

    throw Error(`get ${url} failed`)
  }
}

/**
 * Get challenge by id from Schedule Api
 * @param challengeId the challenge id
 * @returns {Array} array of events
 */
async function getEventsFromScheduleApi (challengeId) {
  const url = `${config.SCHEDULE_API_URL}?externalId=${challengeId}`

  logger.debug(`request GET ${url}`)
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    logger.error(err.message)

    if (err.response) {
      if (err.response.status === 404) {
        logger.error(`The Challenge with the id: ${challengeId} not exist`)
        throw getErrorWithStatus('[resource_not_found_exception]', 404)
      }
    }
    throw Error(`get ${url} failed`)
  }
}

/**
 * Create events from challenge object
 * @param challenge the challenge object
 */
function getEventsFromPhases (challenge) {
  const events = []
  const dateBasedEvents = {}

  for (const phase of challenge.phases) {
    if (!dateBasedEvents[phase.scheduledStartDate]) {
      dateBasedEvents[phase.scheduledStartDate] = []
    }
    if (!dateBasedEvents[phase.scheduledEndDate]) {
      dateBasedEvents[phase.scheduledEndDate] = []
    }
    dateBasedEvents[phase.scheduledStartDate].push({
      phaseId: phase.phaseId,
      isOpen: true
    })
    dateBasedEvents[phase.scheduledEndDate].push({
      phaseId: phase.phaseId,
      isOpen: false
    })
  }

  _.each(dateBasedEvents, (eventData, scheduleTime) => {
    events.push({
      externalId: challenge.id,
      scheduleTime,
      payload: {
        phases: eventData
      }
    })
  })

  return events
}

/**
 * Create events in executor app
 * @param events the events array
 */
async function createEventsInExecutor (events) {
  const url = config.SCHEDULE_API_URL
  const token = await getTopcoderM2Mtoken()

  for (const event of events) {
    try {
      // schedule executor api payload
      const executorPayload = {
        url: `${config.CHALLENGE_API_URL}/${event.externalId}`,
        externalId: event.externalId,
        method: 'patch',
        scheduleTime: event.scheduleTime,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        payload: JSON.stringify(event.payload)
      }

      // call executor api
      logger.debug(`request POST ${url}`)
      await axios.post(`${url}`, executorPayload)
    } catch (err) {
      logger.warn(`Failed to create event for external ID ${event.externalId}`)
      logger.error(err.message)
    }
  }
}

/**
 * Delete events in executor app
 * @param events the events array
 */
async function deleteEventsInExecutor (events) {
  const url = config.SCHEDULE_API_URL
  for (const event of events) {
    // schedule executor api payload
    const executorPayload = {
      id: event.id
    }
    try {
      // call executor api
      logger.debug(`request DELETE ${url}`)
      await axios.delete(`${url}`, { data: executorPayload })
    } catch (err) {
      logger.warn(`Failed to delete event ${event.id}`)
      logger.error(err.message)
    }
  }
}

module.exports = {
  getKafkaOptions,
  getTopcoderM2Mtoken,
  getChallenge,
  getEventsFromScheduleApi,
  getEventsFromPhases,
  createEventsInExecutor,
  deleteEventsInExecutor
}
