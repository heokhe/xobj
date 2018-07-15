import is from './is'

/**
 * Checks if the given argument is a pure object.
 * @param {Object} obj
 */
export default obj => is(obj) && obj instanceof Object