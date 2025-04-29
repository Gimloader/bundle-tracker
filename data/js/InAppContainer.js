function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('KuuVw', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _l(b.exports, 'default', function() {
        return _k;
    });
    var e = a('0hzx+'),
        f = a('2x11J');
    a('LEQ5w');
    var g = a('11nl3'),
        h = a('bHGrl'),
        i = a('mQCZt'),
        j = a('Cc8U1');
    var _k = (0, f.observer)(() => {
        const {
            hooks: {
                hookJSON: _l
            }
        } = (0, h.default)();
        return (0, e.jsx)(j.default, {
            stringifiedData: _l,
            onClose: () => {
                (0, i.default)(g.default.none);
            }
        });
    });
}), a.register('Cc8U1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('PMl60'),
        i = a('nEBHu'),
        j = a('Gxfhq'),
        k = a('le6+G'),
        l = a('//Rup'),
        m = a('31UsN'),
        n = a('oKonb');
    var _o = (0, f.observer)(_v => {
        const [p, q] = g.useState(!1), [r, s, t] = (0, h.useBoolean)(!1), u = (0, j.default)();
        g.useEffect(() => {
            q(!0);
            const _v = (0, k.AddInputBlockingUI)().dispose;
            return () => _v();
        }, []), g.useEffect(() => (window.addEventListener('TEST_VALUES_VISIBLE', s), window.addEventListener('TEST_VALUES_HIDDEN', t), () => {
            window.removeEventListener('TEST_VALUES_VISIBLE', s), window.removeEventListener('TEST_VALUES_HIDDEN', t);
        })), g.useEffect(() => {
            n.default.data = JSON.parse(_l.stringifiedData);
        }, [_l.stringifiedData]), g.useEffect(() => {
            u || _v();
        }, [u]);
        const _v = () => {
                q(!1);
            },
            w = (0, j.default)() && p;
        return (0, d.jsx)(m.default.Provider, {
            value: n.default,
            children: (0, d.jsx)(e.default, {
                open: w,
                afterOpenChange: () => {
                    w || _l.onClose();
                },
                onClose: _v,
                placement: i.default.drawer.placement,
                closable: !0,
                width: r ? i.default.drawer.widths.testValues : i.default.drawer.widths.default,
                children: (0, d.jsx)(l.default, {})
            })
        });
    });
}), a.register('nEBHu', function(b, c) {
    _l(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: 'Hook',
        drawer: {
            placement: 'left',
            widths: {
                default: 450,
                testValues: 700
            }
        }
    };
}), a.register('//Rup', function(b, c) {
    _l(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('nEBHu'),
        h = a('aPprg'),
        i = a('xhIul');
    let j, k, l, m = _l => _l;
    var _n = () => (0, d.jsx)(h.default, {
        children: (0, d.jsxs)(_o, {
            children: [
                (0, d.jsxs)(_p, {
                    children: [
                        g.default.name,
                        's'
                    ]
                }),
                (0, d.jsxs)(_q, {
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
    const _o = e.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(j || (j = m``)),
        _p = e.default.div(k || (k = m`
  font-size: 36px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        _q = e.default.div(l || (l = m`
  font-size: 18px;
  margin-top: 4px;
`));
}), a.register('aPprg', function(b, c) {
    _l(b.exports, 'default', function() {
        return _h;
    });
    var d = a('Axq+p'),
        e = a('b5kvC'),
        f = a('vShe/');
    let g;
    var _h = d.default.div(g || (g = (_l => _l)`
  color: ${ 0 };
  font-family: ${ 0 };
`), f.default.Black, e.Fonts.ProductSans);
}), a.register('xhIul', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('CAKUf'),
        f = a('2x11J');
    a('LEQ5w');
    var g = a('JNsYL'),
        h = a('yotix'),
        i = a('lcrzD'),
        j = a('tA5HU');
    var _k = (0, f.observer)(() => {
        var _l;
        const m = (0, h.default)(),
            n = (0, g.useAmIGameOwner)();
        return (null === (_l = m.hooks) || void 0 === _l ? void 0 : _l.length) && n ? (0, d.jsxs)(e.default, {
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
}), a.register('yotix', function(b, c) {
    _p(b.exports, 'default', function() {
        return _e;
    });
    var d = a('oKonb');
    var _e = () => d.default.data;
}), a.register('oKonb', function(b, c) {
    _p(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.data = {
                hooks: []
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'data', void 0);
    var _g = new f();
}), a.register('lcrzD', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('PMl60'),
        h = a('nEBHu'),
        i = a('2AWDu'),
        j = a('LbvQU'),
        k = a('yotix'),
        l = a('kig3a'),
        m = a('YzWnC');
    let n;
    var _o = (0, e.observer)(() => {
        const _p = (0, k.default)(),
            [q, r, s] = (0, g.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_p, {
                    children: [
                        _p.hooks.length < i.default.maxHooks ? (0, d.jsxs)(j.HookNewCardButton, {
                            style: {
                                marginBottom: 10
                            },
                            onClick: r,
                            children: [
                                'New ',
                                h.default.name
                            ]
                        }) : null,
                        _p.hooks.map((q, r) => (0, d.jsx)(l.default, {
                            id: q.key,
                            type: q.type,
                            index: r,
                            totalHooks: _p.hooks.length
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
    const _p = f.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (_w => _w)``));
}), a.register('2AWDu', function(b, c) {
    _w(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('LbvQU', function(b, c) {
    _w(b.exports, 'HookNewCardButton', function() {
        return _l;
    }), _w(b.exports, 'HookCardButton', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('Axq+p'),
        g = a('vShe/'),
        h = a('b5kvC');
    let i, j, k = _w => _w;
    const _l = _w => (0, d.jsx)(_n, {
            hoverable: !0,
            onClick: _w.onClick,
            style: _w.style,
            children: (0, d.jsx)(_o, {
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
                            children: _w.children
                        })
                    ]
                })
            })
        }),
        _m = _w => (0, d.jsx)(_n, {
            hoverable: !0,
            onClick: _w.onClick,
            style: _w.style,
            children: (0, d.jsx)(_o, {
                children: _w.children
            })
        }),
        _n = (0, f.default)(e.default)(i || (i = k``)),
        _o = f.default.div(j || (j = k`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), g.default.Black, h.FontWeights.Bold);
}), a.register('kig3a', function(b, c) {
    _w(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('ulE4q'),
        h = a('/rAT0'),
        i = a('WfOD7'),
        j = a('YRlpt'),
        k = a('LHeQv'),
        l = a('b5kvC'),
        m = a('PMl60'),
        n = a('CM/CB'),
        o = a('sWOBO'),
        p = a('LbvQU'),
        q = a('fNsdX'),
        r = a('exDBf'),
        s = a('blUBm'),
        t = a('nEBHu');
    let u, v, w, x, y, z = _w => _w;
    var _A = _w => {
        const [B, C, D] = (0, m.useBoolean)(!1), E = e.useMemo(() => (0, o.default)(_w.type), [_w.type]), F = () => {
            j.default.confirm({
                title: `Are you sure you want to delete this ${ t.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, r.default)({
                        action: s.default.removeHook,
                        payload: {
                            key: _w.id
                        }
                    });
                }
            });
        }, G = B => {
            (0, r.default)({
                action: s.default.moveHook,
                payload: {
                    key: _w.id,
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
                    children: (0, d.jsxs)(_B, {
                        children: [
                            (0, d.jsxs)(_C, {
                                children: [
                                    (0, d.jsx)(_E, {
                                        children: E
                                    }),
                                    (0, d.jsx)(_F, {
                                        children: _w.id
                                    })
                                ]
                            }),
                            (0, d.jsx)(_D, {
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
                                            _w.index > 0 && _w.totalHooks > 1 ? (0, d.jsx)(i.default.Item, {
                                                onClick: (0, q.default)(() => G('up')),
                                                children: 'Move Up'
                                            }) : null,
                                            _w.index !== _w.totalHooks && _w.totalHooks > 1 ? (0, d.jsx)(i.default.Item, {
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
                    hookKey: _w.id
                })
            ]
        });
    };
    const _B = f.default.div.attrs({
            className: 'flex vc between maxWidth'
        })(u || (u = z``)),
        _C = f.default.div(v || (v = z``)),
        _D = f.default.div(w || (w = z``)),
        _E = f.default.div(x || (x = z`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), l.FontWeights.Normal),
        _F = f.default.div(y || (y = z``));
}), a.register('CM/CB', function(b, c) {
    _w(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('2x11J');
    a('LEQ5w');
    var g = a('nEBHu'),
        h = a('aPprg'),
        i = a('gs/5D'),
        j = a('2wIB0'),
        k = a('I/rJl');
    var _l = (0, f.observer)(_w => {
        const m = (0, i.default)(_w.hookKey);
        return m ? (0, d.jsxs)(e.default, {
            open: _w.visible,
            placement: g.default.drawer.placement,
            width: g.default.drawer.widths.default,
            onClose: _w.close,
            closable: !0,
            children: [
                (0, d.jsx)(h.default, {
                    children: (0, d.jsx)(j.default, {
                        name: _w.hookKey,
                        type: m.type
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(k.default, {
                    hookKey: _w.hookKey
                })
            ]
        }) : null;
    });
}), a.register('gs/5D', function(b, c) {
    _w(b.exports, 'default', function() {
        return _e;
    });
    var d = a('oKonb');
    var _e = _w => {
        var f, g;
        return null === (f = d.default.data) || void 0 === f || null === (g = f.hooks) || void 0 === g ? void 0 : g.find(f => f.key === _w);
    };
}), a.register('2wIB0', function(b, c) {
    _w(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sWOBO'),
        g = a('nEBHu'),
        h = a('b5kvC');
    let i, j, k, l = _w => _w;
    var _m = _w => (0, d.jsxs)(_n, {
        children: [
            (0, d.jsxs)(_o, {
                children: [
                    g.default.name,
                    ' - ',
                    (0, f.default)(_w.type)
                ]
            }),
            (0, d.jsx)(_p, {
                children: _w.name
            })
        ]
    });
    const _n = e.default.div(i || (i = l``)),
        _o = e.default.div(j || (j = l`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _p = e.default.div(k || (k = l`
  font-size: 28px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), a.register('sWOBO', function(b, c) {
    _w(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QdGLB');
    var _e = _w => _w === d.HookType.selectBox ? 'Select Box' : _w === d.HookType.number ? 'Number' : _w === d.HookType.kit ? 'Kit' : 'Unknown Type';
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _w(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), a.register('I/rJl', function(b, c) {
    _w(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('CAKUf'),
        f = a('7up2I'),
        g = a('LEQ5w'),
        h = a('QdGLB'),
        i = a('aPprg'),
        j = a('gs/5D'),
        k = a('B9adZ'),
        l = a('4rtw4'),
        m = a('Mb8oX'),
        n = a('pWC1H');
    var _o = (0, f.observer)(_w => {
        const p = (0, j.default)(_w.hookKey);
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
                            hookKey: _w.hookKey
                        })
                    })
                }, 'tab-hook-select-options') : null,
                p.type === h.HookType.selectBox || p.type === h.HookType.number ? (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(e.default.TabPane, {
                            tab: 'Settings',
                            children: (0, d.jsx)(i.default, {
                                children: (0, d.jsx)(n.default, {
                                    hookKey: _w.hookKey
                                })
                            })
                        }, 'tab-hook-settings'),
                        (0, d.jsx)(e.default.TabPane, {
                            tab: 'Hidden',
                            children: (0, d.jsx)(i.default, {
                                children: (0, d.jsx)(l.default, {
                                    hookKey: _w.hookKey
                                })
                            })
                        }, 'tab-hook-hidden')
                    ]
                }) : null,
                (0, d.jsx)(e.default.TabPane, {
                    tab: 'Devices',
                    children: (0, d.jsx)(i.default, {
                        children: (0, d.jsx)(k.default, {
                            hookKey: _w.hookKey
                        })
                    })
                }, 'tab-hook-devices')
            ]
        });
    });
}), a.register('B9adZ', function(b, c) {
    _w(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('bHGrl'),
        g = a('Axq+p'),
        h = a('nEBHu'),
        i = a('LbvQU'),
        j = a('b5kvC'),
        k = a('mQCZt'),
        l = a('11nl3');
    let m, n, o, p, q = _w => _w;
    var _r = _w => {
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
            return Array.from(s).map(_w => _w[1]).forEach(s => {
                s.hooks && s.hooks.connections && s.hooks.connections.length && s.hooks.connections.forEach(u => {
                    if (u.hook === _w.hookKey) {
                        const _w = s.deviceOption.optionSchema.options.find(_w => _w.key === u.option).option.label;
                        v.push({
                            deviceId: s.id,
                            deviceOptionId: s.deviceOption.id,
                            deviceName: s.name || s.deviceOption.name,
                            optionName: _w
                        });
                    }
                });
            }), v;
        }, []);
        return (0, d.jsx)(_s, {
            children: u.length ? (0, d.jsx)(d.Fragment, {
                children: u.map(_n => (0, d.jsx)(i.HookCardButton, {
                    style: {
                        marginBottom: 10
                    },
                    onClick: () => {
                        t.device.currentlyEditedDevice = {
                            id: _n.deviceId,
                            deviceOptionId: _n.deviceOptionId
                        }, (0, k.default)(l.default.editingDevice);
                    },
                    children: (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(_u, {
                                children: _n.optionName
                            }),
                            (0, d.jsx)(_v, {
                                children: _n.deviceName
                            })
                        ]
                    })
                }, _n.deviceId + _n.optionName))
            }) : (0, d.jsxs)(_t, {
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
    const _s = g.default.div(m || (m = q``)),
        _t = g.default.div(n || (n = q`
  font-size: 16px;
`)),
        _u = g.default.div(o || (o = q`
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), j.FontWeights.Normal),
        _v = g.default.div(p || (p = q``));
}), a.register('4rtw4', function(b, c) {
    _n(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('nEBHu'),
        g = a('lyZQx');
    let h, i, j = _n => _n;
    var _k = _n => (0, d.jsxs)(_l, {
        children: [
            (0, d.jsxs)(_m, {
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
                hookKey: _n.hookKey
            })
        ]
    });
    const _l = e.default.div(h || (h = j``)),
        _m = e.default.div(i || (i = j`
  margin-bottom: 15px;
`));
}), a.register('lyZQx', function(b, c) {
    _n(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('PMl60'),
        g = a('2AWDu'),
        h = a('LbvQU'),
        i = a('gs/5D'),
        j = a('xsZsm'),
        k = a('kS4PY');
    var _l = (0, e.observer)(_n => {
        const m = (0, i.default)(_n.hookKey),
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
                    hookKey: _n.hookKey
                }, `scenario-${ m.name }-${ _n.hookKey }`)),
                (0, d.jsx)(j.default, {
                    hookKey: _n.hookKey,
                    visible: n,
                    close: p
                })
            ]
        });
    });
}), a.register('xsZsm', function(b, c) {
    _n(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('sgToH'),
        g = a('ewwAh'),
        h = a('LEQ5w'),
        i = a('nEBHu'),
        j = a('2AWDu'),
        k = a('blUBm'),
        l = a('exDBf'),
        m = a('aPprg'),
        n = a('yYQqX');
    var _o = _n => {
        const [p, q] = h.useState(''), r = () => {
            const s = p.trim();
            s.length && ((0, l.default)({
                action: k.default.newHiddenScenario,
                payload: {
                    key: _n.hookKey,
                    name: s
                }
            }), q(''), _n.close());
        };
        return (0, d.jsx)(f.default, {
            placement: i.default.drawer.placement,
            width: i.default.drawer.widths.default,
            open: _n.visible,
            onClose: _n.close,
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
                        onChange: _n => {
                            q(_n.target.value);
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
}), a.register('blUBm', function(b, c) {
    _n(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('exDBf', function(b, c) {
    _n(b.exports, 'default', function() {
        return _e;
    });
    var d = a('dv/zq');
    var _e = _n => {
        (0, d.default)(_n);
    };
}), a.register('dv/zq', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = _n => {
        (0, e.default)(d.default.hookAction, {
            action: _n.action,
            payload: _n.payload
        });
    };
}), a.register('yYQqX', function(b, c) {
    _n(b.exports, 'HookFormInputLabel', function() {
        return _i;
    }), _n(b.exports, 'HookFormInputLabelDescription', function() {
        return _j;
    });
    var d = a('Axq+p'),
        e = a('b5kvC');
    let f, g, h = _n => _n;
    const _i = d.default.div(f || (f = h`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), e.FontWeights.Bold),
        _j = d.default.div(g || (g = h`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), a.register('kS4PY', function(b, c) {
    _n(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('LbvQU'),
        f = a('Axq+p'),
        g = a('ulE4q'),
        h = a('/rAT0'),
        i = a('WfOD7'),
        j = a('LHeQv'),
        k = a('PMl60'),
        l = a('wWCmY'),
        m = a('fNsdX'),
        n = a('exDBf'),
        o = a('blUBm');
    let p;
    var _q = _n => {
        const [r, s, t] = (0, k.useBoolean)(!1), u = () => {
            (0, n.default)({
                action: o.default.removeHiddenScenario,
                payload: {
                    key: _n.hookKey,
                    name: _n.name
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
                    children: (0, d.jsxs)(_r, {
                        children: [
                            (0, d.jsx)('div', {
                                children: _n.name
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
                    scenarioName: _n.name,
                    hookKey: _n.hookKey
                })
            ]
        });
    };
    const _r = f.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(p || (p = (_n => _n)``));
}), a.register('wWCmY', function(b, c) {
    _n(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('sgToH'),
        g = a('2x11J');
    a('LEQ5w');
    var h = a('nEBHu'),
        i = a('aPprg'),
        j = a('w1AGN'),
        k = a('gs/5D'),
        l = a('wP6kf'),
        m = a('UueDK');
    var _n = (0, g.observer)(_n => {
        const o = (0, k.default)(_n.hookKey);
        if (!o)
            return null;
        const p = (o.hiddenScenarios || []).find(o => o.name === _n.scenarioName);
        return p ? (0, d.jsx)(f.default, {
            open: _n.visible,
            onClose: _n.close,
            width: h.default.drawer.widths.default,
            placement: h.default.drawer.placement,
            closable: !0,
            children: (0, d.jsxs)(i.default, {
                children: [
                    (0, d.jsx)(j.default, {
                        title: _n.scenarioName,
                        descriptor: 'Scenario'
                    }),
                    (0, d.jsx)(e.default, {}),
                    (0, d.jsx)(m.default, {
                        hookKey: _n.hookKey,
                        scenarioName: _n.scenarioName
                    }),
                    p.conditions.map(o => (0, d.jsx)(l.default, {
                        hookKey: _n.hookKey,
                        scenarioName: _n.scenarioName,
                        condition: o
                    }, `condition-${ o.id }`))
                ]
            })
        }) : null;
    });
}), a.register('w1AGN', function(b, c) {
    _n(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC');
    let g, h, i, j = _n => _n;
    var _k = _n => (0, d.jsxs)(_l, {
        children: [
            (0, d.jsx)(_m, {
                children: _n.descriptor
            }),
            (0, d.jsx)(_n, {
                children: _n.title
            })
        ]
    });
    const _l = e.default.div(g || (g = j``)),
        _m = e.default.div(h || (h = j`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _n = e.default.div(i || (i = j`
  font-size: 28px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold);
}), a.register('wP6kf', function(b, c) {
    _n(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Rq6L+0'),
        g = a('LbvQU'),
        h = a('Axq+p'),
        i = a('ulE4q'),
        j = a('/rAT0'),
        k = a('WfOD7'),
        l = a('LHeQv'),
        m = a('b5kvC'),
        n = a('blUBm'),
        o = a('exDBf'),
        p = a('fNsdX'),
        q = a('PMl60'),
        r = a('+pC8s'),
        s = a('nEBHu');
    let t, u, v, w = _n => _n;
    var _x = _n => {
        const [y, z, A] = (0, q.useBoolean)(!1), B = e.useMemo(() => _n.condition.type === f.HiddenConditionType.hookValue ? `${ s.default.name } Value` : _n.condition.type === f.HiddenConditionType.modeType ? 'Mode' : 'Unknown', [_n.condition.type]), C = () => {
            (0, o.default)({
                action: n.default.removeHiddenCondition,
                payload: {
                    key: _n.hookKey,
                    scenario: _n.scenarioName,
                    condition: _n.condition.id
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
                    children: (0, d.jsxs)(_y, {
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)(_z, {
                                        children: 'Condition'
                                    }),
                                    (0, d.jsx)(_A, {
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
                    hookKey: _n.hookKey,
                    scenarioName: _n.scenarioName,
                    condition: _n.condition.id
                })
            ]
        });
    };
    const _y = h.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(t || (t = w``)),
        _z = h.default.div(u || (u = w`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), m.FontWeights.Normal),
        _A = h.default.div(v || (v = w``));
}), a.register('fNsdX', function(b, c) {
    _n(b.exports, 'default', function() {
        return _d;
    });
    var _d = _n => b => {
        b.domEvent.stopPropagation(), _n && _n();
    };
}), a.register('+pC8s', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('2x11J');
    a('LEQ5w');
    var g = a('nEBHu'),
        h = a('Rq6L+0'),
        i = a('aPprg'),
        j = a('gs/5D'),
        k = a('GSEP+'),
        l = a('Az7iW');
    var _m = (0, f.observer)(_n => {
        const n = (0, j.default)(_n.hookKey);
        if (!n)
            return null;
        const o = (n.hiddenScenarios || []).find(n => n.name === _n.scenarioName);
        if (!o)
            return null;
        const p = o.conditions.find(n => n.id === _n.condition);
        if (!p)
            return null;
        return (0, d.jsx)(e.default, {
            placement: g.default.drawer.placement,
            width: g.default.drawer.widths.default,
            open: _n.visible,
            onClose: _n.close,
            closable: !0,
            children: (0, d.jsx)(i.default, {
                children: p.type === h.HiddenConditionType.hookValue ? (0, d.jsx)(k.default, {
                    condition: p,
                    hookKey: _n.hookKey,
                    scenarioName: _n.scenarioName,
                    close: _n.close
                }) : p.type === h.HiddenConditionType.modeType ? (0, d.jsx)(l.default, {
                    condition: p,
                    hookKey: _n.hookKey,
                    scenarioName: _n.scenarioName,
                    close: _n.close
                }) : null
            })
        });
    });
}), a.register('GSEP+', function(b, c) {
    _n(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('NIZyA'),
        f = a('OB7Pc'),
        g = a('ulE4q'),
        h = a('fmVdR'),
        i = a('ewwAh'),
        j = a('inwN3'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('nEBHu'),
        o = a('blUBm'),
        p = a('Rq6L+0'),
        q = a('exDBf'),
        r = a('w1AGN'),
        s = a('yYQqX'),
        t = a('yotix');
    let u;
    var _v = (0, k.observer)(_n => {
        const {
            options: w
        } = _n.condition, x = (0, t.default)(), [y, z] = l.useState(null == w ? void 0 : w.key), [A, B] = l.useState(null == w ? void 0 : w.compare), [C, D] = l.useState(null == w ? void 0 : w.value);
        if (l.useEffect(() => {
                z(null == w ? void 0 : w.key);
            }, [null == w ? void 0 : w.key]), l.useEffect(() => {
                B(null == w ? void 0 : w.compare);
            }, [null == w ? void 0 : w.compare]), l.useEffect(() => {
                D(null == w ? void 0 : w.value);
            }, [null == w ? void 0 : w.value]), !w)
            return null;
        const E = y.trim() === _n.hookKey,
            F = x.hooks.filter(w => w.key !== _n.hookKey).map(_n => ({
                value: _n.key
            }));
        return (0, d.jsxs)(_w, {
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
                    onChange: _n => {
                        z(_n);
                    },
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Name here...',
                    filterOption: (_n, w) => {
                        var G;
                        return -1 !== (null === (G = w.value) || void 0 === G ? void 0 : G.toUpperCase().indexOf(_n.toUpperCase()));
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
                    onChange: _n => {
                        B(_n);
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
                    onChange: _n => {
                        D(_n.target.value);
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
                                key: _n.hookKey,
                                scenario: _n.scenarioName,
                                condition: _n.condition.id,
                                options: {
                                    key: y,
                                    compare: A,
                                    value: C
                                }
                            }
                        }), _n.close());
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
    const _w = m.default.div(u || (u = (_n => _n)``));
}), a.register('OB7Pc', function(b, c) {
    _n(b.exports, 'default', function() {
        return _t;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('inwN3'),
        j = a('kRwUk25'),
        k = a('CMcLV');
    const {
        Option: l
    } = i.default;

    function m(_n) {
        return _n && _n.type && (_n.type.isSelectOption || _n.type.isSelectOptGroup);
    }
    const m = (_w, a) => {
            const {
                prefixCls: n,
                className: o,
                popupClassName: p,
                dropdownClassName: q,
                children: r,
                dataSource: s
            } = _w, _t = (0, e.default)(r);
            let u;
            1 === _t.length && (0, k.isValidElement)(_t[0]) && !_n(_t[0]) && ([v] = _t);
            const w = v ? () => v : void 0;
            let x;
            x = _t.length && _n(_t[0]) ? r : s ? s.map(_w => {
                if ((0, k.isValidElement)(_w))
                    return _w;
                switch (typeof _w) {
                    case 'string':
                        return g.createElement(l, {
                            key: _w,
                            value: _w
                        }, _w);
                    case 'object': {
                        const {
                            value: y
                        } = _w;
                        return g.createElement(l, {
                            key: y,
                            value: y
                        }, _w.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: y
            } = g.useContext(h.ConfigContext), z = y('select', n);
            return g.createElement(i.default, Object.assign({
                ref: a
            }, (0, f.default)(_w, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: z,
                popupClassName: p || q,
                className: _b(d)(`${ z }-auto-complete`, o),
                mode: i.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: w
            }), x);
        },
        n = g.forwardRef(m),
        o = (0, j.default)(n);
    n.Option = l, n._InternalPanelDoNotUseOrYouWillBeFired = o;
    var p = n;
}), a.register('Az7iW', function(_b, c) {
    _w(_b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('fmVdR'),
        g = a('inwN3'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('nEBHu'),
        k = a('blUBm'),
        l = a('66RLp2'),
        m = a('Rq6L+0'),
        _n = a('exDBf'),
        o = a('w1AGN'),
        p = a('yYQqX');
    let q;
    var _r = _w => {
        const {
            options: s
        } = _w.condition, [t, u] = h.useState(null == s ? void 0 : s.mode), [v, w] = h.useState(null == s ? void 0 : s.compare);
        if (h.useEffect(() => {
                u(null == s ? void 0 : s.mode);
            }, [null == s ? void 0 : s.mode]), h.useEffect(() => {
                w(null == s ? void 0 : s.compare);
            }, [null == s ? void 0 : s.compare]), !s)
            return null;
        return (0, d.jsxs)(_s, {
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
                    onChange: _w => {
                        w(_w);
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
                    onChange: _w => {
                        u(_w);
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
                        (0, _n.default)({
                            action: k.default.saveModeTypeHiddenConditionOptions,
                            payload: {
                                key: _w.hookKey,
                                scenario: _w.scenarioName,
                                condition: _w.condition.id,
                                options: {
                                    mode: t,
                                    compare: v
                                }
                            }
                        }), _w.close();
                    },
                    children: 'Save'
                })
            ]
        });
    };
    const _s = i.default.div(q || (q = (_w => _w)``));
}), a.register('UueDK', function(b, c) {
    _w(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('PMl60'),
        f = a('LbvQU'),
        g = a('HZZ9R');
    var _h = _w => {
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
                    hookKey: _w.hookKey,
                    scenarioName: _w.scenarioName
                })
            ]
        });
    };
}), a.register('HZZ9R', function(b, c) {
    _w(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('sgToH');
    a('LEQ5w');
    var g = a('nEBHu'),
        h = a('aPprg'),
        i = a('Axq+p'),
        j = a('LbvQU'),
        k = a('b5kvC'),
        l = a('exDBf'),
        m = a('blUBm'),
        n = a('Rq6L+0');
    let o, p, q, r, s = _w => _w;
    var _t = _w => {
        const u = u => {
            (0, l.default)({
                action: m.default.newHiddenCondition,
                payload: {
                    key: _w.hookKey,
                    scenario: _w.scenarioName,
                    conditionType: u
                }
            }), _w.close();
        };
        return (0, d.jsx)(f.default, {
            open: _w.visible,
            onClose: _w.close,
            width: g.default.drawer.widths.default,
            placement: g.default.drawer.placement,
            closable: !0,
            children: (0, d.jsxs)(h.default, {
                children: [
                    (0, d.jsx)(_u, {
                        children: 'New Condition'
                    }),
                    (0, d.jsx)(_v, {
                        children: 'Select a condition type'
                    }),
                    (0, d.jsx)(e.default, {}),
                    (0, d.jsxs)(j.HookCardButton, {
                        onClick: () => u(n.HiddenConditionType.hookValue),
                        children: [
                            (0, d.jsx)(_w, {
                                children: 'Hook Value'
                            }),
                            (0, d.jsx)(_x, {
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
                            (0, d.jsx)(_w, {
                                children: 'Mode'
                            }),
                            (0, d.jsx)(_x, {
                                children: 'Hide depending on the mode (live game or assignment)'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const _u = i.default.div(o || (o = s`
  font-size: 28px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _v = i.default.div(p || (p = s`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _w = i.default.div(q || (q = s``)),
        _x = i.default.div(r || (r = s`
  font-size: 15px;
  font-weight: ${ 0 };
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`), k.FontWeights.Normal);
}), a.register('Mb8oX', function(b, c) {
    _w(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('PMl60'),
        h = a('2AWDu'),
        i = a('LbvQU'),
        j = a('gs/5D'),
        k = a('ZA/7N'),
        l = a('lQwMP');
    let m;
    var _n = (0, e.observer)(_w => {
        const o = (0, j.default)(_w.hookKey),
            [p, q, r] = (0, g.useBoolean)(!1);
        if (!o)
            return null;
        const s = o.options;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_o, {
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
                    hookKey: _w.hookKey,
                    isDefaultOption: s.defaultOption === o
                }, `hook-${ _w.hookKey }-${ o }`)),
                (0, d.jsx)(k.default, {
                    hookKey: _w.hookKey,
                    visible: p,
                    close: r
                })
            ]
        });
    });
    const _o = f.default.div.attrs({
        className: 'maxWidth'
    })(m || (m = (_w => _w)``));
}), a.register('ZA/7N', function(b, c) {
    _w(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('sgToH'),
        g = a('ewwAh'),
        h = a('LEQ5w'),
        i = a('nEBHu'),
        j = a('blUBm'),
        k = a('exDBf'),
        l = a('aPprg'),
        m = a('yYQqX');
    var _n = _w => {
        const [o, p] = h.useState(''), q = () => {
            o.trim().length && ((0, k.default)({
                action: j.default.newOption,
                payload: {
                    key: _w.hookKey,
                    option: o.trim()
                }
            }), _w.close(), p(''));
        };
        return (0, d.jsxs)(f.default, {
            open: _w.visible,
            onClose: _w.close,
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
                            onChange: _w => {
                                p(_w.target.value);
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
}), a.register('lQwMP', function(b, c) {
    _w(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('LbvQU'),
        f = a('Axq+p'),
        g = a('ulE4q'),
        h = a('/rAT0'),
        i = a('WfOD7'),
        j = a('LHeQv'),
        k = a('exDBf'),
        l = a('blUBm'),
        m = a('fNsdX');
    let n;
    var _o = _w => {
        const p = p => {
                (0, k.default)({
                    action: l.default.moveOption,
                    payload: {
                        key: _w.hookKey,
                        option: _w.name,
                        direction: p
                    }
                });
            },
            q = () => {
                (0, k.default)({
                    action: l.default.removeOption,
                    payload: {
                        key: _w.hookKey,
                        option: _w.name
                    }
                });
            },
            r = () => {
                (0, k.default)({
                    action: l.default.makeOptionDefault,
                    payload: {
                        key: _w.hookKey,
                        option: _w.name
                    }
                });
            },
            s = () => {
                (0, k.default)({
                    action: l.default.removeDefaultOption,
                    payload: {
                        key: _w.hookKey,
                        option: _w.name
                    }
                });
            };
        return (0, d.jsx)(e.HookCardButton, {
            onClick: () => !1,
            style: {
                marginBottom: 10
            },
            children: (0, d.jsxs)(_p, {
                children: [
                    (0, d.jsx)('div', {
                        children: _w.name
                    }),
                    (0, d.jsx)(h.default, {
                        overlay: (0, d.jsxs)(i.default, {
                            children: [
                                _w.isDefaultOption ? (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(s),
                                    children: 'Remove As Default Option'
                                }, 'remove-as-default-option') : (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(r),
                                    children: 'Make Default Option'
                                }, 'make-default-option'),
                                0 !== _w.index ? (0, d.jsx)(i.default.Item, {
                                    onClick: (0, m.default)(() => p('up')),
                                    children: 'Move Up'
                                }, 'move-up') : null,
                                _w.index !== _w.numberOfItems - 1 ? (0, d.jsx)(i.default.Item, {
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
    const _p = f.default.div.attrs({
        className: 'maxWidth flex between vc'
    })(n || (n = (_w => _w)``));
}), a.register('pWC1H', function(b, c) {
    _w(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('2x11J'),
        f = a('LEQ5w'),
        g = a('nEBHu'),
        h = a('yYQqX'),
        i = a('Axq+p'),
        j = a('ewwAh'),
        k = a('gs/5D'),
        l = a('exDBf'),
        m = a('blUBm'),
        n = a('2AWDu'),
        o = a('QdGLB'),
        p = a('KalhB');
    let q;
    const r = g.default.name.toLowerCase();
    var _s = (0, e.observer)(_w => {
        const t = (0, k.default)(_w.hookKey),
            [u, v] = f.useState(null == t ? void 0 : t.displayName),
            [w, x] = f.useState(null == t ? void 0 : t.displayDescription);
        f.useEffect(() => {
            v(null == t ? void 0 : t.displayName);
        }, [null == t ? void 0 : t.displayName]), f.useEffect(() => {
            x(null == t ? void 0 : t.displayDescription);
        }, [null == t ? void 0 : t.displayDescription]);
        return t ? (0, d.jsxs)(_t, {
            children: [
                t.type === o.HookType.number ? (0, d.jsx)(p.default, {
                    hookKey: _w.hookKey,
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
                    onChange: _w => {
                        v(_w.target.value);
                    },
                    onBlur: () => {
                        (0, l.default)({
                            action: m.default.setNameOrDescription,
                            payload: {
                                key: _w.hookKey,
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
                    onChange: _w => {
                        x(_w.target.value);
                    },
                    onBlur: () => {
                        (0, l.default)({
                            action: m.default.setNameOrDescription,
                            payload: {
                                key: _w.hookKey,
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
    const _t = i.default.div(q || (q = (_w => _w)``));
}), a.register('KalhB', function(b, c) {
    _w(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('yYQqX'),
        g = a('exDBf'),
        h = a('blUBm'),
        i = a('fe6E3'),
        j = a('rw8oD0');
    const k = {
        width: '100%'
    };
    var _l = _w => {
        var m, n, o, p;
        const [q, r] = e.useState({
            defaultValue: _w.options.defaultValue,
            min: _w.options.min,
            max: _w.options.max,
            step: _w.options.step
        });
        e.useEffect(() => {
            r({
                defaultValue: _w.options.defaultValue,
                min: _w.options.min,
                max: _w.options.max,
                step: _w.options.step
            });
        }, [
            null === (m = _w.options) || void 0 === m ? void 0 : m.defaultValue,
            null === (n = _w.options) || void 0 === n ? void 0 : n.min,
            null === (o = _w.options) || void 0 === o ? void 0 : o.max,
            null === (p = _w.options) || void 0 === p ? void 0 : p.step
        ]);
        const s = m => n => {
            ((m, n) => {
                (0, g.default)({
                    action: h.default.changeNumberOption,
                    payload: {
                        hookKey: _w.hookKey,
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
}), a.register('YzWnC', function(b, c) {
    _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('sgToH'),
        i = a('ewwAh'),
        j = a('inwN3'),
        k = a('nEBHu'),
        l = a('aPprg'),
        m = a('Axq+p'),
        n = a('QdGLB'),
        o = a('b5kvC'),
        p = a('exDBf'),
        q = a('blUBm'),
        r = a('2AWDu'),
        s = a('yYQqX');
    let t;
    const u = n.HookType.selectBox;
    var _v = _w => {
        const [w, x] = e.useState(''), [y, z] = e.useState(u);
        return (0, d.jsx)(h.default, {
            open: _w.visible,
            onClose: _w.close,
            placement: k.default.drawer.placement,
            width: k.default.drawer.widths.default,
            closable: !0,
            children: (0, d.jsxs)(l.default, {
                children: [
                    (0, d.jsxs)(_w, {
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
                        onChange: _w => {
                            x(_w.target.value);
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
                        onChange: _w => {
                            z(_w);
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
                            }), x(''), z(u), _w.close());
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
    const _w = m.default.div(t || (t = (_w => _w)`
  font-size: 28px;
  font-weight: ${ 0 };
`), o.FontWeights.UltraBold);
}), a.register('tA5HU', function(b, c) {
    _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('bkqTR0'),
        j = a('ED5Qu0'),
        k = a('vShe/'),
        l = a('nEBHu'),
        m = a('x7BBh'),
        n = a('iWivW'),
        o = a('RxX2a'),
        p = a('bHGrl'),
        q = a('Quxw3'),
        r = a('yotix'),
        s = a('66RLp2'),
        t = a('GqzrW');
    let u;
    var _v = (0, f.observer)(() => {
        const _w = g.useRef(),
            x = (0, r.default)(),
            {
                me: {
                    preferences: y
                }
            } = (0, p.default)(),
            z = _w => {
                y.startGameWithMode = _w;
            };
        (0, t.useWillUnmount)(() => {
            z(s.MapModeType.liveGame);
        }), g.useEffect(() => (window.dispatchEvent(new CustomEvent('TEST_VALUES_VISIBLE')), () => {
            window.dispatchEvent(new CustomEvent('TEST_VALUES_HIDDEN'));
        }), []);
        const A = () => {
            (0, q.default)(m.default.startGame, {
                ownerAsSpectator: n.default.session.ownerRole === o.default.spectator,
                hookFormState: _w.current,
                modeType: n.default.me.preferences.startGameWithMode
            });
        };
        return (0, d.jsx)(_w, {
            children: (0, d.jsx)(i.default, {
                hooks: x,
                modeType: y.startGameWithMode,
                location: j.HookFormLocation.editor,
                footer: _w => 0 === _w ? (0, d.jsxs)('div', {
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
                onStateChange: x => _w.current = x
            })
        });
    });
    const _w = h.default.div(u || (u = (_i => _i)`
  padding: 2px 10px 40px 10px;
  color: ${ 0 };
`), k.default.Black);
}), a.register('31UsN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('oKonb');
    var _f = d.createContext(e.default);
}), a.register('Kc6XZ23', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    e(b.exports, 'default', function() {
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
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    e(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
});