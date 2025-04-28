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
a.register('QVC+I', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        grid: {
            singular: 'block',
            plural: 'blocks'
        },
        blocklyBlock: {
            singular: 'piece',
            plural: 'pieces'
        }
    };
}), a.register('eeCUl', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('YuT/D'),
        e = a('LEQ5w'),
        f = a('bHGrl');
    var _g = () => {
        const {
            me: _h,
            world: {
                devices: i
            }
        } = (0, f.default)(), [j, k] = e.useState('{}'), [l, m] = e.useState('{}'), [n, o] = e.useState('{}');
        e.useEffect(() => {
            const p = (0, d.reaction)(() => i.devices.get(_h.editing.device.currentlyEditedDevice.id), _h => {
                _h && (k(JSON.stringify(_h.options)), m(JSON.stringify({
                    x: _h.x,
                    y: _h.y
                })), _h.hooks ? o(JSON.stringify(_h.hooks)) : o('{}'));
            }, {
                fireImmediately: !0
            });
            return () => {
                p();
            };
        }, []);
        return {
            options: JSON.parse(j),
            position: JSON.parse(l),
            hooks: JSON.parse(n)
        };
    };
}), a.register('ZWpm0', function(b, c) {
    _z(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Gxfhq'),
        g = a('uRAeN'),
        h = a('vWoZx'),
        i = a('1P5ls'),
        j = a('cvto726'),
        k = a('CAKUf'),
        l = a('FK3Hv'),
        m = a('2x11J'),
        n = a('L1523'),
        o = a('2KAcK'),
        p = a('bh+op');
    const q = 'All Options',
        r = (0, m.observer)(_z => {
            var s, t, u, v;
            const {
                device: w,
                deviceOption: _x,
                position: y,
                options: z
            } = _z, [A, B] = e.useState(_s(_x.optionSchema)), C = !(0, f.default)(), D = (_z, s) => {
                C || ((0, n.EmitTutorialEvent)({
                    event: n.TutorialEventName.CHANGE_DEVICE_OPTION,
                    device: w,
                    option: _z,
                    value: s
                }), (0, g.default)({
                    deviceOption: _x,
                    id: w.id,
                    x: y.x,
                    y: y.y,
                    depth: w.layers.getOptionsDepth(),
                    layerId: w.layers.getOptionsLayer(),
                    name: w.name,
                    isPreview: !1,
                    options: {
                        ...z,
                        [_z]: s
                    },
                    placedByClient: !0,
                    state: _x.defaultState
                }));
            }, E = (0, d.jsx)(j.default, {
                size: 12,
                direction: 'vertical',
                className: 'maxWidth',
                children: (0, d.jsx)(h.default, {
                    device: w,
                    deviceOption: _x,
                    options: z,
                    hooks: _z.hooks,
                    readOnly: C,
                    handleOptionChange: D,
                    category: A === q ? void 0 : A,
                    setCategory: B
                })
            }), F = ((null === (s = _x.optionSchema) || void 0 === s || null === (t = s.categories) || void 0 === t ? void 0 : t.categories) || []).filter(_z => void 0 === _z.supportedMapStyles || _z.supportedMapStyles.includes((0, p.GetCurrentMapStyle)())).filter(_z => {
                var G;
                return !(null === (G = _z.hideIf) || void 0 === G ? void 0 : G.length) || !(0, o.ShouldHideFromHideIf)({
                    hideIf: _z.hideIf,
                    options: z
                });
            });
            if (e.useEffect(() => {
                    A && A !== q && !F.some(_z => _z.id === A) && B(_s(_x.optionSchema));
                }, [
                    A,
                    F
                ]), !F || !F.length)
                return E;
            const G = [];
            F.forEach(_z => {
                G.push({
                    id: _z.id,
                    name: _z.name
                });
            });
            return 'start' === (null === (u = _x.optionSchema) || void 0 === u || null === (v = u.categories) || void 0 === v ? void 0 : v.showAllOptionsAt) || !1 ? G.unshift({
                id: q,
                name: q
            }) : G.push({
                id: q,
                name: q
            }), (0, d.jsx)(i.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: 'yellow'
                        }
                    }
                },
                children: (0, d.jsx)(k.default, {
                    activeKey: A,
                    onChange: _z => {
                        (0, l.playClickSound)(), B(_z);
                    },
                    className: 'maxWidth',
                    style: {
                        marginTop: -18
                    },
                    size: 'large',
                    items: G.map(_z => ({
                        label: _z.name,
                        key: _z.id,
                        children: E
                    }))
                })
            });
        }),
        _s = _z => {
            if (_z.categories) {
                if ('start' === _z.categories.showAllOptionsAt)
                    return q;
                if (_z.categories.categories.length)
                    return _z.categories.categories[0].id;
            }
            return q;
        };
    var t = r;
}), a.register('vWoZx', function(b, c) {
    _z(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('RZIVb'),
        f = a('YgXSP'),
        g = a('FAXfY'),
        h = a('cvto726'),
        i = a('j2ADs'),
        j = a('Bl6GB'),
        k = a('0HHAH'),
        l = a('9R7cy'),
        m = a('bzU3s'),
        n = a('2x11J'),
        o = a('bHGrl'),
        p = a('7/DOy');
    var _q = (0, n.observer)(_z => {
        const {
            device: r,
            deviceOption: s,
            options: t,
            category: u,
            setCategory: v
        } = _z, {
            me: {
                roleLevel: w
            }
        } = (0, o.default)(), x = w >= p.RoleLevelConsts.admin, y = (() => {
            let _z = (0, e.CreateOptionsFromOptionSchema)({
                device: r,
                options: t,
                optionSchema: s.optionSchema
            }).filter(_z => !u || !(!_z.categories || !_z.categories.includes(u))).filter(_z => (0, f.CanModifyDeviceOption)(s.id, _z.key));
            return (0, g.CanAddDeviceType)(s.id, t) || (_z = [], u && v(void 0)), _z;
        })();
        return y.length ? (0, d.jsx)(h.default, {
            size: 14,
            direction: 'vertical',
            className: 'maxWidth',
            children: y.map(s => (0, d.jsx)(j.default, {
                option: s,
                value: t[s.key],
                onChange: r => _w.handleOptionChange(String(s.key), r),
                readOnly: _w.readOnly,
                deviceId: r.id,
                deviceType: r.deviceOption.id,
                hooks: _w.hooks,
                showHooks: x
            }, `${ r.id } ${ String(s.key) }`))
        }) : (0, d.jsxs)(k.CenteredColumn, {
            className: 'maxWidth',
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 36,
                        color: 'rgba(255,255,255,0.85)'
                    },
                    children: (0, d.jsx)(l.default, {
                        name: 'fas fa-cogs'
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 3
                    },
                    children: (0, d.jsxs)(i.default.Text, {
                        children: [
                            'No options to configure for this',
                            ' ',
                            u ? 'category' : m.default.device.singular,
                            '!'
                        ]
                    })
                })
            ]
        });
    });
}), a.register('RZIVb', function(b, c) {
    _w(b.exports, 'CreateOptionsFromOptionSchema', function() {
        return _e;
    });
    var d = a('2KAcK');
    const _e = _w => (0, d.FilterOutHiddenOptions)({
        device: _w.device,
        options: _w.options,
        optionSchema: _w.optionSchema
    });
}), a.register('2KAcK', function(b, c) {
    _w(b.exports, 'ShouldHideFromHideIf', function() {
        return _h;
    }), _w(b.exports, 'FilterOutHiddenOptions', function() {
        return _i;
    });
    var d = a('EqyfB'),
        e = a('bV9vv');
    const f = [
            'shadowsEnabled',
            'shadowsPlacement'
        ],
        g = [
            'canBeDamaged',
            'health',
            'useAdaptiveHealth',
            'adaptiveHealthPerPlayer',
            'onDestroyedChannel',
            'UseColliders'
        ],
        _h = _w => {
            var i;
            let j = !1;
            return (null === (i = _w.hideIf) || void 0 === i ? void 0 : i.length) && _w.hideIf.forEach(i => {
                i.every(i => {
                    var k;
                    const l = null !== (k = _w.options[i.key]) && void 0 !== k ? k : void 0;
                    if ('EQUAL' === i.compare) {
                        if (i.value === l)
                            return !0;
                    } else if ('NOT_EQUAL' === i.compare) {
                        if (i.value !== l)
                            return !0;
                    } else if ('LESS_THAN' === i.compare) {
                        if (Number(l) < Number(i.value))
                            return !0;
                    } else if ('GREATER_THAN' === i.compare && Number(l) > Number(i.value))
                        return !0;
                    return !1;
                }) && (j = !0);
            }), j;
        },
        _i = _w => {
            let j = _w.optionSchema.options.filter(_w => !_w.option.hidden).filter(j => {
                var k;
                let l = !1;
                return (null === (k = j.option.hideIf) || void 0 === k ? void 0 : k.length) && (l = _h({
                    hideIf: j.option.hideIf,
                    options: _w.options
                })), !l;
            });
            if (_w.device.deviceOption.id === d.default.prop) {
                var k, l, m, n;
                const o = _w.device.options,
                    p = (0, e.default)(o.propId);
                if (!p)
                    return j;
                var q, r, s;
                const t = (null !== (q = null === (k = p.rectColliders) || void 0 === k ? void 0 : k.length) && void 0 !== q ? q : 0) + (null !== (r = null === (l = p.circleColliders) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0) + (null !== (s = null === (m = p.ellipseColliders) || void 0 === m ? void 0 : m.length) && void 0 !== s ? s : 0) > 0;
                var u;
                const v = (null !== (u = null === (n = p.shadows) || void 0 === n ? void 0 : n.length) && void 0 !== u ? u : 0) > 0;
                j = j.filter(_w => !(!v && f.includes(_w.key)) && !(!t && g.includes(_w.key)));
            }
            return j;
        };
}), a.register('YgXSP', function(b, c) {
    _w(b.exports, 'CanModifyDeviceOption', function() {
        return _h;
    });
    var d = a('7/DOy'),
        e = a('cn8ix'),
        f = a('KzfsH'),
        g = a('O3NOb');
    const _h = (_w, b) => {
        const i = (0, f.FetchDeviceOptionById)(_w);
        if (!i)
            return !1;
        const j = i.optionSchema.options.find(_w => _w.key === b);
        if (!(0, e.CanModifyDeviceOptionForCurrentMapStyle)({
                deviceTypeId: _w,
                optionName: b
            }))
            return !1;
        var k;
        const l = null !== (k = null == j ? void 0 : j.minimumRoleLevel) && void 0 !== k ? k : d.RoleLevelConsts.min;
        var m;
        const n = null !== (m = null == j ? void 0 : j.maximumRoleLevel) && void 0 !== m ? m : d.RoleLevelConsts.max;
        return (0, g.IsRoleLevelBetween)(l, n);
    };
}), a.register('cn8ix', function(b, c) {
    _w(b.exports, 'CanModifyDeviceOptionForCurrentMapStyle', function() {
        return _f;
    });
    var d = a('KzfsH'),
        e = a('bh+op');
    const _f = _w => {
        const {
            deviceTypeId: g,
            optionName: h
        } = _w, i = (0, d.FetchDeviceOptionById)(g);
        if (!i)
            return !1;
        const j = i.optionSchema.options.find(_w => _w.key === h);
        return !!j && (!j.supportedMapStyles || j.supportedMapStyles.includes((0, e.GetCurrentMapStyle)()));
    };
}), a.register('Bl6GB', function(b, c) {
    _w(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('j2ADs'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('yRDXH'),
        j = a('pzzrm'),
        k = a('PMl60');
    let l, m, n = _w => _w;
    var _o = _w => {
        const {
            option: p,
            value: q,
            onChange: r,
            readOnly: s
        } = _w, {
            label: t,
            description: u
        } = p.option, [v, w, x] = (0, k.useBoolean)(!1);
        return (0, d.jsxs)(_p, {
            children: [
                (0, d.jsxs)('div', {
                    className: 'flex vc maxWidth between',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(f.default.Title, {
                                level: 5,
                                style: {
                                    fontWeight: h.FontWeights.Bold
                                },
                                children: t
                            })
                        }),
                        _w.showHooks ? (0, d.jsx)(e.default, {
                            size: 'small',
                            shape: 'circle',
                            type: 'link',
                            icon: (0, d.jsx)('i', {
                                className: 'far fa-cog'
                            }),
                            onClick: w
                        }) : null
                    ]
                }),
                u ? (0, d.jsx)('div', {
                    children: (0, d.jsx)(f.default.Text, {
                        italic: !0,
                        children: u
                    })
                }) : null,
                (0, d.jsx)(_q, {
                    style: {
                        marginTop: 5
                    },
                    children: (0, d.jsx)(i.default, {
                        value: q,
                        option: p.option,
                        onChange: r,
                        readOnly: s
                    })
                }),
                (0, d.jsx)(j.default, {
                    visible: v,
                    close: x,
                    ..._w
                })
            ]
        });
    };
    const _p = g.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`)),
        _q = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = n``));
}), a.register('yRDXH', function(b, c) {
    _w(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('5/bn1'),
        f = a('DyY59'),
        g = a('vNmNp'),
        h = a('L6na6'),
        i = a('Y3EZX'),
        j = a('c3dpp'),
        k = a('iqvEV'),
        l = a('mY6WT'),
        m = a('xsJwy');
    var _n = _w => {
        const {
            option: o,
            value: p,
            onChange: q
        } = _w;
        return o.type === i.default.numberInput ? (0, d.jsx)(e.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.itemsList ? (0, d.jsx)(m.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.textInput ? (0, d.jsx)(g.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.select ? (0, d.jsx)(f.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.itemId ? (0, d.jsx)(j.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.skinId ? (0, d.jsx)(l.default, {
            value: p,
            onChange: q,
            readOnly: _w.readOnly,
            optionProps: o.props
        }) : o.type === i.default.terrainId ? (0, d.jsx)(k.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : o.type === i.default.color ? (0, d.jsx)(h.default, {
            value: p,
            onChange: q,
            readOnly: _w.readOnly
        }) : null;
    };
}), a.register('5/bn1', function(b, c) {
    _w(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('GnfDG'),
        f = a('80XJ3'),
        g = a('LEQ5w');
    var _h = _w => {
        const {
            value: i,
            optionProps: j
        } = _w, [k, l] = g.useState(i);
        g.useEffect(() => {
            l(i);
        }, [i]);
        const m = i => {
            if (null === i && _w.optionProps.allowEmpty)
                return void l(void 0);
            let n = i;
            var o, p;
            j.step && i && (o = i, p = j.step, n = Math.round(o / p) * p), l(n);
        };
        return j.useSlider ? (0, d.jsx)(f.default, {
            value: k,
            onChange: m,
            onAfterChange: i => {
                l(i), _w.onChange(i);
            },
            min: j.min,
            max: j.max,
            step: j.step,
            disabled: _w.readOnly
        }) : (0, d.jsx)(e.default, {
            value: k,
            onChange: m,
            onBlur: () => {
                _w.onChange(k);
            },
            min: j.min,
            max: j.max,
            step: j.step,
            style: {
                width: '100%'
            },
            disabled: _w.readOnly,
            placeholder: 'Enter a value...'
        });
    };
}), a.register('DyY59', function(b, c) {
    _w(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('inwN3'),
        f = a('cvto726'),
        g = a('LEQ5w'),
        h = a('O3NOb'),
        i = a('sCbH9'),
        j = a('bh+op');
    var _k = _w => {
        var l;
        const {
            optionProps: m
        } = _w, n = g.useMemo(() => {
            if ('' !== _w.value)
                return _w.value;
        }, [_w.value]), o = g.useMemo(() => m.options.some(_w => 'Fugaz One' === _w.value), [null == m ? void 0 : m.options]);
        g.useEffect(() => {
            o && m.options.forEach(_w => {
                (0, i.default)({
                    familyName: _w.name
                });
            });
        }, [o]);
        const p = null == m || null === (l = m.options) || void 0 === l ? void 0 : l.filter(_w => !((null == _w ? void 0 : _w.supportedMapStyles) && !(null == _w ? void 0 : _w.supportedMapStyles.includes((0, j.GetCurrentMapStyle)()))) && (void 0 === (null == _w ? void 0 : _w.minimumRoleLevel) && void 0 === (null == _w ? void 0 : _w.maximumRoleLevel) || (0, h.IsRoleLevelBetween)(null == _w ? void 0 : _w.minimumRoleLevel, null == _w ? void 0 : _w.maximumRoleLevel)));
        if (!m || !p.length)
            return null;
        const q = l => {
            _w.onChange(l);
        };
        return (0, d.jsx)(e.default, {
            value: null != n ? n : void 0,
            allowClear: m.allowEmpty,
            placeholder: m.placeholder || 'None Selected',
            onSelect: q,
            onClear: () => q(void 0),
            filterOption: (_w, l) => !!(l && l.name && l.name.toString().toUpperCase && _w && _w.toUpperCase) && -1 !== l.name.toString().toUpperCase().indexOf(_w.toUpperCase()),
            showSearch: !0,
            disabled: _w.readOnly,
            style: {
                width: '100%'
            },
            children: p.map(_w => (0, d.jsx)(e.default.Option, {
                value: _w.value,
                name: _w.name,
                style: o ? {
                    fontFamily: _w.value
                } : void 0,
                children: _w.image ? (0, d.jsxs)(f.default, {
                    direction: 'horizontal',
                    size: 6,
                    children: [
                        (0, d.jsx)('img', {
                            src: _w.image,
                            style: {
                                maxHeight: 30,
                                maxWidth: 30
                            }
                        }),
                        (0, d.jsx)('div', {
                            children: _w.name
                        })
                    ]
                }) : _w.name
            }, `option-${ _w.value }`))
        });
    };
}), a.register('vNmNp', function(b, c) {
    _w(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('OB7Pc'),
        f = a('ewwAh'),
        g = a('LEQ5w'),
        h = a('m8UaK'),
        i = a('8bFvV'),
        j = a('iulrc'),
        k = a('bzU3s'),
        l = a('C2gQA'),
        m = a('led8j'),
        n = a('U9mPz'),
        o = a('utXDw'),
        p = a('JWLDh');
    var _q = _w => {
        const {
            value: r,
            optionProps: s
        } = _w, [t, u] = g.useState(_w.value);
        g.useEffect(() => {
            u(r);
        }, [r]);
        const v = g.useMemo(() => {
                if (null == s ? void 0 : s.category) {
                    const _w = (0, h.default)(s.category).map(_w => ({
                        option: _w
                    }));
                    if (s.category === j.default.property) {
                        const x = (0, i.GetPropertiesWithoutMatchingPropertyDevice)(),
                            y = _w.filter(_w => !x.includes(_w.option));
                        return [
                            ...x.map(_w => ({
                                option: _w,
                                noMatchingDevice: !0
                            })),
                            ...y
                        ];
                    }
                    return _w;
                }
                return [];
            }, []),
            w = () => {
                _y.onChange(null == t ? void 0 : t.trim());
            };
        if (s.codeEditor)
            return (0, d.jsx)('div', {
                onBlur: w,
                children: (0, d.jsxs)(l.LiveProvider, {
                    noInline: !0,
                    code: t,
                    scope: {
                        MapButton: m.default,
                        CallAction: n.CallAction,
                        usePropertyValue: o.usePropertyValue,
                        useItemAmount: p.useItemAmount
                    },
                    children: [
                        (0, d.jsx)(l.LiveEditor, {
                            onChange: _y => {
                                u(_y);
                            }
                        }),
                        (0, d.jsx)(l.LiveError, {})
                    ]
                })
            });
        if (s.textArea)
            return (0, d.jsx)(f.default.TextArea, {
                value: t,
                onChange: _y => u(_y.target.value),
                onBlur: w,
                placeholder: s.placeholder,
                style: {
                    width: '100%'
                }
            });
        const x = (() => {
            if ((null == s ? void 0 : s.category) === j.default.property && v.length) {
                let _y = [];
                if (v.some(_y => _y.noMatchingDevice)) {
                    const z = v.filter(_y => _y.noMatchingDevice),
                        A = v.filter(_y => !_y.noMatchingDevice);
                    if (_y.push({
                            label: (0, d.jsxs)(d.Fragment, {
                                children: [
                                    'Properties without a corresponding Property',
                                    ' ',
                                    k.default.device.singular
                                ]
                            }),
                            options: z.map(_y => ({
                                value: _y.option
                            }))
                        }), A.length)
                        return _y.push({
                            label: (0, d.jsx)(d.Fragment, {
                                children: 'All other properties'
                            }),
                            options: A.map(_y => ({
                                value: _y.option
                            }))
                        }), _y;
                }
            }
            return v.map(_r => ({
                value: _r.option
            }));
        })();
        return (0, d.jsx)(e.default, {
            value: t,
            options: x,
            onChange: _r => {
                u(_r);
            },
            onBlur: w,
            style: {
                width: '100%'
            },
            placeholder: s.placeholder || 'Enter a value...',
            filterOption: (_r, r) => {
                var y;
                return -1 !== (null === (y = r.name) || void 0 === y ? void 0 : y.toUpperCase().indexOf(_r.toUpperCase()));
            },
            maxLength: s.maxLength,
            disabled: _r.readOnly
        });
    };
}), a.register('m8UaK', function(b, c) {
    _r(b.exports, 'default', function() {
        return _j;
    });
    var d = a('uaSUf'),
        e = a('jQr2o'),
        f = a('J2kec'),
        g = a('iulrc'),
        h = a('iWivW'),
        i = a('Y3EZX');
    var _j = (_r, a) => {
        if (!_r)
            return [];
        const k = [];
        h.default.worldOptions.deviceOptions.forEach(_q => {
            _q.optionSchema.options.forEach(a => {
                if (a.option.type === i.default.textInput) {
                    var l;
                    const m = a.option;
                    (null == m || null === (l = m.props) || void 0 === l ? void 0 : l.category) === _r && k.push({
                        deviceId: _q.id,
                        optionKey: String(a.key)
                    });
                }
            });
        });
        const l = [],
            m = _q => {
                if ((_q = _q.trim()).length)
                    if (_r === g.default.channel && _q.includes(',')) {
                        _q.split(',').forEach(m);
                    } else
                        l.includes(_q) || l.push(_q);
            };
        return h.default.world.devices.devices.forEach(_r => {
            k.map(_r => _r.deviceId).includes(_r.deviceOption.id) && Object.keys(_r.options || {}).forEach(_q => {
                k.map(_r => _r.optionKey).includes(_q) && _r.options[_q] && m(_r.options[_q]);
            });
        }), _r === g.default.channel && (a && a.blockSlowOperations || h.default.world.devices.devices.forEach(_r => {
            var n, o;
            null === (n = h.default.world.devices.codeGrids.get(_r.id)) || void 0 === n || null === (o = n.items) || void 0 === o || o.forEach(_r => {
                if (_r.triggerType === f.default.broadcastMessage && _r.triggerValue && m(_r.triggerValue), _r.json) {
                    const p = new(_q(d)).Workspace();
                    _q(d).serialization.workspaces.load(JSON.parse(_r.json), p);
                    p.getAllBlocks(!0).forEach(_r => {
                        if ((_r.type === e.default.messageBroadcaster || _r.type === e.default.playerProximityMessageBroadcaster) && _r.getChildren(!0).length) {
                            const _q = _r.getChildren(!0)[0];
                            if ('text' === _q.type) {
                                const _r = _q.getFieldValue('TEXT');
                                _r && m(_r);
                            }
                        }
                    }), p.dispose();
                }
            });
        })), _r === g.default.property && (a && a.blockSlowOperations || h.default.world.devices.devices.forEach(_r => {
            var n, o;
            null === (n = h.default.world.devices.codeGrids.get(_r.id)) || void 0 === n || null === (o = n.items) || void 0 === o || o.forEach(_r => {
                if (_r.json) {
                    const p = new(_q(d)).Workspace();
                    _q(d).serialization.workspaces.load(JSON.parse(_r.json), p);
                    p.getAllBlocks(!0).forEach(_r => {
                        if ((_r.type === e.default.setProperty || _r.type === e.default.getProperty || _r.type === e.default.playerProximityGetProperty || _r.type === e.default.playerProximitySetProperty) && _r.getChildren(!0).length) {
                            const _q = _r.getChildren(!0)[0];
                            if ('text' === _q.type) {
                                const _r = _q.getFieldValue('TEXT');
                                _r && m(_r);
                            }
                        }
                    }), p.dispose();
                }
            });
        })), l;
    };
}), a.register('jQr2o', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        messageBroadcaster: 'message_broadcaster',
        setProperty: 'set_property',
        getProperty: 'get_property',
        playerProximityMessageBroadcaster: 'other_character_message_broadcaster',
        playerProximitySetProperty: 'other_character_set_property',
        playerProximityGetProperty: 'other_character_get_property'
    };
}), a.register('J2kec', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        broadcastMessage: 'channel_radio'
    };
}), a.register('iulrc', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        channel: 'channel',
        property: 'property'
    };
}), a.register('Y3EZX', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).textInput = 'textInput', e.numberInput = 'numberInput', e.select = 'select', e.color = 'color', e.itemId = 'itemId', e.terrainId = 'terrainId', e.skinId = 'skinId', e.itemsList = 'itemsList';
    var _f = d;
}), a.register('8bFvV', function(b, c) {
    _i(b.exports, 'GetPropertiesWithoutMatchingPropertyDevice', function() {
        return _h;
    });
    var d = a('iWivW'),
        e = a('EqyfB'),
        f = a('m8UaK'),
        g = a('iulrc');
    const _h = () => {
        const _i = [];
        d.default.world.devices.devices.forEach(b => {
            if (b.deviceOption.id === e.default.property) {
                const j = b.options;
                _i.push(j.propertyName);
            }
        });
        return (0, f.default)(g.default.property).filter(b => !_i.includes(b));
    };
}), a.register('L6na6', function(b, c) {
    _b(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('hVk9x'),
        f = a('Axq+p');
    let g, h, i = _b => _b;
    var _j = _b => {
        const k = (0, e.useDebounceCallback)(k => {
            _b.onChange(k);
        }, 350);
        return (0, d.jsx)(_k, {
            readOnly: _b.readOnly,
            children: (0, d.jsx)(_l, {
                readOnly: _b.readOnly,
                children: (0, d.jsx)('input', {
                    type: 'color',
                    className: 'maxWidth',
                    disabled: _b.readOnly,
                    value: _b.value,
                    onChange: _b => k(_b.target.value)
                })
            })
        });
    };
    const _k = f.default.div(g || (g = i`
  width: 100%;
  ${ 0 }
`), _b => _b.readOnly && 'cursor: not-allowed;'),
        _l = f.default.div(h || (h = i`
  width: 100%;
  ${ 0 }
`), _b => _b.readOnly && 'pointer-events: none; opacity: 0.6');
}), a.register('c3dpp', function(b, c) {
    _b(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('DyY59'),
        f = a('iWivW'),
        g = a('exB2i'),
        h = a('O3NOb');
    const i = _b => _b.filter(_b => {
            const j = (0, g.FetchItemOption)(_b);
            return !!j && !!(0, h.IsRoleLevelBetween)(j.minimumRoleLevel, j.maximumRoleLevel);
        }),
        j = _b => {
            const k = [];
            return f.default.worldOptions.itemOptions.forEach(a => {
                var l;
                (null === (l = _b.blockedItems) || void 0 === l ? void 0 : l.includes(a.id)) || (_b.allowedItems ? _b.allowedItems.includes(a.id) && k.push(a.id) : _b.allowedItemsCategories ? _b.allowedItemsCategories.includes(a.type) && k.push(a.id) : k.push(a.id));
            }), k;
        };
    var _k = _b => {
        const l = j(_b.optionProps),
            m = i(l).map(_b => ({
                value: _b,
                name: (0, g.FetchItemOption)(_b).editorName
            })),
            n = {
                placeholder: 'Select an item',
                allowEmpty: !0,
                options: m
            };
        let o = _b.value;
        return o && !m.find(l => l.value === _b.value) && (o = void 0), (0, d.jsx)(e.default, {
            ..._b,
            value: o,
            optionProps: n
        });
    };
}), a.register('iqvEV', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('DyY59'),
        f = a('iWivW'),
        g = a('dHtbx0');
    var _h = _b => {
        const i = f.default.worldOptions.terrainOptions.filter(_b => (0, g.CanAddTerrain)(_b.id)).map(_b => ({
                value: _b.id,
                name: _b.name
            })),
            j = {
                placeholder: 'Select a terrain',
                allowEmpty: _b.optionProps.allowEmpty,
                options: i
            };
        let k = _b.value;
        return k && !i.find(i => i.value === _b.value) && (k = void 0), (0, d.jsx)(e.default, {
            ..._b,
            value: k,
            optionProps: j
        });
    };
}), a.register('mY6WT', function(b, c) {
    _b(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('DyY59'),
        f = a('iWivW'),
        g = a('O3NOb'),
        h = a('2Xvuf');
    var _i = _b => {
        var j;
        const k = f.default.worldOptions.skinOptions.filter(_b => (0, g.IsRoleLevelBetween)(_b.minimumRoleLevel, _b.maximumRoleLevel)).map(_b => ({
            value: _b.id,
            name: _b.name,
            image: (0, h.default)('characters/spine/preview/' + _b.id.replace('character_', '') + '.png')
        }));
        var l;
        const m = {
            placeholder: 'Select a Gim',
            allowEmpty: null !== (l = null == _b || null === (j = _b.optionProps) || void 0 === j ? void 0 : j.allowEmpty) && void 0 !== l && l,
            options: k
        };
        let n = _b.value;
        return n && !k.find(j => j.value === _b.value) && (n = void 0), (0, d.jsx)(e.default, {
            ..._b,
            value: n,
            optionProps: m
        });
    };
}), a.register('xsJwy', function(b, c) {
    _b(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('led8j'),
        f = a('Axq+p'),
        g = a('c3dpp'),
        h = a('5/bn1'),
        i = a('9R7cy');
    let j, k, l, m, n, o, p, q, r, s, t = _b => _b;
    var _u = _b => {
        var v, w;
        return (0, d.jsx)(_v, {
            readOnly: _b.readOnly,
            children: (0, d.jsxs)(_w, {
                readOnly: _b.readOnly,
                children: [
                    null === (v = _b.value) || void 0 === v ? void 0 : v.map((v, w) => {
                        var x, y;
                        return (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsxs)(_x, {
                                    children: [
                                        (0, d.jsxs)(_y, {
                                            children: [
                                                'Item ',
                                                w + 1
                                            ]
                                        }),
                                        (0, d.jsx)(e.default, {
                                            onClick: () => {
                                                var z;
                                                const A = null !== (z = _b.value) && void 0 !== z ? z : [];
                                                A.splice(w, 1), _b.onChange(A);
                                            },
                                            type: 'danger',
                                            ariaLabel: 'Remove Item',
                                            size: 'small',
                                            children: (0, d.jsx)(i.default, {
                                                name: 'fas fa-trash'
                                            })
                                        })
                                    ]
                                }),
                                (0, d.jsxs)(_z, {
                                    children: [
                                        (0, d.jsxs)(_A, {
                                            children: [
                                                (0, d.jsx)(_B, {
                                                    children: 'Item'
                                                }),
                                                (0, d.jsx)(_C, {
                                                    children: (0, d.jsx)(g.default, {
                                                        value: v.itemId,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = _b.value) && void 0 !== z ? z : [];
                                                            A[w].itemId = v, _b.onChange(A);
                                                        },
                                                        readOnly: _b.readOnly,
                                                        optionProps: _b.optionProps
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (x = _b.optionProps.amount) || void 0 === x ? void 0 : x.use) && (0, d.jsxs)(_A, {
                                            children: [
                                                (0, d.jsxs)(_B, {
                                                    children: [
                                                        _b.optionProps.amount.label || 'Amount',
                                                        ':'
                                                    ]
                                                }),
                                                (0, d.jsx)(_D, {
                                                    children: (0, d.jsx)(h.default, {
                                                        value: v.amount,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = _b.value) && void 0 !== z ? z : [];
                                                            A[w].amount = v, _b.onChange(A);
                                                        },
                                                        readOnly: _b.readOnly,
                                                        optionProps: {
                                                            min: _b.optionProps.amount.min,
                                                            max: _b.optionProps.amount.max,
                                                            step: _b.optionProps.amount.step
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (y = _b.optionProps.numParam) || void 0 === y ? void 0 : y.use) && (0, d.jsxs)(_A, {
                                            children: [
                                                (0, d.jsxs)(_B, {
                                                    children: [
                                                        _b.optionProps.numParam.label || 'Num Param',
                                                        ':'
                                                    ]
                                                }),
                                                (0, d.jsx)(_D, {
                                                    children: (0, d.jsx)(h.default, {
                                                        value: v.numParam,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = _b.value) && void 0 !== z ? z : [];
                                                            A[w].numParam = v, _b.onChange(A);
                                                        },
                                                        readOnly: _b.readOnly,
                                                        optionProps: {
                                                            min: _b.optionProps.numParam.min,
                                                            max: _b.optionProps.numParam.max,
                                                            step: _b.optionProps.numParam.step
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, w);
                    }),
                    (0, d.jsx)(_E, {
                        children: (0, d.jsx)(e.default, {
                            disabled: _b.readOnly || _b.optionProps.maxItems <= (null === (w = _b.value) || void 0 === w ? void 0 : w.length),
                            onClick: () => {
                                var x, y, z;
                                const A = null !== (z = _b.value) && void 0 !== z ? z : [];
                                var B, C;
                                A.push({
                                    itemId: void 0,
                                    amount: null !== (B = null === (x = _b.optionProps.amount) || void 0 === x ? void 0 : x.defaultValue) && void 0 !== B ? B : 0,
                                    numParam: null !== (C = null === (y = _b.optionProps.numParam) || void 0 === y ? void 0 : y.defaultValue) && void 0 !== C ? C : 0
                                }), _b.onChange(A);
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
    const _v = f.default.div(j || (j = t`
  width: 100%;
  ${ 0 }
`), _b => _b.readOnly && 'cursor: not-allowed;'),
        _w = f.default.div(k || (k = t`
  width: 100%;
  ${ 0 }
`), _b => _b.readOnly && 'pointer-events: none; opacity: 0.6'),
        _x = f.default.div(l || (l = t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`)),
        _y = f.default.div(m || (m = t`
  font-weight: bold;
  font-size: 1.1em;
`)),
        _z = f.default.div(n || (n = t`
  margin-left: 16px;
  margin-bottom: 24px;
`)),
        _A = f.default.div(o || (o = t`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`)),
        _B = f.default.div(p || (p = t`
  width: 120px;
  font-weight: 500;
`)),
        _C = f.default.div(q || (q = t`
  flex: 1;
  overflow: hidden;
`)),
        _D = f.default.div(r || (r = t`
  flex: 1;
  overflow: hidden;
`)),
        _E = f.default.div(s || (s = t`
  margin-top: 8px;
`));
}), a.register('pzzrm', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = _c(e).lazy(() => a('hDxNa'));
    var _g = _b => {
        const [h, i] = _c(e).useState(!1);
        return _c(e).useEffect(() => {
            _b.visible && i(!0);
        }, [_b.visible]), h ? (0, d.jsx)(_c(e).Suspense, {
            fallback: null,
            children: (0, d.jsx)(f, {
                ..._b
            })
        }) : null;
    };
}), a.register('hDxNa', function(_b, _c) {
    _b.exports = import('./' + a('HmN9A').resolve('h0LK7')).then(() => a('+9cKB'));
}), a.register('HmN9A', function(b, c) {
    var d, e;
    _f(b.exports, 'register', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'resolve', function() {
        return e;
    }, function(_f) {
        return e = _f;
    });
    var f = {};
    d = function(g) {
        for (var h = Object.keys(g), i = 0; i < h.length; i++)
            f[h[i]] = g[h[i]];
    }, e = function(g) {
        var h = f[g];
        if (null == h)
            throw new Error('Could not resolve bundle with id ' + g);
        return h;
    };
});