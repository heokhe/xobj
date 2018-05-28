class Xobj {
	constructor(obj){
		this._obj = obj
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
		this._obj = res
		return this
	}
	subtract(keys){
		this.filter((el, key) => keys.includes(key))
		return this
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
}

module.exports = Xobj