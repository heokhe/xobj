import merge from './merge'

/**
 * Merges with recursion.
 * @param {Object} target 
 * @param {Object} source 
 */
function mergeAll(target, source){
	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			let sel = source[key],
			tel = target[key];

			while (typeof sel === 'object' && typeof tel === 'object'){
				sel = merge(sel, tel)
			}
			target[key] = sel
		}
	}
	return target
}

export default mergeAll