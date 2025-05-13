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
        return _A;
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
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....'),
        s = b('.....'),
        t = b('.....'),
        u = b('.....'),
        v = b('.....'),
        w = b('.....');
    let x;
    const y = (0, s.default)(n.default)(x || (x = (z => z)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), z => z.font ? z.font : t.Fonts.SFPro, u.default.Black);
    class z extends g.Component {
        componentDidUpdate(A) {
            A.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }));
        }
        render() {
            const {
                question: A,
                showCheckbox: B,
                checked: C,
                canEdit: D,
                canAdd: E,
                fontFamily: F
            } = this.props;
            let G = t.Fonts.SFPro;
            F && (G = F);
            const H = A.audio && !A.text && !A.image && !A.latex;
            return (0, f.jsxs)(y, {
                font: G,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: '100%'
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, f.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, f.jsxs)('div', {
                                style: {
                                    justifyContent: 'space-between'
                                },
                                className: 'flex vc maxWidth',
                                children: [
                                    (0, f.jsxs)('div', {
                                        className: 'flex vc',
                                        children: [
                                            B && (0, f.jsx)(o.default, {
                                                style: {
                                                    zoom: 1.3,
                                                    marginRight: 10,
                                                    marginTop: 4
                                                },
                                                onChange: this.props.handleCheckChange,
                                                onClick: I => I.stopPropagation(),
                                                checked: C
                                            }),
                                            (0, f.jsx)(v.default, {
                                                text: A.text,
                                                image: A.image,
                                                latex: A.latex,
                                                customImageMargin: 10,
                                                customImageSize: 72
                                            }),
                                            A.audio && (0, f.jsx)(r.default, {
                                                title: 'Play Audio',
                                                children: (0, f.jsx)(m.default, {
                                                    style: {
                                                        marginLeft: H ? 0 : 10,
                                                        marginRight: H ? 10 : 0
                                                    },
                                                    type: 'primary',
                                                    shape: 'circle',
                                                    icon: (0, f.jsx)(i.default, {}),
                                                    onClick: this.onAudioPress
                                                })
                                            }),
                                            H && (0, f.jsx)(v.default, {
                                                text: 'Audio Only Question',
                                                customTextColor: '#bdbdbd'
                                            }),
                                            A.type === h.QuestionType.textInput && (0, f.jsx)(q.default, {
                                                color: 'magenta',
                                                style: {
                                                    marginLeft: 10,
                                                    fontFamily: G
                                                },
                                                children: 'Text Input'
                                            })
                                        ]
                                    }),
                                    D && (0, f.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginLeft: 10
                                        },
                                        children: [
                                            (0, f.jsx)(r.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, f.jsx)(m.default, {
                                                    shape: 'circle',
                                                    icon: (0, f.jsx)(j.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: {
                                                        marginRight: 5
                                                    }
                                                })
                                            }),
                                            (0, f.jsx)(r.default, {
                                                title: 'Edit',
                                                placement: 'bottom',
                                                children: (0, f.jsx)(m.default, {
                                                    shape: 'circle',
                                                    icon: (0, f.jsx)(k.default, {}),
                                                    size: 'small',
                                                    onClick: this.props.onEditClicked
                                                })
                                            })
                                        ]
                                    }),
                                    E && (0, f.jsx)(r.default, {
                                        title: 'Add Question',
                                        placement: 'left',
                                        children: (0, f.jsx)(l.default, {
                                            style: {
                                                fontSize: 19
                                            },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, f.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            this.state.showingAnswers && (0, f.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    paddingLeft: B ? 34 : 0
                                },
                                children: A.answers.map((I, J) => (0, f.jsxs)(g.Fragment, {
                                    children: [
                                        (0, f.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, f.jsx)(v.default, {
                                                    text: I.text,
                                                    image: I.image,
                                                    latex: I.latex,
                                                    customTextColor: I.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                I.image || I.latex ? (0, f.jsx)(q.default, {
                                                    color: I.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: I.image ? 2 : 12
                                                    },
                                                    children: I.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        J + 1 !== A.answers.length && (0, f.jsx)(p.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, I._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, e.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, e.default)(this, 'onAudioPress', A => {
                A.stopPropagation();
                new Audio((0, w.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _A = z;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    var n;
    let o;
    let p;
    var q;
    a(c.exports, 'Privacy', function() {
        return e;
    }), a(c.exports, 'QuestionType', function() {
        return i;
    }), a(c.exports, 'TextInputAnswerType', function() {
        return k;
    }), a(c.exports, 'HubItemType', function() {
        return o;
    }), a(c.exports, 'HubItemStatus', function() {
        return p;
    }), (f = e || (e = {})).public = 'public', f.private = 'private', (h = g || (g = {})).basic = 'basic', h.go = 'go', h.pro = 'pro', (j = i || (i = {})).multipleChoice = 'mc', j.textInput = 'text', (l = k || (k = {}))[l.exact = 1] = 'exact', l[l.contains = 2] = 'contains', (n = m || (m = {})).reachedCashGoal = 'reached-cash-goal', n.reachedMaxTime = 'reached-max-time', (o || (o = {})).mapAssignment = 'mapAssignment', (q = p || (p = {})).completed = 'completed', q.inProgress = 'inProgress', q.notStarted = 'notStarted';
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'AudioOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'PlusCircleOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
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
    const n = f.default.div(j || (j = m`
  display: flex;
  align-items: center;
`)),
        o = f.default.div(k || (k = m`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), p => p.customTextColor ? p.customTextColor : g.default.Black, p => p.customFontSize ? p.customFontSize : 26, p => p.customFontWeight ? p.customFontWeight : 600),
        p = f.default.div(l || (l = m``));
    var _q = r => {
        var s;
        return (0, e.jsxs)(n, {
            onClick: t => r.blockOutsideClicks ? t.stopPropagation() : null,
            children: [
                r.image && (0, e.jsx)(h.default, {
                    image: r.image,
                    size: r.customImageSize || 45,
                    customRightMargin: r.customImageMargin || 5,
                    showBorder: !0
                }),
                r.latex ? (0, e.jsx)(p, {
                    style: (null === (s = r.text) || void 0 === s ? void 0 : s.length) ? {
                        color: g.default.Black,
                        padding: 20,
                        border: `1px solid ${ g.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: r.customFontSize || 26
                    } : {
                        color: g.default.Black,
                        fontSize: r.customFontSize || 26
                    },
                    children: (0, e.jsx)(i.default, {
                        latex: r.latex
                    })
                }) : null,
                (0, e.jsx)(o, {
                    ...r,
                    children: r.text
                })
            ]
        });
    };
});