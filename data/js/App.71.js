function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('qi4Gg', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _u(b.exports, 'default', function() {
        return _t;
    });
    var e = a('0hzx+'),
        f = a('NIZyA'),
        g = a('fmVdR'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('sHRDd'),
        k = a('b5kvC'),
        l = a('Yjqqv'),
        m = a('xgp7G'),
        n = a('NkjRq'),
        o = a('PMl60'),
        p = a('7s5R80');
    let q, r, s = _u => _u;
    var _t = () => {
        const [_u, v] = h.useState(0), w = () => v(_u => _u + 1);
        return (0, e.jsxs)(_u, {
            children: [
                (0, e.jsx)(o.Title, {
                    title: 'Compatibility Check'
                }),
                (0, e.jsxs)(_v, {
                    children: [
                        (0, e.jsx)(l.default, {}),
                        _u === n.default.length ? (0, e.jsx)(f.default, {
                            type: 'success',
                            style: {
                                marginTop: 15
                            },
                            showIcon: !0,
                            message: 'All Test Passed!',
                            description: 'You should be all set to access everything in Gimkit properly!'
                        }) : null,
                        (0, e.jsx)(g.default, {}),
                        n.default.map(_u => (0, e.jsx)(m.default, {
                            test: _u,
                            onPass: w
                        }, _u.name))
                    ]
                })
            ]
        });
    };
    const _u = i.default.div.attrs({
            className: 'flex hc'
        })(q || (q = s`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), j.default.Snow, k.Fonts.SFPro, j.default.Black),
        _v = (0, i.default)(p.default)(r || (r = s`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`));
}), a.register('Yjqqv', function(b, c) {
    _l(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('b5kvC');
    var _f = () => (0, d.jsxs)('div', {
        children: [
            (0, d.jsx)('div', {
                style: {
                    fontWeight: e.FontWeights.Bold,
                    fontSize: 32
                },
                children: 'Gimkit Compatibility Check'
            }),
            (0, d.jsx)('div', {
                style: {
                    fontSize: 16,
                    marginTop: 3
                },
                children: 'If any of these tests fail, then please contact your school\'s IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work.'
            })
        ]
    });
}), a.register('xgp7G', function(b, c) {
    _l(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('oXQNI'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('FpbFp'),
        j = a('b5kvC'),
        k = a('OVITM');
    let l, m, n, o, p, q, r, s, t = _l => _l;
    var _u = _l => {
        const {
            loading: v,
            passed: w
        } = (0, k.useTest)(_l.test.test), x = e.useMemo(() => v ? '#4251af' : w ? '#388e3c' : '#f44336', [
            v,
            w
        ]), y = e.useMemo(() => v ? 'Running Test' : w ? 'Test Passed' : 'Test Failed', [
            v,
            w
        ]);
        e.useEffect(() => {
            w && _l.onPass();
        }, [w]);
        const z = !v && !w;
        return (0, d.jsx)(f.default, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, d.jsxs)(_v, {
                children: [
                    (0, d.jsxs)(_w, {
                        children: [
                            v ? (0, d.jsx)(i.default, {
                                size: 14
                            }) : null,
                            (0, d.jsx)('div', {
                                style: {
                                    marginLeft: v ? 8 : 0,
                                    color: x
                                },
                                children: y
                            })
                        ]
                    }),
                    (0, d.jsx)(_x, {
                        style: {
                            color: w || v ? h.default.Black : x
                        },
                        children: _l.test.name
                    }),
                    _l.test.description && v ? (0, d.jsx)(_y, {
                        children: _l.test.description
                    }) : null,
                    z ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsxs)(_z, {
                                children: [
                                    (0, d.jsx)(_A, {
                                        children: 'What It Means'
                                    }),
                                    (0, d.jsx)(_B, {
                                        children: _l.test.whatItMeans
                                    })
                                ]
                            }),
                            (0, d.jsxs)(_C, {
                                children: [
                                    (0, d.jsx)(_A, {
                                        children: 'How To Fix'
                                    }),
                                    (0, d.jsx)(_B, {
                                        children: _l.test.howToFix
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const _v = g.default.div(l || (l = t`
  color: ${ 0 };
`), h.default.Black),
        _w = g.default.div.attrs({
            className: 'flex vc'
        })(m || (m = t`
  font-size: 16px;
`)),
        _x = g.default.div(n || (n = t`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold),
        _y = g.default.div(o || (o = t`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`)),
        _z = g.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = t`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`)),
        _A = g.default.div(q || (q = t`
  font-style: italic;
  font-weight: ${ 0 };
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`), j.FontWeights.Bold),
        _B = g.default.div(r || (r = t`
  margin-top: 5px;
`)),
        _C = g.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = t`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`));
}), a.register('FpbFp', function(b, c) {
    _l(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = 44;

    function k(_l) {
        var m, n, o;
        return m = _l, n = 0, o = 1, _l = (Math.min(Math.max(n, m), o) - n) / (o - n), _l = (_l -= 1) * _l * _l + 1;
    }
    var k = f.forwardRef(function(l, m) {
            var n, o = l.classes,
                p = l.className,
                q = l.color,
                _r = void 0 === q ? 'primary' : q,
                s = l.disableShrink,
                t = void 0 !== s && s,
                u = l.size,
                v = void 0 === u ? 40 : u,
                w = l.style,
                x = l.thickness,
                y = void 0 === x ? 3.6 : x,
                z = l.value,
                A = void 0 === z ? 0 : z,
                B = l.variant,
                C = void 0 === B ? 'indeterminate' : B,
                D = (0, e.default)(l, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]),
                E = {},
                F = {},
                G = {};
            if ('determinate' === C || 'static' === C) {
                var H = 2 * Math.PI * ((j - y) / 2);
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * _k(A / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(o.root, p, 'inherit' !== _r && o['color'.concat((0, i.default)(_r))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, d.default)({
                    width: v,
                    height: v
                }, F, w),
                ref: m,
                role: 'progressbar'
            }, G, D), f.createElement('svg', {
                className: o.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(o.circle, t && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: E,
                cx: j,
                cy: j,
                r: (j - y) / 2,
                fill: 'none',
                strokeWidth: y
            })));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: m.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: m.palette.primary.main
                },
                colorSecondary: {
                    color: m.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: m.transitions.create('stroke-dashoffset')
                },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': {
                        transformOrigin: '50% 50%'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: {
                    animation: 'none'
                }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(k);
}), a.register('OVITM', function(b, c) {
    _o(b.exports, 'useTest', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('PMl60');
    const _f = _o => {
        const [g, , h] = (0, e.useBoolean)(!0), [i, j] = d.useState(!1), k = () => {
            j(!0), h();
        }, l = () => {
            j(!1), h();
        };
        return d.useEffect(() => {
            _o(k, l);
        }, []), {
            loading: g,
            passed: i
        };
    };
}), a.register('NkjRq', function(b, c) {
    _o(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('lJnts');
    a('LEQ5w');
    var f = a('2HvvA11'),
        g = a('PMl60'),
        h = a('x8CoD');
    const i = _o => (0, d.jsx)('div', {
            style: {
                border: '2px solid',
                fontFamily: 'monospace',
                padding: '3px 10px',
                background: '#f5f5f5',
                color: '#4527a0',
                display: 'inline-block',
                borderRadius: 2,
                margin: '2px 4px'
            },
            children: _o.children
        }),
        j = {
            name: 'Firewall check on *.gimkitconnect.com',
            whatItMeans: (0, d.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting or participating in games.'
            }),
            howToFix: (0, d.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, d.jsx)(i, {
                        children: 'https://*.gimkitconnect.com'
                    }),
                    '. Please note this is a wildcard. Gimkit needs access to every subdomain on',
                    ' ',
                    (0, d.jsx)(i, {
                        children: 'gimkitconnect.com'
                    }),
                    '.'
                ]
            }),
            test: (_o, a) => {
                (0, g.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'original'
                    },
                    success: b => {
                        b && b.url ? (0, g.request)({
                            url: b.url + '/hello',
                            success: () => _o(),
                            error: _o => a()
                        }) : a();
                    },
                    error: _o => a()
                });
            }
        },
        _k = {
            name: 'WebSocket connection to *.gimkitconnect.com',
            description: 'This test takes 60 seconds to complete.',
            whatItMeans: (0, d.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting & participating in all game modes.'
            }),
            howToFix: (0, d.jsxs)('span', {
                children: [
                    'Unblock both of the following domains:',
                    (0, d.jsxs)('ul', {
                        children: [
                            (0, d.jsx)('li', {
                                children: (0, d.jsx)(i, {
                                    children: 'https://*.gimkitconnect.com'
                                })
                            }),
                            (0, d.jsx)('li', {
                                children: (0, d.jsx)(i, {
                                    children: 'wss://*.gimkitconnect.com'
                                })
                            })
                        ]
                    }),
                    'Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on',
                    ' ',
                    (0, d.jsx)(i, {
                        children: 'gimkitconnect.com'
                    }),
                    ' to work properly.',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'If the firewall check test below passed, this is most likely an issue with your school\'s proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow',
                    ' ',
                    (0, d.jsx)(i, {
                        children: '*.gimkitconnect.com'
                    }),
                    ' in your proxy\u2019s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.',
                    ' ',
                    (0, d.jsx)(i, {
                        children: '*.gimkitconnect.com'
                    }),
                    'may need to bypass network monitoring.'
                ]
            }),
            test: (_o, a) => {
                (0, g.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'map'
                    },
                    success: b => {
                        if (b && b.url) {
                            new(0, e.Client)(b.url.replace('http', 'ws')).create('ConnectionTest').then(b => {
                                let l = !1;
                                setTimeout(() => {
                                    l || (l = !0, _o());
                                }, 55000), b.onLeave(() => {
                                    l || (l = !0, a());
                                }), b.onError(() => {
                                    l || (l = !0, a());
                                });
                            }).catch(_o => {
                                a();
                            });
                        } else
                            a();
                    },
                    error: _o => a()
                });
            }
        },
        l = {
            name: 'Firewall check on media.gimkit.com',
            whatItMeans: (0, d.jsx)('span', {
                children: 'You won\'t be able to view uploaded images & audio.'
            }),
            howToFix: (0, d.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, d.jsx)(i, {
                        children: 'media.gimkit.com'
                    }),
                    '.'
                ]
            }),
            test: (_o, a) => {
                (0, g.request)({
                    url: (0, h.getCloudinaryUrl)('https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png'),
                    success: _o,
                    error: a
                });
            }
        },
        m = {
            name: 'Firewall check on unsplash.com',
            whatItMeans: (0, d.jsx)('span', {
                children: 'You won\'t be able to view cover photos for kits.'
            }),
            howToFix: (0, d.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, d.jsx)(i, {
                        children: 'unsplash.com'
                    }),
                    '.'
                ]
            }),
            test: (_o, a) => {
                (0, g.request)({
                    url: 'https://images.unsplash.com/photo-1574539299747-c0dcef95d2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                    success: _o,
                    error: a
                });
            }
        };
    var _n = [
        _k,
        j,
        l,
        {
            name: 'WebGL support',
            whatItMeans: (0, d.jsx)('span', {
                children: 'You will not be able to play/host 2D game modes'
            }),
            howToFix: (0, d.jsxs)('span', {
                children: [
                    '2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:',
                    ' ',
                    (0, d.jsx)(f.default, {
                        to: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn',
                        external: !0,
                        children: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn'
                    })
                ]
            }),
            test: (_o, a) => {
                (() => {
                    try {
                        const _o = document.createElement('canvas');
                        return !(!window.WebGLRenderingContext || !_o.getContext('webgl') && !_o.getContext('experimental-webgl'));
                    } catch (e) {
                        return !1;
                    }
                })() ? e(): a();
            }
        },
        m
    ];
}), a.register('2HvvA11', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = e => e.external || !e.to ? (0, d.jsx)('a', {
        href: e.to,
        tabIndex: Number(e.tabIndex || '0'),
        onClick: e.onClick,
        onKeyPress: a => {
            e.onClick && 'Enter' === a.key && (a.preventDefault(), e.onClick());
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, d.jsx)(e.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || '0'),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    });
}), a.register('x8CoD', function(b, c) {
    e(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = e => {
            const e = _e(e);
            return e ? e.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : e;
        },
        _e = e => {
            if (!_i.some(b => e.includes(b)))
                return null;
            if (e.includes(_g) && !e.includes(`/${ _h }/`))
                return null;
            const f = e.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('7s5R80', function(b, c) {
    e(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = e => (0, d.jsx)(_i, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const _i = e.default.div(g || (g = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
});