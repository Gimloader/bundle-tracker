function a(a, b, c, r) {
    Object.defineProperty(a, b, {
        get: c,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('nj8vi', function(b, r) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return k;
    });
    var e = c('8kSQZ'),
        f = c('Vlfxs');
    c('uPP4W');
    var g = c('iAe3o'),
        h = c('am7L5'),
        i = c('TnPB+'),
        j = c('ugV6X');
    var k = (0, f.observer)(() => {
        const {
            hooks: {
                hookJSON: l
            }
        } = (0, h.default)();
        return (0, e.jsx)(j.default, {
            stringifiedData: l,
            onClose: () => {
                (0, i.default)(g.default.none);
            }
        });
    });
}), c.register('ugV6X', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('PjB0f'),
        i = c('9a8Pk'),
        j = c('c8w5r'),
        k = c('xck3q'),
        l = c('QgmDb'),
        m = c('3iZfA'),
        n = c('XiR4U');
    var o = (0, f.observer)(a => {
        const [p, q] = g.useState(!1), [r, s, t] = (0, h.useBoolean)(!1), u = (0, j.default)();
        g.useEffect(() => {
            q(!0);
            const v = (0, k.AddInputBlockingUI)().dispose;
            return () => v();
        }, []), g.useEffect(() => (window.addEventListener('TEST_VALUES_VISIBLE', s), window.addEventListener('TEST_VALUES_HIDDEN', t), () => {
            window.removeEventListener('TEST_VALUES_VISIBLE', s), window.removeEventListener('TEST_VALUES_HIDDEN', t);
        })), g.useEffect(() => {
            n.default.data = JSON.parse(a.stringifiedData);
        }, [a.stringifiedData]), g.useEffect(() => {
            u || v();
        }, [u]);
        const v = () => {
                q(!1);
            },
            w = (0, j.default)() && p;
        return (0, d.jsx)(m.default.Provider, {
            value: n.default,
            children: (0, d.jsx)(e.default, {
                open: w,
                afterOpenChange: () => {
                    w || a.onClose();
                },
                onClose: v,
                placement: i.default.drawer.placement,
                closable: !0,
                width: r ? i.default.drawer.widths.testValues : i.default.drawer.widths.default,
                children: (0, d.jsx)(l.default, {})
            })
        });
    });
}), c.register('9a8Pk', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: 'Hook',
        drawer: {
            placement: 'left',
            widths: {
                default: 450,
                testValues: 700
            }
        }
    };
}), c.register('QgmDb', function(b, s) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('9a8Pk'),
        h = c('vaQAz'),
        i = c('FoKFN');
    let j, k, l, m = a => a;
    var n = () => (0, d.jsx)(h.default, {
        children: (0, d.jsxs)(o, {
            children: [
                (0, d.jsxs)(p, {
                    children: [
                        g.default.name,
                        's'
                    ]
                }),
                (0, d.jsxs)(q, {
                    children: [
                        g.default.name,
                        's are options that game hosts can customize before playing your map. Use ',
                        g.default.name,
                        's to allow game hosts to modify options such as game difficulty, time limits, or the kit students practice.'
                    ]
                }),
                (0, d.jsx)(i.default, {})
            ]
        })
    });
    const o = e.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(j || (j = m``)),
        p = e.default.div(k || (k = m`
  font-size: 36px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        q = e.default.div(l || (l = m`
  font-size: 18px;
  margin-top: 4px;
`));
}), c.register('vaQAz', function(b, s) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('h99Nu'),
        e = c('gSUVO'),
        f = c('S/jX4');
    let g;
    var h = d.default.div(g || (g = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), f.default.Black, e.Fonts.ProductSans);
}), c.register('FoKFN', function(b, s) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('/nMwY'),
        f = c('Vlfxs');
    c('uPP4W');
    var g = c('SB1TS'),
        h = c('7mlcg'),
        i = c('ymRjp'),
        j = c('EG1bC');
    var k = (0, f.observer)(() => {
        var l;
        const m = (0, h.default)(),
            n = (0, g.useAmIGameOwner)();
        return (null === (l = m.hooks) || void 0 === l ? void 0 : l.length) && n ? (0, d.jsxs)(e.default, {
            type: 'card',
            style: {
                width: '100%',
                marginTop: 20
            },
            destroyInactiveTabPane: !0,
            children: [
                (0, d.jsx)(e.default.TabPane, {
                    tab: 'Hooks',
                    children: (0, d.jsx)(i.default, {})
                }, 'tab-hooks'),
                (0, d.jsx)(e.default.TabPane, {
                    tab: 'Test Values',
                    children: (0, d.jsx)(j.default, {})
                }, 'tab-test-values')
            ]
        }) : (0, d.jsx)('div', {
            style: {
                marginTop: 15
            },
            className: 'maxWidth',
            children: (0, d.jsx)(i.default, {})
        });
    });
}), c.register('7mlcg', function(b, s) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('XiR4U');
    var e = () => d.default.data;
}), c.register('XiR4U', function(b, s) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    class f {
        constructor() {
            this.data = {
                hooks: []
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'data', void 0);
    var g = new f();
}), c.register('ymRjp', function(b, s) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('PjB0f'),
        h = c('9a8Pk'),
        i = c('gXcsF'),
        j = c('bzk6e'),
        k = c('7mlcg'),
        l = c('A5wKW'),
        m = c('9QZbK');
    let n;
    var o = (0, e.observer)(() => {
        const p = (0, k.default)(),
            [q, r, s] = (0, g.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(p, {
                    children: [
                        p.hooks.length < i.default.maxHooks ? (0, d.jsxs)(j.HookNewCardButton, {
                            style: {
                                marginBottom: 10
                            },
                            onClick: r,
                            children: [
                                'New ',
                                h.default.name
                            ]
                        }) : null,
                        p.hooks.map((q, r) => (0, d.jsx)(l.default, {
                            id: q.key,
                            type: q.type,
                            index: r,
                            totalHooks: p.hooks.length
                        }, q.key))
                    ]
                }),
                (0, d.jsx)(m.default, {
                    visible: q,
                    close: s
                })
            ]
        });
    });
    const p = f.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (a => a)``));
}), c.register('gXcsF', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('bzk6e', function(b, D) {
    a(b.exports, 'HookNewCardButton', function() {
        return l;
    }), a(b.exports, 'HookCardButton', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('f9f+a'),
        f = c('h99Nu'),
        g = c('S/jX4'),
        h = c('gSUVO');
    let i, j, k = a => a;
    const l = a => (0, d.jsx)(n, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, d.jsx)(o, {
                children: (0, d.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, d.jsx)('i', {
                            style: {
                                color: '#2e7d32',
                                marginRight: 10,
                                fontSize: 28
                            },
                            className: 'fas fa-plus-circle'
                        }),
                        (0, d.jsx)('div', {
                            children: a.children
                        })
                    ]
                })
            })
        }),
        m = a => (0, d.jsx)(n, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, d.jsx)(o, {
                children: a.children
            })
        }),
        n = (0, f.default)(e.default)(i || (i = k``)),
        o = f.default.div(j || (j = k`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), g.default.Black, h.FontWeights.Bold);
}), c.register('A5wKW', function(b, D) {
    a(b.exports, 'default', function() {
        return A;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('u3X1v'),
        j = c('cR5QE'),
        k = c('j/N3t'),
        l = c('gSUVO'),
        m = c('PjB0f'),
        n = c('OOHxb'),
        o = c('DuuvX'),
        p = c('bzk6e'),
        q = c('3I8Ro0'),
        r = c('//+kT'),
        s = c('HlKeV'),
        t = c('9a8Pk');
    let u, v, w, x, y, z = a => a;
    var A = a => {
        const [B, C, D] = (0, m.useBoolean)(!1), E = e.useMemo(() => (0, o.default)(a.type), [a.type]), F = () => {
            j.default.confirm({
                title: `Are you sure you want to delete this ${ t.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, r.default)({
                        action: s.default.removeHook,
                        payload: {
                            key: a.id
                        }
                    });
                }
            });
        }, G = B => {
            (0, r.default)({
                action: s.default.moveHook,
                payload: {
                    key: a.id,
                    direction: B
                }
            });
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(p.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: C,
                    children: (0, d.jsxs)(B, {
                        children: [
                            (0, d.jsxs)(C, {
                                children: [
                                    (0, d.jsx)(E, {
                                        children: E
                                    }),
                                    (0, d.jsx)(F, {
                                        children: a.id
                                    })
                                ]
                            }),
                            (0, d.jsx)(D, {
                                children: (0, d.jsx)(h.default, {
                                    overlay: () => (0, d.jsxs)(i.default, {
                                        children: [
                                            (0, d.jsxs)(i.default.Item, {
                                                onClick: (0, q.default)(F),
                                                children: [
                                                    'Delete ',
                                                    t.default.name
                                                ]
                                            }),
                                            a.index > 0 && a.totalHooks > 1 ? (0, d.jsx)(i.default.Item, {
                                                onClick: (0, q.default)(() => G('up')),
                                                children: 'Move Up'
                                            }) : null,
                                            a.index !== a.totalHooks && a.totalHooks > 1 ? (0, d.jsx)(i.default.Item, {
                                                onClick: (0, q.default)(() => G('down')),
                                                children: 'Move Down'
                                            }) : null
                                        ]
                                    }),
                                    children: (0, d.jsx)(g.default, {
                                        shape: 'circle',
                                        type: 'dashed',
                                        icon: (0, d.jsx)(k.default, {})
                                    })
                                })
                            })
                        ]
                    })
                }),
                (0, d.jsx)(n.default, {
                    visible: B,
                    close: D,
                    hookKey: a.id
                })
            ]
        });
    };
    const B = f.default.div.attrs({
            className: 'flex vc between maxWidth'
        })(u || (u = z``)),
        C = f.default.div(v || (v = z``)),
        D = f.default.div(w || (w = z``)),
        E = f.default.div(x || (x = z`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), l.FontWeights.Normal),
        F = f.default.div(y || (y = z``));
}), c.register('OOHxb', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('Vlfxs');
    c('uPP4W');
    var g = c('9a8Pk'),
        h = c('vaQAz'),
        i = c('XoZxl'),
        j = c('FPfTP'),
        k = c('enxoX');
    var l = (0, f.observer)(a => {
        const m = (0, i.default)(a.hookKey);
        return m ? (0, d.jsxs)(e.default, {
            open: a.visible,
            placement: g.default.drawer.placement,
            width: g.default.drawer.widths.default,
            onClose: a.close,
            closable: !0,
            children: [
                (0, d.jsx)(h.default, {
                    children: (0, d.jsx)(j.default, {
                        name: a.hookKey,
                        type: m.type
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(k.default, {
                    hookKey: a.hookKey
                })
            ]
        }) : null;
    });
}), c.register('XoZxl', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('XiR4U');
    var e = a => {
        var f, g;
        return null === (f = d.default.data) || void 0 === f || null === (g = f.hooks) || void 0 === g ? void 0 : g.find(f => f.key === a);
    };
}), c.register('FPfTP', function(b, d) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('DuuvX'),
        g = c('9a8Pk'),
        h = c('gSUVO');
    let i, j, k, l = a => a;
    var m = a => (0, d.jsxs)(n, {
        children: [
            (0, d.jsxs)(o, {
                children: [
                    g.default.name,
                    ' - ',
                    (0, f.default)(a.type)
                ]
            }),
            (0, d.jsx)(p, {
                children: a.name
            })
        ]
    });
    const n = e.default.div(i || (i = l``)),
        o = e.default.div(j || (j = l`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        p = e.default.div(k || (k = l`
  font-size: 28px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), c.register('DuuvX', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uzjvO4');
    var e = a => a === d.HookType.selectBox ? 'Select Box' : a === d.HookType.number ? 'Number' : a === d.HookType.kit ? 'Kit' : 'Unknown Type';
}), c.register('uzjvO4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), c.register('enxoX', function(b, u) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('/nMwY'),
        f = c('8k9IL'),
        g = c('uPP4W'),
        h = c('uzjvO4'),
        i = c('vaQAz'),
        j = c('XoZxl'),
        k = c('ppzOO'),
        l = c('WtAmH'),
        m = c('Y8OPu'),
        n = c('VYFfl');
    var o = (0, f.observer)(a => {
        const p = (0, j.default)(a.hookKey);
        return (0, d.jsxs)(e.default, {
            style: {
                width: '100%'
            },
            type: 'card',
            children: [
                p.type === h.HookType.selectBox ? (0, d.jsx)(e.default.TabPane, {
                    tab: 'Options',
                    children: (0, d.jsx)(i.default, {
                        children: (0, d.jsx)(m.default, {
                            hookKey: a.hookKey
                        })
                    })
                }, 'tab-hook-select-options') : null,
                p.type === h.HookType.selectBox || p.type === h.HookType.number ? (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(e.default.TabPane, {
                            tab: 'Settings',
                            children: (0, d.jsx)(i.default, {
                                children: (0, d.jsx)(n.default, {
                                    hookKey: a.hookKey
                                })
                            })
                        }, 'tab-hook-settings'),
                        (0, d.jsx)(e.default.TabPane, {
                            tab: 'Hidden',
                            children: (0, d.jsx)(i.default, {
                                children: (0, d.jsx)(l.default, {
                                    hookKey: a.hookKey
                                })
                            })
                        }, 'tab-hook-hidden')
                    ]
                }) : null,
                (0, d.jsx)(e.default.TabPane, {
                    tab: 'Devices',
                    children: (0, d.jsx)(i.default, {
                        children: (0, d.jsx)(k.default, {
                            hookKey: a.hookKey
                        })
                    })
                }, 'tab-hook-devices')
            ]
        });
    });
}), c.register('ppzOO', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('am7L5'),
        g = c('h99Nu'),
        h = c('9a8Pk'),
        i = c('bzk6e'),
        j = c('gSUVO'),
        k = c('TnPB+'),
        l = c('iAe3o');
    let m, n, o, p, q = a => a;
    var r = a => {
        const {
            world: {
                devices: {
                    devices: s
                }
            },
            me: {
                editing: t
            }
        } = (0, f.default)(), u = e.useMemo(() => {
            const v = [];
            return Array.from(s).map(a => a[1]).forEach(s => {
                s.hooks && s.hooks.connections && s.hooks.connections.length && s.hooks.connections.forEach(u => {
                    if (u.hook === a.hookKey) {
                        const w = s.deviceOption.optionSchema.options.find(w => w.key === u.option).option.label;
                        v.push({
                            deviceId: s.id,
                            deviceOptionId: s.deviceOption.id,
                            deviceName: s.name || s.deviceOption.name,
                            optionName: w
                        });
                    }
                });
            }), v;
        }, []);
        return (0, d.jsx)(s, {
            children: u.length ? (0, d.jsx)(d.Fragment, {
                children: u.map(a => (0, d.jsx)(i.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: () => {
                        t.device.currentlyEditedDevice = {
                            id: a.deviceId,
                            deviceOptionId: a.deviceOptionId
                        }, (0, k.default)(l.default.editingDevice);
                    },
                    children: (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(u, {
                                children: a.optionName
                            }),
                            (0, d.jsx)(v, {
                                children: a.deviceName
                            })
                        ]
                    })
                }, a.deviceId + a.optionName))
            }) : (0, d.jsxs)(t, {
                children: [
                    'No devices are using this ',
                    h.default.name.toLowerCase(),
                    ' yet! Once you connect a device\'s option to this ',
                    h.default.name.toLowerCase(),
                    ', that device will show up here.'
                ]
            })
        });
    };
    const s = g.default.div(m || (m = q``)),
        t = g.default.div(n || (n = q`
  font-size: 16px;
`)),
        u = g.default.div(o || (o = q`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), j.FontWeights.Normal),
        v = g.default.div(p || (p = q``));
}), c.register('WtAmH', function(b, o) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('9a8Pk'),
        g = c('hv9NE');
    let h, i, j = a => a;
    var k = a => (0, d.jsxs)(l, {
        children: [
            (0, d.jsxs)(m, {
                children: [
                    'Sometimes you don\'t want a ',
                    f.default.name.toLowerCase(),
                    ' to show. Create scenarios to hide a hook under certain conditions. If any are the scenarios are true, the ',
                    f.default.name.toLowerCase(),
                    ' will be hidden from the game host. ',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    ' When a ',
                    f.default.name.toLowerCase(),
                    ' is hidden, any device option with a link to this',
                    ' ',
                    f.default.name.toLowerCase(),
                    ' will use the device\'s set option.'
                ]
            }),
            (0, d.jsx)(g.default, {
                hookKey: a.hookKey
            })
        ]
    });
    const l = e.default.div(h || (h = j``)),
        m = e.default.div(i || (i = j`
  margin-bottom: 15px;
`));
}), c.register('hv9NE', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('PjB0f'),
        g = c('gXcsF'),
        h = c('bzk6e'),
        i = c('XoZxl'),
        j = c('jIbA+'),
        k = c('NbuRl');
    var l = (0, e.observer)(a => {
        const m = (0, i.default)(a.hookKey),
            [n, o, p] = (0, f.useBoolean)(!1);
        if (!m)
            return null;
        const q = m.hiddenScenarios || [];
        return (0, d.jsxs)(d.Fragment, {
            children: [
                q.length < g.default.hiddenScenario.maxAmount ? (0, d.jsx)(h.HookNewCardButton, {
                    onClick: o,
                    style: {
                        marginBottom: 10
                    },
                    children: 'New Scenario'
                }) : null,
                (m.hiddenScenarios || []).map(m => (0, d.jsx)(k.default, {
                    name: m.name,
                    hookKey: a.hookKey
                }, `scenario-${ m.name }-${ a.hookKey }`)),
                (0, d.jsx)(j.default, {
                    hookKey: a.hookKey,
                    visible: n,
                    close: p
                })
            ]
        });
    });
}), c.register('jIbA+', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('KV+OV'),
        g = c('c6x8w'),
        h = c('uPP4W'),
        i = c('9a8Pk'),
        j = c('gXcsF'),
        k = c('HlKeV'),
        l = c('//+kT'),
        m = c('vaQAz'),
        n = c('xooCA');
    var o = a => {
        const [p, q] = h.useState(''), r = () => {
            const s = p.trim();
            s.length && ((0, l.default)({
                action: k.default.newHiddenScenario,
                payload: {
                    key: a.hookKey,
                    name: s
                }
            }), q(''), a.close());
        };
        return (0, d.jsx)(f.default, {
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            open: a.visible,
            onClose: a.close,
            closable: !0,
            children: (0, d.jsxs)(m.default, {
                children: [
                    (0, d.jsx)(n.HookFormInputLabel, {
                        children: 'Scenario Name'
                    }),
                    (0, d.jsx)(g.default, {
                        size: 'large',
                        placeholder: 'Name here...',
                        value: p,
                        onChange: a => {
                            q(a.target.value);
                        },
                        onPressEnter: r,
                        maxLength: j.default.hiddenScenario.maxNameLength
                    }),
                    (0, d.jsx)(e.default, {
                        size: 'large',
                        block: !0,
                        style: {
                            marginTop: 10,
                            height: 50
                        },
                        type: 'primary',
                        disabled: !p.trim().length,
                        onClick: r,
                        children: 'Add Scenario'
                    })
                ]
            })
        });
    };
}), c.register('HlKeV', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('//+kT', function(b, t) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('ULD33');
    var e = a => {
        (0, d.default)(a);
    };
}), c.register('ULD33', function(b, t) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.hookAction, {
            action: a.action,
            payload: a.payload
        });
    };
}), c.register('xooCA', function(b, t) {
    a(b.exports, 'HookFormInputLabel', function() {
        return i;
    }), a(b.exports, 'HookFormInputLabelDescription', function() {
        return j;
    });
    var d = c('h99Nu'),
        e = c('gSUVO');
    let f, g, h = a => a;
    const i = d.default.div(f || (f = h`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), e.FontWeights.Bold),
        j = d.default.div(g || (g = h`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), c.register('NbuRl', function(b, t) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bzk6e'),
        f = c('h99Nu'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('u3X1v'),
        j = c('j/N3t'),
        k = c('PjB0f'),
        l = c('V/r3W'),
        m = c('3I8Ro0'),
        n = c('//+kT'),
        o = c('HlKeV');
    let p;
    var q = a => {
        const [r, s, t] = (0, k.useBoolean)(!1), u = () => {
            (0, n.default)({
                action: o.default.removeHiddenScenario,
                payload: {
                    key: a.hookKey,
                    name: a.name
                }
            });
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(e.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: s,
                    children: (0, d.jsxs)(r, {
                        children: [
                            (0, d.jsx)('div', {
                                children: a.name
                            }),
                            (0, d.jsx)(h.default, {
                                overlay: (0, d.jsx)(i.default, {
                                    children: (0, d.jsx)(i.default.Item, {
                                        onClick: (0, m.default)(u),
                                        children: 'Remove Scenario'
                                    })
                                }),
                                children: (0, d.jsx)(g.default, {
                                    icon: (0, d.jsx)(j.default, {}),
                                    type: 'dashed',
                                    shape: 'circle'
                                })
                            })
                        ]
                    })
                }),
                (0, d.jsx)(l.default, {
                    visible: r,
                    close: t,
                    scenarioName: a.name,
                    hookKey: a.hookKey
                })
            ]
        });
    };
    const r = f.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(p || (p = (a => a)``));
}), c.register('V/r3W', function(b, A) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT'),
        f = c('KV+OV'),
        g = c('Vlfxs');
    c('uPP4W');
    var h = c('9a8Pk'),
        i = c('vaQAz'),
        j = c('MKzy/'),
        k = c('XoZxl'),
        l = c('pwHqg'),
        m = c('il480');
    var n = (0, g.observer)(a => {
        const o = (0, k.default)(a.hookKey);
        if (!o)
            return null;
        const p = (o.hiddenScenarios || []).find(o => o.name === a.scenarioName);
        return p ? (0, d.jsx)(f.default, {
            open: a.visible,
            onClose: a.close,
            width: h.default.drawer.widths.default,
            placement: h.default.drawer.placement,
            closable: !0,
            children: (0, d.jsxs)(i.default, {
                children: [
                    (0, d.jsx)(j.default, {
                        title: a.scenarioName,
                        descriptor: 'Scenario'
                    }),
                    (0, d.jsx)(e.default, {}),
                    (0, d.jsx)(m.default, {
                        hookKey: a.hookKey,
                        scenarioName: a.scenarioName
                    }),
                    p.conditions.map(o => (0, d.jsx)(l.default, {
                        hookKey: a.hookKey,
                        scenarioName: a.scenarioName,
                        condition: o
                    }, `condition-${ o.id }`))
                ]
            })
        }) : null;
    });
}), c.register('MKzy/', function(b, A) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO');
    let g, h, i, j = a => a;
    var k = a => (0, d.jsxs)(l, {
        children: [
            (0, d.jsx)(m, {
                children: a.descriptor
            }),
            (0, d.jsx)(n, {
                children: a.title
            })
        ]
    });
    const l = e.default.div(g || (g = j``)),
        m = e.default.div(h || (h = j`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        n = e.default.div(i || (i = j`
  font-size: 28px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold);
}), c.register('pwHqg', function(b, A) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('zPY9u'),
        g = c('bzk6e'),
        h = c('h99Nu'),
        i = c('IsmrL'),
        j = c('M1Vx4'),
        k = c('u3X1v'),
        l = c('j/N3t'),
        m = c('gSUVO'),
        n = c('HlKeV'),
        o = c('//+kT'),
        p = c('3I8Ro0'),
        q = c('PjB0f'),
        r = c('J7AyN'),
        s = c('9a8Pk');
    let t, u, v, w = a => a;
    var x = a => {
        const [y, z, A] = (0, q.useBoolean)(!1), B = e.useMemo(() => a.condition.type === f.HiddenConditionType.hookValue ? `${ s.default.name } Value` : a.condition.type === f.HiddenConditionType.modeType ? 'Mode' : 'Unknown', [a.condition.type]), C = () => {
            (0, o.default)({
                action: n.default.removeHiddenCondition,
                payload: {
                    key: a.hookKey,
                    scenario: a.scenarioName,
                    condition: a.condition.id
                }
            });
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: z,
                    children: (0, d.jsxs)(y, {
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)(z, {
                                        children: 'Condition'
                                    }),
                                    (0, d.jsx)(A, {
                                        children: B
                                    })
                                ]
                            }),
                            (0, d.jsx)(j.default, {
                                overlay: (0, d.jsx)(k.default, {
                                    children: (0, d.jsx)(k.default.Item, {
                                        onClick: (0, p.default)(C),
                                        children: 'Remove Condition'
                                    })
                                }),
                                children: (0, d.jsx)(i.default, {
                                    icon: (0, d.jsx)(l.default, {}),
                                    type: 'dashed',
                                    shape: 'circle'
                                })
                            })
                        ]
                    })
                }),
                (0, d.jsx)(r.default, {
                    visible: y,
                    close: A,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    condition: a.condition.id
                })
            ]
        });
    };
    const y = h.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(t || (t = w``)),
        z = h.default.div(u || (u = w`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), m.FontWeights.Normal),
        A = h.default.div(v || (v = w``));
}), c.register('3I8Ro0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => b => {
        b.domEvent.stopPropagation(), a && a();
    };
}), c.register('J7AyN', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('Vlfxs');
    c('uPP4W');
    var g = c('9a8Pk'),
        h = c('zPY9u'),
        i = c('vaQAz'),
        j = c('XoZxl'),
        k = c('13jfd'),
        l = c('JS45o');
    var m = (0, f.observer)(a => {
        const n = (0, j.default)(a.hookKey);
        if (!n)
            return null;
        const o = (n.hiddenScenarios || []).find(n => n.name === a.scenarioName);
        if (!o)
            return null;
        const p = o.conditions.find(n => n.id === a.condition);
        if (!p)
            return null;
        return (0, d.jsx)(e.default, {
            placement: g.default.drawer.placement,
            width: g.default.drawer.widths.default,
            open: a.visible,
            onClose: a.close,
            closable: !0,
            children: (0, d.jsx)(i.default, {
                children: p.type === h.HiddenConditionType.hookValue ? (0, d.jsx)(k.default, {
                    condition: p,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    close: a.close
                }) : p.type === h.HiddenConditionType.modeType ? (0, d.jsx)(l.default, {
                    condition: p,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName,
                    close: a.close
                }) : null
            })
        });
    });
}), c.register('13jfd', function(b, y) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('bPH7V'),
        f = c('16ojk0'),
        g = c('IsmrL'),
        h = c('ExtIT'),
        i = c('c6x8w'),
        j = c('Ly1h3'),
        k = c('Vlfxs'),
        l = c('uPP4W'),
        m = c('h99Nu'),
        n = c('9a8Pk'),
        o = c('HlKeV'),
        p = c('zPY9u'),
        q = c('//+kT'),
        r = c('MKzy/'),
        s = c('xooCA'),
        t = c('7mlcg');
    let u;
    var v = (0, k.observer)(a => {
        const {
            options: w
        } = a.condition, x = (0, t.default)(), [y, z] = l.useState(null == w ? void 0 : w.key), [A, B] = l.useState(null == w ? void 0 : w.compare), [C, D] = l.useState(null == w ? void 0 : w.value);
        if (l.useEffect(() => {
                z(null == w ? void 0 : w.key);
            }, [null == w ? void 0 : w.key]), l.useEffect(() => {
                B(null == w ? void 0 : w.compare);
            }, [null == w ? void 0 : w.compare]), l.useEffect(() => {
                D(null == w ? void 0 : w.value);
            }, [null == w ? void 0 : w.value]), !w)
            return null;
        const E = y.trim() === a.hookKey,
            F = x.hooks.filter(w => w.key !== a.hookKey).map(a => ({
                value: a.key
            }));
        return (0, d.jsxs)(w, {
            children: [
                (0, d.jsx)(r.default, {
                    title: `${ n.default.name } Value`,
                    descriptor: 'Condition'
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsxs)(s.HookFormInputLabel, {
                    children: [
                        n.default.name,
                        ' Name'
                    ]
                }),
                (0, d.jsx)(f.default, {
                    value: y,
                    options: F,
                    onChange: a => {
                        z(a);
                    },
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Name here...',
                    filterOption: (a, w) => {
                        var G;
                        return -1 !== (null === (G = w.value) || void 0 === G ? void 0 : G.toUpperCase().indexOf(a.toUpperCase()));
                    }
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(s.HookFormInputLabel, {
                    children: 'Comparison'
                }),
                (0, d.jsxs)(j.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        B(a);
                    },
                    value: A,
                    children: [
                        (0, d.jsx)(j.default.Option, {
                            value: p.HookValueHiddenConditionCompare.equal,
                            children: 'Equals'
                        }),
                        (0, d.jsx)(j.default.Option, {
                            value: p.HookValueHiddenConditionCompare.notEqual,
                            children: 'Does Not Equal'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(s.HookFormInputLabel, {
                    children: 'Value'
                }),
                (0, d.jsx)(i.default, {
                    value: C,
                    onChange: a => {
                        D(a.target.value);
                    },
                    size: 'large',
                    placeholder: 'Value here...'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, d.jsx)(g.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: {
                        height: 50
                    },
                    disabled: E,
                    onClick: () => {
                        E || ((0, q.default)({
                            action: o.default.saveHookValueHiddenConditionOptions,
                            payload: {
                                key: a.hookKey,
                                scenario: a.scenarioName,
                                condition: a.condition.id,
                                options: {
                                    key: y,
                                    compare: A,
                                    value: C
                                }
                            }
                        }), a.close());
                    },
                    children: 'Save'
                }),
                E ? (0, d.jsx)(e.default, {
                    type: 'error',
                    message: `Invalid ${ n.default.name } Name`,
                    description: `You cannot hide a ${ n.default.name.toLowerCase() } based off its own value.`,
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0
                }) : null
            ]
        });
    });
    const w = m.default.div(u || (u = (a => a)``));
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
}), c.register('JS45o', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('ExtIT'),
        g = c('Ly1h3'),
        h = c('uPP4W'),
        i = c('h99Nu'),
        j = c('9a8Pk'),
        k = c('HlKeV'),
        l = c('+WQL73'),
        m = c('zPY9u'),
        n = c('//+kT'),
        o = c('MKzy/'),
        p = c('xooCA');
    let q;
    var r = a => {
        const {
            options: s
        } = a.condition, [t, u] = h.useState(null == s ? void 0 : s.mode), [v, w] = h.useState(null == s ? void 0 : s.compare);
        if (h.useEffect(() => {
                u(null == s ? void 0 : s.mode);
            }, [null == s ? void 0 : s.mode]), h.useEffect(() => {
                w(null == s ? void 0 : s.compare);
            }, [null == s ? void 0 : s.compare]), !s)
            return null;
        return (0, d.jsxs)(s, {
            children: [
                (0, d.jsx)(o.default, {
                    title: `${ j.default.name } Value`,
                    descriptor: 'Condition'
                }),
                (0, d.jsx)(f.default, {}),
                (0, d.jsx)(p.HookFormInputLabel, {
                    children: 'Hide if the mode...'
                }),
                (0, d.jsxs)(g.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        w(a);
                    },
                    value: v,
                    children: [
                        (0, d.jsx)(g.default.Option, {
                            value: m.ModeTypeHiddenConditionCompare.equal,
                            children: 'Is'
                        }),
                        (0, d.jsx)(g.default.Option, {
                            value: m.ModeTypeHiddenConditionCompare.notEqual,
                            children: 'Is Not'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(p.HookFormInputLabel, {
                    children: t === l.MapModeType.assignment ? 'an...' : 'a...'
                }),
                (0, d.jsxs)(g.default, {
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    onChange: a => {
                        u(a);
                    },
                    value: t,
                    children: [
                        (0, d.jsx)(g.default.Option, {
                            value: l.MapModeType.liveGame,
                            children: 'Live Game'
                        }),
                        (0, d.jsx)(g.default.Option, {
                            value: l.MapModeType.assignment,
                            children: 'Assignment'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, d.jsx)(e.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: {
                        height: 50
                    },
                    onClick: () => {
                        (0, n.default)({
                            action: k.default.saveModeTypeHiddenConditionOptions,
                            payload: {
                                key: a.hookKey,
                                scenario: a.scenarioName,
                                condition: a.condition.id,
                                options: {
                                    mode: t,
                                    compare: v
                                }
                            }
                        }), a.close();
                    },
                    children: 'Save'
                })
            ]
        });
    };
    const s = i.default.div(q || (q = (a => a)``));
}), c.register('il480', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('PjB0f'),
        f = c('bzk6e'),
        g = c('Wpo21');
    var h = a => {
        const [i, j, k] = (0, e.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.HookNewCardButton, {
                    onClick: j,
                    style: {
                        marginBottom: 10
                    },
                    children: 'New Condition'
                }),
                (0, d.jsx)(g.default, {
                    visible: i,
                    close: k,
                    hookKey: a.hookKey,
                    scenarioName: a.scenarioName
                })
            ]
        });
    };
}), c.register('Wpo21', function(b, q) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT'),
        f = c('KV+OV');
    c('uPP4W');
    var g = c('9a8Pk'),
        h = c('vaQAz'),
        i = c('h99Nu'),
        j = c('bzk6e'),
        k = c('gSUVO'),
        l = c('//+kT'),
        m = c('HlKeV'),
        n = c('zPY9u');
    let o, p, q, r, s = a => a;
    var t = a => {
        const u = u => {
            (0, l.default)({
                action: m.default.newHiddenCondition,
                payload: {
                    key: a.hookKey,
                    scenario: a.scenarioName,
                    conditionType: u
                }
            }), a.close();
        };
        return (0, d.jsx)(f.default, {
            open: a.visible,
            onClose: a.close,
            width: g.default.drawer.widths.default,
            placement: g.default.drawer.placement,
            closable: !0,
            children: (0, d.jsxs)(h.default, {
                children: [
                    (0, d.jsx)(u, {
                        children: 'New Condition'
                    }),
                    (0, d.jsx)(v, {
                        children: 'Select a condition type'
                    }),
                    (0, d.jsx)(e.default, {}),
                    (0, d.jsxs)(j.HookCardButton, {
                        onClick: () => u(n.HiddenConditionType.hookValue),
                        children: [
                            (0, d.jsx)(w, {
                                children: 'Hook Value'
                            }),
                            (0, d.jsx)(x, {
                                children: 'Hide depending on the value of another hook'
                            })
                        ]
                    }),
                    (0, d.jsxs)(j.HookCardButton, {
                        onClick: () => u(n.HiddenConditionType.modeType),
                        style: {
                            marginTop: 10
                        },
                        children: [
                            (0, d.jsx)(w, {
                                children: 'Mode'
                            }),
                            (0, d.jsx)(x, {
                                children: 'Hide depending on the mode (live game or assignment)'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const u = i.default.div(o || (o = s`
  font-size: 28px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        v = i.default.div(p || (p = s`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        w = i.default.div(q || (q = s``)),
        x = i.default.div(r || (r = s`
  font-size: 15px;
  font-weight: ${ 0 };
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`), k.FontWeights.Normal);
}), c.register('Y8OPu', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('PjB0f'),
        h = c('gXcsF'),
        i = c('bzk6e'),
        j = c('XoZxl'),
        k = c('m6IZZ'),
        l = c('4vzAU');
    let m;
    var n = (0, e.observer)(a => {
        const o = (0, j.default)(a.hookKey),
            [p, q, r] = (0, g.useBoolean)(!1);
        if (!o)
            return null;
        const s = o.options;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(o, {
                    children: s.options.length <= h.default.selectBox.maxOptions ? (0, d.jsx)(i.HookNewCardButton, {
                        onClick: q,
                        style: {
                            marginBottom: 10
                        },
                        children: 'New Option'
                    }) : null
                }),
                s.options.map((o, p) => (0, d.jsx)(l.default, {
                    name: o,
                    index: p,
                    numberOfItems: s.options.length,
                    hookKey: a.hookKey,
                    isDefaultOption: s.defaultOption === o
                }, `hook-${ a.hookKey }-${ o }`)),
                (0, d.jsx)(k.default, {
                    hookKey: a.hookKey,
                    visible: p,
                    close: r
                })
            ]
        });
    });
    const o = f.default.div.attrs({
        className: 'maxWidth'
    })(m || (m = (a => a)``));
}), c.register('m6IZZ', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('KV+OV'),
        g = c('c6x8w'),
        h = c('uPP4W'),
        i = c('9a8Pk'),
        j = c('HlKeV'),
        k = c('//+kT'),
        l = c('vaQAz'),
        m = c('xooCA');
    var n = a => {
        const [o, p] = h.useState(''), q = () => {
            o.trim().length && ((0, k.default)({
                action: j.default.newOption,
                payload: {
                    key: a.hookKey,
                    option: o.trim()
                }
            }), a.close(), p(''));
        };
        return (0, d.jsxs)(f.default, {
            open: a.visible,
            onClose: a.close,
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            closable: !0,
            children: [
                (0, d.jsxs)(l.default, {
                    children: [
                        (0, d.jsx)(m.HookFormInputLabel, {
                            children: 'Option Name'
                        }),
                        (0, d.jsx)(g.default, {
                            value: o,
                            onChange: a => {
                                p(a.target.value);
                            },
                            size: 'large',
                            placeholder: 'Option name here...',
                            onPressEnter: q
                        })
                    ]
                }),
                (0, d.jsx)(e.default, {
                    size: 'large',
                    block: !0,
                    style: {
                        marginTop: 10,
                        height: 50
                    },
                    type: 'primary',
                    disabled: !o.trim().length,
                    onClick: q,
                    children: 'Add Option'
                })
            ]
        });
    };
}), c.register('4vzAU', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bzk6e'),
        f = c('h99Nu'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('u3X1v'),
        j = c('j/N3t'),
        k = c('//+kT'),
        l = c('HlKeV'),
        m = c('3I8Ro0');
    let n;
    var o = a => {
        const p = p => {
                (0, k.default)({
                    action: l.default.moveOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name,
                        direction: p
                    }
                });
            },
            q = () => {
                (0, k.default)({
                    action: l.default.removeOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            },
            r = () => {
                (0, k.default)({
                    action: l.default.makeOptionDefault,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            },
            s = () => {
                (0, k.default)({
                    action: l.default.removeDefaultOption,
                    payload: {
                        key: a.hookKey,
                        option: a.name
                    }
                });
            };
        return (0, d.jsx)(e.HookCardButton, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: (0, d.jsxs)(p, {
                children: [
                    (0, d.jsx)('div', {
                        children: a.name
                    }),
                    (0, d.jsx)(h.default, {
                        overlay: (0, d.jsxs)(i.default, {
                            children: [
                                a.isDefaultOption ? (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(s),
                                    children: 'Remove As Default Option'
                                }, 'remove-as-default-option') : (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(r),
                                    children: 'Make Default Option'
                                }, 'make-default-option'),
                                0 !== a.index ? (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(() => p('up')),
                                    children: 'Move Up'
                                }, 'move-up') : null,
                                a.index !== a.numberOfItems - 1 ? (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(() => p('down')),
                                    children: 'Move Down'
                                }, 'move-down') : null,
                                (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(q),
                                    children: 'Remove Option'
                                }, 'remove-option')
                            ]
                        }),
                        children: (0, d.jsx)(g.default, {
                            shape: 'circle',
                            type: 'dashed',
                            icon: (0, d.jsx)(j.default, {})
                        })
                    })
                ]
            })
        });
    };
    const p = f.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(n || (n = (a => a)``));
}), c.register('VYFfl', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs'),
        f = c('uPP4W'),
        g = c('9a8Pk'),
        h = c('xooCA'),
        i = c('h99Nu'),
        j = c('c6x8w'),
        k = c('XoZxl'),
        l = c('//+kT'),
        m = c('HlKeV'),
        n = c('gXcsF'),
        o = c('uzjvO4'),
        p = c('ciZvT');
    let q;
    const r = g.default.name.toLowerCase();
    var s = (0, e.observer)(a => {
        const t = (0, k.default)(a.hookKey),
            [u, v] = f.useState(null == t ? void 0 : t.displayName),
            [w, x] = f.useState(null == t ? void 0 : t.displayDescription);
        f.useEffect(() => {
            v(null == t ? void 0 : t.displayName);
        }, [null == t ? void 0 : t.displayName]), f.useEffect(() => {
            x(null == t ? void 0 : t.displayDescription);
        }, [null == t ? void 0 : t.displayDescription]);
        return t ? (0, d.jsxs)(t, {
            children: [
                t.type === o.HookType.number ? (0, d.jsx)(p.default, {
                    hookKey: a.hookKey,
                    options: t.options
                }) : null,
                (0, d.jsx)(h.HookFormInputLabel, {
                    children: 'Display Name'
                }),
                (0, d.jsxs)(h.HookFormInputLabelDescription, {
                    children: [
                        'This ',
                        r,
                        ' corresponds to an option that the game host will set before loading into your map. Set a display name that will make sense to them based off that this ',
                        r,
                        ' customizes. Or leave it blank to use the ',
                        r,
                        '\'s name.'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    placeholder: t.key,
                    value: u,
                    onChange: a => {
                        v(a.target.value);
                    },
                    onBlur: () => {
                        (0, l.default)({
                            action: m.default.setNameOrDescription,
                            payload: {
                                key: a.hookKey,
                                value: u,
                                property: 'displayName'
                            }
                        });
                    },
                    maxLength: n.default.maxDisplayNameLength
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, d.jsx)(h.HookFormInputLabel, {
                    children: 'Description'
                }),
                (0, d.jsx)(h.HookFormInputLabelDescription, {
                    children: 'Optional description used to give the game host more info on what this hook customizes.'
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    placeholder: 'Description here...',
                    value: w,
                    onChange: a => {
                        x(a.target.value);
                    },
                    onBlur: () => {
                        (0, l.default)({
                            action: m.default.setNameOrDescription,
                            payload: {
                                key: a.hookKey,
                                value: w,
                                property: 'displayDescription'
                            }
                        });
                    },
                    maxLength: n.default.maxDisplayDescriptionLength
                })
            ]
        }) : null;
    });
    const t = i.default.div(q || (q = (a => a)``));
}), c.register('ciZvT', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('xooCA'),
        g = c('//+kT'),
        h = c('HlKeV'),
        i = c('4/f+U'),
        j = c('ntvHp');
    const k = {
        width: '100%'
    };
    var l = a => {
        var m, n, o, p;
        const [q, r] = e.useState({
            defaultValue: a.options.defaultValue,
            min: a.options.min,
            max: a.options.max,
            step: a.options.step
        });
        e.useEffect(() => {
            r({
                defaultValue: a.options.defaultValue,
                min: a.options.min,
                max: a.options.max,
                step: a.options.step
            });
        }, [
            null === (m = a.options) || void 0 === m ? void 0 : m.defaultValue,
            null === (n = a.options) || void 0 === n ? void 0 : n.min,
            null === (o = a.options) || void 0 === o ? void 0 : o.max,
            null === (p = a.options) || void 0 === p ? void 0 : p.step
        ]);
        const s = m => n => {
            ((m, n) => {
                (0, g.default)({
                    action: h.default.changeNumberOption,
                    payload: {
                        hookKey: a.hookKey,
                        key: m,
                        value: n
                    }
                }), r({
                    ...q,
                    [m]: n
                });
            })(m, n);
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.HookFormInputLabel, {
                    children: 'Default Value'
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    style: k,
                    placeholder: '0',
                    onChange: s('defaultValue'),
                    value: q.defaultValue,
                    min: q.min,
                    max: q.max,
                    step: q.step
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, d.jsx)(f.HookFormInputLabel, {
                    children: 'Minimum'
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    style: k,
                    placeholder: 'Minimum here...',
                    onChange: s('min'),
                    value: q.min,
                    max: (0, i.isNil)(q.defaultValue) ? void 0 : q.defaultValue
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, d.jsx)(f.HookFormInputLabel, {
                    children: 'Maximum'
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    style: k,
                    placeholder: 'Maximum here...',
                    onChange: s('max'),
                    value: q.max,
                    min: (0, i.isNil)(q.defaultValue) ? void 0 : q.defaultValue
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                (0, d.jsx)(f.HookFormInputLabel, {
                    children: 'Step'
                }),
                (0, d.jsx)(f.HookFormInputLabelDescription, {
                    children: 'Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50.'
                }),
                (0, d.jsx)(j.default, {
                    size: 'large',
                    style: k,
                    placeholder: 'Step here...',
                    onChange: s('step'),
                    value: q.step,
                    min: 0.01
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                })
            ]
        });
    };
}), c.register('9QZbK', function(b, y) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('ExtIT'),
        h = c('KV+OV'),
        i = c('c6x8w'),
        j = c('Ly1h3'),
        k = c('9a8Pk'),
        l = c('vaQAz'),
        m = c('h99Nu'),
        n = c('uzjvO4'),
        o = c('gSUVO'),
        p = c('//+kT'),
        q = c('HlKeV'),
        r = c('gXcsF'),
        s = c('xooCA');
    let t;
    const u = n.HookType.selectBox;
    var v = a => {
        const [w, x] = e.useState(''), [y, z] = e.useState(u);
        return (0, d.jsx)(h.default, {
            open: a.visible,
            onClose: a.close,
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            closable: !0,
            children: (0, d.jsxs)(l.default, {
                children: [
                    (0, d.jsxs)(w, {
                        children: [
                            'New ',
                            k.default.name
                        ]
                    }),
                    (0, d.jsx)(g.default, {}),
                    (0, d.jsxs)(s.HookFormInputLabel, {
                        children: [
                            k.default.name,
                            ' Name'
                        ]
                    }),
                    (0, d.jsx)(i.default, {
                        size: 'large',
                        style: {
                            width: '100%'
                        },
                        placeholder: 'Name here...',
                        onChange: a => {
                            x(a.target.value);
                        },
                        value: w,
                        maxLength: r.default.maxKeyLength
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            height: 20
                        }
                    }),
                    (0, d.jsxs)(s.HookFormInputLabel, {
                        children: [
                            k.default.name,
                            ' Type'
                        ]
                    }),
                    (0, d.jsxs)(j.default, {
                        size: 'large',
                        style: {
                            width: '100%'
                        },
                        value: y,
                        onChange: a => {
                            z(a);
                        },
                        children: [
                            (0, d.jsx)(j.default.Option, {
                                value: n.HookType.selectBox,
                                children: 'Select Box'
                            }),
                            (0, d.jsx)(j.default.Option, {
                                value: n.HookType.number,
                                children: 'Number'
                            }),
                            (0, d.jsx)(j.default.Option, {
                                value: n.HookType.kit,
                                children: 'Kit'
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            height: 30
                        }
                    }),
                    (0, d.jsxs)(f.default, {
                        block: !0,
                        size: 'large',
                        type: 'primary',
                        style: {
                            height: 60
                        },
                        onClick: () => {
                            w && y && ((0, p.default)({
                                action: q.default.newHook,
                                payload: {
                                    key: w,
                                    type: y
                                }
                            }), x(''), z(u), a.close());
                        },
                        children: [
                            'Create ',
                            k.default.name
                        ]
                    })
                ]
            })
        });
    };
    const w = m.default.div(t || (t = (a => a)`
  font-size: 28px;
  font-weight: ${ 0 };
`), o.FontWeights.UltraBold);
}), c.register('EG1bC', function(b, z) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('RxXGC'),
        j = c('lZ+7Q'),
        k = c('S/jX4'),
        l = c('9a8Pk'),
        m = c('sPSvg'),
        n = c('7Sbqr'),
        o = c('bMFDV'),
        p = c('am7L5'),
        q = c('DM38W'),
        r = c('7mlcg'),
        s = c('+WQL73'),
        t = c('k6F40');
    let u;
    var v = (0, f.observer)(() => {
        const w = g.useRef(),
            x = (0, r.default)(),
            {
                me: {
                    preferences: y
                }
            } = (0, p.default)(),
            z = w => {
                y.startGameWithMode = w;
            };
        (0, t.useWillUnmount)(() => {
            z(s.MapModeType.liveGame);
        }), g.useEffect(() => (window.dispatchEvent(new CustomEvent('TEST_VALUES_VISIBLE')), () => {
            window.dispatchEvent(new CustomEvent('TEST_VALUES_HIDDEN'));
        }), []);
        const A = () => {
            (0, q.default)(m.default.startGame, {
                ownerAsSpectator: n.default.session.ownerRole === o.default.spectator,
                hookFormState: w.current,
                modeType: n.default.me.preferences.startGameWithMode
            });
        };
        return (0, d.jsx)(w, {
            children: (0, d.jsx)(i.default, {
                hooks: x,
                modeType: y.startGameWithMode,
                location: j.HookFormLocation.editor,
                footer: w => 0 === w ? (0, d.jsxs)('div', {
                    style: {
                        fontSize: 16
                    },
                    children: [
                        'No ',
                        l.default.name.toLowerCase(),
                        's to configure here yet. For Select Box ',
                        l.default.name,
                        's, make sure you create selectable options for it to show up here!'
                    ]
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(e.default, {
                            size: 'large',
                            type: 'primary',
                            block: !0,
                            style: {
                                height: 60,
                                marginTop: 15
                            },
                            onClick: A,
                            children: 'Start Game With Test Values'
                        }),
                        (0, d.jsx)(e.default, {
                            block: !0,
                            style: {
                                marginTop: 10
                            },
                            onClick: () => {
                                y.startGameWithMode === s.MapModeType.liveGame ? z(s.MapModeType.assignment) : z(s.MapModeType.liveGame);
                            },
                            children: y.startGameWithMode === s.MapModeType.liveGame ? 'Live Game' : 'Assignment'
                        })
                    ]
                }),
                onStateChange: x => w.current = x
            })
        });
    });
    const w = h.default.div(u || (u = (a => a)`
  padding: 2px 10px 40px 10px;
  color: ${ 0 };
`), k.default.Black);
}), c.register('3iZfA', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('XiR4U');
    var f = d.createContext(e.default);
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
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
}), c.register('SprP3', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    a(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
});