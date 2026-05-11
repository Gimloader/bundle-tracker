import {
    d as y,
    F as H,
    j as l,
    b5 as q,
    r as m,
    u as F,
    ar as d,
    o as D,
    a9 as L
} from "./_index.js";
import {
    o as M
} from "./mobxreact.esm.js";
import {
    H as h
} from "./Hook.js";
import {
    E as j
} from "./Sizes.js";
import {
    I as P
} from "./index-3.js";
import {
    T as $
} from "./index-7.js";
import {
    S as I
} from "./index-8.js";
import {
    L as A
} from "./AppTypes.js";
const J = y.div.attrs({
        className: "maxWidth flex vc between"
    })`
  box-sizing: border-box;
  padding: 13px 20px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.23s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`,
    Q = y.div.attrs({
        className: "flex vc"
    })``,
    R = y.div`
  font-size: 23px;
  margin-right: 10px;
`,
    U = y.div`
  font-size: 23px;
  font-weight: ${H.Bold};
`,
    G = y.div`
  font-size: 15px;
  margin-top: -2px;
`,
    K = y.div`
  flex-shrink: 0;
  margin-left: 25px;
`,
    b = e => l.jsxs(J, {
        children: [l.jsxs(Q, {
            children: [e.emoji ? l.jsx(R, {
                children: e.emoji
            }) : null, l.jsxs("div", {
                children: [l.jsx(U, {
                    children: e.title
                }), e.description ? l.jsx(G, {
                    children: e.description
                }) : null]
            })]
        }), l.jsx(K, {
            children: e.children
        })]
    }),
    _ = e => {
        const n = t => e.onValueChanged(t);
        return l.jsx(b, {
            emoji: e.emoji,
            title: e.title,
            description: e.description,
            children: l.jsx(I, {
                value: e.value,
                style: {
                    width: e.customWidth || j.optionWidth
                },
                size: "large",
                onChange: n,
                disabled: e.readOnly,
                children: e.options.map(t => l.jsx(I.Option, {
                    value: t.value,
                    children: t.name
                }, `${e.title||"no-title"}-${t.value}`))
            })
        })
    },
    X = e => e === "" ? "" : isNaN(Number(e)) ? String(e) : q(Number(e)),
    Y = e => {
        const [n, t] = m.useState(e.value), [i, a] = m.useState(e.value), [s, u, o] = F(!1), c = f => {
            t(f)
        };
        m.useEffect(() => {
            a(e.value), t(e.value)
        }, [e.value]);
        const r = () => {
            n !== i && e.onChange(n), o(), t(e.value)
        };
        return l.jsx($, {
            ...e,
            value: s ? n : i,
            onChange: c,
            onFocus: u,
            onBlur: r
        })
    },
    Z = e => {
        const n = m.useCallback(i => {
            if (d.isNil(i) && e.allowEmpty) return i;
            let a = i ? e.step ? Math.round(i / e.step) * e.step : i : 0;
            return !d.isNil(e.min) && a < e.min ? a = e.min : !d.isNil(e.max) && a > e.max && (a = e.max), a
        }, [e.max, e.min, e.step]);
        m.useEffect(() => {
            d.isNil(e.value) || e.max && e.value > e.max && t(n(e.max))
        }, [e.value, e.max]);
        const t = i => {
            e.onValueChanged(n(i))
        };
        return l.jsx(b, {
            emoji: e.emoji,
            title: e.title,
            description: e.description,
            children: l.jsx(Y, {
                size: "large",
                formatter: X,
                value: e.value,
                max: e.max,
                min: e.min,
                step: e.step,
                style: {
                    width: e.customWidth || j.optionWidth
                },
                onChange: t,
                disabled: e.readOnly
            })
        })
    },
    W = (e, n) => {
        var i;
        return (i = JSON.parse(localStorage.getItem(A.hookSavedOptions) || "{}")[n]) == null ? void 0 : i[e]
    },
    p = e => {
        var s;
        const {
            hookJSON: n,
            experienceId: t,
            kitId: i
        } = e, a = {};
        return (s = n == null ? void 0 : n.hooks) == null || s.forEach(u => {
            if (u.type === h.kit) a[u.key] = i || "";
            else if (u.type == h.selectBox) {
                const o = u.options;
                if (o.options.length) {
                    let c = o.options.find(r => r === o.defaultOption) || o.options[0];
                    if (t) {
                        const r = W(u.key, t);
                        if (r) {
                            const f = o.options.find(N => N === r);
                            f && (c = f)
                        }
                    }
                    c && (a[u.key] = c)
                }
            } else if (u.type === h.number) {
                const o = u.options;
                let c = o.defaultValue;
                if (t) {
                    const r = W(u.key, t);
                    if (!d.isNil(r) && typeof r == "number") {
                        let f = !1;
                        (d.isNil(o.min) || r > o.min) && (d.isNil(o.max) || r < o.max) && (d.isNil(o.step) || r % o.step === 0) && (f = !0), f && (c = r)
                    }
                }
                a[u.key] = c
            }
        }), a
    },
    ee = e => {
        const n = t => {
            e.onValueChanged(t.target.value)
        };
        return l.jsx(b, {
            emoji: e.emoji,
            title: e.title,
            description: e.description,
            children: l.jsx(P, {
                size: "large",
                value: e.value,
                placeholder: e.placeholder,
                style: {
                    width: e.customWidth || j.optionWidth
                },
                onChange: n,
                disabled: e.readOnly
            })
        })
    };
var k = (e => (e.editor = "editor", e.experiencePicker = "experiencePicker", e))(k || {}),
    B = (e => (e.kit = "kit", e))(B || {});
const S = e => {
        let n, t;
        return n = e.key, e.displayName && (n = e.displayName), e.displayDescription && (t = e.displayDescription), {
            title: n,
            description: t
        }
    },
    te = e => {
        let {
            title: n,
            description: t
        } = S(e.hook);
        if (e.location === k.editor) {
            const i = "We're showing this hook for testing purposes, but this hook won't be visible when choosing this map from the Mode Picker.";
            t ? t += ` - ${i}` : t = i
        }
        return l.jsx(ee, {
            title: n,
            description: t,
            value: e.value,
            onValueChanged: e.onChange,
            placeholder: "Kit ID",
            readOnly: e.readOnly
        })
    },
    ne = e => {
        const {
            title: n,
            description: t
        } = S(e.hook), i = e.hook.options, a = s => {
            if (d.isNil(s) && !d.isNil(i.defaultValue)) {
                e.onChange(i.defaultValue);
                return
            }
            e.onChange(s)
        };
        return l.jsx(Z, {
            title: n,
            description: t,
            value: e.value,
            onValueChanged: a,
            min: i.min,
            max: i.max,
            step: i.step,
            allowEmpty: !0,
            readOnly: e.readOnly
        })
    },
    ie = e => {
        const {
            title: n,
            description: t
        } = S(e.hook), i = e.hook.options;
        return l.jsx(_, {
            title: n,
            description: t,
            value: e.value,
            onValueChanged: e.onChange,
            options: i.options.map(a => ({
                value: a,
                name: a
            })),
            readOnly: e.readOnly
        })
    },
    ae = e => {
        const n = e.state[e.hook.key],
            t = i => {
                e.modifyState(e.hook.key, i)
            };
        return e.hook.type === h.selectBox ? l.jsx(ie, {
            value: n,
            onChange: t,
            hook: e.hook,
            readOnly: e.readOnly
        }) : e.hook.type === h.kit ? l.jsx(te, {
            value: n,
            onChange: t,
            hook: e.hook,
            location: e.location,
            readOnly: e.readOnly
        }) : e.hook.type === h.number ? l.jsx(ne, {
            value: n,
            onChange: t,
            hook: e.hook,
            readOnly: e.readOnly
        }) : null
    };
var O = (e => (e.hookValue = "hookValue", e.modeType = "modeType", e))(O || {}),
    C = (e => (e.equal = "EQUAL", e.notEqual = "NOT_EQUAL", e))(C || {}),
    T = (e => (e.equal = "EQUAL", e.notEqual = "NOT_EQUAL", e))(T || {});
const z = (e, n) => {
        var i, a;
        const t = [];
        return (a = (i = e == null ? void 0 : e.hooks) == null ? void 0 : i.hooks) == null || a.forEach(s => {
            var o, c;
            if (s.type === h.kit && !!n[s.key] && e.location === k.experiencePicker) return;
            if (s.type === h.selectBox) {
                const r = s.options;
                if (!((o = r == null ? void 0 : r.options) != null && o.length)) return
            }(c = s == null ? void 0 : s.hiddenScenarios) != null && c.find(r => {
                var E, V;
                return !((E = r.conditions) != null && E.length) ? !1 : !!((V = r.conditions) == null ? void 0 : V.every(v => {
                    if (v.type === O.hookValue) {
                        const x = v.options,
                            g = x.value,
                            w = n[x.key];
                        if (x.compare === C.equal) {
                            if (g == w) return !0
                        } else if (x.compare === C.notEqual && g != w) return !0
                    } else if (v.type === O.modeType) {
                        const x = e.modeType,
                            g = v.options;
                        return g.compare === T.equal ? x === g.mode : x !== g.mode
                    }
                    return !1
                }))
            }) || t.push(s)
        }), t
    },
    le = (e, n) => {
        const t = [];
        return z({
            ...e,
            location: k.editor
        }, n).forEach(a => {
            a.type === h.kit && n[a.key] && t.push({
                type: B.kit,
                value: n[a.key]
            })
        }), d.uniqBy(t, "value")
    },
    me = M(e => {
        const [n] = m.useState(() => D(e.defaultState || p({
            hookJSON: e.hooks
        }))), t = (u, o) => {
            n[u] = o
        }, i = L(n), a = JSON.stringify(i);
        m.useEffect(() => {
            e.onConnectedResourcesChange && e.onConnectedResourcesChange(le(e, i)), !e.readOnly && e.onStateChange && e.onStateChange(i)
        }, [a, e.readOnly]);
        const s = z(e, i);
        return l.jsxs(l.Fragment, {
            children: [e.header ? e.header(s.length) : null, s.map((u, o) => l.jsxs(m.Fragment, {
                children: [l.jsx(ae, {
                    hook: u,
                    state: i,
                    modifyState: t,
                    location: e.location,
                    readOnly: e.readOnly
                }), o !== s.length - 1 && l.jsx("div", {
                    style: {
                        height: 10
                    }
                })]
            }, `hook-form-${u.key}`)), e.footer ? e.footer(s.length) : null]
        })
    });
export {
    p as H, B as I, T as M, Z as N, b as O, _ as S, J as a, U as b, G as c, K as d, Q as e, me as f, k as g, C as h, O as i, Y as j, X as n
};