/** 
 * Merges given objects with no recursion.
 * @param {object[]} objects
 * @returns object
*/

export default function merge(...objects){
	let res = {}
	objects.forEach(e => {
		Object.assign(res, e)
	})
	return res
}