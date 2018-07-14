/**
 * Determines if `object` has the given key(s).
 * @param {Object} object 
 * @param {any} key Could be everything: String, an array of strings, or a function that returns a boolean.
 * @returns {boolean}
 */

export default function(object, key){
	if (Array.isArray(key)) return Object.keys(object).filter(e => key.includes(e)).every(e => e in object)
	else if (typeof key === 'function') {
		let res = []
		Object.entries(object).forEach(e => {
			let [keyName, value] = e,
			returnedFromCB = key.apply(null, [keyName, value])

			// if (!!returnedFromCB) res.push(true)
			res.push(returnedFromCB)
		})
		return !res.length ? false : !!res.find(Boolean)
	}
	else return key in object
}