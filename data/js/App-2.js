import {
    U as b,
    r as l,
    u as Q,
    i as Y,
    f as w,
    j as e,
    e as d,
    b as i,
    D as P,
    F as $,
    x as y,
    a as R,
    t as X,
    M as U,
    S as K,
    C as I,
    B,
    aa as V,
    Z,
    af as J,
    ah as ee,
    l as te,
    E as se,
    cm as ie
} from "./_index.js";
import {
    E as j
} from "./Sizes.js";
import {
    A as D
} from "./AccessibleAnchor.js";
import {
    m as g
} from "./motion.js";
import {
    b as ne
} from "./index-1.js";
import {
    e as F
} from "./price.js";
import {
    T as oe
} from "./TrackPostHogEvent.js";
import {
    c as ae
} from "./index-2.js";
import {
    I as re
} from "./index-3.js";
import {
    s as le
} from "./index-4.js";
import {
    R as ce
} from "./StarOutlined.js";
const k = {
        titleFont: b.FugazOne
    },
    T = {
        Win: "Meta",
        Scroll: "ScrollLock",
        Spacebar: " ",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Del: "Delete",
        Crsel: "CrSel",
        Exsel: "ExSel",
        Apps: "ContextMenu",
        Esc: "Escape",
        Decimal: ".",
        Multiply: "*",
        Add: "+",
        Subtract: "-",
        Divide: "/"
    },
    de = t => {
        const s = t.key;
        if (Object.hasOwn(T, s)) {
            const o = T[s];
            Object.defineProperty(t, "key", {
                configurable: !0,
                enumerable: !0,
                get: () => o
            })
        }
    },
    he = (t, s) => {
        const o = l.useRef();
        l.useEffect(() => {
            o.current = n => {
                de(n), (Array.isArray(t) ? t.includes(n.key) : t === n.key) && (s == null || s(n))
            }
        }, [t, s]), l.useEffect(() => {
            const n = a => {
                var r;
                return (r = o.current) == null ? void 0 : r.call(o, a)
            };
            return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n)
        }, [])
    };
var x = (t => (t.limitedModes = "limitedModes", t.limitedGames = "limitedGames", t))(x || {});
const p = () => "limitedModes",
    ue = () => 5,
    S = 350,
    _ = 10,
    L = S + _,
    v = .2,
    me = t => {
        const [s, o, n] = Q(!1), a = p(), r = l.useMemo(() => t.isProExperience && !Y() && a === x.limitedModes && !w(), [t.isProExperience, a]);
        return e.jsxs(xe, {
            onMouseEnter: o,
            onMouseLeave: n,
            style: {
                backgroundImage: `url('${t.image}')`,
                borderColor: t.currentlySelected ? "#fdd835" : d.White
            },
            onClick: t.onSelect,
            className: t.noShadowOnContainer ? "" : "light-shadow",
            children: [t.forcePremiumBadge || r ? e.jsx(fe, {
                animate: {
                    opacity: s ? 0 : 1
                },
                initial: {
                    opacity: 1
                },
                transition: {
                    duration: v
                },
                children: e.jsx(ge, {})
            }) : e.jsx("div", {}), e.jsxs(pe, {
                children: [r ? e.jsx(ye, {
                    animate: {
                        opacity: s ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: v
                    },
                    children: "Gimkit Pro Exclusive"
                }) : null, !r && t.tag ? e.jsx(ve, {
                    animate: {
                        opacity: s ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: v
                    },
                    children: t.tag
                }) : null, e.jsx(je, {
                    children: t.name
                }), e.jsx(we, {
                    animate: {
                        height: s ? "auto" : 0
                    },
                    initial: {
                        height: 0
                    },
                    transition: {
                        duration: v
                    },
                    children: t.tagline
                })]
            })]
        })
    },
    xe = i.div.attrs({
        className: "flex flex-column between"
    })`
  border-width: 4px;
  border-style: solid;
  width: ${S}px;
  height: 180px;
  border-radius: 4px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.3s;
`,
    fe = i(g.div).attrs({
        className: "maxWidth"
    })`
  padding: 10px 15px;
`,
    ge = i.img.attrs({
        src: "/client/img/pro/star.svg"
    })`
  height: 20px;
`,
    pe = i.div.attrs({
        className: "maxWidth flex-column"
    })`
  padding: 10px 15px;
  background: linear-gradient(
    to top,
    hsla(0, 0%, 0%, 0.69) 0%,
    hsla(0, 0%, 0%, 0.681) 8.1%,
    hsla(0, 0%, 0%, 0.656) 15.5%,
    hsla(0, 0%, 0%, 0.618) 22.4%,
    hsla(0, 0%, 0%, 0.569) 28.9%,
    hsla(0, 0%, 0%, 0.511) 35%,
    hsla(0, 0%, 0%, 0.447) 41%,
    hsla(0, 0%, 0%, 0.379) 46.7%,
    hsla(0, 0%, 0%, 0.311) 52.5%,
    hsla(0, 0%, 0%, 0.243) 58.3%,
    hsla(0, 0%, 0%, 0.179) 64.3%,
    hsla(0, 0%, 0%, 0.121) 70.5%,
    hsla(0, 0%, 0%, 0.072) 77.1%,
    hsla(0, 0%, 0%, 0.034) 84.2%,
    hsla(0, 0%, 0%, 0.009) 91.8%,
    hsla(0, 0%, 0%, 0) 100%
  );
  overflow: hidden;
  align-items: flex-start;
`,
    ye = i(g.div)`
  font-family: ${k.titleFont};
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${d.Black};
  color: ${d.White};
`,
    ve = i(g.div)`
  font-family: ${k.titleFont};
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`,
    je = i.div`
  font-family: ${k.titleFont};
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${d.Black};
  color: ${d.White};
`,
    we = i(g.div)`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${d.Black};
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${b.ProductSans};
`,
    be = t => {
        const [s, o] = l.useState(0), n = l.useRef(!1), a = l.useRef(null), [r] = ne(a), u = l.useMemo(() => t.verticalList ? 0 : s * L * -1 + j.sideMargin, [s, t.verticalList]), c = l.useMemo(() => !(s <= 0), [s]), f = () => {
            n.current = !0
        }, m = () => {
            n.current = !1
        };
        he(["ArrowLeft", "ArrowRight"], h => {
            n.current && (h.key === "ArrowLeft" && N(), h.key === "ArrowRight" && A())
        });
        const M = l.useMemo(() => {
                if (s + 1 === t.list.items.length) return !1;
                const h = (r - j.sideMargin) / L;
                return !(s >= t.list.items.length - h)
            }, [r, s, t.list.items.length]),
            N = () => {
                c && o(Math.max(0, s - 1))
            },
            A = () => {
                M && o(s + 1)
            };
        return e.jsxs(ke, {
            onMouseEnter: f,
            onMouseLeave: m,
            children: [t.hideListName ? null : e.jsx(Ee, {
                children: t.list.name
            }), e.jsxs(Me, {
                children: [e.jsx(Ce, {
                    animate: {
                        x: u
                    },
                    initial: {
                        x: t.verticalList ? 0 : j.sideMargin
                    },
                    transition: {
                        duration: .3,
                        ease: "easeOut"
                    },
                    style: t.verticalList ? {
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fill, ${S}px)`,
                        justifyContent: "center",
                        gap: 20,
                        margin: "0px 25px"
                    } : {
                        gap: _
                    },
                    ref: a,
                    children: t.list.items.map(h => e.jsx(me, {
                        name: h.name,
                        tagline: h.tagline,
                        image: h.imageUrl,
                        currentlySelected: t.forceAllSelected ? !0 : t.currentlySelectedExperienceId === h._id,
                        onSelect: t.onExperienceSelected ? () => t.onExperienceSelected(h._id) : null,
                        isProExperience: h.isPremiumExperience,
                        noShadowOnContainer: t.noShadowOnItems,
                        forcePremiumBadge: t.forcePremiumBadge,
                        tag: h.tag
                    }, `list-${t.list._id}-${h._id}`))
                }), t.verticalList ? null : e.jsxs(Pe, {
                    children: [e.jsx($e, {
                        animate: {
                            opacity: c ? 1 : 0
                        },
                        initial: {
                            opacity: 0
                        },
                        onClick: N,
                        children: e.jsx(W, {
                            style: {
                                cursor: c ? "pointer" : "auto"
                            },
                            children: e.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    }), e.jsx(Se, {
                        animate: {
                            opacity: M ? 1 : 0
                        },
                        initial: {
                            opacity: 0
                        },
                        onClick: A,
                        children: e.jsx(W, {
                            style: {
                                cursor: M ? "pointer" : "auto"
                            },
                            children: e.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        })
                    })]
                })]
            })]
        })
    },
    ke = i.div.attrs({
        className: "maxWidth"
    })``,
    Ee = i.div`
  font-family: ${k.titleFont};
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`,
    Me = i.div.attrs({
        className: "maxWidth"
    })`
  position: relative;
  overflow: hidden;
`,
    Ce = i(g.div).attrs({
        className: "flex"
    })``,
    Pe = i.div.attrs({
        className: "maxAll flex vc between"
    })`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`,
    H = i(g.div).attrs({
        className: "flex-center maxHeight"
    })`
  width: 60px;
  line-height: 1;
  color: ${d.White};
`,
    $e = i(H)`
  background: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`,
    Se = i(H)`
  background: linear-gradient(
    to left,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`,
    W = i.div.attrs({
        className: "flex-center"
    })`
  font-size: 32px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`,
    Ne = [{
        question: "What happens if I pay now and my school pays later?",
        answer: e.jsxs("span", {
            children: ["If your school purchases a group license and you've already purchased Gimkit Pro, you’ll get refunded for your unused time.", " ", e.jsx("b", {
                children: "So if you purchase a year of Gimkit Pro today and your school upgrades next month, we’d refund you $54.89."
            }), " ", "That refund happens automatically. No need to contact support!"]
        })
    }, {
        question: "What's included with Gimkit Pro?",
        answer: e.jsxs("span", {
            children: [p() === x.limitedModes ? "Unrestricted access to all modes, including Gimkit Pro Exclusives." : "No game limits, host as many games as you'd like!", " ", "You'll also be able to create assignments (play Gimkit asynchronously) and upload audio + images to your questions."]
        })
    }, {
        question: "What's your refund policy?",
        answer: e.jsxs("span", {
            children: ["Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with your subscription for any reason, just contact us and we’ll take care of you.", " ", e.jsx("a", {
                href: "https://www.notion.so/gimkit/A-fair-refund-policy-a1688f61330b49a495a48bd0fd08697b",
                target: "_blank",
                children: "Check out our full refund policy here."
            })]
        })
    }],
    Ae = () => e.jsxs(e.Fragment, {
        children: [e.jsx(P, {
            style: {
                margin: "26px 0px"
            }
        }), e.jsx(Ie, {
            children: Ne.map(t => e.jsxs(Fe, {
                children: [e.jsx(Te, {
                    children: t.question
                }), e.jsx(Le, {
                    children: t.answer
                })]
            }, t.question))
        })]
    }),
    Ie = i.div.attrs({
        className: "maxWidth"
    })`
  padding: 0px ${()=>E}px;
`,
    Fe = i.div`
  margin-bottom: 15px;
  background: ${d.White};
  padding: 30px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${d.BorderGray};
  border-width: 2px;
  &:last-child {
    margin-bottom: 0px;
  }
`,
    Te = i.div`
  font-size: 21px;
  font-weight: ${$.Bold};
`,
    Le = i.div`
  font-size: 16px;
  margin-top: 5px;
`,
    We = t => {
        const [s, o] = y.useState(!0), [n, a] = y.useState(null), [r, u] = y.useState(null), c = () => `${V()}/pay-for-me/${r}`, f = () => {
            ae(c()), le.success("Pay For Me link copied to clipboard!")
        };
        return y.useEffect(() => {
            R({
                method: "GET",
                url: "/api/billing/pay-for-me-link",
                success: m => {
                    u(m)
                },
                error: m => {
                    a(m), X({
                        e: m,
                        default: {
                            title: "Error connecting to our server",
                            content: "An error ocurred while connecting to our server. Please try again later."
                        }
                    })
                },
                both: () => o(!1)
            })
        }, []), e.jsx(U, {
            open: t.showPayForMeModal,
            onCancel: t.onCancel,
            footer: null,
            closable: !1,
            width: 690,
            bodyStyle: {
                padding: 0
            },
            children: s ? e.jsx("div", {
                style: {
                    height: 361
                },
                className: "flex maxWidth maxHeight hc vc",
                children: e.jsx(K, {
                    size: "large"
                })
            }) : e.jsxs(ze, {
                children: [e.jsx(Re, {
                    onClick: t.onCancel
                }), e.jsxs(Ge, {
                    children: [e.jsx("span", {
                        style: {
                            fontWeight: $.UltraBold
                        },
                        children: "Pay For Me"
                    }), " ", "link"]
                }), e.jsxs(Oe, {
                    children: ["Send this link to someone to allow them to pay for your", " ", I, " Pro subscription. Once they pay, you'll get one full year of ", I, " Pro and we'll make sure autorenew is off so they aren't charged again.", e.jsx("br", {}), " ", e.jsx("br", {}), "One more thing: once they pay for your subscription, we'll send you an email letting you know!"]
                }), e.jsx(P, {}), !n && e.jsxs("div", {
                    className: "flex",
                    children: [e.jsx(re, {
                        value: c(),
                        size: "large",
                        readOnly: !0
                    }), e.jsx(B, {
                        size: "large",
                        type: "primary",
                        style: {
                            marginLeft: 10
                        },
                        onClick: f,
                        children: "Copy Link"
                    })]
                })]
            })
        })
    },
    ze = i.div.attrs({
        className: "maxWidth"
    })`
  color: ${d.Black};
  font-family: ${b.SFPro};
  padding: 30px;
`,
    Ge = i.div`
  font-size: 32px;
`,
    Oe = i.div`
  font-size: 17px;
  margin-top: 14px;
`,
    Re = i.i.attrs({
        className: "fal fa-times"
    })`
  position: absolute;
  font-size: 24px;
  top: 30px;
  right: 30px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`,
    Ue = t => {
        const [s, o] = l.useState(!1), [n, a] = l.useState(!1), r = () => o(!0);
        return e.jsxs("div", {
            className: "flex flex-column vc",
            style: {
                marginTop: t.showingModes ? 25 : 20,
                paddingBottom: 30
            },
            children: [e.jsx(D, {
                to: Z,
                children: e.jsx(B, {
                    type: "primary",
                    size: "large",
                    icon: e.jsx(ce, {}),
                    style: {
                        width: 380,
                        height: 70
                    },
                    children: w() ? "Upgrade to Gimkit Pro early" : "Upgrade to Gimkit Pro"
                })
            }), null, e.jsx(P, {
                style: {
                    margin: "26px 0px"
                }
            }), e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx(C, {
                    to: J,
                    children: "Group license pricing"
                }), e.jsx(z, {}), e.jsx(C, {
                    onClick: () => a(!0),
                    children: "Pay For Me Link"
                }), !s && e.jsxs(e.Fragment, {
                    children: [e.jsx(z, {}), e.jsx(C, {
                        onClick: r,
                        children: "FAQ"
                    })]
                })]
            }), s && e.jsx(Ae, {}), e.jsx(We, {
                showPayForMeModal: n,
                onCancel: () => a(!1)
            })]
        })
    };
i.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`;
const C = i(D)`
  font-size: 16px;
  display: block;
  color: ${d.Black};
  text-decoration: underline;
`,
    z = i.i.attrs({
        className: "fas fa-circle"
    })`
  margin: 0px 12px;
  font-size: 10px;
`,
    q = 180,
    Be = t => {
        const {
            copy: s
        } = t, o = () => s && s.title ? s.title : w() ? e.jsx(e.Fragment, {
            children: "Your trial ends soon."
        }) : p() === x.limitedGames ? e.jsx(e.Fragment, {
            children: "Upgrade to host unlimited games"
        }) : e.jsxs("div", {
            style: {
                fontSize: 40,
                marginTop: 30
            },
            children: ["Get all game modes for ", F({
                simple: !0
            }), " a month."]
        }), n = () => {
            if (s && s.description) return s.description;
            const a = p(),
                r = a === x.limitedModes ? "a few game modes that rotate every few weeks" : `host ${ue()} games per month`;
            return e.jsxs("div", {
                className: "maxWidth",
                style: {
                    textAlign: "left"
                },
                children: [w() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${r}.` : `You're on the free version of Gimkit, which limits you to ${r}.`, e.jsx("br", {}), " ", e.jsx("br", {}), a === x.limitedModes ? "Want access to every single mode?" : "Want to host unlimited games?", " ", "Upgrade to Gimkit Pro! It’s just", " ", F({
                    simple: !0
                }), " a month and you’ll be helping support us, an independent small business.", a === x.limitedModes ? e.jsxs(e.Fragment, {
                    children: [e.jsx("br", {}), " ", e.jsx("br", {}), "Upgrade to get access to these game modes and more:"]
                }) : null]
            })
        };
        return e.jsxs(De, {
            background: t.showingModes ? "#0A2540" : "transparent",
            color: t.showingModes ? d.White : d.Black,
            bottomPadding: t.showingModes ? q : 0,
            maskImage: !!t.showingModes,
            children: [e.jsx(_e, {
                onClick: t.close
            }), e.jsxs(He, {
                children: [e.jsx(qe, {
                    children: o()
                }), e.jsx(Qe, {
                    style: {
                        marginTop: t.showingModes ? 10 : 5
                    },
                    children: n()
                })]
            })]
        })
    },
    De = i.div.attrs({
        className: "maxWidth flex flex-column vc"
    })`
  padding: ${()=>E}px 0px;
  padding-top: 30px;
  background: ${t=>t.background};
  color: ${t=>t.color};
  text-align: center;
  padding-bottom: ${t=>t.bottomPadding}px;
  ${t=>t.maskImage?`mask-image: linear-gradient(
    to bottom,
    ${t.background} 50%,
    transparent 100%);`:""}
`,
    _e = i.i.attrs({
        className: "fal fa-times"
    })`
  position: absolute;
  font-size: 24px;
  top: 25px;
  right: ${()=>E}px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`,
    He = i.div.attrs({
        className: "maxWidth"
    })`
  padding: 0px ${()=>E}px;
`,
    qe = i.div`
  font-size: 42px;
  font-weight: ${$.UltraBold};
`,
    Qe = i.div`
  font-size: 20px;
`,
    G = {
        Classic: 1
    },
    Ye = () => {
        const [t, s] = l.useState([]);
        return l.useEffect(() => {
            R({
                url: "/api/experiences",
                data: {
                    mode: "liveGame"
                },
                cacheKey: "EXPERIENCES",
                success: o => {
                    let n = [];
                    const a = [],
                        r = o.every(u => u.items.every(c => !c.isPremiumExperience));
                    o.forEach(u => {
                        u.items.forEach(c => {
                            (c.isPremiumExperience || r) && (a.includes(c._id) || (n.push({
                                ...c,
                                isPremiumExperience: !0
                            }), a.push(c._id)))
                        })
                    }), Object.keys(G).forEach(u => {
                        const c = G[u],
                            f = n.find(m => m.name === u);
                        f && (n = n.filter(m => m.name !== u), n.splice(c, 0, f))
                    }), s(n)
                }
            })
        }, []), t.length ? e.jsx(O, {
            children: e.jsx(be, {
                list: {
                    _id: "_",
                    name: "_",
                    items: t
                },
                hideListName: !0,
                noShadowOnItems: !0,
                forceAllSelected: !0,
                forcePremiumBadge: !0
            })
        }) : e.jsx(O, {
            children: e.jsx("div", {
                style: {
                    height: 180
                }
            })
        })
    },
    O = i.div.attrs({
        className: "maxWidth"
    })`
  margin-top: ${()=>-q+25}px;
`,
    E = j.sideMargin,
    rt = t => {
        l.useEffect(() => {
            t.visible && t.showModes && ee("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        }, [t.visible, t.showModes]), l.useEffect(() => {
            t.visible && oe({
                properties: {
                    reason: t.id
                }
            })
        }, [t.visible, t.id]);
        const s = te();
        if (!s) return null;
        const o = p(),
            n = t.showModes && o === x.limitedModes;
        return e.jsx(se, {
            theme: {
                algorithm: ie.defaultAlgorithm
            },
            children: e.jsx(U, {
                footer: null,
                width: 850,
                style: {
                    top: 30
                },
                styles: {
                    content: {
                        padding: 0,
                        borderRadius: 10,
                        overflow: "hidden"
                    },
                    body: {
                        padding: 0,
                        color: d.Snow
                    }
                },
                open: t.visible,
                onCancel: t.close,
                closable: !1,
                children: e.jsxs(Xe, {
                    children: [e.jsx(Be, {
                        user: s,
                        close: t.close,
                        copy: t.copy,
                        showingModes: n
                    }), n ? e.jsx(Ye, {}) : null, e.jsx(Ue, {
                        showingModes: n
                    })]
                })
            })
        })
    },
    Xe = i.div.attrs({
        className: "maxWidth"
    })`
  color: ${d.Black};
  font-family: ${b.SFPro};
`;
export {
    k as E, x as F, Be as T, rt as U, ue as a, be as b, p as g, he as u
};