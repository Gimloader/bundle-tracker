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
c.register('0nKwk1', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4shVI1'),
        g = c('q2qDo1');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('4shVI1', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    }, function(f) {
        return _s = f;
    });
    var f = c('/U36/'),
        g = c('y095j9'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('LbJH1'),
        k = c('q2qDo1'),
        l = c('XDmwF'),
        m = c('NgjTH0'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (a, c) => {
        var p, {
                prefixCls: q,
                className: r,
                rootClassName: _s,
                children: t,
                indeterminate: u = !1,
                style: v,
                onMouseEnter: w,
                onMouseLeave: x,
                skipGroup: y = !1,
                disabled: z
            } = a,
            A = n(a, [
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
            getPrefixCls: B,
            direction: C
        } = h.useContext(i.ConfigContext), D = h.useContext(k.GroupContext), {
            isFormItemInput: E
        } = h.useContext(j.FormItemInputContext), F = h.useContext(l.default), G = null !== (p = (null == D ? void 0 : D.disabled) || z) && void 0 !== p ? p : F, H = h.useRef(A.value);
        h.useEffect(() => {
            null == D || D.registerValue(A.value);
        }, []), h.useEffect(() => {
            if (!y)
                return A.value !== H.current && (null == D || D.cancelValue(H.current), null == D || D.registerValue(A.value), H.current = A.value), () => null == D ? void 0 : D.cancelValue(A.value);
        }, [A.value]);
        const I = B('checkbox', q),
            [J, K] = (0, m.default)(I),
            L = Object.assign({}, A);
        D && !y && (L.onChange = function() {
            A.onChange && A.onChange.apply(A, arguments), D.toggleOption && D.toggleOption({
                label: t,
                value: A.value
            });
        }, L.name = D.name, L.checked = D.value.includes(A.value));
        const M = b(f)({
                [`${ I }-wrapper`]: !0,
                [`${ I }-rtl`]: 'rtl' === C,
                [`${ I }-wrapper-checked`]: L.checked,
                [`${ I }-wrapper-disabled`]: G,
                [`${ I }-wrapper-in-form-item`]: E
            }, r, _s, K),
            N = b(f)({
                [`${ I }-indeterminate`]: u
            }, K),
            O = u ? 'mixed' : void 0;
        return J(h.createElement('label', {
            className: M,
            style: v,
            onMouseEnter: w,
            onMouseLeave: x
        }, h.createElement(g.default, Object.assign({
            'aria-checked': O
        }, L, {
            prefixCls: I,
            className: N,
            disabled: G,
            ref: c
        })), void 0 !== t && h.createElement('span', null, t)));
    };
    var p = h.forwardRef(o);
}), c.register('q2qDo1', function(d, e) {
    a(d.exports, 'GroupContext', function() {
        return _n;
    }, function(f) {
        return _n = f;
    }), a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('g8lYc'),
        g = c('/U36/'),
        h = c('Kpy/B'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('4shVI1'),
        l = c('NgjTH0'),
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
    const _n = i.createContext(null),
        o = (a, c) => {
            var {
                defaultValue: p,
                children: q,
                options: r = [],
                prefixCls: s,
                className: _t,
                rootClassName: u,
                style: v,
                onChange: w
            } = a, x = m(a, [
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
                getPrefixCls: y,
                direction: z
            } = i.useContext(j.ConfigContext), [A, B] = i.useState(x.value || p || []), [C, D] = i.useState([]);
            i.useEffect(() => {
                'value' in x && B(x.value || []);
            }, [x.value]);
            const E = () => r.map(a => 'string' == typeof a || 'number' == typeof a ? {
                    label: a,
                    value: a
                } : a),
                F = y('checkbox', s),
                G = `${ F }-group`,
                [H, I] = (0, l.default)(F),
                J = (0, h.default)(x, [
                    'value',
                    'disabled'
                ]);
            r && r.length > 0 && (q = E().map(a => i.createElement(k.default, {
                prefixCls: F,
                key: a.value.toString(),
                disabled: 'disabled' in a ? a.disabled : x.disabled,
                value: a.value,
                checked: A.includes(a.value),
                onChange: a.onChange,
                className: `${ G }-item`,
                style: a.style
            }, a.label)));
            const K = {
                    toggleOption: a => {
                        const L = A.indexOf(a.value),
                            M = (0, f.default)(A); -
                        1 === L ? M.push(a.value) : M.splice(L, 1), 'value' in x || B(M);
                        const N = E();
                        null == w || w(M.filter(a => C.includes(a)).sort((a, L) => N.findIndex(L => L.value === a) - N.findIndex(a => a.value === L)));
                    },
                    value: A,
                    disabled: x.disabled,
                    name: x.name,
                    registerValue: a => {
                        D(b => [].concat((0, f.default)(b), [a]));
                    },
                    cancelValue: a => {
                        D(b => b.filter(b => b !== a));
                    }
                },
                L = b(g)(G, {
                    [`${ G }-rtl`]: 'rtl' === z
                }, _t, u, I);
            return H(i.createElement('div', Object.assign({
                className: L,
                style: v
            }, J, {
                ref: c
            }), i.createElement(_n.Provider, {
                value: K
            }, q)));
        },
        p = i.forwardRef(o);
    var q = i.memo(p);
}), c.register('NgjTH0', function(d, e) {
    a(d.exports, 'getStyle', function() {
        return _l;
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = new(0, f.Keyframes)('antCheckboxEffect', {
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
                checkboxCls: l
            } = a, m = `${ l }-wrapper`;
            return [{
                    [`${ l }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex'
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ m }`]: {
                            marginInlineStart: a.marginXS
                        },
                        [`&${ m }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ l }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ l }-inner`]: Object.assign({}, (0, i.genFocusOutline)(a))
                        },
                        [`${ l }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: a.checkboxSize,
                            height: a.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: a.colorBgContainer,
                            border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                            borderRadius: a.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ a.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: a.checkboxSize / 14 * 5,
                                height: a.checkboxSize / 14 * 8,
                                border: `${ a.lineWidthBold }px solid ${ a.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ a.motionDurationFast } ${ a.motionEaseInBack }, opacity ${ a.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: a.paddingXS,
                            paddingInlineEnd: a.paddingXS
                        }
                    })
                },
                {
                    [l]: {
                        '&-indeterminate': {
                            [`${ l }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: a.fontSizeLG / 2,
                                    height: a.fontSizeLG / 2,
                                    backgroundColor: a.colorPrimary,
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
                    [`${ m }:hover ${ l }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ m }:not(${ m }-disabled),\n        ${ l }:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            borderColor: a.colorPrimary
                        }
                    },
                    [`${ m }:not(${ m }-disabled)`]: {
                        [`&:hover ${ l }-checked:not(${ l }-disabled) ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }-checked:not(${ l }-disabled):after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-checked`]: {
                        [`${ l }-inner`]: {
                            backgroundColor: a.colorPrimary,
                            borderColor: a.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ a.motionDurationMid } ${ a.motionEaseOutBack } ${ a.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: a.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ a.lineWidthBold }px solid ${ a.colorPrimary }`,
                            animationName: j,
                            animationDuration: a.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ a.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ m }-checked:not(${ m }-disabled),\n        ${ l }-checked:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }:after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ m }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ l }-disabled`]: {
                        [`&, ${ l }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ l }-inner`]: {
                            background: a.colorBgContainerDisabled,
                            borderColor: a.colorBorder,
                            '&:after': {
                                borderColor: a.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: a.colorTextDisabled
                        },
                        [`&${ l }-indeterminate ${ l }-inner::after`]: {
                            background: a.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _l(m, n) {
        const o = (0, h.merge)(n, {
            checkboxCls: `.${ m }`,
            checkboxSize: n.controlInteractiveSize
        });
        return [k(o)];
    }
    var _m = (0, g.default)('Checkbox', (a, d) => {
        let {
            prefixCls: n
        } = d;
        return [_l(n, a)];
    });
});