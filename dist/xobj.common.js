'use strict';

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

/**
 * Determines if `object` has the given key(s).
 * @param {object} object 
 * @param {any} key 
 * @returns {boolean} A boolean
 */

function has (object, key) {
  // more options will come (like functions, regular expressions, ...)
  if (Array.isArray(key)) return Object.keys(object).filter(function (e) {
    return key.includes(e);
  }).every(function (e) {
    return e in object;
  });else return key in object;
}

/* import mergeAll from './mergeAll' */

var index = { merge: merge, only: only, has: has };

module.exports = index;
