const {mergeDeep} = require('..')

// mergeDeep
it('deep-merges correctly', () => {
    const no1 = {
        bar: false,
        foo: {
            baz: {
                qux: 5
            },
        }
    }, 
    no2 = {
        foo: {
            baz: {
                dup: 71
            },
        }
    }

    expect(mergeDeep(no1, no2)).toEqual({
        bar: false,
        foo: {
            baz: {
                qux: 5,
                dup: 71
            }
        }
    })
})