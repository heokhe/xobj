# XOBJ: extreme methods for objects ✨
A tiny and delightful library for manipulating objects with it's own strong prototype.
> **IMPORTANT NOTICE**: I'm working on v2 with a different API, The current API (v1.1) will become deprecated. The old API is available on branch `v1`.
## Features
- [Methods](#methods) can be chained (chainable ones are specified with ⛓✔️)
- Memoizer for caching objects
- No dependencies
## Installation
```shell
npm i -S @hkh12/xobj # or yarn add @hkh12/xobj
```
## Usage
```js
const xobj = require('xobj')

xobj({
  foo: 'bar',
  baz: 'qux',
  a: 0,
  b: null
})
// now you have your X-Object (it's not a regular object, it's an instance of Xobj)
```
### Methods
- `get()`: converts to plain object and returns it.
- `toJSON()`: converts to JSON.
- `contains(keys)`: checks if the given keys exist in object. if key is a string, it returns a boolean. if it's an array, if returns an object.
- `mergeWith(...objects)`: merges the object with the given object. (it does not return anything, just sets a new value to object. to read it you'll new to call `.get()`)
- `forEachProp(fn)`: works like `Array.prototype.forEach` ⛓✔️
- `filter(fn)`: works like `Array.prototype.filter` ⛓✔️
- `subset(keys)`: returns a copy of object with only given keys. ⛓✔️
- `clone(onlyObject?: boolean)`: clones the X-Object or Object.