import {
    o as e
} from "./rolldown-runtime.js";
import {
    t,
    w as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    l as i
} from "./dist-3.js";
import {
    t as a
} from "./jsx-runtime.js";
import {
    t as o
} from "./useInfiniteQuery.js";
import {
    c as s,
    l as c
} from "./_index.js";
import {
    t as l
} from "./CircularProgress.js";
import {
    n as u
} from "./App-44.js";
import {
    t as d
} from "./MapCard.js";
var f = e(r()),
    p = e => o({
        queryKey: [`creative-profile-pages`, e],
        enabled: !!e,
        staleTime: 6e4,
        refetchOnWindowFocus: !1,
        retry: !1,
        queryFn: ({
            pageParam: t
        }) => n({
            url: `/api/created-map/listing/profile/${encodeURIComponent(e)}${t?`?cursor=${encodeURIComponent(t)}`:``}`
        }),
        getNextPageParam: e => e.nextCursor || void 0
    }),
    m = a(),
    h = () => {
        let {
            id: e
        } = i(), n = e != null && e.startsWith(`@`) ? e.slice(1) : void 0, {
            data: r,
            isLoading: a,
            refetch: o,
            fetchNextPage: s,
            hasNextPage: c,
            isFetching: u,
            isFetchingNextPage: h,
            isError: A
        } = p(n), j = (0, f.useRef)(null), M = r == null ? void 0 : r.pages[0], N = (0, f.useMemo)(() => {
            let e = new Map;
            return r == null || r.pages.forEach(t => t.maps.forEach(t => {
                e.has(t._id) || e.set(t._id, t)
            })), Array.from(e.values())
        }, [r]);
        return (0, f.useEffect)(() => {
            let e = j.current;
            if (!e || !c || u || A || typeof IntersectionObserver > `u`) return;
            let t = !1,
                n = new IntersectionObserver(([e]) => {
                    e.isIntersecting && !t && (t = !0, s({
                        cancelRefetch: !1
                    }))
                }, {
                    rootMargin: `400px`
                });
            return n.observe(e), () => n.disconnect()
        }, [c, u, A, s, r == null ? void 0 : r.pages.length]), (0, m.jsx)(g, {
            children: n && a ? (0, m.jsx)(D, {
                role: `status`,
                "aria-label": `Loading creator profile`,
                children: (0, m.jsx)(l, {
                    style: {
                        color: `white`
                    }
                })
            }) : M ? (0, m.jsxs)(m.Fragment, {
                children: [(0, m.jsx)(t, {
                    title: `@${M.username} | Gimkit Creative`,
                    override: !0
                }), (0, m.jsx)(_, {
                    children: (0, m.jsxs)(v, {
                        children: [`@`, M.username]
                    })
                }), (0, m.jsxs)(w, {
                    children: [(0, m.jsx)(T, {
                        children: `Maps`
                    }), N.length ? (0, m.jsx)(E, {
                        children: N.map(e => (0, m.jsx)(`li`, {
                            children: (0, m.jsx)(d, {
                                map: e
                            })
                        }, e._id))
                    }) : c ? null : (0, m.jsxs)(x, {
                        children: [(0, m.jsx)(S, {
                            src: `/client/img/creative/banner.png`,
                            alt: ``
                        }), (0, m.jsx)(C, {
                            children: `This creator hasn't published any maps yet. Check back soon!`
                        })]
                    }), c ? (0, m.jsx)(k, {
                        ref: j,
                        children: h ? (0, m.jsx)(`div`, {
                            role: `status`,
                            "aria-label": `Loading more maps`,
                            children: (0, m.jsx)(l, {
                                size: 24,
                                style: {
                                    color: `white`
                                }
                            })
                        }) : (0, m.jsx)(O, {
                            disabled: u,
                            onClick: () => s({
                                cancelRefetch: !1
                            }),
                            children: A ? `Try again` : `Load more`
                        })
                    }) : null]
                })]
            }) : (0, m.jsxs)(b, {
                children: [(0, m.jsx)(t, {
                    title: `Profile unavailable | Gimkit Creative`,
                    override: !0
                }), (0, m.jsxs)(x, {
                    children: [(0, m.jsx)(S, {
                        src: `/client/img/creative/banner.png`,
                        alt: ``
                    }), (0, m.jsx)(y, {
                        children: `Profile unavailable`
                    }), (0, m.jsx)(C, {
                        children: `We couldn't load this creator. Their username may have changed, or the profile may no longer be available.`
                    }), n ? (0, m.jsx)(O, {
                        onClick: () => o(),
                        children: `Try again`
                    }) : null]
                })]
            })
        })
    },
    g = c.div`
  width: 90%;
  max-width: 1160px;
  margin: 32px auto 56px;
`,
    _ = c.header`
  display: flex;
  justify-content: center;
  padding: 20px 14px 36px;
  margin-bottom: 12px;
`,
    v = c.h1`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  margin: 0;
  padding: 18px 32px;
  border: 3px solid #210e43;
  border-radius: 6px 14px 6px 14px;
  background-color: #673ab7;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.12) 1px,
      transparent 1px
    ),
    linear-gradient(135deg, #8856cf, #673ab7 65%, #512da8);
  background-size: 6px 6px, 100% 100%;
  box-shadow: 6px 7px 0 #210e43, 0 0 0 2px #d6c4ff;
  transform: rotate(-2deg);
  color: white;
  font-family: ${s.FugazOne};
  font-weight: 400;
  font-size: clamp(24px, 4vw, 46px);
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 3px 0 #32165b;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    padding: 14px 20px;
    box-shadow: 4px 5px 0 #210e43, 0 0 0 2px #d6c4ff;
  }
`,
    y = c.h1`
  font-family: ${s.FugazOne};
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
  overflow-wrap: anywhere;
`,
    b = c(u)`
  box-sizing: border-box;
  max-width: 700px;
  margin: 48px auto;
  @media (max-width: 600px) {
    margin: 24px auto;
    padding: 22px;
  }
`,
    x = c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0 28px;
  text-align: center;
`,
    S = c.img`
  display: block;
  width: 280px;
  max-width: 80%;
  height: auto;
  margin-bottom: 8px;
`,
    C = c.p`
  max-width: 440px;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${s.SFPro};
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`,
    w = c(u)`
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 22px;
  }
`,
    T = c.h2`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: ${s.FugazOne};
  font-size: 24px;
  text-transform: uppercase;
  margin: 0 0 24px;
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
  }
`,
    E = c.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  padding: 0;
  margin: 0;
  list-style: none;
  > li {
    min-width: 0;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }
`,
    D = c.div`
  display: grid;
  place-items: center;
  min-height: 220px;
`,
    O = c.button`
  background: #673ab7;
  color: white;
  font: inherit;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 10px 18px;
  cursor: pointer;
  &:hover {
    background: #7e57c2;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 4px;
  }
`,
    k = c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  margin-top: 20px;
`;
export {
    h as
    default
};