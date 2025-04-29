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
c.register('5GzjT', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var g = c('gRbUn'),
        h = c('6jmvl');
    c('O0Kav');
    var i = c('SxihY'),
        j = c('K/2xB'),
        k = c('LihP5'),
        l = c('Rdb4k');
    var _m = (0, h.observer)(() => {
        const {
            hooks: {
                hookJSON: n
            }
        } = (0, j.default)();
        return (0, g.jsx)(l.default, {
            stringifiedData: n,
            onClose: () => {
                (0, k.default)(i.default.none);
            }
        });
    });
}), c.register('Rdb4k', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('quE27'),
        k = c('flG2L'),
        l = c('9N6Bn'),
        m = c('eLsOE'),
        n = c('LpFts'),
        o = c('VLnnS'),
        p = c('T4qsB');
    var _q = (0, h.observer)(a => {
        const [r, s] = i.useState(!1), [t, u, v] = (0, j.useBoolean)(!1), w = (0, l.default)();
        i.useEffect(() => {
            s(!0);
            const x = (0, m.AddInputBlockingUI)().dispose;
            return () => x();
        }, []), i.useEffect(() => (window.addEventListener('TEST_VALUES_VISIBLE', u), window.addEventListener('TEST_VALUES_HIDDEN', v), () => {
            window.removeEventListener('TEST_VALUES_VISIBLE', u), window.removeEventListener('TEST_VALUES_HIDDEN', v);
        })), i.useEffect(() => {
            p.default.data = JSON.parse(a.stringifiedData);
        }, [a.stringifiedData]), i.useEffect(() => {
            w || _x();
        }, [w]);
        const _x = () => {
                s(!1);
            },
            y = (0, l.default)() && r;
        return (0, f.jsx)(o.default.Provider, {
            value: p.default,
            children: (0, f.jsx)(g.default, {
                open: y,
                afterOpenChange: () => {
                    y || a.onClose();
                },
                onClose: _x,
                placement: k.default.drawer.placement,
                closable: !0,
                width: t ? k.default.drawer.widths.testValues : k.default.drawer.widths.default,
                children: (0, f.jsx)(n.default, {})
            })
        });
    });
}), c.register('flG2L', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: 'Hook',
        drawer: {
            placement: 'left',
            widths: {
                default: 450,
                testValues: 700
            }
        }
    };
}), c.register('LpFts', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('flG2L'),
        j = c('lpNzY'),
        k = c('K3Edl');
    let l, m, n, o = a => a;
    var _p = () => (0, f.jsx)(j.default, {
        children: (0, f.jsxs)(_q, {
            children: [
                (0, f.jsxs)(_r, {
                    children: [
                        i.default.name,
                        's'
                    ]
                }),
                (0, f.jsxs)(_s, {
                    children: [
                        i.default.name,
                        's are options that game hosts can customize before playing your map. Use ',
                        i.default.name,
                        's to allow game hosts to modify options such as game difficulty, time limits, or the kit students practice.'
                    ]
                }),
                (0, f.jsx)(k.default, {})
            ]
        })
    });
    const _q = g.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(l || (l = o``)),
        _r = g.default.div(m || (m = o`
  font-size: 36px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold),
        _s = g.default.div(n || (n = o`
  font-size: 18px;
  margin-top: 4px;
`));
}), c.register('lpNzY', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('u4s09'),
        g = c('Eh2Wh'),
        h = c('HOIhZ');
    let i;
    var _j = f.default.div(i || (i = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, g.Fonts.ProductSans);
}), c.register('K3Edl', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('Ll6/N'),
        h = c('6jmvl');
    c('O0Kav');
    var i = c('rvVz6'),
        j = c('TgUk7'),
        k = c('G3E1Q'),
        l = c('tbuJA');
    var _m = (0, h.observer)(() => {
        var n;
        const o = (0, j.default)(),
            p = (0, i.useAmIGameOwner)();
        return (null === (n = o.hooks) || void 0 === n ? void 0 : n.length) && p ? (0, f.jsxs)(g.default, {
            type: 'card',
            style: {
                width: '100%',
                marginTop: 20
            },
            destroyInactiveTabPane: !0,
            children: [
                (0, f.jsx)(g.default.TabPane, {
                    tab: 'Hooks',
                    children: (0, f.jsx)(k.default, {})
                }, 'tab-hooks'),
                (0, f.jsx)(g.default.TabPane, {
                    tab: 'Test Values',
                    children: (0, f.jsx)(l.default, {})
                }, 'tab-test-values')
            ]
        }) : (0, f.jsx)('div', {
            style: {
                marginTop: 15
            },
            className: 'maxWidth',
            children: (0, f.jsx)(k.default, {})
        });
    });
}), c.register('TgUk7', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('T4qsB');
    var _g = () => f.default.data;
}), c.register('T4qsB', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    class h {
        constructor() {
            this.data = {
                hooks: []
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'data', void 0);
    var _i = new h();
}), c.register('G3E1Q', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('quE27'),
        j = c('flG2L'),
        k = c('z5AS7'),
        l = c('CZb2U'),
        m = c('TgUk7'),
        n = c('7SttF'),
        o = c('pwDJ7');
    let p;
    var _q = (0, g.observer)(() => {
        const r = (0, m.default)(),
            [s, t, u] = (0, i.useBoolean)(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_r, {
                    children: [
                        r.hooks.length < k.default.maxHooks ? (0, f.jsxs)(l.HookNewCardButton, {
                            style: {
                                marginBottom: 10
                            },
                            onClick: t,
                            children: [
                                'New ',
                                j.default.name
                            ]
                        }) : null,
                        r.hooks.map((s, t) => (0, f.jsx)(n.default, {
                            id: s.key,
                            type: s.type,
                            index: t,
                            totalHooks: r.hooks.length
                        }, s.key))
                    ]
                }),
                (0, f.jsx)(o.default, {
                    visible: s,
                    close: u
                })
            ]
        });
    });
    const _r = h.default.div.attrs({
        className: 'maxWidth'
    })(p || (p = (a => a)``));
}), c.register('z5AS7', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        maxHooks: 12,
        maxKeyLength: 32,
        maxDisplayNameLength: 64,
        maxDisplayDescriptionLength: 128,
        selectBox: {
            maxOptions: 24,
            maxOptionKeyLength: 64
        },
        hiddenScenario: {
            maxAmount: 8,
            maxNameLength: 64
        }
    };
}), c.register('CZb2U', function(d, e) {
    a(d.exports, 'HookNewCardButton', function() {
        return _n;
    }), a(d.exports, 'HookCardButton', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('QZ0Z+'),
        h = c('u4s09'),
        i = c('HOIhZ'),
        j = c('Eh2Wh');
    let k, l, m = a => a;
    const _n = a => (0, f.jsx)(_p, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, f.jsx)(_q, {
                children: (0, f.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, f.jsx)('i', {
                            style: {
                                color: '#2e7d32',
                                marginRight: 10,
                                fontSize: 28
                            },
                            className: 'fas fa-plus-circle'
                        }),
                        (0, f.jsx)('div', {
                            children: a.children
                        })
                    ]
                })
            })
        }),
        _o = a => (0, f.jsx)(_p, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, f.jsx)(_q, {
                children: a.children
            })
        }),
        _p = (0, h.default)(g.default)(k || (k = m``)),
        _q = h.default.div(l || (l = m`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), i.default.Black, j.FontWeights.Bold);
}), c.register('7SttF', function(d, e) {
    a(d.exports, 'default', function() {
        return _C;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('xAv1a'),
        l = c('AE7vR'),
        m = c('1ZCzi'),
        n = c('Eh2Wh'),
        o = c('quE27'),
        p = c('l5bbb'),
        q = c('zEuNa'),
        r = c('CZb2U'),
        s = c('E6YpH0'),
        t = c('sxAsZ'),
        u = c('TkKuW'),
        v = c('flG2L');
    let w, x, y, z, A, B = a => a;
    var _C = a => {
        const [D, E, F] = (0, o.useBoolean)(!1), G = g.useMemo(() => (0, q.default)(a.type), [a.type]), H = () => {
            l.default.confirm({
                title: `Are you sure you want to delete this ${ v.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, t.default)({
                        action: u.default.removeHook,
                        payload: {
                            key: a.id
                        }
                    });
                }
            });
        }, I = D => {
            (0, t.default)({
                action: u.default.moveHook,
                payload: {
                    key: a.id,
                    direction: D
                }
            });
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(r.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: E,
                    children: (0, f.jsxs)(_D, {
                        children: [
                            (0, f.jsxs)(_E, {
                                children: [
                                    (0, f.jsx)(_G, {
                                        children: G
                                    }),
                                    (0, f.jsx)(_H, {
                                        children: a.id
                                    })
                                ]
                            }),
                            (0, f.jsx)(_F, {
                                children: (0, f.jsx)(j.default, {
                                    overlay: () => (0, f.jsxs)(k.default, {
                                        children: [
                                            (0, f.jsxs)(k.default.Item, {
                                                onClick: (0, s.default)(H),
                                                children: [
                                                    'Delete ',
                                                    v.default.name
                                                ]
                                            }),
                                            a.index > 0 && a.totalHooks > 1 ? (0, f.jsx)(k.default.Item, {
                                                onClick: (0, s.default)(() => I('up')),
                                                children: 'Move Up'
                                            }) : null,
                                            a.index !== a.totalHooks && a.totalHooks > 1 ? (0, f.jsx)(k.default.Item, {
                                                onClick: (0, s.default)(() => I('down')),
                                                children: 'Move Down'
                                            }) : null
                                        ]
                                    }),
                                    children: (0, f.jsx)(i.default, {
                                        shape: 'circle',
                                        type: 'dashed',
                                        icon: (0, f.jsx)(m.default, {})
                                    })
                                })
                            })
                        ]
                    })
                }),
                (0, f.jsx)(p.default, {
                    visible: D,
                    close: F,
                    hookKey: a.id
                })
            ]
        });
    };
    const _D = h.default.div.attrs({
            className: 'flex vc between maxWidth'
        })(w || (w = B``)),
        _E = h.default.div(x || (x = B``)),
        _F = h.default.div(y || (y = B``)),
        _G = h.default.div(z || (z = B`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), n.FontWeights.Normal),
        _H = h.default.div(A || (A = B``));
}), c.register('l5bbb', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('6jmvl');
    c('O0Kav');
    var i = c('flG2L'),
        j = c('lpNzY'),
        k = c('0gC58'),
        l = c('haePJ'),
        m = c('vrO9Z');
    var _n = (0, h.observer)(a => {
        const o = (0, k.default)(a.hookKey);
        return o ? (0, f.jsxs)(g.default, {
            open: a.visible,
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            onClose: a.close,
            closable: !0,
            children: [
                (0, f.jsx)(j.default, {
                    children: (0, f.jsx)(l.default, {
                        name: a.hookKey,
                        type: o.type
                    })
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(m.default, {
                    hookKey: a.hookKey
                })
            ]
        }) : null;
    });
}), c.register('0gC58', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('T4qsB');
    var _g = a => {
        var h, i;
        return null === (h = f.default.data) || void 0 === h || null === (i = h.hooks) || void 0 === i ? void 0 : i.find(h => h.key === a);
    };
}), c.register('haePJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('zEuNa'),
        i = c('flG2L'),
        j = c('Eh2Wh');
    let k, l, m, n = a => a;
    var _o = a => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsxs)(_q, {
                children: [
                    i.default.name,
                    ' - ',
                    (0, h.default)(a.type)
                ]
            }),
            (0, f.jsx)(_r, {
                children: a.name
            })
        ]
    });
    const _p = g.default.div(k || (k = n``)),
        _q = g.default.div(l || (l = n`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _r = g.default.div(m || (m = n`
  font-size: 28px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), c.register('zEuNa', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('RBtfx4');
    var _g = a => a === f.HookType.selectBox ? 'Select Box' : a === f.HookType.number ? 'Number' : a === f.HookType.kit ? 'Kit' : 'Unknown Type';
}), c.register('RBtfx4', function(d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function() {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('vrO9Z', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('Ll6/N'),
        h = c('NU2gN'),
        i = c('O0Kav'),
        j = c('RBtfx4'),
        k = c('lpNzY'),
        l = c('0gC58'),
        m = c('BbOZa'),
        n = c('x36Or'),
        o = c('z6hpQ'),
        p = c('XvVbz');
    var _q = (0, h.observer)(a => {
        const r = (0, l.default)(a.hookKey);
        return (0, f.jsxs)(g.default, {
            style: {
                width: '100%'
            },
            type: 'card',
            children: [
                r.type === j.HookType.selectBox ? (0, f.jsx)(g.default.TabPane, {
                    tab: 'Options',
                    children: (0, f.jsx)(k.default, {
                        children: (0, f.jsx)(o.default, {
                            hookKey: a.hookKey
                        })
                    })
                }, 'tab-hook-select-options') : null,
                r.type === j.HookType.selectBox || r.type === j.HookType.number ? (0, f.jsxs)(i.Fragment, {
                    children: [
                        (0, f.jsx)(g.default.TabPane, {
                            tab: 'Settings',
                            children: (0, f.jsx)(k.default, {
                                children: (0, f.jsx)(p.default, {
                                    hookKey: a.hookKey
                                })
                            })
                        }, 'tab-hook-settings'),
                        (0, f.jsx)(g.default.TabPane, {
                            tab: 'Hidden',
                            children: (0, f.jsx)(k.default, {
                                children: (0, f.jsx)(n.default, {
                                    hookKey: a.hookKey
                                })
                            })
                        }, 'tab-hook-hidden')
                    ]
                }) : null,
                (0, f.jsx)(g.default.TabPane, {
                    tab: 'Devices',
                    children: (0, f.jsx)(k.default, {
                        children: (0, f.jsx)(m.default, {
                            hookKey: a.hookKey
                        })
                    })
                }, 'tab-hook-devices')
            ]
        });
    });
}), c.register('BbOZa', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('K/2xB'),
        i = c('u4s09'),
        j = c('flG2L'),
        k = c('CZb2U'),
        l = c('Eh2Wh'),
        m = c('LihP5'),
        n = c('SxihY');
    let o, p, q, r, s = a => a;
    var _t = a => {
        const {
            world: {
                devices: {
                    devices: u
                }
            },
            me: {
                editing: v
            }
        } = (0, h.default)(), w = g.useMemo(() => {
            const x = [];
            return Array.from(u).map(a => a[1]).forEach(u => {
                u.hooks && u.hooks.connections && u.hooks.connections.length && u.hooks.connections.forEach(w => {
                    if (w.hook === a.hookKey) {
                        const y = u.deviceOption.optionSchema.options.find(y => y.key === w.option).option.label;
                        x.push({
                            deviceId: u.id,
                            deviceOptionId: u.deviceOption.id,
                            deviceName: u.name || u.deviceOption.name,
                            optionName: y
                        });
                    }
                });
            }), x;
        }, []);
        return (0, f.jsx)(_u, {
            children: w.length ? (0, f.jsx)(f.Fragment, {
                children: w.map(a => (0, f.jsx)(k.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: () => {
                        v.device.currentlyEditedDevice = {
                            id: a.deviceId,
                            deviceOptionId: a.deviceOptionId
                        }, (0, m.default)(n.default.editingDevice);
                    },
                    children: (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_w, {
                                children: a.optionName
                            }),
                            (0, f.jsx)(_x, {
                                children: a.deviceName
                            })
                        ]
                    })
                }, a.deviceId + a.optionName))
            }) : (0, f.jsxs)(_v, {
                children: [
                    'No devices are using this ',
                    j.default.name.toLowerCase(),
                    ' yet! Once you connect a device\'s option to this ',
                    j.default.name.toLowerCase(),
                    ', that device will show up here.'
                ]
            })
        });
    };
    const _u = i.default.div(o || (o = s``)),
        _v = i.default.div(p || (p = s`
  font-size: 16px;
`)),
        _w = i.default.div(q || (q = s`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), l.FontWeights.Normal),
        _x = i.default.div(r || (r = s``));
}), c.register('x36Or', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('flG2L'),
        i = c('IN/d9');
    let j, k, l = a => a;
    var _m = a => (0, f.jsxs)(_n, {
        children: [
            (0, f.jsxs)(_o, {
                children: [
                    'Sometimes you don\'t want a ',
                    h.default.name.toLowerCase(),
                    ' to show. Create scenarios to hide a hook under certain conditions. If any are the scenarios are true, the ',
                    h.default.name.toLowerCase(),
                    ' will be hidden from the game host. ',
                    (0, f.jsx)('br', {}),
                    ' ',
                    (0, f.jsx)('br', {}),
                    ' When a ',
                    h.default.name.toLowerCase(),
                    ' is hidden, any device option with a link to this',
                    ' ',
                    h.default.name.toLowerCase(),
                    ' will use the device\'s set option.'
                ]
            }),
            (0, f.jsx)(i.default, {
                hookKey: a.hookKey
            })
        ]
    });
    const _n = g.default.div(j || (j = l``)),
        _o = g.default.div(k || (k = l`
  margin-bottom: 15px;
`));
}), c.register('IN/d9', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('quE27'),
        i = c('z5AS7'),
        j = c('CZb2U'),
        k = c('0gC58'),
        l = c('/35EC'),
        m = c('mD3+2');
    var _n = (0, g.observer)(a => {
        const o = (0, k.default)(a.hookKey),
            [p, q, r] = (0, h.useBoolean)(!1);
        if (!o)
            return null;
        const s = o.hiddenScenarios || [];
        return (0, f.jsxs)(f.Fragment, {
            children: [
                s.length < i.default.hiddenScenario.maxAmount ? (0, f.jsx)(j.HookNewCardButton, {
                    onClick: q,
                    style: {
                        marginBottom: 10
                    },
                    children: 'New Scenario'
                }) : null,
                (o.hiddenScenarios || []).map(o => (0, f.jsx)(m.default, {
                    name: o.name,
                    hookKey: a.hookKey
                }, `scenario-${ o.name }-${ a.hookKey }`)),
                (0, f.jsx)(l.default, {
                    hookKey: a.hookKey,
                    visible: p,
                    close: r
                })
            ]
        });
    });
}), c.register('/35EC', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('3t9ce'),
        i = c('aevdF'),
        j = c('O0Kav'),
        k = c('flG2L'),
        l = c('z5AS7'),
        m = c('TkKuW'),
        n = c('sxAsZ'),
        o = c('lpNzY'),
        p = c('AmTT/');
    var _q = a => {
        const [r, s] = j.useState(''), t = () => {
            const u = r.trim();
            u.length && ((0, n.default)({
                action: m.default.newHiddenScenario,
                payload: {
                    key: a.hookKey,
                    name: u
                }
            }), s(''), a.close());
        };
        return (0, f.jsx)(h.default, {
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            open: a.visible,
            onClose: a.close,
            closable: !0,
            children: (0, f.jsxs)(o.default, {
                children: [
                    (0, f.jsx)(p.HookFormInputLabel, {
                        children: 'Scenario Name'
                    }),
                    (0, f.jsx)(i.default, {
                        size: 'large',
                        placeholder: 'Name here...',
                        value: r,
                        onChange: a => {
                            s(a.target.value);
                        },
                        onPressEnter: t,
                        maxLength: l.default.hiddenScenario.maxNameLength
                    }),
                    (0, f.jsx)(g.default, {
                        size: 'large',
                        block: !0,
                        style: {
                            marginTop: 10,
                            height: 50
                        },
                        type: 'primary',
                        disabled: !r.trim().length,
                        onClick: t,
                        children: 'Add Scenario'
                    })
                ]
            })
        });
    };
}), c.register('TkKuW', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        newHook: 'NEW_HOOK',
        removeHook: 'REMOVE_HOOK',
        newOption: 'NEW_OPTION',
        moveOption: 'MOVE_OPTION',
        removeOption: 'REMOVE_OPTION',
        makeOptionDefault: 'MAKE_OPTION_DEFAULT',
        removeDefaultOption: 'REMOVE_DEFAULT_OPTION',
        setNameOrDescription: 'SET_NAME_OR_DESCRIPTION',
        newHiddenScenario: 'NEW_HIDDEN_SCENARIO',
        newHiddenCondition: 'NEW_HIDDEN_CONDITION',
        removeHiddenScenario: 'REMOVE_HIDDEN_SCENARIO',
        removeHiddenCondition: 'REMOVE_HIDDEN_CONDITION',
        saveHookValueHiddenConditionOptions: 'SAVE_HOOK_VALUE_HIDDEN_CONDITION_OPTIONS',
        saveModeTypeHiddenConditionOptions: 'SAVE_MODE_TYPE_HIDDEN_CONDITION_OPTIONS',
        moveHook: 'MOVE_HOOK',
        changeNumberOption: 'CHANGE_NUMBER_OPTION'
    };
}), c.register('sxAsZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('bzxpD');
    var _g = a => {
        (0, f.default)(a);
    };
}), c.register('bzxpD', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = a => {
        (0, g.default)(f.default.hookAction, {
            action: a.action,
            payload: a.payload
        });
    };
}), c.register('AmTT/', function(d, e) {
    a(d.exports, 'HookFormInputLabel', function() {
        return _k;
    }), a(d.exports, 'HookFormInputLabelDescription', function() {
        return _l;
    });
    var f = c('u4s09'),
        g = c('Eh2Wh');
    let h, i, j = a => a;
    const _k = f.default.div(h || (h = j`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), g.FontWeights.Bold),
        _l = f.default.div(i || (i = j`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), c.register('mD3+2', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('CZb2U'),
        h = c('u4s09'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('xAv1a'),
        l = c('1ZCzi'),
        m = c('quE27'),
        n = c('oC25n'),
        o = c('E6YpH0'),
        p = c('sxAsZ'),
        q = c('TkKuW');
    let r;
    var _s = a => {
        const [t, u, v] = (0, m.useBoolean)(!1), w = () => {
            (0, p.default)({
                action: q.default.removeHiddenScenario,
                payload: {
                    key: a.hookKey,
                    name: a.name
                }
            });
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(g.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: u,
                    children: (0, f.jsxs)(_t, {
                        children: [
                            (0, f.jsx)('div', {
                                children: a.name
                            }),
                            (0, f.jsx)(j.default, {
                                overlay: (0, f.jsx)(k.default, {
                                    children: (0, f.jsx)(k.default.Item, {
                                        onClick: (0, o.default)(w),
                                        children: 'Remove Scenario'
                                    })
                                }),
                                children: (0, f.jsx)(i.default, {
                                    icon: (0, f.jsx)(l.default, {}),
                                    type: 'dashed',
                                    shape: 'circle'
                                })
                            })
                        ]
                    })
                }),
                (0, f.jsx)(n.default, {
                    visible: t,
                    close: v,
                    scenarioName: a.name,
                    hookKey: a.hookKey
                })
            ]
        });
    };
    const _t = h.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(r || (r = (a => a)``));
}), c.register('oC25n', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('VNuyu'),
        h = c('3t9ce'),
        i = c('6jmvl');
    c('O0Kav');
    var j = c('flG2L'),
        k = c('lpNzY'),
        l = c('9UHpy'),
        m = c('0gC58'),
        n = c('Ov5kj'),
        o = c('eeHMI');
    var _p = (0, i.observer)(a => {
        const q = (0, m.default)(a.hookKey);
        if (!q)
            return null;
        const r = (q.hiddenScenarios || []).find(q => q.name === a.scenarioName);
        return r ? (0, f.jsx)(h.default, {
            open: a.visible,
            onClose: a.close,
            width: j.default.drawer.widths.default,
            placement: j.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(k.default, {
                children: [
                    (0, f.jsx)(l.default, {
                        title: a.scenarioName,
                        descriptor: 'Scenario'
                    }),
                    (0, f.jsx)(g.default, {}),
                    (0, f.jsx)(o.default, {
                        hookKey: a.hookKey,
                        scenarioName: a.scenarioName
                    }),
                    r.conditions.map(q => (0, f.jsx)(n.default, {
                        hookKey: a.hookKey,
                        scenarioName: a.scenarioName,
                        condition: q
                    }, `condition-${ q.id }`))
                ]
            })
        }) : null;
    });
}), c.register('9UHpy', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh');
    let i, j, k, l = a => a;
    var _m = a => (0, f.jsxs)(_n, {
        children: [
            (0, f.jsx)(_o, {
                children: a.descriptor
            }),
            (0, f.jsx)(_p, {
                children: a.title
            })
        ]
    });
    const _n = g.default.div(i || (i = l``)),
        _o = g.default.div(j || (j = l`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _p = g.default.div(k || (k = l`
  font-size: 28px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), c.register('Ov5kj', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('YIkl/'),
        i = c('CZb2U'),
        j = c('u4s09'),
        k = c('P1KtI'),
        l = c('M3JwW'),
        m = c('xAv1a'),
        n = c('1ZCzi'),
        o = c('Eh2Wh'),
        p = c('TkKuW'),
        q = c('sxAsZ'),
        r = c('E6YpH0'),
        s = c('quE27'),
        t = c('Ee7EX'),
        u = c('flG2L');
    let v, w, x, y = a => a;
    var _z = a => {
        const [A, B, C] = (0, s.useBoolean)(!1), D = g.useMemo(() => a.condition.type === h.HiddenConditionType.hookValue ? `${ u.default.name } Value` : a.condition.type === h.HiddenConditionType.modeType ? 'Mode' : 'Unknown', [a.condition.type]), E = () => {
            (0, q.default)({
                action: p.default.removeHiddenCondition,
                payload: {
                    key: a.hookKey,
                    scenario: a.scenarioName,
                    condition: a.condition.id
                }
            });
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: B,
                    children: (0, f.jsxs)(_A, {
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)(_B, {
                                        children: 'Condition'
                                    }),
                                    (0, f.jsx)(_C, {
                                        children: D
                                    })
                                ]
                            }),
                            (0, f.jsx)(l.default, {
                                overlay: (0, f.jsx)(m.default, {
                                    children: (0, f.jsx)(m.default.Item, {
                                        onClick: (0, r.default)(E),
                                        children: 'Remove Condition'
                                    })
                                }),
                                children: (0, f.jsx)(k.default, {
                                    icon: (0, f.jsx)(n.default, {}),
                                    type: 'dashed',
                                    shape: 'circle'
                                })
                            })
                        ]
                    })
                }),
                (0, f.jsx)(t.default, {
                    visible: A,
                    close: C,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    condition: a.condition.id
                })
            ]
        });
    };
    const _A = j.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(v || (v = y``)),
        _B = j.default.div(w || (w = y`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), o.FontWeights.Normal),
        _C = j.default.div(x || (x = y``));
}), c.register('E6YpH0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => d => {
        d.domEvent.stopPropagation(), a && a();
    };
}), c.register('Ee7EX', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('6jmvl');
    c('O0Kav');
    var i = c('flG2L'),
        j = c('YIkl/'),
        k = c('lpNzY'),
        l = c('0gC58'),
        m = c('wSwOw'),
        n = c('prekA');
    var _o = (0, h.observer)(a => {
        const p = (0, l.default)(a.hookKey);
        if (!p)
            return null;
        const q = (p.hiddenScenarios || []).find(p => p.name === a.scenarioName);
        if (!q)
            return null;
        const r = q.conditions.find(p => p.id === a.condition);
        if (!r)
            return null;
        return (0, f.jsx)(g.default, {
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            open: a.visible,
            onClose: a.close,
            closable: !0,
            children: (0, f.jsx)(k.default, {
                children: r.type === j.HiddenConditionType.hookValue ? (0, f.jsx)(m.default, {
                    condition: r,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    close: a.close
                }) : r.type === j.HiddenConditionType.modeType ? (0, f.jsx)(n.default, {
                    condition: r,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    close: a.close
                }) : null
            })
        });
    });
}), c.register('wSwOw', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn'),
        g = c('qMSe6'),
        h = c('/kLkG0'),
        i = c('P1KtI'),
        j = c('VNuyu'),
        k = c('aevdF'),
        l = c('u8Dt8'),
        m = c('6jmvl'),
        n = c('O0Kav'),
        o = c('u4s09'),
        p = c('flG2L'),
        q = c('TkKuW'),
        r = c('YIkl/'),
        s = c('sxAsZ'),
        t = c('9UHpy'),
        u = c('AmTT/'),
        v = c('TgUk7');
    let w;
    var _x = (0, m.observer)(a => {
        const {
            options: y
        } = a.condition, z = (0, v.default)(), [A, B] = n.useState(null == y ? void 0 : y.key), [C, D] = n.useState(null == y ? void 0 : y.compare), [E, F] = n.useState(null == y ? void 0 : y.value);
        if (n.useEffect(() => {
                B(null == y ? void 0 : y.key);
            }, [null == y ? void 0 : y.key]), n.useEffect(() => {
                D(null == y ? void 0 : y.compare);
            }, [null == y ? void 0 : y.compare]), n.useEffect(() => {
                F(null == y ? void 0 : y.value);
            }, [null == y ? void 0 : y.value]), !y)
            return null;
        const G = A.trim() === a.hookKey,
            H = z.hooks.filter(y => y.key !== a.hookKey).map(a => ({
                value: a.key
            }));
        return (0, f.jsxs)(_y, {
            children: [
                (0, f.jsx)(t.default, {
                    title: `${ p.default.name } Value`,
                    descriptor: 'Condition'
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsxs)(u.HookFormInputLabel, {
                    children: [
                        p.default.name,
                        ' Name'
                    ]
                }),
                (0, f.jsx)(h.default, {
                    value: A,
                    options: H,
                    onChange: a => {
                        B(a);
                    },
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Name here...',
                    filterOption: (a, y) => {
                        var I;
                        return -1 !== (null === (I = y.value) || void 0 === I ? void 0 : I.toUpperCase().indexOf(a.toUpperCase()));
                    }
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(u.HookFormInputLabel, {
                    children: 'Comparison'
                }),
                (0, f.jsxs)(l.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        D(a);
                    },
                    value: C,
                    children: [
                        (0, f.jsx)(l.default.Option, {
                            value: r.HookValueHiddenConditionCompare.equal,
                            children: 'Equals'
                        }),
                        (0, f.jsx)(l.default.Option, {
                            value: r.HookValueHiddenConditionCompare.notEqual,
                            children: 'Does Not Equal'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(u.HookFormInputLabel, {
                    children: 'Value'
                }),
                (0, f.jsx)(k.default, {
                    value: E,
                    onChange: a => {
                        F(a.target.value);
                    },
                    size: 'large',
                    placeholder: 'Value here...'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, f.jsx)(i.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: {
                        height: 50
                    },
                    disabled: G,
                    onClick: () => {
                        G || ((0, s.default)({
                            action: q.default.saveHookValueHiddenConditionOptions,
                            payload: {
                                key: a.hookKey,
                                scenario: a.scenarioName,
                                condition: a.condition.id,
                                options: {
                                    key: A,
                                    compare: C,
                                    value: E
                                }
                            }
                        }), a.close());
                    },
                    children: 'Save'
                }),
                G ? (0, f.jsx)(g.default, {
                    type: 'error',
                    message: `Invalid ${ p.default.name } Name`,
                    description: `You cannot hide a ${ p.default.name.toLowerCase() } based off its own value.`,
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0
                }) : null
            ]
        });
    });
    const _y = o.default.div(w || (w = (a => a)``));
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
}), c.register('prekA', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('VNuyu'),
        i = c('u8Dt8'),
        j = c('O0Kav'),
        k = c('u4s09'),
        l = c('flG2L'),
        m = c('TkKuW'),
        n = c('XVrof3'),
        o = c('YIkl/'),
        p = c('sxAsZ'),
        q = c('9UHpy'),
        r = c('AmTT/');
    let s;
    var _t = a => {
        const {
            options: u
        } = a.condition, [v, w] = j.useState(null == u ? void 0 : u.mode), [x, y] = j.useState(null == u ? void 0 : u.compare);
        if (j.useEffect(() => {
                w(null == u ? void 0 : u.mode);
            }, [null == u ? void 0 : u.mode]), j.useEffect(() => {
                y(null == u ? void 0 : u.compare);
            }, [null == u ? void 0 : u.compare]), !u)
            return null;
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(q.default, {
                    title: `${ l.default.name } Value`,
                    descriptor: 'Condition'
                }),
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)(r.HookFormInputLabel, {
                    children: 'Hide if the mode...'
                }),
                (0, f.jsxs)(i.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        y(a);
                    },
                    value: x,
                    children: [
                        (0, f.jsx)(i.default.Option, {
                            value: o.ModeTypeHiddenConditionCompare.equal,
                            children: 'Is'
                        }),
                        (0, f.jsx)(i.default.Option, {
                            value: o.ModeTypeHiddenConditionCompare.notEqual,
                            children: 'Is Not'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(r.HookFormInputLabel, {
                    children: v === n.MapModeType.assignment ? 'an...' : 'a...'
                }),
                (0, f.jsxs)(i.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        w(a);
                    },
                    value: v,
                    children: [
                        (0, f.jsx)(i.default.Option, {
                            value: n.MapModeType.liveGame,
                            children: 'Live Game'
                        }),
                        (0, f.jsx)(i.default.Option, {
                            value: n.MapModeType.assignment,
                            children: 'Assignment'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, f.jsx)(g.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: {
                        height: 50
                    },
                    onClick: () => {
                        (0, p.default)({
                            action: m.default.saveModeTypeHiddenConditionOptions,
                            payload: {
                                key: a.hookKey,
                                scenario: a.scenarioName,
                                condition: a.condition.id,
                                options: {
                                    mode: v,
                                    compare: x
                                }
                            }
                        }), a.close();
                    },
                    children: 'Save'
                })
            ]
        });
    };
    const _u = k.default.div(s || (s = (a => a)``));
}), c.register('eeHMI', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('quE27'),
        h = c('CZb2U'),
        i = c('CJzqO');
    var _j = a => {
        const [k, l, m] = (0, g.useBoolean)(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.HookNewCardButton, {
                    onClick: l,
                    style: {
                        marginBottom: 10
                    },
                    children: 'New Condition'
                }),
                (0, f.jsx)(i.default, {
                    visible: k,
                    close: m,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName
                })
            ]
        });
    };
}), c.register('CJzqO', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('VNuyu'),
        h = c('3t9ce');
    c('O0Kav');
    var i = c('flG2L'),
        j = c('lpNzY'),
        k = c('u4s09'),
        l = c('CZb2U'),
        m = c('Eh2Wh'),
        n = c('sxAsZ'),
        o = c('TkKuW'),
        p = c('YIkl/');
    let q, r, s, t, u = a => a;
    var _v = a => {
        const w = w => {
            (0, n.default)({
                action: o.default.newHiddenCondition,
                payload: {
                    key: a.hookKey,
                    scenario: a.scenarioName,
                    conditionType: w
                }
            }), a.close();
        };
        return (0, f.jsx)(h.default, {
            open: a.visible,
            onClose: a.close,
            width: i.default.drawer.widths.default,
            placement: i.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(j.default, {
                children: [
                    (0, f.jsx)(_w, {
                        children: 'New Condition'
                    }),
                    (0, f.jsx)(_x, {
                        children: 'Select a condition type'
                    }),
                    (0, f.jsx)(g.default, {}),
                    (0, f.jsxs)(l.HookCardButton, {
                        onClick: () => w(p.HiddenConditionType.hookValue),
                        children: [
                            (0, f.jsx)(_y, {
                                children: 'Hook Value'
                            }),
                            (0, f.jsx)(_z, {
                                children: 'Hide depending on the value of another hook'
                            })
                        ]
                    }),
                    (0, f.jsxs)(l.HookCardButton, {
                        onClick: () => w(p.HiddenConditionType.modeType),
                        style: {
                            marginTop: 10
                        },
                        children: [
                            (0, f.jsx)(_y, {
                                children: 'Mode'
                            }),
                            (0, f.jsx)(_z, {
                                children: 'Hide depending on the mode (live game or assignment)'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const _w = k.default.div(q || (q = u`
  font-size: 28px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold),
        _x = k.default.div(r || (r = u`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _y = k.default.div(s || (s = u``)),
        _z = k.default.div(t || (t = u`
  font-size: 15px;
  font-weight: ${ 0 };
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`), m.FontWeights.Normal);
}), c.register('z6hpQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('quE27'),
        j = c('z5AS7'),
        k = c('CZb2U'),
        l = c('0gC58'),
        m = c('2QWnF'),
        n = c('J3JRw');
    let o;
    var _p = (0, g.observer)(a => {
        const q = (0, l.default)(a.hookKey),
            [r, s, t] = (0, i.useBoolean)(!1);
        if (!q)
            return null;
        const u = q.options;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_q, {
                    children: u.options.length <= j.default.selectBox.maxOptions ? (0, f.jsx)(k.HookNewCardButton, {
                        onClick: s,
                        style: {
                            marginBottom: 10
                        },
                        children: 'New Option'
                    }) : null
                }),
                u.options.map((q, r) => (0, f.jsx)(n.default, {
                    name: q,
                    index: r,
                    numberOfItems: u.options.length,
                    hookKey: a.hookKey,
                    isDefaultOption: u.defaultOption === q
                }, `hook-${ a.hookKey }-${ q }`)),
                (0, f.jsx)(m.default, {
                    hookKey: a.hookKey,
                    visible: r,
                    close: t
                })
            ]
        });
    });
    const _q = h.default.div.attrs({
        className: 'maxWidth'
    })(o || (o = (a => a)``));
}), c.register('2QWnF', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('3t9ce'),
        i = c('aevdF'),
        j = c('O0Kav'),
        k = c('flG2L'),
        l = c('TkKuW'),
        m = c('sxAsZ'),
        n = c('lpNzY'),
        o = c('AmTT/');
    var _p = a => {
        const [q, r] = j.useState(''), s = () => {
            q.trim().length && ((0, m.default)({
                action: l.default.newOption,
                payload: {
                    key: a.hookKey,
                    option: q.trim()
                }
            }), a.close(), r(''));
        };
        return (0, f.jsxs)(h.default, {
            open: a.visible,
            onClose: a.close,
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            closable: !0,
            children: [
                (0, f.jsxs)(n.default, {
                    children: [
                        (0, f.jsx)(o.HookFormInputLabel, {
                            children: 'Option Name'
                        }),
                        (0, f.jsx)(i.default, {
                            value: q,
                            onChange: a => {
                                r(a.target.value);
                            },
                            size: 'large',
                            placeholder: 'Option name here...',
                            onPressEnter: s
                        })
                    ]
                }),
                (0, f.jsx)(g.default, {
                    size: 'large',
                    block: !0,
                    style: {
                        marginTop: 10,
                        height: 50
                    },
                    type: 'primary',
                    disabled: !q.trim().length,
                    onClick: s,
                    children: 'Add Option'
                })
            ]
        });
    };
}), c.register('J3JRw', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('CZb2U'),
        h = c('u4s09'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('xAv1a'),
        l = c('1ZCzi'),
        m = c('sxAsZ'),
        n = c('TkKuW'),
        o = c('E6YpH0');
    let p;
    var _q = a => {
        const r = r => {
                (0, m.default)({
                    action: n.default.moveOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name,
                        direction: r
                    }
                });
            },
            s = () => {
                (0, m.default)({
                    action: n.default.removeOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            },
            t = () => {
                (0, m.default)({
                    action: n.default.makeOptionDefault,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            },
            u = () => {
                (0, m.default)({
                    action: n.default.removeDefaultOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            };
        return (0, f.jsx)(g.HookCardButton, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: (0, f.jsxs)(_r, {
                children: [
                    (0, f.jsx)('div', {
                        children: a.name
                    }),
                    (0, f.jsx)(j.default, {
                        overlay: (0, f.jsxs)(k.default, {
                            children: [
                                a.isDefaultOption ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(u),
                                    children: 'Remove As Default Option'
                                }, 'remove-as-default-option') : (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(t),
                                    children: 'Make Default Option'
                                }, 'make-default-option'),
                                0 !== a.index ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(() => r('up')),
                                    children: 'Move Up'
                                }, 'move-up') : null,
                                a.index !== a.numberOfItems - 1 ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(() => r('down')),
                                    children: 'Move Down'
                                }, 'move-down') : null,
                                (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(s),
                                    children: 'Remove Option'
                                }, 'remove-option')
                            ]
                        }),
                        children: (0, f.jsx)(i.default, {
                            shape: 'circle',
                            type: 'dashed',
                            icon: (0, f.jsx)(l.default, {})
                        })
                    })
                ]
            })
        });
    };
    const _r = h.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(p || (p = (a => a)``));
}), c.register('XvVbz', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('6jmvl'),
        h = c('O0Kav'),
        i = c('flG2L'),
        j = c('AmTT/'),
        k = c('u4s09'),
        l = c('aevdF'),
        m = c('0gC58'),
        n = c('sxAsZ'),
        o = c('TkKuW'),
        p = c('z5AS7'),
        q = c('RBtfx4'),
        r = c('nqLCG');
    let s;
    const t = i.default.name.toLowerCase();
    var _u = (0, g.observer)(a => {
        const v = (0, m.default)(a.hookKey),
            [w, x] = h.useState(null == v ? void 0 : v.displayName),
            [y, z] = h.useState(null == v ? void 0 : v.displayDescription);
        h.useEffect(() => {
            x(null == v ? void 0 : v.displayName);
        }, [null == v ? void 0 : v.displayName]), h.useEffect(() => {
            z(null == v ? void 0 : v.displayDescription);
        }, [null == v ? void 0 : v.displayDescription]);
        return v ? (0, f.jsxs)(_v, {
            children: [
                v.type === q.HookType.number ? (0, f.jsx)(r.default, {
                    hookKey: a.hookKey,
                    options: v.options
                }) : null,
                (0, f.jsx)(j.HookFormInputLabel, {
                    children: 'Display Name'
                }),
                (0, f.jsxs)(j.HookFormInputLabelDescription, {
                    children: [
                        'This ',
                        t,
                        ' corresponds to an option that the game host will set before loading into your map. Set a display name that will make sense to them based off that this ',
                        t,
                        ' customizes. Or leave it blank to use the ',
                        t,
                        '\'s name.'
                    ]
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    placeholder: v.key,
                    value: w,
                    onChange: a => {
                        x(a.target.value);
                    },
                    onBlur: () => {
                        (0, n.default)({
                            action: o.default.setNameOrDescription,
                            payload: {
                                key: a.hookKey,
                                value: w,
                                property: 'displayName'
                            }
                        });
                    },
                    maxLength: p.default.maxDisplayNameLength
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, f.jsx)(j.HookFormInputLabel, {
                    children: 'Description'
                }),
                (0, f.jsx)(j.HookFormInputLabelDescription, {
                    children: 'Optional description used to give the game host more info on what this hook customizes.'
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    placeholder: 'Description here...',
                    value: y,
                    onChange: a => {
                        z(a.target.value);
                    },
                    onBlur: () => {
                        (0, n.default)({
                            action: o.default.setNameOrDescription,
                            payload: {
                                key: a.hookKey,
                                value: y,
                                property: 'displayDescription'
                            }
                        });
                    },
                    maxLength: p.default.maxDisplayDescriptionLength
                })
            ]
        }) : null;
    });
    const _v = k.default.div(s || (s = (a => a)``));
}), c.register('nqLCG', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('AmTT/'),
        i = c('sxAsZ'),
        j = c('TkKuW'),
        k = c('9zaF+'),
        l = c('JcaZI');
    const m = {
        width: '100%'
    };
    var _n = a => {
        var o, p, q, r;
        const [s, t] = g.useState({
            defaultValue: a.options.defaultValue,
            min: a.options.min,
            max: a.options.max,
            step: a.options.step
        });
        g.useEffect(() => {
            t({
                defaultValue: a.options.defaultValue,
                min: a.options.min,
                max: a.options.max,
                step: a.options.step
            });
        }, [
            null === (o = a.options) || void 0 === o ? void 0 : o.defaultValue,
            null === (p = a.options) || void 0 === p ? void 0 : p.min,
            null === (q = a.options) || void 0 === q ? void 0 : q.max,
            null === (r = a.options) || void 0 === r ? void 0 : r.step
        ]);
        const u = o => p => {
            ((o, p) => {
                (0, i.default)({
                    action: j.default.changeNumberOption,
                    payload: {
                        hookKey: a.hookKey,
                        key: o,
                        value: p
                    }
                }), t({
                    ...s,
                    [o]: p
                });
            })(o, p);
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.HookFormInputLabel, {
                    children: 'Default Value'
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: '0',
                    onChange: u('defaultValue'),
                    value: s.defaultValue,
                    min: s.min,
                    max: s.max,
                    step: s.step
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, f.jsx)(h.HookFormInputLabel, {
                    children: 'Minimum'
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Minimum here...',
                    onChange: u('min'),
                    value: s.min,
                    max: (0, k.isNil)(s.defaultValue) ? void 0 : s.defaultValue
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, f.jsx)(h.HookFormInputLabel, {
                    children: 'Maximum'
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Maximum here...',
                    onChange: u('max'),
                    value: s.max,
                    min: (0, k.isNil)(s.defaultValue) ? void 0 : s.defaultValue
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, f.jsx)(h.HookFormInputLabel, {
                    children: 'Step'
                }),
                (0, f.jsx)(h.HookFormInputLabelDescription, {
                    children: 'Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50.'
                }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Step here...',
                    onChange: u('step'),
                    value: s.step,
                    min: 0.01
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                })
            ]
        });
    };
}), c.register('pwDJ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('VNuyu'),
        j = c('3t9ce'),
        k = c('aevdF'),
        l = c('u8Dt8'),
        m = c('flG2L'),
        n = c('lpNzY'),
        o = c('u4s09'),
        p = c('RBtfx4'),
        q = c('Eh2Wh'),
        r = c('sxAsZ'),
        s = c('TkKuW'),
        t = c('z5AS7'),
        u = c('AmTT/');
    let v;
    const w = p.HookType.selectBox;
    var _x = a => {
        const [y, z] = g.useState(''), [A, B] = g.useState(w);
        return (0, f.jsx)(j.default, {
            open: a.visible,
            onClose: a.close,
            placement: m.default.drawer.placement,
            width: m.default.drawer.widths.default,
            closable: !0,
            children: (0, f.jsxs)(n.default, {
                children: [
                    (0, f.jsxs)(_y, {
                        children: [
                            'New ',
                            m.default.name
                        ]
                    }),
                    (0, f.jsx)(i.default, {}),
                    (0, f.jsxs)(u.HookFormInputLabel, {
                        children: [
                            m.default.name,
                            ' Name'
                        ]
                    }),
                    (0, f.jsx)(k.default, {
                        size: 'large',
                        style: {
                            width: '100%'
                        },
                        placeholder: 'Name here...',
                        onChange: a => {
                            z(a.target.value);
                        },
                        value: y,
                        maxLength: t.default.maxKeyLength
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            height: 20
                        }
                    }),
                    (0, f.jsxs)(u.HookFormInputLabel, {
                        children: [
                            m.default.name,
                            ' Type'
                        ]
                    }),
                    (0, f.jsxs)(l.default, {
                        size: 'large',
                        style: {
                            width: '100%'
                        },
                        value: A,
                        onChange: a => {
                            B(a);
                        },
                        children: [
                            (0, f.jsx)(l.default.Option, {
                                value: p.HookType.selectBox,
                                children: 'Select Box'
                            }),
                            (0, f.jsx)(l.default.Option, {
                                value: p.HookType.number,
                                children: 'Number'
                            }),
                            (0, f.jsx)(l.default.Option, {
                                value: p.HookType.kit,
                                children: 'Kit'
                            })
                        ]
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            height: 30
                        }
                    }),
                    (0, f.jsxs)(h.default, {
                        block: !0,
                        size: 'large',
                        type: 'primary',
                        style: {
                            height: 60
                        },
                        onClick: () => {
                            y && A && ((0, r.default)({
                                action: s.default.newHook,
                                payload: {
                                    key: y,
                                    type: A
                                }
                            }), z(''), B(w), a.close());
                        },
                        children: [
                            'Create ',
                            m.default.name
                        ]
                    })
                ]
            })
        });
    };
    const _y = o.default.div(v || (v = (a => a)`
  font-size: 28px;
  font-weight: ${ 0 };
`), q.FontWeights.UltraBold);
}), c.register('tbuJA', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('130cP'),
        l = c('9kbT6'),
        m = c('HOIhZ'),
        n = c('flG2L'),
        o = c('ywRRc'),
        p = c('fI6of'),
        q = c('mqV/r'),
        r = c('K/2xB'),
        s = c('0v55W'),
        t = c('TgUk7'),
        u = c('XVrof3'),
        v = c('u8Fxu');
    let w;
    var _x = (0, h.observer)(() => {
        const y = i.useRef(),
            z = (0, t.default)(),
            {
                me: {
                    preferences: A
                }
            } = (0, r.default)(),
            B = y => {
                A.startGameWithMode = y;
            };
        (0, v.useWillUnmount)(() => {
            B(u.MapModeType.liveGame);
        }), i.useEffect(() => (window.dispatchEvent(new CustomEvent('TEST_VALUES_VISIBLE')), () => {
            window.dispatchEvent(new CustomEvent('TEST_VALUES_HIDDEN'));
        }), []);
        const C = () => {
            (0, s.default)(o.default.startGame, {
                ownerAsSpectator: p.default.session.ownerRole === q.default.spectator,
                hookFormState: y.current,
                modeType: p.default.me.preferences.startGameWithMode
            });
        };
        return (0, f.jsx)(_y, {
            children: (0, f.jsx)(k.default, {
                hooks: z,
                modeType: A.startGameWithMode,
                location: l.HookFormLocation.editor,
                footer: y => 0 === y ? (0, f.jsxs)('div', {
                    style: {
                        fontSize: 16
                    },
                    children: [
                        'No ',
                        n.default.name.toLowerCase(),
                        's to configure here yet. For Select Box ',
                        n.default.name,
                        's, make sure you create selectable options for it to show up here!'
                    ]
                }) : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(g.default, {
                            size: 'large',
                            type: 'primary',
                            block: !0,
                            style: {
                                height: 60,
                                marginTop: 15
                            },
                            onClick: C,
                            children: 'Start Game With Test Values'
                        }),
                        (0, f.jsx)(g.default, {
                            block: !0,
                            style: {
                                marginTop: 10
                            },
                            onClick: () => {
                                A.startGameWithMode === u.MapModeType.liveGame ? B(u.MapModeType.assignment) : B(u.MapModeType.liveGame);
                            },
                            children: A.startGameWithMode === u.MapModeType.liveGame ? 'Live Game' : 'Assignment'
                        })
                    ]
                }),
                onStateChange: z => y.current = z
            })
        });
    });
    const _y = j.default.div(w || (w = (a => a)`
  padding: 2px 10px 40px 10px;
  color: ${ 0 };
`), m.default.Black);
}), c.register('VLnnS', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('T4qsB');
    var _h = f.createContext(g.default);
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
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
}), c.register('Qjtm3', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function() {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
});