# Class

# Function

## `has(object: Object, key: any): boolean`

Determines if `object` has the given key(s).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| object | Object |  |
| key | any |  | Could be everything: String, an array of strings, or a function that returns a boolean. |

## `merge(objects: ...Object): Object`

Merges given objects with no recursion.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| objects | ...Object |  |

## `mergeAll(target: Object, source: Object)`

Merges with recursion.

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

## `parsePath(path: string)): string[]`

Parses the path to an array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | string) |  |