function a(a, b, c, o) {
    Object.defineProperty(a, b, {
        get: c,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('+4qMp', function(b, o) {
    a(b.exports, 'default', function() {
        return y;
    });
    var d = c('4NqVP'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('ykUUB'),
        h = c('1Qq13');
    let i = null,
        j = a => a(),
        k = [],
        l = {};
    const m = e.forwardRef((a, b) => {
        const [n, o] = e.useState(), [p, q] = e.useState(), [r, s] = e.useState(), [t, u] = e.useState(), [v, w] = e.useState(), [x, y] = e.useState(), [z, A] = (0, h.useInternalNotification)({
            prefixCls: n,
            getContainer: () => p,
            maxCount: r,
            rtl: t,
            top: v,
            bottom: x
        }), B = (0, f.globalConfig)(), C = B.getRootPrefixCls(), D = B.getIconPrefixCls(), E = () => {
            const {
                prefixCls: F,
                container: G,
                maxCount: H,
                rtl: I,
                top: J,
                bottom: K
            } = function() {
                const {
                    prefixCls: L,
                    getContainer: M,
                    rtl: N,
                    maxCount: O,
                    top: P,
                    bottom: Q
                } = R;
                return {
                    prefixCls: null != L ? L : (0, f.globalConfig)().getPrefixCls('notification'),
                    container: (null == M ? void 0 : M()) || document.body,
                    rtl: N,
                    maxCount: O,
                    top: P,
                    bottom: Q
                };
            }();
            o(F), q(G), s(H), u(I), w(J), y(K);
        };
        return e.useEffect(E, []), e.useImperativeHandle(b, () => {
            const F = Object.assign({}, z);
            return Object.keys(F).forEach(b => {
                F[b] = function() {
                    return E(), z[b].apply(z, arguments);
                };
            }), {
                instance: F,
                sync: E
            };
        }), e.createElement(f.default, {
            prefixCls: C,
            iconPrefixCls: D
        }, A);
    });

    function n() {
        if (!i) {
            const o = document.createDocumentFragment(),
                p = {
                    fragment: o
                };
            return i = p, void j(() => {
                (0, d.render)(e.createElement(m, {
                    ref: o => {
                        const {
                            instance: q,
                            sync: r
                        } = o || {};
                        Promise.resolve().then(() => {
                            !p.instance && q && (p.instance = q, p.sync = r, n());
                        });
                    }
                }), o);
            });
        }
        i.instance && (k.forEach(a => {
            switch (a.type) {
                case 'open':
                    j(() => {
                        i.instance.open(Object.assign(Object.assign({}, l), a.config));
                    });
                    break;
                case 'destroy':
                    j(() => {
                        null == i || i.instance.destroy(a.key);
                    });
            }
        }), k = []);
    }

    function o(a) {
        k.push({
            type: 'open',
            config: a
        }), n();
    }
    const p = {
        open: o,
        destroy: function(a) {
            k.push({
                type: 'destroy',
                key: a
            }), n();
        },
        config: function(a) {
            l = Object.assign(Object.assign({}, l), a), j(() => {
                var q;
                null === (q = null == i ? void 0 : i.sync) || void 0 === q || q.call(i);
            });
        },
        useNotification: h.default,
        _InternalPanelDoNotUseOrYouWillBeFired: g.default
    };
    [
        'success',
        'info',
        'warning',
        'error'
    ].forEach(a => {
        p[a] = b => o(Object.assign(Object.assign({}, b), {
            type: a
        }));
    });
    var q = r;
}), c.register('ykUUB', function(q, r) {
    a(q.exports, 'TypeIcon', function() {
        return p;
    }, function(a) {
        return p = a;
    }), a(q.exports, 'getCloseIcon', function() {
        return q;
    }, function(a) {
        return q = a;
    }), a(q.exports, 'PureContent', function() {
        return s;
    }, function(a) {
        return s = a;
    }), a(q.exports, 'default', function() {
        return t;
    }, function(a) {
        return t = a;
    });
    var d = c('uPP4W'),
        e = c('TyHdy'),
        f = c('3QPei'),
        g = c('PAFXG'),
        h = c('fTLdQ'),
        i = c('D3laK'),
        j = c('obWo+'),
        k = c('BLIEh'),
        l = c('VAIs1'),
        m = c('yoICQ'),
        n = c('qEw51'),
        o = function(a, b) {
            var p = {};
            for (var q in a)
                Object.prototype.hasOwnProperty.call(a, q) && b.indexOf(q) < 0 && (p[q] = a[q]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(a); r < q.length; r++)
                    b.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(a, q[r]) && (p[q[r]] = a[q[r]]);
            }
            return p;
        };
    const p = {
        info: d.createElement(i.default, null),
        success: d.createElement(h.default, null),
        error: d.createElement(g.default, null),
        warning: d.createElement(f.default, null),
        loading: d.createElement(e.default, null)
    };

    function q(a, b) {
        return b || d.createElement('span', {
            className: `${ a }-close-x`
        }, d.createElement(j.default, {
            className: `${ a }-close-icon`
        }));
    }
    const r = {
        success: h.default,
        info: i.default,
        error: g.default,
        warning: f.default
    };

    function s(a) {
        let {
            prefixCls: t,
            icon: u,
            type: v,
            message: w,
            description: x,
            btn: y
        } = z, A = null;
        return u ? A = d.createElement('span', {
            className: `${ t }-icon`
        }, u) : v && (A = d.createElement(r[v] || null, {
            className: b(l)(`${ t }-icon`, `${ t }-icon-${ v }`)
        })), d.createElement('div', {
            className: b(l)({
                [`${ t }-with-icon`]: A
            }),
            role: 'alert'
        }, A, d.createElement('div', {
            className: `${ t }-message`
        }, w), d.createElement('div', {
            className: `${ t }-description`
        }, x), y && d.createElement('div', {
            className: `${ t }-btn`
        }, y));
    }

    function t(a) {
        const {
            prefixCls: u,
            className: v,
            icon: w,
            type: x,
            message: y,
            description: z,
            btn: A,
            closable: B = !0,
            closeIcon: C
        } = D, E = o(D, [
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
            getPrefixCls: F
        } = d.useContext(n.ConfigContext), G = u || F('notification'), H = `${ G }-notice`, [, I] = (0, m.default)(G);
        return d.createElement(k.Notice, Object.assign({}, E, {
            prefixCls: G,
            className: b(l)(v, I, `${ H }-pure-panel`),
            eventKey: 'pure',
            duration: null,
            closable: B,
            closeIcon: q(G, C),
            content: d.createElement(s, {
                prefixCls: H,
                icon: w,
                type: x,
                message: y,
                description: z,
                btn: A
            })
        }));
    }
}), c.register('yoICQ', function(b, l) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('yOxu+'),
        h = c('P38j/');
    const i = a => {
        const {
            iconCls: j,
            componentCls: k,
            boxShadow: l,
            fontSizeLG: m,
            notificationMarginBottom: n,
            borderRadiusLG: o,
            colorSuccess: p,
            colorInfo: q,
            colorWarning: r,
            colorError: s,
            colorTextHeading: t,
            notificationBg: u,
            notificationPadding: v,
            notificationMarginEdge: w,
            motionDurationMid: x,
            motionEaseInOut: y,
            fontSize: z,
            lineHeight: A,
            width: B,
            notificationIconSize: C
        } = D, E = `${ k }-notice`, F = new(0, d.Keyframes)('antNotificationFadeIn', {
            '0%': {
                left: {
                    _skip_check_: !0,
                    value: B
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
        }), G = new(0, d.Keyframes)('antNotificationFadeOut', {
            '0%': {
                maxHeight: D.animationMaxHeight,
                marginBottom: n,
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
                [k]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, h.resetComponent)(D)), {
                    position: 'fixed',
                    zIndex: D.zIndexPopup,
                    marginInlineEnd: w,
                    [`${ k }-hook-holder`]: {
                        position: 'relative'
                    },
                    [`&${ k }-top, &${ k }-bottom`]: {
                        [`${ k }-notice`]: {
                            marginInline: 'auto auto'
                        }
                    },
                    [`&${ k }-topLeft, &${ k }-bottomLeft`]: {
                        [`${ k }-notice`]: {
                            marginInlineEnd: 'auto',
                            marginInlineStart: 0
                        }
                    },
                    [`${ k }-fade-enter, ${ k }-fade-appear`]: {
                        animationDuration: D.motionDurationMid,
                        animationTimingFunction: y,
                        animationFillMode: 'both',
                        opacity: 0,
                        animationPlayState: 'paused'
                    },
                    [`${ k }-fade-leave`]: {
                        animationTimingFunction: y,
                        animationFillMode: 'both',
                        animationDuration: x,
                        animationPlayState: 'paused'
                    },
                    [`${ k }-fade-enter${ k }-fade-enter-active, ${ k }-fade-appear${ k }-fade-appear-active`]: {
                        animationName: F,
                        animationPlayState: 'running'
                    },
                    [`${ k }-fade-leave${ k }-fade-leave-active`]: {
                        animationName: G,
                        animationPlayState: 'running'
                    }
                }), (0, g.default)(D)), {
                    '&-rtl': {
                        direction: 'rtl',
                        [`${ k }-notice-btn`]: {
                            float: 'left'
                        }
                    }
                })
            },
            {
                [E]: {
                    position: 'relative',
                    width: B,
                    maxWidth: `calc(100vw - ${ 2 * w }px)`,
                    marginBottom: n,
                    marginInlineStart: 'auto',
                    padding: v,
                    overflow: 'hidden',
                    lineHeight: A,
                    wordWrap: 'break-word',
                    background: u,
                    borderRadius: o,
                    boxShadow: l,
                    [`${ k }-close-icon`]: {
                        fontSize: z,
                        cursor: 'pointer'
                    },
                    [`${ E }-message`]: {
                        marginBottom: D.marginXS,
                        color: t,
                        fontSize: m,
                        lineHeight: D.lineHeightLG
                    },
                    [`${ E }-description`]: {
                        fontSize: z
                    },
                    [`&${ E }-closable ${ E }-message`]: {
                        paddingInlineEnd: D.paddingLG
                    },
                    [`${ E }-with-icon ${ E }-message`]: {
                        marginBottom: D.marginXS,
                        marginInlineStart: D.marginSM + C,
                        fontSize: m
                    },
                    [`${ E }-with-icon ${ E }-description`]: {
                        marginInlineStart: D.marginSM + C,
                        fontSize: z
                    },
                    [`${ E }-icon`]: {
                        position: 'absolute',
                        fontSize: C,
                        lineHeight: 0,
                        [`&-success${ j }`]: {
                            color: p
                        },
                        [`&-info${ j }`]: {
                            color: q
                        },
                        [`&-warning${ j }`]: {
                            color: r
                        },
                        [`&-error${ j }`]: {
                            color: s
                        }
                    },
                    [`${ E }-close`]: {
                        position: 'absolute',
                        top: D.notificationPaddingVertical,
                        insetInlineEnd: D.notificationPaddingHorizontal,
                        color: D.colorIcon,
                        outline: 'none',
                        width: D.notificationCloseButtonSize,
                        height: D.notificationCloseButtonSize,
                        borderRadius: D.borderRadiusSM,
                        transition: `background-color ${ D.motionDurationMid }, color ${ D.motionDurationMid }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            color: D.colorIconHover,
                            backgroundColor: D.wireframe ? 'transparent' : D.colorFillContent
                        }
                    },
                    [`${ E }-btn`]: {
                        float: 'right',
                        marginTop: D.marginSM
                    }
                }
            },
            {
                [`${ E }-pure-panel`]: {
                    margin: 0
                }
            }
        ];
    };
    var j = (0, e.default)('Notification', a => {
        const k = a.paddingMD,
            l = a.paddingLG,
            m = (0, f.merge)(a, {
                notificationBg: a.colorBgElevated,
                notificationPaddingVertical: k,
                notificationPaddingHorizontal: l,
                notificationPadding: `${ a.paddingMD }px ${ a.paddingContentHorizontalLG }px`,
                notificationMarginBottom: a.margin,
                notificationMarginEdge: a.marginLG,
                animationMaxHeight: 150,
                notificationIconSize: a.fontSizeLG * a.lineHeightLG,
                notificationCloseButtonSize: 0.55 * a.controlHeightLG
            });
        return [i(m)];
    }, a => ({
        zIndexPopup: a.zIndexPopupBase + 50,
        width: 384
    }));
}), c.register('yOxu+', function(b, h) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('M5GjZ');
    var e = a => {
        const {
            componentCls: f,
            width: g,
            notificationMarginEdge: h
        } = i;
        return {
            [`&${ f }-top, &${ f }-bottom`]: {
                marginInline: 0
            },
            [`&${ f }-top`]: {
                [`${ f }-fade-enter${ f }-fade-enter-active, ${ f }-fade-appear${ f }-fade-appear-active`]: {
                    animationName: new(0, d.Keyframes)('antNotificationTopFadeIn', {
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
            [`&${ f }-bottom`]: {
                [`${ f }-fade-enter${ f }-fade-enter-active, ${ f }-fade-appear${ f }-fade-appear-active`]: {
                    animationName: new(0, d.Keyframes)('antNotificationBottomFadeIn', {
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
            [`&${ f }-topLeft, &${ f }-bottomLeft`]: {
                marginInlineEnd: 0,
                marginInlineStart: h,
                [`${ f }-fade-enter${ f }-fade-enter-active, ${ f }-fade-appear${ f }-fade-appear-active`]: {
                    animationName: new(0, d.Keyframes)('antNotificationLeftFadeIn', {
                        '0%': {
                            right: {
                                _skip_check_: !0,
                                value: g
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
}), c.register('1Qq13', function(m, n) {
    a(m.exports, 'useInternalNotification', function() {
        return q;
    }, function(a) {
        return q = a;
    }), a(m.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('uPP4W'),
        e = c('BLIEh'),
        f = c('VAIs1'),
        g = c('qEw51'),
        h = c('vBZXT'),
        i = c('yoICQ'),
        j = c('ykUUB'),
        k = function(a, b) {
            var l = {};
            for (var m in a)
                Object.prototype.hasOwnProperty.call(a, m) && b.indexOf(m) < 0 && (l[m] = a[m]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(a); n < m.length; n++)
                    b.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, m[n]) && (l[m[n]] = a[m[n]]);
            }
            return l;
        };
    const l = d.forwardRef((a, c) => {
        const {
            top: m,
            bottom: n,
            prefixCls: o,
            getContainer: p,
            maxCount: q,
            rtl: r,
            onAllRemoved: s
        } = t, {
            getPrefixCls: u,
            getPopupContainer: v
        } = d.useContext(g.ConfigContext), w = o || u('notification'), [, x] = (0, i.default)(w), [y, z] = (0, e.useNotification)({
            prefixCls: w,
            style: t => (0, h.getPlacementStyle)(t, null != m ? m : 24, null != n ? n : 24),
            className: () => b(f)(x, {
                [`${ w }-rtl`]: r
            }),
            motion: () => (0, h.getMotion)(w),
            closable: !0,
            closeIcon: (0, j.getCloseIcon)(w),
            duration: 4.5,
            getContainer: () => (null == p ? void 0 : p()) || (null == v ? void 0 : v()) || document.body,
            maxCount: q,
            onAllRemoved: s
        });
        return d.useImperativeHandle(c, () => Object.assign(Object.assign({}, y), {
            prefixCls: w,
            hashId: x
        })), z;
    });

    function m(a) {
        const n = d.useRef(null);
        return [
            d.useMemo(() => {
                const o = o => {
                        if (!n.current)
                            return;
                        const {
                            open: p,
                            prefixCls: q,
                            hashId: r
                        } = n.current, s = `${ q }-notice`, {
                            message: t,
                            description: u,
                            icon: v,
                            type: w,
                            placement: x = 'topRight',
                            btn: y,
                            className: z
                        } = A, B = k(A, [
                            'message',
                            'description',
                            'icon',
                            'type',
                            'placement',
                            'btn',
                            'className'
                        ]);
                        return p(Object.assign(Object.assign({}, B), {
                            content: d.createElement(j.PureContent, {
                                prefixCls: s,
                                icon: v,
                                type: w,
                                message: t,
                                description: u,
                                btn: y
                            }),
                            placement: x,
                            className: b(f)(w && `${ s }-${ w }`, r, z)
                        }));
                    },
                    p = {
                        open: o,
                        destroy: o => {
                            var q, r;
                            void 0 !== o ? null === (q = n.current) || void 0 === q || q.close(o) : null === (r = n.current) || void 0 === r || r.destroy();
                        }
                    };
                return [
                    'success',
                    'info',
                    'warning',
                    'error'
                ].forEach(b => {
                    p[b] = n => o(Object.assign(Object.assign({}, n), {
                        type: b
                    }));
                }), p;
            }, []),
            d.createElement(l, Object.assign({
                key: 'notification-holder'
            }, a, {
                ref: n
            }))
        ];
    }

    function n(a) {
        return m(a);
    }
}), c.register('vBZXT', function(b, c) {
    function d(a, b, c) {
        let e;
        switch (a) {
            case 'top':
                e = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: b,
                    bottom: 'auto'
                };
                break;
            case 'topLeft':
                e = {
                    left: 0,
                    top: b,
                    bottom: 'auto'
                };
                break;
            case 'topRight':
                e = {
                    right: 0,
                    top: b,
                    bottom: 'auto'
                };
                break;
            case 'bottom':
                e = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: 'auto',
                    bottom: c
                };
                break;
            case 'bottomLeft':
                e = {
                    left: 0,
                    top: 'auto',
                    bottom: c
                };
                break;
            default:
                e = {
                    right: 0,
                    top: 'auto',
                    bottom: c
                };
        }
        return e;
    }

    function e(a) {
        return {
            motionName: `${ a }-fade`
        };
    }
    a(b.exports, 'getPlacementStyle', function() {
        return d;
    }), a(b.exports, 'getMotion', function() {
        return e;
    });
});