function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('vKq/0', function(b, c) {
    _o(b.exports, 'default', function() {
        return _r;
    }, function(d) {
        return _r = d;
    });
    var d = a('mPo/q'),
        e = a('JrtKP'),
        f = a('PO2n1'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('hFUNe'),
        j = a('lWjQ8'),
        k = a('QyNEL'),
        l = a('qDgD6'),
        m = function(n, _o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && _o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    _o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const n = g.forwardRef((_n, a) => {
        var {
            prefixCls: o,
            size: p,
            disabled: q,
            loading: _r,
            className: s,
            rootClassName: t
        } = _n, u = m(_n, [
            'prefixCls',
            'size',
            'disabled',
            'loading',
            'className',
            'rootClassName'
        ]);
        const {
            getPrefixCls: v,
            direction: w
        } = g.useContext(h.ConfigContext), x = g.useContext(j.default), y = g.useContext(i.default), z = (null != q ? q : y) || _r, A = v('switch', o), B = g.createElement('div', {
            className: `${ A }-handle`
        }, _r && g.createElement(d.default, {
            className: `${ A }-loading-icon`
        })), [C, D] = (0, l.default)(A), E = _I(e)({
            [`${ A }-small`]: 'small' === (p || x),
            [`${ A }-loading`]: _r,
            [`${ A }-rtl`]: 'rtl' === w
        }, s, t, D);
        return C(g.createElement(k.default, null, g.createElement(f.default, Object.assign({}, u, {
            prefixCls: A,
            className: E,
            disabled: z,
            ref: a,
            loadingIcon: B
        }))));
    });
    n.__ANT_SWITCH = !0;
    var o = n;
}), a.register('PO2n1', function(b, c) {
    _n(b.exports, 'default', function() {
        return _s;
    });
    var d = a('S97w7'),
        e = a('C/xVN'),
        f = a('uPDRl'),
        g = a('jrm58'),
        h = a('LEQ5w'),
        i = a('JrtKP'),
        j = a('nV8kt'),
        k = a('r5619'),
        l = [
            'prefixCls',
            'className',
            'checked',
            'defaultChecked',
            'disabled',
            'loadingIcon',
            'checkedChildren',
            'unCheckedChildren',
            'onClick',
            'onChange',
            'onKeyDown'
        ],
        m = h.forwardRef(function(_n, o) {
            var p, q = _n.prefixCls,
                r = void 0 === q ? 'rc-switch' : q,
                _s = _n.className,
                t = _n.checked,
                u = _n.defaultChecked,
                v = _n.disabled,
                w = _n.loadingIcon,
                x = _n.checkedChildren,
                y = _n.unCheckedChildren,
                z = _n.onClick,
                A = _n.onChange,
                B = _n.onKeyDown,
                C = _I(g)(_n, l),
                D = (0, j.default)(!1, {
                    value: t,
                    defaultValue: u
                }),
                E = _I(f)(D, 2),
                F = E[0],
                G = E[1];

            function H(_I, J) {
                var K = F;
                return v || (G(K = _I), null == A || A(K, J)), K;
            }
            var H = _I(i)(r, _s, (p = {}, _I(e)(p, ''.concat(r, '-checked'), F), _I(e)(p, ''.concat(r, '-disabled'), v), p));
            return h.createElement('button', _I(d)({}, C, {
                type: 'button',
                role: 'switch',
                'aria-checked': F,
                disabled: v,
                className: H,
                ref: o,
                onKeyDown: function(_I) {
                    _I.which === k.default.LEFT ? P(!1, _I) : _I.which === k.default.RIGHT && P(!0, _I), null == B || B(_I);
                },
                onClick: function(I) {
                    var J = P(!F, I);
                    null == z || z(J, I);
                }
            }), w, h.createElement('span', {
                className: ''.concat(r, '-inner')
            }, h.createElement('span', {
                className: ''.concat(r, '-inner-checked')
            }, x), h.createElement('span', {
                className: ''.concat(r, '-inner-unchecked')
            }, y)));
        });
    m.displayName = 'Switch';
    var n = m;
}), a.register('S97w7', function(b, c) {
    function d() {
        return b.exports = d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, b.exports.default = b.exports, b.exports.__esModule = !0, d.apply(this, arguments);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('C/xVN', function(b, c) {
    b.exports = function(d, e, f) {
        return e in d ? Object.defineProperty(d, e, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : d[e] = f, d;
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('uPDRl', function(b, c) {
    var d = a('skJQa'),
        e = a('tFKTp'),
        f = a('3p4TM'),
        g = a('HVue9');
    b.exports = function(h, i) {
        return d(h) || e(h, i) || f(h, i) || g();
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('skJQa', function(b, c) {
    b.exports = function(d) {
        if (Array.isArray(d))
            return d;
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('tFKTp', function(b, c) {
    b.exports = function(d, e) {
        var f = null == d ? null : 'undefined' != typeof Symbol && d[Symbol.iterator] || d['@@iterator'];
        if (null != f) {
            var g, h, i = [],
                j = !0,
                k = !1;
            try {
                for (f = f.call(d); !(j = (g = f.next()).done) && (i.push(g.value), !e || i.length !== e); j = !0);
            } catch (d) {
                k = !0, h = d;
            } finally {
                try {
                    j || null == f.return || f.return();
                } finally {
                    if (k)
                        throw h;
                }
            }
            return i;
        }
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('3p4TM', function(b, c) {
    var d = a('7P/bX');
    b.exports = function(e, f) {
        if (e) {
            if ('string' == typeof e)
                return d(e, f);
            var g = Object.prototype.toString.call(e).slice(8, -1);
            return 'Object' === g && e.constructor && (g = e.constructor.name), 'Map' === g || 'Set' === g ? Array.from(e) : 'Arguments' === g || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? d(e, f) : void 0;
        }
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('7P/bX', function(b, c) {
    b.exports = function(d, e) {
        (null == e || e > d.length) && (e = d.length);
        for (var f = 0, g = new Array(e); f < e; f++)
            g[f] = d[f];
        return g;
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('HVue9', function(b, c) {
    b.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('jrm58', function(b, c) {
    var d = a('+AMtq');
    b.exports = function(e, f) {
        if (null == e)
            return {};
        var g, h, i = d(e, f);
        if (Object.getOwnPropertySymbols) {
            var j = Object.getOwnPropertySymbols(e);
            for (h = 0; h < j.length; h++)
                g = j[h], f.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(e, g) && (i[g] = e[g]);
        }
        return i;
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('+AMtq', function(b, c) {
    b.exports = function(d, e) {
        if (null == d)
            return {};
        var f, g, h = {},
            i = Object.keys(d);
        for (g = 0; g < i.length; g++)
            f = i[g], e.indexOf(f) >= 0 || (h[f] = d[f]);
        return h;
    }, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('nV8kt', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('su+sX'),
        e = a('LEQ5w');

    function _f(g, _h) {
        var i = _h || {},
            j = i.defaultValue,
            k = i.value,
            l = i.onChange,
            m = i.postState,
            n = e.useState(function() {
                return void 0 !== k ? k : void 0 !== j ? 'function' == typeof j ? j() : j : 'function' == typeof g ? g() : g;
            }),
            o = (0, d.default)(n, 2),
            p = o[0],
            q = o[1],
            r = void 0 !== k ? k : p;
        m && (r = m(r));
        var s = e.useRef(!0);
        return e.useEffect(function() {
            s.current ? s.current = !1 : void 0 === k && q(k);
        }, [k]), [
            r,
            function(t) {
                q(t), r !== t && l && l(t, r);
            }
        ];
    }
}), a.register('su+sX', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LxZWQ1'),
        e = a('bsn0/0'),
        f = a('oSrm4'),
        g = a('z+BmG');

    function _h(i, _j) {
        return (0, d.default)(i) || (0, e.default)(i, _j) || (0, f.default)(i, _j) || (0, g.default)();
    }
}), a.register('LxZWQ1', function(b, c) {
    function d(e) {
        if (Array.isArray(e))
            return e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('bsn0/0', function(b, c) {
    function _d(e, _f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j = [],
                k = !0,
                l = !1;
            try {
                for (g = g.call(e); !(k = (h = g.next()).done) && (j.push(h.value), !_f || j.length !== _f); k = !0);
            } catch (e) {
                l = !0, i = e;
            } finally {
                try {
                    k || null == g.return || g.return();
                } finally {
                    if (l)
                        throw i;
                }
            }
            return j;
        }
    }
    _g(b.exports, 'default', function() {
        return _c;
    });
}), a.register('oSrm4', function(b, _c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('2V18q');

    function _e(f, _g) {
        if (f) {
            if ('string' == typeof f)
                return (0, d.default)(f, _g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? (0, d.default)(f, _g) : void 0;
        }
    }
}), a.register('2V18q', function(b, c) {
    function d(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('z+BmG', function(b, c) {
    function _d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('r5619', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(e) {
                var _f = e.keyCode;
                if (e.altKey && !e.ctrlKey || e.metaKey || _f >= _d.F1 && _f <= _d.F12)
                    return !1;
                switch (_f) {
                    case _d.ALT:
                    case _d.CAPS_LOCK:
                    case _d.CONTEXT_MENU:
                    case _d.CTRL:
                    case _d.DOWN:
                    case _d.END:
                    case _d.ESC:
                    case _d.HOME:
                    case _d.INSERT:
                    case _d.LEFT:
                    case _d.MAC_FF_META:
                    case _d.META:
                    case _d.NUMLOCK:
                    case _d.NUM_CENTER:
                    case _d.PAGE_DOWN:
                    case _d.PAGE_UP:
                    case _d.PAUSE:
                    case _d.PRINT_SCREEN:
                    case _d.RIGHT:
                    case _d.SHIFT:
                    case _d.UP:
                    case _d.WIN_KEY:
                    case _d.WIN_KEY_RIGHT:
                        return !1;
                    default:
                        return !0;
                }
            },
            isCharacterKey: function(e) {
                if (e >= _d.ZERO && e <= _d.NINE)
                    return !0;
                if (e >= _d.NUM_ZERO && e <= _d.NUM_MULTIPLY)
                    return !0;
                if (e >= _d.A && e <= _d.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
                    return !0;
                switch (e) {
                    case _d.SPACE:
                    case _d.QUESTION_MARK:
                    case _d.NUM_PLUS:
                    case _d.NUM_MINUS:
                    case _d.NUM_PERIOD:
                    case _d.NUM_DIVISION:
                    case _d.SEMICOLON:
                    case _d.DASH:
                    case _d.EQUALS:
                    case _d.COMMA:
                    case _d.PERIOD:
                    case _d.SLASH:
                    case _d.APOSTROPHE:
                    case _d.SINGLE_QUOTE:
                    case _d.OPEN_SQUARE_BRACKET:
                    case _d.BACKSLASH:
                    case _d.CLOSE_SQUARE_BRACKET:
                        return !0;
                    default:
                        return !1;
                }
            }
        },
        _e = _d;
}), a.register('qDgD6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _m;
    });
    var d = a('hQidN'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = b => {
            const {
                componentCls: _i
            } = b, j = `${ _i }-inner`;
            return {
                [_i]: {
                    [`&${ _i }-small`]: {
                        minWidth: b.switchMinWidthSM,
                        height: b.switchHeightSM,
                        lineHeight: `${ b.switchHeightSM }px`,
                        [`${ _i }-inner`]: {
                            paddingInlineStart: b.switchInnerMarginMaxSM,
                            paddingInlineEnd: b.switchInnerMarginMinSM,
                            [`${ j }-checked`]: {
                                marginInlineStart: `calc(-100% + ${ b.switchPinSizeSM + 2 * b.switchPadding }px - ${ 2 * b.switchInnerMarginMaxSM }px)`,
                                marginInlineEnd: `calc(100% - ${ b.switchPinSizeSM + 2 * b.switchPadding }px + ${ 2 * b.switchInnerMarginMaxSM }px)`
                            },
                            [`${ j }-unchecked`]: {
                                marginTop: -b.switchHeightSM,
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            }
                        },
                        [`${ _i }-handle`]: {
                            width: b.switchPinSizeSM,
                            height: b.switchPinSizeSM
                        },
                        [`${ _i }-loading-icon`]: {
                            top: (b.switchPinSizeSM - b.switchLoadingIconSize) / 2,
                            fontSize: b.switchLoadingIconSize
                        },
                        [`&${ _i }-checked`]: {
                            [`${ _i }-inner`]: {
                                paddingInlineStart: b.switchInnerMarginMinSM,
                                paddingInlineEnd: b.switchInnerMarginMaxSM,
                                [`${ j }-checked`]: {
                                    marginInlineStart: 0,
                                    marginInlineEnd: 0
                                },
                                [`${ j }-unchecked`]: {
                                    marginInlineStart: `calc(100% - ${ b.switchPinSizeSM + 2 * b.switchPadding }px + ${ 2 * b.switchInnerMarginMaxSM }px)`,
                                    marginInlineEnd: `calc(-100% + ${ b.switchPinSizeSM + 2 * b.switchPadding }px - ${ 2 * b.switchInnerMarginMaxSM }px)`
                                }
                            },
                            [`${ _i }-handle`]: {
                                insetInlineStart: `calc(100% - ${ b.switchPinSizeSM + b.switchPadding }px)`
                            }
                        },
                        [`&:not(${ _i }-disabled):active`]: {
                            [`&:not(${ _i }-checked) ${ j }`]: {
                                [`${ j }-unchecked`]: {
                                    marginInlineStart: b.marginXXS / 2,
                                    marginInlineEnd: -b.marginXXS / 2
                                }
                            },
                            [`&${ _i }-checked ${ j }`]: {
                                [`${ j }-checked`]: {
                                    marginInlineStart: -b.marginXXS / 2,
                                    marginInlineEnd: b.marginXXS / 2
                                }
                            }
                        }
                    }
                }
            };
        },
        i = b => {
            const {
                componentCls: j
            } = b;
            return {
                [j]: {
                    [`${ j }-loading-icon${ b.iconCls }`]: {
                        position: 'relative',
                        top: (b.switchPinSize - b.fontSize) / 2,
                        color: b.switchLoadingIconColor,
                        verticalAlign: 'top'
                    },
                    [`&${ j }-checked ${ j }-loading-icon`]: {
                        color: b.switchColor
                    }
                }
            };
        },
        j = b => {
            const {
                componentCls: k
            } = b, l = `${ k }-handle`;
            return {
                [k]: {
                    [l]: {
                        position: 'absolute',
                        top: b.switchPadding,
                        insetInlineStart: b.switchPadding,
                        width: b.switchPinSize,
                        height: b.switchPinSize,
                        transition: `all ${ b.switchDuration } ease-in-out`,
                        '&::before': {
                            position: 'absolute',
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            backgroundColor: b.colorWhite,
                            borderRadius: b.switchPinSize / 2,
                            boxShadow: b.switchHandleShadow,
                            transition: `all ${ b.switchDuration } ease-in-out`,
                            content: '""'
                        }
                    },
                    [`&${ k }-checked ${ l }`]: {
                        insetInlineStart: `calc(100% - ${ b.switchPinSize + b.switchPadding }px)`
                    },
                    [`&:not(${ k }-disabled):active`]: {
                        [`${ l }::before`]: {
                            insetInlineEnd: b.switchHandleActiveInset,
                            insetInlineStart: 0
                        },
                        [`&${ k }-checked ${ l }::before`]: {
                            insetInlineEnd: 0,
                            insetInlineStart: b.switchHandleActiveInset
                        }
                    }
                }
            };
        },
        k = b => {
            const {
                componentCls: l
            } = b, m = `${ l }-inner`;
            return {
                [l]: {
                    [m]: {
                        display: 'block',
                        overflow: 'hidden',
                        borderRadius: 100,
                        height: '100%',
                        paddingInlineStart: b.switchInnerMarginMax,
                        paddingInlineEnd: b.switchInnerMarginMin,
                        transition: `padding-inline-start ${ b.switchDuration } ease-in-out, padding-inline-end ${ b.switchDuration } ease-in-out`,
                        [`${ m }-checked, ${ m }-unchecked`]: {
                            display: 'block',
                            color: b.colorTextLightSolid,
                            fontSize: b.fontSizeSM,
                            transition: `margin-inline-start ${ b.switchDuration } ease-in-out, margin-inline-end ${ b.switchDuration } ease-in-out`,
                            pointerEvents: 'none'
                        },
                        [`${ m }-checked`]: {
                            marginInlineStart: `calc(-100% + ${ b.switchPinSize + 2 * b.switchPadding }px - ${ 2 * b.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(100% - ${ b.switchPinSize + 2 * b.switchPadding }px + ${ 2 * b.switchInnerMarginMax }px)`
                        },
                        [`${ m }-unchecked`]: {
                            marginTop: -b.switchHeight,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`&${ l }-checked ${ m }`]: {
                        paddingInlineStart: b.switchInnerMarginMin,
                        paddingInlineEnd: b.switchInnerMarginMax,
                        [`${ m }-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${ m }-unchecked`]: {
                            marginInlineStart: `calc(100% - ${ b.switchPinSize + 2 * b.switchPadding }px + ${ 2 * b.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(-100% + ${ b.switchPinSize + 2 * b.switchPadding }px - ${ 2 * b.switchInnerMarginMax }px)`
                        }
                    },
                    [`&:not(${ l }-disabled):active`]: {
                        [`&:not(${ l }-checked) ${ m }`]: {
                            [`${ m }-unchecked`]: {
                                marginInlineStart: 2 * b.switchPadding,
                                marginInlineEnd: 2 * -b.switchPadding
                            }
                        },
                        [`&${ l }-checked ${ m }`]: {
                            [`${ m }-checked`]: {
                                marginInlineStart: 2 * -b.switchPadding,
                                marginInlineEnd: 2 * b.switchPadding
                            }
                        }
                    }
                }
            };
        },
        l = b => {
            const {
                componentCls: m
            } = b;
            return {
                [m]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, g.resetComponent)(b)), {
                    position: 'relative',
                    display: 'inline-block',
                    boxSizing: 'border-box',
                    minWidth: b.switchMinWidth,
                    height: b.switchHeight,
                    lineHeight: `${ b.switchHeight }px`,
                    verticalAlign: 'middle',
                    background: b.colorTextQuaternary,
                    border: '0',
                    borderRadius: 100,
                    cursor: 'pointer',
                    transition: `all ${ b.motionDurationMid }`,
                    userSelect: 'none',
                    [`&:hover:not(${ m }-disabled)`]: {
                        background: b.colorTextTertiary
                    }
                }), (0, g.genFocusStyle)(b)), {
                    [`&${ m }-checked`]: {
                        background: b.switchColor,
                        [`&:hover:not(${ m }-disabled)`]: {
                            background: b.colorPrimaryHover
                        }
                    },
                    [`&${ m }-loading, &${ m }-disabled`]: {
                        cursor: 'not-allowed',
                        opacity: b.switchDisabledOpacity,
                        '*': {
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        }
                    },
                    [`&${ m }-rtl`]: {
                        direction: 'rtl'
                    }
                })
            };
        };
    var _m = (0, e.default)('Switch', b => {
        const n = b.fontSize * b.lineHeight,
            o = b.controlHeight / 2,
            p = n - 4,
            q = o - 4,
            r = (0, f.merge)(b, {
                switchMinWidth: 2 * p + 8,
                switchHeight: n,
                switchDuration: b.motionDurationMid,
                switchColor: b.colorPrimary,
                switchDisabledOpacity: b.opacityLoading,
                switchInnerMarginMin: p / 2,
                switchInnerMarginMax: p + 2 + 4,
                switchPadding: 2,
                switchPinSize: p,
                switchBg: b.colorBgContainer,
                switchMinWidthSM: 2 * q + 4,
                switchHeightSM: o,
                switchInnerMarginMinSM: q / 2,
                switchInnerMarginMaxSM: q + 2 + 4,
                switchPinSizeSM: q,
                switchHandleShadow: `0 2px 4px 0 ${ new (0, d.TinyColor)('#00230b').setAlpha(0.2).toRgbString() }`,
                switchLoadingIconSize: 0.75 * b.fontSizeIcon,
                switchLoadingIconColor: `rgba(0, 0, 0, ${ b.opacityLoading })`,
                switchHandleActiveInset: '-30%'
            });
        return [
            l(r),
            k(r),
            j(r),
            i(r),
            h(r)
        ];
    });
});