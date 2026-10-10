import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./noop.js";
import {
    t as r
} from "./useWarningOnMountInDevelopment.js";
var i = e(t());

function a(e, t) {
    t === void 0 && (t = 0), r(`useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.`);
    var a = (0, i.useState)(!1),
        o = a[0],
        s = a[1],
        c = (0, i.useRef)();
    (0, i.useEffect)(function() {
        c.current = e
    }, [e]);

    function l() {
        c.current && c.current(), u()
    }
    var u = (0, i.useCallback)(function() {
            s(!1)
        }, []),
        d = (0, i.useCallback)(function() {
            s(!0)
        }, []);
    return (0, i.useEffect)(function() {
        if (o) {
            if (typeof window < `u`) {
                var e = window.setTimeout(l, t);
                return function() {
                    window.clearTimeout(e)
                }
            }
            console.warn(`useTimeout: window is undefined.`)
        }
        return n
    }, [o, t]), {
        clear: u,
        isActive: o,
        start: d,
        stop: u
    }
}
export {
    a as t
};