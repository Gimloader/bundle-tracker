function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('3Zk7y', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('inwN3'),
        f = a('Kc6XZ23'),
        g = a('+HMq30');
    var _h = _q => (0, d.jsx)(g.default, {
        emoji: _q.emoji,
        title: _q.title,
        description: _q.description,
        children: (0, d.jsx)(e.default, {
            value: _q.value,
            style: {
                width: _q.customWidth || f.default.optionWidth
            },
            size: 'large',
            onChange: a => _q.onValueChanged(a),
            disabled: _q.readOnly,
            children: _q.options.map(a => (0, d.jsx)(e.default.Option, {
                value: a.value,
                children: a.name
            }, `${ _q.title || 'no-title' }-${ a.value }`))
        })
    });
}), a.register('+HMq30', function(b, c) {
    _q(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('F5NRv');
    var _f = _q => (0, d.jsxs)(e.OptionContainer, {
        children: [
            (0, d.jsxs)(e.OptionInfoContainer, {
                children: [
                    _q.emoji ? (0, d.jsx)(e.OptionEmoji, {
                        children: _q.emoji
                    }) : null,
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(e.OptionTitle, {
                                children: _q.title
                            }),
                            _q.description ? (0, d.jsx)(e.OptionDescription, {
                                children: _q.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, d.jsx)(e.OptionChangerContainer, {
                children: _q.children
            })
        ]
    });
}), a.register('F5NRv', function(b, c) {
    _q(b.exports, 'OptionContainer', function() {
        return _m;
    }), _q(b.exports, 'OptionInfoContainer', function() {
        return _n;
    }), _q(b.exports, 'OptionEmoji', function() {
        return _o;
    }), _q(b.exports, 'OptionTitle', function() {
        return _p;
    }), _q(b.exports, 'OptionDescription', function() {
        return _q;
    }), _q(b.exports, 'OptionChangerContainer', function() {
        return _r;
    });
    var d = a('b5kvC'),
        e = a('Axq+p');
    let f, g, h, i, j, k, l = _q => _q;
    const _m = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(f || (f = l`
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
        _n = e.default.div.attrs({
            className: 'flex vc'
        })(g || (g = l``)),
        _o = e.default.div(h || (h = l`
  font-size: 23px;
  margin-right: 10px;
`)),
        _p = e.default.div(i || (i = l`
  font-size: 23px;
  font-weight: ${ 0 };
`), d.FontWeights.Bold),
        _q = e.default.div(j || (j = l`
  font-size: 15px;
  margin-top: -2px;
`)),
        _r = e.default.div(k || (k = l`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), a.register('3xvhx', function(b, c) {
    _q(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Kc6XZ23'),
        g = a('xi+Va0'),
        h = a('+HMq30'),
        i = a('fe6E3'),
        j = a('rw8oD0');
    var _k = _q => {
        const l = e.useCallback(l => {
            if ((0, i.isNil)(l) && _q.allowEmpty)
                return l;
            let m = l ? _q.step ? Math.round(l / _q.step) * _q.step : l : 0;
            return !(0, i.isNil)(_q.min) && m < _q.min ? m = _q.min : !(0, i.isNil)(_q.max) && m > _q.max && (m = _q.max), m;
        }, [
            _q.max,
            _q.min,
            _q.step
        ]);
        e.useEffect(() => {
            (0, i.isNil)(_q.value) || _q.max && _q.value > _q.max && b(l(_q.max));
        }, [
            _q.value,
            _q.max
        ]);
        const m = m => {
            _q.onValueChanged(l(m));
        };
        return (0, d.jsx)(h.default, {
            emoji: _q.emoji,
            title: _q.title,
            description: _q.description,
            children: (0, d.jsx)(j.default, {
                size: 'large',
                formatter: g.default,
                value: _q.value,
                max: _q.max,
                min: _q.min,
                step: _q.step,
                style: {
                    width: _q.customWidth || f.default.optionWidth
                },
                onChange: m,
                disabled: _q.readOnly
            })
        });
    };
}), a.register('xi+Va0', function(b, c) {
    _q(b.exports, 'default', function() {
        return _e;
    });
    var d = a('PMl60');
    var _e = _q => '' === _q ? '' : isNaN(Number(_q)) ? String(_q) : (0, d.numberWithCommas)(Number(_q));
}), a.register('rw8oD0', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('GnfDG'),
        f = a('LEQ5w'),
        g = a('PMl60');
    var _h = _q => {
        const [i, j] = f.useState(_q.value), [k, l] = f.useState(_q.value), [m, n, o] = (0, g.useBoolean)(!1);
        f.useEffect(() => {
            l(_q.value), j(_q.value);
        }, [_q.value]);
        return (0, d.jsx)(e.default, {
            ..._q,
            value: m ? i : k,
            onChange: _q => {
                j(_q);
            },
            onFocus: n,
            onBlur: () => {
                i !== k && _q.onChange(i), o(), j(_q.value);
            }
        });
    };
}), a.register('Au/8t', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('fe6E3'),
        e = a('QdGLB'),
        f = a('y4x7Q');
    const g = (_q, a) => {
        var h;
        return null === (h = JSON.parse(localStorage.getItem(f.LocalStorageNames.hookSavedOptions) || '{}')[a]) || void 0 === h ? void 0 : h[_q];
    };
    var _h = _q => {
        var i;
        const {
            hookJSON: j,
            experienceId: k,
            kitId: l
        } = _q, m = {};
        return null == j || null === (i = j.hooks) || void 0 === i || i.forEach(_q => {
            if (_q.type === e.HookType.kit)
                m[_q.key] = l || '';
            else if (_q.type == e.HookType.selectBox) {
                const n = _q.options;
                if (n.options.length) {
                    let o = n.options.find(_q => _q === n.defaultOption) || n.options[0];
                    if (k) {
                        const p = g(_q.key, k);
                        if (p) {
                            const _q = n.options.find(_q => _q === p);
                            _q && (o = _q);
                        }
                    }
                    o && (m[_q.key] = o);
                }
            } else if (_q.type === e.HookType.number) {
                const n = _q.options;
                let o = n.defaultValue;
                if (k) {
                    const p = g(_q.key, k);
                    if (!(0, d.isNil)(p) && 'number' == typeof p) {
                        let _q = !1;
                        ((0, d.isNil)(n.min) || p > n.min) && ((0, d.isNil)(n.max) || p < n.max) && ((0, d.isNil)(n.step) || p % n.step == 0) && (_q = !0), _q && (o = p);
                    }
                }
                m[_k.key] = o;
            }
        }), m;
    };
}), a.register('bkqTR0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('YuT/D'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('lNnfg0'),
        i = a('EMEuh'),
        j = a('OW0Rw'),
        k = a('Au/8t');
    var _l = (0, f.observer)(_k => {
        const [m] = g.useState(() => (0, e.observable)(_k.defaultState || (0, k.default)({
            hookJSON: _k.hooks
        }))), n = (_k, n) => {
            m[_k] = n;
        }, o = (0, e.toJS)(m), p = JSON.stringify(o);
        g.useEffect(() => {
            _k.onConnectedResourcesChange && _k.onConnectedResourcesChange((0, i.default)(_k, o)), _k.readOnly || _k.onStateChange && _k.onStateChange(o);
        }, [
            p,
            _k.readOnly
        ]);
        const q = (0, j.default)(_k, o);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                _k.header ? _k.header(q.length) : null,
                q.map((m, e) => (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(h.default, {
                            hook: m,
                            state: o,
                            modifyState: n,
                            location: _k.location,
                            readOnly: _k.readOnly
                        }),
                        e !== q.length - 1 && (0, d.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ m.key }`)),
                _k.footer ? _k.footer(q.length) : null
            ]
        });
    });
}), a.register('lNnfg0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('QdGLB'),
        f = a('Go7vp0'),
        g = a('WD3Or0'),
        h = a('2+eTi0');
    var _i = _k => {
        const j = _k.state[_k.hook.key],
            k = j => {
                _k.modifyState(_k.hook.key, j);
            };
        return _k.hook.type === e.HookType.selectBox ? (0, d.jsx)(h.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            readOnly: _k.readOnly
        }) : _k.hook.type === e.HookType.kit ? (0, d.jsx)(f.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            location: _k.location,
            readOnly: _k.readOnly
        }) : _k.hook.type === e.HookType.number ? (0, d.jsx)(g.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            readOnly: _k.readOnly
        }) : null;
    };
}), a.register('Go7vp0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('0AfFP'),
        f = a('ED5Qu0'),
        g = a('uQgEt0');
    var _h = _k => {
        let {
            title: i,
            description: j
        } = (0, g.default)(_k.hook);
        if (_k.location === f.HookFormLocation.editor) {
            const _k = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            j ? j += ` - ${ _k }` : j = _k;
        }
        return (0, d.jsx)(e.default, {
            title: i,
            description: j,
            value: _m.value,
            onValueChanged: _m.onChange,
            placeholder: 'Kit ID',
            readOnly: _m.readOnly
        });
    };
}), a.register('0AfFP', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ewwAh'),
        f = a('Kc6XZ23'),
        g = a('+HMq30');
    var _h = _m => (0, d.jsx)(g.default, {
        emoji: _m.emoji,
        title: _m.title,
        description: _m.description,
        children: (0, d.jsx)(e.default, {
            size: 'large',
            value: _m.value,
            placeholder: _m.placeholder,
            style: {
                width: _m.customWidth || f.default.optionWidth
            },
            onChange: a => {
                _m.onValueChanged(a.target.value);
            },
            disabled: _m.readOnly
        })
    });
}), a.register('ED5Qu0', function(b, c) {
    let d;
    var e;
    let f;
    _m(b.exports, 'HookFormLocation', function() {
        return d;
    }), _m(b.exports, 'IHookConnectedResourceType', function() {
        return f;
    }), (e = d || (d = {})).editor = 'editor', e.experiencePicker = 'experiencePicker', (f || (f = {})).kit = 'kit';
}), a.register('uQgEt0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = _m => {
        let e, f;
        return e = _m.key, _m.displayName && (e = _m.displayName), _m.displayDescription && (f = _m.displayDescription), {
            title: e,
            description: f
        };
    };
}), a.register('WD3Or0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('fe6E3');
    a('LEQ5w');
    var f = a('3xvhx'),
        g = a('uQgEt0');
    var _h = _m => {
        const {
            title: i,
            description: j
        } = (0, g.default)(_m.hook), k = _m.hook.options;
        return (0, d.jsx)(f.default, {
            title: i,
            description: j,
            value: _m.value,
            onValueChanged: i => {
                !(0, e.isNil)(i) || (0, e.isNil)(k.defaultValue) ? _m.onChange(i): _m.onChange(k.defaultValue);
            },
            min: k.min,
            max: k.max,
            step: k.step,
            allowEmpty: !0,
            readOnly: _m.readOnly
        });
    };
}), a.register('2+eTi0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('3Zk7y'),
        f = a('uQgEt0');
    var _g = _m => {
        const {
            title: h,
            description: i
        } = (0, f.default)(_m.hook), j = _m.hook.options;
        return (0, d.jsx)(e.default, {
            title: h,
            description: i,
            value: _m.value,
            onValueChanged: _m.onChange,
            options: j.options.map(_m => ({
                value: _m,
                name: _m
            })),
            readOnly: _m.readOnly
        });
    };
}), a.register('EMEuh', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('fe6E3'),
        e = a('QdGLB'),
        f = a('ED5Qu0'),
        g = a('OW0Rw');
    var _h = (_m, a) => {
        const i = [];
        return (0, g.default)({
            ..._m,
            location: f.HookFormLocation.editor
        }, a).forEach(_m => {
            _m.type === e.HookType.kit && a[_m.key] && i.push({
                type: f.IHookConnectedResourceType.kit,
                value: a[_m.key]
            });
        }), (0, d.uniqBy)(i, 'value');
    };
}), a.register('OW0Rw', function(b, c) {
    _m(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Rq6L+0'),
        e = a('QdGLB'),
        f = a('ED5Qu0');
    var _g = (_m, a) => {
        var h, i;
        const j = [];
        return null == _m || null === (h = _m.hooks) || void 0 === h || null === (i = h.hooks) || void 0 === i || i.forEach(h => {
            var k;
            if (h.type === e.HookType.kit) {
                if (!!a[h.key] && _m.location === f.HookFormLocation.experiencePicker)
                    return;
            }
            if (h.type === e.HookType.selectBox) {
                var l;
                const _m = h.options;
                if (!(null == _m || null === (l = _m.options) || void 0 === l ? void 0 : l.length))
                    return;
            }
            (null == h || null === (k = h.hiddenScenarios) || void 0 === k ? void 0 : k.find(h => {
                var l, m;
                if (!!!(null === (l = h.conditions) || void 0 === l ? void 0 : l.length))
                    return !1;
                return !!(null === (m = h.conditions) || void 0 === m ? void 0 : m.every(h => {
                    if (h.type === d.HiddenConditionType.hookValue) {
                        const n = h.options,
                            o = n.value,
                            p = a[n.key];
                        if (n.compare === d.HookValueHiddenConditionCompare.equal) {
                            if (o == p)
                                return !0;
                        } else if (n.compare === d.HookValueHiddenConditionCompare.notEqual && o != p)
                            return !0;
                    } else if (h.type === d.HiddenConditionType.modeType) {
                        const n = e.modeType,
                            o = h.options;
                        return o.compare === d.ModeTypeHiddenConditionCompare.equal ? n === o.mode : n !== o.mode;
                    }
                    return !1;
                }));
            })) || j.push(h);
        }), j;
    };
}), a.register('Rq6L+0', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    e(b.exports, 'HiddenConditionType', function() {
        return d;
    }), e(b.exports, 'HookValueHiddenConditionCompare', function() {
        return f;
    }), e(b.exports, 'ModeTypeHiddenConditionCompare', function() {
        return h;
    }), (e = d || (d = {})).hookValue = 'hookValue', e.modeType = 'modeType', (g = f || (f = {})).equal = 'EQUAL', g.notEqual = 'NOT_EQUAL', (i = h || (h = {})).equal = 'EQUAL', i.notEqual = 'NOT_EQUAL';
});