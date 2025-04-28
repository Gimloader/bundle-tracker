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
a.register('7IjKF', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('b5kvC'),
        i = a('7s5R80'),
        j = a('PMl60'),
        k = a('ARgso'),
        l = a('H36N0'),
        m = a('TJ5VD'),
        n = a('RJjEi');
    let o;
    var _p = () => {
        const [_q, r] = (0, j.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(j.Title, {
                    override: !0,
                    title: 'Delete Account'
                }),
                (0, e.jsxs)(_q, {
                    children: [
                        (0, e.jsx)(n.default, {
                            includeSpacer: !0
                        }),
                        (0, e.jsx)(i.default, {
                            style: {
                                width: '90%',
                                maxWidth: 700,
                                marginTop: 30,
                                marginBottom: 50,
                                padding: 35,
                                flexDirection: 'column'
                            },
                            children: (0, j.getUser)().passwordless ? (0, e.jsx)(l.default, {}) : _q ? (0, e.jsx)(m.default, {}) : (0, e.jsx)(k.default, {
                                continue: r
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _q = f.default.div.attrs({
        className: 'flex-column vc'
    })(o || (o = (_l => _l)`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  h1 {
    font-size: 32px;
    font-weight: ${ 0 };
  }
  p {
    font-size: 18px;
  }
`), g.default.Snow, g.default.Black, h.FontWeights.UltraBold);
}), a.register('7s5R80', function(b, c) {
    _l(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _l => (0, d.jsx)(_i, {
        onClick: _l.onClick,
        className: _l.className,
        style: _l.style,
        children: _l.children
    });
    const _i = e.default.div(g || (g = (_l => _l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('ARgso', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('ewwAh'),
        g = a('LEQ5w'),
        h = a('PMl60'),
        i = a('6pPvx');
    const j = (0, d.jsxs)(d.Fragment, {
            children: [
                'If you are looking to downgrade/cancel your subscription, you can do so by visiting the "Plan & Billing" tab in settings. ',
                (0, d.jsx)('br', {}),
                ' ',
                (0, d.jsx)('br', {}),
                'By requesting account deletion, you will lose all of your kits, assignments, classes, and more. You also won\'t be able to login to your account again.'
            ]
        }),
        k = 'delete my account';
    var _l = _l => {
        const [m, n] = g.useState(''), o = m !== k, p = () => {
            o || _l.continue();
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('h1', {
                    children: 'Are you sure you want to delete your account?'
                }),
                (0, d.jsxs)('p', {
                    children: [
                        (0, h.isStudent)() ? 'By deleting your account, you will be removed from all classes\nyou\'re currently part of. You will also lose any content you\'ve\ncreated and cosmetics earned.' : j,
                        ' To continue deleting your account, type ',
                        (0, d.jsx)('b', {
                            style: {
                                userSelect: 'none'
                            },
                            children: k
                        }),
                        ' ',
                        'below.'
                    ]
                }),
                (0, d.jsx)(e.default, {}),
                (0, d.jsx)(f.default, {
                    size: 'large',
                    placeholder: 'Enter here...',
                    onChange: _l => n(_l.target.value),
                    style: {
                        marginBottom: 10
                    },
                    onPressEnter: p
                }),
                (0, d.jsx)(i.default, {
                    onClick: p,
                    disabled: o,
                    children: 'Continue'
                })
            ]
        });
    };
}), a.register('6pPvx', function(b, c) {
    _l(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('ulE4q');
    a('LEQ5w');
    var _f = _l => (0, d.jsx)(e.default, {
        block: !0,
        size: 'large',
        type: 'primary',
        disabled: _l.disabled,
        loading: _l.loading,
        onClick: _l.onClick,
        children: _l.children
    });
}), a.register('H36N0', function(b, c) {
    _l(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('fmVdR');
    a('LEQ5w');
    var f = a('gs4MT'),
        g = a('jzxyj10'),
        h = a('6pPvx');
    var _i = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)('h1', {
                children: 'Add a password to delete your account'
            }),
            (0, d.jsx)('p', {
                children: 'In order to delete your account, you\'ll first need to attach a password to your account. You can attach a password in settings.'
            }),
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)(h.default, {
                onClick: () => (0, g.NavigateTo)(f.SETTINGS),
                children: 'Go To Settings'
            })
        ]
    });
}), a.register('jzxyj10', function(b, c) {
    _l(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _l => {
        d.history.push(_l);
    };
}), a.register('TJ5VD', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('ewwAh'),
        g = a('YRlpt'),
        h = a('LEQ5w'),
        i = a('PMl60'),
        j = a('6pPvx');
    var _k = () => {
        const [_l, m, n] = (0, i.useBoolean)(!1), [o, p] = h.useState(''), q = !o.length;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('h1', {
                    children: 'Last chance.'
                }),
                (0, d.jsx)('p', {
                    children: 'Deleting your account is permanent and cannot be reversed. If you are confident you want to delete your account, enter your password below. Once you click "Delete My Account", your account will be permanently deleted.'
                }),
                (0, d.jsx)(e.default, {}),
                (0, d.jsx)(f.default.Password, {
                    size: 'large',
                    placeholder: 'Password',
                    onChange: _l => p(_l.target.value),
                    style: {
                        marginBottom: 10
                    }
                }),
                (0, d.jsx)(j.default, {
                    onClick: () => {
                        if (q || _l)
                            return;
                        const r = (0, i.isStudent)();
                        m(), (0, i.request)({
                            url: '/api/user/delete',
                            data: {
                                password: o
                            },
                            success: () => {
                                (0, i.request)({
                                    url: '/logout'
                                }), g.default.success({
                                    title: 'Account deleted',
                                    content: r ? 'You will be removed from all classes you are part of and all content you\'ve created on Gimkit will be deleted. This process normally takes a few minutes, but can sometimes take up to a few hours.' : 'Your account and all the content you\'ve created will be deleted. Additionally, if you had an active subscriptions, we\'ve canceled them. This process normally only takes a few minutes, but can sometimes take a few hours.',
                                    onOk: () => window.location.href = '/'
                                });
                            },
                            error: _l => {
                                (0, i.throwMessageError)({
                                    e: _l,
                                    default: {
                                        title: 'Error deleting account'
                                    }
                                }), n();
                            }
                        });
                    },
                    disabled: q,
                    loading: _l,
                    children: 'Delete My Account'
                })
            ]
        });
    };
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _d(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_d, b) => {
            const {
                antCls: n
            } = _d, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _d.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _d.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _d.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('jlX4s16', function(b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('2HvvA11', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _i => _i.external || !_i.to ? (0, d.jsx)('a', {
        href: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        onKeyPress: b => {
            _i.onClick && 'Enter' === b.key && (b.preventDefault(), _i.onClick());
        },
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    }) : (0, d.jsx)(e.Link, {
        to: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    });
}), a.register('Rtfgy20', function(b, c) {
    _i(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _j(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('9R7cy', function(b, c) {
    _b(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _b => (0, d.jsx)('i', {
        className: `${ _b.name }${ _b.className ? ` ${ _b.className }` : '' }`,
        style: _b.style
    });
}), a.register('7B+hJ16', function(_b, c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), _b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    _b.exports.lazyWithPreload = _d, _b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
});