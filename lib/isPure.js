import is from './is'

/**
 * Checks if the given argument is a pure object.
 * @param {Object} obj
 * @returns {boolean}
 */
export default obj => is(obj, false) && obj instanceof Object