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
c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    }, function (f) {
        return _p = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = (p, q) => {
        var r, {
                prefixCls: s,
                className: t,
                rootClassName: u,
                children: v,
                indeterminate: w = !1,
                style: x,
                onMouseEnter: y,
                onMouseLeave: z,
                skipGroup: A = !1,
                disabled: B
            } = p, C = n(p, [
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
                getPrefixCls: D,
                direction: E
            } = h.useContext(i.ConfigContext), F = h.useContext(k.GroupContext), {isFormItemInput: G} = h.useContext(j.FormItemInputContext), H = h.useContext(l.default), I = null !== (r = (null == F ? void 0 : F.disabled) || B) && void 0 !== r ? r : H, J = h.useRef(C.value);
        h.useEffect(() => {
            null == F || F.registerValue(C.value);
        }, []), h.useEffect(() => {
            if (!A)
                return C.value !== J.current && (null == F || F.cancelValue(J.current), null == F || F.registerValue(C.value), J.current = C.value), () => null == F ? void 0 : F.cancelValue(C.value);
        }, [C.value]);
        const K = D('checkbox', s), [L, M] = (0, m.default)(K), N = Object.assign({}, C);
        F && !A && (N.onChange = function () {
            C.onChange && C.onChange.apply(C, arguments), F.toggleOption && F.toggleOption({
                label: v,
                value: C.value
            });
        }, N.name = F.name, N.checked = F.value.includes(C.value));
        const O = b(f)({
                [`${ K }-wrapper`]: !0,
                [`${ K }-rtl`]: 'rtl' === E,
                [`${ K }-wrapper-checked`]: N.checked,
                [`${ K }-wrapper-disabled`]: I,
                [`${ K }-wrapper-in-form-item`]: G
            }, t, u, M), P = b(f)({ [`${ K }-indeterminate`]: w }, M), Q = w ? 'mixed' : void 0;
        return L(h.createElement('label', {
            className: O,
            style: x,
            onMouseEnter: y,
            onMouseLeave: z
        }, h.createElement(g.default, Object.assign({ 'aria-checked': Q }, N, {
            prefixCls: K,
            className: P,
            disabled: I,
            ref: q
        })), void 0 !== v && h.createElement('span', null, v)));
    };
    var _p = h.forwardRef(o);
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupContext', function () {
        return _n;
    }, function (f) {
        return _n = f;
    }), a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = function (n, o) {
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
    const _n = i.createContext(null), o = (p, q) => {
            var {
                    defaultValue: r,
                    children: s,
                    options: t = [],
                    prefixCls: u,
                    className: v,
                    rootClassName: w,
                    style: x,
                    onChange: y
                } = p, z = m(p, [
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
                    getPrefixCls: A,
                    direction: B
                } = i.useContext(j.ConfigContext), [C, D] = i.useState(z.value || r || []), [E, F] = i.useState([]);
            i.useEffect(() => {
                'value' in z && D(z.value || []);
            }, [z.value]);
            const G = () => t.map(H => 'string' == typeof H || 'number' == typeof H ? {
                    label: H,
                    value: H
                } : H), H = A('checkbox', u), I = `${ H }-group`, [J, K] = (0, l.default)(H), L = (0, h.default)(z, [
                    'value',
                    'disabled'
                ]);
            t && t.length > 0 && (s = G().map(M => i.createElement(k.default, {
                prefixCls: H,
                key: M.value.toString(),
                disabled: 'disabled' in M ? M.disabled : z.disabled,
                value: M.value,
                checked: C.includes(M.value),
                onChange: M.onChange,
                className: `${ I }-item`,
                style: M.style
            }, M.label)));
            const M = {
                    toggleOption: N => {
                        const O = C.indexOf(N.value), P = (0, f.default)(C);
                        -1 === O ? P.push(N.value) : P.splice(O, 1), 'value' in z || D(P);
                        const Q = G();
                        null == y || y(P.filter(R => E.includes(R)).sort((R, S) => Q.findIndex(T => T.value === R) - Q.findIndex(T => T.value === S)));
                    },
                    value: C,
                    disabled: z.disabled,
                    name: z.name,
                    registerValue: N => {
                        F(O => [].concat((0, f.default)(O), [N]));
                    },
                    cancelValue: N => {
                        F(O => O.filter(P => P !== N));
                    }
                }, N = b(g)(I, { [`${ I }-rtl`]: 'rtl' === B }, v, w, K);
            return J(i.createElement('div', Object.assign({
                className: N,
                style: x
            }, L, { ref: q }), i.createElement(_n.Provider, { value: M }, s)));
        }, p = i.forwardRef(o);
    var _q = i.memo(p);
}), c.register('.....', function (d, e) {
    a(d.exports, 'getStyle', function () {
        return _l;
    }), a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = new (0, f.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }), k = l => {
            const {checkboxCls: m} = l, n = `${ m }-wrapper`;
            return [
                {
                    [`${ m }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), { display: 'inline-flex' }),
                    [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ n }`]: { marginInlineStart: l.marginXS },
                        [`&${ n }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ m }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ m }-inner`]: Object.assign({}, (0, i.genFocusOutline)(l))
                        },
                        [`${ m }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: l.checkboxSize,
                            height: l.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: l.colorBgContainer,
                            border: `${ l.lineWidth }px ${ l.lineType } ${ l.colorBorder }`,
                            borderRadius: l.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ l.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: l.checkboxSize / 14 * 5,
                                height: l.checkboxSize / 14 * 8,
                                border: `${ l.lineWidthBold }px solid ${ l.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ l.motionDurationFast } ${ l.motionEaseInBack }, opacity ${ l.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: l.paddingXS,
                            paddingInlineEnd: l.paddingXS
                        }
                    })
                },
                {
                    [m]: {
                        '&-indeterminate': {
                            [`${ m }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: l.fontSizeLG / 2,
                                    height: l.fontSizeLG / 2,
                                    backgroundColor: l.colorPrimary,
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
                    [`${ n }:hover ${ m }:after`]: { visibility: 'visible' },
                    [`\n        ${ n }:not(${ n }-disabled),\n        ${ m }:not(${ m }-disabled)\n      `]: { [`&:hover ${ m }-inner`]: { borderColor: l.colorPrimary } },
                    [`${ n }:not(${ n }-disabled)`]: {
                        [`&:hover ${ m }-checked:not(${ m }-disabled) ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }-checked:not(${ m }-disabled):after`]: { borderColor: l.colorPrimaryHover }
                    }
                },
                {
                    [`${ m }-checked`]: {
                        [`${ m }-inner`]: {
                            backgroundColor: l.colorPrimary,
                            borderColor: l.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ l.motionDurationMid } ${ l.motionEaseOutBack } ${ l.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: l.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ l.lineWidthBold }px solid ${ l.colorPrimary }`,
                            animationName: j,
                            animationDuration: l.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ l.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ n }-checked:not(${ n }-disabled),\n        ${ m }-checked:not(${ m }-disabled)\n      `]: {
                        [`&:hover ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }:after`]: { borderColor: l.colorPrimaryHover }
                    }
                },
                {
                    [`${ n }-disabled`]: { cursor: 'not-allowed' },
                    [`${ m }-disabled`]: {
                        [`&, ${ m }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ m }-inner`]: {
                            background: l.colorBgContainerDisabled,
                            borderColor: l.colorBorder,
                            '&:after': { borderColor: l.colorTextDisabled }
                        },
                        '&:after': { display: 'none' },
                        '& + span': { color: l.colorTextDisabled },
                        [`&${ m }-indeterminate ${ m }-inner::after`]: { background: l.colorTextDisabled }
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
    var _n = (0, g.default)('Checkbox', (o, p) => {
        let {prefixCls: q} = p;
        return [_l(q, o)];
    });
});