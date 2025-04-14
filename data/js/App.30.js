function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("jwo4h", (function(n, r) {
    var a;
    a = n.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), t(n.exports, "default", (function() {
        return D
    }));
    var d = i("hxEiv"),
        l = i("fywoC"),
        o = i("3RQjs"),
        s = i("fwdZN"),
        u = i("c3ah8"),
        c = i("5OQ4z"),
        f = i("2FDaO"),
        x = i("6vbUb"),
        p = i("dmyzc"),
        v = i("dSzUP"),
        m = i("8iT9z"),
        g = i("3EQgf"),
        h = i("2lHpi"),
        b = i("lpEVe"),
        y = i("iRjsB"),
        j = i("gwxnT"),
        w = i("dSRU0"),
        C = i("61gNY"),
        k = i("efvg4"),
        R = i("4MuSt"),
        W = i("k4lId"),
        E = i("6zpVf");
    let O, F, N = e => e;
    var D = (0, b.observer)((() => {
        const {
            world: {
                wires: t
            }
        } = (0, j.default)(), [i, n] = l.useState(t.wires.get(y.default.me.editing.wire.currentlyEditedWireId)), [r, a] = l.useState(void 0 !== i), f = () => {
            (0, o.default)(s.default.none)
        };
        (0, w.useTimeoutWhen)(f, 25, !r), (0, c.default)(e(u).Input.Keyboard.KeyCodes.ESC, f, [f]), (0, m.useInputBlockingUI)();
        const x = e => {
            if ((0, W.playClickSound)(), t.wires.has(i.id)) {
                const t = e(i);
                (0, E.EmitTutorialEvent)({
                    event: E.TutorialEventName.CONFIGURE_WIRE,
                    wire: t
                }), (0, C.default)(t, !0), (0, k.default)({
                    startDevice: t.startDevice,
                    endDevice: t.endDevice,
                    startConnection: t.startConnection,
                    endConnection: t.endConnection
                })
            }
        };
        return l.useEffect((() => {
            const e = (0, R.reaction)((() => y.default.world.wires.wires.get(y.default.me.editing.wire.currentlyEditedWireId)), (e => {
                e ? (a(!0), n(e)) : a(!1)
            }));
            return () => e()
        }), []), i ? (0, d.jsx)(p.default, {
            className: "maxAll",
            children: (0, d.jsx)(z, {
                onClick: f,
                children: (0, d.jsxs)(I, {
                    children: [(0, d.jsx)(g.default, {
                        wire: i,
                        side: "left",
                        modifyWire: x
                    }), (0, d.jsx)(h.default, {}), (0, d.jsx)(g.default, {
                        wire: i,
                        side: "right",
                        modifyWire: x
                    }), (0, d.jsx)(v.default, {})]
                })
            })
        }) : null
    }));
    const z = (0, f.default)(x.motion.div).attrs({
            className: "maxAll flex-center",
            initial: {
                background: "rgba(0,0,0,0)"
            },
            animate: {
                background: "rgba(0,0,0,0.68)"
            },
            exit: {
                background: "rgba(0,0,0,0)"
            },
            transition: {
                duration: .2
            }
        })(O || (O = N`
  position: relative;
`)),
        I = (0, f.default)(x.motion.div).attrs({
            className: "maxAll flex vc",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .2
            }
        })(F || (F = N`
  padding: 25px;
  backdrop-filter: blur(3px);
`))
})), i.register("3EQgf", (function(e, n) {
    t(e.exports, "default", (function() {
        return F
    }));
    var r = i("hxEiv"),
        a = i("i5Qjx"),
        d = i("4y75y"),
        l = i("fywoC"),
        o = i("2FDaO"),
        s = i("lKmIF"),
        u = i("jC9Ys"),
        c = i("edzuz"),
        f = i("4ifJF"),
        x = i("kyM3N"),
        p = i("lVMUK"),
        v = i("lpEVe"),
        m = i("2Tpsx"),
        g = i("CqOkB"),
        h = i("iRjsB"),
        b = i("3RQjs"),
        y = i("fwdZN"),
        j = i("z5iun"),
        w = i("24AMo"),
        C = i("hYqcC");
    let k, R, W, E, O = e => e;
    var F = (0, v.observer)((e => {
        var t;
        const i = !(0, x.default)() || !(0, p.CanAddWires)(),
            n = "left" === e.side,
            o = n ? e.wire.startDevice : e.wire.endDevice,
            f = (0, g.default)(o),
            v = (null == f || null === (t = f.deviceOption) || void 0 === t ? void 0 : t.id) === j.default.wireRepeater,
            k = l.useMemo((() => {
                var e, t, i, r;
                return ((null == f || null === (e = f.deviceOption) || void 0 === e || null === (t = e.wireConfig) || void 0 === t || null === (i = t[n ? "out" : "in"]) || void 0 === i || null === (r = i.connections) || void 0 === r ? void 0 : r.map((e => ({
                    id: e.id,
                    name: e.name,
                    minimumRoleLevel: e.minimumRoleLevel,
                    maximumRoleLevel: e.maximumRoleLevel
                })))) || []).filter((e => (0, w.IsRoleLevelBetween)(e.minimumRoleLevel, e.maximumRoleLevel))).map((e => ({
                    id: e.id,
                    name: e.name
                })))
            }), [o, n]);
        return (0, r.jsxs)(N, {
            onClick: u.default,
            children: [(0, r.jsx)(D, {
                children: (0, r.jsx)(z, {
                    style: {
                        color: s.default.White
                    },
                    level: 4,
                    onClick: () => {
                        f && (h.default.me.editing.device.currentlyEditedDevice = {
                            id: f.id,
                            deviceOptionId: f.deviceOption.id
                        }, (0, b.default)(y.default.editingDevice))
                    },
                    children: (0, m.FetchDeviceName)(o)
                })
            }), v ? n ? (0, r.jsx)(C.ActionWireRepeaterContent, {}) : (0, r.jsx)(C.EventWireRepeaterContent, {}) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(I, {
                    children: (0, r.jsx)(d.default.Text, {
                        italic: !0,
                        children: n ? "When this event occurs..." : "Run this action..."
                    })
                }), (0, r.jsx)(a.default, {
                    direction: "vertical",
                    size: 10,
                    className: "maxWidth",
                    children: k.map((t => {
                        const a = t.id === (n ? e.wire.startConnection : e.wire.endConnection);
                        return (0, r.jsx)(c.default, {
                            readOnly: i,
                            onClick: () => {
                                n ? e.modifyWire((e => ({
                                    ...e,
                                    startConnection: a ? void 0 : t.id
                                }))) : e.modifyWire((e => ({
                                    ...e,
                                    endConnection: a ? void 0 : t.id
                                })))
                            },
                            selected: a,
                            children: t.name
                        }, t.id)
                    }))
                })]
            })]
        })
    }));
    const N = o.default.div.attrs({
            className: "flex-column vc scroll-y light-shadow"
        })(k || (k = O`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`)),
        D = o.default.div(R || (R = O`
  text-align: center;
  margin-bottom: 2px;
`)),
        z = (0, o.default)(d.default.Title)(W || (W = O`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`)),
        I = (0, o.default)(f.Centered).attrs({
            className: "maxWidth"
        })(E || (E = O`
  margin-bottom: 20px;
  text-align: center;
`))
})), i.register("jC9Ys", (function(e, i) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = e => {
        null == e || e.stopPropagation()
    }
})), i.register("edzuz", (function(e, n) {
    t(e.exports, "default", (function() {
        return x
    }));
    var r = i("hxEiv"),
        a = i("4y75y");
    i("fywoC");
    var d = i("2FDaO"),
        l = i("4ifJF"),
        o = i("py2Xr"),
        s = i("69SUA");
    let u, c, f = e => e;
    var x = e => (0, r.jsxs)(p, {
        onClick: e.readOnly ? void 0 : e.onClick,
        readOnly: e.readOnly,
        children: [(0, r.jsx)(v, {
            selected: e.selected,
            children: e.selected ? (0, r.jsx)(o.default, {
                name: "fas fa-check"
            }) : null
        }), (0, r.jsx)(a.default.Text, {
            style: {
                fontWeight: e.selected ? s.FontWeights.Bold : s.FontWeights.Normal
            },
            children: e.children
        })]
    });
    const p = (0, d.default)(l.VerticallyCentered)(u || (u = f`
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.23s ease;
  cursor: ${0};
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), (e => e.readOnly ? "not-allowed" : "pointer")),
        v = (0, d.default)(l.Centered)(c || (c = f`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${0};
  flex-shrink: 0;
  transition: background 0.18s ease;
`), (e => e.selected ? "#269900" : "transparent"))
})), i.register("2Tpsx", (function(e, n) {
    t(e.exports, "FetchDeviceName", (function() {
        return l
    }));
    var r = i("z5iun"),
        a = i("7w7xg"),
        d = i("iRjsB");
    const l = e => {
        const t = d.default.world.devices.devices.get(e);
        if (!t) return "";
        if (t.name) return t.name;
        if (t.deviceOption.id === r.default.prop) {
            const e = t.options;
            if (e.propId) {
                var i;
                const t = null === (i = (0, a.default)(e.propId)) || void 0 === i ? void 0 : i.name;
                if (t) return t
            }
        }
        return t.deviceOption.name
    }
})), i.register("hYqcC", (function(e, n) {
    t(e.exports, "ActionWireRepeaterContent", (function() {
        return p
    })), t(e.exports, "EventWireRepeaterContent", (function() {
        return v
    }));
    var r = i("hxEiv"),
        a = i("4y75y");
    i("fywoC");
    var d = i("2FDaO"),
        l = i("py2Xr"),
        o = i("4ifJF"),
        s = i("8UJqa");
    let u, c, f = e => e;
    const x = e => (0, r.jsxs)(m, {
            children: [(0, r.jsx)(g, {
                children: (0, r.jsx)(l.default, {
                    name: "fas fa-plug"
                })
            }), (0, r.jsx)(a.default.Text, {
                style: {
                    color: s.default.White
                },
                children: e.children
            })]
        }),
        p = () => (0, r.jsx)(x, {
            children: "When the wire repeater receives a pulse..."
        }),
        v = () => (0, r.jsx)(x, {
            children: "Repeat the wire pulse!"
        }),
        m = (0, d.default)(o.CenteredColumn).attrs({
            className: "maxWidth"
        })(u || (u = f`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`)),
        g = d.default.div(c || (c = f`
  font-size: 24px;
  margin-bottom: 6px;
`))
})), i.register("2lHpi", (function(e, n) {
    t(e.exports, "default", (function() {
        return x
    }));
    var r = i("hxEiv");
    i("fywoC");
    var a = i("2FDaO"),
        d = i("4ifJF"),
        l = i("py2Xr");
    let o, s, u, c = e => e;
    const f = "rgba(255,255,255,0.8)";
    var x = () => (0, r.jsxs)(p, {
        children: [(0, r.jsx)(v, {}), (0, r.jsx)(m, {
            children: (0, r.jsx)(l.default, {
                name: "fas fa-caret-right"
            })
        })]
    });
    const p = (0, a.default)(d.Centered)(o || (o = c`
  flex: 1;
  padding: 0px 30px;
`)),
        v = a.default.div(s || (s = c`
  height: 4px;
  flex: 1;
  background: ${0};
`), f),
        m = a.default.div(u || (u = c`
  flex-shrink: 0;
  color: ${0};
  font-size: 42px;
  line-height: 1;
`), f)
}));