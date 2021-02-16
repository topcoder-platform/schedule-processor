/**
 * E2E test of the Autopilot ES Processor.
 */
global.Promise = require('bluebird')
process.env.NODE_ENV = 'test'

const _ = require('lodash')
const config = require('config')
const helper = require('../../src/common/helper')
const request = require('superagent')
const Kafka = require('no-kafka')
const should = require('should')
const logger = require('../../src/common/logger')
const { testTopics } = require('../common/testData')
const { assertDebugMessage, assertErrorMessage, assertInfoMessage } = require('../common/testHelper')

describe('Autopilot Processor E2E Test', () => {
  let app
  let infoLogs = []
  let errorLogs = []
  let debugLogs = []
  const info = logger.info
  const error = logger.error
  const debug = logger.debug

  const producer = new Kafka.Producer(helper.getKafkaOptions())

  /**
   * Sleep with time from input
   * @param time the time input
   */
  async function sleep (time) {
    await new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }

  /**
   * Send message
   * @param testMessage the test message
   */
  async function sendMessage (testMessage) {
    await producer.send({
      topic: testMessage.topic,
      message: {
        value: JSON.stringify(testMessage)
      }
    })
  }

  /**
   * Consume not committed messages before e2e test
   */
  async function consumeMessages () {
    // remove all not processed messages
    const consumer = new Kafka.GroupConsumer(helper.getKafkaOptions())
    await consumer.init([{
      subscriptions: [config.NOTIFICATION_CREATE_TOPIC],
      handler: (messageSet, topic, partition) => Promise.each(messageSet,
        (m) => consumer.commitOffset({ topic, partition, offset: m.offset }))
    }])
    // make sure process all not committed messages before test
    await sleep(2 * config.WAIT_TIME)
    await consumer.end()
  }

  /**
   * Wait job finished with successful log or error log is found
   */
  async function waitJob () {
    while (true) {
      if (errorLogs.length > 0) {
        break
      }
      if (debugLogs.some(x => String(x).includes('Successfully processed message'))) {
        break
      }
      // use small time to wait job and will use global timeout so will not wait too long
      await sleep(config.WAIT_TIME)
    }
  }

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
    await consumeMessages()
    // start kafka producer
    await producer.init()
    // start the application (kafka listener)
    app = require('../../src/app')
    // wait until consumer init successfully
    while (true) {
      if (infoLogs.some(x => String(x).includes('Kick Start'))) {
        break
      }
      await sleep(config.WAIT_TIME)
    }
  })

  after(async () => {
    // restore logger
    logger.error = error
    logger.info = info
    logger.debug = debug

    try {
      await producer.end()
    } catch (err) {
      // ignore
    }
    try {
      await app.end()
    } catch (err) {
      // ignore
    }
  })

  beforeEach(() => {
    // clear logs
    infoLogs = []
    debugLogs = []
    errorLogs = []
  })

  it('Should setup healthcheck with check on kafka connection', async () => {
    const healthcheckEndpoint = `http://localhost:${process.env.PORT || 3000}/health`
    const result = await request.get(healthcheckEndpoint)
    should.equal(result.status, 200)
    should.deepEqual(result.body, { checksRun: 1 })
    debugLogs.should.match(/connected=true/)
  })

  it('Should handle invalid json message', async () => {
    await producer.send({
      topic: testTopics[0].topic,
      message: {
        value: '[ invalid'
      }
    })
    await waitJob()
    should.equal(errorLogs[0], 'Invalid message JSON.')
  })

  it(`process create success`, async () => {
    await sendMessage(testTopics[0])
    await waitJob()
    assertDebugMessage(debugLogs, `request GET ${config.CHALLENGE_API_URL}/${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, `request POST ${config.SCHEDULE_API_URL}`)
    assertInfoMessage(infoLogs, `processing of the record completed, id: ${testTopics[0].payload.id}`)
    assertDebugMessage(debugLogs, 'EXIT processCreate')
    assertDebugMessage(debugLogs, 'Successfully processed message')
  })

  it(`process update success`, async () => {
    await sendMessage(testTopics[1])
    await waitJob()
    assertDebugMessage(debugLogs, `request GET ${config.CHALLENGE_API_URL}/${testTopics[1].payload.id}`)
    assertDebugMessage(debugLogs, `request GET ${config.SCHEDULE_API_URL}?challengeID=${testTopics[1].payload.id}`)
    assertInfoMessage(infoLogs, `processing of the record completed, id: ${testTopics[1].payload.id}`)
    assertDebugMessage(debugLogs, 'EXIT processUpdate')
    assertDebugMessage(debugLogs, 'Successfully processed message')
  })

  it('Should handle incorrect topic field message', async () => {
    const message = _.cloneDeep(testTopics[0])
    message.topic = 'invalid'
    await producer.send({
      topic: testTopics[0].topic,
      message: {
        value: JSON.stringify(message)
      }
    })
    await waitJob()
    should.equal(errorLogs[0], 'The message topic invalid doesn\'t match the Kafka topic challenge.notification.create.')
  })

  it(`test process create message with invalid parameters, required field id is missing`, async () => {
    let message = _.cloneDeep(testTopics[0])
    delete message.payload.id

    await sendMessage(message)
    await waitJob()

    assertErrorMessage(errorLogs, '"id" is required')
  })

  it(`test process create message with invalid parameters, invalid string field id`, async () => {
    const message = _.cloneDeep(testTopics[0])
    _.set(message.payload, 'id', '12345')

    await sendMessage(message)
    await waitJob()

    assertErrorMessage(errorLogs, '"id" must be a valid GUID')
  })

  it(`test process create message with nonexistent id`, async () => {
    const nonexistentId = 'a269fec0-1179-4c26-b583-e72b16cbfc54'
    const message = _.cloneDeep(testTopics[0])
    _.set(message.payload, 'id', nonexistentId)

    await sendMessage(message)
    await waitJob()

    assertErrorMessage(errorLogs, `The Challenge with the id: ${nonexistentId} not exist`)
    assertErrorMessage(errorLogs, 'Error: [resource_not_found_exception]')
  })

  it(`invalid challenge id`, async () => {
    config.CHALLENGE_API_URL = 'invalidurl'

    await sendMessage(testTopics[0])
    await waitJob()

    assertErrorMessage(errorLogs, 'connect ECONNREFUSED 127.0.0.1:80')
  })

  it(`invalid executor id`, async () => {
    config.SCHEDULE_API_URL = 'invalidurl'

    await sendMessage(testTopics[0])
    await waitJob()

    assertErrorMessage(errorLogs, 'connect ECONNREFUSED 127.0.0.1:80')
  })
})
