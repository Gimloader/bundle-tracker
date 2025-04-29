function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('+0Sy50', function(b, c) {
    _z(b.exports, 'default', function() {
        return _z;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('+M5wm'),
        h = a('g2qtU0'),
        i = a('gn3Uk7'),
        j = a('GldUd7'),
        k = a('aNszb0'),
        l = a('ulE4q'),
        m = a('oXQNI'),
        n = a('q0pUc1'),
        o = a('fmVdR'),
        p = a('6BM9K6'),
        q = a('ijg0s'),
        r = a('Axq+p'),
        s = a('b5kvC'),
        t = a('sHRDd'),
        u = a('k0Og2'),
        v = a('x8CoD');
    let w;
    const x = (0, r.default)(m.default)(w || (w = (_z => _z)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), _z => _z.font ? _z.font : s.Fonts.SFPro, t.default.Black);
    class y extends f.Component {
        componentDidUpdate(_z) {
            _z.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }));
        }
        render() {
            const {
                question: z,
                showCheckbox: A,
                checked: B,
                canEdit: C,
                canAdd: D,
                fontFamily: E
            } = this.props;
            let F = s.Fonts.SFPro;
            E && (F = E);
            const G = z.audio && !z.text && !z.image && !z.latex;
            return (0, e.jsxs)(x, {
                font: F,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: '100%'
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, e.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, e.jsxs)('div', {
                                style: {
                                    justifyContent: 'space-between'
                                },
                                className: 'flex vc maxWidth',
                                children: [
                                    (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        children: [
                                            A && (0, e.jsx)(n.default, {
                                                style: {
                                                    zoom: 1.3,
                                                    marginRight: 10,
                                                    marginTop: 4
                                                },
                                                onChange: this.props.handleCheckChange,
                                                onClick: z => z.stopPropagation(),
                                                checked: B
                                            }),
                                            (0, e.jsx)(u.default, {
                                                text: z.text,
                                                image: z.image,
                                                latex: z.latex,
                                                customImageMargin: 10,
                                                customImageSize: 72
                                            }),
                                            z.audio && (0, e.jsx)(q.default, {
                                                title: 'Play Audio',
                                                children: (0, e.jsx)(l.default, {
                                                    style: {
                                                        marginLeft: G ? 0 : 10,
                                                        marginRight: G ? 10 : 0
                                                    },
                                                    type: 'primary',
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(h.default, {}),
                                                    onClick: this.onAudioPress
                                                })
                                            }),
                                            G && (0, e.jsx)(u.default, {
                                                text: 'Audio Only Question',
                                                customTextColor: '#bdbdbd'
                                            }),
                                            z.type === g.QuestionType.textInput && (0, e.jsx)(p.default, {
                                                color: 'magenta',
                                                style: {
                                                    marginLeft: 10,
                                                    fontFamily: F
                                                },
                                                children: 'Text Input'
                                            })
                                        ]
                                    }),
                                    C && (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginLeft: 10
                                        },
                                        children: [
                                            (0, e.jsx)(q.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, e.jsx)(l.default, {
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(i.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: {
                                                        marginRight: 5
                                                    }
                                                })
                                            }),
                                            (0, e.jsx)(q.default, {
                                                title: 'Edit',
                                                placement: 'bottom',
                                                children: (0, e.jsx)(l.default, {
                                                    shape: 'circle',
                                                    icon: (0, e.jsx)(j.default, {}),
                                                    size: 'small',
                                                    onClick: this.props.onEditClicked
                                                })
                                            })
                                        ]
                                    }),
                                    D && (0, e.jsx)(q.default, {
                                        title: 'Add Question',
                                        placement: 'left',
                                        children: (0, e.jsx)(k.default, {
                                            style: {
                                                fontSize: 19
                                            },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, e.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            this.state.showingAnswers && (0, e.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    paddingLeft: A ? 34 : 0
                                },
                                children: z.answers.map((A, B) => (0, e.jsxs)(f.Fragment, {
                                    children: [
                                        (0, e.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, e.jsx)(u.default, {
                                                    text: A.text,
                                                    image: A.image,
                                                    latex: A.latex,
                                                    customTextColor: A.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                A.image || A.latex ? (0, e.jsx)(p.default, {
                                                    color: A.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: A.image ? 2 : 12
                                                    },
                                                    children: A.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        B + 1 !== z.answers.length && (0, e.jsx)(o.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, A._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, d.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, d.default)(this, 'onAudioPress', _i => {
                _i.stopPropagation();
                new Audio((0, v.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _z = y;
}), a.register('+M5wm', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    var m;
    let n;
    let o;
    var p;
    _i(b.exports, 'Privacy', function() {
        return d;
    }), _i(b.exports, 'QuestionType', function() {
        return h;
    }), _i(b.exports, 'TextInputAnswerType', function() {
        return j;
    }), _i(b.exports, 'HubItemType', function() {
        return n;
    }), _i(b.exports, 'HubItemStatus', function() {
        return o;
    }), (e = d || (d = {})).public = 'public', e.private = 'private', (g = f || (f = {})).basic = 'basic', g.go = 'go', g.pro = 'pro', (i = h || (h = {})).multipleChoice = 'mc', i.textInput = 'text', (k = j || (j = {}))[k.exact = 1] = 'exact', k[k.contains = 2] = 'contains', (m = l || (l = {})).reachedCashGoal = 'reached-cash-goal', m.reachedMaxTime = 'reached-max-time', (n || (n = {})).mapAssignment = 'mapAssignment', (p = o || (o = {})).completed = 'completed', p.inProgress = 'inProgress', p.notStarted = 'notStarted';
}), a.register('g2qtU0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('EXicI0'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'AudioOutlined';
    var _i = e.forwardRef(h);
}), a.register('EXicI0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z'
                }
            }]
        },
        name: 'audio',
        theme: 'outlined'
    };
}), a.register('aNszb0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Cu9ym'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlusCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('Cu9ym', function(b, c) {
    t(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                }
            ]
        },
        name: 'plus-circle',
        theme: 'outlined'
    };
}), a.register('k0Og2', function(b, c) {
    t(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('DKaq/'),
        h = a('JtnSG');
    let i, j, k, l = t => t;
    const m = e.default.div(i || (i = l`
  display: flex;
  align-items: center;
`)),
        n = e.default.div(j || (j = l`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), t => t.customTextColor ? t.customTextColor : f.default.Black, t => t.customFontSize ? t.customFontSize : 26, t => t.customFontWeight ? t.customFontWeight : 600),
        o = e.default.div(k || (k = l``));
    var _p = t => {
        var q;
        return (0, d.jsxs)(m, {
            onClick: q => t.blockOutsideClicks ? q.stopPropagation() : null,
            children: [
                t.image && (0, d.jsx)(g.default, {
                    image: t.image,
                    size: t.customImageSize || 45,
                    customRightMargin: t.customImageMargin || 5,
                    showBorder: !0
                }),
                t.latex ? (0, d.jsx)(o, {
                    style: (null === (q = t.text) || void 0 === q ? void 0 : q.length) ? {
                        color: f.default.Black,
                        padding: 20,
                        border: `1px solid ${ f.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: t.customFontSize || 26
                    } : {
                        color: f.default.Black,
                        fontSize: t.customFontSize || 26
                    },
                    children: (0, d.jsx)(h.default, {
                        latex: t.latex
                    })
                }) : null,
                (0, d.jsx)(n, {
                    ...t,
                    children: t.text
                })
            ]
        });
    };
});