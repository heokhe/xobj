/** 
 * Merges given objects with no recursion.
 * @param {object[]} objects
 * @returns object
*/

function merge() {
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
 * @param {object} object 
 * @param {string | string[]} keys 
 * @returns object
 */

function only (object, keys) {
  if (typeof keys === 'string') keys = [keys];

  return Object.keys(object).filter(function (e) {
    return keys.includes(e);
  }).map(function (e) {
    return object[e];
  });
}

/* import mergeAll from './mergeAll' */

var index = { merge: merge, only: only };

export default index;
