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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _K;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = (i = c('.....'), c('.....')),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....'),
        B = c('.....'),
        C = c('.....'),
        D = c('.....'),
        E = c('.....');
    let F, G, H, I, J = K => K;
    var _K = (0, h.observer)(() => {
        const [L, M] = (0, i.useState)(!0), [N, O] = (0, i.useState)((0, o.default)());
        i.useEffect(() => (0, x.ReactionToMultipleProps)([
            () => w.default.memorySystem.usedMemoryCost,
            () => w.default.me.adding.terrain.brushSize,
            () => w.default.me.adding.terrain.buildTerrainAsWall,
            () => w.default.memorySystem.counters.collidingTiles,
            () => w.default.memorySystem.counters.nonCollidingTiles,
            () => w.default.memorySystem.counters.wires,
            () => w.default.memorySystem.counters.codeGrids
        ], () => {
            O((0, o.default)());
        }, {
            fireImmediately: !0
        }), []), (0, n.default)({
            setShow: M
        });
        const P = (0, v.default)();
        i.useEffect(() => {
            P || h();
        }, [P]);
        const Q = () => {
            (0, p.default)(q.NoneScreen.home), (0, m.default)(l.default.none), (0, r.default)(s.AddScreen.home);
        };
        return (0, t.default)(a(u).Input.Keyboard.KeyCodes.ESC, Q), L ? (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)(_L, {
                children: (0, g.jsxs)(_N, {
                    initial: {
                        y: '100%',
                        opacity: 0.25
                    },
                    animate: {
                        y: '0%',
                        opacity: 1
                    },
                    exit: {
                        y: '100%',
                        opacity: 0.25
                    },
                    transition: {
                        duration: 0.2,
                        ease: 'easeOut'
                    },
                    children: [
                        (0, g.jsx)(_M, {
                            children: (0, g.jsx)(E.default, {
                                children: (0, g.jsx)(D.default, {
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    onClick: Q
                                })
                            })
                        }),
                        (0, g.jsx)(C.default, {
                            addingInfo: N
                        }),
                        N.notAllowedToAddMessage ? (0, g.jsx)(_O, {
                            children: (0, g.jsxs)(z.default.Text, {
                                style: {
                                    fontWeight: A.FontWeights.Bold
                                },
                                children: [
                                    (0, g.jsx)(B.default, {
                                        name: 'fas fa-exclamation-circle'
                                    }),
                                    '\xA0\xA0',
                                    N.notAllowedToAddMessage
                                ]
                            })
                        }) : null
                    ]
                })
            })
        }) : null;
    });
    const _L = j.default.div.attrs({
            className: 'flex maxAll'
        })(F || (F = J`
  align-items: flex-end;
  position: relative;
`)),
        _M = j.default.div.attrs({
            className: 'maxAll flex'
        })(G || (G = J`
  position: absolute;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`)),
        _N = (0, j.default)(y.motion.div).attrs({
            className: 'maxWidth'
        })(H || (H = J`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
`), k.default.White),
        _O = j.default.div.attrs({
            className: 'maxWidth'
        })(I || (I = J`
  padding: 10px 25px;
  background: #c62828;
`));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    var _p = q => {
        const {
            me: r,
            gui: s
        } = (0, k.default)();
        f.useEffect(() => {
            const t = (0, h.default)(g.default.Adding.SwitchToRemoveMode(), () => {
                    (0, n.default)() && (0, l.default)(j.default.removing);
                }),
                u = (0, h.default)(g.default.Adding.GoBack(), () => {
                    (0, l.default)(j.default.none), s.none.screen = i.NoneScreen.add;
                }),
                v = (0, h.default)(g.default.Adding.Terrain.TogglePiece(), () => {
                    if ((0, m.isAddingTerrain)()) {
                        if ((0, o.isPlatformer)())
                            return;
                        r.adding.terrain.buildTerrainAsWall = !r.adding.terrain.buildTerrainAsWall;
                    }
                }),
                w = (0, h.default)(g.default.Adding.Terrain.BrushSize.One(), () => {
                    (0, m.isAddingTerrain)() && (r.adding.terrain.brushSize = 1);
                }),
                x = (0, h.default)(g.default.Adding.Terrain.BrushSize.Two(), () => {
                    (0, m.isAddingTerrain)() && (r.adding.terrain.brushSize = 2);
                }),
                y = (0, h.default)(g.default.Adding.Terrain.BrushSize.Three(), () => {
                    (0, m.isAddingTerrain)() && (r.adding.terrain.brushSize = 3);
                }),
                z = (0, h.default)(g.default.Adding.Terrain.BrushSize.Four(), () => {
                    (0, m.isAddingTerrain)() && (r.adding.terrain.brushSize = 4);
                }),
                A = (0, h.default)(g.default.Adding.ToggleShow(), () => {
                    q.setShow(B => !B);
                });
            return () => {
                t(), u(), v(), w(), x(), y(), z(), A();
            };
        }, []);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _B;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....');
    var _B = () => {
        if ((0, i.isAddingTerrain)()) {
            const C = j.default.worldOptions.terrainOptions.find(D => D.id === j.default.me.adding.terrain.currentlySelectedTerrain),
                D = (0, s.CanAddTile)({
                    colliding: j.default.me.adding.terrain.buildTerrainAsWall,
                    count: j.default.me.adding.terrain.brushSize * j.default.me.adding.terrain.brushSize
                }),
                E = (0, t.GetTileMessage)({
                    reason: D.reason,
                    colliding: j.default.me.adding.terrain.buildTerrainAsWall,
                    count: j.default.me.adding.terrain.brushSize * j.default.me.adding.terrain.brushSize
                }),
                F = j.default.me.adding.terrain.buildTerrainAsWall ? j.default.memorySystem.costs.collidingTile : j.default.memorySystem.costs.nonCollidingTile;
            return {
                tagline: 'Adding',
                title: `${ (null == C ? void 0 : C.name) || 'Terrain' }`,
                memoryCost: `+${ F } ${ y.MemoryName } per tile`,
                notAllowedToAddMessage: E
            };
        }
        if ((0, g.isAddingDevice)()) {
            if ((0, h.isAttemptingToAddExistingDevice)()) {
                var G;
                if (j.default.me.editing.device.usingMultiselect) {
                    const H = (0, q.CanCopyMultiselect)(),
                        I = (0, r.GetMultiselectMessage)(H),
                        J = j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.copy,
                        K = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices,
                        L = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices.filter(M => M.deviceOption.id === m.default.prop),
                        M = L.length > 0,
                        N = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices.length === L.length;
                    let O = `Multiple ${ x.default.device.plural }`;
                    if (M && !N ? O = `Multiple ${ x.default.device.plural }/${ x.default.prop.plural }` : N && (O = `Multiple ${ x.default.prop.plural }`), 1 === K.length) {
                        const P = K[0],
                            Q = (0, z.FetchDeviceName)(null == P ? void 0 : P.id);
                        Q && (O = Q);
                    }
                    return {
                        tagline: J ? 'Copying' : 'Moving',
                        title: O,
                        memoryCost: P.totalCost ? `+${ P.totalCost } ${ y.MemoryName }` : void 0,
                        notAllowedToAddMessage: Q
                    };
                }
                const Q = (0, p.default)().worldManager.devices.getDeviceById(j.default.me.adding.devices.existingDevice.id),
                    R = j.default.worldOptions.deviceOptions.find(S => {
                        var T;
                        return S.id === (null == Q || null === (T = Q.deviceOption) || void 0 === T ? void 0 : T.id);
                    }),
                    S = j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.copy,
                    T = (0, o.CanCopyDevice)({
                        deviceId: null === (P = (0, M.attemptingToAddExistingDevice)()) || void 0 === P ? void 0 : P.id
                    });
                let U = 'Device';
                if (R) {
                    const V = (0, z.FetchDeviceName)(Q.id);
                    V && (U = V);
                }
                if (!R)
                    return {
                        tagline: S ? 'Copying' : 'Moving',
                        title: (0, w.CapitalizeFirstLetter)(x.default.device.singular)
                    };
                let W = '';
                if (T.memoryCost && (W = `+${ T.memoryCost } ${ y.MemoryName }`), !T.canCopy && S) {
                    return {
                        tagline: 'Copying',
                        title: U,
                        memoryCost: W,
                        notAllowedToAddMessage: (0, n.GetDeviceOptionMessage)({
                            addingOrCopying: 'copying',
                            reason: T.reason,
                            deviceTypeId: R.id,
                            deviceId: (0, M.attemptingToAddExistingDevice)().id
                        })
                    };
                }
                return {
                    tagline: j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.cut ? 'Moving' : 'Copying',
                    title: U,
                    memoryCost: j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.cut ? void 0 : W
                };
            }
            if (j.default.me.adding.devices.selectedDeviceType) {
                const V = j.default.worldOptions.deviceOptions.find(W => W.id === j.default.me.adding.devices.selectedDeviceType),
                    W = (0, l.CanAddDevice)({
                        deviceTypeId: V.id
                    }),
                    X = (0, n.GetDeviceOptionMessage)({
                        addingOrCopying: 'adding',
                        deviceTypeId: V.id,
                        reason: W.reason
                    });
                let Y = V.name;
                if (V.id === m.default.prop && j.default.me.adding.devices.currentlySelectedProp) {
                    const Z = (0, A.default)(j.default.me.adding.devices.currentlySelectedProp);
                    (null == Z ? void 0 : Z.name) && (Y = Z.name);
                }
                return {
                    tagline: 'Adding',
                    title: Y || (0, w.CapitalizeFirstLetter)(x.default.device.singular),
                    memoryCost: W.memoryCost ? `+${ W.memoryCost } ${ y.MemoryName }` : void 0,
                    notAllowedToAddMessage: X
                };
            }
        }
        if ((0, k.IsAddingWire)()) {
            const Z = (0, u.CanAddWire)(),
                $ = (0, v.GetWireMessage)({
                    reason: Z.reason
                });
            return {
                tagline: 'Adding',
                title: (0, w.CapitalizeFirstLetter)(x.default.wire.singular),
                memoryCost: `+${ j.default.memorySystem.costs.wire } ${ y.MemoryName }`,
                notAllowedToAddMessage: $
            };
        }
        return {
            tagline: 'Adding',
            title: 'Unknown Entity'
        };
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetDeviceOptionMessage', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const _k = l => {
        if (l.reason === g.OutOfResourcesReason.limit) {
            const m = (0, j.CountDevicesOnMap)({
                deviceTypeId: l.deviceTypeId
            });
            return `Reached placement limit for this ${ i.default.device.singular } (${ m.current }/${ m.max })`;
        }
        let n = i.default.device.singular;
        return l.deviceTypeId === f.default.prop && (n = i.default.prop.singular), l.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ h.MemoryName } available to place this ${ n }` : '';
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        terrain: {
            singular: 'terrain',
            plural: 'terrains'
        },
        prop: {
            singular: 'prop',
            plural: 'props'
        },
        device: {
            singular: 'device',
            plural: 'devices'
        },
        wire: {
            singular: 'wire',
            plural: 'wires'
        }
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CountDevicesOnMap', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        var j, k;
        var l;
        return {
            current: null !== (k = f.default.memorySystem.counters.devices.get(i.deviceTypeId)) && void 0 !== k ? k : 0,
            max: null !== (l = null === (j = (0, g.FetchDeviceOptionById)(i.deviceTypeId)) || void 0 === j ? void 0 : j.maxOnMap) && void 0 !== l ? l : f.default.memorySystem.limits.deviceMaxOnMapDefault
        };
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetMultiselectMessage', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const _k = l => {
        if (l.reason === g.OutOfResourcesReason.limit) {
            var m;
            const n = null === (m = (0, h.FetchDeviceOptionById)(l.limitReachedDeviceTypeId)) || void 0 === m ? void 0 : m.name,
                o = (0, i.CountDevicesOnMap)({
                    deviceTypeId: l.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${ n } ${ j.default.device.plural }. Used ${ o.current }/${ o.max }.`;
        }
        return l.reason === g.OutOfResourcesReason.noMemory ? `Not enough memory to copy. Requires ${ l.totalCost }, used ${ f.default.memorySystem.usedMemoryCost }/${ f.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetTileMessage', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = k => {
        const l = k.colliding ? f.default.memorySystem.counters.collidingTiles : f.default.memorySystem.counters.nonCollidingTiles,
            m = k.colliding ? f.default.memorySystem.limits.collidingTiles : f.default.memorySystem.limits.nonCollidingTiles,
            n = k.colliding ? 'wall' : 'floor',
            o = (k.colliding ? f.default.memorySystem.costs.collidingTile : f.default.memorySystem.costs.nonCollidingTile) * k.count;
        return k.reason === g.OutOfResourcesReason.limit ? `Can't add ${ k.count } more ${ n } ${ i.default.terrain.singular }. Used ${ l }/${ m }` : k.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ h.MemoryName } to add ${ k.count } ${ n } ${ i.default.terrain.singular }. Requires ${ o } ${ h.MemoryName }.` : '';
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetWireMessage', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        const j = f.default.memorySystem.counters.wires,
            k = f.default.memorySystem.limits.wires;
        if (i.reason === g.OutOfResourcesReason.limit)
            return `Can't add more wires. Used ${ j }/${ k }`;
        const l = f.default.memorySystem.costs.wire;
        return i.reason === g.OutOfResourcesReason.noMemory ? `Not enough memory to add wire. Requires ${ l }, used ${ f.default.memorySystem.usedMemoryCost }/${ f.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'FetchDeviceName', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = j => {
        const k = h.default.world.devices.devices.get(j);
        if (!k)
            return '';
        if (k.name)
            return k.name;
        if (k.deviceOption.id === f.default.prop) {
            const l = k.options;
            if (l.propId) {
                var m;
                const n = null === (m = (0, g.default)(l.propId)) || void 0 === m ? void 0 : m.name;
                if (n)
                    return n;
            }
        }
        return n.deviceOption.name;
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = j => {
        j !== h.AddScreen.home && (0, f.EmitTutorialEvent)({
            event: f.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: j
        }), g.default.gui.none.addMenu.screen = j;
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'ReactionToMultipleProps', function() {
        return _g;
    });
    var f = c('.....');
    const _g = (h, i, j) => {
        const k = [];
        return h.forEach(l => {
            const m = (0, f.reaction)(l, i, j);
            k.push(m);
        }), () => {
            k.forEach(l => {
                l();
            });
        };
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    let k, l, m = n => n;
    var _n = o => (0, f.jsxs)(_o, {
        children: [
            (0, f.jsxs)(_p, {
                children: [
                    (0, f.jsx)(h.default, {
                        addingInfo: o.addingInfo
                    }),
                    (0, f.jsx)(i.default, {})
                ]
            }),
            (0, f.jsx)(j.default, {})
        ]
    });
    const _o = g.default.div(k || (k = m`
  padding: 25px;
`)),
        _p = g.default.div.attrs({
            className: 'flex between vc'
        })(l || (l = m``));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....');
    var _j = k => {
        const l = k.addingInfo;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)(g.default.Text, {
                    style: {
                        fontFamily: h.Fonts.FugazOne
                    },
                    className: 'allCaps',
                    children: [
                        l.tagline,
                        ':'
                    ]
                }),
                (0, f.jsx)(g.default.Title, {
                    level: 2,
                    style: {
                        fontFamily: h.Fonts.FugazOne,
                        color: i.default.White,
                        marginTop: 2
                    },
                    className: 'allCaps',
                    children: l.title
                }),
                l.memoryCost ? (0, f.jsx)(g.default.Text, {
                    style: {
                        marginTop: 5
                    },
                    children: l.memoryCost
                }) : null
            ]
        });
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    var _i = () => (0, g.isAddingTerrain)() ? (0, f.jsx)(h.default, {}) : (0, f.jsx)('div', {});
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _A;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....');
    let v, w, x, y, z = A => A;
    var _A = (0, k.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: B
                }
            }
        } = (0, o.default)(), C = l.useRef(), D = l.useRef(), E = B.buildTerrainAsWall;
        return (0, f.jsx)(p.default, {
            children: (0, f.jsx)(_B, {
                children: (0, f.jsxs)(i.default, {
                    direction: 'vertical',
                    size: 10,
                    children: [
                        (0, f.jsxs)(i.default, {
                            size: 10,
                            children: [
                                (0, f.jsxs)(_D, {
                                    children: [
                                        (0, f.jsx)(_E, {
                                            children: (0, f.jsx)(j.default.Text, {
                                                style: _F,
                                                children: 'Layer'
                                            })
                                        }),
                                        (0, f.jsx)(_C, {
                                            children: (0, f.jsx)(h.default, {
                                                ref: C,
                                                style: {
                                                    width: 150
                                                },
                                                value: B.currentlySelectedTerrainDepth,
                                                onChange: F => {
                                                    var G, H;
                                                    B.currentlySelectedTerrainDepth = F, null == C || null === (G = C.current) || void 0 === G || null === (H = G.blur) || void 0 === H || H.call(G);
                                                },
                                                children: new Array(n.default.maxDepth - n.default.minDepth + 1).fill(0).map((F, G) => (0, f.jsxs)(h.default.Option, {
                                                    value: G + 1,
                                                    children: [
                                                        G + 1,
                                                        ' - ',
                                                        q.TerrainLayerNames[G] || 'Layer'
                                                    ]
                                                }, `terrain-layer-${ G }`))
                                            })
                                        })
                                    ]
                                }),
                                (0, f.jsxs)(_D, {
                                    children: [
                                        (0, f.jsx)(_E, {
                                            children: (0, f.jsx)(j.default.Text, {
                                                style: _F,
                                                children: 'Brush Size'
                                            })
                                        }),
                                        (0, f.jsx)(_C, {
                                            children: (0, f.jsx)(h.default, {
                                                ref: D,
                                                style: {
                                                    width: 100
                                                },
                                                value: B.brushSize,
                                                onChange: F => {
                                                    var G, H;
                                                    B.brushSize = F, null == D || null === (G = D.current) || void 0 === G || null === (H = G.blur) || void 0 === H || H.call(G);
                                                },
                                                children: new Array(4).fill(0).map((F, G) => (0, f.jsx)(h.default.Option, {
                                                    value: G + 1,
                                                    children: G + 1
                                                }, `terrain-brush-size-${ G }`))
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, u.isPlatformer)() ? null : (0, f.jsxs)(_D, {
                            children: [
                                (0, f.jsx)(_E, {
                                    children: (0, f.jsxs)(j.default.Text, {
                                        style: _F,
                                        children: [
                                            (0, s.CapitalizeFirstLetter)(t.default.terrain.singular),
                                            ' ',
                                            'Type'
                                        ]
                                    })
                                }),
                                (0, f.jsx)(_C, {
                                    children: (0, f.jsxs)(g.default.Group, {
                                        style: {
                                            width: '100%'
                                        },
                                        children: [
                                            (0, f.jsx)(g.default, {
                                                type: E ? 'default' : 'primary',
                                                onClick: () => {
                                                    (0, u.isPlatformer)() || (B.buildTerrainAsWall = !1);
                                                },
                                                block: !0,
                                                children: 'Floor'
                                            }),
                                            (0, f.jsx)(g.default, {
                                                type: E ? 'primary' : 'default',
                                                onClick: () => {
                                                    (0, u.isPlatformer)() || (B.buildTerrainAsWall = !0);
                                                },
                                                block: !0,
                                                children: 'Wall'
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    });
    const _B = m.default.div(v || (v = z``)),
        _C = m.default.div.attrs({
            className: 'maxWidth'
        })(w || (w = z``)),
        _D = (0, m.default)(_C)(x || (x = z``)),
        _E = (0, m.default)(_C)(y || (y = z`
  margin-bottom: 4px;
`)),
        _F = {
            fontWeight: r.FontWeights.Bold,
            fontStyle: 'italic'
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'TerrainLayerNames', function() {
        return _f;
    });
    const _f = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    var _i = (0, c('.....').observer)(() => (0, g.IsAddingWire)() ? (0, f.jsx)(h.default, {}) : null);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _v;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....');
    let r, s, t, u = v => v;
    var _v = (0, m.observer)(() => {
        const {
            me: {
                adding: {
                    wires: w
                },
                context: {
                    __devicesUnderCursor: x
                }
            }
        } = (0, l.default)(), y = g.useMemo(() => {
            var z;
            return w.hoveringOverSupportedDevice ? x[0] && null !== (z = (0, n.FetchDeviceName)(x[0])) && void 0 !== z ? z : (0, o.capitalizeFirstLetter)(p.default.device.singular) : `Select a ${ p.default.device.singular } or ${ p.default.prop.singular } to ${ w.startDeviceSelected ? 'complete' : 'start' } the ${ p.default.wire.singular }`;
        }, [
            w.hoveringOverSupportedDevice,
            x,
            w.startDeviceSelected
        ]);
        return (0, f.jsxs)(h.CenteredColumn, {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(_w, {
                    children: (0, f.jsx)(i.default.Text, {
                        italic: !0,
                        children: y
                    })
                }),
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)(_y, {
                            selected: !w.startDeviceSelected,
                            children: 'Out'
                        }),
                        (0, f.jsx)(_z, {}),
                        (0, f.jsx)(_y, {
                            selected: w.startDeviceSelected,
                            children: 'In'
                        })
                    ]
                })
            ]
        });
    });
    const _w = j.default.div(r || (r = u``)),
        _x = (0, j.default)(h.Centered).attrs({
            className: 'maxWidth'
        })(s || (s = u``)),
        _y = z => (0, f.jsx)(h.Centered, {
            style: {
                height: 50,
                width: 50,
                color: q.default.White,
                fontFamily: k.Fonts.FugazOne,
                textTransform: 'uppercase',
                lineHeight: 1,
                fontSize: 10,
                background: 'rgba(255,255,255,0.15)',
                border: (z.selected ? 3 : 0) + 'px solid #ffca28',
                flexShrink: 0,
                borderRadius: '50%'
            },
            children: z.children
        }),
        _z = j.default.div(t || (t = u`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
});