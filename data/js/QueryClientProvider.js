import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            let t = {
                listener: e
            };
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    r = typeof window > `u` || `Deno` in window;

function i() {}

function a(e, t) {
    return typeof e == `function` ? e(t) : e
}

function o(e) {
    return typeof e == `number` && e >= 0 && e !== 1 / 0
}

function s(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function c(e, t, n) {
    return x(e) ? typeof t == `function` ? {
        ...n,
        queryKey: e,
        queryFn: t
    } : {
        ...t,
        queryKey: e
    } : e
}

function l(e, t, n) {
    return x(e) ? [{
        ...t,
        queryKey: e
    }, n] : [e || {}, t]
}

function u(e, t) {
    let {
        type: n = `all`,
        exact: r,
        fetchStatus: i,
        predicate: a,
        queryKey: o,
        stale: s
    } = e;
    if (x(o)) {
        if (r) {
            if (t.queryHash !== f(o, t.options)) return !1
        } else if (!m(t.queryKey, o)) return !1
    }
    if (n !== `all`) {
        let e = t.isActive();
        if (n === `active` && !e || n === `inactive` && e) return !1
    }
    return !(typeof s == `boolean` && t.isStale() !== s || i !== void 0 && i !== t.state.fetchStatus || a && !a(t))
}

function d(e, t) {
    let {
        exact: n,
        fetching: r,
        predicate: i,
        mutationKey: a
    } = e;
    if (x(a)) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (p(t.options.mutationKey) !== p(a)) return !1
        } else if (!m(t.options.mutationKey, a)) return !1
    }
    return !(typeof r == `boolean` && t.state.status === `loading` !== r || i && !i(t))
}

function f(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || p)(e)
}

function p(e) {
    return JSON.stringify(e, (e, t) => y(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t)
}

function m(e, t) {
    return h(e, t)
}

function h(e, t) {
    return e === t ? !0 : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object` ? !Object.keys(t).some(n => !h(e[n], t[n])) : !1
}

function g(e, t) {
    if (e === t) return e;
    let n = v(e) && v(t);
    if (n || y(e) && y(t)) {
        let r = n ? e.length : Object.keys(e).length,
            i = n ? t : Object.keys(t),
            a = i.length,
            o = n ? [] : {},
            s = 0;
        for (let r = 0; r < a; r++) {
            let a = n ? r : i[r];
            o[a] = g(e[a], t[a]), o[a] === e[a] && s++
        }
        return r === a && s === r ? e : o
    }
    return t
}

function _(e, t) {
    if (e && !t || t && !e) return !1;
    for (let n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function v(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function y(e) {
    if (!b(e)) return !1;
    let t = e.constructor;
    if (t === void 0) return !0;
    let n = t.prototype;
    return !(!b(n) || !n.hasOwnProperty(`isPrototypeOf`))
}

function b(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}

function x(e) {
    return Array.isArray(e)
}

function S(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function C(e) {
    S(0).then(e)
}

function w() {
    if (typeof AbortController == `function`) return new AbortController
}

function T(e, t, n) {
    return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == `function` ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : g(e, t)
}
var E = new class extends n {
        constructor() {
            super(), this.setup = e => {
                if (!r && window.addEventListener) {
                    let t = () => e();
                    return window.addEventListener(`visibilitychange`, t, !1), window.addEventListener(`focus`, t, !1), () => {
                        window.removeEventListener(`visibilitychange`, t), window.removeEventListener(`focus`, t)
                    }
                }
            }
        }
        onSubscribe() {
            this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
            if (!this.hasListeners()) {
                var e;
                (e = this.cleanup) == null || e.call(this), this.cleanup = void 0
            }
        }
        setEventListener(e) {
            var t;
            this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e(e => {
                typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
            })
        }
        setFocused(e) {
            this.focused !== e && (this.focused = e, this.onFocus())
        }
        onFocus() {
            this.listeners.forEach(({
                listener: e
            }) => {
                e()
            })
        }
        isFocused() {
            return typeof this.focused == `boolean` ? this.focused : typeof document > `u` || [void 0, `visible`, `prerender`].includes(document.visibilityState)
        }
    },
    D = [`online`, `offline`],
    O = new class extends n {
        constructor() {
            super(), this.setup = e => {
                if (!r && window.addEventListener) {
                    let t = () => e();
                    return D.forEach(e => {
                        window.addEventListener(e, t, !1)
                    }), () => {
                        D.forEach(e => {
                            window.removeEventListener(e, t)
                        })
                    }
                }
            }
        }
        onSubscribe() {
            this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
            if (!this.hasListeners()) {
                var e;
                (e = this.cleanup) == null || e.call(this), this.cleanup = void 0
            }
        }
        setEventListener(e) {
            var t;
            this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e(e => {
                typeof e == `boolean` ? this.setOnline(e) : this.onOnline()
            })
        }
        setOnline(e) {
            this.online !== e && (this.online = e, this.onOnline())
        }
        onOnline() {
            this.listeners.forEach(({
                listener: e
            }) => {
                e()
            })
        }
        isOnline() {
            return typeof this.online == `boolean` ? this.online : typeof navigator > `u` || navigator.onLine === void 0 || navigator.onLine
        }
    };

function k(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function A(e) {
    return (e ?? `online`) !== `online` || O.isOnline()
}
var j = class {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function M(e) {
    return e instanceof j
}

function N(e) {
    let t = !1,
        n = 0,
        r = !1,
        i, a, o, s = new Promise((e, t) => {
            a = e, o = t
        }),
        c = t => {
            r || (p(new j(t)), e.abort == null || e.abort())
        },
        l = () => {
            t = !0
        },
        u = () => {
            t = !1
        },
        d = () => !E.isFocused() || e.networkMode !== `always` && !O.isOnline(),
        f = t => {
            r || (r = !0, e.onSuccess == null || e.onSuccess(t), i == null || i(), a(t))
        },
        p = t => {
            r || (r = !0, e.onError == null || e.onError(t), i == null || i(), o(t))
        },
        m = () => new Promise(t => {
            i = e => {
                let n = r || !d();
                return n && t(e), n
            }, e.onPause == null || e.onPause()
        }).then(() => {
            i = void 0, r || e.onContinue == null || e.onContinue()
        }),
        h = () => {
            if (r) return;
            let i;
            try {
                i = e.fn()
            } catch (e) {
                i = Promise.reject(e)
            }
            Promise.resolve(i).then(f).catch(i => {
                if (r) return;
                let a = e.retry ?? 3,
                    o = e.retryDelay ?? k,
                    s = typeof o == `function` ? o(n, i) : o,
                    c = a === !0 || typeof a == `number` && n < a || typeof a == `function` && a(n, i);
                t || !c ? p(i) : (n++, e.onFail == null || e.onFail(n, i), S(s).then(() => {
                    if (d()) return m()
                }).then(() => {
                    t ? p(i) : h()
                }))
            })
        };
    return A(e.networkMode) ? h() : m().then(h), {
        promise: s,
        cancel: c,
        continue: () => i != null && i() ? s : Promise.resolve(),
        cancelRetry: l,
        continueRetry: u
    }
}

function P() {
    let e = [],
        t = 0,
        n = e => {
            e()
        },
        r = e => {
            e()
        },
        i = e => {
            let n;
            t++;
            try {
                n = e()
            } finally {
                t--, t || s()
            }
            return n
        },
        a = r => {
            t ? e.push(r) : C(() => {
                n(r)
            })
        },
        o = e => (...t) => {
            a(() => {
                e(...t)
            })
        },
        s = () => {
            let t = e;
            e = [], t.length && C(() => {
                r(() => {
                    t.forEach(e => {
                        n(e)
                    })
                })
            })
        };
    return {
        batch: i,
        batchCalls: o,
        schedule: a,
        setNotifyFunction: e => {
            n = e
        },
        setBatchNotifyFunction: e => {
            r = e
        }
    }
}
var F = P(),
    I = e(t(), 1),
    L = I.createContext(void 0),
    R = I.createContext(!1);

function z(e, t) {
    return e || (t && typeof window < `u` ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = L), window.ReactQueryClientContext) : L)
}
var B = ({
        context: e
    } = {}) => {
        let t = I.useContext(z(e, I.useContext(R)));
        if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
        return t
    },
    V = ({
        client: e,
        children: t,
        context: n,
        contextSharing: r = !1
    }) => {
        I.useEffect(() => (e.mount(), () => {
            e.unmount()
        }), [e]);
        let i = z(n, r);
        return I.createElement(R.Provider, {
            value: !n && r
        }, I.createElement(i.Provider, {
            value: e
        }, t))
    };
export {
    s as C, _ as S, i as _, N as a, m as b, E as c, p as d, f, u as g, d as h, A as i, a as l, o as m, B as n, M as o, r as p, F as r, O as s, V as t, w as u, l as v, n as w, T as x, c as y
};