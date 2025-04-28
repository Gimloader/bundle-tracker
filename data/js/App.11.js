function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('+9cKB', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'default', function() {
        return _q;
    });
    var e = a('0hzx+'),
        f = a('fmVdR'),
        g = a('sgToH');
    a('LEQ5w');
    var h = a('vks/+'),
        i = a('uYuLz'),
        j = a('2x11J'),
        k = a('X4hF0'),
        l = a('Uo2IS'),
        m = a('QdGLB'),
        n = a('W5/hF'),
        o = a('nEBHu'),
        p = a('aPprg');
    var _q = (0, j.observer)(_x => {
        var r, s;
        const t = null === (r = _x.hooks) || void 0 === r || null === (s = r.connections) || void 0 === s ? void 0 : s.find(r => r.option === _x.option.key);
        return (0, e.jsx)(g.default, {
            open: _x.visible,
            onClose: _x.close,
            width: o.default.drawer.widths.default,
            placement: o.default.drawer.placement,
            closable: !0,
            children: (0, e.jsxs)(p.default, {
                children: [
                    (0, e.jsx)(i.default, {
                        optionName: _x.option.option.label,
                        optionKey: _x.option.key,
                        deviceId: _x.deviceId,
                        connectionName: null == t ? void 0 : t.hook,
                        close: _x.close
                    }),
                    (0, e.jsx)(f.default, {}),
                    (() => {
                        if (t) {
                            if (t.hookType === m.HookType.selectBox)
                                return (0, e.jsx)(n.default, {
                                    option: _x.option,
                                    connection: t,
                                    deviceId: _x.deviceId
                                });
                            if (t.hookType === m.HookType.kit)
                                return (0, e.jsx)(k.default, {});
                            if (t.hookType === m.HookType.number)
                                return (0, e.jsx)(l.default, {
                                    option: _x.option,
                                    connection: t
                                });
                        }
                        return (0, e.jsx)(h.default, {
                            option: _x.option,
                            deviceId: _x.deviceId,
                            deviceType: _x.deviceType
                        });
                    })()
                ]
            })
        });
    });
}), a.register('vks/+', function(b, c) {
    _x(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('EqyfB'),
        h = a('QdGLB'),
        i = a('bHGrl'),
        j = a('nEBHu'),
        k = a('LbvQU'),
        l = a('iiikG'),
        m = a('KWq5G'),
        n = a('sWOBO'),
        o = a('vShe/'),
        p = a('b5kvC'),
        q = a('Y3EZX');
    let r, s, t, u, v, w, x = _x => _x;
    var _y = (0, e.observer)(_x => {
        var z;
        const {
            hooks: {
                hookJSON: A
            }
        } = (0, i.default)(), B = JSON.parse(A);
        return (null == B || null === (z = B.hooks) || void 0 === z ? void 0 : z.length) ? (0, d.jsxs)(_z, {
            children: [
                (0, d.jsxs)(_B, {
                    children: [
                        'Choose a ',
                        j.default.name.toLowerCase(),
                        ' to connect to...'
                    ]
                }),
                B.hooks.map(z => {
                    const C = (B = _x.option, e = _x.deviceType, !((f = z.type) === h.HookType.kit ? 'kitId' === B.key && e === g.default.gimkitLiveQuestion : f !== h.HookType.number || B.option.type === q.default.numberInput));
                    var D, E, F;
                    return (0, d.jsx)(k.HookCardButton, {
                        style: {
                            marginBottom: 10,
                            cursor: C ? 'not-allowed' : 'pointer',
                            background: C ? '#e0e0e0' : o.default.White
                        },
                        onClick: () => {
                            C || (0, l.default)({
                                action: m.default.connect,
                                payload: {
                                    hook: z.key,
                                    option: _x.option.key
                                },
                                device: _x.deviceId
                            });
                        },
                        children: (0, d.jsxs)('div', {
                            className: 'flex-column',
                            style: {
                                alignItems: 'flex-start'
                            },
                            children: [
                                (0, d.jsx)(_C, {
                                    children: (0, n.default)(z.type)
                                }),
                                (0, d.jsx)(_D, {
                                    children: z.key
                                }),
                                C && (0, d.jsxs)(_E, {
                                    children: [
                                        'Cannot use ',
                                        j.default.name.toLowerCase(),
                                        ' for this option'
                                    ]
                                })
                            ]
                        })
                    }, `${ z.key }-option-connect`);
                })
            ]
        }) : (0, d.jsx)(_z, {
            children: (0, d.jsxs)('div', {
                className: 'flex-column maxWidth flex-center',
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 42,
                            marginBottom: 10,
                            color: '#3949ab'
                        },
                        children: (0, d.jsx)('i', {
                            className: 'fad fa-plus-square'
                        })
                    }),
                    (0, d.jsxs)(_A, {
                        children: [
                            'You haven\'t created any ',
                            j.default.name.toLowerCase(),
                            's yet. Create one first and then come back here to connect this option to that',
                            ' ',
                            j.default.name.toLowerCase(),
                            '.'
                        ]
                    })
                ]
            })
        });
    });
    const _z = f.default.div(r || (r = x``)),
        _A = f.default.div(s || (s = x`
  font-size: 18px;
`)),
        _B = f.default.div(t || (t = x`
  font-style: italic;
  font-size: 16px;
  margin-bottom: 20px;
`)),
        _C = f.default.div(u || (u = x`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), p.FontWeights.Normal),
        _D = f.default.div(v || (v = x``)),
        _E = f.default.div(w || (w = x`
  background: #e53935;
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${ 0 };
  color: ${ 0 };
  padding: 10px 12px;
  border-radius: 8px;
  line-height: 1;
`), p.FontWeights.Normal, o.default.White);
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _x(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), a.register('nEBHu', function(b, c) {
    _x(b.exports, 'default', function() {
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
}), a.register('LbvQU', function(b, c) {
    _x(b.exports, 'HookNewCardButton', function() {
        return _l;
    }), _x(b.exports, 'HookCardButton', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('Axq+p'),
        g = a('vShe/'),
        h = a('b5kvC');
    let i, j, k = _x => _x;
    const _l = _x => (0, d.jsx)(_n, {
            hoverable: !0,
            onClick: _x.onClick,
            style: _x.style,
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
                            children: _x.children
                        })
                    ]
                })
            })
        }),
        _m = _x => (0, d.jsx)(_n, {
            hoverable: !0,
            onClick: _x.onClick,
            style: _x.style,
            children: (0, d.jsx)(_o, {
                children: _x.children
            })
        }),
        _n = (0, f.default)(e.default)(i || (i = k``)),
        _o = f.default.div(j || (j = k`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), g.default.Black, h.FontWeights.Bold);
}), a.register('iiikG', function(b, c) {
    _x(b.exports, 'default', function() {
        return _e;
    });
    var d = a('MwTfp');
    var _e = _x => {
        (0, d.default)(_x);
    };
}), a.register('MwTfp', function(b, c) {
    _x(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = _x => {
        (0, e.default)(d.default.hookOptionAction, {
            device: _x.device,
            action: _x.action,
            payload: _x.payload
        });
    };
}), a.register('KWq5G', function(b, c) {
    _x(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        connect: 'CONNECT',
        createLink: 'CREATE_LINK',
        changeLinkOption: 'CHANGE_LINK_OPTION',
        changeLinkValue: 'CHANGE_LINK_VALUE',
        removeLink: 'REMOVE_LINK',
        disconnect: 'DISCONNECT'
    };
}), a.register('sWOBO', function(b, c) {
    _x(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QdGLB');
    var _e = _x => _x === d.HookType.selectBox ? 'Select Box' : _x === d.HookType.number ? 'Number' : _x === d.HookType.kit ? 'Kit' : 'Unknown Type';
}), a.register('uYuLz', function(b, c) {
    _x(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LHeQv'),
        f = a('ulE4q'),
        g = a('/rAT0'),
        h = a('WfOD7'),
        i = a('YRlpt');
    a('LEQ5w');
    var j = a('nEBHu'),
        k = a('iiikG'),
        l = a('KWq5G'),
        m = a('w1AGN');
    var _n = _x => {
        const o = () => {
            i.default.confirm({
                title: `Are you sure you want to disconnect this option from this ${ j.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, k.default)({
                        action: l.default.disconnect,
                        device: _x.deviceId,
                        payload: {
                            option: _x.optionKey
                        }
                    }), _x.close();
                }
            });
        };
        return (0, d.jsxs)('div', {
            className: 'flex between vc',
            children: [
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(m.default, {
                        title: _x.optionName,
                        descriptor: _x.connectionName || `Connect ${ j.default.name }`
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginLeft: 10
                    },
                    children: _x.connectionName ? (0, d.jsx)(g.default, {
                        overlay: (0, d.jsx)(h.default, {
                            children: (0, d.jsxs)(h.default.Item, {
                                onClick: o,
                                children: [
                                    'Disconnect From ',
                                    j.default.name
                                ]
                            })
                        }),
                        children: (0, d.jsx)(f.default, {
                            shape: 'circle',
                            icon: (0, d.jsx)(e.default, {}),
                            type: 'dashed'
                        })
                    }) : null
                })
            ]
        });
    };
}), a.register('w1AGN', function(b, c) {
    _x(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC');
    let g, h, i, j = _x => _x;
    var _k = _x => (0, d.jsxs)(_l, {
        children: [
            (0, d.jsx)(_m, {
                children: _x.descriptor
            }),
            (0, d.jsx)(_n, {
                children: _x.title
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
}), a.register('X4hF0', function(b, c) {
    _x(b.exports, 'HookConnectedBase', function() {
        return _l;
    }), _x(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('nEBHu'),
        g = a('b5kvC');
    let h, i, j, k = _x => _x;
    const _l = _x => (0, d.jsxs)(_n, {
        children: [
            (0, d.jsx)('div', {
                children: (0, d.jsx)('i', {
                    style: {
                        color: '#388e3c',
                        fontSize: 32
                    },
                    className: 'fas fa-check'
                })
            }),
            (0, d.jsxs)(_o, {
                children: [
                    f.default.name,
                    ' connected!'
                ]
            }),
            (0, d.jsxs)(_p, {
                children: [
                    'The value of this ',
                    f.default.name.toLowerCase(),
                    ' will be the value of this option.'
                ]
            }),
            _x.children
        ]
    });
    var _m = () => (0, d.jsx)(_l, {});
    const _n = e.default.div.attrs({
            className: 'flex-column flex-center'
        })(h || (h = k``)),
        _o = e.default.div(i || (i = k`
  font-weight: ${ 0 };
  font-size: 24px;
  margin-top: 10px;
`), g.FontWeights.Bold),
        _p = e.default.div(j || (j = k`
  font-size: 16px;
  margin-top: 4px;
`));
}), a.register('Uo2IS', function(b, c) {
    _x(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('NIZyA'),
        f = a('fmVdR'),
        g = a('4iV4e'),
        h = a('7up2I');
    a('LEQ5w');
    var i = a('X4hF0'),
        j = a('Axq+p'),
        k = a('bHGrl'),
        l = a('QdGLB'),
        m = a('PMl60'),
        n = a('nEBHu');
    let o, p, q = _x => _x;
    var _r = (0, h.observer)(_x => {
        const {
            hooks: {
                hookJSON: s
            }
        } = (0, k.default)(), t = JSON.parse(s).hooks.find(s => s.key === _x.connection.hook);
        if (!t || t.type !== l.HookType.number)
            return null;
        const u = t.options || {},
            v = _x.option.option.props || {},
            w = () => {
                const _x = [];
                return (0, g.isNil)(v.min) || ((0, g.isNil)(u.min) ? _x.push({
                    key: 'Minimum',
                    device: v.min
                }) : u.min < v.min && _x.push({
                    key: 'Minimum',
                    device: v.min,
                    hook: u.min
                })), (0, g.isNil)(v.max) || ((0, g.isNil)(u.max) && _x.push({
                    key: 'Maximum',
                    device: v.max
                }), u.max > v.max && _x.push({
                    key: 'Maximum',
                    device: v.max,
                    hook: u.max
                })), (0, g.isNil)(v.step) || ((0, g.isNil)(u.step) ? _x.push({
                    key: 'Step',
                    device: v.step
                }) : u.step !== v.step && _x.push({
                    key: 'Step',
                    device: v.step,
                    hook: u.step
                })), _x;
            },
            x = w();
        return (0, d.jsx)(i.HookConnectedBase, {
            children: x.length ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(f.default, {}),
                    (0, d.jsxs)(_t, {
                        children: [
                            (0, d.jsxs)(_u, {
                                children: [
                                    'This ',
                                    n.default.name.toLowerCase(),
                                    '\'s settings are setup in a way that a user could enter a number not allowed for this device\'s option. ',
                                    (0, d.jsx)('br', {}),
                                    ' ',
                                    (0, d.jsx)('br', {}),
                                    ' If a number invalid for this device\'s option is used, the value set on the device itself will be used.'
                                ]
                            }),
                            w().map(e => (0, d.jsx)(_s, {
                                name: e.key,
                                deviceValue: e.device,
                                hookValue: e.hook
                            }, e.key))
                        ]
                    })
                ]
            }) : null
        });
    });
    const _s = e => {
            const {
                name: t,
                deviceValue: u,
                hookValue: v
            } = e;
            return (0, d.jsx)(e.default, {
                style: {
                    marginBottom: 10
                },
                type: 'warning',
                message: (0, g.isNil)(v) ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, d.jsx)('b', {
                            children: t.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, d.jsx)('b', {
                            children: (0, m.numberWithCommas)(u)
                        }),
                        ', but no ',
                        t.toLowerCase(),
                        ' is set on the ',
                        n.default.name.toLowerCase(),
                        '.'
                    ]
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, d.jsx)('b', {
                            children: t.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, d.jsx)('b', {
                            children: (0, m.numberWithCommas)(u)
                        }),
                        ', but the',
                        ' ',
                        n.default.name.toLowerCase(),
                        ' value is set to',
                        ' ',
                        (0, d.jsx)('b', {
                            children: (0, m.numberWithCommas)(v)
                        })
                    ]
                })
            });
        },
        _t = j.default.div(o || (o = q`
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`)),
        _u = j.default.div(p || (p = q`
  font-size: 16px;
  margin-bottom: 18px;
`));
}), a.register('W5/hF', function(b, c) {
    e(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('bHGrl'),
        g = a('iiikG'),
        h = a('KWq5G'),
        i = a('nEBHu'),
        j = a('ulE4q'),
        k = a('fmVdR'),
        l = a('YRlpt'),
        m = a('inwN3'),
        n = a('yRDXH'),
        o = a('yYQqX'),
        p = a('2HvvA11'),
        q = a('Axq+p'),
        r = a('b5kvC');
    let s, t, u = e => e;
    const v = (0, e.observer)(e => {
            const {
                hooks: {
                    hookJSON: w
                }
            } = (0, f.default)(), x = () => {
                (0, g.default)({
                    action: h.default.createLink,
                    payload: {
                        option: e.connection.option,
                        hook: e.connection.hook
                    },
                    device: e.deviceId
                });
            }, y = e.connection.options, z = Object.keys(y.valueMap), A = JSON.parse(w).hooks.find(w => w.key === e.connection.hook);
            if (!A)
                return null;
            const B = A.options;
            if (!B.options.length)
                return (0, d.jsxs)('div', {
                    style: {
                        fontSize: 16
                    },
                    children: [
                        'Before you can connect the ',
                        i.default.name.toLowerCase(),
                        ' to this option, you need to add selectable options. Go modify your',
                        ' ',
                        i.default.name.toLowerCase(),
                        ' to include options and then come back here!'
                    ]
                });
            if (!z.length)
                return (0, d.jsx)(_x, {
                    createLink: x
                });
            const C = B.options.filter(e => !z.includes(e));
            return (0, d.jsxs)(_z, {
                children: [
                    z.map(w => (0, d.jsx)(_w, {
                        option: e.option,
                        selectKey: w,
                        selectValue: e.connection.options.valueMap[w],
                        selectOptions: [
                            w,
                            ...C
                        ],
                        deviceId: e.deviceId,
                        hookId: e.connection.hook
                    }, w + '-hook-option')),
                    C.length ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(k.default, {}),
                            (0, d.jsx)(j.default, {
                                size: 'large',
                                type: 'primary',
                                block: !0,
                                style: {
                                    height: 60
                                },
                                onClick: x,
                                children: 'Add Another Link'
                            })
                        ]
                    }) : null
                ]
            });
        }),
        _w = e => (0, d.jsxs)(_A, {
            children: [
                (0, d.jsxs)(o.HookFormInputLabel, {
                    children: [
                        i.default.name,
                        ' Value'
                    ]
                }),
                (0, d.jsx)(m.default, {
                    style: {
                        width: '100%'
                    },
                    value: e.selectKey,
                    placeholder: 'Choose a value...',
                    onChange: a => {
                        (0, g.default)({
                            action: h.default.changeLinkOption,
                            device: e.deviceId,
                            payload: {
                                option: e.option.key,
                                hook: e.hookId,
                                currentOption: e.selectKey,
                                newOption: a
                            }
                        });
                    },
                    children: e.selectOptions.map(a => (0, d.jsx)(m.default.Option, {
                        value: a,
                        children: a
                    }, a + e.selectKey))
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)(o.HookFormInputLabel, {
                    children: 'Option Value'
                }),
                (0, d.jsx)(n.default, {
                    option: e.option.option,
                    value: e.selectValue,
                    onChange: a => {
                        (0, g.default)({
                            action: h.default.changeLinkValue,
                            device: e.deviceId,
                            payload: {
                                option: e.option.key,
                                hook: e.hookId,
                                key: e.selectKey,
                                value: a
                            }
                        });
                    },
                    readOnly: !1
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, d.jsx)('div', {
                    className: 'maxWidth flex',
                    style: {
                        justifyContent: 'flex-end'
                    },
                    children: (0, d.jsx)(p.default, {
                        onClick: () => {
                            l.default.confirm({
                                title: 'Are you sure you want to remove this link?',
                                onOk: () => {
                                    (0, g.default)({
                                        action: h.default.removeLink,
                                        device: e.deviceId,
                                        payload: {
                                            option: e.option.key,
                                            hook: e.hookId,
                                            key: e.selectKey
                                        }
                                    });
                                }
                            });
                        },
                        children: 'Remove link'
                    })
                })
            ]
        }),
        _x = e => (0, d.jsxs)('div', {
            className: 'flex-column flex-center',
            style: {
                background: '#eceff1',
                padding: 40,
                borderRadius: 6,
                border: '1px dashed rgba(0, 0, 0, 0.5)',
                cursor: 'pointer'
            },
            onClick: e.createLink,
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontWeight: r.FontWeights.Bold,
                        fontSize: 18,
                        marginBottom: 6
                    },
                    children: 'Create new link'
                }),
                (0, d.jsxs)('div', {
                    children: [
                        'Link the value of a ',
                        i.default.name.toLowerCase(),
                        ' to the value of this option'
                    ]
                })
            ]
        });
    var _y = v;
    const _z = q.default.div(s || (s = u``)),
        _A = q.default.div.attrs({
            className: 'light-shadow'
        })(t || (t = u`
  background: #fafafa;
  padding: 30px;
  border-radius: 6px;
  margin-bottom: 20px;
`));
}), a.register('yYQqX', function(b, c) {
    e(b.exports, 'HookFormInputLabel', function() {
        return _i;
    }), e(b.exports, 'HookFormInputLabelDescription', function() {
        return _j;
    });
    var d = a('Axq+p'),
        e = a('b5kvC');
    let f, g, h = e => e;
    const _i = d.default.div(f || (f = h`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), e.FontWeights.Bold),
        _j = d.default.div(g || (g = h`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), a.register('aPprg', function(b, c) {
    e(b.exports, 'default', function() {
        return _h;
    });
    var d = a('Axq+p'),
        e = a('b5kvC'),
        f = a('vShe/');
    let g;
    var _h = d.default.div(g || (g = (e => e)`
  color: ${ 0 };
  font-family: ${ 0 };
`), f.default.Black, e.Fonts.ProductSans);
});