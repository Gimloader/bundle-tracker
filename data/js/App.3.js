function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, D) {
    Object.defineProperty(a, b, {
        get: c,
        set: D,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('3w8wZ', function(D, E) {
    var d;
    d = D.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(D.exports, 'Container', function() {
        return C;
    }), b(D.exports, 'Content', function() {
        return D;
    }), b(D.exports, 'default', function() {
        return B;
    });
    var e = c('8kSQZ'),
        f = c('5nJMd26'),
        g = c('Vlfxs');
    c('uPP4W');
    var h = c('h99Nu'),
        i = c('S/jX4'),
        j = c('EefFJ'),
        k = c('kneek'),
        l = c('+0Tb/'),
        m = c('LOC3s'),
        n = c('7Sbqr'),
        o = c('cMsWT'),
        p = c('3qk+k'),
        q = c('YARc1'),
        r = c('YimJ0'),
        s = c('b9Bct'),
        t = c('Ya3eW'),
        u = c('nbHO+'),
        v = c('HMNV0'),
        w = c('Wgw1x0');
    let x, y, z, A = a => a;
    var B = (0, g.observer)(b => {
        const C = () => {
            b.setToHomeScreen();
        };
        (0, l.default)(a(k).Input.Keyboard.KeyCodes.ESC, C, [C]);
        const D = n.default.me.editing.device.sortingState,
            E = a => {
                (0, p.MoveDeviceUp)(a, D);
            },
            F = a => {
                (0, p.MoveDeviceDown)(a, D);
            },
            G = a => {
                const H = D.filter(H => H.layer === a);
                return H.map((C, D) => (0, e.jsx)(m.SortableDevice, {
                    onUp: 0 === D && a === o.default.DevicesAboveCharacters ? void 0 : E,
                    onDown: D === H.length - 1 && a === o.default.DevicesUnderCharacters ? void 0 : F,
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
            children: (0, e.jsx)(C, {
                onClick: C,
                children: (0, e.jsxs)(D, {
                    onClick: a => a.stopPropagation(),
                    children: [
                        (0, e.jsx)(u.default, {
                            onClick: C,
                            padding: 20,
                            fontSize: 20
                        }),
                        (0, e.jsxs)(E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'In Front' : 'Above',
                                    layerDescription: (0, v.isPlatformer)() ? `In front of players and ${ w.default.terrain.singular }` : 'Above players',
                                    devicesInLayer: H.length
                                }),
                                H.length ? (0, e.jsx)(F, {
                                    children: H
                                }) : null
                            ]
                        }),
                        (0, e.jsx)(G, {}),
                        (0, e.jsxs)(E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'Between' : 'Primary',
                                    layerDescription: (0, v.isPlatformer)() ? `In front of players, but behind ${ w.default.terrain.singular }` : 'Above or below players depending on their position',
                                    devicesInLayer: I.length
                                }),
                                I.length ? (0, e.jsx)(F, {
                                    children: I
                                }) : null
                            ]
                        }),
                        (0, e.jsx)(G, {}),
                        (0, e.jsxs)(E, {
                            children: [
                                (0, e.jsx)(t.default, {
                                    layerName: (0, v.isPlatformer)() ? 'Behind' : 'Below',
                                    layerDescription: (0, v.isPlatformer)() ? `Behind players and ${ w.default.terrain.singular }` : 'Under players',
                                    devicesInLayer: J.length
                                }),
                                J.length ? (0, e.jsx)(F, {
                                    children: J
                                }) : null
                            ]
                        })
                    ]
                })
            })
        });
    });
    const C = (0, h.default)(r.VerticallyCentered).attrs({
            className: 'maxAll'
        })(x || (x = A``)),
        D = (0, h.default)(s.motion.div).attrs({
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
        E = h.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = A``)),
        F = a => (0, e.jsx)(f.default, {
            size: 10,
            direction: 'vertical',
            className: 'maxWidth',
            children: a.children
        }),
        G = () => (0, e.jsx)('div', {
            style: {
                height: 30
            }
        });
}), c.register('LOC3s', function(a, k) {
    b(a.exports, 'SortableDevice', function() {
        return D;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('M1Vx4'),
        g = c('KlhV/'),
        h = c('UzdPH');
    c('uPP4W');
    var i = c('h99Nu'),
        j = c('7Sbqr'),
        k = c('iAe3o'),
        l = c('TnPB+'),
        m = c('dAmf5'),
        n = c('YimJ0'),
        o = c('iMnBi'),
        p = c('Vxrp9'),
        q = c('c8w5r'),
        r = c('Vlfxs'),
        s = c('b9Bct'),
        t = c('D0n26');
    let u, v, w, x, y, z, A, B, C = a => a;
    const D = (0, r.observer)(a => {
            const {
                token: {
                    borderRadius: E
                }
            } = g.default.useToken();
            return (0, d.jsxs)(E, {
                onMouseEnter: () => {
                    j.default.me.editing.device.currentlySortedDeviceId = a.deviceId;
                },
                onMouseLeave: () => {
                    j.default.me.editing.device.currentlySortedDeviceId === a.deviceId && (j.default.me.editing.device.currentlySortedDeviceId = '');
                },
                onClick: () => {
                    if (j.default.me.editing.device.currentlySortedDeviceId = '', j.default.me.currentAction === k.default.none) {
                        const F = (0, m.default)().worldManager.devices.getDeviceById(a.deviceId);
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
                layoutId: `sort-${ a.deviceId }`,
                children: [
                    (0, d.jsxs)(F, {
                        style: {
                            borderRadius: E
                        },
                        children: [
                            (0, d.jsx)(h.default.Text, {
                                style: {
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden'
                                },
                                children: a.deviceName
                            }),
                            (0, q.default)() ? (0, d.jsx)('div', {
                                style: {
                                    flexShrink: 0
                                },
                                children: (0, d.jsx)(f.default, {
                                    menu: {
                                        items: (0, p.default)({
                                            props: a
                                        })
                                    },
                                    children: (0, d.jsx)(e.default, {
                                        icon: (0, d.jsx)(o.default, {
                                            name: 'far fa-ellipsis-h'
                                        }),
                                        type: 'text',
                                        onClick: a => {
                                            a.stopPropagation();
                                        }
                                    })
                                })
                            }) : null
                        ]
                    }),
                    (0, q.default)() ? (0, d.jsxs)(G, {
                        onClick: a => a.stopPropagation(),
                        children: [
                            (0, d.jsx)(e.default, {
                                icon: (0, d.jsx)(o.default, {
                                    name: 'fas fa-arrow-up'
                                }),
                                disabled: !a.onUp,
                                onClick: E => {
                                    E.stopPropagation(), null == a || a.onUp(a.deviceId);
                                },
                                type: 'text'
                            }),
                            (0, d.jsx)(e.default, {
                                icon: (0, d.jsx)(o.default, {
                                    name: 'fas fa-arrow-down'
                                }),
                                type: 'text',
                                disabled: !a.onDown,
                                onClick: E => {
                                    E.stopPropagation(), null == a || a.onDown(a.deviceId);
                                }
                            })
                        ]
                    }) : null
                ]
            });
        }),
        E = (0, i.default)(s.motion.div).attrs({
            className: 'maxWidth flex vc'
        })(u || (u = C``)),
        F = (0, i.default)(n.VerticallyCentered).attrs({
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
        G = (0, i.default)(n.VerticallyCentered)(w || (w = C`
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
}), c.register('Vxrp9', function(a, k) {
    b(a.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('iMnBi'),
        f = c('ZsI3K'),
        g = c('cMsWT'),
        h = c('3I8Ro0'),
        i = c('jJUK9');
    var j = a => {
        const {
            props: k
        } = l, m = [];
        return k.depth !== k.y && m.push({
            key: 'reset-natural',
            label: 'Reset To Natural Depth',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-bring-forward'
            }),
            onClick: (0, h.default)(() => (0, i.ResetDeviceDepth)(k.deviceId))
        }), (0, f.IsDeviceOnLayer)(k.deviceId, g.default.DevicesAboveCharacters) || m.push({
            key: 'above-layer',
            label: 'Move To Above Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-level-up'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(k.deviceId, g.default.DevicesAboveCharacters))
        }), (0, f.IsDeviceOnLayer)(k.deviceId, g.default.DepthSortedCharactersAndDevices) || m.push({
            key: 'primary-layer',
            label: 'Move To Primary Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-dot-circle'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(k.deviceId, g.default.DepthSortedCharactersAndDevices))
        }), (0, f.IsDeviceOnLayer)(k.deviceId, g.default.DevicesUnderCharacters) || m.push({
            key: 'below-layer',
            label: 'Move To Below Layer',
            icon: (0, d.jsx)(e.default, {
                name: 'fas fa-level-down'
            }),
            onClick: (0, h.default)(() => (0, f.MoveDeviceToLayer)(k.deviceId, g.default.DevicesUnderCharacters))
        }), m;
    };
}), c.register('ZsI3K', function(a, k) {
    b(a.exports, 'MoveDeviceToLayer', function() {
        return f;
    }), b(a.exports, 'IsDeviceOnLayer', function() {
        return g;
    });
    var d = c('64TR40'),
        e = c('dAmf5');
    const f = (a, b) => {
            const g = (0, e.default)().worldManager.devices.getDeviceById(a);
            g && g.layers.getLayer() !== b && (0, d.default)({
                depth: g.layers.getOptionsDepth(),
                layerId: b,
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
        g = (a, b) => {
            const h = (0, e.default)().worldManager.devices.getDeviceById(a);
            return !!h && h.layers.getLayer() === b;
        };
}), c.register('64TR40', function(a, k) {
    b(a.exports, 'default', function() {
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
}), c.register('3I8Ro0', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = a => b => {
        b.domEvent.stopPropagation(), a && a();
    };
}), c.register('jJUK9', function(a, l) {
    b(a.exports, 'ResetDeviceDepth', function() {
        return f;
    });
    var d = c('64TR40'),
        e = c('dAmf5');
    const f = a => {
        const g = (0, e.default)().worldManager.devices.getDeviceById(a);
        g && (0, d.default)({
            depth: void 0,
            layerId: g.layers.getOptionsLayer(),
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
    };
}), c.register('3qk+k', function(a, l) {
    b(a.exports, 'MoveDeviceUp', function() {
        return j;
    }), b(a.exports, 'MoveDeviceDown', function() {
        return k;
    });
    var d = c('64TR40'),
        e = c('dAmf5'),
        f = c('OTxvA'),
        g = c('aR65c'),
        h = c('jJUK9'),
        i = c('7Sbqr');
    const j = (a, b) => {
            const k = b.findIndex(b => b.deviceId === a);
            if (b[k] && b[k - 1] && b[k].globalDepth === b[k - 1].globalDepth)
                return void m(b, k, k - 1);
            const l = (0, f.GetDepthAfterMoveUp)(b[k], b[k - 2], b[k - 1]),
                m = (0, e.default)().worldManager.devices.getDeviceById(a);
            if (!m)
                return;
            const {
                depthOnLayer: n,
                layer: o
            } = (0, g.GetLayerAndLocalDepth)(l);
            b[k].layer = o, b[k].depth = n, b[k].globalDepth = l, (0, d.default)({
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
            }), l(b);
        },
        k = (a, b) => {
            const l = b.findIndex(b => b.deviceId === a);
            if (b[l] && b[l + 1] && b[l].globalDepth === b[l + 1].globalDepth)
                return void m(b, l, l + 1);
            const m = (0, f.GetDepthAfterMoveDown)(b[l], b[l + 1], b[l + 2]),
                n = (0, e.default)().worldManager.devices.getDeviceById(a);
            if (!n)
                return;
            const {
                depthOnLayer: o,
                layer: p
            } = (0, g.GetLayerAndLocalDepth)(m);
            b[l].layer = p, b[l].depth = o, b[l].globalDepth = m, (0, d.default)({
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
            }), l(b);
        },
        l = a => {
            a = a.sort((a, b) => b.globalDepth - a.globalDepth);
            const m = [];
            let n = !0;
            for (; n && !i.default.me.editing.device.usingMultiselect;) {
                n = !1;
                for (let o = 0; o < a.length; o++) {
                    const p = a[o],
                        q = (0, g.GetGlobalDepth)(p.y, p.layer);
                    if (!(q === p.globalDepth)) {
                        const r = 0 === o || a[o - 1].globalDepth > q,
                            s = o === a.length - 1 || a[o + 1].globalDepth < q;
                        r && s && (p.globalDepth = q, p.depth = (0, g.GetLayerAndLocalDepth)(q).depthOnLayer, m.push(p), n = !0);
                    }
                }
                m.forEach(a => {
                    (0, h.ResetDeviceDepth)(a.deviceId);
                });
            }
        },
        m = (a, b, c) => {
            const n = a[b];
            a[b] = a[c], a[c] = n;
            const o = (0, e.default)().worldManager.devices.allDevices.findIndex(b => b.id === a[c].deviceId),
                p = (0, e.default)().worldManager.devices.allDevices.findIndex(c => c.id === a[b].deviceId),
                q = (0, e.default)().worldManager.devices.allDevices[o];
            (0, e.default)().worldManager.devices.allDevices[o] = (0, e.default)().worldManager.devices.allDevices[p], (0, e.default)().worldManager.devices.allDevices[p] = q;
        };
}), c.register('OTxvA', function(a, h) {
    b(a.exports, 'GetDepthAfterMoveUp', function() {
        return i;
    }), b(a.exports, 'GetDepthAfterMoveDown', function() {
        return j;
    });
    var d = c('cMsWT'),
        e = c('aR65c');
    const f = (a, b) => {
            const g = a.layer === b.layer,
                h = k(a.layer) === b.layer;
            if (g) {
                return Math.max(b.globalDepth + 1, (0, e.GetGlobalDepth)(a.y, a.layer));
            }
            if (h) {
                return Math.min(b.globalDepth - 1, (0, e.GetGlobalDepth)(a.y, b.layer));
            }
            return (0, e.GetGlobalDepth)(a.y, d.default.DepthSortedCharactersAndDevices);
        },
        g = (a, b) => {
            const h = a.layer === b.layer,
                i = l(a.layer) === b.layer;
            if (h) {
                return Math.min(b.globalDepth - 1, (0, e.GetGlobalDepth)(a.y, a.layer));
            }
            if (i) {
                return Math.max(b.globalDepth + 1, (0, e.GetGlobalDepth)(a.y, b.layer));
            }
            return (0, e.GetGlobalDepth)(a.y, d.default.DepthSortedCharactersAndDevices);
        },
        h = (a, b, c) => {
            const i = (0, e.GetLayerAndLocalDepth)(c.globalDepth).layer,
                j = (0, e.GetGlobalDepth)(a.y, i);
            return j > c.globalDepth && j < b.globalDepth ? j : (b.globalDepth + c.globalDepth) / 2;
        },
        i = (a, b, c) => {
            if (!c) {
                const j = k(a.layer);
                if (!j)
                    return a.globalDepth;
                return (0, e.GetGlobalDepth)(a.y, j);
            }
            return b ? c.layer !== b.layer || a.layer !== c.layer ? f(a, c) : h(a, b, c) : f(a, c);
        },
        j = (a, b, c) => {
            if (!b) {
                const k = l(a.layer);
                if (!k)
                    return a.globalDepth;
                return (0, e.GetGlobalDepth)(a.y, k);
            }
            return c ? c.layer !== b.layer || a.layer !== b.layer ? g(a, b) : h(a, b, c) : g(a, b);
        },
        k = a => a === d.default.DepthSortedCharactersAndDevices ? d.default.DevicesAboveCharacters : a === d.default.DevicesUnderCharacters ? d.default.DepthSortedCharactersAndDevices : null,
        l = a => a === d.default.DepthSortedCharactersAndDevices ? d.default.DevicesUnderCharacters : a === d.default.DevicesAboveCharacters ? d.default.DepthSortedCharactersAndDevices : null;
}), c.register('YARc1', function(a, d) {
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
}), c.register('Ya3eW', function(a, d) {
    b(a.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('KlhV/'),
        h = c('UzdPH'),
        i = c('Wgw1x0'),
        j = c('YimJ0');
    g = c('KlhV/'), h = c('UzdPH');
    let k, l, m, n = a => a;
    var o = a => {
        const {
            token: {
                borderRadius: p
            }
        } = g.default.useToken();
        return (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(q, {
                    children: (0, d.jsx)(h.default.Title, {
                        level: 4,
                        style: {
                            fontFamily: f.Fonts.FugazOne
                        },
                        children: a.layerName
                    })
                }),
                (0, d.jsx)(h.default.Text, {
                    children: a.layerDescription
                }),
                a.devicesInLayer ? (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }) : (0, d.jsx)(r, {
                    style: {
                        borderRadius: p
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
    const p = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = n``)),
        q = e.default.div(l || (l = n`
  text-transform: uppercase;
`)),
        r = (0, e.default)(j.Centered)(m || (m = n`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`));
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
});