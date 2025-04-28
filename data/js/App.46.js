function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('htSmB', function(b, c) {
    _x(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        Red: '#d32f2f',
        Green: '#388e3c',
        Blue: '#303f9f'
    };
}), a.register('ERGdH', function(b, c) {
    _x(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('b5kvC'),
        i = a('PElTf4'),
        j = a('PMl60'),
        k = a('BtZXP'),
        l = a('hHkFq');
    let m, n, o, p, q, r, s = _x => _x;
    const t = e.default.div(m || (m = s`
  display: flex;
  flex-direction: column;
  min-height: max-content;
`)),
        u = e.default.div(n || (n = s`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`)),
        v = e.default.div(o || (o = s`
  display: flex;
  flex-direction: column;
`)),
        w = e.default.h2(p || (p = s`
  font-size: 46px;
  line-height: 46px;
  font-weight: ${ 0 };
  margin-bottom: 0px;
  margin-top: 3px;
`), h.FontWeights.UltraBold),
        x = e.default.p(q || (q = s`
  margin-bottom: 0px;
  font-size: 20px;
`)),
        y = (0, e.default)(f.default)(r || (r = s`
  @media print {
    display: none;
  }
`));
    var _z = _x => {
        const [A, B, C] = (0, j.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(t, {
                    children: [
                        (0, d.jsxs)(u, {
                            children: [
                                (0, d.jsxs)(v, {
                                    children: [
                                        (0, d.jsx)(w, {
                                            children: _x.title
                                        }),
                                        _x.description && (0, d.jsx)(x, {
                                            children: _x.description
                                        })
                                    ]
                                }),
                                _x.download ? (0, d.jsx)(y, {
                                    style: {
                                        marginLeft: 30
                                    },
                                    size: 'large',
                                    icon: (0, d.jsx)(i.default, {}),
                                    onClick: () => {
                                        (0, j.isUpgraded)() ? null == _x || _x.download(): B();
                                    },
                                    children: 'Export'
                                }) : null
                            ]
                        }),
                        (0, d.jsx)(g.default, {})
                    ]
                }),
                (0, d.jsx)(k.default, {
                    id: 'report export',
                    copy: {
                        title: 'Export reports with Pro',
                        description: (0, d.jsxs)(d.Fragment, {
                            children: [
                                'To export a game report to a spreadsheet file,',
                                ' ',
                                (0, d.jsxs)('b', {
                                    children: [
                                        'upgrade to ',
                                        l.COMPANY_NAME,
                                        ' Pro.'
                                    ]
                                })
                            ]
                        })
                    },
                    visible: A,
                    close: C
                })
            ]
        });
    };
}), a.register('r2OBp', function(b, c) {
    _x(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('oXQNI'),
        g = a('b5kvC'),
        h = a('sHRDd');
    let i, j, k, l = _x => _x;
    const m = (0, e.default)(f.default)(i || (i = l`
  margin-bottom: 10px !important;
`)),
        n = e.default.h2(j || (j = l`
  margin-bottom: -9px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        o = e.default.span(k || (k = l`
  font-size: 40px;
  font-weight: ${ 0 };
  color: ${ 0 };
`), g.FontWeights.Black, _x => _x.color ? _x.color : h.default.Black);
    var _p = _x => (0, d.jsxs)(m, {
        className: _x.className,
        children: [
            null !== _x.header && (0, d.jsx)(n, {
                children: _x.header
            }),
            null !== _x.content && (0, d.jsx)(o, {
                color: _x.contentColor,
                children: _x.content
            })
        ]
    });
}), a.register('smHLt', function(b, c) {
    _x(b.exports, 'default', function() {
        return _e;
    });
    let d;
    var _e = a('Axq+p').default.div(d || (d = (_x => _x)`
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
`), _x => _x.preventScroll ? 'hidden' : 'auto');
}), a.register('YZWWM', function(b, c) {
    _x(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('+0Sy50'),
        g = a('GHMZl');
    let h, i, j = _x => _x;
    const k = e.default.div(h || (h = j`
  display: flex;
  width: 100%;
  justify-content: space-between;
`)),
        l = e.default.div(i || (i = j`
  width: 100%;
`));
    var _m = _x => (0, d.jsxs)(k, {
        children: [
            (0, d.jsx)(l, {
                children: (0, d.jsx)(f.default, {
                    question: _x.question
                })
            }),
            (0, d.jsx)(g.default, {
                correct: _x.correct,
                incorrect: _x.incorrect,
                accuracy: _x.accuracy
            })
        ]
    });
}), a.register('GHMZl', function(b, c) {
    _x(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('oXQNI'),
        g = a('ijg0s'),
        h = a('sHRDd'),
        i = a('htSmB');
    let j, k, l, m, n, o = _x => _x;
    const p = e.default.div(j || (j = o`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 330px;

  @media print {
    break-inside: avoid;
  }
`)),
        q = (0, e.default)(f.default).attrs({
            bodyStyle: {
                textAlign: 'center',
                padding: 0
            }
        })(k || (k = o`
  text-align: center;
  font-size: 20px !important;
  padding: 7px 0px !important;
  color: ${ 0 };
  cursor: default;
  width: 100px !important;
`), h.default.Black),
        r = (0, e.default)(q)(l || (l = o`
  color: ${ 0 } !important;
  margin-left: 20px !important;
`), i.default.Green),
        s = (0, e.default)(q)(m || (m = o`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), i.default.Red),
        t = (0, e.default)(q)(n || (n = o`
  color: ${ 0 } !important;
  margin-left: 10px !important;
`), i.default.Blue);
    var _u = _x => (0, d.jsxs)(p, {
        children: [
            (0, d.jsx)(g.default, {
                title: 'Correct',
                children: (0, d.jsx)(r, {
                    children: _x.correct
                })
            }),
            (0, d.jsx)(g.default, {
                title: 'Incorrect',
                children: (0, d.jsx)(s, {
                    children: _x.incorrect
                })
            }),
            (0, d.jsx)(g.default, {
                title: 'Accuracy',
                children: (0, d.jsx)(t, {
                    children: `${ _x.accuracy }%`
                })
            })
        ]
    });
}), a.register('sjiOn', function(b, c) {
    _x(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('fmVdR'),
        h = a('PMl60'),
        i = a('YZWWM'),
        j = a('b5kvC'),
        k = a('htSmB'),
        l = a('ERGdH'),
        m = a('r2OBp'),
        n = a('smHLt');
    let o, p, q = _x => _x;
    const r = f.default.div(o || (o = q`
  display: flex;
  justify-content: space-around;
  min-height: max-content;
`)),
        s = (0, f.default)(m.default)(p || (p = q`
  flex-basis: 33%;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`));
    var _t = _x => {
        const {
            player: u,
            questions: v
        } = _x, w = e.useMemo(() => {
            const _x = new Set();
            u.correctQuestionIds.forEach(u => {
                _x.add(u);
            }), u.incorrectQuestionIds.forEach(u => {
                _x.add(u);
            });
            const y = [];
            return _x.forEach(_x => {
                const z = v.find(z => z._id === _x);
                z && y.push(z);
            }), y;
        }, [
            v.length,
            u.correctQuestionIds.length,
            u.incorrectQuestionIds.length
        ]), x = e.useMemo(() => w.map(e => {
            let y = 0,
                z = 0;
            return u.correctQuestionIds.forEach(u => {
                u === e._id && y++;
            }), u.incorrectQuestionIds.forEach(u => {
                u === e._id && z++;
            }), {
                question: e,
                resultData: {
                    correct: y,
                    incorrect: z,
                    accuracy: (0, h.calculateAccuracy)(y, z)
                }
            };
        }), [
            w.length,
            u.correctQuestionIds.length,
            u.incorrectQuestionIds.length
        ]);
        return (0, d.jsxs)(n.default, {
            preventScroll: e.preventScroll,
            children: [
                (0, d.jsx)(l.default, {
                    title: u.name
                }),
                (0, d.jsxs)(r, {
                    children: [
                        (0, d.jsx)(s, {
                            header: 'Correct',
                            content: u.correctQuestionIds.length,
                            contentColor: k.default.Green
                        }),
                        (0, d.jsx)(s, {
                            header: 'Incorrect',
                            content: u.incorrectQuestionIds.length,
                            contentColor: k.default.Red
                        }),
                        (0, d.jsx)(s, {
                            header: 'Accuracy',
                            content: `${ (0, h.calculateAccuracy)(u.correctQuestionIds.length, u.incorrectQuestionIds.length) }%`,
                            contentColor: k.default.Blue
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    className: 'maxWidth',
                    children: (0, d.jsx)(g.default, {
                        style: {
                            fontSize: 20,
                            fontWeight: j.FontWeights.UltraBold
                        },
                        children: (0, d.jsx)('div', {
                            children: 'Questions'
                        })
                    })
                }),
                (0, d.jsx)('div', {
                    children: x.sort((e, u) => e.resultData.accuracy > u.resultData.accuracy ? 1 : -1).map(e => (0, d.jsx)(i.default, {
                        question: e.question,
                        correct: e.resultData.correct,
                        incorrect: e.resultData.incorrect,
                        accuracy: e.resultData.accuracy
                    }, e.question._id + '-' + u.name + '-breakdown'))
                })
            ]
        });
    };
});