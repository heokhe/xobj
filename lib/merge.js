/** 
 * Merges given objects with no recursion.
 * @param {...Object} objects 
 * @returns {Object}
*/

export default function(...objects){
	let res = {}
	objects.forEach(e => {
		Object.assign(res, e)
	})
	return res
}