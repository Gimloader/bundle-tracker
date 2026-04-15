import {
    r as l,
    I as Ce,
    _ as Se,
    al as Q,
    am as j,
    cH as Ne,
    aF as Ae,
    cI as Le,
    aS as J,
    aQ as K,
    cJ as _e,
    cK as We,
    cL as Xe,
    bZ as ke,
    ak as g,
    ba as Ve,
    bD as qe,
    ai as ye,
    aj as se,
    bT as Y,
    cM as xe,
    bF as me,
    aL as we,
    bG as ue,
    aN as Ge,
    cN as Fe,
    bY as Be,
    cO as Ye,
    bf as de,
    bI as Oe,
    cP as Ue,
    R as Pe,
    aR as Ze,
    cQ as Qe,
    bQ as Je,
    bP as Ke,
    bS as et,
    bR as tt,
    aM as pe,
    bc as ot,
    aG as nt,
    cR as it,
    cS as rt,
    bt as lt,
    b_ as at,
    bU as st,
    B as ge
} from "./_index.js";
import {
    T as dt,
    b as ct,
    c as mt,
    g as ut,
    d as pt
} from "./index-5.js";
import {
    i as be
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
    $t = function(o, t) {
        return l.createElement(Ce, Se({}, o, {
            ref: t,
            icon: bt
        }))
    },
    vt = l.forwardRef($t);
const ft = e => ({
    [e.componentCls]: {
        [`${e.antCls}-motion-collapse-legacy`]: {
            overflow: "hidden",
            "&-active": {
                transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
            }
        },
        [`${e.antCls}-motion-collapse`]: {
            overflow: "hidden",
            transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
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
    It = function(o, t) {
        return l.createElement(Ce, Se({}, o, {
            ref: t,
            icon: ht
        }))
    },
    Ct = l.forwardRef(It);
const St = e => typeof e != "object" && typeof e != "function" || e === null,
    Ee = l.createContext({}),
    U = l.createContext({
        prefixCls: "",
        firstLevel: !0,
        inlineCollapsed: !1
    });
var yt = function(e, o) {
    var t = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && o.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (t[i[n]] = e[i[n]]);
    return t
};
const ze = e => {
        const {
            prefixCls: o,
            className: t,
            dashed: i
        } = e, n = yt(e, ["prefixCls", "className", "dashed"]), {
            getPrefixCls: a
        } = l.useContext(Q), r = a("menu", o), d = j({
            [`${r}-item-divider-dashed`]: !!i
        }, t);
        return l.createElement(Ne, Object.assign({
            className: d
        }, n))
    },
    Te = e => {
        var o;
        const {
            className: t,
            children: i,
            icon: n,
            title: a,
            danger: r,
            extra: d
        } = e, {
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
        let x = l.createElement(Le, Object.assign({}, J(e, ["title", "icon", "danger"]), {
            className: j({
                [`${s}-item-danger`]: r,
                [`${s}-item-only-child`]: (n ? v + 1 : v) === 1
            }, t),
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
var xt = function(e, o) {
    var t = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && o.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (t[i[n]] = e[i[n]]);
    return t
};
const Z = l.createContext(null),
    wt = l.forwardRef((e, o) => {
        const {
            children: t
        } = e, i = xt(e, ["children"]), n = l.useContext(Z), a = l.useMemo(() => Object.assign(Object.assign({}, n), i), [n, i.prefixCls, i.mode, i.selectable, i.rootClassName]), r = _e(t), d = We(o, r ? Xe(t) : null);
        return l.createElement(Z.Provider, {
            value: a
        }, l.createElement(ke, {
            space: !0
        }, r ? l.cloneElement(t, {
            ref: d
        }) : t))
    }),
    Bt = e => {
        const {
            componentCls: o,
            motionDurationSlow: t,
            horizontalLineHeight: i,
            colorSplit: n,
            lineWidth: a,
            lineType: r,
            itemPaddingInline: d
        } = e;
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
                    transition: [`border-color ${t}`, `background ${t}`].join(",")
                },
                [`${o}-submenu-arrow`]: {
                    display: "none"
                }
            }
        }
    },
    Ot = ({
        componentCls: e,
        menuArrowOffset: o,
        calc: t
    }) => ({
        [`${e}-rtl`]: {
            direction: "rtl"
        },
        [`${e}-submenu-rtl`]: {
            transformOrigin: "100% 0"
        },
        [`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]: {
            [`${e}-submenu-arrow`]: {
                "&::before": {
                    transform: `rotate(-45deg) translateY(${g(t(o).mul(-1).equal())})`
                },
                "&::after": {
                    transform: `rotate(45deg) translateY(${g(o)})`
                }
            }
        }
    }),
    $e = e => Ve(e),
    ve = (e, o) => {
        const {
            componentCls: t,
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
        } = e;
        return {
            [`${t}-${o}, ${t}-${o} > ${t}`]: {
                color: i,
                background: d,
                [`&${t}-root:focus-visible`]: Object.assign({}, $e(e)),
                [`${t}-item`]: {
                    "&-group-title, &-extra": {
                        color: r
                    }
                },
                [`${t}-submenu-selected > ${t}-submenu-title`]: {
                    color: a
                },
                [`${t}-item, ${t}-submenu-title`]: {
                    color: i,
                    [`&:not(${t}-item-disabled):focus-visible`]: Object.assign({}, $e(e))
                },
                [`${t}-item-disabled, ${t}-submenu-disabled`]: {
                    color: `${C} !important`
                },
                [`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
                    [`&:hover, > ${t}-submenu-title:hover`]: {
                        color: x
                    }
                },
                [`&:not(${t}-horizontal)`]: {
                    [`${t}-item:not(${t}-item-selected)`]: {
                        "&:hover": {
                            backgroundColor: w
                        },
                        "&:active": {
                            backgroundColor: P
                        }
                    },
                    [`${t}-submenu-title`]: {
                        "&:hover": {
                            backgroundColor: w
                        },
                        "&:active": {
                            backgroundColor: P
                        }
                    }
                },
                [`${t}-item-danger`]: {
                    color: z,
                    [`&${t}-item:hover`]: {
                        [`&:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
                            color: M
                        }
                    },
                    [`&${t}-item:active`]: {
                        background: h
                    }
                },
                [`${t}-item a`]: {
                    "&, &:hover": {
                        color: "inherit"
                    }
                },
                [`${t}-item-selected`]: {
                    color: n,
                    [`&${t}-item-danger`]: {
                        color: T
                    },
                    "a, a:hover": {
                        color: "inherit"
                    }
                },
                [`& ${t}-item-selected`]: {
                    backgroundColor: b,
                    [`&${t}-item-danger`]: {
                        backgroundColor: D
                    }
                },
                [`&${t}-submenu > ${t}`]: {
                    backgroundColor: S
                },
                [`&${t}-popup > ${t}`]: {
                    backgroundColor: R
                },
                [`&${t}-submenu-popup > ${t}`]: {
                    backgroundColor: R
                },
                [`&${t}-horizontal`]: Object.assign(Object.assign({}, o === "dark" ? {
                    borderBottom: 0
                } : {}), {
                    [`> ${t}-item, > ${t}-submenu`]: {
                        top: p,
                        marginTop: e.calc(p).mul(-1).equal(),
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
                [`&${t}-root`]: {
                    [`&${t}-inline, &${t}-vertical`]: {
                        borderInlineEnd: `${g(p)} ${H} ${O}`
                    }
                },
                [`&${t}-inline`]: {
                    [`${t}-sub${t}-inline`]: {
                        background: s
                    },
                    [`${t}-item`]: {
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
                        [`&${t}-item-danger`]: {
                            "&::after": {
                                borderInlineEndColor: T
                            }
                        }
                    },
                    [`${t}-selected, ${t}-item-selected`]: {
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
    fe = e => {
        const {
            componentCls: o,
            itemHeight: t,
            itemMarginInline: i,
            padding: n,
            menuArrowSize: a,
            marginXS: r,
            itemMarginBlock: d,
            itemWidth: s,
            itemPaddingInline: b
        } = e, $ = e.calc(a).add(n).add(r).equal();
        return {
            [`${o}-item`]: {
                position: "relative",
                overflow: "hidden"
            },
            [`${o}-item, ${o}-submenu-title`]: {
                height: t,
                lineHeight: g(t),
                paddingInline: b,
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginInline: i,
                marginBlock: d,
                width: s
            },
            [`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]: {
                height: t,
                lineHeight: g(t)
            },
            [`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]: {
                paddingInlineEnd: $
            }
        }
    },
    Pt = e => {
        const {
            componentCls: o,
            iconCls: t,
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
        } = e, v = {
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
                }, fe(e))
            },
            [`${o}-submenu-popup`]: {
                [`${o}-vertical`]: Object.assign(Object.assign({}, fe(e)), {
                    boxShadow: m
                })
            }
        }, {
            [`${o}-submenu-popup ${o}-vertical${o}-sub`]: {
                minWidth: a,
                maxHeight: `calc(100vh - ${g(e.calc(r).mul(2.5).equal())})`,
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
                    paddingInline: `calc(50% - ${g(e.calc(I).div(2).equal())} - ${g(b)})`,
                    textOverflow: "clip",
                    [`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]: {
                        opacity: 0
                    },
                    [`${o}-item-icon, ${t}`]: {
                        margin: 0,
                        fontSize: I,
                        lineHeight: g(i),
                        "+ span": {
                            display: "inline-block",
                            opacity: 0
                        }
                    }
                },
                [`${o}-item-icon, ${t}`]: {
                    display: "inline-block"
                },
                "&-tooltip": {
                    pointerEvents: "none",
                    [`${o}-item-icon, ${t}`]: {
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
    he = e => {
        const {
            componentCls: o,
            motionDurationSlow: t,
            motionDurationMid: i,
            motionEaseInOut: n,
            motionEaseOut: a,
            iconCls: r,
            iconSize: d,
            iconMarginInlineEnd: s
        } = e;
        return {
            [`${o}-item, ${o}-submenu-title`]: {
                position: "relative",
                display: "block",
                margin: 0,
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: [`border-color ${t}`, `background ${t}`, `padding calc(${t} + 0.1s) ${n}`].join(","),
                [`${o}-item-icon, ${r}`]: {
                    minWidth: d,
                    fontSize: d,
                    transition: [`font-size ${i} ${a}`, `margin ${t} ${n}`, `color ${t}`].join(","),
                    "+ span": {
                        marginInlineStart: s,
                        opacity: 1,
                        transition: [`opacity ${t} ${n}`, `margin ${t}`, `color ${t}`].join(",")
                    }
                },
                [`${o}-item-icon`]: Object.assign({}, Ge()),
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
    Ie = e => {
        const {
            componentCls: o,
            motionDurationSlow: t,
            motionEaseInOut: i,
            borderRadius: n,
            menuArrowSize: a,
            menuArrowOffset: r
        } = e;
        return {
            [`${o}-submenu`]: {
                "&-expand-icon, &-arrow": {
                    position: "absolute",
                    top: "50%",
                    insetInlineEnd: e.margin,
                    width: a,
                    color: "currentcolor",
                    transform: "translateY(-50%)",
                    transition: `transform ${t} ${i}, opacity ${t}`
                },
                "&-arrow": {
                    "&::before, &::after": {
                        position: "absolute",
                        width: e.calc(a).mul(.6).equal(),
                        height: e.calc(a).mul(.15).equal(),
                        backgroundColor: "currentcolor",
                        borderRadius: n,
                        transition: [`background ${t} ${i}`, `transform ${t} ${i}`, `top ${t} ${i}`, `color ${t} ${i}`].join(","),
                        content: '""'
                    },
                    "&::before": {
                        transform: `rotate(45deg) translateY(${g(e.calc(r).mul(-1).equal())})`
                    },
                    "&::after": {
                        transform: `rotate(-45deg) translateY(${g(r)})`
                    }
                }
            }
        }
    },
    Et = e => {
        const {
            antCls: o,
            componentCls: t,
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
        } = e;
        return [{
            "": {
                [t]: Object.assign(Object.assign({}, me()), {
                    "&-hidden": {
                        display: "none"
                    }
                })
            },
            [`${t}-submenu-hidden`]: {
                display: "none"
            }
        }, {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, we(e)), me()), {
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
                    [`${t}-item`]: {
                        flex: "none"
                    }
                },
                [`${t}-item, ${t}-submenu, ${t}-submenu-title`]: {
                    borderRadius: e.itemBorderRadius
                },
                [`${t}-item-group-title`]: {
                    padding: `${g(d)} ${g(s)}`,
                    fontSize: x,
                    lineHeight: v,
                    transition: `all ${n}`
                },
                [`&-horizontal ${t}-submenu`]: {
                    transition: [`border-color ${n} ${r}`, `background ${n} ${r}`].join(",")
                },
                [`${t}-submenu, ${t}-submenu-inline`]: {
                    transition: [`border-color ${n} ${r}`, `background ${n} ${r}`, `padding ${a} ${r}`].join(",")
                },
                [`${t}-submenu ${t}-sub`]: {
                    cursor: "initial",
                    transition: [`background ${n} ${r}`, `padding ${n} ${r}`].join(",")
                },
                [`${t}-title-content`]: {
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
                    [`${t}-item-extra`]: {
                        marginInlineStart: "auto",
                        paddingInlineStart: e.padding
                    }
                },
                [`${t}-item a`]: {
                    "&::before": {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "transparent",
                        content: '""'
                    }
                },
                [`${t}-item-divider`]: {
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
            }), he(e)), {
                [`${t}-item-group`]: {
                    [`${t}-item-group-list`]: {
                        margin: 0,
                        padding: 0,
                        [`${t}-item, ${t}-submenu-title`]: {
                            paddingInline: `${g(e.calc(i).mul(2).equal())} ${g(s)}`
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
                        [`&${t}-submenu`]: {
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
                        [`> ${t}`]: Object.assign(Object.assign(Object.assign({
                            borderRadius: p
                        }, he(e)), Ie(e)), {
                            [`${t}-item, ${t}-submenu > ${t}-submenu-title`]: {
                                borderRadius: u
                            },
                            [`${t}-submenu-title::after`]: {
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
                        paddingInlineEnd: e.paddingXS
                    },
                    "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": {
                        paddingInlineStart: e.paddingXS
                    },
                    "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": {
                        paddingBottom: e.paddingXS
                    },
                    "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": {
                        paddingTop: e.paddingXS
                    }
                }
            }), Ie(e)), {
                [`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]: {
                    "&::before": {
                        transform: `rotate(-45deg) translateX(${g(c)})`
                    },
                    "&::after": {
                        transform: `rotate(45deg) translateX(${g(e.calc(c).mul(-1).equal())})`
                    }
                },
                [`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]: {
                    transform: `translateY(${g(e.calc(m).mul(.2).mul(-1).equal())})`,
                    "&::after": {
                        transform: `rotate(-45deg) translateX(${g(e.calc(c).mul(-1).equal())})`
                    },
                    "&::before": {
                        transform: `rotate(45deg) translateX(${g(c)})`
                    }
                }
            })
        }, {
            [`${o}-layout-header`]: {
                [t]: {
                    lineHeight: "inherit"
                }
            }
        }]
    },
    zt = e => {
        var o, t, i;
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
        } = e, R = (o = e.activeBarWidth) !== null && o !== void 0 ? o : 0, w = (t = e.activeBarBorderWidth) !== null && t !== void 0 ? t : u, P = (i = e.itemMarginInline) !== null && i !== void 0 ? i : e.marginXXS, S = new ue(h).setA(.65).toRgbString();
        return {
            dropdownWidth: 160,
            zIndexPopup: e.zIndexPopupBase + 50,
            radiusItem: e.borderRadiusLG,
            itemBorderRadius: e.borderRadiusLG,
            radiusSubMenuItem: e.borderRadiusSM,
            subMenuItemBorderRadius: e.borderRadiusSM,
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
            darkItemDisabledColor: new ue(h).setA(.25).toRgbString(),
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
    Tt = (e, o = e, t = !0) => ye("Menu", n => {
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
        return [Et(h), Bt(h), Pt(h), ve(h, "light"), ve(D, "dark"), Ot(h), ft(h), Y(h, "slide-up"), Y(h, "slide-down"), xe(h, "zoom-big")]
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
        injectStyle: t,
        unitless: {
            groupTitleLineHeight: !0
        }
    })(e, o),
    He = e => {
        var o;
        const {
            popupClassName: t,
            icon: i,
            title: n,
            theme: a
        } = e, r = l.useContext(U), {
            prefixCls: d,
            inlineCollapsed: s,
            theme: b
        } = r, $ = Fe();
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
            [u] = Be("Menu");
        return l.createElement(U.Provider, {
            value: p
        }, l.createElement(Ye, Object.assign({}, J(e, ["icon"]), {
            title: f,
            popupClassName: j(d, t, `${d}-${a||b}`),
            popupStyle: Object.assign({
                zIndex: u
            }, e.popupStyle)
        })))
    };
var Ht = function(e, o) {
    var t = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && o.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (t[i[n]] = e[i[n]]);
    return t
};

function ae(e) {
    return e === null || e === !1
}
const jt = {
        item: Te,
        submenu: He,
        divider: ze
    },
    Mt = l.forwardRef((e, o) => {
        var t;
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
            } = e,
            M = Ht(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]),
            T = J(M, ["collapsedWidth"]);
        (t = n.validator) === null || t === void 0 || t.call(n, {
            mode: H
        });
        const h = de((...A) => {
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
    G = l.forwardRef((e, o) => {
        const t = l.useRef(null),
            i = l.useContext(Ee);
        return l.useImperativeHandle(o, () => ({
            menu: t.current,
            focus: n => {
                var a;
                (a = t.current) === null || a === void 0 || a.focus(n)
            }
        })), l.createElement(Mt, Object.assign({
            ref: t
        }, e, i))
    });
G.Item = Te;
G.SubMenu = He;
G.Divider = ze;
G.ItemGroup = Qe;
const Rt = e => {
        const {
            componentCls: o,
            menuCls: t,
            colorError: i,
            colorTextLightSolid: n
        } = e, a = `${t}-item`;
        return {
            [`${o}, ${o}-menu-submenu`]: {
                [`${t} ${a}`]: {
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
    Dt = e => {
        const {
            componentCls: o,
            menuCls: t,
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
        } = e;
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
                        insetBlock: e.calc(a).div(2).sub(n).equal(),
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
            }, ct(e, c, {
                arrowPlacement: {
                    top: !0,
                    bottom: !0
                }
            }), {
                [`${o} ${t}`]: {
                    position: "relative",
                    margin: 0
                },
                [`${t}-submenu-popup`]: {
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
                [`${o}, ${o}-menu-submenu`]: Object.assign(Object.assign({}, we(e)), {
                    [t]: Object.assign(Object.assign({
                        padding: f,
                        listStyleType: "none",
                        backgroundColor: c,
                        backgroundClip: "padding-box",
                        borderRadius: e.borderRadiusLG,
                        outline: "none",
                        boxShadow: e.boxShadowSecondary
                    }, pe(e)), {
                        "&:empty": {
                            padding: 0,
                            boxShadow: "none"
                        },
                        [`${t}-item-group-title`]: {
                            padding: `${g(b)} ${g(m)}`,
                            color: e.colorTextDescription,
                            transition: `all ${s}`
                        },
                        [`${t}-item`]: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center"
                        },
                        [`${t}-item-icon`]: {
                            minWidth: $,
                            marginInlineEnd: e.marginXS,
                            fontSize: e.fontSizeSM
                        },
                        [`${t}-title-content`]: {
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
                            [`${t}-item-extra`]: {
                                paddingInlineStart: e.padding,
                                marginInlineStart: "auto",
                                fontSize: e.fontSizeSM,
                                color: e.colorTextDescription
                            }
                        },
                        [`${t}-item, ${t}-submenu-title`]: Object.assign(Object.assign({
                            display: "flex",
                            margin: 0,
                            padding: `${g(b)} ${g(m)}`,
                            color: e.colorText,
                            fontWeight: "normal",
                            fontSize: $,
                            lineHeight: e.lineHeight,
                            cursor: "pointer",
                            transition: `all ${s}`,
                            borderRadius: e.borderRadiusSM,
                            "&:hover, &-active": {
                                backgroundColor: e.controlItemBgHover
                            }
                        }, pe(e)), {
                            "&-selected": {
                                color: e.colorPrimary,
                                backgroundColor: e.controlItemBgActive,
                                "&:hover, &-active": {
                                    backgroundColor: e.controlItemBgActiveHover
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
                                margin: `${g(e.marginXXS)} 0`,
                                overflow: "hidden",
                                lineHeight: 0,
                                backgroundColor: e.colorSplit
                            },
                            [`${o}-menu-submenu-expand-icon`]: {
                                position: "absolute",
                                insetInlineEnd: e.paddingXS,
                                [`${o}-menu-submenu-arrow-icon`]: {
                                    marginInlineEnd: "0 !important",
                                    color: e.colorIcon,
                                    fontSize: u,
                                    fontStyle: "normal"
                                }
                            }
                        }),
                        [`${t}-item-group-list`]: {
                            margin: `0 ${g(e.marginXS)}`,
                            padding: 0,
                            listStyle: "none"
                        },
                        [`${t}-submenu-title`]: {
                            paddingInlineEnd: e.calc(m).add(e.fontSizeSM).equal()
                        },
                        [`${t}-submenu-vertical`]: {
                            position: "relative"
                        },
                        [`${t}-submenu${t}-submenu-disabled ${o}-menu-submenu-title`]: {
                            [`&, ${o}-menu-submenu-arrow-icon`]: {
                                color: p,
                                backgroundColor: c,
                                cursor: "not-allowed"
                            }
                        },
                        [`${t}-submenu-selected ${o}-menu-submenu-title`]: {
                            color: e.colorPrimary
                        }
                    })
                })
            },
            [Y(e, "slide-up"), Y(e, "slide-down"), be(e, "move-up"), be(e, "move-down"), xe(e, "zoom-big")]
        ]
    },
    Nt = e => Object.assign(Object.assign({
        zIndexPopup: e.zIndexPopupBase + 50,
        paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
    }, mt({
        contentRadius: e.borderRadiusLG,
        limitVerticalRadius: !0
    })), ut(e)),
    At = ye("Dropdown", e => {
        const {
            marginXXS: o,
            sizePopupArrow: t,
            paddingXXS: i,
            componentCls: n
        } = e, a = se(e, {
            menuCls: `${n}-menu`,
            dropdownArrowDistance: e.calc(t).div(2).add(o).equal(),
            dropdownEdgeChildPadding: i
        });
        return [Dt(a), Rt(a)]
    }, Nt, {
        resetStyle: !1
    }),
    ee = e => {
        var o;
        const {
            menu: t,
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
        } = e, {
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
            [oe, F] = nt(!1, {
                value: m ?? I
            }),
            ne = de(B => {
                c == null || c(B, {
                    source: "trigger"
                }), v == null || v(B), F(B)
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
            Me = de(() => {
                t != null && t.selectable && (t != null && t.multiple) || (c == null || c(!1, {
                    source: "menu"
                }), F(!1))
            }),
            Re = () => {
                let B;
                return t != null && t.items ? B = l.createElement(G, Object.assign({}, t)) : typeof z == "function" ? B = z() : B = z, S && (B = S(B)), B = l.Children.only(typeof B == "string" ? l.createElement("span", null, B) : B), l.createElement(wt, {
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
            [ce, De] = Be("Dropdown", u == null ? void 0 : u.zIndex);
        let le = l.createElement(it, Object.assign({
            alignPoint: te
        }, J(e, ["rootClassName"]), {
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
                zIndex: ce
            }),
            autoDestroy: T ?? h
        }), W);
        return ce && (le = l.createElement(rt.Provider, {
            value: De
        }, le)), q(le)
    },
    Lt = at(ee, "align", void 0, "dropdown", e => e),
    _t = e => l.createElement(Lt, Object.assign({}, e), l.createElement("span", null));
ee._InternalPanelDoNotUseOrYouWillBeFired = _t;
var Wt = function(e, o) {
    var t = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && o.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) o.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (t[i[n]] = e[i[n]]);
    return t
};
const je = e => {
    const {
        getPopupContainer: o,
        getPrefixCls: t,
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
    } = e, q = Wt(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyOnHidden", "destroyPopupOnHide", "dropdownRender", "popupRender"]), X = t("dropdown", n), k = `${X}-button`, y = {
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
    "destroyPopupOnHide" in e && (y.destroyPopupOnHide = _), "overlay" in e && (y.overlay = I), "open" in e && (y.open = H), "placement" in e ? y.placement = C : y.placement = i === "rtl" ? "bottomLeft" : "bottomRight";
    const oe = l.createElement(ge, {
            type: a,
            danger: r,
            disabled: d,
            loading: s,
            onClick: b,
            htmlType: $,
            href: M,
            title: h
        }, f),
        F = l.createElement(ge, {
            type: a,
            danger: r,
            icon: T
        }),
        [ne, ie] = D([oe, F]);
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
    Xt as D, G as M, wt as O, vt as R, ee as a, Ct as b, ft as g
};