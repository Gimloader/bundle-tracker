import {
    r as l,
    I as U,
    _ as G,
    dW as A,
    dX as Y,
    dY as V,
    cH as X,
    j as t,
    T as J,
    d as o,
    u as Z,
    b as ee,
    e as m,
    F as P,
    B as C,
    y as B,
    z as te,
    D as ae,
    S as se
} from "./_index.js";
import {
    S as re
} from "./App-4.js";
import {
    F as ne
} from "./FontAwesomeIcon.js";
import {
    A as O
} from "./AccessibleAnchor.js";
import {
    C as q
} from "./CapitalizeFirstLetter.js";
import {
    g as ie
} from "./getCloudinaryUrl.js";
import {
    S as I
} from "./index-2.js";
import {
    a as oe
} from "./Shortcut.js";
import {
    c as le
} from "./Language.js";
import {
    o as ce
} from "./EducatorSpecificInfoStage.js";
import {
    R as de
} from "./index-13.js";
import {
    S as W
} from "./index-8.js";
import {
    P as ue
} from "./index-20.js";
import {
    R as ge
} from "./index-3.js";
import {
    Q as he,
    a as me,
    u as xe
} from "./useQuery.js";
var fe = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"
                }
            }]
        },
        name: "setting",
        theme: "outlined"
    },
    ve = function(a, s) {
        return l.createElement(U, G({}, a, {
            ref: s,
            icon: fe
        }))
    },
    ye = l.forwardRef(ve);
class je extends he {
    constructor(a, s) {
        super(a, s)
    }
    bindMethods() {
        super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
    }
    setOptions(a, s) {
        super.setOptions({
            ...a,
            behavior: A()
        }, s)
    }
    getOptimisticResult(a) {
        return a.behavior = A(), super.getOptimisticResult(a)
    }
    fetchNextPage({
        pageParam: a,
        ...s
    } = {}) {
        return this.fetch({
            ...s,
            meta: {
                fetchMore: {
                    direction: "forward",
                    pageParam: a
                }
            }
        })
    }
    fetchPreviousPage({
        pageParam: a,
        ...s
    } = {}) {
        return this.fetch({
            ...s,
            meta: {
                fetchMore: {
                    direction: "backward",
                    pageParam: a
                }
            }
        })
    }
    createResult(a, s) {
        var i, r, c, d, u, g;
        const {
            state: h
        } = a, x = super.createResult(a, s), {
            isFetching: v,
            isRefetching: S
        } = x, y = v && ((i = h.fetchMeta) == null || (r = i.fetchMore) == null ? void 0 : r.direction) === "forward", f = v && ((c = h.fetchMeta) == null || (d = c.fetchMore) == null ? void 0 : d.direction) === "backward";
        return {
            ...x,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: V(s, (u = h.data) == null ? void 0 : u.pages),
            hasPreviousPage: Y(s, (g = h.data) == null ? void 0 : g.pages),
            isFetchingNextPage: y,
            isFetchingPreviousPage: f,
            isRefetching: S && !y && !f
        }
    }
}

function pe(e, a, s) {
    const i = X(e, a, s);
    return me(i, je)
}
const be = e => {
        var a, s, i, r;
        return t.jsxs(t.Fragment, {
            children: [e.title ? t.jsx(J, {
                title: e.title
            }) : null, t.jsxs(Pe, {
                style: (a = e.styles) == null ? void 0 : a.container,
                className: (s = e.classNames) == null ? void 0 : s.container,
                children: [e.noHeader ? null : t.jsx(re, {
                    includeSpacer: !0,
                    theme: e.headerTheme
                }), t.jsx(Se, {
                    style: (i = e.styles) == null ? void 0 : i.content,
                    className: (r = e.classNames) == null ? void 0 : r.content,
                    children: e.children
                })]
            })]
        })
    },
    Pe = o.div.attrs({
        className: "flex-column"
    })`
  flex: 1;
`,
    Se = o.div.attrs({
        className: "maxWidth flex-column"
    })`
  flex: 1;
`,
    $e = e => e.startsWith("https://images.unsplash.com") ? e.split("?")[0] + "?w=1000" : ie(e),
    b = {
        kit: {
            width: 350,
            height: 350,
            gap: 30
        }
    },
    Ne = new Intl.NumberFormat("en", {
        notation: "compact"
    }),
    N = e => t.jsxs(Fe, {
        children: [t.jsx(ne, {
            name: `far ${e.icon}`
        }), t.jsx("span", {
            style: {
                marginLeft: 4
            },
            children: e.text
        })]
    }),
    we = e => {
        const [a, s, i] = Z(!1), r = $e(e.image);
        return t.jsx(O, {
            to: `/view/${e.id}`,
            style: {
                textDecoration: "none"
            },
            children: t.jsxs(Ce, {
                className: "maxWidth lightShadow mediumShadowOnHover",
                onMouseEnter: s,
                onMouseLeave: i,
                children: [t.jsx(ke, {
                    $imageUrl: r,
                    $isHovering: a
                }), t.jsxs("div", {
                    className: "maxWidth",
                    style: {
                        background: "rgba(0,0,0,0.4)",
                        backdropFilter: "blur(10px)",
                        padding: 18
                    },
                    children: [t.jsx(Me, {
                        children: e.title
                    }), t.jsx(ze, {
                        children: q(e.creatorName)
                    }), t.jsxs(I, {
                        direction: "horizontal",
                        size: 16,
                        style: {
                            marginTop: 10
                        },
                        children: [t.jsx(N, {
                            icon: "fa-question-circle",
                            text: `${e.questionCount} questions`
                        }), e.playCount > 50 ? t.jsx(N, {
                            icon: "fa-play",
                            text: `${Ne.format(e.playCount)} plays`
                        }) : null, t.jsx(N, {
                            icon: "fa-calendar",
                            text: `${q(ee(e.createdAt).fromNow())}`
                        })]
                    })]
                })]
            })
        })
    },
    Ce = o.div.attrs({
        className: "flex"
    })`
  height: ${b.kit.height}px;
  border-radius: 12px;
  border: 2px solid ${m.Black};
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  background: ${m.BackgroundPurple};
`,
    ke = o.div.attrs({
        className: "maxAll"
    })`
  background: url(${e=>e.$imageUrl});
  background-size: cover;
  transform: scale(${e=>e.$isHovering?1.1:1});
  background-position: center;
  transition: transform 0.2s ease-in-out;
  position: absolute;
`,
    Me = o.div`
  font-size: 18px;
  font-weight: ${P.Bold};
  color: ${m.White};
`,
    ze = o.div`
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
`,
    Fe = o.div.attrs({
        className: "flex vc"
    })`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;
var R = (e => (e.relevant = "relevant", e.recent = "recent", e))(R || {});
const Le = e => t.jsxs(I, {
        direction: "vertical",
        size: 10,
        children: [t.jsxs("div", {
            children: [t.jsx(w, {
                children: "Sort"
            }), t.jsx("div", {
                children: t.jsx(de.Group, {
                    onChange: a => e.setSort(a.target.value),
                    value: e.sort,
                    options: [{
                        value: "relevant",
                        label: "Most Relevant"
                    }, {
                        value: "recent",
                        label: "Most Recent"
                    }]
                })
            })]
        }), t.jsxs("div", {
            children: [t.jsx(w, {
                children: "Language"
            }), t.jsx(W, {
                showSearch: !0,
                placeholder: "All languages",
                allowClear: !0,
                optionFilterProp: "label",
                className: "maxWidth",
                value: e.language,
                onChange: a => e.setLanguage(a ?? void 0),
                options: le().map(a => ({
                    value: a.key,
                    label: a.value
                }))
            })]
        }), t.jsxs("div", {
            children: [t.jsx(w, {
                children: "Subject"
            }), t.jsx(W, {
                showSearch: !0,
                placeholder: "All subjects",
                allowClear: !0,
                optionFilterProp: "label",
                className: "maxWidth",
                value: e.subject,
                onChange: a => e.setSubject(a ?? void 0),
                options: ce.map(a => ({
                    value: a,
                    label: a
                }))
            })]
        })]
    }),
    w = o.div`
  font-size: 14px;
  font-weight: ${P.Bold};
  margin-bottom: 1px;
`,
    Ae = e => {
        const {
            query: a,
            setQuery: s,
            search: i
        } = e;
        return t.jsxs(qe, {
            children: [t.jsx(We, {
                placeholder: "Search for kits...",
                autoFocus: !0,
                value: a,
                onChange: r => s(r.target.value),
                onKeyDown: r => {
                    r.key === "Enter" && i()
                }
            }), t.jsx(T, {
                style: {
                    right: 55
                },
                children: t.jsx(ue, {
                    content: t.jsx(Le, {
                        sort: e.sort,
                        setSort: e.setSort,
                        language: e.language,
                        setLanguage: e.setLanguage,
                        subject: e.subject,
                        setSubject: e.setSubject
                    }),
                    trigger: "click",
                    placement: "bottom",
                    styles: {
                        body: {
                            padding: 20
                        }
                    },
                    children: t.jsx(C, {
                        shape: "circle",
                        type: "dashed",
                        size: "large",
                        icon: t.jsx(ye, {}),
                        onClick: i
                    })
                })
            }), t.jsx(T, {
                children: t.jsx(C, {
                    shape: "circle",
                    type: "primary",
                    size: "large",
                    icon: t.jsx(ge, {}),
                    onClick: i
                })
            })]
        })
    },
    qe = o.div.attrs({
        className: "maxWidth"
    })`
  position: relative;
`,
    We = o.input.attrs({
        className: "maxWidth"
    })`
  border: 2px solid ${m.Black};
  font-size: 18px;
  padding: 14px 21px;
  border-radius: 50px;
  &::placeholder {
    font-style: italic;
  }
`,
    T = o.div.attrs({
        className: "maxHeight flex-center"
    })`
  position: absolute;
  right: 9px;
  top: 0px;
`,
    Te = () => t.jsxs(t.Fragment, {
        children: [t.jsx(Be, {
            children: "Discovery"
        }), t.jsx(Oe, {
            children: "Search from our library of over 30,000,000 kits!"
        })]
    }),
    Be = o.div`
  font-size: 56px;
  color: ${m.Black};
  font-weight: ${P.UltraBold};
  margin-bottom: 1px;
`,
    Oe = o.div`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.9);
  margin-top: -10px;
  margin-bottom: 20px;
`,
    Ie = e => pe({
        queryKey: ["search", e.query, e.sort, e.language, e.subject],
        enabled: !!e.query,
        refetchOnMount: !1,
        queryFn: async ({
            pageParam: a = 0
        }) => {
            const s = await B({
                url: "/api/games/search",
                data: {
                    query: e.query,
                    page: a,
                    sort: e.sort,
                    language: e.language,
                    subject: e.subject
                }
            });
            return {
                data: s.results,
                currentPage: s.page,
                nextPage: s.hasMore ? s.page + 1 : void 0
            }
        },
        getNextPageParam: a => a.nextPage ?? !1
    }),
    Re = e => t.jsx("div", {
        className: "maxWidth flex hc vc flex-column",
        children: t.jsxs("div", {
            style: {
                padding: "0 38px",
                marginTop: 42,
                textAlign: "center"
            },
            children: [t.jsx("img", {
                src: "/client/img/icons/sad.svg"
            }), t.jsxs("div", {
                style: {
                    marginTop: 18,
                    fontSize: 20
                },
                children: [t.jsx("div", {
                    style: {
                        fontWeight: P.Bold
                    },
                    children: e.error ? "There was an error searching for kits" : "We couldn't find any results."
                }), t.jsx("div", {
                    style: {
                        marginTop: 5
                    },
                    children: e.error ? "Please try again later. If the issue persists, contact support." : t.jsxs(t.Fragment, {
                        children: ["Try another search or maybe", " ", t.jsx(O, {
                            to: "/create",
                            children: "make your own kit!"
                        })]
                    })
                })]
            })]
        })
    }),
    _e = e => xe({
        queryKey: ["gallery"],
        enabled: !e,
        queryFn: async () => await B({
            url: "/api/games/gallery"
        })
    }),
    _ = new Map,
    Qe = (e, a) => {
        _.set(e, a)
    },
    Ee = e => {
        const a = _.get(e);
        a && window.scrollTo(0, a)
    },
    He = () => {
        const [e, a] = l.useState(""), [s, i] = te(), r = s.get("q") ?? "", c = s.get("sort") ?? R.relevant, d = s.get("lang") ?? void 0, u = s.get("subject") ?? void 0, {
            data: g,
            error: h,
            isLoading: x,
            hasNextPage: v,
            fetchNextPage: S,
            isFetchingNextPage: y
        } = Ie({
            query: r,
            sort: c,
            language: d,
            subject: u
        }), {
            data: f,
            error: k,
            isLoading: M
        } = _e(r), E = l.useMemo(() => r ? x : M, [x, M, r]), z = l.useMemo(() => r ? h : k, [h, k, r]), F = l.useMemo(() => r ? ((g == null ? void 0 : g.pages.flat()) ?? []).map(n => n.data).flat() : f ?? [], [r, g, f]), j = (n, L) => {
            i(D => {
                const $ = Object.fromEntries(D);
                return L === void 0 ? delete $[n] : $[n] = L, $
            })
        }, H = l.useCallback(() => {
            e !== r && j("q", e || void 0)
        }, [e, r, i]), p = l.useMemo(() => `${r}|${c}|${d}|${u}`, [r, c, d, u]);
        l.useLayoutEffect(() => {
            Ee(p)
        }, [p]), l.useLayoutEffect(() => () => {
            Qe(p, window.scrollY)
        }, [p]);
        const K = () => E ? t.jsx("div", {
            style: {
                flex: 1
            },
            className: "flex-center",
            children: t.jsx(se, {
                size: "large"
            })
        }) : !F.length || z ? t.jsx(Re, {
            error: !!z
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx(Q, {
                children: F.map(n => t.jsx(we, {
                    id: n._id,
                    title: n.title,
                    image: n.gif,
                    questionCount: n.questionCount,
                    playCount: n.playCount,
                    creatorName: n.creator,
                    createdAt: n.dateCreated
                }, n._id))
            }), v ? t.jsx("div", {
                className: "maxWidth flex-center",
                style: {
                    marginTop: b.kit.gap
                },
                children: t.jsx(C, {
                    type: "primary",
                    size: "large",
                    onClick: () => S(),
                    loading: y,
                    children: "Load more"
                })
            }) : null]
        });
        return t.jsxs(be, {
            title: r ? `Kits about "${r}"` : "Discovery",
            headerTheme: oe.light,
            classNames: {
                container: "flex-center"
            },
            styles: {
                container: {
                    background: m.Snow
                },
                content: {
                    padding: "40px 0px",
                    width: "85%",
                    maxWidth: 1350
                }
            },
            children: [t.jsx(Te, {}), t.jsx(Ae, {
                query: e,
                setQuery: a,
                search: H,
                sort: c,
                language: d,
                subject: u,
                setSort: n => j("sort", n),
                setLanguage: n => j("lang", n),
                setSubject: n => j("subject", n)
            }), t.jsx(ae, {
                style: {
                    margin: "30px 0px"
                }
            }), K()]
        })
    },
    Q = o.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-gap: ${b.kit.gap}px;
  grid-template-rows: auto;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${b.kit.width}px, 100%), 1fr)
  );
`,
    it = Object.freeze(Object.defineProperty({
        __proto__: null,
        Items: Q,
        default: He
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    it as A, Q as I, we as K, be as P
};