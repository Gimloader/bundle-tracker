import {
    y as g,
    j as r,
    e as f,
    d as s,
    U as m,
    F as S,
    z as T,
    r as y,
    E as $,
    cm as W,
    b as z,
    i as N,
    T as D,
    C as k
} from "./_index.js";
import {
    u as j
} from "./useQuery.js";
import {
    A as F
} from "./AccessibleAnchor.js";
import {
    g as I
} from "./getCloudinaryUrl.js";
import {
    S as c
} from "./index-2.js";
import {
    C as d,
    T as P,
    D as A,
    a as x
} from "./App-42.js";
import {
    C as v
} from "./Button.js";
import {
    I as E
} from "./index-3.js";
import {
    C as u
} from "./Centered.js";
import {
    C as H
} from "./CircularProgress.js";
import "./AnimatedBackground-1.js";
import "./App-4.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./index-1.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./App-5.js";
import "./index-24.js";
import "./GetAssetPath.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./TrackEvent.js";
import "./MapStyle.js";
import "./SeasonTicketInlineUpsell.js";
import "./SeasonTicketName.js";
import "./OwnsSeasonTicket.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./capitalize.js";
const _ = ["creative-discovery"],
    L = () => j(_, () => g({
        url: "/api/created-map/listing/discovery"
    }), {
        refetchOnMount: !1,
        refetchOnWindowFocus: !1
    }),
    b = 130,
    O = b * .5625,
    C = t => {
        const {
            _id: o,
            title: i,
            image: n,
            tags: e
        } = t.listing;
        return r.jsx("div", {
            className: "maxWidth",
            children: r.jsx(F, {
                className: "maxWidth",
                style: {
                    color: f.White
                },
                to: `/creative/map/${o}`,
                children: r.jsx(M, {
                    children: r.jsxs(c, {
                        direction: "horizontal",
                        size: 20,
                        align: "center",
                        children: [r.jsx(R, {
                            style: {
                                backgroundImage: `url(${I(n)})`
                            }
                        }), r.jsxs("div", {
                            children: [r.jsx(q, {
                                children: i
                            }), e.length ? r.jsx(c, {
                                direction: "horizontal",
                                size: 6,
                                wrap: !0,
                                style: {
                                    marginTop: 6
                                },
                                children: e.map(l => r.jsx(U, {
                                    children: l
                                }, l + o))
                            }) : null]
                        })]
                    })
                })
            })
        })
    },
    M = s.div.attrs({
        className: "maxWidth"
    })`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  line-height: 0;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    R = s.div`
  width: ${b}px;
  height: ${O}px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-size: cover;
`,
    q = s.div`
  font-family: ${m.FugazOne};
  font-size: 16px;
  line-height: 1;
  margin-top: 2px;
  text-transform: uppercase;
`,
    U = s.div`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 50px;
  font-style: italic;
  font-weight: ${S.Bold};
`,
    B = t => {
        const {
            name: o,
            description: i,
            items: n
        } = t.list;
        return r.jsxs(d, {
            children: [r.jsx(P, {
                children: o
            }), r.jsx(A, {
                children: i
            }), r.jsx(c, {
                style: {
                    marginTop: 18
                },
                direction: "vertical",
                className: "maxWidth",
                size: 14,
                children: n.map(e => r.jsx(C, {
                    listing: e
                }, e._id))
            })]
        })
    },
    Y = "useDiscoverySearch",
    G = t => j({
        queryKey: [Y, {
            searchQuery: t
        }],
        enabled: !!t,
        queryFn: () => g({
            url: "/api/created-map/listing/discovery/search",
            data: {
                query: t
            }
        })
    }),
    K = t => {
        const [o] = T(), [i, n] = y.useState(o.get("q")), {
            data: e,
            isLoading: l
        } = G(i), p = !!(i && l), w = a => {
            const h = new URL(window.location.href);
            h.searchParams.set("q", a), window.history.pushState({}, "", h), n(a)
        };
        return r.jsxs(r.Fragment, {
            children: [r.jsx($, {
                theme: {
                    algorithm: W.darkAlgorithm
                },
                children: r.jsx(E.Search, {
                    onSearch: w,
                    loading: p,
                    placeholder: "Search for maps...",
                    size: "large",
                    style: {
                        marginBottom: 20
                    }
                })
            }), !p && i ? r.jsx("div", {
                className: "maxWidth",
                style: {
                    marginBottom: 20
                },
                children: r.jsx(d, {
                    className: "maxWidth",
                    children: e.length ? r.jsx(c, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth",
                        children: e.map(a => r.jsx(C, {
                            listing: a
                        }, a._id + "-search"))
                    }) : r.jsxs("div", {
                        style: {
                            opacity: .9,
                            fontStyle: "italic"
                        },
                        children: [r.jsx("span", {
                            style: {
                                color: v.Yellow
                            },
                            children: "No results found."
                        }), " ", "Try searching for something else!"]
                    })
                })
            }) : null, r.jsx(c, {
                className: "maxWidth",
                direction: "vertical",
                size: 20,
                children: t.lists.map(a => r.jsx(B, {
                    list: a
                }, a.name + "-list"))
            })]
        })
    },
    Q = 8,
    J = 16,
    V = () => r.jsxs(X, {
        children: [r.jsx("img", {
            src: "/client/img/creative/banner.png",
            style: {
                height: 200
            }
        }), r.jsx(Z, {
            children: "Discovery Is Closed During School Hours"
        }), r.jsxs(rr, {
            children: ["Check back in after ", r.jsx("b", {
                style: {
                    color: v.Yellow
                },
                children: "4pm"
            }), " to view & play maps made by the Gimkit Creative community!"]
        })]
    }),
    X = s(d).attrs({
        className: "flex-column flex-center"
    })`
  max-width: 700px;
  font-family: ${m.FugazOne};
  overflow: hidden;
`,
    Z = s.div`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`,
    rr = s.div`
  font-family: ${m.SFPro};
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`,
    Xr = () => {
        const {
            isLoading: t,
            error: o,
            data: i
        } = L(), n = y.useMemo(() => {
            const e = z();
            return e.day() === 0 || e.day() === 6 ? !1 : e.hour() >= Q && e.hour() < J
        }, []);
        return N() && n ? r.jsx(u, {
            style: {
                padding: 35
            },
            children: r.jsx(V, {})
        }) : o ? r.jsx("div", {
            className: "flex-center maxWidth",
            style: {
                marginTop: 50
            },
            children: r.jsx("div", {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: "90%"
                },
                children: "There was an error loading Discovery. Please refresh and try again."
            })
        }) : t ? r.jsx(u, {
            style: {
                marginTop: 100
            },
            children: r.jsx(H, {
                style: {
                    color: f.White
                }
            })
        }) : r.jsxs(er, {
            children: [r.jsx(D, {
                title: `${k} Creative | Discovery`,
                override: !0
            }), r.jsx(tr, {
                children: r.jsx(K, {
                    lists: i ?? []
                })
            })]
        })
    },
    er = s.div.attrs({
        className: "maxWidth flex hc"
    })`
  padding: 35px 0px;
`,
    tr = s.div`
  width: ${x.width};
  max-width: ${x.maxWidth};
`;
export {
    Xr as
    default
};