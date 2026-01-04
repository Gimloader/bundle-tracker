import {
    n as t
} from "./motion.js";
import {
    r
} from "./_index.js";

function l(u, e, n, f) {
    e === void 0 && (e = 0), n === void 0 && (n = !0), f === void 0 && (f = !1);
    var o = r.useRef();
    r.useEffect(function() {
        o.current = u
    });

    function c() {
        o.current && o.current()
    }
    r.useEffect(function() {
        if (typeof window < "u") {
            if (n) {
                f && c();
                var i = window.setInterval(c, e);
                return function() {
                    window.clearInterval(i)
                }
            }
        } else console.warn("useIntervalWhen: window is undefined.");
        return t
    }, [n, e])
}
export {
    l as u
};