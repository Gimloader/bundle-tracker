import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    E as n,
    Ut as r,
    b as i,
    k as a,
    m as o,
    s,
    x as c
} from "./Compact.js";
import {
    m as l,
    s as u
} from "./color.js";
import {
    C as d,
    O as f,
    b as p
} from "./ContextIsolator.js";
import {
    a as m,
    c as h,
    l as g,
    o as _,
    t as v
} from "./tooltip.js";
var y = e(t()),
    b = e(r()),
    x = e => e ? typeof e == `function` ? e() : e : null,
    S = e => {
        let {
            componentCls: t,
            popoverColor: n,
            titleMinWidth: r,
            fontWeightStrong: i,
            innerPadding: a,
            boxShadowSecondary: s,
            colorTextHeading: c,
            borderRadiusLG: l,
            zIndexPopup: u,
            titleMarginBottom: d,
            colorBgElevated: f,
            popoverBg: p,
            titleBorderBottom: m,
            innerContentPadding: h,
            titlePadding: g
        } = e;
        return [{
            [t]: Object.assign(Object.assign({}, o(e)), {
                position: `absolute`,
                top: 0,
                left: {
                    _skip_check_: !0,
                    value: 0
                },
                zIndex: u,
                fontWeight: `normal`,
                whiteSpace: `normal`,
                textAlign: `start`,
                cursor: `auto`,
                userSelect: `text`,
                "--valid-offset-x": `var(--arrow-offset-horizontal, var(--arrow-x))`,
                transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(` `),
                "--antd-arrow-background-color": f,
                width: `max-content`,
                maxWidth: `100vw`,
                "&-rtl": {
                    direction: `rtl`
                },
                "&-hidden": {
                    display: `none`
                },
                [`${t}-content`]: {
                    position: `relative`
                },
                [`${t}-inner`]: {
                    backgroundColor: p,
                    backgroundClip: `padding-box`,
                    borderRadius: l,
                    boxShadow: s,
                    padding: a
                },
                [`${t}-title`]: {
                    minWidth: r,
                    marginBottom: d,
                    color: c,
                    fontWeight: i,
                    borderBottom: m,
                    padding: g
                },
                [`${t}-inner-content`]: {
                    color: n,
                    padding: h
                }
            })
        }, _(e, `var(--antd-arrow-background-color)`), {
            [`${t}-pure`]: {
                position: `relative`,
                maxWidth: `none`,
                margin: e.sizePopupArrow,
                display: `inline-block`,
                [`${t}-content`]: {
                    display: `inline-block`
                }
            }
        }]
    },
    C = e => {
        let {
            componentCls: t
        } = e;
        return {
            [t]: l.map(n => {
                let r = e[`${n}6`];
                return {
                    [`&${t}-${n}`]: {
                        "--antd-arrow-background-color": r,
                        [`${t}-inner`]: {
                            backgroundColor: r
                        },
                        [`${t}-arrow`]: {
                            background: `transparent`
                        }
                    }
                }
            })
        }
    },
    w = s(`Popover`, e => {
        let {
            colorBgElevated: t,
            colorText: n
        } = e, r = i(e, {
            popoverBg: t,
            popoverColor: n
        });
        return [S(r), C(r), p(r, `zoom-big`)]
    }, e => {
        let {
            lineWidth: t,
            controlHeight: n,
            fontHeight: r,
            padding: i,
            wireframe: a,
            zIndexPopupBase: o,
            borderRadiusLG: s,
            marginXS: c,
            lineType: l,
            colorSplit: u,
            paddingSM: d
        } = e, f = n - r, p = f / 2, g = f / 2 - t, _ = i;
        return Object.assign(Object.assign(Object.assign({
            titleMinWidth: 177,
            zIndexPopup: o + 30
        }, h(e)), m({
            contentRadius: s,
            limitVerticalRadius: !0
        })), {
            innerPadding: a ? 0 : 12,
            titleMarginBottom: a ? 0 : c,
            titlePadding: a ? `${p}px ${_}px ${g}px` : 0,
            titleBorderBottom: a ? `${t}px ${l} ${u}` : `none`,
            innerContentPadding: a ? `${d}px ${_}px` : 0
        })
    }, {
        resetStyle: !1,
        deprecatedTokens: [
            [`width`, `titleMinWidth`],
            [`minWidth`, `titleMinWidth`]
        ]
    }),
    T = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    E = ({
        title: e,
        content: t,
        prefixCls: n
    }) => !e && !t ? null : y.createElement(y.Fragment, null, e && y.createElement(`div`, {
        className: `${n}-title`
    }, e), t && y.createElement(`div`, {
        className: `${n}-inner-content`
    }, t)),
    D = e => {
        let {
            hashId: t,
            prefixCls: n,
            className: r,
            style: i,
            placement: a = `top`,
            title: o,
            content: s,
            children: c
        } = e, l = x(o), u = x(s), d = (0, b.default)(t, n, `${n}-pure`, `${n}-placement-${a}`, r);
        return y.createElement(`div`, {
            className: d,
            style: i
        }, y.createElement(`div`, {
            className: `${n}-arrow`
        }), y.createElement(g, Object.assign({}, e, {
            className: t,
            prefixCls: n
        }), c || y.createElement(E, {
            prefixCls: n,
            title: l,
            content: u
        })))
    },
    O = e => {
        let {
            prefixCls: t,
            className: r
        } = e, i = T(e, [`prefixCls`, `className`]), {
            getPrefixCls: a
        } = y.useContext(n), o = a(`popover`, t), [s, c, l] = w(o);
        return s(y.createElement(D, Object.assign({}, i, {
            prefixCls: o,
            hashId: c,
            className: (0, b.default)(r, l)
        })))
    },
    k = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    A = y.forwardRef((e, t) => {
        let {
            prefixCls: n,
            title: r,
            content: i,
            overlayClassName: o,
            placement: s = `top`,
            trigger: l = `hover`,
            children: p,
            mouseEnterDelay: m = .1,
            mouseLeaveDelay: h = .1,
            onOpenChange: g,
            overlayStyle: _ = {},
            styles: S,
            classNames: C
        } = e, T = k(e, [`prefixCls`, `title`, `content`, `overlayClassName`, `placement`, `trigger`, `children`, `mouseEnterDelay`, `mouseLeaveDelay`, `onOpenChange`, `overlayStyle`, `styles`, `classNames`]), {
            getPrefixCls: D,
            className: O,
            style: A,
            classNames: j,
            styles: M
        } = a(`popover`), N = D(`popover`, n), [P, F, I] = w(N), L = D(), R = (0, b.default)(o, F, I, O, j.root, C == null ? void 0 : C.root), z = (0, b.default)(j.body, C == null ? void 0 : C.body), [B, V] = c(!1, {
            value: e.open ?? e.visible,
            defaultValue: e.defaultOpen ?? e.defaultVisible
        }), H = (e, t) => {
            V(e, !0), g == null || g(e, t)
        }, U = e => {
            e.keyCode === f.ESC && H(!1, e)
        }, W = e => {
            H(e)
        }, G = x(r), K = x(i);
        return P(y.createElement(v, Object.assign({
            placement: s,
            trigger: l,
            mouseEnterDelay: m,
            mouseLeaveDelay: h
        }, T, {
            prefixCls: N,
            classNames: {
                root: R,
                body: z
            },
            styles: {
                root: Object.assign(Object.assign(Object.assign(Object.assign({}, M.root), A), _), S == null ? void 0 : S.root),
                body: Object.assign(Object.assign({}, M.body), S == null ? void 0 : S.body)
            },
            ref: t,
            open: B,
            onOpenChange: W,
            overlay: G || K ? y.createElement(E, {
                prefixCls: N,
                title: G,
                content: K
            }) : null,
            transitionName: d(L, `zoom-big`, T.transitionName),
            "data-popover-inject": !0
        }), u(p, {
            onKeyDown: e => {
                var t, n;
                (0, y.isValidElement)(p) && ((n = p == null ? void 0 : (t = p.props).onKeyDown) == null || n.call(t, e)), U(e)
            }
        })))
    });
A._InternalPanelDoNotUseOrYouWillBeFired = O;
export {
    A as t
};