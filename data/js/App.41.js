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
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    let k = null,
        l = m => m(),
        m = [],
        n = {};
    const o = g.forwardRef((p, q) => {
        const [r, s] = g.useState(), [t, u] = g.useState(), [v, w] = g.useState(), [x, y] = g.useState(), [z, A] = g.useState(), [B, C] = g.useState(), [D, E] = (0, j.useInternalNotification)({
            prefixCls: r,
            getContainer: () => t,
            maxCount: v,
            rtl: x,
            top: z,
            bottom: B
        }), F = (0, h.globalConfig)(), G = F.getRootPrefixCls(), H = F.getIconPrefixCls(), I = () => {
            const {
                prefixCls: J,
                container: K,
                maxCount: L,
                rtl: M,
                top: N,
                bottom: O
            } = function() {
                const {
                    prefixCls: P,
                    getContainer: Q,
                    rtl: R,
                    maxCount: S,
                    top: T,
                    bottom: U
                } = n;
                return {
                    prefixCls: null != P ? P : (0, h.globalConfig)().getPrefixCls('notification'),
                    container: (null == Q ? void 0 : Q()) || document.body,
                    rtl: R,
                    maxCount: S,
                    top: T,
                    bottom: U
                };
            }();
            s(J), u(K), w(L), y(M), A(N), C(O);
        };
        return g.useEffect(I, []), g.useImperativeHandle(q, () => {
            const J = Object.assign({}, D);
            return Object.keys(J).forEach(K => {
                J[K] = function() {
                    return I(), D[K].apply(D, arguments);
                };
            }), {
                instance: J,
                sync: I
            };
        }), g.createElement(h.default, {
            prefixCls: G,
            iconPrefixCls: H
        }, E);
    });

    function p() {
        if (!k) {
            const q = document.createDocumentFragment(),
                r = {
                    fragment: q
                };
            return k = r, void l(() => {
                (0, f.render)(g.createElement(o, {
                    ref: s => {
                        const {
                            instance: t,
                            sync: u
                        } = s || {};
                        Promise.resolve().then(() => {
                            !r.instance && t && (r.instance = t, r.sync = u, p());
                        });
                    }
                }), q);
            });
        }
        k.instance && (m.forEach(s => {
            switch (s.type) {
                case 'open':
                    l(() => {
                        k.instance.open(Object.assign(Object.assign({}, n), s.config));
                    });
                    break;
                case 'destroy':
                    l(() => {
                        null == k || k.instance.destroy(s.key);
                    });
            }
        }), m = []);
    }

    function s(t) {
        m.push({
            type: 'open',
            config: t
        }), p();
    }
    const t = {
        open: s,
        destroy: function(u) {
            m.push({
                type: 'destroy',
                key: u
            }), p();
        },
        config: function(u) {
            n = Object.assign(Object.assign({}, n), u), l(() => {
                var v;
                null === (v = null == k ? void 0 : k.sync) || void 0 === v || v.call(k);
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
    ].forEach(u => {
        t[u] = v => s(Object.assign(Object.assign({}, v), {
            type: u
        }));
    });
    var _u = t;
}), c.register('.....', function(d, e) {
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
        } = f.useContext(p.ConfigContext), I = x || H('notification'), J = `${ _v }-notice`, [, K] = (0, o.default)(_v);
        return f.createElement(m.Notice, Object.assign({}, G, {
            prefixCls: _v,
            className: b(n)(y, K, `${ J }-pure-panel`),
            eventKey: 'pure',
            duration: null,
            closable: E,
            closeIcon: _s(_v, F),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const k = l => {
        const {
            iconCls: m,
            componentCls: n,
            boxShadow: o,
            fontSizeLG: p,
            notificationMarginBottom: q,
            borderRadiusLG: r,
            colorSuccess: s,
            colorInfo: t,
            colorWarning: u,
            colorError: v,
            colorTextHeading: w,
            notificationBg: x,
            notificationPadding: y,
            notificationMarginEdge: z,
            motionDurationMid: A,
            motionEaseInOut: B,
            fontSize: C,
            lineHeight: D,
            width: E,
            notificationIconSize: F
        } = l, G = `${ n }-notice`, H = new(0, f.Keyframes)('antNotificationFadeIn', {
            '0%': {
                left: {
                    _skip_check_: !0,
                    value: E
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
        }), I = new(0, f.Keyframes)('antNotificationFadeOut', {
            '0%': {
                maxHeight: l.animationMaxHeight,
                marginBottom: q,
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
                [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, j.resetComponent)(l)), {
                    position: 'fixed',
                    zIndex: l.zIndexPopup,
                    marginInlineEnd: z,
                    [`${ n }-hook-holder`]: {
                        position: 'relative'
                    },
                    [`&${ n }-top, &${ n }-bottom`]: {
                        [`${ n }-notice`]: {
                            marginInline: 'auto auto'
                        }
                    },
                    [`&${ n }-topLeft, &${ n }-bottomLeft`]: {
                        [`${ n }-notice`]: {
                            marginInlineEnd: 'auto',
                            marginInlineStart: 0
                        }
                    },
                    [`${ n }-fade-enter, ${ n }-fade-appear`]: {
                        animationDuration: l.motionDurationMid,
                        animationTimingFunction: B,
                        animationFillMode: 'both',
                        opacity: 0,
                        animationPlayState: 'paused'
                    },
                    [`${ n }-fade-leave`]: {
                        animationTimingFunction: B,
                        animationFillMode: 'both',
                        animationDuration: A,
                        animationPlayState: 'paused'
                    },
                    [`${ n }-fade-enter${ n }-fade-enter-active, ${ n }-fade-appear${ n }-fade-appear-active`]: {
                        animationName: H,
                        animationPlayState: 'running'
                    },
                    [`${ n }-fade-leave${ n }-fade-leave-active`]: {
                        animationName: I,
                        animationPlayState: 'running'
                    }
                }), (0, i.default)(l)), {
                    '&-rtl': {
                        direction: 'rtl',
                        [`${ n }-notice-btn`]: {
                            float: 'left'
                        }
                    }
                })
            },
            {
                [G]: {
                    position: 'relative',
                    width: E,
                    maxWidth: `calc(100vw - ${ 2 * z }px)`,
                    marginBottom: q,
                    marginInlineStart: 'auto',
                    padding: y,
                    overflow: 'hidden',
                    lineHeight: D,
                    wordWrap: 'break-word',
                    background: x,
                    borderRadius: r,
                    boxShadow: o,
                    [`${ n }-close-icon`]: {
                        fontSize: C,
                        cursor: 'pointer'
                    },
                    [`${ G }-message`]: {
                        marginBottom: l.marginXS,
                        color: w,
                        fontSize: p,
                        lineHeight: l.lineHeightLG
                    },
                    [`${ G }-description`]: {
                        fontSize: C
                    },
                    [`&${ G }-closable ${ G }-message`]: {
                        paddingInlineEnd: l.paddingLG
                    },
                    [`${ G }-with-icon ${ G }-message`]: {
                        marginBottom: l.marginXS,
                        marginInlineStart: l.marginSM + F,
                        fontSize: p
                    },
                    [`${ G }-with-icon ${ G }-description`]: {
                        marginInlineStart: l.marginSM + F,
                        fontSize: C
                    },
                    [`${ G }-icon`]: {
                        position: 'absolute',
                        fontSize: F,
                        lineHeight: 0,
                        [`&-success${ m }`]: {
                            color: s
                        },
                        [`&-info${ m }`]: {
                            color: t
                        },
                        [`&-warning${ m }`]: {
                            color: u
                        },
                        [`&-error${ m }`]: {
                            color: v
                        }
                    },
                    [`${ G }-close`]: {
                        position: 'absolute',
                        top: l.notificationPaddingVertical,
                        insetInlineEnd: l.notificationPaddingHorizontal,
                        color: l.colorIcon,
                        outline: 'none',
                        width: l.notificationCloseButtonSize,
                        height: l.notificationCloseButtonSize,
                        borderRadius: l.borderRadiusSM,
                        transition: `background-color ${ l.motionDurationMid }, color ${ l.motionDurationMid }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            color: l.colorIconHover,
                            backgroundColor: l.wireframe ? 'transparent' : l.colorFillContent
                        }
                    },
                    [`${ G }-btn`]: {
                        float: 'right',
                        marginTop: l.marginSM
                    }
                }
            },
            {
                [`${ G }-pure-panel`]: {
                    margin: 0
                }
            }
        ];
    };
    var _l = (0, g.default)('Notification', m => {
        const n = m.paddingMD,
            o = m.paddingLG,
            p = (0, h.merge)(m, {
                notificationBg: m.colorBgElevated,
                notificationPaddingVertical: n,
                notificationPaddingHorizontal: o,
                notificationPadding: `${ m.paddingMD }px ${ m.paddingContentHorizontalLG }px`,
                notificationMarginBottom: m.margin,
                notificationMarginEdge: m.marginLG,
                animationMaxHeight: 150,
                notificationIconSize: m.fontSizeLG * m.lineHeightLG,
                notificationCloseButtonSize: 0.55 * m.controlHeightLG
            });
        return [k(p)];
    }, m => ({
        zIndexPopup: m.zIndexPopupBase + 50,
        width: 384
    }));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const {
            componentCls: i,
            width: j,
            notificationMarginEdge: k
        } = h;
        return {
            [`&${ i }-top, &${ i }-bottom`]: {
                marginInline: 0
            },
            [`&${ i }-top`]: {
                [`${ i }-fade-enter${ i }-fade-enter-active, ${ i }-fade-appear${ i }-fade-appear-active`]: {
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
            [`&${ i }-bottom`]: {
                [`${ i }-fade-enter${ i }-fade-enter-active, ${ i }-fade-appear${ i }-fade-appear-active`]: {
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
            [`&${ i }-topLeft, &${ i }-bottomLeft`]: {
                marginInlineEnd: 0,
                marginInlineStart: k,
                [`${ i }-fade-enter${ i }-fade-enter-active, ${ i }-fade-appear${ i }-fade-appear-active`]: {
                    animationName: new(0, f.Keyframes)('antNotificationLeftFadeIn', {
                        '0%': {
                            right: {
                                _skip_check_: !0,
                                value: j
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'useInternalNotification', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _q;
    }, function(f) {
        return _q = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
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
    const n = f.forwardRef((o, p) => {
        const {
            top: q,
            bottom: r,
            prefixCls: s,
            getContainer: t,
            maxCount: u,
            rtl: v,
            onAllRemoved: w
        } = o, {
            getPrefixCls: x,
            getPopupContainer: y
        } = f.useContext(i.ConfigContext), z = s || x('notification'), [, A] = (0, k.default)(z), [B, C] = (0, g.useNotification)({
            prefixCls: z,
            style: D => (0, j.getPlacementStyle)(D, null != q ? q : 24, null != r ? r : 24),
            className: () => b(h)(A, {
                [`${ z }-rtl`]: v
            }),
            motion: () => (0, j.getMotion)(z),
            closable: !0,
            closeIcon: (0, l.getCloseIcon)(z),
            duration: 4.5,
            getContainer: () => (null == t ? void 0 : t()) || (null == y ? void 0 : y()) || document.body,
            maxCount: u,
            onAllRemoved: w
        });
        return f.useImperativeHandle(p, () => Object.assign(Object.assign({}, B), {
            prefixCls: z,
            hashId: A
        })), C;
    });

    function _o(p) {
        const q = f.useRef(null);
        return [
            f.useMemo(() => {
                const r = s => {
                        if (!q.current)
                            return;
                        const {
                            open: t,
                            prefixCls: u,
                            hashId: v
                        } = q.current, w = `${ u }-notice`, {
                            message: x,
                            description: y,
                            icon: z,
                            type: A,
                            placement: B = 'topRight',
                            btn: C,
                            className: D
                        } = s, E = m(s, [
                            'message',
                            'description',
                            'icon',
                            'type',
                            'placement',
                            'btn',
                            'className'
                        ]);
                        return t(Object.assign(Object.assign({}, E), {
                            content: f.createElement(l.PureContent, {
                                prefixCls: w,
                                icon: z,
                                type: A,
                                message: x,
                                description: y,
                                btn: C
                            }),
                            placement: B,
                            className: b(h)(A && `${ w }-${ A }`, v, D)
                        }));
                    },
                    s = {
                        open: r,
                        destroy: t => {
                            var u, v;
                            void 0 !== t ? null === (u = q.current) || void 0 === u || u.close(t) : null === (v = q.current) || void 0 === v || v.destroy();
                        }
                    };
                return [
                    'success',
                    'info',
                    'warning',
                    'error'
                ].forEach(t => {
                    s[t] = u => r(Object.assign(Object.assign({}, u), {
                        type: t
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

    function _q(r) {
        return _o(r);
    }
}), c.register('.....', function(d, e) {
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