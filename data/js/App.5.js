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
c.register('+xIkQ', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    }, function(f) {
        return _n = f;
    });
    var f = c('/U36/'),
        g = c('g2AmR'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('i+37d'),
        k = c('YCLih'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = a => 'number' == typeof a ? a.toString() : '';
    var _n = h.forwardRef((b, c) => {
        const {
            prefixCls: o,
            range: p,
            className: q,
            rootClassName: r,
            tooltipPrefixCls: s,
            tipFormatter: t,
            tooltipVisible: u,
            getTooltipPopupContainer: v,
            tooltipPlacement: w
        } = b, x = l(b, [
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
            getPrefixCls: y,
            direction: z,
            getPopupContainer: A
        } = h.useContext(i.ConfigContext), [B, C] = h.useState({}), D = (a, b) => {
            C(c => Object.assign(Object.assign({}, c), {
                [a]: b
            }));
        }, E = (a, b) => a || (b ? 'rtl' === z ? 'left' : 'right' : 'top'), F = y('slider', o), [G, H] = (0, k.default)(F), I = a(f)(q, r, {
            [`${ F }-rtl`]: 'rtl' === z
        }, H);
        'rtl' !== z || x.vertical || (x.reverse = !x.reverse);
        const [J, K] = h.useMemo(() => p ? 'object' == typeof p ? [
            !0,
            p.draggableTrack
        ] : [
            !0,
            !1
        ] : [!1], [p]);
        return G(h.createElement(g.default, Object.assign({}, x, {
            step: x.step,
            range: J,
            draggableTrack: K,
            className: I,
            ref: c,
            prefixCls: F,
            handleRender: (a, c) => {
                var L;
                const {
                    index: M,
                    dragging: N
                } = c, {
                    tooltip: O = {},
                    vertical: P
                } = b, Q = Object.assign({}, O), {
                    open: R,
                    placement: S,
                    getPopupContainer: T,
                    prefixCls: U,
                    formatter: V
                } = Q;
                let W;
                W = V || null === V ? V : t || null === t ? t : m;
                const X = !!W && (B[M] || N),
                    Y = null !== (L = null != R ? R : u) && void 0 !== L ? L : void 0 === R && X,
                    Z = Object.assign(Object.assign({}, a.props), {
                        onMouseEnter: () => D(M, !0),
                        onMouseLeave: () => D(M, !1)
                    }),
                    $ = y('tooltip', null != U ? U : s);
                return h.createElement(j.default, {
                    prefixCls: $,
                    title: W ? W(c.value) : '',
                    open: Y,
                    placement: E(null != S ? S : w, P),
                    key: M,
                    overlayClassName: `${ F }-tooltip`,
                    getPopupContainer: T || v || A
                }, h.cloneElement(a, Z));
            }
        })));
    });
}), c.register('g2AmR', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('k4+k4').default;
}), c.register('k4+k4', function(d, e) {
    b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('Dyrc5'),
        g = c('WmBg2'),
        h = c('LZCqc'),
        i = c('6EHpb'),
        j = c('O0Kav'),
        k = c('/U36/'),
        l = c('ElFPk'),
        m = c('MsxQz'),
        n = c('e907Q'),
        o = c('r2kDe'),
        p = c('L5GMd'),
        q = c('MbpPS'),
        r = c('y5mVe'),
        s = c('y503W'),
        t = c('lDKtu');
    c('Ip0tz');
    var _u = j.forwardRef(function(v, w) {
        var x, y = v.prefixCls,
            z = void 0 === y ? 'rc-slider' : y,
            A = v.className,
            B = v.style,
            C = v.disabled,
            D = void 0 !== C && C,
            E = v.keyboard,
            F = void 0 === E || E,
            G = v.autoFocus,
            H = v.onFocus,
            I = v.onBlur,
            J = v.min,
            K = void 0 === J ? 0 : J,
            L = v.max,
            M = void 0 === L ? 100 : L,
            N = v.step,
            O = void 0 === N ? 1 : N,
            P = v.value,
            Q = v.defaultValue,
            R = v.range,
            S = v.count,
            T = v.onChange,
            U = v.onBeforeChange,
            V = v.onAfterChange,
            W = v.allowCross,
            X = void 0 === W || W,
            Y = v.pushable,
            Z = void 0 !== Y && Y,
            $ = v.draggableTrack,
            ab = v.reverse,
            bb = v.vertical,
            cb = v.included,
            db = void 0 === cb || cb,
            eb = v.startPoint,
            fb = v.trackStyle,
            gb = v.handleStyle,
            hb = v.railStyle,
            ib = v.dotStyle,
            jb = v.activeDotStyle,
            kb = v.marks,
            lb = v.dots,
            mb = v.handleRender,
            nb = v.tabIndex,
            ob = void 0 === nb ? 0 : nb,
            pb = v.ariaLabelForHandle,
            qb = v.ariaLabelledByForHandle,
            rb = v.ariaValueTextFormatterForHandle,
            sb = j.useRef(),
            tb = j.useRef(),
            ub = j.useMemo(function() {
                return bb ? ab ? 'ttb' : 'btt' : ab ? 'rtl' : 'ltr';
            }, [
                ab,
                bb
            ]),
            vb = j.useMemo(function() {
                return isFinite(K) ? K : 0;
            }, [K]),
            wb = j.useMemo(function() {
                return isFinite(M) ? M : 100;
            }, [M]),
            xb = j.useMemo(function() {
                return null !== O && O <= 0 ? 1 : O;
            }, [O]),
            yb = j.useMemo(function() {
                return !0 === Z ? xb : Z >= 0 && Z;
            }, [
                Z,
                xb
            ]),
            zb = j.useMemo(function() {
                return Object.keys(kb || {}).map(function(Ab) {
                    var Bb = kb[Ab],
                        Cb = {
                            value: Number(Ab)
                        };
                    return Bb && 'object' === (0, i.default)(Bb) && !j.isValidElement(Bb) && ('label' in Bb || 'style' in Bb) ? (Cb.style = Bb.style, Cb.label = Bb.label) : Cb.label = Bb, Cb;
                }).filter(function(Ab) {
                    var Bb = Ab.label;
                    return Bb || 'number' == typeof Bb;
                }).sort(function(Ab, Bb) {
                    return Ab.value - Bb.value;
                });
            }, [kb]),
            Ab = (0, t.default)(vb, wb, xb, zb, X, yb),
            Bb = (0, h.default)(Ab, 2),
            Cb = Bb[0],
            Db = Bb[1],
            Eb = (0, m.default)(Q, {
                value: P
            }),
            Fb = (0, h.default)(Eb, 2),
            Gb = Fb[0],
            Hb = Fb[1],
            Ib = j.useMemo(function() {
                var Jb = null == Gb ? [] : Array.isArray(Gb) ? Gb : [Gb],
                    Kb = (0, h.default)(Jb, 1)[0],
                    Lb = null === Gb ? [] : [void 0 === Kb ? vb : Kb];
                if (R) {
                    if (Lb = (0, g.default)(Jb), S || void 0 === Gb) {
                        var Mb = S >= 0 ? S + 1 : 2;
                        for (Lb = Lb.slice(0, Mb); Lb.length < Mb;) {
                            var Nb;
                            Lb.push(null !== (Nb = Lb[Lb.length - 1]) && void 0 !== Nb ? Nb : vb);
                        }
                    }
                    Lb.sort(function(Mb, Nb) {
                        return Mb - Nb;
                    });
                }
                return Lb.forEach(function(Mb, Nb) {
                    Lb[Nb] = Cb(Mb);
                }), Lb;
            }, [
                Gb,
                R,
                vb,
                S,
                Cb
            ]),
            Jb = j.useRef(Ib);
        Jb.current = Ib;
        var Kb = function(Lb) {
                return R ? Lb : Lb[0];
            },
            Lb = function(Mb) {
                var Nb = (0, g.default)(Mb).sort(function(Ob, Pb) {
                    return Ob - Pb;
                });
                T && !(0, l.default)(Nb, Jb.current, !0) && T(Kb(Nb)), Hb(Nb);
            },
            Mb = function(Nb) {
                if (!D) {
                    var Ob = 0,
                        Pb = wb - vb;
                    Ib.forEach(function(Qb, Rb) {
                        var Sb = Math.abs(Nb - Qb);
                        Sb <= Pb && (Pb = Sb, Ob = Rb);
                    });
                    var Qb = (0, g.default)(Ib);
                    Qb[Ob] = Nb, R && !Ib.length && void 0 === S && Qb.push(Nb), null == U || U(Kb(Qb)), Lb(Qb), null == V || V(Kb(Qb));
                }
            },
            Nb = j.useState(null),
            Ob = (0, h.default)(Nb, 2),
            Pb = Ob[0],
            Qb = Ob[1];
        j.useEffect(function() {
            if (null !== Pb) {
                var Rb = Ib.indexOf(Pb);
                Rb >= 0 && sb.current.focus(Rb);
            }
            Qb(null);
        }, [Pb]);
        var Rb = j.useMemo(function() {
                return (!$ || null !== xb) && $;
            }, [
                $,
                xb
            ]),
            Sb = (0, o.default)(tb, ub, Ib, vb, wb, Cb, Lb, function() {
                null == V || V(Kb(Jb.current));
            }, Db),
            Tb = (0, h.default)(Sb, 4),
            Ub = Tb[0],
            Vb = Tb[1],
            Wb = Tb[2],
            Xb = Tb[3],
            Yb = function(Zb, $b) {
                Xb(Zb, $b), null == U || U(Kb(Jb.current));
            },
            Zb = -1 !== Ub;
        j.useEffect(function() {
            if (!Zb) {
                var $b = Ib.lastIndexOf(Vb);
                sb.current.focus($b);
            }
        }, [Zb]);
        var $b = j.useMemo(function() {
                return (0, g.default)(Wb).sort(function(ac, bc) {
                    return ac - bc;
                });
            }, [Wb]),
            ac = j.useMemo(function() {
                return R ? [
                    $b[0],
                    $b[$b.length - 1]
                ] : [
                    vb,
                    $b[0]
                ];
            }, [
                $b,
                R,
                vb
            ]),
            bc = (0, h.default)(ac, 2),
            cc = bc[0],
            dc = bc[1];
        j.useImperativeHandle(w, function() {
            return {
                focus: function() {
                    sb.current.focus(0);
                },
                blur: function() {
                    var ec = document.activeElement;
                    tb.current.contains(ec) && (null == ec || ec.blur());
                }
            };
        }), j.useEffect(function() {
            G && sb.current.focus(0);
        }, []);
        var ec = j.useMemo(function() {
            return {
                min: vb,
                max: wb,
                direction: ub,
                disabled: D,
                keyboard: F,
                step: xb,
                included: db,
                includedStart: cc,
                includedEnd: dc,
                range: R,
                tabIndex: ob,
                ariaLabelForHandle: pb,
                ariaLabelledByForHandle: qb,
                ariaValueTextFormatterForHandle: rb
            };
        }, [
            vb,
            wb,
            ub,
            D,
            F,
            xb,
            db,
            cc,
            dc,
            R,
            ob,
            pb,
            qb,
            rb
        ]);
        return j.createElement(p.default.Provider, {
            value: ec
        }, j.createElement('div', {
            ref: tb,
            className: a(k)(z, A, (x = {}, (0, f.default)(x, ''.concat(z, '-disabled'), D), (0, f.default)(x, ''.concat(z, '-vertical'), bb), (0, f.default)(x, ''.concat(z, '-horizontal'), !bb), (0, f.default)(x, ''.concat(z, '-with-marks'), zb.length), x)),
            style: B,
            onMouseDown: function(fc) {
                fc.preventDefault();
                var gc, hc = tb.current.getBoundingClientRect(),
                    ic = hc.width,
                    jc = hc.height,
                    kc = hc.left,
                    lc = hc.top,
                    mc = hc.bottom,
                    nc = hc.right,
                    oc = fc.clientX,
                    pc = fc.clientY;
                switch (ub) {
                    case 'btt':
                        gc = (mc - pc) / jc;
                        break;
                    case 'ttb':
                        gc = (pc - lc) / jc;
                        break;
                    case 'rtl':
                        gc = (nc - oc) / ic;
                        break;
                    default:
                        gc = (oc - kc) / ic;
                }
                Mb(Cb(vb + gc * (wb - vb)));
            }
        }, j.createElement('div', {
            className: ''.concat(z, '-rail'),
            style: hb
        }), j.createElement(q.default, {
            prefixCls: z,
            style: fb,
            values: $b,
            startPoint: eb,
            onStartMove: Rb ? Yb : null
        }), j.createElement(s.default, {
            prefixCls: z,
            marks: zb,
            dots: lb,
            style: ib,
            activeStyle: jb
        }), j.createElement(n.default, {
            ref: sb,
            prefixCls: z,
            style: gb,
            values: Wb,
            draggingIndex: Ub,
            onStartMove: Yb,
            onOffsetChange: function(fc, gc) {
                if (!D) {
                    var hc = Db(Ib, fc, gc);
                    null == U || U(Kb(Ib)), Lb(hc.values), null == V || V(Kb(hc.values)), Qb(hc.value);
                }
            },
            onFocus: H,
            onBlur: I,
            handleRender: mb
        }), j.createElement(r.default, {
            prefixCls: z,
            marks: zb,
            onClick: Mb
        })));
    });
}), c.register('Dyrc5', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('WmBg2', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('USX+i'),
        g = c('r0his'),
        h = c('+Ge6c'),
        i = c('/e4tS');

    function _j(k) {
        return (0, f.default)(k) || (0, g.default)(k) || (0, h.default)(k) || (0, i.default)();
    }
}), c.register('USX+i', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('eNcAE');

    function _g(h) {
        if (Array.isArray(h))
            return (0, f.default)(h);
    }
}), c.register('eNcAE', function(d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('r0his', function(d, e) {
    function f(g) {
        if ('undefined' != typeof Symbol && null != g[Symbol.iterator] || null != g['@@iterator'])
            return Array.from(g);
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('+Ge6c', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('eNcAE');

    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('/e4tS', function(d, e) {
    function f() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('LZCqc', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('agApH'),
        g = c('dhwiU'),
        h = c('+Ge6c'),
        i = c('BoOTw');

    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('agApH', function(d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('dhwiU', function(d, e) {
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
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('BoOTw', function(d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('6EHpb', function(d, e) {
    function f(g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('e907Q', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('fN7sR'),
        g = c('kyyDX'),
        h = c('O0Kav'),
        i = c('eCY+q'),
        j = c('gjYNK'),
        k = [
            'prefixCls',
            'style',
            'onStartMove',
            'onOffsetChange',
            'values',
            'handleRender',
            'draggingIndex'
        ],
        _l = h.forwardRef(function(m, n) {
            var o = m.prefixCls,
                p = m.style,
                q = m.onStartMove,
                r = m.onOffsetChange,
                s = m.values,
                t = m.handleRender,
                u = m.draggingIndex,
                v = (0, g.default)(m, k),
                w = h.useRef({});
            return h.useImperativeHandle(n, function() {
                return {
                    focus: function(x) {
                        var y;
                        null === (y = w.current[x]) || void 0 === y || y.focus();
                    }
                };
            }), h.createElement(h.Fragment, null, s.map(function(x, y) {
                return h.createElement(i.default, (0, f.default)({
                    ref: function(z) {
                        z ? w.current[y] = z : delete w.current[y];
                    },
                    dragging: u === y,
                    prefixCls: o,
                    style: (0, j.getIndex)(p, y),
                    key: y,
                    value: x,
                    valueIndex: y,
                    onStartMove: q,
                    onOffsetChange: r,
                    render: t
                }, v));
            }));
        });
}), c.register('fN7sR', function(d, e) {
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
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('kyyDX', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('LaCLl');

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
}), c.register('LaCLl', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('eCY+q', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('fN7sR'),
        g = c('pB4oY'),
        h = c('Dyrc5'),
        i = c('kyyDX'),
        j = c('O0Kav'),
        k = c('/U36/'),
        l = c('yWsyD0'),
        m = c('L5GMd'),
        n = c('gjYNK'),
        o = [
            'prefixCls',
            'value',
            'valueIndex',
            'onStartMove',
            'style',
            'render',
            'dragging',
            'onOffsetChange'
        ],
        _p = j.forwardRef(function(q, r) {
            var s, t, u = q.prefixCls,
                v = q.value,
                w = q.valueIndex,
                x = q.onStartMove,
                y = q.style,
                z = q.render,
                A = q.dragging,
                B = q.onOffsetChange,
                C = (0, i.default)(q, o),
                D = j.useContext(m.default),
                E = D.min,
                F = D.max,
                G = D.direction,
                H = D.disabled,
                I = D.keyboard,
                J = D.range,
                K = D.tabIndex,
                L = D.ariaLabelForHandle,
                M = D.ariaLabelledByForHandle,
                N = D.ariaValueTextFormatterForHandle,
                O = ''.concat(u, '-handle'),
                P = function(Q) {
                    H || x(Q, w);
                },
                Q = (0, n.getDirectionStyle)(G, v, E, F),
                R = j.createElement('div', (0, f.default)({
                    ref: r,
                    className: a(k)(O, (s = {}, (0, h.default)(s, ''.concat(O, '-').concat(w + 1), J), (0, h.default)(s, ''.concat(O, '-dragging'), A), s)),
                    style: (0, g.default)((0, g.default)({}, Q), y),
                    onMouseDown: P,
                    onTouchStart: P,
                    onKeyDown: function(S) {
                        if (!H && I) {
                            var T = null;
                            switch (S.which || S.keyCode) {
                                case l.default.LEFT:
                                    T = 'ltr' === G || 'btt' === G ? -1 : 1;
                                    break;
                                case l.default.RIGHT:
                                    T = 'ltr' === G || 'btt' === G ? 1 : -1;
                                    break;
                                case l.default.UP:
                                    T = 'ttb' !== G ? 1 : -1;
                                    break;
                                case l.default.DOWN:
                                    T = 'ttb' !== G ? -1 : 1;
                                    break;
                                case l.default.HOME:
                                    T = 'min';
                                    break;
                                case l.default.END:
                                    T = 'max';
                                    break;
                                case l.default.PAGE_UP:
                                    T = 2;
                                    break;
                                case l.default.PAGE_DOWN:
                                    T = -2;
                            }
                            null !== T && (S.preventDefault(), B(T, w));
                        }
                    },
                    tabIndex: H ? null : (0, n.getIndex)(K, w),
                    role: 'slider',
                    'aria-valuemin': E,
                    'aria-valuemax': F,
                    'aria-valuenow': v,
                    'aria-disabled': H,
                    'aria-label': (0, n.getIndex)(L, w),
                    'aria-labelledby': (0, n.getIndex)(M, w),
                    'aria-valuetext': null === (t = (0, n.getIndex)(N, w)) || void 0 === t ? void 0 : t(v)
                }, C));
            return z && (R = z(R, {
                index: w,
                prefixCls: u,
                value: v,
                dragging: A
            })), R;
        });
}), c.register('pB4oY', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('Dyrc5');

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
}), c.register('L5GMd', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('O0Kav').createContext({
        min: 0,
        max: 0,
        direction: 'ltr',
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0
    });
}), c.register('gjYNK', function(d, e) {
    function f(g, h, i) {
        return (g - h) / (i - h);
    }

    function g(h, i, j, k) {
        var l = f(i, j, k),
            m = {};
        switch (h) {
            case 'rtl':
                m.right = ''.concat(100 * l, '%'), m.transform = 'translateX(50%)';
                break;
            case 'btt':
                m.bottom = ''.concat(100 * l, '%'), m.transform = 'translateY(50%)';
                break;
            case 'ttb':
                m.top = ''.concat(100 * l, '%'), m.transform = 'translateY(-50%)';
                break;
            default:
                m.left = ''.concat(100 * l, '%'), m.transform = 'translateX(-50%)';
        }
        return m;
    }

    function h(i, j) {
        return Array.isArray(i) ? i[j] : i;
    }
    b(d.exports, 'getOffset', function() {
        return f;
    }), b(d.exports, 'getDirectionStyle', function() {
        return g;
    }), b(d.exports, 'getIndex', function() {
        return h;
    });
}), c.register('r2kDe', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('WmBg2'),
        g = c('LZCqc'),
        h = c('O0Kav');

    function i(j) {
        var k = 'touches' in j ? j.touches[0] : j;
        return {
            pageX: k.pageX,
            pageY: k.pageY
        };
    }

    function _j(k, l, m, n, o, p, q, r, s) {
        var t = h.useState(null),
            u = (0, g.default)(t, 2),
            v = u[0],
            w = u[1],
            x = h.useState(-1),
            y = (0, g.default)(x, 2),
            z = y[0],
            A = y[1],
            B = h.useState(m),
            C = (0, g.default)(B, 2),
            D = C[0],
            E = C[1],
            F = h.useState(m),
            G = (0, g.default)(F, 2),
            H = G[0],
            I = G[1],
            J = h.useRef(null),
            K = h.useRef(null);
        h.useEffect(function() {
            -1 === z && E(m);
        }, [
            m,
            z
        ]), h.useEffect(function() {
            return function() {
                document.removeEventListener('mousemove', J.current), document.removeEventListener('mouseup', K.current), document.removeEventListener('touchmove', J.current), document.removeEventListener('touchend', K.current);
            };
        }, []);
        var L = function(M, N) {
                D.some(function(O, P) {
                    return O !== M[P];
                }) && (void 0 !== N && w(N), E(M), q(M));
            },
            M = function(N, O) {
                if (-1 === N) {
                    var P = H[0],
                        Q = H[H.length - 1],
                        R = n - P,
                        S = o - Q,
                        T = O * (o - n);
                    T = Math.max(T, R), T = Math.min(T, S);
                    var U = p(P + T);
                    T = U - P;
                    var V = H.map(function(W) {
                        return W + T;
                    });
                    L(V);
                } else {
                    var P = (o - n) * O,
                        Q = (0, f.default)(D);
                    Q[N] = H[N];
                    var R = s(Q, P, N, 'dist');
                    L(R.values, R.value);
                }
            },
            N = h.useRef(M);
        N.current = M;
        var O = h.useMemo(function() {
            var P = (0, f.default)(m).sort(function(Q, R) {
                    return Q - R;
                }),
                Q = (0, f.default)(D).sort(function(R, S) {
                    return R - S;
                });
            return P.every(function(R, S) {
                return R === Q[S];
            }) ? D : m;
        }, [
            m,
            D
        ]);
        return [
            z,
            v,
            O,
            function(P, Q) {
                P.stopPropagation();
                var R = m[Q];
                A(Q), w(R), I(m);
                var S = i(P),
                    T = S.pageX,
                    U = S.pageY,
                    V = function(W) {
                        W.preventDefault();
                        var X, Y = i(W),
                            Z = Y.pageX,
                            $ = Y.pageY,
                            ab = Z - T,
                            bb = $ - U,
                            cb = k.current.getBoundingClientRect(),
                            db = cb.width,
                            eb = cb.height;
                        switch (l) {
                            case 'btt':
                                X = -bb / eb;
                                break;
                            case 'ttb':
                                X = bb / eb;
                                break;
                            case 'rtl':
                                X = -ab / db;
                                break;
                            default:
                                X = ab / db;
                        }
                        N.current(Q, X);
                    },
                    W = function k(X) {
                        X.preventDefault(), document.removeEventListener('mouseup', k), document.removeEventListener('mousemove', V), document.removeEventListener('touchend', k), document.removeEventListener('touchmove', V), J.current = null, K.current = null, A(-1), r();
                    };
                document.addEventListener('mouseup', W), document.addEventListener('mousemove', V), document.addEventListener('touchend', W), document.addEventListener('touchmove', V), J.current = V, K.current = W;
            }
        ];
    }
}), c.register('MbpPS', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('O0Kav'),
        g = c('L5GMd'),
        h = c('ESy53'),
        i = c('gjYNK');

    function _j(k) {
        var l = k.prefixCls,
            m = k.style,
            n = k.values,
            o = k.startPoint,
            p = k.onStartMove,
            q = f.useContext(g.default),
            r = q.included,
            s = q.range,
            t = q.min,
            u = f.useMemo(function() {
                if (!s) {
                    if (0 === n.length)
                        return [];
                    var v = null != o ? o : t,
                        w = n[0];
                    return [{
                        start: Math.min(v, w),
                        end: Math.max(v, w)
                    }];
                }
                for (var v = [], w = 0; w < n.length - 1; w += 1)
                    v.push({
                        start: n[w],
                        end: n[w + 1]
                    });
                return v;
            }, [
                n,
                s,
                o,
                t
            ]);
        return r ? u.map(function(v, w) {
            var x = v.start,
                y = v.end;
            return f.createElement(h.default, {
                index: w,
                prefixCls: l,
                style: (0, i.getIndex)(m, w),
                start: x,
                end: y,
                key: w,
                onStartMove: p
            });
        }) : null;
    }
}), c.register('ESy53', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('pB4oY'),
        g = c('O0Kav'),
        h = c('/U36/'),
        i = c('L5GMd'),
        j = c('gjYNK');

    function _k(l) {
        var m = l.prefixCls,
            n = l.style,
            o = l.start,
            p = l.end,
            q = l.index,
            r = l.onStartMove,
            s = g.useContext(i.default),
            t = s.direction,
            u = s.min,
            v = s.max,
            w = s.disabled,
            x = s.range,
            y = ''.concat(m, '-track'),
            z = (0, j.getOffset)(o, u, v),
            A = (0, j.getOffset)(p, u, v),
            B = function(C) {
                !w && r && r(C, -1);
            },
            C = {};
        switch (t) {
            case 'rtl':
                C.right = ''.concat(100 * z, '%'), C.width = ''.concat(100 * A - 100 * z, '%');
                break;
            case 'btt':
                C.bottom = ''.concat(100 * z, '%'), C.height = ''.concat(100 * A - 100 * z, '%');
                break;
            case 'ttb':
                C.top = ''.concat(100 * z, '%'), C.height = ''.concat(100 * A - 100 * z, '%');
                break;
            default:
                C.left = ''.concat(100 * z, '%'), C.width = ''.concat(100 * A - 100 * z, '%');
        }
        return g.createElement('div', {
            className: a(h)(y, x && ''.concat(y, '-').concat(q + 1)),
            style: (0, f.default)((0, f.default)({}, C), n),
            onMouseDown: B,
            onTouchStart: B
        });
    }
}), c.register('y5mVe', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nBsRO');

    function _h(i) {
        var j = i.prefixCls,
            k = i.marks,
            l = i.onClick,
            m = ''.concat(j, '-mark');
        return k.length ? f.createElement('div', {
            className: m
        }, k.map(function(n) {
            var o = n.value,
                p = n.style,
                q = n.label;
            return f.createElement(g.default, {
                key: o,
                prefixCls: m,
                style: p,
                value: o,
                onClick: l
            }, q);
        })) : null;
    }
}), c.register('nBsRO', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('pB4oY'),
        g = c('Dyrc5'),
        h = c('O0Kav'),
        i = c('/U36/'),
        j = c('gjYNK'),
        k = c('L5GMd');

    function _l(m) {
        var n = m.prefixCls,
            o = m.style,
            p = m.children,
            q = m.value,
            r = m.onClick,
            s = h.useContext(k.default),
            t = s.min,
            u = s.max,
            v = s.direction,
            w = s.includedStart,
            x = s.includedEnd,
            y = s.included,
            z = ''.concat(n, '-text'),
            A = (0, j.getDirectionStyle)(v, q, t, u);
        return h.createElement('span', {
            className: a(i)(z, (0, g.default)({}, ''.concat(z, '-active'), y && w <= q && q <= x)),
            style: (0, f.default)((0, f.default)({}, A), o),
            onMouseDown: function(B) {
                B.stopPropagation();
            },
            onClick: function() {
                r(q);
            }
        }, p);
    }
}), c.register('y503W', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('L5GMd'),
        h = c('AeGst');

    function _i(j) {
        var k = j.prefixCls,
            l = j.marks,
            m = j.dots,
            n = j.style,
            o = j.activeStyle,
            p = f.useContext(g.default),
            q = p.min,
            r = p.max,
            s = p.step,
            t = f.useMemo(function() {
                var u = new Set();
                if (l.forEach(function(v) {
                        u.add(v.value);
                    }), m && null !== s)
                    for (var v = q; v <= r;)
                        u.add(v), v += s;
                return Array.from(u);
            }, [
                q,
                r,
                s,
                m,
                l
            ]);
        return f.createElement('div', {
            className: ''.concat(k, '-step')
        }, t.map(function(u) {
            return f.createElement(h.default, {
                prefixCls: k,
                key: u,
                value: u,
                style: n,
                activeStyle: o
            });
        }));
    }
}), c.register('AeGst', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('Dyrc5'),
        g = c('pB4oY'),
        h = c('O0Kav'),
        i = c('/U36/'),
        j = c('gjYNK'),
        k = c('L5GMd');

    function _l(m) {
        var n = m.prefixCls,
            o = m.value,
            p = m.style,
            q = m.activeStyle,
            r = h.useContext(k.default),
            s = r.min,
            t = r.max,
            u = r.direction,
            v = r.included,
            w = r.includedStart,
            x = r.includedEnd,
            y = ''.concat(n, '-dot'),
            z = v && w <= o && o <= x,
            A = (0, g.default)((0, g.default)({}, (0, j.getDirectionStyle)(u, o, s, t)), 'function' == typeof p ? p(o) : p);
        return z && (A = (0, g.default)((0, g.default)({}, A), 'function' == typeof q ? q(o) : q)), h.createElement('span', {
            className: a(i)(y, (0, f.default)({}, ''.concat(y, '-active'), z)),
            style: A
        });
    }
}), c.register('lDKtu', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('WmBg2'),
        g = c('O0Kav');

    function _h(i, j, k, l, m, n) {
        var o = g.useCallback(function(p) {
                var q = isFinite(p) ? p : i;
                return q = Math.min(j, p), q = Math.max(i, q);
            }, [
                i,
                j
            ]),
            p = g.useCallback(function(q) {
                if (null !== k) {
                    var r = i + Math.round((o(q) - i) / k) * k,
                        s = function(t) {
                            return (String(t).split('.')[1] || '').length;
                        },
                        t = Math.max(s(k), s(j), s(i)),
                        u = Number(r.toFixed(t));
                    return i <= u && u <= j ? u : null;
                }
                return null;
            }, [
                k,
                i,
                j,
                o
            ]),
            q = g.useCallback(function(r) {
                var s = o(r),
                    t = l.map(function(u) {
                        return u.value;
                    });
                null !== k && t.push(p(r)), t.push(i, j);
                var u = t[0],
                    v = j - i;
                return t.forEach(function(w) {
                    var x = Math.abs(s - w);
                    x <= v && (u = w, v = x);
                }), u;
            }, [
                i,
                j,
                l,
                k,
                o,
                p
            ]),
            r = function g(s, t, u) {
                var v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit';
                if ('number' == typeof t) {
                    var w, x = s[u],
                        y = x + t,
                        z = [];
                    l.forEach(function(A) {
                        z.push(A.value);
                    }), z.push(i, j), z.push(p(x));
                    var A = t > 0 ? 1 : -1;
                    'unit' === v ? z.push(p(x + A * k)) : z.push(p(y)), z = z.filter(function(B) {
                        return null !== B;
                    }).filter(function(B) {
                        return t < 0 ? B <= x : B >= x;
                    }), 'unit' === v && (z = z.filter(function(B) {
                        return B !== x;
                    }));
                    var B = 'unit' === v ? x : y;
                    w = z[0];
                    var C = Math.abs(w - B);
                    if (z.forEach(function(D) {
                            var E = Math.abs(D - B);
                            E < C && (w = D, C = E);
                        }), void 0 === w)
                        return t < 0 ? i : j;
                    if ('dist' === v)
                        return w;
                    if (Math.abs(t) > 1) {
                        var D = (0, f.default)(s);
                        return D[u] = w, g(D, t - A, u, v);
                    }
                    return w;
                }
                return 'min' === t ? i : 'max' === t ? j : void 0;
            },
            s = function(t, u, v) {
                var w = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    x = t[v],
                    y = r(t, u, v, w);
                return {
                    value: y,
                    changed: y !== x
                };
            },
            t = function(u) {
                return null === n && 0 === u || 'number' == typeof n && u < n;
            };
        return [
            q,
            function(u, v, w) {
                var x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    y = u.map(q),
                    z = y[w],
                    A = r(y, v, w, x);
                if (y[w] = A, !1 === m) {
                    var B = n || 0;
                    w > 0 && y[w - 1] !== z && (y[w] = Math.max(y[w], y[w - 1] + B)), w < y.length - 1 && y[w + 1] !== z && (y[w] = Math.min(y[w], y[w + 1] - B));
                } else if ('number' == typeof n || null === n) {
                    for (var B = w + 1; B < y.length; B += 1)
                        for (var C = !0; t(y[B] - y[B - 1]) && C;) {
                            var D = s(y, 1, B);
                            y[B] = D.value, C = D.changed;
                        }
                    for (var D = w; D > 0; D -= 1)
                        for (var E = !0; t(y[D] - y[D - 1]) && E;) {
                            var F = s(y, -1, D - 1);
                            y[D - 1] = F.value, E = F.changed;
                        }
                    for (var F = y.length - 1; F > 0; F -= 1)
                        for (var G = !0; t(y[F] - y[F - 1]) && G;) {
                            var H = s(y, -1, F - 1);
                            y[F - 1] = H.value, G = H.changed;
                        }
                    for (var H = 0; H < y.length - 1; H += 1)
                        for (var I = !0; t(y[H + 1] - y[H]) && I;) {
                            var J = s(y, 1, H + 1);
                            y[H + 1] = J.value, I = J.changed;
                        }
                }
                return {
                    value: y[w],
                    values: y
                };
            }
        ];
    }
}), c.register('i+37d', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('dH7gy'),
        g = c('bvyc2'),
        h = c('O0Kav'),
        i = (h = c('O0Kav'), c('Dn89R'));
    var _j = h.forwardRef((d, b) => {
        const {
            open: k
        } = d, l = (0, h.useRef)(null), m = (0, h.useRef)(null);

        function n() {
            f.default.cancel(m.current), m.current = null;
        }
        return h.useEffect(() => (k ? m.current = (0, f.default)(() => {
            var o;
            null === (o = l.current) || void 0 === o || o.forcePopupAlign(), m.current = null;
        }) : n(), n), [
            k,
            d.title
        ]), h.createElement(i.default, Object.assign({
            ref: (0, g.composeRef)(l, b)
        }, d));
    });
}), c.register('YCLih', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('ntiT5'),
        g = c('/zzpx'),
        h = c('GhPPX'),
        i = c('qJkLY');
    const j = d => {
            const {
                componentCls: k,
                controlSize: l,
                dotSize: m,
                marginFull: n,
                marginPart: o,
                colorFillContentHover: p
            } = d;
            return {
                [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(d)), {
                    position: 'relative',
                    height: l,
                    margin: `${ o }px ${ n }px`,
                    padding: 0,
                    cursor: 'pointer',
                    touchAction: 'none',
                    '&-vertical': {
                        margin: `${ n }px ${ o }px`
                    },
                    [`${ k }-rail`]: {
                        position: 'absolute',
                        backgroundColor: d.colorFillTertiary,
                        borderRadius: d.borderRadiusXS,
                        transition: `background-color ${ d.motionDurationMid }`
                    },
                    [`${ k }-track`]: {
                        position: 'absolute',
                        backgroundColor: d.colorPrimaryBorder,
                        borderRadius: d.borderRadiusXS,
                        transition: `background-color ${ d.motionDurationMid }`
                    },
                    '&:hover': {
                        [`${ k }-rail`]: {
                            backgroundColor: d.colorFillSecondary
                        },
                        [`${ k }-track`]: {
                            backgroundColor: d.colorPrimaryBorderHover
                        },
                        [`${ k }-dot`]: {
                            borderColor: p
                        },
                        [`${ k }-handle::after`]: {
                            boxShadow: `0 0 0 ${ d.handleLineWidth }px ${ d.colorPrimaryBorderHover }`
                        },
                        [`${ k }-dot-active`]: {
                            borderColor: d.colorPrimary
                        }
                    },
                    [`${ k }-handle`]: {
                        position: 'absolute',
                        width: d.handleSize,
                        height: d.handleSize,
                        outline: 'none',
                        [`${ k }-dragging`]: {
                            zIndex: 1
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            insetInlineStart: -d.handleLineWidth,
                            insetBlockStart: -d.handleLineWidth,
                            width: d.handleSize + 2 * d.handleLineWidth,
                            height: d.handleSize + 2 * d.handleLineWidth,
                            backgroundColor: 'transparent'
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            insetBlockStart: 0,
                            insetInlineStart: 0,
                            width: d.handleSize,
                            height: d.handleSize,
                            backgroundColor: d.colorBgElevated,
                            boxShadow: `0 0 0 ${ d.handleLineWidth }px ${ d.colorPrimaryBorder }`,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: `\n            inset-inline-start ${ d.motionDurationMid },\n            inset-block-start ${ d.motionDurationMid },\n            width ${ d.motionDurationMid },\n            height ${ d.motionDurationMid },\n            box-shadow ${ d.motionDurationMid }\n          `
                        },
                        '&:hover, &:active, &:focus': {
                            '&::before': {
                                insetInlineStart: -((d.handleSizeHover - d.handleSize) / 2 + d.handleLineWidthHover),
                                insetBlockStart: -((d.handleSizeHover - d.handleSize) / 2 + d.handleLineWidthHover),
                                width: d.handleSizeHover + 2 * d.handleLineWidthHover,
                                height: d.handleSizeHover + 2 * d.handleLineWidthHover
                            },
                            '&::after': {
                                boxShadow: `0 0 0 ${ d.handleLineWidthHover }px ${ d.colorPrimary }`,
                                width: d.handleSizeHover,
                                height: d.handleSizeHover,
                                insetInlineStart: (d.handleSize - d.handleSizeHover) / 2,
                                insetBlockStart: (d.handleSize - d.handleSizeHover) / 2
                            }
                        }
                    },
                    [`${ k }-mark`]: {
                        position: 'absolute',
                        fontSize: d.fontSize
                    },
                    [`${ k }-mark-text`]: {
                        position: 'absolute',
                        display: 'inline-block',
                        color: d.colorTextDescription,
                        textAlign: 'center',
                        wordBreak: 'keep-all',
                        cursor: 'pointer',
                        userSelect: 'none',
                        '&-active': {
                            color: d.colorText
                        }
                    },
                    [`${ k }-step`]: {
                        position: 'absolute',
                        background: 'transparent'
                    },
                    [`${ k }-dot`]: {
                        position: 'absolute',
                        width: m,
                        height: m,
                        backgroundColor: d.colorBgElevated,
                        border: `${ d.handleLineWidth }px solid ${ d.colorBorderSecondary }`,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: `border-color ${ d.motionDurationSlow }`,
                        '&-active': {
                            borderColor: d.colorPrimaryBorder
                        }
                    },
                    [`&${ k }-disabled`]: {
                        cursor: 'not-allowed',
                        [`${ k }-rail`]: {
                            backgroundColor: `${ d.colorFillSecondary } !important`
                        },
                        [`${ k }-track`]: {
                            backgroundColor: `${ d.colorTextDisabled } !important`
                        },
                        [`\n          ${ k }-dot\n        `]: {
                            backgroundColor: d.colorBgElevated,
                            borderColor: d.colorTextDisabled,
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        },
                        [`${ k }-handle::after`]: {
                            backgroundColor: d.colorBgElevated,
                            cursor: 'not-allowed',
                            width: d.handleSize,
                            height: d.handleSize,
                            boxShadow: `0 0 0 ${ d.handleLineWidth }px ${ new (0, f.TinyColor)(d.colorTextDisabled).onBackground(d.colorBgContainer).toHexShortString() }`,
                            insetInlineStart: 0,
                            insetBlockStart: 0
                        },
                        [`\n          ${ k }-mark-text,\n          ${ k }-dot\n        `]: {
                            cursor: 'not-allowed !important'
                        }
                    }
                })
            };
        },
        k = (d, b) => {
            const {
                componentCls: l,
                railSize: m,
                handleSize: n,
                dotSize: o
            } = d, p = b ? 'width' : 'height', q = b ? 'height' : 'width', r = b ? 'insetBlockStart' : 'insetInlineStart', s = b ? 'top' : 'insetInlineStart';
            return {
                [b ? 'paddingBlock' : 'paddingInline']: m,
                [q]: 3 * m,
                [`${ l }-rail`]: {
                    [p]: '100%',
                    [q]: m
                },
                [`${ l }-track`]: {
                    [q]: m
                },
                [`${ l }-handle`]: {
                    [r]: (3 * m - n) / 2
                },
                [`${ l }-mark`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [s]: n,
                    [p]: '100%'
                },
                [`${ l }-step`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [s]: m,
                    [p]: '100%',
                    [q]: m
                },
                [`${ l }-dot`]: {
                    position: 'absolute',
                    [r]: (m - o) / 2
                }
            };
        },
        l = d => {
            const {
                componentCls: m,
                marginPartWithMark: n
            } = d;
            return {
                [`${ m }-horizontal`]: Object.assign(Object.assign({}, k(d, !0)), {
                    [`&${ m }-with-marks`]: {
                        marginBottom: n
                    }
                })
            };
        },
        m = d => {
            const {
                componentCls: n
            } = d;
            return {
                [`${ n }-vertical`]: Object.assign(Object.assign({}, k(d, !1)), {
                    height: '100%'
                })
            };
        };
    var _n = (0, h.default)('Slider', d => {
        const o = (0, i.merge)(d, {
            marginPart: (d.controlHeight - d.controlSize) / 2,
            marginFull: d.controlSize / 2,
            marginPartWithMark: d.controlHeightLG - d.controlSize
        });
        return [
            j(o),
            l(o),
            m(o)
        ];
    }, d => {
        const o = d.controlHeightLG / 4;
        return {
            controlSize: o,
            railSize: 4,
            handleSize: o,
            handleSizeHover: d.controlHeightSM / 2,
            dotSize: 8,
            handleLineWidth: d.lineWidth + 1,
            handleLineWidthHover: d.lineWidth + 3
        };
    });
});