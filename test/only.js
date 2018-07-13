const {only} = require('..')

const longObject = {
	name: 'jack',
	fruit: 'apple',
	age: 30,
	job: 'doctor'
}
it('subtracts object to given keys', () => {
	expect(only(longObject, ['age', 'name'])).toEqual({
		name: 'jack',
		age: 30
	})
	expect(only(longObject)).toEqual(longObject)
	expect(only(longObject, true)).toEqual(longObject)
	expect(only(longObject, [])).toEqual(longObject)
	expect(only(longObject, '*')).toEqual(longObject)
})