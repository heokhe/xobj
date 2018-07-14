import merge from './merge'
import has from './has'

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

			if (typeof sel === 'object' && typeof tel === 'object' && has(sel, (k, v) => typeof v === 'object')){
				sel = merge(sel, tel)
			}
			target[key] = sel
		}
	}
	return target
}

export default mergeAll