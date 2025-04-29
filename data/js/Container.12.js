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
c.register('Bjl070', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('g8lYc'),
        g = c('YpFEA'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('TMn+i0'),
        k = c('d3CSY0'),
        l = c('68fTw');
    let m = null,
        n = a => a(),
        o = [],
        p = {};
    const q = h.forwardRef((a, d) => {
        const r = () => {
                const {
                    prefixCls: s,
                    container: t,
                    maxCount: u,
                    duration: v,
                    rtl: w,
                    top: x
                } = function() {
                    const {
                        prefixCls: y,
                        getContainer: z,
                        duration: A,
                        rtl: B,
                        maxCount: C,
                        top: D
                    } = p;
                    return {
                        prefixCls: null != y ? y : (0, i.globalConfig)().getPrefixCls('message'),
                        container: (null == z ? void 0 : z()) || document.body,
                        duration: A,
                        rtl: B,
                        maxCount: C,
                        top: D
                    };
                }();
                return {
                    prefixCls: s,
                    getContainer: () => t,
                    maxCount: u,
                    duration: v,
                    rtl: w,
                    top: x
                };
            },
            [s, t] = h.useState(r),
            [u, v] = (0, k.useInternalMessage)(s),
            w = (0, i.globalConfig)(),
            x = w.getRootPrefixCls(),
            y = w.getIconPrefixCls(),
            z = () => {
                t(r);
            };
        return h.useEffect(z, []), h.useImperativeHandle(d, () => {
            const A = Object.assign({}, u);
            return Object.keys(A).forEach(d => {
                A[d] = function() {
                    return z(), u[d].apply(u, arguments);
                };
            }), {
                instance: A,
                sync: z
            };
        }), h.createElement(i.default, {
            prefixCls: x,
            iconPrefixCls: y
        }, v);
    });

    function r() {
        if (!m) {
            const s = document.createDocumentFragment(),
                t = {
                    fragment: s
                };
            return m = t, void n(() => {
                (0, g.render)(h.createElement(q, {
                    ref: s => {
                        const {
                            instance: u,
                            sync: v
                        } = s || {};
                        Promise.resolve().then(() => {
                            !t.instance && u && (t.instance = u, t.sync = v, r());
                        });
                    }
                }), s);
            });
        }
        m.instance && (o.forEach(a => {
            const {
                type: s,
                skipped: t
            } = a;
            if (!t)
                switch (s) {
                    case 'open':
                        n(() => {
                            const u = m.instance.open(Object.assign(Object.assign({}, p), a.config));
                            null == u || u.then(a.resolve), a.setCloseFn(u);
                        });
                        break;
                    case 'destroy':
                        n(() => {
                            null == m || m.instance.destroy(a.key);
                        });
                        break;
                    default:
                        n(() => {
                            var u;
                            const v = (u = m.instance)[s].apply(u, (0, f.default)(a.args));
                            null == v || v.then(a.resolve), a.setCloseFn(v);
                        });
                }
        }), o = []);
    }

    function s(t, u) {
        const v = (0, l.wrapPromiseFn)(v => {
            let w;
            const x = {
                type: t,
                args: u,
                resolve: v,
                setCloseFn: t => {
                    w = t;
                }
            };
            return o.push(x), () => {
                w ? n(() => {
                    w();
                }) : x.skipped = !0;
            };
        });
        return r(), v;
    }
    const t = {
        open: function(u) {
            const v = (0, l.wrapPromiseFn)(v => {
                let w;
                const x = {
                    type: 'open',
                    config: u,
                    resolve: v,
                    setCloseFn: u => {
                        w = u;
                    }
                };
                return o.push(x), () => {
                    w ? n(() => {
                        w();
                    }) : x.skipped = !0;
                };
            });
            return r(), v;
        },
        destroy: function(u) {
            o.push({
                type: 'destroy',
                key: u
            }), r();
        },
        config: function(u) {
            p = Object.assign(Object.assign({}, p), u), n(() => {
                var v;
                null === (v = null == m ? void 0 : m.sync) || void 0 === v || v.call(m);
            });
        },
        useMessage: k.default,
        _InternalPanelDoNotUseOrYouWillBeFired: j.default
    };
    [
        'success',
        'info',
        'warning',
        'error',
        'loading'
    ].forEach(a => {
        t[a] = function() {
            for (var u = arguments.length, v = new Array(u), w = 0; w < u; w++)
                v[w] = arguments[w];
            return s(a, v);
        };
    });
    var _u = t;
}), c.register('TMn+i0', function(d, e) {
    a(d.exports, 'TypeIcon', function() {
        return _q;
    }, function(f) {
        return _q = f;
    }), a(d.exports, 'PureContent', function() {
        return _r;
    }, function(f) {
        return _r = f;
    }), a(d.exports, 'default', function() {
        return _s;
    }, function(f) {
        return _s = f;
    });
    var f = c('O0Kav'),
        g = c('bR8Yv'),
        h = c('ltJdn'),
        i = c('7s2gi'),
        j = c('DEY39'),
        k = c('/VDzu'),
        l = c('tGVyf'),
        m = c('/U36/'),
        n = c('Odcy10'),
        o = c('R2nG3'),
        p = function(q, r) {
            var s = {};
            for (var t in q)
                Object.prototype.hasOwnProperty.call(q, t) && r.indexOf(t) < 0 && (s[t] = q[t]);
            if (null != q && 'function' == typeof Object.getOwnPropertySymbols) {
                var u = 0;
                for (t = Object.getOwnPropertySymbols(q); u < t.length; u++)
                    r.indexOf(t[u]) < 0 && Object.prototype.propertyIsEnumerable.call(q, t[u]) && (s[t[u]] = q[t[u]]);
            }
            return s;
        };
    const _q = {
        info: f.createElement(k.default, null),
        success: f.createElement(j.default, null),
        error: f.createElement(i.default, null),
        warning: f.createElement(h.default, null),
        loading: f.createElement(g.default, null)
    };

    function _r(s) {
        let {
            prefixCls: t,
            type: u,
            icon: v,
            children: w
        } = s;
        return f.createElement('div', {
            className: b(m)(`${ t }-custom-content`, `${ t }-${ u }`)
        }, v || _q[u], f.createElement('span', null, w));
    }

    function _s(t) {
        const {
            prefixCls: u,
            className: v,
            type: w,
            icon: x,
            content: y
        } = t, z = p(t, [
            'prefixCls',
            'className',
            'type',
            'icon',
            'content'
        ]), {
            getPrefixCls: A
        } = f.useContext(o.ConfigContext), B = u || A('message'), [, C] = (0, n.default)(B);
        return f.createElement(l.Notice, Object.assign({}, z, {
            prefixCls: B,
            className: b(m)(v, C, `${ B }-notice-pure-panel`),
            eventKey: 'pure',
            duration: null,
            content: f.createElement(_r, {
                prefixCls: B,
                type: w,
                icon: x
            }, y)
        }));
    }
}), c.register('Odcy10', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = a => {
        const {
            componentCls: k,
            iconCls: l,
            boxShadow: m,
            colorBgElevated: n,
            colorSuccess: o,
            colorError: p,
            colorWarning: _q,
            colorInfo: r,
            fontSizeLG: s,
            motionEaseInOutCirc: t,
            motionDurationSlow: u,
            marginXS: v,
            paddingXS: w,
            borderRadiusLG: x,
            zIndexPopup: y,
            messageNoticeContentPadding: z
        } = a, A = new(0, f.Keyframes)('MessageMoveIn', {
            '0%': {
                padding: 0,
                transform: 'translateY(-100%)',
                opacity: 0
            },
            '100%': {
                padding: w,
                transform: 'translateY(0)',
                opacity: 1
            }
        }), B = new(0, f.Keyframes)('MessageMoveOut', {
            '0%': {
                maxHeight: a.height,
                padding: w,
                opacity: 1
            },
            '100%': {
                maxHeight: 0,
                padding: 0,
                opacity: 0
            }
        });
        return [{
                [k]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    position: 'fixed',
                    top: v,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: y,
                    [`${ k }-move-up`]: {
                        animationFillMode: 'forwards'
                    },
                    [`\n        ${ k }-move-up-appear,\n        ${ k }-move-up-enter\n      `]: {
                        animationName: A,
                        animationDuration: u,
                        animationPlayState: 'paused',
                        animationTimingFunction: t
                    },
                    [`\n        ${ k }-move-up-appear${ k }-move-up-appear-active,\n        ${ k }-move-up-enter${ k }-move-up-enter-active\n      `]: {
                        animationPlayState: 'running'
                    },
                    [`${ k }-move-up-leave`]: {
                        animationName: B,
                        animationDuration: u,
                        animationPlayState: 'paused',
                        animationTimingFunction: t
                    },
                    [`${ k }-move-up-leave${ k }-move-up-leave-active`]: {
                        animationPlayState: 'running'
                    },
                    '&-rtl': {
                        direction: 'rtl',
                        span: {
                            direction: 'rtl'
                        }
                    }
                })
            },
            {
                [`${ k }-notice`]: {
                    padding: w,
                    textAlign: 'center',
                    [`${ k }-custom-content > ${ l }`]: {
                        verticalAlign: 'text-bottom',
                        marginInlineEnd: v,
                        fontSize: s
                    },
                    [`${ k }-notice-content`]: {
                        display: 'inline-block',
                        padding: z,
                        background: n,
                        borderRadius: x,
                        boxShadow: m,
                        pointerEvents: 'all'
                    },
                    [`${ k }-success > ${ l }`]: {
                        color: o
                    },
                    [`${ k }-error > ${ l }`]: {
                        color: p
                    },
                    [`${ k }-warning > ${ l }`]: {
                        color: _q
                    },
                    [`\n        ${ k }-info > ${ l },\n        ${ k }-loading > ${ l }`]: {
                        color: r
                    }
                }
            },
            {
                [`${ k }-notice-pure-panel`]: {
                    padding: 0,
                    textAlign: 'start'
                }
            }
        ];
    };
    var k = (0, g.default)('Message', a => {
        const l = (0, h.merge)(a, {
            messageNoticeContentPadding: `${ (a.controlHeightLG - a.fontSize * a.lineHeight) / 2 }px ${ a.paddingSM }px`
        });
        return [j(l)];
    }, a => ({
        height: 150,
        zIndexPopup: a.zIndexPopupBase + 10
    }));
}), c.register('d3CSY0', function(d, e) {
    a(d.exports, 'useInternalMessage', function() {
        return _x;
    }, function(f) {
        return _x = f;
    }), a(d.exports, 'default', function() {
        return _y;
    }, function(f) {
        return _y = f;
    });
    var f = c('O0Kav'),
        g = c('tGVyf'),
        h = c('/U36/'),
        i = c('ReZvd'),
        j = c('R2nG3'),
        k = c('Odcy10'),
        l = c('68fTw'),
        m = c('TMn+i0'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = 3,
        p = f.forwardRef((a, c) => {
            const {
                top: q,
                prefixCls: r,
                getContainer: s,
                maxCount: t,
                duration: u = v,
                rtl: w,
                transitionName: _x,
                onAllRemoved: _y
            } = a, {
                getPrefixCls: z,
                getPopupContainer: A
            } = f.useContext(j.ConfigContext), B = r || z('message'), [, C] = (0, k.default)(B), D = f.createElement('span', {
                className: `${ B }-close-x`
            }, f.createElement(i.default, {
                className: `${ B }-close-icon`
            })), [E, F] = (0, g.useNotification)({
                prefixCls: B,
                style: () => ({
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: null != q ? q : 8
                }),
                className: () => b(h)(C, w ? `${ B }-rtl` : ''),
                motion: () => (0, l.getMotion)(B, _x),
                closable: !1,
                closeIcon: D,
                duration: u,
                getContainer: () => (null == s ? void 0 : s()) || (null == A ? void 0 : A()) || document.body,
                maxCount: t,
                onAllRemoved: _y
            });
            return f.useImperativeHandle(c, () => Object.assign(Object.assign({}, E), {
                prefixCls: B,
                hashId: C
            })), F;
        });
    let q = 0;

    function r(s) {
        const t = f.useRef(null);
        return [
            f.useMemo(() => {
                const u = u => {
                        var v;
                        null === (v = t.current) || void 0 === v || v.close(u);
                    },
                    v = v => {
                        if (!t.current) {
                            const w = () => {};
                            return w.then = () => {}, w;
                        }
                        const {
                            open: w,
                            prefixCls: x,
                            hashId: y
                        } = t.current, z = `${ x }-notice`, {
                            content: A,
                            icon: B,
                            type: C,
                            key: D,
                            className: E,
                            onClose: F
                        } = v, G = n(v, [
                            'content',
                            'icon',
                            'type',
                            'key',
                            'className',
                            'onClose'
                        ]);
                        let H = D;
                        return null == H && (q += 1, H = `antd-message-${ q }`), (0, l.wrapPromiseFn)(t => (w(Object.assign(Object.assign({}, G), {
                            key: H,
                            content: f.createElement(m.PureContent, {
                                prefixCls: x,
                                type: C,
                                icon: B
                            }, A),
                            placement: 'top',
                            className: b(h)(C && `${ z }-${ C }`, y, E),
                            onClose: () => {
                                null == F || F(), t();
                            }
                        })), () => {
                            u(H);
                        }));
                    },
                    w = {
                        open: v,
                        destroy: b => {
                            var x;
                            void 0 !== b ? u(b) : null === (x = t.current) || void 0 === x || x.destroy();
                        }
                    };
                return [
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].forEach(u => {
                    w[u] = (b, t, w) => {
                        let x, y, z;
                        x = b && 'object' == typeof b && 'content' in b ? b : {
                            content: b
                        }, 'function' == typeof t ? z = t : (y = t, z = w);
                        const A = Object.assign(Object.assign({
                            onClose: z,
                            duration: y
                        }, x), {
                            type: u
                        });
                        return v(A);
                    };
                }), w;
            }, []),
            f.createElement(p, Object.assign({
                key: 'message-holder'
            }, s, {
                ref: t
            }))
        ];
    }

    function s(t) {
        return r(t);
    }
}), c.register('68fTw', function(d, e) {
    function f(g, h) {
        return {
            motionName: null != h ? h : `${ g }-move-up`
        };
    }

    function g(h) {
        let i;
        const j = new Promise(j => {
                i = h(() => {
                    j(!0);
                });
            }),
            k = () => {
                null == i || i();
            };
        return k.then = (h, i) => j.then(h, i), k.promise = j, k;
    }
    a(d.exports, 'getMotion', function() {
        return f;
    }), a(d.exports, 'wrapPromiseFn', function() {
        return g;
    });
});