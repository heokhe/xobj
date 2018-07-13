/**
 * Determines if `object` has the given key(s).
 * @param {object} object 
 * @param {any} key 
 * @returns {boolean} A boolean
 */

export default function(object, key){
	// more options will come (like functions, regular expressions, ...)
	if (Array.isArray(key)) return Object.keys(object).filter(e => key.includes(e)).every(e => e in object)
	else return key in object
}