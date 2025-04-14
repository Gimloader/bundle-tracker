function e(e, t, n, o) {
    Object.defineProperty(e, t, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("jcI11", (function(t, n) {
    e(t.exports, "EncryptData", (function() {
        return s
    })), e(t.exports, "DecryptData", (function() {
        return l
    }));
    const o = new Map,
        r = new Map,
        a = new Map;
    let i = 1;
    const s = (e, t) => {
            const n = (() => {
                const e = i.toString();
                return i++, e
            })();
            if (t) {
                const e = o.get(t);
                e && (a.delete(e), r.set(e, n)), o.set(t, n)
            }
            return a.set(n, e), n
        },
        l = e => {
            if (!e) return;
            const t = r.get(e);
            return t ? l(t) : a.get(e)
        }
})), n.register("r8ulO", (function(o, r) {
    e(o.exports, "default", (function() {
        return j
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("lpEVe"),
        u = n("aFq3x"),
        c = n("8XRIE"),
        d = n("6vbUb"),
        g = n("2FIWZ"),
        f = n("7U4Bk"),
        x = n("fuqSw"),
        h = n("5xS5K"),
        p = n("7GM8t"),
        m = n("4cm1i"),
        w = n("aEVgK"),
        C = n("fIWiG"),
        k = n("lmemm"),
        v = n("jcI11");
    let b, y, A, T = e => e;
    var B;
    (B = A || (A = {})).questions = "questions", B.response = "response";
    var j = (0, l.observer)((e => {
        const [n, o] = t(i).useState(!1), [r, s] = t(i).useState(A.questions), [l, d] = t(i).useState(!1), [b, y] = t(i).useState(e.ecc), [T, B] = t(i).useState(), j = (0, g.useMotionValue)("0%"), W = (0, g.useMotionValue)(1), M = (0, g.useMotionValue)(e.disableFadeInOnMount ? 1 : 0);
        t(i).useEffect((() => {
            B(e.ecc)
        }), [e.ecc]), t(i).useEffect((() => {
            b || y(e.ecc)
        }), [e.ecc]);
        const Q = t(i).useMemo((() => {
                if (b) return (0, v.DecryptData)(b)
            }), [b]),
            I = t(i).useMemo((() => {
                if (Q) return (0, v.EncryptData)(Q.answers, `${Q._id}-answers`)
            }), [Q]);
        t(i).useEffect((() => (e.onMount && e.onMount(), e.disableFadeInOnMount || (0, u.animate)(M, 1, {
            duration: .25,
            delay: .01,
            ease: "easeOut"
        }), () => {
            h.default.stop()
        })), []), t(i).useEffect((() => {
            p.default.readToMe.enabled = e.readToMeEnabled || !1, r === A.response ? h.default.stop() : r === A.questions && b && h.default.play(Q)
        }), [e.readToMeEnabled, r]);
        const P = t => {
                if (!l) {
                    e.onActionSound && e.onActionSound.play(), d(!0);
                    const n = e.onQuestionAnswered(t);
                    (0, u.animate)(j, "100%", {
                        ease: "easeIn",
                        duration: .23,
                        onComplete: () => {
                            d(!1), (t => {
                                var n, o;
                                t ? null === (n = e.correctSound) || void 0 === n || n.play() : null === (o = e.incorrectSound) || void 0 === o || o.play()
                            })(n), e.nextQuestion && e.nextQuestion(), G()
                        }
                    })
                }
            },
            G = () => {
                h.default.stop(), W.set(0), e.beforeOpenAnswerResponse && e.beforeOpenAnswerResponse(), s(A.response), (0, u.animate)(W, 1, {
                    duration: .3,
                    onUpdate: e => {
                        !n && e >= .3 * .75 && o(!0)
                    }
                })
            },
            H = () => {
                j.set("0%"), o(!1), h.default.stop(), e.continueAction && e.continueAction(), y(T), s(A.questions), M.set(0), (0, u.animate)(M, 1, {
                    duration: .2
                })
            },
            D = () => {
                var t;
                const n = {
                    background: (null == e || null === (t = e.continueButtonColor) || void 0 === t ? void 0 : t.background) || w.default.response.continue.background,
                    text: "Continue",
                    handleClick: () => {
                        H()
                    }
                };
                return e.responseActions ? [...e.responseActions, n] : [n]
            };
        return (0, a.jsx)(c.AnimatePresence, {
            mode: "wait",
            children: r === A.questions ? b ? (0, a.jsxs)(C.default, {
                opacity: M,
                yPosition: j,
                defaultBackgroundColor: e.defaultBackgroundColor || w.default.defaultBackground,
                children: [(0, a.jsx)(E, {
                    questionColor: e.questionColor || w.default.question,
                    children: (0, a.jsx)(f.default, {
                        text: null == Q ? void 0 : Q.text,
                        image: null == Q ? void 0 : Q.image,
                        audio: null == Q ? void 0 : Q.audio,
                        latex: null == Q ? void 0 : Q.latex,
                        allowGoogleTranslate: e.allowGoogleTranslate
                    })
                }), (0, a.jsx)(x.default, {
                    onQuestionAnswered: P,
                    eas: I,
                    type: (null == Q ? void 0 : Q.type) || k.QuestionType.multipleChoice,
                    blockKeyboardEvent: e.blockKeyboardEvents || !1,
                    allowGoogleTranslate: e.allowGoogleTranslate || !1,
                    language: e.language || "en",
                    translations: e.translations || {},
                    answerColors: e.answerColors || w.default.palette,
                    desktopBreakpoint: e.desktopBreakpoint || w.default.desktopBreakpoint,
                    defaultBackgroundColor: e.defaultBackgroundColor || w.default.defaultBackground,
                    textInputButtonColor: e.textInputButtonColor || w.default.palette[2]
                })]
            }) : e.noQuestionContent || null : (0, a.jsx)(S, {
                style: {
                    opacity: W
                },
                children: (0, a.jsx)(m.default, {
                    canAdvanceToQuestions: n,
                    correctAnswer: e.lastQuestionCorrectAnswer,
                    continueToQuestions: H,
                    blockKeyboardEvents: e.blockKeyboardEvents,
                    lastQuestionCorrect: e.lastQuestionAnsweredCorrect || !1,
                    actions: D(),
                    lastQuestion: e.lastQuestion,
                    allowGoogleTranslate: e.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: e.textShownWhenAnsweringCorrectly || "Correct!",
                    textShownWhenAnsweringIncorrectly: e.textShownWhenAnsweringIncorrectly || "Incorrect!",
                    customCorrectTextAnimation: e.customCorrectTextAnimation,
                    language: e.language || "en",
                    translations: e.translations || {},
                    desktopBreakpoint: e.desktopBreakpoint || w.default.desktopBreakpoint,
                    defaultBackgroundColor: e.defaultBackgroundColor || w.default.defaultBackground,
                    correctAnswerColor: e.correctAnswerColor || w.default.response.correctAnswer,
                    incorrectAnswerColor: e.incorrectAnswerColor || w.default.response.incorrectAnswer,
                    continueButtonColor: e.continueButtonColor || w.default.response.continue,
                    onActionSound: e.onActionSound,
                    onLockedChange: e.onLockedChange
                })
            })
        })
    }));
    const E = s.default.div(b || (b = T`
  color: ${0};
  height: 35%;
  background-color: ${0};
`), (e => e.questionColor.text), (e => e.questionColor.background)),
        S = (0, s.default)(d.motion.div)(y || (y = T`
  width: 100%;
  height: 100%;
  will-change: opacity;
`))
})), n.register("7U4Bk", (function(t, o) {
    e(t.exports, "default", (function() {
        return x
    }));
    var r = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("lpEVe"),
        l = n("exv1w"),
        u = n("5fdt2"),
        c = n("Xyj21"),
        d = n("d0edw");
    let g;
    const f = i.default.div(g || (g = (e => e)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`));
    var x = (0, s.observer)((e => {
        const {
            readToMe: t
        } = a.useContext(d.default), {
            text: n,
            image: o,
            audio: i,
            latex: s
        } = e;
        return (0, r.jsx)(f, {
            children: n ? o || i || s ? (0, r.jsx)(c.default, {
                text: n,
                image: o,
                latex: s,
                audio: i,
                highlighted: t.currentlyPlayingQuestionText,
                allowGoogleTranslate: e.allowGoogleTranslate || !1
            }) : (0, r.jsx)(u.default, {
                text: n,
                highlighted: t.currentlyPlayingQuestionText,
                allowGoogleTranslate: e.allowGoogleTranslate
            }) : (0, r.jsx)(l.default, {
                image: o,
                latex: s,
                audio: i
            })
        })
    }))
})), n.register("d0edw", (function(o, r) {
    e(o.exports, "default", (function() {
        return s
    }));
    var a = n("fywoC"),
        i = n("7GM8t");
    var s = t(a).createContext(i.default)
})), n.register("fuqSw", (function(o, r) {
    e(o.exports, "default", (function() {
        return k
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("lpEVe"),
        u = n("8mXhq"),
        c = n("6flB2"),
        d = n("lIIO5"),
        g = n("7GM8t"),
        f = n("d0edw"),
        x = n("56tQE"),
        h = n("lmemm"),
        p = n("jcI11"),
        m = n("cmvpZ");
    let w;
    const C = [49, 50, 51, 52];
    var k = (0, l.observer)((e => {
        const [n, o] = t(i).useState(!0), [r, s] = t(i).useState(), {
            readToMe: l
        } = t(i).useContext(f.default), w = t(i).useRef(null), [k] = (0, x.default)(w), b = t(i).useMemo((() => (0, m.take)((0, p.DecryptData)(e.eas), 4)), []);
        if (t(i).useEffect((() => {
                r && e.onQuestionAnswered(r)
            }), [r]), e.type === h.QuestionType.textInput) return (0, a.jsx)(v, {
            defaultBackgroundColor: e.defaultBackgroundColor,
            children: (0, a.jsx)(c.default, {
                language: e.language,
                translations: e.translations,
                onQuestionAnswered: e.onQuestionAnswered,
                buttonColor: e.textInputButtonColor
            })
        });
        const y = b.some((e => !(!e || !e.image))),
            A = e => {
                o(!1), s(e)
            };
        return (0, a.jsx)(v, {
            ref: w,
            defaultBackgroundColor: e.defaultBackgroundColor,
            children: b.map(((t, o) => (0, a.jsx)(u.default, {
                id: t._id,
                position: o,
                canAnswer: n,
                keyCode: C[o],
                gridView: y,
                onQuestionAnswered: A,
                answer: t._id,
                blockKeyboardEvent: e.blockKeyboardEvent,
                answerColors: e.answerColors,
                containerWidth: k,
                desktopBreakpoint: e.desktopBreakpoint,
                answerCount: b.length,
                children: (0, a.jsx)(d.default, {
                    allowGoogleTranslate: e.allowGoogleTranslate,
                    text: t.text,
                    image: t.image,
                    latex: t.latex,
                    highlighted: l.currentlyPlayingAnswerAudio && o === g.default.readToMe.answerIndex
                })
            }, o)))
        })
    }));
    const v = s.default.div(w || (w = (e => e)`
  background: ${0};
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`), (e => e.defaultBackgroundColor))
})), n.register("8mXhq", (function(o, r) {
    e(o.exports, "default", (function() {
        return f
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("6edaj"),
        u = n("i08pn");
    let c, d, g = e => e;
    var f = e => {
        t(i).useEffect((() => (document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o))), []);
        const n = t => {
                if (!e.canAnswer) return;
                (0, u.clickHandler)(t, (() => {
                    e.onQuestionAnswered(e.answer)
                }))
            },
            o = t => {
                if (e.blockKeyboardEvent) return;
                const {
                    keyCode: o
                } = t;
                o === e.keyCode && n(t)
            },
            r = e.containerWidth >= e.desktopBreakpoint,
            s = t(i).useMemo((() => 4 === e.answerCount ? e.gridView || r ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : r ? {
                width: 100 / e.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / e.answerCount
            }), [e.answerCount, r, e.gridView]);
        return (0, a.jsx)(x, {
            onClick: n,
            gridView: e.gridView,
            isOnDesktop: r,
            heightPercentage: s.height,
            widthPercentage: s.width,
            children: (0, a.jsx)(h, {
                position: e.position,
                answerColors: e.answerColors,
                isOnDesktop: r,
                children: e.children
            })
        })
    };
    const x = s.default.div(c || (c = g`
  text-align: center;
  height: ${0}%;
  width: ${0}%;
  cursor: pointer;
`), (e => e.heightPercentage), (e => e.widthPercentage)),
        h = s.default.div(d || (d = g`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${0};
  color: ${0};
  opacity: 1;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  ${0}
`), (e => e.answerColors[e.position].background), (e => e.answerColors[e.position].text), (e => e.isOnDesktop && `\n    transition: background 0.18s ease-in-out;\n    &:hover {\n      background: ${(0,l.lighten)(.1,e.answerColors[e.position].background)};\n    }\n  `))
})), n.register("6flB2", (function(o, r) {
    e(o.exports, "default", (function() {
        return m
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("6edaj"),
        u = n("5QTQt"),
        c = n("lzs7h"),
        d = n("VKFn8");
    let g, f, x, h, p = e => e;
    var m = e => {
        const [n, o] = t(i).useState(""), [r, s] = t(i).useState(!0), l = () => {
            n && r && (s(!1), e.onQuestionAnswered(n))
        };
        return (0, a.jsxs)(w, {
            children: [(0, a.jsx)(C, {
                onSubmit: e => {
                    e.preventDefault(), l()
                },
                children: (0, a.jsx)(k, {
                    autoFocus: !0,
                    value: n,
                    onChange: e => {
                        o(e.target.value)
                    },
                    placeholder: "Enter answer here..."
                })
            }), (0, a.jsx)(v, {
                buttonColor: e.buttonColor,
                onClick: l,
                children: (0, a.jsx)(u.default, {
                    language: e.language,
                    translations: e.translations,
                    text: "Submit"
                })
            })]
        })
    };
    const w = s.default.div(g || (g = p`
  height: 100%;
  width: 100%;
`)),
        C = s.default.form(f || (f = p`
  height: 55%;
  width: 100%;
`)),
        k = s.default.input(x || (x = p`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 27px;
  border-style: solid;
  border-color: ${0};
  color: ${0};
  border-width: 6px;
  font-family: ${0};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`), c.default.DisabledGray, c.default.Black, d.default.name),
        v = s.default.div(h || (h = p`
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  transition: background 0.18s ease-in-out;
  height: 45%;
  background: ${0};
  color: ${0};
  &:hover {
    background: ${0};
  }
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (e => e.buttonColor.background), (e => e.buttonColor.text), (e => (0, l.lighten)(.1, e.buttonColor.background)))
})), n.register("5QTQt", (function(o, r) {
    e(o.exports, "default", (function() {
        return l
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("iMOcM");
    var l = e => {
        const [n, o] = t(i).useState(e.text);
        t(i).useEffect((() => {
            e.text !== n && (o(e.text), "en" !== e.language && (e.disableIfContains && e.text.includes(e.disableIfContains) || (e.translations && e.translations[e.text] ? o(e.translations[e.text]) : (0, s.request)({
                url: "",
                data: {
                    to: e.language,
                    text: e.text
                },
                success: t => {
                    o(t), e.translations[e.text] = t
                }
            }))))
        }), [e.text]);
        return (0, a.jsx)(a.Fragment, {
            children: (() => {
                let t = n;
                return e.suffix && (t += e.suffix), t
            })()
        })
    }
})), n.register("lzs7h", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), n.register("VKFn8", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    const o = '"Product Sans"';
    var r = {
        mainFontName: o,
        name: `${o}, sans-serif`,
        important: `${o}, sans-serif !important`
    }
})), n.register("lIIO5", (function(t, o) {
    e(t.exports, "default", (function() {
        return u
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = n("1djzF"),
        i = n("fgoFz"),
        s = n("3W7rN"),
        l = n("i08pn");
    var u = e => (0, r.jsxs)(r.Fragment, {
        children: [e.text && (0, r.jsx)(s.default, {
            mode: "multi",
            text: (0, l.parseText)(e.allowGoogleTranslate, e.text),
            paddingVertical: e.customTextHorizontalPadding || 7,
            paddingHorizontal: e.customTextHorizontalPadding,
            max: e.customMaxTextSize || 25,
            highlighted: e.highlighted
        }), e.image && (0, r.jsx)("img", {
            src: (0, a.getCloudinaryUrl)(e.image),
            alt: "Answer Choice",
            style: {
                maxHeight: e.customImageHeight || "90%",
                height: e.customImageHeight || "90%",
                maxWidth: e.customImageWidth || "90%",
                borderRadius: 4,
                objectFit: "contain"
            }
        }), e.latex && (0, r.jsx)(s.default, {
            text: (0, r.jsx)(i.default, {
                latex: e.latex
            }),
            paddingVertical: e.customTextHorizontalPadding || 7,
            paddingHorizontal: e.customTextHorizontalPadding,
            max: e.customMaxTextSize || 25,
            noBold: !0
        })]
    })
})), n.register("4cm1i", (function(t, o) {
    e(t.exports, "default", (function() {
        return s
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = n("cB5iH"),
        i = n("brdnP");
    var s = e => e.lastQuestionCorrect ? (0, r.jsx)(a.default, {
        textShownWhenAnsweringCorrectly: e.textShownWhenAnsweringCorrectly,
        customCorrectTextAnimation: e.customCorrectTextAnimation,
        onActionSound: e.onActionSound,
        language: e.language,
        translations: e.translations,
        allowGoogleTranslate: e.allowGoogleTranslate,
        continueToQuestions: e.continueToQuestions,
        actions: e.actions,
        desktopBreakpoint: e.desktopBreakpoint,
        defaultBackgroundColor: e.defaultBackgroundColor,
        correctAnswerColor: e.correctAnswerColor,
        blockKeyboardEvents: e.blockKeyboardEvents,
        canAdvanceToQuestions: e.canAdvanceToQuestions
    }) : (0, r.jsx)(i.default, {
        textShownWhenAnsweringIncorrectly: e.textShownWhenAnsweringIncorrectly,
        lastQuestion: e.lastQuestion,
        onActionSound: e.onActionSound,
        language: e.language,
        translations: e.translations,
        allowGoogleTranslate: e.allowGoogleTranslate,
        desktopBreakpoint: e.desktopBreakpoint,
        canAdvanceToQuestions: e.canAdvanceToQuestions,
        blockKeyboardEvents: e.blockKeyboardEvents,
        continueToQuestions: e.continueToQuestions,
        incorrectAnswerColor: e.incorrectAnswerColor,
        continueButtonColor: e.continueButtonColor,
        onLockedChange: e.onLockedChange
    })
})), n.register("cB5iH", (function(t, o) {
    e(t.exports, "default", (function() {
        return d
    }));
    var r = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("lzs7h"),
        l = n("mkYi3"),
        u = n("jxH1Y");
    let c;
    var d = e => {
        a.useEffect((() => (document.addEventListener("keydown", t), () => {
            document.removeEventListener("keydown", t)
        })), [e.canAdvanceToQuestions, e.blockKeyboardEvents]);
        const t = t => {
            e.blockKeyboardEvents || t.key && "Enter" === t.key && e.canAdvanceToQuestions && e.continueToQuestions()
        };
        return (0, r.jsxs)(g, {
            defaultBackgroundColor: e.defaultBackgroundColor,
            children: [(0, r.jsx)(l.default, {
                textShownWhenAnsweringCorrectly: e.textShownWhenAnsweringCorrectly,
                customCorrectTextAnimation: e.customCorrectTextAnimation,
                correctAnswerColor: e.correctAnswerColor
            }), (0, r.jsx)(u.default, {
                actions: e.actions,
                language: e.language,
                translations: e.translations,
                desktopBreakpoint: e.desktopBreakpoint,
                onActionSound: e.onActionSound
            })]
        })
    };
    const g = i.default.div.attrs({
        className: "flex-column maxAll"
    })(c || (c = (e => e)`
  color: ${0};
  background: ${0};
`), s.default.White, (e => e.defaultBackgroundColor))
})), n.register("mkYi3", (function(t, o) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("2uZqa");
    let s;
    var l = e => (0, r.jsx)(u, {
        backgroundColor: e.correctAnswerColor.background,
        children: (0, r.jsx)(i.default, {
            textShownWhenAnsweringCorrectly: e.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: e.customCorrectTextAnimation,
            textColor: e.correctAnswerColor.text
        })
    });
    const u = a.default.div.attrs({
        className: "maxWidth flex-center"
    })(s || (s = (e => e)`
  height: 40%;
  background: ${0};
`), (e => e.backgroundColor))
})), n.register("2uZqa", (function(o, r) {
    e(o.exports, "default", (function() {
        return c
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("3W7rN");
    let u;
    var c = e => {
        const n = e.textColor,
            o = t(i).useMemo((() => e.textShownWhenAnsweringCorrectly), []);
        return (0, a.jsx)(d, {
            style: {
                color: n,
                animationDuration: `${e.customCorrectTextAnimation&&e.customCorrectTextAnimation.duration?e.customCorrectTextAnimation.duration:1}s`
            },
            className: e.customCorrectTextAnimation && e.customCorrectTextAnimation.className ? e.customCorrectTextAnimation.className : "animated tada",
            children: (0, a.jsx)(l.default, {
                max: 170,
                mode: "single",
                text: o
            })
        })
    };
    const d = s.default.div.attrs({
        className: "maxAll flex-center"
    })(u || (u = (e => e)``))
})), n.register("jxH1Y", (function(t, o) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("5U80v");
    let s;
    var l = e => {
        const t = 1 / e.actions.length * 100;
        return (0, r.jsx)(u, {
            children: e.actions.filter((e => null !== e)).map((n => (0, r.jsx)(i.default, {
                ...n,
                heightPercentage: t,
                language: e.language,
                translations: e.translations,
                desktopBreakpoint: e.desktopBreakpoint,
                onActionSound: e.onActionSound
            }, n.text)))
        })
    };
    const u = a.default.div.attrs({
        className: "maxWidth"
    })(s || (s = (e => e)`
  height: 60%;
  text-align: center;
`))
})), n.register("5U80v", (function(o, r) {
    e(o.exports, "GimkitLiveActionItemContainer", (function() {
        return m
    })), e(o.exports, "default", (function() {
        return p
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("6edaj"),
        u = n("aJKKF"),
        c = n("5QTQt"),
        d = n("3W7rN"),
        g = n("lzs7h"),
        f = n("i08pn"),
        x = n("56tQE");
    let h;
    var p = e => {
        const n = t(i).useRef(null),
            [o] = (0, x.default)(n);
        return (0, a.jsx)(u.default, {
            onClick: t => {
                (0, f.clickHandler)(t, (() => {
                    var t;
                    null === (t = e.onActionSound) || void 0 === t || t.play(), e.handleClick && e.handleClick()
                }))
            },
            children: (0, a.jsx)(m, {
                ref: n,
                background: e.background,
                heightPercentage: e.heightPercentage,
                isOnDesktop: o >= e.desktopBreakpoint,
                children: (0, a.jsx)(d.default, {
                    text: (0, a.jsx)(c.default, {
                        language: e.language,
                        translations: e.translations,
                        text: e.text
                    }),
                    max: 40
                })
            })
        })
    };
    const m = s.default.div.attrs({
        className: "flex-center maxWidth"
    })(h || (h = (e => e)`
  height: ${0}%;
  background: ${0};
  color: ${0};
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${0}
`), (e => e.heightPercentage), (e => e.background), g.default.White, (e => e.isOnDesktop && `transition: background 0.15s;\n    &:hover {\n      background: ${(0,l.lighten)(.1,e.background)};\n    }\n\n  `))
})), n.register("aJKKF", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = e => (0, r.jsx)("span", {
        onClick: t => {
            e.onClick && e.onClick(t)
        },
        children: e.children
    })
})), n.register("brdnP", (function(t, o) {
    e(t.exports, "default", (function() {
        return m
    }));
    var r = n("hxEiv"),
        a = n("fywoC"),
        i = n("8XRIE"),
        s = n("1IhIX"),
        l = n("iHrNC"),
        u = n("56tQE"),
        c = n("dSRU0"),
        d = n("fgUFi"),
        g = n("k3bAY"),
        f = n("4QsqG"),
        x = n("6edaj");
    let h;
    var p;
    (p = h || (h = {})).message = "message", p.answer = "answer";
    var m = e => {
        const [t, n] = a.useState(h.message), o = a.useRef(null), [p, m] = (0, u.default)(o), w = a.useRef(null), [C, k] = (0, u.default)(w), v = a.useMemo((() => e.secondsToWaitBeforeContinue ? e.secondsToWaitBeforeContinue : 3), [e.secondsToWaitBeforeContinue]), b = a.useMemo((() => e.lastQuestion ? e.lastQuestion.answers.find((e => e.correct)) : null), [e.lastQuestion]);
        (0, c.useTimeoutWhen)((() => {
            n(h.answer)
        }), e.showCorrectAnswerAfterMs || 800);
        const y = a.useMemo((() => t === h.message ? e.incorrectAnswerColor.background : (0, x.lighten)(.2, e.incorrectAnswerColor.background)), [t, e.incorrectAnswerColor.background]),
            A = a.useMemo((() => t === h.message), [t]),
            T = a.useMemo((() => t === h.answer), [t]),
            B = a.useMemo((() => m * l.default.marginPercentage), [m]),
            j = a.useMemo((() => {
                const e = l.default.textHeightPercentage * m / k,
                    t = p * l.default.maxTextWidthPercentage / C;
                return Math.min(e, t)
            }), [m, k, C, p]),
            E = a.useMemo((() => {
                if (A) return 0;
                let e = -m / 2;
                return e += k * j / 2, e += B, e
            }), [A, m, j, k, B]),
            S = a.useMemo((() => m - k * j - m * l.default.marginPercentage * 2), [m, k, j]),
            W = a.useMemo((() => S - m * l.default.continueButtonHeightPercentage - B), [S, m, B]),
            M = a.useMemo((() => m * l.default.continueButtonHeightPercentage), [m]);
        a.useEffect((() => (e.onLockedChange && e.onLockedChange(!0), () => {
            e.onLockedChange && e.onLockedChange(!1)
        })), [e.onLockedChange]);
        return (0, r.jsx)(i.AnimatePresence, {
            mode: "wait",
            children: (0, r.jsx)(s.Container, {
                animate: {
                    background: y
                },
                transition: {
                    duration: .3
                },
                ref: o,
                children: (0, r.jsxs)(s.Content, {
                    style: {
                        color: e.incorrectAnswerColor.text
                    },
                    children: [(0, r.jsx)(s.TextContainer, {
                        style: {
                            marginTop: E
                        },
                        children: (0, r.jsx)(s.AnimatedText, {
                            layout: !0,
                            animate: {
                                scale: A ? 1 : j,
                                opacity: A ? 1 : .8
                            },
                            children: (0, r.jsx)(d.default, {
                                max: 170,
                                mode: "single",
                                text: (0, r.jsx)("div", {
                                    ref: w,
                                    children: e.textShownWhenAnsweringIncorrectly
                                })
                            })
                        })
                    }), T ? (0, r.jsx)(s.BottomContainer, {
                        style: {
                            marginTop: E,
                            height: S,
                            overflow: "hidden"
                        },
                        children: (0, r.jsxs)(s.AnimatedBottomContent, {
                            children: [(0, r.jsx)(g.default, {
                                containerWidth: p,
                                containerHeight: m,
                                answerBoxHeight: W,
                                margin: B,
                                correctAnswer: b,
                                allowGoogleTranslate: e.allowGoogleTranslate,
                                language: e.language,
                                translations: e.translations
                            }), (0, r.jsx)(f.default, {
                                continueButtonHeight: M,
                                containerWidth: p,
                                secondsToWait: v,
                                continueToQuestions: e.continueToQuestions,
                                desktopBreakpoint: e.desktopBreakpoint,
                                language: e.language,
                                translations: e.translations,
                                onActionSound: e.onActionSound,
                                continueButtonColor: e.continueButtonColor,
                                blockKeyboardEvents: e.blockKeyboardEvents,
                                canAdvanceToQuestions: e.canAdvanceToQuestions,
                                onLockedChange: e.onLockedChange
                            })]
                        })
                    }) : null]
                })
            })
        })
    }
})), n.register("1IhIX", (function(t, o) {
    e(t.exports, "Container", (function() {
        return y
    })), e(t.exports, "Content", (function() {
        return A
    })), e(t.exports, "TextContainer", (function() {
        return T
    })), e(t.exports, "AnimatedText", (function() {
        return B
    })), e(t.exports, "BottomContainer", (function() {
        return j
    })), e(t.exports, "AnimatedBottomContent", (function() {
        return E
    })), e(t.exports, "AnswerBox", (function() {
        return S
    })), e(t.exports, "CorrectAnswerLabelContainer", (function() {
        return W
    })), e(t.exports, "CorrectAnswerLabel", (function() {
        return M
    })), e(t.exports, "AnswerContainer", (function() {
        return Q
    })), e(t.exports, "AnswerButtonAreaContainer", (function() {
        return I
    })), e(t.exports, "AnswerButtonProgressBar", (function() {
        return P
    })), e(t.exports, "ActionButtonContainer", (function() {
        return G
    })), e(t.exports, "ActionButtonContent", (function() {
        return H
    })), e(t.exports, "ActionButtonTextFitContent", (function() {
        return D
    }));
    var r = n("6vbUb"),
        a = n("2FDaO"),
        i = n("69SUA");
    let s, l, u, c, d, g, f, x, h, p, m, w, C, k, v, b = e => e;
    const y = (0, a.default)(r.motion.div).attrs({
            className: "maxAll"
        })(s || (s = b`
  overflow: hidden;
`)),
        A = a.default.div.attrs({
            className: "maxAll animated headShake"
        })(l || (l = b``)),
        T = a.default.div.attrs({
            className: "maxAll flex-center animated fadeIn"
        })(u || (u = b``)),
        B = (0, a.default)(r.motion.div).attrs({
            layout: !0
        })(c || (c = b`
  width: 90%;
  height: 80%;
`)),
        j = a.default.div.attrs({
            className: "maxWidth"
        })(d || (d = b`
  text-align: center;
`)),
        E = (0, a.default)(r.motion.div).attrs({
            className: "maxWidth maxHeight",
            layout: !0,
            animate: {
                opacity: 1
            },
            transition: {
                delay: .15
            },
            initial: {
                opacity: 0
            }
        })(g || (g = b``)),
        S = a.default.div.attrs({
            className: "maxAll flex flex-column"
        })(f || (f = b`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`)),
        W = a.default.div.attrs({
            className: "maxWidth"
        })(x || (x = b`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`)),
        M = a.default.div(h || (h = b`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${0};
  font-style: italic;
`), i.FontWeights.Normal),
        Q = a.default.div(p || (p = b`
  flex: 1;
  overflow: hidden;
`)),
        I = a.default.div.attrs({
            className: "maxWidth"
        })(m || (m = b`
  position: relative;
  background: gray;
`)),
        P = (0, a.default)(r.motion.div).attrs({
            animate: {
                width: "100%"
            },
            initial: {
                width: "0%"
            },
            className: "maxHeight"
        })(w || (w = b`
  position: absolute;
  top: 0;
`)),
        G = a.default.div.attrs({
            className: "maxAll"
        })(C || (C = b`
  position: absolute;
  top: 0;
`)),
        H = a.default.div.attrs({
            className: "maxAll"
        })(k || (k = b``)),
        D = a.default.div.attrs({
            className: "flex vc"
        })(v || (v = b``))
})), n.register("iHrNC", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        textHeightPercentage: .08,
        maxTextWidthPercentage: .5,
        marginPercentage: .04,
        continueButtonHeightPercentage: .3
    }
})), n.register("fgUFi", (function(o, r) {
    e(o.exports, "default", (function() {
        return x
    }));
    var a = n("divCp"),
        i = n("hxEiv"),
        s = n("fywoC"),
        l = n("cHX3f"),
        u = n("2FDaO");
    let c;
    const d = {
            backgroundColor: "rgba(255,255,31, 0.21)",
            boxShadow: "10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)",
            borderRadius: 9
        },
        g = u.default.div(c || (c = (e => e)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class f extends t(s).Component {
        render() {
            const {
                paddingHorizontal: e,
                paddingVertical: t,
                ...n
            } = this.props;
            return delete n.text, delete n.highlighted, (0, i.jsx)(g, {
                className: this.props.customClass,
                style: this.props.customStyle,
                children: (0, i.jsx)(l.Textfit, {
                    style: {
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: this.props.disableHorizontalCentering ? "flex-start" : "center",
                        alignItems: "center",
                        paddingTop: t,
                        paddingBottom: t,
                        paddingLeft: this.props.paddingLeft || e,
                        paddingRight: e,
                        boxSizing: "border-box",
                        fontWeight: this.props.noBold ? "normal" : 900
                    },
                    ...n,
                    children: (0, i.jsx)("div", {
                        style: this.props.highlighted ? d : void 0,
                        children: this.props.text
                    })
                })
            })
        }
    }(0, a.default)(f, "defaultProps", {
        paddingHorizontal: "6%",
        paddingVertical: 15,
        max: 50,
        mode: "single",
        forceSingleModeWidth: !1
    });
    var x = f
})), n.register("k3bAY", (function(t, o) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = n("hxEiv");
    n("fywoC");
    var a = n("aReMA"),
        i = n("lIIO5"),
        s = n("1IhIX");
    var l = e => (0, r.jsxs)(s.AnswerBox, {
        style: {
            height: e.answerBoxHeight,
            marginBottom: e.margin,
            borderRadius: 10,
            marginLeft: e.margin,
            width: e.containerWidth - 2 * e.margin
        },
        children: [(0, r.jsx)(s.CorrectAnswerLabelContainer, {
            children: (0, r.jsxs)(s.CorrectAnswerLabel, {
                children: [(0, r.jsx)(a.default, {
                    text: "Correct Answer",
                    language: e.language,
                    translations: e.translations
                }), ":"]
            })
        }), (0, r.jsx)(s.AnswerContainer, {
            style: {
                padding: `${Math.max(.1*e.containerHeight,30)}px ${Math.max(.1*e.containerWidth,30)}px`
            },
            children: (0, r.jsx)(i.default, {
                allowGoogleTranslate: e.allowGoogleTranslate,
                text: e.correctAnswer ? e.correctAnswer.text : "No Correct Answer",
                image: e.correctAnswer ? e.correctAnswer.image : void 0,
                latex: e.correctAnswer ? e.correctAnswer.latex : void 0,
                customTextHorizontalPadding: "0px",
                customTextVerticalPadding: "0px",
                customImageHeight: "100%",
                customImageWidth: "100%",
                customMaxTextSize: 40
            })
        })]
    })
})), n.register("aReMA", (function(o, r) {
    e(o.exports, "default", (function() {
        return u
    }));
    var a = n("divCp"),
        i = n("fywoC"),
        s = n("bBunw");
    class l extends t(i).Component {
        componentDidUpdate(e) {
            e.text !== this.props.text && (this.setState({
                text: this.props.text
            }), this.onTranslate())
        }
        componentDidMount() {
            this.onTranslate()
        }
        onTranslate() {
            if ("en" !== this.props.language && !this.props.text.includes(this.props.disableIfContains)) return this.props.translations && this.props.translations[this.props.text] ? this.setState({
                text: this.props.translations[this.props.text]
            }) : void this.requestTranslation().then((e => {
                this.props.translations[this.props.text] = e, this.setState({
                    text: e
                })
            })).catch()
        }
        render() {
            return this.buildString()
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                text: this.props.text
            }), (0, a.default)(this, "buildString", (() => {
                let e = this.state.text;
                return this.props.suffix && (e += this.props.suffix), e
            })), (0, a.default)(this, "requestTranslation", (async () => {
                try {
                    return (await s.default.post("/api/translate", {
                        to: this.props.language,
                        text: this.props.text
                    })).data
                } catch (e) {
                    return this.props.text
                }
            }))
        }
    }
    var u = l
})), n.register("4QsqG", (function(t, o) {
    e(t.exports, "default", (function() {
        return g
    }));
    var r = n("hxEiv"),
        a = n("fywoC"),
        i = n("fgUFi"),
        s = n("5U80v"),
        l = n("1IhIX"),
        u = n("6vbUb"),
        c = n("iMOcM"),
        d = n("iqx1c");
    var g = e => {
        const [t, n] = (0, c.useBoolean)(!1), [o, g] = a.useState(e.secondsToWait), f = a.useMemo((() => e.canAdvanceToQuestions && o > 0), [o, e.canAdvanceToQuestions]);
        a.useEffect((() => {
            e.onLockedChange && e.onLockedChange(f)
        }), [f, e.onLockedChange]);
        const x = (0, d.default)({
                text: "Continue",
                language: e.language,
                translations: e.translations
            }),
            h = a.useCallback((() => {
                f || e.continueToQuestions()
            }), [e.continueToQuestions, f]),
            p = a.useCallback((t => {
                e.blockKeyboardEvents || t.key && "Enter" === t.key && h()
            }), [e.blockKeyboardEvents, h]);
        a.useEffect((() => (document.addEventListener("keydown", p), () => {
            document.removeEventListener("keydown", p)
        })), [p]);
        const m = a.useCallback((() => {
            var t;
            f || (null === (t = e.onActionSound) || void 0 === t || t.play(), h())
        }), [f, h, e.onActionSound]);
        return a.useEffect((() => {
            if (t && o) {
                const e = setTimeout((() => {
                    g(o - 1)
                }), 1e3);
                return () => clearTimeout(e)
            }
            return () => null
        }), [t, o]), (0, r.jsxs)(l.AnswerButtonAreaContainer, {
            style: {
                height: e.continueButtonHeight
            },
            children: [(0, r.jsx)(l.AnswerButtonProgressBar, {
                style: {
                    background: e.continueButtonColor.background
                },
                transition: {
                    duration: e.secondsToWait,
                    ease: "linear"
                },
                onAnimationStart: n
            }), (0, r.jsx)(l.ActionButtonContainer, {
                children: (0, r.jsx)(s.GimkitLiveActionItemContainer, {
                    heightPercentage: 100,
                    isOnDesktop: e.containerWidth >= e.desktopBreakpoint,
                    background: o ? "transparent" : e.continueButtonColor.background,
                    style: {
                        cursor: o ? "not-allowed" : "pointer",
                        color: e.continueButtonColor.text
                    },
                    onClick: m,
                    children: (0, r.jsx)(l.ActionButtonContent, {
                        children: (0, r.jsx)(i.default, {
                            text: (0, r.jsxs)(l.ActionButtonTextFitContent, {
                                children: [(0, r.jsx)("div", {
                                    children: x
                                }), (0, r.jsxs)(u.motion.div, {
                                    animate: {
                                        width: o > 0 ? "auto" : 0,
                                        opacity: o > 0 ? 1 : 0
                                    },
                                    initial: {
                                        width: "auto",
                                        opacity: 1
                                    },
                                    transition: {
                                        width: {
                                            duration: .3
                                        },
                                        opacity: {
                                            duration: 0
                                        }
                                    },
                                    children: [" (", Math.max(1, o), "s)"]
                                })]
                            }),
                            max: 40
                        })
                    })
                })
            })]
        })
    }
})), n.register("iqx1c", (function(t, o) {
    e(t.exports, "default", (function() {
        return i
    }));
    var r = n("fywoC"),
        a = n("iMOcM");
    var i = e => {
        const [t, n] = r.useState(e.text);
        r.useEffect((() => {
            e.text !== t && (n(e.text), "en" !== e.language && (e.disableIfContains && e.text.includes(e.disableIfContains) || (e.translations && e.translations[e.text] ? n(e.translations[e.text]) : (0, a.request)({
                url: "",
                data: {
                    to: e.language,
                    text: e.text
                },
                success: t => {
                    n(t), e.translations[e.text] = t
                }
            }))))
        }), [e.text]);
        return (() => {
            let n = t;
            return e.suffix && (n += e.suffix), n
        })()
    }
})), n.register("aEVgK", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = n("lzs7h");
    var a = {
        defaultBackground: "#303f9f",
        question: {
            background: "#303f9f",
            text: r.default.White
        },
        palette: [{
            background: "#771322",
            text: r.default.White
        }, {
            background: "#A85C15",
            text: r.default.White
        }, {
            background: "#0D6B33",
            text: r.default.White
        }, {
            background: "#076296",
            text: r.default.White
        }],
        response: {
            correctAnswer: {
                background: "#388E3C",
                text: r.default.White
            },
            incorrectAnswer: {
                background: "#B71C1C",
                text: r.default.White
            },
            shop: {
                background: "#311B92",
                text: r.default.White
            },
            continue: {
                background: "#1A237E",
                text: r.default.White
            }
        },
        desktopBreakpoint: 650
    }
})), n.register("fIWiG", (function(o, r) {
    e(o.exports, "default", (function() {
        return x
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("lpEVe"),
        u = n("6vbUb"),
        c = n("aEVgK"),
        d = n("7GM8t");
    let g;
    const f = (0, s.default)(u.motion.div)(g || (g = (e => e)`
  background: ${0};
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`), (e => e.defaultBackgroundColor));
    var x = (0, l.observer)((e => (t(i).useEffect((() => (d.default.readToMe.canPlayAgain = !0, () => {
        d.default.readToMe.canPlayAgain = !1
    })), []), (0, a.jsx)(f, {
        style: {
            opacity: e.opacity,
            y: e.yPosition
        },
        defaultBackgroundColor: e.defaultBackgroundColor || c.default.defaultBackground,
        children: e.children
    }))))
}));