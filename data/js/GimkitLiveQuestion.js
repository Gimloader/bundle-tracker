import {
    x as r,
    r as l,
    j as e,
    d as s,
    a as X,
    ar as st,
    F as rt,
    dL as ct,
    u as lt
} from "./_index.js";
import {
    o as I
} from "./mobxreact.esm.js";
import {
    s as E,
    T as ut,
    a as dt,
    I as gt,
    c as Z,
    b as P,
    p as ht,
    Q as p,
    l as xt,
    R as W
} from "./Text.js";
import {
    c as G
} from "./polished.esm.js";
import {
    g as mt
} from "./getCloudinaryUrl.js";
import {
    L as ft
} from "./LazyLatexRenderer.js";
import {
    b as L
} from "./index-1.js";
import {
    m as B,
    c as $
} from "./motion.js";
import {
    u as wt,
    A as tt
} from "./index-17.js";
import {
    u as z
} from "./use-motion-value.js";
const U = new Map,
    et = new Map,
    K = new Map;
let _ = 1;
const Ct = () => {
        const t = _.toString();
        return _++, t
    },
    kt = (t, n) => {
        const i = Ct();
        if (n) {
            const o = U.get(n);
            o && (K.delete(o), et.set(o, i)), U.set(n, i)
        }
        return K.set(i, t), i
    },
    q = t => {
        if (!t) return;
        const n = et.get(t);
        return n ? q(n) : K.get(t)
    },
    nt = r.createContext(E),
    bt = s.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`,
    At = I(t => {
        const {
            readToMe: n
        } = l.useContext(nt), {
            text: i,
            image: o,
            audio: c,
            latex: a
        } = t, h = () => i ? !o && !c && !a ? e.jsx(ut, {
            text: i,
            highlighted: n.currentlyPlayingQuestionText,
            allowGoogleTranslate: t.allowGoogleTranslate
        }) : e.jsx(dt, {
            text: i,
            image: o,
            latex: a,
            audio: c,
            highlighted: n.currentlyPlayingQuestionText,
            allowGoogleTranslate: t.allowGoogleTranslate || !1
        }) : e.jsx(gt, {
            image: o,
            latex: a,
            audio: c
        });
        return e.jsx(bt, {
            children: h()
        })
    }),
    yt = t => {
        r.useEffect(() => (document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i)), []);
        const n = a => {
                if (!t.canAnswer) return;
                Z(a, () => {
                    t.onQuestionAnswered(t.answer)
                })
            },
            i = a => {
                if (t.blockKeyboardEvent) return;
                const {
                    keyCode: h
                } = a;
                h === t.keyCode && n(a)
            },
            o = t.containerWidth >= t.desktopBreakpoint,
            c = r.useMemo(() => t.answerCount === 4 ? t.gridView || o ? {
                height: 50,
                width: 50
            } : {
                height: 25,
                width: 100
            } : o ? {
                width: 100 / t.answerCount,
                height: 100
            } : {
                width: 100,
                height: 100 / t.answerCount
            }, [t.answerCount, o, t.gridView]);
        return e.jsx(Tt, {
            onClick: n,
            gridView: t.gridView,
            isOnDesktop: o,
            heightPercentage: c.height,
            widthPercentage: c.width,
            children: e.jsx(Bt, {
                position: t.position,
                answerColors: t.answerColors,
                isOnDesktop: o,
                children: t.children
            })
        })
    },
    Tt = s.div`
  text-align: center;
  height: ${t=>t.heightPercentage}%;
  width: ${t=>t.widthPercentage}%;
  cursor: pointer;
`,
    Bt = s.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${t=>t.answerColors[t.position].background};
  color: ${t=>t.answerColors[t.position].text};
  opacity: 1;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  ${t=>t.isOnDesktop&&`
    transition: background 0.18s ease-in-out;
    &:hover {
      background: ${G(.1,t.answerColors[t.position].background)};
    }
  `}
`,
    ot = t => {
        const [n, i] = r.useState(t.text), o = () => {
            if (t.language !== "en" && !(t.disableIfContains && t.text.includes(t.disableIfContains))) {
                if (t.translations && t.translations[t.text]) {
                    i(t.translations[t.text]);
                    return
                }
                X({
                    url: "",
                    data: {
                        to: t.language,
                        text: t.text
                    },
                    success: a => {
                        i(a), t.translations[t.text] = a
                    }
                })
            }
        };
        r.useEffect(() => {
            t.text !== n && (i(t.text), o())
        }, [t.text]);
        const c = () => {
            let a = n;
            return t.suffix && (a += t.suffix), a
        };
        return e.jsx(e.Fragment, {
            children: c()
        })
    },
    C = {
        White: "white",
        Black: "black",
        DisabledGray: "#838383"
    },
    Y = '"Product Sans"',
    vt = {
        mainFontName: Y,
        name: `${Y}, sans-serif`
    },
    jt = t => {
        const [n, i] = r.useState(""), [o, c] = r.useState(!0), a = g => {
            i(g.target.value)
        }, h = g => {
            g.preventDefault(), d()
        }, d = () => {
            n && o && (c(!1), t.onQuestionAnswered(n))
        };
        return e.jsxs(St, {
            children: [e.jsx(Wt, {
                onSubmit: h,
                children: e.jsx(Et, {
                    autoFocus: !0,
                    value: n,
                    onChange: a,
                    placeholder: "Enter answer here..."
                })
            }), e.jsx(Mt, {
                buttonColor: t.buttonColor,
                onClick: d,
                children: e.jsx(ot, {
                    language: t.language,
                    translations: t.translations,
                    text: "Submit"
                })
            })]
        })
    },
    St = s.div`
  height: 100%;
  width: 100%;
`,
    Wt = s.form`
  height: 55%;
  width: 100%;
`,
    Et = s.input`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 27px;
  border-style: solid;
  border-color: ${C.DisabledGray};
  color: ${C.Black};
  border-width: 6px;
  font-family: ${vt.name};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`,
    Mt = s.div`
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  transition: background 0.18s ease-in-out;
  height: 45%;
  background: ${t=>t.buttonColor.background};
  color: ${t=>t.buttonColor.text};
  &:hover {
    background: ${t=>G(.1,t.buttonColor.background)};
  }
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    at = t => e.jsxs(e.Fragment, {
        children: [t.text && e.jsx(P, {
            mode: "multi",
            text: ht(t.allowGoogleTranslate, t.text),
            paddingVertical: t.customTextHorizontalPadding || 7,
            paddingHorizontal: t.customTextHorizontalPadding,
            max: t.customMaxTextSize || 25,
            highlighted: t.highlighted
        }), t.image && e.jsx("img", {
            src: mt(t.image),
            alt: "Answer Choice",
            style: {
                maxHeight: t.customImageHeight || "90%",
                height: t.customImageHeight || "90%",
                maxWidth: t.customImageWidth || "90%",
                borderRadius: 4,
                objectFit: "contain"
            }
        }), t.latex && e.jsx(P, {
            text: e.jsx(ft, {
                latex: t.latex
            }),
            paddingVertical: t.customTextHorizontalPadding || 7,
            paddingHorizontal: t.customTextHorizontalPadding,
            max: t.customMaxTextSize || 25,
            noBold: !0
        })]
    }),
    Qt = [49, 50, 51, 52],
    $t = I(t => {
        const [n, i] = r.useState(!0), [o, c] = r.useState(), {
            readToMe: a
        } = r.useContext(nt), h = r.useRef(null), [d] = L(h), g = r.useMemo(() => st.take(q(t.eas), 4), []);
        if (r.useEffect(() => {
                o && t.onQuestionAnswered(o)
            }, [o]), t.type === p.textInput) return e.jsx(J, {
            defaultBackgroundColor: t.defaultBackgroundColor,
            children: e.jsx(jt, {
                language: t.language,
                translations: t.translations,
                onQuestionAnswered: t.onQuestionAnswered,
                buttonColor: t.textInputButtonColor
            })
        });
        const y = g.some(x => !!(x && x.image)),
            m = x => {
                i(!1), c(x)
            };
        return e.jsx(J, {
            ref: h,
            defaultBackgroundColor: t.defaultBackgroundColor,
            children: g.map((x, f) => e.jsx(yt, {
                id: x._id,
                position: f,
                canAnswer: n,
                keyCode: Qt[f],
                gridView: y,
                onQuestionAnswered: m,
                answer: x._id,
                blockKeyboardEvent: t.blockKeyboardEvent,
                answerColors: t.answerColors,
                containerWidth: d,
                desktopBreakpoint: t.desktopBreakpoint,
                answerCount: g.length,
                children: e.jsx(at, {
                    allowGoogleTranslate: t.allowGoogleTranslate,
                    text: x.text,
                    image: x.image,
                    latex: x.latex,
                    highlighted: a.currentlyPlayingAnswerAudio && f === E.readToMe.answerIndex
                })
            }, f))
        })
    }),
    J = s.div`
  background: ${t=>t.defaultBackgroundColor};
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`,
    Pt = t => {
        const n = t.textColor,
            i = r.useMemo(() => t.textShownWhenAnsweringCorrectly, []),
            o = () => t.customCorrectTextAnimation && t.customCorrectTextAnimation.className ? t.customCorrectTextAnimation.className : "animated tada",
            c = () => t.customCorrectTextAnimation && t.customCorrectTextAnimation.duration ? t.customCorrectTextAnimation.duration : 1;
        return e.jsx(Lt, {
            style: {
                color: n,
                animationDuration: `${c()}s`
            },
            className: o(),
            children: e.jsx(P, {
                max: 170,
                mode: "single",
                text: i
            })
        })
    },
    Lt = s.div.attrs({
        className: "maxAll flex-center"
    })``,
    Ht = t => e.jsx(It, {
        backgroundColor: t.correctAnswerColor.background,
        children: e.jsx(Pt, {
            textShownWhenAnsweringCorrectly: t.textShownWhenAnsweringCorrectly,
            customCorrectTextAnimation: t.customCorrectTextAnimation,
            textColor: t.correctAnswerColor.text
        })
    }),
    It = s.div.attrs({
        className: "maxWidth flex-center"
    })`
  height: 40%;
  background: ${t=>t.backgroundColor};
`,
    Gt = t => {
        const n = i => {
            t.onClick && t.onClick(i)
        };
        return e.jsx("span", {
            onClick: n,
            children: t.children
        })
    },
    Nt = t => {
        const n = r.useRef(null),
            [i] = L(n),
            o = () => e.jsx(it, {
                ref: n,
                background: t.background,
                heightPercentage: t.heightPercentage,
                isOnDesktop: i >= t.desktopBreakpoint,
                children: e.jsx(P, {
                    text: e.jsx(ot, {
                        language: t.language,
                        translations: t.translations,
                        text: t.text
                    }),
                    max: 40
                })
            }),
            c = a => {
                Z(a, () => {
                    var d;
                    (d = t.onActionSound) == null || d.play(), t.handleClick && t.handleClick()
                })
            };
        return e.jsx(Gt, {
            onClick: c,
            children: o()
        })
    },
    it = s.div.attrs({
        className: "flex-center maxWidth"
    })`
  height: ${t=>t.heightPercentage}%;
  background: ${t=>t.background};
  color: ${C.White};
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${t=>t.isOnDesktop&&`transition: background 0.15s;
    &:hover {
      background: ${G(.1,t.background)};
    }

  `}
`,
    Rt = t => {
        const n = 1 / t.actions.length * 100;
        return e.jsx(Dt, {
            children: t.actions.filter(i => i !== null).map(i => e.jsx(Nt, {
                ...i,
                heightPercentage: n,
                language: t.language,
                translations: t.translations,
                desktopBreakpoint: t.desktopBreakpoint,
                onActionSound: t.onActionSound
            }, i.text))
        })
    },
    Dt = s.div.attrs({
        className: "maxWidth"
    })`
  height: 60%;
  text-align: center;
`,
    zt = t => {
        l.useEffect(() => (document.addEventListener("keydown", n), () => {
            document.removeEventListener("keydown", n)
        }), [t.canAdvanceToQuestions, t.blockKeyboardEvents]);
        const n = i => {
            t.blockKeyboardEvents || i.key && i.key === "Enter" && t.canAdvanceToQuestions && t.continueToQuestions()
        };
        return e.jsxs(Kt, {
            defaultBackgroundColor: t.defaultBackgroundColor,
            children: [e.jsx(Ht, {
                textShownWhenAnsweringCorrectly: t.textShownWhenAnsweringCorrectly,
                customCorrectTextAnimation: t.customCorrectTextAnimation,
                correctAnswerColor: t.correctAnswerColor
            }), e.jsx(Rt, {
                actions: t.actions,
                language: t.language,
                translations: t.translations,
                desktopBreakpoint: t.desktopBreakpoint,
                onActionSound: t.onActionSound
            })]
        })
    },
    Kt = s.div.attrs({
        className: "flex-column maxAll"
    })`
  color: ${C.White};
  background: ${t=>t.defaultBackgroundColor};
`,
    qt = s(B.div).attrs({
        className: "maxAll"
    })`
  overflow: hidden;
`,
    Ot = s.div.attrs({
        className: "maxAll animated headShake"
    })``,
    Vt = s.div.attrs({
        className: "maxAll flex-center animated fadeIn"
    })``,
    Ft = s(B.div).attrs({
        layout: !0
    })`
  width: 90%;
  height: 80%;
`,
    Ut = s.div.attrs({
        className: "maxWidth"
    })`
  text-align: center;
`,
    _t = s(B.div).attrs({
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
    })``,
    Yt = s.div.attrs({
        className: "maxAll flex flex-column"
    })`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`,
    Jt = s.div.attrs({
        className: "maxWidth"
    })`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`,
    Xt = s.div`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${rt.Normal};
  font-style: italic;
`,
    Zt = s.div`
  flex: 1;
  overflow: hidden;
`,
    pt = s.div.attrs({
        className: "maxWidth"
    })`
  position: relative;
  background: gray;
`,
    te = s(B.div).attrs({
        animate: {
            width: "100%"
        },
        initial: {
            width: "0%"
        },
        className: "maxHeight"
    })`
  position: absolute;
  top: 0;
`,
    ee = s.div.attrs({
        className: "maxAll"
    })`
  position: absolute;
  top: 0;
`,
    ne = s.div.attrs({
        className: "maxAll"
    })``,
    oe = s.div.attrs({
        className: "flex vc"
    })``,
    j = {
        textHeightPercentage: .08,
        maxTextWidthPercentage: .5,
        marginPercentage: .04,
        continueButtonHeightPercentage: .3
    },
    ae = {
        backgroundColor: "rgba(255,255,31, 0.21)",
        boxShadow: "10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)",
        borderRadius: 9
    },
    ie = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,
    O = class O extends r.Component {
        render() {
            const {
                paddingHorizontal: n,
                paddingVertical: i,
                ...o
            } = this.props;
            return delete o.text, delete o.highlighted, e.jsx(ie, {
                className: this.props.customClass,
                style: this.props.customStyle,
                children: e.jsx(xt.Textfit, {
                    style: {
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: this.props.disableHorizontalCentering ? "flex-start" : "center",
                        alignItems: "center",
                        paddingTop: i,
                        paddingBottom: i,
                        paddingLeft: this.props.paddingLeft || n,
                        paddingRight: n,
                        boxSizing: "border-box",
                        fontWeight: this.props.noBold ? "normal" : 900
                    },
                    ...o,
                    children: e.jsx("div", {
                        style: this.props.highlighted ? ae : void 0,
                        children: this.props.text
                    })
                })
            })
        }
    };
O.defaultProps = {
    paddingHorizontal: "6%",
    paddingVertical: 15,
    max: 50,
    mode: "single",
    forceSingleModeWidth: !1
};
let H = O;
class se extends r.Component {
    constructor() {
        super(...arguments), this.state = {
            text: this.props.text
        }, this.buildString = () => {
            let n = this.state.text;
            return this.props.suffix && (n += this.props.suffix), n
        }, this.requestTranslation = async () => {
            try {
                return (await ct.post("/api/translate", {
                    to: this.props.language,
                    text: this.props.text
                })).data
            } catch {
                return this.props.text
            }
        }
    }
    componentDidUpdate(n) {
        n.text !== this.props.text && (this.setState({
            text: this.props.text
        }), this.onTranslate())
    }
    componentDidMount() {
        this.onTranslate()
    }
    onTranslate() {
        if (this.props.language !== "en" && !this.props.text.includes(this.props.disableIfContains)) {
            if (this.props.translations && this.props.translations[this.props.text]) return this.setState({
                text: this.props.translations[this.props.text]
            });
            this.requestTranslation().then(n => {
                this.props.translations[this.props.text] = n, this.setState({
                    text: n
                })
            }).catch()
        }
    }
    render() {
        return this.buildString()
    }
}
const re = t => e.jsxs(Yt, {
        style: {
            height: t.answerBoxHeight,
            marginBottom: t.margin,
            borderRadius: 10,
            marginLeft: t.margin,
            width: t.containerWidth - t.margin * 2
        },
        children: [e.jsx(Jt, {
            children: e.jsxs(Xt, {
                children: [e.jsx(se, {
                    text: "Correct Answer",
                    language: t.language,
                    translations: t.translations
                }), ":"]
            })
        }), e.jsx(Zt, {
            style: {
                padding: `${Math.max(t.containerHeight*.1,30)}px ${Math.max(t.containerWidth*.1,30)}px`
            },
            children: e.jsx(at, {
                allowGoogleTranslate: t.allowGoogleTranslate,
                text: t.correctAnswer ? t.correctAnswer.text : "No Correct Answer",
                image: t.correctAnswer ? t.correctAnswer.image : void 0,
                latex: t.correctAnswer ? t.correctAnswer.latex : void 0,
                customTextHorizontalPadding: "0px",
                customTextVerticalPadding: "0px",
                customImageHeight: "100%",
                customImageWidth: "100%",
                customMaxTextSize: 40
            })
        })]
    }),
    ce = t => {
        const [n, i] = l.useState(t.text), o = () => {
            if (t.language !== "en" && !(t.disableIfContains && t.text.includes(t.disableIfContains))) {
                if (t.translations && t.translations[t.text]) {
                    i(t.translations[t.text]);
                    return
                }
                X({
                    url: "",
                    data: {
                        to: t.language,
                        text: t.text
                    },
                    success: a => {
                        i(a), t.translations[t.text] = a
                    }
                })
            }
        };
        return l.useEffect(() => {
            t.text !== n && (i(t.text), o())
        }, [t.text]), (() => {
            let a = n;
            return t.suffix && (a += t.suffix), a
        })()
    },
    le = t => {
        const [n, i] = lt(!1), [o, c] = l.useState(t.secondsToWait), a = l.useMemo(() => t.canAdvanceToQuestions && o > 0, [o, t.canAdvanceToQuestions]);
        l.useEffect(() => {
            t.onLockedChange && t.onLockedChange(a)
        }, [a, t.onLockedChange]);
        const h = ce({
                text: "Continue",
                language: t.language,
                translations: t.translations
            }),
            d = l.useCallback(() => {
                a || t.continueToQuestions()
            }, [t.continueToQuestions, a]),
            g = l.useCallback(m => {
                t.blockKeyboardEvents || m.key && m.key === "Enter" && d()
            }, [t.blockKeyboardEvents, d]);
        l.useEffect(() => (document.addEventListener("keydown", g), () => {
            document.removeEventListener("keydown", g)
        }), [g]);
        const y = l.useCallback(() => {
            var m;
            a || ((m = t.onActionSound) == null || m.play(), d())
        }, [a, d, t.onActionSound]);
        return l.useEffect(() => {
            if (n && o) {
                const m = setTimeout(() => {
                    c(o - 1)
                }, 1e3);
                return () => clearTimeout(m)
            }
            return () => null
        }, [n, o]), e.jsxs(pt, {
            style: {
                height: t.continueButtonHeight
            },
            children: [e.jsx(te, {
                style: {
                    background: t.continueButtonColor.background
                },
                transition: {
                    duration: t.secondsToWait,
                    ease: "linear"
                },
                onAnimationStart: i
            }), e.jsx(ee, {
                children: e.jsx(it, {
                    heightPercentage: 100,
                    isOnDesktop: t.containerWidth >= t.desktopBreakpoint,
                    background: o ? "transparent" : t.continueButtonColor.background,
                    style: {
                        cursor: o ? "not-allowed" : "pointer",
                        color: t.continueButtonColor.text
                    },
                    onClick: y,
                    children: e.jsx(ne, {
                        children: e.jsx(H, {
                            text: e.jsxs(oe, {
                                children: [e.jsx("div", {
                                    children: h
                                }), e.jsxs(B.div, {
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
    },
    ue = t => {
        const [n, i] = l.useState("message"), o = l.useRef(null), [c, a] = L(o), h = l.useRef(null), [d, g] = L(h), y = l.useMemo(() => t.secondsToWaitBeforeContinue ? t.secondsToWaitBeforeContinue : 3, [t.secondsToWaitBeforeContinue]), m = l.useMemo(() => t.lastQuestion ? t.lastQuestion.answers.find(A => A.correct) : null, [t.lastQuestion]);
        wt(() => {
            i("answer")
        }, t.showCorrectAnswerAfterMs || 800);
        const x = l.useMemo(() => n === "message" ? t.incorrectAnswerColor.background : G(.2, t.incorrectAnswerColor.background), [n, t.incorrectAnswerColor.background]),
            f = l.useMemo(() => n === "message", [n]),
            v = l.useMemo(() => n === "answer", [n]),
            u = l.useMemo(() => a * j.marginPercentage, [a]),
            T = l.useMemo(() => {
                const D = j.textHeightPercentage * a / g,
                    k = c * j.maxTextWidthPercentage / d;
                return Math.min(D, k)
            }, [a, g, d, c]),
            M = l.useMemo(() => {
                if (f) return 0;
                let A = -(a / 2);
                return A += g * T / 2, A += u, A
            }, [f, a, T, g, u]),
            S = l.useMemo(() => a - g * T - a * j.marginPercentage * 2, [a, g, T]),
            N = l.useMemo(() => S - a * j.continueButtonHeightPercentage - u, [S, a, u]),
            Q = l.useMemo(() => a * j.continueButtonHeightPercentage, [a]);
        l.useEffect(() => (t.onLockedChange && t.onLockedChange(!0), () => {
            t.onLockedChange && t.onLockedChange(!1)
        }), [t.onLockedChange]);
        const R = () => e.jsxs(Ot, {
            style: {
                color: t.incorrectAnswerColor.text
            },
            children: [e.jsx(Vt, {
                style: {
                    marginTop: M
                },
                children: e.jsx(Ft, {
                    layout: !0,
                    animate: {
                        scale: f ? 1 : T,
                        opacity: f ? 1 : .8
                    },
                    children: e.jsx(H, {
                        max: 170,
                        mode: "single",
                        text: e.jsx("div", {
                            ref: h,
                            children: t.textShownWhenAnsweringIncorrectly
                        })
                    })
                })
            }), v ? e.jsx(Ut, {
                style: {
                    marginTop: M,
                    height: S,
                    overflow: "hidden"
                },
                children: e.jsxs(_t, {
                    children: [e.jsx(re, {
                        containerWidth: c,
                        containerHeight: a,
                        answerBoxHeight: N,
                        margin: u,
                        correctAnswer: m,
                        allowGoogleTranslate: t.allowGoogleTranslate,
                        language: t.language,
                        translations: t.translations
                    }), e.jsx(le, {
                        continueButtonHeight: Q,
                        containerWidth: c,
                        secondsToWait: y,
                        continueToQuestions: t.continueToQuestions,
                        desktopBreakpoint: t.desktopBreakpoint,
                        language: t.language,
                        translations: t.translations,
                        onActionSound: t.onActionSound,
                        continueButtonColor: t.continueButtonColor,
                        blockKeyboardEvents: t.blockKeyboardEvents,
                        canAdvanceToQuestions: t.canAdvanceToQuestions,
                        onLockedChange: t.onLockedChange
                    })]
                })
            }) : null]
        });
        return e.jsx(tt, {
            mode: "wait",
            children: e.jsx(qt, {
                animate: {
                    background: x
                },
                transition: {
                    duration: .3
                },
                ref: o,
                children: R()
            })
        })
    },
    de = t => t.lastQuestionCorrect ? e.jsx(zt, {
        textShownWhenAnsweringCorrectly: t.textShownWhenAnsweringCorrectly,
        customCorrectTextAnimation: t.customCorrectTextAnimation,
        onActionSound: t.onActionSound,
        language: t.language,
        translations: t.translations,
        allowGoogleTranslate: t.allowGoogleTranslate,
        continueToQuestions: t.continueToQuestions,
        actions: t.actions,
        desktopBreakpoint: t.desktopBreakpoint,
        defaultBackgroundColor: t.defaultBackgroundColor,
        correctAnswerColor: t.correctAnswerColor,
        blockKeyboardEvents: t.blockKeyboardEvents,
        canAdvanceToQuestions: t.canAdvanceToQuestions
    }) : e.jsx(ue, {
        textShownWhenAnsweringIncorrectly: t.textShownWhenAnsweringIncorrectly,
        lastQuestion: t.lastQuestion,
        onActionSound: t.onActionSound,
        language: t.language,
        translations: t.translations,
        allowGoogleTranslate: t.allowGoogleTranslate,
        desktopBreakpoint: t.desktopBreakpoint,
        canAdvanceToQuestions: t.canAdvanceToQuestions,
        blockKeyboardEvents: t.blockKeyboardEvents,
        continueToQuestions: t.continueToQuestions,
        incorrectAnswerColor: t.incorrectAnswerColor,
        continueButtonColor: t.continueButtonColor,
        onLockedChange: t.onLockedChange
    }),
    w = {
        defaultBackground: "#303f9f",
        question: {
            background: "#303f9f",
            text: C.White
        },
        palette: [{
            background: "#771322",
            text: C.White
        }, {
            background: "#A85C15",
            text: C.White
        }, {
            background: "#0D6B33",
            text: C.White
        }, {
            background: "#076296",
            text: C.White
        }],
        response: {
            correctAnswer: {
                background: "#388E3C",
                text: C.White
            },
            incorrectAnswer: {
                background: "#B71C1C",
                text: C.White
            },
            continue: {
                background: "#1A237E",
                text: C.White
            }
        },
        desktopBreakpoint: 650
    },
    ge = s(B.div)`
  background: ${t=>t.defaultBackgroundColor};
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`,
    he = I(t => (r.useEffect(() => (E.readToMe.canPlayAgain = !0, () => {
        E.readToMe.canPlayAgain = !1
    }), []), e.jsx(ge, {
        style: {
            opacity: t.opacity,
            y: t.yPosition
        },
        defaultBackgroundColor: t.defaultBackgroundColor || w.defaultBackground,
        children: t.children
    }))),
    je = I(t => {
        const [n, i] = r.useState(!1), [o, c] = r.useState("questions"), [a, h] = r.useState(!1), [d, g] = r.useState(t.ecc), [y, m] = r.useState(), x = z("0%"), f = z(1), v = z(t.disableFadeInOnMount ? 1 : 0);
        r.useEffect(() => {
            m(t.ecc)
        }, [t.ecc]), r.useEffect(() => {
            d || g(t.ecc)
        }, [t.ecc]);
        const u = r.useMemo(() => {
                if (d) return q(d)
            }, [d]),
            T = r.useMemo(() => {
                if (u) return kt(u.answers, `${u._id}-answers`)
            }, [u]);
        r.useEffect(() => (t.onMount && t.onMount(), t.disableFadeInOnMount || $(v, 1, {
            duration: .25,
            delay: .01,
            ease: "easeOut"
        }), () => {
            W.stop()
        }), []), r.useEffect(() => {
            E.readToMe.enabled = t.readToMeEnabled || !1, o === "response" ? W.stop() : o === "questions" && d && W.play(u)
        }, [t.readToMeEnabled, o]);
        const M = k => {
                var b, F;
                k ? (b = t.correctSound) == null || b.play() : (F = t.incorrectSound) == null || F.play()
            },
            S = k => {
                if (!a) {
                    t.onActionSound && t.onActionSound.play(), h(!0);
                    const b = t.onQuestionAnswered(k);
                    $(x, "100%", {
                        ease: "easeIn",
                        duration: .23,
                        onComplete: () => {
                            h(!1), M(b), t.nextQuestion && t.nextQuestion(), N()
                        }
                    })
                }
            },
            N = () => {
                W.stop(), f.set(0), t.beforeOpenAnswerResponse && t.beforeOpenAnswerResponse(), c("response"), $(f, 1, {
                    duration: .3,
                    onUpdate: b => {
                        !n && b >= .3 * .75 && i(!0)
                    }
                })
            },
            Q = () => {
                x.set("0%"), i(!1), W.stop(), t.continueAction && t.continueAction(), g(y), c("questions"), v.set(0), $(v, 1, {
                    duration: .2
                })
            },
            R = () => d ? e.jsxs(he, {
                opacity: v,
                yPosition: x,
                defaultBackgroundColor: t.defaultBackgroundColor || w.defaultBackground,
                children: [e.jsx(xe, {
                    questionColor: t.questionColor || w.question,
                    children: e.jsx(At, {
                        text: u == null ? void 0 : u.text,
                        image: u == null ? void 0 : u.image,
                        audio: u == null ? void 0 : u.audio,
                        latex: u == null ? void 0 : u.latex,
                        allowGoogleTranslate: t.allowGoogleTranslate
                    })
                }), e.jsx($t, {
                    onQuestionAnswered: S,
                    eas: T,
                    type: (u == null ? void 0 : u.type) || p.multipleChoice,
                    blockKeyboardEvent: t.blockKeyboardEvents || !1,
                    allowGoogleTranslate: t.allowGoogleTranslate || !1,
                    language: t.language || "en",
                    translations: t.translations || {},
                    answerColors: t.answerColors || w.palette,
                    desktopBreakpoint: t.desktopBreakpoint || w.desktopBreakpoint,
                    defaultBackgroundColor: t.defaultBackgroundColor || w.defaultBackground,
                    textInputButtonColor: t.textInputButtonColor || w.palette[2]
                })]
            }) : t.noQuestionContent || null,
            A = () => {
                var b;
                const k = {
                    background: ((b = t == null ? void 0 : t.continueButtonColor) == null ? void 0 : b.background) || w.response.continue.background,
                    text: "Continue",
                    handleClick: () => {
                        Q()
                    }
                };
                return t.responseActions ? [...t.responseActions, k] : [k]
            },
            D = () => e.jsx(me, {
                style: {
                    opacity: f
                },
                children: e.jsx(de, {
                    canAdvanceToQuestions: n,
                    correctAnswer: t.lastQuestionCorrectAnswer,
                    continueToQuestions: Q,
                    blockKeyboardEvents: t.blockKeyboardEvents,
                    lastQuestionCorrect: t.lastQuestionAnsweredCorrect || !1,
                    actions: A(),
                    lastQuestion: t.lastQuestion,
                    allowGoogleTranslate: t.allowGoogleTranslate || !1,
                    textShownWhenAnsweringCorrectly: t.textShownWhenAnsweringCorrectly || "Correct!",
                    textShownWhenAnsweringIncorrectly: t.textShownWhenAnsweringIncorrectly || "Incorrect!",
                    customCorrectTextAnimation: t.customCorrectTextAnimation,
                    language: t.language || "en",
                    translations: t.translations || {},
                    desktopBreakpoint: t.desktopBreakpoint || w.desktopBreakpoint,
                    defaultBackgroundColor: t.defaultBackgroundColor || w.defaultBackground,
                    correctAnswerColor: t.correctAnswerColor || w.response.correctAnswer,
                    incorrectAnswerColor: t.incorrectAnswerColor || w.response.incorrectAnswer,
                    continueButtonColor: t.continueButtonColor || w.response.continue,
                    onActionSound: t.onActionSound,
                    onLockedChange: t.onLockedChange
                })
            }),
            V = () => o === "questions" ? R() : D();
        return e.jsx(tt, {
            mode: "wait",
            children: V()
        })
    }),
    xe = s.div`
  color: ${t=>t.questionColor.text};
  height: 35%;
  background-color: ${t=>t.questionColor.background};
`,
    me = s(B.div)`
  width: 100%;
  height: 100%;
  will-change: opacity;
`;
export {
    q as D, kt as E, vt as F, je as G, nt as S, H as T
};