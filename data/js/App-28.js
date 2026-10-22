import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    G as n,
    g as r,
    h as i,
    t as a
} from "./utils.js";
import {
    t as o
} from "./react-1.js";
import {
    l as s
} from "./dist-3.js";
import {
    t as c
} from "./button-1.js";
import {
    t as l
} from "./input.js";
import {
    t as u
} from "./spin.js";
import {
    t as d
} from "./App-4.js";
import {
    t as f
} from "./jsx-runtime.js";
import {
    c as p,
    l as m,
    n as h,
    s as g,
    y as _
} from "./_index.js";
import {
    n as v
} from "./EmailStage.js";
import {
    t as y
} from "./NavigateTo.js";
var b = e(o()),
    x = f(),
    S = () => {
        let [e, o] = b.useState(!0), [f, p] = b.useState(``), [m, h] = b.useState(``), [g, S] = b.useState(r() ? i().email : ``), [k, A] = b.useState(!1), {
            plan: j
        } = s();
        b.useEffect(() => {
            t({
                url: `/api/quote/fetch-plans`,
                success: e => {
                    j && (e && e.plans && !e.plans.includes(j) ? n({
                        title: `Invalid plan`,
                        onOk: () => window.location.href = `/`
                    }) : (p(j), o(!1)))
                },
                error: () => n({
                    title: `Plan not found`
                })
            })
        }, []);
        let M = m && g && v(g),
            N = e => {
                h(e.target.value)
            },
            P = e => {
                S(e.target.value)
            },
            F = () => {
                !k && M && (A(!0), t({
                    url: `/api/quote/createFromPlan`,
                    method: `post`,
                    data: {
                        planId: f,
                        email: g,
                        name: m
                    },
                    success: e => {
                        y(`/quote/${e.quoteId}`)
                    },
                    error: () => n({
                        title: `Error creating quote`,
                        content: `Please contact support`
                    }),
                    both: () => A(!1)
                }))
            };
        return (0, x.jsxs)(C, {
            className: `flex-column vc`,
            children: [(0, x.jsx)(d, {
                includeSpacer: !0
            }), (0, x.jsx)(w, {
                children: e ? (0, x.jsx)(`div`, {
                    className: `maxWidth hc flex`,
                    children: (0, x.jsx)(u, {})
                }) : (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)(a, {
                        title: `New Quote`
                    }), (0, x.jsxs)(T, {
                        className: `flex vc wrap`,
                        children: [(0, x.jsx)(`img`, {
                            src: `/client/img/quote/together.svg`,
                            style: {
                                height: 120,
                                width: 120,
                                marginRight: 15
                            }
                        }), (0, x.jsxs)(`div`, {
                            children: [(0, x.jsx)(E, {
                                children: `New Quote`
                            }), (0, x.jsx)(D, {
                                children: `We're so excited to get your group on Gimkit Pro!`
                            })]
                        })]
                    }), (0, x.jsx)(_, {}), (0, x.jsx)(O, {
                        children: `What is the name of your group?`
                    }), (0, x.jsx)(l, {
                        onChange: N,
                        placeholder: `Group name...`,
                        size: `large`,
                        maxLength: 55,
                        onPressEnter: F
                    }), (0, x.jsx)(`div`, {
                        style: {
                            height: 10
                        }
                    }), (0, x.jsx)(O, {
                        children: `What is your email?`
                    }), (0, x.jsx)(l, {
                        onChange: P,
                        placeholder: `Email here...`,
                        size: `large`,
                        value: g,
                        onPressEnter: F,
                        type: `email`
                    }), (0, x.jsxs)(`div`, {
                        className: `maxWidth flex`,
                        style: {
                            justifyContent: `space-between`,
                            marginTop: 5
                        },
                        children: [(0, x.jsx)(`div`, {}), (0, x.jsx)(c, {
                            onClick: F,
                            loading: k,
                            disabled: !M,
                            type: `primary`,
                            children: `Submit`
                        })]
                    })]
                })
            })]
        })
    },
    C = m.div`
  min-height: 100%;
  background: ${h.Snow};
  width: 100%;
  color: ${h.Black};
  font-family: ${p.SFPro};
`,
    w = m.div`
  width: 100%;
  max-width: 550px;
  padding: 20px;
`,
    T = m.div`
  width: 100%;
`,
    E = m.h1`
  font-size: 39px;
  color: ${h.Black};
  font-weight: ${g.UltraBold};
  margin-bottom: -10px;
`,
    D = m.p`
  font-size: 17px;
  margin-bottom: 0px;
`,
    O = m.h2`
  font-weight: ${g.Bold};
  color: ${h.Black};
  font-size: 22px;
  margin-bottom: 0px;
`;
export {
    S as
    default
};