function a(a, b, r, s) {
    Object.defineProperty(a, b, {
        get: r,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('rAQ73', function(r, s) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return p;
    });
    var d = b('8kSQZ'),
        e = b('ExtIT'),
        f = b('KV+OV');
    b('uPP4W');
    var g = b('Qq6YV'),
        h = b('nanV7'),
        i = b('Vlfxs'),
        j = b('L9Xv1'),
        k = b('/US1R'),
        l = b('uzjvO4'),
        m = b('POlup'),
        n = b('9a8Pk'),
        o = b('vaQAz');
    var p = (0, i.observer)(a => {
        var q, r;
        const s = null === (q = a.hooks) || void 0 === q || null === (r = q.connections) || void 0 === r ? void 0 : r.find(q => q.option === a.option.key);
        return (0, d.jsx)(f.default, {
            open: a.visible,
            onClose: a.close,
            width: n.default.drawer.widths.default,
            placement: n.default.drawer.placement,
            closable: !0,
            children: (0, d.jsxs)(o.default, {
                children: [
                    (0, d.jsx)(h.default, {
                        optionName: a.option.option.label,
                        optionKey: a.option.key,
                        deviceId: a.deviceId,
                        connectionName: null == s ? void 0 : s.hook,
                        close: a.close
                    }),
                    (0, d.jsx)(e.default, {}),
                    (() => {
                        if (s) {
                            if (s.hookType === l.HookType.selectBox)
                                return (0, d.jsx)(m.default, {
                                    option: a.option,
                                    connection: s,
                                    deviceId: a.deviceId
                                });
                            if (s.hookType === l.HookType.kit)
                                return (0, d.jsx)(j.default, {});
                            if (s.hookType === l.HookType.number)
                                return (0, d.jsx)(k.default, {
                                    option: a.option,
                                    connection: s
                                });
                        }
                        return (0, d.jsx)(g.default, {
                            option: a.option,
                            deviceId: a.deviceId,
                            deviceType: a.deviceType
                        });
                    })()
                ]
            })
        });
    });
}), b.register('Qq6YV', function(z, A) {
    a(z.exports, 'default', function() {
        return x;
    });
    var c = b('8kSQZ'),
        d = b('Vlfxs');
    b('uPP4W');
    var e = b('h99Nu'),
        f = b('7X8h3'),
        g = b('uzjvO4'),
        h = b('am7L5'),
        i = b('9a8Pk'),
        j = b('bzk6e'),
        k = b('/EBkJ'),
        l = b('RgR8s'),
        m = b('DuuvX'),
        n = b('S/jX4'),
        o = b('gSUVO'),
        p = b('7EBSZ');
    let q, r, s, t, u, v, w = a => a;
    var x = (0, d.observer)(a => {
        var y;
        const {
            hooks: {
                hookJSON: z
            }
        } = (0, h.default)(), A = JSON.parse(z);
        return (null == A || null === (y = A.hooks) || void 0 === y ? void 0 : y.length) ? (0, c.jsxs)(y, {
            children: [
                (0, c.jsxs)(A, {
                    children: [
                        'Choose a ',
                        i.default.name.toLowerCase(),
                        ' to connect to...'
                    ]
                }),
                A.hooks.map(y => {
                    const B = (A = a.option, d = a.deviceType, !((e = y.type) === g.HookType.kit ? 'kitId' === A.key && d === f.default.gimkitLiveQuestion : e !== g.HookType.number || A.option.type === p.default.numberInput));
                    var C, D, E;
                    return (0, c.jsx)(j.HookCardButton, {
                        style: {
                            marginBottom: 10,
                            cursor: B ? 'not-allowed' : 'pointer',
                            background: B ? '#e0e0e0' : n.default.White
                        },
                        onClick: () => {
                            B || (0, k.default)({
                                action: l.default.connect,
                                payload: {
                                    hook: y.key,
                                    option: a.option.key
                                },
                                device: a.deviceId
                            });
                        },
                        children: (0, c.jsxs)('div', {
                            className: 'flex-column',
                            style: {
                                alignItems: 'flex-start'
                            },
                            children: [
                                (0, c.jsx)(B, {
                                    children: (0, m.default)(y.type)
                                }),
                                (0, c.jsx)(C, {
                                    children: y.key
                                }),
                                B && (0, c.jsxs)(D, {
                                    children: [
                                        'Cannot use ',
                                        i.default.name.toLowerCase(),
                                        ' for this option'
                                    ]
                                })
                            ]
                        })
                    }, `${ y.key }-option-connect`);
                })
            ]
        }) : (0, c.jsx)(y, {
            children: (0, c.jsxs)('div', {
                className: 'flex-column maxWidth flex-center',
                children: [
                    (0, c.jsx)('div', {
                        style: {
                            fontSize: 42,
                            marginBottom: 10,
                            color: '#3949ab'
                        },
                        children: (0, c.jsx)('i', {
                            className: 'fad fa-plus-square'
                        })
                    }),
                    (0, c.jsxs)(z, {
                        children: [
                            'You haven\'t created any ',
                            i.default.name.toLowerCase(),
                            's yet. Create one first and then come back here to connect this option to that',
                            ' ',
                            i.default.name.toLowerCase(),
                            '.'
                        ]
                    })
                ]
            })
        });
    });
    const y = e.default.div(q || (q = w``)),
        z = e.default.div(r || (r = w`
  font-size: 18px;
`)),
        A = e.default.div(s || (s = w`
  font-style: italic;
  font-size: 16px;
  margin-bottom: 20px;
`)),
        B = e.default.div(t || (t = w`
  font-size: 12px;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
  font-weight: ${ 0 };
`), o.FontWeights.Normal),
        C = e.default.div(u || (u = w``)),
        D = e.default.div(v || (v = w`
  background: #e53935;
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${ 0 };
  color: ${ 0 };
  padding: 10px 12px;
  border-radius: 8px;
  line-height: 1;
`), o.FontWeights.Normal, n.default.White);
}), b.register('uzjvO4', function(b, s) {
    let c;
    var d;
    a(b.exports, 'HookType', function() {
        return c;
    }), (d = c || (c = {})).selectBox = 'selectBox', d.kit = 'kit', d.number = 'number';
}), b.register('9a8Pk', function(b, s) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        name: 'Hook',
        drawer: {
            placement: 'left',
            widths: {
                default: 450,
                testValues: 700
            }
        }
    };
}), b.register('bzk6e', function(s, c) {
    a(s.exports, 'HookNewCardButton', function() {
        return k;
    }), a(s.exports, 'HookCardButton', function() {
        return l;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('f9f+a'),
        e = b('h99Nu'),
        f = b('S/jX4'),
        g = b('gSUVO');
    let h, i, j = a => a;
    const k = a => (0, c.jsx)(m, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, c.jsx)(n, {
                children: (0, c.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, c.jsx)('i', {
                            style: {
                                color: '#2e7d32',
                                marginRight: 10,
                                fontSize: 28
                            },
                            className: 'fas fa-plus-circle'
                        }),
                        (0, c.jsx)('div', {
                            children: a.children
                        })
                    ]
                })
            })
        }),
        l = a => (0, c.jsx)(m, {
            hoverable: !0,
            onClick: a.onClick,
            style: a.style,
            children: (0, c.jsx)(n, {
                children: a.children
            })
        }),
        m = (0, e.default)(d.default)(h || (h = j``)),
        n = e.default.div(i || (i = j`
  color: ${ 0 };
  font-size: 18px;
  font-weight: ${ 0 };
`), f.default.Black, g.FontWeights.Bold);
}), b.register('/EBkJ', function(s, c) {
    a(s.exports, 'default', function() {
        return d;
    });
    var c = b('xzyT4');
    var d = a => {
        (0, c.default)(a);
    };
}), b.register('xzyT4', function(s, c) {
    a(s.exports, 'default', function() {
        return e;
    });
    var c = b('sPSvg'),
        d = b('DM38W');
    var e = a => {
        (0, d.default)(c.default.hookOptionAction, {
            device: a.device,
            action: a.action,
            payload: a.payload
        });
    };
}), b.register('RgR8s', function(b, s) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        connect: 'CONNECT',
        createLink: 'CREATE_LINK',
        changeLinkOption: 'CHANGE_LINK_OPTION',
        changeLinkValue: 'CHANGE_LINK_VALUE',
        removeLink: 'REMOVE_LINK',
        disconnect: 'DISCONNECT'
    };
}), b.register('DuuvX', function(s, t) {
    a(s.exports, 'default', function() {
        return d;
    });
    var c = b('uzjvO4');
    var d = a => a === c.HookType.selectBox ? 'Select Box' : a === c.HookType.number ? 'Number' : a === c.HookType.kit ? 'Kit' : 'Unknown Type';
}), b.register('nanV7', function(s, t) {
    a(s.exports, 'default', function() {
        return m;
    });
    var c = b('8kSQZ'),
        d = b('j/N3t'),
        e = b('IsmrL'),
        f = b('M1Vx4'),
        g = b('u3X1v'),
        h = b('cR5QE');
    b('uPP4W');
    var i = b('9a8Pk'),
        j = b('/EBkJ'),
        k = b('RgR8s'),
        l = b('MKzy/');
    var m = a => {
        const n = () => {
            h.default.confirm({
                title: `Are you sure you want to disconnect this option from this ${ i.default.name.toLowerCase() }?`,
                onOk: () => {
                    (0, j.default)({
                        action: k.default.disconnect,
                        device: a.deviceId,
                        payload: {
                            option: a.optionKey
                        }
                    }), a.close();
                }
            });
        };
        return (0, c.jsxs)('div', {
            className: 'flex between vc',
            children: [
                (0, c.jsx)('div', {
                    children: (0, c.jsx)(l.default, {
                        title: a.optionName,
                        descriptor: a.connectionName || `Connect ${ i.default.name }`
                    })
                }),
                (0, c.jsx)('div', {
                    style: {
                        marginLeft: 10
                    },
                    children: a.connectionName ? (0, c.jsx)(f.default, {
                        overlay: (0, c.jsx)(g.default, {
                            children: (0, c.jsxs)(g.default.Item, {
                                onClick: n,
                                children: [
                                    'Disconnect From ',
                                    i.default.name
                                ]
                            })
                        }),
                        children: (0, c.jsx)(e.default, {
                            shape: 'circle',
                            icon: (0, c.jsx)(d.default, {}),
                            type: 'dashed'
                        })
                    }) : null
                })
            ]
        });
    };
}), b.register('MKzy/', function(s, t) {
    a(s.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('gSUVO');
    let f, g, h, i = a => a;
    var j = a => (0, c.jsxs)(k, {
        children: [
            (0, c.jsx)(l, {
                children: a.descriptor
            }),
            (0, c.jsx)(m, {
                children: a.title
            })
        ]
    });
    const k = d.default.div(f || (f = i``)),
        l = d.default.div(g || (g = i`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`)),
        m = d.default.div(h || (h = i`
  font-size: 28px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold);
}), b.register('L9Xv1', function(s, t) {
    a(s.exports, 'HookConnectedBase', function() {
        return k;
    }), a(s.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('9a8Pk'),
        f = b('gSUVO');
    let g, h, i, j = a => a;
    const k = a => (0, c.jsxs)(m, {
        children: [
            (0, c.jsx)('div', {
                children: (0, c.jsx)('i', {
                    style: {
                        color: '#388e3c',
                        fontSize: 32
                    },
                    className: 'fas fa-check'
                })
            }),
            (0, c.jsxs)(n, {
                children: [
                    e.default.name,
                    ' connected!'
                ]
            }),
            (0, c.jsxs)(o, {
                children: [
                    'The value of this ',
                    e.default.name.toLowerCase(),
                    ' will be the value of this option.'
                ]
            }),
            a.children
        ]
    });
    var l = () => (0, c.jsx)(k, {});
    const m = d.default.div.attrs({
            className: 'flex-column flex-center'
        })(g || (g = j``)),
        n = d.default.div(h || (h = j`
  font-weight: ${ 0 };
  font-size: 24px;
  margin-top: 10px;
`), f.FontWeights.Bold),
        o = d.default.div(i || (i = j`
  font-size: 16px;
  margin-top: 4px;
`));
}), b.register('/US1R', function(s, t) {
    a(s.exports, 'default', function() {
        return q;
    });
    var c = b('8kSQZ'),
        d = b('bPH7V'),
        e = b('ExtIT'),
        f = b('4/f+U'),
        g = b('8k9IL');
    b('uPP4W');
    var h = b('L9Xv1'),
        i = b('h99Nu'),
        j = b('am7L5'),
        k = b('uzjvO4'),
        l = b('PjB0f'),
        m = b('9a8Pk');
    let n, o, p = a => a;
    var q = (0, g.observer)(a => {
        const {
            hooks: {
                hookJSON: r
            }
        } = (0, j.default)(), s = JSON.parse(r).hooks.find(r => r.key === a.connection.hook);
        if (!s || s.type !== k.HookType.number)
            return null;
        const t = s.options || {},
            u = a.option.option.props || {},
            v = () => {
                const w = [];
                return (0, f.isNil)(u.min) || ((0, f.isNil)(t.min) ? w.push({
                    key: 'Minimum',
                    device: u.min
                }) : t.min < u.min && w.push({
                    key: 'Minimum',
                    device: u.min,
                    hook: t.min
                })), (0, f.isNil)(u.max) || ((0, f.isNil)(t.max) && w.push({
                    key: 'Maximum',
                    device: u.max
                }), t.max > u.max && w.push({
                    key: 'Maximum',
                    device: u.max,
                    hook: t.max
                })), (0, f.isNil)(u.step) || ((0, f.isNil)(t.step) ? w.push({
                    key: 'Step',
                    device: u.step
                }) : t.step !== u.step && w.push({
                    key: 'Step',
                    device: u.step,
                    hook: t.step
                })), w;
            },
            w = v();
        return (0, c.jsx)(h.HookConnectedBase, {
            children: w.length ? (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(e.default, {}),
                    (0, c.jsxs)(s, {
                        children: [
                            (0, c.jsxs)(t, {
                                children: [
                                    'This ',
                                    m.default.name.toLowerCase(),
                                    '\'s settings are setup in a way that a user could enter a number not allowed for this device\'s option. ',
                                    (0, c.jsx)('br', {}),
                                    ' ',
                                    (0, c.jsx)('br', {}),
                                    ' If a number invalid for this device\'s option is used, the value set on the device itself will be used.'
                                ]
                            }),
                            v().map(a => (0, c.jsx)(r, {
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
    const r = a => {
            const {
                name: s,
                deviceValue: t,
                hookValue: u
            } = v;
            return (0, c.jsx)(d.default, {
                style: {
                    marginBottom: 10
                },
                type: 'warning',
                message: (0, f.isNil)(u) ? (0, c.jsxs)(c.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, c.jsx)('b', {
                            children: s.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, c.jsx)('b', {
                            children: (0, l.numberWithCommas)(t)
                        }),
                        ', but no ',
                        s.toLowerCase(),
                        ' is set on the ',
                        m.default.name.toLowerCase(),
                        '.'
                    ]
                }) : (0, c.jsxs)(c.Fragment, {
                    children: [
                        'This device\'s option has a ',
                        (0, c.jsx)('b', {
                            children: s.toLowerCase()
                        }),
                        ' of',
                        ' ',
                        (0, c.jsx)('b', {
                            children: (0, l.numberWithCommas)(t)
                        }),
                        ', but the',
                        ' ',
                        m.default.name.toLowerCase(),
                        ' value is set to',
                        ' ',
                        (0, c.jsx)('b', {
                            children: (0, l.numberWithCommas)(u)
                        })
                    ]
                })
            });
        },
        s = i.default.div(n || (n = p`
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`)),
        t = i.default.div(o || (o = p`
  font-size: 16px;
  margin-bottom: 18px;
`));
}), b.register('POlup', function(w, x) {
    a(w.exports, 'default', function() {
        return x;
    });
    var c = b('8kSQZ'),
        d = b('Vlfxs');
    b('uPP4W');
    var e = b('am7L5'),
        f = b('/EBkJ'),
        g = b('RgR8s'),
        h = b('9a8Pk'),
        i = b('IsmrL'),
        j = b('ExtIT'),
        k = b('cR5QE'),
        l = b('Ly1h3'),
        m = b('4l3BV'),
        n = b('xooCA'),
        o = b('iYEuk12'),
        p = b('h99Nu'),
        q = b('gSUVO');
    let r, s, t = a => a;
    const u = (0, d.observer)(a => {
            const {
                hooks: {
                    hookJSON: v
                }
            } = (0, e.default)(), w = () => {
                (0, f.default)({
                    action: g.default.createLink,
                    payload: {
                        option: a.connection.option,
                        hook: a.connection.hook
                    },
                    device: a.deviceId
                });
            }, x = a.connection.options, y = Object.keys(x.valueMap), z = JSON.parse(v).hooks.find(v => v.key === a.connection.hook);
            if (!z)
                return null;
            const A = z.options;
            if (!A.options.length)
                return (0, c.jsxs)('div', {
                    style: {
                        fontSize: 16
                    },
                    children: [
                        'Before you can connect the ',
                        h.default.name.toLowerCase(),
                        ' to this option, you need to add selectable options. Go modify your',
                        ' ',
                        h.default.name.toLowerCase(),
                        ' to include options and then come back here!'
                    ]
                });
            if (!y.length)
                return (0, c.jsx)(w, {
                    createLink: w
                });
            const B = A.options.filter(a => !y.includes(a));
            return (0, c.jsxs)(z, {
                children: [
                    y.map(v => (0, c.jsx)(v, {
                        option: a.option,
                        selectKey: v,
                        selectValue: a.connection.options.valueMap[v],
                        selectOptions: [
                            v,
                            ...B
                        ],
                        deviceId: a.deviceId,
                        hookId: a.connection.hook
                    }, v + '-hook-option')),
                    B.length ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(j.default, {}),
                            (0, c.jsx)(i.default, {
                                size: 'large',
                                type: 'primary',
                                block: !0,
                                style: {
                                    height: 60
                                },
                                onClick: w,
                                children: 'Add Another Link'
                            })
                        ]
                    }) : null
                ]
            });
        }),
        v = a => (0, c.jsxs)(A, {
            children: [
                (0, c.jsxs)(n.HookFormInputLabel, {
                    children: [
                        h.default.name,
                        ' Value'
                    ]
                }),
                (0, c.jsx)(l.default, {
                    style: {
                        width: '100%'
                    },
                    value: a.selectKey,
                    placeholder: 'Choose a value...',
                    onChange: b => {
                        (0, f.default)({
                            action: g.default.changeLinkOption,
                            device: a.deviceId,
                            payload: {
                                option: a.option.key,
                                hook: a.hookId,
                                currentOption: a.selectKey,
                                newOption: b
                            }
                        });
                    },
                    children: a.selectOptions.map(b => (0, c.jsx)(l.default.Option, {
                        value: b,
                        children: b
                    }, b + a.selectKey))
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, c.jsx)(n.HookFormInputLabel, {
                    children: 'Option Value'
                }),
                (0, c.jsx)(m.default, {
                    option: a.option.option,
                    value: a.selectValue,
                    onChange: b => {
                        (0, f.default)({
                            action: g.default.changeLinkValue,
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
                (0, c.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, c.jsx)('div', {
                    className: 'maxWidth flex',
                    style: {
                        justifyContent: 'flex-end'
                    },
                    children: (0, c.jsx)(o.default, {
                        onClick: () => {
                            k.default.confirm({
                                title: 'Are you sure you want to remove this link?',
                                onOk: () => {
                                    (0, f.default)({
                                        action: g.default.removeLink,
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
        w = a => (0, c.jsxs)('div', {
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
                (0, c.jsx)('div', {
                    style: {
                        fontWeight: q.FontWeights.Bold,
                        fontSize: 18,
                        marginBottom: 6
                    },
                    children: 'Create new link'
                }),
                (0, c.jsxs)('div', {
                    children: [
                        'Link the value of a ',
                        h.default.name.toLowerCase(),
                        ' to the value of this option'
                    ]
                })
            ]
        });
    var x = y;
    const z = p.default.div(r || (r = t``)),
        A = p.default.div.attrs({
            className: 'light-shadow'
        })(s || (s = t`
  background: #fafafa;
  padding: 30px;
  border-radius: 6px;
  margin-bottom: 20px;
`));
}), b.register('xooCA', function(o, n) {
    a(o.exports, 'HookFormInputLabel', function() {
        return h;
    }), a(o.exports, 'HookFormInputLabelDescription', function() {
        return i;
    });
    var c = b('h99Nu'),
        d = b('gSUVO');
    let e, f, g = a => a;
    const h = c.default.div(e || (e = g`
  font-size: 18px;
  font-weight: ${ 0 };
  margin-bottom: 4px;
`), d.FontWeights.Bold),
        i = c.default.div(f || (f = g`
  font-size: 14px;
  margin-bottom: 4px;
`));
}), b.register('vaQAz', function(o, n) {
    a(o.exports, 'default', function() {
        return g;
    });
    var c = b('h99Nu'),
        d = b('gSUVO'),
        e = b('S/jX4');
    let f;
    var g = c.default.div(f || (f = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), e.default.Black, d.Fonts.ProductSans);
});