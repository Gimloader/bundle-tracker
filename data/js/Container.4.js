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
a.register('yiusa0', function(b, c) {
    _d(b.exports, 'default', function() {
        return _h;
    });
    var d = a('r1AQx0'),
        e = a('UK+Sg'),
        f = a('s5a6g');
    const g = e.default;
    g.Button = f.default, g.Group = d.default, g.__ANT_RADIO = !0;
    var _h = g;
}), a.register('r1AQx0', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    });
    var d = a('JrtKP'),
        e = a('TTc70'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('lWjQ8'),
        i = a('5HYBP'),
        j = a('hl66a0'),
        k = a('UK+Sg'),
        l = a('3kLOc');
    const m = f.forwardRef((_d, a) => {
        const {
            getPrefixCls: n,
            direction: o
        } = f.useContext(g.ConfigContext), p = f.useContext(h.default), [_q, r] = (0, e.default)(_d.defaultValue, {
            value: _d.value
        }), {
            prefixCls: s,
            className: t,
            rootClassName: u,
            options: v,
            buttonStyle: w = 'outline',
            disabled: x,
            children: y,
            size: z,
            style: A,
            id: B,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F
        } = _d, G = n('radio', s), H = `${ G }-group`, [I, J] = (0, l.default)(G);
        let K = y;
        v && v.length > 0 && (K = v.map(_d => 'string' == typeof _d || 'number' == typeof _d ? f.createElement(k.default, {
            key: _d.toString(),
            prefixCls: G,
            disabled: x,
            value: _d,
            checked: _q === _d
        }, _d) : f.createElement(k.default, {
            key: `radio-group-value-options-${ _d.value }`,
            prefixCls: G,
            disabled: _d.disabled || x,
            value: _d.value,
            checked: _q === _d.value,
            style: _d.style
        }, _d.label)));
        const L = z || p,
            M = _b(d)(H, `${ H }-${ w }`, {
                [`${ H }-${ L }`]: L,
                [`${ H }-rtl`]: 'rtl' === o
            }, t, u, J);
        return I(f.createElement('div', Object.assign({}, (0, i.default)(_d), {
            className: M,
            style: A,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F,
            id: B,
            ref: a
        }), f.createElement(j.RadioGroupContextProvider, {
            value: {
                onChange: _b => {
                    const N = _q,
                        O = _b.target.value;
                    'value' in _d || r(O);
                    const {
                        onChange: P
                    } = _d;
                    P && O !== N && P(_b);
                },
                value: _q,
                disabled: _d.disabled,
                name: _d.name,
                optionType: _d.optionType
            }
        }, K)));
    });
    var n = f.memo(m);
}), a.register('hl66a0', function(_b, c) {
    _d(_b.exports, 'RadioGroupContextProvider', function() {
        return _f;
    }), _d(_b.exports, 'default', function() {
        return _g;
    }), _d(_b.exports, 'RadioOptionTypeContext', function() {
        return _h;
    }), _d(_b.exports, 'RadioOptionTypeContextProvider', function() {
        return _i;
    });
    var d = a('LEQ5w');
    const e = d.createContext(null),
        _f = e.Provider;
    var _g = e;
    const _h = d.createContext(null),
        _i = _h.Provider;
}), a.register('UK+Sg', function(b, c) {
    _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('JrtKP'),
        e = a('RW2Mp'),
        f = a('gIJPx'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('hFUNe'),
        j = a('UWoHW'),
        k = a('hl66a0'),
        l = a('3kLOc'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const n = (_d, a) => {
        var o, p;
        const q = g.useContext(k.default),
            _r = g.useContext(k.RadioOptionTypeContext),
            {
                getPrefixCls: s,
                direction: t
            } = g.useContext(h.ConfigContext),
            u = g.useRef(),
            v = (0, f.composeRef)(a, u),
            {
                isFormItemInput: w
            } = g.useContext(j.FormItemInputContext),
            x = _b => {
                var y, z;
                null === (y = _d.onChange) || void 0 === y || y.call(_d, _b), null === (z = null == q ? void 0 : q.onChange) || void 0 === z || z.call(q, _b);
            },
            {
                prefixCls: y,
                className: z,
                rootClassName: A,
                children: B,
                style: C
            } = _d,
            D = m(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            E = s('radio', y),
            F = 'button' === ((null == q ? void 0 : q.optionType) || _r) ? `${ E }-button` : E,
            [G, H] = (0, l.default)(E),
            I = Object.assign({}, D),
            J = g.useContext(i.default);
        q && (I.name = q.name, I.onChange = x, I.checked = _d.value === q.value, I.disabled = null !== (o = I.disabled) && void 0 !== o ? o : q.disabled), I.disabled = null !== (p = I.disabled) && void 0 !== p ? p : J;
        const K = _b(d)(`${ F }-wrapper`, {
            [`${ F }-wrapper-checked`]: I.checked,
            [`${ F }-wrapper-disabled`]: I.disabled,
            [`${ F }-wrapper-rtl`]: 'rtl' === t,
            [`${ F }-wrapper-in-form-item`]: w
        }, z, A, H);
        return G(g.createElement('label', {
            className: K,
            style: C,
            onMouseEnter: _d.onMouseEnter,
            onMouseLeave: _d.onMouseLeave
        }, g.createElement(e.default, Object.assign({}, I, {
            type: 'radio',
            prefixCls: F,
            ref: v
        })), void 0 !== B ? g.createElement('span', null, B) : null));
    };
    var o = g.forwardRef(n);
}), a.register('3kLOc', function(_b, c) {
    _d(_b.exports, 'default', function() {
        return _t;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = new(0, d.Keyframes)('antRadioEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        i = _d => {
            const {
                componentCls: j,
                antCls: k
            } = _d, l = `${ j }-group`;
            return {
                [l]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ l }-rtl`]: {
                        direction: 'rtl'
                    },
                    [`${ k }-badge ${ k }-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${ k }-badge:not(:first-child) > ${ k }-button-wrapper`]: {
                        borderInlineStart: 'none'
                    }
                })
            };
        },
        j = _d => {
            const {
                componentCls: k,
                radioWrapperMarginRight: l,
                radioCheckedColor: m,
                radioSize: n,
                motionDurationSlow: o,
                motionDurationMid: p,
                motionEaseInOut: q,
                motionEaseInOutCirc: r,
                radioButtonBg: s,
                colorBorder: _t,
                lineWidth: u,
                radioDotSize: v,
                colorBgContainerDisabled: w,
                colorTextDisabled: x,
                paddingXS: y,
                radioDotDisabledColor: z,
                lineType: A,
                radioDotDisabledSize: B,
                wireframe: C,
                colorWhite: D
            } = _d, E = `${ k }-inner`;
            return {
                [`${ k }-wrapper`]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    marginInlineStart: 0,
                    marginInlineEnd: l,
                    cursor: 'pointer',
                    [`&${ k }-wrapper-rtl`]: {
                        direction: 'rtl'
                    },
                    '&-disabled': {
                        cursor: 'not-allowed',
                        color: _d.colorTextDisabled
                    },
                    '&::after': {
                        display: 'inline-block',
                        width: 0,
                        overflow: 'hidden',
                        content: '"\\a0"'
                    },
                    [`${ k }-checked::after`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        border: `${ u }px ${ A } ${ m }`,
                        borderRadius: '50%',
                        visibility: 'hidden',
                        animationName: h,
                        animationDuration: o,
                        animationTimingFunction: q,
                        animationFillMode: 'both',
                        content: '""'
                    },
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ k }-wrapper:hover &,\n        &:hover ${ E }`]: {
                        borderColor: m
                    },
                    [`${ k }-input:focus-visible + ${ E }`]: Object.assign({}, (0, g.genFocusOutline)(_d)),
                    [`${ k }:hover::after, ${ k }-wrapper:hover &::after`]: {
                        visibility: 'visible'
                    },
                    [`${ k }-inner`]: {
                        '&::after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            insetBlockStart: '50%',
                            insetInlineStart: '50%',
                            display: 'block',
                            width: n,
                            height: n,
                            marginBlockStart: n / -2,
                            marginInlineStart: n / -2,
                            backgroundColor: C ? m : D,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: n,
                            transform: 'scale(0)',
                            opacity: 0,
                            transition: `all ${ o } ${ r }`,
                            content: '""'
                        },
                        boxSizing: 'border-box',
                        position: 'relative',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: n,
                        height: n,
                        backgroundColor: s,
                        borderColor: _t,
                        borderStyle: 'solid',
                        borderWidth: u,
                        borderRadius: '50%',
                        transition: `all ${ p }`
                    },
                    [`${ k }-input`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0
                    },
                    [`${ k }-checked`]: {
                        [E]: {
                            borderColor: m,
                            backgroundColor: C ? s : m,
                            '&::after': {
                                transform: `scale(${ v / n })`,
                                opacity: 1,
                                transition: `all ${ o } ${ r }`
                            }
                        }
                    },
                    [`${ k }-disabled`]: {
                        cursor: 'not-allowed',
                        [E]: {
                            backgroundColor: w,
                            borderColor: _t,
                            cursor: 'not-allowed',
                            '&::after': {
                                backgroundColor: z
                            }
                        },
                        [`${ k }-input`]: {
                            cursor: 'not-allowed'
                        },
                        [`${ k }-disabled + span`]: {
                            color: x,
                            cursor: 'not-allowed'
                        },
                        [`&${ k }-checked`]: {
                            [E]: {
                                '&::after': {
                                    transform: `scale(${ B / n })`
                                }
                            }
                        }
                    },
                    [`span${ k } + *`]: {
                        paddingInlineStart: y,
                        paddingInlineEnd: y
                    }
                })
            };
        },
        k = _d => {
            const {
                radioButtonColor: l,
                controlHeight: m,
                componentCls: n,
                lineWidth: o,
                lineType: p,
                colorBorder: q,
                motionDurationSlow: r,
                motionDurationMid: s,
                radioButtonPaddingHorizontal: t,
                fontSize: u,
                radioButtonBg: v,
                fontSizeLG: w,
                controlHeightLG: x,
                controlHeightSM: y,
                paddingXS: z,
                borderRadius: A,
                borderRadiusSM: B,
                borderRadiusLG: C,
                radioCheckedColor: D,
                radioButtonCheckedBg: E,
                radioButtonHoverColor: F,
                radioButtonActiveColor: G,
                radioSolidCheckedColor: H,
                colorTextDisabled: I,
                colorBgContainerDisabled: J,
                radioDisabledButtonCheckedColor: K,
                radioDisabledButtonCheckedBg: L
            } = _d;
            return {
                [`${ n }-button-wrapper`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: m,
                    margin: 0,
                    paddingInline: t,
                    paddingBlock: 0,
                    color: l,
                    fontSize: u,
                    lineHeight: m - 2 * o + 'px',
                    background: v,
                    border: `${ o }px ${ p } ${ q }`,
                    borderBlockStartWidth: o + 0.02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: o,
                    cursor: 'pointer',
                    transition: [
                        `color ${ s }`,
                        `background ${ s }`,
                        `border-color ${ s }`,
                        `box-shadow ${ s }`
                    ].join(','),
                    a: {
                        color: l
                    },
                    [`> ${ n }-button`]: {
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
                            insetBlockStart: -o,
                            insetInlineStart: -o,
                            display: 'block',
                            boxSizing: 'content-box',
                            width: 1,
                            height: '100%',
                            paddingBlock: o,
                            paddingInline: 0,
                            backgroundColor: q,
                            transition: `background-color ${ r }`,
                            content: '""'
                        }
                    },
                    '&:first-child': {
                        borderInlineStart: `${ o }px ${ p } ${ q }`,
                        borderStartStartRadius: A,
                        borderEndStartRadius: A
                    },
                    '&:last-child': {
                        borderStartEndRadius: A,
                        borderEndEndRadius: A
                    },
                    '&:first-child:last-child': {
                        borderRadius: A
                    },
                    [`${ n }-group-large &`]: {
                        height: x,
                        fontSize: w,
                        lineHeight: x - 2 * o + 'px',
                        '&:first-child': {
                            borderStartStartRadius: C,
                            borderEndStartRadius: C
                        },
                        '&:last-child': {
                            borderStartEndRadius: C,
                            borderEndEndRadius: C
                        }
                    },
                    [`${ n }-group-small &`]: {
                        height: y,
                        paddingInline: z - o,
                        paddingBlock: 0,
                        lineHeight: y - 2 * o + 'px',
                        '&:first-child': {
                            borderStartStartRadius: B,
                            borderEndStartRadius: B
                        },
                        '&:last-child': {
                            borderStartEndRadius: B,
                            borderEndEndRadius: B
                        }
                    },
                    '&:hover': {
                        position: 'relative',
                        color: D
                    },
                    '&:has(:focus-visible)': Object.assign({}, (0, g.genFocusOutline)(_d)),
                    [`${ n }-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [`&-checked:not(${ n }-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: D,
                        background: E,
                        borderColor: D,
                        '&::before': {
                            backgroundColor: D
                        },
                        '&:first-child': {
                            borderColor: D
                        },
                        '&:hover': {
                            color: F,
                            borderColor: F,
                            '&::before': {
                                backgroundColor: F
                            }
                        },
                        '&:active': {
                            color: G,
                            borderColor: G,
                            '&::before': {
                                backgroundColor: G
                            }
                        }
                    },
                    [`${ n }-group-solid &-checked:not(${ n }-button-wrapper-disabled)`]: {
                        color: H,
                        background: D,
                        borderColor: D,
                        '&:hover': {
                            color: H,
                            background: F,
                            borderColor: F
                        },
                        '&:active': {
                            color: H,
                            background: G,
                            borderColor: G
                        }
                    },
                    '&-disabled': {
                        color: I,
                        backgroundColor: J,
                        borderColor: q,
                        cursor: 'not-allowed',
                        '&:first-child, &:hover': {
                            color: I,
                            backgroundColor: J,
                            borderColor: q
                        }
                    },
                    [`&-disabled${ n }-button-wrapper-checked`]: {
                        color: K,
                        backgroundColor: L,
                        borderColor: q,
                        boxShadow: 'none'
                    }
                }
            };
        };
    var l = (0, e.default)('Radio', _d => {
        const {
            padding: m,
            lineWidth: n,
            controlItemBgActiveDisabled: o,
            colorTextDisabled: p,
            colorBgContainer: q,
            fontSizeLG: r,
            controlOutline: s,
            colorPrimaryHover: t,
            colorPrimaryActive: u,
            colorText: v,
            colorPrimary: w,
            marginXS: x,
            controlOutlineWidth: y,
            colorTextLightSolid: z,
            wireframe: A
        } = _d, B = `0 0 0 ${ y }px ${ s }`, C = B, D = r, E = D - 8, F = A ? E : D - 2 * (4 + n), G = w, H = v, I = t, J = u, K = m - n, L = p, M = x, N = (0, f.merge)(_d, {
            radioFocusShadow: B,
            radioButtonFocusShadow: C,
            radioSize: D,
            radioDotSize: F,
            radioDotDisabledSize: E,
            radioCheckedColor: G,
            radioDotDisabledColor: p,
            radioSolidCheckedColor: z,
            radioButtonBg: q,
            radioButtonCheckedBg: q,
            radioButtonColor: H,
            radioButtonHoverColor: I,
            radioButtonActiveColor: J,
            radioButtonPaddingHorizontal: K,
            radioDisabledButtonCheckedBg: o,
            radioDisabledButtonCheckedColor: L,
            radioWrapperMarginRight: M
        });
        return [
            i(N),
            j(N),
            k(N)
        ];
    });
}), a.register('s5a6g', function(b, c) {
    _d(b.exports, 'default', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    });
    var d = a('LEQ5w'),
        e = a('1P5ls'),
        f = a('hl66a0'),
        g = a('UK+Sg'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    const i = (o, b) => {
        const {
            getPrefixCls: j
        } = d.useContext(e.ConfigContext), {
            prefixCls: k
        } = o, l = h(o, ['prefixCls']), _m = j('radio', k);
        return d.createElement(f.RadioOptionTypeContextProvider, {
            value: 'button'
        }, d.createElement(g.default, Object.assign({
            prefixCls: _m
        }, l, {
            type: 'radio',
            ref: b
        })));
    };
    var j = d.forwardRef(i);
});