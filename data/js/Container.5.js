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
c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const j = c('.....').default;
    j.Text = h.default, j.Link = f.default, j.Title = i.default, j.Paragraph = g.default;
    var _k = j;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    }, function(f) {
        return _i = f;
    });
    var f = c('.....'),
        g = c('.....'),
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
    var _i = f.forwardRef((j, k) => {
        var {
            ellipsis: l,
            rel: m
        } = j, n = h(j, [
            'ellipsis',
            'rel'
        ]);
        const o = Object.assign(Object.assign({}, n), {
            rel: void 0 === m && '_blank' === n.target ? 'noopener noreferrer' : m
        });
        return delete o.navigate, f.createElement(g.default, Object.assign({}, o, {
            ref: k,
            ellipsis: !!l,
            component: 'a'
        }));
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    }, function(f) {
        return _F = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....'),
        B = c('.....'),
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
    var _F = q.forwardRef((G, H) => {
        var I, J, K;
        const {
            prefixCls: L,
            className: M,
            style: N,
            type: O,
            disabled: P,
            children: Q,
            ellipsis: R,
            editable: S,
            copyable: T,
            component: U,
            title: V
        } = G, W = C(G, [
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
            getPrefixCls: X,
            direction: Y
        } = q.useContext(r.ConfigContext), Z = (0, s.useLocaleReceiver)('Text')[0], $ = q.useRef(null), ab = q.useRef(null), bb = X('typography', L), cb = (0, o.default)(W, [
            'mark',
            'code',
            'delete',
            'underline',
            'strong',
            'keyboard',
            'italic'
        ]), [db, eb] = (0, x.default)(S), [fb, gb] = (0, n.default)(!1, {
            value: eb.editing
        }), {
            triggerType: hb = ['icon']
        } = eb, ib = jb => {
            var kb;
            jb && (null === (kb = eb.onStart) || void 0 === kb || kb.call(eb)), gb(jb);
        };
        (0, y.default)(() => {
            var jb;
            fb || null === (jb = ab.current) || void 0 === jb || jb.focus();
        }, [fb]);
        const jb = kb => {
                null == kb || kb.preventDefault(), ib(!0);
            },
            [kb, lb] = (0, x.default)(T),
            [mb, nb] = q.useState(!1),
            ob = q.useRef(),
            pb = {};
        lb.format && (pb.format = lb.format);
        const qb = () => {
                window.clearTimeout(ob.current);
            },
            rb = sb => {
                var tb;
                null == sb || sb.preventDefault(), null == sb || sb.stopPropagation(), b(j)(lb.text || String(Q) || '', pb), nb(!0), qb(), ob.current = window.setTimeout(() => {
                    nb(!1);
                }, 3000), null === (tb = lb.onCopy) || void 0 === tb || tb.call(lb, sb);
            };
        q.useEffect(() => qb, []);
        const [sb, tb] = q.useState(!1), [ub, vb] = q.useState(!1), [wb, xb] = q.useState(!1), [yb, zb] = q.useState(!1), [Ab, Bb] = q.useState(!1), [Cb, Db] = q.useState(!0), [Eb, Fb] = (0, x.default)(R, {
            expandable: !1
        }), Gb = Eb && !wb, {
            rows: Hb = 1
        } = Fb, Ib = q.useMemo(() => !Gb || void 0 !== Fb.suffix || Fb.onEllipsis || Fb.expandable || db || kb, [
            Gb,
            Fb,
            db,
            kb
        ]);
        (0, m.default)(() => {
            Eb && !Ib && (tb((0, u.isStyleSupport)('webkitLineClamp')), vb((0, u.isStyleSupport)('textOverflow')));
        }, [
            Ib,
            Eb
        ]);
        const Jb = q.useMemo(() => !Ib && (1 === Hb ? ub : sb), [
                Ib,
                ub,
                sb
            ]),
            Kb = Gb && (Jb ? Ab : yb),
            Lb = Gb && 1 === Hb && Jb,
            Mb = Gb && Hb > 1 && Jb,
            Nb = Ob => {
                var Pb;
                xb(!0), null === (Pb = Fb.onExpand) || void 0 === Pb || Pb.call(Fb, Ob);
            },
            [Ob, Pb] = q.useState(0),
            [Qb, Rb] = q.useState(0),
            Sb = Tb => {
                var Ub;
                zb(Tb), yb !== Tb && (null === (Ub = Fb.onEllipsis) || void 0 === Ub || Ub.call(Fb, Tb));
            };
        q.useEffect(() => {
            const Tb = $.current;
            if (Eb && Jb && Tb) {
                const Ub = Mb ? Tb.offsetHeight < Tb.scrollHeight : Tb.offsetWidth < Tb.scrollWidth;
                Ab !== Ub && Bb(Ub);
            }
        }, [
            Eb,
            Jb,
            Q,
            Mb,
            Cb
        ]), q.useEffect(() => {
            const Tb = $.current;
            if ('undefined' == typeof IntersectionObserver || !Tb || !Jb || !Gb)
                return;
            const Ub = new IntersectionObserver(() => {
                Db(!!Tb.offsetParent);
            });
            return Ub.observe(Tb), () => {
                Ub.disconnect();
            };
        }, [
            Jb,
            Gb
        ]);
        let Tb = {};
        Tb = !0 === Fb.tooltip ? {
            title: null !== (I = eb.text) && void 0 !== I ? I : Q
        } : q.isValidElement(Fb.tooltip) ? {
            title: Fb.tooltip
        } : 'object' == typeof Fb.tooltip ? Object.assign({
            title: null !== (J = eb.text) && void 0 !== J ? J : Q
        }, Fb.tooltip) : {
            title: Fb.tooltip
        };
        const Ub = q.useMemo(() => {
            const Vb = Wb => [
                'string',
                'number'
            ].includes(typeof Wb);
            if (Eb && !Jb)
                return Vb(eb.text) ? eb.text : Vb(Q) ? Q : Vb(V) ? V : Vb(Tb.title) ? Tb.title : void 0;
        }, [
            Eb,
            Jb,
            V,
            Tb.title,
            Kb
        ]);
        if (fb)
            return q.createElement(w.default, {
                value: null !== (K = eb.text) && void 0 !== K ? K : 'string' == typeof Q ? Q : '',
                onSave: Vb => {
                    var Wb;
                    null === (Wb = eb.onChange) || void 0 === Wb || Wb.call(eb, Vb), ib(!1);
                },
                onCancel: () => {
                    var Vb;
                    null === (Vb = eb.onCancel) || void 0 === Vb || Vb.call(eb), ib(!1);
                },
                onEnd: eb.onEnd,
                prefixCls: bb,
                className: M,
                style: N,
                direction: Y,
                component: U,
                maxLength: eb.maxLength,
                autoSize: eb.autoSize,
                enterIcon: eb.enterIcon
            });
        const Vb = () => {
                const {
                    expandable: Wb,
                    symbol: Xb
                } = Fb;
                if (!Wb)
                    return null;
                let Yb;
                return Yb = Xb || Z.expand, q.createElement('a', {
                    key: 'expand',
                    className: `${ bb }-expand`,
                    onClick: Nb,
                    'aria-label': Z.expand
                }, Yb);
            },
            Wb = () => {
                if (!db)
                    return;
                const {
                    icon: Xb,
                    tooltip: Yb
                } = eb, Zb = (0, l.default)(Yb)[0] || Z.edit, $b = 'string' == typeof Zb ? Zb : '';
                return hb.includes('icon') ? q.createElement(v.default, {
                    key: 'edit',
                    title: !1 === Yb ? '' : Zb
                }, q.createElement(t.default, {
                    ref: ab,
                    className: `${ bb }-edit`,
                    onClick: jb,
                    'aria-label': $b
                }, Xb || q.createElement(h.default, {
                    role: 'button'
                }))) : null;
            },
            Xb = () => {
                if (!kb)
                    return;
                const {
                    tooltips: Yb,
                    icon: Zb
                } = lb, $b = E(Yb), ac = E(Zb), bc = mb ? D($b[1], Z.copied) : D($b[0], Z.copy), cc = mb ? Z.copied : Z.copy, dc = 'string' == typeof bc ? bc : cc;
                return q.createElement(v.default, {
                    key: 'copy',
                    title: bc
                }, q.createElement(t.default, {
                    className: b(i)(`${ bb }-copy`, mb && `${ bb }-copy-success`),
                    onClick: rb,
                    'aria-label': dc
                }, mb ? D(ac[1], q.createElement(f.default, null), !0) : D(ac[0], q.createElement(g.default, null), !0)));
            };
        return q.createElement(k.default, {
            onResize: (Yb, Zb) => {
                let {
                    offsetWidth: $b
                } = Yb;
                var ac;
                Pb($b), Rb(parseInt(null === (ac = window.getComputedStyle) || void 0 === ac ? void 0 : ac.call(window, Zb).fontSize, 10) || 0);
            },
            disabled: !Gb || Jb
        }, Yb => q.createElement(B.default, {
            tooltipProps: Tb,
            enabledEllipsis: Gb,
            isEllipsis: Kb
        }, q.createElement(z.default, Object.assign({
            className: b(i)({
                [`${ bb }-${ O }`]: O,
                [`${ bb }-disabled`]: P,
                [`${ bb }-ellipsis`]: Eb,
                [`${ bb }-single-line`]: Gb && 1 === Hb,
                [`${ bb }-ellipsis-single-line`]: Lb,
                [`${ bb }-ellipsis-multiple-line`]: Mb
            }, M),
            prefixCls: L,
            style: Object.assign(Object.assign({}, N), {
                WebkitLineClamp: Mb ? Hb : void 0
            }),
            component: U,
            ref: (0, p.composeRef)(Yb, $, H),
            direction: Y,
            onClick: hb.includes('text') ? jb : void 0,
            'aria-label': null == Ub ? void 0 : Ub.toString(),
            title: V
        }, cb), q.createElement(A.default, {
            enabledMeasure: Gb && !Jb,
            text: Q,
            rows: Hb,
            width: Ob,
            fontSize: Qb,
            onEllipsis: Sb
        }, (Zb, $b) => {
            let ac = Zb;
            Zb.length && $b && Ub && (ac = q.createElement('span', {
                key: 'show-content',
                'aria-hidden': !0
            }, ac));
            const bc = function(cc, dc) {
                let {
                    mark: ec,
                    code: fc,
                    underline: gc,
                    delete: hc,
                    strong: ic,
                    keyboard: jc,
                    italic: kc
                } = cc, lc = dc;

                function mc(nc, oc) {
                    oc && (lc = q.createElement(nc, {}, lc));
                }
                return mc('strong', ic), mc('u', gc), mc('del', hc), mc('code', fc), mc('mark', ec), mc('kbd', jc), mc('i', kc), lc;
            }(G, q.createElement(q.Fragment, null, ac, (cc => {
                return [
                    cc && q.createElement('span', {
                        'aria-hidden': !0,
                        key: 'ellipsis'
                    }, '...'),
                    Fb.suffix,
                    (Zb = cc, [
                        Zb && Vb(),
                        Wb(),
                        Xb()
                    ])
                ];
                var dc;
            })($b)));
            return bc;
        }))));
    });
}), c.register('.....', function(d, e) {
    var f = c('.....'),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....');

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
    var _m = k;
}), c.register('.....', function(d, e) {
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');

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
            var B = (0, i.default)(q.current) || (0, i.default)(_m.current);
            return B && !p && (0, j.observe)(B, A),
                function() {
                    return (0, j.unobserve)(B, A);
                };
        }, [
            q.current,
            p
        ]), h.createElement(k.default, {
            ref: _m
        }, w ? h.cloneElement(u, {
            ref: y
        }) : u);
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');

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

    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function(n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h, i, j) {
        return (i = (0, f.default)(i)) in h ? Object.defineProperty(h, i, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : h[i] = j, h;
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'observe', function() {
        return _i;
    }), a(d.exports, 'unobserve', function() {
        return _j;
    });
    var f = c('.....'),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
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
        }(c('.....').Component);
}), c.register('.....', function(d, e) {
    a(d.exports, 'CollectionContext', function() {
        return _g;
    }), a(d.exports, 'Collection', function() {
        return _h;
    });
    var f = c('.....'),
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
                _h.current.push({
                    size: p,
                    element: q,
                    data: r
                }), Promise.resolve().then(function() {
                    s === l.current && (null == k || k(_h.current), _h.current = []);
                }), null == n || n(p, q, r);
            }, [
                k,
                n
            ]);
        return f.createElement(_g.Provider, {
            value: o
        }, j);
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    }, function(f) {
        return _j = f;
    });
    var f = c('.....'),
        g = c('.....'),
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
    var _j = g.forwardRef((k, l) => {
        const {
            style: m,
            noStyle: n,
            disabled: o
        } = k, p = h(k, [
            'style',
            'noStyle',
            'disabled'
        ]);
        let q = {};
        return n || (q = Object.assign({}, i)), o && (q.pointerEvents = 'none'), q = Object.assign(Object.assign({}, q), m), g.createElement('div', Object.assign({
            role: 'button',
            tabIndex: 0,
            ref: l
        }, p, {
            onKeyDown: r => {
                const {
                    keyCode: s
                } = r;
                s === f.default.ENTER && r.preventDefault();
            },
            onKeyUp: r => {
                const {
                    keyCode: s
                } = r, {
                    onClick: t
                } = k;
                s === f.default.ENTER && t && t();
            },
            style: q
        }));
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = n => {
        let {
            prefixCls: o,
            'aria-label': p,
            className: q,
            style: r,
            direction: s,
            maxLength: t,
            autoSize: u = !0,
            value: v,
            onSave: w,
            onCancel: x,
            onEnd: y,
            component: z,
            enterIcon: A = i.createElement(f.default, null)
        } = n;
        const B = i.useRef(null),
            C = i.useRef(!1),
            D = i.useRef(),
            [E, F] = i.useState(v);
        i.useEffect(() => {
            F(v);
        }, [v]), i.useEffect(() => {
            if (B.current && B.current.resizableTextArea) {
                const {
                    textArea: G
                } = B.current.resizableTextArea;
                G.focus();
                const {
                    length: H
                } = G.value;
                G.setSelectionRange(H, H);
            }
        }, []);
        const G = () => {
                w(E.trim());
            },
            H = z ? `${ o }-${ z }` : '',
            [I, J] = (0, l.default)(o),
            K = b(g)(o, `${ o }-edit-content`, {
                [`${ o }-rtl`]: 'rtl' === s
            }, q, H, J);
        return I(i.createElement('div', {
            className: K,
            style: r
        }, i.createElement(j.default, {
            ref: B,
            maxLength: t,
            value: E,
            onChange: L => {
                let {
                    target: M
                } = L;
                F(M.value.replace(/[\n\r]/g, ''));
            },
            onKeyDown: L => {
                let {
                    keyCode: M
                } = L;
                C.current || (D.current = M);
            },
            onKeyUp: L => {
                let {
                    keyCode: M,
                    ctrlKey: N,
                    altKey: O,
                    metaKey: P,
                    shiftKey: Q
                } = L;
                D.current !== M || C.current || N || O || P || Q || (M === h.default.ENTER ? (G(), null == y || y()) : M === h.default.ESC && x());
            },
            onCompositionStart: () => {
                C.current = !0;
            },
            onCompositionEnd: () => {
                C.current = !1;
            },
            onBlur: () => {
                G();
            },
            'aria-label': p,
            rows: 1,
            autoSize: u
        }), null !== A ? (0, k.cloneElement)(A, {
            className: `${ o }-edit-content-confirm`
        }) : null));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const i = j => {
        const {
            componentCls: k,
            sizeMarginHeadingVerticalStart: l
        } = j;
        return {
            [k]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: j.colorText,
                wordBreak: 'break-word',
                lineHeight: j.lineHeight,
                [`&${ k }-secondary`]: {
                    color: j.colorTextDescription
                },
                [`&${ k }-success`]: {
                    color: j.colorSuccess
                },
                [`&${ k }-warning`]: {
                    color: j.colorWarning
                },
                [`&${ k }-danger`]: {
                    color: j.colorError,
                    'a&:active, a&:focus': {
                        color: j.colorErrorActive
                    },
                    'a&:hover': {
                        color: j.colorErrorHover
                    }
                },
                [`&${ k }-disabled`]: {
                    color: j.colorTextDisabled,
                    cursor: 'not-allowed',
                    userSelect: 'none'
                },
                '\n        div&,\n        p\n      ': {
                    marginBottom: '1em'
                }
            }, (0, g.getTitleStyles)(j)), {
                [`\n      & + h1${ k },\n      & + h2${ k },\n      & + h3${ k },\n      & + h4${ k },\n      & + h5${ k }\n      `]: {
                    marginTop: l
                },
                '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5': {
                    '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ': {
                        marginTop: l
                    }
                }
            }), (0, g.getResetStyles)(j)), (0, g.getLinkStyles)(j)), {
                [`\n        ${ k }-expand,\n        ${ k }-edit,\n        ${ k }-copy\n      `]: Object.assign(Object.assign({}, (0, h.operationUnit)(j)), {
                    marginInlineStart: j.marginXXS
                })
            }), (0, g.getEditableStyles)(j)), (0, g.getCopiableStyles)(j)), (0, g.getEllipsisStyles)()), {
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        };
    };
    var _j = (0, f.default)('Typography', k => [i(k)], {
        sizeMarginHeadingVerticalStart: '1.2em',
        sizeMarginHeadingVerticalEnd: '0.5em'
    });
}), c.register('.....', function(d, e) {
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
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = j => {
            const k = {};
            return [
                1,
                2,
                3,
                4,
                5
            ].forEach(l => {
                k[`\n      h${ l }&,\n      div&-h${ l },\n      div&-h${ l } > textarea,\n      h${ l }\n    `] = ((m, n, o, p) => {
                    const {
                        sizeMarginHeadingVerticalEnd: q,
                        fontWeightStrong: r
                    } = p;
                    return {
                        marginBottom: q,
                        color: o,
                        fontWeight: r,
                        fontSize: m,
                        lineHeight: n
                    };
                })(j[`fontSizeHeading${ l }`], j[`lineHeightHeading${ l }`], j.colorTextHeading, j);
            }), k;
        },
        _j = k => {
            const {
                componentCls: l
            } = k;
            return {
                'a&, a': Object.assign(Object.assign({}, (0, h.operationUnit)(k)), {
                    textDecoration: k.linkDecoration,
                    '&:active, &:hover': {
                        textDecoration: k.linkHoverDecoration
                    },
                    [`&[disabled], &${ l }-disabled`]: {
                        color: k.colorTextDisabled,
                        cursor: 'not-allowed',
                        '&:active, &:hover': {
                            color: k.colorTextDisabled
                        },
                        '&:active': {
                            pointerEvents: 'none'
                        }
                    }
                })
            };
        },
        _k = l => ({
            code: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.2em 0.1em',
                fontSize: '85%',
                fontFamily: l.fontFamilyCode,
                background: 'rgba(150, 150, 150, 0.1)',
                border: '1px solid rgba(100, 100, 100, 0.2)',
                borderRadius: 3
            },
            kbd: {
                margin: '0 0.2em',
                paddingInline: '0.4em',
                paddingBlock: '0.15em 0.1em',
                fontSize: '90%',
                fontFamily: l.fontFamilyCode,
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
                fontFamily: l.fontFamilyCode,
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
        _l = m => {
            const {
                componentCls: n
            } = m, o = (0, g.initInputToken)(m).inputPaddingVertical + 1;
            return {
                '&-edit-content': {
                    position: 'relative',
                    'div&': {
                        insetInlineStart: -m.paddingSM,
                        marginTop: -o,
                        marginBottom: `calc(1em - ${ o }px)`
                    },
                    [`${ n }-edit-content-confirm`]: {
                        position: 'absolute',
                        insetInlineEnd: m.marginXS + 2,
                        insetBlockEnd: m.marginXS,
                        color: m.colorTextDescription,
                        fontWeight: 'normal',
                        fontSize: m.fontSize,
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
        _m = n => ({
            '&-copy-success': {
                '\n    &,\n    &:hover,\n    &:focus': {
                    color: n.colorSuccess
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h, i) {
        return f.useMemo(() => {
            const j = !!h;
            return [
                j,
                Object.assign(Object.assign({}, i), j && 'object' == typeof h ? h : null)
            ];
        }, [h]);
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = (h, i) => {
        const j = f.useRef(!1);
        f.useEffect(() => {
            j.current ? h() : j.current = !0;
        }, i);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    }, function(f) {
        return _l = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
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
    var _l = h.forwardRef((m, n) => {
        var {
            prefixCls: o,
            component: p = 'article',
            className: q,
            rootClassName: r,
            setContentRef: s,
            children: t,
            direction: u
        } = m, v = k(m, [
            'prefixCls',
            'component',
            'className',
            'rootClassName',
            'setContentRef',
            'children',
            'direction'
        ]);
        const {
            getPrefixCls: w,
            direction: x
        } = h.useContext(i.ConfigContext), y = null != u ? u : x;
        let z = n;
        s && (z = (0, g.composeRef)(n, s));
        const A = w('typography', o),
            [B, C] = (0, j.default)(A),
            D = b(f)(A, {
                [`${ A }-rtl`]: 'rtl' === y
            }, q, r, C);
        return B(h.createElement(p, Object.assign({
            className: D,
            ref: z
        }, v), t));
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');

    function i(j) {
        const k = typeof j;
        return 'string' === k || 'number' === k;
    }

    function k(l, m) {
        let n = 0;
        const o = [];
        for (let p = 0; p < l.length; p += 1) {
            if (n === m)
                return o;
            const q = l[p],
                r = n + (i(q) ? String(q).length : 1);
            if (r > m) {
                const s = m - n;
                return o.push(String(q).slice(0, l)), o;
            }
            o.push(q), n = r;
        }
        return l;
    }
    var _p = q => {
        let {
            enabledMeasure: r,
            children: s,
            text: t,
            width: u,
            fontSize: v,
            rows: w,
            onEllipsis: x
        } = q;
        const [
            [y, z, A], B
        ] = r.useState([
            0,
            0,
            0
        ]), [C, D] = r.useState(0), [E, F] = r.useState(0), G = r.useRef(null), H = r.useRef(null), I = r.useMemo(() => (0, f.default)(t), [t]), J = r.useMemo(() => function(K) {
            let L = 0;
            return K.forEach(M => {
                i(M) ? L += String(M).length : L += 1;
            }), L;
        }(I), [I]), K = r.useMemo(() => r && 3 === C ? s(k(I, z), z < J) : s(I, !1), [
            r,
            C,
            s,
            I,
            z,
            J
        ]);
        (0, q.default)(() => {
            r && u && v && J && (D(1), B([
                0,
                Math.ceil(J / 2),
                J
            ]));
        }, [
            r,
            u,
            v,
            t,
            J,
            w
        ]), (0, q.default)(() => {
            var L;
            1 === C && F((null === (L = G.current) || void 0 === L ? void 0 : L.offsetHeight) || 0);
        }, [C]), (0, q.default)(() => {
            var L, M;
            if (E)
                if (1 === C) {
                    ((null === (L = H.current) || void 0 === L ? void 0 : L.offsetHeight) || 0) <= w * E ? (D(4), x(!1)) : D(2);
                } else if (2 === C)
                if (y !== A) {
                    const N = (null === (M = H.current) || void 0 === M ? void 0 : M.offsetHeight) || 0;
                    let O = y,
                        P = A;
                    y === A - 1 ? P = y : N <= w * E ? O = z : P = z;
                    const Q = Math.ceil((O + P) / 2);
                    B([
                        O,
                        Q,
                        P
                    ]);
                } else
                    D(3), x(!0);
        }, [
            C,
            y,
            A,
            w,
            E
        ]);
        const L = {
                width: u,
                whiteSpace: 'normal',
                margin: 0,
                padding: 0
            },
            M = (N, O, P) => r.createElement('span', {
                'aria-hidden': !0,
                ref: O,
                style: Object.assign({
                    position: 'fixed',
                    display: 'block',
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    fontSize: 2 * Math.floor(v / 2)
                }, P)
            }, N);
        return r.createElement(r.Fragment, null, K, r && 3 !== C && 4 !== C && r.createElement(r.Fragment, null, M('lg', G, {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap'
        }), 1 === C ? M(s(I, !1), H, L) : ((N, O) => {
            const P = k(I, N);
            return M(s(P, !0), O, L);
        })(z, H)));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = i => {
        let {
            enabledEllipsis: j,
            isEllipsis: k,
            children: l,
            tooltipProps: m
        } = i;
        return (null == m ? void 0 : m.title) && j ? f.createElement(g.default, Object.assign({
            open: !!k && void 0
        }, m), l) : l;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = f.forwardRef((i, j) => f.createElement(g.default, Object.assign({
        ref: j
    }, i, {
        component: 'div'
    })));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
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
    const j = (k, l) => {
        var {
            ellipsis: m
        } = k, n = i(k, ['ellipsis']);
        const o = g.useMemo(() => m && 'object' == typeof m ? (0, f.default)(m, [
            'expandable',
            'rows'
        ]) : m, [m]);
        return g.createElement(h.default, Object.assign({
            ref: l
        }, n, {
            ellipsis: o,
            component: 'span'
        }));
    };
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    }, function(f) {
        return _j = f;
    });
    var f = c('.....'),
        g = c('.....'),
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
    var _j = f.forwardRef((k, l) => {
        const {
            level: m = 1
        } = k, n = h(k, ['level']);
        let o;
        return o = i.includes(m) ? `h${ m }` : 'h1', f.createElement(g.default, Object.assign({
            ref: l
        }, n, {
            component: o
        }));
    });
});