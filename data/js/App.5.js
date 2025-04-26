function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, l) {
    Object.defineProperty(a, b, {
        get: c,
        set: l,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('5xmPL', function(l, m) {
    b(l.exports, 'default', function() {
        return l;
    }, function(a) {
        return l = a;
    });
    var d = c('VAIs1'),
        e = c('URkGW'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('MPMAp'),
        i = c('r/uQE'),
        j = function(a, b) {
            var k = {};
            for (var l in a)
                Object.prototype.hasOwnProperty.call(a, l) && b.indexOf(l) < 0 && (k[l] = a[l]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(a); m < l.length; m++)
                    b.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(a, l[m]) && (k[l[m]] = a[l[m]]);
            }
            return k;
        };
    const k = a => 'number' == typeof a ? a.toString() : '';
    var l = f.forwardRef((b, c) => {
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
        } = v, w = j(v, [
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
            getPrefixCls: x,
            direction: y,
            getPopupContainer: z
        } = f.useContext(g.ConfigContext), [A, B] = f.useState({}), C = (a, v) => {
            B(c => Object.assign(Object.assign({}, c), {
                [a]: v
            }));
        }, D = (a, v) => a || (v ? 'rtl' === y ? 'left' : 'right' : 'top'), E = x('slider', m), [F, G] = (0, i.default)(E), H = a(d)(o, p, {
            [`${ E }-rtl`]: 'rtl' === y
        }, G);
        'rtl' !== y || w.vertical || (w.reverse = !w.reverse);
        const [I, J] = f.useMemo(() => n ? 'object' == typeof n ? [
            !0,
            n.draggableTrack
        ] : [
            !0,
            !1
        ] : [!1], [n]);
        return F(f.createElement(e.default, Object.assign({}, w, {
            step: w.step,
            range: I,
            draggableTrack: J,
            className: H,
            ref: c,
            prefixCls: E,
            handleRender: (a, c) => {
                var K;
                const {
                    index: L,
                    dragging: M
                } = N, {
                    tooltip: O = {},
                    vertical: P
                } = Q, R = Object.assign({}, O), {
                    open: S,
                    placement: T,
                    getPopupContainer: U,
                    prefixCls: V,
                    formatter: W
                } = X;
                let Y;
                Y = W || null === W ? W : r || null === r ? r : k;
                const Z = !!Y && (A[L] || M),
                    $ = null !== (K = null != S ? S : s) && void 0 !== K ? K : void 0 === S && Z,
                    _ = Object.assign(Object.assign({}, a.props), {
                        onMouseEnter: () => C(L, !0),
                        onMouseLeave: () => C(L, !1)
                    }),
                    ab = x('tooltip', null != V ? V : q);
                return f.createElement(h.default, {
                    prefixCls: ab,
                    title: Y ? Y(N.value) : '',
                    open: $,
                    placement: D(null != T ? T : u, P),
                    key: L,
                    overlayClassName: `${ E }-tooltip`,
                    getPopupContainer: U || t || z
                }, f.cloneElement(a, _));
            }
        })));
    });
}), c.register('URkGW', function(a, t) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = c('Ib3Pj').default;
}), c.register('Ib3Pj', function(t, u) {
    b(t.exports, 'default', function() {
        return s;
    });
    var d = c('boVQ9'),
        e = c('pn5m1'),
        f = c('0ndCR'),
        g = c('LdB9J'),
        h = c('uPP4W'),
        i = c('VAIs1'),
        j = c('vSKUO'),
        k = c('xgR9K'),
        l = c('phD/e'),
        m = c('cJuww'),
        n = c('RmxWO'),
        o = c('Gl8J6'),
        p = c('593eT'),
        q = c('YUuqC'),
        r = c('SwiYA');
    c('NuYYk');
    var s = h.forwardRef(function(b, c) {
        var t, u = b.prefixCls,
            v = void 0 === u ? 'rc-slider' : u,
            w = b.className,
            x = b.style,
            y = b.disabled,
            z = void 0 !== y && y,
            A = b.keyboard,
            B = void 0 === A || A,
            C = b.autoFocus,
            D = b.onFocus,
            E = b.onBlur,
            F = b.min,
            G = void 0 === F ? 0 : F,
            H = b.max,
            I = void 0 === H ? 100 : H,
            J = b.step,
            K = void 0 === J ? 1 : J,
            L = b.value,
            M = b.defaultValue,
            N = b.range,
            O = b.count,
            P = b.onChange,
            Q = b.onBeforeChange,
            R = b.onAfterChange,
            S = b.allowCross,
            T = void 0 === S || S,
            U = b.pushable,
            V = void 0 !== U && U,
            W = b.draggableTrack,
            X = b.reverse,
            Y = b.vertical,
            Z = b.included,
            $ = void 0 === Z || Z,
            _ = b.startPoint,
            ab = b.trackStyle,
            bb = b.handleStyle,
            cb = b.railStyle,
            db = b.dotStyle,
            eb = b.activeDotStyle,
            fb = b.marks,
            gb = b.dots,
            hb = b.handleRender,
            ib = b.tabIndex,
            jb = void 0 === ib ? 0 : ib,
            kb = b.ariaLabelForHandle,
            lb = b.ariaLabelledByForHandle,
            mb = b.ariaValueTextFormatterForHandle,
            nb = h.useRef(),
            ob = h.useRef(),
            pb = h.useMemo(function() {
                return Y ? X ? 'ttb' : 'btt' : X ? 'rtl' : 'ltr';
            }, [
                X,
                Y
            ]),
            qb = h.useMemo(function() {
                return isFinite(G) ? G : 0;
            }, [G]),
            rb = h.useMemo(function() {
                return isFinite(I) ? I : 100;
            }, [I]),
            sb = h.useMemo(function() {
                return null !== K && K <= 0 ? 1 : K;
            }, [K]),
            tb = h.useMemo(function() {
                return !0 === V ? sb : V >= 0 && V;
            }, [
                V,
                sb
            ]),
            ub = h.useMemo(function() {
                return Object.keys(fb || {}).map(function(a) {
                    var vb = fb[a],
                        wb = {
                            value: Number(a)
                        };
                    return vb && 'object' === (0, g.default)(vb) && !h.isValidElement(vb) && ('label' in vb || 'style' in vb) ? (wb.style = vb.style, wb.label = vb.label) : wb.label = vb, wb;
                }).filter(function(a) {
                    var vb = a.label;
                    return vb || 'number' == typeof vb;
                }).sort(function(a, b) {
                    return a.value - b.value;
                });
            }, [fb]),
            vb = (0, r.default)(qb, rb, sb, ub, T, tb),
            wb = (0, f.default)(vb, 2),
            xb = wb[0],
            yb = wb[1],
            zb = (0, k.default)(M, {
                value: L
            }),
            Ab = (0, f.default)(zb, 2),
            Bb = Ab[0],
            Cb = Ab[1],
            Db = h.useMemo(function() {
                var Eb = null == Bb ? [] : Array.isArray(Bb) ? Bb : [Bb],
                    Fb = (0, f.default)(Eb, 1)[0],
                    Gb = null === Bb ? [] : [void 0 === Fb ? qb : Fb];
                if (N) {
                    if (Gb = (0, e.default)(Eb), O || void 0 === Bb) {
                        var Hb = O >= 0 ? O + 1 : 2;
                        for (Gb = Gb.slice(0, Hb); Gb.length < Hb;) {
                            var Ib;
                            Gb.push(null !== (Ib = Gb[Gb.length - 1]) && void 0 !== Ib ? Ib : qb);
                        }
                    }
                    Gb.sort(function(Eb, Fb) {
                        return Eb - Fb;
                    });
                }
                return Gb.forEach(function(Eb, Fb) {
                    Gb[Fb] = xb(Eb);
                }), Gb;
            }, [
                Bb,
                N,
                qb,
                O,
                xb
            ]),
            Eb = h.useRef(Db);
        Eb.current = Db;
        var Fb = function(a) {
                return N ? a : a[0];
            },
            Gb = function(a) {
                var Hb = (0, e.default)(a).sort(function(a, Hb) {
                    return a - Hb;
                });
                P && !(0, j.default)(Hb, Eb.current, !0) && P(Fb(Hb)), Cb(Hb);
            },
            Hb = function(a) {
                if (!z) {
                    var Ib = 0,
                        Jb = rb - qb;
                    Db.forEach(function(t, u) {
                        var Kb = Math.abs(a - t);
                        Kb <= Jb && (Jb = Kb, Ib = u);
                    });
                    var Kb = (0, e.default)(Db);
                    Kb[Ib] = a, N && !Db.length && void 0 === O && Kb.push(a), null == Q || Q(Fb(Kb)), Gb(Kb), null == R || R(Fb(Kb));
                }
            },
            Ib = h.useState(null),
            Jb = (0, f.default)(Ib, 2),
            Kb = Jb[0],
            Lb = Jb[1];
        h.useEffect(function() {
            if (null !== Kb) {
                var Mb = Db.indexOf(Kb);
                Mb >= 0 && nb.current.focus(Mb);
            }
            Lb(null);
        }, [Kb]);
        var Mb = h.useMemo(function() {
                return (!W || null !== sb) && W;
            }, [
                W,
                sb
            ]),
            Nb = (0, m.default)(ob, pb, Db, qb, rb, xb, Gb, function() {
                null == R || R(Fb(Eb.current));
            }, yb),
            Ob = (0, f.default)(Nb, 4),
            Pb = Ob[0],
            Qb = Ob[1],
            Rb = Ob[2],
            Sb = Ob[3],
            Tb = function(a, b) {
                Sb(a, b), null == Q || Q(Fb(Eb.current));
            },
            Ub = -1 !== Pb;
        h.useEffect(function() {
            if (!Ub) {
                var Vb = Db.lastIndexOf(Qb);
                nb.current.focus(Vb);
            }
        }, [Ub]);
        var Vb = h.useMemo(function() {
                return (0, e.default)(Rb).sort(function(a, b) {
                    return a - b;
                });
            }, [Rb]),
            Wb = h.useMemo(function() {
                return N ? [
                    Vb[0],
                    Vb[Vb.length - 1]
                ] : [
                    qb,
                    Vb[0]
                ];
            }, [
                Vb,
                N,
                qb
            ]),
            Xb = (0, f.default)(Wb, 2),
            Yb = Xb[0],
            Zb = Xb[1];
        h.useImperativeHandle(c, function() {
            return {
                focus: function() {
                    nb.current.focus(0);
                },
                blur: function() {
                    var $b = document.activeElement;
                    ob.current.contains($b) && (null == $b || $b.blur());
                }
            };
        }), h.useEffect(function() {
            C && nb.current.focus(0);
        }, []);
        var $b = h.useMemo(function() {
            return {
                min: qb,
                max: rb,
                direction: pb,
                disabled: z,
                keyboard: B,
                step: sb,
                included: $,
                includedStart: Yb,
                includedEnd: Zb,
                range: N,
                tabIndex: jb,
                ariaLabelForHandle: kb,
                ariaLabelledByForHandle: lb,
                ariaValueTextFormatterForHandle: mb
            };
        }, [
            qb,
            rb,
            pb,
            z,
            B,
            sb,
            $,
            Yb,
            Zb,
            N,
            jb,
            kb,
            lb,
            mb
        ]);
        return h.createElement(n.default.Provider, {
            value: $b
        }, h.createElement('div', {
            ref: ob,
            className: a(i)(v, w, (t = {}, (0, d.default)(t, ''.concat(v, '-disabled'), z), (0, d.default)(t, ''.concat(v, '-vertical'), Y), (0, d.default)(t, ''.concat(v, '-horizontal'), !Y), (0, d.default)(t, ''.concat(v, '-with-marks'), ub.length), t)),
            style: x,
            onMouseDown: function(a) {
                a.preventDefault();
                var _b, ac = ob.current.getBoundingClientRect(),
                    bc = ac.width,
                    cc = ac.height,
                    dc = ac.left,
                    ec = ac.top,
                    fc = ac.bottom,
                    gc = ac.right,
                    hc = a.clientX,
                    ic = a.clientY;
                switch (pb) {
                    case 'btt':
                        _b = (fc - ic) / cc;
                        break;
                    case 'ttb':
                        _b = (ic - ec) / cc;
                        break;
                    case 'rtl':
                        _b = (gc - hc) / bc;
                        break;
                    default:
                        _b = (hc - dc) / bc;
                }
                Hb(xb(qb + _b * (rb - qb)));
            }
        }, h.createElement('div', {
            className: ''.concat(v, '-rail'),
            style: cb
        }), h.createElement(o.default, {
            prefixCls: v,
            style: ab,
            values: Vb,
            startPoint: _,
            onStartMove: Mb ? Tb : null
        }), h.createElement(q.default, {
            prefixCls: v,
            marks: ub,
            dots: gb,
            style: db,
            activeStyle: eb
        }), h.createElement(l.default, {
            ref: nb,
            prefixCls: v,
            style: bb,
            values: Rb,
            draggingIndex: Pb,
            onStartMove: Tb,
            onOffsetChange: function(a, b) {
                if (!z) {
                    var _b = yb(Db, a, b);
                    null == Q || Q(Fb(Db)), Gb(_b.values), null == R || R(Fb(_b.values)), Lb(_b.value);
                }
            },
            onFocus: D,
            onBlur: E,
            handleRender: hb
        }), h.createElement(p.default, {
            prefixCls: v,
            marks: ub,
            onClick: Hb
        })));
    });
}), c.register('boVQ9', function(a, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('pn5m1', function(a, d) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('84fNG'),
        e = c('kMg5k'),
        f = c('Rjd5s'),
        g = c('vYrHT');

    function h(a) {
        return (0, d.default)(a) || (0, e.default)(a) || (0, f.default)(a) || (0, g.default)();
    }
}), c.register('84fNG', function(a, d) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('VoKYN');

    function e(a) {
        if (Array.isArray(a))
            return (0, d.default)(a);
    }
}), c.register('VoKYN', function(a, c) {
    function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var e = 0, f = new Array(b); e < b; e++)
            f[e] = a[e];
        return f;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('kMg5k', function(a, c) {
    function d(a) {
        if ('undefined' != typeof Symbol && null != a[Symbol.iterator] || null != a['@@iterator'])
            return Array.from(a);
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('Rjd5s', function(a, d) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('VoKYN');

    function e(a, b) {
        if (a) {
            if ('string' == typeof a)
                return (0, d.default)(a, b);
            var f = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === f && a.constructor && (f = a.constructor.name), 'Map' === f || 'Set' === f ? Array.from(a) : 'Arguments' === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? (0, d.default)(a, b) : void 0;
        }
    }
}), c.register('vYrHT', function(a, c) {
    function d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('0ndCR', function(a, d) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('CfzAX'),
        e = c('h2+0b'),
        f = c('Rjd5s'),
        g = c('UPaUL');

    function h(a, b) {
        return (0, d.default)(a) || (0, e.default)(a, b) || (0, f.default)(a, b) || (0, g.default)();
    }
}), c.register('CfzAX', function(a, c) {
    function d(a) {
        if (Array.isArray(a))
            return a;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('h2+0b', function(a, c) {
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
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('UPaUL', function(a, c) {
    function d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('LdB9J', function(a, c) {
    function d(a) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, d(a);
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('phD/e', function(a, l) {
    b(a.exports, 'default', function() {
        return j;
    });
    var d = c('QcfCy'),
        e = c('6AUIu'),
        f = c('uPP4W'),
        g = c('CyDeB'),
        h = c('2JGe0'),
        i = [
            'prefixCls',
            'style',
            'onStartMove',
            'onOffsetChange',
            'values',
            'handleRender',
            'draggingIndex'
        ],
        j = f.forwardRef(function(a, b) {
            var k = a.prefixCls,
                l = a.style,
                m = a.onStartMove,
                n = a.onOffsetChange,
                o = a.values,
                p = a.handleRender,
                q = a.draggingIndex,
                r = (0, e.default)(a, i),
                s = f.useRef({});
            return f.useImperativeHandle(b, function() {
                return {
                    focus: function(a) {
                        var t;
                        null === (t = s.current[a]) || void 0 === t || t.focus();
                    }
                };
            }), f.createElement(f.Fragment, null, o.map(function(a, b) {
                return f.createElement(g.default, (0, d.default)({
                    ref: function(a) {
                        a ? s.current[b] = a : delete s.current[b];
                    },
                    dragging: q === b,
                    prefixCls: k,
                    style: (0, h.getIndex)(l, b),
                    key: b,
                    value: a,
                    valueIndex: b,
                    onStartMove: m,
                    onOffsetChange: n,
                    render: p
                }, r));
            }));
        });
}), c.register('QcfCy', function(a, c) {
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
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('6AUIu', function(a, g) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('iM+0b');

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
}), c.register('iM+0b', function(a, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('CyDeB', function(o, p) {
    b(o.exports, 'default', function() {
        return n;
    });
    var d = c('QcfCy'),
        e = c('JGI43'),
        f = c('boVQ9'),
        g = c('6AUIu'),
        h = c('uPP4W'),
        i = c('VAIs1'),
        j = c('8dJ620'),
        k = c('RmxWO'),
        l = c('2JGe0'),
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
        n = h.forwardRef(function(b, c) {
            var o, p, q = b.prefixCls,
                r = b.value,
                s = b.valueIndex,
                t = b.onStartMove,
                u = b.style,
                v = b.render,
                w = b.dragging,
                x = b.onOffsetChange,
                y = (0, g.default)(b, m),
                z = h.useContext(k.default),
                A = z.min,
                B = z.max,
                C = z.direction,
                D = z.disabled,
                E = z.keyboard,
                F = z.range,
                G = z.tabIndex,
                H = z.ariaLabelForHandle,
                I = z.ariaLabelledByForHandle,
                J = z.ariaValueTextFormatterForHandle,
                K = ''.concat(q, '-handle'),
                L = function(a) {
                    D || t(a, s);
                },
                M = (0, l.getDirectionStyle)(C, r, A, B),
                N = h.createElement('div', (0, d.default)({
                    ref: c,
                    className: a(i)(K, (o = {}, (0, f.default)(o, ''.concat(K, '-').concat(s + 1), F), (0, f.default)(o, ''.concat(K, '-dragging'), w), o)),
                    style: (0, e.default)((0, e.default)({}, M), u),
                    onMouseDown: L,
                    onTouchStart: L,
                    onKeyDown: function(a) {
                        if (!D && E) {
                            var O = null;
                            switch (a.which || a.keyCode) {
                                case j.default.LEFT:
                                    O = 'ltr' === C || 'btt' === C ? -1 : 1;
                                    break;
                                case j.default.RIGHT:
                                    O = 'ltr' === C || 'btt' === C ? 1 : -1;
                                    break;
                                case j.default.UP:
                                    O = 'ttb' !== C ? 1 : -1;
                                    break;
                                case j.default.DOWN:
                                    O = 'ttb' !== C ? -1 : 1;
                                    break;
                                case j.default.HOME:
                                    O = 'min';
                                    break;
                                case j.default.END:
                                    O = 'max';
                                    break;
                                case j.default.PAGE_UP:
                                    O = 2;
                                    break;
                                case j.default.PAGE_DOWN:
                                    O = -2;
                            }
                            null !== O && (a.preventDefault(), x(O, s));
                        }
                    },
                    tabIndex: D ? null : (0, l.getIndex)(G, s),
                    role: 'slider',
                    'aria-valuemin': A,
                    'aria-valuemax': B,
                    'aria-valuenow': r,
                    'aria-disabled': D,
                    'aria-label': (0, l.getIndex)(H, s),
                    'aria-labelledby': (0, l.getIndex)(I, s),
                    'aria-valuetext': null === (p = (0, l.getIndex)(J, s)) || void 0 === p ? void 0 : p(r)
                }, y));
            return v && (N = v(N, {
                index: s,
                prefixCls: q,
                value: r,
                dragging: w
            })), N;
        });
}), c.register('JGI43', function(a, g) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('boVQ9');

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
}), c.register('RmxWO', function(a, d) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = c('uPP4W').createContext({
        min: 0,
        max: 0,
        direction: 'ltr',
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0
    });
}), c.register('2JGe0', function(a, c) {
    function d(a, b, c) {
        return (a - b) / (c - b);
    }

    function e(a, b, c, e) {
        var f = d(b, c, e),
            g = {};
        switch (a) {
            case 'rtl':
                g.right = ''.concat(100 * f, '%'), g.transform = 'translateX(50%)';
                break;
            case 'btt':
                g.bottom = ''.concat(100 * f, '%'), g.transform = 'translateY(50%)';
                break;
            case 'ttb':
                g.top = ''.concat(100 * f, '%'), g.transform = 'translateY(-50%)';
                break;
            default:
                g.left = ''.concat(100 * f, '%'), g.transform = 'translateX(-50%)';
        }
        return g;
    }

    function f(a, b) {
        return Array.isArray(a) ? a[b] : a;
    }
    b(a.exports, 'getOffset', function() {
        return d;
    }), b(a.exports, 'getDirectionStyle', function() {
        return e;
    }), b(a.exports, 'getIndex', function() {
        return f;
    });
}), c.register('cJuww', function(a, J) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('pn5m1'),
        e = c('0ndCR'),
        f = c('uPP4W');

    function g(a) {
        var h = 'touches' in a ? a.touches[0] : a;
        return {
            pageX: h.pageX,
            pageY: h.pageY
        };
    }

    function h(a, b, c, J, h, H, G, H, O) {
        var i = f.useState(null),
            j = (0, e.default)(i, 2),
            k = j[0],
            l = j[1],
            m = f.useState(-1),
            n = (0, e.default)(m, 2),
            o = n[0],
            p = n[1],
            q = f.useState(c),
            r = (0, e.default)(q, 2),
            s = r[0],
            t = r[1],
            u = f.useState(c),
            v = (0, e.default)(u, 2),
            w = v[0],
            x = v[1],
            y = f.useRef(null),
            z = f.useRef(null);
        f.useEffect(function() {
            -1 === o && t(c);
        }, [
            c,
            o
        ]), f.useEffect(function() {
            return function() {
                document.removeEventListener('mousemove', y.current), document.removeEventListener('mouseup', z.current), document.removeEventListener('touchmove', y.current), document.removeEventListener('touchend', z.current);
            };
        }, []);
        var A = function(a, b) {
                s.some(function(b, c) {
                    return b !== a[c];
                }) && (void 0 !== b && l(b), t(a), G(a));
            },
            B = function(a, b) {
                if (-1 === a) {
                    var C = w[0],
                        D = w[w.length - 1],
                        E = J - C,
                        F = h - D,
                        G = b * (h - J);
                    G = Math.max(G, E), G = Math.min(G, F);
                    var H = H(C + G);
                    G = H - C;
                    var I = w.map(function(a) {
                        return a + G;
                    });
                    A(I);
                } else {
                    var J = (h - J) * b,
                        K = (0, d.default)(s);
                    K[a] = w[a];
                    var L = O(K, J, a, 'dist');
                    A(L.values, L.value);
                }
            },
            C = f.useRef(B);
        C.current = B;
        var D = f.useMemo(function() {
            var E = (0, d.default)(c).sort(function(E, b) {
                    return E - b;
                }),
                F = (0, d.default)(s).sort(function(E, F) {
                    return E - F;
                });
            return E.every(function(E, c) {
                return E === F[c];
            }) ? s : c;
        }, [
            c,
            s
        ]);
        return [
            o,
            k,
            D,
            function(J, d) {
                J.stopPropagation();
                var E = c[d];
                p(d), l(E), x(c);
                var F = g(J),
                    G = F.pageX,
                    H = F.pageY,
                    I = function(c) {
                        c.preventDefault();
                        var J, K = g(c),
                            L = K.pageX,
                            M = K.pageY,
                            N = L - G,
                            O = M - H,
                            P = a.current.getBoundingClientRect(),
                            Q = P.width,
                            R = P.height;
                        switch (b) {
                            case 'btt':
                                J = -O / R;
                                break;
                            case 'ttb':
                                J = O / R;
                                break;
                            case 'rtl':
                                J = -N / Q;
                                break;
                            default:
                                J = N / Q;
                        }
                        C.current(d, J);
                    },
                    J = function a(b) {
                        b.preventDefault(), document.removeEventListener('mouseup', a), document.removeEventListener('mousemove', I), document.removeEventListener('touchend', a), document.removeEventListener('touchmove', I), y.current = null, z.current = null, p(-1), o();
                    };
                document.addEventListener('mouseup', J), document.addEventListener('mousemove', I), document.addEventListener('touchend', J), document.addEventListener('touchmove', I), y.current = I, z.current = J;
            }
        ];
    }
}), c.register('Gl8J6', function(a, k) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('uPP4W'),
        e = c('RmxWO'),
        f = c('sMi4P'),
        g = c('2JGe0');

    function h(a) {
        var i = a.prefixCls,
            j = a.style,
            k = a.values,
            l = a.startPoint,
            m = a.onStartMove,
            n = d.useContext(e.default),
            o = n.included,
            p = n.range,
            q = n.min,
            r = d.useMemo(function() {
                if (!p) {
                    if (0 === k.length)
                        return [];
                    var s = null != l ? l : q,
                        t = k[0];
                    return [{
                        start: Math.min(s, t),
                        end: Math.max(s, t)
                    }];
                }
                for (var s = [], t = 0; t < k.length - 1; t += 1)
                    s.push({
                        start: k[t],
                        end: k[t + 1]
                    });
                return s;
            }, [
                k,
                p,
                l,
                q
            ]);
        return o ? r.map(function(a, k) {
            var s = a.start,
                t = a.end;
            return d.createElement(f.default, {
                index: k,
                prefixCls: i,
                style: (0, g.getIndex)(j, k),
                start: s,
                end: t,
                key: k,
                onStartMove: m
            });
        }) : null;
    }
}), c.register('sMi4P', function(k, l) {
    b(k.exports, 'default', function() {
        return i;
    });
    var d = c('JGI43'),
        e = c('uPP4W'),
        f = c('VAIs1'),
        g = c('RmxWO'),
        h = c('2JGe0');

    function i(b) {
        var j = b.prefixCls,
            k = b.style,
            l = b.start,
            m = b.end,
            n = b.index,
            o = b.onStartMove,
            p = e.useContext(g.default),
            q = p.direction,
            r = p.min,
            s = p.max,
            t = p.disabled,
            u = p.range,
            v = ''.concat(j, '-track'),
            w = (0, h.getOffset)(l, r, s),
            x = (0, h.getOffset)(m, r, s),
            y = function(a) {
                !t && o && o(a, -1);
            },
            z = {};
        switch (q) {
            case 'rtl':
                z.right = ''.concat(100 * w, '%'), z.width = ''.concat(100 * x - 100 * w, '%');
                break;
            case 'btt':
                z.bottom = ''.concat(100 * w, '%'), z.height = ''.concat(100 * x - 100 * w, '%');
                break;
            case 'ttb':
                z.top = ''.concat(100 * w, '%'), z.height = ''.concat(100 * x - 100 * w, '%');
                break;
            default:
                z.left = ''.concat(100 * w, '%'), z.width = ''.concat(100 * x - 100 * w, '%');
        }
        return e.createElement('div', {
            className: a(f)(v, u && ''.concat(v, '-').concat(n + 1)),
            style: (0, d.default)((0, d.default)({}, z), k),
            onMouseDown: y,
            onTouchStart: y
        });
    }
}), c.register('593eT', function(a, i) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('eLHRX');

    function f(a) {
        var g = a.prefixCls,
            h = a.marks,
            i = a.onClick,
            j = ''.concat(g, '-mark');
        return h.length ? d.createElement('div', {
            className: j
        }, h.map(function(a) {
            var k = a.value,
                l = a.style,
                m = a.label;
            return d.createElement(e.default, {
                key: k,
                prefixCls: j,
                style: l,
                value: k,
                onClick: i
            }, m);
        })) : null;
    }
}), c.register('eLHRX', function(l, m) {
    b(l.exports, 'default', function() {
        return j;
    });
    var d = c('JGI43'),
        e = c('boVQ9'),
        f = c('uPP4W'),
        g = c('VAIs1'),
        h = c('2JGe0'),
        i = c('RmxWO');

    function j(b) {
        var k = b.prefixCls,
            l = b.style,
            m = b.children,
            n = b.value,
            o = b.onClick,
            p = f.useContext(i.default),
            q = p.min,
            r = p.max,
            s = p.direction,
            t = p.includedStart,
            u = p.includedEnd,
            v = p.included,
            w = ''.concat(k, '-text'),
            x = (0, h.getDirectionStyle)(s, n, q, r);
        return f.createElement('span', {
            className: a(g)(w, (0, e.default)({}, ''.concat(w, '-active'), v && t <= n && n <= u)),
            style: (0, d.default)((0, d.default)({}, x), l),
            onMouseDown: function(a) {
                a.stopPropagation();
            },
            onClick: function() {
                o(n);
            }
        }, m);
    }
}), c.register('YUuqC', function(a, j) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('RmxWO'),
        f = c('Np+mQ');

    function g(a) {
        var h = a.prefixCls,
            i = a.marks,
            j = a.dots,
            k = a.style,
            l = a.activeStyle,
            m = d.useContext(e.default),
            n = m.min,
            o = m.max,
            p = m.step,
            q = d.useMemo(function() {
                var r = new Set();
                if (i.forEach(function(h) {
                        r.add(h.value);
                    }), j && null !== p)
                    for (var s = t; s <= o;)
                        r.add(s), s += p;
                return Array.from(r);
            }, [
                n,
                o,
                p,
                j,
                i
            ]);
        return d.createElement('div', {
            className: ''.concat(h, '-step')
        }, q.map(function(a) {
            return d.createElement(f.default, {
                prefixCls: h,
                key: a,
                value: a,
                style: k,
                activeStyle: l
            });
        }));
    }
}), c.register('Np+mQ', function(l, m) {
    b(l.exports, 'default', function() {
        return j;
    });
    var d = c('boVQ9'),
        e = c('JGI43'),
        f = c('uPP4W'),
        g = c('VAIs1'),
        h = c('2JGe0'),
        i = c('RmxWO');

    function j(b) {
        var k = b.prefixCls,
            l = b.value,
            m = b.style,
            n = b.activeStyle,
            o = f.useContext(i.default),
            p = o.min,
            q = o.max,
            r = o.direction,
            s = o.included,
            t = o.includedStart,
            u = o.includedEnd,
            v = ''.concat(k, '-dot'),
            w = s && t <= l && l <= u,
            x = (0, e.default)((0, e.default)({}, (0, h.getDirectionStyle)(r, l, p, q)), 'function' == typeof m ? m(l) : m);
        return w && (x = (0, e.default)((0, e.default)({}, x), 'function' == typeof n ? n(l) : n)), f.createElement('span', {
            className: a(g)(v, (0, d.default)({}, ''.concat(v, '-active'), w)),
            style: x
        });
    }
}), c.register('SwiYA', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('pn5m1'),
        e = c('uPP4W');

    function f(a, b, c, h, f, l) {
        var g = e.useCallback(function(c) {
                var h = isFinite(c) ? c : a;
                return h = Math.min(b, c), h = Math.max(a, h);
            }, [
                a,
                b
            ]),
            h = e.useCallback(function(l) {
                if (null !== c) {
                    var i = a + Math.round((g(l) - a) / c) * c,
                        j = function(a) {
                            return (String(a).split('.')[1] || '').length;
                        },
                        k = Math.max(j(c), j(b), j(a)),
                        l = Number(i.toFixed(k));
                    return a <= l && l <= b ? l : null;
                }
                return null;
            }, [
                c,
                a,
                b,
                g
            ]),
            i = e.useCallback(function(d) {
                var j = g(d),
                    k = l.map(function(a) {
                        return a.value;
                    });
                null !== c && k.push(h(d)), k.push(a, b);
                var l = k[0],
                    m = b - a;
                return k.forEach(function(a) {
                    var n = Math.abs(j - a);
                    n <= m && (l = a, m = n);
                }), l;
            }, [
                a,
                b,
                l,
                c,
                g,
                h
            ]),
            j = function e(f, g, g) {
                var k = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit';
                if ('number' == typeof g) {
                    var l, m = f[g],
                        n = m + g,
                        o = [];
                    l.forEach(function(a) {
                        o.push(a.value);
                    }), o.push(a, b), o.push(h(m));
                    var p = g > 0 ? 1 : -1;
                    'unit' === k ? o.push(h(m + p * c)) : o.push(h(n)), o = o.filter(function(a) {
                        return null !== a;
                    }).filter(function(a) {
                        return g < 0 ? a <= m : a >= m;
                    }), 'unit' === k && (o = o.filter(function(a) {
                        return a !== m;
                    }));
                    var q = 'unit' === k ? m : n;
                    l = o[0];
                    var r = Math.abs(l - q);
                    if (o.forEach(function(a) {
                            var s = Math.abs(a - q);
                            s < r && (l = a, r = s);
                        }), void 0 === l)
                        return g < 0 ? a : b;
                    if ('dist' === k)
                        return l;
                    if (Math.abs(g) > 1) {
                        var s = (0, d.default)(f);
                        return s[g] = l, e(s, g - p, g, k);
                    }
                    return l;
                }
                return 'min' === g ? a : 'max' === g ? b : void 0;
            },
            k = function(a, b, c) {
                var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    m = a[c],
                    n = j(a, b, c, l);
                return {
                    value: n,
                    changed: n !== m
                };
            },
            l = function(a) {
                return null === g && 0 === a || 'number' == typeof g && a < g;
            };
        return [
            i,
            function(a, b, c) {
                var m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'unit',
                    n = a.map(i),
                    o = n[c],
                    p = j(n, b, c, m);
                if (n[c] = p, !1 === f) {
                    var q = g || 0;
                    c > 0 && n[c - 1] !== o && (n[c] = Math.max(n[c], n[c - 1] + q)), c < n.length - 1 && n[c + 1] !== o && (n[c] = Math.min(n[c], n[c + 1] - q));
                } else if ('number' == typeof g || null === g) {
                    for (var r = c + 1; r < n.length; r += 1)
                        for (var s = !0; l(n[r] - n[r - 1]) && s;) {
                            var t = k(n, 1, r);
                            n[r] = t.value, s = t.changed;
                        }
                    for (var t = u; t > 0; t -= 1)
                        for (var v = !0; l(n[t] - n[t - 1]) && v;) {
                            var w = k(n, -1, t - 1);
                            n[t - 1] = w.value, v = w.changed;
                        }
                    for (var w = n.length - 1; w > 0; w -= 1)
                        for (var x = !0; l(n[w] - n[w - 1]) && x;) {
                            var y = k(n, -1, w - 1);
                            n[w - 1] = y.value, x = y.changed;
                        }
                    for (var y = 0; y < n.length - 1; y += 1)
                        for (var z = !0; l(n[y + 1] - n[y]) && z;) {
                            var A = k(n, 1, y + 1);
                            n[y + 1] = A.value, z = A.changed;
                        }
                }
                return {
                    value: n[c],
                    values: n
                };
            }
        ];
    }
}), c.register('MPMAp', function(a, k) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('+6VYd'),
        e = c('XNhMJ'),
        f = c('uPP4W'),
        g = (f = c('uPP4W'), c('YfLmS'));
    var h = f.forwardRef((a, b) => {
        const {
            open: i
        } = j, k = (0, f.useRef)(null), l = (0, f.useRef)(null);

        function m() {
            d.default.cancel(l.current), l.current = null;
        }
        return f.useEffect(() => (i ? l.current = (0, d.default)(() => {
            var n;
            null === (n = k.current) || void 0 === n || n.forcePopupAlign(), l.current = null;
        }) : m(), m), [
            i,
            j.title
        ]), f.createElement(g.default, Object.assign({
            ref: (0, e.composeRef)(k, b)
        }, j));
    });
}), c.register('r/uQE', function(a, k) {
    b(a.exports, 'default', function() {
        return l;
    });
    var d = c('UKDGz'),
        e = c('P38j/'),
        f = c('vvwoA'),
        g = c('jnIuq');
    const h = a => {
            const {
                componentCls: i,
                controlSize: j,
                dotSize: k,
                marginFull: l,
                marginPart: m,
                colorFillContentHover: n
            } = o;
            return {
                [i]: Object.assign(Object.assign({}, (0, e.resetComponent)(o)), {
                    position: 'relative',
                    height: j,
                    margin: `${ m }px ${ l }px`,
                    padding: 0,
                    cursor: 'pointer',
                    touchAction: 'none',
                    '&-vertical': {
                        margin: `${ l }px ${ m }px`
                    },
                    [`${ i }-rail`]: {
                        position: 'absolute',
                        backgroundColor: o.colorFillTertiary,
                        borderRadius: o.borderRadiusXS,
                        transition: `background-color ${ o.motionDurationMid }`
                    },
                    [`${ i }-track`]: {
                        position: 'absolute',
                        backgroundColor: o.colorPrimaryBorder,
                        borderRadius: o.borderRadiusXS,
                        transition: `background-color ${ o.motionDurationMid }`
                    },
                    '&:hover': {
                        [`${ i }-rail`]: {
                            backgroundColor: o.colorFillSecondary
                        },
                        [`${ i }-track`]: {
                            backgroundColor: o.colorPrimaryBorderHover
                        },
                        [`${ i }-dot`]: {
                            borderColor: n
                        },
                        [`${ i }-handle::after`]: {
                            boxShadow: `0 0 0 ${ o.handleLineWidth }px ${ o.colorPrimaryBorderHover }`
                        },
                        [`${ i }-dot-active`]: {
                            borderColor: o.colorPrimary
                        }
                    },
                    [`${ i }-handle`]: {
                        position: 'absolute',
                        width: o.handleSize,
                        height: o.handleSize,
                        outline: 'none',
                        [`${ i }-dragging`]: {
                            zIndex: 1
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            insetInlineStart: -o.handleLineWidth,
                            insetBlockStart: -o.handleLineWidth,
                            width: o.handleSize + 2 * o.handleLineWidth,
                            height: o.handleSize + 2 * o.handleLineWidth,
                            backgroundColor: 'transparent'
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            insetBlockStart: 0,
                            insetInlineStart: 0,
                            width: o.handleSize,
                            height: o.handleSize,
                            backgroundColor: o.colorBgElevated,
                            boxShadow: `0 0 0 ${ o.handleLineWidth }px ${ o.colorPrimaryBorder }`,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: `\n            inset-inline-start ${ o.motionDurationMid },\n            inset-block-start ${ o.motionDurationMid },\n            width ${ o.motionDurationMid },\n            height ${ o.motionDurationMid },\n            box-shadow ${ o.motionDurationMid }\n          `
                        },
                        '&:hover, &:active, &:focus': {
                            '&::before': {
                                insetInlineStart: -((o.handleSizeHover - o.handleSize) / 2 + o.handleLineWidthHover),
                                insetBlockStart: -((o.handleSizeHover - o.handleSize) / 2 + o.handleLineWidthHover),
                                width: o.handleSizeHover + 2 * o.handleLineWidthHover,
                                height: o.handleSizeHover + 2 * o.handleLineWidthHover
                            },
                            '&::after': {
                                boxShadow: `0 0 0 ${ o.handleLineWidthHover }px ${ o.colorPrimary }`,
                                width: o.handleSizeHover,
                                height: o.handleSizeHover,
                                insetInlineStart: (o.handleSize - o.handleSizeHover) / 2,
                                insetBlockStart: (o.handleSize - o.handleSizeHover) / 2
                            }
                        }
                    },
                    [`${ i }-mark`]: {
                        position: 'absolute',
                        fontSize: o.fontSize
                    },
                    [`${ i }-mark-text`]: {
                        position: 'absolute',
                        display: 'inline-block',
                        color: o.colorTextDescription,
                        textAlign: 'center',
                        wordBreak: 'keep-all',
                        cursor: 'pointer',
                        userSelect: 'none',
                        '&-active': {
                            color: o.colorText
                        }
                    },
                    [`${ i }-step`]: {
                        position: 'absolute',
                        background: 'transparent'
                    },
                    [`${ i }-dot`]: {
                        position: 'absolute',
                        width: k,
                        height: k,
                        backgroundColor: o.colorBgElevated,
                        border: `${ o.handleLineWidth }px solid ${ o.colorBorderSecondary }`,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: `border-color ${ o.motionDurationSlow }`,
                        '&-active': {
                            borderColor: o.colorPrimaryBorder
                        }
                    },
                    [`&${ i }-disabled`]: {
                        cursor: 'not-allowed',
                        [`${ i }-rail`]: {
                            backgroundColor: `${ o.colorFillSecondary } !important`
                        },
                        [`${ i }-track`]: {
                            backgroundColor: `${ o.colorTextDisabled } !important`
                        },
                        [`\n          ${ i }-dot\n        `]: {
                            backgroundColor: o.colorBgElevated,
                            borderColor: o.colorTextDisabled,
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        },
                        [`${ i }-handle::after`]: {
                            backgroundColor: o.colorBgElevated,
                            cursor: 'not-allowed',
                            width: o.handleSize,
                            height: o.handleSize,
                            boxShadow: `0 0 0 ${ o.handleLineWidth }px ${ new (0, d.TinyColor)(o.colorTextDisabled).onBackground(o.colorBgContainer).toHexShortString() }`,
                            insetInlineStart: 0,
                            insetBlockStart: 0
                        },
                        [`\n          ${ i }-mark-text,\n          ${ i }-dot\n        `]: {
                            cursor: 'not-allowed !important'
                        }
                    }
                })
            };
        },
        i = (a, b) => {
            const {
                componentCls: j,
                railSize: k,
                handleSize: l,
                dotSize: m
            } = n, o = b ? 'width' : 'height', p = b ? 'height' : 'width', q = b ? 'insetBlockStart' : 'insetInlineStart', r = b ? 'top' : 'insetInlineStart';
            return {
                [b ? 'paddingBlock' : 'paddingInline']: k,
                [p]: 3 * k,
                [`${ j }-rail`]: {
                    [o]: '100%',
                    [p]: k
                },
                [`${ j }-track`]: {
                    [p]: k
                },
                [`${ j }-handle`]: {
                    [q]: (3 * k - l) / 2
                },
                [`${ j }-mark`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [r]: l,
                    [o]: '100%'
                },
                [`${ j }-step`]: {
                    insetInlineStart: 0,
                    top: 0,
                    [r]: k,
                    [o]: '100%',
                    [p]: k
                },
                [`${ j }-dot`]: {
                    position: 'absolute',
                    [q]: (k - m) / 2
                }
            };
        },
        j = a => {
            const {
                componentCls: k,
                marginPartWithMark: l
            } = m;
            return {
                [`${ k }-horizontal`]: Object.assign(Object.assign({}, i(m, !0)), {
                    [`&${ k }-with-marks`]: {
                        marginBottom: l
                    }
                })
            };
        },
        k = a => {
            const {
                componentCls: l
            } = m;
            return {
                [`${ l }-vertical`]: Object.assign(Object.assign({}, i(m, !1)), {
                    height: '100%'
                })
            };
        };
    var l = (0, f.default)('Slider', a => {
        const m = (0, g.merge)(a, {
            marginPart: (a.controlHeight - a.controlSize) / 2,
            marginFull: a.controlSize / 2,
            marginPartWithMark: a.controlHeightLG - a.controlSize
        });
        return [
            h(m),
            j(m),
            k(m)
        ];
    }, a => {
        const m = a.controlHeightLG / 4;
        return {
            controlSize: m,
            railSize: 4,
            handleSize: m,
            handleSizeHover: a.controlHeightSM / 2,
            dotSize: 8,
            handleLineWidth: a.lineWidth + 1,
            handleLineWidthHover: a.lineWidth + 3
        };
    });
});