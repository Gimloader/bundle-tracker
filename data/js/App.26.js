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
c.register('HESrX', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _K;
    });
    var g = c('gRbUn'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('HOIhZ'),
        l = c('SxihY'),
        m = c('LihP5'),
        n = c('y+ULg'),
        o = c('G5WEq'),
        p = c('jqzVF'),
        q = c('3gmyN'),
        r = c('4Bmhg'),
        s = c('mTbw/'),
        t = (i = c('O0Kav'), c('J8L14')),
        u = c('ddhGF'),
        v = c('2d+QF'),
        w = c('fI6of'),
        x = c('AAbjw'),
        y = c('9aZ6t'),
        z = c('22RS1'),
        A = c('Eh2Wh'),
        B = c('t52Ep'),
        C = c('r7rkH'),
        D = c('ReZvd'),
        E = c('UkybP');
    let F, G, H, I, J = a => a;
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
}), c.register('y+ULg', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('O0Kav'),
        g = c('VSnBT'),
        h = c('OZKkM'),
        i = c('3gmyN'),
        j = c('SxihY'),
        k = c('K/2xB'),
        l = c('LihP5'),
        m = c('ALYv1'),
        n = c('APtU4'),
        o = c('UCu0V');
    var _p = d => {
        const {
            me: q,
            gui: r
        } = (0, k.default)();
        f.useEffect(() => {
            const s = (0, h.default)(g.default.Adding.SwitchToRemoveMode(), () => {
                    (0, n.default)() && (0, l.default)(j.default.removing);
                }),
                t = (0, h.default)(g.default.Adding.GoBack(), () => {
                    (0, l.default)(j.default.none), r.none.screen = i.NoneScreen.add;
                }),
                u = (0, h.default)(g.default.Adding.Terrain.TogglePiece(), () => {
                    if ((0, m.isAddingTerrain)()) {
                        if ((0, o.isPlatformer)())
                            return;
                        q.adding.terrain.buildTerrainAsWall = !q.adding.terrain.buildTerrainAsWall;
                    }
                }),
                v = (0, h.default)(g.default.Adding.Terrain.BrushSize.One(), () => {
                    (0, m.isAddingTerrain)() && (q.adding.terrain.brushSize = 1);
                }),
                w = (0, h.default)(g.default.Adding.Terrain.BrushSize.Two(), () => {
                    (0, m.isAddingTerrain)() && (q.adding.terrain.brushSize = 2);
                }),
                x = (0, h.default)(g.default.Adding.Terrain.BrushSize.Three(), () => {
                    (0, m.isAddingTerrain)() && (q.adding.terrain.brushSize = 3);
                }),
                y = (0, h.default)(g.default.Adding.Terrain.BrushSize.Four(), () => {
                    (0, m.isAddingTerrain)() && (q.adding.terrain.brushSize = 4);
                }),
                z = (0, h.default)(g.default.Adding.ToggleShow(), () => {
                    d.setShow(d => !d);
                });
            return () => {
                s(), t(), u(), v(), w(), x(), y(), z();
            };
        }, []);
    };
}), c.register('G5WEq', function(d, e) {
    b(d.exports, 'default', function() {
        return _B;
    });
    var f = c('PxqH4'),
        g = c('kk1j9'),
        h = c('Hrhqr'),
        i = c('ALYv1'),
        j = c('fI6of'),
        k = c('5biqe'),
        l = c('S2NsJ'),
        m = c('OFuf70'),
        n = c('hCiOG'),
        o = c('Zemdf'),
        p = c('heTaO'),
        q = c('1xY/+'),
        r = c('qeUff'),
        s = c('MTvQV'),
        t = c('RbZTg'),
        u = c('Ubv8R'),
        v = c('0V/Dg'),
        w = c('Q6LQJ'),
        x = c('gp8Qp0'),
        y = c('wfPQ8'),
        z = c('+FJvw1'),
        A = c('ZMrtj');
    var _B = () => {
        if ((0, i.isAddingTerrain)()) {
            const C = j.default.worldOptions.terrainOptions.find(C => C.id === j.default.me.adding.terrain.currentlySelectedTerrain),
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
                var C;
                if (j.default.me.editing.device.usingMultiselect) {
                    const D = (0, q.CanCopyMultiselect)(),
                        E = (0, r.GetMultiselectMessage)(D),
                        F = j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.copy,
                        G = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices,
                        H = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices.filter(D => D.deviceOption.id === m.default.prop),
                        I = H.length > 0,
                        J = (0, p.default)().actionManager.multiselect.movedOrCopiedDevices.length === H.length;
                    let K = `Multiple ${ x.default.device.plural }`;
                    if (I && !J ? K = `Multiple ${ x.default.device.plural }/${ x.default.prop.plural }` : J && (K = `Multiple ${ x.default.prop.plural }`), 1 === G.length) {
                        const L = G[0],
                            M = (0, z.FetchDeviceName)(null == L ? void 0 : L.id);
                        M && (K = M);
                    }
                    return {
                        tagline: F ? 'Copying' : 'Moving',
                        title: K,
                        memoryCost: D.totalCost ? `+${ D.totalCost } ${ y.MemoryName }` : void 0,
                        notAllowedToAddMessage: E
                    };
                }
                const D = (0, p.default)().worldManager.devices.getDeviceById(j.default.me.adding.devices.existingDevice.id),
                    E = j.default.worldOptions.deviceOptions.find(C => {
                        var F;
                        return C.id === (null == D || null === (F = D.deviceOption) || void 0 === F ? void 0 : F.id);
                    }),
                    F = j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.copy,
                    G = (0, o.CanCopyDevice)({
                        deviceId: null === (C = (0, h.attemptingToAddExistingDevice)()) || void 0 === C ? void 0 : C.id
                    });
                let H = 'Device';
                if (E) {
                    const I = (0, z.FetchDeviceName)(D.id);
                    I && (H = I);
                }
                if (!E)
                    return {
                        tagline: F ? 'Copying' : 'Moving',
                        title: (0, w.CapitalizeFirstLetter)(x.default.device.singular)
                    };
                let I = '';
                if (G.memoryCost && (I = `+${ G.memoryCost } ${ y.MemoryName }`), !G.canCopy && F) {
                    return {
                        tagline: 'Copying',
                        title: H,
                        memoryCost: I,
                        notAllowedToAddMessage: (0, n.GetDeviceOptionMessage)({
                            addingOrCopying: 'copying',
                            reason: G.reason,
                            deviceTypeId: E.id,
                            deviceId: (0, h.attemptingToAddExistingDevice)().id
                        })
                    };
                }
                return {
                    tagline: j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.cut ? 'Moving' : 'Copying',
                    title: H,
                    memoryCost: j.default.me.adding.devices.existingDevice.action === f.ExistingDeviceAddingAction.cut ? void 0 : I
                };
            }
            if (j.default.me.adding.devices.selectedDeviceType) {
                const C = j.default.worldOptions.deviceOptions.find(C => C.id === j.default.me.adding.devices.selectedDeviceType),
                    D = (0, l.CanAddDevice)({
                        deviceTypeId: C.id
                    }),
                    E = (0, n.GetDeviceOptionMessage)({
                        addingOrCopying: 'adding',
                        deviceTypeId: C.id,
                        reason: D.reason
                    });
                let F = C.name;
                if (C.id === m.default.prop && j.default.me.adding.devices.currentlySelectedProp) {
                    const G = (0, A.default)(j.default.me.adding.devices.currentlySelectedProp);
                    (null == G ? void 0 : G.name) && (F = G.name);
                }
                return {
                    tagline: 'Adding',
                    title: F || (0, w.CapitalizeFirstLetter)(x.default.device.singular),
                    memoryCost: D.memoryCost ? `+${ D.memoryCost } ${ y.MemoryName }` : void 0,
                    notAllowedToAddMessage: E
                };
            }
        }
        if ((0, k.IsAddingWire)()) {
            const C = (0, u.CanAddWire)(),
                D = (0, v.GetWireMessage)({
                    reason: C.reason
                });
            return {
                tagline: 'Adding',
                title: (0, w.CapitalizeFirstLetter)(x.default.wire.singular),
                memoryCost: `+${ j.default.memorySystem.costs.wire } ${ y.MemoryName }`,
                notAllowedToAddMessage: D
            };
        }
        return {
            tagline: 'Adding',
            title: 'Unknown Entity'
        };
    };
}), c.register('hCiOG', function(d, e) {
    b(d.exports, 'GetDeviceOptionMessage', function() {
        return _k;
    });
    var f = c('OFuf70'),
        g = c('CbTFk'),
        h = c('wfPQ8'),
        i = c('gp8Qp0'),
        j = c('BTq2C');
    const _k = d => {
        if (d.reason === g.OutOfResourcesReason.limit) {
            const l = (0, j.CountDevicesOnMap)({
                deviceTypeId: d.deviceTypeId
            });
            return `Reached placement limit for this ${ i.default.device.singular } (${ l.current }/${ l.max })`;
        }
        let l = i.default.device.singular;
        return d.deviceTypeId === f.default.prop && (l = i.default.prop.singular), d.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ h.MemoryName } available to place this ${ l }` : '';
    };
}), c.register('gp8Qp0', function(d, e) {
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
}), c.register('BTq2C', function(d, e) {
    b(d.exports, 'CountDevicesOnMap', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('5P0VZ');
    const _h = d => {
        var i, j;
        var k;
        return {
            current: null !== (j = f.default.memorySystem.counters.devices.get(d.deviceTypeId)) && void 0 !== j ? j : 0,
            max: null !== (k = null === (i = (0, g.FetchDeviceOptionById)(d.deviceTypeId)) || void 0 === i ? void 0 : i.maxOnMap) && void 0 !== k ? k : f.default.memorySystem.limits.deviceMaxOnMapDefault
        };
    };
}), c.register('qeUff', function(d, e) {
    b(d.exports, 'GetMultiselectMessage', function() {
        return _k;
    });
    var f = c('fI6of'),
        g = c('CbTFk'),
        h = c('5P0VZ'),
        i = c('BTq2C'),
        j = c('gp8Qp0');
    const _k = d => {
        if (d.reason === g.OutOfResourcesReason.limit) {
            var l;
            const m = null === (l = (0, h.FetchDeviceOptionById)(d.limitReachedDeviceTypeId)) || void 0 === l ? void 0 : l.name,
                n = (0, i.CountDevicesOnMap)({
                    deviceTypeId: d.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${ m } ${ j.default.device.plural }. Used ${ n.current }/${ n.max }.`;
        }
        return d.reason === g.OutOfResourcesReason.noMemory ? `Not enough memory to copy. Requires ${ d.totalCost }, used ${ f.default.memorySystem.usedMemoryCost }/${ f.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('RbZTg', function(d, e) {
    b(d.exports, 'GetTileMessage', function() {
        return _j;
    });
    var f = c('fI6of'),
        g = c('CbTFk'),
        h = c('wfPQ8'),
        i = c('gp8Qp0');
    const _j = d => {
        const k = d.colliding ? f.default.memorySystem.counters.collidingTiles : f.default.memorySystem.counters.nonCollidingTiles,
            l = d.colliding ? f.default.memorySystem.limits.collidingTiles : f.default.memorySystem.limits.nonCollidingTiles,
            m = d.colliding ? 'wall' : 'floor',
            n = (d.colliding ? f.default.memorySystem.costs.collidingTile : f.default.memorySystem.costs.nonCollidingTile) * d.count;
        return d.reason === g.OutOfResourcesReason.limit ? `Can't add ${ d.count } more ${ m } ${ i.default.terrain.singular }. Used ${ k }/${ l }` : d.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ h.MemoryName } to add ${ d.count } ${ m } ${ i.default.terrain.singular }. Requires ${ n } ${ h.MemoryName }.` : '';
    };
}), c.register('0V/Dg', function(d, e) {
    b(d.exports, 'GetWireMessage', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('CbTFk');
    const _h = d => {
        const i = f.default.memorySystem.counters.wires,
            j = f.default.memorySystem.limits.wires;
        if (d.reason === g.OutOfResourcesReason.limit)
            return `Can't add more wires. Used ${ i }/${ j }`;
        const k = f.default.memorySystem.costs.wire;
        return d.reason === g.OutOfResourcesReason.noMemory ? `Not enough memory to add wire. Requires ${ k }, used ${ f.default.memorySystem.usedMemoryCost }/${ f.default.memorySystem.maxUsedMemory }` : '';
    };
}), c.register('+FJvw1', function(d, e) {
    b(d.exports, 'FetchDeviceName', function() {
        return _i;
    });
    var f = c('OFuf70'),
        g = c('ZMrtj'),
        h = c('fI6of');
    const _i = d => {
        const j = h.default.world.devices.devices.get(d);
        if (!j)
            return '';
        if (j.name)
            return j.name;
        if (j.deviceOption.id === f.default.prop) {
            const k = j.options;
            if (k.propId) {
                var l;
                const m = null === (l = (0, g.default)(k.propId)) || void 0 === l ? void 0 : l.name;
                if (m)
                    return m;
            }
        }
        return j.deviceOption.name;
    };
}), c.register('4Bmhg', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('qIlyp'),
        g = c('fI6of'),
        h = c('mTbw/');
    var _i = d => {
        d !== h.AddScreen.home && (0, f.EmitTutorialEvent)({
            event: f.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: d
        }), g.default.gui.none.addMenu.screen = d;
    };
}), c.register('AAbjw', function(d, e) {
    b(d.exports, 'ReactionToMultipleProps', function() {
        return _g;
    });
    var f = c('JkQCT');
    const _g = (d, b, c) => {
        const h = [];
        return d.forEach(d => {
            const i = (0, f.reaction)(d, b, c);
            h.push(i);
        }), () => {
            h.forEach(d => {
                d();
            });
        };
    };
}), c.register('r7rkH', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('u4s09'),
        h = c('ZBGG3'),
        i = c('MbcIf'),
        j = c('6Rucy');
    let k, l, m = d => d;
    var _n = d => (0, f.jsxs)(_o, {
        children: [
            (0, f.jsxs)(_p, {
                children: [
                    (0, f.jsx)(h.default, {
                        addingInfo: d.addingInfo
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
}), c.register('ZBGG3', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('Eh2Wh'),
        i = c('HOIhZ');
    var _j = d => {
        const k = d.addingInfo;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)(g.default.Text, {
                    style: {
                        fontFamily: h.Fonts.FugazOne
                    },
                    className: 'allCaps',
                    children: [
                        k.tagline,
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
                    children: k.title
                }),
                k.memoryCost ? (0, f.jsx)(g.default.Text, {
                    style: {
                        marginTop: 5
                    },
                    children: k.memoryCost
                }) : null
            ]
        });
    };
}), c.register('MbcIf', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('ALYv1'),
        h = c('kqNj4');
    var _i = () => (0, g.isAddingTerrain)() ? (0, f.jsx)(h.default, {}) : (0, f.jsx)('div', {});
}), c.register('kqNj4', function(d, e) {
    b(d.exports, 'default', function() {
        return _A;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('u8Dt8'),
        i = c('E2AMI26'),
        j = c('22RS1'),
        k = c('6jmvl'),
        l = c('O0Kav'),
        m = c('u4s09'),
        n = c('GocLx'),
        o = c('K/2xB'),
        p = c('UkybP'),
        q = c('er8/l0'),
        r = c('Eh2Wh'),
        s = c('Q6LQJ'),
        t = c('gp8Qp0'),
        u = c('UCu0V');
    let v, w, x, y, z = d => d;
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
                                                onChange: D => {
                                                    var F, G;
                                                    B.currentlySelectedTerrainDepth = D, null == C || null === (F = C.current) || void 0 === F || null === (G = F.blur) || void 0 === G || G.call(F);
                                                },
                                                children: new Array(n.default.maxDepth - n.default.minDepth + 1).fill(0).map((B, C) => (0, f.jsxs)(h.default.Option, {
                                                    value: C + 1,
                                                    children: [
                                                        C + 1,
                                                        ' - ',
                                                        q.TerrainLayerNames[C] || 'Layer'
                                                    ]
                                                }, `terrain-layer-${ C }`))
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
                                                onChange: C => {
                                                    var F, G;
                                                    B.brushSize = C, null == D || null === (F = D.current) || void 0 === F || null === (G = F.blur) || void 0 === G || G.call(F);
                                                },
                                                children: new Array(4).fill(0).map((B, C) => (0, f.jsx)(h.default.Option, {
                                                    value: C + 1,
                                                    children: C + 1
                                                }, `terrain-brush-size-${ C }`))
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
}), c.register('er8/l0', function(d, e) {
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
}), c.register('6Rucy', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('5biqe'),
        h = c('ljvOF');
    var _i = (0, c('6jmvl').observer)(() => (0, g.IsAddingWire)() ? (0, f.jsx)(h.default, {}) : null);
}), c.register('ljvOF', function(d, e) {
    b(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('MgONH'),
        i = c('22RS1'),
        j = c('u4s09'),
        k = c('Eh2Wh'),
        l = c('K/2xB'),
        m = c('6jmvl'),
        n = c('+FJvw1'),
        o = c('quE27'),
        p = c('gp8Qp0'),
        q = c('HOIhZ');
    let r, s, t, u = d => d;
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
        _y = d => (0, f.jsx)(h.Centered, {
            style: {
                height: 50,
                width: 50,
                color: q.default.White,
                fontFamily: k.Fonts.FugazOne,
                textTransform: 'uppercase',
                lineHeight: 1,
                fontSize: 10,
                background: 'rgba(255,255,255,0.15)',
                border: (d.selected ? 3 : 0) + 'px solid #ffca28',
                flexShrink: 0,
                borderRadius: '50%'
            },
            children: d.children
        }),
        _z = j.default.div(t || (t = u`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`));
}), c.register('OQRaD', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('tWyJZ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('tWyJZ', function(d, e) {
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