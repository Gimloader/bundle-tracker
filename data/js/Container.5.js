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
a.register('j2ADs', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    });
    var d = a('pl0U9'),
        e = a('G/2yg'),
        f = a('6M4M0'),
        g = a('YhmYG');
    const h = a('Zn6Hn').default;
    h.Text = f.default, h.Link = d.default, h.Title = g.default, h.Paragraph = e.default;
    var _i = h;
}), a.register('pl0U9', function(b, c) {
    _d(b.exports, 'default', function() {
        return _g;
    }, function(_d) {
        return _g = _d;
    });
    var d = a('LEQ5w'),
        e = a('IrO4K'),
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        };
    var _g = d.forwardRef((_d, b) => {
        var {
            ellipsis: h,
            rel: i
        } = _d, j = f(_d, [
            'ellipsis',
            'rel'
        ]);
        const k = Object.assign(Object.assign({}, j), {
            rel: void 0 === i && '_blank' === j.target ? 'noopener noreferrer' : i
        });
        return delete k.navigate, d.createElement(e.default, Object.assign({}, k, {
            ref: b,
            ellipsis: !!h,
            component: 'a'
        }));
    });
}), a.register('IrO4K', function(b, c) {
    _d(b.exports, 'default', function() {
        return _B;
    }, function(_d) {
        return _B = _d;
    });
    var d = a('CJCpN'),
        e = a('gn3Uk7'),
        f = a('GldUd7'),
        g = a('JrtKP'),
        h = a('2vhi1'),
        i = a('SbRBe'),
        j = a('Ug51y0'),
        k = a('/9ebL'),
        l = a('TTc70'),
        m = a('sWKBM'),
        n = a('gIJPx'),
        o = a('LEQ5w'),
        p = a('1P5ls'),
        q = a('B9b0M'),
        r = a('uomOU'),
        s = a('3qwJF'),
        t = a('ijg0s'),
        u = a('y7eP/'),
        v = a('uxqHe'),
        w = a('xY5oR'),
        x = a('Zn6Hn'),
        y = a('QSxRn'),
        z = a('eurqo'),
        A = function(B, C) {
            var D = {};
            for (var E in B)
                Object.prototype.hasOwnProperty.call(B, E) && C.indexOf(E) < 0 && (D[E] = B[E]);
            if (null != B && 'function' == typeof Object.getOwnPropertySymbols) {
                var F = 0;
                for (E = Object.getOwnPropertySymbols(B); F < E.length; F++)
                    C.indexOf(E[F]) < 0 && Object.prototype.propertyIsEnumerable.call(B, E[F]) && (D[E[F]] = B[E[F]]);
            }
            return D;
        };

    function B(C, D, E) {
        return !0 === C || void 0 === C ? D : C || E && D;
    }

    function B(C) {
        return !1 === C ? [
            !1,
            !1
        ] : Array.isArray(C) ? C : [C];
    }
    var _B = o.forwardRef((_db, a) => {
        var C, D, E;
        const {
            prefixCls: F,
            className: G,
            style: H,
            type: I,
            disabled: J,
            children: K,
            ellipsis: L,
            editable: M,
            copyable: N,
            component: O,
            title: P
        } = _db, Q = A(_db, [
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
            getPrefixCls: R,
            direction: S
        } = o.useContext(p.ConfigContext), T = (0, q.useLocaleReceiver)('Text')[0], U = o.useRef(null), V = o.useRef(null), W = R('typography', F), X = (0, m.default)(Q, [
            'mark',
            'code',
            'delete',
            'underline',
            'strong',
            'keyboard',
            'italic'
        ]), [Y, Z] = (0, v.default)(M), [$, ab] = (0, l.default)(!1, {
            value: Z.editing
        }), {
            triggerType: bb = ['icon']
        } = Z, cb = _db => {
            var db;
            _db && (null === (db = Z.onStart) || void 0 === db || db.call(Z)), ab(_db);
        };
        (0, w.default)(() => {
            var _db;
            $ || null === (_db = V.current) || void 0 === _db || _db.focus();
        }, [$]);
        const db = _Nb => {
                null == _Nb || _Nb.preventDefault(), cb(!0);
            },
            [eb, fb] = (0, v.default)(N),
            [gb, hb] = o.useState(!1),
            ib = o.useRef(),
            jb = {};
        fb.format && (jb.format = fb.format);
        const kb = () => {
                window.clearTimeout(ib.current);
            },
            lb = _Nb => {
                var mb;
                null == _Nb || _Nb.preventDefault(), null == _Nb || _Nb.stopPropagation(), _Ib(h)(fb.text || String(K) || '', jb), hb(!0), kb(), ib.current = window.setTimeout(() => {
                    hb(!1);
                }, 3000), null === (mb = fb.onCopy) || void 0 === mb || mb.call(fb, _Nb);
            };
        o.useEffect(() => kb, []);
        const [mb, nb] = o.useState(!1), [ob, pb] = o.useState(!1), [qb, rb] = o.useState(!1), [sb, tb] = o.useState(!1), [ub, vb] = o.useState(!1), [wb, xb] = o.useState(!0), [yb, zb] = (0, v.default)(L, {
            expandable: !1
        }), Ab = yb && !qb, {
            rows: Bb = 1
        } = zb, Cb = o.useMemo(() => !Ab || void 0 !== zb.suffix || zb.onEllipsis || zb.expandable || Y || eb, [
            Ab,
            zb,
            Y,
            eb
        ]);
        (0, k.default)(() => {
            yb && !Cb && (nb((0, s.isStyleSupport)('webkitLineClamp')), pb((0, s.isStyleSupport)('textOverflow')));
        }, [
            Cb,
            yb
        ]);
        const Db = o.useMemo(() => !Cb && (1 === Bb ? ob : mb), [
                Cb,
                ob,
                mb
            ]),
            Eb = Ab && (Db ? ub : sb),
            Fb = Ab && 1 === Bb && Db,
            Gb = Ab && Bb > 1 && Db,
            Hb = _Nb => {
                var _Ib;
                rb(!0), null === (_Ib = zb.onExpand) || void 0 === _Ib || _Ib.call(zb, _Nb);
            },
            [Ib, Jb] = o.useState(0),
            [Kb, Lb] = o.useState(0),
            Mb = _Nb => {
                var Nb;
                tb(_Nb), sb !== _Nb && (null === (Nb = zb.onEllipsis) || void 0 === Nb || Nb.call(zb, _Nb));
            };
        o.useEffect(() => {
            const _Nb = U.current;
            if (yb && Db && _Nb) {
                const Ob = Gb ? _Nb.offsetHeight < _Nb.scrollHeight : _Nb.offsetWidth < _Nb.scrollWidth;
                ub !== Ob && vb(Ob);
            }
        }, [
            yb,
            Db,
            K,
            Gb,
            wb
        ]), o.useEffect(() => {
            const Nb = U.current;
            if ('undefined' == typeof IntersectionObserver || !Nb || !Db || !Ab)
                return;
            const Ob = new IntersectionObserver(() => {
                xb(!!Nb.offsetParent);
            });
            return Ob.observe(Nb), () => {
                Ob.disconnect();
            };
        }, [
            Db,
            Ab
        ]);
        let Nb = {};
        Nb = !0 === zb.tooltip ? {
            title: null !== (C = Z.text) && void 0 !== C ? C : K
        } : o.isValidElement(zb.tooltip) ? {
            title: zb.tooltip
        } : 'object' == typeof zb.tooltip ? Object.assign({
            title: null !== (D = Z.text) && void 0 !== D ? D : K
        }, zb.tooltip) : {
            title: zb.tooltip
        };
        const Ob = o.useMemo(() => {
            const Pb = Pb => [
                'string',
                'number'
            ].includes(typeof Pb);
            if (yb && !Db)
                return Pb(Z.text) ? Z.text : Pb(K) ? K : Pb(P) ? P : Pb(Nb.title) ? Nb.title : void 0;
        }, [
            yb,
            Db,
            P,
            Nb.title,
            Eb
        ]);
        if ($)
            return o.createElement(u.default, {
                value: null !== (E = Z.text) && void 0 !== E ? E : 'string' == typeof K ? K : '',
                onSave: _Pb => {
                    var Pb;
                    null === (Pb = Z.onChange) || void 0 === Pb || Pb.call(Z, _Pb), cb(!1);
                },
                onCancel: () => {
                    var _Pb;
                    null === (_Pb = Z.onCancel) || void 0 === _Pb || _Pb.call(Z), cb(!1);
                },
                onEnd: Z.onEnd,
                prefixCls: W,
                className: G,
                style: H,
                direction: S,
                component: O,
                maxLength: Z.maxLength,
                autoSize: Z.autoSize,
                enterIcon: Z.enterIcon
            });
        const Pb = () => {
                const {
                    expandable: Qb,
                    symbol: Rb
                } = zb;
                if (!Qb)
                    return null;
                let Sb;
                return Sb = Rb || T.expand, o.createElement('a', {
                    key: 'expand',
                    className: `${ W }-expand`,
                    onClick: Hb,
                    'aria-label': T.expand
                }, Sb);
            },
            Qb = () => {
                if (!Y)
                    return;
                const {
                    icon: Rb,
                    tooltip: Sb
                } = Z, Tb = (0, j.default)(Sb)[0] || T.edit, Ub = 'string' == typeof Tb ? Tb : '';
                return bb.includes('icon') ? o.createElement(t.default, {
                    key: 'edit',
                    title: !1 === Sb ? '' : Tb
                }, o.createElement(r.default, {
                    ref: V,
                    className: `${ W }-edit`,
                    onClick: db,
                    'aria-label': Ub
                }, Rb || o.createElement(f.default, {
                    role: 'button'
                }))) : null;
            },
            Rb = () => {
                if (!eb)
                    return;
                const {
                    tooltips: Sb,
                    icon: Tb
                } = fb, Ub = _G(Sb), Vb = _G(Tb), Wb = gb ? _F(Ub[1], T.copied) : _F(Ub[0], T.copy), Xb = gb ? T.copied : T.copy, Yb = 'string' == typeof Wb ? Wb : Xb;
                return o.createElement(t.default, {
                    key: 'copy',
                    title: Wb
                }, o.createElement(r.default, {
                    className: _Vb(g)(`${ W }-copy`, gb && `${ W }-copy-success`),
                    onClick: lb,
                    'aria-label': Yb
                }, gb ? _F(Vb[1], o.createElement(d.default, null), !0) : _F(Vb[0], o.createElement(e.default, null), !0)));
            };
        return o.createElement(i.default, {
            onResize: (_Ub, _Vb) => {
                let {
                    offsetWidth: Sb
                } = _Ub;
                var Tb;
                Jb(Sb), Lb(parseInt(null === (Tb = window.getComputedStyle) || void 0 === Tb ? void 0 : Tb.call(window, _Vb).fontSize, 10) || 0);
            },
            disabled: !Ab || Db
        }, C => o.createElement(z.default, {
            tooltipProps: Nb,
            enabledEllipsis: Ab,
            isEllipsis: Eb
        }, o.createElement(x.default, Object.assign({
            className: _Vb(g)({
                [`${ W }-${ I }`]: I,
                [`${ W }-disabled`]: J,
                [`${ W }-ellipsis`]: yb,
                [`${ W }-single-line`]: Ab && 1 === Bb,
                [`${ W }-ellipsis-single-line`]: Fb,
                [`${ W }-ellipsis-multiple-line`]: Gb
            }, G),
            prefixCls: F,
            style: Object.assign(Object.assign({}, H), {
                WebkitLineClamp: Gb ? Bb : void 0
            }),
            component: O,
            ref: (0, n.composeRef)(C, U, a),
            direction: S,
            onClick: bb.includes('text') ? db : void 0,
            'aria-label': null == Ob ? void 0 : Ob.toString(),
            title: P
        }, X), o.createElement(y.default, {
            enabledMeasure: Ab && !Db,
            text: K,
            rows: Bb,
            width: Ib,
            fontSize: Kb,
            onEllipsis: Mb
        }, (_Vb, a) => {
            let Sb = _Vb;
            _Vb.length && a && Ob && (Sb = o.createElement('span', {
                key: 'show-content',
                'aria-hidden': !0
            }, Sb));
            const Tb = function(_Ub, _Vb) {
                let {
                    mark: Wb,
                    code: Xb,
                    underline: Yb,
                    delete: Zb,
                    strong: $b,
                    keyboard: ac,
                    italic: bc
                } = _Ub, cc = _Vb;

                function dc(ec, fc) {
                    fc && (cc = o.createElement(ec, {}, cc));
                }
                return i('strong', $b), i('u', Yb), i('del', Zb), i('code', Xb), i('mark', Wb), i('kbd', ac), i('i', bc), cc;
            }(_b, o.createElement(o.Fragment, null, Sb, (_b => {
                return [
                    _b && o.createElement('span', {
                        'aria-hidden': !0,
                        key: 'ellipsis'
                    }, '...'),
                    zb.suffix,
                    (_Ub = _b, [
                        _Ub && Pb(),
                        Qb(),
                        Rb()
                    ])
                ];
                var _Ub;
            })(a)));
            return Tb;
        }))));
    });
}), a.register('2vhi1', function(_b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('SbRBe', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('JXsbl0'),
        e = a('LEQ5w'),
        f = a('Ug51y0');
    a('4/rzN');
    var g = a('4OqaH'),
        h = a('wh0ZA');

    function i(_j) {
        var k = _j.children;
        return ('function' == typeof k ? [k] : (0, f.default)(k)).map(function(l, m) {
            var n = (null == l ? void 0 : l.key) || ''.concat('rc-observer-key', '-').concat(m);
            return e.createElement(g.default, (0, d.default)({}, _j, {
                key: n
            }), l);
        });
    }
    _i.Collection = h.Collection;
    var _i = _i;
}), a.register('JXsbl0', function(b, c) {
    function d() {
        return d = Object.assign ? Object.assign.bind() : function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _l(b.exports, 'default', function() {
        return _c;
    });
}), a.register('4OqaH', function(b, _c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('Tjqx6'),
        e = a('gIJPx'),
        f = a('LEQ5w'),
        g = a('FfsX82'),
        h = a('W2b8A0'),
        _i = a('0nPlF'),
        j = a('wh0ZA');

    function _k(_l) {
        var m = _l.children,
            n = _l.disabled,
            o = f.useRef(null),
            p = f.useRef(null),
            q = f.useContext(j.CollectionContext),
            r = 'function' == typeof m,
            s = r ? m(o) : m,
            t = f.useRef({
                width: -1,
                height: -1,
                offsetWidth: -1,
                offsetHeight: -1
            }),
            u = !r && f.isValidElement(s) && (0, e.supportRef)(s),
            v = u ? s.ref : null,
            w = f.useMemo(function() {
                return (0, e.composeRef)(v, o);
            }, [
                v,
                o
            ]),
            x = f.useRef(_l);
        x.current = _l;
        var y = f.useCallback(function(z) {
            var A = x.current,
                B = A.onResize,
                C = A.data,
                D = z.getBoundingClientRect(),
                E = D.width,
                F = D.height,
                G = z.offsetWidth,
                H = z.offsetHeight,
                I = Math.floor(E),
                J = Math.floor(F);
            if (t.current.width !== I || t.current.height !== J || t.current.offsetWidth !== G || t.current.offsetHeight !== H) {
                var K = {
                    width: I,
                    height: J,
                    offsetWidth: G,
                    offsetHeight: H
                };
                t.current = K;
                var L = G === Math.round(E) ? E : G,
                    M = H === Math.round(F) ? F : H,
                    N = (0, d.default)((0, d.default)({}, K), {}, {
                        offsetWidth: L,
                        offsetHeight: M
                    });
                null == q || q(N, z, C), B && Promise.resolve().then(function() {
                    B(N, z);
                });
            }
        }, []);
        return f.useEffect(function() {
            var z = (0, g.default)(o.current) || (0, g.default)(p.current);
            return z && !n && (0, h.observe)(z, y),
                function() {
                    return (0, h.unobserve)(z, y);
                };
        }, [
            o.current,
            n
        ]), f.createElement(_i.default, {
            ref: p
        }, u ? f.cloneElement(s, {
            ref: w
        }) : s);
    }
}), a.register('Tjqx6', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('HzJHa');

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
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HzJHa', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('DS3h3');

    function _e(_f, g, h) {
        return (g = (0, d.default)(g)) in _f ? Object.defineProperty(_f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _f[g] = h, _f;
    }
}), a.register('W2b8A0', function(b, c) {
    _g(b.exports, 'observe', function() {
        return _g;
    }), _g(b.exports, 'unobserve', function() {
        return _g;
    });
    var d = a('iIbRn'),
        e = new Map();
    var f = new(0, d.default)(function(_g) {
        _g.forEach(function(h) {
            var i, j = h.target;
            null === (i = e.get(j)) || void 0 === i || i.forEach(function(k) {
                return k(j);
            });
        });
    });

    function _g(h, i) {
        e.has(h) || (e.set(h, new Set()), f.observe(h)), e.get(h).add(i);
    }

    function _g(h, i) {
        e.has(h) && (e.get(h).delete(i), e.get(h).size || (f.unobserve(h), e.delete(h)));
    }
}), a.register('0nPlF', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('m9sL6'),
        e = a('FHOLP'),
        f = a('RL9uH'),
        g = a('6fsqA'),
        _h = function(_i) {
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
        }(a('LEQ5w').Component);
}), a.register('wh0ZA', function(b, c) {
    _g(b.exports, 'CollectionContext', function() {
        return _e;
    }), _g(b.exports, 'Collection', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        _e = d.createContext(null);

    function _f(_g) {
        var h = _g.children,
            i = _g.onBatchResize,
            j = d.useRef(0),
            k = d.useRef([]),
            l = d.useContext(_e),
            m = d.useCallback(function(n, o, p) {
                j.current += 1;
                var q = j.current;
                k.current.push({
                    size: n,
                    element: o,
                    data: p
                }), Promise.resolve().then(function() {
                    q === j.current && (null == i || i(k.current), k.current = []);
                }), null == l || l(n, o, p);
            }, [
                i,
                l
            ]);
        return d.createElement(_e.Provider, {
            value: m
        }, h);
    }
}), a.register('uomOU', function(b, c) {
    _d(b.exports, 'default', function() {
        return _h;
    }, function(_d) {
        return _h = _d;
    });
    var d = a('qBGaA0'),
        e = a('LEQ5w'),
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        };
    const g = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block'
    };
    var _h = e.forwardRef((_D, b) => {
        const {
            style: i,
            noStyle: j,
            disabled: k
        } = _D, l = f(_D, [
            'style',
            'noStyle',
            'disabled'
        ]);
        let m = {};
        return j || (m = Object.assign({}, g)), k && (m.pointerEvents = 'none'), m = Object.assign(Object.assign({}, m), i), e.createElement('div', Object.assign({
            role: 'button',
            tabIndex: 0,
            ref: b
        }, l, {
            onKeyDown: _D => {
                const {
                    keyCode: n
                } = _D;
                n === d.default.ENTER && _D.preventDefault();
            },
            onKeyUp: b => {
                const {
                    keyCode: n
                } = b, {
                    onClick: o
                } = _D;
                n === d.default.ENTER && o && o();
            },
            style: m
        }));
    });
}), a.register('y7eP/', function(b, c) {
    _D(b.exports, 'default', function() {
        return _k;
    });
    var d = a('mfp3D'),
        e = a('JrtKP'),
        f = a('qBGaA0'),
        g = a('LEQ5w'),
        h = a('1S3ni'),
        i = a('CMcLV'),
        j = a('W0OII');
    var _k = _D => {
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
        } = _D;
        const y = g.useRef(null),
            z = g.useRef(!1),
            A = g.useRef(),
            [B, C] = g.useState(s);
        g.useEffect(() => {
            C(s);
        }, [s]), g.useEffect(() => {
            if (y.current && y.current.resizableTextArea) {
                const {
                    textArea: _D
                } = y.current.resizableTextArea;
                _D.focus();
                const {
                    length: E
                } = _D.value;
                _D.setSelectionRange(E, E);
            }
        }, []);
        const D = () => {
                t(B.trim());
            },
            E = w ? `${ l }-${ w }` : '',
            [_F, _G] = (0, j.default)(l),
            H = _I(e)(l, `${ l }-edit-content`, {
                [`${ l }-rtl`]: 'rtl' === p
            }, n, E, _G);
        return _F(g.createElement('div', {
            className: H,
            style: o
        }, g.createElement(h.default, {
            ref: y,
            maxLength: q,
            value: B,
            onChange: _f => {
                let {
                    target: _I
                } = _f;
                C(_I.value.replace(/[\n\r]/g, ''));
            },
            onKeyDown: _f => {
                let {
                    keyCode: I
                } = _f;
                z.current || (A.current = I);
            },
            onKeyUp: _f => {
                let {
                    keyCode: I,
                    ctrlKey: J,
                    altKey: K,
                    metaKey: L,
                    shiftKey: M
                } = _f;
                A.current !== I || z.current || J || K || L || M || (I === f.default.ENTER ? (D(), null == v || v()) : I === f.default.ESC && u());
            },
            onCompositionStart: () => {
                z.current = !0;
            },
            onCompositionEnd: () => {
                z.current = !1;
            },
            onBlur: () => {
                D();
            },
            'aria-label': m,
            rows: 1,
            autoSize: r
        }), null !== x ? (0, i.cloneElement)(x, {
            className: `${ l }-edit-content-confirm`
        }) : null));
    };
}), a.register('W0OII', function(b, c) {
    _f(b.exports, 'default', function() {
        return _h;
    });
    var d = a('XC0UB'),
        e = a('CvnTG'),
        f = a('PkLoT');
    const g = _f => {
        const {
            componentCls: h,
            sizeMarginHeadingVerticalStart: i
        } = _f;
        return {
            [h]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: _f.colorText,
                wordBreak: 'break-word',
                lineHeight: _f.lineHeight,
                [`&${ h }-secondary`]: {
                    color: _f.colorTextDescription
                },
                [`&${ h }-success`]: {
                    color: _f.colorSuccess
                },
                [`&${ h }-warning`]: {
                    color: _f.colorWarning
                },
                [`&${ h }-danger`]: {
                    color: _f.colorError,
                    'a&:active, a&:focus': {
                        color: _f.colorErrorActive
                    },
                    'a&:hover': {
                        color: _f.colorErrorHover
                    }
                },
                [`&${ h }-disabled`]: {
                    color: _f.colorTextDisabled,
                    cursor: 'not-allowed',
                    userSelect: 'none'
                },
                '\n        div&,\n        p\n      ': {
                    marginBottom: '1em'
                }
            }, (0, e.getTitleStyles)(_f)), {
                [`\n      & + h1${ h },\n      & + h2${ h },\n      & + h3${ h },\n      & + h4${ h },\n      & + h5${ h }\n      `]: {
                    marginTop: i
                },
                '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5': {
                    '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ': {
                        marginTop: i
                    }
                }
            }), (0, e.getResetStyles)(_f)), (0, e.getLinkStyles)(_f)), {
                [`\n        ${ h }-expand,\n        ${ h }-edit,\n        ${ h }-copy\n      `]: Object.assign(Object.assign({}, (0, f.operationUnit)(_f)), {
                    marginInlineStart: _f.marginXXS
                })
            }), (0, e.getEditableStyles)(_f)), (0, e.getCopiableStyles)(_f)), (0, e.getEllipsisStyles)()), {
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        };
    };
    var _h = (0, d.default)('Typography', _f => [g(_f)], {
        sizeMarginHeadingVerticalStart: '1.2em',
        sizeMarginHeadingVerticalEnd: '0.5em'
    });
}), a.register('CvnTG', function(b, c) {
    _f(b.exports, 'getTitleStyles', function() {
        return _g;
    }), _f(b.exports, 'getLinkStyles', function() {
        return _h;
    }), _f(b.exports, 'getResetStyles', function() {
        return _i;
    }), _f(b.exports, 'getEditableStyles', function() {
        return _j;
    }), _f(b.exports, 'getCopiableStyles', function() {
        return _k;
    }), _f(b.exports, 'getEllipsisStyles', function() {
        return _l;
    });
    var d = a('nTgJo'),
        e = a('w/CSV'),
        f = a('PkLoT');
    const _g = _f => {
            const h = {};
            return [
                1,
                2,
                3,
                4,
                5
            ].forEach(a => {
                h[`\n      h${ a }&,\n      div&-h${ a },\n      div&-h${ a } > textarea,\n      h${ a }\n    `] = ((_f, h, a, c) => {
                    const {
                        sizeMarginHeadingVerticalEnd: i,
                        fontWeightStrong: j
                    } = c;
                    return {
                        marginBottom: i,
                        color: a,
                        fontWeight: j,
                        fontSize: _f,
                        lineHeight: h
                    };
                })(_f[`fontSizeHeading${ a }`], _f[`lineHeightHeading${ a }`], _f.colorTextHeading, _f);
            }), h;
        },
        _h = _f => {
            const {
                componentCls: i
            } = _f;
            return {
                'a&, a': Object.assign(Object.assign({}, (0, f.operationUnit)(_f)), {
                    textDecoration: _f.linkDecoration,
                    '&:active, &:hover': {
                        textDecoration: _f.linkHoverDecoration
                    },
                    [`&[disabled], &${ i }-disabled`]: {
                        color: _f.colorTextDisabled,
                        cursor: 'not-allowed',
                        '&:active, &:hover': {
                            color: _f.colorTextDisabled
                        },
                        '&:active': {
                            pointerEvents: 'none'
                        }
                    }
                })
            };
        },
        _i = _f => ({
            code: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.2em 0.1em',
                fontSize: '85%',
                fontFamily: _f.fontFamilyCode,
                background: 'rgba(150, 150, 150, 0.1)',
                border: '1px solid rgba(100, 100, 100, 0.2)',
                borderRadius: 3
            },
            kbd: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.15em 0.1em',
                fontSize: '90%',
                fontFamily: _f.fontFamilyCode,
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
                fontFamily: _f.fontFamilyCode,
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
        _j = _f => {
            const {
                componentCls: k
            } = _f, l = (0, e.initInputToken)(_f).inputPaddingVertical + 1;
            return {
                '&-edit-content': {
                    position: 'relative',
                    'div&': {
                        insetInlineStart: -_f.paddingSM,
                        marginTop: -l,
                        marginBottom: `calc(1em - ${ l }px)`
                    },
                    [`${ k }-edit-content-confirm`]: {
                        position: 'absolute',
                        insetInlineEnd: _f.marginXS + 2,
                        insetBlockEnd: _f.marginXS,
                        color: _f.colorTextDescription,
                        fontWeight: 'normal',
                        fontSize: _f.fontSize,
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
        _k = _f => ({
            '&-copy-success': {
                '\n    &,\n    &:hover,\n    &:focus': {
                    color: _f.colorSuccess
                }
            }
        }),
        _l = () => ({
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
}), a.register('uxqHe', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g) {
        return d.useMemo(() => {
            const h = !!_f;
            return [
                h,
                Object.assign(Object.assign({}, g), h && 'object' == typeof _f ? _f : null)
            ];
        }, [_f]);
    }
}), a.register('xY5oR', function(b, c) {
    _d(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = (_d, b) => {
        const f = d.useRef(!1);
        d.useEffect(() => {
            f.current ? _d() : f.current = !0;
        }, b);
    };
}), a.register('Zn6Hn', function(b, c) {
    _d(b.exports, 'default', function() {
        return _j;
    }, function(_d) {
        return _j = _d;
    });
    var d = a('JrtKP'),
        e = a('gIJPx'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('W0OII'),
        i = function(j, k) {
            var l = {};
            for (var m in j)
                Object.prototype.hasOwnProperty.call(j, m) && k.indexOf(m) < 0 && (l[m] = j[m]);
            if (null != j && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(j); n < m.length; n++)
                    k.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(j, m[n]) && (l[m[n]] = j[m[n]]);
            }
            return l;
        };
    var _j = f.forwardRef((_h, a) => {
        var {
            prefixCls: k,
            component: l = 'article',
            className: m,
            rootClassName: n,
            setContentRef: o,
            children: p,
            direction: q
        } = _h, r = i(_h, [
            'prefixCls',
            'component',
            'className',
            'rootClassName',
            'setContentRef',
            'children',
            'direction'
        ]);
        const {
            getPrefixCls: s,
            direction: t
        } = f.useContext(g.ConfigContext), u = null != q ? q : t;
        let v = a;
        o && (v = (0, e.composeRef)(a, o));
        const w = s('typography', k),
            [x, y] = (0, h.default)(w),
            z = _b(d)(w, {
                [`${ w }-rtl`]: 'rtl' === u
            }, m, n, y);
        return x(f.createElement(l, Object.assign({
            className: z,
            ref: v
        }, r), p));
    });
}), a.register('QSxRn', function(_b, c) {
    _h(_b.exports, 'default', function() {
        return _g;
    });
    var d = a('Ug51y0'),
        e = a('/9ebL'),
        f = a('LEQ5w');

    function g(_h) {
        const i = typeof _h;
        return 'string' === i || 'number' === i;
    }

    function g(h, i) {
        let j = 0;
        const k = [];
        for (let l = 0; l < h.length; l += 1) {
            if (j === i)
                return k;
            const m = h[l],
                n = j + (_g(m) ? String(m).length : 1);
            if (n > i) {
                const o = i - j;
                return k.push(String(m).slice(0, o)), k;
            }
            k.push(m), j = n;
        }
        return h;
    }
    var _g = _A => {
        let {
            enabledMeasure: h,
            children: i,
            text: j,
            width: k,
            fontSize: l,
            rows: m,
            onEllipsis: n
        } = _A;
        const [
            [o, p, q], r
        ] = f.useState([
            0,
            0,
            0
        ]), [s, t] = f.useState(0), [u, v] = f.useState(0), w = f.useRef(null), x = f.useRef(null), y = f.useMemo(() => (0, d.default)(j), [j]), z = f.useMemo(() => function(_A) {
            let B = 0;
            return _A.forEach(_A => {
                _g(_A) ? B += String(_A).length : B += 1;
            }), B;
        }(y), [y]), A = f.useMemo(() => h && 3 === s ? i(_h(y, p), p < z) : i(y, !1), [
            h,
            s,
            i,
            y,
            p,
            z
        ]);
        (0, e.default)(() => {
            h && k && l && z && (t(1), r([
                0,
                Math.ceil(z / 2),
                z
            ]));
        }, [
            h,
            k,
            l,
            j,
            z,
            m
        ]), (0, e.default)(() => {
            var B;
            1 === s && v((null === (B = w.current) || void 0 === B ? void 0 : B.offsetHeight) || 0);
        }, [s]), (0, e.default)(() => {
            var B, C;
            if (u)
                if (1 === s) {
                    ((null === (B = x.current) || void 0 === B ? void 0 : B.offsetHeight) || 0) <= m * u ? (t(4), n(!1)) : t(2);
                } else if (2 === s)
                if (o !== q) {
                    const D = (null === (C = x.current) || void 0 === C ? void 0 : C.offsetHeight) || 0;
                    let E = o,
                        F = q;
                    o === q - 1 ? F = o : D <= m * u ? E = p : F = p;
                    const G = Math.ceil((E + F) / 2);
                    r([
                        E,
                        G,
                        F
                    ]);
                } else
                    t(3), n(!0);
        }, [
            s,
            o,
            q,
            m,
            u
        ]);
        const B = {
                width: k,
                whiteSpace: 'normal',
                margin: 0,
                padding: 0
            },
            C = (_d, h, i) => f.createElement('span', {
                'aria-hidden': !0,
                ref: h,
                style: Object.assign({
                    position: 'fixed',
                    display: 'block',
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    fontSize: 2 * Math.floor(l / 2)
                }, i)
            }, _d);
        return f.createElement(f.Fragment, null, A, h && 3 !== s && 4 !== s && f.createElement(f.Fragment, null, C('lg', w, {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap'
        }), 1 === s ? C(i(y, !1), x, B) : ((_d, h) => {
            const D = _h(y, _d);
            return C(i(D, !0), h, B);
        })(p, x)));
    };
}), a.register('eurqo', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ijg0s');
    var _f = _d => {
        let {
            enabledEllipsis: g,
            isEllipsis: h,
            children: i,
            tooltipProps: j
        } = _d;
        return (null == j ? void 0 : j.title) && g ? d.createElement(e.default, Object.assign({
            open: !!h && void 0
        }, j), i) : i;
    };
}), a.register('G/2yg', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('IrO4K');
    var _f = d.forwardRef((_d, b) => d.createElement(e.default, Object.assign({
        ref: b
    }, _d, {
        component: 'div'
    })));
}), a.register('6M4M0', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('sWKBM'),
        e = a('LEQ5w'),
        f = a('IrO4K'),
        _g = function(h, i) {
            var j = {};
            for (var k in h)
                Object.prototype.hasOwnProperty.call(h, k) && i.indexOf(k) < 0 && (j[k] = h[k]);
            if (null != h && 'function' == typeof Object.getOwnPropertySymbols) {
                var l = 0;
                for (k = Object.getOwnPropertySymbols(h); l < k.length; l++)
                    i.indexOf(k[l]) < 0 && Object.prototype.propertyIsEnumerable.call(h, k[l]) && (j[k[l]] = h[k[l]]);
            }
            return j;
        };
    const _h = (_d, b) => {
        var {
            ellipsis: i
        } = _d, j = _g(_d, ['ellipsis']);
        const k = e.useMemo(() => i && 'object' == typeof i ? (0, d.default)(i, [
            'expandable',
            'rows'
        ]) : i, [i]);
        return e.createElement(f.default, Object.assign({
            ref: b
        }, j, {
            ellipsis: k,
            component: 'span'
        }));
    };
    var _i = e.forwardRef(_h);
}), a.register('YhmYG', function(b, c) {
    _d(b.exports, 'default', function() {
        return _h;
    }, function(_d) {
        return _h = _d;
    });
    var d = a('LEQ5w'),
        e = a('IrO4K'),
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        };
    const g = [
        1,
        2,
        3,
        4,
        5
    ];
    var _h = d.forwardRef((e, b) => {
        const {
            level: i = 1
        } = e, j = f(e, ['level']);
        let k;
        return k = g.includes(i) ? `h${ i }` : 'h1', d.createElement(e.default, Object.assign({
            ref: b
        }, j, {
            component: k
        }));
    });
});