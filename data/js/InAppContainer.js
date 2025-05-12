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
        return _m;
    });
    var g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = (0, h.observer)(() => {
        const {
            hooks: {hookJSON: n}
        } = (0, j.default)();
        return (0, g.jsx)(l.default, {
            stringifiedData: n,
            onClose: () => {
                (0, k.default)(i.default.none);
            }
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = (0, h.observer)(r => {
        const [s, t] = i.useState(!1), [u, v, w] = (0, j.useBoolean)(!1), x = (0, l.default)();
        i.useEffect(() => {
            t(!0);
            const y = (0, m.AddInputBlockingUI)().dispose;
            return () => y();
        }, []), i.useEffect(() => (window.addEventListener('TEST_VALUES_VISIBLE', v), window.addEventListener('TEST_VALUES_HIDDEN', w), () => {
            window.removeEventListener('TEST_VALUES_VISIBLE', v), window.removeEventListener('TEST_VALUES_HIDDEN', w);
        })), i.useEffect(() => {
            p.default.data = JSON.parse(r.stringifiedData);
        }, [r.stringifiedData]), i.useEffect(() => {
            x || _y();
        }, [x]);
        const _y = () => {
                t(!1);
            }, z = (0, l.default)() && s;
        return (0, f.jsx)(o.default.Provider, {
            value: p.default,
            children: (0, f.jsx)(g.default, {
                open: z,
                afterOpenChange: () => {
                    z || r.onClose();
                },
                onClose: _y,
                placement: k.default.drawer.placement,
                closable: !0,
                width: u ? k.default.drawer.widths.testValues : k.default.drawer.widths.default,
                children: (0, f.jsx)(n.default, {})
            })
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n, o = p => p;
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
    const _q = g.default.div.attrs({ className: 'flex-column flex-center maxWidth' })(l || (l = o``)), _r = g.default.div(m || (m = o`
  font-size: 36px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold), _s = g.default.div(n || (n = o`
  font-size: 18px;
  margin-top: 4px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i;
    var _j = f.default.div(i || (i = (k => k)`
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, g.Fonts.ProductSans);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = (0, h.observer)(() => {
        var n;
        const o = (0, j.default)(), p = (0, i.useAmIGameOwner)();
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
            style: { marginTop: 15 },
            className: 'maxWidth',
            children: (0, f.jsx)(k.default, {})
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = () => f.default.data;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    class h {
        constructor() {
            this.data = { hooks: [] }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'data', void 0);
    var _i = new h();
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    var _q = (0, g.observer)(() => {
        const r = (0, m.default)(), [s, t, u] = (0, i.useBoolean)(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_r, {
                    children: [
                        r.hooks.length < k.default.maxHooks ? (0, f.jsxs)(l.HookNewCardButton, {
                            style: { marginBottom: 10 },
                            onClick: t,
                            children: [
                                'New ',
                                j.default.name
                            ]
                        }) : null,
                        r.hooks.map((v, w) => (0, f.jsx)(n.default, {
                            id: v.key,
                            type: v.type,
                            index: w,
                            totalHooks: r.hooks.length
                        }, v.key))
                    ]
                }),
                (0, f.jsx)(o.default, {
                    visible: s,
                    close: u
                })
            ]
        });
    });
    const _r = h.default.div.attrs({ className: 'maxWidth' })(p || (p = (s => s)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'HookNewCardButton', function () {
        return _n;
    }), a(d.exports, 'HookCardButton', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m = n => n;
    const _n = o => (0, f.jsx)(_p, {
            hoverable: !0,
            onClick: o.onClick,
            style: o.style,
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
                        (0, f.jsx)('div', { children: o.children })
                    ]
                })
            })
        }), _o = p => (0, f.jsx)(_p, {
            hoverable: !0,
            onClick: p.onClick,
            style: p.style,
            children: (0, f.jsx)(_q, { children: p.children })
        }), _p = (0, h.default)(g.default)(k || (k = m``)), _q = h.default.div(l || (l = m`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), i.default.Black, j.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _C;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z, A, B = C => C;
    var _C = D => {
        const [E, F, G] = (0, o.useBoolean)(!1), H = g.useMemo(() => (0, q.default)(D.type), [D.type]), I = () => {
                l.default.confirm({
                    title: `Are you sure you want to delete this ${ v.default.name.toLowerCase() }?`,
                    onOk: () => {
                        (0, t.default)({
                            action: u.default.removeHook,
                            payload: { key: D.id }
                        });
                    }
                });
            }, J = K => {
                (0, t.default)({
                    action: u.default.moveHook,
                    payload: {
                        key: D.id,
                        direction: K
                    }
                });
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(r.HookCardButton, {
                    style: { marginBottom: 10 },
                    onClick: F,
                    children: (0, f.jsxs)(_D, {
                        children: [
                            (0, f.jsxs)(_E, {
                                children: [
                                    (0, f.jsx)(_G, { children: H }),
                                    (0, f.jsx)(_H, { children: D.id })
                                ]
                            }),
                            (0, f.jsx)(_F, {
                                children: (0, f.jsx)(j.default, {
                                    overlay: () => (0, f.jsxs)(k.default, {
                                        children: [
                                            (0, f.jsxs)(k.default.Item, {
                                                onClick: (0, s.default)(I),
                                                children: [
                                                    'Delete ',
                                                    v.default.name
                                                ]
                                            }),
                                            D.index > 0 && D.totalHooks > 1 ? (0, f.jsx)(k.default.Item, {
                                                onClick: (0, s.default)(() => J('up')),
                                                children: 'Move Up'
                                            }) : null,
                                            D.index !== D.totalHooks && D.totalHooks > 1 ? (0, f.jsx)(k.default.Item, {
                                                onClick: (0, s.default)(() => J('down')),
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
                    visible: E,
                    close: G,
                    hookKey: D.id
                })
            ]
        });
    };
    const _D = h.default.div.attrs({ className: 'flex vc between maxWidth' })(w || (w = B``)), _E = h.default.div(x || (x = B``)), _F = h.default.div(y || (y = B``)), _G = h.default.div(z || (z = B`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), n.FontWeights.Normal), _H = h.default.div(A || (A = B``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (0, h.observer)(o => {
        const p = (0, k.default)(o.hookKey);
        return p ? (0, f.jsxs)(g.default, {
            open: o.visible,
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            onClose: o.close,
            closable: !0,
            children: [
                (0, f.jsx)(j.default, {
                    children: (0, f.jsx)(l.default, {
                        name: o.hookKey,
                        type: p.type
                    })
                }),
                (0, f.jsx)('div', { style: { height: 15 } }),
                (0, f.jsx)(m.default, { hookKey: o.hookKey })
            ]
        }) : null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        var i, j;
        return null === (i = f.default.data) || void 0 === i || null === (j = i.hooks) || void 0 === j ? void 0 : j.find(k => k.key === h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    var _o = p => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsxs)(_q, {
                children: [
                    i.default.name,
                    ' - ',
                    (0, h.default)(p.type)
                ]
            }),
            (0, f.jsx)(_r, { children: p.name })
        ]
    });
    const _p = g.default.div(k || (k = n``)), _q = g.default.div(l || (l = n`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)), _r = g.default.div(m || (m = n`
  font-size: 28px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => h === f.HookType.selectBox ? 'Select Box' : h === f.HookType.number ? 'Number' : h === f.HookType.kit ? 'Kit' : 'Unknown Type';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function () {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = (0, h.observer)(r => {
        const s = (0, l.default)(r.hookKey);
        return (0, f.jsxs)(g.default, {
            style: { width: '100%' },
            type: 'card',
            children: [
                s.type === j.HookType.selectBox ? (0, f.jsx)(g.default.TabPane, {
                    tab: 'Options',
                    children: (0, f.jsx)(k.default, { children: (0, f.jsx)(o.default, { hookKey: r.hookKey }) })
                }, 'tab-hook-select-options') : null,
                s.type === j.HookType.selectBox || s.type === j.HookType.number ? (0, f.jsxs)(i.Fragment, {
                    children: [
                        (0, f.jsx)(g.default.TabPane, {
                            tab: 'Settings',
                            children: (0, f.jsx)(k.default, { children: (0, f.jsx)(p.default, { hookKey: r.hookKey }) })
                        }, 'tab-hook-settings'),
                        (0, f.jsx)(g.default.TabPane, {
                            tab: 'Hidden',
                            children: (0, f.jsx)(k.default, { children: (0, f.jsx)(n.default, { hookKey: r.hookKey }) })
                        }, 'tab-hook-hidden')
                    ]
                }) : null,
                (0, f.jsx)(g.default.TabPane, {
                    tab: 'Devices',
                    children: (0, f.jsx)(k.default, { children: (0, f.jsx)(m.default, { hookKey: r.hookKey }) })
                }, 'tab-hook-devices')
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, p, q, r, s = t => t;
    var _t = u => {
        const {
                world: {
                    devices: {devices: v}
                },
                me: {editing: w}
            } = (0, h.default)(), x = g.useMemo(() => {
                const y = [];
                return Array.from(v).map(z => z[1]).forEach(z => {
                    z.hooks && z.hooks.connections && z.hooks.connections.length && z.hooks.connections.forEach(A => {
                        if (A.hook === u.hookKey) {
                            const B = z.deviceOption.optionSchema.options.find(C => C.key === A.option).option.label;
                            y.push({
                                deviceId: z.id,
                                deviceOptionId: z.deviceOption.id,
                                deviceName: z.name || z.deviceOption.name,
                                optionName: B
                            });
                        }
                    });
                }), y;
            }, []);
        return (0, f.jsx)(_u, {
            children: x.length ? (0, f.jsx)(f.Fragment, {
                children: x.map(y => (0, f.jsx)(k.HookCardButton, {
                    style: { marginBottom: 10 },
                    onClick: () => {
                        w.device.currentlyEditedDevice = {
                            id: y.deviceId,
                            deviceOptionId: y.deviceOptionId
                        }, (0, m.default)(n.default.editingDevice);
                    },
                    children: (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_w, { children: y.optionName }),
                            (0, f.jsx)(_x, { children: y.deviceName })
                        ]
                    })
                }, y.deviceId + y.optionName))
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
    const _u = i.default.div(o || (o = s``)), _v = i.default.div(p || (p = s`
  font-size: 16px;
`)), _w = i.default.div(q || (q = s`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), l.FontWeights.Normal), _x = i.default.div(r || (r = s``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l = m => m;
    var _m = n => (0, f.jsxs)(_n, {
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
            (0, f.jsx)(i.default, { hookKey: n.hookKey })
        ]
    });
    const _n = g.default.div(j || (j = l``)), _o = g.default.div(k || (k = l`
  margin-bottom: 15px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (0, g.observer)(o => {
        const p = (0, k.default)(o.hookKey), [q, r, s] = (0, h.useBoolean)(!1);
        if (!p)
            return null;
        const t = p.hiddenScenarios || [];
        return (0, f.jsxs)(f.Fragment, {
            children: [
                t.length < i.default.hiddenScenario.maxAmount ? (0, f.jsx)(j.HookNewCardButton, {
                    onClick: r,
                    style: { marginBottom: 10 },
                    children: 'New Scenario'
                }) : null,
                (p.hiddenScenarios || []).map(u => (0, f.jsx)(m.default, {
                    name: u.name,
                    hookKey: o.hookKey
                }, `scenario-${ u.name }-${ o.hookKey }`)),
                (0, f.jsx)(l.default, {
                    hookKey: o.hookKey,
                    visible: q,
                    close: s
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = r => {
        const [s, t] = j.useState(''), u = () => {
                const v = s.trim();
                v.length && ((0, n.default)({
                    action: m.default.newHiddenScenario,
                    payload: {
                        key: r.hookKey,
                        name: v
                    }
                }), t(''), r.close());
            };
        return (0, f.jsx)(h.default, {
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            open: r.visible,
            onClose: r.close,
            closable: !0,
            children: (0, f.jsxs)(o.default, {
                children: [
                    (0, f.jsx)(p.HookFormInputLabel, { children: 'Scenario Name' }),
                    (0, f.jsx)(i.default, {
                        size: 'large',
                        placeholder: 'Name here...',
                        value: s,
                        onChange: v => {
                            t(v.target.value);
                        },
                        onPressEnter: u,
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
                        disabled: !s.trim().length,
                        onClick: u,
                        children: 'Add Scenario'
                    })
                ]
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        (0, f.default)(h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.hookAction, {
            action: i.action,
            payload: i.payload
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'HookFormInputLabel', function () {
        return _k;
    }), a(d.exports, 'HookFormInputLabelDescription', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....');
    let h, i, j = k => k;
    const _k = f.default.div(h || (h = j`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), g.FontWeights.Bold), _l = f.default.div(i || (i = j`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r;
    var _s = t => {
        const [u, v, w] = (0, m.useBoolean)(!1), x = () => {
                (0, p.default)({
                    action: q.default.removeHiddenScenario,
                    payload: {
                        key: t.hookKey,
                        name: t.name
                    }
                });
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(g.HookCardButton, {
                    style: { marginBottom: 10 },
                    onClick: v,
                    children: (0, f.jsxs)(_t, {
                        children: [
                            (0, f.jsx)('div', { children: t.name }),
                            (0, f.jsx)(j.default, {
                                overlay: (0, f.jsx)(k.default, {
                                    children: (0, f.jsx)(k.default.Item, {
                                        onClick: (0, o.default)(x),
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
                    visible: u,
                    close: w,
                    scenarioName: t.name,
                    hookKey: t.hookKey
                })
            ]
        });
    };
    const _t = h.default.div.attrs({ className: 'maxWidth flex between vc' })(r || (r = (u => u)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    var _p = (0, i.observer)(q => {
        const r = (0, m.default)(q.hookKey);
        if (!r)
            return null;
        const s = (r.hiddenScenarios || []).find(t => t.name === q.scenarioName);
        return s ? (0, f.jsx)(h.default, {
            open: q.visible,
            onClose: q.close,
            width: j.default.drawer.widths.default,
            placement: j.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(k.default, {
                children: [
                    (0, f.jsx)(l.default, {
                        title: q.scenarioName,
                        descriptor: 'Scenario'
                    }),
                    (0, f.jsx)(g.default, {}),
                    (0, f.jsx)(o.default, {
                        hookKey: q.hookKey,
                        scenarioName: q.scenarioName
                    }),
                    s.conditions.map(t => (0, f.jsx)(n.default, {
                        hookKey: q.hookKey,
                        scenarioName: q.scenarioName,
                        condition: t
                    }, `condition-${ t.id }`))
                ]
            })
        }) : null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i, j, k, l = m => m;
    var _m = n => (0, f.jsxs)(_n, {
        children: [
            (0, f.jsx)(_o, { children: n.descriptor }),
            (0, f.jsx)(_p, { children: n.title })
        ]
    });
    const _n = g.default.div(i || (i = l``)), _o = g.default.div(j || (j = l`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)), _p = g.default.div(k || (k = l`
  font-size: 28px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x, y = z => z;
    var _z = A => {
        const [B, C, D] = (0, s.useBoolean)(!1), E = g.useMemo(() => A.condition.type === h.HiddenConditionType.hookValue ? `${ u.default.name } Value` : A.condition.type === h.HiddenConditionType.modeType ? 'Mode' : 'Unknown', [A.condition.type]), F = () => {
                (0, q.default)({
                    action: p.default.removeHiddenCondition,
                    payload: {
                        key: A.hookKey,
                        scenario: A.scenarioName,
                        condition: A.condition.id
                    }
                });
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.HookCardButton, {
                    style: { marginBottom: 10 },
                    onClick: C,
                    children: (0, f.jsxs)(_A, {
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)(_B, { children: 'Condition' }),
                                    (0, f.jsx)(_C, { children: E })
                                ]
                            }),
                            (0, f.jsx)(l.default, {
                                overlay: (0, f.jsx)(m.default, {
                                    children: (0, f.jsx)(m.default.Item, {
                                        onClick: (0, r.default)(F),
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
                    visible: B,
                    close: D,
                    hookKey: A.hookKey,
                    scenarioName: A.scenarioName,
                    condition: A.condition.id
                })
            ]
        });
    };
    const _A = j.default.div.attrs({ className: 'maxWidth flex between vc' })(v || (v = y``)), _B = j.default.div(w || (w = y`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), o.FontWeights.Normal), _C = j.default.div(x || (x = y``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => h => {
        h.domEvent.stopPropagation(), g && g();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = (0, h.observer)(p => {
        const q = (0, l.default)(p.hookKey);
        if (!q)
            return null;
        const r = (q.hiddenScenarios || []).find(s => s.name === p.scenarioName);
        if (!r)
            return null;
        const s = r.conditions.find(t => t.id === p.condition);
        if (!s)
            return null;
        return (0, f.jsx)(g.default, {
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            open: p.visible,
            onClose: p.close,
            closable: !0,
            children: (0, f.jsx)(k.default, {
                children: s.type === j.HiddenConditionType.hookValue ? (0, f.jsx)(m.default, {
                    condition: s,
                    hookKey: p.hookKey,
                    scenarioName: p.scenarioName,
                    close: p.close
                }) : s.type === j.HiddenConditionType.modeType ? (0, f.jsx)(n.default, {
                    condition: s,
                    hookKey: p.hookKey,
                    scenarioName: p.scenarioName,
                    close: p.close
                }) : null
            })
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w;
    var _x = (0, m.observer)(y => {
        const {options: z} = y.condition, A = (0, v.default)(), [B, C] = n.useState(null == z ? void 0 : z.key), [D, E] = n.useState(null == z ? void 0 : z.compare), [F, G] = n.useState(null == z ? void 0 : z.value);
        if (n.useEffect(() => {
                C(null == z ? void 0 : z.key);
            }, [null == z ? void 0 : z.key]), n.useEffect(() => {
                E(null == z ? void 0 : z.compare);
            }, [null == z ? void 0 : z.compare]), n.useEffect(() => {
                G(null == z ? void 0 : z.value);
            }, [null == z ? void 0 : z.value]), !z)
            return null;
        const H = B.trim() === y.hookKey, I = A.hooks.filter(J => J.key !== y.hookKey).map(J => ({ value: J.key }));
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
                    value: B,
                    options: I,
                    onChange: J => {
                        C(J);
                    },
                    style: { width: '100%' },
                    placeholder: 'Name here...',
                    filterOption: (J, K) => {
                        var L;
                        return -1 !== (null === (L = K.value) || void 0 === L ? void 0 : L.toUpperCase().indexOf(J.toUpperCase()));
                    }
                }),
                (0, f.jsx)('div', { style: { height: 15 } }),
                (0, f.jsx)(u.HookFormInputLabel, { children: 'Comparison' }),
                (0, f.jsxs)(l.default, {
                    style: { width: '100%' },
                    size: 'large',
                    onChange: J => {
                        E(J);
                    },
                    value: D,
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
                (0, f.jsx)('div', { style: { height: 15 } }),
                (0, f.jsx)(u.HookFormInputLabel, { children: 'Value' }),
                (0, f.jsx)(k.default, {
                    value: F,
                    onChange: J => {
                        G(J.target.value);
                    },
                    size: 'large',
                    placeholder: 'Value here...'
                }),
                (0, f.jsx)('div', { style: { height: 30 } }),
                (0, f.jsx)(i.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: { height: 50 },
                    disabled: H,
                    onClick: () => {
                        H || ((0, s.default)({
                            action: q.default.saveHookValueHiddenConditionOptions,
                            payload: {
                                key: y.hookKey,
                                scenario: y.scenarioName,
                                condition: y.condition.id,
                                options: {
                                    key: B,
                                    compare: D,
                                    value: F
                                }
                            }
                        }), y.close());
                    },
                    children: 'Save'
                }),
                H ? (0, f.jsx)(g.default, {
                    type: 'error',
                    message: `Invalid ${ p.default.name } Name`,
                    description: `You cannot hide a ${ p.default.name.toLowerCase() } based off its own value.`,
                    style: { marginTop: 15 },
                    showIcon: !0
                }) : null
            ]
        });
    });
    const _y = o.default.div(w || (w = (z => z)``));
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
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    var _t = u => {
        const {options: v} = u.condition, [w, x] = j.useState(null == v ? void 0 : v.mode), [y, z] = j.useState(null == v ? void 0 : v.compare);
        if (j.useEffect(() => {
                x(null == v ? void 0 : v.mode);
            }, [null == v ? void 0 : v.mode]), j.useEffect(() => {
                z(null == v ? void 0 : v.compare);
            }, [null == v ? void 0 : v.compare]), !v)
            return null;
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(q.default, {
                    title: `${ l.default.name } Value`,
                    descriptor: 'Condition'
                }),
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)(r.HookFormInputLabel, { children: 'Hide if the mode...' }),
                (0, f.jsxs)(i.default, {
                    style: { width: '100%' },
                    size: 'large',
                    onChange: A => {
                        z(A);
                    },
                    value: y,
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
                (0, f.jsx)('div', { style: { height: 15 } }),
                (0, f.jsx)(r.HookFormInputLabel, { children: w === n.MapModeType.assignment ? 'an...' : 'a...' }),
                (0, f.jsxs)(i.default, {
                    style: { width: '100%' },
                    size: 'large',
                    onChange: A => {
                        x(A);
                    },
                    value: w,
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
                (0, f.jsx)('div', { style: { height: 30 } }),
                (0, f.jsx)(g.default, {
                    size: 'large',
                    type: 'primary',
                    block: !0,
                    style: { height: 50 },
                    onClick: () => {
                        (0, p.default)({
                            action: m.default.saveModeTypeHiddenConditionOptions,
                            payload: {
                                key: u.hookKey,
                                scenario: u.scenarioName,
                                condition: u.condition.id,
                                options: {
                                    mode: w,
                                    compare: y
                                }
                            }
                        }), u.close();
                    },
                    children: 'Save'
                })
            ]
        });
    };
    const _u = k.default.div(s || (s = (v => v)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const [l, m, n] = (0, g.useBoolean)(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.HookNewCardButton, {
                    onClick: m,
                    style: { marginBottom: 10 },
                    children: 'New Condition'
                }),
                (0, f.jsx)(i.default, {
                    visible: l,
                    close: n,
                    hookKey: k.hookKey,
                    scenarioName: k.scenarioName
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s, t, u = v => v;
    var _v = w => {
        const x = y => {
            (0, n.default)({
                action: o.default.newHiddenCondition,
                payload: {
                    key: w.hookKey,
                    scenario: w.scenarioName,
                    conditionType: y
                }
            }), w.close();
        };
        return (0, f.jsx)(h.default, {
            open: w.visible,
            onClose: w.close,
            width: i.default.drawer.widths.default,
            placement: i.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(j.default, {
                children: [
                    (0, f.jsx)(_w, { children: 'New Condition' }),
                    (0, f.jsx)(_x, { children: 'Select a condition type' }),
                    (0, f.jsx)(g.default, {}),
                    (0, f.jsxs)(l.HookCardButton, {
                        onClick: () => x(p.HiddenConditionType.hookValue),
                        children: [
                            (0, f.jsx)(_y, { children: 'Hook Value' }),
                            (0, f.jsx)(_z, { children: 'Hide depending on the value of another hook' })
                        ]
                    }),
                    (0, f.jsxs)(l.HookCardButton, {
                        onClick: () => x(p.HiddenConditionType.modeType),
                        style: { marginTop: 10 },
                        children: [
                            (0, f.jsx)(_y, { children: 'Mode' }),
                            (0, f.jsx)(_z, { children: 'Hide depending on the mode (live game or assignment)' })
                        ]
                    })
                ]
            })
        });
    };
    const _w = k.default.div(q || (q = u`
  font-size: 28px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold), _x = k.default.div(r || (r = u`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)), _y = k.default.div(s || (s = u``)), _z = k.default.div(t || (t = u`
  font-size: 15px;
  font-weight: ${ 0 };
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`), m.FontWeights.Normal);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o;
    var _p = (0, g.observer)(q => {
        const r = (0, l.default)(q.hookKey), [s, t, u] = (0, i.useBoolean)(!1);
        if (!r)
            return null;
        const v = r.options;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_q, {
                    children: v.options.length <= j.default.selectBox.maxOptions ? (0, f.jsx)(k.HookNewCardButton, {
                        onClick: t,
                        style: { marginBottom: 10 },
                        children: 'New Option'
                    }) : null
                }),
                v.options.map((w, x) => (0, f.jsx)(n.default, {
                    name: w,
                    index: x,
                    numberOfItems: v.options.length,
                    hookKey: q.hookKey,
                    isDefaultOption: v.defaultOption === w
                }, `hook-${ q.hookKey }-${ w }`)),
                (0, f.jsx)(m.default, {
                    hookKey: q.hookKey,
                    visible: s,
                    close: u
                })
            ]
        });
    });
    const _q = h.default.div.attrs({ className: 'maxWidth' })(o || (o = (r => r)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    var _p = q => {
        const [r, s] = j.useState(''), t = () => {
                r.trim().length && ((0, m.default)({
                    action: l.default.newOption,
                    payload: {
                        key: q.hookKey,
                        option: r.trim()
                    }
                }), q.close(), s(''));
            };
        return (0, f.jsxs)(h.default, {
            open: q.visible,
            onClose: q.close,
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            closable: !0,
            children: [
                (0, f.jsxs)(n.default, {
                    children: [
                        (0, f.jsx)(o.HookFormInputLabel, { children: 'Option Name' }),
                        (0, f.jsx)(i.default, {
                            value: r,
                            onChange: u => {
                                s(u.target.value);
                            },
                            size: 'large',
                            placeholder: 'Option name here...',
                            onPressEnter: t
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
                    disabled: !r.trim().length,
                    onClick: t,
                    children: 'Add Option'
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    var _q = r => {
        const s = t => {
                (0, m.default)({
                    action: n.default.moveOption,
                    payload: {
                        key: r.hookKey,
                        option: r.name,
                        direction: t
                    }
                });
            }, t = () => {
                (0, m.default)({
                    action: n.default.removeOption,
                    payload: {
                        key: r.hookKey,
                        option: r.name
                    }
                });
            }, u = () => {
                (0, m.default)({
                    action: n.default.makeOptionDefault,
                    payload: {
                        key: r.hookKey,
                        option: r.name
                    }
                });
            }, v = () => {
                (0, m.default)({
                    action: n.default.removeDefaultOption,
                    payload: {
                        key: r.hookKey,
                        option: r.name
                    }
                });
            };
        return (0, f.jsx)(g.HookCardButton, {
            onClick: () => !1,
            style: { marginBottom: 10 },
            children: (0, f.jsxs)(_r, {
                children: [
                    (0, f.jsx)('div', { children: r.name }),
                    (0, f.jsx)(j.default, {
                        overlay: (0, f.jsxs)(k.default, {
                            children: [
                                r.isDefaultOption ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(v),
                                    children: 'Remove As Default Option'
                                }, 'remove-as-default-option') : (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(u),
                                    children: 'Make Default Option'
                                }, 'make-default-option'),
                                0 !== r.index ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(() => s('up')),
                                    children: 'Move Up'
                                }, 'move-up') : null,
                                r.index !== r.numberOfItems - 1 ? (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(() => s('down')),
                                    children: 'Move Down'
                                }, 'move-down') : null,
                                (0, f.jsx)(k.default.Item, {
                                    onClick: (0, o.default)(t),
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
    const _r = h.default.div.attrs({ className: 'maxWidth flex between vc' })(p || (p = (s => s)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    const t = i.default.name.toLowerCase();
    var _u = (0, g.observer)(v => {
        const w = (0, m.default)(v.hookKey), [x, y] = h.useState(null == w ? void 0 : w.displayName), [z, A] = h.useState(null == w ? void 0 : w.displayDescription);
        h.useEffect(() => {
            y(null == w ? void 0 : w.displayName);
        }, [null == w ? void 0 : w.displayName]), h.useEffect(() => {
            A(null == w ? void 0 : w.displayDescription);
        }, [null == w ? void 0 : w.displayDescription]);
        return w ? (0, f.jsxs)(_v, {
            children: [
                w.type === q.HookType.number ? (0, f.jsx)(r.default, {
                    hookKey: v.hookKey,
                    options: w.options
                }) : null,
                (0, f.jsx)(j.HookFormInputLabel, { children: 'Display Name' }),
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
                    placeholder: w.key,
                    value: x,
                    onChange: B => {
                        y(B.target.value);
                    },
                    onBlur: () => {
                        (0, n.default)({
                            action: o.default.setNameOrDescription,
                            payload: {
                                key: v.hookKey,
                                value: x,
                                property: 'displayName'
                            }
                        });
                    },
                    maxLength: p.default.maxDisplayNameLength
                }),
                (0, f.jsx)('div', { style: { height: 20 } }),
                (0, f.jsx)(j.HookFormInputLabel, { children: 'Description' }),
                (0, f.jsx)(j.HookFormInputLabelDescription, { children: 'Optional description used to give the game host more info on what this hook customizes.' }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    placeholder: 'Description here...',
                    value: z,
                    onChange: B => {
                        A(B.target.value);
                    },
                    onBlur: () => {
                        (0, n.default)({
                            action: o.default.setNameOrDescription,
                            payload: {
                                key: v.hookKey,
                                value: z,
                                property: 'displayDescription'
                            }
                        });
                    },
                    maxLength: p.default.maxDisplayDescriptionLength
                })
            ]
        }) : null;
    });
    const _v = k.default.div(s || (s = (w => w)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const m = { width: '100%' };
    var _n = o => {
        var p, q, r, s;
        const [t, u] = g.useState({
            defaultValue: o.options.defaultValue,
            min: o.options.min,
            max: o.options.max,
            step: o.options.step
        });
        g.useEffect(() => {
            u({
                defaultValue: o.options.defaultValue,
                min: o.options.min,
                max: o.options.max,
                step: o.options.step
            });
        }, [
            null === (p = o.options) || void 0 === p ? void 0 : p.defaultValue,
            null === (q = o.options) || void 0 === q ? void 0 : q.min,
            null === (r = o.options) || void 0 === r ? void 0 : r.max,
            null === (s = o.options) || void 0 === s ? void 0 : s.step
        ]);
        const v = w => x => {
            ((y, z) => {
                (0, i.default)({
                    action: j.default.changeNumberOption,
                    payload: {
                        hookKey: o.hookKey,
                        key: y,
                        value: z
                    }
                }), u({
                    ...t,
                    [y]: z
                });
            })(w, x);
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.HookFormInputLabel, { children: 'Default Value' }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: '0',
                    onChange: v('defaultValue'),
                    value: t.defaultValue,
                    min: t.min,
                    max: t.max,
                    step: t.step
                }),
                (0, f.jsx)('div', { style: { height: 20 } }),
                (0, f.jsx)(h.HookFormInputLabel, { children: 'Minimum' }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Minimum here...',
                    onChange: v('min'),
                    value: t.min,
                    max: (0, k.isNil)(t.defaultValue) ? void 0 : t.defaultValue
                }),
                (0, f.jsx)('div', { style: { height: 20 } }),
                (0, f.jsx)(h.HookFormInputLabel, { children: 'Maximum' }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Maximum here...',
                    onChange: v('max'),
                    value: t.max,
                    min: (0, k.isNil)(t.defaultValue) ? void 0 : t.defaultValue
                }),
                (0, f.jsx)('div', { style: { height: 20 } }),
                (0, f.jsx)(h.HookFormInputLabel, { children: 'Step' }),
                (0, f.jsx)(h.HookFormInputLabelDescription, { children: 'Force the number to be of a certain factor. If you want only whole numbers, set a step of 1. If you want 50s (50, 100, 150, etc), set the step to 50.' }),
                (0, f.jsx)(l.default, {
                    size: 'large',
                    style: m,
                    placeholder: 'Step here...',
                    onChange: v('step'),
                    value: t.step,
                    min: 0.01
                }),
                (0, f.jsx)('div', { style: { height: 20 } })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v;
    const w = p.HookType.selectBox;
    var _x = y => {
        const [z, A] = g.useState(''), [B, C] = g.useState(w);
        return (0, f.jsx)(j.default, {
            open: y.visible,
            onClose: y.close,
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
                        style: { width: '100%' },
                        placeholder: 'Name here...',
                        onChange: D => {
                            A(D.target.value);
                        },
                        value: z,
                        maxLength: t.default.maxKeyLength
                    }),
                    (0, f.jsx)('div', { style: { height: 20 } }),
                    (0, f.jsxs)(u.HookFormInputLabel, {
                        children: [
                            m.default.name,
                            ' Type'
                        ]
                    }),
                    (0, f.jsxs)(l.default, {
                        size: 'large',
                        style: { width: '100%' },
                        value: B,
                        onChange: D => {
                            C(D);
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
                    (0, f.jsx)('div', { style: { height: 30 } }),
                    (0, f.jsxs)(h.default, {
                        block: !0,
                        size: 'large',
                        type: 'primary',
                        style: { height: 60 },
                        onClick: () => {
                            z && B && ((0, r.default)({
                                action: s.default.newHook,
                                payload: {
                                    key: z,
                                    type: B
                                }
                            }), A(''), C(w), y.close());
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
    const _y = o.default.div(v || (v = (z => z)`
  font-size: 28px;
  font-weight: ${ 0 };
`), q.FontWeights.UltraBold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w;
    var _x = (0, h.observer)(() => {
        const y = i.useRef(), z = (0, t.default)(), {
                me: {preferences: A}
            } = (0, r.default)(), B = C => {
                A.startGameWithMode = C;
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
                footer: D => 0 === D ? (0, f.jsxs)('div', {
                    style: { fontSize: 16 },
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
                            style: { marginTop: 10 },
                            onClick: () => {
                                A.startGameWithMode === u.MapModeType.liveGame ? B(u.MapModeType.assignment) : B(u.MapModeType.liveGame);
                            },
                            children: A.startGameWithMode === u.MapModeType.liveGame ? 'Live Game' : 'Assignment'
                        })
                    ]
                }),
                onStateChange: D => y.current = D
            })
        });
    });
    const _y = j.default.div(w || (w = (z => z)`
  padding: 2px 10px 40px 10px;
  color: ${ 0 };
`), m.default.Black);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
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
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function () {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
});