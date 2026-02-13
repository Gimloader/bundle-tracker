import {
    j as e,
    d as c,
    F as k,
    B as w,
    R as H,
    M as L,
    D as v,
    ar as m,
    a4 as S,
    b5 as f
} from "./_index.js";
import {
    o as y,
    a as T
} from "./mobxreact.esm.js";
import {
    D as A
} from "./TutorialConsts.js";
import {
    H as p
} from "./Hook.js";
import {
    S as M,
    J as K,
    u as j
} from "./App-41.js";
import {
    H as r,
    a as D,
    g as B,
    d as V,
    c as g,
    b as z
} from "./Header.js";
import {
    C as O
} from "./Button.js";
import {
    O as E,
    I as $
} from "./App-53.js";
import {
    D as F,
    M as b
} from "./index-10.js";
import {
    A as W
} from "./AccessibleAnchor.js";
import {
    S as C
} from "./index-8.js";
import {
    D as J
} from "./index-6.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./index-21.js";
import "./QuizTypes.js";
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
import "./index-3.js";
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
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
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
import "./ReplaceDevice.js";
import "./GetCurrentMapStyle.js";
import "./index-28.js";
import "./index-7.js";
import "./DownOutlined.js";
import "./LoadGoogleFontAfterSceneStart.js";
import "./useItemAmount.js";
import "./index-29.js";
import "./move.js";
const R = o => {
        M(K.hookOptionAction, {
            device: o.device,
            action: o.action,
            payload: o.payload
        })
    },
    u = o => {
        R(o)
    },
    x = {
        connect: "CONNECT",
        createLink: "CREATE_LINK",
        changeLinkOption: "CHANGE_LINK_OPTION",
        changeLinkValue: "CHANGE_LINK_VALUE",
        removeLink: "REMOVE_LINK",
        disconnect: "DISCONNECT"
    },
    _ = (o, i, n) => n === p.kit ? o.key === "kitId" && i === A.gimkitLiveQuestion : !(n === p.number && o.option.type !== E.numberInput),
    G = y(o => {
        var s;
        const {
            hooks: {
                hookJSON: i
            }
        } = j(), n = JSON.parse(i);
        return (s = n == null ? void 0 : n.hooks) != null && s.length ? e.jsxs(N, {
            children: [e.jsxs(P, {
                children: ["Choose a ", r.name.toLowerCase(), " to connect to..."]
            }), n.hooks.map(t => {
                const l = !_(o.option, o.deviceType, t.type),
                    h = () => {
                        l || u({
                            action: x.connect,
                            payload: {
                                hook: t.key,
                                option: o.option.key
                            },
                            device: o.deviceId
                        })
                    };
                return e.jsx(D, {
                    style: {
                        marginBottom: 10,
                        cursor: l ? "not-allowed" : "pointer",
                        background: l ? "#e0e0e0" : O.White
                    },
                    onClick: h,
                    children: e.jsxs("div", {
                        className: "flex-column",
                        style: {
                            alignItems: "flex-start"
                        },
                        children: [e.jsx(q, {
                            children: B(t.type)
                        }), e.jsx(Q, {
                            children: t.key
                        }), l && e.jsxs(Y, {
                            children: ["Cannot use ", r.name.toLowerCase(), " for this option"]
                        })]
                    })
                }, `${t.key}-option-connect`)
            })]
        }) : e.jsx(N, {
            children: e.jsxs("div", {
                className: "flex-column maxWidth flex-center",
                children: [e.jsx("div", {
                    style: {
                        fontSize: 42,
                        marginBottom: 10,
                        color: "#3949ab"
                    },
                    children: e.jsx("i", {
                        className: "fad fa-plus-square"
                    })
                }), e.jsxs(U, {
                    children: ["You haven't created any ", r.name.toLowerCase(), "s yet. Create one first and then come back here to connect this option to that", " ", r.name.toLowerCase(), "."]
                })]
            })
        })
    }),
    N = c.div``,
    U = c.div`
  font-size: 18px;
`,
    P = c.div`
  font-style: italic;
  font-size: 16px;
  margin-bottom: 20px;
`,
    q = c.div`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${k.Normal};
`,
    Q = c.div``,
    Y = c.div`
  background: #e53935;
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${k.Normal};
  color: ${O.White};
  padding: 10px 12px;
  border-radius: 8px;
  line-height: 1;
`,
    X = o => {
        const i = () => {
                L.confirm({
                    title: `Are you sure you want to disconnect this option from this ${r.name.toLowerCase()}?`,
                    onOk: () => {
                        u({
                            action: x.disconnect,
                            device: o.deviceId,
                            payload: {
                                option: o.optionKey
                            }
                        }), o.close()
                    }
                })
            },
            n = () => e.jsx(b, {
                children: e.jsxs(b.Item, {
                    onClick: i,
                    children: ["Disconnect From ", r.name]
                })
            });
        return e.jsxs("div", {
            className: "flex between vc",
            children: [e.jsx("div", {
                children: e.jsx(V, {
                    title: o.optionName,
                    descriptor: o.connectionName || `Connect ${r.name}`
                })
            }), e.jsx("div", {
                style: {
                    marginLeft: 10
                },
                children: o.connectionName ? e.jsx(F, {
                    overlay: n(),
                    children: e.jsx(w, {
                        shape: "circle",
                        icon: e.jsx(H, {}),
                        type: "dashed"
                    })
                }) : null
            })]
        })
    },
    I = o => e.jsxs(ee, {
        children: [e.jsx("div", {
            children: e.jsx("i", {
                style: {
                    color: "#388e3c",
                    fontSize: 32
                },
                className: "fas fa-check"
            })
        }), e.jsxs(oe, {
            children: [r.name, " connected!"]
        }), e.jsxs(te, {
            children: ["The value of this ", r.name.toLowerCase(), " will be the value of this option."]
        }), o.children]
    }),
    Z = () => e.jsx(I, {}),
    ee = c.div.attrs({
        className: "flex-column flex-center"
    })``,
    oe = c.div`
  font-weight: ${k.Bold};
  font-size: 24px;
  margin-top: 10px;
`,
    te = c.div`
  font-size: 16px;
  margin-top: 4px;
`,
    ie = T(o => {
        const {
            hooks: {
                hookJSON: i
            }
        } = j(), n = JSON.parse(i).hooks.find(a => a.key === o.connection.hook);
        if (!n || n.type !== p.number) return null;
        const s = n.options || {},
            t = o.option.option.props || {},
            l = () => {
                const a = [];
                return m.isNil(t.min) || (m.isNil(s.min) ? a.push({
                    key: "Minimum",
                    device: t.min
                }) : s.min < t.min && a.push({
                    key: "Minimum",
                    device: t.min,
                    hook: s.min
                })), m.isNil(t.max) || (m.isNil(s.max) && a.push({
                    key: "Maximum",
                    device: t.max
                }), s.max > t.max && a.push({
                    key: "Maximum",
                    device: t.max,
                    hook: s.max
                })), m.isNil(t.step) || (m.isNil(s.step) ? a.push({
                    key: "Step",
                    device: t.step
                }) : s.step !== t.step && a.push({
                    key: "Step",
                    device: t.step,
                    hook: s.step
                })), a
            },
            h = l();
        return e.jsx(I, {
            children: h.length ? e.jsxs(e.Fragment, {
                children: [e.jsx(v, {}), e.jsxs(se, {
                    children: [e.jsxs(re, {
                        children: ["This ", r.name.toLowerCase(), "'s settings are setup in a way that a user could enter a number not allowed for this device's option. ", e.jsx("br", {}), " ", e.jsx("br", {}), " If a number invalid for this device's option is used, the value set on the device itself will be used."]
                    }), l().map(a => e.jsx(ne, {
                        name: a.key,
                        deviceValue: a.device,
                        hookValue: a.hook
                    }, a.key))]
                })]
            }) : null
        })
    }),
    ne = o => {
        const {
            name: i,
            deviceValue: n,
            hookValue: s
        } = o, t = () => m.isNil(s) ? e.jsxs(e.Fragment, {
            children: ["This device's option has a ", e.jsx("b", {
                children: i.toLowerCase()
            }), " of", " ", e.jsx("b", {
                children: f(n)
            }), ", but no ", i.toLowerCase(), " is set on the ", r.name.toLowerCase(), "."]
        }) : e.jsxs(e.Fragment, {
            children: ["This device's option has a ", e.jsx("b", {
                children: i.toLowerCase()
            }), " of", " ", e.jsx("b", {
                children: f(n)
            }), ", but the", " ", r.name.toLowerCase(), " value is set to", " ", e.jsx("b", {
                children: f(s)
            })]
        });
        return e.jsx(S, {
            style: {
                marginBottom: 10
            },
            type: "warning",
            message: t()
        })
    },
    se = c.div`
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`,
    re = c.div`
  font-size: 16px;
  margin-bottom: 18px;
`,
    ae = y(o => {
        const {
            hooks: {
                hookJSON: i
            }
        } = j(), n = () => {
            u({
                action: x.createLink,
                payload: {
                    option: o.connection.option,
                    hook: o.connection.hook
                },
                device: o.deviceId
            })
        }, s = o.connection.options, t = Object.keys(s.valueMap), l = JSON.parse(i).hooks.find(d => d.key === o.connection.hook);
        if (!l) return null;
        const h = l.options;
        if (!h.options.length) return e.jsxs("div", {
            style: {
                fontSize: 16
            },
            children: ["Before you can connect the ", r.name.toLowerCase(), " to this option, you need to add selectable options. Go modify your", " ", r.name.toLowerCase(), " to include options and then come back here!"]
        });
        if (!t.length) return e.jsx(le, {
            createLink: n
        });
        const a = h.options.filter(d => !t.includes(d));
        return e.jsxs(de, {
            children: [t.map(d => e.jsx(ce, {
                option: o.option,
                selectKey: d,
                selectValue: o.connection.options.valueMap[d],
                selectOptions: [d, ...a],
                deviceId: o.deviceId,
                hookId: o.connection.hook
            }, d + "-hook-option")), a.length ? e.jsxs(e.Fragment, {
                children: [e.jsx(v, {}), e.jsx(w, {
                    size: "large",
                    type: "primary",
                    block: !0,
                    style: {
                        height: 60
                    },
                    onClick: n,
                    children: "Add Another Link"
                })]
            }) : null]
        })
    }),
    ce = o => {
        const i = t => {
                u({
                    action: x.changeLinkOption,
                    device: o.deviceId,
                    payload: {
                        option: o.option.key,
                        hook: o.hookId,
                        currentOption: o.selectKey,
                        newOption: t
                    }
                })
            },
            n = t => {
                u({
                    action: x.changeLinkValue,
                    device: o.deviceId,
                    payload: {
                        option: o.option.key,
                        hook: o.hookId,
                        key: o.selectKey,
                        value: t
                    }
                })
            },
            s = () => {
                L.confirm({
                    title: "Are you sure you want to remove this link?",
                    onOk: () => {
                        u({
                            action: x.removeLink,
                            device: o.deviceId,
                            payload: {
                                option: o.option.key,
                                hook: o.hookId,
                                key: o.selectKey
                            }
                        })
                    }
                })
            };
        return e.jsxs(me, {
            children: [e.jsxs(g, {
                children: [r.name, " Value"]
            }), e.jsx(C, {
                style: {
                    width: "100%"
                },
                value: o.selectKey,
                placeholder: "Choose a value...",
                onChange: i,
                children: o.selectOptions.map(t => e.jsx(C.Option, {
                    value: t,
                    children: t
                }, t + o.selectKey))
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx(g, {
                children: "Option Value"
            }), e.jsx($, {
                option: o.option.option,
                value: o.selectValue,
                onChange: n,
                readOnly: !1
            }), e.jsx("div", {
                style: {
                    height: 15
                }
            }), e.jsx("div", {
                className: "maxWidth flex",
                style: {
                    justifyContent: "flex-end"
                },
                children: e.jsx(W, {
                    onClick: s,
                    children: "Remove link"
                })
            })]
        })
    },
    le = o => e.jsxs("div", {
        className: "flex-column flex-center",
        style: {
            background: "#eceff1",
            padding: 40,
            borderRadius: 6,
            border: "1px dashed rgba(0, 0, 0, 0.5)",
            cursor: "pointer"
        },
        onClick: o.createLink,
        children: [e.jsx("div", {
            style: {
                fontWeight: k.Bold,
                fontSize: 18,
                marginBottom: 6
            },
            children: "Create new link"
        }), e.jsxs("div", {
            children: ["Link the value of a ", r.name.toLowerCase(), " to the value of this option"]
        })]
    }),
    de = c.div``,
    me = c.div.attrs({
        className: "light-shadow"
    })`
  background: #fafafa;
  padding: 30px;
  border-radius: 6px;
  margin-bottom: 20px;
`,
    Fo = y(o => {
        var s, t;
        const i = (t = (s = o.hooks) == null ? void 0 : s.connections) == null ? void 0 : t.find(l => l.option === o.option.key),
            n = () => {
                if (i) {
                    if (i.hookType === p.selectBox) return e.jsx(ae, {
                        option: o.option,
                        connection: i,
                        deviceId: o.deviceId
                    });
                    if (i.hookType === p.kit) return e.jsx(Z, {});
                    if (i.hookType === p.number) return e.jsx(ie, {
                        option: o.option,
                        connection: i
                    })
                }
                return e.jsx(G, {
                    option: o.option,
                    deviceId: o.deviceId,
                    deviceType: o.deviceType
                })
            };
        return e.jsx(J, {
            open: o.visible,
            onClose: o.close,
            width: r.drawer.widths.default,
            placement: r.drawer.placement,
            closable: !0,
            children: e.jsxs(z, {
                children: [e.jsx(X, {
                    optionName: o.option.option.label,
                    optionKey: o.option.key,
                    deviceId: o.deviceId,
                    connectionName: i == null ? void 0 : i.hook,
                    close: o.close
                }), e.jsx(v, {}), n()]
            })
        })
    });
export {
    Fo as
    default
};