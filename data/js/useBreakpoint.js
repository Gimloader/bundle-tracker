import {
    bc as u,
    x as f,
    r as v,
    bf as h
} from "./_index.js";
import {
    u as x
} from "./useForceUpdate.js";
const l = (e, s) => {
        typeof(e == null ? void 0 : e.addEventListener) < "u" ? e.addEventListener("change", s): typeof(e == null ? void 0 : e.addListener) < "u" && e.addListener(s)
    },
    $ = (e, s) => {
        typeof(e == null ? void 0 : e.removeEventListener) < "u" ? e.removeEventListener("change", s): typeof(e == null ? void 0 : e.removeListener) < "u" && e.removeListener(s)
    },
    b = ["xxl", "xl", "lg", "md", "sm", "xs"],
    M = e => ({
        xs: `(max-width: ${e.screenXSMax}px)`,
        sm: `(min-width: ${e.screenSM}px)`,
        md: `(min-width: ${e.screenMD}px)`,
        lg: `(min-width: ${e.screenLG}px)`,
        xl: `(min-width: ${e.screenXL}px)`,
        xxl: `(min-width: ${e.screenXXL}px)`
    }),
    w = e => {
        const s = e,
            t = [].concat(b).reverse();
        return t.forEach((a, i) => {
            const r = a.toUpperCase(),
                n = `screen${r}Min`,
                o = `screen${r}`;
            if (!(s[n] <= s[o])) throw new Error(`${n}<=${o} fails : !(${s[n]}<=${s[o]})`);
            if (i < t.length - 1) {
                const c = `screen${r}Max`;
                if (!(s[o] <= s[c])) throw new Error(`${o}<=${c} fails : !(${s[o]}<=${s[c]})`);
                const d = `screen${t[i+1].toUpperCase()}Min`;
                if (!(s[c] <= s[d])) throw new Error(`${c}<=${d} fails : !(${s[c]}<=${s[d]})`)
            }
        }), e
    },
    L = () => {
        const [, e] = u(), s = M(w(e));
        return f.useMemo(() => {
            const t = new Map;
            let a = -1,
                i = {};
            return {
                responsiveMap: s,
                matchHandlers: {},
                dispatch(r) {
                    return i = r, t.forEach(n => n(i)), t.size >= 1
                },
                subscribe(r) {
                    return t.size || this.register(), a += 1, t.set(a, r), r(i), a
                },
                unsubscribe(r) {
                    t.delete(r), t.size || this.unregister()
                },
                register() {
                    Object.entries(s).forEach(([r, n]) => {
                        const o = ({
                                matches: p
                            }) => {
                                this.dispatch(Object.assign(Object.assign({}, i), {
                                    [r]: p
                                }))
                            },
                            c = window.matchMedia(n);
                        l(c, o), this.matchHandlers[n] = {
                            mql: c,
                            listener: o
                        }, o(c)
                    })
                },
                unregister() {
                    Object.values(s).forEach(r => {
                        const n = this.matchHandlers[r];
                        $(n == null ? void 0 : n.mql, n == null ? void 0 : n.listener)
                    }), t.clear()
                }
            }
        }, [e])
    };

function m(e = !0, s = {}) {
    const t = v.useRef(s),
        a = x(),
        i = L();
    return h(() => {
        const r = i.subscribe(n => {
            t.current = n, e && a()
        });
        return () => i.unsubscribe(r)
    }, []), t.current
}
export {
    b as r, m as u
};