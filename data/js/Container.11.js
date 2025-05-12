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
c.register('.....', function (d, e) {
    a(d.exports, 'useNotification', function () {
        return c('.....').default;
    }), a(d.exports, 'Notice', function () {
        return c('.....').default;
    });
    c('.....'), c('.....');
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = [
            'getContainer',
            'motion',
            'prefixCls',
            'maxCount',
            'className',
            'style',
            'onAllRemoved'
        ], l = function () {
            return document.body;
        }, m = 0;
    function n() {
        for (var o = {}, p = arguments.length, q = new Array(p), r = 0; r < p; r++)
            q[r] = arguments[r];
        return q.forEach(function (s) {
            s && Object.keys(s).forEach(function (t) {
                var u = s[t];
                void 0 !== u && (o[t] = u);
            });
        }), o;
    }
    function _s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = t.getContainer, v = void 0 === u ? l : u, w = t.motion, x = t.prefixCls, y = t.maxCount, z = t.className, A = t.style, B = t.onAllRemoved, C = (0, h.default)(t, k), D = i.useState(), E = (0, g.default)(D, 2), F = E[0], G = E[1], H = i.useRef(), I = i.createElement(j.default, {
                container: F,
                ref: H,
                prefixCls: _s,
                motion: w,
                maxCount: y,
                className: z,
                style: A,
                onAllRemoved: B
            }), J = i.useState([]), K = (0, g.default)(J, 2), L = K[0], M = K[1], N = i.useMemo(function () {
                return {
                    open: function (O) {
                        var P = n(C, O);
                        null !== P.key && void 0 !== P.key || (P.key = 'rc-notification-'.concat(m), m += 1), M(function (Q) {
                            return [].concat((0, f.default)(Q), [{
                                    type: 'open',
                                    config: P
                                }]);
                        });
                    },
                    close: function (O) {
                        M(function (P) {
                            return [].concat((0, f.default)(P), [{
                                    type: 'close',
                                    key: O
                                }]);
                        });
                    },
                    destroy: function () {
                        M(function (O) {
                            return [].concat((0, f.default)(O), [{ type: 'destroy' }]);
                        });
                    }
                };
            }, []);
        return i.useEffect(function () {
            G(v());
        }), i.useEffect(function () {
            H.current && L.length && (L.forEach(function (O) {
                switch (O.type) {
                case 'open':
                    H.current.open(O.config);
                    break;
                case 'close':
                    H.current.close(O.key);
                    break;
                case 'destroy':
                    H.current.destroy();
                }
            }), M([]));
        }, [L]), [
            N,
            I
        ];
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k) {
        return (0, f.default)(k) || (0, g.default)(k) || (0, h.default)(k) || (0, i.default)();
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        if (Array.isArray(h))
            return (0, f.default)(h);
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            f[i] = g[i];
        return f;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('undefined' != typeof Symbol && null != g[Symbol.iterator] || null != g['@@iterator'])
            return Array.from(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('.....', function (d, e) {
    function f() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        var i = null == g ? null : 'undefined' != typeof Symbol && g[Symbol.iterator] || g['@@iterator'];
        if (null != i) {
            var j, k, l = [], m = !0, n = !1;
            try {
                for (i = i.call(g); !(m = (f = i.next()).done) && (l.push(f.value), !h || l.length !== h); m = !0);
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
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    c('.....');
    var l = c('.....'), m = c('.....'), n = c('.....'), _o = j.forwardRef(function (p, q) {
            var r = p.prefixCls, s = void 0 === r ? 'rc-notification' : r, t = p.container, u = p.motion, v = p.maxCount, w = p.className, x = p.style, y = p.onAllRemoved, z = j.useState([]), A = (0, i.default)(z, 2), B = A[0], C = A[1], D = function (E) {
                    var F, G = B.find(function (H) {
                            return H.key === E;
                        });
                    null == G || null === (F = G.onClose) || void 0 === F || F.call(G), C(function (H) {
                        return H.filter(function (I) {
                            return I.key !== E;
                        });
                    });
                };
            j.useImperativeHandle(q, function () {
                return {
                    open: function (E) {
                        C(function (F) {
                            var G, H = (0, h.default)(F), I = H.findIndex(function (J) {
                                    return J.key === E.key;
                                }), J = (0, g.default)({}, E);
                            I >= 0 ? (J.times = ((null === (G = F[I]) || void 0 === G ? void 0 : G.times) || 0) + 1, H[I] = J) : (J.times = 0, H.push(J));
                            return v > 0 && H.length > v && (H = H.slice(-v)), H;
                        });
                    },
                    close: function (E) {
                        D(E);
                    },
                    destroy: function () {
                        C([]);
                    }
                };
            });
            var E = j.useState({}), F = (0, i.default)(E, 2), G = F[0], H = F[1];
            j.useEffect(function () {
                var I = {};
                B.forEach(function (J) {
                    var K = J.placement, L = void 0 === K ? 'topRight' : K;
                    L && (I[L] = I[L] || [], I[L].push(J));
                }), Object.keys(G).forEach(function (J) {
                    I[J] = I[J] || [];
                }), H(I);
            }, [B]);
            var I = j.useRef(!1);
            if (j.useEffect(function () {
                    Object.keys(G).length > 0 ? I.current = !0 : I.current && (null == y || y(), I.current = !1);
                }, [G]), !t)
                return null;
            var J = Object.keys(G);
            return (0, k.createPortal)(j.createElement(j.Fragment, null, J.map(function (K) {
                var L = G[K].map(function (M) {
                        return {
                            config: M,
                            key: M.key
                        };
                    }), M = 'function' == typeof u ? u(K) : u;
                return j.createElement(l.default, (0, f.default)({
                    key: K,
                    className: b(m)(s, ''.concat(s, '-').concat(K), null == w ? void 0 : w(K)),
                    style: null == x ? void 0 : x(K),
                    keys: L,
                    motionAppear: !0
                }, M, {
                    onAllRemoved: function () {
                        !function (N) {
                            H(function (O) {
                                var P = (0, g.default)({}, O);
                                return (P[N] || []).length || delete P[N], P;
                            });
                        }(K);
                    }
                }), function (N, O) {
                    var P = N.config, Q = N.className, R = N.style, S = P.key, T = P.times, U = P.className, V = P.style;
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
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'CSSMotionList', function () {
        return c('.....').default;
    });
    var f = c('.....');
    c('.....'), f.default;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = (j = c('.....'), c('.....')), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    var _s = function (t) {
        var u = t;
        function v(w) {
            return !(!w.motionName || !u);
        }
        'object' === (0, i.default)(t) && (u = t.transitionSupport);
        var w = j.forwardRef(function (x, y) {
            var z = x.visible, A = void 0 === z || z, B = x.removeOnLeave, C = void 0 === B || B, D = x.forceRender, E = x.children, F = x.motionName, G = x.leavedClassName, H = x.eventProps, I = v(x), J = (0, j.useRef)(), K = (0, j.useRef)();
            var L = (0, p.default)(I, A, function () {
                    try {
                        return J.current instanceof HTMLElement ? J.current : (0, k.default)(K.current);
                    } catch (x) {
                        return null;
                    }
                }, x), M = (0, h.default)(L, 4), N = M[0], O = M[1], P = M[2], Q = M[3], R = j.useRef(Q);
            Q && (R.current = !0);
            var S, T = j.useCallback(function (U) {
                    J.current = U, (0, l.fillRef)(y, U);
                }, [y]), U = (0, g.default)((0, g.default)({}, H), {}, { visible: A });
            if (E)
                if (N !== o.STATUS_NONE && v(x)) {
                    var V, W;
                    O === o.STEP_PREPARE ? W = 'prepare' : (0, r.isActive)(O) ? W = 'active' : O === o.STEP_START && (W = 'start'), S = E((0, g.default)((0, g.default)({}, U), {}, {
                        className: b(m)((0, n.getTransitionName)(F, N), (V = {}, (0, f.default)(V, (0, n.getTransitionName)(F, ''.concat(N, '-').concat(W)), W), (0, f.default)(V, F, 'string' == typeof F), V)),
                        style: P
                    }), T);
                } else
                    S = Q ? E((0, g.default)({}, U), T) : !C && R.current && G ? E((0, g.default)((0, g.default)({}, U), {}, { className: G }), T) : D || !C && !G ? E((0, g.default)((0, g.default)({}, U), {}, { style: { display: 'none' } }), T) : null;
            else
                S = null;
            j.isValidElement(S) && (0, l.supportRef)(S) && (S.ref || (S = j.cloneElement(S, { ref: T })));
            return j.createElement(q.default, { ref: K }, S);
        });
        return w.displayName = 'CSSMotion', w;
    }(n.supportTransition);
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (h) {
            return typeof h;
        } : function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'supportTransition', function () {
        return _y;
    }), a(d.exports, 'animationEndName', function () {
        return _z;
    }), a(d.exports, 'transitionEndName', function () {
        return _A;
    }), a(d.exports, 'getTransitionName', function () {
        return _B;
    });
    var f = c('.....'), g = c('.....');
    function h(i, j) {
        var k = {};
        return k[i.toLowerCase()] = j.toLowerCase(), k['Webkit'.concat(i)] = 'webkit'.concat(j), k['Moz'.concat(i)] = 'moz'.concat(j), k['ms'.concat(i)] = 'MS'.concat(j), k['O'.concat(i)] = 'o'.concat(j.toLowerCase()), k;
    }
    var j, k, l, m = (j = (0, g.default)(), k = 'undefined' != typeof window ? window : {}, l = {
            animationend: h('Animation', 'AnimationEnd'),
            transitionend: h('Transition', 'TransitionEnd')
        }, j && ('AnimationEvent' in k || delete l.animationend.animation, 'TransitionEvent' in k || delete l.transitionend.transition), l), n = {};
    if ((0, g.default)()) {
        var o = document.createElement('div');
        n = o.style;
    }
    var p = {};
    function q(r) {
        if (p[r])
            return p[r];
        var s = m[r];
        if (s)
            for (var t = Object.keys(s), u = t.length, v = 0; v < u; v += 1) {
                var w = t[v];
                if (Object.prototype.hasOwnProperty.call(s, w) && w in n)
                    return p[r] = s[w], p[r];
            }
        return '';
    }
    var w = q('animationend'), x = q('transitionend'), _y = !(!w || !x), _z = w || 'animationend', _A = x || 'transitionend';
    function _B(C, D) {
        return C ? 'object' === (0, v.default)(C) ? C[D.replace(/-\w/g, function (E) {
            return E[1].toUpperCase();
        })] : ''.concat(C, '-').concat(D) : null;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'STATUS_NONE', function () {
        return _f;
    }), a(d.exports, 'STATUS_APPEAR', function () {
        return _g;
    }), a(d.exports, 'STATUS_ENTER', function () {
        return _h;
    }), a(d.exports, 'STATUS_LEAVE', function () {
        return _i;
    }), a(d.exports, 'STEP_NONE', function () {
        return _j;
    }), a(d.exports, 'STEP_PREPARE', function () {
        return _k;
    }), a(d.exports, 'STEP_START', function () {
        return _l;
    }), a(d.exports, 'STEP_ACTIVE', function () {
        return _m;
    }), a(d.exports, 'STEP_ACTIVATED', function () {
        return _n;
    });
    var _f = 'none', _g = 'appear', _h = 'enter', _i = 'leave', _j = 'none', _k = 'prepare', _l = 'start', _m = 'active', _n = 'end';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = (i = c('.....'), c('.....')), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    function _o(p, q, r, s) {
        var t = s.motionEnter, u = void 0 === _o || _o, v = s.motionAppear, w = void 0 === v || v, x = s.motionLeave, y = void 0 === x || x, z = s.motionDeadline, A = s.motionLeaveImmediately, B = s.onAppearPrepare, C = s.onEnterPrepare, D = s.onLeavePrepare, E = s.onAppearStart, F = s.onEnterStart, G = s.onLeaveStart, H = s.onAppearActive, I = s.onEnterActive, J = s.onLeaveActive, K = s.onAppearEnd, L = s.onEnterEnd, M = s.onLeaveEnd, N = s.onVisibleChanged, O = (0, j.default)(), P = (0, h.default)(O, 2), Q = P[0], R = P[1], S = (0, j.default)(k.STATUS_NONE), T = (0, h.default)(S, 2), U = T[0], V = T[1], W = (0, j.default)(null), X = (0, h.default)(W, 2), Y = X[0], Z = X[1], $ = (0, i.useRef)(!1), ab = (0, i.useRef)(null);
        function bb() {
            return r();
        }
        var cb = (0, i.useRef)(!1);
        function db(eb) {
            var fb = bb();
            if (!eb || eb.deadline || eb.target === q) {
                var gb, hb = cb.current;
                U === k.STATUS_APPEAR && s ? r = null == K ? void 0 : K(q, eb) : U === k.STATUS_ENTER && s ? r = null == L ? void 0 : L(q, eb) : U === k.STATUS_LEAVE && s && (r = null == M ? void 0 : M(q, eb)), U !== k.STATUS_NONE && s && !1 !== r && (V(k.STATUS_NONE, !0), Z(null, !0));
            }
        }
        var hb = (0, m.default)(db), ib = (0, h.default)(hb, 1)[0], jb = i.useMemo(function () {
                var kb, lb, mb;
                switch (U) {
                case k.STATUS_APPEAR:
                    return kb = {}, (0, g.default)(kb, k.STEP_PREPARE, B), (0, g.default)(kb, k.STEP_START, E), (0, g.default)(kb, k.STEP_ACTIVE, H), kb;
                case k.STATUS_ENTER:
                    return lb = {}, (0, g.default)(lb, k.STEP_PREPARE, C), (0, g.default)(lb, k.STEP_START, F), (0, g.default)(lb, k.STEP_ACTIVE, I), lb;
                case k.STATUS_LEAVE:
                    return mb = {}, (0, g.default)(mb, k.STEP_PREPARE, D), (0, g.default)(mb, k.STEP_START, G), (0, g.default)(mb, k.STEP_ACTIVE, J), mb;
                default:
                    return {};
                }
            }, [U]), kb = (0, l.default)(U, function (lb) {
                if (lb === k.STEP_PREPARE) {
                    var mb = jb[k.STEP_PREPARE];
                    return mb ? mb(bb()) : l.SkipStep;
                }
                var nb;
                _nb in jb && Z((null === (nb = jb[_nb]) || void 0 === nb ? void 0 : nb.call(jb, bb(), null)) || null);
                return _nb === k.STEP_ACTIVE && (ib(bb()), z > 0 && (clearTimeout(ab.current), ab.current = setTimeout(function () {
                    db({ deadline: !0 });
                }, z))), l.DoStep;
            }), lb = (0, h.default)(kb, 2), mb = lb[0], _nb = lb[1], ob = (0, l.isActive)(_nb);
        cb.current = ob, (0, n.default)(function () {
            R(q);
            var pb, qb = $.current;
            ($.current = !0, p) && (!qb && q && w && (pb = k.STATUS_APPEAR), qb && q && u && (pb = k.STATUS_ENTER), (qb && !q && y || !qb && A && !q && y) && (pb = k.STATUS_LEAVE), pb && (V(pb), mb()));
        }, [q]), (0, i.useEffect)(function () {
            (U === k.STATUS_APPEAR && !w || U === k.STATUS_ENTER && !u || U === k.STATUS_LEAVE && !y) && V(k.STATUS_NONE);
        }, [
            w,
            u,
            y
        ]), (0, i.useEffect)(function () {
            return function () {
                $.current = !1, clearTimeout(ab.current);
            };
        }, []);
        var pb = i.useRef(!1);
        (0, i.useEffect)(function () {
            Q && (pb.current = !0), void 0 !== Q && U === k.STATUS_NONE && ((pb.current || Q) && (null == N || N(Q)), pb.current = !0);
        }, [
            Q,
            U
        ]);
        var qb = Y;
        return jb[k.STEP_PREPARE] && _nb === k.STEP_START && (qb = (0, f.default)({ transition: 'none' }, qb)), [
            U,
            _nb,
            qb,
            null != Q ? Q : q
        ];
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'SkipStep', function () {
        return _m;
    }), a(d.exports, 'DoStep', function () {
        return _n;
    }), a(d.exports, 'isActive', function () {
        return _o;
    }), a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = [
            i.STEP_PREPARE,
            i.STEP_START,
            i.STEP_ACTIVE,
            i.STEP_ACTIVATED
        ], _m = !1, _n = !0;
    function _o(p) {
        return p === i.STEP_ACTIVE || p === i.STEP_ACTIVATED;
    }
    var _p = function (q, r) {
        var s = (0, h.default)(i.STEP_NONE), t = (0, f.default)(s, 2), u = t[0], v = t[1], w = (0, j.default)(), x = (0, f.default)(w, 2), y = x[0], z = x[1];
        return (0, k.default)(function () {
            if (u !== i.STEP_NONE && u !== i.STEP_ACTIVATED) {
                var A = l.indexOf(u), B = l[A + 1], C = r(u);
                C === _m ? v(B, !0) : y(function (D) {
                    function E() {
                        D.isCanceled() || v(B, !0);
                    }
                    !0 === C ? E() : Promise.resolve(C).then(E);
                });
            }
        }, [
            q,
            u
        ]), g.useEffect(function () {
            return function () {
                z();
            };
        }, []), [
            function () {
                v(i.STEP_PREPARE, !0);
            },
            u
        ];
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....'), _h = function () {
            var i = f.useRef(null);
            function j() {
                g.default.cancel(i.current);
            }
            return f.useEffect(function () {
                return function () {
                    j();
                };
            }, []), [
                function c(k) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    j();
                    var m = (0, g.default)(function () {
                        l <= 1 ? k({
                            isCanceled: function () {
                                return m !== i.current;
                            }
                        }) : c(k, l - 1);
                    });
                    i.current = m;
                },
                j
            ];
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....'), _g = (0, c('.....').default)() ? f.useLayoutEffect : f.useEffect;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = (f = c('.....'), c('.....')), _h = function (i) {
            var j = (0, f.useRef)(), k = (0, f.useRef)(i);
            k.current = i;
            var l = f.useCallback(function (m) {
                k.current(m);
            }, []);
            function m(n) {
                n && (n.removeEventListener(g.transitionEndName, l), n.removeEventListener(g.animationEndName, l));
            }
            return f.useEffect(function () {
                return function () {
                    m(j.current);
                };
            }, []), [
                function (n) {
                    j.current && j.current !== n && m(j.current), n && n !== j.current && (n.addEventListener(g.transitionEndName, l), n.addEventListener(g.animationEndName, l), j.current = n);
                },
                m
            ];
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k) {
            (0, h.default)(c, k);
            var l = (0, i.default)(c);
            function m() {
                return (0, f.default)(this, m), l.apply(this, arguments);
            }
            return (0, g.default)(m, [{
                    key: 'render',
                    value: function () {
                        return this.props.children;
                    }
                }]), m;
        }(c('.....').Component), _k = j;
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
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
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = [
            'component',
            'children',
            'onVisibleChanged',
            'onAllRemoved'
        ], t = ['status'], u = [
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
    var _v = function (w) {
        var x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default, y = function (z) {
                (0, l.default)(e, z);
                var A = (0, m.default)(e);
                function B() {
                    var C;
                    (0, i.default)(this, B);
                    for (var D = arguments.length, E = new Array(D), F = 0; F < D; F++)
                        E[F] = arguments[F];
                    return C = A.call.apply(A, [this].concat(E)), (0, n.default)((0, k.default)(C), 'state', { keyEntities: [] }), (0, n.default)((0, k.default)(C), 'removeKey', function (G) {
                        var H = C.state.keyEntities.map(function (I) {
                            return I.key !== G ? I : (0, h.default)((0, h.default)({}, I), {}, { status: r.STATUS_REMOVED });
                        });
                        return C.setState({ keyEntities: H }), H.filter(function (I) {
                            return I.status !== r.STATUS_REMOVED;
                        }).length;
                    }), C;
                }
                return (0, j.default)(B, [{
                        key: 'render',
                        value: function () {
                            var G = this, H = this.state.keyEntities, I = this.props, J = I.component, K = I.children, L = I.onVisibleChanged, M = I.onAllRemoved, N = (0, F.default)(I, s), O = J || o.Fragment, P = {};
                            return u.forEach(function (Q) {
                                P[Q] = N[Q], delete N[Q];
                            }), delete N.keys, o.createElement(O, N, H.map(function (Q) {
                                var R = Q.status, S = (0, F.default)(Q, t), T = R === r.STATUS_ADD || R === r.STATUS_KEEP;
                                return o.createElement(D, (0, E.default)({}, P, {
                                    key: S.key,
                                    visible: T,
                                    eventProps: S,
                                    onVisibleChanged: function (U) {
                                        (null == L || L(U, { key: S.key }), U) || 0 === G.removeKey(S.key) && M && M();
                                    }
                                }), K);
                            }));
                        }
                    }], [{
                        key: 'getDerivedStateFromProps',
                        value: function (G, H) {
                            var I = G.keys, J = H.keyEntities, K = (0, r.parseKeys)(I);
                            return {
                                keyEntities: (0, r.diffKeys)(J, K).filter(function (L) {
                                    var M = J.find(function (N) {
                                        var O = N.key;
                                        return L.key === O;
                                    });
                                    return !M || M.status !== r.STATUS_REMOVED || L.status !== r.STATUS_REMOVE;
                                })
                            };
                        }
                    }]), B;
            }(o.Component);
        return (0, n.default)(y, 'defaultProps', { component: 'div' }), y;
    }(q.supportTransition);
}), c.register('.....', function (d, e) {
    a(d.exports, 'STATUS_ADD', function () {
        return _h;
    }), a(d.exports, 'STATUS_KEEP', function () {
        return _i;
    }), a(d.exports, 'STATUS_REMOVE', function () {
        return _j;
    }), a(d.exports, 'STATUS_REMOVED', function () {
        return _k;
    }), a(d.exports, 'parseKeys', function () {
        return _n;
    }), a(d.exports, 'diffKeys', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), _h = 'add', _i = 'keep', _j = 'remove', _k = 'removed';
    function l(m) {
        var n;
        return n = m && 'object' === (0, g.default)(m) && 'key' in m ? m : { key: m }, (0, f.default)((0, f.default)({}, n), {}, { key: String(n.key) });
    }
    function _n() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return o.map(l);
    }
    function _p() {
        var q = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], s = [], t = 0, u = r.length, v = _n(q), w = _n(r);
        v.forEach(function (x) {
            for (var y = !1, z = t; z < u; z += 1) {
                var A = l[z];
                if (A.key === x.key) {
                    t < z && (s = s.concat(l.slice(t, z).map(function (B) {
                        return (0, f.default)((0, f.default)({}, B), {}, { status: _h });
                    })), t = z), s.push((0, f.default)((0, f.default)({}, A), {}, { status: _i })), t += 1, y = !0;
                    break;
                }
            }
            y || s.push((0, f.default)((0, f.default)({}, x), {}, { status: _j }));
        }), t < u && (s = s.concat(l.slice(t).map(function (x) {
            return (0, f.default)((0, f.default)({}, x), {}, { status: _h });
        })));
        var x = {};
        s.forEach(function (y) {
            var z = y.key;
            _p[z] = (_p[z] || 0) + 1;
        });
        var y = Object.keys(_p).filter(function (z) {
            return _p[z] > 1;
        });
        return y.forEach(function (z) {
            (s = s.filter(function (A) {
                var B = A.key, C = A.status;
                return B !== z || C !== _j;
            })).forEach(function (A) {
                A.key === z && (A.status = _i);
            });
        }), s;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), _k = i.forwardRef(function (l, m) {
            var n = l.prefixCls, o = l.style, p = l.className, q = l.duration, r = void 0 === q ? 4.5 : q, s = l.eventKey, t = l.content, u = l.closable, v = l.closeIcon, w = void 0 === v ? 'x' : v, x = l.props, y = l.onClick, z = l.onNoticeClose, A = l.times, B = i.useState(!1), C = (0, h.default)(B, 2), D = C[0], E = C[1], F = function () {
                    z(s);
                };
            i.useEffect(function () {
                if (!D && r > 0) {
                    var G = setTimeout(function () {
                        F();
                    }, 1000 * r);
                    return function () {
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
                onMouseEnter: function () {
                    E(!0);
                },
                onMouseLeave: function () {
                    E(!1);
                },
                onClick: y
            }), i.createElement('div', { className: ''.concat(G, '-content') }, t), u && i.createElement('a', {
                tabIndex: 0,
                className: ''.concat(G, '-close'),
                onClick: function (H) {
                    H.preventDefault(), H.stopPropagation(), F();
                }
            }, w));
        });
});