export default interface XobjInterface {
    constructor(obj: object);
    private _obj: object;
    get: () => object;
    filter(fn: ((element, key) => any)): XobjInterface;
    subtract(keys: [string | number]): XobjInterface;
    forEachProp(fn: (element, key) => any): XobjInterface;
    toJSON: () => string;
    contains(key: (string | number) | [number | string]): boolean | {
        [x: string | number]: boolean
    }
}

declare function xobj(obj: object): XobjInterface

export = xobj