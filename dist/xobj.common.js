'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Xobj = function () {
	function Xobj(obj) {
		_classCallCheck(this, Xobj);

		this._obj = obj;
	}

	_createClass(Xobj, [{
		key: '_new',
		value: function _new(obj) {
			return new Xobj(obj);
		}
	}, {
		key: 'forEachProp',
		value: function forEachProp(fn) {
			var _this = this;

			Object.keys(this._obj).forEach(function (key) {
				return fn(_this._obj[key], key);
			});
			return this;
		}
	}, {
		key: 'filter',
		value: function filter(fn) {
			var res = {};
			this.forEachProp(function (el, key) {
				if (!!fn(el, key)) res[key] = el;
			});
			return this._new(res);
		}
	}, {
		key: 'subset',
		value: function subset(keys) {
			if ((typeof keys === 'undefined' ? 'undefined' : _typeof(keys)) !== 'object') keys = [keys];
			return this.filter(function (el, key) {
				return keys.includes(key);
			});
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			return JSON.stringify(this._obj);
		}
	}, {
		key: 'contains',
		value: function contains(keys) {
			if ((typeof keys === 'undefined' ? 'undefined' : _typeof(keys)) !== 'object') {
				return keys in this._obj;
			} else {
				var res = {};
				keys.forEach(function (e) {
					res[e] = false;
				});
				this.forEachProp(function (el, key) {
					if (keys.includes(key)) res[key] = true;
				});
				return res;
			}
		}
	}, {
		key: 'get',
		value: function get() {
			return this._obj;
		}
	}, {
		key: 'mergeWith',
		value: function mergeWith() {
			var res = this._obj;

			for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
				objects[_key] = arguments[_key];
			}

			objects.forEach(function (e) {
				Object.assign(res, e);
			});
			this._obj = res;
		}
	}, {
		key: 'clone',
		value: function clone() {
			var onlyObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			var res = {};

			if (!!onlyObject) {
				res = JSON.parse(JSON.stringify(this._obj));
			} else {
				res = this;
			}

			return res;
		}
	}]);

	return Xobj;
}();

var xobj = Xobj;

function xobj$1(obj) {
	return new xobj(obj);
}

var lib = xobj$1;

module.exports = lib;
