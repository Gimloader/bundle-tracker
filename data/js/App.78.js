function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('TuxlQ', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('zcfNM'),
        i = b('quE27'),
        j = b('u4s09'),
        k = b('MgONH'),
        l = b('8KqQ+'),
        m = b('JNGrh0'),
        n = b('VNuyu'),
        o = b('AE7vR'),
        p = b('LyDan'),
        q = b('Eh2Wh'),
        r = b('/bxmQ');
    let s;
    var _t = () => {
        const {
            id: u
        } = (0, h.useParams)(), [v, w] = g.useState(''), [x, y, z] = (0, i.useBoolean)(!1), [A, B] = g.useState('');
        g.useEffect(() => {
            y(), B(''), (0, i.request)({
                url: '/api/matchmaker/intent/map/play/publish-link/create',
                data: {
                    id: u
                },
                success: u => {
                    w(u);
                },
                error: u => {
                    var C;
                    (null == u || null === (C = u.message) || void 0 === C ? void 0 : C.text) ? B(u.message.text): B('There was an error. Please try again.');
                },
                both: z
            });
        }, [u]);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.Title, {
                    title: 'Gimkit Creative Map'
                }),
                (() => {
                    if (v)
                        return (0, f.jsx)(r.default, {
                            createDetails: {
                                intentId: v
                            }
                        });
                    return (0, f.jsx)(_u, {
                        children: x ? (0, f.jsx)(m.default, {
                            style: {
                                color: l.default.White
                            },
                            size: 42
                        }) : A ? (0, f.jsx)(o.default, {
                            open: !0,
                            closable: !1,
                            footer: null,
                            width: 700,
                            centered: !0,
                            bodyStyle: {
                                padding: 40
                            },
                            children: (0, f.jsxs)('div', {
                                className: 'maxAll flex-column flex-center',
                                style: {
                                    color: l.default.Black,
                                    textAlign: 'center',
                                    font: q.Fonts.SFPro
                                },
                                children: [
                                    (0, f.jsx)(p.default, {
                                        style: {
                                            color: 'darkorange',
                                            fontSize: 51
                                        }
                                    }),
                                    ' ',
                                    (0, f.jsx)(n.default, {}),
                                    (0, f.jsx)('div', {
                                        style: {
                                            textAlign: 'center',
                                            fontSize: 23,
                                            fontWeight: 'bold'
                                        },
                                        children: A
                                    })
                                ]
                            })
                        }) : null
                    });
                })()
            ]
        });
    };
    const _u = (0, j.default)(k.Centered)(s || (s = (a => a)`
  flex: 1;
  padding: 20px;
  background: ${ 0 };
`), l.default.BackgroundPurple);
}), b.register('LyDan', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('IBZ0u'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'WarningOutlined';
    var _j = f.forwardRef(i);
}), b.register('IBZ0u', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z'
                }
            }]
        },
        name: 'warning',
        theme: 'outlined'
    };
}), b.register('YSFE52', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    let l;
    var m;
    a(c.exports, 'QuestionType', function() {
        return e;
    }), a(c.exports, 'Privacy', function() {
        return g;
    }), a(c.exports, 'GameStatus', function() {
        return i;
    }), a(c.exports, 'GameType', function() {
        return k;
    }), a(c.exports, 'GameGoal', function() {
        return l;
    }), a(c.exports, 'themes', function() {
        return _r;
    }), a(c.exports, 'ExperienceSource', function() {
        return _s;
    }), (f = e || (e = {})).multipleChoice = 'mc', f.textInput = 'text', (h = g || (g = {})).public = 'public', h.private = 'private', (j = i || (i = {})).setup = 'setup', j.join = 'join', j.teams = 'teams', j.gameplay = 'gameplay', j.results = 'results', (k || (k = {})).live = 'live', (m = l || (l = {})).time = 'time', m.race = 'race', m.allIn = 'allIn';
    const n = '#ffffff',
        o = '#000000';
    let p;
    var q;
    (q = p || (p = {})).easy = 'easy', q.medium = 'medium', q.hard = 'hard', q.veryHard = 'veryHard', q.veryVeryHard = 'veryVeryHard';
    const _r = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: n
            },
            palette: [{
                    background: '#771322',
                    text: n
                },
                {
                    background: '#A85C15',
                    text: n
                },
                {
                    background: '#0D6B33',
                    text: n
                },
                {
                    background: '#076296',
                    text: n
                }
            ],
            owned: !0,
            isActive: !0
        },
        {
            cost: 5,
            name: 'Thanksgiving',
            description: 'The perfect theme to show your thanks',
            question: {
                background: '#6C2F00',
                text: n
            },
            palette: [{
                    background: '#9E682A',
                    text: n
                },
                {
                    background: '#B54730',
                    text: n
                },
                {
                    background: '#8A9748',
                    text: n
                },
                {
                    background: '#F1B930',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 10,
            name: 'Night',
            description: 'A little easier on the eyes',
            question: {
                background: '#000a12',
                text: n
            },
            palette: [{
                    background: '#263238',
                    text: n
                },
                {
                    background: '#37474f',
                    text: n
                },
                {
                    background: '#455a64',
                    text: n
                },
                {
                    background: '#546e7a',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500000,
            name: 'Thanos',
            description: 'Perfectly balanced, as all things should be',
            question: {
                background: '#0D0019',
                text: n
            },
            palette: [{
                    background: '#220044',
                    text: n
                },
                {
                    background: '#330066',
                    text: n
                },
                {
                    background: '#3E007C',
                    text: n
                },
                {
                    background: '#4F1787',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 2000,
            name: 'Ocean',
            description: 'Under the sea...',
            question: {
                background: '#000063',
                text: n
            },
            palette: [{
                    background: '#283593',
                    text: n
                },
                {
                    background: '#076296',
                    text: n
                },
                {
                    background: '#0277bd',
                    text: n
                },
                {
                    background: '#1565c0',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000,
            name: 'Forest',
            description: 'A walk through the woods',
            question: {
                background: '#4c3d33',
                text: n
            },
            palette: [{
                    background: '#385645',
                    text: n
                },
                {
                    background: '#425C49',
                    text: n
                },
                {
                    background: '#415641',
                    text: n
                },
                {
                    background: '#4C6349',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 1250,
            name: 'Sunset',
            description: 'Take a breather',
            question: {
                background: '#7F7496',
                text: n
            },
            palette: [{
                    background: '#F46F5A',
                    text: n
                },
                {
                    background: '#ED712D',
                    text: n
                },
                {
                    background: '#7A596A',
                    text: n
                },
                {
                    background: '#E8AB3C',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 750,
            name: 'Pastel',
            description: 'Lighten the mood',
            question: {
                background: '#FFbfd1',
                text: '#434343'
            },
            palette: [{
                    background: '#FFA69E',
                    text: '#5b5b5b'
                },
                {
                    background: '#FCF6BF',
                    text: '#5b5b5b'
                },
                {
                    background: '#D0F4DE',
                    text: '#5b5b5b'
                },
                {
                    background: '#93E1D8',
                    text: '#5b5b5b'
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500,
            name: 'Retro',
            description: 'Old school...',
            question: {
                background: '#9C0022',
                text: n
            },
            palette: [{
                    background: '#001D3B',
                    text: n
                },
                {
                    background: '#FFAE52',
                    text: n
                },
                {
                    background: '#FE5963',
                    text: n
                },
                {
                    background: '#A71C94',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000000,
            name: 'Pure Gold',
            description: 'Now you\'re just showing off',
            question: {
                background: o,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: o
                },
                {
                    background: '#FFC721',
                    text: o
                },
                {
                    background: '#FFD147',
                    text: o
                },
                {
                    background: '#FFCD38',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _s;
    var t;
    (t = _s || (_s = {})).original = 'original', t.map = 'map';
});