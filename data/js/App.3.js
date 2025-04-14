function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, a, r) {
    Object.defineProperty(e, t, {
        get: a,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("k4bqt", (function(r, i) {
    var l;
    l = r.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), t(r.exports, "Container", (function() {
        return P
    })), t(r.exports, "Content", (function() {
        return S
    })), t(r.exports, "default", (function() {
        return A
    }));
    var n = a("hxEiv"),
        d = a("i5Qjx"),
        o = a("lpEVe");
    a("fywoC");
    var s = a("2FDaO"),
        c = a("8UJqa"),
        u = a("dmyzc"),
        f = a("c3ah8"),
        p = a("5OQ4z"),
        v = a("Q54Tn"),
        h = a("iRjsB"),
        y = a("bvStP"),
        g = a("lUtth"),
        D = a("2Tpsx"),
        x = a("4ifJF"),
        b = a("6vbUb"),
        m = a("jPfK1"),
        w = a("dSzUP"),
        I = a("bDCcz"),
        j = a("1ZCZ6");
    let C, O, M, k = e => e;
    var A = (0, o.observer)((t => {
        const a = () => {
            t.setToHomeScreen()
        };
        (0, p.default)(e(f).Input.Keyboard.KeyCodes.ESC, a, [a]);
        const r = h.default.me.editing.device.sortingState,
            i = e => {
                (0, g.MoveDeviceUp)(e, r)
            },
            l = e => {
                (0, g.MoveDeviceDown)(e, r)
            },
            d = e => {
                const t = r.filter((t => t.layer === e));
                return t.map(((a, r) => (0, n.jsx)(v.SortableDevice, {
                    onUp: 0 === r && e === y.default.DevicesAboveCharacters ? void 0 : i,
                    onDown: r === t.length - 1 && e === y.default.DevicesUnderCharacters ? void 0 : l,
                    deviceId: a.deviceId,
                    deviceName: (0, D.FetchDeviceName)(a.deviceId),
                    layer: a.layer,
                    y: a.y,
                    depth: a.depth,
                    globalDepth: a.globalDepth
                }, a.deviceId)))
            },
            o = d(y.default.DevicesAboveCharacters),
            s = d(y.default.DepthSortedCharactersAndDevices),
            c = d(y.default.DevicesUnderCharacters);
        return (0, n.jsx)(u.default, {
            className: "maxAll",
            children: (0, n.jsx)(P, {
                onClick: a,
                children: (0, n.jsxs)(S, {
                    onClick: e => e.stopPropagation(),
                    children: [(0, n.jsx)(w.default, {
                        onClick: a,
                        padding: 20,
                        fontSize: 20
                    }), (0, n.jsxs)(L, {
                        children: [(0, n.jsx)(m.default, {
                            layerName: (0, I.isPlatformer)() ? "In Front" : "Above",
                            layerDescription: (0, I.isPlatformer)() ? `In front of players and ${j.default.terrain.singular}` : "Above players",
                            devicesInLayer: o.length
                        }), o.length ? (0, n.jsx)(G, {
                            children: o
                        }) : null]
                    }), (0, n.jsx)(T, {}), (0, n.jsxs)(L, {
                        children: [(0, n.jsx)(m.default, {
                            layerName: (0, I.isPlatformer)() ? "Between" : "Primary",
                            layerDescription: (0, I.isPlatformer)() ? `In front of players, but behind ${j.default.terrain.singular}` : "Above or below players depending on their position",
                            devicesInLayer: s.length
                        }), s.length ? (0, n.jsx)(G, {
                            children: s
                        }) : null]
                    }), (0, n.jsx)(T, {}), (0, n.jsxs)(L, {
                        children: [(0, n.jsx)(m.default, {
                            layerName: (0, I.isPlatformer)() ? "Behind" : "Below",
                            layerDescription: (0, I.isPlatformer)() ? `Behind players and ${j.default.terrain.singular}` : "Under players",
                            devicesInLayer: c.length
                        }), c.length ? (0, n.jsx)(G, {
                            children: c
                        }) : null]
                    })]
                })
            })
        })
    }));
    const P = (0, s.default)(x.VerticallyCentered).attrs({
            className: "maxAll"
        })(C || (C = k``)),
        S = (0, s.default)(b.motion.div).attrs({
            className: "maxHeight scroll-y medium-shadow",
            initial: {
                x: "-100%",
                opacity: .25
            },
            animate: {
                x: "0%",
                opacity: 1
            },
            exit: {
                x: "-100%",
                opacity: .25
            },
            transition: {
                duration: .2,
                ease: "easeOut"
            }
        })(O || (O = k`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${0};
  padding: 20px;
  width: 410px;
`), c.default.White),
        L = s.default.div.attrs({
            className: "maxWidth"
        })(M || (M = k``)),
        G = e => (0, n.jsx)(d.default, {
            size: 10,
            direction: "vertical",
            className: "maxWidth",
            children: e.children
        }),
        T = () => (0, n.jsx)("div", {
            style: {
                height: 30
            }
        })
})), a.register("Q54Tn", (function(e, r) {
    t(e.exports, "SortableDevice", (function() {
        return P
    }));
    var i = a("hxEiv"),
        l = a("93yIm"),
        n = a("gnAdP"),
        d = a("l4uFh"),
        o = a("4y75y");
    a("fywoC");
    var s = a("2FDaO"),
        c = a("iRjsB"),
        u = a("fwdZN"),
        f = a("3RQjs"),
        p = a("gwuwo"),
        v = a("4ifJF"),
        h = a("py2Xr"),
        y = a("4PxYR"),
        g = a("kyM3N"),
        D = a("lpEVe"),
        x = a("6vbUb"),
        b = a("6zpVf");
    let m, w, I, j, C, O, M, k, A = e => e;
    const P = (0, D.observer)((e => {
            const {
                token: {
                    borderRadius: t
                }
            } = d.default.useToken();
            return (0, i.jsxs)(S, {
                onMouseEnter: () => {
                    c.default.me.editing.device.currentlySortedDeviceId = e.deviceId
                },
                onMouseLeave: () => {
                    c.default.me.editing.device.currentlySortedDeviceId === e.deviceId && (c.default.me.editing.device.currentlySortedDeviceId = "")
                },
                onClick: () => {
                    if (c.default.me.editing.device.currentlySortedDeviceId = "", c.default.me.currentAction === u.default.none) {
                        const t = (0, p.default)().worldManager.devices.getDeviceById(e.deviceId);
                        t && (c.default.me.editing.device.currentlyEditedDevice = {
                            id: t.id,
                            deviceOptionId: t.deviceOption.id
                        }, (0, f.default)(u.default.editingDevice), (0, b.EmitTutorialEvent)({
                            event: b.TutorialEventName.OPEN_DEVICE_OPTIONS,
                            device: t
                        }))
                    }
                },
                layout: !0,
                layoutId: `sort-${e.deviceId}`,
                children: [(0, i.jsxs)(L, {
                    style: {
                        borderRadius: t
                    },
                    children: [(0, i.jsx)(o.default.Text, {
                        style: {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        },
                        children: e.deviceName
                    }), (0, g.default)() ? (0, i.jsx)("div", {
                        style: {
                            flexShrink: 0
                        },
                        children: (0, i.jsx)(n.default, {
                            menu: {
                                items: (0, y.default)({
                                    props: e
                                })
                            },
                            children: (0, i.jsx)(l.default, {
                                icon: (0, i.jsx)(h.default, {
                                    name: "far fa-ellipsis-h"
                                }),
                                type: "text",
                                onClick: e => {
                                    e.stopPropagation()
                                }
                            })
                        })
                    }) : null]
                }), (0, g.default)() ? (0, i.jsxs)(G, {
                    onClick: e => e.stopPropagation(),
                    children: [(0, i.jsx)(l.default, {
                        icon: (0, i.jsx)(h.default, {
                            name: "fas fa-arrow-up"
                        }),
                        disabled: !e.onUp,
                        onClick: t => {
                            t.stopPropagation(), null == e || e.onUp(e.deviceId)
                        },
                        type: "text"
                    }), (0, i.jsx)(l.default, {
                        icon: (0, i.jsx)(h.default, {
                            name: "fas fa-arrow-down"
                        }),
                        type: "text",
                        disabled: !e.onDown,
                        onClick: t => {
                            t.stopPropagation(), null == e || e.onDown(e.deviceId)
                        }
                    })]
                }) : null]
            })
        })),
        S = (0, s.default)(x.motion.div).attrs({
            className: "maxWidth flex vc"
        })(m || (m = A``)),
        L = (0, s.default)(v.VerticallyCentered).attrs({
            className: "between"
        })(w || (w = A`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 12px 10px 18px;
  flex: 1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`)),
        G = (0, s.default)(v.VerticallyCentered)(I || (I = A`
  margin-left: 5px;
  flex-shrink: 0;
`));
    s.default.div(j || (j = A`
  overflow: hidden;
  margin-right: 15px;
`)), s.default.div(C || (C = A`
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)), s.default.div(O || (O = A`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`)), s.default.div(M || (M = A`
  display: flex;
  align-items: center;
`)), s.default.div(k || (k = A`
  display: flex;
  flex-direction: column;
`))
})), a.register("4PxYR", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var i = a("hxEiv"),
        l = a("py2Xr"),
        n = a("jV3wg"),
        d = a("bvStP"),
        o = a("enT9V"),
        s = a("23e7w");
    var c = e => {
        const {
            props: t
        } = e, a = [];
        return t.depth !== t.y && a.push({
            key: "reset-natural",
            label: "Reset To Natural Depth",
            icon: (0, i.jsx)(l.default, {
                name: "fas fa-bring-forward"
            }),
            onClick: (0, o.default)((() => (0, s.ResetDeviceDepth)(t.deviceId)))
        }), (0, n.IsDeviceOnLayer)(t.deviceId, d.default.DevicesAboveCharacters) || a.push({
            key: "above-layer",
            label: "Move To Above Layer",
            icon: (0, i.jsx)(l.default, {
                name: "fas fa-level-up"
            }),
            onClick: (0, o.default)((() => (0, n.MoveDeviceToLayer)(t.deviceId, d.default.DevicesAboveCharacters)))
        }), (0, n.IsDeviceOnLayer)(t.deviceId, d.default.DepthSortedCharactersAndDevices) || a.push({
            key: "primary-layer",
            label: "Move To Primary Layer",
            icon: (0, i.jsx)(l.default, {
                name: "fas fa-dot-circle"
            }),
            onClick: (0, o.default)((() => (0, n.MoveDeviceToLayer)(t.deviceId, d.default.DepthSortedCharactersAndDevices)))
        }), (0, n.IsDeviceOnLayer)(t.deviceId, d.default.DevicesUnderCharacters) || a.push({
            key: "below-layer",
            label: "Move To Below Layer",
            icon: (0, i.jsx)(l.default, {
                name: "fas fa-level-down"
            }),
            onClick: (0, o.default)((() => (0, n.MoveDeviceToLayer)(t.deviceId, d.default.DevicesUnderCharacters)))
        }), a
    }
})), a.register("jV3wg", (function(e, r) {
    t(e.exports, "MoveDeviceToLayer", (function() {
        return n
    })), t(e.exports, "IsDeviceOnLayer", (function() {
        return d
    }));
    var i = a("8gln7"),
        l = a("gwuwo");
    const n = (e, t) => {
            const a = (0, l.default)().worldManager.devices.getDeviceById(e);
            a && a.layers.getLayer() !== t && (0, i.default)({
                depth: a.layers.getOptionsDepth(),
                layerId: t,
                name: a.name,
                deviceOption: a.deviceOption,
                id: a.id,
                isPreview: !1,
                options: a.options,
                placedByClient: !1,
                state: a.deviceOption.defaultState,
                x: a.x,
                y: a.y
            })
        },
        d = (e, t) => {
            const a = (0, l.default)().worldManager.devices.getDeviceById(e);
            return !!a && a.layers.getLayer() === t
        }
})), a.register("8gln7", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var i = a("gwuwo"),
        l = a("fCcDT"),
        n = a("5NW69"),
        d = a("CqOkB");
    var o = e => {
        const t = (0, i.default)().worldManager.devices.getDeviceById(e.id);
        if (!t) return;
        const a = (0, d.default)(e.id);
        if (!a) return;
        const r = e.hooks || a.hooks;
        (0, l.default)({
            ...e,
            hooks: r,
            placeInstantly: !0,
            onPlace: a => {
                a && (0, n.default)({
                    id: t.id,
                    deviceTypeId: t.deviceOption.id,
                    options: JSON.stringify(e.options),
                    x: e.x,
                    y: e.y,
                    depth: a.layers.getOptionsDepth(),
                    layerId: a.layers.getOptionsLayer(),
                    name: e.name,
                    hooks: r
                })
            }
        })
    }
})), a.register("enT9V", (function(e, a) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = e => t => {
        t.domEvent.stopPropagation(), e && e()
    }
})), a.register("23e7w", (function(e, r) {
    t(e.exports, "ResetDeviceDepth", (function() {
        return n
    }));
    var i = a("8gln7"),
        l = a("gwuwo");
    const n = e => {
        const t = (0, l.default)().worldManager.devices.getDeviceById(e);
        t && (0, i.default)({
            depth: void 0,
            layerId: t.layers.getOptionsLayer(),
            name: t.name,
            deviceOption: t.deviceOption,
            id: t.id,
            isPreview: !1,
            options: t.options,
            placedByClient: !1,
            state: t.deviceOption.defaultState,
            x: t.x,
            y: t.y
        })
    }
})), a.register("lUtth", (function(e, r) {
    t(e.exports, "MoveDeviceUp", (function() {
        return c
    })), t(e.exports, "MoveDeviceDown", (function() {
        return u
    }));
    var i = a("8gln7"),
        l = a("gwuwo"),
        n = a("40wDh"),
        d = a("jA9Ql"),
        o = a("23e7w"),
        s = a("iRjsB");
    const c = (e, t) => {
            const a = t.findIndex((t => t.deviceId === e));
            if (t[a] && t[a - 1] && t[a].globalDepth === t[a - 1].globalDepth) return void p(t, a, a - 1);
            const r = (0, n.GetDepthAfterMoveUp)(t[a], t[a - 2], t[a - 1]),
                o = (0, l.default)().worldManager.devices.getDeviceById(e);
            if (!o) return;
            const {
                depthOnLayer: s,
                layer: c
            } = (0, d.GetLayerAndLocalDepth)(r);
            t[a].layer = c, t[a].depth = s, t[a].globalDepth = r, (0, i.default)({
                depth: s,
                layerId: c,
                name: o.name,
                deviceOption: o.deviceOption,
                id: o.id,
                isPreview: !1,
                options: o.options,
                placedByClient: !1,
                state: o.deviceOption.defaultState,
                x: o.x,
                y: o.y
            }), f(t)
        },
        u = (e, t) => {
            const a = t.findIndex((t => t.deviceId === e));
            if (t[a] && t[a + 1] && t[a].globalDepth === t[a + 1].globalDepth) return void p(t, a, a + 1);
            const r = (0, n.GetDepthAfterMoveDown)(t[a], t[a + 1], t[a + 2]),
                o = (0, l.default)().worldManager.devices.getDeviceById(e);
            if (!o) return;
            const {
                depthOnLayer: s,
                layer: c
            } = (0, d.GetLayerAndLocalDepth)(r);
            t[a].layer = c, t[a].depth = s, t[a].globalDepth = r, (0, i.default)({
                depth: s,
                layerId: c,
                name: o.name,
                deviceOption: o.deviceOption,
                id: o.id,
                isPreview: !1,
                options: o.options,
                placedByClient: !1,
                state: o.deviceOption.defaultState,
                x: o.x,
                y: o.y
            }), f(t)
        },
        f = e => {
            e = e.sort(((e, t) => t.globalDepth - e.globalDepth));
            const t = [];
            let a = !0;
            for (; a && !s.default.me.editing.device.usingMultiselect;) {
                a = !1;
                for (let r = 0; r < e.length; r++) {
                    const i = e[r],
                        l = (0, d.GetGlobalDepth)(i.y, i.layer);
                    if (!(l === i.globalDepth)) {
                        const n = 0 === r || e[r - 1].globalDepth > l,
                            o = r === e.length - 1 || e[r + 1].globalDepth < l;
                        n && o && (i.globalDepth = l, i.depth = (0, d.GetLayerAndLocalDepth)(l).depthOnLayer, t.push(i), a = !0)
                    }
                }
                t.forEach((e => {
                    (0, o.ResetDeviceDepth)(e.deviceId)
                }))
            }
        },
        p = (e, t, a) => {
            const r = e[t];
            e[t] = e[a], e[a] = r;
            const i = (0, l.default)().worldManager.devices.allDevices.findIndex((t => t.id === e[a].deviceId)),
                n = (0, l.default)().worldManager.devices.allDevices.findIndex((a => a.id === e[t].deviceId)),
                d = (0, l.default)().worldManager.devices.allDevices[i];
            (0, l.default)().worldManager.devices.allDevices[i] = (0, l.default)().worldManager.devices.allDevices[n], (0, l.default)().worldManager.devices.allDevices[n] = d
        }
})), a.register("40wDh", (function(e, r) {
    t(e.exports, "GetDepthAfterMoveUp", (function() {
        return s
    })), t(e.exports, "GetDepthAfterMoveDown", (function() {
        return c
    }));
    var i = a("bvStP"),
        l = a("jA9Ql");
    const n = (e, t) => {
            const a = e.layer === t.layer,
                r = u(e.layer) === t.layer;
            if (a) {
                return Math.max(t.globalDepth + 1, (0, l.GetGlobalDepth)(e.y, e.layer))
            }
            if (r) {
                return Math.min(t.globalDepth - 1, (0, l.GetGlobalDepth)(e.y, t.layer))
            }
            return (0, l.GetGlobalDepth)(e.y, i.default.DepthSortedCharactersAndDevices)
        },
        d = (e, t) => {
            const a = e.layer === t.layer,
                r = f(e.layer) === t.layer;
            if (a) {
                return Math.min(t.globalDepth - 1, (0, l.GetGlobalDepth)(e.y, e.layer))
            }
            if (r) {
                return Math.max(t.globalDepth + 1, (0, l.GetGlobalDepth)(e.y, t.layer))
            }
            return (0, l.GetGlobalDepth)(e.y, i.default.DepthSortedCharactersAndDevices)
        },
        o = (e, t, a) => {
            const r = (0, l.GetLayerAndLocalDepth)(a.globalDepth).layer,
                i = (0, l.GetGlobalDepth)(e.y, r);
            return i > a.globalDepth && i < t.globalDepth ? i : (t.globalDepth + a.globalDepth) / 2
        },
        s = (e, t, a) => {
            if (!a) {
                const t = u(e.layer);
                if (!t) return e.globalDepth;
                return (0, l.GetGlobalDepth)(e.y, t)
            }
            return t ? a.layer !== t.layer || e.layer !== a.layer ? n(e, a) : o(e, t, a) : n(e, a)
        },
        c = (e, t, a) => {
            if (!t) {
                const t = f(e.layer);
                if (!t) return e.globalDepth;
                return (0, l.GetGlobalDepth)(e.y, t)
            }
            return a ? a.layer !== t.layer || e.layer !== t.layer ? d(e, t) : o(e, t, a) : d(e, t)
        },
        u = e => e === i.default.DepthSortedCharactersAndDevices ? i.default.DevicesAboveCharacters : e === i.default.DevicesUnderCharacters ? i.default.DepthSortedCharactersAndDevices : null,
        f = e => e === i.default.DepthSortedCharactersAndDevices ? i.default.DevicesUnderCharacters : e === i.default.DevicesAboveCharacters ? i.default.DepthSortedCharactersAndDevices : null
})), a.register("2Tpsx", (function(e, r) {
    t(e.exports, "FetchDeviceName", (function() {
        return d
    }));
    var i = a("z5iun"),
        l = a("7w7xg"),
        n = a("iRjsB");
    const d = e => {
        const t = n.default.world.devices.devices.get(e);
        if (!t) return "";
        if (t.name) return t.name;
        if (t.deviceOption.id === i.default.prop) {
            const e = t.options;
            if (e.propId) {
                var a;
                const t = null === (a = (0, l.default)(e.propId)) || void 0 === a ? void 0 : a.name;
                if (t) return t
            }
        }
        return t.deviceOption.name
    }
})), a.register("jPfK1", (function(e, r) {
    t(e.exports, "default", (function() {
        return h
    }));
    var i = a("hxEiv");
    a("fywoC");
    var l = a("2FDaO"),
        n = a("69SUA"),
        d = a("l4uFh"),
        o = a("4y75y"),
        s = a("1ZCZ6"),
        c = a("4ifJF");
    d = a("l4uFh"), o = a("4y75y");
    let u, f, p, v = e => e;
    var h = e => {
        const {
            token: {
                borderRadius: t
            }
        } = d.default.useToken();
        return (0, i.jsxs)(y, {
            children: [(0, i.jsx)(g, {
                children: (0, i.jsx)(o.default.Title, {
                    level: 4,
                    style: {
                        fontFamily: n.Fonts.FugazOne
                    },
                    children: e.layerName
                })
            }), (0, i.jsx)(o.default.Text, {
                children: e.layerDescription
            }), e.devicesInLayer ? (0, i.jsx)("div", {
                style: {
                    height: 10
                }
            }) : (0, i.jsx)(D, {
                style: {
                    borderRadius: t
                },
                children: (0, i.jsxs)(o.default.Text, {
                    children: ["No ", s.default.device.plural, " or", " ", s.default.prop.plural, " on this layer"]
                })
            })]
        })
    };
    const y = l.default.div.attrs({
            className: "maxWidth"
        })(u || (u = v``)),
        g = l.default.div(f || (f = v`
  text-transform: uppercase;
`)),
        D = (0, l.default)(c.Centered)(p || (p = v`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`))
})), a.register("1ZCZ6", (function(e, a) {
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
}));