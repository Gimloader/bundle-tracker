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
c.register('0MyQk', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _y;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('J8L14'),
        j = c('ddhGF'),
        k = c('6jmvl'),
        l = c('K/2xB'),
        m = c('56iH7'),
        n = c('WjLw6'),
        o = c('YBzaI'),
        p = c('JkQCT'),
        q = c('jEuDs'),
        r = c('quE27'),
        s = c('ekveg'),
        t = c('YqIsD'),
        u = c('Q6LQJ'),
        v = c('gp8Qp0'),
        w = c('Bjl070'),
        x = c('DXQir');
    var _y = (0, k.observer)(b => {
        const {
            me: {
                editing: {
                    device: z
                }
            },
            world: {
                devices: {
                    codeGrids: A
                }
            },
            memorySystem: {
                limits: B
            }
        } = (0, l.default)(), [C, D, E] = (0, r.useBoolean)(!1), [F, G, H] = (0, r.useBoolean)(!1), [I, J] = h.useState(void 0), [K, L] = h.useState(0), [M, N] = h.useState(void 0), [O, P] = h.useState(void 0), Q = h.useRef(), {
            start: R,
            clear: S
        } = (0, q.useTimeout)(() => {
            var T;
            (null === (T = A.get(b.deviceId)) || void 0 === T ? void 0 : T.items.has(z.currentlyEditedGridId)) || (w.default.error(`This ${ x.default.grid.singular } was deleted!`), b.close());
        }, 25), T = z.currentlyEditedGridId;
        h.useEffect(() => ((0, o.default)({
            deviceId: b.deviceId,
            gridId: T
        }), () => {
            (0, n.default)({
                deviceId: b.deviceId,
                gridId: T
            });
        }), []), h.useEffect(() => {
            const U = (0, p.reaction)(() => {
                    var V;
                    return null === (V = A.get(b.deviceId)) || void 0 === V ? void 0 : V.items.has(T);
                }, U => {
                    U || (S(), R());
                }, {
                    fireImmediately: !0
                }),
                V = (0, p.reaction)(() => {
                    var W, X, Y;
                    return null === (W = null === (X = A.get(b.deviceId)) || void 0 === X || null === (Y = X.items) || void 0 === Y ? void 0 : Y.get(T)) || void 0 === W ? void 0 : W.visitors;
                }, U => {
                    U && N(U);
                }, {
                    fireImmediately: !0
                }),
                W = (0, p.reaction)(() => {
                    var X, Y, Z;
                    return null === (X = null === (Y = A.get(b.deviceId)) || void 0 === Y || null === (Z = Y.items) || void 0 === Z ? void 0 : Z.get(T)) || void 0 === X ? void 0 : X.json;
                }, U => {
                    void 0 !== U && J(U);
                }, {
                    fireImmediately: !0
                }),
                X = (0, p.reaction)(() => {
                    var Y, Z, $;
                    return null === (Y = null === (Z = A.get(b.deviceId)) || void 0 === Z || null === ($ = Z.items) || void 0 === $ ? void 0 : $.get(T)) || void 0 === Y ? void 0 : Y.owner;
                }, U => {
                    void 0 !== U && P(U);
                }, {
                    fireImmediately: !0
                });
            return () => {
                S(), U(), V(), W(), X();
            };
        }, []), (0, i.default)(a(j).Input.Keyboard.KeyCodes.ESC, b.close);
        return void 0 === I || void 0 === M || void 0 === O ? null : (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(m.default, {
                    deviceId: b.deviceId,
                    gridId: T,
                    gridJSON: I,
                    gridVisitors: M,
                    gridOwner: O,
                    gridBlockCount: K,
                    setGridBlockCount: L,
                    switchToHomeScreen: () => {
                        b.close();
                    },
                    openChannelBrowser: D,
                    channelBrowserOpen: C,
                    openPropertyBrowser: G,
                    propertyBrowserOpen: F,
                    editorRef: Q
                }),
                (0, g.jsx)(s.default, {
                    visible: C,
                    close: E,
                    title: 'Channel Browser',
                    searchPlaceholder: 'Search channels...',
                    category: t.default.channel,
                    noResultsText: 'All the channels you broadcast on and listen to will appear here!',
                    noResultsFilteredText: 'No channels matching your search. Press Enter to add the channel currently in the search bar!',
                    onItemSelected: a => {
                        var U;
                        K >= B.blocksPerCodeGrid || null == Q || null === (U = Q.current) || void 0 === U || U.addTextBlock(a);
                    }
                }),
                (0, g.jsx)(s.default, {
                    visible: F,
                    close: H,
                    title: 'Property Browser',
                    searchPlaceholder: 'Search properties...',
                    category: t.default.property,
                    noResultsText: `Properties you create using the Property ${ (0, u.CapitalizeFirstLetter)(v.default.device.singular) } will show up here!`,
                    noResultsFilteredText: `No properties match your search. Press Enter to add the property\n        currently in the search bar. Remember to add a corresponding Property\n        ${ (0, u.CapitalizeFirstLetter)(v.default.device.singular) } to your map!`,
                    onItemSelected: a => {
                        var U;
                        K >= B.blocksPerCodeGrid || null == Q || null === (U = Q.current) || void 0 === U || U.addTextBlock(a);
                    }
                })
            ]
        });
    });
}), c.register('56iH7', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('PO60n'),
        h = c('fCC7B'),
        i = c('5Fjxs'),
        j = c('uhj2N'),
        k = c('y7hx3'),
        l = c('PszVA'),
        m = (l = c('PszVA'), c('u5JEh1')),
        n = c('V/q8i'),
        o = c('HOIhZ');
    var _p = d => {
        const {
            deviceId: q,
            gridId: r,
            gridOwner: s,
            gridVisitors: t,
            gridJSON: u,
            switchToHomeScreen: v,
            openChannelBrowser: w,
            channelBrowserOpen: x,
            openPropertyBrowser: y,
            propertyBrowserOpen: z,
            editorRef: A
        } = d, B = ((0, i.default)() === s || !t.length || !s) && (0, h.default)();
        return (0, f.jsx)(l.ContentContainer, {
            onClick: d => {
                (0, m.default)(d), v();
            },
            children: (0, f.jsxs)(l.Modal, {
                initial: g.default.Animation.content.codegrid.initial,
                animate: g.default.Animation.content.codegrid.active,
                exit: g.default.Animation.content.codegrid.leave,
                transition: {
                    duration: g.default.Animation.durationSeconds,
                    ease: g.default.Animation.easeType
                },
                onClick: d => d.stopPropagation(),
                children: [
                    (0, f.jsx)(n.default, {
                        onClick: v,
                        color: o.default.White,
                        padding: 25
                    }),
                    (0, f.jsx)(l.CodeGridEditor, {
                        children: (0, f.jsx)(j.default, {
                            ref: A,
                            deviceId: q,
                            gridJSON: u,
                            gridId: r,
                            onBlockCountChange: d.setGridBlockCount,
                            isOwner: B,
                            openChannelBrowser: w,
                            channelBrowserOpen: x,
                            openPropertyBrowser: y,
                            propertyBrowserOpen: z
                        }, `blockly-editor-${ String(B) }`)
                    }),
                    (0, f.jsx)(k.default, {
                        deviceId: q,
                        gridId: r,
                        isOwner: B,
                        gridOwner: s,
                        blockCount: d.gridBlockCount,
                        openChannelBrowser: w,
                        openPropertyBrowser: y
                    })
                ]
            })
        });
    };
}), c.register('PO60n', function(d, e) {
    b(d.exports, 'default', function() {
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
}), c.register('uhj2N', function(d, e) {
    b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    c('++Aje');
    var h = c('TI2Ru'),
        i = c('RTmHj'),
        j = c('/d+Tu'),
        k = c('pXUtu'),
        l = c('6jmvl'),
        m = c('EwLrg'),
        n = c('Ok3T1'),
        o = c('BuABU'),
        p = c('egiI4'),
        q = c('TB+o2'),
        r = c('QLx3f'),
        s = c('cyruS'),
        t = c('K/2xB');
    a(i).FieldTextInput.prototype.doClassValidation_ = function(u) {
        return u.substring(0, 512);
    };
    var _u = (0, l.observer)(g.forwardRef((b, c) => {
        const {
            memorySystem: v
        } = (0, t.default)(), [w, x] = g.useState(b.gridJSON), y = g.useRef(), z = g.useRef(), [A] = (0, m.default)((0, n.default)([
            p.default.messageBroadcaster,
            p.default.playerProximityMessageBroadcaster
        ]), a => {
            b.isOwner && (a.x && a.y && (y.current = {
                x: a.x,
                y: a.y
            }), b.openChannelBrowser());
        }), [B] = (0, m.default)((0, n.default)([
            p.default.getProperty,
            p.default.setProperty,
            p.default.playerProximityGetProperty,
            p.default.playerProximitySetProperty
        ]), a => {
            b.isOwner && (a.x && a.y && (y.current = {
                x: a.x,
                y: a.y
            }), b.openPropertyBrowser());
        });
        g.useEffect(() => {
            _C(b.gridJSON);
        }, [b.gridJSON]), g.useEffect(() => () => {
            (0, q.destroyAllModals)();
        }, []);
        const _C = c => {
                var D;
                b.isOwner || c !== w && (x(c), null == z || null === (D = z.current) || void 0 === D || D.clear(), a(i).serialization.workspaces.load(JSON.parse(c), z.current));
            },
            D = (0, k.useDebounceCallback)(a => {
                b.isOwner && a !== w && ((0, s.default)({
                    json: a,
                    deviceId: b.deviceId,
                    gridId: b.gridId
                }), x(a));
            }, r.default.debouncedSaveDurationMs),
            E = g.useMemo(() => (0, j.default)(b.deviceId, b.gridId), []);
        g.useImperativeHandle(c, () => ({
            addTextBlock: _F
        }));
        const _F = a => {
                b.isOwner && (0, o.default)({
                    text: a,
                    location: y.current,
                    workspace: z.current
                });
            },
            G = '' === w ? {} : JSON.parse(w);
        return (0, f.jsx)(h.default, {
            toolboxConfiguration: b.isOwner ? E : void 0,
            initialJson: G,
            className: 'fill-height',
            onInject: c => {
                var H;
                z.current = c, null === (H = z.current) || void 0 === H || H.addChangeListener(c => {
                    b.isOwner && (A(c), B(c), (() => {
                        const I = a(i).serialization.workspaces.save(z.current),
                            J = z.current.getAllBlocks(!1).length;
                        b.onBlockCountChange(J), D(JSON.stringify(I));
                    })());
                });
            },
            workspaceConfiguration: {
                readOnly: !b.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: v.limits.blocksPerCodeGrid,
                move: {
                    drag: !1
                },
                grid: {
                    spacing: 20,
                    length: 2,
                    colour: '#ccc',
                    snap: !0
                }
            }
        });
    }));
}), c.register('++Aje', function(d, e) {
    b(d.exports, 'BlocklyWorkspace', function() {
        return c('TI2Ru').default;
    });
    c('Ijr6s'), c('TI2Ru'), c('RTmHj');
}), c.register('Ijr6s', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('RTmHj'),
        h = c('jQbeO');
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
        const F = a(f).useRef(r),
            G = a(f).useRef(s);
        a(f).useEffect(() => {
            F.current = r;
        }, [r]), a(f).useEffect(() => {
            G.current = s;
        }, [s]);
        const H = a(f).useCallback(a => {
            o && o(a);
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
                const I = function(J, K, L) {
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
                const I = function(J, K, L) {
                    try {
                        return a(g).serialization.workspaces.load(J, K), !0;
                    } catch (a) {
                        return L && L(a), !1;
                    }
                }(x, t, q);
                I || y(null);
                const J = a(g).Xml.domToText(a(g).Xml.workspaceToDom(t));
                w(J), A(!0);
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
}), c.register('jQbeO', function(d, e) {
    function f(g, h) {
        let i = null,
            j = null;
        return [
            (..._e) => {
                j = () => {
                    i = null, g(..._e);
                }, null != i && clearTimeout(i), i = window.setTimeout(j, h);
            },
            () => {
                null != i && (clearTimeout(i), j && j());
            }
        ];
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('TI2Ru', function(d, _e) {
    b(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('HoW8Y'),
        i = c('Ijr6s');
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
        onJsonChange: _s,
        onImportXmlError: t,
        onImportError: u,
        onInject: v,
        onDispose: w
    }) {
        const x = a(g).useRef(null),
            {
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
            }),
            A = a(g).useRef(r);
        a(g).useEffect(() => {
            A.current = r;
        }, [r]);
        const B = a(g).useRef(_s);
        return a(g).useEffect(() => {
            B.current = _s;
        }, [_s]), a(g).useEffect(() => {
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
    var l = k;
}), c.register('/d+Tu', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('cCFBq'),
        g = c('fI6of'),
        h = c('h2ues'),
        i = c('5u9xs');
    const j = (d, b) => {
        let k = d.deviceOption.codeGridSchema.customBlocks || [];
        const l = (null == b ? void 0 : b.customBlocks) || [];
        return (null == b ? void 0 : b.blockedCustomBlocks) && (k = k.filter(d => {
            var m;
            return !(null === (m = b.blockedCustomBlocks) || void 0 === m ? void 0 : m.includes(d));
        })), {
            deviceSpecificBlocks: k,
            triggerSpecificBlocks: l
        };
    };
    var _k = (d, b) => {
        var l, m;
        let n, o = [],
            p = [];
        const q = (0, i.default)(d);
        if (q) {
            var r, s;
            const t = null === (r = g.default.world.devices.codeGrids.get(d)) || void 0 === r || null === (s = r.items) || void 0 === s ? void 0 : s.get(b);
            if (t) {
                const u = q.deviceOption.codeGridSchema.triggers.find(u => u.type === t.triggerType);
                var v;
                if (u)
                    n = j(q, u), (null === (v = u.blockedGlobalBlocks) || void 0 === v ? void 0 : v.length) && (p = u.blockedGlobalBlocks);
                else
                    n = j(q);
            }
        }
        n && n.triggerSpecificBlocks.length && o.push({
            name: f.default.triggerOnly.name,
            color: f.default.triggerOnly.color,
            blocks: n.triggerSpecificBlocks.map(d => ({
                type: d
            })).filter(d => (0, h.CanAddCustomBlock)(d.type))
        }), (null == n ? void 0 : n.deviceSpecificBlocks.length) && o.push({
            name: f.default.deviceOnly.name,
            color: f.default.triggerOnly.color,
            blocks: n.deviceSpecificBlocks.map(d => ({
                type: d
            })).filter(d => (0, h.CanAddCustomBlock)(d.type))
        });
        let r = JSON.parse((null === (l = g.default.worldOptions) || void 0 === l || null === (m = l.codeGrids) || void 0 === m ? void 0 : m.blockCategories) || '[]');
        p.length && (r = r.map(d => ({
            ...d,
            blocks: d.blocks.filter(d => !p.includes(d.type))
        }))), o = [
            ...o,
            ...r
        ];
        return {
            kind: 'categoryToolbox',
            contents: o.map(d => {
                const s = d.custom ? {
                    custom: d.custom
                } : {};
                return {
                    kind: 'category',
                    name: d.name,
                    colour: d.color,
                    expanded: !0,
                    contents: d.blocks.map(d => ({
                        kind: 'block',
                        type: d.type,
                        message0: d.type
                    })),
                    ...s
                };
            })
        };
    };
}), c.register('cCFBq', function(d, e) {
    b(d.exports, 'default', function() {
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
}), c.register('h2ues', function(d, e) {
    b(d.exports, 'CanAddCustomBlock', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('PlfjJ');
    const _h = d => {
        const i = f.default.worldOptions.codeGrids.customBlocksParsed.find(i => i.type === d);
        if (!i)
            return !0;
        const j = i.minimumRoleLevel,
            k = i.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(j, k);
    };
}), c.register('EwLrg', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = (d, b) => {
        const h = f.useRef(0),
            i = f.useRef(),
            j = d => i.current = d,
            k = f => {
                const l = d[h.current];
                if (!l)
                    return h.current = 0, void k(f);
                if (l(f, i.current, j))
                    h.current = h.current + 1, h.current === d.length && (b(i.current), h.current = 0);
                else {
                    if (0 === h.current)
                        return;
                    h.current = 0, k(f);
                }
            };
        return [d => {
            k(d);
        }];
    };
}), c.register('Ok3T1', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('RTmHj');
    var _g = b => [
        b => b.type === a(f).Events.TOOLBOX_ITEM_SELECT,
        (c, d, e) => {
            if (c.type === a(f).Events.CREATE && c.json && c.json.type) {
                if (b.some(a => c.json.type.includes(a)))
                    return e({
                        ...d,
                        blockId: c.blockId
                    }), !0;
            }
            return !1;
        },
        (b, c) => b.type === a(f).Events.SELECTED && (b.newElementId && b.newElementId === c.blockId),
        (b, c) => !(b.type !== a(f).Events.BLOCK_DRAG || !b.isStart || b.blockId !== c.blockId),
        (b, c, d) => {
            if (b.type === a(f).Events.BLOCK_DRAG && !b.isStart && b.blockId === c.blockId) {
                var h, i;
                const j = null === (h = b.blocks) || void 0 === h || null === (i = h[0]) || void 0 === i ? void 0 : i.getRelativeToSurfaceXY();
                if (j)
                    return d({
                        ...c,
                        x: j.x,
                        y: j.y
                    }), !0;
            }
            return !1;
        }
    ];
}), c.register('BuABU', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('RTmHj');
    var _g = b => {
        const {
            text: h,
            location: i,
            workspace: j
        } = b;
        let k = 0,
            l = 0;
        if (i)
            k = i.x, l = i.y;
        else {
            const m = j.getAllBlocks(!0);
            if (m.length) {
                const n = m[m.length - 1].getRelativeToSurfaceXY();
                k = n.x, l = n.y;
            }
        }
        k += 40, l += 40, k = Math.round(k), l = Math.round(l);
        const m = a(f).serialization.workspaces.save(j);
        m.blocks || (m.blocks = {
            blocks: []
        }), m.blocks.blocks.push({
            type: 'text',
            x: k,
            y: l,
            fields: {
                TEXT: h
            }
        }), a(f).serialization.workspaces.load(m, j);
    };
}), c.register('QLx3f', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        debouncedSaveDurationMs: 150
    };
}), c.register('cyruS', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = d => {
        (0, g.default)(f.default.setCodeGridJSON, {
            json: d.json,
            deviceId: d.deviceId,
            gridId: d.gridId
        });
    };
}), c.register('y7hx3', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('HOIhZ'),
        j = c('h/S5S'),
        k = c('LDRCh'),
        l = c('QXNP+');
    let m, n, o = d => d;
    var _p = d => (0, f.jsx)(_q, {
        children: (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(j.default, {
                    deviceId: d.deviceId,
                    gridId: d.gridId
                }),
                d.isOwner ? (0, f.jsx)(k.default, {
                    blockCount: d.blockCount,
                    openChannelBrowser: d.openChannelBrowser,
                    openPropertyBrowser: d.openPropertyBrowser
                }) : (0, f.jsx)(l.default, {
                    gridOwner: d.gridOwner
                })
            ]
        })
    });
    const _q = (0, g.default)(h.Centered).attrs({
            className: 'maxAll'
        })(m || (m = o`
  flex-shrink: 0;
  color: ${ 0 };
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`), i.default.White),
        _r = g.default.div(n || (n = o``));
}), c.register('h/S5S', function(d, e) {
    b(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('Eh2Wh'),
        i = c('HOIhZ'),
        j = c('Q6LQJ'),
        k = c('DXQir'),
        l = c('eAMDW');
    var _m = d => (0, f.jsxs)(f.Fragment, {
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
                children: (0, l.default)(d.deviceId, d.gridId)
            })
        ]
    });
}), c.register('LDRCh', function(d, e) {
    b(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('E2AMI26'),
        i = c('22RS1');
    c('O0Kav');
    var j = c('quE27'),
        k = c('K/2xB'),
        l = c('DXQir');
    var _m = d => {
        const {
            memorySystem: n
        } = (0, k.default)();
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(h.default, {
                    direction: 'horizontal',
                    size: 10,
                    style: {
                        marginTop: 30
                    },
                    children: [
                        (0, f.jsx)(g.default, {
                            onClick: d.openChannelBrowser,
                            type: 'primary',
                            children: 'Channel Browser'
                        }),
                        (0, f.jsx)(g.default, {
                            onClick: d.openPropertyBrowser,
                            type: 'primary',
                            children: 'Property Browser'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: 6
                    },
                    children: (0, f.jsxs)(i.default.Text, {
                        style: {
                            color: 'rgba(255,255,255,0.6)'
                        },
                        children: [
                            (0, j.numberWithCommas)(d.blockCount),
                            '/',
                            (0, j.numberWithCommas)(n.limits.blocksPerCodeGrid),
                            ' ',
                            l.default.blocklyBlock.plural,
                            ' placed'
                        ]
                    })
                })
            ]
        });
    };
}), c.register('QXNP+', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('VNuyu'),
        h = c('22RS1');
    c('O0Kav');
    var i = c('Eh2Wh'),
        j = c('Ra+1h');
    var _k = d => d.gridOwner ? (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default, {
                style: {
                    background: '#8b8b8b'
                }
            }),
            (0, f.jsx)('div', {
                children: (0, f.jsxs)(h.default.Text, {
                    children: [
                        (0, f.jsx)('span', {
                            style: {
                                fontWeight: i.FontWeights.Bold
                            },
                            children: (0, j.default)(d.gridOwner)
                        }),
                        ' ',
                        'is currently editing this block. Only one person can edit a block at a time.'
                    ]
                })
            })
        ]
    }) : null;
}), c.register('Ra+1h', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('fI6of');
    var _g = d => {
        const h = f.default.characters.characters.get(d);
        return h ? h.name : 'Player';
    };
}), c.register('PszVA', function(d, e) {
    b(d.exports, 'Modal', function() {
        return _o;
    }), b(d.exports, 'ContentContainer', function() {
        return _p;
    }), b(d.exports, 'CodeGridEditor', function() {
        return _q;
    });
    var f = c('9aZ6t'),
        g = c('u4s09'),
        h = c('HOIhZ'),
        i = c('MgONH');
    let j, k, l, m, n = d => d;
    g.default.div(j || (j = n`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`));
    const _o = (0, g.default)(f.motion.div).attrs({
            className: 'flex medium-shadow'
        })(k || (k = n`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`), h.default.Black),
        _p = (0, g.default)(i.Centered).attrs({
            className: 'maxAll'
        })(l || (l = n``)),
        _q = g.default.div.attrs({
            className: 'maxAll'
        })(m || (m = n`
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
}), c.register('WjLw6', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = d => {
        (0, g.default)(f.default.leaveCodeGrid, {
            deviceId: d.deviceId,
            gridId: d.gridId
        });
    };
}), c.register('YBzaI', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = d => {
        (0, g.default)(f.default.joinCodeGrid, {
            deviceId: d.deviceId,
            gridId: d.gridId
        });
    };
}), c.register('ekveg', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('3t9ce'),
        i = c('aevdF'),
        j = c('E2AMI26'),
        k = c('22RS1'),
        l = c('9zaF+'),
        m = c('J8L14'),
        n = c('+pvlo'),
        o = c('/i+y2'),
        p = c('u5JEh1');
    var _q = d => {
        const [r, s] = g.useState(-1), [t, u] = g.useState(''), v = g.useRef(), w = (0, n.default)(d.category), x = g.useMemo(() => (0, l.orderBy)(t ? w.filter(d => d.toLowerCase().includes(t.toLowerCase())) : w, [d => d.toLowerCase()], ['asc']), [t]);
        (0, m.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            const y = r + 1;
            x[y] && s(y);
        }, [
            x.length,
            r
        ]), (0, m.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (-1 === r)
                return;
            const y = Math.max(0, r - 1);
            s(y);
        }, [
            x.length,
            r
        ]);
        const y = r => {
            d.onItemSelected(r), d.close();
        };
        return (0, f.jsx)('div', {
            onClick: p.default,
            children: (0, f.jsxs)(h.default, {
                open: d.visible,
                onClose: r => {
                    r.stopPropagation(), d.close();
                },
                placement: 'right',
                width: 400,
                afterOpenChange: d => {
                    var z;
                    u(''), s(-1), d && (null == v || null === (z = v.current) || void 0 === z || z.focus());
                },
                title: d.title,
                children: [
                    (0, f.jsx)(i.default, {
                        ref: v,
                        size: 'large',
                        className: 'maxWidth',
                        placeholder: d.searchPlaceholder,
                        style: {
                            marginBottom: 20
                        },
                        allowClear: !0,
                        value: t,
                        onChange: d => {
                            u(d.target.value), s(0);
                        },
                        onPressEnter: () => {
                            const z = x[r];
                            if (z)
                                y(z);
                            else {
                                const A = null == t ? void 0 : t.trim();
                                A && y(A);
                            }
                        },
                        maxLength: 512
                    }),
                    w.length ? x.length ? (0, f.jsx)(j.default, {
                        className: 'maxWidth',
                        direction: 'vertical',
                        size: 8,
                        children: x.map((d, s) => (0, f.jsx)(o.default, {
                            name: d,
                            focused: r === s,
                            onSelect: () => y(d)
                        }, d))
                    }) : (0, f.jsx)(k.default.Text, {
                        children: d.noResultsFilteredText
                    }) : (0, f.jsx)(k.default.Text, {
                        children: d.noResultsText
                    })
                ]
            })
        });
    };
}), c.register('/i+y2', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('NmQt6'),
        i = c('22RS1');
    let j;
    var _k = d => {
        const {
            token: {
                borderRadius: l
            }
        } = h.default.useToken();
        return (0, f.jsx)(_l, {
            borderRadius: l,
            focused: d.focused,
            onClick: d.onSelect,
            children: (0, f.jsx)(i.default.Text, {
                children: d.name
            })
        });
    };
    const _l = g.default.div(j || (j = (d => d)`
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
`), d => d.borderRadius, d => d.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)');
});