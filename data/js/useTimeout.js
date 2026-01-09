import {
    n as l
} from "./motion.js";
import {
    r as e
} from "./_index.js";
import {
    u as v
} from "./useWarningOnMountInDevelopment.js";

function w(u, n) {
    n === void 0 && (n = 0), v();
    var i = e.useState(!1),
        t = i[0],
        a = i[1],
        r = e.useRef();
    e.useEffect(function() {
        r.current = u
    }, [u]);

    function s() {
        r.current && r.current(), o()
    }
    var o = e.useCallback(function() {
            a(!1)
        }, []),
        f = e.useCallback(function() {
            a(!0)
        }, []);
    return e.useEffect(function() {
        if (t)
            if (typeof window < "u") {
                var c = window.setTimeout(s, n);
                return function() {
                    window.clearTimeout(c)
                }
            } else console.warn("useTimeout: window is undefined.");
        return l
    }, [t, n]), {
        clear: o,
        isActive: t,
        start: f,
        stop: o
    }
}
export {
    w as u
};