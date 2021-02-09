/**
 * Mocha tests of the Autopilot ES Processor.
 */

process.env.NODE_ENV = 'test'

global.Promise = require('bluebird')
const _ = require('lodash')
const config = require('config')
const logger = require('../../src/common/logger')
const helper = require('../../src/common/helper')
const service = require('../../src/services/ProcessorService')
const { testTopics } = require('../common/testData')
const { assertDebugMessage, assertErrorMessage, assertInfoMessage } = require('../common/testHelper')

describe('Autopilot Processor Unit Test', () => {
  let infoLogs = []
  let errorLogs = []
  let debugLogs = []
  const info = logger.info
  const error = logger.error
  const debug = logger.debug

  before(async () => {
    // inject logger with log collector
    logger.info = (message) => {
      infoLogs.push(message)
      info(message)
    }
    logger.debug = (message) => {
      debugLogs.push(message)
      debug(message)
    }
    logger.error = (message) => {
      errorLogs.push(message)
      error(message)
    }
  })

  after(async () => {
    // restore logger
    logger.error = error
    logger.info = info
    logger.debug = debug
  })

  beforeEach(() => {
    // clear logs
    infoLogs = []
    debugLogs = []
    errorLogs = []
  })

  it(`process create success`, async () => {
    await service.processCreate(testTopics[0])
    assertDebugMessage(debugLogs, `request GET ${config.CHALLENGE_API_URL}/${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, `request POST ${config.SCHEDULE_API_URL}`)
    assertInfoMessage(infoLogs, `processing of the record completed, id: ${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, 'EXIT processCreate')
  })

  it(`process create success from helper`, async () => {
    const challenge = await helper.getChallenge(testTopics[0].payload.id)
    const events = helper.getEventsFromPhases(challenge)
    await helper.createEventsInExecutor(events)
  })

  it(`test process create message with invalid parameters, required field id is missing`, async () => {
    try {
      let message = _.cloneDeep(testTopics[0])
      delete message.payload.id
      await service.processCreate(message)
    } catch (err) {
      assertErrorMessage(errorLogs, '"id" is required')
    }
  })

  it(`test process create message with invalid parameters, invalid string field id`, async () => {
    const message = _.cloneDeep(testTopics[0])
    _.set(message.payload, 'id', '12345')
    try {
      await service.processCreate(message)
    } catch (err) {
      assertErrorMessage(errorLogs, '"id" must be a valid GUID')
    }
  })

  it(`test process create message with nonexistent id`, async () => {
    const nonexistentId = 'a269fec0-1179-4c26-b583-e72b16cbfc54'
    const message = _.cloneDeep(testTopics[0])
    _.set(message.payload, 'id', nonexistentId)
    try {
      await service.processCreate(message)
    } catch (err) {
      assertErrorMessage(errorLogs, `The Challenge with the id: ${nonexistentId} not exist`)
      assertErrorMessage(errorLogs, 'Error: [resource_not_found_exception]')
    }
  })

  it(`process update success`, async () => {
    await service.processUpdate(testTopics[0])
    assertDebugMessage(debugLogs, `request GET ${config.CHALLENGE_API_URL}/${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, `request GET ${config.SCHEDULE_API_URL}?challengeID=${testTopics[0].payload.id}`)
    assertInfoMessage(infoLogs, `processing of the record completed, id: ${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, 'EXIT processUpdate')
  })

  it(`process update success from helper`, async () => {
    const sourceChallenge = await helper.getChallenge(testTopics[0].payload.id)
    const sourceEvents = helper.getEventsFromPhases(sourceChallenge)
    const targetEvents = await helper.getEventsFromScheduleApi(testTopics[0].payload.id)
    const differences = helper.compareEvents(sourceEvents, targetEvents)
    await helper.updateChallenge(differences)
  })
})
