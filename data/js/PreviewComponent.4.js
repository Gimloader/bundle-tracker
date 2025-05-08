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
    a(d.exports, 'EncryptData', function () {
        return _j;
    }), a(d.exports, 'DecryptData', function () {
        return _k;
    });
    const f = new Map(), g = new Map(), h = new Map();
    let i = 1;
    const _j = (k, l) => {
            const m = (() => {
                const n = i.toString();
                return i++, n;
            })();
            if (l) {
                const n = f.get(l);
                n && (h.delete(n), g.set(n, m)), f.set(l, m);
            }
            return h.set(m, n), m;
        }, _k = l => {
            if (!l)
                return;
            const m = g.get(l);
            return m ? _k(m) : h.get(l);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _B;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y, z = A => A;
    var A;
    (A = y || (y = {})).questions = 'questions', A.response = 'response';
    var _B = (0, i.observer)(C => {
        const [D, E] = b(g).useState(!1), [F, G] = b(g).useState(y.questions), [H, I] = b(g).useState(!1), [J, K] = b(g).useState(C.ecc), [L, M] = b(g).useState(), N = (0, m.useMotionValue)('0%'), O = (0, m.useMotionValue)(1), P = (0, m.useMotionValue)(C.disableFadeInOnMount ? 1 : 0);
        b(g).useEffect(() => {
            M(C.ecc);
        }, [C.ecc]), b(g).useEffect(() => {
            J || K(C.ecc);
        }, [C.ecc]);
        const Q = b(g).useMemo(() => {
                if (J)
                    return (0, v.DecryptData)(J);
            }, [J]), R = b(g).useMemo(() => {
                if (Q)
                    return (0, v.EncryptData)(Q.answers, `${ Q._id }-answers`);
            }, [Q]);
        b(g).useEffect(() => (C.onMount && C.onMount(), C.disableFadeInOnMount || (0, j.animate)(P, 1, {
            duration: 0.25,
            delay: 0.01,
            ease: 'easeOut'
        }), () => {
            p.default.stop();
        }), []), b(g).useEffect(() => {
            q.default.readToMe.enabled = C.readToMeEnabled || !1, F === y.response ? p.default.stop() : F === y.questions && J && p.default.play(Q);
        }, [
            C.readToMeEnabled,
            F
        ]);
        const S = T => {
                if (!H) {
                    C.onActionSound && C.onActionSound.play(), I(!0);
                    const U = C.onQuestionAnswered(T);
                    (0, j.animate)(N, '100%', {
                        ease: 'easeIn',
                        duration: 0.23,
                        onComplete: () => {
                            I(!1), (V => {
                                var W, X;
                                V ? null === (W = C.correctSound) || void 0 === W || W.play() : null === (X = C.incorrectSound) || void 0 === X || X.play();
                            })(U), C.nextQuestion && C.nextQuestion(), _T();
                        }
                    });
                }
            }, _T = () => {
                p.default.stop(), O.set(0), C.beforeOpenAnswerResponse && C.beforeOpenAnswerResponse(), G(y.response), (0, j.animate)(O, 1, {
                    duration: 0.3,
                    onUpdate: U => {
                        !D && U >= 0.3 * 0.75 && E(!0);
                    }
                });
            }, U = () => {
                N.set('0%'), E(!1), p.default.stop(), C.continueAction && C.continueAction(), K(L), G(y.questions), P.set(0), (0, j.animate)(P, 1, { duration: 0.2 });
            }, V = () => {
                var W;
                const X = {
                    background: (null == C || null === (W = C.continueButtonColor) || void 0 === W ? void 0 : W.background) || s.default.response.continue.background,
                    text: 'Continue',
                    handleClick: () => {
                        U();
                    }
                };
                return C.responseActions ? [
                    ...C.responseActions,
                    X
                ] : [X];
            };
        return (0, f.jsx)(k.AnimatePresence, {
            mode: 'wait',
            children: F === y.questions ? J ? (0, f.jsxs)(t.default, {
                opacity: P,
                yPosition: N,
                defaultBackgroundColor: C.defaultBackgroundColor || s.default.defaultBackground,
                children: [
                    (0, f.jsx)(_C, {
                        questionColor: C.questionColor || s.default.question,
                        children: (0, f.jsx)(n.default, {
                            text: null == Q ? void 0 : Q.text,
                            image: null == Q ? void 0 : Q.image,
                            audio: null == Q ? void 0 : Q.audio,
                            latex: null == Q ? void 0 : Q.latex,
                            allowGoogleTranslate: C.allowGoogleTranslate
                        })
                    }),
                    (0, f.jsx)(o.default, {
                        onQuestionAnswered: S,
                        eas: R,
                        type: (null == Q ? void 0 : Q.type) || u.QuestionType.multipleChoice,
                        blockKeyboardEvent: C.blockKeyboardEvents || !1,
                        allowGoogleTranslate: C.allowGoogleTranslate || !1,
                        language: C.language || 'en',
                        translations: C.translations || {},
                        answerColors: C.answerColors || s.default.palette,
                        desktopBreakpoint: C.desktopBreakpoint || s.default.desktopBreakpoint,
                        defaultBackgroundColor: C.defaultBackgroundColor || s.default.defaultBackground,
                        textInputButtonColor: C.textInputButtonColor || s.default.palette[2]
                    })
                ]
            }) : C.noQuestionContent || null : (0, f.jsx)(_D, {
                style: { opacity: O },
                children: (0, f.jsx)(r.default, {
                    canAdvanceToQuestions: D,
                    correctAnswer: C.lastQuestionCorrectAnswer,
                    continueToQuestions: U,
                    blockKeyboardEvents: C.blockKeyboardEvents,
                    lastQuestionCorrect: C.lastQuestionAnsweredCorrect || !1,
                    actions: V(),
                    lastQuestion: C.lastQuestion,
                    allowGoogleTranslate: C.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: C.textShownWhenAnsweringCorrectly || 'Correct!',
                    textShownWhenAnsweringIncorrectly: C.textShownWhenAnsweringIncorrectly || 'Incorrect!',
                    customCorrectTextAnimation: C.customCorrectTextAnimation,
                    language: C.language || 'en',
                    translations: C.translations || {},
                    desktopBreakpoint: C.desktopBreakpoint || s.default.desktopBreakpoint,
                    defaultBackgroundColor: C.defaultBackgroundColor || s.default.defaultBackground,
                    correctAnswerColor: C.correctAnswerColor || s.default.response.correctAnswer,
                    incorrectAnswerColor: C.incorrectAnswerColor || s.default.response.incorrectAnswer,
                    continueButtonColor: C.continueButtonColor || s.default.response.continue,
                    onActionSound: C.onActionSound,
                    onLockedChange: C.onLockedChange
                })
            })
        });
    });
    const _C = h.default.div(w || (w = z`
  color: ${ 0 };
  height: 35%;
  background-color: ${ 0 };
`), D => D.questionColor.text, D => D.questionColor.background), _D = (0, h.default)(l.motion.div)(x || (x = z`
  width: 100%;
  height: 100%;
  will-change: opacity;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    const o = h.default.div(n || (n = (p => p)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`));
    var _p = (0, i.observer)(q => {
        const {readToMe: r} = g.useContext(m.default), {
                text: s,
                image: t,
                audio: u,
                latex: v
            } = q;
        return (0, f.jsx)(o, {
            children: s ? t || u || v ? (0, f.jsx)(l.default, {
                text: s,
                image: t,
                latex: v,
                audio: u,
                highlighted: r.currentlyPlayingQuestionText,
                allowGoogleTranslate: q.allowGoogleTranslate || !1
            }) : (0, f.jsx)(k.default, {
                text: s,
                highlighted: r.currentlyPlayingQuestionText,
                allowGoogleTranslate: q.allowGoogleTranslate
            }) : (0, f.jsx)(j.default, {
                image: t,
                latex: v,
                audio: u
            })
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = b(f).createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    const t = [
        49,
        50,
        51,
        52
    ];
    var _u = (0, i.observer)(v => {
        const [w, x] = b(g).useState(!0), [y, z] = b(g).useState(), {readToMe: A} = b(g).useContext(n.default), B = b(g).useRef(null), [C] = (0, o.default)(B), D = b(g).useMemo(() => (0, r.take)((0, q.DecryptData)(v.eas), 4), []);
        if (b(g).useEffect(() => {
                y && v.onQuestionAnswered(y);
            }, [y]), v.type === p.QuestionType.textInput)
            return (0, f.jsx)(_v, {
                defaultBackgroundColor: v.defaultBackgroundColor,
                children: (0, f.jsx)(k.default, {
                    language: v.language,
                    translations: v.translations,
                    onQuestionAnswered: v.onQuestionAnswered,
                    buttonColor: v.textInputButtonColor
                })
            });
        const E = D.some(F => !(!F || !F.image)), F = G => {
                x(!1), z(G);
            };
        return (0, f.jsx)(_v, {
            ref: B,
            defaultBackgroundColor: v.defaultBackgroundColor,
            children: D.map((G, H) => (0, f.jsx)(j.default, {
                id: G._id,
                position: H,
                canAnswer: w,
                keyCode: t[H],
                gridView: E,
                onQuestionAnswered: F,
                answer: G._id,
                blockKeyboardEvent: v.blockKeyboardEvent,
                answerColors: v.answerColors,
                containerWidth: C,
                desktopBreakpoint: v.desktopBreakpoint,
                answerCount: D.length,
                children: (0, f.jsx)(l.default, {
                    allowGoogleTranslate: v.allowGoogleTranslate,
                    text: G.text,
                    image: G.image,
                    latex: G.latex,
                    highlighted: A.currentlyPlayingAnswerAudio && H === m.default.readToMe.answerIndex
                })
            }, H))
        });
    });
    const _v = h.default.div(s || (s = (w => w)`
  background: ${ 0 };
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`), w => w.defaultBackgroundColor);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m = n => n;
    var _n = o => {
        b(g).useEffect(() => (document.addEventListener('keydown', d), () => document.removeEventListener('keydown', d)), []);
        const p = q => {
                if (!o.canAnswer)
                    return;
                (0, j.clickHandler)(q, () => {
                    o.onQuestionAnswered(o.answer);
                });
            }, q = r => {
                if (o.blockKeyboardEvent)
                    return;
                const {keyCode: s} = r;
                s === o.keyCode && p(r);
            }, r = o.containerWidth >= o.desktopBreakpoint, s = b(g).useMemo(() => 4 === o.answerCount ? o.gridView || r ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : r ? {
                width: 100 / o.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / o.answerCount
            }, [
                o.answerCount,
                r,
                o.gridView
            ]);
        return (0, f.jsx)(_o, {
            onClick: p,
            gridView: o.gridView,
            isOnDesktop: r,
            heightPercentage: s.height,
            widthPercentage: s.width,
            children: (0, f.jsx)(_p, {
                position: o.position,
                answerColors: o.answerColors,
                isOnDesktop: r,
                children: o.children
            })
        });
    };
    const _o = h.default.div(k || (k = m`
  text-align: center;
  height: ${ 0 }%;
  width: ${ 0 }%;
  cursor: pointer;
`), p => p.heightPercentage, p => p.widthPercentage), _p = h.default.div(l || (l = m`
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
`), q => q.answerColors[q.position].background, q => q.answerColors[q.position].text, q => q.isOnDesktop && `\n    transition: background 0.18s ease-in-out;\n    &:hover {\n      background: ${ (0, i.lighten)(0.1, q.answerColors[q.position].background) };\n    }\n  `);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, o, p, q = r => r;
    var _r = s => {
        const [t, u] = b(g).useState(''), [v, w] = b(g).useState(!0), x = () => {
                t && v && (w(!1), s.onQuestionAnswered(t));
            };
        return (0, f.jsxs)(_s, {
            children: [
                (0, f.jsx)(_t, {
                    onSubmit: y => {
                        y.preventDefault(), x();
                    },
                    children: (0, f.jsx)(_u, {
                        autoFocus: !0,
                        value: t,
                        onChange: y => {
                            u(y.target.value);
                        },
                        placeholder: 'Enter answer here...'
                    })
                }),
                (0, f.jsx)(_v, {
                    buttonColor: s.buttonColor,
                    onClick: x,
                    children: (0, f.jsx)(j.default, {
                        language: s.language,
                        translations: s.translations,
                        text: 'Submit'
                    })
                })
            ]
        });
    };
    const _s = h.default.div(m || (m = q`
  height: 100%;
  width: 100%;
`)), _t = h.default.form(n || (n = q`
  height: 55%;
  width: 100%;
`)), _u = h.default.input(o || (o = q`
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
`), k.default.DisabledGray, k.default.Black, l.default.name), _v = h.default.div(p || (p = q`
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
`), w => w.buttonColor.background, w => w.buttonColor.text, w => (0, i.lighten)(0.1, w.buttonColor.background));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = j => {
        const [k, l] = b(g).useState(j.text);
        b(g).useEffect(() => {
            j.text !== k && (l(j.text), 'en' !== j.language && (j.disableIfContains && j.text.includes(j.disableIfContains) || (j.translations && j.translations[j.text] ? l(j.translations[j.text]) : (0, h.request)({
                url: '',
                data: {
                    to: j.language,
                    text: j.text
                },
                success: m => {
                    l(m), j.translations[j.text] = m;
                }
            }))));
        }, [j.text]);
        return (0, f.jsx)(f.Fragment, {
            children: (() => {
                let m = k;
                return j.suffix && (m += j.suffix), m;
            })()
        });
    };
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
        return _g;
    });
    const f = '"Product Sans"';
    var _g = {
        mainFontName: f,
        name: `${ f }, sans-serif`,
        important: `${ f }, sans-serif !important`
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => (0, f.jsxs)(f.Fragment, {
        children: [
            l.text && (0, f.jsx)(i.default, {
                mode: 'multi',
                text: (0, j.parseText)(l.allowGoogleTranslate, l.text),
                paddingVertical: l.customTextHorizontalPadding || 7,
                paddingHorizontal: l.customTextHorizontalPadding,
                max: l.customMaxTextSize || 25,
                highlighted: l.highlighted
            }),
            l.image && (0, f.jsx)('img', {
                src: (0, g.getCloudinaryUrl)(l.image),
                alt: 'Answer Choice',
                style: {
                    maxHeight: l.customImageHeight || '90%',
                    height: l.customImageHeight || '90%',
                    maxWidth: l.customImageWidth || '90%',
                    borderRadius: 4,
                    objectFit: 'contain'
                }
            }),
            l.latex && (0, f.jsx)(i.default, {
                text: (0, f.jsx)(h.default, { latex: l.latex }),
                paddingVertical: l.customTextHorizontalPadding || 7,
                paddingHorizontal: l.customTextHorizontalPadding,
                max: l.customMaxTextSize || 25,
                noBold: !0
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = j => j.lastQuestionCorrect ? (0, f.jsx)(g.default, {
        textShownWhenAnsweringCorrectly: j.textShownWhenAnsweringCorrectly,
        customCorrectTextAnimation: j.customCorrectTextAnimation,
        onActionSound: j.onActionSound,
        language: j.language,
        translations: j.translations,
        allowGoogleTranslate: j.allowGoogleTranslate,
        continueToQuestions: j.continueToQuestions,
        actions: j.actions,
        desktopBreakpoint: j.desktopBreakpoint,
        defaultBackgroundColor: j.defaultBackgroundColor,
        correctAnswerColor: j.correctAnswerColor,
        blockKeyboardEvents: j.blockKeyboardEvents,
        canAdvanceToQuestions: j.canAdvanceToQuestions
    }) : (0, f.jsx)(h.default, {
        textShownWhenAnsweringIncorrectly: j.textShownWhenAnsweringIncorrectly,
        lastQuestion: j.lastQuestion,
        onActionSound: j.onActionSound,
        language: j.language,
        translations: j.translations,
        allowGoogleTranslate: j.allowGoogleTranslate,
        desktopBreakpoint: j.desktopBreakpoint,
        canAdvanceToQuestions: j.canAdvanceToQuestions,
        blockKeyboardEvents: j.blockKeyboardEvents,
        continueToQuestions: j.continueToQuestions,
        incorrectAnswerColor: j.incorrectAnswerColor,
        continueButtonColor: j.continueButtonColor,
        onLockedChange: j.onLockedChange
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    var _m = n => {
        g.useEffect(() => (document.addEventListener('keydown', d), () => {
            document.removeEventListener('keydown', d);
        }), [
            n.canAdvanceToQuestions,
            n.blockKeyboardEvents
        ]);
        const o = p => {
            n.blockKeyboardEvents || p.key && 'Enter' === p.key && n.canAdvanceToQuestions && n.continueToQuestions();
        };
        return (0, f.jsxs)(_n, {
            defaultBackgroundColor: n.defaultBackgroundColor,
            children: [
                (0, f.jsx)(j.default, {
                    textShownWhenAnsweringCorrectly: n.textShownWhenAnsweringCorrectly,
                    customCorrectTextAnimation: n.customCorrectTextAnimation,
                    correctAnswerColor: n.correctAnswerColor
                }),
                (0, f.jsx)(k.default, {
                    actions: n.actions,
                    language: n.language,
                    translations: n.translations,
                    desktopBreakpoint: n.desktopBreakpoint,
                    onActionSound: n.onActionSound
                })
            ]
        });
    };
    const _n = h.default.div.attrs({ className: 'flex-column maxAll' })(l || (l = (o => o)`
  color: ${ 0 };
  background: ${ 0 };
`), i.default.White, o => o.defaultBackgroundColor);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        backgroundColor: k.correctAnswerColor.background,
        children: (0, f.jsx)(h.default, {
            textShownWhenAnsweringCorrectly: k.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: k.customCorrectTextAnimation,
            textColor: k.correctAnswerColor.text
        })
    });
    const _k = g.default.div.attrs({ className: 'maxWidth flex-center' })(i || (i = (l => l)`
  height: 40%;
  background: ${ 0 };
`), l => l.backgroundColor);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    var _k = l => {
        const m = l.textColor, n = b(g).useMemo(() => l.textShownWhenAnsweringCorrectly, []);
        return (0, f.jsx)(_l, {
            style: {
                color: m,
                animationDuration: `${ l.customCorrectTextAnimation && l.customCorrectTextAnimation.duration ? l.customCorrectTextAnimation.duration : 1 }s`
            },
            className: l.customCorrectTextAnimation && l.customCorrectTextAnimation.className ? l.customCorrectTextAnimation.className : 'animated tada',
            children: (0, f.jsx)(i.default, {
                max: 170,
                mode: 'single',
                text: n
            })
        });
    };
    const _l = h.default.div.attrs({ className: 'maxAll flex-center' })(j || (j = (m => m)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    var _j = k => {
        const l = 1 / k.actions.length * 100;
        return (0, f.jsx)(_k, {
            children: k.actions.filter(m => null !== m).map(m => (0, f.jsx)(h.default, {
                ...m,
                heightPercentage: l,
                language: k.language,
                translations: k.translations,
                desktopBreakpoint: k.desktopBreakpoint,
                onActionSound: k.onActionSound
            }, m.text))
        });
    };
    const _k = g.default.div.attrs({ className: 'maxWidth' })(i || (i = (l => l)`
  height: 60%;
  text-align: center;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'GimkitLiveActionItemContainer', function () {
        return _r;
    }), a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    var _q = r => {
        const s = b(g).useRef(null), [t] = (0, o.default)(s);
        return (0, f.jsx)(j.default, {
            onClick: u => {
                (0, n.clickHandler)(u, () => {
                    var v;
                    null === (v = r.onActionSound) || void 0 === v || v.play(), r.handleClick && r.handleClick();
                });
            },
            children: (0, f.jsx)(_r, {
                ref: s,
                background: r.background,
                heightPercentage: r.heightPercentage,
                isOnDesktop: t >= r.desktopBreakpoint,
                children: (0, f.jsx)(l.default, {
                    text: (0, f.jsx)(k.default, {
                        language: r.language,
                        translations: r.translations,
                        text: r.text
                    }),
                    max: 40
                })
            })
        });
    };
    const _r = h.default.div.attrs({ className: 'flex-center maxWidth' })(p || (p = (s => s)`
  height: ${ 0 }%;
  background: ${ 0 };
  color: ${ 0 };
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${ 0 }
`), s => s.heightPercentage, s => s.background, m.default.White, s => s.isOnDesktop && `transition: background 0.15s;\n    &:hover {\n      background: ${ (0, i.lighten)(0.1, s.background) };\n    }\n\n  `);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    c('.....');
    var _g = h => (0, f.jsx)('span', {
        onClick: i => {
            h.onClick && h.onClick(i);
        },
        children: h.children
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    var r;
    (r = q || (q = {})).message = 'message', r.answer = 'answer';
    var _s = t => {
        const [u, v] = g.useState(q.message), w = g.useRef(null), [x, y] = (0, k.default)(w), z = g.useRef(null), [A, B] = (0, k.default)(z), C = g.useMemo(() => t.secondsToWaitBeforeContinue ? t.secondsToWaitBeforeContinue : 3, [t.secondsToWaitBeforeContinue]), D = g.useMemo(() => t.lastQuestion ? t.lastQuestion.answers.find(E => E.correct) : null, [t.lastQuestion]);
        (0, l.useTimeoutWhen)(() => {
            v(q.answer);
        }, t.showCorrectAnswerAfterMs || 800);
        const E = g.useMemo(() => u === q.message ? t.incorrectAnswerColor.background : (0, p.lighten)(0.2, t.incorrectAnswerColor.background), [
                u,
                t.incorrectAnswerColor.background
            ]), F = g.useMemo(() => u === q.message, [u]), G = g.useMemo(() => u === q.answer, [u]), H = g.useMemo(() => y * j.default.marginPercentage, [y]), I = g.useMemo(() => {
                const J = j.default.textHeightPercentage * y / B, K = x * j.default.maxTextWidthPercentage / A;
                return Math.min(J, K);
            }, [
                y,
                B,
                A,
                x
            ]), J = g.useMemo(() => {
                if (F)
                    return 0;
                let K = -y / 2;
                return K += B * I / 2, K += H, K;
            }, [
                F,
                y,
                I,
                B,
                H
            ]), K = g.useMemo(() => y - B * I - y * j.default.marginPercentage * 2, [
                y,
                B,
                I
            ]), L = g.useMemo(() => K - y * j.default.continueButtonHeightPercentage - H, [
                K,
                y,
                H
            ]), M = g.useMemo(() => y * j.default.continueButtonHeightPercentage, [y]);
        g.useEffect(() => (t.onLockedChange && t.onLockedChange(!0), () => {
            t.onLockedChange && t.onLockedChange(!1);
        }), [t.onLockedChange]);
        return (0, f.jsx)(h.AnimatePresence, {
            mode: 'wait',
            children: (0, f.jsx)(i.Container, {
                animate: { background: E },
                transition: { duration: 0.3 },
                ref: w,
                children: (0, f.jsxs)(i.Content, {
                    style: { color: t.incorrectAnswerColor.text },
                    children: [
                        (0, f.jsx)(i.TextContainer, {
                            style: { marginTop: J },
                            children: (0, f.jsx)(i.AnimatedText, {
                                layout: !0,
                                animate: {
                                    scale: F ? 1 : I,
                                    opacity: F ? 1 : 0.8
                                },
                                children: (0, f.jsx)(m.default, {
                                    max: 170,
                                    mode: 'single',
                                    text: (0, f.jsx)('div', {
                                        ref: z,
                                        children: t.textShownWhenAnsweringIncorrectly
                                    })
                                })
                            })
                        }),
                        G ? (0, f.jsx)(i.BottomContainer, {
                            style: {
                                marginTop: J,
                                height: K,
                                overflow: 'hidden'
                            },
                            children: (0, f.jsxs)(i.AnimatedBottomContent, {
                                children: [
                                    (0, f.jsx)(n.default, {
                                        containerWidth: x,
                                        containerHeight: y,
                                        answerBoxHeight: L,
                                        margin: H,
                                        correctAnswer: D,
                                        allowGoogleTranslate: t.allowGoogleTranslate,
                                        language: t.language,
                                        translations: t.translations
                                    }),
                                    (0, f.jsx)(o.default, {
                                        continueButtonHeight: M,
                                        containerWidth: x,
                                        secondsToWait: C,
                                        continueToQuestions: t.continueToQuestions,
                                        desktopBreakpoint: t.desktopBreakpoint,
                                        language: t.language,
                                        translations: t.translations,
                                        onActionSound: t.onActionSound,
                                        continueButtonColor: t.continueButtonColor,
                                        blockKeyboardEvents: t.blockKeyboardEvents,
                                        canAdvanceToQuestions: t.canAdvanceToQuestions,
                                        onLockedChange: t.onLockedChange
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'Container', function () {
        return _y;
    }), a(d.exports, 'Content', function () {
        return _z;
    }), a(d.exports, 'TextContainer', function () {
        return _A;
    }), a(d.exports, 'AnimatedText', function () {
        return _B;
    }), a(d.exports, 'BottomContainer', function () {
        return _C;
    }), a(d.exports, 'AnimatedBottomContent', function () {
        return _D;
    }), a(d.exports, 'AnswerBox', function () {
        return _E;
    }), a(d.exports, 'CorrectAnswerLabelContainer', function () {
        return _F;
    }), a(d.exports, 'CorrectAnswerLabel', function () {
        return _G;
    }), a(d.exports, 'AnswerContainer', function () {
        return _H;
    }), a(d.exports, 'AnswerButtonAreaContainer', function () {
        return _I;
    }), a(d.exports, 'AnswerButtonProgressBar', function () {
        return _J;
    }), a(d.exports, 'ActionButtonContainer', function () {
        return _K;
    }), a(d.exports, 'ActionButtonContent', function () {
        return _L;
    }), a(d.exports, 'ActionButtonTextFitContent', function () {
        return _M;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = y => y;
    const _y = (0, g.default)(f.motion.div).attrs({ className: 'maxAll' })(i || (i = x`
  overflow: hidden;
`)), _z = g.default.div.attrs({ className: 'maxAll animated headShake' })(j || (j = x``)), _A = g.default.div.attrs({ className: 'maxAll flex-center animated fadeIn' })(k || (k = x``)), _B = (0, g.default)(f.motion.div).attrs({ layout: !0 })(l || (l = x`
  width: 90%;
  height: 80%;
`)), _C = g.default.div.attrs({ className: 'maxWidth' })(m || (m = x`
  text-align: center;
`)), _D = (0, g.default)(f.motion.div).attrs({
            className: 'maxWidth maxHeight',
            layout: !0,
            animate: { opacity: 1 },
            transition: { delay: 0.15 },
            initial: { opacity: 0 }
        })(n || (n = x``)), _E = g.default.div.attrs({ className: 'maxAll flex flex-column' })(o || (o = x`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`)), _F = g.default.div.attrs({ className: 'maxWidth' })(p || (p = x`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`)), _G = g.default.div(q || (q = x`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${ 0 };
  font-style: italic;
`), h.FontWeights.Normal), _H = g.default.div(r || (r = x`
  flex: 1;
  overflow: hidden;
`)), _I = g.default.div.attrs({ className: 'maxWidth' })(s || (s = x`
  position: relative;
  background: gray;
`)), _J = (0, g.default)(f.motion.div).attrs({
            animate: { width: '100%' },
            initial: { width: '0%' },
            className: 'maxHeight'
        })(t || (t = x`
  position: absolute;
  top: 0;
`)), _K = g.default.div.attrs({ className: 'maxAll' })(u || (u = x`
  position: absolute;
  top: 0;
`)), _L = g.default.div.attrs({ className: 'maxAll' })(v || (v = x``)), _M = g.default.div.attrs({ className: 'flex vc' })(w || (w = x``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        textHeightPercentage: 0.08,
        maxTextWidthPercentage: 0.5,
        marginPercentage: 0.04,
        continueButtonHeightPercentage: 0.3
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k;
    const l = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        }, m = j.default.div(k || (k = (n => n)`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsxs)(i.AnswerBox, {
        style: {
            height: k.answerBoxHeight,
            marginBottom: k.margin,
            borderRadius: 10,
            marginLeft: k.margin,
            width: k.containerWidth - 2 * k.margin
        },
        children: [
            (0, f.jsx)(i.CorrectAnswerLabelContainer, {
                children: (0, f.jsxs)(i.CorrectAnswerLabel, {
                    children: [
                        (0, f.jsx)(g.default, {
                            text: 'Correct Answer',
                            language: k.language,
                            translations: k.translations
                        }),
                        ':'
                    ]
                })
            }),
            (0, f.jsx)(i.AnswerContainer, {
                style: { padding: `${ Math.max(0.1 * k.containerHeight, 30) }px ${ Math.max(0.1 * k.containerWidth, 30) }px` },
                children: (0, f.jsx)(h.default, {
                    allowGoogleTranslate: k.allowGoogleTranslate,
                    text: k.correctAnswer ? k.correctAnswer.text : 'No Correct Answer',
                    image: k.correctAnswer ? k.correctAnswer.image : void 0,
                    latex: k.correctAnswer ? k.correctAnswer.latex : void 0,
                    customTextHorizontalPadding: '0px',
                    customTextVerticalPadding: '0px',
                    customImageHeight: '100%',
                    customImageWidth: '100%',
                    customMaxTextSize: 40
                })
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    class i extends b(g).Component {
        componentDidUpdate(j) {
            j.text !== this.props.text && (this.setState({ text: this.props.text }), this.onTranslate());
        }
        componentDidMount() {
            this.onTranslate();
        }
        onTranslate() {
            if ('en' !== this.props.language && !this.props.text.includes(this.props.disableIfContains))
                return this.props.translations && this.props.translations[this.props.text] ? this.setState({ text: this.props.translations[this.props.text] }) : void this.requestTranslation().then(j => {
                    this.props.translations[this.props.text] = j, this.setState({ text: j });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'state', { text: this.props.text }), (0, f.default)(this, 'buildString', () => {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = o => {
        const [p, q] = (0, l.useBoolean)(!1), [r, s] = g.useState(o.secondsToWait), t = g.useMemo(() => o.canAdvanceToQuestions && r > 0, [
                r,
                o.canAdvanceToQuestions
            ]);
        g.useEffect(() => {
            o.onLockedChange && o.onLockedChange(t);
        }, [
            t,
            o.onLockedChange
        ]);
        const u = (0, m.default)({
                text: 'Continue',
                language: o.language,
                translations: o.translations
            }), v = g.useCallback(() => {
                t || o.continueToQuestions();
            }, [
                o.continueToQuestions,
                t
            ]), w = g.useCallback(x => {
                o.blockKeyboardEvents || x.key && 'Enter' === x.key && v();
            }, [
                o.blockKeyboardEvents,
                v
            ]);
        g.useEffect(() => (document.addEventListener('keydown', w), () => {
            document.removeEventListener('keydown', w);
        }), [w]);
        const x = g.useCallback(() => {
            var y;
            t || (null === (y = o.onActionSound) || void 0 === y || y.play(), v());
        }, [
            t,
            v,
            o.onActionSound
        ]);
        return g.useEffect(() => {
            if (p && r) {
                const y = setTimeout(() => {
                    s(r - 1);
                }, 1000);
                return () => clearTimeout(y);
            }
            return () => null;
        }, [
            p,
            r
        ]), (0, f.jsxs)(j.AnswerButtonAreaContainer, {
            style: { height: o.continueButtonHeight },
            children: [
                (0, f.jsx)(j.AnswerButtonProgressBar, {
                    style: { background: o.continueButtonColor.background },
                    transition: {
                        duration: o.secondsToWait,
                        ease: 'linear'
                    },
                    onAnimationStart: q
                }),
                (0, f.jsx)(j.ActionButtonContainer, {
                    children: (0, f.jsx)(i.GimkitLiveActionItemContainer, {
                        heightPercentage: 100,
                        isOnDesktop: o.containerWidth >= o.desktopBreakpoint,
                        background: r ? 'transparent' : o.continueButtonColor.background,
                        style: {
                            cursor: r ? 'not-allowed' : 'pointer',
                            color: o.continueButtonColor.text
                        },
                        onClick: x,
                        children: (0, f.jsx)(j.ActionButtonContent, {
                            children: (0, f.jsx)(h.default, {
                                text: (0, f.jsxs)(j.ActionButtonTextFitContent, {
                                    children: [
                                        (0, f.jsx)('div', { children: u }),
                                        (0, f.jsxs)(k.motion.div, {
                                            animate: {
                                                width: r > 0 ? 'auto' : 0,
                                                opacity: r > 0 ? 1 : 0
                                            },
                                            initial: {
                                                width: 'auto',
                                                opacity: 1
                                            },
                                            transition: {
                                                width: { duration: 0.3 },
                                                opacity: { duration: 0 }
                                            },
                                            children: [
                                                '\xA0(',
                                                Math.max(1, r),
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        const [j, k] = f.useState(i.text);
        f.useEffect(() => {
            i.text !== j && (k(i.text), 'en' !== i.language && (i.disableIfContains && i.text.includes(i.disableIfContains) || (i.translations && i.translations[i.text] ? k(i.translations[i.text]) : (0, g.request)({
                url: '',
                data: {
                    to: i.language,
                    text: i.text
                },
                success: l => {
                    k(l), i.translations[i.text] = l;
                }
            }))));
        }, [i.text]);
        return (() => {
            let l = j;
            return i.suffix && (l += i.suffix), l;
        })();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = {
        defaultBackground: '#303f9f',
        question: {
            background: '#303f9f',
            text: f.default.White
        },
        palette: [
            {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m;
    const n = (0, h.default)(j.motion.div)(m || (m = (o => o)`
  background: ${ 0 };
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`), o => o.defaultBackgroundColor);
    var _o = (0, i.observer)(p => (b(g).useEffect(() => (l.default.readToMe.canPlayAgain = !0, () => {
        l.default.readToMe.canPlayAgain = !1;
    }), []), (0, f.jsx)(n, {
        style: {
            opacity: p.opacity,
            y: p.yPosition
        },
        defaultBackgroundColor: p.defaultBackgroundColor || k.default.defaultBackground,
        children: p.children
    })));
});