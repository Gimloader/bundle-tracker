function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, o) {
    Object.defineProperty(a, b, {
        get: c,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('i0MGm', function(o, p) {
    b(o.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('TyHdy'),
        e = c('VAIs1'),
        f = c('4hsB/'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('Cm5dS'),
        j = c('kLJIY'),
        k = c('PYjVb'),
        l = c('o0D6Z'),
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
    const n = g.forwardRef((b, c) => {
        var {
            prefixCls: o,
            size: p,
            disabled: q,
            loading: r,
            className: s,
            rootClassName: t
        } = u, v = m(u, [
            'prefixCls',
            'size',
            'disabled',
            'loading',
            'className',
            'rootClassName'
        ]);
        const {
            getPrefixCls: w,
            direction: x
        } = g.useContext(h.ConfigContext), y = g.useContext(j.default), z = g.useContext(i.default), A = (null != q ? q : z) || r, B = w('switch', o), C = g.createElement('div', {
            className: `${ B }-handle`
        }, r && g.createElement(d.default, {
            className: `${ B }-loading-icon`
        })), [D, E] = (0, l.default)(B), F = a(e)({
            [`${ B }-small`]: 'small' === (p || y),
            [`${ B }-loading`]: r,
            [`${ B }-rtl`]: 'rtl' === x
        }, s, t, E);
        return D(g.createElement(k.default, null, g.createElement(f.default, Object.assign({}, v, {
            prefixCls: B,
            className: F,
            disabled: A,
            ref: c,
            loadingIcon: C
        }))));
    });
    n.__ANT_SWITCH = !0;
    var o = p;
}), c.register('4hsB/', function(n, o) {
    b(n.exports, 'default', function() {
        return q;
    });
    var d = c('VMd+o'),
        e = c('rZ2t2'),
        f = c('u5ceg'),
        g = c('6m8gr'),
        h = c('uPP4W'),
        i = c('VAIs1'),
        j = c('AcmXk'),
        k = c('vGcaa'),
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
        m = h.forwardRef(function(b, c) {
            var n, o = b.prefixCls,
                p = void 0 === o ? 'rc-switch' : o,
                q = b.className,
                r = b.checked,
                s = b.defaultChecked,
                t = b.disabled,
                u = b.loadingIcon,
                v = b.checkedChildren,
                w = b.unCheckedChildren,
                x = b.onClick,
                y = b.onChange,
                z = b.onKeyDown,
                A = a(g)(b, l),
                B = (0, j.default)(!1, {
                    value: r,
                    defaultValue: s
                }),
                C = a(f)(B, 2),
                D = C[0],
                E = C[1];

            function F(a, b) {
                var G = H;
                return t || (E(G = a), null == y || y(G, b)), G;
            }
            var G = a(i)(p, q, (n = {}, a(e)(n, ''.concat(p, '-checked'), D), a(e)(n, ''.concat(p, '-disabled'), t), n));
            return h.createElement('button', a(d)({}, A, {
                type: 'button',
                role: 'switch',
                'aria-checked': D,
                disabled: t,
                className: G,
                ref: c,
                onKeyDown: function(a) {
                    a.which === k.default.LEFT ? F(!1, a) : a.which === k.default.RIGHT && F(!0, a), null == z || z(a);
                },
                onClick: function(a) {
                    var H = F(!D, a);
                    null == x || x(H, a);
                }
            }), u, h.createElement('span', {
                className: ''.concat(p, '-inner')
            }, h.createElement('span', {
                className: ''.concat(p, '-inner-checked')
            }, v), h.createElement('span', {
                className: ''.concat(p, '-inner-unchecked')
            }, w)));
        });
    m.displayName = 'Switch';
    var n = o;
}), c.register('VMd+o', function(a, b) {
    function d() {
        return a.exports = d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0, d.apply(this, arguments);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('rZ2t2', function(a, b) {
    a.exports = function(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('u5ceg', function(a, b) {
    var d = c('9n6I5'),
        e = c('8vi4v'),
        f = c('7c560'),
        g = c('QyG92');
    a.exports = function(a, b) {
        return d(a) || e(a, b) || f(a, b) || g();
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('9n6I5', function(a, b) {
    a.exports = function(a) {
        if (Array.isArray(a))
            return a;
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('8vi4v', function(a, b) {
    a.exports = function(a, b) {
        var d = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != d) {
            var e, f, g = [],
                h = !0,
                i = !1;
            try {
                for (d = d.call(a); !(h = (e = d.next()).done) && (g.push(e.value), !b || g.length !== b); h = !0);
            } catch (a) {
                i = !0, f = a;
            } finally {
                try {
                    h || null == d.return || d.return();
                } finally {
                    if (i)
                        throw f;
                }
            }
            return g;
        }
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('7c560', function(a, b) {
    var d = c('SVdKz');
    a.exports = function(a, b) {
        if (a) {
            if ('string' == typeof a)
                return d(a, b);
            var e = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === e && a.constructor && (e = a.constructor.name), 'Map' === e || 'Set' === e ? Array.from(a) : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? d(a, b) : void 0;
        }
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('SVdKz', function(a, b) {
    a.exports = function(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var d = 0, e = new Array(b); d < b; d++)
            e[d] = a[d];
        return e;
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('QyG92', function(a, b) {
    a.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('6m8gr', function(a, b) {
    var d = c('nQ2Ei');
    a.exports = function(a, b) {
        if (null == a)
            return {};
        var e, f, g = d(a, b);
        if (Object.getOwnPropertySymbols) {
            var h = Object.getOwnPropertySymbols(a);
            for (f = 0; f < h.length; f++)
                e = h[f], b.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(a, e) && (g[e] = a[e]);
        }
        return g;
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('nQ2Ei', function(a, b) {
    a.exports = function(a, b) {
        if (null == a)
            return {};
        var d, e, f = {},
            g = Object.keys(a);
        for (e = 0; e < g.length; e++)
            d = g[e], b.indexOf(d) >= 0 || (f[d] = a[d]);
        return f;
    }, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('AcmXk', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('AcxLa'),
        e = c('uPP4W');

    function f(a, b) {
        var g = b || {},
            h = g.defaultValue,
            i = g.value,
            j = g.onChange,
            k = g.postState,
            l = e.useState(function() {
                return void 0 !== i ? i : void 0 !== h ? 'function' == typeof h ? h() : h : 'function' == typeof a ? a() : a;
            }),
            m = (0, d.default)(l, 2),
            n = m[0],
            o = m[1],
            p = void 0 !== i ? i : n;
        k && (p = k(p));
        var q = e.useRef(!0);
        return e.useEffect(function() {
            q.current ? q.current = !1 : void 0 === i && o(i);
        }, [i]), [
            p,
            function(a) {
                o(a), p !== a && j && j(a, p);
            }
        ];
    }
}), c.register('AcxLa', function(a, d) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('CfzAX1'),
        e = c('h2+0b1'),
        f = c('QjHwH'),
        g = c('UPaUL1');

    function h(a, b) {
        return (0, d.default)(a) || (0, e.default)(a, b) || (0, f.default)(a, b) || (0, g.default)();
    }
}), c.register('CfzAX1', function(a, c) {
    function d(a) {
        if (Array.isArray(a))
            return a;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('h2+0b1', function(a, c) {
    function d(a, b) {
        var e = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != e) {
            var f, g, h = [],
                i = !0,
                j = !1;
            try {
                for (e = e.call(a); !(i = (f = e.next()).done) && (h.push(f.value), !b || h.length !== b); i = !0);
            } catch (a) {
                j = !0, g = a;
            } finally {
                try {
                    i || null == e.return || e.return();
                } finally {
                    if (j)
                        throw g;
                }
            }
            return h;
        }
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('QjHwH', function(a, d) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('VoKYN1');

    function e(a, b) {
        if (a) {
            if ('string' == typeof a)
                return (0, d.default)(a, b);
            var f = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === f && a.constructor && (f = a.constructor.name), 'Map' === f || 'Set' === f ? Array.from(a) : 'Arguments' === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? (0, d.default)(a, b) : void 0;
        }
    }
}), c.register('VoKYN1', function(a, c) {
    function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var e = 0, f = new Array(b); e < b; e++)
            f[e] = a[e];
        return f;
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('UPaUL1', function(a, c) {
    function d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('vGcaa', function(a, c) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = {
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
            isTextModifyingKeyEvent: function(a) {
                var e = a.keyCode;
                if (a.altKey && !a.ctrlKey || a.metaKey || e >= d.F1 && e <= d.F12)
                    return !1;
                switch (e) {
                    case d.ALT:
                    case d.CAPS_LOCK:
                    case d.CONTEXT_MENU:
                    case d.CTRL:
                    case d.DOWN:
                    case d.END:
                    case d.ESC:
                    case d.HOME:
                    case d.INSERT:
                    case d.LEFT:
                    case d.MAC_FF_META:
                    case d.META:
                    case d.NUMLOCK:
                    case d.NUM_CENTER:
                    case d.PAGE_DOWN:
                    case d.PAGE_UP:
                    case d.PAUSE:
                    case d.PRINT_SCREEN:
                    case d.RIGHT:
                    case d.SHIFT:
                    case d.UP:
                    case d.WIN_KEY:
                    case d.WIN_KEY_RIGHT:
                        return !1;
                    default:
                        return !0;
                }
            },
            isCharacterKey: function(a) {
                if (a >= d.ZERO && a <= d.NINE)
                    return !0;
                if (a >= d.NUM_ZERO && a <= d.NUM_MULTIPLY)
                    return !0;
                if (a >= d.A && a <= d.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === a)
                    return !0;
                switch (a) {
                    case d.SPACE:
                    case d.QUESTION_MARK:
                    case d.NUM_PLUS:
                    case d.NUM_MINUS:
                    case d.NUM_PERIOD:
                    case d.NUM_DIVISION:
                    case d.SEMICOLON:
                    case d.DASH:
                    case d.EQUALS:
                    case d.COMMA:
                    case d.PERIOD:
                    case d.SLASH:
                    case d.APOSTROPHE:
                    case d.SINGLE_QUOTE:
                    case d.OPEN_SQUARE_BRACKET:
                    case d.BACKSLASH:
                    case d.CLOSE_SQUARE_BRACKET:
                        return !0;
                    default:
                        return !1;
                }
            }
        },
        e = f;
}), c.register('o0D6Z', function(a, p) {
    b(a.exports, 'default', function() {
        return m;
    });
    var d = c('UKDGz'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
    const h = a => {
            const {
                componentCls: i
            } = j, k = `${ i }-inner`;
            return {
                [i]: {
                    [`&${ i }-small`]: {
                        minWidth: j.switchMinWidthSM,
                        height: j.switchHeightSM,
                        lineHeight: `${ j.switchHeightSM }px`,
                        [`${ i }-inner`]: {
                            paddingInlineStart: j.switchInnerMarginMaxSM,
                            paddingInlineEnd: j.switchInnerMarginMinSM,
                            [`${ k }-checked`]: {
                                marginInlineStart: `calc(-100% + ${ j.switchPinSizeSM + 2 * j.switchPadding }px - ${ 2 * j.switchInnerMarginMaxSM }px)`,
                                marginInlineEnd: `calc(100% - ${ j.switchPinSizeSM + 2 * j.switchPadding }px + ${ 2 * j.switchInnerMarginMaxSM }px)`
                            },
                            [`${ k }-unchecked`]: {
                                marginTop: -j.switchHeightSM,
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            }
                        },
                        [`${ i }-handle`]: {
                            width: j.switchPinSizeSM,
                            height: j.switchPinSizeSM
                        },
                        [`${ i }-loading-icon`]: {
                            top: (j.switchPinSizeSM - j.switchLoadingIconSize) / 2,
                            fontSize: j.switchLoadingIconSize
                        },
                        [`&${ i }-checked`]: {
                            [`${ i }-inner`]: {
                                paddingInlineStart: j.switchInnerMarginMinSM,
                                paddingInlineEnd: j.switchInnerMarginMaxSM,
                                [`${ k }-checked`]: {
                                    marginInlineStart: 0,
                                    marginInlineEnd: 0
                                },
                                [`${ k }-unchecked`]: {
                                    marginInlineStart: `calc(100% - ${ j.switchPinSizeSM + 2 * j.switchPadding }px + ${ 2 * j.switchInnerMarginMaxSM }px)`,
                                    marginInlineEnd: `calc(-100% + ${ j.switchPinSizeSM + 2 * j.switchPadding }px - ${ 2 * j.switchInnerMarginMaxSM }px)`
                                }
                            },
                            [`${ i }-handle`]: {
                                insetInlineStart: `calc(100% - ${ j.switchPinSizeSM + j.switchPadding }px)`
                            }
                        },
                        [`&:not(${ i }-disabled):active`]: {
                            [`&:not(${ i }-checked) ${ k }`]: {
                                [`${ k }-unchecked`]: {
                                    marginInlineStart: j.marginXXS / 2,
                                    marginInlineEnd: -j.marginXXS / 2
                                }
                            },
                            [`&${ i }-checked ${ k }`]: {
                                [`${ k }-checked`]: {
                                    marginInlineStart: -j.marginXXS / 2,
                                    marginInlineEnd: j.marginXXS / 2
                                }
                            }
                        }
                    }
                }
            };
        },
        i = a => {
            const {
                componentCls: j
            } = k;
            return {
                [j]: {
                    [`${ j }-loading-icon${ k.iconCls }`]: {
                        position: 'relative',
                        top: (k.switchPinSize - k.fontSize) / 2,
                        color: k.switchLoadingIconColor,
                        verticalAlign: 'top'
                    },
                    [`&${ j }-checked ${ j }-loading-icon`]: {
                        color: k.switchColor
                    }
                }
            };
        },
        j = a => {
            const {
                componentCls: k
            } = l, m = `${ k }-handle`;
            return {
                [k]: {
                    [m]: {
                        position: 'absolute',
                        top: l.switchPadding,
                        insetInlineStart: l.switchPadding,
                        width: l.switchPinSize,
                        height: l.switchPinSize,
                        transition: `all ${ l.switchDuration } ease-in-out`,
                        '&::before': {
                            position: 'absolute',
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            backgroundColor: l.colorWhite,
                            borderRadius: l.switchPinSize / 2,
                            boxShadow: l.switchHandleShadow,
                            transition: `all ${ l.switchDuration } ease-in-out`,
                            content: '""'
                        }
                    },
                    [`&${ k }-checked ${ m }`]: {
                        insetInlineStart: `calc(100% - ${ l.switchPinSize + l.switchPadding }px)`
                    },
                    [`&:not(${ k }-disabled):active`]: {
                        [`${ m }::before`]: {
                            insetInlineEnd: l.switchHandleActiveInset,
                            insetInlineStart: 0
                        },
                        [`&${ k }-checked ${ m }::before`]: {
                            insetInlineEnd: 0,
                            insetInlineStart: l.switchHandleActiveInset
                        }
                    }
                }
            };
        },
        k = a => {
            const {
                componentCls: l
            } = m, n = `${ l }-inner`;
            return {
                [l]: {
                    [n]: {
                        display: 'block',
                        overflow: 'hidden',
                        borderRadius: 100,
                        height: '100%',
                        paddingInlineStart: m.switchInnerMarginMax,
                        paddingInlineEnd: m.switchInnerMarginMin,
                        transition: `padding-inline-start ${ m.switchDuration } ease-in-out, padding-inline-end ${ m.switchDuration } ease-in-out`,
                        [`${ n }-checked, ${ n }-unchecked`]: {
                            display: 'block',
                            color: m.colorTextLightSolid,
                            fontSize: m.fontSizeSM,
                            transition: `margin-inline-start ${ m.switchDuration } ease-in-out, margin-inline-end ${ m.switchDuration } ease-in-out`,
                            pointerEvents: 'none'
                        },
                        [`${ n }-checked`]: {
                            marginInlineStart: `calc(-100% + ${ m.switchPinSize + 2 * m.switchPadding }px - ${ 2 * m.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(100% - ${ m.switchPinSize + 2 * m.switchPadding }px + ${ 2 * m.switchInnerMarginMax }px)`
                        },
                        [`${ n }-unchecked`]: {
                            marginTop: -m.switchHeight,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`&${ l }-checked ${ n }`]: {
                        paddingInlineStart: m.switchInnerMarginMin,
                        paddingInlineEnd: m.switchInnerMarginMax,
                        [`${ n }-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${ n }-unchecked`]: {
                            marginInlineStart: `calc(100% - ${ m.switchPinSize + 2 * m.switchPadding }px + ${ 2 * m.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(-100% + ${ m.switchPinSize + 2 * m.switchPadding }px - ${ 2 * m.switchInnerMarginMax }px)`
                        }
                    },
                    [`&:not(${ l }-disabled):active`]: {
                        [`&:not(${ l }-checked) ${ n }`]: {
                            [`${ n }-unchecked`]: {
                                marginInlineStart: 2 * m.switchPadding,
                                marginInlineEnd: 2 * -m.switchPadding
                            }
                        },
                        [`&${ l }-checked ${ n }`]: {
                            [`${ n }-checked`]: {
                                marginInlineStart: 2 * -m.switchPadding,
                                marginInlineEnd: 2 * m.switchPadding
                            }
                        }
                    }
                }
            };
        },
        l = a => {
            const {
                componentCls: m
            } = n;
            return {
                [m]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, g.resetComponent)(n)), {
                    position: 'relative',
                    display: 'inline-block',
                    boxSizing: 'border-box',
                    minWidth: n.switchMinWidth,
                    height: n.switchHeight,
                    lineHeight: `${ n.switchHeight }px`,
                    verticalAlign: 'middle',
                    background: n.colorTextQuaternary,
                    border: '0',
                    borderRadius: 100,
                    cursor: 'pointer',
                    transition: `all ${ n.motionDurationMid }`,
                    userSelect: 'none',
                    [`&:hover:not(${ m }-disabled)`]: {
                        background: n.colorTextTertiary
                    }
                }), (0, g.genFocusStyle)(n)), {
                    [`&${ m }-checked`]: {
                        background: n.switchColor,
                        [`&:hover:not(${ m }-disabled)`]: {
                            background: n.colorPrimaryHover
                        }
                    },
                    [`&${ m }-loading, &${ m }-disabled`]: {
                        cursor: 'not-allowed',
                        opacity: n.switchDisabledOpacity,
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
    var m = (0, e.default)('Switch', a => {
        const n = a.fontSize * a.lineHeight,
            o = a.controlHeight / 2,
            p = n - 4,
            q = o - 4,
            r = (0, f.merge)(a, {
                switchMinWidth: 2 * p + 8,
                switchHeight: n,
                switchDuration: a.motionDurationMid,
                switchColor: a.colorPrimary,
                switchDisabledOpacity: a.opacityLoading,
                switchInnerMarginMin: p / 2,
                switchInnerMarginMax: p + 2 + 4,
                switchPadding: 2,
                switchPinSize: p,
                switchBg: a.colorBgContainer,
                switchMinWidthSM: 2 * q + 4,
                switchHeightSM: o,
                switchInnerMarginMinSM: q / 2,
                switchInnerMarginMaxSM: q + 2 + 4,
                switchPinSizeSM: q,
                switchHandleShadow: `0 2px 4px 0 ${ new (0, d.TinyColor)('#00230b').setAlpha(0.2).toRgbString() }`,
                switchLoadingIconSize: 0.75 * a.fontSizeIcon,
                switchLoadingIconColor: `rgba(0, 0, 0, ${ a.opacityLoading })`,
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