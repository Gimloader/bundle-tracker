import {
    de as G,
    df as ct,
    r as f,
    am as j,
    aB as kt,
    da as Et,
    aD as T,
    bK as Vt,
    _ as zt,
    ak as V,
    ai as Lt,
    aj as dt,
    cN as Bt,
    aL as Mt,
    aK as ft,
    al as Dt,
    bc as Ht,
    aO as Xt,
    bt as Wt,
    aG as Yt,
    bZ as qt,
    dg as Ft,
    bY as Zt,
    d7 as Ut,
    aQ as Gt,
    cT as Qt
} from "./_index.js";

function Jt(e, o) {
    return G.reduce((a, t) => {
        const r = e[`${t}1`],
            s = e[`${t}3`],
            n = e[`${t}6`],
            i = e[`${t}7`];
        return Object.assign(Object.assign({}, a), o(t, {
            lightColor: r,
            lightBorderColor: s,
            darkColor: n,
            textColor: i
        }))
    }, {})
}
const Kt = e => e instanceof ct ? e : new ct(e);

function ut(e) {
    var o = e.children,
        a = e.prefixCls,
        t = e.id,
        r = e.overlayInnerStyle,
        s = e.bodyClassName,
        n = e.className,
        i = e.style;
    return f.createElement("div", {
        className: j("".concat(a, "-content"), n),
        style: i
    }, f.createElement("div", {
        className: j("".concat(a, "-inner"), s),
        id: t,
        role: "tooltip",
        style: r
    }, typeof o == "function" ? o() : o))
}
var I = {
        shiftX: 64,
        adjustY: 1
    },
    k = {
        adjustX: 1,
        shiftY: !0
    },
    v = [0, 0],
    te = {
        left: {
            points: ["cr", "cl"],
            overflow: k,
            offset: [-4, 0],
            targetOffset: v
        },
        right: {
            points: ["cl", "cr"],
            overflow: k,
            offset: [4, 0],
            targetOffset: v
        },
        top: {
            points: ["bc", "tc"],
            overflow: I,
            offset: [0, -4],
            targetOffset: v
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: I,
            offset: [0, 4],
            targetOffset: v
        },
        topLeft: {
            points: ["bl", "tl"],
            overflow: I,
            offset: [0, -4],
            targetOffset: v
        },
        leftTop: {
            points: ["tr", "tl"],
            overflow: k,
            offset: [-4, 0],
            targetOffset: v
        },
        topRight: {
            points: ["br", "tr"],
            overflow: I,
            offset: [0, -4],
            targetOffset: v
        },
        rightTop: {
            points: ["tl", "tr"],
            overflow: k,
            offset: [4, 0],
            targetOffset: v
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: I,
            offset: [0, 4],
            targetOffset: v
        },
        rightBottom: {
            points: ["bl", "br"],
            overflow: k,
            offset: [4, 0],
            targetOffset: v
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: I,
            offset: [0, 4],
            targetOffset: v
        },
        leftBottom: {
            points: ["br", "bl"],
            overflow: k,
            offset: [-4, 0],
            targetOffset: v
        }
    },
    ee = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"],
    oe = function(o, a) {
        var t = o.overlayClassName,
            r = o.trigger,
            s = r === void 0 ? ["hover"] : r,
            n = o.mouseEnterDelay,
            i = n === void 0 ? 0 : n,
            l = o.mouseLeaveDelay,
            d = l === void 0 ? .1 : l,
            p = o.overlayStyle,
            h = o.prefixCls,
            c = h === void 0 ? "rc-tooltip" : h,
            g = o.children,
            b = o.onVisibleChange,
            m = o.afterVisibleChange,
            O = o.transitionName,
            $ = o.animation,
            C = o.motion,
            N = o.placement,
            z = N === void 0 ? "right" : N,
            L = o.align,
            Q = L === void 0 ? {} : L,
            B = o.destroyTooltipOnHide,
            J = B === void 0 ? !1 : B,
            K = o.defaultVisible,
            tt = o.getTooltipContainer,
            et = o.overlayInnerStyle;
        o.arrowContent;
        var x = o.overlay,
            P = o.id,
            E = o.showArrow,
            M = E === void 0 ? !0 : E,
            w = o.classNames,
            _ = o.styles,
            D = kt(o, ee),
            H = Et(P),
            X = f.useRef(null);
        f.useImperativeHandle(a, function() {
            return X.current
        });
        var W = T({}, D);
        "visible" in o && (W.popupVisible = o.visible);
        var Y = function() {
                return f.createElement(ut, {
                    key: "content",
                    prefixCls: c,
                    id: H,
                    bodyClassName: w == null ? void 0 : w.body,
                    overlayInnerStyle: T(T({}, et), _ == null ? void 0 : _.body)
                }, x)
            },
            q = function() {
                var S = f.Children.only(g),
                    F = (S == null ? void 0 : S.props) || {},
                    rt = T(T({}, F), {}, {
                        "aria-describedby": x ? H : null
                    });
                return f.cloneElement(g, rt)
            };
        return f.createElement(Vt, zt({
            popupClassName: j(t, w == null ? void 0 : w.root),
            prefixCls: c,
            popup: Y,
            action: s,
            builtinPlacements: te,
            popupPlacement: z,
            ref: X,
            popupAlign: Q,
            getPopupContainer: tt,
            onPopupVisibleChange: b,
            afterPopupVisibleChange: m,
            popupTransitionName: O,
            popupAnimation: $,
            popupMotion: C,
            defaultPopupVisible: K,
            autoDestroy: J,
            mouseLeaveDelay: d,
            popupStyle: T(T({}, p), _ == null ? void 0 : _.root),
            mouseEnterDelay: i,
            arrow: M
        }, W), q())
    };
const re = f.forwardRef(oe);

function ae(e) {
    const {
        sizePopupArrow: o,
        borderRadiusXS: a,
        borderRadiusOuter: t
    } = e, r = o / 2, s = 0, n = r, i = t * 1 / Math.sqrt(2), l = r - t * (1 - 1 / Math.sqrt(2)), d = r - a * (1 / Math.sqrt(2)), p = t * (Math.sqrt(2) - 1) + a * (1 / Math.sqrt(2)), h = 2 * r - d, c = p, g = 2 * r - i, b = l, m = 2 * r - s, O = n, $ = r * Math.sqrt(2) + t * (Math.sqrt(2) - 2), C = t * (Math.sqrt(2) - 1), N = `polygon(${C}px 100%, 50% ${C}px, ${2*r-C}px 100%, ${C}px 100%)`, z = `path('M ${s} ${n} A ${t} ${t} 0 0 0 ${i} ${l} L ${d} ${p} A ${a} ${a} 0 0 1 ${h} ${c} L ${g} ${b} A ${t} ${t} 0 0 0 ${m} ${O} Z')`;
    return {
        arrowShadowWidth: $,
        arrowPath: z,
        arrowPolygon: N
    }
}
const ne = (e, o, a) => {
        const {
            sizePopupArrow: t,
            arrowPolygon: r,
            arrowPath: s,
            arrowShadowWidth: n,
            borderRadiusXS: i,
            calc: l
        } = e;
        return {
            pointerEvents: "none",
            width: t,
            height: t,
            overflow: "hidden",
            "&::before": {
                position: "absolute",
                bottom: 0,
                insetInlineStart: 0,
                width: t,
                height: l(t).div(2).equal(),
                background: o,
                clipPath: {
                    _multi_value_: !0,
                    value: [r, s]
                },
                content: '""'
            },
            "&::after": {
                content: '""',
                position: "absolute",
                width: n,
                height: n,
                bottom: 0,
                insetInline: 0,
                margin: "auto",
                borderRadius: {
                    _skip_check_: !0,
                    value: `0 0 ${V(i)} 0`
                },
                transform: "translateY(50%) rotate(-135deg)",
                boxShadow: a,
                zIndex: 0,
                background: "transparent"
            }
        }
    },
    mt = 8;

function gt(e) {
    const {
        contentRadius: o,
        limitVerticalRadius: a
    } = e, t = o > 12 ? o + 2 : 12;
    return {
        arrowOffsetHorizontal: t,
        arrowOffsetVertical: a ? mt : t
    }
}

function U(e, o) {
    return e ? o : {}
}

function se(e, o, a) {
    const {
        componentCls: t,
        boxShadowPopoverArrow: r,
        arrowOffsetVertical: s,
        arrowOffsetHorizontal: n
    } = e, {
        arrowDistance: i = 0,
        arrowPlacement: l = {
            left: !0,
            right: !0,
            top: !0,
            bottom: !0
        }
    } = a || {};
    return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${t}-arrow`]: [Object.assign(Object.assign({
                position: "absolute",
                zIndex: 1,
                display: "block"
            }, ne(e, o, r)), {
                "&:before": {
                    background: o
                }
            })]
        }, U(!!l.top, {
            [
                [`&-placement-top > ${t}-arrow`, `&-placement-topLeft > ${t}-arrow`, `&-placement-topRight > ${t}-arrow`].join(",")
            ]: {
                bottom: i,
                transform: "translateY(100%) rotate(180deg)"
            },
            [`&-placement-top > ${t}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)"
            },
            "&-placement-topLeft": {
                "--arrow-offset-horizontal": n,
                [`> ${t}-arrow`]: {
                    left: {
                        _skip_check_: !0,
                        value: n
                    }
                }
            },
            "&-placement-topRight": {
                "--arrow-offset-horizontal": `calc(100% - ${V(n)})`,
                [`> ${t}-arrow`]: {
                    right: {
                        _skip_check_: !0,
                        value: n
                    }
                }
            }
        })), U(!!l.bottom, {
            [
                [`&-placement-bottom > ${t}-arrow`, `&-placement-bottomLeft > ${t}-arrow`, `&-placement-bottomRight > ${t}-arrow`].join(",")
            ]: {
                top: i,
                transform: "translateY(-100%)"
            },
            [`&-placement-bottom > ${t}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateX(-50%) translateY(-100%)"
            },
            "&-placement-bottomLeft": {
                "--arrow-offset-horizontal": n,
                [`> ${t}-arrow`]: {
                    left: {
                        _skip_check_: !0,
                        value: n
                    }
                }
            },
            "&-placement-bottomRight": {
                "--arrow-offset-horizontal": `calc(100% - ${V(n)})`,
                [`> ${t}-arrow`]: {
                    right: {
                        _skip_check_: !0,
                        value: n
                    }
                }
            }
        })), U(!!l.left, {
            [
                [`&-placement-left > ${t}-arrow`, `&-placement-leftTop > ${t}-arrow`, `&-placement-leftBottom > ${t}-arrow`].join(",")
            ]: {
                right: {
                    _skip_check_: !0,
                    value: i
                },
                transform: "translateX(100%) rotate(90deg)"
            },
            [`&-placement-left > ${t}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateY(-50%) translateX(100%) rotate(90deg)"
            },
            [`&-placement-leftTop > ${t}-arrow`]: {
                top: s
            },
            [`&-placement-leftBottom > ${t}-arrow`]: {
                bottom: s
            }
        })), U(!!l.right, {
            [
                [`&-placement-right > ${t}-arrow`, `&-placement-rightTop > ${t}-arrow`, `&-placement-rightBottom > ${t}-arrow`].join(",")
            ]: {
                left: {
                    _skip_check_: !0,
                    value: i
                },
                transform: "translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-right > ${t}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: "50%"
                },
                transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-rightTop > ${t}-arrow`]: {
                top: s
            },
            [`&-placement-rightBottom > ${t}-arrow`]: {
                bottom: s
            }
        }))
    }
}

function ie(e, o, a, t) {
    if (t === !1) return {
        adjustX: !1,
        adjustY: !1
    };
    const r = t && typeof t == "object" ? t : {},
        s = {};
    switch (e) {
        case "top":
        case "bottom":
            s.shiftX = o.arrowOffsetHorizontal * 2 + a, s.shiftY = !0, s.adjustY = !0;
            break;
        case "left":
        case "right":
            s.shiftY = o.arrowOffsetVertical * 2 + a, s.shiftX = !0, s.adjustX = !0;
            break
    }
    const n = Object.assign(Object.assign({}, s), r);
    return n.shiftX || (n.adjustX = !0), n.shiftY || (n.adjustY = !0), n
}
const pt = {
        left: {
            points: ["cr", "cl"]
        },
        right: {
            points: ["cl", "cr"]
        },
        top: {
            points: ["bc", "tc"]
        },
        bottom: {
            points: ["tc", "bc"]
        },
        topLeft: {
            points: ["bl", "tl"]
        },
        leftTop: {
            points: ["tr", "tl"]
        },
        topRight: {
            points: ["br", "tr"]
        },
        rightTop: {
            points: ["tl", "tr"]
        },
        bottomRight: {
            points: ["tr", "br"]
        },
        rightBottom: {
            points: ["bl", "br"]
        },
        bottomLeft: {
            points: ["tl", "bl"]
        },
        leftBottom: {
            points: ["br", "bl"]
        }
    },
    le = {
        topLeft: {
            points: ["bl", "tc"]
        },
        leftTop: {
            points: ["tr", "cl"]
        },
        topRight: {
            points: ["br", "tc"]
        },
        rightTop: {
            points: ["tl", "cr"]
        },
        bottomRight: {
            points: ["tr", "bc"]
        },
        rightBottom: {
            points: ["bl", "cr"]
        },
        bottomLeft: {
            points: ["tl", "bc"]
        },
        leftBottom: {
            points: ["br", "cl"]
        }
    },
    ce = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);

function fe(e) {
    const {
        arrowWidth: o,
        autoAdjustOverflow: a,
        arrowPointAtCenter: t,
        offset: r,
        borderRadius: s,
        visibleFirst: n
    } = e, i = o / 2, l = {}, d = gt({
        contentRadius: s,
        limitVerticalRadius: !0
    });
    return Object.keys(pt).forEach(p => {
        const h = t && le[p] || pt[p],
            c = Object.assign(Object.assign({}, h), {
                offset: [0, 0],
                dynamicInset: !0
            });
        switch (l[p] = c, ce.has(p) && (c.autoArrow = !1), p) {
            case "top":
            case "topLeft":
            case "topRight":
                c.offset[1] = -i - r;
                break;
            case "bottom":
            case "bottomLeft":
            case "bottomRight":
                c.offset[1] = i + r;
                break;
            case "left":
            case "leftTop":
            case "leftBottom":
                c.offset[0] = -i - r;
                break;
            case "right":
            case "rightTop":
            case "rightBottom":
                c.offset[0] = i + r;
                break
        }
        if (t) switch (p) {
            case "topLeft":
            case "bottomLeft":
                c.offset[0] = -d.arrowOffsetHorizontal - i;
                break;
            case "topRight":
            case "bottomRight":
                c.offset[0] = d.arrowOffsetHorizontal + i;
                break;
            case "leftTop":
            case "rightTop":
                c.offset[1] = -d.arrowOffsetHorizontal * 2 + i;
                break;
            case "leftBottom":
            case "rightBottom":
                c.offset[1] = d.arrowOffsetHorizontal * 2 - i;
                break
        }
        c.overflow = ie(p, d, o, a), n && (c.htmlRegion = "visibleFirst")
    }), l
}
const pe = e => {
        const {
            calc: o,
            componentCls: a,
            tooltipMaxWidth: t,
            tooltipColor: r,
            tooltipBg: s,
            tooltipBorderRadius: n,
            zIndexPopup: i,
            controlHeight: l,
            boxShadowSecondary: d,
            paddingSM: p,
            paddingXS: h,
            arrowOffsetHorizontal: c,
            sizePopupArrow: g
        } = e, b = o(n).add(g).add(c).equal(), m = o(n).mul(2).add(g).equal();
        return [{
            [a]: Object.assign(Object.assign(Object.assign(Object.assign({}, Mt(e)), {
                position: "absolute",
                zIndex: i,
                display: "block",
                width: "max-content",
                maxWidth: t,
                visibility: "visible",
                "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
                transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
                "&-hidden": {
                    display: "none"
                },
                "--antd-arrow-background-color": s,
                [`${a}-inner`]: {
                    minWidth: m,
                    minHeight: l,
                    padding: `${V(e.calc(p).div(2).equal())} ${V(h)}`,
                    color: `var(--ant-tooltip-color, ${r})`,
                    textAlign: "start",
                    textDecoration: "none",
                    wordWrap: "break-word",
                    backgroundColor: s,
                    borderRadius: n,
                    boxShadow: d,
                    boxSizing: "border-box"
                },
                [
                    ["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")
                ]: {
                    minWidth: b
                },
                [
                    ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")
                ]: {
                    [`${a}-inner`]: {
                        borderRadius: e.min(n, mt)
                    }
                },
                [`${a}-content`]: {
                    position: "relative"
                }
            }), Jt(e, (O, {
                darkColor: $
            }) => ({
                [`&${a}-${O}`]: {
                    [`${a}-inner`]: {
                        backgroundColor: $
                    },
                    [`${a}-arrow`]: {
                        "--antd-arrow-background-color": $
                    }
                }
            }))), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }, se(e, "var(--antd-arrow-background-color)"), {
            [`${a}-pure`]: {
                position: "relative",
                maxWidth: "none",
                margin: e.sizePopupArrow
            }
        }]
    },
    de = e => Object.assign(Object.assign({
        zIndexPopup: e.zIndexPopupBase + 70
    }, gt({
        contentRadius: e.borderRadius,
        limitVerticalRadius: !0
    })), ae(dt(e, {
        borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
    }))),
    bt = (e, o = !0) => Lt("Tooltip", t => {
        const {
            borderRadius: r,
            colorTextLightSolid: s,
            colorBgSpotlight: n
        } = t, i = dt(t, {
            tooltipMaxWidth: 250,
            tooltipColor: s,
            tooltipBorderRadius: r,
            tooltipBg: n
        });
        return [pe(i), Bt(t, "zoom-big-fast")]
    }, de, {
        resetStyle: !1,
        injectStyle: o
    })(e),
    ue = G.map(e => `${e}-inverse`),
    me = ["success", "processing", "error", "default", "warning"];

function ge(e, o = !0) {
    return o ? [].concat(ft(ue), ft(G)).includes(e) : G.includes(e)
}

function Ce(e) {
    return me.includes(e)
}

function ht(e, o) {
    const a = ge(o),
        t = j({
            [`${e}-${o}`]: o && a
        }),
        r = {},
        s = {},
        n = Kt(o).toRgb(),
        l = (.299 * n.r + .587 * n.g + .114 * n.b) / 255 < .5 ? "#FFF" : "#000";
    return o && !a && (r.background = o, r["--ant-tooltip-color"] = l, s["--antd-arrow-background-color"] = o), {
        className: t,
        overlayStyle: r,
        arrowStyle: s
    }
}
const be = e => {
    const {
        prefixCls: o,
        className: a,
        placement: t = "top",
        title: r,
        color: s,
        overlayInnerStyle: n
    } = e, {
        getPrefixCls: i
    } = f.useContext(Dt), l = i("tooltip", o), [d, p, h] = bt(l), c = ht(l, s), g = c.arrowStyle, b = Object.assign(Object.assign({}, n), c.overlayStyle), m = j(p, h, l, `${l}-pure`, `${l}-placement-${t}`, a, c.className);
    return d(f.createElement("div", {
        className: m,
        style: g
    }, f.createElement("div", {
        className: `${l}-arrow`
    }), f.createElement(ut, Object.assign({}, e, {
        className: p,
        prefixCls: l,
        overlayInnerStyle: b
    }), r)))
};
var he = function(e, o) {
    var a = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (a[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) o.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (a[t[r]] = e[t[r]]);
    return a
};
const ve = f.forwardRef((e, o) => {
        var a, t;
        const {
            prefixCls: r,
            openClassName: s,
            getTooltipContainer: n,
            color: i,
            overlayInnerStyle: l,
            children: d,
            afterOpenChange: p,
            afterVisibleChange: h,
            destroyTooltipOnHide: c,
            destroyOnHidden: g,
            arrow: b = !0,
            title: m,
            overlay: O,
            builtinPlacements: $,
            arrowPointAtCenter: C = !1,
            autoAdjustOverflow: N = !0,
            motion: z,
            getPopupContainer: L,
            placement: Q = "top",
            mouseEnterDelay: B = .1,
            mouseLeaveDelay: J = .1,
            overlayStyle: K,
            rootClassName: tt,
            overlayClassName: et,
            styles: x,
            classNames: P
        } = e, E = he(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), M = !!b, [, w] = Ht(), {
            getPopupContainer: _,
            getPrefixCls: D,
            direction: H,
            className: X,
            style: W,
            classNames: Y,
            styles: q
        } = Xt("tooltip"), ot = Wt(), S = f.useRef(null), F = () => {
            var u;
            (u = S.current) === null || u === void 0 || u.forceAlign()
        };
        f.useImperativeHandle(o, () => {
            var u, y;
            return {
                forceAlign: F,
                forcePopupAlign: () => {
                    ot.deprecated(!1, "forcePopupAlign", "forceAlign"), F()
                },
                nativeElement: (u = S.current) === null || u === void 0 ? void 0 : u.nativeElement,
                popupElement: (y = S.current) === null || y === void 0 ? void 0 : y.popupElement
            }
        });
        const [rt, vt] = Yt(!1, {
            value: (a = e.open) !== null && a !== void 0 ? a : e.visible,
            defaultValue: (t = e.defaultOpen) !== null && t !== void 0 ? t : e.defaultVisible
        }), at = !m && !O && m !== 0, wt = u => {
            var y, R;
            vt(at ? !1 : u), at || ((y = e.onOpenChange) === null || y === void 0 || y.call(e, u), (R = e.onVisibleChange) === null || R === void 0 || R.call(e, u))
        }, yt = f.useMemo(() => {
            var u, y;
            let R = C;
            return typeof b == "object" && (R = (y = (u = b.pointAtCenter) !== null && u !== void 0 ? u : b.arrowPointAtCenter) !== null && y !== void 0 ? y : C), $ || fe({
                arrowPointAtCenter: R,
                autoAdjustOverflow: N,
                arrowWidth: M ? w.sizePopupArrow : 0,
                borderRadius: w.borderRadius,
                offset: w.marginXXS,
                visibleFirst: !0
            })
        }, [C, b, $, w]), nt = f.useMemo(() => m === 0 ? m : O || m || "", [O, m]), Ct = f.createElement(qt, {
            space: !0
        }, typeof nt == "function" ? nt() : nt), A = D("tooltip", r), Ot = D(), $t = e["data-popover-inject"];
        let st = rt;
        !("open" in e) && !("visible" in e) && at && (st = !1);
        const it = f.isValidElement(d) && !Ft(d) ? d : f.createElement("span", null, d),
            Z = it.props,
            xt = !Z.className || typeof Z.className == "string" ? j(Z.className, s || `${A}-open`) : Z.className,
            [Pt, _t, St] = bt(A, !$t),
            lt = ht(A, i),
            jt = lt.arrowStyle,
            Tt = j(et, {
                [`${A}-rtl`]: H === "rtl"
            }, lt.className, tt, _t, St, X, Y.root, P == null ? void 0 : P.root),
            Nt = j(Y.body, P == null ? void 0 : P.body),
            [At, Rt] = Zt("Tooltip", E.zIndex),
            It = f.createElement(re, Object.assign({}, E, {
                zIndex: At,
                showArrow: M,
                placement: Q,
                mouseEnterDelay: B,
                mouseLeaveDelay: J,
                prefixCls: A,
                classNames: {
                    root: Tt,
                    body: Nt
                },
                styles: {
                    root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, jt), q.root), W), K), x == null ? void 0 : x.root),
                    body: Object.assign(Object.assign(Object.assign(Object.assign({}, q.body), l), x == null ? void 0 : x.body), lt.overlayStyle)
                },
                getTooltipContainer: L || n || _,
                ref: S,
                builtinPlacements: yt,
                overlay: Ct,
                visible: st,
                onVisibleChange: wt,
                afterVisibleChange: p ?? h,
                arrowContent: f.createElement("span", {
                    className: `${A}-arrow-content`
                }),
                motion: {
                    motionName: Ut(Ot, "zoom-big-fast", e.transitionName),
                    motionDeadline: 1e3
                },
                destroyTooltipOnHide: g ?? !!c
            }), st ? Gt(it, {
                className: xt
            }) : it);
        return Pt(f.createElement(Qt.Provider, {
            value: Rt
        }, It))
    }),
    we = ve;
we._InternalPanelDoNotUseOrYouWillBeFired = be;
export {
    ut as P, we as T, ne as a, se as b, gt as c, fe as d, Jt as e, Ce as f, ae as g, ge as i
};