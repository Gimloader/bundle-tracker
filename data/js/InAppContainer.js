import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t
} from "./utils.js";
import {
    t as n
} from "./react-1.js";
import {
    t as r
} from "./modal-1.js";
import {
    t as i
} from "./button-1.js";
import {
    r as a,
    t as o
} from "./dropdown.js";
import {
    t as s
} from "./select.js";
import {
    t as c
} from "./input.js";
import {
    t as l
} from "./auto-complete.js";
import {
    t as u
} from "./EllipsisOutlined.js";
import {
    t as d
} from "./tabs.js";
import {
    t as f
} from "./drawer.js";
import {
    f as p,
    p as m,
    t as h
} from "./decorate.js";
import {
    t as g
} from "./jsx-runtime.js";
import {
    t as _
} from "./useWillUnmount.js";
import {
    b as ee,
    l as v,
    s as y,
    y as b
} from "./_index.js";
import {
    a as te,
    r as x
} from "./mobxreact.esm.js";
import {
    n as ne
} from "./Button-2.js";
import {
    t as re
} from "./lodash.js";
import {
    i as ie,
    t as S,
    y as C
} from "./stores-2.js";
import {
    t as w
} from "./MapModeType.js";
import {
    t as T
} from "./useStore.js";
import {
    n as E,
    t as D
} from "./Send.js";
import {
    t as O
} from "./setCurrentAction.js";
import {
    t as k
} from "./canEditOnMap.js";
import {
    M as A,
    lt as ae,
    rt as oe
} from "./App-42.js";
import {
    a as se,
    i as ce,
    l as j,
    n as M,
    r as N,
    t as le
} from "./App-3.js";
import {
    t as P
} from "./Hook.js";
import {
    a as F,
    c as I,
    i as L,
    n as R,
    o as z,
    r as B,
    s as V,
    t as H
} from "./DrawerContent.js";
var U = e(n()),
    W = class {
        constructor() {
            this.data = {
                hooks: []
            }, p(this)
        }
    };
h([m], W.prototype, `data`, void 0);
var G = new W,
    K = () => G.data,
    q = {
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
    },
    J = e => {
        var t;
        return (t = G.data) == null || (t = t.hooks) == null ? void 0 : t.find(t => t.key === e)
    },
    Y = g(),
    ue = e => (0, Y.jsxs)(de, {
        children: [(0, Y.jsxs)(fe, {
            children: [I.name, ` - `, F(e.type)]
        }), (0, Y.jsx)(pe, {
            children: e.name
        })]
    }),
    de = v.div``,
    fe = v.div`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    pe = v.div`
  font-size: 28px;
  font-weight: ${y.Bold};
`,
    me = e => {
        let {
            world: {
                devices: {
                    devices: t
                }
            },
            me: {
                editing: n
            }
        } = T(), r = U.useMemo(() => {
            let n = [];
            return Array.from(t).map(e => e[1]).forEach(t => {
                t.hooks && t.hooks.connections && t.hooks.connections.length && t.hooks.connections.forEach(r => {
                    if (r.hook === e.hookKey) {
                        let e = t.deviceOption.optionSchema.options.find(e => e.key === r.option).option.label;
                        n.push({
                            deviceId: t.id,
                            deviceOptionId: t.deviceOption.id,
                            deviceName: t.name || t.deviceOption.name,
                            optionName: e
                        })
                    }
                })
            }), n
        }, []);
        return (0, Y.jsx)(he, {
            children: r.length ? (0, Y.jsx)(Y.Fragment, {
                children: r.map(e => (0, Y.jsx)(z, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: () => {
                        n.device.currentlyEditedDevice = {
                            id: e.deviceId,
                            deviceOptionId: e.deviceOptionId
                        }, O(C.editingDevice)
                    },
                    children: (0, Y.jsxs)(`div`, {
                        children: [(0, Y.jsx)(_e, {
                            children: e.optionName
                        }), (0, Y.jsx)(ve, {
                            children: e.deviceName
                        })]
                    })
                }, e.deviceId + e.optionName))
            }) : (0, Y.jsxs)(ge, {
                children: [`No devices are using this `, I.name.toLowerCase(), ` yet! Once you connect a device's option to this `, I.name.toLowerCase(), `, that device will show up here.`]
            })
        })
    },
    he = v.div``,
    ge = v.div`
  font-size: 16px;
`,
    _e = v.div`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${y.Normal};
`,
    ve = v.div``,
    X = {
        newHook: `NEW_HOOK`,
        removeHook: `REMOVE_HOOK`,
        newOption: `NEW_OPTION`,
        moveOption: `MOVE_OPTION`,
        removeOption: `REMOVE_OPTION`,
        makeOptionDefault: `MAKE_OPTION_DEFAULT`,
        removeDefaultOption: `REMOVE_DEFAULT_OPTION`,
        setNameOrDescription: `SET_NAME_OR_DESCRIPTION`,
        newHiddenScenario: `NEW_HIDDEN_SCENARIO`,
        newHiddenCondition: `NEW_HIDDEN_CONDITION`,
        removeHiddenScenario: `REMOVE_HIDDEN_SCENARIO`,
        removeHiddenCondition: `REMOVE_HIDDEN_CONDITION`,
        saveHookValueHiddenConditionOptions: `SAVE_HOOK_VALUE_HIDDEN_CONDITION_OPTIONS`,
        saveModeTypeHiddenConditionOptions: `SAVE_MODE_TYPE_HIDDEN_CONDITION_OPTIONS`,
        moveHook: `MOVE_HOOK`,
        changeNumberOption: `CHANGE_NUMBER_OPTION`
    },
    ye = e => {
        D(E.hookAction, {
            action: e.action,
            payload: e.payload
        })
    },
    Z = e => {
        ye(e)
    },
    be = e => {
        let [t, n] = U.useState(``), r = e => {
            n(e.target.value)
        }, a = () => {
            let r = t.trim();
            r.length && (Z({
                action: X.newHiddenScenario,
                payload: {
                    key: e.hookKey,
                    name: r
                }
            }), n(``), e.close())
        };
        return (0, Y.jsx)(f, {
            placement: I.drawer.placement,
            width: I.drawer.widths.default,
            open: e.visible,
            onClose: e.close,
            closable: !0,
            children: (0, Y.jsxs)(H, {
                children: [(0, Y.jsx)(R, {
                    children: `Scenario Name`
                }), (0, Y.jsx)(c, {
                    size: `large`,
                    placeholder: `Name here...`,
                    value: t,
                    onChange: r,
                    onPressEnter: a,
                    maxLength: q.hiddenScenario.maxNameLength
                }), (0, Y.jsx)(i, {
                    size: `large`,
                    block: !0,
                    style: {
                        marginTop: 10,
                        height: 50
                    },
                    type: `primary`,
                    disabled: !t.trim().length,
                    onClick: a,
                    children: `Add Scenario`
                })]
            })
        })
    },
    xe = x(e => {
        let {
            options: t
        } = e.condition, n = K(), [r, a] = U.useState(t == null ? void 0 : t.key), [o, u] = U.useState(t == null ? void 0 : t.compare), [d, f] = U.useState(t == null ? void 0 : t.value);
        if (U.useEffect(() => {
                a(t == null ? void 0 : t.key)
            }, [t == null ? void 0 : t.key]), U.useEffect(() => {
                u(t == null ? void 0 : t.compare)
            }, [t == null ? void 0 : t.compare]), U.useEffect(() => {
                f(t == null ? void 0 : t.value)
            }, [t == null ? void 0 : t.value]), !t) return null;
        let p = e => {
                a(e)
            },
            m = e => {
                u(e)
            },
            h = e => {
                f(e.target.value)
            },
            g = r.trim() === e.hookKey,
            _ = () => {
                g || (Z({
                    action: X.saveHookValueHiddenConditionOptions,
                    payload: {
                        key: e.hookKey,
                        scenario: e.scenarioName,
                        condition: e.condition.id,
                        options: {
                            key: r,
                            compare: o,
                            value: d
                        }
                    }
                }), e.close())
            },
            v = n.hooks.filter(t => t.key !== e.hookKey).map(e => ({
                value: e.key
            }));
        return (0, Y.jsxs)(Se, {
            children: [(0, Y.jsx)(L, {
                title: `${I.name} Value`,
                descriptor: `Condition`
            }), (0, Y.jsx)(b, {}), (0, Y.jsxs)(R, {
                children: [I.name, ` Name`]
            }), (0, Y.jsx)(l, {
                value: r,
                options: v,
                onChange: p,
                style: {
                    width: `100%`
                },
                placeholder: `Name here...`,
                filterOption: (e, t) => {
                    var n;
                    return ((n = t.value) == null ? void 0 : n.toUpperCase().indexOf(e.toUpperCase())) !== -1
                }
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 15
                }
            }), (0, Y.jsx)(R, {
                children: `Comparison`
            }), (0, Y.jsxs)(s, {
                style: {
                    width: `100%`
                },
                size: `large`,
                onChange: m,
                value: o,
                children: [(0, Y.jsx)(s.Option, {
                    value: N.equal,
                    children: `Equals`
                }), (0, Y.jsx)(s.Option, {
                    value: N.notEqual,
                    children: `Does Not Equal`
                })]
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 15
                }
            }), (0, Y.jsx)(R, {
                children: `Value`
            }), (0, Y.jsx)(c, {
                value: d,
                onChange: h,
                size: `large`,
                placeholder: `Value here...`
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 30
                }
            }), (0, Y.jsx)(i, {
                size: `large`,
                type: `primary`,
                block: !0,
                style: {
                    height: 50
                },
                disabled: g,
                onClick: _,
                children: `Save`
            }), g ? (0, Y.jsx)(ee, {
                type: `error`,
                message: `Invalid ${I.name} Name`,
                description: `You cannot hide a ${I.name.toLowerCase()} based off its own value.`,
                style: {
                    marginTop: 15
                },
                showIcon: !0
            }) : null]
        })
    }),
    Se = v.div``,
    Ce = e => {
        let {
            options: t
        } = e.condition, [n, r] = U.useState(t == null ? void 0 : t.mode), [a, o] = U.useState(t == null ? void 0 : t.compare);
        return U.useEffect(() => {
            r(t == null ? void 0 : t.mode)
        }, [t == null ? void 0 : t.mode]), U.useEffect(() => {
            o(t == null ? void 0 : t.compare)
        }, [t == null ? void 0 : t.compare]), t ? (0, Y.jsxs)(we, {
            children: [(0, Y.jsx)(L, {
                title: `${I.name} Value`,
                descriptor: `Condition`
            }), (0, Y.jsx)(b, {}), (0, Y.jsx)(R, {
                children: `Hide if the mode...`
            }), (0, Y.jsxs)(s, {
                style: {
                    width: `100%`
                },
                size: `large`,
                onChange: e => {
                    o(e)
                },
                value: a,
                children: [(0, Y.jsx)(s.Option, {
                    value: ce.equal,
                    children: `Is`
                }), (0, Y.jsx)(s.Option, {
                    value: ce.notEqual,
                    children: `Is Not`
                })]
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 15
                }
            }), (0, Y.jsx)(R, {
                children: n === w.assignment ? `an...` : `a...`
            }), (0, Y.jsxs)(s, {
                style: {
                    width: `100%`
                },
                size: `large`,
                onChange: e => {
                    r(e)
                },
                value: n,
                children: [(0, Y.jsx)(s.Option, {
                    value: w.liveGame,
                    children: `Live Game`
                }), (0, Y.jsx)(s.Option, {
                    value: w.assignment,
                    children: `Assignment`
                })]
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 30
                }
            }), (0, Y.jsx)(i, {
                size: `large`,
                type: `primary`,
                block: !0,
                style: {
                    height: 50
                },
                onClick: () => {
                    Z({
                        action: X.saveModeTypeHiddenConditionOptions,
                        payload: {
                            key: e.hookKey,
                            scenario: e.scenarioName,
                            condition: e.condition.id,
                            options: {
                                mode: n,
                                compare: a
                            }
                        }
                    }), e.close()
                },
                children: `Save`
            })]
        }) : null
    },
    we = v.div``,
    Te = x(e => {
        let t = J(e.hookKey);
        if (!t) return null;
        let n = (t.hiddenScenarios || []).find(t => t.name === e.scenarioName);
        if (!n) return null;
        let r = n.conditions.find(t => t.id === e.condition);
        return r ? (0, Y.jsx)(f, {
            placement: I.drawer.placement,
            width: I.drawer.widths.default,
            open: e.visible,
            onClose: e.close,
            closable: !0,
            children: (0, Y.jsx)(H, {
                children: r.type === M.hookValue ? (0, Y.jsx)(xe, {
                    condition: r,
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    close: e.close
                }) : r.type === M.modeType ? (0, Y.jsx)(Ce, {
                    condition: r,
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    close: e.close
                }) : null
            })
        }) : null
    }),
    Ee = e => {
        let [n, r, s] = t(!1), c = U.useMemo(() => e.condition.type === M.hookValue ? `${I.name} Value` : e.condition.type === M.modeType ? `Mode` : `Unknown`, [e.condition.type]);
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(z, {
                style: {
                    marginBottom: 10
                },
                onClick: r,
                children: (0, Y.jsxs)(De, {
                    children: [(0, Y.jsxs)(`div`, {
                        children: [(0, Y.jsx)(Oe, {
                            children: `Condition`
                        }), (0, Y.jsx)(ke, {
                            children: c
                        })]
                    }), (0, Y.jsx)(o, {
                        overlay: (0, Y.jsx)(a, {
                            children: (0, Y.jsx)(a.Item, {
                                onClick: A(() => {
                                    Z({
                                        action: X.removeHiddenCondition,
                                        payload: {
                                            key: e.hookKey,
                                            scenario: e.scenarioName,
                                            condition: e.condition.id
                                        }
                                    })
                                }),
                                children: `Remove Condition`
                            })
                        }),
                        children: (0, Y.jsx)(i, {
                            icon: (0, Y.jsx)(u, {}),
                            type: `dashed`,
                            shape: `circle`
                        })
                    })]
                })
            }), (0, Y.jsx)(Te, {
                visible: n,
                close: s,
                hookKey: e.hookKey,
                scenarioName: e.scenarioName,
                condition: e.condition.id
            })]
        })
    },
    De = v.div.attrs({
        className: `maxWidth flex between vc`
    })``,
    Oe = v.div`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${y.Normal};
`,
    ke = v.div``,
    Ae = e => {
        let t = t => {
            Z({
                action: X.newHiddenCondition,
                payload: {
                    key: e.hookKey,
                    scenario: e.scenarioName,
                    conditionType: t
                }
            }), e.close()
        };
        return (0, Y.jsx)(f, {
            open: e.visible,
            onClose: e.close,
            width: I.drawer.widths.default,
            placement: I.drawer.placement,
            closable: !0,
            children: (0, Y.jsxs)(H, {
                children: [(0, Y.jsx)(je, {
                    children: `New Condition`
                }), (0, Y.jsx)(Me, {
                    children: `Select a condition type`
                }), (0, Y.jsx)(b, {}), (0, Y.jsxs)(z, {
                    onClick: () => t(M.hookValue),
                    children: [(0, Y.jsx)(Ne, {
                        children: `Hook Value`
                    }), (0, Y.jsx)(Pe, {
                        children: `Hide depending on the value of another hook`
                    })]
                }), (0, Y.jsxs)(z, {
                    onClick: () => t(M.modeType),
                    style: {
                        marginTop: 10
                    },
                    children: [(0, Y.jsx)(Ne, {
                        children: `Mode`
                    }), (0, Y.jsx)(Pe, {
                        children: `Hide depending on the mode (live game or assignment)`
                    })]
                })]
            })
        })
    },
    je = v.div`
  font-size: 28px;
  font-weight: ${y.Bold};
`,
    Me = v.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    Ne = v.div``,
    Pe = v.div`
  font-size: 15px;
  font-weight: ${y.Normal};
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`,
    Fe = e => {
        let [n, r, i] = t(!1);
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(V, {
                onClick: r,
                style: {
                    marginBottom: 10
                },
                children: `New Condition`
            }), (0, Y.jsx)(Ae, {
                visible: n,
                close: i,
                hookKey: e.hookKey,
                scenarioName: e.scenarioName
            })]
        })
    },
    Ie = x(e => {
        let t = J(e.hookKey);
        if (!t) return null;
        let n = (t.hiddenScenarios || []).find(t => t.name === e.scenarioName);
        return n ? (0, Y.jsx)(f, {
            open: e.visible,
            onClose: e.close,
            width: I.drawer.widths.default,
            placement: I.drawer.placement,
            closable: !0,
            children: (0, Y.jsxs)(H, {
                children: [(0, Y.jsx)(L, {
                    title: e.scenarioName,
                    descriptor: `Scenario`
                }), (0, Y.jsx)(b, {}), (0, Y.jsx)(Fe, {
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName
                }), n.conditions.map(t => (0, Y.jsx)(Ee, {
                    hookKey: e.hookKey,
                    scenarioName: e.scenarioName,
                    condition: t
                }, `condition-${t.id}`))]
            })
        }) : null
    }),
    Le = e => {
        let [n, r, s] = t(!1);
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(z, {
                style: {
                    marginBottom: 10
                },
                onClick: r,
                children: (0, Y.jsxs)(Re, {
                    children: [(0, Y.jsx)(`div`, {
                        children: e.name
                    }), (0, Y.jsx)(o, {
                        overlay: (0, Y.jsx)(a, {
                            children: (0, Y.jsx)(a.Item, {
                                onClick: A(() => {
                                    Z({
                                        action: X.removeHiddenScenario,
                                        payload: {
                                            key: e.hookKey,
                                            name: e.name
                                        }
                                    })
                                }),
                                children: `Remove Scenario`
                            })
                        }),
                        children: (0, Y.jsx)(i, {
                            icon: (0, Y.jsx)(u, {}),
                            type: `dashed`,
                            shape: `circle`
                        })
                    })]
                })
            }), (0, Y.jsx)(Ie, {
                visible: n,
                close: s,
                scenarioName: e.name,
                hookKey: e.hookKey
            })]
        })
    },
    Re = v.div.attrs({
        className: `maxWidth flex between vc`
    })``,
    ze = x(e => {
        let n = J(e.hookKey),
            [r, i, a] = t(!1);
        if (!n) return null;
        let o = n.hiddenScenarios || [];
        return (0, Y.jsxs)(Y.Fragment, {
            children: [o.length < q.hiddenScenario.maxAmount ? (0, Y.jsx)(V, {
                onClick: i,
                style: {
                    marginBottom: 10
                },
                children: `New Scenario`
            }) : null, (n.hiddenScenarios || []).map(t => (0, Y.jsx)(Le, {
                name: t.name,
                hookKey: e.hookKey
            }, `scenario-${t.name}-${e.hookKey}`)), (0, Y.jsx)(be, {
                hookKey: e.hookKey,
                visible: r,
                close: a
            })]
        })
    }),
    Be = e => (0, Y.jsxs)(Ve, {
        children: [(0, Y.jsxs)(He, {
            children: [`Sometimes you don't want a `, I.name.toLowerCase(), ` to show. Create scenarios to hide a hook under certain conditions. If any are the scenarios are true, the `, I.name.toLowerCase(), ` will be hidden from the game host. `, (0, Y.jsx)(`br`, {}), ` `, (0, Y.jsx)(`br`, {}), ` When a `, I.name.toLowerCase(), ` is hidden, any device option with a link to this`, ` `, I.name.toLowerCase(), ` will use the device's set option.`]
        }), (0, Y.jsx)(ze, {
            hookKey: e.hookKey
        })]
    }),
    Ve = v.div``,
    He = v.div`
  margin-bottom: 15px;
`,
    Ue = e => {
        let [t, n] = U.useState(``), r = e => {
            n(e.target.value)
        }, a = () => {
            t.trim().length && (Z({
                action: X.newOption,
                payload: {
                    key: e.hookKey,
                    option: t.trim()
                }
            }), e.close(), n(``))
        };
        return (0, Y.jsxs)(f, {
            open: e.visible,
            onClose: e.close,
            placement: I.drawer.placement,
            width: I.drawer.widths.default,
            closable: !0,
            children: [(0, Y.jsxs)(H, {
                children: [(0, Y.jsx)(R, {
                    children: `Option Name`
                }), (0, Y.jsx)(c, {
                    value: t,
                    onChange: r,
                    size: `large`,
                    placeholder: `Option name here...`,
                    onPressEnter: a
                })]
            }), (0, Y.jsx)(i, {
                size: `large`,
                block: !0,
                style: {
                    marginTop: 10,
                    height: 50
                },
                type: `primary`,
                disabled: !t.trim().length,
                onClick: a,
                children: `Add Option`
            })]
        })
    },
    We = e => {
        let t = t => {
            Z({
                action: X.moveOption,
                payload: {
                    key: e.hookKey,
                    option: e.name,
                    direction: t
                }
            })
        };
        return (0, Y.jsx)(z, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: (0, Y.jsxs)(Ge, {
                children: [(0, Y.jsx)(`div`, {
                    children: e.name
                }), (0, Y.jsx)(o, {
                    overlay: (0, Y.jsxs)(a, {
                        children: [e.isDefaultOption ? (0, Y.jsx)(a.Item, {
                            onClick: A(() => {
                                Z({
                                    action: X.removeDefaultOption,
                                    payload: {
                                        key: e.hookKey,
                                        option: e.name
                                    }
                                })
                            }),
                            children: `Remove As Default Option`
                        }, `remove-as-default-option`) : (0, Y.jsx)(a.Item, {
                            onClick: A(() => {
                                Z({
                                    action: X.makeOptionDefault,
                                    payload: {
                                        key: e.hookKey,
                                        option: e.name
                                    }
                                })
                            }),
                            children: `Make Default Option`
                        }, `make-default-option`), e.index === 0 ? null : (0, Y.jsx)(a.Item, {
                            onClick: A(() => t(`up`)),
                            children: `Move Up`
                        }, `move-up`), e.index === e.numberOfItems - 1 ? null : (0, Y.jsx)(a.Item, {
                            onClick: A(() => t(`down`)),
                            children: `Move Down`
                        }, `move-down`), (0, Y.jsx)(a.Item, {
                            onClick: A(() => {
                                Z({
                                    action: X.removeOption,
                                    payload: {
                                        key: e.hookKey,
                                        option: e.name
                                    }
                                })
                            }),
                            children: `Remove Option`
                        }, `remove-option`)]
                    }),
                    children: (0, Y.jsx)(i, {
                        shape: `circle`,
                        type: `dashed`,
                        icon: (0, Y.jsx)(u, {})
                    })
                })]
            })
        })
    },
    Ge = v.div.attrs({
        className: `maxWidth flex between vc`
    })``,
    Ke = x(e => {
        let n = J(e.hookKey),
            [r, i, a] = t(!1);
        if (!n) return null;
        let o = n.options;
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(qe, {
                children: o.options.length <= q.selectBox.maxOptions ? (0, Y.jsx)(V, {
                    onClick: i,
                    style: {
                        marginBottom: 10
                    },
                    children: `New Option`
                }) : null
            }), o.options.map((t, n) => (0, Y.jsx)(We, {
                name: t,
                index: n,
                numberOfItems: o.options.length,
                hookKey: e.hookKey,
                isDefaultOption: o.defaultOption === t
            }, `hook-${e.hookKey}-${t}`)), (0, Y.jsx)(Ue, {
                hookKey: e.hookKey,
                visible: r,
                close: a
            })]
        })
    }),
    qe = v.div.attrs({
        className: `maxWidth`
    })``,
    Je = re(),
    Q = {
        width: `100%`
    },
    Ye = e => {
        var t, n, r, i;
        let [a, o] = U.useState({
            defaultValue: e.options.defaultValue,
            min: e.options.min,
            max: e.options.max,
            step: e.options.step
        });
        U.useEffect(() => {
            o({
                defaultValue: e.options.defaultValue,
                min: e.options.min,
                max: e.options.max,
                step: e.options.step
            })
        }, [(t = e.options) == null ? void 0 : t.defaultValue, (n = e.options) == null ? void 0 : n.min, (r = e.options) == null ? void 0 : r.max, (i = e.options) == null ? void 0 : i.step]);
        let s = (t, n) => {
                Z({
                    action: X.changeNumberOption,
                    payload: {
                        hookKey: e.hookKey,
                        key: t,
                        value: n
                    }
                }), o({
                    ...a,
                    [t]: n
                })
            },
            c = e => t => {
                s(e, t)
            };
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(R, {
                children: `Default Value`
            }), (0, Y.jsx)(j, {
                size: `large`,
                style: Q,
                placeholder: `0`,
                onChange: c(`defaultValue`),
                value: a.defaultValue,
                min: a.min,
                max: a.max,
                step: a.step
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 20
                }
            }), (0, Y.jsx)(R, {
                children: `Minimum`
            }), (0, Y.jsx)(j, {
                size: `large`,
                style: Q,
                placeholder: `Minimum here...`,
                onChange: c(`min`),
                value: a.min,
                max: (0, Je.isNil)(a.defaultValue) ? void 0 : a.defaultValue
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 20
                }
            }), (0, Y.jsx)(R, {
                children: `Maximum`
            }), (0, Y.jsx)(j, {
                size: `large`,
                style: Q,
                placeholder: `Maximum here...`,
                onChange: c(`max`),
                value: a.max,
                min: (0, Je.isNil)(a.defaultValue) ? void 0 : a.defaultValue
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 20
                }
            }), (0, Y.jsx)(R, {
                children: `Step`
            }), (0, Y.jsx)(B, {
                children: `Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50.`
            }), (0, Y.jsx)(j, {
                size: `large`,
                style: Q,
                placeholder: `Step here...`,
                onChange: c(`step`),
                value: a.step,
                min: .01
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 20
                }
            })]
        })
    },
    $ = I.name.toLowerCase(),
    Xe = x(e => {
        let t = J(e.hookKey),
            [n, r] = U.useState(t == null ? void 0 : t.displayName),
            [i, a] = U.useState(t == null ? void 0 : t.displayDescription);
        return U.useEffect(() => {
            r(t == null ? void 0 : t.displayName)
        }, [t == null ? void 0 : t.displayName]), U.useEffect(() => {
            a(t == null ? void 0 : t.displayDescription)
        }, [t == null ? void 0 : t.displayDescription]), t ? (0, Y.jsxs)(Ze, {
            children: [t.type === P.number ? (0, Y.jsx)(Ye, {
                hookKey: e.hookKey,
                options: t.options
            }) : null, (0, Y.jsx)(R, {
                children: `Display Name`
            }), (0, Y.jsxs)(B, {
                children: [`This `, $, ` corresponds to an option that the game host will set before loading into your map. Set a display name that will make sense to them based off that this `, $, ` customizes. Or leave it blank to use the `, $, `'s name.`]
            }), (0, Y.jsx)(c, {
                size: `large`,
                placeholder: t.key,
                value: n,
                onChange: e => {
                    r(e.target.value)
                },
                onBlur: () => {
                    Z({
                        action: X.setNameOrDescription,
                        payload: {
                            key: e.hookKey,
                            value: n,
                            property: `displayName`
                        }
                    })
                },
                maxLength: q.maxDisplayNameLength
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 20
                }
            }), (0, Y.jsx)(R, {
                children: `Description`
            }), (0, Y.jsx)(B, {
                children: `Optional description used to give the game host more info on what this hook customizes.`
            }), (0, Y.jsx)(c, {
                size: `large`,
                placeholder: `Description here...`,
                value: i,
                onChange: e => {
                    a(e.target.value)
                },
                onBlur: () => {
                    Z({
                        action: X.setNameOrDescription,
                        payload: {
                            key: e.hookKey,
                            value: i,
                            property: `displayDescription`
                        }
                    })
                },
                maxLength: q.maxDisplayDescriptionLength
            })]
        }) : null
    }),
    Ze = v.div``,
    Qe = te(e => {
        let t = J(e.hookKey);
        return (0, Y.jsxs)(d, {
            style: {
                width: `100%`
            },
            type: `card`,
            children: [t.type === P.selectBox ? (0, Y.jsx)(d.TabPane, {
                tab: `Options`,
                children: (0, Y.jsx)(H, {
                    children: (0, Y.jsx)(Ke, {
                        hookKey: e.hookKey
                    })
                })
            }, `tab-hook-select-options`) : null, t.type === P.selectBox || t.type === P.number ? (0, Y.jsxs)(U.Fragment, {
                children: [(0, Y.jsx)(d.TabPane, {
                    tab: `Settings`,
                    children: (0, Y.jsx)(H, {
                        children: (0, Y.jsx)(Xe, {
                            hookKey: e.hookKey
                        })
                    })
                }, `tab-hook-settings`), (0, Y.jsx)(d.TabPane, {
                    tab: `Hidden`,
                    children: (0, Y.jsx)(H, {
                        children: (0, Y.jsx)(Be, {
                            hookKey: e.hookKey
                        })
                    })
                }, `tab-hook-hidden`)]
            }) : null, (0, Y.jsx)(d.TabPane, {
                tab: `Devices`,
                children: (0, Y.jsx)(H, {
                    children: (0, Y.jsx)(me, {
                        hookKey: e.hookKey
                    })
                })
            }, `tab-hook-devices`)]
        })
    }),
    $e = x(e => {
        let t = J(e.hookKey);
        return t ? (0, Y.jsxs)(f, {
            open: e.visible,
            placement: I.drawer.placement,
            width: I.drawer.widths.default,
            onClose: e.close,
            closable: !0,
            children: [(0, Y.jsx)(H, {
                children: (0, Y.jsx)(ue, {
                    name: e.hookKey,
                    type: t.type
                })
            }), (0, Y.jsx)(`div`, {
                style: {
                    height: 15
                }
            }), (0, Y.jsx)(Qe, {
                hookKey: e.hookKey
            })]
        }) : null
    }),
    et = e => {
        let [n, s, c] = t(!1), l = U.useMemo(() => F(e.type), [e.type]), d = () => {
            r.confirm({
                title: `Are you sure you want to delete this ${I.name.toLowerCase()}?`,
                onOk: () => {
                    Z({
                        action: X.removeHook,
                        payload: {
                            key: e.id
                        }
                    })
                }
            })
        }, f = t => {
            Z({
                action: X.moveHook,
                payload: {
                    key: e.id,
                    direction: t
                }
            })
        };
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(z, {
                style: {
                    marginBottom: 10
                },
                onClick: s,
                children: (0, Y.jsxs)(tt, {
                    children: [(0, Y.jsxs)(nt, {
                        children: [(0, Y.jsx)(it, {
                            children: l
                        }), (0, Y.jsx)(at, {
                            children: e.id
                        })]
                    }), (0, Y.jsx)(rt, {
                        children: (0, Y.jsx)(o, {
                            overlay: () => (0, Y.jsxs)(a, {
                                children: [(0, Y.jsxs)(a.Item, {
                                    onClick: A(d),
                                    children: [`Delete `, I.name]
                                }), e.index > 0 && e.totalHooks > 1 ? (0, Y.jsx)(a.Item, {
                                    onClick: A(() => f(`up`)),
                                    children: `Move Up`
                                }) : null, e.index !== e.totalHooks && e.totalHooks > 1 ? (0, Y.jsx)(a.Item, {
                                    onClick: A(() => f(`down`)),
                                    children: `Move Down`
                                }) : null]
                            }),
                            children: (0, Y.jsx)(i, {
                                shape: `circle`,
                                type: `dashed`,
                                icon: (0, Y.jsx)(u, {})
                            })
                        })
                    })]
                })
            }), (0, Y.jsx)($e, {
                visible: n,
                close: c,
                hookKey: e.id
            })]
        })
    },
    tt = v.div.attrs({
        className: `flex vc between maxWidth`
    })``,
    nt = v.div``,
    rt = v.div``,
    it = v.div`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${y.Normal};
`,
    at = v.div``,
    ot = ``,
    st = P.selectBox,
    ct = e => {
        let [t, n] = U.useState(ot), [r, a] = U.useState(st);
        return (0, Y.jsx)(f, {
            open: e.visible,
            onClose: e.close,
            placement: I.drawer.placement,
            width: I.drawer.widths.default,
            closable: !0,
            children: (0, Y.jsxs)(H, {
                children: [(0, Y.jsxs)(lt, {
                    children: [`New `, I.name]
                }), (0, Y.jsx)(b, {}), (0, Y.jsxs)(R, {
                    children: [I.name, ` Name`]
                }), (0, Y.jsx)(c, {
                    size: `large`,
                    style: {
                        width: `100%`
                    },
                    placeholder: `Name here...`,
                    onChange: e => {
                        n(e.target.value)
                    },
                    value: t,
                    maxLength: q.maxKeyLength
                }), (0, Y.jsx)(`div`, {
                    style: {
                        height: 20
                    }
                }), (0, Y.jsxs)(R, {
                    children: [I.name, ` Type`]
                }), (0, Y.jsxs)(s, {
                    size: `large`,
                    style: {
                        width: `100%`
                    },
                    value: r,
                    onChange: e => {
                        a(e)
                    },
                    children: [(0, Y.jsx)(s.Option, {
                        value: P.selectBox,
                        children: `Select Box`
                    }), (0, Y.jsx)(s.Option, {
                        value: P.number,
                        children: `Number`
                    }), (0, Y.jsx)(s.Option, {
                        value: P.kit,
                        children: `Kit`
                    })]
                }), (0, Y.jsx)(`div`, {
                    style: {
                        height: 30
                    }
                }), (0, Y.jsxs)(i, {
                    block: !0,
                    size: `large`,
                    type: `primary`,
                    style: {
                        height: 60
                    },
                    onClick: () => {
                        t && r && (Z({
                            action: X.newHook,
                            payload: {
                                key: t,
                                type: r
                            }
                        }), n(ot), a(st), e.close())
                    },
                    children: [`Create `, I.name]
                })]
            })
        })
    },
    lt = v.div`
  font-size: 28px;
  font-weight: ${y.UltraBold};
`,
    ut = x(() => {
        let e = K(),
            [n, r, i] = t(!1);
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(dt, {
                children: [e.hooks.length < q.maxHooks ? (0, Y.jsxs)(V, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: r,
                    children: [`New `, I.name]
                }) : null, e.hooks.map((t, n) => (0, Y.jsx)(et, {
                    id: t.key,
                    type: t.type,
                    index: n,
                    totalHooks: e.hooks.length
                }, t.key))]
            }), (0, Y.jsx)(ct, {
                visible: n,
                close: i
            })]
        })
    }),
    dt = v.div.attrs({
        className: `maxWidth`
    })``,
    ft = x(() => {
        let e = U.useRef(),
            t = K(),
            {
                me: {
                    preferences: n
                }
            } = T(),
            r = e => {
                n.startGameWithMode = e
            };
        _(() => {
            r(w.liveGame)
        }), U.useEffect(() => (window.dispatchEvent(new CustomEvent(`TEST_VALUES_VISIBLE`)), () => {
            window.dispatchEvent(new CustomEvent(`TEST_VALUES_HIDDEN`))
        }), []);
        let a = () => {
            D(E.startGame, {
                ownerAsSpectator: S.session.ownerRole === ie.spectator,
                hookFormState: e.current,
                modeType: S.me.preferences.startGameWithMode
            })
        };
        return (0, Y.jsx)(pt, {
            children: (0, Y.jsx)(le, {
                hooks: t,
                modeType: n.startGameWithMode,
                location: se.editor,
                footer: e => e === 0 ? (0, Y.jsxs)(`div`, {
                    style: {
                        fontSize: 16
                    },
                    children: [`No `, I.name.toLowerCase(), `s to configure here yet. For Select Box `, I.name, `s, make sure you create selectable options for it to show up here!`]
                }) : (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(i, {
                        size: `large`,
                        type: `primary`,
                        block: !0,
                        style: {
                            height: 60,
                            marginTop: 15
                        },
                        onClick: a,
                        children: `Start Game With Test Values`
                    }), (0, Y.jsx)(i, {
                        block: !0,
                        style: {
                            marginTop: 10
                        },
                        onClick: () => {
                            n.startGameWithMode === w.liveGame ? r(w.assignment) : r(w.liveGame)
                        },
                        children: n.startGameWithMode === w.liveGame ? `Live Game` : `Assignment`
                    })]
                }),
                onStateChange: t => e.current = t
            })
        })
    }),
    pt = v.div`
  padding: 2px 10px 40px 10px;
  color: ${ne.Black};
`,
    mt = x(() => {
        var e;
        let t = K(),
            n = ae();
        return !((e = t.hooks) != null && e.length) || !n ? (0, Y.jsx)(`div`, {
            style: {
                marginTop: 15
            },
            className: `maxWidth`,
            children: (0, Y.jsx)(ut, {})
        }) : (0, Y.jsxs)(d, {
            type: `card`,
            style: {
                width: `100%`,
                marginTop: 20
            },
            destroyInactiveTabPane: !0,
            children: [(0, Y.jsx)(d.TabPane, {
                tab: `Hooks`,
                children: (0, Y.jsx)(ut, {})
            }, `tab-hooks`), (0, Y.jsx)(d.TabPane, {
                tab: `Test Values`,
                children: (0, Y.jsx)(ft, {})
            }, `tab-test-values`)]
        })
    }),
    ht = () => (0, Y.jsx)(H, {
        children: (0, Y.jsxs)(gt, {
            children: [(0, Y.jsxs)(_t, {
                children: [I.name, `s`]
            }), (0, Y.jsxs)(vt, {
                children: [I.name, `s are options that game hosts can customize before playing your map. Use `, I.name, `s to allow game hosts to modify options such as game difficulty, time limits, or the kit students practice.`]
            }), (0, Y.jsx)(mt, {})]
        })
    }),
    gt = v.div.attrs({
        className: `flex-column flex-center maxWidth`
    })``,
    _t = v.div`
  font-size: 36px;
  font-weight: ${y.Bold};
`,
    vt = v.div`
  font-size: 18px;
  margin-top: 4px;
`,
    yt = U.createContext(G),
    bt = x(e => {
        let [n, r] = U.useState(!1), [i, a, o] = t(!1), s = k();
        U.useEffect(() => {
            r(!0);
            let e = oe().dispose;
            return () => e()
        }, []), U.useEffect(() => (window.addEventListener(`TEST_VALUES_VISIBLE`, a), window.addEventListener(`TEST_VALUES_HIDDEN`, o), () => {
            window.removeEventListener(`TEST_VALUES_VISIBLE`, a), window.removeEventListener(`TEST_VALUES_HIDDEN`, o)
        })), U.useEffect(() => {
            G.data = JSON.parse(e.stringifiedData)
        }, [e.stringifiedData]), U.useEffect(() => {
            s || c()
        }, [s]);
        let c = () => {
                r(!1)
            },
            l = k() && n;
        return (0, Y.jsx)(yt.Provider, {
            value: G,
            children: (0, Y.jsx)(f, {
                open: l,
                afterOpenChange: () => {
                    l || e.onClose()
                },
                onClose: c,
                placement: I.drawer.placement,
                closable: !0,
                width: i ? I.drawer.widths.testValues : I.drawer.widths.default,
                children: (0, Y.jsx)(ht, {})
            })
        })
    }),
    xt = x(() => {
        let {
            hooks: {
                hookJSON: e
            }
        } = T();
        return (0, Y.jsx)(bt, {
            stringifiedData: e,
            onClose: () => {
                O(C.none)
            }
        })
    });
export {
    xt as
    default
};