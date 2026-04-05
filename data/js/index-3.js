import {
    am as _,
    r as a,
    I as Ge,
    _ as he,
    aj as ye,
    ak as ee,
    ai as je,
    bO as It,
    aL as ct,
    bF as Bt,
    x as B,
    aJ as Ke,
    aA as de,
    aD as ae,
    aB as Ae,
    az as fe,
    aG as qe,
    aK as Xe,
    aS as dt,
    ao as jt,
    aO as ut,
    bI as ft,
    bU as Ue,
    aP as Pe,
    bB as Qe,
    bW as $e,
    bV as pt,
    cU as Ye,
    bZ as ke,
    al as Ee,
    b8 as Le,
    aI as At,
    bf as et,
    aQ as tt,
    B as Pt,
    bg as rt,
    bm as Nt
} from "./_index.js";

function Ve(e, t, r) {
    return _({
        [`${e}-status-success`]: t === "success",
        [`${e}-status-warning`]: t === "warning",
        [`${e}-status-error`]: t === "error",
        [`${e}-status-validating`]: t === "validating",
        [`${e}-has-feedback`]: r
    })
}
const Ze = (e, t) => t || e;
var Tt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                }
            }]
        },
        name: "search",
        theme: "outlined"
    },
    Ft = function(t, r) {
        return a.createElement(Ge, he({}, t, {
            ref: r,
            icon: Tt
        }))
    },
    _t = a.forwardRef(Ft);

function Ne(e) {
    return ye(e, {
        inputAffixPadding: e.paddingXXS
    })
}
const Te = e => {
        const {
            controlHeight: t,
            fontSize: r,
            lineHeight: n,
            lineWidth: o,
            controlHeightSM: c,
            controlHeightLG: i,
            fontSizeLG: l,
            lineHeightLG: b,
            paddingSM: p,
            controlPaddingHorizontalSM: f,
            controlPaddingHorizontal: C,
            colorFillAlter: E,
            colorPrimaryHover: V,
            colorPrimary: S,
            controlOutlineWidth: A,
            controlOutline: z,
            colorErrorOutline: I,
            colorWarningOutline: R,
            colorBgContainer: M,
            inputFontSize: K,
            inputFontSizeLG: g,
            inputFontSizeSM: $
        } = e, d = K || r, D = $ || d, j = g || l, y = Math.round((t - d * n) / 2 * 10) / 10 - o, P = Math.round((c - D * n) / 2 * 10) / 10 - o, W = Math.ceil((i - j * b) / 2 * 10) / 10 - o;
        return {
            paddingBlock: Math.max(y, 0),
            paddingBlockSM: Math.max(P, 0),
            paddingBlockLG: Math.max(W, 0),
            paddingInline: p - o,
            paddingInlineSM: f - o,
            paddingInlineLG: C - o,
            addonBg: E,
            activeBorderColor: S,
            hoverBorderColor: V,
            activeShadow: `0 0 0 ${A}px ${z}`,
            errorActiveShadow: `0 0 0 ${A}px ${I}`,
            warningActiveShadow: `0 0 0 ${A}px ${R}`,
            hoverBg: M,
            activeBg: M,
            inputFontSize: d,
            inputFontSizeLG: j,
            inputFontSizeSM: D
        }
    },
    Mt = e => ({
        borderColor: e.hoverBorderColor,
        backgroundColor: e.hoverBg
    }),
    Je = e => ({
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 1,
        "input[disabled], textarea[disabled]": {
            cursor: "not-allowed"
        },
        "&:hover:not([disabled])": Object.assign({}, Mt(ye(e, {
            hoverBorderColor: e.colorBorder,
            hoverBg: e.colorBgContainerDisabled
        })))
    }),
    gt = (e, t) => ({
        background: e.colorBgContainer,
        borderWidth: e.lineWidth,
        borderStyle: e.lineType,
        borderColor: t.borderColor,
        "&:hover": {
            borderColor: t.hoverBorderColor,
            backgroundColor: e.hoverBg
        },
        "&:focus, &:focus-within": {
            borderColor: t.activeBorderColor,
            boxShadow: t.activeShadow,
            outline: 0,
            backgroundColor: e.activeBg
        }
    }),
    nt = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, gt(e, t)), {
            [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
                color: t.affixColor
            }
        }),
        [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
            borderColor: t.borderColor
        }
    }),
    Wt = (e, t) => ({
        "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, gt(e, {
            borderColor: e.colorBorder,
            hoverBorderColor: e.hoverBorderColor,
            activeBorderColor: e.activeBorderColor,
            activeShadow: e.activeShadow
        })), {
            [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Je(e))
        }), nt(e, {
            status: "error",
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError
        })), nt(e, {
            status: "warning",
            borderColor: e.colorWarning,
            hoverBorderColor: e.colorWarningBorderHover,
            activeBorderColor: e.colorWarning,
            activeShadow: e.warningActiveShadow,
            affixColor: e.colorWarning
        })), t)
    }),
    ot = (e, t) => ({
        [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
            [`${e.componentCls}-group-addon`]: {
                borderColor: t.addonBorderColor,
                color: t.addonColor
            }
        }
    }),
    Ht = e => ({
        "&-outlined": Object.assign(Object.assign(Object.assign({
            [`${e.componentCls}-group`]: {
                "&-addon": {
                    background: e.addonBg,
                    border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
                },
                "&-addon:first-child": {
                    borderInlineEnd: 0
                },
                "&-addon:last-child": {
                    borderInlineStart: 0
                }
            }
        }, ot(e, {
            status: "error",
            addonBorderColor: e.colorError,
            addonColor: e.colorErrorText
        })), ot(e, {
            status: "warning",
            addonBorderColor: e.colorWarning,
            addonColor: e.colorWarningText
        })), {
            [`&${e.componentCls}-group-wrapper-disabled`]: {
                [`${e.componentCls}-group-addon`]: Object.assign({}, Je(e))
            }
        })
    }),
    Dt = (e, t) => {
        const {
            componentCls: r
        } = e;
        return {
            "&-borderless": Object.assign({
                background: "transparent",
                border: "none",
                "&:focus, &:focus-within": {
                    outline: "none"
                },
                [`&${r}-disabled, &[disabled]`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed"
                },
                [`&${r}-status-error`]: {
                    "&, & input, & textarea": {
                        color: e.colorError
                    }
                },
                [`&${r}-status-warning`]: {
                    "&, & input, & textarea": {
                        color: e.colorWarning
                    }
                }
            }, t)
        }
    },
    mt = (e, t) => {
        var r;
        return {
            background: t.bg,
            borderWidth: e.lineWidth,
            borderStyle: e.lineType,
            borderColor: "transparent",
            "input&, & input, textarea&, & textarea": {
                color: (r = t == null ? void 0 : t.inputColor) !== null && r !== void 0 ? r : "unset"
            },
            "&:hover": {
                background: t.hoverBg
            },
            "&:focus, &:focus-within": {
                outline: 0,
                borderColor: t.activeBorderColor,
                backgroundColor: e.activeBg
            }
        }
    },
    at = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, mt(e, t)), {
            [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
                color: t.affixColor
            }
        })
    }),
    Lt = (e, t) => ({
        "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mt(e, {
            bg: e.colorFillTertiary,
            hoverBg: e.colorFillSecondary,
            activeBorderColor: e.activeBorderColor
        })), {
            [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Je(e))
        }), at(e, {
            status: "error",
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            inputColor: e.colorErrorText,
            affixColor: e.colorError
        })), at(e, {
            status: "warning",
            bg: e.colorWarningBg,
            hoverBg: e.colorWarningBgHover,
            activeBorderColor: e.colorWarning,
            inputColor: e.colorWarningText,
            affixColor: e.colorWarning
        })), t)
    }),
    it = (e, t) => ({
        [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
            [`${e.componentCls}-group-addon`]: {
                background: t.addonBg,
                color: t.addonColor
            }
        }
    }),
    Vt = e => ({
        "&-filled": Object.assign(Object.assign(Object.assign({
            [`${e.componentCls}-group-addon`]: {
                background: e.colorFillTertiary,
                "&:last-child": {
                    position: "static"
                }
            }
        }, it(e, {
            status: "error",
            addonBg: e.colorErrorBg,
            addonColor: e.colorErrorText
        })), it(e, {
            status: "warning",
            addonBg: e.colorWarningBg,
            addonColor: e.colorWarningText
        })), {
            [`&${e.componentCls}-group-wrapper-disabled`]: {
                [`${e.componentCls}-group`]: {
                    "&-addon": {
                        background: e.colorFillTertiary,
                        color: e.colorTextDisabled
                    },
                    "&-addon:first-child": {
                        borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
                    },
                    "&-addon:last-child": {
                        borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
                    }
                }
            }
        })
    }),
    vt = (e, t) => ({
        background: e.colorBgContainer,
        borderWidth: `${ee(e.lineWidth)} 0`,
        borderStyle: `${e.lineType} none`,
        borderColor: `transparent transparent ${t.borderColor} transparent`,
        borderRadius: 0,
        "&:hover": {
            borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
            backgroundColor: e.hoverBg
        },
        "&:focus, &:focus-within": {
            borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
            outline: 0,
            backgroundColor: e.activeBg
        }
    }),
    lt = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, vt(e, t)), {
            [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
                color: t.affixColor
            }
        }),
        [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
            borderColor: `transparent transparent ${t.borderColor} transparent`
        }
    }),
    Gt = (e, t) => ({
        "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, vt(e, {
            borderColor: e.colorBorder,
            hoverBorderColor: e.hoverBorderColor,
            activeBorderColor: e.activeBorderColor,
            activeShadow: e.activeShadow
        })), {
            [`&${e.componentCls}-disabled, &[disabled]`]: {
                color: e.colorTextDisabled,
                boxShadow: "none",
                cursor: "not-allowed",
                "&:hover": {
                    borderColor: `transparent transparent ${e.colorBorder} transparent`
                }
            },
            "input[disabled], textarea[disabled]": {
                cursor: "not-allowed"
            }
        }), lt(e, {
            status: "error",
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError
        })), lt(e, {
            status: "warning",
            borderColor: e.colorWarning,
            hoverBorderColor: e.colorWarningBorderHover,
            activeBorderColor: e.colorWarning,
            activeShadow: e.warningActiveShadow,
            affixColor: e.colorWarning
        })), t)
    }),
    Kt = e => ({
        "&::-moz-placeholder": {
            opacity: 1
        },
        "&::placeholder": {
            color: e,
            userSelect: "none"
        },
        "&:placeholder-shown": {
            textOverflow: "ellipsis"
        }
    }),
    bt = e => {
        const {
            paddingBlockLG: t,
            lineHeightLG: r,
            borderRadiusLG: n,
            paddingInlineLG: o
        } = e;
        return {
            padding: `${ee(t)} ${ee(o)}`,
            fontSize: e.inputFontSizeLG,
            lineHeight: r,
            borderRadius: n
        }
    },
    ht = e => ({
        padding: `${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,
        fontSize: e.inputFontSizeSM,
        borderRadius: e.borderRadiusSM
    }),
    Ct = e => Object.assign(Object.assign({
        position: "relative",
        display: "inline-block",
        width: "100%",
        minWidth: 0,
        padding: `${ee(e.paddingBlock)} ${ee(e.paddingInline)}`,
        color: e.colorText,
        fontSize: e.inputFontSize,
        lineHeight: e.lineHeight,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationMid}`
    }, Kt(e.colorTextPlaceholder)), {
        "&-lg": Object.assign({}, bt(e)),
        "&-sm": Object.assign({}, ht(e)),
        "&-rtl, &-textarea-rtl": {
            direction: "rtl"
        }
    }),
    qt = e => {
        const {
            componentCls: t,
            antCls: r
        } = e;
        return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
                paddingInlineEnd: e.paddingXS,
                "&:last-child": {
                    paddingInlineEnd: 0
                }
            },
            [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, bt(e)),
            [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, ht(e)),
            [`&-lg ${r}-select-single ${r}-select-selector`]: {
                height: e.controlHeightLG
            },
            [`&-sm ${r}-select-single ${r}-select-selector`]: {
                height: e.controlHeightSM
            },
            [`> ${t}`]: {
                display: "table-cell",
                "&:not(:first-child):not(:last-child)": {
                    borderRadius: 0
                }
            },
            [`${t}-group`]: {
                "&-addon, &-wrap": {
                    display: "table-cell",
                    width: 1,
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    "&:not(:first-child):not(:last-child)": {
                        borderRadius: 0
                    }
                },
                "&-wrap > *": {
                    display: "block !important"
                },
                "&-addon": {
                    position: "relative",
                    padding: `0 ${ee(e.paddingInline)}`,
                    color: e.colorText,
                    fontWeight: "normal",
                    fontSize: e.inputFontSize,
                    textAlign: "center",
                    borderRadius: e.borderRadius,
                    transition: `all ${e.motionDurationSlow}`,
                    lineHeight: 1,
                    [`${r}-select`]: {
                        margin: `${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
                        [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
                            [`${r}-select-selector`]: {
                                backgroundColor: "inherit",
                                border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
                                boxShadow: "none"
                            }
                        }
                    },
                    [`${r}-cascader-picker`]: {
                        margin: `-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
                        backgroundColor: "transparent",
                        [`${r}-cascader-input`]: {
                            textAlign: "start",
                            border: 0,
                            boxShadow: "none"
                        }
                    }
                }
            },
            [t]: {
                width: "100%",
                marginBottom: 0,
                textAlign: "inherit",
                "&:focus": {
                    zIndex: 1,
                    borderInlineEndWidth: 1
                },
                "&:hover": {
                    zIndex: 1,
                    borderInlineEndWidth: 1,
                    [`${t}-search-with-button &`]: {
                        zIndex: 0
                    }
                }
            },
            [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${r}-select ${r}-select-selector`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${t}-affix-wrapper`]: {
                [`&:not(:first-child) ${t}`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                },
                [`&:not(:last-child) ${t}`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
                [`${r}-select ${r}-select-selector`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`${t}-affix-wrapper`]: {
                "&:not(:last-child)": {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    [`${t}-search &`]: {
                        borderStartStartRadius: e.borderRadius,
                        borderEndStartRadius: e.borderRadius
                    }
                },
                [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&${t}-group-compact`]: Object.assign(Object.assign({
                display: "block"
            }, Bt()), {
                [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
                    "&:not(:first-child):not(:last-child)": {
                        borderInlineEndWidth: e.lineWidth,
                        "&:hover, &:focus": {
                            zIndex: 1
                        }
                    }
                },
                "& > *": {
                    display: "inline-flex",
                    float: "none",
                    verticalAlign: "top",
                    borderRadius: 0
                },
                [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
                    display: "inline-flex"
                },
                "& > *:not(:last-child)": {
                    marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                    borderInlineEndWidth: e.lineWidth
                },
                [t]: {
                    float: "none"
                },
                [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderRadius: 0,
                    "&:hover, &:focus": {
                        zIndex: 1
                    }
                },
                [`& > ${r}-select-focused`]: {
                    zIndex: 1
                },
                [`& > ${r}-select > ${r}-select-arrow`]: {
                    zIndex: 1
                },
                [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
                    borderStartStartRadius: e.borderRadius,
                    borderEndStartRadius: e.borderRadius
                },
                [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius
                },
                [`& > ${r}-select-auto-complete ${t}`]: {
                    verticalAlign: "top"
                },
                [`${t}-group-wrapper + ${t}-group-wrapper`]: {
                    marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
                    [`${t}-affix-wrapper`]: {
                        borderRadius: 0
                    }
                },
                [`${t}-group-wrapper:not(:last-child)`]: {
                    [`&${t}-search > ${t}-group`]: {
                        [`& > ${t}-group-addon > ${t}-search-button`]: {
                            borderRadius: 0
                        },
                        [`& > ${t}`]: {
                            borderStartStartRadius: e.borderRadius,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: e.borderRadius
                        }
                    }
                }
            })
        }
    },
    Xt = e => {
        const {
            componentCls: t,
            controlHeightSM: r,
            lineWidth: n,
            calc: o
        } = e, i = o(r).sub(o(n).mul(2)).sub(16).div(2).equal();
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ct(e)), Ct(e)), Wt(e)), Lt(e)), Dt(e)), Gt(e)), {
                '&[type="color"]': {
                    height: e.controlHeight,
                    [`&${t}-lg`]: {
                        height: e.controlHeightLG
                    },
                    [`&${t}-sm`]: {
                        height: r,
                        paddingTop: i,
                        paddingBottom: i
                    }
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
                    appearance: "none"
                }
            })
        }
    },
    Ut = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-clear-icon`]: {
                margin: 0,
                padding: 0,
                lineHeight: 0,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                verticalAlign: -1,
                cursor: "pointer",
                transition: `color ${e.motionDurationSlow}`,
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                "&:hover": {
                    color: e.colorIcon
                },
                "&:active": {
                    color: e.colorText
                },
                "&-hidden": {
                    visibility: "hidden"
                },
                "&-has-suffix": {
                    margin: `0 ${ee(e.inputAffixPadding)}`
                }
            }
        }
    },
    Qt = e => {
        const {
            componentCls: t,
            inputAffixPadding: r,
            colorTextDescription: n,
            motionDurationSlow: o,
            colorIcon: c,
            colorIconHover: i,
            iconCls: l
        } = e, b = `${t}-affix-wrapper`, p = `${t}-affix-wrapper-disabled`;
        return {
            [b]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ct(e)), {
                display: "inline-flex",
                [`&:not(${t}-disabled):hover`]: {
                    zIndex: 1,
                    [`${t}-search-with-button &`]: {
                        zIndex: 0
                    }
                },
                "&-focused, &:focus": {
                    zIndex: 1
                },
                [`> input${t}`]: {
                    padding: 0
                },
                [`> input${t}, > textarea${t}`]: {
                    fontSize: "inherit",
                    border: "none",
                    borderRadius: 0,
                    outline: "none",
                    background: "transparent",
                    color: "inherit",
                    "&::-ms-reveal": {
                        display: "none"
                    },
                    "&:focus": {
                        boxShadow: "none !important"
                    }
                },
                "&::before": {
                    display: "inline-block",
                    width: 0,
                    visibility: "hidden",
                    content: '"\\a0"'
                },
                [t]: {
                    "&-prefix, &-suffix": {
                        display: "flex",
                        flex: "none",
                        alignItems: "center",
                        "> *:not(:last-child)": {
                            marginInlineEnd: e.paddingXS
                        }
                    },
                    "&-show-count-suffix": {
                        color: n,
                        direction: "ltr"
                    },
                    "&-show-count-has-suffix": {
                        marginInlineEnd: e.paddingXXS
                    },
                    "&-prefix": {
                        marginInlineEnd: r
                    },
                    "&-suffix": {
                        marginInlineStart: r
                    }
                }
            }), Ut(e)), {
                [`${l}${t}-password-icon`]: {
                    color: c,
                    cursor: "pointer",
                    transition: `all ${o}`,
                    "&:hover": {
                        color: i
                    }
                }
            }),
            [`${t}-underlined`]: {
                borderRadius: 0
            },
            [p]: {
                [`${l}${t}-password-icon`]: {
                    color: c,
                    cursor: "not-allowed",
                    "&:hover": {
                        color: c
                    }
                }
            }
        }
    },
    Yt = e => {
        const {
            componentCls: t,
            borderRadiusLG: r,
            borderRadiusSM: n
        } = e;
        return {
            [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ct(e)), qt(e)), {
                "&-rtl": {
                    direction: "rtl"
                },
                "&-wrapper": Object.assign(Object.assign(Object.assign({
                    display: "inline-block",
                    width: "100%",
                    textAlign: "start",
                    verticalAlign: "top",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-lg": {
                        [`${t}-group-addon`]: {
                            borderRadius: r,
                            fontSize: e.inputFontSizeLG
                        }
                    },
                    "&-sm": {
                        [`${t}-group-addon`]: {
                            borderRadius: n
                        }
                    }
                }, Ht(e)), Vt(e)), {
                    [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
                        [`${t}, ${t}-group-addon`]: {
                            borderRadius: 0
                        }
                    },
                    [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                        [`${t}, ${t}-group-addon`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                        [`${t}, ${t}-group-addon`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    },
                    [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
                        [`${t}-affix-wrapper`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
                        [`${t}-affix-wrapper`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                })
            })
        }
    },
    Zt = e => {
        const {
            componentCls: t,
            antCls: r
        } = e, n = `${t}-search`;
        return {
            [n]: {
                [t]: {
                    "&:not([disabled]):hover, &:not([disabled]):focus": {
                        [`+ ${t}-group-addon ${n}-button:not(${r}-btn-color-primary):not(${r}-btn-variant-text)`]: {
                            borderInlineStartColor: e.colorPrimaryHover
                        }
                    }
                },
                [`${t}-affix-wrapper`]: {
                    height: e.controlHeight,
                    borderRadius: 0
                },
                [`${t}-lg`]: {
                    lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
                },
                [`> ${t}-group`]: {
                    [`> ${t}-group-addon:last-child`]: {
                        insetInlineStart: -1,
                        padding: 0,
                        border: 0,
                        [`${n}-button`]: {
                            marginInlineEnd: -1,
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0,
                            boxShadow: "none"
                        },
                        [`${n}-button:not(${r}-btn-color-primary)`]: {
                            color: e.colorTextDescription,
                            "&:not([disabled]):hover": {
                                color: e.colorPrimaryHover
                            },
                            "&:active": {
                                color: e.colorPrimaryActive
                            },
                            [`&${r}-btn-loading::before`]: {
                                inset: 0
                            }
                        }
                    }
                },
                [`${n}-button`]: {
                    height: e.controlHeight,
                    "&:hover, &:focus": {
                        zIndex: 1
                    }
                },
                "&-large": {
                    [`${t}-affix-wrapper, ${n}-button`]: {
                        height: e.controlHeightLG
                    }
                },
                "&-small": {
                    [`${t}-affix-wrapper, ${n}-button`]: {
                        height: e.controlHeightSM
                    }
                },
                "&-rtl": {
                    direction: "rtl"
                },
                [`&${t}-compact-item`]: {
                    [`&:not(${t}-compact-last-item)`]: {
                        [`${t}-group-addon`]: {
                            [`${t}-search-button`]: {
                                marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                                borderRadius: 0
                            }
                        }
                    },
                    [`&:not(${t}-compact-first-item)`]: {
                        [`${t},${t}-affix-wrapper`]: {
                            borderRadius: 0
                        }
                    },
                    [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
                        "&:hover, &:focus, &:active": {
                            zIndex: 2
                        }
                    },
                    [`> ${t}-affix-wrapper-focused`]: {
                        zIndex: 2
                    }
                }
            }
        }
    },
    Jt = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-out-of-range`]: {
                [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
                    color: e.colorError
                }
            }
        }
    },
    xt = je(["Input", "Shared"], e => {
        const t = ye(e, Ne(e));
        return [Xt(t), Qt(t)]
    }, Te, {
        resetFont: !1
    }),
    St = je(["Input", "Component"], e => {
        const t = ye(e, Ne(e));
        return [Yt(t), Zt(t), Jt(t), It(t)]
    }, Te, {
        resetFont: !1
    });

function kt(e) {
    return !!(e.addonBefore || e.addonAfter)
}

function er(e) {
    return !!(e.prefix || e.suffix || e.allowClear)
}

function st(e, t, r) {
    var n = t.cloneNode(!0),
        o = Object.create(e, {
            target: {
                value: n
            },
            currentTarget: {
                value: n
            }
        });
    return n.value = r, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd), n.setSelectionRange = function() {
        t.setSelectionRange.apply(t, arguments)
    }, o
}

function Be(e, t, r, n) {
    if (r) {
        var o = t;
        if (t.type === "click") {
            o = st(t, e, ""), r(o);
            return
        }
        if (e.type !== "file" && n !== void 0) {
            o = st(t, e, n), r(o);
            return
        }
        r(o)
    }
}

function $t(e, t) {
    if (e) {
        e.focus(t);
        var r = t || {},
            n = r.cursor;
        if (n) {
            var o = e.value.length;
            switch (n) {
                case "start":
                    e.setSelectionRange(0, 0);
                    break;
                case "end":
                    e.setSelectionRange(o, o);
                    break;
                default:
                    e.setSelectionRange(0, o)
            }
        }
    }
}
var yt = B.forwardRef(function(e, t) {
        var r, n, o, c = e.inputElement,
            i = e.children,
            l = e.prefixCls,
            b = e.prefix,
            p = e.suffix,
            f = e.addonBefore,
            C = e.addonAfter,
            E = e.className,
            V = e.style,
            S = e.disabled,
            A = e.readOnly,
            z = e.focused,
            I = e.triggerFocus,
            R = e.allowClear,
            M = e.value,
            K = e.handleReset,
            g = e.hidden,
            $ = e.classes,
            d = e.classNames,
            D = e.dataAttrs,
            j = e.styles,
            y = e.components,
            P = e.onClear,
            W = i ?? c,
            Q = (y == null ? void 0 : y.affixWrapper) || "span",
            O = (y == null ? void 0 : y.groupWrapper) || "span",
            N = (y == null ? void 0 : y.wrapper) || "span",
            w = (y == null ? void 0 : y.groupAddon) || "span",
            T = a.useRef(null),
            h = function(se) {
                var H;
                (H = T.current) !== null && H !== void 0 && H.contains(se.target) && (I == null || I())
            },
            oe = er(e),
            U = a.cloneElement(W, {
                value: M,
                className: _((r = W.props) === null || r === void 0 ? void 0 : r.className, !oe && (d == null ? void 0 : d.variant)) || null
            }),
            Y = a.useRef(null);
        if (B.useImperativeHandle(t, function() {
                return {
                    nativeElement: Y.current || T.current
                }
            }), oe) {
            var q = null;
            if (R) {
                var u = !S && !A && M,
                    s = "".concat(l, "-clear-icon"),
                    m = Ke(R) === "object" && R !== null && R !== void 0 && R.clearIcon ? R.clearIcon : "✖";
                q = B.createElement("button", {
                    type: "button",
                    tabIndex: -1,
                    onClick: function(se) {
                        K == null || K(se), P == null || P()
                    },
                    onMouseDown: function(se) {
                        return se.preventDefault()
                    },
                    className: _(s, de(de({}, "".concat(s, "-hidden"), !u), "".concat(s, "-has-suffix"), !!p))
                }, m)
            }
            var v = "".concat(l, "-affix-wrapper"),
                te = _(v, de(de(de(de(de({}, "".concat(l, "-disabled"), S), "".concat(v, "-disabled"), S), "".concat(v, "-focused"), z), "".concat(v, "-readonly"), A), "".concat(v, "-input-with-clear-btn"), p && R && M), $ == null ? void 0 : $.affixWrapper, d == null ? void 0 : d.affixWrapper, d == null ? void 0 : d.variant),
                x = (p || R) && B.createElement("span", {
                    className: _("".concat(l, "-suffix"), d == null ? void 0 : d.suffix),
                    style: j == null ? void 0 : j.suffix
                }, q, p);
            U = B.createElement(Q, he({
                className: te,
                style: j == null ? void 0 : j.affixWrapper,
                onClick: h
            }, D == null ? void 0 : D.affixWrapper, {
                ref: T
            }), b && B.createElement("span", {
                className: _("".concat(l, "-prefix"), d == null ? void 0 : d.prefix),
                style: j == null ? void 0 : j.prefix
            }, b), U, x)
        }
        if (kt(e)) {
            var Z = "".concat(l, "-group"),
                J = "".concat(Z, "-addon"),
                ie = "".concat(Z, "-wrapper"),
                pe = _("".concat(l, "-wrapper"), Z, $ == null ? void 0 : $.wrapper, d == null ? void 0 : d.wrapper),
                ge = _(ie, de({}, "".concat(ie, "-disabled"), S), $ == null ? void 0 : $.group, d == null ? void 0 : d.groupWrapper);
            U = B.createElement(O, {
                className: ge,
                ref: Y
            }, B.createElement(N, {
                className: pe
            }, f && B.createElement(w, {
                className: J
            }, f), U, C && B.createElement(w, {
                className: J
            }, C)))
        }
        return B.cloneElement(U, {
            className: _((n = U.props) === null || n === void 0 ? void 0 : n.className, E) || null,
            style: ae(ae({}, (o = U.props) === null || o === void 0 ? void 0 : o.style), V),
            hidden: g
        })
    }),
    tr = ["show"];

function wt(e, t) {
    return a.useMemo(function() {
        var r = {};
        t && (r.show = Ke(t) === "object" && t.formatter ? t.formatter : !!t), r = ae(ae({}, r), e);
        var n = r,
            o = n.show,
            c = Ae(n, tr);
        return ae(ae({}, c), {}, {
            show: !!o,
            showFormatter: typeof o == "function" ? o : void 0,
            strategy: c.strategy || function(i) {
                return i.length
            }
        })
    }, [e, t])
}
var rr = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"],
    nr = a.forwardRef(function(e, t) {
        var r = e.autoComplete,
            n = e.onChange,
            o = e.onFocus,
            c = e.onBlur,
            i = e.onPressEnter,
            l = e.onKeyDown,
            b = e.onKeyUp,
            p = e.prefixCls,
            f = p === void 0 ? "rc-input" : p,
            C = e.disabled,
            E = e.htmlSize,
            V = e.className,
            S = e.maxLength,
            A = e.suffix,
            z = e.showCount,
            I = e.count,
            R = e.type,
            M = R === void 0 ? "text" : R,
            K = e.classes,
            g = e.classNames,
            $ = e.styles,
            d = e.onCompositionStart,
            D = e.onCompositionEnd,
            j = Ae(e, rr),
            y = a.useState(!1),
            P = fe(y, 2),
            W = P[0],
            Q = P[1],
            O = a.useRef(!1),
            N = a.useRef(!1),
            w = a.useRef(null),
            T = a.useRef(null),
            h = function(F) {
                w.current && $t(w.current, F)
            },
            oe = qe(e.defaultValue, {
                value: e.value
            }),
            U = fe(oe, 2),
            Y = U[0],
            q = U[1],
            u = Y == null ? "" : String(Y),
            s = a.useState(null),
            m = fe(s, 2),
            v = m[0],
            te = m[1],
            x = wt(I, z),
            Z = x.max || S,
            J = x.strategy(u),
            ie = !!Z && J > Z;
        a.useImperativeHandle(t, function() {
            var X;
            return {
                focus: h,
                blur: function() {
                    var re;
                    (re = w.current) === null || re === void 0 || re.blur()
                },
                setSelectionRange: function(re, xe, ve) {
                    var me;
                    (me = w.current) === null || me === void 0 || me.setSelectionRange(re, xe, ve)
                },
                select: function() {
                    var re;
                    (re = w.current) === null || re === void 0 || re.select()
                },
                input: w.current,
                nativeElement: ((X = T.current) === null || X === void 0 ? void 0 : X.nativeElement) || w.current
            }
        }), a.useEffect(function() {
            N.current && (N.current = !1), Q(function(X) {
                return X && C ? !1 : X
            })
        }, [C]);
        var pe = function(F, re, xe) {
            var ve = re;
            if (!O.current && x.exceedFormatter && x.max && x.strategy(re) > x.max) {
                if (ve = x.exceedFormatter(re, {
                        max: x.max
                    }), re !== ve) {
                    var me, Se;
                    te([((me = w.current) === null || me === void 0 ? void 0 : me.selectionStart) || 0, ((Se = w.current) === null || Se === void 0 ? void 0 : Se.selectionEnd) || 0])
                }
            } else if (xe.source === "compositionEnd") return;
            q(ve), w.current && Be(w.current, F, n, ve)
        };
        a.useEffect(function() {
            if (v) {
                var X;
                (X = w.current) === null || X === void 0 || X.setSelectionRange.apply(X, Xe(v))
            }
        }, [v]);
        var ge = function(F) {
                pe(F, F.target.value, {
                    source: "change"
                })
            },
            ue = function(F) {
                O.current = !1, pe(F, F.currentTarget.value, {
                    source: "compositionEnd"
                }), D == null || D(F)
            },
            se = function(F) {
                i && F.key === "Enter" && !N.current && (N.current = !0, i(F)), l == null || l(F)
            },
            H = function(F) {
                F.key === "Enter" && (N.current = !1), b == null || b(F)
            },
            G = function(F) {
                Q(!0), o == null || o(F)
            },
            le = function(F) {
                N.current && (N.current = !1), Q(!1), c == null || c(F)
            },
            k = function(F) {
                q(""), h(), w.current && Be(w.current, F, n)
            },
            Ce = ie && "".concat(f, "-out-of-range"),
            Oe = function() {
                var F = dt(e, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "showCount", "count", "classes", "htmlSize", "styles", "classNames", "onClear"]);
                return B.createElement("input", he({
                    autoComplete: r
                }, F, {
                    onChange: ge,
                    onFocus: G,
                    onBlur: le,
                    onKeyDown: se,
                    onKeyUp: H,
                    className: _(f, de({}, "".concat(f, "-disabled"), C), g == null ? void 0 : g.input),
                    style: $ == null ? void 0 : $.input,
                    ref: w,
                    size: E,
                    type: M,
                    onCompositionStart: function(xe) {
                        O.current = !0, d == null || d(xe)
                    },
                    onCompositionEnd: ue
                }))
            },
            _e = function() {
                var F = Number(Z) > 0;
                if (A || x.show) {
                    var re = x.showFormatter ? x.showFormatter({
                        value: u,
                        count: J,
                        maxLength: Z
                    }) : "".concat(J).concat(F ? " / ".concat(Z) : "");
                    return B.createElement(B.Fragment, null, x.show && B.createElement("span", {
                        className: _("".concat(f, "-show-count-suffix"), de({}, "".concat(f, "-show-count-has-suffix"), !!A), g == null ? void 0 : g.count),
                        style: ae({}, $ == null ? void 0 : $.count)
                    }, re), A)
                }
                return null
            };
        return B.createElement(yt, he({}, j, {
            prefixCls: f,
            className: _(V, Ce),
            handleReset: k,
            value: u,
            focused: W,
            triggerFocus: h,
            suffix: _e(),
            disabled: C,
            classes: K,
            classNames: g,
            styles: $,
            ref: T
        }), Oe())
    });
const Et = e => {
    let t;
    return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
        clearIcon: B.createElement(jt, null)
    }), t
};

function Rt(e, t) {
    const r = a.useRef([]),
        n = () => {
            r.current.push(setTimeout(() => {
                var o, c, i, l;
                !((o = e.current) === null || o === void 0) && o.input && ((c = e.current) === null || c === void 0 ? void 0 : c.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"))
            }))
        };
    return a.useEffect(() => (t && n(), () => r.current.forEach(o => {
        o && clearTimeout(o)
    })), []), n
}

function or(e) {
    return !!(e.prefix || e.suffix || e.allowClear || e.showCount)
}
var ar = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Fe = a.forwardRef((e, t) => {
    const {
        prefixCls: r,
        bordered: n = !0,
        status: o,
        size: c,
        disabled: i,
        onBlur: l,
        onFocus: b,
        suffix: p,
        allowClear: f,
        addonAfter: C,
        addonBefore: E,
        className: V,
        style: S,
        styles: A,
        rootClassName: z,
        onChange: I,
        classNames: R,
        variant: M,
        _skipAddonWarning: K
    } = e, g = ar(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant", "_skipAddonWarning"]), {
        getPrefixCls: $,
        direction: d,
        allowClear: D,
        autoComplete: j,
        className: y,
        style: P,
        classNames: W,
        styles: Q
    } = ut("input"), O = $("input", r), N = a.useRef(null), w = ft(O), [T, h, oe] = xt(O, z), [U] = St(O, w), {
        compactSize: Y,
        compactItemClassnames: q
    } = Ue(O, d), u = Pe(k => {
        var Ce;
        return (Ce = c ?? Y) !== null && Ce !== void 0 ? Ce : k
    }), s = B.useContext(Qe), m = i ?? s, {
        status: v,
        hasFeedback: te,
        feedbackIcon: x
    } = a.useContext($e), Z = Ze(v, o), J = or(e) || !!te;
    a.useRef(J);
    const ie = Rt(N, !0),
        pe = k => {
            ie(), l == null || l(k)
        },
        ge = k => {
            ie(), b == null || b(k)
        },
        ue = k => {
            ie(), I == null || I(k)
        },
        se = (te || p) && B.createElement(B.Fragment, null, p, te && x),
        H = Et(f ?? D),
        [G, le] = pt("input", M, n);
    return T(U(B.createElement(nr, Object.assign({
        ref: Ye(t, N),
        prefixCls: O,
        autoComplete: j
    }, g, {
        disabled: m,
        onBlur: pe,
        onFocus: ge,
        style: Object.assign(Object.assign({}, P), S),
        styles: Object.assign(Object.assign({}, Q), A),
        suffix: se,
        allowClear: H,
        className: _(V, z, oe, w, q, y),
        onChange: ue,
        addonBefore: E && B.createElement(ke, {
            form: !0,
            space: !0
        }, E),
        addonAfter: C && B.createElement(ke, {
            form: !0,
            space: !0
        }, C),
        classNames: Object.assign(Object.assign(Object.assign({}, R), W), {
            input: _({
                [`${O}-sm`]: u === "small",
                [`${O}-lg`]: u === "large",
                [`${O}-rtl`]: d === "rtl"
            }, R == null ? void 0 : R.input, W.input, h),
            variant: _({
                [`${O}-${G}`]: le
            }, Ve(O, Z)),
            affixWrapper: _({
                [`${O}-affix-wrapper-sm`]: u === "small",
                [`${O}-affix-wrapper-lg`]: u === "large",
                [`${O}-affix-wrapper-rtl`]: d === "rtl"
            }, h),
            wrapper: _({
                [`${O}-group-rtl`]: d === "rtl"
            }, h),
            groupWrapper: _({
                [`${O}-group-wrapper-sm`]: u === "small",
                [`${O}-group-wrapper-lg`]: u === "large",
                [`${O}-group-wrapper-rtl`]: d === "rtl",
                [`${O}-group-wrapper-${G}`]: le
            }, Ve(`${O}-group-wrapper`, Z, te), h)
        })
    }))))
});
var ir = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                }
            }]
        },
        name: "eye",
        theme: "outlined"
    },
    lr = function(t, r) {
        return a.createElement(Ge, he({}, t, {
            ref: r,
            icon: ir
        }))
    },
    sr = a.forwardRef(lr);
const cr = e => {
        const {
            getPrefixCls: t,
            direction: r
        } = a.useContext(Ee), {
            prefixCls: n,
            className: o
        } = e, c = t("input-group", n), i = t("input"), [l, b, p] = St(i), f = _(c, p, {
            [`${c}-lg`]: e.size === "large",
            [`${c}-sm`]: e.size === "small",
            [`${c}-compact`]: e.compact,
            [`${c}-rtl`]: r === "rtl"
        }, b, o), C = a.useContext($e), E = a.useMemo(() => Object.assign(Object.assign({}, C), {
            isFormItemInput: !1
        }), [C]);
        return l(a.createElement("span", {
            className: f,
            style: e.style,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            onFocus: e.onFocus,
            onBlur: e.onBlur
        }, a.createElement($e.Provider, {
            value: E
        }, e.children)))
    },
    dr = e => {
        const {
            componentCls: t,
            paddingXS: r
        } = e;
        return {
            [t]: {
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "nowrap",
                columnGap: r,
                [`${t}-input-wrapper`]: {
                    position: "relative",
                    [`${t}-mask-icon`]: {
                        position: "absolute",
                        zIndex: "1",
                        top: "50%",
                        right: "50%",
                        transform: "translate(50%, -50%)",
                        pointerEvents: "none"
                    },
                    [`${t}-mask-input`]: {
                        color: "transparent",
                        caretColor: e.colorText
                    },
                    [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
                        "-webkit-appearance": "none",
                        margin: 0
                    },
                    [`${t}-mask-input[type=number]`]: {
                        "-moz-appearance": "textfield"
                    }
                },
                "&-rtl": {
                    direction: "rtl"
                },
                [`${t}-input`]: {
                    textAlign: "center",
                    paddingInline: e.paddingXXS
                },
                [`&${t}-sm ${t}-input`]: {
                    paddingInline: e.calc(e.paddingXXS).div(2).equal()
                },
                [`&${t}-lg ${t}-input`]: {
                    paddingInline: e.paddingXS
                }
            }
        }
    },
    ur = je(["Input", "OTP"], e => {
        const t = ye(e, Ne(e));
        return dr(t)
    }, Te);
var fr = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const pr = a.forwardRef((e, t) => {
    const {
        className: r,
        value: n,
        onChange: o,
        onActiveChange: c,
        index: i,
        mask: l
    } = e, b = fr(e, ["className", "value", "onChange", "onActiveChange", "index", "mask"]), {
        getPrefixCls: p
    } = a.useContext(Ee), f = p("otp"), C = typeof l == "string" ? l : n, E = a.useRef(null);
    a.useImperativeHandle(t, () => E.current);
    const V = z => {
            o(i, z.target.value)
        },
        S = () => {
            Le(() => {
                var z;
                const I = (z = E.current) === null || z === void 0 ? void 0 : z.input;
                document.activeElement === I && I && I.select()
            })
        },
        A = z => {
            const {
                key: I,
                ctrlKey: R,
                metaKey: M
            } = z;
            I === "ArrowLeft" ? c(i - 1) : I === "ArrowRight" ? c(i + 1) : I === "z" && (R || M) ? z.preventDefault() : I === "Backspace" && !n && c(i - 1), S()
        };
    return a.createElement("span", {
        className: `${f}-input-wrapper`,
        role: "presentation"
    }, l && n !== "" && n !== void 0 && a.createElement("span", {
        className: `${f}-mask-icon`,
        "aria-hidden": "true"
    }, C), a.createElement(Fe, Object.assign({
        "aria-label": `OTP Input ${i+1}`,
        type: l === !0 ? "password" : "text"
    }, b, {
        ref: E,
        value: n,
        onInput: V,
        onFocus: S,
        onKeyDown: A,
        onMouseDown: S,
        onMouseUp: S,
        className: _(r, {
            [`${f}-mask-input`]: l
        })
    })))
});
var gr = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};

function Ie(e) {
    return (e || "").split("")
}
const mr = e => {
        const {
            index: t,
            prefixCls: r,
            separator: n
        } = e, o = typeof n == "function" ? n(t) : n;
        return o ? a.createElement("span", {
            className: `${r}-separator`
        }, o) : null
    },
    vr = a.forwardRef((e, t) => {
        const {
            prefixCls: r,
            length: n = 6,
            size: o,
            defaultValue: c,
            value: i,
            onChange: l,
            formatter: b,
            separator: p,
            variant: f,
            disabled: C,
            status: E,
            autoFocus: V,
            mask: S,
            type: A,
            onInput: z,
            inputMode: I
        } = e, R = gr(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "separator", "variant", "disabled", "status", "autoFocus", "mask", "type", "onInput", "inputMode"]), {
            getPrefixCls: M,
            direction: K
        } = a.useContext(Ee), g = M("otp", r), $ = At(R, {
            aria: !0,
            data: !0,
            attr: !0
        }), [d, D, j] = ur(g), y = Pe(s => o ?? s), P = a.useContext($e), W = Ze(P.status, E), Q = a.useMemo(() => Object.assign(Object.assign({}, P), {
            status: W,
            hasFeedback: !1,
            feedbackIcon: null
        }), [P, W]), O = a.useRef(null), N = a.useRef({});
        a.useImperativeHandle(t, () => ({
            focus: () => {
                var s;
                (s = N.current[0]) === null || s === void 0 || s.focus()
            },
            blur: () => {
                var s;
                for (let m = 0; m < n; m += 1)(s = N.current[m]) === null || s === void 0 || s.blur()
            },
            nativeElement: O.current
        }));
        const w = s => b ? b(s) : s,
            [T, h] = a.useState(() => Ie(w(c || "")));
        a.useEffect(() => {
            i !== void 0 && h(Ie(i))
        }, [i]);
        const oe = et(s => {
                h(s), z && z(s), l && s.length === n && s.every(m => m) && s.some((m, v) => T[v] !== m) && l(s.join(""))
            }),
            U = et((s, m) => {
                let v = Xe(T);
                for (let x = 0; x < s; x += 1) v[x] || (v[x] = "");
                m.length <= 1 ? v[s] = m : v = v.slice(0, s).concat(Ie(m)), v = v.slice(0, n);
                for (let x = v.length - 1; x >= 0 && !v[x]; x -= 1) v.pop();
                const te = w(v.map(x => x || " ").join(""));
                return v = Ie(te).map((x, Z) => x === " " && !v[Z] ? v[Z] : x), v
            }),
            Y = (s, m) => {
                var v;
                const te = U(s, m),
                    x = Math.min(s + m.length, n - 1);
                x !== s && te[s] !== void 0 && ((v = N.current[x]) === null || v === void 0 || v.focus()), oe(te)
            },
            q = s => {
                var m;
                (m = N.current[s]) === null || m === void 0 || m.focus()
            },
            u = {
                variant: f,
                disabled: C,
                status: W,
                mask: S,
                type: A,
                inputMode: I
            };
        return d(a.createElement("div", Object.assign({}, $, {
            ref: O,
            className: _(g, {
                [`${g}-sm`]: y === "small",
                [`${g}-lg`]: y === "large",
                [`${g}-rtl`]: K === "rtl"
            }, j, D),
            role: "group"
        }), a.createElement($e.Provider, {
            value: Q
        }, Array.from({
            length: n
        }).map((s, m) => {
            const v = `otp-${m}`,
                te = T[m] || "";
            return a.createElement(a.Fragment, {
                key: v
            }, a.createElement(pr, Object.assign({
                ref: x => {
                    N.current[m] = x
                },
                index: m,
                size: y,
                htmlSize: 1,
                className: `${g}-input`,
                onChange: Y,
                value: te,
                onActiveChange: q,
                autoFocus: m === 0 && V
            }, u)), m < n - 1 && a.createElement(mr, {
                separator: p,
                index: m,
                prefixCls: g
            }))
        }))))
    });
var br = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
                }
            }]
        },
        name: "eye-invisible",
        theme: "outlined"
    },
    hr = function(t, r) {
        return a.createElement(Ge, he({}, t, {
            ref: r,
            icon: br
        }))
    },
    Cr = a.forwardRef(hr),
    xr = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };
const Sr = e => e ? a.createElement(sr, null) : a.createElement(Cr, null),
    $r = {
        click: "onClick",
        hover: "onMouseOver"
    },
    yr = a.forwardRef((e, t) => {
        const {
            disabled: r,
            action: n = "click",
            visibilityToggle: o = !0,
            iconRender: c = Sr,
            suffix: i
        } = e, l = a.useContext(Qe), b = r ?? l, p = typeof o == "object" && o.visible !== void 0, [f, C] = a.useState(() => p ? o.visible : !1), E = a.useRef(null);
        a.useEffect(() => {
            p && C(o.visible)
        }, [p, o]);
        const V = Rt(E),
            S = () => {
                var P;
                if (b) return;
                f && V();
                const W = !f;
                C(W), typeof o == "object" && ((P = o.onVisibleChange) === null || P === void 0 || P.call(o, W))
            },
            A = P => {
                const W = $r[n] || "",
                    Q = c(f),
                    O = {
                        [W]: S,
                        className: `${P}-icon`,
                        key: "passwordIcon",
                        onMouseDown: N => {
                            N.preventDefault()
                        },
                        onMouseUp: N => {
                            N.preventDefault()
                        }
                    };
                return a.cloneElement(a.isValidElement(Q) ? Q : a.createElement("span", null, Q), O)
            },
            {
                className: z,
                prefixCls: I,
                inputPrefixCls: R,
                size: M
            } = e,
            K = xr(e, ["className", "prefixCls", "inputPrefixCls", "size"]),
            {
                getPrefixCls: g
            } = a.useContext(Ee),
            $ = g("input", R),
            d = g("input-password", I),
            D = o && A(d),
            j = _(d, z, {
                [`${d}-${M}`]: !!M
            }),
            y = Object.assign(Object.assign({}, dt(K, ["suffix", "iconRender", "visibilityToggle"])), {
                type: f ? "text" : "password",
                className: j,
                prefixCls: $,
                suffix: a.createElement(a.Fragment, null, D, i)
            });
        return M && (y.size = M), a.createElement(Fe, Object.assign({
            ref: Ye(t, E)
        }, y))
    });
var wr = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Er = a.forwardRef((e, t) => {
    const {
        prefixCls: r,
        inputPrefixCls: n,
        className: o,
        size: c,
        suffix: i,
        enterButton: l = !1,
        addonAfter: b,
        loading: p,
        disabled: f,
        onSearch: C,
        onChange: E,
        onCompositionStart: V,
        onCompositionEnd: S,
        variant: A,
        onPressEnter: z
    } = e, I = wr(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd", "variant", "onPressEnter"]), {
        getPrefixCls: R,
        direction: M
    } = a.useContext(Ee), K = a.useRef(!1), g = R("input-search", r), $ = R("input", n), {
        compactSize: d
    } = Ue(g, M), D = Pe(u => {
        var s;
        return (s = c ?? d) !== null && s !== void 0 ? s : u
    }), j = a.useRef(null), y = u => {
        u != null && u.target && u.type === "click" && C && C(u.target.value, u, {
            source: "clear"
        }), E == null || E(u)
    }, P = u => {
        var s;
        document.activeElement === ((s = j.current) === null || s === void 0 ? void 0 : s.input) && u.preventDefault()
    }, W = u => {
        var s, m;
        C && C((m = (s = j.current) === null || s === void 0 ? void 0 : s.input) === null || m === void 0 ? void 0 : m.value, u, {
            source: "input"
        })
    }, Q = u => {
        K.current || p || (z == null || z(u), W(u))
    }, O = typeof l == "boolean" ? a.createElement(_t, null) : null, N = `${g}-button`;
    let w;
    const T = l || {},
        h = T.type && T.type.__ANT_BUTTON === !0;
    h || T.type === "button" ? w = tt(T, Object.assign({
        onMouseDown: P,
        onClick: u => {
            var s, m;
            (m = (s = T == null ? void 0 : T.props) === null || s === void 0 ? void 0 : s.onClick) === null || m === void 0 || m.call(s, u), W(u)
        },
        key: "enterButton"
    }, h ? {
        className: N,
        size: D
    } : {})) : w = a.createElement(Pt, {
        className: N,
        color: l ? "primary" : "default",
        size: D,
        disabled: f,
        key: "enterButton",
        onMouseDown: P,
        onClick: W,
        loading: p,
        icon: O,
        variant: A === "borderless" || A === "filled" || A === "underlined" ? "text" : l ? "solid" : void 0
    }, l), b && (w = [w, tt(b, {
        key: "addonAfter"
    })]);
    const oe = _(g, {
            [`${g}-rtl`]: M === "rtl",
            [`${g}-${D}`]: !!D,
            [`${g}-with-button`]: !!l
        }, o),
        U = u => {
            K.current = !0, V == null || V(u)
        },
        Y = u => {
            K.current = !1, S == null || S(u)
        },
        q = Object.assign(Object.assign({}, I), {
            className: oe,
            prefixCls: $,
            type: "search",
            size: D,
            variant: A,
            onPressEnter: Q,
            onCompositionStart: U,
            onCompositionEnd: Y,
            addonAfter: w,
            suffix: i,
            onChange: y,
            disabled: f,
            _skipAddonWarning: !0
        });
    return a.createElement(Fe, Object.assign({
        ref: Ye(j, t)
    }, q))
});
var Rr = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
    Or = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"],
    Me = {},
    ce;

function zr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
    if (t && Me[r]) return Me[r];
    var n = window.getComputedStyle(e),
        o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"),
        c = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")),
        i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")),
        l = Or.map(function(p) {
            return "".concat(p, ":").concat(n.getPropertyValue(p))
        }).join(";"),
        b = {
            sizingStyle: l,
            paddingSize: c,
            borderSize: i,
            boxSizing: o
        };
    return t && r && (Me[r] = b), b
}

function Ir(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
        n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    ce || (ce = document.createElement("textarea"), ce.setAttribute("tab-index", "-1"), ce.setAttribute("aria-hidden", "true"), ce.setAttribute("name", "hiddenTextarea"), document.body.appendChild(ce)), e.getAttribute("wrap") ? ce.setAttribute("wrap", e.getAttribute("wrap")) : ce.removeAttribute("wrap");
    var o = zr(e, t),
        c = o.paddingSize,
        i = o.borderSize,
        l = o.boxSizing,
        b = o.sizingStyle;
    ce.setAttribute("style", "".concat(b, ";").concat(Rr)), ce.value = e.value || e.placeholder || "";
    var p = void 0,
        f = void 0,
        C, E = ce.scrollHeight;
    if (l === "border-box" ? E += i : l === "content-box" && (E -= c), r !== null || n !== null) {
        ce.value = " ";
        var V = ce.scrollHeight - c;
        r !== null && (p = V * r, l === "border-box" && (p = p + c + i), E = Math.max(p, E)), n !== null && (f = V * n, l === "border-box" && (f = f + c + i), C = E > f ? "" : "hidden", E = Math.min(f, E))
    }
    var S = {
        height: E,
        overflowY: C,
        resize: "none"
    };
    return p && (S.minHeight = p), f && (S.maxHeight = f), S
}
var Br = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"],
    We = 0,
    He = 1,
    De = 2,
    jr = a.forwardRef(function(e, t) {
        var r = e,
            n = r.prefixCls,
            o = r.defaultValue,
            c = r.value,
            i = r.autoSize,
            l = r.onResize,
            b = r.className,
            p = r.style,
            f = r.disabled,
            C = r.onChange;
        r.onInternalAutoSize;
        var E = Ae(r, Br),
            V = qe(o, {
                value: c,
                postState: function(u) {
                    return u ?? ""
                }
            }),
            S = fe(V, 2),
            A = S[0],
            z = S[1],
            I = function(u) {
                z(u.target.value), C == null || C(u)
            },
            R = a.useRef();
        a.useImperativeHandle(t, function() {
            return {
                textArea: R.current
            }
        });
        var M = a.useMemo(function() {
                return i && Ke(i) === "object" ? [i.minRows, i.maxRows] : []
            }, [i]),
            K = fe(M, 2),
            g = K[0],
            $ = K[1],
            d = !!i,
            D = a.useState(De),
            j = fe(D, 2),
            y = j[0],
            P = j[1],
            W = a.useState(),
            Q = fe(W, 2),
            O = Q[0],
            N = Q[1],
            w = function() {
                P(We)
            };
        rt(function() {
            d && w()
        }, [c, g, $, d]), rt(function() {
            if (y === We) P(He);
            else if (y === He) {
                var q = Ir(R.current, !1, g, $);
                P(De), N(q)
            }
        }, [y]);
        var T = a.useRef(),
            h = function() {
                Le.cancel(T.current)
            },
            oe = function(u) {
                y === De && (l == null || l(u), i && (h(), T.current = Le(function() {
                    w()
                })))
            };
        a.useEffect(function() {
            return h
        }, []);
        var U = d ? O : null,
            Y = ae(ae({}, p), U);
        return (y === We || y === He) && (Y.overflowY = "hidden", Y.overflowX = "hidden"), a.createElement(Nt, {
            onResize: oe,
            disabled: !(i || l)
        }, a.createElement("textarea", he({}, E, {
            ref: R,
            style: Y,
            className: _(n, b, de({}, "".concat(n, "-disabled"), f)),
            disabled: f,
            value: A,
            onChange: I
        })))
    }),
    Ar = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"],
    Pr = B.forwardRef(function(e, t) {
        var r, n = e.defaultValue,
            o = e.value,
            c = e.onFocus,
            i = e.onBlur,
            l = e.onChange,
            b = e.allowClear,
            p = e.maxLength,
            f = e.onCompositionStart,
            C = e.onCompositionEnd,
            E = e.suffix,
            V = e.prefixCls,
            S = V === void 0 ? "rc-textarea" : V,
            A = e.showCount,
            z = e.count,
            I = e.className,
            R = e.style,
            M = e.disabled,
            K = e.hidden,
            g = e.classNames,
            $ = e.styles,
            d = e.onResize,
            D = e.onClear,
            j = e.onPressEnter,
            y = e.readOnly,
            P = e.autoSize,
            W = e.onKeyDown,
            Q = Ae(e, Ar),
            O = qe(n, {
                value: o,
                defaultValue: n
            }),
            N = fe(O, 2),
            w = N[0],
            T = N[1],
            h = w == null ? "" : String(w),
            oe = B.useState(!1),
            U = fe(oe, 2),
            Y = U[0],
            q = U[1],
            u = B.useRef(!1),
            s = B.useState(null),
            m = fe(s, 2),
            v = m[0],
            te = m[1],
            x = a.useRef(null),
            Z = a.useRef(null),
            J = function() {
                var L;
                return (L = Z.current) === null || L === void 0 ? void 0 : L.textArea
            },
            ie = function() {
                J().focus()
            };
        a.useImperativeHandle(t, function() {
            var ne;
            return {
                resizableTextArea: Z.current,
                focus: ie,
                blur: function() {
                    J().blur()
                },
                nativeElement: ((ne = x.current) === null || ne === void 0 ? void 0 : ne.nativeElement) || J()
            }
        }), a.useEffect(function() {
            q(function(ne) {
                return !M && ne
            })
        }, [M]);
        var pe = B.useState(null),
            ge = fe(pe, 2),
            ue = ge[0],
            se = ge[1];
        B.useEffect(function() {
            if (ue) {
                var ne;
                (ne = J()).setSelectionRange.apply(ne, Xe(ue))
            }
        }, [ue]);
        var H = wt(z, A),
            G = (r = H.max) !== null && r !== void 0 ? r : p,
            le = Number(G) > 0,
            k = H.strategy(h),
            Ce = !!G && k > G,
            Oe = function(L, be) {
                var ze = be;
                !u.current && H.exceedFormatter && H.max && H.strategy(be) > H.max && (ze = H.exceedFormatter(be, {
                    max: H.max
                }), be !== ze && se([J().selectionStart || 0, J().selectionEnd || 0])), T(ze), Be(L.currentTarget, L, l, ze)
            },
            _e = function(L) {
                u.current = !0, f == null || f(L)
            },
            X = function(L) {
                u.current = !1, Oe(L, L.currentTarget.value), C == null || C(L)
            },
            F = function(L) {
                Oe(L, L.target.value)
            },
            re = function(L) {
                L.key === "Enter" && j && j(L), W == null || W(L)
            },
            xe = function(L) {
                q(!0), c == null || c(L)
            },
            ve = function(L) {
                q(!1), i == null || i(L)
            },
            me = function(L) {
                T(""), ie(), Be(J(), L, l)
            },
            Se = E,
            we;
        H.show && (H.showFormatter ? we = H.showFormatter({
            value: h,
            count: k,
            maxLength: G
        }) : we = "".concat(k).concat(le ? " / ".concat(G) : ""), Se = B.createElement(B.Fragment, null, Se, B.createElement("span", {
            className: _("".concat(S, "-data-count"), g == null ? void 0 : g.count),
            style: $ == null ? void 0 : $.count
        }, we)));
        var Ot = function(L) {
                var be;
                d == null || d(L), (be = J()) !== null && be !== void 0 && be.style.height && te(!0)
            },
            zt = !P && !A && !b;
        return B.createElement(yt, {
            ref: x,
            value: h,
            allowClear: b,
            handleReset: me,
            suffix: Se,
            prefixCls: S,
            classNames: ae(ae({}, g), {}, {
                affixWrapper: _(g == null ? void 0 : g.affixWrapper, de(de({}, "".concat(S, "-show-count"), A), "".concat(S, "-textarea-allow-clear"), b))
            }),
            disabled: M,
            focused: Y,
            className: _(I, Ce && "".concat(S, "-out-of-range")),
            style: ae(ae({}, R), v && !zt ? {
                height: "auto"
            } : {}),
            dataAttrs: {
                affixWrapper: {
                    "data-count": typeof we == "string" ? we : void 0
                }
            },
            hidden: K,
            readOnly: y,
            onClear: D
        }, B.createElement(jr, he({}, Q, {
            autoSize: P,
            maxLength: p,
            onKeyDown: re,
            onChange: F,
            onFocus: xe,
            onBlur: ve,
            onCompositionStart: _e,
            onCompositionEnd: X,
            className: _(g == null ? void 0 : g.textarea),
            style: ae(ae({}, $ == null ? void 0 : $.textarea), {}, {
                resize: R == null ? void 0 : R.resize
            }),
            disabled: M,
            prefixCls: S,
            onResize: Ot,
            ref: Z,
            readOnly: y
        })))
    });
const Nr = e => {
        const {
            componentCls: t,
            paddingLG: r
        } = e, n = `${t}-textarea`;
        return {
            [`textarea${t}`]: {
                maxWidth: "100%",
                height: "auto",
                minHeight: e.controlHeight,
                lineHeight: e.lineHeight,
                verticalAlign: "bottom",
                transition: `all ${e.motionDurationSlow}`,
                resize: "vertical",
                [`&${t}-mouse-active`]: {
                    transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
                }
            },
            [`${t}-textarea-affix-wrapper-resize-dirty`]: {
                width: "auto"
            },
            [n]: {
                position: "relative",
                "&-show-count": {
                    [`${t}-data-count`]: {
                        position: "absolute",
                        bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
                        insetInlineEnd: 0,
                        color: e.colorTextDescription,
                        whiteSpace: "nowrap",
                        pointerEvents: "none"
                    }
                },
                [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
                    paddingInlineEnd: r
                },
                [`&-affix-wrapper${t}-affix-wrapper`]: {
                    padding: 0,
                    [`> textarea${t}`]: {
                        fontSize: "inherit",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
                        "&:focus": {
                            boxShadow: "none !important"
                        }
                    },
                    [`${t}-suffix`]: {
                        margin: 0,
                        "> *:not(:last-child)": {
                            marginInline: 0
                        },
                        [`${t}-clear-icon`]: {
                            position: "absolute",
                            insetInlineEnd: e.paddingInline,
                            insetBlockStart: e.paddingXS
                        },
                        [`${n}-suffix`]: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: e.paddingInline,
                            bottom: 0,
                            zIndex: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "auto",
                            pointerEvents: "none"
                        }
                    }
                },
                [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
                    [`${t}-suffix`]: {
                        [`${t}-data-count`]: {
                            direction: "ltr",
                            insetInlineStart: 0
                        }
                    }
                },
                [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
                    [`${t}-suffix`]: {
                        [`${t}-clear-icon`]: {
                            insetInlineEnd: e.paddingInlineSM
                        }
                    }
                }
            }
        }
    },
    Tr = je(["Input", "TextArea"], e => {
        const t = ye(e, Ne(e));
        return Nr(t)
    }, Te, {
        resetFont: !1
    });
var Fr = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const _r = a.forwardRef((e, t) => {
        var r;
        const {
            prefixCls: n,
            bordered: o = !0,
            size: c,
            disabled: i,
            status: l,
            allowClear: b,
            classNames: p,
            rootClassName: f,
            className: C,
            style: E,
            styles: V,
            variant: S,
            showCount: A,
            onMouseDown: z,
            onResize: I
        } = e, R = Fr(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]), {
            getPrefixCls: M,
            direction: K,
            allowClear: g,
            autoComplete: $,
            className: d,
            style: D,
            classNames: j,
            styles: y
        } = ut("textArea"), P = a.useContext(Qe), W = i ?? P, {
            status: Q,
            hasFeedback: O,
            feedbackIcon: N
        } = a.useContext($e), w = Ze(Q, l), T = a.useRef(null);
        a.useImperativeHandle(t, () => {
            var H;
            return {
                resizableTextArea: (H = T.current) === null || H === void 0 ? void 0 : H.resizableTextArea,
                focus: G => {
                    var le, k;
                    $t((k = (le = T.current) === null || le === void 0 ? void 0 : le.resizableTextArea) === null || k === void 0 ? void 0 : k.textArea, G)
                },
                blur: () => {
                    var G;
                    return (G = T.current) === null || G === void 0 ? void 0 : G.blur()
                }
            }
        });
        const h = M("input", n),
            oe = ft(h),
            [U, Y, q] = xt(h, f),
            [u] = Tr(h, oe),
            {
                compactSize: s,
                compactItemClassnames: m
            } = Ue(h, K),
            v = Pe(H => {
                var G;
                return (G = c ?? s) !== null && G !== void 0 ? G : H
            }),
            [te, x] = pt("textArea", S, o),
            Z = Et(b ?? g),
            [J, ie] = a.useState(!1),
            [pe, ge] = a.useState(!1),
            ue = H => {
                ie(!0), z == null || z(H);
                const G = () => {
                    ie(!1), document.removeEventListener("mouseup", G)
                };
                document.addEventListener("mouseup", G)
            },
            se = H => {
                var G, le;
                if (I == null || I(H), J && typeof getComputedStyle == "function") {
                    const k = (le = (G = T.current) === null || G === void 0 ? void 0 : G.nativeElement) === null || le === void 0 ? void 0 : le.querySelector("textarea");
                    k && getComputedStyle(k).resize === "both" && ge(!0)
                }
            };
        return U(u(a.createElement(Pr, Object.assign({
            autoComplete: $
        }, R, {
            style: Object.assign(Object.assign({}, D), E),
            styles: Object.assign(Object.assign({}, y), V),
            disabled: W,
            allowClear: Z,
            className: _(q, oe, C, f, m, d, pe && `${h}-textarea-affix-wrapper-resize-dirty`),
            classNames: Object.assign(Object.assign(Object.assign({}, p), j), {
                textarea: _({
                    [`${h}-sm`]: v === "small",
                    [`${h}-lg`]: v === "large"
                }, Y, p == null ? void 0 : p.textarea, j.textarea, J && `${h}-mouse-active`),
                variant: _({
                    [`${h}-${te}`]: x
                }, Ve(h, w)),
                affixWrapper: _(`${h}-textarea-affix-wrapper`, {
                    [`${h}-affix-wrapper-rtl`]: K === "rtl",
                    [`${h}-affix-wrapper-sm`]: v === "small",
                    [`${h}-affix-wrapper-lg`]: v === "large",
                    [`${h}-textarea-show-count`]: A || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
                }, Y)
            }),
            prefixCls: h,
            suffix: O && a.createElement("span", {
                className: `${h}-textarea-suffix`
            }, N),
            showCount: A,
            ref: T,
            onResize: se,
            onMouseDown: ue
        }))))
    }),
    Re = Fe;
Re.Group = cr;
Re.Search = Er;
Re.TextArea = _r;
Re.Password = yr;
Re.OTP = vr;
export {
    yt as B, Re as I, _t as R, _r as T, Te as a, gt as b, Je as c, ht as d, Fe as e, Wt as f, Ct as g, Gt as h, Ne as i, Lt as j, Dt as k, Kt as l, Ve as m, Ze as n, qt as o, Ht as p, Vt as q, sr as r, $t as t
};