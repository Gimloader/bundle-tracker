function a(a, b, A, c) {
    Object.defineProperty(a, b, {
        get: A,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('ABRlx', function(b, A) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        Red: '#d32f2f',
        Green: '#388e3c',
        Blue: '#303f9f'
    };
}), b.register('1oJMT', function(A, B) {
    a(A.exports, 'default', function() {
        return y;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('IsmrL'),
        f = b('ExtIT'),
        g = b('gSUVO'),
        h = b('bzteU5'),
        i = b('PjB0f'),
        j = b('VsZIM'),
        k = b('0wLl2');
    let l, m, n, o, p, q, r = a => a;
    const s = d.default.div(l || (l = r`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`)),
        t = d.default.div(m || (m = r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`)),
        u = d.default.div(n || (n = r`
  display: flex;
  flex-direction: column;
`)),
        v = d.default.h2(o || (o = r`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${ 0 };
  margin-bottom: 0px;
  margin-top: 3px;
`), g.FontWeights.UltraBold),
        w = d.default.p(p || (p = r`
  margin-bottom: 0px;
  font-size: 20px;
`)),
        x = (0, d.default)(e.default)(q || (q = r`
  @media print {
    display: none;
  }
`));
    var y = a => {
        const [z, A, B] = (0, i.useBoolean)(!1);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)(s, {
                    children: [
                        (0, c.jsxs)(t, {
                            children: [
                                (0, c.jsxs)(u, {
                                    children: [
                                        (0, c.jsx)(v, {
                                            children: a.title
                                        }),
                                        a.description && (0, c.jsx)(w, {
                                            children: a.description
                                        })
                                    ]
                                }),
                                a.download ? (0, c.jsx)(x, {
                                    style: {
                                        marginLeft: 30
                                    },
                                    size: 'large',
                                    icon: (0, c.jsx)(h.default, {}),
                                    onClick: () => {
                                        (0, i.isUpgraded)() ? null == a || a.download(): A();
                                    },
                                    children: 'Export'
                                }) : null
                            ]
                        }),
                        (0, c.jsx)(f.default, {})
                    ]
                }),
                (0, c.jsx)(j.default, {
                    id: 'report export',
                    copy: {
                        title: 'Export reports with Pro',
                        description: (0, c.jsxs)(c.Fragment, {
                            children: [
                                'To export a game report to a spreadsheet file,',
                                ' ',
                                (0, c.jsxs)('b', {
                                    children: [
                                        'upgrade to ',
                                        k.COMPANY_NAME,
                                        ' Pro.'
                                    ]
                                })
                            ]
                        })
                    },
                    visible: z,
                    close: B
                })
            ]
        });
    };
}), b.register('/mQJs', function(u, w) {
    a(u.exports, 'default', function() {
        return o;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('f9f+a'),
        f = b('gSUVO'),
        g = b('lmfrI');
    let h, i, j, k = a => a;
    const l = (0, d.default)(e.default)(h || (h = k`
  margin-bottom: 10px !important;
`)),
        m = d.default.h2(i || (i = k`
  margin-bottom: -9px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        n = d.default.span(j || (j = k`
  font-size: 40px;
  font-weight: ${ 0 };
  color: ${ 0 };
`), f.FontWeights.Black, a => a.color ? a.color : g.default.Black);
    var o = a => (0, c.jsxs)(l, {
        className: a.className,
        children: [
            null !== a.header && (0, c.jsx)(m, {
                children: a.header
            }),
            null !== a.content && (0, c.jsx)(n, {
                color: a.contentColor,
                children: a.content
            })
        ]
    });
}), b.register('9rz8D', function(u, w) {
    a(u.exports, 'default', function() {
        return d;
    });
    let c;
    var d = b('h99Nu').default.div(c || (c = (a => a)`
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
}), b.register('7W7GT', function(u, w) {
    a(u.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('oczPp'),
        f = b('O5zf8');
    let g, h, i = a => a;
    const j = d.default.div(g || (g = i`
  display: flex;
  width: 100%;
  justify-content: space-between;
`)),
        k = d.default.div(h || (h = i`
  width: 100%;
`));
    var l = a => (0, c.jsxs)(j, {
        children: [
            (0, c.jsx)(k, {
                children: (0, c.jsx)(e.default, {
                    question: a.question
                })
            }),
            (0, c.jsx)(f.default, {
                correct: a.correct,
                incorrect: a.incorrect,
                accuracy: a.accuracy
            })
        ]
    });
}), b.register('O5zf8', function(u, w) {
    a(u.exports, 'default', function() {
        return t;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('f9f+a'),
        f = b('YfLmS'),
        g = b('lmfrI'),
        h = b('ABRlx');
    let i, j, k, l, m, n = a => a;
    const o = d.default.div(i || (i = n`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`)),
        p = (0, d.default)(e.default).attrs({
            bodyStyle: {
                textAlign: 'center',
                padding: 0
            }
        })(j || (j = n`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${ 0 };
  cursor: default;
  width: 100px !important;
`), g.default.Black),
        q = (0, d.default)(p)(k || (k = n`
  color: ${ 0 } !important;
  margin-left: 20px !important;
`), h.default.Green),
        r = (0, d.default)(p)(l || (l = n`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), h.default.Red),
        s = (0, d.default)(p)(m || (m = n`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), h.default.Blue);
    var t = a => (0, c.jsxs)(o, {
        children: [
            (0, c.jsx)(f.default, {
                title: 'Correct',
                children: (0, c.jsx)(q, {
                    children: a.correct
                })
            }),
            (0, c.jsx)(f.default, {
                title: 'Incorrect',
                children: (0, c.jsx)(r, {
                    children: a.incorrect
                })
            }),
            (0, c.jsx)(f.default, {
                title: 'Accuracy',
                children: (0, c.jsx)(s, {
                    children: `${ a.accuracy }%`
                })
            })
        ]
    });
}), b.register('9TAjB', function(u, w) {
    a(u.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('ExtIT'),
        g = b('PjB0f'),
        h = b('7W7GT'),
        i = b('gSUVO'),
        j = b('ABRlx'),
        k = b('1oJMT'),
        l = b('/mQJs'),
        m = b('9rz8D');
    let n, o, p = a => a;
    const q = e.default.div(n || (n = p`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`)),
        r = (0, e.default)(l.default)(o || (o = p`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`));
    var s = a => {
        const {
            player: t,
            questions: u
        } = v, w = d.useMemo(() => {
            const x = new Set();
            t.correctQuestionIds.forEach(t => {
                x.add(t);
            }), t.incorrectQuestionIds.forEach(t => {
                x.add(t);
            });
            const y = [];
            return x.forEach(x => {
                const z = u.find(z => z._id === x);
                z && y.push(z);
            }), y;
        }, [
            u.length,
            t.correctQuestionIds.length,
            t.incorrectQuestionIds.length
        ]), x = d.useMemo(() => w.map(v => {
            let y = 0,
                z = 0;
            return t.correctQuestionIds.forEach(t => {
                t === v._id && y++;
            }), t.incorrectQuestionIds.forEach(t => {
                t === v._id && z++;
            }), {
                question: v,
                resultData: {
                    correct: y,
                    incorrect: z,
                    accuracy: (0, g.calculateAccuracy)(y, z)
                }
            };
        }), [
            w.length,
            t.correctQuestionIds.length,
            t.incorrectQuestionIds.length
        ]);
        return (0, c.jsxs)(m.default, {
            preventScroll: v.preventScroll,
            children: [
                (0, c.jsx)(k.default, {
                    title: t.name
                }),
                (0, c.jsxs)(q, {
                    children: [
                        (0, c.jsx)(r, {
                            header: 'Correct',
                            content: t.correctQuestionIds.length,
                            contentColor: j.default.Green
                        }),
                        (0, c.jsx)(r, {
                            header: 'Incorrect',
                            content: t.incorrectQuestionIds.length,
                            contentColor: j.default.Red
                        }),
                        (0, c.jsx)(r, {
                            header: 'Accuracy',
                            content: `${ (0, g.calculateAccuracy)(t.correctQuestionIds.length, t.incorrectQuestionIds.length) }%`,
                            contentColor: j.default.Blue
                        })
                    ]
                }),
                (0, c.jsx)('div', {
                    className: 'maxWidth',
                    children: (0, c.jsx)(f.default, {
                        style: {
                            fontSize: 20,
                            fontWeight: i.FontWeights.UltraBold
                        },
                        children: (0, c.jsx)('div', {
                            children: 'Questions'
                        })
                    })
                }),
                (0, c.jsx)('div', {
                    children: x.sort((v, t) => v.resultData.accuracy > t.resultData.accuracy ? 1 : -1).map(v => (0, c.jsx)(h.default, {
                        question: v.question,
                        correct: v.resultData.correct,
                        incorrect: v.resultData.incorrect,
                        accuracy: v.resultData.accuracy
                    }, v.question._id + '-' + t.name + '-breakdown'))
                })
            ]
        });
    };
});