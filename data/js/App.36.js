function a(a, b, c, n) {
    Object.defineProperty(a, b, {
        get: c,
        set: n,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('QtkH71', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('0RCfO0'),
        e = c('WjvOI1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var g = h;
}), c.register('0RCfO0', function(n, o) {
    a(n.exports, 'default', function() {
        return q;
    }, function(a) {
        return q = a;
    });
    var d = c('VAIs1'),
        e = c('CrMLT9'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('LhviC'),
        i = c('WjvOI1'),
        j = c('Cm5dS'),
        k = c('qBaIr0'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = y,
            z = l(y, [
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
            getPrefixCls: A,
            direction: B
        } = f.useContext(g.ConfigContext), C = f.useContext(i.GroupContext), {
            isFormItemInput: D
        } = f.useContext(h.FormItemInputContext), E = f.useContext(j.default), F = null !== (n = (null == C ? void 0 : C.disabled) || x) && void 0 !== n ? n : E, G = f.useRef(z.value);
        f.useEffect(() => {
            null == C || C.registerValue(z.value);
        }, []), f.useEffect(() => {
            if (!w)
                return z.value !== G.current && (null == C || C.cancelValue(G.current), null == C || C.registerValue(z.value), G.current = z.value), () => null == C ? void 0 : C.cancelValue(z.value);
        }, [z.value]);
        const H = A('checkbox', o),
            [I, J] = (0, k.default)(H),
            K = Object.assign({}, z);
        C && !w && (K.onChange = function() {
            z.onChange && z.onChange.apply(z, arguments), C.toggleOption && C.toggleOption({
                label: r,
                value: z.value
            });
        }, K.name = C.name, K.checked = C.value.includes(z.value));
        const L = b(d)({
                [`${ H }-wrapper`]: !0,
                [`${ H }-rtl`]: 'rtl' === B,
                [`${ H }-wrapper-checked`]: K.checked,
                [`${ H }-wrapper-disabled`]: F,
                [`${ H }-wrapper-in-form-item`]: D
            }, p, q, J),
            M = b(d)({
                [`${ H }-indeterminate`]: s
            }, J),
            N = s ? 'mixed' : void 0;
        return I(f.createElement('label', {
            className: L,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': N
        }, K, {
            prefixCls: H,
            className: M,
            disabled: F,
            ref: c
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), c.register('WjvOI1', function(m, n) {
    a(m.exports, 'GroupContext', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(m.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('P7Ub/'),
        e = c('VAIs1'),
        f = c('xORK+'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('0RCfO0'),
        j = c('qBaIr0'),
        k = function(a, b) {
            var l = {};
            for (var m in a)
                Object.prototype.hasOwnProperty.call(a, m) && b.indexOf(m) < 0 && (l[m] = a[m]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(a); n < m.length; n++)
                    b.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, m[n]) && (l[m[n]] = a[m[n]]);
            }
            return l;
        };
    const l = g.createContext(null),
        m = (a, c) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: r,
                rootClassName: s,
                style: t,
                onChange: u
            } = v, w = k(v, [
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
                getPrefixCls: x,
                direction: y
            } = g.useContext(h.ConfigContext), [z, A] = g.useState(w.value || n || []), [B, C] = g.useState([]);
            g.useEffect(() => {
                'value' in w && A(w.value || []);
            }, [w.value]);
            const D = () => p.map(v => 'string' == typeof v || 'number' == typeof v ? {
                    label: v,
                    value: v
                } : v),
                E = x('checkbox', q),
                F = `${ E }-group`,
                [G, H] = (0, j.default)(E),
                I = (0, f.default)(w, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = D().map(v => g.createElement(i.default, {
                prefixCls: E,
                key: v.value.toString(),
                disabled: 'disabled' in v ? v.disabled : w.disabled,
                value: v.value,
                checked: z.includes(v.value),
                onChange: v.onChange,
                className: `${ F }-item`,
                style: v.style
            }, v.label)));
            const J = {
                    toggleOption: v => {
                        const K = z.indexOf(v.value),
                            L = (0, d.default)(z); -
                        1 === K ? L.push(v.value) : L.splice(K, 1), 'value' in w || A(L);
                        const M = D();
                        null == u || u(L.filter(v => B.includes(v)).sort((v, K) => M.findIndex(K => K.value === v) - M.findIndex(v => v.value === K)));
                    },
                    value: z,
                    disabled: w.disabled,
                    name: w.name,
                    registerValue: v => {
                        C(b => [].concat((0, d.default)(b), [v]));
                    },
                    cancelValue: v => {
                        C(b => b.filter(b => b !== v));
                    }
                },
                K = b(e)(F, {
                    [`${ F }-rtl`]: 'rtl' === y
                }, r, s, H);
            return G(g.createElement('div', Object.assign({
                className: K,
                style: t
            }, I, {
                ref: c
            }), g.createElement(l.Provider, {
                value: J
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), c.register('qBaIr0', function(b, n) {
    a(b.exports, 'getStyle', function() {
        return j;
    }), a(b.exports, 'default', function() {
        return k;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
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
        i = a => {
            const {
                checkboxCls: j
            } = k, l = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex'
                    }),
                    [l]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ l }`]: {
                            marginInlineStart: k.marginXS
                        },
                        [`&${ l }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
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
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: k.checkboxSize,
                            height: k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: k.colorBgContainer,
                            border: `${ k.lineWidth }px ${ k.lineType } ${ k.colorBorder }`,
                            borderRadius: k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: k.checkboxSize / 14 * 5,
                                height: k.checkboxSize / 14 * 8,
                                border: `${ k.lineWidthBold }px solid ${ k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ k.motionDurationFast } ${ k.motionEaseInBack }, opacity ${ k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: k.paddingXS,
                            paddingInlineEnd: k.paddingXS
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
                                    width: k.fontSizeLG / 2,
                                    height: k.fontSizeLG / 2,
                                    backgroundColor: k.colorPrimary,
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
                    [`${ l }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ l }:not(${ l }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: k.colorPrimary
                        }
                    },
                    [`${ l }:not(${ l }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: k.colorPrimary,
                            borderColor: k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ k.motionDurationMid } ${ k.motionEaseOutBack } ${ k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ k.lineWidthBold }px solid ${ k.colorPrimary }`,
                            animationName: h,
                            animationDuration: k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ l }-checked:not(${ l }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: k.colorBgContainerDisabled,
                            borderColor: k.colorBorder,
                            '&:after': {
                                borderColor: k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function j(a, b) {
        const k = (0, f.merge)(b, {
            checkboxCls: `.${ a }`,
            checkboxSize: b.controlInteractiveSize
        });
        return [i(k)];
    }
    var k = (0, e.default)('Checkbox', (a, b) => {
        let {
            prefixCls: l
        } = m;
        return [j(l, a)];
    });
});