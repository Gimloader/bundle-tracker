import {
    x as p,
    j as s,
    b4 as T,
    r as y,
    U as fe,
    B as Q,
    b5 as Z,
    D as pe,
    F as he,
    d as R,
    cm as ge,
    ar as ye,
    u as ee,
    dO as J
} from "./_index.js";
import {
    $ as x,
    z as ke,
    w as xe,
    S as H,
    J as V,
    u as U,
    ba as be,
    T as Ce,
    q as we,
    o as K,
    M as te
} from "./App-41.js";
import {
    s as M,
    P as ve
} from "./FixSpinePlugin.js";
import {
    o as le
} from "./mobxreact.esm.js";
import {
    N as Be,
    c as Ie
} from "./App-62.js";
import {
    a as Se
} from "./index-23.js";
import {
    B as N,
    M as Y,
    F as Te,
    a as re
} from "./App-53.js";
import {
    C as ae
} from "./Centered.js";
import {
    C as X
} from "./Button.js";
import {
    C as _
} from "./CapitalizeFirstLetter.js";
import {
    T as P
} from "./index-14.js";
import {
    S as de
} from "./index-2.js";
import {
    m as je
} from "./motion.js";
import {
    S as ue
} from "./StopPropagation.js";
import {
    D as Oe
} from "./index-6.js";
import {
    I as Ee
} from "./index-3.js";
import {
    u as Pe
} from "./useTimeout.js";
import {
    s as Re
} from "./index-4.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./howler.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./CheckOutlined.js";
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
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./ReactionToMultipleProps.js";
import "./FetchDeviceName.js";
import "./ReplaceDevice.js";
import "./index-29.js";
import "./index-8.js";
import "./DownOutlined.js";
import "./DeleteOutlined.js";
import "./GetCurrentMapStyle.js";
import "./index-28.js";
import "./index-7.js";
import "./LoadGoogleFontAfterSceneStart.js";
import "./useItemAmount.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
import "./useWarningOnMountInDevelopment.js";
const A = {
    Animation: {
        durationSeconds: .2,
        easeType: "easeOut",
        content: {
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
};

function Ge(e, t) {
    let r = null,
        o = null;
    return [(...c) => {
        o = () => {
            r = null, e(...c)
        }, r != null && clearTimeout(r), r = window.setTimeout(o, t)
    }, () => {
        r != null && (clearTimeout(r), o && o())
    }]
}

function Ne(e, t, r) {
    try {
        return t.getAllBlocks(!1).length > 0 ? void 0 : (x.Xml.domToWorkspace(x.Xml.textToDom(e), t), !0)
    } catch (o) {
        return r && r(o), !1
    }
}

function Fe(e, t, r) {
    try {
        return x.serialization.workspaces.load(e, t), !0
    } catch (o) {
        return r && r(o), !1
    }
}
const Ae = ({
        ref: e,
        initialXml: t,
        initialJson: r,
        toolboxConfiguration: o,
        workspaceConfiguration: l,
        onWorkspaceChange: i,
        onImportXmlError: c,
        onImportError: m,
        onInject: k,
        onDispose: f
    }) => {
        m = m ?? c;
        const [a, b] = p.useState(null), [h, n] = p.useState(t || null), [u, w] = p.useState(r || null), [d, v] = p.useState(!1), [B, z] = p.useState(!1), D = p.useRef(l);
        p.useEffect(() => {
            D.current = l
        }, [l]);
        const F = p.useRef(o);
        p.useEffect(() => {
            F.current = o, o && a && a.updateToolbox(o)
        }, [o, a]);
        const j = p.useRef(k),
            L = p.useRef(f);
        p.useEffect(() => {
            j.current = k
        }, [k]), p.useEffect(() => {
            L.current = f
        }, [f]);
        const G = p.useCallback(C => {
            i && i(C)
        }, [i]);
        return p.useEffect(() => {
            if (!e.current) return;
            const C = x.inject(e.current, {
                ...D.current,
                toolbox: F.current
            });
            b(C), v(!1), z(!1), j.current && j.current(C);
            const I = L.current;
            return () => {
                C.dispose(), I && I(C)
            }
        }, [e]), p.useEffect(() => {
            a && !B && G(a)
        }, [G, B, a]), p.useEffect(() => {
            if (a == null) return;
            const C = () => {
                G(a)
            };
            return a.addChangeListener(C), () => {
                a.removeChangeListener(C)
            }
        }, [a, G]), p.useEffect(() => {
            if (a == null) return;
            const [C, I] = Ge(() => {
                const S = x.Xml.domToText(x.Xml.workspaceToDom(a));
                if (S === h) return;
                const $ = x.serialization.workspaces.save(a);
                w($), n(S)
            }, 200);
            return a.addChangeListener(C), () => {
                a.removeChangeListener(C), I()
            }
        }, [a, h]), p.useEffect(() => {
            if (h && a && !d) Ne(h, a, m) || n(null), v(!0);
            else if (u && a && !d) {
                Fe(u, a, m) || w(null);
                const I = x.Xml.domToText(x.Xml.workspaceToDom(a));
                n(I), v(!0)
            }
        }, [u, h, a, d, m]), {
            workspace: a,
            xml: h,
            json: u
        }
    },
    De = {
        initialXml: T.string,
        initialJson: T.object,
        toolboxConfiguration: T.object,
        workspaceConfiguration: T.object,
        className: T.string,
        onWorkspaceChange: T.func,
        onImportXmlError: T.func,
        onImportError: T.func,
        onXmlChange: T.func,
        onJsonChange: T.func,
        onInject: T.func,
        onDispose: T.func
    },
    Le = {
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

function q({
    initialXml: e,
    initialJson: t,
    toolboxConfiguration: r,
    workspaceConfiguration: o,
    className: l,
    onWorkspaceChange: i,
    onXmlChange: c,
    onJsonChange: m,
    onImportXmlError: k,
    onImportError: f,
    onInject: a,
    onDispose: b
}) {
    const h = p.useRef(null),
        {
            xml: n,
            json: u
        } = Ae({
            ref: h,
            initialXml: e,
            initialJson: t,
            toolboxConfiguration: r,
            workspaceConfiguration: o,
            onWorkspaceChange: i,
            onImportXmlError: k,
            onImportError: f,
            onInject: a,
            onDispose: b
        }),
        w = p.useRef(c);
    p.useEffect(() => {
        w.current = c
    }, [c]);
    const d = p.useRef(m);
    return p.useEffect(() => {
        d.current = m
    }, [m]), p.useEffect(() => {
        w.current && n && w.current(n), d.current && u && d.current(u)
    }, [n, u]), s.jsx("div", {
        className: l,
        ref: h
    })
}
q.propTypes = De;
q.defaultProps = Le;
const W = {
        triggerOnly: {
            name: "For This Block",
            color: "#FFBF00"
        },
        deviceOnly: {
            name: "For This Device"
        }
    },
    oe = e => {
        const t = M.worldOptions.codeGrids.customBlocksParsed.find(l => l.type === e);
        if (!t) return !0;
        const r = t.minimumRoleLevel,
            o = t.maximumRoleLevel;
        return ke(r, o)
    },
    ne = (e, t) => {
        let r = e.deviceOption.codeGridSchema.customBlocks || [];
        const o = (t == null ? void 0 : t.customBlocks) || [];
        return t != null && t.blockedCustomBlocks && (r = r.filter(l => {
            var i;
            return !((i = t.blockedCustomBlocks) != null && i.includes(l))
        })), {
            deviceSpecificBlocks: r,
            triggerSpecificBlocks: o
        }
    },
    Je = (e, t) => {
        var k, f, a, b, h;
        let r = [],
            o, l = [];
        const i = xe(e);
        if (i) {
            const n = (f = (k = M.world.devices.codeGrids.get(e)) == null ? void 0 : k.items) == null ? void 0 : f.get(t);
            if (n) {
                const u = i.deviceOption.codeGridSchema.triggers.find(w => w.type === n.triggerType);
                u ? (o = ne(i, u), (a = u.blockedGlobalBlocks) != null && a.length && (l = u.blockedGlobalBlocks)) : o = ne(i)
            }
        }
        o && o.triggerSpecificBlocks.length && r.push({
            name: W.triggerOnly.name,
            color: W.triggerOnly.color,
            blocks: o.triggerSpecificBlocks.map(n => ({
                type: n
            })).filter(n => oe(n.type))
        }), o != null && o.deviceSpecificBlocks.length && r.push({
            name: W.deviceOnly.name,
            color: W.triggerOnly.color,
            blocks: o.deviceSpecificBlocks.map(n => ({
                type: n
            })).filter(n => oe(n.type))
        });
        let c = JSON.parse(((h = (b = M.worldOptions) == null ? void 0 : b.codeGrids) == null ? void 0 : h.blockCategories) || "[]");
        return l.length && (c = c.map(n => ({
            ...n,
            blocks: n.blocks.filter(u => !l.includes(u.type))
        }))), r = [...r, ...c], {
            kind: "categoryToolbox",
            contents: r.map(n => {
                const u = n.custom ? {
                    custom: n.custom
                } : {};
                return {
                    kind: "category",
                    name: n.name,
                    colour: n.color,
                    expanded: !0,
                    contents: n.blocks.map(w => ({
                        kind: "block",
                        type: w.type,
                        message0: w.type
                    })),
                    ...u
                }
            })
        }
    },
    se = (e, t) => {
        const r = y.useRef(0),
            o = y.useRef(),
            l = m => o.current = m,
            i = m => {
                const k = e[r.current];
                if (!k) {
                    r.current = 0, i(m);
                    return
                }
                if (k(m, o.current, l)) r.current = r.current + 1, r.current === e.length && (t(o.current), r.current = 0);
                else {
                    if (r.current === 0) return;
                    r.current = 0, i(m)
                }
            };
        return [m => {
            i(m)
        }]
    },
    ie = e => [t => t.type === x.Events.TOOLBOX_ITEM_SELECT, (t, r, o) => t.type === x.Events.CREATE && t.json && t.json.type && e.some(i => t.json.type.includes(i)) ? (o({
        ...r,
        blockId: t.blockId
    }), !0) : !1, (t, r) => t.type === x.Events.SELECTED ? t.newElementId && t.newElementId === r.blockId : !1, (t, r) => !!(t.type === x.Events.BLOCK_DRAG && t.isStart && t.blockId === r.blockId), (t, r, o) => {
        var l, i;
        if (t.type === x.Events.BLOCK_DRAG && !t.isStart && t.blockId === r.blockId) {
            const c = (i = (l = t.blocks) == null ? void 0 : l[0]) == null ? void 0 : i.getRelativeToSurfaceXY();
            if (c) return o({
                ...r,
                x: c.x,
                y: c.y
            }), !0
        }
        return !1
    }],
    We = e => {
        const {
            text: t,
            location: r,
            workspace: o
        } = e;
        let l = 0,
            i = 0;
        if (r) l = r.x, i = r.y;
        else {
            const m = o.getAllBlocks(!0);
            if (m.length) {
                const f = m[m.length - 1].getRelativeToSurfaceXY();
                l = f.x, i = f.y
            }
        }
        l += 40, i += 40, l = Math.round(l), i = Math.round(i);
        const c = x.serialization.workspaces.save(o);
        c.blocks || (c.blocks = {
            blocks: []
        }), c.blocks.blocks.push({
            type: "text",
            x: l,
            y: i,
            fields: {
                TEXT: t
            }
        }), x.serialization.workspaces.load(c, o)
    },
    Me = {
        debouncedSaveDurationMs: 150
    },
    Xe = e => {
        H(V.setCodeGridJSON, {
            json: e.json,
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    ze = 512;
x.FieldTextInput.prototype.doClassValidation_ = function(e) {
    return e.substring(0, ze)
};
const $e = le(y.forwardRef((e, t) => {
        const {
            memorySystem: r
        } = U(), [o, l] = y.useState(e.gridJSON), i = y.useRef(), c = y.useRef(), [m] = se(ie([N.messageBroadcaster, N.playerProximityMessageBroadcaster]), d => {
            e.isOwner && (d.x && d.y && (i.current = {
                x: d.x,
                y: d.y
            }), e.openChannelBrowser())
        }), [k] = se(ie([N.getProperty, N.setProperty, N.playerProximityGetProperty, N.playerProximitySetProperty]), d => {
            e.isOwner && (d.x && d.y && (i.current = {
                x: d.x,
                y: d.y
            }), e.openPropertyBrowser())
        });
        y.useEffect(() => {
            f(e.gridJSON)
        }, [e.gridJSON]), y.useEffect(() => () => {
            be()
        }, []);
        const f = d => {
                var v;
                e.isOwner || d !== o && (l(d), (v = c == null ? void 0 : c.current) == null || v.clear(), x.serialization.workspaces.load(JSON.parse(d), c.current))
            },
            a = Se(d => {
                e.isOwner && d !== o && (Xe({
                    json: d,
                    deviceId: e.deviceId,
                    gridId: e.gridId
                }), l(d))
            }, Me.debouncedSaveDurationMs),
            b = y.useMemo(() => Je(e.deviceId, e.gridId), []);
        y.useImperativeHandle(t, () => ({
            addTextBlock: h
        }));
        const h = d => {
                e.isOwner && We({
                    text: d,
                    location: i.current,
                    workspace: c.current
                })
            },
            n = () => {
                const d = x.serialization.workspaces.save(c.current),
                    v = c.current.getAllBlocks(!1).length;
                e.onBlockCountChange(v), a(JSON.stringify(d))
            },
            u = d => {
                var v;
                c.current = d, (v = c.current) == null || v.addChangeListener(B => {
                    e.isOwner && (m(B), k(B), n())
                })
            },
            w = o === "" ? {} : JSON.parse(o);
        return s.jsx(q, {
            toolboxConfiguration: e.isOwner ? b : void 0,
            initialJson: w,
            className: "fill-height",
            onInject: u,
            workspaceConfiguration: {
                readOnly: !e.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: r.limits.blocksPerCodeGrid,
                move: {
                    drag: !1
                },
                grid: {
                    spacing: 20,
                    length: 2,
                    colour: "#ccc",
                    snap: !0
                }
            }
        })
    })),
    Ke = e => s.jsxs(s.Fragment, {
        children: [s.jsx(P.Text, {
            style: {
                fontFamily: fe.FugazOne,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                fontSize: 14
            },
            children: _(Y.grid.singular)
        }), s.jsx(P.Title, {
            level: 3,
            style: {
                color: X.White,
                marginTop: 2
            },
            children: Be(e.deviceId, e.gridId)
        })]
    }),
    _e = e => {
        const {
            memorySystem: t
        } = U();
        return s.jsxs(s.Fragment, {
            children: [s.jsxs(de, {
                direction: "horizontal",
                size: 10,
                style: {
                    marginTop: 30
                },
                children: [s.jsx(Q, {
                    onClick: e.openChannelBrowser,
                    type: "primary",
                    children: "Channel Browser"
                }), s.jsx(Q, {
                    onClick: e.openPropertyBrowser,
                    type: "primary",
                    children: "Property Browser"
                })]
            }), s.jsx("div", {
                style: {
                    marginTop: 6
                },
                children: s.jsxs(P.Text, {
                    style: {
                        color: "rgba(255,255,255,0.6)"
                    },
                    children: [Z(e.blockCount), "/", Z(t.limits.blocksPerCodeGrid), " ", Y.blocklyBlock.plural, " placed"]
                })
            })]
        })
    },
    He = e => {
        const t = M.characters.characters.get(e);
        return t ? t.name : "Player"
    },
    Ve = e => e.gridOwner ? s.jsxs(s.Fragment, {
        children: [s.jsx(pe, {
            style: {
                background: "#8b8b8b"
            }
        }), s.jsx("div", {
            children: s.jsxs(P.Text, {
                children: [s.jsx("span", {
                    style: {
                        fontWeight: he.Bold
                    },
                    children: He(e.gridOwner)
                }), " ", "is currently editing this block. Only one person can edit a block at a time."]
            })
        })]
    }) : null,
    Ue = e => s.jsx(Ye, {
        children: s.jsxs(qe, {
            children: [s.jsx(Ke, {
                deviceId: e.deviceId,
                gridId: e.gridId
            }), e.isOwner ? s.jsx(_e, {
                blockCount: e.blockCount,
                openChannelBrowser: e.openChannelBrowser,
                openPropertyBrowser: e.openPropertyBrowser
            }) : s.jsx(Ve, {
                gridOwner: e.gridOwner
            })]
        })
    }),
    Ye = R(ae).attrs({
        className: "maxAll"
    })`
  flex-shrink: 0;
  color: ${X.White};
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`,
    qe = R.div``;
R.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;
const Qe = R(je.div).attrs({
        className: "flex medium-shadow"
    })`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${X.Black};
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`,
    Ze = R(ae).attrs({
        className: "maxAll"
    })``,
    et = R.div.attrs({
        className: "maxAll"
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
    tt = e => {
        const {
            deviceId: t,
            gridId: r,
            gridOwner: o,
            gridVisitors: l,
            gridJSON: i,
            switchToHomeScreen: c,
            openChannelBrowser: m,
            channelBrowserOpen: k,
            openPropertyBrowser: f,
            propertyBrowserOpen: a,
            editorRef: b
        } = e, h = (Ce() === o || !l.length || !o) && Ie();
        return s.jsx(Ze, {
            onClick: n => {
                ue(n), c()
            },
            children: s.jsxs(Qe, {
                initial: A.Animation.content.codegrid.initial,
                animate: A.Animation.content.codegrid.active,
                exit: A.Animation.content.codegrid.leave,
                transition: {
                    duration: A.Animation.durationSeconds,
                    ease: A.Animation.easeType
                },
                onClick: n => n.stopPropagation(),
                children: [s.jsx(we, {
                    onClick: c,
                    color: X.White,
                    padding: 25
                }), s.jsx(et, {
                    children: s.jsx($e, {
                        ref: b,
                        deviceId: t,
                        gridJSON: i,
                        gridId: r,
                        onBlockCountChange: e.setGridBlockCount,
                        isOwner: h,
                        openChannelBrowser: m,
                        channelBrowserOpen: k,
                        openPropertyBrowser: f,
                        propertyBrowserOpen: a
                    }, `blockly-editor-${String(h)}`)
                }), s.jsx(Ue, {
                    deviceId: t,
                    gridId: r,
                    isOwner: h,
                    gridOwner: o,
                    blockCount: e.gridBlockCount,
                    openChannelBrowser: m,
                    openPropertyBrowser: f
                })]
            })
        })
    },
    rt = e => {
        H(V.leaveCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    ot = e => {
        H(V.joinCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    nt = e => {
        const {
            token: {
                borderRadius: t
            }
        } = ge.useToken();
        return s.jsx(st, {
            borderRadius: t,
            focused: e.focused,
            onClick: e.onSelect,
            children: s.jsx(P.Text, {
                children: e.name
            })
        })
    },
    st = R.div`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?"#ffca28":"rgba(255, 255, 255, 0.1)"};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,
    ce = e => {
        const [t, r] = y.useState(-1), [o, l] = y.useState(""), i = y.useRef(), c = Te(e.category), m = n => {
            l(n.target.value), r(0)
        }, k = n => {
            var u;
            l(""), r(-1), n && ((u = i == null ? void 0 : i.current) == null || u.focus())
        }, f = y.useMemo(() => {
            const n = () => o ? c.filter(u => u.toLowerCase().includes(o.toLowerCase())) : c;
            return ye.orderBy(n(), [u => u.toLowerCase()], ["asc"])
        }, [o]);
        K(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            const n = t + 1;
            f[n] && r(n)
        }, [f.length, t]), K(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (t === -1) return;
            const n = Math.max(0, t - 1);
            r(n)
        }, [f.length, t]);
        const a = () => {
                const n = f[t];
                if (n) b(n);
                else {
                    const u = o == null ? void 0 : o.trim();
                    u && b(u)
                }
            },
            b = n => {
                e.onItemSelected(n), e.close()
            },
            h = () => c.length ? f.length ? s.jsx(de, {
                className: "maxWidth",
                direction: "vertical",
                size: 8,
                children: f.map((n, u) => s.jsx(nt, {
                    name: n,
                    focused: t === u,
                    onSelect: () => b(n)
                }, n))
            }) : s.jsx(P.Text, {
                children: e.noResultsFilteredText
            }) : s.jsx(P.Text, {
                children: e.noResultsText
            });
        return s.jsx("div", {
            onClick: ue,
            children: s.jsxs(Oe, {
                open: e.visible,
                onClose: n => {
                    n.stopPropagation(), e.close()
                },
                placement: "right",
                width: 400,
                afterOpenChange: k,
                title: e.title,
                children: [s.jsx(Ee, {
                    ref: i,
                    size: "large",
                    className: "maxWidth",
                    placeholder: e.searchPlaceholder,
                    style: {
                        marginBottom: 20
                    },
                    allowClear: !0,
                    value: o,
                    onChange: m,
                    onPressEnter: a,
                    maxLength: 512
                }), h()]
            })
        })
    },
    Jr = le(e => {
        const {
            me: {
                editing: {
                    device: t
                }
            },
            world: {
                devices: {
                    codeGrids: r
                }
            },
            memorySystem: {
                limits: o
            }
        } = U(), [l, i, c] = ee(!1), [m, k, f] = ee(!1), [a, b] = y.useState(void 0), [h, n] = y.useState(0), [u, w] = y.useState(void 0), [d, v] = y.useState(void 0), B = y.useRef(), z = () => {
            var S;
            (S = r.get(e.deviceId)) != null && S.items.has(t.currentlyEditedGridId) || (Re.error(`This ${Y.grid.singular} was deleted!`), e.close())
        }, {
            start: D,
            clear: F
        } = Pe(z, 25), j = t.currentlyEditedGridId;
        y.useEffect(() => (ot({
            deviceId: e.deviceId,
            gridId: j
        }), () => {
            rt({
                deviceId: e.deviceId,
                gridId: j
            })
        }), []), y.useEffect(() => {
            const I = J(() => {
                    var g;
                    return (g = r.get(e.deviceId)) == null ? void 0 : g.items.has(j)
                }, g => {
                    g || (F(), D())
                }, {
                    fireImmediately: !0
                }),
                S = J(() => {
                    var g, O, E;
                    return (E = (O = (g = r.get(e.deviceId)) == null ? void 0 : g.items) == null ? void 0 : O.get(j)) == null ? void 0 : E.visitors
                }, g => {
                    g && w(g)
                }, {
                    fireImmediately: !0
                }),
                $ = J(() => {
                    var g, O, E;
                    return (E = (O = (g = r.get(e.deviceId)) == null ? void 0 : g.items) == null ? void 0 : O.get(j)) == null ? void 0 : E.json
                }, g => {
                    g !== void 0 && b(g)
                }, {
                    fireImmediately: !0
                }),
                me = J(() => {
                    var g, O, E;
                    return (E = (O = (g = r.get(e.deviceId)) == null ? void 0 : g.items) == null ? void 0 : O.get(j)) == null ? void 0 : E.owner
                }, g => {
                    g !== void 0 && v(g)
                }, {
                    fireImmediately: !0
                });
            return () => {
                F(), I(), S(), $(), me()
            }
        }, []), K(ve.Input.Keyboard.KeyCodes.ESC, e.close);
        const L = () => {
                e.close()
            },
            G = I => {
                var S;
                h >= o.blocksPerCodeGrid || (S = B == null ? void 0 : B.current) == null || S.addTextBlock(I)
            },
            C = I => {
                var S;
                h >= o.blocksPerCodeGrid || (S = B == null ? void 0 : B.current) == null || S.addTextBlock(I)
            };
        return a === void 0 || u === void 0 || d === void 0 ? null : s.jsxs(s.Fragment, {
            children: [s.jsx(tt, {
                deviceId: e.deviceId,
                gridId: j,
                gridJSON: a,
                gridVisitors: u,
                gridOwner: d,
                gridBlockCount: h,
                setGridBlockCount: n,
                switchToHomeScreen: L,
                openChannelBrowser: i,
                channelBrowserOpen: l,
                openPropertyBrowser: k,
                propertyBrowserOpen: m,
                editorRef: B
            }), s.jsx(ce, {
                visible: l,
                close: c,
                title: "Channel Browser",
                searchPlaceholder: "Search channels...",
                category: re.channel,
                noResultsText: "All the channels you broadcast on and listen to will appear here!",
                noResultsFilteredText: "No channels matching your search. Press Enter to add the channel currently in the search bar!",
                onItemSelected: G
            }), s.jsx(ce, {
                visible: m,
                close: f,
                title: "Property Browser",
                searchPlaceholder: "Search properties...",
                category: re.property,
                noResultsText: `Properties you create using the Property ${_(te.device.singular)} will show up here!`,
                noResultsFilteredText: `No properties match your search. Press Enter to add the property
        currently in the search bar. Remember to add a corresponding Property
        ${_(te.device.singular)} to your map!`,
                onItemSelected: C
            })]
        })
    });
export {
    Jr as
    default
};