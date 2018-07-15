const x_ = require('..')
const obj1 = {foo: true}
const obj2 = {baz: 'qux'}
const nested = {
    a: {
        b: [{
            "c": 45
        }]
    }
}
const longObject = {
	name: 'jack',
	fruit: 'apple',
	age: 30,
	job: 'doctor'
}
// is
it('detects objects', () => {
    expect(x_.is({})).toBe(true)
    expect(x_.is()).toBe(false)
    expect(x_.is([])).toBe(false)
    expect(x_.is([], true)).toBe(true)
})
// isPure
it('detects pure object', () => {
    expect(x_.isPure({})).toBe(true)
    expect(x_.isPure([])).toBe(false)
})
// merge
it('merges', () => {
	expect(x_.merge(obj1, obj2)).toEqual(Object.assign({}, obj1, obj2))
})
// has
it('determines existance of keys in object', () => {
	expect(x_.has(longObject, 'name')).toBe(true)
	expect(x_.has(longObject, ['name', 'age'])).toBe(true)
	expect(x_.has(longObject, (key, value) => typeof value === 'number')).toBe(true)
})
// parsePath
it('parses path', () => {
	expect(x_.parsePath('a.b.c')).toEqual(['a', 'b', 'c'])
	expect(x_.parsePath('a.b.c.0["d"]')).toEqual(['a', 'b', 'c', '0', 'd'])
})
// getByPath
it('gets by path', () => {
    expect(x_.getByPath(nested, "a.b[0][\"c\"]")).toBe(nested.a.b[0].c)
})