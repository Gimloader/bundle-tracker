function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _t;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....');
    let q, r, s = t => t;
    var _t = () => {
        const u = (0, i.isLoggedIn)();
        return (0, o.useDidMount)(() => {
            u || (0, i.loadFont)('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
        }), u ? (0, f.jsx)(m.Navigate, {
            to: j.DASHBOARD,
            replace: !0
        }) : (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.Title, {
                    title: 'Gimkit - live learning game show',
                    override: !0
                }),
                (0, f.jsx)(_u, {
                    children: (0, f.jsxs)(n.default, {
                        theme: { token: { fontFamily: 'Rubik, sans-serif' } },
                        children: [
                            (0, f.jsx)(p.default, { includeSpacer: !0 }),
                            (0, f.jsxs)(_v, {
                                children: [
                                    (0, f.jsx)(k.default, {}),
                                    (0, f.jsx)(l.default, {})
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _u = g.default.div.attrs({ className: 'flex-column vc maxWidth' })(q || (q = s`
  flex: 1;
  background: ${ 0 };
  font-family: 'Rubik', sans-serif;
  color: ${ 0 };
`), h.default.Snow, h.default.White), _v = g.default.div.attrs({ className: 'flex-center flex-column maxWidth' })(r || (r = s`
  color: ${ 0 };
`), h.default.Black);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _C;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    let n, o, p, q, r, s, t, u = v => v;
    const v = f.default.div.attrs({ className: 'maxWidth flex hc' })(n || (n = u`
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
  width: 90%;
  @media (max-width: ${ 0 }px) {
    margin-top: 26px;
    margin-bottom: 40px;
  }
  @media (max-width: 460px) {
    margin-top: 16px;
  }
`), 890), w = f.default.div.attrs({ className: 'flex hc vc flex-column' })(o || (o = u`
  background: ${ 0 };
  padding: 48px;
  border-style: solid;
  border-color: ${ 0 };
  border-width: 14px;
  border-radius: 45px;
  max-width: 620px;
  @media (max-width: ${ 0 }px) {
    border-radius: 14px;
    border-width: 7px;
    max-width: 100%;
  }
  @media (max-width: 460px) {
    background: transparent;
    padding: 0px;
    border-style: none;
  }
`), k.default.White, k.default.Black, 890), x = f.default.h1(p || (p = u`
  color: ${ 0 };
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  @media (max-width: 975px) {
    font-size: 44px;
  }
  @media (max-width: 460px) {
    font-size: 33px;
  }
`), k.default.Black), y = f.default.div(q || (q = u`
  font-size: 17px;
  color: #1d2d35;
  margin-bottom: 31px;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`)), z = f.default.div.attrs({ className: 'flex' })(r || (r = u`
  width: 150px;
  align-items: flex-start; // for Safari
  justify-content: flex-end;
  flex-shrink: 0;
  @media (min-width: 1200px) {
    width: 175px;
  }
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), 890), A = f.default.div(s || (s = u`
  height: 40px;
  width: 40px;
  background-image: url(/client/img/home/me.jpg);
  background-size: cover;
  background-position: center center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  border-color: #1d2d35;
  margin-right: 10px;
`)), B = f.default.div.attrs({ className: 'flex vc' })(t || (t = u`
  @media (max-width: 950px) {
    display: none;
  }
`));
    var _C = () => (0, e.jsxs)(v, {
        children: [
            (0, e.jsx)(z, {
                children: (0, e.jsx)('img', {
                    src: '/client/img/home/left.png',
                    style: { width: '100%' }
                })
            }),
            (0, e.jsxs)(w, {
                children: [
                    (0, e.jsx)(x, { children: 'Next level.' }),
                    (0, e.jsxs)(y, {
                        children: [
                            'Hey, I\'m Josh! I started Gimkit as a high school project.',
                            (0, e.jsx)('br', {}),
                            ' ',
                            (0, e.jsx)('br', {}),
                            'Games really helped me become engaged in school. That\'s why I built Gimkit \u2014 to be the kind of game I\'d want to play in class.',
                            (0, e.jsx)('br', {}),
                            ' ',
                            (0, e.jsx)('br', {}),
                            'Can\'t wait for you to give it a try!',
                            (0, e.jsx)('br', {}),
                            ' ',
                            (0, e.jsx)('br', {}),
                            (0, e.jsxs)('div', {
                                className: 'flex vc',
                                children: [
                                    (0, e.jsx)(A, {}),
                                    ' - Josh F.'
                                ]
                            })
                        ]
                    }),
                    (0, e.jsx)('div', { className: 'flex flex-column vc' }),
                    (0, e.jsx)(l.default, {
                        to: m.REGISTER_BASE,
                        children: (0, e.jsx)(i.default, {
                            style: {
                                width: 277,
                                height: 61
                            },
                            size: 'large',
                            icon: (0, e.jsx)(h.default, {}),
                            type: 'primary',
                            children: 'Sign Up For Free'
                        })
                    }),
                    (0, e.jsxs)('div', {
                        className: 'flex wrap vc',
                        style: { marginTop: 15 },
                        children: [
                            (0, e.jsx)(l.default, {
                                to: '/join',
                                external: !0,
                                children: (0, e.jsxs)(i.default, {
                                    type: 'link',
                                    children: [
                                        (0, e.jsx)('i', { className: 'far fa-gamepad-alt' }),
                                        '\xA0 Join Game'
                                    ]
                                })
                            }),
                            (0, e.jsx)(j.default, { type: 'vertical' }),
                            (0, e.jsx)(l.default, {
                                to: m.LOGIN,
                                children: (0, e.jsxs)(i.default, {
                                    type: 'link',
                                    children: [
                                        (0, e.jsx)(g.default, {}),
                                        'Login'
                                    ]
                                })
                            }),
                            (0, e.jsxs)(B, {
                                children: [
                                    (0, e.jsx)(j.default, { type: 'vertical' }),
                                    (0, e.jsx)(l.default, {
                                        to: m.GROUP_PRICING,
                                        children: (0, e.jsxs)(i.default, {
                                            type: 'link',
                                            children: [
                                                (0, e.jsx)('i', { className: 'far fa-users' }),
                                                '\xA0 Group Pricing'
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, e.jsx)(z, {
                children: (0, e.jsx)('img', {
                    src: '/client/img/home/right.png',
                    style: { width: '100%' }
                })
            })
        ]
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'UserAddOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
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
                    attrs: { d: 'M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'user-add',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _m;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    let k;
    const l = m => (0, e.jsx)('div', { style: { height: m.height } });
    var _m = () => (0, e.jsxs)(_n, {
        children: [
            (0, e.jsx)(g.default, {
                title: 'Answer',
                description: 'Students answer questions on their own device at their own pace.\n            Throughout a Kit, each student will get exposure to the questions\n            multiple times to ensure mastery.',
                image: '/client/img/home/answer.png',
                imageSide: 'right'
            }),
            (0, e.jsx)(l, { height: 50 }),
            (0, e.jsx)(g.default, {
                title: 'Earn',
                description: 'Students earn in-game cash by answering questions correctly. But be careful, an incorrect answer will cost you!',
                image: '/client/img/home/earn.png',
                imageSide: 'left'
            }),
            (0, e.jsx)(l, { height: 50 }),
            (0, e.jsx)(g.default, {
                title: 'Shop',
                description: 'Students can reinvest their money by purchasing upgrades & powerups. With millions of combinations, students can make purchases that suit their strengths.',
                image: '/client/img/home/shop.png',
                imageSide: 'right'
            }),
            (0, e.jsx)(l, { height: 50 }),
            (0, e.jsx)(h.default, {}),
            (0, e.jsx)(l, { height: 100 }),
            (0, e.jsx)(i.default, {
                title: 'Home works.',
                description: (0, e.jsxs)(e.Fragment, {
                    children: [
                        'Gimkit doesn\'t just have to be used in class. You can also assign it as homework. ',
                        (0, e.jsx)('br', {}),
                        ' ',
                        (0, e.jsx)('br', {}),
                        'Students love it and assignments are graded for you automatically.'
                    ]
                }),
                image: '/client/img/home/assignment.png',
                imageSide: 'right'
            }),
            (0, e.jsx)(l, { height: 100 }),
            (0, e.jsx)(i.default, {
                title: 'KitCollab',
                description: (0, e.jsxs)(e.Fragment, {
                    children: [
                        'With KitCollab, students create questions for the game!',
                        (0, e.jsx)('br', {}),
                        ' ',
                        (0, e.jsx)('br', {}),
                        'In realtime, students submit questions, you accept them, and then the class plays a game with the questions they wrote!'
                    ]
                }),
                image: '/client/img/home/kitcollab.png',
                imageSide: 'left'
            }),
            (0, e.jsx)(l, { height: 100 }),
            (0, e.jsx)(j.default, {})
        ]
    });
    const _n = f.default.div.attrs({ className: 'flex-center flex-column maxWidth' })(k || (k = (o => o)``));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....');
    let i, j, k, l, m, n = o => o;
    const o = 670;
    var _p = q => {
        const r = 'right' === q.imageSide;
        return (0, e.jsx)(h.default, {
            children: (0, e.jsxs)(_q, {
                row: r,
                children: [
                    (0, e.jsxs)(_r, {
                        marginLeft: r ? 0 : 55,
                        marginRight: r ? 55 : 0,
                        children: [
                            (0, e.jsx)(_s, { children: q.title }),
                            (0, e.jsx)(_t, { children: q.description })
                        ]
                    }),
                    (0, e.jsx)(_u, {
                        style: { transform: `rotate(${ r ? 2 : -2 }deg)` },
                        src: q.image
                    })
                ]
            })
        });
    };
    const _q = g.default.div.attrs({ className: 'flex vc hc' })(i || (i = n`
  flex-direction: ${ 0 };
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), r => r.row ? 'row' : 'row-reverse', o), _r = g.default.div(j || (j = n`
  max-width: 530px;
  margin-left: ${ 0 }px;
  margin-right: ${ 0 }px;
  @media (max-width: ${ 0 }px) {
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
  }
`), s => s.marginLeft, s => s.marginRight, o), _s = g.default.div(k || (k = n`
  font-size: 40px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 32px;
  }
`), f.FontWeights.Bold, o), _t = g.default.div(l || (l = n`
  font-size: 19px;
  @media (max-width: ${ 0 }px) {
    font-size: 16px;
  }
`), o), _u = g.default.img(m || (m = n`
  height: 390px;
  @media (max-width: ${ 0 }px) {
    margin-top: 20px;
    height: 320px;
  }
`), o);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _f;
    });
    let e;
    var _f = b('.....').default.div(e || (e = (g => g)`
  width: 90%;
  max-width: 900px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _o;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    b('.....');
    var h = b('.....');
    let i, j, k, l, m, n = o => o;
    var _o = () => (0, e.jsxs)(_p, {
        children: [
            (0, e.jsxs)(_q, {
                children: [
                    (0, e.jsx)(_r, { children: 'Always new ways to play...' }),
                    (0, e.jsx)(_s, { children: 'That\'s just the core of Gimkit. With 10+ unique game modes and more in development, there\'s always a new way to play.' })
                ]
            }),
            (0, e.jsx)(_t, {})
        ]
    });
    const _p = h.default.div.attrs({ className: 'maxWidth flex flex-column vc' })(i || (i = n`
  background: #0a2540;
  color: ${ 0 };
  padding: 100px 30px;
`), f.default.White), _q = h.default.div(j || (j = n`
  max-width: 600px;
  text-align: center;
`)), _r = h.default.div(k || (k = n`
  color: ${ 0 };
  font-size: 40px;
  font-weight: ${ 0 };
  @media (max-width: 580px) {
    font-size: 27px;
  }
`), f.default.White, g.FontWeights.Bold), _s = h.default.div(l || (l = n`
  color: #adbdcc;
  font-size: 19px;
  margin-top: 4px;
  @media (max-width: 580px) {
    font-size: 17px;
  }
`)), _t = h.default.img.attrs({ src: '/client/img/home/modes.png' })(m || (m = n`
  width: 100%;
  max-width: 1000px;
  margin-top: 35px;
  @media (max-width: 800px) {
    display: none;
  }
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....');
    let i, j, k, l, m, n, o = p => p;
    var _p = q => {
        const r = 'left' === q.imageSide;
        return (0, e.jsx)(h.default, {
            children: (0, e.jsxs)(_q, {
                flexDirection: r ? 'row-reverse' : 'row',
                children: [
                    (0, e.jsxs)(_r, {
                        children: [
                            (0, e.jsx)(_s, { children: q.title }),
                            (0, e.jsx)(_t, { children: q.description })
                        ]
                    }),
                    (0, e.jsx)(_u, {
                        marginLeft: r ? 0 : 50,
                        marginRight: r ? 50 : 0,
                        children: (0, e.jsx)(_v, { src: q.image })
                    })
                ]
            })
        });
    };
    const _q = g.default.div.attrs({ className: 'maxWidth flex vc' })(i || (i = o`
  flex-direction: ${ 0 };
  @media (max-width: 890px) {
    flex-direction: column !important;
  }
`), r => r.flexDirection), _r = g.default.div(j || (j = o`
  width: 100%;
  max-width: 420px;
  @media (max-width: 890px) {
    margin-bottom: 25px;
    text-align: center;
  }
`)), _s = g.default.div(k || (k = o`
  font-size: 40px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold), _t = g.default.div(l || (l = o`
  font-size: 19px;
  margin-top: 8px;
`)), _u = g.default.div(m || (m = o`
  width: 465px;
  max-width: 100%;
  flex-shrink: 0;
  margin-left: ${ 0 }px;
  margin-right: ${ 0 }px;
  @media (max-width: 890px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    max-width: 465px;
  }
`), v => v.marginLeft, v => v.marginRight), _v = g.default.img.attrs({ className: 'maxWidth' })(n || (n = o``));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _r;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    b('.....');
    var l = b('.....');
    let m, n, o, p, q = r => r;
    var _r = () => (0, e.jsxs)(_s, {
        children: [
            (0, e.jsxs)(_t, {
                children: [
                    (0, e.jsx)(_u, { children: 'Game on.' }),
                    (0, e.jsx)(_v, { children: 'Get your first game going and see your students engaged like never before!' })
                ]
            }),
            (0, e.jsx)(k.default, {
                to: j.REGISTER_BASE,
                children: (0, e.jsx)(g.default, {
                    icon: (0, e.jsx)(f.default, {}),
                    type: 'primary',
                    size: 'large',
                    style: {
                        width: 277,
                        height: 61
                    },
                    children: 'Sign Up For Free'
                })
            })
        ]
    });
    const _s = l.default.div.attrs({ className: 'maxWidth flex flex-column vc' })(m || (m = q`
  background: #0a2540;
  color: ${ 0 };
  padding: 100px 30px;
`), h.default.White), _t = l.default.div(n || (n = q`
  max-width: 770px;
  text-align: center;
`)), _u = l.default.div(o || (o = q`
  font-size: 48px;
  font-weight: ${ 0 };
  @media (max-width: 580px) {
    font-size: 36px;
  }
`), i.FontWeights.Bold), _v = l.default.div(p || (p = q`
  font-size: 22px;
  margin-top: -5px;
  margin-bottom: 20px;
  color: #adbdcc;
  @media (max-width: 580px) {
    font-size: 18px;
    margin-top: -1px;
  }
`));
});