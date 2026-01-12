import {
    u as $,
    n as F,
    j as e,
    U as k,
    B as I,
    d as t,
    aW as f,
    t as u,
    aa as A,
    e as v,
    r as g,
    a3 as j,
    l as L,
    W as B,
    F as R,
    cr as O,
    V as M,
    s as w,
    T as W,
    ah as _,
    ac as D
} from "./_index.js";
import {
    S as H,
    B as G,
    a as U
} from "./Image.js";
import {
    l as K
} from "./stripe.esm.js";
import {
    S as o,
    a as T
} from "./SeasonTicketName.js";
import {
    S as N,
    c as V
} from "./index-2.js";
import {
    R as Y
} from "./StarOutlined.js";
import {
    I as q
} from "./index-3.js";
import {
    s as X
} from "./index-4.js";
import {
    A as E
} from "./AccessibleAnchor.js";
import {
    G as J,
    a as b,
    R as Q
} from "./RedirectToHomepage.js";
import {
    C as y
} from "./Centered.js";
import {
    r as Z
} from "./react.js";
import {
    M as ee
} from "./Button.js";
import {
    A as se
} from "./AnimatedBackground-2.js";
import {
    C as te
} from "./CircularProgress.js";
import "./GetAssetPath.js";
import "./Names.js";
import "./context.js";
import "./NavigateTo.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./capitalize.js";
const ie = s => {
        const [i, n, m] = $(!1), {
            info: c
        } = s, {
            id: a
        } = F(), x = !c.linkId && c.firstName, d = l => {
            u({
                e: l,
                default: {
                    title: "There was an error connecting with our payments provider.",
                    content: "Please try again."
                }
            }), m()
        }, r = () => {
            n(), f({
                url: "/api/billing/stripe-key",
                success: async l => {
                    let S;
                    S = await K(l.key), f({
                        url: "/api/billing/create-season-ticket-session",
                        method: "POST",
                        data: a ? {
                            encryptedUserId: a
                        } : void 0,
                        success: async p => {
                            await S.redirectToCheckout({
                                sessionId: p.id
                            }).catch(P => d(P))
                        },
                        error: p => {
                            d(p)
                        }
                    })
                },
                error: l => {
                    d(l)
                }
            })
        };
        return e.jsxs(ne, {
            children: [e.jsxs(N, {
                direction: "vertical",
                size: 12,
                style: {
                    fontFamily: k.SFPro,
                    fontSize: 16
                },
                children: [x ? e.jsx(e.Fragment, {
                    children: e.jsxs(h, {
                        children: ["You are purchasing a Gimkit ", o.name, " for", " ", e.jsxs("b", {
                            children: [c.firstName, "."]
                        })]
                    })
                }) : null, e.jsxs(h, {
                    children: ["The ", o.name, " is not a subscription.", " ", e.jsx("b", {
                        children: "You will only be charged once."
                    })]
                }), e.jsxs(h, {
                    children: ["Includes access to all the ", o.name, " benefits until the end of the season on ", H, "."]
                })]
            }), e.jsxs(I, {
                style: {
                    height: 65,
                    marginTop: 15
                },
                size: "large",
                block: !0,
                icon: e.jsx(Y, {}),
                type: "primary",
                loading: i,
                onClick: r,
                children: ["Purchase ", o.name, " - $5.00"]
            })]
        })
    },
    ne = t.div``,
    h = t.div``,
    oe = s => {
        const i = `${A()}/season-ticket/${s.info.linkId}`,
            n = () => {
                V(i), X.success("Link copied to clipboard!")
            };
        return e.jsxs(ae, {
            children: [e.jsxs("div", {
                children: ["Need somebody else to pay for your ", o.singularName, "? Send this link to them and they can purchase the ", o.name, " for you!"]
            }), e.jsxs("div", {
                className: "flex vc",
                style: {
                    gap: 6,
                    marginTop: 12
                },
                children: [e.jsx(q, {
                    value: i,
                    readOnly: !0
                }), e.jsx(I, {
                    onClick: n,
                    type: "primary",
                    children: "Copy Link"
                })]
            })]
        })
    },
    ae = t.div`
  font-size: 15px;
`,
    re = s => {
        const i = !s.info.linkId && s.info.firstName;
        return e.jsx(ce, {
            children: e.jsxs(N, {
                direction: "vertical",
                size: 20,
                className: "maxWidth",
                children: [e.jsx(C, {
                    children: e.jsx(ie, {
                        info: s.info
                    })
                }), i ? null : e.jsx(C, {
                    children: e.jsx(oe, {
                        info: s.info
                    })
                })]
            })
        })
    },
    ce = t.div`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`,
    C = t.div.attrs({
        className: "medium-shadow"
    })`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${v.Black};
  padding: 35px;
  border-radius: 8px;
`,
    de = () => e.jsxs(le, {
        children: [e.jsxs(xe, {
            children: [T.seasonName, " ", T.seasonNumber]
        }), e.jsx(me, {
            children: o.name
        })]
    }),
    le = t.div`
  font-family: ${k.FugazOne};
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`,
    xe = t.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`,
    me = t.div`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`,
    pe = s => {
        const i = !s.info.linkId && s.info.firstName;
        return e.jsxs(he, {
            children: [e.jsx(fe, {
                className: "flex-center",
                children: e.jsx(E, {
                    to: J(),
                    children: e.jsx(ue, {
                        src: "/client/img/svgLogoWhite.svg"
                    })
                })
            }), e.jsx(z, {
                children: e.jsx(de, {})
            }), e.jsxs(ge, {
                children: [e.jsx("div", {
                    children: e.jsx(G, {
                        forSelf: !i
                    })
                }), e.jsx(re, {
                    info: s.info
                })]
            })]
        })
    },
    he = t.div.attrs({
        className: "maxWidth flex-column vc"
    })`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`,
    fe = t.div`
  margin-bottom: 30px;
`,
    ue = t.img`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`,
    z = t.div`
  width: 100%;
  max-width: 1200px;
`,
    ge = t(z).attrs({
        className: "flex"
    })`
  margin-top: 20px;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 10px;
  }
`,
    je = {
        intensity: 13,
        acceleration: 1.01,
        brightness: {
            min: 50,
            max: 80
        },
        autoresize: !0,
        flickering: 0,
        traceSpeed: 1,
        explosion: 5,
        particles: 60,
        rocketsPoint: {
            min: 0,
            max: 100
        }
    },
    ke = {
        width: "100%",
        height: "100%"
    },
    ve = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? null : e.jsx(ye, {
        children: e.jsx(Z.Fireworks, {
            options: je,
            style: ke
        })
    }),
    ye = t.div.attrs({
        className: "maxWidth maxHeight"
    })`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,
    Se = s => (g.useEffect(() => {
        var i, n;
        s.boughtForSelf && j() && !((n = (i = L()) == null ? void 0 : i.seasonTicket) != null && n.viewed) && B({})
    }, [s.boughtForSelf]), e.jsxs(we, {
        children: [e.jsx(Te, {
            children: e.jsxs(be, {
                children: [e.jsx(Ce, {
                    children: e.jsx(Fe, {
                        src: U
                    })
                }), e.jsxs(Ie, {
                    children: [e.jsxs("div", {
                        style: {
                            fontFamily: k.FugazOne,
                            textTransform: "uppercase"
                        },
                        children: [e.jsx(Ne, {
                            children: o.name
                        }), e.jsxs(Ee, {
                            children: [s.hasSessionId ? "Purchased" : "Activated", "!"]
                        })]
                    }), e.jsx(ze, {
                        children: s.boughtForSelf ? e.jsx(e.Fragment, {
                            children: "Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!"
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx("b", {
                                children: s.info.firstName
                            }), " now has access to all Season Ticket benefits. Thanks for your support!"]
                        })
                    }), j() ? e.jsx("div", {
                        style: {
                            marginTop: 25
                        },
                        children: e.jsx(E, {
                            to: O + "/locker",
                            style: {
                                textDecoration: "none"
                            },
                            children: e.jsx(ee, {
                                type: "success",
                                customFontWeight: R.Bold,
                                ariaLabel: "Continue",
                                children: "Continue"
                            })
                        })
                    }) : null]
                })]
            })
        }), e.jsx(ve, {})]
    })),
    we = t(y).attrs({
        className: "maxAll"
    })`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`,
    Te = t.div.attrs({
        className: "animated bounceIn"
    })`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`,
    be = t(y)`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`,
    Ce = t.div``,
    Fe = t.img`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`,
    Ie = t.div``,
    Ne = t.div`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`,
    Ee = t.div`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`,
    ze = t.div`
  font-size: 18px;
  max-width: 400px;
`,
    ss = () => {
        const [s, i] = g.useState(null), n = M("session_id"), [m, c] = g.useState(!!n), {
            id: a
        } = F();
        w(() => {
            _("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        });
        const x = () => {
            j() || a ? f({
                url: a ? `/api/billing/season-ticket/info/${a}` : "/api/billing/season-ticket/info",
                success: r => i(r),
                error: r => u({
                    e: r,
                    default: {
                        title: "Error loading season ticket info",
                        content: "Please refresh and try again."
                    },
                    onOk: b
                })
            }) : Q()
        };
        w(() => {
            n ? D({
                sessionId: n,
                onSuccess: () => {
                    c(!1), x()
                },
                onError: r => {
                    u({
                        e: r,
                        default: {
                            title: "Error completion purchase",
                            content: "Refresh and try again. If the issue persists, please contact support."
                        },
                        onOk: b
                    })
                }
            }) : x()
        });
        const d = () => !s || m ? e.jsx(y, {
            className: "maxAll",
            children: e.jsx(te, {
                style: {
                    color: v.White
                }
            })
        }) : s.hasSeasonTicket ? e.jsx(Se, {
            info: s,
            hasSessionId: !!n,
            boughtForSelf: !a
        }) : e.jsx(pe, {
            info: s
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(W, {
                title: o.name
            }), e.jsx(Pe, {
                children: e.jsx(se, {
                    children: d()
                })
            })]
        })
    },
    Pe = t.div`
  flex: 1;
  color: ${v.White};
`;
export {
    ss as
    default
};