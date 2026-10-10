import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = e(t(), 1),
    r = `__wrap_b`,
    i = `__wrap_o`,
    a = typeof window > `u` ? n.useEffect : n.useLayoutEffect,
    o = (e, t, n) => {
        n = n || document.querySelector(`[data-br="${e}"]`);
        let r = n.parentElement,
            i = e => n.style.maxWidth = e + `px`;
        n.style.maxWidth = ``;
        let a = r.clientWidth,
            o = r.clientHeight,
            s = a / 2 - .25,
            c = a + .5,
            l;
        if (a) {
            for (; s + 1 < c;) l = Math.round((s + c) / 2), i(l), r.clientHeight === o ? c = l : s = l;
            i(c * t + a * (1 - t))
        }
        n.__wrap_o || typeof ResizeObserver < `u` && (n.__wrap_o = new ResizeObserver(() => {
            self.__wrap_b(0, +n.dataset.brr, n)
        })).observe(r)
    },
    s = o.toString(),
    c = (e, t = ``) => n.createElement(`script`, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (e ? `` : `self.${r}=${s};`) + t
        }
    }),
    l = n.createContext(!1),
    u = ({
        children: e
    }) => n.createElement(l.Provider, {
        value: !0
    }, c(!1), e),
    d = ({
        as: e = `span`,
        ratio: t = 1,
        children: s,
        ...u
    }) => {
        let d = n.useId(),
            f = n.useRef(),
            p = n.useContext(l);
        return a(() => {
            f.current && (self[r] = o)(0, t, f.current)
        }, [s, t]), a(() => () => {
            if (!f.current) return;
            let e = f.current[i];
            !e || (e.disconnect(), delete f.current[i])
        }, []), n.createElement(n.Fragment, null, n.createElement(e, {
            ...u,
            "data-br": d,
            "data-brr": t,
            ref: f,
            style: {
                display: `inline-block`,
                verticalAlign: `top`,
                textDecoration: `inherit`
            },
            suppressHydrationWarning: !0
        }, s), c(p, `self.${r}("${d}",${t})`))
    };
export {
    u as n, d as t
};