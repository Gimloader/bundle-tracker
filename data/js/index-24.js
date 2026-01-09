import {
    x as r
} from "./_index.js";
var d = "__wrap_b",
    f = "__wrap_o",
    h = typeof window > "u",
    p = h ? r.useEffect : r.useLayoutEffect,
    _ = (n, a, e) => {
        e = e || document.querySelector(`[data-br="${n}"]`);
        let i = e.parentElement,
            s = b => e.style.maxWidth = b + "px";
        e.style.maxWidth = "";
        let t = i.clientWidth,
            u = i.clientHeight,
            l = t / 2 - .25,
            c = t + .5,
            o;
        if (t) {
            for (; l + 1 < c;) o = Math.round((l + c) / 2), s(o), i.clientHeight === u ? c = o : l = o;
            s(c * a + t * (1 - a))
        }
        e.__wrap_o || typeof ResizeObserver < "u" && (e.__wrap_o = new ResizeObserver(() => {
            self.__wrap_b(0, +e.dataset.brr, e)
        })).observe(i)
    },
    v = _.toString(),
    m = (n, a = "") => r.createElement("script", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (n ? "" : `self.${d}=${v};`) + a
        }
    }),
    y = r.createContext(!1),
    x = ({
        children: n
    }) => r.createElement(y.Provider, {
        value: !0
    }, m(!1), n),
    g = ({
        as: n = "span",
        ratio: a = 1,
        children: e,
        ...i
    }) => {
        let s = r.useId(),
            t = r.useRef(),
            u = r.useContext(y);
        return p(() => {
            t.current && (self[d] = _)(0, a, t.current)
        }, [e, a]), p(() => () => {
            if (!t.current) return;
            let l = t.current[f];
            !l || (l.disconnect(), delete t.current[f])
        }, []), r.createElement(r.Fragment, null, r.createElement(n, {
            ...i,
            "data-br": s,
            "data-brr": a,
            ref: t,
            style: {
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit"
            },
            suppressHydrationWarning: !0
        }, e), m(u, `self.${d}("${s}",${a})`))
    },
    E = g;
export {
    E as B, x as h
};