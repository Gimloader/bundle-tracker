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
a.register('5drJf', function(b, c) {
    _j(b.exports, 'EncryptData', function() {
        return _h;
    }), _j(b.exports, 'DecryptData', function() {
        return _i;
    });
    const d = new Map(),
        e = new Map(),
        f = new Map();
    let g = 1;
    const _h = (_j, b) => {
            const i = (() => {
                const _j = g.toString();
                return g++, _j;
            })();
            if (b) {
                const j = d.get(b);
                j && (f.delete(j), e.set(j, i)), d.set(b, i);
            }
            return f.set(i, _G), i;
        },
        _i = _G => {
            if (!_G)
                return;
            const j = e.get(_G);
            return j ? _i(j) : f.get(_G);
        };
}), a.register('9fFDn', function(b, c) {
    _G(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('Lwb9P'),
        i = a('XZe6/'),
        j = a('TwXYL'),
        k = a('gk6FN'),
        l = a('VS/cl'),
        m = a('t4/iW'),
        n = a('kOSsb'),
        o = a('dt9Wz'),
        p = a('L1szR'),
        q = a('B7Zhl'),
        r = a('gwrMQ'),
        s = a('4RTv9'),
        t = a('5drJf');
    let u, v, w, x = _G => _G;
    var y;
    (y = w || (w = {})).questions = 'questions', y.response = 'response';
    var _z = (0, g.observer)(_G => {
        const [A, B] = _T(e).useState(!1), [C, D] = _T(e).useState(w.questions), [E, F] = _T(e).useState(!1), [G, H] = _T(e).useState(_G.ecc), [I, J] = _T(e).useState(), K = (0, k.useMotionValue)('0%'), L = (0, k.useMotionValue)(1), M = (0, k.useMotionValue)(_G.disableFadeInOnMount ? 1 : 0);
        _T(e).useEffect(() => {
            J(_G.ecc);
        }, [_G.ecc]), _T(e).useEffect(() => {
            G || H(_G.ecc);
        }, [_G.ecc]);
        const N = _T(e).useMemo(() => {
                if (G)
                    return (0, t.DecryptData)(G);
            }, [G]),
            O = _T(e).useMemo(() => {
                if (N)
                    return (0, t.EncryptData)(N.answers, `${ N._id }-answers`);
            }, [N]);
        _T(e).useEffect(() => (_G.onMount && _G.onMount(), _G.disableFadeInOnMount || (0, h.animate)(M, 1, {
            duration: 0.25,
            delay: 0.01,
            ease: 'easeOut'
        }), () => {
            n.default.stop();
        }), []), _T(e).useEffect(() => {
            o.default.readToMe.enabled = _G.readToMeEnabled || !1, C === w.response ? n.default.stop() : C === w.questions && G && n.default.play(N);
        }, [
            _G.readToMeEnabled,
            C
        ]);
        const P = _T => {
                if (!E) {
                    _G.onActionSound && _G.onActionSound.play(), F(!0);
                    const Q = _G.onQuestionAnswered(_T);
                    (0, h.animate)(K, '100%', {
                        ease: 'easeIn',
                        duration: 0.23,
                        onComplete: () => {
                            F(!1), (_T => {
                                var R, S;
                                _T ? null === (R = _G.correctSound) || void 0 === R || R.play() : null === (S = _G.incorrectSound) || void 0 === S || S.play();
                            })(Q), _G.nextQuestion && _G.nextQuestion(), _Q();
                        }
                    });
                }
            },
            _Q = () => {
                n.default.stop(), L.set(0), _G.beforeOpenAnswerResponse && _G.beforeOpenAnswerResponse(), D(w.response), (0, h.animate)(L, 1, {
                    duration: 0.3,
                    onUpdate: _G => {
                        !A && _G >= 0.3 * 0.75 && B(!0);
                    }
                });
            },
            R = () => {
                K.set('0%'), B(!1), n.default.stop(), _G.continueAction && _G.continueAction(), H(I), D(w.questions), M.set(0), (0, h.animate)(M, 1, {
                    duration: 0.2
                });
            },
            S = () => {
                var _T;
                const U = {
                    background: (null == _G || null === (_T = _G.continueButtonColor) || void 0 === _T ? void 0 : _T.background) || q.default.response.continue.background,
                    text: 'Continue',
                    handleClick: () => {
                        R();
                    }
                };
                return _G.responseActions ? [
                    ..._G.responseActions,
                    U
                ] : [U];
            };
        return (0, d.jsx)(i.AnimatePresence, {
            mode: 'wait',
            children: C === w.questions ? G ? (0, d.jsxs)(r.default, {
                opacity: M,
                yPosition: K,
                defaultBackgroundColor: _G.defaultBackgroundColor || q.default.defaultBackground,
                children: [
                    (0, d.jsx)(_A, {
                        questionColor: _G.questionColor || q.default.question,
                        children: (0, d.jsx)(l.default, {
                            text: null == N ? void 0 : N.text,
                            image: null == N ? void 0 : N.image,
                            audio: null == N ? void 0 : N.audio,
                            latex: null == N ? void 0 : N.latex,
                            allowGoogleTranslate: _G.allowGoogleTranslate
                        })
                    }),
                    (0, d.jsx)(m.default, {
                        onQuestionAnswered: P,
                        eas: O,
                        type: (null == N ? void 0 : N.type) || s.QuestionType.multipleChoice,
                        blockKeyboardEvent: _G.blockKeyboardEvents || !1,
                        allowGoogleTranslate: _G.allowGoogleTranslate || !1,
                        language: _G.language || 'en',
                        translations: _G.translations || {},
                        answerColors: _G.answerColors || q.default.palette,
                        desktopBreakpoint: _G.desktopBreakpoint || q.default.desktopBreakpoint,
                        defaultBackgroundColor: _G.defaultBackgroundColor || q.default.defaultBackground,
                        textInputButtonColor: _G.textInputButtonColor || q.default.palette[2]
                    })
                ]
            }) : _G.noQuestionContent || null : (0, d.jsx)(_B, {
                style: {
                    opacity: L
                },
                children: (0, d.jsx)(p.default, {
                    canAdvanceToQuestions: A,
                    correctAnswer: _G.lastQuestionCorrectAnswer,
                    continueToQuestions: R,
                    blockKeyboardEvents: _G.blockKeyboardEvents,
                    lastQuestionCorrect: _G.lastQuestionAnsweredCorrect || !1,
                    actions: S(),
                    lastQuestion: _G.lastQuestion,
                    allowGoogleTranslate: _G.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: _G.textShownWhenAnsweringCorrectly || 'Correct!',
                    textShownWhenAnsweringIncorrectly: _G.textShownWhenAnsweringIncorrectly || 'Incorrect!',
                    customCorrectTextAnimation: _G.customCorrectTextAnimation,
                    language: _G.language || 'en',
                    translations: _G.translations || {},
                    desktopBreakpoint: _G.desktopBreakpoint || q.default.desktopBreakpoint,
                    defaultBackgroundColor: _G.defaultBackgroundColor || q.default.defaultBackground,
                    correctAnswerColor: _G.correctAnswerColor || q.default.response.correctAnswer,
                    incorrectAnswerColor: _G.incorrectAnswerColor || q.default.response.incorrectAnswer,
                    continueButtonColor: _G.continueButtonColor || q.default.response.continue,
                    onActionSound: _G.onActionSound,
                    onLockedChange: _G.onLockedChange
                })
            })
        });
    });
    const _A = f.default.div(u || (u = x`
  color: ${ 0 };
  height: 35%;
  background-color: ${ 0 };
`), _G => _G.questionColor.text, _G => _G.questionColor.background),
        _B = (0, f.default)(j.motion.div)(v || (v = x`
  width: 100%;
  height: 100%;
  will-change: opacity;
`));
}), a.register('VS/cl', function(b, c) {
    _G(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('w8Dki'),
        i = a('VSAwN'),
        j = a('T4lH8'),
        k = a('Rh1i7');
    let l;
    const m = f.default.div(l || (l = (_G => _G)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`));
    var _n = (0, g.observer)(_G => {
        const {
            readToMe: o
        } = e.useContext(k.default), {
            text: p,
            image: q,
            audio: r,
            latex: s
        } = _G;
        return (0, d.jsx)(m, {
            children: p ? q || r || s ? (0, d.jsx)(j.default, {
                text: p,
                image: q,
                latex: s,
                audio: r,
                highlighted: o.currentlyPlayingQuestionText,
                allowGoogleTranslate: _G.allowGoogleTranslate || !1
            }) : (0, d.jsx)(i.default, {
                text: p,
                highlighted: o.currentlyPlayingQuestionText,
                allowGoogleTranslate: _G.allowGoogleTranslate
            }) : (0, d.jsx)(h.default, {
                image: q,
                latex: s,
                audio: r
            })
        });
    });
}), a.register('Rh1i7', function(b, c) {
    _G(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('dt9Wz');
    var _f = _j(d).createContext(e.default);
}), a.register('t4/iW', function(b, c) {
    _G(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('zuCKH'),
        i = a('48Ui0'),
        j = a('XNA/m'),
        k = a('dt9Wz'),
        l = a('Rh1i7'),
        m = a('BXKZi0'),
        n = a('4RTv9'),
        o = a('5drJf'),
        p = a('fe6E3');
    let q;
    const r = [
        49,
        50,
        51,
        52
    ];
    var _s = (0, g.observer)(_G => {
        const [t, u] = _j(e).useState(!0), [v, w] = _j(e).useState(), {
            readToMe: x
        } = _j(e).useContext(l.default), y = _j(e).useRef(null), [z] = (0, m.default)(y), A = _j(e).useMemo(() => (0, p.take)((0, o.DecryptData)(_G.eas), 4), []);
        if (_j(e).useEffect(() => {
                v && _G.onQuestionAnswered(v);
            }, [v]), _G.type === n.QuestionType.textInput)
            return (0, d.jsx)(_t, {
                defaultBackgroundColor: _G.defaultBackgroundColor,
                children: (0, d.jsx)(i.default, {
                    language: _G.language,
                    translations: _G.translations,
                    onQuestionAnswered: _G.onQuestionAnswered,
                    buttonColor: _G.textInputButtonColor
                })
            });
        const B = A.some(_G => !(!_G || !_G.image)),
            C = _G => {
                u(!1), w(_G);
            };
        return (0, d.jsx)(_t, {
            ref: y,
            defaultBackgroundColor: _G.defaultBackgroundColor,
            children: A.map((_j, u) => (0, d.jsx)(h.default, {
                id: _j._id,
                position: u,
                canAnswer: t,
                keyCode: r[u],
                gridView: B,
                onQuestionAnswered: C,
                answer: _j._id,
                blockKeyboardEvent: _G.blockKeyboardEvent,
                answerColors: _G.answerColors,
                containerWidth: z,
                desktopBreakpoint: _G.desktopBreakpoint,
                answerCount: A.length,
                children: (0, d.jsx)(j.default, {
                    allowGoogleTranslate: _G.allowGoogleTranslate,
                    text: _j.text,
                    image: _j.image,
                    latex: _j.latex,
                    highlighted: x.currentlyPlayingAnswerAudio && u === k.default.readToMe.answerIndex
                })
            }, u))
        });
    });
    const _t = f.default.div(q || (q = (_G => _G)`
  background: ${ 0 };
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`), _G => _G.defaultBackgroundColor);
}), a.register('zuCKH', function(b, c) {
    _G(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('GT7Vh'),
        h = a('G8w+m');
    let i, j, k = _G => _G;
    var _l = _G => {
        _j(e).useEffect(() => (document.addEventListener('keydown', b), () => document.removeEventListener('keydown', b)), []);
        const m = _j => {
                if (!_G.canAnswer)
                    return;
                (0, h.clickHandler)(_j, () => {
                    _G.onQuestionAnswered(_G.answer);
                });
            },
            n = _j => {
                if (_G.blockKeyboardEvent)
                    return;
                const {
                    keyCode: o
                } = _j;
                o === _G.keyCode && m(_j);
            },
            o = _G.containerWidth >= _G.desktopBreakpoint,
            p = _j(e).useMemo(() => 4 === _G.answerCount ? _G.gridView || o ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : o ? {
                width: 100 / _G.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / _G.answerCount
            }, [
                _G.answerCount,
                o,
                _G.gridView
            ]);
        return (0, d.jsx)(_m, {
            onClick: m,
            gridView: _G.gridView,
            isOnDesktop: o,
            heightPercentage: p.height,
            widthPercentage: p.width,
            children: (0, d.jsx)(_n, {
                position: _G.position,
                answerColors: _G.answerColors,
                isOnDesktop: o,
                children: _G.children
            })
        });
    };
    const _m = f.default.div(i || (i = k`
  text-align: center;
  height: ${ 0 }%;
  width: ${ 0 }%;
  cursor: pointer;
`), _G => _G.heightPercentage, _G => _G.widthPercentage),
        _n = f.default.div(j || (j = k`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
  opacity: 1;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  ${ 0 }
`), _G => _G.answerColors[_G.position].background, _G => _G.answerColors[_G.position].text, _G => _G.isOnDesktop && `\n    transition: background 0.18s ease-in-out;\n    &:hover {\n      background: ${ (0, g.lighten)(0.1, _G.answerColors[_G.position].background) };\n    }\n  `);
}), a.register('48Ui0', function(b, c) {
    _G(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('GT7Vh'),
        h = a('GOPeW'),
        i = a('fCxtw'),
        j = a('5PMl8');
    let k, l, m, n, o = _G => _G;
    var _p = _G => {
        const [q, r] = _j(e).useState(''), [s, t] = _j(e).useState(!0), u = () => {
            q && s && (t(!1), _G.onQuestionAnswered(q));
        };
        return (0, d.jsxs)(_q, {
            children: [
                (0, d.jsx)(_r, {
                    onSubmit: _G => {
                        _G.preventDefault(), u();
                    },
                    children: (0, d.jsx)(_s, {
                        autoFocus: !0,
                        value: q,
                        onChange: _G => {
                            r(_G.target.value);
                        },
                        placeholder: 'Enter answer here...'
                    })
                }),
                (0, d.jsx)(_t, {
                    buttonColor: _G.buttonColor,
                    onClick: u,
                    children: (0, d.jsx)(h.default, {
                        language: _G.language,
                        translations: _G.translations,
                        text: 'Submit'
                    })
                })
            ]
        });
    };
    const _q = f.default.div(k || (k = o`
  height: 100%;
  width: 100%;
`)),
        _r = f.default.form(l || (l = o`
  height: 55%;
  width: 100%;
`)),
        _s = f.default.input(m || (m = o`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 27px;
  border-style: solid;
  border-color: ${ 0 };
  color: ${ 0 };
  border-width: 6px;
  font-family: ${ 0 };
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`), i.default.DisabledGray, i.default.Black, j.default.name),
        _t = f.default.div(n || (n = o`
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  transition: background 0.18s ease-in-out;
  height: 45%;
  background: ${ 0 };
  color: ${ 0 };
  &:hover {
    background: ${ 0 };
  }
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), _G => _G.buttonColor.background, _G => _G.buttonColor.text, _G => (0, g.lighten)(0.1, _G.buttonColor.background));
}), a.register('GOPeW', function(b, c) {
    _G(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60');
    var _g = _G => {
        const [h, i] = _j(e).useState(_G.text);
        _j(e).useEffect(() => {
            _G.text !== h && (i(_G.text), 'en' !== _G.language && (_G.disableIfContains && _G.text.includes(_G.disableIfContains) || (_G.translations && _G.translations[_G.text] ? i(_G.translations[_G.text]) : (0, f.request)({
                url: '',
                data: {
                    to: _G.language,
                    text: _G.text
                },
                success: _j => {
                    i(_j), _G.translations[_G.text] = _j;
                }
            }))));
        }, [_G.text]);
        return (0, d.jsx)(d.Fragment, {
            children: (() => {
                let _j = h;
                return _G.suffix && (_j += _G.suffix), _j;
            })()
        });
    };
}), a.register('fCxtw', function(b, c) {
    _G(b.exports, 'default', function() {
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
}), a.register('5PMl8', function(b, c) {
    _G(b.exports, 'default', function() {
        return _e;
    });
    const d = '"Product Sans"';
    var _e = {
        mainFontName: d,
        name: `${ d }, sans-serif`,
        important: `${ d }, sans-serif !important`
    };
}), a.register('XNA/m', function(b, c) {
    _G(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('x8CoD'),
        f = a('JtnSG'),
        g = a('X133d'),
        h = a('G8w+m');
    var _i = _G => (0, d.jsxs)(d.Fragment, {
        children: [
            _G.text && (0, d.jsx)(g.default, {
                mode: 'multi',
                text: (0, h.parseText)(_G.allowGoogleTranslate, _G.text),
                paddingVertical: _G.customTextHorizontalPadding || 7,
                paddingHorizontal: _G.customTextHorizontalPadding,
                max: _G.customMaxTextSize || 25,
                highlighted: _G.highlighted
            }),
            _G.image && (0, d.jsx)('img', {
                src: (0, e.getCloudinaryUrl)(_G.image),
                alt: 'Answer Choice',
                style: {
                    maxHeight: _G.customImageHeight || '90%',
                    height: _G.customImageHeight || '90%',
                    maxWidth: _G.customImageWidth || '90%',
                    borderRadius: 4,
                    objectFit: 'contain'
                }
            }),
            _G.latex && (0, d.jsx)(g.default, {
                text: (0, d.jsx)(f.default, {
                    latex: _G.latex
                }),
                paddingVertical: _G.customTextHorizontalPadding || 7,
                paddingHorizontal: _G.customTextHorizontalPadding,
                max: _G.customMaxTextSize || 25,
                noBold: !0
            })
        ]
    });
}), a.register('L1szR', function(b, c) {
    _G(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('uZVWk'),
        f = a('IZuTz');
    var _g = _G => _G.lastQuestionCorrect ? (0, d.jsx)(e.default, {
        textShownWhenAnsweringCorrectly: _G.textShownWhenAnsweringCorrectly,
        customCorrectTextAnimation: _G.customCorrectTextAnimation,
        onActionSound: _G.onActionSound,
        language: _G.language,
        translations: _G.translations,
        allowGoogleTranslate: _G.allowGoogleTranslate,
        continueToQuestions: _G.continueToQuestions,
        actions: _G.actions,
        desktopBreakpoint: _G.desktopBreakpoint,
        defaultBackgroundColor: _G.defaultBackgroundColor,
        correctAnswerColor: _G.correctAnswerColor,
        blockKeyboardEvents: _G.blockKeyboardEvents,
        canAdvanceToQuestions: _G.canAdvanceToQuestions
    }) : (0, d.jsx)(f.default, {
        textShownWhenAnsweringIncorrectly: _G.textShownWhenAnsweringIncorrectly,
        lastQuestion: _G.lastQuestion,
        onActionSound: _G.onActionSound,
        language: _G.language,
        translations: _G.translations,
        allowGoogleTranslate: _G.allowGoogleTranslate,
        desktopBreakpoint: _G.desktopBreakpoint,
        canAdvanceToQuestions: _G.canAdvanceToQuestions,
        blockKeyboardEvents: _G.blockKeyboardEvents,
        continueToQuestions: _G.continueToQuestions,
        incorrectAnswerColor: _G.incorrectAnswerColor,
        continueButtonColor: _G.continueButtonColor,
        onLockedChange: _G.onLockedChange
    });
}), a.register('uZVWk', function(b, c) {
    _G(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('fCxtw'),
        h = a('kV0aj'),
        i = a('CRlOT');
    let j;
    var _k = _G => {
        e.useEffect(() => (document.addEventListener('keydown', b), () => {
            document.removeEventListener('keydown', b);
        }), [
            _G.canAdvanceToQuestions,
            _G.blockKeyboardEvents
        ]);
        const l = l => {
            _G.blockKeyboardEvents || l.key && 'Enter' === l.key && _G.canAdvanceToQuestions && _G.continueToQuestions();
        };
        return (0, d.jsxs)(_l, {
            defaultBackgroundColor: _G.defaultBackgroundColor,
            children: [
                (0, d.jsx)(h.default, {
                    textShownWhenAnsweringCorrectly: _G.textShownWhenAnsweringCorrectly,
                    customCorrectTextAnimation: _G.customCorrectTextAnimation,
                    correctAnswerColor: _G.correctAnswerColor
                }),
                (0, d.jsx)(i.default, {
                    actions: _G.actions,
                    language: _G.language,
                    translations: _G.translations,
                    desktopBreakpoint: _G.desktopBreakpoint,
                    onActionSound: _G.onActionSound
                })
            ]
        });
    };
    const _l = f.default.div.attrs({
        className: 'flex-column maxAll'
    })(j || (j = (_G => _G)`
  color: ${ 0 };
  background: ${ 0 };
`), g.default.White, _G => _G.defaultBackgroundColor);
}), a.register('kV0aj', function(b, c) {
    _G(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('JFnsU');
    let g;
    var _h = _G => (0, d.jsx)(_i, {
        backgroundColor: _G.correctAnswerColor.background,
        children: (0, d.jsx)(f.default, {
            textShownWhenAnsweringCorrectly: _G.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: _G.customCorrectTextAnimation,
            textColor: _G.correctAnswerColor.text
        })
    });
    const _i = e.default.div.attrs({
        className: 'maxWidth flex-center'
    })(g || (g = (_G => _G)`
  height: 40%;
  background: ${ 0 };
`), _G => _G.backgroundColor);
}), a.register('JFnsU', function(b, c) {
    _G(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('X133d');
    let h;
    var _i = _G => {
        const j = _G.textColor,
            k = _b(e).useMemo(() => _G.textShownWhenAnsweringCorrectly, []);
        return (0, d.jsx)(_j, {
            style: {
                color: j,
                animationDuration: `${ _G.customCorrectTextAnimation && _G.customCorrectTextAnimation.duration ? _G.customCorrectTextAnimation.duration : 1 }s`
            },
            className: _G.customCorrectTextAnimation && _G.customCorrectTextAnimation.className ? _G.customCorrectTextAnimation.className : 'animated tada',
            children: (0, d.jsx)(g.default, {
                max: 170,
                mode: 'single',
                text: k
            })
        });
    };
    const _j = f.default.div.attrs({
        className: 'maxAll flex-center'
    })(h || (h = (_G => _G)``));
}), a.register('CRlOT', function(_b, c) {
    _G(_b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('Tbo7T');
    let g;
    var _h = _G => {
        const i = 1 / _G.actions.length * 100;
        return (0, d.jsx)(_i, {
            children: _G.actions.filter(_G => null !== _G).map(a => (0, d.jsx)(f.default, {
                ...a,
                heightPercentage: i,
                language: _G.language,
                translations: _G.translations,
                desktopBreakpoint: _G.desktopBreakpoint,
                onActionSound: _G.onActionSound
            }, a.text))
        });
    };
    const _i = e.default.div.attrs({
        className: 'maxWidth'
    })(g || (g = (_G => _G)`
  height: 60%;
  text-align: center;
`));
}), a.register('Tbo7T', function(b, c) {
    _G(b.exports, 'GimkitLiveActionItemContainer', function() {
        return _p;
    }), _G(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('GT7Vh'),
        h = a('5yDn4'),
        i = a('GOPeW'),
        j = a('X133d'),
        k = a('fCxtw'),
        l = a('G8w+m'),
        m = a('BXKZi0');
    let n;
    var _o = _G => {
        const p = _r(e).useRef(null),
            [q] = (0, m.default)(p);
        return (0, d.jsx)(h.default, {
            onClick: _r => {
                (0, l.clickHandler)(_r, () => {
                    var _r;
                    null === (_r = _G.onActionSound) || void 0 === _r || _r.play(), _G.handleClick && _G.handleClick();
                });
            },
            children: (0, d.jsx)(_p, {
                ref: p,
                background: _G.background,
                heightPercentage: _G.heightPercentage,
                isOnDesktop: q >= _G.desktopBreakpoint,
                children: (0, d.jsx)(j.default, {
                    text: (0, d.jsx)(i.default, {
                        language: _G.language,
                        translations: _G.translations,
                        text: _G.text
                    }),
                    max: 40
                })
            })
        });
    };
    const _p = f.default.div.attrs({
        className: 'flex-center maxWidth'
    })(n || (n = (_G => _G)`
  height: ${ 0 }%;
  background: ${ 0 };
  color: ${ 0 };
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${ 0 }
`), _G => _G.heightPercentage, _G => _G.background, k.default.White, _G => _G.isOnDesktop && `transition: background 0.15s;\n    &:hover {\n      background: ${ (0, g.lighten)(0.1, _G.background) };\n    }\n\n  `);
}), a.register('5yDn4', function(b, c) {
    _G(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _G => (0, d.jsx)('span', {
        onClick: b => {
            _G.onClick && _G.onClick(b);
        },
        children: _G.children
    });
}), a.register('IZuTz', function(b, c) {
    _G(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('XZe6/'),
        g = a('6oezR'),
        h = a('v8zOW'),
        i = a('BXKZi0'),
        j = a('kOROi'),
        k = a('DNhpF'),
        l = a('ASvPU'),
        m = a('xE/yE'),
        n = a('GT7Vh');
    let o;
    var p;
    (p = o || (o = {})).message = 'message', p.answer = 'answer';
    var _q = _G => {
        const [r, s] = e.useState(o.message), t = e.useRef(null), [u, v] = (0, i.default)(t), w = e.useRef(null), [x, y] = (0, i.default)(w), z = e.useMemo(() => _G.secondsToWaitBeforeContinue ? _G.secondsToWaitBeforeContinue : 3, [_G.secondsToWaitBeforeContinue]), A = e.useMemo(() => _G.lastQuestion ? _G.lastQuestion.answers.find(_G => _G.correct) : null, [_G.lastQuestion]);
        (0, j.useTimeoutWhen)(() => {
            s(o.answer);
        }, _G.showCorrectAnswerAfterMs || 800);
        const B = e.useMemo(() => r === o.message ? _G.incorrectAnswerColor.background : (0, n.lighten)(0.2, _G.incorrectAnswerColor.background), [
                r,
                _G.incorrectAnswerColor.background
            ]),
            C = e.useMemo(() => r === o.message, [r]),
            D = e.useMemo(() => r === o.answer, [r]),
            E = e.useMemo(() => v * h.default.marginPercentage, [v]),
            F = e.useMemo(() => {
                const _G = h.default.textHeightPercentage * v / y,
                    H = u * h.default.maxTextWidthPercentage / x;
                return Math.min(_G, H);
            }, [
                v,
                y,
                x,
                u
            ]),
            G = e.useMemo(() => {
                if (C)
                    return 0;
                let H = -v / 2;
                return H += y * F / 2, H += E, H;
            }, [
                C,
                v,
                F,
                y,
                E
            ]),
            H = e.useMemo(() => v - y * F - v * h.default.marginPercentage * 2, [
                v,
                y,
                F
            ]),
            I = e.useMemo(() => H - v * h.default.continueButtonHeightPercentage - E, [
                H,
                v,
                E
            ]),
            J = e.useMemo(() => v * h.default.continueButtonHeightPercentage, [v]);
        e.useEffect(() => (_m.onLockedChange && _m.onLockedChange(!0), () => {
            _m.onLockedChange && _m.onLockedChange(!1);
        }), [_m.onLockedChange]);
        return (0, d.jsx)(f.AnimatePresence, {
            mode: 'wait',
            children: (0, d.jsx)(g.Container, {
                animate: {
                    background: B
                },
                transition: {
                    duration: 0.3
                },
                ref: t,
                children: (0, d.jsxs)(g.Content, {
                    style: {
                        color: _m.incorrectAnswerColor.text
                    },
                    children: [
                        (0, d.jsx)(g.TextContainer, {
                            style: {
                                marginTop: G
                            },
                            children: (0, d.jsx)(g.AnimatedText, {
                                layout: !0,
                                animate: {
                                    scale: C ? 1 : F,
                                    opacity: C ? 1 : 0.8
                                },
                                children: (0, d.jsx)(k.default, {
                                    max: 170,
                                    mode: 'single',
                                    text: (0, d.jsx)('div', {
                                        ref: w,
                                        children: _m.textShownWhenAnsweringIncorrectly
                                    })
                                })
                            })
                        }),
                        D ? (0, d.jsx)(g.BottomContainer, {
                            style: {
                                marginTop: G,
                                height: H,
                                overflow: 'hidden'
                            },
                            children: (0, d.jsxs)(g.AnimatedBottomContent, {
                                children: [
                                    (0, d.jsx)(l.default, {
                                        containerWidth: u,
                                        containerHeight: v,
                                        answerBoxHeight: I,
                                        margin: E,
                                        correctAnswer: A,
                                        allowGoogleTranslate: _m.allowGoogleTranslate,
                                        language: _m.language,
                                        translations: _m.translations
                                    }),
                                    (0, d.jsx)(m.default, {
                                        continueButtonHeight: J,
                                        containerWidth: u,
                                        secondsToWait: z,
                                        continueToQuestions: _m.continueToQuestions,
                                        desktopBreakpoint: _m.desktopBreakpoint,
                                        language: _m.language,
                                        translations: _m.translations,
                                        onActionSound: _m.onActionSound,
                                        continueButtonColor: _m.continueButtonColor,
                                        blockKeyboardEvents: _m.blockKeyboardEvents,
                                        canAdvanceToQuestions: _m.canAdvanceToQuestions,
                                        onLockedChange: _m.onLockedChange
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            })
        });
    };
}), a.register('6oezR', function(b, c) {
    _m(b.exports, 'Container', function() {
        return _w;
    }), _m(b.exports, 'Content', function() {
        return _x;
    }), _m(b.exports, 'TextContainer', function() {
        return _y;
    }), _m(b.exports, 'AnimatedText', function() {
        return _z;
    }), _m(b.exports, 'BottomContainer', function() {
        return _A;
    }), _m(b.exports, 'AnimatedBottomContent', function() {
        return _B;
    }), _m(b.exports, 'AnswerBox', function() {
        return _C;
    }), _m(b.exports, 'CorrectAnswerLabelContainer', function() {
        return _D;
    }), _m(b.exports, 'CorrectAnswerLabel', function() {
        return _E;
    }), _m(b.exports, 'AnswerContainer', function() {
        return _F;
    }), _m(b.exports, 'AnswerButtonAreaContainer', function() {
        return _G;
    }), _m(b.exports, 'AnswerButtonProgressBar', function() {
        return _H;
    }), _m(b.exports, 'ActionButtonContainer', function() {
        return _I;
    }), _m(b.exports, 'ActionButtonContent', function() {
        return _J;
    }), _m(b.exports, 'ActionButtonTextFitContent', function() {
        return _K;
    });
    var d = a('TwXYL'),
        e = a('Axq+p'),
        f = a('b5kvC');
    let g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = _m => _m;
    const _w = (0, e.default)(d.motion.div).attrs({
            className: 'maxAll'
        })(g || (g = v`
  overflow: hidden;
`)),
        _x = e.default.div.attrs({
            className: 'maxAll animated headShake'
        })(h || (h = v``)),
        _y = e.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(i || (i = v``)),
        _z = (0, e.default)(d.motion.div).attrs({
            layout: !0
        })(j || (j = v`
  width: 90%;
  height: 80%;
`)),
        _A = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = v`
  text-align: center;
`)),
        _B = (0, e.default)(d.motion.div).attrs({
            className: 'maxWidth maxHeight',
            layout: !0,
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.15
            },
            initial: {
                opacity: 0
            }
        })(l || (l = v``)),
        _C = e.default.div.attrs({
            className: 'maxAll flex flex-column'
        })(m || (m = v`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`)),
        _D = e.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = v`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`)),
        _E = e.default.div(o || (o = v`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${ 0 };
  font-style: italic;
`), f.FontWeights.Normal),
        _F = e.default.div(p || (p = v`
  flex: 1;
  overflow: hidden;
`)),
        _G = e.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = v`
  position: relative;
  background: gray;
`)),
        _H = (0, e.default)(d.motion.div).attrs({
            animate: {
                width: '100%'
            },
            initial: {
                width: '0%'
            },
            className: 'maxHeight'
        })(r || (r = v`
  position: absolute;
  top: 0;
`)),
        _I = e.default.div.attrs({
            className: 'maxAll'
        })(s || (s = v`
  position: absolute;
  top: 0;
`)),
        _J = e.default.div.attrs({
            className: 'maxAll'
        })(t || (t = v``)),
        _K = e.default.div.attrs({
            className: 'flex vc'
        })(u || (u = v``));
}), a.register('v8zOW', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        textHeightPercentage: 0.08,
        maxTextWidthPercentage: 0.5,
        marginPercentage: 0.04,
        continueButtonHeightPercentage: 0.3
    };
}), a.register('DNhpF', function(b, c) {
    _m(b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('86aCL'),
        h = a('Axq+p');
    let i;
    const j = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        k = h.default.div(i || (i = (_m => _m)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class l extends _n(f).Component {
            render() {
                const {
                    paddingHorizontal: _m,
                    paddingVertical: _n,
                    ...o
                } = this.props;
                return delete o.text, delete o.highlighted, (0, e.jsx)(k, {
                    className: this.props.customClass,
                    style: this.props.customStyle,
                    children: (0, e.jsx)(g.Textfit, {
                        style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            justifyContent: this.props.disableHorizontalCentering ? 'flex-start' : 'center',
                            alignItems: 'center',
                            paddingTop: _n,
                            paddingBottom: _n,
                            paddingLeft: this.props.paddingLeft || _m,
                            paddingRight: _m,
                            boxSizing: 'border-box',
                            fontWeight: this.props.noBold ? 'normal' : 900
                        },
                        ...o,
                        children: (0, e.jsx)('div', {
                            style: this.props.highlighted ? j : void 0,
                            children: this.props.text
                        })
                    })
                });
            }
        }
        (0, d.default)(l, 'defaultProps', {
            paddingHorizontal: '6%',
            paddingVertical: 15,
            max: 50,
            mode: 'single',
            forceSingleModeWidth: !1
        });
    var _m = l;
}), a.register('ASvPU', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('pNn9U'),
        f = a('XNA/m'),
        g = a('6oezR');
    var _h = _h => (0, d.jsxs)(g.AnswerBox, {
        style: {
            height: _h.answerBoxHeight,
            marginBottom: _h.margin,
            borderRadius: 10,
            marginLeft: _h.margin,
            width: _h.containerWidth - 2 * _h.margin
        },
        children: [
            (0, d.jsx)(g.CorrectAnswerLabelContainer, {
                children: (0, d.jsxs)(g.CorrectAnswerLabel, {
                    children: [
                        (0, d.jsx)(e.default, {
                            text: 'Correct Answer',
                            language: _h.language,
                            translations: _h.translations
                        }),
                        ':'
                    ]
                })
            }),
            (0, d.jsx)(g.AnswerContainer, {
                style: {
                    padding: `${ Math.max(0.1 * _h.containerHeight, 30) }px ${ Math.max(0.1 * _h.containerWidth, 30) }px`
                },
                children: (0, d.jsx)(f.default, {
                    allowGoogleTranslate: _h.allowGoogleTranslate,
                    text: _h.correctAnswer ? _h.correctAnswer.text : 'No Correct Answer',
                    image: _h.correctAnswer ? _h.correctAnswer.image : void 0,
                    latex: _h.correctAnswer ? _h.correctAnswer.latex : void 0,
                    customTextHorizontalPadding: '0px',
                    customTextVerticalPadding: '0px',
                    customImageHeight: '100%',
                    customImageWidth: '100%',
                    customMaxTextSize: 40
                })
            })
        ]
    });
}), a.register('pNn9U', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('1bFPu'),
        e = a('LEQ5w'),
        f = a('bgvr8');
    class g extends _b(e).Component {
        componentDidUpdate(_h) {
            _h.text !== this.props.text && (this.setState({
                text: this.props.text
            }), this.onTranslate());
        }
        componentDidMount() {
            this.onTranslate();
        }
        onTranslate() {
            if ('en' !== this.props.language && !this.props.text.includes(this.props.disableIfContains))
                return this.props.translations && this.props.translations[this.props.text] ? this.setState({
                    text: this.props.translations[this.props.text]
                }) : void this.requestTranslation().then(_h => {
                    this.props.translations[this.props.text] = _h, this.setState({
                        text: _h
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(..._h) {
            super(..._h), (0, d.default)(this, 'state', {
                text: this.props.text
            }), (0, d.default)(this, 'buildString', () => {
                let _h = this.state.text;
                return this.props.suffix && (_h += this.props.suffix), _h;
            }), (0, d.default)(this, 'requestTranslation', async () => {
                try {
                    return (await f.default.post('/api/translate', {
                        to: this.props.language,
                        text: this.props.text
                    })).data;
                } catch (_v) {
                    return this.props.text;
                }
            });
        }
    }
    var _h = g;
}), a.register('xE/yE', function(_b, c) {
    _v(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('DNhpF'),
        g = a('Tbo7T'),
        h = a('6oezR'),
        i = a('TwXYL'),
        j = a('PMl60'),
        k = a('mLNYZ');
    var _l = _v => {
        const [m, n] = (0, j.useBoolean)(!1), [o, p] = e.useState(_v.secondsToWait), q = e.useMemo(() => _v.canAdvanceToQuestions && o > 0, [
            o,
            _v.canAdvanceToQuestions
        ]);
        e.useEffect(() => {
            _v.onLockedChange && _v.onLockedChange(q);
        }, [
            q,
            _v.onLockedChange
        ]);
        const r = (0, k.default)({
                text: 'Continue',
                language: _v.language,
                translations: _v.translations
            }),
            s = e.useCallback(() => {
                q || _v.continueToQuestions();
            }, [
                _v.continueToQuestions,
                q
            ]),
            t = e.useCallback(m => {
                _v.blockKeyboardEvents || m.key && 'Enter' === m.key && s();
            }, [
                _v.blockKeyboardEvents,
                s
            ]);
        e.useEffect(() => (document.addEventListener('keydown', t), () => {
            document.removeEventListener('keydown', t);
        }), [t]);
        const u = e.useCallback(() => {
            var v;
            q || (null === (v = _v.onActionSound) || void 0 === v || v.play(), s());
        }, [
            q,
            s,
            _v.onActionSound
        ]);
        return e.useEffect(() => {
            if (m && o) {
                const _v = setTimeout(() => {
                    p(o - 1);
                }, 1000);
                return () => clearTimeout(_v);
            }
            return () => null;
        }, [
            m,
            o
        ]), (0, d.jsxs)(h.AnswerButtonAreaContainer, {
            style: {
                height: e.continueButtonHeight
            },
            children: [
                (0, d.jsx)(h.AnswerButtonProgressBar, {
                    style: {
                        background: e.continueButtonColor.background
                    },
                    transition: {
                        duration: e.secondsToWait,
                        ease: 'linear'
                    },
                    onAnimationStart: n
                }),
                (0, d.jsx)(h.ActionButtonContainer, {
                    children: (0, d.jsx)(g.GimkitLiveActionItemContainer, {
                        heightPercentage: 100,
                        isOnDesktop: e.containerWidth >= e.desktopBreakpoint,
                        background: o ? 'transparent' : e.continueButtonColor.background,
                        style: {
                            cursor: o ? 'not-allowed' : 'pointer',
                            color: e.continueButtonColor.text
                        },
                        onClick: u,
                        children: (0, d.jsx)(h.ActionButtonContent, {
                            children: (0, d.jsx)(f.default, {
                                text: (0, d.jsxs)(h.ActionButtonTextFitContent, {
                                    children: [
                                        (0, d.jsx)('div', {
                                            children: r
                                        }),
                                        (0, d.jsxs)(i.motion.div, {
                                            animate: {
                                                width: o > 0 ? 'auto' : 0,
                                                opacity: o > 0 ? 1 : 0
                                            },
                                            initial: {
                                                width: 'auto',
                                                opacity: 1
                                            },
                                            transition: {
                                                width: {
                                                    duration: 0.3
                                                },
                                                opacity: {
                                                    duration: 0
                                                }
                                            },
                                            children: [
                                                '\xA0(',
                                                Math.max(1, o),
                                                's)'
                                            ]
                                        })
                                    ]
                                }),
                                max: 40
                            })
                        })
                    })
                })
            ]
        });
    };
}), a.register('mLNYZ', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('PMl60');
    var _f = e => {
        const [g, h] = d.useState(e.text);
        d.useEffect(() => {
            e.text !== g && (h(e.text), 'en' !== e.language && (e.disableIfContains && e.text.includes(e.disableIfContains) || (e.translations && e.translations[e.text] ? h(e.translations[e.text]) : (0, e.request)({
                url: '',
                data: {
                    to: e.language,
                    text: e.text
                },
                success: g => {
                    h(g), e.translations[e.text] = g;
                }
            }))));
        }, [e.text]);
        return (() => {
            let i = g;
            return e.suffix && (i += e.suffix), i;
        })();
    };
}), a.register('B7Zhl', function(b, c) {
    e(b.exports, 'default', function() {
        return _e;
    });
    var d = a('fCxtw');
    var _e = {
        defaultBackground: '#303f9f',
        question: {
            background: '#303f9f',
            text: d.default.White
        },
        palette: [{
                background: '#771322',
                text: d.default.White
            },
            {
                background: '#A85C15',
                text: d.default.White
            },
            {
                background: '#0D6B33',
                text: d.default.White
            },
            {
                background: '#076296',
                text: d.default.White
            }
        ],
        response: {
            correctAnswer: {
                background: '#388E3C',
                text: d.default.White
            },
            incorrectAnswer: {
                background: '#B71C1C',
                text: d.default.White
            },
            shop: {
                background: '#311B92',
                text: d.default.White
            },
            continue: {
                background: '#1A237E',
                text: d.default.White
            }
        },
        desktopBreakpoint: 650
    };
}), a.register('gwrMQ', function(b, c) {
    e(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('TwXYL'),
        i = a('B7Zhl'),
        j = a('dt9Wz');
    let k;
    const l = (0, f.default)(h.motion.div)(k || (k = (e => e)`
  background: ${ 0 };
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`), e => e.defaultBackgroundColor);
    var _m = (0, g.observer)(e => (t(e).useEffect(() => (j.default.readToMe.canPlayAgain = !0, () => {
        j.default.readToMe.canPlayAgain = !1;
    }), []), (0, d.jsx)(l, {
        style: {
            opacity: e.opacity,
            y: e.yPosition
        },
        defaultBackgroundColor: e.defaultBackgroundColor || i.default.defaultBackground,
        children: e.children
    })));
});