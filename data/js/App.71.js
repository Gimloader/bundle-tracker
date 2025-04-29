function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('vjpJd', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('gRbUn'),
        g = b('qMSe6'),
        h = b('VNuyu'),
        i = b('O0Kav'),
        j = b('u4s09'),
        k = b('8KqQ+'),
        l = b('Eh2Wh'),
        m = b('BvBT4'),
        n = b('Yf6eb'),
        o = b('wxVhF'),
        p = b('quE27'),
        q = b('F0ESS9');
    let r, s, t = a => a;
    var _u = () => {
        const [v, w] = i.useState(0), x = () => w(v => v + 1);
        return (0, f.jsxs)(_v, {
            children: [
                (0, f.jsx)(p.Title, {
                    title: 'Compatibility Check'
                }),
                (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(m.default, {}),
                        v === o.default.length ? (0, f.jsx)(g.default, {
                            type: 'success',
                            style: {
                                marginTop: 15
                            },
                            showIcon: !0,
                            message: 'All Test Passed!',
                            description: 'You should be all set to access everything in Gimkit properly!'
                        }) : null,
                        (0, f.jsx)(h.default, {}),
                        o.default.map(v => (0, f.jsx)(n.default, {
                            test: v,
                            onPass: x
                        }, v.name))
                    ]
                })
            ]
        });
    };
    const _v = j.default.div.attrs({
            className: 'flex hc'
        })(r || (r = t`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), k.default.Snow, l.Fonts.SFPro, k.default.Black),
        _w = (0, j.default)(q.default)(s || (s = t`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`));
}), b.register('BvBT4', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('Eh2Wh');
    var _g = () => (0, e.jsxs)('div', {
        children: [
            (0, e.jsx)('div', {
                style: {
                    fontWeight: f.FontWeights.Bold,
                    fontSize: 32
                },
                children: 'Gimkit Compatibility Check'
            }),
            (0, e.jsx)('div', {
                style: {
                    fontSize: 16,
                    marginTop: 3
                },
                children: 'If any of these tests fail, then please contact your school\'s IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work.'
            })
        ]
    });
}), b.register('Yf6eb', function(c, d) {
    a(c.exports, 'default', function() {
        return _v;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('QZ0Z+'),
        h = b('u4s09'),
        i = b('8KqQ+'),
        j = b('JNGrh0'),
        k = b('Eh2Wh'),
        l = b('4Gp1n');
    let m, n, o, p, q, r, s, t, u = a => a;
    var _v = a => {
        const {
            loading: w,
            passed: x
        } = (0, l.useTest)(a.test.test), y = f.useMemo(() => w ? '#4251af' : x ? '#388e3c' : '#f44336', [
            w,
            x
        ]), z = f.useMemo(() => w ? 'Running Test' : x ? 'Test Passed' : 'Test Failed', [
            w,
            x
        ]);
        f.useEffect(() => {
            x && a.onPass();
        }, [x]);
        const A = !w && !x;
        return (0, e.jsx)(g.default, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, e.jsxs)(_w, {
                children: [
                    (0, e.jsxs)(_x, {
                        children: [
                            w ? (0, e.jsx)(j.default, {
                                size: 14
                            }) : null,
                            (0, e.jsx)('div', {
                                style: {
                                    marginLeft: w ? 8 : 0,
                                    color: y
                                },
                                children: z
                            })
                        ]
                    }),
                    (0, e.jsx)(_y, {
                        style: {
                            color: x || w ? i.default.Black : y
                        },
                        children: a.test.name
                    }),
                    a.test.description && w ? (0, e.jsx)(_z, {
                        children: a.test.description
                    }) : null,
                    A ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsxs)(_A, {
                                children: [
                                    (0, e.jsx)(_B, {
                                        children: 'What It Means'
                                    }),
                                    (0, e.jsx)(_C, {
                                        children: a.test.whatItMeans
                                    })
                                ]
                            }),
                            (0, e.jsxs)(_D, {
                                children: [
                                    (0, e.jsx)(_B, {
                                        children: 'How To Fix'
                                    }),
                                    (0, e.jsx)(_C, {
                                        children: a.test.howToFix
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const _w = h.default.div(m || (m = u`
  color: ${ 0 };
`), i.default.Black),
        _x = h.default.div.attrs({
            className: 'flex vc'
        })(n || (n = u`
  font-size: 16px;
`)),
        _y = h.default.div(o || (o = u`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _z = h.default.div(p || (p = u`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`)),
        _A = h.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`)),
        _B = h.default.div(r || (r = u`
  font-style: italic;
  font-weight: ${ 0 };
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`), k.FontWeights.Bold),
        _C = h.default.div(s || (s = u`
  margin-top: 5px;
`)),
        _D = h.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = u`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`));
}), b.register('JNGrh0', function(c, d) {
    a(c.exports, 'default', function() {
        return _t;
    });
    var e = b('+pD1R19'),
        f = b('DFnC8'),
        g = b('O0Kav');
    b('HoW8Y');
    var h = b('PEco5'),
        i = b('T8OqN'),
        j = b('KOz0K'),
        k = 44;

    function l(m) {
        var n, o, p;
        return n = m, o = 0, p = 1, m = (Math.min(Math.max(o, n), p) - o) / (p - o), m = (m -= 1) * m * m + 1;
    }
    var m = g.forwardRef(function(n, o) {
            var p, q = n.classes,
                r = n.className,
                s = n.color,
                _t = void 0 === s ? 'primary' : s,
                u = n.disableShrink,
                v = void 0 !== u && u,
                w = n.size,
                x = void 0 === w ? 40 : w,
                y = n.style,
                z = n.thickness,
                A = void 0 === z ? 3.6 : z,
                B = n.value,
                C = void 0 === B ? 0 : B,
                D = n.variant,
                E = void 0 === D ? 'indeterminate' : D,
                F = (0, f.default)(n, [
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
                G = {},
                H = {},
                I = {};
            if ('determinate' === E || 'static' === E) {
                var J = 2 * Math.PI * ((k - A) / 2);
                G.strokeDasharray = J.toFixed(3), I['aria-valuenow'] = Math.round(C), 'static' === E ? (G.strokeDashoffset = ''.concat(((100 - C) / 100 * J).toFixed(3), 'px'), H.transform = 'rotate(-90deg)') : (G.strokeDashoffset = ''.concat((p = (100 - C) / 100, p * p * J).toFixed(3), 'px'), H.transform = 'rotate('.concat((270 * l(C / 70)).toFixed(3), 'deg)'));
            }
            return g.createElement('div', (0, e.default)({
                className: (0, h.default)(q.root, r, 'inherit' !== _t && q['color'.concat((0, j.default)(_t))], {
                    indeterminate: q.indeterminate,
                    static: q.static
                } [E]),
                style: (0, e.default)({
                    width: x,
                    height: x
                }, H, y),
                ref: o,
                role: 'progressbar'
            }, I, F), g.createElement('svg', {
                className: q.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(k, ' ').concat(k)
            }, g.createElement('circle', {
                className: (0, h.default)(q.circle, v && q.circleDisableShrink, {
                    indeterminate: q.circleIndeterminate,
                    static: q.circleStatic
                } [E]),
                style: G,
                cx: k,
                cy: k,
                r: (k - A) / 2,
                fill: 'none',
                strokeWidth: A
            })));
        }),
        n = (0, i.default)(function(o) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: o.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: o.palette.primary.main
                },
                colorSecondary: {
                    color: o.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: o.transitions.create('stroke-dashoffset')
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
        })(m);
}), b.register('4Gp1n', function(c, d) {
    a(c.exports, 'useTest', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = b('quE27');
    const _g = a => {
        const [h, , i] = (0, f.useBoolean)(!0), [j, k] = e.useState(!1), l = () => {
            k(!0), i();
        }, m = () => {
            k(!1), i();
        };
        return e.useEffect(() => {
            a(l, m);
        }, []), {
            loading: h,
            passed: j
        };
    };
}), b.register('wxVhF', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('gRbUn'),
        f = b('lJnts');
    b('O0Kav');
    var g = b('FB7HT26'),
        h = b('quE27'),
        i = b('HloXO');
    const j = a => (0, e.jsx)('div', {
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
            children: a.children
        }),
        k = {
            name: 'Firewall check on *.gimkitconnect.com',
            whatItMeans: (0, e.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting or participating in games.'
            }),
            howToFix: (0, e.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, e.jsx)(j, {
                        children: 'https://*.gimkitconnect.com'
                    }),
                    '. Please note this is a wildcard. Gimkit needs access to every subdomain on',
                    ' ',
                    (0, e.jsx)(j, {
                        children: 'gimkitconnect.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, h.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'original'
                    },
                    success: c => {
                        c && c.url ? (0, h.request)({
                            url: c.url + '/hello',
                            success: () => a(),
                            error: a => b()
                        }) : b();
                    },
                    error: a => b()
                });
            }
        },
        l = {
            name: 'WebSocket connection to *.gimkitconnect.com',
            description: 'This test takes 60 seconds to complete.',
            whatItMeans: (0, e.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting & participating in all game modes.'
            }),
            howToFix: (0, e.jsxs)('span', {
                children: [
                    'Unblock both of the following domains:',
                    (0, e.jsxs)('ul', {
                        children: [
                            (0, e.jsx)('li', {
                                children: (0, e.jsx)(j, {
                                    children: 'https://*.gimkitconnect.com'
                                })
                            }),
                            (0, e.jsx)('li', {
                                children: (0, e.jsx)(j, {
                                    children: 'wss://*.gimkitconnect.com'
                                })
                            })
                        ]
                    }),
                    'Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on',
                    ' ',
                    (0, e.jsx)(j, {
                        children: 'gimkitconnect.com'
                    }),
                    ' to work properly.',
                    (0, e.jsx)('br', {}),
                    ' ',
                    (0, e.jsx)('br', {}),
                    'If the firewall check test below passed, this is most likely an issue with your school\'s proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow',
                    ' ',
                    (0, e.jsx)(j, {
                        children: '*.gimkitconnect.com'
                    }),
                    ' in your proxy\u2019s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.',
                    ' ',
                    (0, e.jsx)(j, {
                        children: '*.gimkitconnect.com'
                    }),
                    'may need to bypass network monitoring.'
                ]
            }),
            test: (a, b) => {
                (0, h.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'map'
                    },
                    success: c => {
                        if (c && c.url) {
                            new(0, f.Client)(c.url.replace('http', 'ws')).create('ConnectionTest').then(c => {
                                let m = !1;
                                setTimeout(() => {
                                    m || (m = !0, a());
                                }, 55000), c.onLeave(() => {
                                    m || (m = !0, b());
                                }), c.onError(() => {
                                    m || (m = !0, b());
                                });
                            }).catch(a => {
                                b();
                            });
                        } else
                            b();
                    },
                    error: a => b()
                });
            }
        },
        m = {
            name: 'Firewall check on media.gimkit.com',
            whatItMeans: (0, e.jsx)('span', {
                children: 'You won\'t be able to view uploaded images & audio.'
            }),
            howToFix: (0, e.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, e.jsx)(j, {
                        children: 'media.gimkit.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, h.request)({
                    url: (0, i.getCloudinaryUrl)('https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png'),
                    success: a,
                    error: b
                });
            }
        },
        n = {
            name: 'Firewall check on unsplash.com',
            whatItMeans: (0, e.jsx)('span', {
                children: 'You won\'t be able to view cover photos for kits.'
            }),
            howToFix: (0, e.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, e.jsx)(j, {
                        children: 'unsplash.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, h.request)({
                    url: 'https://images.unsplash.com/photo-1574539299747-c0dcef95d2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                    success: a,
                    error: b
                });
            }
        };
    var _o = [
        l,
        k,
        m,
        {
            name: 'WebGL support',
            whatItMeans: (0, e.jsx)('span', {
                children: 'You will not be able to play/host 2D game modes'
            }),
            howToFix: (0, e.jsxs)('span', {
                children: [
                    '2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.',
                    (0, e.jsx)('br', {}),
                    ' ',
                    (0, e.jsx)('br', {}),
                    'This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:',
                    ' ',
                    (0, e.jsx)(g.default, {
                        to: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn',
                        external: !0,
                        children: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn'
                    })
                ]
            }),
            test: (a, b) => {
                (() => {
                    try {
                        const p = document.createElement('canvas');
                        return !(!window.WebGLRenderingContext || !p.getContext('webgl') && !p.getContext('experimental-webgl'));
                    } catch (a) {
                        return !1;
                    }
                })() ? a(): b();
            }
        },
        n
    ];
}), b.register('FB7HT26', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('gRbUn'),
        f = b('+cTfn');
    b('O0Kav');
    var _g = a => a.external || !a.to ? (0, e.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, e.jsx)(f.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), b.register('HloXO', function(c, d) {
    a(c.exports, 'getCloudinaryUrl', function() {
        return _e;
    });
    const _e = a => {
            const f = _f(a);
            return f ? a.includes('/video/upload') ? `https://${ _g }/video/upload/${ f }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ f }` : a;
        },
        _f = a => {
            if (!_j.some(c => a.includes(c)))
                return null;
            if (a.includes(_h) && !a.includes(`/${ _i }/`))
                return null;
            const g = a.split('/');
            if (!g || !g.length || g.length < 2)
                return null;
            const h = g[g.length - 2],
                i = g[g.length - 1];
            return h && i && h.startsWith('v') ? `${ h }/${ i }` : null;
        },
        _g = 'media.gimkit.com',
        _h = 'res.cloudinary.com',
        _i = 'gimkit-production',
        _j = [
            _g,
            _h
        ];
}), b.register('F0ESS9', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('8KqQ+');
    let h;
    var _i = a => (0, e.jsx)(_j, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const _j = f.default.div(h || (h = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), g.default.White);
});