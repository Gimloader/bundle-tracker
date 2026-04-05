import {
    r as n,
    aB as Re,
    cK as je,
    _ as le,
    am as w,
    aI as ce,
    aH as Me,
    az as de,
    aE as me,
    aD as I,
    aA as fe,
    aC as ie,
    bg as ve,
    db as _e,
    aO as Ce,
    c$ as ze,
    d1 as ge,
    A as He,
    ai as Le,
    aj as Ke,
    ak as Q,
    aM as We,
    d9 as Te,
    dc as Ae,
    cU as Be,
    bY as Fe,
    bZ as Ue,
    cS as Ve,
    d6 as be,
    al as Xe
} from "./_index.js";
var he = n.createContext(null),
    we = n.createContext({}),
    Ye = ["prefixCls", "className", "containerRef"],
    Ge = function(t) {
        var a = t.prefixCls,
            o = t.className,
            r = t.containerRef,
            l = Re(t, Ye),
            c = n.useContext(we),
            s = c.panel,
            d = je(s, r);
        return n.createElement("div", le({
            className: w("".concat(a, "-content"), o),
            role: "dialog",
            ref: d
        }, ce(t, {
            aria: !0
        }), {
            "aria-modal": "true"
        }, l))
    };

function ye(e) {
    return typeof e == "string" && String(Number(e)) === e ? (Me(!1, "Invalid value type of `width` or `height` which should be number type instead."), Number(e)) : e
}
var pe = {
    width: 0,
    height: 0,
    overflow: "hidden",
    outline: "none",
    position: "absolute"
};

function Ze(e, t) {
    var a, o, r, l = e.prefixCls,
        c = e.open,
        s = e.placement,
        d = e.inline,
        x = e.push,
        S = e.forceRender,
        p = e.autoFocus,
        E = e.keyboard,
        v = e.classNames,
        D = e.rootClassName,
        u = e.rootStyle,
        f = e.zIndex,
        C = e.className,
        b = e.id,
        R = e.style,
        k = e.motion,
        j = e.width,
        P = e.height,
        N = e.children,
        h = e.mask,
        y = e.maskClosable,
        O = e.maskMotion,
        ee = e.maskClassName,
        Y = e.maskStyle,
        W = e.afterOpenChange,
        L = e.onClose,
        z = e.onMouseEnter,
        T = e.onMouseOver,
        M = e.onMouseLeave,
        G = e.onClick,
        te = e.onKeyDown,
        ne = e.onKeyUp,
        g = e.styles,
        A = e.drawerRender,
        _ = n.useRef(),
        B = n.useRef(),
        F = n.useRef();
    n.useImperativeHandle(t, function() {
        return _.current
    });
    var ae = function($) {
        var Z = $.keyCode,
            q = $.shiftKey;
        switch (Z) {
            case ie.TAB: {
                if (Z === ie.TAB) {
                    if (!q && document.activeElement === F.current) {
                        var J;
                        (J = B.current) === null || J === void 0 || J.focus({
                            preventScroll: !0
                        })
                    } else if (q && document.activeElement === B.current) {
                        var se;
                        (se = F.current) === null || se === void 0 || se.focus({
                            preventScroll: !0
                        })
                    }
                }
                break
            }
            case ie.ESC: {
                L && E && ($.stopPropagation(), L($));
                break
            }
        }
    };
    n.useEffect(function() {
        if (c && p) {
            var m;
            (m = _.current) === null || m === void 0 || m.focus({
                preventScroll: !0
            })
        }
    }, [c]);
    var oe = n.useState(!1),
        re = de(oe, 2),
        U = re[0],
        K = re[1],
        i = n.useContext(he),
        V;
    typeof x == "boolean" ? V = x ? {} : {
        distance: 0
    } : V = x || {};
    var H = (a = (o = (r = V) === null || r === void 0 ? void 0 : r.distance) !== null && o !== void 0 ? o : i == null ? void 0 : i.pushDistance) !== null && a !== void 0 ? a : 180,
        Ne = n.useMemo(function() {
            return {
                pushDistance: H,
                push: function() {
                    K(!0)
                },
                pull: function() {
                    K(!1)
                }
            }
        }, [H]);
    n.useEffect(function() {
        if (c) {
            var m;
            i == null || (m = i.push) === null || m === void 0 || m.call(i)
        } else {
            var $;
            i == null || ($ = i.pull) === null || $ === void 0 || $.call(i)
        }
    }, [c]), n.useEffect(function() {
        return function() {
            var m;
            i == null || (m = i.pull) === null || m === void 0 || m.call(i)
        }
    }, []);
    var Ee = n.createElement(me, le({
            key: "mask"
        }, O, {
            visible: h && c
        }), function(m, $) {
            var Z = m.className,
                q = m.style;
            return n.createElement("div", {
                className: w("".concat(l, "-mask"), Z, v == null ? void 0 : v.mask, ee),
                style: I(I(I({}, q), Y), g == null ? void 0 : g.mask),
                onClick: y && c ? L : void 0,
                ref: $
            })
        }),
        De = typeof k == "function" ? k(s) : k,
        X = {};
    if (U && H) switch (s) {
        case "top":
            X.transform = "translateY(".concat(H, "px)");
            break;
        case "bottom":
            X.transform = "translateY(".concat(-H, "px)");
            break;
        case "left":
            X.transform = "translateX(".concat(H, "px)");
            break;
        default:
            X.transform = "translateX(".concat(-H, "px)");
            break
    }
    s === "left" || s === "right" ? X.width = ye(j) : X.height = ye(P);
    var Pe = {
            onMouseEnter: z,
            onMouseOver: T,
            onMouseLeave: M,
            onClick: G,
            onKeyDown: te,
            onKeyUp: ne
        },
        Ie = n.createElement(me, le({
            key: "panel"
        }, De, {
            visible: c,
            forceRender: S,
            onVisibleChanged: function($) {
                W == null || W($)
            },
            removeOnLeave: !1,
            leavedClassName: "".concat(l, "-content-wrapper-hidden")
        }), function(m, $) {
            var Z = m.className,
                q = m.style,
                J = n.createElement(Ge, le({
                    id: b,
                    containerRef: $,
                    prefixCls: l,
                    className: w(C, v == null ? void 0 : v.content),
                    style: I(I({}, R), g == null ? void 0 : g.content)
                }, ce(e, {
                    aria: !0
                }), Pe), N);
            return n.createElement("div", le({
                className: w("".concat(l, "-content-wrapper"), v == null ? void 0 : v.wrapper, Z),
                style: I(I(I({}, X), q), g == null ? void 0 : g.wrapper)
            }, ce(e, {
                data: !0
            })), A ? A(J) : J)
        }),
        ue = I({}, u);
    return f && (ue.zIndex = f), n.createElement(he.Provider, {
        value: Ne
    }, n.createElement("div", {
        className: w(l, "".concat(l, "-").concat(s), D, fe(fe({}, "".concat(l, "-open"), c), "".concat(l, "-inline"), d)),
        style: ue,
        tabIndex: -1,
        ref: _,
        onKeyDown: ae
    }, Ee, n.createElement("div", {
        tabIndex: 0,
        ref: B,
        style: pe,
        "aria-hidden": "true",
        "data-sentinel": "start"
    }), Ie, n.createElement("div", {
        tabIndex: 0,
        ref: F,
        style: pe,
        "aria-hidden": "true",
        "data-sentinel": "end"
    })))
}
var qe = n.forwardRef(Ze),
    Je = function(t) {
        var a = t.open,
            o = a === void 0 ? !1 : a,
            r = t.prefixCls,
            l = r === void 0 ? "rc-drawer" : r,
            c = t.placement,
            s = c === void 0 ? "right" : c,
            d = t.autoFocus,
            x = d === void 0 ? !0 : d,
            S = t.keyboard,
            p = S === void 0 ? !0 : S,
            E = t.width,
            v = E === void 0 ? 378 : E,
            D = t.mask,
            u = D === void 0 ? !0 : D,
            f = t.maskClosable,
            C = f === void 0 ? !0 : f,
            b = t.getContainer,
            R = t.forceRender,
            k = t.afterOpenChange,
            j = t.destroyOnClose,
            P = t.onMouseEnter,
            N = t.onMouseOver,
            h = t.onMouseLeave,
            y = t.onClick,
            O = t.onKeyDown,
            ee = t.onKeyUp,
            Y = t.panelRef,
            W = n.useState(!1),
            L = de(W, 2),
            z = L[0],
            T = L[1],
            M = n.useState(!1),
            G = de(M, 2),
            te = G[0],
            ne = G[1];
        ve(function() {
            ne(!0)
        }, []);
        var g = te ? o : !1,
            A = n.useRef(),
            _ = n.useRef();
        ve(function() {
            g && (_.current = document.activeElement)
        }, [g]);
        var B = function(U) {
                var K;
                if (T(U), k == null || k(U), !U && _.current && !((K = A.current) !== null && K !== void 0 && K.contains(_.current))) {
                    var i;
                    (i = _.current) === null || i === void 0 || i.focus({
                        preventScroll: !0
                    })
                }
            },
            F = n.useMemo(function() {
                return {
                    panel: Y
                }
            }, [Y]);
        if (!R && !z && !g && j) return null;
        var ae = {
                onMouseEnter: P,
                onMouseOver: N,
                onMouseLeave: h,
                onClick: y,
                onKeyDown: O,
                onKeyUp: ee
            },
            oe = I(I({}, t), {}, {
                open: g,
                prefixCls: l,
                placement: s,
                autoFocus: x,
                keyboard: p,
                width: v,
                mask: u,
                maskClosable: C,
                inline: b === !1,
                afterOpenChange: B,
                ref: A
            }, ae);
        return n.createElement(we.Provider, {
            value: F
        }, n.createElement(_e, {
            open: g || R || z,
            autoDestroy: !1,
            getContainer: b,
            autoLock: u && (g || z)
        }, n.createElement(qe, oe)))
    };
const xe = e => {
        var t, a;
        const {
            prefixCls: o,
            ariaId: r,
            title: l,
            footer: c,
            extra: s,
            closable: d,
            loading: x,
            onClose: S,
            headerStyle: p,
            bodyStyle: E,
            footerStyle: v,
            children: D,
            classNames: u,
            styles: f
        } = e, C = Ce("drawer");
        let b;
        d === !1 ? b = void 0 : d === void 0 || d === !0 ? b = "start" : b = (d == null ? void 0 : d.placement) === "end" ? "end" : "start";
        const R = n.useCallback(h => n.createElement("button", {
                type: "button",
                onClick: S,
                className: w(`${o}-close`, {
                    [`${o}-close-${b}`]: b === "end"
                })
            }, h), [S, o, b]),
            [k, j] = ze(ge(e), ge(C), {
                closable: !0,
                closeIconRender: R
            }),
            P = () => {
                var h, y;
                return !l && !k ? null : n.createElement("div", {
                    style: Object.assign(Object.assign(Object.assign({}, (h = C.styles) === null || h === void 0 ? void 0 : h.header), p), f == null ? void 0 : f.header),
                    className: w(`${o}-header`, {
                        [`${o}-header-close-only`]: k && !l && !s
                    }, (y = C.classNames) === null || y === void 0 ? void 0 : y.header, u == null ? void 0 : u.header)
                }, n.createElement("div", {
                    className: `${o}-header-title`
                }, b === "start" && j, l && n.createElement("div", {
                    className: `${o}-title`,
                    id: r
                }, l)), s && n.createElement("div", {
                    className: `${o}-extra`
                }, s), b === "end" && j)
            },
            N = () => {
                var h, y;
                if (!c) return null;
                const O = `${o}-footer`;
                return n.createElement("div", {
                    className: w(O, (h = C.classNames) === null || h === void 0 ? void 0 : h.footer, u == null ? void 0 : u.footer),
                    style: Object.assign(Object.assign(Object.assign({}, (y = C.styles) === null || y === void 0 ? void 0 : y.footer), v), f == null ? void 0 : f.footer)
                }, c)
            };
        return n.createElement(n.Fragment, null, P(), n.createElement("div", {
            className: w(`${o}-body`, u == null ? void 0 : u.body, (t = C.classNames) === null || t === void 0 ? void 0 : t.body),
            style: Object.assign(Object.assign(Object.assign({}, (a = C.styles) === null || a === void 0 ? void 0 : a.body), E), f == null ? void 0 : f.body)
        }, x ? n.createElement(He, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 5
            },
            className: `${o}-body-skeleton`
        }) : D), N())
    },
    Qe = e => {
        const t = "100%";
        return {
            left: `translateX(-${t})`,
            right: `translateX(${t})`,
            top: `translateY(-${t})`,
            bottom: `translateY(${t})`
        } [e]
    },
    Se = (e, t) => ({
        "&-enter, &-appear": Object.assign(Object.assign({}, e), {
            "&-active": t
        }),
        "&-leave": Object.assign(Object.assign({}, t), {
            "&-active": e
        })
    }),
    ke = (e, t) => Object.assign({
        "&-enter, &-appear, &-leave": {
            "&-start": {
                transition: "none"
            },
            "&-active": {
                transition: `all ${t}`
            }
        }
    }, Se({
        opacity: e
    }, {
        opacity: 1
    })),
    et = (e, t) => [ke(.7, t), Se({
        transform: Qe(e)
    }, {
        transform: "none"
    })],
    tt = e => {
        const {
            componentCls: t,
            motionDurationSlow: a
        } = e;
        return {
            [t]: {
                [`${t}-mask-motion`]: ke(0, a),
                [`${t}-panel-motion`]: ["left", "right", "top", "bottom"].reduce((o, r) => Object.assign(Object.assign({}, o), {
                    [`&-${r}`]: et(r, a)
                }), {})
            }
        }
    },
    nt = e => {
        const {
            borderRadiusSM: t,
            componentCls: a,
            zIndexPopup: o,
            colorBgMask: r,
            colorBgElevated: l,
            motionDurationSlow: c,
            motionDurationMid: s,
            paddingXS: d,
            padding: x,
            paddingLG: S,
            fontSizeLG: p,
            lineHeightLG: E,
            lineWidth: v,
            lineType: D,
            colorSplit: u,
            marginXS: f,
            colorIcon: C,
            colorIconHover: b,
            colorBgTextHover: R,
            colorBgTextActive: k,
            colorText: j,
            fontWeightStrong: P,
            footerPaddingBlock: N,
            footerPaddingInline: h,
            calc: y
        } = e, O = `${a}-content-wrapper`;
        return {
            [a]: {
                position: "fixed",
                inset: 0,
                zIndex: o,
                pointerEvents: "none",
                color: j,
                "&-pure": {
                    position: "relative",
                    background: l,
                    display: "flex",
                    flexDirection: "column",
                    [`&${a}-left`]: {
                        boxShadow: e.boxShadowDrawerLeft
                    },
                    [`&${a}-right`]: {
                        boxShadow: e.boxShadowDrawerRight
                    },
                    [`&${a}-top`]: {
                        boxShadow: e.boxShadowDrawerUp
                    },
                    [`&${a}-bottom`]: {
                        boxShadow: e.boxShadowDrawerDown
                    }
                },
                "&-inline": {
                    position: "absolute"
                },
                [`${a}-mask`]: {
                    position: "absolute",
                    inset: 0,
                    zIndex: o,
                    background: r,
                    pointerEvents: "auto"
                },
                [O]: {
                    position: "absolute",
                    zIndex: o,
                    maxWidth: "100vw",
                    transition: `all ${c}`,
                    "&-hidden": {
                        display: "none"
                    }
                },
                [`&-left > ${O}`]: {
                    top: 0,
                    bottom: 0,
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    boxShadow: e.boxShadowDrawerLeft
                },
                [`&-right > ${O}`]: {
                    top: 0,
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    bottom: 0,
                    boxShadow: e.boxShadowDrawerRight
                },
                [`&-top > ${O}`]: {
                    top: 0,
                    insetInline: 0,
                    boxShadow: e.boxShadowDrawerUp
                },
                [`&-bottom > ${O}`]: {
                    bottom: 0,
                    insetInline: 0,
                    boxShadow: e.boxShadowDrawerDown
                },
                [`${a}-content`]: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    background: l,
                    pointerEvents: "auto"
                },
                [`${a}-header`]: {
                    display: "flex",
                    flex: 0,
                    alignItems: "center",
                    padding: `${Q(x)} ${Q(S)}`,
                    fontSize: p,
                    lineHeight: E,
                    borderBottom: `${Q(v)} ${D} ${u}`,
                    "&-title": {
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        minWidth: 0,
                        minHeight: 0
                    }
                },
                [`${a}-extra`]: {
                    flex: "none"
                },
                [`${a}-close`]: Object.assign({
                    display: "inline-flex",
                    width: y(p).add(d).equal(),
                    height: y(p).add(d).equal(),
                    borderRadius: t,
                    justifyContent: "center",
                    alignItems: "center",
                    color: C,
                    fontWeight: P,
                    fontSize: p,
                    fontStyle: "normal",
                    lineHeight: 1,
                    textAlign: "center",
                    textTransform: "none",
                    textDecoration: "none",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    transition: `all ${s}`,
                    textRendering: "auto",
                    [`&${a}-close-end`]: {
                        marginInlineStart: f
                    },
                    [`&:not(${a}-close-end)`]: {
                        marginInlineEnd: f
                    },
                    "&:hover": {
                        color: b,
                        backgroundColor: R,
                        textDecoration: "none"
                    },
                    "&:active": {
                        backgroundColor: k
                    }
                }, We(e)),
                [`${a}-title`]: {
                    flex: 1,
                    margin: 0,
                    fontWeight: e.fontWeightStrong,
                    fontSize: p,
                    lineHeight: E
                },
                [`${a}-body`]: {
                    flex: 1,
                    minWidth: 0,
                    minHeight: 0,
                    padding: S,
                    overflow: "auto",
                    [`${a}-body-skeleton`]: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }
                },
                [`${a}-footer`]: {
                    flexShrink: 0,
                    padding: `${Q(N)} ${Q(h)}`,
                    borderTop: `${Q(v)} ${D} ${u}`
                },
                "&-rtl": {
                    direction: "rtl"
                }
            }
        }
    },
    at = e => ({
        zIndexPopup: e.zIndexPopupBase,
        footerPaddingBlock: e.paddingXS,
        footerPaddingInline: e.padding
    }),
    Oe = Le("Drawer", e => {
        const t = Ke(e, {});
        return [nt(t), tt(t)]
    }, at);
var $e = function(e, t) {
    var a = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (a[o[r]] = e[o[r]]);
    return a
};
const ot = {
        distance: 180
    },
    rt = e => {
        const {
            rootClassName: t,
            width: a,
            height: o,
            size: r = "default",
            mask: l = !0,
            push: c = ot,
            open: s,
            afterOpenChange: d,
            onClose: x,
            prefixCls: S,
            getContainer: p,
            panelRef: E = null,
            style: v,
            className: D,
            "aria-labelledby": u,
            visible: f,
            afterVisibleChange: C,
            maskStyle: b,
            drawerStyle: R,
            contentWrapperStyle: k,
            destroyOnClose: j,
            destroyOnHidden: P
        } = e, N = $e(e, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "panelRef", "style", "className", "aria-labelledby", "visible", "afterVisibleChange", "maskStyle", "drawerStyle", "contentWrapperStyle", "destroyOnClose", "destroyOnHidden"]), h = Te(), y = N.title ? h : void 0, {
            getPopupContainer: O,
            getPrefixCls: ee,
            direction: Y,
            className: W,
            style: L,
            classNames: z,
            styles: T
        } = Ce("drawer"), M = ee("drawer", S), [G, te, ne] = Oe(M), g = p === void 0 && O ? () => O(document.body) : p, A = w({
            "no-mask": !l,
            [`${M}-rtl`]: Y === "rtl"
        }, t, te, ne), _ = n.useMemo(() => a ?? (r === "large" ? 736 : 378), [a, r]), B = n.useMemo(() => o ?? (r === "large" ? 736 : 378), [o, r]), F = {
            motionName: be(M, "mask-motion"),
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            motionDeadline: 500
        }, ae = H => ({
            motionName: be(M, `panel-motion-${H}`),
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            motionDeadline: 500
        }), oe = Ae(), re = Be(E, oe), [U, K] = Fe("Drawer", N.zIndex), {
            classNames: i = {},
            styles: V = {}
        } = N;
        return G(n.createElement(Ue, {
            form: !0,
            space: !0
        }, n.createElement(Ve.Provider, {
            value: K
        }, n.createElement(Je, Object.assign({
            prefixCls: M,
            onClose: x,
            maskMotion: F,
            motion: ae
        }, N, {
            classNames: {
                mask: w(i.mask, z.mask),
                content: w(i.content, z.content),
                wrapper: w(i.wrapper, z.wrapper)
            },
            styles: {
                mask: Object.assign(Object.assign(Object.assign({}, V.mask), b), T.mask),
                content: Object.assign(Object.assign(Object.assign({}, V.content), R), T.content),
                wrapper: Object.assign(Object.assign(Object.assign({}, V.wrapper), k), T.wrapper)
            },
            open: s ?? f,
            mask: l,
            push: c,
            width: _,
            height: B,
            style: Object.assign(Object.assign({}, L), v),
            className: w(W, D),
            rootClassName: A,
            getContainer: g,
            afterOpenChange: d ?? C,
            panelRef: re,
            zIndex: U,
            "aria-labelledby": u ?? y,
            destroyOnClose: P ?? j
        }), n.createElement(xe, Object.assign({
            prefixCls: M
        }, N, {
            ariaId: y,
            onClose: x
        }))))))
    },
    lt = e => {
        const {
            prefixCls: t,
            style: a,
            className: o,
            placement: r = "right"
        } = e, l = $e(e, ["prefixCls", "style", "className", "placement"]), {
            getPrefixCls: c
        } = n.useContext(Xe), s = c("drawer", t), [d, x, S] = Oe(s), p = w(s, `${s}-pure`, `${s}-${r}`, x, S, o);
        return d(n.createElement("div", {
            className: p,
            style: a
        }, n.createElement(xe, Object.assign({
            prefixCls: s
        }, l))))
    };
rt._InternalPanelDoNotUseOrYouWillBeFired = lt;
export {
    rt as D
};