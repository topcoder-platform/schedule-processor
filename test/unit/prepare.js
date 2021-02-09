/*
 * Setting up Mock for unit tests
 */

// During tests the node env is set to test
process.env.NODE_ENV = 'test'

const nock = require('nock')
const prepare = require('mocha-prepare')
const helper = require('../../src/common/helper')

const { mockChallenge, mockEvents } = require('../common/testData')

prepare(async function (done) {
  // get access token
  const accessToken = await helper.getTopcoderM2Mtoken()

  // called before loading of test cases
  nock(/.com|localhost/)
    .persist()
    .post(uri => uri.includes('token'))
    .query(true)
    .reply(200, { access_token: accessToken })
    .get(uri => uri.includes('challenges'))
    .reply((uri, requestBody) => {
      if (uri.split('/').pop() !== mockChallenge.id) return [404]
      return [200, mockChallenge]
    })
    .post(uri => uri.includes('schedule'))
    .reply(200)
    .get(uri => uri.includes('schedule'))
    .reply((uri, requestBody) => {
      if (uri.split('?').pop() !== `challengeID=${mockEvents[0].challengeID}`) return [404]
      return [200, mockEvents]
    })
    .delete(uri => uri.includes('schedule'))
    .reply(200)
    .patch(uri => uri.includes('schedule'))
    .reply(200)
  done()
}, function (done) {
  // called after all test completes (regardless of errors)
  nock.cleanAll()
  done()
})
