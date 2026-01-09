import {
    r as o
} from "./_index.js";
import {
    u as v
} from "./index-1.js";
const E = (e, n = 100, u = !1) => {
        const r = v(e),
            t = o.useRef(),
            s = [n, u, r];

        function i() {
            t.current && clearTimeout(t.current), t.current = void 0
        }
        o.useEffect(() => i, s);

        function c() {
            t.current = void 0
        }
        return o.useCallback(function() {
            const l = arguments,
                {
                    current: d
                } = t;
            if (d === void 0 && u) return t.current = setTimeout(c, n), r.current.apply(null, l);
            d && clearTimeout(d), t.current = setTimeout(() => {
                t.current = void 0, r.current.apply(null, l)
            }, n)
        }, s)
    },
    b = (e, n, u) => {
        const r = o.useState(e);
        return [r[0], E(r[1], n, u)]
    };

function a(e, n, u, r) {
    const t = o.useRef(u),
        s = o.useRef(r);
    o.useEffect(() => {
        t.current = u, s.current = r
    }), o.useEffect(() => {
        const i = e && "current" in e ? e.current : e;
        if (!i) return;
        let c = 0;

        function l(...p) {
            c || t.current.apply(this, p)
        }
        i.addEventListener(n, l);
        const d = s.current;
        return () => {
            c = 1, i.removeEventListener(n, l), d && d()
        }
    }, [e, n])
}
const w = {},
    f = typeof window > "u" ? null : window,
    h = f && typeof f.visualViewport < "u" ? f.visualViewport : null,
    m = () => [document.documentElement.clientWidth, document.documentElement.clientHeight],
    z = function(e) {
        e === void 0 && (e = w);
        const {
            wait: n,
            leading: u,
            initialWidth: r = 0,
            initialHeight: t = 0
        } = e, [s, i] = b(typeof document > "u" ? [r, t] : m, n, u), c = () => i(m);
        return a(f, "resize", c), a(h, "resize", c), a(f, "orientationchange", c), s
    },
    W = e => z(e)[0];
export {
    E as a, W as u
};