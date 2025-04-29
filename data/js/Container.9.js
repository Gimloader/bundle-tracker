function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('EC4am', function(c, d) {
    a(c.exports, 'default', function() {
        return _A;
    });
    var e = b('s/YA9'),
        f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('rDgzs'),
        i = b('0qHa9'),
        j = b('rLQJQ7'),
        k = b('+Nyqr7'),
        l = b('rLXLn'),
        m = b('P1KtI'),
        n = b('QZ0Z+'),
        o = b('0nKwk1'),
        p = b('VNuyu'),
        q = b('LBLT38'),
        r = b('Dn89R'),
        s = b('u4s09'),
        t = b('Eh2Wh'),
        u = b('8KqQ+'),
        v = b('aXpKE'),
        w = b('HloXO');
    let x;
    const y = (0, s.default)(n.default)(x || (x = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), a => a.font ? a.font : t.Fonts.SFPro, u.default.Black);
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
                                                onClick: A => A.stopPropagation(),
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
                                children: A.answers.map((B, C) => (0, f.jsxs)(g.Fragment, {
                                    children: [
                                        (0, f.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, f.jsx)(v.default, {
                                                    text: B.text,
                                                    image: B.image,
                                                    latex: B.latex,
                                                    customTextColor: B.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                B.image || B.latex ? (0, f.jsx)(q.default, {
                                                    color: B.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: B.image ? 2 : 12
                                                    },
                                                    children: B.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        C + 1 !== A.answers.length && (0, f.jsx)(p.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, B._id))
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
            }), (0, e.default)(this, 'onAudioPress', a => {
                a.stopPropagation();
                new Audio((0, w.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var _A = z;
}), b.register('rDgzs', function(c, d) {
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
}), b.register('0qHa9', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('NHcCX'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'AudioOutlined';
    var _j = f.forwardRef(i);
}), b.register('NHcCX', function(c, d) {
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
}), b.register('rLXLn', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('Eb/C/'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'PlusCircleOutlined';
    var _j = f.forwardRef(i);
}), b.register('Eb/C/', function(c, d) {
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
}), b.register('aXpKE', function(c, d) {
    a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('8KqQ+'),
        h = b('HFnro8'),
        i = b('JuRCP');
    let j, k, l, m = a => a;
    const n = f.default.div(j || (j = m`
  display: flex;
  align-items: center;
`)),
        o = f.default.div(k || (k = m`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), a => a.customTextColor ? a.customTextColor : g.default.Black, a => a.customFontSize ? a.customFontSize : 26, a => a.customFontWeight ? a.customFontWeight : 600),
        p = f.default.div(l || (l = m``));
    var _q = a => {
        var r;
        return (0, e.jsxs)(n, {
            onClick: r => a.blockOutsideClicks ? r.stopPropagation() : null,
            children: [
                a.image && (0, e.jsx)(h.default, {
                    image: a.image,
                    size: a.customImageSize || 45,
                    customRightMargin: a.customImageMargin || 5,
                    showBorder: !0
                }),
                a.latex ? (0, e.jsx)(p, {
                    style: (null === (r = a.text) || void 0 === r ? void 0 : r.length) ? {
                        color: g.default.Black,
                        padding: 20,
                        border: `1px solid ${ g.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: a.customFontSize || 26
                    } : {
                        color: g.default.Black,
                        fontSize: a.customFontSize || 26
                    },
                    children: (0, e.jsx)(i.default, {
                        latex: a.latex
                    })
                }) : null,
                (0, e.jsx)(o, {
                    ...a,
                    children: a.text
                })
            ]
        });
    };
});