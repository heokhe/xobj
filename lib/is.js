/**
 * Checks if the given argument is an object.
 * @param {Object} obj
 * @param {boolean} [acceptArrays=false] If true, accepts arrays too.
 * @returns {boolean}
 */
export default (obj, acceptArrays) => !!obj && typeof obj === 'object' && (acceptArrays ? true : !Array.isArray(obj))