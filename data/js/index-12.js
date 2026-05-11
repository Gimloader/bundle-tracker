import {
    ai as G,
    bF as J,
    aj as K,
    ak as F,
    aL as Y,
    r as n,
    al as _,
    am as T,
    bb as L,
    aS as Z,
    d0 as ee,
    d1 as oe,
    d2 as H,
    d3 as re
} from "./_index.js";
import {
    e as te,
    i as le,
    f as ne
} from "./index-5.js";
const ae = e => {
        const {
            paddingXXS: t,
            lineWidth: l,
            tagPaddingHorizontal: o,
            componentCls: r,
            calc: s
        } = e, a = s(o).sub(l).equal(), u = s(t).sub(l).equal();
        return {
            [r]: Object.assign(Object.assign({}, Y(e)), {
                display: "inline-block",
                height: "auto",
                marginInlineEnd: e.marginXS,
                paddingInline: a,
                fontSize: e.tagFontSize,
                lineHeight: e.tagLineHeight,
                whiteSpace: "nowrap",
                background: e.defaultBg,
                border: `${F(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                borderRadius: e.borderRadiusSM,
                opacity: 1,
                transition: `all ${e.motionDurationMid}`,
                textAlign: "start",
                position: "relative",
                [`&${r}-rtl`]: {
                    direction: "rtl"
                },
                "&, a, a:hover": {
                    color: e.defaultColor
                },
                [`${r}-close-icon`]: {
                    marginInlineStart: u,
                    fontSize: e.tagIconSize,
                    color: e.colorIcon,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationMid}`,
                    "&:hover": {
                        color: e.colorTextHeading
                    }
                },
                [`&${r}-has-color`]: {
                    borderColor: "transparent",
                    [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                        color: e.colorTextLightSolid
                    }
                },
                "&-checkable": {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    cursor: "pointer",
                    [`&:not(${r}-checkable-checked):hover`]: {
                        color: e.colorPrimary,
                        backgroundColor: e.colorFillSecondary
                    },
                    "&:active, &-checked": {
                        color: e.colorTextLightSolid
                    },
                    "&-checked": {
                        backgroundColor: e.colorPrimary,
                        "&:hover": {
                            backgroundColor: e.colorPrimaryHover
                        }
                    },
                    "&:active": {
                        backgroundColor: e.colorPrimaryActive
                    }
                },
                "&-hidden": {
                    display: "none"
                },
                [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                    marginInlineStart: a
                }
            }),
            [`${r}-borderless`]: {
                borderColor: "transparent",
                background: e.tagBorderlessBg
            }
        }
    },
    I = e => {
        const {
            lineWidth: t,
            fontSizeIcon: l,
            calc: o
        } = e, r = e.fontSizeSM;
        return K(e, {
            tagFontSize: r,
            tagLineHeight: F(o(e.lineHeightSM).mul(r).equal()),
            tagIconSize: o(l).sub(o(t).mul(2)).equal(),
            tagPaddingHorizontal: 8,
            tagBorderlessBg: e.defaultBg
        })
    },
    P = e => ({
        defaultBg: new J(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),
        defaultColor: e.colorText
    }),
    M = G("Tag", e => {
        const t = I(e);
        return ae(t)
    }, P);
var se = function(e, t) {
    var l = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (l[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (l[o[r]] = e[o[r]]);
    return l
};
const ce = n.forwardRef((e, t) => {
        const {
            prefixCls: l,
            style: o,
            className: r,
            checked: s,
            onChange: a,
            onClick: u
        } = e, d = se(e, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]), {
            getPrefixCls: m,
            tag: g
        } = n.useContext(_), f = h => {
            a == null || a(!s), u == null || u(h)
        }, C = m("tag", l), [y, S, i] = M(C), $ = T(C, `${C}-checkable`, {
            [`${C}-checkable-checked`]: s
        }, g == null ? void 0 : g.className, r, S, i);
        return y(n.createElement("span", Object.assign({}, d, {
            ref: t,
            style: Object.assign(Object.assign({}, o), g == null ? void 0 : g.style),
            className: $,
            onClick: f
        })))
    }),
    ie = e => te(e, (t, {
        textColor: l,
        lightBorderColor: o,
        lightColor: r,
        darkColor: s
    }) => ({
        [`${e.componentCls}${e.componentCls}-${t}`]: {
            color: l,
            background: r,
            borderColor: o,
            "&-inverse": {
                color: e.colorTextLightSolid,
                background: s,
                borderColor: s
            },
            [`&${e.componentCls}-borderless`]: {
                borderColor: "transparent"
            }
        }
    })),
    de = L(["Tag", "preset"], e => {
        const t = I(e);
        return ie(t)
    }, P);

function ge(e) {
    return typeof e != "string" ? e : e.charAt(0).toUpperCase() + e.slice(1)
}
const v = (e, t, l) => {
        const o = ge(l);
        return {
            [`${e.componentCls}${e.componentCls}-${t}`]: {
                color: e[`color${l}`],
                background: e[`color${o}Bg`],
                borderColor: e[`color${o}Border`],
                [`&${e.componentCls}-borderless`]: {
                    borderColor: "transparent"
                }
            }
        }
    },
    ue = L(["Tag", "status"], e => {
        const t = I(e);
        return [v(t, "success", "Success"), v(t, "processing", "Info"), v(t, "error", "Error"), v(t, "warning", "Warning")]
    }, P);
var Ce = function(e, t) {
    var l = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (l[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (l[o[r]] = e[o[r]]);
    return l
};
const pe = n.forwardRef((e, t) => {
        const {
            prefixCls: l,
            className: o,
            rootClassName: r,
            style: s,
            children: a,
            icon: u,
            color: d,
            onClose: m,
            bordered: g = !0,
            visible: f
        } = e, C = Ce(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]), {
            getPrefixCls: y,
            direction: S,
            tag: i
        } = n.useContext(_), [$, h] = n.useState(!0), V = Z(C, ["closeIcon", "closable"]);
        n.useEffect(() => {
            f !== void 0 && h(f)
        }, [f]);
        const j = le(d),
            N = ne(d),
            x = j || N,
            W = Object.assign(Object.assign({
                backgroundColor: d && !x ? d : void 0
            }, i == null ? void 0 : i.style), s),
            c = y("tag", l),
            [R, k, q] = M(c),
            A = T(c, i == null ? void 0 : i.className, {
                [`${c}-${d}`]: x,
                [`${c}-has-color`]: d && !x,
                [`${c}-hidden`]: !$,
                [`${c}-rtl`]: S === "rtl",
                [`${c}-borderless`]: !g
            }, o, r, k, q),
            E = b => {
                b.stopPropagation(), m == null || m(b), !b.defaultPrevented && h(!1)
            },
            [, X] = ee(H(e), H(i), {
                closable: !1,
                closeIconRender: b => {
                    const U = n.createElement("span", {
                        className: `${c}-close-icon`,
                        onClick: E
                    }, b);
                    return oe(b, U, p => ({
                        onClick: B => {
                            var O;
                            (O = p == null ? void 0 : p.onClick) === null || O === void 0 || O.call(p, B), E(B)
                        },
                        className: T(p == null ? void 0 : p.className, `${c}-close-icon`)
                    }))
                }
            }),
            D = typeof C.onClick == "function" || a && a.type === "a",
            w = u || null,
            Q = w ? n.createElement(n.Fragment, null, w, a && n.createElement("span", null, a)) : a,
            z = n.createElement("span", Object.assign({}, V, {
                ref: t,
                className: A,
                style: W
            }), Q, X, j && n.createElement(de, {
                key: "preset",
                prefixCls: c
            }), N && n.createElement(ue, {
                key: "status",
                prefixCls: c
            }));
        return R(D ? n.createElement(re, {
            component: "Tag"
        }, z) : z)
    }),
    be = pe;
be.CheckableTag = ce;
export {
    be as T
};