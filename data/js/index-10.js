import {
    r as l,
    I as Ie,
    _ as Ce,
    al as Q,
    am as j,
    cI as Ne,
    aF as Ae,
    cJ as Le,
    aS as J,
    aQ as K,
    cK as _e,
    cL as We,
    cM as Xe,
    bZ as ke,
    ak as g,
    ba as Ve,
    bC as qe,
    ai as Se,
    aj as se,
    bO as Y,
    cN as ye,
    bE as ce,
    aL as xe,
    bF as me,
    aN as Fe,
    cO as Ge,
    bY as we,
    cP as Ye,
    bh as Be,
    bH as Oe,
    cQ as Ue,
    R as Pe,
    aR as Ze,
    cR as Qe,
    bQ as Je,
    bP as Ke,
    bS as et,
    bR as tt,
    aM as ue,
    bc as ot,
    aG as nt,
    cS as it,
    cT as rt,
    bt as lt,
    b_ as at,
    bT as st,
    B as pe
} from "./_index.js";
import {
    T as dt,
    b as ct,
    c as mt,
    g as ut,
    d as pt
} from "./index-5.js";
import {
    i as ge
} from "./move.js";
import {
    S as gt
} from "./index-2.js";
var bt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                }
            }]
        },
        name: "right",
        theme: "outlined"
    },
    $t = function(o, e) {
        return l.createElement(Ie, Ce({}, o, {
            ref: e,
            icon: bt
        }))
    },
    vt = l.forwardRef($t);
const ft = t => ({
    [t.componentCls]: {
        [`${t.antCls}-motion-collapse-legacy`]: {
            overflow: "hidden",
            "&-active": {
                transition: `height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`
            }
        },
        [`${t.antCls}-motion-collapse`]: {
            overflow: "hidden",
            transition: `height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`
        }
    }
});
var ht = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                }
            }]
        },
        name: "left",
        theme: "outlined"
    },
    It = function(o, e) {
        return l.createElement(Ie, Ce({}, o, {
            ref: e,
            icon: ht
        }))
    },
    Ct = l.forwardRef(It);
const St = t => typeof t != "object" && typeof t != "function" || t === null,
    Ee = l.createContext({}),
    U = l.createContext({
        prefixCls: "",
        firstLevel: !0,
        inlineCollapsed: !1
    });
var yt = function(t, o) {
    var e = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && o.indexOf(i) < 0 && (e[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (e[i[n]] = t[i[n]]);
    return e
};
const ze = t => {
        const {
            prefixCls: o,
            className: e,
            dashed: i
        } = t, n = yt(t, ["prefixCls", "className", "dashed"]), {
            getPrefixCls: a
        } = l.useContext(Q), r = a("menu", o), d = j({
            [`${r}-item-divider-dashed`]: !!i
        }, e);
        return l.createElement(Ne, Object.assign({
            className: d
        }, n))
    },
    Te = t => {
        var o;
        const {
            className: e,
            children: i,
            icon: n,
            title: a,
            danger: r,
            extra: d
        } = t, {
            prefixCls: s,
            firstLevel: b,
            direction: $,
            disableMenuItemTitleTooltip: f,
            inlineCollapsed: p
        } = l.useContext(U), u = H => {
            const O = i == null ? void 0 : i[0],
                C = l.createElement("span", {
                    className: j(`${s}-title-content`, {
                        [`${s}-title-content-with-extra`]: !!d || d === 0
                    })
                }, i);
            return (!n || l.isValidElement(i) && i.type === "span") && i && H && b && typeof O == "string" ? l.createElement("div", {
                className: `${s}-inline-collapsed-noicon`
            }, O.charAt(0)) : C
        }, {
            siderCollapsed: m
        } = l.useContext(Ee);
        let c = a;
        typeof a > "u" ? c = b ? i : "" : a === !1 && (c = "");
        const I = {
            title: c
        };
        !m && !p && (I.title = null, I.open = !1);
        const v = Ae(i).length;
        let x = l.createElement(Le, Object.assign({}, J(t, ["title", "icon", "danger"]), {
            className: j({
                [`${s}-item-danger`]: r,
                [`${s}-item-only-child`]: (n ? v + 1 : v) === 1
            }, e),
            title: typeof a == "string" ? a : void 0
        }), K(n, {
            className: j(l.isValidElement(n) ? (o = n.props) === null || o === void 0 ? void 0 : o.className : void 0, `${s}-item-icon`)
        }), u(p));
        return f || (x = l.createElement(dt, Object.assign({}, I, {
            placement: $ === "rtl" ? "left" : "right",
            classNames: {
                root: `${s}-inline-collapsed-tooltip`
            }
        }), x)), x
    };
var xt = function(t, o) {
    var e = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && o.indexOf(i) < 0 && (e[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (e[i[n]] = t[i[n]]);
    return e
};
const Z = l.createContext(null),
    wt = l.forwardRef((t, o) => {
        const {
            children: e
        } = t, i = xt(t, ["children"]), n = l.useContext(Z), a = l.useMemo(() => Object.assign(Object.assign({}, n), i), [n, i.prefixCls, i.mode, i.selectable, i.rootClassName]), r = _e(e), d = We(o, r ? Xe(e) : null);
        return l.createElement(Z.Provider, {
            value: a
        }, l.createElement(ke, {
            space: !0
        }, r ? l.cloneElement(e, {
            ref: d
        }) : e))
    }),
    Bt = t => {
        const {
            componentCls: o,
            motionDurationSlow: e,
            horizontalLineHeight: i,
            colorSplit: n,
            lineWidth: a,
            lineType: r,
            itemPaddingInline: d
        } = t;
        return {
            [`${o}-horizontal`]: {
                lineHeight: i,
                border: 0,
                borderBottom: `${g(a)} ${r} ${n}`,
                boxShadow: "none",
                "&::after": {
                    display: "block",
                    clear: "both",
                    height: 0,
                    content: '"\\20"'
                },
                [`${o}-item, ${o}-submenu`]: {
                    position: "relative",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    paddingInline: d
                },
                [`> ${o}-item:hover,
        > ${o}-item-active,
        > ${o}-submenu ${o}-submenu-title:hover`]: {
                    backgroundColor: "transparent"
                },
                [`${o}-item, ${o}-submenu-title`]: {
                    transition: [`border-color ${e}`, `background ${e}`].join(",")
                },
                [`${o}-submenu-arrow`]: {
                    display: "none"
                }
            }
        }
    },
    Ot = ({
        componentCls: t,
        menuArrowOffset: o,
        calc: e
    }) => ({
        [`${t}-rtl`]: {
            direction: "rtl"
        },
        [`${t}-submenu-rtl`]: {
            transformOrigin: "100% 0"
        },
        [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
            [`${t}-submenu-arrow`]: {
                "&::before": {
                    transform: `rotate(-45deg) translateY(${g(e(o).mul(-1).equal())})`
                },
                "&::after": {
                    transform: `rotate(45deg) translateY(${g(o)})`
                }
            }
        }
    }),
    be = t => Object.assign({}, Ve(t)),
    $e = (t, o) => {
        const {
            componentCls: e,
            itemColor: i,
            itemSelectedColor: n,
            subMenuItemSelectedColor: a,
            groupTitleColor: r,
            itemBg: d,
            subMenuItemBg: s,
            itemSelectedBg: b,
            activeBarHeight: $,
            activeBarWidth: f,
            activeBarBorderWidth: p,
            motionDurationSlow: u,
            motionEaseInOut: m,
            motionEaseOut: c,
            itemPaddingInline: I,
            motionDurationMid: v,
            itemHoverColor: x,
            lineType: H,
            colorSplit: O,
            itemDisabledColor: C,
            dangerItemColor: z,
            dangerItemHoverColor: M,
            dangerItemSelectedColor: T,
            dangerItemActiveBg: h,
            dangerItemSelectedBg: D,
            popupBg: R,
            itemHoverBg: w,
            itemActiveBg: P,
            menuSubMenuBg: S,
            horizontalItemSelectedColor: N,
            horizontalItemSelectedBg: _,
            horizontalItemBorderRadius: E,
            horizontalItemHoverBg: L
        } = t;
        return {
            [`${e}-${o}, ${e}-${o} > ${e}`]: {
                color: i,
                background: d,
                [`&${e}-root:focus-visible`]: Object.assign({}, be(t)),
                [`${e}-item`]: {
                    "&-group-title, &-extra": {
                        color: r
                    }
                },
                [`${e}-submenu-selected > ${e}-submenu-title`]: {
                    color: a
                },
                [`${e}-item, ${e}-submenu-title`]: {
                    color: i,
                    [`&:not(${e}-item-disabled):focus-visible`]: Object.assign({}, be(t))
                },
                [`${e}-item-disabled, ${e}-submenu-disabled`]: {
                    color: `${C} !important`
                },
                [`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]: {
                    [`&:hover, > ${e}-submenu-title:hover`]: {
                        color: x
                    }
                },
                [`&:not(${e}-horizontal)`]: {
                    [`${e}-item:not(${e}-item-selected)`]: {
                        "&:hover": {
                            backgroundColor: w
                        },
                        "&:active": {
                            backgroundColor: P
                        }
                    },
                    [`${e}-submenu-title`]: {
                        "&:hover": {
                            backgroundColor: w
                        },
                        "&:active": {
                            backgroundColor: P
                        }
                    }
                },
                [`${e}-item-danger`]: {
                    color: z,
                    [`&${e}-item:hover`]: {
                        [`&:not(${e}-item-selected):not(${e}-submenu-selected)`]: {
                            color: M
                        }
                    },
                    [`&${e}-item:active`]: {
                        background: h
                    }
                },
                [`${e}-item a`]: {
                    "&, &:hover": {
                        color: "inherit"
                    }
                },
                [`${e}-item-selected`]: {
                    color: n,
                    [`&${e}-item-danger`]: {
                        color: T
                    },
                    "a, a:hover": {
                        color: "inherit"
                    }
                },
                [`& ${e}-item-selected`]: {
                    backgroundColor: b,
                    [`&${e}-item-danger`]: {
                        backgroundColor: D
                    }
                },
                [`&${e}-submenu > ${e}`]: {
                    backgroundColor: S
                },
                [`&${e}-popup > ${e}`]: {
                    backgroundColor: R
                },
                [`&${e}-submenu-popup > ${e}`]: {
                    backgroundColor: R
                },
                [`&${e}-horizontal`]: Object.assign(Object.assign({}, o === "dark" ? {
                    borderBottom: 0
                } : {}), {
                    [`> ${e}-item, > ${e}-submenu`]: {
                        top: p,
                        marginTop: t.calc(p).mul(-1).equal(),
                        marginBottom: 0,
                        borderRadius: E,
                        "&::after": {
                            position: "absolute",
                            insetInline: I,
                            bottom: 0,
                            borderBottom: `${g($)} solid transparent`,
                            transition: `border-color ${u} ${m}`,
                            content: '""'
                        },
                        "&:hover, &-active, &-open": {
                            background: L,
                            "&::after": {
                                borderBottomWidth: $,
                                borderBottomColor: N
                            }
                        },
                        "&-selected": {
                            color: N,
                            backgroundColor: _,
                            "&:hover": {
                                backgroundColor: _
                            },
                            "&::after": {
                                borderBottomWidth: $,
                                borderBottomColor: N
                            }
                        }
                    }
                }),
                [`&${e}-root`]: {
                    [`&${e}-inline, &${e}-vertical`]: {
                        borderInlineEnd: `${g(p)} ${H} ${O}`
                    }
                },
                [`&${e}-inline`]: {
                    [`${e}-sub${e}-inline`]: {
                        background: s
                    },
                    [`${e}-item`]: {
                        position: "relative",
                        "&::after": {
                            position: "absolute",
                            insetBlock: 0,
                            insetInlineEnd: 0,
                            borderInlineEnd: `${g(f)} solid ${n}`,
                            transform: "scaleY(0.0001)",
                            opacity: 0,
                            transition: [`transform ${v} ${c}`, `opacity ${v} ${c}`].join(","),
                            content: '""'
                        },
                        [`&${e}-item-danger`]: {
                            "&::after": {
                                borderInlineEndColor: T
                            }
                        }
                    },
                    [`${e}-selected, ${e}-item-selected`]: {
                        "&::after": {
                            transform: "scaleY(1)",
                            opacity: 1,
                            transition: [`transform ${v} ${m}`, `opacity ${v} ${m}`].join(",")
                        }
                    }
                }
            }
        }
    },
    ve = t => {
        const {
            componentCls: o,
            itemHeight: e,
            itemMarginInline: i,
            padding: n,
            menuArrowSize: a,
            marginXS: r,
            itemMarginBlock: d,
            itemWidth: s,
            itemPaddingInline: b
        } = t, $ = t.calc(a).add(n).add(r).equal();
        return {
            [`${o}-item`]: {
                position: "relative",
                overflow: "hidden"
            },
            [`${o}-item, ${o}-submenu-title`]: {
                height: e,
                lineHeight: g(e),
                paddingInline: b,
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginInline: i,
                marginBlock: d,
                width: s
            },
            [`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]: {
                height: e,
                lineHeight: g(e)
            },
            [`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]: {
                paddingInlineEnd: $
            }
        }
    },
    Pt = t => {
        const {
            componentCls: o,
            iconCls: e,
            itemHeight: i,
            colorTextLightSolid: n,
            dropdownWidth: a,
            controlHeightLG: r,
            motionEaseOut: d,
            paddingXL: s,
            itemMarginInline: b,
            fontSizeLG: $,
            motionDurationFast: f,
            motionDurationSlow: p,
            paddingXS: u,
            boxShadowSecondary: m,
            collapsedWidth: c,
            collapsedIconSize: I
        } = t, v = {
            height: i,
            lineHeight: g(i),
            listStylePosition: "inside",
            listStyleType: "disc"
        };
        return [{
            [o]: {
                "&-inline, &-vertical": Object.assign({
                    [`&${o}-root`]: {
                        boxShadow: "none"
                    }
                }, ve(t))
            },
            [`${o}-submenu-popup`]: {
                [`${o}-vertical`]: Object.assign(Object.assign({}, ve(t)), {
                    boxShadow: m
                })
            }
        }, {
            [`${o}-submenu-popup ${o}-vertical${o}-sub`]: {
                minWidth: a,
                maxHeight: `calc(100vh - ${g(t.calc(r).mul(2.5).equal())})`,
                padding: "0",
                overflow: "hidden",
                borderInlineEnd: 0,
                "&:not([class*='-active'])": {
                    overflowX: "hidden",
                    overflowY: "auto"
                }
            }
        }, {
            [`${o}-inline`]: {
                width: "100%",
                [`&${o}-root`]: {
                    [`${o}-item, ${o}-submenu-title`]: {
                        display: "flex",
                        alignItems: "center",
                        transition: [`border-color ${p}`, `background ${p}`, `padding ${f} ${d}`].join(","),
                        [`> ${o}-title-content`]: {
                            flex: "auto",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        "> *": {
                            flex: "none"
                        }
                    }
                },
                [`${o}-sub${o}-inline`]: {
                    padding: 0,
                    border: 0,
                    borderRadius: 0,
                    boxShadow: "none",
                    [`& > ${o}-submenu > ${o}-submenu-title`]: v,
                    [`& ${o}-item-group-title`]: {
                        paddingInlineStart: s
                    }
                },
                [`${o}-item`]: v
            }
        }, {
            [`${o}-inline-collapsed`]: {
                width: c,
                [`&${o}-root`]: {
                    [`${o}-item, ${o}-submenu ${o}-submenu-title`]: {
                        [`> ${o}-inline-collapsed-noicon`]: {
                            fontSize: $,
                            textAlign: "center"
                        }
                    }
                },
                [`> ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-submenu > ${o}-submenu-title,
          > ${o}-submenu > ${o}-submenu-title`]: {
                    insetInlineStart: 0,
                    paddingInline: `calc(50% - ${g(t.calc(I).div(2).equal())} - ${g(b)})`,
                    textOverflow: "clip",
                    [`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]: {
                        opacity: 0
                    },
                    [`${o}-item-icon, ${e}`]: {
                        margin: 0,
                        fontSize: I,
                        lineHeight: g(i),
                        "+ span": {
                            display: "inline-block",
                            opacity: 0
                        }
                    }
                },
                [`${o}-item-icon, ${e}`]: {
                    display: "inline-block"
                },
                "&-tooltip": {
                    pointerEvents: "none",
                    [`${o}-item-icon, ${e}`]: {
                        display: "none"
                    },
                    "a, a:hover": {
                        color: n
                    }
                },
                [`${o}-item-group-title`]: Object.assign(Object.assign({}, qe), {
                    paddingInline: u
                })
            }
        }]
    },
    fe = t => {
        const {
            componentCls: o,
            motionDurationSlow: e,
            motionDurationMid: i,
            motionEaseInOut: n,
            motionEaseOut: a,
            iconCls: r,
            iconSize: d,
            iconMarginInlineEnd: s
        } = t;
        return {
            [`${o}-item, ${o}-submenu-title`]: {
                position: "relative",
                display: "block",
                margin: 0,
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: [`border-color ${e}`, `background ${e}`, `padding calc(${e} + 0.1s) ${n}`].join(","),
                [`${o}-item-icon, ${r}`]: {
                    minWidth: d,
                    fontSize: d,
                    transition: [`font-size ${i} ${a}`, `margin ${e} ${n}`, `color ${e}`].join(","),
                    "+ span": {
                        marginInlineStart: s,
                        opacity: 1,
                        transition: [`opacity ${e} ${n}`, `margin ${e}`, `color ${e}`].join(",")
                    }
                },
                [`${o}-item-icon`]: Object.assign({}, Fe()),
                [`&${o}-item-only-child`]: {
                    [`> ${r}, > ${o}-item-icon`]: {
                        marginInlineEnd: 0
                    }
                }
            },
            [`${o}-item-disabled, ${o}-submenu-disabled`]: {
                background: "none !important",
                cursor: "not-allowed",
                "&::after": {
                    borderColor: "transparent !important"
                },
                a: {
                    color: "inherit !important",
                    cursor: "not-allowed",
                    pointerEvents: "none"
                },
                [`> ${o}-submenu-title`]: {
                    color: "inherit !important",
                    cursor: "not-allowed"
                }
            }
        }
    },
    he = t => {
        const {
            componentCls: o,
            motionDurationSlow: e,
            motionEaseInOut: i,
            borderRadius: n,
            menuArrowSize: a,
            menuArrowOffset: r
        } = t;
        return {
            [`${o}-submenu`]: {
                "&-expand-icon, &-arrow": {
                    position: "absolute",
                    top: "50%",
                    insetInlineEnd: t.margin,
                    width: a,
                    color: "currentcolor",
                    transform: "translateY(-50%)",
                    transition: `transform ${e} ${i}, opacity ${e}`
                },
                "&-arrow": {
                    "&::before, &::after": {
                        position: "absolute",
                        width: t.calc(a).mul(.6).equal(),
                        height: t.calc(a).mul(.15).equal(),
                        backgroundColor: "currentcolor",
                        borderRadius: n,
                        transition: [`background ${e} ${i}`, `transform ${e} ${i}`, `top ${e} ${i}`, `color ${e} ${i}`].join(","),
                        content: '""'
                    },
                    "&::before": {
                        transform: `rotate(45deg) translateY(${g(t.calc(r).mul(-1).equal())})`
                    },
                    "&::after": {
                        transform: `rotate(-45deg) translateY(${g(r)})`
                    }
                }
            }
        }
    },
    Et = t => {
        const {
            antCls: o,
            componentCls: e,
            fontSize: i,
            motionDurationSlow: n,
            motionDurationMid: a,
            motionEaseInOut: r,
            paddingXS: d,
            padding: s,
            colorSplit: b,
            lineWidth: $,
            zIndexPopup: f,
            borderRadiusLG: p,
            subMenuItemBorderRadius: u,
            menuArrowSize: m,
            menuArrowOffset: c,
            lineType: I,
            groupTitleLineHeight: v,
            groupTitleFontSize: x
        } = t;
        return [{
            "": {
                [e]: Object.assign(Object.assign({}, ce()), {
                    "&-hidden": {
                        display: "none"
                    }
                })
            },
            [`${e}-submenu-hidden`]: {
                display: "none"
            }
        }, {
            [e]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xe(t)), ce()), {
                marginBottom: 0,
                paddingInlineStart: 0,
                fontSize: i,
                lineHeight: 0,
                listStyle: "none",
                outline: "none",
                transition: `width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,
                "ul, ol": {
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                "&-overflow": {
                    display: "flex",
                    [`${e}-item`]: {
                        flex: "none"
                    }
                },
                [`${e}-item, ${e}-submenu, ${e}-submenu-title`]: {
                    borderRadius: t.itemBorderRadius
                },
                [`${e}-item-group-title`]: {
                    padding: `${g(d)} ${g(s)}`,
                    fontSize: x,
                    lineHeight: v,
                    transition: `all ${n}`
                },
                [`&-horizontal ${e}-submenu`]: {
                    transition: [`border-color ${n} ${r}`, `background ${n} ${r}`].join(",")
                },
                [`${e}-submenu, ${e}-submenu-inline`]: {
                    transition: [`border-color ${n} ${r}`, `background ${n} ${r}`, `padding ${a} ${r}`].join(",")
                },
                [`${e}-submenu ${e}-sub`]: {
                    cursor: "initial",
                    transition: [`background ${n} ${r}`, `padding ${n} ${r}`].join(",")
                },
                [`${e}-title-content`]: {
                    transition: `color ${n}`,
                    "&-with-extra": {
                        display: "inline-flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    [`> ${o}-typography-ellipsis-single-line`]: {
                        display: "inline",
                        verticalAlign: "unset"
                    },
                    [`${e}-item-extra`]: {
                        marginInlineStart: "auto",
                        paddingInlineStart: t.padding
                    }
                },
                [`${e}-item a`]: {
                    "&::before": {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "transparent",
                        content: '""'
                    }
                },
                [`${e}-item-divider`]: {
                    overflow: "hidden",
                    lineHeight: 0,
                    borderColor: b,
                    borderStyle: I,
                    borderWidth: 0,
                    borderTopWidth: $,
                    marginBlock: $,
                    padding: 0,
                    "&-dashed": {
                        borderStyle: "dashed"
                    }
                }
            }), fe(t)), {
                [`${e}-item-group`]: {
                    [`${e}-item-group-list`]: {
                        margin: 0,
                        padding: 0,
                        [`${e}-item, ${e}-submenu-title`]: {
                            paddingInline: `${g(t.calc(i).mul(2).equal())} ${g(s)}`
                        }
                    }
                },
                "&-submenu": {
                    "&-popup": {
                        position: "absolute",
                        zIndex: f,
                        borderRadius: p,
                        boxShadow: "none",
                        transformOrigin: "0 0",
                        [`&${e}-submenu`]: {
                            background: "transparent"
                        },
                        "&::before": {
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            content: '""'
                        },
                        [`> ${e}`]: Object.assign(Object.assign(Object.assign({
                            borderRadius: p
                        }, fe(t)), he(t)), {
                            [`${e}-item, ${e}-submenu > ${e}-submenu-title`]: {
                                borderRadius: u
                            },
                            [`${e}-submenu-title::after`]: {
                                transition: `transform ${n} ${r}`
                            }
                        })
                    },
                    "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ": {
                        transformOrigin: "100% 0"
                    },
                    "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ": {
                        transformOrigin: "100% 100%"
                    },
                    "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ": {
                        transformOrigin: "0 100%"
                    },
                    "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ": {
                        transformOrigin: "0 0"
                    },
                    "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ": {
                        paddingInlineEnd: t.paddingXS
                    },
                    "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": {
                        paddingInlineStart: t.paddingXS
                    },
                    "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": {
                        paddingBottom: t.paddingXS
                    },
                    "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": {
                        paddingTop: t.paddingXS
                    }
                }
            }), he(t)), {
                [`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]: {
                    "&::before": {
                        transform: `rotate(-45deg) translateX(${g(c)})`
                    },
                    "&::after": {
                        transform: `rotate(45deg) translateX(${g(t.calc(c).mul(-1).equal())})`
                    }
                },
                [`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]: {
                    transform: `translateY(${g(t.calc(m).mul(.2).mul(-1).equal())})`,
                    "&::after": {
                        transform: `rotate(-45deg) translateX(${g(t.calc(c).mul(-1).equal())})`
                    },
                    "&::before": {
                        transform: `rotate(45deg) translateX(${g(c)})`
                    }
                }
            })
        }, {
            [`${o}-layout-header`]: {
                [e]: {
                    lineHeight: "inherit"
                }
            }
        }]
    },
    zt = t => {
        var o, e, i;
        const {
            colorPrimary: n,
            colorError: a,
            colorTextDisabled: r,
            colorErrorBg: d,
            colorText: s,
            colorTextDescription: b,
            colorBgContainer: $,
            colorFillAlter: f,
            colorFillContent: p,
            lineWidth: u,
            lineWidthBold: m,
            controlItemBgActive: c,
            colorBgTextHover: I,
            controlHeightLG: v,
            lineHeight: x,
            colorBgElevated: H,
            marginXXS: O,
            padding: C,
            fontSize: z,
            controlHeightSM: M,
            fontSizeLG: T,
            colorTextLightSolid: h,
            colorErrorHover: D
        } = t, R = (o = t.activeBarWidth) !== null && o !== void 0 ? o : 0, w = (e = t.activeBarBorderWidth) !== null && e !== void 0 ? e : u, P = (i = t.itemMarginInline) !== null && i !== void 0 ? i : t.marginXXS, S = new me(h).setA(.65).toRgbString();
        return {
            dropdownWidth: 160,
            zIndexPopup: t.zIndexPopupBase + 50,
            radiusItem: t.borderRadiusLG,
            itemBorderRadius: t.borderRadiusLG,
            radiusSubMenuItem: t.borderRadiusSM,
            subMenuItemBorderRadius: t.borderRadiusSM,
            colorItemText: s,
            itemColor: s,
            colorItemTextHover: s,
            itemHoverColor: s,
            colorItemTextHoverHorizontal: n,
            horizontalItemHoverColor: n,
            colorGroupTitle: b,
            groupTitleColor: b,
            colorItemTextSelected: n,
            itemSelectedColor: n,
            subMenuItemSelectedColor: n,
            colorItemTextSelectedHorizontal: n,
            horizontalItemSelectedColor: n,
            colorItemBg: $,
            itemBg: $,
            colorItemBgHover: I,
            itemHoverBg: I,
            colorItemBgActive: p,
            itemActiveBg: c,
            colorSubItemBg: f,
            subMenuItemBg: f,
            colorItemBgSelected: c,
            itemSelectedBg: c,
            colorItemBgSelectedHorizontal: "transparent",
            horizontalItemSelectedBg: "transparent",
            colorActiveBarWidth: 0,
            activeBarWidth: R,
            colorActiveBarHeight: m,
            activeBarHeight: m,
            colorActiveBarBorderSize: u,
            activeBarBorderWidth: w,
            colorItemTextDisabled: r,
            itemDisabledColor: r,
            colorDangerItemText: a,
            dangerItemColor: a,
            colorDangerItemTextHover: a,
            dangerItemHoverColor: a,
            colorDangerItemTextSelected: a,
            dangerItemSelectedColor: a,
            colorDangerItemBgActive: d,
            dangerItemActiveBg: d,
            colorDangerItemBgSelected: d,
            dangerItemSelectedBg: d,
            itemMarginInline: P,
            horizontalItemBorderRadius: 0,
            horizontalItemHoverBg: "transparent",
            itemHeight: v,
            groupTitleLineHeight: x,
            collapsedWidth: v * 2,
            popupBg: H,
            itemMarginBlock: O,
            itemPaddingInline: C,
            horizontalLineHeight: `${v*1.15}px`,
            iconSize: z,
            iconMarginInlineEnd: M - z,
            collapsedIconSize: T,
            groupTitleFontSize: z,
            darkItemDisabledColor: new me(h).setA(.25).toRgbString(),
            darkItemColor: S,
            darkDangerItemColor: a,
            darkItemBg: "#001529",
            darkPopupBg: "#001529",
            darkSubMenuItemBg: "#000c17",
            darkItemSelectedColor: h,
            darkItemSelectedBg: n,
            darkDangerItemSelectedBg: a,
            darkItemHoverBg: "transparent",
            darkGroupTitleColor: S,
            darkItemHoverColor: h,
            darkDangerItemHoverColor: D,
            darkDangerItemSelectedColor: h,
            darkDangerItemActiveBg: a,
            itemWidth: R ? `calc(100% + ${w}px)` : `calc(100% - ${P*2}px)`
        }
    },
    Tt = (t, o = t, e = !0) => Se("Menu", n => {
        const {
            colorBgElevated: a,
            controlHeightLG: r,
            fontSize: d,
            darkItemColor: s,
            darkDangerItemColor: b,
            darkItemBg: $,
            darkSubMenuItemBg: f,
            darkItemSelectedColor: p,
            darkItemSelectedBg: u,
            darkDangerItemSelectedBg: m,
            darkItemHoverBg: c,
            darkGroupTitleColor: I,
            darkItemHoverColor: v,
            darkItemDisabledColor: x,
            darkDangerItemHoverColor: H,
            darkDangerItemSelectedColor: O,
            darkDangerItemActiveBg: C,
            popupBg: z,
            darkPopupBg: M
        } = n, T = n.calc(d).div(7).mul(5).equal(), h = se(n, {
            menuArrowSize: T,
            menuHorizontalHeight: n.calc(r).mul(1.15).equal(),
            menuArrowOffset: n.calc(T).mul(.25).equal(),
            menuSubMenuBg: a,
            calc: n.calc,
            popupBg: z
        }), D = se(h, {
            itemColor: s,
            itemHoverColor: v,
            groupTitleColor: I,
            itemSelectedColor: p,
            subMenuItemSelectedColor: p,
            itemBg: $,
            popupBg: M,
            subMenuItemBg: f,
            itemActiveBg: "transparent",
            itemSelectedBg: u,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: c,
            itemDisabledColor: x,
            dangerItemColor: b,
            dangerItemHoverColor: H,
            dangerItemSelectedColor: O,
            dangerItemActiveBg: C,
            dangerItemSelectedBg: m,
            menuSubMenuBg: f,
            horizontalItemSelectedColor: p,
            horizontalItemSelectedBg: u
        });
        return [Et(h), Bt(h), Pt(h), $e(h, "light"), $e(D, "dark"), Ot(h), ft(h), Y(h, "slide-up"), Y(h, "slide-down"), ye(h, "zoom-big")]
    }, zt, {
        deprecatedTokens: [
            ["colorGroupTitle", "groupTitleColor"],
            ["radiusItem", "itemBorderRadius"],
            ["radiusSubMenuItem", "subMenuItemBorderRadius"],
            ["colorItemText", "itemColor"],
            ["colorItemTextHover", "itemHoverColor"],
            ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
            ["colorItemTextSelected", "itemSelectedColor"],
            ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"],
            ["colorItemTextDisabled", "itemDisabledColor"],
            ["colorDangerItemText", "dangerItemColor"],
            ["colorDangerItemTextHover", "dangerItemHoverColor"],
            ["colorDangerItemTextSelected", "dangerItemSelectedColor"],
            ["colorDangerItemBgActive", "dangerItemActiveBg"],
            ["colorDangerItemBgSelected", "dangerItemSelectedBg"],
            ["colorItemBg", "itemBg"],
            ["colorItemBgHover", "itemHoverBg"],
            ["colorSubItemBg", "subMenuItemBg"],
            ["colorItemBgActive", "itemActiveBg"],
            ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
            ["colorActiveBarWidth", "activeBarWidth"],
            ["colorActiveBarHeight", "activeBarHeight"],
            ["colorActiveBarBorderSize", "activeBarBorderWidth"],
            ["colorItemBgSelected", "itemSelectedBg"]
        ],
        injectStyle: e,
        unitless: {
            groupTitleLineHeight: !0
        }
    })(t, o),
    He = t => {
        var o;
        const {
            popupClassName: e,
            icon: i,
            title: n,
            theme: a
        } = t, r = l.useContext(U), {
            prefixCls: d,
            inlineCollapsed: s,
            theme: b
        } = r, $ = Ge();
        let f;
        if (!i) f = s && !$.length && n && typeof n == "string" ? l.createElement("div", {
            className: `${d}-inline-collapsed-noicon`
        }, n.charAt(0)) : l.createElement("span", {
            className: `${d}-title-content`
        }, n);
        else {
            const m = l.isValidElement(n) && n.type === "span";
            f = l.createElement(l.Fragment, null, K(i, {
                className: j(l.isValidElement(i) ? (o = i.props) === null || o === void 0 ? void 0 : o.className : void 0, `${d}-item-icon`)
            }), m ? n : l.createElement("span", {
                className: `${d}-title-content`
            }, n))
        }
        const p = l.useMemo(() => Object.assign(Object.assign({}, r), {
                firstLevel: !1
            }), [r]),
            [u] = we("Menu");
        return l.createElement(U.Provider, {
            value: p
        }, l.createElement(Ye, Object.assign({}, J(t, ["icon"]), {
            title: f,
            popupClassName: j(d, e, `${d}-${a||b}`),
            popupStyle: Object.assign({
                zIndex: u
            }, t.popupStyle)
        })))
    };
var Ht = function(t, o) {
    var e = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && o.indexOf(i) < 0 && (e[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (e[i[n]] = t[i[n]]);
    return e
};

function ae(t) {
    return t === null || t === !1
}
const jt = {
        item: Te,
        submenu: He,
        divider: ze
    },
    Mt = l.forwardRef((t, o) => {
        var e;
        const i = l.useContext(Z),
            n = i || {},
            {
                getPrefixCls: a,
                getPopupContainer: r,
                direction: d,
                menu: s
            } = l.useContext(Q),
            b = a(),
            {
                prefixCls: $,
                className: f,
                style: p,
                theme: u = "light",
                expandIcon: m,
                _internalDisableMenuItemTitleTooltip: c,
                inlineCollapsed: I,
                siderCollapsed: v,
                rootClassName: x,
                mode: H,
                selectable: O,
                onClick: C,
                overflowedIndicatorPopupClassName: z
            } = t,
            M = Ht(t, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]),
            T = J(M, ["collapsedWidth"]);
        (e = n.validator) === null || e === void 0 || e.call(n, {
            mode: H
        });
        const h = Be((...A) => {
                var y;
                C == null || C.apply(void 0, A), (y = n.onClick) === null || y === void 0 || y.call(n)
            }),
            D = n.mode || H,
            R = O ?? n.selectable,
            w = I ?? v,
            P = {
                horizontal: {
                    motionName: `${b}-slide-up`
                },
                inline: Ze(b),
                other: {
                    motionName: `${b}-zoom-big`
                }
            },
            S = a("menu", $ || n.prefixCls),
            N = Oe(S),
            [_, E, L] = Tt(S, N, !i),
            q = j(`${S}-${u}`, s == null ? void 0 : s.className, f),
            X = l.useMemo(() => {
                var A, y;
                if (typeof m == "function" || ae(m)) return m || null;
                if (typeof n.expandIcon == "function" || ae(n.expandIcon)) return n.expandIcon || null;
                if (typeof(s == null ? void 0 : s.expandIcon) == "function" || ae(s == null ? void 0 : s.expandIcon)) return (s == null ? void 0 : s.expandIcon) || null;
                const W = (A = m ?? (n == null ? void 0 : n.expandIcon)) !== null && A !== void 0 ? A : s == null ? void 0 : s.expandIcon;
                return K(W, {
                    className: j(`${S}-submenu-expand-icon`, l.isValidElement(W) ? (y = W.props) === null || y === void 0 ? void 0 : y.className : void 0)
                })
            }, [m, n == null ? void 0 : n.expandIcon, s == null ? void 0 : s.expandIcon, S]),
            k = l.useMemo(() => ({
                prefixCls: S,
                inlineCollapsed: w || !1,
                direction: d,
                firstLevel: !0,
                theme: u,
                mode: D,
                disableMenuItemTitleTooltip: c
            }), [S, w, d, c, u]);
        return _(l.createElement(Z.Provider, {
            value: null
        }, l.createElement(U.Provider, {
            value: k
        }, l.createElement(Ue, Object.assign({
            getPopupContainer: r,
            overflowedIndicator: l.createElement(Pe, null),
            overflowedIndicatorPopupClassName: j(S, `${S}-${u}`, z),
            mode: D,
            selectable: R,
            onClick: h
        }, T, {
            inlineCollapsed: w,
            style: Object.assign(Object.assign({}, s == null ? void 0 : s.style), p),
            className: q,
            prefixCls: S,
            direction: d,
            defaultMotions: P,
            expandIcon: X,
            ref: o,
            rootClassName: j(x, E, n.rootClassName, L, N),
            _internalComponents: jt
        })))))
    }),
    F = l.forwardRef((t, o) => {
        const e = l.useRef(null),
            i = l.useContext(Ee);
        return l.useImperativeHandle(o, () => ({
            menu: e.current,
            focus: n => {
                var a;
                (a = e.current) === null || a === void 0 || a.focus(n)
            }
        })), l.createElement(Mt, Object.assign({
            ref: e
        }, t, i))
    });
F.Item = Te;
F.SubMenu = He;
F.Divider = ze;
F.ItemGroup = Qe;
const Rt = t => {
        const {
            componentCls: o,
            menuCls: e,
            colorError: i,
            colorTextLightSolid: n
        } = t, a = `${e}-item`;
        return {
            [`${o}, ${o}-menu-submenu`]: {
                [`${e} ${a}`]: {
                    [`&${a}-danger:not(${a}-disabled)`]: {
                        color: i,
                        "&:hover": {
                            color: n,
                            backgroundColor: i
                        }
                    }
                }
            }
        }
    },
    Dt = t => {
        const {
            componentCls: o,
            menuCls: e,
            zIndexPopup: i,
            dropdownArrowDistance: n,
            sizePopupArrow: a,
            antCls: r,
            iconCls: d,
            motionDurationMid: s,
            paddingBlock: b,
            fontSize: $,
            dropdownEdgeChildPadding: f,
            colorTextDisabled: p,
            fontSizeIcon: u,
            controlPaddingHorizontal: m,
            colorBgElevated: c
        } = t;
        return [{
                [o]: {
                    position: "absolute",
                    top: -9999,
                    left: {
                        _skip_check_: !0,
                        value: -9999
                    },
                    zIndex: i,
                    display: "block",
                    "&::before": {
                        position: "absolute",
                        insetBlock: t.calc(a).div(2).sub(n).equal(),
                        zIndex: -9999,
                        opacity: 1e-4,
                        content: '""'
                    },
                    "&-menu-vertical": {
                        maxHeight: "100vh",
                        overflowY: "auto"
                    },
                    [`&-trigger${r}-btn`]: {
                        [`& > ${d}-down, & > ${r}-btn-icon > ${d}-down`]: {
                            fontSize: u
                        }
                    },
                    [`${o}-wrap`]: {
                        position: "relative",
                        [`${r}-btn > ${d}-down`]: {
                            fontSize: u
                        },
                        [`${d}-down::before`]: {
                            transition: `transform ${s}`
                        }
                    },
                    [`${o}-wrap-open`]: {
                        [`${d}-down::before`]: {
                            transform: "rotate(180deg)"
                        }
                    },
                    "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
                        display: "none"
                    },
                    [`&${r}-slide-down-enter${r}-slide-down-enter-active${o}-placement-bottomLeft,
          &${r}-slide-down-appear${r}-slide-down-appear-active${o}-placement-bottomLeft,
          &${r}-slide-down-enter${r}-slide-down-enter-active${o}-placement-bottom,
          &${r}-slide-down-appear${r}-slide-down-appear-active${o}-placement-bottom,
          &${r}-slide-down-enter${r}-slide-down-enter-active${o}-placement-bottomRight,
          &${r}-slide-down-appear${r}-slide-down-appear-active${o}-placement-bottomRight`]: {
                        animationName: tt
                    },
                    [`&${r}-slide-up-enter${r}-slide-up-enter-active${o}-placement-topLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${o}-placement-topLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${o}-placement-top,
          &${r}-slide-up-appear${r}-slide-up-appear-active${o}-placement-top,
          &${r}-slide-up-enter${r}-slide-up-enter-active${o}-placement-topRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${o}-placement-topRight`]: {
                        animationName: et
                    },
                    [`&${r}-slide-down-leave${r}-slide-down-leave-active${o}-placement-bottomLeft,
          &${r}-slide-down-leave${r}-slide-down-leave-active${o}-placement-bottom,
          &${r}-slide-down-leave${r}-slide-down-leave-active${o}-placement-bottomRight`]: {
                        animationName: Ke
                    },
                    [`&${r}-slide-up-leave${r}-slide-up-leave-active${o}-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${o}-placement-top,
          &${r}-slide-up-leave${r}-slide-up-leave-active${o}-placement-topRight`]: {
                        animationName: Je
                    }
                }
            }, ct(t, c, {
                arrowPlacement: {
                    top: !0,
                    bottom: !0
                }
            }), {
                [`${o} ${e}`]: {
                    position: "relative",
                    margin: 0
                },
                [`${e}-submenu-popup`]: {
                    position: "absolute",
                    zIndex: i,
                    background: "transparent",
                    boxShadow: "none",
                    transformOrigin: "0 0",
                    "ul, li": {
                        listStyle: "none",
                        margin: 0
                    }
                },
                [`${o}, ${o}-menu-submenu`]: Object.assign(Object.assign({}, xe(t)), {
                    [e]: Object.assign(Object.assign({
                        padding: f,
                        listStyleType: "none",
                        backgroundColor: c,
                        backgroundClip: "padding-box",
                        borderRadius: t.borderRadiusLG,
                        outline: "none",
                        boxShadow: t.boxShadowSecondary
                    }, ue(t)), {
                        "&:empty": {
                            padding: 0,
                            boxShadow: "none"
                        },
                        [`${e}-item-group-title`]: {
                            padding: `${g(b)} ${g(m)}`,
                            color: t.colorTextDescription,
                            transition: `all ${s}`
                        },
                        [`${e}-item`]: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center"
                        },
                        [`${e}-item-icon`]: {
                            minWidth: $,
                            marginInlineEnd: t.marginXS,
                            fontSize: t.fontSizeSM
                        },
                        [`${e}-title-content`]: {
                            flex: "auto",
                            "&-with-extra": {
                                display: "inline-flex",
                                alignItems: "center",
                                width: "100%"
                            },
                            "> a": {
                                color: "inherit",
                                transition: `all ${s}`,
                                "&:hover": {
                                    color: "inherit"
                                },
                                "&::after": {
                                    position: "absolute",
                                    inset: 0,
                                    content: '""'
                                }
                            },
                            [`${e}-item-extra`]: {
                                paddingInlineStart: t.padding,
                                marginInlineStart: "auto",
                                fontSize: t.fontSizeSM,
                                color: t.colorTextDescription
                            }
                        },
                        [`${e}-item, ${e}-submenu-title`]: Object.assign(Object.assign({
                            display: "flex",
                            margin: 0,
                            padding: `${g(b)} ${g(m)}`,
                            color: t.colorText,
                            fontWeight: "normal",
                            fontSize: $,
                            lineHeight: t.lineHeight,
                            cursor: "pointer",
                            transition: `all ${s}`,
                            borderRadius: t.borderRadiusSM,
                            "&:hover, &-active": {
                                backgroundColor: t.controlItemBgHover
                            }
                        }, ue(t)), {
                            "&-selected": {
                                color: t.colorPrimary,
                                backgroundColor: t.controlItemBgActive,
                                "&:hover, &-active": {
                                    backgroundColor: t.controlItemBgActiveHover
                                }
                            },
                            "&-disabled": {
                                color: p,
                                cursor: "not-allowed",
                                "&:hover": {
                                    color: p,
                                    backgroundColor: c,
                                    cursor: "not-allowed"
                                },
                                a: {
                                    pointerEvents: "none"
                                }
                            },
                            "&-divider": {
                                height: 1,
                                margin: `${g(t.marginXXS)} 0`,
                                overflow: "hidden",
                                lineHeight: 0,
                                backgroundColor: t.colorSplit
                            },
                            [`${o}-menu-submenu-expand-icon`]: {
                                position: "absolute",
                                insetInlineEnd: t.paddingXS,
                                [`${o}-menu-submenu-arrow-icon`]: {
                                    marginInlineEnd: "0 !important",
                                    color: t.colorIcon,
                                    fontSize: u,
                                    fontStyle: "normal"
                                }
                            }
                        }),
                        [`${e}-item-group-list`]: {
                            margin: `0 ${g(t.marginXS)}`,
                            padding: 0,
                            listStyle: "none"
                        },
                        [`${e}-submenu-title`]: {
                            paddingInlineEnd: t.calc(m).add(t.fontSizeSM).equal()
                        },
                        [`${e}-submenu-vertical`]: {
                            position: "relative"
                        },
                        [`${e}-submenu${e}-submenu-disabled ${o}-menu-submenu-title`]: {
                            [`&, ${o}-menu-submenu-arrow-icon`]: {
                                color: p,
                                backgroundColor: c,
                                cursor: "not-allowed"
                            }
                        },
                        [`${e}-submenu-selected ${o}-menu-submenu-title`]: {
                            color: t.colorPrimary
                        }
                    })
                })
            },
            [Y(t, "slide-up"), Y(t, "slide-down"), ge(t, "move-up"), ge(t, "move-down"), ye(t, "zoom-big")]
        ]
    },
    Nt = t => Object.assign(Object.assign({
        zIndexPopup: t.zIndexPopupBase + 50,
        paddingBlock: (t.controlHeight - t.fontSize * t.lineHeight) / 2
    }, mt({
        contentRadius: t.borderRadiusLG,
        limitVerticalRadius: !0
    })), ut(t)),
    At = Se("Dropdown", t => {
        const {
            marginXXS: o,
            sizePopupArrow: e,
            paddingXXS: i,
            componentCls: n
        } = t, a = se(t, {
            menuCls: `${n}-menu`,
            dropdownArrowDistance: t.calc(e).div(2).add(o).equal(),
            dropdownEdgeChildPadding: i
        });
        return [Dt(a), Rt(a)]
    }, Nt, {
        resetStyle: !1
    }),
    ee = t => {
        var o;
        const {
            menu: e,
            arrow: i,
            prefixCls: n,
            children: a,
            trigger: r,
            disabled: d,
            dropdownRender: s,
            popupRender: b,
            getPopupContainer: $,
            overlayClassName: f,
            rootClassName: p,
            overlayStyle: u,
            open: m,
            onOpenChange: c,
            visible: I,
            onVisibleChange: v,
            mouseEnterDelay: x = .15,
            mouseLeaveDelay: H = .1,
            autoAdjustOverflow: O = !0,
            placement: C = "",
            overlay: z,
            transitionName: M,
            destroyOnHidden: T,
            destroyPopupOnHide: h
        } = t, {
            getPopupContainer: D,
            getPrefixCls: R,
            direction: w,
            dropdown: P
        } = l.useContext(Q), S = b || s;
        lt();
        const N = l.useMemo(() => {
                const B = R();
                return M !== void 0 ? M : C.includes("top") ? `${B}-slide-down` : `${B}-slide-up`
            }, [R, C, M]),
            _ = l.useMemo(() => C ? C.includes("Center") ? C.slice(0, C.indexOf("Center")) : C : w === "rtl" ? "bottomRight" : "bottomLeft", [C, w]),
            E = R("dropdown", n),
            L = Oe(E),
            [q, X, k] = At(E, L),
            [, A] = ot(),
            y = l.Children.only(St(a) ? l.createElement("span", null, a) : a),
            W = K(y, {
                className: j(`${E}-trigger`, {
                    [`${E}-rtl`]: w === "rtl"
                }, y.props.className),
                disabled: (o = y.props.disabled) !== null && o !== void 0 ? o : d
            }),
            V = d ? [] : r,
            te = !!(V != null && V.includes("contextMenu")),
            [oe, G] = nt(!1, {
                value: m ?? I
            }),
            ne = Be(B => {
                c == null || c(B, {
                    source: "trigger"
                }), v == null || v(B), G(B)
            }),
            ie = j(f, p, X, k, L, P == null ? void 0 : P.className, {
                [`${E}-rtl`]: w === "rtl"
            }),
            re = pt({
                arrowPointAtCenter: typeof i == "object" && i.pointAtCenter,
                autoAdjustOverflow: O,
                offset: A.marginXXS,
                arrowWidth: i ? A.sizePopupArrow : 0,
                borderRadius: A.borderRadius
            }),
            Me = l.useCallback(() => {
                e != null && e.selectable && (e != null && e.multiple) || (c == null || c(!1, {
                    source: "menu"
                }), G(!1))
            }, [e == null ? void 0 : e.selectable, e == null ? void 0 : e.multiple]),
            Re = () => {
                let B;
                return e != null && e.items ? B = l.createElement(F, Object.assign({}, e)) : typeof z == "function" ? B = z() : B = z, S && (B = S(B)), B = l.Children.only(typeof B == "string" ? l.createElement("span", null, B) : B), l.createElement(wt, {
                    prefixCls: `${E}-menu`,
                    rootClassName: j(k, L),
                    expandIcon: l.createElement("span", {
                        className: `${E}-menu-submenu-arrow`
                    }, w === "rtl" ? l.createElement(Ct, {
                        className: `${E}-menu-submenu-arrow-icon`
                    }) : l.createElement(vt, {
                        className: `${E}-menu-submenu-arrow-icon`
                    })),
                    mode: "vertical",
                    selectable: !1,
                    onClick: Me,
                    validator: ({
                        mode: kt
                    }) => {}
                }, B)
            },
            [de, De] = we("Dropdown", u == null ? void 0 : u.zIndex);
        let le = l.createElement(it, Object.assign({
            alignPoint: te
        }, J(t, ["rootClassName"]), {
            mouseEnterDelay: x,
            mouseLeaveDelay: H,
            visible: oe,
            builtinPlacements: re,
            arrow: !!i,
            overlayClassName: ie,
            prefixCls: E,
            getPopupContainer: $ || D,
            transitionName: N,
            trigger: V,
            overlay: Re,
            placement: _,
            onVisibleChange: ne,
            overlayStyle: Object.assign(Object.assign(Object.assign({}, P == null ? void 0 : P.style), u), {
                zIndex: de
            }),
            autoDestroy: T ?? h
        }), W);
        return de && (le = l.createElement(rt.Provider, {
            value: De
        }, le)), q(le)
    },
    Lt = at(ee, "align", void 0, "dropdown", t => t),
    _t = t => l.createElement(Lt, Object.assign({}, t), l.createElement("span", null));
ee._InternalPanelDoNotUseOrYouWillBeFired = _t;
var Wt = function(t, o) {
    var e = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && o.indexOf(i) < 0 && (e[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (e[i[n]] = t[i[n]]);
    return e
};
const je = t => {
    const {
        getPopupContainer: o,
        getPrefixCls: e,
        direction: i
    } = l.useContext(Q), {
        prefixCls: n,
        type: a = "default",
        danger: r,
        disabled: d,
        loading: s,
        onClick: b,
        htmlType: $,
        children: f,
        className: p,
        menu: u,
        arrow: m,
        autoFocus: c,
        overlay: I,
        trigger: v,
        align: x,
        open: H,
        onOpenChange: O,
        placement: C,
        getPopupContainer: z,
        href: M,
        icon: T = l.createElement(Pe, null),
        title: h,
        buttonsRender: D = re => re,
        mouseEnterDelay: R,
        mouseLeaveDelay: w,
        overlayClassName: P,
        overlayStyle: S,
        destroyOnHidden: N,
        destroyPopupOnHide: _,
        dropdownRender: E,
        popupRender: L
    } = t, q = Wt(t, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyOnHidden", "destroyPopupOnHide", "dropdownRender", "popupRender"]), X = e("dropdown", n), k = `${X}-button`, y = {
        menu: u,
        arrow: m,
        autoFocus: c,
        align: x,
        disabled: d,
        trigger: d ? [] : v,
        onOpenChange: O,
        getPopupContainer: z || o,
        mouseEnterDelay: R,
        mouseLeaveDelay: w,
        overlayClassName: P,
        overlayStyle: S,
        destroyOnHidden: N,
        popupRender: L || E
    }, {
        compactSize: W,
        compactItemClassnames: V
    } = st(X, i), te = j(k, V, p);
    "destroyPopupOnHide" in t && (y.destroyPopupOnHide = _), "overlay" in t && (y.overlay = I), "open" in t && (y.open = H), "placement" in t ? y.placement = C : y.placement = i === "rtl" ? "bottomLeft" : "bottomRight";
    const oe = l.createElement(pe, {
            type: a,
            danger: r,
            disabled: d,
            loading: s,
            onClick: b,
            htmlType: $,
            href: M,
            title: h
        }, f),
        G = l.createElement(pe, {
            type: a,
            danger: r,
            icon: T
        }),
        [ne, ie] = D([oe, G]);
    return l.createElement(gt.Compact, Object.assign({
        className: te,
        size: W,
        block: !0
    }, q), ne, l.createElement(ee, Object.assign({}, y), ie))
};
je.__ANT_BUTTON = !0;
const Xt = ee;
Xt.Button = je;
export {
    Xt as D, F as M, wt as O, vt as R, ee as a, Ct as b, ft as g
};