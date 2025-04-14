function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("fnTR1", (function(t, n) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return T
    }));
    var d = i("hxEiv"),
        a = i("fywoC"),
        o = i("2FDaO"),
        s = i("3RQjs"),
        l = i("fwdZN"),
        c = i("dmyzc"),
        u = i("6vbUb"),
        f = i("11XIi"),
        v = i("lKmIF"),
        p = i("jWZl7"),
        g = i("59VVw"),
        m = i("1Ufie"),
        x = i("8iT9z"),
        h = i("lpEVe"),
        y = i("gwxnT"),
        C = i("377U5"),
        w = i("db8v8"),
        j = i("4MuSt"),
        b = i("h6y3j"),
        O = i("hNoTG"),
        E = i("6zpVf");
    let D;
    const I = a.lazy((() => i("3eM1I")));
    var T = (0, h.observer)((() => {
        const {
            me: e,
            world: {
                devices: t
            }
        } = (0, y.default)(), {
            options: i,
            hooks: n,
            position: r
        } = (0, g.default)(), {
            device: o,
            deviceOption: u
        } = (0, m.default)(), f = (0, b.IsVisualEditingActive)();
        a.useEffect((() => {
            if (f) return () => {};
            return (0, x.AddInputBlockingUI)().dispose
        }), [f]);
        const {
            start: v,
            clear: h
        } = (0, w.useTimeout)((() => {
            t.devices.get(e.editing.device.currentlyEditedDevice.id) || D()
        }), 25);
        if (a.useEffect((() => {
                const i = (0, j.when)((() => !t.devices.get(e.editing.device.currentlyEditedDevice.id)), (() => {
                        v()
                    })),
                    n = (0, j.when)((() => !!t.devices.get(e.editing.device.currentlyEditedDevice.id)), (() => {
                        h()
                    }));
                return () => {
                    i(), n()
                }
            }), [e.editing.device.currentlyEditedDevice.id]), !o || !u) return null;
        const D = () => {
            (0, s.default)(l.default.none), (0, E.EmitTutorialEvent)({
                event: E.TutorialEventName.CLOSE_DEVICE_OPTIONS,
                device: o
            })
        };
        return f ? (0, d.jsx)(O.default, {}) : (0, d.jsx)(c.default, {
            className: "maxAll",
            children: (0, d.jsx)(k, {
                onClick: D,
                children: (0, d.jsx)(a.Suspense, {
                    fallback: null,
                    children: e.editing.device.screen === C.EditingDeviceScreen.grid ? (0, d.jsx)(I, {
                        close: () => {
                            e.editing.device.screen = C.EditingDeviceScreen.home
                        },
                        deviceId: o.id
                    }) : (0, d.jsx)(p.default, {
                        device: o,
                        deviceOption: u,
                        position: r,
                        options: i,
                        hooks: n,
                        close: D
                    })
                })
            })
        })
    }));
    const k = (0, o.default)(u.motion.div).attrs({
        className: "maxAll",
        transition: {
            duration: f.default.enterExit.duration,
            ease: f.default.enterExit.ease
        },
        initial: {
            background: "rgba(0,0,0,0)"
        },
        animate: {
            background: "rgba(0,0,0,0.6)"
        },
        exit: {
            background: "rgba(0,0,0,0)"
        }
    })(D || (D = (e => e)`
  color: ${0};
`), v.default.White)
})), i.register("11XIi", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        enterExit: {
            duration: .22,
            ease: "easeInOut"
        }
    }
})), i.register("jWZl7", (function(n, r) {
    e(n.exports, "DeviceEditingHomeTab", (function() {
        return v
    })), e(n.exports, "default", (function() {
        return g
    }));
    var d = i("hxEiv"),
        a = i("fywoC"),
        o = i("2FDaO"),
        s = i("dtyqG"),
        l = i("3w4cl"),
        c = i("5OQ4z"),
        u = i("c3ah8");
    let f, v;
    var p;
    (p = v || (v = {})).options = "options", p.codeGrids = "codeGrids", p.wires = "wires";
    var g = e => {
        (0, c.default)(t(u).Input.Keyboard.KeyCodes.ESC, e.close, [e.close]);
        const [i, n] = a.useState(v.options);
        return (0, d.jsxs)(m, {
            children: [(0, d.jsx)(s.default, {
                device: e.device,
                deviceOption: e.deviceOption,
                options: e.options,
                tab: i,
                setTab: n
            }), (0, d.jsx)(l.default, {
                device: e.device,
                options: e.options,
                hooks: e.hooks,
                position: e.position,
                deviceOption: e.deviceOption,
                tab: i
            })]
        })
    };
    const m = o.default.div.attrs({
        className: "maxAll flex between"
    })(f || (f = (e => e)``))
})), i.register("dtyqG", (function(t, n) {
    e(t.exports, "default", (function() {
        return I
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("93yIm"),
        a = i("i5Qjx"),
        o = i("eDVvK"),
        s = i("2FDaO"),
        l = i("6vbUb"),
        c = i("11XIi"),
        u = i("lpEVe"),
        f = i("2fqqD"),
        v = i("3sJmi"),
        p = i("grjnz"),
        g = i("jWZl7"),
        m = i("9mkty"),
        x = i("7c3pP"),
        h = i("1ZCZ6"),
        y = i("bnLPw"),
        C = i("h6y3j"),
        w = i("C8wkf"),
        j = i("jC9Ys"),
        b = i("03FTx"),
        O = i("k4lId"),
        E = i("kyM3N");
    let D;
    var I = (0, u.observer)((e => {
        const {
            device: t,
            deviceOption: i,
            options: n,
            tab: s,
            setTab: l
        } = e, c = (0, f.DoesDeviceTypeHaveAvailableCodeGrids)(i.id, n), u = (0, x.DeviceHasAWireAttached)(t.id);
        return (0, r.jsxs)(T, {
            children: [(0, r.jsxs)("div", {
                className: "maxWidth",
                children: [(0, r.jsx)(b.default, {
                    deviceId: t.id
                }), (0, r.jsx)(m.default, {
                    deviceId: t.id,
                    deviceOption: i
                }), (0, r.jsxs)(a.default, {
                    direction: "vertical",
                    size: 4,
                    className: "maxWidth",
                    style: {
                        marginTop: 16
                    },
                    children: [(0, r.jsx)(o.default, {
                        icon: "fas fa-cog",
                        name: "Options",
                        selected: s === g.DeviceEditingHomeTab.options,
                        onSelect: () => {
                            l(g.DeviceEditingHomeTab.options)
                        }
                    }), c ? (0, r.jsx)(o.default, {
                        icon: "fas fa-cubes",
                        name: (0, v.CapitalizeFirstLetter)(p.default.grid.plural),
                        selected: s === g.DeviceEditingHomeTab.codeGrids,
                        onSelect: () => {
                            l(g.DeviceEditingHomeTab.codeGrids)
                        }
                    }) : null, u ? (0, r.jsx)(o.default, {
                        icon: "fas fa-plug",
                        name: (0, v.CapitalizeFirstLetter)(h.default.wire.plural),
                        selected: s === g.DeviceEditingHomeTab.wires,
                        onSelect: () => {
                            l(g.DeviceEditingHomeTab.wires)
                        }
                    }) : null]
                })]
            }), (0, r.jsx)("div", {
                children: (0, y.DoesEditedDeviceSupportVisualEditing)() && !(0, C.IsVisualEditingActive)() && (0, E.default)() ? (0, r.jsx)(d.default, {
                    size: "large",
                    type: "primary",
                    onClick: e => {
                        (0, j.default)(e), (0, O.playClickSound)(), (0, w.SetVisualEditingData)()
                    },
                    children: "Change Size"
                }) : null
            })]
        })
    }));
    const T = (0, s.default)(l.motion.div).attrs({
        className: "flex-column between maxWidth",
        transition: {
            duration: c.default.enterExit.duration,
            ease: c.default.enterExit.ease
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    })(D || (D = (e => e)`
  padding: 25px;
`))
})), i.register("eDVvK", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("2FDaO"),
        a = i("4ifJF"),
        o = i("8UJqa"),
        s = i("py2Xr"),
        l = i("4y75y"),
        c = i("jC9Ys"),
        u = i("k4lId");
    let f, v, p, g = e => e;
    var m = e => {
        const {
            selected: t,
            name: i,
            icon: n,
            onSelect: d
        } = e;
        return (0, r.jsxs)(x, {
            onClick: e => {
                (0, c.default)(e), (0, u.playClickSound)(), d()
            },
            children: [(0, r.jsx)(h, {
                selected: t,
                children: (0, r.jsx)(s.default, {
                    name: n
                })
            }), (0, r.jsx)(y, {
                children: (0, r.jsx)(l.default.Title, {
                    level: 4,
                    children: i
                })
            })]
        })
    };
    const x = (0, d.default)(a.VerticallyCentered)(f || (f = g`
  padding: 8px 15px;
  padding-left: 0px;
  border-radius: 6px;
  cursor: pointer;
  width: 300px;
  transition: all 0.2s ease;
  &:hover {
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.1);
  }
`)),
        h = (0, d.default)(a.Centered)(v || (v = g`
  height: 36px;
  width: 36px;
  border: 2px solid ${0};
  background: ${0};
  border-radius: 50%;
  transition: background 0.2s ease;
`), o.default.White, (e => e.selected ? "#269900" : "rgba(0,0,0,0.2)")),
        y = d.default.div(p || (p = g`
  margin-left: 14px;
`))
})), i.register("jC9Ys", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        null == e || e.stopPropagation()
    }
})), i.register("2fqqD", (function(t, n) {
    e(t.exports, "AvailableCodeGridsForDeviceType", (function() {
        return c
    })), e(t.exports, "DoesDeviceTypeHaveAvailableCodeGrids", (function() {
        return u
    }));
    var r = i("gBeUT"),
        d = i("iRjsB"),
        a = i("lrbbC"),
        o = i("9OMU0"),
        s = i("bSnFK"),
        l = i("24AMo");
    const c = (e, t) => {
            var i, n;
            const c = d.default.worldOptions.deviceOptions.find((t => t.id === e));
            if (!c) return [];
            if (!(0, s.CanAddDeviceType)(e, t)) return [];
            if (!(0, o.CanAddCodeGrids)()) return [];
            let u = [];
            const {
                codeGridSchema: f
            } = c;
            return f.allowChannelGrids && (0, l.IsRoleLevelBetween)(null == f || null === (i = f.channelGridsRoleLevel) || void 0 === i ? void 0 : i.min, null == f || null === (n = f.channelGridsRoleLevel) || void 0 === n ? void 0 : n.max) && u.push({
                type: r.default.broadcastMessage,
                name: "When receiving on channel..."
            }), f.triggers.forEach((e => {
                (0, a.CanAddCodeGrid)(c.id, e.type) && u.push({
                    type: e.type,
                    name: e.name
                })
            })), u
        },
        u = (e, t) => !!c(e, t).length
})), i.register("lrbbC", (function(t, n) {
    e(t.exports, "CanAddCodeGrid", (function() {
        return a
    }));
    var r = i("2mjL9"),
        d = i("24AMo");
    const a = (e, t) => {
        const i = (0, r.FetchDeviceOptionById)(e);
        if (!i) return !1;
        const n = i.codeGridSchema.triggers.find((e => e.type === t));
        if (!n) return !1;
        const a = n.minimumRoleLevel,
            o = n.maximumRoleLevel;
        return (0, d.IsRoleLevelBetween)(a, o)
    }
})), i.register("9OMU0", (function(t, n) {
    e(t.exports, "CanAddCodeGrids", (function() {
        return a
    }));
    var r = i("l48mT"),
        d = i("24AMo");
    const a = () => {
        const e = r.RoleLevelPermissions.codeGrids.minimumRoleLevel,
            t = r.RoleLevelPermissions.codeGrids.maximumRoleLevel;
        return (0, d.IsRoleLevelBetween)(e, t)
    }
})), i.register("9mkty", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var r = i("hxEiv"),
        d = i("fywoC"),
        a = i("hDE2l"),
        o = i("5zxsa"),
        s = i("iRjsB"),
        l = i("4y75y"),
        c = i("iMOcM"),
        u = i("8MAwC");
    var f = e => {
        const {
            deviceId: t,
            deviceOption: i
        } = e, [n, f] = d.useState((0, a.GetRemovingDeviceTotalMemoryCost)({
            deviceId: t
        }));
        return d.useEffect((() => (0, o.ReactionToMultipleProps)([() => {
            var e;
            return null === (e = s.default.world.devices.codeGrids.get(t)) || void 0 === e ? void 0 : e.items.size
        }, () => s.default.memorySystem.counters.devices.get(i.id)], (() => {
            f((0, a.GetRemovingDeviceTotalMemoryCost)({
                deviceId: t
            }))
        }), {
            fireImmediately: !0
        })), [t]), (0, r.jsxs)(l.default.Text, {
            italic: !0,
            children: [(0, c.numberWithCommas)(n), " ", u.MemoryName]
        })
    }
})), i.register("5zxsa", (function(t, n) {
    e(t.exports, "ReactionToMultipleProps", (function() {
        return d
    }));
    var r = i("4MuSt");
    const d = (e, t, i) => {
        const n = [];
        return e.forEach((e => {
            const d = (0, r.reaction)(e, t, i);
            n.push(d)
        })), () => {
            n.forEach((e => {
                e()
            }))
        }
    }
})), i.register("7c3pP", (function(t, n) {
    e(t.exports, "WiresStartingFromDevice", (function() {
        return d
    })), e(t.exports, "WiresEndingAtDevice", (function() {
        return a
    })), e(t.exports, "DeviceHasAWireAttached", (function() {
        return o
    }));
    var r = i("iRjsB");
    const d = e => Array.from(r.default.world.wires.wires.keys()).filter((t => t.startsWith(e))).map((e => r.default.world.wires.wires.get(e))),
        a = e => Array.from(r.default.world.wires.wires.keys()).filter((t => t.endsWith(e))).map((e => r.default.world.wires.wires.get(e))),
        o = e => !(!d(e).length && !a(e).length)
})), i.register("1ZCZ6", (function(t, i) {
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
})), i.register("bnLPw", (function(t, n) {
    e(t.exports, "DoesEditedDeviceSupportVisualEditing", (function() {
        return a
    }));
    var r = i("iRjsB"),
        d = i("gwuwo");
    const a = () => {
        var e;
        const t = (0, d.default)().worldManager.devices.getDeviceById(null !== (e = r.default.me.editing.device.currentlyEditedDevice.id) && void 0 !== e ? e : "");
        return !!t && t.visualEditing.uses()
    }
})), i.register("C8wkf", (function(t, n) {
    e(t.exports, "SetVisualEditingData", (function() {
        return s
    }));
    var r = i("dWqri"),
        d = i("iRjsB"),
        a = i("fCcDT"),
        o = i("ittx1");
    const s = () => {
        const e = (0, o.FetchCurrentlyEditedDevice)();
        if (!e) return;
        e.parts.forceHide(), e.colliders.hideDebug(), e.shadows.hide(), e.onHide && e.onHide(), d.default.me.editing.device.visualEditing = {
            active: !0,
            instruction: "",
            keyboardHelpers: [],
            cursor: "default",
            id: e.id
        };
        const t = e.layers.isOnNaturalDepth() ? void 0 : e.layers.getDepth();
        (0, a.default)({
            id: r.VisualEditingConstants.previewId,
            deviceOption: e.deviceOption,
            isPreview: !0,
            options: {
                ...e.options
            },
            placedByClient: !0,
            state: {
                ...e.deviceOption.defaultState
            },
            x: e.x,
            y: e.y,
            depth: t,
            name: e.name
        })
    }
})), i.register("03FTx", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var r = i("hxEiv"),
        d = i("b9Zw0"),
        a = i("fBuQJ"),
        o = i("e4KJZ"),
        s = i("4y75y"),
        l = i("fywoC"),
        c = i("8UJqa"),
        u = i("2Tpsx"),
        f = i("dmyzc"),
        v = i("iMOcM"),
        p = i("jC9Ys"),
        g = i("kyM3N"),
        m = i("lpEVe"),
        x = i("gwuwo"),
        h = i("8gln7");
    var y = (0, m.observer)((e => {
        const [t, i, n] = (0, v.useBoolean)(!1), [m, y] = l.useState(""), C = l.useRef(null);
        l.useEffect((() => {
            var e;
            t && (y(""), null == C || null === (e = C.current) || void 0 === e || e.focus())
        }), [t]);
        const w = () => {
                const t = null == m ? void 0 : m.trim(),
                    i = (0, x.default)().worldManager.devices.getDeviceById(e.deviceId);
                i && ((0, h.default)({
                    depth: i.layers.getOptionsDepth(),
                    layerId: i.layers.getOptionsLayer(),
                    name: t,
                    deviceOption: i.deviceOption,
                    id: i.id,
                    isPreview: !1,
                    options: i.options,
                    placedByClient: !1,
                    state: i.deviceOption.defaultState,
                    x: i.x,
                    y: i.y
                }), n())
            },
            j = (0, g.default)();
        return (0, r.jsx)(f.default, {
            className: "maxWidth",
            children: (0, r.jsxs)("div", {
                className: "flex",
                onClick: p.default,
                children: [(0, r.jsx)(o.default, {
                    title: j ? "Rename" : void 0,
                    placement: "right",
                    children: (0, r.jsx)(s.default.Title, {
                        level: 2,
                        style: {
                            color: c.default.White,
                            marginBottom: 2,
                            cursor: j ? "pointer" : "auto"
                        },
                        onClick: j ? i : void 0,
                        children: (0, u.FetchDeviceName)(e.deviceId)
                    })
                }), (0, r.jsxs)(a.default, {
                    open: t && j,
                    onCancel: n,
                    onOk: w,
                    children: [(0, r.jsx)(s.default.Title, {
                        level: 5,
                        children: "Change name"
                    }), (0, r.jsx)(d.default, {
                        ref: C,
                        maxLength: 64,
                        style: {
                            marginTop: 10
                        },
                        placeholder: "New name...",
                        value: m,
                        onChange: e => {
                            y(e.target.value)
                        },
                        onPressEnter: w
                    })]
                })]
            })
        })
    }))
})), i.register("2Tpsx", (function(t, n) {
    e(t.exports, "FetchDeviceName", (function() {
        return o
    }));
    var r = i("z5iun"),
        d = i("7w7xg"),
        a = i("iRjsB");
    const o = e => {
        const t = a.default.world.devices.devices.get(e);
        if (!t) return "";
        if (t.name) return t.name;
        if (t.deviceOption.id === r.default.prop) {
            const e = t.options;
            if (e.propId) {
                var i;
                const t = null === (i = (0, d.default)(e.propId)) || void 0 === i ? void 0 : i.name;
                if (t) return t
            }
        }
        return t.deviceOption.name
    }
})), i.register("8gln7", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var r = i("gwuwo"),
        d = i("fCcDT"),
        a = i("5NW69"),
        o = i("CqOkB");
    var s = e => {
        const t = (0, r.default)().worldManager.devices.getDeviceById(e.id);
        if (!t) return;
        const i = (0, o.default)(e.id);
        if (!i) return;
        const n = e.hooks || i.hooks;
        (0, d.default)({
            ...e,
            hooks: n,
            placeInstantly: !0,
            onPlace: i => {
                i && (0, a.default)({
                    id: t.id,
                    deviceTypeId: t.deviceOption.id,
                    options: JSON.stringify(e.options),
                    x: e.x,
                    y: e.y,
                    depth: i.layers.getOptionsDepth(),
                    layerId: i.layers.getOptionsLayer(),
                    name: e.name,
                    hooks: n
                })
            }
        })
    }
})), i.register("3w4cl", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("2FDaO"),
        a = i("6vbUb"),
        o = i("11XIi"),
        s = i("jC9Ys"),
        l = i("9kHWt"),
        c = i("jWZl7"),
        u = i("haXP8"),
        f = i("2hHGG"),
        v = i("dSzUP");
    let p, g, m = e => e;
    var x = e => (0, r.jsxs)(h, {
        children: [(0, r.jsx)(y, {
            onClick: s.default,
            children: e.tab === c.DeviceEditingHomeTab.options ? (0, r.jsx)(l.default, {
                device: e.device,
                deviceOption: e.deviceOption,
                position: e.position,
                options: e.options,
                hooks: e.hooks
            }) : e.tab === c.DeviceEditingHomeTab.codeGrids ? (0, r.jsx)(u.default, {
                device: e.device,
                deviceOption: e.deviceOption,
                options: e.options
            }) : (0, r.jsx)(f.default, {
                deviceId: e.device.id
            })
        }), (0, r.jsx)(v.default, {
            padding: 25
        })]
    });
    const h = d.default.div.attrs({
            className: "maxAll flex"
        })(p || (p = m`
  position: relative;
  justify-content: flex-end;
`)),
        y = (0, d.default)(a.motion.div).attrs({
            className: "maxAll scroll-y medium-shadow",
            transition: {
                duration: o.default.enterExit.duration,
                ease: o.default.enterExit.ease
            },
            initial: {
                opacity: .25,
                x: "100%"
            },
            animate: {
                opacity: 1,
                x: "0%"
            },
            exit: {
                opacity: .25,
                x: "100%"
            }
        })(g || (g = m`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  width: 490px;
  padding: 25px;
  padding-top: 68px;
  position: relative;
`))
})), i.register("haXP8", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("2FDaO"),
        a = i("lpEVe"),
        o = i("gwxnT"),
        s = i("2fqqD"),
        l = i("6yPkm"),
        c = i("4JSOC"),
        u = i("i5Qjx"),
        f = i("1rYvW"),
        v = i("hMfBU"),
        p = i("iMOcM");
    let g;
    var m = (0, a.observer)((e => {
        var t;
        const {
            world: {
                devices: {
                    codeGrids: i
                }
            }
        } = (0, o.default)(), n = e.device.id, [d, a, g] = (0, p.useBoolean)(!1), m = null === (t = i.get(n)) || void 0 === t ? void 0 : t.items, h = (0, s.AvailableCodeGridsForDeviceType)(e.deviceOption.id, e.options), y = m && m.size >= 1, C = h.length >= 1, w = (0, f.default)();
        return y || w ? (0, r.jsx)(x, {
            children: (0, r.jsxs)(u.default, {
                direction: "vertical",
                size: 40,
                className: "maxWidth",
                children: [C && w ? (0, r.jsx)(l.default, {
                    codeGridOptions: h,
                    deviceId: n,
                    setIsCreatingNewGrid: a
                }) : null, y ? (0, r.jsx)(c.default, {
                    deviceId: n,
                    codeGrids: m,
                    isCreatingNewGrid: d,
                    setIsNotCreatingNewGrid: g
                }) : null]
            })
        }) : (0, r.jsx)(v.default, {})
    }));
    const x = d.default.div(g || (g = (e => e)``))
})), i.register("6yPkm", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var r = i("hxEiv"),
        d = i("fywoC"),
        a = i("fyX93"),
        o = i("2ulZJ"),
        s = i("2FDaO"),
        l = i("4ifJF"),
        c = i("bfV0l"),
        u = i("jsOaJ"),
        f = i("fBuQJ"),
        v = i("4y75y"),
        p = i("grjnz"),
        g = i("8UJqa"),
        m = i("kSWmy"),
        x = i("gwxnT"),
        h = i("iMOcM"),
        y = i("5zxsa"),
        C = i("iRjsB"),
        w = i("crQ4G"),
        j = i("2pu5f"),
        b = i("gBeUT"),
        O = i("g2f01"),
        E = i("gSnSx"),
        D = i("k4lId");
    let I, T, k = e => e;
    var S = e => {
        const {
            memorySystem: t
        } = (0, x.default)(), [i, n] = d.useState((0, w.CanAddCodeGrid)(e.deviceId)), [s, l, I] = (0, h.useBoolean)(!1), [T, k] = d.useState(""), S = d.useRef(null);
        d.useEffect((() => (0, y.ReactionToMultipleProps)([() => C.default.memorySystem.counters.codeGrids, () => C.default.memorySystem.usedMemoryCost], (() => {
            n((0, w.CanAddCodeGrid)(e.deviceId))
        }), {
            fireImmediately: !0
        })), [e.deviceId]), d.useEffect((() => {
            var e;
            null == S || null === (e = S.current) || void 0 === e || e.focus()
        }), [s]);
        const M = d.useMemo((() => (0, O.default)(E.default.channel)), []),
            R = (0, j.GetCodeGridMessage)({
                reason: i.reason
            });
        return (0, r.jsxs)(N, {
            children: [(0, r.jsxs)(G, {
                children: [(0, r.jsxs)(v.default.Title, {
                    level: 4,
                    style: {
                        color: g.default.White
                    },
                    children: ["Create a new ", p.default.grid.singular]
                }), (0, r.jsxs)(v.default.Text, {
                    italic: !0,
                    children: ["+", (0, h.numberWithCommas)(t.costs.codeGrid), " memory"]
                })]
            }), i.canAdd ? (0, r.jsx)(a.CodeGridList, {
                style: {
                    marginTop: 20
                },
                children: e.codeGridOptions.map((t => (0, r.jsx)(o.default, {
                    label: t.name,
                    onClick: () => {
                        (0, D.playClickSound)(), t.type !== b.default.broadcastMessage ? (e.setIsCreatingNewGrid(), (0, m.default)({
                            deviceId: e.deviceId,
                            triggerType: t.type,
                            triggerValue: ""
                        })) : l()
                    }
                }, t.type + "-option")))
            }) : (0, r.jsx)(c.default, {
                type: "error",
                showIcon: !0,
                message: R,
                style: {
                    marginTop: 15
                }
            }), (0, r.jsxs)(f.default, {
                open: s,
                onCancel: I,
                onOk: () => {
                    const t = null == T ? void 0 : T.trim();
                    t && t.length && (e.setIsCreatingNewGrid(), (0, m.default)({
                        deviceId: e.deviceId,
                        triggerType: b.default.broadcastMessage,
                        triggerValue: T
                    }), I(), k(""))
                },
                children: [(0, r.jsx)(v.default.Title, {
                    level: 5,
                    children: "Channel name"
                }), (0, r.jsxs)(v.default.Text, {
                    children: ["The ", p.default.grid.singular, " will run when receiving a message from this channel"]
                }), (0, r.jsx)(u.default, {
                    ref: S,
                    value: T,
                    className: "maxWidth",
                    placeholder: "Channel name...",
                    onChange: k,
                    maxLength: 512,
                    style: {
                        marginTop: 10,
                        marginBottom: 3
                    },
                    autoFocus: !0,
                    options: M.map((e => ({
                        value: e
                    }))),
                    filterOption: (e, t) => -1 !== t.value.toUpperCase().indexOf(e.toUpperCase())
                })]
            })]
        })
    };
    const N = s.default.div.attrs({
            className: "maxWidth"
        })(I || (I = k``)),
        G = (0, s.default)(l.VerticallyCentered).attrs({
            className: "maxWidth between"
        })(T || (T = k``))
})), i.register("fyX93", (function(t, n) {
    e(t.exports, "CodeGridList", (function() {
        return d
    }));
    let r;
    const d = i("2FDaO").default.div.attrs({
        className: "maxWidth"
    })(r || (r = (e => e)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`))
})), i.register("2ulZJ", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = i("hxEiv"),
        d = i("4y75y");
    i("fywoC");
    var a = i("2FDaO"),
        o = i("4ifJF");
    let s;
    var l = e => (0, r.jsxs)(c, {
        onClick: e.onClick,
        children: [e.children, (0, r.jsx)(d.default.Text, {
            children: e.label
        })]
    });
    const c = (0, a.default)(o.Centered).attrs({
        className: "maxWidth"
    })(s || (s = (e => e)`
  padding: 30px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  cursor: pointer;
  border: 2px dashed rgba(255, 244, 212, 0.5);
  transition: background 0.2s ease;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`))
})), i.register("jsOaJ", (function(n, r) {
    e(n.exports, "default", (function() {
        return h
    }));
    var d = i("fe1on"),
        a = i("jyxW7"),
        o = i("8mdco"),
        s = i("fywoC"),
        l = i("4gMdJ"),
        c = i("lqzWa"),
        u = i("kuEJ4"),
        f = i("aNsvV");
    const {
        Option: v
    } = c.default;

    function p(e) {
        return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup)
    }
    const g = (e, i) => {
            const {
                prefixCls: n,
                className: r,
                popupClassName: u,
                dropdownClassName: g,
                children: m,
                dataSource: x
            } = e, h = (0, a.default)(m);
            let y;
            1 === h.length && (0, f.isValidElement)(h[0]) && !p(h[0]) && ([y] = h);
            const C = y ? () => y : void 0;
            let w;
            w = h.length && p(h[0]) ? m : x ? x.map((e => {
                if ((0, f.isValidElement)(e)) return e;
                switch (typeof e) {
                    case "string":
                        return s.createElement(v, {
                            key: e,
                            value: e
                        }, e);
                    case "object": {
                        const {
                            value: t
                        } = e;
                        return s.createElement(v, {
                            key: t,
                            value: t
                        }, e.text)
                    }
                    default:
                        return
                }
            })) : [];
            const {
                getPrefixCls: j
            } = s.useContext(l.ConfigContext), b = j("select", n);
            return s.createElement(c.default, Object.assign({
                ref: i
            }, (0, o.default)(e, ["dataSource", "dropdownClassName"]), {
                prefixCls: b,
                popupClassName: u || g,
                className: t(d)(`${b}-auto-complete`, r),
                mode: c.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: C
            }), w)
        },
        m = s.forwardRef(g),
        x = (0, u.default)(m);
    m.Option = v, m._InternalPanelDoNotUseOrYouWillBeFired = x;
    var h = m
})), i.register("kSWmy", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = i("9q1Gv"),
        d = i("cCnGt");
    var a = e => {
        (0, d.default)(r.default.createCodeGrid, {
            deviceId: e.deviceId,
            triggerType: e.triggerType,
            triggerValue: e.triggerValue
        })
    }
})), i.register("crQ4G", (function(t, n) {
    e(t.exports, "CanAddCodeGrid", (function() {
        return o
    }));
    var r = i("iRjsB"),
        d = i("5EgSg"),
        a = i("gpvmj");
    const o = e => {
        var t;
        const i = r.default.memorySystem.costs.codeGrid;
        if (!(0, a.CanUseMoreMemory)({
                memory: i
            })) return {
            canAdd: !1,
            reason: d.OutOfResourcesReason.noMemory
        };
        if (r.default.memorySystem.counters.codeGrids >= r.default.memorySystem.limits.codeGrids) return {
            canAdd: !1,
            reason: d.OutOfResourcesReason.limit
        };
        var n;
        return (null !== (n = null === (t = r.default.world.devices.codeGrids.get(e)) || void 0 === t ? void 0 : t.items.size) && void 0 !== n ? n : 0) >= r.default.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: d.OutOfResourcesReason.codeGridPerDeviceLimit
        } : {
            canAdd: !0
        }
    }
})), i.register("2pu5f", (function(t, n) {
    e(t.exports, "GetCodeGridMessage", (function() {
        return l
    }));
    var r = i("iRjsB"),
        d = i("5EgSg"),
        a = i("grjnz"),
        o = i("8MAwC"),
        s = i("iMOcM");
    const l = e => {
        if (e.reason === d.OutOfResourcesReason.codeGridPerDeviceLimit) return `Cannot create more ${a.default.grid.plural}. Reached limit of ${r.default.memorySystem.limits.codeGridsPerDevice} ${a.default.grid.plural} per device.`;
        if (e.reason === d.OutOfResourcesReason.limit) return `Cannot create more ${a.default.grid.plural}. Reached limit of ${r.default.memorySystem.limits.codeGrids} ${a.default.grid.plural} on map.`;
        const t = r.default.memorySystem.costs.codeGrid;
        return e.reason === d.OutOfResourcesReason.noMemory ? `Not enough ${o.MemoryName} to create ${a.default.grid.singular}. Requires ${(0,s.numberWithCommas)(t)} available ${o.MemoryName}.` : ""
    }
})), i.register("4JSOC", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var r = i("hxEiv"),
        d = i("fywoC"),
        a = i("2FDaO"),
        o = i("93yIm"),
        s = i("gnAdP"),
        l = i("fBuQJ"),
        c = i("4y75y"),
        u = i("1rYvW"),
        f = i("grjnz"),
        v = i("fyX93"),
        p = i("2ulZJ"),
        g = i("lpEVe"),
        m = i("60k9b"),
        x = i("8UJqa"),
        h = i("iRjsB"),
        y = i("377U5"),
        C = i("9g8O0"),
        w = i("90RCV"),
        j = i("jC9Ys"),
        b = i("enT9V"),
        O = i("2stnm"),
        E = i("cmvpZ"),
        D = i("k4lId");
    let I, T, k = e => e;
    var S = (0, g.observer)((e => {
        const {
            deviceId: t
        } = e, i = Array.from(e.codeGrids), n = (0, u.default)();
        return d.useEffect((() => {
            e.isCreatingNewGrid && (e.setIsNotCreatingNewGrid(), i.length >= 1 && N((0, E.last)(i)[0]))
        }), [i.length]), (0, r.jsxs)(G, {
            children: [(0, r.jsxs)(c.default.Title, {
                style: {
                    color: x.default.White
                },
                level: 4,
                children: [n ? "Edit" : "View", " an existing", " ", f.default.grid.singular]
            }), (0, r.jsx)(v.CodeGridList, {
                style: {
                    marginTop: 20
                },
                children: i.map((e => (0, r.jsx)(p.default, {
                    label: (0, m.default)(t, e[0]),
                    onClick: () => {
                        (0, D.playClickSound)(), N(e[0])
                    },
                    children: n ? (0, r.jsx)(M, {
                        children: (0, r.jsx)(s.default, {
                            menu: {
                                items: [{
                                    key: `remove-grid-${e[0]}`,
                                    label: `Delete ${f.default.grid.singular}`,
                                    icon: (0, r.jsx)(C.default, {}),
                                    onClick: (0, b.default)((() => {
                                        l.default.confirm({
                                            title: `Are you sure you want to delete this ${f.default.grid.singular}?`,
                                            onOk: () => {
                                                (0, O.default)({
                                                    deviceId: t,
                                                    gridId: e[0]
                                                })
                                            },
                                            okText: "Yes",
                                            cancelText: "No"
                                        })
                                    }))
                                }]
                            },
                            children: (0, r.jsx)(o.default, {
                                type: "text",
                                size: "small",
                                icon: (0, r.jsx)(w.default, {}),
                                onClick: j.default
                            })
                        })
                    }) : null
                }, e[0] + "-grid")))
            })]
        })
    }));
    const N = e => {
            h.default.me.editing.device.currentlyEditedGridId = e, h.default.me.editing.device.screen = y.EditingDeviceScreen.grid
        },
        G = a.default.div.attrs({
            className: "maxWidth"
        })(I || (I = k``)),
        M = a.default.div(T || (T = k`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`))
})), i.register("1rYvW", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = i("iRjsB"),
        d = i("fhnJp"),
        a = i("lp6Bs"),
        o = i("4uojN"),
        s = i("6Tpu2");
    var l = e => {
        var t, i;
        if (!(0, o.isSavedVersion)()) return !1;
        if ((0, a.isAssignment)()) return !1;
        if (!(0, s.InPreGamePhase)()) return !1;
        const n = e || (0, d.default)();
        return (null === (t = r.default.characters.characters.get(n)) || void 0 === t || null === (i = t.permissions) || void 0 === i ? void 0 : i.manageCodeGrids) || !1
    }
})), i.register("60k9b", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("gBeUT"),
        a = i("iRjsB"),
        o = i("CqOkB"),
        s = i("69SUA");
    var l = (e, t) => ((e, t) => {
        var i, n;
        const l = (0, o.default)(e);
        if (!l) return null;
        const c = null === (i = a.default.world.devices.codeGrids.get(e)) || void 0 === i || null === (n = i.items) || void 0 === n ? void 0 : n.get(t);
        if (!c) return null;
        const u = c.triggerType;
        if (u === d.default.broadcastMessage) return (0, r.jsxs)("span", {
            children: ["When receiving on channel", " ", (0, r.jsx)("span", {
                style: {
                    fontWeight: s.FontWeights.Bold,
                    color: "#57f784"
                },
                children: c.triggerValue || "channel"
            })]
        });
        const f = l.deviceOption.codeGridSchema.triggers.find((e => e.type === u));
        return f ? f.name : null
    })(e, t) || "Block"
})), i.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = i("dnh3u"),
        d = i("fywoC"),
        a = i("ewhoP"),
        o = i("dwKuN"),
        s = function(e, t) {
            return d.createElement(o.default, (0, r.default)((0, r.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    s.displayName = "DeleteOutlined";
    var l = d.forwardRef(s)
})), i.register("ewhoP", (function(t, i) {
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
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), i.register("enT9V", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => t => {
        t.domEvent.stopPropagation(), e && e()
    }
})), i.register("2stnm", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = i("9q1Gv"),
        d = i("cCnGt");
    var a = e => {
        (0, d.default)(r.default.deleteCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    }
})), i.register("hMfBU", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var r = i("hxEiv"),
        d = i("4y75y");
    i("fywoC");
    var a = i("grjnz"),
        o = i("1ZCZ6"),
        s = i("4ifJF"),
        l = i("py2Xr");
    var c = () => (0, r.jsxs)(s.CenteredColumn, {
        className: "maxAll",
        children: [(0, r.jsx)("div", {
            style: {
                fontSize: 54,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 5
            },
            children: (0, r.jsx)(l.default, {
                name: "fal fa-cubes"
            })
        }), (0, r.jsxs)(d.default.Text, {
            children: ["No ", a.default.grid.plural, " have been created for this", " ", o.default.device.singular, "."]
        })]
    })
})), i.register("2hHGG", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("2FDaO"),
        a = i("aVRF5"),
        o = i("lpEVe"),
        s = i("7c3pP"),
        l = i("1ZCZ6"),
        c = i("i5Qjx"),
        u = i("4y75y");
    let f;
    var v = (0, o.observer)((e => (0, s.DeviceHasAWireAttached)(e.deviceId) ? (0, r.jsx)(p, {
        children: (0, r.jsxs)(c.default, {
            direction: "vertical",
            size: 25,
            className: "maxWidth",
            children: [(0, r.jsx)(a.default, {
                direction: "in",
                deviceId: e.deviceId
            }), (0, r.jsx)(a.default, {
                direction: "out",
                deviceId: e.deviceId
            })]
        })
    }) : (0, r.jsxs)(u.default.Text, {
        children: ["No ", l.default.wire.plural, " are connected to this", " ", l.default.device.singular, "."]
    })));
    const p = d.default.div(f || (f = (e => e)``))
})), i.register("aVRF5", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var r = i("hxEiv");
    i("fywoC");
    var d = i("2FDaO"),
        a = i("1ZCZ6"),
        o = i("3sJmi"),
        s = i("i5Qjx"),
        l = i("4y75y"),
        c = i("8UJqa"),
        u = i("7c3pP"),
        f = i("kSAni");
    let v;
    var p = (0, i("lpEVe").observer)((e => {
        const t = "in" === e.direction ? (0, u.WiresEndingAtDevice)(e.deviceId) : (0, u.WiresStartingFromDevice)(e.deviceId);
        return t.length ? (0, r.jsxs)(g, {
            children: [(0, r.jsxs)(l.default.Title, {
                level: 4,
                style: {
                    color: c.default.White
                },
                children: [(0, o.CapitalizeFirstLetter)(a.default.wire.plural), " ", e.direction]
            }), (0, r.jsx)(s.default, {
                direction: "vertical",
                size: 12,
                style: {
                    marginTop: 15
                },
                className: "maxWidth",
                children: t.map((t => (0, r.jsx)(f.default, {
                    wire: t,
                    deviceId: e.deviceId
                }, t.id)))
            })]
        }) : null
    }));
    const g = d.default.div(v || (v = (e => e)``))
})), i.register("kSAni", (function(t, n) {
    e(t.exports, "default", (function() {
        return k
    }));
    var r = i("hxEiv"),
        d = i("fywoC"),
        a = i("2FDaO"),
        o = i("4ifJF"),
        s = i("py2Xr"),
        l = i("4y75y"),
        c = i("69SUA"),
        u = i("2Tpsx"),
        f = i("goohJ"),
        v = i("z5iun"),
        p = i("lpEVe"),
        g = i("gwxnT"),
        m = i("3RQjs"),
        x = i("fwdZN");
    let h, y, C, w, j, b, O, E, D, I, T = e => e;
    var k = (0, p.observer)((e => {
        const {
            wire: t,
            deviceId: i
        } = e, {
            me: {
                editing: n
            }
        } = (0, g.default)(), a = t.startDevice === i, o = !a, c = (0, f.FetchDeviceById)(t.startDevice), p = (0, f.FetchDeviceById)(t.endDevice), h = (0, u.FetchDeviceName)(t.startDevice), y = (0, u.FetchDeviceName)(t.endDevice), C = d.useMemo((() => {
            var e, i, n, r;
            if ((null == c ? void 0 : c.deviceOption.id) === v.default.wireRepeater) return "Pulse received";
            const d = null == c || null === (e = c.deviceOption) || void 0 === e || null === (i = e.wireConfig) || void 0 === i || null === (n = i.out) || void 0 === n || null === (r = n.connections) || void 0 === r ? void 0 : r.find((e => e.id === t.startConnection));
            return d ? d.name : "No event"
        }), [t.startConnection]), w = d.useMemo((() => {
            var e, i, n, r, d;
            if ((null == p || null === (e = p.deviceOption) || void 0 === e ? void 0 : e.id) === v.default.wireRepeater) return "Relay pulse";
            const a = null == p || null === (i = p.deviceOption) || void 0 === i || null === (n = i.wireConfig) || void 0 === n || null === (r = n.in) || void 0 === r || null === (d = r.connections) || void 0 === d ? void 0 : d.find((e => e.id === t.endConnection));
            return a ? a.name : "No action"
        }), [t.endConnection]);
        return (0, r.jsxs)(S, {
            onClick: () => {
                n.wire.currentlyEditedWireId = t.id, (0, m.default)(x.default.editingWire)
            },
            children: [(0, r.jsxs)(N, {
                children: [(0, r.jsx)(G, {
                    selected: a
                }), (0, r.jsxs)(M, {
                    children: [(0, r.jsx)(R, {}), (0, r.jsx)(W, {
                        children: (0, r.jsx)(s.default, {
                            name: "fas fa-caret-right"
                        })
                    })]
                }), (0, r.jsx)(G, {
                    selected: o
                })]
            }), (0, r.jsxs)(A, {
                children: [(0, r.jsxs)(F, {
                    children: [o ? (0, r.jsx)(P, {
                        children: h
                    }) : null, (0, r.jsx)("div", {
                        children: (0, r.jsx)(l.default.Text, {
                            children: C
                        })
                    })]
                }), (0, r.jsxs)(V, {
                    children: [a ? (0, r.jsx)(P, {
                        children: y
                    }) : null, (0, r.jsx)(l.default.Text, {
                        children: w
                    })]
                })]
            })]
        })
    }));
    const S = a.default.div(h || (h = T`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`)),
        N = (0, a.default)(o.VerticallyCentered).attrs({
            className: "maxWidth"
        })(y || (y = T``)),
        G = a.default.div(C || (C = T`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${0};
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`), (e => e.selected ? "#269900" : "rgba(255,255,255,0.14)")),
        M = (0, a.default)(o.VerticallyCentered)(w || (w = T`
  flex: 1;
  padding: 0px 20px;
`)),
        R = a.default.div(j || (j = T`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`)),
        W = a.default.div(b || (b = T`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`)),
        A = a.default.div.attrs({
            className: "maxWidth between flex"
        })(O || (O = T`
  align-items: flex-start;
  margin-top: 10px;
`)),
        B = a.default.div(E || (E = T`
  max-width: 45%;
  line-height: 1;
`)),
        F = (0, a.default)(B)(D || (D = T``)),
        V = (0, a.default)(B)(I || (I = T`
  text-align: right;
`)),
        P = e => (0, r.jsx)(l.default.Title, {
            level: 5,
            style: {
                fontWeight: c.FontWeights.Bold
            },
            children: e.children
        })
})), i.register("1Ufie", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var r = i("fywoC"),
        d = i("gwuwo"),
        a = i("gwxnT");
    var o = () => {
        const {
            me: {
                editing: {
                    device: {
                        currentlyEditedDevice: e
                    }
                }
            },
            worldOptions: {
                deviceOptions: t
            }
        } = (0, a.default)();
        return {
            device: r.useMemo((() => (0, d.default)().worldManager.devices.getDeviceById(e.id)), [e.id]),
            deviceOption: t.find((t => t.id === e.deviceOptionId))
        }
    }
})), i.register("db8v8", (function(t, n) {
    e(t.exports, "useTimeout", (function() {
        return a
    }));
    var r = i("fywoC"),
        d = i("cXHcT");

    function a(e, t) {
        void 0 === t && (t = 0), (0, d.useWarningOnMountInDevelopment)("useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.");
        var i = (0, r.useState)(!1),
            n = i[0],
            a = i[1],
            o = (0, r.useRef)();

        function s() {
            o.current && o.current(), l()
        }(0, r.useEffect)((function() {
            o.current = e
        }), [e]);
        var l = (0, r.useCallback)((function() {
                a(!1)
            }), []),
            c = (0, r.useCallback)((function() {
                a(!0)
            }), []);
        return (0, r.useEffect)((function() {
            if (n) {
                if ("undefined" != typeof window) {
                    var e = window.setTimeout(s, t);
                    return function() {
                        window.clearTimeout(e)
                    }
                }
                console.warn("useTimeout: window is undefined.")
            }
        }), [n, t]), {
            clear: l,
            isActive: n,
            start: c,
            stop: l
        }
    }
})), i.register("cXHcT", (function(t, n) {
    e(t.exports, "useWarningOnMountInDevelopment", (function() {
        return a
    }));
    var r = i("cPGmn"),
        d = i("fAs99");

    function a(e) {
        (0, r.useDidMount)((function() {
            (0, d.warning)(!1, e)
        }))
    }
})), i.register("fAs99", (function(t, i) {
    e(t.exports, "warning", (function() {
        return n
    }));
    var n = function() {}
})), i.register("hNoTG", (function(n, r) {
    e(n.exports, "default", (function() {
        return D
    }));
    var d = i("hxEiv"),
        a = i("fywoC"),
        o = i("2FDaO"),
        s = i("lpEVe"),
        l = i("dmyzc"),
        c = i("gwxnT"),
        u = i("4MuSt"),
        f = i("iRjsB"),
        v = i("irW3N"),
        p = i("hqZyT"),
        g = i("5OQ4z"),
        m = i("93yIm"),
        x = i("69SUA"),
        h = i("c3ah8"),
        y = i("6bytT"),
        C = i("lqbc4"),
        w = i("k4lId");
    let j, b, O, E = e => e;
    var D = (0, s.observer)((() => {
        const {
            me: {
                editing: {
                    device: {
                        visualEditing: {
                            instruction: e,
                            keyboardHelpers: i
                        }
                    }
                }
            }
        } = (0, c.default)();
        (0, g.default)(t(h).Input.Keyboard.KeyCodes.ENTER, (() => {
            x()
        }));
        (0, g.default)(t(h).Input.Keyboard.KeyCodes.ESC, (() => {
            x()
        })), (0, C.useWillUnmount)((() => {
            (0, y.ClearVisualEditingData)()
        }));
        const [n, r] = a.useState(e), [o, s] = a.useState(JSON.stringify(i));
        a.useEffect((() => {
            const t = (0, u.reaction)((() => e), (() => {
                n !== f.default.me.editing.device.visualEditing.instruction && r(f.default.me.editing.device.visualEditing.instruction)
            }), {
                fireImmediately: !0
            });
            return () => {
                t()
            }
        }), [e, n]), a.useEffect((() => {
            const e = (0, u.reaction)((() => i), (() => {
                o !== JSON.stringify(f.default.me.editing.device.visualEditing.keyboardHelpers) && s(JSON.stringify(f.default.me.editing.device.visualEditing.keyboardHelpers))
            }), {
                fireImmediately: !0
            });
            return () => {
                e()
            }
        }), [o, i]);
        const x = () => {
            (0, v.ConfirmDoneVisualEditing)()
        };
        return (0, d.jsxs)(I, {
            children: [(0, d.jsx)(p.default, {
                items: JSON.parse(o),
                visible: !0
            }), (0, d.jsxs)(T, {
                children: [(0, d.jsx)(l.default, {
                    children: (0, d.jsx)("div", {
                        children: (0, d.jsx)(m.default, {
                            type: "primary",
                            size: "large",
                            onClick: () => {
                                (0, w.playClickSound)(), x()
                            },
                            children: "Done"
                        })
                    })
                }), (0, d.jsx)(k, {
                    children: (0, d.jsx)("div", {
                        children: n
                    })
                })]
            })]
        })
    }));
    const I = o.default.div.attrs({
            className: "maxAll flex"
        })(j || (j = E`
  align-items: flex-end;
`)),
        T = o.default.div.attrs({
            className: "maxWidth flex"
        })(b || (b = E`
  position: relative;
  padding: 25px;
`)),
        k = o.default.div.attrs({
            className: "maxAll flex-center"
        })(O || (O = E`
  position: absolute;
  text-align: center;
  font-family: ${0};
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
  font-size: 22px;
  top: 0px;
  left: 0px;
`), x.Fonts.FugazOne)
})), i.register("irW3N", (function(t, n) {
    e(t.exports, "ConfirmDoneVisualEditing", (function() {
        return c
    }));
    var r = i("fwdZN"),
        d = i("3RQjs"),
        a = i("8gln7"),
        o = i("ittx1"),
        s = i("6bytT"),
        l = i("dNzyU");
    const c = () => {
        (0, d.default)(r.default.editingDevice);
        const e = (0, l.FetchVisualEditingPreview)(),
            t = (0, o.FetchCurrentlyEditedDevice)();
        (0, s.ClearVisualEditingData)(), t && e && (0, a.default)({
            deviceOption: t.deviceOption,
            id: t.id,
            x: Math.round(e.x),
            y: Math.round(e.y),
            depth: e.layers.getDepth(),
            layerId: t.layers.getOptionsLayer(),
            name: e.name,
            isPreview: !1,
            options: {
                ...e.options
            },
            placedByClient: !0,
            state: t.deviceOption.defaultState
        })
    }
})), i.register("3eM1I", (function(e, t) {
    e.exports = import("./" + i("ihc6Q").resolve("cXcnp")).then((() => i("fu6a9")))
})), i.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = i("dnh3u"),
        d = i("fywoC"),
        a = i("5D7Fe"),
        o = i("dwKuN"),
        s = function(e, t) {
            return d.createElement(o.default, (0, r.default)((0, r.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    s.displayName = "DownOutlined";
    var l = d.forwardRef(s)
})), i.register("5D7Fe", (function(t, i) {
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
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), i.register("2BPYb", (function(n, r) {
    e(n.exports, "isGoogleFontLoaded", (function() {
        return o
    })), e(n.exports, "default", (function() {
        return s
    }));
    var d = i("7P9gc");
    const a = [],
        o = e => a.includes(e);
    var s = e => {
        const {
            familyName: i,
            onLoad: n
        } = e;
        a.includes(i) ? n && n() : t(d).load({
            google: {
                families: [`${i}:400,700`]
            },
            fontactive: e => {
                a.includes(e) || a.push(e), i === e && n && n()
            }
        })
    }
})), i.register("6RgS6", (function(t, n) {
    e(t.exports, "CanAddTerrain", (function() {
        return a
    }));
    var r = i("iRjsB"),
        d = i("24AMo");
    const a = e => {
        var t;
        const i = r.default.worldOptions.terrainOptions.find((t => t.id === e));
        if (!i) return !1;
        if (null === (t = i.blockedMapStyles) || void 0 === t ? void 0 : t.length) {
            const e = r.default.session.mapStyle;
            if (i.blockedMapStyles.includes(e)) return !1
        }
        const n = i.minimumRoleLevel,
            a = i.maximumRoleLevel;
        return (0, d.IsRoleLevelBetween)(n, a)
    }
})), i.register("4L0xs", (function(t, n) {
    e(t.exports, "GetCurrentMapStyle", (function() {
        return d
    }));
    var r = i("iRjsB");
    const d = () => r.default.session.mapStyle
}));