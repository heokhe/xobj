/**
 * Checks if two arrays of keys are equal.
 * @private
 * @param {string[]} arr1 
 * @param {string[]} arr2 
 * @returns {boolean}
 */

export default function (arr1, arr2){
    // Do not continue if their length are not equal
    if (arr1.length !== arr2.length) return false

    arr1 = arr1.sort()
    arr2 = arr2.sort()
    let res = []
    for (let i = 0, l = arr1.length; i < l; i++) res.push(arr1[0] === arr2[0])
    return res.every(e => e)
}