function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('RhbNx', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        grid: {
            singular: 'block',
            plural: 'blocks'
        },
        blocklyBlock: {
            singular: 'piece',
            plural: 'pieces'
        }
    };
}), c.register('WD3zy', function(b, k) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('UnUp5'),
        e = c('uPP4W'),
        f = c('am7L5');
    var g = () => {
        const {
            me: h,
            world: {
                devices: i
            }
        } = (0, f.default)(), [j, k] = e.useState('{}'), [l, m] = e.useState('{}'), [n, o] = e.useState('{}');
        e.useEffect(() => {
            const p = (0, d.reaction)(() => i.devices.get(h.editing.device.currentlyEditedDevice.id), h => {
                h && (k(JSON.stringify(h.options)), m(JSON.stringify({
                    x: h.x,
                    y: h.y
                })), h.hooks ? o(JSON.stringify(h.hooks)) : o('{}'));
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
}), c.register('G2sv1', function(b, u) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('c8w5r'),
        g = c('64TR40'),
        h = c('n/bs4'),
        i = c('qEw51'),
        j = c('5nJMd26'),
        k = c('/nMwY'),
        l = c('kcx+B'),
        m = c('Vlfxs'),
        n = c('D0n26'),
        o = c('eACxq'),
        p = c('j6MtH');
    const q = 'All Options',
        r = (0, m.observer)(a => {
            var s, t, u, v;
            const {
                device: w,
                deviceOption: x,
                position: y,
                options: z
            } = A, [B, C] = e.useState(s(x.optionSchema)), D = !(0, f.default)(), E = (A, s) => {
                D || ((0, n.EmitTutorialEvent)({
                    event: n.TutorialEventName.CHANGE_DEVICE_OPTION,
                    device: w,
                    option: A,
                    value: s
                }), (0, g.default)({
                    deviceOption: x,
                    id: w.id,
                    x: y.x,
                    y: y.y,
                    depth: w.layers.getOptionsDepth(),
                    layerId: w.layers.getOptionsLayer(),
                    name: w.name,
                    isPreview: !1,
                    options: {
                        ...z,
                        [A]: s
                    },
                    placedByClient: !0,
                    state: x.defaultState
                }));
            }, F = (0, d.jsx)(j.default, {
                size: 12,
                direction: 'vertical',
                className: 'maxWidth',
                children: (0, d.jsx)(h.default, {
                    device: w,
                    deviceOption: x,
                    options: z,
                    hooks: A.hooks,
                    readOnly: D,
                    handleOptionChange: E,
                    category: B === q ? void 0 : B,
                    setCategory: C
                })
            }), G = ((null === (s = x.optionSchema) || void 0 === s || null === (t = s.categories) || void 0 === t ? void 0 : t.categories) || []).filter(A => void 0 === A.supportedMapStyles || A.supportedMapStyles.includes((0, p.GetCurrentMapStyle)())).filter(A => {
                var H;
                return !(null === (H = A.hideIf) || void 0 === H ? void 0 : H.length) || !(0, o.ShouldHideFromHideIf)({
                    hideIf: A.hideIf,
                    options: z
                });
            });
            if (e.useEffect(() => {
                    B && B !== q && !G.some(A => A.id === B) && C(s(x.optionSchema));
                }, [
                    B,
                    G
                ]), !G || !G.length)
                return F;
            const H = [];
            G.forEach(A => {
                H.push({
                    id: A.id,
                    name: A.name
                });
            });
            return 'start' === (null === (u = x.optionSchema) || void 0 === u || null === (v = u.categories) || void 0 === v ? void 0 : v.showAllOptionsAt) || !1 ? H.unshift({
                id: q,
                name: q
            }) : H.push({
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
                    activeKey: B,
                    onChange: A => {
                        (0, l.playClickSound)(), C(A);
                    },
                    className: 'maxWidth',
                    style: {
                        marginTop: -18
                    },
                    size: 'large',
                    items: H.map(A => ({
                        label: A.name,
                        key: A.id,
                        children: F
                    }))
                })
            });
        }),
        s = a => {
            if (a.categories) {
                if ('start' === a.categories.showAllOptionsAt)
                    return q;
                if (a.categories.categories.length)
                    return a.categories.categories[0].id;
            }
            return q;
        };
    var t = u;
}), c.register('n/bs4', function(b, t) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('CynhE'),
        f = c('CisqC'),
        g = c('iqsJ7'),
        h = c('5nJMd26'),
        i = c('UzdPH'),
        j = c('2kyyR'),
        k = c('YimJ0'),
        l = c('iMnBi'),
        m = c('Wgw1x0'),
        n = c('Vlfxs'),
        o = c('am7L5'),
        p = c('8QQU2');
    var q = (0, n.observer)(a => {
        const {
            device: r,
            deviceOption: s,
            options: t,
            category: u,
            setCategory: v
        } = w, {
            me: {
                roleLevel: x
            }
        } = (0, o.default)(), y = x >= p.RoleLevelConsts.admin, z = (() => {
            let A = (0, e.CreateOptionsFromOptionSchema)({
                device: r,
                options: t,
                optionSchema: s.optionSchema
            }).filter(A => !u || !(!A.categories || !A.categories.includes(u))).filter(A => (0, f.CanModifyDeviceOption)(s.id, A.key));
            return (0, g.CanAddDeviceType)(s.id, t) || (A = [], u && v(void 0)), A;
        })();
        return z.length ? (0, d.jsx)(h.default, {
            size: 14,
            direction: 'vertical',
            className: 'maxWidth',
            children: z.map(s => (0, d.jsx)(j.default, {
                option: s,
                value: t[s.key],
                onChange: r => w.handleOptionChange(String(s.key), r),
                readOnly: w.readOnly,
                deviceId: r.id,
                deviceType: r.deviceOption.id,
                hooks: w.hooks,
                showHooks: y
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
}), c.register('CynhE', function(b, l) {
    a(b.exports, 'CreateOptionsFromOptionSchema', function() {
        return e;
    });
    var d = c('eACxq');
    const e = a => (0, d.FilterOutHiddenOptions)({
        device: a.device,
        options: a.options,
        optionSchema: a.optionSchema
    });
}), c.register('eACxq', function(b, l) {
    a(b.exports, 'ShouldHideFromHideIf', function() {
        return h;
    }), a(b.exports, 'FilterOutHiddenOptions', function() {
        return i;
    });
    var d = c('7X8h3'),
        e = c('ZH/OP');
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
        h = a => {
            var i;
            let j = !1;
            return (null === (i = a.hideIf) || void 0 === i ? void 0 : i.length) && a.hideIf.forEach(i => {
                i.every(i => {
                    var k;
                    const l = null !== (k = a.options[i.key]) && void 0 !== k ? k : void 0;
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
        i = a => {
            let j = a.optionSchema.options.filter(a => !a.option.hidden).filter(j => {
                var k;
                let l = !1;
                return (null === (k = j.option.hideIf) || void 0 === k ? void 0 : k.length) && (l = h({
                    hideIf: j.option.hideIf,
                    options: a.options
                })), !l;
            });
            if (a.device.deviceOption.id === d.default.prop) {
                var m, n, o, p;
                const q = a.device.options,
                    r = (0, e.default)(q.propId);
                if (!r)
                    return j;
                var s, t, u;
                const v = (null !== (s = null === (m = r.rectColliders) || void 0 === m ? void 0 : m.length) && void 0 !== s ? s : 0) + (null !== (t = null === (n = r.circleColliders) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (u = null === (o = r.ellipseColliders) || void 0 === o ? void 0 : o.length) && void 0 !== u ? u : 0) > 0;
                var w;
                const x = (null !== (w = null === (p = r.shadows) || void 0 === p ? void 0 : p.length) && void 0 !== w ? w : 0) > 0;
                j = j.filter(a => !(!x && f.includes(a.key)) && !(!v && g.includes(a.key)));
            }
            return j;
        };
}), c.register('CisqC', function(b, j) {
    a(b.exports, 'CanModifyDeviceOption', function() {
        return h;
    });
    var d = c('8QQU2'),
        e = c('AItc4'),
        f = c('BUfP2'),
        g = c('2hh8R');
    const h = (a, b) => {
        const i = (0, f.FetchDeviceOptionById)(a);
        if (!i)
            return !1;
        const j = i.optionSchema.options.find(a => a.key === b);
        if (!(0, e.CanModifyDeviceOptionForCurrentMapStyle)({
                deviceTypeId: a,
                optionName: b
            }))
            return !1;
        var k;
        const l = null !== (k = null == j ? void 0 : j.minimumRoleLevel) && void 0 !== k ? k : d.RoleLevelConsts.min;
        var m;
        const n = null !== (m = null == j ? void 0 : j.maximumRoleLevel) && void 0 !== m ? m : d.RoleLevelConsts.max;
        return (0, g.IsRoleLevelBetween)(l, n);
    };
}), c.register('AItc4', function(b, j) {
    a(b.exports, 'CanModifyDeviceOptionForCurrentMapStyle', function() {
        return f;
    });
    var d = c('BUfP2'),
        e = c('j6MtH');
    const f = a => {
        const {
            deviceTypeId: g,
            optionName: h
        } = i, j = (0, d.FetchDeviceOptionById)(g);
        if (!j)
            return !1;
        const k = j.optionSchema.options.find(i => i.key === h);
        return !!k && (!k.supportedMapStyles || k.supportedMapStyles.includes((0, e.GetCurrentMapStyle)()));
    };
}), c.register('2kyyR', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('UzdPH'),
        g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('4l3BV'),
        j = c('TG1Bf'),
        k = c('PjB0f');
    let l, m, n = a => a;
    var o = a => {
        const {
            option: p,
            value: q,
            onChange: r,
            readOnly: s
        } = t, {
            label: u,
            description: v
        } = p.option, [w, x, y] = (0, k.useBoolean)(!1);
        return (0, d.jsxs)(p, {
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
                                children: u
                            })
                        }),
                        t.showHooks ? (0, d.jsx)(e.default, {
                            size: 'small',
                            shape: 'circle',
                            type: 'link',
                            icon: (0, d.jsx)('i', {
                                className: 'far fa-cog'
                            }),
                            onClick: x
                        }) : null
                    ]
                }),
                v ? (0, d.jsx)('div', {
                    children: (0, d.jsx)(f.default.Text, {
                        italic: !0,
                        children: v
                    })
                }) : null,
                (0, d.jsx)(q, {
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
                    visible: w,
                    close: y,
                    ...t
                })
            ]
        });
    };
    const p = g.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`)),
        q = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = n``));
}), c.register('4l3BV', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Bm8iP'),
        f = c('qmwdt'),
        g = c('3n9jZ'),
        h = c('cWERZ'),
        i = c('7EBSZ'),
        j = c('Fa85i'),
        k = c('tTn7q'),
        l = c('QhlCS'),
        m = c('WPGVY');
    var n = a => {
        const {
            option: o,
            value: p,
            onChange: q
        } = r;
        return o.type === i.default.numberInput ? (0, d.jsx)(e.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.itemsList ? (0, d.jsx)(m.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.textInput ? (0, d.jsx)(g.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.select ? (0, d.jsx)(f.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.itemId ? (0, d.jsx)(j.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.skinId ? (0, d.jsx)(l.default, {
            value: p,
            onChange: q,
            readOnly: r.readOnly,
            optionProps: o.props
        }) : o.type === i.default.terrainId ? (0, d.jsx)(k.default, {
            optionProps: o.props,
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : o.type === i.default.color ? (0, d.jsx)(h.default, {
            value: p,
            onChange: q,
            readOnly: r.readOnly
        }) : null;
    };
}), c.register('Bm8iP', function(b, l) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('TNIOj'),
        f = c('5xmPL'),
        g = c('uPP4W');
    var h = a => {
        const {
            value: i,
            optionProps: j
        } = k, [l, m] = g.useState(i);
        g.useEffect(() => {
            m(i);
        }, [i]);
        const n = i => {
            if (null === i && k.optionProps.allowEmpty)
                return void m(void 0);
            let o = p;
            var q, r;
            j.step && p && (q = p, r = j.step, o = Math.round(q / r) * r), m(o);
        };
        return j.useSlider ? (0, d.jsx)(f.default, {
            value: l,
            onChange: n,
            onAfterChange: i => {
                m(i), k.onChange(i);
            },
            min: j.min,
            max: j.max,
            step: j.step,
            disabled: k.readOnly
        }) : (0, d.jsx)(e.default, {
            value: l,
            onChange: n,
            onBlur: () => {
                k.onChange(l);
            },
            min: j.min,
            max: j.max,
            step: j.step,
            style: {
                width: '100%'
            },
            disabled: k.readOnly,
            placeholder: 'Enter a value...'
        });
    };
}), c.register('qmwdt', function(b, o) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('Ly1h3'),
        f = c('5nJMd26'),
        g = c('uPP4W'),
        h = c('2hh8R'),
        i = c('crVjo2'),
        j = c('j6MtH');
    var k = a => {
        var l;
        const {
            optionProps: m
        } = n, o = g.useMemo(() => {
            if ('' !== n.value)
                return n.value;
        }, [n.value]), p = g.useMemo(() => m.options.some(n => 'Fugaz One' === n.value), [null == m ? void 0 : m.options]);
        g.useEffect(() => {
            p && m.options.forEach(n => {
                (0, i.default)({
                    familyName: n.name
                });
            });
        }, [p]);
        const q = null == m || null === (l = m.options) || void 0 === l ? void 0 : l.filter(n => !((null == n ? void 0 : n.supportedMapStyles) && !(null == n ? void 0 : n.supportedMapStyles.includes((0, j.GetCurrentMapStyle)()))) && (void 0 === (null == n ? void 0 : n.minimumRoleLevel) && void 0 === (null == n ? void 0 : n.maximumRoleLevel) || (0, h.IsRoleLevelBetween)(null == n ? void 0 : n.minimumRoleLevel, null == n ? void 0 : n.maximumRoleLevel)));
        if (!m || !q.length)
            return null;
        const r = l => {
            n.onChange(l);
        };
        return (0, d.jsx)(e.default, {
            value: null != o ? o : void 0,
            allowClear: m.allowEmpty,
            placeholder: m.placeholder || 'None Selected',
            onSelect: r,
            onClear: () => r(void 0),
            filterOption: (n, l) => !!(l && l.name && l.name.toString().toUpperCase && n && n.toUpperCase) && -1 !== l.name.toString().toUpperCase().indexOf(n.toUpperCase()),
            showSearch: !0,
            disabled: n.readOnly,
            style: {
                width: '100%'
            },
            children: q.map(n => (0, d.jsx)(e.default.Option, {
                value: n.value,
                name: n.name,
                style: p ? {
                    fontFamily: n.value
                } : void 0,
                children: n.image ? (0, d.jsxs)(f.default, {
                    direction: 'horizontal',
                    size: 6,
                    children: [
                        (0, d.jsx)('img', {
                            src: n.image,
                            style: {
                                maxHeight: 30,
                                maxWidth: 30
                            }
                        }),
                        (0, d.jsx)('div', {
                            children: n.name
                        })
                    ]
                }) : n.name
            }, `option-${ n.value }`))
        });
    };
}), c.register('3n9jZ', function(b, u) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('16ojk0'),
        f = c('c6x8w'),
        g = c('uPP4W'),
        h = c('JahBI'),
        i = c('TCkcb'),
        j = c('htVdm'),
        k = c('Wgw1x0'),
        l = c('QEVw+'),
        m = c('Dog9Y'),
        n = c('kgfxo'),
        o = c('n4GIU'),
        p = c('jDFNP');
    var q = a => {
        const {
            value: r,
            optionProps: s
        } = t, [u, v] = g.useState(t.value);
        g.useEffect(() => {
            v(r);
        }, [r]);
        const w = g.useMemo(() => {
                if (null == s ? void 0 : s.category) {
                    const x = (0, h.default)(s.category).map(x => ({
                        option: x
                    }));
                    if (s.category === j.default.property) {
                        const y = (0, i.GetPropertiesWithoutMatchingPropertyDevice)(),
                            z = x.filter(x => !y.includes(x.option));
                        return [
                            ...y.map(x => ({
                                option: x,
                                noMatchingDevice: !0
                            })),
                            ...z
                        ];
                    }
                    return x;
                }
                return [];
            }, []),
            x = () => {
                t.onChange(null == u ? void 0 : u.trim());
            };
        if (s.codeEditor)
            return (0, d.jsx)('div', {
                onBlur: x,
                children: (0, d.jsxs)(l.LiveProvider, {
                    noInline: !0,
                    code: u,
                    scope: {
                        MapButton: m.default,
                        CallAction: n.CallAction,
                        usePropertyValue: o.usePropertyValue,
                        useItemAmount: p.useItemAmount
                    },
                    children: [
                        (0, d.jsx)(l.LiveEditor, {
                            onChange: t => {
                                v(t);
                            }
                        }),
                        (0, d.jsx)(l.LiveError, {})
                    ]
                })
            });
        if (s.textArea)
            return (0, d.jsx)(f.default.TextArea, {
                value: u,
                onChange: t => v(t.target.value),
                onBlur: x,
                placeholder: s.placeholder,
                style: {
                    width: '100%'
                }
            });
        const y = (() => {
            if ((null == s ? void 0 : s.category) === j.default.property && w.length) {
                let z = [];
                if (w.some(z => z.noMatchingDevice)) {
                    const A = w.filter(z => z.noMatchingDevice),
                        B = w.filter(z => !z.noMatchingDevice);
                    if (z.push({
                            label: (0, d.jsxs)(d.Fragment, {
                                children: [
                                    'Properties without a corresponding Property',
                                    ' ',
                                    k.default.device.singular
                                ]
                            }),
                            options: A.map(z => ({
                                value: z.option
                            }))
                        }), B.length)
                        return z.push({
                            label: (0, d.jsx)(d.Fragment, {
                                children: 'All other properties'
                            }),
                            options: B.map(z => ({
                                value: z.option
                            }))
                        }), z;
                }
            }
            return w.map(t => ({
                value: t.option
            }));
        })();
        return (0, d.jsx)(e.default, {
            value: u,
            options: y,
            onChange: t => {
                v(t);
            },
            onBlur: x,
            style: {
                width: '100%'
            },
            placeholder: s.placeholder || 'Enter a value...',
            filterOption: (t, r) => {
                var z;
                return -1 !== (null === (z = r.name) || void 0 === z ? void 0 : z.toUpperCase().indexOf(t.toUpperCase()));
            },
            maxLength: s.maxLength,
            disabled: t.readOnly
        });
    };
}), c.register('JahBI', function(k, l) {
    a(k.exports, 'default', function() {
        return j;
    });
    var d = c('Z+Quh'),
        e = c('YmXYT'),
        f = c('R1+hf'),
        g = c('htVdm'),
        h = c('7Sbqr'),
        i = c('7EBSZ');
    var j = (a, c) => {
        if (!a)
            return [];
        const k = [];
        h.default.worldOptions.deviceOptions.forEach(b => {
            b.optionSchema.options.forEach(c => {
                if (c.option.type === i.default.textInput) {
                    var l;
                    const m = c.option;
                    (null == m || null === (l = m.props) || void 0 === l ? void 0 : l.category) === a && k.push({
                        deviceId: b.id,
                        optionKey: String(c.key)
                    });
                }
            });
        });
        const l = [],
            m = b => {
                if ((b = b.trim()).length)
                    if (a === g.default.channel && b.includes(',')) {
                        b.split(',').forEach(m);
                    } else
                        l.includes(b) || l.push(b);
            };
        return h.default.world.devices.devices.forEach(a => {
            k.map(a => a.deviceId).includes(a.deviceOption.id) && Object.keys(a.options || {}).forEach(b => {
                k.map(a => a.optionKey).includes(b) && a.options[b] && m(a.options[b]);
            });
        }), a === g.default.channel && (c && c.blockSlowOperations || h.default.world.devices.devices.forEach(a => {
            var n, o;
            null === (n = h.default.world.devices.codeGrids.get(a.id)) || void 0 === n || null === (o = n.items) || void 0 === o || o.forEach(a => {
                if (a.triggerType === f.default.broadcastMessage && a.triggerValue && m(a.triggerValue), a.json) {
                    const p = new(b(d)).Workspace();
                    b(d).serialization.workspaces.load(JSON.parse(a.json), p);
                    p.getAllBlocks(!0).forEach(a => {
                        if ((a.type === e.default.messageBroadcaster || a.type === e.default.playerProximityMessageBroadcaster) && a.getChildren(!0).length) {
                            const q = a.getChildren(!0)[0];
                            if ('text' === q.type) {
                                const r = q.getFieldValue('TEXT');
                                r && m(r);
                            }
                        }
                    }), p.dispose();
                }
            });
        })), a === g.default.property && (c && c.blockSlowOperations || h.default.world.devices.devices.forEach(a => {
            var n, o;
            null === (n = h.default.world.devices.codeGrids.get(a.id)) || void 0 === n || null === (o = n.items) || void 0 === o || o.forEach(a => {
                if (a.json) {
                    const p = new(b(d)).Workspace();
                    b(d).serialization.workspaces.load(JSON.parse(a.json), p);
                    p.getAllBlocks(!0).forEach(a => {
                        if ((a.type === e.default.setProperty || a.type === e.default.getProperty || a.type === e.default.playerProximityGetProperty || a.type === e.default.playerProximitySetProperty) && a.getChildren(!0).length) {
                            const q = a.getChildren(!0)[0];
                            if ('text' === q.type) {
                                const r = q.getFieldValue('TEXT');
                                r && m(r);
                            }
                        }
                    }), p.dispose();
                }
            });
        })), l;
    };
}), c.register('YmXYT', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        messageBroadcaster: 'message_broadcaster',
        setProperty: 'set_property',
        getProperty: 'get_property',
        playerProximityMessageBroadcaster: 'other_character_message_broadcaster',
        playerProximitySetProperty: 'other_character_set_property',
        playerProximityGetProperty: 'other_character_get_property'
    };
}), c.register('R1+hf', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        broadcastMessage: 'channel_radio'
    };
}), c.register('htVdm', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        channel: 'channel',
        property: 'property'
    };
}), c.register('7EBSZ', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).textInput = 'textInput', e.numberInput = 'numberInput', e.select = 'select', e.color = 'color', e.itemId = 'itemId', e.terrainId = 'terrainId', e.skinId = 'skinId', e.itemsList = 'itemsList';
    var f = g;
}), c.register('TCkcb', function(b, l) {
    a(b.exports, 'GetPropertiesWithoutMatchingPropertyDevice', function() {
        return h;
    });
    var d = c('7Sbqr'),
        e = c('7X8h3'),
        f = c('JahBI'),
        g = c('htVdm');
    const h = () => {
        const i = [];
        d.default.world.devices.devices.forEach(b => {
            if (b.deviceOption.id === e.default.property) {
                const j = b.options;
                i.push(j.propertyName);
            }
        });
        return (0, f.default)(g.default.property).filter(b => !i.includes(b));
    };
}), c.register('cWERZ', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('WtdZG'),
        f = c('h99Nu');
    let g, h, i = a => a;
    var j = a => {
        const k = (0, e.useDebounceCallback)(k => {
            a.onChange(k);
        }, 350);
        return (0, d.jsx)(k, {
            readOnly: a.readOnly,
            children: (0, d.jsx)(l, {
                readOnly: a.readOnly,
                children: (0, d.jsx)('input', {
                    type: 'color',
                    className: 'maxWidth',
                    disabled: a.readOnly,
                    value: a.value,
                    onChange: a => k(a.target.value)
                })
            })
        });
    };
    const k = f.default.div(g || (g = i`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'cursor: not-allowed;'),
        l = f.default.div(h || (h = i`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'pointer-events: none; opacity: 0.6');
}), c.register('Fa85i', function(b, l) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('qmwdt'),
        f = c('7Sbqr'),
        g = c('wF1dp'),
        h = c('2hh8R');
    const i = a => a.filter(a => {
            const j = (0, g.FetchItemOption)(a);
            return !!j && !!(0, h.IsRoleLevelBetween)(j.minimumRoleLevel, j.maximumRoleLevel);
        }),
        j = a => {
            const k = [];
            return f.default.worldOptions.itemOptions.forEach(c => {
                var l;
                (null === (l = a.blockedItems) || void 0 === l ? void 0 : l.includes(c.id)) || (a.allowedItems ? a.allowedItems.includes(c.id) && k.push(c.id) : a.allowedItemsCategories ? a.allowedItemsCategories.includes(c.type) && k.push(c.id) : k.push(c.id));
            }), k;
        };
    var k = a => {
        const l = j(a.optionProps),
            m = i(l).map(a => ({
                value: a,
                name: (0, g.FetchItemOption)(a).editorName
            })),
            n = {
                placeholder: 'Select an item',
                allowEmpty: !0,
                options: m
            };
        let o = a.value;
        return o && !m.find(l => l.value === a.value) && (o = void 0), (0, d.jsx)(e.default, {
            ...a,
            value: o,
            optionProps: n
        });
    };
}), c.register('tTn7q', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('qmwdt'),
        f = c('7Sbqr'),
        g = c('SDOhx0');
    var h = a => {
        const i = f.default.worldOptions.terrainOptions.filter(a => (0, g.CanAddTerrain)(a.id)).map(a => ({
                value: a.id,
                name: a.name
            })),
            j = {
                placeholder: 'Select a terrain',
                allowEmpty: a.optionProps.allowEmpty,
                options: i
            };
        let k = a.value;
        return k && !i.find(i => i.value === a.value) && (k = void 0), (0, d.jsx)(e.default, {
            ...a,
            value: k,
            optionProps: j
        });
    };
}), c.register('QhlCS', function(b, l) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('qmwdt'),
        f = c('7Sbqr'),
        g = c('2hh8R'),
        h = c('JJQ0+');
    var i = a => {
        var j;
        const k = f.default.worldOptions.skinOptions.filter(a => (0, g.IsRoleLevelBetween)(a.minimumRoleLevel, a.maximumRoleLevel)).map(a => ({
            value: a.id,
            name: a.name,
            image: (0, h.default)('characters/spine/preview/' + a.id.replace('character_', '') + '.png')
        }));
        var l;
        const m = {
            placeholder: 'Select a Gim',
            allowEmpty: null !== (l = null == a || null === (j = a.optionProps) || void 0 === j ? void 0 : j.allowEmpty) && void 0 !== l && l,
            options: k
        };
        let n = a.value;
        return n && !k.find(j => j.value === a.value) && (n = void 0), (0, d.jsx)(e.default, {
            ...a,
            value: n,
            optionProps: m
        });
    };
}), c.register('WPGVY', function(b, x) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('Dog9Y'),
        f = c('h99Nu'),
        g = c('Fa85i'),
        h = c('Bm8iP'),
        i = c('iMnBi');
    let j, k, l, m, n, o, p, q, r, s, t = a => a;
    var u = a => {
        var v, w;
        return (0, d.jsx)(v, {
            readOnly: a.readOnly,
            children: (0, d.jsxs)(w, {
                readOnly: a.readOnly,
                children: [
                    null === (v = a.value) || void 0 === v ? void 0 : v.map((v, w) => {
                        var x, y;
                        return (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsxs)(x, {
                                    children: [
                                        (0, d.jsxs)(y, {
                                            children: [
                                                'Item ',
                                                w + 1
                                            ]
                                        }),
                                        (0, d.jsx)(e.default, {
                                            onClick: () => {
                                                var z;
                                                const A = null !== (z = a.value) && void 0 !== z ? z : [];
                                                A.splice(w, 1), a.onChange(A);
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
                                (0, d.jsxs)(z, {
                                    children: [
                                        (0, d.jsxs)(A, {
                                            children: [
                                                (0, d.jsx)(B, {
                                                    children: 'Item'
                                                }),
                                                (0, d.jsx)(C, {
                                                    children: (0, d.jsx)(g.default, {
                                                        value: v.itemId,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = a.value) && void 0 !== z ? z : [];
                                                            A[w].itemId = v, a.onChange(A);
                                                        },
                                                        readOnly: a.readOnly,
                                                        optionProps: a.optionProps
                                                    })
                                                })
                                            ]
                                        }),
                                        (null === (x = a.optionProps.amount) || void 0 === x ? void 0 : x.use) && (0, d.jsxs)(A, {
                                            children: [
                                                (0, d.jsxs)(B, {
                                                    children: [
                                                        a.optionProps.amount.label || 'Amount',
                                                        ':'
                                                    ]
                                                }),
                                                (0, d.jsx)(D, {
                                                    children: (0, d.jsx)(h.default, {
                                                        value: v.amount,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = a.value) && void 0 !== z ? z : [];
                                                            A[w].amount = v, a.onChange(A);
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
                                        (null === (y = a.optionProps.numParam) || void 0 === y ? void 0 : y.use) && (0, d.jsxs)(A, {
                                            children: [
                                                (0, d.jsxs)(B, {
                                                    children: [
                                                        a.optionProps.numParam.label || 'Num Param',
                                                        ':'
                                                    ]
                                                }),
                                                (0, d.jsx)(D, {
                                                    children: (0, d.jsx)(h.default, {
                                                        value: v.numParam,
                                                        onChange: v => {
                                                            var z;
                                                            const A = null !== (z = a.value) && void 0 !== z ? z : [];
                                                            A[w].numParam = v, a.onChange(A);
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
                        }, w);
                    }),
                    (0, d.jsx)(E, {
                        children: (0, d.jsx)(e.default, {
                            disabled: a.readOnly || a.optionProps.maxItems <= (null === (w = a.value) || void 0 === w ? void 0 : w.length),
                            onClick: () => {
                                var x, y, z;
                                const A = null !== (z = a.value) && void 0 !== z ? z : [];
                                var B, C;
                                A.push({
                                    itemId: void 0,
                                    amount: null !== (B = null === (x = a.optionProps.amount) || void 0 === x ? void 0 : x.defaultValue) && void 0 !== B ? B : 0,
                                    numParam: null !== (C = null === (y = a.optionProps.numParam) || void 0 === y ? void 0 : y.defaultValue) && void 0 !== C ? C : 0
                                }), a.onChange(A);
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
    const v = f.default.div(j || (j = t`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'cursor: not-allowed;'),
        w = f.default.div(k || (k = t`
  width: 100%;
  ${ 0 }
`), a => a.readOnly && 'pointer-events: none; opacity: 0.6'),
        x = f.default.div(l || (l = t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`)),
        y = f.default.div(m || (m = t`
  font-weight: bold;
  font-size: 1.1em;
`)),
        z = f.default.div(n || (n = t`
  margin-left: 16px;
  margin-bottom: 24px;
`)),
        A = f.default.div(o || (o = t`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`)),
        B = f.default.div(p || (p = t`
  width: 120px;
  font-weight: 500;
`)),
        C = f.default.div(q || (q = t`
  flex: 1;
  overflow: hidden;
`)),
        D = f.default.div(r || (r = t`
  flex: 1;
  overflow: hidden;
`)),
        E = f.default.div(s || (s = t`
  margin-top: 8px;
`));
}), c.register('TG1Bf', function(i, e) {
    a(i.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = b(e).lazy(() => c('d2Ohl'));
    var g = a => {
        const [h, i] = b(e).useState(!1);
        return b(e).useEffect(() => {
            a.visible && i(!0);
        }, [a.visible]), h ? (0, d.jsx)(b(e).Suspense, {
            fallback: null,
            children: (0, d.jsx)(f, {
                ...a
            })
        }) : null;
    };
}), c.register('d2Ohl', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('h0LK7')).then(() => c('rAQ73'));
}), c.register('tIOy4', function(b, c) {
    var d, e;
    a(b.exports, 'register', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'resolve', function() {
        return e;
    }, function(a) {
        return e = a;
    });
    var f = {};
    d = function(a) {
        for (var g = Object.keys(a), h = 0; h < g.length; h++)
            f[g[h]] = a[g[h]];
    }, e = function(a) {
        var g = f[a];
        if (null == g)
            throw new Error('Could not resolve bundle with id ' + a);
        return g;
    };
});