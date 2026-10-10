import {
    a as e,
    i as t,
    o as n,
    r
} from "./assertThisInitialized.js";
n();

function i(e) {
    try {
        return Function.toString.call(e).indexOf(`[native code]`) !== -1
    } catch {
        return typeof e == `function`
    }
}

function a(t, n, i) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, n);
    var o = new(t.bind.apply(t, a));
    return i && e(o, i.prototype), o
}
n();

function o(n) {
    var r = typeof Map == `function` ? new Map : void 0;
    return o = function(n) {
        if (n === null || !i(n)) return n;
        if (typeof n != `function`) throw TypeError(`Super expression must either be null or a function`);
        if (r !== void 0) {
            if (r.has(n)) return r.get(n);
            r.set(n, o)
        }

        function o() {
            return a(n, arguments, t(this).constructor)
        }
        return o.prototype = Object.create(n.prototype, {
            constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e(o, n)
    }, o(n)
}
export {
    o as t
};