const {has} = require('..')

const testObj = {
	bar: true,
	qux: false,
	pot: 1
}
it('determines existance of keys in object', () => {
	expect(has(testObj, 'pot')).toBe(true)
	expect(has(testObj, ['pot', 'bar'])).toBe(true)
})