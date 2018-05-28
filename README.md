# XOBJ: extreme methods for objects ✨
## Features
- Methods can be chained
- No dependencies
- Good enough
## Installation
```shell
npm i -S xobj # or yarn add xobj
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
## Methods
- `get`: convert to plain object
- `toJSON`: convert to JSON

> documentation and work is in progress 😉