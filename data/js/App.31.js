function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('/kLzb', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'GiveKitScreen', function() {
        return _t;
    }), _x(b.exports, 'default', function() {
        return _w;
    });
    var e = a('0hzx+'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('nDpaN'),
        k = a('/cdc/'),
        l = a('VyPAO'),
        m = a('GmOiK'),
        n = a('KEI5M'),
        o = a('7s5R80'),
        p = a('RJjEi');
    let q, r, s, _t, u = _x => _x;
    var v;
    (v = _t || (_t = {})).apply = 'apply', v.pastProjects = 'pastProjects';
    var _w = () => {
        const [_x, y] = h.useState(_t.apply);
        return (0, e.jsxs)(_x, {
            children: [
                (0, e.jsx)(p.default, {
                    includeSpacer: !0
                }),
                (0, e.jsx)(_y, {}),
                (0, e.jsx)(m.default, {
                    currentScreen: _x,
                    setScreen: _x => {
                        y(_x);
                    }
                }),
                (0, e.jsx)(_z, {
                    children: _x === _t.apply ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(j.default, {}),
                            (0, e.jsx)(k.default, {}),
                            (0, e.jsx)(l.default, {})
                        ]
                    }) : (0, e.jsx)(n.default, {})
                })
            ]
        });
    };
    const _x = i.default.div.attrs({
            className: 'flex flex-column vc'
        })(q || (q = u`
  flex: 1;
  background: ${ 0 };
  color: #1d2d35;
  font-family: ${ 0 };
  .ant-row.ant-form-item {
    margin: 0px;
  }
`), f.default.Snow, g.Fonts.SFPro),
        _y = i.default.img.attrs({
            src: '/client/img/givekit/header.png',
            alt: 'GiveKit'
        })(r || (r = u`
  height: 225px;
  margin: 45px;
  margin-bottom: 35px;
  max-width: 80%;
`)),
        _z = (0, i.default)(o.default)(s || (s = u`
  flex: 1;
  width: 90%;
  max-width: 720px;
  padding: 45px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;

  h2 {
    font-size: 28px;
    font-weight: ${ 0 };
  }
`), g.FontWeights.Bold);
}), a.register('nDpaN', function(b, c) {
    _u(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('2HvvA11');
    a('LEQ5w');
    var _g = () => (0, d.jsxs)('div', {
        children: [
            'One giant obstacle for teachers is classroom funding: The average teacher in the US spends nearly $750 a year on classroom supplies. ',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            ' ',
            'That\'s an eye-popping number. For us, it\'s also a motivating one. ',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            'And that\'s why we created GiveKit!',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            (0, d.jsx)('b', {
                children: 'With GiveKit, we\'re donating $500 in funding every month to help pay for your school materials, first aid kits, tech tools, furniture, and anything else you may need to do your best work.'
            }),
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)('h2', {
                children: 'How it works'
            }),
            (0, d.jsxs)('b', {
                children: [
                    'Every month we\u2019ll fund $500 to educator-led projects via',
                    ' ',
                    (0, d.jsx)(f.default, {
                        external: !0,
                        to: 'https://www.donorschoose.org',
                        target: '_blank',
                        children: 'DonorsChoose.org.'
                    })
                ]
            }),
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            'We may fund one project in a month or several. If you don\'t get picked one month, no worries, we might always come back to fund it in the future.',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            'We\'ve decided to donate through',
            ' ',
            (0, d.jsx)(f.default, {
                external: !0,
                to: 'https://www.donorschoose.org',
                target: '_blank',
                children: 'DonorsChoose.org'
            }),
            ' ',
            '\u2014- they help take care of all the complexities in getting money from us to you.',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            (0, d.jsx)('b', {
                children: 'To apply for GiveKit, simply:'
            }),
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            '1. Register and start a project at',
            ' ',
            (0, d.jsx)(f.default, {
                external: !0,
                to: 'https://www.donorschoose.org',
                target: '_blank',
                children: 'DonorsChoose.org'
            }),
            ' ',
            (0, d.jsx)('br', {}),
            '2. Fill out the form below with a link to your project ',
            (0, d.jsx)('br', {}),
            '3. Keep up your incredible work! ',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            'We\'ll review applications monthly and select a project or projects to fund.',
            (0, d.jsx)('br', {})
        ]
    });
}), a.register('2HvvA11', function(b, c) {
    _u(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _u => _u.external || !_u.to ? (0, d.jsx)('a', {
        href: _u.to,
        tabIndex: Number(_u.tabIndex || '0'),
        onClick: _u.onClick,
        onKeyPress: b => {
            _u.onClick && 'Enter' === b.key && (b.preventDefault(), _u.onClick());
        },
        className: _u.className,
        target: _u.target,
        style: _u.style,
        children: _u.children
    }) : (0, d.jsx)(e.Link, {
        to: _u.to,
        tabIndex: Number(_u.tabIndex || '0'),
        onClick: _u.onClick,
        className: _u.className,
        target: _u.target,
        style: _u.style,
        children: _u.children
    });
}), a.register('/cdc/', function(b, c) {
    _u(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('fmVdR');
    a('LEQ5w');
    var f = a('V9QtZ');
    var _g = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)('h2', {
                children: 'Apply for GiveKit funding'
            }),
            (0, d.jsx)(f.default, {})
        ]
    });
}), a.register('V9QtZ', function(b, c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('oXQNI'),
        h = a('q0pUc1'),
        i = a('MKz5C'),
        j = a('ewwAh'),
        k = a('YRlpt'),
        l = a('Axq+p'),
        m = a('sHRDd'),
        n = a('b5kvC'),
        o = a('PMl60');
    let p, q, r = _u => _u;
    const s = 'Thank you so much for applying! If you\'re selected, we\'ll send you an email. Take care and have a great rest of your day!';
    var _t = () => {
        const [_u, v] = e.useState(!1), [w, x] = e.useState(!1);
        return w ? (0, d.jsx)(g.default, {
            style: {
                fontSize: 18,
                color: m.default.Black
            },
            children: s
        }) : (0, d.jsxs)(i.default, {
            onFinish: d => {
                _u || w || (v(!0), (0, o.request)({
                    url: '/api/v1/givekit/apply',
                    data: d,
                    success: () => {
                        x(!0), k.default.success({
                            title: 'Applied!',
                            content: s
                        });
                    },
                    error: _u => {
                        (0, o.throwMessageError)({
                            e: _u,
                            default: {
                                title: 'Error applying. Please try again later'
                            }
                        });
                    },
                    both: () => {
                        v(!1);
                    }
                }));
            },
            style: {
                width: '100%'
            },
            children: [
                (0, d.jsx)(_u, {
                    children: 'First Name*'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'firstName',
                    rules: [{
                        required: !0,
                        message: 'Please enter your first name.'
                    }],
                    children: (0, d.jsx)(j.default, {})
                }),
                (0, d.jsx)(_u, {
                    children: 'Last Name*'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'lastName',
                    rules: [{
                        required: !0,
                        message: 'Please enter your last name.'
                    }],
                    children: (0, d.jsx)(j.default, {})
                }),
                (0, d.jsx)(_u, {
                    children: 'Role*'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'role',
                    rules: [{
                        required: !0,
                        message: 'Please enter your role.'
                    }],
                    children: (0, d.jsx)(j.default, {})
                }),
                (0, d.jsx)(_u, {
                    children: 'Email Address*'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'email',
                    rules: [{
                        required: !0,
                        type: 'email',
                        message: 'Please enter a valid email.'
                    }],
                    children: (0, d.jsx)(j.default, {
                        type: 'email'
                    })
                }),
                (0, d.jsx)(_u, {
                    children: 'DonorsChoose Project Link*'
                }),
                (0, d.jsx)(_v, {
                    children: 'Paste the link to your project on DonorsChoose.org'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'projectLink',
                    rules: [{
                        required: !0,
                        message: 'Please enter the project link.'
                    }],
                    children: (0, d.jsx)(j.default, {
                        placeholder: 'https://www.donorschoose.org/project/my-project'
                    })
                }),
                (0, d.jsx)(_u, {
                    children: 'Date Needed'
                }),
                (0, d.jsx)(_v, {
                    children: 'If your project is time sensitive, let us know!'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'dateNeeded',
                    children: (0, d.jsx)(j.default, {})
                }),
                (0, d.jsx)(_u, {
                    children: 'Comments'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'comments',
                    children: (0, d.jsx)(j.default, {})
                }),
                (0, d.jsx)(_u, {
                    children: 'Permission'
                }),
                (0, d.jsx)(_v, {
                    children: 'Check the box below if you give us permission to use your name and project info. If you\'re not comfortable, no worries! Checking this box does not increase your chances of being selected.'
                }),
                (0, d.jsx)(i.default.Item, {
                    name: 'permission',
                    valuePropName: 'checked',
                    initialValue: !1,
                    children: (0, d.jsx)(h.default, {
                        children: 'Yes, you may use my name and project info!'
                    })
                }),
                (0, d.jsx)(i.default.Item, {
                    children: (0, d.jsx)(f.default, {
                        style: {
                            marginTop: 20
                        },
                        type: 'primary',
                        htmlType: 'submit',
                        size: 'large',
                        block: !0,
                        loading: _u,
                        children: 'Submit'
                    })
                })
            ]
        });
    };
    const _u = l.default.div(p || (p = r`
  font-size: 18px;
  color: ${ 0 };
  font-family: ${ 0 };
  margin-top: 12px;
  font-weight: ${ 0 };
`), m.default.Black, n.Fonts.SFPro, n.FontWeights.Bold),
        _v = l.default.div(q || (q = r``));
}), a.register('VyPAO', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('2HvvA11');
    a('LEQ5w');
    var _g = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)('h2', {
                children: 'FAQ'
            }),
            (0, d.jsx)('b', {
                children: 'What kind of projects are you looking for? '
            }),
            ' ',
            (0, d.jsx)('br', {}),
            'We\u2019re looking for projects that have the largest possible positive impact on students. That could be anything! Classroom materials, first aid kits, resources that celebrate diversity, supplies for ambitious project-based learning ideas \u2014 Anything. If you need it, we want to know about it. The only thing we\u2019re not looking for are requests for Gimkit subscriptions or licenses.',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            (0, d.jsx)('b', {
                children: 'Why not give money directly to teachers?'
            }),
            ' ',
            (0, d.jsx)('br', {}),
            'Because DonorsChoose specializes in funding classroom projects and they\'re great at what they do. They\u2019ve helped donors give more than $1 billion to teachers, funding nearly 2 million projects. They take care of the hard parts of giving including vetting requests, purchasing items, and shipping materials directly to verified schools. Simply, working with them makes it easy to give!',
            ' ',
            (0, d.jsx)(f.default, {
                external: !0,
                target: '_blank',
                to: 'https://www.donorschoose.org',
                children: 'Learn more about DonorsChoose.org.'
            }),
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)('b', {
                children: 'Need more info?'
            }),
            ' ',
            (0, d.jsx)('br', {}),
            'Write us at',
            ' ',
            (0, d.jsx)(f.default, {
                to: 'mailto:hello@gimkit.com',
                external: !0,
                children: 'hello@gimkit.com'
            }),
            ' ',
            'and put GiveKit in the subject line.'
        ]
    });
}), a.register('GmOiK', function(b, c) {
    _b(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('2HvvA11');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('/kLzb');
    let j, k, l = _b => _b;
    var _m = _b => {
        const n = n => n === _b.currentScreen;
        return (0, d.jsxs)(_n, {
            children: [
                (0, d.jsx)(_o, {
                    onClick: () => _b.setScreen(i.GiveKitScreen.apply),
                    style: {
                        marginRight: 5,
                        fontWeight: n(i.GiveKitScreen.apply) ? f.FontWeights.Bold : f.FontWeights.Normal
                    },
                    children: 'About & Apply'
                }),
                (0, d.jsx)(_o, {
                    onClick: () => _b.setScreen(i.GiveKitScreen.pastProjects),
                    style: {
                        fontWeight: n(i.GiveKitScreen.pastProjects) ? f.FontWeights.Bold : f.FontWeights.Normal
                    },
                    children: 'Previously funded projects'
                })
            ]
        });
    };
    const _n = h.default.div.attrs({
            className: 'flex vc'
        })(j || (j = l`
  margin-bottom: 25px;
`)),
        _o = (0, h.default)(g.default)(k || (k = l`
  padding: 4px 15px;
  background: ${ 0 };
  border: solid 1px;
  border-radius: 500px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`), e.default.White);
}), a.register('KEI5M', function(b, c) {
    _b(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('d1E7w3');
    var _f = () => (0, d.jsx)(e.default, {
        id: '382c29c71fa14d5a99358c8e5c9b1e43'
    });
}), a.register('d1E7w3', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('oBBW6'),
        f = a('LEQ5w');
    const g = f.lazy(() => a('7cBN63'));
    var _h = _b => {
        const i = _b.hideSkeleton ? (0, d.jsx)('div', {
            className: 'maxWidth'
        }) : (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(e.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, d.jsx)(f.Suspense, {
            fallback: i,
            children: (0, d.jsx)(g, {
                ..._b
            })
        });
    };
}), a.register('7cBN63', function(_b, c) {
    _b.exports = Promise.all([
        a('o60By')(new URL(a('HmN9A').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + a('HmN9A').resolve('6iUO5'))
    ]).then(() => a('cg5Ud'));
}), a.register('7s5R80', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _h => (0, d.jsx)(_i, {
        onClick: _h.onClick,
        className: _h.className,
        style: _h.style,
        children: _h.children
    });
    const _i = e.default.div(g || (g = (_h => _h)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _d(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_d, b) => {
            const {
                antCls: n
            } = _d, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _d.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _d.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _d.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('jlX4s16', function(b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _o(b.exports, 'default', function() {
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]),
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _i(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Rtfgy20', function(b, _c) {
    _i(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _j(b.exports, 'default', function() {
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
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('jzxyj10', function(b, c) {
    _h(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _h => {
        d.history.push(_h);
    };
}), a.register('9R7cy', function(b, c) {
    _h(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _h => (0, d.jsx)('i', {
        className: `${ _h.name }${ _h.className ? ` ${ _h.className }` : '' }`,
        style: _h.style
    });
}), a.register('fuuXY5', function(b, c) {
    _h(b.exports, 'responsiveArray', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('XpGPm');
    const _f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _g() {
        const [, _h] = (0, e.useToken)(), i = (_h => ({
            xs: `(max-width: ${ _h.screenXSMax }px)`,
            sm: `(min-width: ${ _h.screenSM }px)`,
            md: `(min-width: ${ _h.screenMD }px)`,
            lg: `(min-width: ${ _h.screenLG }px)`,
            xl: `(min-width: ${ _h.screenXL }px)`,
            xxl: `(min-width: ${ _h.screenXXL }px)`
        }))((_h => {
            const j = _h,
                k = [].concat(_f).reverse();
            return k.forEach((_h, b) => {
                const l = _h.toUpperCase(),
                    m = `screen${ l }Min`,
                    n = `screen${ l }`;
                if (!(j[m] <= j[n]))
                    throw new Error(`${ m }<=${ n } fails : !(${ j[m] }<=${ j[n] })`);
                if (b < k.length - 1) {
                    const o = `screen${ l }Max`;
                    if (!(j[n] <= j[o]))
                        throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                    const p = `screen${ k[b + 1].toUpperCase() }Min`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                }
            }), _h;
        })(_h));
        return _k(d).useMemo(() => {
            const j = new Map();
            let _k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: _k => (l = _k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(m) {
                    return j.size || this.register(), _k += 1, j.set(_k, m), m(l), _k;
                },
                unsubscribe(m) {
                    j.delete(m), j.size || this.unregister();
                },
                unregister() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = this.matchHandlers[m];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener);
                    }), j.clear();
                },
                register() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = m => {
                                let {
                                    matches: o
                                } = m;
                                this.dispatch(Object.assign(Object.assign({}, l), {
                                    [j]: o
                                }));
                            },
                            o = window.matchMedia(m);
                        o.addListener(n), this.matchHandlers[m] = {
                            mql: o,
                            listener: n
                        }, n(o);
                    });
                },
                responsiveMap: i
            };
        }, [_h]);
    }
}), a.register('7B+hJ16', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    e(b.exports, 'default', function() {
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
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
});