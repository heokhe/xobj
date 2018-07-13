var xobj = (function () {
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

	var index = {
		merge: merge
	};

	return index;

}());
