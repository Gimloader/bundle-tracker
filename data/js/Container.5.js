function a(a, b, c, h) {
    Object.defineProperty(a, b, {
        get: c,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('UzdPH', function(b, h) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('DlF8H'),
        e = c('7ccNH'),
        f = c('d4FVE'),
        g = c('PcM1o');
    const h = c('6bzge').default;
    h.Text = f.default, h.Link = d.default, h.Title = g.default, h.Paragraph = e.default;
    var i = j;
}), c.register('DlF8H', function(b, h) {
    a(b.exports, 'default', function() {
        return g;
    }, function(a) {
        return g = a;
    });
    var d = c('uPP4W'),
        e = c('LOdPA'),
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        };
    var g = d.forwardRef((a, b) => {
        var {
            ellipsis: h,
            rel: i
        } = j, k = f(j, [
            'ellipsis',
            'rel'
        ]);
        const l = Object.assign(Object.assign({}, k), {
            rel: void 0 === i && '_blank' === k.target ? 'noopener noreferrer' : i
        });
        return delete l.navigate, d.createElement(e.default, Object.assign({}, l, {
            ref: b,
            ellipsis: !!h,
            component: 'a'
        }));
    });
}), c.register('LOdPA', function(C, D) {
    a(C.exports, 'default', function() {
        return D;
    }, function(a) {
        return D = a;
    });
    var d = c('oSNZM'),
        e = c('SHiyt7'),
        f = c('Ynp9Z7'),
        g = c('VAIs1'),
        h = c('n3XDs'),
        i = c('QpwbI'),
        j = c('8N2Yw'),
        k = c('iuJXj'),
        l = c('xgR9K'),
        m = c('xORK+'),
        n = c('XNhMJ'),
        o = c('uPP4W'),
        p = c('qEw51'),
        q = c('wvHHV'),
        r = c('abd4A'),
        s = c('JoQQY'),
        t = c('YfLmS'),
        u = c('uuMLm'),
        v = c('DuPVa'),
        w = c('HZUST'),
        x = c('6bzge'),
        y = c('isC6B'),
        z = c('lWNiA'),
        A = function(a, b) {
            var B = {};
            for (var C in a)
                Object.prototype.hasOwnProperty.call(a, C) && b.indexOf(C) < 0 && (B[C] = a[C]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var D = 0;
                for (C = Object.getOwnPropertySymbols(a); D < C.length; D++)
                    b.indexOf(C[D]) < 0 && Object.prototype.propertyIsEnumerable.call(a, C[D]) && (B[C[D]] = a[C[D]]);
            }
            return B;
        };

    function B(a, b, c) {
        return !0 === a || void 0 === a ? b : a || c && b;
    }

    function C(a) {
        return !1 === a ? [
            !1,
            !1
        ] : Array.isArray(a) ? a : [a];
    }
    var D = o.forwardRef((a, c) => {
        var E, F, G;
        const {
            prefixCls: H,
            className: I,
            style: J,
            type: K,
            disabled: L,
            children: M,
            ellipsis: N,
            editable: O,
            copyable: P,
            component: Q,
            title: R
        } = S, T = A(S, [
            'prefixCls',
            'className',
            'style',
            'type',
            'disabled',
            'children',
            'ellipsis',
            'editable',
            'copyable',
            'component',
            'title'
        ]), {
            getPrefixCls: U,
            direction: V
        } = o.useContext(p.ConfigContext), W = (0, q.useLocaleReceiver)('Text')[0], X = o.useRef(null), Y = o.useRef(null), Z = U('typography', H), $ = (0, m.default)(T, [
            'mark',
            'code',
            'delete',
            'underline',
            'strong',
            'keyboard',
            'italic'
        ]), [_, ab] = (0, v.default)(O), [bb, cb] = (0, l.default)(!1, {
            value: ab.editing
        }), {
            triggerType: db = ['icon']
        } = eb, fb = S => {
            var gb;
            S && (null === (gb = eb.onStart) || void 0 === gb || gb.call(eb)), cb(S);
        };
        (0, w.default)(() => {
            var gb;
            bb || null === (gb = Y.current) || void 0 === gb || gb.focus();
        }, [bb]);
        const gb = S => {
                null == S || S.preventDefault(), fb(!0);
            },
            [hb, ib] = (0, v.default)(P),
            [jb, kb] = o.useState(!1),
            lb = o.useRef(),
            mb = {};
        ib.format && (mb.format = ib.format);
        const nb = () => {
                window.clearTimeout(lb.current);
            },
            ob = S => {
                var pb;
                null == S || S.preventDefault(), null == S || S.stopPropagation(), b(h)(ib.text || String(M) || '', mb), kb(!0), nb(), lb.current = window.setTimeout(() => {
                    kb(!1);
                }, 3000), null === (pb = ib.onCopy) || void 0 === pb || pb.call(ib, S);
            };
        o.useEffect(() => nb, []);
        const [pb, qb] = o.useState(!1), [rb, sb] = o.useState(!1), [tb, ub] = o.useState(!1), [vb, wb] = o.useState(!1), [xb, yb] = o.useState(!1), [zb, Ab] = o.useState(!0), [Bb, Cb] = (0, v.default)(N, {
            expandable: !1
        }), Db = Bb && !tb, {
            rows: Eb = 1
        } = Fb, Gb = o.useMemo(() => !Db || void 0 !== Fb.suffix || Fb.onEllipsis || Fb.expandable || _ || hb, [
            Db,
            Fb,
            _,
            hb
        ]);
        (0, k.default)(() => {
            Bb && !Gb && (qb((0, s.isStyleSupport)('webkitLineClamp')), sb((0, s.isStyleSupport)('textOverflow')));
        }, [
            Gb,
            Bb
        ]);
        const Hb = o.useMemo(() => !Gb && (1 === Eb ? rb : pb), [
                Gb,
                rb,
                pb
            ]),
            Ib = Db && (Hb ? xb : vb),
            Jb = Db && 1 === Eb && Hb,
            Kb = Db && Eb > 1 && Hb,
            Lb = S => {
                var Mb;
                ub(!0), null === (Mb = Fb.onExpand) || void 0 === Mb || Mb.call(Fb, S);
            },
            [Mb, Nb] = o.useState(0),
            [Ob, Pb] = o.useState(0),
            Qb = S => {
                var Rb;
                wb(S), vb !== S && (null === (Rb = Fb.onEllipsis) || void 0 === Rb || Rb.call(Fb, S));
            };
        o.useEffect(() => {
            const Rb = X.current;
            if (Bb && Hb && Rb) {
                const Sb = Kb ? Rb.offsetHeight < Rb.scrollHeight : Rb.offsetWidth < Rb.scrollWidth;
                xb !== Sb && yb(Sb);
            }
        }, [
            Bb,
            Hb,
            M,
            Kb,
            zb
        ]), o.useEffect(() => {
            const Rb = X.current;
            if ('undefined' == typeof IntersectionObserver || !Rb || !Hb || !Db)
                return;
            const Sb = new IntersectionObserver(() => {
                Ab(!!Rb.offsetParent);
            });
            return Sb.observe(Rb), () => {
                Sb.disconnect();
            };
        }, [
            Hb,
            Db
        ]);
        let Rb = {};
        Rb = !0 === Fb.tooltip ? {
            title: null !== (E = eb.text) && void 0 !== E ? E : M
        } : o.isValidElement(Fb.tooltip) ? {
            title: Fb.tooltip
        } : 'object' == typeof Fb.tooltip ? Object.assign({
            title: null !== (F = eb.text) && void 0 !== F ? F : M
        }, Fb.tooltip) : {
            title: Fb.tooltip
        };
        const Sb = o.useMemo(() => {
            const Tb = Tb => [
                'string',
                'number'
            ].includes(typeof Tb);
            if (Bb && !Hb)
                return Tb(eb.text) ? eb.text : Tb(M) ? M : Tb(R) ? R : Tb(Rb.title) ? Rb.title : void 0;
        }, [
            Bb,
            Hb,
            R,
            Rb.title,
            Ib
        ]);
        if (bb)
            return o.createElement(u.default, {
                value: null !== (G = eb.text) && void 0 !== G ? G : 'string' == typeof M ? M : '',
                onSave: S => {
                    var Tb;
                    null === (Tb = eb.onChange) || void 0 === Tb || Tb.call(eb, S), fb(!1);
                },
                onCancel: () => {
                    var Ub;
                    null === (Ub = eb.onCancel) || void 0 === Ub || Ub.call(eb), fb(!1);
                },
                onEnd: eb.onEnd,
                prefixCls: Z,
                className: I,
                style: J,
                direction: V,
                component: Q,
                maxLength: eb.maxLength,
                autoSize: eb.autoSize,
                enterIcon: eb.enterIcon
            });
        const Tb = () => {
                const {
                    expandable: Ub,
                    symbol: Vb
                } = Wb;
                if (!Ub)
                    return null;
                let Xb;
                return Xb = Vb || W.expand, o.createElement('a', {
                    key: 'expand',
                    className: `${ Z }-expand`,
                    onClick: Lb,
                    'aria-label': W.expand
                }, Xb);
            },
            Ub = () => {
                if (!_)
                    return;
                const {
                    icon: Vb,
                    tooltip: Wb
                } = Xb, Yb = (0, j.default)(Wb)[0] || W.edit, Zb = 'string' == typeof Yb ? Yb : '';
                return db.includes('icon') ? o.createElement(t.default, {
                    key: 'edit',
                    title: !1 === Wb ? '' : Yb
                }, o.createElement(r.default, {
                    ref: Y,
                    className: `${ Z }-edit`,
                    onClick: gb,
                    'aria-label': Zb
                }, Vb || o.createElement(f.default, {
                    role: 'button'
                }))) : null;
            },
            Vb = () => {
                if (!hb)
                    return;
                const {
                    tooltips: Wb,
                    icon: Xb
                } = Yb, Zb = C(Wb), $b = C(Xb), _b = jb ? B(Zb[1], W.copied) : B(Zb[0], W.copy), ac = jb ? W.copied : W.copy, bc = 'string' == typeof _b ? _b : ac;
                return o.createElement(t.default, {
                    key: 'copy',
                    title: _b
                }, o.createElement(r.default, {
                    className: b(g)(`${ Z }-copy`, jb && `${ Z }-copy-success`),
                    onClick: ob,
                    'aria-label': bc
                }, jb ? B($b[1], o.createElement(d.default, null), !0) : B($b[0], o.createElement(e.default, null), !0)));
            };
        return o.createElement(i.default, {
            onResize: (S, b) => {
                let {
                    offsetWidth: Wb
                } = Xb;
                var Yb;
                Nb(Wb), Pb(parseInt(null === (Yb = window.getComputedStyle) || void 0 === Yb ? void 0 : Yb.call(window, b).fontSize, 10) || 0);
            },
            disabled: !Db || Hb
        }, E => o.createElement(z.default, {
            tooltipProps: Rb,
            enabledEllipsis: Db,
            isEllipsis: Ib
        }, o.createElement(x.default, Object.assign({
            className: b(g)({
                [`${ Z }-${ K }`]: K,
                [`${ Z }-disabled`]: L,
                [`${ Z }-ellipsis`]: Bb,
                [`${ Z }-single-line`]: Db && 1 === Eb,
                [`${ Z }-ellipsis-single-line`]: Jb,
                [`${ Z }-ellipsis-multiple-line`]: Kb
            }, I),
            prefixCls: H,
            style: Object.assign(Object.assign({}, J), {
                WebkitLineClamp: Kb ? Eb : void 0
            }),
            component: Q,
            ref: (0, n.composeRef)(E, X, c),
            direction: V,
            onClick: db.includes('text') ? gb : void 0,
            'aria-label': null == Sb ? void 0 : Sb.toString(),
            title: R
        }, $), o.createElement(y.default, {
            enabledMeasure: Db && !Hb,
            text: M,
            rows: Eb,
            width: Mb,
            fontSize: Ob,
            onEllipsis: Qb
        }, (b, c) => {
            let Wb = Xb;
            Xb.length && c && Sb && (Wb = o.createElement('span', {
                key: 'show-content',
                'aria-hidden': !0
            }, Wb));
            const Yb = function(S, Xb) {
                let {
                    mark: Zb,
                    code: $b,
                    underline: _b,
                    delete: ac,
                    strong: bc,
                    keyboard: cc,
                    italic: dc
                } = ec, fc = gc;

                function hc(ec, gc) {
                    gc && (fc = o.createElement(ec, {}, fc));
                }
                return hc('strong', bc), hc('u', _b), hc('del', ac), hc('code', $b), hc('mark', Zb), hc('kbd', cc), hc('i', dc), fc;
            }(S, o.createElement(o.Fragment, null, Wb, (S => {
                return [
                    S && o.createElement('span', {
                        'aria-hidden': !0,
                        key: 'ellipsis'
                    }, '...'),
                    Fb.suffix,
                    (Xb = S, [
                        Xb && Tb(),
                        Ub(),
                        Vb()
                    ])
                ];
                var Zb;
            })(c)));
            return Yb;
        }))));
    });
}), c.register('n3XDs', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QpwbI', function(b, k) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('DiFaT0'),
        e = c('uPP4W'),
        f = c('8N2Yw');
    c('NuYYk');
    var g = c('ae/AN'),
        h = c('sGLDQ0');

    function i(a) {
        var j = a.children;
        return ('function' == typeof j ? [j] : (0, f.default)(j)).map(function(j, c) {
            var k = (null == j ? void 0 : j.key) || ''.concat('rc-observer-key', '-').concat(c);
            return e.createElement(g.default, (0, d.default)({}, a, {
                key: k
            }), j);
        });
    }
    i.Collection = h.Collection;
    var j = k;
}), c.register('DiFaT0', function(b, c) {
    function d() {
        return d = Object.assign ? Object.assign.bind() : function(a) {
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
}), c.register('ae/AN', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('pysua'),
        e = c('XNhMJ'),
        f = c('uPP4W'),
        g = c('MGfFc2'),
        h = c('miZj0'),
        i = c('mLY+w'),
        j = c('sGLDQ0');

    function k(a) {
        var l = a.children,
            m = a.disabled,
            n = f.useRef(null),
            o = f.useRef(null),
            p = f.useContext(j.CollectionContext),
            q = 'function' == typeof l,
            r = q ? l(n) : l,
            s = f.useRef({
                width: -1,
                height: -1,
                offsetWidth: -1,
                offsetHeight: -1
            }),
            t = !q && f.isValidElement(r) && (0, e.supportRef)(r),
            u = t ? r.ref : null,
            v = f.useMemo(function() {
                return (0, e.composeRef)(u, n);
            }, [
                u,
                n
            ]),
            w = f.useRef(a);
        w.current = a;
        var x = f.useCallback(function(a) {
            var y = w.current,
                z = y.onResize,
                A = y.data,
                B = a.getBoundingClientRect(),
                C = B.width,
                D = B.height,
                E = a.offsetWidth,
                F = a.offsetHeight,
                G = Math.floor(C),
                H = Math.floor(D);
            if (s.current.width !== G || s.current.height !== H || s.current.offsetWidth !== E || s.current.offsetHeight !== F) {
                var I = {
                    width: G,
                    height: H,
                    offsetWidth: E,
                    offsetHeight: F
                };
                s.current = I;
                var J = E === Math.round(C) ? C : E,
                    K = F === Math.round(D) ? D : F,
                    L = (0, d.default)((0, d.default)({}, I), {}, {
                        offsetWidth: J,
                        offsetHeight: K
                    });
                null == p || p(L, a, A), z && Promise.resolve().then(function() {
                    z(L, a);
                });
            }
        }, []);
        return f.useEffect(function() {
            var y = (0, g.default)(n.current) || (0, g.default)(o.current);
            return y && !m && (0, h.observe)(y, x),
                function() {
                    return (0, h.unobserve)(y, x);
                };
        }, [
            n.current,
            m
        ]), f.createElement(i.default, {
            ref: o
        }, t ? f.cloneElement(r, {
            ref: v
        }) : r);
    }
}), c.register('pysua', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('l5u76');

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
}), c.register('l5u76', function(b, i) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('hg2uL');

    function e(a, b, c) {
        return (b = (0, d.default)(b)) in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
}), c.register('miZj0', function(b, i) {
    a(b.exports, 'observe', function() {
        return g;
    }), a(b.exports, 'unobserve', function() {
        return h;
    });
    var d = c('tDeyh'),
        e = new Map();
    var f = new(0, d.default)(function(a) {
        a.forEach(function(a) {
            var g, h = a.target;
            null === (g = e.get(h)) || void 0 === g || g.forEach(function(a) {
                return a(h);
            });
        });
    });

    function g(a, b) {
        e.has(a) || (e.set(a, new Set()), f.observe(a)), e.get(a).add(b);
    }

    function h(a, b) {
        e.has(a) && (e.get(a).delete(b), e.get(a).size || (f.unobserve(a), e.delete(a)));
    }
}), c.register('mLY+w', function(b, i) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('P5sdF'),
        e = c('mhQSG'),
        f = c('nTAcf'),
        g = c('HI70t'),
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
        }(c('uPP4W').Component);
}), c.register('sGLDQ0', function(b, i) {
    a(b.exports, 'CollectionContext', function() {
        return e;
    }), a(b.exports, 'Collection', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = d.createContext(null);

    function f(a) {
        var g = a.children,
            h = a.onBatchResize,
            i = d.useRef(0),
            j = d.useRef([]),
            k = d.useContext(e),
            l = d.useCallback(function(a, g, d) {
                i.current += 1;
                var m = i.current;
                j.current.push({
                    size: a,
                    element: g,
                    data: d
                }), Promise.resolve().then(function() {
                    m === i.current && (null == h || h(j.current), j.current = []);
                }), null == k || k(a, g, d);
            }, [
                h,
                k
            ]);
        return d.createElement(e.Provider, {
            value: l
        }, g);
    }
}), c.register('abd4A', function(b, h) {
    a(b.exports, 'default', function() {
        return h;
    }, function(a) {
        return h = a;
    });
    var d = c('8dJ620'),
        e = c('uPP4W'),
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        };
    const g = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block'
    };
    var h = e.forwardRef((a, b) => {
        const {
            style: i,
            noStyle: j,
            disabled: k
        } = l, m = f(l, [
            'style',
            'noStyle',
            'disabled'
        ]);
        let n = {};
        return j || (n = Object.assign({}, g)), k && (n.pointerEvents = 'none'), n = Object.assign(Object.assign({}, n), i), e.createElement('div', Object.assign({
            role: 'button',
            tabIndex: 0,
            ref: b
        }, m, {
            onKeyDown: l => {
                const {
                    keyCode: o
                } = p;
                o === d.default.ENTER && p.preventDefault();
            },
            onKeyUp: b => {
                const {
                    keyCode: o
                } = p, {
                    onClick: q
                } = r;
                o === d.default.ENTER && q && q();
            },
            style: n
        }));
    });
}), c.register('uuMLm', function(m, n) {
    a(m.exports, 'default', function() {
        return k;
    });
    var d = c('0Vm3k'),
        e = c('VAIs1'),
        f = c('8dJ620'),
        g = c('uPP4W'),
        h = c('Inth8'),
        i = c('Cpebg'),
        j = c('nKxKm');
    var k = a => {
        let {
            prefixCls: l,
            'aria-label': m,
            className: n,
            style: o,
            direction: p,
            maxLength: q,
            autoSize: r = !0,
            value: s,
            onSave: t,
            onCancel: u,
            onEnd: v,
            component: w,
            enterIcon: x = g.createElement(d.default, null)
        } = y;
        const z = g.useRef(null),
            A = g.useRef(!1),
            B = g.useRef(),
            [C, D] = g.useState(s);
        g.useEffect(() => {
            D(s);
        }, [s]), g.useEffect(() => {
            if (z.current && z.current.resizableTextArea) {
                const {
                    textArea: E
                } = z.current.resizableTextArea;
                E.focus();
                const {
                    length: F
                } = E.value;
                E.setSelectionRange(F, F);
            }
        }, []);
        const E = () => {
                t(C.trim());
            },
            F = w ? `${ l }-${ w }` : '',
            [G, H] = (0, j.default)(l),
            I = b(e)(l, `${ l }-edit-content`, {
                [`${ l }-rtl`]: 'rtl' === p
            }, n, F, H);
        return G(g.createElement('div', {
            className: I,
            style: o
        }, g.createElement(h.default, {
            ref: z,
            maxLength: q,
            value: C,
            onChange: y => {
                let {
                    target: J
                } = K;
                D(J.value.replace(/[\n\r]/g, ''));
            },
            onKeyDown: y => {
                let {
                    keyCode: J
                } = K;
                A.current || (B.current = J);
            },
            onKeyUp: y => {
                let {
                    keyCode: J,
                    ctrlKey: K,
                    altKey: L,
                    metaKey: M,
                    shiftKey: N
                } = O;
                B.current !== J || A.current || K || L || M || N || (J === f.default.ENTER ? (E(), null == v || v()) : J === f.default.ESC && u());
            },
            onCompositionStart: () => {
                A.current = !0;
            },
            onCompositionEnd: () => {
                A.current = !1;
            },
            onBlur: () => {
                E();
            },
            'aria-label': m,
            rows: 1,
            autoSize: r
        }), null !== x ? (0, i.cloneElement)(x, {
            className: `${ l }-edit-content-confirm`
        }) : null));
    };
}), c.register('nKxKm', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('vvwoA'),
        e = c('uBdp8'),
        f = c('fmCT/');
    const g = a => {
        const {
            componentCls: h,
            sizeMarginHeadingVerticalStart: i
        } = j;
        return {
            [h]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: j.colorText,
                wordBreak: 'break-word',
                lineHeight: j.lineHeight,
                [`&${ h }-secondary`]: {
                    color: j.colorTextDescription
                },
                [`&${ h }-success`]: {
                    color: j.colorSuccess
                },
                [`&${ h }-warning`]: {
                    color: j.colorWarning
                },
                [`&${ h }-danger`]: {
                    color: j.colorError,
                    'a&:active, a&:focus': {
                        color: j.colorErrorActive
                    },
                    'a&:hover': {
                        color: j.colorErrorHover
                    }
                },
                [`&${ h }-disabled`]: {
                    color: j.colorTextDisabled,
                    cursor: 'not-allowed',
                    userSelect: 'none'
                },
                '\n        div&,\n        p\n      ': {
                    marginBottom: '1em'
                }
            }, (0, e.getTitleStyles)(j)), {
                [`\n      & + h1${ h },\n      & + h2${ h },\n      & + h3${ h },\n      & + h4${ h },\n      & + h5${ h }\n      `]: {
                    marginTop: i
                },
                '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5': {
                    '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ': {
                        marginTop: i
                    }
                }
            }), (0, e.getResetStyles)(j)), (0, e.getLinkStyles)(j)), {
                [`\n        ${ h }-expand,\n        ${ h }-edit,\n        ${ h }-copy\n      `]: Object.assign(Object.assign({}, (0, f.operationUnit)(j)), {
                    marginInlineStart: j.marginXXS
                })
            }), (0, e.getEditableStyles)(j)), (0, e.getCopiableStyles)(j)), (0, e.getEllipsisStyles)()), {
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        };
    };
    var h = (0, d.default)('Typography', a => [g(a)], {
        sizeMarginHeadingVerticalStart: '1.2em',
        sizeMarginHeadingVerticalEnd: '0.5em'
    });
}), c.register('uBdp8', function(b, k) {
    a(b.exports, 'getTitleStyles', function() {
        return g;
    }), a(b.exports, 'getLinkStyles', function() {
        return h;
    }), a(b.exports, 'getResetStyles', function() {
        return i;
    }), a(b.exports, 'getEditableStyles', function() {
        return j;
    }), a(b.exports, 'getCopiableStyles', function() {
        return k;
    }), a(b.exports, 'getEllipsisStyles', function() {
        return l;
    });
    var d = c('RaJ39'),
        e = c('N1mwP'),
        f = c('fmCT/');
    const g = a => {
            const h = {};
            return [
                1,
                2,
                3,
                4,
                5
            ].forEach(c => {
                h[`\n      h${ c }&,\n      div&-h${ c },\n      div&-h${ c } > textarea,\n      h${ c }\n    `] = ((a, h, c, k) => {
                    const {
                        sizeMarginHeadingVerticalEnd: i,
                        fontWeightStrong: j
                    } = k;
                    return {
                        marginBottom: i,
                        color: c,
                        fontWeight: j,
                        fontSize: a,
                        lineHeight: h
                    };
                })(a[`fontSizeHeading${ c }`], a[`lineHeightHeading${ c }`], a.colorTextHeading, a);
            }), h;
        },
        h = a => {
            const {
                componentCls: i
            } = j;
            return {
                'a&, a': Object.assign(Object.assign({}, (0, f.operationUnit)(j)), {
                    textDecoration: j.linkDecoration,
                    '&:active, &:hover': {
                        textDecoration: j.linkHoverDecoration
                    },
                    [`&[disabled], &${ i }-disabled`]: {
                        color: j.colorTextDisabled,
                        cursor: 'not-allowed',
                        '&:active, &:hover': {
                            color: j.colorTextDisabled
                        },
                        '&:active': {
                            pointerEvents: 'none'
                        }
                    }
                })
            };
        },
        i = a => ({
            code: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.2em 0.1em',
                fontSize: '85%',
                fontFamily: a.fontFamilyCode,
                background: 'rgba(150, 150, 150, 0.1)',
                border: '1px solid rgba(100, 100, 100, 0.2)',
                borderRadius: 3
            },
            kbd: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.15em 0.1em',
                fontSize: '90%',
                fontFamily: a.fontFamilyCode,
                background: 'rgba(150, 150, 150, 0.06)',
                border: '1px solid rgba(100, 100, 100, 0.2)',
                borderBottomWidth: 2,
                borderRadius: 3
            },
            mark: {
                padding: 0,
                backgroundColor: d.gold[2]
            },
            'u, ins': {
                textDecoration: 'underline',
                textDecorationSkipInk: 'auto'
            },
            's, del': {
                textDecoration: 'line-through'
            },
            strong: {
                fontWeight: 600
            },
            'ul, ol': {
                marginInline: 0,
                marginBlock: '0 1em',
                padding: 0,
                li: {
                    marginInline: '20px 0',
                    marginBlock: 0,
                    paddingInline: '4px 0',
                    paddingBlock: 0
                }
            },
            ul: {
                listStyleType: 'circle',
                ul: {
                    listStyleType: 'disc'
                }
            },
            ol: {
                listStyleType: 'decimal'
            },
            'pre, blockquote': {
                margin: '1em 0'
            },
            pre: {
                padding: '0.4em 0.6em',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                background: 'rgba(150, 150, 150, 0.1)',
                border: '1px solid rgba(100, 100, 100, 0.2)',
                borderRadius: 3,
                fontFamily: a.fontFamilyCode,
                code: {
                    display: 'inline',
                    margin: 0,
                    padding: 0,
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    background: 'transparent',
                    border: 0
                }
            },
            blockquote: {
                paddingInline: '0.6em 0',
                paddingBlock: 0,
                borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
                opacity: 0.85
            }
        }),
        j = a => {
            const {
                componentCls: k
            } = l, m = (0, e.initInputToken)(l).inputPaddingVertical + 1;
            return {
                '&-edit-content': {
                    position: 'relative',
                    'div&': {
                        insetInlineStart: -l.paddingSM,
                        marginTop: -m,
                        marginBottom: `calc(1em - ${ m }px)`
                    },
                    [`${ k }-edit-content-confirm`]: {
                        position: 'absolute',
                        insetInlineEnd: l.marginXS + 2,
                        insetBlockEnd: l.marginXS,
                        color: l.colorTextDescription,
                        fontWeight: 'normal',
                        fontSize: l.fontSize,
                        fontStyle: 'normal',
                        pointerEvents: 'none'
                    },
                    textarea: {
                        margin: '0!important',
                        MozTransition: 'none',
                        height: '1em'
                    }
                }
            };
        },
        k = a => ({
            '&-copy-success': {
                '\n    &,\n    &:hover,\n    &:focus': {
                    color: a.colorSuccess
                }
            }
        }),
        l = () => ({
            '\n  a&-ellipsis,\n  span&-ellipsis\n  ': {
                display: 'inline-block',
                maxWidth: '100%'
            },
            '&-single-line': {
                whiteSpace: 'nowrap'
            },
            '&-ellipsis-single-line': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                'a&, span&': {
                    verticalAlign: 'bottom'
                }
            },
            '&-ellipsis-multiple-line': {
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical'
            }
        });
}), c.register('DuPVa', function(b, k) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a, b) {
        return d.useMemo(() => {
            const f = !!a;
            return [
                f,
                Object.assign(Object.assign({}, b), f && 'object' == typeof a ? a : null)
            ];
        }, [a]);
    }
}), c.register('HZUST', function(b, k) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = (a, b) => {
        const f = d.useRef(!1);
        d.useEffect(() => {
            f.current ? a() : f.current = !0;
        }, b);
    };
}), c.register('6bzge', function(k, l) {
    a(k.exports, 'default', function() {
        return j;
    }, function(a) {
        return j = a;
    });
    var d = c('VAIs1'),
        e = c('XNhMJ'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('nKxKm'),
        i = function(a, b) {
            var j = {};
            for (var k in a)
                Object.prototype.hasOwnProperty.call(a, k) && b.indexOf(k) < 0 && (j[k] = a[k]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var l = 0;
                for (k = Object.getOwnPropertySymbols(a); l < k.length; l++)
                    b.indexOf(k[l]) < 0 && Object.prototype.propertyIsEnumerable.call(a, k[l]) && (j[k[l]] = a[k[l]]);
            }
            return j;
        };
    var j = f.forwardRef((a, c) => {
        var {
            prefixCls: k,
            component: l = 'article',
            className: m,
            rootClassName: n,
            setContentRef: o,
            children: p,
            direction: q
        } = r, s = i(r, [
            'prefixCls',
            'component',
            'className',
            'rootClassName',
            'setContentRef',
            'children',
            'direction'
        ]);
        const {
            getPrefixCls: t,
            direction: u
        } = f.useContext(g.ConfigContext), v = null != q ? q : u;
        let w = x;
        o && (w = (0, e.composeRef)(x, o));
        const y = t('typography', k),
            [z, A] = (0, h.default)(y),
            B = b(d)(y, {
                [`${ y }-rtl`]: 'rtl' === v
            }, m, n, A);
        return z(f.createElement(l, Object.assign({
            className: B,
            ref: w
        }, s), p));
    });
}), c.register('isC6B', function(b, j) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8N2Yw'),
        e = c('iuJXj'),
        f = c('uPP4W');

    function g(a) {
        const h = typeof a;
        return 'string' === h || 'number' === h;
    }

    function h(a, b) {
        let i = 0;
        const j = [];
        for (let k = 0; k < a.length; k += 1) {
            if (i === b)
                return j;
            const l = a[k],
                m = i + (g(l) ? String(l).length : 1);
            if (m > b) {
                const n = b - i;
                return j.push(String(l).slice(0, n)), j;
            }
            j.push(l), i = m;
        }
        return a;
    }
    var i = a => {
        let {
            enabledMeasure: j,
            children: k,
            text: l,
            width: m,
            fontSize: n,
            rows: o,
            onEllipsis: p
        } = q;
        const [
            [r, s, t], u
        ] = f.useState([
            0,
            0,
            0
        ]), [v, w] = f.useState(0), [x, y] = f.useState(0), z = f.useRef(null), A = f.useRef(null), B = f.useMemo(() => (0, d.default)(l), [l]), C = f.useMemo(() => function(q) {
            let D = 0;
            return q.forEach(q => {
                g(q) ? D += String(q).length : D += 1;
            }), D;
        }(B), [B]), D = f.useMemo(() => j && 3 === v ? k(h(B, s), s < C) : k(B, !1), [
            j,
            v,
            k,
            B,
            s,
            C
        ]);
        (0, e.default)(() => {
            j && m && n && C && (w(1), u([
                0,
                Math.ceil(C / 2),
                C
            ]));
        }, [
            j,
            m,
            n,
            l,
            C,
            o
        ]), (0, e.default)(() => {
            var E;
            1 === v && y((null === (E = z.current) || void 0 === E ? void 0 : E.offsetHeight) || 0);
        }, [v]), (0, e.default)(() => {
            var E, F;
            if (x)
                if (1 === v) {
                    ((null === (E = A.current) || void 0 === E ? void 0 : E.offsetHeight) || 0) <= o * x ? (w(4), p(!1)) : w(2);
                } else if (2 === v)
                if (r !== t) {
                    const G = (null === (F = A.current) || void 0 === F ? void 0 : F.offsetHeight) || 0;
                    let H = I,
                        J = K;
                    I === K - 1 ? J = I : G <= o * x ? H = s : J = s;
                    const L = Math.ceil((H + J) / 2);
                    u([
                        H,
                        L,
                        J
                    ]);
                } else
                    w(3), p(!0);
        }, [
            v,
            r,
            t,
            o,
            x
        ]);
        const E = {
                width: m,
                whiteSpace: 'normal',
                margin: 0,
                padding: 0
            },
            F = (q, j, k) => f.createElement('span', {
                'aria-hidden': !0,
                ref: j,
                style: Object.assign({
                    position: 'fixed',
                    display: 'block',
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    fontSize: 2 * Math.floor(n / 2)
                }, k)
            }, q);
        return f.createElement(f.Fragment, null, D, j && 3 !== v && 4 !== v && f.createElement(f.Fragment, null, F('lg', z, {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap'
        }), 1 === v ? F(k(B, !1), A, E) : ((q, j) => {
            const G = h(B, q);
            return F(k(G, !0), j, E);
        })(s, A)));
    };
}), c.register('lWNiA', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('YfLmS');
    var f = a => {
        let {
            enabledEllipsis: g,
            isEllipsis: h,
            children: i,
            tooltipProps: j
        } = k;
        return (null == j ? void 0 : j.title) && g ? d.createElement(e.default, Object.assign({
            open: !!h && void 0
        }, j), i) : i;
    };
}), c.register('7ccNH', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('LOdPA');
    var f = d.forwardRef((a, b) => d.createElement(e.default, Object.assign({
        ref: b
    }, a, {
        component: 'div'
    })));
}), c.register('d4FVE', function(b, i) {
    a(b.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('xORK+'),
        e = c('uPP4W'),
        f = c('LOdPA'),
        g = function(a, b) {
            var h = {};
            for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && b.indexOf(i) < 0 && (h[i] = a[i]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var j = 0;
                for (i = Object.getOwnPropertySymbols(a); j < i.length; j++)
                    b.indexOf(i[j]) < 0 && Object.prototype.propertyIsEnumerable.call(a, i[j]) && (h[i[j]] = a[i[j]]);
            }
            return h;
        };
    const h = (a, b) => {
        var {
            ellipsis: i
        } = j, k = g(j, ['ellipsis']);
        const l = e.useMemo(() => i && 'object' == typeof i ? (0, d.default)(i, [
            'expandable',
            'rows'
        ]) : i, [i]);
        return e.createElement(f.default, Object.assign({
            ref: b
        }, k, {
            ellipsis: l,
            component: 'span'
        }));
    };
    var i = e.forwardRef(h);
}), c.register('PcM1o', function(b, h) {
    a(b.exports, 'default', function() {
        return h;
    }, function(a) {
        return h = a;
    });
    var d = c('uPP4W'),
        e = c('LOdPA'),
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        };
    const g = [
        1,
        2,
        3,
        4,
        5
    ];
    var h = d.forwardRef((a, b) => {
        const {
            level: i = 1
        } = j, k = f(j, ['level']);
        let l;
        return l = g.includes(i) ? `h${ i }` : 'h1', d.createElement(e.default, Object.assign({
            ref: b
        }, k, {
            component: l
        }));
    });
});