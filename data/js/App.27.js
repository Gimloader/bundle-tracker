function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, r, i) {
    Object.defineProperty(e, t, {
        get: r,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("hUAdn", (function(i, l) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return O
    }));
    var o = r("hxEiv"),
        a = r("fC6cp"),
        d = r("4y75y"),
        s = r("lpEVe"),
        u = r("fywoC"),
        f = r("2FDaO"),
        c = r("8UJqa"),
        v = r("fwdZN"),
        m = r("beZrA"),
        p = r("6TkBw"),
        g = r("3RQjs"),
        h = r("gtSUE"),
        x = r("c3ah8"),
        y = r("5OQ4z"),
        T = r("iRjsB"),
        j = r("lnv5p"),
        M = r("eyQZa"),
        w = r("jaAot"),
        R = r("k4bqt"),
        C = r("dSzUP"),
        b = r("69SUA"),
        F = r("4ifJF"),
        z = r("eNTml"),
        L = r("8MQ63");
    let E;
    var O = (0, s.observer)((() => {
        const t = (0, m.default)(),
            r = () => {
                (0, g.default)(v.default.none)
            };
        u.useEffect((() => {
            const e = (0, p.default)(h.default.Removing.SwitchToAddingMode(), (() => {
                T.default.me.adding.mode = j.AddingMode.terrain, (0, g.default)(v.default.adding)
            }));
            return () => {
                e()
            }
        }), []);
        const i = (0, M.default)();
        return u.useEffect((() => {
            i || r()
        }), [i, r]), (0, y.default)(e(x).Input.Keyboard.KeyCodes.ESC, r, [r]), (0, o.jsx)(R.Container, {
            children: (0, o.jsxs)(R.Content, {
                style: {
                    paddingTop: 53
                },
                children: [(0, o.jsx)(C.default, {
                    onClick: r,
                    padding: 20,
                    fontSize: 20
                }), (0, o.jsx)(d.default.Title, {
                    level: 2,
                    style: {
                        fontFamily: b.Fonts.FugazOne,
                        textTransform: "uppercase",
                        color: c.default.White
                    },
                    children: "Eraser"
                }), (0, o.jsx)(A, {
                    children: t ? (0, o.jsx)(L.default, {
                        removalInfo: t
                    }) : (0, o.jsx)(z.default, {})
                }), (0, o.jsx)(a.default, {
                    style: {
                        borderTopColor: "rgba(255,255,255,0.25)"
                    }
                }), (0, o.jsx)(w.default, {})]
            })
        })
    }));
    const A = (0, f.default)(F.Centered).attrs({
        className: "maxWidth"
    })(E || (E = (e => e)`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`))
})), r.register("beZrA", (function(e, i) {
    t(e.exports, "default", (function() {
        return f
    }));
    var l = r("fywoC"),
        n = r("iRjsB"),
        o = r("2Tpsx"),
        a = r("3sJmi"),
        d = r("1ZCZ6"),
        s = r("z5iun"),
        u = r("5zxsa");
    var f = () => {
        const [e, t] = l.useState(!1), [r, i] = l.useState(""), [f, c] = l.useState(""), [v, m] = l.useState("");
        return l.useEffect((() => {
            const e = (0, u.ReactionToMultipleProps)([() => n.default.me.removing.tilesToRemove, () => n.default.me.removing.deviceIdToRemove, () => n.default.me.removing.wireIdToRemove], (() => {
                const e = (() => {
                    const {
                        me: {
                            removing: {
                                tilesToRemove: e,
                                deviceIdToRemove: t,
                                wireIdToRemove: r
                            }
                        }
                    } = n.default;
                    let i, l, u;
                    if (e.length)
                        if (i = (0, a.CapitalizeFirstLetter)(d.default.terrain.singular), l = `Unknown ${i}`, 1 === e.length) {
                            const t = n.default.world.terrain.tiles.get(e[0].id);
                            if (t) {
                                const e = n.default.worldOptions.terrainOptions.find((e => e.id === t.terrain));
                                e && (l = e.name), u = t.collides ? "Wall" : "Floor"
                            }
                        } else l = `Multiple ${(0,a.CapitalizeFirstLetter)(d.default.terrain.singular)} Pieces`;
                    if (t) {
                        i = (0, a.CapitalizeFirstLetter)(d.default.device.singular), l = `Unknown ${i}`;
                        const e = n.default.world.devices.devices.get(t);
                        e && (e.deviceOption.id === s.default.prop && (i = (0, a.CapitalizeFirstLetter)(d.default.prop.singular), l = `Unknown ${i}`), l = (0, o.FetchDeviceName)(t))
                    }
                    return r && (i = (0, a.CapitalizeFirstLetter)(d.default.wire.singular), l = i), i && l ? {
                        type: i,
                        name: l,
                        description: u
                    } : null
                })();
                e ? (i(e.type), c(e.name), m(e.description || ""), t(!0)) : t(!1)
            }), {
                fireImmediately: !0
            });
            return () => e()
        }), []), e ? {
            type: r,
            name: f,
            description: v
        } : null
    }
})), r.register("5zxsa", (function(e, i) {
    t(e.exports, "ReactionToMultipleProps", (function() {
        return n
    }));
    var l = r("4MuSt");
    const n = (e, t, r) => {
        const i = [];
        return e.forEach((e => {
            const n = (0, l.reaction)(e, t, r);
            i.push(n)
        })), () => {
            i.forEach((e => {
                e()
            }))
        }
    }
})), r.register("jaAot", (function(e, i) {
    t(e.exports, "default", (function() {
        return T
    }));
    var l = r("hxEiv"),
        n = r("lqzWa"),
        o = r("i5Qjx"),
        a = r("4y75y"),
        d = r("lpEVe"),
        s = r("fywoC"),
        u = r("2FDaO"),
        f = r("8UJqa"),
        c = r("gwxnT"),
        v = r("dmyzc"),
        m = r("a2IIC"),
        p = r("69SUA"),
        g = r("2ri2K"),
        h = r("3sJmi"),
        x = r("1ZCZ6");
    let y;
    var T = (0, d.observer)((() => {
        const {
            me: {
                removing: e
            }
        } = (0, c.default)(), t = s.useRef(), r = s.useRef(), i = s.useRef(), a = () => {
            var e, l, n, o, a, d;
            null == t || null === (e = t.current) || void 0 === e || null === (l = e.blur) || void 0 === l || l.call(e), null == r || null === (n = r.current) || void 0 === n || null === (o = n.blur) || void 0 === o || o.call(n), null == i || null === (a = i.current) || void 0 === a || null === (d = a.blur) || void 0 === d || d.call(a)
        }, d = e => {
            const t = e === m.RemovingMode.propsAndDevices ? `${(0,h.CapitalizeFirstLetter)(x.default.prop.plural)} & ${(0,h.CapitalizeFirstLetter)(x.default.device.plural)}` : e === m.RemovingMode.tiles ? (0, h.CapitalizeFirstLetter)(x.default.terrain.singular) : e === m.RemovingMode.wires ? (0, h.CapitalizeFirstLetter)(x.default.wire.plural) : e;
            return (0, l.jsx)(n.default.Option, {
                value: e,
                children: t
            }, `remove-options-mode-${e}`)
        }, u = (e, t) => {
            if (e === m.RemovingTilesMode.allLayers) return (0, l.jsx)(n.default.Option, {
                ref: r,
                value: 99,
                children: e
            }, `remove-tiles-mode-${e}`);
            if (e === m.RemovingTilesMode.topLayer) return (0, l.jsx)(n.default.Option, {
                value: 100,
                children: e
            }, `remove-tiles-mode-${e}`);
            const i = `${e}-${t}`;
            return (0, l.jsx)(n.default.Option, {
                value: t,
                children: t + " - " + g.TerrainLayerNames[t - 1] || "Layer"
            }, `remove-tiles-mode-${i}`)
        };
        return (0, l.jsx)(v.default, {
            className: "maxWidth",
            children: (0, l.jsxs)(o.default, {
                className: "maxWidth",
                direction: "vertical",
                size: 13,
                children: [(0, l.jsxs)(j, {
                    children: [(0, l.jsx)(M, {
                        children: "Eraser Mode:"
                    }), (0, l.jsxs)(n.default, {
                        ref: t,
                        style: {
                            width: 200
                        },
                        value: e.removingMode,
                        onChange: t => {
                            e.removingMode = t, a()
                        },
                        children: [d(m.RemovingMode.everything), d(m.RemovingMode.tiles), d(m.RemovingMode.propsAndDevices), d(m.RemovingMode.wires)]
                    })]
                }), e.removingMode === m.RemovingMode.tiles ? (0, l.jsxs)(j, {
                    children: [(0, l.jsx)(M, {
                        children: "Layer:"
                    }), (0, l.jsxs)(n.default, {
                        ref: r,
                        style: {
                            width: 200
                        },
                        value: e.removingTilesMode === m.RemovingTilesMode.allLayers ? 99 : e.removingTilesMode === m.RemovingTilesMode.topLayer ? 100 : e.removingTilesLayer,
                        onChange: t => {
                            99 === t ? e.removingTilesMode = m.RemovingTilesMode.allLayers : 100 === t ? e.removingTilesMode = m.RemovingTilesMode.topLayer : (e.removingTilesMode = m.RemovingTilesMode.layer, e.removingTilesLayer = t), a()
                        },
                        children: [u(m.RemovingTilesMode.topLayer), u(m.RemovingTilesMode.allLayers), Array.from(Array(5).keys()).map((e => u(m.RemovingTilesMode.layer, e + 1)))]
                    })]
                }) : null, e.removingMode === m.RemovingMode.tiles ? (0, l.jsxs)(j, {
                    children: [(0, l.jsx)(M, {
                        children: "Eraser Size:"
                    }), (0, l.jsx)(n.default, {
                        ref: i,
                        style: {
                            width: 200
                        },
                        value: e.removingTilesEraserSize,
                        onChange: t => {
                            e.removingTilesEraserSize = t, a()
                        },
                        children: Array.from(Array(3).keys()).map((e => (e => (0, l.jsx)(n.default.Option, {
                            value: e,
                            children: e
                        }, `remove-tiles-eraser-size-${e}`))(e + 1)))
                    })]
                }) : null]
            })
        })
    }));
    const j = u.default.div.attrs({
            className: "maxWidth vc between flex"
        })(y || (y = (e => e)``)),
        M = e => (0, l.jsx)(a.default.Text, {
            style: {
                fontWeight: p.FontWeights.Bold,
                color: f.default.White
            },
            children: e.children
        })
})), r.register("2ri2K", (function(e, r) {
    t(e.exports, "TerrainLayerNames", (function() {
        return i
    }));
    const i = ["Bottom", "Lower", "Middle", "Upper", "Top"]
})), r.register("eNTml", (function(e, i) {
    t(e.exports, "default", (function() {
        return v
    }));
    var l = r("hxEiv");
    r("fywoC");
    var n = r("2FDaO"),
        o = r("4ifJF"),
        a = r("py2Xr"),
        d = r("4y75y"),
        s = r("lKmIF");
    let u, f, c = e => e;
    var v = () => (0, l.jsxs)(m, {
        children: [(0, l.jsx)(p, {
            children: (0, l.jsx)(a.default, {
                name: "fas fa-eraser"
            })
        }), (0, l.jsx)("div", {
            children: (0, l.jsx)(d.default.Text, {
                style: {
                    color: s.default.White
                },
                children: "Hover over anything and click to erase it!"
            })
        })]
    });
    const m = (0, n.default)(o.CenteredColumn)(u || (u = c``)),
        p = n.default.div(f || (f = c`
  font-size: 24px;
  color: ${0};
`), s.default.White)
})), r.register("8MQ63", (function(e, i) {
    t(e.exports, "default", (function() {
        return c
    }));
    var l = r("hxEiv");
    r("fywoC");
    var n = r("2FDaO"),
        o = r("4y75y"),
        a = r("4ifJF"),
        d = r("lKmIF");
    let s, u, f = e => e;
    var c = e => {
        const {
            removalInfo: {
                type: t,
                name: r,
                description: i
            }
        } = e;
        return (0, l.jsxs)(v, {
            children: [(0, l.jsx)(m, {
                style: i ? {
                    marginBottom: 10
                } : void 0,
                children: (0, l.jsx)(o.default.Text, {
                    italic: !0,
                    children: t
                })
            }), (0, l.jsx)("div", {
                children: (0, l.jsx)(o.default.Title, {
                    style: {
                        color: d.default.White
                    },
                    level: 4,
                    children: r
                })
            }), i ? (0, l.jsx)("div", {
                children: (0, l.jsx)(o.default.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: i
                })
            }) : null]
        })
    };
    const v = (0, n.default)(a.CenteredColumn).attrs({
            className: "maxAll"
        })(s || (s = f``)),
        m = n.default.div(u || (u = f``))
})), r.register("6gxPk", (function(e, i) {
    t(e.exports, "default", (function() {
        return s
    }));
    var l = r("dnh3u"),
        n = r("fywoC"),
        o = r("5D7Fe"),
        a = r("dwKuN"),
        d = function(e, t) {
            return n.createElement(a.default, (0, l.default)((0, l.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    d.displayName = "DownOutlined";
    var s = n.forwardRef(d)
})), r.register("5D7Fe", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var i = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
}));