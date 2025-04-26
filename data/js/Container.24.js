function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, m) {
    Object.defineProperty(a, b, {
        get: c,
        set: m,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Vlfxs', function(m, n) {
    b(m.exports, 'observer', function() {
        return E;
    }), b(m.exports, 'Provider', function() {
        return I;
    }), b(m.exports, 'inject', function() {
        return L;
    });
    var d = c('UnUp5'),
        e = c('uPP4W');
    c('8k9IL');
    var f = c('63Lr4'),
        g = c('+8uiJ');
    c('ZevWA');
    c('8k9IL');
    f = c('63Lr4'), g = c('+8uiJ'), c('ZevWA');
    var h = 0;
    var i = {};

    function j(a) {
        return i[a] || (i[a] = function(a) {
            if ('function' == typeof Symbol)
                return Symbol(a);
            var k = '__$mobx-react ' + a + ' (' + h + ')';
            return h++, k;
        }(a)), i[a];
    }

    function k(a, b) {
        if (l(a, b))
            return !0;
        if ('object' != typeof a || null === a || 'object' != typeof b || null === b)
            return !1;
        var l = Object.keys(a),
            m = Object.keys(b);
        if (l.length !== m.length)
            return !1;
        for (var n = 0; n < l.length; n++)
            if (!Object.hasOwnProperty.call(b, l[n]) || !l(a[l[n]], b[l[n]]))
                return !1;
        return !0;
    }

    function l(a, b) {
        return a === b ? 0 !== a || 1 / a == 1 / b : a != a && b != b;
    }
    var m = {
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

    function n(a, b, c) {
        Object.hasOwnProperty.call(a, b) ? a[b] = c : Object.defineProperty(a, b, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: c
        });
    }
    var o = j('patchMixins'),
        p = j('patchedDefinition');

    function q(a, b) {
        for (var r = this, s = arguments.length, t = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
            t[u - 2] = arguments[u];
        b.locks++;
        try {
            var v;
            return null != a && (v = a.apply(this, t)), v;
        } finally {
            b.locks--, 0 === b.locks && b.methods.forEach(function(a) {
                a.apply(r, t);
            });
        }
    }

    function r(a, b) {
        return function() {
            for (var s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                t[u] = arguments[u];
            q.call.apply(q, [
                this,
                a,
                b
            ].concat(t));
        };
    }

    function s(a, b, c) {
        var t = function(a, b) {
            var u = a[o] = a[o] || {},
                v = u[b] = u[b] || {};
            return v.locks = v.locks || 0, v.methods = v.methods || [], v;
        }(a, b);
        t.methods.indexOf(c) < 0 && t.methods.push(c);
        var u = Object.getOwnPropertyDescriptor(a, b);
        if (!u || !u[p]) {
            var v = a[b],
                w = t(a, b, u ? u.enumerable : void 0, t, v);
            Object.defineProperty(a, b, w);
        }
    }

    function t(a, b, c, B, C) {
        var u, v = r(C, B);
        return (u = {})[p] = !0, u.get = function() {
            return v;
        }, u.set = function(C) {
            if (this === a)
                v = r(C, B);
            else {
                var w = t(this, b, c, B, C);
                Object.defineProperty(this, b, w);
            }
        }, u.configurable = !0, u.enumerable = c, u;
    }
    var u = d.$mobx || '$mobx',
        v = j('isMobXReactObserver'),
        w = j('isUnmounted'),
        x = j('skipRender'),
        y = j('isForcingUpdate');

    function z(a) {
        var A = a.prototype;
        if (a[v]) {
            var B = A(A);
            console.warn('The provided component class (' + B + ')\n                has already been declared as an observer component.');
        } else
            a[v] = !0;
        if (A.componentWillReact)
            throw new Error('The componentWillReact life-cycle event is no longer supported');
        if (a.__proto__ !== e.PureComponent)
            if (A.shouldComponentUpdate) {
                if (A.shouldComponentUpdate !== C)
                    throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
            } else
                A.shouldComponentUpdate = C;
        D(A, 'props'), D(A, 'state'), a.contextType && D(A, 'context');
        var B = A.render;
        if ('function' != typeof B) {
            var C = A(A);
            throw new Error('[mobx-react] class component (' + C + ') is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.');
        }
        return A.render = function() {
            return this.render = (0, f.isUsingStaticRendering)() ? B : B.call(this, B), this.render();
        }, s(A, 'componentDidMount', function() {
            this[w] = !1, this.render[u] || e.Component.prototype.forceUpdate.call(this);
        }), s(A, 'componentWillUnmount', function() {
            if (!(0, f.isUsingStaticRendering)()) {
                var C = this.render[u];
                if (C)
                    C.dispose(), this.render[u] = null;
                else {
                    var D = A(this);
                    console.warn('The reactive render of an observer class component (' + D + ')\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.');
                }
                this[w] = !0;
            }
        }), a;
    }

    function A(a) {
        return a.displayName || a.name || a.constructor && (a.constructor.displayName || a.constructor.name) || '<component>';
    }

    function B(a) {
        var C = this;
        n(this, x, !1), n(this, y, !1);
        var D = A(this),
            E = a.bind(this),
            F = !1;
        return function a() {
            var G;
            F = !1;
            var H = null != (G = a[u]) ? G : a[u] = function() {
                    var I = new(0, d.Reaction)(D + '.render()', function() {
                        if (!F && (F = !0, !0 !== C[w])) {
                            var J = !0;
                            try {
                                n(C, y, !0), C[x] || e.Component.prototype.forceUpdate.call(C), J = !1;
                            } finally {
                                n(C, y, !1), J && (I.dispose(), C.render[u] = null);
                            }
                        }
                    });
                    return I.reactComponent = C, I;
                }(),
                I = void 0,
                J = void 0;
            if (H.track(function() {
                    try {
                        J = (0, d._allowStateChanges)(!1, E);
                    } catch (a) {
                        I = a;
                    }
                }), I)
                throw I;
            return J;
        };
    }

    function C(a, b) {
        return (0, f.isUsingStaticRendering)() && console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.'), this.state !== b || !k(this.props, a);
    }

    function D(a, b) {
        var E = j('reactProp_' + b + '_valueHolder'),
            F = j('reactProp_' + b + '_atomHolder');

        function G() {
            return this[F] || n(this, F, (0, d.createAtom)('reactive ' + b)), this[F];
        }
        Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var H = !1;
                return d._allowStateReadsStart && d._allowStateReadsEnd && (H = (0, d._allowStateReadsStart)(!0)), G.call(this).reportObserved(), d._allowStateReadsStart && d._allowStateReadsEnd && (0, d._allowStateReadsEnd)(H), this[E];
            },
            set: function(a) {
                this[y] || k(this[E], a) ? n(this, E, a) : (n(this, E, a), n(this, x, !0), G.call(this).reportChanged(), n(this, x, !1));
            }
        });
    }

    function E(a) {
        return !0 === a.isMobxInjector && console.warn('Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`'), Object.prototype.isPrototypeOf.call(e.Component, a) || Object.prototype.isPrototypeOf.call(e.PureComponent, a) ? z(a) : (0, g.observer)(a);
    }

    function F() {
        return F = Object.assign || function(a) {
            for (var G = 1; G < arguments.length; G++) {
                var H = arguments[G];
                for (var I in H)
                    Object.prototype.hasOwnProperty.call(H, I) && (a[I] = H[I]);
            }
            return a;
        }, F.apply(this, arguments);
    }
    var G = ['children'],
        H = a(e).createContext({});

    function I(b) {
        var J = b.children,
            K = function(a, b) {
                if (null == a)
                    return {};
                var L, M, N = {},
                    O = Object.keys(a);
                for (M = 0; M < O.length; M++)
                    L = O[M], b.indexOf(L) >= 0 || (N[L] = a[L]);
                return N;
            }(b, G),
            L = a(e).useContext(H),
            M = a(e).useRef(F({}, L, K)).current;
        return a(e).createElement(H.Provider, {
            value: M
        }, J);
    }

    function J(b, c, P, d) {
        var K, L, M, N = a(e).forwardRef(function(P, d) {
            var O = F({}, P),
                P = a(e).useContext(H);
            return Object.assign(O, b(P || {}, O) || {}), d && (O.ref = d), a(e).createElement(c, O);
        });
        return d && (N = E(N)), N.isMobxInjector = !0, K = c, L = N, M = Object.getOwnPropertyNames(Object.getPrototypeOf(K)), Object.getOwnPropertyNames(K).forEach(function(a) {
            m[a] || -1 !== M.indexOf(a) || Object.defineProperty(L, a, Object.getOwnPropertyDescriptor(K, a));
        }), N.wrappedComponent = c, N.displayName = function(a, b) {
            var O, P = a.displayName || a.name || a.constructor && a.constructor.name || 'Component';
            O = b ? 'inject-with-' + b + '(' + P + ')' : 'inject(' + P + ')';
            return O;
        }(c, P), N;
    }

    function K(a) {
        return function(b, c) {
            return a.forEach(function(a) {
                if (!(a in c)) {
                    if (!(a in b))
                        throw new Error('MobX injector: Store \'' + a + '\' is not available! Make sure it is provided by some Provider');
                    c[a] = b[a];
                }
            }), c;
        };
    }

    function L() {
        for (var M = arguments.length, N = new Array(M), O = 0; O < M; O++)
            N[O] = arguments[O];
        if ('function' == typeof arguments[0]) {
            var P = arguments[0];
            return function(M) {
                return J(P, M, P.name, !0);
            };
        }
        return function(M) {
            return J(K(N), M, N.join('-'), !1);
        };
    }
    I.displayName = 'MobXProvider';
    if (!e.Component)
        throw new Error('mobx-react requires React to be available');
    if (!d.observable)
        throw new Error('mobx-react requires mobx to be available');
}), c.register('8k9IL', function(a, d) {
    b(a.exports, 'isUsingStaticRendering', function() {
        return c('63Lr4').isUsingStaticRendering;
    }), b(a.exports, 'observer', function() {
        return c('+8uiJ').observer;
    }), b(a.exports, 'useLocalObservable', function() {
        return c('ZevWA').useLocalObservable;
    }), c('yMpWp'), c('o4Vbc');
    var d = c('nLioi');
    c('kI5Gx');
    c('sCcFp649');
    c('Htj60'), c('63Lr4'), c('63Lr4'), c('+8uiJ'), c('cLxWK'), c('ZevWA'), c('vRD8T'), c('nbeWk'), c('1egFX');
    (0, c('kI5Gx').observerBatching)(d.unstable_batchedUpdates);
}), c.register('yMpWp', function(a, b) {
    var d = c('UnUp5');
    if (!c('uPP4W').useState)
        throw new Error('mobx-react-lite requires React with Hooks support');
    if (!d.makeObservable)
        throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
}), c.register('o4Vbc', function(a, k) {
    b(a.exports, 'unstable_batchedUpdates', function() {
        return c('nLioi').unstable_batchedUpdates;
    });
    c('nLioi');
}), c.register('kI5Gx', function(a, k) {
    b(a.exports, 'observerBatching', function() {
        return f;
    });
    var d = c('UnUp5');

    function e(a) {
        a();
    }

    function f(a) {
        a || (a = e), (0, d.configure)({
            reactionScheduler: a
        });
    }
}), c.register('sCcFp649', function(a, b) {}), c.register('Htj60', function(k, l) {
    b(k.exports, 'useObserver', function() {
        return m;
    }, function(a) {
        return m = a;
    });
    var d = c('UnUp5'),
        e = c('uPP4W'),
        f = c('PeDy6'),
        g = c('1egFX'),
        h = c('63Lr4'),
        i = function(a, b) {
            var j = 'function' == typeof Symbol && a[Symbol.iterator];
            if (!j)
                return a;
            var k, l, m = j.call(a),
                n = [];
            try {
                for (;
                    (void 0 === b || b-- > 0) && !(k = m.next()).done;)
                    n.push(k.value);
            } catch (a) {
                l = {
                    error: a
                };
            } finally {
                try {
                    k && !k.done && (j = m.return) && j.call(m);
                } finally {
                    if (l)
                        throw l.error;
                }
            }
            return n;
        };

    function j(a) {
        return 'observer'.concat(a);
    }
    var k = function() {};

    function l() {
        return new k();
    }

    function m(b, c) {
        if (void 0 === c && (c = 'observed'), (0, h.isUsingStaticRendering)())
            return b();
        var n = i(a(e).useState(l), 1)[0],
            o = i(a(e).useState(), 2)[1],
            p = function() {
                return o([]);
            },
            q = a(e).useRef(null);
        if (!q.current)
            var r = new(0, d.Reaction)(j(c), function() {
                    s.mounted ? p() : s.changedBeforeMount = !0;
                }),
                s = (0, g.addReactionToTrack)(q, r, n);
        var r, s, t = q.current.reaction;
        if (a(e).useDebugValue(t, f.printDebugValue), a(e).useEffect(function() {
                return (0, g.recordReactionAsCommitted)(q), q.current ? (q.current.mounted = !0, q.current.changedBeforeMount && (q.current.changedBeforeMount = !1, p())) : (q.current = {
                        reaction: new(0, d.Reaction)(j(c), function() {
                            p();
                        }),
                        mounted: !0,
                        changedBeforeMount: !1,
                        cleanAt: 1 / 0
                    }, p()),
                    function() {
                        q.current.reaction.dispose(), q.current = null;
                    };
            }, []), t.track(function() {
                try {
                    r = b();
                } catch (a) {
                    s = a;
                }
            }), s)
            throw s;
        return r;
    }
}), c.register('PeDy6', function(a, d) {
    b(a.exports, 'printDebugValue', function() {
        return e;
    });
    var d = c('UnUp5');

    function e(a) {
        return (0, d.getDependencyTree)(a);
    }
}), c.register('1egFX', function(a, d) {
    b(a.exports, 'addReactionToTrack', function() {
        return h;
    }), b(a.exports, 'recordReactionAsCommitted', function() {
        return i;
    });
    var d = c('yPNJq'),
        e = c('0YGam'),
        f = c('4ppXC'),
        g = d.FinalizationRegistry ? (0, e.createReactionCleanupTrackingUsingFinalizationRegister)(d.FinalizationRegistry) : (0, f.createTimerBasedReactionCleanupTracking)(),
        h = g.addReactionToTrack,
        i = g.recordReactionAsCommitted;
    g.resetCleanupScheduleForTests, g.forceCleanupTimerToRunNowForTests;
}), c.register('yPNJq', function(a, c) {
    b(a.exports, 'FinalizationRegistry', function() {
        return d;
    });
    var d = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
}), c.register('0YGam', function(a, h) {
    b(a.exports, 'createReactionCleanupTrackingUsingFinalizationRegister', function() {
        return e;
    });
    var d = c('LCQo+');

    function e(a) {
        var f = new Map(),
            g = 1,
            h = new a(function(a) {
                var i = f.get(a);
                i && (i.reaction.dispose(), f.delete(a));
            });
        return {
            addReactionToTrack: function(a, e, f) {
                var i = g++;
                return h.register(f, i, a), a.current = (0, d.createTrackingData)(e), a.current.finalizationRegistryCleanupToken = i, f.set(i, a.current), a.current;
            },
            recordReactionAsCommitted: function(a) {
                h.unregister(a), a.current && a.current.finalizationRegistryCleanupToken && f.delete(a.current.finalizationRegistryCleanupToken);
            },
            forceCleanupTimerToRunNowForTests: function() {},
            resetCleanupScheduleForTests: function() {}
        };
    }
}), c.register('LCQo+', function(a, c) {
    function d(a) {
        return {
            reaction: a,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + e
        };
    }
    b(a.exports, 'createTrackingData', function() {
        return d;
    }), b(a.exports, 'CLEANUP_TIMER_LOOP_MILLIS', function() {
        return f;
    });
    var e = 10000,
        f = 10000;
}), c.register('4ppXC', function(a, h) {
    b(a.exports, 'createTimerBasedReactionCleanupTracking', function() {
        return f;
    }, function(a) {
        return f = a;
    });
    var d = c('LCQo+'),
        e = function(a) {
            var f = 'function' == typeof Symbol && Symbol.iterator,
                g = f && a[f],
                h = 0;
            if (g)
                return g.call(a);
            if (a && 'number' == typeof a.length)
                return {
                    next: function() {
                        return a && h >= a.length && (a = void 0), {
                            value: a && a[h++],
                            done: !a
                        };
                    }
                };
            throw new TypeError(f ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        };

    function f() {
        var g, h = new Set();

        function i() {
            void 0 === g && (g = setTimeout(j, d.CLEANUP_TIMER_LOOP_MILLIS));
        }

        function j() {
            g = void 0;
            var k = Date.now();
            h.forEach(function(g) {
                var l = g.current;
                l && k >= l.cleanAt && (l.reaction.dispose(), g.current = null, h.delete(g));
            }), h.size > 0 && i();
        }
        return {
            addReactionToTrack: function(g, j, e) {
                var k;
                return g.current = (0, d.createTrackingData)(j), k = g, h.add(k), i(), g.current;
            },
            recordReactionAsCommitted: function(g) {
                h.delete(g);
            },
            forceCleanupTimerToRunNowForTests: function() {
                g && (clearTimeout(g), j());
            },
            resetCleanupScheduleForTests: function() {
                var k, l;
                if (h.size > 0) {
                    try {
                        for (var m = e(h), n = m.next(); !n.done; n = m.next()) {
                            var o = n.value,
                                p = o.current;
                            p && (p.reaction.dispose(), o.current = null);
                        }
                    } catch (g) {
                        k = {
                            error: g
                        };
                    } finally {
                        try {
                            f && !f.done && (l = d.return) && l.call(d);
                        } finally {
                            if (k)
                                throw k.error;
                        }
                    }
                    h.clear();
                }
                g && (clearTimeout(g), g = void 0);
            }
        };
    }
}), c.register('63Lr4', function(a, c) {
    b(a.exports, 'enableStaticRendering', function() {
        return e;
    }), b(a.exports, 'isUsingStaticRendering', function() {
        return f;
    });
    var d = !1;

    function e(a) {
        d = a;
    }

    function f() {
        return d;
    }
}), c.register('+8uiJ', function(a, l) {
    b(a.exports, 'observer', function() {
        return j;
    });
    var d = c('uPP4W'),
        e = c('63Lr4'),
        f = c('Htj60'),
        g = 'function' == typeof Symbol && Symbol.for,
        h = g ? Symbol.for('react.forward_ref') : 'function' == typeof d.forwardRef && (0, d.forwardRef)(function(a) {
            return null;
        }).$$typeof,
        i = g ? Symbol.for('react.memo') : 'function' == typeof d.memo && (0, d.memo)(function(a) {
            return null;
        }).$$typeof;

    function j(a, b) {
        var k;
        if (i && a.$$typeof === i)
            throw new Error('[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies \'React.memo\' for you.');
        if ((0, e.isUsingStaticRendering)())
            return a;
        var l = null !== (k = null == b ? void 0 : b.forwardRef) && void 0 !== k && k,
            m = n,
            o = n.displayName || n.name;
        if (h && n.$$typeof === h && (l = !0, 'function' != typeof(m = n.render)))
            throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
        var p, q, r = function(n, b) {
            return (0, f.useObserver)(function() {
                return m(n, b);
            }, o);
        };
        return '' !== o && (r.displayName = o), n.contextTypes && (r.contextTypes = n.contextTypes), l && (r = (0, d.forwardRef)(r)), r = (0, d.memo)(r), p = n, q = r, Object.keys(p).forEach(function(n) {
            k[n] || Object.defineProperty(q, n, Object.getOwnPropertyDescriptor(p, n));
        }), r;
    }
    var k = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    };
}), c.register('cLxWK', function(a, b) {
    c('Htj60');
}), c.register('ZevWA', function(a, h) {
    b(a.exports, 'useLocalObservable', function() {
        return f;
    });
    var d = c('UnUp5'),
        e = c('uPP4W');

    function f(a, b) {
        return (0, e.useState)(function() {
            return (0, d.observable)(a(), b, {
                autoBind: !0
            });
        })[0];
    }
}), c.register('vRD8T', function(a, b) {
    c('UnUp5'), c('uPP4W');
    c('sCcFp649');
    c('nbeWk');
}), c.register('nbeWk', function(a, h) {
    b(a.exports, 'useAsObservableSource', function() {
        return g;
    }, function(a) {
        return g = a;
    }), c('sCcFp649');
    var d = c('UnUp5'),
        e = c('uPP4W'),
        f = function(a, b) {
            var g = 'function' == typeof Symbol && a[Symbol.iterator];
            if (!g)
                return a;
            var h, i, j = g.call(a),
                k = [];
            try {
                for (;
                    (void 0 === b || b-- > 0) && !(h = j.next()).done;)
                    k.push(h.value);
            } catch (a) {
                i = {
                    error: a
                };
            } finally {
                try {
                    h && !h.done && (g = j.return) && g.call(j);
                } finally {
                    if (i)
                        throw i.error;
                }
            }
            return k;
        };

    function g(a) {
        var h = f((0, e.useState)(function() {
            return (0, d.observable)(a, {}, {
                deep: !1
            });
        }), 1)[0];
        return (0, d.runInAction)(function() {
            Object.assign(h, a);
        }), h;
    }
});