import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    s as r
} from "./assertThisInitialized.js";
import {
    E as i,
    Ft as a,
    Ut as o,
    X as s,
    _ as c,
    b as l,
    gt as u,
    ht as d,
    k as f,
    m as p,
    nt as m,
    s as h,
    tt as g,
    x as _
} from "./Compact.js";
import {
    c as v,
    m as y,
    s as ee,
    t as b
} from "./color.js";
import {
    A as te,
    C as x,
    D as ne,
    E as S,
    b as C,
    g as re,
    t as ie
} from "./ContextIsolator.js";
import {
    t as ae
} from "./es-1.js";

function w(e, t) {
    return y.reduce((n, r) => {
        let i = e[`${r}1`],
            a = e[`${r}3`],
            o = e[`${r}6`],
            s = e[`${r}7`];
        return Object.assign(Object.assign({}, n), t(r, {
            lightColor: i,
            lightBorderColor: a,
            darkColor: o,
            textColor: s
        }))
    }, {})
}
var T = e(t()),
    E = e(o());
n(), m();
var D = e => e instanceof b ? e : new b(e);

function O(e) {
    var t = e.children,
        n = e.prefixCls,
        r = e.id,
        i = e.overlayInnerStyle,
        a = e.bodyClassName,
        o = e.className,
        s = e.style;
    return T.createElement(`div`, {
        className: (0, E.default)(`${n}-content`, o),
        style: s
    }, T.createElement(`div`, {
        className: (0, E.default)(`${n}-inner`, a),
        id: r,
        role: `tooltip`,
        style: i
    }, typeof t == `function` ? t() : t))
}
var k = {
        shiftX: 64,
        adjustY: 1
    },
    A = {
        adjustX: 1,
        shiftY: !0
    },
    j = [0, 0],
    M = {
        left: {
            points: [`cr`, `cl`],
            overflow: A,
            offset: [-4, 0],
            targetOffset: j
        },
        right: {
            points: [`cl`, `cr`],
            overflow: A,
            offset: [4, 0],
            targetOffset: j
        },
        top: {
            points: [`bc`, `tc`],
            overflow: k,
            offset: [0, -4],
            targetOffset: j
        },
        bottom: {
            points: [`tc`, `bc`],
            overflow: k,
            offset: [0, 4],
            targetOffset: j
        },
        topLeft: {
            points: [`bl`, `tl`],
            overflow: k,
            offset: [0, -4],
            targetOffset: j
        },
        leftTop: {
            points: [`tr`, `tl`],
            overflow: A,
            offset: [-4, 0],
            targetOffset: j
        },
        topRight: {
            points: [`br`, `tr`],
            overflow: k,
            offset: [0, -4],
            targetOffset: j
        },
        rightTop: {
            points: [`tl`, `tr`],
            overflow: A,
            offset: [4, 0],
            targetOffset: j
        },
        bottomRight: {
            points: [`tr`, `br`],
            overflow: k,
            offset: [0, 4],
            targetOffset: j
        },
        rightBottom: {
            points: [`bl`, `br`],
            overflow: A,
            offset: [4, 0],
            targetOffset: j
        },
        bottomLeft: {
            points: [`tl`, `bl`],
            overflow: k,
            offset: [0, 4],
            targetOffset: j
        },
        leftBottom: {
            points: [`br`, `bl`],
            overflow: A,
            offset: [-4, 0],
            targetOffset: j
        }
    },
    N = [`overlayClassName`, `trigger`, `mouseEnterDelay`, `mouseLeaveDelay`, `overlayStyle`, `prefixCls`, `children`, `onVisibleChange`, `afterVisibleChange`, `transitionName`, `animation`, `motion`, `placement`, `align`, `destroyTooltipOnHide`, `defaultVisible`, `getTooltipContainer`, `overlayInnerStyle`, `arrowContent`, `overlay`, `id`, `showArrow`, `classNames`, `styles`],
    oe = (0, T.forwardRef)(function(e, t) {
        var n = e.overlayClassName,
            i = e.trigger,
            o = i === void 0 ? [`hover`] : i,
            s = e.mouseEnterDelay,
            c = s === void 0 ? 0 : s,
            l = e.mouseLeaveDelay,
            u = l === void 0 ? .1 : l,
            d = e.overlayStyle,
            f = e.prefixCls,
            p = f === void 0 ? `rc-tooltip` : f,
            m = e.children,
            h = e.onVisibleChange,
            _ = e.afterVisibleChange,
            v = e.transitionName,
            y = e.animation,
            ee = e.motion,
            b = e.placement,
            te = b === void 0 ? `right` : b,
            x = e.align,
            ne = x === void 0 ? {} : x,
            S = e.destroyTooltipOnHide,
            C = S !== void 0 && S,
            ie = e.defaultVisible,
            w = e.getTooltipContainer,
            D = e.overlayInnerStyle;
        e.arrowContent;
        var k = e.overlay,
            A = e.id,
            j = e.showArrow,
            oe = j === void 0 || j,
            P = e.classNames,
            F = e.styles,
            I = g(e, N),
            L = re(A),
            R = (0, T.useRef)(null);
        (0, T.useImperativeHandle)(t, function() {
            return R.current
        });
        var z = a({}, I);
        return `visible` in e && (z.popupVisible = e.visible), T.createElement(ae, r({
            popupClassName: (0, E.default)(n, P == null ? void 0 : P.root),
            prefixCls: p,
            popup: function() {
                return T.createElement(O, {
                    key: `content`,
                    prefixCls: p,
                    id: L,
                    bodyClassName: P == null ? void 0 : P.body,
                    overlayInnerStyle: a(a({}, D), F == null ? void 0 : F.body)
                }, k)
            },
            action: o,
            builtinPlacements: M,
            popupPlacement: te,
            ref: R,
            popupAlign: ne,
            getPopupContainer: w,
            onPopupVisibleChange: h,
            afterPopupVisibleChange: _,
            popupTransitionName: v,
            popupAnimation: y,
            popupMotion: ee,
            defaultPopupVisible: ie,
            autoDestroy: C,
            mouseLeaveDelay: u,
            popupStyle: a(a({}, d), F == null ? void 0 : F.root),
            mouseEnterDelay: c,
            arrow: oe
        }, z), function() {
            var e = T.Children.only(m),
                t = (e == null ? void 0 : e.props) || {},
                n = a(a({}, t), {}, {
                    "aria-describedby": k ? L : null
                });
            return T.cloneElement(m, n)
        }())
    });

function P(e) {
    let {
        sizePopupArrow: t,
        borderRadiusXS: n,
        borderRadiusOuter: r
    } = e, i = t / 2, a = i, o = r * 1 / Math.sqrt(2), s = i - r * (1 - 1 / Math.sqrt(2)), c = i - 1 / Math.sqrt(2) * n, l = r * (Math.sqrt(2) - 1) + 1 / Math.sqrt(2) * n, u = 2 * i - c, d = l, f = 2 * i - o, p = s, m = 2 * i - 0, h = a, g = i * Math.sqrt(2) + r * (Math.sqrt(2) - 2), _ = r * (Math.sqrt(2) - 1), v = `polygon(${_}px 100%, 50% ${_}px, ${2*i-_}px 100%, ${_}px 100%)`;
    return {
        arrowShadowWidth: g,
        arrowPath: `path('M 0 ${a} A ${r} ${r} 0 0 0 ${o} ${s} L ${c} ${l} A ${n} ${n} 0 0 1 ${u} ${d} L ${f} ${p} A ${r} ${r} 0 0 0 ${m} ${h} Z')`,
        arrowPolygon: v
    }
}
var F = (e, t, n) => {
    let {
        sizePopupArrow: r,
        arrowPolygon: i,
        arrowPath: a,
        arrowShadowWidth: o,
        borderRadiusXS: c,
        calc: l
    } = e;
    return {
        pointerEvents: `none`,
        width: r,
        height: r,
        overflow: `hidden`,
        "&::before": {
            position: `absolute`,
            bottom: 0,
            insetInlineStart: 0,
            width: r,
            height: l(r).div(2).equal(),
            background: t,
            clipPath: {
                _multi_value_: !0,
                value: [i, a]
            },
            content: `""`
        },
        "&::after": {
            content: `""`,
            position: `absolute`,
            width: o,
            height: o,
            bottom: 0,
            insetInline: 0,
            margin: `auto`,
            borderRadius: {
                _skip_check_: !0,
                value: `0 0 ${s(c)} 0`
            },
            transform: `translateY(50%) rotate(-135deg)`,
            boxShadow: n,
            zIndex: 0,
            background: `transparent`
        }
    }
};

function I(e) {
    let {
        contentRadius: t,
        limitVerticalRadius: n
    } = e, r = t > 12 ? t + 2 : 12;
    return {
        arrowOffsetHorizontal: r,
        arrowOffsetVertical: n ? 8 : r
    }
}

function L(e, t) {
    return e ? t : {}
}

function R(e, t, n) {
    let {
        componentCls: r,
        boxShadowPopoverArrow: i,
        arrowOffsetVertical: a,
        arrowOffsetHorizontal: o
    } = e, {
        arrowDistance: c = 0,
        arrowPlacement: l = {
            left: !0,
            right: !0,
            top: !0,
            bottom: !0
        }
    } = n || {};
    return {
        [r]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${r}-arrow`]: [Object.assign(Object.assign({
                position: `absolute`,
                zIndex: 1,
                display: `block`
            }, F(e, t, i)), {
                "&:before": {
                    background: t
                }
            })]
        }, L(!!l.top, {
            [
                [`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(`,`)
            ]: {
                bottom: c,
                transform: `translateY(100%) rotate(180deg)`
            },
            [`&-placement-top > ${r}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: `50%`
                },
                transform: `translateX(-50%) translateY(100%) rotate(180deg)`
            },
            "&-placement-topLeft": {
                "--arrow-offset-horizontal": o,
                [`> ${r}-arrow`]: {
                    left: {
                        _skip_check_: !0,
                        value: o
                    }
                }
            },
            "&-placement-topRight": {
                "--arrow-offset-horizontal": `calc(100% - ${s(o)})`,
                [`> ${r}-arrow`]: {
                    right: {
                        _skip_check_: !0,
                        value: o
                    }
                }
            }
        })), L(!!l.bottom, {
            [
                [`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(`,`)
            ]: {
                top: c,
                transform: `translateY(-100%)`
            },
            [`&-placement-bottom > ${r}-arrow`]: {
                left: {
                    _skip_check_: !0,
                    value: `50%`
                },
                transform: `translateX(-50%) translateY(-100%)`
            },
            "&-placement-bottomLeft": {
                "--arrow-offset-horizontal": o,
                [`> ${r}-arrow`]: {
                    left: {
                        _skip_check_: !0,
                        value: o
                    }
                }
            },
            "&-placement-bottomRight": {
                "--arrow-offset-horizontal": `calc(100% - ${s(o)})`,
                [`> ${r}-arrow`]: {
                    right: {
                        _skip_check_: !0,
                        value: o
                    }
                }
            }
        })), L(!!l.left, {
            [
                [`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(`,`)
            ]: {
                right: {
                    _skip_check_: !0,
                    value: c
                },
                transform: `translateX(100%) rotate(90deg)`
            },
            [`&-placement-left > ${r}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: `50%`
                },
                transform: `translateY(-50%) translateX(100%) rotate(90deg)`
            },
            [`&-placement-leftTop > ${r}-arrow`]: {
                top: a
            },
            [`&-placement-leftBottom > ${r}-arrow`]: {
                bottom: a
            }
        })), L(!!l.right, {
            [
                [`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(`,`)
            ]: {
                left: {
                    _skip_check_: !0,
                    value: c
                },
                transform: `translateX(-100%) rotate(-90deg)`
            },
            [`&-placement-right > ${r}-arrow`]: {
                top: {
                    _skip_check_: !0,
                    value: `50%`
                },
                transform: `translateY(-50%) translateX(-100%) rotate(-90deg)`
            },
            [`&-placement-rightTop > ${r}-arrow`]: {
                top: a
            },
            [`&-placement-rightBottom > ${r}-arrow`]: {
                bottom: a
            }
        }))
    }
}

function z(e, t, n, r) {
    if (r === !1) return {
        adjustX: !1,
        adjustY: !1
    };
    let i = r && typeof r == `object` ? r : {},
        a = {};
    switch (e) {
        case `top`:
        case `bottom`:
            a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
            break;
        case `left`:
        case `right`:
            a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0
    }
    let o = Object.assign(Object.assign({}, a), i);
    return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o
}
var B = {
        left: {
            points: [`cr`, `cl`]
        },
        right: {
            points: [`cl`, `cr`]
        },
        top: {
            points: [`bc`, `tc`]
        },
        bottom: {
            points: [`tc`, `bc`]
        },
        topLeft: {
            points: [`bl`, `tl`]
        },
        leftTop: {
            points: [`tr`, `tl`]
        },
        topRight: {
            points: [`br`, `tr`]
        },
        rightTop: {
            points: [`tl`, `tr`]
        },
        bottomRight: {
            points: [`tr`, `br`]
        },
        rightBottom: {
            points: [`bl`, `br`]
        },
        bottomLeft: {
            points: [`tl`, `bl`]
        },
        leftBottom: {
            points: [`br`, `bl`]
        }
    },
    se = {
        topLeft: {
            points: [`bl`, `tc`]
        },
        leftTop: {
            points: [`tr`, `cl`]
        },
        topRight: {
            points: [`br`, `tc`]
        },
        rightTop: {
            points: [`tl`, `cr`]
        },
        bottomRight: {
            points: [`tr`, `bc`]
        },
        rightBottom: {
            points: [`bl`, `cr`]
        },
        bottomLeft: {
            points: [`tl`, `bc`]
        },
        leftBottom: {
            points: [`br`, `cl`]
        }
    },
    V = new Set([`topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop`, `rightBottom`]);

function ce(e) {
    let {
        arrowWidth: t,
        autoAdjustOverflow: n,
        arrowPointAtCenter: r,
        offset: i,
        borderRadius: a,
        visibleFirst: o
    } = e, s = t / 2, c = {}, l = I({
        contentRadius: a,
        limitVerticalRadius: !0
    });
    return Object.keys(B).forEach(e => {
        let a = r && se[e] || B[e],
            u = Object.assign(Object.assign({}, a), {
                offset: [0, 0],
                dynamicInset: !0
            });
        switch (c[e] = u, V.has(e) && (u.autoArrow = !1), e) {
            case `top`:
            case `topLeft`:
            case `topRight`:
                u.offset[1] = -s - i;
                break;
            case `bottom`:
            case `bottomLeft`:
            case `bottomRight`:
                u.offset[1] = s + i;
                break;
            case `left`:
            case `leftTop`:
            case `leftBottom`:
                u.offset[0] = -s - i;
                break;
            case `right`:
            case `rightTop`:
            case `rightBottom`:
                u.offset[0] = s + i
        }
        if (r) switch (e) {
            case `topLeft`:
            case `bottomLeft`:
                u.offset[0] = -l.arrowOffsetHorizontal - s;
                break;
            case `topRight`:
            case `bottomRight`:
                u.offset[0] = l.arrowOffsetHorizontal + s;
                break;
            case `leftTop`:
            case `rightTop`:
                u.offset[1] = -l.arrowOffsetHorizontal * 2 + s;
                break;
            case `leftBottom`:
            case `rightBottom`:
                u.offset[1] = l.arrowOffsetHorizontal * 2 - s
        }
        u.overflow = z(e, l, t, n), o && (u.htmlRegion = `visibleFirst`)
    }), c
}
var H = e => {
        let {
            calc: t,
            componentCls: n,
            tooltipMaxWidth: r,
            tooltipColor: i,
            tooltipBg: a,
            tooltipBorderRadius: o,
            zIndexPopup: c,
            controlHeight: l,
            boxShadowSecondary: u,
            paddingSM: d,
            paddingXS: f,
            arrowOffsetHorizontal: m,
            sizePopupArrow: h
        } = e, g = t(o).add(h).add(m).equal(), _ = t(o).mul(2).add(h).equal();
        return [{
            [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, p(e)), {
                position: `absolute`,
                zIndex: c,
                display: `block`,
                width: `max-content`,
                maxWidth: r,
                visibility: `visible`,
                "--valid-offset-x": `var(--arrow-offset-horizontal, var(--arrow-x))`,
                transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(` `),
                "&-hidden": {
                    display: `none`
                },
                "--antd-arrow-background-color": a,
                [`${n}-inner`]: {
                    minWidth: _,
                    minHeight: l,
                    padding: `${s(e.calc(d).div(2).equal())} ${s(f)}`,
                    color: `var(--ant-tooltip-color, ${i})`,
                    textAlign: `start`,
                    textDecoration: `none`,
                    wordWrap: `break-word`,
                    backgroundColor: a,
                    borderRadius: o,
                    boxShadow: u,
                    boxSizing: `border-box`
                },
                [
                    [`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(`,`)
                ]: {
                    minWidth: g
                },
                [
                    [`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(`,`)
                ]: {
                    [`${n}-inner`]: {
                        borderRadius: e.min(o, 8)
                    }
                },
                [`${n}-content`]: {
                    position: `relative`
                }
            }), w(e, (e, {
                darkColor: t
            }) => ({
                [`&${n}-${e}`]: {
                    [`${n}-inner`]: {
                        backgroundColor: t
                    },
                    [`${n}-arrow`]: {
                        "--antd-arrow-background-color": t
                    }
                }
            }))), {
                "&-rtl": {
                    direction: `rtl`
                }
            })
        }, R(e, `var(--antd-arrow-background-color)`), {
            [`${n}-pure`]: {
                position: `relative`,
                maxWidth: `none`,
                margin: e.sizePopupArrow
            }
        }]
    },
    le = e => Object.assign(Object.assign({
        zIndexPopup: e.zIndexPopupBase + 70
    }, I({
        contentRadius: e.borderRadius,
        limitVerticalRadius: !0
    })), P(l(e, {
        borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
    }))),
    ue = (e, t = !0) => h(`Tooltip`, e => {
        let {
            borderRadius: t,
            colorTextLightSolid: n,
            colorBgSpotlight: r
        } = e;
        return [H(l(e, {
            tooltipMaxWidth: 250,
            tooltipColor: n,
            tooltipBorderRadius: t,
            tooltipBg: r
        })), C(e, `zoom-big-fast`)]
    }, le, {
        resetStyle: !1,
        injectStyle: t
    })(e);
u();
var U = y.map(e => `${e}-inverse`),
    W = [`success`, `processing`, `error`, `default`, `warning`];

function G(e, t = !0) {
    return t ? [].concat(d(U), d(y)).includes(e) : y.includes(e)
}

function de(e) {
    return W.includes(e)
}

function fe(e, t) {
    let n = G(t),
        r = (0, E.default)({
            [`${e}-${t}`]: t && n
        }),
        i = {},
        a = {},
        o = D(t).toRgb(),
        s = (.299 * o.r + .587 * o.g + .114 * o.b) / 255 < .5 ? `#FFF` : `#000`;
    return t && !n && (i.background = t, i[`--ant-tooltip-color`] = s, a[`--antd-arrow-background-color`] = t), {
        className: r,
        overlayStyle: i,
        arrowStyle: a
    }
}
var K = e => {
        let {
            prefixCls: t,
            className: n,
            placement: r = `top`,
            title: a,
            color: o,
            overlayInnerStyle: s
        } = e, {
            getPrefixCls: c
        } = T.useContext(i), l = c(`tooltip`, t), [u, d, f] = ue(l), p = fe(l, o), m = p.arrowStyle, h = Object.assign(Object.assign({}, s), p.overlayStyle), g = (0, E.default)(d, f, l, `${l}-pure`, `${l}-placement-${r}`, n, p.className);
        return u(T.createElement(`div`, {
            className: g,
            style: m
        }, T.createElement(`div`, {
            className: `${l}-arrow`
        }), T.createElement(O, Object.assign({}, e, {
            className: d,
            prefixCls: l,
            overlayInnerStyle: h
        }), a)))
    },
    pe = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    q = T.forwardRef((e, t) => {
        let {
            prefixCls: n,
            openClassName: r,
            getTooltipContainer: i,
            color: a,
            overlayInnerStyle: o,
            children: s,
            afterOpenChange: l,
            afterVisibleChange: u,
            destroyTooltipOnHide: d,
            destroyOnHidden: p,
            arrow: m = !0,
            title: h,
            overlay: g,
            builtinPlacements: y,
            arrowPointAtCenter: b = !1,
            autoAdjustOverflow: C = !0,
            motion: re,
            getPopupContainer: ae,
            placement: w = `top`,
            mouseEnterDelay: D = .1,
            mouseLeaveDelay: O = .1,
            overlayStyle: k,
            rootClassName: A,
            overlayClassName: j,
            styles: M,
            classNames: N
        } = e, P = pe(e, `prefixCls.openClassName.getTooltipContainer.color.overlayInnerStyle.children.afterOpenChange.afterVisibleChange.destroyTooltipOnHide.destroyOnHidden.arrow.title.overlay.builtinPlacements.arrowPointAtCenter.autoAdjustOverflow.motion.getPopupContainer.placement.mouseEnterDelay.mouseLeaveDelay.overlayStyle.rootClassName.overlayClassName.styles.classNames`.split(`.`)), F = !!m, [, I] = c(), {
            getPopupContainer: L,
            getPrefixCls: R,
            direction: z,
            className: B,
            style: se,
            classNames: V,
            styles: H
        } = f(`tooltip`), le = te(`Tooltip`), U = T.useRef(null), W = () => {
            var e;
            (e = U.current) == null || e.forceAlign()
        };
        T.useImperativeHandle(t, () => {
            var e, t;
            return {
                forceAlign: W,
                forcePopupAlign: () => {
                    le.deprecated(!1, `forcePopupAlign`, `forceAlign`), W()
                },
                nativeElement: (e = U.current) == null ? void 0 : e.nativeElement,
                popupElement: (t = U.current) == null ? void 0 : t.popupElement
            }
        });
        let [G, de] = _(!1, {
            value: e.open ?? e.visible,
            defaultValue: e.defaultOpen ?? e.defaultVisible
        }), K = !h && !g && h !== 0, q = t => {
            var n, r;
            de(!K && t), K || ((n = e.onOpenChange) == null || n.call(e, t), (r = e.onVisibleChange) == null || r.call(e, t))
        }, me = T.useMemo(() => {
            let e = b;
            return typeof m == `object` && (e = m.pointAtCenter ?? m.arrowPointAtCenter ?? b), y || ce({
                arrowPointAtCenter: e,
                autoAdjustOverflow: C,
                arrowWidth: F ? I.sizePopupArrow : 0,
                borderRadius: I.borderRadius,
                offset: I.marginXXS,
                visibleFirst: !0
            })
        }, [b, m, y, I]), J = T.useMemo(() => h === 0 ? h : g || h || ``, [g, h]), he = T.createElement(ie, {
            space: !0
        }, typeof J == `function` ? J() : J), Y = R(`tooltip`, n), ge = R(), _e = e[`data-popover-inject`], X = G;
        !(`open` in e) && !(`visible` in e) && K && (X = !1);
        let Z = T.isValidElement(s) && !v(s) ? s : T.createElement(`span`, null, s),
            Q = Z.props,
            ve = !Q.className || typeof Q.className == `string` ? (0, E.default)(Q.className, r || `${Y}-open`) : Q.className,
            [ye, be, xe] = ue(Y, !_e),
            $ = fe(Y, a),
            Se = $.arrowStyle,
            Ce = (0, E.default)(j, {
                [`${Y}-rtl`]: z === `rtl`
            }, $.className, A, be, xe, B, V.root, N == null ? void 0 : N.root),
            we = (0, E.default)(V.body, N == null ? void 0 : N.body),
            [Te, Ee] = S(`Tooltip`, P.zIndex),
            De = T.createElement(oe, Object.assign({}, P, {
                zIndex: Te,
                showArrow: F,
                placement: w,
                mouseEnterDelay: D,
                mouseLeaveDelay: O,
                prefixCls: Y,
                classNames: {
                    root: Ce,
                    body: we
                },
                styles: {
                    root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Se), H.root), se), k), M == null ? void 0 : M.root),
                    body: Object.assign(Object.assign(Object.assign(Object.assign({}, H.body), o), M == null ? void 0 : M.body), $.overlayStyle)
                },
                getTooltipContainer: ae || i || L,
                ref: U,
                builtinPlacements: me,
                overlay: he,
                visible: X,
                onVisibleChange: q,
                afterVisibleChange: l ?? u,
                arrowContent: T.createElement(`span`, {
                    className: `${Y}-arrow-content`
                }),
                motion: {
                    motionName: x(ge, `zoom-big-fast`, e.transitionName),
                    motionDeadline: 1e3
                },
                destroyTooltipOnHide: p ?? !!d
            }), X ? ee(Z, {
                className: ve
            }) : Z);
        return ye(T.createElement(ne.Provider, {
            value: Ee
        }, De))
    });
q._InternalPanelDoNotUseOrYouWillBeFired = K;
export {
    I as a, P as c, ce as i, O as l, G as n, R as o, de as r, F as s, q as t, w as u
};