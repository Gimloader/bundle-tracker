function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, L) {
    Object.defineProperty(a, b, {
        get: c,
        set: L,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('AASUi', function(L, M) {
    var d;
    d = L.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(L.exports, 'default', function() {
        return I;
    });
    var e = c('8kSQZ'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('S/jX4'),
        j = c('iAe3o'),
        k = c('TnPB+'),
        l = c('yJU7a'),
        m = c('0Gzg6'),
        n = c('/PHqW'),
        o = c('/iKSE'),
        p = c('M/vL7'),
        q = c('kkxCN'),
        r = (g = c('uPP4W'), c('+0Tb/')),
        s = c('kneek'),
        t = c('ulmmZ'),
        u = c('7Sbqr'),
        v = c('xXIOh'),
        w = c('b9Bct'),
        x = c('UzdPH'),
        y = c('gSUVO'),
        z = c('iMnBi'),
        A = c('/gzrK'),
        B = c('obWo+'),
        C = c('EefFJ');
    let D, E, F, G, H = a => a;
    var I = (0, f.observer)(() => {
        const [J, K] = (0, g.useState)(!0), [L, M] = (0, g.useState)((0, m.default)());
        g.useEffect(() => (0, v.ReactionToMultipleProps)([
            () => u.default.memorySystem.usedMemoryCost,
            () => u.default.me.adding.terrain.brushSize,
            () => u.default.me.adding.terrain.buildTerrainAsWall,
            () => u.default.memorySystem.counters.collidingTiles,
            () => u.default.memorySystem.counters.nonCollidingTiles,
            () => u.default.memorySystem.counters.wires,
            () => u.default.memorySystem.counters.codeGrids
        ], () => {
            M((0, m.default)());
        }, {
            fireImmediately: !0
        }), []), (0, l.default)({
            setShow: K
        });
        const N = (0, t.default)();
        g.useEffect(() => {
            N || f();
        }, [N]);
        const O = () => {
            (0, n.default)(o.NoneScreen.home), (0, k.default)(j.default.none), (0, p.default)(q.AddScreen.home);
        };
        return (0, r.default)(a(s).Input.Keyboard.KeyCodes.ESC, O), J ? (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(J, {
                children: (0, e.jsxs)(L, {
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
                        (0, e.jsx)(K, {
                            children: (0, e.jsx)(C.default, {
                                children: (0, e.jsx)(B.default, {
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    onClick: O
                                })
                            })
                        }),
                        (0, e.jsx)(A.default, {
                            addingInfo: L
                        }),
                        L.notAllowedToAddMessage ? (0, e.jsx)(M, {
                            children: (0, e.jsxs)(x.default.Text, {
                                style: {
                                    fontWeight: y.FontWeights.Bold
                                },
                                children: [
                                    (0, e.jsx)(z.default, {
                                        name: 'fas fa-exclamation-circle'
                                    }),
                                    '\xA0\xA0',
                                    L.notAllowedToAddMessage
                                ]
                            })
                        }) : null
                    ]
                })
            })
        }) : null;
    });
    const J = h.default.div.attrs({
            className: 'flex maxAll'
        })(D || (D = H`
  align-items: flex-end;
  position: relative;
`)),
        K = h.default.div.attrs({
            className: 'maxAll flex'
        })(E || (E = H`
  position: absolute;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`)),
        L = (0, h.default)(w.motion.div).attrs({
            className: 'maxWidth'
        })(F || (F = H`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
`), i.default.White),
        M = h.default.div.attrs({
            className: 'maxWidth'
        })(G || (G = H`
  padding: 10px 25px;
  background: #c62828;
`));
}), c.register('yJU7a', function(a, q) {
    b(a.exports, 'default', function() {
        return n;
    });
    var d = c('uPP4W'),
        e = c('B/6cb'),
        f = c('FFDo5'),
        g = c('/iKSE'),
        h = c('iAe3o'),
        i = c('am7L5'),
        j = c('TnPB+'),
        k = c('qPvuG'),
        l = c('snog9'),
        m = c('HMNV0');
    var n = a => {
        const {
            me: o,
            gui: p
        } = (0, i.default)();
        d.useEffect(() => {
            const q = (0, f.default)(e.default.Adding.SwitchToRemoveMode(), () => {
                    (0, l.default)() && (0, j.default)(h.default.removing);
                }),
                r = (0, f.default)(e.default.Adding.GoBack(), () => {
                    (0, j.default)(h.default.none), p.none.screen = g.NoneScreen.add;
                }),
                s = (0, f.default)(e.default.Adding.Terrain.TogglePiece(), () => {
                    if ((0, k.isAddingTerrain)()) {
                        if ((0, m.isPlatformer)())
                            return;
                        o.adding.terrain.buildTerrainAsWall = !o.adding.terrain.buildTerrainAsWall;
                    }
                }),
                t = (0, f.default)(e.default.Adding.Terrain.BrushSize.One(), () => {
                    (0, k.isAddingTerrain)() && (o.adding.terrain.brushSize = 1);
                }),
                u = (0, f.default)(e.default.Adding.Terrain.BrushSize.Two(), () => {
                    (0, k.isAddingTerrain)() && (o.adding.terrain.brushSize = 2);
                }),
                v = (0, f.default)(e.default.Adding.Terrain.BrushSize.Three(), () => {
                    (0, k.isAddingTerrain)() && (o.adding.terrain.brushSize = 3);
                }),
                w = (0, f.default)(e.default.Adding.Terrain.BrushSize.Four(), () => {
                    (0, k.isAddingTerrain)() && (o.adding.terrain.brushSize = 4);
                }),
                x = (0, f.default)(e.default.Adding.ToggleShow(), () => {
                    a.setShow(a => !a);
                });
            return () => {
                q(), r(), s(), t(), u(), v(), w(), x();
            };
        }, []);
    };
}), c.register('0Gzg6', function(a, D) {
    b(a.exports, 'default', function() {
        return z;
    });
    var d = c('TLG+n'),
        e = c('BbPVz'),
        f = c('k9b/9'),
        g = c('qPvuG'),
        h = c('7Sbqr'),
        i = c('jMYtD'),
        j = c('ZfiQ/'),
        k = c('7X8h3'),
        l = c('SHIqQ'),
        m = c('EVJpa'),
        n = c('dAmf5'),
        o = c('dy0FV'),
        p = c('a9g4s'),
        q = c('RGtXr'),
        r = c('QL3w1'),
        s = c('vA+yT'),
        t = c('8+3er'),
        u = c('RJ/fk'),
        v = c('Wgw1x0'),
        w = c('mCZDR'),
        x = c('YARc1'),
        y = c('ZH/OP');
    var z = () => {
        if ((0, g.isAddingTerrain)()) {
            const A = h.default.worldOptions.terrainOptions.find(A => A.id === h.default.me.adding.terrain.currentlySelectedTerrain),
                B = (0, q.CanAddTile)({
                    colliding: h.default.me.adding.terrain.buildTerrainAsWall,
                    count: h.default.me.adding.terrain.brushSize * h.default.me.adding.terrain.brushSize
                }),
                C = (0, r.GetTileMessage)({
                    reason: B.reason,
                    colliding: h.default.me.adding.terrain.buildTerrainAsWall,
                    count: h.default.me.adding.terrain.brushSize * h.default.me.adding.terrain.brushSize
                }),
                D = h.default.me.adding.terrain.buildTerrainAsWall ? h.default.memorySystem.costs.collidingTile : h.default.memorySystem.costs.nonCollidingTile;
            return {
                tagline: 'Adding',
                title: `${ (null == A ? void 0 : A.name) || 'Terrain' }`,
                memoryCost: `+${ D } ${ w.MemoryName } per tile`,
                notAllowedToAddMessage: C
            };
        }
        if ((0, e.isAddingDevice)()) {
            if ((0, f.isAttemptingToAddExistingDevice)()) {
                var A;
                if (h.default.me.editing.device.usingMultiselect) {
                    const B = (0, o.CanCopyMultiselect)(),
                        C = (0, p.GetMultiselectMessage)(B),
                        D = h.default.me.adding.devices.existingDevice.action === d.ExistingDeviceAddingAction.copy,
                        E = (0, n.default)().actionManager.multiselect.movedOrCopiedDevices,
                        F = (0, n.default)().actionManager.multiselect.movedOrCopiedDevices.filter(B => B.deviceOption.id === k.default.prop),
                        G = F.length > 0,
                        H = (0, n.default)().actionManager.multiselect.movedOrCopiedDevices.length === F.length;
                    let I = `Multiple ${ v.default.device.plural }`;
                    if (G && !H ? I = `Multiple ${ v.default.device.plural }/${ v.default.prop.plural }` : H && (I = `Multiple ${ v.default.prop.plural }`), 1 === E.length) {
                        const J = E[0],
                            K = (0, x.FetchDeviceName)(null == J ? void 0 : J.id);
                        K && (I = K);
                    }
                    return {
                        tagline: D ? 'Copying' : 'Moving',
                        title: I,
                        memoryCost: B.totalCost ? `+${ B.totalCost } ${ w.MemoryName }` : void 0,
                        notAllowedToAddMessage: C
                    };
                }
                const B = (0, n.default)().worldManager.devices.getDeviceById(h.default.me.adding.devices.existingDevice.id),
                    C = h.default.worldOptions.deviceOptions.find(A => {
                        var D;
                        return A.id === (null == B || null === (D = B.deviceOption) || void 0 === D ? void 0 : D.id);
                    }),
                    D = h.default.me.adding.devices.existingDevice.action === d.ExistingDeviceAddingAction.copy,
                    E = (0, m.CanCopyDevice)({
                        deviceId: null === (A = (0, f.attemptingToAddExistingDevice)()) || void 0 === A ? void 0 : A.id
                    });
                let F = 'Device';
                if (C) {
                    const G = (0, x.FetchDeviceName)(B.id);
                    G && (F = G);
                }
                if (!C)
                    return {
                        tagline: D ? 'Copying' : 'Moving',
                        title: (0, u.CapitalizeFirstLetter)(v.default.device.singular)
                    };
                let G = '';
                if (E.memoryCost && (G = `+${ E.memoryCost } ${ w.MemoryName }`), !E.canCopy && D) {
                    return {
                        tagline: 'Copying',
                        title: F,
                        memoryCost: G,
                        notAllowedToAddMessage: (0, l.GetDeviceOptionMessage)({
                            addingOrCopying: 'copying',
                            reason: E.reason,
                            deviceTypeId: C.id,
                            deviceId: (0, f.attemptingToAddExistingDevice)().id
                        })
                    };
                }
                return {
                    tagline: h.default.me.adding.devices.existingDevice.action === d.ExistingDeviceAddingAction.cut ? 'Moving' : 'Copying',
                    title: F,
                    memoryCost: h.default.me.adding.devices.existingDevice.action === d.ExistingDeviceAddingAction.cut ? void 0 : G
                };
            }
            if (h.default.me.adding.devices.selectedDeviceType) {
                const A = h.default.worldOptions.deviceOptions.find(A => A.id === h.default.me.adding.devices.selectedDeviceType),
                    B = (0, j.CanAddDevice)({
                        deviceTypeId: A.id
                    }),
                    C = (0, l.GetDeviceOptionMessage)({
                        addingOrCopying: 'adding',
                        deviceTypeId: A.id,
                        reason: B.reason
                    });
                let D = A.name;
                if (A.id === k.default.prop && h.default.me.adding.devices.currentlySelectedProp) {
                    const E = (0, y.default)(h.default.me.adding.devices.currentlySelectedProp);
                    (null == E ? void 0 : E.name) && (D = E.name);
                }
                return {
                    tagline: 'Adding',
                    title: D || (0, u.CapitalizeFirstLetter)(v.default.device.singular),
                    memoryCost: B.memoryCost ? `+${ B.memoryCost } ${ w.MemoryName }` : void 0,
                    notAllowedToAddMessage: C
                };
            }
        }
        if ((0, i.IsAddingWire)()) {
            const A = (0, s.CanAddWire)(),
                B = (0, t.GetWireMessage)({
                    reason: A.reason
                });
            return {
                tagline: 'Adding',
                title: (0, u.CapitalizeFirstLetter)(v.default.wire.singular),
                memoryCost: `+${ h.default.memorySystem.costs.wire } ${ w.MemoryName }`,
                notAllowedToAddMessage: B
            };
        }
        return {
            tagline: 'Adding',
            title: 'Unknown Entity'
        };
    };
}), c.register('SHIqQ', function(a, d) {
    b(a.exports, 'GetDeviceOptionMessage', function() {
        return i;
    });
    var d = c('7X8h3'),
        e = c('iEonH'),
        f = c('mCZDR'),
        g = c('Wgw1x0'),
        h = c('m0LR2');
    const i = a => {
        if (a.reason === e.OutOfResourcesReason.limit) {
            const j = (0, h.CountDevicesOnMap)({
                deviceTypeId: a.deviceTypeId
            });
            return `Reached placement limit for this ${ g.default.device.singular } (${ j.current }/${ j.max })`;
        }
        let j = g.default.device.singular;
        return a.deviceTypeId === d.default.prop && (j = g.default.prop.singular), a.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ f.MemoryName } available to place this ${ j }` : '';
    };
}), c.register('Wgw1x0', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('m0LR2', function(a, i) {
    b(a.exports, 'CountDevicesOnMap', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('BUfP2');
    const f = a => {
        var g, h;
        var i;
        return {
            current: null !== (h = d.default.memorySystem.counters.devices.get(a.deviceTypeId)) && void 0 !== h ? h : 0,
            max: null !== (i = null === (g = (0, e.FetchDeviceOptionById)(a.deviceTypeId)) || void 0 === g ? void 0 : g.maxOnMap) && void 0 !== i ? i : d.default.memorySystem.limits.deviceMaxOnMapDefault
        };
    };
}), c.register('a9g4s', function(a, l) {
    b(a.exports, 'GetMultiselectMessage', function() {
        return i;
    });
    var d = c('7Sbqr'),
        e = c('iEonH'),
        f = c('BUfP2'),
        g = c('m0LR2'),
        h = c('Wgw1x0');
    const i = a => {
        if (a.reason === e.OutOfResourcesReason.limit) {
            var j;
            const k = null === (j = (0, f.FetchDeviceOptionById)(a.limitReachedDeviceTypeId)) || void 0 === j ? void 0 : j.name,
                l = (0, g.CountDevicesOnMap)({
                    deviceTypeId: a.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${ k } ${ h.default.device.plural }. Used ${ l.current }/${ l.max }.`;
        }
        return a.reason === e.OutOfResourcesReason.noMemory ? `Not enough memory to copy. Requires ${ a.totalCost }, used ${ d.default.memorySystem.usedMemoryCost }/${ d.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('QL3w1', function(a, k) {
    b(a.exports, 'GetTileMessage', function() {
        return h;
    });
    var d = c('7Sbqr'),
        e = c('iEonH'),
        f = c('mCZDR'),
        g = c('Wgw1x0');
    const h = a => {
        const i = a.colliding ? d.default.memorySystem.counters.collidingTiles : d.default.memorySystem.counters.nonCollidingTiles,
            j = a.colliding ? d.default.memorySystem.limits.collidingTiles : d.default.memorySystem.limits.nonCollidingTiles,
            k = a.colliding ? 'wall' : 'floor',
            l = (a.colliding ? d.default.memorySystem.costs.collidingTile : d.default.memorySystem.costs.nonCollidingTile) * a.count;
        return a.reason === e.OutOfResourcesReason.limit ? `Can't add ${ a.count } more ${ k } ${ g.default.terrain.singular }. Used ${ i }/${ j }` : a.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ f.MemoryName } to add ${ a.count } ${ k } ${ g.default.terrain.singular }. Requires ${ l } ${ f.MemoryName }.` : '';
    };
}), c.register('8+3er', function(a, i) {
    b(a.exports, 'GetWireMessage', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('iEonH');
    const f = a => {
        const g = d.default.memorySystem.counters.wires,
            h = d.default.memorySystem.limits.wires;
        if (a.reason === e.OutOfResourcesReason.limit)
            return `Can't add more wires. Used ${ g }/${ h }`;
        const i = d.default.memorySystem.costs.wire;
        return a.reason === e.OutOfResourcesReason.noMemory ? `Not enough memory to add wire. Requires ${ i }, used ${ d.default.memorySystem.usedMemoryCost }/${ d.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('YARc1', function(a, f) {
    b(a.exports, 'FetchDeviceName', function() {
        return g;
    });
    var d = c('7X8h3'),
        e = c('ZH/OP'),
        f = c('7Sbqr');
    const g = a => {
        const h = f.default.world.devices.devices.get(a);
        if (!h)
            return '';
        if (h.name)
            return h.name;
        if (h.deviceOption.id === d.default.prop) {
            const i = h.options;
            if (i.propId) {
                var j;
                const k = null === (j = (0, e.default)(i.propId)) || void 0 === j ? void 0 : j.name;
                if (k)
                    return k;
            }
        }
        return h.deviceOption.name;
    };
}), c.register('M/vL7', function(a, f) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('D0n26'),
        e = c('7Sbqr'),
        f = c('kkxCN');
    var g = a => {
        a !== f.AddScreen.home && (0, d.EmitTutorialEvent)({
            event: d.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: a
        }), e.default.gui.none.addMenu.screen = a;
    };
}), c.register('xXIOh', function(a, f) {
    b(a.exports, 'ReactionToMultipleProps', function() {
        return e;
    });
    var d = c('UnUp5');
    const e = (a, b, c) => {
        const f = [];
        return a.forEach(a => {
            const g = (0, d.reaction)(a, b, c);
            f.push(g);
        }), () => {
            f.forEach(a => {
                a();
            });
        };
    };
}), c.register('/gzrK', function(a, C) {
    b(a.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('h99Nu'),
        f = c('wiAjn'),
        g = c('opHmm'),
        h = c('VcXme');
    let i, j, k = a => a;
    var l = a => (0, d.jsxs)(m, {
        children: [
            (0, d.jsxs)(n, {
                children: [
                    (0, d.jsx)(f.default, {
                        addingInfo: a.addingInfo
                    }),
                    (0, d.jsx)(g.default, {})
                ]
            }),
            (0, d.jsx)(h.default, {})
        ]
    });
    const m = e.default.div(i || (i = k`
  padding: 25px;
`)),
        n = e.default.div.attrs({
            className: 'flex between vc'
        })(j || (j = k``));
}), c.register('wiAjn', function(a, C) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('gSUVO'),
        g = c('S/jX4');
    var h = a => {
        const i = a.addingInfo;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)(e.default.Text, {
                    style: {
                        fontFamily: f.Fonts.FugazOne
                    },
                    className: 'allCaps',
                    children: [
                        i.tagline,
                        ':'
                    ]
                }),
                (0, d.jsx)(e.default.Title, {
                    level: 2,
                    style: {
                        fontFamily: f.Fonts.FugazOne,
                        color: g.default.White,
                        marginTop: 2
                    },
                    className: 'allCaps',
                    children: i.title
                }),
                i.memoryCost ? (0, d.jsx)(e.default.Text, {
                    style: {
                        marginTop: 5
                    },
                    children: i.memoryCost
                }) : null
            ]
        });
    };
}), c.register('opHmm', function(a, C) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('qPvuG'),
        f = c('Ta5t9');
    var g = () => (0, e.isAddingTerrain)() ? (0, d.jsx)(f.default, {}) : (0, d.jsx)('div', {});
}), c.register('Ta5t9', function(a, C) {
    b(a.exports, 'default', function() {
        return y;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('Ly1h3'),
        g = c('5nJMd26'),
        h = c('UzdPH'),
        i = c('Vlfxs'),
        j = c('uPP4W'),
        k = c('h99Nu'),
        l = c('knLPA'),
        m = c('am7L5'),
        n = c('EefFJ'),
        o = c('5YE/F0'),
        p = c('gSUVO'),
        q = c('RJ/fk'),
        r = c('Wgw1x0'),
        s = c('HMNV0');
    let t, u, v, w, x = a => a;
    var y = (0, i.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: z
                }
            }
        } = (0, m.default)(), A = j.useRef(), B = j.useRef(), C = z.buildTerrainAsWall;
        return (0, d.jsx)(n.default, {
            children: (0, d.jsx)(z, {
                children: (0, d.jsxs)(g.default, {
                    direction: 'vertical',
                    size: 10,
                    children: [
                        (0, d.jsxs)(g.default, {
                            size: 10,
                            children: [
                                (0, d.jsxs)(B, {
                                    children: [
                                        (0, d.jsx)(C, {
                                            children: (0, d.jsx)(h.default.Text, {
                                                style: D,
                                                children: 'Layer'
                                            })
                                        }),
                                        (0, d.jsx)(A, {
                                            children: (0, d.jsx)(f.default, {
                                                ref: A,
                                                style: {
                                                    width: 150
                                                },
                                                value: z.currentlySelectedTerrainDepth,
                                                onChange: B => {
                                                    var D, E;
                                                    z.currentlySelectedTerrainDepth = B, null == A || null === (D = A.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
                                                },
                                                children: new Array(l.default.maxDepth - l.default.minDepth + 1).fill(0).map((z, A) => (0, d.jsxs)(f.default.Option, {
                                                    value: A + 1,
                                                    children: [
                                                        A + 1,
                                                        ' - ',
                                                        o.TerrainLayerNames[A] || 'Layer'
                                                    ]
                                                }, `terrain-layer-${ A }`))
                                            })
                                        })
                                    ]
                                }),
                                (0, d.jsxs)(B, {
                                    children: [
                                        (0, d.jsx)(C, {
                                            children: (0, d.jsx)(h.default.Text, {
                                                style: D,
                                                children: 'Brush Size'
                                            })
                                        }),
                                        (0, d.jsx)(A, {
                                            children: (0, d.jsx)(f.default, {
                                                ref: B,
                                                style: {
                                                    width: 100
                                                },
                                                value: z.brushSize,
                                                onChange: A => {
                                                    var D, E;
                                                    z.brushSize = A, null == B || null === (D = B.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
                                                },
                                                children: new Array(4).fill(0).map((z, A) => (0, d.jsx)(f.default.Option, {
                                                    value: A + 1,
                                                    children: A + 1
                                                }, `terrain-brush-size-${ A }`))
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.isPlatformer)() ? null : (0, d.jsxs)(B, {
                            children: [
                                (0, d.jsx)(C, {
                                    children: (0, d.jsxs)(h.default.Text, {
                                        style: D,
                                        children: [
                                            (0, q.CapitalizeFirstLetter)(r.default.terrain.singular),
                                            ' ',
                                            'Type'
                                        ]
                                    })
                                }),
                                (0, d.jsx)(A, {
                                    children: (0, d.jsxs)(e.default.Group, {
                                        style: {
                                            width: '100%'
                                        },
                                        children: [
                                            (0, d.jsx)(e.default, {
                                                type: C ? 'default' : 'primary',
                                                onClick: () => {
                                                    (0, s.isPlatformer)() || (z.buildTerrainAsWall = !1);
                                                },
                                                block: !0,
                                                children: 'Floor'
                                            }),
                                            (0, d.jsx)(e.default, {
                                                type: C ? 'primary' : 'default',
                                                onClick: () => {
                                                    (0, s.isPlatformer)() || (z.buildTerrainAsWall = !0);
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
    const z = k.default.div(t || (t = x``)),
        A = k.default.div.attrs({
            className: 'maxWidth'
        })(u || (u = x``)),
        B = (0, k.default)(A)(v || (v = x``)),
        C = (0, k.default)(A)(w || (w = x`
  margin-bottom: 4px;
`)),
        D = {
            fontWeight: p.FontWeights.Bold,
            fontStyle: 'italic'
        };
}), c.register('5YE/F0', function(a, c) {
    b(a.exports, 'TerrainLayerNames', function() {
        return d;
    });
    const d = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), c.register('VcXme', function(a, d) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('jMYtD'),
        f = c('R+kVV');
    var g = (0, c('Vlfxs').observer)(() => (0, e.IsAddingWire)() ? (0, d.jsx)(f.default, {}) : null);
}), c.register('R+kVV', function(a, d) {
    b(a.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('YimJ0'),
        g = c('UzdPH'),
        h = c('h99Nu'),
        i = c('gSUVO'),
        j = c('am7L5'),
        k = c('Vlfxs'),
        l = c('YARc1'),
        m = c('PjB0f'),
        n = c('Wgw1x0'),
        o = c('S/jX4');
    let p, q, r, s = a => a;
    var t = (0, k.observer)(() => {
        const {
            me: {
                adding: {
                    wires: u
                },
                context: {
                    __devicesUnderCursor: v
                }
            }
        } = (0, j.default)(), w = e.useMemo(() => {
            var x;
            return u.hoveringOverSupportedDevice ? v[0] && null !== (x = (0, l.FetchDeviceName)(v[0])) && void 0 !== x ? x : (0, m.capitalizeFirstLetter)(n.default.device.singular) : `Select a ${ n.default.device.singular } or ${ n.default.prop.singular } to ${ u.startDeviceSelected ? 'complete' : 'start' } the ${ n.default.wire.singular }`;
        }, [
            u.hoveringOverSupportedDevice,
            v,
            u.startDeviceSelected
        ]);
        return (0, d.jsxs)(f.CenteredColumn, {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(u, {
                    children: (0, d.jsx)(g.default.Text, {
                        italic: !0,
                        children: w
                    })
                }),
                (0, d.jsxs)(v, {
                    children: [
                        (0, d.jsx)(w, {
                            selected: !u.startDeviceSelected,
                            children: 'Out'
                        }),
                        (0, d.jsx)(x, {}),
                        (0, d.jsx)(w, {
                            selected: u.startDeviceSelected,
                            children: 'In'
                        })
                    ]
                })
            ]
        });
    });
    const u = h.default.div(p || (p = s``)),
        v = (0, h.default)(f.Centered).attrs({
            className: 'maxWidth'
        })(q || (q = s``)),
        w = a => (0, d.jsx)(f.Centered, {
            style: {
                height: 50,
                width: 50,
                color: o.default.White,
                fontFamily: i.Fonts.FugazOne,
                textTransform: 'uppercase',
                lineHeight: 1,
                fontSize: 10,
                background: 'rgba(255,255,255,0.15)',
                border: (a.selected ? 3 : 0) + 'px solid #ffca28',
                flexShrink: 0,
                borderRadius: '50%'
            },
            children: a.children
        }),
        x = h.default.div(r || (r = s`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`));
}), c.register('JegR3', function(a, d) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
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