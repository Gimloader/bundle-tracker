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
a.register('6vkJ5', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _H(b.exports, 'Container', function() {
        return _C;
    }), _H(b.exports, 'Content', function() {
        return _D;
    }), _H(b.exports, 'default', function() {
        return _B;
    });
    var e = a('0hzx+'),
        f = a('cvto726'),
        g = a('2x11J');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('vShe/'),
        j = a('2GeW4'),
        k = a('8WvaZ'),
        l = a('ryWAy'),
        m = a('v80BC'),
        n = a('iWivW'),
        o = a('JqBF0'),
        p = a('SOklz'),
        q = a('PUGQx1'),
        r = a('0HHAH'),
        s = a('TwXYL'),
        t = a('jsXPW'),
        u = a('Ct4sg'),
        v = a('JEGzD'),
        w = a('bzU3s');
    let x, y, z, A = _b => _b;
    var _B = (0, g.observer)(_H => {
        const C = () => {
            _H.setToHomeScreen();
        };
        (0, l.default)(_b(k).Input.Keyboard.KeyCodes.ESC, C, [C]);
        const D = n.default.me.editing.device.sortingState,
            E = _b => {
                (0, p.MoveDeviceUp)(_b, D);
            },
            F = _b => {
                (0, p.MoveDeviceDown)(_b, D);
            },
            G = _b => {
                const _H = D.filter(_H => _H.layer === _b);
                return _H.map((C, D) => (0, e.jsx)(m.SortableDevice, {
                    onUp: 0 === D && _b === o.default.DevicesAboveCharacters ? void 0 : E,
                    onDown: D === _H.length - 1 && _b === o.default.DevicesUnderCharacters ? void 0 : F,
                    deviceId: C.deviceId,
                    deviceName: (0, q.FetchDeviceName)(C.deviceId),
                    layer: C.layer,
                    y: C.y,
                    depth: C.depth,
                    globalDepth: C.globalDepth
                }, C.deviceId));
            },
            H = G(o.default.DevicesAboveCharacters),
            I = G(o.default.DepthSortedCharactersAndDevices),
            J = G(o.default.DevicesUnderCharacters);
        return (0, e.jsx)(j.default, {
            className: 'maxAll',
            children: (0, e.jsx)(_C, {
                onClick: C,
                children: (0, e.jsxs)(_D, {
                    onClick: _b => _b.stopPropagation(),
                    children: [
                        (0, e.jsx)(u.default, {
                            onClick: C,
                            padding: 20,
                            fontSize: 20
                        }),
                        (0, e.jsxs)(_E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'In Front' : 'Above',
                                    layerDescription: (0, v.isPlatformer)() ? `In front of players and ${ w.default.terrain.singular }` : 'Above players',
                                    devicesInLayer: H.length
                                }),
                                H.length ? (0, e.jsx)(_F, {
                                    children: H
                                }) : null
                            ]
                        }),
                        (0, e.jsx)(_G, {}),
                        (0, e.jsxs)(_E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'Between' : 'Primary',
                                    layerDescription: (0, v.isPlatformer)() ? `In front of players, but behind ${ w.default.terrain.singular }` : 'Above or below players depending on their position',
                                    devicesInLayer: I.length
                                }),
                                I.length ? (0, e.jsx)(_F, {
                                    children: I
                                }) : null
                            ]
                        }),
                        (0, e.jsx)(_G, {}),
                        (0, e.jsxs)(_E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'Behind' : 'Below',
                                    layerDescription: (0, v.isPlatformer)() ? `Behind players and ${ w.default.terrain.singular }` : 'Under players',
                                    devicesInLayer: J.length
                                }),
                                J.length ? (0, e.jsx)(_F, {
                                    children: J
                                }) : null
                            ]
                        })
                    ]
                })
            })
        });
    });
    const _C = (0, h.default)(r.VerticallyCentered).attrs({
            className: 'maxAll'
        })(x || (x = A``)),
        _D = (0, h.default)(s.motion.div).attrs({
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
        })(y || (y = A`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${ 0 };
  padding: 20px;
  width: 410px;
`), i.default.White),
        _E = h.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = A``)),
        _F = _b => (0, e.jsx)(f.default, {
            size: 10,
            direction: 'vertical',
            className: 'maxWidth',
            children: _b.children
        }),
        _G = () => (0, e.jsx)('div', {
            style: {
                height: 30
            }
        });
}), a.register('v80BC', function(_b, c) {
    _E(_b.exports, 'SortableDevice', function() {
        return _D;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('/rAT0'),
        g = a('cH8qQ'),
        h = a('j2ADs');
    a('LEQ5w');
    var i = a('Axq+p'),
        j = a('iWivW'),
        k = a('11nl3'),
        l = a('mQCZt'),
        m = a('D5xLI'),
        n = a('0HHAH'),
        o = a('9R7cy'),
        p = a('a3s1V'),
        q = a('Gxfhq'),
        r = a('2x11J'),
        s = a('TwXYL'),
        t = a('L1523');
    let u, v, w, x, y, z, A, B, C = _b => _b;
    const _D = (0, r.observer)(_b => {
            const {
                token: {
                    borderRadius: _E
                }
            } = g.default.useToken();
            return (0, d.jsxs)(_E, {
                onMouseEnter: () => {
                    j.default.me.editing.device.currentlySortedDeviceId = _b.deviceId;
                },
                onMouseLeave: () => {
                    j.default.me.editing.device.currentlySortedDeviceId === _b.deviceId && (j.default.me.editing.device.currentlySortedDeviceId = '');
                },
                onClick: () => {
                    if (j.default.me.editing.device.currentlySortedDeviceId = '', j.default.me.currentAction === k.default.none) {
                        const F = (0, m.default)().worldManager.devices.getDeviceById(_b.deviceId);
                        F && (j.default.me.editing.device.currentlyEditedDevice = {
                            id: F.id,
                            deviceOptionId: F.deviceOption.id
                        }, (0, l.default)(k.default.editingDevice), (0, t.EmitTutorialEvent)({
                            event: t.TutorialEventName.OPEN_DEVICE_OPTIONS,
                            device: F
                        }));
                    }
                },
                layout: !0,
                layoutId: `sort-${ _b.deviceId }`,
                children: [
                    (0, d.jsxs)(_F, {
                        style: {
                            borderRadius: _E
                        },
                        children: [
                            (0, d.jsx)(h.default.Text, {
                                style: {
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden'
                                },
                                children: _b.deviceName
                            }),
                            (0, q.default)() ? (0, d.jsx)('div', {
                                style: {
                                    flexShrink: 0
                                },
                                children: (0, d.jsx)(f.default, {
                                    menu: {
                                        items: (0, p.default)({
                                            props: _b
                                        })
                                    },
                                    children: (0, d.jsx)(e.default, {
                                        icon: (0, d.jsx)(o.default, {
                                            name: 'far fa-ellipsis-h'
                                        }),
                                        type: 'text',
                                        onClick: _b => {
                                            _b.stopPropagation();
                                        }
                                    })
                                })
                            }) : null
                        ]
                    }),
                    (0, q.default)() ? (0, d.jsxs)(_G, {
                        onClick: _b => _b.stopPropagation(),
                        children: [
                            (0, d.jsx)(e.default, {
                                icon: (0, d.jsx)(o.default, {
                                    name: 'fas fa-arrow-up'
                                }),
                                disabled: !_b.onUp,
                                onClick: _E => {
                                    _E.stopPropagation(), null == _b || _b.onUp(_b.deviceId);
                                },
                                type: 'text'
                            }),
                            (0, d.jsx)(e.default, {
                                icon: (0, d.jsx)(o.default, {
                                    name: 'fas fa-arrow-down'
                                }),
                                type: 'text',
                                disabled: !_b.onDown,
                                onClick: _E => {
                                    _E.stopPropagation(), null == _b || _b.onDown(_b.deviceId);
                                }
                            })
                        ]
                    }) : null
                ]
            });
        }),
        _E = (0, i.default)(s.motion.div).attrs({
            className: 'maxWidth flex vc'
        })(u || (u = C``)),
        _F = (0, i.default)(n.VerticallyCentered).attrs({
            className: 'between'
        })(v || (v = C`
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
        _G = (0, i.default)(n.VerticallyCentered)(w || (w = C`
  margin-left: 5px;
  flex-shrink: 0;
`));
    i.default.div(x || (x = C`
  overflow: hidden;
  margin-right: 15px;
`)), i.default.div(y || (y = C`
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)), i.default.div(z || (z = C`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`)), i.default.div(A || (A = C`
  display: flex;
  align-items: center;
`)), i.default.div(B || (B = C`
  display: flex;
  flex-direction: column;
`));
}), a.register('a3s1V', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('9R7cy'),
        f = a('VUetN'),
        g = a('JqBF0'),
        h = a('fNsdX'),
        i = a('oubwa');
    var _j = b => {
        const {
            props: _k
        } = b, l = [];
        return _k.depth !== _k.y && l.push({
            key: 'reset-natural',
            label: 'Reset To Natural Depth',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-bring-forward'
            }),
            onClick: (0, h.default)(() => (0, i.ResetDeviceDepth)(_k.deviceId))
        }), (0, f.IsDeviceOnLayer)(_k.deviceId, g.default.DevicesAboveCharacters) || l.push({
            key: 'above-layer',
            label: 'Move To Above Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-level-up'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(_k.deviceId, g.default.DevicesAboveCharacters))
        }), (0, f.IsDeviceOnLayer)(_k.deviceId, g.default.DepthSortedCharactersAndDevices) || l.push({
            key: 'primary-layer',
            label: 'Move To Primary Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-dot-circle'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(_k.deviceId, g.default.DepthSortedCharactersAndDevices))
        }), (0, f.IsDeviceOnLayer)(_k.deviceId, g.default.DevicesUnderCharacters) || l.push({
            key: 'below-layer',
            label: 'Move To Below Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-level-down'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(_k.deviceId, g.default.DevicesUnderCharacters))
        }), l;
    };
}), a.register('VUetN', function(b, c) {
    _i(b.exports, 'MoveDeviceToLayer', function() {
        return _f;
    }), _i(b.exports, 'IsDeviceOnLayer', function() {
        return _g;
    });
    var d = a('uRAeN'),
        e = a('D5xLI');
    const _f = (b, _i) => {
            const g = (0, e.default)().worldManager.devices.getDeviceById(b);
            g && g.layers.getLayer() !== _i && (0, d.default)({
                depth: g.layers.getOptionsDepth(),
                layerId: _i,
                name: g.name,
                deviceOption: g.deviceOption,
                id: g.id,
                isPreview: !1,
                options: g.options,
                placedByClient: !1,
                state: g.deviceOption.defaultState,
                x: g.x,
                y: g.y
            });
        },
        _g = (b, _i) => {
            const h = (0, e.default)().worldManager.devices.getDeviceById(b);
            return !!h && h.layers.getLayer() === _i;
        };
}), a.register('uRAeN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('D5xLI'),
        e = a('aIyMH'),
        f = a('fy44y'),
        g = a('zZJfb');
    var _h = b => {
        const _i = (0, d.default)().worldManager.devices.getDeviceById(b.id);
        if (!_i)
            return;
        const j = (0, g.default)(b.id);
        if (!j)
            return;
        const k = b.hooks || j.hooks;
        (0, e.default)({
            ...b,
            hooks: k,
            placeInstantly: !0,
            onPlace: j => {
                j && (0, f.default)({
                    id: _i.id,
                    deviceTypeId: _i.deviceOption.id,
                    options: JSON.stringify(b.options),
                    x: b.x,
                    y: b.y,
                    depth: j.layers.getOptionsDepth(),
                    layerId: j.layers.getOptionsLayer(),
                    name: b.name,
                    hooks: k
                });
            }
        });
    };
}), a.register('fNsdX', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = b => _g => {
        _g.domEvent.stopPropagation(), b && b();
    };
}), a.register('oubwa', function(b, c) {
    _g(b.exports, 'ResetDeviceDepth', function() {
        return _f;
    });
    var d = a('uRAeN'),
        e = a('D5xLI');
    const _f = b => {
        const _g = (0, e.default)().worldManager.devices.getDeviceById(b);
        _g && (0, d.default)({
            depth: void 0,
            layerId: _g.layers.getOptionsLayer(),
            name: _g.name,
            deviceOption: _g.deviceOption,
            id: _g.id,
            isPreview: !1,
            options: _g.options,
            placedByClient: !1,
            state: _g.deviceOption.defaultState,
            x: _g.x,
            y: _g.y
        });
    };
}), a.register('SOklz', function(b, c) {
    _m(b.exports, 'MoveDeviceUp', function() {
        return _j;
    }), _m(b.exports, 'MoveDeviceDown', function() {
        return _k;
    });
    var d = a('uRAeN'),
        e = a('D5xLI'),
        f = a('alTDA'),
        g = a('r7Wu5'),
        h = a('oubwa'),
        i = a('iWivW');
    const _j = (b, _m) => {
            const k = _m.findIndex(_m => _m.deviceId === b);
            if (_m[k] && _m[k - 1] && _m[k].globalDepth === _m[k - 1].globalDepth)
                return void _m(_m, k, k - 1);
            const l = (0, f.GetDepthAfterMoveUp)(_m[k], _m[k - 2], _m[k - 1]),
                m = (0, e.default)().worldManager.devices.getDeviceById(b);
            if (!m)
                return;
            const {
                depthOnLayer: n,
                layer: o
            } = (0, g.GetLayerAndLocalDepth)(l);
            _m[k].layer = o, _m[k].depth = n, _m[k].globalDepth = l, (0, d.default)({
                depth: n,
                layerId: o,
                name: m.name,
                deviceOption: m.deviceOption,
                id: m.id,
                isPreview: !1,
                options: m.options,
                placedByClient: !1,
                state: m.deviceOption.defaultState,
                x: m.x,
                y: m.y
            }), _l(_m);
        },
        _k = (b, _m) => {
            const l = _m.findIndex(_m => _m.deviceId === b);
            if (_m[l] && _m[l + 1] && _m[l].globalDepth === _m[l + 1].globalDepth)
                return void _m(_m, l, l + 1);
            const m = (0, f.GetDepthAfterMoveDown)(_m[l], _m[l + 1], _m[l + 2]),
                n = (0, e.default)().worldManager.devices.getDeviceById(b);
            if (!n)
                return;
            const {
                depthOnLayer: o,
                layer: p
            } = (0, g.GetLayerAndLocalDepth)(m);
            _m[l].layer = p, _m[l].depth = o, _m[l].globalDepth = m, (0, d.default)({
                depth: o,
                layerId: p,
                name: n.name,
                deviceOption: n.deviceOption,
                id: n.id,
                isPreview: !1,
                options: n.options,
                placedByClient: !1,
                state: n.deviceOption.defaultState,
                x: n.x,
                y: n.y
            }), _l(_m);
        },
        _l = b => {
            b = b.sort((b, _m) => _m.globalDepth - b.globalDepth);
            const _m = [];
            let n = !0;
            for (; n && !i.default.me.editing.device.usingMultiselect;) {
                n = !1;
                for (let o = 0; o < b.length; o++) {
                    const p = b[o],
                        q = (0, g.GetGlobalDepth)(p.y, p.layer);
                    if (!(q === p.globalDepth)) {
                        const r = 0 === o || b[o - 1].globalDepth > q,
                            s = o === b.length - 1 || b[o + 1].globalDepth < q;
                        r && s && (p.globalDepth = q, p.depth = (0, g.GetLayerAndLocalDepth)(q).depthOnLayer, _m.push(p), n = !0);
                    }
                }
                _m.forEach(b => {
                    (0, h.ResetDeviceDepth)(b.deviceId);
                });
            }
        },
        _m = (b, _j, a) => {
            const n = b[_j];
            b[_j] = b[a], b[a] = n;
            const o = (0, e.default)().worldManager.devices.allDevices.findIndex(_j => _j.id === b[a].deviceId),
                p = (0, e.default)().worldManager.devices.allDevices.findIndex(a => a.id === b[_j].deviceId),
                q = (0, e.default)().worldManager.devices.allDevices[o];
            (0, e.default)().worldManager.devices.allDevices[o] = (0, e.default)().worldManager.devices.allDevices[p], (0, e.default)().worldManager.devices.allDevices[p] = q;
        };
}), a.register('alTDA', function(b, c) {
    _j(b.exports, 'GetDepthAfterMoveUp', function() {
        return _i;
    }), _j(b.exports, 'GetDepthAfterMoveDown', function() {
        return _j;
    });
    var d = a('JqBF0'),
        e = a('r7Wu5');
    const f = (b, _j) => {
            const g = b.layer === _j.layer,
                h = _k(b.layer) === _j.layer;
            if (g) {
                return Math.max(_j.globalDepth + 1, (0, e.GetGlobalDepth)(b.y, b.layer));
            }
            if (h) {
                return Math.min(_j.globalDepth - 1, (0, e.GetGlobalDepth)(b.y, _j.layer));
            }
            return (0, e.GetGlobalDepth)(b.y, d.default.DepthSortedCharactersAndDevices);
        },
        g = (b, _j) => {
            const h = b.layer === _j.layer,
                i = _l(b.layer) === _j.layer;
            if (h) {
                return Math.min(_j.globalDepth - 1, (0, e.GetGlobalDepth)(b.y, b.layer));
            }
            if (i) {
                return Math.max(_j.globalDepth + 1, (0, e.GetGlobalDepth)(b.y, _j.layer));
            }
            return (0, e.GetGlobalDepth)(b.y, d.default.DepthSortedCharactersAndDevices);
        },
        h = (b, _j, a) => {
            const i = (0, e.GetLayerAndLocalDepth)(a.globalDepth).layer,
                j = (0, e.GetGlobalDepth)(b.y, i);
            return j > a.globalDepth && j < _j.globalDepth ? j : (_j.globalDepth + a.globalDepth) / 2;
        },
        _i = (b, _j, a) => {
            if (!a) {
                const _j = _k(b.layer);
                if (!_j)
                    return b.globalDepth;
                return (0, e.GetGlobalDepth)(b.y, _j);
            }
            return _k ? a.layer !== _k.layer || b.layer !== a.layer ? f(b, a) : h(b, _k, a) : f(b, a);
        },
        _j = (b, _k, a) => {
            if (!_k) {
                const _k = _l(b.layer);
                if (!_k)
                    return b.globalDepth;
                return (0, e.GetGlobalDepth)(b.y, _k);
            }
            return a ? a.layer !== _h.layer || b.layer !== _h.layer ? g(b, _h) : h(b, _h, a) : g(b, _h);
        },
        _k = b => b === d.default.DepthSortedCharactersAndDevices ? d.default.DevicesAboveCharacters : b === d.default.DevicesUnderCharacters ? d.default.DepthSortedCharactersAndDevices : null,
        _l = b => b === d.default.DepthSortedCharactersAndDevices ? d.default.DevicesUnderCharacters : b === d.default.DevicesAboveCharacters ? d.default.DepthSortedCharactersAndDevices : null;
}), a.register('PUGQx1', function(b, c) {
    _h(b.exports, 'FetchDeviceName', function() {
        return _g;
    });
    var d = a('cPBfb'),
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
}), a.register('jsXPW', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('cH8qQ'),
        h = a('j2ADs'),
        i = a('bzU3s'),
        j = a('0HHAH');
    g = a('cH8qQ'), h = a('j2ADs');
    let k, l, m, n = b => b;
    var _o = b => {
        const {
            token: {
                borderRadius: _p
            }
        } = g.default.useToken();
        return (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(_q, {
                    children: (0, d.jsx)(h.default.Title, {
                        level: 4,
                        style: {
                            fontFamily: f.Fonts.FugazOne
                        },
                        children: b.layerName
                    })
                }),
                (0, d.jsx)(h.default.Text, {
                    children: b.layerDescription
                }),
                b.devicesInLayer ? (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }) : (0, d.jsx)(_r, {
                    style: {
                        borderRadius: _p
                    },
                    children: (0, d.jsxs)(h.default.Text, {
                        children: [
                            'No ',
                            i.default.device.plural,
                            ' or',
                            ' ',
                            i.default.prop.plural,
                            ' on this layer'
                        ]
                    })
                })
            ]
        });
    };
    const _p = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = n``)),
        _q = e.default.div(l || (l = n`
  text-transform: uppercase;
`)),
        _r = (0, e.default)(j.Centered)(m || (m = n`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`));
}), a.register('bzU3s', function(b, c) {
    t(b.exports, 'default', function() {
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
});