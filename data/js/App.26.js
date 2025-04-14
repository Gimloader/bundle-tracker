function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, i, r) {
    Object.defineProperty(e, t, {
        get: i,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("ZFlqI", (function(r, n) {
    var a;
    a = r.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), t(r.exports, "default", (function() {
        return W
    }));
    var d = i("hxEiv"),
        l = i("lpEVe"),
        s = i("fywoC"),
        o = i("2FDaO"),
        u = i("8UJqa"),
        c = i("fwdZN"),
        f = i("3RQjs"),
        m = i("thSr3"),
        g = i("ie7Qa"),
        v = i("ffpNh"),
        p = i("8qCiX"),
        y = i("cJmcN"),
        x = i("k3GfJ"),
        h = (s = i("fywoC"), i("5OQ4z")),
        T = i("c3ah8"),
        C = i("z3zWp"),
        S = i("iRjsB"),
        A = i("5zxsa"),
        j = i("6vbUb"),
        w = i("4y75y"),
        M = i("69SUA"),
        b = i("py2Xr"),
        O = i("fskI3"),
        D = i("legzE"),
        $ = i("dmyzc");
    let z, N, R, E, I = e => e;
    var W = (0, l.observer)((() => {
        const [t, i] = (0, s.useState)(!0), [r, n] = (0, s.useState)((0, g.default)());
        s.useEffect((() => (0, A.ReactionToMultipleProps)([() => S.default.memorySystem.usedMemoryCost, () => S.default.me.adding.terrain.brushSize, () => S.default.me.adding.terrain.buildTerrainAsWall, () => S.default.memorySystem.counters.collidingTiles, () => S.default.memorySystem.counters.nonCollidingTiles, () => S.default.memorySystem.counters.wires, () => S.default.memorySystem.counters.codeGrids], (() => {
            n((0, g.default)())
        }), {
            fireImmediately: !0
        })), []), (0, m.default)({
            setShow: i
        });
        const a = (0, C.default)();
        s.useEffect((() => {
            a || l()
        }), [a]);
        const l = () => {
            (0, v.default)(p.NoneScreen.home), (0, f.default)(c.default.none), (0, y.default)(x.AddScreen.home)
        };
        return (0, h.default)(e(T).Input.Keyboard.KeyCodes.ESC, l), t ? (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(F, {
                children: (0, d.jsxs)(B, {
                    initial: {
                        y: "100%",
                        opacity: .25
                    },
                    animate: {
                        y: "0%",
                        opacity: 1
                    },
                    exit: {
                        y: "100%",
                        opacity: .25
                    },
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    },
                    children: [(0, d.jsx)(k, {
                        children: (0, d.jsx)($.default, {
                            children: (0, d.jsx)(D.default, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: l
                            })
                        })
                    }), (0, d.jsx)(O.default, {
                        addingInfo: r
                    }), r.notAllowedToAddMessage ? (0, d.jsx)(U, {
                        children: (0, d.jsxs)(w.default.Text, {
                            style: {
                                fontWeight: M.FontWeights.Bold
                            },
                            children: [(0, d.jsx)(b.default, {
                                name: "fas fa-exclamation-circle"
                            }), "  ", r.notAllowedToAddMessage]
                        })
                    }) : null]
                })
            })
        }) : null
    }));
    const F = o.default.div.attrs({
            className: "flex maxAll"
        })(z || (z = I`
  align-items: flex-end;
  position: relative;
`)),
        k = o.default.div.attrs({
            className: "maxAll flex"
        })(N || (N = I`
  position: absolute;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`)),
        B = (0, o.default)(j.motion.div).attrs({
            className: "maxWidth"
        })(R || (R = I`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${0};
`), u.default.White),
        U = o.default.div.attrs({
            className: "maxWidth"
        })(E || (E = I`
  padding: 10px 25px;
  background: #c62828;
`))
})), i.register("thSr3", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = i("fywoC"),
        a = i("gtSUE"),
        d = i("6TkBw"),
        l = i("8qCiX"),
        s = i("fwdZN"),
        o = i("gwxnT"),
        u = i("3RQjs"),
        c = i("ekdtu"),
        f = i("eyQZa"),
        m = i("bDCcz");
    var g = e => {
        const {
            me: t,
            gui: i
        } = (0, o.default)();
        n.useEffect((() => {
            const r = (0, d.default)(a.default.Adding.SwitchToRemoveMode(), (() => {
                    (0, f.default)() && (0, u.default)(s.default.removing)
                })),
                n = (0, d.default)(a.default.Adding.GoBack(), (() => {
                    (0, u.default)(s.default.none), i.none.screen = l.NoneScreen.add
                })),
                o = (0, d.default)(a.default.Adding.Terrain.TogglePiece(), (() => {
                    if ((0, c.isAddingTerrain)()) {
                        if ((0, m.isPlatformer)()) return;
                        t.adding.terrain.buildTerrainAsWall = !t.adding.terrain.buildTerrainAsWall
                    }
                })),
                g = (0, d.default)(a.default.Adding.Terrain.BrushSize.One(), (() => {
                    (0, c.isAddingTerrain)() && (t.adding.terrain.brushSize = 1)
                })),
                v = (0, d.default)(a.default.Adding.Terrain.BrushSize.Two(), (() => {
                    (0, c.isAddingTerrain)() && (t.adding.terrain.brushSize = 2)
                })),
                p = (0, d.default)(a.default.Adding.Terrain.BrushSize.Three(), (() => {
                    (0, c.isAddingTerrain)() && (t.adding.terrain.brushSize = 3)
                })),
                y = (0, d.default)(a.default.Adding.Terrain.BrushSize.Four(), (() => {
                    (0, c.isAddingTerrain)() && (t.adding.terrain.brushSize = 4)
                })),
                x = (0, d.default)(a.default.Adding.ToggleShow(), (() => {
                    e.setShow((e => !e))
                }));
            return () => {
                r(), n(), o(), g(), v(), p(), y(), x()
            }
        }), [])
    }
})), i.register("ie7Qa", (function(e, r) {
    t(e.exports, "default", (function() {
        return M
    }));
    var n = i("7Oblz"),
        a = i("27WRt"),
        d = i("apjfs"),
        l = i("ekdtu"),
        s = i("iRjsB"),
        o = i("3NKKf"),
        u = i("arkJ8"),
        c = i("z5iun"),
        f = i("59gNz"),
        m = i("fZ04n"),
        g = i("gwuwo"),
        v = i("3gZ2T"),
        p = i("eUgW1"),
        y = i("h5smc"),
        x = i("l83e8"),
        h = i("gxc5U"),
        T = i("3LmuP"),
        C = i("3sJmi"),
        S = i("1ZCZ6"),
        A = i("8MAwC"),
        j = i("2Tpsx"),
        w = i("7w7xg");
    var M = () => {
        if ((0, l.isAddingTerrain)()) {
            const e = s.default.worldOptions.terrainOptions.find((e => e.id === s.default.me.adding.terrain.currentlySelectedTerrain)),
                t = (0, y.CanAddTile)({
                    colliding: s.default.me.adding.terrain.buildTerrainAsWall,
                    count: s.default.me.adding.terrain.brushSize * s.default.me.adding.terrain.brushSize
                }),
                i = (0, x.GetTileMessage)({
                    reason: t.reason,
                    colliding: s.default.me.adding.terrain.buildTerrainAsWall,
                    count: s.default.me.adding.terrain.brushSize * s.default.me.adding.terrain.brushSize
                }),
                r = s.default.me.adding.terrain.buildTerrainAsWall ? s.default.memorySystem.costs.collidingTile : s.default.memorySystem.costs.nonCollidingTile;
            return {
                tagline: "Adding",
                title: `${(null==e?void 0:e.name)||"Terrain"}`,
                memoryCost: `+${r} ${A.MemoryName} per tile`,
                notAllowedToAddMessage: i
            }
        }
        if ((0, a.isAddingDevice)()) {
            if ((0, d.isAttemptingToAddExistingDevice)()) {
                var e;
                if (s.default.me.editing.device.usingMultiselect) {
                    const e = (0, v.CanCopyMultiselect)(),
                        t = (0, p.GetMultiselectMessage)(e),
                        i = s.default.me.adding.devices.existingDevice.action === n.ExistingDeviceAddingAction.copy,
                        r = (0, g.default)().actionManager.multiselect.movedOrCopiedDevices,
                        a = (0, g.default)().actionManager.multiselect.movedOrCopiedDevices.filter((e => e.deviceOption.id === c.default.prop)),
                        d = a.length > 0,
                        l = (0, g.default)().actionManager.multiselect.movedOrCopiedDevices.length === a.length;
                    let o = `Multiple ${S.default.device.plural}`;
                    if (d && !l ? o = `Multiple ${S.default.device.plural}/${S.default.prop.plural}` : l && (o = `Multiple ${S.default.prop.plural}`), 1 === r.length) {
                        const e = r[0],
                            t = (0, j.FetchDeviceName)(null == e ? void 0 : e.id);
                        t && (o = t)
                    }
                    return {
                        tagline: i ? "Copying" : "Moving",
                        title: o,
                        memoryCost: e.totalCost ? `+${e.totalCost} ${A.MemoryName}` : void 0,
                        notAllowedToAddMessage: t
                    }
                }
                const t = (0, g.default)().worldManager.devices.getDeviceById(s.default.me.adding.devices.existingDevice.id),
                    i = s.default.worldOptions.deviceOptions.find((e => {
                        var i;
                        return e.id === (null == t || null === (i = t.deviceOption) || void 0 === i ? void 0 : i.id)
                    })),
                    r = s.default.me.adding.devices.existingDevice.action === n.ExistingDeviceAddingAction.copy,
                    a = (0, m.CanCopyDevice)({
                        deviceId: null === (e = (0, d.attemptingToAddExistingDevice)()) || void 0 === e ? void 0 : e.id
                    });
                let l = "Device";
                if (i) {
                    const e = (0, j.FetchDeviceName)(t.id);
                    e && (l = e)
                }
                if (!i) return {
                    tagline: r ? "Copying" : "Moving",
                    title: (0, C.CapitalizeFirstLetter)(S.default.device.singular)
                };
                let o = "";
                if (a.memoryCost && (o = `+${a.memoryCost} ${A.MemoryName}`), !a.canCopy && r) {
                    return {
                        tagline: "Copying",
                        title: l,
                        memoryCost: o,
                        notAllowedToAddMessage: (0, f.GetDeviceOptionMessage)({
                            addingOrCopying: "copying",
                            reason: a.reason,
                            deviceTypeId: i.id,
                            deviceId: (0, d.attemptingToAddExistingDevice)().id
                        })
                    }
                }
                return {
                    tagline: s.default.me.adding.devices.existingDevice.action === n.ExistingDeviceAddingAction.cut ? "Moving" : "Copying",
                    title: l,
                    memoryCost: s.default.me.adding.devices.existingDevice.action === n.ExistingDeviceAddingAction.cut ? void 0 : o
                }
            }
            if (s.default.me.adding.devices.selectedDeviceType) {
                const e = s.default.worldOptions.deviceOptions.find((e => e.id === s.default.me.adding.devices.selectedDeviceType)),
                    t = (0, u.CanAddDevice)({
                        deviceTypeId: e.id
                    }),
                    i = (0, f.GetDeviceOptionMessage)({
                        addingOrCopying: "adding",
                        deviceTypeId: e.id,
                        reason: t.reason
                    });
                let r = e.name;
                if (e.id === c.default.prop && s.default.me.adding.devices.currentlySelectedProp) {
                    const e = (0, w.default)(s.default.me.adding.devices.currentlySelectedProp);
                    (null == e ? void 0 : e.name) && (r = e.name)
                }
                return {
                    tagline: "Adding",
                    title: r || (0, C.CapitalizeFirstLetter)(S.default.device.singular),
                    memoryCost: t.memoryCost ? `+${t.memoryCost} ${A.MemoryName}` : void 0,
                    notAllowedToAddMessage: i
                }
            }
        }
        if ((0, o.IsAddingWire)()) {
            const e = (0, h.CanAddWire)(),
                t = (0, T.GetWireMessage)({
                    reason: e.reason
                });
            return {
                tagline: "Adding",
                title: (0, C.CapitalizeFirstLetter)(S.default.wire.singular),
                memoryCost: `+${s.default.memorySystem.costs.wire} ${A.MemoryName}`,
                notAllowedToAddMessage: t
            }
        }
        return {
            tagline: "Adding",
            title: "Unknown Entity"
        }
    }
})), i.register("59gNz", (function(e, r) {
    t(e.exports, "GetDeviceOptionMessage", (function() {
        return o
    }));
    var n = i("z5iun"),
        a = i("5EgSg"),
        d = i("8MAwC"),
        l = i("1ZCZ6"),
        s = i("gC51I");
    const o = e => {
        if (e.reason === a.OutOfResourcesReason.limit) {
            const t = (0, s.CountDevicesOnMap)({
                deviceTypeId: e.deviceTypeId
            });
            return `Reached placement limit for this ${l.default.device.singular} (${t.current}/${t.max})`
        }
        let t = l.default.device.singular;
        return e.deviceTypeId === n.default.prop && (t = l.default.prop.singular), e.reason === a.OutOfResourcesReason.noMemory ? `Not enough ${d.MemoryName} available to place this ${t}` : ""
    }
})), i.register("1ZCZ6", (function(e, i) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), i.register("gC51I", (function(e, r) {
    t(e.exports, "CountDevicesOnMap", (function() {
        return d
    }));
    var n = i("iRjsB"),
        a = i("2mjL9");
    const d = e => {
        var t, i;
        var r;
        return {
            current: null !== (i = n.default.memorySystem.counters.devices.get(e.deviceTypeId)) && void 0 !== i ? i : 0,
            max: null !== (r = null === (t = (0, a.FetchDeviceOptionById)(e.deviceTypeId)) || void 0 === t ? void 0 : t.maxOnMap) && void 0 !== r ? r : n.default.memorySystem.limits.deviceMaxOnMapDefault
        }
    }
})), i.register("eUgW1", (function(e, r) {
    t(e.exports, "GetMultiselectMessage", (function() {
        return o
    }));
    var n = i("iRjsB"),
        a = i("5EgSg"),
        d = i("2mjL9"),
        l = i("gC51I"),
        s = i("1ZCZ6");
    const o = e => {
        if (e.reason === a.OutOfResourcesReason.limit) {
            var t;
            const i = null === (t = (0, d.FetchDeviceOptionById)(e.limitReachedDeviceTypeId)) || void 0 === t ? void 0 : t.name,
                r = (0, l.CountDevicesOnMap)({
                    deviceTypeId: e.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${i} ${s.default.device.plural}. Used ${r.current}/${r.max}.`
        }
        return e.reason === a.OutOfResourcesReason.noMemory ? `Not enough memory to copy. Requires ${e.totalCost}, used ${n.default.memorySystem.usedMemoryCost}/${n.default.memorySystem.maxUsedMemory}` : ""
    }
})), i.register("l83e8", (function(e, r) {
    t(e.exports, "GetTileMessage", (function() {
        return s
    }));
    var n = i("iRjsB"),
        a = i("5EgSg"),
        d = i("8MAwC"),
        l = i("1ZCZ6");
    const s = e => {
        const t = e.colliding ? n.default.memorySystem.counters.collidingTiles : n.default.memorySystem.counters.nonCollidingTiles,
            i = e.colliding ? n.default.memorySystem.limits.collidingTiles : n.default.memorySystem.limits.nonCollidingTiles,
            r = e.colliding ? "wall" : "floor",
            s = (e.colliding ? n.default.memorySystem.costs.collidingTile : n.default.memorySystem.costs.nonCollidingTile) * e.count;
        return e.reason === a.OutOfResourcesReason.limit ? `Can't add ${e.count} more ${r} ${l.default.terrain.singular}. Used ${t}/${i}` : e.reason === a.OutOfResourcesReason.noMemory ? `Not enough ${d.MemoryName} to add ${e.count} ${r} ${l.default.terrain.singular}. Requires ${s} ${d.MemoryName}.` : ""
    }
})), i.register("3LmuP", (function(e, r) {
    t(e.exports, "GetWireMessage", (function() {
        return d
    }));
    var n = i("iRjsB"),
        a = i("5EgSg");
    const d = e => {
        const t = n.default.memorySystem.counters.wires,
            i = n.default.memorySystem.limits.wires;
        if (e.reason === a.OutOfResourcesReason.limit) return `Can't add more wires. Used ${t}/${i}`;
        const r = n.default.memorySystem.costs.wire;
        return e.reason === a.OutOfResourcesReason.noMemory ? `Not enough memory to add wire. Requires ${r}, used ${n.default.memorySystem.usedMemoryCost}/${n.default.memorySystem.maxUsedMemory}` : ""
    }
})), i.register("2Tpsx", (function(e, r) {
    t(e.exports, "FetchDeviceName", (function() {
        return l
    }));
    var n = i("z5iun"),
        a = i("7w7xg"),
        d = i("iRjsB");
    const l = e => {
        const t = d.default.world.devices.devices.get(e);
        if (!t) return "";
        if (t.name) return t.name;
        if (t.deviceOption.id === n.default.prop) {
            const e = t.options;
            if (e.propId) {
                var i;
                const t = null === (i = (0, a.default)(e.propId)) || void 0 === i ? void 0 : i.name;
                if (t) return t
            }
        }
        return t.deviceOption.name
    }
})), i.register("cJmcN", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = i("6zpVf"),
        a = i("iRjsB"),
        d = i("k3GfJ");
    var l = e => {
        e !== d.AddScreen.home && (0, n.EmitTutorialEvent)({
            event: n.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: e
        }), a.default.gui.none.addMenu.screen = e
    }
})), i.register("5zxsa", (function(e, r) {
    t(e.exports, "ReactionToMultipleProps", (function() {
        return a
    }));
    var n = i("4MuSt");
    const a = (e, t, i) => {
        const r = [];
        return e.forEach((e => {
            const a = (0, n.reaction)(e, t, i);
            r.push(a)
        })), () => {
            r.forEach((e => {
                e()
            }))
        }
    }
})), i.register("fskI3", (function(e, r) {
    t(e.exports, "default", (function() {
        return f
    }));
    var n = i("hxEiv"),
        a = i("2FDaO"),
        d = i("jzG3S"),
        l = i("2gdWV"),
        s = i("3cf1x");
    let o, u, c = e => e;
    var f = e => (0, n.jsxs)(m, {
        children: [(0, n.jsxs)(g, {
            children: [(0, n.jsx)(d.default, {
                addingInfo: e.addingInfo
            }), (0, n.jsx)(l.default, {})]
        }), (0, n.jsx)(s.default, {})]
    });
    const m = a.default.div(o || (o = c`
  padding: 25px;
`)),
        g = a.default.div.attrs({
            className: "flex between vc"
        })(u || (u = c``))
})), i.register("jzG3S", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = i("hxEiv"),
        a = i("4y75y");
    i("fywoC");
    var d = i("69SUA"),
        l = i("8UJqa");
    var s = e => {
        const t = e.addingInfo;
        return (0, n.jsxs)("div", {
            children: [(0, n.jsxs)(a.default.Text, {
                style: {
                    fontFamily: d.Fonts.FugazOne
                },
                className: "allCaps",
                children: [t.tagline, ":"]
            }), (0, n.jsx)(a.default.Title, {
                level: 2,
                style: {
                    fontFamily: d.Fonts.FugazOne,
                    color: l.default.White,
                    marginTop: 2
                },
                className: "allCaps",
                children: t.title
            }), t.memoryCost ? (0, n.jsx)(a.default.Text, {
                style: {
                    marginTop: 5
                },
                children: t.memoryCost
            }) : null]
        })
    }
})), i.register("2gdWV", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = i("hxEiv");
    i("fywoC");
    var a = i("ekdtu"),
        d = i("beDfR");
    var l = () => (0, a.isAddingTerrain)() ? (0, n.jsx)(d.default, {}) : (0, n.jsx)("div", {})
})), i.register("beDfR", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = i("hxEiv"),
        a = i("93yIm"),
        d = i("lqzWa"),
        l = i("i5Qjx"),
        s = i("4y75y"),
        o = i("lpEVe"),
        u = i("fywoC"),
        c = i("2FDaO"),
        f = i("jmQOb"),
        m = i("gwxnT"),
        g = i("dmyzc"),
        v = i("2ri2K"),
        p = i("69SUA"),
        y = i("3sJmi"),
        x = i("1ZCZ6"),
        h = i("bDCcz");
    let T, C, S, A, j = e => e;
    var w = (0, o.observer)((() => {
        const {
            me: {
                adding: {
                    terrain: e
                }
            }
        } = (0, m.default)(), t = u.useRef(), i = u.useRef(), r = e.buildTerrainAsWall;
        return (0, n.jsx)(g.default, {
            children: (0, n.jsx)(M, {
                children: (0, n.jsxs)(l.default, {
                    direction: "vertical",
                    size: 10,
                    children: [(0, n.jsxs)(l.default, {
                        size: 10,
                        children: [(0, n.jsxs)(O, {
                            children: [(0, n.jsx)(D, {
                                children: (0, n.jsx)(s.default.Text, {
                                    style: $,
                                    children: "Layer"
                                })
                            }), (0, n.jsx)(b, {
                                children: (0, n.jsx)(d.default, {
                                    ref: t,
                                    style: {
                                        width: 150
                                    },
                                    value: e.currentlySelectedTerrainDepth,
                                    onChange: i => {
                                        var r, n;
                                        e.currentlySelectedTerrainDepth = i, null == t || null === (r = t.current) || void 0 === r || null === (n = r.blur) || void 0 === n || n.call(r)
                                    },
                                    children: new Array(f.default.maxDepth - f.default.minDepth + 1).fill(0).map(((e, t) => (0, n.jsxs)(d.default.Option, {
                                        value: t + 1,
                                        children: [t + 1, " - ", v.TerrainLayerNames[t] || "Layer"]
                                    }, `terrain-layer-${t}`)))
                                })
                            })]
                        }), (0, n.jsxs)(O, {
                            children: [(0, n.jsx)(D, {
                                children: (0, n.jsx)(s.default.Text, {
                                    style: $,
                                    children: "Brush Size"
                                })
                            }), (0, n.jsx)(b, {
                                children: (0, n.jsx)(d.default, {
                                    ref: i,
                                    style: {
                                        width: 100
                                    },
                                    value: e.brushSize,
                                    onChange: t => {
                                        var r, n;
                                        e.brushSize = t, null == i || null === (r = i.current) || void 0 === r || null === (n = r.blur) || void 0 === n || n.call(r)
                                    },
                                    children: new Array(4).fill(0).map(((e, t) => (0, n.jsx)(d.default.Option, {
                                        value: t + 1,
                                        children: t + 1
                                    }, `terrain-brush-size-${t}`)))
                                })
                            })]
                        })]
                    }), (0, h.isPlatformer)() ? null : (0, n.jsxs)(O, {
                        children: [(0, n.jsx)(D, {
                            children: (0, n.jsxs)(s.default.Text, {
                                style: $,
                                children: [(0, y.CapitalizeFirstLetter)(x.default.terrain.singular), " ", "Type"]
                            })
                        }), (0, n.jsx)(b, {
                            children: (0, n.jsxs)(a.default.Group, {
                                style: {
                                    width: "100%"
                                },
                                children: [(0, n.jsx)(a.default, {
                                    type: r ? "default" : "primary",
                                    onClick: () => {
                                        (0, h.isPlatformer)() || (e.buildTerrainAsWall = !1)
                                    },
                                    block: !0,
                                    children: "Floor"
                                }), (0, n.jsx)(a.default, {
                                    type: r ? "primary" : "default",
                                    onClick: () => {
                                        (0, h.isPlatformer)() || (e.buildTerrainAsWall = !0)
                                    },
                                    block: !0,
                                    children: "Wall"
                                })]
                            })
                        })]
                    })]
                })
            })
        })
    }));
    const M = c.default.div(T || (T = j``)),
        b = c.default.div.attrs({
            className: "maxWidth"
        })(C || (C = j``)),
        O = (0, c.default)(b)(S || (S = j``)),
        D = (0, c.default)(b)(A || (A = j`
  margin-bottom: 4px;
`)),
        $ = {
            fontWeight: p.FontWeights.Bold,
            fontStyle: "italic"
        }
})), i.register("2ri2K", (function(e, i) {
    t(e.exports, "TerrainLayerNames", (function() {
        return r
    }));
    const r = ["Bottom", "Lower", "Middle", "Upper", "Top"]
})), i.register("3cf1x", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = i("hxEiv");
    i("fywoC");
    var a = i("3NKKf"),
        d = i("dTNh4");
    var l = (0, i("lpEVe").observer)((() => (0, a.IsAddingWire)() ? (0, n.jsx)(d.default, {}) : null))
})), i.register("dTNh4", (function(e, r) {
    t(e.exports, "default", (function() {
        return T
    }));
    var n = i("hxEiv"),
        a = i("fywoC"),
        d = i("4ifJF"),
        l = i("4y75y"),
        s = i("2FDaO"),
        o = i("69SUA"),
        u = i("gwxnT"),
        c = i("lpEVe"),
        f = i("2Tpsx"),
        m = i("iMOcM"),
        g = i("1ZCZ6"),
        v = i("8UJqa");
    let p, y, x, h = e => e;
    var T = (0, c.observer)((() => {
        const {
            me: {
                adding: {
                    wires: e
                },
                context: {
                    __devicesUnderCursor: t
                }
            }
        } = (0, u.default)(), i = a.useMemo((() => {
            var i;
            return e.hoveringOverSupportedDevice ? t[0] && null !== (i = (0, f.FetchDeviceName)(t[0])) && void 0 !== i ? i : (0, m.capitalizeFirstLetter)(g.default.device.singular) : `Select a ${g.default.device.singular} or ${g.default.prop.singular} to ${e.startDeviceSelected?"complete":"start"} the ${g.default.wire.singular}`
        }), [e.hoveringOverSupportedDevice, t, e.startDeviceSelected]);
        return (0, n.jsxs)(d.CenteredColumn, {
            className: "maxWidth",
            children: [(0, n.jsx)(C, {
                children: (0, n.jsx)(l.default.Text, {
                    italic: !0,
                    children: i
                })
            }), (0, n.jsxs)(S, {
                children: [(0, n.jsx)(A, {
                    selected: !e.startDeviceSelected,
                    children: "Out"
                }), (0, n.jsx)(j, {}), (0, n.jsx)(A, {
                    selected: e.startDeviceSelected,
                    children: "In"
                })]
            })]
        })
    }));
    const C = s.default.div(p || (p = h``)),
        S = (0, s.default)(d.Centered).attrs({
            className: "maxWidth"
        })(y || (y = h``)),
        A = e => (0, n.jsx)(d.Centered, {
            style: {
                height: 50,
                width: 50,
                color: v.default.White,
                fontFamily: o.Fonts.FugazOne,
                textTransform: "uppercase",
                lineHeight: 1,
                fontSize: 10,
                background: "rgba(255,255,255,0.15)",
                border: (e.selected ? 3 : 0) + "px solid #ffca28",
                flexShrink: 0,
                borderRadius: "50%"
            },
            children: e.children
        }),
        j = s.default.div(x || (x = h`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`))
})), i.register("6gxPk", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var n = i("dnh3u"),
        a = i("fywoC"),
        d = i("5D7Fe"),
        l = i("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: d.default
            }))
        };
    s.displayName = "DownOutlined";
    var o = a.forwardRef(s)
})), i.register("5D7Fe", (function(e, i) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = {
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