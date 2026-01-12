import {
    u as v,
    j as t,
    D as j,
    C as b,
    d as n,
    F as x,
    f as I,
    B as Q,
    e as y,
    c as w,
    r as p,
    aY as g
} from "./_index.js";
import {
    Q as B
} from "./Question.js";
import {
    T as h
} from "./index-5.js";
import {
    U as $
} from "./App-2.js";
import {
    R as D
} from "./DownloadOutlined.js";
const a = {
        Red: "#d32f2f",
        Green: "#388e3c",
        Blue: "#303f9f"
    },
    A = n.div`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`,
    E = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,
    k = n.div`
  display: flex;
  flex-direction: column;
`,
    M = n.h2`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${x.UltraBold};
  margin-bottom: 0px;
  margin-top: 3px;
`,
    S = n.p`
  margin-bottom: 0px;
  font-size: 20px;
`,
    z = n(Q)`
  @media print {
    display: none;
  }
`,
    R = e => {
        const [o, l, d] = v(!1), u = () => {
            if (!I()) {
                l();
                return
            }
            e == null || e.download()
        };
        return t.jsxs(t.Fragment, {
            children: [t.jsxs(A, {
                children: [t.jsxs(E, {
                    children: [t.jsxs(k, {
                        children: [t.jsx(M, {
                            children: e.title
                        }), e.description && t.jsx(S, {
                            children: e.description
                        })]
                    }), e.download ? t.jsx(z, {
                        style: {
                            marginLeft: 30
                        },
                        size: "large",
                        icon: t.jsx(D, {}),
                        onClick: u,
                        children: "Export"
                    }) : null]
                }), t.jsx(j, {})]
            }), t.jsx($, {
                id: "report export",
                copy: {
                    title: "Export reports with Pro",
                    description: t.jsxs(t.Fragment, {
                        children: ["To export a game report to a spreadsheet file,", " ", t.jsxs("b", {
                            children: ["upgrade to ", b, " Pro."]
                        })]
                    })
                },
                visible: o,
                close: d
            })]
        })
    },
    U = n(w)`
  margin-bottom: 10px !important;
`,
    N = n.h2`
  margin-bottom: -9px;
  font-weight: ${x.Bold};
`,
    P = n.span`
  font-size: 40px;
  font-weight: ${x.Black};
  color: ${e=>e.color?e.color:y.Black};
`,
    T = e => t.jsxs(U, {
        className: e.className,
        children: [e.header !== null && t.jsx(N, {
            children: e.header
        }), e.content !== null && t.jsx(P, {
            color: e.contentColor,
            children: e.content
        })]
    }),
    W = n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: ${e=>e.preventScroll?"hidden":"auto"};
  overflow-x: hidden;
  @media print {
    overflow: visible;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`,
    q = n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`,
    f = n(w).attrs({
        bodyStyle: {
            textAlign: "center",
            padding: 0
        }
    })`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${y.Black};
  cursor: default;
  width: 100px !important;
`,
    _ = n(f)`
  color: ${a.Green} !important;
  margin-left: 20px !important;
`,
    F = n(f)`
  color: ${a.Red} !important;
  margin-left: 10px !important;
`,
    G = n(f)`
  color: ${a.Blue} !important;
  margin-left: 10px !important;
`,
    H = e => t.jsxs(q, {
        children: [t.jsx(h, {
            title: "Correct",
            children: t.jsx(_, {
                children: e.correct
            })
        }), t.jsx(h, {
            title: "Incorrect",
            children: t.jsx(F, {
                children: e.incorrect
            })
        }), t.jsx(h, {
            title: "Accuracy",
            children: t.jsx(G, {
                children: `${e.accuracy}%`
            })
        })]
    }),
    O = n.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,
    Y = n.div`
  width: 100%;
`,
    L = e => t.jsxs(O, {
        children: [t.jsx(Y, {
            children: t.jsx(B, {
                question: e.question
            })
        }), t.jsx(H, {
            correct: e.correct,
            incorrect: e.incorrect,
            accuracy: e.accuracy
        })]
    }),
    J = n.div`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`,
    m = n(T)`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`,
    et = e => {
        const {
            player: o,
            questions: l
        } = e, d = p.useMemo(() => {
            const r = new Set;
            o.correctQuestionIds.forEach(c => {
                r.add(c)
            }), o.incorrectQuestionIds.forEach(c => {
                r.add(c)
            });
            const i = [];
            return r.forEach(c => {
                const s = l.find(C => C._id === c);
                s && i.push(s)
            }), i
        }, [l.length, o.correctQuestionIds.length, o.incorrectQuestionIds.length]), u = p.useMemo(() => d.map(r => {
            let i = 0,
                c = 0;
            return o.correctQuestionIds.forEach(s => {
                s === r._id && i++
            }), o.incorrectQuestionIds.forEach(s => {
                s === r._id && c++
            }), {
                question: r,
                resultData: {
                    correct: i,
                    incorrect: c,
                    accuracy: g(i, c)
                }
            }
        }), [d.length, o.correctQuestionIds.length, o.incorrectQuestionIds.length]);
        return t.jsxs(W, {
            preventScroll: e.preventScroll,
            children: [t.jsx(R, {
                title: o.name
            }), t.jsxs(J, {
                children: [t.jsx(m, {
                    header: "Correct",
                    content: o.correctQuestionIds.length,
                    contentColor: a.Green
                }), t.jsx(m, {
                    header: "Incorrect",
                    content: o.incorrectQuestionIds.length,
                    contentColor: a.Red
                }), t.jsx(m, {
                    header: "Accuracy",
                    content: `${g(o.correctQuestionIds.length,o.incorrectQuestionIds.length)}%`,
                    contentColor: a.Blue
                })]
            }), t.jsx("div", {
                className: "maxWidth",
                children: t.jsx(j, {
                    style: {
                        fontSize: 20,
                        fontWeight: x.UltraBold
                    },
                    children: t.jsx("div", {
                        children: "Questions"
                    })
                })
            }), t.jsx("div", {
                children: u.sort((r, i) => r.resultData.accuracy > i.resultData.accuracy ? 1 : -1).map(r => t.jsx(L, {
                    question: r.question,
                    correct: r.resultData.correct,
                    incorrect: r.resultData.incorrect,
                    accuracy: r.resultData.accuracy
                }, r.question._id + "-" + o.name + "-breakdown"))
            })]
        })
    };
export {
    L as B, W as C, R as H, T as I, et as P, H as Q, a
};