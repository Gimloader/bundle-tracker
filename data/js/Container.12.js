function e(e, n, t, o) {
    Object.defineProperty(e, n, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}

function n(e) {
    return e && e.__esModule ? e.default : e
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("cy4A6", (function(n, o) {
    e(n.exports, "default", (function() {
        return C
    }));
    var r = t("5Toxq"),
        a = t("6ePNK"),
        i = t("fywoC"),
        s = t("4gMdJ"),
        l = t("ljTgW"),
        c = t("cPwbI"),
        u = t("dOFVj");
    let p = null,
        f = e => e(),
        d = [],
        g = {};
    const m = i.forwardRef(((e, n) => {
        const t = () => {
                const {
                    prefixCls: e,
                    container: n,
                    maxCount: t,
                    duration: o,
                    rtl: r,
                    top: a
                } = function() {
                    const {
                        prefixCls: e,
                        getContainer: n,
                        duration: t,
                        rtl: o,
                        maxCount: r,
                        top: a
                    } = g;
                    return {
                        prefixCls: null != e ? e : (0, s.globalConfig)().getPrefixCls("message"),
                        container: (null == n ? void 0 : n()) || document.body,
                        duration: t,
                        rtl: o,
                        maxCount: r,
                        top: a
                    }
                }();
                return {
                    prefixCls: e,
                    getContainer: () => n,
                    maxCount: t,
                    duration: o,
                    rtl: r,
                    top: a
                }
            },
            [o, r] = i.useState(t),
            [a, l] = (0, c.useInternalMessage)(o),
            u = (0, s.globalConfig)(),
            p = u.getRootPrefixCls(),
            f = u.getIconPrefixCls(),
            d = () => {
                r(t)
            };
        return i.useEffect(d, []), i.useImperativeHandle(n, (() => {
            const e = Object.assign({}, a);
            return Object.keys(e).forEach((n => {
                e[n] = function() {
                    return d(), a[n].apply(a, arguments)
                }
            })), {
                instance: e,
                sync: d
            }
        })), i.createElement(s.default, {
            prefixCls: p,
            iconPrefixCls: f
        }, l)
    }));

    function y() {
        if (!p) {
            const e = document.createDocumentFragment(),
                n = {
                    fragment: e
                };
            return p = n, void f((() => {
                (0, a.render)(i.createElement(m, {
                    ref: e => {
                        const {
                            instance: t,
                            sync: o
                        } = e || {};
                        Promise.resolve().then((() => {
                            !n.instance && t && (n.instance = t, n.sync = o, y())
                        }))
                    }
                }), e)
            }))
        }
        p.instance && (d.forEach((e => {
            const {
                type: n,
                skipped: t
            } = e;
            if (!t) switch (n) {
                case "open":
                    f((() => {
                        const n = p.instance.open(Object.assign(Object.assign({}, g), e.config));
                        null == n || n.then(e.resolve), e.setCloseFn(n)
                    }));
                    break;
                case "destroy":
                    f((() => {
                        null == p || p.instance.destroy(e.key)
                    }));
                    break;
                default:
                    f((() => {
                        var t;
                        const o = (t = p.instance)[n].apply(t, (0, r.default)(e.args));
                        null == o || o.then(e.resolve), e.setCloseFn(o)
                    }))
            }
        })), d = [])
    }

    function v(e, n) {
        const t = (0, u.wrapPromiseFn)((t => {
            let o;
            const r = {
                type: e,
                args: n,
                resolve: t,
                setCloseFn: e => {
                    o = e
                }
            };
            return d.push(r), () => {
                o ? f((() => {
                    o()
                })) : r.skipped = !0
            }
        }));
        return y(), t
    }
    const x = {
        open: function(e) {
            const n = (0, u.wrapPromiseFn)((n => {
                let t;
                const o = {
                    type: "open",
                    config: e,
                    resolve: n,
                    setCloseFn: e => {
                        t = e
                    }
                };
                return d.push(o), () => {
                    t ? f((() => {
                        t()
                    })) : o.skipped = !0
                }
            }));
            return y(), n
        },
        destroy: function(e) {
            d.push({
                type: "destroy",
                key: e
            }), y()
        },
        config: function(e) {
            g = Object.assign(Object.assign({}, g), e), f((() => {
                var e;
                null === (e = null == p ? void 0 : p.sync) || void 0 === e || e.call(p)
            }))
        },
        useMessage: c.default,
        _InternalPanelDoNotUseOrYouWillBeFired: l.default
    };
    ["success", "info", "warning", "error", "loading"].forEach((e => {
        x[e] = function() {
            for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
            return v(e, t)
        }
    }));
    var C = x
})), t.register("ljTgW", (function(o, r) {
    e(o.exports, "TypeIcon", (function() {
        return y
    }), (function(e) {
        return y = e
    })), e(o.exports, "PureContent", (function() {
        return v
    }), (function(e) {
        return v = e
    })), e(o.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var a = t("fywoC"),
        i = t("kpdXN"),
        s = t("7Dx5R"),
        l = t("tdMvL"),
        c = t("26dWa"),
        u = t("bUZTl"),
        p = t("12hlY"),
        f = t("fe1on"),
        d = t("hQksj"),
        g = t("4gMdJ"),
        m = function(e, n) {
            var t = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]])
            }
            return t
        };
    const y = {
        info: a.createElement(u.default, null),
        success: a.createElement(c.default, null),
        error: a.createElement(l.default, null),
        warning: a.createElement(s.default, null),
        loading: a.createElement(i.default, null)
    };

    function v(e) {
        let {
            prefixCls: t,
            type: o,
            icon: r,
            children: i
        } = e;
        return a.createElement("div", {
            className: n(f)(`${t}-custom-content`, `${t}-${o}`)
        }, r || y[o], a.createElement("span", null, i))
    }

    function x(e) {
        const {
            prefixCls: t,
            className: o,
            type: r,
            icon: i,
            content: s
        } = e, l = m(e, ["prefixCls", "className", "type", "icon", "content"]), {
            getPrefixCls: c
        } = a.useContext(g.ConfigContext), u = t || c("message"), [, y] = (0, d.default)(u);
        return a.createElement(p.Notice, Object.assign({}, l, {
            prefixCls: u,
            className: n(f)(o, y, `${u}-notice-pure-panel`),
            eventKey: "pure",
            duration: null,
            content: a.createElement(v, {
                prefixCls: u,
                type: r,
                icon: i
            }, s)
        }))
    }
})), t.register("hQksj", (function(n, o) {
    e(n.exports, "default", (function() {
        return c
    }));
    var r = t("lt5sb"),
        a = t("huF4L"),
        i = t("1QMe3"),
        s = t("kCC5O");
    const l = e => {
        const {
            componentCls: n,
            iconCls: t,
            boxShadow: o,
            colorBgElevated: a,
            colorSuccess: i,
            colorError: l,
            colorWarning: c,
            colorInfo: u,
            fontSizeLG: p,
            motionEaseInOutCirc: f,
            motionDurationSlow: d,
            marginXS: g,
            paddingXS: m,
            borderRadiusLG: y,
            zIndexPopup: v,
            messageNoticeContentPadding: x
        } = e, C = new(0, r.Keyframes)("MessageMoveIn", {
            "0%": {
                padding: 0,
                transform: "translateY(-100%)",
                opacity: 0
            },
            "100%": {
                padding: m,
                transform: "translateY(0)",
                opacity: 1
            }
        }), b = new(0, r.Keyframes)("MessageMoveOut", {
            "0%": {
                maxHeight: e.height,
                padding: m,
                opacity: 1
            },
            "100%": {
                maxHeight: 0,
                padding: 0,
                opacity: 0
            }
        });
        return [{
            [n]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                position: "fixed",
                top: g,
                width: "100%",
                pointerEvents: "none",
                zIndex: v,
                [`${n}-move-up`]: {
                    animationFillMode: "forwards"
                },
                [`\n        ${n}-move-up-appear,\n        ${n}-move-up-enter\n      `]: {
                    animationName: C,
                    animationDuration: d,
                    animationPlayState: "paused",
                    animationTimingFunction: f
                },
                [`\n        ${n}-move-up-appear${n}-move-up-appear-active,\n        ${n}-move-up-enter${n}-move-up-enter-active\n      `]: {
                    animationPlayState: "running"
                },
                [`${n}-move-up-leave`]: {
                    animationName: b,
                    animationDuration: d,
                    animationPlayState: "paused",
                    animationTimingFunction: f
                },
                [`${n}-move-up-leave${n}-move-up-leave-active`]: {
                    animationPlayState: "running"
                },
                "&-rtl": {
                    direction: "rtl",
                    span: {
                        direction: "rtl"
                    }
                }
            })
        }, {
            [`${n}-notice`]: {
                padding: m,
                textAlign: "center",
                [`${n}-custom-content > ${t}`]: {
                    verticalAlign: "text-bottom",
                    marginInlineEnd: g,
                    fontSize: p
                },
                [`${n}-notice-content`]: {
                    display: "inline-block",
                    padding: x,
                    background: a,
                    borderRadius: y,
                    boxShadow: o,
                    pointerEvents: "all"
                },
                [`${n}-success > ${t}`]: {
                    color: i
                },
                [`${n}-error > ${t}`]: {
                    color: l
                },
                [`${n}-warning > ${t}`]: {
                    color: c
                },
                [`\n        ${n}-info > ${t},\n        ${n}-loading > ${t}`]: {
                    color: u
                }
            }
        }, {
            [`${n}-notice-pure-panel`]: {
                padding: 0,
                textAlign: "start"
            }
        }]
    };
    var c = (0, a.default)("Message", (e => {
        const n = (0, i.merge)(e, {
            messageNoticeContentPadding: `${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`
        });
        return [l(n)]
    }), (e => ({
        height: 150,
        zIndexPopup: e.zIndexPopupBase + 10
    })))
})), t.register("cPwbI", (function(o, r) {
    e(o.exports, "useInternalMessage", (function() {
        return v
    }), (function(e) {
        return v = e
    })), e(o.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var a = t("fywoC"),
        i = t("12hlY"),
        s = t("fe1on"),
        l = t("legzE"),
        c = t("4gMdJ"),
        u = t("hQksj"),
        p = t("dOFVj"),
        f = t("ljTgW"),
        d = function(e, n) {
            var t = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]])
            }
            return t
        };
    const g = 3,
        m = a.forwardRef(((e, t) => {
            const {
                top: o,
                prefixCls: r,
                getContainer: f,
                maxCount: d,
                duration: m = g,
                rtl: y,
                transitionName: v,
                onAllRemoved: x
            } = e, {
                getPrefixCls: C,
                getPopupContainer: b
            } = a.useContext(c.ConfigContext), h = r || C("message"), [, O] = (0, u.default)(h), $ = a.createElement("span", {
                className: `${h}-close-x`
            }, a.createElement(l.default, {
                className: `${h}-close-icon`
            })), [j, w] = (0, i.useNotification)({
                prefixCls: h,
                style: () => ({
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: null != o ? o : 8
                }),
                className: () => n(s)(O, y ? `${h}-rtl` : ""),
                motion: () => (0, p.getMotion)(h, v),
                closable: !1,
                closeIcon: $,
                duration: m,
                getContainer: () => (null == f ? void 0 : f()) || (null == b ? void 0 : b()) || document.body,
                maxCount: d,
                onAllRemoved: x
            });
            return a.useImperativeHandle(t, (() => Object.assign(Object.assign({}, j), {
                prefixCls: h,
                hashId: O
            }))), w
        }));
    let y = 0;

    function v(e) {
        const t = a.useRef(null);
        return [a.useMemo((() => {
            const e = e => {
                    var n;
                    null === (n = t.current) || void 0 === n || n.close(e)
                },
                o = o => {
                    if (!t.current) {
                        const e = () => {};
                        return e.then = () => {}, e
                    }
                    const {
                        open: r,
                        prefixCls: i,
                        hashId: l
                    } = t.current, c = `${i}-notice`, {
                        content: u,
                        icon: g,
                        type: m,
                        key: v,
                        className: x,
                        onClose: C
                    } = o, b = d(o, ["content", "icon", "type", "key", "className", "onClose"]);
                    let h = v;
                    return null == h && (y += 1, h = `antd-message-${y}`), (0, p.wrapPromiseFn)((t => (r(Object.assign(Object.assign({}, b), {
                        key: h,
                        content: a.createElement(f.PureContent, {
                            prefixCls: i,
                            type: m,
                            icon: g
                        }, u),
                        placement: "top",
                        className: n(s)(m && `${c}-${m}`, l, x),
                        onClose: () => {
                            null == C || C(), t()
                        }
                    })), () => {
                        e(h)
                    })))
                },
                r = {
                    open: o,
                    destroy: n => {
                        var o;
                        void 0 !== n ? e(n) : null === (o = t.current) || void 0 === o || o.destroy()
                    }
                };
            return ["info", "success", "warning", "error", "loading"].forEach((e => {
                r[e] = (n, t, r) => {
                    let a, i, s;
                    a = n && "object" == typeof n && "content" in n ? n : {
                        content: n
                    }, "function" == typeof t ? s = t : (i = t, s = r);
                    const l = Object.assign(Object.assign({
                        onClose: s,
                        duration: i
                    }, a), {
                        type: e
                    });
                    return o(l)
                }
            })), r
        }), []), a.createElement(m, Object.assign({
            key: "message-holder"
        }, e, {
            ref: t
        }))]
    }

    function x(e) {
        return v(e)
    }
})), t.register("dOFVj", (function(n, t) {
    function o(e, n) {
        return {
            motionName: null != n ? n : `${e}-move-up`
        }
    }

    function r(e) {
        let n;
        const t = new Promise((t => {
                n = e((() => {
                    t(!0)
                }))
            })),
            o = () => {
                null == n || n()
            };
        return o.then = (e, n) => t.then(e, n), o.promise = t, o
    }
    e(n.exports, "getMotion", (function() {
        return o
    })), e(n.exports, "wrapPromiseFn", (function() {
        return r
    }))
}));