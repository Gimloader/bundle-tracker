function e(e, t, o, a) {
    Object.defineProperty(e, t, {
        get: o,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("cFQC2", (function(t, a) {
    var n;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return c
    }));
    var i = o("hxEiv"),
        l = o("lpEVe");
    o("fywoC");
    var r = o("fwdZN"),
        s = o("gwxnT"),
        d = o("3RQjs"),
        u = o("4OfY6");
    var c = (0, l.observer)((() => {
        const {
            hooks: {
                hookJSON: e
            }
        } = (0, s.default)();
        return (0, i.jsx)(u.default, {
            stringifiedData: e,
            onClose: () => {
                (0, d.default)(r.default.none)
            }
        })
    }))
})), o.register("4OfY6", (function(t, a) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        i = o("9xElQ"),
        l = o("lpEVe"),
        r = o("fywoC"),
        s = o("iMOcM"),
        d = o("eLUYq"),
        u = o("kyM3N"),
        c = o("8iT9z"),
        f = o("9wJbm"),
        h = o("31mj8"),
        p = o("h2K3u");
    var m = (0, l.observer)((e => {
        const [t, o] = r.useState(!1), [a, l, m] = (0, s.useBoolean)(!1), x = (0, u.default)();
        r.useEffect((() => {
            o(!0);
            const e = (0, c.AddInputBlockingUI)().dispose;
            return () => e()
        }), []), r.useEffect((() => (window.addEventListener("TEST_VALUES_VISIBLE", l), window.addEventListener("TEST_VALUES_HIDDEN", m), () => {
            window.removeEventListener("TEST_VALUES_VISIBLE", l), window.removeEventListener("TEST_VALUES_HIDDEN", m)
        }))), r.useEffect((() => {
            p.default.data = JSON.parse(e.stringifiedData)
        }), [e.stringifiedData]), r.useEffect((() => {
            x || v()
        }), [x]);
        const v = () => {
                o(!1)
            },
            y = (0, u.default)() && t;
        return (0, n.jsx)(h.default.Provider, {
            value: p.default,
            children: (0, n.jsx)(i.default, {
                open: y,
                afterOpenChange: () => {
                    y || e.onClose()
                },
                onClose: v,
                placement: d.default.drawer.placement,
                closable: !0,
                width: a ? d.default.drawer.widths.testValues : d.default.drawer.widths.default,
                children: (0, n.jsx)(f.default, {})
            })
        })
    }))
})), o.register("eLUYq", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        name: "Hook",
        drawer: {
            placement: "left",
            widths: {
                default: 450,
                testValues: 700
            }
        }
    }
})), o.register("9wJbm", (function(t, a) {
    e(t.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("2FDaO"),
        l = o("69SUA"),
        r = o("eLUYq"),
        s = o("5sw94"),
        d = o("2tpub");
    let u, c, f, h = e => e;
    var p = () => (0, n.jsx)(s.default, {
        children: (0, n.jsxs)(m, {
            children: [(0, n.jsxs)(x, {
                children: [r.default.name, "s"]
            }), (0, n.jsxs)(v, {
                children: [r.default.name, "s are options that game hosts can customize before playing your map. Use ", r.default.name, "s to allow game hosts to modify options such as game difficulty, time limits, or the kit students practice."]
            }), (0, n.jsx)(d.default, {})]
        })
    });
    const m = i.default.div.attrs({
            className: "flex-column flex-center maxWidth"
        })(u || (u = h``)),
        x = i.default.div(c || (c = h`
  font-size: 36px;
  font-weight: ${0};
`), l.FontWeights.Bold),
        v = i.default.div(f || (f = h`
  font-size: 18px;
  margin-top: 4px;
`))
})), o.register("5sw94", (function(t, a) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = o("2FDaO"),
        i = o("69SUA"),
        l = o("8UJqa");
    let r;
    var s = n.default.div(r || (r = (e => e)`
  color: ${0};
  font-family: ${0};
`), l.default.Black, i.Fonts.ProductSans)
})), o.register("2tpub", (function(t, a) {
    e(t.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv"),
        i = o("hdT9U"),
        l = o("lpEVe");
    o("fywoC");
    var r = o("8z6zI"),
        s = o("a46H3"),
        d = o("gLRoq"),
        u = o("1aac7");
    var c = (0, l.observer)((() => {
        var e;
        const t = (0, s.default)(),
            o = (0, r.useAmIGameOwner)();
        return (null === (e = t.hooks) || void 0 === e ? void 0 : e.length) && o ? (0, n.jsxs)(i.default, {
            type: "card",
            style: {
                width: "100%",
                marginTop: 20
            },
            destroyInactiveTabPane: !0,
            children: [(0, n.jsx)(i.default.TabPane, {
                tab: "Hooks",
                children: (0, n.jsx)(d.default, {})
            }, "tab-hooks"), (0, n.jsx)(i.default.TabPane, {
                tab: "Test Values",
                children: (0, n.jsx)(u.default, {})
            }, "tab-test-values")]
        }) : (0, n.jsx)("div", {
            style: {
                marginTop: 15
            },
            className: "maxWidth",
            children: (0, n.jsx)(d.default, {})
        })
    }))
})), o.register("a46H3", (function(t, a) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = o("h2K3u");
    var i = () => n.default.data
})), o.register("h2K3u", (function(t, a) {
    e(t.exports, "default", (function() {
        return r
    }));
    var n = o("kHqmx"),
        i = o("4MuSt");
    class l {
        constructor() {
            this.data = {
                hooks: []
            }, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], l.prototype, "data", void 0);
    var r = new l
})), o.register("gLRoq", (function(t, a) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        i = o("lpEVe");
    o("fywoC");
    var l = o("2FDaO"),
        r = o("iMOcM"),
        s = o("eLUYq"),
        d = o("g9kjq"),
        u = o("1NcNG"),
        c = o("a46H3"),
        f = o("fZHJB"),
        h = o("gCowQ");
    let p;
    var m = (0, i.observer)((() => {
        const e = (0, c.default)(),
            [t, o, a] = (0, r.useBoolean)(!1);
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(x, {
                children: [e.hooks.length < d.default.maxHooks ? (0, n.jsxs)(u.HookNewCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: o,
                    children: ["New ", s.default.name]
                }) : null, e.hooks.map(((t, o) => (0, n.jsx)(f.default, {
                    id: t.key,
                    type: t.type,
                    index: o,
                    totalHooks: e.hooks.length
                }, t.key)))]
            }), (0, n.jsx)(h.default, {
                visible: t,
                close: a
            })]
        })
    }));
    const x = l.default.div.attrs({
        className: "maxWidth"
    })(p || (p = (e => e)``))
})), o.register("g9kjq", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        maxHooks: 12,
        maxKeyLength: 32,
        maxDisplayNameLength: 64,
        maxDisplayDescriptionLength: 128,
        selectBox: {
            maxOptions: 24,
            maxOptionKeyLength: 64
        },
        hiddenScenario: {
            maxAmount: 8,
            maxNameLength: 64
        }
    }
})), o.register("1NcNG", (function(t, a) {
    e(t.exports, "HookNewCardButton", (function() {
        return f
    })), e(t.exports, "HookCardButton", (function() {
        return h
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("7ECC6"),
        l = o("2FDaO"),
        r = o("8UJqa"),
        s = o("69SUA");
    let d, u, c = e => e;
    const f = e => (0, n.jsx)(p, {
            hoverable: !0,
            onClick: e.onClick,
            style: e.style,
            children: (0, n.jsx)(m, {
                children: (0, n.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, n.jsx)("i", {
                        style: {
                            color: "#2e7d32",
                            marginRight: 10,
                            fontSize: 28
                        },
                        className: "fas fa-plus-circle"
                    }), (0, n.jsx)("div", {
                        children: e.children
                    })]
                })
            })
        }),
        h = e => (0, n.jsx)(p, {
            hoverable: !0,
            onClick: e.onClick,
            style: e.style,
            children: (0, n.jsx)(m, {
                children: e.children
            })
        }),
        p = (0, l.default)(i.default)(d || (d = c``)),
        m = l.default.div(u || (u = c`
  color: ${0};
  font-size: 18px;
  font-weight: ${0};
`), r.default.Black, s.FontWeights.Bold)
})), o.register("fZHJB", (function(t, a) {
    e(t.exports, "default", (function() {
        return E
    }));
    var n = o("hxEiv"),
        i = o("fywoC"),
        l = o("2FDaO"),
        r = o("93yIm"),
        s = o("gnAdP"),
        d = o("13AMv"),
        u = o("fBuQJ"),
        c = o("90RCV"),
        f = o("69SUA"),
        h = o("iMOcM"),
        p = o("lTSkG"),
        m = o("3KIWF"),
        x = o("1NcNG"),
        v = o("enT9V"),
        y = o("fjMYa"),
        g = o("6rP5s"),
        k = o("eLUYq");
    let j, w, C, N, O, b = e => e;
    var E = e => {
        const [t, o, a] = (0, h.useBoolean)(!1), l = i.useMemo((() => (0, m.default)(e.type)), [e.type]), f = () => {
            u.default.confirm({
                title: `Are you sure you want to delete this ${k.default.name.toLowerCase()}?`,
                onOk: () => {
                    (0, y.default)({
                        action: g.default.removeHook,
                        payload: {
                            key: e.id
                        }
                    })
                }
            })
        }, j = t => {
            (0, y.default)({
                action: g.default.moveHook,
                payload: {
                    key: e.id,
                    direction: t
                }
            })
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(x.HookCardButton, {
                style: {
                    marginBottom: 10
                },
                onClick: o,
                children: (0, n.jsxs)(H, {
                    children: [(0, n.jsxs)(I, {
                        children: [(0, n.jsx)(T, {
                            children: l
                        }), (0, n.jsx)(D, {
                            children: e.id
                        })]
                    }), (0, n.jsx)(S, {
                        children: (0, n.jsx)(s.default, {
                            overlay: () => (0, n.jsxs)(d.default, {
                                children: [(0, n.jsxs)(d.default.Item, {
                                    onClick: (0, v.default)(f),
                                    children: ["Delete ", k.default.name]
                                }), e.index > 0 && e.totalHooks > 1 ? (0, n.jsx)(d.default.Item, {
                                    onClick: (0, v.default)((() => j("up"))),
                                    children: "Move Up"
                                }) : null, e.index !== e.totalHooks && e.totalHooks > 1 ? (0, n.jsx)(d.default.Item, {
                                    onClick: (0, v.default)((() => j("down"))),
                                    children: "Move Down"
                                }) : null]
                            }),
                            children: (0, n.jsx)(r.default, {
                                shape: "circle",
                                type: "dashed",
                                icon: (0, n.jsx)(c.default, {})
                            })
                        })
                    })]
                })
            }), (0, n.jsx)(p.default, {
                visible: t,
                close: a,
                hookKey: e.id
            })]
        })
    };
    const H = l.default.div.attrs({
            className: "flex vc between maxWidth"
        })(j || (j = b``)),
        I = l.default.div(w || (w = b``)),
        S = l.default.div(C || (C = b``)),
        T = l.default.div(N || (N = b`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${0};
`), f.FontWeights.Normal),
        D = l.default.div(O || (O = b``))
})), o.register("lTSkG", (function(t, a) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = o("hxEiv"),
        i = o("9xElQ"),
        l = o("lpEVe");
    o("fywoC");
    var r = o("eLUYq"),
        s = o("5sw94"),
        d = o("khSZr"),
        u = o("hlvLm"),
        c = o("huznO");
    var f = (0, l.observer)((e => {
        const t = (0, d.default)(e.hookKey);
        return t ? (0, n.jsxs)(i.default, {
            open: e.visible,
            placement: r.default.drawer.placement,
            width: r.default.drawer.widths.default,
            onClose: e.close,
            closable: !0,
            children: [(0, n.jsx)(s.default, {
                children: (0, n.jsx)(u.default, {
                    name: e.hookKey,
                    type: t.type
                })
            }), (0, n.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, n.jsx)(c.default, {
                hookKey: e.hookKey
            })]
        }) : null
    }))
})), o.register("khSZr", (function(t, a) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = o("h2K3u");
    var i = e => {
        var t, o;
        return null === (t = n.default.data) || void 0 === t || null === (o = t.hooks) || void 0 === o ? void 0 : o.find((t => t.key === e))
    }
})), o.register("hlvLm", (function(t, a) {
    e(t.exports, "default", (function() {
        return h
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("2FDaO"),
        l = o("3KIWF"),
        r = o("eLUYq"),
        s = o("69SUA");
    let d, u, c, f = e => e;
    var h = e => (0, n.jsxs)(p, {
        children: [(0, n.jsxs)(m, {
            children: [r.default.name, " - ", (0, l.default)(e.type)]
        }), (0, n.jsx)(x, {
            children: e.name
        })]
    });
    const p = i.default.div(d || (d = f``)),
        m = i.default.div(u || (u = f`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        x = i.default.div(c || (c = f`
  font-size: 28px;
  font-weight: ${0};
`), s.FontWeights.Bold)
})), o.register("3KIWF", (function(t, a) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = o("f9d7r");
    var i = e => e === n.HookType.selectBox ? "Select Box" : e === n.HookType.number ? "Number" : e === n.HookType.kit ? "Kit" : "Unknown Type"
})), o.register("f9d7r", (function(t, o) {
    let a;
    var n;
    e(t.exports, "HookType", (function() {
        return a
    })), (n = a || (a = {})).selectBox = "selectBox", n.kit = "kit", n.number = "number"
})), o.register("huznO", (function(t, a) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        i = o("hdT9U"),
        l = o("cSKYy"),
        r = o("fywoC"),
        s = o("f9d7r"),
        d = o("5sw94"),
        u = o("khSZr"),
        c = o("HPR1X"),
        f = o("c8fC5"),
        h = o("643Ci"),
        p = o("2nli6");
    var m = (0, l.observer)((e => {
        const t = (0, u.default)(e.hookKey);
        return (0, n.jsxs)(i.default, {
            style: {
                width: "100%"
            },
            type: "card",
            children: [t.type === s.HookType.selectBox ? (0, n.jsx)(i.default.TabPane, {
                tab: "Options",
                children: (0, n.jsx)(d.default, {
                    children: (0, n.jsx)(h.default, {
                        hookKey: e.hookKey
                    })
                })
            }, "tab-hook-select-options") : null, t.type === s.HookType.selectBox || t.type === s.HookType.number ? (0, n.jsxs)(r.Fragment, {
                children: [(0, n.jsx)(i.default.TabPane, {
                    tab: "Settings",
                    children: (0, n.jsx)(d.default, {
                        children: (0, n.jsx)(p.default, {
                            hookKey: e.hookKey
                        })
                    })
                }, "tab-hook-settings"), (0, n.jsx)(i.default.TabPane, {
                    tab: "Hidden",
                    children: (0, n.jsx)(d.default, {
                        children: (0, n.jsx)(f.default, {
                            hookKey: e.hookKey
                        })
                    })
                }, "tab-hook-hidden")]
            }) : null, (0, n.jsx)(i.default.TabPane, {
                tab: "Devices",
                children: (0, n.jsx)(d.default, {
                    children: (0, n.jsx)(c.default, {
                        hookKey: e.hookKey
                    })
                })
            }, "tab-hook-devices")]
        })
    }))
})), o.register("HPR1X", (function(t, a) {
    e(t.exports, "default", (function() {
        return y
    }));
    var n = o("hxEiv"),
        i = o("fywoC"),
        l = o("gwxnT"),
        r = o("2FDaO"),
        s = o("eLUYq"),
        d = o("1NcNG"),
        u = o("69SUA"),
        c = o("3RQjs"),
        f = o("fwdZN");
    let h, p, m, x, v = e => e;
    var y = e => {
        const {
            world: {
                devices: {
                    devices: t
                }
            },
            me: {
                editing: o
            }
        } = (0, l.default)(), a = i.useMemo((() => {
            const o = [];
            return Array.from(t).map((e => e[1])).forEach((t => {
                t.hooks && t.hooks.connections && t.hooks.connections.length && t.hooks.connections.forEach((a => {
                    if (a.hook === e.hookKey) {
                        const e = t.deviceOption.optionSchema.options.find((e => e.key === a.option)).option.label;
                        o.push({
                            deviceId: t.id,
                            deviceOptionId: t.deviceOption.id,
                            deviceName: t.name || t.deviceOption.name,
                            optionName: e
                        })
                    }
                }))
            })), o
        }), []);
        return (0, n.jsx)(g, {
            children: a.length ? (0, n.jsx)(n.Fragment, {
                children: a.map((e => (0, n.jsx)(d.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: () => {
                        o.device.currentlyEditedDevice = {
                            id: e.deviceId,
                            deviceOptionId: e.deviceOptionId
                        }, (0, c.default)(f.default.editingDevice)
                    },
                    children: (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(j, {
                            children: e.optionName
                        }), (0, n.jsx)(w, {
                            children: e.deviceName
                        })]
                    })
                }, e.deviceId + e.optionName)))
            }) : (0, n.jsxs)(k, {
                children: ["No devices are using this ", s.default.name.toLowerCase(), " yet! Once you connect a device's option to this ", s.default.name.toLowerCase(), ", that device will show up here."]
            })
        })
    };
    const g = r.default.div(h || (h = v``)),
        k = r.default.div(p || (p = v`
  font-size: 16px;
`)),
        j = r.default.div(m || (m = v`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${0};
`), u.FontWeights.Normal),
        w = r.default.div(x || (x = v``))
})), o.register("c8fC5", (function(t, a) {
    e(t.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("2FDaO"),
        l = o("eLUYq"),
        r = o("7pOUr");
    let s, d, u = e => e;
    var c = e => (0, n.jsxs)(f, {
        children: [(0, n.jsxs)(h, {
            children: ["Sometimes you don't want a ", l.default.name.toLowerCase(), " to show. Create scenarios to hide a hook under certain conditions. If any are the scenarios are true, the ", l.default.name.toLowerCase(), " will be hidden from the game host. ", (0, n.jsx)("br", {}), " ", (0, n.jsx)("br", {}), " When a ", l.default.name.toLowerCase(), " is hidden, any device option with a link to this", " ", l.default.name.toLowerCase(), " will use the device's set option."]
        }), (0, n.jsx)(r.default, {
            hookKey: e.hookKey
        })]
    });
    const f = i.default.div(s || (s = u``)),
        h = i.default.div(d || (d = u`
  margin-bottom: 15px;
`))
})), o.register("7pOUr", (function(t, a) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = o("hxEiv"),
        i = o("lpEVe");
    o("fywoC");
    var l = o("iMOcM"),
        r = o("g9kjq"),
        s = o("1NcNG"),
        d = o("khSZr"),
        u = o("lmk8Y"),
        c = o("iQNnN");
    var f = (0, i.observer)((e => {
        const t = (0, d.default)(e.hookKey),
            [o, a, i] = (0, l.useBoolean)(!1);
        if (!t) return null;
        const f = t.hiddenScenarios || [];
        return (0, n.jsxs)(n.Fragment, {
            children: [f.length < r.default.hiddenScenario.maxAmount ? (0, n.jsx)(s.HookNewCardButton, {
                onClick: a,
                style: {
                    marginBottom: 10
                },
                children: "New Scenario"
            }) : null, (t.hiddenScenarios || []).map((t => (0, n.jsx)(c.default, {
                name: t.name,
                hookKey: e.hookKey
            }, `scenario-${t.name}-${e.hookKey}`))), (0, n.jsx)(u.default, {
                hookKey: e.hookKey,
                visible: o,
                close: i
            })]
        })
    }))
})), o.register("lmk8Y", (function(t, a) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        i = o("93yIm"),
        l = o("9xElQ"),
        r = o("b9Zw0"),
        s = o("fywoC"),
        d = o("eLUYq"),
        u = o("g9kjq"),
        c = o("6rP5s"),
        f = o("fjMYa"),
        h = o("5sw94"),
        p = o("aqP4x");
    var m = e => {
        const [t, o] = s.useState(""), a = () => {
            const a = t.trim();
            a.length && ((0, f.default)({
                action: c.default.newHiddenScenario,
                payload: {
                    key: e.hookKey,
                    name: a
                }
            }), o(""), e.close())
        };
        return (0, n.jsx)(l.default, {
            placement: d.default.drawer.placement,
            width: d.default.drawer.widths.default,
            open: e.visible,
            onClose: e.close,
            closable: !0,
            children: (0, n.jsxs)(h.default, {
                children: [(0, n.jsx)(p.HookFormInputLabel, {
                    children: "Scenario Name"
                }), (0, n.jsx)(r.default, {
                    size: "large",
                    placeholder: "Name here...",
                    value: t,
                    onChange: e => {
                        o(e.target.value)
                    },
                    onPressEnter: a,
                    maxLength: u.default.hiddenScenario.maxNameLength
                }), (0, n.jsx)(i.default, {
                    size: "large",
                    block: !0,
                    style: {
                        marginTop: 10,
                        height: 50
                    },
                    type: "primary",
                    disabled: !t.trim().length,
                    onClick: a,
                    children: "Add Scenario"
                })]
            })
        })
    }
})), o.register("6rP5s", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        newHook: "NEW_HOOK",
        removeHook: "REMOVE_HOOK",
        newOption: "NEW_OPTION",
        moveOption: "MOVE_OPTION",
        removeOption: "REMOVE_OPTION",
        makeOptionDefault: "MAKE_OPTION_DEFAULT",
        removeDefaultOption: "REMOVE_DEFAULT_OPTION",
        setNameOrDescription: "SET_NAME_OR_DESCRIPTION",
        newHiddenScenario: "NEW_HIDDEN_SCENARIO",
        newHiddenCondition: "NEW_HIDDEN_CONDITION",
        removeHiddenScenario: "REMOVE_HIDDEN_SCENARIO",
        removeHiddenCondition: "REMOVE_HIDDEN_CONDITION",
        saveHookValueHiddenConditionOptions: "SAVE_HOOK_VALUE_HIDDEN_CONDITION_OPTIONS",
        saveModeTypeHiddenConditionOptions: "SAVE_MODE_TYPE_HIDDEN_CONDITION_OPTIONS",
        moveHook: "MOVE_HOOK",
        changeNumberOption: "CHANGE_NUMBER_OPTION"
    }
})), o.register("fjMYa", (function(t, a) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = o("2aaPD");
    var i = e => {
        (0, n.default)(e)
    }
})), o.register("2aaPD", (function(t, a) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = o("9q1Gv"),
        i = o("cCnGt");
    var l = e => {
        (0, i.default)(n.default.hookAction, {
            action: e.action,
            payload: e.payload
        })
    }
})), o.register("aqP4x", (function(t, a) {
    e(t.exports, "HookFormInputLabel", (function() {
        return d
    })), e(t.exports, "HookFormInputLabelDescription", (function() {
        return u
    }));
    var n = o("2FDaO"),
        i = o("69SUA");
    let l, r, s = e => e;
    const d = n.default.div(l || (l = s`
  font-size: 18px;
  font-weight: ${0};
  margin-bottom: 4px;
`), i.FontWeights.Bold),
        u = n.default.div(r || (r = s`
  font-size: 14px;
  margin-bottom: 4px;
`))
})), o.register("iQNnN", (function(t, a) {
    e(t.exports, "default", (function() {
        return v
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("1NcNG"),
        l = o("2FDaO"),
        r = o("93yIm"),
        s = o("gnAdP"),
        d = o("13AMv"),
        u = o("90RCV"),
        c = o("iMOcM"),
        f = o("dFnUY"),
        h = o("enT9V"),
        p = o("fjMYa"),
        m = o("6rP5s");
    let x;
    var v = e => {
        const [t, o, a] = (0, c.useBoolean)(!1), l = () => {
            (0, p.default)({
                action: m.default.removeHiddenScenario,
                payload: {
                    key: e.hookKey,
                    name: e.name
                }
            })
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.HookCardButton, {
                style: {
                    marginBottom: 10
                },
                onClick: o,
                children: (0, n.jsxs)(y, {
                    children: [(0, n.jsx)("div", {
                        children: e.name
                    }), (0, n.jsx)(s.default, {
                        overlay: (0, n.jsx)(d.default, {
                            children: (0, n.jsx)(d.default.Item, {
                                onClick: (0, h.default)(l),
                                children: "Remove Scenario"
                            })
                        }),
                        children: (0, n.jsx)(r.default, {
                            icon: (0, n.jsx)(u.default, {}),
                            type: "dashed",
                            shape: "circle"
                        })
                    })]
                })
            }), (0, n.jsx)(f.default, {
                visible: t,
                close: a,
                scenarioName: e.name,
                hookKey: e.hookKey
            })]
        })
    };
    const y = l.default.div.attrs({
        className: "maxWidth flex between vc"
    })(x || (x = (e => e)``))
})), o.register("dFnUY", (function(t, a) {
    e(t.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv"),
        i = o("fC6cp"),
        l = o("9xElQ"),
        r = o("lpEVe");
    o("fywoC");
    var s = o("eLUYq"),
        d = o("5sw94"),
        u = o("a9UAs"),
        c = o("khSZr"),
        f = o("kfmyG"),
        h = o("4IdIf");
    var p = (0, r.observer)((e => {
        const t = (0, c.default)(e.hookKey);
        if (!t) return null;
        const o = (t.hiddenScenarios || []).find((t => t.name === e.scenarioName));
        return o ? (0, n.jsx)(l.default, {
            open: e.visible,
            onClose: e.close,
            width: s.default.drawer.widths.default,
            placement: s.default.drawer.placement,
            closable: !0,
            children: (0, n.jsxs)(d.default, {
                children: [(0, n.jsx)(u.default, {
                    title: e.scenarioName,
                    descriptor: "Scenario"
                }), (0, n.jsx)(i.default, {}), (0, n.jsx)(h.default, {
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName
                }), o.conditions.map((t => (0, n.jsx)(f.default, {
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    condition: t
                }, `condition-${t.id}`)))]
            })
        }) : null
    }))
})), o.register("a9UAs", (function(t, a) {
    e(t.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("2FDaO"),
        l = o("69SUA");
    let r, s, d, u = e => e;
    var c = e => (0, n.jsxs)(f, {
        children: [(0, n.jsx)(h, {
            children: e.descriptor
        }), (0, n.jsx)(p, {
            children: e.title
        })]
    });
    const f = i.default.div(r || (r = u``)),
        h = i.default.div(s || (s = u`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        p = i.default.div(d || (d = u`
  font-size: 28px;
  font-weight: ${0};
`), l.FontWeights.Bold)
})), o.register("kfmyG", (function(t, a) {
    e(t.exports, "default", (function() {
        return N
    }));
    var n = o("hxEiv"),
        i = o("fywoC"),
        l = o("lQVxa"),
        r = o("1NcNG"),
        s = o("2FDaO"),
        d = o("93yIm"),
        u = o("gnAdP"),
        c = o("13AMv"),
        f = o("90RCV"),
        h = o("69SUA"),
        p = o("6rP5s"),
        m = o("fjMYa"),
        x = o("enT9V"),
        v = o("iMOcM"),
        y = o("dm1qX"),
        g = o("eLUYq");
    let k, j, w, C = e => e;
    var N = e => {
        const [t, o, a] = (0, v.useBoolean)(!1), s = i.useMemo((() => e.condition.type === l.HiddenConditionType.hookValue ? `${g.default.name} Value` : e.condition.type === l.HiddenConditionType.modeType ? "Mode" : "Unknown"), [e.condition.type]), h = () => {
            (0, m.default)({
                action: p.default.removeHiddenCondition,
                payload: {
                    key: e.hookKey,
                    scenario: e.scenarioName,
                    condition: e.condition.id
                }
            })
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(r.HookCardButton, {
                style: {
                    marginBottom: 10
                },
                onClick: o,
                children: (0, n.jsxs)(O, {
                    children: [(0, n.jsxs)("div", {
                        children: [(0, n.jsx)(b, {
                            children: "Condition"
                        }), (0, n.jsx)(E, {
                            children: s
                        })]
                    }), (0, n.jsx)(u.default, {
                        overlay: (0, n.jsx)(c.default, {
                            children: (0, n.jsx)(c.default.Item, {
                                onClick: (0, x.default)(h),
                                children: "Remove Condition"
                            })
                        }),
                        children: (0, n.jsx)(d.default, {
                            icon: (0, n.jsx)(f.default, {}),
                            type: "dashed",
                            shape: "circle"
                        })
                    })]
                })
            }), (0, n.jsx)(y.default, {
                visible: t,
                close: a,
                hookKey: e.hookKey,
                scenarioName: e.scenarioName,
                condition: e.condition.id
            })]
        })
    };
    const O = s.default.div.attrs({
            className: "maxWidth flex between vc"
        })(k || (k = C``)),
        b = s.default.div(j || (j = C`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${0};
`), h.FontWeights.Normal),
        E = s.default.div(w || (w = C``))
})), o.register("enT9V", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => t => {
        t.domEvent.stopPropagation(), e && e()
    }
})), o.register("dm1qX", (function(t, a) {
    e(t.exports, "default", (function() {
        return h
    }));
    var n = o("hxEiv"),
        i = o("9xElQ"),
        l = o("lpEVe");
    o("fywoC");
    var r = o("eLUYq"),
        s = o("lQVxa"),
        d = o("5sw94"),
        u = o("khSZr"),
        c = o("3ykIe"),
        f = o("iztgN");
    var h = (0, l.observer)((e => {
        const t = (0, u.default)(e.hookKey);
        if (!t) return null;
        const o = (t.hiddenScenarios || []).find((t => t.name === e.scenarioName));
        if (!o) return null;
        const a = o.conditions.find((t => t.id === e.condition));
        if (!a) return null;
        return (0, n.jsx)(i.default, {
            placement: r.default.drawer.placement,
            width: r.default.drawer.widths.default,
            open: e.visible,
            onClose: e.close,
            closable: !0,
            children: (0, n.jsx)(d.default, {
                children: a.type === s.HiddenConditionType.hookValue ? (0, n.jsx)(c.default, {
                    condition: a,
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    close: e.close
                }) : a.type === s.HiddenConditionType.modeType ? (0, n.jsx)(f.default, {
                    condition: a,
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    close: e.close
                }) : null
            })
        })
    }))
})), o.register("3ykIe", (function(t, a) {
    e(t.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        i = o("bfV0l"),
        l = o("jsOaJ"),
        r = o("93yIm"),
        s = o("fC6cp"),
        d = o("b9Zw0"),
        u = o("lqzWa"),
        c = o("lpEVe"),
        f = o("fywoC"),
        h = o("2FDaO"),
        p = o("eLUYq"),
        m = o("6rP5s"),
        x = o("lQVxa"),
        v = o("fjMYa"),
        y = o("a9UAs"),
        g = o("aqP4x"),
        k = o("a46H3");
    let j;
    var w = (0, c.observer)((e => {
        const {
            options: t
        } = e.condition, o = (0, k.default)(), [a, c] = f.useState(null == t ? void 0 : t.key), [h, j] = f.useState(null == t ? void 0 : t.compare), [w, N] = f.useState(null == t ? void 0 : t.value);
        if (f.useEffect((() => {
                c(null == t ? void 0 : t.key)
            }), [null == t ? void 0 : t.key]), f.useEffect((() => {
                j(null == t ? void 0 : t.compare)
            }), [null == t ? void 0 : t.compare]), f.useEffect((() => {
                N(null == t ? void 0 : t.value)
            }), [null == t ? void 0 : t.value]), !t) return null;
        const O = a.trim() === e.hookKey,
            b = o.hooks.filter((t => t.key !== e.hookKey)).map((e => ({
                value: e.key
            })));
        return (0, n.jsxs)(C, {
            children: [(0, n.jsx)(y.default, {
                title: `${p.default.name} Value`,
                descriptor: "Condition"
            }), (0, n.jsx)(s.default, {}), (0, n.jsxs)(g.HookFormInputLabel, {
                children: [p.default.name, " Name"]
            }), (0, n.jsx)(l.default, {
                value: a,
                options: b,
                onChange: e => {
                    c(e)
                },
                style: {
                    width: "100%"
                },
                placeholder: "Name here...",
                filterOption: (e, t) => {
                    var o;
                    return -1 !== (null === (o = t.value) || void 0 === o ? void 0 : o.toUpperCase().indexOf(e.toUpperCase()))
                }
            }), (0, n.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, n.jsx)(g.HookFormInputLabel, {
                children: "Comparison"
            }), (0, n.jsxs)(u.default, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: e => {
                    j(e)
                },
                value: h,
                children: [(0, n.jsx)(u.default.Option, {
                    value: x.HookValueHiddenConditionCompare.equal,
                    children: "Equals"
                }), (0, n.jsx)(u.default.Option, {
                    value: x.HookValueHiddenConditionCompare.notEqual,
                    children: "Does Not Equal"
                })]
            }), (0, n.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, n.jsx)(g.HookFormInputLabel, {
                children: "Value"
            }), (0, n.jsx)(d.default, {
                value: w,
                onChange: e => {
                    N(e.target.value)
                },
                size: "large",
                placeholder: "Value here..."
            }), (0, n.jsx)("div", {
                style: {
                    height: 30
                }
            }), (0, n.jsx)(r.default, {
                size: "large",
                type: "primary",
                block: !0,
                style: {
                    height: 50
                },
                disabled: O,
                onClick: () => {
                    O || ((0, v.default)({
                        action: m.default.saveHookValueHiddenConditionOptions,
                        payload: {
                            key: e.hookKey,
                            scenario: e.scenarioName,
                            condition: e.condition.id,
                            options: {
                                key: a,
                                compare: h,
                                value: w
                            }
                        }
                    }), e.close())
                },
                children: "Save"
            }), O ? (0, n.jsx)(i.default, {
                type: "error",
                message: `Invalid ${p.default.name} Name`,
                description: `You cannot hide a ${p.default.name.toLowerCase()} based off its own value.`,
                style: {
                    marginTop: 15
                },
                showIcon: !0
            }) : null]
        })
    }));
    const C = h.default.div(j || (j = (e => e)``))
})), o.register("jsOaJ", (function(a, n) {
    e(a.exports, "default", (function() {
        return y
    }));
    var i = o("fe1on"),
        l = o("jyxW7"),
        r = o("8mdco"),
        s = o("fywoC"),
        d = o("4gMdJ"),
        u = o("lqzWa"),
        c = o("kuEJ4"),
        f = o("aNsvV");
    const {
        Option: h
    } = u.default;

    function p(e) {
        return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup)
    }
    const m = (e, o) => {
            const {
                prefixCls: a,
                className: n,
                popupClassName: c,
                dropdownClassName: m,
                children: x,
                dataSource: v
            } = e, y = (0, l.default)(x);
            let g;
            1 === y.length && (0, f.isValidElement)(y[0]) && !p(y[0]) && ([g] = y);
            const k = g ? () => g : void 0;
            let j;
            j = y.length && p(y[0]) ? x : v ? v.map((e => {
                if ((0, f.isValidElement)(e)) return e;
                switch (typeof e) {
                    case "string":
                        return s.createElement(h, {
                            key: e,
                            value: e
                        }, e);
                    case "object": {
                        const {
                            value: t
                        } = e;
                        return s.createElement(h, {
                            key: t,
                            value: t
                        }, e.text)
                    }
                    default:
                        return
                }
            })) : [];
            const {
                getPrefixCls: w
            } = s.useContext(d.ConfigContext), C = w("select", a);
            return s.createElement(u.default, Object.assign({
                ref: o
            }, (0, r.default)(e, ["dataSource", "dropdownClassName"]), {
                prefixCls: C,
                popupClassName: c || m,
                className: t(i)(`${C}-auto-complete`, n),
                mode: u.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: k
            }), j)
        },
        x = s.forwardRef(m),
        v = (0, c.default)(x);
    x.Option = h, x._InternalPanelDoNotUseOrYouWillBeFired = v;
    var y = x
})), o.register("iztgN", (function(t, a) {
    e(t.exports, "default", (function() {
        return y
    }));
    var n = o("hxEiv"),
        i = o("93yIm"),
        l = o("fC6cp"),
        r = o("lqzWa"),
        s = o("fywoC"),
        d = o("2FDaO"),
        u = o("eLUYq"),
        c = o("6rP5s"),
        f = o("3aHwG"),
        h = o("lQVxa"),
        p = o("fjMYa"),
        m = o("a9UAs"),
        x = o("aqP4x");
    let v;
    var y = e => {
        const {
            options: t
        } = e.condition, [o, a] = s.useState(null == t ? void 0 : t.mode), [d, v] = s.useState(null == t ? void 0 : t.compare);
        if (s.useEffect((() => {
                a(null == t ? void 0 : t.mode)
            }), [null == t ? void 0 : t.mode]), s.useEffect((() => {
                v(null == t ? void 0 : t.compare)
            }), [null == t ? void 0 : t.compare]), !t) return null;
        return (0, n.jsxs)(g, {
            children: [(0, n.jsx)(m.default, {
                title: `${u.default.name} Value`,
                descriptor: "Condition"
            }), (0, n.jsx)(l.default, {}), (0, n.jsx)(x.HookFormInputLabel, {
                children: "Hide if the mode..."
            }), (0, n.jsxs)(r.default, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: e => {
                    v(e)
                },
                value: d,
                children: [(0, n.jsx)(r.default.Option, {
                    value: h.ModeTypeHiddenConditionCompare.equal,
                    children: "Is"
                }), (0, n.jsx)(r.default.Option, {
                    value: h.ModeTypeHiddenConditionCompare.notEqual,
                    children: "Is Not"
                })]
            }), (0, n.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, n.jsx)(x.HookFormInputLabel, {
                children: o === f.MapModeType.assignment ? "an..." : "a..."
            }), (0, n.jsxs)(r.default, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: e => {
                    a(e)
                },
                value: o,
                children: [(0, n.jsx)(r.default.Option, {
                    value: f.MapModeType.liveGame,
                    children: "Live Game"
                }), (0, n.jsx)(r.default.Option, {
                    value: f.MapModeType.assignment,
                    children: "Assignment"
                })]
            }), (0, n.jsx)("div", {
                style: {
                    height: 30
                }
            }), (0, n.jsx)(i.default, {
                size: "large",
                type: "primary",
                block: !0,
                style: {
                    height: 50
                },
                onClick: () => {
                    (0, p.default)({
                        action: c.default.saveModeTypeHiddenConditionOptions,
                        payload: {
                            key: e.hookKey,
                            scenario: e.scenarioName,
                            condition: e.condition.id,
                            options: {
                                mode: o,
                                compare: d
                            }
                        }
                    }), e.close()
                },
                children: "Save"
            })]
        })
    };
    const g = d.default.div(v || (v = (e => e)``))
})), o.register("4IdIf", (function(t, a) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("iMOcM"),
        l = o("1NcNG"),
        r = o("5UtG0");
    var s = e => {
        const [t, o, a] = (0, i.useBoolean)(!1);
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.HookNewCardButton, {
                onClick: o,
                style: {
                    marginBottom: 10
                },
                children: "New Condition"
            }), (0, n.jsx)(r.default, {
                visible: t,
                close: a,
                hookKey: e.hookKey,
                scenarioName: e.scenarioName
            })]
        })
    }
})), o.register("5UtG0", (function(t, a) {
    e(t.exports, "default", (function() {
        return k
    }));
    var n = o("hxEiv"),
        i = o("fC6cp"),
        l = o("9xElQ");
    o("fywoC");
    var r = o("eLUYq"),
        s = o("5sw94"),
        d = o("2FDaO"),
        u = o("1NcNG"),
        c = o("69SUA"),
        f = o("fjMYa"),
        h = o("6rP5s"),
        p = o("lQVxa");
    let m, x, v, y, g = e => e;
    var k = e => {
        const t = t => {
            (0, f.default)({
                action: h.default.newHiddenCondition,
                payload: {
                    key: e.hookKey,
                    scenario: e.scenarioName,
                    conditionType: t
                }
            }), e.close()
        };
        return (0, n.jsx)(l.default, {
            open: e.visible,
            onClose: e.close,
            width: r.default.drawer.widths.default,
            placement: r.default.drawer.placement,
            closable: !0,
            children: (0, n.jsxs)(s.default, {
                children: [(0, n.jsx)(j, {
                    children: "New Condition"
                }), (0, n.jsx)(w, {
                    children: "Select a condition type"
                }), (0, n.jsx)(i.default, {}), (0, n.jsxs)(u.HookCardButton, {
                    onClick: () => t(p.HiddenConditionType.hookValue),
                    children: [(0, n.jsx)(C, {
                        children: "Hook Value"
                    }), (0, n.jsx)(N, {
                        children: "Hide depending on the value of another hook"
                    })]
                }), (0, n.jsxs)(u.HookCardButton, {
                    onClick: () => t(p.HiddenConditionType.modeType),
                    style: {
                        marginTop: 10
                    },
                    children: [(0, n.jsx)(C, {
                        children: "Mode"
                    }), (0, n.jsx)(N, {
                        children: "Hide depending on the mode (live game or assignment)"
                    })]
                })]
            })
        })
    };
    const j = d.default.div(m || (m = g`
  font-size: 28px;
  font-weight: ${0};
`), c.FontWeights.Bold),
        w = d.default.div(x || (x = g`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        C = d.default.div(v || (v = g``)),
        N = d.default.div(y || (y = g`
  font-size: 15px;
  font-weight: ${0};
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`), c.FontWeights.Normal)
})), o.register("643Ci", (function(t, a) {
    e(t.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv"),
        i = o("lpEVe");
    o("fywoC");
    var l = o("2FDaO"),
        r = o("iMOcM"),
        s = o("g9kjq"),
        d = o("1NcNG"),
        u = o("khSZr"),
        c = o("heYga"),
        f = o("7Nov4");
    let h;
    var p = (0, i.observer)((e => {
        const t = (0, u.default)(e.hookKey),
            [o, a, i] = (0, r.useBoolean)(!1);
        if (!t) return null;
        const l = t.options;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(m, {
                children: l.options.length <= s.default.selectBox.maxOptions ? (0, n.jsx)(d.HookNewCardButton, {
                    onClick: a,
                    style: {
                        marginBottom: 10
                    },
                    children: "New Option"
                }) : null
            }), l.options.map(((t, o) => (0, n.jsx)(f.default, {
                name: t,
                index: o,
                numberOfItems: l.options.length,
                hookKey: e.hookKey,
                isDefaultOption: l.defaultOption === t
            }, `hook-${e.hookKey}-${t}`))), (0, n.jsx)(c.default, {
                hookKey: e.hookKey,
                visible: o,
                close: i
            })]
        })
    }));
    const m = l.default.div.attrs({
        className: "maxWidth"
    })(h || (h = (e => e)``))
})), o.register("heYga", (function(t, a) {
    e(t.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv"),
        i = o("93yIm"),
        l = o("9xElQ"),
        r = o("b9Zw0"),
        s = o("fywoC"),
        d = o("eLUYq"),
        u = o("6rP5s"),
        c = o("fjMYa"),
        f = o("5sw94"),
        h = o("aqP4x");
    var p = e => {
        const [t, o] = s.useState(""), a = () => {
            t.trim().length && ((0, c.default)({
                action: u.default.newOption,
                payload: {
                    key: e.hookKey,
                    option: t.trim()
                }
            }), e.close(), o(""))
        };
        return (0, n.jsxs)(l.default, {
            open: e.visible,
            onClose: e.close,
            placement: d.default.drawer.placement,
            width: d.default.drawer.widths.default,
            closable: !0,
            children: [(0, n.jsxs)(f.default, {
                children: [(0, n.jsx)(h.HookFormInputLabel, {
                    children: "Option Name"
                }), (0, n.jsx)(r.default, {
                    value: t,
                    onChange: e => {
                        o(e.target.value)
                    },
                    size: "large",
                    placeholder: "Option name here...",
                    onPressEnter: a
                })]
            }), (0, n.jsx)(i.default, {
                size: "large",
                block: !0,
                style: {
                    marginTop: 10,
                    height: 50
                },
                type: "primary",
                disabled: !t.trim().length,
                onClick: a,
                children: "Add Option"
            })]
        })
    }
})), o.register("7Nov4", (function(t, a) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv");
    o("fywoC");
    var i = o("1NcNG"),
        l = o("2FDaO"),
        r = o("93yIm"),
        s = o("gnAdP"),
        d = o("13AMv"),
        u = o("90RCV"),
        c = o("fjMYa"),
        f = o("6rP5s"),
        h = o("enT9V");
    let p;
    var m = e => {
        const t = t => {
                (0, c.default)({
                    action: f.default.moveOption,
                    payload: {
                        key: e.hookKey,
                        option: e.name,
                        direction: t
                    }
                })
            },
            o = () => {
                (0, c.default)({
                    action: f.default.removeOption,
                    payload: {
                        key: e.hookKey,
                        option: e.name
                    }
                })
            },
            a = () => {
                (0, c.default)({
                    action: f.default.makeOptionDefault,
                    payload: {
                        key: e.hookKey,
                        option: e.name
                    }
                })
            },
            l = () => {
                (0, c.default)({
                    action: f.default.removeDefaultOption,
                    payload: {
                        key: e.hookKey,
                        option: e.name
                    }
                })
            };
        return (0, n.jsx)(i.HookCardButton, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: (0, n.jsxs)(x, {
                children: [(0, n.jsx)("div", {
                    children: e.name
                }), (0, n.jsx)(s.default, {
                    overlay: (0, n.jsxs)(d.default, {
                        children: [e.isDefaultOption ? (0, n.jsx)(d.default.Item, {
                            onClick: (0, h.default)(l),
                            children: "Remove As Default Option"
                        }, "remove-as-default-option") : (0, n.jsx)(d.default.Item, {
                            onClick: (0, h.default)(a),
                            children: "Make Default Option"
                        }, "make-default-option"), 0 !== e.index ? (0, n.jsx)(d.default.Item, {
                            onClick: (0, h.default)((() => t("up"))),
                            children: "Move Up"
                        }, "move-up") : null, e.index !== e.numberOfItems - 1 ? (0, n.jsx)(d.default.Item, {
                            onClick: (0, h.default)((() => t("down"))),
                            children: "Move Down"
                        }, "move-down") : null, (0, n.jsx)(d.default.Item, {
                            onClick: (0, h.default)(o),
                            children: "Remove Option"
                        }, "remove-option")]
                    }),
                    children: (0, n.jsx)(r.default, {
                        shape: "circle",
                        type: "dashed",
                        icon: (0, n.jsx)(u.default, {})
                    })
                })]
            })
        })
    };
    const x = l.default.div.attrs({
        className: "maxWidth flex between vc"
    })(p || (p = (e => e)``))
})), o.register("2nli6", (function(t, a) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = o("hxEiv"),
        i = o("lpEVe"),
        l = o("fywoC"),
        r = o("eLUYq"),
        s = o("aqP4x"),
        d = o("2FDaO"),
        u = o("b9Zw0"),
        c = o("khSZr"),
        f = o("fjMYa"),
        h = o("6rP5s"),
        p = o("g9kjq"),
        m = o("f9d7r"),
        x = o("g08eN");
    let v;
    const y = r.default.name.toLowerCase();
    var g = (0, i.observer)((e => {
        const t = (0, c.default)(e.hookKey),
            [o, a] = l.useState(null == t ? void 0 : t.displayName),
            [i, r] = l.useState(null == t ? void 0 : t.displayDescription);
        l.useEffect((() => {
            a(null == t ? void 0 : t.displayName)
        }), [null == t ? void 0 : t.displayName]), l.useEffect((() => {
            r(null == t ? void 0 : t.displayDescription)
        }), [null == t ? void 0 : t.displayDescription]);
        return t ? (0, n.jsxs)(k, {
            children: [t.type === m.HookType.number ? (0, n.jsx)(x.default, {
                hookKey: e.hookKey,
                options: t.options
            }) : null, (0, n.jsx)(s.HookFormInputLabel, {
                children: "Display Name"
            }), (0, n.jsxs)(s.HookFormInputLabelDescription, {
                children: ["This ", y, " corresponds to an option that the game host will set before loading into your map. Set a display name that will make sense to them based off that this ", y, " customizes. Or leave it blank to use the ", y, "'s name."]
            }), (0, n.jsx)(u.default, {
                size: "large",
                placeholder: t.key,
                value: o,
                onChange: e => {
                    a(e.target.value)
                },
                onBlur: () => {
                    (0, f.default)({
                        action: h.default.setNameOrDescription,
                        payload: {
                            key: e.hookKey,
                            value: o,
                            property: "displayName"
                        }
                    })
                },
                maxLength: p.default.maxDisplayNameLength
            }), (0, n.jsx)("div", {
                style: {
                    height: 20
                }
            }), (0, n.jsx)(s.HookFormInputLabel, {
                children: "Description"
            }), (0, n.jsx)(s.HookFormInputLabelDescription, {
                children: "Optional description used to give the game host more info on what this hook customizes."
            }), (0, n.jsx)(u.default, {
                size: "large",
                placeholder: "Description here...",
                value: i,
                onChange: e => {
                    r(e.target.value)
                },
                onBlur: () => {
                    (0, f.default)({
                        action: h.default.setNameOrDescription,
                        payload: {
                            key: e.hookKey,
                            value: i,
                            property: "displayDescription"
                        }
                    })
                },
                maxLength: p.default.maxDisplayDescriptionLength
            })]
        }) : null
    }));
    const k = d.default.div(v || (v = (e => e)``))
})), o.register("g08eN", (function(t, a) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = o("hxEiv"),
        i = o("fywoC"),
        l = o("aqP4x"),
        r = o("fjMYa"),
        s = o("6rP5s"),
        d = o("cmvpZ"),
        u = o("gaBR9");
    const c = {
        width: "100%"
    };
    var f = e => {
        var t, o, a, f;
        const [h, p] = i.useState({
            defaultValue: e.options.defaultValue,
            min: e.options.min,
            max: e.options.max,
            step: e.options.step
        });
        i.useEffect((() => {
            p({
                defaultValue: e.options.defaultValue,
                min: e.options.min,
                max: e.options.max,
                step: e.options.step
            })
        }), [null === (t = e.options) || void 0 === t ? void 0 : t.defaultValue, null === (o = e.options) || void 0 === o ? void 0 : o.min, null === (a = e.options) || void 0 === a ? void 0 : a.max, null === (f = e.options) || void 0 === f ? void 0 : f.step]);
        const m = t => o => {
            ((t, o) => {
                (0, r.default)({
                    action: s.default.changeNumberOption,
                    payload: {
                        hookKey: e.hookKey,
                        key: t,
                        value: o
                    }
                }), p({
                    ...h,
                    [t]: o
                })
            })(t, o)
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.HookFormInputLabel, {
                children: "Default Value"
            }), (0, n.jsx)(u.default, {
                size: "large",
                style: c,
                placeholder: "0",
                onChange: m("defaultValue"),
                value: h.defaultValue,
                min: h.min,
                max: h.max,
                step: h.step
            }), (0, n.jsx)("div", {
                style: {
                    height: 20
                }
            }), (0, n.jsx)(l.HookFormInputLabel, {
                children: "Minimum"
            }), (0, n.jsx)(u.default, {
                size: "large",
                style: c,
                placeholder: "Minimum here...",
                onChange: m("min"),
                value: h.min,
                max: (0, d.isNil)(h.defaultValue) ? void 0 : h.defaultValue
            }), (0, n.jsx)("div", {
                style: {
                    height: 20
                }
            }), (0, n.jsx)(l.HookFormInputLabel, {
                children: "Maximum"
            }), (0, n.jsx)(u.default, {
                size: "large",
                style: c,
                placeholder: "Maximum here...",
                onChange: m("max"),
                value: h.max,
                min: (0, d.isNil)(h.defaultValue) ? void 0 : h.defaultValue
            }), (0, n.jsx)("div", {
                style: {
                    height: 20
                }
            }), (0, n.jsx)(l.HookFormInputLabel, {
                children: "Step"
            }), (0, n.jsx)(l.HookFormInputLabelDescription, {
                children: "Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50."
            }), (0, n.jsx)(u.default, {
                size: "large",
                style: c,
                placeholder: "Step here...",
                onChange: m("step"),
                value: h.step,
                min: .01
            }), (0, n.jsx)("div", {
                style: {
                    height: 20
                }
            })]
        })
    }
})), o.register("gCowQ", (function(t, a) {
    e(t.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        i = o("fywoC"),
        l = o("93yIm"),
        r = o("fC6cp"),
        s = o("9xElQ"),
        d = o("b9Zw0"),
        u = o("lqzWa"),
        c = o("eLUYq"),
        f = o("5sw94"),
        h = o("2FDaO"),
        p = o("f9d7r"),
        m = o("69SUA"),
        x = o("fjMYa"),
        v = o("6rP5s"),
        y = o("g9kjq"),
        g = o("aqP4x");
    let k;
    const j = p.HookType.selectBox;
    var w = e => {
        const [t, o] = i.useState(""), [a, h] = i.useState(j);
        return (0, n.jsx)(s.default, {
            open: e.visible,
            onClose: e.close,
            placement: c.default.drawer.placement,
            width: c.default.drawer.widths.default,
            closable: !0,
            children: (0, n.jsxs)(f.default, {
                children: [(0, n.jsxs)(C, {
                    children: ["New ", c.default.name]
                }), (0, n.jsx)(r.default, {}), (0, n.jsxs)(g.HookFormInputLabel, {
                    children: [c.default.name, " Name"]
                }), (0, n.jsx)(d.default, {
                    size: "large",
                    style: {
                        width: "100%"
                    },
                    placeholder: "Name here...",
                    onChange: e => {
                        o(e.target.value)
                    },
                    value: t,
                    maxLength: y.default.maxKeyLength
                }), (0, n.jsx)("div", {
                    style: {
                        height: 20
                    }
                }), (0, n.jsxs)(g.HookFormInputLabel, {
                    children: [c.default.name, " Type"]
                }), (0, n.jsxs)(u.default, {
                    size: "large",
                    style: {
                        width: "100%"
                    },
                    value: a,
                    onChange: e => {
                        h(e)
                    },
                    children: [(0, n.jsx)(u.default.Option, {
                        value: p.HookType.selectBox,
                        children: "Select Box"
                    }), (0, n.jsx)(u.default.Option, {
                        value: p.HookType.number,
                        children: "Number"
                    }), (0, n.jsx)(u.default.Option, {
                        value: p.HookType.kit,
                        children: "Kit"
                    })]
                }), (0, n.jsx)("div", {
                    style: {
                        height: 30
                    }
                }), (0, n.jsxs)(l.default, {
                    block: !0,
                    size: "large",
                    type: "primary",
                    style: {
                        height: 60
                    },
                    onClick: () => {
                        t && a && ((0, x.default)({
                            action: v.default.newHook,
                            payload: {
                                key: t,
                                type: a
                            }
                        }), o(""), h(j), e.close())
                    },
                    children: ["Create ", c.default.name]
                })]
            })
        })
    };
    const C = h.default.div(k || (k = (e => e)`
  font-size: 28px;
  font-weight: ${0};
`), m.FontWeights.UltraBold)
})), o.register("1aac7", (function(t, a) {
    e(t.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        i = o("93yIm"),
        l = o("lpEVe"),
        r = o("fywoC"),
        s = o("2FDaO"),
        d = o("duwmE"),
        u = o("ijMF4"),
        c = o("8UJqa"),
        f = o("eLUYq"),
        h = o("9q1Gv"),
        p = o("iRjsB"),
        m = o("dmAs7"),
        x = o("gwxnT"),
        v = o("cCnGt"),
        y = o("a46H3"),
        g = o("3aHwG"),
        k = o("lqbc4");
    let j;
    var w = (0, l.observer)((() => {
        const e = r.useRef(),
            t = (0, y.default)(),
            {
                me: {
                    preferences: o
                }
            } = (0, x.default)(),
            a = e => {
                o.startGameWithMode = e
            };
        (0, k.useWillUnmount)((() => {
            a(g.MapModeType.liveGame)
        })), r.useEffect((() => (window.dispatchEvent(new CustomEvent("TEST_VALUES_VISIBLE")), () => {
            window.dispatchEvent(new CustomEvent("TEST_VALUES_HIDDEN"))
        })), []);
        const l = () => {
            (0, v.default)(h.default.startGame, {
                ownerAsSpectator: p.default.session.ownerRole === m.default.spectator,
                hookFormState: e.current,
                modeType: p.default.me.preferences.startGameWithMode
            })
        };
        return (0, n.jsx)(C, {
            children: (0, n.jsx)(d.default, {
                hooks: t,
                modeType: o.startGameWithMode,
                location: u.HookFormLocation.editor,
                footer: e => 0 === e ? (0, n.jsxs)("div", {
                    style: {
                        fontSize: 16
                    },
                    children: ["No ", f.default.name.toLowerCase(), "s to configure here yet. For Select Box ", f.default.name, "s, make sure you create selectable options for it to show up here!"]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.default, {
                        size: "large",
                        type: "primary",
                        block: !0,
                        style: {
                            height: 60,
                            marginTop: 15
                        },
                        onClick: l,
                        children: "Start Game With Test Values"
                    }), (0, n.jsx)(i.default, {
                        block: !0,
                        style: {
                            marginTop: 10
                        },
                        onClick: () => {
                            o.startGameWithMode === g.MapModeType.liveGame ? a(g.MapModeType.assignment) : a(g.MapModeType.liveGame)
                        },
                        children: o.startGameWithMode === g.MapModeType.liveGame ? "Live Game" : "Assignment"
                    })]
                }),
                onStateChange: t => e.current = t
            })
        })
    }));
    const C = s.default.div(j || (j = (e => e)`
  padding: 2px 10px 40px 10px;
  color: ${0};
`), c.default.Black)
})), o.register("31mj8", (function(t, a) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = o("fywoC"),
        i = o("h2K3u");
    var l = n.createContext(i.default)
})), o.register("6WS0O", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        sideMargin: 50,
        optionWidth: 200
    }
})), o.register("6gxPk", (function(t, a) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = o("dnh3u"),
        i = o("fywoC"),
        l = o("5D7Fe"),
        r = o("dwKuN"),
        s = function(e, t) {
            return i.createElement(r.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "DownOutlined";
    var d = i.forwardRef(s)
})), o.register("5D7Fe", (function(t, o) {
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
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), o.register("5mRwo", (function(t, o) {
    let a;
    var n;
    let i;
    var l;
    e(t.exports, "LocalStorageNames", (function() {
        return i
    })), (n = a || (a = {})).time = "time", n.target = "target", n.race = "race", n.allIn = "allIn", (l = i || (i = {})).language = "gimkit-3.0-game-language", l.currency = "gimkit-game-currency", l.music = "gimkit-music-track", l.allowGoogleTranslate = "gimkit-google-translate-allowed", l.editorDefaultLanguage = "gimkit-editor-v4-default-language", l.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", l.editorDefaultSubject = "gimkit-editor-v4-default-subject", l.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", l.hookSavedOptions = "gimkit-hook-saved-options"
}));