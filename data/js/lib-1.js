import {
    t as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = e((e => {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.lazyWithPreload = void 0;
    var n = t();

    function r(e) {
        var t = (0, n.lazy)(e),
            r, i, a = (0, n.forwardRef)(function(e, i) {
                var a = (0, n.useRef)(r ?? t);
                return (0, n.createElement)(a.current, Object.assign(i ? {
                    ref: i
                } : {}, e))
            });
        return a.preload = function() {
            return i || (i = e().then(function(e) {
                return r = e.default, r
            })), i
        }, a
    }
    e.lazyWithPreload = r, e.default = r
}));
export {
    n as t
};