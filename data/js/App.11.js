function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _r;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....');
    b('.....');
    var i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....');
    var _r = (0, k.observer)(s => {
        var t, u;
        const v = null === (t = s.hooks) || void 0 === t || null === (u = t.connections) || void 0 === u ? void 0 : u.find(w => w.option === s.option.key);
        return (0, f.jsx)(h.default, {
            open: s.visible,
            onClose: s.close,
            width: p.default.drawer.widths.default,
            placement: p.default.drawer.placement,
            closable: !0,
            children: (0, f.jsxs)(q.default, {
                children: [
                    (0, f.jsx)(j.default, {
                        optionName: s.option.option.label,
                        optionKey: s.option.key,
                        deviceId: s.deviceId,
                        connectionName: null == v ? void 0 : v.hook,
                        close: s.close
                    }),
                    (0, f.jsx)(g.default, {}),
                    (() => {
                        if (v) {
                            if (v.hookType === n.HookType.selectBox)
                                return (0, f.jsx)(o.default, {
                                    option: s.option,
                                    connection: v,
                                    deviceId: s.deviceId
                                });
                            if (v.hookType === n.HookType.kit)
                                return (0, f.jsx)(l.default, {});
                            if (v.hookType === n.HookType.number)
                                return (0, f.jsx)(m.default, {
                                    option: s.option,
                                    connection: v
                                });
                        }
                        return (0, f.jsx)(i.default, {
                            option: s.option,
                            deviceId: s.deviceId,
                            deviceType: s.deviceType
                        });
                    })()
                ]
            })
        });
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('.....'),
        f = b('.....');
    b('.....');
    var g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....');
    let s, t, u, v, w, x, y = z => z;
    var _z = (0, f.observer)(A => {
        var B;
        const {
            hooks: {
                hookJSON: C
            }
        } = (0, j.default)(), D = JSON.parse(C);
        return (null == D || null === (B = D.hooks) || void 0 === B ? void 0 : B.length) ? (0, e.jsxs)(_A, {
            children: [
                (0, e.jsxs)(_C, {
                    children: [
                        'Choose a ',
                        k.default.name.toLowerCase(),
                        ' to connect to...'
                    ]
                }),
                D.hooks.map(E => {
                    const F = (D = A.option, f = A.deviceType, !((g = E.type) === i.HookType.kit ? 'kitId' === D.key && f === h.default.gimkitLiveQuestion : g !== i.HookType.number || D.option.type === r.default.numberInput));
                    var G, H, I;
                    return (0, e.jsx)(l.HookCardButton, {
                        style: {
                            marginBottom: 10,
                            cursor: F ? 'not-allowed' : 'pointer',
                            background: F ? '#e0e0e0' : p.default.White
                        },
                        onClick: () => {
                            F || (0, m.default)({
                                action: n.default.connect,
                                payload: {
                                    hook: E.key,
                                    option: A.option.key
                                },
                                device: A.deviceId
                            });
                        },
                        children: (0, e.jsxs)('div', {
                            className: 'flex-column',
                            style: {
                                alignItems: 'flex-start'
                            },
                            children: [
                                (0, e.jsx)(_D, {
                                    children: (0, o.default)(E.type)
                                }),
                                (0, e.jsx)(_E, {
                                    children: E.key
                                }),
                                F && (0, e.jsxs)(_F, {
                                    children: [
                                        'Cannot use ',
                                        k.default.name.toLowerCase(),
                                        ' for this option'
                                    ]
                                })
                            ]
                        })
                    }, `${ E.key }-option-connect`);
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
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'HookType', function() {
        return e;
    }), (f = e || (e = {})).selectBox = 'selectBox', f.kit = 'kit', f.number = 'number';
}), b.register('.....', function(c, d) {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'HookNewCardButton', function() {
        return _m;
    }), a(c.exports, 'HookCardButton', function() {
        return _n;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    let j, k, l = m => m;
    const _m = n => (0, e.jsx)(_o, {
            hoverable: !0,
            onClick: n.onClick,
            style: n.style,
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
                            children: n.children
                        })
                    ]
                })
            })
        }),
        _n = o => (0, e.jsx)(_o, {
            hoverable: !0,
            onClick: o.onClick,
            style: o.style,
            children: (0, e.jsx)(_p, {
                children: o.children
            })
        }),
        _o = (0, g.default)(f.default)(j || (j = l``)),
        _p = g.default.div(k || (k = l`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), h.default.Black, i.FontWeights.Bold);
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    var e = b('.....');
    var _f = g => {
        (0, e.default)(g);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, f.default)(e.default.hookOptionAction, {
            device: h.device,
            action: h.action,
            payload: h.payload
        });
    };
}), b.register('.....', function(c, d) {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    var e = b('.....');
    var _f = g => g === e.HookType.selectBox ? 'Select Box' : g === e.HookType.number ? 'Number' : g === e.HookType.kit ? 'Kit' : 'Unknown Type';
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....');
    b('.....');
    var k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....');
    var _o = p => {
        const q = () => {
            j.default.confirm({
                title: `Are you sure you want to disconnect this option from this ${ k.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, l.default)({
                        action: m.default.disconnect,
                        device: p.deviceId,
                        payload: {
                            option: p.optionKey
                        }
                    }), p.close();
                }
            });
        };
        return (0, e.jsxs)('div', {
            className: 'flex between vc',
            children: [
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(n.default, {
                        title: p.optionName,
                        descriptor: p.connectionName || `Connect ${ k.default.name }`
                    })
                }),
                (0, e.jsx)('div', {
                    style: {
                        marginLeft: 10
                    },
                    children: p.connectionName ? (0, e.jsx)(h.default, {
                        overlay: (0, e.jsx)(i.default, {
                            children: (0, e.jsxs)(i.default.Item, {
                                onClick: q,
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....');
    let h, i, j, k = l => l;
    var _l = m => (0, e.jsxs)(_m, {
        children: [
            (0, e.jsx)(_n, {
                children: m.descriptor
            }),
            (0, e.jsx)(_o, {
                children: m.title
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'HookConnectedBase', function() {
        return _m;
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....');
    let i, j, k, l = m => m;
    const _m = n => (0, e.jsxs)(_o, {
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
            n.children
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    b('.....');
    var j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....');
    let p, q, r = s => s;
    var _s = (0, i.observer)(t => {
        const {
            hooks: {
                hookJSON: u
            }
        } = (0, l.default)(), v = JSON.parse(u).hooks.find(w => w.key === t.connection.hook);
        if (!v || v.type !== m.HookType.number)
            return null;
        const w = v.options || {},
            x = t.option.option.props || {},
            y = () => {
                const z = [];
                return (0, h.isNil)(x.min) || ((0, h.isNil)(w.min) ? z.push({
                    key: 'Minimum',
                    device: x.min
                }) : w.min < x.min && z.push({
                    key: 'Minimum',
                    device: x.min,
                    hook: w.min
                })), (0, h.isNil)(x.max) || ((0, h.isNil)(w.max) && z.push({
                    key: 'Maximum',
                    device: x.max
                }), w.max > x.max && z.push({
                    key: 'Maximum',
                    device: x.max,
                    hook: w.max
                })), (0, h.isNil)(x.step) || ((0, h.isNil)(w.step) ? z.push({
                    key: 'Step',
                    device: x.step
                }) : w.step !== x.step && z.push({
                    key: 'Step',
                    device: x.step,
                    hook: w.step
                })), z;
            },
            z = y();
        return (0, e.jsx)(j.HookConnectedBase, {
            children: z.length ? (0, e.jsxs)(e.Fragment, {
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
                            y().map(A => (0, e.jsx)(_t, {
                                name: A.key,
                                deviceValue: A.device,
                                hookValue: A.hook
                            }, A.key))
                        ]
                    })
                ]
            }) : null
        });
    });
    const _t = u => {
            const {
                name: v,
                deviceValue: w,
                hookValue: x
            } = u;
            return (0, e.jsx)(f.default, {
                style: {
                    marginBottom: 10
                },
                type: 'warning',
                message: (0, h.isNil)(x) ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, e.jsx)('b', {
                            children: v.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(w)
                        }),
                        ', but no ',
                        v.toLowerCase(),
                        ' is set on the ',
                        o.default.name.toLowerCase(),
                        '.'
                    ]
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, e.jsx)('b', {
                            children: v.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(w)
                        }),
                        ', but the',
                        ' ',
                        o.default.name.toLowerCase(),
                        ' value is set to',
                        ' ',
                        (0, e.jsx)('b', {
                            children: (0, n.numberWithCommas)(x)
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('.....'),
        f = b('.....');
    b('.....');
    var g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....'),
        s = b('.....');
    let t, u, v = w => w;
    const w = (0, f.observer)(x => {
            const {
                hooks: {
                    hookJSON: y
                }
            } = (0, g.default)(), z = () => {
                (0, h.default)({
                    action: i.default.createLink,
                    payload: {
                        option: x.connection.option,
                        hook: x.connection.hook
                    },
                    device: x.deviceId
                });
            }, A = x.connection.options, B = Object.keys(A.valueMap), C = JSON.parse(y).hooks.find(D => D.key === x.connection.hook);
            if (!C)
                return null;
            const D = C.options;
            if (!D.options.length)
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
            if (!B.length)
                return (0, e.jsx)(_y, {
                    createLink: z
                });
            const E = D.options.filter(F => !B.includes(F));
            return (0, e.jsxs)(_A, {
                children: [
                    B.map(F => (0, e.jsx)(_x, {
                        option: x.option,
                        selectKey: F,
                        selectValue: x.connection.options.valueMap[F],
                        selectOptions: [
                            F,
                            ...E
                        ],
                        deviceId: x.deviceId,
                        hookId: x.connection.hook
                    }, F + '-hook-option')),
                    E.length ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(l.default, {}),
                            (0, e.jsx)(k.default, {
                                size: 'large',
                                type: 'primary',
                                block: !0,
                                style: {
                                    height: 60
                                },
                                onClick: z,
                                children: 'Add Another Link'
                            })
                        ]
                    }) : null
                ]
            });
        }),
        _x = y => (0, e.jsxs)(_B, {
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
                    value: y.selectKey,
                    placeholder: 'Choose a value...',
                    onChange: z => {
                        (0, h.default)({
                            action: i.default.changeLinkOption,
                            device: y.deviceId,
                            payload: {
                                option: y.option.key,
                                hook: y.hookId,
                                currentOption: y.selectKey,
                                newOption: z
                            }
                        });
                    },
                    children: y.selectOptions.map(z => (0, e.jsx)(n.default.Option, {
                        value: z,
                        children: z
                    }, z + y.selectKey))
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
                    option: y.option.option,
                    value: y.selectValue,
                    onChange: z => {
                        (0, h.default)({
                            action: i.default.changeLinkValue,
                            device: y.deviceId,
                            payload: {
                                option: y.option.key,
                                hook: y.hookId,
                                key: y.selectKey,
                                value: z
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
                                        device: y.deviceId,
                                        payload: {
                                            option: y.option.key,
                                            hook: y.hookId,
                                            key: y.selectKey
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
        _y = z => (0, e.jsxs)('div', {
            className: 'flex-column flex-center',
            style: {
                background: '#eceff1',
                padding: 40,
                borderRadius: 6,
                border: '1px dashed rgba(0, 0, 0, 0.5)',
                cursor: 'pointer'
            },
            onClick: z.createLink,
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'HookFormInputLabel', function() {
        return _j;
    }), a(c.exports, 'HookFormInputLabelDescription', function() {
        return _k;
    });
    var e = b('.....'),
        f = b('.....');
    let g, h, i = j => j;
    const _j = e.default.div(g || (g = i`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), f.FontWeights.Bold),
        _k = e.default.div(h || (h = i`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....');
    let h;
    var _i = e.default.div(h || (h = (j => j)`
  color: ${ 0 };
  font-family: ${ 0 };
`), g.default.Black, f.Fonts.ProductSans);
});