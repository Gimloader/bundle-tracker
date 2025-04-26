function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, G) {
    Object.defineProperty(a, b, {
        get: c,
        set: G,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('3mzvZ', function(G, d) {
    var d;
    d = G.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(G.exports, 'default', function() {
        return D;
    });
    var e = c('8kSQZ'),
        f = c('ExtIT'),
        g = c('UzdPH'),
        h = c('Vlfxs'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('S/jX4'),
        l = c('iAe3o'),
        m = c('E7bPp'),
        n = c('FFDo5'),
        o = c('TnPB+'),
        p = c('B/6cb'),
        q = c('kneek'),
        r = c('+0Tb/'),
        s = c('7Sbqr'),
        t = c('7fo7e'),
        u = c('snog9'),
        v = c('sc9jo'),
        w = c('3w8wZ'),
        x = c('nbHO+'),
        y = c('gSUVO'),
        z = c('YimJ0'),
        A = c('X6IzA'),
        B = c('8+IVG');
    let C;
    var D = (0, h.observer)(() => {
        const E = (0, m.default)(),
            F = () => {
                (0, o.default)(l.default.none);
            };
        i.useEffect(() => {
            const G = (0, n.default)(p.default.Removing.SwitchToAddingMode(), () => {
                s.default.me.adding.mode = t.AddingMode.terrain, (0, o.default)(l.default.adding);
            });
            return () => {
                G();
            };
        }, []);
        const G = (0, u.default)();
        return i.useEffect(() => {
            G || F();
        }, [
            G,
            F
        ]), (0, r.default)(a(q).Input.Keyboard.KeyCodes.ESC, F, [F]), (0, e.jsx)(w.Container, {
            children: (0, e.jsxs)(w.Content, {
                style: {
                    paddingTop: 53
                },
                children: [
                    (0, e.jsx)(x.default, {
                        onClick: F,
                        padding: 20,
                        fontSize: 20
                    }),
                    (0, e.jsx)(g.default.Title, {
                        level: 2,
                        style: {
                            fontFamily: y.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            color: k.default.White
                        },
                        children: 'Eraser'
                    }),
                    (0, e.jsx)(E, {
                        children: E ? (0, e.jsx)(B.default, {
                            removalInfo: E
                        }) : (0, e.jsx)(A.default, {})
                    }),
                    (0, e.jsx)(f.default, {
                        style: {
                            borderTopColor: 'rgba(255,255,255,0.25)'
                        }
                    }),
                    (0, e.jsx)(v.default, {})
                ]
            })
        });
    });
    const E = (0, j.default)(z.Centered).attrs({
        className: 'maxWidth'
    })(C || (C = (a => a)`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`));
}), c.register('E7bPp', function(a, o) {
    b(a.exports, 'default', function() {
        return k;
    });
    var d = c('uPP4W'),
        e = c('7Sbqr'),
        f = c('YARc1'),
        g = c('RJ/fk'),
        h = c('Wgw1x0'),
        i = c('7X8h3'),
        j = c('xXIOh');
    var k = () => {
        const [l, m] = d.useState(!1), [n, o] = d.useState(''), [p, q] = d.useState(''), [r, s] = d.useState('');
        return d.useEffect(() => {
            const t = (0, j.ReactionToMultipleProps)([
                () => e.default.me.removing.tilesToRemove,
                () => e.default.me.removing.deviceIdToRemove,
                () => e.default.me.removing.wireIdToRemove
            ], () => {
                const u = (() => {
                    const {
                        me: {
                            removing: {
                                tilesToRemove: v,
                                deviceIdToRemove: w,
                                wireIdToRemove: x
                            }
                        }
                    } = e.default;
                    let y, z, A;
                    if (v.length)
                        if (y = (0, g.CapitalizeFirstLetter)(h.default.terrain.singular), z = `Unknown ${ y }`, 1 === v.length) {
                            const B = e.default.world.terrain.tiles.get(v[0].id);
                            if (B) {
                                const C = e.default.worldOptions.terrainOptions.find(C => C.id === B.terrain);
                                C && (z = C.name), A = B.collides ? 'Wall' : 'Floor';
                            }
                        } else
                            z = `Multiple ${ (0, g.CapitalizeFirstLetter)(h.default.terrain.singular) } Pieces`;
                    if (w) {
                        y = (0, g.CapitalizeFirstLetter)(h.default.device.singular), z = `Unknown ${ y }`;
                        const B = e.default.world.devices.devices.get(w);
                        B && (B.deviceOption.id === i.default.prop && (y = (0, g.CapitalizeFirstLetter)(h.default.prop.singular), z = `Unknown ${ y }`), z = (0, f.FetchDeviceName)(w));
                    }
                    return x && (y = (0, g.CapitalizeFirstLetter)(h.default.wire.singular), z = y), y && z ? {
                        type: y,
                        name: z,
                        description: A
                    } : null;
                })();
                u ? (o(u.type), q(u.name), s(u.description || ''), m(!0)) : m(!1);
            }, {
                fireImmediately: !0
            });
            return () => t();
        }, []), l ? {
            type: n,
            name: p,
            description: r
        } : null;
    };
}), c.register('xXIOh', function(a, f) {
    b(a.exports, 'ReactionToMultipleProps', function() {
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
}), c.register('sc9jo', function(a, x) {
    b(a.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('Ly1h3'),
        f = c('5nJMd26'),
        g = c('UzdPH'),
        h = c('Vlfxs'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('S/jX4'),
        l = c('am7L5'),
        m = c('EefFJ'),
        n = c('/44Hu'),
        o = c('gSUVO'),
        p = c('5YE/F0'),
        q = c('RJ/fk'),
        r = c('Wgw1x0');
    let s;
    var t = (0, h.observer)(() => {
        const {
            me: {
                removing: u
            }
        } = (0, l.default)(), v = i.useRef(), w = i.useRef(), x = i.useRef(), y = () => {
            var z, A, B, C, D, E;
            null == v || null === (z = v.current) || void 0 === z || null === (A = z.blur) || void 0 === A || A.call(z), null == w || null === (B = w.current) || void 0 === B || null === (C = B.blur) || void 0 === C || C.call(B), null == x || null === (D = x.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
        }, z = u => {
            const A = u === n.RemovingMode.propsAndDevices ? `${ (0, q.CapitalizeFirstLetter)(r.default.prop.plural) } & ${ (0, q.CapitalizeFirstLetter)(r.default.device.plural) }` : u === n.RemovingMode.tiles ? (0, q.CapitalizeFirstLetter)(r.default.terrain.singular) : u === n.RemovingMode.wires ? (0, q.CapitalizeFirstLetter)(r.default.wire.plural) : u;
            return (0, d.jsx)(e.default.Option, {
                value: u,
                children: A
            }, `remove-options-mode-${ u }`);
        }, A = (u, v) => {
            if (u === n.RemovingTilesMode.allLayers)
                return (0, d.jsx)(e.default.Option, {
                    ref: w,
                    value: 99,
                    children: u
                }, `remove-tiles-mode-${ u }`);
            if (u === n.RemovingTilesMode.topLayer)
                return (0, d.jsx)(e.default.Option, {
                    value: 100,
                    children: u
                }, `remove-tiles-mode-${ u }`);
            const B = `${ u }-${ v }`;
            return (0, d.jsx)(e.default.Option, {
                value: v,
                children: v + ' - ' + p.TerrainLayerNames[v - 1] || 'Layer'
            }, `remove-tiles-mode-${ B }`);
        };
        return (0, d.jsx)(m.default, {
            className: 'maxWidth',
            children: (0, d.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'vertical',
                size: 13,
                children: [
                    (0, d.jsxs)(u, {
                        children: [
                            (0, d.jsx)(v, {
                                children: 'Eraser Mode:'
                            }),
                            (0, d.jsxs)(e.default, {
                                ref: v,
                                style: {
                                    width: 200
                                },
                                value: u.removingMode,
                                onChange: v => {
                                    u.removingMode = v, y();
                                },
                                children: [
                                    z(n.RemovingMode.everything),
                                    z(n.RemovingMode.tiles),
                                    z(n.RemovingMode.propsAndDevices),
                                    z(n.RemovingMode.wires)
                                ]
                            })
                        ]
                    }),
                    u.removingMode === n.RemovingMode.tiles ? (0, d.jsxs)(u, {
                        children: [
                            (0, d.jsx)(v, {
                                children: 'Layer:'
                            }),
                            (0, d.jsxs)(e.default, {
                                ref: w,
                                style: {
                                    width: 200
                                },
                                value: u.removingTilesMode === n.RemovingTilesMode.allLayers ? 99 : u.removingTilesMode === n.RemovingTilesMode.topLayer ? 100 : u.removingTilesLayer,
                                onChange: v => {
                                    99 === v ? u.removingTilesMode = n.RemovingTilesMode.allLayers : 100 === v ? u.removingTilesMode = n.RemovingTilesMode.topLayer : (u.removingTilesMode = n.RemovingTilesMode.layer, u.removingTilesLayer = v), y();
                                },
                                children: [
                                    A(n.RemovingTilesMode.topLayer),
                                    A(n.RemovingTilesMode.allLayers),
                                    Array.from(Array(5).keys()).map(u => A(n.RemovingTilesMode.layer, u + 1))
                                ]
                            })
                        ]
                    }) : null,
                    u.removingMode === n.RemovingMode.tiles ? (0, d.jsxs)(u, {
                        children: [
                            (0, d.jsx)(v, {
                                children: 'Eraser Size:'
                            }),
                            (0, d.jsx)(e.default, {
                                ref: x,
                                style: {
                                    width: 200
                                },
                                value: u.removingTilesEraserSize,
                                onChange: v => {
                                    u.removingTilesEraserSize = v, y();
                                },
                                children: Array.from(Array(3).keys()).map(u => (u => (0, d.jsx)(e.default.Option, {
                                    value: u,
                                    children: u
                                }, `remove-tiles-eraser-size-${ u }`))(u + 1))
                            })
                        ]
                    }) : null
                ]
            })
        });
    });
    const u = j.default.div.attrs({
            className: 'maxWidth vc between flex'
        })(s || (s = (a => a)``)),
        v = a => (0, d.jsx)(g.default.Text, {
            style: {
                fontWeight: o.FontWeights.Bold,
                color: k.default.White
            },
            children: a.children
        });
}), c.register('5YE/F0', function(a, c) {
    b(a.exports, 'TerrainLayerNames', function() {
        return d;
    });
    const d = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), c.register('X6IzA', function(a, o) {
    b(a.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('iMnBi'),
        h = c('UzdPH'),
        i = c('lmfrI');
    let j, k, l = a => a;
    var m = () => (0, d.jsxs)(n, {
        children: [
            (0, d.jsx)(o, {
                children: (0, d.jsx)(g.default, {
                    name: 'fas fa-eraser'
                })
            }),
            (0, d.jsx)('div', {
                children: (0, d.jsx)(h.default.Text, {
                    style: {
                        color: i.default.White
                    },
                    children: 'Hover over anything and click to erase it!'
                })
            })
        ]
    });
    const n = (0, e.default)(f.CenteredColumn)(j || (j = l``)),
        o = e.default.div(k || (k = l`
  font-size: 24px;
  color: ${ 0 };
`), i.default.White);
}), c.register('8+IVG', function(a, o) {
    b(a.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('UzdPH'),
        g = c('YimJ0'),
        h = c('lmfrI');
    let i, j, k = a => a;
    var l = a => {
        const {
            removalInfo: {
                type: m,
                name: n,
                description: o
            }
        } = p;
        return (0, d.jsxs)(m, {
            children: [
                (0, d.jsx)(n, {
                    style: o ? {
                        marginBottom: 10
                    } : void 0,
                    children: (0, d.jsx)(f.default.Text, {
                        italic: !0,
                        children: m
                    })
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(f.default.Title, {
                        style: {
                            color: h.default.White
                        },
                        level: 4,
                        children: n
                    })
                }),
                o ? (0, d.jsx)('div', {
                    children: (0, d.jsx)(f.default.Text, {
                        style: {
                            marginTop: 2
                        },
                        children: o
                    })
                }) : null
            ]
        });
    };
    const m = (0, e.default)(g.CenteredColumn).attrs({
            className: 'maxAll'
        })(i || (i = k``)),
        n = e.default.div(j || (j = k``));
}), c.register('JegR3', function(a, d) {
    b(a.exports, 'default', function() {
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
}), c.register('WKaIG', function(a, c) {
    b(a.exports, 'default', function() {
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
});