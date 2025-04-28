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
a.register('80XJ3', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    }, function(d) {
        return _l = d;
    });
    var d = a('JrtKP'),
        e = a('aHE03'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('8NvQ6'),
        i = a('fdNan'),
        j = function(k, _l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && _l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    _l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    const k = _b => 'number' == typeof _b ? _b.toString() : '';
    var _l = f.forwardRef((_t, a) => {
        const {
            prefixCls: m,
            range: n,
            className: o,
            rootClassName: p,
            tooltipPrefixCls: q,
            tipFormatter: r,
            tooltipVisible: s,
            getTooltipPopupContainer: t,
            tooltipPlacement: u
        } = _t, v = j(_t, [
            'prefixCls',
            'range',
            'className',
            'rootClassName',
            'tooltipPrefixCls',
            'tipFormatter',
            'tooltipVisible',
            'getTooltipPopupContainer',
            'tooltipPlacement'
        ]), {
            getPrefixCls: w,
            direction: x,
            getPopupContainer: y
        } = f.useContext(g.ConfigContext), [z, A] = f.useState({}), B = (_b, _t) => {
            A(a => Object.assign(Object.assign({}, a), {
                [_b]: _t
            }));
        }, C = (_b, _t) => _b || (_t ? 'rtl' === x ? 'left' : 'right' : 'top'), D = w('slider', m), [E, F] = (0, i.default)(D), G = _b(d)(o, p, {
            [`${ D }-rtl`]: 'rtl' === x
        }, F);
        'rtl' !== x || v.vertical || (v.reverse = !v.reverse);
        const [H, I] = f.useMemo(() => n ? 'object' == typeof n ? [
            !0,
            n.draggableTrack
        ] : [
            !0,
            !1
        ] : [!1], [n]);
        return E(f.createElement(e.default, Object.assign({}, v, {
            step: v.step,
            range: H,
            draggableTrack: I,
            className: G,
            ref: a,
            prefixCls: D,
            handleRender: (_b, a) => {
                var J;
                const {
                    index: K,
                    dragging: L
                } = a, {
                    tooltip: M = {},
                    vertical: N
                } = _t, O = Object.assign({}, M), {
                    open: P,
                    placement: Q,
                    getPopupContainer: R,
                    prefixCls: S,
                    formatter: T
                } = O;
                let U;
                U = T || null === T ? T : r || null === r ? r : k;
                const V = !!U && (z[K] || L),
                    W = null !== (J = null != P ? P : s) && void 0 !== J ? J : void 0 === P && V,
                    X = Object.assign(Object.assign({}, _b.props), {
                        onMouseEnter: () => B(K, !0),
                        onMouseLeave: () => B(K, !1)
                    }),
                    Y = w('tooltip', null != S ? S : q);
                return f.createElement(h.default, {
                    prefixCls: Y,
                    title: U ? U(a.value) : '',
                    open: W,
                    placement: C(null != Q ? Q : u, N),
                    key: K,
                    overlayClassName: `${ D }-tooltip`,
                    getPopupContainer: R || t || y
                }, f.cloneElement(_b, X));
            }
        })));
    });
}), a.register('aHE03', function(_b, c) {
    _t(_b.exports, 'default', function() {
        return _d;
    });
    var _d = a('1zSZV').default;
}), a.register('1zSZV', function(b, c) {
    _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('oF9N0'),
        e = a('GNboV'),
        f = a('672gN'),
        g = a('EkeXo'),
        h = a('LEQ5w'),
        i = a('JrtKP'),
        j = a('kWBcw'),
        k = a('TTc70'),
        l = a('N8vje'),
        m = a('0T8hH'),
        n = a('aIYZN'),
        o = a('Ooekl'),
        p = a('Snaov'),
        q = a('Lw8ab'),
        r = a('jIdI6');
    a('4/rzN');
    var _s = h.forwardRef(function(_t, u) {
        var v, w = _t.prefixCls,
            x = void 0 === w ? 'rc-slider' : w,
            y = _t.className,
            z = _t.style,
            A = _t.disabled,
            B = void 0 !== A && A,
            C = _t.keyboard,
            D = void 0 === C || C,
            E = _t.autoFocus,
            F = _t.onFocus,
            G = _t.onBlur,
            H = _t.min,
            I = void 0 === H ? 0 : H,
            J = _t.max,
            K = void 0 === J ? 100 : J,
            L = _t.step,
            M = void 0 === L ? 1 : L,
            N = _t.value,
            O = _t.defaultValue,
            P = _t.range,
            Q = _t.count,
            R = _t.onChange,
            S = _t.onBeforeChange,
            T = _t.onAfterChange,
            U = _t.allowCross,
            V = void 0 === U || U,
            W = _t.pushable,
            X = void 0 !== W && W,
            Y = _t.draggableTrack,
            Z = _t.reverse,
            $ = _t.vertical,
            ab = _t.included,
            bb = void 0 === ab || ab,
            cb = _t.startPoint,
            db = _t.trackStyle,
            eb = _t.handleStyle,
            fb = _t.railStyle,
            gb = _t.dotStyle,
            hb = _t.activeDotStyle,
            ib = _t.marks,
            jb = _t.dots,
            kb = _t.handleRender,
            lb = _t.tabIndex,
            mb = void 0 === lb ? 0 : lb,
            nb = _t.ariaLabelForHandle,
            ob = _t.ariaLabelledByForHandle,
            pb = _t.ariaValueTextFormatterForHandle,
            qb = h.useRef(),
            rb = h.useRef(),
            sb = h.useMemo(function() {
                return $ ? Z ? 'ttb' : 'btt' : Z ? 'rtl' : 'ltr';
            }, [
                Z,
                $
            ]),
            tb = h.useMemo(function() {
                return isFinite(I) ? I : 0;
            }, [I]),
            ub = h.useMemo(function() {
                return isFinite(K) ? K : 100;
            }, [K]),
            vb = h.useMemo(function() {
                return null !== M && M <= 0 ? 1 : M;
            }, [M]),
            wb = h.useMemo(function() {
                return !0 === X ? vb : X >= 0 && X;
            }, [
                X,
                vb
            ]),
            xb = h.useMemo(function() {
                return Object.keys(ib || {}).map(function(yb) {
                    var zb = ib[yb],
                        Ab = {
                            value: Number(yb)
                        };
                    return zb && 'object' === (0, g.default)(zb) && !h.isValidElement(zb) && ('label' in zb || 'style' in zb) ? (Ab.style = zb.style, Ab.label = zb.label) : Ab.label = zb, Ab;
                }).filter(function(yb) {
                    var zb = yb.label;
                    return zb || 'number' == typeof zb;
                }).sort(function(yb, zb) {
                    return yb.value - zb.value;
                });
            }, [ib]),
            yb = (0, r.default)(tb, ub, vb, xb, V, wb),
            zb = (0, f.default)(yb, 2),
            Ab = zb[0],
            Bb = zb[1],
            Cb = (0, k.default)(O, {
                value: N
            }),
            Db = (0, f.default)(Cb, 2),
            Eb = Db[0],
            Fb = Db[1],
            Gb = h.useMemo(function() {
                var Hb = null == Eb ? [] : Array.isArray(Eb) ? Eb : [Eb],
                    Ib = (0, f.default)(Hb, 1)[0],
                    Jb = null === Eb ? [] : [void 0 === Ib ? tb : Ib];
                if (P) {
                    if (Jb = (0, e.default)(Hb), Q || void 0 === Eb) {
                        var Kb = Q >= 0 ? Q + 1 : 2;
                        for (Jb = Jb.slice(0, Kb); Jb.length < Kb;) {
                            var Lb;
                            Jb.push(null !== (Lb = Jb[Jb.length - 1]) && void 0 !== Lb ? Lb : tb);
                        }
                    }
                    Jb.sort(function(Kb, Lb) {
                        return Kb - Lb;
                    });
                }
                return Jb.forEach(function(Kb, Lb) {
                    Jb[Lb] = Ab(Kb);
                }), Jb;
            }, [
                Eb,
                P,
                tb,
                Q,
                Ab
            ]),
            Hb = h.useRef(Gb);
        Hb.current = Gb;
        var Ib = function(Jb) {
                return P ? Jb : Jb[0];
            },
            Jb = function(Kb) {
                var Lb = (0, e.default)(Kb).sort(function(Mb, Nb) {
                    return Mb - Nb;
                });
                R && !(0, j.default)(Lb, Hb.current, !0) && R(Ib(Lb)), Fb(Lb);
            },
            Kb = function(Lb) {
                if (!B) {
                    var Mb = 0,
                        Nb = ub - tb;
                    Gb.forEach(function(Ob, Pb) {
                        var Qb = Math.abs(Lb - Ob);
                        Qb <= Nb && (Nb = Qb, Mb = Pb);
                    });
                    var Ob = (0, e.default)(Gb);
                    Ob[Mb] = Lb, P && !Gb.length && void 0 === Q && Ob.push(Lb), null == S || S(Ib(Ob)), Jb(Ob), null == T || T(Ib(Ob));
                }
            },
            Lb = h.useState(null),
            Mb = (0, f.default)(Lb, 2),
            Nb = Mb[0],
            Ob = Mb[1];
        h.useEffect(function() {
            if (null !== Nb) {
                var Pb = Gb.indexOf(Nb);
                Pb >= 0 && qb.current.focus(Pb);
            }
            Ob(null);
        }, [Nb]);
        var Pb = h.useMemo(function() {
                return (!Y || null !== vb) && Y;
            }, [
                Y,
                vb
            ]),
            Qb = (0, m.default)(rb, sb, Gb, tb, ub, Ab, Jb, function() {
                null == T || T(Ib(Hb.current));
            }, Bb),
            Rb = (0, f.default)(Qb, 4),
            Sb = Rb[0],
            Tb = Rb[1],
            Ub = Rb[2],
            Vb = Rb[3],
            Wb = function(Xb, Yb) {
                Vb(Xb, Yb), null == S || S(Ib(Hb.current));
            },
            Xb = -1 !== Sb;
        h.useEffect(function() {
            if (!Xb) {
                var Yb = Gb.lastIndexOf(Tb);
                qb.current.focus(Yb);
            }
        }, [Xb]);
        var Yb = h.useMemo(function() {
                return (0, e.default)(Ub).sort(function(Zb, $b) {
                    return Zb - $b;
                });
            }, [Ub]),
            Zb = h.useMemo(function() {
                return P ? [
                    Yb[0],
                    Yb[Yb.length - 1]
                ] : [
                    tb,
                    Yb[0]
                ];
            }, [
                Yb,
                P,
                tb
            ]),
            $b = (0, f.default)(Zb, 2),
            ac = $b[0],
            bc = $b[1];
        h.useImperativeHandle(u, function() {
            return {
                focus: function() {
                    qb.current.focus(0);
                },
                blur: function() {
                    var cc = document.activeElement;
                    rb.current.contains(cc) && (null == cc || cc.blur());
                }
            };
        }), h.useEffect(function() {
            E && qb.current.focus(0);
        }, []);
        var cc = h.useMemo(function() {
            return {
                min: tb,
                max: ub,
                direction: sb,
                disabled: B,
                keyboard: D,
                step: vb,
                included: bb,
                includedStart: ac,
                includedEnd: bc,
                range: P,
                tabIndex: mb,
                ariaLabelForHandle: nb,
                ariaLabelledByForHandle: ob,
                ariaValueTextFormatterForHandle: pb
            };
        }, [
            tb,
            ub,
            sb,
            B,
            D,
            vb,
            bb,
            ac,
            bc,
            P,
            mb,
            nb,
            ob,
            pb
        ]);
        return h.createElement(n.default.Provider, {
            value: cc
        }, h.createElement('div', {
            ref: rb,
            className: _dc(i)(x, y, (v = {}, (0, d.default)(v, ''.concat(x, '-disabled'), B), (0, d.default)(v, ''.concat(x, '-vertical'), $), (0, d.default)(v, ''.concat(x, '-horizontal'), !$), (0, d.default)(v, ''.concat(x, '-with-marks'), xb.length), v)),
            style: z,
            onMouseDown: function(_dc) {
                _dc.preventDefault();
                var ec, fc = rb.current.getBoundingClientRect(),
                    gc = fc.width,
                    hc = fc.height,
                    ic = fc.left,
                    jc = fc.top,
                    kc = fc.bottom,
                    lc = fc.right,
                    mc = _dc.clientX,
                    nc = _dc.clientY;
                switch (sb) {
                    case 'btt':
                        ec = (kc - nc) / hc;
                        break;
                    case 'ttb':
                        ec = (nc - jc) / hc;
                        break;
                    case 'rtl':
                        ec = (lc - mc) / gc;
                        break;
                    default:
                        ec = (mc - ic) / gc;
                }
                Kb(Ab(tb + ec * (ub - tb)));
            }
        }, h.createElement('div', {
            className: ''.concat(x, '-rail'),
            style: fb
        }), h.createElement(o.default, {
            prefixCls: x,
            style: db,
            values: Yb,
            startPoint: cb,
            onStartMove: Pb ? Wb : null
        }), h.createElement(q.default, {
            prefixCls: x,
            marks: xb,
            dots: jb,
            style: gb,
            activeStyle: hb
        }), h.createElement(l.default, {
            ref: qb,
            prefixCls: x,
            style: eb,
            values: Ub,
            draggingIndex: Sb,
            onStartMove: Wb,
            onOffsetChange: function(dc, ec) {
                if (!B) {
                    var fc = Bb(Gb, dc, ec);
                    null == S || S(Ib(Gb)), Jb(fc.values), null == T || T(Ib(fc.values)), Ob(fc.value);
                }
            },
            onFocus: F,
            onBlur: G,
            handleRender: kb
        }), h.createElement(p.default, {
            prefixCls: x,
            marks: xb,
            onClick: Kb
        })));
    });
}), a.register('oF9N0', function(b, c) {
    function d(e, f, g) {
        return f in e ? Object.defineProperty(e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[f] = g, e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('GNboV', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _h;
    });
    var d = a('G/L3V'),
        e = a('PI/qA'),
        f = a('GvwX8'),
        g = a('Tyx+R');

    function _h(i) {
        return (0, d.default)(i) || (0, e.default)(i) || (0, f.default)(i) || (0, g.default)();
    }
}), a.register('G/L3V', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('V3KKk');

    function _e(f) {
        if (Array.isArray(f))
            return (0, d.default)(f);
    }
}), a.register('V3KKk', function(b, c) {
    function d(e, _f) {
        (null == _f || _f > e.length) && (_f = e.length);
        for (var g = 0, h = new Array(_f); g < _f; g++)
            h[g] = e[g];
        return h;
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('PI/qA', function(b, c) {
    function _d(e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
            return Array.from(e);
    }
    _g(b.exports, 'default', function() {
        return _c;
    });
}), a.register('GvwX8', function(b, _c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('V3KKk');

    function _e(f, _g) {
        if (f) {
            if ('string' == typeof f)
                return (0, d.default)(f, _g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? (0, d.default)(f, _g) : void 0;
        }
    }
}), a.register('Tyx+R', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _j(b.exports, 'default', function() {
        return _c;
    });
}), a.register('672gN', function(b, _c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LxZWQ'),
        e = a('FwaCE'),
        f = a('GvwX8'),
        g = a('PdIXP');

    function _h(i, _j) {
        return (0, d.default)(i) || (0, e.default)(i, _j) || (0, f.default)(i, _j) || (0, g.default)();
    }
}), a.register('LxZWQ', function(b, c) {
    function d(e) {
        if (Array.isArray(e))
            return e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('FwaCE', function(b, c) {
    function _d(e, _f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j = [],
                k = !0,
                l = !1;
            try {
                for (g = g.call(e); !(k = (h = g.next()).done) && (j.push(h.value), !_f || j.length !== _f); k = !0);
            } catch (e) {
                l = !0, i = e;
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
    _l(b.exports, 'default', function() {
        return _d;
    });
}), a.register('PdIXP', function(b, c) {
    function _d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _l(b.exports, 'default', function() {
        return _d;
    });
}), a.register('EkeXo', function(b, c) {
    function _d(e) {
        return _d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, _d(e);
    }
    _l(b.exports, 'default', function() {
        return _c;
    });
}), a.register('N8vje', function(b, _c) {
    _l(b.exports, 'default', function() {
        return _j;
    });
    var d = a('1TXha'),
        e = a('kRy3Z'),
        f = a('LEQ5w'),
        g = a('6yRhE'),
        h = a('OBlv3'),
        i = [
            'prefixCls',
            'style',
            'onStartMove',
            'onOffsetChange',
            'values',
            'handleRender',
            'draggingIndex'
        ],
        _j = f.forwardRef(function(k, _l) {
            var m = k.prefixCls,
                n = k.style,
                o = k.onStartMove,
                p = k.onOffsetChange,
                q = k.values,
                r = k.handleRender,
                s = k.draggingIndex,
                t = (0, e.default)(k, i),
                u = f.useRef({});
            return f.useImperativeHandle(_l, function() {
                return {
                    focus: function(v) {
                        var w;
                        null === (w = u.current[v]) || void 0 === w || w.focus();
                    }
                };
            }), f.createElement(f.Fragment, null, q.map(function(v, w) {
                return f.createElement(g.default, (0, d.default)({
                    ref: function(x) {
                        x ? u.current[w] = x : delete u.current[w];
                    },
                    dragging: s === w,
                    prefixCls: m,
                    style: (0, h.getIndex)(n, w),
                    key: w,
                    value: v,
                    valueIndex: w,
                    onStartMove: o,
                    onOffsetChange: p,
                    render: r
                }, t));
            }));
        });
}), a.register('1TXha', function(b, c) {
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
    _g(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kRy3Z', function(b, _c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('7oZoY');

    function _e(f, _g) {
        if (null == f)
            return {};
        var h, i, j = (0, d.default)(f, _g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(f);
            for (i = 0; i < k.length; i++)
                h = k[i], _g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(f, h) && (j[h] = f[h]);
        }
        return j;
    }
}), a.register('7oZoY', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _o(b.exports, 'default', function() {
        return _b;
    });
}), a.register('6yRhE', function(_b, c) {
    _o(_b.exports, 'default', function() {
        return _n;
    });
    var d = a('1TXha'),
        e = a('1kuXh'),
        f = a('oF9N0'),
        g = a('kRy3Z'),
        h = a('LEQ5w'),
        i = a('JrtKP'),
        j = a('qBGaA0'),
        k = a('aIYZN'),
        l = a('OBlv3'),
        m = [
            'prefixCls',
            'value',
            'valueIndex',
            'onStartMove',
            'style',
            'render',
            'dragging',
            'onOffsetChange'
        ],
        _n = h.forwardRef(function(_o, p) {
            var q, r, s = _o.prefixCls,
                t = _o.value,
                u = _o.valueIndex,
                v = _o.onStartMove,
                w = _o.style,
                x = _o.render,
                y = _o.dragging,
                z = _o.onOffsetChange,
                A = (0, g.default)(_o, m),
                B = h.useContext(k.default),
                C = B.min,
                D = B.max,
                E = B.direction,
                F = B.disabled,
                G = B.keyboard,
                H = B.range,
                I = B.tabIndex,
                J = B.ariaLabelForHandle,
                K = B.ariaLabelledByForHandle,
                L = B.ariaValueTextFormatterForHandle,
                M = ''.concat(s, '-handle'),
                N = function(O) {
                    F || v(O, u);
                },
                O = (0, l.getDirectionStyle)(E, t, C, D),
                P = h.createElement('div', (0, d.default)({
                    ref: p,
                    className: _Q(i)(M, (q = {}, (0, f.default)(q, ''.concat(M, '-').concat(u + 1), H), (0, f.default)(q, ''.concat(M, '-dragging'), y), q)),
                    style: (0, e.default)((0, e.default)({}, O), w),
                    onMouseDown: N,
                    onTouchStart: N,
                    onKeyDown: function(_Q) {
                        if (!F && G) {
                            var R = null;
                            switch (_Q.which || _Q.keyCode) {
                                case j.default.LEFT:
                                    R = 'ltr' === E || 'btt' === E ? -1 : 1;
                                    break;
                                case j.default.RIGHT:
                                    R = 'ltr' === E || 'btt' === E ? 1 : -1;
                                    break;
                                case j.default.UP:
                                    R = 'ttb' !== E ? 1 : -1;
                                    break;
                                case j.default.DOWN:
                                    R = 'ttb' !== E ? -1 : 1;
                                    break;
                                case j.default.HOME:
                                    R = 'min';
                                    break;
                                case j.default.END:
                                    R = 'max';
                                    break;
                                case j.default.PAGE_UP:
                                    R = 2;
                                    break;
                                case j.default.PAGE_DOWN:
                                    R = -2;
                            }
                            null !== R && (_Q.preventDefault(), z(R, u));
                        }
                    },
                    tabIndex: F ? null : (0, l.getIndex)(I, u),
                    role: 'slider',
                    'aria-valuemin': C,
                    'aria-valuemax': D,
                    'aria-valuenow': t,
                    'aria-disabled': F,
                    'aria-label': (0, l.getIndex)(J, u),
                    'aria-labelledby': (0, l.getIndex)(K, u),
                    'aria-valuetext': null === (r = (0, l.getIndex)(L, u)) || void 0 === r ? void 0 : r(t)
                }, A));
            return x && (P = x(P, {
                index: u,
                prefixCls: s,
                value: t,
                dragging: y
            })), P;
        });
}), a.register('1kuXh', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('oF9N0');

    function e(f, _g) {
        var h = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(f);
            _g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _i(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _i(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('aIYZN', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('LEQ5w').createContext({
        min: 0,
        max: 0,
        direction: 'ltr',
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0
    });
}), a.register('OBlv3', function(b, c) {
    function d(e, _f, g) {
        return (e - _f) / (g - _f);
    }

    function d(e, f, g, h) {
        var _i = _c(f, g, h),
            j = {};
        switch (e) {
            case 'rtl':
                j.right = ''.concat(100 * _i, '%'), j.transform = 'translateX(50%)';
                break;
            case 'btt':
                j.bottom = ''.concat(100 * _i, '%'), j.transform = 'translateY(50%)';
                break;
            case 'ttb':
                j.top = ''.concat(100 * _i, '%'), j.transform = 'translateY(-50%)';
                break;
            default:
                j.left = ''.concat(100 * _i, '%'), j.transform = 'translateX(-50%)';
        }
        return j;
    }

    function d(e, f) {
        return Array.isArray(e) ? e[f] : e;
    }
    _i(b.exports, 'getOffset', function() {
        return _c;
    }), _i(b.exports, 'getDirectionStyle', function() {
        return _d;
    }), _i(b.exports, 'getIndex', function() {
        return _e;
    });
}), a.register('0T8hH', function(b, _c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var _d = a('GNboV'),
        _e = a('672gN'),
        f = a('LEQ5w');

    function g(h) {
        var _i = 'touches' in h ? h.touches[0] : h;
        return {
            pageX: _i.pageX,
            pageY: _i.pageY
        };
    }

    function _g(h, i, j, k, l, m, n, o, p) {
        var q = f.useState(null),
            r = (0, _e.default)(q, 2),
            s = r[0],
            t = r[1],
            u = f.useState(-1),
            v = (0, _e.default)(u, 2),
            w = v[0],
            x = v[1],
            y = f.useState(j),
            z = (0, _e.default)(y, 2),
            A = z[0],
            B = z[1],
            C = f.useState(j),
            D = (0, _e.default)(C, 2),
            E = D[0],
            F = D[1],
            G = f.useRef(null),
            H = f.useRef(null);
        f.useEffect(function() {
            -1 === w && B(j);
        }, [
            j,
            w
        ]), f.useEffect(function() {
            return function() {
                document.removeEventListener('mousemove', G.current), document.removeEventListener('mouseup', H.current), document.removeEventListener('touchmove', G.current), document.removeEventListener('touchend', H.current);
            };
        }, []);
        var I = function(J, K) {
                A.some(function(L, M) {
                    return L !== J[M];
                }) && (void 0 !== K && t(K), B(J), n(J));
            },
            J = function(K, L) {
                if (-1 === K) {
                    var M = E[0],
                        N = E[E.length - 1],
                        O = k - M,
                        P = l - N,
                        Q = L * (l - k);
                    Q = Math.max(Q, O), Q = Math.min(Q, P);
                    var R = m(M + Q);
                    Q = R - M;
                    var S = E.map(function(T) {
                        return T + Q;
                    });
                    I(S);
                } else {
                    var M = (l - k) * L,
                        N = (0, _d.default)(A);
                    N[K] = E[K];
                    var O = p(N, M, K, 'dist');
                    I(O.values, O.value);
                }
            },
            K = f.useRef(J);
        K.current = J;
        var L = f.useMemo(function() {
            var M = (0, _d.default)(j).sort(function(N, O) {
                    return N - O;
                }),
                N = (0, _d.default)(A).sort(function(O, P) {
                    return O - P;
                });
            return M.every(function(O, P) {
                return O === N[P];
            }) ? A : j;
        }, [
            j,
            A
        ]);
        return [
            w,
            s,
            L,
            function(M, N) {
                M.stopPropagation();
                var O = j[N];
                x(N), t(O), F(j);
                var P = _g(M),
                    Q = P.pageX,
                    R = P.pageY,
                    S = function(T) {
                        T.preventDefault();
                        var U, V = _g(T),
                            W = V.pageX,
                            X = V.pageY,
                            Y = W - Q,
                            Z = X - R,
                            $ = h.current.getBoundingClientRect(),
                            ab = $.width,
                            bb = $.height;
                        switch (i) {
                            case 'btt':
                                U = -Z / bb;
                                break;
                            case 'ttb':
                                U = Z / bb;
                                break;
                            case 'rtl':
                                U = -Y / ab;
                                break;
                            default:
                                U = Y / ab;
                        }
                        K.current(N, U);
                    },
                    T = function h(U) {
                        U.preventDefault(), document.removeEventListener('mouseup', h), document.removeEventListener('mousemove', S), document.removeEventListener('touchend', h), document.removeEventListener('touchmove', S), G.current = null, H.current = null, x(-1), o();
                    };
                document.addEventListener('mouseup', T), document.addEventListener('mousemove', S), document.addEventListener('touchend', T), document.addEventListener('touchmove', S), G.current = S, H.current = T;
            }
        ];
    }
}), a.register('Ooekl', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('aIYZN'),
        f = a('dXtMm'),
        _g = a('OBlv3');

    function _h(i) {
        var _j = i.prefixCls,
            k = i.style,
            l = i.values,
            m = i.startPoint,
            n = i.onStartMove,
            o = d.useContext(e.default),
            p = o.included,
            q = o.range,
            r = o.min,
            s = d.useMemo(function() {
                if (!q) {
                    if (0 === l.length)
                        return [];
                    var t = null != m ? m : r,
                        u = l[0];
                    return [{
                        start: Math.min(t, u),
                        end: Math.max(t, u)
                    }];
                }
                for (var t = [], u = 0; u < l.length - 1; u += 1)
                    t.push({
                        start: l[u],
                        end: l[u + 1]
                    });
                return t;
            }, [
                l,
                q,
                m,
                r
            ]);
        return p ? s.map(function(t, u) {
            var v = t.start,
                w = t.end;
            return d.createElement(f.default, {
                index: u,
                prefixCls: _j,
                style: (0, _g.getIndex)(k, u),
                start: v,
                end: w,
                key: u,
                onStartMove: n
            });
        }) : null;
    }
}), a.register('dXtMm', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('1kuXh'),
        e = a('LEQ5w'),
        f = a('JrtKP'),
        g = a('aIYZN'),
        h = a('OBlv3');

    function _i(_j) {
        var k = _j.prefixCls,
            l = _j.style,
            m = _j.start,
            n = _j.end,
            o = _j.index,
            p = _j.onStartMove,
            q = e.useContext(g.default),
            r = q.direction,
            s = q.min,
            t = q.max,
            u = q.disabled,
            v = q.range,
            w = ''.concat(k, '-track'),
            x = (0, h.getOffset)(m, s, t),
            y = (0, h.getOffset)(n, s, t),
            z = function(A) {
                !u && p && p(A, -1);
            },
            A = {};
        switch (r) {
            case 'rtl':
                A.right = ''.concat(100 * x, '%'), A.width = ''.concat(100 * y - 100 * x, '%');
                break;
            case 'btt':
                A.bottom = ''.concat(100 * x, '%'), A.height = ''.concat(100 * y - 100 * x, '%');
                break;
            case 'ttb':
                A.top = ''.concat(100 * x, '%'), A.height = ''.concat(100 * y - 100 * x, '%');
                break;
            default:
                A.left = ''.concat(100 * x, '%'), A.width = ''.concat(100 * y - 100 * x, '%');
        }
        return e.createElement('div', {
            className: _b(f)(w, v && ''.concat(w, '-').concat(o + 1)),
            style: (0, d.default)((0, d.default)({}, A), l),
            onMouseDown: z,
            onTouchStart: z
        });
    }
}), a.register('Snaov', function(_b, c) {
    _h(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('VGdGq');

    function _f(g) {
        var _h = g.prefixCls,
            i = g.marks,
            j = g.onClick,
            k = ''.concat(_h, '-mark');
        return i.length ? d.createElement('div', {
            className: k
        }, i.map(function(l) {
            var m = l.value,
                n = l.style,
                o = l.label;
            return d.createElement(e.default, {
                key: m,
                prefixCls: k,
                style: n,
                value: m,
                onClick: j
            }, o);
        })) : null;
    }
}), a.register('VGdGq', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('1kuXh'),
        e = a('oF9N0'),
        f = a('LEQ5w'),
        g = a('JrtKP'),
        h = a('OBlv3'),
        i = a('aIYZN');

    function _j(_k) {
        var l = _k.prefixCls,
            m = _k.style,
            n = _k.children,
            o = _k.value,
            p = _k.onClick,
            q = f.useContext(i.default),
            r = q.min,
            s = q.max,
            t = q.direction,
            u = q.includedStart,
            v = q.includedEnd,
            w = q.included,
            x = ''.concat(l, '-text'),
            y = (0, h.getDirectionStyle)(t, o, r, s);
        return f.createElement('span', {
            className: _z(g)(x, (0, e.default)({}, ''.concat(x, '-active'), w && u <= o && o <= v)),
            style: (0, d.default)((0, d.default)({}, y), m),
            onMouseDown: function(_z) {
                _z.stopPropagation();
            },
            onClick: function() {
                p(o);
            }
        }, n);
    }
}), a.register('Lw8ab', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('aIYZN'),
        f = a('VcMjw');

    function _g(h) {
        var _i = h.prefixCls,
            j = h.marks,
            k = h.dots,
            l = h.style,
            m = h.activeStyle,
            n = d.useContext(e.default),
            o = n.min,
            p = n.max,
            q = n.step,
            r = d.useMemo(function() {
                var s = new Set();
                if (j.forEach(function(t) {
                        s.add(t.value);
                    }), k && null !== q)
                    for (var t = o; t <= p;)
                        s.add(t), t += q;
                return Array.from(s);
            }, [
                o,
                p,
                q,
                k,
                j
            ]);
        return d.createElement('div', {
            className: ''.concat(_i, '-step')
        }, r.map(function(s) {
            return d.createElement(f.default, {
                prefixCls: _i,
                key: s,
                value: s,
                style: l,
                activeStyle: m
            });
        }));
    }
}), a.register('VcMjw', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('oF9N0'),
        e = a('1kuXh'),
        f = a('LEQ5w'),
        g = a('JrtKP'),
        h = a('OBlv3'),
        i = a('aIYZN');

    function _j(_k) {
        var l = _k.prefixCls,
            m = _k.value,
            n = _k.style,
            o = _k.activeStyle,
            p = f.useContext(i.default),
            q = p.min,
            r = p.max,
            s = p.direction,
            t = p.included,
            u = p.includedStart,
            v = p.includedEnd,
            w = ''.concat(l, '-dot'),
            x = t && u <= m && m <= v,
            y = (0, e.default)((0, e.default)({}, (0, h.getDirectionStyle)(s, m, q, r)), 'function' == typeof n ? n(m) : n);
        return x && (y = (0, e.default)((0, e.default)({}, y), 'function' == typeof o ? o(m) : o)), f.createElement('span', {
            className: _b(g)(w, (0, d.default)({}, ''.concat(w, '-active'), x)),
            style: y
        });
    }
}), a.register('jIdI6', function(_b, c) {
    _h(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('GNboV'),
        e = a('LEQ5w');

    function _f(g, _h, i, j, k, l) {
        var m = e.useCallback(function(n) {
                var o = isFinite(n) ? n : g;
                return o = Math.min(_h, n), o = Math.max(g, o);
            }, [
                g,
                _h
            ]),
            n = e.useCallback(function(o) {
                if (null !== i) {
                    var p = g + Math.round((m(o) - g) / i) * i,
                        q = function(r) {
                            return (String(r).split('.')[1] || '').length;
                        },
                        r = Math.max(q(i), q(_h), q(g)),
                        s = Number(p.toFixed(r));
                    return g <= s && s <= _h ? s : null;
                }
                return null;
            }, [
                i,
                g,
                _h,
                m
            ]),
            o = e.useCallback(function(p) {
                var q = m(p),
                    r = j.map(function(s) {
                        return s.value;
                    });
                null !== i && r.push(n(p)), r.push(g, _h);
                var s = r[0],
                    t = _h - g;
                return r.forEach(function(u) {
                    var v = Math.abs(q - u);
                    v <= t && (s = u, t = v);
                }), s;
            }, [
                g,
                _h,
                j,
                i,
                m,
                n
            ]),
            p = function e(q, r, s) {
                var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit';
                if ('number' == typeof r) {
                    var u, v = q[s],
                        w = v + r,
                        x = [];
                    j.forEach(function(y) {
                        x.push(y.value);
                    }), x.push(g, _h), x.push(n(v));
                    var y = r > 0 ? 1 : -1;
                    'unit' === t ? x.push(n(v + y * i)) : x.push(n(w)), x = x.filter(function(z) {
                        return null !== z;
                    }).filter(function(z) {
                        return r < 0 ? z <= v : z >= v;
                    }), 'unit' === t && (x = x.filter(function(z) {
                        return z !== v;
                    }));
                    var z = 'unit' === t ? v : w;
                    u = x[0];
                    var A = Math.abs(u - z);
                    if (x.forEach(function(B) {
                            var C = Math.abs(B - z);
                            C < A && (u = B, A = C);
                        }), void 0 === u)
                        return r < 0 ? g : _h;
                    if ('dist' === t)
                        return u;
                    if (Math.abs(r) > 1) {
                        var B = (0, d.default)(q);
                        return B[s] = u, e(B, r - y, s, t);
                    }
                    return u;
                }
                return 'min' === r ? g : 'max' === r ? _h : void 0;
            },
            q = function(r, s, t) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    v = r[t],
                    w = p(r, s, t, u);
                return {
                    value: w,
                    changed: w !== v
                };
            },
            r = function(s) {
                return null === l && 0 === s || 'number' == typeof l && s < l;
            };
        return [
            o,
            function(s, t, u) {
                var v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    w = s.map(o),
                    x = w[u],
                    y = p(w, t, u, v);
                if (w[u] = y, !1 === k) {
                    var z = l || 0;
                    u > 0 && w[u - 1] !== x && (w[u] = Math.max(w[u], w[u - 1] + z)), u < w.length - 1 && w[u + 1] !== x && (w[u] = Math.min(w[u], w[u + 1] - z));
                } else if ('number' == typeof l || null === l) {
                    for (var z = u + 1; z < w.length; z += 1)
                        for (var A = !0; r(w[z] - w[z - 1]) && A;) {
                            var B = q(w, 1, z);
                            w[z] = B.value, A = B.changed;
                        }
                    for (var B = u; B > 0; B -= 1)
                        for (var C = !0; r(w[B] - w[B - 1]) && C;) {
                            var D = q(w, -1, B - 1);
                            w[B - 1] = D.value, C = D.changed;
                        }
                    for (var D = w.length - 1; D > 0; D -= 1)
                        for (var E = !0; r(w[D] - w[D - 1]) && E;) {
                            var F = q(w, -1, D - 1);
                            w[D - 1] = F.value, E = F.changed;
                        }
                    for (var F = 0; F < w.length - 1; F += 1)
                        for (var G = !0; r(w[F + 1] - w[F]) && G;) {
                            var H = q(w, 1, F + 1);
                            w[F + 1] = H.value, G = H.changed;
                        }
                }
                return {
                    value: w[u],
                    values: w
                };
            }
        ];
    }
}), a.register('8NvQ6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('/tkLO'),
        e = a('gIJPx'),
        f = a('LEQ5w'),
        g = (f = a('LEQ5w'), a('ijg0s'));
    var _h = f.forwardRef((b, _i) => {
        const {
            open: i
        } = b, j = (0, f.useRef)(null), k = (0, f.useRef)(null);

        function l() {
            d.default.cancel(k.current), k.current = null;
        }
        return f.useEffect(() => (i ? k.current = (0, d.default)(() => {
            var l;
            null === (l = j.current) || void 0 === l || l.forcePopupAlign(), k.current = null;
        }) : _i(), _i), [
            i,
            b.title
        ]), f.createElement(g.default, Object.assign({
            ref: (0, e.composeRef)(j, _i)
        }, b));
    });
}), a.register('fdNan', function(b, c) {
    _i(b.exports, 'default', function() {
        return _l;
    });
    var d = a('hQidN'),
        e = a('7hbGU'),
        f = a('XC0UB'),
        g = a('l+IVY');
    const h = b => {
            const {
                componentCls: _i,
                controlSize: j,
                dotSize: k,
                marginFull: l,
                marginPart: m,
                colorFillContentHover: n
            } = b;
            return {
                [_i]: Object.assign(Object.assign({}, (0, e.resetComponent)(b)), {
                    position: 'relative',
                    height: j,
                    margin: `${ m }px ${ l }px`,
                    padding: 0,
                    cursor: 'pointer',
                    touchAction: 'none',
                    '&-vertical': {
                        margin: `${ l }px ${ m }px`
                    },
                    [`${ _i }-rail`]: {
                        position: 'absolute',
                        backgroundColor: b.colorFillTertiary,
                        borderRadius: b.borderRadiusXS,
                        transition: `background-color ${ b.motionDurationMid }`
                    },
                    [`${ _i }-track`]: {
                        position: 'absolute',
                        backgroundColor: b.colorPrimaryBorder,
                        borderRadius: b.borderRadiusXS,
                        transition: `background-color ${ b.motionDurationMid }`
                    },
                    '&:hover': {
                        [`${ _i }-rail`]: {
                            backgroundColor: b.colorFillSecondary
                        },
                        [`${ _i }-track`]: {
                            backgroundColor: b.colorPrimaryBorderHover
                        },
                        [`${ _i }-dot`]: {
                            borderColor: n
                        },
                        [`${ _i }-handle::after`]: {
                            boxShadow: `0 0 0 ${ b.handleLineWidth }px ${ b.colorPrimaryBorderHover }`
                        },
                        [`${ _i }-dot-active`]: {
                            borderColor: b.colorPrimary
                        }
                    },
                    [`${ _i }-handle`]: {
                        position: 'absolute',
                        width: b.handleSize,
                        height: b.handleSize,
                        outline: 'none',
                        [`${ _i }-dragging`]: {
                            zIndex: 1
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            insetInlineStart: -b.handleLineWidth,
                            insetBlockStart: -b.handleLineWidth,
                            width: b.handleSize + 2 * b.handleLineWidth,
                            height: b.handleSize + 2 * b.handleLineWidth,
                            backgroundColor: 'transparent'
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            insetBlockStart: 0,
                            insetInlineStart: 0,
                            width: b.handleSize,
                            height: b.handleSize,
                            backgroundColor: b.colorBgElevated,
                            boxShadow: `0 0 0 ${ b.handleLineWidth }px ${ b.colorPrimaryBorder }`,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: `\n            inset-inline-start ${ b.motionDurationMid },\n            inset-block-start ${ b.motionDurationMid },\n            width ${ b.motionDurationMid },\n            height ${ b.motionDurationMid },\n            box-shadow ${ b.motionDurationMid }\n          `
                        },
                        '&:hover, &:active, &:focus': {
                            '&::before': {
                                insetInlineStart: -((b.handleSizeHover - b.handleSize) / 2 + b.handleLineWidthHover),
                                insetBlockStart: -((b.handleSizeHover - b.handleSize) / 2 + b.handleLineWidthHover),
                                width: b.handleSizeHover + 2 * b.handleLineWidthHover,
                                height: b.handleSizeHover + 2 * b.handleLineWidthHover
                            },
                            '&::after': {
                                boxShadow: `0 0 0 ${ b.handleLineWidthHover }px ${ b.colorPrimary }`,
                                width: b.handleSizeHover,
                                height: b.handleSizeHover,
                                insetInlineStart: (b.handleSize - b.handleSizeHover) / 2,
                                insetBlockStart: (b.handleSize - b.handleSizeHover) / 2
                            }
                        }
                    },
                    [`${ _i }-mark`]: {
                        position: 'absolute',
                        fontSize: b.fontSize
                    },
                    [`${ _i }-mark-text`]: {
                        position: 'absolute',
                        display: 'inline-block',
                        color: b.colorTextDescription,
                        textAlign: 'center',
                        wordBreak: 'keep-all',
                        cursor: 'pointer',
                        userSelect: 'none',
                        '&-active': {
                            color: b.colorText
                        }
                    },
                    [`${ _i }-step`]: {
                        position: 'absolute',
                        background: 'transparent'
                    },
                    [`${ _i }-dot`]: {
                        position: 'absolute',
                        width: k,
                        height: k,
                        backgroundColor: b.colorBgElevated,
                        border: `${ b.handleLineWidth }px solid ${ b.colorBorderSecondary }`,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: `border-color ${ b.motionDurationSlow }`,
                        '&-active': {
                            borderColor: b.colorPrimaryBorder
                        }
                    },
                    [`&${ _i }-disabled`]: {
                        cursor: 'not-allowed',
                        [`${ _i }-rail`]: {
                            backgroundColor: `${ b.colorFillSecondary } !important`
                        },
                        [`${ _i }-track`]: {
                            backgroundColor: `${ b.colorTextDisabled } !important`
                        },
                        [`\n          ${ _i }-dot\n        `]: {
                            backgroundColor: b.colorBgElevated,
                            borderColor: b.colorTextDisabled,
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        },
                        [`${ _i }-handle::after`]: {
                            backgroundColor: b.colorBgElevated,
                            cursor: 'not-allowed',
                            width: b.handleSize,
                            height: b.handleSize,
                            boxShadow: `0 0 0 ${ b.handleLineWidth }px ${ new (0, d.TinyColor)(b.colorTextDisabled).onBackground(b.colorBgContainer).toHexShortString() }`,
                            insetInlineStart: 0,
                            insetBlockStart: 0
                        },
                        [`\n          ${ _i }-mark-text,\n          ${ _i }-dot\n        `]: {
                            cursor: 'not-allowed !important'
                        }
                    }
                })
            };
        },
        _i = (b, _k) => {
            const {
                componentCls: j,
                railSize: k,
                handleSize: l,
                dotSize: m
            } = b, n = _k ? 'width' : 'height', o = _k ? 'height' : 'width', p = _k ? 'insetBlockStart' : 'insetInlineStart', q = _k ? 'top' : 'insetInlineStart';
            return {
                [_k ? 'paddingBlock' : 'paddingInline']: k,
                [o]: 3 * k,
                [`${ j }-rail`]: {
                    [n]: '100%',
                    [o]: k
                },
                [`${ j }-track`]: {
                    [o]: k
                },
                [`${ j }-handle`]: {
                    [p]: (3 * k - l) / 2
                },
                [`${ j }-mark`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [q]: l,
                    [n]: '100%'
                },
                [`${ j }-step`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [q]: k,
                    [n]: '100%',
                    [o]: k
                },
                [`${ j }-dot`]: {
                    position: 'absolute',
                    [p]: (k - m) / 2
                }
            };
        },
        j = b => {
            const {
                componentCls: _k,
                marginPartWithMark: l
            } = b;
            return {
                [`${ _k }-horizontal`]: Object.assign(Object.assign({}, _i(b, !0)), {
                    [`&${ _k }-with-marks`]: {
                        marginBottom: l
                    }
                })
            };
        },
        k = b => {
            const {
                componentCls: l
            } = b;
            return {
                [`${ l }-vertical`]: Object.assign(Object.assign({}, _i(b, !1)), {
                    height: '100%'
                })
            };
        };
    var _l = (0, f.default)('Slider', b => {
        const m = (0, g.merge)(b, {
            marginPart: (b.controlHeight - b.controlSize) / 2,
            marginFull: b.controlSize / 2,
            marginPartWithMark: b.controlHeightLG - b.controlSize
        });
        return [
            h(m),
            j(m),
            k(m)
        ];
    }, b => {
        const m = b.controlHeightLG / 4;
        return {
            controlSize: m,
            railSize: 4,
            handleSize: m,
            handleSizeHover: b.controlHeightSM / 2,
            dotSize: 8,
            handleLineWidth: b.lineWidth + 1,
            handleLineWidthHover: b.lineWidth + 3
        };
    });
});