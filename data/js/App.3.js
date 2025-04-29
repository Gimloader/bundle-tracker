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
c.register('3ydbD', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'Container', function() {
        return _E;
    }), b(d.exports, 'Content', function() {
        return _F;
    }), b(d.exports, 'default', function() {
        return _D;
    });
    var g = c('gRbUn'),
        h = c('E2AMI26'),
        i = c('6jmvl');
    c('O0Kav');
    var j = c('u4s09'),
        k = c('HOIhZ'),
        l = c('UkybP'),
        m = c('ddhGF'),
        n = c('J8L14'),
        o = c('mQ0kR'),
        p = c('fI6of'),
        q = c('GIe9o'),
        r = c('YhkI2'),
        s = c('+FJvw1'),
        t = c('MgONH'),
        u = c('9aZ6t'),
        v = c('OezES'),
        w = c('V/q8i'),
        x = c('UCu0V'),
        y = c('gp8Qp0');
    let z, A, B, C = a => a;
    var _D = (0, i.observer)(b => {
        const E = () => {
            b.setToHomeScreen();
        };
        (0, n.default)(a(m).Input.Keyboard.KeyCodes.ESC, E, [E]);
        const F = p.default.me.editing.device.sortingState,
            G = a => {
                (0, r.MoveDeviceUp)(a, F);
            },
            H = a => {
                (0, r.MoveDeviceDown)(a, F);
            },
            I = a => {
                const J = F.filter(J => J.layer === a);
                return J.map((E, F) => (0, g.jsx)(o.SortableDevice, {
                    onUp: 0 === F && a === q.default.DevicesAboveCharacters ? void 0 : G,
                    onDown: F === J.length - 1 && a === q.default.DevicesUnderCharacters ? void 0 : H,
                    deviceId: E.deviceId,
                    deviceName: (0, s.FetchDeviceName)(E.deviceId),
                    layer: E.layer,
                    y: E.y,
                    depth: E.depth,
                    globalDepth: E.globalDepth
                }, E.deviceId));
            },
            J = I(q.default.DevicesAboveCharacters),
            K = I(q.default.DepthSortedCharactersAndDevices),
            L = I(q.default.DevicesUnderCharacters);
        return (0, g.jsx)(l.default, {
            className: 'maxAll',
            children: (0, g.jsx)(_E, {
                onClick: E,
                children: (0, g.jsxs)(_F, {
                    onClick: a => a.stopPropagation(),
                    children: [
                        (0, g.jsx)(w.default, {
                            onClick: E,
                            padding: 20,
                            fontSize: 20
                        }),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'In Front' : 'Above',
                                    layerDescription: (0, x.isPlatformer)() ? `In front of players and ${ y.default.terrain.singular }` : 'Above players',
                                    devicesInLayer: J.length
                                }),
                                J.length ? (0, g.jsx)(_H, {
                                    children: J
                                }) : null
                            ]
                        }),
                        (0, g.jsx)(_I, {}),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'Between' : 'Primary',
                                    layerDescription: (0, x.isPlatformer)() ? `In front of players, but behind ${ y.default.terrain.singular }` : 'Above or below players depending on their position',
                                    devicesInLayer: K.length
                                }),
                                K.length ? (0, g.jsx)(_H, {
                                    children: K
                                }) : null
                            ]
                        }),
                        (0, g.jsx)(_I, {}),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'Behind' : 'Below',
                                    layerDescription: (0, x.isPlatformer)() ? `Behind players and ${ y.default.terrain.singular }` : 'Under players',
                                    devicesInLayer: L.length
                                }),
                                L.length ? (0, g.jsx)(_H, {
                                    children: L
                                }) : null
                            ]
                        })
                    ]
                })
            })
        });
    });
    const _E = (0, j.default)(t.VerticallyCentered).attrs({
            className: 'maxAll'
        })(z || (z = C``)),
        _F = (0, j.default)(u.motion.div).attrs({
            className: 'maxHeight scroll-y medium-shadow',
            initial: {
                x: '-100%',
                opacity: 0.25
            },
            animate: {
                x: '0%',
                opacity: 1
            },
            exit: {
                x: '-100%',
                opacity: 0.25
            },
            transition: {
                duration: 0.2,
                ease: 'easeOut'
            }
        })(A || (A = C`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
  padding: 20px;
  width: 410px;
`), k.default.White),
        _G = j.default.div.attrs({
            className: 'maxWidth'
        })(B || (B = C``)),
        _H = a => (0, g.jsx)(h.default, {
            size: 10,
            direction: 'vertical',
            className: 'maxWidth',
            children: a.children
        }),
        _I = () => (0, g.jsx)('div', {
            style: {
                height: 30
            }
        });
}), c.register('mQ0kR', function(d, e) {
    b(d.exports, 'SortableDevice', function() {
        return _F;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('M3JwW'),
        i = c('NmQt6'),
        j = c('22RS1');
    c('O0Kav');
    var k = c('u4s09'),
        l = c('fI6of'),
        m = c('SxihY'),
        n = c('LihP5'),
        o = c('heTaO'),
        p = c('MgONH'),
        q = c('t52Ep'),
        r = c('j1hKz'),
        s = c('9N6Bn'),
        t = c('6jmvl'),
        u = c('9aZ6t'),
        v = c('qIlyp');
    let w, x, y, z, A, B, C, D, E = d => d;
    const _F = (0, t.observer)(d => {
            const {
                token: {
                    borderRadius: G
                }
            } = i.default.useToken();
            return (0, f.jsxs)(_G, {
                onMouseEnter: () => {
                    l.default.me.editing.device.currentlySortedDeviceId = d.deviceId;
                },
                onMouseLeave: () => {
                    l.default.me.editing.device.currentlySortedDeviceId === d.deviceId && (l.default.me.editing.device.currentlySortedDeviceId = '');
                },
                onClick: () => {
                    if (l.default.me.editing.device.currentlySortedDeviceId = '', l.default.me.currentAction === m.default.none) {
                        const H = (0, o.default)().worldManager.devices.getDeviceById(d.deviceId);
                        H && (l.default.me.editing.device.currentlyEditedDevice = {
                            id: H.id,
                            deviceOptionId: H.deviceOption.id
                        }, (0, n.default)(m.default.editingDevice), (0, v.EmitTutorialEvent)({
                            event: v.TutorialEventName.OPEN_DEVICE_OPTIONS,
                            device: H
                        }));
                    }
                },
                layout: !0,
                layoutId: `sort-${ d.deviceId }`,
                children: [
                    (0, f.jsxs)(_H, {
                        style: {
                            borderRadius: G
                        },
                        children: [
                            (0, f.jsx)(j.default.Text, {
                                style: {
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden'
                                },
                                children: d.deviceName
                            }),
                            (0, s.default)() ? (0, f.jsx)('div', {
                                style: {
                                    flexShrink: 0
                                },
                                children: (0, f.jsx)(h.default, {
                                    menu: {
                                        items: (0, r.default)({
                                            props: d
                                        })
                                    },
                                    children: (0, f.jsx)(g.default, {
                                        icon: (0, f.jsx)(q.default, {
                                            name: 'far fa-ellipsis-h'
                                        }),
                                        type: 'text',
                                        onClick: d => {
                                            d.stopPropagation();
                                        }
                                    })
                                })
                            }) : null
                        ]
                    }),
                    (0, s.default)() ? (0, f.jsxs)(_I, {
                        onClick: d => d.stopPropagation(),
                        children: [
                            (0, f.jsx)(g.default, {
                                icon: (0, f.jsx)(q.default, {
                                    name: 'fas fa-arrow-up'
                                }),
                                disabled: !d.onUp,
                                onClick: G => {
                                    G.stopPropagation(), null == d || d.onUp(d.deviceId);
                                },
                                type: 'text'
                            }),
                            (0, f.jsx)(g.default, {
                                icon: (0, f.jsx)(q.default, {
                                    name: 'fas fa-arrow-down'
                                }),
                                type: 'text',
                                disabled: !d.onDown,
                                onClick: G => {
                                    G.stopPropagation(), null == d || d.onDown(d.deviceId);
                                }
                            })
                        ]
                    }) : null
                ]
            });
        }),
        _G = (0, k.default)(u.motion.div).attrs({
            className: 'maxWidth flex vc'
        })(w || (w = E``)),
        _H = (0, k.default)(p.VerticallyCentered).attrs({
            className: 'between'
        })(x || (x = E`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 12px 10px 18px;
  flex: 1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`)),
        _I = (0, k.default)(p.VerticallyCentered)(y || (y = E`
  margin-left: 5px;
  flex-shrink: 0;
`));
    k.default.div(z || (z = E`
  overflow: hidden;
  margin-right: 15px;
`)), k.default.div(A || (A = E`
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)), k.default.div(B || (B = E`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`)), k.default.div(C || (C = E`
  display: flex;
  align-items: center;
`)), k.default.div(D || (D = E`
  display: flex;
  flex-direction: column;
`));
}), c.register('j1hKz', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('t52Ep'),
        h = c('XEF+7'),
        i = c('GIe9o'),
        j = c('E6YpH0'),
        k = c('ryXdX');
    var _l = d => {
        const {
            props: m
        } = d, n = [];
        return m.depth !== m.y && n.push({
            key: 'reset-natural',
            label: 'Reset To Natural Depth',
            icon: (0, f.jsx)(g.default, {
                name: 'fas fa-bring-forward'
            }),
            onClick: (0, j.default)(() => (0, k.ResetDeviceDepth)(m.deviceId))
        }), (0, h.IsDeviceOnLayer)(m.deviceId, i.default.DevicesAboveCharacters) || n.push({
            key: 'above-layer',
            label: 'Move To Above Layer',
            icon: (0, f.jsx)(g.default, {
                name: 'fas fa-level-up'
            }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(m.deviceId, i.default.DevicesAboveCharacters))
        }), (0, h.IsDeviceOnLayer)(m.deviceId, i.default.DepthSortedCharactersAndDevices) || n.push({
            key: 'primary-layer',
            label: 'Move To Primary Layer',
            icon: (0, f.jsx)(g.default, {
                name: 'fas fa-dot-circle'
            }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(m.deviceId, i.default.DepthSortedCharactersAndDevices))
        }), (0, h.IsDeviceOnLayer)(m.deviceId, i.default.DevicesUnderCharacters) || n.push({
            key: 'below-layer',
            label: 'Move To Below Layer',
            icon: (0, f.jsx)(g.default, {
                name: 'fas fa-level-down'
            }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(m.deviceId, i.default.DevicesUnderCharacters))
        }), n;
    };
}), c.register('XEF+7', function(d, e) {
    b(d.exports, 'MoveDeviceToLayer', function() {
        return _h;
    }), b(d.exports, 'IsDeviceOnLayer', function() {
        return _i;
    });
    var f = c('AhL/f0'),
        g = c('heTaO');
    const _h = (d, b) => {
            const i = (0, g.default)().worldManager.devices.getDeviceById(d);
            i && i.layers.getLayer() !== b && (0, f.default)({
                depth: i.layers.getOptionsDepth(),
                layerId: b,
                name: i.name,
                deviceOption: i.deviceOption,
                id: i.id,
                isPreview: !1,
                options: i.options,
                placedByClient: !1,
                state: i.deviceOption.defaultState,
                x: i.x,
                y: i.y
            });
        },
        _i = (d, b) => {
            const j = (0, g.default)().worldManager.devices.getDeviceById(d);
            return !!j && j.layers.getLayer() === b;
        };
}), c.register('AhL/f0', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('heTaO'),
        g = c('2LtPo'),
        h = c('llkVK'),
        i = c('5u9xs');
    var _j = d => {
        const k = (0, f.default)().worldManager.devices.getDeviceById(d.id);
        if (!k)
            return;
        const l = (0, i.default)(d.id);
        if (!l)
            return;
        const m = d.hooks || l.hooks;
        (0, g.default)({
            ...d,
            hooks: m,
            placeInstantly: !0,
            onPlace: l => {
                l && (0, h.default)({
                    id: k.id,
                    deviceTypeId: k.deviceOption.id,
                    options: JSON.stringify(d.options),
                    x: d.x,
                    y: d.y,
                    depth: l.layers.getOptionsDepth(),
                    layerId: l.layers.getOptionsLayer(),
                    name: d.name,
                    hooks: m
                });
            }
        });
    };
}), c.register('E6YpH0', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = d => b => {
        b.domEvent.stopPropagation(), d && d();
    };
}), c.register('ryXdX', function(d, e) {
    b(d.exports, 'ResetDeviceDepth', function() {
        return _h;
    });
    var f = c('AhL/f0'),
        g = c('heTaO');
    const _h = d => {
        const i = (0, g.default)().worldManager.devices.getDeviceById(d);
        i && (0, f.default)({
            depth: void 0,
            layerId: i.layers.getOptionsLayer(),
            name: i.name,
            deviceOption: i.deviceOption,
            id: i.id,
            isPreview: !1,
            options: i.options,
            placedByClient: !1,
            state: i.deviceOption.defaultState,
            x: i.x,
            y: i.y
        });
    };
}), c.register('YhkI2', function(d, e) {
    b(d.exports, 'MoveDeviceUp', function() {
        return _l;
    }), b(d.exports, 'MoveDeviceDown', function() {
        return _m;
    });
    var f = c('AhL/f0'),
        g = c('heTaO'),
        h = c('cD2Sb'),
        i = c('mSv2o'),
        j = c('ryXdX'),
        k = c('fI6of');
    const _l = (d, b) => {
            const m = b.findIndex(b => b.deviceId === d);
            if (b[m] && b[m - 1] && b[m].globalDepth === b[m - 1].globalDepth)
                return void _o(b, m, m - 1);
            const n = (0, h.GetDepthAfterMoveUp)(b[m], b[m - 2], b[m - 1]),
                o = (0, g.default)().worldManager.devices.getDeviceById(d);
            if (!o)
                return;
            const {
                depthOnLayer: p,
                layer: q
            } = (0, i.GetLayerAndLocalDepth)(n);
            b[m].layer = q, b[m].depth = p, b[m].globalDepth = n, (0, f.default)({
                depth: p,
                layerId: q,
                name: o.name,
                deviceOption: o.deviceOption,
                id: o.id,
                isPreview: !1,
                options: o.options,
                placedByClient: !1,
                state: o.deviceOption.defaultState,
                x: o.x,
                y: o.y
            }), _n(b);
        },
        _m = (d, b) => {
            const n = b.findIndex(b => b.deviceId === d);
            if (b[n] && b[n + 1] && b[n].globalDepth === b[n + 1].globalDepth)
                return void _o(b, n, n + 1);
            const o = (0, h.GetDepthAfterMoveDown)(b[n], b[n + 1], b[n + 2]),
                p = (0, g.default)().worldManager.devices.getDeviceById(d);
            if (!p)
                return;
            const {
                depthOnLayer: q,
                layer: r
            } = (0, i.GetLayerAndLocalDepth)(o);
            b[n].layer = r, b[n].depth = q, b[n].globalDepth = o, (0, f.default)({
                depth: q,
                layerId: r,
                name: p.name,
                deviceOption: p.deviceOption,
                id: p.id,
                isPreview: !1,
                options: p.options,
                placedByClient: !1,
                state: p.deviceOption.defaultState,
                x: p.x,
                y: p.y
            }), _n(b);
        },
        _n = d => {
            d = d.sort((d, b) => b.globalDepth - d.globalDepth);
            const o = [];
            let p = !0;
            for (; p && !k.default.me.editing.device.usingMultiselect;) {
                p = !1;
                for (let q = 0; q < d.length; q++) {
                    const r = d[q],
                        s = (0, i.GetGlobalDepth)(r.y, r.layer);
                    if (!(s === r.globalDepth)) {
                        const t = 0 === q || d[q - 1].globalDepth > s,
                            u = q === d.length - 1 || d[q + 1].globalDepth < s;
                        t && u && (r.globalDepth = s, r.depth = (0, i.GetLayerAndLocalDepth)(s).depthOnLayer, o.push(r), p = !0);
                    }
                }
                o.forEach(d => {
                    (0, j.ResetDeviceDepth)(d.deviceId);
                });
            }
        },
        _o = (d, b, c) => {
            const p = d[b];
            d[b] = d[c], d[c] = p;
            const q = (0, g.default)().worldManager.devices.allDevices.findIndex(b => b.id === d[c].deviceId),
                r = (0, g.default)().worldManager.devices.allDevices.findIndex(c => c.id === d[b].deviceId),
                s = (0, g.default)().worldManager.devices.allDevices[q];
            (0, g.default)().worldManager.devices.allDevices[q] = (0, g.default)().worldManager.devices.allDevices[r], (0, g.default)().worldManager.devices.allDevices[r] = s;
        };
}), c.register('cD2Sb', function(d, e) {
    b(d.exports, 'GetDepthAfterMoveUp', function() {
        return _k;
    }), b(d.exports, 'GetDepthAfterMoveDown', function() {
        return _l;
    });
    var f = c('GIe9o'),
        g = c('mSv2o');
    const h = (d, b) => {
            const i = d.layer === b.layer,
                j = _m(d.layer) === b.layer;
            if (i) {
                return Math.max(b.globalDepth + 1, (0, g.GetGlobalDepth)(d.y, d.layer));
            }
            if (j) {
                return Math.min(b.globalDepth - 1, (0, g.GetGlobalDepth)(d.y, b.layer));
            }
            return (0, g.GetGlobalDepth)(d.y, f.default.DepthSortedCharactersAndDevices);
        },
        i = (d, b) => {
            const j = d.layer === b.layer,
                k = _n(d.layer) === b.layer;
            if (j) {
                return Math.min(b.globalDepth - 1, (0, g.GetGlobalDepth)(d.y, d.layer));
            }
            if (k) {
                return Math.max(b.globalDepth + 1, (0, g.GetGlobalDepth)(d.y, b.layer));
            }
            return (0, g.GetGlobalDepth)(d.y, f.default.DepthSortedCharactersAndDevices);
        },
        j = (d, b, c) => {
            const k = (0, g.GetLayerAndLocalDepth)(c.globalDepth).layer,
                l = (0, g.GetGlobalDepth)(d.y, k);
            return l > c.globalDepth && l < b.globalDepth ? l : (b.globalDepth + c.globalDepth) / 2;
        },
        _k = (d, b, c) => {
            if (!c) {
                const l = _m(d.layer);
                if (!l)
                    return d.globalDepth;
                return (0, g.GetGlobalDepth)(d.y, l);
            }
            return b ? c.layer !== b.layer || d.layer !== c.layer ? h(d, c) : j(d, b, c) : h(d, c);
        },
        _l = (d, b, c) => {
            if (!b) {
                const m = _n(d.layer);
                if (!m)
                    return d.globalDepth;
                return (0, g.GetGlobalDepth)(d.y, m);
            }
            return c ? c.layer !== b.layer || d.layer !== b.layer ? i(d, b) : j(d, b, c) : i(d, b);
        },
        _m = d => d === f.default.DepthSortedCharactersAndDevices ? f.default.DevicesAboveCharacters : d === f.default.DevicesUnderCharacters ? f.default.DepthSortedCharactersAndDevices : null,
        _n = d => d === f.default.DepthSortedCharactersAndDevices ? f.default.DevicesUnderCharacters : d === f.default.DevicesAboveCharacters ? f.default.DepthSortedCharactersAndDevices : null;
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
}), c.register('OezES', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('NmQt6'),
        j = c('22RS1'),
        k = c('gp8Qp0'),
        l = c('MgONH');
    i = c('NmQt6'), j = c('22RS1');
    let m, n, o, p = d => d;
    var _q = d => {
        const {
            token: {
                borderRadius: r
            }
        } = i.default.useToken();
        return (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: (0, f.jsx)(j.default.Title, {
                        level: 4,
                        style: {
                            fontFamily: h.Fonts.FugazOne
                        },
                        children: d.layerName
                    })
                }),
                (0, f.jsx)(j.default.Text, {
                    children: d.layerDescription
                }),
                d.devicesInLayer ? (0, f.jsx)('div', {
                    style: {
                        height: 10
                    }
                }) : (0, f.jsx)(_t, {
                    style: {
                        borderRadius: r
                    },
                    children: (0, f.jsxs)(j.default.Text, {
                        children: [
                            'No ',
                            k.default.device.plural,
                            ' or',
                            ' ',
                            k.default.prop.plural,
                            ' on this layer'
                        ]
                    })
                })
            ]
        });
    };
    const _r = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = p``)),
        _s = g.default.div(n || (n = p`
  text-transform: uppercase;
`)),
        _t = (0, g.default)(l.Centered)(o || (o = p`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`));
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
});