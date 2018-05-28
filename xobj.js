class Xobj {
	constructor(obj){
		this._obj = obj
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
}

module.exports = Xobj