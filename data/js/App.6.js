function e(e, t, n, i) {
    Object.defineProperty(e, t, {
        get: n,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("i6pG0", (function(t, i) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return W
    }));
    var l = n("hxEiv"),
        r = n("fywoC"),
        s = n("2FDaO"),
        o = n("lpEVe"),
        d = n("gwxnT"),
        u = n("8iT9z"),
        c = n("9xElQ"),
        f = n("i5Qjx"),
        p = n("4y75y"),
        m = n("iMOcM"),
        h = n("69SUA"),
        v = n("l8xdc"),
        x = n("3kfHm"),
        g = n("4dEdL"),
        y = n("7hbZY"),
        j = n("k4lId"),
        w = n("16vrQ"),
        b = n("5KLIO"),
        O = n("jRLug"),
        C = n("8U0mG"),
        k = n("8z6zI"),
        S = n("G0MbA"),
        M = n("aNA20"),
        T = n("aP4WC"),
        E = n("3RQjs"),
        N = n("fwdZN"),
        z = n("8xO7p");
    let D;
    var W = (0, o.observer)((e => {
        const {
            gui: {
                none: {
                    optionsMenu: {
                        screen: t
                    }
                }
            },
            me: {
                roleLevel: n
            }
        } = (0, d.default)(), i = (0, k.useAmIGameOwner)(), [a, s, o] = (0, m.useBoolean)(!0), [D, W] = r.useState(!0);
        (0, u.useInputBlockingUI)();
        const L = r.useMemo((() => t === x.OptionsMenuScreen.mapOptions), [t]),
            A = r.useMemo((() => t === x.OptionsMenuScreen.editing), [t]),
            F = r.useMemo((() => t === x.OptionsMenuScreen.permissions), [t]),
            P = r.useMemo((() => t === x.OptionsMenuScreen.saving), [t]),
            R = r.useMemo((() => t === x.OptionsMenuScreen.help), [t]),
            B = r.useMemo((() => t === x.OptionsMenuScreen.publishing), [t]),
            I = () => {
                e.setToHomeScreen(), V(x.OptionsMenuScreen.home)
            },
            Z = r.useCallback((() => {
                D ? I() : A || F || L || P || R || B || o()
            }), [o, L, A, F, P, R, B, D, I]),
            V = e => (0, g.default)(e),
            Q = e => {
                (0, j.playClickSound)(), V(e)
            },
            $ = () => {
                V(x.OptionsMenuScreen.home)
            };
        return (0, l.jsx)(c.default, {
            placement: "left",
            open: a,
            onClose: Z,
            afterOpenChange: e => {
                e && W(!1), e || I()
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, l.jsxs)(G, {
                children: [(0, l.jsx)(p.default.Title, {
                    style: {
                        fontFamily: h.Fonts.FugazOne,
                        textTransform: "uppercase",
                        textAlign: "center"
                    },
                    level: 1,
                    children: "Options"
                }), (0, l.jsx)("div", {
                    style: {
                        height: 14
                    }
                }), (0, l.jsxs)(f.default, {
                    className: "maxAll",
                    direction: "vertical",
                    size: 14,
                    children: [i ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(v.default, {
                            icon: "fas fa-sliders-v-square",
                            title: "Map Options",
                            description: "Customize teams, game duration, and who is determined as the winner",
                            onClick: () => {
                                (0, j.playClickSound)(), (0, b.default)((() => {
                                    V(x.OptionsMenuScreen.mapOptions)
                                }))
                            }
                        }), (0, l.jsx)(O.default, {
                            open: L,
                            close: $
                        })]
                    }) : null, (0, l.jsx)(v.default, {
                        icon: "fas fa-i-cursor",
                        title: "Editing Options",
                        description: "Adjust player collision, speed, and other settings to help you while editing",
                        onClick: () => Q(x.OptionsMenuScreen.editing)
                    }), i && !(0, M.IsTutorial)() ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(v.default, {
                            icon: "fas fa-upload",
                            title: "Publish",
                            description: "Publish your map to be played by Gimkit users from around the world!",
                            onClick: () => Q(x.OptionsMenuScreen.publishing)
                        }), (0, l.jsx)(v.default, {
                            icon: "fas fa-share",
                            title: "Showcase & Save",
                            description: "Send a link to friends to have them test out your map!",
                            onClick: () => Q(x.OptionsMenuScreen.saving)
                        }), n >= T.RoleLevelConsts.admin ? (0, l.jsx)(v.default, {
                            icon: "fas fa-brackets-curly",
                            title: "Hooks",
                            description: "Allow game hosts to customize your map before hopping in!",
                            onClick: () => (0, E.default)(N.default.hooks)
                        }) : null, (0, l.jsx)(v.default, {
                            icon: "fas fa-user-tag",
                            title: "Permissions",
                            description: "Control who can make changes to the map when editing collaboratively",
                            onClick: () => Q(x.OptionsMenuScreen.permissions)
                        }), (0, l.jsx)(z.default, {
                            open: B,
                            close: $
                        }), (0, l.jsx)(y.default, {
                            open: F,
                            close: $
                        }), (0, l.jsx)(C.default, {
                            open: P,
                            close: $
                        })]
                    }) : null, (0, l.jsx)(v.default, {
                        icon: "fas fa-comment-dots",
                        title: "Documentation & Help",
                        description: "Get help building your map!",
                        onClick: () => Q(x.OptionsMenuScreen.help)
                    }), (0, l.jsx)(S.default, {
                        open: R,
                        close: $
                    })]
                }), (0, l.jsx)(w.default, {
                    open: A,
                    close: $
                })]
            })
        })
    }));
    const G = s.default.div.attrs({
        className: "maxWidth"
    })(D || (D = (e => e)``))
})), n.register("l8xdc", (function(t, i) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("hxEiv"),
        l = n("4y75y");
    n("fywoC");
    var r = n("2FDaO"),
        s = n("69SUA"),
        o = n("4ifJF"),
        d = n("py2Xr");
    let u;
    var c = e => {
        const {
            title: t,
            description: n
        } = e;
        return (0, a.jsxs)(f, {
            onClick: e.onClick,
            children: [(0, a.jsx)("div", {
                style: {
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: 14,
                    marginRight: 20
                },
                children: (0, a.jsx)(d.default, {
                    name: e.icon
                })
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(l.default.Title, {
                    style: {
                        marginBottom: 2,
                        fontWeight: s.FontWeights.Bold
                    },
                    level: 4,
                    children: t
                }), (0, a.jsx)(l.default.Text, {
                    children: n
                })]
            })]
        })
    };
    const f = (0, r.default)(o.VerticallyCentered).attrs({
        className: "maxWidth"
    })(u || (u = (e => e)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`))
})), n.register("4dEdL", (function(t, i) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("iRjsB");
    var l = e => {
        a.default.gui.none.optionsMenu.screen = e
    }
})), n.register("7hbZY", (function(t, i) {
    e(t.exports, "default", (function() {
        return j
    }));
    var a = n("hxEiv"),
        l = n("9xElQ"),
        r = n("i5Qjx"),
        s = n("l89Zc"),
        o = n("4y75y");
    n("fywoC");
    var d = n("2FDaO"),
        u = n("1ZCZ6"),
        c = n("8UJqa"),
        f = n("3sJmi"),
        p = n("grjnz"),
        m = n("gwxnT"),
        h = n("lpEVe"),
        v = n("2nLHZ");
    let x;
    const g = (0, h.observer)((e => {
            const {
                session: {
                    globalPermissions: t
                }
            } = (0, m.default)(), n = (e, n) => {
                const i = {
                    adding: t.adding,
                    removing: t.removing,
                    editing: t.editing,
                    manageCodeGrids: t.manageCodeGrids
                };
                i[e] = n, (0, v.default)(i)
            };
            return (0, a.jsxs)(l.default, {
                placement: "left",
                open: e.open,
                onClose: e.close,
                width: 450,
                title: "Permissions",
                children: [(0, a.jsx)(o.default.Text, {
                    children: "Set what other players collaborating with you are allowed to do! Changes are applied immediately."
                }), (0, a.jsxs)(r.default, {
                    direction: "vertical",
                    className: "maxWidth",
                    size: 14,
                    style: {
                        marginTop: 22
                    },
                    children: [(0, a.jsx)(y, {
                        name: "Adding",
                        description: `Are other players allowed to add ${u.default.terrain.singular}, ${u.default.prop.plural}, ${u.default.device.plural}, and ${u.default.wire.singular} to the map?`,
                        enabled: t.adding,
                        onChange: e => n("adding", e)
                    }), (0, a.jsx)(y, {
                        name: "Removing",
                        description: "Are other players allowed to remove things from the map?",
                        enabled: t.removing,
                        onChange: e => n("removing", e)
                    }), (0, a.jsx)(y, {
                        name: "Editing",
                        description: `Are other players allowed to modify options for ${u.default.prop.plural}, ${u.default.device.plural}, and ${u.default.wire.singular}?`,
                        enabled: t.editing,
                        onChange: e => n("editing", e)
                    }), (0, a.jsx)(y, {
                        name: (0, f.CapitalizeFirstLetter)(p.default.grid.plural),
                        description: `Are other players allowed to create and edit ${p.default.grid.plural} for ${u.default.device.plural}?`,
                        enabled: t.manageCodeGrids,
                        onChange: e => n("manageCodeGrids", e)
                    })]
                })]
            })
        })),
        y = e => (0, a.jsxs)(w, {
            children: [(0, a.jsxs)("div", {
                style: {
                    marginRight: 35
                },
                children: [(0, a.jsx)(o.default.Title, {
                    level: 5,
                    style: {
                        color: c.default.White
                    },
                    children: e.name
                }), (0, a.jsx)(o.default.Text, {
                    children: e.description
                })]
            }), (0, a.jsx)("div", {
                children: (0, a.jsx)(s.default, {
                    checked: e.enabled,
                    onChange: e.onChange
                })
            })]
        });
    var j = g;
    const w = d.default.div.attrs({
        className: "flex between"
    })(x || (x = (e => e)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`))
})), n.register("1ZCZ6", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var i = {
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
})), n.register("2nLHZ", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var a = n("9q1Gv"),
        l = n("cCnGt");
    var r = e => {
        (0, l.default)(a.default.setGlobalPermissions, {
            adding: e.adding,
            removing: e.removing,
            editing: e.editing,
            manageCodeGrids: e.manageCodeGrids
        })
    }
})), n.register("16vrQ", (function(t, i) {
    e(t.exports, "default", (function() {
        return z
    }));
    var a = n("hxEiv"),
        l = n("9xElQ"),
        r = n("lqzWa"),
        s = n("5wngH"),
        o = n("i5Qjx"),
        d = n("4y75y"),
        u = n("fywoC"),
        c = n("2FDaO"),
        f = n("1ZCZ6"),
        p = n("8UJqa"),
        m = n("lpEVe"),
        h = n("gwxnT"),
        v = n("50omC"),
        x = n("1QRIq"),
        g = n("hkFZE"),
        y = n("3sJmi"),
        j = n("8MAwC"),
        w = n("dJWsc"),
        b = n("j8szt"),
        O = n("lzcjW"),
        C = n("3wfYN"),
        k = n("gwuwo");
    let S;
    const M = [0, 64, 32, 16, 8, 4, 2],
        T = [{
            value: .25,
            name: "0.25x"
        }, {
            value: .5,
            name: "0.5x"
        }, {
            value: 1,
            name: "1x"
        }, {
            value: 1.5,
            name: "1.5x"
        }, {
            value: 2,
            name: "2x"
        }, {
            value: 3,
            name: "3x"
        }, {
            value: 3.5,
            name: "3.5x"
        }, {
            value: 4,
            name: "4x"
        }],
        E = (0, m.observer)((e => {
            const {
                editing: t,
                me: n,
                gui: i
            } = (0, h.default)();
            var d;
            const [c, p] = u.useState(null !== (d = localStorage.getItem(b.default.zonedDeviceViews)) && void 0 !== d ? d : O.ZonedDeviceDisplayOptions.bordersOnly);
            return (0, a.jsx)(l.default, {
                placement: "left",
                open: e.open,
                onClose: e.close,
                width: 450,
                title: "Editing Options",
                children: (0, a.jsxs)(o.default, {
                    direction: "vertical",
                    className: "maxWidth",
                    size: 14,
                    children: [(0, a.jsx)(N, {
                        name: "Camera Zoom",
                        description: "Zoom out to see more in edit mode",
                        children: (0, a.jsx)(s.default, {
                            min: .3,
                            max: 1.5,
                            step: .1,
                            className: "maxWidth",
                            value: n.editing.preferences.cameraZoom,
                            onChange: e => {
                                n.editing.preferences.cameraZoom = e, (0, k.default)().cameraHelper.forceRefresh()
                            }
                        })
                    }), (0, a.jsx)(N, {
                        name: "Player Collision",
                        description: "Disable to walk through walls & objects in edit mode",
                        children: (0, a.jsxs)(r.default, {
                            className: "maxWidth",
                            value: n.phase,
                            onChange: e => {
                                n.editing.preferences.phase = e, (0, v.default)(e)
                            },
                            children: [(0, a.jsx)(r.default.Option, {
                                value: !1,
                                children: "On"
                            }), (0, a.jsx)(r.default.Option, {
                                value: !0,
                                children: "Off"
                            })]
                        })
                    }), (0, a.jsx)(N, {
                        name: "Player Speed",
                        description: "Adjust how fast you move in edit mode",
                        children: (0, a.jsx)(r.default, {
                            className: "maxWidth",
                            value: n.movementSpeed / x.default.normal,
                            onChange: e => {
                                n.editing.preferences.movementSpeed = e, (0, g.default)(e)
                            },
                            children: T.map((e => (0, a.jsx)(r.default.Option, {
                                value: e.value,
                                children: e.name
                            }, `speed-${e.value}`)))
                        })
                    }), (0, a.jsx)(N, {
                        name: "Grid Snap",
                        description: `When placing ${f.default.prop.plural} & ${f.default.device.plural}, easily align them using grid snap`,
                        children: (0, a.jsx)(r.default, {
                            className: "maxWidth",
                            value: t.gridSnap,
                            onChange: e => t.gridSnap = e,
                            children: M.map((e => (0, a.jsx)(r.default.Option, {
                                value: e,
                                children: 0 === e ? "Off" : e
                            }, `grid-snap-${e}`)))
                        })
                    }), (0, a.jsx)(N, {
                        name: "Show Grid",
                        children: (0, a.jsxs)(r.default, {
                            className: "maxWidth",
                            value: i.showingGrid,
                            onChange: e => {
                                n.editing.preferences.showGrid = e, i.showingGrid = e
                            },
                            children: [(0, a.jsx)(r.default.Option, {
                                value: !1,
                                children: "Off"
                            }), (0, a.jsx)(r.default.Option, {
                                value: !0,
                                children: "On"
                            })]
                        })
                    }), (0, a.jsx)(N, {
                        name: `Zone ${(0,y.CapitalizeFirstLetter)(f.default.device.singular)} Display`,
                        description: `Set the appearance of ${f.default.device.plural} that use a zone area`,
                        children: (0, a.jsxs)(r.default, {
                            className: "maxWidth",
                            value: c,
                            onChange: e => {
                                localStorage.setItem(b.default.zonedDeviceViews, e), p(e), (0, C.Reset)()
                            },
                            children: [(0, a.jsx)(r.default.Option, {
                                value: O.ZonedDeviceDisplayOptions.visible,
                                children: "Visible"
                            }), (0, a.jsx)(r.default.Option, {
                                value: O.ZonedDeviceDisplayOptions.bordersOnly,
                                children: "Borders Only"
                            }), (0, a.jsx)(r.default.Option, {
                                value: O.ZonedDeviceDisplayOptions.fullyHidden,
                                children: "Hidden"
                            })]
                        })
                    }), (0, a.jsx)(N, {
                        name: `${(0,y.CapitalizeFirstLetter)(j.MemoryName)} Bar`,
                        description: `Show the ${j.MemoryName} bar, even if ${j.MemoryName} is below ${w.DEFAULT_SHOW_MEMORY_AT_PERCENT}%`,
                        children: (0, a.jsxs)(r.default, {
                            className: "maxWidth",
                            value: t.showMemoryBarAtAllTimes,
                            onChange: e => t.showMemoryBarAtAllTimes = e,
                            children: [(0, a.jsx)(r.default.Option, {
                                value: !1,
                                children: "Off"
                            }), (0, a.jsx)(r.default.Option, {
                                value: !0,
                                children: "On"
                            })]
                        })
                    })]
                })
            })
        })),
        N = e => (0, a.jsxs)(D, {
            children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)(d.default.Title, {
                    level: 5,
                    style: {
                        color: p.default.White
                    },
                    children: e.name
                }), e.description ? (0, a.jsx)(d.default.Text, {
                    children: e.description
                }) : null]
            }), (0, a.jsx)("div", {
                style: {
                    marginTop: 10
                },
                children: e.children
            })]
        });
    var z = E;
    const D = c.default.div.attrs({
        className: "maxWidth"
    })(S || (S = (e => e)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`))
})), n.register("j8szt", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var i = {
        zonedDeviceViews: "zoned-device-views"
    }
})), n.register("lzcjW", (function(t, i) {
    e(t.exports, "ZonedDeviceDisplayOptions", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return o
    }));
    var a = n("j8szt");
    let l;
    var r;
    (r = l || (l = {})).visible = "visible", r.bordersOnly = "bordersOnly", r.fullyHidden = "fullyHidden";
    const s = () => {
        const e = localStorage.getItem(a.default.zonedDeviceViews);
        return e || l.bordersOnly
    };
    var o = {
        shouldShow: e => s() !== l.fullyHidden,
        shouldShowInnerZone: e => s() !== l.bordersOnly
    }
})), n.register("5KLIO", (function(t, i) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("iRjsB"),
        l = n("z5iun"),
        r = n("gwuwo"),
        s = n("fCcDT"),
        o = n("2mjL9"),
        d = n("5NW69"),
        u = n("AM8G0");
    var c = e => {
        const t = (0, r.default)().worldManager.devices.allDevices.find((e => e.deviceOption.id === l.default.mapOptions)),
            n = t => {
                a.default.me.editing.device.currentlyEditedDevice = {
                    id: t,
                    deviceOptionId: l.default.mapOptions
                }, e()
            };
        t ? n(t.id) : (0, s.default)({
            id: (0, u.GenerateNewDeviceId)(),
            deviceOption: (0, o.FetchDeviceOptionById)(l.default.mapOptions),
            x: 0,
            y: 0,
            name: "",
            options: {},
            state: {},
            placedByClient: !0,
            isPreview: !1,
            onPlace: e => {
                (0, d.default)({
                    id: e.id,
                    deviceTypeId: l.default.mapOptions,
                    x: e.x,
                    y: e.y,
                    name: e.name,
                    options: JSON.stringify(e.options)
                }), n(e.id)
            }
        })
    }
})), n.register("jRLug", (function(t, i) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("hxEiv"),
        l = n("9xElQ");
    n("fywoC");
    var r = n("lpEVe"),
        s = n("gwuwo"),
        o = n("z5iun"),
        d = n("59VVw"),
        u = n("9kHWt");
    var c = (0, r.observer)((e => {
        const {
            options: t,
            position: n,
            hooks: i
        } = (0, d.default)();
        return (0, a.jsx)(l.default, {
            placement: "left",
            open: e.open,
            onClose: e.close,
            width: 550,
            title: "Map Options",
            children: (() => {
                const e = (0, s.default)().worldManager.devices.allDevices.find((e => e.deviceOption.id === o.default.mapOptions));
                return e ? (0, a.jsx)(u.default, {
                    device: e,
                    deviceOption: e.deviceOption,
                    options: t,
                    position: n,
                    hooks: i
                }) : null
            })()
        })
    }))
})), n.register("8U0mG", (function(t, i) {
    e(t.exports, "default", (function() {
        return b
    }));
    var a = n("hxEiv"),
        l = n("kPX2r"),
        r = n("c6BvM"),
        s = n("93yIm"),
        o = n("fC6cp"),
        d = n("9xElQ"),
        u = n("b9Zw0"),
        c = n("cy4A6"),
        f = n("fBuQJ"),
        p = n("4y75y");
    n("fywoC");
    var m = n("cCnGt"),
        h = n("9q1Gv"),
        v = n("lKmIF"),
        x = n("iMOcM"),
        g = (x = n("iMOcM"), n("69SUA")),
        y = n("lpEVe"),
        j = n("gwxnT"),
        w = n("aP4WC");
    var b = (0, y.observer)((e => {
        const {
            me: {
                roleLevel: t
            }
        } = (0, j.default)(), [n, i, y] = (0, x.useBoolean)(!1);
        return (0, a.jsxs)(d.default, {
            placement: "left",
            open: e.open,
            onClose: e.close,
            width: 570,
            title: "Showcase & Save",
            children: [(0, a.jsx)(p.default.Title, {
                level: 4,
                style: {
                    color: v.default.White
                },
                children: "Showcase Link"
            }), (0, a.jsx)(p.default.Text, {
                style: {
                    marginTop: 2
                },
                children: "Generate a showcase link! Share the link with friends to have them test your map!"
            }), (0, a.jsx)(s.default, {
                block: !0,
                size: "large",
                type: "primary",
                loading: n,
                icon: (0, a.jsx)(r.default, {}),
                onClick: () => {
                    n || (i(), (0, x.request)({
                        url: "/api/created-map/publish-link",
                        data: {
                            id: window._mapId
                        },
                        success: e => {
                            const t = `${(0,x.getDomain)()}/creative/showcase/${e.id}`;
                            f.default.success({
                                icon: (0, a.jsx)(a.Fragment, {}),
                                footer: null,
                                width: 550,
                                closable: !0,
                                maskClosable: !0,
                                bodyStyle: {
                                    padding: 20
                                },
                                content: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(p.default.Title, {
                                        level: 4,
                                        style: {
                                            fontWeight: g.FontWeights.Bold
                                        },
                                        children: "Showcase Link"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex vc",
                                        style: {
                                            marginTop: 2
                                        },
                                        children: [(0, a.jsx)(u.default, {
                                            type: "text",
                                            value: t,
                                            readOnly: !0
                                        }), (0, a.jsx)(s.default, {
                                            style: {
                                                marginLeft: 10
                                            },
                                            type: "primary",
                                            onClick: () => {
                                                var e;
                                                null === navigator || void 0 === navigator || null === (e = navigator.clipboard) || void 0 === e || e.writeText(t), c.default.success("Copied to clipboard!")
                                            },
                                            children: "Copy Link"
                                        })]
                                    }), (0, a.jsx)(o.default, {}), (0, a.jsxs)(p.default.Text, {
                                        children: ["Your map is ready to be showcased! Share this link with others, and they can play the map you've made! ", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsxs)("b", {
                                            children: ["This link expires ", e.expirationDays, " ", (0, x.plural)("day", e.expirationDays), " from now."]
                                        }), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "After the link expires, you can always generate a new link."]
                                    })]
                                })
                            })
                        },
                        both: y
                    }))
                },
                style: {
                    marginTop: 10
                },
                children: "Generate Showcase Link"
            }), (0, a.jsx)(o.default, {}), (0, a.jsx)(p.default.Title, {
                level: 4,
                style: {
                    color: v.default.White
                },
                children: "Save"
            }), (0, a.jsx)(p.default.Text, {
                style: {
                    marginTop: 2
                },
                children: "Maps are automatically saved every few minutes. However, you can save manually by clicking the button below!"
            }), (0, a.jsx)(s.default, {
                block: !0,
                size: "large",
                type: "primary",
                icon: (0, a.jsx)(l.default, {}),
                onClick: () => (0, m.default)(h.default.save, {}),
                style: {
                    marginTop: 10
                },
                children: "Save Map"
            }), t >= w.RoleLevelConsts.admin ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(o.default, {}), (0, a.jsx)(s.default, {
                    block: !0,
                    size: "large",
                    type: "primary",
                    icon: (0, a.jsx)(l.default, {}),
                    onClick: () => (0, m.default)(h.default.publish),
                    children: "Team Gimkit Publish"
                })]
            }) : null]
        })
    }))
})), n.register("kPX2r", (function(t, i) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = n("dnh3u"),
        l = n("fywoC"),
        r = n("1qdsf"),
        s = n("dwKuN"),
        o = function(e, t) {
            return l.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: r.default
            }))
        };
    o.displayName = "SaveOutlined";
    var d = l.forwardRef(o)
})), n.register("1qdsf", (function(t, n) {
    e(t.exports, "default", (function() {
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
                    d: "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
                }
            }]
        },
        name: "save",
        theme: "outlined"
    }
})), n.register("c6BvM", (function(t, i) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = n("dnh3u"),
        l = n("fywoC"),
        r = n("hwpEJ"),
        s = n("dwKuN"),
        o = function(e, t) {
            return l.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: r.default
            }))
        };
    o.displayName = "ShareAltOutlined";
    var d = l.forwardRef(o)
})), n.register("hwpEJ", (function(t, n) {
    e(t.exports, "default", (function() {
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
                    d: "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                }
            }]
        },
        name: "share-alt",
        theme: "outlined"
    }
})), n.register("G0MbA", (function(t, i) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = n("hxEiv"),
        l = n("9xElQ"),
        r = n("i5Qjx"),
        s = n("4y75y");
    n("fywoC");
    var o = n("lKmIF"),
        d = n("2FDaO"),
        u = n("4ifJF"),
        c = n("py2Xr");
    let f;
    var p = e => (0, a.jsx)(l.default, {
        placement: "left",
        open: e.open,
        onClose: e.close,
        width: 500,
        title: "Documentation & Help",
        children: (0, a.jsxs)(r.default, {
            className: "maxName",
            direction: "vertical",
            size: 14,
            children: [(0, a.jsx)(m, {
                link: "https://forum.creative.gimkit.com",
                name: "Community Forum",
                description: "Find answers, ask questions, and get help with your map!"
            }), (0, a.jsx)(m, {
                link: "https://docs.creative.gimkit.com",
                name: "Help Docs",
                description: "We're still building out our documentation, but you can find some helpful articles here!"
            })]
        })
    });
    const m = e => (0, a.jsx)("a", {
            href: e.link,
            target: "_blank",
            children: (0, a.jsxs)(h, {
                children: [(0, a.jsxs)("div", {
                    children: [(0, a.jsx)(s.default.Title, {
                        level: 4,
                        style: {
                            color: o.default.White
                        },
                        children: e.name
                    }), (0, a.jsx)(s.default.Text, {
                        style: {
                            marginTop: 2
                        },
                        children: e.description
                    })]
                }), (0, a.jsx)("div", {
                    style: {
                        fontSize: 18,
                        marginLeft: 30
                    },
                    children: (0, a.jsx)(c.default, {
                        name: "fas fa-external-link",
                        style: {
                            color: o.default.White
                        }
                    })
                })]
            })
        }),
        h = (0, d.default)(u.VerticallyCentered)(f || (f = (e => e)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`))
})), n.register("8xO7p", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = n("hxEiv"),
        l = n("9xElQ");
    n("fywoC");
    var r = n("9YWAq");
    var s = e => (0, a.jsx)(l.default, {
        placement: "left",
        open: e.open,
        onClose: e.close,
        destroyOnClose: !0,
        width: 500,
        children: (0, a.jsx)(r.default, {
            close: e.close
        })
    })
})), n.register("9YWAq", (function(t, i) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv"),
        l = n("fywoC"),
        r = n("cPGmn"),
        s = n("bfV0l"),
        o = n("4gMdJ"),
        d = n("gHmyG"),
        u = n("hdT9U"),
        c = n("eEYFA"),
        f = n("iMOcM"),
        p = n("8UJqa");
    const m = l.lazy((() => n("9bNj5"))),
        h = l.lazy((() => n("gDZSG"))),
        v = l.lazy((() => n("1wGMW")));
    var x = e => {
        const [t, n, i] = (0, f.useBoolean)(!0), [x, g] = l.useState(!1), [y, j] = l.useState(), [w, b] = l.useState(), O = () => {
            n(), j(void 0), b(void 0), g(!1), (0, c.Request)({
                url: `/api/created-map/listing/creator-info/${window._mapId}`,
                success: e => {
                    e.data && j(e.data), e.publishRequirementError && b(e.publishRequirementError)
                },
                error: e => {
                    g(!0)
                },
                both: i
            })
        };
        (0, r.useDidMount)(O);
        return (0, a.jsx)(l.Suspense, {
            fallback: null,
            children: t ? (0, a.jsx)("div", {
                className: "maxAll flex-center",
                children: (0, a.jsx)(d.default, {
                    size: "large"
                })
            }) : x ? (0, a.jsx)(s.default, {
                type: "error",
                showIcon: !0,
                message: "Error Loading Map Publishing",
                description: "There was an error fetching publishing details for this map. Please check back in later!"
            }) : y ? (0, a.jsx)(o.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: p.default.Yellow
                        }
                    }
                },
                children: (0, a.jsxs)(u.default, {
                    defaultActiveKey: "overview",
                    children: [(0, a.jsx)(u.default.TabPane, {
                        tab: "Overview",
                        children: (0, a.jsx)(h, {
                            data: y,
                            refetch: O,
                            close: e.close
                        })
                    }, "overview"), (0, a.jsx)(u.default.TabPane, {
                        tab: "Map Details",
                        children: (0, a.jsx)(v, {
                            ...y,
                            refetch: O
                        })
                    }, "details")]
                })
            }) : (0, a.jsx)(m, {
                publishRequirementError: w,
                refetch: O
            })
        })
    }
})), n.register("9bNj5", (function(e, t) {
    e.exports = import("./" + n("ihc6Q").resolve("7rUtN")).then((() => n("2V3lN")))
})), n.register("gDZSG", (function(e, t) {
    e.exports = import("./" + n("ihc6Q").resolve("21jMk")).then((() => n("9kqD3")))
})), n.register("1wGMW", (function(e, t) {
    e.exports = Promise.all([import("./" + n("ihc6Q").resolve("cUNwf")), import("./" + n("ihc6Q").resolve("iQTV4")), import("./" + n("ihc6Q").resolve("cWZ5T")), import("./" + n("ihc6Q").resolve("lkHb8")), import("./" + n("ihc6Q").resolve("5ngr6"))]).then((() => n("9UopL")))
})), n.register("6gxPk", (function(t, i) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = n("dnh3u"),
        l = n("fywoC"),
        r = n("5D7Fe"),
        s = n("dwKuN"),
        o = function(e, t) {
            return l.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: r.default
            }))
        };
    o.displayName = "DownOutlined";
    var d = l.forwardRef(o)
})), n.register("5D7Fe", (function(t, n) {
    e(t.exports, "default", (function() {
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
})), n.register("2BPYb", (function(i, a) {
    e(i.exports, "isGoogleFontLoaded", (function() {
        return s
    })), e(i.exports, "default", (function() {
        return o
    }));
    var l = n("7P9gc");
    const r = [],
        s = e => r.includes(e);
    var o = e => {
        const {
            familyName: n,
            onLoad: i
        } = e;
        r.includes(n) ? i && i() : t(l).load({
            google: {
                families: [`${n}:400,700`]
            },
            fontactive: e => {
                r.includes(e) || r.push(e), n === e && i && i()
            }
        })
    }
})), n.register("6RgS6", (function(t, i) {
    e(t.exports, "CanAddTerrain", (function() {
        return r
    }));
    var a = n("iRjsB"),
        l = n("24AMo");
    const r = e => {
        var t;
        const n = a.default.worldOptions.terrainOptions.find((t => t.id === e));
        if (!n) return !1;
        if (null === (t = n.blockedMapStyles) || void 0 === t ? void 0 : t.length) {
            const e = a.default.session.mapStyle;
            if (n.blockedMapStyles.includes(e)) return !1
        }
        const i = n.minimumRoleLevel,
            r = n.maximumRoleLevel;
        return (0, l.IsRoleLevelBetween)(i, r)
    }
})), n.register("4L0xs", (function(t, i) {
    e(t.exports, "GetCurrentMapStyle", (function() {
        return l
    }));
    var a = n("iRjsB");
    const l = () => a.default.session.mapStyle
})), n.register("8gln7", (function(t, i) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("gwuwo"),
        l = n("fCcDT"),
        r = n("5NW69"),
        s = n("CqOkB");
    var o = e => {
        const t = (0, a.default)().worldManager.devices.getDeviceById(e.id);
        if (!t) return;
        const n = (0, s.default)(e.id);
        if (!n) return;
        const i = e.hooks || n.hooks;
        (0, l.default)({
            ...e,
            hooks: i,
            placeInstantly: !0,
            onPlace: n => {
                n && (0, r.default)({
                    id: t.id,
                    deviceTypeId: t.deviceOption.id,
                    options: JSON.stringify(e.options),
                    x: e.x,
                    y: e.y,
                    depth: n.layers.getOptionsDepth(),
                    layerId: n.layers.getOptionsLayer(),
                    name: e.name,
                    hooks: i
                })
            }
        })
    }
})), n.register("jsOaJ", (function(i, a) {
    e(i.exports, "default", (function() {
        return g
    }));
    var l = n("fe1on"),
        r = n("jyxW7"),
        s = n("8mdco"),
        o = n("fywoC"),
        d = n("4gMdJ"),
        u = n("lqzWa"),
        c = n("kuEJ4"),
        f = n("aNsvV");
    const {
        Option: p
    } = u.default;

    function m(e) {
        return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup)
    }
    const h = (e, n) => {
            const {
                prefixCls: i,
                className: a,
                popupClassName: c,
                dropdownClassName: h,
                children: v,
                dataSource: x
            } = e, g = (0, r.default)(v);
            let y;
            1 === g.length && (0, f.isValidElement)(g[0]) && !m(g[0]) && ([y] = g);
            const j = y ? () => y : void 0;
            let w;
            w = g.length && m(g[0]) ? v : x ? x.map((e => {
                if ((0, f.isValidElement)(e)) return e;
                switch (typeof e) {
                    case "string":
                        return o.createElement(p, {
                            key: e,
                            value: e
                        }, e);
                    case "object": {
                        const {
                            value: t
                        } = e;
                        return o.createElement(p, {
                            key: t,
                            value: t
                        }, e.text)
                    }
                    default:
                        return
                }
            })) : [];
            const {
                getPrefixCls: b
            } = o.useContext(d.ConfigContext), O = b("select", i);
            return o.createElement(u.default, Object.assign({
                ref: n
            }, (0, s.default)(e, ["dataSource", "dropdownClassName"]), {
                prefixCls: O,
                popupClassName: c || h,
                className: t(l)(`${O}-auto-complete`, a),
                mode: u.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: j
            }), w)
        },
        v = o.forwardRef(h),
        x = (0, c.default)(v);
    v.Option = p, v._InternalPanelDoNotUseOrYouWillBeFired = x;
    var g = v
}));