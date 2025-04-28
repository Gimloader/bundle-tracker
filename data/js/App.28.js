function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lESQp', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _C(b.exports, 'default', function() {
        return _B;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('mQCZt'),
        i = a('11nl3'),
        j = a('2GeW4'),
        k = a('TwXYL'),
        l = a('aUrj4'),
        m = a('sHRDd'),
        n = a('UyyDS'),
        o = a('eeCUl'),
        p = a('bI0IS'),
        q = a('le6+G'),
        r = a('2x11J'),
        s = a('bHGrl'),
        t = a('iG9EJ'),
        u = a('rr5bz'),
        v = a('YuT/D'),
        w = a('VY8e2'),
        x = a('N8S9w'),
        y = a('L1523');
    let z;
    const A = f.lazy(() => a('pdAi8'));
    var _B = (0, r.observer)(() => {
        const {
            me: _C,
            world: {
                devices: D
            }
        } = (0, s.default)(), {
            options: E,
            hooks: F,
            position: G
        } = (0, o.default)(), {
            device: H,
            deviceOption: I
        } = (0, p.default)(), J = (0, w.IsVisualEditingActive)();
        f.useEffect(() => {
            if (J)
                return () => {};
            return (0, q.AddInputBlockingUI)().dispose;
        }, [J]);
        const {
            start: K,
            clear: L
        } = (0, u.useTimeout)(() => {
            D.devices.get(_C.editing.device.currentlyEditedDevice.id) || z();
        }, 25);
        if (f.useEffect(() => {
                const M = (0, v.when)(() => !D.devices.get(_C.editing.device.currentlyEditedDevice.id), () => {
                        K();
                    }),
                    N = (0, v.when)(() => !!D.devices.get(_C.editing.device.currentlyEditedDevice.id), () => {
                        L();
                    });
                return () => {
                    M(), N();
                };
            }, [_C.editing.device.currentlyEditedDevice.id]), !H || !I)
            return null;
        const M = () => {
            (0, h.default)(i.default.none), (0, y.EmitTutorialEvent)({
                event: y.TutorialEventName.CLOSE_DEVICE_OPTIONS,
                device: H
            });
        };
        return J ? (0, e.jsx)(x.default, {}) : (0, e.jsx)(j.default, {
            className: 'maxAll',
            children: (0, e.jsx)(_C, {
                onClick: M,
                children: (0, e.jsx)(f.Suspense, {
                    fallback: null,
                    children: _C.editing.device.screen === t.EditingDeviceScreen.grid ? (0, e.jsx)(A, {
                        close: () => {
                            _C.editing.device.screen = t.EditingDeviceScreen.home;
                        },
                        deviceId: H.id
                    }) : (0, e.jsx)(n.default, {
                        device: H,
                        deviceOption: I,
                        position: G,
                        options: E,
                        hooks: F,
                        close: M
                    })
                })
            })
        });
    });
    const _C = (0, g.default)(k.motion.div).attrs({
        className: 'maxAll',
        transition: {
            duration: l.default.enterExit.duration,
            ease: l.default.enterExit.ease
        },
        initial: {
            background: 'rgba(0,0,0,0)'
        },
        animate: {
            background: 'rgba(0,0,0,0.6)'
        },
        exit: {
            background: 'rgba(0,0,0,0)'
        }
    })(z || (z = (_g => _g)`
  color: ${ 0 };
`), m.default.White);
}), a.register('aUrj4', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        enterExit: {
            duration: 0.22,
            ease: 'easeInOut'
        }
    };
}), a.register('UyyDS', function(b, c) {
    _g(b.exports, 'DeviceEditingHomeTab', function() {
        return _l;
    }), _g(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('fjWOo'),
        h = a('8lG8z'),
        i = a('ryWAy'),
        j = a('8WvaZ');
    let k, _l;
    var m;
    (m = _l || (_l = {})).options = 'options', m.codeGrids = 'codeGrids', m.wires = 'wires';
    var _n = _g => {
        (0, i.default)(_b(j).Input.Keyboard.KeyCodes.ESC, _g.close, [_g.close]);
        const [o, p] = e.useState(_l.options);
        return (0, d.jsxs)(_o, {
            children: [
                (0, d.jsx)(g.default, {
                    device: _g.device,
                    deviceOption: _g.deviceOption,
                    options: _g.options,
                    tab: o,
                    setTab: p
                }),
                (0, d.jsx)(h.default, {
                    device: _g.device,
                    options: _g.options,
                    hooks: _g.hooks,
                    position: _g.position,
                    deviceOption: _g.deviceOption,
                    tab: o
                })
            ]
        });
    };
    const _o = f.default.div.attrs({
        className: 'maxAll flex between'
    })(k || (k = (_g => _g)``));
}), a.register('fjWOo', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ulE4q'),
        f = a('cvto726'),
        g = a('spKsy'),
        h = a('Axq+p'),
        i = a('TwXYL'),
        j = a('aUrj4'),
        k = a('2x11J'),
        l = a('k2Q4/'),
        m = a('qVhMZ'),
        n = a('QVC+I'),
        o = a('UyyDS'),
        p = a('U50Uf'),
        q = a('vLowm'),
        r = a('bzU3s'),
        s = a('IL597'),
        t = a('VY8e2'),
        u = a('M5eI4'),
        v = a('0PFEY'),
        w = a('NQh+U'),
        x = a('FK3Hv'),
        y = a('Gxfhq');
    let z;
    var _A = (0, k.observer)(_g => {
        const {
            device: B,
            deviceOption: C,
            options: D,
            tab: E,
            setTab: F
        } = _g, G = (0, l.DoesDeviceTypeHaveAvailableCodeGrids)(C.id, D), H = (0, q.DeviceHasAWireAttached)(B.id);
        return (0, d.jsxs)(_B, {
            children: [
                (0, d.jsxs)('div', {
                    className: 'maxWidth',
                    children: [
                        (0, d.jsx)(w.default, {
                            deviceId: B.id
                        }),
                        (0, d.jsx)(p.default, {
                            deviceId: B.id,
                            deviceOption: C
                        }),
                        (0, d.jsxs)(f.default, {
                            direction: 'vertical',
                            size: 4,
                            className: 'maxWidth',
                            style: {
                                marginTop: 16
                            },
                            children: [
                                (0, d.jsx)(g.default, {
                                    icon: 'fas fa-cog',
                                    name: 'Options',
                                    selected: E === o.DeviceEditingHomeTab.options,
                                    onSelect: () => {
                                        F(o.DeviceEditingHomeTab.options);
                                    }
                                }),
                                G ? (0, d.jsx)(g.default, {
                                    icon: 'fas fa-cubes',
                                    name: (0, m.CapitalizeFirstLetter)(n.default.grid.plural),
                                    selected: E === o.DeviceEditingHomeTab.codeGrids,
                                    onSelect: () => {
                                        F(o.DeviceEditingHomeTab.codeGrids);
                                    }
                                }) : null,
                                H ? (0, d.jsx)(g.default, {
                                    icon: 'fas fa-plug',
                                    name: (0, m.CapitalizeFirstLetter)(r.default.wire.plural),
                                    selected: E === o.DeviceEditingHomeTab.wires,
                                    onSelect: () => {
                                        F(o.DeviceEditingHomeTab.wires);
                                    }
                                }) : null
                            ]
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: (0, s.DoesEditedDeviceSupportVisualEditing)() && !(0, t.IsVisualEditingActive)() && (0, y.default)() ? (0, d.jsx)(e.default, {
                        size: 'large',
                        type: 'primary',
                        onClick: _g => {
                            (0, v.default)(_g), (0, x.playClickSound)(), (0, u.SetVisualEditingData)();
                        },
                        children: 'Change Size'
                    }) : null
                })
            ]
        });
    });
    const _B = (0, h.default)(i.motion.div).attrs({
        className: 'flex-column between maxWidth',
        transition: {
            duration: j.default.enterExit.duration,
            ease: j.default.enterExit.ease
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    })(z || (z = (_g => _g)`
  padding: 25px;
`));
}), a.register('spKsy', function(b, c) {
    _g(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('vShe/'),
        h = a('9R7cy'),
        i = a('j2ADs'),
        j = a('0PFEY'),
        k = a('FK3Hv');
    let l, m, n, o = _g => _g;
    var _p = _g => {
        const {
            selected: q,
            name: r,
            icon: s,
            onSelect: t
        } = _g;
        return (0, d.jsxs)(_q, {
            onClick: _g => {
                (0, j.default)(_g), (0, k.playClickSound)(), t();
            },
            children: [
                (0, d.jsx)(_r, {
                    selected: q,
                    children: (0, d.jsx)(h.default, {
                        name: s
                    })
                }),
                (0, d.jsx)(_s, {
                    children: (0, d.jsx)(i.default.Title, {
                        level: 4,
                        children: r
                    })
                })
            ]
        });
    };
    const _q = (0, e.default)(f.VerticallyCentered)(l || (l = o`
  padding: 8px 15px;
  padding-left: 0px;
  border-radius: 6px;
  cursor: pointer;
  width: 300px;
  transition: all 0.2s ease;
  &:hover {
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.1);
  }
`)),
        _r = (0, e.default)(f.Centered)(m || (m = o`
  height: 36px;
  width: 36px;
  border: 2px solid ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  transition: background 0.2s ease;
`), g.default.White, _g => _g.selected ? '#269900' : 'rgba(0,0,0,0.2)'),
        _s = e.default.div(n || (n = o`
  margin-left: 14px;
`));
}), a.register('0PFEY', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = _g => {
        null == _g || _g.stopPropagation();
    };
}), a.register('k2Q4/', function(b, c) {
    _g(b.exports, 'AvailableCodeGridsForDeviceType', function() {
        return _j;
    }), _g(b.exports, 'DoesDeviceTypeHaveAvailableCodeGrids', function() {
        return _n;
    });
    var d = a('J2kec'),
        e = a('iWivW'),
        f = a('t2tO1'),
        g = a('z/xWG'),
        h = a('FAXfY'),
        i = a('O3NOb');
    const _j = (_g, b) => {
            var k, l;
            const m = e.default.worldOptions.deviceOptions.find(b => b.id === _g);
            if (!m)
                return [];
            if (!(0, h.CanAddDeviceType)(_g, b))
                return [];
            if (!(0, g.CanAddCodeGrids)())
                return [];
            let _n = [];
            const {
                codeGridSchema: o
            } = m;
            return o.allowChannelGrids && (0, i.IsRoleLevelBetween)(null == o || null === (k = o.channelGridsRoleLevel) || void 0 === k ? void 0 : k.min, null == o || null === (l = o.channelGridsRoleLevel) || void 0 === l ? void 0 : l.max) && _n.push({
                type: d.default.broadcastMessage,
                name: 'When receiving on channel...'
            }), o.triggers.forEach(_g => {
                (0, f.CanAddCodeGrid)(m.id, _g.type) && _n.push({
                    type: _g.type,
                    name: _g.name
                });
            }), _n;
        },
        k = (_g, b) => !!_j(_g, b).length;
}), a.register('t2tO1', function(b, c) {
    _g(b.exports, 'CanAddCodeGrid', function() {
        return _f;
    });
    var d = a('KzfsH'),
        e = a('O3NOb');
    const _f = (_g, b) => {
        const g = (0, d.FetchDeviceOptionById)(_g);
        if (!g)
            return !1;
        const h = g.codeGridSchema.triggers.find(_g => _g.type === b);
        if (!h)
            return !1;
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), a.register('z/xWG', function(b, c) {
    _g(b.exports, 'CanAddCodeGrids', function() {
        return _f;
    });
    var d = a('jHBjp'),
        e = a('O3NOb');
    const _f = () => {
        const _g = d.RoleLevelPermissions.codeGrids.minimumRoleLevel,
            h = d.RoleLevelPermissions.codeGrids.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(_g, h);
    };
}), a.register('U50Uf', function(b, c) {
    _q(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0Or0D'),
        g = a('47u/+'),
        h = a('iWivW'),
        i = a('j2ADs'),
        j = a('PMl60'),
        k = a('AvtVx');
    var _l = _q => {
        const {
            deviceId: m,
            deviceOption: n
        } = _q, [o, p] = e.useState((0, f.GetRemovingDeviceTotalMemoryCost)({
            deviceId: m
        }));
        return e.useEffect(() => (0, g.ReactionToMultipleProps)([
            () => {
                var _q;
                return null === (_q = h.default.world.devices.codeGrids.get(m)) || void 0 === _q ? void 0 : _q.items.size;
            },
            () => h.default.memorySystem.counters.devices.get(n.id)
        ], () => {
            p((0, f.GetRemovingDeviceTotalMemoryCost)({
                deviceId: m
            }));
        }, {
            fireImmediately: !0
        }), [m]), (0, d.jsxs)(i.default.Text, {
            italic: !0,
            children: [
                (0, j.numberWithCommas)(o),
                ' ',
                k.MemoryName
            ]
        });
    };
}), a.register('47u/+', function(b, c) {
    _g(b.exports, 'ReactionToMultipleProps', function() {
        return _e;
    });
    var d = a('YuT/D');
    const _e = (_g, b, a) => {
        const f = [];
        return _g.forEach(_g => {
            const g = (0, d.reaction)(_g, b, a);
            f.push(g);
        }), () => {
            f.forEach(_g => {
                _g();
            });
        };
    };
}), a.register('vLowm', function(b, c) {
    _g(b.exports, 'WiresStartingFromDevice', function() {
        return _e;
    }), _g(b.exports, 'WiresEndingAtDevice', function() {
        return _f;
    }), _g(b.exports, 'DeviceHasAWireAttached', function() {
        return _g;
    });
    var d = a('iWivW');
    const _e = _g => Array.from(d.default.world.wires.wires.keys()).filter(b => b.startsWith(_g)).map(_g => d.default.world.wires.wires.get(_g)),
        _f = _g => Array.from(d.default.world.wires.wires.keys()).filter(b => b.endsWith(_g)).map(_g => d.default.world.wires.wires.get(_g)),
        _g = _g => !(!_e(_g).length && !_f(_g).length);
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
}), a.register('IL597', function(b, c) {
    _g(b.exports, 'DoesEditedDeviceSupportVisualEditing', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('D5xLI');
    const _f = () => {
        var _g;
        const h = (0, e.default)().worldManager.devices.getDeviceById(null !== (_g = d.default.me.editing.device.currentlyEditedDevice.id) && void 0 !== _g ? _g : '');
        return !!h && h.visualEditing.uses();
    };
}), a.register('M5eI4', function(b, c) {
    _i(b.exports, 'SetVisualEditingData', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('iWivW'),
        f = a('aIyMH'),
        g = a('A17vD');
    const _h = () => {
        const _i = (0, g.FetchCurrentlyEditedDevice)();
        if (!_i)
            return;
        _i.parts.forceHide(), _i.colliders.hideDebug(), _i.shadows.hide(), _i.onHide && _i.onHide(), e.default.me.editing.device.visualEditing = {
            active: !0,
            instruction: '',
            keyboardHelpers: [],
            cursor: 'default',
            id: _i.id
        };
        const j = _i.layers.isOnNaturalDepth() ? void 0 : _i.layers.getDepth();
        (0, f.default)({
            id: d.VisualEditingConstants.previewId,
            deviceOption: _i.deviceOption,
            isPreview: !0,
            options: {
                ..._i.options
            },
            placedByClient: !0,
            state: {
                ..._i.deviceOption.defaultState
            },
            x: _i.x,
            y: _i.y,
            depth: j,
            name: _i.name
        });
    };
}), a.register('NQh+U', function(b, c) {
    _z(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('ewwAh'),
        f = a('YRlpt'),
        g = a('ijg0s'),
        h = a('j2ADs'),
        i = a('LEQ5w'),
        j = a('vShe/'),
        k = a('PUGQx1'),
        l = a('2GeW4'),
        m = a('PMl60'),
        n = a('0PFEY'),
        o = a('Gxfhq'),
        p = a('2x11J'),
        q = a('D5xLI'),
        r = a('uRAeN');
    var _s = (0, p.observer)(_z => {
        const [t, u, v] = (0, m.useBoolean)(!1), [w, x] = i.useState(''), y = i.useRef(null);
        i.useEffect(() => {
            var _z;
            t && (x(''), null == y || null === (_z = y.current) || void 0 === _z || _z.focus());
        }, [t]);
        const z = () => {
                const A = null == w ? void 0 : w.trim(),
                    B = (0, q.default)().worldManager.devices.getDeviceById(_i.deviceId);
                B && ((0, r.default)({
                    depth: B.layers.getOptionsDepth(),
                    layerId: B.layers.getOptionsLayer(),
                    name: A,
                    deviceOption: B.deviceOption,
                    id: B.id,
                    isPreview: !1,
                    options: B.options,
                    placedByClient: !1,
                    state: B.deviceOption.defaultState,
                    x: B.x,
                    y: B.y
                }), v());
            },
            A = (0, o.default)();
        return (0, d.jsx)(l.default, {
            className: 'maxWidth',
            children: (0, d.jsxs)('div', {
                className: 'flex',
                onClick: n.default,
                children: [
                    (0, d.jsx)(g.default, {
                        title: A ? 'Rename' : void 0,
                        placement: 'right',
                        children: (0, d.jsx)(h.default.Title, {
                            level: 2,
                            style: {
                                color: j.default.White,
                                marginBottom: 2,
                                cursor: A ? 'pointer' : 'auto'
                            },
                            onClick: A ? u : void 0,
                            children: (0, k.FetchDeviceName)(_i.deviceId)
                        })
                    }),
                    (0, d.jsxs)(f.default, {
                        open: t && A,
                        onCancel: v,
                        onOk: z,
                        children: [
                            (0, d.jsx)(h.default.Title, {
                                level: 5,
                                children: 'Change name'
                            }),
                            (0, d.jsx)(e.default, {
                                ref: y,
                                maxLength: 64,
                                style: {
                                    marginTop: 10
                                },
                                placeholder: 'New name...',
                                value: w,
                                onChange: _i => {
                                    x(_i.target.value);
                                },
                                onPressEnter: z
                            })
                        ]
                    })
                ]
            })
        });
    });
}), a.register('PUGQx1', function(b, c) {
    _i(b.exports, 'FetchDeviceName', function() {
        return _g;
    });
    var d = a('EqyfB'),
        e = a('bV9vv'),
        f = a('iWivW');
    const _g = _i => {
        const h = f.default.world.devices.devices.get(_i);
        if (!h)
            return '';
        if (h.name)
            return h.name;
        if (h.deviceOption.id === d.default.prop) {
            const _i = h.options;
            if (_i.propId) {
                var j;
                const k = null === (j = (0, e.default)(_i.propId)) || void 0 === j ? void 0 : j.name;
                if (k)
                    return k;
            }
        }
        return h.deviceOption.name;
    };
}), a.register('uRAeN', function(b, c) {
    _N(b.exports, 'default', function() {
        return _h;
    });
    var d = a('D5xLI'),
        e = a('aIyMH'),
        f = a('fy44y'),
        g = a('zZJfb');
    var _h = _N => {
        const i = (0, d.default)().worldManager.devices.getDeviceById(_N.id);
        if (!i)
            return;
        const j = (0, g.default)(_N.id);
        if (!j)
            return;
        const k = _N.hooks || j.hooks;
        (0, e.default)({
            ..._N,
            hooks: k,
            placeInstantly: !0,
            onPlace: j => {
                j && (0, f.default)({
                    id: i.id,
                    deviceTypeId: i.deviceOption.id,
                    options: JSON.stringify(_N.options),
                    x: _N.x,
                    y: _N.y,
                    depth: j.layers.getOptionsDepth(),
                    layerId: j.layers.getOptionsLayer(),
                    name: _N.name,
                    hooks: k
                });
            }
        });
    };
}), a.register('8lG8z', function(b, c) {
    _N(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('TwXYL'),
        g = a('aUrj4'),
        h = a('0PFEY'),
        i = a('ZWpm0'),
        j = a('UyyDS'),
        k = a('DiyEG'),
        l = a('S6mEi'),
        m = a('Ct4sg');
    let n, o, p = _N => _N;
    var _q = _N => (0, d.jsxs)(_r, {
        children: [
            (0, d.jsx)(_s, {
                onClick: h.default,
                children: _N.tab === j.DeviceEditingHomeTab.options ? (0, d.jsx)(i.default, {
                    device: _N.device,
                    deviceOption: _N.deviceOption,
                    position: _N.position,
                    options: _N.options,
                    hooks: _N.hooks
                }) : _N.tab === j.DeviceEditingHomeTab.codeGrids ? (0, d.jsx)(k.default, {
                    device: _N.device,
                    deviceOption: _N.deviceOption,
                    options: _N.options
                }) : (0, d.jsx)(l.default, {
                    deviceId: _N.device.id
                })
            }),
            (0, d.jsx)(m.default, {
                padding: 25
            })
        ]
    });
    const _r = e.default.div.attrs({
            className: 'maxAll flex'
        })(n || (n = p`
  position: relative;
  justify-content: flex-end;
`)),
        _s = (0, e.default)(f.motion.div).attrs({
            className: 'maxAll scroll-y medium-shadow',
            transition: {
                duration: g.default.enterExit.duration,
                ease: g.default.enterExit.ease
            },
            initial: {
                opacity: 0.25,
                x: '100%'
            },
            animate: {
                opacity: 1,
                x: '0%'
            },
            exit: {
                opacity: 0.25,
                x: '100%'
            }
        })(o || (o = p`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  width: 490px;
  padding: 25px;
  padding-top: 68px;
  position: relative;
`));
}), a.register('DiyEG', function(b, c) {
    _N(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('2x11J'),
        g = a('bHGrl'),
        h = a('k2Q4/'),
        i = a('ifUNN'),
        j = a('yoCUM'),
        k = a('cvto726'),
        l = a('aCmo+'),
        m = a('khCBi'),
        n = a('PMl60');
    let o;
    var _p = (0, f.observer)(_N => {
        var q;
        const {
            world: {
                devices: {
                    codeGrids: r
                }
            }
        } = (0, g.default)(), s = _N.device.id, [t, u, v] = (0, n.useBoolean)(!1), w = null === (q = r.get(s)) || void 0 === q ? void 0 : q.items, x = (0, h.AvailableCodeGridsForDeviceType)(_N.deviceOption.id, _N.options), y = w && w.size >= 1, z = x.length >= 1, A = (0, l.default)();
        return y || A ? (0, d.jsx)(_q, {
            children: (0, d.jsxs)(k.default, {
                direction: 'vertical',
                size: 40,
                className: 'maxWidth',
                children: [
                    z && A ? (0, d.jsx)(i.default, {
                        codeGridOptions: x,
                        deviceId: s,
                        setIsCreatingNewGrid: u
                    }) : null,
                    y ? (0, d.jsx)(j.default, {
                        deviceId: s,
                        codeGrids: w,
                        isCreatingNewGrid: t,
                        setIsNotCreatingNewGrid: v
                    }) : null
                ]
            })
        }) : (0, d.jsx)(m.default, {});
    });
    const _q = e.default.div(o || (o = (_N => _N)``));
}), a.register('ifUNN', function(b, c) {
    _N(b.exports, 'default', function() {
        return _D;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('rHr0s'),
        g = a('oAd0b'),
        h = a('Axq+p'),
        i = a('0HHAH'),
        j = a('NIZyA'),
        k = a('OB7Pc'),
        l = a('YRlpt'),
        m = a('j2ADs'),
        n = a('QVC+I'),
        o = a('vShe/'),
        p = a('u3AQ4'),
        q = a('bHGrl'),
        r = a('PMl60'),
        s = a('47u/+'),
        t = a('iWivW'),
        u = a('+Uyq7'),
        v = a('cQ7LB'),
        w = a('J2kec'),
        x = a('m8UaK'),
        y = a('iulrc'),
        z = a('FK3Hv');
    let A, B, C = _N => _N;
    var _D = _N => {
        const {
            memorySystem: E
        } = (0, q.default)(), [F, G] = e.useState((0, u.CanAddCodeGrid)(_N.deviceId)), [H, I, J] = (0, r.useBoolean)(!1), [K, L] = e.useState(''), M = e.useRef(null);
        e.useEffect(() => (0, s.ReactionToMultipleProps)([
            () => t.default.memorySystem.counters.codeGrids,
            () => t.default.memorySystem.usedMemoryCost
        ], () => {
            G((0, u.CanAddCodeGrid)(_N.deviceId));
        }, {
            fireImmediately: !0
        }), [_N.deviceId]), e.useEffect(() => {
            var _N;
            null == M || null === (_N = M.current) || void 0 === _N || _N.focus();
        }, [H]);
        const N = e.useMemo(() => (0, x.default)(y.default.channel), []),
            O = (0, v.GetCodeGridMessage)({
                reason: F.reason
            });
        return (0, d.jsxs)(_E, {
            children: [
                (0, d.jsxs)(_F, {
                    children: [
                        (0, d.jsxs)(m.default.Title, {
                            level: 4,
                            style: {
                                color: o.default.White
                            },
                            children: [
                                'Create a new ',
                                n.default.grid.singular
                            ]
                        }),
                        (0, d.jsxs)(m.default.Text, {
                            italic: !0,
                            children: [
                                '+',
                                (0, r.numberWithCommas)(E.costs.codeGrid),
                                ' memory'
                            ]
                        })
                    ]
                }),
                F.canAdd ? (0, d.jsx)(f.CodeGridList, {
                    style: {
                        marginTop: 20
                    },
                    children: _n.codeGridOptions.map(E => (0, d.jsx)(g.default, {
                        label: E.name,
                        onClick: () => {
                            (0, z.playClickSound)(), E.type !== w.default.broadcastMessage ? (_n.setIsCreatingNewGrid(), (0, p.default)({
                                deviceId: _n.deviceId,
                                triggerType: E.type,
                                triggerValue: ''
                            })) : I();
                        }
                    }, E.type + '-option'))
                }) : (0, d.jsx)(j.default, {
                    type: 'error',
                    showIcon: !0,
                    message: O,
                    style: {
                        marginTop: 15
                    }
                }),
                (0, d.jsxs)(l.default, {
                    open: H,
                    onCancel: J,
                    onOk: () => {
                        const P = null == K ? void 0 : K.trim();
                        P && P.length && (_n.setIsCreatingNewGrid(), (0, p.default)({
                            deviceId: _n.deviceId,
                            triggerType: w.default.broadcastMessage,
                            triggerValue: K
                        }), J(), L(''));
                    },
                    children: [
                        (0, d.jsx)(m.default.Title, {
                            level: 5,
                            children: 'Channel name'
                        }),
                        (0, d.jsxs)(m.default.Text, {
                            children: [
                                'The ',
                                n.default.grid.singular,
                                ' will run when receiving a message from this channel'
                            ]
                        }),
                        (0, d.jsx)(k.default, {
                            ref: M,
                            value: K,
                            className: 'maxWidth',
                            placeholder: 'Channel name...',
                            onChange: L,
                            maxLength: 512,
                            style: {
                                marginTop: 10,
                                marginBottom: 3
                            },
                            autoFocus: !0,
                            options: N.map(_n => ({
                                value: _n
                            })),
                            filterOption: (_n, E) => -1 !== E.value.toUpperCase().indexOf(_n.toUpperCase())
                        })
                    ]
                })
            ]
        });
    };
    const _E = h.default.div.attrs({
            className: 'maxWidth'
        })(A || (A = C``)),
        _F = (0, h.default)(i.VerticallyCentered).attrs({
            className: 'maxWidth between'
        })(B || (B = C``));
}), a.register('rHr0s', function(b, c) {
    _n(b.exports, 'CodeGridList', function() {
        return _e;
    });
    let d;
    const _e = a('Axq+p').default.div.attrs({
        className: 'maxWidth'
    })(d || (d = (_n => _n)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), a.register('oAd0b', function(b, c) {
    _n(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('j2ADs');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('0HHAH');
    let h;
    var _i = _n => (0, d.jsxs)(_j, {
        onClick: _n.onClick,
        children: [
            _n.children,
            (0, d.jsx)(e.default.Text, {
                children: _n.label
            })
        ]
    });
    const _j = (0, f.default)(g.Centered).attrs({
        className: 'maxWidth'
    })(h || (h = (_n => _n)`
  padding: 30px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  cursor: pointer;
  border: 2px dashed rgba(255, 244, 212, 0.5);
  transition: background 0.2s ease;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`));
}), a.register('OB7Pc', function(b, c) {
    _n(b.exports, 'default', function() {
        return _t;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('inwN3'),
        j = a('kRwUk25'),
        k = a('CMcLV');
    const {
        Option: l
    } = i.default;

    function m(_n) {
        return _n && _n.type && (_n.type.isSelectOption || _n.type.isSelectOptGroup);
    }
    const m = (_i, a) => {
            const {
                prefixCls: n,
                className: o,
                popupClassName: p,
                dropdownClassName: q,
                children: r,
                dataSource: s
            } = _i, _t = (0, e.default)(r);
            let u;
            1 === _t.length && (0, k.isValidElement)(_t[0]) && !_n(_t[0]) && ([v] = _t);
            const w = v ? () => v : void 0;
            let x;
            x = _t.length && _n(_t[0]) ? r : s ? s.map(_i => {
                if ((0, k.isValidElement)(_i))
                    return _i;
                switch (typeof _i) {
                    case 'string':
                        return g.createElement(l, {
                            key: _i,
                            value: _i
                        }, _i);
                    case 'object': {
                        const {
                            value: y
                        } = _i;
                        return g.createElement(l, {
                            key: y,
                            value: y
                        }, _i.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: y
            } = g.useContext(h.ConfigContext), z = y('select', n);
            return g.createElement(i.default, Object.assign({
                ref: a
            }, (0, f.default)(_i, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: z,
                popupClassName: p || q,
                className: _b(d)(`${ z }-auto-complete`, o),
                mode: i.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: w
            }), x);
        },
        n = g.forwardRef(m),
        o = (0, j.default)(n);
    n.Option = l, n._InternalPanelDoNotUseOrYouWillBeFired = o;
    var p = n;
}), a.register('u3AQ4', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = _i => {
        (0, e.default)(d.default.createCodeGrid, {
            deviceId: _i.deviceId,
            triggerType: _i.triggerType,
            triggerValue: _i.triggerValue
        });
    };
}), a.register('+Uyq7', function(b, c) {
    _i(b.exports, 'CanAddCodeGrid', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('ttkWv'),
        f = a('q4EFc');
    const _g = _i => {
        var h;
        const i = d.default.memorySystem.costs.codeGrid;
        if (!(0, f.CanUseMoreMemory)({
                memory: i
            }))
            return {
                canAdd: !1,
                reason: e.OutOfResourcesReason.noMemory
            };
        if (d.default.memorySystem.counters.codeGrids >= d.default.memorySystem.limits.codeGrids)
            return {
                canAdd: !1,
                reason: e.OutOfResourcesReason.limit
            };
        var j;
        return (null !== (j = null === (h = d.default.world.devices.codeGrids.get(_i)) || void 0 === h ? void 0 : h.items.size) && void 0 !== j ? j : 0) >= d.default.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: e.OutOfResourcesReason.codeGridPerDeviceLimit
        } : {
            canAdd: !0
        };
    };
}), a.register('cQ7LB', function(b, c) {
    _i(b.exports, 'GetCodeGridMessage', function() {
        return _i;
    });
    var d = a('iWivW'),
        e = a('ttkWv'),
        f = a('QVC+I'),
        g = a('AvtVx'),
        h = a('PMl60');
    const _i = _i => {
        if (_i.reason === e.OutOfResourcesReason.codeGridPerDeviceLimit)
            return `Cannot create more ${ f.default.grid.plural }. Reached limit of ${ d.default.memorySystem.limits.codeGridsPerDevice } ${ f.default.grid.plural } per device.`;
        if (_i.reason === e.OutOfResourcesReason.limit)
            return `Cannot create more ${ f.default.grid.plural }. Reached limit of ${ d.default.memorySystem.limits.codeGrids } ${ f.default.grid.plural } on map.`;
        const j = d.default.memorySystem.costs.codeGrid;
        return _i.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ g.MemoryName } to create ${ f.default.grid.singular }. Requires ${ (0, h.numberWithCommas)(j) } available ${ g.MemoryName }.` : '';
    };
}), a.register('yoCUM', function(b, c) {
    _i(b.exports, 'default', function() {
        return _D;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('ulE4q'),
        h = a('/rAT0'),
        i = a('YRlpt'),
        j = a('j2ADs'),
        k = a('aCmo+'),
        l = a('QVC+I'),
        m = a('rHr0s'),
        _n = a('oAd0b'),
        o = a('2x11J'),
        p = a('JV94u'),
        q = a('vShe/'),
        r = a('iWivW'),
        s = a('iG9EJ'),
        t = a('ieNls8'),
        u = a('LHeQv'),
        v = a('0PFEY'),
        w = a('fNsdX'),
        x = a('Q6qwr'),
        y = a('4iV4e'),
        z = a('FK3Hv');
    let A, B, C = _i => _i;
    var _D = (0, o.observer)(_i => {
        const {
            deviceId: E
        } = _i, F = Array.from(_i.codeGrids), G = (0, k.default)();
        return e.useEffect(() => {
            _i.isCreatingNewGrid && (_i.setIsNotCreatingNewGrid(), F.length >= 1 && _E((0, y.last)(F)[0]));
        }, [F.length]), (0, d.jsxs)(_F, {
            children: [
                (0, d.jsxs)(j.default.Title, {
                    style: {
                        color: q.default.White
                    },
                    level: 4,
                    children: [
                        G ? 'Edit' : 'View',
                        ' an existing',
                        ' ',
                        l.default.grid.singular
                    ]
                }),
                (0, d.jsx)(m.CodeGridList, {
                    style: {
                        marginTop: 20
                    },
                    children: F.map(_i => (0, d.jsx)(_n.default, {
                        label: (0, p.default)(E, _i[0]),
                        onClick: () => {
                            (0, z.playClickSound)(), _E(_i[0]);
                        },
                        children: G ? (0, d.jsx)(_G, {
                            children: (0, d.jsx)(h.default, {
                                menu: {
                                    items: [{
                                        key: `remove-grid-${ _i[0] }`,
                                        label: `Delete ${ l.default.grid.singular }`,
                                        icon: (0, d.jsx)(t.default, {}),
                                        onClick: (0, w.default)(() => {
                                            i.default.confirm({
                                                title: `Are you sure you want to delete this ${ l.default.grid.singular }?`,
                                                onOk: () => {
                                                    (0, x.default)({
                                                        deviceId: E,
                                                        gridId: _i[0]
                                                    });
                                                },
                                                okText: 'Yes',
                                                cancelText: 'No'
                                            });
                                        })
                                    }]
                                },
                                children: (0, d.jsx)(g.default, {
                                    type: 'text',
                                    size: 'small',
                                    icon: (0, d.jsx)(u.default, {}),
                                    onClick: v.default
                                })
                            })
                        }) : null
                    }, _i[0] + '-grid'))
                })
            ]
        });
    });
    const _E = _i => {
            r.default.me.editing.device.currentlyEditedGridId = _i, r.default.me.editing.device.screen = s.EditingDeviceScreen.grid;
        },
        _F = f.default.div.attrs({
            className: 'maxWidth'
        })(A || (A = C``)),
        _G = f.default.div(B || (B = C`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`));
}), a.register('aCmo+', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('iWivW'),
        e = a('Jfada'),
        f = a('k7cZc'),
        g = a('9tz3H'),
        h = a('/pbxo');
    var _i = _i => {
        var j, k;
        if (!(0, g.isSavedVersion)())
            return !1;
        if ((0, f.isAssignment)())
            return !1;
        if (!(0, h.InPreGamePhase)())
            return !1;
        const l = _i || (0, e.default)();
        return (null === (j = d.default.characters.characters.get(l)) || void 0 === j || null === (k = j.permissions) || void 0 === k ? void 0 : k.manageCodeGrids) || !1;
    };
}), a.register('JV94u', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('J2kec'),
        f = a('iWivW'),
        g = a('zZJfb'),
        h = a('b5kvC');
    var _i = (_i, b) => ((_i, b) => {
        var j, k;
        const l = (0, g.default)(_i);
        if (!l)
            return null;
        const m = null === (j = f.default.world.devices.codeGrids.get(_i)) || void 0 === j || null === (k = j.items) || void 0 === k ? void 0 : k.get(b);
        if (!m)
            return null;
        const n = m.triggerType;
        if (n === e.default.broadcastMessage)
            return (0, d.jsxs)('span', {
                children: [
                    'When receiving on channel',
                    ' ',
                    (0, d.jsx)('span', {
                        style: {
                            fontWeight: h.FontWeights.Bold,
                            color: '#57f784'
                        },
                        children: m.triggerValue || 'channel'
                    })
                ]
            });
        const o = l.deviceOption.codeGridSchema.triggers.find(_i => _i.type === n);
        return o ? o.name : null;
    })(_i, b) || 'Block';
}), a.register('ieNls8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('8auc66'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var _i = e.forwardRef(h);
}), a.register('8auc66', function(b, c) {
    _N(b.exports, 'default', function() {
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
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), a.register('fNsdX', function(b, c) {
    _N(b.exports, 'default', function() {
        return _d;
    });
    var _d = _N => b => {
        b.domEvent.stopPropagation(), _N && _N();
    };
}), a.register('Q6qwr', function(b, c) {
    _N(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = _N => {
        (0, e.default)(d.default.deleteCodeGrid, {
            deviceId: _N.deviceId,
            gridId: _N.gridId
        });
    };
}), a.register('khCBi', function(b, c) {
    _N(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('j2ADs');
    a('LEQ5w');
    var f = a('QVC+I'),
        g = a('bzU3s'),
        h = a('0HHAH'),
        i = a('9R7cy');
    var _j = () => (0, d.jsxs)(h.CenteredColumn, {
        className: 'maxAll',
        children: [
            (0, d.jsx)('div', {
                style: {
                    fontSize: 54,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 5
                },
                children: (0, d.jsx)(i.default, {
                    name: 'fal fa-cubes'
                })
            }),
            (0, d.jsxs)(e.default.Text, {
                children: [
                    'No ',
                    f.default.grid.plural,
                    ' have been created for this',
                    ' ',
                    g.default.device.singular,
                    '.'
                ]
            })
        ]
    });
}), a.register('S6mEi', function(b, c) {
    _N(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ntjk6'),
        g = a('2x11J'),
        h = a('vLowm'),
        i = a('bzU3s'),
        j = a('cvto726'),
        k = a('j2ADs');
    let l;
    var _m = (0, g.observer)(_N => (0, h.DeviceHasAWireAttached)(_N.deviceId) ? (0, d.jsx)(_n, {
        children: (0, d.jsxs)(j.default, {
            direction: 'vertical',
            size: 25,
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    direction: 'in',
                    deviceId: _N.deviceId
                }),
                (0, d.jsx)(f.default, {
                    direction: 'out',
                    deviceId: _N.deviceId
                })
            ]
        })
    }) : (0, d.jsxs)(k.default.Text, {
        children: [
            'No ',
            i.default.wire.plural,
            ' are connected to this',
            ' ',
            i.default.device.singular,
            '.'
        ]
    }));
    const _n = e.default.div(l || (l = (_N => _N)``));
}), a.register('ntjk6', function(b, c) {
    _N(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('bzU3s'),
        g = a('qVhMZ'),
        h = a('cvto726'),
        i = a('j2ADs'),
        j = a('vShe/'),
        k = a('vLowm'),
        l = a('YQ8QB');
    let m;
    var _n = (0, a('2x11J').observer)(_N => {
        const o = 'in' === _N.direction ? (0, k.WiresEndingAtDevice)(_N.deviceId) : (0, k.WiresStartingFromDevice)(_N.deviceId);
        return o.length ? (0, d.jsxs)(_o, {
            children: [
                (0, d.jsxs)(i.default.Title, {
                    level: 4,
                    style: {
                        color: j.default.White
                    },
                    children: [
                        (0, g.CapitalizeFirstLetter)(f.default.wire.plural),
                        ' ',
                        _N.direction
                    ]
                }),
                (0, d.jsx)(h.default, {
                    direction: 'vertical',
                    size: 12,
                    style: {
                        marginTop: 15
                    },
                    className: 'maxWidth',
                    children: o.map(o => (0, d.jsx)(l.default, {
                        wire: o,
                        deviceId: _N.deviceId
                    }, o.id))
                })
            ]
        }) : null;
    });
    const _o = e.default.div(m || (m = (_N => _N)``));
}), a.register('YQ8QB', function(b, c) {
    _N(b.exports, 'default', function() {
        return _C;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('0HHAH'),
        h = a('9R7cy'),
        i = a('j2ADs'),
        j = a('b5kvC'),
        k = a('PUGQx1'),
        l = a('BYRTX'),
        m = a('EqyfB'),
        n = a('2x11J'),
        o = a('bHGrl'),
        p = a('mQCZt'),
        q = a('11nl3');
    let r, s, t, u, v, w, x, y, z, A, B = _N => _N;
    var _C = (0, n.observer)(_N => {
        const {
            wire: D,
            deviceId: E
        } = _N, {
            me: {
                editing: F
            }
        } = (0, o.default)(), G = D.startDevice === E, H = !G, I = (0, l.FetchDeviceById)(D.startDevice), J = (0, l.FetchDeviceById)(D.endDevice), K = (0, k.FetchDeviceName)(D.startDevice), L = (0, k.FetchDeviceName)(D.endDevice), M = e.useMemo(() => {
            var _N, O, P, Q;
            if ((null == I ? void 0 : I.deviceOption.id) === m.default.wireRepeater)
                return 'Pulse received';
            const R = null == I || null === (_N = I.deviceOption) || void 0 === _N || null === (O = _N.wireConfig) || void 0 === O || null === (P = O.out) || void 0 === P || null === (Q = P.connections) || void 0 === Q ? void 0 : Q.find(_N => _N.id === D.startConnection);
            return R ? R.name : 'No event';
        }, [D.startConnection]), N = e.useMemo(() => {
            var O, P, Q, R, S;
            if ((null == J || null === (O = J.deviceOption) || void 0 === O ? void 0 : O.id) === m.default.wireRepeater)
                return 'Relay pulse';
            const T = null == J || null === (P = J.deviceOption) || void 0 === P || null === (Q = P.wireConfig) || void 0 === Q || null === (R = Q.in) || void 0 === R || null === (S = R.connections) || void 0 === S ? void 0 : S.find(O => O.id === D.endConnection);
            return T ? T.name : 'No action';
        }, [D.endConnection]);
        return (0, d.jsxs)(_D, {
            onClick: () => {
                F.wire.currentlyEditedWireId = D.id, (0, p.default)(q.default.editingWire);
            },
            children: [
                (0, d.jsxs)(_E, {
                    children: [
                        (0, d.jsx)(_F, {
                            selected: G
                        }),
                        (0, d.jsxs)(_G, {
                            children: [
                                (0, d.jsx)(_H, {}),
                                (0, d.jsx)(_I, {
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-caret-right'
                                    })
                                })
                            ]
                        }),
                        (0, d.jsx)(_F, {
                            selected: H
                        })
                    ]
                }),
                (0, d.jsxs)(_J, {
                    children: [
                        (0, d.jsxs)(_L, {
                            children: [
                                H ? (0, d.jsx)(_N, {
                                    children: K
                                }) : null,
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(i.default.Text, {
                                        children: M
                                    })
                                })
                            ]
                        }),
                        (0, d.jsxs)(_M, {
                            children: [
                                G ? (0, d.jsx)(_N, {
                                    children: L
                                }) : null,
                                (0, d.jsx)(i.default.Text, {
                                    children: N
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const _D = f.default.div(r || (r = B`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`)),
        _E = (0, f.default)(g.VerticallyCentered).attrs({
            className: 'maxWidth'
        })(s || (s = B``)),
        _F = f.default.div(t || (t = B`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${ 0 };
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`), _h => _h.selected ? '#269900' : 'rgba(255,255,255,0.14)'),
        _G = (0, f.default)(g.VerticallyCentered)(u || (u = B`
  flex: 1;
  padding: 0px 20px;
`)),
        _H = f.default.div(v || (v = B`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`)),
        _I = f.default.div(w || (w = B`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`)),
        _J = f.default.div.attrs({
            className: 'maxWidth between flex'
        })(x || (x = B`
  align-items: flex-start;
  margin-top: 10px;
`)),
        K = f.default.div(y || (y = B`
  max-width: 45%;
  line-height: 1;
`)),
        _L = (0, f.default)(K)(z || (z = B``)),
        _M = (0, f.default)(K)(A || (A = B`
  text-align: right;
`)),
        _N = _h => (0, d.jsx)(i.default.Title, {
            level: 5,
            style: {
                fontWeight: j.FontWeights.Bold
            },
            children: _h.children
        });
}), a.register('bI0IS', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('D5xLI'),
        f = a('bHGrl');
    var _g = () => {
        const {
            me: {
                editing: {
                    device: {
                        currentlyEditedDevice: _h
                    }
                }
            },
            worldOptions: {
                deviceOptions: i
            }
        } = (0, f.default)();
        return {
            device: d.useMemo(() => (0, e.default)().worldManager.devices.getDeviceById(_h.id), [_h.id]),
            deviceOption: i.find(i => i.id === _h.deviceOptionId)
        };
    };
}), a.register('rr5bz', function(b, c) {
    _g(b.exports, 'useTimeout', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('Oym4R0');

    function _f(_g, h) {
        void 0 === h && (h = 0), (0, e.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var i = (0, d.useState)(!1),
            j = i[0],
            k = i[1],
            l = (0, d.useRef)();

        function m() {
            l.current && l.current(), _m();
        }
        (0, d.useEffect)(function() {
            l.current = _g;
        }, [_g]);
        var _m = (0, d.useCallback)(function() {
                k(!1);
            }, []),
            n = (0, d.useCallback)(function() {
                k(!0);
            }, []);
        return (0, d.useEffect)(function() {
            if (j) {
                if ('undefined' != typeof window) {
                    var o = window.setTimeout(_g, h);
                    return function() {
                        window.clearTimeout(o);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            j,
            h
        ]), {
            clear: _m,
            isActive: j,
            start: n,
            stop: _m
        };
    }
}), a.register('Oym4R0', function(b, c) {
    _g(b.exports, 'useWarningOnMountInDevelopment', function() {
        return _f;
    });
    var d = a('+i8ep'),
        e = a('nHK4Z');

    function _f(_g) {
        (0, d.useDidMount)(function() {
            (0, e.warning)(!1, _g);
        });
    }
}), a.register('nHK4Z', function(b, c) {
    _z(b.exports, 'warning', function() {
        return _d;
    });
    var _d = function() {};
}), a.register('N8S9w', function(b, c) {
    _z(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        _g = a('2x11J'),
        h = a('2GeW4'),
        i = a('bHGrl'),
        j = a('YuT/D'),
        k = a('iWivW'),
        l = a('tKgSE'),
        m = a('HaNMR'),
        n = a('ryWAy'),
        o = a('ulE4q'),
        p = a('b5kvC'),
        q = a('8WvaZ'),
        r = a('JCAc0'),
        s = a('GqzrW'),
        t = a('FK3Hv');
    let u, v, w, x = _z => _z;
    var _y = (0, _g.observer)(() => {
        const {
            me: {
                editing: {
                    device: {
                        visualEditing: {
                            instruction: _z,
                            keyboardHelpers: A
                        }
                    }
                }
            }
        } = (0, i.default)();
        (0, n.default)(_F(q).Input.Keyboard.KeyCodes.ENTER, () => {
            p();
        });
        (0, n.default)(_F(q).Input.Keyboard.KeyCodes.ESC, () => {
            p();
        }), (0, s.useWillUnmount)(() => {
            (0, r.ClearVisualEditingData)();
        });
        const [B, C] = e.useState(_z), [D, E] = e.useState(JSON.stringify(A));
        e.useEffect(() => {
            const _F = (0, j.reaction)(() => _z, () => {
                B !== k.default.me.editing.device.visualEditing.instruction && C(k.default.me.editing.device.visualEditing.instruction);
            }, {
                fireImmediately: !0
            });
            return () => {
                _F();
            };
        }, [
            _z,
            B
        ]), e.useEffect(() => {
            const F = (0, j.reaction)(() => A, () => {
                D !== JSON.stringify(k.default.me.editing.device.visualEditing.keyboardHelpers) && E(JSON.stringify(k.default.me.editing.device.visualEditing.keyboardHelpers));
            }, {
                fireImmediately: !0
            });
            return () => {
                F();
            };
        }, [
            D,
            A
        ]);
        const F = () => {
            (0, l.ConfirmDoneVisualEditing)();
        };
        return (0, d.jsxs)(_z, {
            children: [
                (0, d.jsx)(m.default, {
                    items: JSON.parse(D),
                    visible: !0
                }),
                (0, d.jsxs)(_A, {
                    children: [
                        (0, d.jsx)(h.default, {
                            children: (0, d.jsx)('div', {
                                children: (0, d.jsx)(o.default, {
                                    type: 'primary',
                                    size: 'large',
                                    onClick: () => {
                                        (0, t.playClickSound)(), F();
                                    },
                                    children: 'Done'
                                })
                            })
                        }),
                        (0, d.jsx)(_B, {
                            children: (0, d.jsx)('div', {
                                children: B
                            })
                        })
                    ]
                })
            ]
        });
    });
    const _z = f.default.div.attrs({
            className: 'maxAll flex'
        })(u || (u = x`
  align-items: flex-end;
`)),
        _A = f.default.div.attrs({
            className: 'maxWidth flex'
        })(v || (v = x`
  position: relative;
  padding: 25px;
`)),
        _B = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(w || (w = x`
  position: absolute;
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
  font-size: 22px;
  top: 0px;
  left: 0px;
`), p.Fonts.FugazOne);
}), a.register('tKgSE', function(b, c) {
    _k(b.exports, 'ConfirmDoneVisualEditing', function() {
        return _j;
    });
    var d = a('11nl3'),
        e = a('mQCZt'),
        f = a('uRAeN'),
        g = a('A17vD'),
        h = a('JCAc0'),
        i = a('HXXiu');
    const _j = () => {
        (0, e.default)(d.default.editingDevice);
        const _k = (0, i.FetchVisualEditingPreview)(),
            l = (0, g.FetchCurrentlyEditedDevice)();
        (0, h.ClearVisualEditingData)(), l && _k && (0, f.default)({
            deviceOption: l.deviceOption,
            id: l.id,
            x: Math.round(_k.x),
            y: Math.round(_k.y),
            depth: _k.layers.getDepth(),
            layerId: l.layers.getOptionsLayer(),
            name: _k.name,
            isPreview: !1,
            options: {
                ..._k.options
            },
            placedByClient: !0,
            state: l.deviceOption.defaultState
        });
    };
}), a.register('pdAi8', function(b, c) {
    b.exports = import('./' + a('HmN9A').resolve('cXcnp')).then(() => a('g9c1U'));
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _i(b.exports, 'default', function() {
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
}), a.register('sCbH9', function(b, c) {
    _i(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('/oq/k');
    const e = [],
        _f = _i => e.includes(_i);
    var _g = _i => {
        const {
            familyName: h,
            onLoad: i
        } = _i;
        e.includes(h) ? i && i() : _b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: _i => {
                e.includes(_i) || e.push(_i), h === _i && i && i();
            }
        });
    };
}), a.register('dHtbx0', function(_b, c) {
    _i(_b.exports, 'CanAddTerrain', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('O3NOb');
    const _f = _i => {
        var g;
        const h = d.default.worldOptions.terrainOptions.find(g => g.id === _i);
        if (!h)
            return !1;
        if (null === (g = h.blockedMapStyles) || void 0 === g ? void 0 : g.length) {
            const _i = d.default.session.mapStyle;
            if (h.blockedMapStyles.includes(_i))
                return !1;
        }
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), a.register('bh+op', function(b, c) {
    e(b.exports, 'GetCurrentMapStyle', function() {
        return _e;
    });
    var d = a('iWivW');
    const _e = () => d.default.session.mapStyle;
});