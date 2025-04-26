function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('iUx7m', function(b, d) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return p;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('Kt/Fz'),
        g = c('4XDIp'),
        h = c('0wLl2'),
        i = c('0R8EW'),
        j = c('Vlfxs'),
        k = c('unMLU'),
        l = c('lV7dX'),
        m = c('oXgmH'),
        n = (i = c('0R8EW'), c('mjxQl')),
        o = c('k6F40');
    var p = () => ((0, o.useWillUnmount)(() => {
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
}), c.register('Kt/Fz', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('h99Nu'),
        e = c('gSUVO');
    let f;
    var g = d.default.div(f || (f = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 } !important;
`), e.Fonts.SFPro);
}), c.register('unMLU', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('+cQ3i'),
        e = c('mKmug'),
        f = c('kRA1b');
    var g = {
        kitDetails: new(0, d.default)(),
        editor: new(0, e.default)(),
        kitCollab: new(0, f.default)()
    };
}), c.register('+cQ3i', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('6gioo'),
        e = c('UnUp5'),
        f = c('PDLD/2');
    const g = f.Privacy.public;
    class h {
        constructor() {
            this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = g, this.reset = () => {
                this.id = '', this.title = '', this.image = '', this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = g;
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], h.prototype, 'id', void 0), (0, d.__decorate)([e.observable], h.prototype, 'title', void 0), (0, d.__decorate)([e.observable], h.prototype, 'image', void 0), (0, d.__decorate)([e.observable], h.prototype, 'language', void 0), (0, d.__decorate)([e.observable], h.prototype, 'subject', void 0), (0, d.__decorate)([e.observable], h.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], h.prototype, 'privacy', void 0), (0, d.__decorate)([e.action], h.prototype, 'reset', void 0);
    var i = j;
}), c.register('PDLD/2', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    a(b.exports, 'QuestionType', function() {
        return d;
    }), a(b.exports, 'Privacy', function() {
        return f;
    }), a(b.exports, 'GameStatus', function() {
        return h;
    }), a(b.exports, 'GameType', function() {
        return j;
    }), a(b.exports, 'GameGoal', function() {
        return k;
    }), a(b.exports, 'themes', function() {
        return q;
    }), a(b.exports, 'ExperienceSource', function() {
        return r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const q = [{
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
    let r;
    var s;
    (s = r || (r = {})).original = 'original', s.map = 'map';
}), c.register('mKmug', function(b, d) {
    a(b.exports, 'defaultError', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return h;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    c('o/FCM');
    const f = () => ({
        message: ''
    });
    class g {
        constructor() {
            this.questions = e.observable.array(), this.questionsChecked = e.observable.array(), this.currentlyEditingQuestionId = '', this.editSessionCounted = !1, this.error = f(), this.reset = () => {
                this.questions.replace([]), this.questionsChecked.replace([]), this.editSessionCounted = !1, this.error = f();
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'questions', void 0), (0, d.__decorate)([e.observable], g.prototype, 'questionsChecked', void 0), (0, d.__decorate)([e.observable], g.prototype, 'currentlyEditingQuestionId', void 0), (0, d.__decorate)([e.observable], g.prototype, 'editSessionCounted', void 0), (0, d.__decorate)([e.observable], g.prototype, 'error', void 0), (0, d.__decorate)([e.action], g.prototype, 'reset', void 0);
    var h = i;
}), c.register('o/FCM', function(b, c) {
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
    a(b.exports, 'Privacy', function() {
        return d;
    }), a(b.exports, 'QuestionType', function() {
        return h;
    }), a(b.exports, 'TextInputAnswerType', function() {
        return j;
    }), a(b.exports, 'HubItemType', function() {
        return n;
    }), a(b.exports, 'HubItemStatus', function() {
        return o;
    }), (e = d || (d = {})).public = 'public', e.private = 'private', (g = f || (f = {})).basic = 'basic', g.go = 'go', g.pro = 'pro', (i = h || (h = {})).multipleChoice = 'mc', i.textInput = 'text', (k = j || (j = {}))[k.exact = 1] = 'exact', k[k.contains = 2] = 'contains', (m = l || (l = {})).reachedCashGoal = 'reached-cash-goal', m.reachedMaxTime = 'reached-max-time', (n || (n = {})).mapAssignment = 'mapAssignment', (p = o || (o = {})).completed = 'completed', p.inProgress = 'inProgress', p.notStarted = 'notStarted';
}), c.register('kRA1b', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    class f {
        constructor() {
            this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions = e.observable.array(), this.reset = () => {
                this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions.replace([]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'panelOpen', void 0), (0, d.__decorate)([e.observable], f.prototype, 'enabled', void 0), (0, d.__decorate)([e.observable], f.prototype, 'waitingQuestions', void 0), (0, d.__decorate)([e.observable], f.prototype, 'sessionId', void 0), (0, d.__decorate)([e.observable], f.prototype, 'isPublic', void 0), (0, d.__decorate)([e.observable], f.prototype, 'hasFetchedFirstBatchOfQuestions', void 0), (0, d.__decorate)([e.observable], f.prototype, 'questions', void 0), (0, d.__decorate)([e.action], f.prototype, 'reset', void 0);
    var g = h;
}), c.register('lV7dX', function(b, d) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Wg207'),
        h = c('1B/eB'),
        i = c('uJXRI'),
        j = c('9vWG9'),
        k = c('hkBHC'),
        l = c('RbfSj'),
        m = c('3h5vM'),
        n = c('MkMIG'),
        o = c('QW8py'),
        p = c('Ax1Az'),
        q = c('mjxQl'),
        r = c('KzqIz'),
        s = c('8k9IL');
    let t, u, v = a => a;
    const w = f.default.div(t || (t = v`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`));
    var x = (0, s.observer)(() => {
        const y = (0, r.useLocation)(),
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
                y.pathname.endsWith('editor') && 0 === A.questions.length && (0, d.jsx)(y, {})
            ]
        }) : (0, d.jsx)(m.default, {});
    });
    const y = f.default.div(u || (u = v`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: 9;
`));
}), c.register('Wg207', function(b, d) {
    a(b.exports, 'HEADER_HEIGHT', function() {
        return o;
    }), a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('vNMHh'),
        i = c('raCHw'),
        j = c('q1/uh'),
        k = c('Evtqr');
    let l, m, n = a => a;
    const o = 90,
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
    var s = t;
}), c.register('vNMHh', function(b, d) {
    a(b.exports, 'default', function() {
        return D;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('gSUVO'),
        j = c('Vlfxs'),
        k = c('qLhB38'),
        l = c('Wg207'),
        m = c('lmfrI'),
        n = c('YfLmS'),
        o = c('aMv12'),
        p = c('9la87'),
        q = c('iMnBi'),
        r = c('PDLD/2'),
        s = c('xh/ml');
    let t, u, v, w, x = a => a;
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
            const D = this.props.kitDetails.privacy === r.Privacy.public;
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
                                                        name: D ? 'fas fa-unlock' : 'fas fa-lock',
                                                        style: {
                                                            marginRight: 3,
                                                            fontSize: 8
                                                        }
                                                    }),
                                                    (0, f.jsx)('div', {
                                                        children: D ? 'Public' : 'Private'
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', {
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
    var D = E;
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('aMv12', function(b, G) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('IsmrL'),
        i = c('c6x8w'),
        j = c('cR5QE'),
        k = c('HULBb'),
        l = c('Vlfxs'),
        m = c('an8nW');
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', {
                newTitle: ''
            }), (0, d.default)(this, 'canRename', () => !!this.state.newTitle.trim()), (0, d.default)(this, 'onRename', () => {
                this.canRename() && ((0, m.default)(this.state.newTitle), this.props.closeModal());
            }), (0, d.default)(this, 'handleChange', a => {
                this.setState({
                    newTitle: a.target.value
                });
            });
        }
    };
    n = (0, e.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], n);
    var o = p;
}), c.register('HULBb', function(b, G) {
    a(b.exports, 'MAX_KIT_NAME_LENGTH', function() {
        return w;
    }), a(b.exports, 'default', function() {
        return A;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('w3KXc'),
        i = c('IsmrL'),
        j = c('ExtIT'),
        k = c('c6x8w'),
        l = c('Ly1h3'),
        m = c('xcGI7'),
        n = c('vKGUd1'),
        o = c('Vlfxs'),
        p = c('VJ4d21'),
        q = c('/nFOP0'),
        r = c('SprP3'),
        s = c('KzqIz'),
        t = c('q721a'),
        u = c('gSUVO'),
        v = c('PjB0f');
    const w = 30,
        x = l.default.Option,
        y = a => (0, f.jsx)(m.default, {
            style: {
                fontWeight: 'bold',
                fontSize: 25
            },
            children: a
        });
    let z = class extends g.Component {
        componentDidMount() {
            const A = localStorage.getItem(r.LocalStorageNames.editorDefaultLanguage),
                B = localStorage.getItem(r.LocalStorageNames.editorDefaultSubject) || (0, v.getUser)().areaOfExpertise,
                C = localStorage.getItem(r.LocalStorageNames.editorDefaultGradeLevel) || (0, v.getUser)().gradeLevel;
            A && (this.props.kitDetails.language = A), B && (this.props.kitDetails.subject = B), C && (this.props.kitDetails.gradeLevel = C);
        }
        render() {
            const {
                kitDetails: {
                    title: D,
                    language: E,
                    subject: F
                }
            } = this.props, G = !!(D && E && F);
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
                        maxLength: w
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
                        value: E ? (0, p.getLanguageName)(E) : void 0,
                        placeholder: 'No language selected',
                        showSearch: !0,
                        onChange: this.onLanguageSelected,
                        optionFilterProp: 'children',
                        filterOption: (D, E) => E.props.children.toLowerCase().indexOf(D.toLowerCase()) >= 0,
                        children: (0, p.getListOfLanguages)().map(D => (0, f.jsx)(x, {
                            value: D,
                            children: D
                        }, D))
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
                        value: F || void 0,
                        onChange: this.onSubjectSelected,
                        children: q.optionsForAreaOfExpertise.map(D => (0, f.jsx)(x, {
                            value: D,
                            children: D
                        }, D))
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
                                disabled: !G,
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
            super(...a), (0, d.default)(this, 'onKitTitleNameChange', a => this.props.kitDetails.title = a.target.value), (0, d.default)(this, 'onLanguageSelected', a => {
                const A = (0, p.getLanguageKey)(a);
                localStorage.setItem(r.LocalStorageNames.editorDefaultLanguage, A), this.props.kitDetails.language = A;
            }), (0, d.default)(this, 'onSubjectSelected', a => {
                localStorage.setItem(r.LocalStorageNames.editorDefaultSubject, a), this.props.kitDetails.subject = a;
            });
        }
    };
    z = (0, e.__decorate)([
        (0, o.inject)('kitDetails'),
        o.observer
    ], z);
    var A = B;
}), c.register('w3KXc', function(b, c) {
    a(b.exports, 'CREATE_A_KIT_HEADER', function() {
        return d;
    }), a(b.exports, 'CREATE_A_KIT_SUBHEADER', function() {
        return e;
    });
    const d = 'New Kit',
        e = 'Let\'s get started!';
}), c.register('vKGUd1', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('nx8MB1'),
        f = c('IsmrL'),
        g = c('YfLmS');
    var h = a => (0, d.jsx)(g.default, {
        title: 'Learn more on why we collect this data',
        children: (0, d.jsx)(f.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, d.jsx)(e.default, {}),
            href: a.link || '',
            target: '_blank'
        })
    });
}), c.register('nx8MB1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('84zdK1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LockOutlined';
    var i = e.forwardRef(h);
}), c.register('84zdK1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('VJ4d21', function(b, c) {
    a(b.exports, 'getListOfLanguages', function() {
        return e;
    }), a(b.exports, 'getLanguageKey', function() {
        return f;
    }), a(b.exports, 'getLanguageName', function() {
        return g;
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
        e = () => Object.keys(d).map(a => d[a]),
        f = a => Object.keys(d).filter(b => d[b] === a)[0],
        g = a => d[a];
}), c.register('/nFOP0', function(b, t) {
    a(b.exports, 'optionsForAreaOfExpertise', function() {
        return n;
    }), a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('eMhMk1'),
        g = c('ExtIT'),
        h = c('Ly1h3'),
        i = c('+qN5a2'),
        j = c('/rcVD4'),
        k = c('MHioT3'),
        l = c('PawcO1'),
        m = c('q721a');
    const n = [
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
    var p = () => {
        const {
            login: q
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
                    onChange: q => s(q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: n.map(q => ({
                        value: q,
                        label: q
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
                    onChange: q => u(q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: o.map(q => ({
                        value: q,
                        label: q
                    }))
                }),
                (0, d.jsx)(i.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: v,
                    onClick: () => {
                        v || (q.areaOfExpertise = r, q.gradeLevel = t, q.informationNeeded.replace(q.informationNeeded.filter(q => q !== k.informationTypes.areaOfExpertise && q !== k.informationTypes.gradeLevel)));
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
}), c.register('eMhMk1', function(b, w) {
    a(b.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return o;
    }), a(b.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return p;
    }), a(b.exports, 'Title', function() {
        return q;
    }), a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('/rcVD4'),
        g = c('gSUVO'),
        h = c('lmfrI'),
        i = c('ExtIT'),
        j = c('c6x8w'),
        k = c('+qN5a2'),
        l = c('MHioT3'),
        m = c('PawcO1'),
        n = c('KBr/41');
    const o = 20,
        p = 25,
        q = a => (0, d.jsx)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                fontWeight: g.FontWeights.Bold,
                color: h.default.Black,
                fontSize: 18
            },
            children: a.children
        }),
        r = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var s = () => {
        const {
            login: t
        } = e.useContext(f.default), [u, v] = e.useState(t.firstName), [w, x] = e.useState(t.lastName), [y, z] = e.useState(t.password), A = () => {
            let B = !0;
            return t.informationNeeded.includes(l.informationTypes.firstName) && (u || (B = !1)), t.informationNeeded.includes(l.informationTypes.lastName) && (w || (B = !1)), t.informationNeeded.includes(l.informationTypes.accountPassword) && (!y || y.length < 6) && (B = !1), B;
        }, B = () => {
            A() && (u && (t.firstName = u), w && (t.lastName = w), y && (t.password = y), t.informationNeeded.replace(t.informationNeeded.filter(t => t !== l.informationTypes.firstName && t !== l.informationTypes.lastName && t !== l.informationTypes.accountPassword)));
        }, C = t.accountType === n.default.student;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(q, {
                    children: 'First Name'
                }),
                (0, d.jsx)(j.default, {
                    maxLength: o,
                    style: r,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: t => v(t.target.value),
                    onPressEnter: B,
                    autoFocus: !0
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsxs)(q, {
                    children: [
                        'Last ',
                        C ? 'Initial' : 'Name'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    maxLength: C ? 1 : p,
                    style: r,
                    size: 'large',
                    placeholder: `Last ${ C ? 'Initial' : 'Name' } here...`,
                    onChange: t => x(t.target.value),
                    onPressEnter: B
                }),
                t.informationNeeded.includes(l.informationTypes.accountPassword) && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(i.default, {}),
                        (0, d.jsx)(q, {
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
                            onChange: t => z(t.target.value),
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
}), c.register('/rcVD4', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('J7Y504');
    var f = d.createContext(e.default);
}), c.register('J7Y504', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('MHioT3'),
        e = c('Ek+Wy4');
    var f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), c.register('MHioT3', function(b, d) {
    a(b.exports, 'informationTypes', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return y;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
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
        } = w;
    class x {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([f.email]), this.reset = () => {
                Object.keys(w).forEach(a => this[a] = w[a]), this.informationNeeded.replace([f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], x.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], x.prototype, 'email', void 0), (0, d.__decorate)([e.observable], x.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], x.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], x.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'password', void 0), (0, d.__decorate)([e.observable], x.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'country', void 0), (0, d.__decorate)([e.observable], x.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], x.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], x.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], x.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], x.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], x.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], x.prototype, 'reset', void 0);
    var y = z;
}), c.register('Ek+Wy4', function(b, d) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
            currentStage: c('bDt8q4').default.email,
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
        } = q;
    class r {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(q).forEach(a => this[a] = q[a]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], r.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], r.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], r.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], r.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], r.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], r.prototype, 'reset', void 0);
    var s = t;
}), c.register('bDt8q4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var f = g;
}), c.register('+qN5a2', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Vlfxs'),
        f = c('IsmrL');
    var g = (0, e.observer)(a => (0, d.jsx)(f.default, {
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
}), c.register('PawcO1', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('vKGUd1');
    var f = a => (0, d.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, d.jsx)('div', {}),
            (0, d.jsx)(e.default, {
                link: a.link
            })
        ]
    });
}), c.register('KBr/41', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var f = g;
}), c.register('SprP3', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    a(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('an8nW', function(b, n) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('unMLU'),
        e = c('PjB0f');
    var f = a => {
        (0, e.request)({
            url: '/api/v1/editor/rename',
            method: 'post',
            data: {
                kitId: d.default.kitDetails.id,
                title: a
            },
            success: a => {
                a && a.newName && (d.default.kitDetails.title = a.newName);
            },
            error: () => !1
        });
    };
}), c.register('9la87', function(b, n) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('IsmrL'),
        i = c('cR5QE'),
        j = c('Vlfxs'),
        k = c('xgdF8'),
        l = c('S3NVb');
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'onImagePicked', a => {
                (0, l.default)(a), this.props.closeModal();
            });
        }
    };
    m = (0, e.__decorate)([
        (0, j.inject)('kitDetails'),
        j.observer
    ], m);
    var n = o;
}), c.register('S3NVb', function(b, n) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('unMLU'),
        e = c('PjB0f');
    var f = a => {
        (0, e.request)({
            url: '/api/v1/editor/changePhoto',
            method: 'post',
            data: {
                kitId: d.default.kitDetails.id,
                photo: a
            },
            success: () => {
                d.default.kitDetails.image = a;
            },
            error: () => !1
        });
    };
}), c.register('iMnBi', function(b, n) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('xh/ml', function(b, n) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('IsmrL'),
        i = c('f9f+a'),
        j = c('cR5QE'),
        k = c('eAjRL0'),
        l = c('Vlfxs'),
        m = c('lmfrI'),
        n = c('gSUVO'),
        o = c('PDLD/2'),
        p = c('eMdAN'),
        q = c('nx8MB1'),
        r = c('+FMlc');
    const s = {
            color: m.default.Black,
            fontFamily: n.Fonts.SFPro,
            marginBottom: 6
        },
        t = a => (0, f.jsx)(i.default, {
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
                        children: a.icon
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: n.FontWeights.UltraBold
                                },
                                children: a.name
                            }),
                            (0, f.jsx)('div', {
                                children: a.description
                            })
                        ]
                    })
                ]
            })
        });
    let u = class extends g.Component {
        render() {
            const v = this.props.kitDetails.privacy;
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
                            value: v,
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', {
                newTitle: ''
            }), (0, d.default)(this, 'onChange', a => {
                const v = a.target.value;
                (0, p.default)(v);
            });
        }
    };
    u = (0, e.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], u);
    var v = w;
}), c.register('eAjRL0', function(b, n) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('bz3Aj0'),
        e = c('yPg/P0'),
        f = c('eeBbk');
    const g = e.default;
    g.Button = f.default, g.Group = d.default, g.__ANT_RADIO = !0;
    var h = i;
}), c.register('bz3Aj0', function(n, o) {
    a(n.exports, 'default', function() {
        return q;
    });
    var d = c('VAIs1'),
        e = c('xgR9K'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('kLJIY'),
        i = c('Jr7s0'),
        j = c('azsyo0'),
        k = c('yPg/P0'),
        l = c('CrgBc0');
    const m = f.forwardRef((a, c) => {
        const {
            getPrefixCls: n,
            direction: o
        } = f.useContext(g.ConfigContext), p = f.useContext(h.default), [q, r] = (0, e.default)(a.defaultValue, {
            value: a.value
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
        } = G, H = n('radio', s), I = `${ H }-group`, [J, K] = (0, l.default)(H);
        let L = M;
        v && v.length > 0 && (L = v.map(G => 'string' == typeof G || 'number' == typeof G ? f.createElement(k.default, {
            key: G.toString(),
            prefixCls: H,
            disabled: x,
            value: G,
            checked: q === G
        }, G) : f.createElement(k.default, {
            key: `radio-group-value-options-${ G.value }`,
            prefixCls: H,
            disabled: G.disabled || x,
            value: G.value,
            checked: q === G.value,
            style: G.style
        }, G.label)));
        const N = z || p,
            O = b(d)(I, `${ I }-${ w }`, {
                [`${ I }-${ N }`]: N,
                [`${ I }-rtl`]: 'rtl' === o
            }, t, u, K);
        return J(f.createElement('div', Object.assign({}, (0, i.default)(G), {
            className: O,
            style: A,
            onMouseEnter: C,
            onMouseLeave: D,
            onFocus: E,
            onBlur: F,
            id: B,
            ref: c
        }), f.createElement(j.RadioGroupContextProvider, {
            value: {
                onChange: b => {
                    const P = Q,
                        R = b.target.value;
                    'value' in G || r(R);
                    const {
                        onChange: S
                    } = T;
                    S && R !== P && S(b);
                },
                value: q,
                disabled: G.disabled,
                name: G.name,
                optionType: G.optionType
            }
        }, L)));
    });
    var n = f.memo(m);
}), c.register('azsyo0', function(b, o) {
    a(b.exports, 'RadioGroupContextProvider', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return g;
    }), a(b.exports, 'RadioOptionTypeContext', function() {
        return i;
    }), a(b.exports, 'RadioOptionTypeContextProvider', function() {
        return j;
    });
    var d = c('uPP4W');
    const e = d.createContext(null),
        f = e.Provider;
    var g = h;
    const i = d.createContext(null),
        j = i.Provider;
}), c.register('yPg/P0', function(o, p) {
    a(o.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('VAIs1'),
        e = c('CrMLT9'),
        f = c('XNhMJ'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('Cm5dS'),
        j = c('LhviC'),
        k = c('azsyo0'),
        l = c('CrgBc0'),
        m = function(a, b) {
            var n = {};
            for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && b.indexOf(o) < 0 && (n[o] = a[o]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(a); p < o.length; p++)
                    b.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[p]) && (n[o[p]] = a[o[p]]);
            }
            return n;
        };
    const n = (a, c) => {
        var o, p;
        const q = g.useContext(k.default),
            r = g.useContext(k.RadioOptionTypeContext),
            {
                getPrefixCls: s,
                direction: t
            } = g.useContext(h.ConfigContext),
            u = g.useRef(),
            v = (0, f.composeRef)(c, u),
            {
                isFormItemInput: w
            } = g.useContext(j.FormItemInputContext),
            x = b => {
                var y, z;
                null === (y = a.onChange) || void 0 === y || y.call(a, b), null === (z = null == q ? void 0 : q.onChange) || void 0 === z || z.call(q, b);
            },
            {
                prefixCls: y,
                className: z,
                rootClassName: A,
                children: B,
                style: C
            } = D,
            E = m(D, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]),
            F = s('radio', y),
            G = 'button' === ((null == q ? void 0 : q.optionType) || r) ? `${ F }-button` : F,
            [H, I] = (0, l.default)(F),
            J = Object.assign({}, E),
            K = g.useContext(i.default);
        q && (J.name = q.name, J.onChange = x, J.checked = D.value === q.value, J.disabled = null !== (o = J.disabled) && void 0 !== o ? o : q.disabled), J.disabled = null !== (p = J.disabled) && void 0 !== p ? p : K;
        const L = b(d)(`${ G }-wrapper`, {
            [`${ G }-wrapper-checked`]: J.checked,
            [`${ G }-wrapper-disabled`]: J.disabled,
            [`${ G }-wrapper-rtl`]: 'rtl' === t,
            [`${ G }-wrapper-in-form-item`]: w
        }, z, A, I);
        return H(g.createElement('label', {
            className: L,
            style: C,
            onMouseEnter: D.onMouseEnter,
            onMouseLeave: D.onMouseLeave
        }, g.createElement(e.default, Object.assign({}, J, {
            type: 'radio',
            prefixCls: G,
            ref: v
        })), void 0 !== B ? g.createElement('span', null, B) : null));
    };
    var o = g.forwardRef(n);
}), c.register('CrMLT9', function(p, t) {
    a(p.exports, 'default', function() {
        return A;
    });
    var d = c('b5p1k13'),
        e = c('WfHYJ18'),
        f = c('cabca9'),
        g = c('aCkIb5'),
        h = c('PKxjP16'),
        i = c('zTitA16'),
        j = c('MvitG9'),
        k = c('oG3bd5'),
        l = c('uPP4W'),
        m = c('VAIs1'),
        n = function(a) {
            (0, j.default)(p, a);
            var o = (0, k.default)(p);

            function p(a) {
                var q;
                (0, h.default)(this, p), (q = o.call(this, a)).handleChange = function(a) {
                    var r = q.props,
                        s = r.disabled,
                        t = r.onChange;
                    s || ('checked' in q.props || q.setState({
                        checked: a.target.checked
                    }), t && t({
                        target: (0, g.default)((0, g.default)({}, q.props), {}, {
                            checked: a.target.checked
                        }),
                        stopPropagation: function() {
                            a.stopPropagation();
                        },
                        preventDefault: function() {
                            a.preventDefault();
                        },
                        nativeEvent: a.nativeEvent
                    }));
                }, q.saveInput = function(a) {
                    q.input = a;
                };
                var r = 'checked' in a ? a.checked : a.defaultChecked;
                return q.state = {
                    checked: r
                }, q;
            }
            return (0, i.default)(p, [{
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
                            A = r.tabIndex,
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
                            L = Object.keys(K).reduce(function(q, b) {
                                return 'aria-' !== b.substr(0, 5) && 'data-' !== b.substr(0, 5) && 'role' !== b || (q[b] = K[b]), q;
                            }, {}),
                            M = this.state.checked,
                            N = b(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return b(l).createElement('span', {
                            className: N,
                            style: u
                        }, b(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: A,
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
                        }, L)), b(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return 'checked' in a ? (0, g.default)((0, g.default)({}, b), {}, {
                        checked: a.checked
                    }) : null;
                }
            }]), p;
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
    var o = p;
}), c.register('b5p1k13', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < v.length; e++) {
                var f = v[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, v);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WfHYJ18', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cabca9', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd17');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd17', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('aCkIb5', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ18');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < v.length; g++) {
            var h = null != v[g] ? v[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('PKxjP16', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA16', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('MvitG9', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl15');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl15', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('oG3bd5', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g15'),
        e = c('5UNjR15'),
        f = c('EDgo89');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, v, k);
            } else
                i = j.apply(this, v);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g15', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR15', function(b, c) {
    function d() {
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
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('EDgo89', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX15'),
        e = c('//YgM17');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX15', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM17', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('CrgBc0', function(b, m) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
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
        i = a => {
            const {
                componentCls: j,
                antCls: k
            } = l, m = `${ j }-group`;
            return {
                [m]: Object.assign(Object.assign({}, (0, g.resetComponent)(l)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ m }-rtl`]: {
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
        j = a => {
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
                colorBorder: t,
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
            } = E, F = `${ k }-inner`;
            return {
                [`${ k }-wrapper`]: Object.assign(Object.assign({}, (0, g.resetComponent)(E)), {
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
                        color: E.colorTextDisabled
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
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(E)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ k }-wrapper:hover &,\n        &:hover ${ F }`]: {
                        borderColor: m
                    },
                    [`${ k }-input:focus-visible + ${ F }`]: Object.assign({}, (0, g.genFocusOutline)(E)),
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
                        borderColor: t,
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
                        [F]: {
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
                        [F]: {
                            backgroundColor: w,
                            borderColor: t,
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
                            [F]: {
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
        k = a => {
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
            } = M;
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
                    '&:has(:focus-visible)': Object.assign({}, (0, g.genFocusOutline)(M)),
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
    var l = (0, e.default)('Radio', a => {
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
        } = B, C = `0 0 0 ${ y }px ${ s }`, D = E, F = G, H = F - 8, I = A ? H : F - 2 * (4 + n), J = K, L = M, N = O, P = Q, R = m - n, S = T, U = V, W = (0, f.merge)(B, {
            radioFocusShadow: E,
            radioButtonFocusShadow: D,
            radioSize: F,
            radioDotSize: I,
            radioDotDisabledSize: H,
            radioCheckedColor: J,
            radioDotDisabledColor: T,
            radioSolidCheckedColor: z,
            radioButtonBg: q,
            radioButtonCheckedBg: q,
            radioButtonColor: L,
            radioButtonHoverColor: N,
            radioButtonActiveColor: P,
            radioButtonPaddingHorizontal: R,
            radioDisabledButtonCheckedBg: o,
            radioDisabledButtonCheckedColor: S,
            radioWrapperMarginRight: U
        });
        return [
            i(W),
            j(W),
            k(W)
        ];
    });
}), c.register('eeBbk', function(b, j) {
    a(b.exports, 'default', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var d = c('uPP4W'),
        e = c('qEw51'),
        f = c('azsyo0'),
        g = c('yPg/P0'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    const i = (a, b) => {
        const {
            getPrefixCls: j
        } = d.useContext(e.ConfigContext), {
            prefixCls: k
        } = l, m = h(l, ['prefixCls']), n = j('radio', k);
        return d.createElement(f.RadioOptionTypeContextProvider, {
            value: 'button'
        }, d.createElement(g.default, Object.assign({
            prefixCls: n
        }, m, {
            type: 'radio',
            ref: b
        })));
    };
    var j = d.forwardRef(i);
}), c.register('eMdAN', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('unMLU');
    var f = a => {
        (0, d.request)({
            url: '/api/games/privacy',
            method: 'post',
            data: {
                id: e.default.kitDetails.id,
                privacy: a
            },
            success: () => {
                e.default.kitDetails.privacy = a;
            },
            error: () => !1
        });
    };
}), c.register('+FMlc', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('T34zd'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UnlockOutlined';
    var i = e.forwardRef(h);
}), c.register('T34zd', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('raCHw', function(b, d) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('bGe8V'),
        i = c('Vlfxs'),
        j = c('hczBu'),
        k = c('mjxQl'),
        l = c('PjB0f'),
        m = c('rl89A'),
        n = c('NGU92'),
        o = c('lnkpW'),
        p = c('LYLbA'),
        q = c('A76zp'),
        r = c('KzqIz'),
        s = c('U31rS3');
    let t;
    var u = (0, i.observer)(() => {
        const v = (0, r.useLocation)(),
            {
                editor: w,
                kitCollab: x
            } = e.useContext(k.default);
        return (0, d.jsx)(v, {
            overlayVisible: 0 === w.questions.length && v.pathname.endsWith('editor'),
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
    const v = f.default.div(t || (t = (a => a)`
  background: ${ 0 };
  display: flex;
  align-items: center;
  z-index: ${ 0 };
  position: ${ 0 };
  width: 100%;
`), g.default.White, a => a.overlayVisible ? 101 : 1, a => a.overlayVisible ? 'relative' : 'static');
}), c.register('bGe8V', function(b, d) {
    a(b.exports, 'editorBase', function() {
        return e;
    }), a(b.exports, 'addNewQuestion', function() {
        return f;
    }), a(b.exports, 'flashcardImport', function() {
        return g;
    }), a(b.exports, 'spreadsheet', function() {
        return h;
    }), a(b.exports, 'createWithFlashcards', function() {
        return i;
    }), a(b.exports, 'flashcardHomebase', function() {
        return j;
    }), a(b.exports, 'questionBank', function() {
        return k;
    }), a(b.exports, 'kitCollab', function() {
        return l;
    });
    var d = c('q721a');
    const e = a => (a => d.KIT_CREATOR + '/' + a)(a) + '/editor',
        f = a => e(a) + '/question',
        g = a => e(a) + '/flashcard-import',
        h = a => e(a) + '/spreadsheet',
        i = a => e(a) + '/flashcard-create',
        j = a => e(a) + '/flashcard-home',
        k = a => e(a) + '/question-bank',
        l = a => e(a) + '/kit-collab';
}), c.register('hczBu', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('k0s2g17'),
        e = c('unMLU');
    var f = a => {
        const g = e.default.kitDetails.id || 'kitId';
        return (0, d.NavigateTo)(a(g));
    };
}), c.register('k0s2g17', function(b, d) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('mjxQl', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('unMLU');
    var f = d.createContext(e.default);
}), c.register('rl89A', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('qbtmF'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ApiOutlined';
    var i = e.forwardRef(h);
}), c.register('qbtmF', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('NGU92', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('j32qQ'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'FunnelPlotOutlined';
    var i = e.forwardRef(h);
}), c.register('j32qQ', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('LYLbA', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('DTUm6'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'RocketOutlined';
    var i = e.forwardRef(h);
}), c.register('DTUm6', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('A76zp', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('yIE0T'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'TableOutlined';
    var i = e.forwardRef(h);
}), c.register('yIE0T', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('U31rS3', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('gSUVO');
    let i, j, k, l = a => a;
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
`), h.Fonts.SFPro, 14, a => a.selected && !a.blockBackground ? '#E5F7FE' : g.default.White, a => a.selected ? m : 'rgba(0,0,0,.65)', a => a.selected && !a.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: r,
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
                                children: r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var r = s;
}), c.register('q1/uh', function(b, d) {
    a(b.exports, 'QUESTION_LIMIT', function() {
        return i;
    }), a(b.exports, 'default', function() {
        return k;
    });
    var d = c('6gioo'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('bPH7V'),
        h = c('Vlfxs');
    const i = 400;
    let j = class extends f.Component {
        render() {
            return this.props.editor.questions.length < i ? null : (0, e.jsx)(g.default, {
                message: 'Question Limit Reached',
                description: `Kits cannot contain more than ${ i } questions.`,
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
    var k = l;
}), c.register('Evtqr', function(b, d) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('6gioo'),
        e = c('8kSQZ'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('lmfrI'),
        j = c('iMnBi');
    let k, l = class extends g.Component {
        render() {
            return this.props.editor.questions.length ? (0, e.jsxs)(o, {
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
    var m = n;
    const o = h.default.div.attrs({
        className: 'flex hc vc'
    })(k || (k = (a => a)`
  font-size: 14px;
  border-top: 1px solid ${ 0 };
  padding: 15px;
  line-height: 1;
`), i.default.BorderGray);
}), c.register('1B/eB', function(b, d) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('B3pX3'),
        h = c('nYlda');
    let i;
    const j = e.default.div(i || (i = (a => a)`
  flex: 1;
  width: 100%;
  height: 100%;
  color: ${ 0 };
  background: ${ 0 };
  display: flex;
  flex-direction: column;
`), f.default.Black, f.default.Snow);
    var k = () => (0, d.jsxs)(j, {
        children: [
            (0, d.jsx)(g.default, {}),
            (0, d.jsx)(h.default, {})
        ]
    });
}), c.register('B3pX3', function(b, d) {
    a(b.exports, 'RIGHT_SIDE_HEADER_PADDING', function() {
        return o;
    }), a(b.exports, 'default', function() {
        return r;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('lmfrI'),
        j = c('Wg207'),
        k = c('Vlfxs'),
        l = c('5XcsR'),
        m = c('2lvWL');
    let n;
    const o = 20;
    let p = class extends g.Component {
        render() {
            return (0, f.jsx)(q, {
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, d.default)(this, 'getContent', () => this.props.editor.questionsChecked.length ? (0, f.jsx)(l.default, {}) : (0, f.jsx)(m.default, {}));
        }
    };
    p = (0, e.__decorate)([
        (0, k.inject)('editor'),
        k.observer
    ], p);
    const q = h.default.div(n || (n = (a => a)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${ 0 };
`), i.default.White, j.HEADER_HEIGHT, i.default.BorderGray);
    var r = s;
}), c.register('5XcsR', function(b, d) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('Vlfxs'),
        i = c('h99Nu'),
        j = c('gSUVO'),
        k = c('PjB0f'),
        l = c('4jOgw8'),
        m = c('IsmrL'),
        n = c('3N8pv'),
        o = c('+YiZx'),
        p = c('B3pX3');
    let q, r, s, t = a => a,
        u = class extends g.Component {
            render() {
                const v = this.props.editor.questionsChecked.length;
                return (0, f.jsxs)(x, {
                    children: [
                        (0, f.jsx)(y, {
                            onClick: this.onSelectQuestionCount,
                            children: `${ v } ${ (0, k.plural)('question', v) } selected`
                        }),
                        (0, f.jsxs)(z, {
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
            constructor(...a) {
                super(...a), (0, d.default)(this, 'onSelectQuestionCount', () => {
                    this.props.editor.questionsChecked.length === this.props.editor.questions.length ? this.props.editor.questionsChecked.replace([]) : this.props.editor.questionsChecked.replace(this.props.editor.questions.map(a => a._id));
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
    var v = w;
    const x = i.default.div(q || (q = t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${ 0 }px;
`), () => p.RIGHT_SIDE_HEADER_PADDING),
        y = i.default.div(r || (r = t`
  font-weight: ${ 0 };
  font-size: 20px;
  cursor: pointer;
`), j.FontWeights.Bold),
        z = i.default.div(s || (s = t`
  display: flex;
  align-items: center;
`));
}), c.register('4jOgw8', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('4LDCB8'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var i = e.forwardRef(h);
}), c.register('4LDCB8', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('3N8pv', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('PjB0f'),
        e = c('unMLU'),
        f = c('GFgjD'),
        g = c('UnUp5');
    var h = a => {
        const i = (0, g.toJS)(a);
        (0, d.request)({
            url: '/api/v1/editor/questions/remove',
            method: 'post',
            data: {
                questions: a,
                kitId: e.default.kitDetails.id
            },
            success: () => {
                e.default.editor.questionsChecked.replace([]);
                const j = e.default.editor.questions.filter(j => !i.includes(j._id));
                e.default.editor.questions.replace(j);
            },
            error: () => (0, f.throwError)({
                title: 'Error deleting questions...'
            })
        });
    };
}), c.register('+YiZx', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('PjB0f'),
        e = c('unMLU'),
        f = c('GFgjD'),
        g = c('UnUp5');
    var h = a => {
        const i = (0, g.toJS)(a);
        (0, d.request)({
            url: '/api/v1/editor/questions/convert-text-input',
            method: 'post',
            data: {
                questions: i,
                kitId: e.default.kitDetails.id
            },
            success: a => {
                let j = {};
                a.forEach(a => j[a._id] = a), e.default.editor.questionsChecked.replace([]);
                const k = e.default.editor.questions.map(a => j[a._id] ? j[a._id] : a);
                e.default.editor.questions.replace(k);
            },
            error: () => (0, f.throwError)({
                title: 'Error converting questions...',
                content: 'One of the questions might have an image or equation as the answer, which cannot be converted to a text input question'
            })
        });
    };
}), c.register('2lvWL', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('B3pX3'),
        g = c('oSNZM'),
        h = c('IsmrL'),
        i = c('q721a'),
        j = c('iYEuk12');
    let k;
    var l = () => (0, d.jsx)(m, {
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
    const m = e.default.div(k || (k = (a => a)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${ 0 }px;
`), () => f.RIGHT_SIDE_HEADER_PADDING);
}), c.register('oSNZM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('lByv9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var i = e.forwardRef(h);
}), c.register('lByv9', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('iYEuk12', function(b, C) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
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
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('nYlda', function(b, C) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('UM8oI'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('AYwF5');
    let h;
    const i = c('h99Nu').default.div.attrs({
        className: 'scroll'
    })(h || (h = (a => a)`
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'containerRef', f.createRef()), (0, d.default)(this, 'scrollToTop', () => {
                this.containerRef.current && this.containerRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    var k = l;
}), c.register('AYwF5', function(b, C) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('oczPp'),
        i = c('bGe8V'),
        j = c('hczBu'),
        k = c('LClbP'),
        l = c('aIhSR'),
        m = c('mjxQl');
    let n;
    const o = (0, g.observer)(a => {
            const {
                editor: p,
                kitDetails: q
            } = e.useContext(m.default);
            return (0, d.jsx)(p, {
                children: p.questions.map(C => (0, d.jsx)('div', {
                    children: (0, d.jsx)(h.default, {
                        question: C,
                        showCheckbox: !0,
                        checked: p.questionsChecked.includes(C._id),
                        handleCheckChange: a => {
                            const r = a.target.checked;
                            r && p.questionsChecked.push(C._id), r || p.questionsChecked.replace(p.questionsChecked.filter(a => a !== C._id));
                        },
                        canEdit: !0,
                        onEditClicked: a => {
                            a.stopPropagation(), p.currentlyEditingQuestionId = C._id, (0, j.default)(i.addNewQuestion);
                        },
                        onCopyClicked: p => {
                            p.stopPropagation();
                            const r = (0, l.questionToAddedQuestion)(C, q.id);
                            (0, k.default)([{
                                ...r,
                                source: C.source || 'editor'
                            }], () => {
                                a.scrollToTop();
                            });
                        }
                    }, C._id)
                }, C._id))
            });
        }),
        p = f.default.div(n || (n = (a => a)`
  padding: ${ 0 }px;
`), 10);
    var q = r;
}), c.register('oczPp', function(b, C) {
    a(b.exports, 'default', function() {
        return z;
    });
    var d = c('UM8oI'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('o/FCM'),
        h = c('s/4yx'),
        i = c('SHiyt7'),
        j = c('Ynp9Z7'),
        k = c('Y0KLM'),
        l = c('IsmrL'),
        m = c('f9f+a'),
        n = c('QtkH71'),
        o = c('ExtIT'),
        p = c('JQ8A18'),
        q = c('YfLmS'),
        r = c('h99Nu'),
        s = c('gSUVO'),
        t = c('lmfrI'),
        u = c('Kp/yk'),
        v = c('2WDH6');
    let w;
    const x = (0, r.default)(m.default)(w || (w = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), a => a.font ? a.font : s.Fonts.SFPro, t.default.Black);
    class y extends f.Component {
        componentDidUpdate(a) {
            a.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, d.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, d.default)(this, 'onAudioPress', a => {
                a.stopPropagation();
                new Audio((0, v.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var z = A;
}), c.register('s/4yx', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('waxee'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'AudioOutlined';
    var i = e.forwardRef(h);
}), c.register('waxee', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('SHiyt7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Gxa0x7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var i = e.forwardRef(h);
}), c.register('Gxa0x7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('Ynp9Z7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('6bYDI7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var i = e.forwardRef(h);
}), c.register('6bYDI7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('Y0KLM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('0iMlD'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PlusCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('0iMlD', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('QtkH71', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('0RCfO0'),
        e = c('WjvOI1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var g = h;
}), c.register('0RCfO0', function(n, o) {
    a(n.exports, 'default', function() {
        return q;
    }, function(a) {
        return q = a;
    });
    var d = c('VAIs1'),
        e = c('CrMLT9'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('LhviC'),
        i = c('WjvOI1'),
        j = c('Cm5dS'),
        k = c('qBaIr0'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = y,
            z = l(y, [
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
            getPrefixCls: A,
            direction: B
        } = f.useContext(g.ConfigContext), C = f.useContext(i.GroupContext), {
            isFormItemInput: D
        } = f.useContext(h.FormItemInputContext), E = f.useContext(j.default), F = null !== (n = (null == C ? void 0 : C.disabled) || x) && void 0 !== n ? n : E, G = f.useRef(z.value);
        f.useEffect(() => {
            null == C || C.registerValue(z.value);
        }, []), f.useEffect(() => {
            if (!w)
                return z.value !== G.current && (null == C || C.cancelValue(G.current), null == C || C.registerValue(z.value), G.current = z.value), () => null == C ? void 0 : C.cancelValue(z.value);
        }, [z.value]);
        const H = A('checkbox', o),
            [I, J] = (0, k.default)(H),
            K = Object.assign({}, z);
        C && !w && (K.onChange = function() {
            z.onChange && z.onChange.apply(z, v), C.toggleOption && C.toggleOption({
                label: r,
                value: z.value
            });
        }, K.name = C.name, K.checked = C.value.includes(z.value));
        const L = b(d)({
                [`${ H }-wrapper`]: !0,
                [`${ H }-rtl`]: 'rtl' === B,
                [`${ H }-wrapper-checked`]: K.checked,
                [`${ H }-wrapper-disabled`]: F,
                [`${ H }-wrapper-in-form-item`]: D
            }, p, q, J),
            M = b(d)({
                [`${ H }-indeterminate`]: s
            }, J),
            N = s ? 'mixed' : void 0;
        return I(f.createElement('label', {
            className: L,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': N
        }, K, {
            prefixCls: H,
            className: M,
            disabled: F,
            ref: c
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), c.register('WjvOI1', function(m, n) {
    a(m.exports, 'GroupContext', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(m.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('P7Ub/'),
        e = c('VAIs1'),
        f = c('xORK+'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('0RCfO0'),
        j = c('qBaIr0'),
        k = function(a, b) {
            var l = {};
            for (var m in a)
                Object.prototype.hasOwnProperty.call(a, m) && b.indexOf(m) < 0 && (l[m] = a[m]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(a); n < m.length; n++)
                    b.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, m[n]) && (l[m[n]] = a[m[n]]);
            }
            return l;
        };
    const l = g.createContext(null),
        m = (a, c) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: r,
                rootClassName: s,
                style: t,
                onChange: u
            } = v, w = k(v, [
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
                getPrefixCls: x,
                direction: y
            } = g.useContext(h.ConfigContext), [z, A] = g.useState(w.value || n || []), [B, C] = g.useState([]);
            g.useEffect(() => {
                'value' in w && A(w.value || []);
            }, [w.value]);
            const D = () => p.map(v => 'string' == typeof v || 'number' == typeof v ? {
                    label: v,
                    value: v
                } : v),
                E = x('checkbox', q),
                F = `${ E }-group`,
                [G, H] = (0, j.default)(E),
                I = (0, f.default)(w, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = D().map(v => g.createElement(i.default, {
                prefixCls: E,
                key: v.value.toString(),
                disabled: 'disabled' in v ? v.disabled : w.disabled,
                value: v.value,
                checked: z.includes(v.value),
                onChange: v.onChange,
                className: `${ F }-item`,
                style: v.style
            }, v.label)));
            const J = {
                    toggleOption: v => {
                        const K = z.indexOf(v.value),
                            L = (0, d.default)(z); -
                        1 === K ? L.push(v.value) : L.splice(K, 1), 'value' in w || A(L);
                        const M = D();
                        null == u || u(L.filter(v => B.includes(v)).sort((v, K) => M.findIndex(K => K.value === v) - M.findIndex(v => v.value === K)));
                    },
                    value: z,
                    disabled: w.disabled,
                    name: w.name,
                    registerValue: v => {
                        C(b => [].concat((0, d.default)(b), [v]));
                    },
                    cancelValue: v => {
                        C(b => b.filter(b => b !== v));
                    }
                },
                K = b(e)(F, {
                    [`${ F }-rtl`]: 'rtl' === y
                }, r, s, H);
            return G(g.createElement('div', Object.assign({
                className: K,
                style: t
            }, I, {
                ref: c
            }), g.createElement(l.Provider, {
                value: J
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), c.register('qBaIr0', function(b, n) {
    a(b.exports, 'getStyle', function() {
        return j;
    }), a(b.exports, 'default', function() {
        return k;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
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
        i = a => {
            const {
                checkboxCls: j
            } = k, l = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex'
                    }),
                    [l]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ l }`]: {
                            marginInlineStart: k.marginXS
                        },
                        [`&${ l }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
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
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: k.checkboxSize,
                            height: k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: k.colorBgContainer,
                            border: `${ k.lineWidth }px ${ k.lineType } ${ k.colorBorder }`,
                            borderRadius: k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: k.checkboxSize / 14 * 5,
                                height: k.checkboxSize / 14 * 8,
                                border: `${ k.lineWidthBold }px solid ${ k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ k.motionDurationFast } ${ k.motionEaseInBack }, opacity ${ k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: k.paddingXS,
                            paddingInlineEnd: k.paddingXS
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
                                    width: k.fontSizeLG / 2,
                                    height: k.fontSizeLG / 2,
                                    backgroundColor: k.colorPrimary,
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
                    [`${ l }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ l }:not(${ l }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: k.colorPrimary
                        }
                    },
                    [`${ l }:not(${ l }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: k.colorPrimary,
                            borderColor: k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ k.motionDurationMid } ${ k.motionEaseOutBack } ${ k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ k.lineWidthBold }px solid ${ k.colorPrimary }`,
                            animationName: h,
                            animationDuration: k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ l }-checked:not(${ l }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: k.colorBgContainerDisabled,
                            borderColor: k.colorBorder,
                            '&:after': {
                                borderColor: k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function j(a, b) {
        const k = (0, f.merge)(b, {
            checkboxCls: `.${ a }`,
            checkboxSize: b.controlInteractiveSize
        });
        return [i(k)];
    }
    var k = (0, e.default)('Checkbox', (a, b) => {
        let {
            prefixCls: l
        } = m;
        return [j(l, a)];
    });
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
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
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('Kp/yk', function(b, m) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('qLhB38'),
        h = c('bTRJM');
    let i, j, k, l = a => a;
    const m = e.default.div(i || (i = l`
  display: flex;
  align-items: center;
`)),
        n = e.default.div(j || (j = l`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), a => a.customTextColor ? a.customTextColor : f.default.Black, a => a.customFontSize ? a.customFontSize : 26, a => a.customFontWeight ? a.customFontWeight : 600),
        o = e.default.div(k || (k = l``));
    var p = a => {
        var q;
        return (0, d.jsxs)(m, {
            onClick: q => a.blockOutsideClicks ? q.stopPropagation() : null,
            children: [
                a.image && (0, d.jsx)(g.default, {
                    image: a.image,
                    size: a.customImageSize || 45,
                    customRightMargin: a.customImageMargin || 5,
                    showBorder: !0
                }),
                a.latex ? (0, d.jsx)(o, {
                    style: (null === (q = a.text) || void 0 === q ? void 0 : q.length) ? {
                        color: f.default.Black,
                        padding: 20,
                        border: `1px solid ${ f.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: a.customFontSize || 26
                    } : {
                        color: f.default.Black,
                        fontSize: a.customFontSize || 26
                    },
                    children: (0, d.jsx)(h.default, {
                        latex: a.latex
                    })
                }) : null,
                (0, d.jsx)(n, {
                    ...a,
                    children: a.text
                })
            ]
        });
    };
}), c.register('bTRJM', function(b, m) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = e.lazy(() => c('FhxEZ0'));
    var g = a => (0, d.jsx)(e.Suspense, {
        fallback: a.fallback || null,
        children: (0, d.jsx)(f, {
            latex: a.latex
        })
    });
}), c.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('8pe9D')),
        import('./' + c('tIOy4').resolve('5OCdz'))
    ]).then(() => c('feyVh'));
}), c.register('LClbP', function(b, m) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('PjB0f'),
        e = c('unMLU'),
        f = c('UnUp5'),
        g = c('bGe8V'),
        h = c('mKmug'),
        i = c('q1/uh'),
        j = c('bb86X'),
        k = c('hczBu');
    var l = (a, b, c) => {
        const m = e.default.editor.questions.length,
            n = i.QUESTION_LIMIT - m,
            o = a.filter((a, b) => b < n);
        e.default.editor.error = (0, h.defaultError)(), (0, d.request)({
            url: '/api/v1/editor/questions/add',
            method: 'post',
            data: {
                questions: o
            },
            success: a => {
                (0, j.default)();
                let p = (0, f.toJS)(e.default.editor.questions);
                a.filter(a => !a.replaced).forEach(a => p[c && c.pushToBottom ? 'push' : 'unshift'](a.question));
                a.filter(a => null !== a.replaced).forEach(a => {
                    p = p.map(p => p._id !== a.replaced ? p : a.question);
                }), e.default.editor.questions.replace(p), c && c.stay || (0, k.default)(g.editorBase);
            },
            error: a => {
                a && a.message && a.message.text && (e.default.editor.error.message = a.message.text);
            },
            both: () => {
                b && b();
            }
        });
    };
}), c.register('bb86X', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('unMLU'),
        e = c('PjB0f');
    var f = () => {
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
}), c.register('aIhSR', function(b, i) {
    a(b.exports, 'questionToAddedQuestion', function() {
        return v;
    }), a(b.exports, 'default', function() {
        return y;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('lnkpW'),
        i = c('IsmrL'),
        j = c('KV+OV'),
        k = c('/nMwY'),
        l = c('FNO5i'),
        m = c('lmfrI'),
        n = c('oczPp'),
        o = c('cBb/w'),
        p = c('LClbP'),
        q = c('Vlfxs'),
        r = c('q1/uh');
    const {
        TabPane: s
    } = k.default;
    let t;
    var u;
    (u = t || (t = {})).search = 'search', u.myKits = 'myKits';
    const v = (a, b) => ({
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
            kitId: b
        }),
        w = {
            selectedTab: t.search,
            addedQuestionIds: []
        };
    let x = class extends g.Component {
        render() {
            const {
                visible: y,
                close: z
            } = this.props;
            return (0, f.jsxs)(j.default, {
                destroyOnClose: !0,
                open: y,
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', w), (0, d.default)(this, 'handleTabChange', a => {
                this.setState({
                    selectedTab: a
                });
            }), (0, d.default)(this, 'addQuestion', a => {
                this.setState({
                    addedQuestionIds: [
                        ...this.state.addedQuestionIds,
                        a._id
                    ]
                }), (0, p.default)([v(a, this.props.kitDetails.id)], () => !1, {
                    stay: !0
                });
            }), (0, d.default)(this, 'renderQuestions', a => {
                const y = a.filter(a => !this.state.addedQuestionIds.includes(a._id));
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
                                        (0, p.default)(y.map(a => v(a, this.props.kitDetails.id)));
                                    },
                                    type: 'primary',
                                    icon: (0, f.jsx)(h.default, {}),
                                    children: 'Add All Questions'
                                })
                            ]
                        }),
                        (0, f.jsx)(o.default, {
                            children: y.map(a => (0, f.jsx)('div', {
                                children: (0, f.jsx)(n.default, {
                                    question: a,
                                    showAllAnswers: !0,
                                    canAdd: !0,
                                    onAddClicked: y => {
                                        y.stopPropagation(), this.addQuestion(a);
                                    }
                                })
                            }, a._id))
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
    var y = z;
}), c.register('FNO5i', function(i, d) {
    a(i.exports, 'default', function() {
        return v;
    });
    var d = c('UM8oI'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('1WjEv'),
        h = c('PjB0f'),
        i = c('hSkRl'),
        j = c('T4eZw0'),
        k = c('oczPp'),
        l = c('GFgjD'),
        m = c('Nsg/l3'),
        n = c('4/f+U'),
        o = c('gSUVO'),
        p = c('KzqIz'),
        q = c('VJ4d21'),
        r = c('jyOn10'),
        s = c('2MCaL');
    const t = 'GIMKIT_SEARCH_CACHE';
    class u extends f.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0);
        }
        componentDidUpdate(a, b) {
            this.state.language === b.language && this.state.subject === b.subject && this.state.sort === b.sort && this.props.showMyKits === a.showMyKits || this.onSearch(!0);
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
        constructor(a) {
            super(a), (0, d.default)(this, 'state', {
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
                const v = this.state.searchQuery;
                if (v && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const w = {
                        query: v,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (w.language = (0, q.getLanguageKey)(this.state.language)), this.state.subject && (w.subject = this.state.subject), (0, h.request)({
                        url: '/api/games/search',
                        data: w,
                        cacheKey: t,
                        success: v => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...v.results
                                ],
                                hasMore: v.hasMore,
                                page: v.page
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
                                const x = new URL(window.location.href);
                                x.searchParams.set('q', v), window.history.pushState({}, '', x);
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
                    success: a => {
                        this.setState({
                            results: a.games.map(a => ({
                                _id: a._id,
                                title: a.title,
                                gif: a.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: b(s)(a.createdAt).toISOString()
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
            }), (0, d.default)(this, 'fetchQuestions', a => {
                (0, h.request)({
                    url: `/api/games/questions/search/${ a }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: t,
                    method: 'get',
                    success: b => {
                        const v = b.reverse();
                        this.setState({
                            questions: v,
                            currentKit: a
                        });
                    },
                    error: () => !1
                });
            }), (0, d.default)(this, 'onSearch', a => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: a,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, d.default)(this, 'debouncedHover', (0, n.debounce)(a => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(a._id);
            }, 50)), (0, d.default)(this, 'onUpdateSearchQuery', a => {
                this.setState({
                    draftSearchQuery: a
                });
            }), (0, d.default)(this, 'onLanguageSelected', a => {
                this.setState({
                    language: a
                });
            }), (0, d.default)(this, 'onSubjectSelected', a => {
                this.setState({
                    subject: a
                });
            }), (0, d.default)(this, 'onSortSelected', a => {
                this.setState({
                    sort: a
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
                children: this.state.results.map((a, b) => (0, e.jsx)(f.Fragment, {
                    children: (0, e.jsx)(i.default, {
                        id: a._id,
                        title: a.title,
                        gif: a.gif,
                        handleHover: () => this.debouncedHover(a),
                        numberOfQuestions: a.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: a.creator,
                        dateCreated: a.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === a._id,
                        blockHoverable: !0
                    }, a._id)
                }, `read-item-${ a._id }`))
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
            })), (0, d.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(a => (0, e.jsx)(k.default, {
                question: a,
                showAllAnswers: !0
            }, a._id)));
        }
    }
    var v = w;
}), c.register('hSkRl', function(i, d) {
    a(i.exports, 'default', function() {
        return L;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('f9f+a'),
        f = c('ExtIT'),
        g = c('gSUVO'),
        h = c('qLhB38'),
        i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('lmfrI'),
        l = c('iYEuk12'),
        m = c('k0s2g17'),
        n = c('2MCaL');
    let o, p, q, r, s, t, u, v, w, x, y, z = a => a;
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
    var L = a => {
        const M = 'normal' === a.size;
        return (0, d.jsx)(A, {
            to: a.blockRedirect ? void 0 : `/view/${ a.id }`,
            children: (0, d.jsx)(B, {
                className: 'maxWidth',
                onMouseEnter: a.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !a.blockHoverable,
                style: {
                    backgroundColor: a.selected ? '#eeeeee' : k.default.White
                },
                children: (0, d.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                image: a.gif,
                                size: M ? 178 : 148,
                                onClick: a.redirectOnImageClick && (() => a.blockRedirect ? null : (0, m.NavigateTo)(`/view/${ a.id }`))
                            })
                        }),
                        (0, d.jsx)(C, {
                            children: (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        style: {
                                            fontSize: M ? 32 : 23
                                        },
                                        children: a.title
                                    }),
                                    a.creator && (0, d.jsx)(F, {
                                        style: {
                                            fontSize: M ? 18 : 16
                                        },
                                        children: (0, j.capitalizeFirstLetter)(a.creator)
                                    }),
                                    (0, d.jsx)(f.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!a.numberOfQuestions && (0, d.jsxs)(G, {
                                        children: [
                                            (0, d.jsx)(J, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    a.numberOfQuestions ? a.numberOfQuestions : '',
                                                    ' ',
                                                    a.numberOfQuestions ? (0, j.plural)('question', a.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    a.dateCreated && M && (0, d.jsxs)(H, {
                                        children: [
                                            (0, d.jsx)(K, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    b(n)(a.dateCreated).fromNow()
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
}), c.register('T4eZw0', function(b, i) {
    a(b.exports, 'LeftSide', function() {
        return k;
    }), a(b.exports, 'RightSide', function() {
        return l;
    });
    var d = c('h99Nu'),
        e = c('lmfrI'),
        f = c('gSUVO');
    let g, h, i, j = a => a;
    const k = d.default.div.attrs({
            id: 'left-side-search',
            className: 'scroll-y'
        })(g || (g = j`
  width: 647px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  padding: ${ 0 };
  padding-top: 0px;
`), e.default.White, e.default.BorderGray, a => a.customPadding ? a.customPadding : '15px'),
        l = d.default.div.attrs({
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
}), c.register('Nsg/l3', function(i, j) {
    a(i.exports, 'default', function() {
        return l;
    });
    var d = c('uPP4W'),
        e = function(a, b) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for (var f in b)
                    b.hasOwnProperty(f) && (a[f] = b[f]);
            }, e(a, b);
        };
    var f = function() {
        return f = Object.assign || function(a) {
            for (var g, h = 1, i = v.length; h < i; h++)
                for (var j in g = v[h])
                    Object.prototype.hasOwnProperty.call(g, j) && (a[j] = g[j]);
            return a;
        }, f.apply(this, v);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(a) {
        return 'number' == typeof a ? {
            unit: h,
            value: 100 * a
        } : 'string' == typeof a ? a.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(a)
        } : a.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(a)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var k = function(a) {
            function l(b) {
                var m = a.call(this, b) || this;
                return m.lastScrollTop = 0, m.actionTriggered = !1, m.startY = 0, m.currentY = 0, m.dragging = !1, m.maxPullDownDistance = 0, m.getScrollableTarget = function() {
                    return m.props.scrollableTarget instanceof HTMLElement ? m.props.scrollableTarget : 'string' == typeof m.props.scrollableTarget ? document.getElementById(m.props.scrollableTarget) : (null === m.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, m.onStart = function(a) {
                    m.lastScrollTop || (m.dragging = !0, a instanceof MouseEvent ? m.startY = a.pageY : a instanceof TouchEvent && (m.startY = a.touches[0].pageY), m.currentY = m.startY, m._infScroll && (m._infScroll.style.willChange = 'transform', m._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, m.onMove = function(a) {
                    m.dragging && (a instanceof MouseEvent ? m.currentY = a.pageY : a instanceof TouchEvent && (m.currentY = a.touches[0].pageY), m.currentY < m.startY || (m.currentY - m.startY >= Number(m.props.pullDownToRefreshThreshold) && m.setState({
                        pullToRefreshThresholdBreached: !0
                    }), m.currentY - m.startY > 1.5 * m.maxPullDownDistance || m._infScroll && (m._infScroll.style.overflow = 'visible', m._infScroll.style.transform = 'translate3d(0px, ' + (m.currentY - m.startY) + 'px, 0px)')));
                }, m.onEnd = function() {
                    m.startY = 0, m.currentY = 0, m.dragging = !1, m.state.pullToRefreshThresholdBreached && (m.props.refreshFunction && m.props.refreshFunction(), m.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        m._infScroll && (m._infScroll.style.overflow = 'auto', m._infScroll.style.transform = 'none', m._infScroll.style.willChange = 'none');
                    });
                }, m.onScrollListener = function(a) {
                    'function' == typeof m.props.onScroll && setTimeout(function() {
                        return m.props.onScroll && m.props.onScroll(a);
                    }, 0);
                    var n = m.props.height || m._scrollableNode ? a.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    m.actionTriggered || ((m.props.inverse ? m.isElementAtTop(n, m.props.scrollThreshold) : m.isElementAtBottom(n, m.props.scrollThreshold)) && m.props.hasMore && (m.actionTriggered = !0, m.setState({
                        showLoader: !0
                    }), m.props.next && m.props.next()), m.lastScrollTop = n.scrollTop);
                }, m.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, m.throttledOnScrollListener = function(a, b, m, n) {
                    var n, o = !1,
                        p = 0;

                    function q() {
                        n && clearTimeout(n);
                    }

                    function r() {
                        var s = this,
                            t = Date.now() - p,
                            u = v;

                        function w() {
                            p = Date.now(), m.apply(s, u);
                        }

                        function x() {
                            n = void 0;
                        }
                        o || (n && !n && w(), q(), void 0 === n && t > a ? w() : !0 !== b && (n = setTimeout(n ? x : w, void 0 === n ? a - t : a)));
                    }
                    return 'boolean' != typeof b && (n = m, m = b, b = void 0), r.cancel = function() {
                        q(), o = !0;
                    }, r;
                }(150, m.onScrollListener).bind(m), m.onStart = m.onStart.bind(m), m.onMove = m.onMove.bind(m), m.onEnd = m.onEnd.bind(m), m;
            }
            return function(a, b) {
                function m() {
                    this.constructor = a;
                }
                e(a, b), a.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m());
            }(l, a), l.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, l.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, l.prototype.UNSAFE_componentWillReceiveProps = function(a) {
                this.props.dataLength !== a.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, l.prototype.isElementAtTop = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop <= n.value + m - a.scrollHeight + 1 || 0 === a.scrollTop : a.scrollTop <= n.value / 100 + m - a.scrollHeight + 1 || 0 === a.scrollTop;
            }, l.prototype.isElementAtBottom = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop + m >= a.scrollHeight - n.value : a.scrollTop + m >= n.value / 100 * a.scrollHeight;
            }, l.prototype.render = function() {
                var m = this,
                    n = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    o = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    p = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(d).createElement('div', {
                    style: p,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(b) {
                        return m._infScroll = b;
                    },
                    style: n
                }, this.props.pullDownToRefresh && b(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(b) {
                        return m._pullDown = b;
                    }
                }, b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !o && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, l;
        }(d.Component),
        l = m;
}), c.register('jyOn10', function(b, n) {
    a(b.exports, 'SortOptions', function() {
        return t;
    }), a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('IsmrL'),
        g = c('c6x8w'),
        h = c('OECP7'),
        i = c('Ly1h3'),
        j = c('/nFOP0'),
        k = c('VJ4d21'),
        l = c('gSUVO'),
        m = c('GnnOG1'),
        n = c('Qb9Zd0');
    let o, p, q = a => a;
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
    let t;
    var u;
    (u = t || (t = {})).relevant = 'relevant', u.recent = 'recent';
    var v = a => (0, d.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: a.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, d.jsx)(g.default.Search, {
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
                onChange: b => a.onUpdateSearchQuery(b.target.value)
            }),
            (0, d.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: a.showFilters ? 'visible' : 'hidden'
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
                                    value: a.language,
                                    onChange: b => a.onLanguageSelected(b),
                                    children: [...(0, k.getListOfLanguages)()].map(a => (0, d.jsx)(i.default.Option, {
                                        value: a,
                                        children: a
                                    }, a))
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
                                    value: a.subject,
                                    onChange: b => a.onSubjectSelected(b),
                                    children: [...j.optionsForAreaOfExpertise].map(a => (0, d.jsx)(i.default.Option, {
                                        value: a,
                                        children: a
                                    }, a))
                                })
                            ]
                        }),
                        children: (0, d.jsx)(f.default, {
                            style: {
                                marginRight: 12
                            },
                            icon: (0, d.jsx)(m.default, {}),
                            size: 'small',
                            type: a.language || a.subject ? 'primary' : 'default',
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
                                    value: a.sort,
                                    onChange: b => a.onSortSelected(b),
                                    children: [
                                        (0, d.jsx)(i.default.Option, {
                                            value: t.relevant,
                                            children: 'Most Relevant'
                                        }),
                                        (0, d.jsx)(i.default.Option, {
                                            value: t.recent,
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
}), c.register('OECP7', function(n, o) {
    a(n.exports, 'default', function() {
        return t;
    }, function(a) {
        return t = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('YfLmS'),
        h = c('tLNBh'),
        i = c('XiKtc'),
        j = c('2iTdQ'),
        k = c('ljd7h'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = a => {
            let {
                title: n,
                content: o,
                prefixCls: p
            } = q;
            return n || o ? e.createElement(e.Fragment, null, n && e.createElement('div', {
                className: `${ p }-title`
            }, (0, h.getRenderPropValue)(n)), e.createElement('div', {
                className: `${ p }-inner-content`
            }, (0, h.getRenderPropValue)(o))) : null;
        },
        n = e.forwardRef((a, c) => {
            var o, p;
            const {
                prefixCls: q,
                title: r,
                content: s,
                overlayClassName: t,
                placement: u = 'top',
                trigger: v = 'hover',
                mouseEnterDelay: w = 0.1,
                mouseLeaveDelay: x = 0.1,
                overlayStyle: y = {},
                arrowPointAtCenter: z,
                arrow: A
            } = B, C = l(B, [
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
                getPrefixCls: D
            } = e.useContext(f.ConfigContext), E = D('popover', q), [F, G] = (0, k.default)(E), H = D(), I = b(d)(t, G), J = null !== (p = null !== (o = 'boolean' != typeof A && (null == A ? void 0 : A.arrowPointAtCenter)) && void 0 !== o ? o : z) && void 0 !== p && p, K = null != A ? A : {
                arrowPointAtCenter: J
            };
            return F(e.createElement(g.default, Object.assign({
                placement: u,
                arrow: K,
                trigger: v,
                mouseEnterDelay: w,
                mouseLeaveDelay: x,
                overlayStyle: y
            }, C, {
                prefixCls: E,
                overlayClassName: I,
                ref: c,
                overlay: e.createElement(m, {
                    prefixCls: E,
                    title: r,
                    content: s
                }),
                transitionName: (0, i.getTransitionName)(H, 'zoom-big', C.transitionName),
                'data-popover-inject': !0
            })));
        });
    n._InternalPanelDoNotUseOrYouWillBeFired = j.default;
    var o = p;
}), c.register('tLNBh', function(b, c) {
    a(b.exports, 'getRenderPropValue', function() {
        return d;
    });
    const d = a => a ? 'function' == typeof a ? a() : a : null;
}), c.register('2iTdQ', function(l, m) {
    a(l.exports, 'getOverlay', function() {
        return k;
    }, function(a) {
        return k = a;
    }), a(l.exports, 'RawPurePanel', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(l.exports, 'default', function() {
        return m;
    }, function(a) {
        return m = a;
    });
    var d = c('uPP4W'),
        e = c('VAIs1'),
        f = c('E77Jm'),
        g = c('qEw51'),
        h = c('ljd7h'),
        i = c('tLNBh'),
        j = function(a, b) {
            var k = {};
            for (var l in a)
                Object.prototype.hasOwnProperty.call(a, l) && b.indexOf(l) < 0 && (k[l] = a[l]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(a); m < l.length; m++)
                    b.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(a, l[m]) && (k[l[m]] = a[l[m]]);
            }
            return k;
        };
    const k = (a, b, c) => {
        if (b || c)
            return d.createElement(d.Fragment, null, b && d.createElement('div', {
                className: `${ a }-title`
            }, (0, i.getRenderPropValue)(b)), d.createElement('div', {
                className: `${ a }-inner-content`
            }, (0, i.getRenderPropValue)(c)));
    };

    function l(a) {
        const {
            hashId: m,
            prefixCls: n,
            className: o,
            style: p,
            placement: q = 'top',
            title: r,
            content: s,
            children: t
        } = u;
        return d.createElement('div', {
            className: b(e)(m, n, `${ n }-pure`, `${ n }-placement-${ q }`, o),
            style: p
        }, d.createElement(f.Popup, Object.assign({}, u, {
            className: m,
            prefixCls: n
        }), t || k(n, r, s)));
    }

    function m(a) {
        const {
            prefixCls: n
        } = o, p = j(o, ['prefixCls']), {
            getPrefixCls: q
        } = d.useContext(g.ConfigContext), r = q('popover', n), [s, t] = (0, h.default)(r);
        return s(d.createElement(l, Object.assign({}, p, {
            prefixCls: r,
            hashId: t
        })));
    }
}), c.register('ljd7h', function(b, m) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('Sz24z'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('0a13R'),
        h = c('P38j/'),
        i = c('dcHOy');
    const j = a => {
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
                marginXS: u,
                colorBgElevated: v
            } = w;
            return [{
                    [k]: Object.assign(Object.assign({}, (0, h.resetComponent)(w)), {
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
                            marginBottom: u,
                            color: r,
                            fontWeight: o
                        },
                        [`${ k }-inner-content`]: {
                            color: m
                        }
                    })
                },
                (0, i.default)(w, {
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
        k = a => {
            const {
                componentCls: l
            } = m;
            return {
                [l]: g.PresetColors.map(c => {
                    const n = m[`${ c }-6`];
                    return {
                        [`&${ l }-${ c }`]: {
                            '--antd-arrow-background-color': n,
                            [`${ l }-inner`]: {
                                backgroundColor: n
                            },
                            [`${ l }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        l = a => {
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
            } = v, w = r - Math.round(s * t);
            return {
                [m]: {
                    [`${ m }-inner`]: {
                        padding: 0
                    },
                    [`${ m }-title`]: {
                        margin: 0,
                        padding: `${ w / 2 }px ${ u }px ${ w / 2 - n }px`,
                        borderBottom: `${ n }px ${ o } ${ p }`
                    },
                    [`${ m }-inner-content`]: {
                        padding: `${ q }px ${ u }px`
                    }
                }
            };
        };
    var m = (0, e.default)('Popover', a => {
        const {
            colorBgElevated: n,
            colorText: o,
            wireframe: p
        } = q, r = (0, f.merge)(q, {
            popoverBg: n,
            popoverColor: o,
            popoverPadding: 12
        });
        return [
            j(r),
            k(r),
            p && l(r),
            (0, d.initZoomMotion)(r, 'zoom-big')
        ];
    }, a => {
        let {
            zIndexPopupBase: n
        } = o;
        return {
            zIndexPopup: n + 30,
            width: 177
        };
    });
}), c.register('GnnOG1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('aRBoD1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'FilterOutlined';
    var i = e.forwardRef(h);
}), c.register('aRBoD1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('Qb9Zd0', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('GE1/10'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'SortDescendingOutlined';
    var i = e.forwardRef(h);
}), c.register('GE1/10', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('uJXRI', function(b, s) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('PjB0f'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('KzqIz'),
        i = c('bGe8V'),
        j = c('LClbP'),
        k = c('mjxQl'),
        l = c('hczBu'),
        m = c('14Th7'),
        n = c('q1/uh');
    var o = (0, f.observer)(() => {
        const {
            editor: p,
            kitDetails: {
                id: q
            }
        } = g.useContext(k.default), r = (0, h.useLocation)(), [s, t, u] = (0, e.useBoolean)(!1), v = g.useRef(), w = g.useMemo(() => !p.currentlyEditingQuestionId && p.questions.length >= n.QUESTION_LIMIT, [
            p.questions.length,
            p.currentlyEditingQuestionId
        ]), x = g.useMemo(() => r.pathname.endsWith('question'), [r.pathname.length]), y = g.useMemo(() => {
            if (p.currentlyEditingQuestionId)
                return p.questions.find(q => q._id === p.currentlyEditingQuestionId);
        }, [p.currentlyEditingQuestionId]), z = () => {
            p.currentlyEditingQuestionId = '';
        };
        return (0, d.jsx)(m.default, {
            ref: v,
            visible: x,
            close: () => (0, l.default)(i.editorBase),
            existingQuestion: y,
            submitQuestion: p => {
                t(), (0, j.default)([{
                    questionText: p.text,
                    image: p.image,
                    audio: p.audio,
                    latex: p.latex,
                    type: p.type,
                    source: 'editor',
                    answers: p.answers.filter(p => {
                        var A;
                        const B = null === (A = p.text) || void 0 === A ? void 0 : A.trim();
                        return !!(null == B ? void 0 : B.length) || (p.latex || p.image);
                    }),
                    kitId: q,
                    replacingQuestion: p._id || ''
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
            errorMessage: p.error ? p.error.message : ''
        });
    });
}), c.register('9vWG9', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bGe8V'),
        f = c('T3wq9'),
        g = c('hczBu'),
        h = c('KzqIz');
    var i = () => {
        const j = (0, h.useLocation)().pathname.endsWith('flashcard-import');
        return (0, d.jsx)(f.default, {
            visible: j,
            close: () => (0, g.default)(e.editorBase)
        });
    };
}), c.register('T3wq9', function(b, d) {
    a(b.exports, 'default', function() {
        return D;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('Iff9Y'),
        i = c('IsmrL'),
        j = c('c6x8w'),
        k = c('cR5QE'),
        l = c('YfLmS'),
        m = c('h99Nu'),
        n = c('xcGI7'),
        o = c('gSUVO'),
        p = c('SxiSo'),
        q = c('LClbP'),
        r = c('o/FCM'),
        s = c('Vlfxs'),
        t = c('oei+6'),
        u = c('riG6s'),
        v = c('mKmug'),
        w = c('4/f+U');
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
        componentDidUpdate(a) {
            !this.props.visible && a.visible && (this.setState(B), this.props.editor.error = (0, v.defaultError)());
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
                    children: (0, f.jsxs)(F, {
                        children: [
                            this.getContent(),
                            (0, f.jsx)(u.default, {})
                        ]
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', B), (0, d.default)(this, 'skipToLastStep', () => this.setState({
                screen: z.paste
            })), (0, d.default)(this, 'toggleOverlay', () => this.setState({
                overlayOpen: !this.state.overlayOpen
            })), (0, d.default)(this, 'flip', () => this.setState({
                textAreaInput: (0, p.flip)(this.state.textAreaInput)
            })), (0, d.default)(this, 'getContent', () => {
                const D = (0, p.MakeBaseQuestions)((0, p.MakeQuizletQuestionMap)(this.state.textAreaInput));
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
                            disabled: !(D.length > 1),
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
                        D.length > 1 && (0, f.jsxs)('div', {
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
                            questions: D,
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
            }), (0, d.default)(this, 'onTextAreaChanged', a => {
                this.setState({
                    textAreaInput: a.target.value
                });
            });
        }
    };
    C = (0, e.__decorate)([
        (0, s.inject)('kitDetails', 'editor'),
        s.observer
    ], C);
    var D = E;
    const F = m.default.div(x || (x = (a => a)`
  .ant-steps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`));
}), c.register('Iff9Y', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('tUg/X'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionOutlined';
    var i = e.forwardRef(h);
}), c.register('tUg/X', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('SxiSo', function(b, k) {
    a(b.exports, 'MakeQuizletQuestionMap', function() {
        return g;
    }), a(b.exports, 'MakeBaseQuestions', function() {
        return h;
    }), a(b.exports, 'flip', function() {
        return i;
    });
    var d = c('4/f+U');
    const e = a => null != a.match(/\.(jpeg|jpg|gif|png)$/),
        f = a => a.text ? a.text : a.image ? a.image : '',
        g = a => a.split('\n').map(a => {
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
            const i = a.split('\t').filter(a => a && a.length > 0);
            if (i.length <= 1)
                return null;
            if (3 === i.length)
                return e(i[0]) ? (h.question.image = i[0], h.question.text = i[1], h.answer.text = i[2]) : (h.question.text = i[0], h.answer.text = i[1], h.question.image = i[2]), h;
            h.question.text = i[0];
            e(i[1]) ? h.answer.image = i[1] : h.answer.text = i[1];
            return h;
        }).filter(a => !(!a || !a.question.text && !a.question.image || !a.answer.image && !a.answer.text)),
        h = a => {
            const i = a.map(i => {
                const j = [{
                        ...i.answer,
                        correct: !0
                    }],
                    k = () => {
                        let l = !1;
                        for (let m = 0; m < 10; m++) {
                            if (l)
                                return;
                            const n = (0, d.shuffle)(a)[0];
                            let o = !1;
                            j.forEach(a => {
                                f(a) === f(n.answer) && (o = !0);
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
        i = a => {
            let j = '';
            const k = a.split('\n').map(a => a.split('\t').reverse());
            return k.forEach((a, D) => {
                a.forEach((d, e) => {
                    j += d, e + 1 === a.length ? D + 1 !== k.length && (j += '\n') : j += '\t';
                });
            }), j;
        };
}), c.register('oei+6', function(b, D) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('KV+OV'),
        f = c('o/FCM'),
        g = c('oczPp');
    var h = a => {
        const i = a.questions.map((a, i) => ({
            _id: 'quizlet-question-' + i,
            text: a.text,
            type: f.QuestionType.multipleChoice,
            image: a.image,
            audio: a.audio,
            latex: a.latex,
            answers: a.answers.map((a, c) => ({
                _id: 'quizlet-answer-' + i + '-' + c,
                text: a.text,
                image: a.image,
                latex: a.latex,
                correct: a.correct
            }))
        }));
        return (0, d.jsx)(e.default, {
            open: a.visible,
            placement: 'right',
            closable: !0,
            destroyOnClose: !0,
            onClose: a.close,
            width: 515,
            children: i.map(a => (0, d.jsx)(g.default, {
                question: a,
                showAllAnswers: !0
            }, a._id))
        });
    };
}), c.register('riG6s', function(b, D) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('6gioo'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('bPH7V'),
        h = c('Vlfxs');
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
    var j = k;
}), c.register('hkBHC', function(b, D) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bGe8V'),
        f = c('aIhSR'),
        g = c('hczBu'),
        h = c('KzqIz');
    var i = () => {
        const j = (0, h.useLocation)().pathname.endsWith('question-bank');
        return (0, d.jsx)(f.default, {
            visible: j,
            close: () => (0, g.default)(e.editorBase)
        });
    };
}), c.register('RbfSj', function(b, D) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('KzqIz'),
        f = c('eu8gq');
    var g = () => {
        const h = (0, e.useNavigate)(),
            i = (0, e.useLocation)().pathname.endsWith('spreadsheet');
        return (0, d.jsx)(f.default, {
            visible: i,
            close: () => h(-1)
        });
    };
}), c.register('eu8gq', function(b, D) {
    a(b.exports, 'default', function() {
        return E;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('mZXvI0'),
        g = c('bPH7V'),
        h = c('IsmrL'),
        i = c('f9f+a'),
        j = c('cR5QE'),
        k = c('f4DIF'),
        l = c('h99Nu'),
        m = c('gSUVO'),
        n = c('lmfrI'),
        o = c('UB3CJ'),
        p = c('LClbP'),
        q = c('o/FCM'),
        r = c('Vlfxs'),
        s = c('SxiSo'),
        t = c('mjxQl');
    let u, v, w, x = a => a;
    const y = a => (0, d.jsx)('a', {
            href: a.link,
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
                        children: a.title
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            lineHeight: '17px'
                        },
                        children: a.description
                    })
                ]
            })
        }),
        z = a => a.filter(a => a && a.length > 0),
        A = (0, r.observer)(a => {
            const {
                kitDetails: B
            } = e.useContext(t.default), [C, D] = e.useState(!1), [E, F] = e.useState(''), G = ({
                file: H
            }) => {
                F('');
                const I = [];
                o.parse(H, {
                    complete: H => {
                        if (H && H.data && H.data.length && H.data[0][0] && H.data[0][0].endsWith('Template 2')) {
                            const J = [];
                            H.data.forEach((H, I) => {
                                I > 1 && H[0] && H[1] && J.push({
                                    question: {
                                        text: H[0]
                                    },
                                    answer: {
                                        text: H[1]
                                    }
                                });
                            }), (0, s.MakeBaseQuestions)(J).forEach(H => {
                                I.push({
                                    text: H.text,
                                    answers: H.answers.map(H => ({
                                        correct: H.correct,
                                        text: H.text
                                    }))
                                });
                            }), I && I.length || F('Invalid format. Make sure you\'re using our template and have a question and correct answer for each row.');
                        } else
                            H && H.data && H.data[1] && z(H.data[1]).length >= 5 && H.data.forEach((H, B) => {
                                if (B > 1) {
                                    const J = z(H);
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
                        I && I.length && (D(!0), (0, p.default)(I.map(H => ({
                            questionText: H.text,
                            type: q.QuestionType.multipleChoice,
                            answers: H.answers,
                            source: 'spreadsheet',
                            kitId: B.id
                        })), () => D(!1)));
                    }
                });
            };
            return (0, d.jsx)(j.default, {
                open: H.visible,
                onCancel: H.close,
                footer: !1,
                width: 670,
                closable: !1,
                style: {
                    top: 20
                },
                children: (0, d.jsxs)(B, {
                    className: 'flex maxWidth flex-column',
                    children: [
                        (0, d.jsx)(C, {
                            children: 'Import from Spreadsheet'
                        }),
                        (0, d.jsx)(D, {
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
        B = l.default.div(u || (u = x`
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`)),
        C = l.default.div(v || (v = x`
  font-size: 27px;
  font-weight: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), m.FontWeights.UltraBold, n.default.Black, m.Fonts.SFPro),
        D = l.default.div(w || (w = x`
  font-size: 16px;
  margin-top: -4px;
  line-height: 21px;
  color: ${ 0 };
  font-family: ${ 0 };
`), n.default.Black, m.Fonts.SFPro);
    var E = F;
}), c.register('mZXvI0', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('N/89T0'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UploadOutlined';
    var i = e.forwardRef(h);
}), c.register('N/89T0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('3h5vM', function(b, k) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('iHElh'),
        g = c('Wleo5'),
        h = c('laJ/S'),
        i = c('0R8EW');
    let j;
    const k = e.default.div(j || (j = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
    var l = () => {
        const {
            kitId: m
        } = (0, i.useParams)();
        return (0, h.useDidMount)(() => {
            (0, g.default)(m);
        }), (0, d.jsx)(k, {
            children: (0, d.jsx)(f.default, {
                size: 'large'
            })
        });
    };
}), c.register('Wleo5', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('unMLU'),
        e = c('PjB0f'),
        f = c('q721a'),
        g = c('k0s2g17');
    var h = a => {
        (0, e.request)({
            url: `/api/games/fetch/${ a }`,
            method: 'get',
            success: a => {
                const {
                    kitDetails: i,
                    editor: j
                } = d.default, {
                    kit: k
                } = l;
                i.id = k._id, i.title = k.title, i.image = k.gif, i.privacy = k.privacy, j.questions.replace(k.questions);
            },
            error: a => {
                (0, g.NavigateTo)(f.DASHBOARD);
            }
        });
    };
}), c.register('MkMIG', function(b, s) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('KzqIz'),
        f = c('bGe8V'),
        g = c('hczBu'),
        h = c('S4WWq');
    var i = () => {
        const j = (0, e.useLocation)().pathname.endsWith('flashcard-create');
        return (0, d.jsx)(h.default, {
            visible: j,
            close: () => (0, g.default)(f.editorBase)
        });
    };
}), c.register('S4WWq', function(b, s) {
    a(b.exports, 'default', function() {
        return z;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('IsmrL'),
        i = c('ExtIT'),
        j = c('cR5QE'),
        k = c('lmfrI'),
        l = c('gSUVO'),
        m = c('2tCC+'),
        n = c('oei+6'),
        o = c('o/FCM'),
        p = c('Vlfxs'),
        q = c('riG6s'),
        r = c('4/f+U'),
        s = c('LClbP'),
        t = c('SxiSo');
    const u = 'flashcard-entry-editor',
        v = a => {
            let w = !1;
            return (a.text || a.audio || a.image || a.latex) && (w = !0), w;
        },
        w = a => {
            let x = 0;
            return a.text && x++, a.image && x++, a.latex && x++, 1 === x;
        },
        x = a => v(a.question) && w(a.answer);
    let y = class extends g.Component {
        componentDidMount() {
            if (localStorage.getItem(u)) {
                const z = JSON.parse(localStorage.getItem(u));
                z && z.length > 3 && this.setState({
                    questions: z
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
                            this.state.questions.map((a, b) => (0, f.jsx)(m.default, {
                                value: a,
                                onChange: a => this.handleQuestionChange(a, b)
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'state', {
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
            })), (0, d.default)(this, 'handleQuestionChange', (a, b) => {
                let z = this.state.questions;
                b + 1 === this.state.questions.length && !this.state.questions[b + 1] && x(a) && z.length < 200 && z.push({
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
                }), z = z.map((z, s) => s !== b ? z : a), z = z.filter((a, b) => !(b > 3 && b + 1 !== z.length && !v(a.question) && !w(a.answer))), localStorage.setItem(u, JSON.stringify(z)), this.setState({
                    questions: z
                });
            }), (0, d.default)(this, 'makeQuestions', () => (0, t.MakeBaseQuestions)(this.state.questions.filter(a => x(a)))), (0, d.default)(this, 'addQuestions', () => {
                const z = this.makeQuestions();
                if (!z.length)
                    return;
                this.setState({
                    loading: !0
                });
                const A = z.reverse().map(z => ({
                    questionText: z.text,
                    image: z.image,
                    audio: z.audio,
                    type: o.QuestionType.multipleChoice,
                    source: 'flashcard-create',
                    answers: z.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, r.chunk)(A, 20).forEach(z => {
                    (0, s.default)(z, () => {
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
                return this.state.questions.forEach((b, c) => {
                    c < 4 && (x(b) || (z = !1));
                }), z;
            });
        }
    };
    y = (0, e.__decorate)([
        (0, p.inject)('kitDetails'),
        p.observer
    ], y);
    var z = A;
}), c.register('2tCC+', function(b, s) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('8+kxN'),
        g = c('PjB0f');
    let h, i, j, k = a => a;
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
    var o = a => {
        const p = () => ({
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
                value: q
            } = r,
            {
                question: s,
                answer: t
            } = u;
        return (0, d.jsxs)(l, {
            children: [
                (0, d.jsx)(m, {
                    children: (0, d.jsx)(f.default, {
                        text: s.text,
                        image: s.image,
                        audio: s.audio,
                        latex: s.latex,
                        onTextChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    text: u
                                }
                            });
                        },
                        onImageChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    image: u
                                }
                            });
                        },
                        onLatexChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    latex: u
                                }
                            });
                        },
                        textAllowed: !0,
                        imageAllowed: !s.latex,
                        audioAllowed: window.MediaRecorder && !(0, g.isStudent)(),
                        latexAllowed: !s.image,
                        onAudioChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                question: {
                                    ...v.question,
                                    audio: u
                                }
                            });
                        },
                        placeholder: 'Question...'
                    })
                }),
                (0, d.jsx)(n, {
                    children: (0, d.jsx)(f.default, {
                        text: t.text,
                        image: t.image,
                        latex: t.latex,
                        audio: null,
                        onTextChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    text: u
                                }
                            });
                        },
                        onImageChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    image: u
                                }
                            });
                        },
                        onLatexChange: u => {
                            const v = p();
                            r.onChange({
                                ...v,
                                answer: {
                                    ...v.answer,
                                    latex: u
                                }
                            });
                        },
                        imageAllowed: !t.text && !t.latex,
                        latexAllowed: !t.text && !t.image,
                        textAllowed: !t.image && !t.latex,
                        placeholder: 'Answer...',
                        audioAllowed: !1
                    })
                })
            ]
        });
    };
}), c.register('8+kxN', function(b, x) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('ECQaz'),
        g = c('h99Nu'),
        h = c('s/4yx'),
        i = c('OIAFH'),
        j = c('Cadqq'),
        k = c('IsmrL'),
        l = c('YfLmS'),
        m = c('gBQ22'),
        n = c('qLhB38'),
        o = c('jrukz'),
        p = c('PjB0f'),
        q = c('VsZIM'),
        r = c('N1uqT'),
        s = c('5WxMK');
    let t;
    var u = a => {
        const [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState(!1), [B, C, D] = (0, p.useBoolean)(!1), E = () => w(!0), F = () => y(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(v, {
                    children: [
                        (0, d.jsx)(f.default, {
                            value: a.text,
                            onTextChange: v => {
                                a.onTextChange(v);
                            },
                            disabled: !a.textAllowed,
                            placeholder: a.placeholder
                        }),
                        (0, d.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                !a.image && a.imageAllowed && (0, d.jsx)(l.default, {
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
                                a.image && (0, d.jsx)(n.default, {
                                    image: a.image,
                                    size: 38,
                                    blockModalOpen: !0,
                                    onClick: E,
                                    showBorder: !0,
                                    style: {
                                        marginLeft: 4
                                    }
                                }),
                                a.audioAllowed && (0, d.jsx)(l.default, {
                                    title: a.audio ? 'Audio' : 'Add Audio',
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
                                a.latexAllowed && (0, d.jsx)(l.default, {
                                    title: a.latex ? 'Equation' : 'Add Equation',
                                    children: (0, d.jsx)(k.default, {
                                        onClick: C,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, d.jsx)(j.default, {
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
                (0, d.jsx)(m.default, {
                    visible: v,
                    close: () => w(!1),
                    currentImage: a.image,
                    onImageChange: v => {
                        a.onImageChange(v);
                    }
                }),
                (0, d.jsx)(o.default, {
                    visible: x,
                    audio: a.audio,
                    close: F,
                    onAudioChanged: v => {
                        var G;
                        G = v, a.onAudioChange && a.onAudioChange(G), F();
                    }
                }),
                (0, d.jsx)(s.default, {
                    visible: B,
                    close: D,
                    onChange: v => {
                        a.onLatexChange && a.onLatexChange(v);
                    },
                    latex: a.latex
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
    const v = g.default.div(t || (t = (a => a)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 28px;
`));
}), c.register('QW8py', function(b, x) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('KzqIz'),
        f = c('bGe8V'),
        g = c('hczBu'),
        h = c('e6/Yt');
    var i = () => {
        const j = (0, e.useLocation)().pathname.endsWith('flashcard-home');
        return (0, d.jsx)(h.default, {
            visible: j,
            close: () => (0, g.default)(f.editorBase)
        });
    };
}), c.register('e6/Yt', function(b, x) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('SXM9i'),
        i = c('Y0KLM'),
        j = c('f9f+a'),
        k = c('ExtIT'),
        l = c('cR5QE'),
        m = c('lmfrI'),
        n = c('gSUVO'),
        o = c('bGe8V'),
        p = c('Vlfxs'),
        q = c('k0s2g17');
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
        constructor(...a) {
            super(...a), (0, d.default)(this, 'createFlashcards', () => (0, q.NavigateTo)((0, o.createWithFlashcards)(this.props.kitDetails.id))), (0, d.default)(this, 'importFlashcards', () => (0, q.NavigateTo)((0, o.flashcardImport)(this.props.kitDetails.id)));
        }
    };
    r = (0, e.__decorate)([
        (0, p.inject)('kitDetails'),
        p.observer
    ], r);
    var s = t;
}), c.register('Ax1Az', function(b, x) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('uPP4W'),
        g = c('bGe8V'),
        h = c('hczBu'),
        i = c('h99Nu'),
        j = c('lmfrI'),
        k = c('gSUVO'),
        l = c('LUCuz'),
        m = c('LZ08A'),
        n = c('BYU7u'),
        o = c('Vlfxs'),
        p = c('mjxQl'),
        q = c('PjB0f'),
        r = c('KzqIz');
    let s;
    var t = (0, o.observer)(() => {
        const {
            kitCollab: u
        } = f.useContext(p.default), v = (0, r.useLocation)(), w = f.useMemo(() => v.pathname.endsWith('kit-collab'), [v.pathname]);
        f.useEffect(() => {
            u.panelOpen = !!w;
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
                    children: (0, d.jsx)(u, {
                        children: (0, q.isStudent)() ? null : u.enabled ? (0, d.jsx)(l.default, {}) : (0, d.jsx)(m.default, {})
                    })
                }),
                (0, d.jsx)(n.default, {})
            ]
        });
    });
    const u = i.default.div.attrs({
        className: 'maxWidth'
    })(s || (s = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro);
}), c.register('LUCuz', function(b, v) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('BIBUV'),
        g = c('caQNz'),
        h = c('ExtIT'),
        i = c('iHElh'),
        j = c('9ffuI'),
        k = c('ESGKT'),
        l = c('PjB0f'),
        m = c('5D2NI'),
        n = c('Vlfxs'),
        o = c('mjxQl'),
        p = c('aox4D'),
        q = c('cBb/w');
    var r = (0, n.observer)(() => {
        const {
            kitCollab: s,
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
                        s.hasFetchedFirstBatchOfQuestions ? s.questions.length ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsx)(q.default, {
                                children: s.questions.map(u => (0, d.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, d.jsx)(j.default, {
                                        id: u._id,
                                        question: u.question,
                                        creatorName: u.creatorName,
                                        kitId: t.id,
                                        sessionId: s.sessionId
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
}), c.register('BIBUV', function(w, x) {
    a(w.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('c6x8w'),
        g = c('jrTkz0'),
        h = c('PjB0f'),
        i = c('SlNZ027'),
        j = c('Vlfxs'),
        k = c('uPP4W'),
        l = c('h99Nu'),
        m = c('mjxQl'),
        n = c('iCngL');
    let o, p, q, r, s = a => a;
    var t = (0, j.observer)(() => {
        const [u, v, w] = (0, h.useBoolean)(!1), {
            kitCollab: x
        } = k.useContext(m.default), y = `${ (0, h.getDomain)() }/kit-collab/${ x.sessionId }`, z = k.useCallback(() => {
            b(i)(y), g.default.success('KitCollab link copied!');
        }, [y]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(u, {
                    children: [
                        (0, d.jsx)(v, {
                            children: 'Share the KitCollab link with anybody you want to contribute questions. Once they submit their questions, you\'ll see them pop up here for you to approve or reject.'
                        }),
                        (0, d.jsxs)(w, {
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
                                (0, d.jsxs)(x, {
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
                    visible: u,
                    close: w
                })
            ]
        });
    });
    const u = l.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = s`
  margin-top: 15px;
`)),
        v = l.default.div(p || (p = s`
  font-size: 18px;
`)),
        w = l.default.div.attrs({
            className: 'flex-column'
        })(q || (q = s`
  margin-top: 20px;
`)),
        x = l.default.div.attrs({
            className: 'maxWidth flex vc'
        })(r || (r = s`
  margin-top: 10px;
`));
}), c.register('jrTkz0', function(b, t) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('P7Ub/'),
        e = c('4NqVP'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('adaSF0'),
        i = c('iqCjv0'),
        j = c('8wYO1');
    let k = null,
        l = a => a(),
        m = [],
        n = {};
    const o = f.forwardRef((a, b) => {
        const p = () => {
                const {
                    prefixCls: q,
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
                    } = C;
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
                    prefixCls: q,
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
        return f.useEffect(x, []), f.useImperativeHandle(b, () => {
            const y = Object.assign({}, s);
            return Object.keys(y).forEach(b => {
                y[b] = function() {
                    return x(), s[b].apply(s, arguments);
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
        k.instance && (m.forEach(a => {
            const {
                type: q,
                skipped: r
            } = s;
            if (!r)
                switch (q) {
                    case 'open':
                        l(() => {
                            const t = k.instance.open(Object.assign(Object.assign({}, n), s.config));
                            null == t || t.then(s.resolve), s.setCloseFn(t);
                        });
                        break;
                    case 'destroy':
                        l(() => {
                            null == k || k.instance.destroy(s.key);
                        });
                        break;
                    default:
                        l(() => {
                            var t;
                            const u = (t = k.instance)[q].apply(t, (0, d.default)(s.args));
                            null == u || u.then(s.resolve), s.setCloseFn(u);
                        });
                }
        }), m = []);
    }

    function q(a, b) {
        const r = (0, j.wrapPromiseFn)(r => {
            let s;
            const t = {
                type: a,
                args: b,
                resolve: r,
                setCloseFn: a => {
                    s = a;
                }
            };
            return m.push(t), () => {
                s ? l(() => {
                    s();
                }) : t.skipped = !0;
            };
        });
        return p(), r;
    }
    const r = {
        open: function(a) {
            const s = (0, j.wrapPromiseFn)(s => {
                let t;
                const u = {
                    type: 'open',
                    config: a,
                    resolve: s,
                    setCloseFn: a => {
                        t = a;
                    }
                };
                return m.push(u), () => {
                    t ? l(() => {
                        t();
                    }) : u.skipped = !0;
                };
            });
            return p(), s;
        },
        destroy: function(a) {
            m.push({
                type: 'destroy',
                key: a
            }), p();
        },
        config: function(a) {
            n = Object.assign(Object.assign({}, n), a), l(() => {
                var s;
                null === (s = null == k ? void 0 : k.sync) || void 0 === s || s.call(k);
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
    ].forEach(a => {
        r[a] = function() {
            for (var s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                t[u] = arguments[u];
            return q(a, t);
        };
    });
    var s = t;
}), c.register('adaSF0', function(p, q) {
    a(p.exports, 'TypeIcon', function() {
        return o;
    }, function(a) {
        return o = a;
    }), a(p.exports, 'PureContent', function() {
        return p;
    }, function(a) {
        return p = a;
    }), a(p.exports, 'default', function() {
        return q;
    }, function(a) {
        return q = a;
    });
    var d = c('uPP4W'),
        e = c('TyHdy'),
        f = c('3QPei'),
        g = c('PAFXG'),
        h = c('fTLdQ'),
        i = c('D3laK'),
        j = c('BLIEh'),
        k = c('VAIs1'),
        l = c('PByzs0'),
        m = c('qEw51'),
        n = function(a, b) {
            var o = {};
            for (var p in a)
                Object.prototype.hasOwnProperty.call(a, p) && b.indexOf(p) < 0 && (o[p] = a[p]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(a); q < p.length; q++)
                    b.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(a, p[q]) && (o[p[q]] = a[p[q]]);
            }
            return o;
        };
    const o = {
        info: d.createElement(i.default, null),
        success: d.createElement(h.default, null),
        error: d.createElement(g.default, null),
        warning: d.createElement(f.default, null),
        loading: d.createElement(e.default, null)
    };

    function p(a) {
        let {
            prefixCls: q,
            type: r,
            icon: s,
            children: t
        } = u;
        return d.createElement('div', {
            className: b(k)(`${ q }-custom-content`, `${ q }-${ r }`)
        }, s || o[r], d.createElement('span', null, t));
    }

    function q(a) {
        const {
            prefixCls: r,
            className: s,
            type: t,
            icon: u,
            content: v
        } = w, x = n(w, [
            'prefixCls',
            'className',
            'type',
            'icon',
            'content'
        ]), {
            getPrefixCls: y
        } = d.useContext(m.ConfigContext), z = r || y('message'), [, A] = (0, l.default)(z);
        return d.createElement(j.Notice, Object.assign({}, x, {
            prefixCls: z,
            className: b(k)(s, A, `${ z }-notice-pure-panel`),
            eventKey: 'pure',
            duration: null,
            content: d.createElement(p, {
                prefixCls: z,
                type: t,
                icon: u
            }, v)
        }));
    }
}), c.register('PByzs0', function(b, k) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
    const h = a => {
        const {
            componentCls: i,
            iconCls: j,
            boxShadow: k,
            colorBgElevated: l,
            colorSuccess: m,
            colorError: n,
            colorWarning: o,
            colorInfo: p,
            fontSizeLG: q,
            motionEaseInOutCirc: r,
            motionDurationSlow: s,
            marginXS: t,
            paddingXS: u,
            borderRadiusLG: v,
            zIndexPopup: w,
            messageNoticeContentPadding: x
        } = y, z = new(0, d.Keyframes)('MessageMoveIn', {
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
        }), A = new(0, d.Keyframes)('MessageMoveOut', {
            '0%': {
                maxHeight: y.height,
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
                [i]: Object.assign(Object.assign({}, (0, g.resetComponent)(y)), {
                    position: 'fixed',
                    top: t,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: w,
                    [`${ i }-move-up`]: {
                        animationFillMode: 'forwards'
                    },
                    [`\n        ${ i }-move-up-appear,\n        ${ i }-move-up-enter\n      `]: {
                        animationName: z,
                        animationDuration: s,
                        animationPlayState: 'paused',
                        animationTimingFunction: r
                    },
                    [`\n        ${ i }-move-up-appear${ i }-move-up-appear-active,\n        ${ i }-move-up-enter${ i }-move-up-enter-active\n      `]: {
                        animationPlayState: 'running'
                    },
                    [`${ i }-move-up-leave`]: {
                        animationName: A,
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
                        color: o
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
    var i = (0, e.default)('Message', a => {
        const j = (0, f.merge)(a, {
            messageNoticeContentPadding: `${ (a.controlHeightLG - a.fontSize * a.lineHeight) / 2 }px ${ a.paddingSM }px`
        });
        return [h(j)];
    }, a => ({
        height: 150,
        zIndexPopup: a.zIndexPopupBase + 10
    }));
}), c.register('iqCjv0', function(n, o) {
    a(n.exports, 'useInternalMessage', function() {
        return v;
    }, function(a) {
        return v = a;
    }), a(n.exports, 'default', function() {
        return w;
    }, function(a) {
        return w = a;
    });
    var d = c('uPP4W'),
        e = c('BLIEh'),
        f = c('VAIs1'),
        g = c('obWo+'),
        h = c('qEw51'),
        i = c('PByzs0'),
        j = c('8wYO1'),
        k = c('adaSF0'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = 3,
        n = d.forwardRef((a, c) => {
            const {
                top: o,
                prefixCls: p,
                getContainer: q,
                maxCount: r,
                duration: s = t,
                rtl: u,
                transitionName: v,
                onAllRemoved: w
            } = x, {
                getPrefixCls: y,
                getPopupContainer: z
            } = d.useContext(h.ConfigContext), A = p || y('message'), [, B] = (0, i.default)(A), C = d.createElement('span', {
                className: `${ A }-close-x`
            }, d.createElement(g.default, {
                className: `${ A }-close-icon`
            })), [D, E] = (0, e.useNotification)({
                prefixCls: A,
                style: () => ({
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: null != o ? o : 8
                }),
                className: () => b(f)(B, u ? `${ A }-rtl` : ''),
                motion: () => (0, j.getMotion)(A, v),
                closable: !1,
                closeIcon: C,
                duration: s,
                getContainer: () => (null == q ? void 0 : q()) || (null == z ? void 0 : z()) || document.body,
                maxCount: r,
                onAllRemoved: w
            });
            return d.useImperativeHandle(c, () => Object.assign(Object.assign({}, D), {
                prefixCls: A,
                hashId: B
            })), E;
        });
    let o = 0;

    function p(a) {
        const q = d.useRef(null);
        return [
            d.useMemo(() => {
                const r = r => {
                        var s;
                        null === (s = q.current) || void 0 === s || s.close(r);
                    },
                    s = s => {
                        if (!q.current) {
                            const t = () => {};
                            return t.then = () => {}, t;
                        }
                        const {
                            open: t,
                            prefixCls: u,
                            hashId: v
                        } = q.current, w = `${ u }-notice`, {
                            content: x,
                            icon: y,
                            type: z,
                            key: A,
                            className: B,
                            onClose: C
                        } = D, E = l(D, [
                            'content',
                            'icon',
                            'type',
                            'key',
                            'className',
                            'onClose'
                        ]);
                        let F = G;
                        return null == F && (o += 1, F = `antd-message-${ o }`), (0, j.wrapPromiseFn)(q => (t(Object.assign(Object.assign({}, E), {
                            key: F,
                            content: d.createElement(k.PureContent, {
                                prefixCls: u,
                                type: z,
                                icon: y
                            }, x),
                            placement: 'top',
                            className: b(f)(z && `${ w }-${ z }`, v, B),
                            onClose: () => {
                                null == C || C(), q();
                            }
                        })), () => {
                            r(F);
                        }));
                    },
                    t = {
                        open: s,
                        destroy: b => {
                            var u;
                            void 0 !== b ? r(b) : null === (u = q.current) || void 0 === u || u.destroy();
                        }
                    };
                return [
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].forEach(r => {
                    t[r] = (b, q, t) => {
                        let u, v, w;
                        u = b && 'object' == typeof b && 'content' in b ? b : {
                            content: b
                        }, 'function' == typeof q ? w = q : (v = q, w = t);
                        const x = Object.assign(Object.assign({
                            onClose: w,
                            duration: v
                        }, u), {
                            type: r
                        });
                        return s(x);
                    };
                }), t;
            }, []),
            d.createElement(n, Object.assign({
                key: 'message-holder'
            }, a, {
                ref: q
            }))
        ];
    }

    function q(a) {
        return p(a);
    }
}), c.register('8wYO1', function(b, c) {
    function d(a, b) {
        return {
            motionName: null != b ? b : `${ a }-move-up`
        };
    }

    function e(a) {
        let f;
        const g = new Promise(g => {
                f = a(() => {
                    g(!0);
                });
            }),
            h = () => {
                null == f || f();
            };
        return h.then = (a, f) => g.then(a, f), h.promise = g, h;
    }
    a(b.exports, 'getMotion', function() {
        return d;
    }), a(b.exports, 'wrapPromiseFn', function() {
        return e;
    });
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('iCngL', function(b, v) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('cR5QE'),
        f = c('uPP4W');
    const g = f.lazy(() => c('6t/BA'));
    var h = a => (0, d.jsx)(e.default, {
        open: a.visible,
        onCancel: a.close,
        footer: null,
        closable: !0,
        children: (0, d.jsx)('div', {
            className: 'maxAll flex-center',
            children: (0, d.jsx)(f.Suspense, {
                fallback: null,
                children: (0, d.jsx)(g, {
                    link: a.link
                })
            })
        })
    });
}), c.register('6t/BA', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('7pIGN')),
        import('./' + c('tIOy4').resolve('i8Pm1'))
    ]).then(() => c('VILz5'));
}), c.register('caQNz', function(b, v) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('iMnBi'),
        h = c('iYEuk12');
    let i, j, k, l = a => a;
    var m = a => (0, d.jsxs)(n, {
        children: [
            (0, d.jsx)(o, {
                children: 'KitCollab'
            }),
            (0, d.jsx)(p, {
                onClick: a.openSettings,
                children: (0, d.jsx)(g.default, {
                    name: 'fas fa-cog',
                    style: {
                        color: '#616161'
                    }
                })
            })
        ]
    });
    const n = e.default.div.attrs({
            className: 'flex maxWidth between'
        })(i || (i = l`
  line-height: 1;
  margin-top: 10px;
  align-items: flex-start;
`)),
        o = e.default.div(j || (j = l`
  font-size: 42px;
  font-weight: ${ 0 };
`), f.FontWeights.UltraBold),
        p = (0, e.default)(h.default)(k || (k = l`
  font-size: 24px;
`));
}), c.register('9ffuI', function(b, v) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('lnkpW'),
        f = c('IsmrL'),
        g = c('oczPp'),
        h = c('uPP4W'),
        i = c('h99Nu'),
        j = c('gSUVO'),
        k = c('LClbP'),
        l = c('Vlfxs'),
        m = c('mjxQl'),
        n = c('PjB0f');
    let o, p, q = a => a;
    var r = (0, l.observer)(a => {
        const {
            id: s
        } = t, {
            kitCollab: u
        } = h.useContext(m.default), [v, w, x] = (0, n.useBoolean)(!1), y = {
            _id: `q-${ s }`,
            text: t.question.text,
            type: t.question.type,
            answers: t.question.answers.map((t, u) => ({
                _id: `${ s }-answer-${ u }`,
                correct: t.correct,
                text: t.text
            }))
        }, z = s => {
            (0, n.request)({
                url: '/api/kitcollab/question/action',
                data: {
                    sessionId: t.sessionId,
                    questionId: t.id,
                    accepted: s
                }
            });
        }, A = () => {
            u.questions.replace(u.questions.filter(s => s._id !== t.id)), u.waitingQuestions = u.questions.length;
        };
        return (0, d.jsx)(g.default, {
            question: y,
            showAllAnswers: !0,
            blockToggleShowAnswers: !0,
            customStyle: {
                marginBottom: 20
            },
            customBottomComponent: (0, d.jsxs)(s, {
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, d.jsx)(f.default, {
                                type: 'primary',
                                onClick: () => {
                                    v || (w(), z(!0), (0, k.default)([{
                                        questionText: y.text,
                                        type: y.type,
                                        answers: y.answers.map(t => ({
                                            text: t.text,
                                            correct: t.correct,
                                            textType: t.textType
                                        })),
                                        source: 'collab',
                                        kitId: t.kitId
                                    }], () => {
                                        x(), A();
                                    }, {
                                        stay: !0
                                    }));
                                },
                                loading: v,
                                icon: (0, d.jsx)(e.default, {}),
                                children: 'Add To Kit'
                            }),
                            (0, d.jsx)(f.default, {
                                danger: !0,
                                type: 'primary',
                                onClick: () => {
                                    z(!1), A();
                                },
                                style: {
                                    marginLeft: 5
                                },
                                children: 'Reject'
                            })
                        ]
                    }),
                    (0, d.jsxs)(t, {
                        children: [
                            'Submitted by',
                            ' ',
                            (0, d.jsx)('span', {
                                style: {
                                    fontWeight: j.FontWeights.Bold
                                },
                                children: t.creatorName
                            })
                        ]
                    })
                ]
            })
        });
    });
    const s = i.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = q`
  margin-top: 16px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  line-height: 1;
`)),
        t = i.default.div(p || (p = q`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`));
}), c.register('ESGKT', function(b, D) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI');
    c('uPP4W');
    var f = c('h99Nu');
    let g, h, i, j = a => a;
    var k = () => (0, d.jsxs)(l, {
        children: [
            (0, d.jsx)(m, {}),
            (0, d.jsx)(n, {
                children: 'No questions to review. Once new questions are submitted, you\'ll find them here.'
            })
        ]
    });
    const l = f.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(g || (g = j`
  border-style: dashed;
  border-radius: 4px;
  border-color: ${ 0 };
  padding: 50px;
  border-width: 3px;
`), e.default.BorderGray),
        m = f.default.img.attrs({
            src: '/client/img/editor/empty.svg'
        })(h || (h = j`
  height: 50px;
`)),
        n = f.default.div(i || (i = j`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  color: #263238;
`));
}), c.register('5D2NI', function(b, D) {
    a(b.exports, 'default', function() {
        return A;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('ExtIT'),
        g = c('KV+OV'),
        h = c('jrTkz0'),
        i = c('cR5QE'),
        j = c('i0MGm'),
        k = c('h99Nu'),
        l = c('lmfrI'),
        m = c('iYEuk12'),
        n = c('gSUVO'),
        o = c('q721a'),
        p = c('PjB0f'),
        q = c('Vlfxs'),
        r = c('mjxQl'),
        s = c('hczBu'),
        t = c('bGe8V');
    let u, v, w, x, y, z = a => a;
    var A = (0, q.observer)(a => {
        const {
            kitCollab: B
        } = e.useContext(r.default), [C, D, E] = (0, p.useBoolean)(!1);
        return (0, d.jsx)(g.default, {
            open: a.open,
            onClose: a.close,
            width: 500,
            closable: !0,
            children: (0, d.jsxs)(B, {
                children: [
                    (0, d.jsxs)(C, {
                        children: [
                            (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        children: 'Private KitCollab'
                                    }),
                                    (0, d.jsxs)(F, {
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
                                            }), a.close();
                                        },
                                        error: a => (0, p.throwMessageError)({
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
                                                error: a => {
                                                    (0, p.throwMessageError)({
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
    const B = k.default.div(u || (u = z`
  color: ${ 0 };
  font-family: ${ 0 };
  font-size: 18px;
  padding-top: 35px;
`), l.default.Black, n.Fonts.SFPro),
        C = k.default.div.attrs({
            className: 'flex vc'
        })(v || (v = z``)),
        D = k.default.div(w || (w = z`
  margin-right: 40px;
`)),
        E = k.default.div(x || (x = z`
  font-size: 24px;
  font-weight: ${ 0 };
`), n.FontWeights.Bold),
        F = k.default.div(y || (y = z``));
}), c.register('aox4D', function(b, v) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('unMLU');
    var f = () => {
        e.default.kitCollab.sessionId && (0, d.request)({
            url: `/api/kitcollab/questions/${ e.default.kitCollab.sessionId }`,
            success: a => {
                e.default.kitCollab.questions.replace(a);
            },
            both: () => {
                e.default.kitCollab.hasFetchedFirstBatchOfQuestions = !0;
            }
        });
    };
}), c.register('LZ08A', function(b, v) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('ExtIT'),
        g = c('gSUVO'),
        h = c('PjB0f'),
        i = c('Vlfxs'),
        j = c('uPP4W'),
        k = c('h99Nu'),
        l = c('mjxQl');
    let m, n, o, p, q = a => a;
    var r = (0, i.observer)(() => {
        const {
            kitDetails: {
                id: s
            },
            kitCollab: t
        } = j.useContext(l.default), [u, v, w] = (0, h.useBoolean)(!1);
        return (0, d.jsxs)(s, {
            children: [
                (0, d.jsx)(t, {}),
                (0, d.jsx)(u, {
                    children: 'KitCollab'
                }),
                (0, d.jsx)(v, {
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
                                gameId: s
                            },
                            success: s => {
                                t.sessionId = s, t.enabled = !0;
                            },
                            error: s => {
                                (0, h.throwMessageError)({
                                    e: s,
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
    const s = k.default.div.attrs({
            className: 'flex-center flex-column maxAll'
        })(m || (m = q``)),
        t = k.default.img.attrs({
            src: '/client/img/editor/kitcollab.svg'
        })(n || (n = q`
  height: 140px;
`)),
        u = k.default.div(o || (o = q`
  font-size: 48px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), g.FontWeights.UltraBold),
        v = k.default.div(p || (p = q`
  font-size: 18px;
  margin-top: 2px;
`));
}), c.register('BYU7u', function(b, k) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('Vlfxs'),
        e = c('uPP4W'),
        f = c('ZHCLs'),
        g = c('uIVkr'),
        h = c('mjxQl'),
        i = c('aox4D');
    var j = (0, d.observer)(() => {
        const {
            kitCollab: k
        } = e.useContext(h.default);
        e.useEffect(() => {
            (0, f.default)();
        }, []);
        return (0, g.useIntervalWhen)(() => {
            k.panelOpen && k.enabled && k.sessionId && (0, i.default)();
        }, 5000), (0, g.useIntervalWhen)(() => {
            !k.panelOpen && k.sessionId && (0, f.default)();
        }, 10000), null;
    });
}), c.register('ZHCLs', function(b, k) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('unMLU');
    var f = () => {
        (0, d.isStudent)() || (0, d.request)({
            url: `/api/kitcollab/session/${ e.default.kitDetails.id }`,
            success: a => {
                e.default.kitCollab.sessionId = a.sessionId, e.default.kitCollab.enabled = !0, e.default.kitCollab.waitingQuestions = a.questions, e.default.kitCollab.isPublic = a.isPublic;
            },
            error: () => {
                e.default.kitCollab.sessionId = '', e.default.kitCollab.enabled = !1, e.default.kitCollab.waitingQuestions = 0;
            }
        });
    };
}), c.register('uIVkr', function(b, k) {
    a(b.exports, 'useIntervalWhen', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a, b, c, k) {
        void 0 === b && (b = 0), void 0 === c && (c = !0), void 0 === k && (k = !1);
        var f = (0, d.useRef)();

        function g() {
            f.current && f.current();
        }
        (0, d.useEffect)(function() {
            f.current = a;
        }), (0, d.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (c) {
                    k && g();
                    var h = window.setInterval(g, b);
                    return function() {
                        window.clearInterval(h);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            c,
            b
        ]);
    }
}), c.register('oXgmH', function(b, k) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('cR5QE'),
        i = c('HULBb'),
        j = c('xgdF8'),
        k = c('Vlfxs'),
        l = c('PjB0f'),
        m = c('unMLU'),
        n = c('bGe8V'),
        o = c('hczBu'),
        p = c('q721a'),
        q = c('k0s2g17'),
        r = c('CJCMN4');
    let s;
    var t;
    (t = s || (s = {})).details = 'details', t.image = 'image';
    let u = class extends g.Component {
        componentDidMount() {
            this.props.kitDetails.id && (0, q.NavigateTo)(p.DASHBOARD);
        }
        render() {
            return (0, f.jsx)('div', {
                children: (0, f.jsx)(h.default, {
                    open: !0,
                    style: {
                        top: 20
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsxs)('div', {
                        style: {
                            height: 510
                        },
                        className: 'disable-scrollbars scroll',
                        children: [
                            this.state.stage === s.details && (0, f.jsx)(i.default, {
                                onNext: this.onKitDetails
                            }),
                            this.state.stage === s.image && (0, f.jsx)(j.default, {
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
            super(...a), (0, d.default)(this, 'state', {
                stage: s.details,
                creatingKit: !1,
                createdKit: !1
            }), (0, d.default)(this, 'onKitDetails', () => {
                this.switchToImageScreen();
            }), (0, d.default)(this, 'onImagePicked', a => {
                this.state.createdKit || this.state.creatingKit || (this.setState({
                    creatingKit: !0
                }), this.props.kitDetails.image = a, (0, l.request)({
                    url: '/api/v1/editor/create',
                    method: 'POST',
                    data: {
                        title: this.props.kitDetails.title,
                        image: a,
                        gradeLevel: this.props.kitDetails.gradeLevel,
                        language: this.props.kitDetails.language,
                        subject: this.props.kitDetails.subject,
                        isPrivate: (0, l.isStudent)()
                    },
                    success: a => {
                        (0, r.AnalyticsTrackEvent)({
                            event: 'kit_created'
                        }), this.setState({
                            createdKit: !0
                        });
                        const {
                            kitDetails: v,
                            editor: w
                        } = m.default;
                        w.editSessionCounted = !0, v.id = a._id, v.title = a.title, v.image = a.image, v.language = a.lang, v.gradeLevel = a.gradeLevel, v.privacy = a.privacy, (0, o.default)(n.editorBase);
                    },
                    error: a => h.default.error({
                        title: 'Error Creating Kit',
                        content: a && a.message && a.message.text ? a.message.text : 'Please try again'
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
    var v = w;
}), c.register('CJCMN4', function(b, k) {
    a(b.exports, 'AnalyticsTrackEvent', function() {
        return h;
    });
    var d = c('pvZv3'),
        e = c('PjB0f'),
        f = c('61G7M'),
        g = c('OW/xn');
    const h = a => {
        var i, j, k;
        if ((window.gtag && !(null === (i = a.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', a.event, a.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = a.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('k6F40', function(b, d) {
    a(b.exports, 'useWillUnmount', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        (0, d.useEffect)(function() {
            return a;
        }, []);
    }
}), c.register('avBUI3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('oImfG3'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PaperClipOutlined';
    var i = e.forwardRef(h);
}), c.register('oImfG3', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('2Hg8W4', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Yt9re4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Yt9re4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
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
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
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
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
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
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
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
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = arguments.length; f < g; f++)
                    for (var h in e = arguments[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, arguments);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
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
        return h.useLayoutEffect(function() {
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
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('QzKef2', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('+98NM'),
        f = c('uPP4W');
    const g = f.lazy(() => c('nRwdv4'));
    var h = a => {
        const i = a.hideSkeleton ? (0, d.jsx)('div', {
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
                ...a
            })
        });
    };
}), c.register('nRwdv4', function(a, b) {
    a.exports = Promise.all([
        c('wqdSG')(new URL(c('tIOy4').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('tIOy4').resolve('6iUO5'))
    ]).then(() => c('NBVgF'));
}), c.register('Ftbrq', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('U2LJa'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ClockCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('U2LJa', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('js2PD', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kd1D+'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'TrophyOutlined';
    var i = e.forwardRef(h);
}), c.register('Kd1D+', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('0iTfX', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('0wOVz', function(b, c) {
    a(b.exports, 'CLASSIC', function() {
        return d;
    }), a(b.exports, 'TEAMS', function() {
        return e;
    }), a(b.exports, 'THANOS', function() {
        return f;
    }), a(b.exports, 'BOSS_BATTLE', function() {
        return g;
    }), a(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return h;
    }), a(b.exports, 'LAVA', function() {
        return i;
    }), a(b.exports, 'IMPOSTER', function() {
        return j;
    }), a(b.exports, 'DRAW', function() {
        return k;
    }), a(b.exports, 'PARDY', function() {
        return l;
    });
    const d = 'CLASSIC',
        e = 'TEAMS',
        f = 'THANOS',
        g = 'BOSS_BATTLE',
        h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        i = 'LAVA',
        j = 'IMPOSTER',
        k = 'DRAW',
        l = 'PARDY';
}), c.register('uzjvO4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), c.register('bdX0N23', function(b, d) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('+WQL73', function(b, c) {
    let d;
    var e;
    a(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = arguments.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = arguments[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
}), c.register('fgVTE0', function(b, n) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('b5p1k12'),
        e = c('lWzbN'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('LS7Qv'),
        h = c('knVNm'),
        i = c('l/I4j'),
        j = 44;

    function k(a) {
        var l, m, n;
        return l = a, m = 0, n = 1, a = (Math.min(Math.max(m, l), n) - m) / (n - m), a = (a -= 1) * a * a + 1;
    }
    var l = f.forwardRef(function(a, b) {
            var m, n = a.classes,
                o = a.className,
                p = a.color,
                q = void 0 === p ? 'primary' : p,
                r = a.disableShrink,
                s = void 0 !== r && r,
                t = a.size,
                u = void 0 === t ? 40 : t,
                v = a.style,
                w = a.thickness,
                x = void 0 === w ? 3.6 : w,
                y = a.value,
                z = void 0 === y ? 0 : y,
                A = a.variant,
                B = void 0 === A ? 'indeterminate' : A,
                C = (0, e.default)(a, [
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
                D = {},
                E = {},
                F = {};
            if ('determinate' === B || 'static' === B) {
                var G = 2 * Math.PI * ((j - x) / 2);
                D.strokeDasharray = G.toFixed(3), F['aria-valuenow'] = Math.round(z), 'static' === B ? (D.strokeDashoffset = ''.concat(((100 - z) / 100 * G).toFixed(3), 'px'), E.transform = 'rotate(-90deg)') : (D.strokeDashoffset = ''.concat((m = (100 - z) / 100, m * m * G).toFixed(3), 'px'), E.transform = 'rotate('.concat((270 * k(z / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(n.root, o, 'inherit' !== q && n['color'.concat((0, i.default)(q))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [B]),
                style: (0, d.default)({
                    width: u,
                    height: u
                }, E, v),
                ref: b,
                role: 'progressbar'
            }, F, C), f.createElement('svg', {
                className: n.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(n.circle, s && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [B]),
                style: D,
                cx: j,
                cy: j,
                r: (j - x) / 2,
                fill: 'none',
                strokeWidth: x
            })));
        }),
        m = (0, h.default)(function(a) {
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
        })(l);
}), c.register('fzOja2', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Nsg/l3'),
        g = c('PjB0f');
    var h = a => {
        const [i, j] = e.useState([]), [k] = e.useState(a.limit), [l, m] = e.useState(a.defaultPage), [n, o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (a.modifyItems ? a.modifyItems(p) : p).map((i, j) => a.toRender(i, j)), [
            p.length,
            a.toRender
        ]), u = () => {
            if (i.includes(l))
                return;
            j(a => [
                ...a,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: a.url,
                method: 'post',
                cacheKey: a.cacheKey,
                data: a.modifyBody ? a.modifyBody(v) : v,
                success: (i, j) => {
                    a.onTotalItems && !r && (a.onTotalItems(i.totalItems), s(!0)), i.items.forEach(i => {
                        a.onItemFetched && a.onItemFetched(i, j);
                    }), q(a => [
                        ...a,
                        ...i.items
                    ]), o(i.hasNextPage), m(i.nextPage);
                },
                error: () => {
                    a.onTotalItems && !r && (a.onTotalItems(0), s(!0)), o(!1);
                },
                both: () => j(a => a.filter(a => a !== v.page))
            });
        };
        return e.useEffect(u, []), !n && a.forceEmptyMessage || !n && 0 === p.length && a.emptyMessage ? a.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: a.scrollStyle,
            next: u,
            loader: a.loader || (0, d.jsx)('div', {}),
            scrollThreshold: a.scrollThreshold,
            endMessage: a.endMessage ? a.endMessage(p) : null,
            scrollableTarget: a.scrollableTarget,
            children: [
                a.prefix ? a.prefix() : null,
                t
            ]
        });
    };
}), c.register('FfkIK1', function(b, l) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI');
    let g;
    var h = a => (0, d.jsx)(i, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const i = e.default.div(g || (g = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), c.register('zZ+yD1', function(b, l) {
    a(b.exports, 'GetHomepagePath', function() {
        return h;
    }), a(b.exports, 'RedirectToHomepage', function() {
        return i;
    }), a(b.exports, 'ReplaceToHomePage', function() {
        return j;
    });
    var d = c('q721a'),
        e = c('Cr/BM'),
        f = c('PjB0f'),
        g = c('k0s2g17');
    const h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        i = () => {
            (0, g.NavigateTo)(h());
        },
        j = () => {
            e.history.replace(h());
        };
}), c.register('DksGO1', function(b, l) {
    a(b.exports, 'UpgradeModal_CopyKit', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('0wLl2');
    const f = {
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
}), c.register('eb1oQ2', function(b, l) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');

    function e() {
        const [, f] = d.useReducer(f => f + 1, 0);
        return f;
    }
}), c.register('hulaC5', function(l, m) {
    a(l.exports, 'responsiveArray', function() {
        return f;
    }), a(l.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('ffwc8');
    const f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function g() {
        const [, h] = (0, e.useToken)(), i = (h => ({
            xs: `(max-width: ${ h.screenXSMax }px)`,
            sm: `(min-width: ${ h.screenSM }px)`,
            md: `(min-width: ${ h.screenMD }px)`,
            lg: `(min-width: ${ h.screenLG }px)`,
            xl: `(min-width: ${ h.screenXL }px)`,
            xxl: `(min-width: ${ h.screenXXL }px)`
        }))((h => {
            const j = k,
                l = [].concat(f).reverse();
            return l.forEach((k, l) => {
                const m = k.toUpperCase(),
                    n = `screen${ m }Min`,
                    o = `screen${ m }`;
                if (!(j[n] <= j[o]))
                    throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                if (l < l.length - 1) {
                    const p = `screen${ m }Max`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                    const q = `screen${ l[l + 1].toUpperCase() }Min`;
                    if (!(j[p] <= j[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ j[p] }<=${ j[q] })`);
                }
            }), k;
        })(h));
        return b(d).useMemo(() => {
            const j = new Map();
            let k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: k => (l = k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(i) {
                    return j.size || this.register(), k += 1, j.set(k, i), i(l), k;
                },
                unsubscribe(k) {
                    j.delete(k), j.size || this.unregister();
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
                                } = p;
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
        }, [h]);
    }
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('WLMeG2', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('EaBCj2'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ShareAltOutlined';
    var i = e.forwardRef(h);
}), c.register('EaBCj2', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('cgzA1', function(a, b) {
    'function' == typeof Object.create ? a.exports = function(a, b) {
        b && (a.super_ = b, a.prototype = Object.create(b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : a.exports = function(a, b) {
        if (b) {
            a.super_ = b;
            var d = function() {};
            d.prototype = b.prototype, a.prototype = new d(), a.prototype.constructor = a;
        }
    };
}), c.register('kMQjd3', function(b, h) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('GQAFg1');
    var f = a => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: a.className,
            children: a.children
        });
    };
}), c.register('GQAFg1', function(h, i) {
    a(h.exports, 'use100vh', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('uPP4W'),
        e = function() {
            return e = Object.assign || function(a) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (a[i] = f[i]);
                return a;
            }, e.apply(this, arguments);
        },
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        },
        g = !1,
        h = (0, d.forwardRef)(function(a, c) {
            var i = a.style,
                j = f(a, ['style']),
                k = i();
            !g && (null == i ? void 0 : i.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var l = e(e({}, i), {
                height: k ? k + 'px' : '100vh'
            });
            return b(d).createElement('div', e({
                ref: c,
                style: l
            }, j));
        });
    h.displayName = 'Div100vh';

    function i() {
        var j = (0, d.useState)(j),
            k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    k() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = j();
                l(o);
            }
        }, [m]), m ? k : null;
    }

    function j() {
        return k() ? window.innerHeight : null;
    }

    function k() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('8dKJo1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('ERk8t1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'SaveOutlined';
    var i = e.forwardRef(h);
}), c.register('ERk8t1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('bzteU5', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('edRUl4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var i = e.forwardRef(h);
}), c.register('edRUl4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('IsAdf', function(b, h) {
    a(b.exports, 'useQuery', function() {
        return g;
    });
    var d = c('pXMSO'),
        e = c('PX4Jh'),
        f = c('LEJ8c');

    function g(a, b, c) {
        const h = (0, d.parseQueryArgs)(a, b, c);
        return (0, f.useBaseQuery)(h, e.QueryObserver);
    }
}), c.register('PX4Jh', function(b, k) {
    a(b.exports, 'QueryObserver', function() {
        return i;
    });
    var d = c('pXMSO'),
        e = c('VvzNu'),
        f = c('t2COX'),
        g = c('pWcNG'),
        h = c('Ayt7A');
    class i extends g.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return r(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return r(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(a, b) {
            const j = this.options,
                k = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(a), (0, d.shallowEqualObjects)(j, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = j.queryKey), this.updateQuery();
            const l = this.hasListeners();
            l && n(this.currentQuery, k, this.options, j) && this.executeFetch(), this.updateResult(b), !l || this.currentQuery === k && this.options.enabled === j.enabled && this.options.staleTime === j.staleTime || this.updateStaleTimeout();
            const m = this.computeRefetchInterval();
            !l || this.currentQuery === k && this.options.enabled === j.enabled && m === this.currentRefetchInterval || this.updateRefetchInterval(m);
        }
        getOptimisticResult(a) {
            const j = this.client.getQueryCache().build(this.client, a);
            return this.createResult(j, a);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(a) {
            const j = {};
            return Object.keys(a).forEach(c => {
                Object.defineProperty(j, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(c), a[c])
                });
            }), j;
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
            const l = this.client.defaultQueryOptions(j),
                m = this.client.getQueryCache().build(this.client, l);
            return m.isFetchingOptimistic = !0, m.fetch().then(() => this.createResult(m, l));
        }
        fetch(j) {
            var l;
            return this.executeFetch({
                ...j,
                cancelRefetch: null == (l = j.cancelRefetch) || l
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(j) {
            this.updateQuery();
            let l = this.currentQuery.fetch(this.options, j);
            return null != j && j.throwOnError || (l = l.catch(d.noop)), l;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), d.isServer || this.currentResult.isStale || !(0, d.isValidTimeout)(this.options.staleTime))
                return;
            const m = (0, d.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, m);
        }
        computeRefetchInterval() {
            var n;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (n = this.options.refetchInterval) && n;
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
                r = q ? j.state : this.currentQueryInitialState,
                s = q ? this.currentResult : this.previousQueryResult,
                {
                    state: t
                } = u;
            let v, {
                    dataUpdatedAt: w,
                    error: x,
                    errorUpdatedAt: y,
                    fetchStatus: z,
                    status: A
                } = B,
                C = !1,
                D = !1;
            if (k._optimisticResults) {
                const E = this.hasListeners(),
                    F = !E && l(u, k),
                    G = E && n(u, l, k, m);
                (F || G) && (z = (0, h.canFetch)(u.options.networkMode) ? 'fetching' : 'paused', w || (A = 'loading')), 'isRestoring' === k._optimisticResults && (z = 'idle');
            }
            if (k.keepPreviousData && !B.dataUpdatedAt && null != s && s.isSuccess && 'error' !== A)
                v = s.data, w = s.dataUpdatedAt, A = s.status, C = !0;
            else if (k.select && void 0 !== B.data)
                if (n && B.data === (null == o ? void 0 : o.data) && k.select === this.selectFn)
                    v = this.selectResult;
                else
                    try {
                        this.selectFn = k.select, v = k.select(B.data), v = (0, d.replaceData)(null == n ? void 0 : n.data, v, k), this.selectResult = v, this.selectError = null;
                    } catch (u) {
                        this.selectError = u;
                    }
            else
                v = B.data;
            if (void 0 !== k.placeholderData && void 0 === v && 'loading' === A) {
                let E;
                if (null != n && n.isPlaceholderData && k.placeholderData === (null == p ? void 0 : p.placeholderData))
                    E = n.data;
                else if (E = 'function' == typeof k.placeholderData ? k.placeholderData() : k.placeholderData, k.select && void 0 !== E)
                    try {
                        E = k.select(E), this.selectError = null;
                    } catch (E) {
                        this.selectError = E;
                    }
                void 0 !== E && (A = 'success', v = (0, d.replaceData)(null == n ? void 0 : n.data, E, k), D = !0);
            }
            this.selectError && (x = this.selectError, v = this.selectResult, y = Date.now(), A = 'error');
            const E = 'fetching' === z,
                F = 'loading' === A,
                G = 'error' === A;
            return {
                status: A,
                fetchStatus: z,
                isLoading: F,
                isSuccess: 'success' === A,
                isError: G,
                isInitialLoading: F && E,
                data: v,
                dataUpdatedAt: w,
                error: x,
                errorUpdatedAt: y,
                failureCount: B.fetchFailureCount,
                failureReason: B.fetchFailureReason,
                errorUpdateCount: B.errorUpdateCount,
                isFetched: B.dataUpdateCount > 0 || B.errorUpdateCount > 0,
                isFetchedAfterMount: B.dataUpdateCount > r.dataUpdateCount || B.errorUpdateCount > r.errorUpdateCount,
                isFetching: E,
                isRefetching: E && !F,
                isLoadingError: G && 0 === B.dataUpdatedAt,
                isPaused: 'paused' === z,
                isPlaceholderData: D,
                isPreviousData: C,
                isRefetchError: G && 0 !== B.dataUpdatedAt,
                isStale: o(u, k),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(j) {
            const l = this.currentResult,
                m = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, d.shallowEqualObjects)(m, l))
                return;
            this.currentResult = m;
            const n = {
                cache: !0
            };
            !1 !== (null == j ? void 0 : j.listeners) && (() => {
                if (!l)
                    return !0;
                const {
                    notifyOnChangeProps: o
                } = this.options;
                if ('all' === o || !o && !this.trackedProps.size)
                    return !0;
                const p = new Set(null != o ? o : this.trackedProps);
                return this.options.useErrorBoundary && p.add('error'), Object.keys(this.currentResult).some(o => {
                    const q = r;
                    return this.currentResult[q] !== l[q] && p.has(q);
                });
            })() && (n.listeners = !0), this.notify({
                ...n,
                ...j
            });
        }
        updateQuery() {
            const o = this.client.getQueryCache().build(this.client, this.options);
            if (o === this.currentQuery)
                return;
            const p = this.currentQuery;
            this.currentQuery = o, this.currentQueryInitialState = o.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == p || p.removeObserver(this), o.addObserver(this));
        }
        onQueryUpdate(j) {
            const l = {};
            'success' === j.type ? l.onSuccess = !j.manual : 'error' !== j.type || (0, h.isCancelledError)(j.error) || (l.onError = !0), this.updateResult(l), this.hasListeners() && this.updateTimers();
        }
        notify(j) {
            e.notifyManager.batch(() => {
                var l, m, n, o;
                if (j.onSuccess)
                    null == (l = (m = this.options).onSuccess) || l.call(m, this.currentResult.data), null == (n = (o = this.options).onSettled) || n.call(o, this.currentResult.data, null);
                else if (j.onError) {
                    var p, q, r, s;
                    null == (p = (q = this.options).onError) || p.call(q, this.currentResult.error), null == (r = (s = this.options).onSettled) || r.call(s, void 0, this.currentResult.error);
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

    function l(j, k) {
        return function(j, k) {
            return !(!1 === k.enabled || j.state.dataUpdatedAt || 'error' === j.state.status && !1 === k.retryOnMount);
        }(j, k) || j.state.dataUpdatedAt > 0 && m(j, k, k.refetchOnMount);
    }

    function m(j, k, c) {
        if (!1 !== k.enabled) {
            const n = 'function' == typeof c ? c(j) : c;
            return 'always' === n || !1 !== n && o(j, k);
        }
        return !1;
    }

    function n(j, k, c, n) {
        return !1 !== c.enabled && (j !== k || !1 === n.enabled) && (!c.suspense || 'error' !== j.state.status) && o(j, c);
    }

    function o(j, k) {
        return j.isStaleByTime(k.staleTime);
    }
}), c.register('LEJ8c', function(b, n) {
    a(b.exports, 'useBaseQuery', function() {
        return l;
    });
    var d = c('uPP4W'),
        e = c('p58GX'),
        f = c('VvzNu'),
        g = c('hiqi3'),
        h = c('bmRaR'),
        i = c('UuP2G'),
        j = c('54ICr'),
        k = c('5LKWG');

    function l(a, b) {
        const m = (0, h.useQueryClient)({
                context: a.context
            }),
            n = (0, i.useIsRestoring)(),
            o = (0, g.useQueryErrorResetBoundary)(),
            p = m.defaultQueryOptions(a);
        p._optimisticResults = n ? 'isRestoring' : 'optimistic', p.onError && (p.onError = f.notifyManager.batchCalls(p.onError)), p.onSuccess && (p.onSuccess = f.notifyManager.batchCalls(p.onSuccess)), p.onSettled && (p.onSettled = f.notifyManager.batchCalls(p.onSettled)), (0, k.ensureStaleTime)(p), (0, j.ensurePreventErrorBoundaryRetry)(p, o), (0, j.useClearResetErrorBoundary)(o);
        const [q] = d.useState(() => new b(m, p)), r = q.getOptimisticResult(p);
        if ((0, e.useSyncExternalStore)(d.useCallback(a => n ? () => {} : q.subscribe(f.notifyManager.batchCalls(a)), [
                q,
                n
            ]), () => q.getCurrentResult(), () => q.getCurrentResult()), d.useEffect(() => {
                q.setOptions(p, {
                    listeners: !1
                });
            }, [
                p,
                q
            ]), (0, k.shouldSuspend)(p, r, n))
            throw (0, k.fetchOptimistic)(p, q, o);
        if ((0, j.getHasError)({
                result: r,
                errorResetBoundary: o,
                useErrorBoundary: p.useErrorBoundary,
                query: q.getCurrentQuery()
            }))
            throw r.error;
        return p.notifyOnChangeProps ? r : q.trackResult(r);
    }
}), c.register('p58GX', function(b, n) {
    a(b.exports, 'useSyncExternalStore', function() {
        return d;
    });
    const d = c('ZnzHs').useSyncExternalStore;
}), c.register('ZnzHs', function(a, b) {
    a.exports = c('MwTGU');
}), c.register('MwTGU', function(b, n) {
    var d;
    a(b.exports, 'useSyncExternalStore', function() {
        return d;
    }, function(a) {
        return d = a;
    });
    var e = c('uPP4W');
    var f = 'function' == typeof Object.is ? Object.is : function(a, b) {
            return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b;
        },
        g = e.useState,
        h = e.useEffect,
        i = e.useLayoutEffect,
        j = e.useDebugValue;

    function k(a) {
        var l = a.getSnapshot;
        a = a.value;
        try {
            var m = l();
            return !f(a, m);
        } catch (a) {
            return !0;
        }
    }
    var l = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(a, b) {
        return b();
    } : function(a, b) {
        var m = b(),
            n = g({
                inst: {
                    value: m,
                    getSnapshot: b
                }
            }),
            o = n[0].inst,
            p = n[1];
        return i(function() {
            o.value = m, o.getSnapshot = b, k(o) && p({
                inst: o
            });
        }, [
            a,
            m,
            b
        ]), h(function() {
            return k(o) && p({
                inst: o
            }), a(function() {
                k(o) && p({
                    inst: o
                });
            });
        }, [a]), j(m), m;
    };
    d = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : l;
}), c.register('hiqi3', function(b, l) {
    a(b.exports, 'useQueryErrorResetBoundary', function() {
        return g;
    });
    var d = c('uPP4W');

    function e() {
        let f = !1;
        return {
            clearReset: () => {
                f = !1;
            },
            reset: () => {
                f = !0;
            },
            isReset: () => f
        };
    }
    const f = d.createContext(e()),
        g = () => d.useContext(f);
}), c.register('UuP2G', function(b, l) {
    a(b.exports, 'useIsRestoring', function() {
        return f;
    });
    var d = c('uPP4W');
    const e = d.createContext(!1),
        f = () => d.useContext(e);
    e.Provider;
}), c.register('54ICr', function(b, l) {
    a(b.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return f;
    }), a(b.exports, 'useClearResetErrorBoundary', function() {
        return g;
    }), a(b.exports, 'getHasError', function() {
        return h;
    });
    var d = c('uPP4W'),
        e = c('WYJGJ');
    const f = (a, b) => {
            (a.suspense || a.useErrorBoundary) && (b.isReset() || (a.retryOnMount = !1));
        },
        g = a => {
            d.useEffect(() => {
                a.clearReset();
            }, [a]);
        },
        h = ({
            result: i,
            errorResetBoundary: j,
            useErrorBoundary: k,
            query: l
        }) => i.isError && !j.isReset() && !i.isFetching && (0, e.shouldThrowError)(k, [
            i.error,
            l
        ]);
}), c.register('WYJGJ', function(b, c) {
    function d(a, b) {
        return 'function' == typeof a ? a(...b) : !!a;
    }
    a(b.exports, 'shouldThrowError', function() {
        return d;
    });
}), c.register('5LKWG', function(b, c) {
    a(b.exports, 'ensureStaleTime', function() {
        return d;
    }), a(b.exports, 'shouldSuspend', function() {
        return e;
    }), a(b.exports, 'fetchOptimistic', function() {
        return f;
    });
    const d = a => {
            a.suspense && 'number' != typeof a.staleTime && (a.staleTime = 1000);
        },
        e = (a, b, c) => (null == a ? void 0 : a.suspense) && ((a, b) => a.isLoading && a.isFetching && !b)(b, c),
        f = (a, b, c) => b.fetchOptimistic(a).then(({
            data: g
        }) => {
            null == a.onSuccess || a.onSuccess(g), null == a.onSettled || a.onSettled(g, null);
        }).catch(g => {
            c.clearReset(), null == a.onError || a.onError(g), null == a.onSettled || a.onSettled(void 0, g);
        });
}), c.register('sHGAj', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('Ly1h3'),
        f = c('2gkXu26'),
        g = c('oyXSd');
    var h = a => (0, d.jsx)(g.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, d.jsx)(e.default, {
            value: a.value,
            style: {
                width: a.customWidth || f.default.optionWidth
            },
            size: 'large',
            onChange: b => a.onValueChanged(b),
            disabled: a.readOnly,
            children: a.options.map(b => (0, d.jsx)(e.default.Option, {
                value: b.value,
                children: b.name
            }, `${ a.title || 'no-title' }-${ b.value }`))
        })
    });
}), c.register('oyXSd', function(b, k) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('+UK2/');
    var f = a => (0, d.jsxs)(e.OptionContainer, {
        children: [
            (0, d.jsxs)(e.OptionInfoContainer, {
                children: [
                    a.emoji ? (0, d.jsx)(e.OptionEmoji, {
                        children: a.emoji
                    }) : null,
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(e.OptionTitle, {
                                children: a.title
                            }),
                            a.description ? (0, d.jsx)(e.OptionDescription, {
                                children: a.description
                            }) : null
                        ]
                    })
                ]
            }),
            (0, d.jsx)(e.OptionChangerContainer, {
                children: a.children
            })
        ]
    });
}), c.register('+UK2/', function(b, k) {
    a(b.exports, 'OptionContainer', function() {
        return m;
    }), a(b.exports, 'OptionInfoContainer', function() {
        return n;
    }), a(b.exports, 'OptionEmoji', function() {
        return o;
    }), a(b.exports, 'OptionTitle', function() {
        return p;
    }), a(b.exports, 'OptionDescription', function() {
        return q;
    }), a(b.exports, 'OptionChangerContainer', function() {
        return r;
    });
    var d = c('gSUVO'),
        e = c('h99Nu');
    let f, g, h, i, j, k, l = a => a;
    const m = e.default.div.attrs({
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
        n = e.default.div.attrs({
            className: 'flex vc'
        })(g || (g = l``)),
        o = e.default.div(h || (h = l`
  font-size: 23px;
  margin-right: 10px;
`)),
        p = e.default.div(i || (i = l`
  font-size: 23px;
  font-weight: ${ 0 };
`), d.FontWeights.Bold),
        q = e.default.div(j || (j = l`
  font-size: 15px;
  margin-top: -2px;
`)),
        r = e.default.div(k || (k = l`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), c.register('Zl/uU', function(b, k) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('2gkXu26'),
        g = c('iEGOV'),
        h = c('oyXSd'),
        i = c('4/f+U'),
        j = c('ntvHp');
    var k = a => {
        const l = e.useCallback(l => {
            if ((0, i.isNil)(l) && a.allowEmpty)
                return l;
            let m = l ? a.step ? Math.round(l / a.step) * a.step : l : 0;
            return !(0, i.isNil)(a.min) && m < a.min ? m = a.min : !(0, i.isNil)(a.max) && m > a.max && (m = a.max), m;
        }, [
            a.max,
            a.min,
            a.step
        ]);
        e.useEffect(() => {
            (0, i.isNil)(a.value) || a.max && a.value > a.max && c(l(a.max));
        }, [
            a.value,
            a.max
        ]);
        const m = m => {
            a.onValueChanged(l(m));
        };
        return (0, d.jsx)(h.default, {
            emoji: a.emoji,
            title: a.title,
            description: a.description,
            children: (0, d.jsx)(j.default, {
                size: 'large',
                formatter: g.default,
                value: a.value,
                max: a.max,
                min: a.min,
                step: a.step,
                style: {
                    width: a.customWidth || f.default.optionWidth
                },
                onChange: m,
                disabled: a.readOnly
            })
        });
    };
}), c.register('iEGOV', function(b, k) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('PjB0f');
    var e = a => '' === a ? '' : isNaN(Number(a)) ? String(a) : (0, d.numberWithCommas)(Number(a));
}), c.register('ntvHp', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('TNIOj'),
        f = c('uPP4W'),
        g = c('PjB0f');
    var h = a => {
        const [i, j] = f.useState(a.value), [k, l] = f.useState(a.value), [m, n, o] = (0, g.useBoolean)(!1);
        f.useEffect(() => {
            l(a.value), j(a.value);
        }, [a.value]);
        return (0, d.jsx)(e.default, {
            ...a,
            value: m ? i : k,
            onChange: a => {
                j(a);
            },
            onFocus: n,
            onBlur: () => {
                i !== k && a.onChange(i), o(), j(a.value);
            }
        });
    };
}), c.register('lcKX8', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('4/f+U'),
        e = c('uzjvO4'),
        f = c('SprP3');
    const g = (a, b) => {
        var h;
        return null === (h = JSON.parse(localStorage.getItem(f.LocalStorageNames.hookSavedOptions) || '{}')[b]) || void 0 === h ? void 0 : h[a];
    };
    var h = a => {
        var i;
        const {
            hookJSON: j,
            experienceId: k,
            kitId: l
        } = m, n = {};
        return null == j || null === (i = j.hooks) || void 0 === i || i.forEach(m => {
            if (m.type === e.HookType.kit)
                n[m.key] = l || '';
            else if (m.type == e.HookType.selectBox) {
                const o = m.options;
                if (o.options.length) {
                    let p = o.options.find(m => m === o.defaultOption) || o.options[0];
                    if (k) {
                        const q = g(m.key, k);
                        if (q) {
                            const r = o.options.find(r => r === q);
                            r && (p = r);
                        }
                    }
                    p && (n[m.key] = p);
                }
            } else if (m.type === e.HookType.number) {
                const p = m.options;
                let q = p.defaultValue;
                if (k) {
                    const r = g(m.key, k);
                    if (!(0, d.isNil)(r) && 'number' == typeof r) {
                        let s = !1;
                        ((0, d.isNil)(p.min) || r > p.min) && ((0, d.isNil)(p.max) || r < p.max) && ((0, d.isNil)(p.step) || r % p.step == 0) && (s = !0), s && (q = r);
                    }
                }
                n[m.key] = q;
            }
        }), n;
    };
}), c.register('RxXGC', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('UnUp5'),
        f = c('Vlfxs'),
        g = c('uPP4W'),
        h = c('X12rx'),
        i = c('ioF/t'),
        j = c('9t6Nl'),
        k = c('lcKX8');
    var l = (0, f.observer)(a => {
        const [m] = g.useState(() => (0, e.observable)(a.defaultState || (0, k.default)({
            hookJSON: a.hooks
        }))), n = (a, n) => {
            m[a] = n;
        }, o = (0, e.toJS)(m), p = JSON.stringify(o);
        g.useEffect(() => {
            a.onConnectedResourcesChange && a.onConnectedResourcesChange((0, i.default)(a, o)), a.readOnly || a.onStateChange && a.onStateChange(o);
        }, [
            p,
            a.readOnly
        ]);
        const q = (0, j.default)(a, o);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                a.header ? a.header(q.length) : null,
                q.map((m, e) => (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(h.default, {
                            hook: m,
                            state: o,
                            modifyState: n,
                            location: a.location,
                            readOnly: a.readOnly
                        }),
                        e !== q.length - 1 && (0, d.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, `hook-form-${ m.key }`)),
                a.footer ? a.footer(q.length) : null
            ]
        });
    });
}), c.register('X12rx', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('uzjvO4'),
        f = c('Zbna5'),
        g = c('QLqxR'),
        h = c('q6rhe');
    var i = a => {
        const j = a.state[a.hook.key],
            k = j => {
                a.modifyState(a.hook.key, j);
            };
        return a.hook.type === e.HookType.selectBox ? (0, d.jsx)(h.default, {
            value: j,
            onChange: k,
            hook: a.hook,
            readOnly: a.readOnly
        }) : a.hook.type === e.HookType.kit ? (0, d.jsx)(f.default, {
            value: j,
            onChange: k,
            hook: a.hook,
            location: a.location,
            readOnly: a.readOnly
        }) : a.hook.type === e.HookType.number ? (0, d.jsx)(g.default, {
            value: j,
            onChange: k,
            hook: a.hook,
            readOnly: a.readOnly
        }) : null;
    };
}), c.register('Zbna5', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('hAeIC'),
        f = c('lZ+7Q'),
        g = c('4564n');
    var h = a => {
        let {
            title: i,
            description: j
        } = (0, g.default)(a.hook);
        if (a.location === f.HookFormLocation.editor) {
            const k = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            j ? j += ` - ${ k }` : j = k;
        }
        return (0, d.jsx)(e.default, {
            title: i,
            description: j,
            value: a.value,
            onValueChanged: a.onChange,
            placeholder: 'Kit ID',
            readOnly: a.readOnly
        });
    };
}), c.register('hAeIC', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('c6x8w'),
        f = c('2gkXu26'),
        g = c('oyXSd');
    var h = a => (0, d.jsx)(g.default, {
        emoji: a.emoji,
        title: a.title,
        description: a.description,
        children: (0, d.jsx)(e.default, {
            size: 'large',
            value: a.value,
            placeholder: a.placeholder,
            style: {
                width: a.customWidth || f.default.optionWidth
            },
            onChange: b => {
                a.onValueChanged(b.target.value);
            },
            disabled: a.readOnly
        })
    });
}), c.register('lZ+7Q', function(b, c) {
    let d;
    var e;
    let f;
    a(b.exports, 'HookFormLocation', function() {
        return d;
    }), a(b.exports, 'IHookConnectedResourceType', function() {
        return f;
    }), (e = d || (d = {})).editor = 'editor', e.experiencePicker = 'experiencePicker', (f || (f = {})).kit = 'kit';
}), c.register('4564n', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        let e, f;
        return e = a.key, a.displayName && (e = a.displayName), a.displayDescription && (f = a.displayDescription), {
            title: e,
            description: f
        };
    };
}), c.register('QLqxR', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('4/f+U');
    c('uPP4W');
    var f = c('Zl/uU'),
        g = c('4564n');
    var h = a => {
        const {
            title: i,
            description: j
        } = (0, g.default)(a.hook), k = a.hook.options;
        return (0, d.jsx)(f.default, {
            title: i,
            description: j,
            value: a.value,
            onValueChanged: i => {
                !(0, e.isNil)(i) || (0, e.isNil)(k.defaultValue) ? a.onChange(i): a.onChange(k.defaultValue);
            },
            min: k.min,
            max: k.max,
            step: k.step,
            allowEmpty: !0,
            readOnly: a.readOnly
        });
    };
}), c.register('q6rhe', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('sHGAj'),
        f = c('4564n');
    var g = a => {
        const {
            title: h,
            description: i
        } = (0, f.default)(a.hook), j = a.hook.options;
        return (0, d.jsx)(e.default, {
            title: h,
            description: i,
            value: a.value,
            onValueChanged: a.onChange,
            options: j.options.map(a => ({
                value: a,
                name: a
            })),
            readOnly: a.readOnly
        });
    };
}), c.register('ioF/t', function(b, i) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('4/f+U'),
        e = c('uzjvO4'),
        f = c('lZ+7Q'),
        g = c('9t6Nl');
    var h = (a, b) => {
        const i = [];
        return (0, g.default)({
            ...a,
            location: f.HookFormLocation.editor
        }, b).forEach(a => {
            a.type === e.HookType.kit && b[a.key] && i.push({
                type: f.IHookConnectedResourceType.kit,
                value: b[a.key]
            });
        }), (0, d.uniqBy)(i, 'value');
    };
}), c.register('9t6Nl', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('zPY9u'),
        e = c('uzjvO4'),
        f = c('lZ+7Q');
    var g = (a, b) => {
        var h, i;
        const j = [];
        return null == a || null === (h = a.hooks) || void 0 === h || null === (i = h.hooks) || void 0 === i || i.forEach(h => {
            var k;
            if (h.type === e.HookType.kit) {
                if (!!b[h.key] && a.location === f.HookFormLocation.experiencePicker)
                    return;
            }
            if (h.type === e.HookType.selectBox) {
                var l;
                const m = h.options;
                if (!(null == m || null === (l = m.options) || void 0 === l ? void 0 : l.length))
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
                        const q = n.modeType,
                            r = h.options;
                        return r.compare === d.ModeTypeHiddenConditionCompare.equal ? q === r.mode : q !== r.mode;
                    }
                    return !1;
                }));
            })) || j.push(h);
        }), j;
    };
}), c.register('zPY9u', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    a(b.exports, 'HiddenConditionType', function() {
        return d;
    }), a(b.exports, 'HookValueHiddenConditionCompare', function() {
        return f;
    }), a(b.exports, 'ModeTypeHiddenConditionCompare', function() {
        return h;
    }), (e = d || (d = {})).hookValue = 'hookValue', e.modeType = 'modeType', (g = f || (f = {})).equal = 'EQUAL', g.notEqual = 'NOT_EQUAL', (i = h || (h = {})).equal = 'EQUAL', i.notEqual = 'NOT_EQUAL';
});