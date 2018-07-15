import parsePath from './parsePath'

/**
 * Gets from object by path.
 * @param {Object} object 
 * @param {string} path 
 * @returns {*}
 */
export default function(object, path) {
    path = parsePath(path)
    let t = 0, res;
    path.forEach(e => {
        res = (t === 0 ? object : res)[e]
        t++
    })
    return res
}