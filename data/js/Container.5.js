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
c.register('22RS1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('K7/SU'),
        g = c('x+JYQ'),
        h = c('OtnRx'),
        i = c('JsyqD');
    const j = c('69LNl').default;
    j.Text = h.default, j.Link = f.default, j.Title = i.default, j.Paragraph = g.default;
    var _k = j;
}), c.register('K7/SU', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    }, function(f) {
        return _i = f;
    });
    var f = c('O0Kav'),
        g = c('RHQU4'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = f.forwardRef((a, d) => {
        var {
            ellipsis: j,
            rel: k
        } = a, l = h(a, [
            'ellipsis',
            'rel'
        ]);
        const m = Object.assign(Object.assign({}, l), {
            rel: void 0 === k && '_blank' === l.target ? 'noopener noreferrer' : k
        });
        return delete m.navigate, f.createElement(g.default, Object.assign({}, m, {
            ref: d,
            ellipsis: !!j,
            component: 'a'
        }));
    });
}), c.register('RHQU4', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    }, function(f) {
        return _F = f;
    });
    var f = c('BA14D'),
        g = c('rLQJQ7'),
        h = c('+Nyqr7'),
        i = c('/U36/'),
        j = c('UInjt'),
        k = c('7MsAZ'),
        l = c('6E2xk1'),
        m = c('I3pjj'),
        n = c('MsxQz'),
        o = c('Kpy/B'),
        p = c('bvyc2'),
        q = c('O0Kav'),
        r = c('R2nG3'),
        s = c('oyXif'),
        t = c('jveSa'),
        u = c('q1K94'),
        v = c('Dn89R'),
        w = c('Lpn2M'),
        x = c('N70Yt'),
        y = c('dKKt8'),
        z = c('69LNl'),
        A = c('Lh378'),
        B = c('5Fqoh'),
        C = function(D, E) {
            var F = {};
            for (var G in D)
                Object.prototype.hasOwnProperty.call(D, G) && E.indexOf(G) < 0 && (F[G] = D[G]);
            if (null != D && 'function' == typeof Object.getOwnPropertySymbols) {
                var H = 0;
                for (G = Object.getOwnPropertySymbols(D); H < G.length; H++)
                    E.indexOf(G[H]) < 0 && Object.prototype.propertyIsEnumerable.call(D, G[H]) && (F[G[H]] = D[G[H]]);
            }
            return F;
        };

    function D(E, F, G) {
        return !0 === E || void 0 === E ? F : E || G && F;
    }

    function E(F) {
        return !1 === F ? [
            !1,
            !1
        ] : Array.isArray(F) ? F : [F];
    }
    var _F = q.forwardRef((a, c) => {
        var G, H, I;
        const {
            prefixCls: J,
            className: K,
            style: L,
            type: M,
            disabled: N,
            children: O,
            ellipsis: P,
            editable: Q,
            copyable: R,
            component: S,
            title: T
        } = a, U = C(a, [
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
            getPrefixCls: V,
            direction: W
        } = q.useContext(r.ConfigContext), X = (0, s.useLocaleReceiver)('Text')[0], Y = q.useRef(null), Z = q.useRef(null), $ = V('typography', J), ab = (0, o.default)(U, [
            'mark',
            'code',
            'delete',
            'underline',
            'strong',
            'keyboard',
            'italic'
        ]), [bb, cb] = (0, x.default)(Q), [db, eb] = (0, n.default)(!1, {
            value: cb.editing
        }), {
            triggerType: fb = ['icon']
        } = cb, gb = a => {
            var hb;
            a && (null === (hb = cb.onStart) || void 0 === hb || hb.call(cb)), eb(a);
        };
        (0, y.default)(() => {
            var hb;
            db || null === (hb = Z.current) || void 0 === hb || hb.focus();
        }, [db]);
        const hb = a => {
                null == a || a.preventDefault(), gb(!0);
            },
            [ib, jb] = (0, x.default)(R),
            [kb, lb] = q.useState(!1),
            mb = q.useRef(),
            nb = {};
        jb.format && (nb.format = jb.format);
        const ob = () => {
                window.clearTimeout(mb.current);
            },
            pb = a => {
                var qb;
                null == a || a.preventDefault(), null == a || a.stopPropagation(), b(j)(jb.text || String(O) || '', nb), lb(!0), ob(), mb.current = window.setTimeout(() => {
                    lb(!1);
                }, 3000), null === (qb = jb.onCopy) || void 0 === qb || qb.call(jb, a);
            };
        q.useEffect(() => ob, []);
        const [qb, rb] = q.useState(!1), [sb, tb] = q.useState(!1), [ub, vb] = q.useState(!1), [wb, xb] = q.useState(!1), [yb, zb] = q.useState(!1), [Ab, Bb] = q.useState(!0), [Cb, Db] = (0, x.default)(P, {
            expandable: !1
        }), Eb = Cb && !ub, {
            rows: Fb = 1
        } = Db, Gb = q.useMemo(() => !Eb || void 0 !== Db.suffix || Db.onEllipsis || Db.expandable || bb || ib, [
            Eb,
            Db,
            bb,
            ib
        ]);
        (0, m.default)(() => {
            Cb && !Gb && (rb((0, u.isStyleSupport)('webkitLineClamp')), tb((0, u.isStyleSupport)('textOverflow')));
        }, [
            Gb,
            Cb
        ]);
        const Hb = q.useMemo(() => !Gb && (1 === Fb ? sb : qb), [
                Gb,
                sb,
                qb
            ]),
            Ib = Eb && (Hb ? yb : wb),
            Jb = Eb && 1 === Fb && Hb,
            Kb = Eb && Fb > 1 && Hb,
            Lb = a => {
                var Mb;
                vb(!0), null === (Mb = Db.onExpand) || void 0 === Mb || Mb.call(Db, a);
            },
            [Mb, Nb] = q.useState(0),
            [Ob, Pb] = q.useState(0),
            Qb = a => {
                var Rb;
                xb(a), wb !== a && (null === (Rb = Db.onEllipsis) || void 0 === Rb || Rb.call(Db, a));
            };
        q.useEffect(() => {
            const Rb = Y.current;
            if (Cb && Hb && Rb) {
                const Sb = Kb ? Rb.offsetHeight < Rb.scrollHeight : Rb.offsetWidth < Rb.scrollWidth;
                yb !== Sb && zb(Sb);
            }
        }, [
            Cb,
            Hb,
            O,
            Kb,
            Ab
        ]), q.useEffect(() => {
            const Rb = Y.current;
            if ('undefined' == typeof IntersectionObserver || !Rb || !Hb || !Eb)
                return;
            const Sb = new IntersectionObserver(() => {
                Bb(!!Rb.offsetParent);
            });
            return Sb.observe(Rb), () => {
                Sb.disconnect();
            };
        }, [
            Hb,
            Eb
        ]);
        let Rb = {};
        Rb = !0 === Db.tooltip ? {
            title: null !== (G = cb.text) && void 0 !== G ? G : O
        } : q.isValidElement(Db.tooltip) ? {
            title: Db.tooltip
        } : 'object' == typeof Db.tooltip ? Object.assign({
            title: null !== (H = cb.text) && void 0 !== H ? H : O
        }, Db.tooltip) : {
            title: Db.tooltip
        };
        const Sb = q.useMemo(() => {
            const Tb = Tb => [
                'string',
                'number'
            ].includes(typeof Tb);
            if (Cb && !Hb)
                return Tb(cb.text) ? cb.text : Tb(O) ? O : Tb(T) ? T : Tb(Rb.title) ? Rb.title : void 0;
        }, [
            Cb,
            Hb,
            T,
            Rb.title,
            Ib
        ]);
        if (db)
            return q.createElement(w.default, {
                value: null !== (I = cb.text) && void 0 !== I ? I : 'string' == typeof O ? O : '',
                onSave: a => {
                    var Tb;
                    null === (Tb = cb.onChange) || void 0 === Tb || Tb.call(cb, a), gb(!1);
                },
                onCancel: () => {
                    var Tb;
                    null === (Tb = cb.onCancel) || void 0 === Tb || Tb.call(cb), gb(!1);
                },
                onEnd: cb.onEnd,
                prefixCls: $,
                className: K,
                style: L,
                direction: W,
                component: S,
                maxLength: cb.maxLength,
                autoSize: cb.autoSize,
                enterIcon: cb.enterIcon
            });
        const Tb = () => {
                const {
                    expandable: Ub,
                    symbol: Vb
                } = Db;
                if (!Ub)
                    return null;
                let Wb;
                return Wb = Vb || X.expand, q.createElement('a', {
                    key: 'expand',
                    className: `${ $ }-expand`,
                    onClick: Lb,
                    'aria-label': X.expand
                }, Wb);
            },
            Ub = () => {
                if (!bb)
                    return;
                const {
                    icon: Vb,
                    tooltip: Wb
                } = cb, Xb = (0, l.default)(Wb)[0] || X.edit, Yb = 'string' == typeof Xb ? Xb : '';
                return fb.includes('icon') ? q.createElement(v.default, {
                    key: 'edit',
                    title: !1 === Wb ? '' : Xb
                }, q.createElement(t.default, {
                    ref: Z,
                    className: `${ $ }-edit`,
                    onClick: hb,
                    'aria-label': Yb
                }, Vb || q.createElement(h.default, {
                    role: 'button'
                }))) : null;
            },
            Vb = () => {
                if (!ib)
                    return;
                const {
                    tooltips: Wb,
                    icon: Xb
                } = jb, Yb = E(Wb), Zb = E(Xb), $b = kb ? D(Yb[1], X.copied) : D(Yb[0], X.copy), ac = kb ? X.copied : X.copy, bc = 'string' == typeof $b ? $b : ac;
                return q.createElement(v.default, {
                    key: 'copy',
                    title: $b
                }, q.createElement(t.default, {
                    className: b(i)(`${ $ }-copy`, kb && `${ $ }-copy-success`),
                    onClick: pb,
                    'aria-label': bc
                }, kb ? D(Zb[1], q.createElement(f.default, null), !0) : D(Zb[0], q.createElement(g.default, null), !0)));
            };
        return q.createElement(k.default, {
            onResize: (a, b) => {
                let {
                    offsetWidth: Wb
                } = a;
                var Xb;
                Nb(Wb), Pb(parseInt(null === (Xb = window.getComputedStyle) || void 0 === Xb ? void 0 : Xb.call(window, b).fontSize, 10) || 0);
            },
            disabled: !Eb || Hb
        }, G => q.createElement(B.default, {
            tooltipProps: Rb,
            enabledEllipsis: Eb,
            isEllipsis: Ib
        }, q.createElement(z.default, Object.assign({
            className: b(i)({
                [`${ $ }-${ M }`]: M,
                [`${ $ }-disabled`]: N,
                [`${ $ }-ellipsis`]: Cb,
                [`${ $ }-single-line`]: Eb && 1 === Fb,
                [`${ $ }-ellipsis-single-line`]: Jb,
                [`${ $ }-ellipsis-multiple-line`]: Kb
            }, K),
            prefixCls: J,
            style: Object.assign(Object.assign({}, L), {
                WebkitLineClamp: Kb ? Fb : void 0
            }),
            component: S,
            ref: (0, p.composeRef)(G, Y, c),
            direction: W,
            onClick: fb.includes('text') ? hb : void 0,
            'aria-label': null == Sb ? void 0 : Sb.toString(),
            title: T
        }, ab), q.createElement(A.default, {
            enabledMeasure: Eb && !Hb,
            text: O,
            rows: Fb,
            width: Mb,
            fontSize: Ob,
            onEllipsis: Qb
        }, (b, c) => {
            let Wb = b;
            b.length && c && Sb && (Wb = q.createElement('span', {
                key: 'show-content',
                'aria-hidden': !0
            }, Wb));
            const Xb = function(Yb, Zb) {
                let {
                    mark: $b,
                    code: ac,
                    underline: bc,
                    delete: cc,
                    strong: dc,
                    keyboard: ec,
                    italic: fc
                } = Yb, gc = Zb;

                function hc(ic, jc) {
                    jc && (gc = q.createElement(ic, {}, gc));
                }
                return hc('strong', dc), hc('u', bc), hc('del', cc), hc('code', ac), hc('mark', $b), hc('kbd', ec), hc('i', fc), gc;
            }(a, q.createElement(q.Fragment, null, Wb, (a => {
                return [
                    a && q.createElement('span', {
                        'aria-hidden': !0,
                        key: 'ellipsis'
                    }, '...'),
                    Db.suffix,
                    (b = a, [
                        b && Tb(),
                        Ub(),
                        Vb()
                    ])
                ];
                var Yb;
            })(c)));
            return Xb;
        }))));
    });
}), c.register('UInjt', function(d, e) {
    var f = c('OG3rI27'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('7MsAZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('MJLj/0'),
        g = c('O0Kav'),
        h = c('6E2xk1');
    c('Ip0tz');
    var i = c('lrDSX'),
        j = c('gWv/z0');

    function k(l) {
        var m = l.children;
        return ('function' == typeof m ? [m] : (0, h.default)(m)).map(function(n, o) {
            var p = (null == n ? void 0 : n.key) || ''.concat('rc-observer-key', '-').concat(o);
            return g.createElement(i.default, (0, f.default)({}, l, {
                key: p
            }), n);
        });
    }
    k.Collection = j.Collection;
    var _l = k;
}), c.register('MJLj/0', function(d, e) {
    function f() {
        return f = Object.assign ? Object.assign.bind() : function(g) {
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
}), c.register('lrDSX', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('U8dBC'),
        g = c('bvyc2'),
        h = c('O0Kav'),
        i = c('ZMCML2'),
        j = c('yeelD0'),
        k = c('8r4jD'),
        l = c('gWv/z0');

    function _m(n) {
        var o = n.children,
            p = n.disabled,
            q = h.useRef(null),
            r = h.useRef(null),
            s = h.useContext(l.CollectionContext),
            t = 'function' == typeof o,
            u = t ? o(q) : o,
            v = h.useRef({
                width: -1,
                height: -1,
                offsetWidth: -1,
                offsetHeight: -1
            }),
            w = !t && h.isValidElement(u) && (0, g.supportRef)(u),
            x = w ? u.ref : null,
            y = h.useMemo(function() {
                return (0, g.composeRef)(x, q);
            }, [
                x,
                q
            ]),
            z = h.useRef(n);
        z.current = n;
        var A = h.useCallback(function(B) {
            var C = z.current,
                D = C.onResize,
                E = C.data,
                F = B.getBoundingClientRect(),
                G = F.width,
                H = F.height,
                I = B.offsetWidth,
                J = B.offsetHeight,
                K = Math.floor(G),
                L = Math.floor(H);
            if (v.current.width !== K || v.current.height !== L || v.current.offsetWidth !== I || v.current.offsetHeight !== J) {
                var M = {
                    width: K,
                    height: L,
                    offsetWidth: I,
                    offsetHeight: J
                };
                v.current = M;
                var N = I === Math.round(G) ? G : I,
                    O = J === Math.round(H) ? H : J,
                    P = (0, f.default)((0, f.default)({}, M), {}, {
                        offsetWidth: N,
                        offsetHeight: O
                    });
                null == s || s(P, B, E), D && Promise.resolve().then(function() {
                    D(P, B);
                });
            }
        }, []);
        return h.useEffect(function() {
            var B = (0, i.default)(q.current) || (0, i.default)(r.current);
            return B && !p && (0, j.observe)(B, A),
                function() {
                    return (0, j.unobserve)(B, A);
                };
        }, [
            q.current,
            p
        ]), h.createElement(k.default, {
            ref: r
        }, w ? h.cloneElement(u, {
            ref: y
        }) : u);
    }
}), c.register('U8dBC', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('Guj03');

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
}), c.register('Guj03', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('VAbNG');

    function _g(h, i, j) {
        return (i = (0, f.default)(i)) in h ? Object.defineProperty(h, i, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : h[i] = j, h;
    }
}), c.register('yeelD0', function(d, e) {
    a(d.exports, 'observe', function() {
        return _i;
    }), a(d.exports, 'unobserve', function() {
        return _j;
    });
    var f = c('1PitP'),
        g = new Map();
    var h = new(0, f.default)(function(i) {
        i.forEach(function(j) {
            var k, l = j.target;
            null === (k = g.get(l)) || void 0 === k || k.forEach(function(m) {
                return m(l);
            });
        });
    });

    function _i(j, k) {
        g.has(j) || (g.set(j, new Set()), h.observe(j)), g.get(j).add(k);
    }

    function _j(k, l) {
        g.has(k) && (g.get(k).delete(l), g.get(k).size || (h.unobserve(k), g.delete(k)));
    }
}), c.register('8r4jD', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('41Bvw'),
        g = c('Io7nb'),
        h = c('wCdVR'),
        i = c('aOMtt'),
        _j = function(k) {
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
        }(c('O0Kav').Component);
}), c.register('gWv/z0', function(d, e) {
    a(d.exports, 'CollectionContext', function() {
        return _g;
    }), a(d.exports, 'Collection', function() {
        return _h;
    });
    var f = c('O0Kav'),
        _g = f.createContext(null);

    function _h(i) {
        var j = i.children,
            k = i.onBatchResize,
            l = f.useRef(0),
            m = f.useRef([]),
            n = f.useContext(_g),
            o = f.useCallback(function(p, q, r) {
                l.current += 1;
                var s = l.current;
                m.current.push({
                    size: p,
                    element: q,
                    data: r
                }), Promise.resolve().then(function() {
                    s === l.current && (null == k || k(m.current), m.current = []);
                }), null == n || n(p, q, r);
            }, [
                k,
                n
            ]);
        return f.createElement(_g.Provider, {
            value: o
        }, j);
    }
}), c.register('jveSa', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    }, function(f) {
        return _j = f;
    });
    var f = c('yWsyD0'),
        g = c('O0Kav'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    const i = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block'
    };
    var _j = g.forwardRef((a, d) => {
        const {
            style: k,
            noStyle: l,
            disabled: m
        } = a, n = h(a, [
            'style',
            'noStyle',
            'disabled'
        ]);
        let o = {};
        return l || (o = Object.assign({}, i)), m && (o.pointerEvents = 'none'), o = Object.assign(Object.assign({}, o), k), g.createElement('div', Object.assign({
            role: 'button',
            tabIndex: 0,
            ref: d
        }, n, {
            onKeyDown: a => {
                const {
                    keyCode: p
                } = a;
                p === f.default.ENTER && a.preventDefault();
            },
            onKeyUp: d => {
                const {
                    keyCode: p
                } = d, {
                    onClick: q
                } = a;
                p === f.default.ENTER && q && q();
            },
            style: o
        }));
    });
}), c.register('Lpn2M', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gWjq2'),
        g = c('/U36/'),
        h = c('yWsyD0'),
        i = c('O0Kav'),
        j = c('Y7MMM'),
        k = c('WQymh'),
        l = c('PiezB');
    var _m = a => {
        let {
            prefixCls: n,
            'aria-label': o,
            className: p,
            style: q,
            direction: r,
            maxLength: s,
            autoSize: t = !0,
            value: u,
            onSave: v,
            onCancel: w,
            onEnd: x,
            component: y,
            enterIcon: z = i.createElement(f.default, null)
        } = a;
        const A = i.useRef(null),
            B = i.useRef(!1),
            C = i.useRef(),
            [D, E] = i.useState(u);
        i.useEffect(() => {
            E(u);
        }, [u]), i.useEffect(() => {
            if (A.current && A.current.resizableTextArea) {
                const {
                    textArea: F
                } = A.current.resizableTextArea;
                F.focus();
                const {
                    length: G
                } = F.value;
                F.setSelectionRange(G, G);
            }
        }, []);
        const F = () => {
                v(D.trim());
            },
            G = y ? `${ n }-${ y }` : '',
            [H, I] = (0, l.default)(n),
            J = b(g)(n, `${ n }-edit-content`, {
                [`${ n }-rtl`]: 'rtl' === r
            }, p, G, I);
        return H(i.createElement('div', {
            className: J,
            style: q
        }, i.createElement(j.default, {
            ref: A,
            maxLength: s,
            value: D,
            onChange: a => {
                let {
                    target: K
                } = a;
                E(K.value.replace(/[\n\r]/g, ''));
            },
            onKeyDown: a => {
                let {
                    keyCode: K
                } = a;
                B.current || (C.current = K);
            },
            onKeyUp: a => {
                let {
                    keyCode: K,
                    ctrlKey: L,
                    altKey: M,
                    metaKey: N,
                    shiftKey: O
                } = a;
                C.current !== K || B.current || L || M || N || O || (K === h.default.ENTER ? (F(), null == x || x()) : K === h.default.ESC && w());
            },
            onCompositionStart: () => {
                B.current = !0;
            },
            onCompositionEnd: () => {
                B.current = !1;
            },
            onBlur: () => {
                F();
            },
            'aria-label': o,
            rows: 1,
            autoSize: t
        }), null !== z ? (0, k.cloneElement)(z, {
            className: `${ n }-edit-content-confirm`
        }) : null));
    };
}), c.register('PiezB', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('GhPPX'),
        g = c('2ddyG'),
        h = c('5722c');
    const i = a => {
        const {
            componentCls: j,
            sizeMarginHeadingVerticalStart: k
        } = a;
        return {
            [j]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: a.colorText,
                wordBreak: 'break-word',
                lineHeight: a.lineHeight,
                [`&${ j }-secondary`]: {
                    color: a.colorTextDescription
                },
                [`&${ j }-success`]: {
                    color: a.colorSuccess
                },
                [`&${ j }-warning`]: {
                    color: a.colorWarning
                },
                [`&${ j }-danger`]: {
                    color: a.colorError,
                    'a&:active, a&:focus': {
                        color: a.colorErrorActive
                    },
                    'a&:hover': {
                        color: a.colorErrorHover
                    }
                },
                [`&${ j }-disabled`]: {
                    color: a.colorTextDisabled,
                    cursor: 'not-allowed',
                    userSelect: 'none'
                },
                '\n        div&,\n        p\n      ': {
                    marginBottom: '1em'
                }
            }, (0, g.getTitleStyles)(a)), {
                [`\n      & + h1${ j },\n      & + h2${ j },\n      & + h3${ j },\n      & + h4${ j },\n      & + h5${ j }\n      `]: {
                    marginTop: k
                },
                '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5': {
                    '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ': {
                        marginTop: k
                    }
                }
            }), (0, g.getResetStyles)(a)), (0, g.getLinkStyles)(a)), {
                [`\n        ${ j }-expand,\n        ${ j }-edit,\n        ${ j }-copy\n      `]: Object.assign(Object.assign({}, (0, h.operationUnit)(a)), {
                    marginInlineStart: a.marginXXS
                })
            }), (0, g.getEditableStyles)(a)), (0, g.getCopiableStyles)(a)), (0, g.getEllipsisStyles)()), {
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        };
    };
    var _j = (0, f.default)('Typography', a => [i(a)], {
        sizeMarginHeadingVerticalStart: '1.2em',
        sizeMarginHeadingVerticalEnd: '0.5em'
    });
}), c.register('2ddyG', function(d, e) {
    a(d.exports, 'getTitleStyles', function() {
        return _i;
    }), a(d.exports, 'getLinkStyles', function() {
        return _j;
    }), a(d.exports, 'getResetStyles', function() {
        return _k;
    }), a(d.exports, 'getEditableStyles', function() {
        return _l;
    }), a(d.exports, 'getCopiableStyles', function() {
        return _m;
    }), a(d.exports, 'getEllipsisStyles', function() {
        return _n;
    });
    var f = c('LyNdp'),
        g = c('Xi+E+'),
        h = c('5722c');
    const _i = a => {
            const j = {};
            return [
                1,
                2,
                3,
                4,
                5
            ].forEach(c => {
                j[`\n      h${ c }&,\n      div&-h${ c },\n      div&-h${ c } > textarea,\n      h${ c }\n    `] = ((a, j, c, e) => {
                    const {
                        sizeMarginHeadingVerticalEnd: k,
                        fontWeightStrong: l
                    } = e;
                    return {
                        marginBottom: k,
                        color: c,
                        fontWeight: l,
                        fontSize: a,
                        lineHeight: j
                    };
                })(a[`fontSizeHeading${ c }`], a[`lineHeightHeading${ c }`], a.colorTextHeading, a);
            }), j;
        },
        _j = a => {
            const {
                componentCls: k
            } = a;
            return {
                'a&, a': Object.assign(Object.assign({}, (0, h.operationUnit)(a)), {
                    textDecoration: a.linkDecoration,
                    '&:active, &:hover': {
                        textDecoration: a.linkHoverDecoration
                    },
                    [`&[disabled], &${ k }-disabled`]: {
                        color: a.colorTextDisabled,
                        cursor: 'not-allowed',
                        '&:active, &:hover': {
                            color: a.colorTextDisabled
                        },
                        '&:active': {
                            pointerEvents: 'none'
                        }
                    }
                })
            };
        },
        _k = a => ({
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
                backgroundColor: f.gold[2]
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
        _l = a => {
            const {
                componentCls: m
            } = a, n = (0, g.initInputToken)(a).inputPaddingVertical + 1;
            return {
                '&-edit-content': {
                    position: 'relative',
                    'div&': {
                        insetInlineStart: -a.paddingSM,
                        marginTop: -n,
                        marginBottom: `calc(1em - ${ n }px)`
                    },
                    [`${ m }-edit-content-confirm`]: {
                        position: 'absolute',
                        insetInlineEnd: a.marginXS + 2,
                        insetBlockEnd: a.marginXS,
                        color: a.colorTextDescription,
                        fontWeight: 'normal',
                        fontSize: a.fontSize,
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
        _m = a => ({
            '&-copy-success': {
                '\n    &,\n    &:hover,\n    &:focus': {
                    color: a.colorSuccess
                }
            }
        }),
        _n = () => ({
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
}), c.register('N70Yt', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h, i) {
        return f.useMemo(() => {
            const j = !!h;
            return [
                j,
                Object.assign(Object.assign({}, i), j && 'object' == typeof h ? h : null)
            ];
        }, [h]);
    }
}), c.register('dKKt8', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = (a, d) => {
        const h = f.useRef(!1);
        f.useEffect(() => {
            h.current ? a() : h.current = !0;
        }, d);
    };
}), c.register('69LNl', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    }, function(f) {
        return _l = f;
    });
    var f = c('/U36/'),
        g = c('bvyc2'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('PiezB'),
        k = function(l, m) {
            var n = {};
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && m.indexOf(o) < 0 && (n[o] = l[o]);
            if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                    m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
            }
            return n;
        };
    var _l = h.forwardRef((a, c) => {
        var {
            prefixCls: m,
            component: n = 'article',
            className: o,
            rootClassName: p,
            setContentRef: q,
            children: r,
            direction: s
        } = a, t = k(a, [
            'prefixCls',
            'component',
            'className',
            'rootClassName',
            'setContentRef',
            'children',
            'direction'
        ]);
        const {
            getPrefixCls: u,
            direction: v
        } = h.useContext(i.ConfigContext), w = null != s ? s : v;
        let x = c;
        q && (x = (0, g.composeRef)(c, q));
        const y = u('typography', m),
            [z, A] = (0, j.default)(y),
            B = b(f)(y, {
                [`${ y }-rtl`]: 'rtl' === w
            }, o, p, A);
        return z(h.createElement(n, Object.assign({
            className: B,
            ref: x
        }, t), r));
    });
}), c.register('Lh378', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('6E2xk1'),
        g = c('I3pjj'),
        h = c('O0Kav');

    function i(j) {
        const k = typeof j;
        return 'string' === k || 'number' === k;
    }

    function j(k, l) {
        let m = 0;
        const n = [];
        for (let o = 0; o < k.length; o += 1) {
            if (m === l)
                return n;
            const p = k[o],
                q = m + (i(p) ? String(p).length : 1);
            if (q > l) {
                const r = l - m;
                return n.push(String(p).slice(0, r)), n;
            }
            n.push(p), m = q;
        }
        return k;
    }
    var _k = a => {
        let {
            enabledMeasure: l,
            children: m,
            text: n,
            width: o,
            fontSize: p,
            rows: q,
            onEllipsis: r
        } = a;
        const [
            [s, t, u], v
        ] = h.useState([
            0,
            0,
            0
        ]), [w, x] = h.useState(0), [y, z] = h.useState(0), A = h.useRef(null), B = h.useRef(null), C = h.useMemo(() => (0, f.default)(n), [n]), D = h.useMemo(() => function(E) {
            let F = 0;
            return E.forEach(E => {
                i(E) ? F += String(E).length : F += 1;
            }), F;
        }(C), [C]), E = h.useMemo(() => l && 3 === w ? m(j(C, t), t < D) : m(C, !1), [
            l,
            w,
            m,
            C,
            t,
            D
        ]);
        (0, g.default)(() => {
            l && o && p && D && (x(1), v([
                0,
                Math.ceil(D / 2),
                D
            ]));
        }, [
            l,
            o,
            p,
            n,
            D,
            q
        ]), (0, g.default)(() => {
            var F;
            1 === w && z((null === (F = A.current) || void 0 === F ? void 0 : F.offsetHeight) || 0);
        }, [w]), (0, g.default)(() => {
            var F, G;
            if (y)
                if (1 === w) {
                    ((null === (F = B.current) || void 0 === F ? void 0 : F.offsetHeight) || 0) <= q * y ? (x(4), r(!1)) : x(2);
                } else if (2 === w)
                if (s !== u) {
                    const H = (null === (G = B.current) || void 0 === G ? void 0 : G.offsetHeight) || 0;
                    let I = s,
                        J = u;
                    s === u - 1 ? J = s : H <= q * y ? I = t : J = t;
                    const K = Math.ceil((I + J) / 2);
                    v([
                        I,
                        K,
                        J
                    ]);
                } else
                    x(3), r(!0);
        }, [
            w,
            s,
            u,
            q,
            y
        ]);
        const F = {
                width: o,
                whiteSpace: 'normal',
                margin: 0,
                padding: 0
            },
            G = (a, l, m) => h.createElement('span', {
                'aria-hidden': !0,
                ref: l,
                style: Object.assign({
                    position: 'fixed',
                    display: 'block',
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    fontSize: 2 * Math.floor(p / 2)
                }, m)
            }, a);
        return h.createElement(h.Fragment, null, E, l && 3 !== w && 4 !== w && h.createElement(h.Fragment, null, G('lg', A, {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap'
        }), 1 === w ? G(m(C, !1), B, F) : ((a, l) => {
            const H = j(C, a);
            return G(m(H, !0), l, F);
        })(t, B)));
    };
}), c.register('5Fqoh', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('Dn89R');
    var _h = a => {
        let {
            enabledEllipsis: i,
            isEllipsis: j,
            children: k,
            tooltipProps: l
        } = a;
        return (null == l ? void 0 : l.title) && i ? f.createElement(g.default, Object.assign({
            open: !!j && void 0
        }, l), k) : k;
    };
}), c.register('x+JYQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('RHQU4');
    var _h = f.forwardRef((a, d) => f.createElement(g.default, Object.assign({
        ref: d
    }, a, {
        component: 'div'
    })));
}), c.register('OtnRx', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('Kpy/B'),
        g = c('O0Kav'),
        h = c('RHQU4'),
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
    const j = (a, d) => {
        var {
            ellipsis: k
        } = a, l = i(a, ['ellipsis']);
        const m = g.useMemo(() => k && 'object' == typeof k ? (0, f.default)(k, [
            'expandable',
            'rows'
        ]) : k, [k]);
        return g.createElement(h.default, Object.assign({
            ref: d
        }, l, {
            ellipsis: m,
            component: 'span'
        }));
    };
    var _k = g.forwardRef(j);
}), c.register('JsyqD', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    }, function(f) {
        return _j = f;
    });
    var f = c('O0Kav'),
        g = c('RHQU4'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    const i = [
        1,
        2,
        3,
        4,
        5
    ];
    var _j = f.forwardRef((a, d) => {
        const {
            level: k = 1
        } = a, l = h(a, ['level']);
        let m;
        return m = i.includes(k) ? `h${ k }` : 'h1', f.createElement(g.default, Object.assign({
            ref: d
        }, l, {
            component: m
        }));
    });
});