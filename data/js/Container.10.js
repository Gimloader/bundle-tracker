function a(b) {
    return b && b.__esModule ? b.default : b;
}
function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = function (p, q) {
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
    const p = i.forwardRef((q, r) => {
        var {
                prefixCls: s,
                size: t,
                disabled: u,
                loading: v,
                className: w,
                rootClassName: x
            } = q, y = o(q, [
                'prefixCls',
                'size',
                'disabled',
                'loading',
                'className',
                'rootClassName'
            ]);
        const {
                getPrefixCls: z,
                direction: A
            } = i.useContext(j.ConfigContext), B = i.useContext(l.default), C = i.useContext(k.default), D = (null != u ? u : C) || v, E = z('switch', s), F = i.createElement('div', { className: `${ E }-handle` }, v && i.createElement(f.default, { className: `${ E }-loading-icon` })), [G, H] = (0, n.default)(E), I = a(g)({
                [`${ E }-small`]: 'small' === (t || B),
                [`${ E }-loading`]: v,
                [`${ E }-rtl`]: 'rtl' === A
            }, w, x, H);
        return G(i.createElement(m.default, null, i.createElement(h.default, Object.assign({}, y, {
            prefixCls: E,
            className: I,
            disabled: D,
            ref: r,
            loadingIcon: F
        }))));
    });
    p.__ANT_SWITCH = !0;
    var _q = p;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = [
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
        ], o = j.forwardRef(function (p, q) {
            var r, s = p.prefixCls, t = void 0 === s ? 'rc-switch' : s, u = p.className, v = p.checked, w = p.defaultChecked, x = p.disabled, y = p.loadingIcon, z = p.checkedChildren, A = p.unCheckedChildren, B = p.onClick, C = p.onChange, D = p.onKeyDown, E = a(i)(p, n), F = (0, l.default)(!1, {
                    value: v,
                    defaultValue: w
                }), G = a(h)(F, 2), H = G[0], I = G[1];
            function J(K, L) {
                var M = H;
                return x || (I(M = K), null == C || C(M, L)), M;
            }
            var L = a(k)(t, u, (r = {}, a(g)(r, ''.concat(t, '-checked'), H), a(g)(r, ''.concat(t, '-disabled'), x), r));
            return j.createElement('button', a(f)({}, E, {
                type: 'button',
                role: 'switch',
                'aria-checked': H,
                disabled: x,
                className: L,
                ref: M,
                onKeyDown: function (M) {
                    M.which === m.default.LEFT ? J(!1, M) : M.which === m.default.RIGHT && J(!0, M), null == D || D(M);
                },
                onClick: function (M) {
                    var N = J(!H, M);
                    null == B || B(N, M);
                }
            }), y, j.createElement('span', { className: ''.concat(t, '-inner') }, j.createElement('span', { className: ''.concat(t, '-inner-checked') }, z), j.createElement('span', { className: ''.concat(t, '-inner-unchecked') }, A)));
        });
    o.displayName = 'Switch';
    var _p = o;
}), c.register('.....', function (d, e) {
    function f() {
        return d.exports = f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, d.exports.default = d.exports, d.exports.__esModule = !0, f.apply(this, arguments);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function (f, g, h) {
        return g in f ? Object.defineProperty(f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[g] = h, f;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    d.exports = function (j, k) {
        return f(j) || g(j, k) || h(j, k) || i();
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function (f) {
        if (Array.isArray(f))
            return f;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function (f, g) {
        var h = null == f ? null : 'undefined' != typeof Symbol && f[Symbol.iterator] || f['@@iterator'];
        if (null != h) {
            var i, j, k = [], l = !0, m = !1;
            try {
                for (h = h.call(f); !(l = (i = h.next()).done) && (k.push(i.value), !g || k.length !== g); l = !0);
            } catch (f) {
                m = !0, j = f;
            } finally {
                try {
                    l || null == h.return || h.return();
                } finally {
                    if (m)
                        throw j;
                }
            }
            return k;
        }
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    var f = c('.....');
    d.exports = function (g, h) {
        if (g) {
            if ('string' == typeof g)
                return f(g, h);
            var i = Object.prototype.toString.call(g).slice(8, -1);
            return 'Object' === i && g.constructor && (i = g.constructor.name), 'Map' === i || 'Set' === i ? Array.from(g) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? f(g, h) : void 0;
        }
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function (f, g) {
        (null == g || g > f.length) && (g = f.length);
        for (var h = 0, i = new Array(g); h < g; h++)
            i[h] = f[h];
        return i;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    var f = c('.....');
    d.exports = function (g, h) {
        if (null == g)
            return {};
        var i, j, k = f(g, h);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(g);
            for (j = 0; j < l.length; j++)
                i = l[j], h.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(g, i) && (k[i] = g[i]);
        }
        return k;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    d.exports = function (f, g) {
        if (null == f)
            return {};
        var h, i, j = {}, k = Object.keys(f);
        for (i = 0; i < k.length; i++)
            h = k[i], g.indexOf(h) >= 0 || (j[h] = f[h]);
        return j;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        var k = j || {}, l = k.defaultValue, m = k.value, n = k.onChange, o = k.postState, p = g.useState(function () {
                return void 0 !== _h ? _h : void 0 !== l ? 'function' == typeof l ? l() : l : 'function' == typeof i ? i() : i;
            }), q = (0, f.default)(p, 2), r = q[0], s = q[1], t = void 0 !== _h ? _h : r;
        o && (t = o(t));
        var u = g.useRef(!0);
        return g.useEffect(function () {
            u.current ? u.current = !1 : void 0 === _h && s(_h);
        }, [_h]), [
            t,
            function (v) {
                s(v), t !== v && n && n(v, t);
            }
        ];
    }
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    b(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        var i = null == g ? null : 'undefined' != typeof Symbol && g[Symbol.iterator] || g['@@iterator'];
        if (null != i) {
            var j, k, l = [], m = !0, n = !1;
            try {
                for (i = i.call(g); !(m = (f = i.next()).done) && (l.push(f.value), !h || l.length !== h); m = !0);
            } catch (g) {
                n = !0, k = g;
            } finally {
                try {
                    m || null == i.return || i.return();
                } finally {
                    if (n)
                        throw k;
                }
            }
            return l;
        }
    }
    b(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            f[i] = g[i];
        return f;
    }
    b(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _g;
    });
    var f = {
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
            isTextModifyingKeyEvent: function (g) {
                var h = g.keyCode;
                if (g.altKey && !g.ctrlKey || g.metaKey || h >= f.F1 && h <= f.F12)
                    return !1;
                switch (h) {
                case f.ALT:
                case f.CAPS_LOCK:
                case f.CONTEXT_MENU:
                case f.CTRL:
                case f.DOWN:
                case f.END:
                case f.ESC:
                case f.HOME:
                case f.INSERT:
                case f.LEFT:
                case f.MAC_FF_META:
                case f.META:
                case f.NUMLOCK:
                case f.NUM_CENTER:
                case f.PAGE_DOWN:
                case f.PAGE_UP:
                case f.PAUSE:
                case f.PRINT_SCREEN:
                case f.RIGHT:
                case f.SHIFT:
                case f.UP:
                case f.WIN_KEY:
                case f.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0;
                }
            },
            isCharacterKey: function (g) {
                if (g >= f.ZERO && g <= f.NINE)
                    return !0;
                if (g >= f.NUM_ZERO && g <= f.NUM_MULTIPLY)
                    return !0;
                if (g >= f.A && g <= f.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === g)
                    return !0;
                switch (g) {
                case f.SPACE:
                case f.QUESTION_MARK:
                case f.NUM_PLUS:
                case f.NUM_MINUS:
                case f.NUM_PERIOD:
                case f.NUM_DIVISION:
                case f.SEMICOLON:
                case f.DASH:
                case f.EQUALS:
                case f.COMMA:
                case f.PERIOD:
                case f.SLASH:
                case f.APOSTROPHE:
                case f.SINGLE_QUOTE:
                case f.OPEN_SQUARE_BRACKET:
                case f.BACKSLASH:
                case f.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1;
                }
            }
        }, _g = f;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = k => {
            const {componentCls: l} = k, m = `${ l }-inner`;
            return {
                [l]: {
                    [`&${ l }-small`]: {
                        minWidth: k.switchMinWidthSM,
                        height: k.switchHeightSM,
                        lineHeight: `${ k.switchHeightSM }px`,
                        [`${ l }-inner`]: {
                            paddingInlineStart: k.switchInnerMarginMaxSM,
                            paddingInlineEnd: k.switchInnerMarginMinSM,
                            [`${ m }-checked`]: {
                                marginInlineStart: `calc(-100% + ${ k.switchPinSizeSM + 2 * k.switchPadding }px - ${ 2 * k.switchInnerMarginMaxSM }px)`,
                                marginInlineEnd: `calc(100% - ${ k.switchPinSizeSM + 2 * k.switchPadding }px + ${ 2 * k.switchInnerMarginMaxSM }px)`
                            },
                            [`${ m }-unchecked`]: {
                                marginTop: -k.switchHeightSM,
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            }
                        },
                        [`${ l }-handle`]: {
                            width: k.switchPinSizeSM,
                            height: k.switchPinSizeSM
                        },
                        [`${ l }-loading-icon`]: {
                            top: (k.switchPinSizeSM - k.switchLoadingIconSize) / 2,
                            fontSize: k.switchLoadingIconSize
                        },
                        [`&${ l }-checked`]: {
                            [`${ l }-inner`]: {
                                paddingInlineStart: k.switchInnerMarginMinSM,
                                paddingInlineEnd: k.switchInnerMarginMaxSM,
                                [`${ m }-checked`]: {
                                    marginInlineStart: 0,
                                    marginInlineEnd: 0
                                },
                                [`${ m }-unchecked`]: {
                                    marginInlineStart: `calc(100% - ${ k.switchPinSizeSM + 2 * k.switchPadding }px + ${ 2 * k.switchInnerMarginMaxSM }px)`,
                                    marginInlineEnd: `calc(-100% + ${ k.switchPinSizeSM + 2 * k.switchPadding }px - ${ 2 * k.switchInnerMarginMaxSM }px)`
                                }
                            },
                            [`${ l }-handle`]: { insetInlineStart: `calc(100% - ${ k.switchPinSizeSM + k.switchPadding }px)` }
                        },
                        [`&:not(${ l }-disabled):active`]: {
                            [`&:not(${ l }-checked) ${ m }`]: {
                                [`${ m }-unchecked`]: {
                                    marginInlineStart: k.marginXXS / 2,
                                    marginInlineEnd: -k.marginXXS / 2
                                }
                            },
                            [`&${ l }-checked ${ m }`]: {
                                [`${ m }-checked`]: {
                                    marginInlineStart: -k.marginXXS / 2,
                                    marginInlineEnd: k.marginXXS / 2
                                }
                            }
                        }
                    }
                }
            };
        }, k = l => {
            const {componentCls: m} = l;
            return {
                [m]: {
                    [`${ m }-loading-icon${ l.iconCls }`]: {
                        position: 'relative',
                        top: (l.switchPinSize - l.fontSize) / 2,
                        color: l.switchLoadingIconColor,
                        verticalAlign: 'top'
                    },
                    [`&${ m }-checked ${ m }-loading-icon`]: { color: l.switchColor }
                }
            };
        }, l = m => {
            const {componentCls: n} = m, o = `${ n }-handle`;
            return {
                [n]: {
                    [o]: {
                        position: 'absolute',
                        top: m.switchPadding,
                        insetInlineStart: m.switchPadding,
                        width: m.switchPinSize,
                        height: m.switchPinSize,
                        transition: `all ${ m.switchDuration } ease-in-out`,
                        '&::before': {
                            position: 'absolute',
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            backgroundColor: m.colorWhite,
                            borderRadius: m.switchPinSize / 2,
                            boxShadow: m.switchHandleShadow,
                            transition: `all ${ m.switchDuration } ease-in-out`,
                            content: '""'
                        }
                    },
                    [`&${ n }-checked ${ o }`]: { insetInlineStart: `calc(100% - ${ m.switchPinSize + m.switchPadding }px)` },
                    [`&:not(${ n }-disabled):active`]: {
                        [`${ o }::before`]: {
                            insetInlineEnd: m.switchHandleActiveInset,
                            insetInlineStart: 0
                        },
                        [`&${ n }-checked ${ o }::before`]: {
                            insetInlineEnd: 0,
                            insetInlineStart: m.switchHandleActiveInset
                        }
                    }
                }
            };
        }, m = n => {
            const {componentCls: o} = n, p = `${ o }-inner`;
            return {
                [o]: {
                    [p]: {
                        display: 'block',
                        overflow: 'hidden',
                        borderRadius: 100,
                        height: '100%',
                        paddingInlineStart: n.switchInnerMarginMax,
                        paddingInlineEnd: n.switchInnerMarginMin,
                        transition: `padding-inline-start ${ n.switchDuration } ease-in-out, padding-inline-end ${ n.switchDuration } ease-in-out`,
                        [`${ p }-checked, ${ p }-unchecked`]: {
                            display: 'block',
                            color: n.colorTextLightSolid,
                            fontSize: n.fontSizeSM,
                            transition: `margin-inline-start ${ n.switchDuration } ease-in-out, margin-inline-end ${ n.switchDuration } ease-in-out`,
                            pointerEvents: 'none'
                        },
                        [`${ p }-checked`]: {
                            marginInlineStart: `calc(-100% + ${ n.switchPinSize + 2 * n.switchPadding }px - ${ 2 * n.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(100% - ${ n.switchPinSize + 2 * n.switchPadding }px + ${ 2 * n.switchInnerMarginMax }px)`
                        },
                        [`${ p }-unchecked`]: {
                            marginTop: -n.switchHeight,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`&${ o }-checked ${ p }`]: {
                        paddingInlineStart: n.switchInnerMarginMin,
                        paddingInlineEnd: n.switchInnerMarginMax,
                        [`${ p }-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${ p }-unchecked`]: {
                            marginInlineStart: `calc(100% - ${ n.switchPinSize + 2 * n.switchPadding }px + ${ 2 * n.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(-100% + ${ n.switchPinSize + 2 * n.switchPadding }px - ${ 2 * n.switchInnerMarginMax }px)`
                        }
                    },
                    [`&:not(${ o }-disabled):active`]: {
                        [`&:not(${ o }-checked) ${ p }`]: {
                            [`${ p }-unchecked`]: {
                                marginInlineStart: 2 * n.switchPadding,
                                marginInlineEnd: 2 * -n.switchPadding
                            }
                        },
                        [`&${ o }-checked ${ p }`]: {
                            [`${ p }-checked`]: {
                                marginInlineStart: 2 * -n.switchPadding,
                                marginInlineEnd: 2 * n.switchPadding
                            }
                        }
                    }
                }
            };
        }, n = o => {
            const {componentCls: p} = o;
            return {
                [p]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, i.resetComponent)(o)), {
                    position: 'relative',
                    display: 'inline-block',
                    boxSizing: 'border-box',
                    minWidth: o.switchMinWidth,
                    height: o.switchHeight,
                    lineHeight: `${ o.switchHeight }px`,
                    verticalAlign: 'middle',
                    background: o.colorTextQuaternary,
                    border: '0',
                    borderRadius: 100,
                    cursor: 'pointer',
                    transition: `all ${ o.motionDurationMid }`,
                    userSelect: 'none',
                    [`&:hover:not(${ p }-disabled)`]: { background: o.colorTextTertiary }
                }), (0, i.genFocusStyle)(o)), {
                    [`&${ p }-checked`]: {
                        background: o.switchColor,
                        [`&:hover:not(${ p }-disabled)`]: { background: o.colorPrimaryHover }
                    },
                    [`&${ p }-loading, &${ p }-disabled`]: {
                        cursor: 'not-allowed',
                        opacity: o.switchDisabledOpacity,
                        '*': {
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        }
                    },
                    [`&${ p }-rtl`]: { direction: 'rtl' }
                })
            };
        };
    var _o = (0, g.default)('Switch', p => {
        const q = p.fontSize * p.lineHeight, r = p.controlHeight / 2, s = q - 4, t = r - 4, u = (0, h.merge)(p, {
                switchMinWidth: 2 * s + 8,
                switchHeight: q,
                switchDuration: p.motionDurationMid,
                switchColor: p.colorPrimary,
                switchDisabledOpacity: p.opacityLoading,
                switchInnerMarginMin: s / 2,
                switchInnerMarginMax: s + 2 + 4,
                switchPadding: 2,
                switchPinSize: s,
                switchBg: p.colorBgContainer,
                switchMinWidthSM: 2 * t + 4,
                switchHeightSM: r,
                switchInnerMarginMinSM: t / 2,
                switchInnerMarginMaxSM: t + 2 + 4,
                switchPinSizeSM: t,
                switchHandleShadow: `0 2px 4px 0 ${ new (0, f.TinyColor)('#00230b').setAlpha(0.2).toRgbString() }`,
                switchLoadingIconSize: 0.75 * p.fontSizeIcon,
                switchLoadingIconColor: `rgba(0, 0, 0, ${ p.opacityLoading })`,
                switchHandleActiveInset: '-30%'
            });
        return [
            n(u),
            m(u),
            l(u),
            k(u),
            j(u)
        ];
    });
});