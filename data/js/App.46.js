function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('4h4H+', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        Red: '#d32f2f',
        Green: '#388e3c',
        Blue: '#303f9f'
    };
}), b.register('Qz2bf', function(c, d) {
    a(c.exports, 'default', function() {
        return _A;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('P1KtI'),
        h = b('VNuyu'),
        i = b('Eh2Wh'),
        j = b('jS3EY5'),
        k = b('quE27'),
        l = b('hecDa'),
        m = b('jw1ib');
    let n, o, p, q, r, s, t = a => a;
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
    var _A = a => {
        const [B, C, D] = (0, k.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(u, {
                    children: [
                        (0, e.jsxs)(v, {
                            children: [
                                (0, e.jsxs)(w, {
                                    children: [
                                        (0, e.jsx)(x, {
                                            children: a.title
                                        }),
                                        a.description && (0, e.jsx)(y, {
                                            children: a.description
                                        })
                                    ]
                                }),
                                a.download ? (0, e.jsx)(z, {
                                    style: {
                                        marginLeft: 30
                                    },
                                    size: 'large',
                                    icon: (0, e.jsx)(j.default, {}),
                                    onClick: () => {
                                        (0, k.isUpgraded)() ? null == a || a.download(): C();
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
                    visible: B,
                    close: D
                })
            ]
        });
    };
}), b.register('TdznM', function(c, d) {
    a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('QZ0Z+'),
        h = b('Eh2Wh'),
        i = b('8KqQ+');
    let j, k, l, m = a => a;
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
`), h.FontWeights.Black, a => a.color ? a.color : i.default.Black);
    var _q = a => (0, e.jsxs)(n, {
        className: a.className,
        children: [
            null !== a.header && (0, e.jsx)(o, {
                children: a.header
            }),
            null !== a.content && (0, e.jsx)(p, {
                color: a.contentColor,
                children: a.content
            })
        ]
    });
}), b.register('WSTHs', function(c, d) {
    a(c.exports, 'default', function() {
        return _f;
    });
    let e;
    var _f = b('u4s09').default.div(e || (e = (a => a)`
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
`), a => a.preventScroll ? 'hidden' : 'auto');
}), b.register('HP1aQ', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('EC4am'),
        h = b('ZLehh');
    let i, j, k = a => a;
    const l = f.default.div(i || (i = k`
  display: flex;
  width: 100%;
  justify-content: space-between;
`)),
        m = f.default.div(j || (j = k`
  width: 100%;
`));
    var _n = a => (0, e.jsxs)(l, {
        children: [
            (0, e.jsx)(m, {
                children: (0, e.jsx)(g.default, {
                    question: a.question
                })
            }),
            (0, e.jsx)(h.default, {
                correct: a.correct,
                incorrect: a.incorrect,
                accuracy: a.accuracy
            })
        ]
    });
}), b.register('ZLehh', function(c, d) {
    a(c.exports, 'default', function() {
        return _v;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('QZ0Z+'),
        h = b('Dn89R'),
        i = b('8KqQ+'),
        j = b('4h4H+');
    let k, l, m, n, o, p = a => a;
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
    var _v = a => (0, e.jsxs)(q, {
        children: [
            (0, e.jsx)(h.default, {
                title: 'Correct',
                children: (0, e.jsx)(s, {
                    children: a.correct
                })
            }),
            (0, e.jsx)(h.default, {
                title: 'Incorrect',
                children: (0, e.jsx)(t, {
                    children: a.incorrect
                })
            }),
            (0, e.jsx)(h.default, {
                title: 'Accuracy',
                children: (0, e.jsx)(u, {
                    children: `${ a.accuracy }%`
                })
            })
        ]
    });
}), b.register('6IEcI', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('VNuyu'),
        i = b('quE27'),
        j = b('HP1aQ'),
        k = b('Eh2Wh'),
        l = b('4h4H+'),
        m = b('Qz2bf'),
        n = b('TdznM'),
        o = b('WSTHs');
    let p, q, r = a => a;
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
    var _u = a => {
        const {
            player: v,
            questions: w
        } = a, x = f.useMemo(() => {
            const y = new Set();
            v.correctQuestionIds.forEach(v => {
                y.add(v);
            }), v.incorrectQuestionIds.forEach(v => {
                y.add(v);
            });
            const z = [];
            return y.forEach(y => {
                const A = w.find(A => A._id === y);
                A && z.push(A);
            }), z;
        }, [
            w.length,
            v.correctQuestionIds.length,
            v.incorrectQuestionIds.length
        ]), y = f.useMemo(() => x.map(a => {
            let z = 0,
                A = 0;
            return v.correctQuestionIds.forEach(v => {
                v === a._id && z++;
            }), v.incorrectQuestionIds.forEach(v => {
                v === a._id && A++;
            }), {
                question: a,
                resultData: {
                    correct: z,
                    incorrect: A,
                    accuracy: (0, i.calculateAccuracy)(z, A)
                }
            };
        }), [
            x.length,
            v.correctQuestionIds.length,
            v.incorrectQuestionIds.length
        ]);
        return (0, e.jsxs)(o.default, {
            preventScroll: a.preventScroll,
            children: [
                (0, e.jsx)(m.default, {
                    title: v.name
                }),
                (0, e.jsxs)(s, {
                    children: [
                        (0, e.jsx)(t, {
                            header: 'Correct',
                            content: v.correctQuestionIds.length,
                            contentColor: l.default.Green
                        }),
                        (0, e.jsx)(t, {
                            header: 'Incorrect',
                            content: v.incorrectQuestionIds.length,
                            contentColor: l.default.Red
                        }),
                        (0, e.jsx)(t, {
                            header: 'Accuracy',
                            content: `${ (0, i.calculateAccuracy)(v.correctQuestionIds.length, v.incorrectQuestionIds.length) }%`,
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
                    children: y.sort((a, v) => a.resultData.accuracy > v.resultData.accuracy ? 1 : -1).map(a => (0, e.jsx)(j.default, {
                        question: a.question,
                        correct: a.resultData.correct,
                        incorrect: a.resultData.incorrect,
                        accuracy: a.resultData.accuracy
                    }, a.question._id + '-' + v.name + '-breakdown'))
                })
            ]
        });
    };
});