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
c.register('.....', function (d, e) {
    b(d.exports, 'observer', function () {
        return _db;
    }), b(d.exports, 'Provider', function () {
        return _hb;
    }), b(d.exports, 'inject', function () {
        return _sb;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....');
    c('.....');
    c('.....');
    h = c('.....'), i = c('.....'), c('.....');
    var j = 0;
    var k = {};
    function l(m) {
        return k[m] || (k[m] = function (n) {
            if ('function' == typeof Symbol)
                return Symbol(n);
            var o = '__$mobx-react ' + n + ' (' + j + ')';
            return j++, o;
        }(m)), k[m];
    }
    function m(n, o) {
        if (_q(n, o))
            return !0;
        if ('object' != typeof n || null === n || 'object' != typeof o || null === o)
            return !1;
        var p = Object.keys(n), q = Object.keys(o);
        if (p.length !== q.length)
            return !1;
        for (var r = 0; r < p.length; r++)
            if (!Object.hasOwnProperty.call(o, p[r]) || !_q(n[p[r]], o[p[r]]))
                return !1;
        return !0;
    }
    function _q(r, s) {
        return r === s ? 0 !== r || 1 / r == 1 / s : r != r && s != s;
    }
    var r = {
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
    function s(t, u, v) {
        Object.hasOwnProperty.call(t, u) ? t[u] = v : Object.defineProperty(t, u, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: v
        });
    }
    var t = l('patchMixins'), u = l('patchedDefinition');
    function v(w, x) {
        for (var y = this, z = arguments.length, A = new Array(z > 2 ? z - 2 : 0), B = 2; B < z; B++)
            A[B - 2] = arguments[B];
        x.locks++;
        try {
            var C;
            return null != w && (C = w.apply(this, A)), C;
        } finally {
            x.locks--, 0 === x.locks && x.methods.forEach(function (D) {
                D.apply(y, A);
            });
        }
    }
    function B(C, D) {
        return function () {
            for (var E = arguments.length, F = new Array(E), G = 0; G < E; G++)
                F[G] = arguments[G];
            v.call.apply(v, [
                this,
                C,
                D
            ].concat(F));
        };
    }
    function C(D, E, F) {
        var G = function (H, I) {
            var J = H[t] = H[t] || {}, K = J[I] = J[I] || {};
            return K.locks = K.locks || 0, K.methods = K.methods || [], K;
        }(D, E);
        G.methods.indexOf(F) < 0 && G.methods.push(F);
        var H = Object.getOwnPropertyDescriptor(D, E);
        if (!H || !H[u]) {
            var I = D[E], J = _H(D, E, H ? H.enumerable : void 0, G, I);
            Object.defineProperty(D, E, J);
        }
    }
    function _H(I, J, K, L, M) {
        var N, O = B(M, L);
        return (N = {})[u] = !0, N.get = function () {
            return O;
        }, N.set = function (P) {
            if (this === I)
                O = B(P, L);
            else {
                var Q = _H(this, J, K, L, P);
                Object.defineProperty(this, J, Q);
            }
        }, N.configurable = !0, N.enumerable = K, N;
    }
    var K = N.$mobx || '$mobx', L = l('isMobXReactObserver'), M = l('isUnmounted'), N = l('skipRender'), O = l('isForcingUpdate');
    function P(Q) {
        var R = Q.prototype;
        if (Q[L]) {
            var S = _U(R);
            console.warn('The provided component class (' + S + ')\n                has already been declared as an observer component.');
        } else
            Q[L] = !0;
        if (R.componentWillReact)
            throw new Error('The componentWillReact life-cycle event is no longer supported');
        if (Q.__proto__ !== O.PureComponent)
            if (R.shouldComponentUpdate) {
                if (R.shouldComponentUpdate !== _$)
                    throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
            } else
                R.shouldComponentUpdate = _$;
        _ab(R, 'props'), _ab(R, 'state'), Q.contextType && _ab(R, 'context');
        var T = R.render;
        if ('function' != typeof T) {
            var U = _U(R);
            throw new Error('[mobx-react] class component (' + U + ') is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.');
        }
        return R.render = function () {
            return this.render = (0, h.isUsingStaticRendering)() ? T : _V.call(this, T), this.render();
        }, C(R, 'componentDidMount', function () {
            this[M] = !1, this.render[K] || O.Component.prototype.forceUpdate.call(this);
        }), C(R, 'componentWillUnmount', function () {
            if (!(0, h.isUsingStaticRendering)()) {
                var V = this.render[K];
                if (V)
                    V.dispose(), this.render[K] = null;
                else {
                    var W = _U(this);
                    console.warn('The reactive render of an observer class component (' + W + ')\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.');
                }
                this[M] = !0;
            }
        }), Q;
    }
    function _U(V) {
        return V.displayName || V.name || V.constructor && (V.constructor.displayName || V.constructor.name) || '<component>';
    }
    function _V(W) {
        var X = this;
        s(this, N, !1), s(this, O, !1);
        var Y = _U(this), Z = W.bind(this), $ = !1;
        return function W() {
            var ab;
            $ = !1;
            var bb = null != (ab = W[K]) ? ab : W[K] = function () {
                    var cb = new (0, N.Reaction)(Y + '.render()', function () {
                        if (!$ && ($ = !0, !0 !== X[M])) {
                            var db = !0;
                            try {
                                s(X, O, !0), X[N] || O.Component.prototype.forceUpdate.call(X), db = !1;
                            } finally {
                                s(X, O, !1), db && (cb.dispose(), X.render[K] = null);
                            }
                        }
                    });
                    return cb.reactComponent = X, cb;
                }(), cb = void 0, db = void 0;
            if (bb.track(function () {
                    try {
                        db = (0, N._allowStateChanges)(!1, Z);
                    } catch (W) {
                        cb = W;
                    }
                }), cb)
                throw cb;
            return db;
        };
    }
    function _$(ab, bb) {
        return (0, h.isUsingStaticRendering)() && console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.'), this.state !== bb || !m(this.props, ab);
    }
    function _ab(bb, cb) {
        var db = l('reactProp_' + cb + '_valueHolder'), eb = l('reactProp_' + cb + '_atomHolder');
        function fb() {
            return this[eb] || s(this, eb, (0, N.createAtom)('reactive ' + cb)), this[eb];
        }
        Object.defineProperty(bb, cb, {
            configurable: !0,
            enumerable: !0,
            get: function () {
                var gb = !1;
                return N._allowStateReadsStart && N._allowStateReadsEnd && (gb = (0, N._allowStateReadsStart)(!0)), fb.call(this).reportObserved(), N._allowStateReadsStart && N._allowStateReadsEnd && (0, N._allowStateReadsEnd)(gb), this[db];
            },
            set: function (gb) {
                this[O] || m(this[db], gb) ? s(this, db, gb) : (s(this, db, gb), s(this, N, !0), fb.call(this).reportChanged(), s(this, N, !1));
            }
        });
    }
    function _db(eb) {
        return !0 === eb.isMobxInjector && console.warn('Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`'), Object.prototype.isPrototypeOf.call(O.Component, eb) || Object.prototype.isPrototypeOf.call(O.PureComponent, eb) ? P(eb) : (0, i.observer)(eb);
    }
    function eb() {
        return eb = Object.assign || function (fb) {
            for (var gb = 1; gb < arguments.length; gb++) {
                var hb = arguments[gb];
                for (var ib in hb)
                    Object.prototype.hasOwnProperty.call(hb, ib) && (fb[ib] = hb[ib]);
            }
            return fb;
        }, eb.apply(this, arguments);
    }
    var fb = ['children'], gb = a(O).createContext({});
    function _hb(ib) {
        var jb = ib.children, kb = function (lb, mb) {
                if (null == lb)
                    return {};
                var nb, ob, pb = {}, qb = Object.keys(lb);
                for (ob = 0; ob < qb.length; ob++)
                    nb = qb[ob], mb.indexOf(nb) >= 0 || (pb[nb] = lb[nb]);
                return pb;
            }(ib, fb), lb = a(O).useContext(gb), mb = a(O).useRef(eb({}, lb, kb)).current;
        return a(O).createElement(gb.Provider, { value: mb }, jb);
    }
    function mb(nb, ob, pb, qb) {
        var rb, sb, tb, ub = a(O).forwardRef(function (vb, wb) {
                var xb = eb({}, vb), yb = a(O).useContext(gb);
                return Object.assign(xb, nb(yb || {}, xb) || {}), wb && (xb.ref = wb), a(O).createElement(ob, xb);
            });
        return qb && (ub = _db(ub)), ub.isMobxInjector = !0, rb = ob, sb = ub, tb = Object.getOwnPropertyNames(Object.getPrototypeOf(rb)), Object.getOwnPropertyNames(rb).forEach(function (vb) {
            r[vb] || -1 !== tb.indexOf(vb) || Object.defineProperty(sb, vb, Object.getOwnPropertyDescriptor(rb, vb));
        }), ub.wrappedComponent = ob, ub.displayName = function (vb, wb) {
            var xb, yb = vb.displayName || vb.name || vb.constructor && vb.constructor.name || 'Component';
            xb = wb ? 'inject-with-' + wb + '(' + yb + ')' : 'inject(' + yb + ')';
            return xb;
        }(ob, pb), ub;
    }
    function rb(sb) {
        return function (tb, ub) {
            return sb.forEach(function (vb) {
                if (!(vb in ub)) {
                    if (!(vb in tb))
                        throw new Error('MobX injector: Store \'' + vb + '\' is not available! Make sure it is provided by some Provider');
                    ub[vb] = tb[vb];
                }
            }), ub;
        };
    }
    function _sb() {
        for (var tb = arguments.length, ub = new Array(tb), vb = 0; vb < tb; vb++)
            ub[vb] = arguments[vb];
        if ('function' == typeof arguments[0]) {
            var wb = arguments[0];
            return function (xb) {
                return mb(wb, xb, wb.name, !0);
            };
        }
        return function (xb) {
            return mb(rb(ub), xb, ub.join('-'), !1);
        };
    }
    _hb.displayName = 'MobXProvider';
    if (!O.Component)
        throw new Error('mobx-react requires React to be available');
    if (!rb.observable)
        throw new Error('mobx-react requires mobx to be available');
}), c.register('.....', function (d, e) {
    b(d.exports, 'isUsingStaticRendering', function () {
        return c('.....').isUsingStaticRendering;
    }), b(d.exports, 'observer', function () {
        return c('.....').observer;
    }), b(d.exports, 'useLocalObservable', function () {
        return c('.....').useLocalObservable;
    }), c('.....'), c('.....');
    var f = c('.....');
    c('.....');
    c('.....');
    c('.....'), c('.....'), c('.....'), c('.....'), c('.....'), c('.....'), c('.....'), c('.....'), c('.....');
    (0, c('.....').observerBatching)(f.unstable_batchedUpdates);
}), c.register('.....', function (d, e) {
    var f = c('.....');
    if (!c('.....').useState)
        throw new Error('mobx-react-lite requires React with Hooks support');
    if (!f.makeObservable)
        throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
}), c.register('.....', function (d, e) {
    b(d.exports, 'unstable_batchedUpdates', function () {
        return c('.....').unstable_batchedUpdates;
    });
    c('.....');
}), c.register('.....', function (d, e) {
    b(d.exports, 'observerBatching', function () {
        return _h;
    });
    var f = c('.....');
    function g(h) {
        h();
    }
    function _h(i) {
        i || (i = g), (0, f.configure)({ reactionScheduler: i });
    }
}), c.register('.....', function (d, e) {
}), c.register('.....', function (d, e) {
    b(d.exports, 'useObserver', function () {
        return _o;
    }, function (f) {
        return _o = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = function (l, m) {
            var n = 'function' == typeof Symbol && l[Symbol.iterator];
            if (!n)
                return l;
            var o, p, q = n.call(l), r = [];
            try {
                for (; (void 0 === m || m-- > 0) && !(o = q.next()).done;)
                    r.push(o.value);
            } catch (l) {
                p = { error: l };
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
    var m = function () {
    };
    function n() {
        return new m();
    }
    function _o(p, q) {
        if (void 0 === q && (q = 'observed'), (0, j.isUsingStaticRendering)())
            return p();
        var r = k(a(g).useState(n), 1)[0], s = k(a(g).useState(), 2)[1], t = function () {
                return s([]);
            }, u = a(g).useRef(null);
        if (!_o.current)
            var v = new (0, f.Reaction)(l(q), function () {
                    _w.mounted ? t() : _w.changedBeforeMount = !0;
                }), _w = (0, i.addReactionToTrack)(_o, v, r);
        var x, y, z = _o.current.reaction;
        if (a(g).useDebugValue(z, h.printDebugValue), a(g).useEffect(function () {
                return (0, i.recordReactionAsCommitted)(_o), _o.current ? (_o.current.mounted = !0, _o.current.changedBeforeMount && (_o.current.changedBeforeMount = !1, t())) : (_o.current = {
                    reaction: new (0, f.Reaction)(l(q), function () {
                        t();
                    }),
                    mounted: !0,
                    changedBeforeMount: !1,
                    cleanAt: 1 / 0
                }, t()), function () {
                    _o.current.reaction.dispose(), _o.current = null;
                };
            }, []), z.track(function () {
                try {
                    x = p();
                } catch (a) {
                    y = a;
                }
            }), y)
            throw y;
        return x;
    }
}), c.register('.....', function (d, e) {
    b(d.exports, 'printDebugValue', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        return (0, f.getDependencyTree)(h);
    }
}), c.register('.....', function (d, e) {
    b(d.exports, 'addReactionToTrack', function () {
        return _j;
    }), b(d.exports, 'recordReactionAsCommitted', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = f.FinalizationRegistry ? (0, g.createReactionCleanupTrackingUsingFinalizationRegister)(f.FinalizationRegistry) : (0, h.createTimerBasedReactionCleanupTracking)(), _j = i.addReactionToTrack, _k = i.recordReactionAsCommitted;
    i.resetCleanupScheduleForTests, i.forceCleanupTimerToRunNowForTests;
}), c.register('.....', function (d, e) {
    b(d.exports, 'FinalizationRegistry', function () {
        return _f;
    });
    var _f = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
}), c.register('.....', function (d, e) {
    b(d.exports, 'createReactionCleanupTrackingUsingFinalizationRegister', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        var i = new Map(), j = 1, k = new h(function (l) {
                var m = i.get(l);
                m && (m.reaction.dispose(), i.delete(l));
            });
        return {
            addReactionToTrack: function (l, m, n) {
                var o = j++;
                return k.register(n, o, l), l.current = (0, f.createTrackingData)(m), l.current.finalizationRegistryCleanupToken = o, i.set(o, l.current), l.current;
            },
            recordReactionAsCommitted: function (l) {
                k.unregister(l), l.current && l.current.finalizationRegistryCleanupToken && i.delete(l.current.finalizationRegistryCleanupToken);
            },
            forceCleanupTimerToRunNowForTests: function () {
            },
            resetCleanupScheduleForTests: function () {
            }
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return {
            reaction: g,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + _g
        };
    }
    b(d.exports, 'createTrackingData', function () {
        return f;
    }), b(d.exports, 'CLEANUP_TIMER_LOOP_MILLIS', function () {
        return _h;
    });
    var _g = 10000, _h = 10000;
}), c.register('.....', function (d, e) {
    b(d.exports, 'createTimerBasedReactionCleanupTracking', function () {
        return _h;
    }, function (f) {
        return _h = f;
    });
    var f = c('.....'), g = function (h) {
            var i = 'function' == typeof Symbol && Symbol.iterator, j = i && h[i], k = 0;
            if (j)
                return j.call(h);
            if (h && 'number' == typeof h.length)
                return {
                    next: function () {
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
            j.forEach(function (n) {
                var o = n.current;
                o && l >= o.cleanAt && (o.reaction.dispose(), n.current = null, j.delete(n));
            }), j.size > 0 && k();
        }
        return {
            addReactionToTrack: function (n, o, p) {
                var q;
                return n.current = (0, f.createTrackingData)(o), q = n, j.add(q), k(), n.current;
            },
            recordReactionAsCommitted: function (n) {
                j.delete(n);
            },
            forceCleanupTimerToRunNowForTests: function () {
                i && (clearTimeout(i), l());
            },
            resetCleanupScheduleForTests: function () {
                var n, o;
                if (j.size > 0) {
                    try {
                        for (var p = g(j), q = p.next(); !q.done; q = p.next()) {
                            var r = q.value, s = r.current;
                            s && (s.reaction.dispose(), r.current = null);
                        }
                    } catch (i) {
                        n = { error: i };
                    } finally {
                        try {
                            q && !q.done && (o = p.return) && o.call(p);
                        } finally {
                            if (n)
                                throw n.error;
                        }
                    }
                    j.clear();
                }
                i && (clearTimeout(i), i = void 0);
            }
        };
    }
}), c.register('.....', function (d, e) {
    b(d.exports, 'enableStaticRendering', function () {
        return _g;
    }), b(d.exports, 'isUsingStaticRendering', function () {
        return _h;
    });
    var f = !1;
    function _g(h) {
        f = h;
    }
    function _h() {
        return f;
    }
}), c.register('.....', function (d, e) {
    b(d.exports, 'observer', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = 'function' == typeof Symbol && Symbol.for, j = i ? Symbol.for('react.forward_ref') : 'function' == typeof f.forwardRef && (0, f.forwardRef)(function (k) {
            return null;
        }).$$typeof, k = i ? Symbol.for('react.memo') : 'function' == typeof f.memo && (0, f.memo)(function (l) {
            return null;
        }).$$typeof;
    function _l(m, n) {
        var o;
        if (k && m.$$typeof === k)
            throw new Error('[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies \'React.memo\' for you.');
        if ((0, g.isUsingStaticRendering)())
            return m;
        var p = null !== (o = null == n ? void 0 : n.forwardRef) && void 0 !== o && o, q = m, r = m.displayName || m.name;
        if (j && m.$$typeof === j && (p = !0, 'function' != typeof (q = m.render)))
            throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
        var s, t, u = function (v, w) {
                return (0, h.useObserver)(function () {
                    return q(v, w);
                }, _l);
            };
        return '' !== _l && (u.displayName = _l), m.contextTypes && (u.contextTypes = m.contextTypes), p && (u = (0, f.forwardRef)(u)), u = (0, f.memo)(u), s = m, t = u, Object.keys(s).forEach(function (v) {
            _t[v] || Object.defineProperty(t, v, Object.getOwnPropertyDescriptor(s, v));
        }), u;
    }
    var _t = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    };
}), c.register('.....', function (d, e) {
    c('.....');
}), c.register('.....', function (d, e) {
    b(d.exports, 'useLocalObservable', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        return (0, g.useState)(function () {
            return (0, f.observable)(i(), j, { autoBind: !0 });
        })[0];
    }
}), c.register('.....', function (d, e) {
    c('.....'), c('.....');
    c('.....');
    c('.....');
}), c.register('.....', function (d, e) {
    b(d.exports, 'useAsObservableSource', function () {
        return _i;
    }, function (f) {
        return _i = f;
    }), c('.....');
    var f = c('.....'), g = c('.....'), h = function (i, j) {
            var k = 'function' == typeof Symbol && i[Symbol.iterator];
            if (!k)
                return i;
            var l, m, n = k.call(i), o = [];
            try {
                for (; (void 0 === j || j-- > 0) && !(l = n.next()).done;)
                    o.push(l.value);
            } catch (i) {
                m = { error: i };
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
        var k = h((0, g.useState)(function () {
            return (0, f.observable)(j, {}, { deep: !1 });
        }), 1)[0];
        return (0, f.runInAction)(function () {
            Object.assign(k, j);
        }), k;
    }
});