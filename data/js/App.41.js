function e(e, t, n, o) {
    Object.defineProperty(e, t, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("axHII", (function(t, o) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = n("6ePNK"),
        a = n("fywoC"),
        r = n("4gMdJ"),
        c = n("2pJrq"),
        l = n("3kJEx");
    let s = null,
        u = e => e(),
        f = [],
        d = {};
    const p = a.forwardRef(((e, t) => {
        const [n, o] = a.useState(), [i, c] = a.useState(), [s, u] = a.useState(), [f, p] = a.useState(), [m, g] = a.useState(), [b, y] = a.useState(), [$, h] = (0, l.useInternalNotification)({
            prefixCls: n,
            getContainer: () => i,
            maxCount: s,
            rtl: f,
            top: m,
            bottom: b
        }), x = (0, r.globalConfig)(), v = x.getRootPrefixCls(), C = x.getIconPrefixCls(), I = () => {
            const {
                prefixCls: e,
                container: t,
                maxCount: n,
                rtl: i,
                top: a,
                bottom: l
            } = function() {
                const {
                    prefixCls: e,
                    getContainer: t,
                    rtl: n,
                    maxCount: o,
                    top: i,
                    bottom: a
                } = d;
                return {
                    prefixCls: null != e ? e : (0, r.globalConfig)().getPrefixCls("notification"),
                    container: (null == t ? void 0 : t()) || document.body,
                    rtl: n,
                    maxCount: o,
                    top: i,
                    bottom: a
                }
            }();
            o(e), c(t), u(n), p(i), g(a), y(l)
        };
        return a.useEffect(I, []), a.useImperativeHandle(t, (() => {
            const e = Object.assign({}, $);
            return Object.keys(e).forEach((t => {
                e[t] = function() {
                    return I(), $[t].apply($, arguments)
                }
            })), {
                instance: e,
                sync: I
            }
        })), a.createElement(r.default, {
            prefixCls: v,
            iconPrefixCls: C
        }, h)
    }));

    function m() {
        if (!s) {
            const e = document.createDocumentFragment(),
                t = {
                    fragment: e
                };
            return s = t, void u((() => {
                (0, i.render)(a.createElement(p, {
                    ref: e => {
                        const {
                            instance: n,
                            sync: o
                        } = e || {};
                        Promise.resolve().then((() => {
                            !t.instance && n && (t.instance = n, t.sync = o, m())
                        }))
                    }
                }), e)
            }))
        }
        s.instance && (f.forEach((e => {
            switch (e.type) {
                case "open":
                    u((() => {
                        s.instance.open(Object.assign(Object.assign({}, d), e.config))
                    }));
                    break;
                case "destroy":
                    u((() => {
                        null == s || s.instance.destroy(e.key)
                    }))
            }
        })), f = [])
    }

    function g(e) {
        f.push({
            type: "open",
            config: e
        }), m()
    }
    const b = {
        open: g,
        destroy: function(e) {
            f.push({
                type: "destroy",
                key: e
            }), m()
        },
        config: function(e) {
            d = Object.assign(Object.assign({}, d), e), u((() => {
                var e;
                null === (e = null == s ? void 0 : s.sync) || void 0 === e || e.call(s)
            }))
        },
        useNotification: l.default,
        _InternalPanelDoNotUseOrYouWillBeFired: c.default
    };
    ["success", "info", "warning", "error"].forEach((e => {
        b[e] = t => g(Object.assign(Object.assign({}, t), {
            type: e
        }))
    }));
    var y = b
})), n.register("2pJrq", (function(o, i) {
    e(o.exports, "TypeIcon", (function() {
        return y
    }), (function(e) {
        return y = e
    })), e(o.exports, "getCloseIcon", (function() {
        return $
    }), (function(e) {
        return $ = e
    })), e(o.exports, "PureContent", (function() {
        return x
    }), (function(e) {
        return x = e
    })), e(o.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = n("fywoC"),
        r = n("kpdXN"),
        c = n("7Dx5R"),
        l = n("tdMvL"),
        s = n("26dWa"),
        u = n("bUZTl"),
        f = n("legzE"),
        d = n("12hlY"),
        p = n("fe1on"),
        m = n("kuNX0"),
        g = n("4gMdJ"),
        b = function(e, t) {
            var n = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
            }
            return n
        };
    const y = {
        info: a.createElement(u.default, null),
        success: a.createElement(s.default, null),
        error: a.createElement(l.default, null),
        warning: a.createElement(c.default, null),
        loading: a.createElement(r.default, null)
    };

    function $(e, t) {
        return t || a.createElement("span", {
            className: `${e}-close-x`
        }, a.createElement(f.default, {
            className: `${e}-close-icon`
        }))
    }
    const h = {
        success: s.default,
        info: u.default,
        error: l.default,
        warning: c.default
    };

    function x(e) {
        let {
            prefixCls: n,
            icon: o,
            type: i,
            message: r,
            description: c,
            btn: l
        } = e, s = null;
        return o ? s = a.createElement("span", {
            className: `${n}-icon`
        }, o) : i && (s = a.createElement(h[i] || null, {
            className: t(p)(`${n}-icon`, `${n}-icon-${i}`)
        })), a.createElement("div", {
            className: t(p)({
                [`${n}-with-icon`]: s
            }),
            role: "alert"
        }, s, a.createElement("div", {
            className: `${n}-message`
        }, r), a.createElement("div", {
            className: `${n}-description`
        }, c), l && a.createElement("div", {
            className: `${n}-btn`
        }, l))
    }

    function v(e) {
        const {
            prefixCls: n,
            className: o,
            icon: i,
            type: r,
            message: c,
            description: l,
            btn: s,
            closable: u = !0,
            closeIcon: f
        } = e, y = b(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon"]), {
            getPrefixCls: h
        } = a.useContext(g.ConfigContext), v = n || h("notification"), C = `${v}-notice`, [, I] = (0, m.default)(v);
        return a.createElement(d.Notice, Object.assign({}, y, {
            prefixCls: v,
            className: t(p)(o, I, `${C}-pure-panel`),
            eventKey: "pure",
            duration: null,
            closable: u,
            closeIcon: $(v, f),
            content: a.createElement(x, {
                prefixCls: C,
                icon: i,
                type: r,
                message: c,
                description: l,
                btn: s
            })
        }))
    }
})), n.register("kuNX0", (function(t, o) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("lt5sb"),
        a = n("huF4L"),
        r = n("1QMe3"),
        c = n("b2eK6"),
        l = n("kCC5O");
    const s = e => {
        const {
            iconCls: t,
            componentCls: n,
            boxShadow: o,
            fontSizeLG: a,
            notificationMarginBottom: r,
            borderRadiusLG: s,
            colorSuccess: u,
            colorInfo: f,
            colorWarning: d,
            colorError: p,
            colorTextHeading: m,
            notificationBg: g,
            notificationPadding: b,
            notificationMarginEdge: y,
            motionDurationMid: $,
            motionEaseInOut: h,
            fontSize: x,
            lineHeight: v,
            width: C,
            notificationIconSize: I
        } = e, S = `${n}-notice`, O = new(0, i.Keyframes)("antNotificationFadeIn", {
            "0%": {
                left: {
                    _skip_check_: !0,
                    value: C
                },
                opacity: 0
            },
            "100%": {
                left: {
                    _skip_check_: !0,
                    value: 0
                },
                opacity: 1
            }
        }), w = new(0, i.Keyframes)("antNotificationFadeOut", {
            "0%": {
                maxHeight: e.animationMaxHeight,
                marginBottom: r,
                opacity: 1
            },
            "100%": {
                maxHeight: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0
            }
        });
        return [{
            [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                position: "fixed",
                zIndex: e.zIndexPopup,
                marginInlineEnd: y,
                [`${n}-hook-holder`]: {
                    position: "relative"
                },
                [`&${n}-top, &${n}-bottom`]: {
                    [`${n}-notice`]: {
                        marginInline: "auto auto"
                    }
                },
                [`&${n}-topLeft, &${n}-bottomLeft`]: {
                    [`${n}-notice`]: {
                        marginInlineEnd: "auto",
                        marginInlineStart: 0
                    }
                },
                [`${n}-fade-enter, ${n}-fade-appear`]: {
                    animationDuration: e.motionDurationMid,
                    animationTimingFunction: h,
                    animationFillMode: "both",
                    opacity: 0,
                    animationPlayState: "paused"
                },
                [`${n}-fade-leave`]: {
                    animationTimingFunction: h,
                    animationFillMode: "both",
                    animationDuration: $,
                    animationPlayState: "paused"
                },
                [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
                    animationName: O,
                    animationPlayState: "running"
                },
                [`${n}-fade-leave${n}-fade-leave-active`]: {
                    animationName: w,
                    animationPlayState: "running"
                }
            }), (0, c.default)(e)), {
                "&-rtl": {
                    direction: "rtl",
                    [`${n}-notice-btn`]: {
                        float: "left"
                    }
                }
            })
        }, {
            [S]: {
                position: "relative",
                width: C,
                maxWidth: `calc(100vw - ${2*y}px)`,
                marginBottom: r,
                marginInlineStart: "auto",
                padding: b,
                overflow: "hidden",
                lineHeight: v,
                wordWrap: "break-word",
                background: g,
                borderRadius: s,
                boxShadow: o,
                [`${n}-close-icon`]: {
                    fontSize: x,
                    cursor: "pointer"
                },
                [`${S}-message`]: {
                    marginBottom: e.marginXS,
                    color: m,
                    fontSize: a,
                    lineHeight: e.lineHeightLG
                },
                [`${S}-description`]: {
                    fontSize: x
                },
                [`&${S}-closable ${S}-message`]: {
                    paddingInlineEnd: e.paddingLG
                },
                [`${S}-with-icon ${S}-message`]: {
                    marginBottom: e.marginXS,
                    marginInlineStart: e.marginSM + I,
                    fontSize: a
                },
                [`${S}-with-icon ${S}-description`]: {
                    marginInlineStart: e.marginSM + I,
                    fontSize: x
                },
                [`${S}-icon`]: {
                    position: "absolute",
                    fontSize: I,
                    lineHeight: 0,
                    [`&-success${t}`]: {
                        color: u
                    },
                    [`&-info${t}`]: {
                        color: f
                    },
                    [`&-warning${t}`]: {
                        color: d
                    },
                    [`&-error${t}`]: {
                        color: p
                    }
                },
                [`${S}-close`]: {
                    position: "absolute",
                    top: e.notificationPaddingVertical,
                    insetInlineEnd: e.notificationPaddingHorizontal,
                    color: e.colorIcon,
                    outline: "none",
                    width: e.notificationCloseButtonSize,
                    height: e.notificationCloseButtonSize,
                    borderRadius: e.borderRadiusSM,
                    transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        color: e.colorIconHover,
                        backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
                    }
                },
                [`${S}-btn`]: {
                    float: "right",
                    marginTop: e.marginSM
                }
            }
        }, {
            [`${S}-pure-panel`]: {
                margin: 0
            }
        }]
    };
    var u = (0, a.default)("Notification", (e => {
        const t = e.paddingMD,
            n = e.paddingLG,
            o = (0, r.merge)(e, {
                notificationBg: e.colorBgElevated,
                notificationPaddingVertical: t,
                notificationPaddingHorizontal: n,
                notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
                notificationMarginBottom: e.margin,
                notificationMarginEdge: e.marginLG,
                animationMaxHeight: 150,
                notificationIconSize: e.fontSizeLG * e.lineHeightLG,
                notificationCloseButtonSize: .55 * e.controlHeightLG
            });
        return [s(o)]
    }), (e => ({
        zIndexPopup: e.zIndexPopupBase + 50,
        width: 384
    })))
})), n.register("b2eK6", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("lt5sb");
    var a = e => {
        const {
            componentCls: t,
            width: n,
            notificationMarginEdge: o
        } = e;
        return {
            [`&${t}-top, &${t}-bottom`]: {
                marginInline: 0
            },
            [`&${t}-top`]: {
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: new(0, i.Keyframes)("antNotificationTopFadeIn", {
                        "0%": {
                            marginTop: "-100%",
                            opacity: 0
                        },
                        "100%": {
                            marginTop: 0,
                            opacity: 1
                        }
                    })
                }
            },
            [`&${t}-bottom`]: {
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: new(0, i.Keyframes)("antNotificationBottomFadeIn", {
                        "0%": {
                            marginBottom: "-100%",
                            opacity: 0
                        },
                        "100%": {
                            marginBottom: 0,
                            opacity: 1
                        }
                    })
                }
            },
            [`&${t}-topLeft, &${t}-bottomLeft`]: {
                marginInlineEnd: 0,
                marginInlineStart: o,
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: new(0, i.Keyframes)("antNotificationLeftFadeIn", {
                        "0%": {
                            right: {
                                _skip_check_: !0,
                                value: n
                            },
                            opacity: 0
                        },
                        "100%": {
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            opacity: 1
                        }
                    })
                }
            }
        }
    }
})), n.register("3kJEx", (function(o, i) {
    e(o.exports, "useInternalNotification", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(o.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var a = n("fywoC"),
        r = n("12hlY"),
        c = n("fe1on"),
        l = n("4gMdJ"),
        s = n("gYqhM"),
        u = n("kuNX0"),
        f = n("2pJrq"),
        d = function(e, t) {
            var n = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
            }
            return n
        };
    const p = a.forwardRef(((e, n) => {
        const {
            top: o,
            bottom: i,
            prefixCls: d,
            getContainer: p,
            maxCount: m,
            rtl: g,
            onAllRemoved: b
        } = e, {
            getPrefixCls: y,
            getPopupContainer: $
        } = a.useContext(l.ConfigContext), h = d || y("notification"), [, x] = (0, u.default)(h), [v, C] = (0, r.useNotification)({
            prefixCls: h,
            style: e => (0, s.getPlacementStyle)(e, null != o ? o : 24, null != i ? i : 24),
            className: () => t(c)(x, {
                [`${h}-rtl`]: g
            }),
            motion: () => (0, s.getMotion)(h),
            closable: !0,
            closeIcon: (0, f.getCloseIcon)(h),
            duration: 4.5,
            getContainer: () => (null == p ? void 0 : p()) || (null == $ ? void 0 : $()) || document.body,
            maxCount: m,
            onAllRemoved: b
        });
        return a.useImperativeHandle(n, (() => Object.assign(Object.assign({}, v), {
            prefixCls: h,
            hashId: x
        }))), C
    }));

    function m(e) {
        const n = a.useRef(null);
        return [a.useMemo((() => {
            const e = e => {
                    if (!n.current) return;
                    const {
                        open: o,
                        prefixCls: i,
                        hashId: r
                    } = n.current, l = `${i}-notice`, {
                        message: s,
                        description: u,
                        icon: p,
                        type: m,
                        placement: g = "topRight",
                        btn: b,
                        className: y
                    } = e, $ = d(e, ["message", "description", "icon", "type", "placement", "btn", "className"]);
                    return o(Object.assign(Object.assign({}, $), {
                        content: a.createElement(f.PureContent, {
                            prefixCls: l,
                            icon: p,
                            type: m,
                            message: s,
                            description: u,
                            btn: b
                        }),
                        placement: g,
                        className: t(c)(m && `${l}-${m}`, r, y)
                    }))
                },
                o = {
                    open: e,
                    destroy: e => {
                        var t, o;
                        void 0 !== e ? null === (t = n.current) || void 0 === t || t.close(e) : null === (o = n.current) || void 0 === o || o.destroy()
                    }
                };
            return ["success", "info", "warning", "error"].forEach((t => {
                o[t] = n => e(Object.assign(Object.assign({}, n), {
                    type: t
                }))
            })), o
        }), []), a.createElement(p, Object.assign({
            key: "notification-holder"
        }, e, {
            ref: n
        }))]
    }

    function g(e) {
        return m(e)
    }
})), n.register("gYqhM", (function(t, n) {
    function o(e, t, n) {
        let o;
        switch (e) {
            case "top":
                o = {
                    left: "50%",
                    transform: "translateX(-50%)",
                    right: "auto",
                    top: t,
                    bottom: "auto"
                };
                break;
            case "topLeft":
                o = {
                    left: 0,
                    top: t,
                    bottom: "auto"
                };
                break;
            case "topRight":
                o = {
                    right: 0,
                    top: t,
                    bottom: "auto"
                };
                break;
            case "bottom":
                o = {
                    left: "50%",
                    transform: "translateX(-50%)",
                    right: "auto",
                    top: "auto",
                    bottom: n
                };
                break;
            case "bottomLeft":
                o = {
                    left: 0,
                    top: "auto",
                    bottom: n
                };
                break;
            default:
                o = {
                    right: 0,
                    top: "auto",
                    bottom: n
                }
        }
        return o
    }

    function i(e) {
        return {
            motionName: `${e}-fade`
        }
    }
    e(t.exports, "getPlacementStyle", (function() {
        return o
    })), e(t.exports, "getMotion", (function() {
        return i
    }))
}));