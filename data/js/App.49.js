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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _r;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = (k = c('.....'), c('.....')), q = c('.....');
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    let h;
    var _i = f.default.div(h || (h = (j => j)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 } !important;
`), g.Fonts.SFPro);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = {
        kitDetails: new (0, f.default)(),
        editor: new (0, g.default)(),
        kitCollab: new (0, h.default)()
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
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
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    let m;
    var n;
    a(d.exports, 'QuestionType', function () {
        return f;
    }), a(d.exports, 'Privacy', function () {
        return h;
    }), a(d.exports, 'GameStatus', function () {
        return j;
    }), a(d.exports, 'GameType', function () {
        return l;
    }), a(d.exports, 'GameGoal', function () {
        return m;
    }), a(d.exports, 'themes', function () {
        return _s;
    }), a(d.exports, 'ExperienceSource', function () {
        return _t;
    }), (g = f || (f = {})).multipleChoice = 'mc', g.textInput = 'text', (i = h || (h = {})).public = 'public', i.private = 'private', (k = j || (j = {})).setup = 'setup', k.join = 'join', k.teams = 'teams', k.gameplay = 'gameplay', k.results = 'results', (l || (l = {})).live = 'live', (n = m || (m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
    const o = '#ffffff', p = '#000000';
    let q;
    var r;
    (r = q || (q = {})).easy = 'easy', r.medium = 'medium', r.hard = 'hard', r.veryHard = 'veryHard', r.veryVeryHard = 'veryVeryHard';
    const _s = [
        {
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: o
            },
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
            palette: [
                {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'defaultError', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    const _h = () => ({ message: '' });
    class i {
        constructor() {
            this.questions = g.observable.array(), this.questionsChecked = g.observable.array(), this.currentlyEditingQuestionId = '', this.editSessionCounted = !1, this.error = _h(), this.reset = () => {
                this.questions.replace([]), this.questionsChecked.replace([]), this.editSessionCounted = !1, this.error = _h();
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'questions', void 0), (0, f.__decorate)([g.observable], i.prototype, 'questionsChecked', void 0), (0, f.__decorate)([g.observable], i.prototype, 'currentlyEditingQuestionId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'editSessionCounted', void 0), (0, f.__decorate)([g.observable], i.prototype, 'error', void 0), (0, f.__decorate)([g.action], i.prototype, 'reset', void 0);
    var _j = i;
}), c.register('.....', function (d, e) {
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
    a(d.exports, 'Privacy', function () {
        return f;
    }), a(d.exports, 'QuestionType', function () {
        return j;
    }), a(d.exports, 'TextInputAnswerType', function () {
        return l;
    }), a(d.exports, 'HubItemType', function () {
        return p;
    }), a(d.exports, 'HubItemStatus', function () {
        return q;
    }), (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).basic = 'basic', i.go = 'go', i.pro = 'pro', (k = j || (j = {})).multipleChoice = 'mc', k.textInput = 'text', (m = l || (l = {}))[m.exact = 1] = 'exact', m[m.contains = 2] = 'contains', (o = n || (n = {})).reachedCashGoal = 'reached-cash-goal', o.reachedMaxTime = 'reached-max-time', (p || (p = {})).mapAssignment = 'mapAssignment', (r = q || (q = {})).completed = 'completed', r.inProgress = 'inProgress', r.notStarted = 'notStarted';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    class h {
        constructor() {
            this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions = g.observable.array(), this.reset = () => {
                this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = '', this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions.replace([]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'panelOpen', void 0), (0, f.__decorate)([g.observable], h.prototype, 'enabled', void 0), (0, f.__decorate)([g.observable], h.prototype, 'waitingQuestions', void 0), (0, f.__decorate)([g.observable], h.prototype, 'sessionId', void 0), (0, f.__decorate)([g.observable], h.prototype, 'isPublic', void 0), (0, f.__decorate)([g.observable], h.prototype, 'hasFetchedFirstBatchOfQuestions', void 0), (0, f.__decorate)([g.observable], h.prototype, 'questions', void 0), (0, f.__decorate)([g.action], h.prototype, 'reset', void 0);
    var _i = h;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x = y => y;
    const y = h.default.div(v || (v = x`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`));
    var _z = (0, u.observer)(() => {
        const A = (0, t.useLocation)(), {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'HEADER_HEIGHT', function () {
        return _q;
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p = q => q;
    const _q = 90, r = h.default.div.attrs({ className: 'flex flex-column' })(n || (n = p`
  border-right: 1px solid ${ 0 };
  height: 100%;
  width: ${ 0 }px;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
`), i.default.BorderGray, 323), s = h.default.div.attrs({ className: 'maxWidth scroll-y' })(o || (o = p`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _F;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x, y, z = A => A;
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
`), () => n.HEADER_HEIGHT, o.default.Black, o.default.BorderGray), B = j.default.div(w || (w = z`
  display: flex;
  align-items: center;
`)), C = j.default.div(x || (x = z`
  font-size: 23px;
  font-weight: ${ 0 };
  margin-bottom: -6px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
`), k.FontWeights.UltraBold), D = j.default.div.attrs({ className: 'flex vc' })(y || (y = z`
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
                                                    (0, h.jsx)('div', { children: F ? 'Public' : 'Private' })
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
            }), (0, f.default)(this, 'toggleEditingTitleModal', () => this.setState({ isEditingTitle: !this.state.isEditingTitle })), (0, f.default)(this, 'toggleEditingImageModal', () => {
                this.setState({ isEditingImage: !this.state.isEditingImage });
            }), (0, f.default)(this, 'togglePrivacyModal', () => {
                this.setState({ isEditingPrivacy: !this.state.isEditingPrivacy });
            });
        }
    };
    E = (0, g.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], E);
    var _F = E;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({ src: n.image }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: { width: '100%' }
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getCloudinaryUrl', function () {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        }, _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2], k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        }, _h = 'media.gimkit.com', _i = 'res.cloudinary.com', _j = 'gimkit-production', _k = [
            _h,
            _i
        ];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
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
            super(...a), (0, f.default)(this, 'state', { newTitle: '' }), (0, f.default)(this, 'canRename', () => !!this.state.newTitle.trim()), (0, f.default)(this, 'onRename', () => {
                this.canRename() && ((0, o.default)(this.state.newTitle), this.props.closeModal());
            }), (0, f.default)(this, 'handleChange', q => {
                this.setState({ newTitle: q.target.value });
            });
        }
    };
    p = (0, g.__decorate)([
        (0, n.inject)('kitDetails'),
        n.observer
    ], p);
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'MAX_KIT_NAME_LENGTH', function () {
        return _y;
    }), a(d.exports, 'default', function () {
        return _C;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....');
    const _y = 30, z = n.default.Option, A = B => (0, h.jsx)(o.default, {
            style: {
                fontWeight: 'bold',
                fontSize: 25
            },
            children: B
        });
    let B = class extends i.Component {
        componentDidMount() {
            const C = localStorage.getItem(t.LocalStorageNames.editorDefaultLanguage), D = localStorage.getItem(t.LocalStorageNames.editorDefaultSubject) || (0, x.getUser)().areaOfExpertise, E = localStorage.getItem(t.LocalStorageNames.editorDefaultGradeLevel) || (0, x.getUser)().gradeLevel;
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
                                style: { marginRight: 3 }
                            }),
                            (0, h.jsx)('span', { children: ' Go Back' })
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
                                style: { height: 80 }
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
                    (0, h.jsx)('div', { style: { height: 10 } }),
                    A('Language'),
                    (0, h.jsx)(n.default, {
                        style: { width: '100%' },
                        size: 'large',
                        value: D ? (0, r.getLanguageName)(D) : void 0,
                        placeholder: 'No language selected',
                        showSearch: !0,
                        onChange: this.onLanguageSelected,
                        optionFilterProp: 'children',
                        filterOption: (G, H) => H.props.children.toLowerCase().indexOf(G.toLowerCase()) >= 0,
                        children: (0, r.getListOfLanguages)().map(G => (0, h.jsx)(z, {
                            value: G,
                            children: G
                        }, G))
                    }),
                    (0, h.jsx)('div', { style: { height: 10 } }),
                    A('Subject'),
                    (0, h.jsx)(n.default, {
                        style: { width: '100%' },
                        size: 'large',
                        placeholder: 'No subject selected',
                        value: E || void 0,
                        onChange: this.onSubjectSelected,
                        children: s.optionsForAreaOfExpertise.map(G => (0, h.jsx)(z, {
                            value: G,
                            children: G
                        }, G))
                    }),
                    (0, h.jsx)('div', { style: { height: 10 } }),
                    (0, h.jsx)(l.default, {}),
                    (0, h.jsxs)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            (0, h.jsx)(p.default, { link: 'https://www.notion.so/gimkit/Language-Subject-7ed3f1e88cc84ccaac1a282a0a4017db' }),
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
            super(...a), (0, f.default)(this, 'onKitTitleNameChange', C => this.props.kitDetails.title = C.target.value), (0, f.default)(this, 'onLanguageSelected', C => {
                const D = (0, r.getLanguageKey)(C);
                localStorage.setItem(t.LocalStorageNames.editorDefaultLanguage, D), this.props.kitDetails.language = D;
            }), (0, f.default)(this, 'onSubjectSelected', C => {
                localStorage.setItem(t.LocalStorageNames.editorDefaultSubject, C), this.props.kitDetails.subject = C;
            });
        }
    };
    B = (0, g.__decorate)([
        (0, q.inject)('kitDetails'),
        q.observer
    ], B);
    var _C = B;
}), c.register('.....', function (d, e) {
    a(d.exports, 'CREATE_A_KIT_HEADER', function () {
        return _f;
    }), a(d.exports, 'CREATE_A_KIT_SUBHEADER', function () {
        return _g;
    });
    const _f = 'New Kit', _g = 'Let\'s get started!';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsx)(i.default, {
        title: 'Learn more on why we collect this data',
        children: (0, f.jsx)(h.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, f.jsx)(g.default, {}),
            href: k.link || '',
            target: '_blank'
        })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LockOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z' }
                }]
        },
        name: 'lock',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getListOfLanguages', function () {
        return _g;
    }), a(d.exports, 'getLanguageKey', function () {
        return _h;
    }), a(d.exports, 'getLanguageName', function () {
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
        }, _g = () => Object.keys(f).map(h => f[h]), _h = i => Object.keys(f).filter(j => f[j] === i)[0], _i = j => f[j];
}), c.register('.....', function (d, e) {
    a(d.exports, 'optionsForAreaOfExpertise', function () {
        return _p;
    }), a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
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
        ].sort(), q = [
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
        const {login: s} = g.useContext(l.default), [t, u] = g.useState(''), [v, w] = g.useState(''), x = !t || !v;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.Title, { children: '\uD83D\uDCA1 Area of Expertise' }),
                (0, f.jsx)(j.default, {
                    style: { width: '100%' },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: y => u(y),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _p.map(y => ({
                        value: y,
                        label: y
                    }))
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                (0, f.jsx)(h.Title, { children: '\uD83C\uDF82 Grade Level' }),
                (0, f.jsx)(j.default, {
                    style: { width: '100%' },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: y => w(y),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: q.map(y => ({
                        value: y,
                        label: y
                    }))
                }),
                (0, f.jsx)(k.default, {
                    size: 'large',
                    style: { marginTop: 10 },
                    disabled: x,
                    onClick: () => {
                        x || (s.areaOfExpertise = t, s.gradeLevel = v, s.informationNeeded.replace(s.informationNeeded.filter(y => y !== m.informationTypes.areaOfExpertise && y !== m.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, f.jsx)(i.default, {}),
                (0, f.jsxs)('div', {
                    style: { textAlign: 'center' },
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
                (0, f.jsx)('div', { style: { height: 25 } }),
                (0, f.jsx)(n.default, { link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52' })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'MAX_LENGTH_FIRST_NAME', function () {
        return _q;
    }), a(d.exports, 'MAX_LENGTH_LAST_NAME', function () {
        return _r;
    }), a(d.exports, 'Title', function () {
        return _s;
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    const _q = 20, _r = 25, _s = t => (0, f.jsx)('div', {
            style: {
                fontFamily: i.Fonts.SFPro,
                fontWeight: i.FontWeights.Bold,
                color: j.default.Black,
                fontSize: 18
            },
            children: t.children
        }), t = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _u = () => {
        const {login: v} = g.useContext(h.default), [w, x] = g.useState(v.firstName), [y, z] = g.useState(v.lastName), [A, B] = g.useState(v.password), C = () => {
                let D = !0;
                return v.informationNeeded.includes(n.informationTypes.firstName) && (w || (D = !1)), v.informationNeeded.includes(n.informationTypes.lastName) && (y || (D = !1)), v.informationNeeded.includes(n.informationTypes.accountPassword) && (!A || A.length < 6) && (D = !1), D;
            }, D = () => {
                C() && (w && (v.firstName = w), y && (v.lastName = y), A && (v.password = A), v.informationNeeded.replace(v.informationNeeded.filter(E => E !== n.informationTypes.firstName && E !== n.informationTypes.lastName && E !== n.informationTypes.accountPassword)));
            }, E = v.accountType === p.default.student;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_s, { children: 'First Name' }),
                (0, f.jsx)(l.default, {
                    maxLength: _q,
                    style: t,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: F => x(F.target.value),
                    onPressEnter: D,
                    autoFocus: !0
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
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
                    onChange: F => z(F.target.value),
                    onPressEnter: D
                }),
                v.informationNeeded.includes(n.informationTypes.accountPassword) && (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(k.default, {}),
                        (0, f.jsx)(_s, { children: 'Password' }),
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
                            onChange: F => B(F.target.value),
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
                    style: { width: '100%' },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                !E && (0, f.jsx)(o.default, { link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061' })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = {
        login: new (0, f.default)(),
        navigation: new (0, g.default)()
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'informationTypes', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....');
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
        }, i = {
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
        }, {
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
                Object.keys(i).forEach(z => this[z] = i[z]), this.informationNeeded.replace([_h.email]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], y.prototype, 'userExists', void 0), (0, f.__decorate)([g.observable], y.prototype, 'email', void 0), (0, f.__decorate)([g.observable], y.prototype, 'accountType', void 0), (0, f.__decorate)([g.observable], y.prototype, 'googleToken', void 0), (0, f.__decorate)([g.observable], y.prototype, 'firstName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'lastName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'password', void 0), (0, f.__decorate)([g.observable], y.prototype, 'schoolId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'districtId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'country', void 0), (0, f.__decorate)([g.observable], y.prototype, 'areaOfExpertise', void 0), (0, f.__decorate)([g.observable], y.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], y.prototype, 'organization', void 0), (0, f.__decorate)([g.observable], y.prototype, 'acceptsLatestPolicies', void 0), (0, f.__decorate)([g.observable], y.prototype, 'authenticated', void 0), (0, f.__decorate)([g.observable], y.prototype, 'informationNeeded', void 0), (0, f.__decorate)([g.action], y.prototype, 'reset', void 0);
    var _z = y;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....');
    const h = {
            currentStage: c('.....').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        }, {
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
                Object.keys(h).forEach(t => this[t] = h[t]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], s.prototype, 'currentStage', void 0), (0, f.__decorate)([g.observable], s.prototype, 'emailSignInBlocked', void 0), (0, f.__decorate)([g.observable], s.prototype, 'creatingAccount', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loggingIn', void 0), (0, f.__decorate)([g.observable], s.prototype, 'updatingAccountInformation', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loginError', void 0), (0, f.__decorate)([g.observable], s.prototype, 'redirectUri', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningId', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningName', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningTeacherName', void 0), (0, f.__decorate)([g.action], s.prototype, 'reset', void 0);
    var _t = s;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).email = 'email', g.password = 'password', g.accountType = 'accountType', g.studentSpecificInfo = 'studentSpecificInfo', g.nameAndPassword = 'nameAndPassword', g.school = 'school', g.educatorSpecificInfo = 'educatorSpecificInfo', g.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', g.acceptPolicies = 'acceptPolicies', g.verifyClass = 'verifyClass';
    var _h = f;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = (0, g.observer)(j => (0, f.jsx)(h.default, {
        disabled: j.disabled,
        size: j.size || 'middle',
        type: 'primary',
        onClick: j.onClick,
        style: Object.assign({ width: '100%' }, j.style),
        loading: j.loading,
        children: j.children
    }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => (0, f.jsxs)('div', {
        style: { justifyContent: 'space-between' },
        className: 'flex maxWidth',
        children: [
            (0, f.jsx)('div', {}),
            (0, f.jsx)(g.default, { link: i.link })
        ]
    });
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).educator = 'educator', g.student = 'student', g.guardian = 'guardian', g.nonSchool = 'nonSchool';
    var _h = f;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function () {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.request)({
            url: '/api/v1/editor/rename',
            method: 'post',
            data: {
                kitId: f.default.kitDetails.id,
                title: i
            },
            success: j => {
                j && j.newName && (f.default.kitDetails.title = j.newName);
            },
            error: () => !1
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o = class extends i.Component {
        render() {
            return (0, h.jsx)(k.default, {
                open: this.props.visible,
                onCancel: this.props.closeModal,
                style: { top: 20 },
                title: 'New cover photo',
                closable: !0,
                footer: (0, h.jsx)(j.default, {
                    onClick: this.props.closeModal,
                    children: 'Cancel'
                }),
                children: (0, h.jsx)('div', {
                    style: { maxHeight: '55vh' },
                    className: 'scroll disable-scrollbars',
                    children: (0, h.jsx)(m.default, {
                        defaultSearchTerm: this.props.kitDetails.title,
                        onImagePicked: this.onImagePicked
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'onImagePicked', p => {
                (0, n.default)(p), this.props.closeModal();
            });
        }
    };
    o = (0, g.__decorate)([
        (0, l.inject)('kitDetails'),
        l.observer
    ], o);
    var _p = o;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.request)({
            url: '/api/v1/editor/changePhoto',
            method: 'post',
            data: {
                kitId: f.default.kitDetails.id,
                photo: i
            },
            success: () => {
                f.default.kitDetails.image = i;
            },
            error: () => !1
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    c('.....');
    var _g = h => (0, f.jsx)('i', {
        className: `${ h.name }${ h.className ? ` ${ h.className }` : '' }`,
        style: h.style
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    const u = {
            color: o.default.Black,
            fontFamily: p.Fonts.SFPro,
            marginBottom: 6
        }, v = w => (0, h.jsx)(k.default, {
            style: { marginBottom: 10 },
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
                        children: w.icon
                    }),
                    (0, h.jsxs)('div', {
                        children: [
                            (0, h.jsx)('div', {
                                style: { fontWeight: p.FontWeights.UltraBold },
                                children: w.name
                            }),
                            (0, h.jsx)('div', { children: w.description })
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
                style: { top: 20 },
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
                        (0, h.jsx)('div', { style: { height: 15 } }),
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
            super(...a), (0, f.default)(this, 'state', { newTitle: '' }), (0, f.default)(this, 'onChange', x => {
                const y = x.target.value;
                (0, r.default)(y);
            });
        }
    };
    w = (0, g.__decorate)([
        (0, n.inject)('kitDetails'),
        n.observer
    ], w);
    var _x = w;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = g.default;
    i.Button = h.default, i.Group = f.default, i.__ANT_RADIO = !0;
    var _j = i;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    const o = h.forwardRef((p, q) => {
        const {
                getPrefixCls: r,
                direction: s
            } = h.useContext(i.ConfigContext), t = h.useContext(j.default), [u, v] = (0, g.default)(p.defaultValue, { value: p.value }), {
                prefixCls: w,
                className: x,
                rootClassName: y,
                options: z,
                buttonStyle: A = 'outline',
                disabled: B,
                children: C,
                size: D,
                style: E,
                id: F,
                onMouseEnter: G,
                onMouseLeave: H,
                onFocus: I,
                onBlur: J
            } = p, K = r('radio', w), L = `${ K }-group`, [M, N] = (0, n.default)(K);
        let O = C;
        z && z.length > 0 && (O = z.map(P => 'string' == typeof P || 'number' == typeof P ? h.createElement(m.default, {
            key: P.toString(),
            prefixCls: K,
            disabled: B,
            value: P,
            checked: u === P
        }, P) : h.createElement(m.default, {
            key: `radio-group-value-options-${ P.value }`,
            prefixCls: K,
            disabled: P.disabled || B,
            value: P.value,
            checked: u === P.value,
            style: P.style
        }, P.label)));
        const P = D || t, Q = b(f)(L, `${ L }-${ A }`, {
                [`${ L }-${ P }`]: P,
                [`${ L }-rtl`]: 'rtl' === s
            }, x, y, N);
        return M(h.createElement('div', Object.assign({}, (0, k.default)(p), {
            className: Q,
            style: E,
            onMouseEnter: G,
            onMouseLeave: H,
            onFocus: I,
            onBlur: J,
            id: F,
            ref: q
        }), h.createElement(l.RadioGroupContextProvider, {
            value: {
                onChange: R => {
                    const S = u, T = R.target.value;
                    'value' in p || v(T);
                    const {onChange: U} = p;
                    U && T !== S && U(R);
                },
                value: u,
                disabled: p.disabled,
                name: p.name,
                optionType: p.optionType
            }
        }, O)));
    });
    var _p = h.memo(o);
}), c.register('.....', function (d, e) {
    a(d.exports, 'RadioGroupContextProvider', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    }), a(d.exports, 'RadioOptionTypeContext', function () {
        return _j;
    }), a(d.exports, 'RadioOptionTypeContextProvider', function () {
        return _k;
    });
    var f = c('.....');
    const g = f.createContext(null), _h = g.Provider;
    var _i = g;
    const _j = f.createContext(null), _k = _j.Provider;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = function (p, q) {
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
    const p = (q, r) => {
        var s, t;
        const u = i.useContext(m.default), v = i.useContext(m.RadioOptionTypeContext), {
                getPrefixCls: w,
                direction: x
            } = i.useContext(j.ConfigContext), y = i.useRef(), z = (0, h.composeRef)(r, y), {isFormItemInput: A} = i.useContext(l.FormItemInputContext), B = C => {
                var D, E;
                null === (D = q.onChange) || void 0 === D || D.call(q, C), null === (E = null == u ? void 0 : u.onChange) || void 0 === E || E.call(u, C);
            }, {
                prefixCls: C,
                className: D,
                rootClassName: E,
                children: F,
                style: G
            } = q, H = o(q, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'style'
            ]), I = w('radio', C), J = 'button' === ((null == u ? void 0 : u.optionType) || v) ? `${ I }-button` : I, [K, L] = (0, n.default)(I), M = Object.assign({}, H), N = i.useContext(k.default);
        u && (M.name = u.name, M.onChange = B, M.checked = q.value === u.value, M.disabled = null !== (s = M.disabled) && void 0 !== s ? s : u.disabled), M.disabled = null !== (t = M.disabled) && void 0 !== t ? t : N;
        const O = b(f)(`${ J }-wrapper`, {
            [`${ J }-wrapper-checked`]: M.checked,
            [`${ J }-wrapper-disabled`]: M.disabled,
            [`${ J }-wrapper-rtl`]: 'rtl' === x,
            [`${ J }-wrapper-in-form-item`]: A
        }, D, E, L);
        return K(i.createElement('label', {
            className: O,
            style: G,
            onMouseEnter: q.onMouseEnter,
            onMouseLeave: q.onMouseLeave
        }, i.createElement(g.default, Object.assign({}, M, {
            type: 'radio',
            prefixCls: J,
            ref: z
        })), void 0 !== F ? i.createElement('span', null, F) : null));
    };
    var _q = i.forwardRef(p);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);
            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function (v) {
                    var w = u.props, x = w.disabled, y = w.onChange;
                    x || ('checked' in u.props || u.setState({ checked: v.target.checked }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, { checked: v.target.checked }),
                        stopPropagation: function () {
                            v.stopPropagation();
                        },
                        preventDefault: function () {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function (v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = { checked: v }, u;
            }
            return (0, k.default)(s, [
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var v, w = this.props, x = w.prefixCls, y = w.className, z = w.style, A = w.name, B = w.id, C = w.type, D = w.disabled, E = w.readOnly, F = w.tabIndex, G = w.onClick, H = w.onFocus, I = w.onBlur, J = w.onKeyDown, K = w.onKeyPress, L = w.onKeyUp, M = w.autoFocus, N = w.value, O = w.required, P = (0, h.default)(w, [
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
                            ]), Q = Object.keys(P).reduce(function (R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}), R = this.state.checked, S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', { className: ''.concat(x, '-inner') }));
                    }
                }
            ], [{
                    key: 'getDerivedStateFromProps',
                    value: function (v, w) {
                        return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, { checked: v.checked }) : null;
                    }
                }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {
        },
        onBlur: function () {
        },
        onChange: function () {
        },
        onKeyDown: function () {
        },
        onKeyPress: function () {
        },
        onKeyUp: function () {
        }
    };
    var _q = p;
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
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
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = new (0, f.Keyframes)('antRadioEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }), k = l => {
            const {
                    componentCls: m,
                    antCls: n
                } = l, o = `${ m }-group`;
            return {
                [o]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                    display: 'inline-block',
                    fontSize: 0,
                    [`&${ o }-rtl`]: { direction: 'rtl' },
                    [`${ n }-badge ${ n }-badge-count`]: { zIndex: 1 },
                    [`> ${ n }-badge:not(:first-child) > ${ n }-button-wrapper`]: { borderInlineStart: 'none' }
                })
            };
        }, l = m => {
            const {
                    componentCls: n,
                    radioWrapperMarginRight: o,
                    radioCheckedColor: p,
                    radioSize: q,
                    motionDurationSlow: r,
                    motionDurationMid: s,
                    motionEaseInOut: t,
                    motionEaseInOutCirc: u,
                    radioButtonBg: v,
                    colorBorder: w,
                    lineWidth: x,
                    radioDotSize: y,
                    colorBgContainerDisabled: z,
                    colorTextDisabled: A,
                    paddingXS: B,
                    radioDotDisabledColor: C,
                    lineType: D,
                    radioDotDisabledSize: E,
                    wireframe: F,
                    colorWhite: G
                } = m, H = `${ n }-inner`;
            return {
                [`${ n }-wrapper`]: Object.assign(Object.assign({}, (0, i.resetComponent)(m)), {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    marginInlineStart: 0,
                    marginInlineEnd: o,
                    cursor: 'pointer',
                    [`&${ n }-wrapper-rtl`]: { direction: 'rtl' },
                    '&-disabled': {
                        cursor: 'not-allowed',
                        color: m.colorTextDisabled
                    },
                    '&::after': {
                        display: 'inline-block',
                        width: 0,
                        overflow: 'hidden',
                        content: '"\\a0"'
                    },
                    [`${ n }-checked::after`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        border: `${ x }px ${ D } ${ p }`,
                        borderRadius: '50%',
                        visibility: 'hidden',
                        animationName: j,
                        animationDuration: r,
                        animationTimingFunction: t,
                        animationFillMode: 'both',
                        content: '""'
                    },
                    [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(m)), {
                        position: 'relative',
                        display: 'inline-block',
                        outline: 'none',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }),
                    [`${ n }-wrapper:hover &,\n        &:hover ${ H }`]: { borderColor: p },
                    [`${ n }-input:focus-visible + ${ H }`]: Object.assign({}, (0, i.genFocusOutline)(m)),
                    [`${ n }:hover::after, ${ n }-wrapper:hover &::after`]: { visibility: 'visible' },
                    [`${ n }-inner`]: {
                        '&::after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            insetBlockStart: '50%',
                            insetInlineStart: '50%',
                            display: 'block',
                            width: q,
                            height: q,
                            marginBlockStart: q / -2,
                            marginInlineStart: q / -2,
                            backgroundColor: F ? p : G,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: q,
                            transform: 'scale(0)',
                            opacity: 0,
                            transition: `all ${ r } ${ u }`,
                            content: '""'
                        },
                        boxSizing: 'border-box',
                        position: 'relative',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: q,
                        height: q,
                        backgroundColor: v,
                        borderColor: w,
                        borderStyle: 'solid',
                        borderWidth: x,
                        borderRadius: '50%',
                        transition: `all ${ s }`
                    },
                    [`${ n }-input`]: {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0
                    },
                    [`${ n }-checked`]: {
                        [H]: {
                            borderColor: p,
                            backgroundColor: F ? v : p,
                            '&::after': {
                                transform: `scale(${ y / q })`,
                                opacity: 1,
                                transition: `all ${ r } ${ u }`
                            }
                        }
                    },
                    [`${ n }-disabled`]: {
                        cursor: 'not-allowed',
                        [H]: {
                            backgroundColor: z,
                            borderColor: w,
                            cursor: 'not-allowed',
                            '&::after': { backgroundColor: C }
                        },
                        [`${ n }-input`]: { cursor: 'not-allowed' },
                        [`${ n }-disabled + span`]: {
                            color: A,
                            cursor: 'not-allowed'
                        },
                        [`&${ n }-checked`]: { [H]: { '&::after': { transform: `scale(${ E / q })` } } }
                    },
                    [`span${ n } + *`]: {
                        paddingInlineStart: B,
                        paddingInlineEnd: B
                    }
                })
            };
        }, m = n => {
            const {
                radioButtonColor: o,
                controlHeight: p,
                componentCls: q,
                lineWidth: r,
                lineType: s,
                colorBorder: t,
                motionDurationSlow: u,
                motionDurationMid: v,
                radioButtonPaddingHorizontal: w,
                fontSize: x,
                radioButtonBg: y,
                fontSizeLG: z,
                controlHeightLG: A,
                controlHeightSM: B,
                paddingXS: C,
                borderRadius: D,
                borderRadiusSM: E,
                borderRadiusLG: F,
                radioCheckedColor: G,
                radioButtonCheckedBg: H,
                radioButtonHoverColor: I,
                radioButtonActiveColor: J,
                radioSolidCheckedColor: K,
                colorTextDisabled: L,
                colorBgContainerDisabled: M,
                radioDisabledButtonCheckedColor: N,
                radioDisabledButtonCheckedBg: O
            } = n;
            return {
                [`${ q }-button-wrapper`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: p,
                    margin: 0,
                    paddingInline: w,
                    paddingBlock: 0,
                    color: o,
                    fontSize: x,
                    lineHeight: p - 2 * r + 'px',
                    background: y,
                    border: `${ r }px ${ s } ${ t }`,
                    borderBlockStartWidth: r + 0.02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: r,
                    cursor: 'pointer',
                    transition: [
                        `color ${ v }`,
                        `background ${ v }`,
                        `border-color ${ v }`,
                        `box-shadow ${ v }`
                    ].join(','),
                    a: { color: o },
                    [`> ${ q }-button`]: {
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
                            insetBlockStart: -r,
                            insetInlineStart: -r,
                            display: 'block',
                            boxSizing: 'content-box',
                            width: 1,
                            height: '100%',
                            paddingBlock: r,
                            paddingInline: 0,
                            backgroundColor: t,
                            transition: `background-color ${ u }`,
                            content: '""'
                        }
                    },
                    '&:first-child': {
                        borderInlineStart: `${ r }px ${ s } ${ t }`,
                        borderStartStartRadius: D,
                        borderEndStartRadius: D
                    },
                    '&:last-child': {
                        borderStartEndRadius: D,
                        borderEndEndRadius: D
                    },
                    '&:first-child:last-child': { borderRadius: D },
                    [`${ q }-group-large &`]: {
                        height: A,
                        fontSize: z,
                        lineHeight: A - 2 * r + 'px',
                        '&:first-child': {
                            borderStartStartRadius: F,
                            borderEndStartRadius: F
                        },
                        '&:last-child': {
                            borderStartEndRadius: F,
                            borderEndEndRadius: F
                        }
                    },
                    [`${ q }-group-small &`]: {
                        height: B,
                        paddingInline: C - r,
                        paddingBlock: 0,
                        lineHeight: B - 2 * r + 'px',
                        '&:first-child': {
                            borderStartStartRadius: E,
                            borderEndStartRadius: E
                        },
                        '&:last-child': {
                            borderStartEndRadius: E,
                            borderEndEndRadius: E
                        }
                    },
                    '&:hover': {
                        position: 'relative',
                        color: G
                    },
                    '&:has(:focus-visible)': Object.assign({}, (0, i.genFocusOutline)(n)),
                    [`${ q }-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [`&-checked:not(${ q }-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: G,
                        background: H,
                        borderColor: G,
                        '&::before': { backgroundColor: G },
                        '&:first-child': { borderColor: G },
                        '&:hover': {
                            color: I,
                            borderColor: I,
                            '&::before': { backgroundColor: I }
                        },
                        '&:active': {
                            color: J,
                            borderColor: J,
                            '&::before': { backgroundColor: J }
                        }
                    },
                    [`${ q }-group-solid &-checked:not(${ q }-button-wrapper-disabled)`]: {
                        color: K,
                        background: G,
                        borderColor: G,
                        '&:hover': {
                            color: K,
                            background: I,
                            borderColor: I
                        },
                        '&:active': {
                            color: K,
                            background: J,
                            borderColor: J
                        }
                    },
                    '&-disabled': {
                        color: L,
                        backgroundColor: M,
                        borderColor: t,
                        cursor: 'not-allowed',
                        '&:first-child, &:hover': {
                            color: L,
                            backgroundColor: M,
                            borderColor: t
                        }
                    },
                    [`&-disabled${ q }-button-wrapper-checked`]: {
                        color: N,
                        backgroundColor: O,
                        borderColor: t,
                        boxShadow: 'none'
                    }
                }
            };
        };
    var _n = (0, g.default)('Radio', o => {
        const {
                padding: p,
                lineWidth: q,
                controlItemBgActiveDisabled: r,
                colorTextDisabled: s,
                colorBgContainer: t,
                fontSizeLG: u,
                controlOutline: v,
                colorPrimaryHover: w,
                colorPrimaryActive: x,
                colorText: y,
                colorPrimary: z,
                marginXS: A,
                controlOutlineWidth: B,
                colorTextLightSolid: C,
                wireframe: D
            } = o, E = `0 0 0 ${ B }px ${ v }`, F = E, G = u, H = G - 8, I = D ? H : G - 2 * (4 + q), J = z, K = y, L = w, M = x, N = p - q, O = s, P = A, Q = (0, h.merge)(o, {
                radioFocusShadow: E,
                radioButtonFocusShadow: F,
                radioSize: G,
                radioDotSize: I,
                radioDotDisabledSize: H,
                radioCheckedColor: J,
                radioDotDisabledColor: s,
                radioSolidCheckedColor: C,
                radioButtonBg: t,
                radioButtonCheckedBg: t,
                radioButtonColor: K,
                radioButtonHoverColor: L,
                radioButtonActiveColor: M,
                radioButtonPaddingHorizontal: N,
                radioDisabledButtonCheckedBg: r,
                radioDisabledButtonCheckedColor: O,
                radioWrapperMarginRight: P
            });
        return [
            k(Q),
            l(Q),
            m(Q)
        ];
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    }, function (f) {
        return _l = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
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
    const k = (l, m) => {
        const {getPrefixCls: n} = f.useContext(g.ConfigContext), {prefixCls: o} = l, p = j(l, ['prefixCls']), q = n('radio', o);
        return f.createElement(h.RadioOptionTypeContextProvider, { value: 'button' }, f.createElement(i.default, Object.assign({ prefixCls: q }, p, {
            type: 'radio',
            ref: m
        })));
    };
    var _l = f.forwardRef(k);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, f.request)({
            url: '/api/games/privacy',
            method: 'post',
            data: {
                id: g.default.kitDetails.id,
                privacy: i
            },
            success: () => {
                g.default.kitDetails.privacy = i;
            },
            error: () => !1
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UnlockOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z' }
                }]
        },
        name: 'unlock',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v;
    var _w = (0, k.observer)(() => {
        const x = (0, t.useLocation)(), {
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
    const _x = h.default.div(v || (v = (y => y)`
  background: ${ 0 };
  display: flex;
  align-items: center;
  z-index: ${ 0 };
  position: ${ 0 };
  width: 100%;
`), i.default.White, y => y.overlayVisible ? 101 : 1, y => y.overlayVisible ? 'relative' : 'static');
}), c.register('.....', function (d, e) {
    a(d.exports, 'editorBase', function () {
        return _g;
    }), a(d.exports, 'addNewQuestion', function () {
        return _h;
    }), a(d.exports, 'flashcardImport', function () {
        return _i;
    }), a(d.exports, 'spreadsheet', function () {
        return _j;
    }), a(d.exports, 'createWithFlashcards', function () {
        return _k;
    }), a(d.exports, 'flashcardHomebase', function () {
        return _l;
    }), a(d.exports, 'questionBank', function () {
        return _m;
    }), a(d.exports, 'kitCollab', function () {
        return _n;
    });
    var f = c('.....');
    const _g = h => (i => f.KIT_CREATOR + '/' + i)(h) + '/editor', _h = i => _g(i) + '/question', _i = j => _g(j) + '/flashcard-import', _j = k => _g(k) + '/spreadsheet', _k = l => _g(l) + '/flashcard-create', _l = m => _g(m) + '/flashcard-home', _m = n => _g(n) + '/question-bank', _n = o => _g(o) + '/kit-collab';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        const j = g.default.kitDetails.id || 'kitId';
        return (0, f.NavigateTo)(i(j));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'NavigateTo', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ApiOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 01-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 01-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z' }
                }]
        },
        name: 'api',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FunnelPlotOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z' }
                }]
        },
        name: 'funnel-plot',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'RocketOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z' }
                }]
        },
        name: 'rocket',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TableOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z' }
                }]
        },
        name: 'table',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    const o = '#1890FF', p = h.default.div(k || (k = n`
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
`), j.Fonts.SFPro, 14, q => q.selected && !q.blockBackground ? '#E5F7FE' : i.default.White, q => q.selected ? o : 'rgba(0,0,0,.65)', q => q.selected && !q.blockStripe && 'border-right: 3px solid ' + o + ';', o), q = h.default.div.attrs({ className: 'flex vc maxWidth' })(l || (l = n``)), r = h.default.div(m || (m = n``));
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
                            (0, f.jsx)(r, { children: t }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
}), c.register('.....', function (d, e) {
    a(d.exports, 'QUESTION_LIMIT', function () {
        return _k;
    }), a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const _k = 400;
    let l = class extends h.Component {
        render() {
            return this.props.editor.questions.length < _k ? null : (0, g.jsx)(i.default, {
                message: 'Question Limit Reached',
                description: `Kits cannot contain more than ${ _k } questions.`,
                type: 'error',
                style: { margin: 10 }
            });
        }
    };
    l = (0, f.__decorate)([
        (0, j.inject)('editor'),
        j.observer
    ], l);
    var _m = l;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
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
    const _p = j.default.div.attrs({ className: 'flex hc vc' })(m || (m = (q => q)`
  font-size: 14px;
  border-top: 1px solid ${ 0 };
  padding: 15px;
  line-height: 1;
`), k.default.BorderGray);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k;
    const l = g.default.div(k || (k = (m => m)`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'RIGHT_SIDE_HEADER_PADDING', function () {
        return _q;
    }), a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    const _q = 20;
    let r = class extends i.Component {
        render() {
            return (0, h.jsx)(_s, { children: this.getContent() });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'getContent', () => this.props.editor.questionsChecked.length ? (0, h.jsx)(n.default, {}) : (0, h.jsx)(o.default, {}));
        }
    };
    r = (0, g.__decorate)([
        (0, m.inject)('editor'),
        m.observer
    ], r);
    const _s = j.default.div(p || (p = (t => t)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${ 0 };
`), k.default.White, l.HEADER_HEIGHT, k.default.BorderGray);
    var _t = r;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s, t, u, v = w => w, w = class extends i.Component {
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
                                    style: { marginLeft: 5 },
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
                    this.props.editor.questionsChecked.length === this.props.editor.questions.length ? this.props.editor.questionsChecked.replace([]) : this.props.editor.questionsChecked.replace(this.props.editor.questions.map(x => x._id));
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
`), () => r.RIGHT_SIDE_HEADER_PADDING), _z = k.default.div(t || (t = v`
  font-weight: ${ 0 };
  font-size: 20px;
  cursor: pointer;
`), l.FontWeights.Bold), _A = k.default.div(u || (u = v`
  display: flex;
  align-items: center;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z' }
                }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const l = (0, i.toJS)(k);
        (0, f.request)({
            url: '/api/v1/editor/questions/remove',
            method: 'post',
            data: {
                questions: k,
                kitId: g.default.kitDetails.id
            },
            success: () => {
                g.default.editor.questionsChecked.replace([]);
                const m = g.default.editor.questions.filter(n => !l.includes(n._id));
                g.default.editor.questions.replace(m);
            },
            error: () => (0, h.throwError)({ title: 'Error deleting questions...' })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const l = (0, i.toJS)(k);
        (0, f.request)({
            url: '/api/v1/editor/questions/convert-text-input',
            method: 'post',
            data: {
                questions: l,
                kitId: g.default.kitDetails.id
            },
            success: m => {
                let n = {};
                m.forEach(o => n[o._id] = o), g.default.editor.questionsChecked.replace([]);
                const o = g.default.editor.questions.map(p => n[p._id] ? n[p._id] : p);
                g.default.editor.questions.replace(o);
            },
            error: () => (0, h.throwError)({
                title: 'Error converting questions...',
                content: 'One of the questions might have an image or equation as the answer, which cannot be converted to a text input question'
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
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
    const _o = g.default.div(m || (m = (p => p)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${ 0 }px;
`), () => h.RIGHT_SIDE_HEADER_PADDING);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var _h = i => i.external || !i.to ? (0, f.jsx)('a', {
        href: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        onKeyPress: j => {
            i.onClick && 'Enter' === j.key && (j.preventDefault(), i.onClick());
        },
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    }) : (0, f.jsx)(g.Link, {
        to: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    const k = c('.....').default.div.attrs({ className: 'scroll' })(j || (j = (l => l)`
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
                children: (0, g.jsx)(i.default, { scrollToTop: this.scrollToTop })
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    const q = (0, i.observer)(r => {
            const {
                editor: s,
                kitDetails: t
            } = g.useContext(o.default);
            return (0, f.jsx)(_r, {
                children: s.questions.map(u => (0, f.jsx)('div', {
                    children: (0, f.jsx)(j.default, {
                        question: u,
                        showCheckbox: !0,
                        checked: s.questionsChecked.includes(u._id),
                        handleCheckChange: v => {
                            const w = v.target.checked;
                            w && s.questionsChecked.push(u._id), w || s.questionsChecked.replace(s.questionsChecked.filter(x => x !== u._id));
                        },
                        canEdit: !0,
                        onEditClicked: v => {
                            v.stopPropagation(), s.currentlyEditingQuestionId = u._id, (0, l.default)(k.addNewQuestion);
                        },
                        onCopyClicked: v => {
                            v.stopPropagation();
                            const w = (0, n.questionToAddedQuestion)(u, t.id);
                            (0, m.default)([{
                                    ...w,
                                    source: u.source || 'editor'
                                }], () => {
                                r.scrollToTop();
                            });
                        }
                    }, u._id)
                }, u._id))
            });
        }), _r = h.default.div(p || (p = (s => s)`
  padding: ${ 0 }px;
`), 10);
    var _s = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _B;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....');
    let y;
    const z = (0, t.default)(o.default)(y || (y = (A => A)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), A => A.font ? A.font : u.Fonts.SFPro, v.default.Black);
    class A extends h.Component {
        componentDidUpdate(B) {
            B.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({ showingAnswers: !0 }) : this.setState({ showingAnswers: !1 }));
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
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, { width: '100%' }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, g.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, g.jsxs)('div', {
                                style: { justifyContent: 'space-between' },
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
                                                onClick: J => J.stopPropagation(),
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
                                        style: { marginLeft: 10 },
                                        children: [
                                            (0, g.jsx)(s.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, g.jsx)(n.default, {
                                                    shape: 'circle',
                                                    icon: (0, g.jsx)(k.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: { marginRight: 5 }
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
                                            style: { fontSize: 19 },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, g.jsx)('div', { style: { height: 12 } }),
                            this.state.showingAnswers && (0, g.jsx)('div', {
                                className: 'maxWidth',
                                style: { paddingLeft: C ? 34 : 0 },
                                children: B.answers.map((J, K) => (0, g.jsxs)(h.Fragment, {
                                    children: [
                                        (0, g.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, g.jsx)(w.default, {
                                                    text: J.text,
                                                    image: J.image,
                                                    latex: J.latex,
                                                    customTextColor: J.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                J.image || J.latex ? (0, g.jsx)(r.default, {
                                                    color: J.correct ? 'green' : 'red',
                                                    style: { marginLeft: J.image ? 2 : 12 },
                                                    children: J.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        K + 1 !== B.answers.length && (0, g.jsx)(q.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, J._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', { showingAnswers: this.props.showAllAnswers }), (0, f.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({ showingAnswers: !this.state.showingAnswers });
            }), (0, f.default)(this, 'onAudioPress', B => {
                B.stopPropagation();
                new Audio((0, x.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _B = A;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'AudioOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z' }
                }]
        },
        name: 'audio',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z' }
                }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z' }
                }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlusCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                }
            ]
        },
        name: 'plus-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    }, function (f) {
        return _p = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = (p, q) => {
        var r, {
                prefixCls: s,
                className: t,
                rootClassName: u,
                children: v,
                indeterminate: w = !1,
                style: x,
                onMouseEnter: y,
                onMouseLeave: z,
                skipGroup: A = !1,
                disabled: B
            } = p, C = n(p, [
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
                getPrefixCls: D,
                direction: E
            } = h.useContext(i.ConfigContext), F = h.useContext(k.GroupContext), {isFormItemInput: G} = h.useContext(j.FormItemInputContext), H = h.useContext(l.default), I = null !== (r = (null == F ? void 0 : F.disabled) || B) && void 0 !== r ? r : H, J = h.useRef(C.value);
        h.useEffect(() => {
            null == F || F.registerValue(C.value);
        }, []), h.useEffect(() => {
            if (!A)
                return C.value !== J.current && (null == F || F.cancelValue(J.current), null == F || F.registerValue(C.value), J.current = C.value), () => null == F ? void 0 : F.cancelValue(C.value);
        }, [C.value]);
        const K = D('checkbox', s), [L, M] = (0, m.default)(K), N = Object.assign({}, C);
        F && !A && (N.onChange = function () {
            C.onChange && C.onChange.apply(C, arguments), F.toggleOption && F.toggleOption({
                label: v,
                value: C.value
            });
        }, N.name = F.name, N.checked = F.value.includes(C.value));
        const O = b(f)({
                [`${ K }-wrapper`]: !0,
                [`${ K }-rtl`]: 'rtl' === E,
                [`${ K }-wrapper-checked`]: N.checked,
                [`${ K }-wrapper-disabled`]: I,
                [`${ K }-wrapper-in-form-item`]: G
            }, t, u, M), P = b(f)({ [`${ K }-indeterminate`]: w }, M), Q = w ? 'mixed' : void 0;
        return L(h.createElement('label', {
            className: O,
            style: x,
            onMouseEnter: y,
            onMouseLeave: z
        }, h.createElement(g.default, Object.assign({ 'aria-checked': Q }, N, {
            prefixCls: K,
            className: P,
            disabled: I,
            ref: q
        })), void 0 !== v && h.createElement('span', null, v)));
    };
    var _p = h.forwardRef(o);
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupContext', function () {
        return _n;
    }, function (f) {
        return _n = f;
    }), a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = function (n, o) {
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
    const _n = i.createContext(null), o = (p, q) => {
            var {
                    defaultValue: r,
                    children: s,
                    options: t = [],
                    prefixCls: u,
                    className: v,
                    rootClassName: w,
                    style: x,
                    onChange: y
                } = p, z = m(p, [
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
                    getPrefixCls: A,
                    direction: B
                } = i.useContext(j.ConfigContext), [C, D] = i.useState(z.value || r || []), [E, F] = i.useState([]);
            i.useEffect(() => {
                'value' in z && D(z.value || []);
            }, [z.value]);
            const G = () => t.map(H => 'string' == typeof H || 'number' == typeof H ? {
                    label: H,
                    value: H
                } : H), H = A('checkbox', u), I = `${ H }-group`, [J, K] = (0, l.default)(H), L = (0, h.default)(z, [
                    'value',
                    'disabled'
                ]);
            t && t.length > 0 && (s = G().map(M => i.createElement(k.default, {
                prefixCls: H,
                key: M.value.toString(),
                disabled: 'disabled' in M ? M.disabled : z.disabled,
                value: M.value,
                checked: C.includes(M.value),
                onChange: M.onChange,
                className: `${ I }-item`,
                style: M.style
            }, M.label)));
            const M = {
                    toggleOption: N => {
                        const O = C.indexOf(N.value), P = (0, f.default)(C);
                        -1 === O ? P.push(N.value) : P.splice(O, 1), 'value' in z || D(P);
                        const Q = G();
                        null == y || y(P.filter(R => E.includes(R)).sort((R, S) => Q.findIndex(T => T.value === R) - Q.findIndex(T => T.value === S)));
                    },
                    value: C,
                    disabled: z.disabled,
                    name: z.name,
                    registerValue: N => {
                        F(O => [].concat((0, f.default)(O), [N]));
                    },
                    cancelValue: N => {
                        F(O => O.filter(P => P !== N));
                    }
                }, N = b(g)(I, { [`${ I }-rtl`]: 'rtl' === B }, v, w, K);
            return J(i.createElement('div', Object.assign({
                className: N,
                style: x
            }, L, { ref: q }), i.createElement(_n.Provider, { value: M }, s)));
        }, p = i.forwardRef(o);
    var _q = i.memo(p);
}), c.register('.....', function (d, e) {
    a(d.exports, 'getStyle', function () {
        return _l;
    }), a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = new (0, f.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }), k = l => {
            const {checkboxCls: m} = l, n = `${ m }-wrapper`;
            return [
                {
                    [`${ m }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), { display: 'inline-flex' }),
                    [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ n }`]: { marginInlineStart: l.marginXS },
                        [`&${ n }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ m }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ m }-inner`]: Object.assign({}, (0, i.genFocusOutline)(l))
                        },
                        [`${ m }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: l.checkboxSize,
                            height: l.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: l.colorBgContainer,
                            border: `${ l.lineWidth }px ${ l.lineType } ${ l.colorBorder }`,
                            borderRadius: l.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ l.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: l.checkboxSize / 14 * 5,
                                height: l.checkboxSize / 14 * 8,
                                border: `${ l.lineWidthBold }px solid ${ l.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ l.motionDurationFast } ${ l.motionEaseInBack }, opacity ${ l.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: l.paddingXS,
                            paddingInlineEnd: l.paddingXS
                        }
                    })
                },
                {
                    [m]: {
                        '&-indeterminate': {
                            [`${ m }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: l.fontSizeLG / 2,
                                    height: l.fontSizeLG / 2,
                                    backgroundColor: l.colorPrimary,
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
                    [`${ n }:hover ${ m }:after`]: { visibility: 'visible' },
                    [`\n        ${ n }:not(${ n }-disabled),\n        ${ m }:not(${ m }-disabled)\n      `]: { [`&:hover ${ m }-inner`]: { borderColor: l.colorPrimary } },
                    [`${ n }:not(${ n }-disabled)`]: {
                        [`&:hover ${ m }-checked:not(${ m }-disabled) ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }-checked:not(${ m }-disabled):after`]: { borderColor: l.colorPrimaryHover }
                    }
                },
                {
                    [`${ m }-checked`]: {
                        [`${ m }-inner`]: {
                            backgroundColor: l.colorPrimary,
                            borderColor: l.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ l.motionDurationMid } ${ l.motionEaseOutBack } ${ l.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: l.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ l.lineWidthBold }px solid ${ l.colorPrimary }`,
                            animationName: j,
                            animationDuration: l.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ l.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ n }-checked:not(${ n }-disabled),\n        ${ m }-checked:not(${ m }-disabled)\n      `]: {
                        [`&:hover ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }:after`]: { borderColor: l.colorPrimaryHover }
                    }
                },
                {
                    [`${ n }-disabled`]: { cursor: 'not-allowed' },
                    [`${ m }-disabled`]: {
                        [`&, ${ m }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ m }-inner`]: {
                            background: l.colorBgContainerDisabled,
                            borderColor: l.colorBorder,
                            '&:after': { borderColor: l.colorTextDisabled }
                        },
                        '&:after': { display: 'none' },
                        '& + span': { color: l.colorTextDisabled },
                        [`&${ m }-indeterminate ${ m }-inner::after`]: { background: l.colorTextDisabled }
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
    var _n = (0, g.default)('Checkbox', (o, p) => {
        let {prefixCls: q} = p;
        return [_l(q, o)];
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = (p, q) => {
            var {
                    prefixCls: r,
                    className: s,
                    rootClassName: t,
                    style: u,
                    children: v,
                    icon: w,
                    color: x,
                    onClose: y,
                    closeIcon: z,
                    closable: A = !1
                } = p, B = n(p, [
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
                    getPrefixCls: C,
                    direction: D
                } = h.useContext(i.ConfigContext), [E, F] = h.useState(!0);
            h.useEffect(() => {
                'visible' in B && F(B.visible);
            }, [B.visible]);
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x), H = Object.assign({ backgroundColor: x && !G ? x : void 0 }, u), I = C('tag', r), [J, K] = (0, m.default)(I), L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K), M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                }, N = 'function' == typeof B.onClick || v && 'a' === v.type, O = w || null, P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v, Q = h.createElement('span', Object.assign({}, B, {
                    ref: q,
                    className: L,
                    style: H
                }), P, A ? z ? h.createElement('span', {
                    className: `${ I }-close-icon`,
                    onClick: M
                }, z) : h.createElement(f.default, {
                    className: `${ I }-close-icon`,
                    onClick: M
                }) : null);
            return J(N ? h.createElement(k.default, null, Q) : Q);
        }, p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
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
    var _k = l => {
        var {
                prefixCls: m,
                className: n,
                checked: o,
                onChange: p,
                onClick: q
            } = l, r = j(l, [
                'prefixCls',
                'className',
                'checked',
                'onChange',
                'onClick'
            ]);
        const {getPrefixCls: s} = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
                [`${ t }-checkable`]: !0,
                [`${ t }-checkable-checked`]: o
            }, n, v);
        return u(g.createElement('span', Object.assign({}, r, {
            className: w,
            onClick: x => {
                null == p || p(!o), null == q || q(x);
            }
        })));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        }, l = m => (0, i.genPresetColor)(m, (n, o) => {
            let {
                textColor: p,
                lightBorderColor: q,
                lightColor: r,
                darkColor: s
            } = o;
            return {
                [`${ m.componentCls }-${ n }`]: {
                    color: p,
                    background: r,
                    borderColor: q,
                    '&-inverse': {
                        color: m.colorTextLightSolid,
                        background: s,
                        borderColor: s
                    }
                }
            };
        }), m = n => {
            const {
                    paddingXXS: o,
                    lineWidth: p,
                    tagPaddingHorizontal: q,
                    componentCls: r
                } = n, s = q - p, t = o - p;
            return {
                [r]: Object.assign(Object.assign({}, (0, j.resetComponent)(n)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: n.marginXS,
                    paddingInline: s,
                    fontSize: n.tagFontSize,
                    lineHeight: `${ n.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: n.tagDefaultBg,
                    border: `${ n.lineWidth }px ${ n.lineType } ${ n.colorBorder }`,
                    borderRadius: n.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ n.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ r }-rtl`]: { direction: 'rtl' },
                    '&, a, a:hover': { color: n.tagDefaultColor },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': { color: n.colorTextHeading }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: { color: n.colorTextLightSolid }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': { color: n.colorTextLightSolid },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': { backgroundColor: n.colorPrimaryHover }
                        },
                        '&:active': { backgroundColor: n.colorPrimaryActive }
                    },
                    '&-hidden': { display: 'none' },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: { marginInlineStart: s }
                })
            };
        };
    var _n = (0, f.default)('Tag', o => {
        const {
                fontSize: p,
                lineHeight: q,
                lineWidth: r,
                fontSizeIcon: s
            } = o, t = Math.round(p * q), u = o.fontSizeSM, v = t - 2 * r, w = o.colorFillAlter, x = o.colorText, y = (0, g.merge)(o, {
                tagFontSize: u,
                tagLineHeight: v,
                tagDefaultBg: w,
                tagDefaultColor: x,
                tagIconSize: s - 2 * r,
                tagPaddingHorizontal: 8
            });
        return [
            m(y),
            l(y),
            k(y, 'success', 'Success'),
            k(y, 'processing', 'Info'),
            k(y, 'error', 'Error'),
            k(y, 'warning', 'Warning')
        ];
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    const o = g.default.div(k || (k = n`
  display: flex;
  align-items: center;
`)), p = g.default.div(l || (l = n`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), q => q.customTextColor ? q.customTextColor : h.default.Black, q => q.customFontSize ? q.customFontSize : 26, q => q.customFontWeight ? q.customFontWeight : 600), q = g.default.div(m || (m = n``));
    var _r = s => {
        var t;
        return (0, f.jsxs)(o, {
            onClick: u => s.blockOutsideClicks ? u.stopPropagation() : null,
            children: [
                s.image && (0, f.jsx)(i.default, {
                    image: s.image,
                    size: s.customImageSize || 45,
                    customRightMargin: s.customImageMargin || 5,
                    showBorder: !0
                }),
                s.latex ? (0, f.jsx)(q, {
                    style: (null === (t = s.text) || void 0 === t ? void 0 : t.length) ? {
                        color: h.default.Black,
                        padding: 20,
                        border: `1px solid ${ h.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: s.customFontSize || 26
                    } : {
                        color: h.default.Black,
                        fontSize: s.customFontSize || 26
                    },
                    children: (0, f.jsx)(j.default, { latex: s.latex })
                }) : null,
                (0, f.jsx)(p, {
                    ...s,
                    children: s.text
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, { latex: j.latex })
    });
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (o, p, q) => {
        const r = g.default.editor.questions.length, s = k.QUESTION_LIMIT - r, t = o.filter((u, v) => v < s);
        g.default.editor.error = (0, j.defaultError)(), (0, f.request)({
            url: '/api/v1/editor/questions/add',
            method: 'post',
            data: { questions: t },
            success: u => {
                (0, l.default)();
                let v = (0, h.toJS)(g.default.editor.questions);
                u.filter(w => !w.replaced).forEach(w => v[q && q.pushToBottom ? 'push' : 'unshift'](w.question));
                u.filter(w => null !== w.replaced).forEach(w => {
                    v = v.map(x => x._id !== w.replaced ? x : w.question);
                }), g.default.editor.questions.replace(v), q && q.stay || (0, m.default)(i.editorBase);
            },
            error: u => {
                u && u.message && u.message.text && (g.default.editor.error.message = u.message.text);
            },
            both: () => {
                p && p();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        f.default.editor.editSessionCounted || (0, g.request)({
            url: '/api/v1/editor/edit-session',
            method: 'post',
            data: { kitId: f.default.kitDetails.id },
            success: () => f.default.editor.editSessionCounted = !0,
            error: () => !1
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'questionToAddedQuestion', function () {
        return _x;
    }), a(d.exports, 'default', function () {
        return _A;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    const {TabPane: u} = m.default;
    let v;
    var w;
    (w = v || (v = {})).search = 'search', w.myKits = 'myKits';
    const _x = (y, z) => ({
            questionText: y.text,
            image: y.image,
            audio: y.audio,
            latex: y.latex,
            type: y.type,
            source: 'import',
            answers: y.answers.map(A => ({
                correct: A.correct,
                text: A.text,
                image: A.image,
                latex: A.latex,
                textType: A.textType
            })),
            kitId: z
        }), y = {
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
                bodyStyle: { overflow: 'hidden' },
                onClose: B,
                closable: !0,
                children: [
                    (0, h.jsxs)(m.default, {
                        onChange: this.handleTabChange,
                        type: 'card',
                        activeKey: this.state.selectedTab,
                        children: [
                            (0, h.jsx)(u, { tab: 'Search' }, v.search),
                            (0, h.jsx)(u, { tab: 'My Kits' }, v.myKits)
                        ]
                    }),
                    this.getSearch()
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', y), (0, f.default)(this, 'handleTabChange', A => {
                this.setState({ selectedTab: A });
            }), (0, f.default)(this, 'addQuestion', A => {
                this.setState({
                    addedQuestionIds: [
                        ...this.state.addedQuestionIds,
                        A._id
                    ]
                }), (0, r.default)([_x(A, this.props.kitDetails.id)], () => !1, { stay: !0 });
            }), (0, f.default)(this, 'renderQuestions', A => {
                const B = A.filter(C => !this.state.addedQuestionIds.includes(C._id));
                if (!B.length)
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
                                        (0, r.default)(B.map(C => _x(C, this.props.kitDetails.id)));
                                    },
                                    type: 'primary',
                                    icon: (0, h.jsx)(j.default, {}),
                                    children: 'Add All Questions'
                                })
                            ]
                        }),
                        (0, h.jsx)(q.default, {
                            children: B.map(C => (0, h.jsx)('div', {
                                children: (0, h.jsx)(p.default, {
                                    question: C,
                                    showAllAnswers: !0,
                                    canAdd: !0,
                                    onAddClicked: D => {
                                        D.stopPropagation(), this.addQuestion(C);
                                    }
                                })
                            }, C._id))
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
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
                    this.props.overrideTitle && (0, g.jsx)(j.Title, { title: `Kits about "${ this.props.searchQuery }"` }),
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
                            (0, g.jsx)(l.RightSide, { children: this.getRightSide() })
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
                        success: A => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...A.results
                                ],
                                hasMore: A.hasMore,
                                page: A.page
                            });
                        },
                        error: () => {
                            this.setState({ error: !0 }), (0, n.throwError)({
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
                    this.setState({ loading: !1 });
            }), (0, f.default)(this, 'fetchMyKits', () => {
                this.setState({ fetchingResults: !0 }), (0, j.request)({
                    cacheKey: v,
                    url: '/api/games/summary/me',
                    method: 'GET',
                    success: y => {
                        this.setState({
                            results: y.games.map(z => ({
                                _id: z._id,
                                title: z.title,
                                gif: z.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: b(u)(z.createdAt).toISOString()
                            }))
                        });
                    },
                    error: () => (0, n.throwError)({ title: 'Error fetching Kits' }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                });
            }), (0, f.default)(this, 'fetchQuestions', y => {
                (0, j.request)({
                    url: `/api/games/questions/search/${ y }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: v,
                    method: 'get',
                    success: z => {
                        const A = z.reverse();
                        this.setState({
                            questions: A,
                            currentKit: y
                        });
                    },
                    error: () => !1
                });
            }), (0, f.default)(this, 'onSearch', y => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: y,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, f.default)(this, 'debouncedHover', (0, p.debounce)(y => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(y._id);
            }, 50)), (0, f.default)(this, 'onUpdateSearchQuery', y => {
                this.setState({ draftSearchQuery: y });
            }), (0, f.default)(this, 'onLanguageSelected', y => {
                this.setState({ language: y });
            }), (0, f.default)(this, 'onSubjectSelected', y => {
                this.setState({ subject: y });
            }), (0, f.default)(this, 'onSortSelected', y => {
                this.setState({ sort: y });
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
                children: this.state.results.map((y, z) => (0, g.jsx)(h.Fragment, {
                    children: (0, g.jsx)(k.default, {
                        id: y._id,
                        title: y.title,
                        gif: y.gif,
                        handleHover: () => this.debouncedHover(y),
                        numberOfQuestions: y.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: y.creator,
                        dateCreated: y.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === y._id,
                        blockHoverable: !0
                    }, y._id)
                }, `read-item-${ y._id }`))
            }) : !this.state.results.length && (0, g.jsx)('div', {
                className: 'maxWidth flex hc vc flex-column',
                children: (0, g.jsxs)('div', {
                    style: {
                        padding: '0 38px',
                        marginTop: 42,
                        textAlign: 'center'
                    },
                    children: [
                        (0, g.jsx)('img', { src: '/client/img/icons/sad.svg' }),
                        (0, g.jsxs)('div', {
                            style: {
                                marginTop: 18,
                                fontFamily: q.Fonts.SFPro,
                                fontSize: 20
                            },
                            children: [
                                (0, g.jsx)('div', { children: 'We couldn\'t find any results.' }),
                                !this.props.isFromQuestionBank && (0, g.jsxs)('div', {
                                    style: { marginTop: 24 },
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
            })), (0, f.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(y => (0, g.jsx)(m.default, {
                question: y,
                showAllAnswers: !0
            }, y._id)));
        }
    }
    var _x = w;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _N;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s, t, u, v, w, x, y, z, A, B = C => C;
    const C = (0, k.default)(n.default).attrs({ className: 'maxWidth' })(q || (q = B`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)), D = (0, k.default)(g.default)(r || (r = B`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), m.default.White, m.default.BorderGray, i.Fonts.SFPro), E = k.default.div.attrs({ className: 'flex-column' })(s || (s = B`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178), F = k.default.div(t || (t = B`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)), G = k.default.div(u || (u = B`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), i.FontWeights.Bold), H = k.default.div(v || (v = B`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)), I = k.default.div(w || (w = B`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)), J = k.default.div(x || (x = B`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), i.Fonts.SFPro), K = k.default.i(y || (y = B`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)), L = (0, k.default)(K).attrs({ className: 'fad fa-list' })(z || (z = B``)), M = (0, k.default)(K).attrs({ className: 'fad fa-calendar-alt' })(A || (A = B``));
    var _N = O => {
        const P = 'normal' === O.size;
        return (0, f.jsx)(C, {
            to: O.blockRedirect ? void 0 : `/view/${ O.id }`,
            children: (0, f.jsx)(D, {
                className: 'maxWidth',
                onMouseEnter: O.handleHover,
                bodyStyle: { padding: 14 },
                hoverable: !O.blockHoverable,
                style: { backgroundColor: O.selected ? '#eeeeee' : m.default.White },
                children: (0, f.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(j.default, {
                                image: O.gif,
                                size: P ? 178 : 148,
                                onClick: O.redirectOnImageClick && (() => O.blockRedirect ? null : (0, o.NavigateTo)(`/view/${ O.id }`))
                            })
                        }),
                        (0, f.jsx)(E, {
                            children: (0, f.jsxs)(F, {
                                children: [
                                    (0, f.jsx)(G, {
                                        style: { fontSize: P ? 32 : 23 },
                                        children: O.title
                                    }),
                                    O.creator && (0, f.jsx)(H, {
                                        style: { fontSize: P ? 18 : 16 },
                                        children: (0, l.capitalizeFirstLetter)(O.creator)
                                    }),
                                    (0, f.jsx)(h.default, { style: { margin: '16px 0px 18px 0px' } }),
                                    !!O.numberOfQuestions && (0, f.jsxs)(I, {
                                        children: [
                                            (0, f.jsx)(L, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    O.numberOfQuestions ? O.numberOfQuestions : '',
                                                    ' ',
                                                    O.numberOfQuestions ? (0, l.plural)('question', O.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    O.dateCreated && P && (0, f.jsxs)(J, {
                                        children: [
                                            (0, f.jsx)(M, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    b(p)(O.dateCreated).fromNow()
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'LeftSide', function () {
        return _m;
    }), a(d.exports, 'RightSide', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i, j, k, l = m => m;
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
`), g.default.White, g.default.BorderGray, n => n.customPadding ? n.customPadding : '15px'), _n = f.default.div.attrs({
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = function (h, i) {
            return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (j, k) {
                j.__proto__ = k;
            } || function (j, k) {
                for (var l in k)
                    k.hasOwnProperty(l) && (j[l] = k[l]);
            }, g(h, i);
        };
    var h = function () {
        return h = Object.assign || function (i) {
            for (var j, k = 1, l = arguments.length; k < l; k++)
                for (var m in j = arguments[k])
                    Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
            return i;
        }, h.apply(this, arguments);
    };
    var i = 'Pixel', j = 'Percent', k = {
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
    var m = function (n) {
            function o(p) {
                var q = n.call(this, p) || this;
                return o.lastScrollTop = 0, o.actionTriggered = !1, o.startY = 0, o.currentY = 0, o.dragging = !1, o.maxPullDownDistance = 0, o.getScrollableTarget = function () {
                    return o.props.scrollableTarget instanceof HTMLElement ? o.props.scrollableTarget : 'string' == typeof o.props.scrollableTarget ? document.getElementById(o.props.scrollableTarget) : (null === o.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, o.onStart = function (r) {
                    o.lastScrollTop || (o.dragging = !0, r instanceof MouseEvent ? o.startY = r.pageY : r instanceof TouchEvent && (o.startY = r.touches[0].pageY), o.currentY = o.startY, o._infScroll && (o._infScroll.style.willChange = 'transform', o._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, o.onMove = function (r) {
                    o.dragging && (r instanceof MouseEvent ? o.currentY = r.pageY : r instanceof TouchEvent && (o.currentY = r.touches[0].pageY), o.currentY < o.startY || (o.currentY - o.startY >= Number(o.props.pullDownToRefreshThreshold) && o.setState({ pullToRefreshThresholdBreached: !0 }), o.currentY - o.startY > 1.5 * o.maxPullDownDistance || o._infScroll && (o._infScroll.style.overflow = 'visible', o._infScroll.style.transform = 'translate3d(0px, ' + (o.currentY - o.startY) + 'px, 0px)')));
                }, o.onEnd = function () {
                    o.startY = 0, o.currentY = 0, o.dragging = !1, o.state.pullToRefreshThresholdBreached && (o.props.refreshFunction && o.props.refreshFunction(), o.setState({ pullToRefreshThresholdBreached: !1 })), requestAnimationFrame(function () {
                        o._infScroll && (o._infScroll.style.overflow = 'auto', o._infScroll.style.transform = 'none', o._infScroll.style.willChange = 'none');
                    });
                }, o.onScrollListener = function (r) {
                    'function' == typeof o.props.onScroll && setTimeout(function () {
                        return o.props.onScroll && o.props.onScroll(r);
                    }, 0);
                    var s = o.props.height || o._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    o.actionTriggered || ((o.props.inverse ? o.isElementAtTop(s, o.props.scrollThreshold) : o.isElementAtBottom(s, o.props.scrollThreshold)) && o.props.hasMore && (o.actionTriggered = !0, o.setState({ showLoader: !0 }), o.props.next && o.props.next()), o.lastScrollTop = s.scrollTop);
                }, o.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, o.throttledOnScrollListener = function (r, s, t, u) {
                    var v, w = !1, x = 0;
                    function y() {
                        v && clearTimeout(v);
                    }
                    function z() {
                        var A = this, B = Date.now() - x, C = arguments;
                        function D() {
                            x = Date.now(), t.apply(z, C);
                        }
                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function () {
                        y(), w = !0;
                    }, z;
                }(150, o.onScrollListener).bind(o), o.onStart = o.onStart.bind(o), o.onMove = o.onMove.bind(o), o.onEnd = o.onEnd.bind(o), o;
            }
            return function (q, r) {
                function s() {
                    this.constructor = q;
                }
                g(q, r), q.prototype = null === r ? Object.create(r) : (s.prototype = r.prototype, new s());
            }(o, n), o.prototype.componentDidMount = function () {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function () {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function (q) {
                this.props.dataLength !== q.dataLength && (this.actionTriggered = !1, this.setState({ showLoader: !1 }));
            }, o.prototype.isElementAtTop = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop <= t.value + s - q.scrollHeight + 1 || 0 === q.scrollTop : q.scrollTop <= t.value / 100 + s - q.scrollHeight + 1 || 0 === q.scrollTop;
            }, o.prototype.isElementAtBottom = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop + s >= q.scrollHeight - t.value : q.scrollTop + s >= t.value / 100 * q.scrollHeight;
            }, o.prototype.render = function () {
                var q = this, r = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style), s = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length), t = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {};
                return b(f).createElement('div', {
                    style: t,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function (u) {
                        return q._infScroll = u;
                    },
                    style: r
                }, this.props.pullDownToRefresh && b(f).createElement('div', {
                    style: { position: 'relative' },
                    ref: function (u) {
                        return q._pullDown = u;
                    }
                }, b(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !s && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component), _n = m;
}), c.register('.....', function (d, e) {
    a(d.exports, 'SortOptions', function () {
        return _v;
    }), a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s = t => t;
    const t = g.default.div(q || (q = s`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), n.FontWeights.Bold, n.Fonts.SFPro), u = (0, g.default)(j.default).attrs({
            placement: 'bottomLeft',
            trigger: 'click',
            overlayStyle: { width: 220 }
        })(r || (r = s``));
    let _v;
    var w;
    (w = _v || (_v = {})).relevant = 'relevant', w.recent = 'recent';
    var _x = y => (0, f.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: y.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, f.jsx)(i.default.Search, {
                placeholder: 'Search for kits...',
                onSearch: y.onSearch,
                size: 'large',
                enterButton: !0,
                autoFocus: !0,
                style: { flex: 1 },
                loading: y.loading,
                value: y.searchQuery,
                onChange: z => y.onUpdateSearchQuery(z.target.value)
            }),
            (0, f.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: y.showFilters ? 'visible' : 'hidden'
                },
                children: [
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, { children: 'Language:' }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Languages',
                                    className: 'maxWidth',
                                    value: y.language,
                                    onChange: z => y.onLanguageSelected(z),
                                    children: [...(0, m.getListOfLanguages)()].map(z => (0, f.jsx)(k.default.Option, {
                                        value: z,
                                        children: z
                                    }, z))
                                }),
                                (0, f.jsx)(t, {
                                    style: { marginTop: 12 },
                                    children: 'Subject:'
                                }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Subjects',
                                    className: 'maxWidth',
                                    value: y.subject,
                                    onChange: z => y.onSubjectSelected(z),
                                    children: [...l.optionsForAreaOfExpertise].map(z => (0, f.jsx)(k.default.Option, {
                                        value: z,
                                        children: z
                                    }, z))
                                })
                            ]
                        }),
                        children: (0, f.jsx)(h.default, {
                            style: { marginRight: 12 },
                            icon: (0, f.jsx)(o.default, {}),
                            size: 'small',
                            type: y.language || y.subject ? 'primary' : 'default',
                            children: 'Filter'
                        })
                    }),
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, { children: 'Sort By:' }),
                                (0, f.jsxs)(k.default, {
                                    className: 'maxWidth',
                                    value: y.sort,
                                    onChange: z => y.onSortSelected(z),
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = p => {
            let {
                title: q,
                content: r,
                prefixCls: s
            } = p;
            return q || r ? g.createElement(g.Fragment, null, q && g.createElement('div', { className: `${ s }-title` }, (0, j.getRenderPropValue)(q)), g.createElement('div', { className: `${ s }-inner-content` }, (0, j.getRenderPropValue)(r))) : null;
        }, p = g.forwardRef((q, r) => {
            var s, t;
            const {
                    prefixCls: u,
                    title: v,
                    content: w,
                    overlayClassName: x,
                    placement: y = 'top',
                    trigger: z = 'hover',
                    mouseEnterDelay: A = 0.1,
                    mouseLeaveDelay: B = 0.1,
                    overlayStyle: C = {},
                    arrowPointAtCenter: D,
                    arrow: E
                } = q, F = n(q, [
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
                ]), {getPrefixCls: G} = g.useContext(h.ConfigContext), H = G('popover', u), [I, J] = (0, m.default)(H), K = G(), L = b(f)(x, J), M = null !== (t = null !== (s = 'boolean' != typeof E && (null == E ? void 0 : E.arrowPointAtCenter)) && void 0 !== s ? s : D) && void 0 !== t && t, N = null != E ? E : { arrowPointAtCenter: M };
            return I(g.createElement(i.default, Object.assign({
                placement: y,
                arrow: N,
                trigger: z,
                mouseEnterDelay: A,
                mouseLeaveDelay: B,
                overlayStyle: C
            }, F, {
                prefixCls: H,
                overlayClassName: L,
                ref: r,
                overlay: g.createElement(o, {
                    prefixCls: H,
                    title: v,
                    content: w
                }),
                transitionName: (0, k.getTransitionName)(K, 'zoom-big', F.transitionName),
                'data-popover-inject': !0
            })));
        });
    p._InternalPanelDoNotUseOrYouWillBeFired = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'getRenderPropValue', function () {
        return _f;
    });
    const _f = g => g ? 'function' == typeof g ? g() : g : null;
}), c.register('.....', function (d, e) {
    a(d.exports, 'getOverlay', function () {
        return _m;
    }, function (f) {
        return _m = f;
    }), a(d.exports, 'RawPurePanel', function () {
        return _n;
    }, function (f) {
        return _n = f;
    }), a(d.exports, 'default', function () {
        return _v;
    }, function (f) {
        return _v = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = function (m, n) {
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
    const _m = (n, o, p) => {
        if (o || p)
            return f.createElement(f.Fragment, null, o && f.createElement('div', { className: `${ n }-title` }, (0, k.getRenderPropValue)(o)), f.createElement('div', { className: `${ n }-inner-content` }, (0, k.getRenderPropValue)(p)));
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
        }), _n || _m(q, u, v)));
    }
    function _v(w) {
        const {prefixCls: x} = w, y = v(w, ['prefixCls']), {getPrefixCls: z} = f.useContext(s.ConfigContext), A = z('popover', x), [B, C] = (0, j.default)(A);
        return B(f.createElement(_n, Object.assign({}, y, {
            prefixCls: A,
            hashId: C
        })));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = m => {
            const {
                componentCls: n,
                popoverBg: o,
                popoverColor: p,
                width: q,
                fontWeightStrong: r,
                popoverPadding: s,
                boxShadowSecondary: t,
                colorTextHeading: u,
                borderRadiusLG: v,
                zIndexPopup: w,
                marginXS: x,
                colorBgElevated: y
            } = m;
            return [
                {
                    [n]: Object.assign(Object.assign({}, (0, j.resetComponent)(m)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: w,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': y,
                        '&-rtl': { direction: 'rtl' },
                        '&-hidden': { display: 'none' },
                        [`${ n }-content`]: { position: 'relative' },
                        [`${ n }-inner`]: {
                            backgroundColor: o,
                            backgroundClip: 'padding-box',
                            borderRadius: v,
                            boxShadow: t,
                            padding: s
                        },
                        [`${ n }-title`]: {
                            minWidth: q,
                            marginBottom: x,
                            color: u,
                            fontWeight: r
                        },
                        [`${ n }-inner-content`]: { color: p }
                    })
                },
                (0, k.default)(m, { colorBg: 'var(--antd-arrow-background-color)' }),
                {
                    [`${ n }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ n }-content`]: { display: 'inline-block' }
                    }
                }
            ];
        }, m = n => {
            const {componentCls: o} = n;
            return {
                [o]: i.PresetColors.map(p => {
                    const q = n[`${ p }-6`];
                    return {
                        [`&${ o }-${ p }`]: {
                            '--antd-arrow-background-color': q,
                            [`${ o }-inner`]: { backgroundColor: q },
                            [`${ o }-arrow`]: { background: 'transparent' }
                        }
                    };
                })
            };
        }, n = o => {
            const {
                    componentCls: p,
                    lineWidth: q,
                    lineType: r,
                    colorSplit: s,
                    paddingSM: t,
                    controlHeight: u,
                    fontSize: v,
                    lineHeight: w,
                    padding: x
                } = o, y = u - Math.round(v * w);
            return {
                [p]: {
                    [`${ p }-inner`]: { padding: 0 },
                    [`${ p }-title`]: {
                        margin: 0,
                        padding: `${ y / 2 }px ${ x }px ${ y / 2 - q }px`,
                        borderBottom: `${ q }px ${ r } ${ s }`
                    },
                    [`${ p }-inner-content`]: { padding: `${ t }px ${ x }px` }
                }
            };
        };
    var _o = (0, g.default)('Popover', p => {
        const {
                colorBgElevated: q,
                colorText: r,
                wireframe: s
            } = p, t = (0, h.merge)(p, {
                popoverBg: q,
                popoverColor: r,
                popoverPadding: 12
            });
        return [
            l(t),
            m(t),
            s && n(t),
            (0, f.initZoomMotion)(t, 'zoom-big')
        ];
    }, p => {
        let {zIndexPopupBase: q} = p;
        return {
            zIndexPopup: q + 30,
            width: 177
        };
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FilterOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z' }
                }]
        },
        name: 'filter',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SortDescendingOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z' }
                }]
        },
        name: 'sort-descending',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = (0, h.observer)(() => {
        const {
                editor: r,
                kitDetails: {id: s}
            } = i.useContext(m.default), t = (0, j.useLocation)(), [u, v, w] = (0, g.useBoolean)(!1), x = i.useRef(), y = i.useMemo(() => !r.currentlyEditingQuestionId && r.questions.length >= p.QUESTION_LIMIT, [
                r.questions.length,
                r.currentlyEditingQuestionId
            ]), z = i.useMemo(() => t.pathname.endsWith('question'), [t.pathname.length]), A = i.useMemo(() => {
                if (r.currentlyEditingQuestionId)
                    return r.questions.find(B => B._id === r.currentlyEditingQuestionId);
            }, [r.currentlyEditingQuestionId]), B = () => {
                r.currentlyEditingQuestionId = '';
            };
        return (0, f.jsx)(o.default, {
            ref: x,
            visible: z,
            close: () => (0, n.default)(k.editorBase),
            existingQuestion: A,
            submitQuestion: C => {
                v(), (0, l.default)([{
                        questionText: C.text,
                        image: C.image,
                        audio: C.audio,
                        latex: C.latex,
                        type: C.type,
                        source: 'editor',
                        answers: C.answers.filter(D => {
                            var E;
                            const F = null === (E = D.text) || void 0 === E ? void 0 : E.trim();
                            return !!(null == F ? void 0 : F.length) || (D.latex || D.image);
                        }),
                        kitId: s,
                        replacingQuestion: C._id || ''
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        const l = (0, j.useLocation)().pathname.endsWith('flashcard-import');
        return (0, f.jsx)(h.default, {
            visible: l,
            close: () => (0, i.default)(g.editorBase)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _F;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....');
    let z;
    const {TextArea: A} = l.default;
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
                    style: { top: 20 },
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
            super(...a), (0, f.default)(this, 'state', D), (0, f.default)(this, 'skipToLastStep', () => this.setState({ screen: B.paste })), (0, f.default)(this, 'toggleOverlay', () => this.setState({ overlayOpen: !this.state.overlayOpen })), (0, f.default)(this, 'flip', () => this.setState({ textAreaInput: (0, r.flip)(this.state.textAreaInput) })), (0, f.default)(this, 'getContent', () => {
                const F = (0, r.MakeBaseQuestions)((0, r.MakeQuizletQuestionMap)(this.state.textAreaInput));
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsxs)('div', {
                            className: 'flex maxWidth vc',
                            style: { justifyContent: 'space-between' },
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
                                            children: (0, h.jsx)('span', { children: 'Find a flashcard set and paste the text below.' })
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
                        (0, h.jsx)('div', { style: { height: 10 } }),
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
                        (0, h.jsx)('div', { style: { height: 3 } }),
                        F.length > 1 && (0, h.jsxs)('div', {
                            className: 'flex vc',
                            style: { justifyContent: 'space-between' },
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
                this.setState({ loading: !0 });
                const G = F.reverse().map(H => ({
                    questionText: H.text,
                    image: H.image,
                    type: t.QuestionType.multipleChoice,
                    source: 'flashcard-import',
                    answers: H.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, y.chunk)(G, 20).forEach(H => {
                    (0, s.default)(H, () => this.setState({ loading: !1 }), { pushToBottom: !0 });
                });
            }), (0, f.default)(this, 'onTextAreaChanged', F => {
                this.setState({ textAreaInput: F.target.value });
            });
        }
    };
    E = (0, g.__decorate)([
        (0, u.inject)('kitDetails', 'editor'),
        u.observer
    ], E);
    var _F = E;
    const _G = o.default.div(z || (z = (H => H)`
  .ant-steps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z' }
                }]
        },
        name: 'question',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'MakeQuizletQuestionMap', function () {
        return _i;
    }), a(d.exports, 'MakeBaseQuestions', function () {
        return _j;
    }), a(d.exports, 'flip', function () {
        return _k;
    });
    var f = c('.....');
    const g = h => null != h.match(/\.(jpeg|jpg|gif|png)$/), h = i => i.text ? i.text : i.image ? i.image : '', _i = j => j.split('\n').map(k => {
            let l = {
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
            const m = k.split('\t').filter(n => n && n.length > 0);
            if (m.length <= 1)
                return null;
            if (3 === m.length)
                return g(m[0]) ? (l.question.image = m[0], l.question.text = m[1], l.answer.text = m[2]) : (l.question.text = m[0], l.answer.text = m[1], l.question.image = m[2]), l;
            l.question.text = m[0];
            g(m[1]) ? l.answer.image = m[1] : l.answer.text = m[1];
            return l;
        }).filter(k => !(!k || !k.question.text && !k.question.image || !k.answer.image && !k.answer.text)), _j = k => {
            const l = k.map(m => {
                const n = [{
                            ...m.answer,
                            correct: !0
                        }], o = () => {
                        let p = !1;
                        for (let q = 0; q < 10; q++) {
                            if (p)
                                return;
                            const r = (0, f.shuffle)(k)[0];
                            let s = !1;
                            n.forEach(t => {
                                h(t) === h(q.answer) && (s = !0);
                            }), s || (n.push({
                                ...q.answer,
                                correct: !1
                            }), p = !0);
                        }
                        p || n.push({
                            text: '---',
                            image: null,
                            correct: !1
                        });
                    };
                return o(), o(), o(), {
                    text: m.question.text,
                    image: m.question.image,
                    audio: m.question.audio,
                    latex: m.question.latex,
                    answers: n
                };
            });
            return l && l.length ? l : [];
        }, _k = l => {
            let m = '';
            const n = l.split('\n').map(o => o.split('\t').reverse());
            return n.forEach((o, p) => {
                o.forEach((q, r) => {
                    m += q, r + 1 === o.length ? p + 1 !== n.length && (m += '\n') : m += '\t';
                });
            }), m;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const l = k.questions.map((m, n) => ({
            _id: 'quizlet-question-' + n,
            text: m.text,
            type: h.QuestionType.multipleChoice,
            image: m.image,
            audio: m.audio,
            latex: m.latex,
            answers: m.answers.map((o, p) => ({
                _id: 'quizlet-answer-' + n + '-' + p,
                text: o.text,
                image: o.image,
                latex: o.latex,
                correct: o.correct
            }))
        }));
        return (0, f.jsx)(g.default, {
            open: k.visible,
            placement: 'right',
            closable: !0,
            destroyOnClose: !0,
            onClose: k.close,
            width: 515,
            children: l.map(m => (0, f.jsx)(i.default, {
                question: m,
                showAllAnswers: !0
            }, m._id))
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        const l = (0, j.useLocation)().pathname.endsWith('question-bank');
        return (0, f.jsx)(h.default, {
            visible: l,
            close: () => (0, i.default)(g.editorBase)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = () => {
        const j = (0, g.useNavigate)(), k = (0, g.useLocation)().pathname.endsWith('spreadsheet');
        return (0, f.jsx)(h.default, {
            visible: k,
            close: () => j(-1)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _G;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z = A => A;
    const A = B => (0, f.jsx)('a', {
            href: B.link,
            target: '_blank',
            style: { width: '100%' },
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
                        children: B.title
                    }),
                    (0, f.jsx)('div', {
                        style: { lineHeight: '17px' },
                        children: B.description
                    })
                ]
            })
        }), B = C => C.filter(D => D && D.length > 0), C = (0, t.observer)(D => {
            const {kitDetails: E} = g.useContext(v.default), [F, G] = g.useState(!1), [H, I] = g.useState(''), J = ({file: K}) => {
                    I('');
                    const L = [];
                    q.parse(K, {
                        complete: M => {
                            if (M && M.data && M.data.length && M.data[0][0] && M.data[0][0].endsWith('Template 2')) {
                                const N = [];
                                M.data.forEach((O, P) => {
                                    P > 1 && O[0] && O[1] && N.push({
                                        question: { text: O[0] },
                                        answer: { text: O[1] }
                                    });
                                }), (0, u.MakeBaseQuestions)(N).forEach(O => {
                                    L.push({
                                        text: O.text,
                                        answers: O.answers.map(P => ({
                                            correct: P.correct,
                                            text: P.text
                                        }))
                                    });
                                }), L && L.length || I('Invalid format. Make sure you\'re using our template and have a question and correct answer for each row.');
                            } else
                                M && M.data && M.data[1] && B(M.data[1]).length >= 5 && M.data.forEach((O, P) => {
                                    if (P > 1) {
                                        const Q = B(O);
                                        if (!Q[0])
                                            return;
                                        const R = [];
                                        for (let S = 1; S < Q.length; S++)
                                            R.push({
                                                correct: 1 === S,
                                                text: Q[S]
                                            });
                                        R.length >= 2 && L.push({
                                            text: Q[0],
                                            answers: R
                                        });
                                    }
                                }), L && L.length || I('Invalid format. Make sure you\'re using our template and have a question, correct answer, and at least one incorrect answer for each row.');
                            L && L.length && (G(!0), (0, r.default)(L.map(O => ({
                                questionText: O.text,
                                type: s.QuestionType.multipleChoice,
                                answers: O.answers,
                                source: 'spreadsheet',
                                kitId: N.id
                            })), () => G(!1)));
                        }
                    });
                };
            return (0, f.jsx)(l.default, {
                open: D.visible,
                onCancel: D.close,
                footer: !1,
                width: 670,
                closable: !1,
                style: { top: 20 },
                children: (0, f.jsxs)(_D, {
                    className: 'flex maxWidth flex-column',
                    children: [
                        (0, f.jsx)(_E, { children: 'Import from Spreadsheet' }),
                        (0, f.jsx)(_F, { children: 'Want to add questions super quickly? Add them in a spreadsheet and import them here! To get started, choose a template below. Fill out the spreadsheet with your questions & answers and download it as a CSV file.' }),
                        (0, f.jsx)('div', { style: { height: 7 } }),
                        (0, f.jsxs)('div', {
                            className: 'flex vc',
                            style: { justifyContent: 'space-between' },
                            children: [
                                (0, f.jsx)(A, {
                                    title: 'Template 1',
                                    description: 'Specify the question, correct answer, and incorrect answers',
                                    link: 'https://docs.google.com/spreadsheets/d/1UK4xg6vc1ph-tAOywBIyiArf_ck7QQFEq5p8t4LEcVw/copy'
                                }),
                                (0, f.jsx)('div', { style: { width: 14 } }),
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
                            style: { width: '100%' },
                            customRequest: J,
                            accept: '.csv',
                            showUploadList: !1,
                            children: [
                                H ? (0, f.jsx)(i.default, {
                                    type: 'error',
                                    message: H,
                                    style: { marginTop: 10 }
                                }) : null,
                                (0, f.jsx)(j.default, {
                                    type: 'primary',
                                    icon: (0, f.jsx)(h.default, {}),
                                    style: {
                                        width: '100%',
                                        marginTop: 10
                                    },
                                    loading: F,
                                    children: 'Upload File'
                                })
                            ]
                        })
                    ]
                })
            });
        }), _D = n.default.div(w || (w = z`
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`)), _E = n.default.div(x || (x = z`
  font-size: 27px;
  font-weight: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), o.FontWeights.UltraBold, p.default.Black, o.Fonts.SFPro), _F = n.default.div(y || (y = z`
  font-size: 16px;
  margin-top: -4px;
  line-height: 21px;
  color: ${ 0 };
  font-family: ${ 0 };
`), p.default.Black, o.Fonts.SFPro);
    var _G = C;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UploadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'upload',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = g.default.div(l || (l = (n => n)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
    var _n = () => {
        const {kitId: o} = (0, k.useParams)();
        return (0, j.useDidMount)(() => {
            (0, i.default)(o);
        }), (0, f.jsx)(m, { children: (0, f.jsx)(h.default, { size: 'large' }) });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        (0, g.request)({
            url: `/api/games/fetch/${ k }`,
            method: 'get',
            success: l => {
                const {
                        kitDetails: m,
                        editor: n
                    } = f.default, {kit: o} = l;
                m.id = o._id, m.title = o.title, m.image = o.gif, m.privacy = o.privacy, n.questions.replace(o.questions);
            },
            error: l => {
                (0, i.NavigateTo)(h.DASHBOARD);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        const l = (0, g.useLocation)().pathname.endsWith('flashcard-create');
        return (0, f.jsx)(j.default, {
            visible: l,
            close: () => (0, i.default)(h.editorBase)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _B;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    const w = 'flashcard-entry-editor', x = y => {
            let z = !1;
            return (y.text || y.audio || y.image || y.latex) && (z = !0), z;
        }, y = z => {
            let A = 0;
            return z.text && A++, z.image && A++, z.latex && A++, 1 === A;
        }, z = A => x(A.question) && y(A.answer);
    let A = class extends i.Component {
        componentDidMount() {
            if (localStorage.getItem(w)) {
                const B = JSON.parse(localStorage.getItem(w));
                B && B.length > 3 && this.setState({ questions: B });
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
                            style: { justifyContent: 'space-between' },
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
                            this.state.questions.map((B, C) => (0, h.jsx)(o.default, {
                                value: B,
                                onChange: D => this.handleQuestionChange(D, C)
                            }, 'flashcard-create-' + C)),
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
                questions: [
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
            }), (0, f.default)(this, 'toggleOverlay', () => this.setState({ overlayVisible: !this.state.overlayVisible })), (0, f.default)(this, 'handleQuestionChange', (B, C) => {
                let D = this.state.questions;
                C + 1 === this.state.questions.length && !this.state.questions[C + 1] && z(B) && D.length < 200 && D.push({
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
                }), D = D.map((E, F) => F !== C ? E : B), D = D.filter((E, F) => !(F > 3 && F + 1 !== D.length && !x(E.question) && !y(E.answer))), localStorage.setItem(w, JSON.stringify(D)), this.setState({ questions: D });
            }), (0, f.default)(this, 'makeQuestions', () => (0, v.MakeBaseQuestions)(this.state.questions.filter(B => z(B)))), (0, f.default)(this, 'addQuestions', () => {
                const B = this.makeQuestions();
                if (!B.length)
                    return;
                this.setState({ loading: !0 });
                const C = B.reverse().map(D => ({
                    questionText: D.text,
                    image: D.image,
                    audio: D.audio,
                    type: q.QuestionType.multipleChoice,
                    source: 'flashcard-create',
                    answers: D.answers,
                    kitId: this.props.kitDetails.id
                }));
                (0, t.chunk)(C, 20).forEach(D => {
                    (0, u.default)(D, () => {
                        this.setState({ loading: !1 }), this.deleteAllQuestions();
                    });
                });
            }), (0, f.default)(this, 'deleteAllQuestions', () => {
                localStorage.removeItem(w), this.setState({
                    questions: [
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
                return this.state.questions.forEach((C, D) => {
                    D < 4 && (z(C) || (B = !1));
                }), B;
            });
        }
    };
    A = (0, g.__decorate)([
        (0, r.inject)('kitDetails'),
        r.observer
    ], A);
    var _B = A;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l, m = n => n;
    const n = g.default.div(j || (j = m`
  width: 100%;
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`)), o = g.default.div(k || (k = m`
  width: calc(50% - 10px);
  margin-right: 10px;
`)), p = g.default.div(l || (l = m`
  width: calc(50% - 10px);
`));
    var _q = r => {
        const s = () => ({
                question: {
                    text: r.value.question.text,
                    image: r.value.question.image,
                    audio: r.value.question.audio,
                    latex: r.value.question.latex
                },
                answer: {
                    text: r.value.answer.text,
                    image: r.value.answer.image
                }
            }), {value: t} = r, {
                question: u,
                answer: v
            } = t;
        return (0, f.jsxs)(n, {
            children: [
                (0, f.jsx)(o, {
                    children: (0, f.jsx)(h.default, {
                        text: u.text,
                        image: u.image,
                        audio: u.audio,
                        latex: u.latex,
                        onTextChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                question: {
                                    ...x.question,
                                    text: w
                                }
                            });
                        },
                        onImageChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                question: {
                                    ...x.question,
                                    image: w
                                }
                            });
                        },
                        onLatexChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                question: {
                                    ...x.question,
                                    latex: w
                                }
                            });
                        },
                        textAllowed: !0,
                        imageAllowed: !u.latex,
                        audioAllowed: window.MediaRecorder && !(0, i.isStudent)(),
                        latexAllowed: !u.image,
                        onAudioChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                question: {
                                    ...x.question,
                                    audio: w
                                }
                            });
                        },
                        placeholder: 'Question...'
                    })
                }),
                (0, f.jsx)(p, {
                    children: (0, f.jsx)(h.default, {
                        text: v.text,
                        image: v.image,
                        latex: v.latex,
                        audio: null,
                        onTextChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                answer: {
                                    ...x.answer,
                                    text: w
                                }
                            });
                        },
                        onImageChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                answer: {
                                    ...x.answer,
                                    image: w
                                }
                            });
                        },
                        onLatexChange: w => {
                            const x = s();
                            r.onChange({
                                ...x,
                                answer: {
                                    ...x.answer,
                                    latex: w
                                }
                            });
                        },
                        imageAllowed: !v.text && !v.latex,
                        latexAllowed: !v.text && !v.image,
                        textAllowed: !v.image && !v.latex,
                        placeholder: 'Answer...',
                        audioAllowed: !1
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v;
    var _w = x => {
        const [y, z] = g.useState(!1), [A, B] = g.useState(!1), [C, D] = g.useState(!1), [E, F, G] = (0, r.useBoolean)(!1), H = () => z(!0), I = () => B(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)(h.default, {
                            value: x.text,
                            onTextChange: J => {
                                x.onTextChange(J);
                            },
                            disabled: !x.textAllowed,
                            placeholder: x.placeholder
                        }),
                        (0, f.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                !x.image && x.imageAllowed && (0, f.jsx)(n.default, {
                                    title: 'Add Photo',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: H,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, f.jsx)(k.default, {}),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                }),
                                x.image && (0, f.jsx)(p.default, {
                                    image: x.image,
                                    size: 38,
                                    blockModalOpen: !0,
                                    onClick: H,
                                    showBorder: !0,
                                    style: { marginLeft: 4 }
                                }),
                                x.audioAllowed && (0, f.jsx)(n.default, {
                                    title: x.audio ? 'Audio' : 'Add Audio',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: () => {
                                            (0, r.isUpgraded)() ? B(!0) : D(!0);
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
                                x.latexAllowed && (0, f.jsx)(n.default, {
                                    title: x.latex ? 'Equation' : 'Add Equation',
                                    children: (0, f.jsx)(m.default, {
                                        onClick: F,
                                        style: {
                                            marginLeft: 4,
                                            flexShrink: 0
                                        },
                                        icon: (0, f.jsx)(l.default, { style: { color: x.latex ? 'green' : 'inherit' } }),
                                        size: 'large',
                                        tabIndex: '-1'
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(o.default, {
                    visible: y,
                    close: () => z(!1),
                    currentImage: x.image,
                    onImageChange: J => {
                        x.onImageChange(J);
                    }
                }),
                (0, f.jsx)(q.default, {
                    visible: A,
                    audio: x.audio,
                    close: I,
                    onAudioChanged: J => {
                        var K;
                        K = J, x.onAudioChange && x.onAudioChange(K), I();
                    }
                }),
                (0, f.jsx)(u.default, {
                    visible: E,
                    close: G,
                    onChange: J => {
                        x.onLatexChange && x.onLatexChange(J);
                    },
                    latex: x.latex
                }),
                (0, f.jsx)(s.default, {
                    id: 'add audio',
                    visible: C,
                    close: () => D(!1),
                    copy: {
                        title: t.AUDIO_TITLE,
                        description: t.AUDIO_DESCRIPTION
                    }
                })
            ]
        });
    };
    const _x = i.default.div(v || (v = (y => y)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 28px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        const l = (0, g.useLocation)().pathname.endsWith('flashcard-home');
        return (0, f.jsx)(j.default, {
            visible: l,
            close: () => (0, i.default)(h.editorBase)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
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
                            (0, h.jsx)(k.default, { style: { fontSize: 35 } }),
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: p.FontWeights.UltraBold,
                                    fontSize: 25
                                },
                                className: 'flex vc',
                                children: (0, h.jsx)('div', { children: 'Create Flashcards' })
                            })
                        ]
                    }),
                    (0, h.jsx)('div', {
                        className: 'flex',
                        children: (0, h.jsx)(m.default, { children: 'or...' })
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
                                (0, h.jsx)(j.default, { style: { fontSize: 25 } }),
                                (0, h.jsx)('div', {
                                    style: {
                                        fontWeight: p.FontWeights.UltraBold,
                                        fontSize: 22
                                    },
                                    className: 'flex vc',
                                    children: (0, h.jsx)('div', { children: 'Import Flashcards' })
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    let u;
    var _v = (0, q.observer)(() => {
        const {kitCollab: w} = h.useContext(r.default), x = (0, t.useLocation)(), y = h.useMemo(() => x.pathname.endsWith('kit-collab'), [x.pathname]);
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
                    children: (0, f.jsx)(_w, { children: (0, s.isStudent)() ? null : w.enabled ? (0, f.jsx)(n.default, {}) : (0, f.jsx)(o.default, {}) })
                }),
                (0, f.jsx)(p.default, {})
            ]
        });
    });
    const _w = k.default.div.attrs({ className: 'maxWidth' })(u || (u = (x => x)`
  color: ${ 0 };
  font-family: ${ 0 };
`), l.default.Black, m.Fonts.SFPro);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
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
                        (0, f.jsx)(i.default, { openSettings: x }),
                        (0, f.jsx)(h.default, {}),
                        (0, f.jsx)(j.default, { style: { margin: '40px 0px' } }),
                        u.hasFetchedFirstBatchOfQuestions ? u.questions.length ? (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsx)(s.default, {
                                children: u.questions.map(z => (0, f.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, f.jsx)(l.default, {
                                        id: z._id,
                                        question: z.question,
                                        creatorName: z.creatorName,
                                        kitId: v.id,
                                        sessionId: u.sessionId
                                    })
                                }, z._id))
                            })
                        }) : (0, f.jsx)(m.default, {}) : (0, f.jsx)('div', {
                            className: 'maxWidth flex-center',
                            children: (0, f.jsx)(k.default, { size: 'large' })
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s, t, u = v => v;
    var _v = (0, l.observer)(() => {
        const [w, x, y] = (0, j.useBoolean)(!1), {kitCollab: z} = m.useContext(o.default), A = `${ (0, j.getDomain)() }/kit-collab/${ z.sessionId }`, B = m.useCallback(() => {
                b(k)(A), i.default.success('KitCollab link copied!');
            }, [A]);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(_x, { children: 'Share the KitCollab link with anybody you want to contribute questions. Once they submit their questions, you\'ll see them pop up here for you to approve or reject.' }),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)('div', {
                                    className: 'maxWidth',
                                    children: (0, f.jsx)(h.default, {
                                        size: 'large',
                                        readOnly: !0,
                                        style: { width: '100%' },
                                        value: A
                                    })
                                }),
                                (0, f.jsxs)(_z, {
                                    children: [
                                        (0, f.jsx)(g.default, {
                                            size: 'large',
                                            style: { width: '50%' },
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
                                            style: { width: '50%' },
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
    const _w = n.default.div.attrs({ className: 'maxWidth' })(q || (q = u`
  margin-top: 15px;
`)), _x = n.default.div(r || (r = u`
  font-size: 18px;
`)), _y = n.default.div.attrs({ className: 'flex-column' })(s || (s = u`
  margin-top: 20px;
`)), _z = n.default.div.attrs({ className: 'maxWidth flex vc' })(t || (t = u`
  margin-top: 10px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m = null, n = o => o(), o = [], p = {};
    const q = h.forwardRef((r, s) => {
        const t = () => {
                const {
                    prefixCls: u,
                    container: v,
                    maxCount: w,
                    duration: x,
                    rtl: y,
                    top: z
                } = function () {
                    const {
                        prefixCls: A,
                        getContainer: B,
                        duration: C,
                        rtl: D,
                        maxCount: E,
                        top: F
                    } = p;
                    return {
                        prefixCls: null != A ? A : (0, i.globalConfig)().getPrefixCls('message'),
                        container: (null == B ? void 0 : B()) || document.body,
                        duration: C,
                        rtl: D,
                        maxCount: E,
                        top: F
                    };
                }();
                return {
                    prefixCls: u,
                    getContainer: () => v,
                    maxCount: w,
                    duration: x,
                    rtl: y,
                    top: z
                };
            }, [u, v] = h.useState(t), [w, x] = (0, k.useInternalMessage)(u), y = (0, i.globalConfig)(), z = y.getRootPrefixCls(), A = y.getIconPrefixCls(), B = () => {
                v(t);
            };
        return h.useEffect(B, []), h.useImperativeHandle(s, () => {
            const C = Object.assign({}, w);
            return Object.keys(C).forEach(D => {
                C[D] = function () {
                    return B(), w[D].apply(w, arguments);
                };
            }), {
                instance: C,
                sync: B
            };
        }), h.createElement(i.default, {
            prefixCls: z,
            iconPrefixCls: A
        }, x);
    });
    function r() {
        if (!m) {
            const s = document.createDocumentFragment(), t = { fragment: s };
            return m = t, void n(() => {
                (0, g.render)(h.createElement(q, {
                    ref: u => {
                        const {
                            instance: v,
                            sync: w
                        } = u || {};
                        Promise.resolve().then(() => {
                            !t.instance && v && (t.instance = v, t.sync = w, r());
                        });
                    }
                }), s);
            });
        }
        m.instance && (o.forEach(u => {
            const {
                type: v,
                skipped: w
            } = u;
            if (!w)
                switch (v) {
                case 'open':
                    n(() => {
                        const x = m.instance.open(Object.assign(Object.assign({}, p), u.config));
                        null == x || x.then(u.resolve), u.setCloseFn(x);
                    });
                    break;
                case 'destroy':
                    n(() => {
                        null == m || m.instance.destroy(u.key);
                    });
                    break;
                default:
                    n(() => {
                        var x;
                        const y = (x = m.instance)[v].apply(x, (0, f.default)(u.args));
                        null == y || y.then(u.resolve), u.setCloseFn(y);
                    });
                }
        }), o = []);
    }
    function u(v, w) {
        const x = (0, l.wrapPromiseFn)(y => {
            let z;
            const A = {
                type: v,
                args: w,
                resolve: y,
                setCloseFn: B => {
                    z = B;
                }
            };
            return o.push(A), () => {
                z ? n(() => {
                    z();
                }) : A.skipped = !0;
            };
        });
        return r(), x;
    }
    const w = {
        open: function (x) {
            const y = (0, l.wrapPromiseFn)(z => {
                let A;
                const B = {
                    type: 'open',
                    config: x,
                    resolve: z,
                    setCloseFn: C => {
                        A = C;
                    }
                };
                return o.push(B), () => {
                    A ? n(() => {
                        A();
                    }) : B.skipped = !0;
                };
            });
            return r(), y;
        },
        destroy: function (x) {
            o.push({
                type: 'destroy',
                key: x
            }), r();
        },
        config: function (x) {
            p = Object.assign(Object.assign({}, p), x), n(() => {
                var y;
                null === (y = null == m ? void 0 : m.sync) || void 0 === y || y.call(m);
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
    ].forEach(x => {
        w[x] = function () {
            for (var y = arguments.length, z = new Array(y), A = 0; A < y; A++)
                z[A] = arguments[A];
            return u(x, z);
        };
    });
    var _x = w;
}), c.register('.....', function (d, e) {
    a(d.exports, 'TypeIcon', function () {
        return _q;
    }, function (f) {
        return _q = f;
    }), a(d.exports, 'PureContent', function () {
        return _r;
    }, function (f) {
        return _r = f;
    }), a(d.exports, 'default', function () {
        return _s;
    }, function (f) {
        return _s = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q, r) {
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
        return f.createElement('div', { className: b(m)(`${ t }-custom-content`, `${ t }-${ u }`) }, v || _q[u], f.createElement('span', null, w));
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
            ]), {getPrefixCls: A} = f.useContext(o.ConfigContext), B = u || A('message'), [, C] = (0, n.default)(B);
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = k => {
        const {
                componentCls: l,
                iconCls: m,
                boxShadow: n,
                colorBgElevated: o,
                colorSuccess: p,
                colorError: q,
                colorWarning: r,
                colorInfo: s,
                fontSizeLG: t,
                motionEaseInOutCirc: u,
                motionDurationSlow: v,
                marginXS: w,
                paddingXS: x,
                borderRadiusLG: y,
                zIndexPopup: z,
                messageNoticeContentPadding: A
            } = k, B = new (0, f.Keyframes)('MessageMoveIn', {
                '0%': {
                    padding: 0,
                    transform: 'translateY(-100%)',
                    opacity: 0
                },
                '100%': {
                    padding: x,
                    transform: 'translateY(0)',
                    opacity: 1
                }
            }), C = new (0, f.Keyframes)('MessageMoveOut', {
                '0%': {
                    maxHeight: k.height,
                    padding: x,
                    opacity: 1
                },
                '100%': {
                    maxHeight: 0,
                    padding: 0,
                    opacity: 0
                }
            });
        return [
            {
                [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(k)), {
                    position: 'fixed',
                    top: w,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: z,
                    [`${ l }-move-up`]: { animationFillMode: 'forwards' },
                    [`\n        ${ l }-move-up-appear,\n        ${ l }-move-up-enter\n      `]: {
                        animationName: B,
                        animationDuration: v,
                        animationPlayState: 'paused',
                        animationTimingFunction: u
                    },
                    [`\n        ${ l }-move-up-appear${ l }-move-up-appear-active,\n        ${ l }-move-up-enter${ l }-move-up-enter-active\n      `]: { animationPlayState: 'running' },
                    [`${ l }-move-up-leave`]: {
                        animationName: C,
                        animationDuration: v,
                        animationPlayState: 'paused',
                        animationTimingFunction: u
                    },
                    [`${ l }-move-up-leave${ l }-move-up-leave-active`]: { animationPlayState: 'running' },
                    '&-rtl': {
                        direction: 'rtl',
                        span: { direction: 'rtl' }
                    }
                })
            },
            {
                [`${ l }-notice`]: {
                    padding: x,
                    textAlign: 'center',
                    [`${ l }-custom-content > ${ m }`]: {
                        verticalAlign: 'text-bottom',
                        marginInlineEnd: w,
                        fontSize: t
                    },
                    [`${ l }-notice-content`]: {
                        display: 'inline-block',
                        padding: A,
                        background: o,
                        borderRadius: y,
                        boxShadow: n,
                        pointerEvents: 'all'
                    },
                    [`${ l }-success > ${ m }`]: { color: p },
                    [`${ l }-error > ${ m }`]: { color: q },
                    [`${ l }-warning > ${ m }`]: { color: r },
                    [`\n        ${ l }-info > ${ m },\n        ${ l }-loading > ${ m }`]: { color: s }
                }
            },
            {
                [`${ l }-notice-pure-panel`]: {
                    padding: 0,
                    textAlign: 'start'
                }
            }
        ];
    };
    var _k = (0, g.default)('Message', l => {
        const m = (0, h.merge)(l, { messageNoticeContentPadding: `${ (l.controlHeightLG - l.fontSize * l.lineHeight) / 2 }px ${ l.paddingSM }px` });
        return [j(m)];
    }, l => ({
        height: 150,
        zIndexPopup: l.zIndexPopupBase + 10
    }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'useInternalMessage', function () {
        return _r;
    }, function (f) {
        return _r = f;
    }), a(d.exports, 'default', function () {
        return _t;
    }, function (f) {
        return _t = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = 3, p = f.forwardRef((q, r) => {
            const {
                    top: s,
                    prefixCls: t,
                    getContainer: u,
                    maxCount: v,
                    duration: w = x,
                    rtl: y,
                    transitionName: z,
                    onAllRemoved: A
                } = q, {
                    getPrefixCls: B,
                    getPopupContainer: C
                } = f.useContext(j.ConfigContext), D = t || B('message'), [, E] = (0, k.default)(D), F = f.createElement('span', { className: `${ D }-close-x` }, f.createElement(i.default, { className: `${ D }-close-icon` })), [G, H] = (0, g.useNotification)({
                    prefixCls: D,
                    style: () => ({
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: null != s ? s : 8
                    }),
                    className: () => b(h)(E, y ? `${ D }-rtl` : ''),
                    motion: () => (0, l.getMotion)(D, z),
                    closable: !1,
                    closeIcon: F,
                    duration: w,
                    getContainer: () => (null == u ? void 0 : u()) || (null == C ? void 0 : C()) || document.body,
                    maxCount: v,
                    onAllRemoved: A
                });
            return f.useImperativeHandle(r, () => Object.assign(Object.assign({}, G), {
                prefixCls: D,
                hashId: E
            })), H;
        });
    let q = 0;
    function _r(s) {
        const t = f.useRef(null);
        return [
            f.useMemo(() => {
                const u = v => {
                        var w;
                        null === (w = t.current) || void 0 === w || w.close(v);
                    }, v = w => {
                        if (!t.current) {
                            const x = () => {
                            };
                            return x.then = () => {
                            }, x;
                        }
                        const {
                                open: y,
                                prefixCls: z,
                                hashId: A
                            } = t.current, B = `${ z }-notice`, {
                                content: C,
                                icon: D,
                                type: E,
                                key: F,
                                className: G,
                                onClose: H
                            } = w, I = n(w, [
                                'content',
                                'icon',
                                'type',
                                'key',
                                'className',
                                'onClose'
                            ]);
                        let J = F;
                        return null == J && (q += 1, J = `antd-message-${ q }`), (0, l.wrapPromiseFn)(K => (y(Object.assign(Object.assign({}, I), {
                            key: J,
                            content: f.createElement(m.PureContent, {
                                prefixCls: z,
                                type: E,
                                icon: D
                            }, C),
                            placement: 'top',
                            className: b(h)(E && `${ B }-${ E }`, A, G),
                            onClose: () => {
                                null == H || H(), K();
                            }
                        })), () => {
                            x(J);
                        }));
                    }, w = {
                        open: v,
                        destroy: x => {
                            var y;
                            void 0 !== x ? u(x) : null === (y = t.current) || void 0 === y || y.destroy();
                        }
                    };
                return [
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].forEach(x => {
                    w[x] = (y, z, A) => {
                        let B, C, D;
                        B = y && 'object' == typeof y && 'content' in y ? y : { content: y }, 'function' == typeof z ? D = z : (C = z, D = A);
                        const E = Object.assign(Object.assign({
                            onClose: D,
                            duration: C
                        }, B), { type: x });
                        return v(E);
                    };
                }), w;
            }, []),
            f.createElement(p, Object.assign({ key: 'message-holder' }, s, { ref: t }))
        ];
    }
    function _t(u) {
        return _r(u);
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return { motionName: null != h ? h : `${ g }-move-up` };
    }
    function g(h) {
        let i;
        const j = new Promise(k => {
                i = h(() => {
                    k(!0);
                });
            }), k = () => {
                null == i || i();
            };
        return f.then = (l, m) => j.then(l, m), f.promise = j, f;
    }
    a(d.exports, 'getMotion', function () {
        return f;
    }), a(d.exports, 'wrapPromiseFn', function () {
        return g;
    });
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function (h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function (q) {
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
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function (q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('.....', function (d, e) {
    d.exports = function () {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function () {
            };
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
        return f.removeAllRanges(), function () {
            'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function (j) {
                f.addRange(j);
            }), g && g.focus();
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = h.lazy(() => c('.....'));
    var _j = k => (0, f.jsx)(g.default, {
        open: k.visible,
        onCancel: k.close,
        footer: null,
        closable: !0,
        children: (0, f.jsx)('div', {
            className: 'maxAll flex-center',
            children: (0, f.jsx)(h.Suspense, {
                fallback: null,
                children: (0, f.jsx)(i, { link: k.link })
            })
        })
    });
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('b7Bno')),
        import('./' + c('.....').resolve('i8Pm1'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    var _o = p => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsx)(_q, { children: 'KitCollab' }),
            (0, f.jsx)(_r, {
                onClick: p.openSettings,
                children: (0, f.jsx)(i.default, {
                    name: 'fas fa-cog',
                    style: { color: '#616161' }
                })
            })
        ]
    });
    const _p = g.default.div.attrs({ className: 'flex maxWidth between' })(k || (k = n`
  line-height: 1;
  margin-top: 10px;
  align-items: flex-start;
`)), _q = g.default.div(l || (l = n`
  font-size: 42px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold), _r = (0, g.default)(j.default)(m || (m = n`
  font-size: 24px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s = t => t;
    var _t = (0, n.observer)(u => {
        const {id: v} = u, {kitCollab: w} = j.useContext(o.default), [x, y, z] = (0, p.useBoolean)(!1), A = {
                _id: `q-${ v }`,
                text: u.question.text,
                type: u.question.type,
                answers: u.question.answers.map((B, C) => ({
                    _id: `${ v }-answer-${ C }`,
                    correct: B.correct,
                    text: B.text
                }))
            }, B = C => {
                (0, p.request)({
                    url: '/api/kitcollab/question/action',
                    data: {
                        sessionId: u.sessionId,
                        questionId: u.id,
                        accepted: C
                    }
                });
            }, C = () => {
                w.questions.replace(w.questions.filter(D => D._id !== u.id)), w.waitingQuestions = w.questions.length;
            };
        return (0, f.jsx)(i.default, {
            question: A,
            showAllAnswers: !0,
            blockToggleShowAnswers: !0,
            customStyle: { marginBottom: 20 },
            customBottomComponent: (0, f.jsxs)(_u, {
                children: [
                    (0, f.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, f.jsx)(h.default, {
                                type: 'primary',
                                onClick: () => {
                                    x || (y(), B(!0), (0, m.default)([{
                                            questionText: A.text,
                                            type: A.type,
                                            answers: A.answers.map(D => ({
                                                text: D.text,
                                                correct: D.correct,
                                                textType: D.textType
                                            })),
                                            source: 'collab',
                                            kitId: u.kitId
                                        }], () => {
                                        z(), C();
                                    }, { stay: !0 }));
                                },
                                loading: x,
                                icon: (0, f.jsx)(g.default, {}),
                                children: 'Add To Kit'
                            }),
                            (0, f.jsx)(h.default, {
                                danger: !0,
                                type: 'primary',
                                onClick: () => {
                                    B(!1), C();
                                },
                                style: { marginLeft: 5 },
                                children: 'Reject'
                            })
                        ]
                    }),
                    (0, f.jsxs)(_v, {
                        children: [
                            'Submitted by',
                            ' ',
                            (0, f.jsx)('span', {
                                style: { fontWeight: l.FontWeights.Bold },
                                children: u.creatorName
                            })
                        ]
                    })
                ]
            })
        });
    });
    const _u = k.default.div.attrs({ className: 'maxWidth' })(q || (q = s`
  margin-top: 16px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  line-height: 1;
`)), _v = k.default.div(r || (r = s`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....');
    let i, j, k, l = m => m;
    var _m = () => (0, f.jsxs)(_n, {
        children: [
            (0, f.jsx)(_o, {}),
            (0, f.jsx)(_p, { children: 'No questions to review. Once new questions are submitted, you\'ll find them here.' })
        ]
    });
    const _n = h.default.div.attrs({ className: 'flex-center flex-column maxWidth' })(i || (i = l`
  border-style: dashed;
  border-radius: 4px;
  border-color: ${ 0 };
  padding: 50px;
  border-width: 3px;
`), g.default.BorderGray), _o = h.default.img.attrs({ src: '/client/img/editor/empty.svg' })(j || (j = l`
  height: 50px;
`)), _p = h.default.div(k || (k = l`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  color: #263238;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _C;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z, A, B = C => C;
    var _C = (0, s.observer)(D => {
        const {kitCollab: E} = g.useContext(t.default), [F, G, H] = (0, r.useBoolean)(!1);
        return (0, f.jsx)(i.default, {
            open: D.open,
            onClose: D.close,
            width: 500,
            closable: !0,
            children: (0, f.jsxs)(_D, {
                children: [
                    (0, f.jsxs)(_E, {
                        children: [
                            (0, f.jsxs)(_F, {
                                children: [
                                    (0, f.jsx)(_G, { children: 'Private KitCollab' }),
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
                                loading: F,
                                checked: !E.isPublic,
                                onChange: () => {
                                    F || (G(), (0, r.request)({
                                        url: `/api/kitcollab/toggle-privacy/${ E.sessionId }`,
                                        success: () => {
                                            E.isPublic = !E.isPublic;
                                        },
                                        both: () => H()
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
                                        url: `/api/kitcollab/session/reset-link/${ E.sessionId }`,
                                        success: I => {
                                            E.sessionId = I, k.default.success({
                                                title: 'KitCollab link regenerated!',
                                                content: 'The old link will no longer work for contributing questions. Please send students the updated link.'
                                            }), D.close();
                                        },
                                        error: I => (0, r.throwMessageError)({
                                            e: I,
                                            default: { title: 'There was an error. Please try again later.' }
                                        })
                                    });
                                },
                                style: { marginBottom: 5 },
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
                                                data: { sessionId: E.sessionId },
                                                success: () => {
                                                    E.enabled = !1, E.sessionId = '', E.questions.replace([]), E.waitingQuestions = 0, E.hasFetchedFirstBatchOfQuestions = !1, (0, u.default)(v.editorBase), j.default.success('KitCollab disabled!');
                                                },
                                                error: I => {
                                                    (0, r.throwMessageError)({
                                                        e: I,
                                                        default: { title: 'There was an error disabling KitCollab. Please try again later.' }
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
`), n.default.Black, p.Fonts.SFPro), _E = m.default.div.attrs({ className: 'flex vc' })(x || (x = B``)), _F = m.default.div(y || (y = B`
  margin-right: 40px;
`)), _G = m.default.div(z || (z = B`
  font-size: 24px;
  font-weight: ${ 0 };
`), p.FontWeights.Bold), _H = m.default.div(A || (A = B``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        g.default.kitCollab.sessionId && (0, f.request)({
            url: `/api/kitcollab/questions/${ g.default.kitCollab.sessionId }`,
            success: i => {
                g.default.kitCollab.questions.replace(i);
            },
            both: () => {
                g.default.kitCollab.hasFetchedFirstBatchOfQuestions = !0;
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, p, q, r, s = t => t;
    var _t = (0, k.observer)(() => {
        const {
                kitDetails: {id: u},
                kitCollab: v
            } = l.useContext(n.default), [w, x, y] = (0, j.useBoolean)(!1);
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(_v, {}),
                (0, f.jsx)(_w, { children: 'KitCollab' }),
                (0, f.jsx)(_x, { children: 'KitCollab allows anybody, including students, to contribute questions to your kit! Build a kit together in real-time, or asynchronously!' }),
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)(g.default, {
                    style: { height: 60 },
                    size: 'large',
                    block: !0,
                    type: 'primary',
                    loading: w,
                    onClick: () => {
                        x(), (0, j.request)({
                            url: '/api/kitcollab/session/create',
                            data: { gameId: u },
                            success: z => {
                                v.sessionId = z, v.enabled = !0;
                            },
                            error: z => {
                                (0, j.throwMessageError)({
                                    e: z,
                                    default: { title: 'There was an error enabling KitCollab. Please try again later.' }
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
    const _u = m.default.div.attrs({ className: 'flex-center flex-column maxAll' })(o || (o = s``)), _v = m.default.img.attrs({ src: '/client/img/editor/kitcollab.svg' })(p || (p = s`
  height: 140px;
`)), _w = m.default.div(q || (q = s`
  font-size: 48px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), i.FontWeights.UltraBold), _x = m.default.div(r || (r = s`
  font-size: 18px;
  margin-top: 2px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = (0, f.observer)(() => {
        const {kitCollab: m} = g.useContext(j.default);
        g.useEffect(() => {
            (0, h.default)();
        }, []);
        return (0, i.useIntervalWhen)(() => {
            m.panelOpen && m.enabled && m.sessionId && (0, k.default)();
        }, 5000), (0, i.useIntervalWhen)(() => {
            !m.panelOpen && m.sessionId && (0, h.default)();
        }, 10000), null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        (0, f.isStudent)() || (0, f.request)({
            url: `/api/kitcollab/session/${ g.default.kitDetails.id }`,
            success: i => {
                g.default.kitCollab.sessionId = i.sessionId, g.default.kitCollab.enabled = !0, g.default.kitCollab.waitingQuestions = i.questions, g.default.kitCollab.isPublic = i.isPublic;
            },
            error: () => {
                g.default.kitCollab.sessionId = '', g.default.kitCollab.enabled = !1, g.default.kitCollab.waitingQuestions = 0;
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useIntervalWhen', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i, j, k) {
        void 0 === i && (i = 0), void 0 === j && (j = !0), void 0 === k && (k = !1);
        var l = (0, f.useRef)();
        function m() {
            _g.current && _g.current();
        }
        (0, f.useEffect)(function () {
            _g.current = h;
        }), (0, f.useEffect)(function () {
            if ('undefined' != typeof window) {
                if (j) {
                    k && m();
                    var n = window.setInterval(m, i);
                    return function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
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
                    style: { top: 20 },
                    footer: null,
                    closable: !1,
                    children: (0, h.jsxs)('div', {
                        style: { height: 510 },
                        className: 'disable-scrollbars scroll',
                        children: [
                            this.state.stage === u.details && (0, h.jsx)(k.default, { onNext: this.onKitDetails }),
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
            }), (0, f.default)(this, 'onImagePicked', x => {
                this.state.createdKit || this.state.creatingKit || (this.setState({ creatingKit: !0 }), this.props.kitDetails.image = x, (0, n.request)({
                    url: '/api/v1/editor/create',
                    method: 'POST',
                    data: {
                        title: this.props.kitDetails.title,
                        image: x,
                        gradeLevel: this.props.kitDetails.gradeLevel,
                        language: this.props.kitDetails.language,
                        subject: this.props.kitDetails.subject,
                        isPrivate: (0, n.isStudent)()
                    },
                    success: y => {
                        (0, t.AnalyticsTrackEvent)({ event: 'kit_created' }), this.setState({ createdKit: !0 });
                        const {
                            kitDetails: z,
                            editor: A
                        } = o.default;
                        A.editSessionCounted = !0, z.id = y._id, z.title = y.title, z.image = y.image, z.language = y.lang, z.gradeLevel = y.gradeLevel, z.privacy = y.privacy, (0, q.default)(p.editorBase);
                    },
                    error: y => j.default.error({
                        title: 'Error Creating Kit',
                        content: y && y.message && y.message.text ? y.message.text : 'Please try again'
                    }),
                    both: () => this.setState({ creatingKit: !1 })
                }));
            }), (0, f.default)(this, 'switchToImageScreen', () => this.setState({ stage: u.image })), (0, f.default)(this, 'switchToDetailsScreen', () => this.setState({ stage: u.details }));
        }
    };
    w = (0, g.__decorate)([
        (0, m.inject)('kitDetails'),
        m.observer
    ], w);
    var _x = w;
}), c.register('.....', function (d, e) {
    a(d.exports, 'AnalyticsTrackEvent', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = k => {
        var l, m, n;
        if ((window.gtag && !(null === (l = k.blockedSource) || void 0 === l ? void 0 : l.google) && window.gtag('event', k.event, k.properties), h.AnalyticsFlags.educatorOnly) && (null === (n = (0, g.getUser)()) || void 0 === n ? void 0 : n.accountType) !== f.default.educator)
            return;
        (null === (m = k.blockedSource) || void 0 === m ? void 0 : m.posthog) || (0, i.TrackPostHogEvent)({
            event: k.event,
            properties: k.properties,
            force: k.forcePostHog
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'TrackPostHogEvent', function () {
        return _f;
    });
    c('.....');
    const _f = g => {
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useWillUnmount', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        (0, f.useEffect)(function () {
            return h;
        }, []);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PaperClipOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z' }
                }]
        },
        name: 'paper-clip',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlayCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z' }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l) {
        return function (m) {
            const {
                    prefixCls: n,
                    style: o
                } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, { value: m.open }), {getPrefixCls: w} = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(z => {
                            const A = z[0].target;
                            r(A.offsetHeight + 8), t(A.offsetWidth);
                        }), z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`, C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
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
                style: Object.assign(Object.assign({}, o), { margin: 0 }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'initMoveMotion', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....');
    const h = new (0, f.Keyframes)('antMoveDownIn', {
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
        }), i = new (0, f.Keyframes)('antMoveDownOut', {
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
        }), j = new (0, f.Keyframes)('antMoveLeftIn', {
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
        }), k = new (0, f.Keyframes)('antMoveLeftOut', {
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
        }), l = new (0, f.Keyframes)('antMoveRightIn', {
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
        }), m = new (0, f.Keyframes)('antMoveRightOut', {
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
        }), n = {
            'move-up': {
                inKeyframes: new (0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new (0, f.Keyframes)('antMoveUpOut', {
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
        }, _o = (p, q) => {
            const {antCls: r} = p, s = `${ r }-${ q }`, {
                    inKeyframes: t,
                    outKeyframes: u
                } = n[q];
            return [
                (0, g.initMotion)(s, t, u, p.motionDurationMid),
                {
                    [`\n        ${ s }-enter,\n        ${ s }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: p.motionEaseOutCirc
                    },
                    [`${ s }-leave`]: { animationTimingFunction: p.motionEaseInOutCirc }
                }
            ];
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SpaceContext', function () {
        return _o;
    }, function (f) {
        return _o = f;
    }), a(d.exports, 'default', function () {
        return _r;
    }, function (f) {
        return _r = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
        }), p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = r => {
        const {
                getPrefixCls: s,
                space: t,
                direction: u
            } = h.useContext(i.ConfigContext), {
                size: v = (null == t ? void 0 : t.size) || 'small',
                align: w,
                className: x,
                rootClassName: y,
                children: z,
                direction: A = 'horizontal',
                prefixCls: B,
                split: C,
                style: D,
                wrap: E = !1
            } = r, F = n(r, [
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
            ]), G = (0, j.default)(), [H, I] = h.useMemo(() => (Array.isArray(v) ? v : [
                v,
                v
            ]).map(J => function (K) {
                return 'string' == typeof K ? p[K] : K || 0;
            }(J)), [v]), J = (0, g.default)(z, { keepEmpty: !0 }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, m.default)(L), O = b(f)(L, N, `${ L }-${ A }`, {
                [`${ L }-rtl`]: 'rtl' === u,
                [`${ L }-align-${ K }`]: K
            }, x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((T, U) => {
                null != T && (R = U);
                const V = T && T.key || `${ P }-${ U }`;
                return h.createElement(l.default, {
                    className: P,
                    key: V,
                    direction: A,
                    index: U,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, T);
            }), T = h.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(h.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), h.createElement(_o.Provider, { value: T }, S)));
    };
    q.Compact = k.default;
    var _r = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....'), _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
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
        return t || ('vertical' === k ? l < s && (u = { marginBottom: q / (o ? 2 : 1) }) : u = Object.assign(Object.assign({}, l < s && { [m]: q / (o ? 2 : 1) }), p && { paddingBottom: r })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useMediaMatch', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function () {
                return window.matchMedia(h);
            }, [h]), j = (0, f.useState)(function () {
                return i.matches;
            }), k = j[0], l = j[1];
        return (0, f.useEffect)(function () {
            _g(i.matches);
            var m = function (n) {
                return _g(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function () {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function () {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__exportStar || function (h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), g(c('.....'), d.exports), g(c('.....'), d.exports), g(c('.....'), d.exports);
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('.....');
    d.exports.useBreakpoint = function (g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function (g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function (i) {
            return h < i;
        });
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__setModuleDefault || (Object.create ? function (h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function (h, i) {
            h.default = i;
        }), h = d.exports && d.exports.__importStar || function (i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useWindowSize = void 0;
    var i = h(c('.....'));
    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function () {
        var k = i.useState(j()), l = k[0], m = k[1];
        return i.useLayoutEffect(function () {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n), function () {
                return window.removeEventListener('resize', n);
            };
        }, []), l;
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__assign || function () {
            return f = Object.assign || function (g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        }, g = d.exports && d.exports.__createBinding || (Object.create ? function (h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function () {
                    return i[j];
                }
            });
        } : function (h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }), h = d.exports && d.exports.__setModuleDefault || (Object.create ? function (i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function (i, j) {
            i.default = j;
        }), i = d.exports && d.exports.__importStar || function (j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useComponentSize = void 0;
    var j = i(c('.....'));
    d.exports.useComponentSize = function () {
        var k = j.useState({
                height: 0,
                width: 0
            }), l = k[0], m = k[1], n = j.useRef(), o = j.useCallback(function () {
                if (n.current) {
                    var p = n.current.offsetHeight, q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function () {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current), function () {
                    return p.disconnect();
                };
            }
        }, [
            n,
            o
        ]), f({ ref: n }, l);
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function () {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function () {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        name: c('.....').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = h.lazy(() => c('.....'));
    var _j = k => {
        const l = k.hideSkeleton ? (0, f.jsx)('div', { className: 'maxWidth' }) : (0, f.jsx)('div', {
            className: 'maxWidth',
            children: (0, f.jsx)(g.default, {
                active: !0,
                title: !1,
                paragraph: { rows: 9 }
            })
        });
        return (0, f.jsx)(h.Suspense, {
            fallback: l,
            children: (0, f.jsx)(i, { ...k })
        });
    };
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        c('.....')(new URL(c('.....').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('.....').resolve('6iUO5'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ClockCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z' }
                }
            ]
        },
        name: 'clock-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TrophyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z' }
                }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z' }
                }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z' }
                }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CLASSIC', function () {
        return _f;
    }), a(d.exports, 'TEAMS', function () {
        return _g;
    }), a(d.exports, 'THANOS', function () {
        return _h;
    }), a(d.exports, 'BOSS_BATTLE', function () {
        return _i;
    }), a(d.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function () {
        return _j;
    }), a(d.exports, 'LAVA', function () {
        return _k;
    }), a(d.exports, 'IMPOSTER', function () {
        return _l;
    }), a(d.exports, 'DRAW', function () {
        return _m;
    }), a(d.exports, 'PARDY', function () {
        return _n;
    });
    const _f = 'CLASSIC', _g = 'TEAMS', _h = 'THANOS', _i = 'BOSS_BATTLE', _j = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', _k = 'LAVA', _l = 'IMPOSTER', _m = 'DRAW', _n = 'PARDY';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function () {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('.....', function (d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function () {
        return _f;
    });
    const _f = () => !1;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z' }
                }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function () {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = (j, k) => {
        const [l, m] = f.useState(() => {
            var n, o;
            const p = j && 'current' in j ? j.current : j;
            return p ? [
                p.offsetWidth,
                p.offsetHeight
            ] : [
                null !== (n = null == k ? void 0 : k.initialWidth) && void 0 !== n ? n : 0,
                null !== (o = null == k ? void 0 : k.initialHeight) && void 0 !== o ? o : 0
            ];
        });
        return (0, h.default)(() => {
            const n = j && 'current' in j ? j.current : j;
            n && m([
                n.offsetWidth,
                n.offsetHeight
            ]);
        }, [j]), (0, g.default)(j, n => {
            const o = n.target;
            m([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }), l;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    const k = () => j || (j = function () {
        const l = new Map(), m = new (0, f.default)((0, i.default)((n, o) => {
                var p;
                if (1 === n.length)
                    null === (p = l.get(n[0].target)) || void 0 === p || p(n[0], o);
                else
                    for (let q = 0; q < n.length; q++) {
                        var r;
                        null === (r = l.get(n[q].target)) || void 0 === r || r(n[q], o);
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
    var _l = function (m, n) {
        const o = k(), p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (s, t) => {
                    q || p.current(s, t);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = b(c('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.useRef(h);
        return f.useEffect(() => {
            i.current = h;
        }), i;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = function (g) {
        var h = [], i = null, j = function () {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function () {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function () {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = 44;
    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var q = h.forwardRef(function (r, s) {
            var t, u = r.classes, v = r.className, w = r.color, x = void 0 === w ? 'primary' : w, y = r.disableShrink, z = void 0 !== y && y, A = r.size, B = void 0 === A ? 40 : A, C = r.style, D = r.thickness, E = void 0 === D ? 3.6 : D, F = r.value, G = void 0 === F ? 0 : F, H = r.variant, I = void 0 === H ? 'indeterminate' : H, J = (0, g.default)(r, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]), K = {}, L = {}, M = {};
            if ('determinate' === I || 'static' === I) {
                var N = 2 * Math.PI * ((l - E) / 2);
                K.strokeDasharray = N.toFixed(3), M['aria-valuenow'] = Math.round(G), 'static' === I ? (K.strokeDashoffset = ''.concat(((100 - G) / 100 * N).toFixed(3), 'px'), L.transform = 'rotate(-90deg)') : (K.strokeDashoffset = ''.concat((t = (100 - G) / 100, t * t * N).toFixed(3), 'px'), L.transform = 'rotate('.concat((270 * m(G / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(u.root, v, 'inherit' !== x && u['color'.concat((0, k.default)(x))], {
                    indeterminate: u.indeterminate,
                    static: u.static
                }[I]),
                style: (0, f.default)({
                    width: B,
                    height: B
                }, L, C),
                ref: s,
                role: 'progressbar'
            }, M, J), h.createElement('svg', {
                className: u.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(u.circle, z && u.circleDisableShrink, {
                    indeterminate: u.circleIndeterminate,
                    static: u.circleStatic
                }[I]),
                style: K,
                cx: l,
                cy: l,
                r: (l - E) / 2,
                fill: 'none',
                strokeWidth: E
            })));
        }), _r = (0, j.default)(function (s) {
            return {
                root: { display: 'inline-block' },
                static: { transition: s.transitions.create('transform') },
                indeterminate: { animation: '$circular-rotate 1.4s linear infinite' },
                colorPrimary: { color: s.palette.primary.main },
                colorSecondary: { color: s.palette.secondary.main },
                svg: { display: 'block' },
                circle: { stroke: 'currentColor' },
                circleStatic: { transition: s.transitions.create('stroke-dashoffset') },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': { transformOrigin: '50% 50%' },
                    '100%': { transform: 'rotate(360deg)' }
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
                circleDisableShrink: { animation: 'none' }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(q);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const [l, m] = g.useState([]), [n] = g.useState(k.limit), [o, p] = g.useState(k.defaultPage), [q, r] = g.useState(!0), [s, t] = g.useState([]), [u, v] = g.useState(!1), w = g.useMemo(() => (k.modifyItems ? k.modifyItems(s) : s).map((x, y) => k.toRender(x, y)), [
                s.length,
                k.toRender
            ]), x = () => {
                if (l.includes(o))
                    return;
                m(y => [
                    ...y,
                    o
                ]);
                const y = {
                    page: o,
                    limit: n
                };
                (0, i.request)({
                    url: k.url,
                    method: 'post',
                    cacheKey: k.cacheKey,
                    data: k.modifyBody ? k.modifyBody(y) : y,
                    success: (z, A) => {
                        k.onTotalItems && !u && (k.onTotalItems(z.totalItems), v(!0)), z.items.forEach(B => {
                            k.onItemFetched && k.onItemFetched(B, A);
                        }), t(B => [
                            ...B,
                            ...z.items
                        ]), r(z.hasNextPage), p(z.nextPage);
                    },
                    error: () => {
                        k.onTotalItems && !u && (k.onTotalItems(0), v(!0)), r(!1);
                    },
                    both: () => m(z => z.filter(A => A !== y.page))
                });
            };
        return g.useEffect(x, []), !q && k.forceEmptyMessage || !q && 0 === s.length && k.emptyMessage ? k.emptyMessage(s) : (0, f.jsxs)(h.default, {
            dataLength: s.length,
            hasMore: q,
            style: k.scrollStyle,
            next: x,
            loader: k.loader || (0, f.jsx)('div', {}),
            scrollThreshold: k.scrollThreshold,
            endMessage: k.endMessage ? k.endMessage(s) : null,
            scrollableTarget: k.scrollableTarget,
            children: [
                k.prefix ? k.prefix() : null,
                w
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        onClick: k.onClick,
        className: k.className,
        style: k.style,
        children: k.children
    });
    const _k = g.default.div(i || (i = (l => l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetHomepagePath', function () {
        return _j;
    }), a(d.exports, 'RedirectToHomepage', function () {
        return _k;
    }), a(d.exports, 'ReplaceToHomePage', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = () => (0, h.isLoggedIn)() ? (0, h.isStudent)() ? f.HOME : f.KITS : '/', _k = () => {
            (0, i.NavigateTo)(_j());
        }, _l = () => {
            g.history.replace(_j());
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'UpgradeModal_CopyKit', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    const _h = {
        title: (0, f.jsx)(f.Fragment, { children: 'Copy kits with Pro' }),
        description: (0, f.jsxs)(f.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                g.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g() {
        const [, h] = f.useReducer(i => i + 1, 0);
        return h;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'responsiveArray', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];
    function _i() {
        const [, j] = (0, g.useToken)(), k = (l => ({
                xs: `(max-width: ${ l.screenXSMax }px)`,
                sm: `(min-width: ${ l.screenSM }px)`,
                md: `(min-width: ${ l.screenMD }px)`,
                lg: `(min-width: ${ l.screenLG }px)`,
                xl: `(min-width: ${ l.screenXL }px)`,
                xxl: `(min-width: ${ l.screenXXL }px)`
            }))((l => {
                const m = l, n = [].concat(_h).reverse();
                return n.forEach((o, p) => {
                    const q = o.toUpperCase(), r = `screen${ q }Min`, s = `screen${ q }`;
                    if (!(m[r] <= m[s]))
                        throw new Error(`${ r }<=${ s } fails : !(${ m[r] }<=${ m[s] })`);
                    if (p < n.length - 1) {
                        const t = `screen${ q }Max`;
                        if (!(m[s] <= m[t]))
                            throw new Error(`${ s }<=${ t } fails : !(${ m[s] }<=${ m[t] })`);
                        const u = `screen${ n[p + 1].toUpperCase() }Min`;
                        if (!(m[t] <= m[u]))
                            throw new Error(`${ t }<=${ u } fails : !(${ m[t] }<=${ m[u] })`);
                    }
                }), l;
            })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1, n = {};
            return {
                matchHandlers: {},
                dispatch: o => (n = o, l.forEach(p => p(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(o => {
                        const p = k[o], q = this.matchHandlers[p];
                        null == q || q.mql.removeListener(null == q ? void 0 : q.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(o => {
                        const p = k[o], q = r => {
                                let {matches: s} = r;
                                this.dispatch(Object.assign(Object.assign({}, n), { [o]: s }));
                            }, r = window.matchMedia(p);
                        r.addListener(q), this.matchHandlers[p] = {
                            mql: r,
                            listener: q
                        }, q(r);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.lazyWithPreload = void 0;
    var f = c('.....');
    function g(h) {
        var i, j, k = (0, f.lazy)(h), l = (0, f.forwardRef)(function (m, n) {
                var o = (0, f.useRef)(null != i ? i : g);
                return (0, f.createElement)(o.current, Object.assign(n ? { ref: n } : {}, m));
            });
        return l.preload = function () {
            return j || (j = h().then(function (m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z' }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ShareAltOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z' }
                }]
        },
        name: 'share-alt',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    'function' == typeof Object.create ? d.exports = function (f, g) {
        g && (f.super_ = g, f.prototype = Object.create(g.prototype, {
            constructor: {
                value: f,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : d.exports = function (f, g) {
        if (g) {
            f.super_ = g;
            var h = function () {
            };
            h.prototype = g.prototype, f.prototype = new h(), f.prototype.constructor = f;
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => {
        const j = (0, g.use100vh)();
        return (0, f.jsx)('div', {
            style: {
                height: j,
                width: '100%'
            },
            className: i.className,
            children: i.children
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'use100vh', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = function () {
            return g = Object.assign || function (h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }, g.apply(this, arguments);
        }, h = function (i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        }, i = !1, j = (0, f.forwardRef)(function (k, l) {
            var m = k.style, n = h(k, ['style']), o = _k();
            !i && (null == m ? void 0 : m.height) && (i = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var p = g(g({}, m), { height: o ? o + 'px' : '100vh' });
            return b(f).createElement('div', g({
                ref: l,
                style: p
            }, n));
        });
    j.displayName = 'Div100vh';
    function _k() {
        var l = (0, f.useState)(_p), m = l[0], n = l[1], o = function () {
                var p = (0, f.useState)(!1), q = p[0], r = p[1];
                return (0, f.useEffect)(function () {
                    _q() && r(!0);
                }, []), q;
            }();
        return (0, f.useEffect)(function () {
            if (o)
                return window.addEventListener('resize', l), function () {
                    return window.removeEventListener('resize', l);
                };
            function p() {
                var q = _p();
                n(p);
            }
        }, [o]), o ? m : null;
    }
    function _p() {
        return _q() ? window.innerHeight : null;
    }
    function _q() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SaveOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z' }
                }]
        },
        name: 'save',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'download',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useQuery', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l) {
        const m = (0, f.parseQueryArgs)(j, k, l);
        return (0, h.useBaseQuery)(m, g.QueryObserver);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'QueryObserver', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
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
            return _m(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return _m(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(l, m) {
            const n = this.options, o = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(l), (0, f.shallowEqualObjects)(n, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
            const p = this.hasListeners();
            p && _o(this.currentQuery, o, this.options, n) && this.executeFetch(), this.updateResult(m), !p || this.currentQuery === o && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
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
            return Object.keys(l).forEach(n => {
                Object.defineProperty(m, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(n), l[n])
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
                meta: { refetchPage: l }
            });
        }
        fetchOptimistic(l) {
            const m = this.client.defaultQueryOptions(l), n = this.client.getQueryCache().build(this.client, m);
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
            const n = this.currentQuery, o = this.options, p = this.currentResult, q = this.currentResultState, r = this.currentResultOptions, s = l !== n, t = s ? l.state : this.currentQueryInitialState, u = s ? this.currentResult : this.previousQueryResult, {state: v} = l;
            let w, {
                    dataUpdatedAt: x,
                    error: y,
                    errorUpdatedAt: z,
                    fetchStatus: A,
                    status: B
                } = v, C = !1, D = !1;
            if (m._optimisticResults) {
                const E = this.hasListeners(), F = !E && _l(l, m), G = E && _o(l, n, m, o);
                (F || G) && (A = (0, j.canFetch)(l.options.networkMode) ? 'fetching' : 'paused', x || (B = 'loading')), 'isRestoring' === m._optimisticResults && (A = 'idle');
            }
            if (m.keepPreviousData && !v.dataUpdatedAt && null != u && u.isSuccess && 'error' !== B)
                w = u.data, x = u.dataUpdatedAt, B = u.status, C = !0;
            else if (m.select && void 0 !== v.data)
                if (F && v.data === (null == G ? void 0 : G.data) && m.select === this.selectFn)
                    w = this.selectResult;
                else
                    try {
                        this.selectFn = m.select, w = m.select(v.data), w = (0, E.replaceData)(null == F ? void 0 : F.data, w, m), this.selectResult = w, this.selectError = null;
                    } catch (l) {
                        this.selectError = l;
                    }
            else
                w = v.data;
            if (void 0 !== m.placeholderData && void 0 === w && 'loading' === B) {
                let H;
                if (null != F && F.isPlaceholderData && m.placeholderData === (null == r ? void 0 : r.placeholderData))
                    H = F.data;
                else if (H = 'function' == typeof m.placeholderData ? m.placeholderData() : m.placeholderData, m.select && void 0 !== H)
                    try {
                        H = m.select(H), this.selectError = null;
                    } catch (H) {
                        this.selectError = H;
                    }
                void 0 !== H && (B = 'success', w = (0, E.replaceData)(null == F ? void 0 : F.data, H, m), D = !0);
            }
            this.selectError && (y = this.selectError, w = this.selectResult, z = Date.now(), B = 'error');
            const H = 'fetching' === A, I = 'loading' === B, J = 'error' === B;
            return {
                status: B,
                fetchStatus: A,
                isLoading: I,
                isSuccess: 'success' === B,
                isError: J,
                isInitialLoading: I && H,
                data: w,
                dataUpdatedAt: x,
                error: y,
                errorUpdatedAt: z,
                failureCount: v.fetchFailureCount,
                failureReason: v.fetchFailureReason,
                errorUpdateCount: v.errorUpdateCount,
                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                isFetchedAfterMount: v.dataUpdateCount > t.dataUpdateCount || v.errorUpdateCount > t.errorUpdateCount,
                isFetching: H,
                isRefetching: H && !I,
                isLoadingError: J && 0 === v.dataUpdatedAt,
                isPaused: 'paused' === A,
                isPlaceholderData: D,
                isPreviousData: C,
                isRefetchError: J && 0 !== v.dataUpdatedAt,
                isStale: _p(l, m),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(l) {
            const m = this.currentResult, n = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, f.shallowEqualObjects)(n, m))
                return;
            this.currentResult = n;
            const o = { cache: !0 };
            !1 !== (null == l ? void 0 : l.listeners) && (() => {
                if (!m)
                    return !0;
                const {notifyOnChangeProps: p} = this.options;
                if ('all' === p || !p && !this.trackedProps.size)
                    return !0;
                const q = new Set(null != p ? p : this.trackedProps);
                return this.options.useErrorBoundary && q.add('error'), Object.keys(this.currentResult).some(r => {
                    const s = r;
                    return this.currentResult[s] !== m[s] && q.has(s);
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
                l.listeners && this.listeners.forEach(u => {
                    u(this.currentResult);
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
        return function (o, p) {
            return !(!1 === p.enabled || o.state.dataUpdatedAt || 'error' === o.state.status && !1 === p.retryOnMount);
        }(m, n) || m.state.dataUpdatedAt > 0 && _m(m, n, n.refetchOnMount);
    }
    function _m(n, o, p) {
        if (!1 !== o.enabled) {
            const q = 'function' == typeof p ? p(n) : p;
            return 'always' === q || !1 !== q && _p(n, o);
        }
        return !1;
    }
    function _o(p, q, r, s) {
        return !1 !== r.enabled && (p !== q || !1 === s.enabled) && (!r.suspense || 'error' !== p.state.status) && _p(p, r);
    }
    function _p(q, r) {
        return q.isStaleByTime(r.staleTime);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useBaseQuery', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    function _n(o, p) {
        const q = (0, j.useQueryClient)({ context: o.context }), r = (0, k.useIsRestoring)(), s = (0, i.useQueryErrorResetBoundary)(), t = q.defaultQueryOptions(o);
        t._optimisticResults = r ? 'isRestoring' : 'optimistic', t.onError && (t.onError = h.notifyManager.batchCalls(t.onError)), t.onSuccess && (t.onSuccess = h.notifyManager.batchCalls(t.onSuccess)), t.onSettled && (t.onSettled = h.notifyManager.batchCalls(t.onSettled)), (0, m.ensureStaleTime)(t), (0, l.ensurePreventErrorBoundaryRetry)(t, _n), (0, l.useClearResetErrorBoundary)(_n);
        const [u] = f.useState(() => new p(q, t)), v = u.getOptimisticResult(t);
        if ((0, g.useSyncExternalStore)(f.useCallback(w => r ? () => {
            } : u.subscribe(h.notifyManager.batchCalls(w)), [
                u,
                r
            ]), () => u.getCurrentResult(), () => u.getCurrentResult()), f.useEffect(() => {
                u.setOptions(t, { listeners: !1 });
            }, [
                t,
                u
            ]), (0, m.shouldSuspend)(t, v, r))
            throw (0, m.fetchOptimistic)(t, u, _n);
        if ((0, l.getHasError)({
                result: v,
                errorResetBoundary: _n,
                useErrorBoundary: t.useErrorBoundary,
                query: u.getCurrentQuery()
            }))
            throw v.error;
        return t.notifyOnChangeProps ? v : u.trackResult(v);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useSyncExternalStore', function () {
        return _f;
    });
    const _f = c('.....').useSyncExternalStore;
}), c.register('.....', function (d, e) {
    d.exports = c('.....');
}), c.register('.....', function (d, e) {
    var f;
    a(d.exports, 'useSyncExternalStore', function () {
        return f;
    }, function (g) {
        return f = g;
    });
    var g = c('.....');
    var h = 'function' == typeof Object.is ? Object.is : function (i, j) {
            return i === j && (0 !== i || 1 / i == 1 / j) || i != i && j != j;
        }, i = g.useState, j = g.useEffect, k = g.useLayoutEffect, l = g.useDebugValue;
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
    var p = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (q, r) {
        return r();
    } : function (q, r) {
        var s = r(), t = i({
                inst: {
                    value: s,
                    getSnapshot: r
                }
            }), u = t[0].inst, v = t[1];
        return k(function () {
            u.value = s, u.getSnapshot = r, m(u) && v({ inst: u });
        }, [
            q,
            s,
            r
        ]), j(function () {
            return m(u) && v({ inst: u }), q(function () {
                m(u) && v({ inst: u });
            });
        }, [q]), l(s), s;
    };
    f = void 0 !== g.useSyncExternalStore ? g.useSyncExternalStore : p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'useQueryErrorResetBoundary', function () {
        return _i;
    });
    var f = c('.....');
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
    const h = f.createContext(g()), _i = () => f.useContext(h);
}), c.register('.....', function (d, e) {
    a(d.exports, 'useIsRestoring', function () {
        return _h;
    });
    var f = c('.....');
    const g = f.createContext(!1), _h = () => f.useContext(g);
    g.Provider;
}), c.register('.....', function (d, e) {
    a(d.exports, 'ensurePreventErrorBoundaryRetry', function () {
        return _h;
    }), a(d.exports, 'useClearResetErrorBoundary', function () {
        return _i;
    }), a(d.exports, 'getHasError', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    const _h = (i, j) => {
            (i.suspense || i.useErrorBoundary) && (j.isReset() || (i.retryOnMount = !1));
        }, _i = j => {
            f.useEffect(() => {
                j.clearReset();
            }, [j]);
        }, _j = ({
            result: k,
            errorResetBoundary: l,
            useErrorBoundary: m,
            query: n
        }) => k.isError && !l.isReset() && !k.isFetching && (0, g.shouldThrowError)(m, [
            k.error,
            n
        ]);
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return 'function' == typeof g ? g(...h) : !!g;
    }
    a(d.exports, 'shouldThrowError', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'ensureStaleTime', function () {
        return _f;
    }), a(d.exports, 'shouldSuspend', function () {
        return _g;
    }), a(d.exports, 'fetchOptimistic', function () {
        return _h;
    });
    const _f = g => {
            g.suspense && 'number' != typeof g.staleTime && (g.staleTime = 1000);
        }, _g = (h, i, j) => (null == h ? void 0 : h.suspense) && ((k, l) => k.isLoading && k.isFetching && !l)(i, j), _h = (i, j, k) => j.fetchOptimistic(i).then(({data: l}) => {
            null == i.onSuccess || i.onSuccess(l), null == i.onSettled || i.onSettled(l, null);
        }).catch(l => {
            k.clearReset(), null == i.onError || i.onError(l), null == i.onSettled || i.onSettled(void 0, l);
        });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsx)(i.default, {
        emoji: k.emoji,
        title: k.title,
        description: k.description,
        children: (0, f.jsx)(g.default, {
            value: k.value,
            style: { width: k.customWidth || h.default.optionWidth },
            size: 'large',
            onChange: l => k.onValueChanged(l),
            disabled: k.readOnly,
            children: k.options.map(l => (0, f.jsx)(g.default.Option, {
                value: l.value,
                children: l.name
            }, `${ k.title || 'no-title' }-${ l.value }`))
        })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => (0, f.jsxs)(g.OptionContainer, {
        children: [
            (0, f.jsxs)(g.OptionInfoContainer, {
                children: [
                    i.emoji ? (0, f.jsx)(g.OptionEmoji, { children: i.emoji }) : null,
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(g.OptionTitle, { children: i.title }),
                            i.description ? (0, f.jsx)(g.OptionDescription, { children: i.description }) : null
                        ]
                    })
                ]
            }),
            (0, f.jsx)(g.OptionChangerContainer, { children: i.children })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'OptionContainer', function () {
        return _o;
    }), a(d.exports, 'OptionInfoContainer', function () {
        return _p;
    }), a(d.exports, 'OptionEmoji', function () {
        return _q;
    }), a(d.exports, 'OptionTitle', function () {
        return _r;
    }), a(d.exports, 'OptionDescription', function () {
        return _s;
    }), a(d.exports, 'OptionChangerContainer', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....');
    let h, i, j, k, l, m, n = o => o;
    const _o = g.default.div.attrs({ className: 'maxWidth flex vc between' })(h || (h = n`
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
`)), _p = g.default.div.attrs({ className: 'flex vc' })(i || (i = n``)), _q = g.default.div(j || (j = n`
  font-size: 23px;
  margin-right: 10px;
`)), _r = g.default.div(k || (k = n`
  font-size: 23px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold), _s = g.default.div(l || (l = n`
  font-size: 15px;
  margin-top: -2px;
`)), _t = g.default.div(m || (m = n`
  flex-shrink: 0;
  margin-left: 25px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        const o = g.useCallback(p => {
            if ((0, k.isNil)(p) && n.allowEmpty)
                return p;
            let q = p ? n.step ? Math.round(p / n.step) * n.step : p : 0;
            return !(0, k.isNil)(n.min) && q < n.min ? q = n.min : !(0, k.isNil)(n.max) && q > n.max && (q = n.max), q;
        }, [
            n.max,
            n.min,
            n.step
        ]);
        g.useEffect(() => {
            (0, k.isNil)(n.value) || n.max && n.value > n.max && c(o(n.max));
        }, [
            n.value,
            n.max
        ]);
        const p = q => {
            n.onValueChanged(o(q));
        };
        return (0, f.jsx)(j.default, {
            emoji: n.emoji,
            title: n.title,
            description: n.description,
            children: (0, f.jsx)(l.default, {
                size: 'large',
                formatter: i.default,
                value: n.value,
                max: n.max,
                min: n.min,
                step: n.step,
                style: { width: n.customWidth || h.default.optionWidth },
                onChange: p,
                disabled: n.readOnly
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => '' === h ? '' : isNaN(Number(h)) ? String(h) : (0, f.numberWithCommas)(Number(h));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const [l, m] = h.useState(k.value), [n, o] = h.useState(k.value), [p, q, r] = (0, i.useBoolean)(!1);
        h.useEffect(() => {
            o(k.value), m(k.value);
        }, [k.value]);
        return (0, f.jsx)(g.default, {
            ...k,
            value: p ? l : n,
            onChange: s => {
                m(s);
            },
            onFocus: q,
            onBlur: () => {
                l !== n && k.onChange(l), r(), m(k.value);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = (j, k) => {
        var l;
        return null === (l = JSON.parse(localStorage.getItem(h.LocalStorageNames.hookSavedOptions) || '{}')[k]) || void 0 === l ? void 0 : l[j];
    };
    var _j = k => {
        var l;
        const {
                hookJSON: m,
                experienceId: n,
                kitId: o
            } = k, p = {};
        return null == m || null === (l = m.hooks) || void 0 === l || l.forEach(q => {
            if (q.type === g.HookType.kit)
                p[q.key] = o || '';
            else if (q.type == g.HookType.selectBox) {
                const r = q.options;
                if (r.options.length) {
                    let s = r.options.find(t => t === r.defaultOption) || r.options[0];
                    if (n) {
                        const t = i(q.key, n);
                        if (t) {
                            const u = r.options.find(v => v === t);
                            u && (s = u);
                        }
                    }
                    s && (p[u.key] = s);
                }
            } else if (u.type === g.HookType.number) {
                const u = u.options;
                let v = u.defaultValue;
                if (n) {
                    const w = i(u.key, n);
                    if (!(0, t.isNil)(w) && 'number' == typeof w) {
                        let x = !1;
                        ((0, t.isNil)(u.min) || w > u.min) && ((0, t.isNil)(u.max) || w < u.max) && ((0, t.isNil)(u.step) || w % u.step == 0) && (x = !0), x && (v = w);
                    }
                }
                p[u.key] = v;
            }
        }), p;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (0, h.observer)(o => {
        const [p] = i.useState(() => (0, g.observable)(o.defaultState || (0, m.default)({ hookJSON: o.hooks }))), q = (r, s) => {
                p[r] = s;
            }, r = (0, g.toJS)(p), s = JSON.stringify(r);
        i.useEffect(() => {
            o.onConnectedResourcesChange && o.onConnectedResourcesChange((0, k.default)(o, r)), o.readOnly || o.onStateChange && o.onStateChange(r);
        }, [
            s,
            o.readOnly
        ]);
        const t = (0, l.default)(o, r);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                o.header ? o.header(t.length) : null,
                t.map((u, v) => (0, f.jsxs)(i.Fragment, {
                    children: [
                        (0, f.jsx)(j.default, {
                            hook: u,
                            state: r,
                            modifyState: q,
                            location: o.location,
                            readOnly: o.readOnly
                        }),
                        v !== t.length - 1 && (0, f.jsx)('div', { style: { height: 10 } })
                    ]
                }, `hook-form-${ u.key }`)),
                o.footer ? o.footer(t.length) : null
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => {
        const m = l.state[l.hook.key], n = o => {
                l.modifyState(l.hook.key, o);
            };
        return l.hook.type === g.HookType.selectBox ? (0, f.jsx)(j.default, {
            value: m,
            onChange: n,
            hook: l.hook,
            readOnly: l.readOnly
        }) : l.hook.type === g.HookType.kit ? (0, f.jsx)(h.default, {
            value: m,
            onChange: n,
            hook: l.hook,
            location: l.location,
            readOnly: l.readOnly
        }) : l.hook.type === g.HookType.number ? (0, f.jsx)(i.default, {
            value: m,
            onChange: n,
            hook: l.hook,
            readOnly: l.readOnly
        }) : null;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        let {
            title: l,
            description: m
        } = (0, i.default)(k.hook);
        if (k.location === h.HookFormLocation.editor) {
            const n = 'We\'re showing this hook for testing purposes, but this hook won\'t be visible when choosing this map from the Mode Picker.';
            m ? m += ` - ${ n }` : m = n;
        }
        return (0, f.jsx)(g.default, {
            title: l,
            description: m,
            value: n.value,
            onValueChanged: n.onChange,
            placeholder: 'Kit ID',
            readOnly: n.readOnly
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsx)(i.default, {
        emoji: k.emoji,
        title: k.title,
        description: k.description,
        children: (0, f.jsx)(g.default, {
            size: 'large',
            value: k.value,
            placeholder: k.placeholder,
            style: { width: k.customWidth || h.default.optionWidth },
            onChange: l => {
                k.onValueChanged(l.target.value);
            },
            disabled: k.readOnly
        })
    });
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    a(d.exports, 'HookFormLocation', function () {
        return f;
    }), a(d.exports, 'IHookConnectedResourceType', function () {
        return h;
    }), (g = f || (f = {})).editor = 'editor', g.experiencePicker = 'experiencePicker', (h || (h = {})).kit = 'kit';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        let h, i;
        return h = g.key, g.displayName && (h = g.displayName), g.displayDescription && (i = g.displayDescription), {
            title: h,
            description: i
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....');
    var _j = k => {
        const {
                title: l,
                description: m
            } = (0, i.default)(k.hook), n = k.hook.options;
        return (0, f.jsx)(h.default, {
            title: l,
            description: m,
            value: k.value,
            onValueChanged: o => {
                !(0, g.isNil)(o) || (0, g.isNil)(n.defaultValue) ? k.onChange(o) : k.onChange(n.defaultValue);
            },
            min: n.min,
            max: n.max,
            step: n.step,
            allowEmpty: !0,
            readOnly: k.readOnly
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = j => {
        const {
                title: k,
                description: l
            } = (0, h.default)(j.hook), m = j.hook.options;
        return (0, f.jsx)(g.default, {
            title: k,
            description: l,
            value: j.value,
            onValueChanged: j.onChange,
            options: m.options.map(n => ({
                value: n,
                name: n
            })),
            readOnly: j.readOnly
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = (k, l) => {
        const m = [];
        return (0, i.default)({
            ...k,
            location: h.HookFormLocation.editor
        }, l).forEach(n => {
            n.type === g.HookType.kit && l[n.key] && m.push({
                type: h.IHookConnectedResourceType.kit,
                value: l[n.key]
            });
        }), (0, f.uniqBy)(m, 'value');
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = (j, k) => {
        var l, m;
        const n = [];
        return null == j || null === (l = j.hooks) || void 0 === l || null === (m = l.hooks) || void 0 === m || m.forEach(o => {
            var p;
            if (o.type === g.HookType.kit) {
                if (!!k[o.key] && j.location === h.HookFormLocation.experiencePicker)
                    return;
            }
            if (o.type === g.HookType.selectBox) {
                var q;
                const r = o.options;
                if (!(null == r || null === (q = r.options) || void 0 === q ? void 0 : q.length))
                    return;
            }
            (null == o || null === (p = o.hiddenScenarios) || void 0 === p ? void 0 : p.find(s => {
                var t, u;
                if (!!!(null === (t = s.conditions) || void 0 === t ? void 0 : t.length))
                    return !1;
                return !!(null === (u = s.conditions) || void 0 === u ? void 0 : u.every(v => {
                    if (v.type === f.HiddenConditionType.hookValue) {
                        const w = v.options, x = w.value, y = k[w.key];
                        if (w.compare === f.HookValueHiddenConditionCompare.equal) {
                            if (x == y)
                                return !0;
                        } else if (w.compare === f.HookValueHiddenConditionCompare.notEqual && x != y)
                            return !0;
                    } else if (v.type === f.HiddenConditionType.modeType) {
                        const z = w.modeType, A = v.options;
                        return A.compare === f.ModeTypeHiddenConditionCompare.equal ? z === A.mode : z !== A.mode;
                    }
                    return !1;
                }));
            })) || n.push(o);
        }), n;
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    a(d.exports, 'HiddenConditionType', function () {
        return f;
    }), a(d.exports, 'HookValueHiddenConditionCompare', function () {
        return h;
    }), a(d.exports, 'ModeTypeHiddenConditionCompare', function () {
        return j;
    }), (g = f || (f = {})).hookValue = 'hookValue', g.modeType = 'modeType', (i = h || (h = {})).equal = 'EQUAL', i.notEqual = 'NOT_EQUAL', (k = j || (j = {})).equal = 'EQUAL', k.notEqual = 'NOT_EQUAL';
});