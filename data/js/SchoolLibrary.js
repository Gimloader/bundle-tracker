function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("a6ojy", (function(a, l) {
    var s;
    s = a.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), t(a.exports, "LIBRARY_CACHE_KEY", (function() {
        return w
    })), t(a.exports, "default", (function() {
        return C
    }));
    var r = i("hxEiv"),
        n = i("2FDaO"),
        o = i("sgWtV"),
        d = i("6KLxl"),
        c = i("iMOcM"),
        f = i("fywoC"),
        u = i("1HsHH"),
        x = i("69SUA"),
        h = i("lKmIF"),
        m = i("2nCEo"),
        g = i("gHmyG");
    let p, v, b, y, j = e => e;
    const w = "GIMKIT_LIBRARY_CACHE";
    var C = () => {
        const [t, i] = e(f).useState(!0), [a, l] = e(f).useState([]), [s, n] = e(f).useState(!0), [x, h] = e(f).useState(0);
        e(f).useEffect((() => {
            p()
        }), []);
        const p = () => {
                i(!0), (0, c.request)({
                    cacheKey: w,
                    url: `/api/get-school-library/${x}`,
                    method: "GET",
                    success: e => {
                        l([...a, ...e.games]), n(e.hasMore), h(e.newPage)
                    },
                    error: () => (0, o.throwError)({
                        title: "Error fetching Kits"
                    }),
                    both: () => i(!1)
                })
            },
            v = (() => {
                const t = new Map;
                return a.forEach((i => {
                    const a = e(m)(i.createdDate).format("MMMM YYYY").toString();
                    t[a] ? t[a].push(i) : t[a] = [i]
                })), t
            })();
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.Title, {
                title: "My School"
            }), (0, r.jsx)("div", {
                className: "maxHeight",
                children: t && !a.length ? (0, r.jsx)("div", {
                    className: "maxAll flex-center",
                    children: (0, r.jsx)(g.default, {
                        size: "large"
                    })
                }) : a.length ? (0, r.jsx)("div", {
                    children: (0, r.jsx)(u.default, {
                        dataLength: a.length,
                        hasMore: s,
                        style: {
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            overflow: "visible"
                        },
                        next: p,
                        loader: null,
                        children: Object.keys(v).map((e => (0, r.jsxs)(N, {
                            children: [(0, r.jsxs)(k, {
                                children: [(0, r.jsx)(O, {
                                    children: e
                                }), (0, r.jsx)(M, {})]
                            }), v[e].map((e => (0, r.jsx)(d.default, {
                                id: e._id,
                                title: e.title,
                                gif: e.gif,
                                numberOfQuestions: e.questions,
                                creator: e.creator,
                                redirectOnImageClick: !0,
                                size: "small"
                            }, e._id)))]
                        }, e)))
                    })
                }) : (0, r.jsxs)("div", {
                    className: "maxAll flex-center flex-column",
                    children: [(0, r.jsx)("img", {
                        src: "/client/img/dashboard/bookshelf.svg",
                        style: {
                            height: 80,
                            marginBottom: 9
                        }
                    }), (0, r.jsxs)("div", {
                        style: {
                            fontSize: 16,
                            textAlign: "center"
                        },
                        children: ["Find kits made by other educators at your school (", (0, c.getUser)().schoolName, "). ", (0, r.jsx)("br", {}), " Once they make their kits, you'll see them here."]
                    })]
                })
            })]
        })
    };
    const k = n.default.div.attrs({
            className: "flex vc maxWidth"
        })(p || (p = j`
  margin-bottom: 20px;
`)),
        O = n.default.div(v || (v = j`
  font-weight: ${0};
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`), x.FontWeights.Bold),
        M = n.default.div.attrs({
            className: "maxWidth"
        })(b || (b = j`
  height: 1px;
  background: ${0};
`), h.default.BorderGray),
        N = n.default.div.attrs({
            className: "maxWidth"
        })(y || (y = j`
  margin-bottom: 20px;
`))
})), i.register("6KLxl", (function(a, l) {
    t(a.exports, "default", (function() {
        return R
    }));
    var s = i("hxEiv");
    i("fywoC");
    var r = i("7ECC6"),
        n = i("fC6cp"),
        o = i("69SUA"),
        d = i("fK8ya"),
        c = i("2FDaO"),
        f = i("iMOcM"),
        u = i("lKmIF"),
        x = i("kyvf1"),
        h = i("iROck"),
        m = i("2nCEo");
    let g, p, v, b, y, j, w, C, k, O, M, N = e => e;
    const E = (0, c.default)(x.default).attrs({
            className: "maxWidth"
        })(g || (g = N`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        S = (0, c.default)(r.default)(p || (p = N`
  background-color: ${0};
  border-radius: 7px;
  border: 2px solid ${0};
  font-family: ${0};
`), u.default.White, u.default.BorderGray, o.Fonts.SFPro),
        F = c.default.div.attrs({
            className: "flex-column"
        })(v || (v = N`
  padding: 20px;
  width: calc(100% - ${0}px);
`), 178),
        z = c.default.div(b || (b = N`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        W = c.default.div(y || (y = N`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${0};
`), o.FontWeights.Bold),
        $ = c.default.div(j || (j = N`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        _ = c.default.div(w || (w = N`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        A = c.default.div(C || (C = N`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${0};
`), o.Fonts.SFPro),
        H = c.default.i(k || (k = N`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        K = (0, c.default)(H).attrs({
            className: "fad fa-list"
        })(O || (O = N``)),
        I = (0, c.default)(H).attrs({
            className: "fad fa-calendar-alt"
        })(M || (M = N``));
    var R = t => {
        const i = "normal" === t.size;
        return (0, s.jsx)(E, {
            to: t.blockRedirect ? void 0 : `/view/${t.id}`,
            children: (0, s.jsx)(S, {
                className: "maxWidth",
                onMouseEnter: t.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !t.blockHoverable,
                style: {
                    backgroundColor: t.selected ? "#eeeeee" : u.default.White
                },
                children: (0, s.jsxs)("div", {
                    className: "flex maxWidth",
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)(d.default, {
                            image: t.gif,
                            size: i ? 178 : 148,
                            onClick: t.redirectOnImageClick && (() => t.blockRedirect ? null : (0, h.NavigateTo)(`/view/${t.id}`))
                        })
                    }), (0, s.jsx)(F, {
                        children: (0, s.jsxs)(z, {
                            children: [(0, s.jsx)(W, {
                                style: {
                                    fontSize: i ? 32 : 23
                                },
                                children: t.title
                            }), t.creator && (0, s.jsx)($, {
                                style: {
                                    fontSize: i ? 18 : 16
                                },
                                children: (0, f.capitalizeFirstLetter)(t.creator)
                            }), (0, s.jsx)(n.default, {
                                style: {
                                    margin: "16px 0px 18px 0px"
                                }
                            }), !!t.numberOfQuestions && (0, s.jsxs)(_, {
                                children: [(0, s.jsx)(K, {}), (0, s.jsxs)("span", {
                                    children: [t.numberOfQuestions ? t.numberOfQuestions : "", " ", t.numberOfQuestions ? (0, f.plural)("question", t.numberOfQuestions) : ""]
                                })]
                            }), t.dateCreated && i && (0, s.jsxs)(A, {
                                children: [(0, s.jsx)(I, {}), (0, s.jsxs)("span", {
                                    children: ["Created ", e(m)(t.dateCreated).fromNow()]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    }
}));