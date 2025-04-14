function e(e) {
    return e && e.__esModule ? e.default : e
}

function r(e, r, t, n) {
    Object.defineProperty(e, r, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("lpEVe", (function(n, o) {
    r(n.exports, "observer", (function() {
        return _
    })), r(n.exports, "Provider", (function() {
        return F
    })), r(n.exports, "inject", (function() {
        return $
    }));
    var i = t("4MuSt"),
        a = t("fywoC");
    t("cSKYy");
    var c = t("iCS0j"),
        u = t("8tYeV");
    t("8QEBg");
    t("cSKYy");
    c = t("iCS0j"), u = t("8tYeV"), t("8QEBg");
    var s = 0;
    var f = {};

    function l(e) {
        return f[e] || (f[e] = function(e) {
            if ("function" == typeof Symbol) return Symbol(e);
            var r = "__$mobx-react " + e + " (" + s + ")";
            return s++, r
        }(e)), f[e]
    }

    function d(e, r) {
        if (p(e, r)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof r || null === r) return !1;
        var t = Object.keys(e),
            n = Object.keys(r);
        if (t.length !== n.length) return !1;
        for (var o = 0; o < t.length; o++)
            if (!Object.hasOwnProperty.call(r, t[o]) || !p(e[t[o]], r[t[o]])) return !1;
        return !0
    }

    function p(e, r) {
        return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r
    }
    var v = {
        $$typeof: 1,
        render: 1,
        compare: 1,
        type: 1,
        childContextTypes: 1,
        contextType: 1,
        contextTypes: 1,
        defaultProps: 1,
        getDefaultProps: 1,
        getDerivedStateFromError: 1,
        getDerivedStateFromProps: 1,
        mixins: 1,
        displayName: 1,
        propTypes: 1
    };

    function y(e, r, t) {
        Object.hasOwnProperty.call(e, r) ? e[r] = t : Object.defineProperty(e, r, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: t
        })
    }
    var b = l("patchMixins"),
        m = l("patchedDefinition");

    function h(e, r) {
        for (var t = this, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
        r.locks++;
        try {
            var a;
            return null != e && (a = e.apply(this, o)), a
        } finally {
            r.locks--, 0 === r.locks && r.methods.forEach((function(e) {
                e.apply(t, o)
            }))
        }
    }

    function g(e, r) {
        return function() {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            h.call.apply(h, [this, e, r].concat(n))
        }
    }

    function w(e, r, t) {
        var n = function(e, r) {
            var t = e[b] = e[b] || {},
                n = t[r] = t[r] || {};
            return n.locks = n.locks || 0, n.methods = n.methods || [], n
        }(e, r);
        n.methods.indexOf(t) < 0 && n.methods.push(t);
        var o = Object.getOwnPropertyDescriptor(e, r);
        if (!o || !o[m]) {
            var i = e[r],
                a = S(e, r, o ? o.enumerable : void 0, n, i);
            Object.defineProperty(e, r, a)
        }
    }

    function S(e, r, t, n, o) {
        var i, a = g(o, n);
        return (i = {})[m] = !0, i.get = function() {
            return a
        }, i.set = function(o) {
            if (this === e) a = g(o, n);
            else {
                var i = S(this, r, t, n, o);
                Object.defineProperty(this, r, i)
            }
        }, i.configurable = !0, i.enumerable = t, i
    }
    var R = i.$mobx || "$mobx",
        T = l("isMobXReactObserver"),
        x = l("isUnmounted"),
        C = l("skipRender"),
        O = l("isForcingUpdate");

    function j(e) {
        var r = e.prototype;
        if (e[T]) {
            var t = P(r);
            console.warn("The provided component class (" + t + ")\n                has already been declared as an observer component.")
        } else e[T] = !0;
        if (r.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");
        if (e.__proto__ !== a.PureComponent)
            if (r.shouldComponentUpdate) {
                if (r.shouldComponentUpdate !== E) throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")
            } else r.shouldComponentUpdate = E;
        M(r, "props"), M(r, "state"), e.contextType && M(r, "context");
        var n = r.render;
        if ("function" != typeof n) {
            var o = P(r);
            throw new Error("[mobx-react] class component (" + o + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")
        }
        return r.render = function() {
            return this.render = (0, c.isUsingStaticRendering)() ? n : k.call(this, n), this.render()
        }, w(r, "componentDidMount", (function() {
            this[x] = !1, this.render[R] || a.Component.prototype.forceUpdate.call(this)
        })), w(r, "componentWillUnmount", (function() {
            if (!(0, c.isUsingStaticRendering)()) {
                var e = this.render[R];
                if (e) e.dispose(), this.render[R] = null;
                else {
                    var r = P(this);
                    console.warn("The reactive render of an observer class component (" + r + ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.")
                }
                this[x] = !0
            }
        })), e
    }

    function P(e) {
        return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>"
    }

    function k(e) {
        var r = this;
        y(this, C, !1), y(this, O, !1);
        var t = P(this),
            n = e.bind(this),
            o = !1;
        return function e() {
            var c;
            o = !1;
            var u = null != (c = e[R]) ? c : e[R] = function() {
                    var e = new(0, i.Reaction)(t + ".render()", (function() {
                        if (!o && (o = !0, !0 !== r[x])) {
                            var t = !0;
                            try {
                                y(r, O, !0), r[C] || a.Component.prototype.forceUpdate.call(r), t = !1
                            } finally {
                                y(r, O, !1), t && (e.dispose(), r.render[R] = null)
                            }
                        }
                    }));
                    return e.reactComponent = r, e
                }(),
                s = void 0,
                f = void 0;
            if (u.track((function() {
                    try {
                        f = (0, i._allowStateChanges)(!1, n)
                    } catch (e) {
                        s = e
                    }
                })), s) throw s;
            return f
        }
    }

    function E(e, r) {
        return (0, c.isUsingStaticRendering)() && console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."), this.state !== r || !d(this.props, e)
    }

    function M(e, r) {
        var t = l("reactProp_" + r + "_valueHolder"),
            n = l("reactProp_" + r + "_atomHolder");

        function o() {
            return this[n] || y(this, n, (0, i.createAtom)("reactive " + r)), this[n]
        }
        Object.defineProperty(e, r, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var e = !1;
                return i._allowStateReadsStart && i._allowStateReadsEnd && (e = (0, i._allowStateReadsStart)(!0)), o.call(this).reportObserved(), i._allowStateReadsStart && i._allowStateReadsEnd && (0, i._allowStateReadsEnd)(e), this[t]
            },
            set: function(e) {
                this[O] || d(this[t], e) ? y(this, t, e) : (y(this, t, e), y(this, C, !0), o.call(this).reportChanged(), y(this, C, !1))
            }
        })
    }

    function _(e) {
        return !0 === e.isMobxInjector && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(a.Component, e) || Object.prototype.isPrototypeOf.call(a.PureComponent, e) ? j(e) : (0, u.observer)(e)
    }

    function U() {
        return U = Object.assign || function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
        }, U.apply(this, arguments)
    }
    var D = ["children"],
        N = e(a).createContext({});

    function F(r) {
        var t = r.children,
            n = function(e, r) {
                if (null == e) return {};
                var t, n, o = {},
                    i = Object.keys(e);
                for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                return o
            }(r, D),
            o = e(a).useContext(N),
            i = e(a).useRef(U({}, o, n)).current;
        return e(a).createElement(N.Provider, {
            value: i
        }, t)
    }

    function A(r, t, n, o) {
        var i, c, u, s = e(a).forwardRef((function(n, o) {
            var i = U({}, n),
                c = e(a).useContext(N);
            return Object.assign(i, r(c || {}, i) || {}), o && (i.ref = o), e(a).createElement(t, i)
        }));
        return o && (s = _(s)), s.isMobxInjector = !0, i = t, c = s, u = Object.getOwnPropertyNames(Object.getPrototypeOf(i)), Object.getOwnPropertyNames(i).forEach((function(e) {
            v[e] || -1 !== u.indexOf(e) || Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(i, e))
        })), s.wrappedComponent = t, s.displayName = function(e, r) {
            var t, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
            t = r ? "inject-with-" + r + "(" + n + ")" : "inject(" + n + ")";
            return t
        }(t, n), s
    }

    function B(e) {
        return function(r, t) {
            return e.forEach((function(e) {
                if (!(e in t)) {
                    if (!(e in r)) throw new Error("MobX injector: Store '" + e + "' is not available! Make sure it is provided by some Provider");
                    t[e] = r[e]
                }
            })), t
        }
    }

    function $() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        if ("function" == typeof arguments[0]) {
            var n = arguments[0];
            return function(e) {
                return A(n, e, n.name, !0)
            }
        }
        return function(e) {
            return A(B(r), e, r.join("-"), !1)
        }
    }
    F.displayName = "MobXProvider";
    if (!a.Component) throw new Error("mobx-react requires React to be available");
    if (!i.observable) throw new Error("mobx-react requires mobx to be available")
})), t.register("cSKYy", (function(e, n) {
    r(e.exports, "isUsingStaticRendering", (function() {
        return t("iCS0j").isUsingStaticRendering
    })), r(e.exports, "observer", (function() {
        return t("8tYeV").observer
    })), r(e.exports, "useLocalObservable", (function() {
        return t("8QEBg").useLocalObservable
    })), t("lKiGT"), t("4TJLa");
    var o = t("kK88x");
    t("jP7gS");
    t("Sk0VS");
    t("2pDaq"), t("iCS0j"), t("iCS0j"), t("8tYeV"), t("8o3Kd"), t("8QEBg"), t("80ciN"), t("1GT72"), t("fQgR3");
    (0, t("jP7gS").observerBatching)(o.unstable_batchedUpdates)
})), t.register("lKiGT", (function(e, r) {
    var n = t("4MuSt");
    if (!t("fywoC").useState) throw new Error("mobx-react-lite requires React with Hooks support");
    if (!n.makeObservable) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available")
})), t.register("4TJLa", (function(e, n) {
    r(e.exports, "unstable_batchedUpdates", (function() {
        return t("kK88x").unstable_batchedUpdates
    }));
    t("kK88x")
})), t.register("jP7gS", (function(e, n) {
    r(e.exports, "observerBatching", (function() {
        return a
    }));
    var o = t("4MuSt");

    function i(e) {
        e()
    }

    function a(e) {
        e || (e = i), (0, o.configure)({
            reactionScheduler: e
        })
    }
})), t.register("Sk0VS", (function(e, r) {})), t.register("2pDaq", (function(n, o) {
    r(n.exports, "useObserver", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var i = t("4MuSt"),
        a = t("fywoC"),
        c = t("i9NG1"),
        u = t("fQgR3"),
        s = t("iCS0j"),
        f = function(e, r) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n, o, i = t.call(e),
                a = [];
            try {
                for (;
                    (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        };

    function l(e) {
        return "observer".concat(e)
    }
    var d = function() {};

    function p() {
        return new d
    }

    function v(r, t) {
        if (void 0 === t && (t = "observed"), (0, s.isUsingStaticRendering)()) return r();
        var n = f(e(a).useState(p), 1)[0],
            o = f(e(a).useState(), 2)[1],
            d = function() {
                return o([])
            },
            v = e(a).useRef(null);
        if (!v.current) var y = new(0, i.Reaction)(l(t), (function() {
                b.mounted ? d() : b.changedBeforeMount = !0
            })),
            b = (0, u.addReactionToTrack)(v, y, n);
        var m, h, g = v.current.reaction;
        if (e(a).useDebugValue(g, c.printDebugValue), e(a).useEffect((function() {
                return (0, u.recordReactionAsCommitted)(v), v.current ? (v.current.mounted = !0, v.current.changedBeforeMount && (v.current.changedBeforeMount = !1, d())) : (v.current = {
                        reaction: new(0, i.Reaction)(l(t), (function() {
                            d()
                        })),
                        mounted: !0,
                        changedBeforeMount: !1,
                        cleanAt: 1 / 0
                    }, d()),
                    function() {
                        v.current.reaction.dispose(), v.current = null
                    }
            }), []), g.track((function() {
                try {
                    m = r()
                } catch (e) {
                    h = e
                }
            })), h) throw h;
        return m
    }
})), t.register("i9NG1", (function(e, n) {
    r(e.exports, "printDebugValue", (function() {
        return i
    }));
    var o = t("4MuSt");

    function i(e) {
        return (0, o.getDependencyTree)(e)
    }
})), t.register("fQgR3", (function(e, n) {
    r(e.exports, "addReactionToTrack", (function() {
        return u
    })), r(e.exports, "recordReactionAsCommitted", (function() {
        return s
    }));
    var o = t("2PjxF"),
        i = t("4Wra5"),
        a = t("2mTDZ"),
        c = o.FinalizationRegistry ? (0, i.createReactionCleanupTrackingUsingFinalizationRegister)(o.FinalizationRegistry) : (0, a.createTimerBasedReactionCleanupTracking)(),
        u = c.addReactionToTrack,
        s = c.recordReactionAsCommitted;
    c.resetCleanupScheduleForTests, c.forceCleanupTimerToRunNowForTests
})), t.register("2PjxF", (function(e, t) {
    r(e.exports, "FinalizationRegistry", (function() {
        return n
    }));
    var n = "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry
})), t.register("4Wra5", (function(e, n) {
    r(e.exports, "createReactionCleanupTrackingUsingFinalizationRegister", (function() {
        return i
    }));
    var o = t("91n9q");

    function i(e) {
        var r = new Map,
            t = 1,
            n = new e((function(e) {
                var t = r.get(e);
                t && (t.reaction.dispose(), r.delete(e))
            }));
        return {
            addReactionToTrack: function(e, i, a) {
                var c = t++;
                return n.register(a, c, e), e.current = (0, o.createTrackingData)(i), e.current.finalizationRegistryCleanupToken = c, r.set(c, e.current), e.current
            },
            recordReactionAsCommitted: function(e) {
                n.unregister(e), e.current && e.current.finalizationRegistryCleanupToken && r.delete(e.current.finalizationRegistryCleanupToken)
            },
            forceCleanupTimerToRunNowForTests: function() {},
            resetCleanupScheduleForTests: function() {}
        }
    }
})), t.register("91n9q", (function(e, t) {
    function n(e) {
        return {
            reaction: e,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + o
        }
    }
    r(e.exports, "createTrackingData", (function() {
        return n
    })), r(e.exports, "CLEANUP_TIMER_LOOP_MILLIS", (function() {
        return i
    }));
    var o = 1e4,
        i = 1e4
})), t.register("2mTDZ", (function(e, n) {
    r(e.exports, "createTimerBasedReactionCleanupTracking", (function() {
        return a
    }), (function(e) {
        return a = e
    }));
    var o = t("91n9q"),
        i = function(e) {
            var r = "function" == typeof Symbol && Symbol.iterator,
                t = r && e[r],
                n = 0;
            if (t) return t.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };

    function a() {
        var e, r = new Set;

        function t() {
            void 0 === e && (e = setTimeout(n, o.CLEANUP_TIMER_LOOP_MILLIS))
        }

        function n() {
            e = void 0;
            var n = Date.now();
            r.forEach((function(e) {
                var t = e.current;
                t && n >= t.cleanAt && (t.reaction.dispose(), e.current = null, r.delete(e))
            })), r.size > 0 && t()
        }
        return {
            addReactionToTrack: function(e, n, i) {
                var a;
                return e.current = (0, o.createTrackingData)(n), a = e, r.add(a), t(), e.current
            },
            recordReactionAsCommitted: function(e) {
                r.delete(e)
            },
            forceCleanupTimerToRunNowForTests: function() {
                e && (clearTimeout(e), n())
            },
            resetCleanupScheduleForTests: function() {
                var t, n;
                if (r.size > 0) {
                    try {
                        for (var o = i(r), a = o.next(); !a.done; a = o.next()) {
                            var c = a.value,
                                u = c.current;
                            u && (u.reaction.dispose(), c.current = null)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    r.clear()
                }
                e && (clearTimeout(e), e = void 0)
            }
        }
    }
})), t.register("iCS0j", (function(e, t) {
    r(e.exports, "enableStaticRendering", (function() {
        return o
    })), r(e.exports, "isUsingStaticRendering", (function() {
        return i
    }));
    var n = !1;

    function o(e) {
        n = e
    }

    function i() {
        return n
    }
})), t.register("8tYeV", (function(e, n) {
    r(e.exports, "observer", (function() {
        return f
    }));
    var o = t("fywoC"),
        i = t("iCS0j"),
        a = t("2pDaq"),
        c = "function" == typeof Symbol && Symbol.for,
        u = c ? Symbol.for("react.forward_ref") : "function" == typeof o.forwardRef && (0, o.forwardRef)((function(e) {
            return null
        })).$$typeof,
        s = c ? Symbol.for("react.memo") : "function" == typeof o.memo && (0, o.memo)((function(e) {
            return null
        })).$$typeof;

    function f(e, r) {
        var t;
        if (s && e.$$typeof === s) throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
        if ((0, i.isUsingStaticRendering)()) return e;
        var n = null !== (t = null == r ? void 0 : r.forwardRef) && void 0 !== t && t,
            c = e,
            f = e.displayName || e.name;
        if (u && e.$$typeof === u && (n = !0, "function" != typeof(c = e.render))) throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        var d, p, v = function(e, r) {
            return (0, a.useObserver)((function() {
                return c(e, r)
            }), f)
        };
        return "" !== f && (v.displayName = f), e.contextTypes && (v.contextTypes = e.contextTypes), n && (v = (0, o.forwardRef)(v)), v = (0, o.memo)(v), d = e, p = v, Object.keys(d).forEach((function(e) {
            l[e] || Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(d, e))
        })), v
    }
    var l = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    }
})), t.register("8o3Kd", (function(e, r) {
    t("2pDaq")
})), t.register("8QEBg", (function(e, n) {
    r(e.exports, "useLocalObservable", (function() {
        return a
    }));
    var o = t("4MuSt"),
        i = t("fywoC");

    function a(e, r) {
        return (0, i.useState)((function() {
            return (0, o.observable)(e(), r, {
                autoBind: !0
            })
        }))[0]
    }
})), t.register("80ciN", (function(e, r) {
    t("4MuSt"), t("fywoC");
    t("Sk0VS");
    t("1GT72")
})), t.register("1GT72", (function(e, n) {
    r(e.exports, "useAsObservableSource", (function() {
        return c
    }), (function(e) {
        return c = e
    })), t("Sk0VS");
    var o = t("4MuSt"),
        i = t("fywoC"),
        a = function(e, r) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n, o, i = t.call(e),
                a = [];
            try {
                for (;
                    (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        };

    function c(e) {
        var r = a((0, i.useState)((function() {
            return (0, o.observable)(e, {}, {
                deep: !1
            })
        })), 1)[0];
        return (0, o.runInAction)((function() {
            Object.assign(r, e)
        })), r
    }
}));