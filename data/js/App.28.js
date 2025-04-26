function a(a, b, c, F) {
    Object.defineProperty(a, b, {
        get: c,
        set: F,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('6dlZZ', function(b, F) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return B;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('TnPB+'),
        i = c('iAe3o'),
        j = c('EefFJ'),
        k = c('b9Bct'),
        l = c('G3BnF'),
        m = c('lmfrI'),
        n = c('lD8j9'),
        o = c('WD3zy'),
        p = c('9DNGy'),
        q = c('xck3q'),
        r = c('Vlfxs'),
        s = c('am7L5'),
        t = c('6oZo7'),
        u = c('GHmRa'),
        v = c('UnUp5'),
        w = c('SASPs'),
        x = c('BYJd9'),
        y = c('D0n26');
    let z;
    const A = f.lazy(() => c('ndDOe'));
    var B = (0, r.observer)(() => {
        const {
            me: C,
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
            D.devices.get(C.editing.device.currentlyEditedDevice.id) || z();
        }, 25);
        if (f.useEffect(() => {
                const M = (0, v.when)(() => !D.devices.get(C.editing.device.currentlyEditedDevice.id), () => {
                        K();
                    }),
                    N = (0, v.when)(() => !!D.devices.get(C.editing.device.currentlyEditedDevice.id), () => {
                        L();
                    });
                return () => {
                    M(), N();
                };
            }, [C.editing.device.currentlyEditedDevice.id]), !H || !I)
            return null;
        const M = () => {
            (0, h.default)(i.default.none), (0, y.EmitTutorialEvent)({
                event: y.TutorialEventName.CLOSE_DEVICE_OPTIONS,
                device: H
            });
        };
        return J ? (0, e.jsx)(x.default, {}) : (0, e.jsx)(j.default, {
            className: 'maxAll',
            children: (0, e.jsx)(C, {
                onClick: M,
                children: (0, e.jsx)(f.Suspense, {
                    fallback: null,
                    children: C.editing.device.screen === t.EditingDeviceScreen.grid ? (0, e.jsx)(A, {
                        close: () => {
                            C.editing.device.screen = t.EditingDeviceScreen.home;
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
    const C = (0, g.default)(k.motion.div).attrs({
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
    })(z || (z = (a => a)`
  color: ${ 0 };
`), m.default.White);
}), c.register('G3BnF', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        enterExit: {
            duration: 0.22,
            ease: 'easeInOut'
        }
    };
}), c.register('lD8j9', function(p, d) {
    a(p.exports, 'DeviceEditingHomeTab', function() {
        return l;
    }), a(p.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('l0P+P'),
        h = c('1oiu7'),
        i = c('+0Tb/'),
        j = c('kneek');
    let k, l;
    var m;
    (m = l || (l = {})).options = 'options', m.codeGrids = 'codeGrids', m.wires = 'wires';
    var n = a => {
        (0, i.default)(b(j).Input.Keyboard.KeyCodes.ESC, a.close, [a.close]);
        const [o, p] = e.useState(l.options);
        return (0, d.jsxs)(o, {
            children: [
                (0, d.jsx)(g.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    options: a.options,
                    tab: o,
                    setTab: p
                }),
                (0, d.jsx)(h.default, {
                    device: a.device,
                    options: a.options,
                    hooks: a.hooks,
                    position: a.position,
                    deviceOption: a.deviceOption,
                    tab: o
                })
            ]
        });
    };
    const o = f.default.div.attrs({
        className: 'maxAll flex between'
    })(k || (k = (a => a)``));
}), c.register('l0P+P', function(b, D) {
    a(b.exports, 'default', function() {
        return A;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('IsmrL'),
        f = c('5nJMd26'),
        g = c('YbitS'),
        h = c('h99Nu'),
        i = c('b9Bct'),
        j = c('G3BnF'),
        k = c('Vlfxs'),
        l = c('759tG'),
        m = c('RJ/fk'),
        n = c('RhbNx'),
        o = c('lD8j9'),
        p = c('Ymcmt'),
        q = c('9UTUn'),
        r = c('Wgw1x0'),
        s = c('wsUEH'),
        t = c('SASPs'),
        u = c('D4FfZ'),
        v = c('rFtvN1'),
        w = c('rsdPS'),
        x = c('kcx+B'),
        y = c('c8w5r');
    let z;
    var A = (0, k.observer)(a => {
        const {
            device: B,
            deviceOption: C,
            options: D,
            tab: E,
            setTab: F
        } = G, H = (0, l.DoesDeviceTypeHaveAvailableCodeGrids)(C.id, D), I = (0, q.DeviceHasAWireAttached)(B.id);
        return (0, d.jsxs)(B, {
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
                                H ? (0, d.jsx)(g.default, {
                                    icon: 'fas fa-cubes',
                                    name: (0, m.CapitalizeFirstLetter)(n.default.grid.plural),
                                    selected: E === o.DeviceEditingHomeTab.codeGrids,
                                    onSelect: () => {
                                        F(o.DeviceEditingHomeTab.codeGrids);
                                    }
                                }) : null,
                                I ? (0, d.jsx)(g.default, {
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
                        onClick: G => {
                            (0, v.default)(G), (0, x.playClickSound)(), (0, u.SetVisualEditingData)();
                        },
                        children: 'Change Size'
                    }) : null
                })
            ]
        });
    });
    const B = (0, h.default)(i.motion.div).attrs({
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
    })(z || (z = (a => a)`
  padding: 25px;
`));
}), c.register('YbitS', function(b, s) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('S/jX4'),
        h = c('iMnBi'),
        i = c('UzdPH'),
        j = c('rFtvN1'),
        k = c('kcx+B');
    let l, m, n, o = a => a;
    var p = a => {
        const {
            selected: q,
            name: r,
            icon: s,
            onSelect: t
        } = u;
        return (0, d.jsxs)(q, {
            onClick: u => {
                (0, j.default)(u), (0, k.playClickSound)(), t();
            },
            children: [
                (0, d.jsx)(r, {
                    selected: q,
                    children: (0, d.jsx)(h.default, {
                        name: s
                    })
                }),
                (0, d.jsx)(s, {
                    children: (0, d.jsx)(i.default.Title, {
                        level: 4,
                        children: r
                    })
                })
            ]
        });
    };
    const q = (0, e.default)(f.VerticallyCentered)(l || (l = o`
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
        r = (0, e.default)(f.Centered)(m || (m = o`
  height: 36px;
  width: 36px;
  border: 2px solid ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  transition: background 0.2s ease;
`), g.default.White, a => a.selected ? '#269900' : 'rgba(0,0,0,0.2)'),
        s = e.default.div(n || (n = o`
  margin-left: 14px;
`));
}), c.register('rFtvN1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        null == a || a.stopPropagation();
    };
}), c.register('759tG', function(b, l) {
    a(b.exports, 'AvailableCodeGridsForDeviceType', function() {
        return j;
    }), a(b.exports, 'DoesDeviceTypeHaveAvailableCodeGrids', function() {
        return n;
    });
    var d = c('R1+hf'),
        e = c('7Sbqr'),
        f = c('eJTwL'),
        g = c('gCINC'),
        h = c('iqsJ7'),
        i = c('2hh8R');
    const j = (a, b) => {
            var k, l;
            const m = e.default.worldOptions.deviceOptions.find(b => b.id === a);
            if (!m)
                return [];
            if (!(0, h.CanAddDeviceType)(a, b))
                return [];
            if (!(0, g.CanAddCodeGrids)())
                return [];
            let n = [];
            const {
                codeGridSchema: o
            } = p;
            return o.allowChannelGrids && (0, i.IsRoleLevelBetween)(null == o || null === (k = o.channelGridsRoleLevel) || void 0 === k ? void 0 : k.min, null == o || null === (l = o.channelGridsRoleLevel) || void 0 === l ? void 0 : l.max) && n.push({
                type: d.default.broadcastMessage,
                name: 'When receiving on channel...'
            }), o.triggers.forEach(a => {
                (0, f.CanAddCodeGrid)(p.id, a.type) && n.push({
                    type: a.type,
                    name: a.name
                });
            }), n;
        },
        k = (a, b) => !!j(a, b).length;
}), c.register('eJTwL', function(b, h) {
    a(b.exports, 'CanAddCodeGrid', function() {
        return f;
    });
    var d = c('BUfP2'),
        e = c('2hh8R');
    const f = (a, b) => {
        const g = (0, d.FetchDeviceOptionById)(a);
        if (!g)
            return !1;
        const h = g.codeGridSchema.triggers.find(a => a.type === b);
        if (!h)
            return !1;
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), c.register('gCINC', function(b, p) {
    a(b.exports, 'CanAddCodeGrids', function() {
        return f;
    });
    var d = c('km4l3'),
        e = c('2hh8R');
    const f = () => {
        const g = d.RoleLevelPermissions.codeGrids.minimumRoleLevel,
            h = d.RoleLevelPermissions.codeGrids.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(g, h);
    };
}), c.register('Ymcmt', function(b, p) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('+ORCT'),
        g = c('xXIOh'),
        h = c('7Sbqr'),
        i = c('UzdPH'),
        j = c('PjB0f'),
        k = c('mCZDR');
    var l = a => {
        const {
            deviceId: m,
            deviceOption: n
        } = o, [p, q] = e.useState((0, f.GetRemovingDeviceTotalMemoryCost)({
            deviceId: m
        }));
        return e.useEffect(() => (0, g.ReactionToMultipleProps)([
            () => {
                var r;
                return null === (r = h.default.world.devices.codeGrids.get(m)) || void 0 === r ? void 0 : r.items.size;
            },
            () => h.default.memorySystem.counters.devices.get(n.id)
        ], () => {
            q((0, f.GetRemovingDeviceTotalMemoryCost)({
                deviceId: m
            }));
        }, {
            fireImmediately: !0
        }), [m]), (0, d.jsxs)(i.default.Text, {
            italic: !0,
            children: [
                (0, j.numberWithCommas)(p),
                ' ',
                k.MemoryName
            ]
        });
    };
}), c.register('xXIOh', function(b, f) {
    a(b.exports, 'ReactionToMultipleProps', function() {
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
}), c.register('9UTUn', function(b, d) {
    a(b.exports, 'WiresStartingFromDevice', function() {
        return e;
    }), a(b.exports, 'WiresEndingAtDevice', function() {
        return f;
    }), a(b.exports, 'DeviceHasAWireAttached', function() {
        return g;
    });
    var d = c('7Sbqr');
    const e = a => Array.from(d.default.world.wires.wires.keys()).filter(b => b.startsWith(a)).map(a => d.default.world.wires.wires.get(a)),
        f = a => Array.from(d.default.world.wires.wires.keys()).filter(b => b.endsWith(a)).map(a => d.default.world.wires.wires.get(a)),
        g = a => !(!e(a).length && !f(a).length);
}), c.register('Wgw1x0', function(b, c) {
    a(b.exports, 'default', function() {
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
}), c.register('wsUEH', function(b, v) {
    a(b.exports, 'DoesEditedDeviceSupportVisualEditing', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('dAmf5');
    const f = () => {
        var g;
        const h = (0, e.default)().worldManager.devices.getDeviceById(null !== (g = d.default.me.editing.device.currentlyEditedDevice.id) && void 0 !== g ? g : '');
        return !!h && h.visualEditing.uses();
    };
}), c.register('D4FfZ', function(b, v) {
    a(b.exports, 'SetVisualEditingData', function() {
        return h;
    });
    var d = c('2pEsK'),
        e = c('7Sbqr'),
        f = c('jgFbX'),
        g = c('KDS1x');
    const h = () => {
        const i = (0, g.FetchCurrentlyEditedDevice)();
        if (!i)
            return;
        i.parts.forceHide(), i.colliders.hideDebug(), i.shadows.hide(), i.onHide && i.onHide(), e.default.me.editing.device.visualEditing = {
            active: !0,
            instruction: '',
            keyboardHelpers: [],
            cursor: 'default',
            id: i.id
        };
        const j = i.layers.isOnNaturalDepth() ? void 0 : i.layers.getDepth();
        (0, f.default)({
            id: d.VisualEditingConstants.previewId,
            deviceOption: i.deviceOption,
            isPreview: !0,
            options: {
                ...i.options
            },
            placedByClient: !0,
            state: {
                ...i.deviceOption.defaultState
            },
            x: i.x,
            y: i.y,
            depth: j,
            name: i.name
        });
    };
}), c.register('rsdPS', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('c6x8w'),
        f = c('cR5QE'),
        g = c('YfLmS'),
        h = c('UzdPH'),
        i = c('uPP4W'),
        j = c('S/jX4'),
        k = c('YARc1'),
        l = c('EefFJ'),
        m = c('PjB0f'),
        n = c('rFtvN1'),
        o = c('c8w5r'),
        p = c('Vlfxs'),
        q = c('dAmf5'),
        r = c('64TR40');
    var s = (0, p.observer)(a => {
        const [t, u, v] = (0, m.useBoolean)(!1), [w, x] = i.useState(''), y = i.useRef(null);
        i.useEffect(() => {
            var z;
            t && (x(''), null == y || null === (z = y.current) || void 0 === z || z.focus());
        }, [t]);
        const z = () => {
                const A = null == w ? void 0 : w.trim(),
                    B = (0, q.default)().worldManager.devices.getDeviceById(a.deviceId);
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
                            children: (0, k.FetchDeviceName)(a.deviceId)
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
                                onChange: a => {
                                    x(a.target.value);
                                },
                                onPressEnter: z
                            })
                        ]
                    })
                ]
            })
        });
    });
}), c.register('YARc1', function(b, k) {
    a(b.exports, 'FetchDeviceName', function() {
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
}), c.register('64TR40', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('dAmf5'),
        e = c('jgFbX'),
        f = c('bBJD3'),
        g = c('h1T4n');
    var h = a => {
        const i = (0, d.default)().worldManager.devices.getDeviceById(a.id);
        if (!i)
            return;
        const j = (0, g.default)(a.id);
        if (!j)
            return;
        const k = a.hooks || j.hooks;
        (0, e.default)({
            ...a,
            hooks: k,
            placeInstantly: !0,
            onPlace: j => {
                j && (0, f.default)({
                    id: i.id,
                    deviceTypeId: i.deviceOption.id,
                    options: JSON.stringify(a.options),
                    x: a.x,
                    y: a.y,
                    depth: j.layers.getOptionsDepth(),
                    layerId: j.layers.getOptionsLayer(),
                    name: a.name,
                    hooks: k
                });
            }
        });
    };
}), c.register('1oiu7', function(b, s) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('b9Bct'),
        g = c('G3BnF'),
        h = c('rFtvN1'),
        i = c('G2sv1'),
        j = c('lD8j9'),
        k = c('hySYk'),
        l = c('9vnvq'),
        m = c('nbHO+');
    let n, o, p = a => a;
    var q = a => (0, d.jsxs)(r, {
        children: [
            (0, d.jsx)(s, {
                onClick: h.default,
                children: a.tab === j.DeviceEditingHomeTab.options ? (0, d.jsx)(i.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    position: a.position,
                    options: a.options,
                    hooks: a.hooks
                }) : a.tab === j.DeviceEditingHomeTab.codeGrids ? (0, d.jsx)(k.default, {
                    device: a.device,
                    deviceOption: a.deviceOption,
                    options: a.options
                }) : (0, d.jsx)(l.default, {
                    deviceId: a.device.id
                })
            }),
            (0, d.jsx)(m.default, {
                padding: 25
            })
        ]
    });
    const r = e.default.div.attrs({
            className: 'maxAll flex'
        })(n || (n = p`
  position: relative;
  justify-content: flex-end;
`)),
        s = (0, e.default)(f.motion.div).attrs({
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
}), c.register('hySYk', function(b, s) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('Vlfxs'),
        g = c('am7L5'),
        h = c('759tG'),
        i = c('yCCKs'),
        j = c('uEmMl'),
        k = c('5nJMd26'),
        l = c('oMVkc'),
        m = c('9sgA/'),
        n = c('PjB0f');
    let o;
    var p = (0, f.observer)(a => {
        var q;
        const {
            world: {
                devices: {
                    codeGrids: r
                }
            }
        } = (0, g.default)(), s = a.device.id, [t, u, v] = (0, n.useBoolean)(!1), w = null === (q = r.get(s)) || void 0 === q ? void 0 : q.items, x = (0, h.AvailableCodeGridsForDeviceType)(a.deviceOption.id, a.options), y = w && w.size >= 1, z = x.length >= 1, A = (0, l.default)();
        return y || A ? (0, d.jsx)(q, {
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
    const q = e.default.div(o || (o = (a => a)``));
}), c.register('yCCKs', function(b, G) {
    a(b.exports, 'default', function() {
        return D;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('wsz0q'),
        g = c('6L/0P'),
        h = c('h99Nu'),
        i = c('YimJ0'),
        j = c('bPH7V'),
        k = c('16ojk0'),
        l = c('cR5QE'),
        m = c('UzdPH'),
        n = c('RhbNx'),
        o = c('S/jX4'),
        p = c('bOSqX'),
        q = c('am7L5'),
        r = c('PjB0f'),
        s = c('xXIOh'),
        t = c('7Sbqr'),
        u = c('z6EBb'),
        v = c('mOCWR'),
        w = c('R1+hf'),
        x = c('JahBI'),
        y = c('htVdm'),
        z = c('kcx+B');
    let A, B, C = a => a;
    var D = a => {
        const {
            memorySystem: E
        } = (0, q.default)(), [F, G] = e.useState((0, u.CanAddCodeGrid)(a.deviceId)), [H, I, J] = (0, r.useBoolean)(!1), [K, L] = e.useState(''), M = e.useRef(null);
        e.useEffect(() => (0, s.ReactionToMultipleProps)([
            () => t.default.memorySystem.counters.codeGrids,
            () => t.default.memorySystem.usedMemoryCost
        ], () => {
            G((0, u.CanAddCodeGrid)(a.deviceId));
        }, {
            fireImmediately: !0
        }), [a.deviceId]), e.useEffect(() => {
            var N;
            null == M || null === (N = M.current) || void 0 === N || N.focus();
        }, [H]);
        const N = e.useMemo(() => (0, x.default)(y.default.channel), []),
            O = (0, v.GetCodeGridMessage)({
                reason: F.reason
            });
        return (0, d.jsxs)(E, {
            children: [
                (0, d.jsxs)(F, {
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
                    children: a.codeGridOptions.map(E => (0, d.jsx)(g.default, {
                        label: E.name,
                        onClick: () => {
                            (0, z.playClickSound)(), E.type !== w.default.broadcastMessage ? (a.setIsCreatingNewGrid(), (0, p.default)({
                                deviceId: a.deviceId,
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
                        P && P.length && (a.setIsCreatingNewGrid(), (0, p.default)({
                            deviceId: a.deviceId,
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
                            options: N.map(a => ({
                                value: a
                            })),
                            filterOption: (a, E) => -1 !== E.value.toUpperCase().indexOf(a.toUpperCase())
                        })
                    ]
                })
            ]
        });
    };
    const E = h.default.div.attrs({
            className: 'maxWidth'
        })(A || (A = C``)),
        F = (0, h.default)(i.VerticallyCentered).attrs({
            className: 'maxWidth between'
        })(B || (B = C``));
}), c.register('wsz0q', function(b, o) {
    a(b.exports, 'CodeGridList', function() {
        return e;
    });
    let d;
    const e = c('h99Nu').default.div.attrs({
        className: 'maxWidth'
    })(d || (d = (a => a)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), c.register('6L/0P', function(b, o) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('YimJ0');
    let h;
    var i = a => (0, d.jsxs)(j, {
        onClick: a.onClick,
        children: [
            a.children,
            (0, d.jsx)(e.default.Text, {
                children: a.label
            })
        ]
    });
    const j = (0, f.default)(g.Centered).attrs({
        className: 'maxWidth'
    })(h || (h = (a => a)`
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
}), c.register('16ojk0', function(o, p) {
    a(o.exports, 'default', function() {
        return v;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('xORK+'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('Ly1h3'),
        j = c('XRX1525'),
        k = c('Cpebg');
    const {
        Option: l
    } = i.default;

    function m(a) {
        return a && a.type && (a.type.isSelectOption || a.type.isSelectOptGroup);
    }
    const n = (a, c) => {
            const {
                prefixCls: o,
                className: p,
                popupClassName: q,
                dropdownClassName: r,
                children: s,
                dataSource: t
            } = u, v = (0, e.default)(s);
            let w;
            1 === v.length && (0, k.isValidElement)(v[0]) && !m(v[0]) && ([x] = v);
            const y = x ? () => x : void 0;
            let z;
            z = v.length && m(v[0]) ? s : t ? t.map(u => {
                if ((0, k.isValidElement)(u))
                    return u;
                switch (typeof u) {
                    case 'string':
                        return g.createElement(l, {
                            key: u,
                            value: u
                        }, u);
                    case 'object': {
                        const {
                            value: A
                        } = B;
                        return g.createElement(l, {
                            key: A,
                            value: A
                        }, B.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: A
            } = g.useContext(h.ConfigContext), B = A('select', o);
            return g.createElement(i.default, Object.assign({
                ref: c
            }, (0, f.default)(u, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: B,
                popupClassName: q || r,
                className: b(d)(`${ B }-auto-complete`, p),
                mode: i.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: y
            }), z);
        },
        o = g.forwardRef(n),
        p = (0, j.default)(o);
    o.Option = l, o._InternalPanelDoNotUseOrYouWillBeFired = p;
    var q = r;
}), c.register('bOSqX', function(b, j) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.createCodeGrid, {
            deviceId: a.deviceId,
            triggerType: a.triggerType,
            triggerValue: a.triggerValue
        });
    };
}), c.register('z6EBb', function(b, j) {
    a(b.exports, 'CanAddCodeGrid', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('iEonH'),
        f = c('LY2o7');
    const g = a => {
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
        return (null !== (j = null === (h = d.default.world.devices.codeGrids.get(a)) || void 0 === h ? void 0 : h.items.size) && void 0 !== j ? j : 0) >= d.default.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: e.OutOfResourcesReason.codeGridPerDeviceLimit
        } : {
            canAdd: !0
        };
    };
}), c.register('mOCWR', function(b, H) {
    a(b.exports, 'GetCodeGridMessage', function() {
        return i;
    });
    var d = c('7Sbqr'),
        e = c('iEonH'),
        f = c('RhbNx'),
        g = c('mCZDR'),
        h = c('PjB0f');
    const i = a => {
        if (a.reason === e.OutOfResourcesReason.codeGridPerDeviceLimit)
            return `Cannot create more ${ f.default.grid.plural }. Reached limit of ${ d.default.memorySystem.limits.codeGridsPerDevice } ${ f.default.grid.plural } per device.`;
        if (a.reason === e.OutOfResourcesReason.limit)
            return `Cannot create more ${ f.default.grid.plural }. Reached limit of ${ d.default.memorySystem.limits.codeGrids } ${ f.default.grid.plural } on map.`;
        const j = d.default.memorySystem.costs.codeGrid;
        return a.reason === e.OutOfResourcesReason.noMemory ? `Not enough ${ g.MemoryName } to create ${ f.default.grid.singular }. Requires ${ (0, h.numberWithCommas)(j) } available ${ g.MemoryName }.` : '';
    };
}), c.register('uEmMl', function(b, H) {
    a(b.exports, 'default', function() {
        return D;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('cR5QE'),
        j = c('UzdPH'),
        k = c('oMVkc'),
        l = c('RhbNx'),
        m = c('wsz0q'),
        n = c('6L/0P'),
        o = c('Vlfxs'),
        p = c('l8dwR'),
        q = c('S/jX4'),
        r = c('7Sbqr'),
        s = c('6oZo7'),
        t = c('4jOgw8'),
        u = c('j/N3t'),
        v = c('rFtvN1'),
        w = c('3I8Ro0'),
        x = c('WgGOW'),
        y = c('4/f+U'),
        z = c('kcx+B');
    let A, B, C = a => a;
    var D = (0, o.observer)(a => {
        const {
            deviceId: E
        } = F, G = Array.from(F.codeGrids), H = (0, k.default)();
        return e.useEffect(() => {
            F.isCreatingNewGrid && (F.setIsNotCreatingNewGrid(), G.length >= 1 && E((0, y.last)(G)[0]));
        }, [G.length]), (0, d.jsxs)(F, {
            children: [
                (0, d.jsxs)(j.default.Title, {
                    style: {
                        color: q.default.White
                    },
                    level: 4,
                    children: [
                        H ? 'Edit' : 'View',
                        ' an existing',
                        ' ',
                        l.default.grid.singular
                    ]
                }),
                (0, d.jsx)(m.CodeGridList, {
                    style: {
                        marginTop: 20
                    },
                    children: G.map(F => (0, d.jsx)(n.default, {
                        label: (0, p.default)(E, F[0]),
                        onClick: () => {
                            (0, z.playClickSound)(), E(F[0]);
                        },
                        children: H ? (0, d.jsx)(G, {
                            children: (0, d.jsx)(h.default, {
                                menu: {
                                    items: [{
                                        key: `remove-grid-${ F[0] }`,
                                        label: `Delete ${ l.default.grid.singular }`,
                                        icon: (0, d.jsx)(t.default, {}),
                                        onClick: (0, w.default)(() => {
                                            i.default.confirm({
                                                title: `Are you sure you want to delete this ${ l.default.grid.singular }?`,
                                                onOk: () => {
                                                    (0, x.default)({
                                                        deviceId: E,
                                                        gridId: F[0]
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
                    }, F[0] + '-grid'))
                })
            ]
        });
    });
    const E = a => {
            r.default.me.editing.device.currentlyEditedGridId = a, r.default.me.editing.device.screen = s.EditingDeviceScreen.grid;
        },
        F = f.default.div.attrs({
            className: 'maxWidth'
        })(A || (A = C``)),
        G = f.default.div(B || (B = C`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`));
}), c.register('oMVkc', function(b, l) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('7Sbqr'),
        e = c('PUlKf'),
        f = c('FnjBt'),
        g = c('Bpt+p'),
        h = c('5Ux1a');
    var i = a => {
        var j, k;
        if (!(0, g.isSavedVersion)())
            return !1;
        if ((0, f.isAssignment)())
            return !1;
        if (!(0, h.InPreGamePhase)())
            return !1;
        const l = a || (0, e.default)();
        return (null === (j = d.default.characters.characters.get(l)) || void 0 === j || null === (k = j.permissions) || void 0 === k ? void 0 : k.manageCodeGrids) || !1;
    };
}), c.register('l8dwR', function(b, k) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('R1+hf'),
        f = c('7Sbqr'),
        g = c('h1T4n'),
        h = c('gSUVO');
    var i = (a, b) => ((a, b) => {
        var j, k;
        const l = (0, g.default)(a);
        if (!l)
            return null;
        const m = null === (j = f.default.world.devices.codeGrids.get(a)) || void 0 === j || null === (k = j.items) || void 0 === k ? void 0 : k.get(b);
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
        const o = l.deviceOption.codeGridSchema.triggers.find(a => a.type === n);
        return o ? o.name : null;
    })(a, b) || 'Block';
}), c.register('4jOgw8', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('4LDCB8'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var i = e.forwardRef(h);
}), c.register('4LDCB8', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('3I8Ro0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => b => {
        b.domEvent.stopPropagation(), a && a();
    };
}), c.register('WgGOW', function(b, G) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.deleteCodeGrid, {
            deviceId: a.deviceId,
            gridId: a.gridId
        });
    };
}), c.register('9sgA/', function(b, G) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('RhbNx'),
        g = c('Wgw1x0'),
        h = c('YimJ0'),
        i = c('iMnBi');
    var j = () => (0, d.jsxs)(h.CenteredColumn, {
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
}), c.register('9vnvq', function(b, G) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('MUFaI'),
        g = c('Vlfxs'),
        h = c('9UTUn'),
        i = c('Wgw1x0'),
        j = c('5nJMd26'),
        k = c('UzdPH');
    let l;
    var m = (0, g.observer)(a => (0, h.DeviceHasAWireAttached)(a.deviceId) ? (0, d.jsx)(n, {
        children: (0, d.jsxs)(j.default, {
            direction: 'vertical',
            size: 25,
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    direction: 'in',
                    deviceId: a.deviceId
                }),
                (0, d.jsx)(f.default, {
                    direction: 'out',
                    deviceId: a.deviceId
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
    const n = e.default.div(l || (l = (a => a)``));
}), c.register('MUFaI', function(b, G) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('Wgw1x0'),
        g = c('RJ/fk'),
        h = c('5nJMd26'),
        i = c('UzdPH'),
        j = c('S/jX4'),
        k = c('9UTUn'),
        l = c('xEjR7');
    let m;
    var n = (0, c('Vlfxs').observer)(a => {
        const o = 'in' === a.direction ? (0, k.WiresEndingAtDevice)(a.deviceId) : (0, k.WiresStartingFromDevice)(a.deviceId);
        return o.length ? (0, d.jsxs)(o, {
            children: [
                (0, d.jsxs)(i.default.Title, {
                    level: 4,
                    style: {
                        color: j.default.White
                    },
                    children: [
                        (0, g.CapitalizeFirstLetter)(f.default.wire.plural),
                        ' ',
                        a.direction
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
                        deviceId: a.deviceId
                    }, o.id))
                })
            ]
        }) : null;
    });
    const o = e.default.div(m || (m = (a => a)``));
}), c.register('xEjR7', function(b, G) {
    a(b.exports, 'default', function() {
        return C;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('YimJ0'),
        h = c('iMnBi'),
        i = c('UzdPH'),
        j = c('gSUVO'),
        k = c('YARc1'),
        l = c('vUNls'),
        m = c('7X8h3'),
        n = c('Vlfxs'),
        o = c('am7L5'),
        p = c('TnPB+'),
        q = c('iAe3o');
    let r, s, t, u, v, w, x, y, z, A, B = a => a;
    var C = (0, n.observer)(a => {
        const {
            wire: D,
            deviceId: E
        } = F, {
            me: {
                editing: G
            }
        } = (0, o.default)(), H = D.startDevice === E, I = !H, J = (0, l.FetchDeviceById)(D.startDevice), K = (0, l.FetchDeviceById)(D.endDevice), L = (0, k.FetchDeviceName)(D.startDevice), M = (0, k.FetchDeviceName)(D.endDevice), N = e.useMemo(() => {
            var O, P, Q, R;
            if ((null == J ? void 0 : J.deviceOption.id) === m.default.wireRepeater)
                return 'Pulse received';
            const S = null == J || null === (O = J.deviceOption) || void 0 === O || null === (P = O.wireConfig) || void 0 === P || null === (Q = P.out) || void 0 === Q || null === (R = Q.connections) || void 0 === R ? void 0 : R.find(O => O.id === D.startConnection);
            return S ? S.name : 'No event';
        }, [D.startConnection]), O = e.useMemo(() => {
            var P, Q, R, S, T;
            if ((null == K || null === (P = K.deviceOption) || void 0 === P ? void 0 : P.id) === m.default.wireRepeater)
                return 'Relay pulse';
            const U = null == K || null === (Q = K.deviceOption) || void 0 === Q || null === (R = Q.wireConfig) || void 0 === R || null === (S = R.in) || void 0 === S || null === (T = S.connections) || void 0 === T ? void 0 : T.find(P => P.id === D.endConnection);
            return U ? U.name : 'No action';
        }, [D.endConnection]);
        return (0, d.jsxs)(D, {
            onClick: () => {
                G.wire.currentlyEditedWireId = D.id, (0, p.default)(q.default.editingWire);
            },
            children: [
                (0, d.jsxs)(E, {
                    children: [
                        (0, d.jsx)(F, {
                            selected: H
                        }),
                        (0, d.jsxs)(G, {
                            children: [
                                (0, d.jsx)(H, {}),
                                (0, d.jsx)(I, {
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-caret-right'
                                    })
                                })
                            ]
                        }),
                        (0, d.jsx)(F, {
                            selected: I
                        })
                    ]
                }),
                (0, d.jsxs)(J, {
                    children: [
                        (0, d.jsxs)(L, {
                            children: [
                                I ? (0, d.jsx)(N, {
                                    children: L
                                }) : null,
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(i.default.Text, {
                                        children: N
                                    })
                                })
                            ]
                        }),
                        (0, d.jsxs)(M, {
                            children: [
                                H ? (0, d.jsx)(N, {
                                    children: M
                                }) : null,
                                (0, d.jsx)(i.default.Text, {
                                    children: O
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const D = f.default.div(r || (r = B`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`)),
        E = (0, f.default)(g.VerticallyCentered).attrs({
            className: 'maxWidth'
        })(s || (s = B``)),
        F = f.default.div(t || (t = B`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${ 0 };
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`), a => a.selected ? '#269900' : 'rgba(255,255,255,0.14)'),
        G = (0, f.default)(g.VerticallyCentered)(u || (u = B`
  flex: 1;
  padding: 0px 20px;
`)),
        H = f.default.div(v || (v = B`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`)),
        I = f.default.div(w || (w = B`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`)),
        J = f.default.div.attrs({
            className: 'maxWidth between flex'
        })(x || (x = B`
  align-items: flex-start;
  margin-top: 10px;
`)),
        K = f.default.div(y || (y = B`
  max-width: 45%;
  line-height: 1;
`)),
        L = (0, f.default)(K)(z || (z = B``)),
        M = (0, f.default)(K)(A || (A = B`
  text-align: right;
`)),
        N = a => (0, d.jsx)(i.default.Title, {
            level: 5,
            style: {
                fontWeight: j.FontWeights.Bold
            },
            children: a.children
        });
}), c.register('9DNGy', function(b, h) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('dAmf5'),
        f = c('am7L5');
    var g = () => {
        const {
            me: {
                editing: {
                    device: {
                        currentlyEditedDevice: h
                    }
                }
            },
            worldOptions: {
                deviceOptions: i
            }
        } = (0, f.default)();
        return {
            device: d.useMemo(() => (0, e.default)().worldManager.devices.getDeviceById(h.id), [h.id]),
            deviceOption: i.find(i => i.id === h.deviceOptionId)
        };
    };
}), c.register('GHmRa', function(b, h) {
    a(b.exports, 'useTimeout', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('65DnQ');

    function f(a, b) {
        void 0 === b && (b = 0), (0, e.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var g = (0, d.useState)(!1),
            h = g[0],
            i = g[1],
            j = (0, d.useRef)();

        function k() {
            j.current && j.current(), l();
        }
        (0, d.useEffect)(function() {
            j.current = a;
        }, [a]);
        var l = (0, d.useCallback)(function() {
                i(!1);
            }, []),
            m = (0, d.useCallback)(function() {
                i(!0);
            }, []);
        return (0, d.useEffect)(function() {
            if (h) {
                if ('undefined' != typeof window) {
                    var n = window.setTimeout(k, b);
                    return function() {
                        window.clearTimeout(n);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            h,
            b
        ]), {
            clear: l,
            isActive: h,
            start: m,
            stop: l
        };
    }
}), c.register('65DnQ', function(b, d) {
    a(b.exports, 'useWarningOnMountInDevelopment', function() {
        return f;
    });
    var d = c('laJ/S'),
        e = c('DmwlP');

    function f(a) {
        (0, d.useDidMount)(function() {
            (0, e.warning)(!1, a);
        });
    }
}), c.register('DmwlP', function(b, c) {
    a(b.exports, 'warning', function() {
        return d;
    });
    var d = function() {};
}), c.register('BYJd9', function(B, C) {
    a(B.exports, 'default', function() {
        return y;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('EefFJ'),
        i = c('am7L5'),
        j = c('UnUp5'),
        k = c('7Sbqr'),
        l = c('i7RJP'),
        m = c('1VzHl'),
        n = c('+0Tb/'),
        o = c('IsmrL'),
        p = c('gSUVO'),
        q = c('kneek'),
        r = c('RxCgb'),
        s = c('k6F40'),
        t = c('kcx+B');
    let u, v, w, x = a => a;
    var y = (0, g.observer)(() => {
        const {
            me: {
                editing: {
                    device: {
                        visualEditing: {
                            instruction: z,
                            keyboardHelpers: A
                        }
                    }
                }
            }
        } = (0, i.default)();
        (0, n.default)(b(q).Input.Keyboard.KeyCodes.ENTER, () => {
            p();
        });
        (0, n.default)(b(q).Input.Keyboard.KeyCodes.ESC, () => {
            p();
        }), (0, s.useWillUnmount)(() => {
            (0, r.ClearVisualEditingData)();
        });
        const [B, C] = e.useState(z), [D, E] = e.useState(JSON.stringify(A));
        e.useEffect(() => {
            const F = (0, j.reaction)(() => z, () => {
                B !== k.default.me.editing.device.visualEditing.instruction && C(k.default.me.editing.device.visualEditing.instruction);
            }, {
                fireImmediately: !0
            });
            return () => {
                F();
            };
        }, [
            z,
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
        return (0, d.jsxs)(z, {
            children: [
                (0, d.jsx)(m.default, {
                    items: JSON.parse(D),
                    visible: !0
                }),
                (0, d.jsxs)(A, {
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
                        (0, d.jsx)(B, {
                            children: (0, d.jsx)('div', {
                                children: B
                            })
                        })
                    ]
                })
            ]
        });
    });
    const z = f.default.div.attrs({
            className: 'maxAll flex'
        })(u || (u = x`
  align-items: flex-end;
`)),
        A = f.default.div.attrs({
            className: 'maxWidth flex'
        })(v || (v = x`
  position: relative;
  padding: 25px;
`)),
        B = f.default.div.attrs({
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
}), c.register('i7RJP', function(b, d) {
    a(b.exports, 'ConfirmDoneVisualEditing', function() {
        return j;
    });
    var d = c('iAe3o'),
        e = c('TnPB+'),
        f = c('64TR40'),
        g = c('KDS1x'),
        h = c('RxCgb'),
        i = c('83+vO');
    const j = () => {
        (0, e.default)(d.default.editingDevice);
        const k = (0, i.FetchVisualEditingPreview)(),
            l = (0, g.FetchCurrentlyEditedDevice)();
        (0, h.ClearVisualEditingData)(), l && k && (0, f.default)({
            deviceOption: l.deviceOption,
            id: l.id,
            x: Math.round(k.x),
            y: Math.round(k.y),
            depth: k.layers.getDepth(),
            layerId: l.layers.getOptionsLayer(),
            name: k.name,
            isPreview: !1,
            options: {
                ...k.options
            },
            placedByClient: !0,
            state: l.deviceOption.defaultState
        });
    };
}), c.register('ndDOe', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('cXcnp')).then(() => c('+3jM7'));
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
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
}), c.register('WKaIG', function(b, c) {
    a(b.exports, 'default', function() {
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
}), c.register('crVjo2', function(i, d) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
}), c.register('SDOhx0', function(b, i) {
    a(b.exports, 'CanAddTerrain', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('2hh8R');
    const f = a => {
        var g;
        const h = d.default.worldOptions.terrainOptions.find(g => g.id === a);
        if (!h)
            return !1;
        if (null === (g = h.blockedMapStyles) || void 0 === g ? void 0 : g.length) {
            const i = d.default.session.mapStyle;
            if (h.blockedMapStyles.includes(i))
                return !1;
        }
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), c.register('j6MtH', function(b, n) {
    a(b.exports, 'GetCurrentMapStyle', function() {
        return e;
    });
    var d = c('7Sbqr');
    const e = () => d.default.session.mapStyle;
});