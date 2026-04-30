import {
    n as M,
    u as T,
    P as L,
    L as $,
    a as b,
    b as U
} from "./motion.js";
import {
    r as e
} from "./_index.js";
import {
    u as F,
    a as K
} from "./use-force-update.js";

function j(s, o, t) {
    o === void 0 && (o = 0), t === void 0 && (t = !0);
    var n = e.useRef();
    e.useEffect(function() {
        n.current = s
    });

    function l() {
        n.current && n.current()
    }
    e.useEffect(function() {
        if (t)
            if (typeof window < "u") {
                var c = window.setTimeout(l, o);
                return function() {
                    window.clearTimeout(c)
                }
            } else console.warn("useTimeoutWhen: window is undefined.");
        return M
    }, [t])
}
class O extends e.Component {
    getSnapshotBeforeUpdate(o) {
        const t = this.props.childRef.current;
        if (t && o.isPresent && !this.props.isPresent) {
            const n = this.props.sizeRef.current;
            n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function W({
    children: s,
    isPresent: o
}) {
    const t = e.useId(),
        n = e.useRef(null),
        l = e.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return e.useInsertionEffect(() => {
        const {
            width: c,
            height: f,
            top: u,
            left: h
        } = l.current;
        if (o || !n.current || !c || !f) return;
        n.current.dataset.motionPopId = t;
        const d = document.createElement("style");
        return document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${u}px !important;
            left: ${h}px !important;
          }
        `), () => {
            document.head.removeChild(d)
        }
    }, [o]), e.createElement(O, {
        isPresent: o,
        childRef: n,
        sizeRef: l
    }, e.cloneElement(s, {
        ref: n
    }))
}
const g = ({
    children: s,
    initial: o,
    isPresent: t,
    onExitComplete: n,
    custom: l,
    presenceAffectsLayout: c,
    mode: f
}) => {
    const u = T(G),
        h = e.useId(),
        d = e.useMemo(() => ({
            id: h,
            initial: o,
            isPresent: t,
            custom: l,
            onExitComplete: a => {
                u.set(a, !0);
                for (const i of u.values())
                    if (!i) return;
                n && n()
            },
            register: a => (u.set(a, !1), () => u.delete(a))
        }), c ? void 0 : [t]);
    return e.useMemo(() => {
        u.forEach((a, i) => u.set(i, !1))
    }, [t]), e.useEffect(() => {
        !t && !u.size && n && n()
    }, [t]), f === "popLayout" && (s = e.createElement(W, {
        isPresent: t
    }, s)), e.createElement(L.Provider, {
        value: d
    }, s)
};

function G() {
    return new Map
}
const E = s => s.key || "";

function S(s, o) {
    s.forEach(t => {
        const n = E(t);
        o.set(n, t)
    })
}

function B(s) {
    const o = [];
    return e.Children.forEach(s, t => {
        e.isValidElement(t) && o.push(t)
    }), o
}
const q = ({
    children: s,
    custom: o,
    initial: t = !0,
    onExitComplete: n,
    exitBeforeEnter: l,
    presenceAffectsLayout: c = !0,
    mode: f = "sync"
}) => {
    l && (f = "wait");
    let [u] = F();
    const h = e.useContext($).forceRender;
    h && (u = h);
    const d = K(),
        a = B(s);
    let i = a;
    const p = new Set,
        C = e.useRef(i),
        x = e.useRef(new Map).current,
        R = e.useRef(!0);
    if (b(() => {
            R.current = !1, S(a, x), C.current = i
        }), U(() => {
            R.current = !0, x.clear(), p.clear()
        }), R.current) return e.createElement(e.Fragment, null, i.map(r => e.createElement(g, {
        key: E(r),
        isPresent: !0,
        initial: t ? void 0 : !1,
        presenceAffectsLayout: c,
        mode: f
    }, r)));
    i = [...i];
    const w = C.current.map(E),
        y = a.map(E),
        v = w.length;
    for (let r = 0; r < v; r++) {
        const m = w[r];
        y.indexOf(m) === -1 && p.add(m)
    }
    return f === "wait" && p.size && (i = []), p.forEach(r => {
        if (y.indexOf(r) !== -1) return;
        const m = x.get(r);
        if (!m) return;
        const I = w.indexOf(r),
            P = () => {
                x.delete(r), p.delete(r);
                const z = C.current.findIndex(k => k.key === r);
                if (C.current.splice(z, 1), !p.size) {
                    if (C.current = a, d.current === !1) return;
                    u(), n && n()
                }
            };
        i.splice(I, 0, e.createElement(g, {
            key: E(m),
            isPresent: !1,
            onExitComplete: P,
            custom: o,
            presenceAffectsLayout: c,
            mode: f
        }, m))
    }), i = i.map(r => {
        const m = r.key;
        return p.has(m) ? r : e.createElement(g, {
            key: E(r),
            isPresent: !0,
            presenceAffectsLayout: c,
            mode: f
        }, r)
    }), e.createElement(e.Fragment, null, p.size ? i : i.map(r => e.cloneElement(r)))
};
export {
    q as A, j as u
};