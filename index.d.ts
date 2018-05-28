type key = number | string
type keyList = [number | string]

export default interface XobjInterface {
    constructor(obj: object);

    private _obj: object;
    private _new(obj: object): XobjInterface

    get: () => object;

    filter(fn: ((element, key) => any)): XobjInterface;

    subtract(keys: keyList | key): XobjInterface;

    forEachProp(fn: (element, key) => any): XobjInterface;

    toJSON: () => string;

    contains(key: key | keyList): boolean | { [x: key] : boolean };

    mergeWith(...objects: object[]): void
}

declare function xobj(obj: object): XobjInterface

export = xobj