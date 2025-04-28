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
a.register('GkEgD', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _J(b.exports, 'default', function() {
        return _I;
    });
    var e = a('0hzx+'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('vShe/'),
        j = a('11nl3'),
        k = a('mQCZt'),
        l = a('NjKgc'),
        m = a('F0mqt'),
        n = a('kRSxQ'),
        o = a('rXElh'),
        p = a('dGfO9'),
        q = a('ejMkR'),
        r = (g = a('LEQ5w'), a('ryWAy')),
        s = a('8WvaZ'),
        t = a('VBu6r'),
        u = a('iWivW'),
        v = a('47u/+'),
        w = a('TwXYL'),
        x = a('j2ADs'),
        y = a('b5kvC'),
        z = a('9R7cy'),
        A = a('hoBfP'),
        B = a('QECub'),
        C = a('2GeW4');
    let D, E, F, G, H = _b => _b;
    var _I = (0, f.observer)(() => {
        const [_J, K] = (0, g.useState)(!0), [L, M] = (0, g.useState)((0, m.default)());
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
        return (0, r.default)(_b(s).Input.Keyboard.KeyCodes.ESC, O), _J ? (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(_J, {
                children: (0, e.jsxs)(_L, {
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
                        (0, e.jsx)(_K, {
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
                        L.notAllowedToAddMessage ? (0, e.jsx)(_M, {
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
    const _J = h.default.div.attrs({
            className: 'flex maxAll'
        })(D || (D = H`
  align-items: flex-end;
  position: relative;
`)),
        _K = h.default.div.attrs({
            className: 'maxAll flex'
        })(E || (E = H`
  position: absolute;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`)),
        _L = (0, h.default)(w.motion.div).attrs({
            className: 'maxWidth'
        })(F || (F = H`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
`), i.default.White),
        _M = h.default.div.attrs({
            className: 'maxWidth'
        })(G || (G = H`
  padding: 10px 25px;
  background: #c62828;
`));
}), a.register('NjKgc', function(_b, c) {
    _o(_b.exports, 'default', function() {
        return _n;
    });
    var d = a('LEQ5w'),
        e = a('WIRQZ'),
        f = a('YMjEj'),
        g = a('rXElh'),
        h = a('11nl3'),
        i = a('bHGrl'),
        j = a('mQCZt'),
        k = a('pT6Pg'),
        l = a('ILZh4'),
        m = a('JEGzD');
    var _n = _b => {
        const {
            me: _o,
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
                        _o.adding.terrain.buildTerrainAsWall = !_o.adding.terrain.buildTerrainAsWall;
                    }
                }),
                t = (0, f.default)(e.default.Adding.Terrain.BrushSize.One(), () => {
                    (0, k.isAddingTerrain)() && (_o.adding.terrain.brushSize = 1);
                }),
                u = (0, f.default)(e.default.Adding.Terrain.BrushSize.Two(), () => {
                    (0, k.isAddingTerrain)() && (_o.adding.terrain.brushSize = 2);
                }),
                v = (0, f.default)(e.default.Adding.Terrain.BrushSize.Three(), () => {
                    (0, k.isAddingTerrain)() && (_o.adding.terrain.brushSize = 3);
                }),
                w = (0, f.default)(e.default.Adding.Terrain.BrushSize.Four(), () => {
                    (0, k.isAddingTerrain)() && (_o.adding.terrain.brushSize = 4);
                }),
                x = (0, f.default)(e.default.Adding.ToggleShow(), () => {
                    _b.setShow(_b => !_b);
                });
            return () => {
                q(), r(), s(), t(), u(), v(), w(), x();
            };
        }, []);
    };
}), a.register('F0mqt', function(b, c) {
    _B(b.exports, 'default', function() {
        return _z;
    });
    var d = a('6DK0G'),
        e = a('oKr6+'),
        f = a('t+r9P'),
        g = a('pT6Pg'),
        h = a('iWivW'),
        i = a('0rIMQ'),
        j = a('Wo5Au'),
        k = a('EqyfB'),
        l = a('hp1yb'),
        m = a('BPqXJ'),
        n = a('D5xLI'),
        o = a('ikBWx'),
        p = a('OpngO'),
        q = a('LiOye'),
        r = a('M/Cby'),
        s = a('CkNyT'),
        t = a('c3Nxl'),
        u = a('qVhMZ'),
        v = a('bzU3s'),
        w = a('AvtVx'),
        x = a('PUGQx1'),
        y = a('bV9vv');
    var _z = () => {
        if ((0, g.isAddingTerrain)()) {
            const A = h.default.worldOptions.terrainOptions.find(A => A.id === h.default.me.adding.terrain.currentlySelectedTerrain),
                _B = (0, q.CanAddTile)({
                    colliding: h.default.me.adding.terrain.buildTerrainAsWall,
                    count: h.default.me.adding.terrain.brushSize * h.default.me.adding.terrain.brushSize
                }),
                C = (0, r.GetTileMessage)({
                    reason: _B.reason,
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
}), a.register('hp1yb', function(b, c) {
    _j(b.exports, 'GetDeviceOptionMessage', function() {
        return _i;
    });
    var d = a('EqyfB'),
        e = a('ttkWv'),
        f = a('AvtVx'),
        g = a('bzU3s'),
        h = a('xn4K5');
    const _i = b => {
        if (b.reason === e.OutOfResourcesReason.limit) {
            const _j = (0, h.CountDevicesOnMap)({
                deviceTypeId: b.deviceTypeId
            });
            return `Reached placement limit for this ${ g.default.device.singular } (${ _j.current }/${ _j.max })`;
        }
        let j = g.default.device.singular;
        return b.deviceTypeId === d.default.prop && (j = g.default.prop.singular), b.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ f.MemoryName } available to place this ${ j }` : '';
    };
}), a.register('bzU3s', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('xn4K5', function(b, c) {
    _g(b.exports, 'CountDevicesOnMap', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('KzfsH');
    const _f = b => {
        var _g, h;
        var i;
        return {
            current: null !== (h = d.default.memorySystem.counters.devices.get(b.deviceTypeId)) && void 0 !== h ? h : 0,
            max: null !== (i = null === (_g = (0, e.FetchDeviceOptionById)(b.deviceTypeId)) || void 0 === _g ? void 0 : _g.maxOnMap) && void 0 !== i ? i : d.default.memorySystem.limits.deviceMaxOnMapDefault
        };
    };
}), a.register('OpngO', function(b, c) {
    _j(b.exports, 'GetMultiselectMessage', function() {
        return _i;
    });
    var d = a('iWivW'),
        e = a('ttkWv'),
        f = a('KzfsH'),
        g = a('xn4K5'),
        h = a('bzU3s');
    const _i = b => {
        if (b.reason === e.OutOfResourcesReason.limit) {
            var _j;
            const k = null === (_j = (0, f.FetchDeviceOptionById)(b.limitReachedDeviceTypeId)) || void 0 === _j ? void 0 : _j.name,
                l = (0, g.CountDevicesOnMap)({
                    deviceTypeId: b.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${ k } ${ h.default.device.plural }. Used ${ l.current }/${ l.max }.`;
        }
        return b.reason === e.OutOfResourcesReason.noMemory ? `Not enough memory to copy. Requires ${ b.totalCost }, used ${ d.default.memorySystem.usedMemoryCost }/${ d.default.memorySystem.maxUsedMemory }` : '';
    };
}), a.register('M/Cby', function(b, c) {
    _i(b.exports, 'GetTileMessage', function() {
        return _h;
    });
    var d = a('iWivW'),
        e = a('ttkWv'),
        f = a('AvtVx'),
        g = a('bzU3s');
    const _h = b => {
        const _i = b.colliding ? d.default.memorySystem.counters.collidingTiles : d.default.memorySystem.counters.nonCollidingTiles,
            j = b.colliding ? d.default.memorySystem.limits.collidingTiles : d.default.memorySystem.limits.nonCollidingTiles,
            k = b.colliding ? 'wall' : 'floor',
            l = (b.colliding ? d.default.memorySystem.costs.collidingTile : d.default.memorySystem.costs.nonCollidingTile) * b.count;
        return b.reason === e.OutOfResourcesReason.limit ? `Can't add ${ b.count } more ${ k } ${ g.default.terrain.singular }. Used ${ _i }/${ j }` : b.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ f.MemoryName } to add ${ b.count } ${ k } ${ g.default.terrain.singular }. Requires ${ l } ${ f.MemoryName }.` : '';
    };
}), a.register('c3Nxl', function(b, c) {
    _g(b.exports, 'GetWireMessage', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('ttkWv');
    const _f = b => {
        const _g = d.default.memorySystem.counters.wires,
            h = d.default.memorySystem.limits.wires;
        if (b.reason === e.OutOfResourcesReason.limit)
            return `Can't add more wires. Used ${ _g }/${ h }`;
        const i = d.default.memorySystem.costs.wire;
        return b.reason === e.OutOfResourcesReason.noMemory ? `Not enough memory to add wire. Requires ${ i }, used ${ d.default.memorySystem.usedMemoryCost }/${ d.default.memorySystem.maxUsedMemory }` : '';
    };
}), a.register('PUGQx1', function(b, c) {
    _h(b.exports, 'FetchDeviceName', function() {
        return _g;
    });
    var d = a('EqyfB'),
        e = a('bV9vv'),
        f = a('iWivW');
    const _g = b => {
        const _h = f.default.world.devices.devices.get(b);
        if (!_h)
            return '';
        if (_h.name)
            return _h.name;
        if (_h.deviceOption.id === d.default.prop) {
            const i = _h.options;
            if (i.propId) {
                var j;
                const k = null === (j = (0, e.default)(i.propId)) || void 0 === j ? void 0 : j.name;
                if (k)
                    return k;
            }
        }
        return _h.deviceOption.name;
    };
}), a.register('dGfO9', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('L1523'),
        e = a('iWivW'),
        f = a('ejMkR');
    var _g = b => {
        b !== f.AddScreen.home && (0, d.EmitTutorialEvent)({
            event: d.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: b
        }), e.default.gui.none.addMenu.screen = b;
    };
}), a.register('47u/+', function(b, c) {
    _i(b.exports, 'ReactionToMultipleProps', function() {
        return _e;
    });
    var d = a('YuT/D');
    const _e = (b, _i, a) => {
        const f = [];
        return b.forEach(b => {
            const g = (0, d.reaction)(b, _i, a);
            f.push(g);
        }), () => {
            f.forEach(b => {
                b();
            });
        };
    };
}), a.register('hoBfP', function(b, c) {
    _i(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('Axq+p'),
        f = a('zow3t'),
        g = a('/Rq0t'),
        h = a('Zb/Iz');
    let i, j, k = b => b;
    var _l = b => (0, d.jsxs)(_m, {
        children: [
            (0, d.jsxs)(_n, {
                children: [
                    (0, d.jsx)(f.default, {
                        addingInfo: b.addingInfo
                    }),
                    (0, d.jsx)(g.default, {})
                ]
            }),
            (0, d.jsx)(h.default, {})
        ]
    });
    const _m = e.default.div(i || (i = k`
  padding: 25px;
`)),
        _n = e.default.div.attrs({
            className: 'flex between vc'
        })(j || (j = k``));
}), a.register('zow3t', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('j2ADs');
    a('LEQ5w');
    var f = a('b5kvC'),
        g = a('vShe/');
    var _h = b => {
        const _i = b.addingInfo;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)(e.default.Text, {
                    style: {
                        fontFamily: f.Fonts.FugazOne
                    },
                    className: 'allCaps',
                    children: [
                        _i.tagline,
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
                    children: _i.title
                }),
                _i.memoryCost ? (0, d.jsx)(e.default.Text, {
                    style: {
                        marginTop: 5
                    },
                    children: _i.memoryCost
                }) : null
            ]
        });
    };
}), a.register('/Rq0t', function(b, c) {
    _A(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('pT6Pg'),
        f = a('eLTRc');
    var _g = () => (0, e.isAddingTerrain)() ? (0, d.jsx)(f.default, {}) : (0, d.jsx)('div', {});
}), a.register('eLTRc', function(b, c) {
    _A(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('inwN3'),
        g = a('cvto726'),
        h = a('j2ADs'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('Axq+p'),
        l = a('QGvEI'),
        m = a('bHGrl'),
        n = a('2GeW4'),
        o = a('8Yhx/'),
        p = a('b5kvC'),
        q = a('qVhMZ'),
        r = a('bzU3s'),
        s = a('JEGzD');
    let t, u, v, w, x = b => b;
    var _y = (0, i.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: z
                }
            }
        } = (0, m.default)(), _A = j.useRef(), B = j.useRef(), C = z.buildTerrainAsWall;
        return (0, d.jsx)(n.default, {
            children: (0, d.jsx)(_z, {
                children: (0, d.jsxs)(g.default, {
                    direction: 'vertical',
                    size: 10,
                    children: [
                        (0, d.jsxs)(g.default, {
                            size: 10,
                            children: [
                                (0, d.jsxs)(_B, {
                                    children: [
                                        (0, d.jsx)(_C, {
                                            children: (0, d.jsx)(h.default.Text, {
                                                style: _D,
                                                children: 'Layer'
                                            })
                                        }),
                                        (0, d.jsx)(_A, {
                                            children: (0, d.jsx)(f.default, {
                                                ref: _A,
                                                style: {
                                                    width: 150
                                                },
                                                value: z.currentlySelectedTerrainDepth,
                                                onChange: B => {
                                                    var D, E;
                                                    z.currentlySelectedTerrainDepth = B, null == _A || null === (D = _A.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
                                                },
                                                children: new Array(l.default.maxDepth - l.default.minDepth + 1).fill(0).map((z, _A) => (0, d.jsxs)(f.default.Option, {
                                                    value: _A + 1,
                                                    children: [
                                                        _A + 1,
                                                        ' - ',
                                                        o.TerrainLayerNames[_A] || 'Layer'
                                                    ]
                                                }, `terrain-layer-${ _A }`))
                                            })
                                        })
                                    ]
                                }),
                                (0, d.jsxs)(_B, {
                                    children: [
                                        (0, d.jsx)(_C, {
                                            children: (0, d.jsx)(h.default.Text, {
                                                style: _D,
                                                children: 'Brush Size'
                                            })
                                        }),
                                        (0, d.jsx)(_A, {
                                            children: (0, d.jsx)(f.default, {
                                                ref: B,
                                                style: {
                                                    width: 100
                                                },
                                                value: z.brushSize,
                                                onChange: _A => {
                                                    var D, E;
                                                    z.brushSize = _A, null == B || null === (D = B.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
                                                },
                                                children: new Array(4).fill(0).map((z, _A) => (0, d.jsx)(f.default.Option, {
                                                    value: _A + 1,
                                                    children: _A + 1
                                                }, `terrain-brush-size-${ _A }`))
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.isPlatformer)() ? null : (0, d.jsxs)(_B, {
                            children: [
                                (0, d.jsx)(_C, {
                                    children: (0, d.jsxs)(h.default.Text, {
                                        style: _D,
                                        children: [
                                            (0, q.CapitalizeFirstLetter)(r.default.terrain.singular),
                                            ' ',
                                            'Type'
                                        ]
                                    })
                                }),
                                (0, d.jsx)(_A, {
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
    const _z = k.default.div(t || (t = x``)),
        _A = k.default.div.attrs({
            className: 'maxWidth'
        })(u || (u = x``)),
        _B = (0, k.default)(_A)(v || (v = x``)),
        _C = (0, k.default)(_A)(w || (w = x`
  margin-bottom: 4px;
`)),
        _D = {
            fontWeight: p.FontWeights.Bold,
            fontStyle: 'italic'
        };
}), a.register('8Yhx/', function(b, c) {
    _v(b.exports, 'TerrainLayerNames', function() {
        return _d;
    });
    const _d = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), a.register('Zb/Iz', function(b, c) {
    _v(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('0rIMQ'),
        f = a('OdVR2');
    var _g = (0, a('2x11J').observer)(() => (0, e.IsAddingWire)() ? (0, d.jsx)(f.default, {}) : null);
}), a.register('OdVR2', function(b, c) {
    _v(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0HHAH'),
        g = a('j2ADs'),
        h = a('Axq+p'),
        i = a('b5kvC'),
        j = a('bHGrl'),
        k = a('2x11J'),
        l = a('PUGQx1'),
        m = a('PMl60'),
        n = a('bzU3s'),
        o = a('vShe/');
    let p, q, r, s = b => b;
    var _t = (0, k.observer)(() => {
        const {
            me: {
                adding: {
                    wires: u
                },
                context: {
                    __devicesUnderCursor: _v
                }
            }
        } = (0, j.default)(), w = e.useMemo(() => {
            var x;
            return u.hoveringOverSupportedDevice ? _v[0] && null !== (x = (0, l.FetchDeviceName)(_v[0])) && void 0 !== x ? x : (0, m.capitalizeFirstLetter)(n.default.device.singular) : `Select a ${ n.default.device.singular } or ${ n.default.prop.singular } to ${ u.startDeviceSelected ? 'complete' : 'start' } the ${ n.default.wire.singular }`;
        }, [
            u.hoveringOverSupportedDevice,
            _v,
            u.startDeviceSelected
        ]);
        return (0, d.jsxs)(f.CenteredColumn, {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(_u, {
                    children: (0, d.jsx)(g.default.Text, {
                        italic: !0,
                        children: w
                    })
                }),
                (0, d.jsxs)(_v, {
                    children: [
                        (0, d.jsx)(_w, {
                            selected: !u.startDeviceSelected,
                            children: 'Out'
                        }),
                        (0, d.jsx)(_x, {}),
                        (0, d.jsx)(_w, {
                            selected: u.startDeviceSelected,
                            children: 'In'
                        })
                    ]
                })
            ]
        });
    });
    const _u = h.default.div(p || (p = s``)),
        _v = (0, h.default)(f.Centered).attrs({
            className: 'maxWidth'
        })(q || (q = s``)),
        _w = b => (0, d.jsx)(f.Centered, {
            style: {
                height: 50,
                width: 50,
                color: o.default.White,
                fontFamily: i.Fonts.FugazOne,
                textTransform: 'uppercase',
                lineHeight: 1,
                fontSize: 10,
                background: 'rgba(255,255,255,0.15)',
                border: (b.selected ? 3 : 0) + 'px solid #ffca28',
                flexShrink: 0,
                borderRadius: '50%'
            },
            children: b.children
        }),
        _x = h.default.div(r || (r = s`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`));
}), a.register('pMmde1', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    t(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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