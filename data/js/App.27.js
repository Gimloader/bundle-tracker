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
c.register('+27Rl', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _F;
    });
    var g = c('gRbUn'),
        h = c('VNuyu'),
        i = c('22RS1'),
        j = c('6jmvl'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('HOIhZ'),
        n = c('SxihY'),
        o = c('pctq0'),
        p = c('OZKkM'),
        q = c('LihP5'),
        r = c('VSnBT'),
        s = c('ddhGF'),
        t = c('J8L14'),
        u = c('fI6of'),
        v = c('t0eqt'),
        w = c('APtU4'),
        x = c('OnssI'),
        y = c('3ydbD'),
        z = c('V/q8i'),
        A = c('Eh2Wh'),
        B = c('MgONH'),
        C = c('ymkwu'),
        D = c('y3At+');
    let E;
    var _F = (0, j.observer)(() => {
        const G = (0, o.default)(),
            H = () => {
                (0, q.default)(n.default.none);
            };
        k.useEffect(() => {
            const I = (0, p.default)(r.default.Removing.SwitchToAddingMode(), () => {
                u.default.me.adding.mode = v.AddingMode.terrain, (0, q.default)(n.default.adding);
            });
            return () => {
                I();
            };
        }, []);
        const I = (0, w.default)();
        return k.useEffect(() => {
            I || H();
        }, [
            I,
            H
        ]), (0, t.default)(a(s).Input.Keyboard.KeyCodes.ESC, H, [H]), (0, g.jsx)(y.Container, {
            children: (0, g.jsxs)(y.Content, {
                style: {
                    paddingTop: 53
                },
                children: [
                    (0, g.jsx)(z.default, {
                        onClick: H,
                        padding: 20,
                        fontSize: 20
                    }),
                    (0, g.jsx)(i.default.Title, {
                        level: 2,
                        style: {
                            fontFamily: A.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            color: m.default.White
                        },
                        children: 'Eraser'
                    }),
                    (0, g.jsx)(_G, {
                        children: G ? (0, g.jsx)(D.default, {
                            removalInfo: G
                        }) : (0, g.jsx)(C.default, {})
                    }),
                    (0, g.jsx)(h.default, {
                        style: {
                            borderTopColor: 'rgba(255,255,255,0.25)'
                        }
                    }),
                    (0, g.jsx)(x.default, {})
                ]
            })
        });
    });
    const _G = (0, l.default)(B.Centered).attrs({
        className: 'maxWidth'
    })(E || (E = (a => a)`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`));
}), c.register('pctq0', function(d, e) {
    b(d.exports, 'default', function() {
        return _m;
    });
    var f = c('O0Kav'),
        g = c('fI6of'),
        h = c('+FJvw1'),
        i = c('Q6LQJ'),
        j = c('gp8Qp0'),
        k = c('OFuf70'),
        l = c('AAbjw');
    var _m = () => {
        const [n, o] = f.useState(!1), [p, q] = f.useState(''), [r, s] = f.useState(''), [t, u] = f.useState('');
        return f.useEffect(() => {
            const v = (0, l.ReactionToMultipleProps)([
                () => g.default.me.removing.tilesToRemove,
                () => g.default.me.removing.deviceIdToRemove,
                () => g.default.me.removing.wireIdToRemove
            ], () => {
                const w = (() => {
                    const {
                        me: {
                            removing: {
                                tilesToRemove: x,
                                deviceIdToRemove: y,
                                wireIdToRemove: z
                            }
                        }
                    } = g.default;
                    let A, B, C;
                    if (x.length)
                        if (A = (0, i.CapitalizeFirstLetter)(j.default.terrain.singular), B = `Unknown ${ A }`, 1 === x.length) {
                            const D = g.default.world.terrain.tiles.get(x[0].id);
                            if (D) {
                                const E = g.default.worldOptions.terrainOptions.find(E => E.id === D.terrain);
                                E && (B = E.name), C = D.collides ? 'Wall' : 'Floor';
                            }
                        } else
                            B = `Multiple ${ (0, i.CapitalizeFirstLetter)(j.default.terrain.singular) } Pieces`;
                    if (y) {
                        A = (0, i.CapitalizeFirstLetter)(j.default.device.singular), B = `Unknown ${ A }`;
                        const D = g.default.world.devices.devices.get(y);
                        D && (D.deviceOption.id === k.default.prop && (A = (0, i.CapitalizeFirstLetter)(j.default.prop.singular), B = `Unknown ${ A }`), B = (0, h.FetchDeviceName)(y));
                    }
                    return z && (A = (0, i.CapitalizeFirstLetter)(j.default.wire.singular), B = A), A && B ? {
                        type: A,
                        name: B,
                        description: C
                    } : null;
                })();
                w ? (q(w.type), s(w.name), u(w.description || ''), o(!0)) : o(!1);
            }, {
                fireImmediately: !0
            });
            return () => v();
        }, []), n ? {
            type: p,
            name: r,
            description: t
        } : null;
    };
}), c.register('AAbjw', function(d, e) {
    b(d.exports, 'ReactionToMultipleProps', function() {
        return _g;
    });
    var f = c('JkQCT');
    const _g = (d, b, c) => {
        const h = [];
        return d.forEach(d => {
            const i = (0, f.reaction)(d, b, c);
            h.push(i);
        }), () => {
            h.forEach(d => {
                d();
            });
        };
    };
}), c.register('OnssI', function(d, e) {
    b(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('u8Dt8'),
        h = c('E2AMI26'),
        i = c('22RS1'),
        j = c('6jmvl'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('HOIhZ'),
        n = c('K/2xB'),
        o = c('UkybP'),
        p = c('4Jp0/'),
        q = c('Eh2Wh'),
        r = c('er8/l0'),
        s = c('Q6LQJ'),
        t = c('gp8Qp0');
    let u;
    var _v = (0, j.observer)(() => {
        const {
            me: {
                removing: w
            }
        } = (0, n.default)(), x = k.useRef(), y = k.useRef(), z = k.useRef(), A = () => {
            var B, C, D, E, F, G;
            null == x || null === (B = x.current) || void 0 === B || null === (C = B.blur) || void 0 === C || C.call(B), null == y || null === (D = y.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D), null == z || null === (F = z.current) || void 0 === F || null === (G = F.blur) || void 0 === G || G.call(F);
        }, B = w => {
            const C = w === p.RemovingMode.propsAndDevices ? `${ (0, s.CapitalizeFirstLetter)(t.default.prop.plural) } & ${ (0, s.CapitalizeFirstLetter)(t.default.device.plural) }` : w === p.RemovingMode.tiles ? (0, s.CapitalizeFirstLetter)(t.default.terrain.singular) : w === p.RemovingMode.wires ? (0, s.CapitalizeFirstLetter)(t.default.wire.plural) : w;
            return (0, f.jsx)(g.default.Option, {
                value: w,
                children: C
            }, `remove-options-mode-${ w }`);
        }, C = (w, x) => {
            if (w === p.RemovingTilesMode.allLayers)
                return (0, f.jsx)(g.default.Option, {
                    ref: y,
                    value: 99,
                    children: w
                }, `remove-tiles-mode-${ w }`);
            if (w === p.RemovingTilesMode.topLayer)
                return (0, f.jsx)(g.default.Option, {
                    value: 100,
                    children: w
                }, `remove-tiles-mode-${ w }`);
            const D = `${ w }-${ x }`;
            return (0, f.jsx)(g.default.Option, {
                value: x,
                children: x + ' - ' + r.TerrainLayerNames[x - 1] || 'Layer'
            }, `remove-tiles-mode-${ D }`);
        };
        return (0, f.jsx)(o.default, {
            className: 'maxWidth',
            children: (0, f.jsxs)(h.default, {
                className: 'maxWidth',
                direction: 'vertical',
                size: 13,
                children: [
                    (0, f.jsxs)(_w, {
                        children: [
                            (0, f.jsx)(_x, {
                                children: 'Eraser Mode:'
                            }),
                            (0, f.jsxs)(g.default, {
                                ref: x,
                                style: {
                                    width: 200
                                },
                                value: w.removingMode,
                                onChange: x => {
                                    w.removingMode = x, A();
                                },
                                children: [
                                    B(p.RemovingMode.everything),
                                    B(p.RemovingMode.tiles),
                                    B(p.RemovingMode.propsAndDevices),
                                    B(p.RemovingMode.wires)
                                ]
                            })
                        ]
                    }),
                    w.removingMode === p.RemovingMode.tiles ? (0, f.jsxs)(_w, {
                        children: [
                            (0, f.jsx)(_x, {
                                children: 'Layer:'
                            }),
                            (0, f.jsxs)(g.default, {
                                ref: y,
                                style: {
                                    width: 200
                                },
                                value: w.removingTilesMode === p.RemovingTilesMode.allLayers ? 99 : w.removingTilesMode === p.RemovingTilesMode.topLayer ? 100 : w.removingTilesLayer,
                                onChange: x => {
                                    99 === x ? w.removingTilesMode = p.RemovingTilesMode.allLayers : 100 === x ? w.removingTilesMode = p.RemovingTilesMode.topLayer : (w.removingTilesMode = p.RemovingTilesMode.layer, w.removingTilesLayer = x), A();
                                },
                                children: [
                                    C(p.RemovingTilesMode.topLayer),
                                    C(p.RemovingTilesMode.allLayers),
                                    Array.from(Array(5).keys()).map(w => C(p.RemovingTilesMode.layer, w + 1))
                                ]
                            })
                        ]
                    }) : null,
                    w.removingMode === p.RemovingMode.tiles ? (0, f.jsxs)(_w, {
                        children: [
                            (0, f.jsx)(_x, {
                                children: 'Eraser Size:'
                            }),
                            (0, f.jsx)(g.default, {
                                ref: z,
                                style: {
                                    width: 200
                                },
                                value: w.removingTilesEraserSize,
                                onChange: x => {
                                    w.removingTilesEraserSize = x, A();
                                },
                                children: Array.from(Array(3).keys()).map(w => (w => (0, f.jsx)(g.default.Option, {
                                    value: w,
                                    children: w
                                }, `remove-tiles-eraser-size-${ w }`))(w + 1))
                            })
                        ]
                    }) : null
                ]
            })
        });
    });
    const _w = l.default.div.attrs({
            className: 'maxWidth vc between flex'
        })(u || (u = (d => d)``)),
        _x = d => (0, f.jsx)(i.default.Text, {
            style: {
                fontWeight: q.FontWeights.Bold,
                color: m.default.White
            },
            children: d.children
        });
}), c.register('er8/l0', function(d, e) {
    b(d.exports, 'TerrainLayerNames', function() {
        return _f;
    });
    const _f = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), c.register('ymkwu', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('t52Ep'),
        j = c('22RS1'),
        k = c('8KqQ+');
    let l, m, n = d => d;
    var _o = () => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsx)(_q, {
                children: (0, f.jsx)(i.default, {
                    name: 'fas fa-eraser'
                })
            }),
            (0, f.jsx)('div', {
                children: (0, f.jsx)(j.default.Text, {
                    style: {
                        color: k.default.White
                    },
                    children: 'Hover over anything and click to erase it!'
                })
            })
        ]
    });
    const _p = (0, g.default)(h.CenteredColumn)(l || (l = n``)),
        _q = g.default.div(m || (m = n`
  font-size: 24px;
  color: ${ 0 };
`), k.default.White);
}), c.register('y3At+', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('22RS1'),
        i = c('MgONH'),
        j = c('8KqQ+');
    let k, l, m = d => d;
    var _n = d => {
        const {
            removalInfo: {
                type: o,
                name: p,
                description: q
            }
        } = d;
        return (0, f.jsxs)(_o, {
            children: [
                (0, f.jsx)(_p, {
                    style: q ? {
                        marginBottom: 10
                    } : void 0,
                    children: (0, f.jsx)(h.default.Text, {
                        italic: !0,
                        children: o
                    })
                }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(h.default.Title, {
                        style: {
                            color: j.default.White
                        },
                        level: 4,
                        children: p
                    })
                }),
                q ? (0, f.jsx)('div', {
                    children: (0, f.jsx)(h.default.Text, {
                        style: {
                            marginTop: 2
                        },
                        children: q
                    })
                }) : null
            ]
        });
    };
    const _o = (0, g.default)(i.CenteredColumn).attrs({
            className: 'maxAll'
        })(k || (k = m``)),
        _p = g.default.div(l || (l = m``));
}), c.register('OQRaD', function(d, e) {
    b(d.exports, 'default', function() {
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
    b(d.exports, 'default', function() {
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
});