function e(e, t, n, a) {
    Object.defineProperty(e, t, {
        get: n,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("iOAmC", (function(n, a) {
    var r;
    r = n.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return h
    }));
    var o = t("hxEiv"),
        u = t("fywoC"),
        i = t("3uz2P"),
        c = t("iMOcM"),
        d = t("2FDaO"),
        s = t("4ifJF"),
        l = t("lKmIF"),
        g = t("9Mv96"),
        b = t("fC6cp"),
        x = t("fBuQJ"),
        f = t("BLWbP"),
        p = t("69SUA"),
        k = t("3EK5n");
    let m;
    var h = () => {
        const {
            id: e
        } = (0, i.useParams)(), [t, n] = u.useState(""), [a, r, d] = (0, c.useBoolean)(!1), [s, m] = u.useState("");
        u.useEffect((() => {
            r(), m(""), (0, c.request)({
                url: "/api/matchmaker/intent/map/play/publish-link/create",
                data: {
                    id: e
                },
                success: e => {
                    n(e)
                },
                error: e => {
                    var t;
                    (null == e || null === (t = e.message) || void 0 === t ? void 0 : t.text) ? m(e.message.text): m("There was an error. Please try again.")
                },
                both: d
            })
        }), [e]);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(c.Title, {
                title: "Gimkit Creative Map"
            }), (() => {
                if (t) return (0, o.jsx)(k.default, {
                    createDetails: {
                        intentId: t
                    }
                });
                return (0, o.jsx)(v, {
                    children: a ? (0, o.jsx)(g.default, {
                        style: {
                            color: l.default.White
                        },
                        size: 42
                    }) : s ? (0, o.jsx)(x.default, {
                        open: !0,
                        closable: !1,
                        footer: null,
                        width: 700,
                        centered: !0,
                        bodyStyle: {
                            padding: 40
                        },
                        children: (0, o.jsxs)("div", {
                            className: "maxAll flex-column flex-center",
                            style: {
                                color: l.default.Black,
                                textAlign: "center",
                                font: p.Fonts.SFPro
                            },
                            children: [(0, o.jsx)(f.default, {
                                style: {
                                    color: "darkorange",
                                    fontSize: 51
                                }
                            }), " ", (0, o.jsx)(b.default, {}), (0, o.jsx)("div", {
                                style: {
                                    textAlign: "center",
                                    fontSize: 23,
                                    fontWeight: "bold"
                                },
                                children: s
                            })]
                        })
                    }) : null
                })
            })()]
        })
    };
    const v = (0, d.default)(s.Centered)(m || (m = (e => e)`
  flex: 1;
  padding: 20px;
  background: ${0};
`), l.default.BackgroundPurple)
})), t.register("BLWbP", (function(n, a) {
    e(n.exports, "default", (function() {
        return d
    }));
    var r = t("dnh3u"),
        o = t("fywoC"),
        u = t("28FNC"),
        i = t("dwKuN"),
        c = function(e, t) {
            return o.createElement(i.default, (0, r.default)((0, r.default)({}, e), {}, {
                ref: t,
                icon: u.default
            }))
        };
    c.displayName = "WarningOutlined";
    var d = o.forwardRef(c)
})), t.register("28FNC", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"
                }
            }]
        },
        name: "warning",
        theme: "outlined"
    }
})), t.register("j2XHK", (function(t, n) {
    let a;
    var r;
    let o;
    var u;
    let i;
    var c;
    let d;
    let s;
    var l;
    e(t.exports, "QuestionType", (function() {
        return a
    })), e(t.exports, "Privacy", (function() {
        return o
    })), e(t.exports, "GameStatus", (function() {
        return i
    })), e(t.exports, "GameType", (function() {
        return d
    })), e(t.exports, "GameGoal", (function() {
        return s
    })), e(t.exports, "themes", (function() {
        return p
    })), e(t.exports, "ExperienceSource", (function() {
        return k
    })), (r = a || (a = {})).multipleChoice = "mc", r.textInput = "text", (u = o || (o = {})).public = "public", u.private = "private", (c = i || (i = {})).setup = "setup", c.join = "join", c.teams = "teams", c.gameplay = "gameplay", c.results = "results", (d || (d = {})).live = "live", (l = s || (s = {})).time = "time", l.race = "race", l.allIn = "allIn";
    const g = "#ffffff",
        b = "#000000";
    let x;
    var f;
    (f = x || (x = {})).easy = "easy", f.medium = "medium", f.hard = "hard", f.veryHard = "veryHard", f.veryVeryHard = "veryVeryHard";
    const p = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: g
        },
        palette: [{
            background: "#771322",
            text: g
        }, {
            background: "#A85C15",
            text: g
        }, {
            background: "#0D6B33",
            text: g
        }, {
            background: "#076296",
            text: g
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: g
        },
        palette: [{
            background: "#9E682A",
            text: g
        }, {
            background: "#B54730",
            text: g
        }, {
            background: "#8A9748",
            text: g
        }, {
            background: "#F1B930",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: g
        },
        palette: [{
            background: "#263238",
            text: g
        }, {
            background: "#37474f",
            text: g
        }, {
            background: "#455a64",
            text: g
        }, {
            background: "#546e7a",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: g
        },
        palette: [{
            background: "#220044",
            text: g
        }, {
            background: "#330066",
            text: g
        }, {
            background: "#3E007C",
            text: g
        }, {
            background: "#4F1787",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: g
        },
        palette: [{
            background: "#283593",
            text: g
        }, {
            background: "#076296",
            text: g
        }, {
            background: "#0277bd",
            text: g
        }, {
            background: "#1565c0",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: g
        },
        palette: [{
            background: "#385645",
            text: g
        }, {
            background: "#425C49",
            text: g
        }, {
            background: "#415641",
            text: g
        }, {
            background: "#4C6349",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: g
        },
        palette: [{
            background: "#F46F5A",
            text: g
        }, {
            background: "#ED712D",
            text: g
        }, {
            background: "#7A596A",
            text: g
        }, {
            background: "#E8AB3C",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: g
        },
        palette: [{
            background: "#001D3B",
            text: g
        }, {
            background: "#FFAE52",
            text: g
        }, {
            background: "#FE5963",
            text: g
        }, {
            background: "#A71C94",
            text: g
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: b,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: b
        }, {
            background: "#FFC721",
            text: b
        }, {
            background: "#FFD147",
            text: b
        }, {
            background: "#FFCD38",
            text: b
        }],
        owned: !1,
        isActive: !1
    }];
    let k;
    var m;
    (m = k || (k = {})).original = "original", m.map = "map"
}));