function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    var _i = j => (0, e.jsx)(h.default, {
        emoji: j.emoji,
        title: j.title,
        description: j.description,
        children: (0, e.jsx)(f.default, {
            value: j.value,
            style: { width: j.customWidth || g.default.optionWidth },
            size: 'large',
            onChange: k => j.onValueChanged(k),
            disabled: j.readOnly,
            children: j.options.map(k => (0, e.jsx)(f.default.Option, {
                value: k.value,
                children: k.name
            }, `${ j.title || 'no-title' }-${ k.value }`))
        })
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    var _g = h => (0, e.jsxs)(f.OptionContainer, {
        children: [
            (0, e.jsxs)(f.OptionInfoContainer, {
                children: [
                    h.emoji ? (0, e.jsx)(f.OptionEmoji, { children: h.emoji }) : null,
                    (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(f.OptionTitle, { children: h.title }),
                            h.description ? (0, e.jsx)(f.OptionDescription, { children: h.description }) : null
                        ]
                    })
                ]
            }),
            (0, e.jsx)(f.OptionChangerContainer, { children: h.children })
        ]
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'OptionContainer', function () {
        return _n;
    }), a(c.exports, 'OptionInfoContainer', function () {
        return _o;
    }), a(c.exports, 'OptionEmoji', function () {
        return _p;
    }), a(c.exports, 'OptionTitle', function () {
        return _q;
    }), a(c.exports, 'OptionDescription', function () {
        return _r;
    }), a(c.exports, 'OptionChangerContainer', function () {
        return _s;
    });
    var e = b('.....'), f = b('.....');
    let g, h, i, j, k, l, m = n => n;
    const _n = f.default.div.attrs({ className: 'maxWidth flex vc between' })(g || (g = m`
  box-sizing: border-box;
  padding: 13px 20px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.23s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`)), _o = f.default.div.attrs({ className: 'flex vc' })(h || (h = m``)), _p = f.default.div(i || (i = m`
  font-size: 23px;
  margin-right: 10px;
`)), _q = f.default.div(j || (j = m`
  font-size: 23px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold), _r = f.default.div(k || (k = m`
  font-size: 15px;
  margin-top: -2px;
`)), _s = f.default.div(l || (l = m`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    var _l = m => {
        const n = f.useCallback(o => {
            if ((0, j.isNil)(o) && m.allowEmpty)
                return o;
            let p = o ? m.step ? Math.round(o / m.step) * m.step : o : 0;
            return !(0, j.isNil)(m.min) && p < m.min ? p = m.min : !(0, j.isNil)(m.max) && p > m.max && (p = m.max), p;
        }, [
            m.max,
            m.min,
            m.step
        ]);
        f.useEffect(() => {
            (0, j.isNil)(m.value) || m.max && m.value > m.max && c(n(m.max));
        }, [
            m.value,
            m.max
        ]);
        const o = p => {
            m.onValueChanged(n(p));
        };
        return (0, e.jsx)(i.default, {
            emoji: m.emoji,
            title: m.title,
            description: m.description,
            children: (0, e.jsx)(k.default, {
                size: 'large',
                formatter: h.default,
                value: m.value,
                max: m.max,
                min: m.min,
                step: m.step,
                style: { width: m.customWidth || g.default.optionWidth },
                onChange: o,
                disabled: m.readOnly
            })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _f;
    });
    var e = b('.....');
    var _f = g => '' === g ? '' : isNaN(Number(g)) ? String(g) : (0, e.numberWithCommas)(Number(g));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    var _i = j => {
        const [k, l] = g.useState(j.value), [m, n] = g.useState(j.value), [o, p, q] = (0, h.useBoolean)(!1);
        g.useEffect(() => {
            n(j.value), l(j.value);
        }, [j.value]);
        return (0, e.jsx)(f.default, {
            ...j,
            value: o ? k : m,
            onChange: r => {
                l(r);
            },
            onFocus: p,
            onBlur: () => {
                k !== m && j.onChange(k), q(), l(j.value);
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = (i, j) => {
        var k;
        return null === (k = JSON.parse(localStorage.getItem(g.LocalStorageNames.hookSavedOptions) || '{}')[j]) || void 0 === k ? void 0 : k[i];
    };
    var _i = j => {
        var k;
        const {
                hookJSON: l,
                experienceId: m,
                kitId: n
            } = j, o = {};
        return null == l || null === (k = l.hooks) || void 0 === k || k.forEach(p => {
            if (p.type === f.HookType.kit)
                o[p.key] = n || '';
            else if (p.type == f.HookType.selectBox) {
                const q = p.options;
                if (q.options.length) {
                    let r = q.options.find(s => s === q.defaultOption) || q.options[0];
                    if (m) {
                        const s = h(p.key, m);
                        if (s) {
                            const t = q.options.find(u => u === s);
                            t && (r = t);
                        }
                    }
                    r && (o[t.key] = r);
                }
            } else if (t.type === f.HookType.number) {
                const t = t.options;
                let u = t.defaultValue;
                if (m) {
                    const v = h(t.key, m);
                    if (!(0, s.isNil)(v) && 'number' == typeof v) {
                        let w = !1;
                        ((0, s.isNil)(t.min) || v > t.min) && ((0, s.isNil)(t.max) || v < t.max) && ((0, s.isNil)(t.step) || v % t.step == 0) && (w = !0), w && (u = v);
                    }
                }
                o[t.key] = u;
            }
        }), o;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _m;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    var _m = (0, g.observer)(n => {
        const [o] = h.useState(() => (0, f.observable)(n.defaultState || (0, l.default)({ hookJSON: n.hooks }))), p = (q, r) => {
                o[q] = r;
            }, q = (0, f.toJS)(o), r = JSON.stringify(q);
        h.useEffect(() => {
            n.onConnectedResourcesChange && n.onConnectedResourcesChange((0, j.default)(n, q)), n.readOnly || n.onStateChange && n.onStateChange(q);
        }, [
            r,
            n.readOnly
        ]);
        const s = (0, k.default)(n, q);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                n.header ? n.header(s.length) : null,
                s.map((t, u) => (0, e.jsxs)(h.Fragment, {
                    children: [
                        (0, e.jsx)(i.default, {
                            hook: t,
                            state: q,
                            modifyState: p,
                            location: n.location,
                            readOnly: n.readOnly
                        }),
                        u !== s.length - 1 && (0, e.jsx)('div', { style: { height: 10 } })
                    ]
                }, `hook-form-${ t.key }`)),
                n.footer ? n.footer(s.length) : null
            ]
        });
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = k => {
        const l = k.state[k.hook.key], m = n => {
                k.modifyState(k.hook.key, n);
            };
        return k.hook.type === f.HookType.selectBox ? (0, e.jsx)(i.default, {
            value: l,
            onChange: m,
            hook: k.hook,
            readOnly: k.readOnly
        }) : k.hook.type === f.HookType.kit ? (0, e.jsx)(g.default, {
            value: l,
            onChange: m,
            hook: k.hook,
            location: k.location,
            readOnly: k.readOnly
        }) : k.hook.type === f.HookType.number ? (0, e.jsx)(h.default, {
            value: l,
            onChange: m,
            hook: k.hook,
            readOnly: k.readOnly
        }) : null;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    var _i = j => {
        let {
            title: k,
            description: l
        } = (0, h.default)(j.hook);
        if (j.location === g.HookFormLocation.editor) {
            const m = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            l ? l += ` - ${ m }` : l = m;
        }
        return (0, e.jsx)(f.default, {
            title: k,
            description: l,
            value: m.value,
            onValueChanged: m.onChange,
            placeholder: 'Kit ID',
            readOnly: m.readOnly
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    var _i = j => (0, e.jsx)(h.default, {
        emoji: j.emoji,
        title: j.title,
        description: j.description,
        children: (0, e.jsx)(f.default, {
            size: 'large',
            value: j.value,
            placeholder: j.placeholder,
            style: { width: j.customWidth || g.default.optionWidth },
            onChange: k => {
                j.onValueChanged(k.target.value);
            },
            disabled: j.readOnly
        })
    });
}), b.register('.....', function (c, d) {
    let e;
    var f;
    let g;
    a(c.exports, 'HookFormLocation', function () {
        return e;
    }), a(c.exports, 'IHookConnectedResourceType', function () {
        return g;
    }), (f = e || (e = {})).editor = 'editor', f.experiencePicker = 'experiencePicker', (g || (g = {})).kit = 'kit';
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = f => {
        let g, h;
        return g = f.key, f.displayName && (g = f.displayName), f.displayDescription && (h = f.displayDescription), {
            title: g,
            description: h
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....');
    var _i = j => {
        const {
                title: k,
                description: l
            } = (0, h.default)(j.hook), m = j.hook.options;
        return (0, e.jsx)(g.default, {
            title: k,
            description: l,
            value: j.value,
            onValueChanged: n => {
                !(0, f.isNil)(n) || (0, f.isNil)(m.defaultValue) ? j.onChange(n) : j.onChange(m.defaultValue);
            },
            min: m.min,
            max: m.max,
            step: m.step,
            allowEmpty: !0,
            readOnly: j.readOnly
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    var _h = i => {
        const {
                title: j,
                description: k
            } = (0, g.default)(i.hook), l = i.hook.options;
        return (0, e.jsx)(f.default, {
            title: j,
            description: k,
            value: i.value,
            onValueChanged: i.onChange,
            options: l.options.map(m => ({
                value: m,
                name: m
            })),
            readOnly: i.readOnly
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    var _i = (j, k) => {
        const l = [];
        return (0, h.default)({
            ...j,
            location: g.HookFormLocation.editor
        }, k).forEach(m => {
            m.type === f.HookType.kit && k[m.key] && l.push({
                type: g.IHookConnectedResourceType.kit,
                value: k[m.key]
            });
        }), (0, e.uniqBy)(l, 'value');
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    var _h = (i, j) => {
        var k, l;
        const m = [];
        return null == i || null === (k = i.hooks) || void 0 === k || null === (l = k.hooks) || void 0 === l || l.forEach(n => {
            var o;
            if (n.type === f.HookType.kit) {
                if (!!j[n.key] && i.location === g.HookFormLocation.experiencePicker)
                    return;
            }
            if (n.type === f.HookType.selectBox) {
                var p;
                const q = n.options;
                if (!(null == q || null === (p = q.options) || void 0 === p ? void 0 : p.length))
                    return;
            }
            (null == n || null === (o = n.hiddenScenarios) || void 0 === o ? void 0 : o.find(r => {
                var s, t;
                if (!!!(null === (s = r.conditions) || void 0 === s ? void 0 : s.length))
                    return !1;
                return !!(null === (t = r.conditions) || void 0 === t ? void 0 : t.every(u => {
                    if (u.type === e.HiddenConditionType.hookValue) {
                        const v = u.options, w = v.value, x = j[v.key];
                        if (v.compare === e.HookValueHiddenConditionCompare.equal) {
                            if (w == x)
                                return !0;
                        } else if (v.compare === e.HookValueHiddenConditionCompare.notEqual && w != x)
                            return !0;
                    } else if (u.type === e.HiddenConditionType.modeType) {
                        const y = v.modeType, z = u.options;
                        return z.compare === e.ModeTypeHiddenConditionCompare.equal ? y === z.mode : y !== z.mode;
                    }
                    return !1;
                }));
            })) || m.push(n);
        }), m;
    };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    a(c.exports, 'HiddenConditionType', function () {
        return e;
    }), a(c.exports, 'HookValueHiddenConditionCompare', function () {
        return g;
    }), a(c.exports, 'ModeTypeHiddenConditionCompare', function () {
        return i;
    }), (f = e || (e = {})).hookValue = 'hookValue', f.modeType = 'modeType', (h = g || (g = {})).equal = 'EQUAL', h.notEqual = 'NOT_EQUAL', (j = i || (i = {})).equal = 'EQUAL', j.notEqual = 'NOT_EQUAL';
});