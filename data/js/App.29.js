function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('g9c1U', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _S(b.exports, 'default', function() {
        return _w;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('ryWAy'),
        h = a('8WvaZ'),
        i = a('2x11J'),
        j = a('bHGrl'),
        k = a('DLHL2'),
        l = a('OBEOK'),
        m = a('lKsve'),
        n = a('YuT/D'),
        o = a('rr5bz'),
        p = a('PMl60'),
        q = a('Le6om'),
        r = a('iulrc'),
        s = a('qVhMZ'),
        t = a('bzU3s'),
        u = a('MSsQO'),
        v = a('QVC+I');
    var _w = (0, i.observer)(_S => {
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
            (null === (R = y.get(_S.deviceId)) || void 0 === R ? void 0 : R.items.has(x.currentlyEditedGridId)) || (u.default.error(`This ${ v.default.grid.singular } was deleted!`), _S.close());
        }, 25), R = x.currentlyEditedGridId;
        f.useEffect(() => ((0, m.default)({
            deviceId: _S.deviceId,
            gridId: R
        }), () => {
            (0, l.default)({
                deviceId: _S.deviceId,
                gridId: R
            });
        }), []), f.useEffect(() => {
            const S = (0, n.reaction)(() => {
                    var T;
                    return null === (T = y.get(_S.deviceId)) || void 0 === T ? void 0 : T.items.has(R);
                }, S => {
                    S || (Q(), P());
                }, {
                    fireImmediately: !0
                }),
                T = (0, n.reaction)(() => {
                    var U, V, W;
                    return null === (U = null === (V = y.get(_S.deviceId)) || void 0 === V || null === (W = V.items) || void 0 === W ? void 0 : W.get(R)) || void 0 === U ? void 0 : U.visitors;
                }, S => {
                    S && L(S);
                }, {
                    fireImmediately: !0
                }),
                U = (0, n.reaction)(() => {
                    var V, W, X;
                    return null === (V = null === (W = y.get(_S.deviceId)) || void 0 === W || null === (X = W.items) || void 0 === X ? void 0 : X.get(R)) || void 0 === V ? void 0 : V.json;
                }, S => {
                    void 0 !== S && H(S);
                }, {
                    fireImmediately: !0
                }),
                V = (0, n.reaction)(() => {
                    var W, X, Y;
                    return null === (W = null === (X = y.get(_S.deviceId)) || void 0 === X || null === (Y = X.items) || void 0 === Y ? void 0 : Y.get(R)) || void 0 === W ? void 0 : W.owner;
                }, S => {
                    void 0 !== S && N(S);
                }, {
                    fireImmediately: !0
                });
            return () => {
                Q(), S(), T(), U(), V();
            };
        }, []), (0, g.default)(_b(h).Input.Keyboard.KeyCodes.ESC, _S.close);
        return void 0 === G || void 0 === K || void 0 === M ? null : (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(k.default, {
                    deviceId: _S.deviceId,
                    gridId: R,
                    gridJSON: G,
                    gridVisitors: K,
                    gridOwner: M,
                    gridBlockCount: I,
                    setGridBlockCount: J,
                    switchToHomeScreen: () => {
                        _S.close();
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
                    onItemSelected: _b => {
                        var _S;
                        I >= z.blocksPerCodeGrid || null == O || null === (_S = O.current) || void 0 === _S || _S.addTextBlock(_b);
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
                    onItemSelected: _b => {
                        var S;
                        I >= z.blocksPerCodeGrid || null == O || null === (S = O.current) || void 0 === S || S.addTextBlock(_b);
                    }
                })
            ]
        });
    });
}), a.register('DLHL2', function(_b, c) {
    _o(_b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('kPtyl'),
        f = a('aCmo+'),
        g = a('Jfada'),
        h = a('VvMpg'),
        i = a('QN7GP'),
        j = a('EuBHl'),
        k = (j = a('EuBHl'), a('0PFEY')),
        l = a('Ct4sg'),
        m = a('vShe/');
    var _n = _b => {
        const {
            deviceId: _o,
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
        } = _b, z = ((0, g.default)() === q || !r.length || !q) && (0, f.default)();
        return (0, d.jsx)(j.ContentContainer, {
            onClick: _b => {
                (0, k.default)(_b), t();
            },
            children: (0, d.jsxs)(j.Modal, {
                initial: e.default.Animation.content.codegrid.initial,
                animate: e.default.Animation.content.codegrid.active,
                exit: e.default.Animation.content.codegrid.leave,
                transition: {
                    duration: e.default.Animation.durationSeconds,
                    ease: e.default.Animation.easeType
                },
                onClick: _b => _b.stopPropagation(),
                children: [
                    (0, d.jsx)(l.default, {
                        onClick: t,
                        color: m.default.White,
                        padding: 25
                    }),
                    (0, d.jsx)(j.CodeGridEditor, {
                        children: (0, d.jsx)(h.default, {
                            ref: y,
                            deviceId: _o,
                            gridJSON: s,
                            gridId: p,
                            onBlockCountChange: _b.setGridBlockCount,
                            isOwner: z,
                            openChannelBrowser: u,
                            channelBrowserOpen: v,
                            openPropertyBrowser: w,
                            propertyBrowserOpen: x
                        }, `blockly-editor-${ String(z) }`)
                    }),
                    (0, d.jsx)(i.default, {
                        deviceId: _o,
                        gridId: p,
                        isOwner: z,
                        gridOwner: q,
                        blockCount: _b.gridBlockCount,
                        openChannelBrowser: u,
                        openPropertyBrowser: w
                    })
                ]
            })
        });
    };
}), a.register('kPtyl', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('VvMpg', function(b, c) {
    _h(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    a('2YhaM');
    var f = a('0AYvY'),
        g = a('uaSUf'),
        h = a('jzeh7'),
        i = a('hVk9x'),
        j = a('2x11J'),
        k = a('fi5uw'),
        l = a('wqlaN'),
        m = a('Znlkb'),
        n = a('jQr2o'),
        o = a('12BCx'),
        p = a('Ggo1o'),
        q = a('2v3ft'),
        r = a('bHGrl');
    _s(g).FieldTextInput.prototype.doClassValidation_ = function(_s) {
        return _s.substring(0, 512);
    };
    var _s = (0, j.observer)(e.forwardRef((_h, a) => {
        const {
            memorySystem: t
        } = (0, r.default)(), [u, v] = e.useState(_h.gridJSON), w = e.useRef(), x = e.useRef(), [y] = (0, k.default)((0, l.default)([
            n.default.messageBroadcaster,
            n.default.playerProximityMessageBroadcaster
        ]), _b => {
            _h.isOwner && (_b.x && _b.y && (w.current = {
                x: _b.x,
                y: _b.y
            }), _h.openChannelBrowser());
        }), [z] = (0, k.default)((0, l.default)([
            n.default.getProperty,
            n.default.setProperty,
            n.default.playerProximityGetProperty,
            n.default.playerProximitySetProperty
        ]), _b => {
            _h.isOwner && (_b.x && _b.y && (w.current = {
                x: _b.x,
                y: _b.y
            }), _h.openPropertyBrowser());
        });
        e.useEffect(() => {
            _A(_h.gridJSON);
        }, [_h.gridJSON]), e.useEffect(() => () => {
            (0, o.destroyAllModals)();
        }, []);
        const _A = a => {
                var B;
                _h.isOwner || a !== u && (v(a), null == x || null === (B = x.current) || void 0 === B || B.clear(), _b(g).serialization.workspaces.load(JSON.parse(a), x.current));
            },
            B = (0, i.useDebounceCallback)(_b => {
                _h.isOwner && _b !== u && ((0, q.default)({
                    json: _b,
                    deviceId: _h.deviceId,
                    gridId: _h.gridId
                }), v(_b));
            }, p.default.debouncedSaveDurationMs),
            C = e.useMemo(() => (0, h.default)(_h.deviceId, _h.gridId), []);
        e.useImperativeHandle(a, () => ({
            addTextBlock: _D
        }));
        const _D = _b => {
                _h.isOwner && (0, m.default)({
                    text: _b,
                    location: w.current,
                    workspace: x.current
                });
            },
            E = '' === u ? {} : JSON.parse(u);
        return (0, d.jsx)(f.default, {
            toolboxConfiguration: _h.isOwner ? C : void 0,
            initialJson: E,
            className: 'fill-height',
            onInject: a => {
                var F;
                x.current = a, null === (F = x.current) || void 0 === F || F.addChangeListener(a => {
                    _h.isOwner && (y(a), z(a), (() => {
                        const G = _b(g).serialization.workspaces.save(x.current),
                            H = x.current.getAllBlocks(!1).length;
                        _h.onBlockCountChange(H), B(JSON.stringify(G));
                    })());
                });
            },
            workspaceConfiguration: {
                readOnly: !_h.isOwner,
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
}), a.register('2YhaM', function(_b, c) {
    _h(_b.exports, 'BlocklyWorkspace', function() {
        return a('0AYvY').default;
    });
    a('uAQzc'), a('0AYvY'), a('uaSUf');
}), a.register('uAQzc', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('uaSUf'),
        f = a('qRZsz');
    var _g = ({
        ref: _h,
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
        const [r, s] = _G(d).useState(null), [t, u] = _G(d).useState(i || null), [v, w] = _G(d).useState(j || null), [x, y] = _G(d).useState(!1), [z, A] = _G(d).useState(!1), B = _G(d).useRef(l);
        _G(d).useEffect(() => {
            B.current = l;
        }, [l]);
        const C = _G(d).useRef(k);
        _G(d).useEffect(() => {
            C.current = k, k && r && r.updateToolbox(k);
        }, [
            k,
            r
        ]);
        const D = _G(d).useRef(p),
            E = _G(d).useRef(q);
        _G(d).useEffect(() => {
            D.current = p;
        }, [p]), _G(d).useEffect(() => {
            E.current = q;
        }, [q]);
        const F = _G(d).useCallback(_G => {
            m && m(_G);
        }, [m]);
        return _G(d).useEffect(() => {
            if (!_h.current)
                return;
            const G = _G(e).inject(_h.current, {
                ...B.current,
                toolbox: C.current
            });
            s(G), y(!1), A(!1), D.current && D.current(G);
            const H = E.current;
            return () => {
                G.dispose(), H && H(G);
            };
        }, [_h]), _G(d).useEffect(() => {
            r && !z && F(r);
        }, [
            F,
            z,
            r
        ]), _G(d).useEffect(() => {
            if (null == r)
                return;
            const _G = () => {
                F(r);
            };
            return r.addChangeListener(_G), () => {
                r.removeChangeListener(_G);
            };
        }, [
            r,
            F
        ]), _b(d).useEffect(() => {
            if (null == r)
                return;
            const [G, H] = (0, f.default)(() => {
                const I = _b(e).Xml.domToText(_b(e).Xml.workspaceToDom(r));
                if (I === t)
                    return;
                const J = _b(e).serialization.workspaces.save(r);
                w(J), u(I);
            }, 200);
            return r.addChangeListener(G), () => {
                r.removeChangeListener(G), H();
            };
        }, [
            r,
            t
        ]), _b(d).useEffect(() => {
            if (t && r && !x) {
                const G = function(H, I, J) {
                    try {
                        if (I.getAllBlocks(!1).length > 0)
                            return;
                        return _b(e).Xml.domToWorkspace(_b(e).Xml.textToDom(H), I), !0;
                    } catch (_b) {
                        return J && J(_b), !1;
                    }
                }(t, r, o);
                G || u(null), y(!0);
            } else if (v && r && !x) {
                const G = function(H, I, J) {
                    try {
                        return _b(e).serialization.workspaces.load(H, I), !0;
                    } catch (_b) {
                        return J && J(_b), !1;
                    }
                }(v, r, o);
                G || w(null);
                const H = _b(e).Xml.domToText(_b(e).Xml.workspaceToDom(r));
                u(H), y(!0);
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
}), a.register('qRZsz', function(_b, c) {
    function d(e, f) {
        let g = null,
            h = null;
        return [
            (..._c) => {
                h = () => {
                    g = null, e(..._c);
                }, null != g && clearTimeout(g), g = window.setTimeout(h, f);
            },
            () => {
                null != g && (clearTimeout(g), h && h());
            }
        ];
    }
    _j(_b.exports, 'default', function() {
        return _b;
    });
}), a.register('0AYvY', function(_b, _c) {
    _j(_b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('WPpLv'),
        g = a('uAQzc');
    const h = {
        initialXml: _b(f).string,
        initialJson: _b(f).object,
        toolboxConfiguration: _b(f).object,
        workspaceConfiguration: _b(f).object,
        className: _b(f).string,
        onWorkspaceChange: _b(f).func,
        onImportXmlError: _b(f).func,
        onImportError: _b(f).func,
        onXmlChange: _b(f).func,
        onJsonChange: _b(f).func,
        onInject: _b(f).func,
        onDispose: _b(f).func
    };

    function i({
        initialXml: _j,
        initialJson: k,
        toolboxConfiguration: l,
        workspaceConfiguration: m,
        className: n,
        onWorkspaceChange: o,
        onXmlChange: p,
        onJsonChange: _q,
        onImportXmlError: r,
        onImportError: s,
        onInject: t,
        onDispose: u
    }) {
        const v = _b(e).useRef(null),
            {
                xml: w,
                json: x
            } = (0, g.default)({
                ref: v,
                initialXml: _j,
                initialJson: k,
                toolboxConfiguration: l,
                workspaceConfiguration: m,
                onWorkspaceChange: o,
                onImportXmlError: r,
                onImportError: s,
                onInject: t,
                onDispose: u
            }),
            y = _b(e).useRef(p);
        _b(e).useEffect(() => {
            y.current = p;
        }, [p]);
        const z = _b(e).useRef(_q);
        return _b(e).useEffect(() => {
            z.current = _q;
        }, [_q]), _b(e).useEffect(() => {
            y.current && w && y.current(w), z.current && x && z.current(x);
        }, [
            w,
            x
        ]), (0, d.jsx)('div', {
            className: n,
            ref: v
        });
    }
    _m.propTypes = h, _m.defaultProps = {
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
    var i = _m;
}), a.register('jzeh7', function(_b, c) {
    _q(_b.exports, 'default', function() {
        return _i;
    });
    var d = a('caZad'),
        e = a('iWivW'),
        f = a('mdAM3'),
        g = a('zZJfb');
    const h = (_b, _q) => {
        let i = _b.deviceOption.codeGridSchema.customBlocks || [];
        const j = (null == _q ? void 0 : _q.customBlocks) || [];
        return (null == _q ? void 0 : _q.blockedCustomBlocks) && (i = i.filter(_b => {
            var k;
            return !(null === (k = _q.blockedCustomBlocks) || void 0 === k ? void 0 : k.includes(_b));
        })), {
            deviceSpecificBlocks: i,
            triggerSpecificBlocks: j
        };
    };
    var _i = (_b, _q) => {
        var j, k;
        let l, _m = [],
            n = [];
        const o = (0, g.default)(_b);
        if (o) {
            var p, q;
            const r = null === (p = e.default.world.devices.codeGrids.get(_b)) || void 0 === p || null === (q = p.items) || void 0 === q ? void 0 : q.get(_q);
            if (r) {
                const s = o.deviceOption.codeGridSchema.triggers.find(s => s.type === r.triggerType);
                var t;
                if (s)
                    l = h(o, s), (null === (t = s.blockedGlobalBlocks) || void 0 === t ? void 0 : t.length) && (n = s.blockedGlobalBlocks);
                else
                    l = h(o);
            }
        }
        l && l.triggerSpecificBlocks.length && _m.push({
            name: d.default.triggerOnly.name,
            color: d.default.triggerOnly.color,
            blocks: l.triggerSpecificBlocks.map(_b => ({
                type: _b
            })).filter(_b => (0, f.CanAddCustomBlock)(_b.type))
        }), (null == l ? void 0 : l.deviceSpecificBlocks.length) && _m.push({
            name: d.default.deviceOnly.name,
            color: d.default.triggerOnly.color,
            blocks: l.deviceSpecificBlocks.map(_b => ({
                type: _b
            })).filter(_b => (0, f.CanAddCustomBlock)(_b.type))
        });
        let p = JSON.parse((null === (j = e.default.worldOptions) || void 0 === j || null === (k = j.codeGrids) || void 0 === k ? void 0 : k.blockCategories) || '[]');
        n.length && (p = p.map(_b => ({
            ..._b,
            blocks: _b.blocks.filter(_b => !n.includes(_b.type))
        }))), _m = [
            ..._m,
            ...p
        ];
        return {
            kind: 'categoryToolbox',
            contents: _m.map(_b => {
                const _q = _b.custom ? {
                    custom: _b.custom
                } : {};
                return {
                    kind: 'category',
                    name: _b.name,
                    colour: _b.color,
                    expanded: !0,
                    contents: _b.blocks.map(_b => ({
                        kind: 'block',
                        type: _b.type,
                        message0: _b.type
                    })),
                    ..._q
                };
            })
        };
    };
}), a.register('caZad', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        triggerOnly: {
            name: 'For This Block',
            color: '#FFBF00'
        },
        deviceOnly: {
            name: 'For This Device',
            color: '#FFBF00'
        }
    };
}), a.register('mdAM3', function(b, c) {
    _g(b.exports, 'CanAddCustomBlock', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('O3NOb');
    const _f = b => {
        const _g = d.default.worldOptions.codeGrids.customBlocksParsed.find(_g => _g.type === b);
        if (!_g)
            return !0;
        const h = _g.minimumRoleLevel,
            i = _g.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(h, i);
    };
}), a.register('fi5uw', function(b, c) {
    _l(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = (b, _l) => {
        const f = d.useRef(0),
            g = d.useRef(),
            h = b => g.current = b,
            i = d => {
                const j = b[f.current];
                if (!j)
                    return f.current = 0, void i(d);
                if (j(d, g.current, h))
                    f.current = f.current + 1, f.current === b.length && (_l(g.current), f.current = 0);
                else {
                    if (0 === f.current)
                        return;
                    f.current = 0, i(d);
                }
            };
        return [b => {
            i(b);
        }];
    };
}), a.register('wqlaN', function(b, c) {
    _l(b.exports, 'default', function() {
        return _e;
    });
    var d = a('uaSUf');
    var _e = _l => [
        _l => _l.type === _h(d).Events.TOOLBOX_ITEM_SELECT,
        (a, b, c) => {
            if (a.type === _h(d).Events.CREATE && a.json && a.json.type) {
                if (_l.some(_h => a.json.type.includes(_h)))
                    return c({
                        ...b,
                        blockId: a.blockId
                    }), !0;
            }
            return !1;
        },
        (_l, a) => _l.type === _h(d).Events.SELECTED && (_l.newElementId && _l.newElementId === a.blockId),
        (_l, a) => !(_l.type !== _h(d).Events.BLOCK_DRAG || !_l.isStart || _l.blockId !== a.blockId),
        (_l, a, b) => {
            if (_l.type === _h(d).Events.BLOCK_DRAG && !_l.isStart && _l.blockId === a.blockId) {
                var f, g;
                const _h = null === (f = _l.blocks) || void 0 === f || null === (g = f[0]) || void 0 === g ? void 0 : g.getRelativeToSurfaceXY();
                if (_h)
                    return b({
                        ...a,
                        x: _h.x,
                        y: _h.y
                    }), !0;
            }
            return !1;
        }
    ];
}), a.register('Znlkb', function(b, c) {
    _l(b.exports, 'default', function() {
        return _e;
    });
    var d = a('uaSUf');
    var _e = _l => {
        const {
            text: f,
            location: g,
            workspace: h
        } = _l;
        let i = 0,
            j = 0;
        if (g)
            i = g.x, j = g.y;
        else {
            const k = h.getAllBlocks(!0);
            if (k.length) {
                const _l = k[k.length - 1].getRelativeToSurfaceXY();
                i = _l.x, j = _l.y;
            }
        }
        i += 40, j += 40, i = Math.round(i), j = Math.round(j);
        const k = _b(d).serialization.workspaces.save(h);
        k.blocks || (k.blocks = {
            blocks: []
        }), k.blocks.blocks.push({
            type: 'text',
            x: i,
            y: j,
            fields: {
                TEXT: f
            }
        }), _b(d).serialization.workspaces.load(k, h);
    };
}), a.register('Ggo1o', function(_b, c) {
    _l(_b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        debouncedSaveDurationMs: 150
    };
}), a.register('2v3ft', function(b, c) {
    _l(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = b => {
        (0, e.default)(d.default.setCodeGridJSON, {
            json: b.json,
            deviceId: b.deviceId,
            gridId: b.gridId
        });
    };
}), a.register('QN7GP', function(b, c) {
    _l(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('vShe/'),
        h = a('/TVUI'),
        i = a('aysQ9'),
        j = a('Dj6qx');
    let k, l, m = b => b;
    var _n = b => (0, d.jsx)(_o, {
        children: (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(h.default, {
                    deviceId: b.deviceId,
                    gridId: b.gridId
                }),
                b.isOwner ? (0, d.jsx)(i.default, {
                    blockCount: b.blockCount,
                    openChannelBrowser: b.openChannelBrowser,
                    openPropertyBrowser: b.openPropertyBrowser
                }) : (0, d.jsx)(j.default, {
                    gridOwner: b.gridOwner
                })
            ]
        })
    });
    const _o = (0, e.default)(f.Centered).attrs({
            className: 'maxAll'
        })(k || (k = m`
  flex-shrink: 0;
  color: ${ 0 };
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`), g.default.White),
        _p = e.default.div(l || (l = m``));
}), a.register('/TVUI', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('j2ADs');
    a('LEQ5w');
    var f = a('b5kvC'),
        g = a('vShe/'),
        h = a('qVhMZ'),
        i = a('QVC+I'),
        j = a('JV94u');
    var _k = b => (0, d.jsxs)(d.Fragment, {
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
                children: (0, j.default)(b.deviceId, b.gridId)
            })
        ]
    });
}), a.register('aysQ9', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('cvto726'),
        g = a('j2ADs');
    a('LEQ5w');
    var h = a('PMl60'),
        i = a('bHGrl'),
        j = a('QVC+I');
    var _k = b => {
        const {
            memorySystem: _l
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
                            onClick: b.openChannelBrowser,
                            type: 'primary',
                            children: 'Channel Browser'
                        }),
                        (0, d.jsx)(e.default, {
                            onClick: b.openPropertyBrowser,
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
                            (0, h.numberWithCommas)(b.blockCount),
                            '/',
                            (0, h.numberWithCommas)(_l.limits.blocksPerCodeGrid),
                            ' ',
                            j.default.blocklyBlock.plural,
                            ' placed'
                        ]
                    })
                })
            ]
        });
    };
}), a.register('Dj6qx', function(b, c) {
    _f(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('j2ADs');
    a('LEQ5w');
    var g = a('b5kvC'),
        h = a('FuBjM');
    var _i = b => b.gridOwner ? (0, d.jsxs)(d.Fragment, {
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
                            children: (0, h.default)(b.gridOwner)
                        }),
                        ' ',
                        'is currently editing this block. Only one person can edit a block at a time.'
                    ]
                })
            })
        ]
    }) : null;
}), a.register('FuBjM', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('iWivW');
    var _e = b => {
        const _f = d.default.characters.characters.get(b);
        return _f ? _f.name : 'Player';
    };
}), a.register('EuBHl', function(b, c) {
    _p(b.exports, 'Modal', function() {
        return _m;
    }), _p(b.exports, 'ContentContainer', function() {
        return _n;
    }), _p(b.exports, 'CodeGridEditor', function() {
        return _o;
    });
    var d = a('TwXYL'),
        e = a('Axq+p'),
        f = a('vShe/'),
        g = a('0HHAH');
    let h, i, j, k, l = b => b;
    e.default.div(h || (h = l`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`));
    const _m = (0, e.default)(d.motion.div).attrs({
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
        _n = (0, e.default)(g.Centered).attrs({
            className: 'maxAll'
        })(j || (j = l``)),
        _o = e.default.div.attrs({
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
}), a.register('OBEOK', function(b, c) {
    _p(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = b => {
        (0, e.default)(d.default.leaveCodeGrid, {
            deviceId: b.deviceId,
            gridId: b.gridId
        });
    };
}), a.register('lKsve', function(b, c) {
    _p(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = b => {
        (0, e.default)(d.default.joinCodeGrid, {
            deviceId: b.deviceId,
            gridId: b.gridId
        });
    };
}), a.register('Le6om', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('sgToH'),
        g = a('ewwAh'),
        h = a('cvto726'),
        i = a('j2ADs'),
        j = a('4iV4e'),
        k = a('ryWAy'),
        l = a('m8UaK'),
        m = a('MM421'),
        n = a('0PFEY');
    var _o = b => {
        const [_p, q] = e.useState(-1), [r, s] = e.useState(''), t = e.useRef(), u = (0, l.default)(b.category), v = e.useMemo(() => (0, j.orderBy)(r ? u.filter(b => b.toLowerCase().includes(r.toLowerCase())) : u, [b => b.toLowerCase()], ['asc']), [r]);
        (0, k.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            const w = _p + 1;
            v[w] && q(w);
        }, [
            v.length,
            _p
        ]), (0, k.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            if (-1 === _p)
                return;
            const w = Math.max(0, _p - 1);
            q(w);
        }, [
            v.length,
            _p
        ]);
        const w = _p => {
            b.onItemSelected(_p), b.close();
        };
        return (0, d.jsx)('div', {
            onClick: n.default,
            children: (0, d.jsxs)(f.default, {
                open: b.visible,
                onClose: _p => {
                    _p.stopPropagation(), b.close();
                },
                placement: 'right',
                width: 400,
                afterOpenChange: b => {
                    var x;
                    s(''), q(-1), b && (null == t || null === (x = t.current) || void 0 === x || x.focus());
                },
                title: b.title,
                children: [
                    (0, d.jsx)(g.default, {
                        ref: t,
                        size: 'large',
                        className: 'maxWidth',
                        placeholder: b.searchPlaceholder,
                        style: {
                            marginBottom: 20
                        },
                        allowClear: !0,
                        value: r,
                        onChange: b => {
                            s(b.target.value), q(0);
                        },
                        onPressEnter: () => {
                            const x = v[_p];
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
                        children: v.map((b, q) => (0, d.jsx)(m.default, {
                            name: b,
                            focused: _p === q,
                            onSelect: () => w(b)
                        }, b))
                    }) : (0, d.jsx)(i.default.Text, {
                        children: b.noResultsFilteredText
                    }) : (0, d.jsx)(i.default.Text, {
                        children: b.noResultsText
                    })
                ]
            })
        });
    };
}), a.register('MM421', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('cH8qQ'),
        g = a('j2ADs');
    let h;
    var _i = b => {
        const {
            token: {
                borderRadius: _j
            }
        } = f.default.useToken();
        return (0, d.jsx)(_j, {
            borderRadius: _j,
            focused: b.focused,
            onClick: b.onSelect,
            children: (0, d.jsx)(g.default.Text, {
                children: b.name
            })
        });
    };
    const _j = e.default.div(h || (h = (b => b)`
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
`), b => b.borderRadius, b => b.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)');
});