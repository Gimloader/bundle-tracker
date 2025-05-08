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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _D;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....');
    let B;
    const C = h.lazy(() => c('.....'));
    var _D = (0, t.observer)(() => {
        const {
                me: E,
                world: {devices: F}
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
                return () => {
                };
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
                    }), P = (0, x.when)(() => !!F.devices.get(E.editing.device.currentlyEditedDevice.id), () => {
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
        initial: { background: 'rgba(0,0,0,0)' },
        animate: { background: 'rgba(0,0,0,0.6)' },
        exit: { background: 'rgba(0,0,0,0)' }
    })(B || (B = (F => F)`
  color: ${ 0 };
`), o.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        enterExit: {
            duration: 0.22,
            ease: 'easeInOut'
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'DeviceEditingHomeTab', function () {
        return _n;
    }), a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, _n;
    var o;
    (o = _n || (_n = {})).options = 'options', o.codeGrids = 'codeGrids', o.wires = 'wires';
    var _p = q => {
        (0, k.default)(b(l).Input.Keyboard.KeyCodes.ESC, q.close, [q.close]);
        const [r, s] = g.useState(_n.options);
        return (0, f.jsxs)(_q, {
            children: [
                (0, f.jsx)(i.default, {
                    device: q.device,
                    deviceOption: q.deviceOption,
                    options: q.options,
                    tab: r,
                    setTab: s
                }),
                (0, f.jsx)(j.default, {
                    device: q.device,
                    options: q.options,
                    hooks: q.hooks,
                    position: q.position,
                    deviceOption: q.deviceOption,
                    tab: r
                })
            ]
        });
    };
    const _q = h.default.div.attrs({ className: 'maxAll flex between' })(m || (m = (r => r)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _C;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....');
    let B;
    var _C = (0, m.observer)(D => {
        const {
                device: E,
                deviceOption: F,
                options: G,
                tab: H,
                setTab: I
            } = D, J = (0, n.DoesDeviceTypeHaveAvailableCodeGrids)(F.id, G), K = (0, s.DeviceHasAWireAttached)(E.id);
        return (0, f.jsxs)(_D, {
            children: [
                (0, f.jsxs)('div', {
                    className: 'maxWidth',
                    children: [
                        (0, f.jsx)(y.default, { deviceId: E.id }),
                        (0, f.jsx)(r.default, {
                            deviceId: E.id,
                            deviceOption: F
                        }),
                        (0, f.jsxs)(h.default, {
                            direction: 'vertical',
                            size: 4,
                            className: 'maxWidth',
                            style: { marginTop: 16 },
                            children: [
                                (0, f.jsx)(i.default, {
                                    icon: 'fas fa-cog',
                                    name: 'Options',
                                    selected: H === q.DeviceEditingHomeTab.options,
                                    onSelect: () => {
                                        I(q.DeviceEditingHomeTab.options);
                                    }
                                }),
                                J ? (0, f.jsx)(i.default, {
                                    icon: 'fas fa-cubes',
                                    name: (0, o.CapitalizeFirstLetter)(p.default.grid.plural),
                                    selected: H === q.DeviceEditingHomeTab.codeGrids,
                                    onSelect: () => {
                                        I(q.DeviceEditingHomeTab.codeGrids);
                                    }
                                }) : null,
                                K ? (0, f.jsx)(i.default, {
                                    icon: 'fas fa-plug',
                                    name: (0, o.CapitalizeFirstLetter)(t.default.wire.plural),
                                    selected: H === q.DeviceEditingHomeTab.wires,
                                    onSelect: () => {
                                        I(q.DeviceEditingHomeTab.wires);
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
                        onClick: L => {
                            (0, x.default)(L), (0, z.playClickSound)(), (0, w.SetVisualEditingData)();
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
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    })(B || (B = (E => E)`
  padding: 25px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p, q = r => r;
    var _r = s => {
        const {
            selected: t,
            name: u,
            icon: v,
            onSelect: w
        } = s;
        return (0, f.jsxs)(_s, {
            onClick: x => {
                (0, l.default)(x), (0, m.playClickSound)(), w();
            },
            children: [
                (0, f.jsx)(_t, {
                    selected: t,
                    children: (0, f.jsx)(j.default, { name: v })
                }),
                (0, f.jsx)(_u, {
                    children: (0, f.jsx)(k.default.Title, {
                        level: 4,
                        children: u
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
`)), _t = (0, g.default)(h.Centered)(o || (o = q`
  height: 36px;
  width: 36px;
  border: 2px solid ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  transition: background 0.2s ease;
`), i.default.White, u => u.selected ? '#269900' : 'rgba(0,0,0,0.2)'), _u = g.default.div(p || (p = q`
  margin-left: 14px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        null == g || g.stopPropagation();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AvailableCodeGridsForDeviceType', function () {
        return _l;
    }), a(d.exports, 'DoesDeviceTypeHaveAvailableCodeGrids', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = (m, n) => {
            var o, p;
            const q = g.default.worldOptions.deviceOptions.find(r => r.id === m);
            if (!q)
                return [];
            if (!(0, j.CanAddDeviceType)(m, n))
                return [];
            if (!(0, i.CanAddCodeGrids)())
                return [];
            let r = [];
            const {codeGridSchema: s} = q;
            return s.allowChannelGrids && (0, k.IsRoleLevelBetween)(null == s || null === (o = s.channelGridsRoleLevel) || void 0 === o ? void 0 : o.min, null == s || null === (p = s.channelGridsRoleLevel) || void 0 === p ? void 0 : p.max) && r.push({
                type: f.default.broadcastMessage,
                name: 'When receiving on channel...'
            }), s.triggers.forEach(t => {
                (0, h.CanAddCodeGrid)(q.id, t.type) && r.push({
                    type: t.type,
                    name: t.name
                });
            }), r;
        }, _m = (n, o) => !!_l(n, o).length;
}), c.register('.....', function (d, e) {
    a(d.exports, 'CanAddCodeGrid', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = (i, j) => {
        const k = (0, f.FetchDeviceOptionById)(i);
        if (!k)
            return !1;
        const l = k.codeGridSchema.triggers.find(m => m.type === j);
        if (!l)
            return !1;
        const m = l.minimumRoleLevel, n = l.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(m, n);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CanAddCodeGrids', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = () => {
        const i = f.RoleLevelPermissions.codeGrids.minimumRoleLevel, j = f.RoleLevelPermissions.codeGrids.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(i, j);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = o => {
        const {
                deviceId: p,
                deviceOption: q
            } = o, [r, s] = g.useState((0, h.GetRemovingDeviceTotalMemoryCost)({ deviceId: p }));
        return g.useEffect(() => (0, i.ReactionToMultipleProps)([
            () => {
                var t;
                return null === (t = j.default.world.devices.codeGrids.get(p)) || void 0 === t ? void 0 : t.items.size;
            },
            () => j.default.memorySystem.counters.devices.get(q.id)
        ], () => {
            s((0, h.GetRemovingDeviceTotalMemoryCost)({ deviceId: p }));
        }, { fireImmediately: !0 }), [p]), (0, f.jsxs)(k.default.Text, {
            italic: !0,
            children: [
                (0, l.numberWithCommas)(r),
                ' ',
                m.MemoryName
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'ReactionToMultipleProps', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'WiresStartingFromDevice', function () {
        return _g;
    }), a(d.exports, 'WiresEndingAtDevice', function () {
        return _h;
    }), a(d.exports, 'DeviceHasAWireAttached', function () {
        return _i;
    });
    var f = c('.....');
    const _g = h => Array.from(f.default.world.wires.wires.keys()).filter(i => i.startsWith(h)).map(i => f.default.world.wires.wires.get(i)), _h = i => Array.from(f.default.world.wires.wires.keys()).filter(j => j.endsWith(i)).map(j => f.default.world.wires.wires.get(j)), _i = j => !(!_g(j).length && !_h(j).length);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'DoesEditedDeviceSupportVisualEditing', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = () => {
        var i;
        const j = (0, g.default)().worldManager.devices.getDeviceById(null !== (i = f.default.me.editing.device.currentlyEditedDevice.id) && void 0 !== i ? i : '');
        return !!j && j.visualEditing.uses();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SetVisualEditingData', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
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
            options: { ...k.options },
            placedByClient: !0,
            state: { ...k.deviceOption.defaultState },
            x: k.x,
            y: k.y,
            depth: l,
            name: k.name
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    var _u = (0, r.observer)(v => {
        const [w, x, y] = (0, o.useBoolean)(!1), [z, A] = k.useState(''), B = k.useRef(null);
        k.useEffect(() => {
            var C;
            w && (A(''), null == B || null === (C = B.current) || void 0 === C || C.focus());
        }, [w]);
        const C = () => {
                const D = null == z ? void 0 : z.trim(), E = (0, s.default)().worldManager.devices.getDeviceById(v.deviceId);
                E && ((0, t.default)({
                    depth: E.layers.getOptionsDepth(),
                    layerId: E.layers.getOptionsLayer(),
                    name: D,
                    deviceOption: E.deviceOption,
                    id: E.id,
                    isPreview: !1,
                    options: E.options,
                    placedByClient: !1,
                    state: E.deviceOption.defaultState,
                    x: E.x,
                    y: E.y
                }), y());
            }, D = (0, q.default)();
        return (0, f.jsx)(n.default, {
            className: 'maxWidth',
            children: (0, f.jsxs)('div', {
                className: 'flex',
                onClick: p.default,
                children: [
                    (0, f.jsx)(i.default, {
                        title: D ? 'Rename' : void 0,
                        placement: 'right',
                        children: (0, f.jsx)(j.default.Title, {
                            level: 2,
                            style: {
                                color: l.default.White,
                                marginBottom: 2,
                                cursor: D ? 'pointer' : 'auto'
                            },
                            onClick: D ? x : void 0,
                            children: (0, m.FetchDeviceName)(v.deviceId)
                        })
                    }),
                    (0, f.jsxs)(h.default, {
                        open: w && D,
                        onCancel: y,
                        onOk: C,
                        children: [
                            (0, f.jsx)(j.default.Title, {
                                level: 5,
                                children: 'Change name'
                            }),
                            (0, f.jsx)(g.default, {
                                ref: B,
                                maxLength: 64,
                                style: { marginTop: 10 },
                                placeholder: 'New name...',
                                value: z,
                                onChange: E => {
                                    A(E.target.value);
                                },
                                onPressEnter: C
                            })
                        ]
                    })
                ]
            })
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'FetchDeviceName', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const l = (0, f.default)().worldManager.devices.getDeviceById(k.id);
        if (!l)
            return;
        const m = (0, i.default)(k.id);
        if (!m)
            return;
        const n = k.hooks || m.hooks;
        (0, g.default)({
            ...k,
            hooks: n,
            placeInstantly: !0,
            onPlace: o => {
                o && (0, h.default)({
                    id: l.id,
                    deviceTypeId: l.deviceOption.id,
                    options: JSON.stringify(k.options),
                    x: k.x,
                    y: k.y,
                    depth: o.layers.getOptionsDepth(),
                    layerId: o.layers.getOptionsLayer(),
                    name: k.name,
                    hooks: n
                });
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p, q, r = s => s;
    var _s = t => (0, f.jsxs)(_t, {
        children: [
            (0, f.jsx)(_u, {
                onClick: j.default,
                children: t.tab === l.DeviceEditingHomeTab.options ? (0, f.jsx)(k.default, {
                    device: t.device,
                    deviceOption: t.deviceOption,
                    position: t.position,
                    options: t.options,
                    hooks: t.hooks
                }) : t.tab === l.DeviceEditingHomeTab.codeGrids ? (0, f.jsx)(m.default, {
                    device: t.device,
                    deviceOption: t.deviceOption,
                    options: t.options
                }) : (0, f.jsx)(n.default, { deviceId: t.device.id })
            }),
            (0, f.jsx)(o.default, { padding: 25 })
        ]
    });
    const _t = g.default.div.attrs({ className: 'maxAll flex' })(p || (p = r`
  position: relative;
  justify-content: flex-end;
`)), _u = (0, g.default)(h.motion.div).attrs({
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    var _r = (0, h.observer)(s => {
        var t;
        const {
                world: {
                    devices: {codeGrids: u}
                }
            } = (0, i.default)(), v = s.device.id, [w, x, y] = (0, p.useBoolean)(!1), z = null === (t = u.get(v)) || void 0 === t ? void 0 : t.items, A = (0, j.AvailableCodeGridsForDeviceType)(s.deviceOption.id, s.options), B = z && z.size >= 1, C = A.length >= 1, D = (0, n.default)();
        return B || D ? (0, f.jsx)(_s, {
            children: (0, f.jsxs)(m.default, {
                direction: 'vertical',
                size: 40,
                className: 'maxWidth',
                children: [
                    B ? (0, f.jsx)(l.default, {
                        deviceId: v,
                        codeGrids: z,
                        isCreatingNewGrid: w,
                        setIsNotCreatingNewGrid: y
                    }) : null,
                    C && D ? (0, f.jsx)(k.default, {
                        codeGridOptions: A,
                        deviceId: v,
                        setIsCreatingNewGrid: x
                    }) : null
                ]
            })
        }) : (0, f.jsx)(o.default, {});
    });
    const _s = g.default.div(q || (q = (t => t)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _F;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....'), B = c('.....');
    let C, D, E = F => F;
    var _F = G => {
        const {memorySystem: H} = (0, s.default)(), [I, J] = g.useState((0, w.CanAddCodeGrid)(G.deviceId)), [K, L, M] = (0, t.useBoolean)(!1), [N, O] = g.useState(''), P = g.useRef(null);
        g.useEffect(() => (0, u.ReactionToMultipleProps)([
            () => v.default.memorySystem.counters.codeGrids,
            () => v.default.memorySystem.usedMemoryCost
        ], () => {
            J((0, w.CanAddCodeGrid)(G.deviceId));
        }, { fireImmediately: !0 }), [G.deviceId]), g.useEffect(() => {
            var Q;
            null == P || null === (Q = P.current) || void 0 === Q || Q.focus();
        }, [K]);
        const Q = g.useMemo(() => (0, z.default)(A.default.channel), []), R = (0, x.GetCodeGridMessage)({ reason: I.reason });
        return (0, f.jsxs)(_G, {
            children: [
                (0, f.jsxs)(_H, {
                    children: [
                        (0, f.jsxs)(o.default.Title, {
                            level: 4,
                            style: { color: q.default.White },
                            children: [
                                'Create a new ',
                                p.default.grid.singular
                            ]
                        }),
                        (0, f.jsxs)(o.default.Text, {
                            italic: !0,
                            children: [
                                '+',
                                (0, t.numberWithCommas)(H.costs.codeGrid),
                                ' memory'
                            ]
                        })
                    ]
                }),
                I.canAdd ? (0, f.jsx)(h.CodeGridList, {
                    style: { marginTop: 20 },
                    children: G.codeGridOptions.map(S => (0, f.jsx)(i.default, {
                        label: S.name,
                        onClick: () => {
                            (0, B.playClickSound)(), S.type !== y.default.broadcastMessage ? (G.setIsCreatingNewGrid(), (0, r.default)({
                                deviceId: G.deviceId,
                                triggerType: S.type,
                                triggerValue: ''
                            })) : L();
                        }
                    }, S.type + '-option'))
                }) : (0, f.jsx)(l.default, {
                    type: 'error',
                    showIcon: !0,
                    message: R,
                    style: { marginTop: 15 }
                }),
                (0, f.jsxs)(n.default, {
                    open: K,
                    onCancel: M,
                    onOk: () => {
                        const S = null == N ? void 0 : N.trim();
                        S && S.length && (G.setIsCreatingNewGrid(), (0, r.default)({
                            deviceId: G.deviceId,
                            triggerType: y.default.broadcastMessage,
                            triggerValue: N
                        }), M(), O(''));
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
                            ref: P,
                            value: N,
                            className: 'maxWidth',
                            placeholder: 'Channel name...',
                            onChange: O,
                            maxLength: 512,
                            style: {
                                marginTop: 10,
                                marginBottom: 3
                            },
                            autoFocus: !0,
                            options: Q.map(S => ({ value: S })),
                            filterOption: (S, T) => -1 !== T.value.toUpperCase().indexOf(S.toUpperCase())
                        })
                    ]
                })
            ]
        });
    };
    const _G = j.default.div.attrs({ className: 'maxWidth' })(C || (C = E``)), _H = (0, j.default)(k.VerticallyCentered).attrs({ className: 'maxWidth between' })(D || (D = E``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'CodeGridList', function () {
        return _g;
    });
    let f;
    const _g = c('.....').default.div.attrs({ className: 'maxWidth' })(f || (f = (h => h)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....');
    let j;
    var _k = l => (0, f.jsxs)(_l, {
        onClick: l.onClick,
        children: [
            l.children,
            (0, f.jsx)(g.default.Text, { children: l.label })
        ]
    });
    const _l = (0, h.default)(i.Centered).attrs({ className: 'maxWidth' })(j || (j = (m => m)`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    const {Option: n} = k.default;
    function o(p) {
        return p && p.type && (p.type.isSelectOption || p.type.isSelectOptGroup);
    }
    const p = (q, r) => {
            const {
                    prefixCls: s,
                    className: t,
                    popupClassName: u,
                    dropdownClassName: v,
                    children: w,
                    dataSource: x
                } = q, y = (0, g.default)(w);
            let z;
            1 === y.length && (0, m.isValidElement)(y[0]) && !o(y[0]) && ([A] = y);
            const B = A ? () => A : void 0;
            let C;
            C = y.length && o(y[0]) ? w : x ? x.map(D => {
                if ((0, m.isValidElement)(D))
                    return D;
                switch (typeof D) {
                case 'string':
                    return i.createElement(n, {
                        key: D,
                        value: D
                    }, D);
                case 'object': {
                        const {value: E} = D;
                        return i.createElement(n, {
                            key: E,
                            value: E
                        }, D.text);
                    }
                default:
                    return;
                }
            }) : [];
            const {getPrefixCls: D} = i.useContext(j.ConfigContext), E = D('select', s);
            return i.createElement(k.default, Object.assign({ ref: r }, (0, h.default)(q, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: E,
                popupClassName: u || v,
                className: b(f)(`${ E }-auto-complete`, t),
                mode: k.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, { getInputElement: B }), C);
        }, q = i.forwardRef(p), r = (0, l.default)(q);
    q.Option = n, q._InternalPanelDoNotUseOrYouWillBeFired = r;
    var _s = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.createCodeGrid, {
            deviceId: i.deviceId,
            triggerType: i.triggerType,
            triggerValue: i.triggerValue
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CanAddCodeGrid', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = j => {
        var k;
        const l = f.default.memorySystem.costs.codeGrid;
        if (!(0, h.CanUseMoreMemory)({ memory: l }))
            return {
                canAdd: !1,
                reason: g.OutOfResourcesReason.noMemory
            };
        if (f.default.memorySystem.counters.codeGrids >= f.default.memorySystem.limits.codeGrids)
            return {
                canAdd: !1,
                reason: g.OutOfResourcesReason.limit
            };
        var m;
        return (null !== (m = null === (k = f.default.world.devices.codeGrids.get(j)) || void 0 === k ? void 0 : k.items.size) && void 0 !== m ? m : 0) >= f.default.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: g.OutOfResourcesReason.codeGridPerDeviceLimit
        } : { canAdd: !0 };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetCodeGridMessage', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const _k = l => {
        if (l.reason === g.OutOfResourcesReason.codeGridPerDeviceLimit)
            return `Cannot create more ${ h.default.grid.plural }. Reached limit of ${ f.default.memorySystem.limits.codeGridsPerDevice } ${ h.default.grid.plural } per device.`;
        if (l.reason === g.OutOfResourcesReason.limit)
            return `Cannot create more ${ h.default.grid.plural }. Reached limit of ${ f.default.memorySystem.limits.codeGrids } ${ h.default.grid.plural } on map.`;
        const m = f.default.memorySystem.costs.codeGrid;
        return l.reason === g.OutOfResourcesReason.noMemory ? `Not enough ${ i.MemoryName } to create ${ h.default.grid.singular }. Requires ${ (0, j.numberWithCommas)(m) } available ${ i.MemoryName }.` : '';
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _F;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....'), B = c('.....');
    let C, D, E = F => F;
    var _F = (0, q.observer)(G => {
        const {deviceId: H} = G, I = Array.from(G.codeGrids), J = (0, m.default)();
        return g.useEffect(() => {
            G.isCreatingNewGrid && (G.setIsNotCreatingNewGrid(), I.length >= 1 && _G((0, A.last)(I)[0]));
        }, [I.length]), (0, f.jsxs)(_H, {
            children: [
                (0, f.jsxs)(l.default.Title, {
                    style: { color: s.default.White },
                    level: 4,
                    children: [
                        J ? 'Edit' : 'View',
                        ' an existing',
                        ' ',
                        n.default.grid.singular
                    ]
                }),
                (0, f.jsx)(o.CodeGridList, {
                    style: { marginTop: 20 },
                    children: I.map(K => (0, f.jsx)(p.default, {
                        label: (0, r.default)(H, K[0]),
                        onClick: () => {
                            (0, B.playClickSound)(), _G(K[0]);
                        },
                        children: J ? (0, f.jsx)(_I, {
                            children: (0, f.jsx)(j.default, {
                                menu: {
                                    items: [{
                                            key: `remove-grid-${ K[0] }`,
                                            label: `Delete ${ n.default.grid.singular }`,
                                            icon: (0, f.jsx)(v.default, {}),
                                            onClick: (0, y.default)(() => {
                                                k.default.confirm({
                                                    title: `Are you sure you want to delete this ${ n.default.grid.singular }?`,
                                                    onOk: () => {
                                                        (0, z.default)({
                                                            deviceId: H,
                                                            gridId: K[0]
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
                    }, K[0] + '-grid'))
                })
            ]
        });
    });
    const _G = H => {
            t.default.me.editing.device.currentlyEditedGridId = H, t.default.me.editing.device.screen = u.EditingDeviceScreen.grid;
        }, _H = h.default.div.attrs({ className: 'maxWidth' })(C || (C = E``)), _I = h.default.div(D || (D = E`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => {
        var m, n;
        if (!(0, i.isSavedVersion)())
            return !1;
        if ((0, h.isAssignment)())
            return !1;
        if (!(0, j.InPreGamePhase)())
            return !1;
        const o = l || (0, g.default)();
        return (null === (m = f.default.characters.characters.get(o)) || void 0 === m || null === (n = m.permissions) || void 0 === n ? void 0 : n.manageCodeGrids) || !1;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = (l, m) => ((n, o) => {
        var p, q;
        const r = (0, i.default)(n);
        if (!r)
            return null;
        const s = null === (p = h.default.world.devices.codeGrids.get(n)) || void 0 === p || null === (q = p.items) || void 0 === q ? void 0 : q.get(o);
        if (!s)
            return null;
        const t = s.triggerType;
        if (t === g.default.broadcastMessage)
            return (0, f.jsxs)('span', {
                children: [
                    'When receiving on channel',
                    ' ',
                    (0, f.jsx)('span', {
                        style: {
                            fontWeight: j.FontWeights.Bold,
                            color: '#57f784'
                        },
                        children: s.triggerValue || 'channel'
                    })
                ]
            });
        const u = r.deviceOption.codeGridSchema.triggers.find(v => v.type === t);
        return u ? u.name : null;
    })(l, m) || 'Block';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z' }
                }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => h => {
        h.domEvent.stopPropagation(), g && g();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.deleteCodeGrid, {
            deviceId: i.deviceId,
            gridId: i.gridId
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = () => (0, f.jsxs)(j.CenteredColumn, {
        className: 'maxAll',
        children: [
            (0, f.jsx)('div', {
                style: {
                    fontSize: 54,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 5
                },
                children: (0, f.jsx)(k.default, { name: 'fal fa-cubes' })
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    var _o = (0, i.observer)(p => (0, j.DeviceHasAWireAttached)(p.deviceId) ? (0, f.jsx)(_p, {
        children: (0, f.jsxs)(l.default, {
            direction: 'vertical',
            size: 25,
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    direction: 'in',
                    deviceId: p.deviceId
                }),
                (0, f.jsx)(h.default, {
                    direction: 'out',
                    deviceId: p.deviceId
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
    const _p = g.default.div(n || (n = (q => q)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o;
    var _p = (0, c('.....').observer)(q => {
        const r = 'in' === q.direction ? (0, m.WiresEndingAtDevice)(q.deviceId) : (0, m.WiresStartingFromDevice)(q.deviceId);
        return r.length ? (0, f.jsxs)(_q, {
            children: [
                (0, f.jsxs)(k.default.Title, {
                    level: 4,
                    style: { color: l.default.White },
                    children: [
                        (0, i.CapitalizeFirstLetter)(h.default.wire.plural),
                        ' ',
                        q.direction
                    ]
                }),
                (0, f.jsx)(j.default, {
                    direction: 'vertical',
                    size: 12,
                    style: { marginTop: 15 },
                    className: 'maxWidth',
                    children: r.map(s => (0, f.jsx)(n.default, {
                        wire: s,
                        deviceId: q.deviceId
                    }, s.id))
                })
            ]
        }) : null;
    });
    const _q = g.default.div(o || (o = (r => r)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _E;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
    let t, u, v, w, x, y, z, A, B, C, D = E => E;
    var _E = (0, p.observer)(F => {
        const {
                wire: G,
                deviceId: H
            } = F, {
                me: {editing: I}
            } = (0, q.default)(), J = G.startDevice === H, K = !J, L = (0, n.FetchDeviceById)(G.startDevice), M = (0, n.FetchDeviceById)(G.endDevice), N = (0, m.FetchDeviceName)(G.startDevice), O = (0, m.FetchDeviceName)(G.endDevice), P = g.useMemo(() => {
                var Q, R, S, T;
                if ((null == L ? void 0 : L.deviceOption.id) === o.default.wireRepeater)
                    return 'Pulse received';
                const U = null == L || null === (Q = L.deviceOption) || void 0 === Q || null === (R = Q.wireConfig) || void 0 === R || null === (S = R.out) || void 0 === S || null === (T = S.connections) || void 0 === T ? void 0 : T.find(V => V.id === G.startConnection);
                return U ? U.name : 'No event';
            }, [G.startConnection]), Q = g.useMemo(() => {
                var R, S, T, U, V;
                if ((null == M || null === (R = M.deviceOption) || void 0 === R ? void 0 : R.id) === o.default.wireRepeater)
                    return 'Relay pulse';
                const W = null == M || null === (S = M.deviceOption) || void 0 === S || null === (T = S.wireConfig) || void 0 === T || null === (U = T.in) || void 0 === U || null === (V = U.connections) || void 0 === V ? void 0 : V.find(X => X.id === G.endConnection);
                return W ? W.name : 'No action';
            }, [G.endConnection]);
        return (0, f.jsxs)(_F, {
            onClick: () => {
                I.wire.currentlyEditedWireId = G.id, (0, r.default)(s.default.editingWire);
            },
            children: [
                (0, f.jsxs)(_G, {
                    children: [
                        (0, f.jsx)(_H, { selected: J }),
                        (0, f.jsxs)(_I, {
                            children: [
                                (0, f.jsx)(_J, {}),
                                (0, f.jsx)(_K, { children: (0, f.jsx)(j.default, { name: 'fas fa-caret-right' }) })
                            ]
                        }),
                        (0, f.jsx)(_H, { selected: K })
                    ]
                }),
                (0, f.jsxs)(_L, {
                    children: [
                        (0, f.jsxs)(_N, {
                            children: [
                                K ? (0, f.jsx)(_P, { children: N }) : null,
                                (0, f.jsx)('div', { children: (0, f.jsx)(k.default.Text, { children: P }) })
                            ]
                        }),
                        (0, f.jsxs)(_O, {
                            children: [
                                J ? (0, f.jsx)(_P, { children: O }) : null,
                                (0, f.jsx)(k.default.Text, { children: Q })
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
`)), _G = (0, h.default)(i.VerticallyCentered).attrs({ className: 'maxWidth' })(u || (u = D``)), _H = h.default.div(v || (v = D`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${ 0 };
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`), I => I.selected ? '#269900' : 'rgba(255,255,255,0.14)'), _I = (0, h.default)(i.VerticallyCentered)(w || (w = D`
  flex: 1;
  padding: 0px 20px;
`)), _J = h.default.div(x || (x = D`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`)), _K = h.default.div(y || (y = D`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`)), _L = h.default.div.attrs({ className: 'maxWidth between flex' })(z || (z = D`
  align-items: flex-start;
  margin-top: 10px;
`)), M = h.default.div(A || (A = D`
  max-width: 45%;
  line-height: 1;
`)), _N = (0, h.default)(M)(B || (B = D``)), _O = (0, h.default)(M)(C || (C = D`
  text-align: right;
`)), _P = Q => (0, f.jsx)(k.default.Title, {
            level: 5,
            style: { fontWeight: l.FontWeights.Bold },
            children: Q.children
        });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = () => {
        const {
            me: {
                editing: {
                    device: {currentlyEditedDevice: j}
                }
            },
            worldOptions: {deviceOptions: k}
        } = (0, h.default)();
        return {
            device: f.useMemo(() => (0, g.default)().worldManager.devices.getDeviceById(j.id), [j.id]),
            deviceOption: k.find(l => l.id === j.deviceOptionId)
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useTimeout', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        void 0 === j && (j = 0), (0, g.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var k = (0, f.useState)(!1), l = k[0], m = k[1], n = (0, f.useRef)();
        function o() {
            n.current && n.current(), _p();
        }
        (0, f.useEffect)(function () {
            n.current = i;
        }, [i]);
        var _p = (0, f.useCallback)(function () {
                _h(!1);
            }, []), q = (0, f.useCallback)(function () {
                _h(!0);
            }, []);
        return (0, f.useEffect)(function () {
            if (l) {
                if ('undefined' != typeof window) {
                    var r = window.setTimeout(o, j);
                    return function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'useWarningOnMountInDevelopment', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i) {
        (0, f.useDidMount)(function () {
            (0, g.warning)(!1, i);
        });
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'warning', function () {
        return _f;
    });
    var _f = function () {
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _A;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z = A => A;
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
            }, { fireImmediately: !0 });
            return () => {
                H();
            };
        }, [
            B,
            D
        ]), g.useEffect(() => {
            const H = (0, l.reaction)(() => C, () => {
                F !== JSON.stringify(m.default.me.editing.device.visualEditing.keyboardHelpers) && G(JSON.stringify(m.default.me.editing.device.visualEditing.keyboardHelpers));
            }, { fireImmediately: !0 });
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
                        (0, f.jsx)(_D, { children: (0, f.jsx)('div', { children: D }) })
                    ]
                })
            ]
        });
    });
    const _B = h.default.div.attrs({ className: 'maxAll flex' })(w || (w = z`
  align-items: flex-end;
`)), _C = h.default.div.attrs({ className: 'maxWidth flex' })(x || (x = z`
  position: relative;
  padding: 25px;
`)), _D = h.default.div.attrs({ className: 'maxAll flex-center' })(y || (y = z`
  position: absolute;
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
  font-size: 22px;
  top: 0px;
  left: 0px;
`), r.Fonts.FugazOne);
}), c.register('.....', function (d, e) {
    a(d.exports, 'ConfirmDoneVisualEditing', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = () => {
        (0, g.default)(f.default.editingDevice);
        const m = (0, k.FetchVisualEditingPreview)(), n = (0, i.FetchCurrentlyEditedDevice)();
        (0, j.ClearVisualEditingData)(), n && m && (0, h.default)({
            deviceOption: n.deviceOption,
            id: n.id,
            x: Math.round(m.x),
            y: Math.round(m.y),
            depth: m.layers.getDepth(),
            layerId: n.layers.getOptionsLayer(),
            name: m.name,
            isPreview: !1,
            options: { ...m.options },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        });
    };
}), c.register('.....', function (d, e) {
    d.exports = import('./' + c('.....').resolve('cXcnp')).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CanAddTerrain', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        var j;
        const k = f.default.worldOptions.terrainOptions.find(l => l.id === i);
        if (!k)
            return !1;
        if (null === (j = k.blockedMapStyles) || void 0 === j ? void 0 : j.length) {
            const l = f.default.session.mapStyle;
            if (k.blockedMapStyles.includes(l))
                return !1;
        }
        const m = k.minimumRoleLevel, n = k.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(m, n);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetCurrentMapStyle', function () {
        return _g;
    });
    var f = c('.....');
    const _g = () => f.default.session.mapStyle;
});