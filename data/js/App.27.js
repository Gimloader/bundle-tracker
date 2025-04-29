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
a.register('PK2j1', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _E(b.exports, 'default', function() {
        return _D;
    });
    var e = a('0hzx+'),
        f = a('fmVdR'),
        g = a('j2ADs'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('vShe/'),
        l = a('11nl3'),
        m = a('WluX+'),
        n = a('YMjEj'),
        o = a('mQCZt'),
        p = a('WIRQZ'),
        q = a('8WvaZ'),
        r = a('ryWAy'),
        s = a('iWivW'),
        t = a('rWzgW'),
        u = a('ILZh4'),
        v = a('e07Rt'),
        w = a('6vkJ5'),
        x = a('Ct4sg'),
        y = a('b5kvC'),
        z = a('0HHAH'),
        A = a('Dv0SO'),
        B = a('oqbdA');
    let C;
    var _D = (0, h.observer)(() => {
        const _E = (0, m.default)(),
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
        ]), (0, r.default)(_b(q).Input.Keyboard.KeyCodes.ESC, F, [F]), (0, e.jsx)(w.Container, {
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
                    (0, e.jsx)(_E, {
                        children: _E ? (0, e.jsx)(B.default, {
                            removalInfo: _E
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
    const _E = (0, j.default)(z.Centered).attrs({
        className: 'maxWidth'
    })(C || (C = (_b => _b)`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`));
}), a.register('WluX+', function(_b, c) {
    _m(_b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = a('iWivW'),
        f = a('PUGQx1'),
        g = a('qVhMZ'),
        h = a('bzU3s'),
        i = a('cPBfb'),
        j = a('47u/+');
    var _k = () => {
        const [l, _m] = d.useState(!1), [n, o] = d.useState(''), [p, q] = d.useState(''), [r, s] = d.useState('');
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
                u ? (o(u.type), q(u.name), s(u.description || ''), _m(!0)) : _m(!1);
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
}), a.register('47u/+', function(b, c) {
    _v(b.exports, 'ReactionToMultipleProps', function() {
        return _e;
    });
    var d = a('YuT/D');
    const _e = (b, _v, a) => {
        const f = [];
        return b.forEach(b => {
            const g = (0, d.reaction)(b, _v, a);
            f.push(g);
        }), () => {
            f.forEach(b => {
                b();
            });
        };
    };
}), a.register('e07Rt', function(b, c) {
    _v(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('inwN3'),
        f = a('cvto726'),
        g = a('j2ADs'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('vShe/'),
        l = a('bHGrl'),
        m = a('2GeW4'),
        n = a('N/g4T'),
        o = a('b5kvC'),
        p = a('8Yhx/'),
        q = a('qVhMZ'),
        r = a('bzU3s');
    let s;
    var _t = (0, h.observer)(() => {
        const {
            me: {
                removing: u
            }
        } = (0, l.default)(), _v = i.useRef(), w = i.useRef(), x = i.useRef(), y = () => {
            var z, A, B, C, D, E;
            null == _v || null === (z = _v.current) || void 0 === z || null === (A = z.blur) || void 0 === A || A.call(z), null == w || null === (B = w.current) || void 0 === B || null === (C = B.blur) || void 0 === C || C.call(B), null == x || null === (D = x.current) || void 0 === D || null === (E = D.blur) || void 0 === E || E.call(D);
        }, z = u => {
            const A = u === n.RemovingMode.propsAndDevices ? `${ (0, q.CapitalizeFirstLetter)(r.default.prop.plural) } & ${ (0, q.CapitalizeFirstLetter)(r.default.device.plural) }` : u === n.RemovingMode.tiles ? (0, q.CapitalizeFirstLetter)(r.default.terrain.singular) : u === n.RemovingMode.wires ? (0, q.CapitalizeFirstLetter)(r.default.wire.plural) : u;
            return (0, d.jsx)(e.default.Option, {
                value: u,
                children: A
            }, `remove-options-mode-${ u }`);
        }, A = (u, _v) => {
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
            const B = `${ u }-${ _v }`;
            return (0, d.jsx)(e.default.Option, {
                value: _v,
                children: _v + ' - ' + p.TerrainLayerNames[_v - 1] || 'Layer'
            }, `remove-tiles-mode-${ B }`);
        };
        return (0, d.jsx)(m.default, {
            className: 'maxWidth',
            children: (0, d.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'vertical',
                size: 13,
                children: [
                    (0, d.jsxs)(_u, {
                        children: [
                            (0, d.jsx)(_v, {
                                children: 'Eraser Mode:'
                            }),
                            (0, d.jsxs)(e.default, {
                                ref: _v,
                                style: {
                                    width: 200
                                },
                                value: u.removingMode,
                                onChange: _v => {
                                    u.removingMode = _v, y();
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
                    u.removingMode === n.RemovingMode.tiles ? (0, d.jsxs)(_u, {
                        children: [
                            (0, d.jsx)(_v, {
                                children: 'Layer:'
                            }),
                            (0, d.jsxs)(e.default, {
                                ref: w,
                                style: {
                                    width: 200
                                },
                                value: u.removingTilesMode === n.RemovingTilesMode.allLayers ? 99 : u.removingTilesMode === n.RemovingTilesMode.topLayer ? 100 : u.removingTilesLayer,
                                onChange: _v => {
                                    99 === _v ? u.removingTilesMode = n.RemovingTilesMode.allLayers : 100 === _v ? u.removingTilesMode = n.RemovingTilesMode.topLayer : (u.removingTilesMode = n.RemovingTilesMode.layer, u.removingTilesLayer = _v), y();
                                },
                                children: [
                                    A(n.RemovingTilesMode.topLayer),
                                    A(n.RemovingTilesMode.allLayers),
                                    Array.from(Array(5).keys()).map(u => A(n.RemovingTilesMode.layer, u + 1))
                                ]
                            })
                        ]
                    }) : null,
                    u.removingMode === n.RemovingMode.tiles ? (0, d.jsxs)(_u, {
                        children: [
                            (0, d.jsx)(_v, {
                                children: 'Eraser Size:'
                            }),
                            (0, d.jsx)(e.default, {
                                ref: x,
                                style: {
                                    width: 200
                                },
                                value: u.removingTilesEraserSize,
                                onChange: _v => {
                                    u.removingTilesEraserSize = _v, y();
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
    const _u = j.default.div.attrs({
            className: 'maxWidth vc between flex'
        })(s || (s = (b => b)``)),
        _v = b => (0, d.jsx)(g.default.Text, {
            style: {
                fontWeight: o.FontWeights.Bold,
                color: k.default.White
            },
            children: b.children
        });
}), a.register('8Yhx/', function(b, c) {
    _m(b.exports, 'TerrainLayerNames', function() {
        return _d;
    });
    const _d = [
        'Bottom',
        'Lower',
        'Middle',
        'Upper',
        'Top'
    ];
}), a.register('Dv0SO', function(b, c) {
    _m(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('9R7cy'),
        h = a('j2ADs'),
        i = a('sHRDd');
    let j, k, l = b => b;
    var _m = () => (0, d.jsxs)(_n, {
        children: [
            (0, d.jsx)(_o, {
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
    const _n = (0, e.default)(f.CenteredColumn)(j || (j = l``)),
        _o = e.default.div(k || (k = l`
  font-size: 24px;
  color: ${ 0 };
`), i.default.White);
}), a.register('oqbdA', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('j2ADs'),
        g = a('0HHAH'),
        h = a('sHRDd');
    let i, j, k = b => b;
    var _l = b => {
        const {
            removalInfo: {
                type: _m,
                name: n,
                description: o
            }
        } = b;
        return (0, d.jsxs)(_m, {
            children: [
                (0, d.jsx)(_n, {
                    style: o ? {
                        marginBottom: 10
                    } : void 0,
                    children: (0, d.jsx)(f.default.Text, {
                        italic: !0,
                        children: _m
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
    const _m = (0, e.default)(g.CenteredColumn).attrs({
            className: 'maxAll'
        })(i || (i = k``)),
        _n = e.default.div(j || (j = k``));
}), a.register('pMmde1', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    t(b.exports, 'default', function() {
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
});