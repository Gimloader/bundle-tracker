import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./noop.js";
var r = e(t());

function i(e, t, i, a) {
    t === void 0 && (t = 0), i === void 0 && (i = !0), a === void 0 && (a = !1);
    var o = (0, r.useRef)();
    (0, r.useEffect)(function() {
        o.current = e
    });

    function s() {
        o.current && o.current()
    }(0, r.useEffect)(function() {
        if (typeof window < `u`) {
            if (i) {
                a && s();
                var e = window.setInterval(s, t);
                return function() {
                    window.clearInterval(e)
                }
            }
        } else console.warn(`useIntervalWhen: window is undefined.`);
        return n
    }, [i, t])
}
export {
    i as t
};