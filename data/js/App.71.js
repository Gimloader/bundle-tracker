function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....');
    let r, s, t = u => u;
    var _u = () => {
        const [v, w] = i.useState(0), x = () => w(y => y + 1);
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
                        o.default.map(y => (0, f.jsx)(n.default, {
                            test: y,
                            onPass: x
                        }, y.name))
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _v;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....');
    let m, n, o, p, q, r, s, t, u = v => v;
    var _v = w => {
        const {
            loading: x,
            passed: y
        } = (0, l.useTest)(w.test.test), z = f.useMemo(() => x ? '#4251af' : y ? '#388e3c' : '#f44336', [
            x,
            y
        ]), A = f.useMemo(() => x ? 'Running Test' : y ? 'Test Passed' : 'Test Failed', [
            x,
            y
        ]);
        f.useEffect(() => {
            y && w.onPass();
        }, [y]);
        const B = !x && !y;
        return (0, e.jsx)(g.default, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, e.jsxs)(_w, {
                children: [
                    (0, e.jsxs)(_x, {
                        children: [
                            x ? (0, e.jsx)(j.default, {
                                size: 14
                            }) : null,
                            (0, e.jsx)('div', {
                                style: {
                                    marginLeft: x ? 8 : 0,
                                    color: z
                                },
                                children: A
                            })
                        ]
                    }),
                    (0, e.jsx)(_y, {
                        style: {
                            color: y || x ? i.default.Black : z
                        },
                        children: w.test.name
                    }),
                    w.test.description && x ? (0, e.jsx)(_z, {
                        children: w.test.description
                    }) : null,
                    B ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsxs)(_A, {
                                children: [
                                    (0, e.jsx)(_B, {
                                        children: 'What It Means'
                                    }),
                                    (0, e.jsx)(_C, {
                                        children: w.test.whatItMeans
                                    })
                                ]
                            }),
                            (0, e.jsxs)(_D, {
                                children: [
                                    (0, e.jsx)(_B, {
                                        children: 'How To Fix'
                                    }),
                                    (0, e.jsx)(_C, {
                                        children: w.test.howToFix
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....');
    b('.....');
    var h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = 44;

    function l(m) {
        var n, o, p;
        return n = m, o = 0, p = 1, m = (Math.min(Math.max(o, n), p) - o) / (p - o), m = (m -= 1) * m * m + 1;
    }
    var p = g.forwardRef(function(q, r) {
            var s, t = q.classes,
                u = q.className,
                v = q.color,
                w = void 0 === v ? 'primary' : v,
                x = q.disableShrink,
                y = void 0 !== x && x,
                z = q.size,
                A = void 0 === z ? 40 : z,
                B = q.style,
                C = q.thickness,
                D = void 0 === C ? 3.6 : C,
                E = q.value,
                F = void 0 === E ? 0 : E,
                G = q.variant,
                H = void 0 === G ? 'indeterminate' : G,
                I = (0, f.default)(q, [
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
                J = {},
                K = {},
                L = {};
            if ('determinate' === H || 'static' === H) {
                var M = 2 * Math.PI * ((k - D) / 2);
                J.strokeDasharray = M.toFixed(3), L['aria-valuenow'] = Math.round(F), 'static' === H ? (J.strokeDashoffset = ''.concat(((100 - F) / 100 * M).toFixed(3), 'px'), K.transform = 'rotate(-90deg)') : (J.strokeDashoffset = ''.concat((s = (100 - F) / 100, s * s * M).toFixed(3), 'px'), K.transform = 'rotate('.concat((270 * l(F / 70)).toFixed(3), 'deg)'));
            }
            return g.createElement('div', (0, e.default)({
                className: (0, h.default)(t.root, u, 'inherit' !== w && t['color'.concat((0, j.default)(w))], {
                    indeterminate: t.indeterminate,
                    static: t.static
                } [H]),
                style: (0, e.default)({
                    width: A,
                    height: A
                }, K, B),
                ref: r,
                role: 'progressbar'
            }, L, I), g.createElement('svg', {
                className: t.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(k, ' ').concat(k)
            }, g.createElement('circle', {
                className: (0, h.default)(t.circle, y && t.circleDisableShrink, {
                    indeterminate: t.circleIndeterminate,
                    static: t.circleStatic
                } [H]),
                style: J,
                cx: k,
                cy: k,
                r: (k - D) / 2,
                fill: 'none',
                strokeWidth: D
            })));
        }),
        _q = (0, i.default)(function(r) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: r.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: r.palette.primary.main
                },
                colorSecondary: {
                    color: r.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: r.transitions.create('stroke-dashoffset')
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
        })(p);
}), b.register('.....', function(c, d) {
    a(c.exports, 'useTest', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = h => {
        const [i, , j] = (0, f.useBoolean)(!0), [k, l] = e.useState(!1), m = () => {
            l(!0), j();
        }, n = () => {
            l(!1), j();
        };
        return e.useEffect(() => {
            h(m, n);
        }, []), {
            loading: i,
            passed: k
        };
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('.....'),
        f = b('.....');
    b('.....');
    var g = b('.....'),
        h = b('.....'),
        i = b('.....');
    const j = k => (0, e.jsx)('div', {
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
            children: k.children
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
            test: (l, m) => {
                (0, h.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'original'
                    },
                    success: n => {
                        n && n.url ? (0, h.request)({
                            url: n.url + '/hello',
                            success: () => l(),
                            error: o => m()
                        }) : m();
                    },
                    error: n => m()
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
            test: (m, n) => {
                (0, h.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'map'
                    },
                    success: o => {
                        if (o && o.url) {
                            new(0, f.Client)(o.url.replace('http', 'ws')).create('ConnectionTest').then(p => {
                                let q = !1;
                                setTimeout(() => {
                                    q || (q = !0, m());
                                }, 55000), p.onLeave(() => {
                                    q || (q = !0, n());
                                }), p.onError(() => {
                                    q || (q = !0, n());
                                });
                            }).catch(p => {
                                n();
                            });
                        } else
                            n();
                    },
                    error: o => n()
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
            test: (n, o) => {
                (0, h.request)({
                    url: (0, i.getCloudinaryUrl)('https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png'),
                    success: n,
                    error: o
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
            test: (o, p) => {
                (0, h.request)({
                    url: 'https://images.unsplash.com/photo-1574539299747-c0dcef95d2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                    success: o,
                    error: p
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
            test: (p, q) => {
                (() => {
                    try {
                        const r = document.createElement('canvas');
                        return !(!window.WebGLRenderingContext || !r.getContext('webgl') && !r.getContext('experimental-webgl'));
                    } catch (r) {
                        return !1;
                    }
                })() ? p(): q();
            }
        },
        n
    ];
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    b('.....');
    var _g = h => h.external || !h.to ? (0, e.jsx)('a', {
        href: h.to,
        tabIndex: Number(h.tabIndex || '0'),
        onClick: h.onClick,
        onKeyPress: i => {
            h.onClick && 'Enter' === i.key && (i.preventDefault(), h.onClick());
        },
        className: h.className,
        target: h.target,
        style: h.style,
        children: h.children
    }) : (0, e.jsx)(f.Link, {
        to: h.to,
        tabIndex: Number(h.tabIndex || '0'),
        onClick: h.onClick,
        className: h.className,
        target: h.target,
        style: h.style,
        children: h.children
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'getCloudinaryUrl', function() {
        return _e;
    });
    const _e = f => {
            const g = _f(f);
            return g ? f.includes('/video/upload') ? `https://${ _g }/video/upload/${ g }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : f;
        },
        _f = g => {
            if (!_j.some(h => g.includes(h)))
                return null;
            if (g.includes(_h) && !g.includes(`/${ _i }/`))
                return null;
            const h = g.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _g = 'media.gimkit.com',
        _h = 'res.cloudinary.com',
        _i = 'gimkit-production',
        _j = [
            _g,
            _h
        ];
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....');
    let h;
    var _i = j => (0, e.jsx)(_j, {
        onClick: j.onClick,
        className: j.className,
        style: j.style,
        children: j.children
    });
    const _j = f.default.div(h || (h = (k => k)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), g.default.White);
});