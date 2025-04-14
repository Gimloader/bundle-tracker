function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("kThAA", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        Red: "#d32f2f",
        Green: "#388e3c",
        Blue: "#303f9f"
    }
})), t.register("d3DbW", (function(r, n) {
    e(r.exports, "default", (function() {
        return E
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("93yIm"),
        c = t("fC6cp"),
        a = t("69SUA"),
        d = t("4eEdH"),
        s = t("iMOcM"),
        u = t("8j47p"),
        f = t("46bRO");
    let x, p, h, g, m, j, v = e => e;
    const y = i.default.div(x || (x = v`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`)),
        b = i.default.div(p || (p = v`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`)),
        w = i.default.div(h || (h = v`
  display: flex;
  flex-direction: column;
`)),
        C = i.default.h2(g || (g = v`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${0};
  margin-bottom: 0px;
  margin-top: 3px;
`), a.FontWeights.UltraBold),
        A = i.default.p(m || (m = v`
  margin-bottom: 0px;
  font-size: 20px;
`)),
        I = (0, i.default)(l.default)(j || (j = v`
  @media print {
    display: none;
  }
`));
    var E = e => {
        const [t, r, n] = (0, s.useBoolean)(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(y, {
                children: [(0, o.jsxs)(b, {
                    children: [(0, o.jsxs)(w, {
                        children: [(0, o.jsx)(C, {
                            children: e.title
                        }), e.description && (0, o.jsx)(A, {
                            children: e.description
                        })]
                    }), e.download ? (0, o.jsx)(I, {
                        style: {
                            marginLeft: 30
                        },
                        size: "large",
                        icon: (0, o.jsx)(d.default, {}),
                        onClick: () => {
                            (0, s.isUpgraded)() ? null == e || e.download(): r()
                        },
                        children: "Export"
                    }) : null]
                }), (0, o.jsx)(c.default, {})]
            }), (0, o.jsx)(u.default, {
                id: "report export",
                copy: {
                    title: "Export reports with Pro",
                    description: (0, o.jsxs)(o.Fragment, {
                        children: ["To export a game report to a spreadsheet file,", " ", (0, o.jsxs)("b", {
                            children: ["upgrade to ", f.COMPANY_NAME, " Pro."]
                        })]
                    })
                },
                visible: t,
                close: n
            })]
        })
    }
})), t.register("92Suj", (function(r, n) {
    e(r.exports, "default", (function() {
        return g
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("7ECC6"),
        c = t("69SUA"),
        a = t("lKmIF");
    let d, s, u, f = e => e;
    const x = (0, i.default)(l.default)(d || (d = f`
  margin-bottom: 10px !important;
`)),
        p = i.default.h2(s || (s = f`
  margin-bottom: -9px;
  font-weight: ${0};
`), c.FontWeights.Bold),
        h = i.default.span(u || (u = f`
  font-size: 40px;
  font-weight: ${0};
  color: ${0};
`), c.FontWeights.Black, (e => e.color ? e.color : a.default.Black));
    var g = e => (0, o.jsxs)(x, {
        className: e.className,
        children: [null !== e.header && (0, o.jsx)(p, {
            children: e.header
        }), null !== e.content && (0, o.jsx)(h, {
            color: e.contentColor,
            children: e.content
        })]
    })
})), t.register("eHkxo", (function(r, n) {
    e(r.exports, "default", (function() {
        return i
    }));
    let o;
    var i = t("2FDaO").default.div(o || (o = (e => e)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: ${0};
  overflow-x: hidden;
  @media print {
    overflow: visible;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`), (e => e.preventScroll ? "hidden" : "auto"))
})), t.register("3gvLM", (function(r, n) {
    e(r.exports, "default", (function() {
        return x
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("8FJCY"),
        c = t("2HJeA");
    let a, d, s = e => e;
    const u = i.default.div(a || (a = s`
  display: flex;
  width: 100%;
  justify-content: space-between;
`)),
        f = i.default.div(d || (d = s`
  width: 100%;
`));
    var x = e => (0, o.jsxs)(u, {
        children: [(0, o.jsx)(f, {
            children: (0, o.jsx)(l.default, {
                question: e.question
            })
        }), (0, o.jsx)(c.default, {
            correct: e.correct,
            incorrect: e.incorrect,
            accuracy: e.accuracy
        })]
    })
})), t.register("2HJeA", (function(r, n) {
    e(r.exports, "default", (function() {
        return b
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("7ECC6"),
        c = t("e4KJZ"),
        a = t("lKmIF"),
        d = t("kThAA");
    let s, u, f, x, p, h = e => e;
    const g = i.default.div(s || (s = h`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`)),
        m = (0, i.default)(l.default).attrs({
            bodyStyle: {
                textAlign: "center",
                padding: 0
            }
        })(u || (u = h`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${0};
  cursor: default;
  width: 100px !important;
`), a.default.Black),
        j = (0, i.default)(m)(f || (f = h`
  color: ${0} !important;
  margin-left: 20px !important;
`), d.default.Green),
        v = (0, i.default)(m)(x || (x = h`
  color: ${0} !important;
  margin-left: 10px !important;
`), d.default.Red),
        y = (0, i.default)(m)(p || (p = h`
  color: ${0} !important;
  margin-left: 10px !important;
`), d.default.Blue);
    var b = e => (0, o.jsxs)(g, {
        children: [(0, o.jsx)(c.default, {
            title: "Correct",
            children: (0, o.jsx)(j, {
                children: e.correct
            })
        }), (0, o.jsx)(c.default, {
            title: "Incorrect",
            children: (0, o.jsx)(v, {
                children: e.incorrect
            })
        }), (0, o.jsx)(c.default, {
            title: "Accuracy",
            children: (0, o.jsx)(y, {
                children: `${e.accuracy}%`
            })
        })]
    })
})), t.register("9WFo8", (function(r, n) {
    e(r.exports, "default", (function() {
        return y
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        l = t("2FDaO"),
        c = t("fC6cp"),
        a = t("iMOcM"),
        d = t("3gvLM"),
        s = t("69SUA"),
        u = t("kThAA"),
        f = t("d3DbW"),
        x = t("92Suj"),
        p = t("eHkxo");
    let h, g, m = e => e;
    const j = l.default.div(h || (h = m`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`)),
        v = (0, l.default)(x.default)(g || (g = m`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`));
    var y = e => {
        const {
            player: t,
            questions: r
        } = e, n = i.useMemo((() => {
            const e = new Set;
            t.correctQuestionIds.forEach((t => {
                e.add(t)
            })), t.incorrectQuestionIds.forEach((t => {
                e.add(t)
            }));
            const n = [];
            return e.forEach((e => {
                const t = r.find((t => t._id === e));
                t && n.push(t)
            })), n
        }), [r.length, t.correctQuestionIds.length, t.incorrectQuestionIds.length]), l = i.useMemo((() => n.map((e => {
            let r = 0,
                n = 0;
            return t.correctQuestionIds.forEach((t => {
                t === e._id && r++
            })), t.incorrectQuestionIds.forEach((t => {
                t === e._id && n++
            })), {
                question: e,
                resultData: {
                    correct: r,
                    incorrect: n,
                    accuracy: (0, a.calculateAccuracy)(r, n)
                }
            }
        }))), [n.length, t.correctQuestionIds.length, t.incorrectQuestionIds.length]);
        return (0, o.jsxs)(p.default, {
            preventScroll: e.preventScroll,
            children: [(0, o.jsx)(f.default, {
                title: t.name
            }), (0, o.jsxs)(j, {
                children: [(0, o.jsx)(v, {
                    header: "Correct",
                    content: t.correctQuestionIds.length,
                    contentColor: u.default.Green
                }), (0, o.jsx)(v, {
                    header: "Incorrect",
                    content: t.incorrectQuestionIds.length,
                    contentColor: u.default.Red
                }), (0, o.jsx)(v, {
                    header: "Accuracy",
                    content: `${(0,a.calculateAccuracy)(t.correctQuestionIds.length,t.incorrectQuestionIds.length)}%`,
                    contentColor: u.default.Blue
                })]
            }), (0, o.jsx)("div", {
                className: "maxWidth",
                children: (0, o.jsx)(c.default, {
                    style: {
                        fontSize: 20,
                        fontWeight: s.FontWeights.UltraBold
                    },
                    children: (0, o.jsx)("div", {
                        children: "Questions"
                    })
                })
            }), (0, o.jsx)("div", {
                children: l.sort(((e, t) => e.resultData.accuracy > t.resultData.accuracy ? 1 : -1)).map((e => (0, o.jsx)(d.default, {
                    question: e.question,
                    correct: e.resultData.correct,
                    incorrect: e.resultData.incorrect,
                    accuracy: e.resultData.accuracy
                }, e.question._id + "-" + t.name + "-breakdown")))
            })]
        })
    }
}));