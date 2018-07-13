const {merge} = require('..')

const obj1 = {foo: true, bat: { pot: 1 }}
const obj2 = {baz: 'qux', bat: { pox: 5 }}
it('merges with no recursion correctly', () => {
	expect(merge(obj1, obj2)).toEqual({
		foo: true,
		baz: 'qux',
		bat: {pox: 5}
	})
})