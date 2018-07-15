import merge from './merge'

/**
 * Loops through object and executes the callback function.
 * @param {Object} object 
 * @param {function} cb
 * @param {Object} options
 * @param {?string} [options.pass="both"] Choose what arguments to pass to callback. (`values`, `keys` or `both`)
 * @param {?boolean} [options.fromRight=false] If true, starts the loop from right (in a reversed order).
 */
export default function(object, cb, options){
    options = merge(options, {
        fromRight: false,
        pass: 'both'
    })
    let keys = Object.keys(object)
    if (options.fromRight) keys = keys.reverse()
    keys.forEach(key => {
        let value = object[key], args;
        switch (options.pass.trim().toUpperCase()){
            case 'KEYS': 
                args = [key]
                break
            case 'VALUES': 
                args = [value]
                break
            default:
                args = [value, key]
        }
        cb.apply(null, args)
    })
}