const memoizer = require('./memoizer')

class Xobj {
	constructor(obj){
		if (memoizer.includes(obj)){
			this._obj = memoizer.find(e => e === obj)
		} else {
			this._obj =  obj
			memoizer.push(obj)
		}
	}
	_new(obj){
		return new Xobj(obj)
	}
	forEachProp(fn){
		Object.keys(this._obj).forEach(key => fn(this._obj[key], key))
		return this
	}
	filter(fn){
		let res = {}
		this.forEachProp((el, key) => {
			if (!!fn(el, key)) res[key] = el
		})
		return this._new(res)
	}
	subset(keys){
		if (typeof keys !== 'object') keys = [keys]
		return this.filter((el, key) => keys.includes(key))
	}
	toJSON(){
		return JSON.stringify(this._obj)
	}
	contains(keys){
		if (typeof keys !== 'object'){
			return keys in this._obj 
		} else {
			let res = {}
			keys.forEach(e => {
				res[e] = false
			})
			this.forEachProp((el, key) => {
				if (keys.includes(key)) res[key] = true
			})
			return res
		}
	}
	get(){
		return this._obj
	}
	mergeWith(...objects){
		let res = this._obj
		objects.forEach(e => {
			Object.assign(res, e)
		})
		this._obj = res
	}
	clone(onlyObject = true){
		let res = {}

		if (!!onlyObject){
			res = JSON.parse(JSON.stringify(this._obj))
		} else {
			res = this
		}

		return res
	}
}

module.exports = Xobj