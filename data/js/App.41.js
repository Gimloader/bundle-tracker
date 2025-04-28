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
a.register('Jjcl0', function(b, c) {
    _F(b.exports, 'default', function() {
        return _y;
    });
    var d = a('K3ZV0'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('N+6vg'),
        h = a('3V4ym');
    let i = null,
        j = _F => _F(),
        k = [],
        l = {};
    const m = e.forwardRef((_F, b) => {
        const [n, o] = e.useState(), [p, q] = e.useState(), [r, s] = e.useState(), [t, u] = e.useState(), [v, w] = e.useState(), [x, _y] = e.useState(), [z, A] = (0, h.useInternalNotification)({
            prefixCls: n,
            getContainer: () => p,
            maxCount: r,
            rtl: t,
            top: v,
            bottom: x
        }), B = (0, f.globalConfig)(), C = B.getRootPrefixCls(), D = B.getIconPrefixCls(), E = () => {
            const {
                prefixCls: _F,
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
                } = l;
                return {
                    prefixCls: null != L ? L : (0, f.globalConfig)().getPrefixCls('notification'),
                    container: (null == M ? void 0 : M()) || document.body,
                    rtl: N,
                    maxCount: O,
                    top: P,
                    bottom: Q
                };
            }();
            o(_F), q(G), s(H), u(I), w(J), _y(K);
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
        i.instance && (k.forEach(_o => {
            switch (_o.type) {
                case 'open':
                    j(() => {
                        i.instance.open(Object.assign(Object.assign({}, l), _o.config));
                    });
                    break;
                case 'destroy':
                    j(() => {
                        null == i || i.instance.destroy(_o.key);
                    });
            }
        }), k = []);
    }

    function n(_o) {
        k.push({
            type: 'open',
            config: _o
        }), _m();
    }
    const n = {
        open: _n,
        destroy: function(o) {
            k.push({
                type: 'destroy',
                key: o
            }), _m();
        },
        config: function(o) {
            l = Object.assign(Object.assign({}, l), o), j(() => {
                var p;
                null === (p = null == i ? void 0 : i.sync) || void 0 === p || p.call(i);
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
    ].forEach(_d => {
        n[_d] = b => _n(Object.assign(Object.assign({}, b), {
            type: _d
        }));
    });
    var o = n;
}), a.register('N+6vg', function(b, c) {
    _d(b.exports, 'TypeIcon', function() {
        return _p;
    }, function(_d) {
        return _p = _d;
    }), _d(b.exports, 'getCloseIcon', function() {
        return _q;
    }, function(_d) {
        return _q = _d;
    }), _d(b.exports, 'PureContent', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    }), _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('LEQ5w'),
        e = a('mPo/q'),
        f = a('G1f7z'),
        g = a('UAiDO'),
        h = a('alXMi'),
        i = a('xQyso'),
        j = a('QECub'),
        k = a('6HRXq'),
        l = a('JrtKP'),
        _m = a('HXCZ3'),
        _n = a('1P5ls'),
        o = function(p, q) {
            var r = {};
            for (var s in p)
                Object.prototype.hasOwnProperty.call(p, s) && q.indexOf(s) < 0 && (r[s] = p[s]);
            if (null != p && 'function' == typeof Object.getOwnPropertySymbols) {
                var t = 0;
                for (s = Object.getOwnPropertySymbols(p); t < s.length; t++)
                    q.indexOf(s[t]) < 0 && Object.prototype.propertyIsEnumerable.call(p, s[t]) && (r[s[t]] = p[s[t]]);
            }
            return r;
        };
    const _p = {
        info: d.createElement(i.default, null),
        success: d.createElement(h.default, null),
        error: d.createElement(g.default, null),
        warning: d.createElement(f.default, null),
        loading: d.createElement(e.default, null)
    };

    function _q(r, s) {
        return s || d.createElement('span', {
            className: `${ r }-close-x`
        }, d.createElement(j.default, {
            className: `${ r }-close-icon`
        }));
    }
    const q = {
        success: h.default,
        info: i.default,
        error: g.default,
        warning: f.default
    };

    function _r(s) {
        let {
            prefixCls: t,
            icon: u,
            type: v,
            message: w,
            description: x,
            btn: y
        } = s, z = null;
        return u ? z = d.createElement('span', {
            className: `${ t }-icon`
        }, u) : v && (z = d.createElement(q[v] || null, {
            className: _b(l)(`${ t }-icon`, `${ t }-icon-${ v }`)
        })), d.createElement('div', {
            className: _b(l)({
                [`${ t }-with-icon`]: z
            }),
            role: 'alert'
        }, z, d.createElement('div', {
            className: `${ t }-message`
        }, w), d.createElement('div', {
            className: `${ t }-description`
        }, x), y && d.createElement('div', {
            className: `${ t }-btn`
        }, y));
    }

    function _r(s) {
        const {
            prefixCls: t,
            className: u,
            icon: v,
            type: w,
            message: x,
            description: y,
            btn: z,
            closable: A = !0,
            closeIcon: B
        } = s, C = o(s, [
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
            getPrefixCls: D
        } = d.useContext(_n.ConfigContext), E = t || D('notification'), F = `${ E }-notice`, [, G] = (0, _m.default)(E);
        return d.createElement(k.Notice, Object.assign({}, C, {
            prefixCls: E,
            className: _b(l)(u, G, `${ F }-pure-panel`),
            eventKey: 'pure',
            duration: null,
            closable: A,
            closeIcon: _x(E, B),
            content: d.createElement(_z, {
                prefixCls: F,
                icon: v,
                type: w,
                message: x,
                description: y,
                btn: z
            })
        }));
    }
}), a.register('HXCZ3', function(_b, c) {
    _d(_b.exports, 'default', function() {
        return _p;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('z4Zkr'),
        h = a('7hbGU');
    const i = _d => {
        const {
            iconCls: j,
            componentCls: k,
            boxShadow: l,
            fontSizeLG: m,
            notificationMarginBottom: n,
            borderRadiusLG: o,
            colorSuccess: _p,
            colorInfo: q,
            colorWarning: r,
            colorError: s,
            colorTextHeading: t,
            notificationBg: u,
            notificationPadding: v,
            notificationMarginEdge: w,
            motionDurationMid: _x,
            motionEaseInOut: y,
            fontSize: _z,
            lineHeight: A,
            width: B,
            notificationIconSize: C
        } = _d, D = `${ k }-notice`, E = new(0, d.Keyframes)('antNotificationFadeIn', {
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
        }), F = new(0, d.Keyframes)('antNotificationFadeOut', {
            '0%': {
                maxHeight: _d.animationMaxHeight,
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
                [k]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, h.resetComponent)(_d)), {
                    position: 'fixed',
                    zIndex: _d.zIndexPopup,
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
                        animationDuration: _d.motionDurationMid,
                        animationTimingFunction: y,
                        animationFillMode: 'both',
                        opacity: 0,
                        animationPlayState: 'paused'
                    },
                    [`${ k }-fade-leave`]: {
                        animationTimingFunction: y,
                        animationFillMode: 'both',
                        animationDuration: _x,
                        animationPlayState: 'paused'
                    },
                    [`${ k }-fade-enter${ k }-fade-enter-active, ${ k }-fade-appear${ k }-fade-appear-active`]: {
                        animationName: E,
                        animationPlayState: 'running'
                    },
                    [`${ k }-fade-leave${ k }-fade-leave-active`]: {
                        animationName: F,
                        animationPlayState: 'running'
                    }
                }), (0, g.default)(_d)), {
                    '&-rtl': {
                        direction: 'rtl',
                        [`${ k }-notice-btn`]: {
                            float: 'left'
                        }
                    }
                })
            },
            {
                [D]: {
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
                        fontSize: _z,
                        cursor: 'pointer'
                    },
                    [`${ D }-message`]: {
                        marginBottom: _d.marginXS,
                        color: t,
                        fontSize: m,
                        lineHeight: _d.lineHeightLG
                    },
                    [`${ D }-description`]: {
                        fontSize: _z
                    },
                    [`&${ D }-closable ${ D }-message`]: {
                        paddingInlineEnd: _d.paddingLG
                    },
                    [`${ D }-with-icon ${ D }-message`]: {
                        marginBottom: _d.marginXS,
                        marginInlineStart: _d.marginSM + C,
                        fontSize: m
                    },
                    [`${ D }-with-icon ${ D }-description`]: {
                        marginInlineStart: _d.marginSM + C,
                        fontSize: _z
                    },
                    [`${ D }-icon`]: {
                        position: 'absolute',
                        fontSize: C,
                        lineHeight: 0,
                        [`&-success${ j }`]: {
                            color: _p
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
                    [`${ D }-close`]: {
                        position: 'absolute',
                        top: _d.notificationPaddingVertical,
                        insetInlineEnd: _d.notificationPaddingHorizontal,
                        color: _d.colorIcon,
                        outline: 'none',
                        width: _d.notificationCloseButtonSize,
                        height: _d.notificationCloseButtonSize,
                        borderRadius: _d.borderRadiusSM,
                        transition: `background-color ${ _d.motionDurationMid }, color ${ _d.motionDurationMid }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            color: _d.colorIconHover,
                            backgroundColor: _d.wireframe ? 'transparent' : _d.colorFillContent
                        }
                    },
                    [`${ D }-btn`]: {
                        float: 'right',
                        marginTop: _d.marginSM
                    }
                }
            },
            {
                [`${ D }-pure-panel`]: {
                    margin: 0
                }
            }
        ];
    };
    var j = (0, e.default)('Notification', _d => {
        const k = _d.paddingMD,
            l = _d.paddingLG,
            m = (0, f.merge)(_d, {
                notificationBg: _d.colorBgElevated,
                notificationPaddingVertical: k,
                notificationPaddingHorizontal: l,
                notificationPadding: `${ _d.paddingMD }px ${ _d.paddingContentHorizontalLG }px`,
                notificationMarginBottom: _d.margin,
                notificationMarginEdge: _d.marginLG,
                animationMaxHeight: 150,
                notificationIconSize: _d.fontSizeLG * _d.lineHeightLG,
                notificationCloseButtonSize: 0.55 * _d.controlHeightLG
            });
        return [i(m)];
    }, _d => ({
        zIndexPopup: _d.zIndexPopupBase + 50,
        width: 384
    }));
}), a.register('z4Zkr', function(b, c) {
    _d(b.exports, 'default', function() {
        return _e;
    });
    var d = a('wC0DT');
    var _e = _d => {
        const {
            componentCls: f,
            width: g,
            notificationMarginEdge: h
        } = _d;
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
}), a.register('3V4ym', function(b, c) {
    _d(b.exports, 'useInternalNotification', function() {
        return _q;
    }, function(_d) {
        return _q = _d;
    }), _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('LEQ5w'),
        e = a('6HRXq'),
        f = a('JrtKP'),
        g = a('1P5ls'),
        h = a('pTTyV'),
        i = a('HXCZ3'),
        j = a('N+6vg'),
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
    const l = d.forwardRef((_n, a) => {
        const {
            top: m,
            bottom: n,
            prefixCls: o,
            getContainer: p,
            maxCount: _q,
            rtl: _r,
            onAllRemoved: s
        } = _n, {
            getPrefixCls: t,
            getPopupContainer: u
        } = d.useContext(g.ConfigContext), v = o || t('notification'), [, w] = (0, i.default)(v), [x, y] = (0, e.useNotification)({
            prefixCls: v,
            style: _n => (0, h.getPlacementStyle)(_n, null != m ? m : 24, null != n ? n : 24),
            className: () => _r(f)(w, {
                [`${ v }-rtl`]: _r
            }),
            motion: () => (0, h.getMotion)(v),
            closable: !0,
            closeIcon: (0, j.getCloseIcon)(v),
            duration: 4.5,
            getContainer: () => (null == p ? void 0 : p()) || (null == u ? void 0 : u()) || document.body,
            maxCount: _q,
            onAllRemoved: s
        });
        return d.useImperativeHandle(a, () => Object.assign(Object.assign({}, x), {
            prefixCls: v,
            hashId: w
        })), y;
    });

    function m(_n) {
        const o = d.useRef(null);
        return [
            d.useMemo(() => {
                const p = p => {
                        if (!o.current)
                            return;
                        const {
                            open: q,
                            prefixCls: r,
                            hashId: s
                        } = o.current, t = `${ r }-notice`, {
                            message: u,
                            description: v,
                            icon: w,
                            type: x,
                            placement: y = 'topRight',
                            btn: z,
                            className: A
                        } = p, B = k(p, [
                            'message',
                            'description',
                            'icon',
                            'type',
                            'placement',
                            'btn',
                            'className'
                        ]);
                        return q(Object.assign(Object.assign({}, B), {
                            content: d.createElement(j.PureContent, {
                                prefixCls: t,
                                icon: w,
                                type: x,
                                message: u,
                                description: v,
                                btn: z
                            }),
                            placement: y,
                            className: _r(f)(x && `${ t }-${ x }`, s, A)
                        }));
                    },
                    q = {
                        open: p,
                        destroy: p => {
                            var _r, s;
                            void 0 !== p ? null === (_r = o.current) || void 0 === _r || _r.close(p) : null === (s = o.current) || void 0 === s || s.destroy();
                        }
                    };
                return [
                    'success',
                    'info',
                    'warning',
                    'error'
                ].forEach(_b => {
                    q[_b] = o => p(Object.assign(Object.assign({}, o), {
                        type: _b
                    }));
                }), q;
            }, []),
            d.createElement(l, Object.assign({
                key: 'notification-holder'
            }, _n, {
                ref: o
            }))
        ];
    }

    function m(n) {
        return m(n);
    }
}), a.register('pTTyV', function(_b, c) {
    function d(e, f, g) {
        let h;
        switch (e) {
            case 'top':
                h = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: f,
                    bottom: 'auto'
                };
                break;
            case 'topLeft':
                h = {
                    left: 0,
                    top: f,
                    bottom: 'auto'
                };
                break;
            case 'topRight':
                h = {
                    right: 0,
                    top: f,
                    bottom: 'auto'
                };
                break;
            case 'bottom':
                h = {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 'auto',
                    top: 'auto',
                    bottom: g
                };
                break;
            case 'bottomLeft':
                h = {
                    left: 0,
                    top: 'auto',
                    bottom: g
                };
                break;
            default:
                h = {
                    right: 0,
                    top: 'auto',
                    bottom: g
                };
        }
        return h;
    }

    function d(e) {
        return {
            motionName: `${ e }-fade`
        };
    }
    e(_b.exports, 'getPlacementStyle', function() {
        return o;
    }), e(_b.exports, 'getMotion', function() {
        return i;
    });
});