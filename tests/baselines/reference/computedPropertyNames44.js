//// [computedPropertyNames44.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    [s: string]: Foo2;
    get ["get1"]() { return new Foo }
}

class D extends C {
    set ["set1"](p: Foo) { }
}

//// [computedPropertyNames44.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Foo = (function () {
    function Foo() {
    }
    return Foo;
})();
var Foo2 = (function () {
    function Foo2() {
    }
    return Foo2;
})();
var C = (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "get1", {
        get: function () {
            return new Foo;
        },
        enumerable: true,
        configurable: true
    });
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(D.prototype, "set1", {
        set: function (p) {
        },
        enumerable: true,
        configurable: true
    });
    return D;
})(C);
