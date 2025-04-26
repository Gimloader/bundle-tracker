function a(a, b, v, w) {
    Object.defineProperty(a, b, {
        get: v,
        set: w,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('0TiYh', function(v, w) {
    var c;
    c = v.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(v.exports, 'default', function() {
        return s;
    });
    var d = b('8kSQZ'),
        e = b('bPH7V'),
        f = b('ExtIT'),
        g = b('uPP4W'),
        h = b('h99Nu'),
        i = b('lmfrI'),
        j = b('gSUVO'),
        k = b('hKRgq'),
        l = b('k7gmw'),
        m = b('kYNzL'),
        n = b('PjB0f'),
        o = b('FfkIK1');
    let p, q, r = a => a;
    var s = () => {
        const [t, u] = g.useState(0), v = () => u(t => t + 1);
        return (0, d.jsxs)(t, {
            children: [
                (0, d.jsx)(n.Title, {
                    title: 'Compatibility Check'
                }),
                (0, d.jsxs)(u, {
                    children: [
                        (0, d.jsx)(k.default, {}),
                        t === m.default.length ? (0, d.jsx)(e.default, {
                            type: 'success',
                            style: {
                                marginTop: 15
                            },
                            showIcon: !0,
                            message: 'All Test Passed!',
                            description: 'You should be all set to access everything in Gimkit properly!'
                        }) : null,
                        (0, d.jsx)(f.default, {}),
                        m.default.map(t => (0, d.jsx)(l.default, {
                            test: t,
                            onPass: v
                        }, t.name))
                    ]
                })
            ]
        });
    };
    const t = h.default.div.attrs({
            className: 'flex hc'
        })(p || (p = r`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), i.default.Snow, j.Fonts.SFPro, i.default.Black),
        u = (0, h.default)(o.default)(q || (q = r`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`));
}), b.register('hKRgq', function(v, w) {
    a(v.exports, 'default', function() {
        return e;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('gSUVO');
    var e = () => (0, c.jsxs)('div', {
        children: [
            (0, c.jsx)('div', {
                style: {
                    fontWeight: d.FontWeights.Bold,
                    fontSize: 32
                },
                children: 'Gimkit Compatibility Check'
            }),
            (0, c.jsx)('div', {
                style: {
                    fontSize: 16,
                    marginTop: 3
                },
                children: 'If any of these tests fail, then please contact your school\'s IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work.'
            })
        ]
    });
}), b.register('k7gmw', function(v, w) {
    a(v.exports, 'default', function() {
        return t;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('f9f+a'),
        f = b('h99Nu'),
        g = b('lmfrI'),
        h = b('fgVTE0'),
        i = b('gSUVO'),
        j = b('uhGu5');
    let k, l, m, n, o, p, q, r, s = a => a;
    var t = a => {
        const {
            loading: u,
            passed: v
        } = (0, j.useTest)(a.test.test), w = d.useMemo(() => u ? '#4251af' : v ? '#388e3c' : '#f44336', [
            u,
            v
        ]), x = d.useMemo(() => u ? 'Running Test' : v ? 'Test Passed' : 'Test Failed', [
            u,
            v
        ]);
        d.useEffect(() => {
            v && a.onPass();
        }, [v]);
        const y = !u && !v;
        return (0, c.jsx)(e.default, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, c.jsxs)(u, {
                children: [
                    (0, c.jsxs)(v, {
                        children: [
                            u ? (0, c.jsx)(h.default, {
                                size: 14
                            }) : null,
                            (0, c.jsx)('div', {
                                style: {
                                    marginLeft: u ? 8 : 0,
                                    color: w
                                },
                                children: x
                            })
                        ]
                    }),
                    (0, c.jsx)(w, {
                        style: {
                            color: v || u ? g.default.Black : w
                        },
                        children: a.test.name
                    }),
                    a.test.description && u ? (0, c.jsx)(x, {
                        children: a.test.description
                    }) : null,
                    y ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsxs)(y, {
                                children: [
                                    (0, c.jsx)(z, {
                                        children: 'What It Means'
                                    }),
                                    (0, c.jsx)(A, {
                                        children: a.test.whatItMeans
                                    })
                                ]
                            }),
                            (0, c.jsxs)(B, {
                                children: [
                                    (0, c.jsx)(z, {
                                        children: 'How To Fix'
                                    }),
                                    (0, c.jsx)(A, {
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
    const u = f.default.div(k || (k = s`
  color: ${ 0 };
`), g.default.Black),
        v = f.default.div.attrs({
            className: 'flex vc'
        })(l || (l = s`
  font-size: 16px;
`)),
        w = f.default.div(m || (m = s`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        x = f.default.div(n || (n = s`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`)),
        y = f.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = s`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`)),
        z = f.default.div(p || (p = s`
  font-style: italic;
  font-weight: ${ 0 };
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`), i.FontWeights.Bold),
        A = f.default.div(q || (q = s`
  margin-top: 5px;
`)),
        B = f.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = s`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`));
}), b.register('fgVTE0', function(l, m) {
    a(l.exports, 'default', function() {
        return p;
    });
    var c = b('b5p1k12'),
        d = b('lWzbN'),
        e = b('uPP4W');
    b('uj3CK');
    var f = b('LS7Qv'),
        g = b('knVNm'),
        h = b('l/I4j'),
        i = 44;

    function j(a) {
        var k, l, m;
        return k = a, l = 0, m = 1, a = (Math.min(Math.max(l, k), m) - l) / (m - l), a = (a -= 1) * a * a + 1;
    }
    var k = e.forwardRef(function(a, b) {
            var l, m = a.classes,
                n = a.className,
                o = a.color,
                p = void 0 === o ? 'primary' : o,
                q = a.disableShrink,
                r = void 0 !== q && q,
                s = a.size,
                t = void 0 === s ? 40 : s,
                u = a.style,
                v = a.thickness,
                w = void 0 === v ? 3.6 : v,
                x = a.value,
                y = void 0 === x ? 0 : x,
                z = a.variant,
                A = void 0 === z ? 'indeterminate' : z,
                B = (0, d.default)(a, [
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
                C = {},
                D = {},
                E = {};
            if ('determinate' === A || 'static' === A) {
                var F = 2 * Math.PI * ((i - w) / 2);
                C.strokeDasharray = F.toFixed(3), E['aria-valuenow'] = Math.round(y), 'static' === A ? (C.strokeDashoffset = ''.concat(((100 - y) / 100 * F).toFixed(3), 'px'), D.transform = 'rotate(-90deg)') : (C.strokeDashoffset = ''.concat((l = (100 - y) / 100, l * l * F).toFixed(3), 'px'), D.transform = 'rotate('.concat((270 * j(y / 70)).toFixed(3), 'deg)'));
            }
            return e.createElement('div', (0, c.default)({
                className: (0, f.default)(m.root, n, 'inherit' !== p && m['color'.concat((0, h.default)(p))], {
                    indeterminate: m.indeterminate,
                    static: m.static
                } [A]),
                style: (0, c.default)({
                    width: t,
                    height: t
                }, D, u),
                ref: b,
                role: 'progressbar'
            }, E, B), e.createElement('svg', {
                className: m.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(i, ' ').concat(i)
            }, e.createElement('circle', {
                className: (0, f.default)(m.circle, r && m.circleDisableShrink, {
                    indeterminate: m.circleIndeterminate,
                    static: m.circleStatic
                } [A]),
                style: C,
                cx: i,
                cy: i,
                r: (i - w) / 2,
                fill: 'none',
                strokeWidth: w
            })));
        }),
        l = (0, g.default)(function(a) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: a.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: a.palette.primary.main
                },
                colorSecondary: {
                    color: a.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: a.transitions.create('stroke-dashoffset')
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
}), b.register('uhGu5', function(g, h) {
    a(g.exports, 'useTest', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = b('PjB0f');
    const e = a => {
        const [f, , g] = (0, d.useBoolean)(!0), [h, i] = c.useState(!1), j = () => {
            i(!0), g();
        }, k = () => {
            i(!1), g();
        };
        return c.useEffect(() => {
            a(j, k);
        }, []), {
            loading: f,
            passed: h
        };
    };
}), b.register('kYNzL', function(f, k) {
    a(f.exports, 'default', function() {
        return m;
    });
    var c = b('8kSQZ'),
        d = b('lJnts');
    b('uPP4W');
    var e = b('iYEuk12'),
        f = b('PjB0f'),
        g = b('2WDH6');
    const h = a => (0, c.jsx)('div', {
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
        i = {
            name: 'Firewall check on *.gimkitconnect.com',
            whatItMeans: (0, c.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting or participating in games.'
            }),
            howToFix: (0, c.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, c.jsx)(h, {
                        children: 'https://*.gimkitconnect.com'
                    }),
                    '. Please note this is a wildcard. Gimkit needs access to every subdomain on',
                    ' ',
                    (0, c.jsx)(h, {
                        children: 'gimkitconnect.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, f.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'original'
                    },
                    success: f => {
                        f && f.url ? (0, f.request)({
                            url: f.url + '/hello',
                            success: () => a(),
                            error: a => b()
                        }) : b();
                    },
                    error: a => b()
                });
            }
        },
        j = {
            name: 'WebSocket connection to *.gimkitconnect.com',
            description: 'This test takes 60 seconds to complete.',
            whatItMeans: (0, c.jsx)('span', {
                children: 'You won\'t be able to connect to our game servers. This will prevent you from hosting & participating in all game modes.'
            }),
            howToFix: (0, c.jsxs)('span', {
                children: [
                    'Unblock both of the following domains:',
                    (0, c.jsxs)('ul', {
                        children: [
                            (0, c.jsx)('li', {
                                children: (0, c.jsx)(h, {
                                    children: 'https://*.gimkitconnect.com'
                                })
                            }),
                            (0, c.jsx)('li', {
                                children: (0, c.jsx)(h, {
                                    children: 'wss://*.gimkitconnect.com'
                                })
                            })
                        ]
                    }),
                    'Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on',
                    ' ',
                    (0, c.jsx)(h, {
                        children: 'gimkitconnect.com'
                    }),
                    ' to work properly.',
                    (0, c.jsx)('br', {}),
                    ' ',
                    (0, c.jsx)('br', {}),
                    'If the firewall check test below passed, this is most likely an issue with your school\'s proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow',
                    ' ',
                    (0, c.jsx)(h, {
                        children: '*.gimkitconnect.com'
                    }),
                    ' in your proxy\u2019s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.',
                    ' ',
                    (0, c.jsx)(h, {
                        children: '*.gimkitconnect.com'
                    }),
                    'may need to bypass network monitoring.'
                ]
            }),
            test: (a, b) => {
                (0, f.request)({
                    url: '/api/matchmaker/find-server-to-host-game',
                    method: 'post',
                    data: {
                        source: 'map'
                    },
                    success: f => {
                        if (f && f.url) {
                            new(0, d.Client)(f.url.replace('http', 'ws')).create('ConnectionTest').then(f => {
                                let k = !1;
                                setTimeout(() => {
                                    k || (k = !0, a());
                                }, 55000), f.onLeave(() => {
                                    k || (k = !0, b());
                                }), f.onError(() => {
                                    k || (k = !0, b());
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
        k = {
            name: 'Firewall check on media.gimkit.com',
            whatItMeans: (0, c.jsx)('span', {
                children: 'You won\'t be able to view uploaded images & audio.'
            }),
            howToFix: (0, c.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, c.jsx)(h, {
                        children: 'media.gimkit.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, f.request)({
                    url: (0, g.getCloudinaryUrl)('https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png'),
                    success: a,
                    error: b
                });
            }
        },
        l = {
            name: 'Firewall check on unsplash.com',
            whatItMeans: (0, c.jsx)('span', {
                children: 'You won\'t be able to view cover photos for kits.'
            }),
            howToFix: (0, c.jsxs)('span', {
                children: [
                    'Unblock ',
                    (0, c.jsx)(h, {
                        children: 'unsplash.com'
                    }),
                    '.'
                ]
            }),
            test: (a, b) => {
                (0, f.request)({
                    url: 'https://images.unsplash.com/photo-1574539299747-c0dcef95d2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                    success: a,
                    error: b
                });
            }
        };
    var m = [
        j,
        i,
        k,
        {
            name: 'WebGL support',
            whatItMeans: (0, c.jsx)('span', {
                children: 'You will not be able to play/host 2D game modes'
            }),
            howToFix: (0, c.jsxs)('span', {
                children: [
                    '2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.',
                    (0, c.jsx)('br', {}),
                    ' ',
                    (0, c.jsx)('br', {}),
                    'This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:',
                    ' ',
                    (0, c.jsx)(e.default, {
                        to: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn',
                        external: !0,
                        children: 'https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn'
                    })
                ]
            }),
            test: (a, b) => {
                (() => {
                    try {
                        const n = document.createElement('canvas');
                        return !(!window.WebGLRenderingContext || !n.getContext('webgl') && !n.getContext('experimental-webgl'));
                    } catch (a) {
                        return !1;
                    }
                })() ? a(): b();
            }
        },
        l
    ];
}), b.register('iYEuk12', function(f, c) {
    a(f.exports, 'default', function() {
        return e;
    });
    var c = b('8kSQZ'),
        d = b('KzqIz');
    b('uPP4W');
    var e = a => a.external || !a.to ? (0, c.jsx)('a', {
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
    }) : (0, c.jsx)(d.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), b.register('2WDH6', function(b, f) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return c;
    });
    const c = a => {
            const d = d(a);
            return d ? a.includes('/video/upload') ? `https://${ e }/video/upload/${ d }` : `https://${ e }/image/upload/f_auto,fl_lossy,q_auto/${ d }` : a;
        },
        d = a => {
            if (!h.some(b => a.includes(b)))
                return null;
            if (a.includes(f) && !a.includes(`/${ g }/`))
                return null;
            const e = a.split('/');
            if (!e || !e.length || e.length < 2)
                return null;
            const f = e[e.length - 2],
                g = e[e.length - 1];
            return f && g && f.startsWith('v') ? `${ f }/${ g }` : null;
        },
        e = 'media.gimkit.com',
        f = 'res.cloudinary.com',
        g = 'gimkit-production',
        h = [
            e,
            f
        ];
}), b.register('FfkIK1', function(s, o) {
    a(s.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('lmfrI');
    let f;
    var g = a => (0, c.jsx)(h, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const h = d.default.div(f || (f = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), e.default.White);
});