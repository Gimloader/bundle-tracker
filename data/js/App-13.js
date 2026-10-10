import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    G as n,
    Q as r,
    S as i,
    n as a,
    o,
    t as ee
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    c,
    s as l
} from "./assertThisInitialized.js";
import {
    l as u
} from "./dist-3.js";
import {
    r as d
} from "./compact-item.js";
import {
    t as f
} from "./card.js";
import {
    t as te
} from "./spin.js";
import {
    t as ne
} from "./QuestionCircleOutlined.js";
import {
    n as p,
    t as m
} from "./App-4.js";
import {
    t as h
} from "./TeamOutlined.js";
import "./Paths.js";
import {
    f as g,
    p as _,
    t as v
} from "./decorate.js";
import {
    t as y
} from "./jsx-runtime.js";
import {
    b,
    c as re,
    l as x,
    n as S,
    s as C,
    y as w
} from "./_index.js";
import {
    t as T
} from "./AccessibleAnchor.js";
import {
    r as E
} from "./mobxreact.esm.js";
import {
    t as D
} from "./NavigateTo.js";
import {
    t as O
} from "./FillRemainingSpace.js";
import {
    t as k
} from "./ImagePreview.js";
import {
    t as A
} from "./MenuItem.js";
import {
    t as j
} from "./papaparse.min.js";
import {
    a as M,
    i as N,
    n as P,
    o as F,
    r as I,
    s as L,
    t as R
} from "./Player.js";
var z = {
    icon: {
        tag: `svg`,
        attrs: {
            viewBox: `64 64 896 896`,
            focusable: `false`
        },
        children: [{
            tag: `path`,
            attrs: {
                d: `M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z`
            }
        }]
    },
    name: `project`,
    theme: `outlined`
};
c();
var B = e(s()),
    V = B.forwardRef(function(e, t) {
        return B.createElement(d, l({}, e, {
            ref: t,
            icon: z
        }))
    }),
    H = function(e) {
        return e.general = `general`, e.breakdown = `breakdown`, e.player = `player`, e.overview = `overview`, e
    }(H || {}),
    U = class {
        constructor() {
            this.currentTab = H.breakdown, this.currentPlayer = null, g(this)
        }
    };
v([_], U.prototype, `currentTab`, void 0), v([_], U.prototype, `currentPlayer`, void 0);
var W = {
        navigation: new U
    },
    G = B.createContext(W),
    K = y(),
    q = (e, t) => {
        var n = e.name.toLowerCase(),
            r = t.name.toLowerCase();
        return n < r ? -1 : +(n > r)
    },
    J = E(e => {
        let {
            gameReport: t
        } = e, {
            navigation: n
        } = B.useContext(G);
        return (0, K.jsx)(K.Fragment, {
            children: t.players.sort(q).map((e, t) => (0, K.jsx)(A, {
                icon: null,
                title: e.name,
                onClick: () => {
                    n.currentTab = H.player, n.currentPlayer = t
                },
                selected: n.currentTab === H.player && n.currentPlayer === t
            }, t))
        })
    }),
    Y = e(r()),
    X = x.div.attrs({
        className: `scroll-y`
    })`
  width: 390px;
  background: ${S.White};
  border-right: 1px solid ${S.BorderGray};
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`,
    ie = x.div`
  font-weight: ${C.UltraBold};
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`,
    ae = x.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`,
    oe = E(e => {
        let {
            gameReport: t
        } = e, {
            navigation: n
        } = B.useContext(G), r = t.expiration ? (0, Y.default)(t.expiration) : (0, Y.default)(o(t._id)).add(546, `days`), a = r.diff((0, Y.default)(o(t._id)), `days`), s = !(0, Y.default)().isAfter(r) && Math.abs((0, Y.default)().diff(r, `months`)) < 3;
        return (0, K.jsxs)(X, {
            children: [(0, K.jsx)(ee, {
                title: `Report - ${t.game.title} - ${t.players.length} ${i(`participant`,t.players.length)} - ${(0,Y.default)(t.dateCreated).format(`L`)}`
            }), (0, K.jsx)(p, {}), (0, K.jsxs)(`div`, {
                style: {
                    display: `flex`,
                    alignItems: `center`,
                    flexDirection: `column`,
                    textAlign: `center`,
                    padding: 15
                },
                children: [(0, K.jsx)(k, {
                    size: 150,
                    image: t.game.gif,
                    style: {
                        marginTop: 27
                    }
                }), (0, K.jsx)(T, {
                    style: {
                        color: S.Black,
                        textDecoration: `none`
                    },
                    to: `/view/${t.game._id}`,
                    children: (0, K.jsx)(ie, {
                        children: t.game.title
                    })
                }), (0, K.jsxs)(ae, {
                    children: [t.players.length + ` ` + i(`participant`, t.players.length), ` `, `-`, ` `, t.mapAssignment ? (0, K.jsx)(T, {
                        to: `/assignment/${t.mapAssignment}`,
                        children: `Assignment`
                    }) : (0, Y.default)(t.dateCreated).format(`MMMM Do [at] LT`)]
                })]
            }), s ? (0, K.jsx)(b, {
                banner: !0,
                message: `${a>=365?`Reports are automatically deleted after 1.5 years. `:``}This report will be deleted on ${r.format(`MMMM Do`)}.`
            }) : null, (0, K.jsx)(w, {
                style: {
                    marginBottom: 10
                }
            }), (0, K.jsxs)(`div`, {
                children: [(0, K.jsx)(A, {
                    icon: ne,
                    onClick: () => n.currentTab = H.breakdown,
                    title: `Question Breakdown`,
                    selected: n.currentTab === H.breakdown
                }, `breakdown`), (0, K.jsx)(A, {
                    icon: h,
                    onClick: () => n.currentTab = H.overview,
                    title: `Student Overview`,
                    selected: n.currentTab === H.overview
                }, `studentOverview`), (0, K.jsx)(A, {
                    icon: V,
                    onClick: () => n.currentTab = H.general,
                    title: `Quick Stats`,
                    selected: n.currentTab === H.general
                }, `overview`), (0, K.jsx)(w, {}), (0, K.jsx)(J, {
                    gameReport: t
                })]
            })]
        })
    }),
    se = e => {
        let {
            gameReport: t
        } = e, n = B.useMemo(() => t.players.reduce((e, t) => t.correctQuestionIds.length + e, 0), [t.players.length]), r = B.useMemo(() => t.players.reduce((e, t) => t.incorrectQuestionIds.length + e, 0), [t.players.length]), i = B.useMemo(() => a(n, r), [n, r]);
        return (0, K.jsx)(P, {
            children: (0, K.jsxs)(`div`, {
                children: [(0, K.jsx)(N, {
                    title: `Quick Stats`,
                    description: `The stats on how the game went down`
                }), (0, K.jsx)(I, {
                    header: `Questions Answered Correctly`,
                    content: n,
                    contentColor: L.Green
                }), (0, K.jsx)(I, {
                    header: `Questions Answered Incorrectly`,
                    content: r,
                    contentColor: L.Red
                }), (0, K.jsx)(I, {
                    header: `Accuracy`,
                    content: `${i}%`,
                    contentColor: L.Blue
                })]
            })
        })
    },
    Z = e(j()),
    Q = e => {
        let t = new Blob([e.csv], {
                type: `text/csv`
            }),
            n = URL.createObjectURL(t),
            r = document.createElement(`a`);
        r.href = n;
        let i = e.fileName;
        i = i.replace(/ /g, `_`), r.download = `${i}.csv`, r.click()
    },
    ce = e => {
        let {
            players: t,
            questions: n
        } = e.gameReport, r = B.useMemo(() => n.map(e => {
            let n = 0,
                r = 0;
            return t.forEach(t => {
                t.correctQuestionIds.forEach(t => {
                    t === e._id && n++
                }), t.incorrectQuestionIds.forEach(t => {
                    t === e._id && r++
                })
            }), {
                question: e,
                resultData: {
                    correct: n,
                    incorrect: r,
                    accuracy: a(n, r)
                }
            }
        }), [t.length, n.length]).sort((e, t) => e.resultData.accuracy > t.resultData.accuracy ? 1 : -1);
        return (0, K.jsxs)(P, {
            children: [(0, K.jsx)(N, {
                title: `Question Breakdown`,
                description: `See which questions students have down or need help with`,
                download: () => {
                    Q({
                        csv: Z.unparse(r.map(e => {
                            var t;
                            return {
                                Question: ((t = e.question) == null ? void 0 : t.text) ?? `Media Question`,
                                "Correct Count": e.resultData.correct,
                                "Incorrect Count": e.resultData.incorrect,
                                Accuracy: e.resultData.accuracy + `%`
                            }
                        })),
                        fileName: `${e.gameReport.game.title} Question Breakdown`
                    })
                }
            }), (0, K.jsx)(`div`, {
                children: r.map(e => (0, K.jsx)(M, {
                    question: e.question,
                    correct: e.resultData.correct,
                    incorrect: e.resultData.incorrect,
                    accuracy: e.resultData.accuracy
                }, e.question._id + `-breakdown`))
            })]
        })
    },
    le = x.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`,
    $ = x(f)`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${C.Bold} !important;
  color: ${S.Black} !important;
`,
    ue = E(e => {
        let {
            gameReport: t
        } = e, {
            navigation: n
        } = B.useContext(G);
        return (0, K.jsxs)(P, {
            children: [(0, K.jsx)(N, {
                title: `Student Overview`,
                description: `Quick look on how each student performed`,
                download: () => {
                    Q({
                        csv: Z.unparse(t.players.map(e => {
                            let t = a(e.correctQuestionIds.length, e.incorrectQuestionIds.length);
                            return {
                                "Player Name": e.name,
                                "Questions Answered Correctly": e.correctQuestionIds.length ?? 0,
                                "Questions Answered Incorrectly": e.incorrectQuestionIds.length ?? 0,
                                Accuracy: t + `%`
                            }
                        })),
                        fileName: `${e.gameReport.game.title} Student Overview`
                    })
                }
            }), (0, K.jsx)(`div`, {
                children: t.players.map((e, t) => {
                    let r = a(e.correctQuestionIds.length, e.incorrectQuestionIds.length);
                    return (0, K.jsxs)(le, {
                        children: [(0, K.jsx)($, {
                            hoverable: !0,
                            onClick: () => {
                                n.currentPlayer = t, n.currentTab = H.player
                            },
                            children: (0, K.jsx)(`div`, {
                                children: e.name
                            })
                        }), (0, K.jsx)(F, {
                            correct: e.correctQuestionIds.length,
                            incorrect: e.incorrectQuestionIds.length,
                            accuracy: r
                        })]
                    }, `student-overview-student-${t}`)
                })
            })]
        })
    }),
    de = E(e => {
        let {
            navigation: t
        } = B.useContext(G), {
            gameReport: n
        } = e, {
            currentTab: r,
            currentPlayer: i
        } = t;
        return (0, K.jsxs)(fe, {
            children: [(0, K.jsx)(p, {}), r === H.general ? (0, K.jsx)(se, {
                gameReport: n
            }) : r === H.overview ? (0, K.jsx)(ue, {
                gameReport: n
            }) : r === H.breakdown ? (0, K.jsx)(ce, {
                gameReport: n
            }) : r === H.player && n.players[i] ? (0, K.jsx)(R, {
                player: n.players[i],
                questions: n.questions
            }) : null]
        }, `${r}-${i}`)
    }),
    fe = x.div.attrs({
        className: `maxWidth scroll-y`
    })`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`,
    pe = x.div`
  height: 100%;
  display: flex;
  background: ${e=>e.customBackgroundColor||S.Snow};
  font-family: ${re.SFPro};
  color: ${S.Black};
`,
    me = () => {
        let [e, r] = B.useState(null), {
            id: i
        } = u();
        return B.useEffect(() => {
            t({
                url: `/api/game-report/fetch/${i}`,
                method: `GET`,
                success: e => {
                    r(e)
                },
                error: () => n({
                    title: `Failed to fetch report`,
                    content: `Please try again or contact support`,
                    onOk: () => D(`/me`)
                })
            })
        }, []), (0, K.jsx)(he, {
            children: (0, K.jsxs)(pe, {
                children: [(0, K.jsx)(m, {}), e ? (0, K.jsxs)(`div`, {
                    className: `maxAll flex`,
                    style: {
                        flex: 1,
                        overflow: `hidden`
                    },
                    children: [(0, K.jsx)(oe, {
                        gameReport: e
                    }), (0, K.jsx)(de, {
                        gameReport: e
                    })]
                }) : (0, K.jsx)(`div`, {
                    className: `flex-center maxAll`,
                    children: (0, K.jsx)(te, {
                        size: `large`
                    })
                })]
            })
        })
    },
    he = x(O)`
  @media print {
    height: auto !important;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`;
export {
    me as
    default
};