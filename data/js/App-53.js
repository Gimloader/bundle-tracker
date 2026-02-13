const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-75.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/mobxreact.esm.js", "assets/TutorialConsts.js", "assets/Hook.js", "assets/App-41.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/howler.js", "assets/index-21.js", "assets/QuizTypes.js", "assets/ActionButton.js", "assets/index-5.js", "assets/index-18.js", "assets/context.js", "assets/FontAwesomeIcon.js", "assets/Centered.js", "assets/CapitalizeFirstLetter.js", "assets/index-4.js", "assets/motion.js", "assets/index-2.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/index-3.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/SixteenByNineScaler.js", "assets/index-20.js", "assets/index-22.js", "assets/index-1.js", "assets/progress.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/util-1.js", "assets/util-2.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-motion-value.js", "assets/use-transform.js", "assets/index-6.js", "assets/AccessibleAnchor.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/index-17.js", "assets/use-force-update.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/Tooltip.js", "assets/index-9.js", "assets/index-23.js", "assets/useIntervalWhen.js", "assets/index-10.js", "assets/move.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/FillRemainingSpace.js", "assets/index-24.js", "assets/Header.js", "assets/index-8.js", "assets/DownOutlined.js", "assets/ReplaceDevice.js", "assets/GetCurrentMapStyle.js", "assets/index-28.js", "assets/index-7.js", "assets/LoadGoogleFontAfterSceneStart.js", "assets/useItemAmount.js", "assets/index-29.js"]))) => i.map(i => d[i]);
import {
    r as y,
    dO as te,
    j as s,
    d as v,
    B as U,
    x as A,
    p as ne,
    u as oe,
    F as re,
    E as se,
    a$ as ae
} from "./_index.js";
import {
    u as D,
    k as ie,
    F as J,
    _ as M,
    z as k,
    $ as E,
    M as b,
    a0 as K,
    B as le,
    t as ce,
    y as de
} from "./App-41.js";
import {
    R as ue
} from "./ReplaceDevice.js";
import {
    D as Q
} from "./TutorialConsts.js";
import {
    G as F,
    C as me
} from "./GetCurrentMapStyle.js";
import {
    S as he
} from "./index-28.js";
import {
    T as pe
} from "./index-7.js";
import {
    L as fe
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    S as $
} from "./index-8.js";
import {
    S as R
} from "./index-2.js";
import {
    s as g
} from "./FixSpinePlugin.js";
import {
    L as ye,
    u as ve,
    a as ge,
    C as xe,
    b as Oe,
    c as Ce
} from "./useItemAmount.js";
import {
    M as T
} from "./Button.js";
import {
    I as Ie
} from "./index-3.js";
import {
    A as je
} from "./index-29.js";
import {
    a as Pe
} from "./index-23.js";
import {
    G as X
} from "./GetAssetPath.js";
import {
    F as q
} from "./FontAwesomeIcon.js";
import {
    o as H
} from "./mobxreact.esm.js";
import {
    T as B
} from "./index-14.js";
import {
    a as Se
} from "./Centered.js";
import {
    E as we,
    T as Ee
} from "./ActionButton.js";
const Lt = {
        grid: {
            singular: "block",
            plural: "blocks"
        },
        blocklyBlock: {
            plural: "pieces"
        }
    },
    Nt = () => {
        const {
            me: e,
            world: {
                devices: n
            }
        } = D(), [t, a] = y.useState("{}"), [i, r] = y.useState("{}"), [c, o] = y.useState("{}");
        y.useEffect(() => {
            const u = te(() => n.devices.get(e.editing.device.currentlyEditedDevice.id), m => {
                m && (a(JSON.stringify(m.options)), r(JSON.stringify({
                    x: m.x,
                    y: m.y
                })), m.hooks ? o(JSON.stringify(m.hooks)) : o("{}"))
            }, {
                fireImmediately: !0
            });
            return () => {
                u()
            }
        }, []);
        const l = JSON.parse(t),
            d = JSON.parse(i),
            p = JSON.parse(c);
        return {
            options: l,
            position: d,
            hooks: p
        }
    },
    Ae = ["shadowsEnabled", "shadowsPlacement"],
    be = ["canBeDamaged", "health", "useAdaptiveHealth", "adaptiveHealthPerPlayer", "onDestroyedChannel", "UseColliders"],
    Y = e => {
        var t;
        let n = !1;
        return (t = e.hideIf) != null && t.length && e.hideIf.forEach(a => {
            a.every(i => {
                const r = e.options[i.key] ?? void 0;
                if (i.compare === "EQUAL") {
                    if (i.value === r) return !0
                } else if (i.compare === "NOT_EQUAL") {
                    if (i.value !== r) return !0
                } else if (i.compare === "LESS_THAN") {
                    if (Number(r) < Number(i.value)) return !0
                } else if (i.compare === "GREATER_THAN" && Number(r) > Number(i.value)) return !0;
                return !1
            }) && (n = !0)
        }), n
    },
    ke = e => {
        var t, a, i, r;
        let n = e.optionSchema.options.filter(c => !c.option.hidden).filter(c => {
            var l;
            let o = !1;
            return (l = c.option.hideIf) != null && l.length && (o = Y({
                hideIf: c.option.hideIf,
                options: e.options
            })), !o
        });
        if (e.device.deviceOption.id === Q.prop) {
            const c = e.device.options,
                o = ie(c.propId);
            if (!o) return n;
            const l = (((t = o.rectColliders) == null ? void 0 : t.length) ?? 0) + (((a = o.circleColliders) == null ? void 0 : a.length) ?? 0) + (((i = o.ellipseColliders) == null ? void 0 : i.length) ?? 0) > 0,
                d = (((r = o.shadows) == null ? void 0 : r.length) ?? 0) > 0;
            n = n.filter(p => !(!d && Ae.includes(p.key) || !l && be.includes(p.key)))
        }
        return n
    },
    Le = e => ke({
        device: e.device,
        options: e.options,
        optionSchema: e.optionSchema
    }),
    Ne = e => {
        const {
            deviceTypeId: n,
            optionName: t
        } = e, a = J(n);
        if (!a) return !1;
        const i = a.optionSchema.options.find(r => r.key === t);
        return i ? i.supportedMapStyles ? i.supportedMapStyles.includes(F()) : !0 : !1
    },
    Me = (e, n) => {
        const t = J(e);
        if (!t) return !1;
        const a = t.optionSchema.options.find(c => c.key === n);
        if (!Ne({
                deviceTypeId: e,
                optionName: n
            })) return !1;
        const i = (a == null ? void 0 : a.minimumRoleLevel) ?? M.min,
            r = (a == null ? void 0 : a.maximumRoleLevel) ?? M.max;
        return k(i, r)
    },
    Te = (e, n) => Math.round(e / n) * n,
    _ = e => {
        const {
            value: n,
            optionProps: t
        } = e, [a, i] = y.useState(n);
        y.useEffect(() => {
            i(n)
        }, [n]);
        const r = l => {
                if (l === null && e.optionProps.allowEmpty) {
                    i(void 0);
                    return
                }
                let d = l;
                t.step && l && (d = Te(l, t.step)), i(d)
            },
            c = () => {
                e.onChange(a)
            },
            o = l => {
                i(l), e.onChange(l)
            };
        return t.useSlider ? s.jsx(he, {
            value: a,
            onChange: r,
            onAfterChange: o,
            min: t.min,
            max: t.max,
            step: t.step,
            disabled: e.readOnly
        }) : s.jsx(pe, {
            value: a,
            onChange: r,
            onBlur: c,
            min: t.min,
            max: t.max,
            step: t.step,
            style: {
                width: "100%"
            },
            disabled: e.readOnly,
            placeholder: "Enter a value..."
        })
    },
    w = e => {
        var c;
        const {
            optionProps: n
        } = e, t = y.useMemo(() => {
            if (e.value !== "") return e.value
        }, [e.value]), a = y.useMemo(() => n.options.some(o => o.value === "Fugaz One"), [n == null ? void 0 : n.options]);
        y.useEffect(() => {
            a && n.options.forEach(o => {
                fe({
                    familyName: o.name
                })
            })
        }, [a]);
        const i = (c = n == null ? void 0 : n.options) == null ? void 0 : c.filter(o => o != null && o.supportedMapStyles && !(o != null && o.supportedMapStyles.includes(F())) ? !1 : (o == null ? void 0 : o.minimumRoleLevel) !== void 0 || (o == null ? void 0 : o.maximumRoleLevel) !== void 0 ? k(o == null ? void 0 : o.minimumRoleLevel, o == null ? void 0 : o.maximumRoleLevel) : !0);
        if (!n || !i.length) return null;
        const r = o => {
            e.onChange(o)
        };
        return s.jsx($, {
            value: t ?? void 0,
            allowClear: n.allowEmpty,
            placeholder: n.placeholder || "None Selected",
            onSelect: r,
            onClear: () => r(void 0),
            filterOption: (o, l) => l && l.name && l.name.toString().toUpperCase && o && o.toUpperCase ? l.name.toString().toUpperCase().indexOf(o.toUpperCase()) !== -1 : !1,
            showSearch: !0,
            disabled: e.readOnly,
            style: {
                width: "100%"
            },
            children: i.map(o => s.jsx($.Option, {
                value: o.value,
                name: o.name,
                style: a ? {
                    fontFamily: o.value
                } : void 0,
                children: o.image ? s.jsxs(R, {
                    direction: "horizontal",
                    size: 6,
                    children: [s.jsx("img", {
                        src: o.image,
                        style: {
                            maxHeight: 30,
                            maxWidth: 30
                        }
                    }), s.jsx("div", {
                        children: o.name
                    })]
                }) : o.name
            }, `option-${o.value}`))
        })
    },
    j = {
        messageBroadcaster: "message_broadcaster",
        setProperty: "set_property",
        getProperty: "get_property",
        playerProximityMessageBroadcaster: "other_character_message_broadcaster",
        playerProximitySetProperty: "other_character_set_property",
        playerProximityGetProperty: "other_character_get_property"
    },
    Be = {
        broadcastMessage: "channel_radio"
    },
    P = {
        channel: "channel",
        property: "property"
    };
var x = (e => (e.textInput = "textInput", e.numberInput = "numberInput", e.select = "select", e.color = "color", e.itemId = "itemId", e.terrainId = "terrainId", e.skinId = "skinId", e.itemsList = "itemsList", e.customAssetId = "customAssetId", e))(x || {});
const Z = (e, n) => {
        if (!e) return [];
        const t = [];
        g.worldOptions.deviceOptions.forEach(r => {
            r.optionSchema.options.forEach(c => {
                var o;
                if (c.option.type === x.textInput) {
                    const l = c.option;
                    ((o = l == null ? void 0 : l.props) == null ? void 0 : o.category) === e && t.push({
                        deviceId: r.id,
                        optionKey: String(c.key)
                    })
                }
            })
        });
        const a = [],
            i = r => {
                if (r = r.trim(), !!r.length) {
                    if (e === P.channel && r.includes(",")) {
                        r.split(",").forEach(i);
                        return
                    }
                    a.includes(r) || a.push(r)
                }
            };
        return g.world.devices.devices.forEach(r => {
            t.map(c => c.deviceId).includes(r.deviceOption.id) && Object.keys(r.options || {}).forEach(c => {
                t.map(o => o.optionKey).includes(c) && r.options[c] && i(r.options[c])
            })
        }), e === P.channel && g.world.devices.devices.forEach(r => {
            var c, o;
            (o = (c = g.world.devices.codeGrids.get(r.id)) == null ? void 0 : c.items) == null || o.forEach(l => {
                if (l.triggerType === Be.broadcastMessage && l.triggerValue && i(l.triggerValue), l.json) {
                    const d = new E.Workspace;
                    E.serialization.workspaces.load(JSON.parse(l.json), d), d.getAllBlocks(!0).forEach(u => {
                        if ((u.type === j.messageBroadcaster || u.type === j.playerProximityMessageBroadcaster) && u.getChildren(!0).length) {
                            const m = u.getChildren(!0)[0];
                            if (m.type === "text") {
                                const f = m.getFieldValue("TEXT");
                                f && i(f)
                            }
                        }
                    }), d.dispose()
                }
            })
        }), e === P.property && g.world.devices.devices.forEach(r => {
            var c, o;
            (o = (c = g.world.devices.codeGrids.get(r.id)) == null ? void 0 : c.items) == null || o.forEach(l => {
                if (l.json) {
                    const d = new E.Workspace;
                    E.serialization.workspaces.load(JSON.parse(l.json), d), d.getAllBlocks(!0).forEach(u => {
                        if ((u.type === j.setProperty || u.type === j.getProperty || u.type === j.playerProximityGetProperty || u.type === j.playerProximitySetProperty) && u.getChildren(!0).length) {
                            const m = u.getChildren(!0)[0];
                            if (m.type === "text") {
                                const f = m.getFieldValue("TEXT");
                                f && i(f)
                            }
                        }
                    }), d.dispose()
                }
            })
        }), a
    },
    _e = () => {
        const e = [];
        return g.world.devices.devices.forEach(t => {
            if (t.deviceOption.id === Q.property) {
                const a = t.options;
                e.push(a.propertyName)
            }
        }), Z(P.property).filter(t => !e.includes(t))
    },
    De = e => {
        const {
            value: n,
            optionProps: t
        } = e, [a, i] = y.useState(e.value);
        y.useEffect(() => {
            i(n)
        }, [n]);
        const r = y.useMemo(() => {
                if (t != null && t.category) {
                    const u = Z(t.category).map(m => ({
                        option: m
                    }));
                    if (t.category === P.property) {
                        const m = _e(),
                            f = u.filter(C => !m.includes(C.option));
                        return [...m.map(C => ({
                            option: C,
                            noMatchingDevice: !0
                        })), ...f]
                    } else return u
                }
                return []
            }, []),
            c = u => {
                i(u)
            },
            o = u => i(u.target.value),
            l = () => {
                e.onChange(a == null ? void 0 : a.trim())
            },
            d = u => {
                i(u)
            };
        if (t.codeEditor) return s.jsx("div", {
            onBlur: l,
            children: s.jsxs(ye, {
                noInline: !0,
                code: a,
                scope: {
                    MapButton: T,
                    CallAction: xe,
                    usePropertyValue: ge,
                    useItemAmount: ve
                },
                children: [s.jsx(Oe, {
                    onChange: d
                }), s.jsx(Ce, {})]
            })
        });
        if (t.textArea) return s.jsx(Ie.TextArea, {
            value: a,
            onChange: o,
            onBlur: l,
            placeholder: t.placeholder,
            style: {
                width: "100%"
            }
        });
        const p = (() => {
            if ((t == null ? void 0 : t.category) === P.property && r.length) {
                let u = [];
                if (r.some(f => f.noMatchingDevice)) {
                    const f = r.filter(O => O.noMatchingDevice),
                        C = r.filter(O => !O.noMatchingDevice);
                    if (u.push({
                            label: s.jsxs(s.Fragment, {
                                children: ["Properties without a corresponding Property", " ", b.device.singular]
                            }),
                            options: f.map(O => ({
                                value: O.option
                            }))
                        }), C.length) return u.push({
                        label: s.jsx(s.Fragment, {
                            children: "All other properties"
                        }),
                        options: C.map(O => ({
                            value: O.option
                        }))
                    }), u
                }
            }
            return r.map(u => ({
                value: u.option
            }))
        })();
        return s.jsx(je, {
            value: a,
            options: p,
            onChange: c,
            onBlur: l,
            style: {
                width: "100%"
            },
            placeholder: t.placeholder || "Enter a value...",
            filterOption: (u, m) => {
                var f;
                return ((f = m.value) == null ? void 0 : f.toUpperCase().indexOf(u.toUpperCase())) !== -1
            },
            maxLength: t.maxLength,
            disabled: e.readOnly
        })
    },
    Fe = e => {
        const n = Pe(t => {
            e.onChange(t)
        }, 350);
        return s.jsx(Re, {
            readOnly: e.readOnly,
            children: s.jsx(He, {
                readOnly: e.readOnly,
                children: s.jsx("input", {
                    type: "color",
                    className: "maxWidth",
                    disabled: e.readOnly,
                    value: e.value,
                    onChange: t => n(t.target.value)
                })
            })
        })
    },
    Re = v.div`
  width: 100%;
  ${e=>e.readOnly&&"cursor: not-allowed;"}
`,
    He = v.div`
  width: 100%;
  ${e=>e.readOnly&&"pointer-events: none; opacity: 0.6"}
`,
    ee = e => {
        const n = We(e.optionProps),
            t = Ve(n).map(r => {
                const c = K(r);
                return {
                    value: r,
                    name: c.editorName
                }
            }),
            a = {
                placeholder: "Select an item",
                allowEmpty: !0,
                options: t
            };
        let i = e.value;
        return i && !t.find(r => r.value === e.value) && (i = void 0), s.jsx(w, {
            ...e,
            value: i,
            optionProps: a
        })
    },
    Ve = e => e.filter(n => {
        const t = K(n);
        return !(!t || !k(t.minimumRoleLevel, t.maximumRoleLevel))
    }),
    We = e => {
        const n = [];
        return g.worldOptions.itemOptions.forEach(t => {
            var a;
            if (!((a = e.blockedItems) != null && a.includes(t.id))) {
                if (e.allowedItems) {
                    e.allowedItems.includes(t.id) && n.push(t.id);
                    return
                }
                if (e.allowedItemsCategories) {
                    e.allowedItemsCategories.includes(t.type) && n.push(t.id);
                    return
                }
                n.push(t.id)
            }
        }), n
    },
    $e = e => {
        const n = g.worldOptions.terrainOptions.filter(i => me(i.id)).map(i => ({
                value: i.id,
                name: i.name
            })),
            t = {
                placeholder: "Select a terrain",
                allowEmpty: e.optionProps.allowEmpty,
                options: n
            };
        let a = e.value;
        return a && !n.find(i => i.value === e.value) && (a = void 0), s.jsx(w, {
            ...e,
            value: a,
            optionProps: t
        })
    },
    ze = e => {
        var i;
        const n = g.worldOptions.skinOptions.filter(r => k(r.minimumRoleLevel, r.maximumRoleLevel)).map(r => ({
                value: r.id,
                name: r.name,
                image: X("characters/spine/preview/" + r.id.replace("character_", "") + ".png")
            })),
            t = {
                placeholder: "Select a Gim",
                allowEmpty: ((i = e == null ? void 0 : e.optionProps) == null ? void 0 : i.allowEmpty) ?? !1,
                options: n
            };
        let a = e.value;
        return a && !n.find(r => r.value === e.value) && (a = void 0), s.jsx(w, {
            ...e,
            value: a,
            optionProps: t
        })
    },
    Ge = e => {
        var t, a;
        const n = () => {
            var r, c;
            const i = e.value ?? [];
            i.push({
                itemId: void 0,
                amount: ((r = e.optionProps.amount) == null ? void 0 : r.defaultValue) ?? 0,
                numParam: ((c = e.optionProps.numParam) == null ? void 0 : c.defaultValue) ?? 0
            }), e.onChange(i)
        };
        return s.jsx(Ue, {
            readOnly: e.readOnly,
            children: s.jsxs(Je, {
                readOnly: e.readOnly,
                children: [(t = e.value) == null ? void 0 : t.map((i, r) => {
                    var c, o;
                    return s.jsxs("div", {
                        children: [s.jsxs(Ke, {
                            children: [s.jsxs(Qe, {
                                children: ["Item ", r + 1]
                            }), s.jsx(T, {
                                onClick: () => {
                                    const l = e.value ?? [];
                                    l.splice(r, 1), e.onChange(l)
                                },
                                type: "danger",
                                ariaLabel: "Remove Item",
                                size: "small",
                                children: s.jsx(q, {
                                    name: "fas fa-trash"
                                })
                            })]
                        }), s.jsxs(Xe, {
                            children: [s.jsxs(L, {
                                children: [s.jsx(N, {
                                    children: "Item"
                                }), s.jsx(qe, {
                                    children: s.jsx(ee, {
                                        value: i.itemId,
                                        onChange: l => {
                                            const d = e.value ?? [];
                                            d[r].itemId = l, e.onChange(d)
                                        },
                                        readOnly: e.readOnly,
                                        optionProps: e.optionProps
                                    })
                                })]
                            }), ((c = e.optionProps.amount) == null ? void 0 : c.use) && s.jsxs(L, {
                                children: [s.jsxs(N, {
                                    children: [e.optionProps.amount.label || "Amount", ":"]
                                }), s.jsx(z, {
                                    children: s.jsx(_, {
                                        value: i.amount,
                                        onChange: l => {
                                            const d = e.value ?? [];
                                            d[r].amount = l, e.onChange(d)
                                        },
                                        readOnly: e.readOnly,
                                        optionProps: {
                                            min: e.optionProps.amount.min,
                                            max: e.optionProps.amount.max,
                                            step: e.optionProps.amount.step
                                        }
                                    })
                                })]
                            }), ((o = e.optionProps.numParam) == null ? void 0 : o.use) && s.jsxs(L, {
                                children: [s.jsxs(N, {
                                    children: [e.optionProps.numParam.label || "Num Param", ":"]
                                }), s.jsx(z, {
                                    children: s.jsx(_, {
                                        value: i.numParam,
                                        onChange: l => {
                                            const d = e.value ?? [];
                                            d[r].numParam = l, e.onChange(d)
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
                    }, r)
                }), s.jsx(Ye, {
                    children: s.jsx(T, {
                        disabled: e.readOnly || e.optionProps.maxItems <= ((a = e.value) == null ? void 0 : a.length),
                        onClick: n,
                        type: "default",
                        ariaLabel: "Add Item",
                        size: "small",
                        children: "Add Item"
                    })
                })]
            })
        })
    },
    Ue = v.div`
  width: 100%;
  ${e=>e.readOnly&&"cursor: not-allowed;"}
`,
    Je = v.div`
  width: 100%;
  ${e=>e.readOnly&&"pointer-events: none; opacity: 0.6"}
`,
    Ke = v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,
    Qe = v.div`
  font-weight: bold;
  font-size: 1.1em;
`,
    Xe = v.div`
  margin-left: 16px;
  margin-bottom: 24px;
`,
    L = v.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`,
    N = v.div`
  width: 120px;
  font-weight: 500;
`,
    qe = v.div`
  flex: 1;
  overflow: hidden;
`,
    z = v.div`
  flex: 1;
  overflow: hidden;
`,
    Ye = v.div`
  margin-top: 8px;
`,
    Ze = ["a", "e", "i", "o", "u"],
    et = e => {
        const n = e.charAt(0).toLowerCase();
        return `${Ze.includes(n)?"an":"a"} ${e}`
    },
    tt = H(e => {
        const {
            world: {
                customAssets: {
                    customAssets: n
                }
            }
        } = D(), t = () => {
            e.optionProps.customAssetOptionId && (g.me.customAssets.isUIOpen = !0, g.me.customAssets.openOptionId = e.optionProps.customAssetOptionId)
        }, a = Array.from(n.values()).filter(o => o.optionId === e.optionProps.customAssetOptionId).map(o => ({
            value: o.id,
            name: o.name ?? `Untitled ${i.singular}`,
            image: o.icon.startsWith("data:") ? o.icon : X(o.icon)
        })), i = b.customAsset[e.optionProps.customAssetOptionId] ?? b.customAsset.base, r = () => {
            if (a.length === 0) return null;
            const o = {
                placeholder: `Select ${et(i.singular)}...`,
                allowEmpty: !0,
                options: a
            };
            let l = e.value;
            return a.find(d => d.value === e.value) || (l = null), s.jsx(w, {
                ...e,
                value: l,
                optionProps: o
            })
        }, c = `Manage ${i.plural}`;
        return s.jsxs(s.Fragment, {
            children: [r(), s.jsx(U, {
                size: "small",
                onClick: t,
                type: "primary",
                style: {
                    marginTop: 10
                },
                children: c
            })]
        })
    }),
    nt = e => {
        const {
            option: n,
            value: t,
            onChange: a
        } = e;
        return n.type === x.numberInput ? s.jsx(_, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.itemsList ? s.jsx(Ge, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.textInput ? s.jsx(De, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.select ? s.jsx(w, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.itemId ? s.jsx(ee, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.skinId ? s.jsx(ze, {
            value: t,
            onChange: a,
            readOnly: e.readOnly,
            optionProps: n.props
        }) : n.type === x.customAssetId ? s.jsx(tt, {
            value: t,
            onChange: a,
            readOnly: e.readOnly,
            optionProps: n.props
        }) : n.type === x.terrainId ? s.jsx($e, {
            optionProps: n.props,
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : n.type === x.color ? s.jsx(Fe, {
            value: t,
            onChange: a,
            readOnly: e.readOnly
        }) : null
    },
    ot = A.lazy(() => ne(() => import("./App-75.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82]))),
    rt = e => {
        const [n, t] = A.useState(!1);
        return A.useEffect(() => {
            e.visible && t(!0)
        }, [e.visible]), n ? s.jsx(A.Suspense, {
            fallback: null,
            children: s.jsx(ot, {
                ...e
            })
        }) : null
    },
    st = e => {
        const {
            option: n,
            value: t,
            onChange: a,
            readOnly: i
        } = e, {
            label: r,
            description: c
        } = n.option, [o, l, d] = oe(!1);
        return s.jsxs(at, {
            children: [s.jsxs("div", {
                className: "flex vc maxWidth between",
                children: [s.jsx("div", {
                    children: s.jsx(B.Title, {
                        level: 5,
                        style: {
                            fontWeight: re.Bold,
                            marginBottom: 0
                        },
                        children: r
                    })
                }), e.showHooks ? s.jsx(U, {
                    size: "small",
                    shape: "circle",
                    type: "link",
                    icon: s.jsx("i", {
                        className: "far fa-cog"
                    }),
                    onClick: l
                }) : null]
            }), c ? s.jsx("div", {
                children: s.jsx(B.Text, {
                    italic: !0,
                    children: c
                })
            }) : null, s.jsx(it, {
                style: {
                    marginTop: 5
                },
                children: s.jsx(nt, {
                    value: t,
                    option: n.option,
                    onChange: a,
                    readOnly: i
                })
            }), s.jsx(rt, {
                visible: o,
                close: d,
                ...e
            })]
        })
    },
    at = v.div.attrs({
        className: "maxWidth"
    })`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`,
    it = v.div.attrs({
        className: "maxWidth"
    })``,
    lt = H(e => {
        const {
            device: n,
            deviceOption: t,
            options: a,
            category: i,
            setCategory: r
        } = e, {
            me: {
                roleLevel: c
            }
        } = D(), o = c >= M.admin, l = (() => {
            let d = Le({
                device: n,
                options: a,
                optionSchema: t.optionSchema
            }).filter(p => !!(!i || p.categories && p.categories.includes(i))).filter(p => Me(t.id, p.key));
            return le(t.id, a) || (d = [], i && r(void 0)), d
        })();
        return l.length ? s.jsx(R, {
            size: 14,
            direction: "vertical",
            className: "maxWidth",
            children: l.map(d => s.jsx(st, {
                option: d,
                value: a[d.key],
                onChange: p => e.handleOptionChange(String(d.key), p),
                readOnly: e.readOnly,
                deviceId: n.id,
                deviceType: n.deviceOption.id,
                hooks: e.hooks,
                showHooks: o
            }, `${n.id} ${String(d.key)}`))
        }) : s.jsxs(Se, {
            className: "maxWidth",
            children: [s.jsx("div", {
                style: {
                    fontSize: 36,
                    color: "rgba(255,255,255,0.85)"
                },
                children: s.jsx(q, {
                    name: "fas fa-cogs"
                })
            }), s.jsx("div", {
                style: {
                    marginTop: 3
                },
                children: s.jsxs(B.Text, {
                    children: ["No options to configure for this", " ", i ? "category" : b.device.singular, "!"]
                })
            })]
        })
    }),
    I = "All Options",
    Mt = H(e => {
        var C, O, V, W;
        const {
            device: n,
            deviceOption: t,
            position: a,
            options: i
        } = e, [r, c] = y.useState(G(t.optionSchema)), o = !ce(), l = (h, S) => {
            o || (we({
                event: Ee.CHANGE_DEVICE_OPTION,
                device: n,
                option: h,
                value: S
            }), ue({
                deviceOption: t,
                id: n.id,
                x: a.x,
                y: a.y,
                depth: n.layers.getOptionsDepth(),
                layerId: n.layers.getOptionsLayer(),
                name: n.name,
                isPreview: !1,
                options: {
                    ...i,
                    [h]: S
                },
                placedByClient: !0,
                state: t.defaultState
            }))
        }, d = s.jsx(R, {
            size: 12,
            direction: "vertical",
            className: "maxWidth",
            children: s.jsx(lt, {
                device: n,
                deviceOption: t,
                options: i,
                hooks: e.hooks,
                readOnly: o,
                handleOptionChange: l,
                category: r === I ? void 0 : r,
                setCategory: c
            })
        }), u = (((O = (C = t.optionSchema) == null ? void 0 : C.categories) == null ? void 0 : O.categories) || []).filter(h => h.supportedMapStyles === void 0 ? !0 : h.supportedMapStyles.includes(F())).filter(h => {
            var S;
            return !((S = h.hideIf) != null && S.length && Y({
                hideIf: h.hideIf,
                options: i
            }))
        });
        if (y.useEffect(() => {
                r && r !== I && !u.some(h => h.id === r) && c(G(t.optionSchema))
            }, [r, u]), !u || !u.length) return d;
        const m = [];
        return u.forEach(h => {
            m.push({
                id: h.id,
                name: h.name
            })
        }), ((W = (V = t.optionSchema) == null ? void 0 : V.categories) == null ? void 0 : W.showAllOptionsAt) === "start" || !1 ? m.unshift({
            id: I,
            name: I
        }) : m.push({
            id: I,
            name: I
        }), s.jsx(se, {
            theme: {
                components: {
                    Tabs: {
                        colorPrimary: "yellow"
                    }
                }
            },
            children: s.jsx(ae, {
                activeKey: r,
                onChange: h => {
                    de(), c(h)
                },
                className: "maxWidth",
                style: {
                    marginTop: -18
                },
                size: "large",
                items: m.map(h => ({
                    label: h.name,
                    key: h.id,
                    children: d
                })),
                getPopupContainer: h => h.parentElement || document.body
            })
        })
    }),
    G = e => {
        if (e.categories) {
            if (e.categories.showAllOptionsAt === "start") return I;
            if (e.categories.categories.length) return e.categories.categories[0].id
        }
        return I
    };
export {
    j as B, Be as C, Mt as D, Z as F, nt as I, Lt as M, x as O, P as a, Nt as u
};