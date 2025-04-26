function a(a, b, l, j) {
    Object.defineProperty(a, b, {
        get: l,
        set: j,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('sHGAj', function(l, j) {
    a(l.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ'),
        d = b('Ly1h3'),
        e = b('2gkXu26'),
        f = b('oyXSd');
    var g = a => (0, c.jsx)(f.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, c.jsx)(d.default, {
            value: a.value,
            style: {
                width: a.customWidth || e.default.optionWidth
            },
            size: 'large',
            onChange: b => a.onValueChanged(b),
            disabled: a.readOnly,
            children: a.options.map(b => (0, c.jsx)(d.default.Option, {
                value: b.value,
                children: b.name
            }, `${ a.title || 'no-title' }-${ b.value }`))
        })
    });
}), b.register('oyXSd', function(l, j) {
    a(l.exports, 'default', function() {
        return e;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('+UK2/');
    var e = a => (0, c.jsxs)(d.OptionContainer, {
        children: [
            (0, c.jsxs)(d.OptionInfoContainer, {
                children: [
                    a.emoji ? (0, c.jsx)(d.OptionEmoji, {
                        children: a.emoji
                    }) : null,
                    (0, c.jsxs)('div', {
                        children: [
                            (0, c.jsx)(d.OptionTitle, {
                                children: a.title
                            }),
                            a.description ? (0, c.jsx)(d.OptionDescription, {
                                children: a.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, c.jsx)(d.OptionChangerContainer, {
                children: a.children
            })
        ]
    });
}), b.register('+UK2/', function(l, j) {
    a(l.exports, 'OptionContainer', function() {
        return l;
    }), a(l.exports, 'OptionInfoContainer', function() {
        return m;
    }), a(l.exports, 'OptionEmoji', function() {
        return n;
    }), a(l.exports, 'OptionTitle', function() {
        return o;
    }), a(l.exports, 'OptionDescription', function() {
        return p;
    }), a(l.exports, 'OptionChangerContainer', function() {
        return q;
    });
    var c = b('gSUVO'),
        d = b('h99Nu');
    let e, f, g, h, i, j, k = a => a;
    const l = d.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(e || (e = k`
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
`)),
        m = d.default.div.attrs({
            className: 'flex vc'
        })(f || (f = k``)),
        n = d.default.div(g || (g = k`
  font-size: 23px;
  margin-right: 10px;
`)),
        o = d.default.div(h || (h = k`
  font-size: 23px;
  font-weight: ${ 0 };
`), c.FontWeights.Bold),
        p = d.default.div(i || (i = k`
  font-size: 15px;
  margin-top: -2px;
`)),
        q = d.default.div(j || (j = k`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), b.register('Zl/uU', function(l, j) {
    a(l.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('2gkXu26'),
        f = b('iEGOV'),
        g = b('oyXSd'),
        h = b('4/f+U'),
        i = b('ntvHp');
    var j = a => {
        const k = d.useCallback(k => {
            if ((0, h.isNil)(k) && a.allowEmpty)
                return k;
            let l = k ? a.step ? Math.round(k / a.step) * a.step : k : 0;
            return !(0, h.isNil)(a.min) && l < a.min ? l = a.min : !(0, h.isNil)(a.max) && l > a.max && (l = a.max), l;
        }, [
            a.max,
            a.min,
            a.step
        ]);
        d.useEffect(() => {
            (0, h.isNil)(a.value) || a.max && a.value > a.max && l(k(a.max));
        }, [
            a.value,
            a.max
        ]);
        const l = l => {
            a.onValueChanged(k(l));
        };
        return (0, c.jsx)(g.default, {
            emoji: a.emoji,
            title: a.title,
            description: a.description,
            children: (0, c.jsx)(i.default, {
                size: 'large',
                formatter: f.default,
                value: a.value,
                max: a.max,
                min: a.min,
                step: a.step,
                style: {
                    width: a.customWidth || e.default.optionWidth
                },
                onChange: l,
                disabled: a.readOnly
            })
        });
    };
}), b.register('iEGOV', function(i, j) {
    a(i.exports, 'default', function() {
        return d;
    });
    var c = b('PjB0f');
    var d = a => '' === a ? '' : isNaN(Number(a)) ? String(a) : (0, c.numberWithCommas)(Number(a));
}), b.register('ntvHp', function(i, j) {
    a(i.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ'),
        d = b('TNIOj'),
        e = b('uPP4W'),
        f = b('PjB0f');
    var g = a => {
        const [h, i] = e.useState(a.value), [j, k] = e.useState(a.value), [l, m, n] = (0, f.useBoolean)(!1);
        e.useEffect(() => {
            k(a.value), i(a.value);
        }, [a.value]);
        return (0, c.jsx)(d.default, {
            ...a,
            value: l ? h : j,
            onChange: a => {
                i(a);
            },
            onFocus: m,
            onBlur: () => {
                h !== j && a.onChange(h), n(), i(a.value);
            }
        });
    };
}), b.register('lcKX8', function(g, j) {
    a(g.exports, 'default', function() {
        return g;
    });
    var c = b('4/f+U'),
        d = b('uzjvO4'),
        e = b('SprP3');
    const f = (a, b) => {
        var g;
        return null === (g = JSON.parse(localStorage.getItem(e.LocalStorageNames.hookSavedOptions) || '{}')[b]) || void 0 === g ? void 0 : g[a];
    };
    var g = a => {
        var h;
        const {
            hookJSON: i,
            experienceId: j,
            kitId: k
        } = l, m = {};
        return null == i || null === (h = i.hooks) || void 0 === h || h.forEach(l => {
            if (l.type === d.HookType.kit)
                m[l.key] = k || '';
            else if (l.type == d.HookType.selectBox) {
                const n = l.options;
                if (n.options.length) {
                    let o = n.options.find(l => l === n.defaultOption) || n.options[0];
                    if (j) {
                        const p = f(l.key, j);
                        if (p) {
                            const q = n.options.find(q => q === p);
                            q && (o = q);
                        }
                    }
                    o && (m[l.key] = o);
                }
            } else if (l.type === d.HookType.number) {
                const o = l.options;
                let p = o.defaultValue;
                if (j) {
                    const q = f(l.key, j);
                    if (!(0, c.isNil)(q) && 'number' == typeof q) {
                        let r = !1;
                        ((0, c.isNil)(o.min) || q > o.min) && ((0, c.isNil)(o.max) || q < o.max) && ((0, c.isNil)(o.step) || q % o.step == 0) && (r = !0), r && (p = q);
                    }
                }
                m[l.key] = p;
            }
        }), m;
    };
}), b.register('RxXGC', function(m, n) {
    a(m.exports, 'default', function() {
        return k;
    });
    var c = b('8kSQZ'),
        d = b('UnUp5'),
        e = b('Vlfxs'),
        f = b('uPP4W'),
        g = b('X12rx'),
        h = b('ioF/t'),
        i = b('9t6Nl'),
        j = b('lcKX8');
    var k = (0, e.observer)(a => {
        const [l] = f.useState(() => (0, d.observable)(a.defaultState || (0, j.default)({
            hookJSON: a.hooks
        }))), m = (a, m) => {
            l[a] = m;
        }, n = (0, d.toJS)(l), o = JSON.stringify(n);
        f.useEffect(() => {
            a.onConnectedResourcesChange && a.onConnectedResourcesChange((0, h.default)(a, n)), a.readOnly || a.onStateChange && a.onStateChange(n);
        }, [
            o,
            a.readOnly
        ]);
        const p = (0, i.default)(a, n);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                a.header ? a.header(p.length) : null,
                p.map((l, d) => (0, c.jsxs)(f.Fragment, {
                    children: [
                        (0, c.jsx)(g.default, {
                            hook: l,
                            state: n,
                            modifyState: m,
                            location: a.location,
                            readOnly: a.readOnly
                        }),
                        d !== p.length - 1 && (0, c.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ l.key }`)),
                a.footer ? a.footer(p.length) : null
            ]
        });
    });
}), b.register('X12rx', function(j, c) {
    a(j.exports, 'default', function() {
        return h;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('uzjvO4'),
        e = b('Zbna5'),
        f = b('QLqxR'),
        g = b('q6rhe');
    var h = a => {
        const i = a.state[a.hook.key],
            j = i => {
                a.modifyState(a.hook.key, i);
            };
        return a.hook.type === d.HookType.selectBox ? (0, c.jsx)(g.default, {
            value: i,
            onChange: j,
            hook: a.hook,
            readOnly: a.readOnly
        }) : a.hook.type === d.HookType.kit ? (0, c.jsx)(e.default, {
            value: i,
            onChange: j,
            hook: a.hook,
            location: a.location,
            readOnly: a.readOnly
        }) : a.hook.type === d.HookType.number ? (0, c.jsx)(f.default, {
            value: i,
            onChange: j,
            hook: a.hook,
            readOnly: a.readOnly
        }) : null;
    };
}), b.register('Zbna5', function(i, c) {
    a(i.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('hAeIC'),
        e = b('lZ+7Q'),
        f = b('4564n');
    var g = a => {
        let {
            title: h,
            description: i
        } = (0, f.default)(a.hook);
        if (a.location === e.HookFormLocation.editor) {
            const j = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            i ? i += ` - ${ j }` : i = j;
        }
        return (0, c.jsx)(d.default, {
            title: h,
            description: i,
            value: a.value,
            onValueChanged: a.onChange,
            placeholder: 'Kit ID',
            readOnly: a.readOnly
        });
    };
}), b.register('hAeIC', function(e, c) {
    a(e.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('c6x8w'),
        e = b('2gkXu26'),
        f = b('oyXSd');
    var g = a => (0, c.jsx)(f.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, c.jsx)(d.default, {
            size: 'large',
            value: a.value,
            placeholder: a.placeholder,
            style: {
                width: a.customWidth || e.default.optionWidth
            },
            onChange: b => {
                a.onValueChanged(b.target.value);
            },
            disabled: a.readOnly
        })
    });
}), b.register('lZ+7Q', function(b, e) {
    let c;
    var d;
    let e;
    a(b.exports, 'HookFormLocation', function() {
        return c;
    }), a(b.exports, 'IHookConnectedResourceType', function() {
        return e;
    }), (d = c || (c = {})).editor = 'editor', d.experiencePicker = 'experiencePicker', (e || (e = {})).kit = 'kit';
}), b.register('4564n', function(b, e) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = a => {
        let d, e;
        return d = a.key, a.displayName && (d = a.displayName), a.displayDescription && (e = a.displayDescription), {
            title: d,
            description: e
        };
    };
}), b.register('QLqxR', function(i, j) {
    a(i.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ'),
        d = b('4/f+U');
    b('uPP4W');
    var e = b('Zl/uU'),
        f = b('4564n');
    var g = a => {
        const {
            title: h,
            description: i
        } = (0, f.default)(a.hook), j = a.hook.options;
        return (0, c.jsx)(e.default, {
            title: h,
            description: i,
            value: a.value,
            onValueChanged: h => {
                !(0, d.isNil)(h) || (0, d.isNil)(j.defaultValue) ? a.onChange(h): a.onChange(j.defaultValue);
            },
            min: j.min,
            max: j.max,
            step: j.step,
            allowEmpty: !0,
            readOnly: a.readOnly
        });
    };
}), b.register('q6rhe', function(h, i) {
    a(h.exports, 'default', function() {
        return f;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('sHGAj'),
        e = b('4564n');
    var f = a => {
        const {
            title: g,
            description: h
        } = (0, e.default)(a.hook), i = a.hook.options;
        return (0, c.jsx)(d.default, {
            title: g,
            description: h,
            value: a.value,
            onValueChanged: a.onChange,
            options: i.options.map(a => ({
                value: a,
                name: a
            })),
            readOnly: a.readOnly
        });
    };
}), b.register('ioF/t', function(h, h) {
    a(h.exports, 'default', function() {
        return g;
    });
    var c = b('4/f+U'),
        d = b('uzjvO4'),
        e = b('lZ+7Q'),
        f = b('9t6Nl');
    var g = (a, b) => {
        const h = [];
        return (0, f.default)({
            ...a,
            location: e.HookFormLocation.editor
        }, b).forEach(a => {
            a.type === d.HookType.kit && b[a.key] && h.push({
                type: e.IHookConnectedResourceType.kit,
                value: b[a.key]
            });
        }), (0, c.uniqBy)(h, 'value');
    };
}), b.register('9t6Nl', function(g, h) {
    a(g.exports, 'default', function() {
        return f;
    });
    var c = b('zPY9u'),
        d = b('uzjvO4'),
        e = b('lZ+7Q');
    var f = (a, b) => {
        var g, h;
        const i = [];
        return null == a || null === (g = a.hooks) || void 0 === g || null === (h = g.hooks) || void 0 === h || h.forEach(g => {
            var j;
            if (g.type === d.HookType.kit) {
                if (!!b[g.key] && a.location === e.HookFormLocation.experiencePicker)
                    return;
            }
            if (g.type === d.HookType.selectBox) {
                var k;
                const l = g.options;
                if (!(null == l || null === (k = l.options) || void 0 === k ? void 0 : k.length))
                    return;
            }
            (null == g || null === (j = g.hiddenScenarios) || void 0 === j ? void 0 : j.find(g => {
                var k, l;
                if (!!!(null === (k = g.conditions) || void 0 === k ? void 0 : k.length))
                    return !1;
                return !!(null === (l = g.conditions) || void 0 === l ? void 0 : l.every(g => {
                    if (g.type === c.HiddenConditionType.hookValue) {
                        const m = g.options,
                            n = m.value,
                            o = b[m.key];
                        if (m.compare === c.HookValueHiddenConditionCompare.equal) {
                            if (n == o)
                                return !0;
                        } else if (m.compare === c.HookValueHiddenConditionCompare.notEqual && n != o)
                            return !0;
                    } else if (g.type === c.HiddenConditionType.modeType) {
                        const p = m.modeType,
                            q = g.options;
                        return q.compare === c.ModeTypeHiddenConditionCompare.equal ? p === q.mode : p !== q.mode;
                    }
                    return !1;
                }));
            })) || i.push(g);
        }), i;
    };
}), b.register('zPY9u', function(b, o) {
    let c;
    var d;
    let e;
    var f;
    let g;
    var h;
    a(b.exports, 'HiddenConditionType', function() {
        return c;
    }), a(b.exports, 'HookValueHiddenConditionCompare', function() {
        return e;
    }), a(b.exports, 'ModeTypeHiddenConditionCompare', function() {
        return g;
    }), (d = c || (c = {})).hookValue = 'hookValue', d.modeType = 'modeType', (f = e || (e = {})).equal = 'EQUAL', f.notEqual = 'NOT_EQUAL', (h = g || (g = {})).equal = 'EQUAL', h.notEqual = 'NOT_EQUAL';
});