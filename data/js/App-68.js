import {
    y as $,
    n as R,
    r as g,
    j as e,
    T as u,
    d as i,
    U as l
} from "./_index.js";
import {
    u as T
} from "./useInfiniteQuery.js";
import {
    C
} from "./App-42.js";
import {
    M as E
} from "./MapCard.js";
import {
    C as b
} from "./CircularProgress.js";
import "./useQuery.js";
import "./AnimatedBackground-1.js";
import "./App-4.js";
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
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./App-5.js";
import "./Centered.js";
import "./index-24.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
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
import "./PublishedDate.js";
import "./getCloudinaryUrl.js";
import "./clsx.m.js";
const I = o => T({
        queryKey: ["creative-profile-pages", o],
        enabled: !!o,
        staleTime: 6e4,
        refetchOnWindowFocus: !1,
        retry: !1,
        queryFn: ({
            pageParam: n
        }) => $({
            url: `/api/created-map/listing/profile/${encodeURIComponent(o)}${n?`?cursor=${encodeURIComponent(n)}`:""}`
        }),
        getNextPageParam: n => n.nextCursor || void 0
    }),
    Ge = () => {
        const {
            id: o
        } = R(), n = o != null && o.startsWith("@") ? o.slice(1) : void 0, {
            data: t,
            isLoading: P,
            refetch: k,
            fetchNextPage: m,
            hasNextPage: s,
            isFetching: c,
            isFetchingNextPage: z,
            isError: d
        } = I(n), h = g.useRef(null), x = t == null ? void 0 : t.pages[0], f = g.useMemo(() => {
            const r = new Map;
            return t == null || t.pages.forEach(p => p.maps.forEach(a => {
                r.has(a._id) || r.set(a._id, a)
            })), Array.from(r.values())
        }, [t]);
        return g.useEffect(() => {
            const r = h.current;
            if (!r || !s || c || d || typeof IntersectionObserver > "u") return;
            let p = !1;
            const a = new IntersectionObserver(([F]) => {
                F.isIntersecting && !p && (p = !0, m({
                    cancelRefetch: !1
                }))
            }, {
                rootMargin: "400px"
            });
            return a.observe(r), () => a.disconnect()
        }, [s, c, d, m, t == null ? void 0 : t.pages.length]), e.jsx(M, {
            children: n && P ? e.jsx(G, {
                role: "status",
                "aria-label": "Loading creator profile",
                children: e.jsx(b, {
                    style: {
                        color: "white"
                    }
                })
            }) : x ? e.jsxs(e.Fragment, {
                children: [e.jsx(u, {
                    title: `@${x.username} | Gimkit Creative`,
                    override: !0
                }), e.jsx(O, {
                    children: e.jsxs(S, {
                        children: ["@", x.username]
                    })
                }), e.jsxs(N, {
                    children: [e.jsx(U, {
                        children: "Maps"
                    }), f.length ? e.jsx(A, {
                        children: f.map(r => e.jsx("li", {
                            children: e.jsx(E, {
                                map: r
                            })
                        }, r._id))
                    }) : s ? null : e.jsxs(v, {
                        children: [e.jsx(w, {
                            src: "/client/img/creative/banner.png",
                            alt: ""
                        }), e.jsx(y, {
                            children: "This creator hasn't published any maps yet. Check back soon!"
                        })]
                    }), s ? e.jsx(H, {
                        ref: h,
                        children: z ? e.jsx("div", {
                            role: "status",
                            "aria-label": "Loading more maps",
                            children: e.jsx(b, {
                                size: 24,
                                style: {
                                    color: "white"
                                }
                            })
                        }) : e.jsx(j, {
                            disabled: c,
                            onClick: () => m({
                                cancelRefetch: !1
                            }),
                            children: d ? "Try again" : "Load more"
                        })
                    }) : null]
                })]
            }) : e.jsxs(L, {
                children: [e.jsx(u, {
                    title: "Profile unavailable | Gimkit Creative",
                    override: !0
                }), e.jsxs(v, {
                    children: [e.jsx(w, {
                        src: "/client/img/creative/banner.png",
                        alt: ""
                    }), e.jsx(q, {
                        children: "Profile unavailable"
                    }), e.jsx(y, {
                        children: "We couldn't load this creator. Their username may have changed, or the profile may no longer be available."
                    }), n ? e.jsx(j, {
                        onClick: () => k(),
                        children: "Try again"
                    }) : null]
                })]
            })
        })
    },
    M = i.div`
  width: 90%;
  max-width: 1160px;
  margin: 32px auto 56px;
`,
    O = i.header`
  display: flex;
  justify-content: center;
  padding: 20px 14px 36px;
  margin-bottom: 12px;
`,
    S = i.h1`
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
  font-family: ${l.FugazOne};
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
    q = i.h1`
  font-family: ${l.FugazOne};
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
  overflow-wrap: anywhere;
`,
    L = i(C)`
  box-sizing: border-box;
  max-width: 700px;
  margin: 48px auto;
  @media (max-width: 600px) {
    margin: 24px auto;
    padding: 22px;
  }
`,
    v = i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0 28px;
  text-align: center;
`,
    w = i.img`
  display: block;
  width: 280px;
  max-width: 80%;
  height: auto;
  margin-bottom: 8px;
`,
    y = i.p`
  max-width: 440px;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${l.SFPro};
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`,
    N = i(C)`
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 22px;
  }
`,
    U = i.h2`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: ${l.FugazOne};
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
    A = i.ul`
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
    G = i.div`
  display: grid;
  place-items: center;
  min-height: 220px;
`,
    j = i.button`
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
    H = i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  margin-top: 20px;
`;
export {
    Ge as
    default
};