const {parsePath} = require('..')

it('parses path successfully', () => {
	expect(parsePath('a.b.c')).toEqual(['a', 'b', 'c'])
	expect(parsePath('a.b.c.0["d"]')).toEqual(['a', 'b', 'c', '0', 'd'])
})