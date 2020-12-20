/**
 * Processor Service
 */
const Joi = require('@hapi/joi')
const logger = require('../common/logger')
const helper = require('../common/helper')

Joi.id = () => Joi.string().uuid().required()

/**
 * Process create entity message
 * @param {Object} message the kafka message
 * @returns {Promise}
 */
async function processCreate (message) {
  // get challenge
  const challenge = await helper.getChallenge(message.payload.id)
  // create events
  const events = helper.getEventsFromPhases(challenge)
  // call the executor api
  await helper.createEventsInExecutor(events)

  logger.info(`processing of the record completed, id: ${message.payload.id}`)
}

processCreate.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    payload: Joi.object().keys({
      id: Joi.id()
    }).required().unknown(true)
  }).required()
}

module.exports = {
  processCreate
}

logger.buildService(module.exports)
