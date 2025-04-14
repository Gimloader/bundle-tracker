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
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    n = r.parcelRequire388b;
n.register("4daGs", (function(t, r) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return k
    }));
    var i = n("hxEiv"),
        o = n("fywoC"),
        l = n("2FDaO"),
        s = n("6Dszw"),
        d = n("6N1vx"),
        u = n("dRSVt"),
        c = n("lpEVe"),
        f = n("gwxnT"),
        p = n("k3GfJ"),
        v = n("ktAoG"),
        g = n("cJmcN"),
        m = n("8iT9z"),
        x = n("lnv5p"),
        h = n("3RQjs"),
        y = n("fwdZN"),
        b = n("9xElQ"),
        C = n("iMOcM"),
        T = n("z3zWp"),
        j = n("6zpVf");
    let w;
    var k = (0, c.observer)((e => {
        const {
            gui: {
                none: {
                    addMenu: {
                        screen: t
                    }
                }
            },
            me: {
                adding: r
            }
        } = (0, f.default)(), [n, a, l] = (0, C.useBoolean)(!0), [c, w] = o.useState(!0);
        (0, m.useInputBlockingUI)();
        const k = o.useMemo((() => t === p.AddScreen.terrain), [t]),
            S = o.useMemo((() => t === p.AddScreen.props), [t]),
            O = o.useMemo((() => t === p.AddScreen.devices), [t]),
            F = () => {
                e.setToHomeScreen(), R(p.AddScreen.home)
            },
            N = (0, T.default)();
        o.useEffect((() => {
            N || l()
        }), [N]);
        const A = o.useCallback((() => {
                c ? F() : k || S || O || l()
            }), [l, k, S, O, c, F]),
            R = e => (0, g.default)(e),
            I = () => {
                R(p.AddScreen.home)
            };
        return (0, i.jsx)(b.default, {
            open: n,
            onClose: A,
            afterOpenChange: e => {
                e && w(!1), e || F()
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, i.jsx)(E, {
                children: (0, i.jsxs)(s.default, {
                    close: e.setToHomeScreen,
                    setToTerrain: () => R(p.AddScreen.terrain),
                    setToProps: () => {
                        R(p.AddScreen.props)
                    },
                    setToDevices: () => R(p.AddScreen.devices),
                    setToWires: () => {
                        r.mode = x.AddingMode.wire, (0, h.default)(y.default.adding), (0, j.EmitTutorialEvent)({
                            event: j.TutorialEventName.START_ADDING_WIRE
                        })
                    },
                    children: [(0, i.jsx)(d.default, {
                        open: k,
                        close: I
                    }), (0, i.jsx)(u.default, {
                        open: S,
                        close: I
                    }), (0, i.jsx)(v.default, {
                        open: O,
                        close: I
                    })]
                })
            })
        })
    }));
    const E = l.default.div.attrs({
        className: "maxWidth"
    })(w || (w = (e => e)``))
})), n.register("6Dszw", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = n("hxEiv"),
        i = n("4y75y");
    n("fywoC");
    var o = n("2FDaO"),
        l = n("69SUA"),
        s = n("1ZCZ6"),
        d = n("iy53R"),
        u = n("alREA");
    let c, f, p = e => e;
    const v = e => (0, u.default)(`editor/icons/${e}.png`);
    var g = e => (0, a.jsxs)(m, {
        children: [(0, a.jsx)(i.default.Title, {
            level: 1,
            style: {
                fontFamily: l.Fonts.FugazOne,
                marginBottom: 25,
                marginTop: 5
            },
            className: "allCaps",
            children: "Add"
        }), (0, a.jsxs)(x, {
            children: [(0, a.jsx)(d.default, {
                name: s.default.terrain.singular,
                description: "The floors and walls on the map",
                icon: v("terrain"),
                onClick: e.setToTerrain
            }), (0, a.jsx)(d.default, {
                name: s.default.prop.plural,
                description: "Objects and decorations",
                icon: v("prop"),
                onClick: e.setToProps
            }), (0, a.jsx)(d.default, {
                name: s.default.device.plural,
                description: "Create game mechanics!",
                icon: v("device"),
                onClick: e.setToDevices
            }), (0, a.jsx)(d.default, {
                name: s.default.wire.plural,
                description: "Connect devices together",
                icon: v("wire"),
                onClick: e.setToWires
            })]
        }), e.children]
    });
    const m = o.default.div.attrs({
            className: "flex-column flex-center maxWidth"
        })(c || (c = p``)),
        x = o.default.div.attrs({
            className: "maxWidth"
        })(f || (f = p`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`))
})), n.register("1ZCZ6", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        terrain: {
            singular: "terrain",
            plural: "terrains"
        },
        prop: {
            singular: "prop",
            plural: "props"
        },
        device: {
            singular: "device",
            plural: "devices"
        },
        wire: {
            singular: "wire",
            plural: "wires"
        }
    }
})), n.register("iy53R", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv"),
        i = n("l4uFh"),
        o = n("4y75y");
    n("fywoC");
    var l = n("4ifJF"),
        s = n("69SUA"),
        d = n("2FDaO"),
        u = n("3sJmi"),
        c = n("k4lId");
    let f, p, v, g = e => e;
    const {
        useToken: m
    } = i.default;
    var x = e => {
        const {
            token: {
                borderRadius: t
            }
        } = m(), {
            name: r,
            description: n,
            icon: i
        } = e;
        return (0, a.jsx)(h, {
            onClick: () => {
                (0, c.playClickSound)(), e.onClick()
            },
            borderRadius: t,
            children: (0, a.jsxs)(l.CenteredColumn, {
                className: "maxAll",
                children: [(0, a.jsx)(y, {
                    children: (0, a.jsx)(b, {
                        src: i
                    })
                }), (0, a.jsx)(o.default.Title, {
                    level: 3,
                    style: {
                        marginBottom: -1,
                        fontFamily: s.Fonts.FugazOne,
                        textTransform: "uppercase"
                    },
                    children: (0, u.CapitalizeFirstLetter)(r)
                }), (0, a.jsx)(o.default.Text, {
                    children: n
                })]
            })
        })
    };
    const h = d.default.div.attrs({
            className: "maxAll"
        })(f || (f = g`
  cursor: pointer;
  border-radius: ${0}px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius)),
        y = d.default.div(p || (p = g`
  margin-bottom: 5px;
`)),
        b = d.default.img(v || (v = g`
  height: 70px;
`))
})), n.register("6N1vx", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv"),
        i = n("fC6cp"),
        o = n("9xElQ"),
        l = n("b9Zw0"),
        s = n("4y75y"),
        d = n("fywoC"),
        u = n("4ifJF"),
        c = n("69SUA"),
        f = n("7Ifh6"),
        p = n("gzqb8"),
        v = n("3sJmi"),
        g = n("1ZCZ6"),
        m = n("bDCcz");
    var x = e => {
        const [t, r] = d.useState(""), n = d.useRef(null), x = (0, m.isPlatformer)();
        return (0, a.jsx)(o.default, {
            open: e.open,
            onClose: e.close,
            width: 500,
            afterOpenChange: e => {
                var t;
                e ? null == n || null === (t = n.current) || void 0 === t || t.focus() : r("")
            },
            destroyOnClose: !0,
            children: (0, a.jsxs)(u.CenteredColumn, {
                children: [(0, a.jsx)(s.default.Title, {
                    level: 1,
                    style: {
                        fontFamily: c.Fonts.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: (0, v.CapitalizeFirstLetter)(g.default.terrain.singular)
                }), x ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(f.default, {}), " ", (0, a.jsx)(i.default, {})]
                }), (0, a.jsx)(l.default.Search, {
                    size: "large",
                    placeholder: `Search for ${g.default.terrain.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: t,
                    onChange: e => {
                        r(e.target.value)
                    },
                    ref: n
                }), (0, a.jsx)(p.default, {
                    searchQuery: t
                })]
            })
        })
    }
})), n.register("7Ifh6", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = n("hxEiv"),
        i = n("93yIm"),
        o = n("4y75y"),
        l = n("cSKYy");
    n("fywoC");
    var s = n("1ZCZ6"),
        d = n("gwxnT"),
        u = n("4ifJF"),
        c = n("bDCcz");
    var f = (0, l.observer)((() => {
        const {
            me: {
                adding: {
                    terrain: e
                }
            }
        } = (0, d.default)(), t = e.buildTerrainAsWall, r = t => {
            (0, c.isPlatformer)() || (e.buildTerrainAsWall = t)
        };
        return (0, a.jsxs)(u.Centered, {
            children: [(0, a.jsxs)(o.default.Text, {
                style: {
                    marginRight: 10
                },
                children: ["Place down ", s.default.terrain.singular, " as a"]
            }), (0, a.jsxs)(i.default.Group, {
                children: [(0, a.jsx)(i.default, {
                    type: t ? "default" : "primary",
                    onClick: () => r(!1),
                    children: "Floor"
                }), (0, a.jsx)(i.default, {
                    type: t ? "primary" : "default",
                    onClick: () => r(!0),
                    children: "Wall"
                })]
            })]
        })
    }))
})), n.register("gzqb8", (function(r, a) {
    e(r.exports, "default", (function() {
        return x
    }));
    var i = n("hxEiv"),
        o = n("i5Qjx"),
        l = n("fywoC"),
        s = n("7MBQI"),
        d = n("5OQ4z"),
        u = n("gwxnT"),
        c = n("GFs60"),
        f = n("c3ah8"),
        p = n("doMfh"),
        v = n("6RgS6"),
        g = n("aNA20"),
        m = n("80uFV");
    var x = e => {
        const {
            worldOptions: {
                terrainOptions: r
            }
        } = (0, u.default)(), [n, a] = l.useState(-1), [x] = (0, s.useDebouncedValue)(e.searchQuery, 150), h = l.useMemo((() => {
            var e;
            const t = null === (e = null == x ? void 0 : x.trim()) || void 0 === e ? void 0 : e.toLowerCase();
            if (!t && !(0, g.IsTutorial)()) return r.filter((e => (0, v.CanAddTerrain)(e.id)));
            const n = r.filter((e => e.name.toLowerCase().includes(t) && (0, v.CanAddTerrain)(e.id)));
            return (0, g.IsTutorial)() ? n.sort(((e, t) => {
                const r = m.TutorialConsts.topTerrain.indexOf(e.id),
                    n = m.TutorialConsts.topTerrain.indexOf(t.id);
                return -1 === r && -1 === n ? 0 : -1 === r ? 1 : -1 === n ? -1 : r - n
            })) : n
        }), [r.length, x]);
        return (0, d.default)(t(f).Input.Keyboard.KeyCodes.UP, (() => {
            a(Math.max(0, n - 1))
        }), [n]), (0, d.default)(t(f).Input.Keyboard.KeyCodes.DOWN, (() => {
            const e = h.length - 1;
            a(Math.min(e, n + 1))
        }), [h.length, n]), l.useEffect((() => {
            a(x ? 0 : -1)
        }), [x]), h.length ? (0, i.jsx)(o.default, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: h.map(((e, t) => (0, i.jsx)(c.default, {
                option: e,
                focused: n === t
            }, e.id)))
        }) : (0, i.jsx)(p.default, {})
    }
})), n.register("7MBQI", (function(t, r) {
    e(t.exports, "useDebouncedValue", (function() {
        return d
    }));
    var a = n("fywoC"),
        i = n("eP2ui"),
        o = n("cPGmn"),
        l = n("1tUw4"),
        s = {
            initializeWithNull: !1
        },
        d = function(e, t, r) {
            void 0 === r && (r = {});
            var n = Object.assign({}, s, r).initializeWithNull,
                d = (0, a.useState)(n ? null : e),
                u = d[0],
                c = d[1],
                f = (0, i.useDebounce)(c, t);
            return (0, o.useDidMount)((function() {
                n && f(e)
            })), (0, l.useDidUpdate)((function() {
                f(e)
            }), [e]), [u, c]
        }
})), n.register("eP2ui", (function(r, a) {
    e(r.exports, "useDebounce", (function() {
        return l
    }));
    var i = n("bna3d"),
        o = n("fywoC");

    function l(e, r, n) {
        var a = (0, o.useCallback)((function(e) {
                return t(i)(e, r, n)
            }), [r, n]),
            l = (0, o.useRef)(a(e));
        return (0, o.useEffect)((function() {
            l.current = a(e)
        }), [e, a]), l.current
    }
})), n.register("bna3d", (function(e, t) {
    var n = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        l = parseInt,
        s = "object" == typeof r && r && r.Object === Object && r,
        d = "object" == typeof self && self && self.Object === Object && self,
        u = s || d || Function("return this")(),
        c = Object.prototype.toString,
        f = Math.max,
        p = Math.min,
        v = function() {
            return u.Date.now()
        };

    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function m(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == c.call(e)
            }(e)) return NaN;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(n, "");
        var r = i.test(e);
        return r || o.test(e) ? l(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
    }
    e.exports = function(e, t, r) {
        var n, a, i, o, l, s, d = 0,
            u = !1,
            c = !1,
            x = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
            var r = n,
                i = a;
            return n = a = void 0, d = t, o = e.apply(i, r)
        }

        function y(e) {
            return d = e, l = setTimeout(C, t), u ? h(e) : o
        }

        function b(e) {
            var r = e - s;
            return void 0 === s || r >= t || r < 0 || c && e - d >= i
        }

        function C() {
            var e = v();
            if (b(e)) return T(e);
            l = setTimeout(C, function(e) {
                var r = t - (e - s);
                return c ? p(r, i - (e - d)) : r
            }(e))
        }

        function T(e) {
            return l = void 0, x && n ? h(e) : (n = a = void 0, o)
        }

        function j() {
            var e = v(),
                r = b(e);
            if (n = arguments, a = this, s = e, r) {
                if (void 0 === l) return y(s);
                if (c) return l = setTimeout(C, t), h(s)
            }
            return void 0 === l && (l = setTimeout(C, t)), o
        }
        return t = m(t) || 0, g(r) && (u = !!r.leading, i = (c = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : i, x = "trailing" in r ? !!r.trailing : x), j.cancel = function() {
            void 0 !== l && clearTimeout(l), d = 0, n = s = a = l = void 0
        }, j.flush = function() {
            return void 0 === l ? o : T(v())
        }, j
    }
})), n.register("1tUw4", (function(t, r) {
    e(t.exports, "useDidUpdate", (function() {
        return i
    }));
    var a = n("fywoC");

    function i(e, t) {
        var r = (0, a.useRef)(!1);
        void 0 === t || Array.isArray(t) ? Array.isArray(t) && 0 === t.length && console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.") : t = [t], (0, a.useEffect)((function() {
            r.current ? e() : r.current = !0
        }), t)
    }
})), n.register("GFs60", (function(r, a) {
    e(r.exports, "default", (function() {
        return R
    }));
    var i = n("hxEiv"),
        o = n("fywoC"),
        l = n("2FDaO"),
        s = n("4ifJF"),
        d = n("l4uFh"),
        u = n("4y75y"),
        c = n("69SUA"),
        f = n("iRjsB"),
        p = n("lnv5p"),
        v = n("3RQjs"),
        g = n("fwdZN"),
        m = n("5OQ4z"),
        x = n("c3ah8"),
        h = n("k4lId"),
        y = n("6zpVf"),
        b = n("aNA20"),
        C = n("cJmcN"),
        T = n("k3GfJ"),
        j = n("7u0qw"),
        w = n("alTJZ");
    let k, E, S, O, F, N = e => e;
    const {
        useToken: A
    } = d.default;
    var R = e => {
        const {
            id: r,
            name: n,
            previewUrl: a,
            seasonTicketRequired: l
        } = e.option, s = o.useRef(null), {
            token: {
                borderRadius: d
            }
        } = A(), u = l && !(0, j.OwnsSeasonTicket)(), k = e => {
            u || (f.default.me.adding.terrain.currentlySelectedTerrain = r, f.default.me.adding.mode = p.AddingMode.terrain, (0, v.default)(g.default.adding), (0, b.IsTutorial)() && (0, C.default)(T.AddScreen.home), (0, y.EmitTutorialEvent)({
                event: y.TutorialEventName.SELECT_TERRAIN_TO_ADD,
                terrainId: r
            }), e && e())
        };
        return (0, m.default)(t(x).Input.Keyboard.KeyCodes.ENTER, (() => {
            e.focused && k()
        }), [e.focused, k]), o.useEffect((() => {
            var t;
            e.focused && (null === (t = s.current) || void 0 === t || t.scrollIntoView({
                behavior: "smooth",
                block: "center"
            }))
        }), [e.focused]), (0, i.jsxs)(I, {
            borderRadius: d,
            focused: e.focused,
            onClick: () => {
                k((() => {
                    (0, h.playClickSound)()
                }))
            },
            ref: s,
            children: [(0, i.jsx)(D, {
                src: a
            }), (0, i.jsxs)(M, {
                children: [(0, i.jsx)(z, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: c.Fonts.FugazOne
                    },
                    children: n
                }), l ? (0, i.jsx)("div", {
                    style: {
                        marginTop: 2
                    },
                    children: (0, i.jsx)(w.SeasonTicketExclusive, {})
                }) : null]
            })]
        })
    };
    const I = (0, l.default)(s.VerticalCentered)(k || (k = N`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${0}px;
  border: 2px solid
    ${0};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius), (e => e.focused ? "#ffca28" : "rgba(255, 255, 255, 0.1)")),
        M = (l.default.div(E || (E = N`
  display: flex;
  align-items: center;
`)), l.default.div(S || (S = N`
  display: flex;
  flex-direction: column;
`))),
        D = l.default.img(O || (O = N`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`)),
        z = (0, l.default)(u.default.Title)(F || (F = N`
  margin-bottom: 0 !important;
`))
})), n.register("cJmcN", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("6zpVf"),
        i = n("iRjsB"),
        o = n("k3GfJ");
    var l = e => {
        e !== o.AddScreen.home && (0, a.EmitTutorialEvent)({
            event: a.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: e
        }), i.default.gui.none.addMenu.screen = e
    }
})), n.register("7u0qw", (function(t, r) {
    e(t.exports, "OwnsSeasonTicket", (function() {
        return i
    }));
    var a = n("iMOcM");
    const i = () => {
        var e, t, r;
        return null !== (r = null === (e = (0, a.getUser)()) || void 0 === e || null === (t = e.seasonTicket) || void 0 === t ? void 0 : t.active) && void 0 !== r && r
    }
})), n.register("alTJZ", (function(t, r) {
    e(t.exports, "SeasonTicketExclusive", (function() {
        return d
    }));
    var a = n("hxEiv"),
        i = n("2FDaO"),
        o = n("hqWys"),
        l = n("69SUA");
    let s;
    const d = () => (0, a.jsxs)(u, {
            children: [o.SeasonTicketName.name, " Exclusive"]
        }),
        u = i.default.div(s || (s = (e => e)`
  color: rgb(218, 165, 32);
  background: linear-gradient(
    45deg,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${0};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1;
`), l.Fonts.FugazOne)
})), n.register("doMfh", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("hxEiv"),
        i = n("4y75y");
    n("fywoC");
    var o = () => (0, a.jsx)(i.default.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    })
})), n.register("6RgS6", (function(t, r) {
    e(t.exports, "CanAddTerrain", (function() {
        return o
    }));
    var a = n("iRjsB"),
        i = n("24AMo");
    const o = e => {
        var t;
        const r = a.default.worldOptions.terrainOptions.find((t => t.id === e));
        if (!r) return !1;
        if (null === (t = r.blockedMapStyles) || void 0 === t ? void 0 : t.length) {
            const e = a.default.session.mapStyle;
            if (r.blockedMapStyles.includes(e)) return !1
        }
        const n = r.minimumRoleLevel,
            o = r.maximumRoleLevel;
        return (0, i.IsRoleLevelBetween)(n, o)
    }
})), n.register("dRSVt", (function(t, r) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = n("hxEiv"),
        i = n("9xElQ"),
        o = n("b9Zw0"),
        l = n("4y75y"),
        s = n("fywoC"),
        d = n("4ifJF"),
        u = n("69SUA"),
        c = n("joXJi"),
        f = n("3sJmi"),
        p = n("1ZCZ6");
    var v = e => {
        const [t, r] = s.useState(""), n = s.useRef(null);
        return (0, a.jsx)(i.default, {
            open: e.open,
            onClose: e.close,
            width: 550,
            afterOpenChange: e => {
                var t;
                e ? null == n || null === (t = n.current) || void 0 === t || t.focus() : r("")
            },
            destroyOnClose: !0,
            children: (0, a.jsxs)(d.CenteredColumn, {
                children: [(0, a.jsx)(l.default.Title, {
                    level: 1,
                    style: {
                        fontFamily: u.Fonts.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: (0, f.CapitalizeFirstLetter)(p.default.prop.plural)
                }), (0, a.jsx)(o.default.Search, {
                    size: "large",
                    placeholder: `Search for ${p.default.prop.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: t,
                    onChange: e => {
                        r(e.target.value)
                    },
                    ref: n
                }), (0, a.jsx)(c.default, {
                    searchQuery: t
                })]
            })
        })
    }
})), n.register("joXJi", (function(t, r) {
    e(t.exports, "default", (function() {
        return b
    }));
    var a = n("hxEiv"),
        i = n("lpEVe"),
        o = n("fywoC"),
        l = n("7MBQI"),
        s = n("cPGmn"),
        d = n("9q1Gv"),
        u = n("gwxnT"),
        c = n("cCnGt"),
        f = n("a5D90"),
        p = n("2FDaO"),
        v = n("5OQ4z"),
        g = n("r3kEp"),
        m = n("aNA20"),
        x = n("80uFV"),
        h = n("24AMo");
    let y;
    var b = (0, i.observer)((e => {
        const {
            worldOptions: t
        } = (0, u.default)(), [r, n] = o.useState(-1), [i] = (0, l.useDebouncedValue)(e.searchQuery, 200), p = o.useMemo((() => {
            var r, n;
            const a = t.propsOptions.filter((e => (0, h.IsRoleLevelBetween)(e.minimumRoleLevel))),
                i = null === (r = null === (n = e.searchQuery) || void 0 === n ? void 0 : n.trim()) || void 0 === r ? void 0 : r.toLowerCase();
            if (!i && !(0, m.IsTutorial)()) return a;
            const o = a.filter((e => e.name.toLowerCase().includes(i)));
            return (0, m.IsTutorial)() ? o.sort(((e, t) => {
                const r = x.TutorialConsts.topProps.indexOf(e.id),
                    n = x.TutorialConsts.topProps.indexOf(t.id);
                return -1 === r && -1 === n ? 0 : -1 === r ? 1 : -1 === n ? -1 : r - n
            })) : o
        }), [t.propsOptions.length, i]);
        (0, s.useDidMount)((() => {
            t.requestedAllProps || (t.requestedAllProps = !0, (0, c.default)(d.default.requestAllProps))
        }));
        const y = o.useCallback((e => {
            const t = Math.max(0, Math.min(p.length - 1, r + e));
            n(t)
        }), [p.length, r]);
        return (0, v.default)(Phaser.Input.Keyboard.KeyCodes.UP, (() => {
            y(-2)
        }), [y]), (0, v.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, (() => {
            y(2)
        }), [y]), (0, v.default)(Phaser.Input.Keyboard.KeyCodes.LEFT, (() => {
            y(-1)
        }), [y]), (0, v.default)(Phaser.Input.Keyboard.KeyCodes.RIGHT, (() => {
            y(1)
        }), [y]), o.useEffect((() => {
            n(i ? 0 : -1)
        }), [i]), t.hasAllProps ? p.length ? (0, a.jsx)(C, {
            children: p.map(((e, t) => (0, a.jsx)(f.default, {
                focused: t === r,
                option: e
            }, e.id + "-option")))
        }) : (0, a.jsx)(g.default, {}) : null
    }));
    const C = p.default.div.attrs({
        className: "maxWidth"
    })(y || (y = (e => e)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`))
})), n.register("a5D90", (function(r, a) {
    e(r.exports, "default", (function() {
        return M
    }));
    var i = n("hxEiv"),
        o = n("fywoC"),
        l = n("2FDaO"),
        s = n("4ifJF"),
        d = n("l4uFh"),
        u = n("4y75y"),
        c = n("69SUA"),
        f = n("alREA"),
        p = (d = n("l4uFh"), u = n("4y75y"), n("5OQ4z")),
        v = n("c3ah8"),
        g = n("e5XDM"),
        m = n("iRjsB"),
        x = n("z5iun"),
        h = n("3RQjs"),
        y = n("fwdZN"),
        b = n("lnv5p"),
        C = n("k4lId"),
        T = n("6zpVf"),
        j = n("aNA20"),
        w = n("cJmcN"),
        k = n("k3GfJ"),
        E = n("7u0qw"),
        S = n("alTJZ");
    let O, F, N, A, R = e => e;
    const {
        useToken: I
    } = d.default;
    var M = e => {
        const {
            id: r,
            name: n,
            imageUrl: a,
            seasonTicketRequired: l
        } = e.option, s = o.useRef(null), d = t(g)(s), {
            token: {
                borderRadius: u
            }
        } = I(), O = l && !(0, E.OwnsSeasonTicket)(), F = e => {
            O || (m.default.me.adding.devices.selectedDeviceType = x.default.prop, m.default.me.adding.devices.currentlySelectedProp = r, m.default.me.adding.mode = b.AddingMode.device, (0, h.default)(y.default.adding), (0, j.IsTutorial)() && (0, w.default)(k.AddScreen.home), (0, T.EmitTutorialEvent)({
                event: T.TutorialEventName.SELECT_PROP_TO_ADD,
                propId: r
            }), e && e())
        };
        return (0, p.default)(t(v).Input.Keyboard.KeyCodes.ENTER, (() => {
            e.focused && F()
        }), [e.focused, F]), o.useEffect((() => {
            var t;
            e.focused && (null === (t = s.current) || void 0 === t || t.scrollIntoView({
                block: "center"
            }))
        }), [e.focused]), (0, i.jsx)(D, {
            ref: s,
            onClick: () => {
                F((() => {
                    (0, C.playClickSound)()
                }))
            },
            focused: e.focused,
            borderRadius: u,
            children: d ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(z, {
                    children: (0, i.jsx)(K, {
                        src: (0, f.default)(a)
                    })
                }), (0, i.jsx)(P, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: c.Fonts.FugazOne
                    },
                    children: n
                }), l ? (0, i.jsx)(S.SeasonTicketExclusive, {}) : null]
            }) : null
        })
    };
    const D = (0, l.default)(s.CenteredColumn)(O || (O = R`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${0}px;
  border: 2px solid
    ${0};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  height: auto;
  min-height: 168px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius), (e => e.focused ? "#ffca28" : "rgba(255, 255, 255, 0.1)")),
        z = (0, l.default)(s.Centered)(F || (F = R`
  width: 120px;
  height: 120px;
  padding: 10px;
`)),
        K = l.default.img.attrs({
            draggable: !1
        })(N || (N = R`
  max-height: 100%;
  max-width: 100%;
`)),
        P = (0, l.default)(u.default.Title).attrs({
            className: "maxWidth"
        })(A || (A = R`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`))
})), n.register("e5XDM", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r = n("fywoC");
    e.exports.default = function(e) {
        const [t, n] = (0, r.useState)(!1), a = (0, r.useMemo)((() => new IntersectionObserver((([e]) => n(e.isIntersecting)))), []);
        return (0, r.useEffect)((() => (a.observe(e.current), () => {
            a.disconnect()
        })), []), (0, r.useEffect)((() => {
            t && a.unobserve(e.current)
        }), [t, a, e]), t
    }
})), n.register("r3kEp", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("hxEiv"),
        i = n("4y75y");
    n("fywoC");
    var o = () => (0, a.jsx)(i.default.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    })
})), n.register("ktAoG", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv"),
        i = n("fC6cp"),
        o = n("9xElQ"),
        l = n("b9Zw0"),
        s = n("4y75y"),
        d = n("fywoC"),
        u = n("4ifJF"),
        c = n("69SUA"),
        f = n("1ZCZ6"),
        p = n("3sJmi"),
        v = n("ieqcM"),
        g = n("pnqat"),
        m = n("aNA20");
    var x = e => {
        const [t, r] = d.useState(""), [n, x] = d.useState(null), h = d.useRef(null), y = d.useCallback((() => {
            n || e.close()
        }), [n, e.close]);
        return (0, a.jsxs)(o.default, {
            open: e.open,
            onClose: y,
            width: 680,
            afterOpenChange: e => {
                var t;
                e ? null == h || null === (t = h.current) || void 0 === t || t.focus() : r("")
            },
            destroyOnClose: !0,
            children: [(0, a.jsxs)(u.CenteredColumn, {
                children: [(0, a.jsx)(s.default.Title, {
                    level: 1,
                    style: {
                        fontFamily: c.Fonts.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: (0, p.CapitalizeFirstLetter)(f.default.device.plural)
                }), (0, a.jsx)(l.default.Search, {
                    size: "large",
                    placeholder: `Search for ${f.default.device.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: t,
                    onChange: e => {
                        r(e.target.value)
                    },
                    ref: h
                }), t || (0, m.IsTutorial)() ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g.default, {
                        openCollectionName: n,
                        open: x
                    }), (0, a.jsx)(i.default, {
                        children: (0, a.jsxs)(s.default.Text, {
                            italic: !0,
                            children: ["All ", (0, p.CapitalizeFirstLetter)(f.default.device.plural)]
                        })
                    })]
                })]
            }), (0, a.jsx)(v.default, {
                searchQuery: t,
                blockKeyboardNavigation: !!n
            })]
        })
    }
})), n.register("ieqcM", (function(r, a) {
    e(r.exports, "default", (function() {
        return T
    }));
    var i = n("hxEiv"),
        o = n("i5Qjx"),
        l = n("cSKYy"),
        s = n("fywoC"),
        d = n("iUdXM"),
        u = n("z5iun"),
        c = n("5OQ4z"),
        f = n("gwxnT"),
        p = n("7ZVvv"),
        v = n("c3ah8"),
        g = n("hDlKY"),
        m = n("7MBQI"),
        x = n("bSnFK"),
        h = n("aNA20"),
        y = n("80uFV"),
        b = n("2SH1B");
    const C = [...d.default, u.default.prop, u.default.mapOptions];
    var T = (0, l.observer)((e => {
        const [r, n] = s.useState(-1), {
            worldOptions: {
                deviceOptions: a
            }
        } = (0, f.default)(), [l] = (0, m.useDebouncedValue)(e.searchQuery, 150), d = s.useMemo((() => {
            const t = null == l ? void 0 : l.toLowerCase(),
                r = a.filter((e => !C.includes(e.id))).filter((e => (0, x.CanAddDeviceType)(e.id, void 0))).filter((e => (0, b.CanAddDeviceForCurrentMapStyle)({
                    deviceTypeId: e.id
                }))).filter((t => !e.list || e.list.includes(t.id))).filter((e => {
                    var r, n;
                    return !t || (e.name.toLowerCase().includes(t) || (null === (r = null === (n = e.description) || void 0 === n ? void 0 : n.toLowerCase()) || void 0 === r ? void 0 : r.includes(t)))
                })).sort(((e, r) => {
                    const n = e.name.toLowerCase().includes(t),
                        a = r.name.toLowerCase().includes(t);
                    return n && !a ? -1 : !n && a ? 1 : e.name.length < r.name.length ? -1 : e.name.length > r.name.length ? 1 : 0
                }));
            if ((0, h.IsTutorial)()) return r.sort(((e, t) => {
                const r = y.TutorialConsts.topDevices.indexOf(e.id),
                    n = y.TutorialConsts.topDevices.indexOf(t.id);
                return -1 === r && -1 === n ? 0 : -1 === r ? 1 : -1 === n ? -1 : r - n
            }));
            if (e.list) {
                const t = [];
                return e.list.forEach((e => {
                    const n = r.find((t => t.id === e));
                    n && t.push(n)
                })), t
            }
            return r
        }), [a.length, l, e.list]);
        return (0, c.default)(t(v).Input.Keyboard.KeyCodes.UP, (() => {
            e.blockKeyboardNavigation || n(Math.max(0, r - 1))
        }), [r, e.blockKeyboardNavigation]), (0, c.default)(t(v).Input.Keyboard.KeyCodes.DOWN, (() => {
            if (e.blockKeyboardNavigation) return;
            const t = d.length - 1;
            n(Math.min(t, r + 1))
        }), [d.length, r, e.blockKeyboardNavigation]), s.useEffect((() => {
            !l || e.blockKeyboardNavigation ? n(-1) : n(0)
        }), [l, e.blockKeyboardNavigation]), d.length ? (0, i.jsx)(o.default, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: d.map(((e, t) => (0, i.jsx)(p.default, {
                option: e,
                focused: t === r
            }, e.id + "-option")))
        }) : (0, i.jsx)(g.default, {})
    }))
})), n.register("iUdXM", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("z5iun");
    const i = [a.default.placedSticker, a.default.droppedItem];
    var o = i
})), n.register("7ZVvv", (function(r, a) {
    e(r.exports, "default", (function() {
        return I
    }));
    var i = n("hxEiv"),
        o = n("l4uFh"),
        l = n("4y75y"),
        s = n("fywoC"),
        d = n("2FDaO"),
        u = n("69SUA"),
        c = n("iRjsB"),
        f = n("lnv5p"),
        p = n("fwdZN"),
        v = n("alREA"),
        g = n("5OQ4z"),
        m = n("4ifJF"),
        x = n("c3ah8"),
        h = n("k4lId"),
        y = n("6zpVf"),
        b = n("aNA20"),
        C = n("cJmcN"),
        T = n("k3GfJ"),
        j = n("7u0qw"),
        w = n("alTJZ");
    let k, E, S, O, F, N, A = e => e;
    const {
        useToken: R
    } = o.default;
    var I = e => {
        const {
            option: {
                id: r,
                name: n,
                description: a,
                seasonTicketRequired: o
            }
        } = e, l = s.useRef(null), {
            token: {
                borderRadius: d
            }
        } = R(), m = o && !(0, j.OwnsSeasonTicket)(), k = e => {
            m || (c.default.me.adding.devices.selectedDeviceType = r, c.default.me.adding.mode = f.AddingMode.device, c.default.me.currentAction = p.default.adding, (0, b.IsTutorial)() && (0, C.default)(T.AddScreen.home), (0, y.EmitTutorialEvent)({
                event: y.TutorialEventName.SELECT_DEVICE_TO_ADD,
                deviceTypeId: r
            }), e && e())
        };
        return (0, g.default)(t(x).Input.Keyboard.KeyCodes.ENTER, (() => {
            e.focused && k()
        }), [e.focused, k]), s.useEffect((() => {
            var t;
            e.focused && (null === (t = l.current) || void 0 === t || t.scrollIntoView({
                block: "center"
            }))
        }), [e.focused]), (0, i.jsxs)(M, {
            ref: l,
            borderRadius: d,
            focused: e.focused,
            onClick: () => {
                k((() => {
                    (0, h.playClickSound)()
                }))
            },
            children: [(0, i.jsx)(D, {
                children: (0, i.jsx)(z, {
                    src: (0, v.default)("editor/icons/device.png")
                })
            }), (0, i.jsxs)(K, {
                children: [o ? (0, i.jsx)("div", {
                    style: {
                        marginBottom: 2
                    },
                    children: (0, i.jsx)(w.SeasonTicketExclusive, {})
                }) : null, (0, i.jsx)(P, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: u.Fonts.FugazOne
                    },
                    children: n
                }), a ? (0, i.jsx)(B, {
                    children: a
                }) : null]
            })]
        })
    };
    const M = d.default.div.attrs({
            className: "flex vc"
        })(k || (k = A`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${0}px;
  border: 2px solid
    ${0};
  padding: 25px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius), (e => e.focused ? "#ffca28" : "rgba(255, 255, 255, 0.1)")),
        D = (0, d.default)(m.Centered)(E || (E = A`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`)),
        z = d.default.img(S || (S = A`
  max-height: 100%;
  max-width: 100%;
`)),
        K = d.default.div(O || (O = A``)),
        P = (0, d.default)(l.default.Title)(F || (F = A``)),
        B = (0, d.default)(l.default.Text)(N || (N = A``))
})), n.register("hDlKY", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("hxEiv"),
        i = n("4y75y");
    n("fywoC");
    var o = () => (0, a.jsx)(i.default.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    })
})), n.register("2SH1B", (function(t, r) {
    e(t.exports, "CanAddDeviceForCurrentMapStyle", (function() {
        return o
    }));
    var a = n("2mjL9"),
        i = n("4L0xs");
    const o = e => {
        const {
            deviceTypeId: t
        } = e, r = (0, a.FetchDeviceOptionById)(t);
        return !!r && (!r.supportedMapStyles || r.supportedMapStyles.includes((0, i.GetCurrentMapStyle)()))
    }
})), n.register("4L0xs", (function(t, r) {
    e(t.exports, "GetCurrentMapStyle", (function() {
        return i
    }));
    var a = n("iRjsB");
    const i = () => a.default.session.mapStyle
})), n.register("pnqat", (function(t, r) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = n("hxEiv");
    n("fywoC");
    var i = n("2FDaO"),
        o = n("z5iun"),
        l = n("9j0ee"),
        s = n("3sJmi"),
        d = n("1ZCZ6"),
        u = n("alREA"),
        c = n("46bRO");
    let f;
    const p = `${(0,s.CapitalizeFirstLetter)(d.default.device.plural)}`,
        v = e => (0, u.default)(`editor/icons/device_collections/${e}.svg`),
        g = [{
            icon: v("starting"),
            name: `Starting ${p}`,
            description: `${p} you might need for every map`,
            devices: [o.default.characterSpawnPad, o.default.trigger, o.default.gimkitLiveQuestion, o.default.itemGranter, o.default.itemSpawner, o.default.sentry, o.default.startingInventory, o.default.wireRepeater, o.default.teleporter]
        }, {
            icon: v("inventory"),
            name: `Inventory ${p}`,
            description: `${p} to manage what items & resources players have`,
            devices: [o.default.vendingMachine, o.default.itemGranter, o.default.startingInventory, o.default.itemSpawner, o.default.inventoryItemManager]
        }, {
            icon: v("interaction"),
            name: `Interaction ${p}`,
            description: `${p} to create rich interactions`,
            devices: [o.default.button, o.default.vendingMachine, o.default.zone, o.default.textExplainer, o.default.dialogue, o.default.textBillboard]
        }, {
            icon: v("new"),
            name: `New ${p}`,
            description: `${p} recently added to ${c.COMPANY_NAME} Creative`,
            devices: [o.default.popupListItem, o.default.character, o.default.dialogue, o.default.dialogueAction, o.default.damager, o.default.cameraPoint, o.default.playerPositionDetector, o.default.itemImage, o.default.ball, o.default.ballZone, o.default.craftingTable, o.default.craftingRecipe, o.default.damageBoost]
        }];
    var m = e => (0, a.jsx)(x, {
        children: g.map((t => (0, a.jsx)(l.default, {
            collection: t,
            isOpen: t.name === e.openCollectionName,
            open: () => e.open(t.name),
            close: () => e.open("")
        }, `device-collection-${t.name}`)))
    });
    const x = i.default.div.attrs({
        className: "maxWidth"
    })(f || (f = (e => e)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`))
})), n.register("9j0ee", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv");
    n("fywoC");
    var i = n("2FDaO"),
        o = n("9xElQ"),
        l = n("l4uFh"),
        s = n("4y75y"),
        d = n("4ifJF"),
        u = n("69SUA"),
        c = n("ieqcM"),
        f = n("ik3h7");
    let p, v, g = e => e;
    const {
        useToken: m
    } = l.default;
    var x = e => {
        const {
            token: {
                borderRadius: t
            }
        } = m(), {
            collection: {
                icon: r,
                name: n,
                description: i,
                devices: l
            }
        } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(h, {
                borderRadius: t,
                onClick: e.open,
                children: [(0, a.jsx)(y, {
                    src: r
                }), (0, a.jsx)(s.default.Title, {
                    level: 4,
                    style: {
                        fontFamily: u.Fonts.FugazOne,
                        marginBottom: 2
                    },
                    className: "allCaps",
                    children: n
                }), (0, a.jsx)(s.default.Text, {
                    children: (0, a.jsx)(f.default, {
                        children: i
                    })
                })]
            }), (0, a.jsx)(o.default, {
                open: e.isOpen,
                onClose: e.close,
                title: n,
                width: 500,
                children: (0, a.jsx)(c.default, {
                    list: l
                })
            })]
        })
    };
    const h = (0, i.default)(d.CenteredColumn)(p || (p = g`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${0}px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  min-height: 196px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius)),
        y = i.default.img(v || (v = g`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`))
}));