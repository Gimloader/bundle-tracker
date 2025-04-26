function a(a, b, A, B) {
    Object.defineProperty(a, b, {
        get: A,
        set: B,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('oczPp', function(A, B) {
    a(A.exports, 'default', function() {
        return y;
    });
    var c = b('UM8oI'),
        d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('o/FCM'),
        g = b('s/4yx'),
        h = b('SHiyt7'),
        i = b('Ynp9Z7'),
        j = b('Y0KLM'),
        k = b('IsmrL'),
        l = b('f9f+a'),
        m = b('QtkH71'),
        n = b('ExtIT'),
        o = b('JQ8A18'),
        p = b('YfLmS'),
        q = b('h99Nu'),
        r = b('gSUVO'),
        s = b('lmfrI'),
        t = b('Kp/yk'),
        u = b('2WDH6');
    let v;
    const w = (0, q.default)(l.default)(v || (v = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), a => a.font ? a.font : r.Fonts.SFPro, s.default.Black);
    class x extends e.Component {
        componentDidUpdate(a) {
            a.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }));
        }
        render() {
            const {
                question: y,
                showCheckbox: z,
                checked: A,
                canEdit: B,
                canAdd: C,
                fontFamily: D
            } = this.props;
            let E = r.Fonts.SFPro;
            D && (E = D);
            const F = y.audio && !y.text && !y.image && !y.latex;
            return (0, d.jsxs)(w, {
                font: E,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: '100%'
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [
                    this.props.customTopComponent ? this.props.customTopComponent : null,
                    (0, d.jsxs)('div', {
                        style: this.props.customContentStyle,
                        children: [
                            (0, d.jsxs)('div', {
                                style: {
                                    justifyContent: 'space-between'
                                },
                                className: 'flex vc maxWidth',
                                children: [
                                    (0, d.jsxs)('div', {
                                        className: 'flex vc',
                                        children: [
                                            z && (0, d.jsx)(m.default, {
                                                style: {
                                                    zoom: 1.3,
                                                    marginRight: 10,
                                                    marginTop: 4
                                                },
                                                onChange: this.props.handleCheckChange,
                                                onClick: y => y.stopPropagation(),
                                                checked: A
                                            }),
                                            (0, d.jsx)(t.default, {
                                                text: y.text,
                                                image: y.image,
                                                latex: y.latex,
                                                customImageMargin: 10,
                                                customImageSize: 72
                                            }),
                                            y.audio && (0, d.jsx)(p.default, {
                                                title: 'Play Audio',
                                                children: (0, d.jsx)(k.default, {
                                                    style: {
                                                        marginLeft: F ? 0 : 10,
                                                        marginRight: F ? 10 : 0
                                                    },
                                                    type: 'primary',
                                                    shape: 'circle',
                                                    icon: (0, d.jsx)(g.default, {}),
                                                    onClick: this.onAudioPress
                                                })
                                            }),
                                            F && (0, d.jsx)(t.default, {
                                                text: 'Audio Only Question',
                                                customTextColor: '#bdbdbd'
                                            }),
                                            y.type === f.QuestionType.textInput && (0, d.jsx)(o.default, {
                                                color: 'magenta',
                                                style: {
                                                    marginLeft: 10,
                                                    fontFamily: E
                                                },
                                                children: 'Text Input'
                                            })
                                        ]
                                    }),
                                    B && (0, d.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginLeft: 10
                                        },
                                        children: [
                                            (0, d.jsx)(p.default, {
                                                title: 'Copy',
                                                placement: 'bottom',
                                                children: (0, d.jsx)(k.default, {
                                                    shape: 'circle',
                                                    icon: (0, d.jsx)(h.default, {}),
                                                    onClick: this.props.onCopyClicked,
                                                    size: 'small',
                                                    style: {
                                                        marginRight: 5
                                                    }
                                                })
                                            }),
                                            (0, d.jsx)(p.default, {
                                                title: 'Edit',
                                                placement: 'bottom',
                                                children: (0, d.jsx)(k.default, {
                                                    shape: 'circle',
                                                    icon: (0, d.jsx)(i.default, {}),
                                                    size: 'small',
                                                    onClick: this.props.onEditClicked
                                                })
                                            })
                                        ]
                                    }),
                                    C && (0, d.jsx)(p.default, {
                                        title: 'Add Question',
                                        placement: 'left',
                                        children: (0, d.jsx)(j.default, {
                                            style: {
                                                fontSize: 19
                                            },
                                            onClick: this.props.onAddClicked
                                        })
                                    }),
                                    this.props.customRightComponent ? this.props.customRightComponent : null
                                ]
                            }),
                            this.state.showingAnswers && (0, d.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            this.state.showingAnswers && (0, d.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    paddingLeft: z ? 34 : 0
                                },
                                children: y.answers.map((z, A) => (0, d.jsxs)(e.Fragment, {
                                    children: [
                                        (0, d.jsxs)('div', {
                                            className: 'flex vc',
                                            children: [
                                                (0, d.jsx)(t.default, {
                                                    text: z.text,
                                                    image: z.image,
                                                    latex: z.latex,
                                                    customTextColor: z.correct ? 'green' : null,
                                                    customFontSize: 18,
                                                    customFontWeight: 400,
                                                    blockOutsideClicks: !0
                                                }),
                                                z.image || z.latex ? (0, d.jsx)(o.default, {
                                                    color: z.correct ? 'green' : 'red',
                                                    style: {
                                                        marginLeft: z.image ? 2 : 12
                                                    },
                                                    children: z.correct ? 'Correct' : 'Incorrect'
                                                }) : null
                                            ]
                                        }),
                                        A + 1 !== y.answers.length && (0, d.jsx)(n.default, {
                                            style: {
                                                marginTop: 6,
                                                marginBottom: 6
                                            }
                                        })
                                    ]
                                }, z._id))
                            })
                        ]
                    }),
                    this.props.customBottomComponent ? this.props.customBottomComponent : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, c.default)(this, 'state', {
                showingAnswers: this.props.showAllAnswers
            }), (0, c.default)(this, 'toggleShowingAnswers', () => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                });
            }), (0, c.default)(this, 'onAudioPress', a => {
                a.stopPropagation();
                new Audio((0, u.getCloudinaryUrl)(this.props.question.audio)).play();
            });
        }
    }
    var y = z;
}), b.register('o/FCM', function(b, s) {
    let c;
    var d;
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    let n;
    var o;
    a(b.exports, 'Privacy', function() {
        return c;
    }), a(b.exports, 'QuestionType', function() {
        return g;
    }), a(b.exports, 'TextInputAnswerType', function() {
        return i;
    }), a(b.exports, 'HubItemType', function() {
        return m;
    }), a(b.exports, 'HubItemStatus', function() {
        return n;
    }), (d = c || (c = {})).public = 'public', d.private = 'private', (f = e || (e = {})).basic = 'basic', f.go = 'go', f.pro = 'pro', (h = g || (g = {})).multipleChoice = 'mc', h.textInput = 'text', (j = i || (i = {}))[j.exact = 1] = 'exact', j[j.contains = 2] = 'contains', (l = k || (k = {})).reachedCashGoal = 'reached-cash-goal', l.reachedMaxTime = 'reached-max-time', (m || (m = {})).mapAssignment = 'mapAssignment', (o = n || (n = {})).completed = 'completed', o.inProgress = 'inProgress', o.notStarted = 'notStarted';
}), b.register('s/4yx', function(s, c) {
    a(s.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('waxee'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'AudioOutlined';
    var h = d.forwardRef(g);
}), b.register('waxee', function(b, s) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('Y0KLM', function(s, c) {
    a(s.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('0iMlD'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'PlusCircleOutlined';
    var h = d.forwardRef(g);
}), b.register('0iMlD', function(b, s) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('Kp/yk', function(s, o) {
    a(s.exports, 'default', function() {
        return o;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('lmfrI'),
        f = b('qLhB38'),
        g = b('bTRJM');
    let h, i, j, k = a => a;
    const l = d.default.div(h || (h = k`
  display: flex;
  align-items: center;
`)),
        m = d.default.div(i || (i = k`
  color: ${ 0 };
  font-size: ${ 0 }px;
  font-weight: ${ 0 };
`), a => a.customTextColor ? a.customTextColor : e.default.Black, a => a.customFontSize ? a.customFontSize : 26, a => a.customFontWeight ? a.customFontWeight : 600),
        n = d.default.div(j || (j = k``));
    var o = a => {
        var p;
        return (0, c.jsxs)(l, {
            onClick: p => a.blockOutsideClicks ? p.stopPropagation() : null,
            children: [
                a.image && (0, c.jsx)(f.default, {
                    image: a.image,
                    size: a.customImageSize || 45,
                    customRightMargin: a.customImageMargin || 5,
                    showBorder: !0
                }),
                a.latex ? (0, c.jsx)(n, {
                    style: (null === (p = a.text) || void 0 === p ? void 0 : p.length) ? {
                        color: e.default.Black,
                        padding: 20,
                        border: `1px solid ${ e.default.Black }`,
                        borderRadius: 5,
                        marginRight: 10,
                        fontSize: a.customFontSize || 26
                    } : {
                        color: e.default.Black,
                        fontSize: a.customFontSize || 26
                    },
                    children: (0, c.jsx)(g.default, {
                        latex: a.latex
                    })
                }) : null,
                (0, c.jsx)(m, {
                    ...a,
                    children: a.text
                })
            ]
        });
    };
});