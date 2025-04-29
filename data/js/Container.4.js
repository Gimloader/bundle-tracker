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
c.register('Q2kdB0', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('KJ2P50'),
        g = c('PXETC0'),
        h = c('ZG0Yn');
    const i = g.default;
    i.Button = h.default, i.Group = f.default, i.__ANT_RADIO = !0;
    var _j = i;
}), c.register('KJ2P50', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('/U36/'),
        g = c('MsxQz'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('GCcXd'),
        k = c('pKZsV'),
        l = c('vFRCN0'),
        m = c('PXETC0'),
        n = c('9/0Iy0');
    const o = h.forwardRef((a, c) => {
        const {
            getPrefixCls: p,
            direction: q
        } = h.useContext(i.ConfigContext), r = h.useContext(j.default), [_s, t] = (0, g.default)(a.defaultValue, {
            value: a.value
        }), {
            prefixCls: u,
            className: v,
            rootClassName: w,
            options: x,
            buttonStyle: y = 'outline',
            disabled: z,
            children: A,
            size: B,
            style: C,
            id: D,
            onMouseEnter: E,
            onMouseLeave: F,
            onFocus: G,
            onBlur: H
        } = a, I = p('radio', u), J = `${ I }-group`, [K, L] = (0, n.default)(I);
        let M = A;
        x && x.length > 0 && (M = x.map(a => 'string' == typeof a || 'number' == typeof a ? h.createElement(m.default, {
            key: a.toString(),
            prefixCls: I,
            disabled: z,
            value: a,
            checked: _s === a
        }, a) : h.createElement(m.default, {
            key: `radio-group-value-options-${ a.value }`,
            prefixCls: I,
            disabled: a.disabled || z,
            value: a.value,
            checked: _s === a.value,
            style: a.style
        }, a.label)));
        const N = B || r,
            O = b(f)(J, `${ J }-${ y }`, {
                [`${ J }-${ N }`]: N,
                [`${ J }-rtl`]: 'rtl' === q
            }, v, w, L);
        return K(h.createElement('div', Object.assign({}, (0, k.default)(a), {
            className: O,
            style: C,
            onMouseEnter: E,
            onMouseLeave: F,
            onFocus: G,
            onBlur: H,
            id: D,
            ref: c
        }), h.createElement(l.RadioGroupContextProvider, {
            value: {
                onChange: b => {
                    const P = _s,
                        Q = b.target.value;
                    'value' in a || t(Q);
                    const {
                        onChange: R
                    } = a;
                    R && Q !== P && R(b);
                },
                value: _s,
                disabled: a.disabled,
                name: a.name,
                optionType: a.optionType
            }
        }, M)));
    });
    var p = h.memo(o);
}), c.register('vFRCN0', function(d, e) {
    a(d.exports, 'RadioGroupContextProvider', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    }), a(d.exports, 'RadioOptionTypeContext', function() {
        return _j;
    }), a(d.exports, 'RadioOptionTypeContextProvider', function() {
        return _k;
    });
    var f = c('O0Kav');
    const g = f.createContext(null),
        _h = g.Provider;
    var _i = g;
    const _j = f.createContext(null),
        _k = _j.Provider;
}), c.register('PXETC0', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('/U36/'),
        g = c('y095j9'),
        h = c('bvyc2'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('XDmwF'),
        l = c('LbJH1'),
        m = c('vFRCN0'),
        n = c('9/0Iy0'),
        o = function(p, q) {
            var r = {};
            for (var s in p)
                Object.prototype.hasOwnProperty.call(p, s) && q.indexOf(s) < 0 && (r[s] = p[s]);
            if (null != p && 'function' == typeof Object.getOwnPropertySymbols) {
                var t = 0;
                for (s = Object.getOwnPropertySymbols(p); t < s.length; t++)
                    q.indexOf(s[t]) < 0 && Object.prototype.propertyIsEnumerable.call(p, s[t]) && (r[s[t]] = p[s[t]]);
            }
            return r;
        };
    const p = (a, c) => {
        var q, r;
        const s = i.useContext(m.default),
            _t = i.useContext(m.RadioOptionTypeContext),
            {
                getPrefixCls: u,
                direction: v
            } = i.useContext(j.ConfigContext),
            w = i.useRef(),
            x = (0, h.composeRef)(c, w),
            {
                isFormItemInput: y
            } = i.useContext(l.FormItemInputContext),
            z = b => {
                var A, B;
                null === (A = a.onChange) || void 0 === A || A.call(a, b), null === (B = null == s ? void 0 : s.onChange) || void 0 === B || B.call(s, b);
            },
            {
                prefixCls: A,
                className: B,
                rootClassName: C,
                children: D,
                style: E
            } = a,
            F = o(a, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            G = u('radio', A),
            H = 'button' === ((null == s ? void 0 : s.optionType) || _t) ? `${ G }-button` : G,
            [I, J] = (0, n.default)(G),
            K = Object.assign({}, F),
            L = i.useContext(k.default);
        s && (K.name = s.name, K.onChange = z, K.checked = a.value === s.value, K.disabled = null !== (q = K.disabled) && void 0 !== q ? q : s.disabled), K.disabled = null !== (r = K.disabled) && void 0 !== r ? r : L;
        const M = b(f)(`${ H }-wrapper`, {
            [`${ H }-wrapper-checked`]: K.checked,
            [`${ H }-wrapper-disabled`]: K.disabled,
            [`${ H }-wrapper-rtl`]: 'rtl' === v,
            [`${ H }-wrapper-in-form-item`]: y
        }, B, C, J);
        return I(i.createElement('label', {
            className: M,
            style: E,
            onMouseEnter: a.onMouseEnter,
            onMouseLeave: a.onMouseLeave
        }, i.createElement(g.default, Object.assign({}, K, {
            type: 'radio',
            prefixCls: H,
            ref: x
        })), void 0 !== D ? i.createElement('span', null, D) : null));
    };
    var q = i.forwardRef(p);
}), c.register('9/0Iy0', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = new(0, f.Keyframes)('antRadioEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        k = a => {
            const {
                componentCls: l,
                antCls: m
            } = a, n = `${ l }-group`;
            return {
                [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ n }-rtl`]: {
                        direction: 'rtl'
                    },
                    [`${ m }-badge ${ m }-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${ m }-badge:not(:first-child) > ${ m }-button-wrapper`]: {
                        borderInlineStart: 'none'
                    }
                })
            };
        },
        l = a => {
            const {
                componentCls: m,
                radioWrapperMarginRight: n,
                radioCheckedColor: o,
                radioSize: p,
                motionDurationSlow: q,
                motionDurationMid: r,
                motionEaseInOut: s,
                motionEaseInOutCirc: t,
                radioButtonBg: u,
                colorBorder: _v,
                lineWidth: w,
                radioDotSize: x,
                colorBgContainerDisabled: y,
                colorTextDisabled: z,
                paddingXS: A,
                radioDotDisabledColor: B,
                lineType: C,
                radioDotDisabledSize: D,
                wireframe: E,
                colorWhite: F
            } = a, G = `${ m }-inner`;
            return {
                [`${ m }-wrapper`]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    marginInlineStart: 0,
                    marginInlineEnd: n,
                    cursor: 'pointer',
                    [`&${ m }-wrapper-rtl`]: {
                        direction: 'rtl'
                    },
                    '&-disabled': {
                        cursor: 'not-allowed',
                        color: a.colorTextDisabled
                    },
                    '&::after': {
                        display: 'inline-block',
                        width: 0,
                        overflow: 'hidden',
                        content: '"\\a0"'
                    },
                    [`${ m }-checked::after`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        border: `${ w }px ${ C } ${ o }`,
                        borderRadius: '50%',
                        visibility: 'hidden',
                        animationName: j,
                        animationDuration: q,
                        animationTimingFunction: s,
                        animationFillMode: 'both',
                        content: '""'
                    },
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ m }-wrapper:hover &,\n        &:hover ${ G }`]: {
                        borderColor: o
                    },
                    [`${ m }-input:focus-visible + ${ G }`]: Object.assign({}, (0, i.genFocusOutline)(a)),
                    [`${ m }:hover::after, ${ m }-wrapper:hover &::after`]: {
                        visibility: 'visible'
                    },
                    [`${ m }-inner`]: {
                        '&::after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            insetBlockStart: '50%',
                            insetInlineStart: '50%',
                            display: 'block',
                            width: p,
                            height: p,
                            marginBlockStart: p / -2,
                            marginInlineStart: p / -2,
                            backgroundColor: E ? o : F,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: p,
                            transform: 'scale(0)',
                            opacity: 0,
                            transition: `all ${ q } ${ t }`,
                            content: '""'
                        },
                        boxSizing: 'border-box',
                        position: 'relative',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: p,
                        height: p,
                        backgroundColor: u,
                        borderColor: _v,
                        borderStyle: 'solid',
                        borderWidth: w,
                        borderRadius: '50%',
                        transition: `all ${ r }`
                    },
                    [`${ m }-input`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0
                    },
                    [`${ m }-checked`]: {
                        [G]: {
                            borderColor: o,
                            backgroundColor: E ? u : o,
                            '&::after': {
                                transform: `scale(${ x / p })`,
                                opacity: 1,
                                transition: `all ${ q } ${ t }`
                            }
                        }
                    },
                    [`${ m }-disabled`]: {
                        cursor: 'not-allowed',
                        [G]: {
                            backgroundColor: y,
                            borderColor: _v,
                            cursor: 'not-allowed',
                            '&::after': {
                                backgroundColor: B
                            }
                        },
                        [`${ m }-input`]: {
                            cursor: 'not-allowed'
                        },
                        [`${ m }-disabled + span`]: {
                            color: z,
                            cursor: 'not-allowed'
                        },
                        [`&${ m }-checked`]: {
                            [G]: {
                                '&::after': {
                                    transform: `scale(${ D / p })`
                                }
                            }
                        }
                    },
                    [`span${ m } + *`]: {
                        paddingInlineStart: A,
                        paddingInlineEnd: A
                    }
                })
            };
        },
        m = a => {
            const {
                radioButtonColor: n,
                controlHeight: o,
                componentCls: p,
                lineWidth: q,
                lineType: r,
                colorBorder: s,
                motionDurationSlow: t,
                motionDurationMid: u,
                radioButtonPaddingHorizontal: v,
                fontSize: w,
                radioButtonBg: x,
                fontSizeLG: y,
                controlHeightLG: z,
                controlHeightSM: A,
                paddingXS: B,
                borderRadius: C,
                borderRadiusSM: D,
                borderRadiusLG: E,
                radioCheckedColor: F,
                radioButtonCheckedBg: G,
                radioButtonHoverColor: H,
                radioButtonActiveColor: I,
                radioSolidCheckedColor: J,
                colorTextDisabled: K,
                colorBgContainerDisabled: L,
                radioDisabledButtonCheckedColor: M,
                radioDisabledButtonCheckedBg: N
            } = a;
            return {
                [`${ p }-button-wrapper`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: o,
                    margin: 0,
                    paddingInline: v,
                    paddingBlock: 0,
                    color: n,
                    fontSize: w,
                    lineHeight: o - 2 * q + 'px',
                    background: x,
                    border: `${ q }px ${ r } ${ s }`,
                    borderBlockStartWidth: q + 0.02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: q,
                    cursor: 'pointer',
                    transition: [
                        `color ${ u }`,
                        `background ${ u }`,
                        `border-color ${ u }`,
                        `box-shadow ${ u }`
                    ].join(','),
                    a: {
                        color: n
                    },
                    [`> ${ p }-button`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        zIndex: -1,
                        width: '100%',
                        height: '100%'
                    },
                    '&:not(:first-child)': {
                        '&::before': {
                            position: 'absolute',
                            insetBlockStart: -q,
                            insetInlineStart: -q,
                            display: 'block',
                            boxSizing: 'content-box',
                            width: 1,
                            height: '100%',
                            paddingBlock: q,
                            paddingInline: 0,
                            backgroundColor: s,
                            transition: `background-color ${ t }`,
                            content: '""'
                        }
                    },
                    '&:first-child': {
                        borderInlineStart: `${ q }px ${ r } ${ s }`,
                        borderStartStartRadius: C,
                        borderEndStartRadius: C
                    },
                    '&:last-child': {
                        borderStartEndRadius: C,
                        borderEndEndRadius: C
                    },
                    '&:first-child:last-child': {
                        borderRadius: C
                    },
                    [`${ p }-group-large &`]: {
                        height: z,
                        fontSize: y,
                        lineHeight: z - 2 * q + 'px',
                        '&:first-child': {
                            borderStartStartRadius: E,
                            borderEndStartRadius: E
                        },
                        '&:last-child': {
                            borderStartEndRadius: E,
                            borderEndEndRadius: E
                        }
                    },
                    [`${ p }-group-small &`]: {
                        height: A,
                        paddingInline: B - q,
                        paddingBlock: 0,
                        lineHeight: A - 2 * q + 'px',
                        '&:first-child': {
                            borderStartStartRadius: D,
                            borderEndStartRadius: D
                        },
                        '&:last-child': {
                            borderStartEndRadius: D,
                            borderEndEndRadius: D
                        }
                    },
                    '&:hover': {
                        position: 'relative',
                        color: F
                    },
                    '&:has(:focus-visible)': Object.assign({}, (0, i.genFocusOutline)(a)),
                    [`${ p }-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [`&-checked:not(${ p }-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: F,
                        background: G,
                        borderColor: F,
                        '&::before': {
                            backgroundColor: F
                        },
                        '&:first-child': {
                            borderColor: F
                        },
                        '&:hover': {
                            color: H,
                            borderColor: H,
                            '&::before': {
                                backgroundColor: H
                            }
                        },
                        '&:active': {
                            color: I,
                            borderColor: I,
                            '&::before': {
                                backgroundColor: I
                            }
                        }
                    },
                    [`${ p }-group-solid &-checked:not(${ p }-button-wrapper-disabled)`]: {
                        color: J,
                        background: F,
                        borderColor: F,
                        '&:hover': {
                            color: J,
                            background: H,
                            borderColor: H
                        },
                        '&:active': {
                            color: J,
                            background: I,
                            borderColor: I
                        }
                    },
                    '&-disabled': {
                        color: K,
                        backgroundColor: L,
                        borderColor: s,
                        cursor: 'not-allowed',
                        '&:first-child, &:hover': {
                            color: K,
                            backgroundColor: L,
                            borderColor: s
                        }
                    },
                    [`&-disabled${ p }-button-wrapper-checked`]: {
                        color: M,
                        backgroundColor: N,
                        borderColor: s,
                        boxShadow: 'none'
                    }
                }
            };
        };
    var n = (0, g.default)('Radio', a => {
        const {
            padding: o,
            lineWidth: p,
            controlItemBgActiveDisabled: q,
            colorTextDisabled: r,
            colorBgContainer: s,
            fontSizeLG: t,
            controlOutline: u,
            colorPrimaryHover: v,
            colorPrimaryActive: w,
            colorText: x,
            colorPrimary: y,
            marginXS: z,
            controlOutlineWidth: A,
            colorTextLightSolid: B,
            wireframe: C
        } = a, D = `0 0 0 ${ A }px ${ u }`, E = D, F = t, G = F - 8, H = C ? G : F - 2 * (4 + p), I = y, J = x, K = v, L = w, M = o - p, N = r, O = z, P = (0, h.merge)(a, {
            radioFocusShadow: D,
            radioButtonFocusShadow: E,
            radioSize: F,
            radioDotSize: H,
            radioDotDisabledSize: G,
            radioCheckedColor: I,
            radioDotDisabledColor: r,
            radioSolidCheckedColor: B,
            radioButtonBg: s,
            radioButtonCheckedBg: s,
            radioButtonColor: J,
            radioButtonHoverColor: K,
            radioButtonActiveColor: L,
            radioButtonPaddingHorizontal: M,
            radioDisabledButtonCheckedBg: q,
            radioDisabledButtonCheckedColor: N,
            radioWrapperMarginRight: O
        });
        return [
            k(P),
            l(P),
            m(P)
        ];
    });
}), c.register('ZG0Yn', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    }, function(f) {
        return _o = f;
    });
    var f = c('O0Kav'),
        g = c('R2nG3'),
        h = c('vFRCN0'),
        i = c('PXETC0'),
        j = function(k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    const k = (a, d) => {
        const {
            getPrefixCls: l
        } = f.useContext(g.ConfigContext), {
            prefixCls: m
        } = a, n = j(a, ['prefixCls']), _o = l('radio', m);
        return f.createElement(h.RadioOptionTypeContextProvider, {
            value: 'button'
        }, f.createElement(i.default, Object.assign({
            prefixCls: _o
        }, n, {
            type: 'radio',
            ref: d
        })));
    };
    var l = f.forwardRef(k);
});