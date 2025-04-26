function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, y) {
    Object.defineProperty(a, b, {
        get: c,
        set: y,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('+3jM7', function(y, z) {
    var d;
    d = y.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(y.exports, 'default', function() {
        return w;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('+0Tb/'),
        h = c('kneek'),
        i = c('Vlfxs'),
        j = c('am7L5'),
        k = c('tx7zP'),
        l = c('4BAHF'),
        m = c('04Q/S'),
        n = c('UnUp5'),
        o = c('GHmRa'),
        p = c('PjB0f'),
        q = c('wiVnp'),
        r = c('htVdm'),
        s = c('RJ/fk'),
        t = c('Wgw1x0'),
        u = c('jrTkz0'),
        v = c('RhbNx');
    var w = (0, i.observer)(b => {
        const {
            me: {
                editing: {
                    device: x
                }
            },
            world: {
                devices: {
                    codeGrids: y
                }
            },
            memorySystem: {
                limits: z
            }
        } = (0, j.default)(), [A, B, C] = (0, p.useBoolean)(!1), [D, E, F] = (0, p.useBoolean)(!1), [G, H] = f.useState(void 0), [I, J] = f.useState(0), [K, L] = f.useState(void 0), [M, N] = f.useState(void 0), O = f.useRef(), {
            start: P,
            clear: Q
        } = (0, o.useTimeout)(() => {
            var R;
            (null === (R = y.get(b.deviceId)) || void 0 === R ? void 0 : R.items.has(x.currentlyEditedGridId)) || (u.default.error(`This ${ v.default.grid.singular } was deleted!`), b.close());
        }, 25), R = x.currentlyEditedGridId;
        f.useEffect(() => ((0, m.default)({
            deviceId: b.deviceId,
            gridId: R
        }), () => {
            (0, l.default)({
                deviceId: b.deviceId,
                gridId: R
            });
        }), []), f.useEffect(() => {
            const S = (0, n.reaction)(() => {
                    var T;
                    return null === (T = y.get(b.deviceId)) || void 0 === T ? void 0 : T.items.has(R);
                }, S => {
                    S || (Q(), P());
                }, {
                    fireImmediately: !0
                }),
                T = (0, n.reaction)(() => {
                    var U, V, W;
                    return null === (U = null === (V = y.get(b.deviceId)) || void 0 === V || null === (W = V.items) || void 0 === W ? void 0 : W.get(R)) || void 0 === U ? void 0 : U.visitors;
                }, S => {
                    S && L(S);
                }, {
                    fireImmediately: !0
                }),
                U = (0, n.reaction)(() => {
                    var V, W, X;
                    return null === (V = null === (W = y.get(b.deviceId)) || void 0 === W || null === (X = W.items) || void 0 === X ? void 0 : X.get(R)) || void 0 === V ? void 0 : V.json;
                }, S => {
                    void 0 !== S && H(S);
                }, {
                    fireImmediately: !0
                }),
                V = (0, n.reaction)(() => {
                    var W, X, Y;
                    return null === (W = null === (X = y.get(b.deviceId)) || void 0 === X || null === (Y = X.items) || void 0 === Y ? void 0 : Y.get(R)) || void 0 === W ? void 0 : W.owner;
                }, S => {
                    void 0 !== S && N(S);
                }, {
                    fireImmediately: !0
                });
            return () => {
                Q(), S(), T(), U(), V();
            };
        }, []), (0, g.default)(a(h).Input.Keyboard.KeyCodes.ESC, b.close);
        return void 0 === G || void 0 === K || void 0 === M ? null : (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(k.default, {
                    deviceId: b.deviceId,
                    gridId: R,
                    gridJSON: G,
                    gridVisitors: K,
                    gridOwner: M,
                    gridBlockCount: I,
                    setGridBlockCount: J,
                    switchToHomeScreen: () => {
                        b.close();
                    },
                    openChannelBrowser: B,
                    channelBrowserOpen: A,
                    openPropertyBrowser: E,
                    propertyBrowserOpen: D,
                    editorRef: O
                }),
                (0, e.jsx)(q.default, {
                    visible: A,
                    close: C,
                    title: 'Channel Browser',
                    searchPlaceholder: 'Search channels...',
                    category: r.default.channel,
                    noResultsText: 'All the channels you broadcast on and listen to will appear here!',
                    noResultsFilteredText: 'No channels matching your search. Press Enter to add the channel currently in the search bar!',
                    onItemSelected: a => {
                        var S;
                        I >= z.blocksPerCodeGrid || null == O || null === (S = O.current) || void 0 === S || S.addTextBlock(a);
                    }
                }),
                (0, e.jsx)(q.default, {
                    visible: D,
                    close: F,
                    title: 'Property Browser',
                    searchPlaceholder: 'Search properties...',
                    category: r.default.property,
                    noResultsText: `Properties you create using the Property ${ (0, s.CapitalizeFirstLetter)(t.default.device.singular) } will show up here!`,
                    noResultsFilteredText: `No properties match your search. Press Enter to add the property\n        currently in the search bar. Remember to add a corresponding Property\n        ${ (0, s.CapitalizeFirstLetter)(t.default.device.singular) } to your map!`,
                    onItemSelected: a => {
                        var S;
                        I >= z.blocksPerCodeGrid || null == O || null === (S = O.current) || void 0 === S || S.addTextBlock(a);
                    }
                })
            ]
        });
    });
}), c.register('tx7zP', function(a, q) {
    b(a.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('mdi6y'),
        f = c('oMVkc'),
        g = c('PUlKf'),
        h = c('+82NM'),
        i = c('ZYjQ5'),
        j = c('D7q/A'),
        k = (j = c('D7q/A'), c('rFtvN1')),
        l = c('nbHO+'),
        m = c('S/jX4');
    var n = a => {
        const {
            deviceId: o,
            gridId: p,
            gridOwner: q,
            gridVisitors: r,
            gridJSON: s,
            switchToHomeScreen: t,
            openChannelBrowser: u,
            channelBrowserOpen: v,
            openPropertyBrowser: w,
            propertyBrowserOpen: x,
            editorRef: y
        } = z, A = ((0, g.default)() === q || !r.length || !q) && (0, f.default)();
        return (0, d.jsx)(j.ContentContainer, {
            onClick: z => {
                (0, k.default)(z), t();
            },
            children: (0, d.jsxs)(j.Modal, {
                initial: e.default.Animation.content.codegrid.initial,
                animate: e.default.Animation.content.codegrid.active,
                exit: e.default.Animation.content.codegrid.leave,
                transition: {
                    duration: e.default.Animation.durationSeconds,
                    ease: e.default.Animation.easeType
                },
                onClick: z => z.stopPropagation(),
                children: [
                    (0, d.jsx)(l.default, {
                        onClick: t,
                        color: m.default.White,
                        padding: 25
                    }),
                    (0, d.jsx)(j.CodeGridEditor, {
                        children: (0, d.jsx)(h.default, {
                            ref: y,
                            deviceId: o,
                            gridJSON: s,
                            gridId: p,
                            onBlockCountChange: z.setGridBlockCount,
                            isOwner: A,
                            openChannelBrowser: u,
                            channelBrowserOpen: v,
                            openPropertyBrowser: w,
                            propertyBrowserOpen: x
                        }, `blockly-editor-${ String(A) }`)
                    }),
                    (0, d.jsx)(i.default, {
                        deviceId: o,
                        gridId: p,
                        isOwner: A,
                        gridOwner: q,
                        blockCount: z.gridBlockCount,
                        openChannelBrowser: u,
                        openPropertyBrowser: w
                    })
                ]
            })
        });
    };
}), c.register('mdi6y', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('+82NM', function(t, u) {
    b(t.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    c('phbZH');
    var f = c('8MLEB'),
        g = c('Z+Quh'),
        h = c('ZVZgU'),
        i = c('WtdZG'),
        j = c('Vlfxs'),
        k = c('dQHV1'),
        l = c('AKJ7r'),
        m = c('DUDiB'),
        n = c('YmXYT'),
        o = c('vBLZk'),
        p = c('9p9dz'),
        q = c('eH7P7'),
        r = c('am7L5');
    a(g).FieldTextInput.prototype.doClassValidation_ = function(a) {
        return a.substring(0, 512);
    };
    var s = (0, j.observer)(e.forwardRef((b, c) => {
        const {
            memorySystem: t
        } = (0, r.default)(), [u, v] = e.useState(b.gridJSON), w = e.useRef(), x = e.useRef(), [y] = (0, k.default)((0, l.default)([
            n.default.messageBroadcaster,
            n.default.playerProximityMessageBroadcaster
        ]), a => {
            b.isOwner && (a.x && a.y && (w.current = {
                x: a.x,
                y: a.y
            }), b.openChannelBrowser());
        }), [z] = (0, k.default)((0, l.default)([
            n.default.getProperty,
            n.default.setProperty,
            n.default.playerProximityGetProperty,
            n.default.playerProximitySetProperty
        ]), a => {
            b.isOwner && (a.x && a.y && (w.current = {
                x: a.x,
                y: a.y
            }), b.openPropertyBrowser());
        });
        e.useEffect(() => {
            A(b.gridJSON);
        }, [b.gridJSON]), e.useEffect(() => () => {
            (0, o.destroyAllModals)();
        }, []);
        const A = c => {
                var B;
                b.isOwner || c !== u && (v(c), null == x || null === (B = x.current) || void 0 === B || B.clear(), a(g).serialization.workspaces.load(JSON.parse(c), x.current));
            },
            B = (0, i.useDebounceCallback)(a => {
                b.isOwner && a !== u && ((0, q.default)({
                    json: a,
                    deviceId: b.deviceId,
                    gridId: b.gridId
                }), v(a));
            }, p.default.debouncedSaveDurationMs),
            C = e.useMemo(() => (0, h.default)(b.deviceId, b.gridId), []);
        e.useImperativeHandle(c, () => ({
            addTextBlock: D
        }));
        const D = a => {
                b.isOwner && (0, m.default)({
                    text: a,
                    location: w.current,
                    workspace: x.current
                });
            },
            E = '' === u ? {} : JSON.parse(u);
        return (0, d.jsx)(f.default, {
            toolboxConfiguration: b.isOwner ? C : void 0,
            initialJson: E,
            className: 'fill-height',
            onInject: c => {
                var F;
                x.current = c, null === (F = x.current) || void 0 === F || F.addChangeListener(c => {
                    b.isOwner && (y(c), z(c), (() => {
                        const G = a(g).serialization.workspaces.save(x.current),
                            H = x.current.getAllBlocks(!1).length;
                        b.onBlockCountChange(H), B(JSON.stringify(G));
                    })());
                });
            },
            workspaceConfiguration: {
                readOnly: !b.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: t.limits.blocksPerCodeGrid,
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
}), c.register('phbZH', function(a, j) {
    b(a.exports, 'BlocklyWorkspace', function() {
        return c('8MLEB').default;
    });
    c('79xFw'), c('8MLEB'), c('Z+Quh');
}), c.register('79xFw', function(j, k) {
    b(j.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('Z+Quh'),
        f = c('EPBhX');
    var g = ({
        ref: h,
        initialXml: i,
        initialJson: j,
        toolboxConfiguration: k,
        workspaceConfiguration: l,
        onWorkspaceChange: m,
        onImportXmlError: n,
        onImportError: o,
        onInject: p,
        onDispose: q
    }) => {
        o = null != o ? o : n;
        const [r, s] = a(d).useState(null), [t, u] = a(d).useState(i || null), [v, w] = a(d).useState(j || null), [x, y] = a(d).useState(!1), [z, A] = a(d).useState(!1), B = a(d).useRef(l);
        a(d).useEffect(() => {
            B.current = l;
        }, [l]);
        const C = a(d).useRef(k);
        a(d).useEffect(() => {
            C.current = k, k && r && r.updateToolbox(k);
        }, [
            k,
            r
        ]);
        const D = a(d).useRef(p),
            E = a(d).useRef(q);
        a(d).useEffect(() => {
            D.current = p;
        }, [p]), a(d).useEffect(() => {
            E.current = q;
        }, [q]);
        const F = a(d).useCallback(a => {
            m && m(a);
        }, [m]);
        return a(d).useEffect(() => {
            if (!h.current)
                return;
            const G = a(e).inject(h.current, {
                ...B.current,
                toolbox: C.current
            });
            s(G), y(!1), A(!1), D.current && D.current(G);
            const H = E.current;
            return () => {
                G.dispose(), H && H(G);
            };
        }, [h]), a(d).useEffect(() => {
            r && !z && F(r);
        }, [
            F,
            z,
            r
        ]), a(d).useEffect(() => {
            if (null == r)
                return;
            const G = () => {
                F(r);
            };
            return r.addChangeListener(G), () => {
                r.removeChangeListener(G);
            };
        }, [
            r,
            F
        ]), a(d).useEffect(() => {
            if (null == r)
                return;
            const [G, H] = (0, f.default)(() => {
                const I = a(e).Xml.domToText(a(e).Xml.workspaceToDom(r));
                if (I === t)
                    return;
                const J = a(e).serialization.workspaces.save(r);
                w(J), u(I);
            }, 200);
            return r.addChangeListener(G), () => {
                r.removeChangeListener(G), H();
            };
        }, [
            r,
            t
        ]), a(d).useEffect(() => {
            if (t && r && !x) {
                const G = function(G, i, j) {
                    try {
                        if (i.getAllBlocks(!1).length > 0)
                            return;
                        return a(e).Xml.domToWorkspace(a(e).Xml.textToDom(G), i), !0;
                    } catch (a) {
                        return j && j(a), !1;
                    }
                }(t, r, o);
                G || u(null), y(!0);
            } else if (v && r && !x) {
                const H = function(H, i, j) {
                    try {
                        return a(e).serialization.workspaces.load(H, i), !0;
                    } catch (a) {
                        return j && j(a), !1;
                    }
                }(v, r, o);
                H || w(null);
                const I = a(e).Xml.domToText(a(e).Xml.workspaceToDom(r));
                u(I), y(!0);
            }
        }, [
            v,
            t,
            r,
            x,
            o
        ]), {
            workspace: r,
            xml: t,
            json: v
        };
    };
}), c.register('EPBhX', function(a, c) {
    function d(a, b) {
        let e = null,
            f = null;
        return [
            (...m) => {
                f = () => {
                    e = null, a(...m);
                }, null != e && clearTimeout(e), e = window.setTimeout(f, b);
            },
            () => {
                null != e && (clearTimeout(e), f && f());
            }
        ];
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('8MLEB', function(l, m) {
    b(l.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('uj3CK'),
        g = c('79xFw');
    const h = {
        initialXml: a(f).string,
        initialJson: a(f).object,
        toolboxConfiguration: a(f).object,
        workspaceConfiguration: a(f).object,
        className: a(f).string,
        onWorkspaceChange: a(f).func,
        onImportXmlError: a(f).func,
        onImportError: a(f).func,
        onXmlChange: a(f).func,
        onJsonChange: a(f).func,
        onInject: a(f).func,
        onDispose: a(f).func
    };

    function i({
        initialXml: j,
        initialJson: k,
        toolboxConfiguration: l,
        workspaceConfiguration: m,
        className: n,
        onWorkspaceChange: o,
        onXmlChange: p,
        onJsonChange: q,
        onImportXmlError: r,
        onImportError: s,
        onInject: t,
        onDispose: u
    }) {
        const v = a(e).useRef(null),
            {
                xml: w,
                json: x
            } = (0, g.default)({
                ref: v,
                initialXml: j,
                initialJson: k,
                toolboxConfiguration: l,
                workspaceConfiguration: m,
                onWorkspaceChange: o,
                onImportXmlError: r,
                onImportError: s,
                onInject: t,
                onDispose: u
            }),
            y = a(e).useRef(p);
        a(e).useEffect(() => {
            y.current = p;
        }, [p]);
        const z = a(e).useRef(q);
        return a(e).useEffect(() => {
            z.current = q;
        }, [q]), a(e).useEffect(() => {
            y.current && w && y.current(w), z.current && x && z.current(x);
        }, [
            w,
            x
        ]), (0, d.jsx)('div', {
            className: n,
            ref: v
        });
    }
    p.propTypes = o, p.defaultProps = {
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
    var v = w;
}), c.register('ZVZgU', function(a, j) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('ao9fO'),
        e = c('7Sbqr'),
        f = c('PvmGd'),
        g = c('h1T4n');
    const h = (a, b) => {
        let i = a.deviceOption.codeGridSchema.customBlocks || [];
        const j = (null == b ? void 0 : b.customBlocks) || [];
        return (null == b ? void 0 : b.blockedCustomBlocks) && (i = i.filter(a => {
            var k;
            return !(null === (k = b.blockedCustomBlocks) || void 0 === k ? void 0 : k.includes(a));
        })), {
            deviceSpecificBlocks: i,
            triggerSpecificBlocks: j
        };
    };
    var i = (a, b) => {
        var j, k;
        let l, m = [],
            n = [];
        const o = (0, g.default)(a);
        if (o) {
            var p, q;
            const r = null === (p = e.default.world.devices.codeGrids.get(a)) || void 0 === p || null === (q = p.items) || void 0 === q ? void 0 : q.get(b);
            if (r) {
                const s = o.deviceOption.codeGridSchema.triggers.find(s => s.type === r.triggerType);
                var t;
                if (s)
                    l = h(o, s), (null === (t = s.blockedGlobalBlocks) || void 0 === t ? void 0 : t.length) && (n = s.blockedGlobalBlocks);
                else
                    l = h(o);
            }
        }
        l && l.triggerSpecificBlocks.length && m.push({
            name: d.default.triggerOnly.name,
            color: d.default.triggerOnly.color,
            blocks: l.triggerSpecificBlocks.map(a => ({
                type: a
            })).filter(a => (0, f.CanAddCustomBlock)(a.type))
        }), (null == l ? void 0 : l.deviceSpecificBlocks.length) && m.push({
            name: d.default.deviceOnly.name,
            color: d.default.triggerOnly.color,
            blocks: l.deviceSpecificBlocks.map(a => ({
                type: a
            })).filter(a => (0, f.CanAddCustomBlock)(a.type))
        });
        let p = JSON.parse((null === (j = e.default.worldOptions) || void 0 === j || null === (k = j.codeGrids) || void 0 === k ? void 0 : k.blockCategories) || '[]');
        n.length && (p = p.map(a => ({
            ...a,
            blocks: a.blocks.filter(a => !n.includes(a.type))
        }))), m = [
            ...m,
            ...p
        ];
        return {
            kind: 'categoryToolbox',
            contents: m.map(a => {
                const q = a.custom ? {
                    custom: a.custom
                } : {};
                return {
                    kind: 'category',
                    name: a.name,
                    colour: a.color,
                    expanded: !0,
                    contents: a.blocks.map(a => ({
                        kind: 'block',
                        type: a.type,
                        message0: a.type
                    })),
                    ...q
                };
            })
        };
    };
}), c.register('ao9fO', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
        triggerOnly: {
            name: 'For This Block',
            color: '#FFBF00'
        },
        deviceOnly: {
            name: 'For This Device',
            color: '#FFBF00'
        }
    };
}), c.register('PvmGd', function(a, i) {
    b(a.exports, 'CanAddCustomBlock', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('2hh8R');
    const f = a => {
        const g = d.default.worldOptions.codeGrids.customBlocksParsed.find(g => g.type === a);
        if (!g)
            return !0;
        const h = g.minimumRoleLevel,
            i = g.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(h, i);
    };
}), c.register('dQHV1', function(a, g) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = (a, b) => {
        const f = d.useRef(0),
            g = d.useRef(),
            h = a => g.current = a,
            i = d => {
                const j = a[f.current];
                if (!j)
                    return f.current = 0, void i(d);
                if (j(d, g.current, h))
                    f.current = f.current + 1, f.current === a.length && (b(g.current), f.current = 0);
                else {
                    if (0 === f.current)
                        return;
                    f.current = 0, i(d);
                }
            };
        return [a => {
            i(a);
        }];
    };
}), c.register('AKJ7r', function(g, f) {
    b(g.exports, 'default', function() {
        return e;
    });
    var d = c('Z+Quh');
    var e = b => [
        b => b.type === a(d).Events.TOOLBOX_ITEM_SELECT,
        (c, g, f) => {
            if (c.type === a(d).Events.CREATE && c.json && c.json.type) {
                if (b.some(a => c.json.type.includes(a)))
                    return f({
                        ...g,
                        blockId: c.blockId
                    }), !0;
            }
            return !1;
        },
        (b, c) => b.type === a(d).Events.SELECTED && (b.newElementId && b.newElementId === c.blockId),
        (b, c) => !(b.type !== a(d).Events.BLOCK_DRAG || !b.isStart || b.blockId !== c.blockId),
        (b, c, g) => {
            if (b.type === a(d).Events.BLOCK_DRAG && !b.isStart && b.blockId === c.blockId) {
                var f, g;
                const h = null === (f = b.blocks) || void 0 === f || null === (g = f[0]) || void 0 === g ? void 0 : g.getRelativeToSurfaceXY();
                if (h)
                    return g({
                        ...c,
                        x: h.x,
                        y: h.y
                    }), !0;
            }
            return !1;
        }
    ];
}), c.register('DUDiB', function(g, h) {
    b(g.exports, 'default', function() {
        return e;
    });
    var d = c('Z+Quh');
    var e = b => {
        const {
            text: f,
            location: g,
            workspace: h
        } = i;
        let j = 0,
            k = 0;
        if (g)
            j = g.x, k = g.y;
        else {
            const l = h.getAllBlocks(!0);
            if (l.length) {
                const m = l[l.length - 1].getRelativeToSurfaceXY();
                j = m.x, k = m.y;
            }
        }
        j += 40, k += 40, j = Math.round(j), k = Math.round(k);
        const l = a(d).serialization.workspaces.save(h);
        l.blocks || (l.blocks = {
            blocks: []
        }), l.blocks.blocks.push({
            type: 'text',
            x: j,
            y: k,
            fields: {
                TEXT: f
            }
        }), a(d).serialization.workspaces.load(l, h);
    };
}), c.register('9p9dz', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
        debouncedSaveDurationMs: 150
    };
}), c.register('eH7P7', function(a, r) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.setCodeGridJSON, {
            json: a.json,
            deviceId: a.deviceId,
            gridId: a.gridId
        });
    };
}), c.register('ZYjQ5', function(a, r) {
    b(a.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('S/jX4'),
        h = c('4fYJk'),
        i = c('EPKXG'),
        j = c('c3b73');
    let k, l, m = a => a;
    var n = a => (0, d.jsx)(o, {
        children: (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(h.default, {
                    deviceId: a.deviceId,
                    gridId: a.gridId
                }),
                a.isOwner ? (0, d.jsx)(i.default, {
                    blockCount: a.blockCount,
                    openChannelBrowser: a.openChannelBrowser,
                    openPropertyBrowser: a.openPropertyBrowser
                }) : (0, d.jsx)(j.default, {
                    gridOwner: a.gridOwner
                })
            ]
        })
    });
    const o = (0, e.default)(f.Centered).attrs({
            className: 'maxAll'
        })(k || (k = m`
  flex-shrink: 0;
  color: ${ 0 };
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`), g.default.White),
        p = e.default.div(l || (l = m``));
}), c.register('4fYJk', function(a, r) {
    b(a.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('gSUVO'),
        g = c('S/jX4'),
        h = c('RJ/fk'),
        i = c('RhbNx'),
        j = c('l8dwR');
    var k = a => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default.Text, {
                style: {
                    fontFamily: f.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14
                },
                children: (0, h.CapitalizeFirstLetter)(i.default.grid.singular)
            }),
            (0, d.jsx)(e.default.Title, {
                level: 3,
                style: {
                    color: g.default.White,
                    marginTop: 2
                },
                children: (0, j.default)(a.deviceId, a.gridId)
            })
        ]
    });
}), c.register('EPKXG', function(a, r) {
    b(a.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('5nJMd26'),
        g = c('UzdPH');
    c('uPP4W');
    var h = c('PjB0f'),
        i = c('am7L5'),
        j = c('RhbNx');
    var k = a => {
        const {
            memorySystem: l
        } = (0, i.default)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(f.default, {
                    direction: 'horizontal',
                    size: 10,
                    style: {
                        marginTop: 30
                    },
                    children: [
                        (0, d.jsx)(e.default, {
                            onClick: a.openChannelBrowser,
                            type: 'primary',
                            children: 'Channel Browser'
                        }),
                        (0, d.jsx)(e.default, {
                            onClick: a.openPropertyBrowser,
                            type: 'primary',
                            children: 'Property Browser'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 6
                    },
                    children: (0, d.jsxs)(g.default.Text, {
                        style: {
                            color: 'rgba(255,255,255,0.6)'
                        },
                        children: [
                            (0, h.numberWithCommas)(a.blockCount),
                            '/',
                            (0, h.numberWithCommas)(l.limits.blocksPerCodeGrid),
                            ' ',
                            j.default.blocklyBlock.plural,
                            ' placed'
                        ]
                    })
                })
            ]
        });
    };
}), c.register('c3b73', function(a, r) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT'),
        f = c('UzdPH');
    c('uPP4W');
    var g = c('gSUVO'),
        h = c('wbz0L');
    var i = a => a.gridOwner ? (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {
                style: {
                    background: '#8b8b8b'
                }
            }),
            (0, d.jsx)('div', {
                children: (0, d.jsxs)(f.default.Text, {
                    children: [
                        (0, d.jsx)('span', {
                            style: {
                                fontWeight: g.FontWeights.Bold
                            },
                            children: (0, h.default)(a.gridOwner)
                        }),
                        ' ',
                        'is currently editing this block. Only one person can edit a block at a time.'
                    ]
                })
            })
        ]
    }) : null;
}), c.register('wbz0L', function(a, r) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('7Sbqr');
    var e = a => {
        const f = d.default.characters.characters.get(a);
        return f ? f.name : 'Player';
    };
}), c.register('D7q/A', function(a, r) {
    b(a.exports, 'Modal', function() {
        return m;
    }), b(a.exports, 'ContentContainer', function() {
        return n;
    }), b(a.exports, 'CodeGridEditor', function() {
        return o;
    });
    var d = c('b9Bct'),
        e = c('h99Nu'),
        f = c('S/jX4'),
        g = c('YimJ0');
    let h, i, j, k, l = a => a;
    e.default.div(h || (h = l`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`));
    const m = (0, e.default)(d.motion.div).attrs({
            className: 'flex medium-shadow'
        })(i || (i = l`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`), f.default.Black),
        n = (0, e.default)(g.Centered).attrs({
            className: 'maxAll'
        })(j || (j = l``)),
        o = e.default.div.attrs({
            className: 'maxAll'
        })(k || (k = l`
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
}), c.register('4BAHF', function(a, r) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.leaveCodeGrid, {
            deviceId: a.deviceId,
            gridId: a.gridId
        });
    };
}), c.register('04Q/S', function(a, r) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.joinCodeGrid, {
            deviceId: a.deviceId,
            gridId: a.gridId
        });
    };
}), c.register('wiVnp', function(a, r) {
    b(a.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('KV+OV'),
        g = c('c6x8w'),
        h = c('5nJMd26'),
        i = c('UzdPH'),
        j = c('4/f+U'),
        k = c('+0Tb/'),
        l = c('JahBI'),
        m = c('lOVAA'),
        n = c('rFtvN1');
    var o = a => {
        const [p, q] = e.useState(-1), [r, s] = e.useState(''), t = e.useRef(), u = (0, l.default)(a.category), v = e.useMemo(() => (0, j.orderBy)(r ? u.filter(a => a.toLowerCase().includes(r.toLowerCase())) : u, [a => a.toLowerCase()], ['asc']), [r]);
        (0, k.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            const w = p + 1;
            v[w] && q(w);
        }, [
            v.length,
            p
        ]), (0, k.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (-1 === p)
                return;
            const w = Math.max(0, p - 1);
            q(w);
        }, [
            v.length,
            p
        ]);
        const w = p => {
            a.onItemSelected(p), a.close();
        };
        return (0, d.jsx)('div', {
            onClick: n.default,
            children: (0, d.jsxs)(f.default, {
                open: a.visible,
                onClose: p => {
                    p.stopPropagation(), a.close();
                },
                placement: 'right',
                width: 400,
                afterOpenChange: a => {
                    var x;
                    s(''), q(-1), a && (null == t || null === (x = t.current) || void 0 === x || x.focus());
                },
                title: a.title,
                children: [
                    (0, d.jsx)(g.default, {
                        ref: t,
                        size: 'large',
                        className: 'maxWidth',
                        placeholder: a.searchPlaceholder,
                        style: {
                            marginBottom: 20
                        },
                        allowClear: !0,
                        value: r,
                        onChange: a => {
                            s(a.target.value), q(0);
                        },
                        onPressEnter: () => {
                            const x = v[p];
                            if (x)
                                w(x);
                            else {
                                const y = null == r ? void 0 : r.trim();
                                y && w(y);
                            }
                        },
                        maxLength: 512
                    }),
                    u.length ? v.length ? (0, d.jsx)(h.default, {
                        className: 'maxWidth',
                        direction: 'vertical',
                        size: 8,
                        children: v.map((a, q) => (0, d.jsx)(m.default, {
                            name: a,
                            focused: p === q,
                            onSelect: () => w(a)
                        }, a))
                    }) : (0, d.jsx)(i.default.Text, {
                        children: a.noResultsFilteredText
                    }) : (0, d.jsx)(i.default.Text, {
                        children: a.noResultsText
                    })
                ]
            })
        });
    };
}), c.register('lOVAA', function(a, o) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('KlhV/'),
        g = c('UzdPH');
    let h;
    var i = a => {
        const {
            token: {
                borderRadius: j
            }
        } = f.default.useToken();
        return (0, d.jsx)(j, {
            borderRadius: j,
            focused: a.focused,
            onClick: a.onSelect,
            children: (0, d.jsx)(g.default.Text, {
                children: a.name
            })
        });
    };
    const j = e.default.div(h || (h = (a => a)`
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
`), a => a.borderRadius, a => a.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)');
});