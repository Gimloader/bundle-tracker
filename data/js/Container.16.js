function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Jvo89', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn'),
        f = b('u8Dt8'),
        g = b('P11ai26'),
        h = b('5OKvv');
    var _i = a => (0, e.jsx)(h.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, e.jsx)(f.default, {
            value: a.value,
            style: {
                width: a.customWidth || g.default.optionWidth
            },
            size: 'large',
            onChange: b => a.onValueChanged(b),
            disabled: a.readOnly,
            children: a.options.map(b => (0, e.jsx)(f.default.Option, {
                value: b.value,
                children: b.name
            }, `${ a.title || 'no-title' }-${ b.value }`))
        })
    });
}), b.register('5OKvv', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('d57qI');
    var _g = a => (0, e.jsxs)(f.OptionContainer, {
        children: [
            (0, e.jsxs)(f.OptionInfoContainer, {
                children: [
                    a.emoji ? (0, e.jsx)(f.OptionEmoji, {
                        children: a.emoji
                    }) : null,
                    (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(f.OptionTitle, {
                                children: a.title
                            }),
                            a.description ? (0, e.jsx)(f.OptionDescription, {
                                children: a.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, e.jsx)(f.OptionChangerContainer, {
                children: a.children
            })
        ]
    });
}), b.register('d57qI', function(c, d) {
    a(c.exports, 'OptionContainer', function() {
        return _n;
    }), a(c.exports, 'OptionInfoContainer', function() {
        return _o;
    }), a(c.exports, 'OptionEmoji', function() {
        return _p;
    }), a(c.exports, 'OptionTitle', function() {
        return _q;
    }), a(c.exports, 'OptionDescription', function() {
        return _r;
    }), a(c.exports, 'OptionChangerContainer', function() {
        return _s;
    });
    var e = b('Eh2Wh'),
        f = b('u4s09');
    let g, h, i, j, k, l, m = a => a;
    const _n = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(g || (g = m`
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
        _o = f.default.div.attrs({
            className: 'flex vc'
        })(h || (h = m``)),
        _p = f.default.div(i || (i = m`
  font-size: 23px;
  margin-right: 10px;
`)),
        _q = f.default.div(j || (j = m`
  font-size: 23px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold),
        _r = f.default.div(k || (k = m`
  font-size: 15px;
  margin-top: -2px;
`)),
        _s = f.default.div(l || (l = m`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), b.register('MzH3f', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('P11ai26'),
        h = b('pKeWm'),
        i = b('5OKvv'),
        j = b('9zaF+'),
        k = b('JcaZI');
    var _l = a => {
        const m = f.useCallback(m => {
            if ((0, j.isNil)(m) && a.allowEmpty)
                return m;
            let n = m ? a.step ? Math.round(m / a.step) * a.step : m : 0;
            return !(0, j.isNil)(a.min) && n < a.min ? n = a.min : !(0, j.isNil)(a.max) && n > a.max && (n = a.max), n;
        }, [
            a.max,
            a.min,
            a.step
        ]);
        f.useEffect(() => {
            (0, j.isNil)(a.value) || a.max && a.value > a.max && c(m(a.max));
        }, [
            a.value,
            a.max
        ]);
        const n = n => {
            a.onValueChanged(m(n));
        };
        return (0, e.jsx)(i.default, {
            emoji: a.emoji,
            title: a.title,
            description: a.description,
            children: (0, e.jsx)(k.default, {
                size: 'large',
                formatter: h.default,
                value: a.value,
                max: a.max,
                min: a.min,
                step: a.step,
                style: {
                    width: a.customWidth || g.default.optionWidth
                },
                onChange: n,
                disabled: a.readOnly
            })
        });
    };
}), b.register('pKeWm', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    var e = b('quE27');
    var _f = a => '' === a ? '' : isNaN(Number(a)) ? String(a) : (0, e.numberWithCommas)(Number(a));
}), b.register('JcaZI', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn'),
        f = b('lhOnW'),
        g = b('O0Kav'),
        h = b('quE27');
    var _i = a => {
        const [j, k] = g.useState(a.value), [l, m] = g.useState(a.value), [n, o, p] = (0, h.useBoolean)(!1);
        g.useEffect(() => {
            m(a.value), k(a.value);
        }, [a.value]);
        return (0, e.jsx)(f.default, {
            ...a,
            value: n ? j : l,
            onChange: a => {
                k(a);
            },
            onFocus: o,
            onBlur: () => {
                j !== l && a.onChange(j), p(), k(a.value);
            }
        });
    };
}), b.register('SnVJ+', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('9zaF+'),
        f = b('RBtfx4'),
        g = b('Qjtm3');
    const h = (a, b) => {
        var i;
        return null === (i = JSON.parse(localStorage.getItem(g.LocalStorageNames.hookSavedOptions) || '{}')[b]) || void 0 === i ? void 0 : i[a];
    };
    var _i = a => {
        var j;
        const {
            hookJSON: k,
            experienceId: l,
            kitId: m
        } = a, n = {};
        return null == k || null === (j = k.hooks) || void 0 === j || j.forEach(a => {
            if (a.type === f.HookType.kit)
                n[a.key] = m || '';
            else if (a.type == f.HookType.selectBox) {
                const o = a.options;
                if (o.options.length) {
                    let p = o.options.find(a => a === o.defaultOption) || o.options[0];
                    if (l) {
                        const q = h(a.key, l);
                        if (q) {
                            const r = o.options.find(r => r === q);
                            r && (p = r);
                        }
                    }
                    p && (n[a.key] = p);
                }
            } else if (a.type === f.HookType.number) {
                const o = a.options;
                let p = o.defaultValue;
                if (l) {
                    const q = h(a.key, l);
                    if (!(0, e.isNil)(q) && 'number' == typeof q) {
                        let r = !1;
                        ((0, e.isNil)(o.min) || q > o.min) && ((0, e.isNil)(o.max) || q < o.max) && ((0, e.isNil)(o.step) || q % o.step == 0) && (r = !0), r && (p = q);
                    }
                }
                n[a.key] = p;
            }
        }), n;
    };
}), b.register('130cP', function(c, d) {
    a(c.exports, 'default', function() {
        return _m;
    });
    var e = b('gRbUn'),
        f = b('JkQCT'),
        g = b('6jmvl'),
        h = b('O0Kav'),
        i = b('spJw8'),
        j = b('CQMa/'),
        k = b('ejuPT'),
        l = b('SnVJ+');
    var _m = (0, g.observer)(a => {
        const [n] = h.useState(() => (0, f.observable)(a.defaultState || (0, l.default)({
            hookJSON: a.hooks
        }))), o = (a, o) => {
            n[a] = o;
        }, p = (0, f.toJS)(n), q = JSON.stringify(p);
        h.useEffect(() => {
            a.onConnectedResourcesChange && a.onConnectedResourcesChange((0, j.default)(a, p)), a.readOnly || a.onStateChange && a.onStateChange(p);
        }, [
            q,
            a.readOnly
        ]);
        const r = (0, k.default)(a, p);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                a.header ? a.header(r.length) : null,
                r.map((n, f) => (0, e.jsxs)(h.Fragment, {
                    children: [
                        (0, e.jsx)(i.default, {
                            hook: n,
                            state: p,
                            modifyState: o,
                            location: a.location,
                            readOnly: a.readOnly
                        }),
                        f !== r.length - 1 && (0, e.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ n.key }`)),
                a.footer ? a.footer(r.length) : null
            ]
        });
    });
}), b.register('spJw8', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('RBtfx4'),
        g = b('lO7Wq'),
        h = b('hbFAw'),
        i = b('m9fag');
    var _j = a => {
        const k = a.state[a.hook.key],
            l = k => {
                a.modifyState(a.hook.key, k);
            };
        return a.hook.type === f.HookType.selectBox ? (0, e.jsx)(i.default, {
            value: k,
            onChange: l,
            hook: a.hook,
            readOnly: a.readOnly
        }) : a.hook.type === f.HookType.kit ? (0, e.jsx)(g.default, {
            value: k,
            onChange: l,
            hook: a.hook,
            location: a.location,
            readOnly: a.readOnly
        }) : a.hook.type === f.HookType.number ? (0, e.jsx)(h.default, {
            value: k,
            onChange: l,
            hook: a.hook,
            readOnly: a.readOnly
        }) : null;
    };
}), b.register('lO7Wq', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('siXyq'),
        g = b('9kbT6'),
        h = b('skKj1');
    var _i = a => {
        let {
            title: j,
            description: k
        } = (0, h.default)(a.hook);
        if (a.location === g.HookFormLocation.editor) {
            const l = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            k ? k += ` - ${ l }` : k = l;
        }
        return (0, e.jsx)(f.default, {
            title: j,
            description: k,
            value: a.value,
            onValueChanged: a.onChange,
            placeholder: 'Kit ID',
            readOnly: a.readOnly
        });
    };
}), b.register('siXyq', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('aevdF'),
        g = b('P11ai26'),
        h = b('5OKvv');
    var _i = a => (0, e.jsx)(h.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, e.jsx)(f.default, {
            size: 'large',
            value: a.value,
            placeholder: a.placeholder,
            style: {
                width: a.customWidth || g.default.optionWidth
            },
            onChange: b => {
                a.onValueChanged(b.target.value);
            },
            disabled: a.readOnly
        })
    });
}), b.register('9kbT6', function(c, d) {
    let e;
    var f;
    let g;
    a(c.exports, 'HookFormLocation', function() {
        return e;
    }), a(c.exports, 'IHookConnectedResourceType', function() {
        return g;
    }), (f = e || (e = {})).editor = 'editor', f.experiencePicker = 'experiencePicker', (g || (g = {})).kit = 'kit';
}), b.register('skKj1', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = a => {
        let f, g;
        return f = a.key, a.displayName && (f = a.displayName), a.displayDescription && (g = a.displayDescription), {
            title: f,
            description: g
        };
    };
}), b.register('hbFAw', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn'),
        f = b('9zaF+');
    b('O0Kav');
    var g = b('MzH3f'),
        h = b('skKj1');
    var _i = a => {
        const {
            title: j,
            description: k
        } = (0, h.default)(a.hook), l = a.hook.options;
        return (0, e.jsx)(g.default, {
            title: j,
            description: k,
            value: a.value,
            onValueChanged: j => {
                !(0, f.isNil)(j) || (0, f.isNil)(l.defaultValue) ? a.onChange(j): a.onChange(l.defaultValue);
            },
            min: l.min,
            max: l.max,
            step: l.step,
            allowEmpty: !0,
            readOnly: a.readOnly
        });
    };
}), b.register('m9fag', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('Jvo89'),
        g = b('skKj1');
    var _h = a => {
        const {
            title: i,
            description: j
        } = (0, g.default)(a.hook), k = a.hook.options;
        return (0, e.jsx)(f.default, {
            title: i,
            description: j,
            value: a.value,
            onValueChanged: a.onChange,
            options: k.options.map(a => ({
                value: a,
                name: a
            })),
            readOnly: a.readOnly
        });
    };
}), b.register('CQMa/', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('9zaF+'),
        f = b('RBtfx4'),
        g = b('9kbT6'),
        h = b('ejuPT');
    var _i = (a, b) => {
        const j = [];
        return (0, h.default)({
            ...a,
            location: g.HookFormLocation.editor
        }, b).forEach(a => {
            a.type === f.HookType.kit && b[a.key] && j.push({
                type: g.IHookConnectedResourceType.kit,
                value: b[a.key]
            });
        }), (0, e.uniqBy)(j, 'value');
    };
}), b.register('ejuPT', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('YIkl/'),
        f = b('RBtfx4'),
        g = b('9kbT6');
    var _h = (a, b) => {
        var i, j;
        const k = [];
        return null == a || null === (i = a.hooks) || void 0 === i || null === (j = i.hooks) || void 0 === j || j.forEach(i => {
            var l;
            if (i.type === f.HookType.kit) {
                if (!!b[i.key] && a.location === g.HookFormLocation.experiencePicker)
                    return;
            }
            if (i.type === f.HookType.selectBox) {
                var m;
                const n = i.options;
                if (!(null == n || null === (m = n.options) || void 0 === m ? void 0 : m.length))
                    return;
            }
            (null == i || null === (l = i.hiddenScenarios) || void 0 === l ? void 0 : l.find(i => {
                var m, n;
                if (!!!(null === (m = i.conditions) || void 0 === m ? void 0 : m.length))
                    return !1;
                return !!(null === (n = i.conditions) || void 0 === n ? void 0 : n.every(i => {
                    if (i.type === e.HiddenConditionType.hookValue) {
                        const o = i.options,
                            p = o.value,
                            q = b[o.key];
                        if (o.compare === e.HookValueHiddenConditionCompare.equal) {
                            if (p == q)
                                return !0;
                        } else if (o.compare === e.HookValueHiddenConditionCompare.notEqual && p != q)
                            return !0;
                    } else if (i.type === e.HiddenConditionType.modeType) {
                        const o = a.modeType,
                            p = i.options;
                        return p.compare === e.ModeTypeHiddenConditionCompare.equal ? o === p.mode : o !== p.mode;
                    }
                    return !1;
                }));
            })) || k.push(i);
        }), k;
    };
}), b.register('YIkl/', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    a(c.exports, 'HiddenConditionType', function() {
        return e;
    }), a(c.exports, 'HookValueHiddenConditionCompare', function() {
        return g;
    }), a(c.exports, 'ModeTypeHiddenConditionCompare', function() {
        return i;
    }), (f = e || (e = {})).hookValue = 'hookValue', f.modeType = 'modeType', (h = g || (g = {})).equal = 'EQUAL', h.notEqual = 'NOT_EQUAL', (j = i || (i = {})).equal = 'EQUAL', j.notEqual = 'NOT_EQUAL';
});