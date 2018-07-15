/**
 * Checks if the given argument is an object.
 * @param {Object} obj
 */
export default obj => !!obj && typeof obj === 'object' && !Array.isArray(obj)