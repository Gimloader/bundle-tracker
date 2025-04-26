function a(a, b, c, p) {
    Object.defineProperty(a, b, {
        get: c,
        set: p,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('BLIEh', function(b, p) {
    a(b.exports, 'useNotification', function() {
        return c('oqAJs').default;
    }), a(b.exports, 'Notice', function() {
        return c('xpImR').default;
    });
    c('oqAJs'), c('xpImR');
}), c.register('oqAJs', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('UHYd6'),
        e = c('pF1Hj'),
        f = c('7BHBJ'),
        g = c('uPP4W'),
        h = c('abp5s'),
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
        for (var m = {}, n = arguments.length, o = new Array(n), p = 0; p < n; p++)
            o[p] = arguments[p];
        return o.forEach(function(n) {
            n && Object.keys(n).forEach(function(o) {
                var q = n[o];
                void 0 !== q && (m[o] = q);
            });
        }), m;
    }

    function m() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = n.getContainer,
            p = void 0 === o ? j : o,
            q = n.motion,
            r = n.prefixCls,
            s = n.maxCount,
            t = n.className,
            u = n.style,
            v = n.onAllRemoved,
            w = (0, f.default)(n, i),
            x = g.useState(),
            y = (0, e.default)(x, 2),
            z = y[0],
            A = y[1],
            B = g.useRef(),
            C = g.createElement(h.default, {
                container: z,
                ref: B,
                prefixCls: r,
                motion: q,
                maxCount: s,
                className: t,
                style: u,
                onAllRemoved: v
            }),
            D = g.useState([]),
            E = (0, e.default)(D, 2),
            F = E[0],
            G = E[1],
            H = g.useMemo(function() {
                return {
                    open: function(n) {
                        var I = l(w, n);
                        null !== I.key && void 0 !== I.key || (I.key = 'rc-notification-'.concat(k), k += 1), G(function(n) {
                            return [].concat((0, d.default)(n), [{
                                type: 'open',
                                config: I
                            }]);
                        });
                    },
                    close: function(n) {
                        G(function(o) {
                            return [].concat((0, d.default)(o), [{
                                type: 'close',
                                key: n
                            }]);
                        });
                    },
                    destroy: function() {
                        G(function(n) {
                            return [].concat((0, d.default)(n), [{
                                type: 'destroy'
                            }]);
                        });
                    }
                };
            }, []);
        return g.useEffect(function() {
            A(p());
        }), g.useEffect(function() {
            B.current && F.length && (F.forEach(function(n) {
                switch (n.type) {
                    case 'open':
                        B.current.open(n.config);
                        break;
                    case 'close':
                        B.current.close(n.key);
                        break;
                    case 'destroy':
                        B.current.destroy();
                }
            }), G([]));
        }, [F]), [
            H,
            C
        ];
    }
}), c.register('UHYd6', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('s95PF'),
        e = c('HvQE/0'),
        f = c('hahlm'),
        g = c('7rjEe0');

    function h(a) {
        return (0, d.default)(a) || (0, e.default)(a) || (0, f.default)(a) || (0, g.default)();
    }
}), c.register('s95PF', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('083f70');

    function e(a) {
        if (Array.isArray(a))
            return (0, d.default)(a);
    }
}), c.register('083f70', function(b, c) {
    function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var e = 0, f = new Array(b); e < b; e++)
            f[e] = a[e];
        return f;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('HvQE/0', function(b, c) {
    function d(a) {
        if ('undefined' != typeof Symbol && null != a[Symbol.iterator] || null != a['@@iterator'])
            return Array.from(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('hahlm', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('083f70');

    function e(a, b) {
        if (a) {
            if ('string' == typeof a)
                return (0, d.default)(a, b);
            var f = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === f && a.constructor && (f = a.constructor.name), 'Map' === f || 'Set' === f ? Array.from(a) : 'Arguments' === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? (0, d.default)(a, b) : void 0;
        }
    }
}), c.register('7rjEe0', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('pF1Hj', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('xwjsD0'),
        e = c('Yb+Bf0'),
        f = c('hahlm'),
        g = c('X3Kmt0');

    function h(a, b) {
        return (0, d.default)(a) || (0, e.default)(a, b) || (0, f.default)(a, b) || (0, g.default)();
    }
}), c.register('xwjsD0', function(b, c) {
    function d(a) {
        if (Array.isArray(a))
            return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('Yb+Bf0', function(b, c) {
    function d(a, b) {
        var e = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != e) {
            var f, g, h = [],
                i = !0,
                j = !1;
            try {
                for (e = e.call(a); !(i = (f = e.next()).done) && (h.push(f.value), !b || h.length !== b); i = !0);
            } catch (a) {
                j = !0, g = a;
            } finally {
                try {
                    i || null == e.return || e.return();
                } finally {
                    if (j)
                        throw g;
                }
            }
            return h;
        }
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('X3Kmt0', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('7BHBJ', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd8');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd8', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('abp5s', function(n, o) {
    a(n.exports, 'default', function() {
        return m;
    });
    var d = c('b5p1k4'),
        e = c('3pEWZ'),
        f = c('UHYd6'),
        g = c('pF1Hj'),
        h = c('uPP4W'),
        i = c('nLioi');
    c('AYwfD');
    var j = c('twV1x'),
        k = c('VAIs1'),
        l = c('xpImR'),
        m = h.forwardRef(function(a, c) {
            var n = a.prefixCls,
                o = void 0 === n ? 'rc-notification' : n,
                p = a.container,
                q = a.motion,
                r = a.maxCount,
                s = a.className,
                t = a.style,
                u = a.onAllRemoved,
                v = h.useState([]),
                w = (0, g.default)(v, 2),
                x = w[0],
                y = w[1],
                z = function(a) {
                    var A, B = x.find(function(A) {
                        return A.key === a;
                    });
                    null == B || null === (A = B.onClose) || void 0 === A || A.call(B), y(function(A) {
                        return A.filter(function(A) {
                            return A.key !== a;
                        });
                    });
                };
            h.useImperativeHandle(c, function() {
                return {
                    open: function(a) {
                        y(function(b) {
                            var A, B = (0, f.default)(b),
                                C = B.findIndex(function(b) {
                                    return b.key === a.key;
                                }),
                                D = (0, e.default)({}, a);
                            C >= 0 ? (D.times = ((null === (A = b[C]) || void 0 === A ? void 0 : A.times) || 0) + 1, B[C] = D) : (D.times = 0, B.push(D));
                            return r > 0 && B.length > r && (B = B.slice(-r)), B;
                        });
                    },
                    close: function(a) {
                        z(a);
                    },
                    destroy: function() {
                        y([]);
                    }
                };
            });
            var A = h.useState({}),
                B = (0, g.default)(A, 2),
                C = B[0],
                D = B[1];
            h.useEffect(function() {
                var E = {};
                x.forEach(function(b) {
                    var F = b.placement,
                        G = void 0 === F ? 'topRight' : F;
                    G && (E[G] = E[G] || [], E[G].push(b));
                }), Object.keys(C).forEach(function(b) {
                    E[b] = E[b] || [];
                }), D(E);
            }, [x]);
            var E = h.useRef(!1);
            if (h.useEffect(function() {
                    Object.keys(C).length > 0 ? E.current = !0 : E.current && (null == u || u(), E.current = !1);
                }, [C]), !p)
                return null;
            var F = Object.keys(C);
            return (0, i.createPortal)(h.createElement(h.Fragment, null, F.map(function(a) {
                var G = C[a].map(function(a) {
                        return {
                            config: a,
                            key: a.key
                        };
                    }),
                    H = 'function' == typeof q ? q(a) : q;
                return h.createElement(j.default, (0, d.default)({
                    key: a,
                    className: b(k)(o, ''.concat(o, '-').concat(a), null == s ? void 0 : s(a)),
                    style: null == t ? void 0 : t(a),
                    keys: G,
                    motionAppear: !0
                }, H, {
                    onAllRemoved: function() {
                        ! function(a) {
                            D(function(b) {
                                var I = (0, e.default)({}, b);
                                return (I[a] || []).length || delete I[a], I;
                            });
                        }(a);
                    }
                }), function(a, G) {
                    var I = a.config,
                        J = a.className,
                        K = a.style,
                        L = I.key,
                        M = I.times,
                        N = I.className,
                        O = I.style;
                    return h.createElement(l.default, (0, d.default)({}, I, {
                        ref: G,
                        prefixCls: o,
                        className: b(k)(J, N),
                        style: (0, e.default)((0, e.default)({}, K), O),
                        times: M,
                        key: L,
                        eventKey: L,
                        onNoticeClose: z
                    }));
                });
            })), p);
        });
}), c.register('b5p1k4', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, arguments);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('3pEWZ', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ8');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('WfHYJ8', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('AYwfD', function(b, t) {
    a(b.exports, 'CSSMotionList', function() {
        return c('twV1x').default;
    });
    var d = c('NRRq4');
    c('twV1x'), d.default;
}), c.register('NRRq4', function(t, u) {
    a(t.exports, 'default', function() {
        return q;
    });
    var d = c('WfHYJ8'),
        e = c('3pEWZ'),
        f = c('pF1Hj'),
        g = c('iwiaz0'),
        h = c('uPP4W'),
        i = (h = c('uPP4W'), c('MGfFc2')),
        j = c('XNhMJ'),
        k = c('VAIs1'),
        l = c('BqmJF'),
        m = c('SRCOQ'),
        n = c('nH7NC'),
        o = c('pzkHj'),
        p = c('RydbK');
    var q = function(a) {
        var r = s;

        function t(s) {
            return !(!s.motionName || !r);
        }
        'object' === (0, g.default)(s) && (r = s.transitionSupport);
        var u = h.forwardRef(function(s, r) {
            var v = s.visible,
                w = void 0 === v || v,
                x = s.removeOnLeave,
                y = void 0 === x || x,
                z = s.forceRender,
                A = s.children,
                B = s.motionName,
                C = s.leavedClassName,
                D = s.eventProps,
                E = t(s),
                F = (0, h.useRef)(),
                G = (0, h.useRef)();
            var H = (0, n.default)(E, w, function() {
                    try {
                        return F.current instanceof HTMLElement ? F.current : (0, i.default)(G.current);
                    } catch (s) {
                        return null;
                    }
                }, s),
                I = (0, f.default)(H, 4),
                J = I[0],
                K = I[1],
                L = I[2],
                M = I[3],
                N = h.useRef(M);
            M && (N.current = !0);
            var O, P = h.useCallback(function(s) {
                    F.current = s, (0, j.fillRef)(r, s);
                }, [r]),
                Q = (0, e.default)((0, e.default)({}, D), {}, {
                    visible: w
                });
            if (A)
                if (J !== m.STATUS_NONE && t(s)) {
                    var R, S;
                    K === m.STEP_PREPARE ? S = 'prepare' : (0, p.isActive)(K) ? S = 'active' : K === m.STEP_START && (S = 'start'), O = A((0, e.default)((0, e.default)({}, Q), {}, {
                        className: b(k)((0, l.getTransitionName)(B, J), (R = {}, (0, d.default)(R, (0, l.getTransitionName)(B, ''.concat(J, '-').concat(S)), S), (0, d.default)(R, B, 'string' == typeof B), R)),
                        style: L
                    }), P);
                } else
                    O = M ? A((0, e.default)({}, Q), P) : !y && N.current && C ? A((0, e.default)((0, e.default)({}, Q), {}, {
                        className: C
                    }), P) : z || !y && !C ? A((0, e.default)((0, e.default)({}, Q), {}, {
                        style: {
                            display: 'none'
                        }
                    }), P) : null;
            else
                O = null;
            h.isValidElement(O) && (0, j.supportRef)(O) && (O.ref || (O = h.cloneElement(O, {
                ref: P
            })));
            return h.createElement(o.default, {
                ref: G
            }, O);
        });
        return u.displayName = 'CSSMotion', u;
    }(l.supportTransition);
}), c.register('iwiaz0', function(b, c) {
    function d(a) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('BqmJF', function(b, p) {
    a(b.exports, 'supportTransition', function() {
        return p;
    }), a(b.exports, 'animationEndName', function() {
        return q;
    }), a(b.exports, 'transitionEndName', function() {
        return r;
    }), a(b.exports, 'getTransitionName', function() {
        return s;
    });
    var d = c('iwiaz0'),
        e = c('0duFN2');

    function f(a, b) {
        var g = {};
        return g[a.toLowerCase()] = b.toLowerCase(), g['Webkit'.concat(a)] = 'webkit'.concat(b), g['Moz'.concat(a)] = 'moz'.concat(b), g['ms'.concat(a)] = 'MS'.concat(b), g['O'.concat(a)] = 'o'.concat(b.toLowerCase()), g;
    }
    var g, h, i, j = (g = (0, e.default)(), h = 'undefined' != typeof window ? window : {}, i = {
            animationend: f('Animation', 'AnimationEnd'),
            transitionend: f('Transition', 'TransitionEnd')
        }, g && ('AnimationEvent' in h || delete i.animationend.animation, 'TransitionEvent' in h || delete i.transitionend.transition), i),
        k = {};
    if ((0, e.default)()) {
        var l = document.createElement('div');
        k = l.style;
    }
    var l = {};

    function m(a) {
        if (l[a])
            return l[a];
        var n = j[a];
        if (n)
            for (var o = Object.keys(n), p = o.length, q = 0; q < p; q += 1) {
                var r = o[q];
                if (Object.prototype.hasOwnProperty.call(n, r) && r in k)
                    return l[a] = n[r], l[a];
            }
        return '';
    }
    var n = m('animationend'),
        o = m('transitionend'),
        p = !(!n || !o),
        q = n || 'animationend',
        r = o || 'transitionend';

    function s(a, b) {
        return a ? 'object' === (0, d.default)(a) ? a[b.replace(/-\w/g, function(a) {
            return a[1].toUpperCase();
        })] : ''.concat(a, '-').concat(b) : null;
    }
}), c.register('SRCOQ', function(b, c) {
    a(b.exports, 'STATUS_NONE', function() {
        return d;
    }), a(b.exports, 'STATUS_APPEAR', function() {
        return e;
    }), a(b.exports, 'STATUS_ENTER', function() {
        return f;
    }), a(b.exports, 'STATUS_LEAVE', function() {
        return g;
    }), a(b.exports, 'STEP_NONE', function() {
        return h;
    }), a(b.exports, 'STEP_PREPARE', function() {
        return i;
    }), a(b.exports, 'STEP_START', function() {
        return j;
    }), a(b.exports, 'STEP_ACTIVE', function() {
        return k;
    }), a(b.exports, 'STEP_ACTIVATED', function() {
        return l;
    });
    var d = 'none',
        e = 'appear',
        f = 'enter',
        g = 'leave',
        h = 'none',
        i = 'prepare',
        j = 'start',
        k = 'active',
        l = 'end';
}), c.register('nH7NC', function(b, _) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('3pEWZ'),
        e = c('WfHYJ8'),
        f = c('pF1Hj'),
        g = c('uPP4W'),
        h = (g = c('uPP4W'), c('elkrG')),
        i = c('SRCOQ'),
        j = c('RydbK'),
        k = c('x6Xya'),
        l = c('AfUWf');

    function m(a, b, c, _) {
        var n = _.motionEnter,
            o = void 0 === n || n,
            p = _.motionAppear,
            q = void 0 === p || p,
            r = _.motionLeave,
            s = void 0 === r || r,
            t = _.motionDeadline,
            u = _.motionLeaveImmediately,
            v = _.onAppearPrepare,
            w = _.onEnterPrepare,
            x = _.onLeavePrepare,
            y = _.onAppearStart,
            z = _.onEnterStart,
            A = _.onLeaveStart,
            B = _.onAppearActive,
            C = _.onEnterActive,
            D = _.onLeaveActive,
            E = _.onAppearEnd,
            F = _.onEnterEnd,
            G = _.onLeaveEnd,
            H = _.onVisibleChanged,
            I = (0, h.default)(),
            J = (0, f.default)(I, 2),
            K = J[0],
            L = J[1],
            M = (0, h.default)(i.STATUS_NONE),
            N = (0, f.default)(M, 2),
            O = N[0],
            P = N[1],
            Q = (0, h.default)(null),
            R = (0, f.default)(Q, 2),
            S = R[0],
            T = R[1],
            U = (0, g.useRef)(!1),
            V = (0, g.useRef)(null);

        function W() {
            return c();
        }
        var X = (0, g.useRef)(!1);

        function Y(a) {
            var Z = W();
            if (!a || a.deadline || a.target === Z) {
                var $, _ = X.current;
                O === i.STATUS_APPEAR && _ ? $ = null == E ? void 0 : E(Z, a) : O === i.STATUS_ENTER && _ ? $ = null == F ? void 0 : F(Z, a) : O === i.STATUS_LEAVE && _ && ($ = null == G ? void 0 : G(Z, a)), O !== i.STATUS_NONE && _ && !1 !== $ && (P(i.STATUS_NONE, !0), T(null, !0));
            }
        }
        var Z = (0, k.default)(Y),
            $ = (0, f.default)(Z, 1)[0],
            _ = g.useMemo(function() {
                var ab, bb, cb;
                switch (O) {
                    case i.STATUS_APPEAR:
                        return ab = {}, (0, e.default)(ab, i.STEP_PREPARE, v), (0, e.default)(ab, i.STEP_START, y), (0, e.default)(ab, i.STEP_ACTIVE, B), ab;
                    case i.STATUS_ENTER:
                        return bb = {}, (0, e.default)(bb, i.STEP_PREPARE, w), (0, e.default)(bb, i.STEP_START, z), (0, e.default)(bb, i.STEP_ACTIVE, C), bb;
                    case i.STATUS_LEAVE:
                        return cb = {}, (0, e.default)(cb, i.STEP_PREPARE, x), (0, e.default)(cb, i.STEP_START, A), (0, e.default)(cb, i.STEP_ACTIVE, D), cb;
                    default:
                        return {};
                }
            }, [O]),
            ab = (0, j.default)(O, function(a) {
                if (a === i.STEP_PREPARE) {
                    var bb = _[i.STEP_PREPARE];
                    return bb ? bb(W()) : j.SkipStep;
                }
                var bb;
                db in _ && T((null === (bb = _[db]) || void 0 === bb ? void 0 : bb.call(_, W(), null)) || null);
                return db === i.STEP_ACTIVE && ($(W()), t > 0 && (clearTimeout(V.current), V.current = setTimeout(function() {
                    Y({
                        deadline: !0
                    });
                }, t))), j.DoStep;
            }),
            bb = (0, f.default)(ab, 2),
            cb = bb[0],
            db = bb[1],
            eb = (0, j.isActive)(db);
        X.current = eb, (0, l.default)(function() {
            L(b);
            var fb, gb = U.current;
            (U.current = !0, a) && (!gb && b && q && (fb = i.STATUS_APPEAR), gb && b && o && (fb = i.STATUS_ENTER), (gb && !b && s || !gb && u && !b && s) && (fb = i.STATUS_LEAVE), fb && (P(fb), cb()));
        }, [b]), (0, g.useEffect)(function() {
            (O === i.STATUS_APPEAR && !q || O === i.STATUS_ENTER && !o || O === i.STATUS_LEAVE && !s) && P(i.STATUS_NONE);
        }, [
            q,
            o,
            s
        ]), (0, g.useEffect)(function() {
            return function() {
                U.current = !1, clearTimeout(V.current);
            };
        }, []);
        var fb = g.useRef(!1);
        (0, g.useEffect)(function() {
            K && (fb.current = !0), void 0 !== K && O === i.STATUS_NONE && ((fb.current || K) && (null == H || H(K)), fb.current = !0);
        }, [
            K,
            O
        ]);
        var gb = hb;
        return _[i.STEP_PREPARE] && db === i.STEP_START && (gb = (0, d.default)({
            transition: 'none'
        }, gb)), [
            O,
            db,
            gb,
            null != K ? K : b
        ];
    }
}), c.register('RydbK', function(b, p) {
    a(b.exports, 'SkipStep', function() {
        return k;
    }), a(b.exports, 'DoStep', function() {
        return l;
    }), a(b.exports, 'isActive', function() {
        return m;
    }), a(b.exports, 'default', function() {
        return n;
    });
    var d = c('pF1Hj'),
        e = c('uPP4W'),
        f = c('elkrG'),
        g = c('SRCOQ'),
        h = c('HDokY'),
        i = c('AfUWf'),
        j = [
            g.STEP_PREPARE,
            g.STEP_START,
            g.STEP_ACTIVE,
            g.STEP_ACTIVATED
        ],
        k = !1,
        l = !0;

    function m(a) {
        return a === g.STEP_ACTIVE || a === g.STEP_ACTIVATED;
    }
    var n = function(a, b) {
        var o = (0, f.default)(g.STEP_NONE),
            p = (0, d.default)(o, 2),
            q = p[0],
            r = p[1],
            s = (0, h.default)(),
            t = (0, d.default)(s, 2),
            u = t[0],
            v = t[1];
        return (0, i.default)(function() {
            if (q !== g.STEP_NONE && q !== g.STEP_ACTIVATED) {
                var w = j.indexOf(q),
                    x = j[w + 1],
                    y = b(q);
                y === k ? r(x, !0) : u(function(w) {
                    function z() {
                        w.isCanceled() || r(x, !0);
                    }!0 === y ? z() : Promise.resolve(y).then(z);
                });
            }
        }, [
            a,
            q
        ]), e.useEffect(function() {
            return function() {
                v();
            };
        }, []), [
            function() {
                r(g.STEP_PREPARE, !0);
            },
            q
        ];
    };
}), c.register('HDokY', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('+6VYd'),
        f = function() {
            var g = d.useRef(null);

            function h() {
                e.default.cancel(g.current);
            }
            return d.useEffect(function() {
                return function() {
                    h();
                };
            }, []), [
                function c(i) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    h();
                    var j = (0, e.default)(function() {
                        i <= 1 ? i({
                            isCanceled: function() {
                                return j !== g.current;
                            }
                        }) : c(i, i - 1);
                    });
                    g.current = j;
                },
                h
            ];
        };
}), c.register('AfUWf', function(b, i) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W'),
        e = (0, c('0duFN2').default)() ? d.useLayoutEffect : d.useEffect;
}), c.register('x6Xya', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = (d = c('uPP4W'), c('BqmJF')),
        f = function(a) {
            var g = (0, d.useRef)(),
                h = (0, d.useRef)(a);
            h.current = a;
            var i = d.useCallback(function(a) {
                h.current(a);
            }, []);

            function j(a) {
                a && (a.removeEventListener(e.transitionEndName, i), a.removeEventListener(e.animationEndName, i));
            }
            return d.useEffect(function() {
                return function() {
                    j(g.current);
                };
            }, []), [
                function(a) {
                    g.current && g.current !== a && j(g.current), a && a !== g.current && (a.addEventListener(e.transitionEndName, i), a.addEventListener(e.animationEndName, i), g.current = a);
                },
                j
            ];
        };
}), c.register('pzkHj', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('PKxjP7'),
        e = c('zTitA7'),
        f = c('q/g6c'),
        g = c('J6vCX'),
        h = function(a) {
            (0, f.default)(c, a);
            var i = (0, g.default)(c);

            function j() {
                return (0, d.default)(this, j), i.apply(this, arguments);
            }
            return (0, e.default)(j, [{
                key: 'render',
                value: function() {
                    return this.props.children;
                }
            }]), j;
        }(c('uPP4W').Component),
        i = j;
}), c.register('PKxjP7', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA7', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('q/g6c', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl7');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl7', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('J6vCX', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g7'),
        e = c('5UNjR7'),
        f = c('7m7y3');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, arguments, k);
            } else
                i = j.apply(this, arguments);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g7', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR7', function(b, c) {
    function d() {
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
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('7m7y3', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX7'),
        e = c('//YgM7');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX7', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM7', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('twV1x', function(b, x) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('b5p1k4'),
        e = c('7BHBJ'),
        f = c('3pEWZ'),
        g = c('PKxjP7'),
        h = c('zTitA7'),
        i = c('//YgM7'),
        j = c('q/g6c'),
        k = c('J6vCX'),
        l = c('WfHYJ8'),
        m = c('uPP4W'),
        n = c('NRRq4'),
        o = c('BqmJF'),
        p = c('+6j5t'),
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
    var t = function(a) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default,
            v = function(a) {
                (0, j.default)(x, a);
                var w = (0, k.default)(x);

                function x() {
                    var y;
                    (0, g.default)(this, x);
                    for (var z = arguments.length, A = new Array(z), B = 0; B < z; B++)
                        A[B] = arguments[B];
                    return y = w.call.apply(w, [this].concat(A)), (0, l.default)((0, i.default)(y), 'state', {
                        keyEntities: []
                    }), (0, l.default)((0, i.default)(y), 'removeKey', function(z) {
                        var C = y.state.keyEntities.map(function(y) {
                            return y.key !== z ? y : (0, f.default)((0, f.default)({}, y), {}, {
                                status: p.STATUS_REMOVED
                            });
                        });
                        return y.setState({
                            keyEntities: C
                        }), C.filter(function(y) {
                            return y.status !== p.STATUS_REMOVED;
                        }).length;
                    }), y;
                }
                return (0, h.default)(x, [{
                    key: 'render',
                    value: function() {
                        var y = this,
                            z = this.state.keyEntities,
                            A = this.props,
                            B = A.component,
                            C = A.children,
                            D = A.onVisibleChanged,
                            E = A.onAllRemoved,
                            F = (0, e.default)(A, q),
                            G = B || m.Fragment,
                            H = {};
                        return s.forEach(function(y) {
                            H[y] = F[y], delete F[y];
                        }), delete F.keys, m.createElement(G, F, z.map(function(z) {
                            var I = z.status,
                                J = (0, e.default)(z, r),
                                K = I === p.STATUS_ADD || I === p.STATUS_KEEP;
                            return m.createElement(u, (0, d.default)({}, H, {
                                key: J.key,
                                visible: K,
                                eventProps: J,
                                onVisibleChanged: function(u) {
                                    (null == D || D(u, {
                                        key: J.key
                                    }), u) || 0 === y.removeKey(J.key) && E && E();
                                }
                            }), C);
                        }));
                    }
                }], [{
                    key: 'getDerivedStateFromProps',
                    value: function(a, u) {
                        var y = a.keys,
                            z = u.keyEntities,
                            A = (0, p.parseKeys)(y);
                        return {
                            keyEntities: (0, p.diffKeys)(z, A).filter(function(a) {
                                var B = z.find(function(B) {
                                    var C = B.key;
                                    return a.key === C;
                                });
                                return !B || B.status !== p.STATUS_REMOVED || a.status !== p.STATUS_REMOVE;
                            })
                        };
                    }
                }]), x;
            }(m.Component);
        return (0, l.default)(v, 'defaultProps', {
            component: 'div'
        }), v;
    }(o.supportTransition);
}), c.register('+6j5t', function(b, p) {
    a(b.exports, 'STATUS_ADD', function() {
        return f;
    }), a(b.exports, 'STATUS_KEEP', function() {
        return g;
    }), a(b.exports, 'STATUS_REMOVE', function() {
        return h;
    }), a(b.exports, 'STATUS_REMOVED', function() {
        return i;
    }), a(b.exports, 'parseKeys', function() {
        return k;
    }), a(b.exports, 'diffKeys', function() {
        return l;
    });
    var d = c('3pEWZ'),
        e = c('iwiaz0'),
        f = 'add',
        g = 'keep',
        h = 'remove',
        i = 'removed';

    function j(a) {
        var k;
        return k = a && 'object' === (0, e.default)(a) && 'key' in a ? a : {
            key: a
        }, (0, d.default)((0, d.default)({}, k), {}, {
            key: String(k.key)
        });
    }

    function k() {
        var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return l.map(j);
    }

    function l() {
        var m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            o = [],
            p = 0,
            q = n.length,
            r = k(m),
            s = k(n);
        r.forEach(function(m) {
            for (var t = !1, u = v; u < q; u += 1) {
                var w = s[u];
                if (w.key === m.key) {
                    v < u && (o = o.concat(s.slice(v, u).map(function(m) {
                        return (0, d.default)((0, d.default)({}, m), {}, {
                            status: f
                        });
                    })), v = u), o.push((0, d.default)((0, d.default)({}, w), {}, {
                        status: g
                    })), v += 1, t = !0;
                    break;
                }
            }
            t || o.push((0, d.default)((0, d.default)({}, m), {}, {
                status: h
            }));
        }), p < q && (o = o.concat(s.slice(p).map(function(m) {
            return (0, d.default)((0, d.default)({}, m), {}, {
                status: f
            });
        })));
        var t = {};
        o.forEach(function(m) {
            var u = m.key;
            t[u] = (t[u] || 0) + 1;
        });
        var u = Object.keys(t).filter(function(m) {
            return t[m] > 1;
        });
        return u.forEach(function(m) {
            (o = o.filter(function(n) {
                var v = n.key,
                    w = n.status;
                return v !== m || w !== h;
            })).forEach(function(n) {
                n.key === m && (n.status = g);
            });
        }), o;
    }
}), c.register('xpImR', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    });
    var d = c('b5p1k4'),
        e = c('WfHYJ8'),
        f = c('pF1Hj'),
        g = c('uPP4W'),
        h = c('VAIs1'),
        i = g.forwardRef(function(a, c) {
            var j = a.prefixCls,
                k = a.style,
                l = a.className,
                m = a.duration,
                n = void 0 === m ? 4.5 : m,
                o = a.eventKey,
                p = a.content,
                q = a.closable,
                r = a.closeIcon,
                s = void 0 === r ? 'x' : r,
                t = a.props,
                u = a.onClick,
                v = a.onNoticeClose,
                w = a.times,
                x = g.useState(!1),
                y = (0, f.default)(x, 2),
                z = y[0],
                A = y[1],
                B = function() {
                    v(o);
                };
            g.useEffect(function() {
                if (!z && n > 0) {
                    var C = setTimeout(function() {
                        B();
                    }, 1000 * n);
                    return function() {
                        clearTimeout(C);
                    };
                }
            }, [
                n,
                z,
                w
            ]);
            var C = ''.concat(j, '-notice');
            return g.createElement('div', (0, d.default)({}, t, {
                ref: c,
                className: b(h)(C, l, (0, e.default)({}, ''.concat(C, '-closable'), q)),
                style: k,
                onMouseEnter: function() {
                    A(!0);
                },
                onMouseLeave: function() {
                    A(!1);
                },
                onClick: u
            }), g.createElement('div', {
                className: ''.concat(C, '-content')
            }, p), q && g.createElement('a', {
                tabIndex: 0,
                className: ''.concat(C, '-close'),
                onClick: function(a) {
                    a.preventDefault(), a.stopPropagation(), B();
                }
            }, s));
        });
});