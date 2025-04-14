function e(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("grjnz", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        grid: {
            singular: "block",
            plural: "blocks"
        },
        blocklyBlock: {
            singular: "piece",
            plural: "pieces"
        }
    }
})), o.register("59VVw", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = o("4MuSt"),
        r = o("fywoC"),
        l = o("gwxnT");
    var a = () => {
        const {
            me: e,
            world: {
                devices: t
            }
        } = (0, l.default)(), [o, n] = r.useState("{}"), [a, s] = r.useState("{}"), [d, u] = r.useState("{}");
        r.useEffect((() => {
            const o = (0, i.reaction)((() => t.devices.get(e.editing.device.currentlyEditedDevice.id)), (e => {
                e && (n(JSON.stringify(e.options)), s(JSON.stringify({
                    x: e.x,
                    y: e.y
                })), e.hooks ? u(JSON.stringify(e.hooks)) : u("{}"))
            }), {
                fireImmediately: !0
            });
            return () => {
                o()
            }
        }), []);
        return {
            options: JSON.parse(o),
            position: JSON.parse(a),
            hooks: JSON.parse(d)
        }
    }
})), o.register("9kHWt", (function(t, n) {
    e(t.exports, "default", (function() {
        return O
    }));
    var i = o("hxEiv"),
        r = o("fywoC"),
        l = o("kyM3N"),
        a = o("8gln7"),
        s = o("1L6aW"),
        d = o("4gMdJ"),
        u = o("i5Qjx"),
        p = o("hdT9U"),
        c = o("k4lId"),
        v = o("lpEVe"),
        f = o("6zpVf"),
        h = o("gs7Wc"),
        m = o("4L0xs");
    const y = "All Options",
        g = (0, v.observer)((e => {
            var t, o, n, v;
            const {
                device: g,
                deviceOption: O,
                position: j,
                options: C
            } = e, [w, P] = r.useState(x(O.optionSchema)), S = !(0, l.default)(), b = (e, t) => {
                S || ((0, f.EmitTutorialEvent)({
                    event: f.TutorialEventName.CHANGE_DEVICE_OPTION,
                    device: g,
                    option: e,
                    value: t
                }), (0, a.default)({
                    deviceOption: O,
                    id: g.id,
                    x: j.x,
                    y: j.y,
                    depth: g.layers.getOptionsDepth(),
                    layerId: g.layers.getOptionsLayer(),
                    name: g.name,
                    isPreview: !1,
                    options: {
                        ...C,
                        [e]: t
                    },
                    placedByClient: !0,
                    state: O.defaultState
                }))
            }, E = (0, i.jsx)(u.default, {
                size: 12,
                direction: "vertical",
                className: "maxWidth",
                children: (0, i.jsx)(s.default, {
                    device: g,
                    deviceOption: O,
                    options: C,
                    hooks: e.hooks,
                    readOnly: S,
                    handleOptionChange: b,
                    category: w === y ? void 0 : w,
                    setCategory: P
                })
            }), I = ((null === (t = O.optionSchema) || void 0 === t || null === (o = t.categories) || void 0 === o ? void 0 : o.categories) || []).filter((e => void 0 === e.supportedMapStyles || e.supportedMapStyles.includes((0, m.GetCurrentMapStyle)()))).filter((e => {
                var t;
                return !(null === (t = e.hideIf) || void 0 === t ? void 0 : t.length) || !(0, h.ShouldHideFromHideIf)({
                    hideIf: e.hideIf,
                    options: C
                })
            }));
            if (r.useEffect((() => {
                    w && w !== y && !I.some((e => e.id === w)) && P(x(O.optionSchema))
                }), [w, I]), !I || !I.length) return E;
            const k = [];
            I.forEach((e => {
                k.push({
                    id: e.id,
                    name: e.name
                })
            }));
            return "start" === (null === (n = O.optionSchema) || void 0 === n || null === (v = n.categories) || void 0 === v ? void 0 : v.showAllOptionsAt) || !1 ? k.unshift({
                id: y,
                name: y
            }) : k.push({
                id: y,
                name: y
            }), (0, i.jsx)(d.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: "yellow"
                        }
                    }
                },
                children: (0, i.jsx)(p.default, {
                    activeKey: w,
                    onChange: e => {
                        (0, c.playClickSound)(), P(e)
                    },
                    className: "maxWidth",
                    style: {
                        marginTop: -18
                    },
                    size: "large",
                    items: k.map((e => ({
                        label: e.name,
                        key: e.id,
                        children: E
                    })))
                })
            })
        })),
        x = e => {
            if (e.categories) {
                if ("start" === e.categories.showAllOptionsAt) return y;
                if (e.categories.categories.length) return e.categories.categories[0].id
            }
            return y
        };
    var O = g
})), o.register("1L6aW", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = o("hxEiv");
    o("fywoC");
    var r = o("3c9VH"),
        l = o("c16M8"),
        a = o("bSnFK"),
        s = o("i5Qjx"),
        d = o("4y75y"),
        u = o("aupg1"),
        p = o("4ifJF"),
        c = o("py2Xr"),
        v = o("1ZCZ6"),
        f = o("lpEVe"),
        h = o("gwxnT"),
        m = o("aP4WC");
    var y = (0, f.observer)((e => {
        const {
            device: t,
            deviceOption: o,
            options: n,
            category: f,
            setCategory: y
        } = e, {
            me: {
                roleLevel: g
            }
        } = (0, h.default)(), x = g >= m.RoleLevelConsts.admin, O = (() => {
            let e = (0, r.CreateOptionsFromOptionSchema)({
                device: t,
                options: n,
                optionSchema: o.optionSchema
            }).filter((e => !f || !(!e.categories || !e.categories.includes(f)))).filter((e => (0, l.CanModifyDeviceOption)(o.id, e.key)));
            return (0, a.CanAddDeviceType)(o.id, n) || (e = [], f && y(void 0)), e
        })();
        return O.length ? (0, i.jsx)(s.default, {
            size: 14,
            direction: "vertical",
            className: "maxWidth",
            children: O.map((o => (0, i.jsx)(u.default, {
                option: o,
                value: n[o.key],
                onChange: t => e.handleOptionChange(String(o.key), t),
                readOnly: e.readOnly,
                deviceId: t.id,
                deviceType: t.deviceOption.id,
                hooks: e.hooks,
                showHooks: x
            }, `${t.id} ${String(o.key)}`)))
        }) : (0, i.jsxs)(p.CenteredColumn, {
            className: "maxWidth",
            children: [(0, i.jsx)("div", {
                style: {
                    fontSize: 36,
                    color: "rgba(255,255,255,0.85)"
                },
                children: (0, i.jsx)(c.default, {
                    name: "fas fa-cogs"
                })
            }), (0, i.jsx)("div", {
                style: {
                    marginTop: 3
                },
                children: (0, i.jsxs)(d.default.Text, {
                    children: ["No options to configure for this", " ", f ? "category" : v.default.device.singular, "!"]
                })
            })]
        })
    }))
})), o.register("3c9VH", (function(t, n) {
    e(t.exports, "CreateOptionsFromOptionSchema", (function() {
        return r
    }));
    var i = o("gs7Wc");
    const r = e => (0, i.FilterOutHiddenOptions)({
        device: e.device,
        options: e.options,
        optionSchema: e.optionSchema
    })
})), o.register("gs7Wc", (function(t, n) {
    e(t.exports, "ShouldHideFromHideIf", (function() {
        return s
    })), e(t.exports, "FilterOutHiddenOptions", (function() {
        return d
    }));
    var i = o("z5iun"),
        r = o("7w7xg");
    const l = ["shadowsEnabled", "shadowsPlacement"],
        a = ["canBeDamaged", "health", "useAdaptiveHealth", "adaptiveHealthPerPlayer", "onDestroyedChannel", "UseColliders"],
        s = e => {
            var t;
            let o = !1;
            return (null === (t = e.hideIf) || void 0 === t ? void 0 : t.length) && e.hideIf.forEach((t => {
                t.every((t => {
                    var o;
                    const n = null !== (o = e.options[t.key]) && void 0 !== o ? o : void 0;
                    if ("EQUAL" === t.compare) {
                        if (t.value === n) return !0
                    } else if ("NOT_EQUAL" === t.compare) {
                        if (t.value !== n) return !0
                    } else if ("LESS_THAN" === t.compare) {
                        if (Number(n) < Number(t.value)) return !0
                    } else if ("GREATER_THAN" === t.compare && Number(n) > Number(t.value)) return !0;
                    return !1
                })) && (o = !0)
            })), o
        },
        d = e => {
            let t = e.optionSchema.options.filter((e => !e.option.hidden)).filter((t => {
                var o;
                let n = !1;
                return (null === (o = t.option.hideIf) || void 0 === o ? void 0 : o.length) && (n = s({
                    hideIf: t.option.hideIf,
                    options: e.options
                })), !n
            }));
            if (e.device.deviceOption.id === i.default.prop) {
                var o, n, d, u;
                const i = e.device.options,
                    s = (0, r.default)(i.propId);
                if (!s) return t;
                var p, c, v;
                const h = (null !== (p = null === (o = s.rectColliders) || void 0 === o ? void 0 : o.length) && void 0 !== p ? p : 0) + (null !== (c = null === (n = s.circleColliders) || void 0 === n ? void 0 : n.length) && void 0 !== c ? c : 0) + (null !== (v = null === (d = s.ellipseColliders) || void 0 === d ? void 0 : d.length) && void 0 !== v ? v : 0) > 0;
                var f;
                const m = (null !== (f = null === (u = s.shadows) || void 0 === u ? void 0 : u.length) && void 0 !== f ? f : 0) > 0;
                t = t.filter((e => !(!m && l.includes(e.key)) && !(!h && a.includes(e.key))))
            }
            return t
        }
})), o.register("c16M8", (function(t, n) {
    e(t.exports, "CanModifyDeviceOption", (function() {
        return s
    }));
    var i = o("aP4WC"),
        r = o("1VP8q"),
        l = o("2mjL9"),
        a = o("24AMo");
    const s = (e, t) => {
        const o = (0, l.FetchDeviceOptionById)(e);
        if (!o) return !1;
        const n = o.optionSchema.options.find((e => e.key === t));
        if (!(0, r.CanModifyDeviceOptionForCurrentMapStyle)({
                deviceTypeId: e,
                optionName: t
            })) return !1;
        var s;
        const d = null !== (s = null == n ? void 0 : n.minimumRoleLevel) && void 0 !== s ? s : i.RoleLevelConsts.min;
        var u;
        const p = null !== (u = null == n ? void 0 : n.maximumRoleLevel) && void 0 !== u ? u : i.RoleLevelConsts.max;
        return (0, a.IsRoleLevelBetween)(d, p)
    }
})), o.register("1VP8q", (function(t, n) {
    e(t.exports, "CanModifyDeviceOptionForCurrentMapStyle", (function() {
        return l
    }));
    var i = o("2mjL9"),
        r = o("4L0xs");
    const l = e => {
        const {
            deviceTypeId: t,
            optionName: o
        } = e, n = (0, i.FetchDeviceOptionById)(t);
        if (!n) return !1;
        const l = n.optionSchema.options.find((e => e.key === o));
        return !!l && (!l.supportedMapStyles || l.supportedMapStyles.includes((0, r.GetCurrentMapStyle)()))
    }
})), o.register("aupg1", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var i = o("hxEiv"),
        r = o("93yIm"),
        l = o("4y75y"),
        a = o("2FDaO"),
        s = o("69SUA"),
        d = o("5o3nL"),
        u = o("e7fWL"),
        p = o("iMOcM");
    let c, v, f = e => e;
    var h = e => {
        const {
            option: t,
            value: o,
            onChange: n,
            readOnly: a
        } = e, {
            label: c,
            description: v
        } = t.option, [f, h, g] = (0, p.useBoolean)(!1);
        return (0, i.jsxs)(m, {
            children: [(0, i.jsxs)("div", {
                className: "flex vc maxWidth between",
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(l.default.Title, {
                        level: 5,
                        style: {
                            fontWeight: s.FontWeights.Bold
                        },
                        children: c
                    })
                }), e.showHooks ? (0, i.jsx)(r.default, {
                    size: "small",
                    shape: "circle",
                    type: "link",
                    icon: (0, i.jsx)("i", {
                        className: "far fa-cog"
                    }),
                    onClick: h
                }) : null]
            }), v ? (0, i.jsx)("div", {
                children: (0, i.jsx)(l.default.Text, {
                    italic: !0,
                    children: v
                })
            }) : null, (0, i.jsx)(y, {
                style: {
                    marginTop: 5
                },
                children: (0, i.jsx)(d.default, {
                    value: o,
                    option: t.option,
                    onChange: n,
                    readOnly: a
                })
            }), (0, i.jsx)(u.default, {
                visible: f,
                close: g,
                ...e
            })]
        })
    };
    const m = a.default.div.attrs({
            className: "maxWidth"
        })(c || (c = f`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`)),
        y = a.default.div.attrs({
            className: "maxWidth"
        })(v || (v = f``))
})), o.register("5o3nL", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var i = o("hxEiv");
    o("fywoC");
    var r = o("eRZGH"),
        l = o("eflkj"),
        a = o("bkuc5"),
        s = o("4YdCQ"),
        d = o("71TET"),
        u = o("6sYys"),
        p = o("ci9SD"),
        c = o("5yjbF"),
        v = o("1znBS");
    var f = e => {
        const {
            option: t,
            value: o,
            onChange: n
        } = e;
        return t.type === d.default.numberInput ? (0, i.jsx)(r.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.itemsList ? (0, i.jsx)(v.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.textInput ? (0, i.jsx)(a.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.select ? (0, i.jsx)(l.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.itemId ? (0, i.jsx)(u.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.skinId ? (0, i.jsx)(c.default, {
            value: o,
            onChange: n,
            readOnly: e.readOnly,
            optionProps: t.props
        }) : t.type === d.default.terrainId ? (0, i.jsx)(p.default, {
            optionProps: t.props,
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : t.type === d.default.color ? (0, i.jsx)(s.default, {
            value: o,
            onChange: n,
            readOnly: e.readOnly
        }) : null
    }
})), o.register("eRZGH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = o("hxEiv"),
        r = o("8K4sH"),
        l = o("5wngH"),
        a = o("fywoC");
    var s = e => {
        const {
            value: t,
            optionProps: o
        } = e, [n, s] = a.useState(t);
        a.useEffect((() => {
            s(t)
        }), [t]);
        const d = t => {
            if (null === t && e.optionProps.allowEmpty) return void s(void 0);
            let n = t;
            var i, r;
            o.step && t && (i = t, r = o.step, n = Math.round(i / r) * r), s(n)
        };
        return o.useSlider ? (0, i.jsx)(l.default, {
            value: n,
            onChange: d,
            onAfterChange: t => {
                s(t), e.onChange(t)
            },
            min: o.min,
            max: o.max,
            step: o.step,
            disabled: e.readOnly
        }) : (0, i.jsx)(r.default, {
            value: n,
            onChange: d,
            onBlur: () => {
                e.onChange(n)
            },
            min: o.min,
            max: o.max,
            step: o.step,
            style: {
                width: "100%"
            },
            disabled: e.readOnly,
            placeholder: "Enter a value..."
        })
    }
})), o.register("eflkj", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var i = o("hxEiv"),
        r = o("lqzWa"),
        l = o("i5Qjx"),
        a = o("fywoC"),
        s = o("24AMo"),
        d = o("2BPYb"),
        u = o("4L0xs");
    var p = e => {
        var t;
        const {
            optionProps: o
        } = e, n = a.useMemo((() => {
            if ("" !== e.value) return e.value
        }), [e.value]), p = a.useMemo((() => o.options.some((e => "Fugaz One" === e.value))), [null == o ? void 0 : o.options]);
        a.useEffect((() => {
            p && o.options.forEach((e => {
                (0, d.default)({
                    familyName: e.name
                })
            }))
        }), [p]);
        const c = null == o || null === (t = o.options) || void 0 === t ? void 0 : t.filter((e => !((null == e ? void 0 : e.supportedMapStyles) && !(null == e ? void 0 : e.supportedMapStyles.includes((0, u.GetCurrentMapStyle)()))) && (void 0 === (null == e ? void 0 : e.minimumRoleLevel) && void 0 === (null == e ? void 0 : e.maximumRoleLevel) || (0, s.IsRoleLevelBetween)(null == e ? void 0 : e.minimumRoleLevel, null == e ? void 0 : e.maximumRoleLevel))));
        if (!o || !c.length) return null;
        const v = t => {
            e.onChange(t)
        };
        return (0, i.jsx)(r.default, {
            value: null != n ? n : void 0,
            allowClear: o.allowEmpty,
            placeholder: o.placeholder || "None Selected",
            onSelect: v,
            onClear: () => v(void 0),
            filterOption: (e, t) => !!(t && t.name && t.name.toString().toUpperCase && e && e.toUpperCase) && -1 !== t.name.toString().toUpperCase().indexOf(e.toUpperCase()),
            showSearch: !0,
            disabled: e.readOnly,
            style: {
                width: "100%"
            },
            children: c.map((e => (0, i.jsx)(r.default.Option, {
                value: e.value,
                name: e.name,
                style: p ? {
                    fontFamily: e.value
                } : void 0,
                children: e.image ? (0, i.jsxs)(l.default, {
                    direction: "horizontal",
                    size: 6,
                    children: [(0, i.jsx)("img", {
                        src: e.image,
                        style: {
                            maxHeight: 30,
                            maxWidth: 30
                        }
                    }), (0, i.jsx)("div", {
                        children: e.name
                    })]
                }) : e.name
            }, `option-${e.value}`)))
        })
    }
})), o.register("bkuc5", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = o("hxEiv"),
        r = o("jsOaJ"),
        l = o("b9Zw0"),
        a = o("fywoC"),
        s = o("g2f01"),
        d = o("8JboP"),
        u = o("gSnSx"),
        p = o("1ZCZ6"),
        c = o("i3GMX"),
        v = o("aQuqp"),
        f = o("dz4Fv"),
        h = o("lb1cB"),
        m = o("9hy6K");
    var y = e => {
        const {
            value: t,
            optionProps: o
        } = e, [n, y] = a.useState(e.value);
        a.useEffect((() => {
            y(t)
        }), [t]);
        const g = a.useMemo((() => {
                if (null == o ? void 0 : o.category) {
                    const e = (0, s.default)(o.category).map((e => ({
                        option: e
                    })));
                    if (o.category === u.default.property) {
                        const t = (0, d.GetPropertiesWithoutMatchingPropertyDevice)(),
                            o = e.filter((e => !t.includes(e.option)));
                        return [...t.map((e => ({
                            option: e,
                            noMatchingDevice: !0
                        }))), ...o]
                    }
                    return e
                }
                return []
            }), []),
            x = () => {
                e.onChange(null == n ? void 0 : n.trim())
            };
        if (o.codeEditor) return (0, i.jsx)("div", {
            onBlur: x,
            children: (0, i.jsxs)(c.LiveProvider, {
                noInline: !0,
                code: n,
                scope: {
                    MapButton: v.default,
                    CallAction: f.CallAction,
                    usePropertyValue: h.usePropertyValue,
                    useItemAmount: m.useItemAmount
                },
                children: [(0, i.jsx)(c.LiveEditor, {
                    onChange: e => {
                        y(e)
                    }
                }), (0, i.jsx)(c.LiveError, {})]
            })
        });
        if (o.textArea) return (0, i.jsx)(l.default.TextArea, {
            value: n,
            onChange: e => y(e.target.value),
            onBlur: x,
            placeholder: o.placeholder,
            style: {
                width: "100%"
            }
        });
        const O = (() => {
            if ((null == o ? void 0 : o.category) === u.default.property && g.length) {
                let e = [];
                if (g.some((e => e.noMatchingDevice))) {
                    const t = g.filter((e => e.noMatchingDevice)),
                        o = g.filter((e => !e.noMatchingDevice));
                    if (e.push({
                            label: (0, i.jsxs)(i.Fragment, {
                                children: ["Properties without a corresponding Property", " ", p.default.device.singular]
                            }),
                            options: t.map((e => ({
                                value: e.option
                            })))
                        }), o.length) return e.push({
                        label: (0, i.jsx)(i.Fragment, {
                            children: "All other properties"
                        }),
                        options: o.map((e => ({
                            value: e.option
                        })))
                    }), e
                }
            }
            return g.map((e => ({
                value: e.option
            })))
        })();
        return (0, i.jsx)(r.default, {
            value: n,
            options: O,
            onChange: e => {
                y(e)
            },
            onBlur: x,
            style: {
                width: "100%"
            },
            placeholder: o.placeholder || "Enter a value...",
            filterOption: (e, t) => {
                var o;
                return -1 !== (null === (o = t.name) || void 0 === o ? void 0 : o.toUpperCase().indexOf(e.toUpperCase()))
            },
            maxLength: o.maxLength,
            disabled: e.readOnly
        })
    }
})), o.register("g2f01", (function(n, i) {
    e(n.exports, "default", (function() {
        return p
    }));
    var r = o("4IsEw"),
        l = o("79rk7"),
        a = o("gBeUT"),
        s = o("gSnSx"),
        d = o("iRjsB"),
        u = o("71TET");
    var p = (e, o) => {
        if (!e) return [];
        const n = [];
        d.default.worldOptions.deviceOptions.forEach((t => {
            t.optionSchema.options.forEach((o => {
                if (o.option.type === u.default.textInput) {
                    var i;
                    const r = o.option;
                    (null == r || null === (i = r.props) || void 0 === i ? void 0 : i.category) === e && n.push({
                        deviceId: t.id,
                        optionKey: String(o.key)
                    })
                }
            }))
        }));
        const i = [],
            p = t => {
                if ((t = t.trim()).length)
                    if (e === s.default.channel && t.includes(",")) {
                        t.split(",").forEach(p)
                    } else i.includes(t) || i.push(t)
            };
        return d.default.world.devices.devices.forEach((e => {
            n.map((e => e.deviceId)).includes(e.deviceOption.id) && Object.keys(e.options || {}).forEach((t => {
                n.map((e => e.optionKey)).includes(t) && e.options[t] && p(e.options[t])
            }))
        })), e === s.default.channel && (o && o.blockSlowOperations || d.default.world.devices.devices.forEach((e => {
            var o, n;
            null === (o = d.default.world.devices.codeGrids.get(e.id)) || void 0 === o || null === (n = o.items) || void 0 === n || n.forEach((e => {
                if (e.triggerType === a.default.broadcastMessage && e.triggerValue && p(e.triggerValue), e.json) {
                    const o = new(t(r).Workspace);
                    t(r).serialization.workspaces.load(JSON.parse(e.json), o);
                    o.getAllBlocks(!0).forEach((e => {
                        if ((e.type === l.default.messageBroadcaster || e.type === l.default.playerProximityMessageBroadcaster) && e.getChildren(!0).length) {
                            const t = e.getChildren(!0)[0];
                            if ("text" === t.type) {
                                const e = t.getFieldValue("TEXT");
                                e && p(e)
                            }
                        }
                    })), o.dispose()
                }
            }))
        }))), e === s.default.property && (o && o.blockSlowOperations || d.default.world.devices.devices.forEach((e => {
            var o, n;
            null === (o = d.default.world.devices.codeGrids.get(e.id)) || void 0 === o || null === (n = o.items) || void 0 === n || n.forEach((e => {
                if (e.json) {
                    const o = new(t(r).Workspace);
                    t(r).serialization.workspaces.load(JSON.parse(e.json), o);
                    o.getAllBlocks(!0).forEach((e => {
                        if ((e.type === l.default.setProperty || e.type === l.default.getProperty || e.type === l.default.playerProximityGetProperty || e.type === l.default.playerProximitySetProperty) && e.getChildren(!0).length) {
                            const t = e.getChildren(!0)[0];
                            if ("text" === t.type) {
                                const e = t.getFieldValue("TEXT");
                                e && p(e)
                            }
                        }
                    })), o.dispose()
                }
            }))
        }))), i
    }
})), o.register("79rk7", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        messageBroadcaster: "message_broadcaster",
        setProperty: "set_property",
        getProperty: "get_property",
        playerProximityMessageBroadcaster: "other_character_message_broadcaster",
        playerProximitySetProperty: "other_character_set_property",
        playerProximityGetProperty: "other_character_get_property"
    }
})), o.register("gBeUT", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        broadcastMessage: "channel_radio"
    }
})), o.register("gSnSx", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        channel: "channel",
        property: "property"
    }
})), o.register("71TET", (function(t, o) {
    let n;
    var i;
    e(t.exports, "default", (function() {
        return r
    })), (i = n || (n = {})).textInput = "textInput", i.numberInput = "numberInput", i.select = "select", i.color = "color", i.itemId = "itemId", i.terrainId = "terrainId", i.skinId = "skinId", i.itemsList = "itemsList";
    var r = n
})), o.register("8JboP", (function(t, n) {
    e(t.exports, "GetPropertiesWithoutMatchingPropertyDevice", (function() {
        return s
    }));
    var i = o("iRjsB"),
        r = o("z5iun"),
        l = o("g2f01"),
        a = o("gSnSx");
    const s = () => {
        const e = [];
        i.default.world.devices.devices.forEach((t => {
            if (t.deviceOption.id === r.default.property) {
                const o = t.options;
                e.push(o.propertyName)
            }
        }));
        return (0, l.default)(a.default.property).filter((t => !e.includes(t)))
    }
})), o.register("4YdCQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = o("hxEiv"),
        r = o("9u945"),
        l = o("2FDaO");
    let a, s, d = e => e;
    var u = e => {
        const t = (0, r.useDebounceCallback)((t => {
            e.onChange(t)
        }), 350);
        return (0, i.jsx)(p, {
            readOnly: e.readOnly,
            children: (0, i.jsx)(c, {
                readOnly: e.readOnly,
                children: (0, i.jsx)("input", {
                    type: "color",
                    className: "maxWidth",
                    disabled: e.readOnly,
                    value: e.value,
                    onChange: e => t(e.target.value)
                })
            })
        })
    };
    const p = l.default.div(a || (a = d`
  width: 100%;
  ${0}
`), (e => e.readOnly && "cursor: not-allowed;")),
        c = l.default.div(s || (s = d`
  width: 100%;
  ${0}
`), (e => e.readOnly && "pointer-events: none; opacity: 0.6"))
})), o.register("6sYys", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var i = o("hxEiv");
    o("fywoC");
    var r = o("eflkj"),
        l = o("iRjsB"),
        a = o("f45q0"),
        s = o("24AMo");
    const d = e => e.filter((e => {
            const t = (0, a.FetchItemOption)(e);
            return !!t && !!(0, s.IsRoleLevelBetween)(t.minimumRoleLevel, t.maximumRoleLevel)
        })),
        u = e => {
            const t = [];
            return l.default.worldOptions.itemOptions.forEach((o => {
                var n;
                (null === (n = e.blockedItems) || void 0 === n ? void 0 : n.includes(o.id)) || (e.allowedItems ? e.allowedItems.includes(o.id) && t.push(o.id) : e.allowedItemsCategories ? e.allowedItemsCategories.includes(o.type) && t.push(o.id) : t.push(o.id))
            })), t
        };
    var p = e => {
        const t = u(e.optionProps),
            o = d(t).map((e => ({
                value: e,
                name: (0, a.FetchItemOption)(e).editorName
            }))),
            n = {
                placeholder: "Select an item",
                allowEmpty: !0,
                options: o
            };
        let l = e.value;
        return l && !o.find((t => t.value === e.value)) && (l = void 0), (0, i.jsx)(r.default, {
            ...e,
            value: l,
            optionProps: n
        })
    }
})), o.register("ci9SD", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = o("hxEiv");
    o("fywoC");
    var r = o("eflkj"),
        l = o("iRjsB"),
        a = o("6RgS6");
    var s = e => {
        const t = l.default.worldOptions.terrainOptions.filter((e => (0, a.CanAddTerrain)(e.id))).map((e => ({
                value: e.id,
                name: e.name
            }))),
            o = {
                placeholder: "Select a terrain",
                allowEmpty: e.optionProps.allowEmpty,
                options: t
            };
        let n = e.value;
        return n && !t.find((t => t.value === e.value)) && (n = void 0), (0, i.jsx)(r.default, {
            ...e,
            value: n,
            optionProps: o
        })
    }
})), o.register("5yjbF", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var i = o("hxEiv");
    o("fywoC");
    var r = o("eflkj"),
        l = o("iRjsB"),
        a = o("24AMo"),
        s = o("alREA");
    var d = e => {
        var t;
        const o = l.default.worldOptions.skinOptions.filter((e => (0, a.IsRoleLevelBetween)(e.minimumRoleLevel, e.maximumRoleLevel))).map((e => ({
            value: e.id,
            name: e.name,
            image: (0, s.default)("characters/spine/preview/" + e.id.replace("character_", "") + ".png")
        })));
        var n;
        const d = {
            placeholder: "Select a Gim",
            allowEmpty: null !== (n = null == e || null === (t = e.optionProps) || void 0 === t ? void 0 : t.allowEmpty) && void 0 !== n && n,
            options: o
        };
        let u = e.value;
        return u && !o.find((t => t.value === e.value)) && (u = void 0), (0, i.jsx)(r.default, {
            ...e,
            value: u,
            optionProps: d
        })
    }
})), o.register("1znBS", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var i = o("hxEiv"),
        r = o("aQuqp"),
        l = o("2FDaO"),
        a = o("6sYys"),
        s = o("eRZGH"),
        d = o("py2Xr");
    let u, p, c, v, f, h, m, y, g, x, O = e => e;
    var j = e => {
        var t, o;
        return (0, i.jsx)(C, {
            readOnly: e.readOnly,
            children: (0, i.jsxs)(w, {
                readOnly: e.readOnly,
                children: [null === (t = e.value) || void 0 === t ? void 0 : t.map(((t, o) => {
                    var n, l;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(P, {
                            children: [(0, i.jsxs)(S, {
                                children: ["Item ", o + 1]
                            }), (0, i.jsx)(r.default, {
                                onClick: () => {
                                    var t;
                                    const n = null !== (t = e.value) && void 0 !== t ? t : [];
                                    n.splice(o, 1), e.onChange(n)
                                },
                                type: "danger",
                                ariaLabel: "Remove Item",
                                size: "small",
                                children: (0, i.jsx)(d.default, {
                                    name: "fas fa-trash"
                                })
                            })]
                        }), (0, i.jsxs)(b, {
                            children: [(0, i.jsxs)(E, {
                                children: [(0, i.jsx)(I, {
                                    children: "Item"
                                }), (0, i.jsx)(k, {
                                    children: (0, i.jsx)(a.default, {
                                        value: t.itemId,
                                        onChange: t => {
                                            var n;
                                            const i = null !== (n = e.value) && void 0 !== n ? n : [];
                                            i[o].itemId = t, e.onChange(i)
                                        },
                                        readOnly: e.readOnly,
                                        optionProps: e.optionProps
                                    })
                                })]
                            }), (null === (n = e.optionProps.amount) || void 0 === n ? void 0 : n.use) && (0, i.jsxs)(E, {
                                children: [(0, i.jsxs)(I, {
                                    children: [e.optionProps.amount.label || "Amount", ":"]
                                }), (0, i.jsx)(L, {
                                    children: (0, i.jsx)(s.default, {
                                        value: t.amount,
                                        onChange: t => {
                                            var n;
                                            const i = null !== (n = e.value) && void 0 !== n ? n : [];
                                            i[o].amount = t, e.onChange(i)
                                        },
                                        readOnly: e.readOnly,
                                        optionProps: {
                                            min: e.optionProps.amount.min,
                                            max: e.optionProps.amount.max,
                                            step: e.optionProps.amount.step
                                        }
                                    })
                                })]
                            }), (null === (l = e.optionProps.numParam) || void 0 === l ? void 0 : l.use) && (0, i.jsxs)(E, {
                                children: [(0, i.jsxs)(I, {
                                    children: [e.optionProps.numParam.label || "Num Param", ":"]
                                }), (0, i.jsx)(L, {
                                    children: (0, i.jsx)(s.default, {
                                        value: t.numParam,
                                        onChange: t => {
                                            var n;
                                            const i = null !== (n = e.value) && void 0 !== n ? n : [];
                                            i[o].numParam = t, e.onChange(i)
                                        },
                                        readOnly: e.readOnly,
                                        optionProps: {
                                            min: e.optionProps.numParam.min,
                                            max: e.optionProps.numParam.max,
                                            step: e.optionProps.numParam.step
                                        }
                                    })
                                })]
                            })]
                        })]
                    }, o)
                })), (0, i.jsx)(M, {
                    children: (0, i.jsx)(r.default, {
                        disabled: e.readOnly || e.optionProps.maxItems <= (null === (o = e.value) || void 0 === o ? void 0 : o.length),
                        onClick: () => {
                            var t, o, n;
                            const i = null !== (n = e.value) && void 0 !== n ? n : [];
                            var r, l;
                            i.push({
                                itemId: void 0,
                                amount: null !== (r = null === (t = e.optionProps.amount) || void 0 === t ? void 0 : t.defaultValue) && void 0 !== r ? r : 0,
                                numParam: null !== (l = null === (o = e.optionProps.numParam) || void 0 === o ? void 0 : o.defaultValue) && void 0 !== l ? l : 0
                            }), e.onChange(i)
                        },
                        type: "default",
                        ariaLabel: "Add Item",
                        size: "small",
                        children: "Add Item"
                    })
                })]
            })
        })
    };
    const C = l.default.div(u || (u = O`
  width: 100%;
  ${0}
`), (e => e.readOnly && "cursor: not-allowed;")),
        w = l.default.div(p || (p = O`
  width: 100%;
  ${0}
`), (e => e.readOnly && "pointer-events: none; opacity: 0.6")),
        P = l.default.div(c || (c = O`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`)),
        S = l.default.div(v || (v = O`
  font-weight: bold;
  font-size: 1.1em;
`)),
        b = l.default.div(f || (f = O`
  margin-left: 16px;
  margin-bottom: 24px;
`)),
        E = l.default.div(h || (h = O`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`)),
        I = l.default.div(m || (m = O`
  width: 120px;
  font-weight: 500;
`)),
        k = l.default.div(y || (y = O`
  flex: 1;
  overflow: hidden;
`)),
        L = l.default.div(g || (g = O`
  flex: 1;
  overflow: hidden;
`)),
        M = l.default.div(x || (x = O`
  margin-top: 8px;
`))
})), o.register("e7fWL", (function(n, i) {
    e(n.exports, "default", (function() {
        return s
    }));
    var r = o("hxEiv"),
        l = o("fywoC");
    const a = t(l).lazy((() => o("1gp7o")));
    var s = e => {
        const [o, n] = t(l).useState(!1);
        return t(l).useEffect((() => {
            e.visible && n(!0)
        }), [e.visible]), o ? (0, r.jsx)(t(l).Suspense, {
            fallback: null,
            children: (0, r.jsx)(a, {
                ...e
            })
        }) : null
    }
})), o.register("1gp7o", (function(e, t) {
    e.exports = import("./" + o("ihc6Q").resolve("h0LK7")).then((() => o("81kfB")))
})), o.register("ihc6Q", (function(t, o) {
    var n, i;
    e(t.exports, "register", (function() {
        return n
    }), (function(e) {
        return n = e
    })), e(t.exports, "resolve", (function() {
        return i
    }), (function(e) {
        return i = e
    }));
    var r = {};
    n = function(e) {
        for (var t = Object.keys(e), o = 0; o < t.length; o++) r[t[o]] = e[t[o]]
    }, i = function(e) {
        var t = r[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t
    }
}));