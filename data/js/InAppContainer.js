import {
    m as pe,
    o as ke,
    j as e,
    d as c,
    F as H,
    r as d,
    B as w,
    D as L,
    a4 as je,
    u as E,
    R as z,
    ar as J,
    a$ as O,
    M as ve
} from "./_index.js";
import {
    o as g,
    a as fe
} from "./mobxreact.esm.js";
import {
    M as ae,
    s as Z,
    O as ge
} from "./FixSpinePlugin.js";
import {
    u as G,
    s as re,
    S as le,
    J as ce,
    r as N,
    a6 as Ce,
    t as Q,
    Z as we
} from "./App-41.js";
import {
    H as l,
    g as de,
    a as T,
    b as f,
    c as p,
    d as q,
    e as B,
    f as R
} from "./Header.js";
import {
    H as S
} from "./Hook.js";
import {
    D
} from "./index-6.js";
import {
    I as V
} from "./index-3.js";
import {
    h as X,
    M as ee,
    i as M,
    j as A,
    f as Ne,
    g as Oe
} from "./App-3.js";
import {
    A as be
} from "./index-29.js";
import {
    S as j
} from "./index-8.js";
import {
    M as b
} from "./MapModeType.js";
import {
    D as P,
    M as k
} from "./index-10.js";
import {
    C as Se
} from "./Button.js";
import {
    u as He
} from "./useWillUnmount.js";
import "./GetAssetPath.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./polished.esm.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./Sizes.js";
import "./index-7.js";
import "./DownOutlined.js";
import "./AppTypes.js";
import "./move.js";
var Ee = Object.defineProperty,
    De = (o, t, i, s) => {
        for (var a = void 0, n = o.length - 1, r; n >= 0; n--)(r = o[n]) && (a = r(t, i, a) || a);
        return a && Ee(t, i, a), a
    };
class me {
    constructor() {
        this.data = {
            hooks: []
        }, pe(this)
    }
}
De([ke], me.prototype, "data");
const _ = new me,
    F = () => _.data,
    I = {
        maxHooks: 12,
        maxKeyLength: 32,
        maxDisplayNameLength: 64,
        maxDisplayDescriptionLength: 128,
        selectBox: {
            maxOptions: 24
        },
        hiddenScenario: {
            maxAmount: 8,
            maxNameLength: 64
        }
    },
    K = o => {
        var t, i;
        return (i = (t = _.data) == null ? void 0 : t.hooks) == null ? void 0 : i.find(s => s.key === o)
    },
    Te = o => e.jsxs(Ie, {
        children: [e.jsxs(Ke, {
            children: [l.name, " - ", de(o.type)]
        }), e.jsx(Ve, {
            children: o.name
        })]
    }),
    Ie = c.div``,
    Ke = c.div`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    Ve = c.div`
  font-size: 28px;
  font-weight: ${H.Bold};
`,
    Me = o => {
        const {
            world: {
                devices: {
                    devices: t
                }
            },
            me: {
                editing: i
            }
        } = G(), s = d.useMemo(() => {
            const n = [];
            return Array.from(t).map(r => r[1]).forEach(r => {
                r.hooks && r.hooks.connections && r.hooks.connections.length && r.hooks.connections.forEach(m => {
                    if (m.hook === o.hookKey) {
                        const h = r.deviceOption.optionSchema.options.find(y => y.key === m.option).option.label;
                        n.push({
                            deviceId: r.id,
                            deviceOptionId: r.deviceOption.id,
                            deviceName: r.name || r.deviceOption.name,
                            optionName: h
                        })
                    }
                })
            }), n
        }, []), a = () => s.length ? e.jsx(e.Fragment, {
            children: s.map(n => {
                const r = () => {
                    i.device.currentlyEditedDevice = {
                        id: n.deviceId,
                        deviceOptionId: n.deviceOptionId
                    }, re(ae.editingDevice)
                };
                return e.jsx(T, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: r,
                    children: e.jsxs("div", {
                        children: [e.jsx(Ae, {
                            children: n.optionName
                        }), e.jsx($e, {
                            children: n.deviceName
                        })]
                    })
                }, n.deviceId + n.optionName)
            })
        }) : e.jsxs(Le, {
            children: ["No devices are using this ", l.name.toLowerCase(), " yet! Once you connect a device's option to this ", l.name.toLowerCase(), ", that device will show up here."]
        });
        return e.jsx(_e, {
            children: a()
        })
    },
    _e = c.div``,
    Le = c.div`
  font-size: 16px;
`,
    Ae = c.div`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${H.Normal};
`,
    $e = c.div``,
    u = {
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
    },
    ze = o => {
        le(ce.hookAction, {
            action: o.action,
            payload: o.payload
        })
    },
    x = o => {
        ze(o)
    },
    Be = o => {
        const [t, i] = d.useState(""), s = n => {
            i(n.target.value)
        }, a = () => {
            const n = t.trim();
            n.length && (x({
                action: u.newHiddenScenario,
                payload: {
                    key: o.hookKey,
                    name: n
                }
            }), i(""), o.close())
        };
        return e.jsx(D, {
            placement: l.drawer.placement,
            width: l.drawer.widths.default,
            open: o.visible,
            onClose: o.close,
            closable: !0,
            children: e.jsxs(f, {
                children: [e.jsx(p, {
                    children: "Scenario Name"
                }), e.jsx(V, {
                    size: "large",
                    placeholder: "Name here...",
                    value: t,
                    onChange: s,
                    onPressEnter: a,
                    maxLength: I.hiddenScenario.maxNameLength
                }), e.jsx(w, {
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
    },
    Pe = g(o => {
        const {
            options: t
        } = o.condition, i = F(), [s, a] = d.useState(t == null ? void 0 : t.key), [n, r] = d.useState(t == null ? void 0 : t.compare), [m, h] = d.useState(t == null ? void 0 : t.value);
        if (d.useEffect(() => {
                a(t == null ? void 0 : t.key)
            }, [t == null ? void 0 : t.key]), d.useEffect(() => {
                r(t == null ? void 0 : t.compare)
            }, [t == null ? void 0 : t.compare]), d.useEffect(() => {
                h(t == null ? void 0 : t.value)
            }, [t == null ? void 0 : t.value]), !t) return null;
        const y = C => {
                a(C)
            },
            v = C => {
                r(C)
            },
            he = C => {
                h(C.target.value)
            },
            U = s.trim() === o.hookKey,
            ue = () => {
                U || (x({
                    action: u.saveHookValueHiddenConditionOptions,
                    payload: {
                        key: o.hookKey,
                        scenario: o.scenarioName,
                        condition: o.condition.id,
                        options: {
                            key: s,
                            compare: n,
                            value: m
                        }
                    }
                }), o.close())
            },
            xe = i.hooks.filter(C => C.key !== o.hookKey).map(C => ({
                value: C.key
            }));
        return e.jsxs(Fe, {
            children: [e.jsx(q, {
                title: `${l.name} Value`,
                descriptor: "Condition"
            }), e.jsx(L, {}), e.jsxs(p, {
                children: [l.name, " Name"]
            }), e.jsx(be, {
                value: s,
                options: xe,
                onChange: y,
                style: {
                    width: "100%"
                },
                placeholder: "Name here...",
                filterOption: (C, ye) => {
                    var Y;
                    return ((Y = ye.value) == null ? void 0 : Y.toUpperCase().indexOf(C.toUpperCase())) !== -1
                }
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx(p, {
                children: "Comparison"
            }), e.jsxs(j, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: v,
                value: n,
                children: [e.jsx(j.Option, {
                    value: X.equal,
                    children: "Equals"
                }), e.jsx(j.Option, {
                    value: X.notEqual,
                    children: "Does Not Equal"
                })]
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx(p, {
                children: "Value"
            }), e.jsx(V, {
                value: m,
                onChange: he,
                size: "large",
                placeholder: "Value here..."
            }), e.jsx("div", {
                style: {
                    height: 30
                }
            }), e.jsx(w, {
                size: "large",
                type: "primary",
                block: !0,
                style: {
                    height: 50
                },
                disabled: U,
                onClick: ue,
                children: "Save"
            }), U ? e.jsx(je, {
                type: "error",
                message: `Invalid ${l.name} Name`,
                description: `You cannot hide a ${l.name.toLowerCase()} based off its own value.`,
                style: {
                    marginTop: 15
                },
                showIcon: !0
            }) : null]
        })
    }),
    Fe = c.div``,
    Ue = o => {
        const {
            options: t
        } = o.condition, [i, s] = d.useState(t == null ? void 0 : t.mode), [a, n] = d.useState(t == null ? void 0 : t.compare);
        if (d.useEffect(() => {
                s(t == null ? void 0 : t.mode)
            }, [t == null ? void 0 : t.mode]), d.useEffect(() => {
                n(t == null ? void 0 : t.compare)
            }, [t == null ? void 0 : t.compare]), !t) return null;
        const r = y => {
                s(y)
            },
            m = y => {
                n(y)
            },
            h = () => {
                x({
                    action: u.saveModeTypeHiddenConditionOptions,
                    payload: {
                        key: o.hookKey,
                        scenario: o.scenarioName,
                        condition: o.condition.id,
                        options: {
                            mode: i,
                            compare: a
                        }
                    }
                }), o.close()
            };
        return e.jsxs(We, {
            children: [e.jsx(q, {
                title: `${l.name} Value`,
                descriptor: "Condition"
            }), e.jsx(L, {}), e.jsx(p, {
                children: "Hide if the mode..."
            }), e.jsxs(j, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: m,
                value: a,
                children: [e.jsx(j.Option, {
                    value: ee.equal,
                    children: "Is"
                }), e.jsx(j.Option, {
                    value: ee.notEqual,
                    children: "Is Not"
                })]
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx(p, {
                children: i === b.assignment ? "an..." : "a..."
            }), e.jsxs(j, {
                style: {
                    width: "100%"
                },
                size: "large",
                onChange: r,
                value: i,
                children: [e.jsx(j.Option, {
                    value: b.liveGame,
                    children: "Live Game"
                }), e.jsx(j.Option, {
                    value: b.assignment,
                    children: "Assignment"
                })]
            }), e.jsx("div", {
                style: {
                    height: 30
                }
            }), e.jsx(w, {
                size: "large",
                type: "primary",
                block: !0,
                style: {
                    height: 50
                },
                onClick: h,
                children: "Save"
            })]
        })
    },
    We = c.div``,
    Re = g(o => {
        const t = K(o.hookKey);
        if (!t) return null;
        const i = (t.hiddenScenarios || []).find(n => n.name === o.scenarioName);
        if (!i) return null;
        const s = i.conditions.find(n => n.id === o.condition);
        if (!s) return null;
        const a = () => s.type === M.hookValue ? e.jsx(Pe, {
            condition: s,
            hookKey: o.hookKey,
            scenarioName: o.scenarioName,
            close: o.close
        }) : s.type === M.modeType ? e.jsx(Ue, {
            condition: s,
            hookKey: o.hookKey,
            scenarioName: o.scenarioName,
            close: o.close
        }) : null;
        return e.jsx(D, {
            placement: l.drawer.placement,
            width: l.drawer.widths.default,
            open: o.visible,
            onClose: o.close,
            closable: !0,
            children: e.jsx(f, {
                children: a()
            })
        })
    }),
    Ge = o => {
        const [t, i, s] = E(!1), a = d.useMemo(() => o.condition.type === M.hookValue ? `${l.name} Value` : o.condition.type === M.modeType ? "Mode" : "Unknown", [o.condition.type]), n = () => {
            x({
                action: u.removeHiddenCondition,
                payload: {
                    key: o.hookKey,
                    scenario: o.scenarioName,
                    condition: o.condition.id
                }
            })
        }, r = () => e.jsx(k, {
            children: e.jsx(k.Item, {
                onClick: N(n),
                children: "Remove Condition"
            })
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(T, {
                style: {
                    marginBottom: 10
                },
                onClick: i,
                children: e.jsxs(qe, {
                    children: [e.jsxs("div", {
                        children: [e.jsx(Ye, {
                            children: "Condition"
                        }), e.jsx(Je, {
                            children: a
                        })]
                    }), e.jsx(P, {
                        overlay: r(),
                        children: e.jsx(w, {
                            icon: e.jsx(z, {}),
                            type: "dashed",
                            shape: "circle"
                        })
                    })]
                })
            }), e.jsx(Re, {
                visible: t,
                close: s,
                hookKey: o.hookKey,
                scenarioName: o.scenarioName,
                condition: o.condition.id
            })]
        })
    },
    qe = c.div.attrs({
        className: "maxWidth flex between vc"
    })``,
    Ye = c.div`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${H.Normal};
`,
    Je = c.div``,
    Ze = o => {
        const t = i => {
            x({
                action: u.newHiddenCondition,
                payload: {
                    key: o.hookKey,
                    scenario: o.scenarioName,
                    conditionType: i
                }
            }), o.close()
        };
        return e.jsx(D, {
            open: o.visible,
            onClose: o.close,
            width: l.drawer.widths.default,
            placement: l.drawer.placement,
            closable: !0,
            children: e.jsxs(f, {
                children: [e.jsx(Qe, {
                    children: "New Condition"
                }), e.jsx(Xe, {
                    children: "Select a condition type"
                }), e.jsx(L, {}), e.jsxs(T, {
                    onClick: () => t(M.hookValue),
                    children: [e.jsx(oe, {
                        children: "Hook Value"
                    }), e.jsx(te, {
                        children: "Hide depending on the value of another hook"
                    })]
                }), e.jsxs(T, {
                    onClick: () => t(M.modeType),
                    style: {
                        marginTop: 10
                    },
                    children: [e.jsx(oe, {
                        children: "Mode"
                    }), e.jsx(te, {
                        children: "Hide depending on the mode (live game or assignment)"
                    })]
                })]
            })
        })
    },
    Qe = c.div`
  font-size: 28px;
  font-weight: ${H.Bold};
`,
    Xe = c.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    oe = c.div``,
    te = c.div`
  font-size: 15px;
  font-weight: ${H.Normal};
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`,
    eo = o => {
        const [t, i, s] = E(!1);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(B, {
                onClick: i,
                style: {
                    marginBottom: 10
                },
                children: "New Condition"
            }), e.jsx(Ze, {
                visible: t,
                close: s,
                hookKey: o.hookKey,
                scenarioName: o.scenarioName
            })]
        })
    },
    oo = g(o => {
        const t = K(o.hookKey);
        if (!t) return null;
        const i = (t.hiddenScenarios || []).find(s => s.name === o.scenarioName);
        return i ? e.jsx(D, {
            open: o.visible,
            onClose: o.close,
            width: l.drawer.widths.default,
            placement: l.drawer.placement,
            closable: !0,
            children: e.jsxs(f, {
                children: [e.jsx(q, {
                    title: o.scenarioName,
                    descriptor: "Scenario"
                }), e.jsx(L, {}), e.jsx(eo, {
                    hookKey: o.hookKey,
                    scenarioName: o.scenarioName
                }), i.conditions.map(s => e.jsx(Ge, {
                    hookKey: o.hookKey,
                    scenarioName: o.scenarioName,
                    condition: s
                }, `condition-${s.id}`))]
            })
        }) : null
    }),
    to = o => {
        const [t, i, s] = E(!1), a = () => {
            x({
                action: u.removeHiddenScenario,
                payload: {
                    key: o.hookKey,
                    name: o.name
                }
            })
        }, n = () => e.jsx(k, {
            children: e.jsx(k.Item, {
                onClick: N(a),
                children: "Remove Scenario"
            })
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(T, {
                style: {
                    marginBottom: 10
                },
                onClick: i,
                children: e.jsxs(no, {
                    children: [e.jsx("div", {
                        children: o.name
                    }), e.jsx(P, {
                        overlay: n(),
                        children: e.jsx(w, {
                            icon: e.jsx(z, {}),
                            type: "dashed",
                            shape: "circle"
                        })
                    })]
                })
            }), e.jsx(oo, {
                visible: t,
                close: s,
                scenarioName: o.name,
                hookKey: o.hookKey
            })]
        })
    },
    no = c.div.attrs({
        className: "maxWidth flex between vc"
    })``,
    io = g(o => {
        const t = K(o.hookKey),
            [i, s, a] = E(!1);
        if (!t) return null;
        const n = t.hiddenScenarios || [];
        return e.jsxs(e.Fragment, {
            children: [n.length < I.hiddenScenario.maxAmount ? e.jsx(B, {
                onClick: s,
                style: {
                    marginBottom: 10
                },
                children: "New Scenario"
            }) : null, (t.hiddenScenarios || []).map(r => e.jsx(to, {
                name: r.name,
                hookKey: o.hookKey
            }, `scenario-${r.name}-${o.hookKey}`)), e.jsx(Be, {
                hookKey: o.hookKey,
                visible: i,
                close: a
            })]
        })
    }),
    so = o => e.jsxs(ao, {
        children: [e.jsxs(ro, {
            children: ["Sometimes you don't want a ", l.name.toLowerCase(), " to show. Create scenarios to hide a hook under certain conditions. If any are the scenarios are true, the ", l.name.toLowerCase(), " will be hidden from the game host. ", e.jsx("br", {}), " ", e.jsx("br", {}), " When a ", l.name.toLowerCase(), " is hidden, any device option with a link to this", " ", l.name.toLowerCase(), " will use the device's set option."]
        }), e.jsx(io, {
            hookKey: o.hookKey
        })]
    }),
    ao = c.div``,
    ro = c.div`
  margin-bottom: 15px;
`,
    lo = o => {
        const [t, i] = d.useState(""), s = n => {
            i(n.target.value)
        }, a = () => {
            t.trim().length && (x({
                action: u.newOption,
                payload: {
                    key: o.hookKey,
                    option: t.trim()
                }
            }), o.close(), i(""))
        };
        return e.jsxs(D, {
            open: o.visible,
            onClose: o.close,
            placement: l.drawer.placement,
            width: l.drawer.widths.default,
            closable: !0,
            children: [e.jsxs(f, {
                children: [e.jsx(p, {
                    children: "Option Name"
                }), e.jsx(V, {
                    value: t,
                    onChange: s,
                    size: "large",
                    placeholder: "Option name here...",
                    onPressEnter: a
                })]
            }), e.jsx(w, {
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
    },
    co = o => {
        const t = r => {
                x({
                    action: u.moveOption,
                    payload: {
                        key: o.hookKey,
                        option: o.name,
                        direction: r
                    }
                })
            },
            i = () => {
                x({
                    action: u.removeOption,
                    payload: {
                        key: o.hookKey,
                        option: o.name
                    }
                })
            },
            s = () => {
                x({
                    action: u.makeOptionDefault,
                    payload: {
                        key: o.hookKey,
                        option: o.name
                    }
                })
            },
            a = () => {
                x({
                    action: u.removeDefaultOption,
                    payload: {
                        key: o.hookKey,
                        option: o.name
                    }
                })
            },
            n = () => e.jsxs(k, {
                children: [o.isDefaultOption ? e.jsx(k.Item, {
                    onClick: N(a),
                    children: "Remove As Default Option"
                }, "remove-as-default-option") : e.jsx(k.Item, {
                    onClick: N(s),
                    children: "Make Default Option"
                }, "make-default-option"), o.index !== 0 ? e.jsx(k.Item, {
                    onClick: N(() => t("up")),
                    children: "Move Up"
                }, "move-up") : null, o.index !== o.numberOfItems - 1 ? e.jsx(k.Item, {
                    onClick: N(() => t("down")),
                    children: "Move Down"
                }, "move-down") : null, e.jsx(k.Item, {
                    onClick: N(i),
                    children: "Remove Option"
                }, "remove-option")]
            });
        return e.jsx(T, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: e.jsxs(mo, {
                children: [e.jsx("div", {
                    children: o.name
                }), e.jsx(P, {
                    overlay: n(),
                    children: e.jsx(w, {
                        shape: "circle",
                        type: "dashed",
                        icon: e.jsx(z, {})
                    })
                })]
            })
        })
    },
    mo = c.div.attrs({
        className: "maxWidth flex between vc"
    })``,
    ho = g(o => {
        const t = K(o.hookKey),
            [i, s, a] = E(!1);
        if (!t) return null;
        const n = t.options;
        return e.jsxs(e.Fragment, {
            children: [e.jsx(uo, {
                children: n.options.length <= I.selectBox.maxOptions ? e.jsx(B, {
                    onClick: s,
                    style: {
                        marginBottom: 10
                    },
                    children: "New Option"
                }) : null
            }), n.options.map((r, m) => e.jsx(co, {
                name: r,
                index: m,
                numberOfItems: n.options.length,
                hookKey: o.hookKey,
                isDefaultOption: n.defaultOption === r
            }, `hook-${o.hookKey}-${r}`)), e.jsx(lo, {
                hookKey: o.hookKey,
                visible: i,
                close: a
            })]
        })
    }),
    uo = c.div.attrs({
        className: "maxWidth"
    })``,
    $ = {
        width: "100%"
    },
    xo = o => {
        var n, r, m, h;
        const [t, i] = d.useState({
            defaultValue: o.options.defaultValue,
            min: o.options.min,
            max: o.options.max,
            step: o.options.step
        });
        d.useEffect(() => {
            i({
                defaultValue: o.options.defaultValue,
                min: o.options.min,
                max: o.options.max,
                step: o.options.step
            })
        }, [(n = o.options) == null ? void 0 : n.defaultValue, (r = o.options) == null ? void 0 : r.min, (m = o.options) == null ? void 0 : m.max, (h = o.options) == null ? void 0 : h.step]);
        const s = (y, v) => {
                x({
                    action: u.changeNumberOption,
                    payload: {
                        hookKey: o.hookKey,
                        key: y,
                        value: v
                    }
                }), i({
                    ...t,
                    [y]: v
                })
            },
            a = y => v => {
                s(y, v)
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(p, {
                children: "Default Value"
            }), e.jsx(A, {
                size: "large",
                style: $,
                placeholder: "0",
                onChange: a("defaultValue"),
                value: t.defaultValue,
                min: t.min,
                max: t.max,
                step: t.step
            }), e.jsx("div", {
                style: {
                    height: 20
                }
            }), e.jsx(p, {
                children: "Minimum"
            }), e.jsx(A, {
                size: "large",
                style: $,
                placeholder: "Minimum here...",
                onChange: a("min"),
                value: t.min,
                max: J.isNil(t.defaultValue) ? void 0 : t.defaultValue
            }), e.jsx("div", {
                style: {
                    height: 20
                }
            }), e.jsx(p, {
                children: "Maximum"
            }), e.jsx(A, {
                size: "large",
                style: $,
                placeholder: "Maximum here...",
                onChange: a("max"),
                value: t.max,
                min: J.isNil(t.defaultValue) ? void 0 : t.defaultValue
            }), e.jsx("div", {
                style: {
                    height: 20
                }
            }), e.jsx(p, {
                children: "Step"
            }), e.jsx(R, {
                children: "Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50."
            }), e.jsx(A, {
                size: "large",
                style: $,
                placeholder: "Step here...",
                onChange: a("step"),
                value: t.step,
                min: .01
            }), e.jsx("div", {
                style: {
                    height: 20
                }
            })]
        })
    },
    W = l.name.toLowerCase(),
    yo = g(o => {
        const t = K(o.hookKey),
            [i, s] = d.useState(t == null ? void 0 : t.displayName),
            [a, n] = d.useState(t == null ? void 0 : t.displayDescription);
        d.useEffect(() => {
            s(t == null ? void 0 : t.displayName)
        }, [t == null ? void 0 : t.displayName]), d.useEffect(() => {
            n(t == null ? void 0 : t.displayDescription)
        }, [t == null ? void 0 : t.displayDescription]);
        const r = v => {
                s(v.target.value)
            },
            m = v => {
                n(v.target.value)
            },
            h = () => {
                x({
                    action: u.setNameOrDescription,
                    payload: {
                        key: o.hookKey,
                        value: i,
                        property: "displayName"
                    }
                })
            },
            y = () => {
                x({
                    action: u.setNameOrDescription,
                    payload: {
                        key: o.hookKey,
                        value: a,
                        property: "displayDescription"
                    }
                })
            };
        return t ? e.jsxs(po, {
            children: [t.type === S.number ? e.jsx(xo, {
                hookKey: o.hookKey,
                options: t.options
            }) : null, e.jsx(p, {
                children: "Display Name"
            }), e.jsxs(R, {
                children: ["This ", W, " corresponds to an option that the game host will set before loading into your map. Set a display name that will make sense to them based off that this ", W, " customizes. Or leave it blank to use the ", W, "'s name."]
            }), e.jsx(V, {
                size: "large",
                placeholder: t.key,
                value: i,
                onChange: r,
                onBlur: h,
                maxLength: I.maxDisplayNameLength
            }), e.jsx("div", {
                style: {
                    height: 20
                }
            }), e.jsx(p, {
                children: "Description"
            }), e.jsx(R, {
                children: "Optional description used to give the game host more info on what this hook customizes."
            }), e.jsx(V, {
                size: "large",
                placeholder: "Description here...",
                value: a,
                onChange: m,
                onBlur: y,
                maxLength: I.maxDisplayDescriptionLength
            })]
        }) : null
    }),
    po = c.div``,
    ko = fe(o => {
        const t = K(o.hookKey);
        return e.jsxs(O, {
            style: {
                width: "100%"
            },
            type: "card",
            children: [t.type === S.selectBox ? e.jsx(O.TabPane, {
                tab: "Options",
                children: e.jsx(f, {
                    children: e.jsx(ho, {
                        hookKey: o.hookKey
                    })
                })
            }, "tab-hook-select-options") : null, t.type === S.selectBox || t.type === S.number ? e.jsxs(d.Fragment, {
                children: [e.jsx(O.TabPane, {
                    tab: "Settings",
                    children: e.jsx(f, {
                        children: e.jsx(yo, {
                            hookKey: o.hookKey
                        })
                    })
                }, "tab-hook-settings"), e.jsx(O.TabPane, {
                    tab: "Hidden",
                    children: e.jsx(f, {
                        children: e.jsx(so, {
                            hookKey: o.hookKey
                        })
                    })
                }, "tab-hook-hidden")]
            }) : null, e.jsx(O.TabPane, {
                tab: "Devices",
                children: e.jsx(f, {
                    children: e.jsx(Me, {
                        hookKey: o.hookKey
                    })
                })
            }, "tab-hook-devices")]
        })
    }),
    jo = g(o => {
        const t = K(o.hookKey);
        return t ? e.jsxs(D, {
            open: o.visible,
            placement: l.drawer.placement,
            width: l.drawer.widths.default,
            onClose: o.close,
            closable: !0,
            children: [e.jsx(f, {
                children: e.jsx(Te, {
                    name: o.hookKey,
                    type: t.type
                })
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx(ko, {
                hookKey: o.hookKey
            })]
        }) : null
    }),
    vo = o => {
        const [t, i, s] = E(!1), a = d.useMemo(() => de(o.type), [o.type]), n = () => {
            ve.confirm({
                title: `Are you sure you want to delete this ${l.name.toLowerCase()}?`,
                onOk: () => {
                    x({
                        action: u.removeHook,
                        payload: {
                            key: o.id
                        }
                    })
                }
            })
        }, r = h => {
            x({
                action: u.moveHook,
                payload: {
                    key: o.id,
                    direction: h
                }
            })
        }, m = () => e.jsxs(k, {
            children: [e.jsxs(k.Item, {
                onClick: N(n),
                children: ["Delete ", l.name]
            }), o.index > 0 && o.totalHooks > 1 ? e.jsx(k.Item, {
                onClick: N(() => r("up")),
                children: "Move Up"
            }) : null, o.index !== o.totalHooks && o.totalHooks > 1 ? e.jsx(k.Item, {
                onClick: N(() => r("down")),
                children: "Move Down"
            }) : null]
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(T, {
                style: {
                    marginBottom: 10
                },
                onClick: i,
                children: e.jsxs(fo, {
                    children: [e.jsxs(go, {
                        children: [e.jsx(wo, {
                            children: a
                        }), e.jsx(No, {
                            children: o.id
                        })]
                    }), e.jsx(Co, {
                        children: e.jsx(P, {
                            overlay: m,
                            children: e.jsx(w, {
                                shape: "circle",
                                type: "dashed",
                                icon: e.jsx(z, {})
                            })
                        })
                    })]
                })
            }), e.jsx(jo, {
                visible: t,
                close: s,
                hookKey: o.id
            })]
        })
    },
    fo = c.div.attrs({
        className: "flex vc between maxWidth"
    })``,
    go = c.div``,
    Co = c.div``,
    wo = c.div`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${H.Normal};
`,
    No = c.div``,
    ne = "",
    ie = S.selectBox,
    Oo = o => {
        const [t, i] = d.useState(ne), [s, a] = d.useState(ie), n = h => {
            i(h.target.value)
        }, r = h => {
            a(h)
        }, m = () => {
            !t || !s || (x({
                action: u.newHook,
                payload: {
                    key: t,
                    type: s
                }
            }), i(ne), a(ie), o.close())
        };
        return e.jsx(D, {
            open: o.visible,
            onClose: o.close,
            placement: l.drawer.placement,
            width: l.drawer.widths.default,
            closable: !0,
            children: e.jsxs(f, {
                children: [e.jsxs(bo, {
                    children: ["New ", l.name]
                }), e.jsx(L, {}), e.jsxs(p, {
                    children: [l.name, " Name"]
                }), e.jsx(V, {
                    size: "large",
                    style: {
                        width: "100%"
                    },
                    placeholder: "Name here...",
                    onChange: n,
                    value: t,
                    maxLength: I.maxKeyLength
                }), e.jsx("div", {
                    style: {
                        height: 20
                    }
                }), e.jsxs(p, {
                    children: [l.name, " Type"]
                }), e.jsxs(j, {
                    size: "large",
                    style: {
                        width: "100%"
                    },
                    value: s,
                    onChange: r,
                    children: [e.jsx(j.Option, {
                        value: S.selectBox,
                        children: "Select Box"
                    }), e.jsx(j.Option, {
                        value: S.number,
                        children: "Number"
                    }), e.jsx(j.Option, {
                        value: S.kit,
                        children: "Kit"
                    })]
                }), e.jsx("div", {
                    style: {
                        height: 30
                    }
                }), e.jsxs(w, {
                    block: !0,
                    size: "large",
                    type: "primary",
                    style: {
                        height: 60
                    },
                    onClick: m,
                    children: ["Create ", l.name]
                })]
            })
        })
    },
    bo = c.div`
  font-size: 28px;
  font-weight: ${H.UltraBold};
`,
    se = g(() => {
        const o = F(),
            [t, i, s] = E(!1);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(So, {
                children: [o.hooks.length < I.maxHooks ? e.jsxs(B, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: i,
                    children: ["New ", l.name]
                }) : null, o.hooks.map((a, n) => e.jsx(vo, {
                    id: a.key,
                    type: a.type,
                    index: n,
                    totalHooks: o.hooks.length
                }, a.key))]
            }), e.jsx(Oo, {
                visible: t,
                close: s
            })]
        })
    }),
    So = c.div.attrs({
        className: "maxWidth"
    })``,
    Ho = g(() => {
        const o = d.useRef(),
            t = F(),
            {
                me: {
                    preferences: i
                }
            } = G(),
            s = n => {
                i.startGameWithMode = n
            };
        He(() => {
            s(b.liveGame)
        }), d.useEffect(() => (window.dispatchEvent(new CustomEvent("TEST_VALUES_VISIBLE")), () => {
            window.dispatchEvent(new CustomEvent("TEST_VALUES_HIDDEN"))
        }), []);
        const a = () => {
            le(ce.startGame, {
                ownerAsSpectator: Z.session.ownerRole === ge.spectator,
                hookFormState: o.current,
                modeType: Z.me.preferences.startGameWithMode
            })
        };
        return e.jsx(Eo, {
            children: e.jsx(Ne, {
                hooks: t,
                modeType: i.startGameWithMode,
                location: Oe.editor,
                footer: n => n === 0 ? e.jsxs("div", {
                    style: {
                        fontSize: 16
                    },
                    children: ["No ", l.name.toLowerCase(), "s to configure here yet. For Select Box ", l.name, "s, make sure you create selectable options for it to show up here!"]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(w, {
                        size: "large",
                        type: "primary",
                        block: !0,
                        style: {
                            height: 60,
                            marginTop: 15
                        },
                        onClick: a,
                        children: "Start Game With Test Values"
                    }), e.jsx(w, {
                        block: !0,
                        style: {
                            marginTop: 10
                        },
                        onClick: () => {
                            i.startGameWithMode === b.liveGame ? s(b.assignment) : s(b.liveGame)
                        },
                        children: i.startGameWithMode === b.liveGame ? "Live Game" : "Assignment"
                    })]
                }),
                onStateChange: n => o.current = n
            })
        })
    }),
    Eo = c.div`
  padding: 2px 10px 40px 10px;
  color: ${Se.Black};
`,
    Do = g(() => {
        var i;
        const o = F(),
            t = Ce();
        return !((i = o.hooks) != null && i.length) || !t ? e.jsx("div", {
            style: {
                marginTop: 15
            },
            className: "maxWidth",
            children: e.jsx(se, {})
        }) : e.jsxs(O, {
            type: "card",
            style: {
                width: "100%",
                marginTop: 20
            },
            destroyInactiveTabPane: !0,
            children: [e.jsx(O.TabPane, {
                tab: "Hooks",
                children: e.jsx(se, {})
            }, "tab-hooks"), e.jsx(O.TabPane, {
                tab: "Test Values",
                children: e.jsx(Ho, {})
            }, "tab-test-values")]
        })
    }),
    To = () => e.jsx(f, {
        children: e.jsxs(Io, {
            children: [e.jsxs(Ko, {
                children: [l.name, "s"]
            }), e.jsxs(Vo, {
                children: [l.name, "s are options that game hosts can customize before playing your map. Use ", l.name, "s to allow game hosts to modify options such as game difficulty, time limits, or the kit students practice."]
            }), e.jsx(Do, {})]
        })
    }),
    Io = c.div.attrs({
        className: "flex-column flex-center maxWidth"
    })``,
    Ko = c.div`
  font-size: 36px;
  font-weight: ${H.Bold};
`,
    Vo = c.div`
  font-size: 18px;
  margin-top: 4px;
`,
    Mo = d.createContext(_),
    _o = g(o => {
        const [t, i] = d.useState(!1), [s, a, n] = E(!1), r = Q();
        d.useEffect(() => {
            i(!0);
            const v = we().dispose;
            return () => v()
        }, []), d.useEffect(() => (window.addEventListener("TEST_VALUES_VISIBLE", a), window.addEventListener("TEST_VALUES_HIDDEN", n), () => {
            window.removeEventListener("TEST_VALUES_VISIBLE", a), window.removeEventListener("TEST_VALUES_HIDDEN", n)
        })), d.useEffect(() => {
            _.data = JSON.parse(o.stringifiedData)
        }, [o.stringifiedData]), d.useEffect(() => {
            r || m()
        }, [r]);
        const m = () => {
                i(!1)
            },
            h = Q() && t,
            y = () => {
                h || o.onClose()
            };
        return e.jsx(Mo.Provider, {
            value: _,
            children: e.jsx(D, {
                open: h,
                afterOpenChange: y,
                onClose: m,
                placement: l.drawer.placement,
                closable: !0,
                width: s ? l.drawer.widths.testValues : l.drawer.widths.default,
                children: e.jsx(To, {})
            })
        })
    }),
    cn = g(() => {
        const {
            hooks: {
                hookJSON: o
            }
        } = G(), t = () => {
            re(ae.none)
        };
        return e.jsx(_o, {
            stringifiedData: o,
            onClose: t
        })
    });
export {
    cn as
    default
};