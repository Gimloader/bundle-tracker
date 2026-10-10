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
    It as o,
    J as s,
    Lt as c,
    Nt as l,
    Ot as u,
    Ut as d,
    X as f,
    b as p,
    d as m,
    k as h,
    lt as g,
    nt as _,
    s as v,
    tt as y,
    ut as b,
    zt as x
} from "./Compact.js";
import {
    d as S
} from "./color.js";
import {
    C,
    D as ee,
    E as w,
    O as T,
    _ as E,
    t as D
} from "./ContextIsolator.js";
import {
    t as O
} from "./pickAttrs.js";
import {
    a as k,
    i as te,
    o as A,
    s as j
} from "./modal.js";
var M = e(d());
b();
var N = e(t()),
    P = N.createContext(null),
    F = N.createContext({});
c(), n(), _();
var I = [`prefixCls`, `className`, `containerRef`],
    L = function(e) {
        var t = e.prefixCls,
            n = e.className,
            i = e.containerRef,
            a = y(e, I),
            o = N.useContext(F).panel,
            s = l(o, i);
        return N.createElement(`div`, r({
            className: (0, M.default)(`${t}-content`, n),
            role: `dialog`,
            ref: s
        }, O(e, {
            aria: !0
        }), {
            "aria-modal": `true`
        }, a))
    };

function R(e) {
    return typeof e == `string` && String(Number(e)) === e ? (x(!1, "Invalid value type of `width` or `height` which should be number type instead."), Number(e)) : e
}
n();
var z = {
    width: 0,
    height: 0,
    overflow: `hidden`,
    outline: `none`,
    position: `absolute`
};

function B(e, t) {
    var n, i = e.prefixCls,
        s = e.open,
        c = e.placement,
        l = e.inline,
        u = e.push,
        d = e.forceRender,
        f = e.autoFocus,
        p = e.keyboard,
        m = e.classNames,
        h = e.rootClassName,
        _ = e.rootStyle,
        v = e.zIndex,
        y = e.className,
        b = e.id,
        x = e.style,
        C = e.motion,
        ee = e.width,
        w = e.height,
        E = e.children,
        D = e.mask,
        k = e.maskClosable,
        te = e.maskMotion,
        A = e.maskClassName,
        j = e.maskStyle,
        F = e.afterOpenChange,
        I = e.onClose,
        B = e.onMouseEnter,
        ne = e.onMouseOver,
        V = e.onMouseLeave,
        H = e.onClick,
        U = e.onKeyDown,
        W = e.onKeyUp,
        G = e.styles,
        K = e.drawerRender,
        q = N.useRef(),
        J = N.useRef(),
        Y = N.useRef();
    N.useImperativeHandle(t, function() {
        return q.current
    });
    var re = function(e) {
        var t = e.keyCode,
            n = e.shiftKey;
        switch (t) {
            case T.TAB:
                if (t === T.TAB) {
                    if (!n && document.activeElement === Y.current) {
                        var r;
                        (r = J.current) == null || r.focus({
                            preventScroll: !0
                        })
                    } else if (n && document.activeElement === J.current) {
                        var i;
                        (i = Y.current) == null || i.focus({
                            preventScroll: !0
                        })
                    }
                }
                break;
            case T.ESC:
                I && p && (e.stopPropagation(), I(e))
        }
    };
    N.useEffect(function() {
        if (s && f) {
            var e;
            (e = q.current) == null || e.focus({
                preventScroll: !0
            })
        }
    }, [s]);
    var ie = N.useState(!1),
        X = g(ie, 2),
        ae = X[0],
        oe = X[1],
        Z = N.useContext(P),
        Q = ((n = typeof u == `boolean` ? u ? {} : {
            distance: 0
        } : u || {}) == null ? void 0 : n.distance) ?? (Z == null ? void 0 : Z.pushDistance) ?? 180,
        se = N.useMemo(function() {
            return {
                pushDistance: Q,
                push: function() {
                    oe(!0)
                },
                pull: function() {
                    oe(!1)
                }
            }
        }, [Q]);
    N.useEffect(function() {
        if (s) {
            var e;
            Z == null || (e = Z.push) == null || e.call(Z)
        } else {
            var t;
            Z == null || (t = Z.pull) == null || t.call(Z)
        }
    }, [s]), N.useEffect(function() {
        return function() {
            var e;
            Z == null || (e = Z.pull) == null || e.call(Z)
        }
    }, []);
    var ce = N.createElement(S, r({
            key: `mask`
        }, te, {
            visible: D && s
        }), function(e, t) {
            var n = e.className,
                r = e.style;
            return N.createElement(`div`, {
                className: (0, M.default)(`${i}-mask`, n, m == null ? void 0 : m.mask, A),
                style: a(a(a({}, r), j), G == null ? void 0 : G.mask),
                onClick: k && s ? I : void 0,
                ref: t
            })
        }),
        le = typeof C == `function` ? C(c) : C,
        $ = {};
    if (ae && Q) switch (c) {
        case `top`:
            $.transform = `translateY(${Q}px)`;
            break;
        case `bottom`:
            $.transform = `translateY(${-Q}px)`;
            break;
        case `left`:
            $.transform = `translateX(${Q}px)`;
            break;
        default:
            $.transform = `translateX(${-Q}px)`
    }
    c === `left` || c === `right` ? $.width = R(ee) : $.height = R(w);
    var ue = {
            onMouseEnter: B,
            onMouseOver: ne,
            onMouseLeave: V,
            onClick: H,
            onKeyDown: U,
            onKeyUp: W
        },
        de = N.createElement(S, r({
            key: `panel`
        }, le, {
            visible: s,
            forceRender: d,
            onVisibleChanged: function(e) {
                F == null || F(e)
            },
            removeOnLeave: !1,
            leavedClassName: `${i}-content-wrapper-hidden`
        }), function(t, n) {
            var o = t.className,
                s = t.style,
                c = N.createElement(L, r({
                    id: b,
                    containerRef: n,
                    prefixCls: i,
                    className: (0, M.default)(y, m == null ? void 0 : m.content),
                    style: a(a({}, x), G == null ? void 0 : G.content)
                }, O(e, {
                    aria: !0
                }), ue), E);
            return N.createElement(`div`, r({
                className: (0, M.default)(`${i}-content-wrapper`, m == null ? void 0 : m.wrapper, o),
                style: a(a(a({}, $), s), G == null ? void 0 : G.wrapper)
            }, O(e, {
                data: !0
            })), K ? K(c) : c)
        }),
        fe = a({}, _);
    return v && (fe.zIndex = v), N.createElement(P.Provider, {
        value: se
    }, N.createElement(`div`, {
        className: (0, M.default)(i, `${i}-${c}`, h, o(o({}, `${i}-open`, s), `${i}-inline`, l)),
        style: fe,
        tabIndex: -1,
        ref: q,
        onKeyDown: re
    }, ce, N.createElement(`div`, {
        tabIndex: 0,
        ref: J,
        style: z,
        "aria-hidden": `true`,
        "data-sentinel": `start`
    }), de, N.createElement(`div`, {
        tabIndex: 0,
        ref: Y,
        style: z,
        "aria-hidden": `true`,
        "data-sentinel": `end`
    })))
}
var ne = N.forwardRef(B);
b();
var V = function(e) {
        var t = e.open,
            n = t !== void 0 && t,
            r = e.prefixCls,
            i = r === void 0 ? `rc-drawer` : r,
            o = e.placement,
            c = o === void 0 ? `right` : o,
            l = e.autoFocus,
            u = l === void 0 || l,
            d = e.keyboard,
            f = d === void 0 || d,
            p = e.width,
            m = p === void 0 ? 378 : p,
            h = e.mask,
            _ = h === void 0 || h,
            v = e.maskClosable,
            y = v === void 0 || v,
            b = e.getContainer,
            x = e.forceRender,
            S = e.afterOpenChange,
            C = e.destroyOnClose,
            ee = e.onMouseEnter,
            w = e.onMouseOver,
            T = e.onMouseLeave,
            D = e.onClick,
            O = e.onKeyDown,
            k = e.onKeyUp,
            te = e.panelRef,
            A = N.useState(!1),
            j = g(A, 2),
            M = j[0],
            P = j[1],
            I = N.useState(!1),
            L = g(I, 2),
            R = L[0],
            z = L[1];
        s(function() {
            z(!0)
        }, []);
        var B = R ? n : !1,
            V = N.useRef(),
            H = N.useRef();
        s(function() {
            B && (H.current = document.activeElement)
        }, [B]);
        var U = function(e) {
                var t;
                if (P(e), S == null || S(e), !e && H.current && !((t = V.current) != null && t.contains(H.current))) {
                    var n;
                    (n = H.current) == null || n.focus({
                        preventScroll: !0
                    })
                }
            },
            W = N.useMemo(function() {
                return {
                    panel: te
                }
            }, [te]);
        if (!x && !M && !B && C) return null;
        var G = {
                onMouseEnter: ee,
                onMouseOver: w,
                onMouseLeave: T,
                onClick: D,
                onKeyDown: O,
                onKeyUp: k
            },
            K = a(a({}, e), {}, {
                open: B,
                prefixCls: i,
                placement: c,
                autoFocus: u,
                keyboard: f,
                width: m,
                mask: _,
                maskClosable: y,
                inline: b === !1,
                afterOpenChange: U,
                ref: V
            }, G);
        return N.createElement(F.Provider, {
            value: W
        }, N.createElement(E, {
            open: B || x || M,
            autoDestroy: !1,
            getContainer: b,
            autoLock: _ && (B || M)
        }, N.createElement(ne, K)))
    },
    H = e => {
        var t, n;
        let {
            prefixCls: r,
            title: i,
            footer: a,
            extra: o,
            loading: s,
            onClose: c,
            headerStyle: l,
            bodyStyle: u,
            footerStyle: d,
            children: f,
            classNames: p,
            styles: m
        } = e, g = h(`drawer`), _ = N.useCallback(e => N.createElement(`button`, {
            type: `button`,
            onClick: c,
            className: `${r}-close`
        }, e), [c]), [v, y] = j(A(e), A(g), {
            closable: !0,
            closeIconRender: _
        }), b = N.useMemo(() => {
            var e, t;
            return !i && !v ? null : N.createElement(`div`, {
                style: Object.assign(Object.assign(Object.assign({}, (e = g.styles) == null ? void 0 : e.header), l), m == null ? void 0 : m.header),
                className: (0, M.default)(`${r}-header`, {
                    [`${r}-header-close-only`]: v && !i && !o
                }, (t = g.classNames) == null ? void 0 : t.header, p == null ? void 0 : p.header)
            }, N.createElement(`div`, {
                className: `${r}-header-title`
            }, y, i && N.createElement(`div`, {
                className: `${r}-title`
            }, i)), o && N.createElement(`div`, {
                className: `${r}-extra`
            }, o))
        }, [v, y, o, l, r, i]), x = N.useMemo(() => {
            var e, t;
            if (!a) return null;
            let n = `${r}-footer`;
            return N.createElement(`div`, {
                className: (0, M.default)(n, (e = g.classNames) == null ? void 0 : e.footer, p == null ? void 0 : p.footer),
                style: Object.assign(Object.assign(Object.assign({}, (t = g.styles) == null ? void 0 : t.footer), d), m == null ? void 0 : m.footer)
            }, a)
        }, [a, d, r]);
        return N.createElement(N.Fragment, null, b, N.createElement(`div`, {
            className: (0, M.default)(`${r}-body`, p == null ? void 0 : p.body, (t = g.classNames) == null ? void 0 : t.body),
            style: Object.assign(Object.assign(Object.assign({}, (n = g.styles) == null ? void 0 : n.body), u), m == null ? void 0 : m.body)
        }, s ? N.createElement(k, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 5
            },
            className: `${r}-body-skeleton`
        }) : f), x)
    },
    U = e => {
        let t = `100%`;
        return {
            left: `translateX(-${t})`,
            right: `translateX(${t})`,
            top: `translateY(-${t})`,
            bottom: `translateY(${t})`
        } [e]
    },
    W = (e, t) => ({
        "&-enter, &-appear": Object.assign(Object.assign({}, e), {
            "&-active": t
        }),
        "&-leave": Object.assign(Object.assign({}, t), {
            "&-active": e
        })
    }),
    G = (e, t) => Object.assign({
        "&-enter, &-appear, &-leave": {
            "&-start": {
                transition: `none`
            },
            "&-active": {
                transition: `all ${t}`
            }
        }
    }, W({
        opacity: e
    }, {
        opacity: 1
    })),
    K = (e, t) => [G(.7, t), W({
        transform: U(e)
    }, {
        transform: `none`
    })],
    q = e => {
        let {
            componentCls: t,
            motionDurationSlow: n
        } = e;
        return {
            [t]: {
                [`${t}-mask-motion`]: G(0, n),
                [`${t}-panel-motion`]: [`left`, `right`, `top`, `bottom`].reduce((e, t) => Object.assign(Object.assign({}, e), {
                    [`&-${t}`]: K(t, n)
                }), {})
            }
        }
    },
    J = e => {
        let {
            borderRadiusSM: t,
            componentCls: n,
            zIndexPopup: r,
            colorBgMask: i,
            colorBgElevated: a,
            motionDurationSlow: o,
            motionDurationMid: s,
            paddingXS: c,
            padding: l,
            paddingLG: u,
            fontSizeLG: d,
            lineHeightLG: p,
            lineWidth: h,
            lineType: g,
            colorSplit: _,
            marginXS: v,
            colorIcon: y,
            colorIconHover: b,
            colorBgTextHover: x,
            colorBgTextActive: S,
            colorText: C,
            fontWeightStrong: ee,
            footerPaddingBlock: w,
            footerPaddingInline: T,
            calc: E
        } = e, D = `${n}-content-wrapper`;
        return {
            [n]: {
                position: `fixed`,
                inset: 0,
                zIndex: r,
                pointerEvents: `none`,
                color: C,
                "&-pure": {
                    position: `relative`,
                    background: a,
                    display: `flex`,
                    flexDirection: `column`,
                    [`&${n}-left`]: {
                        boxShadow: e.boxShadowDrawerLeft
                    },
                    [`&${n}-right`]: {
                        boxShadow: e.boxShadowDrawerRight
                    },
                    [`&${n}-top`]: {
                        boxShadow: e.boxShadowDrawerUp
                    },
                    [`&${n}-bottom`]: {
                        boxShadow: e.boxShadowDrawerDown
                    }
                },
                "&-inline": {
                    position: `absolute`
                },
                [`${n}-mask`]: {
                    position: `absolute`,
                    inset: 0,
                    zIndex: r,
                    background: i,
                    pointerEvents: `auto`
                },
                [D]: {
                    position: `absolute`,
                    zIndex: r,
                    maxWidth: `100vw`,
                    transition: `all ${o}`,
                    "&-hidden": {
                        display: `none`
                    }
                },
                [`&-left > ${D}`]: {
                    top: 0,
                    bottom: 0,
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    boxShadow: e.boxShadowDrawerLeft
                },
                [`&-right > ${D}`]: {
                    top: 0,
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    bottom: 0,
                    boxShadow: e.boxShadowDrawerRight
                },
                [`&-top > ${D}`]: {
                    top: 0,
                    insetInline: 0,
                    boxShadow: e.boxShadowDrawerUp
                },
                [`&-bottom > ${D}`]: {
                    bottom: 0,
                    insetInline: 0,
                    boxShadow: e.boxShadowDrawerDown
                },
                [`${n}-content`]: {
                    display: `flex`,
                    flexDirection: `column`,
                    width: `100%`,
                    height: `100%`,
                    overflow: `auto`,
                    background: a,
                    pointerEvents: `auto`
                },
                [`${n}-header`]: {
                    display: `flex`,
                    flex: 0,
                    alignItems: `center`,
                    padding: `${f(l)} ${f(u)}`,
                    fontSize: d,
                    lineHeight: p,
                    borderBottom: `${f(h)} ${g} ${_}`,
                    "&-title": {
                        display: `flex`,
                        flex: 1,
                        alignItems: `center`,
                        minWidth: 0,
                        minHeight: 0
                    }
                },
                [`${n}-extra`]: {
                    flex: `none`
                },
                [`${n}-close`]: Object.assign({
                    display: `inline-flex`,
                    width: E(d).add(c).equal(),
                    height: E(d).add(c).equal(),
                    borderRadius: t,
                    justifyContent: `center`,
                    alignItems: `center`,
                    marginInlineEnd: v,
                    color: y,
                    fontWeight: ee,
                    fontSize: d,
                    fontStyle: `normal`,
                    lineHeight: 1,
                    textAlign: `center`,
                    textTransform: `none`,
                    textDecoration: `none`,
                    background: `transparent`,
                    border: 0,
                    cursor: `pointer`,
                    transition: `all ${s}`,
                    textRendering: `auto`,
                    "&:hover": {
                        color: b,
                        backgroundColor: x,
                        textDecoration: `none`
                    },
                    "&:active": {
                        backgroundColor: S
                    }
                }, m(e)),
                [`${n}-title`]: {
                    flex: 1,
                    margin: 0,
                    fontWeight: e.fontWeightStrong,
                    fontSize: d,
                    lineHeight: p
                },
                [`${n}-body`]: {
                    flex: 1,
                    minWidth: 0,
                    minHeight: 0,
                    padding: u,
                    overflow: `auto`,
                    [`${n}-body-skeleton`]: {
                        width: `100%`,
                        height: `100%`,
                        display: `flex`,
                        justifyContent: `center`
                    }
                },
                [`${n}-footer`]: {
                    flexShrink: 0,
                    padding: `${f(w)} ${f(T)}`,
                    borderTop: `${f(h)} ${g} ${_}`
                },
                "&-rtl": {
                    direction: `rtl`
                }
            }
        }
    },
    Y = v(`Drawer`, e => {
        let t = p(e, {});
        return [J(t), q(t)]
    }, e => ({
        zIndexPopup: e.zIndexPopupBase,
        footerPaddingBlock: e.paddingXS,
        footerPaddingInline: e.padding
    })),
    re = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    ie = {
        distance: 180
    },
    X = e => {
        let {
            rootClassName: t,
            width: n,
            height: r,
            size: i = `default`,
            mask: a = !0,
            push: o = ie,
            open: s,
            afterOpenChange: c,
            onClose: l,
            prefixCls: d,
            getContainer: f,
            panelRef: p = null,
            style: m,
            className: g,
            visible: _,
            afterVisibleChange: v,
            maskStyle: y,
            drawerStyle: b,
            contentWrapperStyle: x,
            destroyOnClose: S,
            destroyOnHidden: T
        } = e, E = re(e, [`rootClassName`, `width`, `height`, `size`, `mask`, `push`, `open`, `afterOpenChange`, `onClose`, `prefixCls`, `getContainer`, `panelRef`, `style`, `className`, `visible`, `afterVisibleChange`, `maskStyle`, `drawerStyle`, `contentWrapperStyle`, `destroyOnClose`, `destroyOnHidden`]), {
            getPopupContainer: O,
            getPrefixCls: k,
            direction: A,
            className: j,
            style: P,
            classNames: F,
            styles: I
        } = h(`drawer`), L = k(`drawer`, d), [R, z, B] = Y(L), ne = f === void 0 && O ? () => O(document.body) : f, U = (0, M.default)({
            "no-mask": !a,
            [`${L}-rtl`]: A === `rtl`
        }, t, z, B), W = N.useMemo(() => n ?? (i === `large` ? 736 : 378), [n, i]), G = N.useMemo(() => r ?? (i === `large` ? 736 : 378), [r, i]), K = {
            motionName: C(L, `mask-motion`),
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            motionDeadline: 500
        }, q = e => ({
            motionName: C(L, `panel-motion-${e}`),
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            motionDeadline: 500
        }), J = te(), X = u(p, J), [ae, oe] = w(`Drawer`, E.zIndex), {
            classNames: Z = {},
            styles: Q = {}
        } = E;
        return R(N.createElement(D, {
            form: !0,
            space: !0
        }, N.createElement(ee.Provider, {
            value: oe
        }, N.createElement(V, Object.assign({
            prefixCls: L,
            onClose: l,
            maskMotion: K,
            motion: q
        }, E, {
            classNames: {
                mask: (0, M.default)(Z.mask, F.mask),
                content: (0, M.default)(Z.content, F.content),
                wrapper: (0, M.default)(Z.wrapper, F.wrapper)
            },
            styles: {
                mask: Object.assign(Object.assign(Object.assign({}, Q.mask), y), I.mask),
                content: Object.assign(Object.assign(Object.assign({}, Q.content), b), I.content),
                wrapper: Object.assign(Object.assign(Object.assign({}, Q.wrapper), x), I.wrapper)
            },
            open: s ?? _,
            mask: a,
            push: o,
            width: W,
            height: G,
            style: Object.assign(Object.assign({}, P), m),
            className: (0, M.default)(j, g),
            rootClassName: U,
            getContainer: ne,
            afterOpenChange: c ?? v,
            panelRef: X,
            zIndex: ae,
            destroyOnClose: T ?? S
        }), N.createElement(H, Object.assign({
            prefixCls: L
        }, E, {
            onClose: l
        }))))))
    };
X._InternalPanelDoNotUseOrYouWillBeFired = e => {
    let {
        prefixCls: t,
        style: n,
        className: r,
        placement: a = `right`
    } = e, o = re(e, [`prefixCls`, `style`, `className`, `placement`]), {
        getPrefixCls: s
    } = N.useContext(i), c = s(`drawer`, t), [l, u, d] = Y(c), f = (0, M.default)(c, `${c}-pure`, `${c}-${a}`, u, d, r);
    return l(N.createElement(`div`, {
        className: f,
        style: n
    }, N.createElement(H, Object.assign({
        prefixCls: c
    }, o))))
};
export {
    X as t
};