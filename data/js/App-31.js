import {
    j as o,
    e as n,
    U as S,
    d as t,
    F as v,
    r as u,
    n as k,
    V as R,
    a3 as g,
    a as j,
    T as w,
    S as T,
    B as y,
    M as m,
    W as I,
    t as N,
    $
} from "./_index.js";
import {
    N as A
} from "./NavigateTo.js";
import {
    I as O
} from "./IsURLFromUs.js";
import {
    S as E
} from "./App-4.js";
import {
    C as U
} from "./Centered.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
import "./index-2.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const B = h => {
        const {
            groupName: c,
            groupColor: i,
            groupCreator: f,
            icon: l,
            iconColor: d,
            response: x,
            bottomResponse: r
        } = h;
        return o.jsx(W, {
            children: o.jsxs(z, {
                children: [o.jsx(F, {
                    style: {
                        background: i
                    }
                }), o.jsx(D, {
                    children: c
                }), o.jsx(L, {
                    children: f
                }), o.jsxs(P, {
                    children: [o.jsxs(q, {
                        children: [o.jsx("div", {
                            children: o.jsx(M, {
                                className: l,
                                style: {
                                    color: d
                                }
                            })
                        }), o.jsx("div", {
                            children: o.jsx(G, {
                                children: x
                            })
                        })]
                    }), r || null]
                })]
            })
        })
    },
    W = t.div.attrs({
        className: "flex hc"
    })`
  background: ${n.Snow};
  color: ${n.Black};
  align-items: flex-start;
  font-family: ${S.SFPro};
  flex: 1;
`,
    z = t.div.attrs({
        className: "flex flex-column hc vc"
    })`
  max-width: 700px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
`,
    F = t.div.attrs({
        className: "light-shadow"
    })`
  height: 115px;
  width: 115px;
  border-radius: 8px;
`,
    D = t.div`
  margin-top: 10px;
  text-align: center;
  font-size: 50px;
  font-weight: ${v.UltraBold};
`,
    L = t.div`
  font-size: 22px;
  margin-top: -4px;
  color: rgba(0, 0, 0, 0.7);
`,
    P = t.div.attrs({
        className: "maxWidth"
    })`
  background: ${n.White};
  padding: 30px;
  border-radius: 7px;
  border-style: solid;
  border-width: 2px;
  border-color: ${n.BorderGray};
  margin-top: 25px;
`,
    q = t.div.attrs({
        className: "flex maxWidth vc"
    })``,
    M = t.i`
  font-size: 40px;
`,
    G = t.div`
  margin-left: 30px;
  font-size: 18px;
`,
    So = () => {
        const [h, c] = u.useState(!0), [i, f] = u.useState(null), [l, d] = u.useState(!1), r = k().id;
        let s = R("redirect");
        if (s) {
            const e = decodeURIComponent(s);
            O(e) || (s = null)
        }
        u.useEffect(() => {
            if (!g()) {
                if (s) {
                    window.location.href = `/join-class?class=${r}&location=${encodeURIComponent(window.location.pathname+window.location.search+window.location.hash)}`;
                    return
                }
                window.location.href = `/join-class?class=${r}`;
                return
            }
            j({
                url: "/api/v1/groups/request-access",
                method: "post",
                data: {
                    group: r
                },
                success: e => {
                    if (e && e.result && e.result.response && e.result.response === "IN" && e.result.existing && s) {
                        window.location.href = decodeURIComponent(s);
                        return
                    }
                    f(e), c(!1)
                },
                error: e => {
                    N({
                        e,
                        default: {
                            title: "Error joining class",
                            content: "Please contact support if this issue persists."
                        }
                    }), c(!1), A($)
                }
            })
        }, []);
        const C = () => {
                l || m.confirm({
                    title: "Are you sure you want to switch to a student?",
                    content: o.jsxs("div", {
                        style: {
                            color: n.Black
                        },
                        children: [o.jsxs("div", {
                            children: [o.jsx("b", {
                                children: "Students"
                            }), "- you're almost there! Keep going!"]
                        }), o.jsx("br", {}), o.jsxs("div", {
                            children: [o.jsx("b", {
                                children: "Teachers"
                            }), " - Don't switch! Doing so will cause you to lose many features."]
                        })]
                    }),
                    onOk: () => {
                        d(!0), j({
                            url: "/api/user/change-to-student",
                            success: () => {
                                m.destroyAll(), I({}), m.success({
                                    title: "Switched to a student!",
                                    content: "Click 'OK' to join this class",
                                    onOk: () => window.location.reload()
                                })
                            },
                            error: () => {
                                m.error({
                                    title: "There was an error switching to a student",
                                    content: "Please try again later",
                                    onOk: () => window.location.reload()
                                })
                            },
                            both: () => d(!1)
                        })
                    },
                    okText: "Switch to a student",
                    cancelText: "Stay as a teacher"
                })
            },
            b = () => {
                if (!g()) return null;
                if (h) return o.jsxs(o.Fragment, {
                    children: [o.jsx(w, {
                        title: "Class"
                    }), o.jsx(T, {
                        size: "large"
                    })]
                });
                if (!i) return null;
                const {
                    group: e
                } = i, p = (() => {
                    const {
                        result: a
                    } = i;
                    return a.response === "ERROR" ? a.reason && a.reason === "NOT_TEACHER" ? {
                        icon: "fas fa-chalkboard-teacher",
                        iconColor: "#311b92",
                        response: o.jsx("span", {
                            children: "It looks like you created an account as a teacher. Only students can join classes. Switch to a student to join this class."
                        }),
                        bottomResponse: o.jsx(y, {
                            size: "large",
                            block: !0,
                            style: {
                                marginTop: 30
                            },
                            type: "primary",
                            onClick: C,
                            loading: l,
                            children: "Switch To A Student"
                        })
                    } : {
                        icon: "fas fa-school",
                        iconColor: "red",
                        response: "There was an error joining this class. Please try again."
                    } : a.response === "WAITING" ? {
                        icon: "fad fa-traffic-cone",
                        iconColor: "#ff8f00",
                        response: "You've requested to join this class! Once your teacher accepts you, you'll be able to access their live games and assignments."
                    } : a.response === "OWNER" ? {
                        icon: "fas fa-thumbs-up",
                        iconColor: "#43a047",
                        response: `You're in the right place! Once your students visit this link, they'll ${e.autoAccept?"be part of your class!":"request to join your class!"}`
                    } : {
                        icon: "fas fa-check",
                        iconColor: "#43a047",
                        response: "You're now part of this class! That means you can access live games and assignments from your teacher.",
                        bottomResponse: s ? o.jsx(y, {
                            size: "large",
                            block: !0,
                            style: {
                                marginTop: 30
                            },
                            type: "primary",
                            href: decodeURIComponent(s),
                            children: "Go Back"
                        }) : null
                    }
                })();
                return o.jsxs(o.Fragment, {
                    children: [o.jsx(w, {
                        title: e.name
                    }), o.jsx(B, {
                        groupName: e.name,
                        groupColor: e.color,
                        groupCreator: e.creator,
                        icon: p.icon,
                        iconColor: p.iconColor,
                        response: p.response,
                        bottomResponse: p.bottomResponse
                    })]
                })
            };
        return o.jsxs(H, {
            children: [o.jsx(E, {
                includeSpacer: !0
            }), o.jsx(Y, {
                children: b()
            })]
        })
    },
    H = t.div.attrs({
        className: "maxWidth flex-column"
    })`
  background: ${n.Snow};
  flex: 1;
`,
    Y = t(U)`
  flex: 1;
`;
export {
    So as
    default
};