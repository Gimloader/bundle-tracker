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
c.register('yK0U7', function(d, e) {
    a(d.exports, 'EncryptData', function() {
        return _j;
    }), a(d.exports, 'DecryptData', function() {
        return _k;
    });
    const f = new Map(),
        g = new Map(),
        h = new Map();
    let i = 1;
    const _j = (a, d) => {
            const k = (() => {
                const l = i.toString();
                return i++, l;
            })();
            if (d) {
                const l = f.get(d);
                l && (h.delete(l), g.set(l, k)), f.set(d, k);
            }
            return h.set(k, a), k;
        },
        _k = a => {
            if (!a)
                return;
            const l = g.get(a);
            return l ? _k(l) : h.get(a);
        };
}), c.register('6BXeU', function(d, e) {
    a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('I7f6M'),
        k = c('TixUC'),
        l = c('9aZ6t'),
        m = c('P6MZO'),
        n = c('vE576'),
        o = c('vhKeC'),
        p = c('svlca'),
        q = c('eoj6K'),
        r = c('nmUvl'),
        s = c('LqE9u'),
        t = c('wxy92'),
        u = c('VJDaA'),
        v = c('yK0U7');
    let w, x, y, z = a => a;
    var A;
    (A = y || (y = {})).questions = 'questions', A.response = 'response';
    var _B = (0, i.observer)(a => {
        const [C, D] = b(g).useState(!1), [E, F] = b(g).useState(y.questions), [G, H] = b(g).useState(!1), [I, J] = b(g).useState(a.ecc), [K, L] = b(g).useState(), M = (0, m.useMotionValue)('0%'), N = (0, m.useMotionValue)(1), O = (0, m.useMotionValue)(a.disableFadeInOnMount ? 1 : 0);
        b(g).useEffect(() => {
            L(a.ecc);
        }, [a.ecc]), b(g).useEffect(() => {
            I || J(a.ecc);
        }, [a.ecc]);
        const P = b(g).useMemo(() => {
                if (I)
                    return (0, v.DecryptData)(I);
            }, [I]),
            Q = b(g).useMemo(() => {
                if (P)
                    return (0, v.EncryptData)(P.answers, `${ P._id }-answers`);
            }, [P]);
        b(g).useEffect(() => (a.onMount && a.onMount(), a.disableFadeInOnMount || (0, j.animate)(O, 1, {
            duration: 0.25,
            delay: 0.01,
            ease: 'easeOut'
        }), () => {
            p.default.stop();
        }), []), b(g).useEffect(() => {
            q.default.readToMe.enabled = a.readToMeEnabled || !1, E === y.response ? p.default.stop() : E === y.questions && I && p.default.play(P);
        }, [
            a.readToMeEnabled,
            E
        ]);
        const R = b => {
                if (!G) {
                    a.onActionSound && a.onActionSound.play(), H(!0);
                    const S = a.onQuestionAnswered(b);
                    (0, j.animate)(M, '100%', {
                        ease: 'easeIn',
                        duration: 0.23,
                        onComplete: () => {
                            H(!1), (b => {
                                var T, U;
                                b ? null === (T = a.correctSound) || void 0 === T || T.play() : null === (U = a.incorrectSound) || void 0 === U || U.play();
                            })(S), a.nextQuestion && a.nextQuestion(), _S();
                        }
                    });
                }
            },
            _S = () => {
                p.default.stop(), N.set(0), a.beforeOpenAnswerResponse && a.beforeOpenAnswerResponse(), F(y.response), (0, j.animate)(N, 1, {
                    duration: 0.3,
                    onUpdate: a => {
                        !C && a >= 0.3 * 0.75 && D(!0);
                    }
                });
            },
            T = () => {
                M.set('0%'), D(!1), p.default.stop(), a.continueAction && a.continueAction(), J(K), F(y.questions), O.set(0), (0, j.animate)(O, 1, {
                    duration: 0.2
                });
            },
            U = () => {
                var V;
                const W = {
                    background: (null == a || null === (V = a.continueButtonColor) || void 0 === V ? void 0 : V.background) || s.default.response.continue.background,
                    text: 'Continue',
                    handleClick: () => {
                        T();
                    }
                };
                return a.responseActions ? [
                    ...a.responseActions,
                    W
                ] : [W];
            };
        return (0, f.jsx)(k.AnimatePresence, {
            mode: 'wait',
            children: E === y.questions ? I ? (0, f.jsxs)(t.default, {
                opacity: O,
                yPosition: M,
                defaultBackgroundColor: a.defaultBackgroundColor || s.default.defaultBackground,
                children: [
                    (0, f.jsx)(_C, {
                        questionColor: a.questionColor || s.default.question,
                        children: (0, f.jsx)(n.default, {
                            text: null == P ? void 0 : P.text,
                            image: null == P ? void 0 : P.image,
                            audio: null == P ? void 0 : P.audio,
                            latex: null == P ? void 0 : P.latex,
                            allowGoogleTranslate: a.allowGoogleTranslate
                        })
                    }),
                    (0, f.jsx)(o.default, {
                        onQuestionAnswered: R,
                        eas: Q,
                        type: (null == P ? void 0 : P.type) || u.QuestionType.multipleChoice,
                        blockKeyboardEvent: a.blockKeyboardEvents || !1,
                        allowGoogleTranslate: a.allowGoogleTranslate || !1,
                        language: a.language || 'en',
                        translations: a.translations || {},
                        answerColors: a.answerColors || s.default.palette,
                        desktopBreakpoint: a.desktopBreakpoint || s.default.desktopBreakpoint,
                        defaultBackgroundColor: a.defaultBackgroundColor || s.default.defaultBackground,
                        textInputButtonColor: a.textInputButtonColor || s.default.palette[2]
                    })
                ]
            }) : a.noQuestionContent || null : (0, f.jsx)(_D, {
                style: {
                    opacity: N
                },
                children: (0, f.jsx)(r.default, {
                    canAdvanceToQuestions: C,
                    correctAnswer: a.lastQuestionCorrectAnswer,
                    continueToQuestions: T,
                    blockKeyboardEvents: a.blockKeyboardEvents,
                    lastQuestionCorrect: a.lastQuestionAnsweredCorrect || !1,
                    actions: U(),
                    lastQuestion: a.lastQuestion,
                    allowGoogleTranslate: a.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly || 'Correct!',
                    textShownWhenAnsweringIncorrectly: a.textShownWhenAnsweringIncorrectly || 'Incorrect!',
                    customCorrectTextAnimation: a.customCorrectTextAnimation,
                    language: a.language || 'en',
                    translations: a.translations || {},
                    desktopBreakpoint: a.desktopBreakpoint || s.default.desktopBreakpoint,
                    defaultBackgroundColor: a.defaultBackgroundColor || s.default.defaultBackground,
                    correctAnswerColor: a.correctAnswerColor || s.default.response.correctAnswer,
                    incorrectAnswerColor: a.incorrectAnswerColor || s.default.response.incorrectAnswer,
                    continueButtonColor: a.continueButtonColor || s.default.response.continue,
                    onActionSound: a.onActionSound,
                    onLockedChange: a.onLockedChange
                })
            })
        });
    });
    const _C = h.default.div(w || (w = z`
  color: ${ 0 };
  height: 35%;
  background-color: ${ 0 };
`), a => a.questionColor.text, a => a.questionColor.background),
        _D = (0, h.default)(l.motion.div)(x || (x = z`
  width: 100%;
  height: 100%;
  will-change: opacity;
`));
}), c.register('vE576', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('NevzH'),
        k = c('LBV5W'),
        l = c('YBABi'),
        m = c('aqRRN');
    let n;
    const o = h.default.div(n || (n = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`));
    var _p = (0, i.observer)(a => {
        const {
            readToMe: q
        } = g.useContext(m.default), {
            text: r,
            image: s,
            audio: t,
            latex: u
        } = a;
        return (0, f.jsx)(o, {
            children: r ? s || t || u ? (0, f.jsx)(l.default, {
                text: r,
                image: s,
                latex: u,
                audio: t,
                highlighted: q.currentlyPlayingQuestionText,
                allowGoogleTranslate: a.allowGoogleTranslate || !1
            }) : (0, f.jsx)(k.default, {
                text: r,
                highlighted: q.currentlyPlayingQuestionText,
                allowGoogleTranslate: a.allowGoogleTranslate
            }) : (0, f.jsx)(j.default, {
                image: s,
                latex: u,
                audio: t
            })
        });
    });
}), c.register('aqRRN', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('eoj6K');
    var _h = b(f).createContext(g.default);
}), c.register('vhKeC', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('L7wUt'),
        k = c('FZat4'),
        l = c('ug03q'),
        m = c('eoj6K'),
        n = c('aqRRN'),
        o = c('bQWYI'),
        p = c('VJDaA'),
        q = c('yK0U7'),
        r = c('9zaF+');
    let s;
    const t = [
        49,
        50,
        51,
        52
    ];
    var _u = (0, i.observer)(a => {
        const [v, w] = b(g).useState(!0), [x, y] = b(g).useState(), {
            readToMe: z
        } = b(g).useContext(n.default), A = b(g).useRef(null), [B] = (0, o.default)(A), C = b(g).useMemo(() => (0, r.take)((0, q.DecryptData)(a.eas), 4), []);
        if (b(g).useEffect(() => {
                x && a.onQuestionAnswered(x);
            }, [x]), a.type === p.QuestionType.textInput)
            return (0, f.jsx)(_v, {
                defaultBackgroundColor: a.defaultBackgroundColor,
                children: (0, f.jsx)(k.default, {
                    language: a.language,
                    translations: a.translations,
                    onQuestionAnswered: a.onQuestionAnswered,
                    buttonColor: a.textInputButtonColor
                })
            });
        const D = C.some(a => !(!a || !a.image)),
            E = a => {
                w(!1), y(a);
            };
        return (0, f.jsx)(_v, {
            ref: A,
            defaultBackgroundColor: a.defaultBackgroundColor,
            children: C.map((b, w) => (0, f.jsx)(j.default, {
                id: b._id,
                position: w,
                canAnswer: v,
                keyCode: t[w],
                gridView: D,
                onQuestionAnswered: E,
                answer: b._id,
                blockKeyboardEvent: a.blockKeyboardEvent,
                answerColors: a.answerColors,
                containerWidth: B,
                desktopBreakpoint: a.desktopBreakpoint,
                answerCount: C.length,
                children: (0, f.jsx)(l.default, {
                    allowGoogleTranslate: a.allowGoogleTranslate,
                    text: b.text,
                    image: b.image,
                    latex: b.latex,
                    highlighted: z.currentlyPlayingAnswerAudio && w === m.default.readToMe.answerIndex
                })
            }, w))
        });
    });
    const _v = h.default.div(s || (s = (a => a)`
  background: ${ 0 };
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`), a => a.defaultBackgroundColor);
}), c.register('L7wUt', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('SAYZy'),
        j = c('5oXbu');
    let k, l, m = a => a;
    var _n = a => {
        b(g).useEffect(() => (document.addEventListener('keydown', d), () => document.removeEventListener('keydown', d)), []);
        const o = b => {
                if (!a.canAnswer)
                    return;
                (0, j.clickHandler)(b, () => {
                    a.onQuestionAnswered(a.answer);
                });
            },
            p = b => {
                if (a.blockKeyboardEvent)
                    return;
                const {
                    keyCode: q
                } = b;
                q === a.keyCode && o(b);
            },
            q = a.containerWidth >= a.desktopBreakpoint,
            r = b(g).useMemo(() => 4 === a.answerCount ? a.gridView || q ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : q ? {
                width: 100 / a.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / a.answerCount
            }, [
                a.answerCount,
                q,
                a.gridView
            ]);
        return (0, f.jsx)(_o, {
            onClick: o,
            gridView: a.gridView,
            isOnDesktop: q,
            heightPercentage: r.height,
            widthPercentage: r.width,
            children: (0, f.jsx)(_p, {
                position: a.position,
                answerColors: a.answerColors,
                isOnDesktop: q,
                children: a.children
            })
        });
    };
    const _o = h.default.div(k || (k = m`
  text-align: center;
  height: ${ 0 }%;
  width: ${ 0 }%;
  cursor: pointer;
`), a => a.heightPercentage, a => a.widthPercentage),
        _p = h.default.div(l || (l = m`
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
`), a => a.answerColors[a.position].background, a => a.answerColors[a.position].text, a => a.isOnDesktop && `\n    transition: background 0.18s ease-in-out;\n    &:hover {\n      background: ${ (0, i.lighten)(0.1, a.answerColors[a.position].background) };\n    }\n  `);
}), c.register('FZat4', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('SAYZy'),
        j = c('yN978'),
        k = c('44iM224'),
        l = c('nBT0U');
    let m, n, o, p, q = a => a;
    var _r = a => {
        const [s, t] = b(g).useState(''), [u, v] = b(g).useState(!0), w = () => {
            s && u && (v(!1), a.onQuestionAnswered(s));
        };
        return (0, f.jsxs)(_s, {
            children: [
                (0, f.jsx)(_t, {
                    onSubmit: a => {
                        a.preventDefault(), w();
                    },
                    children: (0, f.jsx)(_u, {
                        autoFocus: !0,
                        value: s,
                        onChange: a => {
                            t(a.target.value);
                        },
                        placeholder: 'Enter answer here...'
                    })
                }),
                (0, f.jsx)(_v, {
                    buttonColor: a.buttonColor,
                    onClick: w,
                    children: (0, f.jsx)(j.default, {
                        language: a.language,
                        translations: a.translations,
                        text: 'Submit'
                    })
                })
            ]
        });
    };
    const _s = h.default.div(m || (m = q`
  height: 100%;
  width: 100%;
`)),
        _t = h.default.form(n || (n = q`
  height: 55%;
  width: 100%;
`)),
        _u = h.default.input(o || (o = q`
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
`), k.default.DisabledGray, k.default.Black, l.default.name),
        _v = h.default.div(p || (p = q`
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
`), a => a.buttonColor.background, a => a.buttonColor.text, a => (0, i.lighten)(0.1, a.buttonColor.background));
}), c.register('yN978', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('quE27');
    var _i = a => {
        const [j, k] = b(g).useState(a.text);
        b(g).useEffect(() => {
            a.text !== j && (k(a.text), 'en' !== a.language && (a.disableIfContains && a.text.includes(a.disableIfContains) || (a.translations && a.translations[a.text] ? k(a.translations[a.text]) : (0, h.request)({
                url: '',
                data: {
                    to: a.language,
                    text: a.text
                },
                success: b => {
                    k(b), a.translations[a.text] = b;
                }
            }))));
        }, [a.text]);
        return (0, f.jsx)(f.Fragment, {
            children: (() => {
                let l = j;
                return a.suffix && (l += a.suffix), l;
            })()
        });
    };
}), c.register('44iM224', function(d, e) {
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
}), c.register('nBT0U', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    const f = '"Product Sans"';
    var _g = {
        mainFontName: f,
        name: `${ f }, sans-serif`,
        important: `${ f }, sans-serif !important`
    };
}), c.register('ug03q', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('HloXO'),
        h = c('JuRCP'),
        i = c('F3ltk'),
        j = c('5oXbu');
    var _k = a => (0, f.jsxs)(f.Fragment, {
        children: [
            a.text && (0, f.jsx)(i.default, {
                mode: 'multi',
                text: (0, j.parseText)(a.allowGoogleTranslate, a.text),
                paddingVertical: a.customTextHorizontalPadding || 7,
                paddingHorizontal: a.customTextHorizontalPadding,
                max: a.customMaxTextSize || 25,
                highlighted: a.highlighted
            }),
            a.image && (0, f.jsx)('img', {
                src: (0, g.getCloudinaryUrl)(a.image),
                alt: 'Answer Choice',
                style: {
                    maxHeight: a.customImageHeight || '90%',
                    height: a.customImageHeight || '90%',
                    maxWidth: a.customImageWidth || '90%',
                    borderRadius: 4,
                    objectFit: 'contain'
                }
            }),
            a.latex && (0, f.jsx)(i.default, {
                text: (0, f.jsx)(h.default, {
                    latex: a.latex
                }),
                paddingVertical: a.customTextHorizontalPadding || 7,
                paddingHorizontal: a.customTextHorizontalPadding,
                max: a.customMaxTextSize || 25,
                noBold: !0
            })
        ]
    });
}), c.register('nmUvl', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('/LKaM'),
        h = c('VXpkP');
    var _i = a => a.lastQuestionCorrect ? (0, f.jsx)(g.default, {
        textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly,
        customCorrectTextAnimation: a.customCorrectTextAnimation,
        onActionSound: a.onActionSound,
        language: a.language,
        translations: a.translations,
        allowGoogleTranslate: a.allowGoogleTranslate,
        continueToQuestions: a.continueToQuestions,
        actions: a.actions,
        desktopBreakpoint: a.desktopBreakpoint,
        defaultBackgroundColor: a.defaultBackgroundColor,
        correctAnswerColor: a.correctAnswerColor,
        blockKeyboardEvents: a.blockKeyboardEvents,
        canAdvanceToQuestions: a.canAdvanceToQuestions
    }) : (0, f.jsx)(h.default, {
        textShownWhenAnsweringIncorrectly: a.textShownWhenAnsweringIncorrectly,
        lastQuestion: a.lastQuestion,
        onActionSound: a.onActionSound,
        language: a.language,
        translations: a.translations,
        allowGoogleTranslate: a.allowGoogleTranslate,
        desktopBreakpoint: a.desktopBreakpoint,
        canAdvanceToQuestions: a.canAdvanceToQuestions,
        blockKeyboardEvents: a.blockKeyboardEvents,
        continueToQuestions: a.continueToQuestions,
        incorrectAnswerColor: a.incorrectAnswerColor,
        continueButtonColor: a.continueButtonColor,
        onLockedChange: a.onLockedChange
    });
}), c.register('/LKaM', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('44iM224'),
        j = c('zHshV'),
        k = c('g4tw8');
    let l;
    var _m = a => {
        g.useEffect(() => (document.addEventListener('keydown', d), () => {
            document.removeEventListener('keydown', d);
        }), [
            a.canAdvanceToQuestions,
            a.blockKeyboardEvents
        ]);
        const n = n => {
            a.blockKeyboardEvents || n.key && 'Enter' === n.key && a.canAdvanceToQuestions && a.continueToQuestions();
        };
        return (0, f.jsxs)(_n, {
            defaultBackgroundColor: a.defaultBackgroundColor,
            children: [
                (0, f.jsx)(j.default, {
                    textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly,
                    customCorrectTextAnimation: a.customCorrectTextAnimation,
                    correctAnswerColor: a.correctAnswerColor
                }),
                (0, f.jsx)(k.default, {
                    actions: a.actions,
                    language: a.language,
                    translations: a.translations,
                    desktopBreakpoint: a.desktopBreakpoint,
                    onActionSound: a.onActionSound
                })
            ]
        });
    };
    const _n = h.default.div.attrs({
        className: 'flex-column maxAll'
    })(l || (l = (a => a)`
  color: ${ 0 };
  background: ${ 0 };
`), i.default.White, a => a.defaultBackgroundColor);
}), c.register('zHshV', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('N6uNU');
    let i;
    var _j = a => (0, f.jsx)(_k, {
        backgroundColor: a.correctAnswerColor.background,
        children: (0, f.jsx)(h.default, {
            textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: a.customCorrectTextAnimation,
            textColor: a.correctAnswerColor.text
        })
    });
    const _k = g.default.div.attrs({
        className: 'maxWidth flex-center'
    })(i || (i = (a => a)`
  height: 40%;
  background: ${ 0 };
`), a => a.backgroundColor);
}), c.register('N6uNU', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('F3ltk');
    let j;
    var _k = a => {
        const l = a.textColor,
            m = b(g).useMemo(() => a.textShownWhenAnsweringCorrectly, []);
        return (0, f.jsx)(_l, {
            style: {
                color: l,
                animationDuration: `${ a.customCorrectTextAnimation && a.customCorrectTextAnimation.duration ? a.customCorrectTextAnimation.duration : 1 }s`
            },
            className: a.customCorrectTextAnimation && a.customCorrectTextAnimation.className ? a.customCorrectTextAnimation.className : 'animated tada',
            children: (0, f.jsx)(i.default, {
                max: 170,
                mode: 'single',
                text: m
            })
        });
    };
    const _l = h.default.div.attrs({
        className: 'maxAll flex-center'
    })(j || (j = (a => a)``));
}), c.register('g4tw8', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('o0yh2');
    let i;
    var _j = a => {
        const k = 1 / a.actions.length * 100;
        return (0, f.jsx)(_k, {
            children: a.actions.filter(a => null !== a).map(c => (0, f.jsx)(h.default, {
                ...c,
                heightPercentage: k,
                language: a.language,
                translations: a.translations,
                desktopBreakpoint: a.desktopBreakpoint,
                onActionSound: a.onActionSound
            }, c.text))
        });
    };
    const _k = g.default.div.attrs({
        className: 'maxWidth'
    })(i || (i = (a => a)`
  height: 60%;
  text-align: center;
`));
}), c.register('o0yh2', function(d, e) {
    a(d.exports, 'GimkitLiveActionItemContainer', function() {
        return _r;
    }), a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('SAYZy'),
        j = c('03TT2'),
        k = c('yN978'),
        l = c('F3ltk'),
        m = c('44iM224'),
        n = c('5oXbu'),
        o = c('bQWYI');
    let p;
    var _q = a => {
        const r = b(g).useRef(null),
            [s] = (0, o.default)(r);
        return (0, f.jsx)(j.default, {
            onClick: b => {
                (0, n.clickHandler)(b, () => {
                    var t;
                    null === (t = a.onActionSound) || void 0 === t || t.play(), a.handleClick && a.handleClick();
                });
            },
            children: (0, f.jsx)(_r, {
                ref: r,
                background: a.background,
                heightPercentage: a.heightPercentage,
                isOnDesktop: s >= a.desktopBreakpoint,
                children: (0, f.jsx)(l.default, {
                    text: (0, f.jsx)(k.default, {
                        language: a.language,
                        translations: a.translations,
                        text: a.text
                    }),
                    max: 40
                })
            })
        });
    };
    const _r = h.default.div.attrs({
        className: 'flex-center maxWidth'
    })(p || (p = (a => a)`
  height: ${ 0 }%;
  background: ${ 0 };
  color: ${ 0 };
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${ 0 }
`), a => a.heightPercentage, a => a.background, m.default.White, a => a.isOnDesktop && `transition: background 0.15s;\n    &:hover {\n      background: ${ (0, i.lighten)(0.1, a.background) };\n    }\n\n  `);
}), c.register('03TT2', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('span', {
        onClick: d => {
            a.onClick && a.onClick(d);
        },
        children: a.children
    });
}), c.register('VXpkP', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('TixUC'),
        i = c('+rvox'),
        j = c('EnE5G'),
        k = c('bQWYI'),
        l = c('6TqRT'),
        m = c('gH6oQ'),
        n = c('FSqWA'),
        o = c('506Y0'),
        p = c('SAYZy');
    let q;
    var r;
    (r = q || (q = {})).message = 'message', r.answer = 'answer';
    var _s = a => {
        const [t, u] = g.useState(q.message), v = g.useRef(null), [w, x] = (0, k.default)(v), y = g.useRef(null), [z, A] = (0, k.default)(y), B = g.useMemo(() => a.secondsToWaitBeforeContinue ? a.secondsToWaitBeforeContinue : 3, [a.secondsToWaitBeforeContinue]), C = g.useMemo(() => a.lastQuestion ? a.lastQuestion.answers.find(a => a.correct) : null, [a.lastQuestion]);
        (0, l.useTimeoutWhen)(() => {
            u(q.answer);
        }, a.showCorrectAnswerAfterMs || 800);
        const D = g.useMemo(() => t === q.message ? a.incorrectAnswerColor.background : (0, p.lighten)(0.2, a.incorrectAnswerColor.background), [
                t,
                a.incorrectAnswerColor.background
            ]),
            E = g.useMemo(() => t === q.message, [t]),
            F = g.useMemo(() => t === q.answer, [t]),
            G = g.useMemo(() => x * j.default.marginPercentage, [x]),
            H = g.useMemo(() => {
                const I = j.default.textHeightPercentage * x / A,
                    J = w * j.default.maxTextWidthPercentage / z;
                return Math.min(I, J);
            }, [
                x,
                A,
                z,
                w
            ]),
            I = g.useMemo(() => {
                if (E)
                    return 0;
                let J = -x / 2;
                return J += A * H / 2, J += G, J;
            }, [
                E,
                x,
                H,
                A,
                G
            ]),
            J = g.useMemo(() => x - A * H - x * j.default.marginPercentage * 2, [
                x,
                A,
                H
            ]),
            K = g.useMemo(() => J - x * j.default.continueButtonHeightPercentage - G, [
                J,
                x,
                G
            ]),
            L = g.useMemo(() => x * j.default.continueButtonHeightPercentage, [x]);
        g.useEffect(() => (a.onLockedChange && a.onLockedChange(!0), () => {
            a.onLockedChange && a.onLockedChange(!1);
        }), [a.onLockedChange]);
        return (0, f.jsx)(h.AnimatePresence, {
            mode: 'wait',
            children: (0, f.jsx)(i.Container, {
                animate: {
                    background: D
                },
                transition: {
                    duration: 0.3
                },
                ref: v,
                children: (0, f.jsxs)(i.Content, {
                    style: {
                        color: a.incorrectAnswerColor.text
                    },
                    children: [
                        (0, f.jsx)(i.TextContainer, {
                            style: {
                                marginTop: I
                            },
                            children: (0, f.jsx)(i.AnimatedText, {
                                layout: !0,
                                animate: {
                                    scale: E ? 1 : H,
                                    opacity: E ? 1 : 0.8
                                },
                                children: (0, f.jsx)(m.default, {
                                    max: 170,
                                    mode: 'single',
                                    text: (0, f.jsx)('div', {
                                        ref: y,
                                        children: a.textShownWhenAnsweringIncorrectly
                                    })
                                })
                            })
                        }),
                        F ? (0, f.jsx)(i.BottomContainer, {
                            style: {
                                marginTop: I,
                                height: J,
                                overflow: 'hidden'
                            },
                            children: (0, f.jsxs)(i.AnimatedBottomContent, {
                                children: [
                                    (0, f.jsx)(n.default, {
                                        containerWidth: w,
                                        containerHeight: x,
                                        answerBoxHeight: K,
                                        margin: G,
                                        correctAnswer: C,
                                        allowGoogleTranslate: a.allowGoogleTranslate,
                                        language: a.language,
                                        translations: a.translations
                                    }),
                                    (0, f.jsx)(o.default, {
                                        continueButtonHeight: L,
                                        containerWidth: w,
                                        secondsToWait: B,
                                        continueToQuestions: a.continueToQuestions,
                                        desktopBreakpoint: a.desktopBreakpoint,
                                        language: a.language,
                                        translations: a.translations,
                                        onActionSound: a.onActionSound,
                                        continueButtonColor: a.continueButtonColor,
                                        blockKeyboardEvents: a.blockKeyboardEvents,
                                        canAdvanceToQuestions: a.canAdvanceToQuestions,
                                        onLockedChange: a.onLockedChange
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            })
        });
    };
}), c.register('+rvox', function(d, e) {
    a(d.exports, 'Container', function() {
        return _y;
    }), a(d.exports, 'Content', function() {
        return _z;
    }), a(d.exports, 'TextContainer', function() {
        return _A;
    }), a(d.exports, 'AnimatedText', function() {
        return _B;
    }), a(d.exports, 'BottomContainer', function() {
        return _C;
    }), a(d.exports, 'AnimatedBottomContent', function() {
        return _D;
    }), a(d.exports, 'AnswerBox', function() {
        return _E;
    }), a(d.exports, 'CorrectAnswerLabelContainer', function() {
        return _F;
    }), a(d.exports, 'CorrectAnswerLabel', function() {
        return _G;
    }), a(d.exports, 'AnswerContainer', function() {
        return _H;
    }), a(d.exports, 'AnswerButtonAreaContainer', function() {
        return _I;
    }), a(d.exports, 'AnswerButtonProgressBar', function() {
        return _J;
    }), a(d.exports, 'ActionButtonContainer', function() {
        return _K;
    }), a(d.exports, 'ActionButtonContent', function() {
        return _L;
    }), a(d.exports, 'ActionButtonTextFitContent', function() {
        return _M;
    });
    var f = c('9aZ6t'),
        g = c('u4s09'),
        h = c('Eh2Wh');
    let i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = a => a;
    const _y = (0, g.default)(f.motion.div).attrs({
            className: 'maxAll'
        })(i || (i = x`
  overflow: hidden;
`)),
        _z = g.default.div.attrs({
            className: 'maxAll animated headShake'
        })(j || (j = x``)),
        _A = g.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(k || (k = x``)),
        _B = (0, g.default)(f.motion.div).attrs({
            layout: !0
        })(l || (l = x`
  width: 90%;
  height: 80%;
`)),
        _C = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = x`
  text-align: center;
`)),
        _D = (0, g.default)(f.motion.div).attrs({
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
        })(n || (n = x``)),
        _E = g.default.div.attrs({
            className: 'maxAll flex flex-column'
        })(o || (o = x`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`)),
        _F = g.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = x`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`)),
        _G = g.default.div(q || (q = x`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${ 0 };
  font-style: italic;
`), h.FontWeights.Normal),
        _H = g.default.div(r || (r = x`
  flex: 1;
  overflow: hidden;
`)),
        _I = g.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = x`
  position: relative;
  background: gray;
`)),
        _J = (0, g.default)(f.motion.div).attrs({
            animate: {
                width: '100%'
            },
            initial: {
                width: '0%'
            },
            className: 'maxHeight'
        })(t || (t = x`
  position: absolute;
  top: 0;
`)),
        _K = g.default.div.attrs({
            className: 'maxAll'
        })(u || (u = x`
  position: absolute;
  top: 0;
`)),
        _L = g.default.div.attrs({
            className: 'maxAll'
        })(v || (v = x``)),
        _M = g.default.div.attrs({
            className: 'flex vc'
        })(w || (w = x``));
}), c.register('EnE5G', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        textHeightPercentage: 0.08,
        maxTextWidthPercentage: 0.5,
        marginPercentage: 0.04,
        continueButtonHeightPercentage: 0.3
    };
}), c.register('gH6oQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('s/YA9'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('DbXyp'),
        j = c('u4s09');
    let k;
    const l = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        m = j.default.div(k || (k = (a => a)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class n extends b(h).Component {
            render() {
                const {
                    paddingHorizontal: o,
                    paddingVertical: p,
                    ...q
                } = this.props;
                return delete q.text, delete q.highlighted, (0, g.jsx)(m, {
                    className: this.props.customClass,
                    style: this.props.customStyle,
                    children: (0, g.jsx)(i.Textfit, {
                        style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            justifyContent: this.props.disableHorizontalCentering ? 'flex-start' : 'center',
                            alignItems: 'center',
                            paddingTop: p,
                            paddingBottom: p,
                            paddingLeft: this.props.paddingLeft || o,
                            paddingRight: o,
                            boxSizing: 'border-box',
                            fontWeight: this.props.noBold ? 'normal' : 900
                        },
                        ...q,
                        children: (0, g.jsx)('div', {
                            style: this.props.highlighted ? l : void 0,
                            children: this.props.text
                        })
                    })
                });
            }
        }
        (0, f.default)(n, 'defaultProps', {
            paddingHorizontal: '6%',
            paddingVertical: 15,
            max: 50,
            mode: 'single',
            forceSingleModeWidth: !1
        });
    var _o = n;
}), c.register('FSqWA', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('pjbax'),
        h = c('ug03q'),
        i = c('+rvox');
    var _j = a => (0, f.jsxs)(i.AnswerBox, {
        style: {
            height: a.answerBoxHeight,
            marginBottom: a.margin,
            borderRadius: 10,
            marginLeft: a.margin,
            width: a.containerWidth - 2 * a.margin
        },
        children: [
            (0, f.jsx)(i.CorrectAnswerLabelContainer, {
                children: (0, f.jsxs)(i.CorrectAnswerLabel, {
                    children: [
                        (0, f.jsx)(g.default, {
                            text: 'Correct Answer',
                            language: a.language,
                            translations: a.translations
                        }),
                        ':'
                    ]
                })
            }),
            (0, f.jsx)(i.AnswerContainer, {
                style: {
                    padding: `${ Math.max(0.1 * a.containerHeight, 30) }px ${ Math.max(0.1 * a.containerWidth, 30) }px`
                },
                children: (0, f.jsx)(h.default, {
                    allowGoogleTranslate: a.allowGoogleTranslate,
                    text: a.correctAnswer ? a.correctAnswer.text : 'No Correct Answer',
                    image: a.correctAnswer ? a.correctAnswer.image : void 0,
                    latex: a.correctAnswer ? a.correctAnswer.latex : void 0,
                    customTextHorizontalPadding: '0px',
                    customTextVerticalPadding: '0px',
                    customImageHeight: '100%',
                    customImageWidth: '100%',
                    customMaxTextSize: 40
                })
            })
        ]
    });
}), c.register('pjbax', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('s/YA9'),
        g = c('O0Kav'),
        h = c('qDc0h');
    class i extends b(g).Component {
        componentDidUpdate(j) {
            j.text !== this.props.text && (this.setState({
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
                }) : void this.requestTranslation().then(a => {
                    this.props.translations[this.props.text] = a, this.setState({
                        text: a
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', {
                text: this.props.text
            }), (0, f.default)(this, 'buildString', () => {
                let j = this.state.text;
                return this.props.suffix && (j += this.props.suffix), j;
            }), (0, f.default)(this, 'requestTranslation', async () => {
                try {
                    return (await h.default.post('/api/translate', {
                        to: this.props.language,
                        text: this.props.text
                    })).data;
                } catch (a) {
                    return this.props.text;
                }
            });
        }
    }
    var _j = i;
}), c.register('506Y0', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('gH6oQ'),
        i = c('o0yh2'),
        j = c('+rvox'),
        k = c('9aZ6t'),
        l = c('quE27'),
        m = c('2wWWD');
    var _n = a => {
        const [o, p] = (0, l.useBoolean)(!1), [q, r] = g.useState(a.secondsToWait), s = g.useMemo(() => a.canAdvanceToQuestions && q > 0, [
            q,
            a.canAdvanceToQuestions
        ]);
        g.useEffect(() => {
            a.onLockedChange && a.onLockedChange(s);
        }, [
            s,
            a.onLockedChange
        ]);
        const t = (0, m.default)({
                text: 'Continue',
                language: a.language,
                translations: a.translations
            }),
            u = g.useCallback(() => {
                s || a.continueToQuestions();
            }, [
                a.continueToQuestions,
                s
            ]),
            v = g.useCallback(o => {
                a.blockKeyboardEvents || o.key && 'Enter' === o.key && u();
            }, [
                a.blockKeyboardEvents,
                u
            ]);
        g.useEffect(() => (document.addEventListener('keydown', v), () => {
            document.removeEventListener('keydown', v);
        }), [v]);
        const w = g.useCallback(() => {
            var x;
            s || (null === (x = a.onActionSound) || void 0 === x || x.play(), u());
        }, [
            s,
            u,
            a.onActionSound
        ]);
        return g.useEffect(() => {
            if (o && q) {
                const x = setTimeout(() => {
                    r(q - 1);
                }, 1000);
                return () => clearTimeout(x);
            }
            return () => null;
        }, [
            o,
            q
        ]), (0, f.jsxs)(j.AnswerButtonAreaContainer, {
            style: {
                height: a.continueButtonHeight
            },
            children: [
                (0, f.jsx)(j.AnswerButtonProgressBar, {
                    style: {
                        background: a.continueButtonColor.background
                    },
                    transition: {
                        duration: a.secondsToWait,
                        ease: 'linear'
                    },
                    onAnimationStart: p
                }),
                (0, f.jsx)(j.ActionButtonContainer, {
                    children: (0, f.jsx)(i.GimkitLiveActionItemContainer, {
                        heightPercentage: 100,
                        isOnDesktop: a.containerWidth >= a.desktopBreakpoint,
                        background: q ? 'transparent' : a.continueButtonColor.background,
                        style: {
                            cursor: q ? 'not-allowed' : 'pointer',
                            color: a.continueButtonColor.text
                        },
                        onClick: w,
                        children: (0, f.jsx)(j.ActionButtonContent, {
                            children: (0, f.jsx)(h.default, {
                                text: (0, f.jsxs)(j.ActionButtonTextFitContent, {
                                    children: [
                                        (0, f.jsx)('div', {
                                            children: t
                                        }),
                                        (0, f.jsxs)(k.motion.div, {
                                            animate: {
                                                width: q > 0 ? 'auto' : 0,
                                                opacity: q > 0 ? 1 : 0
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
                                                Math.max(1, q),
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
}), c.register('2wWWD', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('quE27');
    var _h = a => {
        const [i, j] = f.useState(a.text);
        f.useEffect(() => {
            a.text !== i && (j(a.text), 'en' !== a.language && (a.disableIfContains && a.text.includes(a.disableIfContains) || (a.translations && a.translations[a.text] ? j(a.translations[a.text]) : (0, g.request)({
                url: '',
                data: {
                    to: a.language,
                    text: a.text
                },
                success: i => {
                    j(i), a.translations[a.text] = i;
                }
            }))));
        }, [a.text]);
        return (() => {
            let k = i;
            return a.suffix && (k += a.suffix), k;
        })();
    };
}), c.register('LqE9u', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('44iM224');
    var _g = {
        defaultBackground: '#303f9f',
        question: {
            background: '#303f9f',
            text: f.default.White
        },
        palette: [{
                background: '#771322',
                text: f.default.White
            },
            {
                background: '#A85C15',
                text: f.default.White
            },
            {
                background: '#0D6B33',
                text: f.default.White
            },
            {
                background: '#076296',
                text: f.default.White
            }
        ],
        response: {
            correctAnswer: {
                background: '#388E3C',
                text: f.default.White
            },
            incorrectAnswer: {
                background: '#B71C1C',
                text: f.default.White
            },
            shop: {
                background: '#311B92',
                text: f.default.White
            },
            continue: {
                background: '#1A237E',
                text: f.default.White
            }
        },
        desktopBreakpoint: 650
    };
}), c.register('wxy92', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('9aZ6t'),
        k = c('LqE9u'),
        l = c('eoj6K');
    let m;
    const n = (0, h.default)(j.motion.div)(m || (m = (a => a)`
  background: ${ 0 };
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`), a => a.defaultBackgroundColor);
    var _o = (0, i.observer)(a => (b(g).useEffect(() => (l.default.readToMe.canPlayAgain = !0, () => {
        l.default.readToMe.canPlayAgain = !1;
    }), []), (0, f.jsx)(n, {
        style: {
            opacity: a.opacity,
            y: a.yPosition
        },
        defaultBackgroundColor: a.defaultBackgroundColor || k.default.defaultBackground,
        children: a.children
    })));
});