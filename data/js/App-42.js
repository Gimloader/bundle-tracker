const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-68.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/useInfiniteQuery.js", "assets/useQuery.js", "assets/MapCard.js", "assets/PublishedDate.js", "assets/getCloudinaryUrl.js", "assets/CircularProgress.js", "assets/clsx.m.js", "assets/inheritsLoose.js", "assets/AnimatedBackground-1.js", "assets/App-4.js", "assets/Shortcut.js", "assets/Names.js", "assets/mobxreact.esm.js", "assets/AccessibleAnchor.js", "assets/index-1.js", "assets/index-2.js", "assets/index-6.js", "assets/FontAwesomeIcon.js", "assets/App-2.js", "assets/Sizes.js", "assets/motion.js", "assets/price.js", "assets/TrackPostHogEvent.js", "assets/index-3.js", "assets/index-4.js", "assets/context.js", "assets/StarOutlined.js", "assets/NavigateTo.js", "assets/index-15.js", "assets/colors.js", "assets/useWarningOnMountInDevelopment.js", "assets/index-10.js", "assets/index-5.js", "assets/move.js", "assets/App-5.js", "assets/Centered.js", "assets/index-24.js", "assets/Button.js", "assets/polished.esm.js", "assets/GetAssetPath.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/TrackEvent.js", "assets/MapStyle.js", "assets/SeasonTicketInlineUpsell.js", "assets/SeasonTicketName.js", "assets/OwnsSeasonTicket.js", "assets/App-69.js", "assets/App-70.js"]))) => i.map(i => d[i]);
import {
    j as e,
    d as a,
    U as x,
    dY as pe,
    F as S,
    aV as he,
    y as J,
    u,
    r as s,
    B as g,
    e as w,
    M as L,
    a as y,
    t as $,
    E as xe,
    cm as ue,
    b as ge,
    i as fe,
    s as je,
    G as be,
    n as ve,
    H as _,
    T as ye,
    cn as Ce,
    dZ as H,
    d_ as V,
    d$ as we,
    p as B,
    ah as ke
} from "./_index.js";
import {
    A as Se
} from "./AnimatedBackground-1.js";
import {
    S as Te
} from "./App-4.js";
import {
    a as Y
} from "./Shortcut.js";
import {
    S as Me
} from "./App-5.js";
import {
    F as b
} from "./FontAwesomeIcon.js";
import {
    a as W,
    V as K,
    C as X
} from "./Centered.js";
import {
    B as ee
} from "./index-24.js";
import {
    M as te,
    C as z
} from "./Button.js";
import {
    G as P
} from "./GetAssetPath.js";
import {
    u as ae
} from "./useQuery.js";
import {
    D as Ne
} from "./index-10.js";
import {
    T as C
} from "./index-14.js";
import {
    I as A
} from "./index-3.js";
import {
    A as $e
} from "./TrackEvent.js";
import {
    M as N
} from "./MapStyle.js";
import {
    S as k
} from "./index-2.js";
import {
    S as De
} from "./SeasonTicketInlineUpsell.js";
import {
    C as ze
} from "./CircularProgress.js";
const E = {
        width: "90%",
        maxWidth: "800px"
    },
    Ee = () => e.jsxs(We, {
        children: [e.jsxs(_e, {
            children: [e.jsx(Re, {
                src: "/client/img/svgLogoWhite.svg"
            }), e.jsx(Le, {
                children: "Creative"
            })]
        }), e.jsx(Pe, {
            children: e.jsx(ee, {
                children: "Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!"
            })
        })]
    }),
    We = a(W)`
  width: ${E.width};
  max-width: ${E.maxWidth};
`,
    _e = a(W)``,
    Re = a.img`
  height: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.9) 0px 1px 2px);
`,
    Le = a.div`
  text-shadow: rgba(0, 0, 0, 0.6) 0px 3px 15px;
  font-size: 72px;
  font-family: ${x.FugazOne};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 10px;
`,
    Pe = a.div`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
`,
    D = t => e.jsx(Ae, {
        className: t.className,
        children: t.children
    }),
    Ae = a.div.attrs({
        className: "maxWidth light-shadow"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 12px;
  backdrop-filter: blur(3px);
`,
    Ie = () => e.jsxs(Be, {
        children: [e.jsx(Fe, {
            children: e.jsx(Oe, {})
        }), e.jsxs(Ge, {
            children: [e.jsx(He, {
                children: e.jsx(ee, {
                    children: "Complete the Gimkit Creative tutorial and receive the Blueprint Gim for free!"
                })
            }), e.jsx(Ve, {
                children: "The tutorial takes about 10 minutes to complete."
            }), e.jsx(te, {
                size: "small",
                customFontWeight: S.Bold,
                type: "success",
                onClick: () => window.location.href = pe,
                ariaLabel: "Start Tutorial",
                children: "Start Tutorial"
            })]
        })]
    }),
    Be = a.div.attrs({
        className: "maxWidth flex-center"
    })``,
    Fe = a.div``,
    Oe = a.img.attrs({
        src: P("characters/spine/preview/construction.png")
    })`
  height: 155px;
  transform: rotate(353deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`,
    Ge = a.div`
  margin-left: 20px;
`,
    He = a.div`
  font-weight: ${S.Bold};
  font-size: 18px;
  line-height: 1.3;
`,
    Ve = a.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-style: italic;
`,
    ie = ["creative-created-maps"],
    Ye = () => ae(ie, () => J({
        url: "/api/created-maps"
    })),
    I = () => he.invalidateQueries(ie),
    U = t => {
        const [i, n, o] = u(!1), [d, v, p] = u(!1), [m, f] = s.useState(""), [h, l] = s.useState(""), [j, T, c] = u(!1), [M, re, se] = u(!1), [oe, le, ce] = u(!1);
        s.useEffect(() => {
            f("")
        }, [i]), s.useEffect(() => {
            l("")
        }, [d]);
        const F = (m == null ? void 0 : m.trim().length) < 2,
            O = () => {
                F || j || (T(), y({
                    url: "/api/created-map/rename",
                    data: {
                        id: t.id,
                        name: m
                    },
                    success: () => {
                        I()
                    },
                    error: r => {
                        $({
                            e: r,
                            default: {
                                title: "Error renaming map"
                            }
                        })
                    },
                    both: () => {
                        o(), c()
                    }
                }))
            },
            G = h !== t.name,
            de = () => {
                G || M || (re(), y({
                    url: "/api/created-map/delete",
                    data: {
                        id: t.id
                    },
                    success: () => {
                        I()
                    },
                    error: r => {
                        $({
                            e: r,
                            default: {
                                title: "Error deleting map"
                            }
                        })
                    },
                    both: () => {
                        p(), se()
                    }
                }))
            },
            me = () => {
                t.disabled || oe || (le(), y({
                    url: "/api/matchmaker/intent/map/edit/create",
                    data: {
                        mapId: t.id
                    },
                    success: r => window.location.href = `/host?id=${r}`,
                    error: r => {
                        $({
                            e: r,
                            default: {
                                title: "Error loading into your map. Please try again."
                            }
                        })
                    },
                    both: ce
                }))
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ue, {
                onClick: me,
                disabled: t.disabled,
                children: [e.jsx("div", {
                    children: t.name
                }), e.jsx("div", {
                    onClick: r => r.stopPropagation(),
                    children: e.jsx(Ne, {
                        menu: {
                            items: [{
                                key: `rename-${t.id}`,
                                label: "Rename",
                                icon: e.jsx(b, {
                                    name: "far fa-edit"
                                }),
                                onClick: r => {
                                    r.domEvent.stopPropagation(), n()
                                }
                            }, {
                                key: `delete-${t.id}`,
                                label: "Delete",
                                icon: e.jsx(b, {
                                    name: "far fa-trash-alt"
                                }),
                                danger: !0,
                                onClick: r => {
                                    r.domEvent.stopPropagation(), v()
                                }
                            }]
                        },
                        children: e.jsx(g, {
                            icon: e.jsx(b, {
                                name: "far fa-ellipsis-h"
                            }),
                            type: "text",
                            style: {
                                color: w.White
                            }
                        })
                    })
                })]
            }), e.jsxs(L, {
                open: i,
                onCancel: o,
                title: "Rename",
                footer: [e.jsx(g, {
                    onClick: o,
                    children: "Cancel"
                }, "cancel-rename"), e.jsx(g, {
                    type: "primary",
                    onClick: O,
                    disabled: F,
                    loading: j,
                    children: "Rename"
                }, "rename-map")],
                children: [e.jsxs(C.Text, {
                    children: ["Enter a new name for ", e.jsxs("b", {
                        children: [t.name, ":"]
                    })]
                }), e.jsx(A, {
                    value: m,
                    style: {
                        marginTop: 5
                    },
                    placeholder: "New name...",
                    maxLength: 32,
                    onChange: r => f(r.target.value),
                    onPressEnter: O
                })]
            }), e.jsxs(L, {
                open: d,
                onCancel: p,
                title: "Delete Map",
                footer: [e.jsx(g, {
                    onClick: p,
                    children: "Cancel"
                }, "cancel-delete"), e.jsx(g, {
                    type: "primary",
                    danger: !0,
                    disabled: G,
                    onClick: de,
                    loading: M,
                    children: "Delete Map"
                }, "delete-map")],
                children: [e.jsxs(C.Text, {
                    children: ["Deleting a map is permanent and cannot be undone. Please enter the name of the map", " ", e.jsx("code", {
                        style: {
                            userSelect: "none"
                        },
                        children: t.name
                    }), " to confirm. Note that deleting a map will also remove it from Creative Discovery."]
                }), e.jsx(A, {
                    value: h,
                    style: {
                        marginTop: 10
                    },
                    placeholder: "Enter map name here ...",
                    maxLength: 32,
                    onChange: r => l(r.target.value)
                })]
            })]
        })
    },
    Ue = a(K).attrs({
        className: "maxWidth between"
    })`
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-weight: ${S.Bold};
  line-height: 1;
  font-size: 14px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    q = t => {
        const {
            image: i,
            name: n,
            description: o
        } = t;
        return e.jsxs(qe, {
            onClick: t.onSelect,
            style: {
                borderColor: t.selected ? z.Yellow : "rgba(255, 255, 255, 0.1)"
            },
            children: [t.tag ? e.jsx(Je, {
                children: t.tag
            }) : null, e.jsx(Qe, {
                style: {
                    backgroundImage: `url("${i}")`
                }
            }), e.jsxs(Ze, {
                children: [e.jsx(Ke, {
                    children: n
                }), e.jsx(Xe, {
                    children: o
                })]
            })]
        })
    },
    qe = a.div`
  background: rgba(255, 255, 255, 0.1);
  width: 303px;
  border-radius: 8px;
  overflow: hidden;
  border-width: 4px;
  border-style: solid;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,
    Qe = a.div.attrs({
        className: "maxWidth"
    })`
  height: 132px;
  background-size: cover;
  background-position: center -57px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`,
    Ze = a(W).attrs({
        className: "maxWidth"
    })`
  padding: 10px;
  padding-top: 0px;
`,
    Je = a.div`
  font-family: ${x.FugazOne};
  text-transform: uppercase;
  font-size: 9px;
  padding: 3px 9px;
  border-radius: 20px;
  margin-bottom: 5px;
  background: ${z.Yellow};
  color: ${z.Black};
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`,
    Ke = a.div`
  font-family: ${x.FugazOne};
  text-transform: uppercase;
  font-size: 16px;
`,
    Xe = a.div`
  font-family: ${x.SFPro};
  font-size: 13px;
  margin-top: -3px;
`,
    et = t => {
        const i = s.useRef(null),
            [n, o] = s.useState(""),
            [d, v] = s.useState(),
            [p, m, f] = u(!1),
            h = (n == null ? void 0 : n.trim().length) < 2 || !d,
            l = c => {
                o(c.target.value)
            };
        s.useEffect(() => {
            t.open && setTimeout(() => {
                var c;
                (c = i.current) == null || c.focus()
            }, 1)
        }, [t.open]);
        const j = () => {
                h || p || (m(), y({
                    url: "/api/created-map/create",
                    data: {
                        name: n,
                        mapStyle: d
                    },
                    success: c => {
                        $e({
                            event: "creative_map_created",
                            properties: {
                                mapStyle: d
                            }
                        }), I(), y({
                            url: "/api/matchmaker/intent/map/edit/create",
                            data: {
                                mapId: c
                            },
                            success: M => window.location.href = `/host?id=${M}`,
                            both: t.close
                        })
                    },
                    error: c => {
                        $({
                            e: c,
                            default: {
                                title: "Error creating map"
                            }
                        })
                    },
                    both: () => {
                        f(), o("")
                    }
                }))
            },
            T = c => {
                v(c)
            };
        return e.jsx(xe, {
            theme: {
                algorithm: ue.darkAlgorithm,
                token: {
                    colorBgBase: "#1C1D57"
                }
            },
            children: e.jsx(L, {
                open: t.open,
                onCancel: t.close,
                width: 668,
                footer: [e.jsx(g, {
                    onClick: t.close,
                    children: "Cancel"
                }, "cancel-new-map"), e.jsx(g, {
                    type: "primary",
                    disabled: h,
                    loading: p,
                    onClick: j,
                    children: "Create"
                }, "create-new-map")],
                children: e.jsxs(k, {
                    direction: "vertical",
                    size: 20,
                    className: "maxWidth",
                    children: [e.jsxs("div", {
                        className: "maxWidth",
                        children: [e.jsx(Q, {
                            children: "Map Name"
                        }), e.jsx(A, {
                            ref: i,
                            value: n,
                            onChange: l,
                            placeholder: "Enter map name here...",
                            maxLength: 32,
                            onPressEnter: j,
                            size: "large"
                        })]
                    }), e.jsxs("div", {
                        className: "maxWidth",
                        children: [e.jsx(Q, {
                            children: "Map Style"
                        }), e.jsxs("div", {
                            className: "flex",
                            style: {
                                flexWrap: "wrap",
                                gap: 14,
                                marginBottom: 3
                            },
                            children: [e.jsx(q, {
                                image: P("creative/top-down.jpeg"),
                                name: "Top-Down",
                                description: "Players move in all four directions",
                                selected: d === N.topDown,
                                onSelect: () => T(N.topDown)
                            }), e.jsx(q, {
                                image: P("creative/platformer.jpeg"),
                                name: "Platformer",
                                description: "Players move left & right, but can also jump",
                                selected: d === N.platformer,
                                onSelect: () => T(N.platformer)
                            })]
                        })]
                    })]
                })
            })
        })
    },
    Q = a.div`
  font-family: ${x.FugazOne};
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
`,
    tt = t => {
        const {
            data: i,
            isLoading: n,
            error: o
        } = Ye(), [d, v, p] = u(!1);
        if (n || o) return null;
        const m = i.length < t.mapLimit,
            f = i.slice(0, t.mapLimit),
            h = i.slice(t.mapLimit);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(at, {
                children: [e.jsxs(it, {
                    children: [e.jsxs(nt, {
                        children: [e.jsx(ne, {
                            children: "My Maps"
                        }), e.jsxs(rt, {
                            children: [i.length, "/", t.mapLimit, " slots used"]
                        }), i.length >= 2 ? e.jsx(De, {
                            marginTop: 8,
                            text: "Store up to 25 maps"
                        }) : null]
                    }), m ? e.jsx(te, {
                        size: "small",
                        customFontWeight: S.Bold,
                        onClick: v,
                        ariaLabel: "Create New Map",
                        type: "success",
                        children: "Create New Map"
                    }) : null]
                }), i.length ? e.jsxs(k, {
                    direction: "vertical",
                    size: 14,
                    className: "maxWidth",
                    style: {
                        marginTop: 20
                    },
                    children: [f.map(l => e.jsx(U, {
                        id: l._id,
                        name: l.name,
                        disabled: !1
                    }, l._id)), h.length ? e.jsxs(k, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth medium-shadow",
                        style: {
                            background: "rgba(255,56,56,0.3)",
                            padding: 30,
                            borderRadius: 10
                        },
                        children: [e.jsx("div", {
                            style: {
                                fontSize: 14,
                                fontStyle: "italic",
                                color: "yellow",
                                opacity: .9,
                                marginBottom: 10,
                                textAlign: "center"
                            },
                            children: "The following maps cannot be accessed until your map limit increases or you delete maps above to make space"
                        }), h.map((l, j) => e.jsx(U, {
                            id: l._id,
                            name: l.name,
                            disabled: !0
                        }, l._id))]
                    }) : null, i.length ? e.jsx("div", {
                        style: {
                            fontSize: 14,
                            fontStyle: "italic",
                            color: "rgba(255,255,255,0.8)"
                        },
                        children: "In Gimkit Creative, you can collaborate and play your maps with up to 60 players!"
                    }) : null]
                }) : e.jsxs(st, {
                    children: ["You haven't built any maps yet. Click the", " ", e.jsx("b", {
                        style: {
                            color: "#ffff94"
                        },
                        children: "Create New Map"
                    }), " button above to get started."]
                })]
            }), e.jsx(et, {
                open: d,
                close: p
            })]
        })
    },
    at = a.div.attrs({
        className: "maxWidth"
    })``,
    it = a.div.attrs({
        className: "flex between maxWidth vc"
    })``,
    nt = a.div``,
    ne = a.div`
  font-family: ${x.FugazOne};
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 3px;
`,
    rt = a.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,
    st = a.div.attrs({
        className: "maxWidth"
    })`
  border: 2px dashed rgba(255, 255, 255, 0.25);
  padding: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`,
    ot = () => e.jsxs(lt, {
        children: [e.jsx(ne, {
            children: "Resources"
        }), e.jsxs(k, {
            size: 10,
            direction: "vertical",
            className: "maxWidth",
            style: {
                marginTop: 10
            },
            children: [e.jsx(R, {
                title: "Changelog",
                description: "Read about the latest updates to Gimkit Creative!",
                url: "https://docs.creative.gimkit.com/changelog"
            }), e.jsx(R, {
                title: "Community Forum",
                description: "Ask questions and get help building your own maps!",
                url: "https://forum.creative.gimkit.com"
            }), e.jsx(R, {
                title: "Documentation",
                description: "Documentation to help you build your own maps.",
                url: "https://docs.creative.gimkit.com"
            })]
        })]
    }),
    R = t => e.jsx("a", {
        href: t.url,
        target: "_blank",
        className: "maxWidth",
        children: e.jsxs(ct, {
            children: [e.jsxs("div", {
                children: [e.jsx("div", {
                    children: e.jsx(C.Text, {
                        style: {
                            fontWeight: S.Bold,
                            color: w.White,
                            textDecoration: "underline"
                        },
                        children: t.title
                    })
                }), e.jsx(C.Text, {
                    style: {
                        color: "rgba(255,255,255,0.8)"
                    },
                    italic: !0,
                    children: t.description
                })]
            }), e.jsx("div", {
                children: e.jsx(C.Text, {
                    style: {
                        color: w.White
                    },
                    children: e.jsx(b, {
                        name: "fas fa-external-link"
                    })
                })
            })]
        })
    }),
    lt = a.div``,
    ct = a(K).attrs({
        className: "maxWidth"
    })`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    dt = ["creative-creative-basics"],
    mt = () => ae(dt, () => J({
        url: "/api/created-map/basics"
    })),
    pt = () => {
        const {
            data: t,
            isLoading: i,
            error: n
        } = mt();
        return n ? e.jsx("div", {
            className: "flex-center maxWidth",
            style: {
                marginTop: 50
            },
            children: e.jsx("div", {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: "90%"
                },
                children: "There was an error loading Gimkit Creative. Please refresh and try again."
            })
        }) : i ? e.jsx(X, {
            style: {
                marginTop: 100
            },
            children: e.jsx(ze, {
                style: {
                    color: w.White
                }
            })
        }) : e.jsxs(ht, {
            children: [e.jsx(Ee, {}), e.jsxs(k, {
                className: "maxWidth",
                direction: "vertical",
                size: 25,
                style: {
                    marginTop: 30,
                    width: E.width,
                    maxWidth: E.maxWidth
                },
                children: [t.completedTutorial ? null : e.jsx(D, {
                    children: e.jsx(Ie, {})
                }), e.jsx(D, {
                    children: e.jsx(tt, {
                        mapLimit: t.mapLimit
                    })
                }), e.jsx(D, {
                    children: e.jsx(ot, {})
                })]
            })]
        })
    },
    ht = a(W).attrs({
        className: "maxWidth"
    })`
  padding: 35px 0px;
`,
    xt = 8,
    ut = 16,
    gt = () => e.jsxs(ft, {
        children: [e.jsx("img", {
            src: "/client/img/creative/banner.png",
            style: {
                height: 200
            }
        }), e.jsx(jt, {
            children: "Discovery Is Closed During School Hours"
        }), e.jsxs(bt, {
            children: ["Check back in after ", e.jsx("b", {
                style: {
                    color: z.Yellow
                },
                children: "4pm"
            }), " to view & play maps made by the Gimkit Creative community!"]
        })]
    }),
    ft = a(D).attrs({
        className: "flex-column flex-center"
    })`
  max-width: 700px;
  font-family: ${x.FugazOne};
  overflow: hidden;
`,
    jt = a.div`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`,
    bt = a.div`
  font-family: ${x.SFPro};
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`,
    Z = ({
        children: t
    }) => {
        const i = ge(),
            n = i.day() !== 0 && i.day() !== 6 && i.hour() >= xt && i.hour() < ut;
        return fe() && n ? e.jsx(X, {
            style: {
                padding: 35
            },
            children: e.jsx(gt, {})
        }) : e.jsx(e.Fragment, {
            children: t
        })
    },
    vt = s.lazy(() => B(() => import("./App-68.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]))),
    yt = s.lazy(() => B(() => import("./App-69.js"), __vite__mapDeps([53, 1, 2, 4, 6, 16, 40, 41, 10, 48, 25, 26, 38, 7, 20, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52]))),
    Ct = s.lazy(() => B(() => import("./App-70.js"), __vite__mapDeps([54, 1, 2, 4, 3, 5, 6, 7, 34, 35, 36, 18, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]))),
    wt = () => {
        je(() => {
            ke("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        });
        const {
            pathname: t
        } = be(), {
            id: i
        } = ve(), n = !!_({
            path: we
        }, t) && (i == null ? void 0 : i.startsWith("@")), o = s.useMemo(() => n ? e.jsx(Z, {
            children: e.jsx(vt, {})
        }) : _({
            path: H
        }, t) ? e.jsx(yt, {}) : _({
            path: V
        }, t) ? e.jsx(Z, {
            children: e.jsx(Ct, {})
        }) : e.jsx(pt, {}), [t, n]);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(ye, {
                title: "Gimkit Creative",
                override: !0
            }), e.jsxs(Se, {
                children: [e.jsx(Te, {
                    theme: Y.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: "blur(4px)"
                    },
                    children: e.jsx(Me, {
                        theme: Y.dark,
                        selectedOption: n ? "creative-explore" : void 0,
                        bottomContent: e.jsx("div", {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: "creative-home",
                            label: "Build",
                            path: Ce,
                            icon: e.jsx(b, {
                                name: "fas fa-hammer"
                            })
                        }, {
                            id: "creative-explore",
                            label: "Discovery",
                            path: V,
                            otherMatchingPaths: [H],
                            icon: e.jsx(b, {
                                name: "fas fa-gamepad-alt"
                            })
                        }]
                    })
                }), e.jsx(kt, {
                    children: e.jsx(s.Suspense, {
                        fallback: null,
                        children: o
                    })
                })]
            })]
        })
    },
    kt = a.div`
  color: ${w.White};
`,
    Ht = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: wt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ht as A, D as C
};