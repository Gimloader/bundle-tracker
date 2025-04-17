function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("fz2C7", (function(t, r) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return g
    }));
    var o = n("hxEiv"),
        i = n("gHmyG"),
        a = n("fywoC"),
        l = n("3uz2P"),
        u = n("b1oE9"),
        c = n("iROck"),
        d = n("iMOcM"),
        f = n("c8JAE"),
        p = n("bhRUa");
    var g = () => {
        const [e, t] = (0, d.useBoolean)(!1), [n, r] = a.useState(null), [s, g] = a.useState(""), {
            id: h
        } = (0, l.useParams)();
        return a.useEffect((() => {
            (0, d.request)({
                url: `/api/games/fetch/${h}`,
                success: e => {
                    r(e.kit), g(e.creator.name)
                },
                error: () => (0, c.NavigateTo)(u.HOMEPAGE)
            })
        }), []), n ? e ? (0, o.jsx)(p.default, {
            questions: n.questions
        }) : (0, o.jsx)(f.default, {
            title: n.title,
            image: n.gif,
            creator: s,
            numberOfQuestions: n.questions.length,
            setToPreview: t
        }) : (0, o.jsx)("div", {
            className: "maxAll flex-center",
            style: {
                background: "#303f9f"
            },
            children: (0, o.jsx)(i.default, {
                size: "large"
            })
        })
    }
})), n.register("iROck", (function(t, r) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var s = n("bd8je");
    const o = e => {
        s.history.push(e)
    }
})), n.register("c8JAE", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var s = n("hxEiv"),
        o = n("fC6cp");
    n("fywoC");
    var i = n("2FDaO"),
        a = n("46bRO"),
        l = n("lKmIF"),
        u = n("69SUA"),
        c = n("aQuqp"),
        d = n("cO2Su"),
        f = n("iMOcM"),
        p = n("fK8ya");
    let g, h, x, b, m, v = e => e;
    var y = e => (0, s.jsx)(w, {
        children: (0, s.jsxs)(j, {
            children: [(0, s.jsx)(p.default, {
                size: 92,
                blockModalOpen: !0,
                image: e.image,
                style: {
                    cursor: "default"
                }
            }), (0, s.jsx)(k, {
                children: e.title
            }), (0, s.jsx)(F, {
                children: e.creator
            }), (0, s.jsx)(o.default, {}), 0 === e.numberOfQuestions ? (0, s.jsx)("div", {
                style: {
                    fontSize: 18
                },
                children: "This kit cannot be practiced as it does not contain any questions."
            }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(c.default, {
                    customFontWeight: u.FontWeights.Bold,
                    type: "success",
                    size: "large",
                    onClick: e.setToPreview,
                    ariaLabel: "Practice",
                    children: "Practice"
                }), (0, s.jsxs)(C, {
                    children: [(0, s.jsxs)("div", {
                        children: [e.numberOfQuestions, " ", (0, f.plural)("question", e.numberOfQuestions)]
                    }), (0, s.jsx)("div", {
                        style: {
                            margin: "0px 12px"
                        },
                        className: "flex",
                        children: (0, s.jsx)("i", {
                            className: "fas fa-circle",
                            style: {
                                fontSize: 10
                            }
                        })
                    }), (0, s.jsxs)("div", {
                        children: ["Powered by ", a.COMPANY_NAME]
                    })]
                })]
            })]
        })
    });
    const w = i.default.div.attrs({
            className: "flex-center scroll-y maxAll"
        })(g || (g = v`
  background: #303f9f;
  color: ${0};
  font-family: ${0};
`), l.default.Black, u.Fonts.SFPro),
        j = (0, i.default)(d.default).attrs({
            className: "flex-center flex-column animated fadeIn"
        })(h || (h = v`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`)),
        k = i.default.div(x || (x = v`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${0};
  text-align: center;
`), u.FontWeights.UltraBold),
        F = i.default.div(b || (b = v`
  font-size: 24px;
  margin-top: -4px;
`)),
        C = i.default.div.attrs({
            className: "flex vc"
        })(m || (m = v`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`))
})), n.register("aQuqp", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var s = n("hxEiv"),
        o = n("6edaj"),
        i = n("fywoC"),
        a = n("2FDaO"),
        l = n("69SUA"),
        u = n("8UJqa");
    let c;
    var d = e => {
        const t = e.size || "default",
            n = i.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            r = i.useMemo((() => (0, o.darken)(.1, n)), [n]),
            a = i.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            u = i.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            c = i.useMemo((() => {
                const n = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${n} ${e.customHorizontalPadding}px` : "small" === t ? `${n} 24px` : "default" === t ? `${n} 28px` : `${n} 42px`
            }), [t, e.customHorizontalPadding]),
            d = i.useMemo((() => "small" === t ? 41 : 49), [t]),
            p = i.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? l.FontWeights.Bold : l.FontWeights.Normal), [e.customFontWeight, t]),
            g = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, s.jsx)(f, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: d
            }, e.style || {}),
            children: (0, s.jsxs)("button", {
                className: "btn-pushable",
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : g,
                onPointerDown: e.usePointerDownEvent ? g : void 0,
                style: {
                    cursor: e.disabled ? "not-allowed" : "pointer",
                    width: e.block ? "100%" : "auto"
                },
                children: [(0, s.jsx)("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: u
                    }
                }), (0, s.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: r,
                        borderRadius: u
                    }
                }), (0, s.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: n,
                        fontSize: a,
                        borderRadius: u,
                        padding: c,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    };
    const f = a.default.div.attrs({
        className: "flex"
    })(c || (c = (e => e)`
  align-items: flex-end;

  .btn-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    transition: filter 250ms;
  }
  .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .btn-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.25s;
  }
  .btn-front {
    display: block;
    position: relative;
    color: ${0};
    will-change: transform;
    transform: translateY(-4px);
    transition: background 0.25s, transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    user-select: none;
  }
  .btn-pushable:hover {
    filter: brightness(110%);
  }
  .btn-pushable:hover .btn-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .btn-pushable:hover .btn-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`), u.default.White)
})), n.register("8UJqa", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    }
})), n.register("cO2Su", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var s = n("hxEiv");
    n("fywoC");
    var o = n("2FDaO"),
        i = n("lKmIF");
    let a;
    var l = e => (0, s.jsx)(u, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const u = o.default.div(a || (a = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), n.register("fK8ya", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var s = n("hxEiv"),
        o = n("fywoC"),
        i = n("2FDaO"),
        a = n("fBuQJ"),
        l = n("lKmIF"),
        u = n("1djzF");
    let c;
    const d = i.default.img.attrs((e => ({
        src: e.image
    })))(c || (c = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var f = e => {
        const [t, n] = o.useState(!1);
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || n(!0)
                }
            }), (0, s.jsx)(a.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), n(!1)
                },
                footer: null,
                closable: !1,
                children: (0, s.jsx)("img", {
                    src: (0, u.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), n.register("1djzF", (function(t, n) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return r
    }));
    const r = e => {
            const t = s(e);
            return t ? e.includes("/video/upload") ? `https://${o}/video/upload/${t}` : `https://${o}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        s = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${a}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const n = t[t.length - 2],
                r = t[t.length - 1];
            return n && r && n.startsWith("v") ? `${n}/${r}` : null
        },
        o = "media.gimkit.com",
        i = "res.cloudinary.com",
        a = "gimkit-production",
        l = [o, i]
})), n.register("fgoFz", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var s = n("hxEiv"),
        o = n("fywoC");
    const i = o.lazy((() => n("h3n1W")));
    var a = e => (0, s.jsx)(o.Suspense, {
        fallback: e.fallback || null,
        children: (0, s.jsx)(i, {
            latex: e.latex
        })
    })
})), n.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + n("ihc6Q").resolve("8pe9D")), import("./" + n("ihc6Q").resolve("5OCdz"))]).then((() => n("9YSp3")))
})), n.register("56tQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var s = n("fywoC"),
        o = n("3KQc0"),
        i = n("9iNNJ");
    var a = (e, t) => {
        const [n, r] = s.useState((() => {
            var n, r;
            const s = e && "current" in e ? e.current : e;
            return s ? [s.offsetWidth, s.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), n.register("3KQc0", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var s = n("6rvT3"),
        o = n("9iNNJ"),
        i = n("3Yjty"),
        a = n("f1PHW");
    let l;
    const u = () => l || (l = function() {
        const e = new Map,
            t = new(0, s.default)((0, a.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var s;
                        null === (s = e.get(t[r].target)) || void 0 === s || s(t[r], n)
                    }
            })));
        return {
            observer: t,
            subscribe(n, r) {
                t.observe(n), e.set(n, r)
            },
            unsubscribe(n) {
                t.unobserve(n), e.delete(n)
            }
        }
    }());
    var c = function(e, t) {
        const n = u(),
            r = (0, i.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const s = e && "current" in e ? e.current : e;
            if (s) return n.subscribe(s, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(s)
            }
        }), [e, n, r]), n.observer
    }
})), n.register("9iNNJ", (function(r, s) {
    e(r.exports, "default", (function() {
        return o
    }));
    var o = t(n("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), n.register("3Yjty", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var s = n("fywoC");
    var o = e => {
        const t = s.useRef(e);
        return s.useEffect((() => {
            t.current = e
        })), t
    }
})), n.register("f1PHW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = function(e) {
        var t = [],
            n = null,
            r = function() {
                for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
                t = s, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
}));