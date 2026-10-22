const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/NotionContent.js", "assets/rolldown-runtime.js", "assets/dist-1.js", "assets/utils.js", "assets/react-1.js", "assets/modal-1.js", "assets/assertThisInitialized.js", "assets/Compact.js", "assets/color.js", "assets/ContextIsolator.js", "assets/dist-2.js", "assets/wrapNativeSuper.js", "assets/InfoCircleFilled.js", "assets/compact-item.js", "assets/useLocale.js", "assets/useCSSVarCls.js", "assets/pickAttrs.js", "assets/button-1.js", "assets/PurePanel.js", "assets/Company.js", "assets/Paths.js", "assets/decorate.js", "assets/jsx-runtime.js", "assets/_index.js", "assets/dist-3.js", "assets/spin.js", "assets/QueryClientProvider.js", "assets/queryClient.js", "assets/infiniteQueryBehavior.js", "assets/index-Tu04tXLf.css", "assets/toPropertyKey.js", "assets/typeof.js", "assets/NotionContent-DJb2r84x.css"]))) => i.map(i => d[i]);
import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    O as r,
    Q as i,
    _ as a,
    r as o,
    z as s
} from "./utils.js";
import {
    t as c
} from "./react-1.js";
import {
    a as l,
    r as u
} from "./InfoCircleFilled.js";
import {
    a as d,
    t as f
} from "./modal-1.js";
import {
    t as p
} from "./button-1.js";
import {
    t as m
} from "./space.js";
import {
    n as h
} from "./Company.js";
import {
    t as g
} from "./jsx-runtime.js";
import {
    t as _
} from "./noop.js";
import {
    t as v
} from "./useWarningOnMountInDevelopment.js";
import {
    a as y,
    c as b,
    h as x,
    l as S,
    s as C,
    v as w,
    y as T
} from "./_index.js";
import {
    t as E
} from "./FontAwesomeIcon.js";
import {
    t as D
} from "./lib-1.js";
import {
    t as O
} from "./colors-1.js";
var k = e(c());

function A(e, t) {
    t === void 0 && (t = null);
    var n = (0, k.useState)(o()),
        r = n[0],
        i = n[1];
    v(`useLocalstorage is deprecated, it will be removed in the next major release. Please use useLocalstorageState instead.`);

    function a() {
        var e = o();
        (e === null || e === `null`) && c(t)
    }

    function o() {
        if (typeof localStorage > `u`) return null;
        var t = localStorage.getItem(e) || `null`;
        try {
            return JSON.parse(t)
        } catch (e) {
            console.error(e)
        }
        return t
    }

    function s(t) {
        return typeof localStorage > `u` ? null : localStorage.setItem(e, JSON.stringify(t))
    }
    var c = (0, k.useCallback)(function(e) {
            i(e), s(e)
        }, []),
        l = (0, k.useCallback)(function(t) {
            t.storageArea === localStorage && t.key === e && i(t.newValue)
        }, []),
        u = (0, k.useCallback)(function() {
            if (c(null), typeof localStorage > `u`) return !1;
            localStorage.removeItem(e)
        }, [e]);
    return (0, k.useEffect)(function() {
        a()
    }, []), (0, k.useEffect)(function() {
        return typeof window < `u` ? (window.addEventListener(`storage`, l), function() {
            window.removeEventListener(`storage`, l)
        }) : (console.warn(`useLocalstorage: window is undefined.`), _)
    }, []), Object.assign([r, c, u], {
        value: r,
        remove: u,
        set: c
    })
}
var j = e(D()),
    M = e(i()),
    N = g(),
    P = (0, j.default)(() => x(() => import(`./NotionContent.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))),
    F = () => (0, N.jsx)(d, {
        active: !0,
        title: !1,
        paragraph: {
            rows: 14
        },
        style: {
            padding: 20
        }
    }),
    I = e => {
        let [t, n] = k.useState(), {
            item: {
                notionPageId: r,
                publishDate: i
            }
        } = e;
        y(() => {
            P.preload()
        }), k.useEffect(() => {
            !t && r && s({
                url: `/api/content/${r}`,
                cacheKey: `NOTION_CONTENT`,
                success: e => n(e)
            })
        }, [r, t]);
        let a = () => {
            var e, n, i;
            let a = r.replace(/-/g, ``),
                o = Object.keys(t == null ? void 0 : t.block).find(e => e.replace(/-/g, ``) === a);
            if (!o) return {
                title: ``,
                coverImage: null
            };
            let s = t == null || (e = t.block[o]) == null || (e = e.value) == null ? void 0 : e.value;
            return console.log(s), {
                title: (s == null || (n = s.properties) == null || (n = n.title) == null || (n = n[0]) == null ? void 0 : n[0]) ?? null,
                coverImage: (s == null || (i = s.format) == null ? void 0 : i.page_cover) ?? null
            }
        };
        return (0, N.jsx)(L, {
            children: (() => {
                if (!t) return (0, N.jsx)(F, {});
                let {
                    title: n,
                    coverImage: r
                } = a();
                return (0, N.jsxs)(k.Suspense, {
                    fallback: (0, N.jsx)(F, {}),
                    children: [r ? (0, N.jsx)(R, {
                        draggable: !1,
                        src: r
                    }) : null, (0, N.jsxs)(z, {
                        children: [(0, N.jsxs)(B, {
                            style: {
                                marginTop: e.isFirstItem && !r ? 30 : 0
                            },
                            children: [(0, N.jsx)(V, {
                                children: n
                            }), (0, N.jsxs)(H, {
                                children: [(0, N.jsx)(E, {
                                    name: `far fa-calendar-alt`,
                                    style: {
                                        fontSize: `0.8em`,
                                        marginRight: 5
                                    }
                                }), o(M.default.unix(i).fromNow())]
                            })]
                        }), (0, N.jsx)(P, {
                            content: t
                        })]
                    })]
                })
            })()
        })
    },
    L = S.div.attrs({
        className: `maxWidth`
    })``,
    R = S.img.attrs({
        className: `maxWidth`
    })`
  margin-bottom: 25px;
`,
    z = S.div.attrs({
        className: `maxWidth`
    })`
  padding: 0px 20px;
  font-family: ${b.SFPro};
`,
    B = S.div.attrs({
        className: `maxWidth flex between vc`
    })`
  line-height: 1;
  margin-bottom: 20px;
`,
    V = S.div`
  font-size: 28px;
  font-weight: ${C.Bold};
`,
    H = S.div.attrs({
        className: `flex vc`
    })`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`,
    U = e => (0, N.jsxs)(W, {
        children: [(0, N.jsxs)(G, {
            children: [(0, N.jsxs)(K, {
                children: [h, ` News`]
            }), (0, N.jsxs)(q, {
                children: [`Your source for all things `, h, `!`]
            })]
        }), (0, N.jsx)(`div`, {
            children: (0, N.jsx)(l, {
                theme: {
                    algorithm: w.darkAlgorithm
                },
                children: (0, N.jsx)(p, {
                    onClick: e.close,
                    type: `text`,
                    icon: (0, N.jsx)(u, {})
                })
            })
        })]
    }),
    W = S.div.attrs({
        className: `maxWidth flex vc between`
    })`
  color: ${O.White};
  padding: 20px;
  background: #730aad;
`,
    G = S.div``,
    K = S.div`
  font-size: 16px;
  font-weight: ${C.Bold};
`,
    q = S.div`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`,
    J = e => {
        let [i, o] = k.useState(!0), [s, c] = k.useState([]), [u, d] = A(`last-viewed-news`, 0), [h, g] = k.useState(!1), [_, v, b] = r(!0), x = k.useCallback(() => {
            g(!0)
        }, [g]), S = k.useCallback(() => {
            g(!1), e.onClose && e.onClose()
        }, [g, e.onClose]);
        return y(() => {
            t({
                url: `/api/news/fetch`,
                data: {
                    isStudent: a()
                },
                success: t => {
                    c(t);
                    let n = u ?? 0,
                        r = t[0];
                    r && (r && r.publishDate > n && e.allowAutoOpen && x(), d(r.publishDate))
                },
                error: t => {
                    e.open && n({
                        e: t,
                        default: {
                            title: `Error loading news`
                        }
                    })
                },
                both: () => {
                    o(!1)
                }
            })
        }), k.useEffect(() => {
            e.open && x()
        }, [e.open]), i ? null : (0, N.jsx)(l, {
            theme: {
                algorithm: w.defaultAlgorithm
            },
            children: (0, N.jsxs)(f, {
                open: h,
                onCancel: S,
                closable: !1,
                footer: null,
                width: 650,
                styles: {
                    content: {
                        padding: 0,
                        borderRadius: 10,
                        overflow: `hidden`
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
                children: [(0, N.jsx)(U, {
                    close: S
                }), s.length ? s.length !== 1 && _ ? (0, N.jsxs)(`div`, {
                    style: {
                        paddingBottom: 35
                    },
                    children: [(0, N.jsx)(I, {
                        item: s[0],
                        isFirstItem: !0
                    }), (0, N.jsx)(`div`, {
                        className: `maxWidth flex-center`,
                        style: {
                            marginTop: 30
                        },
                        children: (0, N.jsx)(p, {
                            shape: `round`,
                            onClick: b,
                            children: `View more news...`
                        })
                    })]
                }) : (0, N.jsx)(N.Fragment, {
                    children: (0, N.jsx)(m, {
                        className: `maxWidth`,
                        size: 30,
                        direction: `vertical`,
                        style: {
                            paddingBottom: 35
                        },
                        split: (0, N.jsx)(T, {
                            style: {
                                margin: 0
                            }
                        }),
                        children: s.map((e, t) => (0, N.jsx)(I, {
                            item: e,
                            isFirstItem: t === 0
                        }, e._id))
                    })
                }) : (0, N.jsx)(N.Fragment, {
                    children: (0, N.jsx)(`div`, {
                        className: `maxWidth flex-center`,
                        style: {
                            padding: 50,
                            fontSize: 16,
                            textAlign: `center`
                        },
                        children: `There currently is no news. Check back again later!`
                    })
                })]
            })
        })
    };
export {
    J as t
};