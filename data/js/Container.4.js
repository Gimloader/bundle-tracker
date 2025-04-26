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
c.register('eAjRL0', function(b, n) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('bz3Aj0'),
        e = c('yPg/P0'),
        f = c('eeBbk');
    const g = e.default;
    g.Button = f.default, g.Group = d.default, g.__ANT_RADIO = !0;
    var h = i;
}), c.register('bz3Aj0', function(n, o) {
    a(n.exports, 'default', function() {
        return q;
    });
    var d = c('VAIs1'),
        e = c('xgR9K'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('kLJIY'),
        i = c('Jr7s0'),
        j = c('azsyo0'),
        k = c('yPg/P0'),
        l = c('CrgBc0');
    const m = f.forwardRef((a, c) => {
        const {
            getPrefixCls: n,
            direction: o
        } = f.useContext(g.ConfigContext), p = f.useContext(h.default), [q, r] = (0, e.default)(a.defaultValue, {
            value: a.value
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
        } = G, H = n('radio', s), I = `${ H }-group`, [J, K] = (0, l.default)(H);
        let L = M;
        v && v.length > 0 && (L = v.map(G => 'string' == typeof G || 'number' == typeof G ? f.createElement(k.default, {
            key: G.toString(),
            prefixCls: H,
            disabled: x,
            value: G,
            checked: q === G
        }, G) : f.createElement(k.default, {
            key: `radio-group-value-options-${ G.value }`,
            prefixCls: H,
            disabled: G.disabled || x,
            value: G.value,
            checked: q === G.value,
            style: G.style
        }, G.label)));
        const N = z || p,
            O = b(d)(I, `${ I }-${ w }`, {
                [`${ I }-${ N }`]: N,
                [`${ I }-rtl`]: 'rtl' === o
            }, t, u, K);
        return J(f.createElement('div', Object.assign({}, (0, i.default)(G), {
            className: O,
            style: A,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F,
            id: B,
            ref: c
        }), f.createElement(j.RadioGroupContextProvider, {
            value: {
                onChange: b => {
                    const P = Q,
                        R = b.target.value;
                    'value' in G || r(R);
                    const {
                        onChange: S
                    } = T;
                    S && R !== P && S(b);
                },
                value: q,
                disabled: G.disabled,
                name: G.name,
                optionType: G.optionType
            }
        }, L)));
    });
    var n = f.memo(m);
}), c.register('azsyo0', function(b, o) {
    a(b.exports, 'RadioGroupContextProvider', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return g;
    }), a(b.exports, 'RadioOptionTypeContext', function() {
        return i;
    }), a(b.exports, 'RadioOptionTypeContextProvider', function() {
        return j;
    });
    var d = c('uPP4W');
    const e = d.createContext(null),
        f = e.Provider;
    var g = h;
    const i = d.createContext(null),
        j = i.Provider;
}), c.register('yPg/P0', function(o, p) {
    a(o.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('VAIs1'),
        e = c('CrMLT9'),
        f = c('XNhMJ'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('Cm5dS'),
        j = c('LhviC'),
        k = c('azsyo0'),
        l = c('CrgBc0'),
        m = function(a, b) {
            var n = {};
            for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && b.indexOf(o) < 0 && (n[o] = a[o]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(a); p < o.length; p++)
                    b.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[p]) && (n[o[p]] = a[o[p]]);
            }
            return n;
        };
    const n = (a, c) => {
        var o, p;
        const q = g.useContext(k.default),
            r = g.useContext(k.RadioOptionTypeContext),
            {
                getPrefixCls: s,
                direction: t
            } = g.useContext(h.ConfigContext),
            u = g.useRef(),
            v = (0, f.composeRef)(c, u),
            {
                isFormItemInput: w
            } = g.useContext(j.FormItemInputContext),
            x = b => {
                var y, z;
                null === (y = a.onChange) || void 0 === y || y.call(a, b), null === (z = null == q ? void 0 : q.onChange) || void 0 === z || z.call(q, b);
            },
            {
                prefixCls: y,
                className: z,
                rootClassName: A,
                children: B,
                style: C
            } = D,
            E = m(D, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            F = s('radio', y),
            G = 'button' === ((null == q ? void 0 : q.optionType) || r) ? `${ F }-button` : F,
            [H, I] = (0, l.default)(F),
            J = Object.assign({}, E),
            K = g.useContext(i.default);
        q && (J.name = q.name, J.onChange = x, J.checked = D.value === q.value, J.disabled = null !== (o = J.disabled) && void 0 !== o ? o : q.disabled), J.disabled = null !== (p = J.disabled) && void 0 !== p ? p : K;
        const L = b(d)(`${ G }-wrapper`, {
            [`${ G }-wrapper-checked`]: J.checked,
            [`${ G }-wrapper-disabled`]: J.disabled,
            [`${ G }-wrapper-rtl`]: 'rtl' === t,
            [`${ G }-wrapper-in-form-item`]: w
        }, z, A, I);
        return H(g.createElement('label', {
            className: L,
            style: C,
            onMouseEnter: D.onMouseEnter,
            onMouseLeave: D.onMouseLeave
        }, g.createElement(e.default, Object.assign({}, J, {
            type: 'radio',
            prefixCls: G,
            ref: v
        })), void 0 !== B ? g.createElement('span', null, B) : null));
    };
    var o = g.forwardRef(n);
}), c.register('CrgBc0', function(b, m) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
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
        i = a => {
            const {
                componentCls: j,
                antCls: k
            } = l, m = `${ j }-group`;
            return {
                [m]: Object.assign(Object.assign({}, (0, g.resetComponent)(l)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ m }-rtl`]: {
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
        j = a => {
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
                colorBorder: t,
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
            } = E, F = `${ k }-inner`;
            return {
                [`${ k }-wrapper`]: Object.assign(Object.assign({}, (0, g.resetComponent)(E)), {
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
                        color: E.colorTextDisabled
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
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(E)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ k }-wrapper:hover &,\n        &:hover ${ F }`]: {
                        borderColor: m
                    },
                    [`${ k }-input:focus-visible + ${ F }`]: Object.assign({}, (0, g.genFocusOutline)(E)),
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
                        borderColor: t,
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
                        [F]: {
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
                        [F]: {
                            backgroundColor: w,
                            borderColor: t,
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
                            [F]: {
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
        k = a => {
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
            } = M;
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
                    '&:has(:focus-visible)': Object.assign({}, (0, g.genFocusOutline)(M)),
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
    var l = (0, e.default)('Radio', a => {
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
        } = B, C = `0 0 0 ${ y }px ${ s }`, D = E, F = G, H = F - 8, I = A ? H : F - 2 * (4 + n), J = K, L = M, N = O, P = Q, R = m - n, S = T, U = V, W = (0, f.merge)(B, {
            radioFocusShadow: E,
            radioButtonFocusShadow: D,
            radioSize: F,
            radioDotSize: I,
            radioDotDisabledSize: H,
            radioCheckedColor: J,
            radioDotDisabledColor: T,
            radioSolidCheckedColor: z,
            radioButtonBg: q,
            radioButtonCheckedBg: q,
            radioButtonColor: L,
            radioButtonHoverColor: N,
            radioButtonActiveColor: P,
            radioButtonPaddingHorizontal: R,
            radioDisabledButtonCheckedBg: o,
            radioDisabledButtonCheckedColor: S,
            radioWrapperMarginRight: U
        });
        return [
            i(W),
            j(W),
            k(W)
        ];
    });
}), c.register('eeBbk', function(b, j) {
    a(b.exports, 'default', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var d = c('uPP4W'),
        e = c('qEw51'),
        f = c('azsyo0'),
        g = c('yPg/P0'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    const i = (a, b) => {
        const {
            getPrefixCls: j
        } = d.useContext(e.ConfigContext), {
            prefixCls: k
        } = l, m = h(l, ['prefixCls']), n = j('radio', k);
        return d.createElement(f.RadioOptionTypeContextProvider, {
            value: 'button'
        }, d.createElement(g.default, Object.assign({
            prefixCls: n
        }, m, {
            type: 'radio',
            ref: b
        })));
    };
    var j = d.forwardRef(i);
});