function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('6HRXq', function(b, c) {
    _m(b.exports, 'useNotification', function() {
        return a('KcFjp').default;
    }), _m(b.exports, 'Notice', function() {
        return a('g+kmz').default;
    });
    a('KcFjp'), a('g+kmz');
}), a.register('KcFjp', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('lkREh'),
        e = a('kpzoG'),
        f = a('OrBZi'),
        g = a('LEQ5w'),
        h = a('czv8d'),
        i = [
            'getContainer',
            'motion',
            'prefixCls',
            'maxCount',
            'className',
            'style',
            'onAllRemoved'
        ],
        j = function() {
            return document.body;
        },
        k = 0;

    function l() {
        for (var _m = {}, n = arguments.length, o = new Array(n), p = 0; p < n; p++)
            o[p] = arguments[p];
        return o.forEach(function(q) {
            q && Object.keys(q).forEach(function(r) {
                var s = q[r];
                void 0 !== s && (_m[r] = s);
            });
        }), _m;
    }

    function _l() {
        var m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = m.getContainer,
            o = void 0 === n ? j : n,
            p = m.motion,
            q = m.prefixCls,
            r = m.maxCount,
            s = m.className,
            t = m.style,
            u = m.onAllRemoved,
            v = (0, f.default)(m, i),
            w = g.useState(),
            x = (0, e.default)(w, 2),
            y = x[0],
            z = x[1],
            A = g.useRef(),
            B = g.createElement(h.default, {
                container: y,
                ref: A,
                prefixCls: q,
                motion: p,
                maxCount: r,
                className: s,
                style: t,
                onAllRemoved: u
            }),
            C = g.useState([]),
            D = (0, e.default)(C, 2),
            E = D[0],
            F = D[1],
            G = g.useMemo(function() {
                return {
                    open: function(H) {
                        var I = _k(v, H);
                        null !== I.key && void 0 !== I.key || (I.key = 'rc-notification-'.concat(k), k += 1), F(function(J) {
                            return [].concat((0, d.default)(J), [{
                                type: 'open',
                                config: I
                            }]);
                        });
                    },
                    close: function(H) {
                        F(function(I) {
                            return [].concat((0, d.default)(I), [{
                                type: 'close',
                                key: H
                            }]);
                        });
                    },
                    destroy: function() {
                        F(function(H) {
                            return [].concat((0, d.default)(H), [{
                                type: 'destroy'
                            }]);
                        });
                    }
                };
            }, []);
        return g.useEffect(function() {
            z(o());
        }), g.useEffect(function() {
            A.current && E.length && (E.forEach(function(H) {
                switch (H.type) {
                    case 'open':
                        A.current.open(H.config);
                        break;
                    case 'close':
                        A.current.close(H.key);
                        break;
                    case 'destroy':
                        A.current.destroy();
                }
            }), F([]));
        }, [E]), [
            G,
            B
        ];
    }
}), a.register('lkREh', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('Z66hP'),
        e = a('FyPee'),
        f = a('HnS3n'),
        g = a('WDuv+');

    function _h(_i) {
        return (0, d.default)(_i) || (0, e.default)(_i) || (0, f.default)(_i) || (0, g.default)();
    }
}), a.register('Z66hP', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('tN8kn');

    function _e(_f) {
        if (Array.isArray(_f))
            return (0, d.default)(_f);
    }
}), a.register('tN8kn', function(b, c) {
    function d(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('FyPee', function(b, c) {
    function _d(_e) {
        if ('undefined' != typeof Symbol && null != _e[Symbol.iterator] || null != _e['@@iterator'])
            return Array.from(_e);
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('HnS3n', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('tN8kn');

    function _e(_f, g) {
        if (_f) {
            if ('string' == typeof _f)
                return (0, d.default)(_f, g);
            var h = Object.prototype.toString.call(_f).slice(8, -1);
            return 'Object' === h && _f.constructor && (h = _f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(_f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? (0, d.default)(_f, g) : void 0;
        }
    }
}), a.register('WDuv+', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _i(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kpzoG', function(b, _c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('sHYTk0'),
        e = a('uivXO'),
        f = a('HnS3n'),
        g = a('YPhBT');

    function _h(_i, j) {
        return (0, d.default)(_i) || (0, e.default)(_i, j) || (0, f.default)(_i, j) || (0, g.default)();
    }
}), a.register('sHYTk0', function(b, c) {
    function d(e) {
        if (Array.isArray(e))
            return e;
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('uivXO', function(b, c) {
    function _d(_e, f) {
        var g = null == _e ? null : 'undefined' != typeof Symbol && _e[Symbol.iterator] || _e['@@iterator'];
        if (null != g) {
            var h, i, j = [],
                k = !0,
                l = !1;
            try {
                for (g = g.call(_e); !(k = (h = g.next()).done) && (j.push(h.value), !f || j.length !== f); k = !0);
            } catch (_e) {
                l = !0, i = _e;
            } finally {
                try {
                    k || null == g.return || g.return();
                } finally {
                    if (l)
                        throw i;
                }
            }
            return j;
        }
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('YPhBT', function(b, c) {
    function _d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('OrBZi', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('Nznks');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('Nznks', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _n(b.exports, 'default', function() {
        return _b;
    });
}), a.register('czv8d', function(_b, c) {
    _n(_b.exports, 'default', function() {
        return _m;
    });
    var d = a('1MFsY'),
        e = a('/eBmD'),
        f = a('lkREh'),
        g = a('kpzoG'),
        h = a('LEQ5w'),
        i = a('Z/8fU');
    a('jsBDD');
    var j = a('fiyOS'),
        _k = a('JrtKP'),
        l = a('g+kmz'),
        _m = h.forwardRef(function(_n, o) {
            var p = _n.prefixCls,
                q = void 0 === p ? 'rc-notification' : p,
                r = _n.container,
                s = _n.motion,
                t = _n.maxCount,
                u = _n.className,
                v = _n.style,
                w = _n.onAllRemoved,
                x = h.useState([]),
                y = (0, g.default)(x, 2),
                z = y[0],
                A = y[1],
                B = function(C) {
                    var D, E = z.find(function(F) {
                        return F.key === C;
                    });
                    null == E || null === (D = E.onClose) || void 0 === D || D.call(E), A(function(F) {
                        return F.filter(function(G) {
                            return G.key !== C;
                        });
                    });
                };
            h.useImperativeHandle(o, function() {
                return {
                    open: function(C) {
                        A(function(D) {
                            var E, F = (0, f.default)(D),
                                G = F.findIndex(function(H) {
                                    return H.key === C.key;
                                }),
                                H = (0, e.default)({}, C);
                            G >= 0 ? (H.times = ((null === (E = D[G]) || void 0 === E ? void 0 : E.times) || 0) + 1, F[G] = H) : (H.times = 0, F.push(H));
                            return t > 0 && F.length > t && (F = F.slice(-t)), F;
                        });
                    },
                    close: function(C) {
                        B(C);
                    },
                    destroy: function() {
                        A([]);
                    }
                };
            });
            var C = h.useState({}),
                D = (0, g.default)(C, 2),
                E = D[0],
                F = D[1];
            h.useEffect(function() {
                var G = {};
                z.forEach(function(H) {
                    var I = H.placement,
                        J = void 0 === I ? 'topRight' : I;
                    J && (G[J] = G[J] || [], G[J].push(H));
                }), Object.keys(E).forEach(function(H) {
                    G[H] = G[H] || [];
                }), F(G);
            }, [z]);
            var G = h.useRef(!1);
            if (h.useEffect(function() {
                    Object.keys(E).length > 0 ? G.current = !0 : G.current && (null == w || w(), G.current = !1);
                }, [E]), !r)
                return null;
            var H = Object.keys(E);
            return (0, i.createPortal)(h.createElement(h.Fragment, null, H.map(function(I) {
                var J = E[I].map(function(K) {
                        return {
                            config: K,
                            key: K.key
                        };
                    }),
                    K = 'function' == typeof s ? s(I) : s;
                return h.createElement(j.default, (0, d.default)({
                    key: I,
                    className: _M(_k)(q, ''.concat(q, '-').concat(I), null == u ? void 0 : u(I)),
                    style: null == v ? void 0 : v(I),
                    keys: J,
                    motionAppear: !0
                }, K, {
                    onAllRemoved: function() {
                        ! function(L) {
                            F(function(_M) {
                                var N = (0, e.default)({}, _M);
                                return (N[L] || []).length || delete N[L], N;
                            });
                        }(I);
                    }
                }), function(L, M) {
                    var N = L.config,
                        O = L.className,
                        P = L.style,
                        Q = N.key,
                        R = N.times,
                        S = N.className,
                        T = N.style;
                    return h.createElement(l.default, (0, d.default)({}, N, {
                        ref: M,
                        prefixCls: q,
                        className: _b(_k)(O, S),
                        style: (0, e.default)((0, e.default)({}, P), T),
                        times: R,
                        key: Q,
                        eventKey: Q,
                        onNoticeClose: B
                    }));
                });
            })), r);
        });
}), a.register('1MFsY', function(_b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _f(_b.exports, 'default', function() {
        return _c;
    });
}), a.register('/eBmD', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('81acm');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _d(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _d(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('81acm', function(b, c) {
    function d(e, f, g) {
        return f in e ? Object.defineProperty(e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[f] = g, e;
    }
    _r(b.exports, 'default', function() {
        return _c;
    });
}), a.register('jsBDD', function(b, _c) {
    _r(b.exports, 'CSSMotionList', function() {
        return a('fiyOS').default;
    });
    var d = a('OgqYt');
    a('fiyOS'), d.default;
}), a.register('OgqYt', function(b, c) {
    _r(b.exports, 'default', function() {
        return _q;
    });
    var _d = a('81acm'),
        e = a('/eBmD'),
        f = a('kpzoG'),
        g = a('mo+la'),
        h = a('LEQ5w'),
        i = (h = a('LEQ5w'), a('FfsX82')),
        j = a('gIJPx'),
        k = a('JrtKP'),
        l = a('WKTUd'),
        m = a('ktPBH'),
        n = a('35rdC'),
        o = a('HHbMQ'),
        p = a('BOEln');
    var _q = function(_r) {
        var s = _r;

        function t(u) {
            return !(!u.motionName || !s);
        }
        'object' === (0, g.default)(_r) && (s = _r.transitionSupport);
        var t = h.forwardRef(function(u, v) {
            var w = u.visible,
                x = void 0 === w || w,
                y = u.removeOnLeave,
                z = void 0 === y || y,
                A = u.forceRender,
                B = u.children,
                C = u.motionName,
                D = u.leavedClassName,
                E = u.eventProps,
                F = b(u),
                G = (0, h.useRef)(),
                H = (0, h.useRef)();
            var I = (0, n.default)(F, x, function() {
                    try {
                        return G.current instanceof HTMLElement ? G.current : (0, i.default)(H.current);
                    } catch (u) {
                        return null;
                    }
                }, u),
                J = (0, f.default)(I, 4),
                K = J[0],
                L = J[1],
                M = J[2],
                N = J[3],
                O = h.useRef(N);
            N && (O.current = !0);
            var P, Q = h.useCallback(function(R) {
                    G.current = R, (0, j.fillRef)(v, R);
                }, [v]),
                R = (0, e.default)((0, e.default)({}, E), {}, {
                    visible: x
                });
            if (B)
                if (K !== m.STATUS_NONE && b(u)) {
                    var S, T;
                    L === m.STEP_PREPARE ? T = 'prepare' : (0, p.isActive)(L) ? T = 'active' : L === m.STEP_START && (T = 'start'), P = B((0, e.default)((0, e.default)({}, R), {}, {
                        className: _b(k)((0, l.getTransitionName)(C, K), (S = {}, (0, _d.default)(S, (0, l.getTransitionName)(C, ''.concat(K, '-').concat(T)), T), (0, _d.default)(S, C, 'string' == typeof C), S)),
                        style: M
                    }), Q);
                } else
                    P = N ? B((0, e.default)({}, R), Q) : !z && O.current && D ? B((0, e.default)((0, e.default)({}, R), {}, {
                        className: D
                    }), Q) : A || !z && !D ? B((0, e.default)((0, e.default)({}, R), {}, {
                        style: {
                            display: 'none'
                        }
                    }), Q) : null;
            else
                P = null;
            h.isValidElement(P) && (0, j.supportRef)(P) && (P.ref || (P = h.cloneElement(P, {
                ref: Q
            })));
            return h.createElement(o.default, {
                ref: H
            }, P);
        });
        return t.displayName = 'CSSMotion', t;
    }(l.supportTransition);
}), a.register('mo+la', function(_b, c) {
    function d(e) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, d(e);
    }
    _g(_b.exports, 'default', function() {
        return _c;
    });
}), a.register('WKTUd', function(b, _c) {
    _g(b.exports, 'supportTransition', function() {
        return _n;
    }), _g(b.exports, 'animationEndName', function() {
        return _o;
    }), _g(b.exports, 'transitionEndName', function() {
        return _p;
    }), _g(b.exports, 'getTransitionName', function() {
        return _q;
    });
    var d = a('mo+la'),
        e = a('njwzI');

    function f(_g, h) {
        var i = {};
        return i[_g.toLowerCase()] = h.toLowerCase(), i['Webkit'.concat(_g)] = 'webkit'.concat(h), i['Moz'.concat(_g)] = 'moz'.concat(h), i['ms'.concat(_g)] = 'MS'.concat(h), i['O'.concat(_g)] = 'o'.concat(h.toLowerCase()), i;
    }
    var f, g, h, i = (f = (0, e.default)(), g = 'undefined' != typeof window ? window : {}, h = {
            animationend: _g('Animation', 'AnimationEnd'),
            transitionend: _g('Transition', 'TransitionEnd')
        }, f && ('AnimationEvent' in g || delete h.animationend.animation, 'TransitionEvent' in g || delete h.transitionend.transition), h),
        j = {};
    if ((0, e.default)()) {
        var k = document.createElement('div');
        j = k.style;
    }
    var k = {};

    function l(m) {
        if (k[m])
            return k[m];
        var n = i[m];
        if (n)
            for (var o = Object.keys(n), p = o.length, q = 0; q < p; q += 1) {
                var r = o[q];
                if (Object.prototype.hasOwnProperty.call(n, r) && r in j)
                    return k[m] = n[r], k[m];
            }
        return '';
    }
    var l = _s('animationend'),
        m = _s('transitionend'),
        _n = !(!l || !m),
        _o = l || 'animationend',
        _p = m || 'transitionend';

    function _q(r, s) {
        return r ? 'object' === (0, d.default)(r) ? r[s.replace(/-\w/g, function(t) {
            return t[1].toUpperCase();
        })] : ''.concat(r, '-').concat(s) : null;
    }
}), a.register('ktPBH', function(b, c) {
    _n(b.exports, 'STATUS_NONE', function() {
        return _d;
    }), _n(b.exports, 'STATUS_APPEAR', function() {
        return _e;
    }), _n(b.exports, 'STATUS_ENTER', function() {
        return _f;
    }), _n(b.exports, 'STATUS_LEAVE', function() {
        return _g;
    }), _n(b.exports, 'STEP_NONE', function() {
        return _h;
    }), _n(b.exports, 'STEP_PREPARE', function() {
        return _i;
    }), _n(b.exports, 'STEP_START', function() {
        return _j;
    }), _n(b.exports, 'STEP_ACTIVE', function() {
        return _k;
    }), _n(b.exports, 'STEP_ACTIVATED', function() {
        return _l;
    });
    var _d = 'none',
        _e = 'appear',
        _f = 'enter',
        _g = 'leave',
        _h = 'none',
        _i = 'prepare',
        _j = 'start',
        _k = 'active',
        _l = 'end';
}), a.register('35rdC', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('/eBmD'),
        e = a('81acm'),
        f = a('kpzoG'),
        g = a('LEQ5w'),
        h = (g = a('LEQ5w'), a('Rw4e0')),
        i = a('ktPBH'),
        j = a('BOEln'),
        k = a('qvQ1F'),
        l = a('eI/4I');

    function _m(_n, o, p, q) {
        var r = q.motionEnter,
            _s = void 0 === r || r,
            t = q.motionAppear,
            u = void 0 === t || t,
            v = q.motionLeave,
            w = void 0 === v || v,
            x = q.motionDeadline,
            y = q.motionLeaveImmediately,
            z = q.onAppearPrepare,
            A = q.onEnterPrepare,
            B = q.onLeavePrepare,
            C = q.onAppearStart,
            D = q.onEnterStart,
            E = q.onLeaveStart,
            F = q.onAppearActive,
            G = q.onEnterActive,
            H = q.onLeaveActive,
            I = q.onAppearEnd,
            J = q.onEnterEnd,
            K = q.onLeaveEnd,
            L = q.onVisibleChanged,
            M = (0, h.default)(),
            N = (0, f.default)(M, 2),
            O = N[0],
            P = N[1],
            Q = (0, h.default)(i.STATUS_NONE),
            R = (0, f.default)(Q, 2),
            S = R[0],
            T = R[1],
            U = (0, h.default)(null),
            V = (0, f.default)(U, 2),
            W = V[0],
            X = V[1],
            Y = (0, g.useRef)(!1),
            Z = (0, g.useRef)(null);

        function $() {
            return p();
        }
        var $ = (0, g.useRef)(!1);

        function ab(bb) {
            var cb = B();
            if (!bb || bb.deadline || bb.target === cb) {
                var db, eb = $.current;
                S === i.STATUS_APPEAR && eb ? db = null == I ? void 0 : I(cb, bb) : S === i.STATUS_ENTER && eb ? db = null == J ? void 0 : J(cb, bb) : S === i.STATUS_LEAVE && eb && (db = null == K ? void 0 : K(cb, bb)), S !== i.STATUS_NONE && eb && !1 !== db && (T(i.STATUS_NONE, !0), X(null, !0));
            }
        }
        var ab = (0, k.default)(Q),
            bb = (0, f.default)(ab, 1)[0],
            cb = g.useMemo(function() {
                var db, eb, fb;
                switch (S) {
                    case i.STATUS_APPEAR:
                        return db = {}, (0, e.default)(db, i.STEP_PREPARE, z), (0, e.default)(db, i.STEP_START, C), (0, e.default)(db, i.STEP_ACTIVE, F), db;
                    case i.STATUS_ENTER:
                        return eb = {}, (0, e.default)(eb, i.STEP_PREPARE, A), (0, e.default)(eb, i.STEP_START, D), (0, e.default)(eb, i.STEP_ACTIVE, G), eb;
                    case i.STATUS_LEAVE:
                        return fb = {}, (0, e.default)(fb, i.STEP_PREPARE, B), (0, e.default)(fb, i.STEP_START, E), (0, e.default)(fb, i.STEP_ACTIVE, H), fb;
                    default:
                        return {};
                }
            }, [S]),
            db = (0, j.default)(S, function(eb) {
                if (eb === i.STEP_PREPARE) {
                    var fb = cb[i.STEP_PREPARE];
                    return fb ? fb(B()) : j.SkipStep;
                }
                var fb;
                _gb in cb && X((null === (fb = cb[_gb]) || void 0 === fb ? void 0 : fb.call(cb, B(), null)) || null);
                return _gb === i.STEP_ACTIVE && (bb(B()), x > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
                    Q({
                        deadline: !0
                    });
                }, x))), j.DoStep;
            }),
            eb = (0, f.default)(db, 2),
            fb = eb[0],
            _gb = eb[1],
            hb = (0, j.isActive)(_gb);
        $.current = hb, (0, l.default)(function() {
            P(o);
            var ib, jb = Y.current;
            (Y.current = !0, _n) && (!jb && o && u && (ib = i.STATUS_APPEAR), jb && o && _s && (ib = i.STATUS_ENTER), (jb && !o && w || !jb && y && !o && w) && (ib = i.STATUS_LEAVE), ib && (T(ib), fb()));
        }, [o]), (0, g.useEffect)(function() {
            (S === i.STATUS_APPEAR && !u || S === i.STATUS_ENTER && !_s || S === i.STATUS_LEAVE && !w) && T(i.STATUS_NONE);
        }, [
            u,
            _s,
            w
        ]), (0, g.useEffect)(function() {
            return function() {
                Y.current = !1, clearTimeout(Z.current);
            };
        }, []);
        var ib = g.useRef(!1);
        (0, g.useEffect)(function() {
            O && (ib.current = !0), void 0 !== O && S === i.STATUS_NONE && ((ib.current || O) && (null == L || L(O)), ib.current = !0);
        }, [
            O,
            S
        ]);
        var jb = W;
        return cb[i.STEP_PREPARE] && _gb === i.STEP_START && (jb = (0, d.default)({
            transition: 'none'
        }, jb)), [
            S,
            _gb,
            jb,
            null != O ? O : o
        ];
    }
}), a.register('BOEln', function(b, c) {
    _n(b.exports, 'SkipStep', function() {
        return _k;
    }), _n(b.exports, 'DoStep', function() {
        return _l;
    }), _n(b.exports, 'isActive', function() {
        return _m;
    }), _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('kpzoG'),
        e = a('LEQ5w'),
        f = a('Rw4e0'),
        g = a('ktPBH'),
        h = a('g2AWM'),
        i = a('eI/4I'),
        j = [
            g.STEP_PREPARE,
            g.STEP_START,
            g.STEP_ACTIVE,
            g.STEP_ACTIVATED
        ],
        _k = !1,
        _l = !0;

    function _m(_n) {
        return _n === g.STEP_ACTIVE || _n === g.STEP_ACTIVATED;
    }
    var _m = function(n, o) {
        var p = (0, f.default)(g.STEP_NONE),
            q = (0, d.default)(p, 2),
            r = q[0],
            s = q[1],
            t = (0, h.default)(),
            u = (0, d.default)(t, 2),
            v = u[0],
            w = u[1];
        return (0, i.default)(function() {
            if (r !== g.STEP_NONE && r !== g.STEP_ACTIVATED) {
                var x = j.indexOf(r),
                    y = j[x + 1],
                    z = o(r);
                z === _k ? s(y, !0) : v(function(A) {
                    function B() {
                        A.isCanceled() || s(y, !0);
                    }!0 === z ? o() : Promise.resolve(z).then(o);
                });
            }
        }, [
            n,
            r
        ]), e.useEffect(function() {
            return function() {
                w();
            };
        }, []), [
            function() {
                s(g.STEP_PREPARE, !0);
            },
            r
        ];
    };
}), a.register('g2AWM', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('/tkLO'),
        _f = function() {
            var _g = d.useRef(null);

            function h() {
                e.default.cancel(_g.current);
            }
            return d.useEffect(function() {
                return function() {
                    b();
                };
            }, []), [
                function a(h) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    b();
                    var j = (0, e.default)(function() {
                        i <= 1 ? h({
                            isCanceled: function() {
                                return j !== _g.current;
                            }
                        }) : a(h, i - 1);
                    });
                    _g.current = j;
                },
                b
            ];
        };
}), a.register('eI/4I', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('njwzI').default)() ? d.useLayoutEffect : d.useEffect;
}), a.register('qvQ1F', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = (d = a('LEQ5w'), a('WKTUd')),
        _f = function(_g) {
            var h = (0, d.useRef)(),
                i = (0, d.useRef)(_g);
            i.current = _g;
            var j = d.useCallback(function(k) {
                i.current(k);
            }, []);

            function k(l) {
                l && (l.removeEventListener(e.transitionEndName, j), l.removeEventListener(e.animationEndName, j));
            }
            return d.useEffect(function() {
                return function() {
                    _f(h.current);
                };
            }, []), [
                function(k) {
                    h.current && h.current !== k && _f(h.current), k && k !== h.current && (k.addEventListener(e.transitionEndName, j), k.addEventListener(e.animationEndName, j), h.current = k);
                },
                _f
            ];
        };
}), a.register('HHbMQ', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('HgFD17'),
        e = a('a01Gf7'),
        f = a('IE5pg'),
        g = a('V3LRj'),
        h = function(_i) {
            (0, f.default)(a, _i);
            var j = (0, g.default)(a);

            function k() {
                return (0, d.default)(this, k), j.apply(this, arguments);
            }
            return (0, e.default)(a, [{
                key: 'render',
                value: function() {
                    return this.props.children;
                }
            }]), a;
        }(a('LEQ5w').Component),
        _i = h;
}), a.register('HgFD17', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf7', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('IE5pg', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF7');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF7', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('V3LRj', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf7'),
        e = a('sQfA/7'),
        f = a('8gftH');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf7', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/7', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('8gftH', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX7'),
        e = a('xByjk');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX7', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('xByjk', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _u(b.exports, 'default', function() {
        return _c;
    });
}), a.register('fiyOS', function(b, _c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('1MFsY'),
        e = a('OrBZi'),
        f = a('/eBmD'),
        g = a('HgFD17'),
        h = a('a01Gf7'),
        i = a('xByjk'),
        j = a('IE5pg'),
        k = a('V3LRj'),
        l = a('81acm'),
        m = a('LEQ5w'),
        n = a('OgqYt'),
        o = a('WKTUd'),
        p = a('kugZ0'),
        q = [
            'component',
            'children',
            'onVisibleChanged',
            'onAllRemoved'
        ],
        r = ['status'],
        s = [
            'eventProps',
            'visible',
            'children',
            'motionName',
            'motionAppear',
            'motionEnter',
            'motionLeave',
            'motionLeaveImmediately',
            'motionDeadline',
            'removeOnLeave',
            'leavedClassName',
            'onAppearStart',
            'onAppearActive',
            'onAppearEnd',
            'onEnterStart',
            'onEnterActive',
            'onEnterEnd',
            'onLeaveStart',
            'onLeaveActive',
            'onLeaveEnd'
        ];
    var _t = function(_u) {
        var v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default,
            w = function(x) {
                (0, j.default)(_c, x);
                var y = (0, k.default)(_c);

                function z() {
                    var A;
                    (0, g.default)(this, z);
                    for (var B = arguments.length, C = new Array(B), D = 0; D < B; D++)
                        C[D] = arguments[D];
                    return A = y.call.apply(y, [this].concat(C)), (0, l.default)((0, i.default)(A), 'state', {
                        keyEntities: []
                    }), (0, l.default)((0, i.default)(A), 'removeKey', function(E) {
                        var F = A.state.keyEntities.map(function(G) {
                            return G.key !== E ? G : (0, f.default)((0, f.default)({}, G), {}, {
                                status: p.STATUS_REMOVED
                            });
                        });
                        return A.setState({
                            keyEntities: F
                        }), F.filter(function(G) {
                            return G.status !== p.STATUS_REMOVED;
                        }).length;
                    }), A;
                }
                return (0, h.default)(_c, [{
                    key: 'render',
                    value: function() {
                        var z = this,
                            A = this.state.keyEntities,
                            B = this.props,
                            C = B.component,
                            D = B.children,
                            E = B.onVisibleChanged,
                            F = B.onAllRemoved,
                            G = (0, e.default)(B, q),
                            H = C || m.Fragment,
                            I = {};
                        return s.forEach(function(J) {
                            I[J] = G[J], delete G[J];
                        }), delete G.keys, m.createElement(H, G, A.map(function(J) {
                            var K = J.status,
                                L = (0, e.default)(J, r),
                                M = K === p.STATUS_ADD || K === p.STATUS_KEEP;
                            return m.createElement(v, (0, d.default)({}, I, {
                                key: L.key,
                                visible: M,
                                eventProps: L,
                                onVisibleChanged: function(N) {
                                    (null == E || E(N, {
                                        key: L.key
                                    }), N) || 0 === z.removeKey(L.key) && F && F();
                                }
                            }), D);
                        }));
                    }
                }], [{
                    key: 'getDerivedStateFromProps',
                    value: function(z, A) {
                        var B = z.keys,
                            C = A.keyEntities,
                            D = (0, p.parseKeys)(B);
                        return {
                            keyEntities: (0, p.diffKeys)(C, D).filter(function(E) {
                                var F = C.find(function(G) {
                                    var H = G.key;
                                    return E.key === H;
                                });
                                return !F || F.status !== p.STATUS_REMOVED || E.status !== p.STATUS_REMOVE;
                            })
                        };
                    }
                }]), _c;
            }(m.Component);
        return (0, l.default)(w, 'defaultProps', {
            component: 'div'
        }), w;
    }(o.supportTransition);
}), a.register('kugZ0', function(b, c) {
    _k(b.exports, 'STATUS_ADD', function() {
        return _f;
    }), _k(b.exports, 'STATUS_KEEP', function() {
        return _g;
    }), _k(b.exports, 'STATUS_REMOVE', function() {
        return _h;
    }), _k(b.exports, 'STATUS_REMOVED', function() {
        return _i;
    }), _k(b.exports, 'parseKeys', function() {
        return _j;
    }), _k(b.exports, 'diffKeys', function() {
        return _j;
    });
    var d = a('/eBmD'),
        e = a('mo+la'),
        _f = 'add',
        _g = 'keep',
        _h = 'remove',
        _i = 'removed';

    function j(_k) {
        var l;
        return l = _k && 'object' === (0, e.default)(_k) && 'key' in _k ? _k : {
            key: _k
        }, (0, d.default)((0, d.default)({}, l), {}, {
            key: String(l.key)
        });
    }

    function _j() {
        var k = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return k.map(_q);
    }

    function _j() {
        var k = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            m = [],
            n = 0,
            o = l.length,
            p = _u(k),
            _q = _u(l);
        p.forEach(function(r) {
            for (var s = !1, t = n; t < o; t += 1) {
                var _u = _q[t];
                if (_u.key === r.key) {
                    n < t && (m = m.concat(_q.slice(n, t).map(function(v) {
                        return (0, d.default)((0, d.default)({}, v), {}, {
                            status: _f
                        });
                    })), n = t), m.push((0, d.default)((0, d.default)({}, _u), {}, {
                        status: _g
                    })), n += 1, s = !0;
                    break;
                }
            }
            s || m.push((0, d.default)((0, d.default)({}, r), {}, {
                status: _h
            }));
        }), n < o && (m = m.concat(_q.slice(n).map(function(r) {
            return (0, d.default)((0, d.default)({}, r), {}, {
                status: _f
            });
        })));
        var r = {};
        m.forEach(function(s) {
            var t = s.key;
            r[t] = (r[t] || 0) + 1;
        });
        var s = Object.keys(r).filter(function(t) {
            return r[t] > 1;
        });
        return s.forEach(function(t) {
            (m = m.filter(function(u) {
                var v = u.key,
                    w = u.status;
                return v !== t || w !== _h;
            })).forEach(function(u) {
                u.key === t && (u.status = _g);
            });
        }), m;
    }
}), a.register('g+kmz', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('1MFsY'),
        e = a('81acm'),
        f = a('kpzoG'),
        g = a('LEQ5w'),
        h = a('JrtKP'),
        _i = g.forwardRef(function(_j, k) {
            var l = _j.prefixCls,
                m = _j.style,
                n = _j.className,
                o = _j.duration,
                p = void 0 === o ? 4.5 : o,
                q = _j.eventKey,
                r = _j.content,
                s = _j.closable,
                t = _j.closeIcon,
                u = void 0 === t ? 'x' : t,
                v = _j.props,
                w = _j.onClick,
                x = _j.onNoticeClose,
                y = _j.times,
                z = g.useState(!1),
                A = (0, f.default)(z, 2),
                B = A[0],
                C = A[1],
                D = function() {
                    x(q);
                };
            g.useEffect(function() {
                if (!B && p > 0) {
                    var E = setTimeout(function() {
                        D();
                    }, 1000 * p);
                    return function() {
                        clearTimeout(E);
                    };
                }
            }, [
                p,
                B,
                y
            ]);
            var E = ''.concat(l, '-notice');
            return g.createElement('div', (0, d.default)({}, v, {
                ref: k,
                className: t(h)(E, n, (0, e.default)({}, ''.concat(E, '-closable'), s)),
                style: m,
                onMouseEnter: function() {
                    C(!0);
                },
                onMouseLeave: function() {
                    C(!1);
                },
                onClick: w
            }), g.createElement('div', {
                className: ''.concat(E, '-content')
            }, r), s && g.createElement('a', {
                tabIndex: 0,
                className: ''.concat(E, '-close'),
                onClick: function(F) {
                    F.preventDefault(), F.stopPropagation(), D();
                }
            }, u));
        });
});