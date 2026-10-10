import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    n
} from "./module-1.js";
var r = e(t()),
    i = (e, t = 100, i = !1) => {
        let a = n(e),
            o = r.useRef(),
            s = [t, i, a];

        function c() {
            o.current && clearTimeout(o.current), o.current = void 0
        }
        r.useEffect(() => c, s);

        function l() {
            o.current = void 0
        }
        return r.useCallback(function() {
            let e = arguments,
                {
                    current: n
                } = o;
            if (n === void 0 && i) return o.current = setTimeout(l, t), a.current.apply(null, e);
            n && clearTimeout(n), o.current = setTimeout(() => {
                o.current = void 0, a.current.apply(null, e)
            }, t)
        }, s)
    },
    a = (e, t, n) => {
        let a = r.useState(e);
        return [a[0], i(a[1], t, n)]
    };

function o(e, t, n, i) {
    let a = r.useRef(n),
        o = r.useRef(i);
    r.useEffect(() => {
        a.current = n, o.current = i
    }), r.useEffect(() => {
        let n = e && `current` in e ? e.current : e;
        if (!n) return;
        let r = 0;

        function i(...e) {
            r || a.current.apply(this, e)
        }
        n.addEventListener(t, i);
        let s = o.current;
        return () => {
            r = 1, n.removeEventListener(t, i), s && s()
        }
    }, [e, t])
}
var s = {},
    c = typeof window > `u` ? null : window,
    l = c && c.visualViewport !== void 0 ? c.visualViewport : null,
    u = () => [document.documentElement.clientWidth, document.documentElement.clientHeight],
    d = function(e) {
        e === void 0 && (e = s);
        let {
            wait: t,
            leading: n,
            initialWidth: r = 0,
            initialHeight: i = 0
        } = e, [d, f] = a(typeof document > `u` ? [r, i] : u, t, n), p = () => f(u);
        return o(c, `resize`, p), o(l, `resize`, p), o(c, `orientationchange`, p), d
    },
    f = e => d(e)[0];
export {
    i as n, f as t
};