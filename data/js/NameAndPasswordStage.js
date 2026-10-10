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
    r as i
} from "./compact-item.js";
import {
    t as a
} from "./tooltip.js";
import {
    t as o
} from "./button.js";
import {
    t as s
} from "./input.js";
import {
    t as c
} from "./jsx-runtime.js";
import {
    c as l,
    n as u,
    s as d,
    y as f
} from "./_index.js";
import {
    a as p,
    i as m,
    t as h
} from "./StoreContext.js";
var g = e(t());
n();
var _ = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z`
                }
            }]
        },
        name: `lock`,
        theme: `outlined`
    },
    v = g.forwardRef(function(e, t) {
        return g.createElement(i, r({}, e, {
            ref: t,
            icon: _
        }))
    }),
    y = c(),
    b = e => (0, y.jsx)(a, {
        title: `Learn more on why we collect this data`,
        children: (0, y.jsx)(o, {
            style: {
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`
            },
            shape: `circle`,
            icon: (0, y.jsx)(v, {}),
            href: e.link || ``,
            target: `_blank`
        })
    }),
    x = e => (0, y.jsxs)(`div`, {
        style: {
            justifyContent: `space-between`
        },
        className: `flex maxWidth`,
        children: [(0, y.jsx)(`div`, {}), (0, y.jsx)(b, {
            link: e.link
        })]
    }),
    S = function(e) {
        return e.educator = `educator`, e.student = `student`, e.guardian = `guardian`, e.nonSchool = `nonSchool`, e
    }(S || {}),
    C = e => (0, y.jsx)(`div`, {
        style: {
            fontFamily: l.SFPro,
            fontWeight: d.Bold,
            color: u.Black,
            fontSize: 18
        },
        children: e.children
    }),
    w = {
        width: `100%`,
        display: `flex`,
        marginTop: 0,
        minHeight: 0
    },
    T = () => {
        let {
            login: e
        } = g.useContext(h), [t, n] = g.useState(e.firstName), [r, i] = g.useState(e.lastName), [a, o] = g.useState(e.password), c = e => n(e.target.value), l = e => i(e.target.value), u = e => o(e.target.value), d = () => {
            let n = !0;
            return e.informationNeeded.includes(m.firstName) && (t || (n = !1)), e.informationNeeded.includes(m.lastName) && (r || (n = !1)), e.informationNeeded.includes(m.accountPassword) && (!a || a.length < 6) && (n = !1), n
        }, _ = () => {
            d() && (t && (e.firstName = t), r && (e.lastName = r), a && (e.password = a), e.informationNeeded.replace(e.informationNeeded.filter(e => e !== m.firstName && e !== m.lastName && e !== m.accountPassword)))
        }, v = e.accountType === S.student;
        return (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(C, {
                children: `First Name`
            }), (0, y.jsx)(s, {
                maxLength: 20,
                style: w,
                size: `large`,
                placeholder: `First Name here...`,
                onChange: c,
                onPressEnter: _,
                autoFocus: !0
            }), (0, y.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), (0, y.jsxs)(C, {
                children: [`Last `, v ? `Initial` : `Name`]
            }), (0, y.jsx)(s, {
                maxLength: v ? 1 : 25,
                style: w,
                size: `large`,
                placeholder: `Last ${v?`Initial`:`Name`} here...`,
                onChange: l,
                onPressEnter: _
            }), e.informationNeeded.includes(m.accountPassword) && (0, y.jsxs)(y.Fragment, {
                children: [(0, y.jsx)(f, {}), (0, y.jsx)(C, {
                    children: `Password`
                }), (0, y.jsx)(`div`, {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: `Must contain at least 6 characters`
                }), (0, y.jsx)(s.Password, {
                    style: w,
                    onChange: u,
                    placeholder: `Password here...`,
                    size: `large`,
                    maxLength: 96,
                    onPressEnter: _
                })]
            }), (0, y.jsx)(f, {}), (0, y.jsx)(p, {
                disabled: !d(),
                onClick: _,
                style: {
                    width: `100%`
                },
                size: `large`,
                children: `Continue`
            }), (0, y.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), !v && (0, y.jsx)(x, {
                link: `https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061`
            })]
        })
    };
export {
    v as a, x as i, C as n, S as r, T as t
};