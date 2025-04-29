function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('tGVyf', function(d, e) {
    a(d.exports, 'useNotification', function() {
        return c('CKNC6').default;
    }), a(d.exports, 'Notice', function() {
        return c('B6yMs').default;
    });
    c('CKNC6'), c('B6yMs');
}), c.register('CKNC6', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('U2L68'),
        g = c('S3PdC'),
        h = c('0HAdW'),
        i = c('O0Kav'),
        j = c('9Ynec'),
        k = [
            'getContainer',
            'motion',
            'prefixCls',
            'maxCount',
            'className',
            'style',
            'onAllRemoved'
        ],
        l = function() {
            return document.body;
        },
        m = 0;

    function n() {
        for (var o = {}, p = arguments.length, q = new Array(p), r = 0; r < p; r++)
            q[r] = arguments[r];
        return q.forEach(function(s) {
            s && Object.keys(s).forEach(function(t) {
                var u = s[t];
                void 0 !== u && (o[t] = u);
            });
        }), o;
    }

    function _o() {
        var p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            q = p.getContainer,
            r = void 0 === q ? l : q,
            s = p.motion,
            t = p.prefixCls,
            u = p.maxCount,
            v = p.className,
            w = p.style,
            x = p.onAllRemoved,
            y = (0, h.default)(p, k),
            z = i.useState(),
            A = (0, g.default)(z, 2),
            B = A[0],
            C = A[1],
            D = i.useRef(),
            E = i.createElement(j.default, {
                container: B,
                ref: D,
                prefixCls: t,
                motion: s,
                maxCount: u,
                className: v,
                style: w,
                onAllRemoved: x
            }),
            F = i.useState([]),
            G = (0, g.default)(F, 2),
            H = G[0],
            I = G[1],
            J = i.useMemo(function() {
                return {
                    open: function(K) {
                        var L = n(y, K);
                        null !== L.key && void 0 !== L.key || (L.key = 'rc-notification-'.concat(m), m += 1), I(function(M) {
                            return [].concat((0, f.default)(M), [{
                                type: 'open',
                                config: L
                            }]);
                        });
                    },
                    close: function(K) {
                        I(function(L) {
                            return [].concat((0, f.default)(L), [{
                                type: 'close',
                                key: K
                            }]);
                        });
                    },
                    destroy: function() {
                        I(function(K) {
                            return [].concat((0, f.default)(K), [{
                                type: 'destroy'
                            }]);
                        });
                    }
                };
            }, []);
        return i.useEffect(function() {
            C(r());
        }), i.useEffect(function() {
            D.current && H.length && (H.forEach(function(K) {
                switch (K.type) {
                    case 'open':
                        D.current.open(K.config);
                        break;
                    case 'close':
                        D.current.close(K.key);
                        break;
                    case 'destroy':
                        D.current.destroy();
                }
            }), I([]));
        }, [H]), [
            J,
            E
        ];
    }
}), c.register('U2L68', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('GSd7+'),
        g = c('YVcnW0'),
        h = c('qPZrg'),
        i = c('uTD9J0');

    function _j(k) {
        return (0, f.default)(k) || (0, g.default)(k) || (0, h.default)(k) || (0, i.default)();
    }
}), c.register('GSd7+', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('eL1wz0');

    function _g(h) {
        if (Array.isArray(h))
            return (0, f.default)(h);
    }
}), c.register('eL1wz0', function(d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('YVcnW0', function(d, e) {
    function f(g) {
        if ('undefined' != typeof Symbol && null != g[Symbol.iterator] || null != g['@@iterator'])
            return Array.from(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('qPZrg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('eL1wz0');

    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('uTD9J0', function(d, e) {
    function f() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('S3PdC', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('49at90'),
        g = c('iPIRu0'),
        h = c('qPZrg'),
        i = c('tFup+0');

    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('49at90', function(d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('iPIRu0', function(d, e) {
    function f(g, h) {
        var i = null == g ? null : 'undefined' != typeof Symbol && g[Symbol.iterator] || g['@@iterator'];
        if (null != i) {
            var j, k, l = [],
                m = !0,
                n = !1;
            try {
                for (i = i.call(g); !(m = (j = i.next()).done) && (l.push(j.value), !h || l.length !== h); m = !0);
            } catch (g) {
                n = !0, k = g;
            } finally {
                try {
                    m || null == i.return || i.return();
                } finally {
                    if (n)
                        throw k;
                }
            }
            return l;
        }
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('tFup+0', function(d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('0HAdW', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('wlMK98');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
}), c.register('wlMK98', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('9Ynec', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('+pD1R8'),
        g = c('DPURh'),
        h = c('U2L68'),
        i = c('S3PdC'),
        j = c('O0Kav'),
        k = c('kZLBJ');
    c('yEarE');
    var l = c('fjFtA'),
        m = c('/U36/'),
        n = c('B6yMs'),
        _o = j.forwardRef(function(p, q) {
            var r = p.prefixCls,
                s = void 0 === r ? 'rc-notification' : r,
                t = p.container,
                u = p.motion,
                v = p.maxCount,
                w = p.className,
                x = p.style,
                y = p.onAllRemoved,
                z = j.useState([]),
                A = (0, i.default)(z, 2),
                B = A[0],
                C = A[1],
                D = function(E) {
                    var F, G = B.find(function(H) {
                        return H.key === E;
                    });
                    null == G || null === (F = G.onClose) || void 0 === F || F.call(G), C(function(H) {
                        return H.filter(function(I) {
                            return I.key !== E;
                        });
                    });
                };
            j.useImperativeHandle(q, function() {
                return {
                    open: function(E) {
                        C(function(F) {
                            var G, H = (0, h.default)(F),
                                I = H.findIndex(function(J) {
                                    return J.key === E.key;
                                }),
                                J = (0, g.default)({}, E);
                            I >= 0 ? (J.times = ((null === (G = F[I]) || void 0 === G ? void 0 : G.times) || 0) + 1, H[I] = J) : (J.times = 0, H.push(J));
                            return v > 0 && H.length > v && (H = H.slice(-v)), H;
                        });
                    },
                    close: function(E) {
                        D(E);
                    },
                    destroy: function() {
                        C([]);
                    }
                };
            });
            var E = j.useState({}),
                F = (0, i.default)(E, 2),
                G = F[0],
                H = F[1];
            j.useEffect(function() {
                var I = {};
                B.forEach(function(J) {
                    var K = J.placement,
                        L = void 0 === K ? 'topRight' : K;
                    L && (I[L] = I[L] || [], I[L].push(J));
                }), Object.keys(G).forEach(function(J) {
                    I[J] = I[J] || [];
                }), H(I);
            }, [B]);
            var I = j.useRef(!1);
            if (j.useEffect(function() {
                    Object.keys(G).length > 0 ? I.current = !0 : I.current && (null == y || y(), I.current = !1);
                }, [G]), !t)
                return null;
            var J = Object.keys(G);
            return (0, k.createPortal)(j.createElement(j.Fragment, null, J.map(function(K) {
                var L = G[K].map(function(M) {
                        return {
                            config: M,
                            key: M.key
                        };
                    }),
                    M = 'function' == typeof u ? u(K) : u;
                return j.createElement(l.default, (0, f.default)({
                    key: K,
                    className: b(m)(s, ''.concat(s, '-').concat(K), null == w ? void 0 : w(K)),
                    style: null == x ? void 0 : x(K),
                    keys: L,
                    motionAppear: !0
                }, M, {
                    onAllRemoved: function() {
                        ! function(N) {
                            H(function(O) {
                                var P = (0, g.default)({}, O);
                                return (P[N] || []).length || delete P[N], P;
                            });
                        }(K);
                    }
                }), function(N, O) {
                    var P = N.config,
                        Q = N.className,
                        R = N.style,
                        S = P.key,
                        T = P.times,
                        U = P.className,
                        V = P.style;
                    return j.createElement(n.default, (0, f.default)({}, P, {
                        ref: O,
                        prefixCls: s,
                        className: b(m)(Q, U),
                        style: (0, g.default)((0, g.default)({}, R), V),
                        times: T,
                        key: S,
                        eventKey: S,
                        onNoticeClose: D
                    }));
                });
            })), t);
        });
}), c.register('+pD1R8', function(d, e) {
    function f() {
        return f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('DPURh', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KQrGU8');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function _h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                (0, f.default)(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }
}), c.register('KQrGU8', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('yEarE', function(d, e) {
    a(d.exports, 'CSSMotionList', function() {
        return c('fjFtA').default;
    });
    var f = c('38vZv');
    c('fjFtA'), f.default;
}), c.register('38vZv', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('KQrGU8'),
        g = c('DPURh'),
        h = c('S3PdC'),
        i = c('Zg/Dk0'),
        j = c('O0Kav'),
        k = (j = c('O0Kav'), c('ZMCML2')),
        l = c('bvyc2'),
        m = c('/U36/'),
        n = c('BZK2f'),
        o = c('kPKuu'),
        p = c('vlKcM'),
        q = c('Ao9N0'),
        r = c('64H5l');
    var _s = function(t) {
        var u = t;

        function v(w) {
            return !(!w.motionName || !u);
        }
        'object' === (0, i.default)(t) && (u = t.transitionSupport);
        var w = j.forwardRef(function(x, y) {
            var z = x.visible,
                A = void 0 === z || z,
                B = x.removeOnLeave,
                C = void 0 === B || B,
                D = x.forceRender,
                E = x.children,
                F = x.motionName,
                G = x.leavedClassName,
                H = x.eventProps,
                I = v(x),
                J = (0, j.useRef)(),
                K = (0, j.useRef)();
            var L = (0, p.default)(I, A, function() {
                    try {
                        return J.current instanceof HTMLElement ? J.current : (0, k.default)(K.current);
                    } catch (x) {
                        return null;
                    }
                }, x),
                M = (0, h.default)(L, 4),
                N = M[0],
                O = M[1],
                P = M[2],
                Q = M[3],
                R = j.useRef(Q);
            Q && (R.current = !0);
            var S, T = j.useCallback(function(U) {
                    J.current = U, (0, l.fillRef)(y, U);
                }, [y]),
                U = (0, g.default)((0, g.default)({}, H), {}, {
                    visible: A
                });
            if (E)
                if (N !== o.STATUS_NONE && v(x)) {
                    var V, W;
                    O === o.STEP_PREPARE ? W = 'prepare' : (0, r.isActive)(O) ? W = 'active' : O === o.STEP_START && (W = 'start'), S = E((0, g.default)((0, g.default)({}, U), {}, {
                        className: b(m)((0, n.getTransitionName)(F, N), (V = {}, (0, f.default)(V, (0, n.getTransitionName)(F, ''.concat(N, '-').concat(W)), W), (0, f.default)(V, F, 'string' == typeof F), V)),
                        style: P
                    }), T);
                } else
                    S = Q ? E((0, g.default)({}, U), T) : !C && R.current && G ? E((0, g.default)((0, g.default)({}, U), {}, {
                        className: G
                    }), T) : D || !C && !G ? E((0, g.default)((0, g.default)({}, U), {}, {
                        style: {
                            display: 'none'
                        }
                    }), T) : null;
            else
                S = null;
            j.isValidElement(S) && (0, l.supportRef)(S) && (S.ref || (S = j.cloneElement(S, {
                ref: T
            })));
            return j.createElement(q.default, {
                ref: K
            }, S);
        });
        return w.displayName = 'CSSMotion', w;
    }(n.supportTransition);
}), c.register('Zg/Dk0', function(d, e) {
    function f(g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('BZK2f', function(d, e) {
    a(d.exports, 'supportTransition', function() {
        return _r;
    }), a(d.exports, 'animationEndName', function() {
        return _s;
    }), a(d.exports, 'transitionEndName', function() {
        return _t;
    }), a(d.exports, 'getTransitionName', function() {
        return _u;
    });
    var f = c('Zg/Dk0'),
        g = c('DkED42');

    function h(i, j) {
        var k = {};
        return k[i.toLowerCase()] = j.toLowerCase(), k['Webkit'.concat(i)] = 'webkit'.concat(j), k['Moz'.concat(i)] = 'moz'.concat(j), k['ms'.concat(i)] = 'MS'.concat(j), k['O'.concat(i)] = 'o'.concat(j.toLowerCase()), k;
    }
    var i, j, k, l = (i = (0, g.default)(), j = 'undefined' != typeof window ? window : {}, k = {
            animationend: h('Animation', 'AnimationEnd'),
            transitionend: h('Transition', 'TransitionEnd')
        }, i && ('AnimationEvent' in j || delete k.animationend.animation, 'TransitionEvent' in j || delete k.transitionend.transition), k),
        m = {};
    if ((0, g.default)()) {
        var n = document.createElement('div');
        m = n.style;
    }
    var n = {};

    function o(p) {
        if (n[p])
            return n[p];
        var q = l[p];
        if (q)
            for (var r = Object.keys(q), s = r.length, t = 0; t < s; t += 1) {
                var u = r[t];
                if (Object.prototype.hasOwnProperty.call(q, u) && u in m)
                    return n[p] = q[u], n[p];
            }
        return '';
    }
    var p = o('animationend'),
        q = o('transitionend'),
        _r = !(!p || !q),
        _s = p || 'animationend',
        _t = q || 'transitionend';

    function _u(v, w) {
        return v ? 'object' === (0, f.default)(v) ? v[w.replace(/-\w/g, function(x) {
            return x[1].toUpperCase();
        })] : ''.concat(v, '-').concat(w) : null;
    }
}), c.register('kPKuu', function(d, e) {
    a(d.exports, 'STATUS_NONE', function() {
        return _f;
    }), a(d.exports, 'STATUS_APPEAR', function() {
        return _g;
    }), a(d.exports, 'STATUS_ENTER', function() {
        return _h;
    }), a(d.exports, 'STATUS_LEAVE', function() {
        return _i;
    }), a(d.exports, 'STEP_NONE', function() {
        return _j;
    }), a(d.exports, 'STEP_PREPARE', function() {
        return _k;
    }), a(d.exports, 'STEP_START', function() {
        return _l;
    }), a(d.exports, 'STEP_ACTIVE', function() {
        return _m;
    }), a(d.exports, 'STEP_ACTIVATED', function() {
        return _n;
    });
    var _f = 'none',
        _g = 'appear',
        _h = 'enter',
        _i = 'leave',
        _j = 'none',
        _k = 'prepare',
        _l = 'start',
        _m = 'active',
        _n = 'end';
}), c.register('vlKcM', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('DPURh'),
        g = c('KQrGU8'),
        h = c('S3PdC'),
        i = c('O0Kav'),
        j = (i = c('O0Kav'), c('fEkcm')),
        k = c('kPKuu'),
        l = c('64H5l'),
        m = c('RE/m3'),
        n = c('8OpWd');

    function _o(p, q, r, s) {
        var t = s.motionEnter,
            u = void 0 === t || t,
            v = s.motionAppear,
            w = void 0 === v || v,
            x = s.motionLeave,
            y = void 0 === x || x,
            z = s.motionDeadline,
            A = s.motionLeaveImmediately,
            B = s.onAppearPrepare,
            C = s.onEnterPrepare,
            D = s.onLeavePrepare,
            E = s.onAppearStart,
            F = s.onEnterStart,
            G = s.onLeaveStart,
            H = s.onAppearActive,
            I = s.onEnterActive,
            J = s.onLeaveActive,
            K = s.onAppearEnd,
            L = s.onEnterEnd,
            M = s.onLeaveEnd,
            N = s.onVisibleChanged,
            O = (0, j.default)(),
            P = (0, h.default)(O, 2),
            Q = P[0],
            R = P[1],
            S = (0, j.default)(k.STATUS_NONE),
            T = (0, h.default)(S, 2),
            U = T[0],
            V = T[1],
            W = (0, j.default)(null),
            X = (0, h.default)(W, 2),
            Y = X[0],
            Z = X[1],
            $ = (0, i.useRef)(!1),
            ab = (0, i.useRef)(null);

        function bb() {
            return r();
        }
        var cb = (0, i.useRef)(!1);

        function db(eb) {
            var fb = bb();
            if (!eb || eb.deadline || eb.target === fb) {
                var gb, hb = cb.current;
                U === k.STATUS_APPEAR && hb ? gb = null == K ? void 0 : K(fb, eb) : U === k.STATUS_ENTER && hb ? gb = null == L ? void 0 : L(fb, eb) : U === k.STATUS_LEAVE && hb && (gb = null == M ? void 0 : M(fb, eb)), U !== k.STATUS_NONE && hb && !1 !== gb && (V(k.STATUS_NONE, !0), Z(null, !0));
            }
        }
        var eb = (0, m.default)(db),
            fb = (0, h.default)(eb, 1)[0],
            gb = i.useMemo(function() {
                var hb, ib, jb;
                switch (U) {
                    case k.STATUS_APPEAR:
                        return hb = {}, (0, g.default)(hb, k.STEP_PREPARE, B), (0, g.default)(hb, k.STEP_START, E), (0, g.default)(hb, k.STEP_ACTIVE, H), hb;
                    case k.STATUS_ENTER:
                        return ib = {}, (0, g.default)(ib, k.STEP_PREPARE, C), (0, g.default)(ib, k.STEP_START, F), (0, g.default)(ib, k.STEP_ACTIVE, I), ib;
                    case k.STATUS_LEAVE:
                        return jb = {}, (0, g.default)(jb, k.STEP_PREPARE, D), (0, g.default)(jb, k.STEP_START, G), (0, g.default)(jb, k.STEP_ACTIVE, J), jb;
                    default:
                        return {};
                }
            }, [U]),
            hb = (0, l.default)(U, function(ib) {
                if (ib === k.STEP_PREPARE) {
                    var jb = gb[k.STEP_PREPARE];
                    return jb ? jb(bb()) : l.SkipStep;
                }
                var jb;
                _kb in gb && Z((null === (jb = gb[_kb]) || void 0 === jb ? void 0 : jb.call(gb, bb(), null)) || null);
                return _kb === k.STEP_ACTIVE && (fb(bb()), z > 0 && (clearTimeout(ab.current), ab.current = setTimeout(function() {
                    db({
                        deadline: !0
                    });
                }, z))), l.DoStep;
            }),
            ib = (0, h.default)(hb, 2),
            jb = ib[0],
            _kb = ib[1],
            lb = (0, l.isActive)(_kb);
        cb.current = lb, (0, n.default)(function() {
            R(q);
            var mb, nb = $.current;
            ($.current = !0, p) && (!nb && q && w && (mb = k.STATUS_APPEAR), nb && q && u && (mb = k.STATUS_ENTER), (nb && !q && y || !nb && A && !q && y) && (mb = k.STATUS_LEAVE), mb && (V(mb), jb()));
        }, [q]), (0, i.useEffect)(function() {
            (U === k.STATUS_APPEAR && !w || U === k.STATUS_ENTER && !u || U === k.STATUS_LEAVE && !y) && V(k.STATUS_NONE);
        }, [
            w,
            u,
            y
        ]), (0, i.useEffect)(function() {
            return function() {
                $.current = !1, clearTimeout(ab.current);
            };
        }, []);
        var mb = i.useRef(!1);
        (0, i.useEffect)(function() {
            Q && (mb.current = !0), void 0 !== Q && U === k.STATUS_NONE && ((mb.current || Q) && (null == N || N(Q)), mb.current = !0);
        }, [
            Q,
            U
        ]);
        var nb = Y;
        return gb[k.STEP_PREPARE] && _kb === k.STEP_START && (nb = (0, f.default)({
            transition: 'none'
        }, nb)), [
            U,
            _kb,
            nb,
            null != Q ? Q : q
        ];
    }
}), c.register('64H5l', function(d, e) {
    a(d.exports, 'SkipStep', function() {
        return _m;
    }), a(d.exports, 'DoStep', function() {
        return _n;
    }), a(d.exports, 'isActive', function() {
        return _o;
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('S3PdC'),
        g = c('O0Kav'),
        h = c('fEkcm'),
        i = c('kPKuu'),
        j = c('ZSY7h'),
        k = c('8OpWd'),
        l = [
            i.STEP_PREPARE,
            i.STEP_START,
            i.STEP_ACTIVE,
            i.STEP_ACTIVATED
        ],
        _m = !1,
        _n = !0;

    function _o(p) {
        return p === i.STEP_ACTIVE || p === i.STEP_ACTIVATED;
    }
    var _p = function(q, r) {
        var s = (0, h.default)(i.STEP_NONE),
            t = (0, f.default)(s, 2),
            u = t[0],
            v = t[1],
            w = (0, j.default)(),
            x = (0, f.default)(w, 2),
            y = x[0],
            z = x[1];
        return (0, k.default)(function() {
            if (u !== i.STEP_NONE && u !== i.STEP_ACTIVATED) {
                var A = l.indexOf(u),
                    B = l[A + 1],
                    C = r(u);
                C === _m ? v(B, !0) : y(function(D) {
                    function E() {
                        D.isCanceled() || v(B, !0);
                    }!0 === C ? E() : Promise.resolve(C).then(E);
                });
            }
        }, [
            q,
            u
        ]), g.useEffect(function() {
            return function() {
                z();
            };
        }, []), [
            function() {
                v(i.STEP_PREPARE, !0);
            },
            u
        ];
    };
}), c.register('ZSY7h', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('dH7gy'),
        _h = function() {
            var i = f.useRef(null);

            function j() {
                g.default.cancel(i.current);
            }
            return f.useEffect(function() {
                return function() {
                    j();
                };
            }, []), [
                function c(k) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    j();
                    var m = (0, g.default)(function() {
                        l <= 1 ? k({
                            isCanceled: function() {
                                return m !== i.current;
                            }
                        }) : c(k, l - 1);
                    });
                    i.current = m;
                },
                j
            ];
        };
}), c.register('8OpWd', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav'),
        _g = (0, c('DkED42').default)() ? f.useLayoutEffect : f.useEffect;
}), c.register('RE/m3', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = (f = c('O0Kav'), c('BZK2f')),
        _h = function(i) {
            var j = (0, f.useRef)(),
                k = (0, f.useRef)(i);
            k.current = i;
            var l = f.useCallback(function(m) {
                k.current(m);
            }, []);

            function m(n) {
                n && (n.removeEventListener(g.transitionEndName, l), n.removeEventListener(g.animationEndName, l));
            }
            return f.useEffect(function() {
                return function() {
                    m(j.current);
                };
            }, []), [
                function(n) {
                    j.current && j.current !== n && m(j.current), n && n !== j.current && (n.addEventListener(g.transitionEndName, l), n.addEventListener(g.animationEndName, l), j.current = n);
                },
                m
            ];
        };
}), c.register('Ao9N0', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('/3DFz7'),
        g = c('oFGsY7'),
        h = c('qcnva'),
        i = c('ZZ/wI'),
        j = function(k) {
            (0, h.default)(c, k);
            var l = (0, i.default)(c);

            function m() {
                return (0, f.default)(this, m), l.apply(this, arguments);
            }
            return (0, g.default)(m, [{
                key: 'render',
                value: function() {
                    return this.props.children;
                }
            }]), m;
        }(c('O0Kav').Component),
        _k = j;
}), c.register('/3DFz7', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('oFGsY7', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function g(h, i, j) {
        return i && f(h.prototype, i), j && f(h, j), h;
    }
    a(d.exports, 'default', function() {
        return g;
    });
}), c.register('qcnva', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('/dMWm7');

    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('/dMWm7', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('ZZ/wI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('FRSEq7'),
        g = c('kgMwM7'),
        h = c('V2mMb');

    function _i(j) {
        var k = (0, g.default)();
        return function() {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('FRSEq7', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('kgMwM7', function(d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('V2mMb', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('nPZ067'),
        g = c('SUQix7');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('nPZ067', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('SUQix7', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('fjFtA', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('+pD1R8'),
        g = c('0HAdW'),
        h = c('DPURh'),
        i = c('/3DFz7'),
        j = c('oFGsY7'),
        k = c('SUQix7'),
        l = c('qcnva'),
        m = c('ZZ/wI'),
        n = c('KQrGU8'),
        o = c('O0Kav'),
        p = c('38vZv'),
        q = c('BZK2f'),
        r = c('k5MI4'),
        s = [
            'component',
            'children',
            'onVisibleChanged',
            'onAllRemoved'
        ],
        t = ['status'],
        u = [
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
    var _v = function(w) {
        var x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default,
            y = function(z) {
                (0, l.default)(e, z);
                var A = (0, m.default)(e);

                function B() {
                    var C;
                    (0, i.default)(this, B);
                    for (var D = arguments.length, E = new Array(D), F = 0; F < D; F++)
                        E[F] = arguments[F];
                    return C = A.call.apply(A, [this].concat(E)), (0, n.default)((0, k.default)(C), 'state', {
                        keyEntities: []
                    }), (0, n.default)((0, k.default)(C), 'removeKey', function(G) {
                        var H = C.state.keyEntities.map(function(I) {
                            return I.key !== G ? I : (0, h.default)((0, h.default)({}, I), {}, {
                                status: r.STATUS_REMOVED
                            });
                        });
                        return C.setState({
                            keyEntities: H
                        }), H.filter(function(I) {
                            return I.status !== r.STATUS_REMOVED;
                        }).length;
                    }), C;
                }
                return (0, j.default)(B, [{
                    key: 'render',
                    value: function() {
                        var C = this,
                            D = this.state.keyEntities,
                            E = this.props,
                            F = E.component,
                            G = E.children,
                            H = E.onVisibleChanged,
                            I = E.onAllRemoved,
                            J = (0, g.default)(E, s),
                            K = F || o.Fragment,
                            L = {};
                        return u.forEach(function(M) {
                            L[M] = J[M], delete J[M];
                        }), delete J.keys, o.createElement(K, J, D.map(function(M) {
                            var N = M.status,
                                O = (0, g.default)(M, t),
                                P = N === r.STATUS_ADD || N === r.STATUS_KEEP;
                            return o.createElement(x, (0, f.default)({}, L, {
                                key: O.key,
                                visible: P,
                                eventProps: O,
                                onVisibleChanged: function(Q) {
                                    (null == H || H(Q, {
                                        key: O.key
                                    }), Q) || 0 === C.removeKey(O.key) && I && I();
                                }
                            }), G);
                        }));
                    }
                }], [{
                    key: 'getDerivedStateFromProps',
                    value: function(C, D) {
                        var E = C.keys,
                            F = D.keyEntities,
                            G = (0, r.parseKeys)(E);
                        return {
                            keyEntities: (0, r.diffKeys)(F, G).filter(function(H) {
                                var I = F.find(function(J) {
                                    var K = J.key;
                                    return H.key === K;
                                });
                                return !I || I.status !== r.STATUS_REMOVED || H.status !== r.STATUS_REMOVE;
                            })
                        };
                    }
                }]), B;
            }(o.Component);
        return (0, n.default)(y, 'defaultProps', {
            component: 'div'
        }), y;
    }(q.supportTransition);
}), c.register('k5MI4', function(d, e) {
    a(d.exports, 'STATUS_ADD', function() {
        return _h;
    }), a(d.exports, 'STATUS_KEEP', function() {
        return _i;
    }), a(d.exports, 'STATUS_REMOVE', function() {
        return _j;
    }), a(d.exports, 'STATUS_REMOVED', function() {
        return _k;
    }), a(d.exports, 'parseKeys', function() {
        return _m;
    }), a(d.exports, 'diffKeys', function() {
        return _n;
    });
    var f = c('DPURh'),
        g = c('Zg/Dk0'),
        _h = 'add',
        _i = 'keep',
        _j = 'remove',
        _k = 'removed';

    function l(m) {
        var n;
        return n = m && 'object' === (0, g.default)(m) && 'key' in m ? m : {
            key: m
        }, (0, f.default)((0, f.default)({}, n), {}, {
            key: String(n.key)
        });
    }

    function _m() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return n.map(l);
    }

    function _n() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            q = [],
            r = 0,
            s = p.length,
            t = _m(o),
            u = _m(p);
        t.forEach(function(v) {
            for (var w = !1, x = r; x < s; x += 1) {
                var y = u[x];
                if (y.key === v.key) {
                    r < x && (q = q.concat(u.slice(r, x).map(function(z) {
                        return (0, f.default)((0, f.default)({}, z), {}, {
                            status: _h
                        });
                    })), r = x), q.push((0, f.default)((0, f.default)({}, y), {}, {
                        status: _i
                    })), r += 1, w = !0;
                    break;
                }
            }
            w || q.push((0, f.default)((0, f.default)({}, v), {}, {
                status: _j
            }));
        }), r < s && (q = q.concat(u.slice(r).map(function(v) {
            return (0, f.default)((0, f.default)({}, v), {}, {
                status: _h
            });
        })));
        var v = {};
        q.forEach(function(w) {
            var x = w.key;
            v[x] = (v[x] || 0) + 1;
        });
        var w = Object.keys(v).filter(function(x) {
            return v[x] > 1;
        });
        return w.forEach(function(x) {
            (q = q.filter(function(y) {
                var z = y.key,
                    A = y.status;
                return z !== x || A !== _j;
            })).forEach(function(y) {
                y.key === x && (y.status = _i);
            });
        }), q;
    }
}), c.register('B6yMs', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('+pD1R8'),
        g = c('KQrGU8'),
        h = c('S3PdC'),
        i = c('O0Kav'),
        j = c('/U36/'),
        _k = i.forwardRef(function(l, m) {
            var n = l.prefixCls,
                o = l.style,
                p = l.className,
                q = l.duration,
                r = void 0 === q ? 4.5 : q,
                s = l.eventKey,
                t = l.content,
                u = l.closable,
                v = l.closeIcon,
                w = void 0 === v ? 'x' : v,
                x = l.props,
                y = l.onClick,
                z = l.onNoticeClose,
                A = l.times,
                B = i.useState(!1),
                C = (0, h.default)(B, 2),
                D = C[0],
                E = C[1],
                F = function() {
                    z(s);
                };
            i.useEffect(function() {
                if (!D && r > 0) {
                    var G = setTimeout(function() {
                        F();
                    }, 1000 * r);
                    return function() {
                        clearTimeout(G);
                    };
                }
            }, [
                r,
                D,
                A
            ]);
            var G = ''.concat(n, '-notice');
            return i.createElement('div', (0, f.default)({}, x, {
                ref: m,
                className: b(j)(G, p, (0, g.default)({}, ''.concat(G, '-closable'), u)),
                style: o,
                onMouseEnter: function() {
                    E(!0);
                },
                onMouseLeave: function() {
                    E(!1);
                },
                onClick: y
            }), i.createElement('div', {
                className: ''.concat(G, '-content')
            }, t), u && i.createElement('a', {
                tabIndex: 0,
                className: ''.concat(G, '-close'),
                onClick: function(H) {
                    H.preventDefault(), H.stopPropagation(), F();
                }
            }, w));
        });
});