function e(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("81kfB", (function(o, n) {
    var i;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return m
    }));
    var a = t("hxEiv"),
        r = t("fC6cp"),
        l = t("9xElQ");
    t("fywoC");
    var s = t("biRlV"),
        d = t("3tYod"),
        c = t("lpEVe"),
        u = t("d38nI"),
        f = t("fi4wM"),
        p = t("f9d7r"),
        h = t("dZKSr"),
        x = t("eLUYq"),
        v = t("5sw94");
    var m = (0, c.observer)((e => {
        var t, o;
        const n = null === (t = e.hooks) || void 0 === t || null === (o = t.connections) || void 0 === o ? void 0 : o.find((t => t.option === e.option.key));
        return (0, a.jsx)(l.default, {
            open: e.visible,
            onClose: e.close,
            width: x.default.drawer.widths.default,
            placement: x.default.drawer.placement,
            closable: !0,
            children: (0, a.jsxs)(v.default, {
                children: [(0, a.jsx)(d.default, {
                    optionName: e.option.option.label,
                    optionKey: e.option.key,
                    deviceId: e.deviceId,
                    connectionName: null == n ? void 0 : n.hook,
                    close: e.close
                }), (0, a.jsx)(r.default, {}), (() => {
                    if (n) {
                        if (n.hookType === p.HookType.selectBox) return (0, a.jsx)(h.default, {
                            option: e.option,
                            connection: n,
                            deviceId: e.deviceId
                        });
                        if (n.hookType === p.HookType.kit) return (0, a.jsx)(u.default, {});
                        if (n.hookType === p.HookType.number) return (0, a.jsx)(f.default, {
                            option: e.option,
                            connection: n
                        })
                    }
                    return (0, a.jsx)(s.default, {
                        option: e.option,
                        deviceId: e.deviceId,
                        deviceType: e.deviceType
                    })
                })()]
            })
        })
    }))
})), t.register("biRlV", (function(o, n) {
    e(o.exports, "default", (function() {
        return N
    }));
    var i = t("hxEiv"),
        a = t("lpEVe");
    t("fywoC");
    var r = t("2FDaO"),
        l = t("z5iun"),
        s = t("f9d7r"),
        d = t("gwxnT"),
        c = t("eLUYq"),
        u = t("1NcNG"),
        f = t("lXPhY"),
        p = t("9rrcG"),
        h = t("3KIWF"),
        x = t("8UJqa"),
        v = t("69SUA"),
        m = t("71TET");
    let k, y, g, j, b, C, w = e => e;
    var N = (0, a.observer)((e => {
        var t;
        const {
            hooks: {
                hookJSON: o
            }
        } = (0, d.default)(), n = JSON.parse(o);
        return (null == n || null === (t = n.hooks) || void 0 === t ? void 0 : t.length) ? (0, i.jsxs)(L, {
            children: [(0, i.jsxs)(O, {
                children: ["Choose a ", c.default.name.toLowerCase(), " to connect to..."]
            }), n.hooks.map((t => {
                const o = (n = e.option, a = e.deviceType, !((r = t.type) === s.HookType.kit ? "kitId" === n.key && a === l.default.gimkitLiveQuestion : r !== s.HookType.number || n.option.type === m.default.numberInput));
                var n, a, r;
                return (0, i.jsx)(u.HookCardButton, {
                    style: {
                        marginBottom: 10,
                        cursor: o ? "not-allowed" : "pointer",
                        background: o ? "#e0e0e0" : x.default.White
                    },
                    onClick: () => {
                        o || (0, f.default)({
                            action: p.default.connect,
                            payload: {
                                hook: t.key,
                                option: e.option.key
                            },
                            device: e.deviceId
                        })
                    },
                    children: (0, i.jsxs)("div", {
                        className: "flex-column",
                        style: {
                            alignItems: "flex-start"
                        },
                        children: [(0, i.jsx)(T, {
                            children: (0, h.default)(t.type)
                        }), (0, i.jsx)(F, {
                            children: t.key
                        }), o && (0, i.jsxs)(S, {
                            children: ["Cannot use ", c.default.name.toLowerCase(), " for this option"]
                        })]
                    })
                }, `${t.key}-option-connect`)
            }))]
        }) : (0, i.jsx)(L, {
            children: (0, i.jsxs)("div", {
                className: "flex-column maxWidth flex-center",
                children: [(0, i.jsx)("div", {
                    style: {
                        fontSize: 42,
                        marginBottom: 10,
                        color: "#3949ab"
                    },
                    children: (0, i.jsx)("i", {
                        className: "fad fa-plus-square"
                    })
                }), (0, i.jsxs)(I, {
                    children: ["You haven't created any ", c.default.name.toLowerCase(), "s yet. Create one first and then come back here to connect this option to that", " ", c.default.name.toLowerCase(), "."]
                })]
            })
        })
    }));
    const L = r.default.div(k || (k = w``)),
        I = r.default.div(y || (y = w`
  font-size: 18px;
`)),
        O = r.default.div(g || (g = w`
  font-style: italic;
  font-size: 16px;
  margin-bottom: 20px;
`)),
        T = r.default.div(j || (j = w`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${0};
`), v.FontWeights.Normal),
        F = r.default.div(b || (b = w``)),
        S = r.default.div(C || (C = w`
  background: #e53935;
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${0};
  color: ${0};
  padding: 10px 12px;
  border-radius: 8px;
  line-height: 1;
`), v.FontWeights.Normal, x.default.White)
})), t.register("f9d7r", (function(t, o) {
    let n;
    var i;
    e(t.exports, "HookType", (function() {
        return n
    })), (i = n || (n = {})).selectBox = "selectBox", i.kit = "kit", i.number = "number"
})), t.register("eLUYq", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        name: "Hook",
        drawer: {
            placement: "left",
            widths: {
                default: 450,
                testValues: 700
            }
        }
    }
})), t.register("1NcNG", (function(o, n) {
    e(o.exports, "HookNewCardButton", (function() {
        return f
    })), e(o.exports, "HookCardButton", (function() {
        return p
    }));
    var i = t("hxEiv");
    t("fywoC");
    var a = t("7ECC6"),
        r = t("2FDaO"),
        l = t("8UJqa"),
        s = t("69SUA");
    let d, c, u = e => e;
    const f = e => (0, i.jsx)(h, {
            hoverable: !0,
            onClick: e.onClick,
            style: e.style,
            children: (0, i.jsx)(x, {
                children: (0, i.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, i.jsx)("i", {
                        style: {
                            color: "#2e7d32",
                            marginRight: 10,
                            fontSize: 28
                        },
                        className: "fas fa-plus-circle"
                    }), (0, i.jsx)("div", {
                        children: e.children
                    })]
                })
            })
        }),
        p = e => (0, i.jsx)(h, {
            hoverable: !0,
            onClick: e.onClick,
            style: e.style,
            children: (0, i.jsx)(x, {
                children: e.children
            })
        }),
        h = (0, r.default)(a.default)(d || (d = u``)),
        x = r.default.div(c || (c = u`
  color: ${0};
  font-size: 18px;
  font-weight: ${0};
`), l.default.Black, s.FontWeights.Bold)
})), t.register("lXPhY", (function(o, n) {
    e(o.exports, "default", (function() {
        return a
    }));
    var i = t("2J1UE");
    var a = e => {
        (0, i.default)(e)
    }
})), t.register("2J1UE", (function(o, n) {
    e(o.exports, "default", (function() {
        return r
    }));
    var i = t("9q1Gv"),
        a = t("cCnGt");
    var r = e => {
        (0, a.default)(i.default.hookOptionAction, {
            device: e.device,
            action: e.action,
            payload: e.payload
        })
    }
})), t.register("9rrcG", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        connect: "CONNECT",
        createLink: "CREATE_LINK",
        changeLinkOption: "CHANGE_LINK_OPTION",
        changeLinkValue: "CHANGE_LINK_VALUE",
        removeLink: "REMOVE_LINK",
        disconnect: "DISCONNECT"
    }
})), t.register("3KIWF", (function(o, n) {
    e(o.exports, "default", (function() {
        return a
    }));
    var i = t("f9d7r");
    var a = e => e === i.HookType.selectBox ? "Select Box" : e === i.HookType.number ? "Number" : e === i.HookType.kit ? "Kit" : "Unknown Type"
})), t.register("3tYod", (function(o, n) {
    e(o.exports, "default", (function() {
        return h
    }));
    var i = t("hxEiv"),
        a = t("90RCV"),
        r = t("93yIm"),
        l = t("gnAdP"),
        s = t("13AMv"),
        d = t("fBuQJ");
    t("fywoC");
    var c = t("eLUYq"),
        u = t("lXPhY"),
        f = t("9rrcG"),
        p = t("a9UAs");
    var h = e => {
        const t = () => {
            d.default.confirm({
                title: `Are you sure you want to disconnect this option from this ${c.default.name.toLowerCase()}?`,
                onOk: () => {
                    (0, u.default)({
                        action: f.default.disconnect,
                        device: e.deviceId,
                        payload: {
                            option: e.optionKey
                        }
                    }), e.close()
                }
            })
        };
        return (0, i.jsxs)("div", {
            className: "flex between vc",
            children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(p.default, {
                    title: e.optionName,
                    descriptor: e.connectionName || `Connect ${c.default.name}`
                })
            }), (0, i.jsx)("div", {
                style: {
                    marginLeft: 10
                },
                children: e.connectionName ? (0, i.jsx)(l.default, {
                    overlay: (0, i.jsx)(s.default, {
                        children: (0, i.jsxs)(s.default.Item, {
                            onClick: t,
                            children: ["Disconnect From ", c.default.name]
                        })
                    }),
                    children: (0, i.jsx)(r.default, {
                        shape: "circle",
                        icon: (0, i.jsx)(a.default, {}),
                        type: "dashed"
                    })
                }) : null
            })]
        })
    }
})), t.register("a9UAs", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        r = t("69SUA");
    let l, s, d, c = e => e;
    var u = e => (0, i.jsxs)(f, {
        children: [(0, i.jsx)(p, {
            children: e.descriptor
        }), (0, i.jsx)(h, {
            children: e.title
        })]
    });
    const f = a.default.div(l || (l = c``)),
        p = a.default.div(s || (s = c`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        h = a.default.div(d || (d = c`
  font-size: 28px;
  font-weight: ${0};
`), r.FontWeights.Bold)
})), t.register("d38nI", (function(o, n) {
    e(o.exports, "HookConnectedBase", (function() {
        return f
    })), e(o.exports, "default", (function() {
        return p
    }));
    var i = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        r = t("eLUYq"),
        l = t("69SUA");
    let s, d, c, u = e => e;
    const f = e => (0, i.jsxs)(h, {
        children: [(0, i.jsx)("div", {
            children: (0, i.jsx)("i", {
                style: {
                    color: "#388e3c",
                    fontSize: 32
                },
                className: "fas fa-check"
            })
        }), (0, i.jsxs)(x, {
            children: [r.default.name, " connected!"]
        }), (0, i.jsxs)(v, {
            children: ["The value of this ", r.default.name.toLowerCase(), " will be the value of this option."]
        }), e.children]
    });
    var p = () => (0, i.jsx)(f, {});
    const h = a.default.div.attrs({
            className: "flex-column flex-center"
        })(s || (s = u``)),
        x = a.default.div(d || (d = u`
  font-weight: ${0};
  font-size: 24px;
  margin-top: 10px;
`), l.FontWeights.Bold),
        v = a.default.div(c || (c = u`
  font-size: 16px;
  margin-top: 4px;
`))
})), t.register("fi4wM", (function(o, n) {
    e(o.exports, "default", (function() {
        return k
    }));
    var i = t("hxEiv"),
        a = t("bfV0l"),
        r = t("fC6cp"),
        l = t("cmvpZ"),
        s = t("cSKYy");
    t("fywoC");
    var d = t("d38nI"),
        c = t("2FDaO"),
        u = t("gwxnT"),
        f = t("f9d7r"),
        p = t("iMOcM"),
        h = t("eLUYq");
    let x, v, m = e => e;
    var k = (0, s.observer)((e => {
        const {
            hooks: {
                hookJSON: t
            }
        } = (0, u.default)(), o = JSON.parse(t).hooks.find((t => t.key === e.connection.hook));
        if (!o || o.type !== f.HookType.number) return null;
        const n = o.options || {},
            a = e.option.option.props || {},
            s = () => {
                const e = [];
                return (0, l.isNil)(a.min) || ((0, l.isNil)(n.min) ? e.push({
                    key: "Minimum",
                    device: a.min
                }) : n.min < a.min && e.push({
                    key: "Minimum",
                    device: a.min,
                    hook: n.min
                })), (0, l.isNil)(a.max) || ((0, l.isNil)(n.max) && e.push({
                    key: "Maximum",
                    device: a.max
                }), n.max > a.max && e.push({
                    key: "Maximum",
                    device: a.max,
                    hook: n.max
                })), (0, l.isNil)(a.step) || ((0, l.isNil)(n.step) ? e.push({
                    key: "Step",
                    device: a.step
                }) : n.step !== a.step && e.push({
                    key: "Step",
                    device: a.step,
                    hook: n.step
                })), e
            },
            c = s();
        return (0, i.jsx)(d.HookConnectedBase, {
            children: c.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(r.default, {}), (0, i.jsxs)(g, {
                    children: [(0, i.jsxs)(j, {
                        children: ["This ", h.default.name.toLowerCase(), "'s settings are setup in a way that a user could enter a number not allowed for this device's option. ", (0, i.jsx)("br", {}), " ", (0, i.jsx)("br", {}), " If a number invalid for this device's option is used, the value set on the device itself will be used."]
                    }), s().map((e => (0, i.jsx)(y, {
                        name: e.key,
                        deviceValue: e.device,
                        hookValue: e.hook
                    }, e.key)))]
                })]
            }) : null
        })
    }));
    const y = e => {
            const {
                name: t,
                deviceValue: o,
                hookValue: n
            } = e;
            return (0, i.jsx)(a.default, {
                style: {
                    marginBottom: 10
                },
                type: "warning",
                message: (0, l.isNil)(n) ? (0, i.jsxs)(i.Fragment, {
                    children: ["This device's option has a ", (0, i.jsx)("b", {
                        children: t.toLowerCase()
                    }), " of", " ", (0, i.jsx)("b", {
                        children: (0, p.numberWithCommas)(o)
                    }), ", but no ", t.toLowerCase(), " is set on the ", h.default.name.toLowerCase(), "."]
                }) : (0, i.jsxs)(i.Fragment, {
                    children: ["This device's option has a ", (0, i.jsx)("b", {
                        children: t.toLowerCase()
                    }), " of", " ", (0, i.jsx)("b", {
                        children: (0, p.numberWithCommas)(o)
                    }), ", but the", " ", h.default.name.toLowerCase(), " value is set to", " ", (0, i.jsx)("b", {
                        children: (0, p.numberWithCommas)(n)
                    })]
                })
            })
        },
        g = c.default.div(x || (x = m`
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`)),
        j = c.default.div(v || (v = m`
  font-size: 16px;
  margin-bottom: 18px;
`))
})), t.register("dZKSr", (function(o, n) {
    e(o.exports, "default", (function() {
        return N
    }));
    var i = t("hxEiv"),
        a = t("lpEVe");
    t("fywoC");
    var r = t("gwxnT"),
        l = t("lXPhY"),
        s = t("9rrcG"),
        d = t("eLUYq"),
        c = t("93yIm"),
        u = t("fC6cp"),
        f = t("fBuQJ"),
        p = t("lqzWa"),
        h = t("5o3nL"),
        x = t("aqP4x"),
        v = t("kyvf1"),
        m = t("2FDaO"),
        k = t("69SUA");
    let y, g, j = e => e;
    const b = (0, a.observer)((e => {
            const {
                hooks: {
                    hookJSON: t
                }
            } = (0, r.default)(), o = () => {
                (0, l.default)({
                    action: s.default.createLink,
                    payload: {
                        option: e.connection.option,
                        hook: e.connection.hook
                    },
                    device: e.deviceId
                })
            }, n = e.connection.options, a = Object.keys(n.valueMap), f = JSON.parse(t).hooks.find((t => t.key === e.connection.hook));
            if (!f) return null;
            const p = f.options;
            if (!p.options.length) return (0, i.jsxs)("div", {
                style: {
                    fontSize: 16
                },
                children: ["Before you can connect the ", d.default.name.toLowerCase(), " to this option, you need to add selectable options. Go modify your", " ", d.default.name.toLowerCase(), " to include options and then come back here!"]
            });
            if (!a.length) return (0, i.jsx)(w, {
                createLink: o
            });
            const h = p.options.filter((e => !a.includes(e)));
            return (0, i.jsxs)(L, {
                children: [a.map((t => (0, i.jsx)(C, {
                    option: e.option,
                    selectKey: t,
                    selectValue: e.connection.options.valueMap[t],
                    selectOptions: [t, ...h],
                    deviceId: e.deviceId,
                    hookId: e.connection.hook
                }, t + "-hook-option"))), h.length ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(c.default, {
                        size: "large",
                        type: "primary",
                        block: !0,
                        style: {
                            height: 60
                        },
                        onClick: o,
                        children: "Add Another Link"
                    })]
                }) : null]
            })
        })),
        C = e => (0, i.jsxs)(I, {
            children: [(0, i.jsxs)(x.HookFormInputLabel, {
                children: [d.default.name, " Value"]
            }), (0, i.jsx)(p.default, {
                style: {
                    width: "100%"
                },
                value: e.selectKey,
                placeholder: "Choose a value...",
                onChange: t => {
                    (0, l.default)({
                        action: s.default.changeLinkOption,
                        device: e.deviceId,
                        payload: {
                            option: e.option.key,
                            hook: e.hookId,
                            currentOption: e.selectKey,
                            newOption: t
                        }
                    })
                },
                children: e.selectOptions.map((t => (0, i.jsx)(p.default.Option, {
                    value: t,
                    children: t
                }, t + e.selectKey)))
            }), (0, i.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, i.jsx)(x.HookFormInputLabel, {
                children: "Option Value"
            }), (0, i.jsx)(h.default, {
                option: e.option.option,
                value: e.selectValue,
                onChange: t => {
                    (0, l.default)({
                        action: s.default.changeLinkValue,
                        device: e.deviceId,
                        payload: {
                            option: e.option.key,
                            hook: e.hookId,
                            key: e.selectKey,
                            value: t
                        }
                    })
                },
                readOnly: !1
            }), (0, i.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, i.jsx)("div", {
                className: "maxWidth flex",
                style: {
                    justifyContent: "flex-end"
                },
                children: (0, i.jsx)(v.default, {
                    onClick: () => {
                        f.default.confirm({
                            title: "Are you sure you want to remove this link?",
                            onOk: () => {
                                (0, l.default)({
                                    action: s.default.removeLink,
                                    device: e.deviceId,
                                    payload: {
                                        option: e.option.key,
                                        hook: e.hookId,
                                        key: e.selectKey
                                    }
                                })
                            }
                        })
                    },
                    children: "Remove link"
                })
            })]
        }),
        w = e => (0, i.jsxs)("div", {
            className: "flex-column flex-center",
            style: {
                background: "#eceff1",
                padding: 40,
                borderRadius: 6,
                border: "1px dashed rgba(0, 0, 0, 0.5)",
                cursor: "pointer"
            },
            onClick: e.createLink,
            children: [(0, i.jsx)("div", {
                style: {
                    fontWeight: k.FontWeights.Bold,
                    fontSize: 18,
                    marginBottom: 6
                },
                children: "Create new link"
            }), (0, i.jsxs)("div", {
                children: ["Link the value of a ", d.default.name.toLowerCase(), " to the value of this option"]
            })]
        });
    var N = b;
    const L = m.default.div(y || (y = j``)),
        I = m.default.div.attrs({
            className: "light-shadow"
        })(g || (g = j`
  background: #fafafa;
  padding: 30px;
  border-radius: 6px;
  margin-bottom: 20px;
`))
})), t.register("aqP4x", (function(o, n) {
    e(o.exports, "HookFormInputLabel", (function() {
        return d
    })), e(o.exports, "HookFormInputLabelDescription", (function() {
        return c
    }));
    var i = t("2FDaO"),
        a = t("69SUA");
    let r, l, s = e => e;
    const d = i.default.div(r || (r = s`
  font-size: 18px;
  font-weight: ${0};
  margin-bottom: 4px;
`), a.FontWeights.Bold),
        c = i.default.div(l || (l = s`
  font-size: 14px;
  margin-bottom: 4px;
`))
})), t.register("5sw94", (function(o, n) {
    e(o.exports, "default", (function() {
        return s
    }));
    var i = t("2FDaO"),
        a = t("69SUA"),
        r = t("8UJqa");
    let l;
    var s = i.default.div(l || (l = (e => e)`
  color: ${0};
  font-family: ${0};
`), r.default.Black, a.Fonts.ProductSans)
}));