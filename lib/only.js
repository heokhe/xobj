/**
 * Gives you only the wanted keys.
 * @param {object} object 
 * @param {string | string[]} keys 
 * @returns object
 */

export default function(object, keys){
	if (typeof keys === 'string') keys = [keys]

	return Object.keys(object).filter(e => keys.includes(e)).map(e => object[e])
}