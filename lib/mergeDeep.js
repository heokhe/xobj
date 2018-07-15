import is from './is'

/**
 * Merges with recursion. (deep merge)
 * @param {Object} target 
 * @param {Object} source 
 * @returns {Object}
 */

export default function md(target, source) {
    let res = target
    for (const key in source) {
        if (is(source[key])) {
            if (!target[key]) Object.assign(res, { [key]: {} });
            md(target[key], source[key]);
        } else {
            Object.assign(res, { [key]: source[key] });
        }
    }
    return res
}