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
c.register('.....', function(d, e) {
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = () => {
        const {
            me: j,
            world: {
                devices: k
            }
        } = (0, h.default)(), [l, m] = g.useState('{}'), [n, o] = g.useState('{}'), [p, q] = g.useState('{}');
        g.useEffect(() => {
            const r = (0, f.reaction)(() => k.devices.get(j.editing.device.currentlyEditedDevice.id), s => {
                s && (m(JSON.stringify(s.options)), o(JSON.stringify({
                    x: s.x,
                    y: s.y
                })), s.hooks ? q(JSON.stringify(s.hooks)) : q('{}'));
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    const s = 'All Options',
        t = (0, o.observer)(u => {
            var v, w, x, y;
            const {
                device: z,
                deviceOption: A,
                position: B,
                options: C
            } = u, [D, E] = g.useState(_u(A.optionSchema)), F = !(0, h.default)(), G = (H, I) => {
                F || ((0, p.EmitTutorialEvent)({
                    event: p.TutorialEventName.CHANGE_DEVICE_OPTION,
                    device: z,
                    option: H,
                    value: I
                }), (0, i.default)({
                    deviceOption: A,
                    id: z.id,
                    x: B.x,
                    y: B.y,
                    depth: z.layers.getOptionsDepth(),
                    layerId: z.layers.getOptionsLayer(),
                    name: z.name,
                    isPreview: !1,
                    options: {
                        ...C,
                        [H]: I
                    },
                    placedByClient: !0,
                    state: A.defaultState
                }));
            }, H = (0, f.jsx)(l.default, {
                size: 12,
                direction: 'vertical',
                className: 'maxWidth',
                children: (0, f.jsx)(j.default, {
                    device: z,
                    deviceOption: A,
                    options: C,
                    hooks: u.hooks,
                    readOnly: F,
                    handleOptionChange: G,
                    category: D === s ? void 0 : D,
                    setCategory: E
                })
            }), I = ((null === (v = A.optionSchema) || void 0 === v || null === (w = v.categories) || void 0 === w ? void 0 : w.categories) || []).filter(J => void 0 === J.supportedMapStyles || J.supportedMapStyles.includes((0, r.GetCurrentMapStyle)())).filter(J => {
                var K;
                return !(null === (K = J.hideIf) || void 0 === K ? void 0 : K.length) || !(0, q.ShouldHideFromHideIf)({
                    hideIf: J.hideIf,
                    options: C
                });
            });
            if (g.useEffect(() => {
                    D && D !== s && !I.some(J => J.id === D) && E(_u(A.optionSchema));
                }, [
                    D,
                    I
                ]), !I || !I.length)
                return H;
            const J = [];
            I.forEach(K => {
                J.push({
                    id: K.id,
                    name: K.name
                });
            });
            return 'start' === (null === (x = A.optionSchema) || void 0 === x || null === (y = x.categories) || void 0 === y ? void 0 : y.showAllOptionsAt) || !1 ? J.unshift({
                id: s,
                name: s
            }) : J.push({
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
                    activeKey: D,
                    onChange: K => {
                        (0, n.playClickSound)(), E(K);
                    },
                    className: 'maxWidth',
                    style: {
                        marginTop: -18
                    },
                    size: 'large',
                    items: J.map(K => ({
                        label: K.name,
                        key: K.id,
                        children: H
                    }))
                })
            });
        }),
        _u = v => {
            if (v.categories) {
                if ('start' === v.categories.showAllOptionsAt)
                    return s;
                if (v.categories.categories.length)
                    return v.categories.categories[0].id;
            }
            return s;
        };
    var _v = t;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    var _s = (0, p.observer)(t => {
        const {
            device: u,
            deviceOption: v,
            options: w,
            category: x,
            setCategory: y
        } = t, {
            me: {
                roleLevel: z
            }
        } = (0, q.default)(), A = z >= r.RoleLevelConsts.admin, B = (() => {
            let C = (0, g.CreateOptionsFromOptionSchema)({
                device: u,
                options: w,
                optionSchema: v.optionSchema
            }).filter(D => !x || !(!D.categories || !D.categories.includes(x))).filter(D => (0, h.CanModifyDeviceOption)(v.id, D.key));
            return (0, i.CanAddDeviceType)(v.id, w) || (C = [], x && y(void 0)), C;
        })();
        return B.length ? (0, f.jsx)(j.default, {
            size: 14,
            direction: 'vertical',
            className: 'maxWidth',
            children: B.map(C => (0, f.jsx)(l.default, {
                option: C,
                value: w[C.key],
                onChange: D => t.handleOptionChange(String(C.key), D),
                readOnly: t.readOnly,
                deviceId: u.id,
                deviceType: u.deviceOption.id,
                hooks: t.hooks,
                showHooks: A
            }, `${ u.id } ${ String(C.key) }`))
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
                            x ? 'category' : o.default.device.singular,
                            '!'
                        ]
                    })
                })
            ]
        });
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'CreateOptionsFromOptionSchema', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => (0, f.FilterOutHiddenOptions)({
        device: h.device,
        options: h.options,
        optionSchema: h.optionSchema
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'ShouldHideFromHideIf', function() {
        return _j;
    }), a(d.exports, 'FilterOutHiddenOptions', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....');
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
        _j = k => {
            var l;
            let m = !1;
            return (null === (l = k.hideIf) || void 0 === l ? void 0 : l.length) && k.hideIf.forEach(n => {
                n.every(o => {
                    var p;
                    const q = null !== (p = k.options[o.key]) && void 0 !== p ? p : void 0;
                    if ('EQUAL' === o.compare) {
                        if (o.value === q)
                            return !0;
                    } else if ('NOT_EQUAL' === o.compare) {
                        if (o.value !== q)
                            return !0;
                    } else if ('LESS_THAN' === o.compare) {
                        if (Number(q) < Number(o.value))
                            return !0;
                    } else if ('GREATER_THAN' === o.compare && Number(q) > Number(o.value))
                        return !0;
                    return !1;
                }) && (m = !0);
            }), m;
        },
        _k = l => {
            let m = l.optionSchema.options.filter(n => !n.option.hidden).filter(n => {
                var o;
                let p = !1;
                return (null === (o = n.option.hideIf) || void 0 === o ? void 0 : o.length) && (p = _j({
                    hideIf: n.option.hideIf,
                    options: l.options
                })), !p;
            });
            if (l.device.deviceOption.id === f.default.prop) {
                var n, o, p, q;
                const r = l.device.options,
                    s = (0, g.default)(r.propId);
                if (!s)
                    return m;
                var t, u, v;
                const w = (null !== (t = null === (n = s.rectColliders) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (u = null === (o = s.circleColliders) || void 0 === o ? void 0 : o.length) && void 0 !== u ? u : 0) + (null !== (v = null === (p = s.ellipseColliders) || void 0 === p ? void 0 : p.length) && void 0 !== v ? v : 0) > 0;
                var x;
                const y = (null !== (x = null === (q = s.shadows) || void 0 === q ? void 0 : q.length) && void 0 !== x ? x : 0) > 0;
                m = m.filter(z => !(!y && h.includes(z.key)) && !(!w && i.includes(z.key)));
            }
            return m;
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CanModifyDeviceOption', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = (k, l) => {
        const m = (0, h.FetchDeviceOptionById)(k);
        if (!m)
            return !1;
        const n = m.optionSchema.options.find(o => o.key === l);
        if (!(0, g.CanModifyDeviceOptionForCurrentMapStyle)({
                deviceTypeId: k,
                optionName: l
            }))
            return !1;
        var o;
        const p = null !== (o = null == n ? void 0 : n.minimumRoleLevel) && void 0 !== o ? o : f.RoleLevelConsts.min;
        var q;
        const r = null !== (q = null == n ? void 0 : n.maximumRoleLevel) && void 0 !== q ? q : f.RoleLevelConsts.max;
        return (0, i.IsRoleLevelBetween)(p, r);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CanModifyDeviceOptionForCurrentMapStyle', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        const {
            deviceTypeId: j,
            optionName: k
        } = i, l = (0, f.FetchDeviceOptionById)(j);
        if (!l)
            return !1;
        const m = l.optionSchema.options.find(n => n.key === k);
        return !!m && (!m.supportedMapStyles || m.supportedMapStyles.includes((0, g.GetCurrentMapStyle)()));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n, o, p = q => q;
    var _q = r => {
        const {
            option: s,
            value: t,
            onChange: u,
            readOnly: v
        } = r, {
            label: w,
            description: x
        } = s.option, [y, z, A] = (0, m.useBoolean)(!1);
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
                                children: w
                            })
                        }),
                        r.showHooks ? (0, f.jsx)(g.default, {
                            size: 'small',
                            shape: 'circle',
                            type: 'link',
                            icon: (0, f.jsx)('i', {
                                className: 'far fa-cog'
                            }),
                            onClick: z
                        }) : null
                    ]
                }),
                x ? (0, f.jsx)('div', {
                    children: (0, f.jsx)(h.default.Text, {
                        italic: !0,
                        children: x
                    })
                }) : null,
                (0, f.jsx)(_s, {
                    style: {
                        marginTop: 5
                    },
                    children: (0, f.jsx)(k.default, {
                        value: t,
                        option: s.option,
                        onChange: u,
                        readOnly: v
                    })
                }),
                (0, f.jsx)(l.default, {
                    visible: y,
                    close: A,
                    ...r
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    var _p = q => {
        const {
            option: r,
            value: s,
            onChange: t
        } = q;
        return r.type === k.default.numberInput ? (0, f.jsx)(g.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.itemsList ? (0, f.jsx)(o.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.textInput ? (0, f.jsx)(i.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.select ? (0, f.jsx)(h.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.itemId ? (0, f.jsx)(l.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.skinId ? (0, f.jsx)(n.default, {
            value: s,
            onChange: t,
            readOnly: q.readOnly,
            optionProps: r.props
        }) : r.type === k.default.terrainId ? (0, f.jsx)(m.default, {
            optionProps: r.props,
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : r.type === k.default.color ? (0, f.jsx)(j.default, {
            value: s,
            onChange: t,
            readOnly: q.readOnly
        }) : null;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    var _j = k => {
        const {
            value: l,
            optionProps: m
        } = k, [n, o] = i.useState(l);
        i.useEffect(() => {
            o(l);
        }, [l]);
        const p = q => {
            if (null === q && k.optionProps.allowEmpty)
                return void o(void 0);
            let r = q;
            var s, t;
            m.step && q && (s = q, t = m.step, r = Math.round(s / t) * t), o(r);
        };
        return m.useSlider ? (0, f.jsx)(h.default, {
            value: n,
            onChange: p,
            onAfterChange: q => {
                o(q), k.onChange(q);
            },
            min: m.min,
            max: m.max,
            step: m.step,
            disabled: k.readOnly
        }) : (0, f.jsx)(g.default, {
            value: n,
            onChange: p,
            onBlur: () => {
                k.onChange(n);
            },
            min: m.min,
            max: m.max,
            step: m.step,
            style: {
                width: '100%'
            },
            disabled: k.readOnly,
            placeholder: 'Enter a value...'
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = n => {
        var o;
        const {
            optionProps: p
        } = n, q = i.useMemo(() => {
            if ('' !== n.value)
                return n.value;
        }, [n.value]), r = i.useMemo(() => p.options.some(s => 'Fugaz One' === s.value), [null == p ? void 0 : p.options]);
        i.useEffect(() => {
            r && p.options.forEach(s => {
                (0, k.default)({
                    familyName: s.name
                });
            });
        }, [r]);
        const s = null == p || null === (o = p.options) || void 0 === o ? void 0 : o.filter(t => !((null == t ? void 0 : t.supportedMapStyles) && !(null == t ? void 0 : t.supportedMapStyles.includes((0, l.GetCurrentMapStyle)()))) && (void 0 === (null == t ? void 0 : t.minimumRoleLevel) && void 0 === (null == t ? void 0 : t.maximumRoleLevel) || (0, j.IsRoleLevelBetween)(null == t ? void 0 : t.minimumRoleLevel, null == t ? void 0 : t.maximumRoleLevel)));
        if (!p || !s.length)
            return null;
        const t = u => {
            n.onChange(u);
        };
        return (0, f.jsx)(g.default, {
            value: null != q ? q : void 0,
            allowClear: p.allowEmpty,
            placeholder: p.placeholder || 'None Selected',
            onSelect: t,
            onClear: () => t(void 0),
            filterOption: (u, v) => !!(v && v.name && v.name.toString().toUpperCase && u && u.toUpperCase) && -1 !== v.name.toString().toUpperCase().indexOf(u.toUpperCase()),
            showSearch: !0,
            disabled: n.readOnly,
            style: {
                width: '100%'
            },
            children: s.map(u => (0, f.jsx)(g.default.Option, {
                value: u.value,
                name: u.name,
                style: r ? {
                    fontFamily: u.value
                } : void 0,
                children: u.image ? (0, f.jsxs)(h.default, {
                    direction: 'horizontal',
                    size: 6,
                    children: [
                        (0, f.jsx)('img', {
                            src: u.image,
                            style: {
                                maxHeight: 30,
                                maxWidth: 30
                            }
                        }),
                        (0, f.jsx)('div', {
                            children: u.name
                        })
                    ]
                }) : u.name
            }, `option-${ u.value }`))
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    var _s = t => {
        const {
            value: u,
            optionProps: v
        } = t, [w, x] = i.useState(t.value);
        i.useEffect(() => {
            x(u);
        }, [u]);
        const y = i.useMemo(() => {
                if (null == v ? void 0 : v.category) {
                    const z = (0, j.default)(v.category).map(A => ({
                        option: A
                    }));
                    if (v.category === l.default.property) {
                        const A = (0, k.GetPropertiesWithoutMatchingPropertyDevice)(),
                            B = z.filter(C => !A.includes(C.option));
                        return [
                            ...A.map(C => ({
                                option: C,
                                noMatchingDevice: !0
                            })),
                            ...B
                        ];
                    }
                    return z;
                }
                return [];
            }, []),
            z = () => {
                t.onChange(null == w ? void 0 : w.trim());
            };
        if (v.codeEditor)
            return (0, f.jsx)('div', {
                onBlur: z,
                children: (0, f.jsxs)(n.LiveProvider, {
                    noInline: !0,
                    code: w,
                    scope: {
                        MapButton: o.default,
                        CallAction: p.CallAction,
                        usePropertyValue: q.usePropertyValue,
                        useItemAmount: r.useItemAmount
                    },
                    children: [
                        (0, f.jsx)(n.LiveEditor, {
                            onChange: A => {
                                x(A);
                            }
                        }),
                        (0, f.jsx)(n.LiveError, {})
                    ]
                })
            });
        if (v.textArea)
            return (0, f.jsx)(h.default.TextArea, {
                value: w,
                onChange: A => x(A.target.value),
                onBlur: z,
                placeholder: v.placeholder,
                style: {
                    width: '100%'
                }
            });
        const A = (() => {
            if ((null == v ? void 0 : v.category) === l.default.property && y.length) {
                let B = [];
                if (y.some(C => C.noMatchingDevice)) {
                    const C = y.filter(D => D.noMatchingDevice),
                        D = y.filter(E => !E.noMatchingDevice);
                    if (B.push({
                            label: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    'Properties without a corresponding Property',
                                    ' ',
                                    m.default.device.singular
                                ]
                            }),
                            options: C.map(E => ({
                                value: E.option
                            }))
                        }), D.length)
                        return B.push({
                            label: (0, f.jsx)(f.Fragment, {
                                children: 'All other properties'
                            }),
                            options: D.map(E => ({
                                value: E.option
                            }))
                        }), B;
                }
            }
            return y.map(D => ({
                value: D.option
            }));
        })();
        return (0, f.jsx)(g.default, {
            value: w,
            options: A,
            onChange: B => {
                x(B);
            },
            onBlur: z,
            style: {
                width: '100%'
            },
            placeholder: v.placeholder || 'Enter a value...',
            filterOption: (B, C) => {
                var D;
                return -1 !== (null === (D = C.value) || void 0 === D ? void 0 : D.toUpperCase().indexOf(B.toUpperCase()));
            },
            maxLength: v.maxLength,
            disabled: t.readOnly
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    var _l = (m, n) => {
        if (!m)
            return [];
        const o = [];
        j.default.worldOptions.deviceOptions.forEach(p => {
            p.optionSchema.options.forEach(q => {
                if (q.option.type === k.default.textInput) {
                    var r;
                    const s = q.option;
                    (null == s || null === (r = s.props) || void 0 === r ? void 0 : r.category) === m && o.push({
                        deviceId: p.id,
                        optionKey: String(q.key)
                    });
                }
            });
        });
        const p = [],
            q = r => {
                if ((r = r.trim()).length)
                    if (m === i.default.channel && r.includes(',')) {
                        r.split(',').forEach(q);
                    } else
                        p.includes(r) || p.push(r);
            };
        return j.default.world.devices.devices.forEach(r => {
            o.map(s => s.deviceId).includes(r.deviceOption.id) && Object.keys(r.options || {}).forEach(s => {
                o.map(t => t.optionKey).includes(s) && r.options[s] && q(r.options[s]);
            });
        }), m === i.default.channel && (n && n.blockSlowOperations || j.default.world.devices.devices.forEach(r => {
            var s, t;
            null === (s = j.default.world.devices.codeGrids.get(r.id)) || void 0 === s || null === (t = s.items) || void 0 === t || t.forEach(u => {
                if (u.triggerType === h.default.broadcastMessage && u.triggerValue && q(u.triggerValue), u.json) {
                    const v = new(b(f)).Workspace();
                    b(f).serialization.workspaces.load(JSON.parse(u.json), v);
                    v.getAllBlocks(!0).forEach(w => {
                        if ((w.type === g.default.messageBroadcaster || w.type === g.default.playerProximityMessageBroadcaster) && w.getChildren(!0).length) {
                            const x = w.getChildren(!0)[0];
                            if ('text' === x.type) {
                                const y = x.getFieldValue('TEXT');
                                y && q(y);
                            }
                        }
                    }), v.dispose();
                }
            });
        })), m === i.default.property && (n && n.blockSlowOperations || j.default.world.devices.devices.forEach(r => {
            var s, t;
            null === (s = j.default.world.devices.codeGrids.get(r.id)) || void 0 === s || null === (t = s.items) || void 0 === t || t.forEach(u => {
                if (u.json) {
                    const v = new(b(f)).Workspace();
                    b(f).serialization.workspaces.load(JSON.parse(u.json), v);
                    v.getAllBlocks(!0).forEach(w => {
                        if ((w.type === g.default.setProperty || w.type === g.default.getProperty || w.type === g.default.playerProximityGetProperty || w.type === g.default.playerProximitySetProperty) && w.getChildren(!0).length) {
                            const x = w.getChildren(!0)[0];
                            if ('text' === x.type) {
                                const y = x.getFieldValue('TEXT');
                                y && q(y);
                            }
                        }
                    }), v.dispose();
                }
            });
        })), p;
    };
}), c.register('.....', function(d, e) {
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        broadcastMessage: 'channel_radio'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        channel: 'channel',
        property: 'property'
    };
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).textInput = 'textInput', g.numberInput = 'numberInput', g.select = 'select', g.color = 'color', g.itemId = 'itemId', g.terrainId = 'terrainId', g.skinId = 'skinId', g.itemsList = 'itemsList';
    var _h = f;
}), c.register('.....', function(d, e) {
    a(d.exports, 'GetPropertiesWithoutMatchingPropertyDevice', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = () => {
        const k = [];
        f.default.world.devices.devices.forEach(l => {
            if (l.deviceOption.id === g.default.property) {
                const m = l.options;
                k.push(m.propertyName);
            }
        });
        return (0, h.default)(i.default.property).filter(l => !k.includes(l));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    let i, j, k = l => l;
    var _l = m => {
        const n = (0, g.useDebounceCallback)(o => {
            m.onChange(o);
        }, 350);
        return (0, f.jsx)(_m, {
            readOnly: m.readOnly,
            children: (0, f.jsx)(_n, {
                readOnly: m.readOnly,
                children: (0, f.jsx)('input', {
                    type: 'color',
                    className: 'maxWidth',
                    disabled: m.readOnly,
                    value: m.value,
                    onChange: o => n(o.target.value)
                })
            })
        });
    };
    const _m = h.default.div(i || (i = k`
  width: 100%;
  ${ 0 }
`), n => n.readOnly && 'cursor: not-allowed;'),
        _n = h.default.div(j || (j = k`
  width: 100%;
  ${ 0 }
`), o => o.readOnly && 'pointer-events: none; opacity: 0.6');
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const k = l => l.filter(m => {
            const n = (0, i.FetchItemOption)(m);
            return !!n && !!(0, j.IsRoleLevelBetween)(n.minimumRoleLevel, n.maximumRoleLevel);
        }),
        l = m => {
            const n = [];
            return h.default.worldOptions.itemOptions.forEach(o => {
                var p;
                (null === (p = m.blockedItems) || void 0 === p ? void 0 : p.includes(o.id)) || (m.allowedItems ? m.allowedItems.includes(o.id) && n.push(o.id) : m.allowedItemsCategories ? m.allowedItemsCategories.includes(o.type) && n.push(o.id) : n.push(o.id));
            }), n;
        };
    var _m = n => {
        const o = l(n.optionProps),
            p = k(o).map(q => ({
                value: q,
                name: (0, i.FetchItemOption)(q).editorName
            })),
            q = {
                placeholder: 'Select an item',
                allowEmpty: !0,
                options: p
            };
        let r = n.value;
        return r && !p.find(s => s.value === n.value) && (r = void 0), (0, f.jsx)(g.default, {
            ...n,
            value: r,
            optionProps: q
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    var _j = k => {
        const l = h.default.worldOptions.terrainOptions.filter(m => (0, i.CanAddTerrain)(m.id)).map(m => ({
                value: m.id,
                name: m.name
            })),
            m = {
                placeholder: 'Select a terrain',
                allowEmpty: k.optionProps.allowEmpty,
                options: l
            };
        let n = k.value;
        return n && !l.find(o => o.value === k.value) && (n = void 0), (0, f.jsx)(g.default, {
            ...k,
            value: n,
            optionProps: m
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    var _k = l => {
        var m;
        const n = h.default.worldOptions.skinOptions.filter(o => (0, i.IsRoleLevelBetween)(o.minimumRoleLevel, o.maximumRoleLevel)).map(o => ({
            value: o.id,
            name: o.name,
            image: (0, j.default)('characters/spine/preview/' + o.id.replace('character_', '') + '.png')
        }));
        var o;
        const p = {
            placeholder: 'Select a Gim',
            allowEmpty: null !== (o = null == l || null === (m = l.optionProps) || void 0 === m ? void 0 : m.allowEmpty) && void 0 !== o && o,
            options: n
        };
        let q = l.value;
        return q && !n.find(r => r.value === l.value) && (q = void 0), (0, f.jsx)(g.default, {
            ...l,
            value: q,
            optionProps: p
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l, m, n, o, p, q, r, s, t, u, v = w => w;
    var _w = x => {
        var y, z;
        return (0, f.jsx)(_x, {
            readOnly: x.readOnly,
            children: (0, f.jsxs)(_y, {
                readOnly: x.readOnly,
                children: [
                    null === (y = x.value) || void 0 === y ? void 0 : y.map((A, B) => {
                        var C, D;
                        return (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)(_z, {
                                    children: [
                                        (0, f.jsxs)(_A, {
                                            children: [
                                                'Item ',
                                                B + 1
                                            ]
                                        }),
                                        (0, f.jsx)(g.default, {
                                            onClick: () => {
                                                var E;
                                                const F = null !== (E = x.value) && void 0 !== E ? E : [];
                                                F.splice(B, 1), x.onChange(F);
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
                                                        value: A.itemId,
                                                        onChange: E => {
                                                            var F;
                                                            const G = null !== (F = x.value) && void 0 !== F ? F : [];
                                                            G[B].itemId = E, x.onChange(G);
                                                        },
                                                        readOnly: x.readOnly,
                                                        optionProps: x.optionProps
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (C = x.optionProps.amount) || void 0 === C ? void 0 : C.use) && (0, f.jsxs)(_C, {
                                            children: [
                                                (0, f.jsxs)(_D, {
                                                    children: [
                                                        x.optionProps.amount.label || 'Amount',
                                                        ':'
                                                    ]
                                                }),
                                                (0, f.jsx)(_F, {
                                                    children: (0, f.jsx)(j.default, {
                                                        value: A.amount,
                                                        onChange: E => {
                                                            var F;
                                                            const G = null !== (F = x.value) && void 0 !== F ? F : [];
                                                            G[B].amount = E, x.onChange(G);
                                                        },
                                                        readOnly: x.readOnly,
                                                        optionProps: {
                                                            min: x.optionProps.amount.min,
                                                            max: x.optionProps.amount.max,
                                                            step: x.optionProps.amount.step
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (D = x.optionProps.numParam) || void 0 === D ? void 0 : D.use) && (0, f.jsxs)(_C, {
                                            children: [
                                                (0, f.jsxs)(_D, {
                                                    children: [
                                                        x.optionProps.numParam.label || 'Num Param',
                                                        ':'
                                                    ]
                                                }),
                                                (0, f.jsx)(_F, {
                                                    children: (0, f.jsx)(j.default, {
                                                        value: A.numParam,
                                                        onChange: E => {
                                                            var F;
                                                            const G = null !== (F = x.value) && void 0 !== F ? F : [];
                                                            G[B].numParam = E, x.onChange(G);
                                                        },
                                                        readOnly: x.readOnly,
                                                        optionProps: {
                                                            min: x.optionProps.numParam.min,
                                                            max: x.optionProps.numParam.max,
                                                            step: x.optionProps.numParam.step
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, B);
                    }),
                    (0, f.jsx)(_G, {
                        children: (0, f.jsx)(g.default, {
                            disabled: x.readOnly || x.optionProps.maxItems <= (null === (z = x.value) || void 0 === z ? void 0 : z.length),
                            onClick: () => {
                                var A, B, C;
                                const D = null !== (C = x.value) && void 0 !== C ? C : [];
                                var E, F;
                                D.push({
                                    itemId: void 0,
                                    amount: null !== (E = null === (A = x.optionProps.amount) || void 0 === A ? void 0 : A.defaultValue) && void 0 !== E ? E : 0,
                                    numParam: null !== (F = null === (B = x.optionProps.numParam) || void 0 === B ? void 0 : B.defaultValue) && void 0 !== F ? F : 0
                                }), x.onChange(D);
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
`), y => y.readOnly && 'cursor: not-allowed;'),
        _y = h.default.div(m || (m = v`
  width: 100%;
  ${ 0 }
`), z => z.readOnly && 'pointer-events: none; opacity: 0.6'),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = b(g).lazy(() => c('.....'));
    var _i = j => {
        const [k, l] = b(g).useState(!1);
        return b(g).useEffect(() => {
            j.visible && l(!0);
        }, [j.visible]), k ? (0, f.jsx)(b(g).Suspense, {
            fallback: null,
            children: (0, f.jsx)(h, {
                ...j
            })
        }) : null;
    };
}), c.register('.....', function(d, e) {
    d.exports = import('./' + c('.....').resolve('h0LK7')).then(() => c('.....'));
}), c.register('.....', function(d, e) {
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