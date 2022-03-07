/**
 * Processor Service
 */
const Joi = require('@hapi/joi')
const _ = require('lodash')
const logger = require('../common/logger')
const helper = require('../common/helper')

Joi.id = () => Joi.string().uuid().required()
const VALID_CHALLENGE_STATUSES = ['Active']

/**
 * Process create entity message
 * @param {Object} message the kafka message
 * @returns {Promise}
 */
async function processCreate (message) {
  // get challenge
  const challenge = await helper.getChallenge(message.payload.id)
  if (!VALID_CHALLENGE_STATUSES.includes(challenge.status)) {
    logger.info(`Not creating events for challenge status ${challenge.status}...`)
    return
  }
  if (!_.get(challenge, 'legacy.useSchedulingAPI')) {
    logger.info(`The legacy.useSchedulingAPI is not set on challenge ${challenge.id}...`)
    return
  }
  // create events
  const events = helper.getEventsFromPhases(challenge)
  // call the executor api
  await helper.createEventsInExecutor(events)

  logger.info(`processing of the record completed, id: ${message.payload.id}`)
}

/**
 * Process update entity message
 * @param {Object} message the kafka message
 * @returns {Promise}
 */
async function processUpdate (message) {
  const sourceChallenge = await helper.getChallenge(message.payload.id)
  if (!VALID_CHALLENGE_STATUSES.includes(sourceChallenge.status)) {
    logger.info(`Not creating events for challenge status ${sourceChallenge.status}...`)
    return
  }
  if (!_.get(sourceChallenge, 'legacy.useSchedulingAPI')) {
    logger.info(`The legacy.useSchedulingAPI is not set on challenge ${sourceChallenge.id}...`)
    return
  }
  const newEvents = helper.getEventsFromPhases(sourceChallenge)
  const oldEvents = await helper.getEventsFromScheduleApi(message.payload.id)
  logger.info(`Deleting existing events for challenge ${message.payload.id}`)
  await helper.deleteEventsInExecutor(oldEvents)
  logger.info(`Creating events for challenge ${message.payload.id}`)
  await helper.createEventsInExecutor(newEvents)
  logger.info(`processing of the record completed, id: ${message.payload.id}`)
}

processCreate.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    key: Joi.string().allow(null),
    payload: Joi.object().keys({
      id: Joi.id()
    }).required().unknown(true)
  }).required()
}
processUpdate.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    key: Joi.string().allow(null),
    payload: Joi.object().keys({
      id: Joi.id()
    }).required().unknown(true)
  }).required()
}

module.exports = {
  processCreate,
  processUpdate
}

logger.buildService(module.exports)
