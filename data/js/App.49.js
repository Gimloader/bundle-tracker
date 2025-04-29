function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('tp0BJ', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _r;
    });
    var g = c('gRbUn');
    c('O0Kav');
    var h = c('UAOHi'),
        i = c('I+d/B'),
        j = c('jw1ib'),
        k = c('zcfNM'),
        l = c('6jmvl'),
        m = c('bE1mJ'),
        n = c('3Maxz'),
        o = c('ODx6h'),
        p = (k = c('zcfNM'), c('d4nUv')),
        q = c('u8Fxu');
    var _r = () => ((0, q.useWillUnmount)(() => {
        m.default.editor.reset(), m.default.kitDetails.reset(), m.default.kitCollab.reset();
    }), (0, g.jsxs)(h.default, {
        children: [
            (0, g.jsx)(i.default, {
                children: (0, g.jsxs)('title', {
                    children: [
                        j.COMPANY_NAME,
                        ' | Kit Creator'
                    ]
                })
            }),
            (0, g.jsx)(p.default.Provider, {
                value: m.default,
                children: (0, g.jsx)(l.Provider, {
                    ...m.default,
                    children: (0, g.jsxs)(k.Routes, {
                        children: [
                            (0, g.jsx)(k.Route, {
                                path: ':kitId/*',
                                element: (0, g.jsx)(n.default, {})
                            }),
                            (0, g.jsx)(k.Route, {
                                path: '/',
                                element: (0, g.jsx)(o.default, {})
                            })
                        ]
                    })
                })
            })
        ]
    }));
}), c.register('UAOHi', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('u4s09'),
        g = c('Eh2Wh');
    let h;
    var _i = f.default.div(h || (h = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 } !important;
`), g.Fonts.SFPro);
}), c.register('bE1mJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('wYr+1'),
        g = c('AUwx6'),
        h = c('rrNxA');
    var _i = {
        kitDetails: new(0, f.default)(),
        editor: new(0, g.default)(),
        kitCollab: new(0, h.default)()
    };
}), c.register('wYr+1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT'),
        h = c('YSFE52');
    const i = h.Privacy.public;
    class j {
        constructor() {
            this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = i, this.reset = () => {
                this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = i;
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], j.prototype, 'id', void 0), (0, f.__decorate)([g.observable], j.prototype, 'title', void 0), (0, f.__decorate)([g.observable], j.prototype, 'image', void 0), (0, f.__decorate)([g.observable], j.prototype, 'language', void 0), (0, f.__decorate)([g.observable], j.prototype, 'subject', void 0), (0, f.__decorate)([g.observable], j.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], j.prototype, 'privacy', void 0), (0, f.__decorate)([g.action], j.prototype, 'reset', void 0);
    var _k = j;
}), c.register('YSFE52', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    let m;
    var n;
    a(d.exports, 'QuestionType', function() {
        return f;
    }), a(d.exports, 'Privacy', function() {
        return h;
    }), a(d.exports, 'GameStatus', function() {
        return j;
    }), a(d.exports, 'GameType', function() {
        return l;
    }), a(d.exports, 'GameGoal', function() {
        return m;
    }), a(d.exports, 'themes', function() {
        return _s;
    }), a(d.exports, 'ExperienceSource', function() {
        return _t;
    }), (g = f || (f = {})).multipleChoice = 'mc', g.textInput = 'text', (i = h || (h = {})).public = 'public', i.private = 'private', (k = j || (j = {})).setup = 'setup', k.join = 'join', k.teams = 'teams', k.gameplay = 'gameplay', k.results = 'results', (l || (l = {})).live = 'live', (n = m || (m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
    const o = '#ffffff',
        p = '#000000';
    let q;
    var r;
    (r = q || (q = {})).easy = 'easy', r.medium = 'medium', r.hard = 'hard', r.veryHard = 'veryHard', r.veryVeryHard = 'veryVeryHard';
    const _s = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: o
            },
            palette: [{
                    background: '#771322',
                    text: o
                },
                {
                    background: '#A85C15',
                    text: o
                },
                {
                    background: '#0D6B33',
                    text: o
                },
                {
                    background: '#076296',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#9E682A',
                    text: o
                },
                {
                    background: '#B54730',
                    text: o
                },
                {
                    background: '#8A9748',
                    text: o
                },
                {
                    background: '#F1B930',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#263238',
                    text: o
                },
                {
                    background: '#37474f',
                    text: o
                },
                {
                    background: '#455a64',
                    text: o
                },
                {
                    background: '#546e7a',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#220044',
                    text: o
                },
                {
                    background: '#330066',
                    text: o
                },
                {
                    background: '#3E007C',
                    text: o
                },
                {
                    background: '#4F1787',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#283593',
                    text: o
                },
                {
                    background: '#076296',
                    text: o
                },
                {
                    background: '#0277bd',
                    text: o
                },
                {
                    background: '#1565c0',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#385645',
                    text: o
                },
                {
                    background: '#425C49',
                    text: o
                },
                {
                    background: '#415641',
                    text: o
                },
                {
                    background: '#4C6349',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#F46F5A',
                    text: o
                },
                {
                    background: '#ED712D',
                    text: o
                },
                {
                    background: '#7A596A',
                    text: o
                },
                {
                    background: '#E8AB3C',
                    text: o
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
                text: o
            },
            palette: [{
                    background: '#001D3B',
                    text: o
                },
                {
                    background: '#FFAE52',
                    text: o
                },
                {
                    background: '#FE5963',
                    text: o
                },
                {
                    background: '#A71C94',
                    text: o
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
                background: p,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: p
                },
                {
                    background: '#FFC721',
                    text: p
                },
                {
                    background: '#FFD147',
                    text: p
                },
                {
                    background: '#FFCD38',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _t;
    var u;
    (u = _t || (_t = {})).original = 'original', u.map = 'map';
}), c.register('AUwx6', function(d, e) {
    a(d.exports, 'defaultError', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    c('rDgzs');
    const _h = () => ({
        message: ''
    });
    class i {
        constructor() {
            this.questions = g.observable.array(), this.questionsChecked = g.observable.array(), this.currentlyEditingQuestionId = '', this.editSessionCounted = !1, this.error = _h(), this.reset = () => {
                this.questions.replace([]), this.questionsChecked.replace([]), this.editSessionCounted = !1, this.error = _h();
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'questions', void 0), (0, f.__decorate)([g.observable], i.prototype, 'questionsChecked', void 0), (0, f.__decorate)([g.observable], i.prototype, 'currentlyEditingQuestionId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'editSessionCounted', void 0), (0, f.__decorate)([g.observable], i.prototype, 'error', void 0), (0, f.__decorate)([g.action], i.prototype, 'reset', void 0);
    var _j = i;
}), c.register('rDgzs', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    var m;
    let n;
    var o;
    let p;
    let q;
    var r;
    a(d.exports, 'Privacy', function() {
        return f;
    }), a(d.exports, 'QuestionType', function() {
        return j;
    }), a(d.exports, 'TextInputAnswerType', function() {
        return l;
    }), a(d.exports, 'HubItemType', function() {
        return p;
    }), a(d.exports, 'HubItemStatus', function() {
        return q;
    }), (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).basic = 'basic', i.go = 'go', i.pro = 'pro', (k = j || (j = {})).multipleChoice = 'mc', k.textInput = 'text', (m = l || (l = {}))[m.exact = 1] = 'exact', m[m.contains = 2] = 'contains', (o = n || (n = {})).reachedCashGoal = 'reached-cash-goal', o.reachedMaxTime = 'reached-max-time', (p || (p = {})).mapAssignment = 'mapAssignment', (r = q || (q = {})).completed = 'completed', r.inProgress = 'inProgress', r.notStarted = 'notStarted';
}), c.register('rrNxA', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    class h {
        constructor() {
            this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions = g.observable.array(), this.reset = () => {
                this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions.replace([]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'panelOpen', void 0), (0, f.__decorate)([g.observable], h.prototype, 'enabled', void 0), (0, f.__decorate)([g.observable], h.prototype, 'waitingQuestions', void 0), (0, f.__decorate)([g.observable], h.prototype, 'sessionId', void 0), (0, f.__decorate)([g.observable], h.prototype, 'isPublic', void 0), (0, f.__decorate)([g.observable], h.prototype, 'hasFetchedFirstBatchOfQuestions', void 0), (0, f.__decorate)([g.observable], h.prototype, 'questions', void 0), (0, f.__decorate)([g.action], h.prototype, 'reset', void 0);
    var _i = h;
}), c.register('3Maxz', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('/ElwX'),
        j = c('DcSOE'),
        k = c('jFKQ/'),
        l = c('ylPOP'),
        m = c('bYq7M'),
        n = c('qot+2'),
        o = c('smMtZ'),
        p = c('KsynA'),
        q = c('y6A/x'),
        r = c('Tb3Va'),
        s = c('d4nUv'),
        t = c('+cTfn'),
        u = c('NU2gN');
    let v, w, x = a => a;
    const y = h.default.div(v || (v = x`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`));
    var _z = (0, u.observer)(() => {
        const A = (0, t.useLocation)(),
            {
                kitDetails: B,
                editor: C
            } = g.useContext(s.default);
        return B.id ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(y, {
                    children: [
                        (0, f.jsx)(i.default, {}),
                        (0, f.jsx)(j.default, {})
                    ]
                }),
                (0, f.jsx)(k.default, {}),
                (0, f.jsx)(l.default, {}),
                (0, f.jsx)(m.default, {}),
                (0, f.jsx)(n.default, {}),
                (0, f.jsx)(p.default, {}),
                (0, f.jsx)(q.default, {}),
                (0, f.jsx)(r.default, {}),
                A.pathname.endsWith('editor') && 0 === C.questions.length && (0, f.jsx)(_A, {})
            ]
        }) : (0, f.jsx)(o.default, {});
    });
    const _A = h.default.div(w || (w = x`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: 9;
`));
}), c.register('/ElwX', function(d, e) {
    a(d.exports, 'HEADER_HEIGHT', function() {
        return _q;
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('fxJYH'),
        k = c('BPvq9'),
        l = c('AyJGn'),
        m = c('S8u0C');
    let n, o, p = a => a;
    const _q = 90,
        r = h.default.div.attrs({
            className: 'flex flex-column'
        })(n || (n = p`
  border-right: 1px solid ${ 0 };
  height: 100%;
  width: ${ 0 }px;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
`), i.default.BorderGray, 323),
        s = h.default.div.attrs({
            className: 'maxWidth scroll-y'
        })(o || (o = p`
  flex: 1;
`));
    class t extends g.Component {
        render() {
            return (0, f.jsxs)(r, {
                children: [
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsxs)(s, {
                        children: [
                            (0, f.jsx)(l.default, {}),
                            (0, f.jsx)(k.default, {})
                        ]
                    }),
                    (0, f.jsx)(m.default, {})
                ]
            });
        }
    }
    var _u = t;
}), c.register('fxJYH', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('Eh2Wh'),
        l = c('6jmvl'),
        m = c('HFnro8'),
        n = c('/ElwX'),
        o = c('8KqQ+'),
        p = c('Dn89R'),
        q = c('neBui'),
        r = c('gX4nk'),
        s = c('t52Ep'),
        t = c('YSFE52'),
        u = c('ST2ba');
    let v, w, x, y, z = a => a;
    const A = j.default.div(v || (v = z`
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
`), () => n.HEADER_HEIGHT, o.default.Black, o.default.BorderGray),
        B = j.default.div(w || (w = z`
  display: flex;
  align-items: center;
`)),
        C = j.default.div(x || (x = z`
  font-size: 23px;
  font-weight: ${ 0 };
  margin-bottom: -6px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
`), k.FontWeights.UltraBold),
        D = j.default.div.attrs({
            className: 'flex vc'
        })(y || (y = z`
  font-size: 10px;
  line-height: 1;
  background: #cfd8dc;
  color: #546e7a;
  padding: 4px 8px;
  border-radius: 100px;
  margin-top: 6px;
  cursor: pointer;
`));
    let E = class extends i.Component {
        render() {
            const F = this.props.kitDetails.privacy === t.Privacy.public;
            return (0, h.jsxs)(A, {
                children: [
                    (0, h.jsxs)(B, {
                        children: [
                            (0, h.jsx)(p.default, {
                                placement: 'right',
                                title: 'Change Cover Image',
                                children: (0, h.jsx)('div', {
                                    children: (0, h.jsx)(m.default, {
                                        image: this.props.kitDetails.image,
                                        size: 50,
                                        blockModalOpen: !0,
                                        onClick: this.toggleEditingImageModal
                                    })
                                })
                            }),
                            (0, h.jsxs)('div', {
                                style: {
                                    marginLeft: 10,
                                    flex: 1,
                                    overflow: 'hidden'
                                },
                                children: [
                                    (0, h.jsx)(p.default, {
                                        placement: 'right',
                                        title: 'Rename',
                                        children: (0, h.jsx)(C, {
                                            onClick: this.toggleEditingTitleModal,
                                            children: this.props.kitDetails.title.trim() || 'Untitled Kit'
                                        })
                                    }),
                                    (0, h.jsx)('div', {
                                        className: 'flex',
                                        children: (0, h.jsx)(p.default, {
                                            placement: 'right',
                                            title: 'Change Privacy',
                                            children: (0, h.jsxs)(D, {
                                                onClick: this.togglePrivacyModal,
                                                children: [
                                                    (0, h.jsx)(s.default, {
                                                        name: F ? 'fas fa-unlock' : 'fas fa-lock',
                                                        style: {
                                                            marginRight: 3,
                                                            fontSize: 8
                                                        }
                                                    }),
                                                    (0, h.jsx)('div', {
                                                        children: F ? 'Public' : 'Private'
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, h.jsx)(q.default, {
                        closeModal: this.toggleEditingTitleModal,
                        visible: this.state.isEditingTitle
                    }),
                    (0, h.jsx)(r.default, {
                        closeModal: this.toggleEditingImageModal,
                        visible: this.state.isEditingImage
                    }),
                    (0, h.jsx)(u.default, {
                        closeModal: this.togglePrivacyModal,
                        visible: this.state.isEditingPrivacy
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                isEditingTitle: !1,
                isEditingImage: !1,
                isEditingPrivacy: !1
            }), (0, f.default)(this, 'toggleEditingTitleModal', () => this.setState({
                isEditingTitle: !this.state.isEditingTitle
            })), (0, f.default)(this, 'toggleEditingImageModal', () => {
                this.setState({
                    isEditingImage: !this.state.isEditingImage
                });
            }), (0, f.default)(this, 'togglePrivacyModal', () => {
                this.setState({
                    isEditingPrivacy: !this.state.isEditingPrivacy
                });
            });
        }
    };
    E = (0, g.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], E);
    var _F = E;
}), c.register('HFnro8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('HloXO');
    let l;
    const m = h.default.img.attrs(a => ({
        src: a.image
    }))(l || (l = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = a => {
        const [o, p] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...a,
                    onClick: o => {
                        o.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || p(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: o,
                    onCancel: a => {
                        a.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('HloXO', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = a => {
            const g = _g(a);
            return g ? a.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : a;
        },
        _g = a => {
            if (!_k.some(d => a.includes(d)))
                return null;
            if (a.includes(_i) && !a.includes(`/${ _j }/`))
                return null;
            const h = a.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('neBui', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('P1KtI'),
        k = c('aevdF'),
        l = c('AE7vR'),
        m = c('cP64q'),
        n = c('6jmvl'),
        o = c('WpNH1');
    let p = class extends i.Component {
        render() {
            return (0, h.jsx)(l.default, {
                open: this.props.visible,
                title: `Rename "${ this.props.kitDetails.title }"`,
                onCancel: this.props.closeModal,
                closable: !0,
                footer: (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(j.default, {
                            onClick: this.props.closeModal,
                            children: 'Cancel'
                        }),
                        (0, h.jsx)(j.default, {
                            onClick: this.onRename,
                            disabled: !this.canRename(),
                            type: 'primary',
                            children: 'Rename'
                        })
                    ]
                }),
                children: (0, h.jsx)(k.default, {
                    placeholder: 'New name...',
                    onChange: this.handleChange,
                    maxLength: m.MAX_KIT_NAME_LENGTH,
                    onPressEnter: this.onRename
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                newTitle: ''
            }), (0, f.default)(this, 'canRename', () => !!this.state.newTitle.trim()), (0, f.default)(this, 'onRename', () => {
                this.canRename() && ((0, o.default)(this.state.newTitle), this.props.closeModal());
            }), (0, f.default)(this, 'handleChange', a => {
                this.setState({
                    newTitle: a.target.value
                });
            });
        }
    };
    p = (0, g.__decorate)([
        (0, n.inject)('kitDetails'),
        n.observer
    ], p);
    var _q = p;
}), c.register('cP64q', function(d, e) {
    a(d.exports, 'MAX_KIT_NAME_LENGTH', function() {
        return _y;
    }), a(d.exports, 'default', function() {
        return _C;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('A6/C6'),
        k = c('P1KtI'),
        l = c('VNuyu'),
        m = c('aevdF'),
        n = c('u8Dt8'),
        o = c('tMe0P'),
        p = c('0imoS1'),
        q = c('6jmvl'),
        r = c('dVt9R1'),
        s = c('pJh2q0'),
        t = c('Qjtm3'),
        u = c('+cTfn'),
        v = c('nKuOQ'),
        w = c('Eh2Wh'),
        x = c('quE27');
    const _y = 30,
        z = n.default.Option,
        A = a => (0, h.jsx)(o.default, {
            style: {
                fontWeight: 'bold',
                fontSize: 25
            },
            children: a
        });
    let B = class extends i.Component {
        componentDidMount() {
            const C = localStorage.getItem(t.LocalStorageNames.editorDefaultLanguage),
                D = localStorage.getItem(t.LocalStorageNames.editorDefaultSubject) || (0, x.getUser)().areaOfExpertise,
                E = localStorage.getItem(t.LocalStorageNames.editorDefaultGradeLevel) || (0, x.getUser)().gradeLevel;
            C && (this.props.kitDetails.language = C), D && (this.props.kitDetails.subject = D), E && (this.props.kitDetails.gradeLevel = E);
        }
        render() {
            const {
                kitDetails: {
                    title: C,
                    language: D,
                    subject: E
                }
            } = this.props, F = !!(C && D && E);
            return (0, h.jsxs)(h.Fragment, {
                children: [
                    (0, h.jsxs)(u.Link, {
                        style: {
                            fontSize: 14,
                            marginBottom: -5,
                            fontFamily: w.Fonts.SFPro
                        },
                        to: v.DASHBOARD,
                        children: [
                            (0, h.jsx)('i', {
                                className: 'fas fa-arrow-alt-left',
                                style: {
                                    marginRight: 3
                                }
                            }),
                            (0, h.jsx)('span', {
                                children: ' Go Back'
                            })
                        ]
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            (0, h.jsxs)('div', {
                                children: [
                                    (0, h.jsx)(o.default, {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 42
                                        },
                                        children: j.CREATE_A_KIT_HEADER
                                    }),
                                    (0, h.jsx)(o.default, {
                                        style: {
                                            fontSize: 20,
                                            marginTop: -15
                                        },
                                        children: j.CREATE_A_KIT_SUBHEADER
                                    })
                                ]
                            }),
                            (0, h.jsx)('img', {
                                src: '/client/img/editor/think.svg',
                                style: {
                                    height: 80
                                }
                            })
                        ]
                    }),
                    (0, h.jsx)(l.default, {}),
                    A('Name'),
                    (0, h.jsx)(m.default, {
                        size: 'large',
                        onChange: this.onKitTitleNameChange,
                        placeholder: 'Kit name',
                        maxLength: _y
                    }),
                    (0, h.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    A('Language'),
                    (0, h.jsx)(n.default, {
                        style: {
                            width: '100%'
                        },
                        size: 'large',
                        value: D ? (0, r.getLanguageName)(D) : void 0,
                        placeholder: 'No language selected',
                        showSearch: !0,
                        onChange: this.onLanguageSelected,
                        optionFilterProp: 'children',
                        filterOption: (C, D) => D.props.children.toLowerCase().indexOf(C.toLowerCase()) >= 0,
                        children: (0, r.getListOfLanguages)().map(C => (0, h.jsx)(z, {
                            value: C,
                            children: C
                        }, C))
                    }),
                    (0, h.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    A('Subject'),
                    (0, h.jsx)(n.default, {
                        style: {
                            width: '100%'
                        },
                        size: 'large',
                        placeholder: 'No subject selected',
                        value: E || void 0,
                        onChange: this.onSubjectSelected,
                        children: s.optionsForAreaOfExpertise.map(C => (0, h.jsx)(z, {
                            value: C,
                            children: C
                        }, C))
                    }),
                    (0, h.jsx)('div', {
                        style: {
                            height: 10
                        }
                    }),
                    (0, h.jsx)(l.default, {}),
                    (0, h.jsxs)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            (0, h.jsx)(p.default, {
                                link: 'https://www.notion.so/gimkit/Language-Subject-7ed3f1e88cc84ccaac1a282a0a4017db'
                            }),
                            (0, h.jsx)(k.default, {
                                disabled: !F,
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
        constructor(...a) {
            super(...a), (0, f.default)(this, 'onKitTitleNameChange', a => this.props.kitDetails.title = a.target.value), (0, f.default)(this, 'onLanguageSelected', a => {
                const C = (0, r.getLanguageKey)(a);
                localStorage.setItem(t.LocalStorageNames.editorDefaultLanguage, C), this.props.kitDetails.language = C;
            }), (0, f.default)(this, 'onSubjectSelected', a => {
                localStorage.setItem(t.LocalStorageNames.editorDefaultSubject, a), this.props.kitDetails.subject = a;
            });
        }
    };
    B = (0, g.__decorate)([
        (0, q.inject)('kitDetails'),
        q.observer
    ], B);
    var _C = B;
}), c.register('A6/C6', function(d, e) {
    a(d.exports, 'CREATE_A_KIT_HEADER', function() {
        return _f;
    }), a(d.exports, 'CREATE_A_KIT_SUBHEADER', function() {
        return _g;
    });
    const _f = 'New Kit',
        _g = 'Let\'s get started!';
}), c.register('0imoS1', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('7EmM+1'),
        h = c('P1KtI'),
        i = c('Dn89R');
    var _j = a => (0, f.jsx)(i.default, {
        title: 'Learn more on why we collect this data',
        children: (0, f.jsx)(h.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, f.jsx)(g.default, {}),
            href: a.link || '',
            target: '_blank'
        })
    });
}), c.register('7EmM+1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('ck3Mo1'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LockOutlined';
    var _k = g.forwardRef(j);
}), c.register('ck3Mo1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('dVt9R1', function(d, e) {
    a(d.exports, 'getListOfLanguages', function() {
        return _g;
    }), a(d.exports, 'getLanguageKey', function() {
        return _h;
    }), a(d.exports, 'getLanguageName', function() {
        return _i;
    });
    const f = {
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
        _g = () => Object.keys(f).map(a => f[a]),
        _h = a => Object.keys(f).filter(d => f[d] === a)[0],
        _i = a => f[a];
}), c.register('pJh2q0', function(d, e) {
    a(d.exports, 'optionsForAreaOfExpertise', function() {
        return _p;
    }), a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Sggd91'),
        i = c('VNuyu'),
        j = c('u8Dt8'),
        k = c('qfXCk3'),
        l = c('UmTL74'),
        m = c('zB1Rq4'),
        n = c('rWa5o1'),
        o = c('nKuOQ');
    const _p = [
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
        q = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var _r = () => {
        const {
            login: s
        } = g.useContext(l.default), [t, u] = g.useState(''), [v, w] = g.useState(''), x = !t || !v;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, f.jsx)(j.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: s => u(s),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _p.map(s => ({
                        value: s,
                        label: s
                    }))
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, f.jsx)(h.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, f.jsx)(j.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: s => w(s),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: q.map(s => ({
                        value: s,
                        label: s
                    }))
                }),
                (0, f.jsx)(k.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: x,
                    onClick: () => {
                        x || (s.areaOfExpertise = t, s.gradeLevel = v, s.informationNeeded.replace(s.informationNeeded.filter(s => s !== m.informationTypes.areaOfExpertise && s !== m.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, f.jsx)(i.default, {}),
                (0, f.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, f.jsx)('a', {
                            href: o.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, f.jsx)('a', {
                            href: o.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, f.jsx)(n.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), c.register('Sggd91', function(d, e) {
    a(d.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return _q;
    }), a(d.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return _r;
    }), a(d.exports, 'Title', function() {
        return _s;
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('UmTL74'),
        i = c('Eh2Wh'),
        j = c('8KqQ+'),
        k = c('VNuyu'),
        l = c('aevdF'),
        m = c('qfXCk3'),
        n = c('zB1Rq4'),
        o = c('rWa5o1'),
        p = c('LnE751');
    const _q = 20,
        _r = 25,
        _s = a => (0, f.jsx)('div', {
            style: {
                fontFamily: i.Fonts.SFPro,
                fontWeight: i.FontWeights.Bold,
                color: j.default.Black,
                fontSize: 18
            },
            children: a.children
        }),
        t = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _u = () => {
        const {
            login: v
        } = g.useContext(h.default), [w, x] = g.useState(v.firstName), [y, z] = g.useState(v.lastName), [A, B] = g.useState(v.password), C = () => {
            let D = !0;
            return v.informationNeeded.includes(n.informationTypes.firstName) && (w || (D = !1)), v.informationNeeded.includes(n.informationTypes.lastName) && (y || (D = !1)), v.informationNeeded.includes(n.informationTypes.accountPassword) && (!A || A.length < 6) && (D = !1), D;
        }, D = () => {
            C() && (w && (v.firstName = w), y && (v.lastName = y), A && (v.password = A), v.informationNeeded.replace(v.informationNeeded.filter(v => v !== n.informationTypes.firstName && v !== n.informationTypes.lastName && v !== n.informationTypes.accountPassword)));
        }, E = v.accountType === p.default.student;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_s, {
                    children: 'First Name'
                }),
                (0, f.jsx)(l.default, {
                    maxLength: _q,
                    style: t,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: v => x(v.target.value),
                    onPressEnter: D,
                    autoFocus: !0
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, f.jsxs)(_s, {
                    children: [
                        'Last ',
                        E ? 'Initial' : 'Name'
                    ]
                }),
                (0, f.jsx)(l.default, {
                    maxLength: E ? 1 : _r,
                    style: t,
                    size: 'large',
                    placeholder: `Last ${ E ? 'Initial' : 'Name' } here...`,
                    onChange: v => z(v.target.value),
                    onPressEnter: D
                }),
                v.informationNeeded.includes(n.informationTypes.accountPassword) && (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(k.default, {}),
                        (0, f.jsx)(_s, {
                            children: 'Password'
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, f.jsx)(l.default.Password, {
                            style: t,
                            onChange: v => B(v.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: D
                        })
                    ]
                }),
                (0, f.jsx)(k.default, {}),
                (0, f.jsx)(m.default, {
                    disabled: !C(),
                    onClick: D,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !E && (0, f.jsx)(o.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), c.register('UmTL74', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('Wf/oP4');
    var _h = f.createContext(g.default);
}), c.register('Wf/oP4', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('zB1Rq4'),
        g = c('ZbPFC4');
    var _h = {
        login: new(0, f.default)(),
        navigation: new(0, g.default)()
    };
}), c.register('zB1Rq4', function(d, e) {
    a(d.exports, 'informationTypes', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    const _h = {
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
        i = {
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
            userExists: j,
            email: k,
            accountType: l,
            googleToken: m,
            firstName: n,
            lastName: o,
            password: p,
            schoolId: q,
            districtId: r,
            country: s,
            areaOfExpertise: t,
            gradeLevel: u,
            organization: v,
            acceptsLatestPolicies: w,
            authenticated: x
        } = i;
    class y {
        constructor() {
            this.userExists = j, this.email = k, this.accountType = l, this.googleToken = m, this.firstName = n, this.lastName = o, this.password = p, this.schoolId = q, this.districtId = r, this.country = s, this.areaOfExpertise = t, this.gradeLevel = u, this.organization = v, this.acceptsLatestPolicies = w, this.authenticated = x, this.informationNeeded = g.observable.array([_h.email]), this.reset = () => {
                Object.keys(i).forEach(a => this[a] = i[a]), this.informationNeeded.replace([_h.email]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], y.prototype, 'userExists', void 0), (0, f.__decorate)([g.observable], y.prototype, 'email', void 0), (0, f.__decorate)([g.observable], y.prototype, 'accountType', void 0), (0, f.__decorate)([g.observable], y.prototype, 'googleToken', void 0), (0, f.__decorate)([g.observable], y.prototype, 'firstName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'lastName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'password', void 0), (0, f.__decorate)([g.observable], y.prototype, 'schoolId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'districtId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'country', void 0), (0, f.__decorate)([g.observable], y.prototype, 'areaOfExpertise', void 0), (0, f.__decorate)([g.observable], y.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], y.prototype, 'organization', void 0), (0, f.__decorate)([g.observable], y.prototype, 'acceptsLatestPolicies', void 0), (0, f.__decorate)([g.observable], y.prototype, 'authenticated', void 0), (0, f.__decorate)([g.observable], y.prototype, 'informationNeeded', void 0), (0, f.__decorate)([g.action], y.prototype, 'reset', void 0);
    var _z = y;
}), c.register('ZbPFC4', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    const h = {
            currentStage: c('wM8kY4').default.email,
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
            currentStage: i,
            emailSignInBlocked: j,
            creatingAccount: k,
            loggingIn: l,
            updatingAccountInformation: m,
            loginError: n,
            redirectUri: o,
            classJoiningId: p,
            classJoiningName: q,
            classJoiningTeacherName: r
        } = h;
    class s {
        constructor() {
            this.currentStage = i, this.emailSignInBlocked = j, this.creatingAccount = k, this.loggingIn = l, this.updatingAccountInformation = m, this.loginError = n, this.redirectUri = o, this.classJoiningId = p, this.classJoiningName = q, this.classJoiningTeacherName = r, this.reset = () => {
                Object.keys(h).forEach(a => this[a] = h[a]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], s.prototype, 'currentStage', void 0), (0, f.__decorate)([g.observable], s.prototype, 'emailSignInBlocked', void 0), (0, f.__decorate)([g.observable], s.prototype, 'creatingAccount', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loggingIn', void 0), (0, f.__decorate)([g.observable], s.prototype, 'updatingAccountInformation', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loginError', void 0), (0, f.__decorate)([g.observable], s.prototype, 'redirectUri', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningId', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningName', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningTeacherName', void 0), (0, f.__decorate)([g.action], s.prototype, 'reset', void 0);
    var _t = s;
}), c.register('wM8kY4', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).email = 'email', g.password = 'password', g.accountType = 'accountType', g.studentSpecificInfo = 'studentSpecificInfo', g.nameAndPassword = 'nameAndPassword', g.school = 'school', g.educatorSpecificInfo = 'educatorSpecificInfo', g.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', g.acceptPolicies = 'acceptPolicies', g.verifyClass = 'verifyClass';
    var _h = f;
}), c.register('qfXCk3', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('6jmvl'),
        h = c('P1KtI');
    var _i = (0, g.observer)(a => (0, f.jsx)(h.default, {
        disabled: a.disabled,
        size: a.size || 'middle',
        type: 'primary',
        onClick: a.onClick,
        style: Object.assign({
            width: '100%'
        }, a.style),
        loading: a.loading,
        children: a.children
    }));
}), c.register('rWa5o1', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('0imoS1');
    var _h = a => (0, f.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, f.jsx)('div', {}),
            (0, f.jsx)(g.default, {
                link: a.link
            })
        ]
    });
}), c.register('LnE751', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).educator = 'educator', g.student = 'student', g.guardian = 'guardian', g.nonSchool = 'nonSchool';
    var _h = f;
}), c.register('Qjtm3', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function() {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('WpNH1', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('bE1mJ'),
        g = c('quE27');
    var _h = a => {
        (0, g.request)({
            url: '/api/v1/editor/rename',
            method: 'post',
            data: {
                kitId: f.default.kitDetails.id,
                title: a
            },
            success: a => {
                a && a.newName && (f.default.kitDetails.title = a.newName);
            },
            error: () => !1
        });
    };
}), c.register('gX4nk', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('P1KtI'),
        k = c('AE7vR'),
        l = c('6jmvl'),
        m = c('oLX/y'),
        n = c('h7UTu');
    let o = class extends i.Component {
        render() {
            return (0, h.jsx)(k.default, {
                open: this.props.visible,
                onCancel: this.props.closeModal,
                style: {
                    top: 20
                },
                title: 'New cover photo',
                closable: !0,
                footer: (0, h.jsx)(j.default, {
                    onClick: this.props.closeModal,
                    children: 'Cancel'
                }),
                children: (0, h.jsx)('div', {
                    style: {
                        maxHeight: '55vh'
                    },
                    className: 'scroll disable-scrollbars',
                    children: (0, h.jsx)(m.default, {
                        defaultSearchTerm: this.props.kitDetails.title,
                        onImagePicked: this.onImagePicked
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'onImagePicked', a => {
                (0, n.default)(a), this.props.closeModal();
            });
        }
    };
    o = (0, g.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], o);
    var _p = o;
}), c.register('h7UTu', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('bE1mJ'),
        g = c('quE27');
    var _h = a => {
        (0, g.request)({
            url: '/api/v1/editor/changePhoto',
            method: 'post',
            data: {
                kitId: f.default.kitDetails.id,
                photo: a
            },
            success: () => {
                f.default.kitDetails.image = a;
            },
            error: () => !1
        });
    };
}), c.register('t52Ep', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('ST2ba', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('P1KtI'),
        k = c('QZ0Z+'),
        l = c('AE7vR'),
        m = c('Q2kdB0'),
        n = c('6jmvl'),
        o = c('8KqQ+'),
        p = c('Eh2Wh'),
        q = c('YSFE52'),
        r = c('z8biu'),
        s = c('7EmM+1'),
        t = c('G+FR5');
    const u = {
            color: o.default.Black,
            fontFamily: p.Fonts.SFPro,
            marginBottom: 6
        },
        v = a => (0, h.jsx)(k.default, {
            style: {
                marginBottom: 10
            },
            children: (0, h.jsxs)('div', {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    color: o.default.Black,
                    fontFamily: p.Fonts.SFPro
                },
                children: [
                    (0, h.jsx)('div', {
                        style: {
                            marginRight: 10,
                            fontSize: 24
                        },
                        children: a.icon
                    }),
                    (0, h.jsxs)('div', {
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: p.FontWeights.UltraBold
                                },
                                children: a.name
                            }),
                            (0, h.jsx)('div', {
                                children: a.description
                            })
                        ]
                    })
                ]
            })
        });
    let w = class extends i.Component {
        render() {
            const x = this.props.kitDetails.privacy;
            return (0, h.jsx)(l.default, {
                open: this.props.visible,
                title: 'Change Privacy',
                onCancel: this.props.closeModal,
                footer: (0, h.jsx)(j.default, {
                    onClick: this.props.closeModal,
                    children: 'Close'
                }),
                style: {
                    top: 20
                },
                closable: !0,
                children: (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsxs)(m.default.Group, {
                            value: x,
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 15
                            },
                            onChange: this.onChange,
                            children: [
                                (0, h.jsx)(m.default, {
                                    value: q.Privacy.public,
                                    style: u,
                                    children: 'Public'
                                }),
                                (0, h.jsx)(m.default, {
                                    value: q.Privacy.private,
                                    style: u,
                                    children: 'Private'
                                })
                            ]
                        }),
                        (0, h.jsx)('div', {
                            style: {
                                height: 15
                            }
                        }),
                        (0, h.jsx)(v, {
                            name: 'Public',
                            description: 'Visible in search results and accessible via direct link.',
                            icon: (0, h.jsx)(t.default, {})
                        }),
                        (0, h.jsx)(v, {
                            name: 'Private',
                            description: 'Hidden from search results and only visible to you.',
                            icon: (0, h.jsx)(s.default, {})
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                newTitle: ''
            }), (0, f.default)(this, 'onChange', a => {
                const x = a.target.value;
                (0, r.default)(x);
            });
        }
    };
    w = (0, g.__decorate)([
        (0, n.inject)('kitDetails'),
        n.observer
    ], w);
    var _x = w;
}), c.register('Q2kdB0', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('KJ2P50'),
        g = c('PXETC0'),
        h = c('ZG0Yn');
    const i = g.default;
    i.Button = h.default, i.Group = f.default, i.__ANT_RADIO = !0;
    var _j = i;
}), c.register('KJ2P50', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('/U36/'),
        g = c('MsxQz'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('GCcXd'),
        k = c('pKZsV'),
        l = c('vFRCN0'),
        m = c('PXETC0'),
        n = c('9/0Iy0');
    const o = h.forwardRef((a, c) => {
        const {
            getPrefixCls: p,
            direction: q
        } = h.useContext(i.ConfigContext), r = h.useContext(j.default), [_s, t] = (0, g.default)(a.defaultValue, {
            value: a.value
        }), {
            prefixCls: u,
            className: v,
            rootClassName: w,
            options: x,
            buttonStyle: y = 'outline',
            disabled: z,
            children: A,
            size: B,
            style: C,
            id: D,
            onMouseEnter: E,
            onMouseLeave: F,
            onFocus: G,
            onBlur: H
        } = a, I = p('radio', u), J = `${ I }-group`, [K, L] = (0, n.default)(I);
        let M = A;
        x && x.length > 0 && (M = x.map(a => 'string' == typeof a || 'number' == typeof a ? h.createElement(m.default, {
            key: a.toString(),
            prefixCls: I,
            disabled: z,
            value: a,
            checked: _s === a
        }, a) : h.createElement(m.default, {
            key: `radio-group-value-options-${ a.value }`,
            prefixCls: I,
            disabled: a.disabled || z,
            value: a.value,
            checked: _s === a.value,
            style: a.style
        }, a.label)));
        const N = B || r,
            O = b(f)(J, `${ J }-${ y }`, {
                [`${ J }-${ N }`]: N,
                [`${ J }-rtl`]: 'rtl' === q
            }, v, w, L);
        return K(h.createElement('div', Object.assign({}, (0, k.default)(a), {
            className: O,
            style: C,
            onMouseEnter: E,
            onMouseLeave: F,
            onFocus: G,
            onBlur: H,
            id: D,
            ref: c
        }), h.createElement(l.RadioGroupContextProvider, {
            value: {
                onChange: b => {
                    const P = _s,
                        Q = b.target.value;
                    'value' in a || t(Q);
                    const {
                        onChange: R
                    } = a;
                    R && Q !== P && R(b);
                },
                value: _s,
                disabled: a.disabled,
                name: a.name,
                optionType: a.optionType
            }
        }, M)));
    });
    var p = h.memo(o);
}), c.register('vFRCN0', function(d, e) {
    a(d.exports, 'RadioGroupContextProvider', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    }), a(d.exports, 'RadioOptionTypeContext', function() {
        return _j;
    }), a(d.exports, 'RadioOptionTypeContextProvider', function() {
        return _k;
    });
    var f = c('O0Kav');
    const g = f.createContext(null),
        _h = g.Provider;
    var _i = g;
    const _j = f.createContext(null),
        _k = _j.Provider;
}), c.register('PXETC0', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('/U36/'),
        g = c('y095j9'),
        h = c('bvyc2'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('XDmwF'),
        l = c('LbJH1'),
        m = c('vFRCN0'),
        n = c('9/0Iy0'),
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
    const p = (a, c) => {
        var q, r;
        const s = i.useContext(m.default),
            _t = i.useContext(m.RadioOptionTypeContext),
            {
                getPrefixCls: u,
                direction: v
            } = i.useContext(j.ConfigContext),
            w = i.useRef(),
            x = (0, h.composeRef)(c, w),
            {
                isFormItemInput: y
            } = i.useContext(l.FormItemInputContext),
            z = b => {
                var A, B;
                null === (A = a.onChange) || void 0 === A || A.call(a, b), null === (B = null == s ? void 0 : s.onChange) || void 0 === B || B.call(s, b);
            },
            {
                prefixCls: A,
                className: B,
                rootClassName: C,
                children: D,
                style: E
            } = a,
            F = o(a, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            G = u('radio', A),
            H = 'button' === ((null == s ? void 0 : s.optionType) || _t) ? `${ G }-button` : G,
            [I, J] = (0, n.default)(G),
            K = Object.assign({}, F),
            L = i.useContext(k.default);
        s && (K.name = s.name, K.onChange = z, K.checked = a.value === s.value, K.disabled = null !== (q = K.disabled) && void 0 !== q ? q : s.disabled), K.disabled = null !== (r = K.disabled) && void 0 !== r ? r : L;
        const M = b(f)(`${ H }-wrapper`, {
            [`${ H }-wrapper-checked`]: K.checked,
            [`${ H }-wrapper-disabled`]: K.disabled,
            [`${ H }-wrapper-rtl`]: 'rtl' === v,
            [`${ H }-wrapper-in-form-item`]: y
        }, B, C, J);
        return I(i.createElement('label', {
            className: M,
            style: E,
            onMouseEnter: a.onMouseEnter,
            onMouseLeave: a.onMouseLeave
        }, i.createElement(g.default, Object.assign({}, K, {
            type: 'radio',
            prefixCls: H,
            ref: x
        })), void 0 !== D ? i.createElement('span', null, D) : null));
    };
    var q = i.forwardRef(p);
}), c.register('y095j9', function(d, e) {
    a(d.exports, 'default', function() {
        return _D;
    });
    var f = c('+pD1R20'),
        g = c('KQrGU18'),
        h = c('N14UI9'),
        i = c('fS0tD9'),
        j = c('/3DFz16'),
        k = c('oFGsY16'),
        l = c('pjWA99'),
        m = c('86FOw9'),
        n = c('O0Kav'),
        o = c('/U36/'),
        p = function(q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);

            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function(v) {
                    var w = u.props,
                        x = w.disabled,
                        y = w.onChange;
                    x || ('checked' in u.props || u.setState({
                        checked: v.target.checked
                    }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, {
                            checked: v.target.checked
                        }),
                        stopPropagation: function() {
                            v.stopPropagation();
                        },
                        preventDefault: function() {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function(v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = {
                    checked: v
                }, u;
            }
            return (0, k.default)(s, [{
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
                        var t, u = this.props,
                            v = u.prefixCls,
                            w = u.className,
                            x = u.style,
                            y = u.name,
                            z = u.id,
                            A = u.type,
                            B = u.disabled,
                            C = u.readOnly,
                            _D = u.tabIndex,
                            E = u.onClick,
                            F = u.onFocus,
                            G = u.onBlur,
                            H = u.onKeyDown,
                            I = u.onKeyPress,
                            J = u.onKeyUp,
                            K = u.autoFocus,
                            L = u.value,
                            M = u.required,
                            N = (0, h.default)(u, [
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
                            O = Object.keys(N).reduce(function(P, Q) {
                                return 'aria-' !== Q.substr(0, 5) && 'data-' !== Q.substr(0, 5) && 'role' !== Q || (P[Q] = N[Q]), P;
                            }, {}),
                            P = this.state.checked,
                            Q = b(o)(v, w, (t = {}, (0, g.default)(t, ''.concat(v, '-checked'), P), (0, g.default)(t, ''.concat(v, '-disabled'), B), t));
                        return b(n).createElement('span', {
                            className: Q,
                            style: x
                        }, b(n).createElement('input', (0, f.default)({
                            name: y,
                            id: z,
                            type: A,
                            required: M,
                            readOnly: C,
                            disabled: B,
                            tabIndex: _D,
                            className: ''.concat(v, '-input'),
                            checked: !!P,
                            onClick: E,
                            onFocus: F,
                            onBlur: G,
                            onKeyUp: J,
                            onKeyDown: H,
                            onKeyPress: I,
                            onChange: this.handleChange,
                            autoFocus: K,
                            ref: this.saveInput,
                            value: L
                        }, O)), b(n).createElement('span', {
                            className: ''.concat(v, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(t, u) {
                    return 'checked' in t ? (0, i.default)((0, i.default)({}, u), {}, {
                        checked: t.checked
                    }) : null;
                }
            }]), s;
        }(n.Component);
    p.defaultProps = {
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
    var q = p;
}), c.register('+pD1R20', function(d, e) {
    function f() {
        return f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('KQrGU18', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('N14UI9', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('wlMK917');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
}), c.register('wlMK917', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('fS0tD9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KQrGU18');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function _h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                (0, f.default)(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }
}), c.register('/3DFz16', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('oFGsY16', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function g(h, i, j) {
        return i && f(h.prototype, i), j && f(h, j), h;
    }
    a(d.exports, 'default', function() {
        return g;
    });
}), c.register('pjWA99', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('/dMWm15');

    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('/dMWm15', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('86FOw9', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('FRSEq15'),
        g = c('kgMwM15'),
        h = c('qEFpg9');

    function _i(j) {
        var k = (0, g.default)();
        return function() {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('FRSEq15', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('kgMwM15', function(d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('qEFpg9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('nPZ0615'),
        g = c('SUQix17');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('nPZ0615', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('SUQix17', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('9/0Iy0', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = new(0, f.Keyframes)('antRadioEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        k = a => {
            const {
                componentCls: l,
                antCls: m
            } = a, n = `${ l }-group`;
            return {
                [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ n }-rtl`]: {
                        direction: 'rtl'
                    },
                    [`${ m }-badge ${ m }-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${ m }-badge:not(:first-child) > ${ m }-button-wrapper`]: {
                        borderInlineStart: 'none'
                    }
                })
            };
        },
        l = a => {
            const {
                componentCls: m,
                radioWrapperMarginRight: n,
                radioCheckedColor: o,
                radioSize: p,
                motionDurationSlow: q,
                motionDurationMid: r,
                motionEaseInOut: s,
                motionEaseInOutCirc: t,
                radioButtonBg: u,
                colorBorder: _v,
                lineWidth: w,
                radioDotSize: x,
                colorBgContainerDisabled: y,
                colorTextDisabled: z,
                paddingXS: A,
                radioDotDisabledColor: B,
                lineType: C,
                radioDotDisabledSize: D,
                wireframe: E,
                colorWhite: F
            } = a, G = `${ m }-inner`;
            return {
                [`${ m }-wrapper`]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    marginInlineStart: 0,
                    marginInlineEnd: n,
                    cursor: 'pointer',
                    [`&${ m }-wrapper-rtl`]: {
                        direction: 'rtl'
                    },
                    '&-disabled': {
                        cursor: 'not-allowed',
                        color: a.colorTextDisabled
                    },
                    '&::after': {
                        display: 'inline-block',
                        width: 0,
                        overflow: 'hidden',
                        content: '"\\a0"'
                    },
                    [`${ m }-checked::after`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        border: `${ w }px ${ C } ${ o }`,
                        borderRadius: '50%',
                        visibility: 'hidden',
                        animationName: j,
                        animationDuration: q,
                        animationTimingFunction: s,
                        animationFillMode: 'both',
                        content: '""'
                    },
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ m }-wrapper:hover &,\n        &:hover ${ G }`]: {
                        borderColor: o
                    },
                    [`${ m }-input:focus-visible + ${ G }`]: Object.assign({}, (0, i.genFocusOutline)(a)),
                    [`${ m }:hover::after, ${ m }-wrapper:hover &::after`]: {
                        visibility: 'visible'
                    },
                    [`${ m }-inner`]: {
                        '&::after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            insetBlockStart: '50%',
                            insetInlineStart: '50%',
                            display: 'block',
                            width: p,
                            height: p,
                            marginBlockStart: p / -2,
                            marginInlineStart: p / -2,
                            backgroundColor: E ? o : F,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: p,
                            transform: 'scale(0)',
                            opacity: 0,
                            transition: `all ${ q } ${ t }`,
                            content: '""'
                        },
                        boxSizing: 'border-box',
                        position: 'relative',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: p,
                        height: p,
                        backgroundColor: u,
                        borderColor: _v,
                        borderStyle: 'solid',
                        borderWidth: w,
                        borderRadius: '50%',
                        transition: `all ${ r }`
                    },
                    [`${ m }-input`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0
                    },
                    [`${ m }-checked`]: {
                        [G]: {
                            borderColor: o,
                            backgroundColor: E ? u : o,
                            '&::after': {
                                transform: `scale(${ x / p })`,
                                opacity: 1,
                                transition: `all ${ q } ${ t }`
                            }
                        }
                    },
                    [`${ m }-disabled`]: {
                        cursor: 'not-allowed',
                        [G]: {
                            backgroundColor: y,
                            borderColor: _v,
                            cursor: 'not-allowed',
                            '&::after': {
                                backgroundColor: B
                            }
                        },
                        [`${ m }-input`]: {
                            cursor: 'not-allowed'
                        },
                        [`${ m }-disabled + span`]: {
                            color: z,
                            cursor: 'not-allowed'
                        },
                        [`&${ m }-checked`]: {
                            [G]: {
                                '&::after': {
                                    transform: `scale(${ D / p })`
                                }
                            }
                        }
                    },
                    [`span${ m } + *`]: {
                        paddingInlineStart: A,
                        paddingInlineEnd: A
                    }
                })
            };
        },
        m = a => {
            const {
                radioButtonColor: n,
                controlHeight: o,
                componentCls: p,
                lineWidth: q,
                lineType: r,
                colorBorder: s,
                motionDurationSlow: t,
                motionDurationMid: u,
                radioButtonPaddingHorizontal: v,
                fontSize: w,
                radioButtonBg: x,
                fontSizeLG: y,
                controlHeightLG: z,
                controlHeightSM: A,
                paddingXS: B,
                borderRadius: C,
                borderRadiusSM: D,
                borderRadiusLG: E,
                radioCheckedColor: F,
                radioButtonCheckedBg: G,
                radioButtonHoverColor: H,
                radioButtonActiveColor: I,
                radioSolidCheckedColor: J,
                colorTextDisabled: K,
                colorBgContainerDisabled: L,
                radioDisabledButtonCheckedColor: M,
                radioDisabledButtonCheckedBg: N
            } = a;
            return {
                [`${ p }-button-wrapper`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: o,
                    margin: 0,
                    paddingInline: v,
                    paddingBlock: 0,
                    color: n,
                    fontSize: w,
                    lineHeight: o - 2 * q + 'px',
                    background: x,
                    border: `${ q }px ${ r } ${ s }`,
                    borderBlockStartWidth: q + 0.02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: q,
                    cursor: 'pointer',
                    transition: [
                        `color ${ u }`,
                        `background ${ u }`,
                        `border-color ${ u }`,
                        `box-shadow ${ u }`
                    ].join(','),
                    a: {
                        color: n
                    },
                    [`> ${ p }-button`]: {
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
                            insetBlockStart: -q,
                            insetInlineStart: -q,
                            display: 'block',
                            boxSizing: 'content-box',
                            width: 1,
                            height: '100%',
                            paddingBlock: q,
                            paddingInline: 0,
                            backgroundColor: s,
                            transition: `background-color ${ t }`,
                            content: '""'
                        }
                    },
                    '&:first-child': {
                        borderInlineStart: `${ q }px ${ r } ${ s }`,
                        borderStartStartRadius: C,
                        borderEndStartRadius: C
                    },
                    '&:last-child': {
                        borderStartEndRadius: C,
                        borderEndEndRadius: C
                    },
                    '&:first-child:last-child': {
                        borderRadius: C
                    },
                    [`${ p }-group-large &`]: {
                        height: z,
                        fontSize: y,
                        lineHeight: z - 2 * q + 'px',
                        '&:first-child': {
                            borderStartStartRadius: E,
                            borderEndStartRadius: E
                        },
                        '&:last-child': {
                            borderStartEndRadius: E,
                            borderEndEndRadius: E
                        }
                    },
                    [`${ p }-group-small &`]: {
                        height: A,
                        paddingInline: B - q,
                        paddingBlock: 0,
                        lineHeight: A - 2 * q + 'px',
                        '&:first-child': {
                            borderStartStartRadius: D,
                            borderEndStartRadius: D
                        },
                        '&:last-child': {
                            borderStartEndRadius: D,
                            borderEndEndRadius: D
                        }
                    },
                    '&:hover': {
                        position: 'relative',
                        color: F
                    },
                    '&:has(:focus-visible)': Object.assign({}, (0, i.genFocusOutline)(a)),
                    [`${ p }-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [`&-checked:not(${ p }-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: F,
                        background: G,
                        borderColor: F,
                        '&::before': {
                            backgroundColor: F
                        },
                        '&:first-child': {
                            borderColor: F
                        },
                        '&:hover': {
                            color: H,
                            borderColor: H,
                            '&::before': {
                                backgroundColor: H
                            }
                        },
                        '&:active': {
                            color: I,
                            borderColor: I,
                            '&::before': {
                                backgroundColor: I
                            }
                        }
                    },
                    [`${ p }-group-solid &-checked:not(${ p }-button-wrapper-disabled)`]: {
                        color: J,
                        background: F,
                        borderColor: F,
                        '&:hover': {
                            color: J,
                            background: H,
                            borderColor: H
                        },
                        '&:active': {
                            color: J,
                            background: I,
                            borderColor: I
                        }
                    },
                    '&-disabled': {
                        color: K,
                        backgroundColor: L,
                        borderColor: s,
                        cursor: 'not-allowed',
                        '&:first-child, &:hover': {
                            color: K,
                            backgroundColor: L,
                            borderColor: s
                        }
                    },
                    [`&-disabled${ p }-button-wrapper-checked`]: {
                        color: M,
                        backgroundColor: N,
                        borderColor: s,
                        boxShadow: 'none'
                    }
                }
            };
        };
    var n = (0, g.default)('Radio', a => {
        const {
            padding: o,
            lineWidth: p,
            controlItemBgActiveDisabled: q,
            colorTextDisabled: r,
            colorBgContainer: s,
            fontSizeLG: t,
            controlOutline: u,
            colorPrimaryHover: v,
            colorPrimaryActive: w,
            colorText: x,
            colorPrimary: y,
            marginXS: z,
            controlOutlineWidth: A,
            colorTextLightSolid: B,
            wireframe: C
        } = a, D = `0 0 0 ${ A }px ${ u }`, E = D, F = t, G = F - 8, H = C ? G : F - 2 * (4 + p), I = y, J = x, K = v, L = w, M = o - p, N = r, O = z, P = (0, h.merge)(a, {
            radioFocusShadow: D,
            radioButtonFocusShadow: E,
            radioSize: F,
            radioDotSize: H,
            radioDotDisabledSize: G,
            radioCheckedColor: I,
            radioDotDisabledColor: r,
            radioSolidCheckedColor: B,
            radioButtonBg: s,
            radioButtonCheckedBg: s,
            radioButtonColor: J,
            radioButtonHoverColor: K,
            radioButtonActiveColor: L,
            radioButtonPaddingHorizontal: M,
            radioDisabledButtonCheckedBg: q,
            radioDisabledButtonCheckedColor: N,
            radioWrapperMarginRight: O
        });
        return [
            k(P),
            l(P),
            m(P)
        ];
    });
}), c.register('ZG0Yn', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    }, function(f) {
        return _o = f;
    });
    var f = c('O0Kav'),
        g = c('R2nG3'),
        h = c('vFRCN0'),
        i = c('PXETC0'),
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
    const k = (a, d) => {
        const {
            getPrefixCls: l
        } = f.useContext(g.ConfigContext), {
            prefixCls: m
        } = a, n = j(a, ['prefixCls']), _o = l('radio', m);
        return f.createElement(h.RadioOptionTypeContextProvider, {
            value: 'button'
        }, f.createElement(i.default, Object.assign({
            prefixCls: _o
        }, n, {
            type: 'radio',
            ref: d
        })));
    };
    var l = f.forwardRef(k);
}), c.register('z8biu', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('bE1mJ');
    var _h = a => {
        (0, f.request)({
            url: '/api/games/privacy',
            method: 'post',
            data: {
                id: g.default.kitDetails.id,
                privacy: a
            },
            success: () => {
                g.default.kitDetails.privacy = a;
            },
            error: () => !1
        });
    };
}), c.register('G+FR5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1q91P'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UnlockOutlined';
    var _k = g.forwardRef(j);
}), c.register('1q91P', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('BPvq9', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('aB6BC'),
        k = c('6jmvl'),
        l = c('RfwiW'),
        m = c('d4nUv'),
        n = c('quE27'),
        o = c('MTx3j'),
        p = c('hC14o'),
        q = c('ej/50'),
        r = c('YXb2d'),
        s = c('WcNNP'),
        t = c('+cTfn'),
        u = c('0rXvy3');
    let v;
    var _w = (0, k.observer)(() => {
        const x = (0, t.useLocation)(),
            {
                editor: y,
                kitCollab: z
            } = g.useContext(m.default);
        return (0, f.jsx)(_x, {
            overlayVisible: 0 === y.questions.length && x.pathname.endsWith('editor'),
            children: (0, f.jsxs)('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    (0, f.jsx)(u.default, {
                        icon: q.default,
                        title: 'Add Question',
                        onClick: () => (0, l.default)(j.addNewQuestion),
                        blockBackground: !0
                    }),
                    (0, f.jsx)(u.default, {
                        icon: r.default,
                        title: 'Create with Flashcards',
                        onClick: () => (0, l.default)(j.flashcardHomebase),
                        blockBackground: !0
                    }),
                    (0, n.isStudent)() ? null : (0, f.jsx)(u.default, {
                        icon: o.default,
                        title: 'Collaborate With KitCollab' + (z.waitingQuestions ? ` (${ z.waitingQuestions })` : ''),
                        onClick: () => (0, l.default)(j.kitCollab),
                        blockBackground: !0
                    }),
                    (0, f.jsx)(u.default, {
                        icon: p.default,
                        title: 'Add from Question Bank',
                        onClick: () => (0, l.default)(j.questionBank),
                        blockBackground: !0
                    }),
                    (0, f.jsx)(u.default, {
                        icon: s.default,
                        title: 'Import from Spreadsheet',
                        onClick: () => (0, l.default)(j.spreadsheet),
                        blockBackground: !0
                    })
                ]
            })
        });
    });
    const _x = h.default.div(v || (v = (a => a)`
  background: ${ 0 };
  display: flex;
  align-items: center;
  z-index: ${ 0 };
  position: ${ 0 };
  width: 100%;
`), i.default.White, a => a.overlayVisible ? 101 : 1, a => a.overlayVisible ? 'relative' : 'static');
}), c.register('aB6BC', function(d, e) {
    a(d.exports, 'editorBase', function() {
        return _g;
    }), a(d.exports, 'addNewQuestion', function() {
        return _h;
    }), a(d.exports, 'flashcardImport', function() {
        return _i;
    }), a(d.exports, 'spreadsheet', function() {
        return _j;
    }), a(d.exports, 'createWithFlashcards', function() {
        return _k;
    }), a(d.exports, 'flashcardHomebase', function() {
        return _l;
    }), a(d.exports, 'questionBank', function() {
        return _m;
    }), a(d.exports, 'kitCollab', function() {
        return _n;
    });
    var f = c('nKuOQ');
    const _g = a => (a => f.KIT_CREATOR + '/' + a)(a) + '/editor',
        _h = a => _g(a) + '/question',
        _i = a => _g(a) + '/flashcard-import',
        _j = a => _g(a) + '/spreadsheet',
        _k = a => _g(a) + '/flashcard-create',
        _l = a => _g(a) + '/flashcard-home',
        _m = a => _g(a) + '/question-bank',
        _n = a => _g(a) + '/kit-collab';
}), c.register('RfwiW', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KxkP827'),
        g = c('bE1mJ');
    var _h = a => {
        const i = g.default.kitDetails.id || 'kitId';
        return (0, f.NavigateTo)(a(i));
    };
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('d4nUv', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('bE1mJ');
    var _h = f.createContext(g.default);
}), c.register('MTx3j', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('9b4VT'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ApiOutlined';
    var _k = g.forwardRef(j);
}), c.register('9b4VT', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('hC14o', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('G4NK/'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FunnelPlotOutlined';
    var _k = g.forwardRef(j);
}), c.register('G4NK/', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('YXb2d', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('iJyyQ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'RocketOutlined';
    var _k = g.forwardRef(j);
}), c.register('iJyyQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('WcNNP', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('3nVkg'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TableOutlined';
    var _k = g.forwardRef(j);
}), c.register('3nVkg', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('0rXvy3', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('Eh2Wh');
    let k, l, m, n = a => a;
    const o = '#1890FF',
        p = h.default.div(k || (k = n`
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
`), j.Fonts.SFPro, 14, a => a.selected && !a.blockBackground ? '#E5F7FE' : i.default.White, a => a.selected ? o : 'rgba(0,0,0,.65)', a => a.selected && !a.blockStripe && 'border-right: 3px solid ' + o + ';', o),
        q = h.default.div.attrs({
            className: 'flex vc maxWidth'
        })(l || (l = n``)),
        r = h.default.div(m || (m = n``));
    class s extends g.Component {
        render() {
            const {
                title: t,
                onClick: u,
                selected: v,
                blockStripe: w,
                blockBackground: x
            } = this.props, y = this.props.icon;
            return (0, f.jsxs)(p, {
                selected: v,
                blockStripe: w,
                blockBackground: x,
                onClick: u,
                className: this.props.className,
                ...this.props.style,
                children: [
                    y ? (0, f.jsx)(y, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, f.jsxs)(q, {
                        children: [
                            (0, f.jsx)(r, {
                                children: t
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
}), c.register('AyJGn', function(d, e) {
    a(d.exports, 'QUESTION_LIMIT', function() {
        return _k;
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('4F2ZN'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('qMSe6'),
        j = c('6jmvl');
    const _k = 400;
    let l = class extends h.Component {
        render() {
            return this.props.editor.questions.length < _k ? null : (0, g.jsx)(i.default, {
                message: 'Question Limit Reached',
                description: `Kits cannot contain more than ${ _k } questions.`,
                type: 'error',
                style: {
                    margin: 10
                }
            });
        }
    };
    l = (0, f.__decorate)([
        (0, j.inject)('editor'),
        j.observer
    ], l);
    var _m = l;
}), c.register('S8u0C', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('4F2ZN'),
        g = c('gRbUn'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('8KqQ+'),
        l = c('t52Ep');
    let m, n = class extends i.Component {
        render() {
            return this.props.editor.questions.length ? (0, g.jsxs)(_p, {
                children: [
                    (0, g.jsx)(l.default, {
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
    n = (0, f.__decorate)([
        (0, h.inject)('editor'),
        h.observer
    ], n);
    var _o = n;
    const _p = j.default.div.attrs({
        className: 'flex hc vc'
    })(m || (m = (a => a)`
  font-size: 14px;
  border-top: 1px solid ${ 0 };
  padding: 15px;
  line-height: 1;
`), k.default.BorderGray);
}), c.register('DcSOE', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+'),
        i = c('Z190R'),
        j = c('cOwQ4');
    let k;
    const l = g.default.div(k || (k = (a => a)`
  flex: 1;
  width: 100%;
  height: 100%;
  color: ${ 0 };
  background: ${ 0 };
  display: flex;
  flex-direction: column;
`), h.default.Black, h.default.Snow);
    var _m = () => (0, f.jsxs)(l, {
        children: [
            (0, f.jsx)(i.default, {}),
            (0, f.jsx)(j.default, {})
        ]
    });
}), c.register('Z190R', function(d, e) {
    a(d.exports, 'RIGHT_SIDE_HEADER_PADDING', function() {
        return _q;
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('8KqQ+'),
        l = c('/ElwX'),
        m = c('6jmvl'),
        n = c('7mElM'),
        o = c('/OJrL');
    let p;
    const _q = 20;
    let r = class extends i.Component {
        render() {
            return (0, h.jsx)(_s, {
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'getContent', () => this.props.editor.questionsChecked.length ? (0, h.jsx)(n.default, {}) : (0, h.jsx)(o.default, {}));
        }
    };
    r = (0, g.__decorate)([
        (0, m.inject)('editor'),
        m.observer
    ], r);
    const _s = j.default.div(p || (p = (a => a)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${ 0 };
`), k.default.White, l.HEADER_HEIGHT, k.default.BorderGray);
    var _t = r;
}), c.register('7mElM', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('6jmvl'),
        k = c('u4s09'),
        l = c('Eh2Wh'),
        m = c('quE27'),
        n = c('Y6i538'),
        o = c('P1KtI'),
        p = c('v2EsB'),
        q = c('wKi0F'),
        r = c('Z190R');
    let s, t, u, v = a => a,
        w = class extends i.Component {
            render() {
                const x = this.props.editor.questionsChecked.length;
                return (0, h.jsxs)(_y, {
                    children: [
                        (0, h.jsx)(_z, {
                            onClick: this.onSelectQuestionCount,
                            children: `${ x } ${ (0, m.plural)('question', x) } selected`
                        }),
                        (0, h.jsxs)(_A, {
                            children: [
                                (0, h.jsx)(o.default, {
                                    size: 'large',
                                    onClick: this.convertSelectedQuestions,
                                    children: 'Convert to Text Input'
                                }),
                                (0, h.jsx)(o.default, {
                                    onClick: this.deleteSelectedQuestions,
                                    style: {
                                        marginLeft: 5
                                    },
                                    type: 'primary',
                                    icon: (0, h.jsx)(n.default, {}),
                                    size: 'large',
                                    children: 'Delete'
                                })
                            ]
                        })
                    ]
                });
            }
            constructor(...a) {
                super(...a), (0, f.default)(this, 'onSelectQuestionCount', () => {
                    this.props.editor.questionsChecked.length === this.props.editor.questions.length ? this.props.editor.questionsChecked.replace([]) : this.props.editor.questionsChecked.replace(this.props.editor.questions.map(a => a._id));
                }), (0, f.default)(this, 'deleteSelectedQuestions', () => {
                    (0, p.default)(this.props.editor.questionsChecked);
                }), (0, f.default)(this, 'convertSelectedQuestions', () => {
                    (0, q.default)(this.props.editor.questionsChecked);
                });
            }
        };
    w = (0, g.__decorate)([
        (0, j.inject)('editor'),
        j.observer
    ], w);
    var _x = w;
    const _y = k.default.div(s || (s = v`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${ 0 }px;
`), () => r.RIGHT_SIDE_HEADER_PADDING),
        _z = k.default.div(t || (t = v`
  font-weight: ${ 0 };
  font-size: 20px;
  cursor: pointer;
`), l.FontWeights.Bold),
        _A = k.default.div(u || (u = v`
  display: flex;
  align-items: center;
`));
}), c.register('Y6i538', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('goKxN8'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('goKxN8', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('v2EsB', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('quE27'),
        g = c('bE1mJ'),
        h = c('lptuh'),
        i = c('JkQCT');
    var _j = a => {
        const k = (0, i.toJS)(a);
        (0, f.request)({
            url: '/api/v1/editor/questions/remove',
            method: 'post',
            data: {
                questions: a,
                kitId: g.default.kitDetails.id
            },
            success: () => {
                g.default.editor.questionsChecked.replace([]);
                const l = g.default.editor.questions.filter(l => !k.includes(l._id));
                g.default.editor.questions.replace(l);
            },
            error: () => (0, h.throwError)({
                title: 'Error deleting questions...'
            })
        });
    };
}), c.register('wKi0F', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('quE27'),
        g = c('bE1mJ'),
        h = c('lptuh'),
        i = c('JkQCT');
    var _j = a => {
        const k = (0, i.toJS)(a);
        (0, f.request)({
            url: '/api/v1/editor/questions/convert-text-input',
            method: 'post',
            data: {
                questions: k,
                kitId: g.default.kitDetails.id
            },
            success: a => {
                let l = {};
                a.forEach(a => l[a._id] = a), g.default.editor.questionsChecked.replace([]);
                const m = g.default.editor.questions.map(a => l[a._id] ? l[a._id] : a);
                g.default.editor.questions.replace(m);
            },
            error: () => (0, h.throwError)({
                title: 'Error converting questions...',
                content: 'One of the questions might have an image or equation as the answer, which cannot be converted to a text input question'
            })
        });
    };
}), c.register('/OJrL', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Z190R'),
        i = c('BA14D'),
        j = c('P1KtI'),
        k = c('nKuOQ'),
        l = c('FB7HT26');
    let m;
    var _n = () => (0, f.jsx)(_o, {
        children: (0, f.jsx)(l.default, {
            to: k.DASHBOARD,
            children: (0, f.jsx)(j.default, {
                size: 'large',
                icon: (0, f.jsx)(i.default, {}),
                type: 'primary',
                children: 'All Done'
            })
        })
    });
    const _o = g.default.div(m || (m = (a => a)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${ 0 }px;
`), () => h.RIGHT_SIDE_HEADER_PADDING);
}), c.register('BA14D', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('+iTmi'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('+iTmi', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('FB7HT26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('+cTfn');
    c('O0Kav');
    var _h = a => a.external || !a.to ? (0, f.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: d => {
            a.onClick && 'Enter' === d.key && (d.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, f.jsx)(g.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('cOwQ4', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('s/YA9'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('esTNc');
    let j;
    const k = c('u4s09').default.div.attrs({
        className: 'scroll'
    })(j || (j = (a => a)`
  height: 100%;
  width: 100%;
  flex: 1;
  div {
    box-sizing: border-box;
  }
`));
    class l extends h.Component {
        render() {
            return (0, g.jsx)(k, {
                ref: this.containerRef,
                children: (0, g.jsx)(i.default, {
                    scrollToTop: this.scrollToTop
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'containerRef', h.createRef()), (0, f.default)(this, 'scrollToTop', () => {
                this.containerRef.current && this.containerRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    var _m = l;
}), c.register('esTNc', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('EC4am'),
        k = c('aB6BC'),
        l = c('RfwiW'),
        m = c('0QNOt'),
        n = c('6PSR4'),
        o = c('d4nUv');
    let p;
    const q = (0, i.observer)(a => {
            const {
                editor: r,
                kitDetails: s
            } = g.useContext(o.default);
            return (0, f.jsx)(_r, {
                children: r.questions.map(e => (0, f.jsx)('div', {
                    children: (0, f.jsx)(j.default, {
                        question: e,
                        showCheckbox: !0,
                        checked: r.questionsChecked.includes(e._id),
                        handleCheckChange: a => {
                            const t = a.target.checked;
                            t && r.questionsChecked.push(e._id), t || r.questionsChecked.replace(r.questionsChecked.filter(a => a !== e._id));
                        },
                        canEdit: !0,
                        onEditClicked: a => {
                            a.stopPropagation(), r.currentlyEditingQuestionId = e._id, (0, l.default)(k.addNewQuestion);
                        },
                        onCopyClicked: r => {
                            r.stopPropagation();
                            const t = (0, n.questionToAddedQuestion)(e, s.id);
                            (0, m.default)([{
                                ...t,
                                source: e.source || 'editor'
                            }], () => {
                                a.scrollToTop();
                            });
                        }
                    }, e._id)
                }, e._id))
            });
        }),
        _r = h.default.div(p || (p = (a => a)`
  padding: ${ 0 }px;
`), 10);
    var _s = q;
}), c.register('EC4am', function(d, e) {
    a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('s/YA9'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('rDgzs'),
        j = c('0qHa9'),
        k = c('rLQJQ7'),
        l = c('+Nyqr7'),
        m = c('rLXLn'),
        n = c('P1KtI'),
        o = c('QZ0Z+'),
        p = c('0nKwk1'),
        q = c('VNuyu'),
        r = c('LBLT38'),
        s = c('Dn89R'),
        t = c('u4s09'),
        u = c('Eh2Wh'),
        v = c('8KqQ+'),
        w = c('aXpKE'),
        x = c('HloXO');
    let y;
    const z = (0, t.default)(o.default)(y || (y = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), a => a.font ? a.font : u.Fonts.SFPro, v.default.Black);
    class A extends h.Component {
        componentDidUpdate(B) {
            B.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }));
        }
        render() {
            const {
                question: B,
                showCheckbox: C,
                checked: D,
                canEdit: E,
                canAdd: F,
                fontFamily: G
            } = this.props;
            let H = u.Fonts.SFPro;
            G && (H = G);
            const I = B.audio && !B.text && !B.image && !B.latex;
            return (0, g.jsxs)(z, {
                font: H,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: '100%'
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, g.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, g.jsxs)('div', {
                                style: {
                                    justifyContent: 'space-between'
                                },
                                className: 'flex vc maxWidth',
                                children: [
                                    (0, g.jsxs)('div', {
                                        className: 'flex vc',
                                        children: [
                                            C && (0, g.jsx)(p.default, {
                                                style: {
                                                    zoom: 1.3,
                                                    marginRight: 10,
                                                    marginTop: 4
                                                },
                                                onChange: this.props.handleCheckChange,
                                                onClick: B => B.stopPropagation(),
                                                checked: D
                                            }),
                                            (0, g.jsx)(w.default, {
                                                text: B.text,
                                                image: B.image,
                                                latex: B.latex,
                                                customImageMargin: 10,
                                                customImageSize: 72
                                            }),
                                            B.audio && (0, g.jsx)(s.default, {
                                                title: 'Play Audio',
                                                children: (0, g.jsx)(n.default, {
                                                    style: {
                                                        marginLeft: I ? 0 : 10,
                                                        marginRight: I ? 10 : 0
                                                    },
                                                    type: 'primary',
                                                    shape: 'circle',
                                                    icon: (0, g.jsx)(j.default, {}),
                                                    onClick: this.onAudioPress
                                                })
                                            }),
                                            I && (0, g.jsx)(w.default, {
                                                text: 'Audio Only Question',
                                                customTextColor: '#bdbdbd'
                                            }),
                                            B.type === i.QuestionType.textInput && (0, g.jsx)(r.default, {
                                                color: 'magenta',
                                                style: {
                                                    marginLeft: 10,
                                                    fontFamily: H
                                                },
                                                children: 'Text Input'
                                            })
                                        ]
                                    }),
                                    E && (0, g.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginLeft: 10
                                        },
                                        children: [
                                            (0, g.jsx)(s.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, g.jsx)(n.default, {
                                                    shape: 'circle',
                                                    icon: (0, g.jsx)(k.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: {
                                                        marginRight: 5
                                                    }
                                                })
                                            }),
                                            (0, g.jsx)(s.default, {
                                                title: 'Edit',
                                                placement: 'bottom',
                                                children: (0, g.jsx)(n.default, {
                                                    shape: 'circle',
                                                    icon: (0, g.jsx)(l.default, {}),
                                                    size: 'small',
                                                    onClick: this.props.onEditClicked
                                                })
                                            })
                                        ]
                                    }),
                                    F && (0, g.jsx)(s.default, {
                                        title: 'Add Question',
                                        placement: 'left',
                                        children: (0, g.jsx)(m.default, {
                                            style: {
                                                fontSize: 19
                                            },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, g.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            this.state.showingAnswers && (0, g.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    paddingLeft: C ? 34 : 0
                                },
                                children: B.answers.map((C, D) => (0, g.jsxs)(h.Fragment, {
                                    children: [
                                        (0, g.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, g.jsx)(w.default, {
                                                    text: C.text,
                                                    image: C.image,
                                                    latex: C.latex,
                                                    customTextColor: C.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                C.image || C.latex ? (0, g.jsx)(r.default, {
                                                    color: C.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: C.image ? 2 : 12
                                                    },
                                                    children: C.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        D + 1 !== B.answers.length && (0, g.jsx)(q.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, C._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, f.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, f.default)(this, 'onAudioPress', a => {
                a.stopPropagation();
                new Audio((0, x.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _B = A;
}), c.register('0qHa9', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('NHcCX'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'AudioOutlined';
    var _k = g.forwardRef(j);
}), c.register('NHcCX', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('rLQJQ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('M2CB57'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('M2CB57', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('+Nyqr7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lzm1Z7'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('lzm1Z7', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('rLXLn', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('Eb/C/'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlusCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('Eb/C/', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('0nKwk1', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4shVI1'),
        g = c('q2qDo1');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('4shVI1', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    }, function(f) {
        return _s = f;
    });
    var f = c('/U36/'),
        g = c('y095j9'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('LbJH1'),
        k = c('q2qDo1'),
        l = c('XDmwF'),
        m = c('NgjTH0'),
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
    const o = (a, c) => {
        var p, {
                prefixCls: q,
                className: r,
                rootClassName: _s,
                children: t,
                indeterminate: u = !1,
                style: v,
                onMouseEnter: w,
                onMouseLeave: x,
                skipGroup: y = !1,
                disabled: z
            } = a,
            A = n(a, [
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
            getPrefixCls: B,
            direction: C
        } = h.useContext(i.ConfigContext), D = h.useContext(k.GroupContext), {
            isFormItemInput: E
        } = h.useContext(j.FormItemInputContext), F = h.useContext(l.default), G = null !== (p = (null == D ? void 0 : D.disabled) || z) && void 0 !== p ? p : F, H = h.useRef(A.value);
        h.useEffect(() => {
            null == D || D.registerValue(A.value);
        }, []), h.useEffect(() => {
            if (!y)
                return A.value !== H.current && (null == D || D.cancelValue(H.current), null == D || D.registerValue(A.value), H.current = A.value), () => null == D ? void 0 : D.cancelValue(A.value);
        }, [A.value]);
        const I = B('checkbox', q),
            [J, K] = (0, m.default)(I),
            L = Object.assign({}, A);
        D && !y && (L.onChange = function() {
            A.onChange && A.onChange.apply(A, arguments), D.toggleOption && D.toggleOption({
                label: t,
                value: A.value
            });
        }, L.name = D.name, L.checked = D.value.includes(A.value));
        const M = b(f)({
                [`${ I }-wrapper`]: !0,
                [`${ I }-rtl`]: 'rtl' === C,
                [`${ I }-wrapper-checked`]: L.checked,
                [`${ I }-wrapper-disabled`]: G,
                [`${ I }-wrapper-in-form-item`]: E
            }, r, _s, K),
            N = b(f)({
                [`${ I }-indeterminate`]: u
            }, K),
            O = u ? 'mixed' : void 0;
        return J(h.createElement('label', {
            className: M,
            style: v,
            onMouseEnter: w,
            onMouseLeave: x
        }, h.createElement(g.default, Object.assign({
            'aria-checked': O
        }, L, {
            prefixCls: I,
            className: N,
            disabled: G,
            ref: c
        })), void 0 !== t && h.createElement('span', null, t)));
    };
    var p = h.forwardRef(o);
}), c.register('q2qDo1', function(d, e) {
    a(d.exports, 'GroupContext', function() {
        return _n;
    }, function(f) {
        return _n = f;
    }), a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('g8lYc'),
        g = c('/U36/'),
        h = c('Kpy/B'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('4shVI1'),
        l = c('NgjTH0'),
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
    const _n = i.createContext(null),
        o = (a, c) => {
            var {
                defaultValue: p,
                children: q,
                options: r = [],
                prefixCls: s,
                className: _t,
                rootClassName: u,
                style: v,
                onChange: w
            } = a, x = m(a, [
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
                getPrefixCls: y,
                direction: z
            } = i.useContext(j.ConfigContext), [A, B] = i.useState(x.value || p || []), [C, D] = i.useState([]);
            i.useEffect(() => {
                'value' in x && B(x.value || []);
            }, [x.value]);
            const E = () => r.map(a => 'string' == typeof a || 'number' == typeof a ? {
                    label: a,
                    value: a
                } : a),
                F = y('checkbox', s),
                G = `${ F }-group`,
                [H, I] = (0, l.default)(F),
                J = (0, h.default)(x, [
                    'value',
                    'disabled'
                ]);
            r && r.length > 0 && (q = E().map(a => i.createElement(k.default, {
                prefixCls: F,
                key: a.value.toString(),
                disabled: 'disabled' in a ? a.disabled : x.disabled,
                value: a.value,
                checked: A.includes(a.value),
                onChange: a.onChange,
                className: `${ G }-item`,
                style: a.style
            }, a.label)));
            const K = {
                    toggleOption: a => {
                        const L = A.indexOf(a.value),
                            M = (0, f.default)(A); -
                        1 === L ? M.push(a.value) : M.splice(L, 1), 'value' in x || B(M);
                        const N = E();
                        null == w || w(M.filter(a => C.includes(a)).sort((a, L) => N.findIndex(L => L.value === a) - N.findIndex(a => a.value === L)));
                    },
                    value: A,
                    disabled: x.disabled,
                    name: x.name,
                    registerValue: a => {
                        D(b => [].concat((0, f.default)(b), [a]));
                    },
                    cancelValue: a => {
                        D(b => b.filter(b => b !== a));
                    }
                },
                L = b(g)(G, {
                    [`${ G }-rtl`]: 'rtl' === z
                }, _t, u, I);
            return H(i.createElement('div', Object.assign({
                className: L,
                style: v
            }, J, {
                ref: c
            }), i.createElement(_n.Provider, {
                value: K
            }, q)));
        },
        p = i.forwardRef(o);
    var q = i.memo(p);
}), c.register('NgjTH0', function(d, e) {
    a(d.exports, 'getStyle', function() {
        return _l;
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = new(0, f.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        k = a => {
            const {
                checkboxCls: l
            } = a, m = `${ l }-wrapper`;
            return [{
                    [`${ l }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex'
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ m }`]: {
                            marginInlineStart: a.marginXS
                        },
                        [`&${ m }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ l }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ l }-inner`]: Object.assign({}, (0, i.genFocusOutline)(a))
                        },
                        [`${ l }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: a.checkboxSize,
                            height: a.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: a.colorBgContainer,
                            border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                            borderRadius: a.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ a.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: a.checkboxSize / 14 * 5,
                                height: a.checkboxSize / 14 * 8,
                                border: `${ a.lineWidthBold }px solid ${ a.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ a.motionDurationFast } ${ a.motionEaseInBack }, opacity ${ a.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: a.paddingXS,
                            paddingInlineEnd: a.paddingXS
                        }
                    })
                },
                {
                    [l]: {
                        '&-indeterminate': {
                            [`${ l }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: a.fontSizeLG / 2,
                                    height: a.fontSizeLG / 2,
                                    backgroundColor: a.colorPrimary,
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
                    [`${ m }:hover ${ l }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ m }:not(${ m }-disabled),\n        ${ l }:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            borderColor: a.colorPrimary
                        }
                    },
                    [`${ m }:not(${ m }-disabled)`]: {
                        [`&:hover ${ l }-checked:not(${ l }-disabled) ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }-checked:not(${ l }-disabled):after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-checked`]: {
                        [`${ l }-inner`]: {
                            backgroundColor: a.colorPrimary,
                            borderColor: a.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ a.motionDurationMid } ${ a.motionEaseOutBack } ${ a.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: a.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ a.lineWidthBold }px solid ${ a.colorPrimary }`,
                            animationName: j,
                            animationDuration: a.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ a.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ m }-checked:not(${ m }-disabled),\n        ${ l }-checked:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }:after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ m }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ l }-disabled`]: {
                        [`&, ${ l }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ l }-inner`]: {
                            background: a.colorBgContainerDisabled,
                            borderColor: a.colorBorder,
                            '&:after': {
                                borderColor: a.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: a.colorTextDisabled
                        },
                        [`&${ l }-indeterminate ${ l }-inner::after`]: {
                            background: a.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _l(m, n) {
        const o = (0, h.merge)(n, {
            checkboxCls: `.${ m }`,
            checkboxSize: n.controlInteractiveSize
        });
        return [k(o)];
    }
    var _m = (0, g.default)('Checkbox', (a, d) => {
        let {
            prefixCls: n
        } = d;
        return [_l(n, a)];
    });
}), c.register('LBLT38', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    }, function(f) {
        return _u = f;
    });
    var f = c('ReZvd'),
        g = c('/U36/'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('puH1V'),
        k = c('Zs019'),
        l = c('4AW2P8'),
        m = c('8/APV8'),
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
    const o = (a, c) => {
            var {
                prefixCls: p,
                className: q,
                rootClassName: r,
                style: s,
                children: t,
                icon: _u,
                color: v,
                onClose: w,
                closeIcon: x,
                closable: y = !1
            } = a, z = n(a, [
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
                getPrefixCls: A,
                direction: B
            } = h.useContext(i.ConfigContext), [C, D] = h.useState(!0);
            h.useEffect(() => {
                'visible' in z && D(z.visible);
            }, [z.visible]);
            const E = (0, j.isPresetColor)(v) || (0, j.isPresetStatusColor)(v),
                F = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, s),
                G = A('tag', p),
                [H, I] = (0, m.default)(G),
                J = b(g)(G, {
                    [`${ G }-${ v }`]: E,
                    [`${ G }-has-color`]: v && !E,
                    [`${ G }-hidden`]: !C,
                    [`${ G }-rtl`]: 'rtl' === B
                }, q, r, I),
                K = a => {
                    a.stopPropagation(), null == w || w(a), a.defaultPrevented || D(!1);
                },
                L = 'function' == typeof z.onClick || t && 'a' === t.type,
                M = _u || null,
                N = M ? h.createElement(h.Fragment, null, M, h.createElement('span', null, t)) : t,
                O = h.createElement('span', Object.assign({}, z, {
                    ref: c,
                    className: J,
                    style: F
                }), N, y ? x ? h.createElement('span', {
                    className: `${ G }-close-icon`,
                    onClick: K
                }, x) : h.createElement(f.default, {
                    className: `${ G }-close-icon`,
                    onClick: K
                }) : null);
            return H(L ? h.createElement(k.default, null, O) : O);
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var q = p;
}), c.register('4AW2P8', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('/U36/'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('8/APV8'),
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
    var _k = a => {
        var {
            prefixCls: l,
            className: m,
            checked: n,
            onChange: o,
            onClick: p
        } = a, q = j(a, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: r
        } = g.useContext(h.ConfigContext), s = r('tag', l), [t, u] = (0, i.default)(s), v = b(f)(s, {
            [`${ s }-checkable`]: !0,
            [`${ s }-checkable-checked`]: n
        }, m, u);
        return t(g.createElement('span', Object.assign({}, q, {
            className: v,
            onClick: a => {
                null == o || o(!n), null == p || p(a);
            }
        })));
    };
}), c.register('8/APV8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('zn07B8'),
        i = c('OVjjp'),
        j = c('/zzpx');
    const k = (a, d, c) => {
            const l = (0, h.default)(c);
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ l }Bg`],
                    borderColor: a[`color${ l }Border`]
                }
            };
        },
        l = a => (0, i.genPresetColor)(a, (d, c) => {
            let {
                textColor: m,
                lightBorderColor: n,
                lightColor: o,
                darkColor: p
            } = c;
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: m,
                    background: o,
                    borderColor: n,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: p,
                        borderColor: p
                    }
                }
            };
        }),
        m = a => {
            const {
                paddingXXS: n,
                lineWidth: o,
                tagPaddingHorizontal: p,
                componentCls: q
            } = a, r = p - o, s = n - o;
            return {
                [q]: Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: a.marginXS,
                    paddingInline: r,
                    fontSize: a.tagFontSize,
                    lineHeight: `${ a.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: a.tagDefaultBg,
                    border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                    borderRadius: a.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ a.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ q }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: a.tagDefaultColor
                    },
                    [`${ q }-close-icon`]: {
                        marginInlineStart: s,
                        color: a.colorTextDescription,
                        fontSize: a.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ a.motionDurationMid }`,
                        '&:hover': {
                            color: a.colorTextHeading
                        }
                    },
                    [`&${ q }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ a.iconCls }-close, ${ a.iconCls }-close:hover`]: {
                            color: a.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ q }-checkable-checked):hover`]: {
                            color: a.colorPrimary,
                            backgroundColor: a.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: a.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: a.colorPrimary,
                            '&:hover': {
                                backgroundColor: a.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: a.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ a.iconCls } + span, > span + ${ a.iconCls }`]: {
                        marginInlineStart: r
                    }
                })
            };
        };
    var _n = (0, f.default)('Tag', a => {
        const {
            fontSize: o,
            lineHeight: p,
            lineWidth: q,
            fontSizeIcon: r
        } = a, s = Math.round(o * p), t = a.fontSizeSM, u = s - 2 * q, v = a.colorFillAlter, w = a.colorText, x = (0, g.merge)(a, {
            tagFontSize: t,
            tagLineHeight: u,
            tagDefaultBg: v,
            tagDefaultColor: w,
            tagIconSize: r - 2 * q,
            tagPaddingHorizontal: 8
        });
        return [
            m(x),
            l(x),
            k(x, 'success', 'Success'),
            k(x, 'processing', 'Info'),
            k(x, 'error', 'Error'),
            k(x, 'warning', 'Warning')
        ];
    });
}), c.register('zn07B8', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('aXpKE', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+'),
        i = c('HFnro8'),
        j = c('JuRCP');
    let k, l, m, n = a => a;
    const o = g.default.div(k || (k = n`
  display: flex;
  align-items: center;
`)),
        p = g.default.div(l || (l = n`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), a => a.customTextColor ? a.customTextColor : h.default.Black, a => a.customFontSize ? a.customFontSize : 26, a => a.customFontWeight ? a.customFontWeight : 600),
        q = g.default.div(m || (m = n``));
    var _r = a => {
        var s;
        return (0, f.jsxs)(o, {
            onClick: s => a.blockOutsideClicks ? s.stopPropagation() : null,
            children: [
                a.image && (0, f.jsx)(i.default, {
                    image: a.image,
                    size: a.customImageSize || 45,
                    customRightMargin: a.customImageMargin || 5,
                    showBorder: !0
                }),
                a.latex ? (0, f.jsx)(q, {
                    style: (null === (s = a.text) || void 0 === s ? void 0 : s.length) ? {
                        color: h.default.Black,
                        padding: 20,
                        border: `1px solid ${ h.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: a.customFontSize || 26
                    } : {
                        color: h.default.Black,
                        fontSize: a.customFontSize || 26
                    },
                    children: (0, f.jsx)(j.default, {
                        latex: a.latex
                    })
                }) : null,
                (0, f.jsx)(p, {
                    ...a,
                    children: a.text
                })
            ]
        });
    };
}), c.register('JuRCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = g.lazy(() => c('bPSSr0'));
    var _i = a => (0, f.jsx)(g.Suspense, {
        fallback: a.fallback || null,
        children: (0, f.jsx)(h, {
            latex: a.latex
        })
    });
}), c.register('bPSSr0', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('emcKB')),
        import('./' + c('Dq3qN').resolve('5OCdz'))
    ]).then(() => c('vZVkZ'));
}), c.register('0QNOt', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('quE27'),
        g = c('bE1mJ'),
        h = c('JkQCT'),
        i = c('aB6BC'),
        j = c('AUwx6'),
        k = c('AyJGn'),
        l = c('KVDSR'),
        m = c('RfwiW');
    var _n = (a, d, c) => {
        const o = g.default.editor.questions.length,
            p = k.QUESTION_LIMIT - o,
            q = a.filter((a, d) => d < p);
        g.default.editor.error = (0, j.defaultError)(), (0, f.request)({
            url: '/api/v1/editor/questions/add',
            method: 'post',
            data: {
                questions: q
            },
            success: a => {
                (0, l.default)();
                let r = (0, h.toJS)(g.default.editor.questions);
                a.filter(a => !a.replaced).forEach(a => r[c && c.pushToBottom ? 'push' : 'unshift'](a.question));
                a.filter(a => null !== a.replaced).forEach(a => {
                    r = r.map(r => r._id !== a.replaced ? r : a.question);
                }), g.default.editor.questions.replace(r), c && c.stay || (0, m.default)(i.editorBase);
            },
            error: a => {
                a && a.message && a.message.text && (g.default.editor.error.message = a.message.text);
            },
            both: () => {
                d && d();
            }
        });
    };
}), c.register('KVDSR', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('bE1mJ'),
        g = c('quE27');
    var _h = () => {
        f.default.editor.editSessionCounted || (0, g.request)({
            url: '/api/v1/editor/edit-session',
            method: 'post',
            data: {
                kitId: f.default.kitDetails.id
            },
            success: () => f.default.editor.editSessionCounted = !0,
            error: () => !1
        });
    };
}), c.register('6PSR4', function(d, e) {
    a(d.exports, 'questionToAddedQuestion', function() {
        return _x;
    }), a(d.exports, 'default', function() {
        return _A;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('ej/50'),
        k = c('P1KtI'),
        l = c('3t9ce'),
        m = c('Ll6/N'),
        n = c('Ygi8n0'),
        o = c('8KqQ+'),
        p = c('EC4am'),
        q = c('hQxzs'),
        r = c('0QNOt'),
        s = c('6jmvl'),
        t = c('AyJGn');
    const {
        TabPane: u
    } = m.default;
    let v;
    var w;
    (w = v || (v = {})).search = 'search', w.myKits = 'myKits';
    const _x = (a, d) => ({
            questionText: a.text,
            image: a.image,
            audio: a.audio,
            latex: a.latex,
            type: a.type,
            source: 'import',
            answers: a.answers.map(a => ({
                correct: a.correct,
                text: a.text,
                image: a.image,
                latex: a.latex,
                textType: a.textType
            })),
            kitId: d
        }),
        y = {
            selectedTab: v.search,
            addedQuestionIds: []
        };
    let z = class extends i.Component {
        render() {
            const {
                visible: A,
                close: B
            } = this.props;
            return (0, h.jsxs)(l.default, {
                destroyOnClose: !0,
                open: A,
                width: '100%',
                placement: 'bottom',
                height: '80vh',
                bodyStyle: {
                    overflow: 'hidden'
                },
                onClose: B,
                closable: !0,
                children: [
                    (0, h.jsxs)(m.default, {
                        onChange: this.handleTabChange,
                        type: 'card',
                        activeKey: this.state.selectedTab,
                        children: [
                            (0, h.jsx)(u, {
                                tab: 'Search'
                            }, v.search),
                            (0, h.jsx)(u, {
                                tab: 'My Kits'
                            }, v.myKits)
                        ]
                    }),
                    this.getSearch()
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', y), (0, f.default)(this, 'handleTabChange', a => {
                this.setState({
                    selectedTab: a
                });
            }), (0, f.default)(this, 'addQuestion', a => {
                this.setState({
                    addedQuestionIds: [
                        ...this.state.addedQuestionIds,
                        a._id
                    ]
                }), (0, r.default)([_x(a, this.props.kitDetails.id)], () => !1, {
                    stay: !0
                });
            }), (0, f.default)(this, 'renderQuestions', a => {
                const A = a.filter(a => !this.state.addedQuestionIds.includes(a._id));
                if (!A.length)
                    return null;
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsxs)('div', {
                            className: 'maxWidth flex',
                            style: {
                                justifyContent: 'space-between',
                                marginBottom: 10
                            },
                            children: [
                                (0, h.jsx)('div', {}),
                                (0, h.jsx)(k.default, {
                                    onClick: () => {
                                        (0, r.default)(A.map(a => _x(a, this.props.kitDetails.id)));
                                    },
                                    type: 'primary',
                                    icon: (0, h.jsx)(j.default, {}),
                                    children: 'Add All Questions'
                                })
                            ]
                        }),
                        (0, h.jsx)(q.default, {
                            children: A.map(a => (0, h.jsx)('div', {
                                children: (0, h.jsx)(p.default, {
                                    question: a,
                                    showAllAnswers: !0,
                                    canAdd: !0,
                                    onAddClicked: A => {
                                        A.stopPropagation(), this.addQuestion(a);
                                    }
                                })
                            }, a._id))
                        })
                    ]
                });
            }), (0, f.default)(this, 'getSearch', () => (0, h.jsx)(n.default, {
                questionRenderer: this.renderQuestions,
                showMyKits: this.state.selectedTab === v.myKits,
                questionFetchLimit: t.QUESTION_LIMIT,
                customHeight: 'calc(80vh - 104px)',
                customLeftSidePadding: '0px 15px 0px 0px',
                customBackgroundColor: o.default.White,
                searchQuery: this.props.kitDetails.title || void 0,
                blockKitRedirect: !0,
                isFromQuestionBank: !0,
                blockChangingUrl: !0
            }));
        }
    };
    z = (0, g.__decorate)([
        (0, s.inject)('kitDetails'),
        s.observer
    ], z);
    var _A = z;
}), c.register('Ygi8n0', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('s/YA9'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('WfEWz'),
        j = c('quE27'),
        k = c('i6nLf'),
        l = c('b5S9S0'),
        m = c('EC4am'),
        n = c('lptuh'),
        o = c('hX1pp3'),
        p = c('9zaF+'),
        q = c('Eh2Wh'),
        r = c('+cTfn'),
        s = c('dVt9R1'),
        t = c('RoVe20'),
        u = c('Tzf4u');
    const v = 'GIMKIT_SEARCH_CACHE';
    class w extends h.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0);
        }
        componentDidUpdate(x, y) {
            this.state.language === y.language && this.state.subject === y.subject && this.state.sort === y.sort && this.props.showMyKits === x.showMyKits || this.onSearch(!0);
        }
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    this.props.overrideTitle && (0, g.jsx)(j.Title, {
                        title: `Kits about "${ this.props.searchQuery }"`
                    }),
                    (0, g.jsxs)(i.Container, {
                        customBackgroundColor: this.props.customBackgroundColor,
                        customHeight: this.props.customHeight,
                        children: [
                            (0, g.jsx)(l.LeftSide, {
                                customPadding: this.props.customLeftSidePadding,
                                children: (0, g.jsxs)('div', {
                                    children: [
                                        !this.props.showMyKits && (0, g.jsx)('div', {
                                            style: {
                                                position: 'sticky',
                                                top: 0,
                                                zIndex: 999
                                            },
                                            className: 'maxWidth',
                                            children: (0, g.jsx)(t.default, {
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
                            (0, g.jsx)(l.RightSide, {
                                children: this.getRightSide()
                            })
                        ]
                    })
                ]
            });
        }
        constructor(x) {
            super(x), (0, f.default)(this, 'state', {
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
                sort: t.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, f.default)(this, 'fetchSearchResults', () => {
                const y = this.state.searchQuery;
                if (y && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const z = {
                        query: y,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (z.language = (0, s.getLanguageKey)(this.state.language)), this.state.subject && (z.subject = this.state.subject), (0, j.request)({
                        url: '/api/games/search',
                        data: z,
                        cacheKey: v,
                        success: y => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...y.results
                                ],
                                hasMore: y.hasMore,
                                page: y.page
                            });
                        },
                        error: () => {
                            this.setState({
                                error: !0
                            }), (0, n.throwError)({
                                title: 'Error searching',
                                content: 'Please try again'
                            });
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const A = new URL(window.location.href);
                                A.searchParams.set('q', y), window.history.pushState({}, '', A);
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
            }), (0, f.default)(this, 'fetchMyKits', () => {
                this.setState({
                    fetchingResults: !0
                }), (0, j.request)({
                    cacheKey: v,
                    url: '/api/games/summary/me',
                    method: 'GET',
                    success: x => {
                        this.setState({
                            results: x.games.map(x => ({
                                _id: x._id,
                                title: x.title,
                                gif: x.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: b(u)(x.createdAt).toISOString()
                            }))
                        });
                    },
                    error: () => (0, n.throwError)({
                        title: 'Error fetching Kits'
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                });
            }), (0, f.default)(this, 'fetchQuestions', x => {
                (0, j.request)({
                    url: `/api/games/questions/search/${ x }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: v,
                    method: 'get',
                    success: b => {
                        const y = b.reverse();
                        this.setState({
                            questions: y,
                            currentKit: x
                        });
                    },
                    error: () => !1
                });
            }), (0, f.default)(this, 'onSearch', x => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: x,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, f.default)(this, 'debouncedHover', (0, p.debounce)(x => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(x._id);
            }, 50)), (0, f.default)(this, 'onUpdateSearchQuery', x => {
                this.setState({
                    draftSearchQuery: x
                });
            }), (0, f.default)(this, 'onLanguageSelected', x => {
                this.setState({
                    language: x
                });
            }), (0, f.default)(this, 'onSubjectSelected', x => {
                this.setState({
                    subject: x
                });
            }), (0, f.default)(this, 'onSortSelected', x => {
                this.setState({
                    sort: x
                });
            }), (0, f.default)(this, 'getLeftSide', () => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, g.jsx)(o.default, {
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
                children: this.state.results.map((x, b) => (0, g.jsx)(h.Fragment, {
                    children: (0, g.jsx)(k.default, {
                        id: x._id,
                        title: x.title,
                        gif: x.gif,
                        handleHover: () => this.debouncedHover(x),
                        numberOfQuestions: x.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: x.creator,
                        dateCreated: x.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === x._id,
                        blockHoverable: !0
                    }, x._id)
                }, `read-item-${ x._id }`))
            }) : !this.state.results.length && (0, g.jsx)('div', {
                className: 'maxWidth flex hc vc flex-column',
                children: (0, g.jsxs)('div', {
                    style: {
                        padding: '0 38px',
                        marginTop: 42,
                        textAlign: 'center'
                    },
                    children: [
                        (0, g.jsx)('img', {
                            src: '/client/img/icons/sad.svg'
                        }),
                        (0, g.jsxs)('div', {
                            style: {
                                marginTop: 18,
                                fontFamily: q.Fonts.SFPro,
                                fontSize: 20
                            },
                            children: [
                                (0, g.jsx)('div', {
                                    children: 'We couldn\'t find any results.'
                                }),
                                !this.props.isFromQuestionBank && (0, g.jsxs)('div', {
                                    style: {
                                        marginTop: 24
                                    },
                                    children: [
                                        'Try another search or maybe',
                                        ' ',
                                        (0, g.jsx)(r.Link, {
                                            to: '/create',
                                            children: 'make your own kit!'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })), (0, f.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(x => (0, g.jsx)(m.default, {
                question: x,
                showAllAnswers: !0
            }, x._id)));
        }
    }
    var _x = w;
}), c.register('i6nLf', function(d, e) {
    a(d.exports, 'default', function() {
        return _N;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('QZ0Z+'),
        h = c('VNuyu'),
        i = c('Eh2Wh'),
        j = c('HFnro8'),
        k = c('u4s09'),
        l = c('quE27'),
        m = c('8KqQ+'),
        n = c('FB7HT26'),
        o = c('KxkP827'),
        p = c('Tzf4u');
    let q, r, s, t, u, v, w, x, y, z, A, B = a => a;
    const C = (0, k.default)(n.default).attrs({
            className: 'maxWidth'
        })(q || (q = B`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        D = (0, k.default)(g.default)(r || (r = B`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), m.default.White, m.default.BorderGray, i.Fonts.SFPro),
        E = k.default.div.attrs({
            className: 'flex-column'
        })(s || (s = B`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178),
        F = k.default.div(t || (t = B`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        G = k.default.div(u || (u = B`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        H = k.default.div(v || (v = B`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        I = k.default.div(w || (w = B`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        J = k.default.div(x || (x = B`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), i.Fonts.SFPro),
        K = k.default.i(y || (y = B`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        L = (0, k.default)(K).attrs({
            className: 'fad fa-list'
        })(z || (z = B``)),
        M = (0, k.default)(K).attrs({
            className: 'fad fa-calendar-alt'
        })(A || (A = B``));
    var _N = a => {
        const O = 'normal' === a.size;
        return (0, f.jsx)(C, {
            to: a.blockRedirect ? void 0 : `/view/${ a.id }`,
            children: (0, f.jsx)(D, {
                className: 'maxWidth',
                onMouseEnter: a.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !a.blockHoverable,
                style: {
                    backgroundColor: a.selected ? '#eeeeee' : m.default.White
                },
                children: (0, f.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(j.default, {
                                image: a.gif,
                                size: O ? 178 : 148,
                                onClick: a.redirectOnImageClick && (() => a.blockRedirect ? null : (0, o.NavigateTo)(`/view/${ a.id }`))
                            })
                        }),
                        (0, f.jsx)(E, {
                            children: (0, f.jsxs)(F, {
                                children: [
                                    (0, f.jsx)(G, {
                                        style: {
                                            fontSize: O ? 32 : 23
                                        },
                                        children: a.title
                                    }),
                                    a.creator && (0, f.jsx)(H, {
                                        style: {
                                            fontSize: O ? 18 : 16
                                        },
                                        children: (0, l.capitalizeFirstLetter)(a.creator)
                                    }),
                                    (0, f.jsx)(h.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!a.numberOfQuestions && (0, f.jsxs)(I, {
                                        children: [
                                            (0, f.jsx)(L, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    a.numberOfQuestions ? a.numberOfQuestions : '',
                                                    ' ',
                                                    a.numberOfQuestions ? (0, l.plural)('question', a.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    a.dateCreated && O && (0, f.jsxs)(J, {
                                        children: [
                                            (0, f.jsx)(M, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    b(p)(a.dateCreated).fromNow()
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
}), c.register('b5S9S0', function(d, e) {
    a(d.exports, 'LeftSide', function() {
        return _m;
    }), a(d.exports, 'RightSide', function() {
        return _n;
    });
    var f = c('u4s09'),
        g = c('8KqQ+'),
        h = c('Eh2Wh');
    let i, j, k, l = a => a;
    const _m = f.default.div.attrs({
            id: 'left-side-search',
            className: 'scroll-y'
        })(i || (i = l`
  width: 647px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  padding: ${ 0 };
  padding-top: 0px;
`), g.default.White, g.default.BorderGray, a => a.customPadding ? a.customPadding : '15px'),
        _n = f.default.div.attrs({
            id: 'right-side-search',
            className: 'scroll-y'
        })(j || (j = l`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    f.default.div(k || (k = l`
  font-size: 20px;
  font-weight: ${ 0 };
  margin-bottom: 2px;
`), h.FontWeights.Bold);
}), c.register('hX1pp3', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('O0Kav'),
        g = function(h, i) {
            return g = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(j, k) {
                j.__proto__ = k;
            } || function(j, k) {
                for (var l in k)
                    k.hasOwnProperty(l) && (j[l] = k[l]);
            }, g(h, i);
        };
    var h = function() {
        return h = Object.assign || function(i) {
            for (var j, k = 1, l = arguments.length; k < l; k++)
                for (var m in j = arguments[k])
                    Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
            return i;
        }, h.apply(this, arguments);
    };
    var i = 'Pixel',
        j = 'Percent',
        k = {
            unit: j,
            value: 0.8
        };

    function l(m) {
        return 'number' == typeof m ? {
            unit: j,
            value: 100 * m
        } : 'string' == typeof m ? m.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: i,
            value: parseFloat(m)
        } : m.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: j,
            value: parseFloat(m)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), k) : (console.warn('scrollThreshold should be string or number'), k);
    }
    var m = function(n) {
            function o(p) {
                var q = n.call(this, p) || this;
                return q.lastScrollTop = 0, q.actionTriggered = !1, q.startY = 0, q.currentY = 0, q.dragging = !1, q.maxPullDownDistance = 0, q.getScrollableTarget = function() {
                    return q.props.scrollableTarget instanceof HTMLElement ? q.props.scrollableTarget : 'string' == typeof q.props.scrollableTarget ? document.getElementById(q.props.scrollableTarget) : (null === q.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, q.onStart = function(r) {
                    q.lastScrollTop || (q.dragging = !0, r instanceof MouseEvent ? q.startY = r.pageY : r instanceof TouchEvent && (q.startY = r.touches[0].pageY), q.currentY = q.startY, q._infScroll && (q._infScroll.style.willChange = 'transform', q._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, q.onMove = function(r) {
                    q.dragging && (r instanceof MouseEvent ? q.currentY = r.pageY : r instanceof TouchEvent && (q.currentY = r.touches[0].pageY), q.currentY < q.startY || (q.currentY - q.startY >= Number(q.props.pullDownToRefreshThreshold) && q.setState({
                        pullToRefreshThresholdBreached: !0
                    }), q.currentY - q.startY > 1.5 * q.maxPullDownDistance || q._infScroll && (q._infScroll.style.overflow = 'visible', q._infScroll.style.transform = 'translate3d(0px, ' + (q.currentY - q.startY) + 'px, 0px)')));
                }, q.onEnd = function() {
                    q.startY = 0, q.currentY = 0, q.dragging = !1, q.state.pullToRefreshThresholdBreached && (q.props.refreshFunction && q.props.refreshFunction(), q.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        q._infScroll && (q._infScroll.style.overflow = 'auto', q._infScroll.style.transform = 'none', q._infScroll.style.willChange = 'none');
                    });
                }, q.onScrollListener = function(r) {
                    'function' == typeof q.props.onScroll && setTimeout(function() {
                        return q.props.onScroll && q.props.onScroll(r);
                    }, 0);
                    var s = q.props.height || q._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    q.actionTriggered || ((q.props.inverse ? q.isElementAtTop(s, q.props.scrollThreshold) : q.isElementAtBottom(s, q.props.scrollThreshold)) && q.props.hasMore && (q.actionTriggered = !0, q.setState({
                        showLoader: !0
                    }), q.props.next && q.props.next()), q.lastScrollTop = s.scrollTop);
                }, q.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, q.throttledOnScrollListener = function(r, s, t, u) {
                    var v, w = !1,
                        x = 0;

                    function y() {
                        v && clearTimeout(v);
                    }

                    function z() {
                        var A = this,
                            B = Date.now() - x,
                            C = arguments;

                        function D() {
                            x = Date.now(), t.apply(A, C);
                        }

                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function() {
                        y(), w = !0;
                    }, z;
                }(150, q.onScrollListener).bind(q), q.onStart = q.onStart.bind(q), q.onMove = q.onMove.bind(q), q.onEnd = q.onEnd.bind(q), q;
            }
            return function(p, q) {
                function r() {
                    this.constructor = p;
                }
                g(p, q), p.prototype = null === q ? Object.create(q) : (r.prototype = q.prototype, new r());
            }(o, n), o.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function(p) {
                this.props.dataLength !== p.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, o.prototype.isElementAtTop = function(p, q) {
                void 0 === q && (q = 0.8);
                var r = p === document.body || p === document.documentElement ? window.screen.availHeight : p.clientHeight,
                    s = l(q);
                return s.unit === i ? p.scrollTop <= s.value + r - p.scrollHeight + 1 || 0 === p.scrollTop : p.scrollTop <= s.value / 100 + r - p.scrollHeight + 1 || 0 === p.scrollTop;
            }, o.prototype.isElementAtBottom = function(p, q) {
                void 0 === q && (q = 0.8);
                var r = p === document.body || p === document.documentElement ? window.screen.availHeight : p.clientHeight,
                    s = l(q);
                return s.unit === i ? p.scrollTop + r >= p.scrollHeight - s.value : p.scrollTop + r >= s.value / 100 * p.scrollHeight;
            }, o.prototype.render = function() {
                var p = this,
                    q = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    r = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    s = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(f).createElement('div', {
                    style: s,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(t) {
                        return p._infScroll = t;
                    },
                    style: q
                }, this.props.pullDownToRefresh && b(f).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(t) {
                        return p._pullDown = t;
                    }
                }, b(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !r && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component),
        _n = m;
}), c.register('RoVe20', function(d, e) {
    a(d.exports, 'SortOptions', function() {
        return _v;
    }), a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('P1KtI'),
        i = c('aevdF'),
        j = c('meYTW'),
        k = c('u8Dt8'),
        l = c('pJh2q0'),
        m = c('dVt9R1'),
        n = c('Eh2Wh'),
        o = c('0L+oa1'),
        p = c('DK8F30');
    let q, r, s = a => a;
    const t = g.default.div(q || (q = s`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), n.FontWeights.Bold, n.Fonts.SFPro),
        u = (0, g.default)(j.default).attrs({
            placement: 'bottomLeft',
            trigger: 'click',
            overlayStyle: {
                width: 220
            }
        })(r || (r = s``));
    let _v;
    var w;
    (w = _v || (_v = {})).relevant = 'relevant', w.recent = 'recent';
    var _x = a => (0, f.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: a.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, f.jsx)(i.default.Search, {
                placeholder: 'Search for kits...',
                onSearch: a.onSearch,
                size: 'large',
                enterButton: !0,
                autoFocus: !0,
                style: {
                    flex: 1
                },
                loading: a.loading,
                value: a.searchQuery,
                onChange: d => a.onUpdateSearchQuery(d.target.value)
            }),
            (0, f.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: a.showFilters ? 'visible' : 'hidden'
                },
                children: [
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, {
                                    children: 'Language:'
                                }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Languages',
                                    className: 'maxWidth',
                                    value: a.language,
                                    onChange: d => a.onLanguageSelected(d),
                                    children: [...(0, m.getListOfLanguages)()].map(a => (0, f.jsx)(k.default.Option, {
                                        value: a,
                                        children: a
                                    }, a))
                                }),
                                (0, f.jsx)(t, {
                                    style: {
                                        marginTop: 12
                                    },
                                    children: 'Subject:'
                                }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Subjects',
                                    className: 'maxWidth',
                                    value: a.subject,
                                    onChange: d => a.onSubjectSelected(d),
                                    children: [...l.optionsForAreaOfExpertise].map(a => (0, f.jsx)(k.default.Option, {
                                        value: a,
                                        children: a
                                    }, a))
                                })
                            ]
                        }),
                        children: (0, f.jsx)(h.default, {
                            style: {
                                marginRight: 12
                            },
                            icon: (0, f.jsx)(o.default, {}),
                            size: 'small',
                            type: a.language || a.subject ? 'primary' : 'default',
                            children: 'Filter'
                        })
                    }),
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, {
                                    children: 'Sort By:'
                                }),
                                (0, f.jsxs)(k.default, {
                                    className: 'maxWidth',
                                    value: a.sort,
                                    onChange: d => a.onSortSelected(d),
                                    children: [
                                        (0, f.jsx)(k.default.Option, {
                                            value: _v.relevant,
                                            children: 'Most Relevant'
                                        }),
                                        (0, f.jsx)(k.default.Option, {
                                            value: _v.recent,
                                            children: 'Most Recent'
                                        })
                                    ]
                                })
                            ]
                        }),
                        children: (0, f.jsx)(h.default, {
                            icon: (0, f.jsx)(p.default, {}),
                            size: 'small',
                            children: 'Sort'
                        })
                    })
                ]
            })
        ]
    });
}), c.register('meYTW', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    }, function(f) {
        return _v = f;
    });
    var f = c('/U36/'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('Dn89R'),
        j = c('pM600'),
        k = c('v33Vy'),
        l = c('l89gJ'),
        m = c('/CEuo'),
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
    const o = a => {
            let {
                title: p,
                content: q,
                prefixCls: r
            } = a;
            return p || q ? g.createElement(g.Fragment, null, p && g.createElement('div', {
                className: `${ r }-title`
            }, (0, j.getRenderPropValue)(p)), g.createElement('div', {
                className: `${ r }-inner-content`
            }, (0, j.getRenderPropValue)(q))) : null;
        },
        p = g.forwardRef((a, c) => {
            var q, r;
            const {
                prefixCls: s,
                title: t,
                content: u,
                overlayClassName: _v,
                placement: w = 'top',
                trigger: x = 'hover',
                mouseEnterDelay: y = 0.1,
                mouseLeaveDelay: z = 0.1,
                overlayStyle: A = {},
                arrowPointAtCenter: B,
                arrow: C
            } = a, D = n(a, [
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
                getPrefixCls: E
            } = g.useContext(h.ConfigContext), F = E('popover', s), [G, H] = (0, m.default)(F), I = E(), J = b(f)(_v, H), K = null !== (r = null !== (q = 'boolean' != typeof C && (null == C ? void 0 : C.arrowPointAtCenter)) && void 0 !== q ? q : B) && void 0 !== r && r, L = null != C ? C : {
                arrowPointAtCenter: K
            };
            return G(g.createElement(i.default, Object.assign({
                placement: w,
                arrow: L,
                trigger: x,
                mouseEnterDelay: y,
                mouseLeaveDelay: z,
                overlayStyle: A
            }, D, {
                prefixCls: F,
                overlayClassName: J,
                ref: c,
                overlay: g.createElement(o, {
                    prefixCls: F,
                    title: t,
                    content: u
                }),
                transitionName: (0, k.getTransitionName)(I, 'zoom-big', D.transitionName),
                'data-popover-inject': !0
            })));
        });
    p._InternalPanelDoNotUseOrYouWillBeFired = l.default;
    var q = p;
}), c.register('pM600', function(d, e) {
    a(d.exports, 'getRenderPropValue', function() {
        return _f;
    });
    const _f = a => a ? 'function' == typeof a ? a() : a : null;
}), c.register('l89gJ', function(d, e) {
    a(d.exports, 'getOverlay', function() {
        return _m;
    }, function(f) {
        return _m = f;
    }), a(d.exports, 'RawPurePanel', function() {
        return _n;
    }, function(f) {
        return _n = f;
    }), a(d.exports, 'default', function() {
        return _o;
    }, function(f) {
        return _o = f;
    });
    var f = c('O0Kav'),
        g = c('/U36/'),
        h = c('/RwZG'),
        i = c('R2nG3'),
        j = c('/CEuo'),
        k = c('pM600'),
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
    const _m = (a, b, c) => {
        if (b || c)
            return f.createElement(f.Fragment, null, b && f.createElement('div', {
                className: `${ a }-title`
            }, (0, k.getRenderPropValue)(b)), f.createElement('div', {
                className: `${ a }-inner-content`
            }, (0, k.getRenderPropValue)(c)));
    };

    function _n(o) {
        const {
            hashId: p,
            prefixCls: q,
            className: r,
            style: s,
            placement: t = 'top',
            title: u,
            content: v,
            children: w
        } = o;
        return f.createElement('div', {
            className: b(g)(p, q, `${ q }-pure`, `${ q }-placement-${ t }`, r),
            style: s
        }, f.createElement(h.Popup, Object.assign({}, o, {
            className: p,
            prefixCls: q
        }), w || _m(q, u, v)));
    }

    function _o(p) {
        const {
            prefixCls: q
        } = p, r = l(p, ['prefixCls']), {
            getPrefixCls: s
        } = f.useContext(i.ConfigContext), t = s('popover', q), [u, v] = (0, j.default)(t);
        return u(f.createElement(_n, Object.assign({}, r, {
            prefixCls: t,
            hashId: v
        })));
    }
}), c.register('/CEuo', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('4LyRj'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('rkI78'),
        j = c('/zzpx'),
        k = c('PFjz/');
    const l = a => {
            const {
                componentCls: m,
                popoverBg: n,
                popoverColor: o,
                width: p,
                fontWeightStrong: q,
                popoverPadding: r,
                boxShadowSecondary: s,
                colorTextHeading: t,
                borderRadiusLG: u,
                zIndexPopup: v,
                marginXS: _w,
                colorBgElevated: x
            } = a;
            return [{
                    [m]: Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: v,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': x,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ m }-content`]: {
                            position: 'relative'
                        },
                        [`${ m }-inner`]: {
                            backgroundColor: n,
                            backgroundClip: 'padding-box',
                            borderRadius: u,
                            boxShadow: s,
                            padding: r
                        },
                        [`${ m }-title`]: {
                            minWidth: p,
                            marginBottom: _w,
                            color: t,
                            fontWeight: q
                        },
                        [`${ m }-inner-content`]: {
                            color: o
                        }
                    })
                },
                (0, k.default)(a, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ m }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ m }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        m = a => {
            const {
                componentCls: n
            } = a;
            return {
                [n]: i.PresetColors.map(c => {
                    const o = a[`${ c }-6`];
                    return {
                        [`&${ n }-${ c }`]: {
                            '--antd-arrow-background-color': o,
                            [`${ n }-inner`]: {
                                backgroundColor: o
                            },
                            [`${ n }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        n = a => {
            const {
                componentCls: o,
                lineWidth: p,
                lineType: q,
                colorSplit: r,
                paddingSM: s,
                controlHeight: t,
                fontSize: u,
                lineHeight: v,
                padding: w
            } = a, x = t - Math.round(u * v);
            return {
                [o]: {
                    [`${ o }-inner`]: {
                        padding: 0
                    },
                    [`${ o }-title`]: {
                        margin: 0,
                        padding: `${ x / 2 }px ${ w }px ${ x / 2 - p }px`,
                        borderBottom: `${ p }px ${ q } ${ r }`
                    },
                    [`${ o }-inner-content`]: {
                        padding: `${ s }px ${ w }px`
                    }
                }
            };
        };
    var o = (0, g.default)('Popover', a => {
        const {
            colorBgElevated: p,
            colorText: q,
            wireframe: r
        } = a, s = (0, h.merge)(a, {
            popoverBg: p,
            popoverColor: q,
            popoverPadding: 12
        });
        return [
            l(s),
            m(s),
            r && n(s),
            (0, f.initZoomMotion)(s, 'zoom-big')
        ];
    }, a => {
        let {
            zIndexPopupBase: p
        } = a;
        return {
            zIndexPopup: p + 30,
            width: 177
        };
    });
}), c.register('0L+oa1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('jGayL1'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FilterOutlined';
    var _k = g.forwardRef(j);
}), c.register('jGayL1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('DK8F30', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('xdlPW0'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SortDescendingOutlined';
    var _k = g.forwardRef(j);
}), c.register('xdlPW0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('jFKQ/', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('quE27'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('+cTfn'),
        k = c('aB6BC'),
        l = c('0QNOt'),
        m = c('d4nUv'),
        n = c('RfwiW'),
        o = c('9V5aJ'),
        p = c('AyJGn');
    var _q = (0, h.observer)(() => {
        const {
            editor: r,
            kitDetails: {
                id: s
            }
        } = i.useContext(m.default), t = (0, j.useLocation)(), [u, v, w] = (0, g.useBoolean)(!1), x = i.useRef(), y = i.useMemo(() => !r.currentlyEditingQuestionId && r.questions.length >= p.QUESTION_LIMIT, [
            r.questions.length,
            r.currentlyEditingQuestionId
        ]), z = i.useMemo(() => t.pathname.endsWith('question'), [t.pathname.length]), A = i.useMemo(() => {
            if (r.currentlyEditingQuestionId)
                return r.questions.find(s => s._id === r.currentlyEditingQuestionId);
        }, [r.currentlyEditingQuestionId]), B = () => {
            r.currentlyEditingQuestionId = '';
        };
        return (0, f.jsx)(o.default, {
            ref: x,
            visible: z,
            close: () => (0, n.default)(k.editorBase),
            existingQuestion: A,
            submitQuestion: r => {
                v(), (0, l.default)([{
                    questionText: r.text,
                    image: r.image,
                    audio: r.audio,
                    latex: r.latex,
                    type: r.type,
                    source: 'editor',
                    answers: r.answers.filter(r => {
                        var C;
                        const D = null === (C = r.text) || void 0 === C ? void 0 : C.trim();
                        return !!(null == D ? void 0 : D.length) || (r.latex || r.image);
                    }),
                    kitId: s,
                    replacingQuestion: r._id || ''
                }], () => {
                    w();
                });
            },
            afterClose: () => {
                x.current && x.current.clear(), B();
            },
            buttonLabel: A ? 'Save' : 'Add',
            loading: u,
            blockAddingNewQuestions: y,
            errorMessage: r.error ? r.error.message : ''
        });
    });
}), c.register('ylPOP', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('aB6BC'),
        h = c('W2f+g'),
        i = c('RfwiW'),
        j = c('+cTfn');
    var _k = () => {
        const l = (0, j.useLocation)().pathname.endsWith('flashcard-import');
        return (0, f.jsx)(h.default, {
            visible: l,
            close: () => (0, i.default)(g.editorBase)
        });
    };
}), c.register('W2f+g', function(d, e) {
    a(d.exports, 'default', function() {
        return _F;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('27/EZ'),
        k = c('P1KtI'),
        l = c('aevdF'),
        m = c('AE7vR'),
        n = c('Dn89R'),
        o = c('u4s09'),
        p = c('tMe0P'),
        q = c('Eh2Wh'),
        r = c('5lJtu'),
        s = c('0QNOt'),
        t = c('rDgzs'),
        u = c('6jmvl'),
        v = c('28e3x'),
        w = c('XtDAe'),
        x = c('AUwx6'),
        y = c('9zaF+');
    let z;
    const {
        TextArea: A
    } = l.default;
    let B;
    var C;
    (C = B || (B = {})).find = 'Find', C.export = 'Export', C.paste = 'Paste';
    const D = {
        screen: B.find,
        textAreaInput: '',
        overlayOpen: !1,
        loading: !1
    };
    let E = class extends i.Component {
        componentDidUpdate(F) {
            !this.props.visible && F.visible && (this.setState(D), this.props.editor.error = (0, x.defaultError)());
        }
        render() {
            const {
                visible: F,
                close: G
            } = this.props;
            return (0, h.jsx)(h.Fragment, {
                children: (0, h.jsx)(m.default, {
                    destroyOnClose: !0,
                    open: F,
                    width: 670,
                    style: {
                        top: 20
                    },
                    footer: null,
                    onCancel: G,
                    closable: !1,
                    children: (0, h.jsxs)(_G, {
                        children: [
                            this.getContent(),
                            (0, h.jsx)(w.default, {})
                        ]
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', D), (0, f.default)(this, 'skipToLastStep', () => this.setState({
                screen: B.paste
            })), (0, f.default)(this, 'toggleOverlay', () => this.setState({
                overlayOpen: !this.state.overlayOpen
            })), (0, f.default)(this, 'flip', () => this.setState({
                textAreaInput: (0, r.flip)(this.state.textAreaInput)
            })), (0, f.default)(this, 'getContent', () => {
                const F = (0, r.MakeBaseQuestions)((0, r.MakeQuizletQuestionMap)(this.state.textAreaInput));
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsxs)('div', {
                            className: 'flex maxWidth vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, h.jsxs)('div', {
                                    children: [
                                        (0, h.jsx)(p.default, {
                                            style: {
                                                fontWeight: q.FontWeights.UltraBold,
                                                fontSize: 35
                                            },
                                            children: 'Import a Set'
                                        }),
                                        (0, h.jsx)(p.default, {
                                            style: {
                                                fontSize: 18,
                                                marginTop: -6,
                                                lineHeight: '20px'
                                            },
                                            children: (0, h.jsx)('span', {
                                                children: 'Find a flashcard set and paste the text below.'
                                            })
                                        })
                                    ]
                                }),
                                (0, h.jsx)(n.default, {
                                    title: 'Need Help?',
                                    children: (0, h.jsx)(k.default, {
                                        href: 'https://help.gimkit.com/en/article/importing-a-flashcard-set-ti90sw/?1570044230345',
                                        target: '_blank',
                                        size: 'large',
                                        icon: (0, h.jsx)(j.default, {}),
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
                        (0, h.jsx)('div', {
                            style: {
                                height: 10
                            }
                        }),
                        (0, h.jsx)(A, {
                            style: {
                                height: 200,
                                fontSize: 16
                            },
                            placeholder: 'Paste here...',
                            onChange: this.onTextAreaChanged,
                            value: this.state.textAreaInput
                        }),
                        (0, h.jsx)(k.default, {
                            style: {
                                width: '100%',
                                marginTop: 6
                            },
                            disabled: !(F.length > 1),
                            onClick: this.addQuestions,
                            type: 'primary',
                            size: 'large',
                            loading: this.state.loading,
                            children: 'Create'
                        }),
                        (0, h.jsx)('div', {
                            style: {
                                height: 3
                            }
                        }),
                        F.length > 1 && (0, h.jsxs)('div', {
                            className: 'flex vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, h.jsx)(p.default, {
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.5
                                    },
                                    onClick: this.toggleOverlay,
                                    children: 'Preview Questions'
                                }),
                                (0, h.jsx)(p.default, {
                                    onClick: this.flip,
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.5
                                    },
                                    children: 'Flip Term/Definition'
                                })
                            ]
                        }),
                        (0, h.jsx)(v.default, {
                            visible: this.state.overlayOpen,
                            questions: F,
                            close: this.toggleOverlay
                        })
                    ]
                });
            }), (0, f.default)(this, 'addQuestions', () => {
                const F = (0, r.MakeBaseQuestions)((0, r.MakeQuizletQuestionMap)(this.state.textAreaInput));
                if (!F.length)
                    return;
                this.setState({
                    loading: !0
                });
                const G = F.reverse().map(F => ({
                    questionText: F.text,
                    image: F.image,
                    type: t.QuestionType.multipleChoice,
                    source: 'flashcard-import',
                    answers: F.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, y.chunk)(G, 20).forEach(F => {
                    (0, s.default)(F, () => this.setState({
                        loading: !1
                    }), {
                        pushToBottom: !0
                    });
                });
            }), (0, f.default)(this, 'onTextAreaChanged', a => {
                this.setState({
                    textAreaInput: a.target.value
                });
            });
        }
    };
    E = (0, g.__decorate)([
        (0, u.inject)('kitDetails', 'editor'),
        u.observer
    ], E);
    var _F = E;
    const _G = o.default.div(z || (z = (a => a)`
  .ant-steps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`));
}), c.register('27/EZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('dHId8'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionOutlined';
    var _k = g.forwardRef(j);
}), c.register('dHId8', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('5lJtu', function(d, e) {
    a(d.exports, 'MakeQuizletQuestionMap', function() {
        return _i;
    }), a(d.exports, 'MakeBaseQuestions', function() {
        return _j;
    }), a(d.exports, 'flip', function() {
        return _k;
    });
    var f = c('9zaF+');
    const g = a => null != a.match(/\.(jpeg|jpg|gif|png)$/),
        h = a => a.text ? a.text : a.image ? a.image : '',
        _i = a => a.split('\n').map(a => {
            let j = {
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
            const k = a.split('\t').filter(a => a && a.length > 0);
            if (k.length <= 1)
                return null;
            if (3 === k.length)
                return g(k[0]) ? (j.question.image = k[0], j.question.text = k[1], j.answer.text = k[2]) : (j.question.text = k[0], j.answer.text = k[1], j.question.image = k[2]), j;
            j.question.text = k[0];
            g(k[1]) ? j.answer.image = k[1] : j.answer.text = k[1];
            return j;
        }).filter(a => !(!a || !a.question.text && !a.question.image || !a.answer.image && !a.answer.text)),
        _j = a => {
            const k = a.map(k => {
                const l = [{
                        ...k.answer,
                        correct: !0
                    }],
                    m = () => {
                        let n = !1;
                        for (let o = 0; o < 10; o++) {
                            if (n)
                                return;
                            const p = (0, f.shuffle)(a)[0];
                            let q = !1;
                            l.forEach(a => {
                                h(a) === h(p.answer) && (q = !0);
                            }), q || (l.push({
                                ...p.answer,
                                correct: !1
                            }), n = !0);
                        }
                        n || l.push({
                            text: '---',
                            image: null,
                            correct: !1
                        });
                    };
                return m(), m(), m(), {
                    text: k.question.text,
                    image: k.question.image,
                    audio: k.question.audio,
                    latex: k.question.latex,
                    answers: l
                };
            });
            return k && k.length ? k : [];
        },
        _k = a => {
            let l = '';
            const m = a.split('\n').map(a => a.split('\t').reverse());
            return m.forEach((a, e) => {
                a.forEach((f, g) => {
                    l += f, g + 1 === a.length ? e + 1 !== m.length && (l += '\n') : l += '\t';
                });
            }), l;
        };
}), c.register('28e3x', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('3t9ce'),
        h = c('rDgzs'),
        i = c('EC4am');
    var _j = a => {
        const k = a.questions.map((a, k) => ({
            _id: 'quizlet-question-' + k,
            text: a.text,
            type: h.QuestionType.multipleChoice,
            image: a.image,
            audio: a.audio,
            latex: a.latex,
            answers: a.answers.map((a, c) => ({
                _id: 'quizlet-answer-' + k + '-' + c,
                text: a.text,
                image: a.image,
                latex: a.latex,
                correct: a.correct
            }))
        }));
        return (0, f.jsx)(g.default, {
            open: a.visible,
            placement: 'right',
            closable: !0,
            destroyOnClose: !0,
            onClose: a.close,
            width: 515,
            children: k.map(a => (0, f.jsx)(i.default, {
                question: a,
                showAllAnswers: !0
            }, a._id))
        });
    };
}), c.register('XtDAe', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('4F2ZN'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('qMSe6'),
        j = c('6jmvl');
    let k = class extends h.Component {
        render() {
            return this.props.editor.error.message ? (0, g.jsx)(i.default, {
                message: 'Error',
                description: this.props.editor.error.message,
                type: 'error',
                showIcon: !0
            }) : null;
        }
    };
    k = (0, f.__decorate)([
        (0, j.inject)('editor'),
        j.observer
    ], k);
    var _l = k;
}), c.register('bYq7M', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('aB6BC'),
        h = c('6PSR4'),
        i = c('RfwiW'),
        j = c('+cTfn');
    var _k = () => {
        const l = (0, j.useLocation)().pathname.endsWith('question-bank');
        return (0, f.jsx)(h.default, {
            visible: l,
            close: () => (0, i.default)(g.editorBase)
        });
    };
}), c.register('qot+2', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('+cTfn'),
        h = c('//xt+');
    var _i = () => {
        const j = (0, g.useNavigate)(),
            k = (0, g.useLocation)().pathname.endsWith('spreadsheet');
        return (0, f.jsx)(h.default, {
            visible: k,
            close: () => j(-1)
        });
    };
}), c.register('//xt+', function(d, e) {
    a(d.exports, 'default', function() {
        return _G;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('qL/+Z0'),
        i = c('qMSe6'),
        j = c('P1KtI'),
        k = c('QZ0Z+'),
        l = c('AE7vR'),
        m = c('lbcQe'),
        n = c('u4s09'),
        o = c('Eh2Wh'),
        p = c('8KqQ+'),
        q = c('mcC/4'),
        r = c('0QNOt'),
        s = c('rDgzs'),
        t = c('6jmvl'),
        u = c('5lJtu'),
        v = c('d4nUv');
    let w, x, y, z = a => a;
    const A = a => (0, f.jsx)('a', {
            href: a.link,
            target: '_blank',
            style: {
                width: '100%'
            },
            children: (0, f.jsxs)(k.default, {
                style: {
                    fontFamily: o.Fonts.SFPro,
                    color: p.default.Black
                },
                hoverable: !0,
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 23,
                            fontWeight: o.FontWeights.UltraBold
                        },
                        children: a.title
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            lineHeight: '17px'
                        },
                        children: a.description
                    })
                ]
            })
        }),
        B = a => a.filter(a => a && a.length > 0),
        C = (0, t.observer)(a => {
            const {
                kitDetails: D
            } = g.useContext(v.default), [E, F] = g.useState(!1), [G, H] = g.useState(''), I = ({
                file: J
            }) => {
                H('');
                const K = [];
                q.parse(J, {
                    complete: J => {
                        if (J && J.data && J.data.length && J.data[0][0] && J.data[0][0].endsWith('Template 2')) {
                            const L = [];
                            J.data.forEach((J, K) => {
                                K > 1 && J[0] && J[1] && L.push({
                                    question: {
                                        text: J[0]
                                    },
                                    answer: {
                                        text: J[1]
                                    }
                                });
                            }), (0, u.MakeBaseQuestions)(L).forEach(J => {
                                K.push({
                                    text: J.text,
                                    answers: J.answers.map(J => ({
                                        correct: J.correct,
                                        text: J.text
                                    }))
                                });
                            }), K && K.length || H('Invalid format. Make sure you\'re using our template and have a question and correct answer for each row.');
                        } else
                            J && J.data && J.data[1] && B(J.data[1]).length >= 5 && J.data.forEach((J, D) => {
                                if (D > 1) {
                                    const L = B(J);
                                    if (!L[0])
                                        return;
                                    const M = [];
                                    for (let N = 1; N < L.length; N++)
                                        M.push({
                                            correct: 1 === N,
                                            text: L[N]
                                        });
                                    M.length >= 2 && K.push({
                                        text: L[0],
                                        answers: M
                                    });
                                }
                            }), K && K.length || H('Invalid format. Make sure you\'re using our template and have a question, correct answer, and at least one incorrect answer for each row.');
                        K && K.length && (F(!0), (0, r.default)(K.map(J => ({
                            questionText: J.text,
                            type: s.QuestionType.multipleChoice,
                            answers: J.answers,
                            source: 'spreadsheet',
                            kitId: D.id
                        })), () => F(!1)));
                    }
                });
            };
            return (0, f.jsx)(l.default, {
                open: J.visible,
                onCancel: J.close,
                footer: !1,
                width: 670,
                closable: !1,
                style: {
                    top: 20
                },
                children: (0, f.jsxs)(_D, {
                    className: 'flex maxWidth flex-column',
                    children: [
                        (0, f.jsx)(_E, {
                            children: 'Import from Spreadsheet'
                        }),
                        (0, f.jsx)(_F, {
                            children: 'Want to add questions super quickly? Add them in a spreadsheet and import them here! To get started, choose a template below. Fill out the spreadsheet with your questions & answers and download it as a CSV file.'
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 7
                            }
                        }),
                        (0, f.jsxs)('div', {
                            className: 'flex vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, f.jsx)(A, {
                                    title: 'Template 1',
                                    description: 'Specify the question, correct answer, and incorrect answers',
                                    link: 'https://docs.google.com/spreadsheets/d/1UK4xg6vc1ph-tAOywBIyiArf_ck7QQFEq5p8t4LEcVw/copy'
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        width: 14
                                    }
                                }),
                                (0, f.jsx)(A, {
                                    title: 'Template 2',
                                    description: 'Specify just the question and correct answer',
                                    link: 'https://docs.google.com/spreadsheets/d/1OIoHEjTnzeBqceYynBV5WLEjF0J2yVFrIxCqquXokwE/copy'
                                })
                            ]
                        }),
                        (0, f.jsx)('img', {
                            src: '/client/img/editor/spreadsheet.jpg',
                            style: {
                                width: '100%',
                                marginTop: 10,
                                border: 'solid 1px',
                                borderRadius: 6
                            }
                        }),
                        (0, f.jsxs)(m.default, {
                            style: {
                                width: '100%'
                            },
                            customRequest: I,
                            accept: '.csv',
                            showUploadList: !1,
                            children: [
                                G ? (0, f.jsx)(i.default, {
                                    type: 'error',
                                    message: G,
                                    style: {
                                        marginTop: 10
                                    }
                                }) : null,
                                (0, f.jsx)(j.default, {
                                    type: 'primary',
                                    icon: (0, f.jsx)(h.default, {}),
                                    style: {
                                        width: '100%',
                                        marginTop: 10
                                    },
                                    loading: E,
                                    children: 'Upload File'
                                })
                            ]
                        })
                    ]
                })
            });
        }),
        _D = n.default.div(w || (w = z`
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`)),
        _E = n.default.div(x || (x = z`
  font-size: 27px;
  font-weight: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), o.FontWeights.UltraBold, p.default.Black, o.Fonts.SFPro),
        _F = n.default.div(y || (y = z`
  font-size: 16px;
  margin-top: -4px;
  line-height: 21px;
  color: ${ 0 };
  font-family: ${ 0 };
`), p.default.Black, o.Fonts.SFPro);
    var _G = C;
}), c.register('qL/+Z0', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('bzS580'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UploadOutlined';
    var _k = g.forwardRef(j);
}), c.register('bzS580', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('smMtZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('yruHD'),
        i = c('L1YXh'),
        j = c('lKjHC'),
        k = c('zcfNM');
    let l;
    const m = g.default.div(l || (l = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
    var _n = () => {
        const {
            kitId: o
        } = (0, k.useParams)();
        return (0, j.useDidMount)(() => {
            (0, i.default)(o);
        }), (0, f.jsx)(m, {
            children: (0, f.jsx)(h.default, {
                size: 'large'
            })
        });
    };
}), c.register('L1YXh', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('bE1mJ'),
        g = c('quE27'),
        h = c('nKuOQ'),
        i = c('KxkP827');
    var _j = a => {
        (0, g.request)({
            url: `/api/games/fetch/${ a }`,
            method: 'get',
            success: a => {
                const {
                    kitDetails: k,
                    editor: l
                } = f.default, {
                    kit: m
                } = a;
                k.id = m._id, k.title = m.title, k.image = m.gif, k.privacy = m.privacy, l.questions.replace(m.questions);
            },
            error: a => {
                (0, i.NavigateTo)(h.DASHBOARD);
            }
        });
    };
}), c.register('KsynA', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('+cTfn'),
        h = c('aB6BC'),
        i = c('RfwiW'),
        j = c('7cNt3');
    var _k = () => {
        const l = (0, g.useLocation)().pathname.endsWith('flashcard-create');
        return (0, f.jsx)(j.default, {
            visible: l,
            close: () => (0, i.default)(h.editorBase)
        });
    };
}), c.register('7cNt3', function(d, e) {
    a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('P1KtI'),
        k = c('VNuyu'),
        l = c('AE7vR'),
        m = c('8KqQ+'),
        n = c('Eh2Wh'),
        o = c('0EG84'),
        p = c('28e3x'),
        q = c('rDgzs'),
        r = c('6jmvl'),
        s = c('XtDAe'),
        t = c('9zaF+'),
        u = c('0QNOt'),
        v = c('5lJtu');
    const w = 'flashcard-entry-editor',
        x = a => {
            let y = !1;
            return (a.text || a.audio || a.image || a.latex) && (y = !0), y;
        },
        y = a => {
            let z = 0;
            return a.text && z++, a.image && z++, a.latex && z++, 1 === z;
        },
        z = a => x(a.question) && y(a.answer);
    let A = class extends i.Component {
        componentDidMount() {
            if (localStorage.getItem(w)) {
                const B = JSON.parse(localStorage.getItem(w));
                B && B.length > 3 && this.setState({
                    questions: B
                });
            }
        }
        render() {
            return (0, h.jsxs)(h.Fragment, {
                children: [
                    (0, h.jsxs)(l.default, {
                        open: this.props.visible,
                        onCancel: this.props.close,
                        width: 890,
                        closable: !1,
                        style: {
                            top: 20,
                            color: m.default.Black,
                            fontFamily: n.Fonts.SFPro
                        },
                        footer: (0, h.jsxs)('div', {
                            className: 'flex maxWidth vc',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, h.jsx)('a', {
                                    onClick: this.toggleOverlay,
                                    children: 'Preview Questions'
                                }),
                                (0, h.jsx)(j.default, {
                                    onClick: this.addQuestions,
                                    disabled: !this.canSubmit(),
                                    type: 'primary',
                                    loading: this.state.loading,
                                    children: 'Create'
                                })
                            ]
                        }),
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    fontSize: 34,
                                    fontWeight: n.FontWeights.UltraBold,
                                    cursor: 'pointer'
                                },
                                onDoubleClick: this.deleteAllQuestions,
                                children: '\uD83D\uDCDA Create Flashcards'
                            }),
                            (0, h.jsx)('div', {
                                style: {
                                    fontSize: 20,
                                    lineHeight: '20px',
                                    marginTop: -5,
                                    opacity: 0.8
                                },
                                children: 'Save some time by entering a question and answer. We\'ll generate the incorrect answers for you!'
                            }),
                            (0, h.jsx)(k.default, {}),
                            this.state.questions.map((a, d) => (0, h.jsx)(o.default, {
                                value: a,
                                onChange: a => this.handleQuestionChange(a, d)
                            }, 'flashcard-create-' + d)),
                            (0, h.jsx)(s.default, {})
                        ]
                    }),
                    (0, h.jsx)(p.default, {
                        questions: this.state.overlayVisible ? this.makeQuestions() : [],
                        visible: this.state.overlayVisible,
                        close: this.toggleOverlay
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
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
            }), (0, f.default)(this, 'toggleOverlay', () => this.setState({
                overlayVisible: !this.state.overlayVisible
            })), (0, f.default)(this, 'handleQuestionChange', (a, d) => {
                let B = this.state.questions;
                d + 1 === this.state.questions.length && !this.state.questions[d + 1] && z(a) && B.length < 200 && B.push({
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
                }), B = B.map((B, e) => e !== d ? B : a), B = B.filter((a, d) => !(d > 3 && d + 1 !== B.length && !x(a.question) && !y(a.answer))), localStorage.setItem(w, JSON.stringify(B)), this.setState({
                    questions: B
                });
            }), (0, f.default)(this, 'makeQuestions', () => (0, v.MakeBaseQuestions)(this.state.questions.filter(a => z(a)))), (0, f.default)(this, 'addQuestions', () => {
                const B = this.makeQuestions();
                if (!B.length)
                    return;
                this.setState({
                    loading: !0
                });
                const C = B.reverse().map(B => ({
                    questionText: B.text,
                    image: B.image,
                    audio: B.audio,
                    type: q.QuestionType.multipleChoice,
                    source: 'flashcard-create',
                    answers: B.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, t.chunk)(C, 20).forEach(B => {
                    (0, u.default)(B, () => {
                        this.setState({
                            loading: !1
                        }), this.deleteAllQuestions();
                    });
                });
            }), (0, f.default)(this, 'deleteAllQuestions', () => {
                localStorage.removeItem(w), this.setState({
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
            }), (0, f.default)(this, 'canSubmit', () => {
                let B = !0;
                return this.state.questions.forEach((d, c) => {
                    c < 4 && (z(d) || (B = !1));
                }), B;
            });
        }
    };
    A = (0, g.__decorate)([
        (0, r.inject)('kitDetails'),
        r.observer
    ], A);
    var _B = A;
}), c.register('0EG84', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('6dXaF'),
        i = c('quE27');
    let j, k, l, m = a => a;
    const n = g.default.div(j || (j = m`
  width: 100%;
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`)),
        o = g.default.div(k || (k = m`
  width: calc(50% - 10px);
  margin-right: 10px;
`)),
        p = g.default.div(l || (l = m`
  width: calc(50% - 10px);
`));
    var _q = a => {
        const r = () => ({
                question: {
                    text: a.value.question.text,
                    image: a.value.question.image,
                    audio: a.value.question.audio,
                    latex: a.value.question.latex
                },
                answer: {
                    text: a.value.answer.text,
                    image: a.value.answer.image
                }
            }),
            {
                value: s
            } = a,
            {
                question: t,
                answer: u
            } = s;
        return (0, f.jsxs)(n, {
            children: [
                (0, f.jsx)(o, {
                    children: (0, f.jsx)(h.default, {
                        text: t.text,
                        image: t.image,
                        audio: t.audio,
                        latex: t.latex,
                        onTextChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    text: s
                                }
                            });
                        },
                        onImageChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    image: s
                                }
                            });
                        },
                        onLatexChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    latex: s
                                }
                            });
                        },
                        textAllowed: !0,
                        imageAllowed: !t.latex,
                        audioAllowed: window.MediaRecorder && !(0, i.isStudent)(),
                        latexAllowed: !t.image,
                        onAudioChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    audio: s
                                }
                            });
                        },
                        placeholder: 'Question...'
                    })
                }),
                (0, f.jsx)(p, {
                    children: (0, f.jsx)(h.default, {
                        text: u.text,
                        image: u.image,
                        latex: u.latex,
                        audio: null,
                        onTextChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    text: s
                                }
                            });
                        },
                        onImageChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    image: s
                                }
                            });
                        },
                        onLatexChange: s => {
                            const v = r();
                            a.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    latex: s
                                }
                            });
                        },
                        imageAllowed: !u.text && !u.latex,
                        latexAllowed: !u.text && !u.image,
                        textAllowed: !u.image && !u.latex,
                        placeholder: 'Answer...',
                        audioAllowed: !1
                    })
                })
            ]
        });
    };
}), c.register('6dXaF', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('rFeNc'),
        i = c('u4s09'),
        j = c('0qHa9'),
        k = c('XcwvV'),
        l = c('7yE7K'),
        m = c('P1KtI'),
        n = c('Dn89R'),
        o = c('W0U6L'),
        p = c('HFnro8'),
        q = c('sqdRe'),
        r = c('quE27'),
        s = c('hecDa'),
        t = c('fMXqI'),
        u = c('p7/H4');
    let v;
    var _w = a => {
        const [x, y] = g.useState(!1), [z, A] = g.useState(!1), [B, C] = g.useState(!1), [D, E, F] = (0, r.useBoolean)(!1), G = () => y(!0), H = () => A(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)(h.default, {
                            value: a.text,
                            onTextChange: x => {
                                a.onTextChange(x);
                            },
                            disabled: !a.textAllowed,
                            placeholder: a.placeholder
                        }),
                        (0, f.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                !a.image && a.imageAllowed && (0, f.jsx)(n.default, {
                                    title: 'Add Photo',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: G,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, f.jsx)(k.default, {}),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                }),
                                a.image && (0, f.jsx)(p.default, {
                                    image: a.image,
                                    size: 38,
                                    blockModalOpen: !0,
                                    onClick: G,
                                    showBorder: !0,
                                    style: {
                                        marginLeft: 4
                                    }
                                }),
                                a.audioAllowed && (0, f.jsx)(n.default, {
                                    title: a.audio ? 'Audio' : 'Add Audio',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: () => {
                                            (0, r.isUpgraded)() ? A(!0): C(!0);
                                        },
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, f.jsx)(j.default, {}),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                }),
                                a.latexAllowed && (0, f.jsx)(n.default, {
                                    title: a.latex ? 'Equation' : 'Add Equation',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: E,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, f.jsx)(l.default, {
                                            style: {
                                                color: a.latex ? 'green' : 'inherit'
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
                (0, f.jsx)(o.default, {
                    visible: x,
                    close: () => y(!1),
                    currentImage: a.image,
                    onImageChange: x => {
                        a.onImageChange(x);
                    }
                }),
                (0, f.jsx)(q.default, {
                    visible: z,
                    audio: a.audio,
                    close: H,
                    onAudioChanged: x => {
                        var I;
                        I = x, a.onAudioChange && a.onAudioChange(I), H();
                    }
                }),
                (0, f.jsx)(u.default, {
                    visible: D,
                    close: F,
                    onChange: x => {
                        a.onLatexChange && a.onLatexChange(x);
                    },
                    latex: a.latex
                }),
                (0, f.jsx)(s.default, {
                    id: 'add audio',
                    visible: B,
                    close: () => C(!1),
                    copy: {
                        title: t.AUDIO_TITLE,
                        description: t.AUDIO_DESCRIPTION
                    }
                })
            ]
        });
    };
    const _x = i.default.div(v || (v = (a => a)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 28px;
`));
}), c.register('y6A/x', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('+cTfn'),
        h = c('aB6BC'),
        i = c('RfwiW'),
        j = c('89G5g');
    var _k = () => {
        const l = (0, g.useLocation)().pathname.endsWith('flashcard-home');
        return (0, f.jsx)(j.default, {
            visible: l,
            close: () => (0, i.default)(h.editorBase)
        });
    };
}), c.register('89G5g', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('CVQxE'),
        k = c('rLXLn'),
        l = c('QZ0Z+'),
        m = c('VNuyu'),
        n = c('AE7vR'),
        o = c('8KqQ+'),
        p = c('Eh2Wh'),
        q = c('aB6BC'),
        r = c('6jmvl'),
        s = c('KxkP827');
    let t = class extends i.Component {
        render() {
            return (0, h.jsxs)(n.default, {
                open: this.props.visible,
                onCancel: this.props.close,
                width: 500,
                style: {
                    top: 20,
                    color: o.default.Black,
                    fontFamily: p.Fonts.SFPro
                },
                footer: null,
                closable: !1,
                children: [
                    (0, h.jsxs)(l.default, {
                        hoverable: !0,
                        style: {
                            color: o.default.Black,
                            fontFamily: p.Fonts.SFPro,
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
                            (0, h.jsx)(k.default, {
                                style: {
                                    fontSize: 35
                                }
                            }),
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: p.FontWeights.UltraBold,
                                    fontSize: 25
                                },
                                className: 'flex vc',
                                children: (0, h.jsx)('div', {
                                    children: 'Create Flashcards'
                                })
                            })
                        ]
                    }),
                    (0, h.jsx)('div', {
                        className: 'flex',
                        children: (0, h.jsx)(m.default, {
                            children: 'or...'
                        })
                    }),
                    (0, h.jsx)(l.default, {
                        hoverable: !0,
                        style: {
                            color: o.default.Black,
                            fontFamily: p.Fonts.SFPro
                        },
                        onClick: this.importFlashcards,
                        children: (0, h.jsxs)('div', {
                            className: 'flex flex-column hc vc maxWidth',
                            children: [
                                (0, h.jsx)(j.default, {
                                    style: {
                                        fontSize: 25
                                    }
                                }),
                                (0, h.jsx)('div', {
                                    style: {
                                        fontWeight: p.FontWeights.UltraBold,
                                        fontSize: 22
                                    },
                                    className: 'flex vc',
                                    children: (0, h.jsx)('div', {
                                        children: 'Import Flashcards'
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'createFlashcards', () => (0, s.NavigateTo)((0, q.createWithFlashcards)(this.props.kitDetails.id))), (0, f.default)(this, 'importFlashcards', () => (0, s.NavigateTo)((0, q.flashcardImport)(this.props.kitDetails.id)));
        }
    };
    t = (0, g.__decorate)([
        (0, r.inject)('kitDetails'),
        r.observer
    ], t);
    var _u = t;
}), c.register('Tb3Va', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('O0Kav'),
        i = c('aB6BC'),
        j = c('RfwiW'),
        k = c('u4s09'),
        l = c('8KqQ+'),
        m = c('Eh2Wh'),
        n = c('m+KIv'),
        o = c('CUfP0'),
        p = c('9U9Vd'),
        q = c('6jmvl'),
        r = c('d4nUv'),
        s = c('quE27'),
        t = c('+cTfn');
    let u;
    var _v = (0, q.observer)(() => {
        const {
            kitCollab: w
        } = h.useContext(r.default), x = (0, t.useLocation)(), y = h.useMemo(() => x.pathname.endsWith('kit-collab'), [x.pathname]);
        h.useEffect(() => {
            w.panelOpen = !!y;
        }, [y]);
        const z = h.useCallback(() => {
            (0, j.default)(i.editorBase);
        }, []);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(g.default, {
                    open: y,
                    closable: !0,
                    onClose: z,
                    placement: 'right',
                    width: 520,
                    bodyStyle: {
                        padding: 40,
                        paddingTop: 30
                    },
                    children: (0, f.jsx)(_w, {
                        children: (0, s.isStudent)() ? null : w.enabled ? (0, f.jsx)(n.default, {}) : (0, f.jsx)(o.default, {})
                    })
                }),
                (0, f.jsx)(p.default, {})
            ]
        });
    });
    const _w = k.default.div.attrs({
        className: 'maxWidth'
    })(u || (u = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), l.default.Black, m.Fonts.SFPro);
}), c.register('m+KIv', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Hgzpr'),
        i = c('BX8EJ'),
        j = c('VNuyu'),
        k = c('yruHD'),
        l = c('PnRJd'),
        m = c('e5H/t'),
        n = c('quE27'),
        o = c('7OKRz'),
        p = c('6jmvl'),
        q = c('d4nUv'),
        r = c('1lE8T'),
        s = c('hQxzs');
    var _t = (0, p.observer)(() => {
        const {
            kitCollab: u,
            kitDetails: v
        } = g.useContext(q.default), [w, x, y] = (0, n.useBoolean)(!1);
        return g.useEffect(() => {
            (0, r.default)();
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(i.default, {
                            openSettings: x
                        }),
                        (0, f.jsx)(h.default, {}),
                        (0, f.jsx)(j.default, {
                            style: {
                                margin: '40px 0px'
                            }
                        }),
                        u.hasFetchedFirstBatchOfQuestions ? u.questions.length ? (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsx)(s.default, {
                                children: u.questions.map(w => (0, f.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, f.jsx)(l.default, {
                                        id: w._id,
                                        question: w.question,
                                        creatorName: w.creatorName,
                                        kitId: v.id,
                                        sessionId: u.sessionId
                                    })
                                }, w._id))
                            })
                        }) : (0, f.jsx)(m.default, {}) : (0, f.jsx)('div', {
                            className: 'maxWidth flex-center',
                            children: (0, f.jsx)(k.default, {
                                size: 'large'
                            })
                        })
                    ]
                }),
                (0, f.jsx)(o.default, {
                    open: w,
                    close: y
                })
            ]
        });
    });
}), c.register('Hgzpr', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('aevdF'),
        i = c('Bjl070'),
        j = c('quE27'),
        k = c('gS4g327'),
        l = c('6jmvl'),
        m = c('O0Kav'),
        n = c('u4s09'),
        o = c('d4nUv'),
        p = c('EcRRW');
    let q, r, s, t, u = a => a;
    var _v = (0, l.observer)(() => {
        const [w, x, y] = (0, j.useBoolean)(!1), {
            kitCollab: z
        } = m.useContext(o.default), A = `${ (0, j.getDomain)() }/kit-collab/${ z.sessionId }`, B = m.useCallback(() => {
            b(k)(A), i.default.success('KitCollab link copied!');
        }, [A]);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(_x, {
                            children: 'Share the KitCollab link with anybody you want to contribute questions. Once they submit their questions, you\'ll see them pop up here for you to approve or reject.'
                        }),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, f.jsx)(h.default, {
                                        size: 'large',
                                        readOnly: !0,
                                        style: {
                                            width: '100%'
                                        },
                                        value: A
                                    })
                                }),
                                (0, f.jsxs)(_z, {
                                    children: [
                                        (0, f.jsx)(g.default, {
                                            size: 'large',
                                            style: {
                                                width: '50%'
                                            },
                                            onClick: x,
                                            children: 'View QR Code'
                                        }),
                                        (0, f.jsx)('div', {
                                            style: {
                                                width: 10,
                                                flexShrink: 0
                                            }
                                        }),
                                        (0, f.jsx)(g.default, {
                                            onClick: B,
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
                (0, f.jsx)(p.default, {
                    link: A,
                    visible: w,
                    close: y
                })
            ]
        });
    });
    const _w = n.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u`
  margin-top: 15px;
`)),
        _x = n.default.div(r || (r = u`
  font-size: 18px;
`)),
        _y = n.default.div.attrs({
            className: 'flex-column'
        })(s || (s = u`
  margin-top: 20px;
`)),
        _z = n.default.div.attrs({
            className: 'maxWidth flex vc'
        })(t || (t = u`
  margin-top: 10px;
`));
}), c.register('Bjl070', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('g8lYc'),
        g = c('YpFEA'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('TMn+i0'),
        k = c('d3CSY0'),
        l = c('68fTw');
    let m = null,
        n = a => a(),
        o = [],
        p = {};
    const q = h.forwardRef((a, d) => {
        const r = () => {
                const {
                    prefixCls: s,
                    container: t,
                    maxCount: u,
                    duration: v,
                    rtl: w,
                    top: x
                } = function() {
                    const {
                        prefixCls: y,
                        getContainer: z,
                        duration: A,
                        rtl: B,
                        maxCount: C,
                        top: D
                    } = p;
                    return {
                        prefixCls: null != y ? y : (0, i.globalConfig)().getPrefixCls('message'),
                        container: (null == z ? void 0 : z()) || document.body,
                        duration: A,
                        rtl: B,
                        maxCount: C,
                        top: D
                    };
                }();
                return {
                    prefixCls: s,
                    getContainer: () => t,
                    maxCount: u,
                    duration: v,
                    rtl: w,
                    top: x
                };
            },
            [s, t] = h.useState(r),
            [u, v] = (0, k.useInternalMessage)(s),
            w = (0, i.globalConfig)(),
            x = w.getRootPrefixCls(),
            y = w.getIconPrefixCls(),
            z = () => {
                t(r);
            };
        return h.useEffect(z, []), h.useImperativeHandle(d, () => {
            const A = Object.assign({}, u);
            return Object.keys(A).forEach(d => {
                A[d] = function() {
                    return z(), u[d].apply(u, arguments);
                };
            }), {
                instance: A,
                sync: z
            };
        }), h.createElement(i.default, {
            prefixCls: x,
            iconPrefixCls: y
        }, v);
    });

    function r() {
        if (!m) {
            const s = document.createDocumentFragment(),
                t = {
                    fragment: s
                };
            return m = t, void n(() => {
                (0, g.render)(h.createElement(q, {
                    ref: s => {
                        const {
                            instance: u,
                            sync: v
                        } = s || {};
                        Promise.resolve().then(() => {
                            !t.instance && u && (t.instance = u, t.sync = v, r());
                        });
                    }
                }), s);
            });
        }
        m.instance && (o.forEach(a => {
            const {
                type: s,
                skipped: t
            } = a;
            if (!t)
                switch (s) {
                    case 'open':
                        n(() => {
                            const u = m.instance.open(Object.assign(Object.assign({}, p), a.config));
                            null == u || u.then(a.resolve), a.setCloseFn(u);
                        });
                        break;
                    case 'destroy':
                        n(() => {
                            null == m || m.instance.destroy(a.key);
                        });
                        break;
                    default:
                        n(() => {
                            var u;
                            const v = (u = m.instance)[s].apply(u, (0, f.default)(a.args));
                            null == v || v.then(a.resolve), a.setCloseFn(v);
                        });
                }
        }), o = []);
    }

    function s(t, u) {
        const v = (0, l.wrapPromiseFn)(v => {
            let w;
            const x = {
                type: t,
                args: u,
                resolve: v,
                setCloseFn: t => {
                    w = t;
                }
            };
            return o.push(x), () => {
                w ? n(() => {
                    w();
                }) : x.skipped = !0;
            };
        });
        return r(), v;
    }
    const t = {
        open: function(u) {
            const v = (0, l.wrapPromiseFn)(v => {
                let w;
                const x = {
                    type: 'open',
                    config: u,
                    resolve: v,
                    setCloseFn: u => {
                        w = u;
                    }
                };
                return o.push(x), () => {
                    w ? n(() => {
                        w();
                    }) : x.skipped = !0;
                };
            });
            return r(), v;
        },
        destroy: function(u) {
            o.push({
                type: 'destroy',
                key: u
            }), r();
        },
        config: function(u) {
            p = Object.assign(Object.assign({}, p), u), n(() => {
                var v;
                null === (v = null == m ? void 0 : m.sync) || void 0 === v || v.call(m);
            });
        },
        useMessage: k.default,
        _InternalPanelDoNotUseOrYouWillBeFired: j.default
    };
    [
        'success',
        'info',
        'warning',
        'error',
        'loading'
    ].forEach(a => {
        t[a] = function() {
            for (var u = arguments.length, v = new Array(u), w = 0; w < u; w++)
                v[w] = arguments[w];
            return s(a, v);
        };
    });
    var _u = t;
}), c.register('TMn+i0', function(d, e) {
    a(d.exports, 'TypeIcon', function() {
        return _q;
    }, function(f) {
        return _q = f;
    }), a(d.exports, 'PureContent', function() {
        return _r;
    }, function(f) {
        return _r = f;
    }), a(d.exports, 'default', function() {
        return _s;
    }, function(f) {
        return _s = f;
    });
    var f = c('O0Kav'),
        g = c('bR8Yv'),
        h = c('ltJdn'),
        i = c('7s2gi'),
        j = c('DEY39'),
        k = c('/VDzu'),
        l = c('tGVyf'),
        m = c('/U36/'),
        n = c('Odcy10'),
        o = c('R2nG3'),
        p = function(q, r) {
            var s = {};
            for (var t in q)
                Object.prototype.hasOwnProperty.call(q, t) && r.indexOf(t) < 0 && (s[t] = q[t]);
            if (null != q && 'function' == typeof Object.getOwnPropertySymbols) {
                var u = 0;
                for (t = Object.getOwnPropertySymbols(q); u < t.length; u++)
                    r.indexOf(t[u]) < 0 && Object.prototype.propertyIsEnumerable.call(q, t[u]) && (s[t[u]] = q[t[u]]);
            }
            return s;
        };
    const _q = {
        info: f.createElement(k.default, null),
        success: f.createElement(j.default, null),
        error: f.createElement(i.default, null),
        warning: f.createElement(h.default, null),
        loading: f.createElement(g.default, null)
    };

    function _r(s) {
        let {
            prefixCls: t,
            type: u,
            icon: v,
            children: w
        } = s;
        return f.createElement('div', {
            className: b(m)(`${ t }-custom-content`, `${ t }-${ u }`)
        }, v || _q[u], f.createElement('span', null, w));
    }

    function _s(t) {
        const {
            prefixCls: u,
            className: v,
            type: w,
            icon: x,
            content: y
        } = t, z = p(t, [
            'prefixCls',
            'className',
            'type',
            'icon',
            'content'
        ]), {
            getPrefixCls: A
        } = f.useContext(o.ConfigContext), B = u || A('message'), [, C] = (0, n.default)(B);
        return f.createElement(l.Notice, Object.assign({}, z, {
            prefixCls: B,
            className: b(m)(v, C, `${ B }-notice-pure-panel`),
            eventKey: 'pure',
            duration: null,
            content: f.createElement(_r, {
                prefixCls: B,
                type: w,
                icon: x
            }, y)
        }));
    }
}), c.register('Odcy10', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
    const j = a => {
        const {
            componentCls: k,
            iconCls: l,
            boxShadow: m,
            colorBgElevated: n,
            colorSuccess: o,
            colorError: p,
            colorWarning: _q,
            colorInfo: r,
            fontSizeLG: s,
            motionEaseInOutCirc: t,
            motionDurationSlow: u,
            marginXS: v,
            paddingXS: w,
            borderRadiusLG: x,
            zIndexPopup: y,
            messageNoticeContentPadding: z
        } = a, A = new(0, f.Keyframes)('MessageMoveIn', {
            '0%': {
                padding: 0,
                transform: 'translateY(-100%)',
                opacity: 0
            },
            '100%': {
                padding: w,
                transform: 'translateY(0)',
                opacity: 1
            }
        }), B = new(0, f.Keyframes)('MessageMoveOut', {
            '0%': {
                maxHeight: a.height,
                padding: w,
                opacity: 1
            },
            '100%': {
                maxHeight: 0,
                padding: 0,
                opacity: 0
            }
        });
        return [{
                [k]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                    position: 'fixed',
                    top: v,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: y,
                    [`${ k }-move-up`]: {
                        animationFillMode: 'forwards'
                    },
                    [`\n        ${ k }-move-up-appear,\n        ${ k }-move-up-enter\n      `]: {
                        animationName: A,
                        animationDuration: u,
                        animationPlayState: 'paused',
                        animationTimingFunction: t
                    },
                    [`\n        ${ k }-move-up-appear${ k }-move-up-appear-active,\n        ${ k }-move-up-enter${ k }-move-up-enter-active\n      `]: {
                        animationPlayState: 'running'
                    },
                    [`${ k }-move-up-leave`]: {
                        animationName: B,
                        animationDuration: u,
                        animationPlayState: 'paused',
                        animationTimingFunction: t
                    },
                    [`${ k }-move-up-leave${ k }-move-up-leave-active`]: {
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
                [`${ k }-notice`]: {
                    padding: w,
                    textAlign: 'center',
                    [`${ k }-custom-content > ${ l }`]: {
                        verticalAlign: 'text-bottom',
                        marginInlineEnd: v,
                        fontSize: s
                    },
                    [`${ k }-notice-content`]: {
                        display: 'inline-block',
                        padding: z,
                        background: n,
                        borderRadius: x,
                        boxShadow: m,
                        pointerEvents: 'all'
                    },
                    [`${ k }-success > ${ l }`]: {
                        color: o
                    },
                    [`${ k }-error > ${ l }`]: {
                        color: p
                    },
                    [`${ k }-warning > ${ l }`]: {
                        color: _q
                    },
                    [`\n        ${ k }-info > ${ l },\n        ${ k }-loading > ${ l }`]: {
                        color: r
                    }
                }
            },
            {
                [`${ k }-notice-pure-panel`]: {
                    padding: 0,
                    textAlign: 'start'
                }
            }
        ];
    };
    var k = (0, g.default)('Message', a => {
        const l = (0, h.merge)(a, {
            messageNoticeContentPadding: `${ (a.controlHeightLG - a.fontSize * a.lineHeight) / 2 }px ${ a.paddingSM }px`
        });
        return [j(l)];
    }, a => ({
        height: 150,
        zIndexPopup: a.zIndexPopupBase + 10
    }));
}), c.register('d3CSY0', function(d, e) {
    a(d.exports, 'useInternalMessage', function() {
        return _x;
    }, function(f) {
        return _x = f;
    }), a(d.exports, 'default', function() {
        return _y;
    }, function(f) {
        return _y = f;
    });
    var f = c('O0Kav'),
        g = c('tGVyf'),
        h = c('/U36/'),
        i = c('ReZvd'),
        j = c('R2nG3'),
        k = c('Odcy10'),
        l = c('68fTw'),
        m = c('TMn+i0'),
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
    const o = 3,
        p = f.forwardRef((a, c) => {
            const {
                top: q,
                prefixCls: r,
                getContainer: s,
                maxCount: t,
                duration: u = v,
                rtl: w,
                transitionName: _x,
                onAllRemoved: _y
            } = a, {
                getPrefixCls: z,
                getPopupContainer: A
            } = f.useContext(j.ConfigContext), B = r || z('message'), [, C] = (0, k.default)(B), D = f.createElement('span', {
                className: `${ B }-close-x`
            }, f.createElement(i.default, {
                className: `${ B }-close-icon`
            })), [E, F] = (0, g.useNotification)({
                prefixCls: B,
                style: () => ({
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: null != q ? q : 8
                }),
                className: () => b(h)(C, w ? `${ B }-rtl` : ''),
                motion: () => (0, l.getMotion)(B, _x),
                closable: !1,
                closeIcon: D,
                duration: u,
                getContainer: () => (null == s ? void 0 : s()) || (null == A ? void 0 : A()) || document.body,
                maxCount: t,
                onAllRemoved: _y
            });
            return f.useImperativeHandle(c, () => Object.assign(Object.assign({}, E), {
                prefixCls: B,
                hashId: C
            })), F;
        });
    let q = 0;

    function r(s) {
        const t = f.useRef(null);
        return [
            f.useMemo(() => {
                const u = u => {
                        var v;
                        null === (v = t.current) || void 0 === v || v.close(u);
                    },
                    v = v => {
                        if (!t.current) {
                            const w = () => {};
                            return w.then = () => {}, w;
                        }
                        const {
                            open: w,
                            prefixCls: x,
                            hashId: y
                        } = t.current, z = `${ x }-notice`, {
                            content: A,
                            icon: B,
                            type: C,
                            key: D,
                            className: E,
                            onClose: F
                        } = v, G = n(v, [
                            'content',
                            'icon',
                            'type',
                            'key',
                            'className',
                            'onClose'
                        ]);
                        let H = D;
                        return null == H && (q += 1, H = `antd-message-${ q }`), (0, l.wrapPromiseFn)(t => (w(Object.assign(Object.assign({}, G), {
                            key: H,
                            content: f.createElement(m.PureContent, {
                                prefixCls: x,
                                type: C,
                                icon: B
                            }, A),
                            placement: 'top',
                            className: b(h)(C && `${ z }-${ C }`, y, E),
                            onClose: () => {
                                null == F || F(), t();
                            }
                        })), () => {
                            u(H);
                        }));
                    },
                    w = {
                        open: v,
                        destroy: b => {
                            var x;
                            void 0 !== b ? u(b) : null === (x = t.current) || void 0 === x || x.destroy();
                        }
                    };
                return [
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].forEach(u => {
                    w[u] = (b, t, w) => {
                        let x, y, z;
                        x = b && 'object' == typeof b && 'content' in b ? b : {
                            content: b
                        }, 'function' == typeof t ? z = t : (y = t, z = w);
                        const A = Object.assign(Object.assign({
                            onClose: z,
                            duration: y
                        }, x), {
                            type: u
                        });
                        return v(A);
                    };
                }), w;
            }, []),
            f.createElement(p, Object.assign({
                key: 'message-holder'
            }, s, {
                ref: t
            }))
        ];
    }

    function s(t) {
        return r(t);
    }
}), c.register('68fTw', function(d, e) {
    function f(g, h) {
        return {
            motionName: null != h ? h : `${ g }-move-up`
        };
    }

    function g(h) {
        let i;
        const j = new Promise(j => {
                i = h(() => {
                    j(!0);
                });
            }),
            k = () => {
                null == i || i();
            };
        return k.then = (h, i) => j.then(h, i), k.promise = j, k;
    }
    a(d.exports, 'getMotion', function() {
        return f;
    }), a(d.exports, 'wrapPromiseFn', function() {
        return g;
    });
}), c.register('gS4g327', function(d, e) {
    var f = c('OG3rI27'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('OG3rI27', function(d, e) {
    d.exports = function() {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function() {};
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                g.blur();
                break;
            default:
                g = null;
        }
        return f.removeAllRanges(),
            function() {
                'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function(j) {
                    f.addRange(j);
                }), g && g.focus();
            };
    };
}), c.register('EcRRW', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('AE7vR'),
        h = c('O0Kav');
    const i = h.lazy(() => c('0ilNB'));
    var _j = a => (0, f.jsx)(g.default, {
        open: a.visible,
        onCancel: a.close,
        footer: null,
        closable: !0,
        children: (0, f.jsx)('div', {
            className: 'maxAll flex-center',
            children: (0, f.jsx)(h.Suspense, {
                fallback: null,
                children: (0, f.jsx)(i, {
                    link: a.link
                })
            })
        })
    });
}), c.register('0ilNB', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('b7Bno')),
        import('./' + c('Dq3qN').resolve('i8Pm1'))
    ]).then(() => c('qc42G'));
}), c.register('BX8EJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('t52Ep'),
        j = c('FB7HT26');
    let k, l, m, n = a => a;
    var _o = a => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsx)(_q, {
                children: 'KitCollab'
            }),
            (0, f.jsx)(_r, {
                onClick: a.openSettings,
                children: (0, f.jsx)(i.default, {
                    name: 'fas fa-cog',
                    style: {
                        color: '#616161'
                    }
                })
            })
        ]
    });
    const _p = g.default.div.attrs({
            className: 'flex maxWidth between'
        })(k || (k = n`
  line-height: 1;
  margin-top: 10px;
  align-items: flex-start;
`)),
        _q = g.default.div(l || (l = n`
  font-size: 42px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold),
        _r = (0, g.default)(j.default)(m || (m = n`
  font-size: 24px;
`));
}), c.register('PnRJd', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('ej/50'),
        h = c('P1KtI'),
        i = c('EC4am'),
        j = c('O0Kav'),
        k = c('u4s09'),
        l = c('Eh2Wh'),
        m = c('0QNOt'),
        n = c('6jmvl'),
        o = c('d4nUv'),
        p = c('quE27');
    let q, r, s = a => a;
    var _t = (0, n.observer)(a => {
        const {
            id: u
        } = a, {
            kitCollab: v
        } = j.useContext(o.default), [w, x, y] = (0, p.useBoolean)(!1), z = {
            _id: `q-${ u }`,
            text: a.question.text,
            type: a.question.type,
            answers: a.question.answers.map((a, v) => ({
                _id: `${ u }-answer-${ v }`,
                correct: a.correct,
                text: a.text
            }))
        }, A = u => {
            (0, p.request)({
                url: '/api/kitcollab/question/action',
                data: {
                    sessionId: a.sessionId,
                    questionId: a.id,
                    accepted: u
                }
            });
        }, B = () => {
            v.questions.replace(v.questions.filter(u => u._id !== a.id)), v.waitingQuestions = v.questions.length;
        };
        return (0, f.jsx)(i.default, {
            question: z,
            showAllAnswers: !0,
            blockToggleShowAnswers: !0,
            customStyle: {
                marginBottom: 20
            },
            customBottomComponent: (0, f.jsxs)(_u, {
                children: [
                    (0, f.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, f.jsx)(h.default, {
                                type: 'primary',
                                onClick: () => {
                                    w || (x(), A(!0), (0, m.default)([{
                                        questionText: z.text,
                                        type: z.type,
                                        answers: z.answers.map(a => ({
                                            text: a.text,
                                            correct: a.correct,
                                            textType: a.textType
                                        })),
                                        source: 'collab',
                                        kitId: a.kitId
                                    }], () => {
                                        y(), B();
                                    }, {
                                        stay: !0
                                    }));
                                },
                                loading: w,
                                icon: (0, f.jsx)(g.default, {}),
                                children: 'Add To Kit'
                            }),
                            (0, f.jsx)(h.default, {
                                danger: !0,
                                type: 'primary',
                                onClick: () => {
                                    A(!1), B();
                                },
                                style: {
                                    marginLeft: 5
                                },
                                children: 'Reject'
                            })
                        ]
                    }),
                    (0, f.jsxs)(_v, {
                        children: [
                            'Submitted by',
                            ' ',
                            (0, f.jsx)('span', {
                                style: {
                                    fontWeight: l.FontWeights.Bold
                                },
                                children: a.creatorName
                            })
                        ]
                    })
                ]
            })
        });
    });
    const _u = k.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = s`
  margin-top: 16px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  line-height: 1;
`)),
        _v = k.default.div(r || (r = s`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`));
}), c.register('e5H/t', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('8KqQ+');
    c('O0Kav');
    var h = c('u4s09');
    let i, j, k, l = a => a;
    var _m = () => (0, f.jsxs)(_n, {
        children: [
            (0, f.jsx)(_o, {}),
            (0, f.jsx)(_p, {
                children: 'No questions to review. Once new questions are submitted, you\'ll find them here.'
            })
        ]
    });
    const _n = h.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(i || (i = l`
  border-style: dashed;
  border-radius: 4px;
  border-color: ${ 0 };
  padding: 50px;
  border-width: 3px;
`), g.default.BorderGray),
        _o = h.default.img.attrs({
            src: '/client/img/editor/empty.svg'
        })(j || (j = l`
  height: 50px;
`)),
        _p = h.default.div(k || (k = l`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  color: #263238;
`));
}), c.register('7OKRz', function(d, e) {
    a(d.exports, 'default', function() {
        return _C;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('VNuyu'),
        i = c('3t9ce'),
        j = c('Bjl070'),
        k = c('AE7vR'),
        l = c('p1B/0'),
        m = c('u4s09'),
        n = c('8KqQ+'),
        o = c('FB7HT26'),
        p = c('Eh2Wh'),
        q = c('nKuOQ'),
        r = c('quE27'),
        s = c('6jmvl'),
        t = c('d4nUv'),
        u = c('RfwiW'),
        v = c('aB6BC');
    let w, x, y, z, A, B = a => a;
    var _C = (0, s.observer)(a => {
        const {
            kitCollab: D
        } = g.useContext(t.default), [E, F, G] = (0, r.useBoolean)(!1);
        return (0, f.jsx)(i.default, {
            open: a.open,
            onClose: a.close,
            width: 500,
            closable: !0,
            children: (0, f.jsxs)(_D, {
                children: [
                    (0, f.jsxs)(_E, {
                        children: [
                            (0, f.jsxs)(_F, {
                                children: [
                                    (0, f.jsx)(_G, {
                                        children: 'Private KitCollab'
                                    }),
                                    (0, f.jsxs)(_H, {
                                        children: [
                                            'Only allow students in your classes to contribute questions. If you haven\'t already created a class, you can do so',
                                            ' ',
                                            (0, f.jsx)(o.default, {
                                                to: q.NEW_CLASS,
                                                target: '_blank',
                                                children: 'here.'
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, f.jsx)(l.default, {
                                loading: E,
                                checked: !D.isPublic,
                                onChange: () => {
                                    E || (F(), (0, r.request)({
                                        url: `/api/kitcollab/toggle-privacy/${ D.sessionId }`,
                                        success: () => {
                                            D.isPublic = !D.isPublic;
                                        },
                                        both: () => G()
                                    }));
                                }
                            })
                        ]
                    }),
                    (0, f.jsx)(h.default, {}),
                    (0, f.jsxs)('div', {
                        className: 'flex-column',
                        children: [
                            (0, f.jsx)(o.default, {
                                onClick: () => {
                                    (0, r.request)({
                                        url: `/api/kitcollab/session/reset-link/${ D.sessionId }`,
                                        success: E => {
                                            D.sessionId = E, k.default.success({
                                                title: 'KitCollab link regenerated!',
                                                content: 'The old link will no longer work for contributing questions. Please send students the updated link.'
                                            }), a.close();
                                        },
                                        error: a => (0, r.throwMessageError)({
                                            e: a,
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
                            (0, f.jsx)(o.default, {
                                onClick: () => {
                                    k.default.confirm({
                                        title: 'Are you sure?',
                                        content: 'Disabling KitCollab will also delete any questions waiting to be accepted.',
                                        okText: 'Yes',
                                        onOk: () => {
                                            (0, r.request)({
                                                url: '/api/kitcollab/session/delete',
                                                data: {
                                                    sessionId: D.sessionId
                                                },
                                                success: () => {
                                                    D.enabled = !1, D.sessionId = '', D.questions.replace([]), D.waitingQuestions = 0, D.hasFetchedFirstBatchOfQuestions = !1, (0, u.default)(v.editorBase), j.default.success('KitCollab disabled!');
                                                },
                                                error: a => {
                                                    (0, r.throwMessageError)({
                                                        e: a,
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
    const _D = m.default.div(w || (w = B`
  color: ${ 0 };
  font-family: ${ 0 };
  font-size: 18px;
  padding-top: 35px;
`), n.default.Black, p.Fonts.SFPro),
        _E = m.default.div.attrs({
            className: 'flex vc'
        })(x || (x = B``)),
        _F = m.default.div(y || (y = B`
  margin-right: 40px;
`)),
        _G = m.default.div(z || (z = B`
  font-size: 24px;
  font-weight: ${ 0 };
`), p.FontWeights.Bold),
        _H = m.default.div(A || (A = B``));
}), c.register('1lE8T', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('bE1mJ');
    var _h = () => {
        g.default.kitCollab.sessionId && (0, f.request)({
            url: `/api/kitcollab/questions/${ g.default.kitCollab.sessionId }`,
            success: a => {
                g.default.kitCollab.questions.replace(a);
            },
            both: () => {
                g.default.kitCollab.hasFetchedFirstBatchOfQuestions = !0;
            }
        });
    };
}), c.register('CUfP0', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('VNuyu'),
        i = c('Eh2Wh'),
        j = c('quE27'),
        k = c('6jmvl'),
        l = c('O0Kav'),
        m = c('u4s09'),
        n = c('d4nUv');
    let o, p, q, r, s = a => a;
    var _t = (0, k.observer)(() => {
        const {
            kitDetails: {
                id: u
            },
            kitCollab: v
        } = l.useContext(n.default), [w, x, y] = (0, j.useBoolean)(!1);
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(_v, {}),
                (0, f.jsx)(_w, {
                    children: 'KitCollab'
                }),
                (0, f.jsx)(_x, {
                    children: 'KitCollab allows anybody, including students, to contribute questions to your kit! Build a kit together in real-time, or asynchronously!'
                }),
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)(g.default, {
                    style: {
                        height: 60
                    },
                    size: 'large',
                    block: !0,
                    type: 'primary',
                    loading: w,
                    onClick: () => {
                        x(), (0, j.request)({
                            url: '/api/kitcollab/session/create',
                            data: {
                                gameId: u
                            },
                            success: u => {
                                v.sessionId = u, v.enabled = !0;
                            },
                            error: u => {
                                (0, j.throwMessageError)({
                                    e: u,
                                    default: {
                                        title: 'There was an error enabling KitCollab. Please try again later.'
                                    }
                                });
                            },
                            both: () => y
                        });
                    },
                    children: 'Enable KitCollab'
                })
            ]
        });
    });
    const _u = m.default.div.attrs({
            className: 'flex-center flex-column maxAll'
        })(o || (o = s``)),
        _v = m.default.img.attrs({
            src: '/client/img/editor/kitcollab.svg'
        })(p || (p = s`
  height: 140px;
`)),
        _w = m.default.div(q || (q = s`
  font-size: 48px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), i.FontWeights.UltraBold),
        _x = m.default.div(r || (r = s`
  font-size: 18px;
  margin-top: 2px;
`));
}), c.register('9U9Vd', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('6jmvl'),
        g = c('O0Kav'),
        h = c('NGk25'),
        i = c('/4RRY'),
        j = c('d4nUv'),
        k = c('1lE8T');
    var _l = (0, f.observer)(() => {
        const {
            kitCollab: m
        } = g.useContext(j.default);
        g.useEffect(() => {
            (0, h.default)();
        }, []);
        return (0, i.useIntervalWhen)(() => {
            m.panelOpen && m.enabled && m.sessionId && (0, k.default)();
        }, 5000), (0, i.useIntervalWhen)(() => {
            !m.panelOpen && m.sessionId && (0, h.default)();
        }, 10000), null;
    });
}), c.register('NGk25', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('bE1mJ');
    var _h = () => {
        (0, f.isStudent)() || (0, f.request)({
            url: `/api/kitcollab/session/${ g.default.kitDetails.id }`,
            success: a => {
                g.default.kitCollab.sessionId = a.sessionId, g.default.kitCollab.enabled = !0, g.default.kitCollab.waitingQuestions = a.questions, g.default.kitCollab.isPublic = a.isPublic;
            },
            error: () => {
                g.default.kitCollab.sessionId = '', g.default.kitCollab.enabled = !1, g.default.kitCollab.waitingQuestions = 0;
            }
        });
    };
}), c.register('/4RRY', function(d, e) {
    a(d.exports, 'useIntervalWhen', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h, i, j, k) {
        void 0 === i && (i = 0), void 0 === j && (j = !0), void 0 === k && (k = !1);
        var l = (0, f.useRef)();

        function m() {
            l.current && l.current();
        }
        (0, f.useEffect)(function() {
            l.current = h;
        }), (0, f.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (j) {
                    k && m();
                    var n = window.setInterval(m, i);
                    return function() {
                        window.clearInterval(n);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            j,
            i
        ]);
    }
}), c.register('ODx6h', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('AE7vR'),
        k = c('cP64q'),
        l = c('oLX/y'),
        m = c('6jmvl'),
        n = c('quE27'),
        o = c('bE1mJ'),
        p = c('aB6BC'),
        q = c('RfwiW'),
        r = c('nKuOQ'),
        s = c('KxkP827'),
        t = c('IMf/b4');
    let u;
    var v;
    (v = u || (u = {})).details = 'details', v.image = 'image';
    let w = class extends i.Component {
        componentDidMount() {
            this.props.kitDetails.id && (0, s.NavigateTo)(r.DASHBOARD);
        }
        render() {
            return (0, h.jsx)('div', {
                children: (0, h.jsx)(j.default, {
                    open: !0,
                    style: {
                        top: 20
                    },
                    footer: null,
                    closable: !1,
                    children: (0, h.jsxs)('div', {
                        style: {
                            height: 510
                        },
                        className: 'disable-scrollbars scroll',
                        children: [
                            this.state.stage === u.details && (0, h.jsx)(k.default, {
                                onNext: this.onKitDetails
                            }),
                            this.state.stage === u.image && (0, h.jsx)(l.default, {
                                title: 'Choose a cover photo',
                                defaultSearchTerm: this.props.kitDetails.title,
                                onImagePicked: this.onImagePicked
                            })
                        ]
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                stage: u.details,
                creatingKit: !1,
                createdKit: !1
            }), (0, f.default)(this, 'onKitDetails', () => {
                this.switchToImageScreen();
            }), (0, f.default)(this, 'onImagePicked', a => {
                this.state.createdKit || this.state.creatingKit || (this.setState({
                    creatingKit: !0
                }), this.props.kitDetails.image = a, (0, n.request)({
                    url: '/api/v1/editor/create',
                    method: 'POST',
                    data: {
                        title: this.props.kitDetails.title,
                        image: a,
                        gradeLevel: this.props.kitDetails.gradeLevel,
                        language: this.props.kitDetails.language,
                        subject: this.props.kitDetails.subject,
                        isPrivate: (0, n.isStudent)()
                    },
                    success: a => {
                        (0, t.AnalyticsTrackEvent)({
                            event: 'kit_created'
                        }), this.setState({
                            createdKit: !0
                        });
                        const {
                            kitDetails: x,
                            editor: y
                        } = o.default;
                        y.editSessionCounted = !0, x.id = a._id, x.title = a.title, x.image = a.image, x.language = a.lang, x.gradeLevel = a.gradeLevel, x.privacy = a.privacy, (0, q.default)(p.editorBase);
                    },
                    error: a => j.default.error({
                        title: 'Error Creating Kit',
                        content: a && a.message && a.message.text ? a.message.text : 'Please try again'
                    }),
                    both: () => this.setState({
                        creatingKit: !1
                    })
                }));
            }), (0, f.default)(this, 'switchToImageScreen', () => this.setState({
                stage: u.image
            })), (0, f.default)(this, 'switchToDetailsScreen', () => this.setState({
                stage: u.details
            }));
        }
    };
    w = (0, g.__decorate)([
        (0, m.inject)('kitDetails'),
        m.observer
    ], w);
    var _x = w;
}), c.register('IMf/b4', function(d, e) {
    a(d.exports, 'AnalyticsTrackEvent', function() {
        return _j;
    });
    var f = c('gK+6L'),
        g = c('quE27'),
        h = c('95m0H'),
        i = c('50Ts4');
    const _j = a => {
        var k, l, m;
        if ((window.gtag && !(null === (k = a.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', a.event, a.properties), h.AnalyticsFlags.educatorOnly) && (null === (m = (0, g.getUser)()) || void 0 === m ? void 0 : m.accountType) !== f.default.educator)
            return;
        (null === (l = a.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, i.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('u8Fxu', function(d, e) {
    a(d.exports, 'useWillUnmount', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        (0, f.useEffect)(function() {
            return h;
        }, []);
    }
}), c.register('LCFQW3', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('qovyz3'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PaperClipOutlined';
    var _k = g.forwardRef(j);
}), c.register('qovyz3', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('zcv8p4', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('FBlYU4'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlayCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('FBlYU4', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('e5xHg25', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('MsxQz'),
        g = c('O0Kav'),
        h = c('R2nG3');

    function _i(j, k, l) {
        return function(m) {
            const {
                prefixCls: n,
                style: o
            } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, {
                value: m.open
            }), {
                getPrefixCls: w
            } = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(y => {
                            const z = y[0].target;
                            r(z.offsetHeight + 8), t(z.offsetWidth);
                        }),
                        z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`,
                                C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), {
                    margin: 0
                }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('kufQf25', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('ZyWBF'),
        g = c('6vEai');
    const h = new(0, f.Keyframes)('antMoveDownIn', {
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
        i = new(0, f.Keyframes)('antMoveDownOut', {
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
        j = new(0, f.Keyframes)('antMoveLeftIn', {
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
        k = new(0, f.Keyframes)('antMoveLeftOut', {
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
        l = new(0, f.Keyframes)('antMoveRightIn', {
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
        m = new(0, f.Keyframes)('antMoveRightOut', {
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
        n = {
            'move-up': {
                inKeyframes: new(0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, f.Keyframes)('antMoveUpOut', {
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
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        },
        _o = (a, d) => {
            const {
                antCls: p
            } = a, q = `${ p }-${ d }`, {
                inKeyframes: r,
                outKeyframes: s
            } = n[d];
            return [
                (0, g.initMotion)(q, r, s, a.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('E2AMI26', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('42T6R26'),
        k = c('yRLYd'),
        l = c('qW/eZ26'),
        m = c('AzDc2'),
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
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = a => {
        const {
            getPrefixCls: r,
            space: s,
            direction: t
        } = h.useContext(i.ConfigContext), {
            size: u = (null == s ? void 0 : s.size) || 'small',
            align: v,
            className: _w,
            rootClassName: x,
            children: y,
            direction: z = 'horizontal',
            prefixCls: A,
            split: B,
            style: C,
            wrap: D = !1
        } = a, E = n(a, [
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
        ]), F = (0, j.default)(), [G, H] = h.useMemo(() => (Array.isArray(u) ? u : [
            u,
            u
        ]).map(a => function(I) {
            return 'string' == typeof I ? p[I] : I || 0;
        }(a)), [u]), I = (0, g.default)(y, {
            keepEmpty: !0
        }), J = void 0 === v && 'horizontal' === z ? 'center' : v, K = r('space', A), [L, M] = (0, m.default)(K), N = b(f)(K, M, `${ K }-${ z }`, {
            [`${ K }-rtl`]: 'rtl' === t,
            [`${ K }-align-${ J }`]: J
        }, _w, x), O = `${ K }-item`, P = 'rtl' === t ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((a, b) => {
                null != a && (Q = b);
                const S = a && a.key || `${ O }-${ b }`;
                return h.createElement(l.default, {
                    className: O,
                    key: S,
                    direction: z,
                    index: b,
                    marginDirection: P,
                    split: B,
                    wrap: D
                }, a);
            }),
            S = h.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return D && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(h.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), C)
        }, E), h.createElement(_o.Provider, {
            value: S
        }, R)));
    };
    q.Compact = k.default;
    var r = q;
}), c.register('42T6R26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nzHVd'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('qW/eZ26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('E2AMI26');

    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = {
            marginBottom: q / (o ? 2 : 1)
        }) : u = Object.assign(Object.assign({}, l < s && {
            [m]: q / (o ? 2 : 1)
        }), p && {
            paddingBottom: r
        })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('ZIYAX24', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function() {
                return window.matchMedia(h);
            }, [h]),
            j = (0, f.useState)(function() {
                return i.matches;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useEffect)(function() {
            l(i.matches);
            var m = function(n) {
                return l(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('d/TAL25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__exportStar || function(h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), g(c('Tn4aA25'), d.exports), g(c('R+vNj25'), d.exports), g(c('5nRuZ25'), d.exports);
}), c.register('Tn4aA25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('5nRuZ25');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('5nRuZ25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__setModuleDefault || (Object.create ? function(h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function(h, i) {
            h.default = i;
        }),
        h = d.exports && d.exports.__importStar || function(i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useWindowSize = void 0;
    var i = h(c('O0Kav'));

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function() {
        var k = i.useState(j()),
            l = k[0],
            m = k[1];
        return i.useLayoutEffect(function() {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n),
                function() {
                    return window.removeEventListener('resize', n);
                };
        }, []), l;
    };
}), c.register('R+vNj25', function(d, e) {
    var f = d.exports && d.exports.__assign || function() {
            return f = Object.assign || function(g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        },
        g = d.exports && d.exports.__createBinding || (Object.create ? function(h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function() {
                    return i[j];
                }
            });
        } : function(h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }),
        h = d.exports && d.exports.__setModuleDefault || (Object.create ? function(i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function(i, j) {
            i.default = j;
        }),
        i = d.exports && d.exports.__importStar || function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useComponentSize = void 0;
    var j = i(c('O0Kav'));
    d.exports.useComponentSize = function() {
        var k = j.useState({
                height: 0,
                width: 0
            }),
            l = k[0],
            m = k[1],
            n = j.useRef(),
            o = j.useCallback(function() {
                if (n.current) {
                    var p = n.current.offsetHeight,
                        q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function() {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current),
                    function() {
                        return p.disconnect();
                    };
            }
        }, [
            n,
            o
        ]), f({
            ref: n
        }, l);
    };
}), c.register('W/XnX24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('zOtFd24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('vJWh924', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('LE3I425').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('LE3I425', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('I6xj03', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('ZKc1Q'),
        h = c('O0Kav');
    const i = h.lazy(() => c('p0EES4'));
    var _j = a => {
        const k = a.hideSkeleton ? (0, f.jsx)('div', {
            className: 'maxWidth'
        }) : (0, f.jsx)('div', {
            className: 'maxWidth',
            children: (0, f.jsx)(g.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, f.jsx)(h.Suspense, {
            fallback: k,
            children: (0, f.jsx)(i, {
                ...a
            })
        });
    };
}), c.register('p0EES4', function(d, e) {
    d.exports = Promise.all([
        c('k9Uhg')(new URL(c('Dq3qN').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('Dq3qN').resolve('6iUO5'))
    ]).then(() => c('62q3k'));
}), c.register('g7UP0', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lKKrt'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ClockCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('lKKrt', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('JksFa', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('xilD9'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TrophyOutlined';
    var _k = g.forwardRef(j);
}), c.register('xilD9', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('RcaOq', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('8sxYw24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('2lnmQ24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('2lnmQ24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('JTTlV24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('P++lt24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('P++lt24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('OQRaD', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('tWyJZ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('tWyJZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('t+nQW', function(d, e) {
    a(d.exports, 'CLASSIC', function() {
        return _f;
    }), a(d.exports, 'TEAMS', function() {
        return _g;
    }), a(d.exports, 'THANOS', function() {
        return _h;
    }), a(d.exports, 'BOSS_BATTLE', function() {
        return _i;
    }), a(d.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _j;
    }), a(d.exports, 'LAVA', function() {
        return _k;
    }), a(d.exports, 'IMPOSTER', function() {
        return _l;
    }), a(d.exports, 'DRAW', function() {
        return _m;
    }), a(d.exports, 'PARDY', function() {
        return _n;
    });
    const _f = 'CLASSIC',
        _g = 'TEAMS',
        _h = 'THANOS',
        _i = 'BOSS_BATTLE',
        _j = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _k = 'LAVA',
        _l = 'IMPOSTER',
        _m = 'DRAW',
        _n = 'PARDY';
}), c.register('RBtfx4', function(d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function() {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
}), c.register('/poDA27', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('mQ0iF27'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('mQ0iF27', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('XVrof3', function(d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function() {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('bQWYI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('GkLtI'),
        h = c('Nnw7z');
    var _i = (a, d) => {
        const [j, k] = f.useState(() => {
            var l, m;
            const n = a && 'current' in a ? a.current : a;
            return n ? [
                n.offsetWidth,
                n.offsetHeight
            ] : [
                null !== (l = null == d ? void 0 : d.initialWidth) && void 0 !== l ? l : 0,
                null !== (m = null == d ? void 0 : d.initialHeight) && void 0 !== m ? m : 0
            ];
        });
        return (0, h.default)(() => {
            const l = a && 'current' in a ? a.current : a;
            l && k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }, [a]), (0, g.default)(a, a => {
            const l = a.target;
            k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }), j;
    };
}), c.register('GkLtI', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('1PitP'),
        g = c('Nnw7z'),
        h = c('xRoVg'),
        i = c('8Q3ZG');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((m, c) => {
                var n;
                if (1 === m.length)
                    null === (n = l.get(m[0].target)) || void 0 === n || n(m[0], c);
                else
                    for (let o = 0; o < m.length; o++) {
                        var p;
                        null === (p = l.get(m[o].target)) || void 0 === p || p(m[o], c);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function(m, n) {
        const o = k(),
            p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (m, o) => {
                    q || p.current(m, o);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('Nnw7z', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('xRoVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = a => {
        const h = f.useRef(a);
        return f.useEffect(() => {
            h.current = a;
        }), h;
    };
}), c.register('8Q3ZG', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = [],
            i = null,
            j = function() {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function() {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function() {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('JNGrh0', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('+pD1R19'),
        g = c('DFnC8'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('PEco5'),
        j = c('T8OqN'),
        k = c('KOz0K'),
        l = 44;

    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var n = h.forwardRef(function(o, p) {
            var q, r = o.classes,
                s = o.className,
                t = o.color,
                _u = void 0 === t ? 'primary' : t,
                v = o.disableShrink,
                w = void 0 !== v && v,
                x = o.size,
                y = void 0 === x ? 40 : x,
                z = o.style,
                A = o.thickness,
                B = void 0 === A ? 3.6 : A,
                C = o.value,
                D = void 0 === C ? 0 : C,
                E = o.variant,
                F = void 0 === E ? 'indeterminate' : E,
                G = (0, g.default)(o, [
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
                H = {},
                I = {},
                J = {};
            if ('determinate' === F || 'static' === F) {
                var K = 2 * Math.PI * ((l - B) / 2);
                H.strokeDasharray = K.toFixed(3), J['aria-valuenow'] = Math.round(D), 'static' === F ? (H.strokeDashoffset = ''.concat(((100 - D) / 100 * K).toFixed(3), 'px'), I.transform = 'rotate(-90deg)') : (H.strokeDashoffset = ''.concat((q = (100 - D) / 100, q * q * K).toFixed(3), 'px'), I.transform = 'rotate('.concat((270 * m(D / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(r.root, s, 'inherit' !== _u && r['color'.concat((0, k.default)(_u))], {
                    indeterminate: r.indeterminate,
                    static: r.static
                } [F]),
                style: (0, f.default)({
                    width: y,
                    height: y
                }, I, z),
                ref: p,
                role: 'progressbar'
            }, J, G), h.createElement('svg', {
                className: r.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(r.circle, w && r.circleDisableShrink, {
                    indeterminate: r.circleIndeterminate,
                    static: r.circleStatic
                } [F]),
                style: H,
                cx: l,
                cy: l,
                r: (l - B) / 2,
                fill: 'none',
                strokeWidth: B
            })));
        }),
        o = (0, j.default)(function(p) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: p.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: p.palette.primary.main
                },
                colorSecondary: {
                    color: p.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: p.transitions.create('stroke-dashoffset')
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
        })(n);
}), c.register('rDljU2', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('hX1pp3'),
        i = c('quE27');
    var _j = a => {
        const [k, l] = g.useState([]), [m] = g.useState(a.limit), [n, o] = g.useState(a.defaultPage), [p, q] = g.useState(!0), [r, s] = g.useState([]), [t, u] = g.useState(!1), v = g.useMemo(() => (a.modifyItems ? a.modifyItems(r) : r).map((k, l) => a.toRender(k, l)), [
            r.length,
            a.toRender
        ]), w = () => {
            if (k.includes(n))
                return;
            l(a => [
                ...a,
                n
            ]);
            const x = {
                page: n,
                limit: m
            };
            (0, i.request)({
                url: a.url,
                method: 'post',
                cacheKey: a.cacheKey,
                data: a.modifyBody ? a.modifyBody(x) : x,
                success: (k, l) => {
                    a.onTotalItems && !t && (a.onTotalItems(k.totalItems), u(!0)), k.items.forEach(k => {
                        a.onItemFetched && a.onItemFetched(k, l);
                    }), s(a => [
                        ...a,
                        ...k.items
                    ]), q(k.hasNextPage), o(k.nextPage);
                },
                error: () => {
                    a.onTotalItems && !t && (a.onTotalItems(0), u(!0)), q(!1);
                },
                both: () => l(a => a.filter(a => a !== x.page))
            });
        };
        return g.useEffect(w, []), !p && a.forceEmptyMessage || !p && 0 === r.length && a.emptyMessage ? a.emptyMessage(r) : (0, f.jsxs)(h.default, {
            dataLength: r.length,
            hasMore: p,
            style: a.scrollStyle,
            next: w,
            loader: a.loader || (0, f.jsx)('div', {}),
            scrollThreshold: a.scrollThreshold,
            endMessage: a.endMessage ? a.endMessage(r) : null,
            scrollableTarget: a.scrollableTarget,
            children: [
                a.prefix ? a.prefix() : null,
                v
            ]
        });
    };
}), c.register('F0ESS9', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+');
    let i;
    var _j = a => (0, f.jsx)(_k, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const _k = g.default.div(i || (i = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('I440g3', function(d, e) {
    a(d.exports, 'GetHomepagePath', function() {
        return _j;
    }), a(d.exports, 'RedirectToHomepage', function() {
        return _k;
    }), a(d.exports, 'ReplaceToHomePage', function() {
        return _l;
    });
    var f = c('nKuOQ'),
        g = c('qb3Ih'),
        h = c('quE27'),
        i = c('KxkP827');
    const _j = () => (0, h.isLoggedIn)() ? (0, h.isStudent)() ? f.HOME : f.KITS : '/',
        _k = () => {
            (0, i.NavigateTo)(_j());
        },
        _l = () => {
            g.history.replace(_j());
        };
}), c.register('7GnGD2', function(d, e) {
    a(d.exports, 'UpgradeModal_CopyKit', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('jw1ib');
    const _h = {
        title: (0, f.jsx)(f.Fragment, {
            children: 'Copy kits with Pro'
        }),
        description: (0, f.jsxs)(f.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                g.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), c.register('IUu1b4', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g() {
        const [, h] = f.useReducer(h => h + 1, 0);
        return h;
    }
}), c.register('nBr9H5', function(d, e) {
    a(d.exports, 'responsiveArray', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('60hla');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _i() {
        const [, j] = (0, g.useToken)(), k = (j => ({
            xs: `(max-width: ${ j.screenXSMax }px)`,
            sm: `(min-width: ${ j.screenSM }px)`,
            md: `(min-width: ${ j.screenMD }px)`,
            lg: `(min-width: ${ j.screenLG }px)`,
            xl: `(min-width: ${ j.screenXL }px)`,
            xxl: `(min-width: ${ j.screenXXL }px)`
        }))((j => {
            const l = j,
                m = [].concat(_h).reverse();
            return m.forEach((j, d) => {
                const n = j.toUpperCase(),
                    o = `screen${ n }Min`,
                    p = `screen${ n }`;
                if (!(l[o] <= l[p]))
                    throw new Error(`${ o }<=${ p } fails : !(${ l[o] }<=${ l[p] })`);
                if (d < m.length - 1) {
                    const q = `screen${ n }Max`;
                    if (!(l[p] <= l[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ l[p] }<=${ l[q] })`);
                    const r = `screen${ m[d + 1].toUpperCase() }Min`;
                    if (!(l[q] <= l[r]))
                        throw new Error(`${ q }<=${ r } fails : !(${ l[q] }<=${ l[r] })`);
                }
            }), j;
        })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: m => (n = m, l.forEach(l => l(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = this.matchHandlers[o];
                        null == p || p.mql.removeListener(null == p ? void 0 : p.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = o => {
                                let {
                                    matches: q
                                } = o;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [l]: q
                                }));
                            },
                            q = window.matchMedia(o);
                        q.addListener(p), this.matchHandlers[o] = {
                            mql: q,
                            listener: p
                        }, p(q);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
}), c.register('AKtTq25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('O0Kav');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : k);
                return (0, f.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, m));
            });
        return l.preload = function() {
            return j || (j = h().then(function(m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('44iM223', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('hxyXq25', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1XwWU13'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('1XwWU13', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('7ryzM2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('YVcl02'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ShareAltOutlined';
    var _k = g.forwardRef(j);
}), c.register('YVcl02', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('d4trj', function(d, e) {
    'function' == typeof Object.create ? d.exports = function(f, g) {
        g && (f.super_ = g, f.prototype = Object.create(g.prototype, {
            constructor: {
                value: f,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : d.exports = function(f, g) {
        if (g) {
            f.super_ = g;
            var h = function() {};
            h.prototype = g.prototype, f.prototype = new h(), f.prototype.constructor = f;
        }
    };
}), c.register('/TQKb3', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('whfeO2');
    var _h = a => {
        const i = (0, g.use100vh)();
        return (0, f.jsx)('div', {
            style: {
                height: i,
                width: '100%'
            },
            className: a.className,
            children: a.children
        });
    };
}), c.register('whfeO2', function(d, e) {
    a(d.exports, 'use100vh', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('O0Kav'),
        g = function() {
            return g = Object.assign || function(h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }, g.apply(this, arguments);
        },
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
        },
        i = !1,
        j = (0, f.forwardRef)(function(k, l) {
            var m = k.style,
                n = h(k, ['style']),
                o = _k();
            !i && (null == m ? void 0 : m.height) && (i = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var p = g(g({}, m), {
                height: o ? o + 'px' : '100vh'
            });
            return b(f).createElement('div', g({
                ref: l,
                style: p
            }, n));
        });
    j.displayName = 'Div100vh';

    function _k() {
        var l = (0, f.useState)(_l),
            m = l[0],
            n = l[1],
            o = function() {
                var p = (0, f.useState)(!1),
                    q = p[0],
                    r = p[1];
                return (0, f.useEffect)(function() {
                    _m() && r(!0);
                }, []), q;
            }();
        return (0, f.useEffect)(function() {
            if (o)
                return window.addEventListener('resize', l),
                    function() {
                        return window.removeEventListener('resize', l);
                    };

            function p() {
                var q = _l();
                n(q);
            }
        }, [o]), o ? m : null;
    }

    function _l() {
        return _m() ? window.innerHeight : null;
    }

    function _m() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('FHjL91', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('MNR6V1'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SaveOutlined';
    var _k = g.forwardRef(j);
}), c.register('MNR6V1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('jS3EY5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('K5dB24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('K5dB24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('GmO9j', function(d, e) {
    a(d.exports, 'useQuery', function() {
        return _i;
    });
    var f = c('a/QW2'),
        g = c('GQdYS'),
        h = c('cB604');

    function _i(j, k, l) {
        const m = (0, f.parseQueryArgs)(j, k, l);
        return (0, h.useBaseQuery)(m, g.QueryObserver);
    }
}), c.register('GQdYS', function(d, e) {
    a(d.exports, 'QueryObserver', function() {
        return _k;
    });
    var f = c('a/QW2'),
        g = c('cznLc'),
        h = c('fIN0N'),
        i = c('U6y42'),
        j = c('8mmPK');
    class _k extends i.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), _l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return _t(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return _t(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(l, m) {
            const n = this.options,
                o = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(l), (0, f.shallowEqualObjects)(n, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
            const p = this.hasListeners();
            p && _n(this.currentQuery, o, this.options, n) && this.executeFetch(), this.updateResult(m), !p || this.currentQuery === o && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
            const q = this.computeRefetchInterval();
            !p || this.currentQuery === o && this.options.enabled === n.enabled && q === this.currentRefetchInterval || this.updateRefetchInterval(q);
        }
        getOptimisticResult(l) {
            const m = this.client.getQueryCache().build(this.client, l);
            return this.createResult(m, l);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(l) {
            const m = {};
            return Object.keys(l).forEach(c => {
                Object.defineProperty(m, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(c), l[c])
                });
            }), m;
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({
            refetchPage: l,
            ...m
        } = {}) {
            return this.fetch({
                ...m,
                meta: {
                    refetchPage: l
                }
            });
        }
        fetchOptimistic(l) {
            const m = this.client.defaultQueryOptions(l),
                n = this.client.getQueryCache().build(this.client, m);
            return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, m));
        }
        fetch(l) {
            var m;
            return this.executeFetch({
                ...l,
                cancelRefetch: null == (m = l.cancelRefetch) || m
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(l) {
            this.updateQuery();
            let m = this.currentQuery.fetch(this.options, l);
            return null != l && l.throwOnError || (m = m.catch(f.noop)), m;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), f.isServer || this.currentResult.isStale || !(0, f.isValidTimeout)(this.options.staleTime))
                return;
            const l = (0, f.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, l);
        }
        computeRefetchInterval() {
            var l;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (l = this.options.refetchInterval) && l;
        }
        updateRefetchInterval(l) {
            this.clearRefetchInterval(), this.currentRefetchInterval = l, !f.isServer && !1 !== this.options.enabled && (0, f.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || h.focusManager.isFocused()) && this.executeFetch();
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
        createResult(l, m) {
            const n = this.currentQuery,
                o = this.options,
                p = this.currentResult,
                q = this.currentResultState,
                r = this.currentResultOptions,
                s = l !== n,
                _t = s ? l.state : this.currentQueryInitialState,
                u = s ? this.currentResult : this.previousQueryResult,
                {
                    state: v
                } = l;
            let w, {
                    dataUpdatedAt: x,
                    error: y,
                    errorUpdatedAt: z,
                    fetchStatus: A,
                    status: B
                } = v,
                C = !1,
                D = !1;
            if (m._optimisticResults) {
                const E = this.hasListeners(),
                    F = !E && _l(l, m),
                    G = E && _n(l, n, m, o);
                (F || G) && (A = (0, j.canFetch)(l.options.networkMode) ? 'fetching' : 'paused', x || (B = 'loading')), 'isRestoring' === m._optimisticResults && (A = 'idle');
            }
            if (m.keepPreviousData && !v.dataUpdatedAt && null != u && u.isSuccess && 'error' !== B)
                w = u.data, x = u.dataUpdatedAt, B = u.status, C = !0;
            else if (m.select && void 0 !== v.data)
                if (p && v.data === (null == q ? void 0 : q.data) && m.select === this.selectFn)
                    w = this.selectResult;
                else
                    try {
                        this.selectFn = m.select, w = m.select(v.data), w = (0, f.replaceData)(null == p ? void 0 : p.data, w, m), this.selectResult = w, this.selectError = null;
                    } catch (l) {
                        this.selectError = l;
                    }
            else
                w = v.data;
            if (void 0 !== m.placeholderData && void 0 === w && 'loading' === B) {
                let E;
                if (null != p && p.isPlaceholderData && m.placeholderData === (null == r ? void 0 : r.placeholderData))
                    E = p.data;
                else if (E = 'function' == typeof m.placeholderData ? m.placeholderData() : m.placeholderData, m.select && void 0 !== E)
                    try {
                        E = m.select(E), this.selectError = null;
                    } catch (E) {
                        this.selectError = E;
                    }
                void 0 !== E && (B = 'success', w = (0, f.replaceData)(null == p ? void 0 : p.data, E, m), D = !0);
            }
            this.selectError && (y = this.selectError, w = this.selectResult, z = Date.now(), B = 'error');
            const E = 'fetching' === A,
                F = 'loading' === B,
                G = 'error' === B;
            return {
                status: B,
                fetchStatus: A,
                isLoading: F,
                isSuccess: 'success' === B,
                isError: G,
                isInitialLoading: F && E,
                data: w,
                dataUpdatedAt: x,
                error: y,
                errorUpdatedAt: z,
                failureCount: v.fetchFailureCount,
                failureReason: v.fetchFailureReason,
                errorUpdateCount: v.errorUpdateCount,
                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                isFetchedAfterMount: v.dataUpdateCount > _t.dataUpdateCount || v.errorUpdateCount > _t.errorUpdateCount,
                isFetching: E,
                isRefetching: E && !F,
                isLoadingError: G && 0 === v.dataUpdatedAt,
                isPaused: 'paused' === A,
                isPlaceholderData: D,
                isPreviousData: C,
                isRefetchError: G && 0 !== v.dataUpdatedAt,
                isStale: _o(l, m),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(l) {
            const m = this.currentResult,
                n = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, f.shallowEqualObjects)(n, m))
                return;
            this.currentResult = n;
            const o = {
                cache: !0
            };
            !1 !== (null == l ? void 0 : l.listeners) && (() => {
                if (!m)
                    return !0;
                const {
                    notifyOnChangeProps: p
                } = this.options;
                if ('all' === p || !p && !this.trackedProps.size)
                    return !0;
                const q = new Set(null != p ? p : this.trackedProps);
                return this.options.useErrorBoundary && q.add('error'), Object.keys(this.currentResult).some(p => {
                    const r = p;
                    return this.currentResult[r] !== m[r] && q.has(r);
                });
            })() && (o.listeners = !0), this.notify({
                ...o,
                ...l
            });
        }
        updateQuery() {
            const l = this.client.getQueryCache().build(this.client, this.options);
            if (l === this.currentQuery)
                return;
            const m = this.currentQuery;
            this.currentQuery = l, this.currentQueryInitialState = l.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == m || m.removeObserver(this), l.addObserver(this));
        }
        onQueryUpdate(l) {
            const m = {};
            'success' === l.type ? m.onSuccess = !l.manual : 'error' !== l.type || (0, j.isCancelledError)(l.error) || (m.onError = !0), this.updateResult(m), this.hasListeners() && this.updateTimers();
        }
        notify(l) {
            g.notifyManager.batch(() => {
                var m, n, o, p;
                if (l.onSuccess)
                    null == (m = (n = this.options).onSuccess) || m.call(n, this.currentResult.data), null == (o = (p = this.options).onSettled) || o.call(p, this.currentResult.data, null);
                else if (l.onError) {
                    var q, r, s, t;
                    null == (q = (r = this.options).onError) || q.call(r, this.currentResult.error), null == (s = (t = this.options).onSettled) || s.call(t, void 0, this.currentResult.error);
                }
                l.listeners && this.listeners.forEach(l => {
                    l(this.currentResult);
                }), l.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated'
                });
            });
        }
        constructor(l, m) {
            super(), this.client = l, this.options = m, this.trackedProps = new Set(), this.selectError = null, this.bindMethods(), this.setOptions(m);
        }
    }

    function _l(m, n) {
        return function(o, p) {
            return !(!1 === p.enabled || o.state.dataUpdatedAt || 'error' === o.state.status && !1 === p.retryOnMount);
        }(m, n) || m.state.dataUpdatedAt > 0 && _m(m, n, n.refetchOnMount);
    }

    function _m(n, o, p) {
        if (!1 !== o.enabled) {
            const q = 'function' == typeof p ? p(n) : p;
            return 'always' === q || !1 !== q && _o(n, o);
        }
        return !1;
    }

    function _n(o, p, q, r) {
        return !1 !== q.enabled && (o !== p || !1 === r.enabled) && (!q.suspense || 'error' !== o.state.status) && _o(o, q);
    }

    function _o(p, q) {
        return p.isStaleByTime(q.staleTime);
    }
}), c.register('cB604', function(d, e) {
    a(d.exports, 'useBaseQuery', function() {
        return _n;
    });
    var f = c('O0Kav'),
        g = c('VFfH6'),
        h = c('cznLc'),
        i = c('J9oqG'),
        j = c('eDhiy'),
        k = c('nGiv3'),
        l = c('rHSv+'),
        m = c('QM8MH');

    function _n(o, p) {
        const q = (0, j.useQueryClient)({
                context: o.context
            }),
            r = (0, k.useIsRestoring)(),
            s = (0, i.useQueryErrorResetBoundary)(),
            t = q.defaultQueryOptions(o);
        t._optimisticResults = r ? 'isRestoring' : 'optimistic', t.onError && (t.onError = h.notifyManager.batchCalls(t.onError)), t.onSuccess && (t.onSuccess = h.notifyManager.batchCalls(t.onSuccess)), t.onSettled && (t.onSettled = h.notifyManager.batchCalls(t.onSettled)), (0, m.ensureStaleTime)(t), (0, l.ensurePreventErrorBoundaryRetry)(t, s), (0, l.useClearResetErrorBoundary)(s);
        const [u] = f.useState(() => new p(q, t)), v = u.getOptimisticResult(t);
        if ((0, g.useSyncExternalStore)(f.useCallback(o => r ? () => {} : u.subscribe(h.notifyManager.batchCalls(o)), [
                u,
                r
            ]), () => u.getCurrentResult(), () => u.getCurrentResult()), f.useEffect(() => {
                u.setOptions(t, {
                    listeners: !1
                });
            }, [
                t,
                u
            ]), (0, m.shouldSuspend)(t, v, r))
            throw (0, m.fetchOptimistic)(t, u, s);
        if ((0, l.getHasError)({
                result: v,
                errorResetBoundary: s,
                useErrorBoundary: t.useErrorBoundary,
                query: u.getCurrentQuery()
            }))
            throw v.error;
        return t.notifyOnChangeProps ? v : u.trackResult(v);
    }
}), c.register('VFfH6', function(d, e) {
    a(d.exports, 'useSyncExternalStore', function() {
        return _f;
    });
    const _f = c('lDLPw').useSyncExternalStore;
}), c.register('lDLPw', function(d, e) {
    d.exports = c('WGus5');
}), c.register('WGus5', function(d, e) {
    var f;
    a(d.exports, 'useSyncExternalStore', function() {
        return f;
    }, function(g) {
        return f = g;
    });
    var g = c('O0Kav');
    var h = 'function' == typeof Object.is ? Object.is : function(i, j) {
            return i === j && (0 !== i || 1 / i == 1 / j) || i != i && j != j;
        },
        i = g.useState,
        j = g.useEffect,
        k = g.useLayoutEffect,
        l = g.useDebugValue;

    function m(n) {
        var o = n.getSnapshot;
        n = n.value;
        try {
            var p = o();
            return !h(n, p);
        } catch (n) {
            return !0;
        }
    }
    var n = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(o, p) {
        return p();
    } : function(o, p) {
        var q = p(),
            r = i({
                inst: {
                    value: q,
                    getSnapshot: p
                }
            }),
            s = r[0].inst,
            t = r[1];
        return k(function() {
            s.value = q, s.getSnapshot = p, m(s) && t({
                inst: s
            });
        }, [
            o,
            q,
            p
        ]), j(function() {
            return m(s) && t({
                inst: s
            }), o(function() {
                m(s) && t({
                    inst: s
                });
            });
        }, [o]), l(q), q;
    };
    f = void 0 !== g.useSyncExternalStore ? g.useSyncExternalStore : n;
}), c.register('J9oqG', function(d, e) {
    a(d.exports, 'useQueryErrorResetBoundary', function() {
        return _i;
    });
    var f = c('O0Kav');

    function g() {
        let h = !1;
        return {
            clearReset: () => {
                h = !1;
            },
            reset: () => {
                h = !0;
            },
            isReset: () => h
        };
    }
    const h = f.createContext(g()),
        _i = () => f.useContext(h);
}), c.register('nGiv3', function(d, e) {
    a(d.exports, 'useIsRestoring', function() {
        return _h;
    });
    var f = c('O0Kav');
    const g = f.createContext(!1),
        _h = () => f.useContext(g);
    g.Provider;
}), c.register('rHSv+', function(d, e) {
    a(d.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return _h;
    }), a(d.exports, 'useClearResetErrorBoundary', function() {
        return _i;
    }), a(d.exports, 'getHasError', function() {
        return _j;
    });
    var f = c('O0Kav'),
        g = c('1a/kG');
    const _h = (a, d) => {
            (a.suspense || a.useErrorBoundary) && (d.isReset() || (a.retryOnMount = !1));
        },
        _i = a => {
            f.useEffect(() => {
                a.clearReset();
            }, [a]);
        },
        _j = ({
            result: k,
            errorResetBoundary: l,
            useErrorBoundary: m,
            query: n
        }) => k.isError && !l.isReset() && !k.isFetching && (0, g.shouldThrowError)(m, [
            k.error,
            n
        ]);
}), c.register('1a/kG', function(d, e) {
    function f(g, h) {
        return 'function' == typeof g ? g(...h) : !!g;
    }
    a(d.exports, 'shouldThrowError', function() {
        return f;
    });
}), c.register('QM8MH', function(d, e) {
    a(d.exports, 'ensureStaleTime', function() {
        return _f;
    }), a(d.exports, 'shouldSuspend', function() {
        return _g;
    }), a(d.exports, 'fetchOptimistic', function() {
        return _h;
    });
    const _f = a => {
            a.suspense && 'number' != typeof a.staleTime && (a.staleTime = 1000);
        },
        _g = (a, d, e) => (null == a ? void 0 : a.suspense) && ((a, d) => a.isLoading && a.isFetching && !d)(d, e),
        _h = (a, d, e) => d.fetchOptimistic(a).then(({
            data: i
        }) => {
            null == a.onSuccess || a.onSuccess(i), null == a.onSettled || a.onSettled(i, null);
        }).catch(i => {
            e.clearReset(), null == a.onError || a.onError(i), null == a.onSettled || a.onSettled(void 0, i);
        });
}), c.register('Jvo89', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('u8Dt8'),
        h = c('P11ai26'),
        i = c('5OKvv');
    var _j = a => (0, f.jsx)(i.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, f.jsx)(g.default, {
            value: a.value,
            style: {
                width: a.customWidth || h.default.optionWidth
            },
            size: 'large',
            onChange: d => a.onValueChanged(d),
            disabled: a.readOnly,
            children: a.options.map(d => (0, f.jsx)(g.default.Option, {
                value: d.value,
                children: d.name
            }, `${ a.title || 'no-title' }-${ d.value }`))
        })
    });
}), c.register('5OKvv', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('d57qI');
    var _h = a => (0, f.jsxs)(g.OptionContainer, {
        children: [
            (0, f.jsxs)(g.OptionInfoContainer, {
                children: [
                    a.emoji ? (0, f.jsx)(g.OptionEmoji, {
                        children: a.emoji
                    }) : null,
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(g.OptionTitle, {
                                children: a.title
                            }),
                            a.description ? (0, f.jsx)(g.OptionDescription, {
                                children: a.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, f.jsx)(g.OptionChangerContainer, {
                children: a.children
            })
        ]
    });
}), c.register('d57qI', function(d, e) {
    a(d.exports, 'OptionContainer', function() {
        return _o;
    }), a(d.exports, 'OptionInfoContainer', function() {
        return _p;
    }), a(d.exports, 'OptionEmoji', function() {
        return _q;
    }), a(d.exports, 'OptionTitle', function() {
        return _r;
    }), a(d.exports, 'OptionDescription', function() {
        return _s;
    }), a(d.exports, 'OptionChangerContainer', function() {
        return _t;
    });
    var f = c('Eh2Wh'),
        g = c('u4s09');
    let h, i, j, k, l, m, n = a => a;
    const _o = g.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(h || (h = n`
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
        _p = g.default.div.attrs({
            className: 'flex vc'
        })(i || (i = n``)),
        _q = g.default.div(j || (j = n`
  font-size: 23px;
  margin-right: 10px;
`)),
        _r = g.default.div(k || (k = n`
  font-size: 23px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        _s = g.default.div(l || (l = n`
  font-size: 15px;
  margin-top: -2px;
`)),
        _t = g.default.div(m || (m = n`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), c.register('MzH3f', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P11ai26'),
        i = c('pKeWm'),
        j = c('5OKvv'),
        k = c('9zaF+'),
        l = c('JcaZI');
    var _m = a => {
        const n = g.useCallback(n => {
            if ((0, k.isNil)(n) && a.allowEmpty)
                return n;
            let o = n ? a.step ? Math.round(n / a.step) * a.step : n : 0;
            return !(0, k.isNil)(a.min) && o < a.min ? o = a.min : !(0, k.isNil)(a.max) && o > a.max && (o = a.max), o;
        }, [
            a.max,
            a.min,
            a.step
        ]);
        g.useEffect(() => {
            (0, k.isNil)(a.value) || a.max && a.value > a.max && c(n(a.max));
        }, [
            a.value,
            a.max
        ]);
        const o = o => {
            a.onValueChanged(n(o));
        };
        return (0, f.jsx)(j.default, {
            emoji: a.emoji,
            title: a.title,
            description: a.description,
            children: (0, f.jsx)(l.default, {
                size: 'large',
                formatter: i.default,
                value: a.value,
                max: a.max,
                min: a.min,
                step: a.step,
                style: {
                    width: a.customWidth || h.default.optionWidth
                },
                onChange: o,
                disabled: a.readOnly
            })
        });
    };
}), c.register('pKeWm', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('quE27');
    var _g = a => '' === a ? '' : isNaN(Number(a)) ? String(a) : (0, f.numberWithCommas)(Number(a));
}), c.register('JcaZI', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('lhOnW'),
        h = c('O0Kav'),
        i = c('quE27');
    var _j = a => {
        const [k, l] = h.useState(a.value), [m, n] = h.useState(a.value), [o, p, q] = (0, i.useBoolean)(!1);
        h.useEffect(() => {
            n(a.value), l(a.value);
        }, [a.value]);
        return (0, f.jsx)(g.default, {
            ...a,
            value: o ? k : m,
            onChange: a => {
                l(a);
            },
            onFocus: p,
            onBlur: () => {
                k !== m && a.onChange(k), q(), l(a.value);
            }
        });
    };
}), c.register('SnVJ+', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('9zaF+'),
        g = c('RBtfx4'),
        h = c('Qjtm3');
    const i = (a, d) => {
        var j;
        return null === (j = JSON.parse(localStorage.getItem(h.LocalStorageNames.hookSavedOptions) || '{}')[d]) || void 0 === j ? void 0 : j[a];
    };
    var _j = a => {
        var k;
        const {
            hookJSON: l,
            experienceId: m,
            kitId: n
        } = a, o = {};
        return null == l || null === (k = l.hooks) || void 0 === k || k.forEach(a => {
            if (a.type === g.HookType.kit)
                o[a.key] = n || '';
            else if (a.type == g.HookType.selectBox) {
                const p = a.options;
                if (p.options.length) {
                    let q = p.options.find(a => a === p.defaultOption) || p.options[0];
                    if (m) {
                        const r = i(a.key, m);
                        if (r) {
                            const s = p.options.find(s => s === r);
                            s && (q = s);
                        }
                    }
                    q && (o[a.key] = q);
                }
            } else if (a.type === g.HookType.number) {
                const p = a.options;
                let q = p.defaultValue;
                if (m) {
                    const r = i(a.key, m);
                    if (!(0, f.isNil)(r) && 'number' == typeof r) {
                        let s = !1;
                        ((0, f.isNil)(p.min) || r > p.min) && ((0, f.isNil)(p.max) || r < p.max) && ((0, f.isNil)(p.step) || r % p.step == 0) && (s = !0), s && (q = r);
                    }
                }
                o[a.key] = q;
            }
        }), o;
    };
}), c.register('130cP', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('JkQCT'),
        h = c('6jmvl'),
        i = c('O0Kav'),
        j = c('spJw8'),
        k = c('CQMa/'),
        l = c('ejuPT'),
        m = c('SnVJ+');
    var _n = (0, h.observer)(a => {
        const [o] = i.useState(() => (0, g.observable)(a.defaultState || (0, m.default)({
            hookJSON: a.hooks
        }))), p = (a, p) => {
            o[a] = p;
        }, q = (0, g.toJS)(o), r = JSON.stringify(q);
        i.useEffect(() => {
            a.onConnectedResourcesChange && a.onConnectedResourcesChange((0, k.default)(a, q)), a.readOnly || a.onStateChange && a.onStateChange(q);
        }, [
            r,
            a.readOnly
        ]);
        const s = (0, l.default)(a, q);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                a.header ? a.header(s.length) : null,
                s.map((o, g) => (0, f.jsxs)(i.Fragment, {
                    children: [
                        (0, f.jsx)(j.default, {
                            hook: o,
                            state: q,
                            modifyState: p,
                            location: a.location,
                            readOnly: a.readOnly
                        }),
                        g !== s.length - 1 && (0, f.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ o.key }`)),
                a.footer ? a.footer(s.length) : null
            ]
        });
    });
}), c.register('spJw8', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('RBtfx4'),
        h = c('lO7Wq'),
        i = c('hbFAw'),
        j = c('m9fag');
    var _k = a => {
        const l = a.state[a.hook.key],
            m = l => {
                a.modifyState(a.hook.key, l);
            };
        return a.hook.type === g.HookType.selectBox ? (0, f.jsx)(j.default, {
            value: l,
            onChange: m,
            hook: a.hook,
            readOnly: a.readOnly
        }) : a.hook.type === g.HookType.kit ? (0, f.jsx)(h.default, {
            value: l,
            onChange: m,
            hook: a.hook,
            location: a.location,
            readOnly: a.readOnly
        }) : a.hook.type === g.HookType.number ? (0, f.jsx)(i.default, {
            value: l,
            onChange: m,
            hook: a.hook,
            readOnly: a.readOnly
        }) : null;
    };
}), c.register('lO7Wq', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('siXyq'),
        h = c('9kbT6'),
        i = c('skKj1');
    var _j = a => {
        let {
            title: k,
            description: l
        } = (0, i.default)(a.hook);
        if (a.location === h.HookFormLocation.editor) {
            const m = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            l ? l += ` - ${ m }` : l = m;
        }
        return (0, f.jsx)(g.default, {
            title: k,
            description: l,
            value: a.value,
            onValueChanged: a.onChange,
            placeholder: 'Kit ID',
            readOnly: a.readOnly
        });
    };
}), c.register('siXyq', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('aevdF'),
        h = c('P11ai26'),
        i = c('5OKvv');
    var _j = a => (0, f.jsx)(i.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, f.jsx)(g.default, {
            size: 'large',
            value: a.value,
            placeholder: a.placeholder,
            style: {
                width: a.customWidth || h.default.optionWidth
            },
            onChange: d => {
                a.onValueChanged(d.target.value);
            },
            disabled: a.readOnly
        })
    });
}), c.register('9kbT6', function(d, e) {
    let f;
    var g;
    let h;
    a(d.exports, 'HookFormLocation', function() {
        return f;
    }), a(d.exports, 'IHookConnectedResourceType', function() {
        return h;
    }), (g = f || (f = {})).editor = 'editor', g.experiencePicker = 'experiencePicker', (h || (h = {})).kit = 'kit';
}), c.register('skKj1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        let g, h;
        return g = a.key, a.displayName && (g = a.displayName), a.displayDescription && (h = a.displayDescription), {
            title: g,
            description: h
        };
    };
}), c.register('hbFAw', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('9zaF+');
    c('O0Kav');
    var h = c('MzH3f'),
        i = c('skKj1');
    var _j = a => {
        const {
            title: k,
            description: l
        } = (0, i.default)(a.hook), m = a.hook.options;
        return (0, f.jsx)(h.default, {
            title: k,
            description: l,
            value: a.value,
            onValueChanged: k => {
                !(0, g.isNil)(k) || (0, g.isNil)(m.defaultValue) ? a.onChange(k): a.onChange(m.defaultValue);
            },
            min: m.min,
            max: m.max,
            step: m.step,
            allowEmpty: !0,
            readOnly: a.readOnly
        });
    };
}), c.register('m9fag', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('Jvo89'),
        h = c('skKj1');
    var _i = a => {
        const {
            title: j,
            description: k
        } = (0, h.default)(a.hook), l = a.hook.options;
        return (0, f.jsx)(g.default, {
            title: j,
            description: k,
            value: a.value,
            onValueChanged: a.onChange,
            options: l.options.map(a => ({
                value: a,
                name: a
            })),
            readOnly: a.readOnly
        });
    };
}), c.register('CQMa/', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('9zaF+'),
        g = c('RBtfx4'),
        h = c('9kbT6'),
        i = c('ejuPT');
    var _j = (a, d) => {
        const k = [];
        return (0, i.default)({
            ...a,
            location: h.HookFormLocation.editor
        }, d).forEach(a => {
            a.type === g.HookType.kit && d[a.key] && k.push({
                type: h.IHookConnectedResourceType.kit,
                value: d[a.key]
            });
        }), (0, f.uniqBy)(k, 'value');
    };
}), c.register('ejuPT', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('YIkl/'),
        g = c('RBtfx4'),
        h = c('9kbT6');
    var _i = (a, d) => {
        var j, k;
        const l = [];
        return null == a || null === (j = a.hooks) || void 0 === j || null === (k = j.hooks) || void 0 === k || k.forEach(j => {
            var m;
            if (j.type === g.HookType.kit) {
                if (!!d[j.key] && a.location === h.HookFormLocation.experiencePicker)
                    return;
            }
            if (j.type === g.HookType.selectBox) {
                var n;
                const o = j.options;
                if (!(null == o || null === (n = o.options) || void 0 === n ? void 0 : n.length))
                    return;
            }
            (null == j || null === (m = j.hiddenScenarios) || void 0 === m ? void 0 : m.find(j => {
                var n, o;
                if (!!!(null === (n = j.conditions) || void 0 === n ? void 0 : n.length))
                    return !1;
                return !!(null === (o = j.conditions) || void 0 === o ? void 0 : o.every(j => {
                    if (j.type === f.HiddenConditionType.hookValue) {
                        const p = j.options,
                            q = p.value,
                            r = d[p.key];
                        if (p.compare === f.HookValueHiddenConditionCompare.equal) {
                            if (q == r)
                                return !0;
                        } else if (p.compare === f.HookValueHiddenConditionCompare.notEqual && q != r)
                            return !0;
                    } else if (j.type === f.HiddenConditionType.modeType) {
                        const p = a.modeType,
                            q = j.options;
                        return q.compare === f.ModeTypeHiddenConditionCompare.equal ? p === q.mode : p !== q.mode;
                    }
                    return !1;
                }));
            })) || l.push(j);
        }), l;
    };
}), c.register('YIkl/', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    a(d.exports, 'HiddenConditionType', function() {
        return f;
    }), a(d.exports, 'HookValueHiddenConditionCompare', function() {
        return h;
    }), a(d.exports, 'ModeTypeHiddenConditionCompare', function() {
        return j;
    }), (g = f || (f = {})).hookValue = 'hookValue', g.modeType = 'modeType', (i = h || (h = {})).equal = 'EQUAL', i.notEqual = 'NOT_EQUAL', (k = j || (j = {})).equal = 'EQUAL', k.notEqual = 'NOT_EQUAL';
});