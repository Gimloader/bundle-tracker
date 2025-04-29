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
c.register('DXQir', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        grid: {
            singular: 'block',
            plural: 'blocks'
        },
        blocklyBlock: {
            singular: 'piece',
            plural: 'pieces'
        }
    };
}), c.register('lIJIq', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('JkQCT'),
        g = c('O0Kav'),
        h = c('K/2xB');
    var _i = () => {
        const {
            me: j,
            world: {
                devices: k
            }
        } = (0, h.default)(), [l, m] = g.useState('{}'), [n, o] = g.useState('{}'), [p, q] = g.useState('{}');
        g.useEffect(() => {
            const r = (0, f.reaction)(() => k.devices.get(j.editing.device.currentlyEditedDevice.id), j => {
                j && (m(JSON.stringify(j.options)), o(JSON.stringify({
                    x: j.x,
                    y: j.y
                })), j.hooks ? q(JSON.stringify(j.hooks)) : q('{}'));
            }, {
                fireImmediately: !0
            });
            return () => {
                r();
            };
        }, []);
        return {
            options: JSON.parse(l),
            position: JSON.parse(n),
            hooks: JSON.parse(p)
        };
    };
}), c.register('k1jd6', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('9N6Bn'),
        i = c('AhL/f0'),
        j = c('+Ze0K'),
        k = c('R2nG3'),
        l = c('E2AMI26'),
        m = c('Ll6/N'),
        n = c('y1oBc'),
        o = c('6jmvl'),
        p = c('qIlyp'),
        q = c('R7Rm8'),
        r = c('dcTme');
    const s = 'All Options',
        t = (0, o.observer)(a => {
            var u, v, w, x;
            const {
                device: y,
                deviceOption: _z,
                position: A,
                options: B
            } = a, [C, D] = g.useState(_u(_z.optionSchema)), E = !(0, h.default)(), F = (a, u) => {
                E || ((0, p.EmitTutorialEvent)({
                    event: p.TutorialEventName.CHANGE_DEVICE_OPTION,
                    device: y,
                    option: a,
                    value: u
                }), (0, i.default)({
                    deviceOption: _z,
                    id: y.id,
                    x: A.x,
                    y: A.y,
                    depth: y.layers.getOptionsDepth(),
                    layerId: y.layers.getOptionsLayer(),
                    name: y.name,
                    isPreview: !1,
                    options: {
                        ...B,
                        [a]: u
                    },
                    placedByClient: !0,
                    state: _z.defaultState
                }));
            }, G = (0, f.jsx)(l.default, {
                size: 12,
                direction: 'vertical',
                className: 'maxWidth',
                children: (0, f.jsx)(j.default, {
                    device: y,
                    deviceOption: _z,
                    options: B,
                    hooks: a.hooks,
                    readOnly: E,
                    handleOptionChange: F,
                    category: C === s ? void 0 : C,
                    setCategory: D
                })
            }), H = ((null === (u = _z.optionSchema) || void 0 === u || null === (v = u.categories) || void 0 === v ? void 0 : v.categories) || []).filter(a => void 0 === a.supportedMapStyles || a.supportedMapStyles.includes((0, r.GetCurrentMapStyle)())).filter(a => {
                var I;
                return !(null === (I = a.hideIf) || void 0 === I ? void 0 : I.length) || !(0, q.ShouldHideFromHideIf)({
                    hideIf: a.hideIf,
                    options: B
                });
            });
            if (g.useEffect(() => {
                    C && C !== s && !H.some(a => a.id === C) && D(_u(_z.optionSchema));
                }, [
                    C,
                    H
                ]), !H || !H.length)
                return G;
            const I = [];
            H.forEach(a => {
                I.push({
                    id: a.id,
                    name: a.name
                });
            });
            return 'start' === (null === (w = _z.optionSchema) || void 0 === w || null === (x = w.categories) || void 0 === x ? void 0 : x.showAllOptionsAt) || !1 ? I.unshift({
                id: s,
                name: s
            }) : I.push({
                id: s,
                name: s
            }), (0, f.jsx)(k.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: 'yellow'
                        }
                    }
                },
                children: (0, f.jsx)(m.default, {
                    activeKey: C,
                    onChange: a => {
                        (0, n.playClickSound)(), D(a);
                    },
                    className: 'maxWidth',
                    style: {
                        marginTop: -18
                    },
                    size: 'large',
                    items: I.map(a => ({
                        label: a.name,
                        key: a.id,
                        children: G
                    }))
                })
            });
        }),
        _u = a => {
            if (a.categories) {
                if ('start' === a.categories.showAllOptionsAt)
                    return s;
                if (a.categories.categories.length)
                    return a.categories.categories[0].id;
            }
            return s;
        };
    var v = t;
}), c.register('+Ze0K', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('svHPW'),
        h = c('hGW2M'),
        i = c('fQ/Z/'),
        j = c('E2AMI26'),
        k = c('22RS1'),
        l = c('UTCm/'),
        m = c('MgONH'),
        n = c('t52Ep'),
        o = c('gp8Qp0'),
        p = c('6jmvl'),
        q = c('K/2xB'),
        r = c('WwvjE');
    var _s = (0, p.observer)(a => {
        const {
            device: t,
            deviceOption: u,
            options: v,
            category: w,
            setCategory: x
        } = a, {
            me: {
                roleLevel: y
            }
        } = (0, q.default)(), z = y >= r.RoleLevelConsts.admin, A = (() => {
            let B = (0, g.CreateOptionsFromOptionSchema)({
                device: t,
                options: v,
                optionSchema: u.optionSchema
            }).filter(B => !w || !(!B.categories || !B.categories.includes(w))).filter(B => (0, h.CanModifyDeviceOption)(u.id, B.key));
            return (0, i.CanAddDeviceType)(u.id, v) || (B = [], w && x(void 0)), B;
        })();
        return A.length ? (0, f.jsx)(j.default, {
            size: 14,
            direction: 'vertical',
            className: 'maxWidth',
            children: A.map(u => (0, f.jsx)(l.default, {
                option: u,
                value: v[u.key],
                onChange: t => a.handleOptionChange(String(u.key), t),
                readOnly: a.readOnly,
                deviceId: t.id,
                deviceType: t.deviceOption.id,
                hooks: a.hooks,
                showHooks: z
            }, `${ t.id } ${ String(u.key) }`))
        }) : (0, f.jsxs)(m.CenteredColumn, {
            className: 'maxWidth',
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 36,
                        color: 'rgba(255,255,255,0.85)'
                    },
                    children: (0, f.jsx)(n.default, {
                        name: 'fas fa-cogs'
                    })
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: 3
                    },
                    children: (0, f.jsxs)(k.default.Text, {
                        children: [
                            'No options to configure for this',
                            ' ',
                            w ? 'category' : o.default.device.singular,
                            '!'
                        ]
                    })
                })
            ]
        });
    });
}), c.register('svHPW', function(d, e) {
    a(d.exports, 'CreateOptionsFromOptionSchema', function() {
        return _g;
    });
    var f = c('R7Rm8');
    const _g = a => (0, f.FilterOutHiddenOptions)({
        device: a.device,
        options: a.options,
        optionSchema: a.optionSchema
    });
}), c.register('R7Rm8', function(d, e) {
    a(d.exports, 'ShouldHideFromHideIf', function() {
        return _j;
    }), a(d.exports, 'FilterOutHiddenOptions', function() {
        return _k;
    });
    var f = c('OFuf70'),
        g = c('ZMrtj');
    const h = [
            'shadowsEnabled',
            'shadowsPlacement'
        ],
        i = [
            'canBeDamaged',
            'health',
            'useAdaptiveHealth',
            'adaptiveHealthPerPlayer',
            'onDestroyedChannel',
            'UseColliders'
        ],
        _j = a => {
            var k;
            let l = !1;
            return (null === (k = a.hideIf) || void 0 === k ? void 0 : k.length) && a.hideIf.forEach(k => {
                k.every(k => {
                    var m;
                    const n = null !== (m = a.options[k.key]) && void 0 !== m ? m : void 0;
                    if ('EQUAL' === k.compare) {
                        if (k.value === n)
                            return !0;
                    } else if ('NOT_EQUAL' === k.compare) {
                        if (k.value !== n)
                            return !0;
                    } else if ('LESS_THAN' === k.compare) {
                        if (Number(n) < Number(k.value))
                            return !0;
                    } else if ('GREATER_THAN' === k.compare && Number(n) > Number(k.value))
                        return !0;
                    return !1;
                }) && (l = !0);
            }), l;
        },
        _k = a => {
            let l = a.optionSchema.options.filter(a => !a.option.hidden).filter(l => {
                var m;
                let n = !1;
                return (null === (m = l.option.hideIf) || void 0 === m ? void 0 : m.length) && (n = _j({
                    hideIf: l.option.hideIf,
                    options: a.options
                })), !n;
            });
            if (a.device.deviceOption.id === f.default.prop) {
                var m, n, o, p;
                const q = a.device.options,
                    r = (0, g.default)(q.propId);
                if (!r)
                    return l;
                var s, t, u;
                const v = (null !== (s = null === (m = r.rectColliders) || void 0 === m ? void 0 : m.length) && void 0 !== s ? s : 0) + (null !== (t = null === (n = r.circleColliders) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (u = null === (o = r.ellipseColliders) || void 0 === o ? void 0 : o.length) && void 0 !== u ? u : 0) > 0;
                var w;
                const x = (null !== (w = null === (p = r.shadows) || void 0 === p ? void 0 : p.length) && void 0 !== w ? w : 0) > 0;
                l = l.filter(a => !(!x && h.includes(a.key)) && !(!v && i.includes(a.key)));
            }
            return l;
        };
}), c.register('hGW2M', function(d, e) {
    a(d.exports, 'CanModifyDeviceOption', function() {
        return _j;
    });
    var f = c('WwvjE'),
        g = c('cQFux'),
        h = c('5P0VZ'),
        i = c('PlfjJ');
    const _j = (a, d) => {
        const k = (0, h.FetchDeviceOptionById)(a);
        if (!k)
            return !1;
        const l = k.optionSchema.options.find(a => a.key === d);
        if (!(0, g.CanModifyDeviceOptionForCurrentMapStyle)({
                deviceTypeId: a,
                optionName: d
            }))
            return !1;
        var m;
        const n = null !== (m = null == l ? void 0 : l.minimumRoleLevel) && void 0 !== m ? m : f.RoleLevelConsts.min;
        var o;
        const p = null !== (o = null == l ? void 0 : l.maximumRoleLevel) && void 0 !== o ? o : f.RoleLevelConsts.max;
        return (0, i.IsRoleLevelBetween)(n, p);
    };
}), c.register('cQFux', function(d, e) {
    a(d.exports, 'CanModifyDeviceOptionForCurrentMapStyle', function() {
        return _h;
    });
    var f = c('5P0VZ'),
        g = c('dcTme');
    const _h = a => {
        const {
            deviceTypeId: i,
            optionName: j
        } = a, k = (0, f.FetchDeviceOptionById)(i);
        if (!k)
            return !1;
        const l = k.optionSchema.options.find(a => a.key === j);
        return !!l && (!l.supportedMapStyles || l.supportedMapStyles.includes((0, g.GetCurrentMapStyle)()));
    };
}), c.register('UTCm/', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('22RS1'),
        i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('ydj3C'),
        l = c('kS7vy'),
        m = c('quE27');
    let n, o, p = a => a;
    var _q = a => {
        const {
            option: r,
            value: s,
            onChange: t,
            readOnly: u
        } = a, {
            label: v,
            description: w
        } = r.option, [x, y, z] = (0, m.useBoolean)(!1);
        return (0, f.jsxs)(_r, {
            children: [
                (0, f.jsxs)('div', {
                    className: 'flex vc maxWidth between',
                    children: [
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(h.default.Title, {
                                level: 5,
                                style: {
                                    fontWeight: j.FontWeights.Bold
                                },
                                children: v
                            })
                        }),
                        a.showHooks ? (0, f.jsx)(g.default, {
                            size: 'small',
                            shape: 'circle',
                            type: 'link',
                            icon: (0, f.jsx)('i', {
                                className: 'far fa-cog'
                            }),
                            onClick: y
                        }) : null
                    ]
                }),
                w ? (0, f.jsx)('div', {
                    children: (0, f.jsx)(h.default.Text, {
                        italic: !0,
                        children: w
                    })
                }) : null,
                (0, f.jsx)(_s, {
                    style: {
                        marginTop: 5
                    },
                    children: (0, f.jsx)(k.default, {
                        value: s,
                        option: r.option,
                        onChange: t,
                        readOnly: u
                    })
                }),
                (0, f.jsx)(l.default, {
                    visible: x,
                    close: z,
                    ...a
                })
            ]
        });
    };
    const _r = i.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = p`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`)),
        _s = i.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p``));
}), c.register('ydj3C', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('MXVDk'),
        h = c('ujmb1'),
        i = c('ABrH4'),
        j = c('DWIfO'),
        k = c('y3vGz'),
        l = c('+cAQc'),
        m = c('nrgOz'),
        n = c('qTpxg'),
        o = c('lDtXz');
    var _p = a => {
        const {
            option: q,
            value: r,
            onChange: s
        } = a;
        return q.type === k.default.numberInput ? (0, f.jsx)(g.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.itemsList ? (0, f.jsx)(o.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.textInput ? (0, f.jsx)(i.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.select ? (0, f.jsx)(h.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.itemId ? (0, f.jsx)(l.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.skinId ? (0, f.jsx)(n.default, {
            value: r,
            onChange: s,
            readOnly: a.readOnly,
            optionProps: q.props
        }) : q.type === k.default.terrainId ? (0, f.jsx)(m.default, {
            optionProps: q.props,
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : q.type === k.default.color ? (0, f.jsx)(j.default, {
            value: r,
            onChange: s,
            readOnly: a.readOnly
        }) : null;
    };
}), c.register('MXVDk', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('lhOnW'),
        h = c('+xIkQ'),
        i = c('O0Kav');
    var _j = a => {
        const {
            value: k,
            optionProps: l
        } = a, [m, n] = i.useState(k);
        i.useEffect(() => {
            n(k);
        }, [k]);
        const o = k => {
            if (null === k && a.optionProps.allowEmpty)
                return void n(void 0);
            let p = k;
            var q, r;
            l.step && k && (q = k, r = l.step, p = Math.round(q / r) * r), n(p);
        };
        return l.useSlider ? (0, f.jsx)(h.default, {
            value: m,
            onChange: o,
            onAfterChange: k => {
                n(k), a.onChange(k);
            },
            min: l.min,
            max: l.max,
            step: l.step,
            disabled: a.readOnly
        }) : (0, f.jsx)(g.default, {
            value: m,
            onChange: o,
            onBlur: () => {
                a.onChange(m);
            },
            min: l.min,
            max: l.max,
            step: l.step,
            style: {
                width: '100%'
            },
            disabled: a.readOnly,
            placeholder: 'Enter a value...'
        });
    };
}), c.register('ujmb1', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('u8Dt8'),
        h = c('E2AMI26'),
        i = c('O0Kav'),
        j = c('PlfjJ'),
        k = c('bMaPZ2'),
        l = c('dcTme');
    var _m = a => {
        var n;
        const {
            optionProps: o
        } = a, p = i.useMemo(() => {
            if ('' !== a.value)
                return a.value;
        }, [a.value]), q = i.useMemo(() => o.options.some(a => 'Fugaz One' === a.value), [null == o ? void 0 : o.options]);
        i.useEffect(() => {
            q && o.options.forEach(a => {
                (0, k.default)({
                    familyName: a.name
                });
            });
        }, [q]);
        const r = null == o || null === (n = o.options) || void 0 === n ? void 0 : n.filter(a => !((null == a ? void 0 : a.supportedMapStyles) && !(null == a ? void 0 : a.supportedMapStyles.includes((0, l.GetCurrentMapStyle)()))) && (void 0 === (null == a ? void 0 : a.minimumRoleLevel) && void 0 === (null == a ? void 0 : a.maximumRoleLevel) || (0, j.IsRoleLevelBetween)(null == a ? void 0 : a.minimumRoleLevel, null == a ? void 0 : a.maximumRoleLevel)));
        if (!o || !r.length)
            return null;
        const s = n => {
            a.onChange(n);
        };
        return (0, f.jsx)(g.default, {
            value: null != p ? p : void 0,
            allowClear: o.allowEmpty,
            placeholder: o.placeholder || 'None Selected',
            onSelect: s,
            onClear: () => s(void 0),
            filterOption: (a, n) => !!(n && n.name && n.name.toString().toUpperCase && a && a.toUpperCase) && -1 !== n.name.toString().toUpperCase().indexOf(a.toUpperCase()),
            showSearch: !0,
            disabled: a.readOnly,
            style: {
                width: '100%'
            },
            children: r.map(a => (0, f.jsx)(g.default.Option, {
                value: a.value,
                name: a.name,
                style: q ? {
                    fontFamily: a.value
                } : void 0,
                children: a.image ? (0, f.jsxs)(h.default, {
                    direction: 'horizontal',
                    size: 6,
                    children: [
                        (0, f.jsx)('img', {
                            src: a.image,
                            style: {
                                maxHeight: 30,
                                maxWidth: 30
                            }
                        }),
                        (0, f.jsx)('div', {
                            children: a.name
                        })
                    ]
                }) : a.name
            }, `option-${ a.value }`))
        });
    };
}), c.register('ABrH4', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('/kLkG0'),
        h = c('aevdF'),
        i = c('O0Kav'),
        j = c('+pvlo'),
        k = c('EF+AW'),
        l = c('YqIsD'),
        m = c('gp8Qp0'),
        n = c('1Aepc'),
        o = c('aPZ+w'),
        p = c('GAMly'),
        q = c('/SQrB'),
        r = c('sZQJz');
    var _s = a => {
        const {
            value: t,
            optionProps: u
        } = a, [v, w] = i.useState(a.value);
        i.useEffect(() => {
            w(t);
        }, [t]);
        const x = i.useMemo(() => {
                if (null == u ? void 0 : u.category) {
                    const y = (0, j.default)(u.category).map(y => ({
                        option: y
                    }));
                    if (u.category === l.default.property) {
                        const z = (0, k.GetPropertiesWithoutMatchingPropertyDevice)(),
                            A = y.filter(y => !z.includes(y.option));
                        return [
                            ...z.map(y => ({
                                option: y,
                                noMatchingDevice: !0
                            })),
                            ...A
                        ];
                    }
                    return y;
                }
                return [];
            }, []),
            y = () => {
                a.onChange(null == v ? void 0 : v.trim());
            };
        if (u.codeEditor)
            return (0, f.jsx)('div', {
                onBlur: y,
                children: (0, f.jsxs)(n.LiveProvider, {
                    noInline: !0,
                    code: v,
                    scope: {
                        MapButton: o.default,
                        CallAction: p.CallAction,
                        usePropertyValue: q.usePropertyValue,
                        useItemAmount: r.useItemAmount
                    },
                    children: [
                        (0, f.jsx)(n.LiveEditor, {
                            onChange: a => {
                                w(a);
                            }
                        }),
                        (0, f.jsx)(n.LiveError, {})
                    ]
                })
            });
        if (u.textArea)
            return (0, f.jsx)(h.default.TextArea, {
                value: v,
                onChange: a => w(a.target.value),
                onBlur: y,
                placeholder: u.placeholder,
                style: {
                    width: '100%'
                }
            });
        const z = (() => {
            if ((null == u ? void 0 : u.category) === l.default.property && x.length) {
                let A = [];
                if (x.some(A => A.noMatchingDevice)) {
                    const B = x.filter(A => A.noMatchingDevice),
                        C = x.filter(A => !A.noMatchingDevice);
                    if (A.push({
                            label: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    'Properties without a corresponding Property',
                                    ' ',
                                    m.default.device.singular
                                ]
                            }),
                            options: B.map(A => ({
                                value: A.option
                            }))
                        }), C.length)
                        return A.push({
                            label: (0, f.jsx)(f.Fragment, {
                                children: 'All other properties'
                            }),
                            options: C.map(A => ({
                                value: A.option
                            }))
                        }), A;
                }
            }
            return x.map(a => ({
                value: a.option
            }));
        })();
        return (0, f.jsx)(g.default, {
            value: v,
            options: z,
            onChange: a => {
                w(a);
            },
            onBlur: y,
            style: {
                width: '100%'
            },
            placeholder: u.placeholder || 'Enter a value...',
            filterOption: (a, t) => {
                var A;
                return -1 !== (null === (A = t.value) || void 0 === A ? void 0 : A.toUpperCase().indexOf(a.toUpperCase()));
            },
            maxLength: u.maxLength,
            disabled: a.readOnly
        });
    };
}), c.register('+pvlo', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('RTmHj'),
        g = c('egiI4'),
        h = c('KjmWt'),
        i = c('YqIsD'),
        j = c('fI6of'),
        k = c('y3vGz');
    var _l = (a, c) => {
        if (!a)
            return [];
        const m = [];
        j.default.worldOptions.deviceOptions.forEach(b => {
            b.optionSchema.options.forEach(c => {
                if (c.option.type === k.default.textInput) {
                    var n;
                    const o = c.option;
                    (null == o || null === (n = o.props) || void 0 === n ? void 0 : n.category) === a && m.push({
                        deviceId: b.id,
                        optionKey: String(c.key)
                    });
                }
            });
        });
        const n = [],
            o = b => {
                if ((b = b.trim()).length)
                    if (a === i.default.channel && b.includes(',')) {
                        b.split(',').forEach(o);
                    } else
                        n.includes(b) || n.push(b);
            };
        return j.default.world.devices.devices.forEach(a => {
            m.map(a => a.deviceId).includes(a.deviceOption.id) && Object.keys(a.options || {}).forEach(b => {
                m.map(a => a.optionKey).includes(b) && a.options[b] && o(a.options[b]);
            });
        }), a === i.default.channel && (c && c.blockSlowOperations || j.default.world.devices.devices.forEach(a => {
            var p, q;
            null === (p = j.default.world.devices.codeGrids.get(a.id)) || void 0 === p || null === (q = p.items) || void 0 === q || q.forEach(a => {
                if (a.triggerType === h.default.broadcastMessage && a.triggerValue && o(a.triggerValue), a.json) {
                    const r = new(b(f)).Workspace();
                    b(f).serialization.workspaces.load(JSON.parse(a.json), r);
                    r.getAllBlocks(!0).forEach(a => {
                        if ((a.type === g.default.messageBroadcaster || a.type === g.default.playerProximityMessageBroadcaster) && a.getChildren(!0).length) {
                            const s = a.getChildren(!0)[0];
                            if ('text' === s.type) {
                                const t = s.getFieldValue('TEXT');
                                t && o(t);
                            }
                        }
                    }), r.dispose();
                }
            });
        })), a === i.default.property && (c && c.blockSlowOperations || j.default.world.devices.devices.forEach(a => {
            var p, q;
            null === (p = j.default.world.devices.codeGrids.get(a.id)) || void 0 === p || null === (q = p.items) || void 0 === q || q.forEach(a => {
                if (a.json) {
                    const r = new(b(f)).Workspace();
                    b(f).serialization.workspaces.load(JSON.parse(a.json), r);
                    r.getAllBlocks(!0).forEach(a => {
                        if ((a.type === g.default.setProperty || a.type === g.default.getProperty || a.type === g.default.playerProximityGetProperty || a.type === g.default.playerProximitySetProperty) && a.getChildren(!0).length) {
                            const s = a.getChildren(!0)[0];
                            if ('text' === s.type) {
                                const t = s.getFieldValue('TEXT');
                                t && o(t);
                            }
                        }
                    }), r.dispose();
                }
            });
        })), n;
    };
}), c.register('egiI4', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        messageBroadcaster: 'message_broadcaster',
        setProperty: 'set_property',
        getProperty: 'get_property',
        playerProximityMessageBroadcaster: 'other_character_message_broadcaster',
        playerProximitySetProperty: 'other_character_set_property',
        playerProximityGetProperty: 'other_character_get_property'
    };
}), c.register('KjmWt', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        broadcastMessage: 'channel_radio'
    };
}), c.register('YqIsD', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        channel: 'channel',
        property: 'property'
    };
}), c.register('y3vGz', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).textInput = 'textInput', g.numberInput = 'numberInput', g.select = 'select', g.color = 'color', g.itemId = 'itemId', g.terrainId = 'terrainId', g.skinId = 'skinId', g.itemsList = 'itemsList';
    var _h = f;
}), c.register('EF+AW', function(d, e) {
    a(d.exports, 'GetPropertiesWithoutMatchingPropertyDevice', function() {
        return _j;
    });
    var f = c('fI6of'),
        g = c('OFuf70'),
        h = c('+pvlo'),
        i = c('YqIsD');
    const _j = () => {
        const k = [];
        f.default.world.devices.devices.forEach(d => {
            if (d.deviceOption.id === g.default.property) {
                const l = d.options;
                k.push(l.propertyName);
            }
        });
        return (0, h.default)(i.default.property).filter(d => !k.includes(d));
    };
}), c.register('DWIfO', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('pXUtu'),
        h = c('u4s09');
    let i, j, k = a => a;
    var _l = a => {
        const m = (0, g.useDebounceCallback)(m => {
            a.onChange(m);
        }, 350);
        return (0, f.jsx)(_m, {
            readOnly: a.readOnly,
            children: (0, f.jsx)(_n, {
                readOnly: a.readOnly,
                children: (0, f.jsx)('input', {
                    type: 'color',
                    className: 'maxWidth',
                    disabled: a.readOnly,
                    value: a.value,
                    onChange: a => m(a.target.value)
                })
            })
        });
    };
    const _m = h.default.div(i || (i = k`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'cursor: not-allowed;'),
        _n = h.default.div(j || (j = k`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'pointer-events: none; opacity: 0.6');
}), c.register('+cAQc', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('ujmb1'),
        h = c('fI6of'),
        i = c('OsQuU'),
        j = c('PlfjJ');
    const k = a => a.filter(a => {
            const l = (0, i.FetchItemOption)(a);
            return !!l && !!(0, j.IsRoleLevelBetween)(l.minimumRoleLevel, l.maximumRoleLevel);
        }),
        l = a => {
            const m = [];
            return h.default.worldOptions.itemOptions.forEach(c => {
                var n;
                (null === (n = a.blockedItems) || void 0 === n ? void 0 : n.includes(c.id)) || (a.allowedItems ? a.allowedItems.includes(c.id) && m.push(c.id) : a.allowedItemsCategories ? a.allowedItemsCategories.includes(c.type) && m.push(c.id) : m.push(c.id));
            }), m;
        };
    var _m = a => {
        const n = l(a.optionProps),
            o = k(n).map(a => ({
                value: a,
                name: (0, i.FetchItemOption)(a).editorName
            })),
            p = {
                placeholder: 'Select an item',
                allowEmpty: !0,
                options: o
            };
        let q = a.value;
        return q && !o.find(n => n.value === a.value) && (q = void 0), (0, f.jsx)(g.default, {
            ...a,
            value: q,
            optionProps: p
        });
    };
}), c.register('nrgOz', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('ujmb1'),
        h = c('fI6of'),
        i = c('TCaC20');
    var _j = a => {
        const k = h.default.worldOptions.terrainOptions.filter(a => (0, i.CanAddTerrain)(a.id)).map(a => ({
                value: a.id,
                name: a.name
            })),
            l = {
                placeholder: 'Select a terrain',
                allowEmpty: a.optionProps.allowEmpty,
                options: k
            };
        let m = a.value;
        return m && !k.find(k => k.value === a.value) && (m = void 0), (0, f.jsx)(g.default, {
            ...a,
            value: m,
            optionProps: l
        });
    };
}), c.register('qTpxg', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('ujmb1'),
        h = c('fI6of'),
        i = c('PlfjJ'),
        j = c('UaUBz0');
    var _k = a => {
        var l;
        const m = h.default.worldOptions.skinOptions.filter(a => (0, i.IsRoleLevelBetween)(a.minimumRoleLevel, a.maximumRoleLevel)).map(a => ({
            value: a.id,
            name: a.name,
            image: (0, j.default)('characters/spine/preview/' + a.id.replace('character_', '') + '.png')
        }));
        var n;
        const o = {
            placeholder: 'Select a Gim',
            allowEmpty: null !== (n = null == a || null === (l = a.optionProps) || void 0 === l ? void 0 : l.allowEmpty) && void 0 !== n && n,
            options: m
        };
        let p = a.value;
        return p && !m.find(l => l.value === a.value) && (p = void 0), (0, f.jsx)(g.default, {
            ...a,
            value: p,
            optionProps: o
        });
    };
}), c.register('lDtXz', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('aPZ+w'),
        h = c('u4s09'),
        i = c('+cAQc'),
        j = c('MXVDk'),
        k = c('t52Ep');
    let l, m, n, o, p, q, r, s, t, u, v = a => a;
    var _w = a => {
        var x, y;
        return (0, f.jsx)(_x, {
            readOnly: a.readOnly,
            children: (0, f.jsxs)(_y, {
                readOnly: a.readOnly,
                children: [
                    null === (x = a.value) || void 0 === x ? void 0 : x.map((x, y) => {
                        var z, A;
                        return (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)(_z, {
                                    children: [
                                        (0, f.jsxs)(_A, {
                                            children: [
                                                'Item ',
                                                y + 1
                                            ]
                                        }),
                                        (0, f.jsx)(g.default, {
                                            onClick: () => {
                                                var B;
                                                const C = null !== (B = a.value) && void 0 !== B ? B : [];
                                                C.splice(y, 1), a.onChange(C);
                                            },
                                            type: 'danger',
                                            ariaLabel: 'Remove Item',
                                            size: 'small',
                                            children: (0, f.jsx)(k.default, {
                                                name: 'fas fa-trash'
                                            })
                                        })
                                    ]
                                }),
                                (0, f.jsxs)(_B, {
                                    children: [
                                        (0, f.jsxs)(_C, {
                                            children: [
                                                (0, f.jsx)(_D, {
                                                    children: 'Item'
                                                }),
                                                (0, f.jsx)(_E, {
                                                    children: (0, f.jsx)(i.default, {
                                                        value: x.itemId,
                                                        onChange: x => {
                                                            var B;
                                                            const C = null !== (B = a.value) && void 0 !== B ? B : [];
                                                            C[y].itemId = x, a.onChange(C);
                                                        },
                                                        readOnly: a.readOnly,
                                                        optionProps: a.optionProps
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (z = a.optionProps.amount) || void 0 === z ? void 0 : z.use) && (0, f.jsxs)(_C, {
                                            children: [
                                                (0, f.jsxs)(_D, {
                                                    children: [
                                                        a.optionProps.amount.label || 'Amount',
                                                        ':'
                                                    ]
                                                }),
                                                (0, f.jsx)(_F, {
                                                    children: (0, f.jsx)(j.default, {
                                                        value: x.amount,
                                                        onChange: x => {
                                                            var B;
                                                            const C = null !== (B = a.value) && void 0 !== B ? B : [];
                                                            C[y].amount = x, a.onChange(C);
                                                        },
                                                        readOnly: a.readOnly,
                                                        optionProps: {
                                                            min: a.optionProps.amount.min,
                                                            max: a.optionProps.amount.max,
                                                            step: a.optionProps.amount.step
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (A = a.optionProps.numParam) || void 0 === A ? void 0 : A.use) && (0, f.jsxs)(_C, {
                                            children: [
                                                (0, f.jsxs)(_D, {
                                                    children: [
                                                        a.optionProps.numParam.label || 'Num Param',
                                                        ':'
                                                    ]
                                                }),
                                                (0, f.jsx)(_F, {
                                                    children: (0, f.jsx)(j.default, {
                                                        value: x.numParam,
                                                        onChange: x => {
                                                            var B;
                                                            const C = null !== (B = a.value) && void 0 !== B ? B : [];
                                                            C[y].numParam = x, a.onChange(C);
                                                        },
                                                        readOnly: a.readOnly,
                                                        optionProps: {
                                                            min: a.optionProps.numParam.min,
                                                            max: a.optionProps.numParam.max,
                                                            step: a.optionProps.numParam.step
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, y);
                    }),
                    (0, f.jsx)(_G, {
                        children: (0, f.jsx)(g.default, {
                            disabled: a.readOnly || a.optionProps.maxItems <= (null === (y = a.value) || void 0 === y ? void 0 : y.length),
                            onClick: () => {
                                var z, A, B;
                                const C = null !== (B = a.value) && void 0 !== B ? B : [];
                                var D, E;
                                C.push({
                                    itemId: void 0,
                                    amount: null !== (D = null === (z = a.optionProps.amount) || void 0 === z ? void 0 : z.defaultValue) && void 0 !== D ? D : 0,
                                    numParam: null !== (E = null === (A = a.optionProps.numParam) || void 0 === A ? void 0 : A.defaultValue) && void 0 !== E ? E : 0
                                }), a.onChange(C);
                            },
                            type: 'default',
                            ariaLabel: 'Add Item',
                            size: 'small',
                            children: 'Add Item'
                        })
                    })
                ]
            })
        });
    };
    const _x = h.default.div(l || (l = v`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'cursor: not-allowed;'),
        _y = h.default.div(m || (m = v`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'pointer-events: none; opacity: 0.6'),
        _z = h.default.div(n || (n = v`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`)),
        _A = h.default.div(o || (o = v`
  font-weight: bold;
  font-size: 1.1em;
`)),
        _B = h.default.div(p || (p = v`
  margin-left: 16px;
  margin-bottom: 24px;
`)),
        _C = h.default.div(q || (q = v`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`)),
        _D = h.default.div(r || (r = v`
  width: 120px;
  font-weight: 500;
`)),
        _E = h.default.div(s || (s = v`
  flex: 1;
  overflow: hidden;
`)),
        _F = h.default.div(t || (t = v`
  flex: 1;
  overflow: hidden;
`)),
        _G = h.default.div(u || (u = v`
  margin-top: 8px;
`));
}), c.register('kS7vy', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = b(g).lazy(() => c('3bX4Q'));
    var _i = a => {
        const [j, k] = b(g).useState(!1);
        return b(g).useEffect(() => {
            a.visible && k(!0);
        }, [a.visible]), j ? (0, f.jsx)(b(g).Suspense, {
            fallback: null,
            children: (0, f.jsx)(h, {
                ...a
            })
        }) : null;
    };
}), c.register('3bX4Q', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('h0LK7')).then(() => c('QUa6m'));
}), c.register('Dq3qN', function(d, e) {
    var f, g;
    a(d.exports, 'register', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'resolve', function() {
        return g;
    }, function(h) {
        return g = h;
    });
    var h = {};
    f = function(i) {
        for (var j = Object.keys(i), k = 0; k < j.length; k++)
            h[j[k]] = i[j[k]];
    }, g = function(i) {
        var j = h[i];
        if (null == j)
            throw new Error('Could not resolve bundle with id ' + i);
        return j;
    };
});