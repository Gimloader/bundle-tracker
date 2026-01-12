const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/NotionContent.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/NotionContent-i0skEamo.css"]))) => i.map(i => d[i]);
import {
    r as n,
    I as ie,
    _ as le,
    s as ce,
    aW as ve,
    j as e,
    p as je,
    d as m,
    aq as we,
    b as be,
    A as Ce,
    U as R,
    F as z,
    C as k,
    E as A,
    cm as N,
    B as M,
    w as ye,
    u as L,
    a as de,
    i as b,
    t as ke,
    M as Se,
    D as Ne,
    m as he,
    o as x,
    aZ as Ie,
    af as Ae,
    ad as Me,
    a1 as D,
    f as Oe,
    cn as De,
    l as T,
    co as W,
    aT as Le,
    cp as $e,
    cq as _e,
    cr as Ee,
    cb as ue,
    a5 as Pe,
    a3 as Be
} from "./_index.js";
import {
    d as me,
    u as Fe,
    C as Re,
    a as y,
    S as B
} from "./Shortcut.js";
import {
    o as ge
} from "./mobxreact.esm.js";
import {
    A as fe
} from "./AccessibleAnchor.js";
import {
    b as U
} from "./index-1.js";
import {
    S as F
} from "./index-2.js";
import {
    D as ze
} from "./index-6.js";
import {
    F as p
} from "./FontAwesomeIcon.js";
import {
    U as Te
} from "./App-2.js";
import {
    N as I
} from "./NavigateTo.js";
import {
    a as We
} from "./index-15.js";
import {
    C as Ue
} from "./colors.js";
import {
    n as Ge
} from "./motion.js";
import {
    u as He
} from "./useWarningOnMountInDevelopment.js";
import {
    M as G,
    D as Ve
} from "./index-10.js";
var Ke = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "defs",
                attrs: {},
                children: [{
                    tag: "style",
                    attrs: {}
                }]
            }, {
                tag: "path",
                attrs: {
                    d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"
                }
            }]
        },
        name: "login",
        theme: "outlined"
    },
    qe = function(a, s) {
        return n.createElement(ie, le({}, a, {
            ref: s,
            icon: Ke
        }))
    },
    Je = n.forwardRef(qe),
    Ye = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "menu",
        theme: "outlined"
    },
    Ze = function(a, s) {
        return n.createElement(ie, le({}, a, {
            ref: s,
            icon: Ye
        }))
    },
    Qe = n.forwardRef(Ze);

function Xe(t, a) {
    var s = n.useState(g()),
        r = s[0],
        l = s[1];
    He();

    function h() {
        var c = g();
        (c === null || c === "null") && o(a)
    }

    function g() {
        if (typeof localStorage > "u") return null;
        var c = localStorage.getItem(t) || "null";
        try {
            return JSON.parse(c)
        } catch (w) {
            console.error(w)
        }
        return c
    }

    function d(c) {
        return typeof localStorage > "u" ? null : localStorage.setItem(t, JSON.stringify(c))
    }
    var o = n.useCallback(function(c) {
            l(c), d(c)
        }, []),
        i = n.useCallback(function(c) {
            c.storageArea === localStorage && c.key === t && l(c.newValue)
        }, []),
        u = n.useCallback(function() {
            if (o(null), typeof localStorage > "u") return !1;
            localStorage.removeItem(t)
        }, [t]);
    n.useEffect(function() {
        h()
    }, []), n.useEffect(function() {
        return typeof window < "u" ? (window.addEventListener("storage", i), function() {
            window.removeEventListener("storage", i)
        }) : (console.warn("useLocalstorage: window is undefined."), Ge)
    }, []);
    var f = Object.assign([r, o, u], {
        value: r,
        remove: u,
        set: o
    });
    return f
}
const H = We(() => je(() => import("./NotionContent.js"), __vite__mapDeps([0, 1, 2, 3]))),
    V = () => e.jsx(Ce, {
        active: !0,
        title: !1,
        paragraph: {
            rows: 14
        },
        style: {
            padding: 20
        }
    }),
    K = t => {
        const [a, s] = n.useState(), {
            item: {
                notionPageId: r,
                publishDate: l
            }
        } = t;
        ce(() => {
            H.preload()
        }), n.useEffect(() => {
            !a && r && ve({
                url: `/api/content/${r}`,
                cacheKey: "NOTION_CONTENT",
                success: d => s(d)
            })
        }, [r, a]);
        const h = () => {
                var c, w;
                const d = r.replace(/-/g, ""),
                    o = Object.keys(a).find(E => E.replace(/-/g, "") === d);
                if (!o) return null;
                const i = a[o],
                    u = ((c = i.value.properties) == null ? void 0 : c.title[0][0]) ?? "News";
                let f = ((w = i.value.format) == null ? void 0 : w.page_cover) ?? null;
                return f && f.startsWith("/") && (f = `https://notion.so${f}`), {
                    title: u,
                    coverImage: f
                }
            },
            g = () => {
                if (!a) return e.jsx(V, {});
                const {
                    title: d,
                    coverImage: o
                } = h();
                return e.jsxs(n.Suspense, {
                    fallback: e.jsx(V, {}),
                    children: [o ? e.jsx(tt, {
                        draggable: !1,
                        src: o
                    }) : null, e.jsxs(nt, {
                        children: [e.jsxs(at, {
                            style: {
                                marginTop: t.isFirstItem && !o ? 30 : 0
                            },
                            children: [e.jsx(st, {
                                children: d
                            }), e.jsxs(rt, {
                                children: [e.jsx(p, {
                                    name: "far fa-calendar-alt",
                                    style: {
                                        fontSize: "0.8em",
                                        marginRight: 5
                                    }
                                }), we(be.unix(l).fromNow())]
                            })]
                        }), e.jsx(H, {
                            content: a
                        })]
                    })]
                })
            };
        return e.jsx(et, {
            children: g()
        })
    },
    et = m.div.attrs({
        className: "maxWidth"
    })``,
    tt = m.img.attrs({
        className: "maxWidth"
    })`
  margin-bottom: 25px;
`,
    nt = m.div.attrs({
        className: "maxWidth"
    })`
  padding: 0px 20px;
  font-family: ${R.SFPro};
`,
    at = m.div.attrs({
        className: "maxWidth flex between vc"
    })`
  line-height: 1;
  margin-bottom: 20px;
`,
    st = m.div`
  font-size: 28px;
  font-weight: ${z.Bold};
`,
    rt = m.div.attrs({
        className: "flex vc"
    })`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`,
    ot = t => e.jsxs(it, {
        children: [e.jsxs(lt, {
            children: [e.jsxs(ct, {
                children: [k, " News"]
            }), e.jsxs(dt, {
                children: ["Your source for all things ", k, "!"]
            })]
        }), e.jsx("div", {
            children: e.jsx(A, {
                theme: {
                    algorithm: N.darkAlgorithm
                },
                children: e.jsx(M, {
                    onClick: t.close,
                    type: "text",
                    icon: e.jsx(ye, {})
                })
            })
        })]
    }),
    it = m.div.attrs({
        className: "maxWidth flex vc between"
    })`
  color: ${Ue.White};
  padding: 20px;
  background: #730aad;
`,
    lt = m.div``,
    ct = m.div`
  font-size: 16px;
  font-weight: ${z.Bold};
`,
    dt = m.div`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`,
    ht = t => {
        const [a, s] = n.useState(!0), [r, l] = n.useState([]), [h, g] = Xe("last-viewed-news", 0), [d, o] = n.useState(!1), [i, u, f] = L(!0), c = n.useCallback(() => {
            o(!0)
        }, [o]), w = n.useCallback(() => {
            o(!1), t.onClose && t.onClose()
        }, [o, t.onClose]);
        if (ce(() => {
                de({
                    url: "/api/news/fetch",
                    data: {
                        isStudent: b()
                    },
                    success: C => {
                        l(C);
                        const P = h ?? 0,
                            O = C[0];
                        O && (O && O.publishDate > P && t.allowAutoOpen && c(), g(O.publishDate))
                    },
                    error: C => {
                        t.open && ke({
                            e: C,
                            default: {
                                title: "Error loading news"
                            }
                        })
                    },
                    both: () => {
                        s(!1)
                    }
                })
            }), n.useEffect(() => {
                t.open && c()
            }, [t.open]), a) return null;
        const E = () => r.length ? r.length !== 1 && i ? e.jsxs("div", {
            style: {
                paddingBottom: 35
            },
            children: [e.jsx(K, {
                item: r[0],
                isFirstItem: !0
            }), e.jsx("div", {
                className: "maxWidth flex-center",
                style: {
                    marginTop: 30
                },
                children: e.jsx(M, {
                    shape: "round",
                    onClick: f,
                    children: "View more news..."
                })
            })]
        }) : e.jsx(e.Fragment, {
            children: e.jsx(F, {
                className: "maxWidth",
                size: 30,
                direction: "vertical",
                style: {
                    paddingBottom: 35
                },
                split: e.jsx(Ne, {
                    style: {
                        margin: 0
                    }
                }),
                children: r.map((C, P) => e.jsx(K, {
                    item: C,
                    isFirstItem: P === 0
                }, C._id))
            })
        }) : e.jsx(e.Fragment, {
            children: e.jsx("div", {
                className: "maxWidth flex-center",
                style: {
                    padding: 50,
                    fontSize: 16,
                    textAlign: "center"
                },
                children: "There currently is no news. Check back again later!"
            })
        });
        return e.jsx(A, {
            theme: {
                algorithm: N.defaultAlgorithm
            },
            children: e.jsxs(Se, {
                open: d,
                onCancel: w,
                closable: !1,
                footer: null,
                width: 650,
                styles: {
                    content: {
                        padding: 0,
                        borderRadius: 10,
                        overflow: "hidden"
                    },
                    body: {
                        padding: 0
                    }
                },
                style: {
                    top: 25,
                    padding: 0,
                    marginBottom: 100
                },
                children: [e.jsx(ot, {
                    close: w
                }), E()]
            })
        })
    };
var $ = (t => (t.accountInformation = "accountInformation", t.gameSettings = "game-settings", t.billing = "billing", t.support = "support", t))($ || {}),
    ut = Object.defineProperty,
    mt = (t, a, s, r) => {
        for (var l = void 0, h = t.length - 1, g; h >= 0; h--)(g = t[h]) && (l = g(a, s, l) || l);
        return l && ut(a, s, l), l
    };
class pe {
    constructor() {
        this.currentTab = $.accountInformation, he(this)
    }
}
mt([x], pe.prototype, "currentTab");
var gt = Object.defineProperty,
    j = (t, a, s, r) => {
        for (var l = void 0, h = t.length - 1, g; h >= 0; h--)(g = t[h]) && (l = g(a, s, l) || l);
        return l && gt(a, s, l), l
    };
const q = "",
    J = "",
    Y = "",
    Z = !1,
    Q = "",
    X = "",
    ee = 0,
    ft = x.array(),
    te = "",
    ne = "",
    ae = "",
    se = !1,
    re = "",
    oe = "";
class v {
    constructor() {
        this.planName = q, this.planDescription = J, this.billingInterval = Y, this.hasNextCharge = Z, this.nextChargeAmount = Q, this.nextChargeDate = X, this.accountBalance = ee, this.charges = ft, this.cardName = te, this.last4DigitsOfCard = ne, this.stripePublicKey = ae, this.canDowngrade = se, this.downgradeMessage = re, this.downgradeDateMessage = oe, this.reset = () => {
            this.planName = q, this.planDescription = J, this.billingInterval = Y, this.hasNextCharge = Z, this.nextChargeAmount = Q, this.nextChargeDate = X, this.accountBalance = ee, this.charges.replace([]), this.cardName = te, this.last4DigitsOfCard = ne, this.stripePublicKey = ae, this.canDowngrade = se, this.downgradeMessage = re, this.downgradeDateMessage = oe
        }, he(this)
    }
}
j([x], v.prototype, "planName");
j([x], v.prototype, "planDescription");
j([x], v.prototype, "billingInterval");
j([x], v.prototype, "hasNextCharge");
j([x], v.prototype, "nextChargeAmount");
j([x], v.prototype, "nextChargeDate");
j([x], v.prototype, "accountBalance");
j([x], v.prototype, "charges");
j([x], v.prototype, "cardName");
j([x], v.prototype, "last4DigitsOfCard");
j([x], v.prototype, "stripePublicKey");
j([x], v.prototype, "canDowngrade");
j([x], v.prototype, "downgradeMessage");
j([x], v.prototype, "downgradeDateMessage");
j([Ie], v.prototype, "reset");
const _ = {
        navigation: new pe,
        billing: new v
    },
    pt = n.createContext(_),
    xe = t => {
        const {
            width: a
        } = me.useWindowSize(), [s, r, l] = L(!1), [h, g] = n.useState(!1), [d, o] = n.useState(null), i = n.useRef(), [u] = U(i), f = n.useRef(), [c] = U(f);
        return n.useEffect(() => {
            (!a || !u ? !1 : !c) && (!d || a > d) && o(a)
        }, [a, d, u, c]), n.useEffect(() => {
            if (d && a <= d) {
                g(!0);
                return
            }
            g(!1)
        }, [a, d]), e.jsx(A, {
            theme: {
                token: {
                    borderRadius: 50
                }
            },
            children: e.jsxs(xt, {
                ref: i,
                children: [e.jsx("div", {
                    ref: f,
                    style: {
                        flex: 1
                    }
                }), h ? e.jsx("div", {
                    style: {
                        flexShrink: 0
                    },
                    children: e.jsx(M, {
                        onClick: r,
                        type: "text",
                        icon: e.jsx(Qe, {})
                    })
                }) : e.jsx(vt, {
                    style: {
                        opacity: c ? 1 : 0
                    },
                    children: e.jsx(F, {
                        size: 10,
                        direction: "horizontal",
                        children: t.items.map(w => e.jsx(n.Fragment, {
                            children: w.item(h)
                        }, w.key))
                    })
                }), h ? e.jsx(ze, {
                    placement: "right",
                    open: s,
                    onClose: l,
                    children: e.jsx(F, {
                        size: 12,
                        direction: "vertical",
                        className: "maxWidth",
                        children: t.items.map(w => e.jsx(n.Fragment, {
                            children: e.jsx("div", {
                                className: "maxAll flex-center",
                                children: w.item(h)
                            })
                        }, w.key))
                    })
                }) : null]
            })
        })
    },
    xt = m.div`
  flex: 1;
  overflow: hidden;
  display: flex;
`,
    vt = m.div`
  flex-shrink: 0;
`,
    S = t => e.jsx(fe, {
        to: t.path,
        onClick: t.onClick,
        className: "maxWidth",
        children: e.jsx(M, {
            type: "dashed",
            icon: t.icon,
            block: t.block,
            children: t.children
        })
    }),
    jt = ge(() => {
        const t = () => {
                let r = "/login";
                return window && window.location && window.location.pathname && window.location.pathname.startsWith("/view") && (r += `?location=${encodeURIComponent(window.location.pathname)}`), r
            },
            a = Fe("(max-width: 850px)"),
            s = [];
        return s.push({
            key: "join",
            item: r => e.jsx(S, {
                onClick: () => {
                    window.open("/join", "_self")
                },
                icon: e.jsx(p, {
                    name: "far fa-gamepad"
                }),
                block: r,
                children: "Join Game"
            })
        }), a || s.push({
            key: "pricing",
            item: r => e.jsx(S, {
                path: Ae,
                icon: e.jsx(p, {
                    name: "far fa-users"
                }),
                block: r,
                children: "Group Pricing"
            })
        }), s.push({
            key: "signup",
            item: r => e.jsx(S, {
                path: Me,
                icon: e.jsx(p, {
                    name: "far fa-user-plus"
                }),
                block: r,
                children: "Sign Up"
            })
        }), s.push({
            key: "login",
            item: r => e.jsx(fe, {
                to: t(),
                className: "maxAll",
                children: e.jsx(M, {
                    type: "primary",
                    size: "large",
                    icon: e.jsx(Je, {}),
                    block: r,
                    children: "Login"
                })
            })
        }), e.jsx(xe, {
            items: s
        })
    }),
    wt = () => e.jsx("div", {
        style: {
            height: "var(--header-height)",
            flexShrink: 0,
            width: "100%"
        }
    }),
    bt = t => t === D.pro ? `${k} Pro` : t === D.go ? `${k} Go` : t === D.proPass ? `${k} Pro (Monthly)` : t === D.basic ? `${k} Basic` : `Unknown ${k} Plan`,
    Ct = t => {
        const [a, s, r] = L(!1), [l, h] = L(!1), g = Oe(), d = [], o = n.useMemo(() => () => {
            const i = [{
                name: "Settings",
                icon: () => e.jsx(p, {
                    name: "far fa-cog"
                }),
                onClick: () => I("/settings")
            }, {
                name: "Creative",
                onClick: () => I(W),
                icon: () => e.jsx(p, {
                    name: "far fa-ruler"
                }),
                blockIf: [b]
            }, {
                name: "Billing",
                icon: () => e.jsx(p, {
                    name: "far fa-credit-card"
                }),
                onClick: () => {
                    _.navigation.currentTab = $.billing, I("/settings")
                },
                blockIf: [b]
            }, {
                name: "News",
                icon: () => e.jsx(p, {
                    name: "far fa-newspaper"
                }),
                onClick: () => {
                    s(), h()
                }
            }, {
                name: "Group Licenses",
                icon: () => e.jsx(p, {
                    name: "far fa-users"
                }),
                onClick: () => I(Le),
                blockIf: [b]
            }, {
                name: "GiveKit",
                icon: () => e.jsx(p, {
                    name: "far fa-heart"
                }),
                onClick: () => I($e),
                blockIf: [b]
            }, {
                name: "Support",
                icon: () => e.jsx(p, {
                    name: "far fa-question-circle"
                }),
                onClick: () => {
                    _.navigation.currentTab = $.support, I("/settings")
                },
                blockIf: [b]
            }, {
                name: "Logout",
                icon: () => e.jsx(p, {
                    name: "far fa-sign-out-alt"
                }),
                onClick: () => de({
                    url: "/logout",
                    success: () => {},
                    both: () => window.open("/", "_self")
                })
            }];
            return e.jsx(e.Fragment, {
                children: e.jsxs(G, {
                    style: {
                        width: 250
                    },
                    children: [b() ? null : e.jsxs(yt, {
                        children: [e.jsx(kt, {
                            children: De(T())
                        }), e.jsx(St, {
                            children: bt(T().type)
                        })]
                    }), i.filter(u => u.blockIf ? !u.blockIf.some(f => f()) : !0).map(u => e.jsx(G.Item, {
                        onClick: u.onClick,
                        children: e.jsxs("div", {
                            className: "flex vc",
                            style: {
                                textAlign: "center"
                            },
                            children: [n.createElement(u.icon), e.jsx("div", {
                                style: {
                                    marginLeft: 7
                                },
                                children: u.name
                            })]
                        })
                    }, u.name))]
                })
            })
        }, [s]);
        return d.push({
            key: "gallery",
            item: i => e.jsx(S, {
                path: _e,
                icon: e.jsx(p, {
                    name: "far fa-search"
                }),
                block: i,
                children: "Discovery"
            })
        }), b() && d.push({
            key: "creative",
            item: i => e.jsx(S, {
                path: W,
                icon: e.jsx(p, {
                    name: "far fa-ruler"
                }),
                block: i,
                children: "Creative"
            })
        }), d.push({
            key: "rewards",
            item: i => e.jsx(S, {
                path: Ee,
                icon: e.jsx(p, {
                    name: "far fa-coins"
                }),
                block: i,
                children: Re.name
            })
        }), d.push({
            key: "me",
            item: i => e.jsx(A, {
                theme: {
                    algorithm: N.defaultAlgorithm
                },
                children: e.jsx(Ve, {
                    trigger: ["click"],
                    overlay: o,
                    children: e.jsx("div", {
                        className: "maxWidth",
                        children: e.jsx(A, {
                            theme: {
                                algorithm: t.theme === y.dark ? N.darkAlgorithm : N.defaultAlgorithm
                            },
                            children: e.jsx(S, {
                                icon: e.jsx(p, {
                                    name: "far fa-user"
                                }),
                                block: i,
                                children: i ? "Me" : ""
                            })
                        })
                    })
                })
            })
        }), !g && !b() && d.push({
            key: "upgrade",
            item: i => e.jsx("div", {
                className: "maxAll",
                children: e.jsx(M, {
                    size: "large",
                    type: "primary",
                    onClick: t.showUpgradeModal,
                    block: i,
                    children: "Upgrade"
                })
            })
        }), e.jsxs(e.Fragment, {
            children: [e.jsx(xe, {
                items: d
            }), e.jsx(n.Suspense, {
                fallback: null,
                children: l ? e.jsx(ht, {
                    open: a,
                    onClose: r
                }) : null
            })]
        })
    },
    yt = m.div`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${R.SFPro};
  color: rgba(0, 0, 0, 0.8);
`,
    kt = m.div`
  font-size: 18px;
  font-weight: ${z.Bold};
`,
    St = m.div`
  font-size: 12px;
`,
    Nt = "/client/img/svgLogo.svg",
    It = "/client/img/svgLogoWhite.svg",
    At = ge(t => {
        const {
            navigation: {
                homeUrl: a
            }
        } = n.useContext(ue), s = t.theme === y.dark ? It : Nt;
        return e.jsx(Mt, {
            to: a,
            children: e.jsx(Ot, {
                src: s
            }, s)
        })
    }),
    Mt = m(Pe)``,
    Ot = m.img.attrs({
        alt: "Gimkit Logo"
    })`
  height: 32px;
  margin-right: 90px;
`,
    Dt = t => {
        const [a, s] = n.useState(!1), {
            navigation: r
        } = n.useContext(ue), {
            ref: l,
            height: h
        } = me.useComponentSize();
        n.useEffect(() => {
            document.documentElement.style.setProperty("--header-height", `${h}px`), r.headerHeight = h
        }, [h]);
        const g = () => s(!0),
            d = () => s(!1),
            o = n.useMemo(() => t.theme ?? y.light, [t.theme]),
            i = n.useMemo(() => t.alpha ?? B.standard, [t.alpha]),
            u = n.useMemo(() => i === B.none ? 1 : i === B.darker ? o === y.light ? .9 : .75 : o === y.light ? .85 : .45, [i, o]),
            f = n.useMemo(() => o === y.light ? `rgba(255, 255, 255, ${u})` : `rgba(16,16,16, ${u})`, [o, i]),
            c = n.useMemo(() => o === y.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)", [o, u]);
        return e.jsx(e.Fragment, {
            children: e.jsxs(A, {
                theme: {
                    algorithm: o === y.light ? N.defaultAlgorithm : N.darkAlgorithm,
                    token: {
                        fontFamily: R.SFPro
                    }
                },
                children: [e.jsxs(Lt, {
                    ref: l,
                    style: t.containerDivStyle,
                    children: [e.jsx($t, {
                        $background: f,
                        $hideBorder: t.hideBorder,
                        $borderColor: c,
                        children: e.jsx(pt.Provider, {
                            value: _,
                            children: e.jsxs(_t, {
                                children: [e.jsx(At, {
                                    theme: t.theme
                                }), Be() ? e.jsx(Ct, {
                                    showUpgradeModal: g,
                                    theme: o
                                }) : e.jsx(jt, {
                                    theme: t.theme
                                })]
                            })
                        })
                    }), t.children]
                }), a ? e.jsx(Te, {
                    id: "header",
                    visible: a,
                    close: d,
                    showModes: !0
                }) : null, t.includeSpacer ? e.jsx(wt, {}) : null]
            })
        })
    },
    Lt = m.div.attrs({
        className: "maxWidth"
    })`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`,
    $t = m.header`
  display: flex;
  height: auto;
  background: ${t=>t.$background};
  backdrop-filter: blur(4px);
  overflow: hidden;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 25px;
  justify-content: space-between;
  width: 100%;
  box-shadow: inset 0 -1px ${t=>t.$hideBorder?"rgba(255,255,255,0)":t.$borderColor};
  @media print {
    display: none;
  }
`,
    _t = m.div.attrs({
        className: "flex maxWidth between vc"
    })``,
    Yt = t => e.jsx(Dt, {
        ...t
    });
export {
    bt as G, ht as N, Je as R, Yt as S, $ as T, wt as a, pt as b, _ as s
};