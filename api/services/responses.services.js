
/**
 *
 * @param {Object} data data response
 * @param {Boolean} valid flag for operation result
 * @param {string} valid message to client
 */

module.exports.formatResponse = (data = {}, valid = true, msg = '') => {
  return {
    valid,
    data,
    msg
  }
}
