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
    A as i,
    E as a,
    H as o,
    K as s,
    M as ee,
    Pt as c,
    Q as te,
    T as ne,
    V as l,
    W as re,
    Z as u,
    _ as d,
    ct as f,
    et as ie,
    f as ae,
    j as p,
    ot as oe,
    w as m
} from "./Compact.js";
import {
    g as se,
    h,
    p as g
} from "./color.js";
import {
    i as ce,
    r as _
} from "./compact-item.js";
import {
    A as v,
    j as le,
    k as ue
} from "./ContextIsolator.js";
import {
    n as y,
    r as b
} from "./useLocale.js";
var x = e(t()),
    de = (0, x.createContext)(void 0),
    S = Object.assign({}, b.Modal),
    C = [],
    w = () => C.reduce((e, t) => Object.assign(Object.assign({}, e), t), b.Modal);

function fe(e) {
    if (e) {
        let t = Object.assign({}, e);
        return C.push(t), S = w(), () => {
            C = C.filter(e => e !== t), S = w()
        }
    }
    S = Object.assign({}, b.Modal)
}

function pe() {
    return S
}
var me = `internalMark`,
    he = e => {
        let {
            locale: t = {},
            children: n,
            _ANT_MARK__: r
        } = e;
        x.useEffect(() => fe(t == null ? void 0 : t.Modal), [t]);
        let i = x.useMemo(() => Object.assign(Object.assign({}, t), {
            exist: !0
        }), [t]);
        return x.createElement(y.Provider, {
            value: i
        }, n)
    },
    T = `-ant-${Date.now()}-${Math.random()}`;

function E(e, t) {
    let n = {},
        r = (e, t) => {
            let n = e.clone();
            return n = (t == null ? void 0 : t(n)) || n, n.toRgbString()
        },
        i = (e, t) => {
            let i = new o(e),
                a = l(i.toRgbString());
            n[`${t}-color`] = r(i), n[`${t}-color-disabled`] = a[1], n[`${t}-color-hover`] = a[4], n[`${t}-color-active`] = a[6], n[`${t}-color-outline`] = i.clone().setA(.2).toRgbString(), n[`${t}-color-deprecated-bg`] = a[0], n[`${t}-color-deprecated-border`] = a[2]
        };
    if (t.primaryColor) {
        i(t.primaryColor, `primary`);
        let e = new o(t.primaryColor),
            a = l(e.toRgbString());
        a.forEach((e, t) => {
            n[`primary-${t+1}`] = e
        }), n[`primary-color-deprecated-l-35`] = r(e, e => e.lighten(35)), n[`primary-color-deprecated-l-20`] = r(e, e => e.lighten(20)), n[`primary-color-deprecated-t-20`] = r(e, e => e.tint(20)), n[`primary-color-deprecated-t-50`] = r(e, e => e.tint(50)), n[`primary-color-deprecated-f-12`] = r(e, e => e.setA(e.a * .12));
        let s = new o(a[0]);
        n[`primary-color-active-deprecated-f-30`] = r(s, e => e.setA(e.a * .3)), n[`primary-color-active-deprecated-d-02`] = r(s, e => e.darken(2))
    }
    return t.successColor && i(t.successColor, `success`), t.warningColor && i(t.warningColor, `warning`), t.errorColor && i(t.errorColor, `error`), t.infoColor && i(t.infoColor, `info`), `
  :root {
    ${Object.keys(n).map(t=>`--${e}-${t}: ${n[t]};`).join(`
`)}
  }
  `.trim()
}

function D(e, t) {
    let n = E(e, t);
    f() && oe(n, `${T}-dynamic-theme`)
}

function O() {
    return {
        componentDisabled: (0, x.useContext)(h),
        componentSize: (0, x.useContext)(m)
    }
}
var ge = (e, t) => {
        let [n, r] = d();
        return s({
            theme: n,
            token: r,
            hashId: ``,
            path: [`ant-design-icons`, e],
            nonce: () => t == null ? void 0 : t.nonce,
            layer: {
                name: `antd`
            }
        }, () => ae(e))
    },
    {
        useId: k
    } = Object.assign({}, x),
    A = k === void 0 ? () => `` : k;

function _e(e, t, n) {
    v(`ConfigProvider`);
    let r = e || {},
        i = r.inherit === !1 || !t ? Object.assign(Object.assign({}, p), {
            hashed: (t == null ? void 0 : t.hashed) ?? p.hashed,
            cssVar: t == null ? void 0 : t.cssVar
        }) : t,
        a = A();
    return c(() => {
        var o;
        if (!e) return t;
        let s = Object.assign({}, i.components);
        Object.keys(e.components || {}).forEach(t => {
            s[t] = Object.assign(Object.assign({}, s[t]), e.components[t])
        });
        let ee = `css-var-${a.replace(/:/g,``)}`,
            c = (r.cssVar ?? i.cssVar) && Object.assign(Object.assign(Object.assign({
                prefix: n == null ? void 0 : n.prefixCls
            }, typeof i.cssVar == `object` ? i.cssVar : {}), typeof r.cssVar == `object` ? r.cssVar : {}), {
                key: typeof r.cssVar == `object` && ((o = r.cssVar) == null ? void 0 : o.key) || ee
            });
        return Object.assign(Object.assign(Object.assign({}, i), r), {
            token: Object.assign(Object.assign({}, i.token), r.token),
            components: s,
            cssVar: c
        })
    }, [r, i], (e, t) => e.some((e, n) => {
        let r = t[n];
        return !ie(e, r, !0)
    }))
}
var j = x.createContext(!0);

function ve(e) {
    let t = x.useContext(j),
        {
            children: n
        } = e,
        [, r] = d(),
        {
            motion: i
        } = r,
        a = x.useRef(!1);
    return a.current || (a.current = t !== i), a.current ? x.createElement(j.Provider, {
        value: i
    }, x.createElement(g, {
        motion: i
    }, n)) : n
}
var ye = () => null,
    be = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    xe = [`getTargetContainer`, `getPopupContainer`, `renderEmpty`, `input`, `pagination`, `form`, `select`, `button`],
    M, N, P, F;

function I() {
    return M || `ant`
}

function L() {
    return N || `anticon`
}

function R(e) {
    return Object.keys(e).some(e => e.endsWith(`Color`))
}
var z = e => {
        let {
            prefixCls: t,
            iconPrefixCls: n,
            theme: r,
            holderRender: i
        } = e;
        t !== void 0 && (M = t), n !== void 0 && (N = n), `holderRender` in e && (F = i), r && (R(r) ? D(I(), r) : P = r)
    },
    B = () => ({
        getPrefixCls: (e, t) => t || (e ? `${I()}-${e}` : I()),
        getIconPrefixCls: L,
        getRootPrefixCls: () => M || I(),
        getTheme: () => P,
        holderRender: F
    }),
    V = e => {
        let {
            children: t,
            csp: n,
            autoInsertSpaceInButton: r,
            alert: o,
            anchor: s,
            form: l,
            locale: d,
            componentSize: f,
            direction: ie,
            space: ae,
            splitter: p,
            virtual: oe,
            dropdownMatchSelectWidth: m,
            popupMatchSelectWidth: h,
            popupOverflow: g,
            legacyLocale: _,
            parentContext: v,
            iconPrefixCls: y,
            theme: S,
            componentDisabled: C,
            segmented: w,
            statistic: fe,
            spin: pe,
            calendar: T,
            carousel: E,
            cascader: D,
            collapse: O,
            typography: k,
            checkbox: A,
            descriptions: j,
            divider: M,
            drawer: N,
            skeleton: P,
            steps: F,
            image: I,
            layout: L,
            list: R,
            mentions: z,
            modal: B,
            progress: V,
            result: H,
            slider: U,
            breadcrumb: W,
            menu: G,
            pagination: Se,
            input: Ce,
            textArea: we,
            empty: Te,
            badge: Ee,
            radio: De,
            rate: Oe,
            switch: ke,
            transfer: Ae,
            avatar: je,
            message: Me,
            tag: Ne,
            table: Pe,
            card: Fe,
            tabs: Ie,
            timeline: Le,
            timePicker: Re,
            upload: ze,
            notification: Be,
            tree: Ve,
            colorPicker: He,
            datePicker: Ue,
            rangePicker: We,
            flex: Ge,
            wave: Ke,
            dropdown: qe,
            warning: Je,
            tour: Ye,
            tooltip: Xe,
            popover: Ze,
            popconfirm: Qe,
            floatButton: $e,
            floatButtonGroup: et,
            variant: tt,
            inputNumber: nt,
            treeSelect: rt
        } = e, it = x.useCallback((t, n) => {
            let {
                prefixCls: r
            } = e;
            if (n) return n;
            let i = r || v.getPrefixCls(``);
            return t ? `${i}-${t}` : i
        }, [v.getPrefixCls, e.prefixCls]), K = y || v.iconPrefixCls || `anticon`, q = n || v.csp;
        ge(K, q);
        let J = _e(S, v.theme, {
                prefixCls: it(``)
            }),
            Y = {
                csp: q,
                autoInsertSpaceInButton: r,
                alert: o,
                anchor: s,
                locale: d || _,
                direction: ie,
                space: ae,
                splitter: p,
                virtual: oe,
                popupMatchSelectWidth: h ?? m,
                popupOverflow: g,
                getPrefixCls: it,
                iconPrefixCls: K,
                theme: J,
                segmented: w,
                statistic: fe,
                spin: pe,
                calendar: T,
                carousel: E,
                cascader: D,
                collapse: O,
                typography: k,
                checkbox: A,
                descriptions: j,
                divider: M,
                drawer: N,
                skeleton: P,
                steps: F,
                image: I,
                input: Ce,
                textArea: we,
                layout: L,
                list: R,
                mentions: z,
                modal: B,
                progress: V,
                result: H,
                slider: U,
                breadcrumb: W,
                menu: G,
                pagination: Se,
                empty: Te,
                badge: Ee,
                radio: De,
                rate: Oe,
                switch: ke,
                transfer: Ae,
                avatar: je,
                message: Me,
                tag: Ne,
                table: Pe,
                card: Fe,
                tabs: Ie,
                timeline: Le,
                timePicker: Re,
                upload: ze,
                notification: Be,
                tree: Ve,
                colorPicker: He,
                datePicker: Ue,
                rangePicker: We,
                flex: Ge,
                wave: Ke,
                dropdown: qe,
                warning: Je,
                tour: Ye,
                tooltip: Xe,
                popover: Ze,
                popconfirm: Qe,
                floatButton: $e,
                floatButtonGroup: et,
                variant: tt,
                inputNumber: nt,
                treeSelect: rt
            },
            X = Object.assign({}, v);
        Object.keys(Y).forEach(e => {
            Y[e] !== void 0 && (X[e] = Y[e])
        }), xe.forEach(t => {
            let n = e[t];
            n && (X[t] = n)
        }), r !== void 0 && (X.button = Object.assign({
            autoInsertSpace: r
        }, X.button));
        let Z = c(() => X, X, (e, t) => {
                let n = Object.keys(e),
                    r = Object.keys(t);
                return n.length !== r.length || n.some(n => e[n] !== t[n])
            }),
            {
                layer: at
            } = x.useContext(te),
            ot = x.useMemo(() => ({
                prefixCls: K,
                csp: q,
                layer: at ? `antd` : void 0
            }), [K, q, at]),
            Q = x.createElement(x.Fragment, null, x.createElement(ye, {
                dropdownMatchSelectWidth: m
            }), t),
            $ = x.useMemo(() => {
                var e, t, n, r;
                return le(((e = b.Form) == null ? void 0 : e.defaultValidateMessages) || {}, ((n = (t = Z.locale) == null ? void 0 : t.Form) == null ? void 0 : n.defaultValidateMessages) || {}, ((r = Z.form) == null ? void 0 : r.validateMessages) || {}, (l == null ? void 0 : l.validateMessages) || {})
            }, [Z, l == null ? void 0 : l.validateMessages]);
        Object.keys($).length > 0 && (Q = x.createElement(de.Provider, {
            value: $
        }, Q)), d && (Q = x.createElement(he, {
            locale: d,
            _ANT_MARK__: me
        }, Q)), (K || q) && (Q = x.createElement(ce.Provider, {
            value: ot
        }, Q)), f && (Q = x.createElement(ne, {
            size: f
        }, Q)), Q = x.createElement(ve, null, Q);
        let st = x.useMemo(() => {
            let e = J || {},
                {
                    algorithm: t,
                    token: n,
                    components: r,
                    cssVar: i
                } = e,
                a = be(e, [`algorithm`, `token`, `components`, `cssVar`]),
                o = t && (!Array.isArray(t) || t.length > 0) ? u(t) : ee,
                s = {};
            Object.entries(r || {}).forEach(([e, t]) => {
                let n = Object.assign({}, t);
                `algorithm` in n && (n.algorithm === !0 ? n.theme = o : (Array.isArray(n.algorithm) || typeof n.algorithm == `function`) && (n.theme = u(n.algorithm)), delete n.algorithm), s[e] = n
            });
            let c = Object.assign(Object.assign({}, re), n);
            return Object.assign(Object.assign({}, a), {
                theme: o,
                token: c,
                components: s,
                override: Object.assign({
                    override: c
                }, s),
                cssVar: i
            })
        }, [J]);
        return S && (Q = x.createElement(i.Provider, {
            value: st
        }, Q)), Z.warning && (Q = x.createElement(ue.Provider, {
            value: Z.warning
        }, Q)), C !== void 0 && (Q = x.createElement(se, {
            disabled: C
        }, Q)), x.createElement(a.Provider, {
            value: Z
        }, Q)
    },
    H = e => {
        let t = x.useContext(a),
            n = x.useContext(y);
        return x.createElement(V, Object.assign({
            parentContext: t,
            legacyLocale: n
        }, e))
    };
H.ConfigContext = a, H.SizeContext = m, H.config = z, H.useConfig = O, Object.defineProperty(H, "SizeContext", {
    get: () => m
}), n();
var U = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z`
                }
            }]
        },
        name: `check-circle`,
        theme: `filled`
    },
    W = x.forwardRef(function(e, t) {
        return x.createElement(_, r({}, e, {
            ref: t,
            icon: U
        }))
    }),
    G = {
        icon: {
            tag: `svg`,
            attrs: {
                "fill-rule": `evenodd`,
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z`
                }
            }]
        },
        name: `close`,
        theme: `outlined`
    };
n();
var Se = x.forwardRef(function(e, t) {
        return x.createElement(_, r({}, e, {
            ref: t,
            icon: G
        }))
    }),
    Ce = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z`
                }
            }]
        },
        name: `exclamation-circle`,
        theme: `filled`
    };
n();
var we = x.forwardRef(function(e, t) {
        return x.createElement(_, r({}, e, {
            ref: t,
            icon: Ce
        }))
    }),
    Te = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z`
                }
            }]
        },
        name: `info-circle`,
        theme: `filled`
    };
n();
var Ee = x.forwardRef(function(e, t) {
    return x.createElement(_, r({}, e, {
        ref: t,
        icon: Te
    }))
});
export {
    H as a, de as c, W as i, we as n, B as o, Se as r, pe as s, Ee as t
};