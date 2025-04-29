function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('6jmvl', function(d, e) {
    b(d.exports, 'observer', function() {
        return _G;
    }), b(d.exports, 'Provider', function() {
        return _K;
    }), b(d.exports, 'inject', function() {
        return _N;
    });
    var f = c('JkQCT'),
        g = c('O0Kav');
    c('NU2gN');
    var h = c('VgtY1'),
        i = c('DJqbV');
    c('f0L2A');
    c('NU2gN');
    h = c('VgtY1'), i = c('DJqbV'), c('f0L2A');
    var j = 0;
    var k = {};

    function l(m) {
        return k[m] || (k[m] = function(n) {
            if ('function' == typeof Symbol)
                return Symbol(n);
            var o = '__$mobx-react ' + n + ' (' + j + ')';
            return j++, o;
        }(m)), k[m];
    }

    function m(n, o) {
        if (_n(n, o))
            return !0;
        if ('object' != typeof n || null === n || 'object' != typeof o || null === o)
            return !1;
        var p = Object.keys(n),
            q = Object.keys(o);
        if (p.length !== q.length)
            return !1;
        for (var r = 0; r < p.length; r++)
            if (!Object.hasOwnProperty.call(o, p[r]) || !_n(n[p[r]], o[p[r]]))
                return !1;
        return !0;
    }

    function _n(o, p) {
        return o === p ? 0 !== o || 1 / o == 1 / p : o != o && p != p;
    }
    var o = {
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

    function p(q, r, s) {
        Object.hasOwnProperty.call(q, r) ? q[r] = s : Object.defineProperty(q, r, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: s
        });
    }
    var q = l('patchMixins'),
        r = l('patchedDefinition');

    function s(t, u) {
        for (var v = this, w = arguments.length, x = new Array(w > 2 ? w - 2 : 0), y = 2; y < w; y++)
            x[y - 2] = arguments[y];
        u.locks++;
        try {
            var z;
            return null != t && (z = t.apply(this, x)), z;
        } finally {
            u.locks--, 0 === u.locks && u.methods.forEach(function(z) {
                z.apply(v, x);
            });
        }
    }

    function t(u, v) {
        return function() {
            for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                x[y] = arguments[y];
            s.call.apply(s, [
                this,
                u,
                v
            ].concat(x));
        };
    }

    function u(v, w, x) {
        var y = function(z, A) {
            var B = z[q] = z[q] || {},
                C = B[A] = B[A] || {};
            return C.locks = C.locks || 0, C.methods = C.methods || [], C;
        }(v, w);
        y.methods.indexOf(x) < 0 && y.methods.push(x);
        var z = Object.getOwnPropertyDescriptor(v, w);
        if (!z || !z[r]) {
            var A = v[w],
                B = _v(v, w, z ? z.enumerable : void 0, y, A);
            Object.defineProperty(v, w, B);
        }
    }

    function _v(w, x, y, z, A) {
        var B, C = t(A, z);
        return (B = {})[r] = !0, B.get = function() {
            return C;
        }, B.set = function(D) {
            if (this === w)
                C = t(D, z);
            else {
                var E = _v(this, x, y, z, D);
                Object.defineProperty(this, x, E);
            }
        }, B.configurable = !0, B.enumerable = y, B;
    }
    var w = f.$mobx || '$mobx',
        x = l('isMobXReactObserver'),
        y = l('isUnmounted'),
        z = l('skipRender'),
        A = l('isForcingUpdate');

    function B(C) {
        var D = C.prototype;
        if (C[x]) {
            var E = _C(D);
            console.warn('The provided component class (' + E + ')\n                has already been declared as an observer component.');
        } else
            C[x] = !0;
        if (D.componentWillReact)
            throw new Error('The componentWillReact life-cycle event is no longer supported');
        if (C.__proto__ !== g.PureComponent)
            if (D.shouldComponentUpdate) {
                if (D.shouldComponentUpdate !== _E)
                    throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
            } else
                D.shouldComponentUpdate = _E;
        _F(D, 'props'), _F(D, 'state'), C.contextType && _F(D, 'context');
        var E = D.render;
        if ('function' != typeof E) {
            var F = _C(D);
            throw new Error('[mobx-react] class component (' + F + ') is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.');
        }
        return D.render = function() {
            return this.render = (0, h.isUsingStaticRendering)() ? E : _D.call(this, E), this.render();
        }, u(D, 'componentDidMount', function() {
            this[y] = !1, this.render[w] || g.Component.prototype.forceUpdate.call(this);
        }), u(D, 'componentWillUnmount', function() {
            if (!(0, h.isUsingStaticRendering)()) {
                var F = this.render[w];
                if (F)
                    F.dispose(), this.render[w] = null;
                else {
                    var G = _C(this);
                    console.warn('The reactive render of an observer class component (' + G + ')\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.');
                }
                this[y] = !0;
            }
        }), C;
    }

    function _C(D) {
        return D.displayName || D.name || D.constructor && (D.constructor.displayName || D.constructor.name) || '<component>';
    }

    function _D(E) {
        var F = this;
        p(this, z, !1), p(this, A, !1);
        var G = _C(this),
            H = E.bind(this),
            I = !1;
        return function E() {
            var J;
            I = !1;
            var K = null != (J = E[w]) ? J : E[w] = function() {
                    var L = new(0, f.Reaction)(G + '.render()', function() {
                        if (!I && (I = !0, !0 !== F[y])) {
                            var M = !0;
                            try {
                                p(F, A, !0), F[z] || g.Component.prototype.forceUpdate.call(F), M = !1;
                            } finally {
                                p(F, A, !1), M && (L.dispose(), F.render[w] = null);
                            }
                        }
                    });
                    return L.reactComponent = F, L;
                }(),
                L = void 0,
                M = void 0;
            if (K.track(function() {
                    try {
                        M = (0, f._allowStateChanges)(!1, H);
                    } catch (E) {
                        L = E;
                    }
                }), L)
                throw L;
            return M;
        };
    }

    function _E(F, G) {
        return (0, h.isUsingStaticRendering)() && console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.'), this.state !== G || !m(this.props, F);
    }

    function _F(G, H) {
        var I = l('reactProp_' + H + '_valueHolder'),
            J = l('reactProp_' + H + '_atomHolder');

        function K() {
            return this[J] || p(this, J, (0, f.createAtom)('reactive ' + H)), this[J];
        }
        Object.defineProperty(G, H, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var L = !1;
                return f._allowStateReadsStart && f._allowStateReadsEnd && (L = (0, f._allowStateReadsStart)(!0)), K.call(this).reportObserved(), f._allowStateReadsStart && f._allowStateReadsEnd && (0, f._allowStateReadsEnd)(L), this[I];
            },
            set: function(L) {
                this[A] || m(this[I], L) ? p(this, I, L) : (p(this, I, L), p(this, z, !0), K.call(this).reportChanged(), p(this, z, !1));
            }
        });
    }

    function _G(H) {
        return !0 === H.isMobxInjector && console.warn('Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`'), Object.prototype.isPrototypeOf.call(g.Component, H) || Object.prototype.isPrototypeOf.call(g.PureComponent, H) ? B(H) : (0, i.observer)(H);
    }

    function H() {
        return H = Object.assign || function(I) {
            for (var J = 1; J < arguments.length; J++) {
                var K = arguments[J];
                for (var L in K)
                    Object.prototype.hasOwnProperty.call(K, L) && (I[L] = K[L]);
            }
            return I;
        }, H.apply(this, arguments);
    }
    var I = ['children'],
        J = a(g).createContext({});

    function _K(L) {
        var M = L.children,
            N = function(O, P) {
                if (null == O)
                    return {};
                var Q, R, S = {},
                    T = Object.keys(O);
                for (R = 0; R < T.length; R++)
                    Q = T[R], P.indexOf(Q) >= 0 || (S[Q] = O[Q]);
                return S;
            }(L, I),
            O = a(g).useContext(J),
            P = a(g).useRef(H({}, O, N)).current;
        return a(g).createElement(J.Provider, {
            value: P
        }, M);
    }

    function L(M, N, O, P) {
        var Q, R, S, T = a(g).forwardRef(function(U, V) {
            var W = H({}, U),
                X = a(g).useContext(J);
            return Object.assign(W, M(X || {}, W) || {}), V && (W.ref = V), a(g).createElement(N, W);
        });
        return P && (T = _G(T)), T.isMobxInjector = !0, Q = N, R = T, S = Object.getOwnPropertyNames(Object.getPrototypeOf(Q)), Object.getOwnPropertyNames(Q).forEach(function(U) {
            o[U] || -1 !== S.indexOf(U) || Object.defineProperty(R, U, Object.getOwnPropertyDescriptor(Q, U));
        }), T.wrappedComponent = N, T.displayName = function(U, V) {
            var W, X = U.displayName || U.name || U.constructor && U.constructor.name || 'Component';
            W = V ? 'inject-with-' + V + '(' + X + ')' : 'inject(' + X + ')';
            return W;
        }(N, O), T;
    }

    function M(N) {
        return function(O, P) {
            return N.forEach(function(Q) {
                if (!(Q in P)) {
                    if (!(Q in O))
                        throw new Error('MobX injector: Store \'' + Q + '\' is not available! Make sure it is provided by some Provider');
                    P[Q] = O[Q];
                }
            }), P;
        };
    }

    function _N() {
        for (var O = arguments.length, P = new Array(O), Q = 0; Q < O; Q++)
            P[Q] = arguments[Q];
        if ('function' == typeof arguments[0]) {
            var R = arguments[0];
            return function(S) {
                return L(R, S, R.name, !0);
            };
        }
        return function(R) {
            return L(M(P), R, P.join('-'), !1);
        };
    }
    _K.displayName = 'MobXProvider';
    if (!g.Component)
        throw new Error('mobx-react requires React to be available');
    if (!f.observable)
        throw new Error('mobx-react requires mobx to be available');
}), c.register('NU2gN', function(d, e) {
    b(d.exports, 'isUsingStaticRendering', function() {
        return c('VgtY1').isUsingStaticRendering;
    }), b(d.exports, 'observer', function() {
        return c('DJqbV').observer;
    }), b(d.exports, 'useLocalObservable', function() {
        return c('f0L2A').useLocalObservable;
    }), c('X7SW9'), c('7m6/Y');
    var f = c('kZLBJ');
    c('CE63I');
    c('bKfp51');
    c('ZTS7W'), c('VgtY1'), c('VgtY1'), c('DJqbV'), c('QheQn'), c('f0L2A'), c('EY73G'), c('88HIh'), c('R1YQM');
    (0, c('CE63I').observerBatching)(f.unstable_batchedUpdates);
}), c.register('X7SW9', function(d, e) {
    var f = c('JkQCT');
    if (!c('O0Kav').useState)
        throw new Error('mobx-react-lite requires React with Hooks support');
    if (!f.makeObservable)
        throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
}), c.register('7m6/Y', function(d, e) {
    b(d.exports, 'unstable_batchedUpdates', function() {
        return c('kZLBJ').unstable_batchedUpdates;
    });
    c('kZLBJ');
}), c.register('CE63I', function(d, e) {
    b(d.exports, 'observerBatching', function() {
        return _h;
    });
    var f = c('JkQCT');

    function g(h) {
        h();
    }

    function _h(i) {
        i || (i = g), (0, f.configure)({
            reactionScheduler: i
        });
    }
}), c.register('bKfp51', function(d, e) {}), c.register('ZTS7W', function(d, e) {
    b(d.exports, 'useObserver', function() {
        return _o;
    }, function(f) {
        return _o = f;
    });
    var f = c('JkQCT'),
        g = c('O0Kav'),
        h = c('eVcRq'),
        i = c('R1YQM'),
        j = c('VgtY1'),
        k = function(l, m) {
            var n = 'function' == typeof Symbol && l[Symbol.iterator];
            if (!n)
                return l;
            var o, p, q = n.call(l),
                r = [];
            try {
                for (;
                    (void 0 === m || m-- > 0) && !(o = q.next()).done;)
                    r.push(o.value);
            } catch (l) {
                p = {
                    error: l
                };
            } finally {
                try {
                    o && !o.done && (n = q.return) && n.call(q);
                } finally {
                    if (p)
                        throw p.error;
                }
            }
            return r;
        };

    function l(m) {
        return 'observer'.concat(m);
    }
    var m = function() {};

    function n() {
        return new m();
    }

    function _o(p, q) {
        if (void 0 === q && (q = 'observed'), (0, j.isUsingStaticRendering)())
            return p();
        var r = k(a(g).useState(n), 1)[0],
            s = k(a(g).useState(), 2)[1],
            t = function() {
                return s([]);
            },
            u = a(g).useRef(null);
        if (!u.current)
            var v = new(0, f.Reaction)(l(q), function() {
                    _w.mounted ? t() : _w.changedBeforeMount = !0;
                }),
                _w = (0, i.addReactionToTrack)(u, v, r);
        var v, w, x = u.current.reaction;
        if (a(g).useDebugValue(x, h.printDebugValue), a(g).useEffect(function() {
                return (0, i.recordReactionAsCommitted)(u), u.current ? (u.current.mounted = !0, u.current.changedBeforeMount && (u.current.changedBeforeMount = !1, t())) : (u.current = {
                        reaction: new(0, f.Reaction)(l(q), function() {
                            t();
                        }),
                        mounted: !0,
                        changedBeforeMount: !1,
                        cleanAt: 1 / 0
                    }, t()),
                    function() {
                        u.current.reaction.dispose(), u.current = null;
                    };
            }, []), x.track(function() {
                try {
                    v = p();
                } catch (a) {
                    w = a;
                }
            }), w)
            throw w;
        return v;
    }
}), c.register('eVcRq', function(d, e) {
    b(d.exports, 'printDebugValue', function() {
        return _g;
    });
    var f = c('JkQCT');

    function _g(h) {
        return (0, f.getDependencyTree)(h);
    }
}), c.register('R1YQM', function(d, e) {
    b(d.exports, 'addReactionToTrack', function() {
        return _j;
    }), b(d.exports, 'recordReactionAsCommitted', function() {
        return _k;
    });
    var f = c('Y0TqS'),
        g = c('whR7Y'),
        h = c('TcyLf'),
        i = f.FinalizationRegistry ? (0, g.createReactionCleanupTrackingUsingFinalizationRegister)(f.FinalizationRegistry) : (0, h.createTimerBasedReactionCleanupTracking)(),
        _j = i.addReactionToTrack,
        _k = i.recordReactionAsCommitted;
    i.resetCleanupScheduleForTests, i.forceCleanupTimerToRunNowForTests;
}), c.register('Y0TqS', function(d, e) {
    b(d.exports, 'FinalizationRegistry', function() {
        return _f;
    });
    var _f = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
}), c.register('whR7Y', function(d, e) {
    b(d.exports, 'createReactionCleanupTrackingUsingFinalizationRegister', function() {
        return _g;
    });
    var f = c('bRUqg');

    function _g(h) {
        var i = new Map(),
            j = 1,
            k = new h(function(l) {
                var m = i.get(l);
                m && (m.reaction.dispose(), i.delete(l));
            });
        return {
            addReactionToTrack: function(l, m, n) {
                var o = j++;
                return k.register(n, o, l), l.current = (0, f.createTrackingData)(m), l.current.finalizationRegistryCleanupToken = o, i.set(o, l.current), l.current;
            },
            recordReactionAsCommitted: function(l) {
                k.unregister(l), l.current && l.current.finalizationRegistryCleanupToken && i.delete(l.current.finalizationRegistryCleanupToken);
            },
            forceCleanupTimerToRunNowForTests: function() {},
            resetCleanupScheduleForTests: function() {}
        };
    }
}), c.register('bRUqg', function(d, e) {
    function f(g) {
        return {
            reaction: g,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + _g
        };
    }
    b(d.exports, 'createTrackingData', function() {
        return f;
    }), b(d.exports, 'CLEANUP_TIMER_LOOP_MILLIS', function() {
        return _h;
    });
    var _g = 10000,
        _h = 10000;
}), c.register('TcyLf', function(d, e) {
    b(d.exports, 'createTimerBasedReactionCleanupTracking', function() {
        return _h;
    }, function(f) {
        return _h = f;
    });
    var f = c('bRUqg'),
        g = function(h) {
            var i = 'function' == typeof Symbol && Symbol.iterator,
                j = i && h[i],
                k = 0;
            if (j)
                return j.call(h);
            if (h && 'number' == typeof h.length)
                return {
                    next: function() {
                        return h && k >= h.length && (h = void 0), {
                            value: h && h[k++],
                            done: !h
                        };
                    }
                };
            throw new TypeError(i ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        };

    function _h() {
        var i, j = new Set();

        function k() {
            void 0 === i && (i = setTimeout(e, f.CLEANUP_TIMER_LOOP_MILLIS));
        }

        function l() {
            i = void 0;
            var m = Date.now();
            j.forEach(function(n) {
                var o = n.current;
                o && m >= o.cleanAt && (o.reaction.dispose(), n.current = null, j.delete(n));
            }), j.size > 0 && k();
        }
        return {
            addReactionToTrack: function(m, n, o) {
                var p;
                return m.current = (0, f.createTrackingData)(n), p = m, j.add(p), k(), m.current;
            },
            recordReactionAsCommitted: function(m) {
                j.delete(m);
            },
            forceCleanupTimerToRunNowForTests: function() {
                i && (clearTimeout(i), l());
            },
            resetCleanupScheduleForTests: function() {
                var m, n;
                if (j.size > 0) {
                    try {
                        for (var o = g(j), p = o.next(); !p.done; p = o.next()) {
                            var q = p.value,
                                r = q.current;
                            r && (r.reaction.dispose(), q.current = null);
                        }
                    } catch (i) {
                        m = {
                            error: i
                        };
                    } finally {
                        try {
                            _h && !_h.done && (n = f.return) && n.call(f);
                        } finally {
                            if (m)
                                throw m.error;
                        }
                    }
                    j.clear();
                }
                i && (clearTimeout(i), i = void 0);
            }
        };
    }
}), c.register('VgtY1', function(d, e) {
    b(d.exports, 'enableStaticRendering', function() {
        return _g;
    }), b(d.exports, 'isUsingStaticRendering', function() {
        return _h;
    });
    var f = !1;

    function _g(h) {
        f = h;
    }

    function _h() {
        return f;
    }
}), c.register('DJqbV', function(d, e) {
    b(d.exports, 'observer', function() {
        return _l;
    });
    var f = c('O0Kav'),
        g = c('VgtY1'),
        h = c('ZTS7W'),
        i = 'function' == typeof Symbol && Symbol.for,
        j = i ? Symbol.for('react.forward_ref') : 'function' == typeof f.forwardRef && (0, f.forwardRef)(function(k) {
            return null;
        }).$$typeof,
        k = i ? Symbol.for('react.memo') : 'function' == typeof f.memo && (0, f.memo)(function(l) {
            return null;
        }).$$typeof;

    function _l(m, n) {
        var o;
        if (k && m.$$typeof === k)
            throw new Error('[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies \'React.memo\' for you.');
        if ((0, g.isUsingStaticRendering)())
            return m;
        var p = null !== (o = null == n ? void 0 : n.forwardRef) && void 0 !== o && o,
            q = m,
            r = m.displayName || m.name;
        if (j && m.$$typeof === j && (p = !0, 'function' != typeof(q = m.render)))
            throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
        var s, t, u = function(v, w) {
            return (0, h.useObserver)(function() {
                return q(v, w);
            }, r);
        };
        return '' !== r && (u.displayName = r), m.contextTypes && (u.contextTypes = m.contextTypes), p && (u = (0, f.forwardRef)(u)), u = (0, f.memo)(u), s = m, t = u, Object.keys(s).forEach(function(v) {
            _m[v] || Object.defineProperty(t, v, Object.getOwnPropertyDescriptor(s, v));
        }), u;
    }
    var _m = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    };
}), c.register('QheQn', function(d, e) {
    c('ZTS7W');
}), c.register('f0L2A', function(d, e) {
    b(d.exports, 'useLocalObservable', function() {
        return _h;
    });
    var f = c('JkQCT'),
        g = c('O0Kav');

    function _h(i, j) {
        return (0, g.useState)(function() {
            return (0, f.observable)(i(), j, {
                autoBind: !0
            });
        })[0];
    }
}), c.register('EY73G', function(d, e) {
    c('JkQCT'), c('O0Kav');
    c('bKfp51');
    c('88HIh');
}), c.register('88HIh', function(d, e) {
    b(d.exports, 'useAsObservableSource', function() {
        return _i;
    }, function(f) {
        return _i = f;
    }), c('bKfp51');
    var f = c('JkQCT'),
        g = c('O0Kav'),
        h = function(i, j) {
            var k = 'function' == typeof Symbol && i[Symbol.iterator];
            if (!k)
                return i;
            var l, m, n = k.call(i),
                o = [];
            try {
                for (;
                    (void 0 === j || j-- > 0) && !(l = n.next()).done;)
                    o.push(l.value);
            } catch (i) {
                m = {
                    error: i
                };
            } finally {
                try {
                    l && !l.done && (k = n.return) && k.call(n);
                } finally {
                    if (m)
                        throw m.error;
                }
            }
            return o;
        };

    function _i(j) {
        var k = h((0, g.useState)(function() {
            return (0, f.observable)(j, {}, {
                deep: !1
            });
        }), 1)[0];
        return (0, f.runInAction)(function() {
            Object.assign(k, j);
        }), k;
    }
});