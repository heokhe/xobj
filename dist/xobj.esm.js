/** 
 * Merges given objects with no recursion.
 * @param {...Object} objects 
 * @returns {Object}
*/

function merge () {
	var res = {};

	for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
		objects[_key] = arguments[_key];
	}

	objects.forEach(function (e) {
		Object.assign(res, e);
	});
	return res;
}

/**
 * Gives you only the wanted keys.
 * @param {Object} object 
 * @param {(string|string[])} keys 
 * @returns {Object}
 */

function only (object, keys) {
	if (typeof keys === 'undefined' || keys === '*' || Array.isArray(keys) && !keys.length || keys === true) return object;
	if (typeof keys === 'string') keys = [keys];

	var res = {};
	Object.keys(object).filter(function (e) {
		return keys.includes(e);
	}).forEach(function (e) {
		res[e] = object[e];
	});
	return res;
}

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Determines if `object` has the given key(s).
 * @param {Object} object 
 * @param {any} key Could be everything: String, an array of strings, or a function that returns a boolean.
 * @returns {boolean}
 */

function has (object, key) {
	if (Array.isArray(key)) return Object.keys(object).filter(function (e) {
		return key.includes(e);
	}).every(function (e) {
		return e in object;
	});else if (typeof key === 'function') {
		var res = [];
		Object.entries(object).forEach(function (e) {
			var _e = _slicedToArray(e, 2),
			    keyName = _e[0],
			    value = _e[1],
			    returnedFromCB = key.apply(null, [keyName, value]);

			res.push(returnedFromCB);
		});
		return !res.length ? false : !!res.find(Boolean);
	} else return key in object;
}

/**
 * Parses the path to an array.
 * @param {string)} path 
 * @returns {string[]} Parsed path
 */
function parsePath (path) {
  path = path.replace(/\[(.+?)\]/g, function ($, $1) {
    return '.' + $1.replace(/["'`]/g, '');
  });
  return path.split('.');
}

var index = { merge: merge, only: only, has: has, parsePath: parsePath };

export default index;
