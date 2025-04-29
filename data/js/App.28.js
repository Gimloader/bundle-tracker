function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('4fUtG', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _D;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('LihP5'),
        k = c('SxihY'),
        l = c('UkybP'),
        m = c('9aZ6t'),
        n = c('g1XUS'),
        o = c('8KqQ+'),
        p = c('Kiu7k'),
        q = c('lIJIq'),
        r = c('ZqaCP'),
        s = c('eLsOE'),
        t = c('6jmvl'),
        u = c('K/2xB'),
        v = c('uQzYS'),
        w = c('jEuDs'),
        x = c('JkQCT'),
        y = c('DArvL'),
        z = c('N5ueH'),
        A = c('qIlyp');
    let B;
    const C = h.lazy(() => c('YjcsJ'));
    var _D = (0, t.observer)(() => {
        const {
            me: E,
            world: {
                devices: F
            }
        } = (0, u.default)(), {
            options: G,
            hooks: H,
            position: I
        } = (0, q.default)(), {
            device: J,
            deviceOption: K
        } = (0, r.default)(), L = (0, y.IsVisualEditingActive)();
        h.useEffect(() => {
            if (L)
                return () => {};
            return (0, s.AddInputBlockingUI)().dispose;
        }, [L]);
        const {
            start: M,
            clear: N
        } = (0, w.useTimeout)(() => {
            F.devices.get(E.editing.device.currentlyEditedDevice.id) || B();
        }, 25);
        if (h.useEffect(() => {
                const O = (0, x.when)(() => !F.devices.get(E.editing.device.currentlyEditedDevice.id), () => {
                        M();
                    }),
                    P = (0, x.when)(() => !!F.devices.get(E.editing.device.currentlyEditedDevice.id), () => {
                        N();
                    });
                return () => {
                    O(), P();
                };
            }, [E.editing.device.currentlyEditedDevice.id]), !J || !K)
            return null;
        const O = () => {
            (0, j.default)(k.default.none), (0, A.EmitTutorialEvent)({
                event: A.TutorialEventName.CLOSE_DEVICE_OPTIONS,
                device: J
            });
        };
        return L ? (0, g.jsx)(z.default, {}) : (0, g.jsx)(l.default, {
            className: 'maxAll',
            children: (0, g.jsx)(_E, {
                onClick: O,
                children: (0, g.jsx)(h.Suspense, {
                    fallback: null,
                    children: E.editing.device.screen === v.EditingDeviceScreen.grid ? (0, g.jsx)(C, {
                        close: () => {
                            E.editing.device.screen = v.EditingDeviceScreen.home;
                        },
                        deviceId: J.id
                    }) : (0, g.jsx)(p.default, {
                        device: J,
                        deviceOption: K,
                        position: I,
                        options: G,
                        hooks: H,
                        close: O
                    })
                })
            })
        });
    });
    const _E = (0, i.default)(m.motion.div).attrs({
        className: 'maxAll',
        transition: {
            duration: n.default.enterExit.duration,
            ease: n.default.enterExit.ease
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
    })(B || (B = (a => a)`
  color: ${ 0 };
`), o.default.White);
}), c.register('g1XUS', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        enterExit: {
            duration: 0.22,
            ease: 'easeInOut'
        }
    };
}), c.register('Kiu7k', function(d, e) {
    a(d.exports, 'DeviceEditingHomeTab', function() {
        return _n;
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('/Gkl6'),
        j = c('S0D4d'),
        k = c('J8L14'),
        l = c('ddhGF');
    let m, _n;
    var o;
    (o = _n || (_n = {})).options = 'options', o.codeGrids = 'codeGrids', o.wires = 'wires';
    var _p = a => {
        (0, k.default)(b(l).Input.Keyboard.KeyCodes.ESC, a.close, [a.close]);
        const [q, r] = g.useState(_n.options);
        return (0, f.jsxs)(_q, {
            children: [
                (0, f.jsx)(i.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    options: a.options,
                    tab: q,
                    setTab: r
                }),
                (0, f.jsx)(j.default, {
                    device: a.device,
                    options: a.options,
                    hooks: a.hooks,
                    position: a.position,
                    deviceOption: a.deviceOption,
                    tab: q
                })
            ]
        });
    };
    const _q = h.default.div.attrs({
        className: 'maxAll flex between'
    })(m || (m = (a => a)``));
}), c.register('/Gkl6', function(d, e) {
    a(d.exports, 'default', function() {
        return _C;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('P1KtI'),
        h = c('E2AMI26'),
        i = c('D1Dez'),
        j = c('u4s09'),
        k = c('9aZ6t'),
        l = c('g1XUS'),
        m = c('6jmvl'),
        n = c('okbm4'),
        o = c('Q6LQJ'),
        p = c('DXQir'),
        q = c('Kiu7k'),
        r = c('IlHF0'),
        s = c('Ax/Fw'),
        t = c('gp8Qp0'),
        u = c('xuwpw'),
        v = c('DArvL'),
        w = c('VjCBm'),
        x = c('u5JEh1'),
        y = c('0ylKA'),
        z = c('y1oBc'),
        A = c('9N6Bn');
    let B;
    var _C = (0, m.observer)(a => {
        const {
            device: D,
            deviceOption: E,
            options: F,
            tab: G,
            setTab: H
        } = a, I = (0, n.DoesDeviceTypeHaveAvailableCodeGrids)(E.id, F), J = (0, s.DeviceHasAWireAttached)(D.id);
        return (0, f.jsxs)(_D, {
            children: [
                (0, f.jsxs)('div', {
                    className: 'maxWidth',
                    children: [
                        (0, f.jsx)(y.default, {
                            deviceId: D.id
                        }),
                        (0, f.jsx)(r.default, {
                            deviceId: D.id,
                            deviceOption: E
                        }),
                        (0, f.jsxs)(h.default, {
                            direction: 'vertical',
                            size: 4,
                            className: 'maxWidth',
                            style: {
                                marginTop: 16
                            },
                            children: [
                                (0, f.jsx)(i.default, {
                                    icon: 'fas fa-cog',
                                    name: 'Options',
                                    selected: G === q.DeviceEditingHomeTab.options,
                                    onSelect: () => {
                                        H(q.DeviceEditingHomeTab.options);
                                    }
                                }),
                                I ? (0, f.jsx)(i.default, {
                                    icon: 'fas fa-cubes',
                                    name: (0, o.CapitalizeFirstLetter)(p.default.grid.plural),
                                    selected: G === q.DeviceEditingHomeTab.codeGrids,
                                    onSelect: () => {
                                        H(q.DeviceEditingHomeTab.codeGrids);
                                    }
                                }) : null,
                                J ? (0, f.jsx)(i.default, {
                                    icon: 'fas fa-plug',
                                    name: (0, o.CapitalizeFirstLetter)(t.default.wire.plural),
                                    selected: G === q.DeviceEditingHomeTab.wires,
                                    onSelect: () => {
                                        H(q.DeviceEditingHomeTab.wires);
                                    }
                                }) : null
                            ]
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: (0, u.DoesEditedDeviceSupportVisualEditing)() && !(0, v.IsVisualEditingActive)() && (0, A.default)() ? (0, f.jsx)(g.default, {
                        size: 'large',
                        type: 'primary',
                        onClick: a => {
                            (0, x.default)(a), (0, z.playClickSound)(), (0, w.SetVisualEditingData)();
                        },
                        children: 'Change Size'
                    }) : null
                })
            ]
        });
    });
    const _D = (0, j.default)(k.motion.div).attrs({
        className: 'flex-column between maxWidth',
        transition: {
            duration: l.default.enterExit.duration,
            ease: l.default.enterExit.ease
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
    })(B || (B = (a => a)`
  padding: 25px;
`));
}), c.register('D1Dez', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('HOIhZ'),
        j = c('t52Ep'),
        k = c('22RS1'),
        l = c('u5JEh1'),
        m = c('y1oBc');
    let n, o, p, q = a => a;
    var _r = a => {
        const {
            selected: s,
            name: t,
            icon: u,
            onSelect: v
        } = a;
        return (0, f.jsxs)(_s, {
            onClick: a => {
                (0, l.default)(a), (0, m.playClickSound)(), v();
            },
            children: [
                (0, f.jsx)(_t, {
                    selected: s,
                    children: (0, f.jsx)(j.default, {
                        name: u
                    })
                }),
                (0, f.jsx)(_u, {
                    children: (0, f.jsx)(k.default.Title, {
                        level: 4,
                        children: t
                    })
                })
            ]
        });
    };
    const _s = (0, g.default)(h.VerticallyCentered)(n || (n = q`
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
        _t = (0, g.default)(h.Centered)(o || (o = q`
  height: 36px;
  width: 36px;
  border: 2px solid ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  transition: background 0.2s ease;
`), i.default.White, a => a.selected ? '#269900' : 'rgba(0,0,0,0.2)'),
        _u = g.default.div(p || (p = q`
  margin-left: 14px;
`));
}), c.register('u5JEh1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        null == a || a.stopPropagation();
    };
}), c.register('okbm4', function(d, e) {
    a(d.exports, 'AvailableCodeGridsForDeviceType', function() {
        return _l;
    }), a(d.exports, 'DoesDeviceTypeHaveAvailableCodeGrids', function() {
        return _p;
    });
    var f = c('KjmWt'),
        g = c('fI6of'),
        h = c('/8pzB'),
        i = c('2O753'),
        j = c('fQ/Z/'),
        k = c('PlfjJ');
    const _l = (a, d) => {
            var m, n;
            const o = g.default.worldOptions.deviceOptions.find(d => d.id === a);
            if (!o)
                return [];
            if (!(0, j.CanAddDeviceType)(a, d))
                return [];
            if (!(0, i.CanAddCodeGrids)())
                return [];
            let _p = [];
            const {
                codeGridSchema: q
            } = o;
            return q.allowChannelGrids && (0, k.IsRoleLevelBetween)(null == q || null === (m = q.channelGridsRoleLevel) || void 0 === m ? void 0 : m.min, null == q || null === (n = q.channelGridsRoleLevel) || void 0 === n ? void 0 : n.max) && _p.push({
                type: f.default.broadcastMessage,
                name: 'When receiving on channel...'
            }), q.triggers.forEach(a => {
                (0, h.CanAddCodeGrid)(o.id, a.type) && _p.push({
                    type: a.type,
                    name: a.name
                });
            }), _p;
        },
        m = (a, d) => !!_l(a, d).length;
}), c.register('/8pzB', function(d, e) {
    a(d.exports, 'CanAddCodeGrid', function() {
        return _h;
    });
    var f = c('5P0VZ'),
        g = c('PlfjJ');
    const _h = (a, d) => {
        const i = (0, f.FetchDeviceOptionById)(a);
        if (!i)
            return !1;
        const j = i.codeGridSchema.triggers.find(a => a.type === d);
        if (!j)
            return !1;
        const k = j.minimumRoleLevel,
            l = j.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(k, l);
    };
}), c.register('2O753', function(d, e) {
    a(d.exports, 'CanAddCodeGrids', function() {
        return _h;
    });
    var f = c('biYoF'),
        g = c('PlfjJ');
    const _h = () => {
        const i = f.RoleLevelPermissions.codeGrids.minimumRoleLevel,
            j = f.RoleLevelPermissions.codeGrids.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(i, j);
    };
}), c.register('IlHF0', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('m5VND'),
        i = c('AAbjw'),
        j = c('fI6of'),
        k = c('22RS1'),
        l = c('quE27'),
        m = c('wfPQ8');
    var _n = a => {
        const {
            deviceId: o,
            deviceOption: p
        } = a, [q, r] = g.useState((0, h.GetRemovingDeviceTotalMemoryCost)({
            deviceId: o
        }));
        return g.useEffect(() => (0, i.ReactionToMultipleProps)([
            () => {
                var s;
                return null === (s = j.default.world.devices.codeGrids.get(o)) || void 0 === s ? void 0 : s.items.size;
            },
            () => j.default.memorySystem.counters.devices.get(p.id)
        ], () => {
            r((0, h.GetRemovingDeviceTotalMemoryCost)({
                deviceId: o
            }));
        }, {
            fireImmediately: !0
        }), [o]), (0, f.jsxs)(k.default.Text, {
            italic: !0,
            children: [
                (0, l.numberWithCommas)(q),
                ' ',
                m.MemoryName
            ]
        });
    };
}), c.register('AAbjw', function(d, e) {
    a(d.exports, 'ReactionToMultipleProps', function() {
        return _g;
    });
    var f = c('JkQCT');
    const _g = (a, d, c) => {
        const h = [];
        return a.forEach(a => {
            const i = (0, f.reaction)(a, d, c);
            h.push(i);
        }), () => {
            h.forEach(a => {
                a();
            });
        };
    };
}), c.register('Ax/Fw', function(d, e) {
    a(d.exports, 'WiresStartingFromDevice', function() {
        return _g;
    }), a(d.exports, 'WiresEndingAtDevice', function() {
        return _h;
    }), a(d.exports, 'DeviceHasAWireAttached', function() {
        return _i;
    });
    var f = c('fI6of');
    const _g = a => Array.from(f.default.world.wires.wires.keys()).filter(d => d.startsWith(a)).map(a => f.default.world.wires.wires.get(a)),
        _h = a => Array.from(f.default.world.wires.wires.keys()).filter(d => d.endsWith(a)).map(a => f.default.world.wires.wires.get(a)),
        _i = a => !(!_g(a).length && !_h(a).length);
}), c.register('gp8Qp0', function(d, e) {
    a(d.exports, 'default', function() {
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
}), c.register('xuwpw', function(d, e) {
    a(d.exports, 'DoesEditedDeviceSupportVisualEditing', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('heTaO');
    const _h = () => {
        var i;
        const j = (0, g.default)().worldManager.devices.getDeviceById(null !== (i = f.default.me.editing.device.currentlyEditedDevice.id) && void 0 !== i ? i : '');
        return !!j && j.visualEditing.uses();
    };
}), c.register('VjCBm', function(d, e) {
    a(d.exports, 'SetVisualEditingData', function() {
        return _j;
    });
    var f = c('hemXM'),
        g = c('fI6of'),
        h = c('2LtPo'),
        i = c('EzUqb');
    const _j = () => {
        const k = (0, i.FetchCurrentlyEditedDevice)();
        if (!k)
            return;
        k.parts.forceHide(), k.colliders.hideDebug(), k.shadows.hide(), k.onHide && k.onHide(), g.default.me.editing.device.visualEditing = {
            active: !0,
            instruction: '',
            keyboardHelpers: [],
            cursor: 'default',
            id: k.id
        };
        const l = k.layers.isOnNaturalDepth() ? void 0 : k.layers.getDepth();
        (0, h.default)({
            id: f.VisualEditingConstants.previewId,
            deviceOption: k.deviceOption,
            isPreview: !0,
            options: {
                ...k.options
            },
            placedByClient: !0,
            state: {
                ...k.deviceOption.defaultState
            },
            x: k.x,
            y: k.y,
            depth: l,
            name: k.name
        });
    };
}), c.register('0ylKA', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('aevdF'),
        h = c('AE7vR'),
        i = c('Dn89R'),
        j = c('22RS1'),
        k = c('O0Kav'),
        l = c('HOIhZ'),
        m = c('+FJvw1'),
        n = c('UkybP'),
        o = c('quE27'),
        p = c('u5JEh1'),
        q = c('9N6Bn'),
        r = c('6jmvl'),
        s = c('heTaO'),
        t = c('AhL/f0');
    var _u = (0, r.observer)(a => {
        const [v, w, x] = (0, o.useBoolean)(!1), [y, z] = k.useState(''), A = k.useRef(null);
        k.useEffect(() => {
            var B;
            v && (z(''), null == A || null === (B = A.current) || void 0 === B || B.focus());
        }, [v]);
        const B = () => {
                const C = null == y ? void 0 : y.trim(),
                    D = (0, s.default)().worldManager.devices.getDeviceById(a.deviceId);
                D && ((0, t.default)({
                    depth: D.layers.getOptionsDepth(),
                    layerId: D.layers.getOptionsLayer(),
                    name: C,
                    deviceOption: D.deviceOption,
                    id: D.id,
                    isPreview: !1,
                    options: D.options,
                    placedByClient: !1,
                    state: D.deviceOption.defaultState,
                    x: D.x,
                    y: D.y
                }), x());
            },
            C = (0, q.default)();
        return (0, f.jsx)(n.default, {
            className: 'maxWidth',
            children: (0, f.jsxs)('div', {
                className: 'flex',
                onClick: p.default,
                children: [
                    (0, f.jsx)(i.default, {
                        title: C ? 'Rename' : void 0,
                        placement: 'right',
                        children: (0, f.jsx)(j.default.Title, {
                            level: 2,
                            style: {
                                color: l.default.White,
                                marginBottom: 2,
                                cursor: C ? 'pointer' : 'auto'
                            },
                            onClick: C ? w : void 0,
                            children: (0, m.FetchDeviceName)(a.deviceId)
                        })
                    }),
                    (0, f.jsxs)(h.default, {
                        open: v && C,
                        onCancel: x,
                        onOk: B,
                        children: [
                            (0, f.jsx)(j.default.Title, {
                                level: 5,
                                children: 'Change name'
                            }),
                            (0, f.jsx)(g.default, {
                                ref: A,
                                maxLength: 64,
                                style: {
                                    marginTop: 10
                                },
                                placeholder: 'New name...',
                                value: y,
                                onChange: a => {
                                    z(a.target.value);
                                },
                                onPressEnter: B
                            })
                        ]
                    })
                ]
            })
        });
    });
}), c.register('+FJvw1', function(d, e) {
    a(d.exports, 'FetchDeviceName', function() {
        return _i;
    });
    var f = c('OFuf70'),
        g = c('ZMrtj'),
        h = c('fI6of');
    const _i = a => {
        const j = h.default.world.devices.devices.get(a);
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
}), c.register('AhL/f0', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('heTaO'),
        g = c('2LtPo'),
        h = c('llkVK'),
        i = c('5u9xs');
    var _j = a => {
        const k = (0, f.default)().worldManager.devices.getDeviceById(a.id);
        if (!k)
            return;
        const l = (0, i.default)(a.id);
        if (!l)
            return;
        const m = a.hooks || l.hooks;
        (0, g.default)({
            ...a,
            hooks: m,
            placeInstantly: !0,
            onPlace: l => {
                l && (0, h.default)({
                    id: k.id,
                    deviceTypeId: k.deviceOption.id,
                    options: JSON.stringify(a.options),
                    x: a.x,
                    y: a.y,
                    depth: l.layers.getOptionsDepth(),
                    layerId: l.layers.getOptionsLayer(),
                    name: a.name,
                    hooks: m
                });
            }
        });
    };
}), c.register('S0D4d', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('9aZ6t'),
        i = c('g1XUS'),
        j = c('u5JEh1'),
        k = c('k1jd6'),
        l = c('Kiu7k'),
        m = c('0Jn1k'),
        n = c('31ack'),
        o = c('V/q8i');
    let p, q, r = a => a;
    var _s = a => (0, f.jsxs)(_t, {
        children: [
            (0, f.jsx)(_u, {
                onClick: j.default,
                children: a.tab === l.DeviceEditingHomeTab.options ? (0, f.jsx)(k.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    position: a.position,
                    options: a.options,
                    hooks: a.hooks
                }) : a.tab === l.DeviceEditingHomeTab.codeGrids ? (0, f.jsx)(m.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    options: a.options
                }) : (0, f.jsx)(n.default, {
                    deviceId: a.device.id
                })
            }),
            (0, f.jsx)(o.default, {
                padding: 25
            })
        ]
    });
    const _t = g.default.div.attrs({
            className: 'maxAll flex'
        })(p || (p = r`
  position: relative;
  justify-content: flex-end;
`)),
        _u = (0, g.default)(h.motion.div).attrs({
            className: 'maxAll scroll-y medium-shadow',
            transition: {
                duration: i.default.enterExit.duration,
                ease: i.default.enterExit.ease
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
        })(q || (q = r`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  width: 490px;
  padding: 25px;
  padding-top: 68px;
  position: relative;
`));
}), c.register('0Jn1k', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('6jmvl'),
        i = c('K/2xB'),
        j = c('okbm4'),
        k = c('dopR9'),
        l = c('cDkCv'),
        m = c('E2AMI26'),
        n = c('fCC7B'),
        o = c('MDDB0'),
        p = c('quE27');
    let q;
    var _r = (0, h.observer)(a => {
        var s;
        const {
            world: {
                devices: {
                    codeGrids: t
                }
            }
        } = (0, i.default)(), u = a.device.id, [v, w, x] = (0, p.useBoolean)(!1), y = null === (s = t.get(u)) || void 0 === s ? void 0 : s.items, z = (0, j.AvailableCodeGridsForDeviceType)(a.deviceOption.id, a.options), A = y && y.size >= 1, B = z.length >= 1, C = (0, n.default)();
        return A || C ? (0, f.jsx)(_s, {
            children: (0, f.jsxs)(m.default, {
                direction: 'vertical',
                size: 40,
                className: 'maxWidth',
                children: [
                    A ? (0, f.jsx)(l.default, {
                        deviceId: u,
                        codeGrids: y,
                        isCreatingNewGrid: v,
                        setIsNotCreatingNewGrid: x
                    }) : null,
                    B && C ? (0, f.jsx)(k.default, {
                        codeGridOptions: z,
                        deviceId: u,
                        setIsCreatingNewGrid: w
                    }) : null
                ]
            })
        }) : (0, f.jsx)(o.default, {});
    });
    const _s = g.default.div(q || (q = (a => a)``));
}), c.register('dopR9', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('ekajQ'),
        i = c('+F4Nk'),
        j = c('u4s09'),
        k = c('MgONH'),
        l = c('qMSe6'),
        m = c('/kLkG0'),
        n = c('AE7vR'),
        o = c('22RS1'),
        p = c('DXQir'),
        q = c('HOIhZ'),
        r = c('Afwq2'),
        s = c('K/2xB'),
        t = c('quE27'),
        u = c('AAbjw'),
        v = c('fI6of'),
        w = c('Iz/dA'),
        x = c('dRyB/'),
        y = c('KjmWt'),
        z = c('+pvlo'),
        A = c('YqIsD'),
        B = c('y1oBc');
    let C, D, E = a => a;
    var _F = a => {
        const {
            memorySystem: G
        } = (0, s.default)(), [H, I] = g.useState((0, w.CanAddCodeGrid)(a.deviceId)), [J, K, L] = (0, t.useBoolean)(!1), [M, N] = g.useState(''), O = g.useRef(null);
        g.useEffect(() => (0, u.ReactionToMultipleProps)([
            () => v.default.memorySystem.counters.codeGrids,
            () => v.default.memorySystem.usedMemoryCost
        ], () => {
            I((0, w.CanAddCodeGrid)(a.deviceId));
        }, {
            fireImmediately: !0
        }), [a.deviceId]), g.useEffect(() => {
            var P;
            null == O || null === (P = O.current) || void 0 === P || P.focus();
        }, [J]);
        const P = g.useMemo(() => (0, z.default)(A.default.channel), []),
            Q = (0, x.GetCodeGridMessage)({
                reason: H.reason
            });
        return (0, f.jsxs)(_G, {
            children: [
                (0, f.jsxs)(_H, {
                    children: [
                        (0, f.jsxs)(o.default.Title, {
                            level: 4,
                            style: {
                                color: q.default.White
                            },
                            children: [
                                'Create a new ',
                                p.default.grid.singular
                            ]
                        }),
                        (0, f.jsxs)(o.default.Text, {
                            italic: !0,
                            children: [
                                '+',
                                (0, t.numberWithCommas)(G.costs.codeGrid),
                                ' memory'
                            ]
                        })
                    ]
                }),
                H.canAdd ? (0, f.jsx)(h.CodeGridList, {
                    style: {
                        marginTop: 20
                    },
                    children: a.codeGridOptions.map(G => (0, f.jsx)(i.default, {
                        label: G.name,
                        onClick: () => {
                            (0, B.playClickSound)(), G.type !== y.default.broadcastMessage ? (a.setIsCreatingNewGrid(), (0, r.default)({
                                deviceId: a.deviceId,
                                triggerType: G.type,
                                triggerValue: ''
                            })) : K();
                        }
                    }, G.type + '-option'))
                }) : (0, f.jsx)(l.default, {
                    type: 'error',
                    showIcon: !0,
                    message: Q,
                    style: {
                        marginTop: 15
                    }
                }),
                (0, f.jsxs)(n.default, {
                    open: J,
                    onCancel: L,
                    onOk: () => {
                        const R = null == M ? void 0 : M.trim();
                        R && R.length && (a.setIsCreatingNewGrid(), (0, r.default)({
                            deviceId: a.deviceId,
                            triggerType: y.default.broadcastMessage,
                            triggerValue: M
                        }), L(), N(''));
                    },
                    children: [
                        (0, f.jsx)(o.default.Title, {
                            level: 5,
                            children: 'Channel name'
                        }),
                        (0, f.jsxs)(o.default.Text, {
                            children: [
                                'The ',
                                p.default.grid.singular,
                                ' will run when receiving a message from this channel'
                            ]
                        }),
                        (0, f.jsx)(m.default, {
                            ref: O,
                            value: M,
                            className: 'maxWidth',
                            placeholder: 'Channel name...',
                            onChange: N,
                            maxLength: 512,
                            style: {
                                marginTop: 10,
                                marginBottom: 3
                            },
                            autoFocus: !0,
                            options: P.map(a => ({
                                value: a
                            })),
                            filterOption: (a, G) => -1 !== G.value.toUpperCase().indexOf(a.toUpperCase())
                        })
                    ]
                })
            ]
        });
    };
    const _G = j.default.div.attrs({
            className: 'maxWidth'
        })(C || (C = E``)),
        _H = (0, j.default)(k.VerticallyCentered).attrs({
            className: 'maxWidth between'
        })(D || (D = E``));
}), c.register('ekajQ', function(d, e) {
    a(d.exports, 'CodeGridList', function() {
        return _g;
    });
    let f;
    const _g = c('u4s09').default.div.attrs({
        className: 'maxWidth'
    })(f || (f = (a => a)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), c.register('+F4Nk', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('MgONH');
    let j;
    var _k = a => (0, f.jsxs)(_l, {
        onClick: a.onClick,
        children: [
            a.children,
            (0, f.jsx)(g.default.Text, {
                children: a.label
            })
        ]
    });
    const _l = (0, h.default)(i.Centered).attrs({
        className: 'maxWidth'
    })(j || (j = (a => a)`
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
}), c.register('/kLkG0', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('Kpy/B'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('u8Dt8'),
        l = c('e5xHg25'),
        m = c('WQymh');
    const {
        Option: n
    } = k.default;

    function o(p) {
        return p && p.type && (p.type.isSelectOption || p.type.isSelectOptGroup);
    }
    const p = (a, c) => {
            const {
                prefixCls: q,
                className: r,
                popupClassName: s,
                dropdownClassName: t,
                children: u,
                dataSource: v
            } = a, _w = (0, g.default)(u);
            let x;
            1 === _w.length && (0, m.isValidElement)(_w[0]) && !o(_w[0]) && ([y] = _w);
            const z = y ? () => y : void 0;
            let A;
            A = _w.length && o(_w[0]) ? u : v ? v.map(a => {
                if ((0, m.isValidElement)(a))
                    return a;
                switch (typeof a) {
                    case 'string':
                        return i.createElement(n, {
                            key: a,
                            value: a
                        }, a);
                    case 'object': {
                        const {
                            value: B
                        } = a;
                        return i.createElement(n, {
                            key: B,
                            value: B
                        }, a.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: B
            } = i.useContext(j.ConfigContext), C = B('select', q);
            return i.createElement(k.default, Object.assign({
                ref: c
            }, (0, h.default)(a, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: C,
                popupClassName: s || t,
                className: b(f)(`${ C }-auto-complete`, r),
                mode: k.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: z
            }), A);
        },
        q = i.forwardRef(p),
        r = (0, l.default)(q);
    q.Option = n, q._InternalPanelDoNotUseOrYouWillBeFired = r;
    var s = q;
}), c.register('Afwq2', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = a => {
        (0, g.default)(f.default.createCodeGrid, {
            deviceId: a.deviceId,
            triggerType: a.triggerType,
            triggerValue: a.triggerValue
        });
    };
}), c.register('Iz/dA', function(d, e) {
    a(d.exports, 'CanAddCodeGrid', function() {
        return _i;
    });
    var f = c('fI6of'),
        g = c('CbTFk'),
        h = c('YarRX');
    const _i = a => {
        var j;
        const k = f.default.memorySystem.costs.codeGrid;
        if (!(0, h.CanUseMoreMemory)({
                memory: k
            }))
            return {
                canAdd: !1,
                reason: g.OutOfResourcesReason.noMemory
            };
        if (f.default.memorySystem.counters.codeGrids >= f.default.memorySystem.limits.codeGrids)
            return {
                canAdd: !1,
                reason: g.OutOfResourcesReason.limit
            };
        var l;
        return (null !== (l = null === (j = f.default.world.devices.codeGrids.get(a)) || void 0 === j ? void 0 : j.items.size) && void 0 !== l ? l : 0) >= f.default.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: g.OutOfResourcesReason.codeGridPerDeviceLimit
        } : {
            canAdd: !0
        };
    };
}), c.register('dRyB/', function(d, e) {
    a(d.exports, 'GetCodeGridMessage', function() {
        return _k;
    });
    var f = c('fI6of'),
        g = c('CbTFk'),
        h = c('DXQir'),
        i = c('wfPQ8'),
        j = c('quE27');
    const _k = a => {
        if (a.reason === g.OutOfResourcesReason.codeGridPerDeviceLimit)
            return `Cannot create more ${ h.default.grid.plural }. Reached limit of ${ f.default.memorySystem.limits.codeGridsPerDevice } ${ h.default.grid.plural } per device.`;
        if (a.reason === g.OutOfResourcesReason.limit)
            return `Cannot create more ${ h.default.grid.plural }. Reached limit of ${ f.default.memorySystem.limits.codeGrids } ${ h.default.grid.plural } on map.`;
        const l = f.default.memorySystem.costs.codeGrid;
        return a.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ i.MemoryName } to create ${ h.default.grid.singular }. Requires ${ (0, j.numberWithCommas)(l) } available ${ i.MemoryName }.` : '';
    };
}), c.register('cDkCv', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('AE7vR'),
        l = c('22RS1'),
        m = c('fCC7B'),
        n = c('DXQir'),
        o = c('ekajQ'),
        p = c('+F4Nk'),
        q = c('6jmvl'),
        r = c('eAMDW'),
        s = c('HOIhZ'),
        t = c('fI6of'),
        u = c('uQzYS'),
        v = c('Y6i538'),
        w = c('1ZCzi'),
        x = c('u5JEh1'),
        y = c('E6YpH0'),
        z = c('oguo5'),
        A = c('9zaF+'),
        B = c('y1oBc');
    let C, D, E = a => a;
    var _F = (0, q.observer)(a => {
        const {
            deviceId: G
        } = a, H = Array.from(a.codeGrids), I = (0, m.default)();
        return g.useEffect(() => {
            a.isCreatingNewGrid && (a.setIsNotCreatingNewGrid(), H.length >= 1 && _G((0, A.last)(H)[0]));
        }, [H.length]), (0, f.jsxs)(_H, {
            children: [
                (0, f.jsxs)(l.default.Title, {
                    style: {
                        color: s.default.White
                    },
                    level: 4,
                    children: [
                        I ? 'Edit' : 'View',
                        ' an existing',
                        ' ',
                        n.default.grid.singular
                    ]
                }),
                (0, f.jsx)(o.CodeGridList, {
                    style: {
                        marginTop: 20
                    },
                    children: H.map(a => (0, f.jsx)(p.default, {
                        label: (0, r.default)(G, a[0]),
                        onClick: () => {
                            (0, B.playClickSound)(), _G(a[0]);
                        },
                        children: I ? (0, f.jsx)(_I, {
                            children: (0, f.jsx)(j.default, {
                                menu: {
                                    items: [{
                                        key: `remove-grid-${ a[0] }`,
                                        label: `Delete ${ n.default.grid.singular }`,
                                        icon: (0, f.jsx)(v.default, {}),
                                        onClick: (0, y.default)(() => {
                                            k.default.confirm({
                                                title: `Are you sure you want to delete this ${ n.default.grid.singular }?`,
                                                onOk: () => {
                                                    (0, z.default)({
                                                        deviceId: G,
                                                        gridId: a[0]
                                                    });
                                                },
                                                okText: 'Yes',
                                                cancelText: 'No'
                                            });
                                        })
                                    }]
                                },
                                children: (0, f.jsx)(i.default, {
                                    type: 'text',
                                    size: 'small',
                                    icon: (0, f.jsx)(w.default, {}),
                                    onClick: x.default
                                })
                            })
                        }) : null
                    }, a[0] + '-grid'))
                })
            ]
        });
    });
    const _G = a => {
            t.default.me.editing.device.currentlyEditedGridId = a, t.default.me.editing.device.screen = u.EditingDeviceScreen.grid;
        },
        _H = h.default.div.attrs({
            className: 'maxWidth'
        })(C || (C = E``)),
        _I = h.default.div(D || (D = E`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`));
}), c.register('fCC7B', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('fI6of'),
        g = c('5Fjxs'),
        h = c('XwUPb'),
        i = c('hycyg'),
        j = c('UkCpC');
    var _k = a => {
        var l, m;
        if (!(0, i.isSavedVersion)())
            return !1;
        if ((0, h.isAssignment)())
            return !1;
        if (!(0, j.InPreGamePhase)())
            return !1;
        const n = a || (0, g.default)();
        return (null === (l = f.default.characters.characters.get(n)) || void 0 === l || null === (m = l.permissions) || void 0 === m ? void 0 : m.manageCodeGrids) || !1;
    };
}), c.register('eAMDW', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('KjmWt'),
        h = c('fI6of'),
        i = c('5u9xs'),
        j = c('Eh2Wh');
    var _k = (a, d) => ((a, d) => {
        var l, m;
        const n = (0, i.default)(a);
        if (!n)
            return null;
        const o = null === (l = h.default.world.devices.codeGrids.get(a)) || void 0 === l || null === (m = l.items) || void 0 === m ? void 0 : m.get(d);
        if (!o)
            return null;
        const p = o.triggerType;
        if (p === g.default.broadcastMessage)
            return (0, f.jsxs)('span', {
                children: [
                    'When receiving on channel',
                    ' ',
                    (0, f.jsx)('span', {
                        style: {
                            fontWeight: j.FontWeights.Bold,
                            color: '#57f784'
                        },
                        children: o.triggerValue || 'channel'
                    })
                ]
            });
        const q = n.deviceOption.codeGridSchema.triggers.find(a => a.type === p);
        return q ? q.name : null;
    })(a, d) || 'Block';
}), c.register('Y6i538', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('goKxN8'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('goKxN8', function(d, e) {
    a(d.exports, 'default', function() {
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
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('E6YpH0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => d => {
        d.domEvent.stopPropagation(), a && a();
    };
}), c.register('oguo5', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = a => {
        (0, g.default)(f.default.deleteCodeGrid, {
            deviceId: a.deviceId,
            gridId: a.gridId
        });
    };
}), c.register('MDDB0', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('DXQir'),
        i = c('gp8Qp0'),
        j = c('MgONH'),
        k = c('t52Ep');
    var _l = () => (0, f.jsxs)(j.CenteredColumn, {
        className: 'maxAll',
        children: [
            (0, f.jsx)('div', {
                style: {
                    fontSize: 54,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 5
                },
                children: (0, f.jsx)(k.default, {
                    name: 'fal fa-cubes'
                })
            }),
            (0, f.jsxs)(g.default.Text, {
                children: [
                    'No ',
                    h.default.grid.plural,
                    ' have been created for this',
                    ' ',
                    i.default.device.singular,
                    '.'
                ]
            })
        ]
    });
}), c.register('31ack', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('o+m3g'),
        i = c('6jmvl'),
        j = c('Ax/Fw'),
        k = c('gp8Qp0'),
        l = c('E2AMI26'),
        m = c('22RS1');
    let n;
    var _o = (0, i.observer)(a => (0, j.DeviceHasAWireAttached)(a.deviceId) ? (0, f.jsx)(_p, {
        children: (0, f.jsxs)(l.default, {
            direction: 'vertical',
            size: 25,
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    direction: 'in',
                    deviceId: a.deviceId
                }),
                (0, f.jsx)(h.default, {
                    direction: 'out',
                    deviceId: a.deviceId
                })
            ]
        })
    }) : (0, f.jsxs)(m.default.Text, {
        children: [
            'No ',
            k.default.wire.plural,
            ' are connected to this',
            ' ',
            k.default.device.singular,
            '.'
        ]
    }));
    const _p = g.default.div(n || (n = (a => a)``));
}), c.register('o+m3g', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('gp8Qp0'),
        i = c('Q6LQJ'),
        j = c('E2AMI26'),
        k = c('22RS1'),
        l = c('HOIhZ'),
        m = c('Ax/Fw'),
        n = c('MfhoK');
    let o;
    var _p = (0, c('6jmvl').observer)(a => {
        const q = 'in' === a.direction ? (0, m.WiresEndingAtDevice)(a.deviceId) : (0, m.WiresStartingFromDevice)(a.deviceId);
        return q.length ? (0, f.jsxs)(_q, {
            children: [
                (0, f.jsxs)(k.default.Title, {
                    level: 4,
                    style: {
                        color: l.default.White
                    },
                    children: [
                        (0, i.CapitalizeFirstLetter)(h.default.wire.plural),
                        ' ',
                        a.direction
                    ]
                }),
                (0, f.jsx)(j.default, {
                    direction: 'vertical',
                    size: 12,
                    style: {
                        marginTop: 15
                    },
                    className: 'maxWidth',
                    children: q.map(q => (0, f.jsx)(n.default, {
                        wire: q,
                        deviceId: a.deviceId
                    }, q.id))
                })
            ]
        }) : null;
    });
    const _q = g.default.div(o || (o = (a => a)``));
}), c.register('MfhoK', function(d, e) {
    a(d.exports, 'default', function() {
        return _E;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('MgONH'),
        j = c('t52Ep'),
        k = c('22RS1'),
        l = c('Eh2Wh'),
        m = c('+FJvw1'),
        n = c('K2TwF'),
        o = c('OFuf70'),
        p = c('6jmvl'),
        q = c('K/2xB'),
        r = c('LihP5'),
        s = c('SxihY');
    let t, u, v, w, x, y, z, A, B, C, D = a => a;
    var _E = (0, p.observer)(a => {
        const {
            wire: F,
            deviceId: G
        } = a, {
            me: {
                editing: H
            }
        } = (0, q.default)(), I = F.startDevice === G, J = !I, K = (0, n.FetchDeviceById)(F.startDevice), L = (0, n.FetchDeviceById)(F.endDevice), M = (0, m.FetchDeviceName)(F.startDevice), N = (0, m.FetchDeviceName)(F.endDevice), O = g.useMemo(() => {
            var P, Q, R, S;
            if ((null == K ? void 0 : K.deviceOption.id) === o.default.wireRepeater)
                return 'Pulse received';
            const T = null == K || null === (P = K.deviceOption) || void 0 === P || null === (Q = P.wireConfig) || void 0 === Q || null === (R = Q.out) || void 0 === R || null === (S = R.connections) || void 0 === S ? void 0 : S.find(P => P.id === F.startConnection);
            return T ? T.name : 'No event';
        }, [F.startConnection]), P = g.useMemo(() => {
            var Q, R, S, T, U;
            if ((null == L || null === (Q = L.deviceOption) || void 0 === Q ? void 0 : Q.id) === o.default.wireRepeater)
                return 'Relay pulse';
            const V = null == L || null === (R = L.deviceOption) || void 0 === R || null === (S = R.wireConfig) || void 0 === S || null === (T = S.in) || void 0 === T || null === (U = T.connections) || void 0 === U ? void 0 : U.find(Q => Q.id === F.endConnection);
            return V ? V.name : 'No action';
        }, [F.endConnection]);
        return (0, f.jsxs)(_F, {
            onClick: () => {
                H.wire.currentlyEditedWireId = F.id, (0, r.default)(s.default.editingWire);
            },
            children: [
                (0, f.jsxs)(_G, {
                    children: [
                        (0, f.jsx)(_H, {
                            selected: I
                        }),
                        (0, f.jsxs)(_I, {
                            children: [
                                (0, f.jsx)(_J, {}),
                                (0, f.jsx)(_K, {
                                    children: (0, f.jsx)(j.default, {
                                        name: 'fas fa-caret-right'
                                    })
                                })
                            ]
                        }),
                        (0, f.jsx)(_H, {
                            selected: J
                        })
                    ]
                }),
                (0, f.jsxs)(_L, {
                    children: [
                        (0, f.jsxs)(_N, {
                            children: [
                                J ? (0, f.jsx)(_P, {
                                    children: M
                                }) : null,
                                (0, f.jsx)('div', {
                                    children: (0, f.jsx)(k.default.Text, {
                                        children: O
                                    })
                                })
                            ]
                        }),
                        (0, f.jsxs)(_O, {
                            children: [
                                I ? (0, f.jsx)(_P, {
                                    children: N
                                }) : null,
                                (0, f.jsx)(k.default.Text, {
                                    children: P
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const _F = h.default.div(t || (t = D`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`)),
        _G = (0, h.default)(i.VerticallyCentered).attrs({
            className: 'maxWidth'
        })(u || (u = D``)),
        _H = h.default.div(v || (v = D`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${ 0 };
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`), a => a.selected ? '#269900' : 'rgba(255,255,255,0.14)'),
        _I = (0, h.default)(i.VerticallyCentered)(w || (w = D`
  flex: 1;
  padding: 0px 20px;
`)),
        _J = h.default.div(x || (x = D`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`)),
        _K = h.default.div(y || (y = D`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`)),
        _L = h.default.div.attrs({
            className: 'maxWidth between flex'
        })(z || (z = D`
  align-items: flex-start;
  margin-top: 10px;
`)),
        M = h.default.div(A || (A = D`
  max-width: 45%;
  line-height: 1;
`)),
        _N = (0, h.default)(M)(B || (B = D``)),
        _O = (0, h.default)(M)(C || (C = D`
  text-align: right;
`)),
        _P = a => (0, f.jsx)(k.default.Title, {
            level: 5,
            style: {
                fontWeight: l.FontWeights.Bold
            },
            children: a.children
        });
}), c.register('ZqaCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('heTaO'),
        h = c('K/2xB');
    var _i = () => {
        const {
            me: {
                editing: {
                    device: {
                        currentlyEditedDevice: j
                    }
                }
            },
            worldOptions: {
                deviceOptions: k
            }
        } = (0, h.default)();
        return {
            device: f.useMemo(() => (0, g.default)().worldManager.devices.getDeviceById(j.id), [j.id]),
            deviceOption: k.find(k => k.id === j.deviceOptionId)
        };
    };
}), c.register('jEuDs', function(d, e) {
    a(d.exports, 'useTimeout', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('GUAYj');

    function _h(i, j) {
        void 0 === j && (j = 0), (0, g.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var k = (0, f.useState)(!1),
            l = k[0],
            m = k[1],
            n = (0, f.useRef)();

        function o() {
            n.current && n.current(), _p();
        }
        (0, f.useEffect)(function() {
            n.current = i;
        }, [i]);
        var _p = (0, f.useCallback)(function() {
                m(!1);
            }, []),
            q = (0, f.useCallback)(function() {
                m(!0);
            }, []);
        return (0, f.useEffect)(function() {
            if (l) {
                if ('undefined' != typeof window) {
                    var r = window.setTimeout(o, j);
                    return function() {
                        window.clearTimeout(r);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            l,
            j
        ]), {
            clear: _p,
            isActive: l,
            start: q,
            stop: _p
        };
    }
}), c.register('GUAYj', function(d, e) {
    a(d.exports, 'useWarningOnMountInDevelopment', function() {
        return _h;
    });
    var f = c('lKjHC'),
        g = c('PsplJ');

    function _h(i) {
        (0, f.useDidMount)(function() {
            (0, g.warning)(!1, i);
        });
    }
}), c.register('PsplJ', function(d, e) {
    a(d.exports, 'warning', function() {
        return _f;
    });
    var _f = function() {};
}), c.register('N5ueH', function(d, e) {
    a(d.exports, 'default', function() {
        return _A;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('UkybP'),
        k = c('K/2xB'),
        l = c('JkQCT'),
        m = c('fI6of'),
        n = c('g5EZH'),
        o = c('lN6Z0'),
        p = c('J8L14'),
        q = c('P1KtI'),
        r = c('Eh2Wh'),
        s = c('ddhGF'),
        t = c('Otile'),
        u = c('u8Fxu'),
        v = c('y1oBc');
    let w, x, y, z = a => a;
    var _A = (0, i.observer)(() => {
        const {
            me: {
                editing: {
                    device: {
                        visualEditing: {
                            instruction: B,
                            keyboardHelpers: C
                        }
                    }
                }
            }
        } = (0, k.default)();
        (0, p.default)(b(s).Input.Keyboard.KeyCodes.ENTER, () => {
            r();
        });
        (0, p.default)(b(s).Input.Keyboard.KeyCodes.ESC, () => {
            r();
        }), (0, u.useWillUnmount)(() => {
            (0, t.ClearVisualEditingData)();
        });
        const [D, E] = g.useState(B), [F, G] = g.useState(JSON.stringify(C));
        g.useEffect(() => {
            const H = (0, l.reaction)(() => B, () => {
                D !== m.default.me.editing.device.visualEditing.instruction && E(m.default.me.editing.device.visualEditing.instruction);
            }, {
                fireImmediately: !0
            });
            return () => {
                H();
            };
        }, [
            B,
            D
        ]), g.useEffect(() => {
            const H = (0, l.reaction)(() => C, () => {
                F !== JSON.stringify(m.default.me.editing.device.visualEditing.keyboardHelpers) && G(JSON.stringify(m.default.me.editing.device.visualEditing.keyboardHelpers));
            }, {
                fireImmediately: !0
            });
            return () => {
                H();
            };
        }, [
            F,
            C
        ]);
        const H = () => {
            (0, n.ConfirmDoneVisualEditing)();
        };
        return (0, f.jsxs)(_B, {
            children: [
                (0, f.jsx)(o.default, {
                    items: JSON.parse(F),
                    visible: !0
                }),
                (0, f.jsxs)(_C, {
                    children: [
                        (0, f.jsx)(j.default, {
                            children: (0, f.jsx)('div', {
                                children: (0, f.jsx)(q.default, {
                                    type: 'primary',
                                    size: 'large',
                                    onClick: () => {
                                        (0, v.playClickSound)(), H();
                                    },
                                    children: 'Done'
                                })
                            })
                        }),
                        (0, f.jsx)(_D, {
                            children: (0, f.jsx)('div', {
                                children: D
                            })
                        })
                    ]
                })
            ]
        });
    });
    const _B = h.default.div.attrs({
            className: 'maxAll flex'
        })(w || (w = z`
  align-items: flex-end;
`)),
        _C = h.default.div.attrs({
            className: 'maxWidth flex'
        })(x || (x = z`
  position: relative;
  padding: 25px;
`)),
        _D = h.default.div.attrs({
            className: 'maxAll flex-center'
        })(y || (y = z`
  position: absolute;
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
  font-size: 22px;
  top: 0px;
  left: 0px;
`), r.Fonts.FugazOne);
}), c.register('g5EZH', function(d, e) {
    a(d.exports, 'ConfirmDoneVisualEditing', function() {
        return _l;
    });
    var f = c('SxihY'),
        g = c('LihP5'),
        h = c('AhL/f0'),
        i = c('EzUqb'),
        j = c('Otile'),
        k = c('GQMbT');
    const _l = () => {
        (0, g.default)(f.default.editingDevice);
        const m = (0, k.FetchVisualEditingPreview)(),
            n = (0, i.FetchCurrentlyEditedDevice)();
        (0, j.ClearVisualEditingData)(), n && m && (0, h.default)({
            deviceOption: n.deviceOption,
            id: n.id,
            x: Math.round(m.x),
            y: Math.round(m.y),
            depth: m.layers.getDepth(),
            layerId: n.layers.getOptionsLayer(),
            name: m.name,
            isPreview: !1,
            options: {
                ...m.options
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        });
    };
}), c.register('YjcsJ', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('cXcnp')).then(() => c('0MyQk'));
}), c.register('OQRaD', function(d, e) {
    a(d.exports, 'default', function() {
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
    a(d.exports, 'default', function() {
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
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
}), c.register('TCaC20', function(d, e) {
    a(d.exports, 'CanAddTerrain', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('PlfjJ');
    const _h = a => {
        var i;
        const j = f.default.worldOptions.terrainOptions.find(i => i.id === a);
        if (!j)
            return !1;
        if (null === (i = j.blockedMapStyles) || void 0 === i ? void 0 : i.length) {
            const k = f.default.session.mapStyle;
            if (j.blockedMapStyles.includes(k))
                return !1;
        }
        const k = j.minimumRoleLevel,
            l = j.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(k, l);
    };
}), c.register('dcTme', function(d, e) {
    a(d.exports, 'GetCurrentMapStyle', function() {
        return _g;
    });
    var f = c('fI6of');
    const _g = () => f.default.session.mapStyle;
});