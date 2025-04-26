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
c.register('jh162', function(b, c) {
    a(b.exports, 'EncryptData', function() {
        return h;
    }), a(b.exports, 'DecryptData', function() {
        return i;
    });
    const d = new Map(),
        e = new Map(),
        f = new Map();
    let g = 1;
    const h = (a, b) => {
            const i = (() => {
                const j = g.toString();
                return g++, j;
            })();
            if (b) {
                const k = d.get(b);
                k && (f.delete(k), e.set(k, i)), d.set(b, i);
            }
            return f.set(i, a), i;
        },
        i = a => {
            if (!a)
                return;
            const j = e.get(a);
            return j ? i(j) : f.get(a);
        };
}), c.register('OK62W', function(B, C) {
    a(B.exports, 'default', function() {
        return z;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('LChhu'),
        i = c('FgarE'),
        j = c('b9Bct'),
        k = c('FNaij'),
        l = c('CWdy5'),
        m = c('w1JIe'),
        n = c('P8qrB'),
        o = c('l6m0e'),
        p = c('7A6V/'),
        q = c('7C60q'),
        r = c('9bAEj'),
        s = c('bfuFC'),
        t = c('jh162');
    let u, v, w, x = a => a;
    var y;
    (y = w || (w = {})).questions = 'questions', y.response = 'response';
    var z = (0, g.observer)(a => {
        const [A, B] = b(e).useState(!1), [C, D] = b(e).useState(w.questions), [E, F] = b(e).useState(!1), [G, H] = b(e).useState(a.ecc), [I, J] = b(e).useState(), K = (0, k.useMotionValue)('0%'), L = (0, k.useMotionValue)(1), M = (0, k.useMotionValue)(a.disableFadeInOnMount ? 1 : 0);
        b(e).useEffect(() => {
            J(a.ecc);
        }, [a.ecc]), b(e).useEffect(() => {
            G || H(a.ecc);
        }, [a.ecc]);
        const N = b(e).useMemo(() => {
                if (G)
                    return (0, t.DecryptData)(G);
            }, [G]),
            O = b(e).useMemo(() => {
                if (N)
                    return (0, t.EncryptData)(N.answers, `${ N._id }-answers`);
            }, [N]);
        b(e).useEffect(() => (a.onMount && a.onMount(), a.disableFadeInOnMount || (0, h.animate)(M, 1, {
            duration: 0.25,
            delay: 0.01,
            ease: 'easeOut'
        }), () => {
            n.default.stop();
        }), []), b(e).useEffect(() => {
            o.default.readToMe.enabled = a.readToMeEnabled || !1, C === w.response ? n.default.stop() : C === w.questions && G && n.default.play(N);
        }, [
            a.readToMeEnabled,
            C
        ]);
        const P = b => {
                if (!E) {
                    a.onActionSound && a.onActionSound.play(), F(!0);
                    const Q = a.onQuestionAnswered(b);
                    (0, h.animate)(K, '100%', {
                        ease: 'easeIn',
                        duration: 0.23,
                        onComplete: () => {
                            F(!1), (b => {
                                var R, S;
                                b ? null === (R = a.correctSound) || void 0 === R || R.play() : null === (S = a.incorrectSound) || void 0 === S || S.play();
                            })(Q), a.nextQuestion && a.nextQuestion(), Q();
                        }
                    });
                }
            },
            Q = () => {
                n.default.stop(), L.set(0), a.beforeOpenAnswerResponse && a.beforeOpenAnswerResponse(), D(w.response), (0, h.animate)(L, 1, {
                    duration: 0.3,
                    onUpdate: a => {
                        !A && a >= 0.3 * 0.75 && B(!0);
                    }
                });
            },
            R = () => {
                K.set('0%'), B(!1), n.default.stop(), a.continueAction && a.continueAction(), H(I), D(w.questions), M.set(0), (0, h.animate)(M, 1, {
                    duration: 0.2
                });
            },
            S = () => {
                var T;
                const U = {
                    background: (null == a || null === (T = a.continueButtonColor) || void 0 === T ? void 0 : T.background) || q.default.response.continue.background,
                    text: 'Continue',
                    handleClick: () => {
                        R();
                    }
                };
                return a.responseActions ? [
                    ...a.responseActions,
                    U
                ] : [U];
            };
        return (0, d.jsx)(i.AnimatePresence, {
            mode: 'wait',
            children: C === w.questions ? G ? (0, d.jsxs)(r.default, {
                opacity: M,
                yPosition: K,
                defaultBackgroundColor: a.defaultBackgroundColor || q.default.defaultBackground,
                children: [
                    (0, d.jsx)(A, {
                        questionColor: a.questionColor || q.default.question,
                        children: (0, d.jsx)(l.default, {
                            text: null == N ? void 0 : N.text,
                            image: null == N ? void 0 : N.image,
                            audio: null == N ? void 0 : N.audio,
                            latex: null == N ? void 0 : N.latex,
                            allowGoogleTranslate: a.allowGoogleTranslate
                        })
                    }),
                    (0, d.jsx)(m.default, {
                        onQuestionAnswered: P,
                        eas: O,
                        type: (null == N ? void 0 : N.type) || s.QuestionType.multipleChoice,
                        blockKeyboardEvent: a.blockKeyboardEvents || !1,
                        allowGoogleTranslate: a.allowGoogleTranslate || !1,
                        language: a.language || 'en',
                        translations: a.translations || {},
                        answerColors: a.answerColors || q.default.palette,
                        desktopBreakpoint: a.desktopBreakpoint || q.default.desktopBreakpoint,
                        defaultBackgroundColor: a.defaultBackgroundColor || q.default.defaultBackground,
                        textInputButtonColor: a.textInputButtonColor || q.default.palette[2]
                    })
                ]
            }) : a.noQuestionContent || null : (0, d.jsx)(B, {
                style: {
                    opacity: L
                },
                children: (0, d.jsx)(p.default, {
                    canAdvanceToQuestions: A,
                    correctAnswer: a.lastQuestionCorrectAnswer,
                    continueToQuestions: R,
                    blockKeyboardEvents: a.blockKeyboardEvents,
                    lastQuestionCorrect: a.lastQuestionAnsweredCorrect || !1,
                    actions: S(),
                    lastQuestion: a.lastQuestion,
                    allowGoogleTranslate: a.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly || 'Correct!',
                    textShownWhenAnsweringIncorrectly: a.textShownWhenAnsweringIncorrectly || 'Incorrect!',
                    customCorrectTextAnimation: a.customCorrectTextAnimation,
                    language: a.language || 'en',
                    translations: a.translations || {},
                    desktopBreakpoint: a.desktopBreakpoint || q.default.desktopBreakpoint,
                    defaultBackgroundColor: a.defaultBackgroundColor || q.default.defaultBackground,
                    correctAnswerColor: a.correctAnswerColor || q.default.response.correctAnswer,
                    incorrectAnswerColor: a.incorrectAnswerColor || q.default.response.incorrectAnswer,
                    continueButtonColor: a.continueButtonColor || q.default.response.continue,
                    onActionSound: a.onActionSound,
                    onLockedChange: a.onLockedChange
                })
            })
        });
    });
    const A = f.default.div(u || (u = x`
  color: ${ 0 };
  height: 35%;
  background-color: ${ 0 };
`), a => a.questionColor.text, a => a.questionColor.background),
        B = (0, f.default)(j.motion.div)(v || (v = x`
  width: 100%;
  height: 100%;
  will-change: opacity;
`));
}), c.register('CWdy5', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('Ez+ug'),
        i = c('T19c3'),
        j = c('Ud+L4'),
        k = c('91NTa');
    let l;
    const m = f.default.div(l || (l = (a => a)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`));
    var n = (0, g.observer)(a => {
        const {
            readToMe: o
        } = e.useContext(k.default), {
            text: p,
            image: q,
            audio: r,
            latex: s
        } = t;
        return (0, d.jsx)(m, {
            children: p ? q || r || s ? (0, d.jsx)(j.default, {
                text: p,
                image: q,
                latex: s,
                audio: r,
                highlighted: o.currentlyPlayingQuestionText,
                allowGoogleTranslate: t.allowGoogleTranslate || !1
            }) : (0, d.jsx)(i.default, {
                text: p,
                highlighted: o.currentlyPlayingQuestionText,
                allowGoogleTranslate: t.allowGoogleTranslate
            }) : (0, d.jsx)(h.default, {
                image: q,
                latex: s,
                audio: r
            })
        });
    });
}), c.register('91NTa', function(u, v) {
    a(u.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('l6m0e');
    var f = b(d).createContext(e.default);
}), c.register('w1JIe', function(u, v) {
    a(u.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('8mGRo'),
        i = c('oIEQe'),
        j = c('Kef43'),
        k = c('l6m0e'),
        l = c('91NTa'),
        m = c('U8PGt'),
        n = c('bfuFC'),
        o = c('jh162'),
        p = c('4/f+U');
    let q;
    const r = [
        49,
        50,
        51,
        52
    ];
    var s = (0, g.observer)(a => {
        const [t, u] = b(e).useState(!0), [v, w] = b(e).useState(), {
            readToMe: x
        } = b(e).useContext(l.default), y = b(e).useRef(null), [z] = (0, m.default)(y), A = b(e).useMemo(() => (0, p.take)((0, o.DecryptData)(a.eas), 4), []);
        if (b(e).useEffect(() => {
                v && a.onQuestionAnswered(v);
            }, [v]), a.type === n.QuestionType.textInput)
            return (0, d.jsx)(t, {
                defaultBackgroundColor: a.defaultBackgroundColor,
                children: (0, d.jsx)(i.default, {
                    language: a.language,
                    translations: a.translations,
                    onQuestionAnswered: a.onQuestionAnswered,
                    buttonColor: a.textInputButtonColor
                })
            });
        const B = A.some(a => !(!a || !a.image)),
            C = a => {
                u(!1), w(a);
            };
        return (0, d.jsx)(t, {
            ref: y,
            defaultBackgroundColor: a.defaultBackgroundColor,
            children: A.map((b, u) => (0, d.jsx)(h.default, {
                id: b._id,
                position: u,
                canAnswer: t,
                keyCode: r[u],
                gridView: B,
                onQuestionAnswered: C,
                answer: b._id,
                blockKeyboardEvent: a.blockKeyboardEvent,
                answerColors: a.answerColors,
                containerWidth: z,
                desktopBreakpoint: a.desktopBreakpoint,
                answerCount: A.length,
                children: (0, d.jsx)(j.default, {
                    allowGoogleTranslate: a.allowGoogleTranslate,
                    text: b.text,
                    image: b.image,
                    latex: b.latex,
                    highlighted: x.currentlyPlayingAnswerAudio && u === k.default.readToMe.answerIndex
                })
            }, u))
        });
    });
    const t = f.default.div(q || (q = (a => a)`
  background: ${ 0 };
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`), a => a.defaultBackgroundColor);
}), c.register('8mGRo', function(n, o) {
    a(n.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('CDq40'),
        h = c('pd99Q');
    let i, j, k = a => a;
    var l = a => {
        b(e).useEffect(() => (document.addEventListener('keydown', n), () => document.removeEventListener('keydown', n)), []);
        const m = b => {
                if (!a.canAnswer)
                    return;
                (0, h.clickHandler)(b, () => {
                    a.onQuestionAnswered(a.answer);
                });
            },
            n = b => {
                if (a.blockKeyboardEvent)
                    return;
                const {
                    keyCode: o
                } = p;
                o === a.keyCode && m(p);
            },
            o = a.containerWidth >= a.desktopBreakpoint,
            p = b(e).useMemo(() => 4 === a.answerCount ? a.gridView || o ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : o ? {
                width: 100 / a.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / a.answerCount
            }, [
                a.answerCount,
                o,
                a.gridView
            ]);
        return (0, d.jsx)(m, {
            onClick: m,
            gridView: a.gridView,
            isOnDesktop: o,
            heightPercentage: p.height,
            widthPercentage: p.width,
            children: (0, d.jsx)(n, {
                position: a.position,
                answerColors: a.answerColors,
                isOnDesktop: o,
                children: a.children
            })
        });
    };
    const m = f.default.div(i || (i = k`
  text-align: center;
  height: ${ 0 }%;
  width: ${ 0 }%;
  cursor: pointer;
`), a => a.heightPercentage, a => a.widthPercentage),
        n = f.default.div(j || (j = k`
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
`), a => a.answerColors[a.position].background, a => a.answerColors[a.position].text, a => a.isOnDesktop && `\n    transition: background 0.18s ease-in-out;\n    &:hover {\n      background: ${ (0, g.lighten)(0.1, a.answerColors[a.position].background) };\n    }\n  `);
}), c.register('oIEQe', function(r, s) {
    a(r.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('CDq40'),
        h = c('vIVBw'),
        i = c('cdiGP24'),
        j = c('ZdPV1');
    let k, l, m, n, o = a => a;
    var p = a => {
        const [q, r] = b(e).useState(''), [s, t] = b(e).useState(!0), u = () => {
            q && s && (t(!1), a.onQuestionAnswered(q));
        };
        return (0, d.jsxs)(q, {
            children: [
                (0, d.jsx)(r, {
                    onSubmit: a => {
                        a.preventDefault(), u();
                    },
                    children: (0, d.jsx)(s, {
                        autoFocus: !0,
                        value: q,
                        onChange: a => {
                            r(a.target.value);
                        },
                        placeholder: 'Enter answer here...'
                    })
                }),
                (0, d.jsx)(t, {
                    buttonColor: a.buttonColor,
                    onClick: u,
                    children: (0, d.jsx)(h.default, {
                        language: a.language,
                        translations: a.translations,
                        text: 'Submit'
                    })
                })
            ]
        });
    };
    const q = f.default.div(k || (k = o`
  height: 100%;
  width: 100%;
`)),
        r = f.default.form(l || (l = o`
  height: 55%;
  width: 100%;
`)),
        s = f.default.input(m || (m = o`
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
        t = f.default.div(n || (n = o`
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
`), a => a.buttonColor.background, a => a.buttonColor.text, a => (0, g.lighten)(0.1, a.buttonColor.background));
}), c.register('vIVBw', function(i, e) {
    a(i.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f');
    var g = a => {
        const [h, i] = b(e).useState(a.text);
        b(e).useEffect(() => {
            a.text !== h && (i(a.text), 'en' !== a.language && (a.disableIfContains && a.text.includes(a.disableIfContains) || (a.translations && a.translations[a.text] ? i(a.translations[a.text]) : (0, f.request)({
                url: '',
                data: {
                    to: a.language,
                    text: a.text
                },
                success: b => {
                    i(b), a.translations[a.text] = b;
                }
            }))));
        }, [a.text]);
        return (0, d.jsx)(d.Fragment, {
            children: (() => {
                let j = k;
                return a.suffix && (j += a.suffix), j;
            })()
        });
    };
}), c.register('cdiGP24', function(b, c) {
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
}), c.register('ZdPV1', function(b, c) {
    a(b.exports, 'default', function() {
        return e;
    });
    const d = '"Product Sans"';
    var e = {
        mainFontName: d,
        name: `${ d }, sans-serif`,
        important: `${ d }, sans-serif !important`
    };
}), c.register('Kef43', function(b, k) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('2WDH6'),
        f = c('bTRJM'),
        g = c('pm/mI'),
        h = c('pd99Q');
    var i = a => (0, d.jsxs)(d.Fragment, {
        children: [
            a.text && (0, d.jsx)(g.default, {
                mode: 'multi',
                text: (0, h.parseText)(a.allowGoogleTranslate, a.text),
                paddingVertical: a.customTextHorizontalPadding || 7,
                paddingHorizontal: a.customTextHorizontalPadding,
                max: a.customMaxTextSize || 25,
                highlighted: a.highlighted
            }),
            a.image && (0, d.jsx)('img', {
                src: (0, e.getCloudinaryUrl)(a.image),
                alt: 'Answer Choice',
                style: {
                    maxHeight: a.customImageHeight || '90%',
                    height: a.customImageHeight || '90%',
                    maxWidth: a.customImageWidth || '90%',
                    borderRadius: 4,
                    objectFit: 'contain'
                }
            }),
            a.latex && (0, d.jsx)(g.default, {
                text: (0, d.jsx)(f.default, {
                    latex: a.latex
                }),
                paddingVertical: a.customTextHorizontalPadding || 7,
                paddingHorizontal: a.customTextHorizontalPadding,
                max: a.customMaxTextSize || 25,
                noBold: !0
            })
        ]
    });
}), c.register('7A6V/', function(b, k) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('CB7A7'),
        f = c('Z+S7d');
    var g = a => a.lastQuestionCorrect ? (0, d.jsx)(e.default, {
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
    }) : (0, d.jsx)(f.default, {
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
}), c.register('CB7A7', function(b, k) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cdiGP24'),
        h = c('OzfbH'),
        i = c('AVXq8');
    let j;
    var k = a => {
        e.useEffect(() => (document.addEventListener('keydown', b), () => {
            document.removeEventListener('keydown', b);
        }), [
            a.canAdvanceToQuestions,
            a.blockKeyboardEvents
        ]);
        const l = l => {
            a.blockKeyboardEvents || l.key && 'Enter' === l.key && a.canAdvanceToQuestions && a.continueToQuestions();
        };
        return (0, d.jsxs)(l, {
            defaultBackgroundColor: a.defaultBackgroundColor,
            children: [
                (0, d.jsx)(h.default, {
                    textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly,
                    customCorrectTextAnimation: a.customCorrectTextAnimation,
                    correctAnswerColor: a.correctAnswerColor
                }),
                (0, d.jsx)(i.default, {
                    actions: a.actions,
                    language: a.language,
                    translations: a.translations,
                    desktopBreakpoint: a.desktopBreakpoint,
                    onActionSound: a.onActionSound
                })
            ]
        });
    };
    const l = f.default.div.attrs({
        className: 'flex-column maxAll'
    })(j || (j = (a => a)`
  color: ${ 0 };
  background: ${ 0 };
`), g.default.White, a => a.defaultBackgroundColor);
}), c.register('OzfbH', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('743Kp');
    let g;
    var h = a => (0, d.jsx)(i, {
        backgroundColor: a.correctAnswerColor.background,
        children: (0, d.jsx)(f.default, {
            textShownWhenAnsweringCorrectly: a.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: a.customCorrectTextAnimation,
            textColor: a.correctAnswerColor.text
        })
    });
    const i = e.default.div.attrs({
        className: 'maxWidth flex-center'
    })(g || (g = (a => a)`
  height: 40%;
  background: ${ 0 };
`), a => a.backgroundColor);
}), c.register('743Kp', function(k, d) {
    a(k.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('pm/mI');
    let h;
    var i = a => {
        const j = a.textColor,
            k = b(e).useMemo(() => a.textShownWhenAnsweringCorrectly, []);
        return (0, d.jsx)(j, {
            style: {
                color: j,
                animationDuration: `${ a.customCorrectTextAnimation && a.customCorrectTextAnimation.duration ? a.customCorrectTextAnimation.duration : 1 }s`
            },
            className: a.customCorrectTextAnimation && a.customCorrectTextAnimation.className ? a.customCorrectTextAnimation.className : 'animated tada',
            children: (0, d.jsx)(g.default, {
                max: 170,
                mode: 'single',
                text: k
            })
        });
    };
    const j = f.default.div.attrs({
        className: 'maxAll flex-center'
    })(h || (h = (a => a)``));
}), c.register('AVXq8', function(b, q) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('4cM0K');
    let g;
    var h = a => {
        const i = 1 / a.actions.length * 100;
        return (0, d.jsx)(i, {
            children: a.actions.filter(a => null !== a).map(c => (0, d.jsx)(f.default, {
                ...c,
                heightPercentage: i,
                language: a.language,
                translations: a.translations,
                desktopBreakpoint: a.desktopBreakpoint,
                onActionSound: a.onActionSound
            }, c.text))
        });
    };
    const i = e.default.div.attrs({
        className: 'maxWidth'
    })(g || (g = (a => a)`
  height: 60%;
  text-align: center;
`));
}), c.register('4cM0K', function(q, d) {
    a(q.exports, 'GimkitLiveActionItemContainer', function() {
        return p;
    }), a(q.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('CDq40'),
        h = c('02Dw2'),
        i = c('vIVBw'),
        j = c('pm/mI'),
        k = c('cdiGP24'),
        l = c('pd99Q'),
        m = c('U8PGt');
    let n;
    var o = a => {
        const p = b(e).useRef(null),
            [q] = (0, m.default)(p);
        return (0, d.jsx)(h.default, {
            onClick: b => {
                (0, l.clickHandler)(b, () => {
                    var r;
                    null === (r = a.onActionSound) || void 0 === r || r.play(), a.handleClick && a.handleClick();
                });
            },
            children: (0, d.jsx)(p, {
                ref: p,
                background: a.background,
                heightPercentage: a.heightPercentage,
                isOnDesktop: q >= a.desktopBreakpoint,
                children: (0, d.jsx)(j.default, {
                    text: (0, d.jsx)(i.default, {
                        language: a.language,
                        translations: a.translations,
                        text: a.text
                    }),
                    max: 40
                })
            })
        });
    };
    const p = f.default.div.attrs({
        className: 'flex-center maxWidth'
    })(n || (n = (a => a)`
  height: ${ 0 }%;
  background: ${ 0 };
  color: ${ 0 };
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${ 0 }
`), a => a.heightPercentage, a => a.background, k.default.White, a => a.isOnDesktop && `transition: background 0.15s;\n    &:hover {\n      background: ${ (0, g.lighten)(0.1, a.background) };\n    }\n\n  `);
}), c.register('02Dw2', function(b, t) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('span', {
        onClick: b => {
            a.onClick && a.onClick(b);
        },
        children: a.children
    });
}), c.register('Z+S7d', function(b, t) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('FgarE'),
        g = c('qg4Oj'),
        h = c('iQxLN'),
        i = c('U8PGt'),
        j = c('WRy6v'),
        k = c('4JvRz'),
        l = c('iSFyV'),
        m = c('rUIvb'),
        n = c('CDq40');
    let o;
    var p;
    (p = o || (o = {})).message = 'message', p.answer = 'answer';
    var q = a => {
        const [r, s] = e.useState(o.message), t = e.useRef(null), [u, v] = (0, i.default)(t), w = e.useRef(null), [x, y] = (0, i.default)(w), z = e.useMemo(() => a.secondsToWaitBeforeContinue ? a.secondsToWaitBeforeContinue : 3, [a.secondsToWaitBeforeContinue]), A = e.useMemo(() => a.lastQuestion ? a.lastQuestion.answers.find(a => a.correct) : null, [a.lastQuestion]);
        (0, j.useTimeoutWhen)(() => {
            s(o.answer);
        }, a.showCorrectAnswerAfterMs || 800);
        const B = e.useMemo(() => r === o.message ? a.incorrectAnswerColor.background : (0, n.lighten)(0.2, a.incorrectAnswerColor.background), [
                r,
                a.incorrectAnswerColor.background
            ]),
            C = e.useMemo(() => r === o.message, [r]),
            D = e.useMemo(() => r === o.answer, [r]),
            E = e.useMemo(() => v * h.default.marginPercentage, [v]),
            F = e.useMemo(() => {
                const G = h.default.textHeightPercentage * v / y,
                    H = u * h.default.maxTextWidthPercentage / x;
                return Math.min(G, H);
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
        e.useEffect(() => (a.onLockedChange && a.onLockedChange(!0), () => {
            a.onLockedChange && a.onLockedChange(!1);
        }), [a.onLockedChange]);
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
                        color: a.incorrectAnswerColor.text
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
                                        children: a.textShownWhenAnsweringIncorrectly
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
                                        allowGoogleTranslate: a.allowGoogleTranslate,
                                        language: a.language,
                                        translations: a.translations
                                    }),
                                    (0, d.jsx)(m.default, {
                                        continueButtonHeight: J,
                                        containerWidth: u,
                                        secondsToWait: z,
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
}), c.register('qg4Oj', function(b, d) {
    a(b.exports, 'Container', function() {
        return w;
    }), a(b.exports, 'Content', function() {
        return x;
    }), a(b.exports, 'TextContainer', function() {
        return y;
    }), a(b.exports, 'AnimatedText', function() {
        return z;
    }), a(b.exports, 'BottomContainer', function() {
        return A;
    }), a(b.exports, 'AnimatedBottomContent', function() {
        return B;
    }), a(b.exports, 'AnswerBox', function() {
        return C;
    }), a(b.exports, 'CorrectAnswerLabelContainer', function() {
        return D;
    }), a(b.exports, 'CorrectAnswerLabel', function() {
        return E;
    }), a(b.exports, 'AnswerContainer', function() {
        return F;
    }), a(b.exports, 'AnswerButtonAreaContainer', function() {
        return G;
    }), a(b.exports, 'AnswerButtonProgressBar', function() {
        return H;
    }), a(b.exports, 'ActionButtonContainer', function() {
        return I;
    }), a(b.exports, 'ActionButtonContent', function() {
        return J;
    }), a(b.exports, 'ActionButtonTextFitContent', function() {
        return K;
    });
    var d = c('b9Bct'),
        e = c('h99Nu'),
        f = c('gSUVO');
    let g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a => a;
    const w = (0, e.default)(d.motion.div).attrs({
            className: 'maxAll'
        })(g || (g = v`
  overflow: hidden;
`)),
        x = e.default.div.attrs({
            className: 'maxAll animated headShake'
        })(h || (h = v``)),
        y = e.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(i || (i = v``)),
        z = (0, e.default)(d.motion.div).attrs({
            layout: !0
        })(j || (j = v`
  width: 90%;
  height: 80%;
`)),
        A = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = v`
  text-align: center;
`)),
        B = (0, e.default)(d.motion.div).attrs({
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
        C = e.default.div.attrs({
            className: 'maxAll flex flex-column'
        })(m || (m = v`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`)),
        D = e.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = v`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`)),
        E = e.default.div(o || (o = v`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${ 0 };
  font-style: italic;
`), f.FontWeights.Normal),
        F = e.default.div(p || (p = v`
  flex: 1;
  overflow: hidden;
`)),
        G = e.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = v`
  position: relative;
  background: gray;
`)),
        H = (0, e.default)(d.motion.div).attrs({
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
        I = e.default.div.attrs({
            className: 'maxAll'
        })(s || (s = v`
  position: absolute;
  top: 0;
`)),
        J = e.default.div.attrs({
            className: 'maxAll'
        })(t || (t = v``)),
        K = e.default.div.attrs({
            className: 'flex vc'
        })(u || (u = v``));
}), c.register('iQxLN', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        textHeightPercentage: 0.08,
        maxTextWidthPercentage: 0.5,
        marginPercentage: 0.04,
        continueButtonHeightPercentage: 0.3
    };
}), c.register('4JvRz', function(o, d) {
    a(o.exports, 'default', function() {
        return m;
    });
    var d = c('UM8oI'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('iVIaF'),
        h = c('h99Nu');
    let i;
    const j = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        k = h.default.div(i || (i = (a => a)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class l extends b(f).Component {
            render() {
                const {
                    paddingHorizontal: m,
                    paddingVertical: n,
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
                            paddingTop: n,
                            paddingBottom: n,
                            paddingLeft: this.props.paddingLeft || m,
                            paddingRight: m,
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
    var m = n;
}), c.register('iSFyV', function(b, o) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('wEVnZ'),
        f = c('Kef43'),
        g = c('qg4Oj');
    var h = a => (0, d.jsxs)(g.AnswerBox, {
        style: {
            height: a.answerBoxHeight,
            marginBottom: a.margin,
            borderRadius: 10,
            marginLeft: a.margin,
            width: a.containerWidth - 2 * a.margin
        },
        children: [
            (0, d.jsx)(g.CorrectAnswerLabelContainer, {
                children: (0, d.jsxs)(g.CorrectAnswerLabel, {
                    children: [
                        (0, d.jsx)(e.default, {
                            text: 'Correct Answer',
                            language: a.language,
                            translations: a.translations
                        }),
                        ':'
                    ]
                })
            }),
            (0, d.jsx)(g.AnswerContainer, {
                style: {
                    padding: `${ Math.max(0.1 * a.containerHeight, 30) }px ${ Math.max(0.1 * a.containerWidth, 30) }px`
                },
                children: (0, d.jsx)(f.default, {
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
}), c.register('wEVnZ', function(o, d) {
    a(o.exports, 'default', function() {
        return h;
    });
    var d = c('UM8oI'),
        e = c('uPP4W'),
        f = c('qLBdK');
    class g extends b(e).Component {
        componentDidUpdate(a) {
            a.text !== this.props.text && (this.setState({
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
            super(...a), (0, d.default)(this, 'state', {
                text: this.props.text
            }), (0, d.default)(this, 'buildString', () => {
                let h = this.state.text;
                return this.props.suffix && (h += this.props.suffix), h;
            }), (0, d.default)(this, 'requestTranslation', async () => {
                try {
                    return (await f.default.post('/api/translate', {
                        to: this.props.language,
                        text: this.props.text
                    })).data;
                } catch (a) {
                    return this.props.text;
                }
            });
        }
    }
    var h = i;
}), c.register('rUIvb', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('4JvRz'),
        g = c('4cM0K'),
        h = c('qg4Oj'),
        i = c('b9Bct'),
        j = c('PjB0f'),
        k = c('kKvrw');
    var l = a => {
        const [m, n] = (0, j.useBoolean)(!1), [o, p] = e.useState(a.secondsToWait), q = e.useMemo(() => a.canAdvanceToQuestions && o > 0, [
            o,
            a.canAdvanceToQuestions
        ]);
        e.useEffect(() => {
            a.onLockedChange && a.onLockedChange(q);
        }, [
            q,
            a.onLockedChange
        ]);
        const r = (0, k.default)({
                text: 'Continue',
                language: a.language,
                translations: a.translations
            }),
            s = e.useCallback(() => {
                q || a.continueToQuestions();
            }, [
                a.continueToQuestions,
                q
            ]),
            t = e.useCallback(m => {
                a.blockKeyboardEvents || m.key && 'Enter' === m.key && s();
            }, [
                a.blockKeyboardEvents,
                s
            ]);
        e.useEffect(() => (document.addEventListener('keydown', t), () => {
            document.removeEventListener('keydown', t);
        }), [t]);
        const u = e.useCallback(() => {
            var v;
            q || (null === (v = a.onActionSound) || void 0 === v || v.play(), s());
        }, [
            q,
            s,
            a.onActionSound
        ]);
        return e.useEffect(() => {
            if (m && o) {
                const v = setTimeout(() => {
                    p(o - 1);
                }, 1000);
                return () => clearTimeout(v);
            }
            return () => null;
        }, [
            m,
            o
        ]), (0, d.jsxs)(h.AnswerButtonAreaContainer, {
            style: {
                height: a.continueButtonHeight
            },
            children: [
                (0, d.jsx)(h.AnswerButtonProgressBar, {
                    style: {
                        background: a.continueButtonColor.background
                    },
                    transition: {
                        duration: a.secondsToWait,
                        ease: 'linear'
                    },
                    onAnimationStart: n
                }),
                (0, d.jsx)(h.ActionButtonContainer, {
                    children: (0, d.jsx)(g.GimkitLiveActionItemContainer, {
                        heightPercentage: 100,
                        isOnDesktop: a.containerWidth >= a.desktopBreakpoint,
                        background: o ? 'transparent' : a.continueButtonColor.background,
                        style: {
                            cursor: o ? 'not-allowed' : 'pointer',
                            color: a.continueButtonColor.text
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
}), c.register('kKvrw', function(b, o) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('PjB0f');
    var f = a => {
        const [g, h] = d.useState(a.text);
        d.useEffect(() => {
            a.text !== g && (h(a.text), 'en' !== a.language && (a.disableIfContains && a.text.includes(a.disableIfContains) || (a.translations && a.translations[a.text] ? h(a.translations[a.text]) : (0, e.request)({
                url: '',
                data: {
                    to: a.language,
                    text: a.text
                },
                success: g => {
                    h(g), a.translations[a.text] = g;
                }
            }))));
        }, [a.text]);
        return (() => {
            let i = j;
            return a.suffix && (i += a.suffix), i;
        })();
    };
}), c.register('7C60q', function(b, o) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('cdiGP24');
    var e = {
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
}), c.register('9bAEj', function(o, r) {
    a(o.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('b9Bct'),
        i = c('7C60q'),
        j = c('l6m0e');
    let k;
    const l = (0, f.default)(h.motion.div)(k || (k = (a => a)`
  background: ${ 0 };
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`), a => a.defaultBackgroundColor);
    var m = (0, g.observer)(a => (b(e).useEffect(() => (j.default.readToMe.canPlayAgain = !0, () => {
        j.default.readToMe.canPlayAgain = !1;
    }), []), (0, d.jsx)(l, {
        style: {
            opacity: a.opacity,
            y: a.yPosition
        },
        defaultBackgroundColor: a.defaultBackgroundColor || i.default.defaultBackground,
        children: a.children
    })));
});