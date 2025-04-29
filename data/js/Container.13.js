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
c.register('p1B/0', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('bR8Yv'),
        g = c('/U36/'),
        h = c('bsYXk'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('XDmwF'),
        l = c('GCcXd'),
        m = c('Zs019'),
        n = c('Hh3TW'),
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
    const p = i.forwardRef((b, c) => {
        var {
            prefixCls: q,
            size: r,
            disabled: s,
            loading: _t,
            className: u,
            rootClassName: v
        } = b, w = o(b, [
            'prefixCls',
            'size',
            'disabled',
            'loading',
            'className',
            'rootClassName'
        ]);
        const {
            getPrefixCls: x,
            direction: y
        } = i.useContext(j.ConfigContext), z = i.useContext(l.default), A = i.useContext(k.default), B = (null != s ? s : A) || _t, C = x('switch', q), D = i.createElement('div', {
            className: `${ C }-handle`
        }, _t && i.createElement(f.default, {
            className: `${ C }-loading-icon`
        })), [E, F] = (0, n.default)(C), G = a(g)({
            [`${ C }-small`]: 'small' === (r || z),
            [`${ C }-loading`]: _t,
            [`${ C }-rtl`]: 'rtl' === y
        }, u, v, F);
        return E(i.createElement(m.default, null, i.createElement(h.default, Object.assign({}, w, {
            prefixCls: C,
            className: G,
            disabled: B,
            ref: c,
            loadingIcon: D
        }))));
    });
    p.__ANT_SWITCH = !0;
    var q = p;
}), c.register('bsYXk', function(d, e) {
    b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('EuNSe'),
        g = c('82yff'),
        h = c('kLp7T'),
        i = c('G6aov'),
        j = c('O0Kav'),
        k = c('/U36/'),
        l = c('7+lS9'),
        m = c('Joftk'),
        n = [
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
        o = j.forwardRef(function(p, q) {
            var r, s = p.prefixCls,
                t = void 0 === s ? 'rc-switch' : s,
                _u = p.className,
                v = p.checked,
                w = p.defaultChecked,
                x = p.disabled,
                y = p.loadingIcon,
                z = p.checkedChildren,
                A = p.unCheckedChildren,
                B = p.onClick,
                C = p.onChange,
                D = p.onKeyDown,
                E = a(i)(p, n),
                F = (0, l.default)(!1, {
                    value: v,
                    defaultValue: w
                }),
                G = a(h)(F, 2),
                H = G[0],
                I = G[1];

            function J(K, L) {
                var M = H;
                return x || (I(M = K), null == C || C(M, L)), M;
            }
            var K = a(k)(t, _u, (r = {}, a(g)(r, ''.concat(t, '-checked'), H), a(g)(r, ''.concat(t, '-disabled'), x), r));
            return j.createElement('button', a(f)({}, E, {
                type: 'button',
                role: 'switch',
                'aria-checked': H,
                disabled: x,
                className: K,
                ref: q,
                onKeyDown: function(L) {
                    L.which === m.default.LEFT ? J(!1, L) : L.which === m.default.RIGHT && J(!0, L), null == D || D(L);
                },
                onClick: function(L) {
                    var M = J(!H, L);
                    null == B || B(M, L);
                }
            }), y, j.createElement('span', {
                className: ''.concat(t, '-inner')
            }, j.createElement('span', {
                className: ''.concat(t, '-inner-checked')
            }, z), j.createElement('span', {
                className: ''.concat(t, '-inner-unchecked')
            }, A)));
        });
    o.displayName = 'Switch';
    var p = o;
}), c.register('EuNSe', function(d, e) {
    function f() {
        return d.exports = f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, d.exports.default = d.exports, d.exports.__esModule = !0, f.apply(this, arguments);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('82yff', function(d, e) {
    d.exports = function(f, g, h) {
        return g in f ? Object.defineProperty(f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[g] = h, f;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('kLp7T', function(d, e) {
    var f = c('VZDQk'),
        g = c('ZyFiS'),
        h = c('zZ1jE'),
        i = c('tVYFp');
    d.exports = function(j, k) {
        return f(j) || g(j, k) || h(j, k) || i();
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('VZDQk', function(d, e) {
    d.exports = function(f) {
        if (Array.isArray(f))
            return f;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('ZyFiS', function(d, e) {
    d.exports = function(f, g) {
        var h = null == f ? null : 'undefined' != typeof Symbol && f[Symbol.iterator] || f['@@iterator'];
        if (null != h) {
            var i, j, k = [],
                l = !0,
                m = !1;
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
}), c.register('zZ1jE', function(d, e) {
    var f = c('mpOs/');
    d.exports = function(g, h) {
        if (g) {
            if ('string' == typeof g)
                return f(g, h);
            var i = Object.prototype.toString.call(g).slice(8, -1);
            return 'Object' === i && g.constructor && (i = g.constructor.name), 'Map' === i || 'Set' === i ? Array.from(g) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? f(g, h) : void 0;
        }
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('mpOs/', function(d, e) {
    d.exports = function(f, g) {
        (null == g || g > f.length) && (g = f.length);
        for (var h = 0, i = new Array(g); h < g; h++)
            i[h] = f[h];
        return i;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('tVYFp', function(d, e) {
    d.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('G6aov', function(d, e) {
    var f = c('7WVlZ');
    d.exports = function(g, h) {
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
}), c.register('7WVlZ', function(d, e) {
    d.exports = function(f, g) {
        if (null == f)
            return {};
        var h, i, j = {},
            k = Object.keys(f);
        for (i = 0; i < k.length; i++)
            h = k[i], g.indexOf(h) >= 0 || (j[h] = f[h]);
        return j;
    }, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('7+lS9', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('h1bqj'),
        g = c('O0Kav');

    function _h(i, j) {
        var k = j || {},
            l = k.defaultValue,
            m = k.value,
            n = k.onChange,
            o = k.postState,
            p = g.useState(function() {
                return void 0 !== m ? m : void 0 !== l ? 'function' == typeof l ? l() : l : 'function' == typeof i ? i() : i;
            }),
            q = (0, f.default)(p, 2),
            r = q[0],
            s = q[1],
            t = void 0 !== m ? m : r;
        o && (t = o(t));
        var u = g.useRef(!0);
        return g.useEffect(function() {
            u.current ? u.current = !1 : void 0 === m && s(m);
        }, [m]), [
            t,
            function(v) {
                s(v), t !== v && n && n(v, t);
            }
        ];
    }
}), c.register('h1bqj', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('agApH1'),
        g = c('dhwiU1'),
        h = c('Ul2aM'),
        i = c('BoOTw1');

    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('agApH1', function(d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('dhwiU1', function(d, e) {
    function f(g, h) {
        var i = null == g ? null : 'undefined' != typeof Symbol && g[Symbol.iterator] || g['@@iterator'];
        if (null != i) {
            var j, k, l = [],
                m = !0,
                n = !1;
            try {
                for (i = i.call(g); !(m = (j = i.next()).done) && (l.push(j.value), !h || l.length !== h); m = !0);
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
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('Ul2aM', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('eNcAE1');

    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('eNcAE1', function(d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('BoOTw1', function(d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('Joftk', function(d, e) {
    b(d.exports, 'default', function() {
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
            isTextModifyingKeyEvent: function(g) {
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
            isCharacterKey: function(g) {
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
        },
        _g = f;
}), c.register('Hh3TW', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('ntiT5'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = d => {
            const {
                componentCls: k
            } = d, l = `${ k }-inner`;
            return {
                [k]: {
                    [`&${ k }-small`]: {
                        minWidth: d.switchMinWidthSM,
                        height: d.switchHeightSM,
                        lineHeight: `${ d.switchHeightSM }px`,
                        [`${ k }-inner`]: {
                            paddingInlineStart: d.switchInnerMarginMaxSM,
                            paddingInlineEnd: d.switchInnerMarginMinSM,
                            [`${ l }-checked`]: {
                                marginInlineStart: `calc(-100% + ${ d.switchPinSizeSM + 2 * d.switchPadding }px - ${ 2 * d.switchInnerMarginMaxSM }px)`,
                                marginInlineEnd: `calc(100% - ${ d.switchPinSizeSM + 2 * d.switchPadding }px + ${ 2 * d.switchInnerMarginMaxSM }px)`
                            },
                            [`${ l }-unchecked`]: {
                                marginTop: -d.switchHeightSM,
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            }
                        },
                        [`${ k }-handle`]: {
                            width: d.switchPinSizeSM,
                            height: d.switchPinSizeSM
                        },
                        [`${ k }-loading-icon`]: {
                            top: (d.switchPinSizeSM - d.switchLoadingIconSize) / 2,
                            fontSize: d.switchLoadingIconSize
                        },
                        [`&${ k }-checked`]: {
                            [`${ k }-inner`]: {
                                paddingInlineStart: d.switchInnerMarginMinSM,
                                paddingInlineEnd: d.switchInnerMarginMaxSM,
                                [`${ l }-checked`]: {
                                    marginInlineStart: 0,
                                    marginInlineEnd: 0
                                },
                                [`${ l }-unchecked`]: {
                                    marginInlineStart: `calc(100% - ${ d.switchPinSizeSM + 2 * d.switchPadding }px + ${ 2 * d.switchInnerMarginMaxSM }px)`,
                                    marginInlineEnd: `calc(-100% + ${ d.switchPinSizeSM + 2 * d.switchPadding }px - ${ 2 * d.switchInnerMarginMaxSM }px)`
                                }
                            },
                            [`${ k }-handle`]: {
                                insetInlineStart: `calc(100% - ${ d.switchPinSizeSM + d.switchPadding }px)`
                            }
                        },
                        [`&:not(${ k }-disabled):active`]: {
                            [`&:not(${ k }-checked) ${ l }`]: {
                                [`${ l }-unchecked`]: {
                                    marginInlineStart: d.marginXXS / 2,
                                    marginInlineEnd: -d.marginXXS / 2
                                }
                            },
                            [`&${ k }-checked ${ l }`]: {
                                [`${ l }-checked`]: {
                                    marginInlineStart: -d.marginXXS / 2,
                                    marginInlineEnd: d.marginXXS / 2
                                }
                            }
                        }
                    }
                }
            };
        },
        k = d => {
            const {
                componentCls: l
            } = d;
            return {
                [l]: {
                    [`${ l }-loading-icon${ d.iconCls }`]: {
                        position: 'relative',
                        top: (d.switchPinSize - d.fontSize) / 2,
                        color: d.switchLoadingIconColor,
                        verticalAlign: 'top'
                    },
                    [`&${ l }-checked ${ l }-loading-icon`]: {
                        color: d.switchColor
                    }
                }
            };
        },
        l = d => {
            const {
                componentCls: m
            } = d, n = `${ m }-handle`;
            return {
                [m]: {
                    [n]: {
                        position: 'absolute',
                        top: d.switchPadding,
                        insetInlineStart: d.switchPadding,
                        width: d.switchPinSize,
                        height: d.switchPinSize,
                        transition: `all ${ d.switchDuration } ease-in-out`,
                        '&::before': {
                            position: 'absolute',
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            backgroundColor: d.colorWhite,
                            borderRadius: d.switchPinSize / 2,
                            boxShadow: d.switchHandleShadow,
                            transition: `all ${ d.switchDuration } ease-in-out`,
                            content: '""'
                        }
                    },
                    [`&${ m }-checked ${ n }`]: {
                        insetInlineStart: `calc(100% - ${ d.switchPinSize + d.switchPadding }px)`
                    },
                    [`&:not(${ m }-disabled):active`]: {
                        [`${ n }::before`]: {
                            insetInlineEnd: d.switchHandleActiveInset,
                            insetInlineStart: 0
                        },
                        [`&${ m }-checked ${ n }::before`]: {
                            insetInlineEnd: 0,
                            insetInlineStart: d.switchHandleActiveInset
                        }
                    }
                }
            };
        },
        m = d => {
            const {
                componentCls: n
            } = d, o = `${ n }-inner`;
            return {
                [n]: {
                    [o]: {
                        display: 'block',
                        overflow: 'hidden',
                        borderRadius: 100,
                        height: '100%',
                        paddingInlineStart: d.switchInnerMarginMax,
                        paddingInlineEnd: d.switchInnerMarginMin,
                        transition: `padding-inline-start ${ d.switchDuration } ease-in-out, padding-inline-end ${ d.switchDuration } ease-in-out`,
                        [`${ o }-checked, ${ o }-unchecked`]: {
                            display: 'block',
                            color: d.colorTextLightSolid,
                            fontSize: d.fontSizeSM,
                            transition: `margin-inline-start ${ d.switchDuration } ease-in-out, margin-inline-end ${ d.switchDuration } ease-in-out`,
                            pointerEvents: 'none'
                        },
                        [`${ o }-checked`]: {
                            marginInlineStart: `calc(-100% + ${ d.switchPinSize + 2 * d.switchPadding }px - ${ 2 * d.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(100% - ${ d.switchPinSize + 2 * d.switchPadding }px + ${ 2 * d.switchInnerMarginMax }px)`
                        },
                        [`${ o }-unchecked`]: {
                            marginTop: -d.switchHeight,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`&${ n }-checked ${ o }`]: {
                        paddingInlineStart: d.switchInnerMarginMin,
                        paddingInlineEnd: d.switchInnerMarginMax,
                        [`${ o }-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${ o }-unchecked`]: {
                            marginInlineStart: `calc(100% - ${ d.switchPinSize + 2 * d.switchPadding }px + ${ 2 * d.switchInnerMarginMax }px)`,
                            marginInlineEnd: `calc(-100% + ${ d.switchPinSize + 2 * d.switchPadding }px - ${ 2 * d.switchInnerMarginMax }px)`
                        }
                    },
                    [`&:not(${ n }-disabled):active`]: {
                        [`&:not(${ n }-checked) ${ o }`]: {
                            [`${ o }-unchecked`]: {
                                marginInlineStart: 2 * d.switchPadding,
                                marginInlineEnd: 2 * -d.switchPadding
                            }
                        },
                        [`&${ n }-checked ${ o }`]: {
                            [`${ o }-checked`]: {
                                marginInlineStart: 2 * -d.switchPadding,
                                marginInlineEnd: 2 * d.switchPadding
                            }
                        }
                    }
                }
            };
        },
        n = d => {
            const {
                componentCls: o
            } = d;
            return {
                [o]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, i.resetComponent)(d)), {
                    position: 'relative',
                    display: 'inline-block',
                    boxSizing: 'border-box',
                    minWidth: d.switchMinWidth,
                    height: d.switchHeight,
                    lineHeight: `${ d.switchHeight }px`,
                    verticalAlign: 'middle',
                    background: d.colorTextQuaternary,
                    border: '0',
                    borderRadius: 100,
                    cursor: 'pointer',
                    transition: `all ${ d.motionDurationMid }`,
                    userSelect: 'none',
                    [`&:hover:not(${ o }-disabled)`]: {
                        background: d.colorTextTertiary
                    }
                }), (0, i.genFocusStyle)(d)), {
                    [`&${ o }-checked`]: {
                        background: d.switchColor,
                        [`&:hover:not(${ o }-disabled)`]: {
                            background: d.colorPrimaryHover
                        }
                    },
                    [`&${ o }-loading, &${ o }-disabled`]: {
                        cursor: 'not-allowed',
                        opacity: d.switchDisabledOpacity,
                        '*': {
                            boxShadow: 'none',
                            cursor: 'not-allowed'
                        }
                    },
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    }
                })
            };
        };
    var _o = (0, g.default)('Switch', d => {
        const p = d.fontSize * d.lineHeight,
            q = d.controlHeight / 2,
            r = p - 4,
            s = q - 4,
            t = (0, h.merge)(d, {
                switchMinWidth: 2 * r + 8,
                switchHeight: p,
                switchDuration: d.motionDurationMid,
                switchColor: d.colorPrimary,
                switchDisabledOpacity: d.opacityLoading,
                switchInnerMarginMin: r / 2,
                switchInnerMarginMax: r + 2 + 4,
                switchPadding: 2,
                switchPinSize: r,
                switchBg: d.colorBgContainer,
                switchMinWidthSM: 2 * s + 4,
                switchHeightSM: q,
                switchInnerMarginMinSM: s / 2,
                switchInnerMarginMaxSM: s + 2 + 4,
                switchPinSizeSM: s,
                switchHandleShadow: `0 2px 4px 0 ${ new (0, f.TinyColor)('#00230b').setAlpha(0.2).toRgbString() }`,
                switchLoadingIconSize: 0.75 * d.fontSizeIcon,
                switchLoadingIconColor: `rgba(0, 0, 0, ${ d.opacityLoading })`,
                switchHandleActiveInset: '-30%'
            });
        return [
            n(t),
            m(t),
            l(t),
            k(t),
            j(t)
        ];
    });
});