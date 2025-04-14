function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("55Mzo", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        c = r("iMOcM"),
        l = r("2FDaO"),
        s = r("69SUA"),
        u = r("lKmIF"),
        f = r("6S2ZN"),
        d = r("e1IKi"),
        p = r("sgWtV"),
        g = r("b1oE9"),
        h = r("lJSKF"),
        v = r("gHmyG"),
        m = r("3uz2P"),
        y = r("iROck"),
        x = r("cHCps");
    let b, w, C = e => e;
    const O = l.default.div(b || (b = C`
  height: 100%;
  display: flex;
  background: ${0};
  font-family: ${0};
  color: ${0};
`), (e => e.customBackgroundColor || u.default.Snow), s.Fonts.SFPro, u.default.Black);
    var j = () => {
        const [e, t] = i.useState(null), {
            id: r
        } = (0, m.useParams)();
        i.useEffect((() => {
            (0, c.request)({
                url: `/api/game-report/fetch/${r}`,
                method: "GET",
                success: e => {
                    t(e)
                },
                error: () => (0, p.throwError)({
                    title: "Failed to fetch report",
                    content: "Please try again or contact support",
                    onOk: () => (0, y.NavigateTo)(g.DASHBOARD)
                })
            })
        }), []);
        return (0, a.jsx)(k, {
            children: (0, a.jsxs)(O, {
                children: [(0, a.jsx)(x.default, {}), e ? (0, a.jsxs)("div", {
                    className: "maxAll flex",
                    style: {
                        flex: 1,
                        overflow: "hidden"
                    },
                    children: [(0, a.jsx)(f.default, {
                        gameReport: e
                    }), (0, a.jsx)(d.default, {
                        gameReport: e
                    })]
                }) : (0, a.jsx)("div", {
                    className: "flex-center maxAll",
                    children: (0, a.jsx)(v.default, {
                        size: "large"
                    })
                })]
            })
        })
    };
    const k = (0, l.default)(h.default)(w || (w = C`
  @media print {
    height: auto !important;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`))
})), r.register("6S2ZN", (function(n, o) {
    e(n.exports, "default", (function() {
        return $
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        c = r("2FDaO"),
        l = r("lKmIF"),
        s = r("69SUA"),
        u = r("bfV0l"),
        f = r("fC6cp"),
        d = r("4h1cc"),
        p = r("iMOcM"),
        g = r("fK8ya"),
        h = r("lpEVe"),
        v = r("9GZDH"),
        m = r("hq4ol"),
        y = (p = r("iMOcM"), r("kqIX6")),
        x = r("exbzb"),
        b = r("dp9cG"),
        w = r("2nCEo"),
        C = r("kyvf1"),
        O = r("aYjbz"),
        j = r("hFybW");
    let k, S, E, M = e => e;
    const z = c.default.div.attrs({
            className: "scroll-y"
        })(k || (k = M`
  width: 390px;
  background: ${0};
  border-right: 1px solid ${0};
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`), l.default.White, l.default.BorderGray),
        P = c.default.div(S || (S = M`
  font-weight: ${0};
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`), s.FontWeights.UltraBold),
        N = c.default.div(E || (E = M`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`));
    var $ = (0, h.observer)((e => {
        const {
            gameReport: r
        } = e, {
            navigation: n
        } = i.useContext(v.default), o = r.expiration ? t(w)(r.expiration) : t(w)((0, p.dateFromObjectId)(r._id)).add(546, "days"), c = o.diff(t(w)((0, p.dateFromObjectId)(r._id)), "days"), s = !t(w)().isAfter(o) && Math.abs(t(w)().diff(o, "months")) < 3;
        return (0, a.jsxs)(z, {
            children: [(0, a.jsx)(p.Title, {
                title: `Report - ${r.game.title} - ${r.players.length} ${(0,p.plural)("participant",r.players.length)} - ${t(w)(r.dateCreated).format("L")}`
            }), (0, a.jsx)(O.default, {}), (0, a.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    padding: 15
                },
                children: [(0, a.jsx)(g.default, {
                    size: 150,
                    image: r.game.gif,
                    style: {
                        marginTop: 27
                    }
                }), (0, a.jsx)(C.default, {
                    style: {
                        color: l.default.Black,
                        textDecoration: "none"
                    },
                    to: `/view/${r.game._id}`,
                    children: (0, a.jsx)(P, {
                        children: r.game.title
                    })
                }), (0, a.jsxs)(N, {
                    children: [r.players.length + " " + (0, p.plural)("participant", r.players.length), " ", "-", " ", r.mapAssignment ? (0, a.jsx)(C.default, {
                        to: `/assignment/${r.mapAssignment}`,
                        children: "Assignment"
                    }) : t(w)(r.dateCreated).format("MMMM Do [at] LT")]
                })]
            }), s ? (0, a.jsx)(u.default, {
                banner: !0,
                message: `${c>=365?"Reports are automatically deleted after 1.5 years. ":""}This report will be deleted on ${o.format("MMMM Do")}.`
            }) : null, (0, a.jsx)(f.default, {
                style: {
                    marginBottom: 10
                }
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(j.default, {
                    icon: x.default,
                    onClick: () => n.currentTab = m.default.breakdown,
                    title: "Question Breakdown",
                    selected: n.currentTab === m.default.breakdown
                }, "breakdown"), (0, a.jsx)(j.default, {
                    icon: b.default,
                    onClick: () => n.currentTab = m.default.overview,
                    title: "Student Overview",
                    selected: n.currentTab === m.default.overview
                }, "studentOverview"), (0, a.jsx)(j.default, {
                    icon: y.default,
                    onClick: () => n.currentTab = m.default.general,
                    title: "Quick Stats",
                    selected: n.currentTab === m.default.general
                }, "overview"), (0, a.jsx)(f.default, {}), (0, a.jsx)(d.default, {
                    gameReport: r
                })]
            })]
        })
    }))
})), r.register("4h1cc", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("lpEVe"),
        c = r("9GZDH"),
        l = r("hq4ol"),
        s = r("hFybW");
    const u = (e, t) => {
        var r = e.name.toLowerCase(),
            n = t.name.toLowerCase();
        return r < n ? -1 : r > n ? 1 : 0
    };
    var f = (0, i.observer)((e => {
        const {
            gameReport: t
        } = e, {
            navigation: r
        } = a.useContext(c.default);
        return (0, o.jsx)(o.Fragment, {
            children: t.players.sort(u).map(((e, t) => (0, o.jsx)(s.default, {
                icon: null,
                title: e.name,
                onClick: () => {
                    r.currentTab = l.default.player, r.currentPlayer = t
                },
                selected: r.currentTab === l.default.player && r.currentPlayer === t
            }, t)))
        })
    }))
})), r.register("9GZDH", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("l7upP");
    var i = o.createContext(a.default)
})), r.register("l7upP", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        navigation: new(0, r("aLbn8").default)
    }
})), r.register("aLbn8", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("kHqmx"),
        a = r("4MuSt"),
        i = r("hq4ol");
    class c {
        constructor() {
            this.currentTab = i.default.breakdown, this.currentPlayer = null, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], c.prototype, "currentTab", void 0), (0, o.__decorate)([a.observable], c.prototype, "currentPlayer", void 0);
    var l = c
})), r.register("hq4ol", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = n || (n = {})).general = "general", o.breakdown = "breakdown", o.player = "player", o.overview = "overview";
    var a = n
})), r.register("hFybW", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        c = r("lKmIF"),
        l = r("69SUA");
    let s, u, f, d = e => e;
    const p = "#1890FF",
        g = i.default.div(s || (s = d`
  width: 100%;
  box-sizing: border-box;
  font-family: ${0};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${0}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${0};
  color: ${0};
  ${0}
  transition: all 0.25s;
  &:hover {
    color: ${0};
  }
`), l.Fonts.SFPro, 14, (e => e.selected && !e.blockBackground ? "#E5F7FE" : c.default.White), (e => e.selected ? p : "rgba(0,0,0,.65)"), (e => e.selected && !e.blockStripe && "border-right: 3px solid " + p + ";"), p),
        h = i.default.div.attrs({
            className: "flex vc maxWidth"
        })(u || (u = d``)),
        v = i.default.div(f || (f = d``));
    class m extends a.Component {
        render() {
            const {
                title: e,
                onClick: t,
                selected: r,
                blockStripe: n,
                blockBackground: a
            } = this.props, i = this.props.icon;
            return (0, o.jsxs)(g, {
                selected: r,
                blockStripe: n,
                blockBackground: a,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [i ? (0, o.jsx)(i, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? "twoTone" : "outlined",
                    twoToneColor: this.props.customIconColor || ""
                }) : null, (0, o.jsxs)(h, {
                    children: [(0, o.jsx)(v, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    }
    var y = m
})), r.register("fK8ya", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        c = r("fBuQJ"),
        l = r("lKmIF"),
        s = r("1djzF");
    let u;
    const f = i.default.img.attrs((e => ({
        src: e.image
    })))(u || (u = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var d = e => {
        const [t, r] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(f, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(c.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
                },
                footer: null,
                closable: !1,
                children: (0, o.jsx)("img", {
                    src: (0, s.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), r.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return n
    }));
    const n = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${c}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        c = "gimkit-production",
        l = [a, i]
})), r.register("kqIX6", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("hVBUp"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ProjectOutlined";
    var s = a.forwardRef(l)
})), r.register("hVBUp", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
                }
            }]
        },
        name: "project",
        theme: "outlined"
    }
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8N8s4"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var s = a.forwardRef(l)
})), r.register("8N8s4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }]
        },
        name: "question-circle",
        theme: "outlined"
    }
})), r.register("dp9cG", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("fiKWv"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "TeamOutlined";
    var s = a.forwardRef(l)
})), r.register("fiKWv", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"
                }
            }]
        },
        name: "team",
        theme: "outlined"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("beXRF");
    r("fywoC");
    var i = e => e.external || !e.to ? (0, o.jsx)("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: t => {
            e.onClick && "Enter" === t.key && (t.preventDefault(), e.onClick())
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, o.jsx)(a.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("e1IKi", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("9cMG7"),
        c = r("9vWfB"),
        l = r("9WFo8"),
        s = r("h7FdC"),
        u = r("9GZDH"),
        f = r("lpEVe"),
        d = r("hq4ol"),
        p = r("aYjbz"),
        g = r("2FDaO");
    let h;
    var v = (0, f.observer)((e => {
        const {
            navigation: t
        } = a.useContext(u.default), {
            gameReport: r
        } = e, {
            currentTab: n,
            currentPlayer: f
        } = t;
        return (0, o.jsxs)(m, {
            children: [(0, o.jsx)(p.default, {}), n === d.default.general ? (0, o.jsx)(i.default, {
                gameReport: r
            }) : n === d.default.overview ? (0, o.jsx)(s.default, {
                gameReport: r
            }) : n === d.default.breakdown ? (0, o.jsx)(c.default, {
                gameReport: r
            }) : n === d.default.player && r.players[f] ? (0, o.jsx)(l.default, {
                player: r.players[f],
                questions: r.questions
            }) : null]
        }, `${n}-${f}`)
    }));
    const m = g.default.div.attrs({
        className: "maxWidth scroll-y"
    })(h || (h = (e => e)`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`))
})), r.register("9cMG7", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("iMOcM"),
        c = r("kThAA"),
        l = r("d3DbW"),
        s = r("92Suj"),
        u = r("eHkxo");
    var f = e => {
        const {
            gameReport: t
        } = e, r = a.useMemo((() => t.players.reduce(((e, t) => t.correctQuestionIds.length + e), 0)), [t.players.length]), n = a.useMemo((() => t.players.reduce(((e, t) => t.incorrectQuestionIds.length + e), 0)), [t.players.length]), f = a.useMemo((() => (0, i.calculateAccuracy)(r, n)), [r, n]);
        return (0, o.jsx)(u.default, {
            children: (0, o.jsxs)("div", {
                children: [(0, o.jsx)(l.default, {
                    title: "Quick Stats",
                    description: "The stats on how the game went down"
                }), (0, o.jsx)(s.default, {
                    header: "Questions Answered Correctly",
                    content: r,
                    contentColor: c.default.Green
                }), (0, o.jsx)(s.default, {
                    header: "Questions Answered Incorrectly",
                    content: n,
                    contentColor: c.default.Red
                }), (0, o.jsx)(s.default, {
                    header: "Accuracy",
                    content: `${f}%`,
                    contentColor: c.default.Blue
                })]
            })
        })
    }
})), r.register("9vWfB", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("3gvLM"),
        c = r("d3DbW"),
        l = r("eHkxo"),
        s = r("iMOcM"),
        u = r("cOqKD"),
        f = r("xSNQc");
    var d = e => {
        const {
            players: t,
            questions: r
        } = e.gameReport, n = a.useMemo((() => r.map((e => {
            let r = 0,
                n = 0;
            return t.forEach((t => {
                t.correctQuestionIds.forEach((t => {
                    t === e._id && r++
                })), t.incorrectQuestionIds.forEach((t => {
                    t === e._id && n++
                }))
            })), {
                question: e,
                resultData: {
                    correct: r,
                    incorrect: n,
                    accuracy: (0, s.calculateAccuracy)(r, n)
                }
            }
        }))), [t.length, r.length]).sort(((e, t) => e.resultData.accuracy > t.resultData.accuracy ? 1 : -1));
        return (0, o.jsxs)(l.default, {
            children: [(0, o.jsx)(c.default, {
                title: "Question Breakdown",
                description: "See which questions students have down or need help with",
                download: () => {
                    const t = u.unparse(n.map((e => {
                        var t, r;
                        return {
                            Question: null !== (r = null === (t = e.question) || void 0 === t ? void 0 : t.text) && void 0 !== r ? r : "Media Question",
                            "Correct Count": e.resultData.correct,
                            "Incorrect Count": e.resultData.incorrect,
                            Accuracy: e.resultData.accuracy + "%"
                        }
                    })));
                    (0, f.DownloadReportCSV)({
                        csv: t,
                        fileName: `${e.gameReport.game.title} Question Breakdown`
                    })
                }
            }), (0, o.jsx)("div", {
                children: n.map((e => (0, o.jsx)(i.default, {
                    question: e.question,
                    correct: e.resultData.correct,
                    incorrect: e.resultData.incorrect,
                    accuracy: e.resultData.accuracy
                }, e.question._id + "-breakdown")))
            })]
        })
    }
})), r.register("xSNQc", (function(t, r) {
    e(t.exports, "DownloadReportCSV", (function() {
        return n
    }));
    const n = e => {
        const t = new Blob([e.csv], {
                type: "text/csv"
            }),
            r = URL.createObjectURL(t),
            n = document.createElement("a");
        n.href = r;
        let o = e.fileName;
        o = o.replace(/ /g, "_"), n.download = `${o}.csv`, n.click()
    }
})), r.register("h7FdC", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("7ECC6"),
        c = r("2FDaO"),
        l = r("lKmIF"),
        s = r("69SUA"),
        u = r("lpEVe"),
        f = r("9GZDH"),
        d = r("hq4ol"),
        p = r("d3DbW"),
        g = r("2HJeA"),
        h = r("eHkxo"),
        v = r("iMOcM"),
        m = r("cOqKD"),
        y = r("xSNQc");
    let x, b, w = e => e;
    const C = c.default.div(x || (x = w`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`)),
        O = (0, c.default)(i.default)(b || (b = w`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${0} !important;
  color: ${0} !important;
`), s.FontWeights.Bold, l.default.Black);
    var j = (0, u.observer)((e => {
        const {
            gameReport: t
        } = e, {
            navigation: r
        } = a.useContext(f.default);
        return (0, o.jsxs)(h.default, {
            children: [(0, o.jsx)(p.default, {
                title: "Student Overview",
                description: "Quick look on how each student performed",
                download: () => {
                    const r = m.unparse(t.players.map((e => {
                        const t = (0, v.calculateAccuracy)(e.correctQuestionIds.length, e.incorrectQuestionIds.length);
                        var r, n;
                        return {
                            "Player Name": e.name,
                            "Questions Answered Correctly": null !== (r = e.correctQuestionIds.length) && void 0 !== r ? r : 0,
                            "Questions Answered Incorrectly": null !== (n = e.incorrectQuestionIds.length) && void 0 !== n ? n : 0,
                            Accuracy: t + "%"
                        }
                    })));
                    (0, y.DownloadReportCSV)({
                        csv: r,
                        fileName: `${e.gameReport.game.title} Student Overview`
                    })
                }
            }), (0, o.jsx)("div", {
                children: t.players.map(((e, t) => {
                    const n = (0, v.calculateAccuracy)(e.correctQuestionIds.length, e.incorrectQuestionIds.length);
                    return (0, o.jsxs)(C, {
                        children: [(0, o.jsx)(O, {
                            hoverable: !0,
                            onClick: () => {
                                r.currentPlayer = t, r.currentTab = d.default.player
                            },
                            children: (0, o.jsx)("div", {
                                children: e.name
                            })
                        }), (0, o.jsx)(g.default, {
                            correct: e.correctQuestionIds.length,
                            incorrect: e.incorrectQuestionIds.length,
                            accuracy: n
                        })]
                    }, `student-overview-student-${t}`)
                }))
            })]
        })
    }))
})), r.register("lJSKF", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("kQLx6");
    var i = e => {
        const t = (0, a.use100vh)();
        return (0, o.jsx)("div", {
            style: {
                height: t,
                width: "100%"
            },
            className: e.className,
            children: e.children
        })
    }
})), r.register("kQLx6", (function(n, o) {
    e(n.exports, "use100vh", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fywoC"),
        i = function() {
            return i = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        },
        c = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        },
        l = !1,
        s = (0, a.forwardRef)((function(e, r) {
            var n = e.style,
                o = c(e, ["style"]),
                s = u();
            !l && (null == n ? void 0 : n.height) && (l = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
            var f = i(i({}, n), {
                height: s ? s + "px" : "100vh"
            });
            return t(a).createElement("div", i({
                ref: r,
                style: f
            }, o))
        }));
    s.displayName = "Div100vh";

    function u() {
        var e = (0, a.useState)(f),
            t = e[0],
            r = e[1],
            n = function() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    r = e[1];
                return (0, a.useEffect)((function() {
                    d() && r(!0)
                }), []), t
            }();
        return (0, a.useEffect)((function() {
            if (n) return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                };

            function e() {
                var e = f();
                r(e)
            }
        }), [n]), n ? t : null
    }

    function f() {
        return d() ? window.innerHeight : null
    }

    function d() {
        return "undefined" != typeof window && "undefined" != typeof document
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("7WFzL"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CopyOutlined";
    var s = a.forwardRef(l)
})), r.register("7WFzL", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("6tWM4"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EditOutlined";
    var s = a.forwardRef(l)
})), r.register("6tWM4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function c(e, t, r) {
        return function(n) {
            const {
                prefixCls: c,
                style: l
            } = n, s = a.useRef(null), [u, f] = a.useState(0), [d, p] = a.useState(0), [g, h] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: v
            } = a.useContext(i.ConfigContext), m = v(t || "select", c);
            return a.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(m)}` : `.${m}-dropdown`,
                                a = null === (n = s.current) || void 0 === n ? void 0 : n.querySelector(o);
                            a && (clearInterval(t), e.observe(a))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), a.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, a.createElement("div", {
                ref: s,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, a.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: g,
                visible: g,
                getPopupContainer: () => s.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = r("lt5sb"),
        a = r("aWAHQ");
    const i = new(0, o.Keyframes)("antMoveDownIn", {
            "0%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        c = new(0, o.Keyframes)("antMoveDownOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        l = new(0, o.Keyframes)("antMoveLeftIn", {
            "0%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        s = new(0, o.Keyframes)("antMoveLeftOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        u = new(0, o.Keyframes)("antMoveRightIn", {
            "0%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        f = new(0, o.Keyframes)("antMoveRightOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        d = {
            "move-up": {
                inKeyframes: new(0, o.Keyframes)("antMoveUpIn", {
                    "0%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, o.Keyframes)("antMoveUpOut", {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    }
                })
            },
            "move-down": {
                inKeyframes: i,
                outKeyframes: c
            },
            "move-left": {
                inKeyframes: l,
                outKeyframes: s
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: f
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = d[t];
            return [(0, a.initMotion)(n, o, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
        c = r("fywoC"),
        l = r("4gMdJ"),
        s = r("1eqVQ"),
        u = r("7yXSw"),
        f = r("c9Vcn"),
        d = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const g = c.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        h = {
            small: 8,
            middle: 16,
            large: 24
        };
    const v = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = c.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: v,
            className: m,
            rootClassName: y,
            children: x,
            direction: b = "horizontal",
            prefixCls: w,
            split: C,
            style: O,
            wrap: j = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), S = (0, s.default)(), [E, M] = c.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [u]), z = (0, i.default)(x, {
            keepEmpty: !0
        }), P = void 0 === v && "horizontal" === b ? "center" : v, N = r("space", w), [$, D] = (0, d.default)(N), R = t(a)(N, D, `${N}-${b}`, {
            [`${N}-rtl`]: "rtl" === o,
            [`${N}-align-${P}`]: P
        }, m, y), K = `${N}-item`, I = "rtl" === o ? "marginLeft" : "marginRight";
        let F = 0;
        const B = z.map(((e, t) => {
                null != e && (F = t);
                const r = e && e.key || `${K}-${t}`;
                return c.createElement(f.default, {
                    className: K,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: I,
                    split: C,
                    wrap: j
                }, e)
            })),
            _ = c.useMemo((() => ({
                horizontalSize: E,
                verticalSize: M,
                latestIndex: F,
                supportFlexGap: S
            })), [E, M, F, S]);
        if (0 === z.length) return null;
        const A = {};
        return j && (A.flexWrap = "wrap", S || (A.marginBottom = -M)), S && (A.columnGap = E, A.rowGap = M), $(c.createElement("div", Object.assign({
            className: R,
            style: Object.assign(Object.assign({}, A), O)
        }, k), c.createElement(g.Provider, {
            value: _
        }, B)))
    };
    v.Compact = u.default;
    var m = v
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: i,
            children: c,
            split: l,
            wrap: s
        } = e;
        const {
            horizontalSize: u,
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let g = {};
        return p || ("vertical" === r ? n < d && (g = {
            marginBottom: u / (l ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, n < d && {
            [i]: u / (l ? 2 : 1)
        }), s && {
            paddingBottom: f
        })), null == c ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: g
        }, c), n < d && l && o.createElement("span", {
            className: `${t}-split`,
            style: g
        }, l))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, c, l, s, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), c = document.createRange(), l = document.getSelection(), (s = document.createElement("span")).textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(s), c.selectNodeContents(s), l.addRange(c), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(c) : l.removeAllRanges()), s && document.body.removeChild(s), i()
        }
        return u
    }
})), r.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
        }
        return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        c = r("fywoC"),
        l = r("4gMdJ"),
        s = r("2iORQ"),
        u = r("eM84N"),
        f = r("8elTB"),
        d = r("jfXop"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const g = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: f,
                style: g,
                children: h,
                icon: v,
                color: m,
                onClose: y,
                closeIcon: x,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: C,
                direction: O
            } = c.useContext(l.ConfigContext), [j, k] = c.useState(!0);
            c.useEffect((() => {
                "visible" in w && k(w.visible)
            }), [w.visible]);
            const S = (0, s.isPresetColor)(m) || (0, s.isPresetStatusColor)(m),
                E = Object.assign({
                    backgroundColor: m && !S ? m : void 0
                }, g),
                M = C("tag", n),
                [z, P] = (0, d.default)(M),
                N = t(i)(M, {
                    [`${M}-${m}`]: S,
                    [`${M}-has-color`]: m && !S,
                    [`${M}-hidden`]: !j,
                    [`${M}-rtl`]: "rtl" === O
                }, o, f, P),
                $ = e => {
                    e.stopPropagation(), null == y || y(e), e.defaultPrevented || k(!1)
                },
                D = "function" == typeof w.onClick || h && "a" === h.type,
                R = v || null,
                K = R ? c.createElement(c.Fragment, null, R, c.createElement("span", null, h)) : h,
                I = c.createElement("span", Object.assign({}, w, {
                    ref: r,
                    className: N,
                    style: E
                }), K, b ? x ? c.createElement("span", {
                    className: `${M}-close-icon`,
                    onClick: $
                }, x) : c.createElement(a.default, {
                    className: `${M}-close-icon`,
                    onClick: $
                }) : null);
            return z(D ? c.createElement(u.default, null, I) : I)
        },
        h = c.forwardRef(g);
    h.CheckableTag = f.default;
    var v = h
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        c = r("4gMdJ"),
        l = r("jfXop"),
        s = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    var u = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: u,
            onClick: f
        } = e, d = s(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(c.ConfigContext), g = p("tag", r), [h, v] = (0, l.default)(g), m = t(a)(g, {
            [`${g}-checkable`]: !0,
            [`${g}-checkable-checked`]: o
        }, n, v);
        return h(i.createElement("span", Object.assign({}, d, {
            className: m,
            onClick: e => {
                null == u || u(!o), null == f || f(e)
            }
        })))
    }
})), r.register("jfXop", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("3pCmM"),
        c = r("10VQw"),
        l = r("kCC5O");
    const s = (e, t, r) => {
            const n = (0, i.default)(r);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${r}`],
                    background: e[`color${n}Bg`],
                    borderColor: e[`color${n}Border`]
                }
            }
        },
        u = e => (0, c.genPresetColor)(e, ((t, r) => {
            let {
                textColor: n,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
                    background: a,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: i,
                        borderColor: i
                    }
                }
            }
        })),
        f = e => {
            const {
                paddingXXS: t,
                lineWidth: r,
                tagPaddingHorizontal: n,
                componentCls: o
            } = e, a = n - r, i = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: a,
                    fontSize: e.tagFontSize,
                    lineHeight: `${e.tagLineHeight}px`,
                    whiteSpace: "nowrap",
                    background: e.tagDefaultBg,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${e.motionDurationMid}`,
                    textAlign: "start",
                    [`&${o}-rtl`]: {
                        direction: "rtl"
                    },
                    "&, a, a:hover": {
                        color: e.tagDefaultColor
                    },
                    [`${o}-close-icon`]: {
                        marginInlineStart: i,
                        color: e.colorTextDescription,
                        fontSize: e.tagIconSize,
                        cursor: "pointer",
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            color: e.colorTextHeading
                        }
                    },
                    [`&${o}-has-color`]: {
                        borderColor: "transparent",
                        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                            color: e.colorTextLightSolid
                        }
                    },
                    "&-checkable": {
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        [`&:not(${o}-checkable-checked):hover`]: {
                            color: e.colorPrimary,
                            backgroundColor: e.colorFillSecondary
                        },
                        "&:active, &-checked": {
                            color: e.colorTextLightSolid
                        },
                        "&-checked": {
                            backgroundColor: e.colorPrimary,
                            "&:hover": {
                                backgroundColor: e.colorPrimaryHover
                            }
                        },
                        "&:active": {
                            backgroundColor: e.colorPrimaryActive
                        }
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                        marginInlineStart: a
                    }
                })
            }
        };
    var d = (0, o.default)("Tag", (e => {
        const {
            fontSize: t,
            lineHeight: r,
            lineWidth: n,
            fontSizeIcon: o
        } = e, i = Math.round(t * r), c = e.fontSizeSM, l = i - 2 * n, d = e.colorFillAlter, p = e.colorText, g = (0, a.merge)(e, {
            tagFontSize: c,
            tagLineHeight: l,
            tagDefaultBg: d,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [f(g), u(g), s(g, "success", "Success"), s(g, "processing", "Info"), s(g, "error", "Error"), s(g, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("6WS0O", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        sideMargin: 50,
        optionWidth: 200
    }
})), r.register("77qSl", (function(t, n) {
    e(t.exports, "useMediaMatch", (function() {
        return a
    }));
    var o = r("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            a = r[1];
        return (0, o.useEffect)((function() {
            a(t.matches);
            var e = function(e) {
                return a(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), n
    }
})), r.register("3bHhZ", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(r("coa3i"), e.exports), o(r("exKSe"), e.exports), o(r("4Nv4f"), e.exports)
})), r.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var n = r("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, n.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, n.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), r.register("4Nv4f", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(r("fywoC"));

    function c() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(c()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                r(c())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), r.register("exKSe", (function(e, t) {
    var n = e.exports && e.exports.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, n.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var c = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = c.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = c.useRef(),
            a = c.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return c.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), n({
            ref: o
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (o = n || (n = {})).light = "light", o.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (o = n || (n = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        name: r("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), r.register("2Y5iQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var s = a.forwardRef(l)
})), r.register("bVHCc", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("4GmeK"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var s = a.forwardRef(l)
})), r.register("4GmeK", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return v
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        c = r("hzerz"),
        l = r("46jhs"),
        s = r("hn4Tf"),
        u = r("7NK35"),
        f = r("b1RjK"),
        d = r("17aYs"),
        p = r("fywoC"),
        g = r("fe1on"),
        h = function(e) {
            (0, f.default)(n, e);
            var r = (0, d.default)(n);

            function n(e) {
                var t;
                (0, s.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, l.default)((0, l.default)({}, t.props), {}, {
                            checked: e.target.checked
                        }),
                        stopPropagation: function() {
                            e.stopPropagation()
                        },
                        preventDefault: function() {
                            e.preventDefault()
                        },
                        nativeEvent: e.nativeEvent
                    }))
                }, t.saveInput = function(e) {
                    t.input = e
                };
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
                }, t
            }
            return (0, u.default)(n, [{
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            }, {
                key: "render",
                value: function() {
                    var e, r = this.props,
                        n = r.prefixCls,
                        o = r.className,
                        l = r.style,
                        s = r.name,
                        u = r.id,
                        f = r.type,
                        d = r.disabled,
                        h = r.readOnly,
                        v = r.tabIndex,
                        m = r.onClick,
                        y = r.onFocus,
                        x = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        C = r.onKeyUp,
                        O = r.autoFocus,
                        j = r.value,
                        k = r.required,
                        S = (0, c.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        E = Object.keys(S).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = S[t]), e
                        }), {}),
                        M = this.state.checked,
                        z = t(g)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), M), (0, i.default)(e, "".concat(n, "-disabled"), d), e));
                    return t(p).createElement("span", {
                        className: z,
                        style: l
                    }, t(p).createElement("input", (0, a.default)({
                        name: s,
                        id: u,
                        type: f,
                        required: k,
                        readOnly: h,
                        disabled: d,
                        tabIndex: v,
                        className: "".concat(n, "-input"),
                        checked: !!M,
                        onClick: m,
                        onFocus: y,
                        onBlur: x,
                        onKeyUp: C,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: O,
                        ref: this.saveInput,
                        value: j
                    }, E)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    h.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var v = h
})), r.register("2ic9V", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("iStnv", (function(t, r) {
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("hzerz", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var r, n, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("iStnv");

    function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach((function(t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
})), r.register("hn4Tf", (function(t, r) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("7NK35", (function(t, r) {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("63PCo");

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), r.register("63PCo", (function(t, r) {
    function n(e, t) {
        return n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(e, t)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("17aYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function c(e) {
        var t = (0, a.default)();
        return function() {
            var r, n = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                r = Reflect.construct(n, arguments, a)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
})), r.register("bArAQ", (function(t, r) {
    function n(e) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lcgmN", (function(t, r) {
    function n() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("erlXZ", (function(n, o) {
    e(n.exports, "default", (function() {
        return c
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function c(e, r) {
        if (r && ("object" === t(a)(r) || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), r.register("1eKqi", (function(e, t) {
    function r(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
    }
    e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
})), r.register("cdb2f", (function(t, r) {
    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("fywoC");
    const i = a.lazy((() => r("h3n1W")));
    var c = e => (0, o.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(i, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = r("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var s = a.forwardRef(l)
})), r.register("5UEB4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                }
            }]
        },
        name: "star",
        theme: "outlined"
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var c = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
        c = r("f1PHW");
    let l;
    const s = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, c.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var o;
                        null === (o = e.get(t[n].target)) || void 0 === o || o(t[n], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, n) {
                t.observe(r), e.set(r, n)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var u = function(e, t) {
        const r = s(),
            n = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return r.subscribe(o, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(o)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return a
    }));
    var a = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = function(e) {
        var t = [],
            r = null,
            n = function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t = o, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            a = (0, n.forwardRef)((function(e, r) {
                var a = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(a.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return a.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
})), r.register("4aaLU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("4eEdH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ddWN5"),
        c = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(c.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownloadOutlined";
    var s = a.forwardRef(l)
})), r.register("ddWN5", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "download",
        theme: "outlined"
    }
}));