function a(b) {
    return b && b.__esModule ? b.default : b;
}
function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function () {
        return _y;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....');
    var _y = (0, k.observer)(z => {
        const {
                me: {
                    editing: {device: A}
                },
                world: {
                    devices: {codeGrids: B}
                },
                memorySystem: {limits: C}
            } = (0, l.default)(), [D, E, F] = (0, r.useBoolean)(!1), [G, H, I] = (0, r.useBoolean)(!1), [J, K] = h.useState(void 0), [L, M] = h.useState(0), [N, O] = h.useState(void 0), [P, Q] = h.useState(void 0), R = h.useRef(), {
                start: S,
                clear: T
            } = (0, q.useTimeout)(() => {
                var U;
                (null === (U = B.get(z.deviceId)) || void 0 === U ? void 0 : U.items.has(A.currentlyEditedGridId)) || (w.default.error(`This ${ x.default.grid.singular } was deleted!`), z.close());
            }, 25), U = A.currentlyEditedGridId;
        h.useEffect(() => ((0, o.default)({
            deviceId: z.deviceId,
            gridId: U
        }), () => {
            (0, n.default)({
                deviceId: z.deviceId,
                gridId: U
            });
        }), []), h.useEffect(() => {
            const V = (0, p.reaction)(() => {
                    var W;
                    return null === (W = B.get(z.deviceId)) || void 0 === W ? void 0 : W.items.has(U);
                }, W => {
                    W || (T(), S());
                }, { fireImmediately: !0 }), W = (0, p.reaction)(() => {
                    var X, Y, Z;
                    return null === (X = null === (Y = B.get(z.deviceId)) || void 0 === Y || null === (Z = Y.items) || void 0 === Z ? void 0 : Z.get(U)) || void 0 === X ? void 0 : X.visitors;
                }, X => {
                    X && O(X);
                }, { fireImmediately: !0 }), X = (0, p.reaction)(() => {
                    var Y, Z, $;
                    return null === (Y = null === (Z = B.get(z.deviceId)) || void 0 === Z || null === ($ = Z.items) || void 0 === $ ? void 0 : $.get(U)) || void 0 === Y ? void 0 : Y.json;
                }, Y => {
                    void 0 !== Y && K(Y);
                }, { fireImmediately: !0 }), Y = (0, p.reaction)(() => {
                    var Z, $, ab;
                    return null === (Z = null === ($ = B.get(z.deviceId)) || void 0 === $ || null === (ab = $.items) || void 0 === ab ? void 0 : ab.get(U)) || void 0 === Z ? void 0 : Z.owner;
                }, Z => {
                    void 0 !== Z && Q(Z);
                }, { fireImmediately: !0 });
            return () => {
                T(), V(), W(), X(), Y();
            };
        }, []), (0, i.default)(a(j).Input.Keyboard.KeyCodes.ESC, z.close);
        return void 0 === J || void 0 === N || void 0 === P ? null : (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(m.default, {
                    deviceId: z.deviceId,
                    gridId: U,
                    gridJSON: J,
                    gridVisitors: N,
                    gridOwner: P,
                    gridBlockCount: L,
                    setGridBlockCount: M,
                    switchToHomeScreen: () => {
                        z.close();
                    },
                    openChannelBrowser: E,
                    channelBrowserOpen: D,
                    openPropertyBrowser: H,
                    propertyBrowserOpen: G,
                    editorRef: R
                }),
                (0, g.jsx)(s.default, {
                    visible: D,
                    close: F,
                    title: 'Channel Browser',
                    searchPlaceholder: 'Search channels...',
                    category: t.default.channel,
                    noResultsText: 'All the channels you broadcast on and listen to will appear here!',
                    noResultsFilteredText: 'No channels matching your search. Press Enter to add the channel currently in the search bar!',
                    onItemSelected: V => {
                        var W;
                        L >= C.blocksPerCodeGrid || null == R || null === (W = R.current) || void 0 === W || W.addTextBlock(V);
                    }
                }),
                (0, g.jsx)(s.default, {
                    visible: G,
                    close: I,
                    title: 'Property Browser',
                    searchPlaceholder: 'Search properties...',
                    category: t.default.property,
                    noResultsText: `Properties you create using the Property ${ (0, u.CapitalizeFirstLetter)(v.default.device.singular) } will show up here!`,
                    noResultsFilteredText: `No properties match your search. Press Enter to add the property\n        currently in the search bar. Remember to add a corresponding Property\n        ${ (0, u.CapitalizeFirstLetter)(v.default.device.singular) } to your map!`,
                    onItemSelected: V => {
                        var W;
                        L >= C.blocksPerCodeGrid || null == R || null === (W = R.current) || void 0 === W || W.addTextBlock(V);
                    }
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = (l = c('.....'), c('.....')), n = c('.....'), o = c('.....');
    var _p = q => {
        const {
                deviceId: r,
                gridId: s,
                gridOwner: t,
                gridVisitors: u,
                gridJSON: v,
                switchToHomeScreen: w,
                openChannelBrowser: x,
                channelBrowserOpen: y,
                openPropertyBrowser: z,
                propertyBrowserOpen: A,
                editorRef: B
            } = q, C = ((0, i.default)() === t || !u.length || !t) && (0, h.default)();
        return (0, f.jsx)(l.ContentContainer, {
            onClick: D => {
                (0, m.default)(D), w();
            },
            children: (0, f.jsxs)(l.Modal, {
                initial: g.default.Animation.content.codegrid.initial,
                animate: g.default.Animation.content.codegrid.active,
                exit: g.default.Animation.content.codegrid.leave,
                transition: {
                    duration: g.default.Animation.durationSeconds,
                    ease: g.default.Animation.easeType
                },
                onClick: D => D.stopPropagation(),
                children: [
                    (0, f.jsx)(n.default, {
                        onClick: w,
                        color: o.default.White,
                        padding: 25
                    }),
                    (0, f.jsx)(l.CodeGridEditor, {
                        children: (0, f.jsx)(j.default, {
                            ref: B,
                            deviceId: r,
                            gridJSON: v,
                            gridId: s,
                            onBlockCountChange: q.setGridBlockCount,
                            isOwner: C,
                            openChannelBrowser: x,
                            channelBrowserOpen: y,
                            openPropertyBrowser: z,
                            propertyBrowserOpen: A
                        }, `blockly-editor-${ String(C) }`)
                    }),
                    (0, f.jsx)(k.default, {
                        deviceId: r,
                        gridId: s,
                        isOwner: C,
                        gridOwner: t,
                        blockCount: q.gridBlockCount,
                        openChannelBrowser: x,
                        openPropertyBrowser: z
                    })
                ]
            })
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        Animation: {
            durationSeconds: 0.2,
            easeType: 'easeOut',
            container: {
                background: {
                    inactive: 'rgba(0,0,0,0)',
                    active: 'rgba(0,0,0,0.6)'
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
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    a(i).FieldTextInput.prototype.doClassValidation_ = function (u) {
        return u.substring(0, 512);
    };
    var _u = (0, l.observer)(g.forwardRef((v, w) => {
        const {memorySystem: x} = (0, t.default)(), [y, z] = g.useState(v.gridJSON), A = g.useRef(), B = g.useRef(), [C] = (0, m.default)((0, n.default)([
                p.default.messageBroadcaster,
                p.default.playerProximityMessageBroadcaster
            ]), D => {
                v.isOwner && (D.x && D.y && (A.current = {
                    x: D.x,
                    y: D.y
                }), v.openChannelBrowser());
            }), [D] = (0, m.default)((0, n.default)([
                p.default.getProperty,
                p.default.setProperty,
                p.default.playerProximityGetProperty,
                p.default.playerProximitySetProperty
            ]), E => {
                v.isOwner && (E.x && E.y && (A.current = {
                    x: E.x,
                    y: E.y
                }), v.openPropertyBrowser());
            });
        g.useEffect(() => {
            _E(v.gridJSON);
        }, [v.gridJSON]), g.useEffect(() => () => {
            (0, q.destroyAllModals)();
        }, []);
        const _E = F => {
                var G;
                v.isOwner || F !== y && (z(F), null == B || null === (G = B.current) || void 0 === G || G.clear(), a(i).serialization.workspaces.load(JSON.parse(F), B.current));
            }, F = (0, k.useDebounceCallback)(G => {
                v.isOwner && G !== y && ((0, s.default)({
                    json: G,
                    deviceId: v.deviceId,
                    gridId: v.gridId
                }), z(G));
            }, r.default.debouncedSaveDurationMs), G = g.useMemo(() => (0, j.default)(v.deviceId, v.gridId), []);
        g.useImperativeHandle(w, () => ({ addTextBlock: _H }));
        const _H = I => {
                v.isOwner && (0, o.default)({
                    text: I,
                    location: A.current,
                    workspace: B.current
                });
            }, I = '' === y ? {} : JSON.parse(y);
        return (0, f.jsx)(h.default, {
            toolboxConfiguration: v.isOwner ? G : void 0,
            initialJson: I,
            className: 'fill-height',
            onInject: J => {
                var K;
                B.current = J, null === (K = B.current) || void 0 === K || K.addChangeListener(L => {
                    v.isOwner && (C(L), D(L), (() => {
                        const M = a(i).serialization.workspaces.save(B.current), N = B.current.getAllBlocks(!1).length;
                        v.onBlockCountChange(N), F(JSON.stringify(M));
                    })());
                });
            },
            workspaceConfiguration: {
                readOnly: !v.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: x.limits.blocksPerCodeGrid,
                move: { drag: !1 },
                grid: {
                    spacing: 20,
                    length: 2,
                    colour: '#ccc',
                    snap: !0
                }
            }
        });
    }));
}), c.register('.....', function (d, e) {
    b(d.exports, 'BlocklyWorkspace', function () {
        return c('.....').default;
    });
    c('.....'), c('.....'), c('.....');
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = ({
        ref: j,
        initialXml: k,
        initialJson: l,
        toolboxConfiguration: m,
        workspaceConfiguration: n,
        onWorkspaceChange: o,
        onImportXmlError: p,
        onImportError: q,
        onInject: r,
        onDispose: s
    }) => {
        q = null != q ? q : p;
        const [t, u] = a(f).useState(null), [v, w] = a(f).useState(k || null), [x, y] = a(f).useState(l || null), [z, A] = a(f).useState(!1), [B, C] = a(f).useState(!1), D = a(f).useRef(n);
        a(f).useEffect(() => {
            D.current = n;
        }, [n]);
        const E = a(f).useRef(m);
        a(f).useEffect(() => {
            E.current = m, m && t && t.updateToolbox(m);
        }, [
            m,
            t
        ]);
        const F = a(f).useRef(r), G = a(f).useRef(s);
        a(f).useEffect(() => {
            F.current = r;
        }, [r]), a(f).useEffect(() => {
            G.current = s;
        }, [s]);
        const H = a(f).useCallback(I => {
            o && o(I);
        }, [o]);
        return a(f).useEffect(() => {
            if (!j.current)
                return;
            const I = a(g).inject(j.current, {
                ...D.current,
                toolbox: E.current
            });
            u(I), A(!1), C(!1), F.current && F.current(I);
            const J = G.current;
            return () => {
                I.dispose(), J && J(I);
            };
        }, [j]), a(f).useEffect(() => {
            t && !B && H(t);
        }, [
            H,
            B,
            t
        ]), a(f).useEffect(() => {
            if (null == t)
                return;
            const I = () => {
                H(t);
            };
            return t.addChangeListener(I), () => {
                t.removeChangeListener(I);
            };
        }, [
            t,
            H
        ]), a(f).useEffect(() => {
            if (null == t)
                return;
            const [I, J] = (0, h.default)(() => {
                const K = a(g).Xml.domToText(a(g).Xml.workspaceToDom(t));
                if (K === v)
                    return;
                const L = a(g).serialization.workspaces.save(t);
                y(L), w(K);
            }, 200);
            return t.addChangeListener(I), () => {
                t.removeChangeListener(I), J();
            };
        }, [
            t,
            v
        ]), a(f).useEffect(() => {
            if (v && t && !z) {
                const I = function (J, K, L) {
                    try {
                        if (K.getAllBlocks(!1).length > 0)
                            return;
                        return a(g).Xml.domToWorkspace(a(g).Xml.textToDom(J), K), !0;
                    } catch (a) {
                        return L && L(a), !1;
                    }
                }(v, t, q);
                I || w(null), A(!0);
            } else if (x && t && !z) {
                const J = function (K, L, M) {
                    try {
                        return a(g).serialization.workspaces.load(K, L), !0;
                    } catch (a) {
                        return M && M(a), !1;
                    }
                }(x, t, q);
                J || y(null);
                const K = a(g).Xml.domToText(a(g).Xml.workspaceToDom(t));
                w(K), A(!0);
            }
        }, [
            x,
            v,
            t,
            z,
            q
        ]), {
            workspace: t,
            xml: v,
            json: x
        };
    };
}), c.register('.....', function (d, e) {
    function f(g, h) {
        let i = null, j = null;
        return [
            (...n) => {
                j = () => {
                    i = null, g(...n);
                }, null != i && clearTimeout(i), i = window.setTimeout(j, h);
            },
            () => {
                null != i && (clearTimeout(i), j && j());
            }
        ];
    }
    b(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = {
        initialXml: a(h).string,
        initialJson: a(h).object,
        toolboxConfiguration: a(h).object,
        workspaceConfiguration: a(h).object,
        className: a(h).string,
        onWorkspaceChange: a(h).func,
        onImportXmlError: a(h).func,
        onImportError: a(h).func,
        onXmlChange: a(h).func,
        onJsonChange: a(h).func,
        onInject: a(h).func,
        onDispose: a(h).func
    };
    function k({
        initialXml: l,
        initialJson: m,
        toolboxConfiguration: n,
        workspaceConfiguration: o,
        className: p,
        onWorkspaceChange: q,
        onXmlChange: r,
        onJsonChange: s,
        onImportXmlError: t,
        onImportError: u,
        onInject: v,
        onDispose: w
    }) {
        const x = a(g).useRef(null), {
                xml: y,
                json: z
            } = (0, i.default)({
                ref: x,
                initialXml: l,
                initialJson: m,
                toolboxConfiguration: n,
                workspaceConfiguration: o,
                onWorkspaceChange: q,
                onImportXmlError: t,
                onImportError: u,
                onInject: v,
                onDispose: w
            }), A = a(g).useRef(r);
        a(g).useEffect(() => {
            A.current = r;
        }, [r]);
        const B = a(g).useRef(s);
        return a(g).useEffect(() => {
            B.current = s;
        }, [s]), a(g).useEffect(() => {
            A.current && y && A.current(y), B.current && z && B.current(z);
        }, [
            y,
            z
        ]), (0, f.jsx)('div', {
            className: p,
            ref: x
        });
    }
    k.propTypes = j, k.defaultProps = {
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
    var _q = k;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = (k, l) => {
        let m = k.deviceOption.codeGridSchema.customBlocks || [];
        const n = (null == l ? void 0 : l.customBlocks) || [];
        return (null == l ? void 0 : l.blockedCustomBlocks) && (m = m.filter(o => {
            var p;
            return !(null === (p = l.blockedCustomBlocks) || void 0 === p ? void 0 : p.includes(o));
        })), {
            deviceSpecificBlocks: m,
            triggerSpecificBlocks: n
        };
    };
    var _k = (l, m) => {
        var n, o;
        let p, q = [], r = [];
        const s = (0, i.default)(l);
        if (s) {
            var t, u;
            const v = null === (t = g.default.world.devices.codeGrids.get(l)) || void 0 === t || null === (u = t.items) || void 0 === u ? void 0 : u.get(m);
            if (v) {
                const w = s.deviceOption.codeGridSchema.triggers.find(x => x.type === v.triggerType);
                var x;
                if (w)
                    p = j(s, w), (null === (x = w.blockedGlobalBlocks) || void 0 === x ? void 0 : x.length) && (r = w.blockedGlobalBlocks);
                else
                    p = j(s);
            }
        }
        p && p.triggerSpecificBlocks.length && q.push({
            name: f.default.triggerOnly.name,
            color: f.default.triggerOnly.color,
            blocks: p.triggerSpecificBlocks.map(y => ({ type: y })).filter(y => (0, h.CanAddCustomBlock)(y.type))
        }), (null == p ? void 0 : p.deviceSpecificBlocks.length) && q.push({
            name: f.default.deviceOnly.name,
            color: f.default.triggerOnly.color,
            blocks: p.deviceSpecificBlocks.map(y => ({ type: y })).filter(y => (0, h.CanAddCustomBlock)(y.type))
        });
        let y = JSON.parse((null === (v = g.default.worldOptions) || void 0 === v || null === (o = v.codeGrids) || void 0 === o ? void 0 : o.blockCategories) || '[]');
        r.length && (y = y.map(z => ({
            ...z,
            blocks: z.blocks.filter(A => !r.includes(A.type))
        }))), q = [
            ...q,
            ...y
        ];
        return {
            kind: 'categoryToolbox',
            contents: q.map(z => {
                const A = z.custom ? { custom: z.custom } : {};
                return {
                    kind: 'category',
                    name: z.name,
                    colour: z.color,
                    expanded: !0,
                    contents: z.blocks.map(B => ({
                        kind: 'block',
                        type: B.type,
                        message0: B.type
                    })),
                    ...A
                };
            })
        };
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        triggerOnly: {
            name: 'For This Block',
            color: '#FFBF00'
        },
        deviceOnly: {
            name: 'For This Device',
            color: '#FFBF00'
        }
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'CanAddCustomBlock', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        const j = f.default.worldOptions.codeGrids.customBlocksParsed.find(k => k.type === i);
        if (!j)
            return !0;
        const k = j.minimumRoleLevel, l = j.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(k, l);
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = (h, i) => {
        const j = f.useRef(0), k = f.useRef(), l = m => k.current = m, m = n => {
                const o = h[j.current];
                if (!o)
                    return j.current = 0, void m(n);
                if (o(n, k.current, l))
                    j.current = j.current + 1, j.current === h.length && (i(k.current), j.current = 0);
                else {
                    if (0 === j.current)
                        return;
                    j.current = 0, m(n);
                }
            };
        return [n => {
                m(n);
            }];
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => [
        i => i.type === a(f).Events.TOOLBOX_ITEM_SELECT,
        (i, j, k) => {
            if (i.type === a(f).Events.CREATE && i.json && i.json.type) {
                if (h.some(l => i.json.type.includes(l)))
                    return k({
                        ...j,
                        blockId: i.blockId
                    }), !0;
            }
            return !1;
        },
        (i, j) => i.type === a(f).Events.SELECTED && (i.newElementId && i.newElementId === j.blockId),
        (i, j) => !(i.type !== a(f).Events.BLOCK_DRAG || !i.isStart || i.blockId !== j.blockId),
        (i, j, k) => {
            if (i.type === a(f).Events.BLOCK_DRAG && !i.isStart && i.blockId === j.blockId) {
                var l, m;
                const n = null === (l = i.blocks) || void 0 === l || null === (m = l[0]) || void 0 === m ? void 0 : m.getRelativeToSurfaceXY();
                if (n)
                    return k({
                        ...j,
                        x: n.x,
                        y: n.y
                    }), !0;
            }
            return !1;
        }
    ];
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const {
            text: i,
            location: j,
            workspace: k
        } = h;
        let l = 0, m = 0;
        if (j)
            l = j.x, m = j.y;
        else {
            const n = k.getAllBlocks(!0);
            if (n.length) {
                const o = n[n.length - 1].getRelativeToSurfaceXY();
                l = o.x, m = o.y;
            }
        }
        l += 40, m += 40, l = Math.round(l), m = Math.round(m);
        const p = n(f).serialization.workspaces.save(k);
        p.blocks || (p.blocks = { blocks: [] }), p.blocks.blocks.push({
            type: 'text',
            x: l,
            y: m,
            fields: { TEXT: i }
        }), n(f).serialization.workspaces.load(p, k);
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = { debouncedSaveDurationMs: 150 };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.setCodeGridJSON, {
            json: i.json,
            deviceId: i.deviceId,
            gridId: i.gridId
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, o = p => p;
    var _p = q => (0, f.jsx)(_q, {
        children: (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(j.default, {
                    deviceId: q.deviceId,
                    gridId: q.gridId
                }),
                q.isOwner ? (0, f.jsx)(k.default, {
                    blockCount: q.blockCount,
                    openChannelBrowser: q.openChannelBrowser,
                    openPropertyBrowser: q.openPropertyBrowser
                }) : (0, f.jsx)(l.default, { gridOwner: q.gridOwner })
            ]
        })
    });
    const _q = (0, g.default)(h.Centered).attrs({ className: 'maxAll' })(m || (m = o`
  flex-shrink: 0;
  color: ${ 0 };
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`), i.default.White), _r = g.default.div(n || (n = o``));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default.Text, {
                style: {
                    fontFamily: h.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14
                },
                children: (0, j.CapitalizeFirstLetter)(k.default.grid.singular)
            }),
            (0, f.jsx)(g.default.Title, {
                level: 3,
                style: {
                    color: i.default.White,
                    marginTop: 2
                },
                children: (0, l.default)(n.deviceId, n.gridId)
            })
        ]
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        const {memorySystem: o} = (0, k.default)();
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(h.default, {
                    direction: 'horizontal',
                    size: 10,
                    style: { marginTop: 30 },
                    children: [
                        (0, f.jsx)(g.default, {
                            onClick: n.openChannelBrowser,
                            type: 'primary',
                            children: 'Channel Browser'
                        }),
                        (0, f.jsx)(g.default, {
                            onClick: n.openPropertyBrowser,
                            type: 'primary',
                            children: 'Property Browser'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: { marginTop: 6 },
                    children: (0, f.jsxs)(i.default.Text, {
                        style: { color: 'rgba(255,255,255,0.6)' },
                        children: [
                            (0, j.numberWithCommas)(n.blockCount),
                            '/',
                            (0, j.numberWithCommas)(o.limits.blocksPerCodeGrid),
                            ' ',
                            l.default.blocklyBlock.plural,
                            ' placed'
                        ]
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....');
    var _k = l => l.gridOwner ? (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default, { style: { background: '#8b8b8b' } }),
            (0, f.jsx)('div', {
                children: (0, f.jsxs)(h.default.Text, {
                    children: [
                        (0, f.jsx)('span', {
                            style: { fontWeight: i.FontWeights.Bold },
                            children: (0, j.default)(l.gridOwner)
                        }),
                        ' ',
                        'is currently editing this block. Only one person can edit a block at a time.'
                    ]
                })
            })
        ]
    }) : null;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.default.characters.characters.get(h);
        return i ? i.name : 'Player';
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'Modal', function () {
        return _o;
    }), b(d.exports, 'ContentContainer', function () {
        return _p;
    }), b(d.exports, 'CodeGridEditor', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l, m, n = o => o;
    g.default.div(j || (j = n`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`));
    const _o = (0, g.default)(f.motion.div).attrs({ className: 'flex medium-shadow' })(k || (k = n`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`), h.default.Black), _p = (0, g.default)(i.Centered).attrs({ className: 'maxAll' })(l || (l = n``)), _q = g.default.div.attrs({ className: 'maxAll' })(m || (m = n`
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
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.leaveCodeGrid, {
            deviceId: i.deviceId,
            gridId: i.gridId
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.joinCodeGrid, {
            deviceId: i.deviceId,
            gridId: i.gridId
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = r => {
        const [s, t] = g.useState(-1), [u, v] = g.useState(''), w = g.useRef(), x = (0, n.default)(r.category), y = g.useMemo(() => (0, l.orderBy)(u ? x.filter(z => z.toLowerCase().includes(u.toLowerCase())) : x, [z => z.toLowerCase()], ['asc']), [u]);
        (0, m.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            const z = s + 1;
            y[z] && t(z);
        }, [
            y.length,
            s
        ]), (0, m.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (-1 === s)
                return;
            const z = Math.max(0, s - 1);
            t(z);
        }, [
            y.length,
            s
        ]);
        const z = A => {
            r.onItemSelected(A), r.close();
        };
        return (0, f.jsx)('div', {
            onClick: p.default,
            children: (0, f.jsxs)(h.default, {
                open: r.visible,
                onClose: A => {
                    A.stopPropagation(), r.close();
                },
                placement: 'right',
                width: 400,
                afterOpenChange: A => {
                    var B;
                    v(''), t(-1), A && (null == w || null === (B = w.current) || void 0 === B || B.focus());
                },
                title: r.title,
                children: [
                    (0, f.jsx)(i.default, {
                        ref: w,
                        size: 'large',
                        className: 'maxWidth',
                        placeholder: r.searchPlaceholder,
                        style: { marginBottom: 20 },
                        allowClear: !0,
                        value: u,
                        onChange: A => {
                            v(A.target.value), t(0);
                        },
                        onPressEnter: () => {
                            const A = y[s];
                            if (A)
                                z(A);
                            else {
                                const B = null == u ? void 0 : u.trim();
                                B && z(B);
                            }
                        },
                        maxLength: 512
                    }),
                    x.length ? y.length ? (0, f.jsx)(j.default, {
                        className: 'maxWidth',
                        direction: 'vertical',
                        size: 8,
                        children: y.map((A, B) => (0, f.jsx)(o.default, {
                            name: A,
                            focused: s === B,
                            onSelect: () => z(A)
                        }, A))
                    }) : (0, f.jsx)(k.default.Text, { children: r.noResultsFilteredText }) : (0, f.jsx)(k.default.Text, { children: r.noResultsText })
                ]
            })
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    var _k = l => {
        const {
            token: {borderRadius: m}
        } = h.default.useToken();
        return (0, f.jsx)(_l, {
            borderRadius: m,
            focused: l.focused,
            onClick: l.onSelect,
            children: (0, f.jsx)(i.default.Text, { children: l.name })
        });
    };
    const _l = g.default.div(j || (j = (m => m)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${ 0 }px;
  border: 2px solid
    ${ 0 };
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), m => m.borderRadius, m => m.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)');
});