/**
 * Parses the path to an array.
 * @param {string} path 
 * @returns {string[]} Parsed path
 */
export default function(path){
	path = path.replace(/\[(.+?)\]/g, ($, $1) => {
		return '.' + $1.replace(/["'`]/g, '')
	})
	return path.split('.')
}