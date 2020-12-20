/**
 * Contains generic helper methods
 */
//
const should = require('should') // eslint-disable-line no-unused-vars

/**
 * Assert the error message in log exists
 * @param message the error message to check
 */
function assertErrorMessage (errorLogs, message) {
  errorLogs.should.not.be.empty()
  errorLogs.some(x => String(x).includes(message)).should.be.true()
}

/**
 * Assert the info message in log exists
 * @param message the info message to check
 */
function assertInfoMessage (infoLogs, message) {
  infoLogs.should.not.be.empty()
  infoLogs.some(x => String(x).includes(message)).should.be.true()
}

/**
 * Assert the info message in log exists
 * @param message the debug message to check
 */
function assertDebugMessage (debugLogs, message) {
  debugLogs.should.not.be.empty()
  debugLogs.some(x => String(x).includes(message)).should.be.true()
}

module.exports = {
  assertErrorMessage,
  assertInfoMessage,
  assertDebugMessage
}
