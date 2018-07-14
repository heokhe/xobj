/**
 * Gives you only the wanted keys.
 * @param {Object} object 
 * @param {(string|string[])} keys 
 * @returns {Object}
 */

export default function(object, keys){
	if (typeof keys === 'undefined' || 
		keys === '*' || 
		(Array.isArray(keys) && !keys.length) ||
		keys === true) return object
	if (typeof keys === 'string') keys = [keys]

	const res = {}
	Object.keys(object).filter(e => keys.includes(e)).forEach(e => { res[e] = object[e] })
	return res
}