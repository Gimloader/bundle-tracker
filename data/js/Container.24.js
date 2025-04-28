function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('2x11J', function(b, c) {
    _m(b.exports, 'observer', function() {
        return _r;
    }), _m(b.exports, 'Provider', function() {
        return _t;
    }), _m(b.exports, 'inject', function() {
        return _t;
    });
    var d = a('YuT/D'),
        e = a('LEQ5w');
    a('7up2I');
    var f = a('GI12H'),
        g = a('urQf7');
    a('nvMZS');
    a('7up2I');
    f = a('GI12H'), g = a('urQf7'), a('nvMZS');
    var h = 0;
    var i = {};

    function j(k) {
        return i[k] || (i[k] = function(l) {
            if ('function' == typeof Symbol)
                return Symbol(l);
            var _m = '__$mobx-react ' + l + ' (' + h + ')';
            return h++, _m;
        }(k)), i[k];
    }

    function j(k, l) {
        if (_j(k, l))
            return !0;
        if ('object' != typeof k || null === k || 'object' != typeof l || null === l)
            return !1;
        var m = Object.keys(k),
            n = Object.keys(l);
        if (m.length !== n.length)
            return !1;
        for (var o = 0; o < m.length; o++)
            if (!Object.hasOwnProperty.call(l, m[o]) || !_j(k[m[o]], l[m[o]]))
                return !1;
        return !0;
    }

    function _j(k, l) {
        return k === l ? 0 !== k || 1 / k == 1 / l : k != k && l != l;
    }
    var j = {
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

    function k(l, m, n) {
        Object.hasOwnProperty.call(l, m) ? l[m] = n : Object.defineProperty(l, m, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: n
        });
    }
    var k = _j('patchMixins'),
        l = _j('patchedDefinition');

    function m(n, o) {
        for (var p = this, q = arguments.length, r = new Array(q > 2 ? q - 2 : 0), s = 2; s < q; s++)
            r[s - 2] = arguments[s];
        o.locks++;
        try {
            var t;
            return null != n && (t = n.apply(this, r)), t;
        } finally {
            o.locks--, 0 === o.locks && o.methods.forEach(function(t) {
                t.apply(p, r);
            });
        }
    }

    function m(n, o) {
        return function() {
            for (var p = arguments.length, q = new Array(p), r = 0; r < p; r++)
                q[r] = arguments[r];
            _s.call.apply(_s, [
                this,
                n,
                o
            ].concat(q));
        };
    }

    function m(n, o, p) {
        var q = function(r, s) {
            var t = r[k] = r[k] || {},
                u = t[s] = t[s] || {};
            return u.locks = u.locks || 0, u.methods = u.methods || [], u;
        }(n, o);
        q.methods.indexOf(p) < 0 && q.methods.push(p);
        var r = Object.getOwnPropertyDescriptor(n, o);
        if (!r || !r[l]) {
            var s = n[o],
                t = _m(n, o, r ? r.enumerable : void 0, q, s);
            Object.defineProperty(n, o, t);
        }
    }

    function _m(n, o, p, q, r) {
        var s, t = _t(r, q);
        return (s = {})[l] = !0, s.get = function() {
            return t;
        }, s.set = function(u) {
            if (this === n)
                t = _t(u, q);
            else {
                var v = _m(this, o, p, q, u);
                Object.defineProperty(this, o, v);
            }
        }, s.configurable = !0, s.enumerable = p, s;
    }
    var m = d.$mobx || '$mobx',
        n = _j('isMobXReactObserver'),
        o = _j('isUnmounted'),
        p = _j('skipRender'),
        q = _j('isForcingUpdate');

    function r(s) {
        var t = s.prototype;
        if (s[n]) {
            var u = _r(t);
            console.warn('The provided component class (' + u + ')\n                has already been declared as an observer component.');
        } else
            s[n] = !0;
        if (t.componentWillReact)
            throw new Error('The componentWillReact life-cycle event is no longer supported');
        if (s.__proto__ !== e.PureComponent)
            if (t.shouldComponentUpdate) {
                if (t.shouldComponentUpdate !== _r)
                    throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
            } else
                t.shouldComponentUpdate = _r;
        _r(t, 'props'), _r(t, 'state'), s.contextType && _r(t, 'context');
        var u = t.render;
        if ('function' != typeof u) {
            var v = _r(t);
            throw new Error('[mobx-react] class component (' + v + ') is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.');
        }
        return t.render = function() {
            return this.render = (0, f.isUsingStaticRendering)() ? u : _r.call(this, u), this.render();
        }, w(t, 'componentDidMount', function() {
            this[o] = !1, this.render[m] || e.Component.prototype.forceUpdate.call(this);
        }), w(t, 'componentWillUnmount', function() {
            if (!(0, f.isUsingStaticRendering)()) {
                var v = this.render[m];
                if (v)
                    v.dispose(), this.render[m] = null;
                else {
                    var w = _r(this);
                    console.warn('The reactive render of an observer class component (' + w + ')\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.');
                }
                this[o] = !0;
            }
        }), s;
    }

    function _r(s) {
        return s.displayName || s.name || s.constructor && (s.constructor.displayName || s.constructor.name) || '<component>';
    }

    function _r(s) {
        var t = this;
        _r(this, p, !1), _r(this, q, !1);
        var u = P(this),
            v = s.bind(this),
            w = !1;
        return function s() {
            var x;
            w = !1;
            var y = null != (x = s[m]) ? x : s[m] = function() {
                    var z = new(0, d.Reaction)(u + '.render()', function() {
                        if (!w && (w = !0, !0 !== t[o])) {
                            var A = !0;
                            try {
                                _r(t, q, !0), t[p] || e.Component.prototype.forceUpdate.call(t), A = !1;
                            } finally {
                                _r(t, q, !1), A && (z.dispose(), t.render[m] = null);
                            }
                        }
                    });
                    return z.reactComponent = t, z;
                }(),
                z = void 0,
                A = void 0;
            if (y.track(function() {
                    try {
                        A = (0, d._allowStateChanges)(!1, v);
                    } catch (s) {
                        z = s;
                    }
                }), z)
                throw z;
            return A;
        };
    }

    function _r(s, t) {
        return (0, f.isUsingStaticRendering)() && console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.'), this.state !== t || !_j(this.props, s);
    }

    function _r(s, t) {
        var u = _j('reactProp_' + t + '_valueHolder'),
            v = _j('reactProp_' + t + '_atomHolder');

        function w() {
            return this[v] || _r(this, v, (0, d.createAtom)('reactive ' + t)), this[v];
        }
        Object.defineProperty(s, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var w = !1;
                return d._allowStateReadsStart && d._allowStateReadsEnd && (w = (0, d._allowStateReadsStart)(!0)), c.call(this).reportObserved(), d._allowStateReadsStart && d._allowStateReadsEnd && (0, d._allowStateReadsEnd)(w), this[u];
            },
            set: function(w) {
                this[q] || _j(this[u], w) ? _r(this, u, w) : (_r(this, u, w), _r(this, p, !0), c.call(this).reportChanged(), _r(this, p, !1));
            }
        });
    }

    function _r(s) {
        return !0 === s.isMobxInjector && console.warn('Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`'), Object.prototype.isPrototypeOf.call(e.Component, s) || Object.prototype.isPrototypeOf.call(e.PureComponent, s) ? j(s) : (0, g.observer)(s);
    }

    function r() {
        return r = Object.assign || function(s) {
            for (var t = 1; t < arguments.length; t++) {
                var u = arguments[t];
                for (var v in u)
                    Object.prototype.hasOwnProperty.call(u, v) && (s[v] = u[v]);
            }
            return s;
        }, r.apply(this, arguments);
    }
    var r = ['children'],
        s = _x(e).createContext({});

    function _t(u) {
        var v = u.children,
            w = function(_x, y) {
                if (null == _x)
                    return {};
                var z, A, B = {},
                    C = Object.keys(_x);
                for (A = 0; A < C.length; A++)
                    z = C[A], y.indexOf(z) >= 0 || (B[z] = _x[z]);
                return B;
            }(u, r),
            x = _C(e).useContext(s),
            y = _C(e).useRef(U({}, x, w)).current;
        return _C(e).createElement(s.Provider, {
            value: y
        }, v);
    }

    function t(u, v, w, x) {
        var y, z, A, B = _C(e).forwardRef(function(C, D) {
            var E = U({}, C),
                F = _C(e).useContext(s);
            return Object.assign(E, u(F || {}, E) || {}), D && (E.ref = D), _C(e).createElement(v, E);
        });
        return x && (B = _(B)), B.isMobxInjector = !0, y = v, z = B, A = Object.getOwnPropertyNames(Object.getPrototypeOf(y)), Object.getOwnPropertyNames(y).forEach(function(_C) {
            j[_C] || -1 !== A.indexOf(_C) || Object.defineProperty(z, _C, Object.getOwnPropertyDescriptor(y, _C));
        }), B.wrappedComponent = v, B.displayName = function(C, D) {
            var E, F = C.displayName || C.name || C.constructor && C.constructor.name || 'Component';
            E = D ? 'inject-with-' + D + '(' + F + ')' : 'inject(' + F + ')';
            return E;
        }(v, w), B;
    }

    function t(u) {
        return function(v, w) {
            return u.forEach(function(x) {
                if (!(x in w)) {
                    if (!(x in v))
                        throw new Error('MobX injector: Store \'' + x + '\' is not available! Make sure it is provided by some Provider');
                    w[x] = v[x];
                }
            }), w;
        };
    }

    function _t() {
        for (var u = arguments.length, v = new Array(u), w = 0; w < u; w++)
            v[w] = arguments[w];
        if ('function' == typeof arguments[0]) {
            var x = arguments[0];
            return function(y) {
                return A(x, y, x.name, !0);
            };
        }
        return function(x) {
            return A(B(v), x, v.join('-'), !1);
        };
    }
    F.displayName = 'MobXProvider';
    if (!e.Component)
        throw new Error('mobx-react requires React to be available');
    if (!d.observable)
        throw new Error('mobx-react requires mobx to be available');
}), a.register('7up2I', function(b, c) {
    _c(b.exports, 'isUsingStaticRendering', function() {
        return a('GI12H').isUsingStaticRendering;
    }), _c(b.exports, 'observer', function() {
        return a('urQf7').observer;
    }), _c(b.exports, 'useLocalObservable', function() {
        return a('nvMZS').useLocalObservable;
    }), a('2e/0w'), a('ygSoZ');
    var d = a('Z/8fU');
    a('H2ryk');
    a('eu82q');
    a('4GrBt'), a('GI12H'), a('GI12H'), a('urQf7'), a('+jkWX'), a('nvMZS'), a('iFZvb'), a('0FGtP'), a('O/bv2');
    (0, a('H2ryk').observerBatching)(d.unstable_batchedUpdates);
}), a.register('2e/0w', function(b, _c) {
    var d = a('YuT/D');
    if (!a('LEQ5w').useState)
        throw new Error('mobx-react-lite requires React with Hooks support');
    if (!d.makeObservable)
        throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
}), a.register('ygSoZ', function(b, c) {
    _c(b.exports, 'unstable_batchedUpdates', function() {
        return a('Z/8fU').unstable_batchedUpdates;
    });
    a('Z/8fU');
}), a.register('H2ryk', function(b, c) {
    _c(b.exports, 'observerBatching', function() {
        return _e;
    });
    var d = a('YuT/D');

    function e(f) {
        f();
    }

    function _e(f) {
        f || (f = _d), (0, d.configure)({
            reactionScheduler: f
        });
    }
}), a.register('eu82q', function(b, _c) {}), a.register('4GrBt', function(b, c) {
    _k(b.exports, 'useObserver', function() {
        return _k;
    }, function(d) {
        return _k = d;
    });
    var _d = a('YuT/D'),
        e = a('LEQ5w'),
        f = a('6+rVA'),
        g = a('O/bv2'),
        h = a('GI12H'),
        i = function(j, _k) {
            var l = 'function' == typeof Symbol && j[Symbol.iterator];
            if (!l)
                return j;
            var m, n, o = l.call(j),
                p = [];
            try {
                for (;
                    (void 0 === _k || _k-- > 0) && !(m = o.next()).done;)
                    p.push(m.value);
            } catch (j) {
                n = {
                    error: j
                };
            } finally {
                try {
                    m && !m.done && (l = o.return) && l.call(o);
                } finally {
                    if (n)
                        throw n.error;
                }
            }
            return p;
        };

    function _j(k) {
        return 'observer'.concat(k);
    }
    var _j = function() {};

    function k() {
        return new _j();
    }

    function _k(l, m) {
        if (void 0 === m && (m = 'observed'), (0, h.isUsingStaticRendering)())
            return l();
        var n = i(_b(e).useState(_r), 1)[0],
            o = i(_b(e).useState(), 2)[1],
            p = function() {
                return o([]);
            },
            q = _b(e).useRef(null);
        if (!q.current)
            var _r = new(0, _d.Reaction)(_j(m), function() {
                    _s.mounted ? p() : _s.changedBeforeMount = !0;
                }),
                _s = (0, g.addReactionToTrack)(q, _r, n);
        var r, _s, _t = q.current.reaction;
        if (_b(e).useDebugValue(_t, f.printDebugValue), _b(e).useEffect(function() {
                return (0, g.recordReactionAsCommitted)(q), q.current ? (q.current.mounted = !0, q.current.changedBeforeMount && (q.current.changedBeforeMount = !1, p())) : (q.current = {
                        reaction: new(0, _d.Reaction)(_j(m), function() {
                            p();
                        }),
                        mounted: !0,
                        changedBeforeMount: !1,
                        cleanAt: 1 / 0
                    }, p()),
                    function() {
                        q.current.reaction.dispose(), q.current = null;
                    };
            }, []), _t.track(function() {
                try {
                    r = l();
                } catch (_b) {
                    _s = _b;
                }
            }), _s)
            throw _s;
        return r;
    }
}), a.register('6+rVA', function(_b, c) {
    _g(_b.exports, 'printDebugValue', function() {
        return _e;
    });
    var d = a('YuT/D');

    function _e(f) {
        return (0, d.getDependencyTree)(f);
    }
}), a.register('O/bv2', function(b, c) {
    _g(b.exports, 'addReactionToTrack', function() {
        return _h;
    }), _g(b.exports, 'recordReactionAsCommitted', function() {
        return _i;
    });
    var d = a('ZQHMC'),
        e = a('cGOYn'),
        f = a('8+TAo'),
        g = d.FinalizationRegistry ? (0, e.createReactionCleanupTrackingUsingFinalizationRegister)(d.FinalizationRegistry) : (0, f.createTimerBasedReactionCleanupTracking)(),
        _h = g.addReactionToTrack,
        _i = g.recordReactionAsCommitted;
    g.resetCleanupScheduleForTests, g.forceCleanupTimerToRunNowForTests;
}), a.register('ZQHMC', function(b, c) {
    _g(b.exports, 'FinalizationRegistry', function() {
        return _d;
    });
    var _d = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
}), a.register('cGOYn', function(b, c) {
    _g(b.exports, 'createReactionCleanupTrackingUsingFinalizationRegister', function() {
        return _e;
    });
    var d = a('vz6tQ');

    function _e(f) {
        var _g = new Map(),
            h = 1,
            i = new f(function(j) {
                var k = _g.get(j);
                k && (k.reaction.dispose(), _g.delete(j));
            });
        return {
            addReactionToTrack: function(j, k, l) {
                var m = h++;
                return i.register(l, m, j), j.current = (0, d.createTrackingData)(k), j.current.finalizationRegistryCleanupToken = m, _g.set(m, j.current), j.current;
            },
            recordReactionAsCommitted: function(j) {
                i.unregister(j), j.current && j.current.finalizationRegistryCleanupToken && _g.delete(j.current.finalizationRegistryCleanupToken);
            },
            forceCleanupTimerToRunNowForTests: function() {},
            resetCleanupScheduleForTests: function() {}
        };
    }
}), a.register('vz6tQ', function(b, c) {
    function d(e) {
        return {
            reaction: e,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + _d
        };
    }
    _g(b.exports, 'createTrackingData', function() {
        return _c;
    }), _g(b.exports, 'CLEANUP_TIMER_LOOP_MILLIS', function() {
        return _e;
    });
    var _d = 10000,
        _e = 10000;
}), a.register('8+TAo', function(b, _c) {
    _g(b.exports, 'createTimerBasedReactionCleanupTracking', function() {
        return _f;
    }, function(d) {
        return _f = d;
    });
    var d = a('vz6tQ'),
        e = function(f) {
            var _g = 'function' == typeof Symbol && Symbol.iterator,
                h = _g && f[_g],
                i = 0;
            if (h)
                return h.call(f);
            if (f && 'number' == typeof f.length)
                return {
                    next: function() {
                        return f && i >= f.length && (f = void 0), {
                            value: f && f[i++],
                            done: !f
                        };
                    }
                };
            throw new TypeError(_g ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        };

    function _f() {
        var g, h = new Set();

        function i() {
            void 0 === g && (g = setTimeout(_c, d.CLEANUP_TIMER_LOOP_MILLIS));
        }

        function i() {
            g = void 0;
            var j = Date.now();
            h.forEach(function(k) {
                var l = k.current;
                l && j >= l.cleanAt && (l.reaction.dispose(), k.current = null, h.delete(k));
            }), h.size > 0 && a();
        }
        return {
            addReactionToTrack: function(i, j, k) {
                var l;
                return i.current = (0, d.createTrackingData)(j), l = i, h.add(l), a(), i.current;
            },
            recordReactionAsCommitted: function(i) {
                h.delete(i);
            },
            forceCleanupTimerToRunNowForTests: function() {
                g && (clearTimeout(g), _c());
            },
            resetCleanupScheduleForTests: function() {
                var i, j;
                if (h.size > 0) {
                    try {
                        for (var k = e(h), l = k.next(); !l.done; l = k.next()) {
                            var m = l.value,
                                n = m.current;
                            n && (n.reaction.dispose(), m.current = null);
                        }
                    } catch (g) {
                        i = {
                            error: g
                        };
                    } finally {
                        try {
                            _f && !_f.done && (j = d.return) && j.call(d);
                        } finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    h.clear();
                }
                g && (clearTimeout(g), g = void 0);
            }
        };
    }
}), a.register('GI12H', function(b, c) {
    _l(b.exports, 'enableStaticRendering', function() {
        return _e;
    }), _l(b.exports, 'isUsingStaticRendering', function() {
        return _e;
    });
    var d = !1;

    function _e(f) {
        d = f;
    }

    function _e() {
        return d;
    }
}), a.register('urQf7', function(b, c) {
    _l(b.exports, 'observer', function() {
        return _j;
    });
    var d = a('LEQ5w'),
        e = a('GI12H'),
        f = a('4GrBt'),
        g = 'function' == typeof Symbol && Symbol.for,
        h = g ? Symbol.for('react.forward_ref') : 'function' == typeof d.forwardRef && (0, d.forwardRef)(function(i) {
            return null;
        }).$$typeof,
        i = g ? Symbol.for('react.memo') : 'function' == typeof d.memo && (0, d.memo)(function(j) {
            return null;
        }).$$typeof;

    function _j(k, _l) {
        var m;
        if (i && k.$$typeof === i)
            throw new Error('[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies \'React.memo\' for you.');
        if ((0, e.isUsingStaticRendering)())
            return k;
        var n = null !== (m = null == _l ? void 0 : _l.forwardRef) && void 0 !== m && m,
            o = k,
            p = k.displayName || k.name;
        if (h && k.$$typeof === h && (n = !0, 'function' != typeof(o = k.render)))
            throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
        var q, _r, s = function(t, u) {
            return (0, f.useObserver)(function() {
                return o(t, u);
            }, p);
        };
        return '' !== p && (s.displayName = p), k.contextTypes && (s.contextTypes = k.contextTypes), n && (s = (0, d.forwardRef)(s)), s = (0, d.memo)(s), q = k, _r = s, Object.keys(q).forEach(function(t) {
            _j[t] || Object.defineProperty(_r, t, Object.getOwnPropertyDescriptor(q, t));
        }), s;
    }
    var _j = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    };
}), a.register('+jkWX', function(b, c) {
    a('4GrBt');
}), a.register('nvMZS', function(b, c) {
    _h(b.exports, 'useLocalObservable', function() {
        return _f;
    });
    var d = a('YuT/D'),
        e = a('LEQ5w');

    function _f(g, _h) {
        return (0, e.useState)(function() {
            return (0, d.observable)(g(), _h, {
                autoBind: !0
            });
        })[0];
    }
}), a.register('iFZvb', function(b, c) {
    a('YuT/D'), a('LEQ5w');
    a('eu82q');
    a('0FGtP');
}), a.register('0FGtP', function(b, c) {
    _h(b.exports, 'useAsObservableSource', function() {
        return _g;
    }, function(d) {
        return _g = d;
    }), a('eu82q');
    var d = a('YuT/D'),
        e = a('LEQ5w'),
        f = function(g, _h) {
            var i = 'function' == typeof Symbol && g[Symbol.iterator];
            if (!i)
                return g;
            var j, k, l = i.call(g),
                m = [];
            try {
                for (;
                    (void 0 === _h || _h-- > 0) && !(j = l.next()).done;)
                    m.push(j.value);
            } catch (g) {
                k = {
                    error: g
                };
            } finally {
                try {
                    j && !j.done && (i = l.return) && i.call(l);
                } finally {
                    if (k)
                        throw k.error;
                }
            }
            return m;
        };

    function _g(h) {
        var i = f((0, e.useState)(function() {
            return (0, d.observable)(h, {}, {
                deep: !1
            });
        }), 1)[0];
        return (0, d.runInAction)(function() {
            Object.assign(i, h);
        }), i;
    }
});