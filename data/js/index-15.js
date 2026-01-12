import {
    bI as p,
    aw as m
} from "./_index.js";
var e = {},
    d;

function y() {
    if (d) return e;
    d = 1, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.lazyWithPreload = void 0;
    var a = p();

    function o(n) {
        var f = (0, a.lazy)(n),
            r, t, c = (0, a.forwardRef)(function(s, u) {
                var v = (0, a.useRef)(r ?? f);
                return (0, a.createElement)(v.current, Object.assign(u ? {
                    ref: u
                } : {}, s))
            }),
            i = c;
        return i.preload = function() {
            return t || (t = n().then(function(l) {
                return r = l.default, r
            })), t
        }, i
    }
    return e.lazyWithPreload = o, e.default = o, e
}
var z = y();
const b = m(z);
export {
    b as a, z as l
};