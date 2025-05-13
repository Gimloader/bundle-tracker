function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        Red: '#d32f2f',
        Green: '#388e3c',
        Blue: '#303f9f'
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _A;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....');
    let n, o, p, q, r, s, t = u => u;
    const u = f.default.div(n || (n = t`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`)),
        v = f.default.div(o || (o = t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`)),
        w = f.default.div(p || (p = t`
  display: flex;
  flex-direction: column;
`)),
        x = f.default.h2(q || (q = t`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${ 0 };
  margin-bottom: 0px;
  margin-top: 3px;
`), i.FontWeights.UltraBold),
        y = f.default.p(r || (r = t`
  margin-bottom: 0px;
  font-size: 20px;
`)),
        z = (0, f.default)(g.default)(s || (s = t`
  @media print {
    display: none;
  }
`));
    var _A = B => {
        const [C, D, E] = (0, k.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(u, {
                    children: [
                        (0, e.jsxs)(v, {
                            children: [
                                (0, e.jsxs)(w, {
                                    children: [
                                        (0, e.jsx)(x, {
                                            children: B.title
                                        }),
                                        B.description && (0, e.jsx)(y, {
                                            children: B.description
                                        })
                                    ]
                                }),
                                B.download ? (0, e.jsx)(z, {
                                    style: {
                                        marginLeft: 30
                                    },
                                    size: 'large',
                                    icon: (0, e.jsx)(j.default, {}),
                                    onClick: () => {
                                        (0, k.isUpgraded)() ? null == B || B.download(): D();
                                    },
                                    children: 'Export'
                                }) : null
                            ]
                        }),
                        (0, e.jsx)(h.default, {})
                    ]
                }),
                (0, e.jsx)(l.default, {
                    id: 'report export',
                    copy: {
                        title: 'Export reports with Pro',
                        description: (0, e.jsxs)(e.Fragment, {
                            children: [
                                'To export a game report to a spreadsheet file,',
                                ' ',
                                (0, e.jsxs)('b', {
                                    children: [
                                        'upgrade to ',
                                        m.COMPANY_NAME,
                                        ' Pro.'
                                    ]
                                })
                            ]
                        })
                    },
                    visible: C,
                    close: E
                })
            ]
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    let j, k, l, m = n => n;
    const n = (0, f.default)(g.default)(j || (j = m`
  margin-bottom: 10px !important;
`)),
        o = f.default.h2(k || (k = m`
  margin-bottom: -9px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold),
        p = f.default.span(l || (l = m`
  font-size: 40px;
  font-weight: ${ 0 };
  color: ${ 0 };
`), h.FontWeights.Black, q => q.color ? q.color : i.default.Black);
    var _q = r => (0, e.jsxs)(n, {
        className: r.className,
        children: [
            null !== r.header && (0, e.jsx)(o, {
                children: r.header
            }),
            null !== r.content && (0, e.jsx)(p, {
                color: r.contentColor,
                children: r.content
            })
        ]
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    let e;
    var _f = b('.....').default.div(e || (e = (g => g)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: ${ 0 };
  overflow-x: hidden;
  @media print {
    overflow: visible;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`), g => g.preventScroll ? 'hidden' : 'auto');
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....');
    let i, j, k = l => l;
    const l = f.default.div(i || (i = k`
  display: flex;
  width: 100%;
  justify-content: space-between;
`)),
        m = f.default.div(j || (j = k`
  width: 100%;
`));
    var _n = o => (0, e.jsxs)(l, {
        children: [
            (0, e.jsx)(m, {
                children: (0, e.jsx)(g.default, {
                    question: o.question
                })
            }),
            (0, e.jsx)(h.default, {
                correct: o.correct,
                incorrect: o.incorrect,
                accuracy: o.accuracy
            })
        ]
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _v;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....');
    let k, l, m, n, o, p = q => q;
    const q = f.default.div(k || (k = p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`)),
        r = (0, f.default)(g.default).attrs({
            bodyStyle: {
                textAlign: 'center',
                padding: 0
            }
        })(l || (l = p`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${ 0 };
  cursor: default;
  width: 100px !important;
`), i.default.Black),
        s = (0, f.default)(r)(m || (m = p`
  color: ${ 0 } !important;
  margin-left: 20px !important;
`), j.default.Green),
        t = (0, f.default)(r)(n || (n = p`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), j.default.Red),
        u = (0, f.default)(r)(o || (o = p`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), j.default.Blue);
    var _v = w => (0, e.jsxs)(q, {
        children: [
            (0, e.jsx)(h.default, {
                title: 'Correct',
                children: (0, e.jsx)(s, {
                    children: w.correct
                })
            }),
            (0, e.jsx)(h.default, {
                title: 'Incorrect',
                children: (0, e.jsx)(t, {
                    children: w.incorrect
                })
            }),
            (0, e.jsx)(h.default, {
                title: 'Accuracy',
                children: (0, e.jsx)(u, {
                    children: `${ w.accuracy }%`
                })
            })
        ]
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....');
    let p, q, r = s => s;
    const s = g.default.div(p || (p = r`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`)),
        t = (0, g.default)(n.default)(q || (q = r`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`));
    var _u = v => {
        const {
            player: w,
            questions: x
        } = v, y = f.useMemo(() => {
            const z = new Set();
            w.correctQuestionIds.forEach(A => {
                z.add(A);
            }), w.incorrectQuestionIds.forEach(A => {
                z.add(A);
            });
            const A = [];
            return z.forEach(B => {
                const C = x.find(D => D._id === B);
                C && A.push(C);
            }), A;
        }, [
            x.length,
            w.correctQuestionIds.length,
            w.incorrectQuestionIds.length
        ]), z = f.useMemo(() => y.map(A => {
            let B = 0,
                C = 0;
            return w.correctQuestionIds.forEach(D => {
                D === A._id && B++;
            }), w.incorrectQuestionIds.forEach(D => {
                D === A._id && C++;
            }), {
                question: A,
                resultData: {
                    correct: B,
                    incorrect: C,
                    accuracy: (0, i.calculateAccuracy)(B, C)
                }
            };
        }), [
            y.length,
            w.correctQuestionIds.length,
            w.incorrectQuestionIds.length
        ]);
        return (0, e.jsxs)(o.default, {
            preventScroll: v.preventScroll,
            children: [
                (0, e.jsx)(m.default, {
                    title: w.name
                }),
                (0, e.jsxs)(s, {
                    children: [
                        (0, e.jsx)(t, {
                            header: 'Correct',
                            content: w.correctQuestionIds.length,
                            contentColor: l.default.Green
                        }),
                        (0, e.jsx)(t, {
                            header: 'Incorrect',
                            content: w.incorrectQuestionIds.length,
                            contentColor: l.default.Red
                        }),
                        (0, e.jsx)(t, {
                            header: 'Accuracy',
                            content: `${ (0, i.calculateAccuracy)(w.correctQuestionIds.length, w.incorrectQuestionIds.length) }%`,
                            contentColor: l.default.Blue
                        })
                    ]
                }),
                (0, e.jsx)('div', {
                    className: 'maxWidth',
                    children: (0, e.jsx)(h.default, {
                        style: {
                            fontSize: 20,
                            fontWeight: k.FontWeights.UltraBold
                        },
                        children: (0, e.jsx)('div', {
                            children: 'Questions'
                        })
                    })
                }),
                (0, e.jsx)('div', {
                    children: z.sort((A, B) => A.resultData.accuracy > B.resultData.accuracy ? 1 : -1).map(A => (0, e.jsx)(j.default, {
                        question: A.question,
                        correct: A.resultData.correct,
                        incorrect: A.resultData.incorrect,
                        accuracy: A.resultData.accuracy
                    }, A.question._id + '-' + w.name + '-breakdown'))
                })
            ]
        });
    };
});