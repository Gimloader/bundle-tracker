import {
    de as G,
    r as c,
    am as j,
    aB as It,
    da as kt,
    aD as T,
    bK as Et,
    _ as Vt,
    ak as V,
    ai as zt,
    aj as pt,
    cN as Lt,
    aL as Bt,
    aK as ct,
    al as Mt,
    bc as Dt,
    aO as Ht,
    bt as Xt,
    aG as Wt,
    bZ as Yt,
    df as qt,
    bY as Ft,
    d7 as Zt,
    aQ as Ut,
    cT as Gt
} from "./_index.js";

function Qt(e, o) {
    return G.reduce((r, t) => {
        const a = e[`${t}1`],
            s = e[`${t}3`],
            n = e[`${t}6`],
            i = e[`${t}7`];
        return Object.assign(Object.assign({}, r), o(t, {
            lightColor: a,
            lightBorderColor: s,
            darkColor: n,
            textColor: i
        }))
    }, {})
}

function dt(e) {
    var o = e.children,
        r = e.prefixCls,
        t = e.id,
        a = e.overlayInnerStyle,
        s = e.bodyClassName,
        n = e.className,
        i = e.style;
    return c.createElement("div", {
        className: j("".concat(r, "-content"), n),
        style: i
    }, c.createElement("div", {
        className: j("".concat(r, "-inner"), s),
        id: t,
        role: "tooltip",
        style: a
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
    Jt = {
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
    Kt = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"],
    te = function(o, r) {
        var t = o.overlayClassName,
            a = o.trigger,
            s = a === void 0 ? ["hover"] : a,
            n = o.mouseEnterDelay,
            i = n === void 0 ? 0 : n,
            l = o.mouseLeaveDelay,
            p = l === void 0 ? .1 : l,
            u = o.overlayStyle,
            f = o.prefixCls,
            d = f === void 0 ? "rc-tooltip" : f,
            b = o.children,
            h = o.onVisibleChange,
            g = o.afterVisibleChange,
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
            D = It(o, Kt),
            H = kt(P),
            X = c.useRef(null);
        c.useImperativeHandle(r, function() {
            return X.current
        });
        var W = T({}, D);
        "visible" in o && (W.popupVisible = o.visible);
        var Y = function() {
                return c.createElement(dt, {
                    key: "content",
                    prefixCls: d,
                    id: H,
                    bodyClassName: w == null ? void 0 : w.body,
                    overlayInnerStyle: T(T({}, et), _ == null ? void 0 : _.body)
                }, x)
            },
            q = function() {
                var S = c.Children.only(b),
                    F = (S == null ? void 0 : S.props) || {},
                    rt = T(T({}, F), {}, {
                        "aria-describedby": x ? H : null
                    });
                return c.cloneElement(b, rt)
            };
        return c.createElement(Et, Vt({
            popupClassName: j(t, w == null ? void 0 : w.root),
            prefixCls: d,
            popup: Y,
            action: s,
            builtinPlacements: Jt,
            popupPlacement: z,
            ref: X,
            popupAlign: Q,
            getPopupContainer: tt,
            onPopupVisibleChange: h,
            afterPopupVisibleChange: g,
            popupTransitionName: O,
            popupAnimation: $,
            popupMotion: C,
            defaultPopupVisible: K,
            autoDestroy: J,
            mouseLeaveDelay: p,
            popupStyle: T(T({}, u), _ == null ? void 0 : _.root),
            mouseEnterDelay: i,
            arrow: M
        }, W), q())
    };
const ee = c.forwardRef(te);

function oe(e) {
    const {
        sizePopupArrow: o,
        borderRadiusXS: r,
        borderRadiusOuter: t
    } = e, a = o / 2, s = 0, n = a, i = t * 1 / Math.sqrt(2), l = a - t * (1 - 1 / Math.sqrt(2)), p = a - r * (1 / Math.sqrt(2)), u = t * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), f = 2 * a - p, d = u, b = 2 * a - i, h = l, g = 2 * a - s, O = n, $ = a * Math.sqrt(2) + t * (Math.sqrt(2) - 2), C = t * (Math.sqrt(2) - 1), N = `polygon(${C}px 100%, 50% ${C}px, ${2*a-C}px 100%, ${C}px 100%)`, z = `path('M ${s} ${n} A ${t} ${t} 0 0 0 ${i} ${l} L ${p} ${u} A ${r} ${r} 0 0 1 ${f} ${d} L ${b} ${h} A ${t} ${t} 0 0 0 ${g} ${O} Z')`;
    return {
        arrowShadowWidth: $,
        arrowPath: z,
        arrowPolygon: N
    }
}
const re = (e, o, r) => {
        const {
            sizePopupArrow: t,
            arrowPolygon: a,
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
                    value: [a, s]
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
                boxShadow: r,
                zIndex: 0,
                background: "transparent"
            }
        }
    },
    ut = 8;

function mt(e) {
    const {
        contentRadius: o,
        limitVerticalRadius: r
    } = e, t = o > 12 ? o + 2 : 12;
    return {
        arrowOffsetHorizontal: t,
        arrowOffsetVertical: r ? ut : t
    }
}

function U(e, o) {
    return e ? o : {}
}

function ae(e, o, r) {
    const {
        componentCls: t,
        boxShadowPopoverArrow: a,
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
    } = r || {};
    return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${t}-arrow`]: [Object.assign(Object.assign({
                position: "absolute",
                zIndex: 1,
                display: "block"
            }, re(e, o, a)), {
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

function ne(e, o, r, t) {
    if (t === !1) return {
        adjustX: !1,
        adjustY: !1
    };
    const a = t && typeof t == "object" ? t : {},
        s = {};
    switch (e) {
        case "top":
        case "bottom":
            s.shiftX = o.arrowOffsetHorizontal * 2 + r, s.shiftY = !0, s.adjustY = !0;
            break;
        case "left":
        case "right":
            s.shiftY = o.arrowOffsetVertical * 2 + r, s.shiftX = !0, s.adjustX = !0;
            break
    }
    const n = Object.assign(Object.assign({}, s), a);
    return n.shiftX || (n.adjustX = !0), n.shiftY || (n.adjustY = !0), n
}
const ft = {
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
    se = {
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
    ie = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);

function le(e) {
    const {
        arrowWidth: o,
        autoAdjustOverflow: r,
        arrowPointAtCenter: t,
        offset: a,
        borderRadius: s,
        visibleFirst: n
    } = e, i = o / 2, l = {};
    return Object.keys(ft).forEach(p => {
        const u = t && se[p] || ft[p],
            f = Object.assign(Object.assign({}, u), {
                offset: [0, 0],
                dynamicInset: !0
            });
        switch (l[p] = f, ie.has(p) && (f.autoArrow = !1), p) {
            case "top":
            case "topLeft":
            case "topRight":
                f.offset[1] = -i - a;
                break;
            case "bottom":
            case "bottomLeft":
            case "bottomRight":
                f.offset[1] = i + a;
                break;
            case "left":
            case "leftTop":
            case "leftBottom":
                f.offset[0] = -i - a;
                break;
            case "right":
            case "rightTop":
            case "rightBottom":
                f.offset[0] = i + a;
                break
        }
        const d = mt({
            contentRadius: s,
            limitVerticalRadius: !0
        });
        if (t) switch (p) {
            case "topLeft":
            case "bottomLeft":
                f.offset[0] = -d.arrowOffsetHorizontal - i;
                break;
            case "topRight":
            case "bottomRight":
                f.offset[0] = d.arrowOffsetHorizontal + i;
                break;
            case "leftTop":
            case "rightTop":
                f.offset[1] = -d.arrowOffsetHorizontal * 2 + i;
                break;
            case "leftBottom":
            case "rightBottom":
                f.offset[1] = d.arrowOffsetHorizontal * 2 - i;
                break
        }
        f.overflow = ne(p, d, o, r), n && (f.htmlRegion = "visibleFirst")
    }), l
}
const ce = e => {
        const {
            calc: o,
            componentCls: r,
            tooltipMaxWidth: t,
            tooltipColor: a,
            tooltipBg: s,
            tooltipBorderRadius: n,
            zIndexPopup: i,
            controlHeight: l,
            boxShadowSecondary: p,
            paddingSM: u,
            paddingXS: f,
            arrowOffsetHorizontal: d,
            sizePopupArrow: b
        } = e, h = o(n).add(b).add(d).equal(), g = o(n).mul(2).add(b).equal();
        return [{
            [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, Bt(e)), {
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
                [`${r}-inner`]: {
                    minWidth: g,
                    minHeight: l,
                    padding: `${V(e.calc(u).div(2).equal())} ${V(f)}`,
                    color: a,
                    textAlign: "start",
                    textDecoration: "none",
                    wordWrap: "break-word",
                    backgroundColor: s,
                    borderRadius: n,
                    boxShadow: p,
                    boxSizing: "border-box"
                },
                [
                    ["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")
                ]: {
                    minWidth: h
                },
                [
                    ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")
                ]: {
                    [`${r}-inner`]: {
                        borderRadius: e.min(n, ut)
                    }
                },
                [`${r}-content`]: {
                    position: "relative"
                }
            }), Qt(e, (O, {
                darkColor: $
            }) => ({
                [`&${r}-${O}`]: {
                    [`${r}-inner`]: {
                        backgroundColor: $
                    },
                    [`${r}-arrow`]: {
                        "--antd-arrow-background-color": $
                    }
                }
            }))), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }, ae(e, "var(--antd-arrow-background-color)"), {
            [`${r}-pure`]: {
                position: "relative",
                maxWidth: "none",
                margin: e.sizePopupArrow
            }
        }]
    },
    fe = e => Object.assign(Object.assign({
        zIndexPopup: e.zIndexPopupBase + 70
    }, mt({
        contentRadius: e.borderRadius,
        limitVerticalRadius: !0
    })), oe(pt(e, {
        borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
    }))),
    gt = (e, o = !0) => zt("Tooltip", t => {
        const {
            borderRadius: a,
            colorTextLightSolid: s,
            colorBgSpotlight: n
        } = t, i = pt(t, {
            tooltipMaxWidth: 250,
            tooltipColor: s,
            tooltipBorderRadius: a,
            tooltipBg: n
        });
        return [ce(i), Lt(t, "zoom-big-fast")]
    }, fe, {
        resetStyle: !1,
        injectStyle: o
    })(e),
    pe = G.map(e => `${e}-inverse`),
    de = ["success", "processing", "error", "default", "warning"];

function ue(e, o = !0) {
    return o ? [].concat(ct(pe), ct(G)).includes(e) : G.includes(e)
}

function we(e) {
    return de.includes(e)
}

function bt(e, o) {
    const r = ue(o),
        t = j({
            [`${e}-${o}`]: o && r
        }),
        a = {},
        s = {};
    return o && !r && (a.background = o, s["--antd-arrow-background-color"] = o), {
        className: t,
        overlayStyle: a,
        arrowStyle: s
    }
}
const me = e => {
    const {
        prefixCls: o,
        className: r,
        placement: t = "top",
        title: a,
        color: s,
        overlayInnerStyle: n
    } = e, {
        getPrefixCls: i
    } = c.useContext(Mt), l = i("tooltip", o), [p, u, f] = gt(l), d = bt(l, s), b = d.arrowStyle, h = Object.assign(Object.assign({}, n), d.overlayStyle), g = j(u, f, l, `${l}-pure`, `${l}-placement-${t}`, r, d.className);
    return p(c.createElement("div", {
        className: g,
        style: b
    }, c.createElement("div", {
        className: `${l}-arrow`
    }), c.createElement(dt, Object.assign({}, e, {
        className: u,
        prefixCls: l,
        overlayInnerStyle: h
    }), a)))
};
var ge = function(e, o) {
    var r = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) o.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
    return r
};
const be = c.forwardRef((e, o) => {
        var r, t;
        const {
            prefixCls: a,
            openClassName: s,
            getTooltipContainer: n,
            color: i,
            overlayInnerStyle: l,
            children: p,
            afterOpenChange: u,
            afterVisibleChange: f,
            destroyTooltipOnHide: d,
            destroyOnHidden: b,
            arrow: h = !0,
            title: g,
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
        } = e, E = ge(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), M = !!h, [, w] = Dt(), {
            getPopupContainer: _,
            getPrefixCls: D,
            direction: H,
            className: X,
            style: W,
            classNames: Y,
            styles: q
        } = Ht("tooltip"), ot = Xt(), S = c.useRef(null), F = () => {
            var m;
            (m = S.current) === null || m === void 0 || m.forceAlign()
        };
        c.useImperativeHandle(o, () => {
            var m, y;
            return {
                forceAlign: F,
                forcePopupAlign: () => {
                    ot.deprecated(!1, "forcePopupAlign", "forceAlign"), F()
                },
                nativeElement: (m = S.current) === null || m === void 0 ? void 0 : m.nativeElement,
                popupElement: (y = S.current) === null || y === void 0 ? void 0 : y.popupElement
            }
        });
        const [rt, ht] = Wt(!1, {
            value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
            defaultValue: (t = e.defaultOpen) !== null && t !== void 0 ? t : e.defaultVisible
        }), at = !g && !O && g !== 0, vt = m => {
            var y, R;
            ht(at ? !1 : m), at || ((y = e.onOpenChange) === null || y === void 0 || y.call(e, m), (R = e.onVisibleChange) === null || R === void 0 || R.call(e, m))
        }, wt = c.useMemo(() => {
            var m, y;
            let R = C;
            return typeof h == "object" && (R = (y = (m = h.pointAtCenter) !== null && m !== void 0 ? m : h.arrowPointAtCenter) !== null && y !== void 0 ? y : C), $ || le({
                arrowPointAtCenter: R,
                autoAdjustOverflow: N,
                arrowWidth: M ? w.sizePopupArrow : 0,
                borderRadius: w.borderRadius,
                offset: w.marginXXS,
                visibleFirst: !0
            })
        }, [C, h, $, w]), nt = c.useMemo(() => g === 0 ? g : O || g || "", [O, g]), yt = c.createElement(Yt, {
            space: !0
        }, typeof nt == "function" ? nt() : nt), A = D("tooltip", a), Ct = D(), Ot = e["data-popover-inject"];
        let st = rt;
        !("open" in e) && !("visible" in e) && at && (st = !1);
        const it = c.isValidElement(p) && !qt(p) ? p : c.createElement("span", null, p),
            Z = it.props,
            $t = !Z.className || typeof Z.className == "string" ? j(Z.className, s || `${A}-open`) : Z.className,
            [xt, Pt, _t] = gt(A, !Ot),
            lt = bt(A, i),
            St = lt.arrowStyle,
            jt = j(et, {
                [`${A}-rtl`]: H === "rtl"
            }, lt.className, tt, Pt, _t, X, Y.root, P == null ? void 0 : P.root),
            Tt = j(Y.body, P == null ? void 0 : P.body),
            [Nt, At] = Ft("Tooltip", E.zIndex),
            Rt = c.createElement(ee, Object.assign({}, E, {
                zIndex: Nt,
                showArrow: M,
                placement: Q,
                mouseEnterDelay: B,
                mouseLeaveDelay: J,
                prefixCls: A,
                classNames: {
                    root: jt,
                    body: Tt
                },
                styles: {
                    root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, St), q.root), W), K), x == null ? void 0 : x.root),
                    body: Object.assign(Object.assign(Object.assign(Object.assign({}, q.body), l), x == null ? void 0 : x.body), lt.overlayStyle)
                },
                getTooltipContainer: L || n || _,
                ref: S,
                builtinPlacements: wt,
                overlay: yt,
                visible: st,
                onVisibleChange: vt,
                afterVisibleChange: u ?? f,
                arrowContent: c.createElement("span", {
                    className: `${A}-arrow-content`
                }),
                motion: {
                    motionName: Zt(Ct, "zoom-big-fast", e.transitionName),
                    motionDeadline: 1e3
                },
                destroyTooltipOnHide: b ?? !!d
            }), st ? Ut(it, {
                className: $t
            }) : it);
        return xt(c.createElement(Gt.Provider, {
            value: At
        }, Rt))
    }),
    he = be;
he._InternalPanelDoNotUseOrYouWillBeFired = me;
export {
    dt as P, he as T, re as a, ae as b, mt as c, le as d, Qt as e, we as f, oe as g, ue as i
};