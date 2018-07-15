# Class

# Function

## `forEach(object: Object, cb: function, options: Object, options.pass: string, options.fromRight: boolean)`

Loops through object and executes the callback function.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| object | Object |  |
| cb | function |  |
| options | Object |  |
| options.pass | string | nullable: true, optional: true, default: "both" | Choose what arguments to pass to callback. (`values`, `keys` or `both`) |
| options.fromRight | boolean | nullable: true, optional: true, default: false | If true, starts the loop from right (in a reversed order). |

## `getByPath(object: Object, path: string): *`

Gets from object by path.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| object | Object |  |
| path | string |  |

## `has(object: Object, key: any): boolean`

Determines if object has the given key(s).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| object | Object |  |
| key | any |  | Could be everything: String, an array of strings, or a function that returns a boolean. |

## `is(obj: Object, acceptArrays: boolean): boolean`

Checks if the given argument is an object.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | Object |  |
| acceptArrays | boolean | optional: true, default: false | If true, accepts arrays too. |

## `isPure(obj: Object): boolean`

Checks if the given argument is a pure object.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | Object |  |

## `merge(objects: ...Object): Object`

Merges given objects with no recursion.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| objects | ...Object |  |

## `md(target: Object, source: Object): Object`

Merges with recursion. (deep merge)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | Object |  |
| source | Object |  |

## `only(object: Object, keys: string|string[]): Object`

Gives you only the wanted keys.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| object | Object |  |
| keys | string|string[] |  |

## `parsePath(path: string): string[]`

Parses the path to an array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | string |  |