function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('AxLje', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('70AkF'),
        h = a('PMl60'),
        i = a('Axq+p'),
        j = a('0HHAH'),
        k = a('sHRDd'),
        l = a('FpbFp'),
        m = a('fmVdR'),
        n = a('YRlpt'),
        o = a('mbGc60'),
        p = a('b5kvC'),
        q = a('AQ78Z');
    let r;
    var _s = () => {
        const {
            id: _t
        } = (0, g.useParams)(), [u, v] = f.useState(''), [w, x, y] = (0, h.useBoolean)(!1), [z, A] = f.useState('');
        f.useEffect(() => {
            x(), A(''), (0, h.request)({
                url: '/api/matchmaker/intent/map/play/publish-link/create',
                data: {
                    id: _t
                },
                success: _t => {
                    v(_t);
                },
                error: _t => {
                    var B;
                    (null == _t || null === (B = _t.message) || void 0 === B ? void 0 : B.text) ? A(_t.message.text): A('There was an error. Please try again.');
                },
                both: y
            });
        }, [_t]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(h.Title, {
                    title: 'Gimkit Creative Map'
                }),
                (() => {
                    if (u)
                        return (0, e.jsx)(q.default, {
                            createDetails: {
                                intentId: u
                            }
                        });
                    return (0, e.jsx)(_t, {
                        children: w ? (0, e.jsx)(l.default, {
                            style: {
                                color: k.default.White
                            },
                            size: 42
                        }) : z ? (0, e.jsx)(n.default, {
                            open: !0,
                            closable: !1,
                            footer: null,
                            width: 700,
                            centered: !0,
                            bodyStyle: {
                                padding: 40
                            },
                            children: (0, e.jsxs)('div', {
                                className: 'maxAll flex-column flex-center',
                                style: {
                                    color: k.default.Black,
                                    textAlign: 'center',
                                    font: p.Fonts.SFPro
                                },
                                children: [
                                    (0, e.jsx)(o.default, {
                                        style: {
                                            color: 'darkorange',
                                            fontSize: 51
                                        }
                                    }),
                                    ' ',
                                    (0, e.jsx)(m.default, {}),
                                    (0, e.jsx)('div', {
                                        style: {
                                            textAlign: 'center',
                                            fontSize: 23,
                                            fontWeight: 'bold'
                                        },
                                        children: z
                                    })
                                ]
                            })
                        }) : null
                    });
                })()
            ]
        });
    };
    const _t = (0, i.default)(j.Centered)(r || (r = (_i => _i)`
  flex: 1;
  padding: 20px;
  background: ${ 0 };
`), k.default.BackgroundPurple);
}), a.register('mbGc60', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('UkYu/'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'WarningOutlined';
    var _i = e.forwardRef(h);
}), a.register('UkYu/', function(b, c) {
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
                    d: 'M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z'
                }
            }]
        },
        name: 'warning',
        theme: 'outlined'
    };
}), a.register('6XgQB1', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    e(b.exports, 'QuestionType', function() {
        return d;
    }), e(b.exports, 'Privacy', function() {
        return f;
    }), e(b.exports, 'GameStatus', function() {
        return h;
    }), e(b.exports, 'GameType', function() {
        return j;
    }), e(b.exports, 'GameGoal', function() {
        return k;
    }), e(b.exports, 'themes', function() {
        return _q;
    }), e(b.exports, 'ExperienceSource', function() {
        return _r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const _q = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: m
            },
            palette: [{
                    background: '#771322',
                    text: m
                },
                {
                    background: '#A85C15',
                    text: m
                },
                {
                    background: '#0D6B33',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#9E682A',
                    text: m
                },
                {
                    background: '#B54730',
                    text: m
                },
                {
                    background: '#8A9748',
                    text: m
                },
                {
                    background: '#F1B930',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#263238',
                    text: m
                },
                {
                    background: '#37474f',
                    text: m
                },
                {
                    background: '#455a64',
                    text: m
                },
                {
                    background: '#546e7a',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#220044',
                    text: m
                },
                {
                    background: '#330066',
                    text: m
                },
                {
                    background: '#3E007C',
                    text: m
                },
                {
                    background: '#4F1787',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#283593',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                },
                {
                    background: '#0277bd',
                    text: m
                },
                {
                    background: '#1565c0',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#385645',
                    text: m
                },
                {
                    background: '#425C49',
                    text: m
                },
                {
                    background: '#415641',
                    text: m
                },
                {
                    background: '#4C6349',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#F46F5A',
                    text: m
                },
                {
                    background: '#ED712D',
                    text: m
                },
                {
                    background: '#7A596A',
                    text: m
                },
                {
                    background: '#E8AB3C',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#001D3B',
                    text: m
                },
                {
                    background: '#FFAE52',
                    text: m
                },
                {
                    background: '#FE5963',
                    text: m
                },
                {
                    background: '#A71C94',
                    text: m
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
                background: n,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: n
                },
                {
                    background: '#FFC721',
                    text: n
                },
                {
                    background: '#FFD147',
                    text: n
                },
                {
                    background: '#FFCD38',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _r;
    var s;
    (s = _r || (_r = {})).original = 'original', s.map = 'map';
});