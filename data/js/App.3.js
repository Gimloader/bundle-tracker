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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'Container', function () {
        return _E;
    }), b(d.exports, 'Content', function () {
        return _F;
    }), b(d.exports, 'default', function () {
        return _D;
    });
    var g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....');
    let z, A, B, C = D => D;
    var _D = (0, i.observer)(E => {
        const F = () => {
            E.setToHomeScreen();
        };
        (0, n.default)(a(m).Input.Keyboard.KeyCodes.ESC, F, [F]);
        const G = p.default.me.editing.device.sortingState, H = I => {
                (0, r.MoveDeviceUp)(I, G);
            }, I = J => {
                (0, r.MoveDeviceDown)(J, G);
            }, J = K => {
                const L = G.filter(M => M.layer === K);
                return L.map((M, N) => (0, g.jsx)(o.SortableDevice, {
                    onUp: 0 === N && K === q.default.DevicesAboveCharacters ? void 0 : H,
                    onDown: N === L.length - 1 && K === q.default.DevicesUnderCharacters ? void 0 : I,
                    deviceId: M.deviceId,
                    deviceName: (0, s.FetchDeviceName)(M.deviceId),
                    layer: M.layer,
                    y: M.y,
                    depth: M.depth,
                    globalDepth: M.globalDepth
                }, M.deviceId));
            }, K = J(q.default.DevicesAboveCharacters), L = J(q.default.DepthSortedCharactersAndDevices), M = J(q.default.DevicesUnderCharacters);
        return (0, g.jsx)(l.default, {
            className: 'maxAll',
            children: (0, g.jsx)(_E, {
                onClick: F,
                children: (0, g.jsxs)(_F, {
                    onClick: N => N.stopPropagation(),
                    children: [
                        (0, g.jsx)(w.default, {
                            onClick: F,
                            padding: 20,
                            fontSize: 20
                        }),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'In Front' : 'Above',
                                    layerDescription: (0, x.isPlatformer)() ? `In front of players and ${ y.default.terrain.singular }` : 'Above players',
                                    devicesInLayer: K.length
                                }),
                                K.length ? (0, g.jsx)(_H, { children: K }) : null
                            ]
                        }),
                        (0, g.jsx)(_I, {}),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'Between' : 'Primary',
                                    layerDescription: (0, x.isPlatformer)() ? `In front of players, but behind ${ y.default.terrain.singular }` : 'Above or below players depending on their position',
                                    devicesInLayer: L.length
                                }),
                                L.length ? (0, g.jsx)(_H, { children: L }) : null
                            ]
                        }),
                        (0, g.jsx)(_I, {}),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsx)(v.default, {
                                    layerName: (0, x.isPlatformer)() ? 'Behind' : 'Below',
                                    layerDescription: (0, x.isPlatformer)() ? `Behind players and ${ y.default.terrain.singular }` : 'Under players',
                                    devicesInLayer: M.length
                                }),
                                M.length ? (0, g.jsx)(_H, { children: M }) : null
                            ]
                        })
                    ]
                })
            })
        });
    });
    const _E = (0, j.default)(t.VerticallyCentered).attrs({ className: 'maxAll' })(z || (z = C``)), _F = (0, j.default)(u.motion.div).attrs({
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
`), k.default.White), _G = j.default.div.attrs({ className: 'maxWidth' })(B || (B = C``)), _H = I => (0, g.jsx)(h.default, {
            size: 10,
            direction: 'vertical',
            className: 'maxWidth',
            children: I.children
        }), _I = () => (0, g.jsx)('div', { style: { height: 30 } });
}), c.register('.....', function (d, e) {
    b(d.exports, 'SortableDevice', function () {
        return _F;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    c('.....');
    var k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z, A, B, C, D, E = F => F;
    const _F = (0, t.observer)(G => {
            const {
                token: {borderRadius: H}
            } = i.default.useToken();
            return (0, f.jsxs)(_G, {
                onMouseEnter: () => {
                    l.default.me.editing.device.currentlySortedDeviceId = G.deviceId;
                },
                onMouseLeave: () => {
                    l.default.me.editing.device.currentlySortedDeviceId === G.deviceId && (l.default.me.editing.device.currentlySortedDeviceId = '');
                },
                onClick: () => {
                    if (l.default.me.editing.device.currentlySortedDeviceId = '', l.default.me.currentAction === m.default.none) {
                        const I = (0, o.default)().worldManager.devices.getDeviceById(G.deviceId);
                        I && (l.default.me.editing.device.currentlyEditedDevice = {
                            id: I.id,
                            deviceOptionId: I.deviceOption.id
                        }, (0, n.default)(m.default.editingDevice), (0, v.EmitTutorialEvent)({
                            event: v.TutorialEventName.OPEN_DEVICE_OPTIONS,
                            device: I
                        }));
                    }
                },
                layout: !0,
                layoutId: `sort-${ G.deviceId }`,
                children: [
                    (0, f.jsxs)(_H, {
                        style: { borderRadius: H },
                        children: [
                            (0, f.jsx)(j.default.Text, {
                                style: {
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden'
                                },
                                children: G.deviceName
                            }),
                            (0, s.default)() ? (0, f.jsx)('div', {
                                style: { flexShrink: 0 },
                                children: (0, f.jsx)(h.default, {
                                    menu: { items: (0, r.default)({ props: G }) },
                                    children: (0, f.jsx)(g.default, {
                                        icon: (0, f.jsx)(q.default, { name: 'far fa-ellipsis-h' }),
                                        type: 'text',
                                        onClick: I => {
                                            I.stopPropagation();
                                        }
                                    })
                                })
                            }) : null
                        ]
                    }),
                    (0, s.default)() ? (0, f.jsxs)(_I, {
                        onClick: I => I.stopPropagation(),
                        children: [
                            (0, f.jsx)(g.default, {
                                icon: (0, f.jsx)(q.default, { name: 'fas fa-arrow-up' }),
                                disabled: !G.onUp,
                                onClick: I => {
                                    I.stopPropagation(), null == G || G.onUp(G.deviceId);
                                },
                                type: 'text'
                            }),
                            (0, f.jsx)(g.default, {
                                icon: (0, f.jsx)(q.default, { name: 'fas fa-arrow-down' }),
                                type: 'text',
                                disabled: !G.onDown,
                                onClick: I => {
                                    I.stopPropagation(), null == G || G.onDown(G.deviceId);
                                }
                            })
                        ]
                    }) : null
                ]
            });
        }), _G = (0, k.default)(u.motion.div).attrs({ className: 'maxWidth flex vc' })(w || (w = E``)), _H = (0, k.default)(p.VerticallyCentered).attrs({ className: 'between' })(x || (x = E`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 12px 10px 18px;
  flex: 1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`)), _I = (0, k.default)(p.VerticallyCentered)(y || (y = E`
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
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = m => {
        const {props: n} = m, o = [];
        return n.depth !== n.y && o.push({
            key: 'reset-natural',
            label: 'Reset To Natural Depth',
            icon: (0, f.jsx)(g.default, { name: 'fas fa-bring-forward' }),
            onClick: (0, j.default)(() => (0, k.ResetDeviceDepth)(n.deviceId))
        }), (0, h.IsDeviceOnLayer)(n.deviceId, i.default.DevicesAboveCharacters) || o.push({
            key: 'above-layer',
            label: 'Move To Above Layer',
            icon: (0, f.jsx)(g.default, { name: 'fas fa-level-up' }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(n.deviceId, i.default.DevicesAboveCharacters))
        }), (0, h.IsDeviceOnLayer)(n.deviceId, i.default.DepthSortedCharactersAndDevices) || o.push({
            key: 'primary-layer',
            label: 'Move To Primary Layer',
            icon: (0, f.jsx)(g.default, { name: 'fas fa-dot-circle' }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(n.deviceId, i.default.DepthSortedCharactersAndDevices))
        }), (0, h.IsDeviceOnLayer)(n.deviceId, i.default.DevicesUnderCharacters) || o.push({
            key: 'below-layer',
            label: 'Move To Below Layer',
            icon: (0, f.jsx)(g.default, { name: 'fas fa-level-down' }),
            onClick: (0, j.default)(() => (0, h.MoveDeviceToLayer)(n.deviceId, i.default.DevicesUnderCharacters))
        }), o;
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'MoveDeviceToLayer', function () {
        return _h;
    }), b(d.exports, 'IsDeviceOnLayer', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const _h = (i, j) => {
            const k = (0, g.default)().worldManager.devices.getDeviceById(i);
            k && k.layers.getLayer() !== j && (0, f.default)({
                depth: k.layers.getOptionsDepth(),
                layerId: j,
                name: k.name,
                deviceOption: k.deviceOption,
                id: k.id,
                isPreview: !1,
                options: k.options,
                placedByClient: !1,
                state: k.deviceOption.defaultState,
                x: k.x,
                y: k.y
            });
        }, _i = (j, k) => {
            const l = (0, g.default)().worldManager.devices.getDeviceById(j);
            return !!l && l.layers.getLayer() === k;
        };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
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
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => h => {
        h.domEvent.stopPropagation(), g && g();
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'ResetDeviceDepth', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        const j = (0, g.default)().worldManager.devices.getDeviceById(i);
        j && (0, f.default)({
            depth: void 0,
            layerId: j.layers.getOptionsLayer(),
            name: j.name,
            deviceOption: j.deviceOption,
            id: j.id,
            isPreview: !1,
            options: j.options,
            placedByClient: !1,
            state: j.deviceOption.defaultState,
            x: j.x,
            y: j.y
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'MoveDeviceUp', function () {
        return _l;
    }), b(d.exports, 'MoveDeviceDown', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = (m, n) => {
            const o = n.findIndex(p => p.deviceId === m);
            if (n[o] && n[o - 1] && n[o].globalDepth === n[o - 1].globalDepth)
                return void _o(n, o, o - 1);
            const p = (0, h.GetDepthAfterMoveUp)(n[o], n[o - 2], n[o - 1]), q = (0, g.default)().worldManager.devices.getDeviceById(m);
            if (!q)
                return;
            const {
                depthOnLayer: r,
                layer: s
            } = (0, i.GetLayerAndLocalDepth)(p);
            n[o].layer = s, n[o].depth = r, n[o].globalDepth = p, (0, f.default)({
                depth: r,
                layerId: s,
                name: q.name,
                deviceOption: q.deviceOption,
                id: q.id,
                isPreview: !1,
                options: q.options,
                placedByClient: !1,
                state: q.deviceOption.defaultState,
                x: q.x,
                y: q.y
            }), _n(n);
        }, _m = (n, o) => {
            const p = o.findIndex(q => q.deviceId === n);
            if (o[p] && o[p + 1] && o[p].globalDepth === o[p + 1].globalDepth)
                return void _o(o, p, p + 1);
            const q = (0, h.GetDepthAfterMoveDown)(o[p], o[p + 1], o[p + 2]), r = (0, g.default)().worldManager.devices.getDeviceById(n);
            if (!r)
                return;
            const {
                depthOnLayer: s,
                layer: t
            } = (0, i.GetLayerAndLocalDepth)(q);
            o[p].layer = t, o[p].depth = s, o[p].globalDepth = q, (0, f.default)({
                depth: s,
                layerId: t,
                name: r.name,
                deviceOption: r.deviceOption,
                id: r.id,
                isPreview: !1,
                options: r.options,
                placedByClient: !1,
                state: r.deviceOption.defaultState,
                x: r.x,
                y: r.y
            }), _n(o);
        }, _n = o => {
            o = o.sort((p, q) => q.globalDepth - p.globalDepth);
            const p = [];
            let q = !0;
            for (; q && !k.default.me.editing.device.usingMultiselect;) {
                q = !1;
                for (let r = 0; r < o.length; r++) {
                    const s = o[r], t = (0, i.GetGlobalDepth)(s.y, s.layer);
                    if (!(t === s.globalDepth)) {
                        const u = 0 === r || o[r - 1].globalDepth > t, v = r === o.length - 1 || o[r + 1].globalDepth < t;
                        u && v && (s.globalDepth = t, s.depth = (0, i.GetLayerAndLocalDepth)(t).depthOnLayer, p.push(s), q = !0);
                    }
                }
                p.forEach(w => {
                    (0, v.ResetDeviceDepth)(w.deviceId);
                });
            }
        }, _o = (p, q, r) => {
            const s = p[q];
            p[q] = p[r], p[r] = s;
            const t = (0, g.default)().worldManager.devices.allDevices.findIndex(u => u.id === p[r].deviceId), u = (0, g.default)().worldManager.devices.allDevices.findIndex(v => v.id === p[q].deviceId), v = (0, g.default)().worldManager.devices.allDevices[t];
            (0, g.default)().worldManager.devices.allDevices[t] = (0, g.default)().worldManager.devices.allDevices[u], (0, g.default)().worldManager.devices.allDevices[u] = v;
        };
}), c.register('.....', function (d, e) {
    b(d.exports, 'GetDepthAfterMoveUp', function () {
        return _k;
    }), b(d.exports, 'GetDepthAfterMoveDown', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....');
    const h = (i, j) => {
            const k = i.layer === j.layer, l = _m(i.layer) === j.layer;
            if (k) {
                return Math.max(j.globalDepth + 1, (0, g.GetGlobalDepth)(i.y, i.layer));
            }
            if (l) {
                return Math.min(j.globalDepth - 1, (0, g.GetGlobalDepth)(i.y, j.layer));
            }
            return (0, g.GetGlobalDepth)(i.y, f.default.DepthSortedCharactersAndDevices);
        }, i = (j, k) => {
            const l = j.layer === k.layer, m = _n(j.layer) === k.layer;
            if (l) {
                return Math.min(k.globalDepth - 1, (0, g.GetGlobalDepth)(j.y, j.layer));
            }
            if (m) {
                return Math.max(k.globalDepth + 1, (0, g.GetGlobalDepth)(j.y, k.layer));
            }
            return (0, g.GetGlobalDepth)(j.y, f.default.DepthSortedCharactersAndDevices);
        }, j = (k, l, m) => {
            const n = (0, g.GetLayerAndLocalDepth)(m.globalDepth).layer, o = (0, g.GetGlobalDepth)(k.y, n);
            return o > m.globalDepth && o < l.globalDepth ? o : (l.globalDepth + m.globalDepth) / 2;
        }, _k = (l, m, n) => {
            if (!n) {
                const o = _m(l.layer);
                if (!o)
                    return l.globalDepth;
                return (0, g.GetGlobalDepth)(l.y, o);
            }
            return o ? n.layer !== o.layer || l.layer !== n.layer ? h(l, n) : j(l, o, n) : h(l, n);
        }, _l = (m, n, o) => {
            if (!n) {
                const p = _n(m.layer);
                if (!p)
                    return m.globalDepth;
                return (0, g.GetGlobalDepth)(m.y, p);
            }
            return o ? o.layer !== p.layer || m.layer !== p.layer ? i(m, p) : j(m, p, o) : i(m, p);
        }, _m = n => n === f.default.DepthSortedCharactersAndDevices ? f.default.DevicesAboveCharacters : n === f.default.DevicesUnderCharacters ? f.default.DepthSortedCharactersAndDevices : null, _n = o => o === f.default.DepthSortedCharactersAndDevices ? f.default.DevicesUnderCharacters : o === f.default.DevicesAboveCharacters ? f.default.DepthSortedCharactersAndDevices : null;
}), c.register('.....', function (d, e) {
    b(d.exports, 'FetchDeviceName', function () {
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
    b(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    i = c('.....'), j = c('.....');
    let m, n, o, p = q => q;
    var _q = r => {
        const {
            token: {borderRadius: s}
        } = i.default.useToken();
        return (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: (0, f.jsx)(j.default.Title, {
                        level: 4,
                        style: { fontFamily: h.Fonts.FugazOne },
                        children: r.layerName
                    })
                }),
                (0, f.jsx)(j.default.Text, { children: r.layerDescription }),
                r.devicesInLayer ? (0, f.jsx)('div', { style: { height: 10 } }) : (0, f.jsx)(_t, {
                    style: { borderRadius: s },
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
    const _r = g.default.div.attrs({ className: 'maxWidth' })(m || (m = p``)), _s = g.default.div(n || (n = p`
  text-transform: uppercase;
`)), _t = (0, g.default)(l.Centered)(o || (o = p`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
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