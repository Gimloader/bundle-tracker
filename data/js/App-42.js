const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-64.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/useQuery.js", "assets/index-1.js", "assets/Centered.js", "assets/index-2.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/AccessibleAnchor.js", "assets/TrackEvent.js", "assets/TrackPostHogEvent.js", "assets/index-3.js", "assets/getCloudinaryUrl.js", "assets/FontAwesomeIcon.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/App-65.js", "assets/AnimatedBackground-1.js", "assets/App-4.js", "assets/Shortcut.js", "assets/Names.js", "assets/mobxreact.esm.js", "assets/index-6.js", "assets/App-2.js", "assets/Sizes.js", "assets/motion.js", "assets/price.js", "assets/index-4.js", "assets/context.js", "assets/StarOutlined.js", "assets/NavigateTo.js", "assets/index-15.js", "assets/colors.js", "assets/useWarningOnMountInDevelopment.js", "assets/index-10.js", "assets/index-5.js", "assets/move.js", "assets/App-5.js", "assets/index-24.js", "assets/GetAssetPath.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/MapStyle.js", "assets/SeasonTicketInlineUpsell.js", "assets/SeasonTicketName.js", "assets/OwnsSeasonTicket.js"]))) => i.map(i => d[i]);
import {
    j as e,
    d as a,
    U as b,
    dT as ce,
    F as M,
    b6 as de,
    y as q,
    u as x,
    r as l,
    B as u,
    e as w,
    M as L,
    a as y,
    t as W,
    E as me,
    cm as pe,
    s as he,
    G as xe,
    H as O,
    T as ue,
    co as ge,
    dU as G,
    p as Q,
    dV as fe,
    ah as je
} from "./_index.js";
import {
    A as be
} from "./AnimatedBackground-1.js";
import {
    S as ve
} from "./App-4.js";
import {
    a as V
} from "./Shortcut.js";
import {
    S as ye
} from "./App-5.js";
import {
    F as j
} from "./FontAwesomeIcon.js";
import {
    a as $,
    V as J,
    C as Ce
} from "./Centered.js";
import {
    B as K
} from "./index-24.js";
import {
    M as X,
    C as _
} from "./Button.js";
import {
    G as R
} from "./GetAssetPath.js";
import {
    u as Z
} from "./useQuery.js";
import {
    D as we
} from "./index-10.js";
import {
    T as C
} from "./index-14.js";
import {
    I as A
} from "./index-3.js";
import {
    A as ke
} from "./TrackEvent.js";
import {
    M as N
} from "./MapStyle.js";
import {
    S as k
} from "./index-2.js";
import {
    S as Me
} from "./SeasonTicketInlineUpsell.js";
import {
    C as Se
} from "./CircularProgress.js";
const D = {
        width: "90%",
        maxWidth: "800px"
    },
    Te = () => e.jsxs(Ne, {
        children: [e.jsxs(We, {
            children: [e.jsx(De, {
                src: "/client/img/svgLogoWhite.svg"
            }), e.jsx($e, {
                children: "Creative"
            })]
        }), e.jsx(ze, {
            children: e.jsx(K, {
                children: "Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!"
            })
        })]
    }),
    Ne = a($)`
  width: ${D.width};
  max-width: ${D.maxWidth};
`,
    We = a($)``,
    De = a.img`
  height: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.9) 0px 1px 2px);
`,
    $e = a.div`
  text-shadow: rgba(0, 0, 0, 0.6) 0px 3px 15px;
  font-size: 72px;
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 10px;
`,
    ze = a.div`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
`,
    z = t => e.jsx(Ee, {
        className: t.className,
        children: t.children
    }),
    Ee = a.div.attrs({
        className: "maxWidth light-shadow"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 12px;
  backdrop-filter: blur(3px);
`,
    Le = () => e.jsxs(_e, {
        children: [e.jsx(Re, {
            children: e.jsx(Ae, {})
        }), e.jsxs(Be, {
            children: [e.jsx(Ie, {
                children: e.jsx(K, {
                    children: "Complete the Gimkit Creative tutorial and receive the Blueprint Gim for free!"
                })
            }), e.jsx(Pe, {
                children: "The tutorial takes about 10 minutes to complete."
            }), e.jsx(X, {
                size: "small",
                customFontWeight: M.Bold,
                type: "success",
                onClick: () => window.location.href = ce,
                ariaLabel: "Start Tutorial",
                children: "Start Tutorial"
            })]
        })]
    }),
    _e = a.div.attrs({
        className: "maxWidth flex-center"
    })``,
    Re = a.div``,
    Ae = a.img.attrs({
        src: R("characters/spine/preview/construction.png")
    })`
  height: 155px;
  transform: rotate(353deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`,
    Be = a.div`
  margin-left: 20px;
`,
    Ie = a.div`
  font-weight: ${M.Bold};
  font-size: 18px;
  line-height: 1.3;
`,
    Pe = a.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-style: italic;
`,
    ee = ["creative-created-maps"],
    Fe = () => Z(ee, () => q({
        url: "/api/created-maps"
    })),
    B = () => de.invalidateQueries(ee),
    H = t => {
        const [i, r, c] = x(!1), [d, v, p] = x(!1), [m, g] = l.useState(""), [h, s] = l.useState(""), [f, S, o] = x(!1), [T, ae, ie] = x(!1), [ne, re, se] = x(!1);
        l.useEffect(() => {
            g("")
        }, [i]), l.useEffect(() => {
            s("")
        }, [d]);
        const I = (m == null ? void 0 : m.trim().length) < 2,
            P = () => {
                I || f || (S(), y({
                    url: "/api/created-map/rename",
                    data: {
                        id: t.id,
                        name: m
                    },
                    success: () => {
                        B()
                    },
                    error: n => {
                        W({
                            e: n,
                            default: {
                                title: "Error renaming map"
                            }
                        })
                    },
                    both: () => {
                        c(), o()
                    }
                }))
            },
            F = h !== t.name,
            oe = () => {
                F || T || (ae(), y({
                    url: "/api/created-map/delete",
                    data: {
                        id: t.id
                    },
                    success: () => {
                        B()
                    },
                    error: n => {
                        W({
                            e: n,
                            default: {
                                title: "Error deleting map"
                            }
                        })
                    },
                    both: () => {
                        p(), ie()
                    }
                }))
            },
            le = () => {
                t.disabled || ne || (re(), y({
                    url: "/api/matchmaker/intent/map/edit/create",
                    data: {
                        mapId: t.id
                    },
                    success: n => window.location.href = `/host?id=${n}`,
                    error: n => {
                        W({
                            e: n,
                            default: {
                                title: "Error loading into your map. Please try again."
                            }
                        })
                    },
                    both: se
                }))
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Oe, {
                onClick: le,
                disabled: t.disabled,
                children: [e.jsx("div", {
                    children: t.name
                }), e.jsx("div", {
                    onClick: n => n.stopPropagation(),
                    children: e.jsx(we, {
                        menu: {
                            items: [{
                                key: `rename-${t.id}`,
                                label: "Rename",
                                icon: e.jsx(j, {
                                    name: "far fa-edit"
                                }),
                                onClick: n => {
                                    n.domEvent.stopPropagation(), r()
                                }
                            }, {
                                key: `delete-${t.id}`,
                                label: "Delete",
                                icon: e.jsx(j, {
                                    name: "far fa-trash-alt"
                                }),
                                danger: !0,
                                onClick: n => {
                                    n.domEvent.stopPropagation(), v()
                                }
                            }]
                        },
                        children: e.jsx(u, {
                            icon: e.jsx(j, {
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
                onCancel: c,
                title: "Rename",
                footer: [e.jsx(u, {
                    onClick: c,
                    children: "Cancel"
                }, "cancel-rename"), e.jsx(u, {
                    type: "primary",
                    onClick: P,
                    disabled: I,
                    loading: f,
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
                    onChange: n => g(n.target.value),
                    onPressEnter: P
                })]
            }), e.jsxs(L, {
                open: d,
                onCancel: p,
                title: "Delete Map",
                footer: [e.jsx(u, {
                    onClick: p,
                    children: "Cancel"
                }, "cancel-delete"), e.jsx(u, {
                    type: "primary",
                    danger: !0,
                    disabled: F,
                    onClick: oe,
                    loading: T,
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
                    onChange: n => s(n.target.value)
                })]
            })]
        })
    },
    Oe = a(J).attrs({
        className: "maxWidth between"
    })`
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-weight: ${M.Bold};
  line-height: 1;
  font-size: 14px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    U = t => {
        const {
            image: i,
            name: r,
            description: c
        } = t;
        return e.jsxs(Ge, {
            onClick: t.onSelect,
            style: {
                borderColor: t.selected ? _.Yellow : "rgba(255, 255, 255, 0.1)"
            },
            children: [t.tag ? e.jsx(Ue, {
                children: t.tag
            }) : null, e.jsx(Ve, {
                style: {
                    backgroundImage: `url("${i}")`
                }
            }), e.jsxs(He, {
                children: [e.jsx(Ye, {
                    children: r
                }), e.jsx(qe, {
                    children: c
                })]
            })]
        })
    },
    Ge = a.div`
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
    Ve = a.div.attrs({
        className: "maxWidth"
    })`
  height: 132px;
  background-size: cover;
  background-position: center -57px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`,
    He = a($).attrs({
        className: "maxWidth"
    })`
  padding: 10px;
  padding-top: 0px;
`,
    Ue = a.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  font-size: 9px;
  padding: 3px 9px;
  border-radius: 20px;
  margin-bottom: 5px;
  background: ${_.Yellow};
  color: ${_.Black};
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`,
    Ye = a.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  font-size: 16px;
`,
    qe = a.div`
  font-family: ${b.SFPro};
  font-size: 13px;
  margin-top: -3px;
`,
    Qe = t => {
        const i = l.useRef(null),
            [r, c] = l.useState(""),
            [d, v] = l.useState(),
            [p, m, g] = x(!1),
            h = (r == null ? void 0 : r.trim().length) < 2 || !d,
            s = o => {
                c(o.target.value)
            };
        l.useEffect(() => {
            t.open && setTimeout(() => {
                var o;
                (o = i.current) == null || o.focus()
            }, 1)
        }, [t.open]);
        const f = () => {
                h || p || (m(), y({
                    url: "/api/created-map/create",
                    data: {
                        name: r,
                        mapStyle: d
                    },
                    success: o => {
                        ke({
                            event: "creative_map_created",
                            properties: {
                                mapStyle: d
                            }
                        }), B(), y({
                            url: "/api/matchmaker/intent/map/edit/create",
                            data: {
                                mapId: o
                            },
                            success: T => window.location.href = `/host?id=${T}`,
                            both: t.close
                        })
                    },
                    error: o => {
                        W({
                            e: o,
                            default: {
                                title: "Error creating map"
                            }
                        })
                    },
                    both: () => {
                        g(), c("")
                    }
                }))
            },
            S = o => {
                v(o)
            };
        return e.jsx(me, {
            theme: {
                algorithm: pe.darkAlgorithm,
                token: {
                    colorBgBase: "#1C1D57"
                }
            },
            children: e.jsx(L, {
                open: t.open,
                onCancel: t.close,
                width: 668,
                footer: [e.jsx(u, {
                    onClick: t.close,
                    children: "Cancel"
                }, "cancel-new-map"), e.jsx(u, {
                    type: "primary",
                    disabled: h,
                    loading: p,
                    onClick: f,
                    children: "Create"
                }, "create-new-map")],
                children: e.jsxs(k, {
                    direction: "vertical",
                    size: 20,
                    className: "maxWidth",
                    children: [e.jsxs("div", {
                        className: "maxWidth",
                        children: [e.jsx(Y, {
                            children: "Map Name"
                        }), e.jsx(A, {
                            ref: i,
                            value: r,
                            onChange: s,
                            placeholder: "Enter map name here...",
                            maxLength: 32,
                            onPressEnter: f,
                            size: "large"
                        })]
                    }), e.jsxs("div", {
                        className: "maxWidth",
                        children: [e.jsx(Y, {
                            children: "Map Style"
                        }), e.jsxs("div", {
                            className: "flex",
                            style: {
                                flexWrap: "wrap",
                                gap: 14,
                                marginBottom: 3
                            },
                            children: [e.jsx(U, {
                                image: R("creative/top-down.jpeg"),
                                name: "Top-Down",
                                description: "Players move in all four directions",
                                selected: d === N.topDown,
                                onSelect: () => S(N.topDown)
                            }), e.jsx(U, {
                                image: R("creative/platformer.jpeg"),
                                name: "Platformer",
                                description: "Players move left & right, but can also jump",
                                selected: d === N.platformer,
                                onSelect: () => S(N.platformer)
                            })]
                        })]
                    })]
                })
            })
        })
    },
    Y = a.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
`,
    Je = t => {
        const {
            data: i,
            isLoading: r,
            error: c
        } = Fe(), [d, v, p] = x(!1);
        if (r || c) return null;
        const m = i.length < t.mapLimit,
            g = i.slice(0, t.mapLimit),
            h = i.slice(t.mapLimit);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ke, {
                children: [e.jsxs(Xe, {
                    children: [e.jsxs(Ze, {
                        children: [e.jsx(te, {
                            children: "My Maps"
                        }), e.jsxs(et, {
                            children: [i.length, "/", t.mapLimit, " slots used"]
                        }), i.length >= 2 ? e.jsx(Me, {
                            marginTop: 8,
                            text: "Store up to 25 maps"
                        }) : null]
                    }), m ? e.jsx(X, {
                        size: "small",
                        customFontWeight: M.Bold,
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
                    children: [g.map(s => e.jsx(H, {
                        id: s._id,
                        name: s.name,
                        disabled: !1
                    }, s._id)), h.length ? e.jsxs(k, {
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
                        }), h.map((s, f) => e.jsx(H, {
                            id: s._id,
                            name: s.name,
                            disabled: !0
                        }, s._id))]
                    }) : null, i.length ? e.jsx("div", {
                        style: {
                            fontSize: 14,
                            fontStyle: "italic",
                            color: "rgba(255,255,255,0.8)"
                        },
                        children: "In Gimkit Creative, you can collaborate and play your maps with up to 60 players!"
                    }) : null]
                }) : e.jsxs(tt, {
                    children: ["You haven't built any maps yet. Click the", " ", e.jsx("b", {
                        style: {
                            color: "#ffff94"
                        },
                        children: "Create New Map"
                    }), " button above to get started."]
                })]
            }), e.jsx(Qe, {
                open: d,
                close: p
            })]
        })
    },
    Ke = a.div.attrs({
        className: "maxWidth"
    })``,
    Xe = a.div.attrs({
        className: "flex between maxWidth vc"
    })``,
    Ze = a.div``,
    te = a.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 3px;
`,
    et = a.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,
    tt = a.div.attrs({
        className: "maxWidth"
    })`
  border: 2px dashed rgba(255, 255, 255, 0.25);
  padding: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`,
    at = () => e.jsxs(it, {
        children: [e.jsx(te, {
            children: "Resources"
        }), e.jsxs(k, {
            size: 10,
            direction: "vertical",
            className: "maxWidth",
            style: {
                marginTop: 10
            },
            children: [e.jsx(E, {
                title: "Changelog",
                description: "Read about the latest updates to Gimkit Creative!",
                url: "https://docs.creative.gimkit.com/changelog"
            }), e.jsx(E, {
                title: "Community Forum",
                description: "Ask questions and get help building your own maps!",
                url: "https://forum.creative.gimkit.com"
            }), e.jsx(E, {
                title: "Documentation",
                description: "Documentation to help you build your own maps.",
                url: "https://docs.creative.gimkit.com"
            })]
        })]
    }),
    E = t => e.jsx("a", {
        href: t.url,
        target: "_blank",
        className: "maxWidth",
        children: e.jsxs(nt, {
            children: [e.jsxs("div", {
                children: [e.jsx("div", {
                    children: e.jsx(C.Text, {
                        style: {
                            fontWeight: M.Bold,
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
                    children: e.jsx(j, {
                        name: "fas fa-external-link"
                    })
                })
            })]
        })
    }),
    it = a.div``,
    nt = a(J).attrs({
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
    rt = ["creative-creative-basics"],
    st = () => Z(rt, () => q({
        url: "/api/created-map/basics"
    })),
    ot = () => {
        const {
            data: t,
            isLoading: i,
            error: r
        } = st();
        return r ? e.jsx("div", {
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
        }) : i ? e.jsx(Ce, {
            style: {
                marginTop: 100
            },
            children: e.jsx(Se, {
                style: {
                    color: w.White
                }
            })
        }) : e.jsxs(lt, {
            children: [e.jsx(Te, {}), e.jsxs(k, {
                className: "maxWidth",
                direction: "vertical",
                size: 25,
                style: {
                    marginTop: 30,
                    width: D.width,
                    maxWidth: D.maxWidth
                },
                children: [t.completedTutorial ? null : e.jsx(z, {
                    children: e.jsx(Le, {})
                }), e.jsx(z, {
                    children: e.jsx(Je, {
                        mapLimit: t.mapLimit
                    })
                }), e.jsx(z, {
                    children: e.jsx(at, {})
                })]
            })]
        })
    },
    lt = a($).attrs({
        className: "maxWidth"
    })`
  padding: 35px 0px;
`,
    ct = l.lazy(() => Q(() => import("./App-64.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))),
    dt = l.lazy(() => Q(() => import("./App-65.js"), __vite__mapDeps([18, 1, 2, 3, 10, 14, 6, 7, 8, 9, 13, 5, 16, 17, 19, 20, 21, 22, 23, 4, 24, 15, 25, 26, 27, 28, 12, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 11, 47, 48, 49, 50]))),
    mt = () => {
        he(() => {
            je("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        });
        const {
            pathname: t
        } = xe(), i = l.useMemo(() => O({
            path: fe
        }, t) ? e.jsx(ct, {}) : O({
            path: G
        }, t) ? e.jsx(dt, {}) : e.jsx(ot, {}), [t]);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(ue, {
                title: "Gimkit Creative",
                override: !0
            }), e.jsxs(be, {
                children: [e.jsx(ve, {
                    theme: V.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: "blur(4px)"
                    },
                    children: e.jsx(ye, {
                        theme: V.dark,
                        bottomContent: e.jsx("div", {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: "creative-home",
                            label: "Build",
                            path: ge,
                            icon: e.jsx(j, {
                                name: "fas fa-hammer"
                            })
                        }, {
                            id: "creative-explore",
                            label: "Discovery",
                            path: G,
                            icon: e.jsx(j, {
                                name: "fas fa-gamepad-alt"
                            })
                        }]
                    })
                }), e.jsx(pt, {
                    children: e.jsx(l.Suspense, {
                        fallback: null,
                        children: i
                    })
                })]
            })]
        })
    },
    pt = a.div`
  color: ${w.White};
`,
    zt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    zt as A, z as C, et as D, te as T, D as a
};