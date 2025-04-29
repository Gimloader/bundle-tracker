function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('QUa6m', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _r;
    });
    var f = b('gRbUn'),
        g = b('VNuyu'),
        h = b('3t9ce');
    b('O0Kav');
    var i = b('qgfKW'),
        j = b('IzuM3'),
        k = b('6jmvl'),
        l = b('nzR0T'),
        m = b('O2yCs'),
        n = b('RBtfx4'),
        o = b('gEl/T'),
        p = b('flG2L'),
        q = b('lpNzY');
    var _r = (0, k.observer)(a => {
        var s, t;
        const u = null === (s = a.hooks) || void 0 === s || null === (t = s.connections) || void 0 === t ? void 0 : t.find(s => s.option === a.option.key);
        return (0, f.jsx)(h.default, {
            open: a.visible,
            onClose: a.close,
            width: p.default.drawer.widths.default,
            placement: p.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(q.default, {
                children: [
                    (0, f.jsx)(j.default, {
                        optionName: a.option.option.label,
                        optionKey: a.option.key,
                        deviceId: a.deviceId,
                        connectionName: null == u ? void 0 : u.hook,
                        close: a.close
                    }),
                    (0, f.jsx)(g.default, {}),
                    (() => {
                        if (u) {
                            if (u.hookType === n.HookType.selectBox)
                                return (0, f.jsx)(o.default, {
                                    option: a.option,
                                    connection: u,
                                    deviceId: a.deviceId
                                });
                            if (u.hookType === n.HookType.kit)
                                return (0, f.jsx)(l.default, {});
                            if (u.hookType === n.HookType.number)
                                return (0, f.jsx)(m.default, {
                                    option: a.option,
                                    connection: u
                                });
                        }
                        return (0, f.jsx)(i.default, {
                            option: a.option,
                            deviceId: a.deviceId,
                            deviceType: a.deviceType
                        });
                    })()
                ]
            })
        });
    });
}), b.register('qgfKW', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('gRbUn'),
        f = b('6jmvl');
    b('O0Kav');
    var g = b('u4s09'),
        h = b('OFuf70'),
        i = b('RBtfx4'),
        j = b('K/2xB'),
        k = b('flG2L'),
        l = b('CZb2U'),
        m = b('rEKJy'),
        n = b('jFZwj'),
        o = b('zEuNa'),
        p = b('HOIhZ'),
        q = b('Eh2Wh'),
        r = b('y3vGz');
    let s, t, u, v, w, x, y = a => a;
    var _z = (0, f.observer)(a => {
        var A;
        const {
            hooks: {
                hookJSON: B
            }
        } = (0, j.default)(), C = JSON.parse(B);
        return (null == C || null === (A = C.hooks) || void 0 === A ? void 0 : A.length) ? (0, e.jsxs)(_A, {
            children: [
                (0, e.jsxs)(_C, {
                    children: [
                        'Choose a ',
                        k.default.name.toLowerCase(),
                        ' to connect to...'
                    ]
                }),
                C.hooks.map(A => {
                    const D = (C = a.option, f = a.deviceType, !((g = A.type) === i.HookType.kit ? 'kitId' === C.key && f === h.default.gimkitLiveQuestion : g !== i.HookType.number || C.option.type === r.default.numberInput));
                    var E, F, G;
                    return (0, e.jsx)(l.HookCardButton, {
                        style: {
                            marginBottom: 10,
                            cursor: D ? 'not-allowed' : 'pointer',
                            background: D ? '#e0e0e0' : p.default.White
                        },
                        onClick: () => {
                            D || (0, m.default)({
                                action: n.default.connect,
                                payload: {
                                    hook: A.key,
                                    option: a.option.key
                                },
                                device: a.deviceId
                            });
                        },
                        children: (0, e.jsxs)('div', {
                            className: 'flex-column',
                            style: {
                                alignItems: 'flex-start'
                            },
                            children: [
                                (0, e.jsx)(_D, {
                                    children: (0, o.default)(A.type)
                                }),
                                (0, e.jsx)(_E, {
                                    children: A.key
                                }),
                                D && (0, e.jsxs)(_F, {
                                    children: [
                                        'Cannot use ',
                                        k.default.name.toLowerCase(),
                                        ' for this option'
                                    ]
                                })
                            ]
                        })
                    }, `${ A.key }-option-connect`);
                })
            ]
        }) : (0, e.jsx)(_A, {
            children: (0, e.jsxs)('div', {
                className: 'flex-column maxWidth flex-center',
                children: [
                    (0, e.jsx)('div', {
                        style: {
                            fontSize: 42,
                            marginBottom: 10,
                            color: '#3949ab'
                        },
                        children: (0, e.jsx)('i', {
                            className: 'fad fa-plus-square'
                        })
                    }),
                    (0, e.jsxs)(_B, {
                        children: [
                            'You haven\'t created any ',
                            k.default.name.toLowerCase(),
                            's yet. Create one first and then come back here to connect this option to that',
                            ' ',
                            k.default.name.toLowerCase(),
                            '.'
                        ]
                    })
                ]
            })
        });
    });
    const _A = g.default.div(s || (s = y``)),
        _B = g.default.div(t || (t = y`
  font-size: 18px;
`)),
        _C = g.default.div(u || (u = y`
  font-style: italic;
  font-size: 16px;
  margin-bottom: 20px;
`)),
        _D = g.default.div(v || (v = y`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), q.FontWeights.Normal),
        _E = g.default.div(w || (w = y``)),
        _F = g.default.div(x || (x = y`
  background: #e53935;
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${ 0 };
  color: ${ 0 };
  padding: 10px 12px;
  border-radius: 8px;
  line-height: 1;
`), q.FontWeights.Normal, p.default.White);
}), b.register('RBtfx4', function(c, d) {
    let e;
    var f;
    a(c.exports, 'HookType', function() {
        return e;
    }), (f = e || (e = {})).selectBox = 'selectBox', f.kit = 'kit', f.number = 'number';
}), b.register('flG2L', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        name: 'Hook',
        drawer: {
            placement: 'left',
            widths: {
                default: 450,
                testValues: 700
            }
        }
    };
}), b.register('CZb2U', function(c, d) {
    a(c.exports, 'HookNewCardButton', function() {
        return _m;
    }), a(c.exports, 'HookCardButton', function() {
        return _n;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('QZ0Z+'),
        g = b('u4s09'),
        h = b('HOIhZ'),
        i = b('Eh2Wh');
    let j, k, l = a => a;
    const _m = a => (0, e.jsx)(_o, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, e.jsx)(_p, {
                children: (0, e.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, e.jsx)('i', {
                            style: {
                                color: '#2e7d32',
                                marginRight: 10,
                                fontSize: 28
                            },
                            className: 'fas fa-plus-circle'
                        }),
                        (0, e.jsx)('div', {
                            children: a.children
                        })
                    ]
                })
            })
        }),
        _n = a => (0, e.jsx)(_o, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, e.jsx)(_p, {
                children: a.children
            })
        }),
        _o = (0, g.default)(f.default)(j || (j = l``)),
        _p = g.default.div(k || (k = l`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), h.default.Black, i.FontWeights.Bold);
}), b.register('rEKJy', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    var e = b('gZv2S');
    var _f = a => {
        (0, e.default)(a);
    };
}), b.register('gZv2S', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('ywRRc'),
        f = b('0v55W');
    var _g = a => {
        (0, f.default)(e.default.hookOptionAction, {
            device: a.device,
            action: a.action,
            payload: a.payload
        });
    };
}), b.register('jFZwj', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        connect: 'CONNECT',
        createLink: 'CREATE_LINK',
        changeLinkOption: 'CHANGE_LINK_OPTION',
        changeLinkValue: 'CHANGE_LINK_VALUE',
        removeLink: 'REMOVE_LINK',
        disconnect: 'DISCONNECT'
    };
}), b.register('zEuNa', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    var e = b('RBtfx4');
    var _f = a => a === e.HookType.selectBox ? 'Select Box' : a === e.HookType.number ? 'Number' : a === e.HookType.kit ? 'Kit' : 'Unknown Type';
}), b.register('IzuM3', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('gRbUn'),
        f = b('1ZCzi'),
        g = b('P1KtI'),
        h = b('M3JwW'),
        i = b('xAv1a'),
        j = b('AE7vR');
    b('O0Kav');
    var k = b('flG2L'),
        l = b('rEKJy'),
        m = b('jFZwj'),
        n = b('9UHpy');
    var _o = a => {
        const p = () => {
            j.default.confirm({
                title: `Are you sure you want to disconnect this option from this ${ k.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, l.default)({
                        action: m.default.disconnect,
                        device: a.deviceId,
                        payload: {
                            option: a.optionKey
                        }
                    }), a.close();
                }
            });
        };
        return (0, e.jsxs)('div', {
            className: 'flex between vc',
            children: [
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(n.default, {
                        title: a.optionName,
                        descriptor: a.connectionName || `Connect ${ k.default.name }`
                    })
                }),
                (0, e.jsx)('div', {
                    style: {
                        marginLeft: 10
                    },
                    children: a.connectionName ? (0, e.jsx)(h.default, {
                        overlay: (0, e.jsx)(i.default, {
                            children: (0, e.jsxs)(i.default.Item, {
                                onClick: p,
                                children: [
                                    'Disconnect From ',
                                    k.default.name
                                ]
                            })
                        }),
                        children: (0, e.jsx)(g.default, {
                            shape: 'circle',
                            icon: (0, e.jsx)(f.default, {}),
                            type: 'dashed'
                        })
                    }) : null
                })
            ]
        });
    };
}), b.register('9UHpy', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Eh2Wh');
    let h, i, j, k = a => a;
    var _l = a => (0, e.jsxs)(_m, {
        children: [
            (0, e.jsx)(_n, {
                children: a.descriptor
            }),
            (0, e.jsx)(_o, {
                children: a.title
            })
        ]
    });
    const _m = f.default.div(h || (h = k``)),
        _n = f.default.div(i || (i = k`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _o = f.default.div(j || (j = k`
  font-size: 28px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold);
}), b.register('nzR0T', function(c, d) {
    a(c.exports, 'HookConnectedBase', function() {
        return _m;
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('flG2L'),
        h = b('Eh2Wh');
    let i, j, k, l = a => a;
    const _m = a => (0, e.jsxs)(_o, {
        children: [
            (0, e.jsx)('div', {
                children: (0, e.jsx)('i', {
                    style: {
                        color: '#388e3c',
                        fontSize: 32
                    },
                    className: 'fas fa-check'
                })
            }),
            (0, e.jsxs)(_p, {
                children: [
                    g.default.name,
                    ' connected!'
                ]
            }),
            (0, e.jsxs)(_q, {
                children: [
                    'The value of this ',
                    g.default.name.toLowerCase(),
                    ' will be the value of this option.'
                ]
            }),
            a.children
        ]
    });
    var _n = () => (0, e.jsx)(_m, {});
    const _o = f.default.div.attrs({
            className: 'flex-column flex-center'
        })(i || (i = l``)),
        _p = f.default.div(j || (j = l`
  font-weight: ${ 0 };
  font-size: 24px;
  margin-top: 10px;
`), h.FontWeights.Bold),
        _q = f.default.div(k || (k = l`
  font-size: 16px;
  margin-top: 4px;
`));
}), b.register('O2yCs', function(c, d) {
    a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn'),
        f = b('qMSe6'),
        g = b('VNuyu'),
        h = b('9zaF+'),
        i = b('NU2gN');
    b('O0Kav');
    var j = b('nzR0T'),
        k = b('u4s09'),
        l = b('K/2xB'),
        m = b('RBtfx4'),
        n = b('quE27'),
        o = b('flG2L');
    let p, q, r = a => a;
    var _s = (0, i.observer)(a => {
        const {
            hooks: {
                hookJSON: t
            }
        } = (0, l.default)(), u = JSON.parse(t).hooks.find(t => t.key === a.connection.hook);
        if (!u || u.type !== m.HookType.number)
            return null;
        const v = u.options || {},
            w = a.option.option.props || {},
            x = () => {
                const y = [];
                return (0, h.isNil)(w.min) || ((0, h.isNil)(v.min) ? y.push({
                    key: 'Minimum',
                    device: w.min
                }) : v.min < w.min && y.push({
                    key: 'Minimum',
                    device: w.min,
                    hook: v.min
                })), (0, h.isNil)(w.max) || ((0, h.isNil)(v.max) && y.push({
                    key: 'Maximum',
                    device: w.max
                }), v.max > w.max && y.push({
                    key: 'Maximum',
                    device: w.max,
                    hook: v.max
                })), (0, h.isNil)(w.step) || ((0, h.isNil)(v.step) ? y.push({
                    key: 'Step',
                    device: w.step
                }) : v.step !== w.step && y.push({
                    key: 'Step',
                    device: w.step,
                    hook: v.step
                })), y;
            },
            y = x();
        return (0, e.jsx)(j.HookConnectedBase, {
            children: y.length ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(g.default, {}),
                    (0, e.jsxs)(_u, {
                        children: [
                            (0, e.jsxs)(_v, {
                                children: [
                                    'This ',
                                    o.default.name.toLowerCase(),
                                    '\'s settings are setup in a way that a user could enter a number not allowed for this device\'s option. ',
                                    (0, e.jsx)('br', {}),
                                    ' ',
                                    (0, e.jsx)('br', {}),
                                    ' If a number invalid for this device\'s option is used, the value set on the device itself will be used.'
                                ]
                            }),
                            x().map(a => (0, e.jsx)(_t, {
                                name: a.key,
                                deviceValue: a.device,
                                hookValue: a.hook
                            }, a.key))
                        ]
                    })
                ]
            }) : null
        });
    });
    const _t = a => {
            const {
                name: u,
                deviceValue: v,
                hookValue: w
            } = a;
            return (0, e.jsx)(f.default, {
                style: {
                    marginBottom: 10
                },
                type: 'warning',
                message: (0, h.isNil)(w) ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, e.jsx)('b', {
                            children: u.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(v)
                        }),
                        ', but no ',
                        u.toLowerCase(),
                        ' is set on the ',
                        o.default.name.toLowerCase(),
                        '.'
                    ]
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, e.jsx)('b', {
                            children: u.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(v)
                        }),
                        ', but the',
                        ' ',
                        o.default.name.toLowerCase(),
                        ' value is set to',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(w)
                        })
                    ]
                })
            });
        },
        _u = k.default.div(p || (p = r`
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`)),
        _v = k.default.div(q || (q = r`
  font-size: 16px;
  margin-bottom: 18px;
`));
}), b.register('gEl/T', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('gRbUn'),
        f = b('6jmvl');
    b('O0Kav');
    var g = b('K/2xB'),
        h = b('rEKJy'),
        i = b('jFZwj'),
        j = b('flG2L'),
        k = b('P1KtI'),
        l = b('VNuyu'),
        m = b('AE7vR'),
        n = b('u8Dt8'),
        o = b('ydj3C'),
        p = b('AmTT/'),
        q = b('FB7HT26'),
        r = b('u4s09'),
        s = b('Eh2Wh');
    let t, u, v = a => a;
    const w = (0, f.observer)(a => {
            const {
                hooks: {
                    hookJSON: x
                }
            } = (0, g.default)(), y = () => {
                (0, h.default)({
                    action: i.default.createLink,
                    payload: {
                        option: a.connection.option,
                        hook: a.connection.hook
                    },
                    device: a.deviceId
                });
            }, z = a.connection.options, A = Object.keys(z.valueMap), B = JSON.parse(x).hooks.find(x => x.key === a.connection.hook);
            if (!B)
                return null;
            const C = B.options;
            if (!C.options.length)
                return (0, e.jsxs)('div', {
                    style: {
                        fontSize: 16
                    },
                    children: [
                        'Before you can connect the ',
                        j.default.name.toLowerCase(),
                        ' to this option, you need to add selectable options. Go modify your',
                        ' ',
                        j.default.name.toLowerCase(),
                        ' to include options and then come back here!'
                    ]
                });
            if (!A.length)
                return (0, e.jsx)(_y, {
                    createLink: y
                });
            const D = C.options.filter(a => !A.includes(a));
            return (0, e.jsxs)(_A, {
                children: [
                    A.map(x => (0, e.jsx)(_x, {
                        option: a.option,
                        selectKey: x,
                        selectValue: a.connection.options.valueMap[x],
                        selectOptions: [
                            x,
                            ...D
                        ],
                        deviceId: a.deviceId,
                        hookId: a.connection.hook
                    }, x + '-hook-option')),
                    D.length ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(l.default, {}),
                            (0, e.jsx)(k.default, {
                                size: 'large',
                                type: 'primary',
                                block: !0,
                                style: {
                                    height: 60
                                },
                                onClick: y,
                                children: 'Add Another Link'
                            })
                        ]
                    }) : null
                ]
            });
        }),
        _x = a => (0, e.jsxs)(_B, {
            children: [
                (0, e.jsxs)(p.HookFormInputLabel, {
                    children: [
                        j.default.name,
                        ' Value'
                    ]
                }),
                (0, e.jsx)(n.default, {
                    style: {
                        width: '100%'
                    },
                    value: a.selectKey,
                    placeholder: 'Choose a value...',
                    onChange: b => {
                        (0, h.default)({
                            action: i.default.changeLinkOption,
                            device: a.deviceId,
                            payload: {
                                option: a.option.key,
                                hook: a.hookId,
                                currentOption: a.selectKey,
                                newOption: b
                            }
                        });
                    },
                    children: a.selectOptions.map(b => (0, e.jsx)(n.default.Option, {
                        value: b,
                        children: b
                    }, b + a.selectKey))
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(p.HookFormInputLabel, {
                    children: 'Option Value'
                }),
                (0, e.jsx)(o.default, {
                    option: a.option.option,
                    value: a.selectValue,
                    onChange: b => {
                        (0, h.default)({
                            action: i.default.changeLinkValue,
                            device: a.deviceId,
                            payload: {
                                option: a.option.key,
                                hook: a.hookId,
                                key: a.selectKey,
                                value: b
                            }
                        });
                    },
                    readOnly: !1
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)('div', {
                    className: 'maxWidth flex',
                    style: {
                        justifyContent: 'flex-end'
                    },
                    children: (0, e.jsx)(q.default, {
                        onClick: () => {
                            m.default.confirm({
                                title: 'Are you sure you want to remove this link?',
                                onOk: () => {
                                    (0, h.default)({
                                        action: i.default.removeLink,
                                        device: a.deviceId,
                                        payload: {
                                            option: a.option.key,
                                            hook: a.hookId,
                                            key: a.selectKey
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
        _y = a => (0, e.jsxs)('div', {
            className: 'flex-column flex-center',
            style: {
                background: '#eceff1',
                padding: 40,
                borderRadius: 6,
                border: '1px dashed rgba(0, 0, 0, 0.5)',
                cursor: 'pointer'
            },
            onClick: a.createLink,
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontWeight: s.FontWeights.Bold,
                        fontSize: 18,
                        marginBottom: 6
                    },
                    children: 'Create new link'
                }),
                (0, e.jsxs)('div', {
                    children: [
                        'Link the value of a ',
                        j.default.name.toLowerCase(),
                        ' to the value of this option'
                    ]
                })
            ]
        });
    var _z = w;
    const _A = r.default.div(t || (t = v``)),
        _B = r.default.div.attrs({
            className: 'light-shadow'
        })(u || (u = v`
  background: #fafafa;
  padding: 30px;
  border-radius: 6px;
  margin-bottom: 20px;
`));
}), b.register('AmTT/', function(c, d) {
    a(c.exports, 'HookFormInputLabel', function() {
        return _j;
    }), a(c.exports, 'HookFormInputLabelDescription', function() {
        return _k;
    });
    var e = b('u4s09'),
        f = b('Eh2Wh');
    let g, h, i = a => a;
    const _j = e.default.div(g || (g = i`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), f.FontWeights.Bold),
        _k = e.default.div(h || (h = i`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), b.register('lpNzY', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('u4s09'),
        f = b('Eh2Wh'),
        g = b('HOIhZ');
    let h;
    var _i = e.default.div(h || (h = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), g.default.Black, f.Fonts.ProductSans);
});