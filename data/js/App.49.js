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
a.register('S+uwC', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _y(b.exports, 'default', function() {
        return _p;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('ZJW2d'),
        g = a('grdn5'),
        h = a('hHkFq'),
        i = a('70AkF'),
        j = a('2x11J'),
        k = a('0u6bl'),
        l = a('8WsDs'),
        m = a('6AQRK'),
        n = (i = a('70AkF'), a('fu9ST')),
        o = a('GqzrW');
    var _p = () => ((0, o.useWillUnmount)(() => {
        k.default.editor.reset(), k.default.kitDetails.reset(), k.default.kitCollab.reset();
    }), (0, e.jsxs)(f.default, {
        children: [
            (0, e.jsx)(g.default, {
                children: (0, e.jsxs)('title', {
                    children: [
                        h.COMPANY_NAME,
                        ' | Kit Creator'
                    ]
                })
            }),
            (0, e.jsx)(n.default.Provider, {
                value: k.default,
                children: (0, e.jsx)(j.Provider, {
                    ...k.default,
                    children: (0, e.jsxs)(i.Routes, {
                        children: [
                            (0, e.jsx)(i.Route, {
                                path: ':kitId/*',
                                element: (0, e.jsx)(l.default, {})
                            }),
                            (0, e.jsx)(i.Route, {
                                path: '/',
                                element: (0, e.jsx)(m.default, {})
                            })
                        ]
                    })
                })
            })
        ]
    }));
}), a.register('ZJW2d', function(b, c) {
    _y(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Axq+p'),
        e = a('b5kvC');
    let f;
    var _g = d.default.div(f || (f = (_y => _y)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 } !important;
`), e.Fonts.SFPro);
}), a.register('0u6bl', function(b, c) {
    _y(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Te5OB'),
        e = a('2U+ud'),
        f = a('I2spJ');
    var _g = {
        kitDetails: new(0, d.default)(),
        editor: new(0, e.default)(),
        kitCollab: new(0, f.default)()
    };
}), a.register('Te5OB', function(b, c) {
    _y(b.exports, 'default', function() {
        return _i;
    });
    var d = a('csYze'),
        e = a('YuT/D'),
        f = a('6XgQB1');
    const g = f.Privacy.public;
    class h {
        constructor() {
            this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = g, this.reset = () => {
                this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = g;
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], h.prototype, 'id', void 0), (0, d.__decorate)([e.observable], h.prototype, 'title', void 0), (0, d.__decorate)([e.observable], h.prototype, 'image', void 0), (0, d.__decorate)([e.observable], h.prototype, 'language', void 0), (0, d.__decorate)([e.observable], h.prototype, 'subject', void 0), (0, d.__decorate)([e.observable], h.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], h.prototype, 'privacy', void 0), (0, d.__decorate)([e.action], h.prototype, 'reset', void 0);
    var _i = h;
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
    _y(b.exports, 'QuestionType', function() {
        return d;
    }), _y(b.exports, 'Privacy', function() {
        return f;
    }), _y(b.exports, 'GameStatus', function() {
        return h;
    }), _y(b.exports, 'GameType', function() {
        return j;
    }), _y(b.exports, 'GameGoal', function() {
        return k;
    }), _y(b.exports, 'themes', function() {
        return _q;
    }), _y(b.exports, 'ExperienceSource', function() {
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
}), a.register('2U+ud', function(b, c) {
    _y(b.exports, 'defaultError', function() {
        return _f;
    }), _y(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    a('+M5wm');
    const _f = () => ({
        message: ''
    });
    class g {
        constructor() {
            this.questions = e.observable.array(), this.questionsChecked = e.observable.array(), this.currentlyEditingQuestionId = '', this.editSessionCounted = !1, this.error = _f(), this.reset = () => {
                this.questions.replace([]), this.questionsChecked.replace([]), this.editSessionCounted = !1, this.error = _f();
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'questions', void 0), (0, d.__decorate)([e.observable], g.prototype, 'questionsChecked', void 0), (0, d.__decorate)([e.observable], g.prototype, 'currentlyEditingQuestionId', void 0), (0, d.__decorate)([e.observable], g.prototype, 'editSessionCounted', void 0), (0, d.__decorate)([e.observable], g.prototype, 'error', void 0), (0, d.__decorate)([e.action], g.prototype, 'reset', void 0);
    var _h = g;
}), a.register('+M5wm', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    var m;
    let n;
    let o;
    var p;
    _y(b.exports, 'Privacy', function() {
        return d;
    }), _y(b.exports, 'QuestionType', function() {
        return h;
    }), _y(b.exports, 'TextInputAnswerType', function() {
        return j;
    }), _y(b.exports, 'HubItemType', function() {
        return n;
    }), _y(b.exports, 'HubItemStatus', function() {
        return o;
    }), (e = d || (d = {})).public = 'public', e.private = 'private', (g = f || (f = {})).basic = 'basic', g.go = 'go', g.pro = 'pro', (i = h || (h = {})).multipleChoice = 'mc', i.textInput = 'text', (k = j || (j = {}))[k.exact = 1] = 'exact', k[k.contains = 2] = 'contains', (m = l || (l = {})).reachedCashGoal = 'reached-cash-goal', m.reachedMaxTime = 'reached-max-time', (n || (n = {})).mapAssignment = 'mapAssignment', (p = o || (o = {})).completed = 'completed', p.inProgress = 'inProgress', p.notStarted = 'notStarted';
}), a.register('I2spJ', function(b, c) {
    _y(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions = e.observable.array(), this.reset = () => {
                this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions.replace([]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'panelOpen', void 0), (0, d.__decorate)([e.observable], f.prototype, 'enabled', void 0), (0, d.__decorate)([e.observable], f.prototype, 'waitingQuestions', void 0), (0, d.__decorate)([e.observable], f.prototype, 'sessionId', void 0), (0, d.__decorate)([e.observable], f.prototype, 'isPublic', void 0), (0, d.__decorate)([e.observable], f.prototype, 'hasFetchedFirstBatchOfQuestions', void 0), (0, d.__decorate)([e.observable], f.prototype, 'questions', void 0), (0, d.__decorate)([e.action], f.prototype, 'reset', void 0);
    var _g = f;
}), a.register('8WsDs', function(b, c) {
    _y(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('P0plI'),
        h = a('C10Z1'),
        i = a('Pc6gF'),
        j = a('9Vd+P'),
        k = a('2Wb9Y'),
        l = a('Wewa4'),
        m = a('VzGvu'),
        n = a('vWWL1'),
        o = a('Gc7ot'),
        p = a('vfDGn'),
        q = a('fu9ST'),
        r = a('wYGc3'),
        s = a('7up2I');
    let t, u, v = _y => _y;
    const w = f.default.div(t || (t = v`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`));
    var _x = (0, s.observer)(() => {
        const _y = (0, r.useLocation)(),
            {
                kitDetails: z,
                editor: A
            } = e.useContext(q.default);
        return z.id ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(w, {
                    children: [
                        (0, d.jsx)(g.default, {}),
                        (0, d.jsx)(h.default, {})
                    ]
                }),
                (0, d.jsx)(i.default, {}),
                (0, d.jsx)(j.default, {}),
                (0, d.jsx)(k.default, {}),
                (0, d.jsx)(l.default, {}),
                (0, d.jsx)(n.default, {}),
                (0, d.jsx)(o.default, {}),
                (0, d.jsx)(p.default, {}),
                _y.pathname.endsWith('editor') && 0 === A.questions.length && (0, d.jsx)(_y, {})
            ]
        }) : (0, d.jsx)(m.default, {});
    });
    const _y = f.default.div(u || (u = v`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: 9;
`));
}), a.register('P0plI', function(b, c) {
    _D(b.exports, 'HEADER_HEIGHT', function() {
        return _o;
    }), _D(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('zqb3a'),
        i = a('9u9bt'),
        j = a('VzCQl'),
        k = a('eny5E');
    let l, m, n = _D => _D;
    const _o = 90,
        p = f.default.div.attrs({
            className: 'flex flex-column'
        })(l || (l = n`
  border-right: 1px solid ${ 0 };
  height: 100%;
  width: ${ 0 }px;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
`), g.default.BorderGray, 323),
        q = f.default.div.attrs({
            className: 'maxWidth scroll-y'
        })(m || (m = n`
  flex: 1;
`));
    class r extends e.Component {
        render() {
            return (0, d.jsxs)(p, {
                children: [
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsxs)(q, {
                        children: [
                            (0, d.jsx)(j.default, {}),
                            (0, d.jsx)(i.default, {})
                        ]
                    }),
                    (0, d.jsx)(k.default, {})
                ]
            });
        }
    }
    var _s = r;
}), a.register('zqb3a', function(b, c) {
    _D(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('b5kvC'),
        j = a('2x11J'),
        k = a('DKaq/'),
        l = a('P0plI'),
        m = a('sHRDd'),
        n = a('ijg0s'),
        o = a('qmqrd'),
        p = a('Vvaen'),
        q = a('9R7cy'),
        r = a('6XgQB1'),
        s = a('MT/Gt');
    let t, u, v, w, x = _D => _D;
    const y = h.default.div(t || (t = x`
  height: ${ 0 }px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  color: ${ 0 };
  border-bottom: 1px solid ${ 0 };
  overflow: hidden;
  div {
    overflow: hidden;
  }
`), () => l.HEADER_HEIGHT, m.default.Black, m.default.BorderGray),
        z = h.default.div(u || (u = x`
  display: flex;
  align-items: center;
`)),
        A = h.default.div(v || (v = x`
  font-size: 23px;
  font-weight: ${ 0 };
  margin-bottom: -6px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
`), i.FontWeights.UltraBold),
        B = h.default.div.attrs({
            className: 'flex vc'
        })(w || (w = x`
  font-size: 10px;
  line-height: 1;
  background: #cfd8dc;
  color: #546e7a;
  padding: 4px 8px;
  border-radius: 100px;
  margin-top: 6px;
  cursor: pointer;
`));
    let C = class extends g.Component {
        render() {
            const _D = this.props.kitDetails.privacy === r.Privacy.public;
            return (0, f.jsxs)(y, {
                children: [
                    (0, f.jsxs)(z, {
                        children: [
                            (0, f.jsx)(n.default, {
                                placement: 'right',
                                title: 'Change Cover Image',
                                children: (0, f.jsx)('div', {
                                    children: (0, f.jsx)(k.default, {
                                        image: this.props.kitDetails.image,
                                        size: 50,
                                        blockModalOpen: !0,
                                        onClick: this.toggleEditingImageModal
                                    })
                                })
                            }),
                            (0, f.jsxs)('div', {
                                style: {
                                    marginLeft: 10,
                                    flex: 1,
                                    overflow: 'hidden'
                                },
                                children: [
                                    (0, f.jsx)(n.default, {
                                        placement: 'right',
                                        title: 'Rename',
                                        children: (0, f.jsx)(A, {
                                            onClick: this.toggleEditingTitleModal,
                                            children: this.props.kitDetails.title.trim() || 'Untitled Kit'
                                        })
                                    }),
                                    (0, f.jsx)('div', {
                                        className: 'flex',
                                        children: (0, f.jsx)(n.default, {
                                            placement: 'right',
                                            title: 'Change Privacy',
                                            children: (0, f.jsxs)(B, {
                                                onClick: this.togglePrivacyModal,
                                                children: [
                                                    (0, f.jsx)(q.default, {
                                                        name: _D ? 'fas fa-unlock' : 'fas fa-lock',
                                                        style: {
                                                            marginRight: 3,
                                                            fontSize: 8
                                                        }
                                                    }),
                                                    (0, f.jsx)('div', {
                                                        children: _D ? 'Public' : 'Private'
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(o.default, {
                        closeModal: this.toggleEditingTitleModal,
                        visible: this.state.isEditingTitle
                    }),
                    (0, f.jsx)(p.default, {
                        closeModal: this.toggleEditingImageModal,
                        visible: this.state.isEditingImage
                    }),
                    (0, f.jsx)(s.default, {
                        closeModal: this.togglePrivacyModal,
                        visible: this.state.isEditingPrivacy
                    })
                ]
            });
        }
        constructor(..._A) {
            super(..._A), (0, d.default)(this, 'state', {
                isEditingTitle: !1,
                isEditingImage: !1,
                isEditingPrivacy: !1
            }), (0, d.default)(this, 'toggleEditingTitleModal', () => this.setState({
                isEditingTitle: !this.state.isEditingTitle
            })), (0, d.default)(this, 'toggleEditingImageModal', () => {
                this.setState({
                    isEditingImage: !this.state.isEditingImage
                });
            }), (0, d.default)(this, 'togglePrivacyModal', () => {
                this.setState({
                    isEditingPrivacy: !this.state.isEditingPrivacy
                });
            });
        }
    };
    C = (0, e.__decorate)([
        (0, j.inject)('kitDetails'),
        j.observer
    ], C);
    var _D = C;
}), a.register('DKaq/', function(b, c) {
    _A(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_A => ({
        src: _A.image
    }))(j || (j = (_A => _A)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _A => _A.size, _A => _A.size, _A => _A.customRightMargin ? _A.customRightMargin : 0, _A => _A.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _A => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._A,
                    onClick: m => {
                        m.stopPropagation(), _A.onClick && _A.onClick(), _A.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _A => {
                        _A.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_A.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _A(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _A => {
            const e = _e(_A);
            return e ? _A.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _A;
        },
        _e = _A => {
            if (!_i.some(b => _A.includes(b)))
                return null;
            if (_A.includes(_g) && !_A.includes(`/${ _h }/`))
                return null;
            const f = _A.split('/');
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
}), a.register('qmqrd', function(b, c) {
    _A(b.exports, 'default', function() {
        return _o;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ulE4q'),
        i = a('ewwAh'),
        j = a('YRlpt'),
        k = a('oMKu0'),
        l = a('2x11J'),
        m = a('Vvuof');
    let n = class extends g.Component {
        render() {
            return (0, f.jsx)(j.default, {
                open: this.props.visible,
                title: `Rename "${ this.props.kitDetails.title }"`,
                onCancel: this.props.closeModal,
                closable: !0,
                footer: (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(h.default, {
                            onClick: this.props.closeModal,
                            children: 'Cancel'
                        }),
                        (0, f.jsx)(h.default, {
                            onClick: this.onRename,
                            disabled: !this.canRename(),
                            type: 'primary',
                            children: 'Rename'
                        })
                    ]
                }),
                children: (0, f.jsx)(i.default, {
                    placeholder: 'New name...',
                    onChange: this.handleChange,
                    maxLength: k.MAX_KIT_NAME_LENGTH,
                    onPressEnter: this.onRename
                })
            });
        }
        constructor(..._A) {
            super(..._A), (0, d.default)(this, 'state', {
                newTitle: ''
            }), (0, d.default)(this, 'canRename', () => !!this.state.newTitle.trim()), (0, d.default)(this, 'onRename', () => {
                this.canRename() && ((0, m.default)(this.state.newTitle), this.props.closeModal());
            }), (0, d.default)(this, 'handleChange', _A => {
                this.setState({
                    newTitle: _A.target.value
                });
            });
        }
    };
    n = (0, e.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], n);
    var _o = n;
}), a.register('oMKu0', function(b, c) {
    _A(b.exports, 'MAX_KIT_NAME_LENGTH', function() {
        return _w;
    }), _A(b.exports, 'default', function() {
        return _A;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('8vnm5'),
        i = a('ulE4q'),
        j = a('fmVdR'),
        k = a('ewwAh'),
        l = a('inwN3'),
        m = a('8y5No'),
        n = a('aFzmN2'),
        o = a('2x11J'),
        p = a('983xi'),
        q = a('ZBY0K1'),
        r = a('y4x7Q'),
        s = a('wYGc3'),
        t = a('gs4MT'),
        u = a('b5kvC'),
        v = a('PMl60');
    const _w = 30,
        x = l.default.Option,
        y = _A => (0, f.jsx)(m.default, {
            style: {
                fontWeight: 'bold',
                fontSize: 25
            },
            children: _A
        });
    let z = class extends g.Component {
        componentDidMount() {
            const _A = localStorage.getItem(r.LocalStorageNames.editorDefaultLanguage),
                B = localStorage.getItem(r.LocalStorageNames.editorDefaultSubject) || (0, v.getUser)().areaOfExpertise,
                C = localStorage.getItem(r.LocalStorageNames.editorDefaultGradeLevel) || (0, v.getUser)().gradeLevel;
            _A && (this.props.kitDetails.language = _A), B && (this.props.kitDetails.subject = B), C && (this.props.kitDetails.gradeLevel = C);
        }
        render() {
            const {
                kitDetails: {
                    title: A,
                    language: B,
                    subject: C
                }
            } = this.props, D = !!(A && B && C);
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(s.Link, {
                        style: {
                            fontSize: 14,
                            marginBottom: -5,
                            fontFamily: u.Fonts.SFPro
                        },
                        to: t.DASHBOARD,
                        children: [
                            (0, f.jsx)('i', {
                                className: 'fas fa-arrow-alt-left',
                                style: {
                                    marginRight: 3
                                }
                            }),
                            (0, f.jsx)('span', {
                                children: ' Go Back'
                            })
                        ]
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)(m.default, {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 42
                                        },
                                        children: h.CREATE_A_KIT_HEADER
                                    }),
                                    (0, f.jsx)(m.default, {
                                        style: {
                                            fontSize: 20,
                                            marginTop: -15
                                        },
                                        children: h.CREATE_A_KIT_SUBHEADER
                                    })
                                ]
                            }),
                            (0, f.jsx)('img', {
                                src: '/client/img/editor/think.svg',
                                style: {
                                    height: 80
                                }
                            })
                        ]
                    }),
                    (0, f.jsx)(j.default, {}),
                    y('Name'),
                    (0, f.jsx)(k.default, {
                        size: 'large',
                        onChange: this.onKitTitleNameChange,
                        placeholder: 'Kit name',
                        maxLength: _w
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    y('Language'),
                    (0, f.jsx)(l.default, {
                        style: {
                            width: '100%'
                        },
                        size: 'large',
                        value: B ? (0, p.getLanguageName)(B) : void 0,
                        placeholder: 'No language selected',
                        showSearch: !0,
                        onChange: this.onLanguageSelected,
                        optionFilterProp: 'children',
                        filterOption: (A, B) => B.props.children.toLowerCase().indexOf(A.toLowerCase()) >= 0,
                        children: (0, p.getListOfLanguages)().map(A => (0, f.jsx)(x, {
                            value: A,
                            children: A
                        }, A))
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    y('Subject'),
                    (0, f.jsx)(l.default, {
                        style: {
                            width: '100%'
                        },
                        size: 'large',
                        placeholder: 'No subject selected',
                        value: C || void 0,
                        onChange: this.onSubjectSelected,
                        children: q.optionsForAreaOfExpertise.map(A => (0, f.jsx)(x, {
                            value: A,
                            children: A
                        }, A))
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsxs)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            (0, f.jsx)(n.default, {
                                link: 'https://www.notion.so/gimkit/Language-Subject-7ed3f1e88cc84ccaac1a282a0a4017db'
                            }),
                            (0, f.jsx)(i.default, {
                                disabled: !D,
                                onClick: this.props.onNext,
                                type: 'primary',
                                size: 'large',
                                children: 'Next'
                            })
                        ]
                    })
                ]
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'onKitTitleNameChange', _i => this.props.kitDetails.title = _i.target.value), (0, d.default)(this, 'onLanguageSelected', _i => {
                const A = (0, p.getLanguageKey)(_i);
                localStorage.setItem(r.LocalStorageNames.editorDefaultLanguage, A), this.props.kitDetails.language = A;
            }), (0, d.default)(this, 'onSubjectSelected', _i => {
                localStorage.setItem(r.LocalStorageNames.editorDefaultSubject, _i), this.props.kitDetails.subject = _i;
            });
        }
    };
    z = (0, e.__decorate)([
        (0, o.inject)('kitDetails'),
        o.observer
    ], z);
    var _A = z;
}), a.register('8vnm5', function(b, c) {
    _i(b.exports, 'CREATE_A_KIT_HEADER', function() {
        return _d;
    }), _i(b.exports, 'CREATE_A_KIT_SUBHEADER', function() {
        return _e;
    });
    const _d = 'New Kit',
        _e = 'Let\'s get started!';
}), a.register('aFzmN2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('13V8F2'),
        f = a('ulE4q'),
        g = a('ijg0s');
    var _h = _i => (0, d.jsx)(g.default, {
        title: 'Learn more on why we collect this data',
        children: (0, d.jsx)(f.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, d.jsx)(e.default, {}),
            href: _i.link || '',
            target: '_blank'
        })
    });
}), a.register('13V8F2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('5uH+S'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LockOutlined';
    var _i = e.forwardRef(h);
}), a.register('5uH+S', function(b, c) {
    _q(b.exports, 'default', function() {
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
                    d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'
                }
            }]
        },
        name: 'lock',
        theme: 'outlined'
    };
}), a.register('983xi', function(b, c) {
    _q(b.exports, 'getListOfLanguages', function() {
        return _e;
    }), _q(b.exports, 'getLanguageKey', function() {
        return _f;
    }), _q(b.exports, 'getLanguageName', function() {
        return _g;
    });
    const d = {
            en: 'English',
            af: 'Afrikaans',
            sq: 'Albanian',
            am: 'Amharic',
            ar: 'Arabic',
            hy: 'Armenian',
            az: 'Azerbaijani',
            eu: 'Basque',
            be: 'Belarusian',
            bn: 'Bengali',
            bs: 'Bosnian',
            bg: 'Bulgarian',
            ca: 'Catalan',
            ceb: 'Cebuano',
            ny: 'Chichewa',
            'zh-cn': 'Chinese Simplified',
            'zh-tw': 'Chinese Traditional',
            co: 'Corsican',
            hr: 'Croatian',
            cs: 'Czech',
            da: 'Danish',
            nl: 'Dutch',
            eo: 'Esperanto',
            et: 'Estonian',
            tl: 'Filipino',
            fi: 'Finnish',
            fr: 'French',
            fy: 'Frisian',
            gl: 'Galician',
            ka: 'Georgian',
            de: 'German',
            el: 'Greek',
            gu: 'Gujarati',
            ht: 'Haitian Creole',
            ha: 'Hausa',
            haw: 'Hawaiian',
            iw: 'Hebrew',
            hi: 'Hindi',
            hmn: 'Hmong',
            hu: 'Hungarian',
            is: 'Icelandic',
            ig: 'Igbo',
            id: 'Indonesian',
            ga: 'Irish',
            it: 'Italian',
            ja: 'Japanese',
            jw: 'Javanese',
            kn: 'Kannada',
            kk: 'Kazakh',
            km: 'Khmer',
            ko: 'Korean',
            ku: 'Kurdish (Kurmanji)',
            ky: 'Kyrgyz',
            lo: 'Lao',
            la: 'Latin',
            lv: 'Latvian',
            lt: 'Lithuanian',
            lb: 'Luxembourgish',
            mk: 'Macedonian',
            mg: 'Malagasy',
            ms: 'Malay',
            ml: 'Malayalam',
            mt: 'Maltese',
            mi: 'Maori',
            mr: 'Marathi',
            mn: 'Mongolian',
            my: 'Myanmar (Burmese)',
            ne: 'Nepali',
            no: 'Norwegian',
            ps: 'Pashto',
            fa: 'Persian',
            pl: 'Polish',
            pt: 'Portuguese',
            ma: 'Punjabi',
            ro: 'Romanian',
            ru: 'Russian',
            sm: 'Samoan',
            gd: 'Scots Gaelic',
            sr: 'Serbian',
            st: 'Sesotho',
            sn: 'Shona',
            sd: 'Sindhi',
            si: 'Sinhala',
            sk: 'Slovak',
            sl: 'Slovenian',
            so: 'Somali',
            es: 'Spanish',
            su: 'Sundanese',
            sw: 'Swahili',
            sv: 'Swedish',
            tg: 'Tajik',
            ta: 'Tamil',
            te: 'Telugu',
            th: 'Thai',
            tr: 'Turkish',
            uk: 'Ukrainian',
            ur: 'Urdu',
            uz: 'Uzbek',
            vi: 'Vietnamese',
            cy: 'Welsh',
            xh: 'Xhosa',
            yi: 'Yiddish',
            yo: 'Yoruba',
            zu: 'Zulu'
        },
        _e = () => Object.keys(d).map(_q => d[_q]),
        _f = _q => Object.keys(d).filter(b => d[b] === _q)[0],
        _g = _q => d[_q];
}), a.register('ZBY0K1', function(b, c) {
    _q(b.exports, 'optionsForAreaOfExpertise', function() {
        return _n;
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('d1g2b2'),
        g = a('fmVdR'),
        h = a('inwN3'),
        i = a('pYmyT1'),
        j = a('NmrDs1'),
        k = a('Hi0/F0'),
        l = a('XQD071'),
        m = a('gs4MT');
    const _n = [
            'STEM',
            'Arts',
            'Communications',
            'Computer Science',
            'Counselor',
            'Deaf Education',
            'World Languages',
            'Speech and Language',
            'English/Language Arts',
            'American Sign Language',
            'Science',
            'Special Education',
            'Gifted and Talented',
            'Technology',
            'Engineering',
            'Math',
            'History and Social Studies',
            'Health/Physical Education',
            'English Language Learner (ELL)',
            'Family & Consumer Science (FACS)',
            'Homeschool',
            'School Administrator',
            'Librarian',
            'Technology/Instructional Coach',
            'Other'
        ].sort(),
        o = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var _p = () => {
        const {
            login: _q
        } = e.useContext(j.default), [r, s] = e.useState(''), [t, u] = e.useState(''), v = !r || !t;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => s(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _n.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(f.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => u(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: o.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)(i.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: v,
                    onClick: () => {
                        v || (_q.areaOfExpertise = r, _q.gradeLevel = t, _q.informationNeeded.replace(_q.informationNeeded.filter(_q => _q !== k.informationTypes.areaOfExpertise && _q !== k.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, d.jsx)(g.default, {}),
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, d.jsx)(l.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), a.register('d1g2b2', function(b, c) {
    _t(b.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return _o;
    }), _t(b.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return _p;
    }), _t(b.exports, 'Title', function() {
        return _q;
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('NmrDs1'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('fmVdR'),
        j = a('ewwAh'),
        k = a('pYmyT1'),
        l = a('Hi0/F0'),
        m = a('XQD071'),
        n = a('dq4zH');
    const _o = 20,
        _p = 25,
        _q = _t => (0, d.jsx)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                fontWeight: g.FontWeights.Bold,
                color: h.default.Black,
                fontSize: 18
            },
            children: _t.children
        }),
        r = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _s = () => {
        const {
            login: _t
        } = e.useContext(f.default), [u, v] = e.useState(_t.firstName), [w, x] = e.useState(_t.lastName), [y, z] = e.useState(_t.password), A = () => {
            let B = !0;
            return _t.informationNeeded.includes(l.informationTypes.firstName) && (u || (B = !1)), _t.informationNeeded.includes(l.informationTypes.lastName) && (w || (B = !1)), _t.informationNeeded.includes(l.informationTypes.accountPassword) && (!y || y.length < 6) && (B = !1), B;
        }, B = () => {
            A() && (u && (_t.firstName = u), w && (_t.lastName = w), y && (_t.password = y), _t.informationNeeded.replace(_t.informationNeeded.filter(_t => _t !== l.informationTypes.firstName && _t !== l.informationTypes.lastName && _t !== l.informationTypes.accountPassword)));
        }, C = _t.accountType === n.default.student;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_q, {
                    children: 'First Name'
                }),
                (0, d.jsx)(j.default, {
                    maxLength: _o,
                    style: r,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: _t => v(_t.target.value),
                    onPressEnter: B,
                    autoFocus: !0
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsxs)(_q, {
                    children: [
                        'Last ',
                        C ? 'Initial' : 'Name'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    maxLength: C ? 1 : _p,
                    style: r,
                    size: 'large',
                    placeholder: `Last ${ C ? 'Initial' : 'Name' } here...`,
                    onChange: _t => x(_t.target.value),
                    onPressEnter: B
                }),
                _t.informationNeeded.includes(l.informationTypes.accountPassword) && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(i.default, {}),
                        (0, d.jsx)(_q, {
                            children: 'Password'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, d.jsx)(j.default.Password, {
                            style: r,
                            onChange: _t => z(_t.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: B
                        })
                    ]
                }),
                (0, d.jsx)(i.default, {}),
                (0, d.jsx)(k.default, {
                    disabled: !A(),
                    onClick: B,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !C && (0, d.jsx)(m.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), a.register('NmrDs1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('Hi0/F0', function(b, c) {
    _v(b.exports, 'informationTypes', function() {
        return _f;
    }), _v(b.exports, 'default', function() {
        return _x;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const _f = {
            email: 'EMAIL',
            password: 'PASSWORD',
            accountPassword: 'ACCOUNT_PASSWORD',
            firstName: 'FIRST_NAME',
            lastName: 'LAST_NAME',
            accountType: 'ACCOUNT_TYPE',
            country: 'COUNTRY',
            areaOfExpertise: 'AREA_OF_EXPERTISE',
            gradeLevel: 'GRADE_LEVEL',
            organization: 'ORGANIZATION',
            acceptedLatestPolicies: 'ACCEPTED_LATEST_POLICIES',
            schoolId: 'SCHOOL_ID',
            districtId: 'DISTRICT_ID'
        },
        g = {
            userExists: !1,
            email: '',
            accountType: null,
            googleToken: '',
            firstName: '',
            lastName: '',
            password: '',
            schoolId: '',
            districtId: '',
            country: '',
            areaOfExpertise: '',
            gradeLevel: '',
            organization: '',
            acceptsLatestPolicies: !1,
            authenticated: !1
        },
        {
            userExists: h,
            email: i,
            accountType: j,
            googleToken: k,
            firstName: l,
            lastName: m,
            password: n,
            schoolId: o,
            districtId: p,
            country: q,
            areaOfExpertise: r,
            gradeLevel: s,
            organization: t,
            acceptsLatestPolicies: u,
            authenticated: v
        } = g;
    class w {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([_f.email]), this.reset = () => {
                Object.keys(g).forEach(_v => this[_v] = g[_v]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
}), a.register('5ka2e1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _r;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = {
            currentStage: a('AUbBm1').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        },
        {
            currentStage: g,
            emailSignInBlocked: h,
            creatingAccount: i,
            loggingIn: j,
            updatingAccountInformation: k,
            loginError: l,
            redirectUri: m,
            classJoiningId: n,
            classJoiningName: o,
            classJoiningTeacherName: p
        } = f;
    class q {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(f).forEach(_v => this[_v] = f[_v]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    _v(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('pYmyT1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(_v => (0, d.jsx)(f.default, {
        disabled: _v.disabled,
        size: _v.size || 'middle',
        type: 'primary',
        onClick: _v.onClick,
        style: Object.assign({
            width: '100%'
        }, _v.style),
        loading: _v.loading,
        children: _v.children
    }));
}), a.register('XQD071', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('aFzmN2');
    var _f = _v => (0, d.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, d.jsx)('div', {}),
            (0, d.jsx)(e.default, {
                link: _v.link
            })
        ]
    });
}), a.register('dq4zH', function(b, c) {
    let d;
    var e;
    _v(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var _f = d;
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _v(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), a.register('Vvuof', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0u6bl'),
        e = a('PMl60');
    var _f = _v => {
        (0, e.request)({
            url: '/api/v1/editor/rename',
            method: 'post',
            data: {
                kitId: d.default.kitDetails.id,
                title: _v
            },
            success: _v => {
                _v && _v.newName && (d.default.kitDetails.title = _v.newName);
            },
            error: () => !1
        });
    };
}), a.register('Vvaen', function(b, c) {
    _v(b.exports, 'default', function() {
        return _n;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ulE4q'),
        i = a('YRlpt'),
        j = a('2x11J'),
        k = a('vEG5v'),
        l = a('ckYtz');
    let m = class extends g.Component {
        render() {
            return (0, f.jsx)(i.default, {
                open: this.props.visible,
                onCancel: this.props.closeModal,
                style: {
                    top: 20
                },
                title: 'New cover photo',
                closable: !0,
                footer: (0, f.jsx)(h.default, {
                    onClick: this.props.closeModal,
                    children: 'Cancel'
                }),
                children: (0, f.jsx)('div', {
                    style: {
                        maxHeight: '55vh'
                    },
                    className: 'scroll disable-scrollbars',
                    children: (0, f.jsx)(k.default, {
                        defaultSearchTerm: this.props.kitDetails.title,
                        onImagePicked: this.onImagePicked
                    })
                })
            });
        }
        constructor(..._v) {
            super(..._v), (0, d.default)(this, 'onImagePicked', _v => {
                (0, l.default)(_v), this.props.closeModal();
            });
        }
    };
    m = (0, e.__decorate)([
        (0, j.inject)('kitDetails'),
        j.observer
    ], m);
    var _n = m;
}), a.register('ckYtz', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0u6bl'),
        e = a('PMl60');
    var _f = _v => {
        (0, e.request)({
            url: '/api/v1/editor/changePhoto',
            method: 'post',
            data: {
                kitId: d.default.kitDetails.id,
                photo: _v
            },
            success: () => {
                d.default.kitDetails.image = _v;
            },
            error: () => !1
        });
    };
}), a.register('9R7cy', function(b, c) {
    _v(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _v => (0, d.jsx)('i', {
        className: `${ _v.name }${ _v.className ? ` ${ _v.className }` : '' }`,
        style: _v.style
    });
}), a.register('MT/Gt', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ulE4q'),
        i = a('oXQNI'),
        j = a('YRlpt'),
        k = a('yiusa0'),
        l = a('2x11J'),
        m = a('sHRDd'),
        n = a('b5kvC'),
        o = a('6XgQB1'),
        p = a('sYc9l'),
        q = a('13V8F2'),
        r = a('dV5By');
    const s = {
            color: m.default.Black,
            fontFamily: n.Fonts.SFPro,
            marginBottom: 6
        },
        t = _v => (0, f.jsx)(i.default, {
            style: {
                marginBottom: 10
            },
            children: (0, f.jsxs)('div', {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    color: m.default.Black,
                    fontFamily: n.Fonts.SFPro
                },
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            marginRight: 10,
                            fontSize: 24
                        },
                        children: _v.icon
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: n.FontWeights.UltraBold
                                },
                                children: _v.name
                            }),
                            (0, f.jsx)('div', {
                                children: _v.description
                            })
                        ]
                    })
                ]
            })
        });
    let u = class extends g.Component {
        render() {
            const _v = this.props.kitDetails.privacy;
            return (0, f.jsx)(j.default, {
                open: this.props.visible,
                title: 'Change Privacy',
                onCancel: this.props.closeModal,
                footer: (0, f.jsx)(h.default, {
                    onClick: this.props.closeModal,
                    children: 'Close'
                }),
                style: {
                    top: 20
                },
                closable: !0,
                children: (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsxs)(k.default.Group, {
                            value: _v,
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 15
                            },
                            onChange: this.onChange,
                            children: [
                                (0, f.jsx)(k.default, {
                                    value: o.Privacy.public,
                                    style: s,
                                    children: 'Public'
                                }),
                                (0, f.jsx)(k.default, {
                                    value: o.Privacy.private,
                                    style: s,
                                    children: 'Private'
                                })
                            ]
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 15
                            }
                        }),
                        (0, f.jsx)(t, {
                            name: 'Public',
                            description: 'Visible in search results and accessible via direct link.',
                            icon: (0, f.jsx)(r.default, {})
                        }),
                        (0, f.jsx)(t, {
                            name: 'Private',
                            description: 'Hidden from search results and only visible to you.',
                            icon: (0, f.jsx)(q.default, {})
                        })
                    ]
                })
            });
        }
        constructor(..._d) {
            super(..._d), (0, d.default)(this, 'state', {
                newTitle: ''
            }), (0, d.default)(this, 'onChange', _d => {
                const v = _d.target.value;
                (0, p.default)(v);
            });
        }
    };
    u = (0, e.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], u);
    var _v = u;
}), a.register('yiusa0', function(b, c) {
    _d(b.exports, 'default', function() {
        return _h;
    });
    var d = a('r1AQx0'),
        e = a('UK+Sg'),
        f = a('s5a6g');
    const g = e.default;
    g.Button = f.default, g.Group = d.default, g.__ANT_RADIO = !0;
    var _h = g;
}), a.register('r1AQx0', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    });
    var d = a('JrtKP'),
        e = a('TTc70'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('lWjQ8'),
        i = a('5HYBP'),
        j = a('hl66a0'),
        k = a('UK+Sg'),
        l = a('3kLOc');
    const m = f.forwardRef((_d, a) => {
        const {
            getPrefixCls: n,
            direction: o
        } = f.useContext(g.ConfigContext), p = f.useContext(h.default), [_q, r] = (0, e.default)(_d.defaultValue, {
            value: _d.value
        }), {
            prefixCls: s,
            className: t,
            rootClassName: u,
            options: v,
            buttonStyle: w = 'outline',
            disabled: x,
            children: y,
            size: z,
            style: A,
            id: B,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F
        } = _d, G = n('radio', s), H = `${ G }-group`, [I, J] = (0, l.default)(G);
        let K = y;
        v && v.length > 0 && (K = v.map(_d => 'string' == typeof _d || 'number' == typeof _d ? f.createElement(k.default, {
            key: _d.toString(),
            prefixCls: G,
            disabled: x,
            value: _d,
            checked: _q === _d
        }, _d) : f.createElement(k.default, {
            key: `radio-group-value-options-${ _d.value }`,
            prefixCls: G,
            disabled: _d.disabled || x,
            value: _d.value,
            checked: _q === _d.value,
            style: _d.style
        }, _d.label)));
        const L = z || p,
            M = _b(d)(H, `${ H }-${ w }`, {
                [`${ H }-${ L }`]: L,
                [`${ H }-rtl`]: 'rtl' === o
            }, t, u, J);
        return I(f.createElement('div', Object.assign({}, (0, i.default)(_d), {
            className: M,
            style: A,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F,
            id: B,
            ref: a
        }), f.createElement(j.RadioGroupContextProvider, {
            value: {
                onChange: _b => {
                    const N = _q,
                        O = _b.target.value;
                    'value' in _d || r(O);
                    const {
                        onChange: P
                    } = _d;
                    P && O !== N && P(_b);
                },
                value: _q,
                disabled: _d.disabled,
                name: _d.name,
                optionType: _d.optionType
            }
        }, K)));
    });
    var n = f.memo(m);
}), a.register('hl66a0', function(_b, c) {
    _d(_b.exports, 'RadioGroupContextProvider', function() {
        return _f;
    }), _d(_b.exports, 'default', function() {
        return _g;
    }), _d(_b.exports, 'RadioOptionTypeContext', function() {
        return _h;
    }), _d(_b.exports, 'RadioOptionTypeContextProvider', function() {
        return _i;
    });
    var d = a('LEQ5w');
    const e = d.createContext(null),
        _f = e.Provider;
    var _g = e;
    const _h = d.createContext(null),
        _i = _h.Provider;
}), a.register('UK+Sg', function(b, c) {
    _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('JrtKP'),
        e = a('RW2Mp'),
        f = a('gIJPx'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('hFUNe'),
        j = a('UWoHW'),
        k = a('hl66a0'),
        l = a('3kLOc'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const n = (_o, a) => {
        var o, p;
        const q = g.useContext(k.default),
            _r = g.useContext(k.RadioOptionTypeContext),
            {
                getPrefixCls: s,
                direction: t
            } = g.useContext(h.ConfigContext),
            u = g.useRef(),
            v = (0, f.composeRef)(a, u),
            {
                isFormItemInput: w
            } = g.useContext(j.FormItemInputContext),
            x = _s => {
                var y, z;
                null === (y = _o.onChange) || void 0 === y || y.call(_o, _s), null === (z = null == q ? void 0 : q.onChange) || void 0 === z || z.call(q, _s);
            },
            {
                prefixCls: y,
                className: z,
                rootClassName: A,
                children: B,
                style: C
            } = _o,
            D = m(_o, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            E = s('radio', y),
            F = 'button' === ((null == q ? void 0 : q.optionType) || _r) ? `${ E }-button` : E,
            [G, H] = (0, l.default)(E),
            I = Object.assign({}, D),
            J = g.useContext(i.default);
        q && (I.name = q.name, I.onChange = x, I.checked = _o.value === q.value, I.disabled = null !== (o = I.disabled) && void 0 !== o ? o : q.disabled), I.disabled = null !== (p = I.disabled) && void 0 !== p ? p : J;
        const K = _s(d)(`${ F }-wrapper`, {
            [`${ F }-wrapper-checked`]: I.checked,
            [`${ F }-wrapper-disabled`]: I.disabled,
            [`${ F }-wrapper-rtl`]: 'rtl' === t,
            [`${ F }-wrapper-in-form-item`]: w
        }, z, A, H);
        return G(g.createElement('label', {
            className: K,
            style: C,
            onMouseEnter: _o.onMouseEnter,
            onMouseLeave: _o.onMouseLeave
        }, g.createElement(e.default, Object.assign({}, I, {
            type: 'radio',
            prefixCls: F,
            ref: v
        })), void 0 !== B ? g.createElement('span', null, B) : null));
    };
    var o = g.forwardRef(n);
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var _s;
                (0, h.default)(this, q), (_s = p.call(this, r)).handleChange = function(t) {
                    var u = _s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in _s.props || _s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, _s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, _s.saveInput = function(t) {
                    _s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return _s.state = {
                    checked: t
                }, _s;
            }
            return (0, i.default)(b, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]),
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _d(b.exports, 'default', function() {
        return _c;
    });
}), a.register('3kLOc', function(b, _c) {
    _d(b.exports, 'default', function() {
        return _t;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = new(0, d.Keyframes)('antRadioEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        i = _d => {
            const {
                componentCls: j,
                antCls: k
            } = _d, l = `${ j }-group`;
            return {
                [l]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ l }-rtl`]: {
                        direction: 'rtl'
                    },
                    [`${ k }-badge ${ k }-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${ k }-badge:not(:first-child) > ${ k }-button-wrapper`]: {
                        borderInlineStart: 'none'
                    }
                })
            };
        },
        j = _d => {
            const {
                componentCls: k,
                radioWrapperMarginRight: l,
                radioCheckedColor: m,
                radioSize: n,
                motionDurationSlow: o,
                motionDurationMid: p,
                motionEaseInOut: q,
                motionEaseInOutCirc: r,
                radioButtonBg: s,
                colorBorder: _t,
                lineWidth: u,
                radioDotSize: v,
                colorBgContainerDisabled: w,
                colorTextDisabled: x,
                paddingXS: y,
                radioDotDisabledColor: z,
                lineType: A,
                radioDotDisabledSize: B,
                wireframe: C,
                colorWhite: D
            } = _d, E = `${ k }-inner`;
            return {
                [`${ k }-wrapper`]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    marginInlineStart: 0,
                    marginInlineEnd: l,
                    cursor: 'pointer',
                    [`&${ k }-wrapper-rtl`]: {
                        direction: 'rtl'
                    },
                    '&-disabled': {
                        cursor: 'not-allowed',
                        color: _d.colorTextDisabled
                    },
                    '&::after': {
                        display: 'inline-block',
                        width: 0,
                        overflow: 'hidden',
                        content: '"\\a0"'
                    },
                    [`${ k }-checked::after`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        border: `${ u }px ${ A } ${ m }`,
                        borderRadius: '50%',
                        visibility: 'hidden',
                        animationName: h,
                        animationDuration: o,
                        animationTimingFunction: q,
                        animationFillMode: 'both',
                        content: '""'
                    },
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ k }-wrapper:hover &,\n        &:hover ${ E }`]: {
                        borderColor: m
                    },
                    [`${ k }-input:focus-visible + ${ E }`]: Object.assign({}, (0, g.genFocusOutline)(_d)),
                    [`${ k }:hover::after, ${ k }-wrapper:hover &::after`]: {
                        visibility: 'visible'
                    },
                    [`${ k }-inner`]: {
                        '&::after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            insetBlockStart: '50%',
                            insetInlineStart: '50%',
                            display: 'block',
                            width: n,
                            height: n,
                            marginBlockStart: n / -2,
                            marginInlineStart: n / -2,
                            backgroundColor: C ? m : D,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: n,
                            transform: 'scale(0)',
                            opacity: 0,
                            transition: `all ${ o } ${ r }`,
                            content: '""'
                        },
                        boxSizing: 'border-box',
                        position: 'relative',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: n,
                        height: n,
                        backgroundColor: s,
                        borderColor: _t,
                        borderStyle: 'solid',
                        borderWidth: u,
                        borderRadius: '50%',
                        transition: `all ${ p }`
                    },
                    [`${ k }-input`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0
                    },
                    [`${ k }-checked`]: {
                        [E]: {
                            borderColor: m,
                            backgroundColor: C ? s : m,
                            '&::after': {
                                transform: `scale(${ v / n })`,
                                opacity: 1,
                                transition: `all ${ o } ${ r }`
                            }
                        }
                    },
                    [`${ k }-disabled`]: {
                        cursor: 'not-allowed',
                        [E]: {
                            backgroundColor: w,
                            borderColor: _t,
                            cursor: 'not-allowed',
                            '&::after': {
                                backgroundColor: z
                            }
                        },
                        [`${ k }-input`]: {
                            cursor: 'not-allowed'
                        },
                        [`${ k }-disabled + span`]: {
                            color: x,
                            cursor: 'not-allowed'
                        },
                        [`&${ k }-checked`]: {
                            [E]: {
                                '&::after': {
                                    transform: `scale(${ B / n })`
                                }
                            }
                        }
                    },
                    [`span${ k } + *`]: {
                        paddingInlineStart: y,
                        paddingInlineEnd: y
                    }
                })
            };
        },
        k = _d => {
            const {
                radioButtonColor: l,
                controlHeight: m,
                componentCls: n,
                lineWidth: o,
                lineType: p,
                colorBorder: q,
                motionDurationSlow: r,
                motionDurationMid: s,
                radioButtonPaddingHorizontal: t,
                fontSize: u,
                radioButtonBg: v,
                fontSizeLG: w,
                controlHeightLG: x,
                controlHeightSM: y,
                paddingXS: z,
                borderRadius: A,
                borderRadiusSM: B,
                borderRadiusLG: C,
                radioCheckedColor: D,
                radioButtonCheckedBg: E,
                radioButtonHoverColor: F,
                radioButtonActiveColor: G,
                radioSolidCheckedColor: H,
                colorTextDisabled: I,
                colorBgContainerDisabled: J,
                radioDisabledButtonCheckedColor: K,
                radioDisabledButtonCheckedBg: L
            } = _d;
            return {
                [`${ n }-button-wrapper`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: m,
                    margin: 0,
                    paddingInline: t,
                    paddingBlock: 0,
                    color: l,
                    fontSize: u,
                    lineHeight: m - 2 * o + 'px',
                    background: v,
                    border: `${ o }px ${ p } ${ q }`,
                    borderBlockStartWidth: o + 0.02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: o,
                    cursor: 'pointer',
                    transition: [
                        `color ${ s }`,
                        `background ${ s }`,
                        `border-color ${ s }`,
                        `box-shadow ${ s }`
                    ].join(','),
                    a: {
                        color: l
                    },
                    [`> ${ n }-button`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        zIndex: -1,
                        width: '100%',
                        height: '100%'
                    },
                    '&:not(:first-child)': {
                        '&::before': {
                            position: 'absolute',
                            insetBlockStart: -o,
                            insetInlineStart: -o,
                            display: 'block',
                            boxSizing: 'content-box',
                            width: 1,
                            height: '100%',
                            paddingBlock: o,
                            paddingInline: 0,
                            backgroundColor: q,
                            transition: `background-color ${ r }`,
                            content: '""'
                        }
                    },
                    '&:first-child': {
                        borderInlineStart: `${ o }px ${ p } ${ q }`,
                        borderStartStartRadius: A,
                        borderEndStartRadius: A
                    },
                    '&:last-child': {
                        borderStartEndRadius: A,
                        borderEndEndRadius: A
                    },
                    '&:first-child:last-child': {
                        borderRadius: A
                    },
                    [`${ n }-group-large &`]: {
                        height: x,
                        fontSize: w,
                        lineHeight: x - 2 * o + 'px',
                        '&:first-child': {
                            borderStartStartRadius: C,
                            borderEndStartRadius: C
                        },
                        '&:last-child': {
                            borderStartEndRadius: C,
                            borderEndEndRadius: C
                        }
                    },
                    [`${ n }-group-small &`]: {
                        height: y,
                        paddingInline: z - o,
                        paddingBlock: 0,
                        lineHeight: y - 2 * o + 'px',
                        '&:first-child': {
                            borderStartStartRadius: B,
                            borderEndStartRadius: B
                        },
                        '&:last-child': {
                            borderStartEndRadius: B,
                            borderEndEndRadius: B
                        }
                    },
                    '&:hover': {
                        position: 'relative',
                        color: D
                    },
                    '&:has(:focus-visible)': Object.assign({}, (0, g.genFocusOutline)(_d)),
                    [`${ n }-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [`&-checked:not(${ n }-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: D,
                        background: E,
                        borderColor: D,
                        '&::before': {
                            backgroundColor: D
                        },
                        '&:first-child': {
                            borderColor: D
                        },
                        '&:hover': {
                            color: F,
                            borderColor: F,
                            '&::before': {
                                backgroundColor: F
                            }
                        },
                        '&:active': {
                            color: G,
                            borderColor: G,
                            '&::before': {
                                backgroundColor: G
                            }
                        }
                    },
                    [`${ n }-group-solid &-checked:not(${ n }-button-wrapper-disabled)`]: {
                        color: H,
                        background: D,
                        borderColor: D,
                        '&:hover': {
                            color: H,
                            background: F,
                            borderColor: F
                        },
                        '&:active': {
                            color: H,
                            background: G,
                            borderColor: G
                        }
                    },
                    '&-disabled': {
                        color: I,
                        backgroundColor: J,
                        borderColor: q,
                        cursor: 'not-allowed',
                        '&:first-child, &:hover': {
                            color: I,
                            backgroundColor: J,
                            borderColor: q
                        }
                    },
                    [`&-disabled${ n }-button-wrapper-checked`]: {
                        color: K,
                        backgroundColor: L,
                        borderColor: q,
                        boxShadow: 'none'
                    }
                }
            };
        };
    var l = (0, e.default)('Radio', _d => {
        const {
            padding: m,
            lineWidth: n,
            controlItemBgActiveDisabled: o,
            colorTextDisabled: p,
            colorBgContainer: q,
            fontSizeLG: r,
            controlOutline: s,
            colorPrimaryHover: t,
            colorPrimaryActive: u,
            colorText: v,
            colorPrimary: w,
            marginXS: x,
            controlOutlineWidth: y,
            colorTextLightSolid: z,
            wireframe: A
        } = _d, B = `0 0 0 ${ y }px ${ s }`, C = B, D = r, E = D - 8, F = A ? E : D - 2 * (4 + n), G = w, H = v, I = t, J = u, K = m - n, L = p, M = x, N = (0, f.merge)(_d, {
            radioFocusShadow: B,
            radioButtonFocusShadow: C,
            radioSize: D,
            radioDotSize: F,
            radioDotDisabledSize: E,
            radioCheckedColor: G,
            radioDotDisabledColor: p,
            radioSolidCheckedColor: z,
            radioButtonBg: q,
            radioButtonCheckedBg: q,
            radioButtonColor: H,
            radioButtonHoverColor: I,
            radioButtonActiveColor: J,
            radioButtonPaddingHorizontal: K,
            radioDisabledButtonCheckedBg: o,
            radioDisabledButtonCheckedColor: L,
            radioWrapperMarginRight: M
        });
        return [
            i(N),
            j(N),
            k(N)
        ];
    });
}), a.register('s5a6g', function(b, c) {
    _d(b.exports, 'default', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    });
    var d = a('LEQ5w'),
        e = a('1P5ls'),
        f = a('hl66a0'),
        g = a('UK+Sg'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    const i = (_i, b) => {
        const {
            getPrefixCls: j
        } = d.useContext(e.ConfigContext), {
            prefixCls: k
        } = _i, l = h(_i, ['prefixCls']), _m = j('radio', k);
        return d.createElement(f.RadioOptionTypeContextProvider, {
            value: 'button'
        }, d.createElement(g.default, Object.assign({
            prefixCls: _m
        }, l, {
            type: 'radio',
            ref: b
        })));
    };
    var j = d.forwardRef(i);
}), a.register('sYc9l', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('0u6bl');
    var _f = _i => {
        (0, d.request)({
            url: '/api/games/privacy',
            method: 'post',
            data: {
                id: e.default.kitDetails.id,
                privacy: _i
            },
            success: () => {
                e.default.kitDetails.privacy = _i;
            },
            error: () => !1
        });
    };
}), a.register('dV5By', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('9jw7d'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UnlockOutlined';
    var _i = e.forwardRef(h);
}), a.register('9jw7d', function(b, c) {
    _v(b.exports, 'default', function() {
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
                    d: 'M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'
                }
            }]
        },
        name: 'unlock',
        theme: 'outlined'
    };
}), a.register('9u9bt', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('gaZZq'),
        i = a('2x11J'),
        j = a('WJLUy'),
        k = a('fu9ST'),
        l = a('PMl60'),
        m = a('SS5AM'),
        n = a('JhVLi'),
        o = a('NiL4/'),
        p = a('qCdZI'),
        q = a('hS8Jj'),
        r = a('wYGc3'),
        s = a('YEu6T2');
    let t;
    var _u = (0, i.observer)(() => {
        const _v = (0, r.useLocation)(),
            {
                editor: w,
                kitCollab: x
            } = e.useContext(k.default);
        return (0, d.jsx)(_v, {
            overlayVisible: 0 === w.questions.length && _v.pathname.endsWith('editor'),
            children: (0, d.jsxs)('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    (0, d.jsx)(s.default, {
                        icon: o.default,
                        title: 'Add Question',
                        onClick: () => (0, j.default)(h.addNewQuestion),
                        blockBackground: !0
                    }),
                    (0, d.jsx)(s.default, {
                        icon: p.default,
                        title: 'Create with Flashcards',
                        onClick: () => (0, j.default)(h.flashcardHomebase),
                        blockBackground: !0
                    }),
                    (0, l.isStudent)() ? null : (0, d.jsx)(s.default, {
                        icon: m.default,
                        title: 'Collaborate With KitCollab' + (x.waitingQuestions ? ` (${ x.waitingQuestions })` : ''),
                        onClick: () => (0, j.default)(h.kitCollab),
                        blockBackground: !0
                    }),
                    (0, d.jsx)(s.default, {
                        icon: n.default,
                        title: 'Add from Question Bank',
                        onClick: () => (0, j.default)(h.questionBank),
                        blockBackground: !0
                    }),
                    (0, d.jsx)(s.default, {
                        icon: q.default,
                        title: 'Import from Spreadsheet',
                        onClick: () => (0, j.default)(h.spreadsheet),
                        blockBackground: !0
                    })
                ]
            })
        });
    });
    const _v = f.default.div(t || (t = (_i => _i)`
  background: ${ 0 };
  display: flex;
  align-items: center;
  z-index: ${ 0 };
  position: ${ 0 };
  width: 100%;
`), g.default.White, _i => _i.overlayVisible ? 101 : 1, _i => _i.overlayVisible ? 'relative' : 'static');
}), a.register('gaZZq', function(b, c) {
    _i(b.exports, 'editorBase', function() {
        return _e;
    }), _i(b.exports, 'addNewQuestion', function() {
        return _f;
    }), _i(b.exports, 'flashcardImport', function() {
        return _g;
    }), _i(b.exports, 'spreadsheet', function() {
        return _h;
    }), _i(b.exports, 'createWithFlashcards', function() {
        return _i;
    }), _i(b.exports, 'flashcardHomebase', function() {
        return _j;
    }), _i(b.exports, 'questionBank', function() {
        return _k;
    }), _i(b.exports, 'kitCollab', function() {
        return _l;
    });
    var d = a('gs4MT');
    const _e = _i => (_i => d.KIT_CREATOR + '/' + _i)(_i) + '/editor',
        _f = _i => _e(_i) + '/question',
        _g = _i => _e(_i) + '/flashcard-import',
        _h = _i => _e(_i) + '/spreadsheet',
        _i = _i => _e(_i) + '/flashcard-create',
        _j = _i => _e(_i) + '/flashcard-home',
        _k = _i => _e(_i) + '/question-bank',
        _l = _i => _e(_i) + '/kit-collab';
}), a.register('WJLUy', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('jzxyj10'),
        e = a('0u6bl');
    var _f = _i => {
        const g = e.default.kitDetails.id || 'kitId';
        return (0, d.NavigateTo)(_i(g));
    };
}), a.register('jzxyj10', function(b, c) {
    _i(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _i => {
        d.history.push(_i);
    };
}), a.register('fu9ST', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('0u6bl');
    var _f = d.createContext(e.default);
}), a.register('SS5AM', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('4rJUq'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ApiOutlined';
    var _i = e.forwardRef(h);
}), a.register('4rJUq', function(b, c) {
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
                    d: 'M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 01-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 01-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z'
                }
            }]
        },
        name: 'api',
        theme: 'outlined'
    };
}), a.register('JhVLi', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('ImrWZ'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FunnelPlotOutlined';
    var _i = e.forwardRef(h);
}), a.register('ImrWZ', function(b, c) {
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
                    d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z'
                }
            }]
        },
        name: 'funnel-plot',
        theme: 'outlined'
    };
}), a.register('qCdZI', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('E9PPH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'RocketOutlined';
    var _i = e.forwardRef(h);
}), a.register('E9PPH', function(b, c) {
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
                    d: 'M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z'
                }
            }]
        },
        name: 'rocket',
        theme: 'outlined'
    };
}), a.register('hS8Jj', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('apBhq'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'TableOutlined';
    var _i = e.forwardRef(h);
}), a.register('apBhq', function(b, c) {
    _r(b.exports, 'default', function() {
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
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z'
                }
            }]
        },
        name: 'table',
        theme: 'outlined'
    };
}), a.register('YEu6T2', function(b, c) {
    _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('b5kvC');
    let i, j, k, l = _r => _r;
    const m = '#1890FF',
        n = f.default.div(i || (i = l`
  width: 100%;
  box-sizing: border-box;
  font-family: ${ 0 };
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${ 0 }px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  transition: all 0.25s;
  &:hover {
    color: ${ 0 };
  }
`), h.Fonts.SFPro, 14, _r => _r.selected && !_r.blockBackground ? '#E5F7FE' : g.default.White, _r => _r.selected ? m : 'rgba(0,0,0,.65)', _r => _r.selected && !_r.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: _r,
                onClick: s,
                selected: t,
                blockStripe: u,
                blockBackground: v
            } = this.props, w = this.props.icon;
            return (0, d.jsxs)(n, {
                selected: t,
                blockStripe: u,
                blockBackground: v,
                onClick: s,
                className: this.props.className,
                ...this.props.style,
                children: [
                    w ? (0, d.jsx)(w, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, d.jsxs)(o, {
                        children: [
                            (0, d.jsx)(p, {
                                children: _r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _r = q;
}), a.register('VzCQl', function(b, c) {
    _v(b.exports, 'QUESTION_LIMIT', function() {
        return _i;
    }), _v(b.exports, 'default', function() {
        return _k;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('NIZyA'),
        h = a('2x11J');
    const _i = 400;
    let j = class extends f.Component {
        render() {
            return this.props.editor.questions.length < _i ? null : (0, e.jsx)(g.default, {
                message: 'Question Limit Reached',
                description: `Kits cannot contain more than ${ _i } questions.`,
                type: 'error',
                style: {
                    margin: 10
                }
            });
        }
    };
    j = (0, d.__decorate)([
        (0, h.inject)('editor'),
        h.observer
    ], j);
    var _k = j;
}), a.register('eny5E', function(b, c) {
    _v(b.exports, 'default', function() {
        return _m;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('sHRDd'),
        j = a('9R7cy');
    let k, l = class extends g.Component {
        render() {
            return this.props.editor.questions.length ? (0, e.jsxs)(_n, {
                children: [
                    (0, e.jsx)(j.default, {
                        name: 'fad fa-check-circle',
                        style: {
                            marginRight: 6,
                            color: '#2e7d32'
                        }
                    }),
                    ' ',
                    'All changes saved'
                ]
            }) : null;
        }
    };
    l = (0, d.__decorate)([
        (0, f.inject)('editor'),
        f.observer
    ], l);
    var _m = l;
    const _n = h.default.div.attrs({
        className: 'flex hc vc'
    })(k || (k = (_v => _v)`
  font-size: 14px;
  border-top: 1px solid ${ 0 };
  padding: 15px;
  line-height: 1;
`), i.default.BorderGray);
}), a.register('C10Z1', function(b, c) {
    _v(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('ZkdZl'),
        h = a('D+sNG');
    let i;
    const j = e.default.div(i || (i = (_v => _v)`
  flex: 1;
  width: 100%;
  height: 100%;
  color: ${ 0 };
  background: ${ 0 };
  display: flex;
  flex-direction: column;
`), f.default.Black, f.default.Snow);
    var _k = () => (0, d.jsxs)(j, {
        children: [
            (0, d.jsx)(g.default, {}),
            (0, d.jsx)(h.default, {})
        ]
    });
}), a.register('ZkdZl', function(b, c) {
    _v(b.exports, 'RIGHT_SIDE_HEADER_PADDING', function() {
        return _o;
    }), _v(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('sHRDd'),
        j = a('P0plI'),
        k = a('2x11J'),
        l = a('gf2q4'),
        m = a('bGmaa');
    let n;
    const _o = 20;
    let p = class extends g.Component {
        render() {
            return (0, f.jsx)(_q, {
                children: this.getContent()
            });
        }
        constructor(..._v) {
            super(..._v), (0, d.default)(this, 'getContent', () => this.props.editor.questionsChecked.length ? (0, f.jsx)(l.default, {}) : (0, f.jsx)(m.default, {}));
        }
    };
    p = (0, e.__decorate)([
        (0, k.inject)('editor'),
        k.observer
    ], p);
    const _q = h.default.div(n || (n = (_v => _v)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${ 0 };
`), i.default.White, j.HEADER_HEIGHT, i.default.BorderGray);
    var _r = p;
}), a.register('gf2q4', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('2x11J'),
        i = a('Axq+p'),
        j = a('b5kvC'),
        k = a('PMl60'),
        l = a('ieNls8'),
        m = a('ulE4q'),
        n = a('ZSIW+'),
        o = a('ts50U'),
        p = a('ZkdZl');
    let q, r, s, t = _v => _v,
        u = class extends g.Component {
            render() {
                const _v = this.props.editor.questionsChecked.length;
                return (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(_x, {
                            onClick: this.onSelectQuestionCount,
                            children: `${ _v } ${ (0, k.plural)('question', _v) } selected`
                        }),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)(m.default, {
                                    size: 'large',
                                    onClick: this.convertSelectedQuestions,
                                    children: 'Convert to Text Input'
                                }),
                                (0, f.jsx)(m.default, {
                                    onClick: this.deleteSelectedQuestions,
                                    style: {
                                        marginLeft: 5
                                    },
                                    type: 'primary',
                                    icon: (0, f.jsx)(l.default, {}),
                                    size: 'large',
                                    children: 'Delete'
                                })
                            ]
                        })
                    ]
                });
            }
            constructor(..._i) {
                super(..._i), (0, d.default)(this, 'onSelectQuestionCount', () => {
                    this.props.editor.questionsChecked.length === this.props.editor.questions.length ? this.props.editor.questionsChecked.replace([]) : this.props.editor.questionsChecked.replace(this.props.editor.questions.map(_i => _i._id));
                }), (0, d.default)(this, 'deleteSelectedQuestions', () => {
                    (0, n.default)(this.props.editor.questionsChecked);
                }), (0, d.default)(this, 'convertSelectedQuestions', () => {
                    (0, o.default)(this.props.editor.questionsChecked);
                });
            }
        };
    u = (0, e.__decorate)([
        (0, h.inject)('editor'),
        h.observer
    ], u);
    var _v = u;
    const _w = i.default.div(q || (q = t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${ 0 }px;
`), () => p.RIGHT_SIDE_HEADER_PADDING),
        _x = i.default.div(r || (r = t`
  font-weight: ${ 0 };
  font-size: 20px;
  cursor: pointer;
`), j.FontWeights.Bold),
        _y = i.default.div(s || (s = t`
  display: flex;
  align-items: center;
`));
}), a.register('ieNls8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('8auc66'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var _i = e.forwardRef(h);
}), a.register('8auc66', function(b, c) {
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
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), a.register('ZSIW+', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('PMl60'),
        e = a('0u6bl'),
        f = a('INKb2'),
        g = a('YuT/D');
    var _h = _j => {
        const i = (0, g.toJS)(_j);
        (0, d.request)({
            url: '/api/v1/editor/questions/remove',
            method: 'post',
            data: {
                questions: _j,
                kitId: e.default.kitDetails.id
            },
            success: () => {
                e.default.editor.questionsChecked.replace([]);
                const _j = e.default.editor.questions.filter(_j => !i.includes(_j._id));
                e.default.editor.questions.replace(_j);
            },
            error: () => (0, f.throwError)({
                title: 'Error deleting questions...'
            })
        });
    };
}), a.register('ts50U', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('PMl60'),
        e = a('0u6bl'),
        f = a('INKb2'),
        g = a('YuT/D');
    var _h = _i => {
        const i = (0, g.toJS)(_i);
        (0, d.request)({
            url: '/api/v1/editor/questions/convert-text-input',
            method: 'post',
            data: {
                questions: i,
                kitId: e.default.kitDetails.id
            },
            success: _i => {
                let j = {};
                _i.forEach(_i => j[_i._id] = _i), e.default.editor.questionsChecked.replace([]);
                const k = e.default.editor.questions.map(_i => j[_i._id] ? j[_i._id] : _i);
                e.default.editor.questions.replace(k);
            },
            error: () => (0, f.throwError)({
                title: 'Error converting questions...',
                content: 'One of the questions might have an image or equation as the answer, which cannot be converted to a text input question'
            })
        });
    };
}), a.register('bGmaa', function(b, c) {
    _i(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ZkdZl'),
        g = a('CJCpN'),
        h = a('ulE4q'),
        i = a('gs4MT'),
        j = a('2HvvA11');
    let k;
    var _l = () => (0, d.jsx)(_m, {
        children: (0, d.jsx)(j.default, {
            to: i.DASHBOARD,
            children: (0, d.jsx)(h.default, {
                size: 'large',
                icon: (0, d.jsx)(g.default, {}),
                type: 'primary',
                children: 'All Done'
            })
        })
    });
    const _m = e.default.div(k || (k = (_i => _i)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${ 0 }px;
`), () => f.RIGHT_SIDE_HEADER_PADDING);
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _z(b.exports, 'default', function() {
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), a.register('2HvvA11', function(b, c) {
    _z(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _z => _z.external || !_z.to ? (0, d.jsx)('a', {
        href: _z.to,
        tabIndex: Number(_z.tabIndex || '0'),
        onClick: _z.onClick,
        onKeyPress: b => {
            _z.onClick && 'Enter' === b.key && (b.preventDefault(), _z.onClick());
        },
        className: _z.className,
        target: _z.target,
        style: _z.style,
        children: _z.children
    }) : (0, d.jsx)(e.Link, {
        to: _z.to,
        tabIndex: Number(_z.tabIndex || '0'),
        onClick: _z.onClick,
        className: _z.className,
        target: _z.target,
        style: _z.style,
        children: _z.children
    });
}), a.register('D+sNG', function(b, c) {
    _z(b.exports, 'default', function() {
        return _k;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Hcxg/');
    let h;
    const i = a('Axq+p').default.div.attrs({
        className: 'scroll'
    })(h || (h = (_z => _z)`
  height: 100%;
  width: 100%;
  flex: 1;
  div {
    box-sizing: border-box;
  }
`));
    class j extends f.Component {
        render() {
            return (0, e.jsx)(i, {
                ref: this.containerRef,
                children: (0, e.jsx)(g.default, {
                    scrollToTop: this.scrollToTop
                })
            });
        }
        constructor(..._z) {
            super(..._z), (0, d.default)(this, 'containerRef', f.createRef()), (0, d.default)(this, 'scrollToTop', () => {
                this.containerRef.current && this.containerRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    var _k = j;
}), a.register('Hcxg/', function(b, c) {
    _z(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('+0Sy50'),
        i = a('gaZZq'),
        j = a('WJLUy'),
        k = a('Uj5m3'),
        l = a('TkUDH'),
        m = a('fu9ST');
    let n;
    const o = (0, g.observer)(_z => {
            const {
                editor: p,
                kitDetails: q
            } = e.useContext(m.default);
            return (0, d.jsx)(_p, {
                children: p.questions.map(c => (0, d.jsx)('div', {
                    children: (0, d.jsx)(h.default, {
                        question: c,
                        showCheckbox: !0,
                        checked: p.questionsChecked.includes(c._id),
                        handleCheckChange: _z => {
                            const r = _z.target.checked;
                            r && p.questionsChecked.push(c._id), r || p.questionsChecked.replace(p.questionsChecked.filter(_z => _z !== c._id));
                        },
                        canEdit: !0,
                        onEditClicked: _z => {
                            _z.stopPropagation(), p.currentlyEditingQuestionId = c._id, (0, j.default)(i.addNewQuestion);
                        },
                        onCopyClicked: p => {
                            p.stopPropagation();
                            const r = (0, l.questionToAddedQuestion)(c, q.id);
                            (0, k.default)([{
                                ...r,
                                source: c.source || 'editor'
                            }], () => {
                                _z.scrollToTop();
                            });
                        }
                    }, c._id)
                }, c._id))
            });
        }),
        _p = f.default.div(n || (n = (_z => _z)`
  padding: ${ 0 }px;
`), 10);
    var _q = o;
}), a.register('+0Sy50', function(b, c) {
    _z(b.exports, 'default', function() {
        return _z;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('+M5wm'),
        h = a('g2qtU0'),
        i = a('gn3Uk7'),
        j = a('GldUd7'),
        k = a('aNszb0'),
        l = a('ulE4q'),
        m = a('oXQNI'),
        n = a('q0pUc1'),
        o = a('fmVdR'),
        p = a('6BM9K6'),
        q = a('ijg0s'),
        r = a('Axq+p'),
        s = a('b5kvC'),
        t = a('sHRDd'),
        u = a('k0Og2'),
        v = a('x8CoD');
    let w;
    const x = (0, r.default)(m.default)(w || (w = (_z => _z)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), _z => _z.font ? _z.font : s.Fonts.SFPro, t.default.Black);
    class y extends f.Component {
        componentDidUpdate(_z) {
            _z.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }));
        }
        render() {
            const {
                question: z,
                showCheckbox: A,
                checked: B,
                canEdit: C,
                canAdd: D,
                fontFamily: E
            } = this.props;
            let F = s.Fonts.SFPro;
            E && (F = E);
            const G = z.audio && !z.text && !z.image && !z.latex;
            return (0, e.jsxs)(x, {
                font: F,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: '100%'
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, e.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, e.jsxs)('div', {
                                style: {
                                    justifyContent: 'space-between'
                                },
                                className: 'flex vc maxWidth',
                                children: [
                                    (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        children: [
                                            A && (0, e.jsx)(n.default, {
                                                style: {
                                                    zoom: 1.3,
                                                    marginRight: 10,
                                                    marginTop: 4
                                                },
                                                onChange: this.props.handleCheckChange,
                                                onClick: z => z.stopPropagation(),
                                                checked: B
                                            }),
                                            (0, e.jsx)(u.default, {
                                                text: z.text,
                                                image: z.image,
                                                latex: z.latex,
                                                customImageMargin: 10,
                                                customImageSize: 72
                                            }),
                                            z.audio && (0, e.jsx)(q.default, {
                                                title: 'Play Audio',
                                                children: (0, e.jsx)(l.default, {
                                                    style: {
                                                        marginLeft: G ? 0 : 10,
                                                        marginRight: G ? 10 : 0
                                                    },
                                                    type: 'primary',
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(h.default, {}),
                                                    onClick: this.onAudioPress
                                                })
                                            }),
                                            G && (0, e.jsx)(u.default, {
                                                text: 'Audio Only Question',
                                                customTextColor: '#bdbdbd'
                                            }),
                                            z.type === g.QuestionType.textInput && (0, e.jsx)(p.default, {
                                                color: 'magenta',
                                                style: {
                                                    marginLeft: 10,
                                                    fontFamily: F
                                                },
                                                children: 'Text Input'
                                            })
                                        ]
                                    }),
                                    C && (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginLeft: 10
                                        },
                                        children: [
                                            (0, e.jsx)(q.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, e.jsx)(l.default, {
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(i.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: {
                                                        marginRight: 5
                                                    }
                                                })
                                            }),
                                            (0, e.jsx)(q.default, {
                                                title: 'Edit',
                                                placement: 'bottom',
                                                children: (0, e.jsx)(l.default, {
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(j.default, {}),
                                                    size: 'small',
                                                    onClick: this.props.onEditClicked
                                                })
                                            })
                                        ]
                                    }),
                                    D && (0, e.jsx)(q.default, {
                                        title: 'Add Question',
                                        placement: 'left',
                                        children: (0, e.jsx)(k.default, {
                                            style: {
                                                fontSize: 19
                                            },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, e.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            this.state.showingAnswers && (0, e.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    paddingLeft: A ? 34 : 0
                                },
                                children: z.answers.map((A, B) => (0, e.jsxs)(f.Fragment, {
                                    children: [
                                        (0, e.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, e.jsx)(u.default, {
                                                    text: A.text,
                                                    image: A.image,
                                                    latex: A.latex,
                                                    customTextColor: A.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                A.image || A.latex ? (0, e.jsx)(p.default, {
                                                    color: A.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: A.image ? 2 : 12
                                                    },
                                                    children: A.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        B + 1 !== z.answers.length && (0, e.jsx)(o.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, A._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, d.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, d.default)(this, 'onAudioPress', _i => {
                _i.stopPropagation();
                new Audio((0, v.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _z = y;
}), a.register('g2qtU0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('EXicI0'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'AudioOutlined';
    var _i = e.forwardRef(h);
}), a.register('EXicI0', function(b, c) {
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
                    d: 'M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z'
                }
            }]
        },
        name: 'audio',
        theme: 'outlined'
    };
}), a.register('gn3Uk7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('haBtH6'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var _i = e.forwardRef(h);
}), a.register('haBtH6', function(b, c) {
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
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), a.register('GldUd7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('1tgJh4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var _i = e.forwardRef(h);
}), a.register('1tgJh4', function(b, c) {
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
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), a.register('aNszb0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Cu9ym'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlusCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('Cu9ym', function(b, c) {
    _d(b.exports, 'default', function() {
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
                        d: 'M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                }
            ]
        },
        name: 'plus-circle',
        theme: 'outlined'
    };
}), a.register('q0pUc1', function(b, c) {
    _d(b.exports, 'default', function() {
        return _g;
    });
    var d = a('2SA1z'),
        e = a('GvkEq1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var _g = f;
}), a.register('2SA1z', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    }, function(_d) {
        return _q = _d;
    });
    var d = a('JrtKP'),
        e = a('RW2Mp'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('UWoHW'),
        i = a('GvkEq1'),
        j = a('hFUNe'),
        k = a('oaXRt'),
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
    const m = (_d, a) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: _q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = _d,
            y = l(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'indeterminate',
                'style',
                'onMouseEnter',
                'onMouseLeave',
                'skipGroup',
                'disabled'
            ]);
        const {
            getPrefixCls: z,
            direction: A
        } = f.useContext(g.ConfigContext), B = f.useContext(i.GroupContext), {
            isFormItemInput: C
        } = f.useContext(h.FormItemInputContext), D = f.useContext(j.default), E = null !== (n = (null == B ? void 0 : B.disabled) || x) && void 0 !== n ? n : D, F = f.useRef(y.value);
        f.useEffect(() => {
            null == B || B.registerValue(y.value);
        }, []), f.useEffect(() => {
            if (!w)
                return y.value !== F.current && (null == B || B.cancelValue(F.current), null == B || B.registerValue(y.value), F.current = y.value), () => null == B ? void 0 : B.cancelValue(y.value);
        }, [y.value]);
        const G = z('checkbox', o),
            [H, I] = (0, k.default)(G),
            J = Object.assign({}, y);
        B && !w && (J.onChange = function() {
            y.onChange && y.onChange.apply(y, arguments), B.toggleOption && B.toggleOption({
                label: r,
                value: y.value
            });
        }, J.name = B.name, J.checked = B.value.includes(y.value));
        const K = _m(d)({
                [`${ G }-wrapper`]: !0,
                [`${ G }-rtl`]: 'rtl' === A,
                [`${ G }-wrapper-checked`]: J.checked,
                [`${ G }-wrapper-disabled`]: E,
                [`${ G }-wrapper-in-form-item`]: C
            }, p, _q, I),
            L = _m(d)({
                [`${ G }-indeterminate`]: s
            }, I),
            M = s ? 'mixed' : void 0;
        return H(f.createElement('label', {
            className: K,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': M
        }, J, {
            prefixCls: G,
            className: L,
            disabled: E,
            ref: a
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), a.register('GvkEq1', function(b, c) {
    _d(b.exports, 'GroupContext', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    }), _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('gK9Sd'),
        e = a('JrtKP'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('2SA1z'),
        j = a('oaXRt'),
        k = function(l, _m) {
            var n = {};
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && _m.indexOf(o) < 0 && (n[o] = l[o]);
            if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                    _m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
            }
            return n;
        };
    const _l = g.createContext(null),
        m = (_k, a) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: _r,
                rootClassName: s,
                style: t,
                onChange: u
            } = _k, v = k(_k, [
                'defaultValue',
                'children',
                'options',
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'onChange'
            ]);
            const {
                getPrefixCls: w,
                direction: x
            } = g.useContext(h.ConfigContext), [y, z] = g.useState(v.value || n || []), [A, B] = g.useState([]);
            g.useEffect(() => {
                'value' in v && z(v.value || []);
            }, [v.value]);
            const C = () => p.map(_k => 'string' == typeof _k || 'number' == typeof _k ? {
                    label: _k,
                    value: _k
                } : _k),
                D = w('checkbox', q),
                E = `${ D }-group`,
                [F, G] = (0, j.default)(D),
                H = (0, f.default)(v, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = C().map(_k => g.createElement(i.default, {
                prefixCls: D,
                key: _k.value.toString(),
                disabled: 'disabled' in _k ? _k.disabled : v.disabled,
                value: _k.value,
                checked: y.includes(_k.value),
                onChange: _k.onChange,
                className: `${ E }-item`,
                style: _k.style
            }, _k.label)));
            const I = {
                    toggleOption: _k => {
                        const J = y.indexOf(_k.value),
                            K = (0, d.default)(y); -
                        1 === J ? K.push(_k.value) : K.splice(J, 1), 'value' in v || z(K);
                        const L = C();
                        null == u || u(K.filter(_k => A.includes(_k)).sort((_k, J) => L.findIndex(J => J.value === _k) - L.findIndex(_k => _k.value === J)));
                    },
                    value: y,
                    disabled: v.disabled,
                    name: v.name,
                    registerValue: _k => {
                        B(_b => [].concat((0, d.default)(_b), [_k]));
                    },
                    cancelValue: _k => {
                        B(_b => _b.filter(_b => _b !== _k));
                    }
                },
                J = _b(e)(E, {
                    [`${ E }-rtl`]: 'rtl' === x
                }, _r, s, G);
            return F(g.createElement('div', Object.assign({
                className: J,
                style: t
            }, H, {
                ref: a
            }), g.createElement(_l.Provider, {
                value: I
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), a.register('oaXRt', function(_b, c) {
    _k(_b.exports, 'getStyle', function() {
        return _j;
    }), _k(_b.exports, 'default', function() {
        return _j;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = new(0, d.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        i = _k => {
            const {
                checkboxCls: j
            } = _k, k = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex'
                    }),
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ k }`]: {
                            marginInlineStart: _k.marginXS
                        },
                        [`&${ k }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ j }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(_k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: _k.checkboxSize,
                            height: _k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: _k.colorBgContainer,
                            border: `${ _k.lineWidth }px ${ _k.lineType } ${ _k.colorBorder }`,
                            borderRadius: _k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ _k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: _k.checkboxSize / 14 * 5,
                                height: _k.checkboxSize / 14 * 8,
                                border: `${ _k.lineWidthBold }px solid ${ _k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ _k.motionDurationFast } ${ _k.motionEaseInBack }, opacity ${ _k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: _k.paddingXS,
                            paddingInlineEnd: _k.paddingXS
                        }
                    })
                },
                {
                    [j]: {
                        '&-indeterminate': {
                            [`${ j }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: _k.fontSizeLG / 2,
                                    height: _k.fontSizeLG / 2,
                                    backgroundColor: _k.colorPrimary,
                                    border: 0,
                                    transform: 'translate(-50%, -50%) scale(1)',
                                    opacity: 1,
                                    content: '""'
                                }
                            }
                        }
                    }
                },
                {
                    [`${ k }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ k }:not(${ k }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: _k.colorPrimary
                        }
                    },
                    [`${ k }:not(${ k }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: _k.colorPrimary,
                            borderColor: _k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ _k.motionDurationMid } ${ _k.motionEaseOutBack } ${ _k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: _k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ _k.lineWidthBold }px solid ${ _k.colorPrimary }`,
                            animationName: h,
                            animationDuration: _k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ _k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ k }-checked:not(${ k }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ k }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: _k.colorBgContainerDisabled,
                            borderColor: _k.colorBorder,
                            '&:after': {
                                borderColor: _k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: _k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: _k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _j(_k, l) {
        const m = (0, f.merge)(l, {
            checkboxCls: `.${ _k }`,
            checkboxSize: l.controlInteractiveSize
        });
        return [i(m)];
    }
    var _j = (0, e.default)('Checkbox', (_d, _b) => {
        let {
            prefixCls: k
        } = _b;
        return [_i(k, _d)];
    });
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        _i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
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
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable'
            ]);
            const {
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(_i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _b(b.exports, 'default', function() {
        return _c;
    });
}), a.register('k0Og2', function(b, _c) {
    _b(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('DKaq/'),
        h = a('dDoty');
    let i, j, k, l = _b => _b;
    const m = e.default.div(i || (i = l`
  display: flex;
  align-items: center;
`)),
        n = e.default.div(j || (j = l`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), _b => _b.customTextColor ? _b.customTextColor : f.default.Black, _b => _b.customFontSize ? _b.customFontSize : 26, _b => _b.customFontWeight ? _b.customFontWeight : 600),
        o = e.default.div(k || (k = l``));
    var _p = _b => {
        var q;
        return (0, d.jsxs)(m, {
            onClick: q => _b.blockOutsideClicks ? q.stopPropagation() : null,
            children: [
                _b.image && (0, d.jsx)(g.default, {
                    image: _b.image,
                    size: _b.customImageSize || 45,
                    customRightMargin: _b.customImageMargin || 5,
                    showBorder: !0
                }),
                _b.latex ? (0, d.jsx)(o, {
                    style: (null === (q = _b.text) || void 0 === q ? void 0 : q.length) ? {
                        color: f.default.Black,
                        padding: 20,
                        border: `1px solid ${ f.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: _b.customFontSize || 26
                    } : {
                        color: f.default.Black,
                        fontSize: _b.customFontSize || 26
                    },
                    children: (0, d.jsx)(h.default, {
                        latex: _b.latex
                    })
                }) : null,
                (0, d.jsx)(n, {
                    ..._b,
                    children: _b.text
                })
            ]
        });
    };
}), a.register('dDoty', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('l3sIa'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('l3sIa', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('8pe9D')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('Uj5m3', function(b, c) {
    _y(b.exports, 'default', function() {
        return _l;
    });
    var d = a('PMl60'),
        e = a('0u6bl'),
        f = a('YuT/D'),
        g = a('gaZZq'),
        h = a('2U+ud'),
        i = a('VzCQl'),
        j = a('Hu6H7'),
        k = a('WJLUy');
    var _l = (_y, b, a) => {
        const m = e.default.editor.questions.length,
            n = i.QUESTION_LIMIT - m,
            o = _y.filter((_y, b) => b < n);
        e.default.editor.error = (0, h.defaultError)(), (0, d.request)({
            url: '/api/v1/editor/questions/add',
            method: 'post',
            data: {
                questions: o
            },
            success: _y => {
                (0, j.default)();
                let p = (0, f.toJS)(e.default.editor.questions);
                _y.filter(_y => !_y.replaced).forEach(_y => p[a && a.pushToBottom ? 'push' : 'unshift'](_y.question));
                _y.filter(_y => null !== _y.replaced).forEach(_y => {
                    p = p.map(p => p._id !== _y.replaced ? p : _y.question);
                }), e.default.editor.questions.replace(p), a && a.stay || (0, k.default)(g.editorBase);
            },
            error: _y => {
                _y && _y.message && _y.message.text && (e.default.editor.error.message = _y.message.text);
            },
            both: () => {
                b && b();
            }
        });
    };
}), a.register('Hu6H7', function(b, c) {
    _y(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0u6bl'),
        e = a('PMl60');
    var _f = () => {
        d.default.editor.editSessionCounted || (0, e.request)({
            url: '/api/v1/editor/edit-session',
            method: 'post',
            data: {
                kitId: d.default.kitDetails.id
            },
            success: () => d.default.editor.editSessionCounted = !0,
            error: () => !1
        });
    };
}), a.register('TkUDH', function(b, c) {
    _y(b.exports, 'questionToAddedQuestion', function() {
        return _v;
    }), _y(b.exports, 'default', function() {
        return _y;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('NiL4/'),
        i = a('ulE4q'),
        j = a('sgToH'),
        k = a('CAKUf'),
        l = a('4A/d/0'),
        m = a('sHRDd'),
        n = a('+0Sy50'),
        o = a('R6gfH'),
        p = a('Uj5m3'),
        q = a('2x11J'),
        r = a('VzCQl');
    const {
        TabPane: s
    } = k.default;
    let t;
    var u;
    (u = t || (t = {})).search = 'search', u.myKits = 'myKits';
    const _v = (_y, b) => ({
            questionText: _y.text,
            image: _y.image,
            audio: _y.audio,
            latex: _y.latex,
            type: _y.type,
            source: 'import',
            answers: _y.answers.map(_y => ({
                correct: _y.correct,
                text: _y.text,
                image: _y.image,
                latex: _y.latex,
                textType: _y.textType
            })),
            kitId: b
        }),
        w = {
            selectedTab: t.search,
            addedQuestionIds: []
        };
    let x = class extends g.Component {
        render() {
            const {
                visible: _y,
                close: z
            } = this.props;
            return (0, f.jsxs)(j.default, {
                destroyOnClose: !0,
                open: _y,
                width: '100%',
                placement: 'bottom',
                height: '80vh',
                bodyStyle: {
                    overflow: 'hidden'
                },
                onClose: z,
                closable: !0,
                children: [
                    (0, f.jsxs)(k.default, {
                        onChange: this.handleTabChange,
                        type: 'card',
                        activeKey: this.state.selectedTab,
                        children: [
                            (0, f.jsx)(s, {
                                tab: 'Search'
                            }, t.search),
                            (0, f.jsx)(s, {
                                tab: 'My Kits'
                            }, t.myKits)
                        ]
                    }),
                    this.getSearch()
                ]
            });
        }
        constructor(..._v) {
            super(..._v), (0, d.default)(this, 'state', w), (0, d.default)(this, 'handleTabChange', _v => {
                this.setState({
                    selectedTab: _v
                });
            }), (0, d.default)(this, 'addQuestion', _v => {
                this.setState({
                    addedQuestionIds: [
                        ...this.state.addedQuestionIds,
                        _v._id
                    ]
                }), (0, p.default)([_v(_v, this.props.kitDetails.id)], () => !1, {
                    stay: !0
                });
            }), (0, d.default)(this, 'renderQuestions', _v => {
                const y = _v.filter(_v => !this.state.addedQuestionIds.includes(_v._id));
                if (!y.length)
                    return null;
                return (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsxs)('div', {
                            className: 'maxWidth flex',
                            style: {
                                justifyContent: 'space-between',
                                marginBottom: 10
                            },
                            children: [
                                (0, f.jsx)('div', {}),
                                (0, f.jsx)(i.default, {
                                    onClick: () => {
                                        (0, p.default)(y.map(_v => _v(_v, this.props.kitDetails.id)));
                                    },
                                    type: 'primary',
                                    icon: (0, f.jsx)(h.default, {}),
                                    children: 'Add All Questions'
                                })
                            ]
                        }),
                        (0, f.jsx)(o.default, {
                            children: y.map(_v => (0, f.jsx)('div', {
                                children: (0, f.jsx)(n.default, {
                                    question: _v,
                                    showAllAnswers: !0,
                                    canAdd: !0,
                                    onAddClicked: y => {
                                        y.stopPropagation(), this.addQuestion(_v);
                                    }
                                })
                            }, _v._id))
                        })
                    ]
                });
            }), (0, d.default)(this, 'getSearch', () => (0, f.jsx)(l.default, {
                questionRenderer: this.renderQuestions,
                showMyKits: this.state.selectedTab === t.myKits,
                questionFetchLimit: r.QUESTION_LIMIT,
                customHeight: 'calc(80vh - 104px)',
                customLeftSidePadding: '0px 15px 0px 0px',
                customBackgroundColor: m.default.White,
                searchQuery: this.props.kitDetails.title || void 0,
                blockKitRedirect: !0,
                isFromQuestionBank: !0,
                blockChangingUrl: !0
            }));
        }
    };
    x = (0, e.__decorate)([
        (0, q.inject)('kitDetails'),
        q.observer
    ], x);
    var _y = x;
}), a.register('4A/d/0', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('12/UA'),
        h = a('PMl60'),
        i = a('Z8D3a'),
        j = a('OrfQT'),
        k = a('+0Sy50'),
        l = a('INKb2'),
        m = a('0qmC91'),
        n = a('4iV4e'),
        o = a('b5kvC'),
        p = a('wYGc3'),
        q = a('983xi'),
        r = a('7i/0c'),
        s = a('ECzOP');
    const t = 'GIMKIT_SEARCH_CACHE';
    class u extends f.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0);
        }
        componentDidUpdate(_v, w) {
            this.state.language === w.language && this.state.subject === w.subject && this.state.sort === w.sort && this.props.showMyKits === _v.showMyKits || this.onSearch(!0);
        }
        render() {
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    this.props.overrideTitle && (0, e.jsx)(h.Title, {
                        title: `Kits about "${ this.props.searchQuery }"`
                    }),
                    (0, e.jsxs)(g.Container, {
                        customBackgroundColor: this.props.customBackgroundColor,
                        customHeight: this.props.customHeight,
                        children: [
                            (0, e.jsx)(j.LeftSide, {
                                customPadding: this.props.customLeftSidePadding,
                                children: (0, e.jsxs)('div', {
                                    children: [
                                        !this.props.showMyKits && (0, e.jsx)('div', {
                                            style: {
                                                position: 'sticky',
                                                top: 0,
                                                zIndex: 999
                                            },
                                            className: 'maxWidth',
                                            children: (0, e.jsx)(r.default, {
                                                onSearch: this.onSearch,
                                                searchQuery: this.state.draftSearchQuery,
                                                onUpdateSearchQuery: this.onUpdateSearchQuery,
                                                language: this.state.language,
                                                onLanguageSelected: this.onLanguageSelected,
                                                subject: this.state.subject,
                                                onSubjectSelected: this.onSubjectSelected,
                                                sort: this.state.sort,
                                                onSortSelected: this.onSortSelected,
                                                loading: this.state.loading,
                                                showFilters: this.state.showFilters
                                            })
                                        }),
                                        this.getLeftSide()
                                    ]
                                })
                            }),
                            (0, e.jsx)(j.RightSide, {
                                children: this.getRightSide()
                            })
                        ]
                    })
                ]
            });
        }
        constructor(v) {
            super(v), (0, d.default)(this, 'state', {
                loading: !1,
                currentKit: '',
                questions: [],
                page: 0,
                hasMore: !0,
                error: !1,
                results: [],
                searchQuery: this.props.searchQuery,
                draftSearchQuery: this.props.searchQuery,
                language: void 0,
                subject: void 0,
                sort: r.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, d.default)(this, 'fetchSearchResults', () => {
                const w = this.state.searchQuery;
                if (w && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const x = {
                        query: w,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (x.language = (0, q.getLanguageKey)(this.state.language)), this.state.subject && (x.subject = this.state.subject), (0, h.request)({
                        url: '/api/games/search',
                        data: x,
                        cacheKey: t,
                        success: w => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...w.results
                                ],
                                hasMore: w.hasMore,
                                page: w.page
                            });
                        },
                        error: () => {
                            this.setState({
                                error: !0
                            }), (0, l.throwError)({
                                title: 'Error searching',
                                content: 'Please try again'
                            });
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const y = new URL(window.location.href);
                                y.searchParams.set('q', w), window.history.pushState({}, '', y);
                            }
                            this.setState({
                                showFilters: !0,
                                loading: !1,
                                firstSearch: !1,
                                fetchingResults: !1
                            });
                        }
                    });
                } else
                    this.setState({
                        loading: !1
                    });
            }), (0, d.default)(this, 'fetchMyKits', () => {
                this.setState({
                    fetchingResults: !0
                }), (0, h.request)({
                    cacheKey: t,
                    url: '/api/games/summary/me',
                    method: 'GET',
                    success: v => {
                        this.setState({
                            results: v.games.map(v => ({
                                _id: v._id,
                                title: v.title,
                                gif: v.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: _b(s)(v.createdAt).toISOString()
                            }))
                        });
                    },
                    error: () => (0, l.throwError)({
                        title: 'Error fetching Kits'
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                });
            }), (0, d.default)(this, 'fetchQuestions', v => {
                (0, h.request)({
                    url: `/api/games/questions/search/${ v }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: t,
                    method: 'get',
                    success: _b => {
                        const w = _b.reverse();
                        this.setState({
                            questions: w,
                            currentKit: v
                        });
                    },
                    error: () => !1
                });
            }), (0, d.default)(this, 'onSearch', v => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: v,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, d.default)(this, 'debouncedHover', (0, n.debounce)(v => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(v._id);
            }, 50)), (0, d.default)(this, 'onUpdateSearchQuery', v => {
                this.setState({
                    draftSearchQuery: v
                });
            }), (0, d.default)(this, 'onLanguageSelected', v => {
                this.setState({
                    language: v
                });
            }), (0, d.default)(this, 'onSubjectSelected', v => {
                this.setState({
                    subject: v
                });
            }), (0, d.default)(this, 'onSortSelected', v => {
                this.setState({
                    sort: v
                });
            }), (0, d.default)(this, 'getLeftSide', () => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, e.jsx)(m.default, {
                dataLength: this.state.results.length,
                hasMore: this.state.hasMore,
                style: {
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop: 18,
                    overflow: 'visible'
                },
                scrollableTarget: 'left-side-search',
                next: this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults,
                loader: null,
                children: this.state.results.map((v, _b) => (0, e.jsx)(f.Fragment, {
                    children: (0, e.jsx)(i.default, {
                        id: v._id,
                        title: v.title,
                        gif: v.gif,
                        handleHover: () => this.debouncedHover(v),
                        numberOfQuestions: v.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: v.creator,
                        dateCreated: v.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === v._id,
                        blockHoverable: !0
                    }, v._id)
                }, `read-item-${ v._id }`))
            }) : !this.state.results.length && (0, e.jsx)('div', {
                className: 'maxWidth flex hc vc flex-column',
                children: (0, e.jsxs)('div', {
                    style: {
                        padding: '0 38px',
                        marginTop: 42,
                        textAlign: 'center'
                    },
                    children: [
                        (0, e.jsx)('img', {
                            src: '/client/img/icons/sad.svg'
                        }),
                        (0, e.jsxs)('div', {
                            style: {
                                marginTop: 18,
                                fontFamily: o.Fonts.SFPro,
                                fontSize: 20
                            },
                            children: [
                                (0, e.jsx)('div', {
                                    children: 'We couldn\'t find any results.'
                                }),
                                !this.props.isFromQuestionBank && (0, e.jsxs)('div', {
                                    style: {
                                        marginTop: 24
                                    },
                                    children: [
                                        'Try another search or maybe',
                                        ' ',
                                        (0, e.jsx)(p.Link, {
                                            to: '/create',
                                            children: 'make your own kit!'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })), (0, d.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(v => (0, e.jsx)(k.default, {
                question: v,
                showAllAnswers: !0
            }, v._id)));
        }
    }
    var _v = u;
}), a.register('Z8D3a', function(b, c) {
    _f(b.exports, 'default', function() {
        return _L;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('fmVdR'),
        g = a('b5kvC'),
        h = a('DKaq/'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('sHRDd'),
        l = a('2HvvA11'),
        m = a('jzxyj10'),
        n = a('ECzOP');
    let o, p, q, r, s, t, u, v, w, x, y, z = _f => _f;
    const A = (0, i.default)(l.default).attrs({
            className: 'maxWidth'
        })(o || (o = z`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        B = (0, i.default)(e.default)(p || (p = z`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), k.default.White, k.default.BorderGray, g.Fonts.SFPro),
        C = i.default.div.attrs({
            className: 'flex-column'
        })(q || (q = z`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178),
        D = i.default.div(r || (r = z`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        E = i.default.div(s || (s = z`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        F = i.default.div(t || (t = z`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        G = i.default.div(u || (u = z`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        H = i.default.div(v || (v = z`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), g.Fonts.SFPro),
        I = i.default.i(w || (w = z`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        J = (0, i.default)(I).attrs({
            className: 'fad fa-list'
        })(x || (x = z``)),
        K = (0, i.default)(I).attrs({
            className: 'fad fa-calendar-alt'
        })(y || (y = z``));
    var _L = _f => {
        const M = 'normal' === _f.size;
        return (0, d.jsx)(A, {
            to: _f.blockRedirect ? void 0 : `/view/${ _f.id }`,
            children: (0, d.jsx)(B, {
                className: 'maxWidth',
                onMouseEnter: _f.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !_f.blockHoverable,
                style: {
                    backgroundColor: _f.selected ? '#eeeeee' : k.default.White
                },
                children: (0, d.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                image: _f.gif,
                                size: M ? 178 : 148,
                                onClick: _f.redirectOnImageClick && (() => _f.blockRedirect ? null : (0, m.NavigateTo)(`/view/${ _f.id }`))
                            })
                        }),
                        (0, d.jsx)(C, {
                            children: (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        style: {
                                            fontSize: M ? 32 : 23
                                        },
                                        children: _f.title
                                    }),
                                    _f.creator && (0, d.jsx)(F, {
                                        style: {
                                            fontSize: M ? 18 : 16
                                        },
                                        children: (0, j.capitalizeFirstLetter)(_f.creator)
                                    }),
                                    (0, d.jsx)(f.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!_f.numberOfQuestions && (0, d.jsxs)(G, {
                                        children: [
                                            (0, d.jsx)(J, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    _f.numberOfQuestions ? _f.numberOfQuestions : '',
                                                    ' ',
                                                    _f.numberOfQuestions ? (0, j.plural)('question', _f.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    _f.dateCreated && M && (0, d.jsxs)(H, {
                                        children: [
                                            (0, d.jsx)(K, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    _b(n)(_f.dateCreated).fromNow()
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    };
}), a.register('OrfQT', function(_b, c) {
    _f(_b.exports, 'LeftSide', function() {
        return _k;
    }), _f(_b.exports, 'RightSide', function() {
        return _l;
    });
    var d = a('Axq+p'),
        e = a('sHRDd'),
        f = a('b5kvC');
    let g, h, i, j = _f => _f;
    const _k = d.default.div.attrs({
            id: 'left-side-search',
            className: 'scroll-y'
        })(g || (g = j`
  width: 647px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  padding: ${ 0 };
  padding-top: 0px;
`), e.default.White, e.default.BorderGray, _f => _f.customPadding ? _f.customPadding : '15px'),
        _l = d.default.div.attrs({
            id: 'right-side-search',
            className: 'scroll-y'
        })(h || (h = j`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    d.default.div(i || (i = j`
  font-size: 20px;
  font-weight: ${ 0 };
  margin-bottom: 2px;
`), f.FontWeights.Bold);
}), a.register('0qmC91', function(b, c) {
    _f(b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = function(_f, g) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, i) {
                h.__proto__ = i;
            } || function(h, i) {
                for (var j in i)
                    i.hasOwnProperty(j) && (h[j] = i[j]);
            }, e(_f, g);
        };
    var f = function() {
        return f = Object.assign || function(g) {
            for (var h, i = 1, j = arguments.length; i < j; i++)
                for (var k in h = arguments[i])
                    Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
            return g;
        }, f.apply(this, arguments);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(k) {
        return 'number' == typeof k ? {
            unit: h,
            value: 100 * k
        } : 'string' == typeof k ? k.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(k)
        } : k.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(k)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var j = function(k) {
            function l(m) {
                var n = k.call(this, m) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : 'string' == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, n.onStart = function(o) {
                    n.lastScrollTop || (n.dragging = !0, o instanceof MouseEvent ? n.startY = o.pageY : o instanceof TouchEvent && (n.startY = o.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = 'transform', n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, n.onMove = function(o) {
                    n.dragging && (o instanceof MouseEvent ? n.currentY = o.pageY : o instanceof TouchEvent && (n.currentY = o.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = 'visible', n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')));
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        n._infScroll && (n._infScroll.style.overflow = 'auto', n._infScroll.style.transform = 'none', n._infScroll.style.willChange = 'none');
                    });
                }, n.onScrollListener = function(o) {
                    'function' == typeof n.props.onScroll && setTimeout(function() {
                        return n.props.onScroll && n.props.onScroll(o);
                    }, 0);
                    var p = n.props.height || n._scrollableNode ? o.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(p, n.props.scrollThreshold) : n.isElementAtBottom(p, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = p.scrollTop);
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(o, p, q, r) {
                    var s, t = !1,
                        u = 0;

                    function v() {
                        s && clearTimeout(s);
                    }

                    function v() {
                        var w = this,
                            x = Date.now() - u,
                            y = arguments;

                        function z() {
                            u = Date.now(), q.apply(w, y);
                        }

                        function z() {
                            s = void 0;
                        }
                        t || (r && !s && _k(), f(), void 0 === r && x > o ? _k() : !0 !== p && (s = setTimeout(r ? j : _k, void 0 === r ? o - x : o)));
                    }
                    return 'boolean' != typeof p && (r = q, q = p, p = void 0), g.cancel = function() {
                        f(), t = !0;
                    }, g;
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n;
            }
            return function(l, m) {
                function n() {
                    this.constructor = l;
                }
                e(l, m), l.prototype = null === m ? Object.create(m) : (a.prototype = m.prototype, new a());
            }(a, k), a.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, a.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, a.prototype.UNSAFE_componentWillReceiveProps = function(l) {
                this.props.dataLength !== l.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, a.prototype.isElementAtTop = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _k(m);
                return o.unit === g ? l.scrollTop <= o.value + n - l.scrollHeight + 1 || 0 === l.scrollTop : l.scrollTop <= o.value / 100 + n - l.scrollHeight + 1 || 0 === l.scrollTop;
            }, a.prototype.isElementAtBottom = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _k(m);
                return o.unit === g ? l.scrollTop + n >= l.scrollHeight - o.value : l.scrollTop + n >= o.value / 100 * l.scrollHeight;
            }, a.prototype.render = function() {
                var l = this,
                    m = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return _p(d).createElement('div', {
                    style: o,
                    className: 'infinite-scroll-component__outerdiv'
                }, _p(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(_p) {
                        return l._infScroll = _p;
                    },
                    style: m
                }, this.props.pullDownToRefresh && _p(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(_p) {
                        return l._pullDown = _p;
                    }
                }, _b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, a;
        }(d.Component),
        _k = j;
}), a.register('7i/0c', function(_b, c) {
    _d(_b.exports, 'SortOptions', function() {
        return _t;
    }), _d(_b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ulE4q'),
        g = a('ewwAh'),
        h = a('DzGwD'),
        i = a('inwN3'),
        j = a('ZBY0K1'),
        _k = a('983xi'),
        l = a('b5kvC'),
        m = a('uHpNo1'),
        n = a('R0rU70');
    let o, p, q = _d => _d;
    const r = e.default.div(o || (o = q`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), l.FontWeights.Bold, l.Fonts.SFPro),
        s = (0, e.default)(h.default).attrs({
            placement: 'bottomLeft',
            trigger: 'click',
            overlayStyle: {
                width: 220
            }
        })(p || (p = q``));
    let _t;
    var u;
    (u = _t || (_t = {})).relevant = 'relevant', u.recent = 'recent';
    var _v = _d => (0, d.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: _d.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, d.jsx)(g.default.Search, {
                placeholder: 'Search for kits...',
                onSearch: _d.onSearch,
                size: 'large',
                enterButton: !0,
                autoFocus: !0,
                style: {
                    flex: 1
                },
                loading: _d.loading,
                value: _d.searchQuery,
                onChange: _b => _d.onUpdateSearchQuery(_b.target.value)
            }),
            (0, d.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: _d.showFilters ? 'visible' : 'hidden'
                },
                children: [
                    (0, d.jsx)(s, {
                        content: (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(r, {
                                    children: 'Language:'
                                }),
                                (0, d.jsx)(i.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Languages',
                                    className: 'maxWidth',
                                    value: _d.language,
                                    onChange: _b => _d.onLanguageSelected(_b),
                                    children: [...(0, _k.getListOfLanguages)()].map(_d => (0, d.jsx)(i.default.Option, {
                                        value: _d,
                                        children: _d
                                    }, _d))
                                }),
                                (0, d.jsx)(r, {
                                    style: {
                                        marginTop: 12
                                    },
                                    children: 'Subject:'
                                }),
                                (0, d.jsx)(i.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Subjects',
                                    className: 'maxWidth',
                                    value: _d.subject,
                                    onChange: _b => _d.onSubjectSelected(_b),
                                    children: [...j.optionsForAreaOfExpertise].map(_d => (0, d.jsx)(i.default.Option, {
                                        value: _d,
                                        children: _d
                                    }, _d))
                                })
                            ]
                        }),
                        children: (0, d.jsx)(f.default, {
                            style: {
                                marginRight: 12
                            },
                            icon: (0, d.jsx)(m.default, {}),
                            size: 'small',
                            type: _d.language || _d.subject ? 'primary' : 'default',
                            children: 'Filter'
                        })
                    }),
                    (0, d.jsx)(s, {
                        content: (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(r, {
                                    children: 'Sort By:'
                                }),
                                (0, d.jsxs)(i.default, {
                                    className: 'maxWidth',
                                    value: _d.sort,
                                    onChange: _b => _d.onSortSelected(_b),
                                    children: [
                                        (0, d.jsx)(i.default.Option, {
                                            value: _t.relevant,
                                            children: 'Most Relevant'
                                        }),
                                        (0, d.jsx)(i.default.Option, {
                                            value: _t.recent,
                                            children: 'Most Recent'
                                        })
                                    ]
                                })
                            ]
                        }),
                        children: (0, d.jsx)(f.default, {
                            icon: (0, d.jsx)(n.default, {}),
                            size: 'small',
                            children: 'Sort'
                        })
                    })
                ]
            })
        ]
    });
}), a.register('DzGwD', function(b, c) {
    _d(b.exports, 'default', function() {
        return _t;
    }, function(_d) {
        return _t = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('ijg0s'),
        h = a('fLB6s'),
        i = a('GaHpv'),
        j = a('0RCFm'),
        k = a('zRcGn'),
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
    const m = _d => {
            let {
                title: n,
                content: o,
                prefixCls: p
            } = _d;
            return n || o ? e.createElement(e.Fragment, null, n && e.createElement('div', {
                className: `${ p }-title`
            }, (0, h.getRenderPropValue)(n)), e.createElement('div', {
                className: `${ p }-inner-content`
            }, (0, h.getRenderPropValue)(o))) : null;
        },
        n = e.forwardRef((_d, a) => {
            var o, p;
            const {
                prefixCls: q,
                title: r,
                content: s,
                overlayClassName: _t,
                placement: u = 'top',
                trigger: v = 'hover',
                mouseEnterDelay: w = 0.1,
                mouseLeaveDelay: x = 0.1,
                overlayStyle: y = {},
                arrowPointAtCenter: z,
                arrow: A
            } = _d, B = l(_d, [
                'prefixCls',
                'title',
                'content',
                'overlayClassName',
                'placement',
                'trigger',
                'mouseEnterDelay',
                'mouseLeaveDelay',
                'overlayStyle',
                'arrowPointAtCenter',
                'arrow'
            ]), {
                getPrefixCls: C
            } = e.useContext(f.ConfigContext), D = C('popover', q), [E, F] = (0, k.default)(D), G = C(), H = _b(d)(_t, F), I = null !== (p = null !== (o = 'boolean' != typeof A && (null == A ? void 0 : A.arrowPointAtCenter)) && void 0 !== o ? o : z) && void 0 !== p && p, J = null != A ? A : {
                arrowPointAtCenter: I
            };
            return E(e.createElement(g.default, Object.assign({
                placement: u,
                arrow: J,
                trigger: v,
                mouseEnterDelay: w,
                mouseLeaveDelay: x,
                overlayStyle: y
            }, B, {
                prefixCls: D,
                overlayClassName: H,
                ref: a,
                overlay: e.createElement(m, {
                    prefixCls: D,
                    title: r,
                    content: s
                }),
                transitionName: (0, i.getTransitionName)(G, 'zoom-big', B.transitionName),
                'data-popover-inject': !0
            })));
        });
    n._InternalPanelDoNotUseOrYouWillBeFired = j.default;
    var o = n;
}), a.register('fLB6s', function(_b, c) {
    _d(_b.exports, 'getRenderPropValue', function() {
        return _d;
    });
    const _d = _d => _d ? 'function' == typeof _d ? _d() : _d : null;
}), a.register('0RCFm', function(b, c) {
    _d(b.exports, 'getOverlay', function() {
        return _k;
    }, function(_d) {
        return _k = _d;
    }), _d(b.exports, 'RawPurePanel', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    }), _d(b.exports, 'default', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    });
    var d = a('LEQ5w'),
        e = a('JrtKP'),
        f = a('4a/hT'),
        g = a('1P5ls'),
        h = a('zRcGn'),
        i = a('fLB6s'),
        j = function(k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    const _k = (_m, _n, a) => {
        if (_n || a)
            return d.createElement(d.Fragment, null, _n && d.createElement('div', {
                className: `${ _m }-title`
            }, (0, i.getRenderPropValue)(_n)), d.createElement('div', {
                className: `${ _m }-inner-content`
            }, (0, i.getRenderPropValue)(a)));
    };

    function _l(_m) {
        const {
            hashId: n,
            prefixCls: o,
            className: p,
            style: q,
            placement: r = 'top',
            title: s,
            content: t,
            children: u
        } = _m;
        return d.createElement('div', {
            className: _n(e)(n, o, `${ o }-pure`, `${ o }-placement-${ r }`, p),
            style: q
        }, d.createElement(f.Popup, Object.assign({}, _m, {
            className: n,
            prefixCls: o
        }), u || _k(o, s, t)));
    }

    function _l(m) {
        const {
            prefixCls: _n
        } = m, o = j(m, ['prefixCls']), {
            getPrefixCls: p
        } = d.useContext(g.ConfigContext), q = p('popover', _n), [r, s] = (0, h.default)(q);
        return r(d.createElement(_u, Object.assign({}, o, {
            prefixCls: q,
            hashId: s
        })));
    }
}), a.register('zRcGn', function(b, c) {
    _i(b.exports, 'default', function() {
        return _u;
    });
    var d = a('USVCQ'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('ndmtK'),
        h = a('7hbGU'),
        i = a('Su/HH');
    const j = _i => {
            const {
                componentCls: k,
                popoverBg: l,
                popoverColor: m,
                width: n,
                fontWeightStrong: o,
                popoverPadding: p,
                boxShadowSecondary: q,
                colorTextHeading: r,
                borderRadiusLG: s,
                zIndexPopup: t,
                marginXS: _u,
                colorBgElevated: v
            } = _i;
            return [{
                    [k]: Object.assign(Object.assign({}, (0, h.resetComponent)(_i)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: t,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': v,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ k }-content`]: {
                            position: 'relative'
                        },
                        [`${ k }-inner`]: {
                            backgroundColor: l,
                            backgroundClip: 'padding-box',
                            borderRadius: s,
                            boxShadow: q,
                            padding: p
                        },
                        [`${ k }-title`]: {
                            minWidth: n,
                            marginBottom: _u,
                            color: r,
                            fontWeight: o
                        },
                        [`${ k }-inner-content`]: {
                            color: m
                        }
                    })
                },
                (0, i.default)(_i, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ k }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ k }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        k = _i => {
            const {
                componentCls: l
            } = _i;
            return {
                [l]: g.PresetColors.map(a => {
                    const m = _i[`${ a }-6`];
                    return {
                        [`&${ l }-${ a }`]: {
                            '--antd-arrow-background-color': m,
                            [`${ l }-inner`]: {
                                backgroundColor: m
                            },
                            [`${ l }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        l = _i => {
            const {
                componentCls: m,
                lineWidth: n,
                lineType: o,
                colorSplit: p,
                paddingSM: q,
                controlHeight: r,
                fontSize: s,
                lineHeight: t,
                padding: u
            } = _i, v = r - Math.round(s * t);
            return {
                [m]: {
                    [`${ m }-inner`]: {
                        padding: 0
                    },
                    [`${ m }-title`]: {
                        margin: 0,
                        padding: `${ v / 2 }px ${ u }px ${ v / 2 - n }px`,
                        borderBottom: `${ n }px ${ o } ${ p }`
                    },
                    [`${ m }-inner-content`]: {
                        padding: `${ q }px ${ u }px`
                    }
                }
            };
        };
    var m = (0, e.default)('Popover', _i => {
        const {
            colorBgElevated: n,
            colorText: o,
            wireframe: p
        } = _i, q = (0, f.merge)(_i, {
            popoverBg: n,
            popoverColor: o,
            popoverPadding: 12
        });
        return [
            j(q),
            k(q),
            p && l(q),
            (0, d.initZoomMotion)(q, 'zoom-big')
        ];
    }, _i => {
        let {
            zIndexPopupBase: n
        } = _i;
        return {
            zIndexPopup: n + 30,
            width: 177
        };
    });
}), a.register('uHpNo1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('in/jk1'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FilterOutlined';
    var _i = e.forwardRef(h);
}), a.register('in/jk1', function(b, c) {
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
                    d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z'
                }
            }]
        },
        name: 'filter',
        theme: 'outlined'
    };
}), a.register('R0rU70', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('939mY'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'SortDescendingOutlined';
    var _i = e.forwardRef(h);
}), a.register('939mY', function(b, c) {
    _p(b.exports, 'default', function() {
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
                    d: 'M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z'
                }
            }]
        },
        name: 'sort-descending',
        theme: 'outlined'
    };
}), a.register('Pc6gF', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('PMl60'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('wYGc3'),
        i = a('gaZZq'),
        j = a('Uj5m3'),
        k = a('fu9ST'),
        l = a('WJLUy'),
        m = a('DV4ZV'),
        n = a('VzCQl');
    var _o = (0, f.observer)(() => {
        const {
            editor: _p,
            kitDetails: {
                id: q
            }
        } = g.useContext(k.default), r = (0, h.useLocation)(), [s, t, u] = (0, e.useBoolean)(!1), v = g.useRef(), w = g.useMemo(() => !_p.currentlyEditingQuestionId && _p.questions.length >= n.QUESTION_LIMIT, [
            _p.questions.length,
            _p.currentlyEditingQuestionId
        ]), x = g.useMemo(() => r.pathname.endsWith('question'), [r.pathname.length]), y = g.useMemo(() => {
            if (_p.currentlyEditingQuestionId)
                return _p.questions.find(q => q._id === _p.currentlyEditingQuestionId);
        }, [_p.currentlyEditingQuestionId]), z = () => {
            _p.currentlyEditingQuestionId = '';
        };
        return (0, d.jsx)(m.default, {
            ref: v,
            visible: x,
            close: () => (0, l.default)(i.editorBase),
            existingQuestion: y,
            submitQuestion: _p => {
                t(), (0, j.default)([{
                    questionText: _p.text,
                    image: _p.image,
                    audio: _p.audio,
                    latex: _p.latex,
                    type: _p.type,
                    source: 'editor',
                    answers: _p.answers.filter(_p => {
                        var A;
                        const B = null === (A = _p.text) || void 0 === A ? void 0 : A.trim();
                        return !!(null == B ? void 0 : B.length) || (_p.latex || _p.image);
                    }),
                    kitId: q,
                    replacingQuestion: _p._id || ''
                }], () => {
                    u();
                });
            },
            afterClose: () => {
                v.current && v.current.clear(), z();
            },
            buttonLabel: y ? 'Save' : 'Add',
            loading: s,
            blockAddingNewQuestions: w,
            errorMessage: _p.error ? _p.error.message : ''
        });
    });
}), a.register('9Vd+P', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('gaZZq'),
        f = a('wExPd'),
        g = a('WJLUy'),
        h = a('wYGc3');
    var _i = () => {
        const _j = (0, h.useLocation)().pathname.endsWith('flashcard-import');
        return (0, d.jsx)(f.default, {
            visible: _j,
            close: () => (0, g.default)(e.editorBase)
        });
    };
}), a.register('wExPd', function(b, c) {
    _D(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('RgQGP'),
        i = a('ulE4q'),
        j = a('ewwAh'),
        k = a('YRlpt'),
        l = a('ijg0s'),
        m = a('Axq+p'),
        n = a('8y5No'),
        o = a('b5kvC'),
        p = a('e9jXO'),
        q = a('Uj5m3'),
        r = a('+M5wm'),
        s = a('2x11J'),
        t = a('CHk7m'),
        u = a('lQz8N'),
        v = a('2U+ud'),
        w = a('4iV4e');
    let x;
    const {
        TextArea: y
    } = j.default;
    let z;
    var A;
    (A = z || (z = {})).find = 'Find', A.export = 'Export', A.paste = 'Paste';
    const B = {
        screen: z.find,
        textAreaInput: '',
        overlayOpen: !1,
        loading: !1
    };
    let C = class extends g.Component {
        componentDidUpdate(_D) {
            !this.props.visible && _D.visible && (this.setState(B), this.props.editor.error = (0, v.defaultError)());
        }
        render() {
            const {
                visible: D,
                close: E
            } = this.props;
            return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsx)(k.default, {
                    destroyOnClose: !0,
                    open: D,
                    width: 670,
                    style: {
                        top: 20
                    },
                    footer: null,
                    onCancel: E,
                    closable: !1,
                    children: (0, f.jsxs)(_E, {
                        children: [
                            this.getContent(),
                            (0, f.jsx)(u.default, {})
                        ]
                    })
                })
            });
        }
        constructor(..._D) {
            super(..._D), (0, d.default)(this, 'state', B), (0, d.default)(this, 'skipToLastStep', () => this.setState({
                screen: z.paste
            })), (0, d.default)(this, 'toggleOverlay', () => this.setState({
                overlayOpen: !this.state.overlayOpen
            })), (0, d.default)(this, 'flip', () => this.setState({
                textAreaInput: (0, p.flip)(this.state.textAreaInput)
            })), (0, d.default)(this, 'getContent', () => {
                const _D = (0, p.MakeBaseQuestions)((0, p.MakeQuizletQuestionMap)(this.state.textAreaInput));
                return (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsxs)('div', {
                            className: 'flex maxWidth vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, f.jsxs)('div', {
                                    children: [
                                        (0, f.jsx)(n.default, {
                                            style: {
                                                fontWeight: o.FontWeights.UltraBold,
                                                fontSize: 35
                                            },
                                            children: 'Import a Set'
                                        }),
                                        (0, f.jsx)(n.default, {
                                            style: {
                                                fontSize: 18,
                                                marginTop: -6,
                                                lineHeight: '20px'
                                            },
                                            children: (0, f.jsx)('span', {
                                                children: 'Find a flashcard set and paste the text below.'
                                            })
                                        })
                                    ]
                                }),
                                (0, f.jsx)(l.default, {
                                    title: 'Need Help?',
                                    children: (0, f.jsx)(i.default, {
                                        href: 'https://help.gimkit.com/en/article/importing-a-flashcard-set-ti90sw/?1570044230345',
                                        target: '_blank',
                                        size: 'large',
                                        icon: (0, f.jsx)(h.default, {}),
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        },
                                        shape: 'circle',
                                        type: 'dashed'
                                    })
                                })
                            ]
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 10
                            }
                        }),
                        (0, f.jsx)(y, {
                            style: {
                                height: 200,
                                fontSize: 16
                            },
                            placeholder: 'Paste here...',
                            onChange: this.onTextAreaChanged,
                            value: this.state.textAreaInput
                        }),
                        (0, f.jsx)(i.default, {
                            style: {
                                width: '100%',
                                marginTop: 6
                            },
                            disabled: !(_D.length > 1),
                            onClick: this.addQuestions,
                            type: 'primary',
                            size: 'large',
                            loading: this.state.loading,
                            children: 'Create'
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 3
                            }
                        }),
                        _D.length > 1 && (0, f.jsxs)('div', {
                            className: 'flex vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, f.jsx)(n.default, {
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.5
                                    },
                                    onClick: this.toggleOverlay,
                                    children: 'Preview Questions'
                                }),
                                (0, f.jsx)(n.default, {
                                    onClick: this.flip,
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.5
                                    },
                                    children: 'Flip Term/Definition'
                                })
                            ]
                        }),
                        (0, f.jsx)(t.default, {
                            visible: this.state.overlayOpen,
                            questions: _D,
                            close: this.toggleOverlay
                        })
                    ]
                });
            }), (0, d.default)(this, 'addQuestions', () => {
                const D = (0, p.MakeBaseQuestions)((0, p.MakeQuizletQuestionMap)(this.state.textAreaInput));
                if (!D.length)
                    return;
                this.setState({
                    loading: !0
                });
                const E = D.reverse().map(D => ({
                    questionText: D.text,
                    image: D.image,
                    type: r.QuestionType.multipleChoice,
                    source: 'flashcard-import',
                    answers: D.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, w.chunk)(E, 20).forEach(D => {
                    (0, q.default)(D, () => this.setState({
                        loading: !1
                    }), {
                        pushToBottom: !0
                    });
                });
            }), (0, d.default)(this, 'onTextAreaChanged', _i => {
                this.setState({
                    textAreaInput: _i.target.value
                });
            });
        }
    };
    C = (0, e.__decorate)([
        (0, s.inject)('kitDetails', 'editor'),
        s.observer
    ], C);
    var _D = C;
    const _E = m.default.div(x || (x = (_i => _i)`
  .ant-steps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`));
}), a.register('RgQGP', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('0UBNe'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionOutlined';
    var _i = e.forwardRef(h);
}), a.register('0UBNe', function(b, c) {
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
                    d: 'M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z'
                }
            }]
        },
        name: 'question',
        theme: 'outlined'
    };
}), a.register('e9jXO', function(b, c) {
    _j(b.exports, 'MakeQuizletQuestionMap', function() {
        return _g;
    }), _j(b.exports, 'MakeBaseQuestions', function() {
        return _h;
    }), _j(b.exports, 'flip', function() {
        return _i;
    });
    var d = a('4iV4e');
    const e = _j => null != _j.match(/\.(jpeg|jpg|gif|png)$/),
        f = _j => _j.text ? _j.text : _j.image ? _j.image : '',
        _g = _j => _j.split('\n').map(_j => {
            let h = {
                question: {
                    text: null,
                    image: null,
                    audio: null
                },
                answer: {
                    text: null,
                    image: null
                }
            };
            const i = _j.split('\t').filter(_j => _j && _j.length > 0);
            if (i.length <= 1)
                return null;
            if (3 === i.length)
                return e(i[0]) ? (h.question.image = i[0], h.question.text = i[1], h.answer.text = i[2]) : (h.question.text = i[0], h.answer.text = i[1], h.question.image = i[2]), h;
            h.question.text = i[0];
            e(i[1]) ? h.answer.image = i[1] : h.answer.text = i[1];
            return h;
        }).filter(_j => !(!_j || !_j.question.text && !_j.question.image || !_j.answer.image && !_j.answer.text)),
        _h = _j => {
            const i = _j.map(i => {
                const j = [{
                        ...i.answer,
                        correct: !0
                    }],
                    k = () => {
                        let l = !1;
                        for (let m = 0; m < 10; m++) {
                            if (l)
                                return;
                            const n = (0, d.shuffle)(_j)[0];
                            let o = !1;
                            j.forEach(_j => {
                                f(_j) === f(n.answer) && (o = !0);
                            }), o || (j.push({
                                ...n.answer,
                                correct: !1
                            }), l = !0);
                        }
                        l || j.push({
                            text: '---',
                            image: null,
                            correct: !1
                        });
                    };
                return k(), k(), k(), {
                    text: i.question.text,
                    image: i.question.image,
                    audio: i.question.audio,
                    latex: i.question.latex,
                    answers: j
                };
            });
            return i && i.length ? i : [];
        },
        _i = _j => {
            let j = '';
            const k = _j.split('\n').map(_j => _j.split('\t').reverse());
            return k.forEach((_j, c) => {
                _j.forEach((d, e) => {
                    j += d, e + 1 === _j.length ? c + 1 !== k.length && (j += '\n') : j += '\t';
                });
            }), j;
        };
}), a.register('CHk7m', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('sgToH'),
        f = a('+M5wm'),
        g = a('+0Sy50');
    var _h = _j => {
        const i = _j.questions.map((_j, i) => ({
            _id: 'quizlet-question-' + i,
            text: _j.text,
            type: f.QuestionType.multipleChoice,
            image: _j.image,
            audio: _j.audio,
            latex: _j.latex,
            answers: _j.answers.map((_j, a) => ({
                _id: 'quizlet-answer-' + i + '-' + a,
                text: _j.text,
                image: _j.image,
                latex: _j.latex,
                correct: _j.correct
            }))
        }));
        return (0, d.jsx)(e.default, {
            open: _j.visible,
            placement: 'right',
            closable: !0,
            destroyOnClose: !0,
            onClose: _j.close,
            width: 515,
            children: i.map(_j => (0, d.jsx)(g.default, {
                question: _j,
                showAllAnswers: !0
            }, _j._id))
        });
    };
}), a.register('lQz8N', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('NIZyA'),
        h = a('2x11J');
    let i = class extends f.Component {
        render() {
            return this.props.editor.error.message ? (0, e.jsx)(g.default, {
                message: 'Error',
                description: this.props.editor.error.message,
                type: 'error',
                showIcon: !0
            }) : null;
        }
    };
    i = (0, d.__decorate)([
        (0, h.inject)('editor'),
        h.observer
    ], i);
    var _j = i;
}), a.register('2Wb9Y', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('gaZZq'),
        f = a('TkUDH'),
        g = a('WJLUy'),
        h = a('wYGc3');
    var _i = () => {
        const _j = (0, h.useLocation)().pathname.endsWith('question-bank');
        return (0, d.jsx)(f.default, {
            visible: _j,
            close: () => (0, g.default)(e.editorBase)
        });
    };
}), a.register('Wewa4', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('wYGc3'),
        f = a('ovoCL');
    var _g = () => {
        const _h = (0, e.useNavigate)(),
            i = (0, e.useLocation)().pathname.endsWith('spreadsheet');
        return (0, d.jsx)(f.default, {
            visible: i,
            close: () => _h(-1)
        });
    };
}), a.register('ovoCL', function(b, c) {
    _H(b.exports, 'default', function() {
        return _E;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('BBnjf'),
        g = a('NIZyA'),
        h = a('ulE4q'),
        i = a('oXQNI'),
        j = a('YRlpt'),
        k = a('vGnv2'),
        l = a('Axq+p'),
        m = a('b5kvC'),
        n = a('sHRDd'),
        o = a('Kob2G'),
        p = a('Uj5m3'),
        q = a('+M5wm'),
        r = a('2x11J'),
        s = a('e9jXO'),
        t = a('fu9ST');
    let u, v, w, x = _H => _H;
    const y = _H => (0, d.jsx)('a', {
            href: _H.link,
            target: '_blank',
            style: {
                width: '100%'
            },
            children: (0, d.jsxs)(i.default, {
                style: {
                    fontFamily: m.Fonts.SFPro,
                    color: n.default.Black
                },
                hoverable: !0,
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 23,
                            fontWeight: m.FontWeights.UltraBold
                        },
                        children: _H.title
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            lineHeight: '17px'
                        },
                        children: _H.description
                    })
                ]
            })
        }),
        z = _H => _H.filter(_H => _H && _H.length > 0),
        A = (0, r.observer)(_H => {
            const {
                kitDetails: B
            } = e.useContext(t.default), [C, D] = e.useState(!1), [E, F] = e.useState(''), G = ({
                file: _H
            }) => {
                F('');
                const I = [];
                o.parse(_H, {
                    complete: _H => {
                        if (_H && _H.data && _H.data.length && _H.data[0][0] && _H.data[0][0].endsWith('Template 2')) {
                            const J = [];
                            _H.data.forEach((_H, I) => {
                                I > 1 && _H[0] && _H[1] && J.push({
                                    question: {
                                        text: _H[0]
                                    },
                                    answer: {
                                        text: _H[1]
                                    }
                                });
                            }), (0, s.MakeBaseQuestions)(J).forEach(_H => {
                                I.push({
                                    text: _H.text,
                                    answers: _H.answers.map(_H => ({
                                        correct: _H.correct,
                                        text: _H.text
                                    }))
                                });
                            }), I && I.length || F('Invalid format. Make sure you\'re using our template and have a question and correct answer for each row.');
                        } else
                            _H && _H.data && _H.data[1] && z(_H.data[1]).length >= 5 && _H.data.forEach((_H, B) => {
                                if (B > 1) {
                                    const J = z(_H);
                                    if (!J[0])
                                        return;
                                    const K = [];
                                    for (let L = 1; L < J.length; L++)
                                        K.push({
                                            correct: 1 === L,
                                            text: J[L]
                                        });
                                    K.length >= 2 && I.push({
                                        text: J[0],
                                        answers: K
                                    });
                                }
                            }), I && I.length || F('Invalid format. Make sure you\'re using our template and have a question, correct answer, and at least one incorrect answer for each row.');
                        I && I.length && (D(!0), (0, p.default)(I.map(_H => ({
                            questionText: _H.text,
                            type: q.QuestionType.multipleChoice,
                            answers: _H.answers,
                            source: 'spreadsheet',
                            kitId: B.id
                        })), () => D(!1)));
                    }
                });
            };
            return (0, d.jsx)(j.default, {
                open: _H.visible,
                onCancel: _H.close,
                footer: !1,
                width: 670,
                closable: !1,
                style: {
                    top: 20
                },
                children: (0, d.jsxs)(_B, {
                    className: 'flex maxWidth flex-column',
                    children: [
                        (0, d.jsx)(_C, {
                            children: 'Import from Spreadsheet'
                        }),
                        (0, d.jsx)(_D, {
                            children: 'Want to add questions super quickly? Add them in a spreadsheet and import them here! To get started, choose a template below. Fill out the spreadsheet with your questions & answers and download it as a CSV file.'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                height: 7
                            }
                        }),
                        (0, d.jsxs)('div', {
                            className: 'flex vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, d.jsx)(y, {
                                    title: 'Template 1',
                                    description: 'Specify the question, correct answer, and incorrect answers',
                                    link: 'https://docs.google.com/spreadsheets/d/1UK4xg6vc1ph-tAOywBIyiArf_ck7QQFEq5p8t4LEcVw/copy'
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        width: 14
                                    }
                                }),
                                (0, d.jsx)(y, {
                                    title: 'Template 2',
                                    description: 'Specify just the question and correct answer',
                                    link: 'https://docs.google.com/spreadsheets/d/1OIoHEjTnzeBqceYynBV5WLEjF0J2yVFrIxCqquXokwE/copy'
                                })
                            ]
                        }),
                        (0, d.jsx)('img', {
                            src: '/client/img/editor/spreadsheet.jpg',
                            style: {
                                width: '100%',
                                marginTop: 10,
                                border: 'solid 1px',
                                borderRadius: 6
                            }
                        }),
                        (0, d.jsxs)(k.default, {
                            style: {
                                width: '100%'
                            },
                            customRequest: G,
                            accept: '.csv',
                            showUploadList: !1,
                            children: [
                                E ? (0, d.jsx)(g.default, {
                                    type: 'error',
                                    message: E,
                                    style: {
                                        marginTop: 10
                                    }
                                }) : null,
                                (0, d.jsx)(h.default, {
                                    type: 'primary',
                                    icon: (0, d.jsx)(f.default, {}),
                                    style: {
                                        width: '100%',
                                        marginTop: 10
                                    },
                                    loading: C,
                                    children: 'Upload File'
                                })
                            ]
                        })
                    ]
                })
            });
        }),
        _B = l.default.div(u || (u = x`
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`)),
        _C = l.default.div(v || (v = x`
  font-size: 27px;
  font-weight: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), m.FontWeights.UltraBold, n.default.Black, m.Fonts.SFPro),
        _D = l.default.div(w || (w = x`
  font-size: 16px;
  margin-top: -4px;
  line-height: 21px;
  color: ${ 0 };
  font-family: ${ 0 };
`), n.default.Black, m.Fonts.SFPro);
    var _E = A;
}), a.register('BBnjf', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('XJIlE'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UploadOutlined';
    var _i = e.forwardRef(h);
}), a.register('XJIlE', function(b, c) {
    _m(b.exports, 'default', function() {
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
                    d: 'M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'upload',
        theme: 'outlined'
    };
}), a.register('VzGvu', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('6CIVV'),
        g = a('2so8i'),
        h = a('+i8ep'),
        i = a('70AkF');
    let j;
    const k = e.default.div(j || (j = (_m => _m)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
    var _l = () => {
        const {
            kitId: _m
        } = (0, i.useParams)();
        return (0, h.useDidMount)(() => {
            (0, g.default)(_m);
        }), (0, d.jsx)(k, {
            children: (0, d.jsx)(f.default, {
                size: 'large'
            })
        });
    };
}), a.register('2so8i', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0u6bl'),
        e = a('PMl60'),
        f = a('gs4MT'),
        g = a('jzxyj10');
    var _h = _j => {
        (0, e.request)({
            url: `/api/games/fetch/${ _j }`,
            method: 'get',
            success: _j => {
                const {
                    kitDetails: i,
                    editor: j
                } = d.default, {
                    kit: k
                } = _j;
                i.id = k._id, i.title = k.title, i.image = k.gif, i.privacy = k.privacy, j.questions.replace(k.questions);
            },
            error: _j => {
                (0, g.NavigateTo)(f.DASHBOARD);
            }
        });
    };
}), a.register('vWWL1', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('wYGc3'),
        f = a('gaZZq'),
        g = a('WJLUy'),
        h = a('IqGz2');
    var _i = () => {
        const _j = (0, e.useLocation)().pathname.endsWith('flashcard-create');
        return (0, d.jsx)(h.default, {
            visible: _j,
            close: () => (0, g.default)(f.editorBase)
        });
    };
}), a.register('IqGz2', function(b, c) {
    _z(b.exports, 'default', function() {
        return _z;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ulE4q'),
        i = a('fmVdR'),
        j = a('YRlpt'),
        k = a('sHRDd'),
        l = a('b5kvC'),
        m = a('0RRn5'),
        n = a('CHk7m'),
        o = a('+M5wm'),
        p = a('2x11J'),
        q = a('lQz8N'),
        r = a('4iV4e'),
        s = a('Uj5m3'),
        t = a('e9jXO');
    const u = 'flashcard-entry-editor',
        v = _z => {
            let w = !1;
            return (_z.text || _z.audio || _z.image || _z.latex) && (w = !0), w;
        },
        w = _z => {
            let x = 0;
            return _z.text && x++, _z.image && x++, _z.latex && x++, 1 === x;
        },
        x = _z => v(_z.question) && w(_z.answer);
    let y = class extends g.Component {
        componentDidMount() {
            if (localStorage.getItem(u)) {
                const _z = JSON.parse(localStorage.getItem(u));
                _z && _z.length > 3 && this.setState({
                    questions: _z
                });
            }
        }
        render() {
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(j.default, {
                        open: this.props.visible,
                        onCancel: this.props.close,
                        width: 890,
                        closable: !1,
                        style: {
                            top: 20,
                            color: k.default.Black,
                            fontFamily: l.Fonts.SFPro
                        },
                        footer: (0, f.jsxs)('div', {
                            className: 'flex maxWidth vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, f.jsx)('a', {
                                    onClick: this.toggleOverlay,
                                    children: 'Preview Questions'
                                }),
                                (0, f.jsx)(h.default, {
                                    onClick: this.addQuestions,
                                    disabled: !this.canSubmit(),
                                    type: 'primary',
                                    loading: this.state.loading,
                                    children: 'Create'
                                })
                            ]
                        }),
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 34,
                                    fontWeight: l.FontWeights.UltraBold,
                                    cursor: 'pointer'
                                },
                                onDoubleClick: this.deleteAllQuestions,
                                children: '\uD83D\uDCDA Create Flashcards'
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 20,
                                    lineHeight: '20px',
                                    marginTop: -5,
                                    opacity: 0.8
                                },
                                children: 'Save some time by entering a question and answer. We\'ll generate the incorrect answers for you!'
                            }),
                            (0, f.jsx)(i.default, {}),
                            this.state.questions.map((_z, b) => (0, f.jsx)(m.default, {
                                value: _z,
                                onChange: _z => this.handleQuestionChange(_z, b)
                            }, 'flashcard-create-' + b)),
                            (0, f.jsx)(q.default, {})
                        ]
                    }),
                    (0, f.jsx)(n.default, {
                        questions: this.state.overlayVisible ? this.makeQuestions() : [],
                        visible: this.state.overlayVisible,
                        close: this.toggleOverlay
                    })
                ]
            });
        }
        constructor(..._z) {
            super(..._z), (0, d.default)(this, 'state', {
                questions: [{
                        question: {
                            text: '',
                            audio: '',
                            image: '',
                            latex: ''
                        },
                        answer: {
                            text: '',
                            image: '',
                            latex: ''
                        }
                    },
                    {
                        question: {
                            text: '',
                            audio: '',
                            image: '',
                            latex: ''
                        },
                        answer: {
                            text: '',
                            image: '',
                            latex: ''
                        }
                    },
                    {
                        question: {
                            text: '',
                            audio: '',
                            image: '',
                            latex: ''
                        },
                        answer: {
                            text: '',
                            image: '',
                            latex: ''
                        }
                    },
                    {
                        question: {
                            text: '',
                            audio: '',
                            image: '',
                            latex: ''
                        },
                        answer: {
                            text: '',
                            image: '',
                            latex: ''
                        }
                    }
                ],
                overlayVisible: !1,
                loading: !1
            }), (0, d.default)(this, 'toggleOverlay', () => this.setState({
                overlayVisible: !this.state.overlayVisible
            })), (0, d.default)(this, 'handleQuestionChange', (_z, b) => {
                let z = this.state.questions;
                b + 1 === this.state.questions.length && !this.state.questions[b + 1] && x(_z) && z.length < 200 && z.push({
                    question: {
                        text: '',
                        audio: '',
                        image: '',
                        latex: ''
                    },
                    answer: {
                        text: '',
                        image: '',
                        latex: ''
                    }
                }), z = z.map((z, c) => c !== b ? z : _z), z = z.filter((_z, b) => !(b > 3 && b + 1 !== z.length && !v(_z.question) && !w(_z.answer))), localStorage.setItem(u, JSON.stringify(z)), this.setState({
                    questions: z
                });
            }), (0, d.default)(this, 'makeQuestions', () => (0, t.MakeBaseQuestions)(this.state.questions.filter(_z => x(_z)))), (0, d.default)(this, 'addQuestions', () => {
                const _z = this.makeQuestions();
                if (!_z.length)
                    return;
                this.setState({
                    loading: !0
                });
                const A = _z.reverse().map(_z => ({
                    questionText: _z.text,
                    image: _z.image,
                    audio: _z.audio,
                    type: o.QuestionType.multipleChoice,
                    source: 'flashcard-create',
                    answers: _z.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, r.chunk)(A, 20).forEach(_z => {
                    (0, s.default)(_z, () => {
                        this.setState({
                            loading: !1
                        }), this.deleteAllQuestions();
                    });
                });
            }), (0, d.default)(this, 'deleteAllQuestions', () => {
                localStorage.removeItem(u), this.setState({
                    questions: [{
                            question: {
                                text: '',
                                audio: '',
                                image: '',
                                latex: ''
                            },
                            answer: {
                                text: '',
                                image: '',
                                latex: ''
                            }
                        },
                        {
                            question: {
                                text: '',
                                audio: '',
                                image: '',
                                latex: ''
                            },
                            answer: {
                                text: '',
                                image: '',
                                latex: ''
                            }
                        },
                        {
                            question: {
                                text: '',
                                audio: '',
                                image: '',
                                latex: ''
                            },
                            answer: {
                                text: '',
                                image: '',
                                latex: ''
                            }
                        },
                        {
                            question: {
                                text: '',
                                audio: '',
                                image: '',
                                latex: ''
                            },
                            answer: {
                                text: '',
                                image: '',
                                latex: ''
                            }
                        }
                    ]
                });
            }), (0, d.default)(this, 'canSubmit', () => {
                let z = !0;
                return this.state.questions.forEach((b, a) => {
                    a < 4 && (x(b) || (z = !1));
                }), z;
            });
        }
    };
    y = (0, e.__decorate)([
        (0, p.inject)('kitDetails'),
        p.observer
    ], y);
    var _z = y;
}), a.register('0RRn5', function(b, c) {
    _j(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('M5nvi'),
        g = a('PMl60');
    let h, i, j, k = _j => _j;
    const l = e.default.div(h || (h = k`
  width: 100%;
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`)),
        m = e.default.div(i || (i = k`
  width: calc(50% - 10px);
  margin-right: 10px;
`)),
        n = e.default.div(j || (j = k`
  width: calc(50% - 10px);
`));
    var _o = _j => {
        const p = () => ({
                question: {
                    text: _j.value.question.text,
                    image: _j.value.question.image,
                    audio: _j.value.question.audio,
                    latex: _j.value.question.latex
                },
                answer: {
                    text: _j.value.answer.text,
                    image: _j.value.answer.image
                }
            }),
            {
                value: q
            } = _j,
            {
                question: r,
                answer: s
            } = q;
        return (0, d.jsxs)(l, {
            children: [
                (0, d.jsx)(m, {
                    children: (0, d.jsx)(f.default, {
                        text: r.text,
                        image: r.image,
                        audio: r.audio,
                        latex: r.latex,
                        onTextChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                question: {
                                    ...t.question,
                                    text: q
                                }
                            });
                        },
                        onImageChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                question: {
                                    ...t.question,
                                    image: q
                                }
                            });
                        },
                        onLatexChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                question: {
                                    ...t.question,
                                    latex: q
                                }
                            });
                        },
                        textAllowed: !0,
                        imageAllowed: !r.latex,
                        audioAllowed: window.MediaRecorder && !(0, g.isStudent)(),
                        latexAllowed: !r.image,
                        onAudioChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                question: {
                                    ...t.question,
                                    audio: q
                                }
                            });
                        },
                        placeholder: 'Question...'
                    })
                }),
                (0, d.jsx)(n, {
                    children: (0, d.jsx)(f.default, {
                        text: s.text,
                        image: s.image,
                        latex: s.latex,
                        audio: null,
                        onTextChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                answer: {
                                    ...t.answer,
                                    text: q
                                }
                            });
                        },
                        onImageChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                answer: {
                                    ...t.answer,
                                    image: q
                                }
                            });
                        },
                        onLatexChange: q => {
                            const t = p();
                            _j.onChange({
                                ...t,
                                answer: {
                                    ...t.answer,
                                    latex: q
                                }
                            });
                        },
                        imageAllowed: !s.text && !s.latex,
                        latexAllowed: !s.text && !s.image,
                        textAllowed: !s.image && !s.latex,
                        placeholder: 'Answer...',
                        audioAllowed: !1
                    })
                })
            ]
        });
    };
}), a.register('M5nvi', function(b, c) {
    _j(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('YJjBj'),
        g = a('Axq+p'),
        h = a('g2qtU0'),
        i = a('iw0Mw'),
        j = a('vIBvW'),
        k = a('ulE4q'),
        l = a('ijg0s'),
        m = a('VjaJ4'),
        n = a('DKaq/'),
        o = a('H1Rq4'),
        p = a('PMl60'),
        q = a('BtZXP'),
        r = a('j+BT1'),
        s = a('hYhun');
    let t;
    var _u = _j => {
        const [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState(!1), [B, C, D] = (0, p.useBoolean)(!1), E = () => w(!0), F = () => y(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_v, {
                    children: [
                        (0, d.jsx)(f.default, {
                            value: _j.text,
                            onTextChange: v => {
                                _j.onTextChange(v);
                            },
                            disabled: !_j.textAllowed,
                            placeholder: _j.placeholder
                        }),
                        (0, d.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                !_j.image && _j.imageAllowed && (0, d.jsx)(l.default, {
                                    title: 'Add Photo',
                                    children: (0, d.jsx)(k.default, {
                                        onClick: E,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, d.jsx)(i.default, {}),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                }),
                                _j.image && (0, d.jsx)(n.default, {
                                    image: _j.image,
                                    size: 38,
                                    blockModalOpen: !0,
                                    onClick: E,
                                    showBorder: !0,
                                    style: {
                                        marginLeft: 4
                                    }
                                }),
                                _j.audioAllowed && (0, d.jsx)(l.default, {
                                    title: _j.audio ? 'Audio' : 'Add Audio',
                                    children: (0, d.jsx)(k.default, {
                                        onClick: () => {
                                            (0, p.isUpgraded)() ? y(!0): A(!0);
                                        },
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, d.jsx)(h.default, {}),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                }),
                                _j.latexAllowed && (0, d.jsx)(l.default, {
                                    title: _j.latex ? 'Equation' : 'Add Equation',
                                    children: (0, d.jsx)(k.default, {
                                        onClick: C,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, d.jsx)(j.default, {
                                            style: {
                                                color: _j.latex ? 'green' : 'inherit'
                                            }
                                        }),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(m.default, {
                    visible: v,
                    close: () => w(!1),
                    currentImage: _j.image,
                    onImageChange: v => {
                        _j.onImageChange(v);
                    }
                }),
                (0, d.jsx)(o.default, {
                    visible: x,
                    audio: _j.audio,
                    close: F,
                    onAudioChanged: v => {
                        var G;
                        G = v, _j.onAudioChange && _j.onAudioChange(G), F();
                    }
                }),
                (0, d.jsx)(s.default, {
                    visible: B,
                    close: D,
                    onChange: v => {
                        _j.onLatexChange && _j.onLatexChange(v);
                    },
                    latex: _j.latex
                }),
                (0, d.jsx)(q.default, {
                    id: 'add audio',
                    visible: z,
                    close: () => A(!1),
                    copy: {
                        title: r.AUDIO_TITLE,
                        description: r.AUDIO_DESCRIPTION
                    }
                })
            ]
        });
    };
    const _v = g.default.div(t || (t = (_j => _j)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 28px;
`));
}), a.register('Gc7ot', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('wYGc3'),
        f = a('gaZZq'),
        g = a('WJLUy'),
        h = a('IlHii');
    var _i = () => {
        const _j = (0, e.useLocation)().pathname.endsWith('flashcard-home');
        return (0, d.jsx)(h.default, {
            visible: _j,
            close: () => (0, g.default)(f.editorBase)
        });
    };
}), a.register('IlHii', function(b, c) {
    _u(b.exports, 'default', function() {
        return _s;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('q6j80'),
        i = a('aNszb0'),
        j = a('oXQNI'),
        k = a('fmVdR'),
        l = a('YRlpt'),
        m = a('sHRDd'),
        n = a('b5kvC'),
        o = a('gaZZq'),
        p = a('2x11J'),
        q = a('jzxyj10');
    let r = class extends g.Component {
        render() {
            return (0, f.jsxs)(l.default, {
                open: this.props.visible,
                onCancel: this.props.close,
                width: 500,
                style: {
                    top: 20,
                    color: m.default.Black,
                    fontFamily: n.Fonts.SFPro
                },
                footer: null,
                closable: !1,
                children: [
                    (0, f.jsxs)(j.default, {
                        hoverable: !0,
                        style: {
                            color: m.default.Black,
                            fontFamily: n.Fonts.SFPro,
                            height: 210
                        },
                        onClick: this.createFlashcards,
                        bodyStyle: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '100%'
                        },
                        children: [
                            (0, f.jsx)(i.default, {
                                style: {
                                    fontSize: 35
                                }
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: n.FontWeights.UltraBold,
                                    fontSize: 25
                                },
                                className: 'flex vc',
                                children: (0, f.jsx)('div', {
                                    children: 'Create Flashcards'
                                })
                            })
                        ]
                    }),
                    (0, f.jsx)('div', {
                        className: 'flex',
                        children: (0, f.jsx)(k.default, {
                            children: 'or...'
                        })
                    }),
                    (0, f.jsx)(j.default, {
                        hoverable: !0,
                        style: {
                            color: m.default.Black,
                            fontFamily: n.Fonts.SFPro
                        },
                        onClick: this.importFlashcards,
                        children: (0, f.jsxs)('div', {
                            className: 'flex flex-column hc vc maxWidth',
                            children: [
                                (0, f.jsx)(h.default, {
                                    style: {
                                        fontSize: 25
                                    }
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        fontWeight: n.FontWeights.UltraBold,
                                        fontSize: 22
                                    },
                                    className: 'flex vc',
                                    children: (0, f.jsx)('div', {
                                        children: 'Import Flashcards'
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        }
        constructor(..._u) {
            super(..._u), (0, d.default)(this, 'createFlashcards', () => (0, q.NavigateTo)((0, o.createWithFlashcards)(this.props.kitDetails.id))), (0, d.default)(this, 'importFlashcards', () => (0, q.NavigateTo)((0, o.flashcardImport)(this.props.kitDetails.id)));
        }
    };
    r = (0, e.__decorate)([
        (0, p.inject)('kitDetails'),
        p.observer
    ], r);
    var _s = r;
}), a.register('vfDGn', function(b, c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('LEQ5w'),
        g = a('gaZZq'),
        h = a('WJLUy'),
        i = a('Axq+p'),
        j = a('sHRDd'),
        k = a('b5kvC'),
        l = a('6Unib'),
        m = a('BuHt+'),
        n = a('ArweX'),
        o = a('2x11J'),
        p = a('fu9ST'),
        q = a('PMl60'),
        r = a('wYGc3');
    let s;
    var _t = (0, o.observer)(() => {
        const {
            kitCollab: _u
        } = f.useContext(p.default), v = (0, r.useLocation)(), w = f.useMemo(() => v.pathname.endsWith('kit-collab'), [v.pathname]);
        f.useEffect(() => {
            _u.panelOpen = !!w;
        }, [w]);
        const x = f.useCallback(() => {
            (0, h.default)(g.editorBase);
        }, []);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(e.default, {
                    open: w,
                    closable: !0,
                    onClose: x,
                    placement: 'right',
                    width: 520,
                    bodyStyle: {
                        padding: 40,
                        paddingTop: 30
                    },
                    children: (0, d.jsx)(_u, {
                        children: (0, q.isStudent)() ? null : _u.enabled ? (0, d.jsx)(l.default, {}) : (0, d.jsx)(m.default, {})
                    })
                }),
                (0, d.jsx)(n.default, {})
            ]
        });
    });
    const _u = i.default.div.attrs({
        className: 'maxWidth'
    })(s || (s = (_s => _s)`
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro);
}), a.register('6Unib', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('EWQDz'),
        g = a('DHkXI'),
        h = a('fmVdR'),
        i = a('6CIVV'),
        j = a('l9qFV'),
        k = a('xR99o'),
        l = a('PMl60'),
        m = a('D8YNI'),
        n = a('2x11J'),
        o = a('fu9ST'),
        p = a('jb/7Q'),
        q = a('R6gfH');
    var _r = (0, n.observer)(() => {
        const {
            kitCollab: _s,
            kitDetails: t
        } = e.useContext(o.default), [u, v, w] = (0, l.useBoolean)(!1);
        return e.useEffect(() => {
            (0, p.default)();
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(g.default, {
                            openSettings: v
                        }),
                        (0, d.jsx)(f.default, {}),
                        (0, d.jsx)(h.default, {
                            style: {
                                margin: '40px 0px'
                            }
                        }),
                        _s.hasFetchedFirstBatchOfQuestions ? _s.questions.length ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsx)(q.default, {
                                children: _s.questions.map(u => (0, d.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, d.jsx)(j.default, {
                                        id: u._id,
                                        question: u.question,
                                        creatorName: u.creatorName,
                                        kitId: t.id,
                                        sessionId: _s.sessionId
                                    })
                                }, u._id))
                            })
                        }) : (0, d.jsx)(k.default, {}) : (0, d.jsx)('div', {
                            className: 'maxWidth flex-center',
                            children: (0, d.jsx)(i.default, {
                                size: 'large'
                            })
                        })
                    ]
                }),
                (0, d.jsx)(m.default, {
                    open: u,
                    close: w
                })
            ]
        });
    });
}), a.register('EWQDz', function(b, c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('MSsQO'),
        h = a('PMl60'),
        i = a('jlX4s16'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('Axq+p'),
        m = a('fu9ST'),
        n = a('DKack');
    let o, p, q, r, s = _u => _u;
    var _t = (0, j.observer)(() => {
        const [_u, v, w] = (0, h.useBoolean)(!1), {
            kitCollab: x
        } = k.useContext(m.default), y = `${ (0, h.getDomain)() }/kit-collab/${ x.sessionId }`, z = k.useCallback(() => {
            _b(i)(y), g.default.success('KitCollab link copied!');
        }, [y]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_u, {
                    children: [
                        (0, d.jsx)(_v, {
                            children: 'Share the KitCollab link with anybody you want to contribute questions. Once they submit their questions, you\'ll see them pop up here for you to approve or reject.'
                        }),
                        (0, d.jsxs)(_w, {
                            children: [
                                (0, d.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, d.jsx)(f.default, {
                                        size: 'large',
                                        readOnly: !0,
                                        style: {
                                            width: '100%'
                                        },
                                        value: y
                                    })
                                }),
                                (0, d.jsxs)(_x, {
                                    children: [
                                        (0, d.jsx)(e.default, {
                                            size: 'large',
                                            style: {
                                                width: '50%'
                                            },
                                            onClick: v,
                                            children: 'View QR Code'
                                        }),
                                        (0, d.jsx)('div', {
                                            style: {
                                                width: 10,
                                                flexShrink: 0
                                            }
                                        }),
                                        (0, d.jsx)(e.default, {
                                            onClick: z,
                                            size: 'large',
                                            type: 'primary',
                                            style: {
                                                width: '50%'
                                            },
                                            children: 'Copy Link'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    link: y,
                    visible: _u,
                    close: w
                })
            ]
        });
    });
    const _u = l.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = s`
  margin-top: 15px;
`)),
        _v = l.default.div(p || (p = s`
  font-size: 18px;
`)),
        _w = l.default.div.attrs({
            className: 'flex-column'
        })(q || (q = s`
  margin-top: 20px;
`)),
        _x = l.default.div.attrs({
            className: 'maxWidth flex vc'
        })(r || (r = s`
  margin-top: 10px;
`));
}), a.register('MSsQO', function(_b, c) {
    _q(_b.exports, 'default', function() {
        return _q;
    });
    var d = a('gK9Sd'),
        e = a('K3ZV0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('ltcm50'),
        i = a('lpLpn'),
        j = a('2gYFg');
    let k = null,
        l = _q => _q(),
        m = [],
        n = {};
    const o = f.forwardRef((_q, _b) => {
        const p = () => {
                const {
                    prefixCls: _q,
                    container: r,
                    maxCount: s,
                    duration: t,
                    rtl: u,
                    top: v
                } = function() {
                    const {
                        prefixCls: w,
                        getContainer: x,
                        duration: y,
                        rtl: z,
                        maxCount: A,
                        top: B
                    } = n;
                    return {
                        prefixCls: null != w ? w : (0, g.globalConfig)().getPrefixCls('message'),
                        container: (null == x ? void 0 : x()) || document.body,
                        duration: y,
                        rtl: z,
                        maxCount: A,
                        top: B
                    };
                }();
                return {
                    prefixCls: _q,
                    getContainer: () => r,
                    maxCount: s,
                    duration: t,
                    rtl: u,
                    top: v
                };
            },
            [q, r] = f.useState(p),
            [s, t] = (0, i.useInternalMessage)(q),
            u = (0, g.globalConfig)(),
            v = u.getRootPrefixCls(),
            w = u.getIconPrefixCls(),
            x = () => {
                r(p);
            };
        return f.useEffect(x, []), f.useImperativeHandle(_b, () => {
            const y = Object.assign({}, s);
            return Object.keys(y).forEach(_b => {
                y[_b] = function() {
                    return x(), s[_b].apply(s, arguments);
                };
            }), {
                instance: y,
                sync: x
            };
        }), f.createElement(g.default, {
            prefixCls: v,
            iconPrefixCls: w
        }, t);
    });

    function p() {
        if (!k) {
            const q = document.createDocumentFragment(),
                r = {
                    fragment: q
                };
            return k = r, void l(() => {
                (0, e.render)(f.createElement(o, {
                    ref: q => {
                        const {
                            instance: s,
                            sync: t
                        } = q || {};
                        Promise.resolve().then(() => {
                            !r.instance && s && (r.instance = s, r.sync = t, p());
                        });
                    }
                }), q);
            });
        }
        k.instance && (m.forEach(_q => {
            const {
                type: q,
                skipped: r
            } = _q;
            if (!r)
                switch (q) {
                    case 'open':
                        l(() => {
                            const s = k.instance.open(Object.assign(Object.assign({}, n), _q.config));
                            null == s || s.then(_q.resolve), _q.setCloseFn(s);
                        });
                        break;
                    case 'destroy':
                        l(() => {
                            null == k || k.instance.destroy(_q.key);
                        });
                        break;
                    default:
                        l(() => {
                            var s;
                            const t = (s = k.instance)[q].apply(s, (0, d.default)(_q.args));
                            null == t || t.then(_q.resolve), _q.setCloseFn(t);
                        });
                }
        }), m = []);
    }

    function p(_q, r) {
        const s = (0, j.wrapPromiseFn)(s => {
            let t;
            const u = {
                type: _q,
                args: r,
                resolve: s,
                setCloseFn: _q => {
                    t = _q;
                }
            };
            return m.push(u), () => {
                t ? l(() => {
                    t();
                }) : u.skipped = !0;
            };
        });
        return _o(), s;
    }
    const p = {
        open: function(q) {
            const r = (0, j.wrapPromiseFn)(r => {
                let s;
                const t = {
                    type: 'open',
                    config: q,
                    resolve: r,
                    setCloseFn: q => {
                        s = q;
                    }
                };
                return m.push(t), () => {
                    s ? l(() => {
                        s();
                    }) : t.skipped = !0;
                };
            });
            return _o(), r;
        },
        destroy: function(q) {
            m.push({
                type: 'destroy',
                key: q
            }), _o();
        },
        config: function(q) {
            n = Object.assign(Object.assign({}, n), q), l(() => {
                var r;
                null === (r = null == k ? void 0 : k.sync) || void 0 === r || r.call(k);
            });
        },
        useMessage: i.default,
        _InternalPanelDoNotUseOrYouWillBeFired: h.default
    };
    [
        'success',
        'info',
        'warning',
        'error',
        'loading'
    ].forEach(_d => {
        p[_d] = function() {
            for (var q = arguments.length, r = new Array(q), s = 0; s < q; s++)
                r[s] = arguments[s];
            return _p(_d, r);
        };
    });
    var _q = p;
}), a.register('ltcm50', function(b, c) {
    _d(b.exports, 'TypeIcon', function() {
        return _o;
    }, function(_d) {
        return _o = _d;
    }), _d(b.exports, 'PureContent', function() {
        return _p;
    }, function(_d) {
        return _p = _d;
    }), _d(b.exports, 'default', function() {
        return _p;
    }, function(_d) {
        return _p = _d;
    });
    var d = a('LEQ5w'),
        e = a('mPo/q'),
        f = a('G1f7z'),
        g = a('UAiDO'),
        h = a('alXMi'),
        i = a('xQyso'),
        j = a('6HRXq'),
        k = a('JrtKP'),
        l = a('jGaL50'),
        m = a('1P5ls'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = {
        info: d.createElement(i.default, null),
        success: d.createElement(h.default, null),
        error: d.createElement(g.default, null),
        warning: d.createElement(f.default, null),
        loading: d.createElement(e.default, null)
    };

    function _p(q) {
        let {
            prefixCls: r,
            type: s,
            icon: t,
            children: u
        } = q;
        return d.createElement('div', {
            className: _b(k)(`${ r }-custom-content`, `${ r }-${ s }`)
        }, t || _o[s], d.createElement('span', null, u));
    }

    function _p(q) {
        const {
            prefixCls: r,
            className: s,
            type: t,
            icon: u,
            content: v
        } = q, w = n(q, [
            'prefixCls',
            'className',
            'type',
            'icon',
            'content'
        ]), {
            getPrefixCls: x
        } = d.useContext(m.ConfigContext), y = r || x('message'), [, z] = (0, l.default)(y);
        return d.createElement(j.Notice, Object.assign({}, w, {
            prefixCls: y,
            className: _b(k)(s, z, `${ y }-notice-pure-panel`),
            eventKey: 'pure',
            duration: null,
            content: d.createElement(_w, {
                prefixCls: y,
                type: t,
                icon: u
            }, v)
        }));
    }
}), a.register('jGaL50', function(_b, c) {
    _d(_b.exports, 'default', function() {
        return _o;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = _d => {
        const {
            componentCls: i,
            iconCls: j,
            boxShadow: k,
            colorBgElevated: l,
            colorSuccess: m,
            colorError: n,
            colorWarning: _o,
            colorInfo: p,
            fontSizeLG: q,
            motionEaseInOutCirc: r,
            motionDurationSlow: s,
            marginXS: t,
            paddingXS: u,
            borderRadiusLG: v,
            zIndexPopup: _w,
            messageNoticeContentPadding: x
        } = _d, y = new(0, d.Keyframes)('MessageMoveIn', {
            '0%': {
                padding: 0,
                transform: 'translateY(-100%)',
                opacity: 0
            },
            '100%': {
                padding: u,
                transform: 'translateY(0)',
                opacity: 1
            }
        }), z = new(0, d.Keyframes)('MessageMoveOut', {
            '0%': {
                maxHeight: _d.height,
                padding: u,
                opacity: 1
            },
            '100%': {
                maxHeight: 0,
                padding: 0,
                opacity: 0
            }
        });
        return [{
                [i]: Object.assign(Object.assign({}, (0, g.resetComponent)(_d)), {
                    position: 'fixed',
                    top: t,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: _w,
                    [`${ i }-move-up`]: {
                        animationFillMode: 'forwards'
                    },
                    [`\n        ${ i }-move-up-appear,\n        ${ i }-move-up-enter\n      `]: {
                        animationName: y,
                        animationDuration: s,
                        animationPlayState: 'paused',
                        animationTimingFunction: r
                    },
                    [`\n        ${ i }-move-up-appear${ i }-move-up-appear-active,\n        ${ i }-move-up-enter${ i }-move-up-enter-active\n      `]: {
                        animationPlayState: 'running'
                    },
                    [`${ i }-move-up-leave`]: {
                        animationName: z,
                        animationDuration: s,
                        animationPlayState: 'paused',
                        animationTimingFunction: r
                    },
                    [`${ i }-move-up-leave${ i }-move-up-leave-active`]: {
                        animationPlayState: 'running'
                    },
                    '&-rtl': {
                        direction: 'rtl',
                        span: {
                            direction: 'rtl'
                        }
                    }
                })
            },
            {
                [`${ i }-notice`]: {
                    padding: u,
                    textAlign: 'center',
                    [`${ i }-custom-content > ${ j }`]: {
                        verticalAlign: 'text-bottom',
                        marginInlineEnd: t,
                        fontSize: q
                    },
                    [`${ i }-notice-content`]: {
                        display: 'inline-block',
                        padding: x,
                        background: l,
                        borderRadius: v,
                        boxShadow: k,
                        pointerEvents: 'all'
                    },
                    [`${ i }-success > ${ j }`]: {
                        color: m
                    },
                    [`${ i }-error > ${ j }`]: {
                        color: n
                    },
                    [`${ i }-warning > ${ j }`]: {
                        color: _o
                    },
                    [`\n        ${ i }-info > ${ j },\n        ${ i }-loading > ${ j }`]: {
                        color: p
                    }
                }
            },
            {
                [`${ i }-notice-pure-panel`]: {
                    padding: 0,
                    textAlign: 'start'
                }
            }
        ];
    };
    var i = (0, e.default)('Message', _d => {
        const j = (0, f.merge)(_d, {
            messageNoticeContentPadding: `${ (_d.controlHeightLG - _d.fontSize * _d.lineHeight) / 2 }px ${ _d.paddingSM }px`
        });
        return [h(j)];
    }, _d => ({
        height: 150,
        zIndexPopup: _d.zIndexPopupBase + 10
    }));
}), a.register('lpLpn', function(b, c) {
    _d(b.exports, 'useInternalMessage', function() {
        return _v;
    }, function(_d) {
        return _v = _d;
    }), _d(b.exports, 'default', function() {
        return _w;
    }, function(_d) {
        return _w = _d;
    });
    var d = a('LEQ5w'),
        e = a('6HRXq'),
        f = a('JrtKP'),
        g = a('QECub'),
        h = a('1P5ls'),
        i = a('jGaL50'),
        j = a('2gYFg'),
        k = a('ltcm50'),
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
    const m = 3,
        n = d.forwardRef((_q, a) => {
            const {
                top: o,
                prefixCls: p,
                getContainer: q,
                maxCount: r,
                duration: s = t,
                rtl: u,
                transitionName: _v,
                onAllRemoved: _w
            } = _q, {
                getPrefixCls: x,
                getPopupContainer: y
            } = d.useContext(h.ConfigContext), z = p || x('message'), [, A] = (0, i.default)(z), B = d.createElement('span', {
                className: `${ z }-close-x`
            }, d.createElement(g.default, {
                className: `${ z }-close-icon`
            })), [C, D] = (0, e.useNotification)({
                prefixCls: z,
                style: () => ({
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: null != o ? o : 8
                }),
                className: () => _t(f)(A, u ? `${ z }-rtl` : ''),
                motion: () => (0, j.getMotion)(z, _v),
                closable: !1,
                closeIcon: B,
                duration: s,
                getContainer: () => (null == q ? void 0 : q()) || (null == y ? void 0 : y()) || document.body,
                maxCount: r,
                onAllRemoved: _w
            });
            return d.useImperativeHandle(a, () => Object.assign(Object.assign({}, C), {
                prefixCls: z,
                hashId: A
            })), D;
        });
    let o = 0;

    function p(_q) {
        const r = d.useRef(null);
        return [
            d.useMemo(() => {
                const s = s => {
                        var _t;
                        null === (_t = r.current) || void 0 === _t || _t.close(s);
                    },
                    t = t => {
                        if (!r.current) {
                            const u = () => {};
                            return u.then = () => {}, u;
                        }
                        const {
                            open: u,
                            prefixCls: v,
                            hashId: w
                        } = r.current, x = `${ v }-notice`, {
                            content: y,
                            icon: z,
                            type: A,
                            key: B,
                            className: C,
                            onClose: D
                        } = t, E = l(t, [
                            'content',
                            'icon',
                            'type',
                            'key',
                            'className',
                            'onClose'
                        ]);
                        let F = B;
                        return null == F && (o += 1, F = `antd-message-${ o }`), (0, j.wrapPromiseFn)(r => (u(Object.assign(Object.assign({}, E), {
                            key: F,
                            content: d.createElement(k.PureContent, {
                                prefixCls: v,
                                type: A,
                                icon: z
                            }, y),
                            placement: 'top',
                            className: _b(f)(A && `${ x }-${ A }`, w, C),
                            onClose: () => {
                                null == D || D(), r();
                            }
                        })), () => {
                            s(F);
                        }));
                    },
                    u = {
                        open: t,
                        destroy: _b => {
                            var v;
                            void 0 !== _b ? s(_b) : null === (v = r.current) || void 0 === v || v.destroy();
                        }
                    };
                return [
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].forEach(s => {
                    u[s] = (_b, r, u) => {
                        let v, w, x;
                        v = _b && 'object' == typeof _b && 'content' in _b ? _b : {
                            content: _b
                        }, 'function' == typeof r ? x = r : (w = r, x = u);
                        const y = Object.assign(Object.assign({
                            onClose: x,
                            duration: w
                        }, v), {
                            type: s
                        });
                        return t(y);
                    };
                }), u;
            }, []),
            d.createElement(n, Object.assign({
                key: 'message-holder'
            }, _q, {
                ref: r
            }))
        ];
    }

    function p(q) {
        return _q(q);
    }
}), a.register('2gYFg', function(_b, c) {
    function d(e, f) {
        return {
            motionName: null != f ? f : `${ e }-move-up`
        };
    }

    function d(e) {
        let f;
        const g = new Promise(g => {
                f = e(() => {
                    g(!0);
                });
            }),
            h = () => {
                null == f || f();
            };
        return h.then = (e, f) => g.then(e, f), h.promise = g, h;
    }
    _b(_b.exports, 'getMotion', function() {
        return _d;
    }), _b(_b.exports, 'wrapPromiseFn', function() {
        return _e;
    });
}), a.register('jlX4s16', function(_b, c) {
    var _d = a('RnV2k27'),
        _e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = _d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = _e[g.format] || _e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (_d) {
            h && console.error('unable to copy using execCommand: ', _d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (_d) {
                h && console.error('unable to copy using clipboardData: ', _d), h && console.error('falling back to prompt'), i = function(o) {
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
}), a.register('DKack', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('YRlpt'),
        f = a('LEQ5w');
    const g = f.lazy(() => a('GN55P'));
    var _h = _b => (0, d.jsx)(e.default, {
        open: _b.visible,
        onCancel: _b.close,
        footer: null,
        closable: !0,
        children: (0, d.jsx)('div', {
            className: 'maxAll flex-center',
            children: (0, d.jsx)(f.Suspense, {
                fallback: null,
                children: (0, d.jsx)(g, {
                    link: _b.link
                })
            })
        })
    });
}), a.register('GN55P', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('7pIGN')),
        import('./' + a('HmN9A').resolve('i8Pm1'))
    ]).then(() => a('qc42G'));
}), a.register('DHkXI', function(b, c) {
    _s(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('9R7cy'),
        h = a('2HvvA11');
    let i, j, k, l = _s => _s;
    var _m = _s => (0, d.jsxs)(_n, {
        children: [
            (0, d.jsx)(_o, {
                children: 'KitCollab'
            }),
            (0, d.jsx)(_p, {
                onClick: _s.openSettings,
                children: (0, d.jsx)(g.default, {
                    name: 'fas fa-cog',
                    style: {
                        color: '#616161'
                    }
                })
            })
        ]
    });
    const _n = e.default.div.attrs({
            className: 'flex maxWidth between'
        })(i || (i = l`
  line-height: 1;
  margin-top: 10px;
  align-items: flex-start;
`)),
        _o = e.default.div(j || (j = l`
  font-size: 42px;
  font-weight: ${ 0 };
`), f.FontWeights.UltraBold),
        _p = (0, e.default)(h.default)(k || (k = l`
  font-size: 24px;
`));
}), a.register('l9qFV', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('NiL4/'),
        f = a('ulE4q'),
        g = a('+0Sy50'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('b5kvC'),
        k = a('Uj5m3'),
        l = a('2x11J'),
        m = a('fu9ST'),
        n = a('PMl60');
    let o, p, _q = _s => _s;
    var _r = (0, l.observer)(_s => {
        const {
            id: s
        } = _s, {
            kitCollab: t
        } = h.useContext(m.default), [u, v, w] = (0, n.useBoolean)(!1), x = {
            _id: `q-${ s }`,
            text: _s.question.text,
            type: _s.question.type,
            answers: _s.question.answers.map((_s, t) => ({
                _id: `${ s }-answer-${ t }`,
                correct: _s.correct,
                text: _s.text
            }))
        }, y = s => {
            (0, n.request)({
                url: '/api/kitcollab/question/action',
                data: {
                    sessionId: _s.sessionId,
                    questionId: _s.id,
                    accepted: s
                }
            });
        }, z = () => {
            t.questions.replace(t.questions.filter(s => s._id !== _s.id)), t.waitingQuestions = t.questions.length;
        };
        return (0, d.jsx)(g.default, {
            question: x,
            showAllAnswers: !0,
            blockToggleShowAnswers: !0,
            customStyle: {
                marginBottom: 20
            },
            customBottomComponent: (0, d.jsxs)(_s, {
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, d.jsx)(f.default, {
                                type: 'primary',
                                onClick: () => {
                                    u || (v(), y(!0), (0, k.default)([{
                                        questionText: x.text,
                                        type: x.type,
                                        answers: x.answers.map(_s => ({
                                            text: _s.text,
                                            correct: _s.correct,
                                            textType: _s.textType
                                        })),
                                        source: 'collab',
                                        kitId: _s.kitId
                                    }], () => {
                                        w(), z();
                                    }, {
                                        stay: !0
                                    }));
                                },
                                loading: u,
                                icon: (0, d.jsx)(e.default, {}),
                                children: 'Add To Kit'
                            }),
                            (0, d.jsx)(f.default, {
                                danger: !0,
                                type: 'primary',
                                onClick: () => {
                                    y(!1), z();
                                },
                                style: {
                                    marginLeft: 5
                                },
                                children: 'Reject'
                            })
                        ]
                    }),
                    (0, d.jsxs)(_t, {
                        children: [
                            'Submitted by',
                            ' ',
                            (0, d.jsx)('span', {
                                style: {
                                    fontWeight: j.FontWeights.Bold
                                },
                                children: _s.creatorName
                            })
                        ]
                    })
                ]
            })
        });
    });
    const _s = i.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = _q`
  margin-top: 16px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  line-height: 1;
`)),
        _t = i.default.div(p || (p = _q`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`));
}), a.register('xR99o', function(b, c) {
    _s(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('sHRDd');
    a('LEQ5w');
    var f = a('Axq+p');
    let g, h, i, j = _s => _s;
    var _k = () => (0, d.jsxs)(_l, {
        children: [
            (0, d.jsx)(_m, {}),
            (0, d.jsx)(_n, {
                children: 'No questions to review. Once new questions are submitted, you\'ll find them here.'
            })
        ]
    });
    const _l = f.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(g || (g = j`
  border-style: dashed;
  border-radius: 4px;
  border-color: ${ 0 };
  padding: 50px;
  border-width: 3px;
`), e.default.BorderGray),
        _m = f.default.img.attrs({
            src: '/client/img/editor/empty.svg'
        })(h || (h = j`
  height: 50px;
`)),
        _n = f.default.div(i || (i = j`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  color: #263238;
`));
}), a.register('D8YNI', function(b, c) {
    _s(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('fmVdR'),
        g = a('sgToH'),
        h = a('MSsQO'),
        i = a('YRlpt'),
        j = a('vKq/0'),
        k = a('Axq+p'),
        l = a('sHRDd'),
        m = a('2HvvA11'),
        n = a('b5kvC'),
        o = a('gs4MT'),
        p = a('PMl60'),
        q = a('2x11J'),
        r = a('fu9ST'),
        s = a('WJLUy'),
        t = a('gaZZq');
    let u, v, w, x, y, z = _s => _s;
    var _A = (0, q.observer)(_s => {
        const {
            kitCollab: B
        } = e.useContext(r.default), [C, D, E] = (0, p.useBoolean)(!1);
        return (0, d.jsx)(g.default, {
            open: _s.open,
            onClose: _s.close,
            width: 500,
            closable: !0,
            children: (0, d.jsxs)(_B, {
                children: [
                    (0, d.jsxs)(_C, {
                        children: [
                            (0, d.jsxs)(_D, {
                                children: [
                                    (0, d.jsx)(_E, {
                                        children: 'Private KitCollab'
                                    }),
                                    (0, d.jsxs)(_F, {
                                        children: [
                                            'Only allow students in your classes to contribute questions. If you haven\'t already created a class, you can do so',
                                            ' ',
                                            (0, d.jsx)(m.default, {
                                                to: o.NEW_CLASS,
                                                target: '_blank',
                                                children: 'here.'
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, d.jsx)(j.default, {
                                loading: C,
                                checked: !B.isPublic,
                                onChange: () => {
                                    C || (D(), (0, p.request)({
                                        url: `/api/kitcollab/toggle-privacy/${ B.sessionId }`,
                                        success: () => {
                                            B.isPublic = !B.isPublic;
                                        },
                                        both: () => E()
                                    }));
                                }
                            })
                        ]
                    }),
                    (0, d.jsx)(f.default, {}),
                    (0, d.jsxs)('div', {
                        className: 'flex-column',
                        children: [
                            (0, d.jsx)(m.default, {
                                onClick: () => {
                                    (0, p.request)({
                                        url: `/api/kitcollab/session/reset-link/${ B.sessionId }`,
                                        success: C => {
                                            B.sessionId = C, i.default.success({
                                                title: 'KitCollab link regenerated!',
                                                content: 'The old link will no longer work for contributing questions. Please send students the updated link.'
                                            }), _s.close();
                                        },
                                        error: _s => (0, p.throwMessageError)({
                                            e: _s,
                                            default: {
                                                title: 'There was an error. Please try again later.'
                                            }
                                        })
                                    });
                                },
                                style: {
                                    marginBottom: 5
                                },
                                children: 'Regenerate KitCollab link'
                            }),
                            (0, d.jsx)(m.default, {
                                onClick: () => {
                                    i.default.confirm({
                                        title: 'Are you sure?',
                                        content: 'Disabling KitCollab will also delete any questions waiting to be accepted.',
                                        okText: 'Yes',
                                        onOk: () => {
                                            (0, p.request)({
                                                url: '/api/kitcollab/session/delete',
                                                data: {
                                                    sessionId: B.sessionId
                                                },
                                                success: () => {
                                                    B.enabled = !1, B.sessionId = '', B.questions.replace([]), B.waitingQuestions = 0, B.hasFetchedFirstBatchOfQuestions = !1, (0, s.default)(t.editorBase), h.default.success('KitCollab disabled!');
                                                },
                                                error: _s => {
                                                    (0, p.throwMessageError)({
                                                        e: _s,
                                                        default: {
                                                            title: 'There was an error disabling KitCollab. Please try again later.'
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                },
                                children: 'Disable KitCollab'
                            })
                        ]
                    })
                ]
            })
        });
    });
    const _B = k.default.div(u || (u = z`
  color: ${ 0 };
  font-family: ${ 0 };
  font-size: 18px;
  padding-top: 35px;
`), l.default.Black, n.Fonts.SFPro),
        _C = k.default.div.attrs({
            className: 'flex vc'
        })(v || (v = z``)),
        _D = k.default.div(w || (w = z`
  margin-right: 40px;
`)),
        _E = k.default.div(x || (x = z`
  font-size: 24px;
  font-weight: ${ 0 };
`), n.FontWeights.Bold),
        _F = k.default.div(y || (y = z``));
}), a.register('jb/7Q', function(b, c) {
    _s(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('0u6bl');
    var _f = () => {
        e.default.kitCollab.sessionId && (0, d.request)({
            url: `/api/kitcollab/questions/${ e.default.kitCollab.sessionId }`,
            success: _s => {
                e.default.kitCollab.questions.replace(_s);
            },
            both: () => {
                e.default.kitCollab.hasFetchedFirstBatchOfQuestions = !0;
            }
        });
    };
}), a.register('BuHt+', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('fmVdR'),
        g = a('b5kvC'),
        h = a('PMl60'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('Axq+p'),
        l = a('fu9ST');
    let m, n, o, p, q = _s => _s;
    var _r = (0, i.observer)(() => {
        const {
            kitDetails: {
                id: _s
            },
            kitCollab: t
        } = j.useContext(l.default), [u, v, w] = (0, h.useBoolean)(!1);
        return (0, d.jsxs)(_s, {
            children: [
                (0, d.jsx)(_t, {}),
                (0, d.jsx)(_u, {
                    children: 'KitCollab'
                }),
                (0, d.jsx)(_v, {
                    children: 'KitCollab allows anybody, including students, to contribute questions to your kit! Build a kit together in real-time, or asynchronously!'
                }),
                (0, d.jsx)(f.default, {}),
                (0, d.jsx)(e.default, {
                    style: {
                        height: 60
                    },
                    size: 'large',
                    block: !0,
                    type: 'primary',
                    loading: u,
                    onClick: () => {
                        v(), (0, h.request)({
                            url: '/api/kitcollab/session/create',
                            data: {
                                gameId: _s
                            },
                            success: _s => {
                                t.sessionId = _s, t.enabled = !0;
                            },
                            error: _s => {
                                (0, h.throwMessageError)({
                                    e: _s,
                                    default: {
                                        title: 'There was an error enabling KitCollab. Please try again later.'
                                    }
                                });
                            },
                            both: () => w
                        });
                    },
                    children: 'Enable KitCollab'
                })
            ]
        });
    });
    const _s = k.default.div.attrs({
            className: 'flex-center flex-column maxAll'
        })(m || (m = q``)),
        _t = k.default.img.attrs({
            src: '/client/img/editor/kitcollab.svg'
        })(n || (n = q`
  height: 140px;
`)),
        _u = k.default.div(o || (o = q`
  font-size: 48px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), g.FontWeights.UltraBold),
        _v = k.default.div(p || (p = q`
  font-size: 18px;
  margin-top: 2px;
`));
}), a.register('ArweX', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('2x11J'),
        e = a('LEQ5w'),
        f = a('xs5xg'),
        g = a('VURM9'),
        h = a('fu9ST'),
        i = a('jb/7Q');
    var _j = (0, d.observer)(() => {
        const {
            kitCollab: _k
        } = e.useContext(h.default);
        e.useEffect(() => {
            (0, f.default)();
        }, []);
        return (0, g.useIntervalWhen)(() => {
            _k.panelOpen && _k.enabled && _k.sessionId && (0, i.default)();
        }, 5000), (0, g.useIntervalWhen)(() => {
            !_k.panelOpen && _k.sessionId && (0, f.default)();
        }, 10000), null;
    });
}), a.register('xs5xg', function(b, c) {
    _f(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('0u6bl');
    var _f = () => {
        (0, d.isStudent)() || (0, d.request)({
            url: `/api/kitcollab/session/${ e.default.kitDetails.id }`,
            success: _f => {
                e.default.kitCollab.sessionId = _f.sessionId, e.default.kitCollab.enabled = !0, e.default.kitCollab.waitingQuestions = _f.questions, e.default.kitCollab.isPublic = _f.isPublic;
            },
            error: () => {
                e.default.kitCollab.sessionId = '', e.default.kitCollab.enabled = !1, e.default.kitCollab.waitingQuestions = 0;
            }
        });
    };
}), a.register('VURM9', function(b, c) {
    _f(b.exports, 'useIntervalWhen', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g, h, i) {
        void 0 === g && (g = 0), void 0 === h && (h = !0), void 0 === i && (i = !1);
        var j = (0, d.useRef)();

        function k() {
            j.current && j.current();
        }
        (0, d.useEffect)(function() {
            j.current = _f;
        }), (0, d.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (h) {
                    i && _f();
                    var k = window.setInterval(_f, g);
                    return function() {
                        window.clearInterval(k);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            h,
            g
        ]);
    }
}), a.register('6AQRK', function(b, c) {
    _f(b.exports, 'default', function() {
        return _v;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        _f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('YRlpt'),
        i = a('oMKu0'),
        j = a('vEG5v'),
        k = a('2x11J'),
        l = a('PMl60'),
        m = a('0u6bl'),
        n = a('gaZZq'),
        o = a('WJLUy'),
        p = a('gs4MT'),
        q = a('jzxyj10'),
        r = a('Pq0g9');
    let s;
    var t;
    (t = s || (s = {})).details = 'details', t.image = 'image';
    let u = class extends g.Component {
        componentDidMount() {
            this.props.kitDetails.id && (0, q.NavigateTo)(p.DASHBOARD);
        }
        render() {
            return (0, _f.jsx)('div', {
                children: (0, _f.jsx)(h.default, {
                    open: !0,
                    style: {
                        top: 20
                    },
                    footer: null,
                    closable: !1,
                    children: (0, _f.jsxs)('div', {
                        style: {
                            height: 510
                        },
                        className: 'disable-scrollbars scroll',
                        children: [
                            this.state.stage === s.details && (0, _f.jsx)(i.default, {
                                onNext: this.onKitDetails
                            }),
                            this.state.stage === s.image && (0, _f.jsx)(j.default, {
                                title: 'Choose a cover photo',
                                defaultSearchTerm: this.props.kitDetails.title,
                                onImagePicked: this.onImagePicked
                            })
                        ]
                    })
                })
            });
        }
        constructor(..._f) {
            super(..._f), (0, d.default)(this, 'state', {
                stage: s.details,
                creatingKit: !1,
                createdKit: !1
            }), (0, d.default)(this, 'onKitDetails', () => {
                this.switchToImageScreen();
            }), (0, d.default)(this, 'onImagePicked', _f => {
                this.state.createdKit || this.state.creatingKit || (this.setState({
                    creatingKit: !0
                }), this.props.kitDetails.image = _f, (0, l.request)({
                    url: '/api/v1/editor/create',
                    method: 'POST',
                    data: {
                        title: this.props.kitDetails.title,
                        image: _f,
                        gradeLevel: this.props.kitDetails.gradeLevel,
                        language: this.props.kitDetails.language,
                        subject: this.props.kitDetails.subject,
                        isPrivate: (0, l.isStudent)()
                    },
                    success: _f => {
                        (0, r.AnalyticsTrackEvent)({
                            event: 'kit_created'
                        }), this.setState({
                            createdKit: !0
                        });
                        const {
                            kitDetails: v,
                            editor: w
                        } = m.default;
                        w.editSessionCounted = !0, v.id = _f._id, v.title = _f.title, v.image = _f.image, v.language = _f.lang, v.gradeLevel = _f.gradeLevel, v.privacy = _f.privacy, (0, o.default)(n.editorBase);
                    },
                    error: _f => h.default.error({
                        title: 'Error Creating Kit',
                        content: _f && _f.message && _f.message.text ? _f.message.text : 'Please try again'
                    }),
                    both: () => this.setState({
                        creatingKit: !1
                    })
                }));
            }), (0, d.default)(this, 'switchToImageScreen', () => this.setState({
                stage: s.image
            })), (0, d.default)(this, 'switchToDetailsScreen', () => this.setState({
                stage: s.details
            }));
        }
    };
    u = (0, e.__decorate)([
        (0, k.inject)('kitDetails'),
        k.observer
    ], u);
    var _v = u;
}), a.register('Pq0g9', function(b, c) {
    _f(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = _f => {
        var i, j, k;
        if ((window.gtag && !(null === (i = _f.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', _f.event, _f.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = _f.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: _f.event,
            properties: _f.properties,
            force: _f.forcePostHog
        });
    };
}), a.register('GqzrW', function(b, c) {
    _f(b.exports, 'useWillUnmount', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        (0, d.useEffect)(function() {
            return _f;
        }, []);
    }
}), a.register('jnjmk3', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F1Ocd'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PaperClipOutlined';
    var _i = e.forwardRef(h);
}), a.register('F1Ocd', function(b, c) {
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
                    d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z'
                }
            }]
        },
        name: 'paper-clip',
        theme: 'outlined'
    };
}), a.register('ZYBJo4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CHYV/2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('CHYV/2', function(b, c) {
    _h(b.exports, 'default', function() {
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
                        d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z'
                    }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
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
    _b(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _b(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _b(b.exports, 'default', function() {
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
}), a.register('d1E7w3', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('oBBW6'),
        f = a('LEQ5w');
    const g = f.lazy(() => a('7cBN63'));
    var _h = _b => {
        const i = _b.hideSkeleton ? (0, d.jsx)('div', {
            className: 'maxWidth'
        }) : (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(e.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, d.jsx)(f.Suspense, {
            fallback: i,
            children: (0, d.jsx)(g, {
                ..._b
            })
        });
    };
}), a.register('7cBN63', function(_b, c) {
    _b.exports = Promise.all([
        a('o60By')(new URL(a('HmN9A').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + a('HmN9A').resolve('6iUO5'))
    ]).then(() => a('cg5Ud'));
}), a.register('LvSG/', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yXL4x'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ClockCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('yXL4x', function(b, c) {
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
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
                    }
                }
            ]
        },
        name: 'clock-circle',
        theme: 'outlined'
    };
}), a.register('AIgxT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yqz0G'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'TrophyOutlined';
    var _i = e.forwardRef(h);
}), a.register('yqz0G', function(b, c) {
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
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), a.register('RMEzW', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
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
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
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
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), a.register('xoHbD', function(b, c) {
    _i(b.exports, 'CLASSIC', function() {
        return _d;
    }), _i(b.exports, 'TEAMS', function() {
        return _e;
    }), _i(b.exports, 'THANOS', function() {
        return _f;
    }), _i(b.exports, 'BOSS_BATTLE', function() {
        return _g;
    }), _i(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _h;
    }), _i(b.exports, 'LAVA', function() {
        return _i;
    }), _i(b.exports, 'IMPOSTER', function() {
        return _j;
    }), _i(b.exports, 'DRAW', function() {
        return _k;
    }), _i(b.exports, 'PARDY', function() {
        return _l;
    });
    const _d = 'CLASSIC',
        _e = 'TEAMS',
        _f = 'THANOS',
        _g = 'BOSS_BATTLE',
        _h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _i = 'LAVA',
        _j = 'IMPOSTER',
        _k = 'DRAW',
        _l = 'PARDY';
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
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
}), a.register('66RLp2', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
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
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * _o(A / 70)).toFixed(3), 'deg)'));
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
}), a.register('I1JN8', function(b, c) {
    _f(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0qmC91'),
        g = a('PMl60');
    var _h = _f => {
        const [i, j] = e.useState([]), [k] = e.useState(_f.limit), [l, m] = e.useState(_f.defaultPage), [n, _o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (_f.modifyItems ? _f.modifyItems(p) : p).map((i, j) => _f.toRender(i, j)), [
            p.length,
            _f.toRender
        ]), u = () => {
            if (i.includes(l))
                return;
            j(_f => [
                ..._f,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: _f.url,
                method: 'post',
                cacheKey: _f.cacheKey,
                data: _f.modifyBody ? _f.modifyBody(v) : v,
                success: (i, j) => {
                    _f.onTotalItems && !r && (_f.onTotalItems(i.totalItems), s(!0)), i.items.forEach(i => {
                        _f.onItemFetched && _f.onItemFetched(i, j);
                    }), q(_f => [
                        ..._f,
                        ...i.items
                    ]), _o(i.hasNextPage), m(i.nextPage);
                },
                error: () => {
                    _f.onTotalItems && !r && (_f.onTotalItems(0), s(!0)), _o(!1);
                },
                both: () => j(_f => _f.filter(_f => _f !== v.page))
            });
        };
        return e.useEffect(u, []), !n && _f.forceEmptyMessage || !n && 0 === p.length && _f.emptyMessage ? _f.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: _f.scrollStyle,
            next: u,
            loader: _f.loader || (0, d.jsx)('div', {}),
            scrollThreshold: _f.scrollThreshold,
            endMessage: _f.endMessage ? _f.endMessage(p) : null,
            scrollableTarget: _f.scrollableTarget,
            children: [
                _f.prefix ? _f.prefix() : null,
                t
            ]
        });
    };
}), a.register('7s5R80', function(b, c) {
    _f(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _f => (0, d.jsx)(_i, {
        onClick: _f.onClick,
        className: _f.className,
        style: _f.style,
        children: _f.children
    });
    const _i = e.default.div(g || (g = (_f => _f)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('vj5K40', function(b, c) {
    _f(b.exports, 'GetHomepagePath', function() {
        return _h;
    }), _f(b.exports, 'RedirectToHomepage', function() {
        return _i;
    }), _f(b.exports, 'ReplaceToHomePage', function() {
        return _j;
    });
    var d = a('gs4MT'),
        e = a('oBJ9G'),
        f = a('PMl60'),
        g = a('jzxyj10');
    const _h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        _i = () => {
            (0, g.NavigateTo)(_h());
        },
        _j = () => {
            e.history.replace(_h());
        };
}), a.register('gi1Ds0', function(b, c) {
    _f(b.exports, 'UpgradeModal_CopyKit', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('hHkFq');
    const _f = {
        title: (0, d.jsx)(d.Fragment, {
            children: 'Copy kits with Pro'
        }),
        description: (0, d.jsxs)(d.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                e.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), a.register('VckKB', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e() {
        const [, _f] = d.useReducer(_f => _f + 1, 0);
        return _f;
    }
}), a.register('fuuXY5', function(b, c) {
    _h(b.exports, 'responsiveArray', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('XpGPm');
    const _f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _g() {
        const [, _h] = (0, e.useToken)(), i = (_h => ({
            xs: `(max-width: ${ _h.screenXSMax }px)`,
            sm: `(min-width: ${ _h.screenSM }px)`,
            md: `(min-width: ${ _h.screenMD }px)`,
            lg: `(min-width: ${ _h.screenLG }px)`,
            xl: `(min-width: ${ _h.screenXL }px)`,
            xxl: `(min-width: ${ _h.screenXXL }px)`
        }))((_h => {
            const j = _h,
                k = [].concat(_f).reverse();
            return k.forEach((_h, b) => {
                const l = _h.toUpperCase(),
                    m = `screen${ l }Min`,
                    n = `screen${ l }`;
                if (!(j[m] <= j[n]))
                    throw new Error(`${ m }<=${ n } fails : !(${ j[m] }<=${ j[n] })`);
                if (b < k.length - 1) {
                    const o = `screen${ l }Max`;
                    if (!(j[n] <= j[o]))
                        throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                    const p = `screen${ k[b + 1].toUpperCase() }Min`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                }
            }), _h;
        })(_h));
        return _k(d).useMemo(() => {
            const j = new Map();
            let _k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: _k => (l = _k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(m) {
                    return j.size || this.register(), _k += 1, j.set(_k, m), m(l), _k;
                },
                unsubscribe(m) {
                    j.delete(m), j.size || this.unregister();
                },
                unregister() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = this.matchHandlers[m];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener);
                    }), j.clear();
                },
                register() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = m => {
                                let {
                                    matches: o
                                } = m;
                                this.dispatch(Object.assign(Object.assign({}, l), {
                                    [j]: o
                                }));
                            },
                            o = window.matchMedia(m);
                        o.addListener(n), this.matchHandlers[m] = {
                            mql: o,
                            listener: n
                        }, n(o);
                    });
                },
                responsiveMap: i
            };
        }, [_h]);
    }
}), a.register('7B+hJ16', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
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
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
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
}), a.register('XCvA52', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Onj9L2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ShareAltOutlined';
    var _i = e.forwardRef(h);
}), a.register('Onj9L2', function(b, c) {
    _b(b.exports, 'default', function() {
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
                    d: 'M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z'
                }
            }]
        },
        name: 'share-alt',
        theme: 'outlined'
    };
}), a.register('PjBn7', function(_b, c) {
    'function' == typeof Object.create ? _b.exports = function(d, e) {
        e && (d.super_ = e, d.prototype = Object.create(e.prototype, {
            constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : _b.exports = function(d, e) {
        if (e) {
            d.super_ = e;
            var f = function() {};
            f.prototype = e.prototype, d.prototype = new f(), d.prototype.constructor = d;
        }
    };
}), a.register('RC6kl3', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('KAA9h2');
    var _f = _d => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: _d.className,
            children: _d.children
        });
    };
}), a.register('KAA9h2', function(b, c) {
    _d(b.exports, 'use100vh', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('LEQ5w'),
        e = function() {
            return e = Object.assign || function(f) {
                for (var g, h = 1, i = arguments.length; h < i; h++)
                    for (var j in g = arguments[h])
                        Object.prototype.hasOwnProperty.call(g, j) && (f[j] = g[j]);
                return f;
            }, e.apply(this, arguments);
        },
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        },
        g = !1,
        h = (0, d.forwardRef)(function(i, j) {
            var k = i.style,
                l = f(i, ['style']),
                m = _i();
            !g && (null == k ? void 0 : k.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var n = e(e({}, k), {
                height: m ? m + 'px' : '100vh'
            });
            return _k(d).createElement('div', e({
                ref: j,
                style: n
            }, l));
        });
    h.displayName = 'Div100vh';

    function _i() {
        var j = (0, d.useState)(_i),
            _k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    _i() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = _i();
                l(o);
            }
        }, [m]), m ? _k : null;
    }

    function _i() {
        return _i() ? window.innerHeight : null;
    }

    function _i() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), a.register('xe9IK1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('n3LQ31'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'SaveOutlined';
    var _i = e.forwardRef(h);
}), a.register('n3LQ31', function(b, c) {
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
                    d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z'
                }
            }]
        },
        name: 'save',
        theme: 'outlined'
    };
}), a.register('PElTf4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F10jM4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var _i = e.forwardRef(h);
}), a.register('F10jM4', function(b, c) {
    _h(b.exports, 'default', function() {
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
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
}), a.register('UapK50', function(b, c) {
    _h(b.exports, 'useQuery', function() {
        return _g;
    });
    var d = a('2t6d7'),
        e = a('8vKO6'),
        f = a('ieFEX0');

    function _g(_h, i, j) {
        const k = (0, d.parseQueryArgs)(_h, i, j);
        return (0, f.useBaseQuery)(k, e.QueryObserver);
    }
}), a.register('8vKO6', function(b, c) {
    _j(b.exports, 'QueryObserver', function() {
        return _i;
    });
    var d = a('2t6d7'),
        e = a('RIL5Y'),
        f = a('dY97x'),
        g = a('4a43e'),
        h = a('zNMaW');
    class _i extends g.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), _j(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return _r(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return _r(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(_j, k) {
            const l = this.options,
                m = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(_j), (0, d.shallowEqualObjects)(l, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = l.queryKey), this.updateQuery();
            const n = this.hasListeners();
            n && _j(this.currentQuery, m, this.options, l) && this.executeFetch(), this.updateResult(k), !n || this.currentQuery === m && this.options.enabled === l.enabled && this.options.staleTime === l.staleTime || this.updateStaleTimeout();
            const o = this.computeRefetchInterval();
            !n || this.currentQuery === m && this.options.enabled === l.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o);
        }
        getOptimisticResult(j) {
            const k = this.client.getQueryCache().build(this.client, j);
            return this.createResult(k, j);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(j) {
            const k = {};
            return Object.keys(j).forEach(a => {
                Object.defineProperty(k, a, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(a), j[a])
                });
            }), k;
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({
            refetchPage: j,
            ...k
        } = {}) {
            return this.fetch({
                ...k,
                meta: {
                    refetchPage: j
                }
            });
        }
        fetchOptimistic(j) {
            const k = this.client.defaultQueryOptions(j),
                l = this.client.getQueryCache().build(this.client, k);
            return l.isFetchingOptimistic = !0, l.fetch().then(() => this.createResult(l, k));
        }
        fetch(j) {
            var k;
            return this.executeFetch({
                ...j,
                cancelRefetch: null == (k = j.cancelRefetch) || k
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(j) {
            this.updateQuery();
            let k = this.currentQuery.fetch(this.options, j);
            return null != j && j.throwOnError || (k = k.catch(d.noop)), k;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), d.isServer || this.currentResult.isStale || !(0, d.isValidTimeout)(this.options.staleTime))
                return;
            const j = (0, d.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, j);
        }
        computeRefetchInterval() {
            var j;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (j = this.options.refetchInterval) && j;
        }
        updateRefetchInterval(j) {
            this.clearRefetchInterval(), this.currentRefetchInterval = j, !d.isServer && !1 !== this.options.enabled && (0, d.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || f.focusManager.isFocused()) && this.executeFetch();
            }, this.currentRefetchInterval));
        }
        updateTimers() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
        }
        clearRefetchInterval() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
        }
        createResult(j, k) {
            const l = this.currentQuery,
                m = this.options,
                n = this.currentResult,
                o = this.currentResultState,
                p = this.currentResultOptions,
                q = j !== l,
                _r = q ? j.state : this.currentQueryInitialState,
                s = q ? this.currentResult : this.previousQueryResult,
                {
                    state: t
                } = j;
            let u, {
                    dataUpdatedAt: v,
                    error: w,
                    errorUpdatedAt: x,
                    fetchStatus: y,
                    status: z
                } = t,
                A = !1,
                B = !1;
            if (k._optimisticResults) {
                const C = this.hasListeners(),
                    D = !C && _j(j, k),
                    E = C && _j(j, l, k, m);
                (D || E) && (y = (0, h.canFetch)(j.options.networkMode) ? 'fetching' : 'paused', v || (z = 'loading')), 'isRestoring' === k._optimisticResults && (y = 'idle');
            }
            if (k.keepPreviousData && !t.dataUpdatedAt && null != s && s.isSuccess && 'error' !== z)
                u = s.data, v = s.dataUpdatedAt, z = s.status, A = !0;
            else if (k.select && void 0 !== t.data)
                if (n && t.data === (null == o ? void 0 : o.data) && k.select === this.selectFn)
                    u = this.selectResult;
                else
                    try {
                        this.selectFn = k.select, u = k.select(t.data), u = (0, d.replaceData)(null == n ? void 0 : n.data, u, k), this.selectResult = u, this.selectError = null;
                    } catch (j) {
                        this.selectError = j;
                    }
            else
                u = t.data;
            if (void 0 !== k.placeholderData && void 0 === u && 'loading' === z) {
                let C;
                if (null != n && n.isPlaceholderData && k.placeholderData === (null == p ? void 0 : p.placeholderData))
                    C = n.data;
                else if (C = 'function' == typeof k.placeholderData ? k.placeholderData() : k.placeholderData, k.select && void 0 !== C)
                    try {
                        C = k.select(C), this.selectError = null;
                    } catch (C) {
                        this.selectError = C;
                    }
                void 0 !== C && (z = 'success', u = (0, d.replaceData)(null == n ? void 0 : n.data, C, k), B = !0);
            }
            this.selectError && (w = this.selectError, u = this.selectResult, x = Date.now(), z = 'error');
            const C = 'fetching' === y,
                D = 'loading' === z,
                E = 'error' === z;
            return {
                status: z,
                fetchStatus: y,
                isLoading: D,
                isSuccess: 'success' === z,
                isError: E,
                isInitialLoading: D && C,
                data: u,
                dataUpdatedAt: v,
                error: w,
                errorUpdatedAt: x,
                failureCount: t.fetchFailureCount,
                failureReason: t.fetchFailureReason,
                errorUpdateCount: t.errorUpdateCount,
                isFetched: t.dataUpdateCount > 0 || t.errorUpdateCount > 0,
                isFetchedAfterMount: t.dataUpdateCount > _r.dataUpdateCount || t.errorUpdateCount > _r.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !D,
                isLoadingError: E && 0 === t.dataUpdatedAt,
                isPaused: 'paused' === y,
                isPlaceholderData: B,
                isPreviousData: A,
                isRefetchError: E && 0 !== t.dataUpdatedAt,
                isStale: _j(j, k),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(j) {
            const k = this.currentResult,
                l = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, d.shallowEqualObjects)(l, k))
                return;
            this.currentResult = l;
            const m = {
                cache: !0
            };
            !1 !== (null == j ? void 0 : j.listeners) && (() => {
                if (!k)
                    return !0;
                const {
                    notifyOnChangeProps: n
                } = this.options;
                if ('all' === n || !n && !this.trackedProps.size)
                    return !0;
                const o = new Set(null != n ? n : this.trackedProps);
                return this.options.useErrorBoundary && o.add('error'), Object.keys(this.currentResult).some(n => {
                    const p = n;
                    return this.currentResult[p] !== k[p] && o.has(p);
                });
            })() && (m.listeners = !0), this.notify({
                ...m,
                ...j
            });
        }
        updateQuery() {
            const j = this.client.getQueryCache().build(this.client, this.options);
            if (j === this.currentQuery)
                return;
            const k = this.currentQuery;
            this.currentQuery = j, this.currentQueryInitialState = j.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == k || k.removeObserver(this), j.addObserver(this));
        }
        onQueryUpdate(j) {
            const k = {};
            'success' === j.type ? k.onSuccess = !j.manual : 'error' !== j.type || (0, h.isCancelledError)(j.error) || (k.onError = !0), this.updateResult(k), this.hasListeners() && this.updateTimers();
        }
        notify(j) {
            e.notifyManager.batch(() => {
                var k, l, m, n;
                if (j.onSuccess)
                    null == (k = (l = this.options).onSuccess) || k.call(l, this.currentResult.data), null == (m = (n = this.options).onSettled) || m.call(n, this.currentResult.data, null);
                else if (j.onError) {
                    var o, p, q, r;
                    null == (o = (p = this.options).onError) || o.call(p, this.currentResult.error), null == (q = (r = this.options).onSettled) || q.call(r, void 0, this.currentResult.error);
                }
                j.listeners && this.listeners.forEach(j => {
                    j(this.currentResult);
                }), j.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated'
                });
            });
        }
        constructor(j, k) {
            super(), this.client = j, this.options = k, this.trackedProps = new Set(), this.selectError = null, this.bindMethods(), this.setOptions(k);
        }
    }

    function _j(k, l) {
        return function(m, n) {
            return !(!1 === n.enabled || m.state.dataUpdatedAt || 'error' === m.state.status && !1 === n.retryOnMount);
        }(k, l) || k.state.dataUpdatedAt > 0 && _j(k, l, l.refetchOnMount);
    }

    function _j(k, l, m) {
        if (!1 !== l.enabled) {
            const n = 'function' == typeof m ? m(k) : m;
            return 'always' === n || !1 !== n && _j(k, l);
        }
        return !1;
    }

    function _j(k, l, m, n) {
        return !1 !== m.enabled && (k !== l || !1 === n.enabled) && (!m.suspense || 'error' !== k.state.status) && _j(k, m);
    }

    function _j(k, l) {
        return k.isStaleByTime(l.staleTime);
    }
}), a.register('ieFEX0', function(b, c) {
    _m(b.exports, 'useBaseQuery', function() {
        return _l;
    });
    var d = a('LEQ5w'),
        e = a('xpX2C0'),
        f = a('RIL5Y'),
        g = a('UNaPz0'),
        h = a('sQsFp'),
        i = a('1fweX0'),
        j = a('4u2XL'),
        k = a('NxV+5');

    function _l(_m, n) {
        const o = (0, h.useQueryClient)({
                context: _m.context
            }),
            p = (0, i.useIsRestoring)(),
            q = (0, g.useQueryErrorResetBoundary)(),
            r = o.defaultQueryOptions(_m);
        r._optimisticResults = p ? 'isRestoring' : 'optimistic', r.onError && (r.onError = f.notifyManager.batchCalls(r.onError)), r.onSuccess && (r.onSuccess = f.notifyManager.batchCalls(r.onSuccess)), r.onSettled && (r.onSettled = f.notifyManager.batchCalls(r.onSettled)), (0, k.ensureStaleTime)(r), (0, j.ensurePreventErrorBoundaryRetry)(r, q), (0, j.useClearResetErrorBoundary)(q);
        const [s] = d.useState(() => new n(o, r)), t = s.getOptimisticResult(r);
        if ((0, e.useSyncExternalStore)(d.useCallback(_m => p ? () => {} : s.subscribe(f.notifyManager.batchCalls(_m)), [
                s,
                p
            ]), () => s.getCurrentResult(), () => s.getCurrentResult()), d.useEffect(() => {
                s.setOptions(r, {
                    listeners: !1
                });
            }, [
                r,
                s
            ]), (0, k.shouldSuspend)(r, t, p))
            throw (0, k.fetchOptimistic)(r, s, q);
        if ((0, j.getHasError)({
                result: t,
                errorResetBoundary: q,
                useErrorBoundary: r.useErrorBoundary,
                query: s.getCurrentQuery()
            }))
            throw t.error;
        return r.notifyOnChangeProps ? t : s.trackResult(t);
    }
}), a.register('xpX2C0', function(b, c) {
    _b(b.exports, 'useSyncExternalStore', function() {
        return _d;
    });
    const _d = a('/iQ5b0').useSyncExternalStore;
}), a.register('/iQ5b0', function(_b, c) {
    _b.exports = a('fpwmq');
}), a.register('fpwmq', function(b, c) {
    var d;
    _e(b.exports, 'useSyncExternalStore', function() {
        return d;
    }, function(_e) {
        return d = _e;
    });
    var e = a('LEQ5w');
    var f = 'function' == typeof Object.is ? Object.is : function(g, h) {
            return g === h && (0 !== g || 1 / g == 1 / h) || g != g && h != h;
        },
        g = e.useState,
        h = e.useEffect,
        i = e.useLayoutEffect,
        j = e.useDebugValue;

    function k(l) {
        var m = l.getSnapshot;
        l = l.value;
        try {
            var n = m();
            return !f(l, n);
        } catch (l) {
            return !0;
        }
    }
    var k = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(l, m) {
        return m();
    } : function(l, m) {
        var n = m(),
            o = g({
                inst: {
                    value: n,
                    getSnapshot: m
                }
            }),
            p = o[0].inst,
            q = o[1];
        return i(function() {
            p.value = n, p.getSnapshot = m, _k(p) && q({
                inst: p
            });
        }, [
            l,
            n,
            m
        ]), h(function() {
            return _k(p) && q({
                inst: p
            }), l(function() {
                _k(p) && q({
                    inst: p
                });
            });
        }, [l]), j(n), n;
    };
    d = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : k;
}), a.register('UNaPz0', function(b, c) {
    _f(b.exports, 'useQueryErrorResetBoundary', function() {
        return _f;
    });
    var d = a('LEQ5w');

    function e() {
        let _f = !1;
        return {
            clearReset: () => {
                _f = !1;
            },
            reset: () => {
                _f = !0;
            },
            isReset: () => _f
        };
    }
    const e = d.createContext(_e()),
        _f = () => d.useContext(e);
}), a.register('1fweX0', function(b, c) {
    _i(b.exports, 'useIsRestoring', function() {
        return _f;
    });
    var d = a('LEQ5w');
    const _e = d.createContext(!1),
        _f = () => d.useContext(_e);
    _e.Provider;
}), a.register('4u2XL', function(b, c) {
    _i(b.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return _f;
    }), _i(b.exports, 'useClearResetErrorBoundary', function() {
        return _g;
    }), _i(b.exports, 'getHasError', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('rZKae');
    const _f = (_i, b) => {
            (_i.suspense || _i.useErrorBoundary) && (b.isReset() || (_i.retryOnMount = !1));
        },
        _g = _i => {
            d.useEffect(() => {
                _i.clearReset();
            }, [_i]);
        },
        _h = ({
            result: _i,
            errorResetBoundary: j,
            useErrorBoundary: k,
            query: l
        }) => _i.isError && !j.isReset() && !_i.isFetching && (0, e.shouldThrowError)(k, [
            _i.error,
            l
        ]);
}), a.register('rZKae', function(b, c) {
    function d(e, f) {
        return 'function' == typeof e ? e(...f) : !!e;
    }
    _q(b.exports, 'shouldThrowError', function() {
        return _d;
    });
}), a.register('NxV+5', function(b, c) {
    _q(b.exports, 'ensureStaleTime', function() {
        return _d;
    }), _q(b.exports, 'shouldSuspend', function() {
        return _e;
    }), _q(b.exports, 'fetchOptimistic', function() {
        return _f;
    });
    const _d = _q => {
            _q.suspense && 'number' != typeof _q.staleTime && (_q.staleTime = 1000);
        },
        _e = (_q, b, c) => (null == _q ? void 0 : _q.suspense) && ((_q, b) => _q.isLoading && _q.isFetching && !b)(b, c),
        _f = (_q, b, c) => b.fetchOptimistic(_q).then(({
            data: g
        }) => {
            null == _q.onSuccess || _q.onSuccess(g), null == _q.onSettled || _q.onSettled(g, null);
        }).catch(g => {
            c.clearReset(), null == _q.onError || _q.onError(g), null == _q.onSettled || _q.onSettled(void 0, g);
        });
}), a.register('3Zk7y', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('inwN3'),
        f = a('Kc6XZ23'),
        g = a('+HMq30');
    var _h = _q => (0, d.jsx)(g.default, {
        emoji: _q.emoji,
        title: _q.title,
        description: _q.description,
        children: (0, d.jsx)(e.default, {
            value: _q.value,
            style: {
                width: _q.customWidth || f.default.optionWidth
            },
            size: 'large',
            onChange: b => _q.onValueChanged(b),
            disabled: _q.readOnly,
            children: _q.options.map(b => (0, d.jsx)(e.default.Option, {
                value: b.value,
                children: b.name
            }, `${ _q.title || 'no-title' }-${ b.value }`))
        })
    });
}), a.register('+HMq30', function(b, c) {
    _q(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('F5NRv');
    var _f = _q => (0, d.jsxs)(e.OptionContainer, {
        children: [
            (0, d.jsxs)(e.OptionInfoContainer, {
                children: [
                    _q.emoji ? (0, d.jsx)(e.OptionEmoji, {
                        children: _q.emoji
                    }) : null,
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(e.OptionTitle, {
                                children: _q.title
                            }),
                            _q.description ? (0, d.jsx)(e.OptionDescription, {
                                children: _q.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, d.jsx)(e.OptionChangerContainer, {
                children: _q.children
            })
        ]
    });
}), a.register('F5NRv', function(b, c) {
    _q(b.exports, 'OptionContainer', function() {
        return _m;
    }), _q(b.exports, 'OptionInfoContainer', function() {
        return _n;
    }), _q(b.exports, 'OptionEmoji', function() {
        return _o;
    }), _q(b.exports, 'OptionTitle', function() {
        return _p;
    }), _q(b.exports, 'OptionDescription', function() {
        return _q;
    }), _q(b.exports, 'OptionChangerContainer', function() {
        return _r;
    });
    var d = a('b5kvC'),
        e = a('Axq+p');
    let f, g, h, i, j, _k, l = _q => _q;
    const _m = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(f || (f = l`
  box-sizing: border-box;
  padding: 13px 20px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.23s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`)),
        _n = e.default.div.attrs({
            className: 'flex vc'
        })(g || (g = l``)),
        _o = e.default.div(h || (h = l`
  font-size: 23px;
  margin-right: 10px;
`)),
        _p = e.default.div(i || (i = l`
  font-size: 23px;
  font-weight: ${ 0 };
`), d.FontWeights.Bold),
        _q = e.default.div(j || (j = l`
  font-size: 15px;
  margin-top: -2px;
`)),
        _r = e.default.div(_k || (_k = l`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), a.register('3xvhx', function(b, c) {
    _q(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Kc6XZ23'),
        g = a('xi+Va0'),
        h = a('+HMq30'),
        i = a('4iV4e'),
        j = a('rw8oD0');
    var _k = _q => {
        const l = e.useCallback(l => {
            if ((0, i.isNil)(l) && _q.allowEmpty)
                return l;
            let m = l ? _q.step ? Math.round(l / _q.step) * _q.step : l : 0;
            return !(0, i.isNil)(_q.min) && m < _q.min ? m = _q.min : !(0, i.isNil)(_q.max) && m > _q.max && (m = _q.max), m;
        }, [
            _q.max,
            _q.min,
            _q.step
        ]);
        e.useEffect(() => {
            (0, i.isNil)(_q.value) || _q.max && _q.value > _q.max && a(l(_q.max));
        }, [
            _q.value,
            _q.max
        ]);
        const m = m => {
            _q.onValueChanged(l(m));
        };
        return (0, d.jsx)(h.default, {
            emoji: _q.emoji,
            title: _q.title,
            description: _q.description,
            children: (0, d.jsx)(j.default, {
                size: 'large',
                formatter: g.default,
                value: _q.value,
                max: _q.max,
                min: _q.min,
                step: _q.step,
                style: {
                    width: _q.customWidth || f.default.optionWidth
                },
                onChange: m,
                disabled: _q.readOnly
            })
        });
    };
}), a.register('xi+Va0', function(b, c) {
    _q(b.exports, 'default', function() {
        return _e;
    });
    var d = a('PMl60');
    var _e = _q => '' === _q ? '' : isNaN(Number(_q)) ? String(_q) : (0, d.numberWithCommas)(Number(_q));
}), a.register('rw8oD0', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('GnfDG'),
        f = a('LEQ5w'),
        g = a('PMl60');
    var _h = _q => {
        const [i, j] = f.useState(_q.value), [k, l] = f.useState(_q.value), [m, n, o] = (0, g.useBoolean)(!1);
        f.useEffect(() => {
            l(_q.value), j(_q.value);
        }, [_q.value]);
        return (0, d.jsx)(e.default, {
            ..._q,
            value: m ? i : k,
            onChange: _q => {
                j(_q);
            },
            onFocus: n,
            onBlur: () => {
                i !== k && _q.onChange(i), o(), j(_q.value);
            }
        });
    };
}), a.register('Au/8t', function(b, c) {
    _q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('4iV4e'),
        e = a('QdGLB'),
        f = a('y4x7Q');
    const g = (_q, b) => {
        var h;
        return null === (h = JSON.parse(localStorage.getItem(f.LocalStorageNames.hookSavedOptions) || '{}')[b]) || void 0 === h ? void 0 : h[_q];
    };
    var _h = _q => {
        var i;
        const {
            hookJSON: j,
            experienceId: k,
            kitId: l
        } = _q, m = {};
        return null == j || null === (i = j.hooks) || void 0 === i || i.forEach(_q => {
            if (_q.type === e.HookType.kit)
                m[_q.key] = l || '';
            else if (_q.type == e.HookType.selectBox) {
                const n = _q.options;
                if (n.options.length) {
                    let o = n.options.find(_q => _q === n.defaultOption) || n.options[0];
                    if (k) {
                        const p = g(_q.key, k);
                        if (p) {
                            const _q = n.options.find(_q => _q === p);
                            _q && (o = _q);
                        }
                    }
                    o && (m[_q.key] = o);
                }
            } else if (_q.type === e.HookType.number) {
                const n = _q.options;
                let o = n.defaultValue;
                if (k) {
                    const p = g(_q.key, k);
                    if (!(0, d.isNil)(p) && 'number' == typeof p) {
                        let _q = !1;
                        ((0, d.isNil)(n.min) || p > n.min) && ((0, d.isNil)(n.max) || p < n.max) && ((0, d.isNil)(n.step) || p % n.step == 0) && (_q = !0), _q && (o = p);
                    }
                }
                m[_k.key] = o;
            }
        }), m;
    };
}), a.register('bkqTR0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('YuT/D'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('lNnfg0'),
        i = a('EMEuh'),
        j = a('OW0Rw'),
        k = a('Au/8t');
    var _l = (0, f.observer)(_k => {
        const [m] = g.useState(() => (0, e.observable)(_k.defaultState || (0, k.default)({
            hookJSON: _k.hooks
        }))), n = (_k, n) => {
            m[_k] = n;
        }, o = (0, e.toJS)(m), p = JSON.stringify(o);
        g.useEffect(() => {
            _k.onConnectedResourcesChange && _k.onConnectedResourcesChange((0, i.default)(_k, o)), _k.readOnly || _k.onStateChange && _k.onStateChange(o);
        }, [
            p,
            _k.readOnly
        ]);
        const q = (0, j.default)(_k, o);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                _k.header ? _k.header(q.length) : null,
                q.map((m, e) => (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(h.default, {
                            hook: m,
                            state: o,
                            modifyState: n,
                            location: _k.location,
                            readOnly: _k.readOnly
                        }),
                        e !== q.length - 1 && (0, d.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ m.key }`)),
                _k.footer ? _k.footer(q.length) : null
            ]
        });
    });
}), a.register('lNnfg0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('QdGLB'),
        f = a('Go7vp0'),
        g = a('WD3Or0'),
        h = a('2+eTi0');
    var _i = _k => {
        const j = _k.state[_k.hook.key],
            k = j => {
                _k.modifyState(_k.hook.key, j);
            };
        return _k.hook.type === e.HookType.selectBox ? (0, d.jsx)(h.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            readOnly: _k.readOnly
        }) : _k.hook.type === e.HookType.kit ? (0, d.jsx)(f.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            location: _k.location,
            readOnly: _k.readOnly
        }) : _k.hook.type === e.HookType.number ? (0, d.jsx)(g.default, {
            value: j,
            onChange: k,
            hook: _k.hook,
            readOnly: _k.readOnly
        }) : null;
    };
}), a.register('Go7vp0', function(b, c) {
    _k(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('0AfFP'),
        f = a('ED5Qu0'),
        g = a('uQgEt0');
    var _h = _k => {
        let {
            title: i,
            description: j
        } = (0, g.default)(_k.hook);
        if (_k.location === f.HookFormLocation.editor) {
            const _k = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            j ? j += ` - ${ _k }` : j = _k;
        }
        return (0, d.jsx)(e.default, {
            title: i,
            description: j,
            value: _m.value,
            onValueChanged: _m.onChange,
            placeholder: 'Kit ID',
            readOnly: _m.readOnly
        });
    };
}), a.register('0AfFP', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ewwAh'),
        f = a('Kc6XZ23'),
        g = a('+HMq30');
    var _h = _m => (0, d.jsx)(g.default, {
        emoji: _m.emoji,
        title: _m.title,
        description: _m.description,
        children: (0, d.jsx)(e.default, {
            size: 'large',
            value: _m.value,
            placeholder: _m.placeholder,
            style: {
                width: _m.customWidth || f.default.optionWidth
            },
            onChange: b => {
                _m.onValueChanged(b.target.value);
            },
            disabled: _m.readOnly
        })
    });
}), a.register('ED5Qu0', function(b, c) {
    let d;
    var e;
    let f;
    _m(b.exports, 'HookFormLocation', function() {
        return d;
    }), _m(b.exports, 'IHookConnectedResourceType', function() {
        return f;
    }), (e = d || (d = {})).editor = 'editor', e.experiencePicker = 'experiencePicker', (f || (f = {})).kit = 'kit';
}), a.register('uQgEt0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = _m => {
        let e, f;
        return e = _m.key, _m.displayName && (e = _m.displayName), _m.displayDescription && (f = _m.displayDescription), {
            title: e,
            description: f
        };
    };
}), a.register('WD3Or0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('4iV4e');
    a('LEQ5w');
    var f = a('3xvhx'),
        g = a('uQgEt0');
    var _h = _m => {
        const {
            title: i,
            description: j
        } = (0, g.default)(_m.hook), k = _m.hook.options;
        return (0, d.jsx)(f.default, {
            title: i,
            description: j,
            value: _m.value,
            onValueChanged: i => {
                !(0, e.isNil)(i) || (0, e.isNil)(k.defaultValue) ? _m.onChange(i): _m.onChange(k.defaultValue);
            },
            min: k.min,
            max: k.max,
            step: k.step,
            allowEmpty: !0,
            readOnly: _m.readOnly
        });
    };
}), a.register('2+eTi0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('3Zk7y'),
        f = a('uQgEt0');
    var _g = _m => {
        const {
            title: h,
            description: i
        } = (0, f.default)(_m.hook), j = _m.hook.options;
        return (0, d.jsx)(e.default, {
            title: h,
            description: i,
            value: _m.value,
            onValueChanged: _m.onChange,
            options: j.options.map(_m => ({
                value: _m,
                name: _m
            })),
            readOnly: _m.readOnly
        });
    };
}), a.register('EMEuh', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('4iV4e'),
        e = a('QdGLB'),
        f = a('ED5Qu0'),
        g = a('OW0Rw');
    var _h = (_m, b) => {
        const i = [];
        return (0, g.default)({
            ..._m,
            location: f.HookFormLocation.editor
        }, b).forEach(_m => {
            _m.type === e.HookType.kit && b[_m.key] && i.push({
                type: f.IHookConnectedResourceType.kit,
                value: b[_m.key]
            });
        }), (0, d.uniqBy)(i, 'value');
    };
}), a.register('OW0Rw', function(b, c) {
    _m(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Rq6L+0'),
        e = a('QdGLB'),
        f = a('ED5Qu0');
    var _g = (_m, b) => {
        var h, i;
        const j = [];
        return null == _m || null === (h = _m.hooks) || void 0 === h || null === (i = h.hooks) || void 0 === i || i.forEach(h => {
            var k;
            if (h.type === e.HookType.kit) {
                if (!!b[h.key] && _m.location === f.HookFormLocation.experiencePicker)
                    return;
            }
            if (h.type === e.HookType.selectBox) {
                var l;
                const _m = h.options;
                if (!(null == _m || null === (l = _m.options) || void 0 === l ? void 0 : l.length))
                    return;
            }
            (null == h || null === (k = h.hiddenScenarios) || void 0 === k ? void 0 : k.find(h => {
                var l, m;
                if (!!!(null === (l = h.conditions) || void 0 === l ? void 0 : l.length))
                    return !1;
                return !!(null === (m = h.conditions) || void 0 === m ? void 0 : m.every(h => {
                    if (h.type === d.HiddenConditionType.hookValue) {
                        const n = h.options,
                            o = n.value,
                            p = b[n.key];
                        if (n.compare === d.HookValueHiddenConditionCompare.equal) {
                            if (o == p)
                                return !0;
                        } else if (n.compare === d.HookValueHiddenConditionCompare.notEqual && o != p)
                            return !0;
                    } else if (h.type === d.HiddenConditionType.modeType) {
                        const n = e.modeType,
                            o = h.options;
                        return o.compare === d.ModeTypeHiddenConditionCompare.equal ? n === o.mode : n !== o.mode;
                    }
                    return !1;
                }));
            })) || j.push(h);
        }), j;
    };
}), a.register('Rq6L+0', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    e(b.exports, 'HiddenConditionType', function() {
        return d;
    }), e(b.exports, 'HookValueHiddenConditionCompare', function() {
        return f;
    }), e(b.exports, 'ModeTypeHiddenConditionCompare', function() {
        return h;
    }), (e = d || (d = {})).hookValue = 'hookValue', e.modeType = 'modeType', (g = f || (f = {})).equal = 'EQUAL', g.notEqual = 'NOT_EQUAL', (i = h || (h = {})).equal = 'EQUAL', i.notEqual = 'NOT_EQUAL';
});