import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t,
    n,
    v as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./tooltip.js";
import {
    t as o
} from "./button.js";
import {
    t as s
} from "./card.js";
import {
    t as c
} from "./Question.js";
import {
    t as l
} from "./DownloadOutlined.js";
import {
    n as u
} from "./Company.js";
import {
    t as d
} from "./jsx-runtime.js";
import {
    l as f,
    n as p,
    s as m,
    y as h
} from "./_index.js";
import {
    n as g
} from "./App-2.js";
var _ = e(i()),
    v = {
        Red: `#d32f2f`,
        Green: `#388e3c`,
        Blue: `#303f9f`
    },
    y = d(),
    b = f.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`,
    x = f(s).attrs({
        bodyStyle: {
            textAlign: `center`,
            padding: 0
        }
    })`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${p.Black};
  cursor: default;
  width: 100px !important;
`,
    S = f(x)`
  color: ${v.Green} !important;
  margin-left: 20px !important;
`,
    C = f(x)`
  color: ${v.Red} !important;
  margin-left: 10px !important;
`,
    w = f(x)`
  color: ${v.Blue} !important;
  margin-left: 10px !important;
`,
    T = e => (0, y.jsxs)(b, {
        children: [(0, y.jsx)(a, {
            title: `Correct`,
            children: (0, y.jsx)(S, {
                children: e.correct
            })
        }), (0, y.jsx)(a, {
            title: `Incorrect`,
            children: (0, y.jsx)(C, {
                children: e.incorrect
            })
        }), (0, y.jsx)(a, {
            title: `Accuracy`,
            children: (0, y.jsx)(w, {
                children: `${e.accuracy}%`
            })
        })]
    }),
    E = f.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,
    D = f.div`
  width: 100%;
`,
    O = e => (0, y.jsxs)(E, {
        children: [(0, y.jsx)(D, {
            children: (0, y.jsx)(c, {
                question: e.question
            })
        }), (0, y.jsx)(T, {
            correct: e.correct,
            incorrect: e.incorrect,
            accuracy: e.accuracy
        })]
    }),
    k = f.div`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`,
    A = f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,
    j = f.div`
  display: flex;
  flex-direction: column;
`,
    M = f.h2`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${m.UltraBold};
  margin-bottom: 0px;
  margin-top: 3px;
`,
    N = f.p`
  margin-bottom: 0px;
  font-size: 20px;
`,
    P = f(o)`
  @media print {
    display: none;
  }
`,
    F = e => {
        let [n, i, a] = t(!1);
        return (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsxs)(k, {
                children: [(0, y.jsxs)(A, {
                    children: [(0, y.jsxs)(j, {
                        children: [(0, y.jsx)(M, {
                            children: e.title
                        }), e.description && (0, y.jsx)(N, {
                            children: e.description
                        })]
                    }), e.download ? (0, y.jsx)(P, {
                        style: {
                            marginLeft: 30
                        },
                        size: `large`,
                        icon: (0, y.jsx)(l, {}),
                        onClick: () => {
                            r() ? e == null || e.download() : i()
                        },
                        children: `Export`
                    }) : null]
                }), (0, y.jsx)(h, {})]
            }), (0, y.jsx)(g, {
                id: `report export`,
                copy: {
                    title: `Export reports with Pro`,
                    description: (0, y.jsxs)(y.Fragment, {
                        children: [`To export a game report to a spreadsheet file,`, ` `, (0, y.jsxs)(`b`, {
                            children: [`upgrade to `, u, ` Pro.`]
                        })]
                    })
                },
                visible: n,
                close: a
            })]
        })
    },
    I = f(s)`
  margin-bottom: 10px !important;
`,
    L = f.h2`
  margin-bottom: -9px;
  font-weight: ${m.Bold};
`,
    R = f.span`
  font-size: 40px;
  font-weight: ${m.Black};
  color: ${e=>e.color?e.color:p.Black};
`,
    z = e => (0, y.jsxs)(I, {
        className: e.className,
        children: [e.header !== null && (0, y.jsx)(L, {
            children: e.header
        }), e.content !== null && (0, y.jsx)(R, {
            color: e.contentColor,
            children: e.content
        })]
    }),
    B = f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: ${e=>e.preventScroll?`hidden`:`auto`};
  overflow-x: hidden;
  @media print {
    overflow: visible;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`,
    V = f.div`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`,
    H = f(z)`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`,
    U = e => {
        let {
            player: t,
            questions: r
        } = e, i = _.useMemo(() => {
            let e = new Set;
            t.correctQuestionIds.forEach(t => {
                e.add(t)
            }), t.incorrectQuestionIds.forEach(t => {
                e.add(t)
            });
            let n = [];
            return e.forEach(e => {
                let t = r.find(t => t._id === e);
                t && n.push(t)
            }), n
        }, [r.length, t.correctQuestionIds.length, t.incorrectQuestionIds.length]), a = _.useMemo(() => i.map(e => {
            let r = 0,
                i = 0;
            return t.correctQuestionIds.forEach(t => {
                t === e._id && r++
            }), t.incorrectQuestionIds.forEach(t => {
                t === e._id && i++
            }), {
                question: e,
                resultData: {
                    correct: r,
                    incorrect: i,
                    accuracy: n(r, i)
                }
            }
        }), [i.length, t.correctQuestionIds.length, t.incorrectQuestionIds.length]);
        return (0, y.jsxs)(B, {
            preventScroll: e.preventScroll,
            children: [(0, y.jsx)(F, {
                title: t.name
            }), (0, y.jsxs)(V, {
                children: [(0, y.jsx)(H, {
                    header: `Correct`,
                    content: t.correctQuestionIds.length,
                    contentColor: v.Green
                }), (0, y.jsx)(H, {
                    header: `Incorrect`,
                    content: t.incorrectQuestionIds.length,
                    contentColor: v.Red
                }), (0, y.jsx)(H, {
                    header: `Accuracy`,
                    content: `${n(t.correctQuestionIds.length,t.incorrectQuestionIds.length)}%`,
                    contentColor: v.Blue
                })]
            }), (0, y.jsx)(`div`, {
                className: `maxWidth`,
                children: (0, y.jsx)(h, {
                    style: {
                        fontSize: 20,
                        fontWeight: m.UltraBold
                    },
                    children: (0, y.jsx)(`div`, {
                        children: `Questions`
                    })
                })
            }), (0, y.jsx)(`div`, {
                children: a.sort((e, t) => e.resultData.accuracy > t.resultData.accuracy ? 1 : -1).map(e => (0, y.jsx)(O, {
                    question: e.question,
                    correct: e.resultData.correct,
                    incorrect: e.resultData.incorrect,
                    accuracy: e.resultData.accuracy
                }, e.question._id + `-` + t.name + `-breakdown`))
            })]
        })
    };
export {
    O as a, F as i, B as n, T as o, z as r, v as s, U as t
};