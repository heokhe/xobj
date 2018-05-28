type key = number | string
type keyList = [number | string]

interface Xobj {
    constructor(obj: object);

    private _obj: object;
    private _new(obj: object): Xobj

    get: () => object;

    filter(fn: (element: any, key: key) => any): Xobj;

    subset(keys: keyList | key): Xobj;

    forEachProp(fn: (element: any, key: key) => any): Xobj;

    toJSON: () => string;

    contains(key: key | keyList): boolean | {
        [x: key] : boolean
    };

    mergeWith(...objects: object[]): void;

    clone(onlyObject?: boolean): object | Xobj
}

declare function xobj(obj: object): Xobj

export = xobj