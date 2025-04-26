function a(a, b, u, v) {
    Object.defineProperty(a, b, {
        get: u,
        set: v,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('SAb81', function(u, v) {
    var c;
    c = u.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(u.exports, 'default', function() {
        return r;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('0R8EW'),
        g = b('PjB0f'),
        h = b('h99Nu'),
        i = b('YimJ0'),
        j = b('lmfrI'),
        k = b('fgVTE0'),
        l = b('ExtIT'),
        m = b('cR5QE'),
        n = b('jf6jE'),
        o = b('gSUVO'),
        p = b('5F55/');
    let q;
    var r = () => {
        const {
            id: s
        } = (0, f.useParams)(), [t, u] = e.useState(''), [v, w, x] = (0, g.useBoolean)(!1), [y, z] = e.useState('');
        e.useEffect(() => {
            w(), z(''), (0, g.request)({
                url: '/api/matchmaker/intent/map/play/publish-link/create',
                data: {
                    id: s
                },
                success: s => {
                    u(s);
                },
                error: s => {
                    var A;
                    (null == s || null === (A = s.message) || void 0 === A ? void 0 : A.text) ? z(s.message.text): z('There was an error. Please try again.');
                },
                both: x
            });
        }, [s]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.Title, {
                    title: 'Gimkit Creative Map'
                }),
                (() => {
                    if (t)
                        return (0, d.jsx)(p.default, {
                            createDetails: {
                                intentId: t
                            }
                        });
                    return (0, d.jsx)(s, {
                        children: v ? (0, d.jsx)(k.default, {
                            style: {
                                color: j.default.White
                            },
                            size: 42
                        }) : y ? (0, d.jsx)(m.default, {
                            open: !0,
                            closable: !1,
                            footer: null,
                            width: 700,
                            centered: !0,
                            bodyStyle: {
                                padding: 40
                            },
                            children: (0, d.jsxs)('div', {
                                className: 'maxAll flex-column flex-center',
                                style: {
                                    color: j.default.Black,
                                    textAlign: 'center',
                                    font: o.Fonts.SFPro
                                },
                                children: [
                                    (0, d.jsx)(n.default, {
                                        style: {
                                            color: 'darkorange',
                                            fontSize: 51
                                        }
                                    }),
                                    ' ',
                                    (0, d.jsx)(l.default, {}),
                                    (0, d.jsx)('div', {
                                        style: {
                                            textAlign: 'center',
                                            fontSize: 23,
                                            fontWeight: 'bold'
                                        },
                                        children: y
                                    })
                                ]
                            })
                        }) : null
                    });
                })()
            ]
        });
    };
    const s = (0, h.default)(i.Centered)(q || (q = (a => a)`
  flex: 1;
  padding: 20px;
  background: ${ 0 };
`), j.default.BackgroundPurple);
}), b.register('jf6jE', function(n, c) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('TM8xK'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'WarningOutlined';
    var h = d.forwardRef(g);
}), b.register('TM8xK', function(b, n) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('PDLD/2', function(b, n) {
    let c;
    var d;
    let e;
    var f;
    let g;
    var h;
    let i;
    let j;
    var k;
    a(b.exports, 'QuestionType', function() {
        return c;
    }), a(b.exports, 'Privacy', function() {
        return e;
    }), a(b.exports, 'GameStatus', function() {
        return g;
    }), a(b.exports, 'GameType', function() {
        return i;
    }), a(b.exports, 'GameGoal', function() {
        return j;
    }), a(b.exports, 'themes', function() {
        return p;
    }), a(b.exports, 'ExperienceSource', function() {
        return q;
    }), (d = c || (c = {})).multipleChoice = 'mc', d.textInput = 'text', (f = e || (e = {})).public = 'public', f.private = 'private', (h = g || (g = {})).setup = 'setup', h.join = 'join', h.teams = 'teams', h.gameplay = 'gameplay', h.results = 'results', (i || (i = {})).live = 'live', (k = j || (j = {})).time = 'time', k.race = 'race', k.allIn = 'allIn';
    const l = '#ffffff',
        m = '#000000';
    let n;
    var o;
    (o = n || (n = {})).easy = 'easy', o.medium = 'medium', o.hard = 'hard', o.veryHard = 'veryHard', o.veryVeryHard = 'veryVeryHard';
    const p = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: l
            },
            palette: [{
                    background: '#771322',
                    text: l
                },
                {
                    background: '#A85C15',
                    text: l
                },
                {
                    background: '#0D6B33',
                    text: l
                },
                {
                    background: '#076296',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#9E682A',
                    text: l
                },
                {
                    background: '#B54730',
                    text: l
                },
                {
                    background: '#8A9748',
                    text: l
                },
                {
                    background: '#F1B930',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#263238',
                    text: l
                },
                {
                    background: '#37474f',
                    text: l
                },
                {
                    background: '#455a64',
                    text: l
                },
                {
                    background: '#546e7a',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#220044',
                    text: l
                },
                {
                    background: '#330066',
                    text: l
                },
                {
                    background: '#3E007C',
                    text: l
                },
                {
                    background: '#4F1787',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#283593',
                    text: l
                },
                {
                    background: '#076296',
                    text: l
                },
                {
                    background: '#0277bd',
                    text: l
                },
                {
                    background: '#1565c0',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#385645',
                    text: l
                },
                {
                    background: '#425C49',
                    text: l
                },
                {
                    background: '#415641',
                    text: l
                },
                {
                    background: '#4C6349',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#F46F5A',
                    text: l
                },
                {
                    background: '#ED712D',
                    text: l
                },
                {
                    background: '#7A596A',
                    text: l
                },
                {
                    background: '#E8AB3C',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#001D3B',
                    text: l
                },
                {
                    background: '#FFAE52',
                    text: l
                },
                {
                    background: '#FE5963',
                    text: l
                },
                {
                    background: '#A71C94',
                    text: l
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
                background: m,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: m
                },
                {
                    background: '#FFC721',
                    text: m
                },
                {
                    background: '#FFD147',
                    text: m
                },
                {
                    background: '#FFCD38',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let q;
    var r;
    (r = q || (q = {})).original = 'original', r.map = 'map';
});