import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t,
    Z as n,
    x as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./message.js";
import {
    t as o
} from "./modal-1.js";
import {
    t as s
} from "./button-1.js";
import {
    t as c
} from "./input.js";
import {
    c as l,
    i as u,
    l as d,
    o as f,
    s as p,
    u as m
} from "./useDeviceEditingEssentials.js";
import {
    t as h
} from "./drawer.js";
import {
    t as g
} from "./space.js";
import {
    t as _
} from "./typography.js";
import {
    m as v
} from "./decorate.js";
import {
    t as y
} from "./jsx-runtime.js";
import {
    t as b
} from "./useTimeout.js";
import {
    c as x,
    l as S,
    s as C,
    t as w,
    v as T,
    y as E
} from "./_index.js";
import {
    r as D
} from "./mobxreact.esm.js";
import {
    t as O
} from "./Centered.js";
import {
    n as k
} from "./Button-2.js";
import {
    t as ee
} from "./lodash.js";
import {
    t as te
} from "./motion.js";
import {
    t as ne
} from "./phaser.js";
import {
    t as A
} from "./stores-2.js";
import {
    t as j
} from "./useStore.js";
import {
    t as re
} from "./FetchMyId.js";
import {
    n as M,
    t as N
} from "./Send.js";
import {
    r as ie
} from "./isModeType.js";
import {
    t as P
} from "./CapitalizeFirstLetter.js";
import {
    t as ae
} from "./IsRoleLevelBetween.js";
import {
    n as oe
} from "./module-2.js";
import {
    L as se,
    j as F,
    ot as I
} from "./App-42.js";
import {
    t as L
} from "./StopPropagation.js";
import {
    n as ce,
    r as le
} from "./App-68.js";
var R = e(i()),
    ue = e(ne()),
    z = {
        Animation: {
            durationSeconds: .2,
            easeType: `easeOut`,
            container: {
                background: {
                    inactive: `rgba(0,0,0,0)`,
                    active: `rgba(0,0,0,0.6)`
                }
            },
            content: {
                home: {
                    initial: {
                        y: 40,
                        opacity: 0
                    },
                    active: {
                        y: 0,
                        opacity: 1
                    }
                },
                codegrid: {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    active: {
                        opacity: 1,
                        y: 0
                    },
                    leave: {
                        opacity: 0,
                        y: 20
                    }
                }
            }
        }
    },
    B = e(d());

function de(e, t) {
    let n = null,
        r = null;
    return [(...i) => {
        r = () => {
            n = null, e(...i)
        }, n != null && clearTimeout(n), n = window.setTimeout(r, t)
    }, () => {
        n != null && (clearTimeout(n), r && r())
    }]
}

function fe(e, t, n) {
    try {
        return t.getAllBlocks(!1).length > 0 ? void 0 : (B.default.Xml.domToWorkspace(B.default.Xml.textToDom(e), t), !0)
    } catch (e) {
        return n && n(e), !1
    }
}

function V(e, t, n) {
    try {
        return B.default.serialization.workspaces.load(e, t), !0
    } catch (e) {
        return n && n(e), !1
    }
}
var pe = ({
        ref: e,
        initialXml: t,
        initialJson: n,
        toolboxConfiguration: r,
        workspaceConfiguration: i,
        onWorkspaceChange: a,
        onImportXmlError: o,
        onImportError: s,
        onInject: c,
        onDispose: l
    }) => {
        s = s ?? o;
        let [u, d] = R.useState(null), [f, p] = R.useState(t || null), [m, h] = R.useState(n || null), [g, _] = R.useState(!1), [v, y] = R.useState(!1), b = R.useRef(i);
        R.useEffect(() => {
            b.current = i
        }, [i]);
        let x = R.useRef(r);
        R.useEffect(() => {
            x.current = r, r && u && u.updateToolbox(r)
        }, [r, u]);
        let S = R.useRef(c),
            C = R.useRef(l);
        R.useEffect(() => {
            S.current = c
        }, [c]), R.useEffect(() => {
            C.current = l
        }, [l]);
        let w = R.useCallback(e => {
            a && a(e)
        }, [a]);
        return R.useEffect(() => {
            if (!e.current) return;
            let t = B.default.inject(e.current, {
                ...b.current,
                toolbox: x.current
            });
            d(t), _(!1), y(!1), S.current && S.current(t);
            let n = C.current;
            return () => {
                t.dispose(), n && n(t)
            }
        }, [e]), R.useEffect(() => {
            u && !v && w(u)
        }, [w, v, u]), R.useEffect(() => {
            if (u == null) return;
            let e = () => {
                w(u)
            };
            return u.addChangeListener(e), () => {
                u.removeChangeListener(e)
            }
        }, [u, w]), R.useEffect(() => {
            if (u == null) return;
            let [e, t] = de(() => {
                let e = B.default.Xml.domToText(B.default.Xml.workspaceToDom(u));
                if (e === f) return;
                let t = B.default.serialization.workspaces.save(u);
                h(t), p(e)
            }, 200);
            return u.addChangeListener(e), () => {
                u.removeChangeListener(e), t()
            }
        }, [u, f]), R.useEffect(() => {
            if (f && u && !g) fe(f, u, s) || p(null), _(!0);
            else if (m && u && !g) {
                V(m, u, s) || h(null);
                let e = B.default.Xml.domToText(B.default.Xml.workspaceToDom(u));
                p(e), _(!0)
            }
        }, [m, f, u, g, s]), {
            workspace: u,
            xml: f,
            json: m
        }
    },
    H = e(n()),
    U = y(),
    me = {
        initialXml: H.default.string,
        initialJson: H.default.object,
        toolboxConfiguration: H.default.object,
        workspaceConfiguration: H.default.object,
        className: H.default.string,
        onWorkspaceChange: H.default.func,
        onImportXmlError: H.default.func,
        onImportError: H.default.func,
        onXmlChange: H.default.func,
        onJsonChange: H.default.func,
        onInject: H.default.func,
        onDispose: H.default.func
    },
    he = {
        initialXml: null,
        initialJson: null,
        toolboxConfiguration: null,
        workspaceConfiguration: null,
        className: null,
        onWorkspaceChange: null,
        onImportXmlError: null,
        onImportError: null,
        onXmlChange: null,
        onJsonChange: null,
        onInject: null,
        onDispose: null
    };

function W({
    initialXml: e,
    initialJson: t,
    toolboxConfiguration: n,
    workspaceConfiguration: r,
    className: i,
    onWorkspaceChange: a,
    onXmlChange: o,
    onJsonChange: s,
    onImportXmlError: c,
    onImportError: l,
    onInject: u,
    onDispose: d
}) {
    let f = R.useRef(null),
        {
            xml: p,
            json: m
        } = pe({
            ref: f,
            initialXml: e,
            initialJson: t,
            toolboxConfiguration: n,
            workspaceConfiguration: r,
            onWorkspaceChange: a,
            onImportXmlError: c,
            onImportError: l,
            onInject: u,
            onDispose: d
        }),
        h = R.useRef(o);
    R.useEffect(() => {
        h.current = o
    }, [o]);
    let g = R.useRef(s);
    return R.useEffect(() => {
        g.current = s
    }, [s]), R.useEffect(() => {
        h.current && p && h.current(p), g.current && m && g.current(m)
    }, [p, m]), (0, U.jsx)(`div`, {
        className: i,
        ref: f
    })
}
W.propTypes = me, W.defaultProps = he;
var ge = w(),
    G = new Set,
    _e = e => {
        let t = document.createElement(`div`);
        document.body.appendChild(t);
        let n = (0, ge.createRoot)(t),
            r = () => {
                K(n)
            };
        n.render((0, U.jsx)(ye, {
            ...e,
            afterClose: r
        }))
    },
    ve = () => {
        G.forEach(e => {
            K(e)
        })
    },
    K = e => {
        e.unmount(), G.delete(e)
    },
    ye = e => {
        let [t, n] = R.useState(!0), r = () => n(!1), i = e.content, a = e.modalProps ? e.modalProps({
            close: r
        }) : {};
        return (0, U.jsx)(o, {
            ...a,
            afterClose: e.afterClose,
            open: t,
            children: (0, U.jsx)(i, {
                close: r
            })
        })
    };
B.default.alert = (e, t) => {
    o.info({
        title: e,
        onOk: t
    })
}, B.default.confirm = (e, t) => {
    o.confirm({
        title: e,
        onOk: () => t(!0),
        onCancel: () => t(!1)
    })
}, B.default.prompt = (e, t, n) => {
    _e({
        modalProps: e => ({
            footer: null,
            closable: !1,
            style: {
                top: 35
            },
            onCancel: () => {
                n(``), e.close()
            }
        }),
        content: r => (0, U.jsx)(be, {
            message: e,
            defaultValue: t,
            callback: e => {
                n(e), r.close()
            }
        })
    })
};
var be = e => {
        let [t, n] = R.useState(e.defaultValue), r = e => {
            n(e.target.value)
        }, i = () => {
            e.callback(``)
        }, a = () => {
            e.callback(t)
        }, o = e.message.includes(`variable`);
        return (0, U.jsxs)(xe, {
            children: [(0, U.jsx)(Se, {
                children: e.message
            }), (0, U.jsx)(c, {
                size: `large`,
                value: t,
                onChange: r,
                placeholder: o ? `Variable name...` : ``,
                onPressEnter: a,
                autoFocus: !0
            }), (0, U.jsx)(Ce, {
                children: (0, U.jsxs)(we, {
                    children: [(0, U.jsx)(s, {
                        onClick: i,
                        style: {
                            marginRight: 6
                        },
                        children: `Cancel`
                    }), (0, U.jsx)(s, {
                        onClick: a,
                        type: `primary`,
                        children: `Submit`
                    })]
                })
            })]
        })
    },
    xe = S.div`
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`,
    Se = S.div`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 3px;
`,
    Ce = S.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,
    we = S.div`
  display: flex;
`,
    q = {
        triggerOnly: {
            name: `For This Block`,
            color: `#FFBF00`
        },
        deviceOnly: {
            name: `For This Device`,
            color: `#FFBF00`
        }
    },
    J = e => {
        let t = A.worldOptions.codeGrids.customBlocksParsed.find(t => t.type === e);
        if (!t) return !0;
        let n = t.minimumRoleLevel,
            r = t.maximumRoleLevel;
        return ae(n, r)
    },
    Y = (e, t) => {
        let n = e.deviceOption.codeGridSchema.customBlocks || [],
            r = (t == null ? void 0 : t.customBlocks) || [];
        return t != null && t.blockedCustomBlocks && (n = n.filter(e => {
            var n;
            return !((n = t.blockedCustomBlocks) != null && n.includes(e))
        })), {
            deviceSpecificBlocks: n,
            triggerSpecificBlocks: r
        }
    },
    Te = (e, t) => {
        var n;
        let r = [],
            i, a = [],
            o = ie(e);
        if (o) {
            var s;
            let n = (s = A.world.devices.codeGrids.get(e)) == null || (s = s.items) == null ? void 0 : s.get(t);
            if (n) {
                let e = o.deviceOption.codeGridSchema.triggers.find(e => e.type === n.triggerType);
                if (e) {
                    var c;
                    i = Y(o, e), (c = e.blockedGlobalBlocks) != null && c.length && (a = e.blockedGlobalBlocks)
                } else i = Y(o)
            }
        }
        i && i.triggerSpecificBlocks.length && r.push({
            name: q.triggerOnly.name,
            color: q.triggerOnly.color,
            blocks: i.triggerSpecificBlocks.map(e => ({
                type: e
            })).filter(e => J(e.type))
        }), i != null && i.deviceSpecificBlocks.length && r.push({
            name: q.deviceOnly.name,
            color: q.triggerOnly.color,
            blocks: i.deviceSpecificBlocks.map(e => ({
                type: e
            })).filter(e => J(e.type))
        });
        let l = JSON.parse(((n = A.worldOptions) == null || (n = n.codeGrids) == null ? void 0 : n.blockCategories) || `[]`);
        return a.length && (l = l.map(e => ({
            ...e,
            blocks: e.blocks.filter(e => !a.includes(e.type))
        }))), r = [...r, ...l], {
            kind: `categoryToolbox`,
            contents: r.map(e => {
                let t = e.custom ? {
                    custom: e.custom
                } : {};
                return {
                    kind: `category`,
                    name: e.name,
                    colour: e.color,
                    expanded: !0,
                    contents: e.blocks.map(e => ({
                        kind: `block`,
                        type: e.type,
                        message0: e.type
                    })),
                    ...t
                }
            })
        }
    },
    X = (e, t) => {
        let n = R.useRef(0),
            r = R.useRef(),
            i = e => r.current = e,
            a = o => {
                let s = e[n.current];
                if (!s) n.current = 0, a(o);
                else if (s(o, r.current, i)) n.current += 1, n.current === e.length && (t(r.current), n.current = 0);
                else if (n.current === 0) return;
                else n.current = 0, a(o)
            };
        return [e => {
            a(e)
        }]
    },
    Z = e => [e => e.type === B.default.Events.TOOLBOX_ITEM_SELECT, (t, n, r) => t.type === B.default.Events.CREATE && t.json && t.json.type && e.some(e => t.json.type.includes(e)) ? (r({
        ...n,
        blockId: t.blockId
    }), !0) : !1, (e, t) => e.type === B.default.Events.SELECTED && e.newElementId && e.newElementId === t.blockId, (e, t) => !!(e.type === B.default.Events.BLOCK_DRAG && e.isStart && e.blockId === t.blockId), (e, t, n) => {
        if (e.type === B.default.Events.BLOCK_DRAG && !e.isStart && e.blockId === t.blockId) {
            var r;
            let i = (r = e.blocks) == null || (r = r[0]) == null ? void 0 : r.getRelativeToSurfaceXY();
            if (i) return n({
                ...t,
                x: i.x,
                y: i.y
            }), !0
        }
        return !1
    }],
    Ee = e => {
        let {
            text: t,
            location: n,
            workspace: r
        } = e, i = 0, a = 0;
        if (n) i = n.x, a = n.y;
        else {
            let e = r.getAllBlocks(!0);
            if (e.length) {
                let t = e[e.length - 1].getRelativeToSurfaceXY();
                i = t.x, a = t.y
            }
        }
        i += 40, a += 40, i = Math.round(i), a = Math.round(a);
        let o = B.default.serialization.workspaces.save(r);
        o.blocks || (o.blocks = {
            blocks: []
        }), o.blocks.blocks.push({
            type: `text`,
            x: i,
            y: a,
            fields: {
                TEXT: t
            }
        }), B.default.serialization.workspaces.load(o, r)
    },
    De = {
        debouncedSaveDurationMs: 150
    },
    Oe = e => {
        N(M.setCodeGridJSON, {
            json: e.json,
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    ke = 512;
B.default.FieldTextInput.prototype.doClassValidation_ = function(e) {
    return e.substring(0, ke)
};
var Ae = D(R.forwardRef((e, t) => {
        let {
            memorySystem: n
        } = j();
        l();
        let [r, i] = R.useState(e.gridJSON), a = R.useRef(), o = R.useRef(), [s] = X(Z([p.messageBroadcaster, p.playerProximityMessageBroadcaster]), t => {
            e.isOwner && (t.x && t.y && (a.current = {
                x: t.x,
                y: t.y
            }), e.openChannelBrowser())
        }), [c] = X(Z([p.getProperty, p.setProperty, p.playerProximityGetProperty, p.playerProximitySetProperty]), t => {
            e.isOwner && (t.x && t.y && (a.current = {
                x: t.x,
                y: t.y
            }), e.openPropertyBrowser())
        });
        R.useEffect(() => {
            u(e.gridJSON)
        }, [e.gridJSON]), R.useEffect(() => () => {
            ve()
        }, []);
        let u = t => {
                var n;
                e.isOwner || t !== r && (i(t), o == null || (n = o.current) == null || n.clear(), B.default.serialization.workspaces.load(JSON.parse(t), o.current))
            },
            d = oe(t => {
                e.isOwner && t !== r && (Oe({
                    json: t,
                    deviceId: e.deviceId,
                    gridId: e.gridId
                }), i(t))
            }, De.debouncedSaveDurationMs),
            f = R.useMemo(() => Te(e.deviceId, e.gridId), []);
        R.useImperativeHandle(t, () => ({
            addTextBlock: m
        }));
        let m = t => {
                e.isOwner && Ee({
                    text: t,
                    location: a.current,
                    workspace: o.current
                })
            },
            h = () => {
                let t = B.default.serialization.workspaces.save(o.current),
                    n = o.current.getAllBlocks(!1).length;
                e.onBlockCountChange(n), d(JSON.stringify(t))
            },
            g = t => {
                var n;
                o.current = t, (n = o.current) == null || n.addChangeListener(t => {
                    e.isOwner && (s(t), c(t), h())
                })
            },
            _ = r === `` ? {} : JSON.parse(r);
        return (0, U.jsx)(W, {
            toolboxConfiguration: e.isOwner ? f : void 0,
            initialJson: _,
            className: `fill-height`,
            onInject: g,
            workspaceConfiguration: {
                readOnly: !e.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: n.limits.blocksPerCodeGrid,
                move: {
                    drag: !1
                },
                grid: {
                    spacing: 20,
                    length: 2,
                    colour: `#ccc`,
                    snap: !0
                }
            }
        })
    })),
    je = e => (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(_.Text, {
            style: {
                fontFamily: x.FugazOne,
                textTransform: `uppercase`,
                color: `rgba(255,255,255,0.6)`,
                fontSize: 14
            },
            children: P(m.grid.singular)
        }), (0, U.jsx)(_.Title, {
            level: 3,
            style: {
                color: k.White,
                marginTop: 2
            },
            children: ce(e.deviceId, e.gridId)
        })]
    }),
    Me = e => {
        let {
            memorySystem: t
        } = j();
        return (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsxs)(g, {
                direction: `horizontal`,
                size: 10,
                style: {
                    marginTop: 30
                },
                children: [(0, U.jsx)(s, {
                    onClick: e.openChannelBrowser,
                    type: `primary`,
                    children: `Channel Browser`
                }), (0, U.jsx)(s, {
                    onClick: e.openPropertyBrowser,
                    type: `primary`,
                    children: `Property Browser`
                })]
            }), (0, U.jsx)(`div`, {
                style: {
                    marginTop: 6
                },
                children: (0, U.jsxs)(_.Text, {
                    style: {
                        color: `rgba(255,255,255,0.6)`
                    },
                    children: [r(e.blockCount), `/`, r(t.limits.blocksPerCodeGrid), ` `, m.blocklyBlock.plural, ` placed`]
                })
            })]
        })
    },
    Ne = e => {
        let t = A.characters.characters.get(e);
        return t ? t.name : `Player`
    },
    Pe = e => e.gridOwner ? (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(E, {
            style: {
                background: `#8b8b8b`
            }
        }), (0, U.jsx)(`div`, {
            children: (0, U.jsxs)(_.Text, {
                children: [(0, U.jsx)(`span`, {
                    style: {
                        fontWeight: C.Bold
                    },
                    children: Ne(e.gridOwner)
                }), ` `, `is currently editing this block. Only one person can edit a block at a time.`]
            })
        })]
    }) : null,
    Fe = e => (0, U.jsx)(Q, {
        children: (0, U.jsxs)(Ie, {
            children: [(0, U.jsx)(je, {
                deviceId: e.deviceId,
                gridId: e.gridId
            }), e.isOwner ? (0, U.jsx)(Me, {
                blockCount: e.blockCount,
                openChannelBrowser: e.openChannelBrowser,
                openPropertyBrowser: e.openPropertyBrowser
            }) : (0, U.jsx)(Pe, {
                gridOwner: e.gridOwner
            })]
        })
    }),
    Q = S(O).attrs({
        className: `maxAll`
    })`
  flex-shrink: 0;
  color: ${k.White};
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`,
    Ie = S.div``;
S.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;
var Le = S(te.div).attrs({
        className: `flex medium-shadow`
    })`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${k.Black};
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`,
    Re = S(O).attrs({
        className: `maxAll`
    })``,
    ze = S.div.attrs({
        className: `maxAll`
    })`
  .fill-height {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border-width: 0px;
    border-radius: 5px;
    overflow: hidden;
  }
  .blocklyToolboxDiv {
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(3px);
  }
  .blocklySvg {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .blocklyTrash {
    filter: brightness(2);
  }
`,
    Be = e => {
        let {
            deviceId: t,
            gridId: n,
            gridOwner: r,
            gridVisitors: i,
            gridJSON: a,
            switchToHomeScreen: o,
            openChannelBrowser: s,
            channelBrowserOpen: c,
            openPropertyBrowser: l,
            propertyBrowserOpen: u,
            editorRef: d
        } = e, f = (re() === r || !i.length || !r) && le();
        return (0, U.jsx)(Re, {
            onClick: e => {
                L(e), o()
            },
            children: (0, U.jsxs)(Le, {
                initial: z.Animation.content.codegrid.initial,
                animate: z.Animation.content.codegrid.active,
                exit: z.Animation.content.codegrid.leave,
                transition: {
                    duration: z.Animation.durationSeconds,
                    ease: z.Animation.easeType
                },
                onClick: e => e.stopPropagation(),
                children: [(0, U.jsx)(se, {
                    onClick: o,
                    color: k.White,
                    padding: 25
                }), (0, U.jsx)(ze, {
                    children: (0, U.jsx)(Ae, {
                        ref: d,
                        deviceId: t,
                        gridJSON: a,
                        gridId: n,
                        onBlockCountChange: e.setGridBlockCount,
                        isOwner: f,
                        openChannelBrowser: s,
                        channelBrowserOpen: c,
                        openPropertyBrowser: l,
                        propertyBrowserOpen: u
                    }, `blockly-editor-${String(f)}`)
                }), (0, U.jsx)(Fe, {
                    deviceId: t,
                    gridId: n,
                    isOwner: f,
                    gridOwner: r,
                    blockCount: e.gridBlockCount,
                    openChannelBrowser: s,
                    openPropertyBrowser: l
                })]
            })
        })
    },
    Ve = e => {
        N(M.leaveCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    He = e => {
        N(M.joinCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    Ue = ee(),
    We = e => {
        let {
            token: {
                borderRadius: t
            }
        } = T.useToken();
        return (0, U.jsx)(Ge, {
            borderRadius: t,
            focused: e.focused,
            onClick: e.onSelect,
            children: (0, U.jsx)(_.Text, {
                children: e.name
            })
        })
    },
    Ge = S.div`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?`#ffca28`:`rgba(255, 255, 255, 0.1)`};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,
    $ = e => {
        let [t, n] = R.useState(-1), [r, i] = R.useState(``), a = R.useRef(), o = u(e.category), s = e => {
            i(e.target.value), n(0)
        }, l = e => {
            if (i(``), n(-1), e) {
                var t;
                a == null || (t = a.current) == null || t.focus()
            }
        }, d = R.useMemo(() => (0, Ue.orderBy)(r ? o.filter(e => e.toLowerCase().includes(r.toLowerCase())) : o, [e => e.toLowerCase()], [`asc`]), [r]);
        I(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            let e = t + 1;
            d[e] && n(e)
        }, [d.length, t]), I(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (t === -1) return;
            let e = Math.max(0, t - 1);
            n(e)
        }, [d.length, t]);
        let f = () => {
                let e = d[t];
                if (e) p(e);
                else {
                    let e = r == null ? void 0 : r.trim();
                    e && p(e)
                }
            },
            p = t => {
                e.onItemSelected(t), e.close()
            };
        return (0, U.jsx)(`div`, {
            onClick: L,
            children: (0, U.jsxs)(h, {
                open: e.visible,
                onClose: t => {
                    t.stopPropagation(), e.close()
                },
                placement: `right`,
                width: 400,
                afterOpenChange: l,
                title: e.title,
                children: [(0, U.jsx)(c, {
                    ref: a,
                    size: `large`,
                    className: `maxWidth`,
                    placeholder: e.searchPlaceholder,
                    style: {
                        marginBottom: 20
                    },
                    allowClear: !0,
                    value: r,
                    onChange: s,
                    onPressEnter: f,
                    maxLength: 512
                }), o.length ? d.length ? (0, U.jsx)(g, {
                    className: `maxWidth`,
                    direction: `vertical`,
                    size: 8,
                    children: d.map((e, n) => (0, U.jsx)(We, {
                        name: e,
                        focused: t === n,
                        onSelect: () => p(e)
                    }, e))
                }) : (0, U.jsx)(_.Text, {
                    children: e.noResultsFilteredText
                }) : (0, U.jsx)(_.Text, {
                    children: e.noResultsText
                })]
            })
        })
    },
    Ke = D(e => {
        let {
            me: {
                editing: {
                    device: n
                }
            },
            world: {
                devices: {
                    codeGrids: r
                }
            },
            memorySystem: {
                limits: i
            }
        } = j(), [o, s, c] = t(!1), [l, u, d] = t(!1), [p, h] = R.useState(void 0), [g, _] = R.useState(0), [y, x] = R.useState(void 0), [S, C] = R.useState(void 0), w = R.useRef(), {
            start: T,
            clear: E
        } = b(() => {
            var t;
            (t = r.get(e.deviceId)) != null && t.items.has(n.currentlyEditedGridId) || (a.error(`This ${m.grid.singular} was deleted!`), e.close())
        }, 25), D = n.currentlyEditedGridId;
        return R.useEffect(() => (He({
            deviceId: e.deviceId,
            gridId: D
        }), () => {
            Ve({
                deviceId: e.deviceId,
                gridId: D
            })
        }), []), R.useEffect(() => {
            let t = v(() => {
                    var t;
                    return (t = r.get(e.deviceId)) == null ? void 0 : t.items.has(D)
                }, e => {
                    e || (E(), T())
                }, {
                    fireImmediately: !0
                }),
                n = v(() => {
                    var t;
                    return (t = r.get(e.deviceId)) == null || (t = t.items) == null || (t = t.get(D)) == null ? void 0 : t.visitors
                }, e => {
                    e && x(e)
                }, {
                    fireImmediately: !0
                }),
                i = v(() => {
                    var t;
                    return (t = r.get(e.deviceId)) == null || (t = t.items) == null || (t = t.get(D)) == null ? void 0 : t.json
                }, e => {
                    e !== void 0 && h(e)
                }, {
                    fireImmediately: !0
                }),
                a = v(() => {
                    var t;
                    return (t = r.get(e.deviceId)) == null || (t = t.items) == null || (t = t.get(D)) == null ? void 0 : t.owner
                }, e => {
                    e !== void 0 && C(e)
                }, {
                    fireImmediately: !0
                });
            return () => {
                E(), t(), n(), i(), a()
            }
        }, []), I(ue.default.Input.Keyboard.KeyCodes.ESC, e.close), p === void 0 || y === void 0 || S === void 0 ? null : (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsx)(Be, {
                deviceId: e.deviceId,
                gridId: D,
                gridJSON: p,
                gridVisitors: y,
                gridOwner: S,
                gridBlockCount: g,
                setGridBlockCount: _,
                switchToHomeScreen: () => {
                    e.close()
                },
                openChannelBrowser: s,
                channelBrowserOpen: o,
                openPropertyBrowser: u,
                propertyBrowserOpen: l,
                editorRef: w
            }), (0, U.jsx)($, {
                visible: o,
                close: c,
                title: `Channel Browser`,
                searchPlaceholder: `Search channels...`,
                category: f.channel,
                noResultsText: `All the channels you broadcast on and listen to will appear here!`,
                noResultsFilteredText: `No channels matching your search. Press Enter to add the channel currently in the search bar!`,
                onItemSelected: e => {
                    var t;
                    g >= i.blocksPerCodeGrid || w == null || (t = w.current) == null || t.addTextBlock(e)
                }
            }), (0, U.jsx)($, {
                visible: l,
                close: d,
                title: `Property Browser`,
                searchPlaceholder: `Search properties...`,
                category: f.property,
                noResultsText: `Properties you create using the Property ${P(F.device.singular)} will show up here!`,
                noResultsFilteredText: `No properties match your search. Press Enter to add the property
        currently in the search bar. Remember to add a corresponding Property
        ${P(F.device.singular)} to your map!`,
                onItemSelected: e => {
                    var t;
                    g >= i.blocksPerCodeGrid || w == null || (t = w.current) == null || t.addTextBlock(e)
                }
            })]
        })
    });
export {
    Ke as
    default
};