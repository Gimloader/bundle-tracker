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
a.register('q0pUc1', function(b, c) {
    _d(b.exports, 'default', function() {
        return _g;
    });
    var d = a('2SA1z'),
        e = a('GvkEq1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var _g = f;
}), a.register('2SA1z', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    }, function(_d) {
        return _q = _d;
    });
    var d = a('JrtKP'),
        e = a('RW2Mp'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('UWoHW'),
        i = a('GvkEq1'),
        j = a('hFUNe'),
        k = a('oaXRt'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: _q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = _d,
            y = l(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'indeterminate',
                'style',
                'onMouseEnter',
                'onMouseLeave',
                'skipGroup',
                'disabled'
            ]);
        const {
            getPrefixCls: z,
            direction: A
        } = f.useContext(g.ConfigContext), B = f.useContext(i.GroupContext), {
            isFormItemInput: C
        } = f.useContext(h.FormItemInputContext), D = f.useContext(j.default), E = null !== (n = (null == B ? void 0 : B.disabled) || x) && void 0 !== n ? n : D, F = f.useRef(y.value);
        f.useEffect(() => {
            null == B || B.registerValue(y.value);
        }, []), f.useEffect(() => {
            if (!w)
                return y.value !== F.current && (null == B || B.cancelValue(F.current), null == B || B.registerValue(y.value), F.current = y.value), () => null == B ? void 0 : B.cancelValue(y.value);
        }, [y.value]);
        const G = z('checkbox', o),
            [H, I] = (0, k.default)(G),
            J = Object.assign({}, y);
        B && !w && (J.onChange = function() {
            y.onChange && y.onChange.apply(y, arguments), B.toggleOption && B.toggleOption({
                label: r,
                value: y.value
            });
        }, J.name = B.name, J.checked = B.value.includes(y.value));
        const K = _m(d)({
                [`${ G }-wrapper`]: !0,
                [`${ G }-rtl`]: 'rtl' === A,
                [`${ G }-wrapper-checked`]: J.checked,
                [`${ G }-wrapper-disabled`]: E,
                [`${ G }-wrapper-in-form-item`]: C
            }, p, _q, I),
            L = _m(d)({
                [`${ G }-indeterminate`]: s
            }, I),
            M = s ? 'mixed' : void 0;
        return H(f.createElement('label', {
            className: K,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': M
        }, J, {
            prefixCls: G,
            className: L,
            disabled: E,
            ref: a
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), a.register('GvkEq1', function(b, c) {
    _d(b.exports, 'GroupContext', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    }), _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('gK9Sd'),
        e = a('JrtKP'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('2SA1z'),
        j = a('oaXRt'),
        k = function(l, _m) {
            var n = {};
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && _m.indexOf(o) < 0 && (n[o] = l[o]);
            if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                    _m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
            }
            return n;
        };
    const _l = g.createContext(null),
        m = (_k, a) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: _r,
                rootClassName: s,
                style: t,
                onChange: u
            } = _k, v = k(_k, [
                'defaultValue',
                'children',
                'options',
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'onChange'
            ]);
            const {
                getPrefixCls: w,
                direction: x
            } = g.useContext(h.ConfigContext), [y, z] = g.useState(v.value || n || []), [A, B] = g.useState([]);
            g.useEffect(() => {
                'value' in v && z(v.value || []);
            }, [v.value]);
            const C = () => p.map(_k => 'string' == typeof _k || 'number' == typeof _k ? {
                    label: _k,
                    value: _k
                } : _k),
                D = w('checkbox', q),
                E = `${ D }-group`,
                [F, G] = (0, j.default)(D),
                H = (0, f.default)(v, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = C().map(_k => g.createElement(i.default, {
                prefixCls: D,
                key: _k.value.toString(),
                disabled: 'disabled' in _k ? _k.disabled : v.disabled,
                value: _k.value,
                checked: y.includes(_k.value),
                onChange: _k.onChange,
                className: `${ E }-item`,
                style: _k.style
            }, _k.label)));
            const I = {
                    toggleOption: _k => {
                        const J = y.indexOf(_k.value),
                            K = (0, d.default)(y); -
                        1 === J ? K.push(_k.value) : K.splice(J, 1), 'value' in v || z(K);
                        const L = C();
                        null == u || u(K.filter(_k => A.includes(_k)).sort((_k, J) => L.findIndex(J => J.value === _k) - L.findIndex(_k => _k.value === J)));
                    },
                    value: y,
                    disabled: v.disabled,
                    name: v.name,
                    registerValue: _k => {
                        B(_b => [].concat((0, d.default)(_b), [_k]));
                    },
                    cancelValue: _k => {
                        B(_b => _b.filter(_b => _b !== _k));
                    }
                },
                J = _b(e)(E, {
                    [`${ E }-rtl`]: 'rtl' === x
                }, _r, s, G);
            return F(g.createElement('div', Object.assign({
                className: J,
                style: t
            }, H, {
                ref: a
            }), g.createElement(_l.Provider, {
                value: I
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), a.register('oaXRt', function(_b, c) {
    _k(_b.exports, 'getStyle', function() {
        return _j;
    }), _k(_b.exports, 'default', function() {
        return _j;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = new(0, d.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        i = _k => {
            const {
                checkboxCls: j
            } = _k, k = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex'
                    }),
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ k }`]: {
                            marginInlineStart: _k.marginXS
                        },
                        [`&${ k }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ j }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(_k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: _k.checkboxSize,
                            height: _k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: _k.colorBgContainer,
                            border: `${ _k.lineWidth }px ${ _k.lineType } ${ _k.colorBorder }`,
                            borderRadius: _k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ _k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: _k.checkboxSize / 14 * 5,
                                height: _k.checkboxSize / 14 * 8,
                                border: `${ _k.lineWidthBold }px solid ${ _k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ _k.motionDurationFast } ${ _k.motionEaseInBack }, opacity ${ _k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: _k.paddingXS,
                            paddingInlineEnd: _k.paddingXS
                        }
                    })
                },
                {
                    [j]: {
                        '&-indeterminate': {
                            [`${ j }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: _k.fontSizeLG / 2,
                                    height: _k.fontSizeLG / 2,
                                    backgroundColor: _k.colorPrimary,
                                    border: 0,
                                    transform: 'translate(-50%, -50%) scale(1)',
                                    opacity: 1,
                                    content: '""'
                                }
                            }
                        }
                    }
                },
                {
                    [`${ k }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ k }:not(${ k }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: _k.colorPrimary
                        }
                    },
                    [`${ k }:not(${ k }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: _k.colorPrimary,
                            borderColor: _k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ _k.motionDurationMid } ${ _k.motionEaseOutBack } ${ _k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: _k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ _k.lineWidthBold }px solid ${ _k.colorPrimary }`,
                            animationName: h,
                            animationDuration: _k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ _k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ k }-checked:not(${ k }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ k }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: _k.colorBgContainerDisabled,
                            borderColor: _k.colorBorder,
                            '&:after': {
                                borderColor: _k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: _k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: _k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _j(_k, l) {
        const m = (0, f.merge)(l, {
            checkboxCls: `.${ _k }`,
            checkboxSize: l.controlInteractiveSize
        });
        return [i(m)];
    }
    var _j = (0, e.default)('Checkbox', (e, _b) => {
        let {
            prefixCls: k
        } = _b;
        return [d(k, e)];
    });
});