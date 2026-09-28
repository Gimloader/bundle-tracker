const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/NotionContent.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/NotionContent-Ctz5Og9E.css"]))) => i.map(i => d[i]);
import {
    r as n,
    I as H,
    _ as V,
    s as K,
    aB as te,
    j as e,
    p as ne,
    d as m,
    aq as se,
    b as re,
    A as ae,
    U as F,
    F as P,
    C as k,
    E as N,
    cm as C,
    B as A,
    w as oe,
    u as $,
    a as q,
    i as j,
    t as ie,
    M as le,
    D as ce,
    m as de,
    o as ue,
    af as me,
    ad as he,
    a1 as O,
    f as fe,
    cn as T,
    az as ge,
    co as xe,
    l as pe,
    aA as ve,
    cp as je,
    cq as we,
    cb as J,
    a5 as be,
    a3 as ke
} from "./_index.js";
import {
    d as Y,
    u as ye,
    C as Ce,
    a as w,
    S as _
} from "./Shortcut.js";
import {
    o as R
} from "./mobxreact.esm.js";
import {
    A as Q
} from "./AccessibleAnchor.js";
import {
    b as W
} from "./index-1.js";
import {
    S as z
} from "./index-2.js";
import {
    D as Se
} from "./index-6.js";
import {
    F as g
} from "./FontAwesomeIcon.js";
import {
    U as Ie
} from "./App-2.js";
import {
    N as I
} from "./NavigateTo.js";
import {
    a as Ne
} from "./index-15.js";
import {
    C as Ae
} from "./colors.js";
import {
    n as Le
} from "./motion.js";
import {
    u as Oe
} from "./useWarningOnMountInDevelopment.js";
import {
    M as B,
    D as $e
} from "./index-10.js";
var Me = {
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
    Ee = function(s, a) {
        return n.createElement(H, V({}, s, {
            ref: a,
            icon: Me
        }))
    },
    _e = n.forwardRef(Ee),
    ze = {
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
    Fe = function(s, a) {
        return n.createElement(H, V({}, s, {
            ref: a,
            icon: ze
        }))
    },
    Pe = n.forwardRef(Fe);

function Re(t, s) {
    var a = n.useState(f()),
        o = a[0],
        h = a[1];
    Oe();

    function d() {
        var l = f();
        (l === null || l === "null") && i(s)
    }

    function f() {
        if (typeof localStorage > "u") return null;
        var l = localStorage.getItem(t) || "null";
        try {
            return JSON.parse(l)
        } catch (x) {
            console.error(x)
        }
        return l
    }

    function c(l) {
        return typeof localStorage > "u" ? null : localStorage.setItem(t, JSON.stringify(l))
    }
    var i = n.useCallback(function(l) {
            h(l), c(l)
        }, []),
        r = n.useCallback(function(l) {
            l.storageArea === localStorage && l.key === t && h(l.newValue)
        }, []),
        u = n.useCallback(function() {
            if (i(null), typeof localStorage > "u") return !1;
            localStorage.removeItem(t)
        }, [t]);
    n.useEffect(function() {
        d()
    }, []), n.useEffect(function() {
        return typeof window < "u" ? (window.addEventListener("storage", r), function() {
            window.removeEventListener("storage", r)
        }) : (console.warn("useLocalstorage: window is undefined."), Le)
    }, []);
    var p = Object.assign([o, i, u], {
        value: o,
        remove: u,
        set: i
    });
    return p
}
const U = Ne(() => ne(() => import("./NotionContent.js"), __vite__mapDeps([0, 1, 2, 3]))),
    D = () => e.jsx(ae, {
        active: !0,
        title: !1,
        paragraph: {
            rows: 14
        },
        style: {
            padding: 20
        }
    }),
    G = t => {
        const [s, a] = n.useState(), {
            item: {
                notionPageId: o,
                publishDate: h
            }
        } = t;
        K(() => {
            U.preload()
        }), n.useEffect(() => {
            !s && o && te({
                url: `/api/content/${o}`,
                cacheKey: "NOTION_CONTENT",
                success: c => a(c)
            })
        }, [o, s]);
        const d = () => {
                var l, x, L, v, S, b;
                const c = o.replace(/-/g, ""),
                    i = Object.keys(s == null ? void 0 : s.block).find(ee => ee.replace(/-/g, "") === c);
                if (!i) return {
                    title: "",
                    coverImage: null
                };
                const r = (x = (l = s == null ? void 0 : s.block[i]) == null ? void 0 : l.value) == null ? void 0 : x.value;
                console.log(r);
                const u = ((S = (v = (L = r == null ? void 0 : r.properties) == null ? void 0 : L.title) == null ? void 0 : v[0]) == null ? void 0 : S[0]) ?? null,
                    p = ((b = r == null ? void 0 : r.format) == null ? void 0 : b.page_cover) ?? null;
                return {
                    title: u,
                    coverImage: p
                }
            },
            f = () => {
                if (!s) return e.jsx(D, {});
                const {
                    title: c,
                    coverImage: i
                } = d();
                return e.jsxs(n.Suspense, {
                    fallback: e.jsx(D, {}),
                    children: [i ? e.jsx(We, {
                        draggable: !1,
                        src: i
                    }) : null, e.jsxs(Be, {
                        children: [e.jsxs(Ue, {
                            style: {
                                marginTop: t.isFirstItem && !i ? 30 : 0
                            },
                            children: [e.jsx(De, {
                                children: c
                            }), e.jsxs(Ge, {
                                children: [e.jsx(g, {
                                    name: "far fa-calendar-alt",
                                    style: {
                                        fontSize: "0.8em",
                                        marginRight: 5
                                    }
                                }), se(re.unix(h).fromNow())]
                            })]
                        }), e.jsx(U, {
                            content: s
                        })]
                    })]
                })
            };
        return e.jsx(Te, {
            children: f()
        })
    },
    Te = m.div.attrs({
        className: "maxWidth"
    })``,
    We = m.img.attrs({
        className: "maxWidth"
    })`
  margin-bottom: 25px;
`,
    Be = m.div.attrs({
        className: "maxWidth"
    })`
  padding: 0px 20px;
  font-family: ${F.SFPro};
`,
    Ue = m.div.attrs({
        className: "maxWidth flex between vc"
    })`
  line-height: 1;
  margin-bottom: 20px;
`,
    De = m.div`
  font-size: 28px;
  font-weight: ${P.Bold};
`,
    Ge = m.div.attrs({
        className: "flex vc"
    })`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`,
    He = t => e.jsxs(Ve, {
        children: [e.jsxs(Ke, {
            children: [e.jsxs(qe, {
                children: [k, " News"]
            }), e.jsxs(Je, {
                children: ["Your source for all things ", k, "!"]
            })]
        }), e.jsx("div", {
            children: e.jsx(N, {
                theme: {
                    algorithm: C.darkAlgorithm
                },
                children: e.jsx(A, {
                    onClick: t.close,
                    type: "text",
                    icon: e.jsx(oe, {})
                })
            })
        })]
    }),
    Ve = m.div.attrs({
        className: "maxWidth flex vc between"
    })`
  color: ${Ae.White};
  padding: 20px;
  background: #730aad;
`,
    Ke = m.div``,
    qe = m.div`
  font-size: 16px;
  font-weight: ${P.Bold};
`,
    Je = m.div`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`,
    Ye = t => {
        const [s, a] = n.useState(!0), [o, h] = n.useState([]), [d, f] = Re("last-viewed-news", 0), [c, i] = n.useState(!1), [r, u, p] = $(!0), l = n.useCallback(() => {
            i(!0)
        }, [i]), x = n.useCallback(() => {
            i(!1), t.onClose && t.onClose()
        }, [i, t.onClose]);
        if (K(() => {
                q({
                    url: "/api/news/fetch",
                    data: {
                        isStudent: j()
                    },
                    success: v => {
                        h(v);
                        const S = d ?? 0,
                            b = v[0];
                        b && (b && b.publishDate > S && t.allowAutoOpen && l(), f(b.publishDate))
                    },
                    error: v => {
                        t.open && ie({
                            e: v,
                            default: {
                                title: "Error loading news"
                            }
                        })
                    },
                    both: () => {
                        a(!1)
                    }
                })
            }), n.useEffect(() => {
                t.open && l()
            }, [t.open]), s) return null;
        const L = () => o.length ? o.length !== 1 && r ? e.jsxs("div", {
            style: {
                paddingBottom: 35
            },
            children: [e.jsx(G, {
                item: o[0],
                isFirstItem: !0
            }), e.jsx("div", {
                className: "maxWidth flex-center",
                style: {
                    marginTop: 30
                },
                children: e.jsx(A, {
                    shape: "round",
                    onClick: p,
                    children: "View more news..."
                })
            })]
        }) : e.jsx(e.Fragment, {
            children: e.jsx(z, {
                className: "maxWidth",
                size: 30,
                direction: "vertical",
                style: {
                    paddingBottom: 35
                },
                split: e.jsx(ce, {
                    style: {
                        margin: 0
                    }
                }),
                children: o.map((v, S) => e.jsx(G, {
                    item: v,
                    isFirstItem: S === 0
                }, v._id))
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
        return e.jsx(N, {
            theme: {
                algorithm: C.defaultAlgorithm
            },
            children: e.jsxs(le, {
                open: c,
                onCancel: x,
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
                children: [e.jsx(He, {
                    close: x
                }), L()]
            })
        })
    };
var M = (t => (t.profile = "profile", t.account = "account", t.gameSettings = "game-settings", t.billing = "billing", t.support = "support", t))(M || {}),
    Qe = Object.defineProperty,
    Xe = (t, s, a, o) => {
        for (var h = void 0, d = t.length - 1, f; d >= 0; d--)(f = t[d]) && (h = f(s, a, h) || h);
        return h && Qe(s, a, h), h
    };
class X {
    constructor() {
        this.currentTab = M.profile, de(this)
    }
}
Xe([ue], X.prototype, "currentTab");
const E = {
        navigation: new X
    },
    Ze = n.createContext(E),
    Z = t => {
        const {
            width: s
        } = Y.useWindowSize(), [a, o, h] = $(!1), [d, f] = n.useState(!1), [c, i] = n.useState(null), r = n.useRef(), [u] = W(r), p = n.useRef(), [l] = W(p);
        return n.useEffect(() => {
            (!s || !u ? !1 : !l) && (!c || s > c) && i(s)
        }, [s, c, u, l]), n.useEffect(() => {
            if (c && s <= c) {
                f(!0);
                return
            }
            f(!1)
        }, [s, c]), e.jsx(N, {
            theme: {
                token: {
                    borderRadius: 50
                }
            },
            children: e.jsxs(et, {
                ref: r,
                children: [e.jsx("div", {
                    ref: p,
                    style: {
                        flex: 1
                    }
                }), d ? e.jsx("div", {
                    style: {
                        flexShrink: 0
                    },
                    children: e.jsx(A, {
                        onClick: o,
                        type: "text",
                        icon: e.jsx(Pe, {})
                    })
                }) : e.jsx(tt, {
                    style: {
                        opacity: l ? 1 : 0
                    },
                    children: e.jsx(z, {
                        size: 10,
                        direction: "horizontal",
                        children: t.items.map(x => e.jsx(n.Fragment, {
                            children: x.item(d)
                        }, x.key))
                    })
                }), d ? e.jsx(Se, {
                    placement: "right",
                    open: a,
                    onClose: h,
                    children: e.jsx(z, {
                        size: 12,
                        direction: "vertical",
                        className: "maxWidth",
                        children: t.items.map(x => e.jsx(n.Fragment, {
                            children: e.jsx("div", {
                                className: "maxAll flex-center",
                                children: x.item(d)
                            })
                        }, x.key))
                    })
                }) : null]
            })
        })
    },
    et = m.div`
  flex: 1;
  overflow: hidden;
  display: flex;
`,
    tt = m.div`
  flex-shrink: 0;
`,
    y = t => e.jsx(Q, {
        to: t.path,
        onClick: t.onClick,
        className: "maxWidth",
        children: e.jsx(A, {
            type: "dashed",
            icon: t.icon,
            block: t.block,
            children: t.children
        })
    }),
    nt = R(() => {
        const t = () => {
                let o = "/login";
                return window && window.location && window.location.pathname && window.location.pathname.startsWith("/view") && (o += `?location=${encodeURIComponent(window.location.pathname)}`), o
            },
            s = ye("(max-width: 850px)"),
            a = [];
        return a.push({
            key: "join",
            item: o => e.jsx(y, {
                onClick: () => {
                    window.open("/join", "_self")
                },
                icon: e.jsx(g, {
                    name: "far fa-gamepad"
                }),
                block: o,
                children: "Join Game"
            })
        }), s || a.push({
            key: "pricing",
            item: o => e.jsx(y, {
                path: me,
                icon: e.jsx(g, {
                    name: "far fa-users"
                }),
                block: o,
                children: "Group Pricing"
            })
        }), a.push({
            key: "signup",
            item: o => e.jsx(y, {
                path: he,
                icon: e.jsx(g, {
                    name: "far fa-user-plus"
                }),
                block: o,
                children: "Sign Up"
            })
        }), a.push({
            key: "login",
            item: o => e.jsx(Q, {
                to: t(),
                className: "maxAll",
                children: e.jsx(A, {
                    type: "primary",
                    size: "large",
                    icon: e.jsx(_e, {}),
                    block: o,
                    children: "Login"
                })
            })
        }), e.jsx(Z, {
            items: a
        })
    }),
    st = () => e.jsx("div", {
        style: {
            height: "var(--header-height)",
            flexShrink: 0,
            width: "100%"
        }
    }),
    rt = t => t === O.pro ? `${k} Pro` : t === O.go ? `${k} Go` : t === O.proPass ? `${k} Pro (Monthly)` : t === O.basic ? `${k} Basic` : `Unknown ${k} Plan`,
    at = t => {
        const [s, a, o] = $(!1), [h, d] = $(!1), f = fe(), c = [], i = n.useMemo(() => () => {
            const r = [{
                name: "Settings",
                icon: () => e.jsx(g, {
                    name: "far fa-cog"
                }),
                onClick: () => I("/settings")
            }, {
                name: "Creative",
                onClick: () => I(T),
                icon: () => e.jsx(g, {
                    name: "far fa-ruler"
                }),
                blockIf: [j]
            }, {
                name: "Billing",
                icon: () => e.jsx(g, {
                    name: "far fa-credit-card"
                }),
                onClick: () => {
                    E.navigation.currentTab = M.billing, I("/settings")
                },
                blockIf: [j]
            }, {
                name: "News",
                icon: () => e.jsx(g, {
                    name: "far fa-newspaper"
                }),
                onClick: () => {
                    a(), d()
                }
            }, {
                name: "Group Licenses",
                icon: () => e.jsx(g, {
                    name: "far fa-users"
                }),
                onClick: () => I(ge),
                blockIf: [j]
            }, {
                name: "GiveKit",
                icon: () => e.jsx(g, {
                    name: "far fa-heart"
                }),
                onClick: () => I(xe),
                blockIf: [j]
            }, {
                name: "Support",
                icon: () => e.jsx(g, {
                    name: "far fa-question-circle"
                }),
                onClick: () => {
                    E.navigation.currentTab = M.support, I("/settings")
                },
                blockIf: [j]
            }, {
                name: "Logout",
                icon: () => e.jsx(g, {
                    name: "far fa-sign-out-alt"
                }),
                onClick: () => q({
                    url: "/logout",
                    success: () => {},
                    both: () => window.open("/", "_self")
                })
            }];
            return e.jsx(e.Fragment, {
                children: e.jsxs(B, {
                    style: {
                        width: 250
                    },
                    children: [e.jsx(ot, {}), r.filter(u => u.blockIf ? !u.blockIf.some(p => p()) : !0).map(u => e.jsx(B.Item, {
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
        }, [a]);
        return c.push({
            key: "gallery",
            item: r => e.jsx(y, {
                path: je,
                icon: e.jsx(g, {
                    name: "far fa-search"
                }),
                block: r,
                children: "Discovery"
            })
        }), j() && c.push({
            key: "creative",
            item: r => e.jsx(y, {
                path: T,
                icon: e.jsx(g, {
                    name: "far fa-ruler"
                }),
                block: r,
                children: "Creative"
            })
        }), c.push({
            key: "rewards",
            item: r => e.jsx(y, {
                path: we,
                icon: e.jsx(g, {
                    name: "far fa-coins"
                }),
                block: r,
                children: Ce.name
            })
        }), c.push({
            key: "me",
            item: r => e.jsx(N, {
                theme: {
                    algorithm: C.defaultAlgorithm
                },
                children: e.jsx($e, {
                    trigger: ["click"],
                    overlay: i,
                    children: e.jsx("div", {
                        className: "maxWidth",
                        children: e.jsx(N, {
                            theme: {
                                algorithm: t.theme === w.dark ? C.darkAlgorithm : C.defaultAlgorithm
                            },
                            children: e.jsx(y, {
                                icon: e.jsx(g, {
                                    name: "far fa-user"
                                }),
                                block: r,
                                children: r ? "Me" : ""
                            })
                        })
                    })
                })
            })
        }), !f && !j() && c.push({
            key: "upgrade",
            item: r => e.jsx("div", {
                className: "maxAll",
                children: e.jsx(A, {
                    size: "large",
                    type: "primary",
                    onClick: t.showUpgradeModal,
                    block: r,
                    children: "Upgrade"
                })
            })
        }), e.jsxs(e.Fragment, {
            children: [e.jsx(Z, {
                items: c
            }), e.jsx(n.Suspense, {
                fallback: null,
                children: h ? e.jsx(Ye, {
                    open: s,
                    onClose: o
                }) : null
            })]
        })
    },
    ot = R(() => {
        const t = pe();
        return !t || j() && !t.username ? null : e.jsxs(it, {
            children: [e.jsx(lt, {
                children: ve(t)
            }), j() ? null : e.jsx(ct, {
                children: rt(t.type)
            })]
        })
    }),
    it = m.div`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${F.SFPro};
  color: rgba(0, 0, 0, 0.8);
`,
    lt = m.div`
  font-size: 18px;
  font-weight: ${P.Bold};
`,
    ct = m.div`
  font-size: 12px;
`,
    dt = "/client/img/svgLogo.svg",
    ut = "/client/img/svgLogoWhite.svg",
    mt = R(t => {
        const {
            navigation: {
                homeUrl: s
            }
        } = n.useContext(J), a = t.theme === w.dark ? ut : dt;
        return e.jsx(ht, {
            to: s,
            children: e.jsx(ft, {
                src: a
            }, a)
        })
    }),
    ht = m(be)``,
    ft = m.img.attrs({
        alt: "Gimkit Logo"
    })`
  height: 32px;
  margin-right: 90px;
`,
    gt = t => {
        const [s, a] = n.useState(!1), {
            navigation: o
        } = n.useContext(J), {
            ref: h,
            height: d
        } = Y.useComponentSize();
        n.useEffect(() => {
            document.documentElement.style.setProperty("--header-height", `${d}px`), o.headerHeight = d
        }, [d]);
        const f = () => a(!0),
            c = () => a(!1),
            i = n.useMemo(() => t.theme ?? w.light, [t.theme]),
            r = n.useMemo(() => t.alpha ?? _.standard, [t.alpha]),
            u = n.useMemo(() => r === _.none ? 1 : r === _.darker ? i === w.light ? .9 : .75 : i === w.light ? .85 : .45, [r, i]),
            p = n.useMemo(() => i === w.light ? `rgba(255, 255, 255, ${u})` : `rgba(16,16,16, ${u})`, [i, r]),
            l = n.useMemo(() => i === w.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)", [i, u]);
        return e.jsx(e.Fragment, {
            children: e.jsxs(N, {
                theme: {
                    algorithm: i === w.light ? C.defaultAlgorithm : C.darkAlgorithm,
                    token: {
                        fontFamily: F.SFPro
                    }
                },
                children: [e.jsxs(xt, {
                    ref: h,
                    style: t.containerDivStyle,
                    children: [e.jsx(pt, {
                        $background: p,
                        $hideBorder: t.hideBorder,
                        $borderColor: l,
                        children: e.jsx(Ze.Provider, {
                            value: E,
                            children: e.jsxs(vt, {
                                children: [e.jsx(mt, {
                                    theme: t.theme
                                }), ke() ? e.jsx(at, {
                                    showUpgradeModal: f,
                                    theme: i
                                }) : e.jsx(nt, {
                                    theme: t.theme
                                })]
                            })
                        })
                    }), t.children]
                }), s ? e.jsx(Ie, {
                    id: "header",
                    visible: s,
                    close: c,
                    showModes: !0
                }) : null, t.includeSpacer ? e.jsx(st, {}) : null]
            })
        })
    },
    xt = m.div.attrs({
        className: "maxWidth"
    })`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`,
    pt = m.header`
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
    vt = m.div.attrs({
        className: "flex maxWidth between vc"
    })``,
    zt = t => e.jsx(gt, {
        ...t
    });
export {
    rt as G, Ye as N, _e as R, zt as S, M as T, st as a, Ze as b, E as s
};