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
c.register('F3o+r', function(d, e) {
    a(d.exports, 'default', function() {
        return _A;
    });
    var f = c('YpFEA'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('xEOAq'),
        j = c('F9p7h');
    let k = null,
        l = a => a(),
        m = [],
        n = {};
    const o = g.forwardRef((a, d) => {
        const [p, q] = g.useState(), [r, s] = g.useState(), [t, u] = g.useState(), [v, w] = g.useState(), [x, y] = g.useState(), [z, _A] = g.useState(), [B, C] = (0, j.useInternalNotification)({
            prefixCls: p,
            getContainer: () => r,
            maxCount: t,
            rtl: v,
            top: x,
            bottom: z
        }), D = (0, h.globalConfig)(), E = D.getRootPrefixCls(), F = D.getIconPrefixCls(), G = () => {
            const {
                prefixCls: H,
                container: I,
                maxCount: J,
                rtl: K,
                top: L,
                bottom: M
            } = function() {
                const {
                    prefixCls: N,
                    getContainer: O,
                    rtl: P,
                    maxCount: Q,
                    top: R,
                    bottom: S
                } = n;
                return {
                    prefixCls: null != N ? N : (0, h.globalConfig)().getPrefixCls('notification'),
                    container: (null == O ? void 0 : O()) || document.body,
                    rtl: P,
                    maxCount: Q,
                    top: R,
                    bottom: S
                };
            }();
            q(H), s(I), u(J), w(K), y(L), _A(M);
        };
        return g.useEffect(G, []), g.useImperativeHandle(d, () => {
            const H = Object.assign({}, B);
            return Object.keys(H).forEach(d => {
                H[d] = function() {
                    return G(), B[d].apply(B, arguments);
                };
            }), {
                instance: H,
                sync: G
            };
        }), g.createElement(h.default, {
            prefixCls: E,
            iconPrefixCls: F
        }, C);
    });

    function p() {
        if (!k) {
            const q = document.createDocumentFragment(),
                r = {
                    fragment: q
                };
            return k = r, void l(() => {
                (0, f.render)(g.createElement(o, {
                    ref: q => {
                        const {
                            instance: s,
                            sync: t
                        } = q || {};
                        Promise.resolve().then(() => {
                            !r.instance && s && (r.instance = s, r.sync = t, p());
                        });
                    }
                }), q);
            });
        }
        k.instance && (m.forEach(a => {
            switch (a.type) {
                case 'open':
                    l(() => {
                        k.instance.open(Object.assign(Object.assign({}, n), a.config));
                    });
                    break;
                case 'destroy':
                    l(() => {
                        null == k || k.instance.destroy(a.key);
                    });
            }
        }), m = []);
    }

    function q(r) {
        m.push({
            type: 'open',
            config: r
        }), p();
    }
    const r = {
        open: q,
        destroy: function(s) {
            m.push({
                type: 'destroy',
                key: s
            }), p();
        },
        config: function(s) {
            n = Object.assign(Object.assign({}, n), s), l(() => {
                var t;
                null === (t = null == k ? void 0 : k.sync) || void 0 === t || t.call(k);
            });
        },
        useNotification: j.default,
        _InternalPanelDoNotUseOrYouWillBeFired: i.default
    };
    [
        'success',
        'info',
        'warning',
        'error'
    ].forEach(a => {
        r[a] = d => q(Object.assign(Object.assign({}, d), {
            type: a
        }));
    });
    var s = r;
}), c.register('xEOAq', function(d, e) {
    a(d.exports, 'TypeIcon', function() {
        return _r;
    }, function(f) {
        return _r = f;
    }), a(d.exports, 'getCloseIcon', function() {
        return _s;
    }, function(f) {
        return _s = f;
    }), a(d.exports, 'PureContent', function() {
        return _u;
    }, function(f) {
        return _u = f;
    }), a(d.exports, 'default', function() {
        return _v;
    }, function(f) {
        return _v = f;
    });
    var f = c('O0Kav'),
        g = c('bR8Yv'),
        h = c('ltJdn'),
        i = c('7s2gi'),
        j = c('DEY39'),
        k = c('/VDzu'),
        l = c('ReZvd'),
        m = c('tGVyf'),
        n = c('/U36/'),
        o = c('1kok8'),
        p = c('R2nG3'),
        q = function(r, s) {
            var t = {};
            for (var u in r)
                Object.prototype.hasOwnProperty.call(r, u) && s.indexOf(u) < 0 && (t[u] = r[u]);
            if (null != r && 'function' == typeof Object.getOwnPropertySymbols) {
                var v = 0;
                for (u = Object.getOwnPropertySymbols(r); v < u.length; v++)
                    s.indexOf(u[v]) < 0 && Object.prototype.propertyIsEnumerable.call(r, u[v]) && (t[u[v]] = r[u[v]]);
            }
            return t;
        };
    const _r = {
        info: f.createElement(k.default, null),
        success: f.createElement(j.default, null),
        error: f.createElement(i.default, null),
        warning: f.createElement(h.default, null),
        loading: f.createElement(g.default, null)
    };

    function _s(t, u) {
        return u || f.createElement('span', {
            className: `${ t }-close-x`
        }, f.createElement(l.default, {
            className: `${ t }-close-icon`
        }));
    }
    const t = {
        success: j.default,
        info: k.default,
        error: i.default,
        warning: h.default
    };

    function _u(v) {
        let {
            prefixCls: w,
            icon: x,
            type: y,
            message: z,
            description: A,
            btn: B
        } = v, C = null;
        return x ? C = f.createElement('span', {
            className: `${ w }-icon`
        }, x) : y && (C = f.createElement(t[y] || null, {
            className: b(n)(`${ w }-icon`, `${ w }-icon-${ y }`)
        })), f.createElement('div', {
            className: b(n)({
                [`${ w }-with-icon`]: C
            }),
            role: 'alert'
        }, C, f.createElement('div', {
            className: `${ w }-message`
        }, z), f.createElement('div', {
            className: `${ w }-description`
        }, A), B && f.createElement('div', {
            className: `${ w }-btn`
        }, B));
    }

    function _v(w) {
        const {
            prefixCls: x,
            className: y,
            icon: z,
            type: A,
            message: B,
            description: C,
            btn: D,
            closable: E = !0,
            closeIcon: F
        } = w, G = q(w, [
            'prefixCls',
            'className',
            'icon',
            'type',
            'message',
            'description',
            'btn',
            'closable',
            'closeIcon'
        ]), {
            getPrefixCls: H
        } = f.useContext(p.ConfigContext), I = x || H('notification'), J = `${ I }-notice`, [, K] = (0, o.default)(I);
        return f.createElement(m.Notice, Object.assign({}, G, {
            prefixCls: I,
            className: b(n)(y, K, `${ J }-pure-panel`),
            eventKey: 'pure',
            duration: null,
            closable: E,
            closeIcon: _s(I, F),
            content: f.createElement(_u, {
                prefixCls: J,
                icon: z,
                type: A,
                message: B,
                description: C,
                btn: D
            })
        }));
    }
}), c.register('1kok8', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('fanif'),
        j = c('/zzpx');
    const k = a => {
        const {
            iconCls: l,
            componentCls: m,
            boxShadow: n,
            fontSizeLG: o,
            notificationMarginBottom: p,
            borderRadiusLG: q,
            colorSuccess: _r,
            colorInfo: s,
            colorWarning: t,
            colorError: u,
            colorTextHeading: v,
            notificationBg: w,
            notificationPadding: x,
            notificationMarginEdge: y,
            motionDurationMid: z,
            motionEaseInOut: A,
            fontSize: B,
            lineHeight: C,
            width: D,
            notificationIconSize: E
        } = a, F = `${ m }-notice`, G = new(0, f.Keyframes)('antNotificationFadeIn', {
            '0%': {
                left: {
                    _skip_check_: !0,
                    value: D
                },
                opacity: 0
            },
            '100%': {
                left: {
                    _skip_check_: !0,
                    value: 0
                },
                opacity: 1
            }
        }), H = new(0, f.Keyframes)('antNotificationFadeOut', {
            '0%': {
                maxHeight: a.animationMaxHeight,
                marginBottom: p,
                opacity: 1
            },
            '100%': {
                maxHeight: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0
            }
        });
        return [{
                [m]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                    position: 'fixed',
                    zIndex: a.zIndexPopup,
                    marginInlineEnd: y,
                    [`${ m }-hook-holder`]: {
                        position: 'relative'
                    },
                    [`&${ m }-top, &${ m }-bottom`]: {
                        [`${ m }-notice`]: {
                            marginInline: 'auto auto'
                        }
                    },
                    [`&${ m }-topLeft, &${ m }-bottomLeft`]: {
                        [`${ m }-notice`]: {
                            marginInlineEnd: 'auto',
                            marginInlineStart: 0
                        }
                    },
                    [`${ m }-fade-enter, ${ m }-fade-appear`]: {
                        animationDuration: a.motionDurationMid,
                        animationTimingFunction: A,
                        animationFillMode: 'both',
                        opacity: 0,
                        animationPlayState: 'paused'
                    },
                    [`${ m }-fade-leave`]: {
                        animationTimingFunction: A,
                        animationFillMode: 'both',
                        animationDuration: z,
                        animationPlayState: 'paused'
                    },
                    [`${ m }-fade-enter${ m }-fade-enter-active, ${ m }-fade-appear${ m }-fade-appear-active`]: {
                        animationName: G,
                        animationPlayState: 'running'
                    },
                    [`${ m }-fade-leave${ m }-fade-leave-active`]: {
                        animationName: H,
                        animationPlayState: 'running'
                    }
                }), (0, i.default)(a)), {
                    '&-rtl': {
                        direction: 'rtl',
                        [`${ m }-notice-btn`]: {
                            float: 'left'
                        }
                    }
                })
            },
            {
                [F]: {
                    position: 'relative',
                    width: D,
                    maxWidth: `calc(100vw - ${ 2 * y }px)`,
                    marginBottom: p,
                    marginInlineStart: 'auto',
                    padding: x,
                    overflow: 'hidden',
                    lineHeight: C,
                    wordWrap: 'break-word',
                    background: w,
                    borderRadius: q,
                    boxShadow: n,
                    [`${ m }-close-icon`]: {
                        fontSize: B,
                        cursor: 'pointer'
                    },
                    [`${ F }-message`]: {
                        marginBottom: a.marginXS,
                        color: v,
                        fontSize: o,
                        lineHeight: a.lineHeightLG
                    },
                    [`${ F }-description`]: {
                        fontSize: B
                    },
                    [`&${ F }-closable ${ F }-message`]: {
                        paddingInlineEnd: a.paddingLG
                    },
                    [`${ F }-with-icon ${ F }-message`]: {
                        marginBottom: a.marginXS,
                        marginInlineStart: a.marginSM + E,
                        fontSize: o
                    },
                    [`${ F }-with-icon ${ F }-description`]: {
                        marginInlineStart: a.marginSM + E,
                        fontSize: B
                    },
                    [`${ F }-icon`]: {
                        position: 'absolute',
                        fontSize: E,
                        lineHeight: 0,
                        [`&-success${ l }`]: {
                            color: _r
                        },
                        [`&-info${ l }`]: {
                            color: s
                        },
                        [`&-warning${ l }`]: {
                            color: t
                        },
                        [`&-error${ l }`]: {
                            color: u
                        }
                    },
                    [`${ F }-close`]: {
                        position: 'absolute',
                        top: a.notificationPaddingVertical,
                        insetInlineEnd: a.notificationPaddingHorizontal,
                        color: a.colorIcon,
                        outline: 'none',
                        width: a.notificationCloseButtonSize,
                        height: a.notificationCloseButtonSize,
                        borderRadius: a.borderRadiusSM,
                        transition: `background-color ${ a.motionDurationMid }, color ${ a.motionDurationMid }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            color: a.colorIconHover,
                            backgroundColor: a.wireframe ? 'transparent' : a.colorFillContent
                        }
                    },
                    [`${ F }-btn`]: {
                        float: 'right',
                        marginTop: a.marginSM
                    }
                }
            },
            {
                [`${ F }-pure-panel`]: {
                    margin: 0
                }
            }
        ];
    };
    var l = (0, g.default)('Notification', a => {
        const m = a.paddingMD,
            n = a.paddingLG,
            o = (0, h.merge)(a, {
                notificationBg: a.colorBgElevated,
                notificationPaddingVertical: m,
                notificationPaddingHorizontal: n,
                notificationPadding: `${ a.paddingMD }px ${ a.paddingContentHorizontalLG }px`,
                notificationMarginBottom: a.margin,
                notificationMarginEdge: a.marginLG,
                animationMaxHeight: 150,
                notificationIconSize: a.fontSizeLG * a.lineHeightLG,
                notificationCloseButtonSize: 0.55 * a.controlHeightLG
            });
        return [k(o)];
    }, a => ({
        zIndexPopup: a.zIndexPopupBase + 50,
        width: 384
    }));
}), c.register('fanif', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('ZyWBF');
    var _g = a => {
        const {
            componentCls: h,
            width: i,
            notificationMarginEdge: j
        } = a;
        return {
            [`&${ h }-top, &${ h }-bottom`]: {
                marginInline: 0
            },
            [`&${ h }-top`]: {
                [`${ h }-fade-enter${ h }-fade-enter-active, ${ h }-fade-appear${ h }-fade-appear-active`]: {
                    animationName: new(0, f.Keyframes)('antNotificationTopFadeIn', {
                        '0%': {
                            marginTop: '-100%',
                            opacity: 0
                        },
                        '100%': {
                            marginTop: 0,
                            opacity: 1
                        }
                    })
                }
            },
            [`&${ h }-bottom`]: {
                [`${ h }-fade-enter${ h }-fade-enter-active, ${ h }-fade-appear${ h }-fade-appear-active`]: {
                    animationName: new(0, f.Keyframes)('antNotificationBottomFadeIn', {
                        '0%': {
                            marginBottom: '-100%',
                            opacity: 0
                        },
                        '100%': {
                            marginBottom: 0,
                            opacity: 1
                        }
                    })
                }
            },
            [`&${ h }-topLeft, &${ h }-bottomLeft`]: {
                marginInlineEnd: 0,
                marginInlineStart: j,
                [`${ h }-fade-enter${ h }-fade-enter-active, ${ h }-fade-appear${ h }-fade-appear-active`]: {
                    animationName: new(0, f.Keyframes)('antNotificationLeftFadeIn', {
                        '0%': {
                            right: {
                                _skip_check_: !0,
                                value: i
                            },
                            opacity: 0
                        },
                        '100%': {
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            opacity: 1
                        }
                    })
                }
            }
        };
    };
}), c.register('F9p7h', function(d, e) {
    a(d.exports, 'useInternalNotification', function() {
        return _s;
    }, function(f) {
        return _s = f;
    }), a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('O0Kav'),
        g = c('tGVyf'),
        h = c('/U36/'),
        i = c('R2nG3'),
        j = c('Pm5AT'),
        k = c('1kok8'),
        l = c('xEOAq'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const n = f.forwardRef((a, c) => {
        const {
            top: o,
            bottom: p,
            prefixCls: q,
            getContainer: r,
            maxCount: _s,
            rtl: _t,
            onAllRemoved: u
        } = a, {
            getPrefixCls: v,
            getPopupContainer: w
        } = f.useContext(i.ConfigContext), x = q || v('notification'), [, y] = (0, k.default)(x), [z, A] = (0, g.useNotification)({
            prefixCls: x,
            style: a => (0, j.getPlacementStyle)(a, null != o ? o : 24, null != p ? p : 24),
            className: () => b(h)(y, {
                [`${ x }-rtl`]: _t
            }),
            motion: () => (0, j.getMotion)(x),
            closable: !0,
            closeIcon: (0, l.getCloseIcon)(x),
            duration: 4.5,
            getContainer: () => (null == r ? void 0 : r()) || (null == w ? void 0 : w()) || document.body,
            maxCount: _s,
            onAllRemoved: u
        });
        return f.useImperativeHandle(c, () => Object.assign(Object.assign({}, z), {
            prefixCls: x,
            hashId: y
        })), A;
    });

    function o(p) {
        const q = f.useRef(null);
        return [
            f.useMemo(() => {
                const r = r => {
                        if (!q.current)
                            return;
                        const {
                            open: s,
                            prefixCls: t,
                            hashId: u
                        } = q.current, v = `${ t }-notice`, {
                            message: w,
                            description: x,
                            icon: y,
                            type: z,
                            placement: A = 'topRight',
                            btn: B,
                            className: C
                        } = r, D = m(r, [
                            'message',
                            'description',
                            'icon',
                            'type',
                            'placement',
                            'btn',
                            'className'
                        ]);
                        return s(Object.assign(Object.assign({}, D), {
                            content: f.createElement(l.PureContent, {
                                prefixCls: v,
                                icon: y,
                                type: z,
                                message: w,
                                description: x,
                                btn: B
                            }),
                            placement: A,
                            className: b(h)(z && `${ v }-${ z }`, u, C)
                        }));
                    },
                    s = {
                        open: r,
                        destroy: r => {
                            var t, u;
                            void 0 !== r ? null === (t = q.current) || void 0 === t || t.close(r) : null === (u = q.current) || void 0 === u || u.destroy();
                        }
                    };
                return [
                    'success',
                    'info',
                    'warning',
                    'error'
                ].forEach(b => {
                    s[b] = q => r(Object.assign(Object.assign({}, q), {
                        type: b
                    }));
                }), s;
            }, []),
            f.createElement(n, Object.assign({
                key: 'notification-holder'
            }, p, {
                ref: q
            }))
        ];
    }

    function p(q) {
        return o(q);
    }
}), c.register('Pm5AT', function(d, e) {
    function f(g, h, i) {
        let j;
        switch (g) {
            case 'top':
                j = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: h,
                    bottom: 'auto'
                };
                break;
            case 'topLeft':
                j = {
                    left: 0,
                    top: h,
                    bottom: 'auto'
                };
                break;
            case 'topRight':
                j = {
                    right: 0,
                    top: h,
                    bottom: 'auto'
                };
                break;
            case 'bottom':
                j = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: 'auto',
                    bottom: i
                };
                break;
            case 'bottomLeft':
                j = {
                    left: 0,
                    top: 'auto',
                    bottom: i
                };
                break;
            default:
                j = {
                    right: 0,
                    top: 'auto',
                    bottom: i
                };
        }
        return j;
    }

    function g(h) {
        return {
            motionName: `${ h }-fade`
        };
    }
    a(d.exports, 'getPlacementStyle', function() {
        return f;
    }), a(d.exports, 'getMotion', function() {
        return g;
    });
});