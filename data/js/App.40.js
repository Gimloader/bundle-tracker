function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('3lVAE', function(b, d) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return s;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('PjB0f'),
        i = c('q721a'),
        j = c('QGAhW'),
        k = c('jLleK'),
        l = c('0R8EW'),
        m = c('qEw51'),
        n = c('laJ/S'),
        o = c('1//3g');
    let p, q, r = a => a;
    var s = () => {
        const t = (0, h.isLoggedIn)();
        return (0, n.useDidMount)(() => {
            t || (0, h.loadFont)('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
        }), t ? (0, e.jsx)(l.Navigate, {
            to: i.DASHBOARD,
            replace: !0
        }) : (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(h.Title, {
                    title: 'Gimkit - live learning game show',
                    override: !0
                }),
                (0, e.jsx)(t, {
                    children: (0, e.jsxs)(m.default, {
                        theme: {
                            token: {
                                fontFamily: 'Rubik, sans-serif'
                            }
                        },
                        children: [
                            (0, e.jsx)(o.default, {
                                includeSpacer: !0
                            }),
                            (0, e.jsxs)(u, {
                                children: [
                                    (0, e.jsx)(j.default, {}),
                                    (0, e.jsx)(k.default, {})
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const t = f.default.div.attrs({
            className: 'flex-column vc maxWidth'
        })(p || (p = r`
  flex: 1;
  background: ${ 0 };
  font-family: 'Rubik', sans-serif;
  color: ${ 0 };
`), g.default.Snow, g.default.White),
        u = f.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(q || (q = r`
  color: ${ 0 };
`), g.default.Black);
}), c.register('QGAhW', function(b, d) {
    a(b.exports, 'default', function() {
        return B;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('svNXj'),
        g = c('FxhPX'),
        h = c('IsmrL'),
        i = c('ExtIT'),
        j = c('lmfrI'),
        k = c('iYEuk12'),
        l = c('q721a');
    let m, n, o, p, q, r, s, t = a => a;
    const u = e.default.div.attrs({
            className: 'maxWidth flex hc'
        })(m || (m = t`
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
`), 890),
        v = e.default.div.attrs({
            className: 'flex hc vc flex-column'
        })(n || (n = t`
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
`), j.default.White, j.default.Black, 890),
        w = e.default.h1(o || (o = t`
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
`), j.default.Black),
        x = e.default.div(p || (p = t`
  font-size: 17px;
  color: #1d2d35;
  margin-bottom: 31px;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`)),
        y = e.default.div.attrs({
            className: 'flex'
        })(q || (q = t`
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
`), 890),
        z = e.default.div(r || (r = t`
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
`)),
        A = e.default.div.attrs({
            className: 'flex vc'
        })(s || (s = t`
  @media (max-width: 950px) {
    display: none;
  }
`));
    var B = () => (0, d.jsxs)(u, {
        children: [
            (0, d.jsx)(y, {
                children: (0, d.jsx)('img', {
                    src: '/client/img/home/left.png',
                    style: {
                        width: '100%'
                    }
                })
            }),
            (0, d.jsxs)(v, {
                children: [
                    (0, d.jsx)(w, {
                        children: 'Next level.'
                    }),
                    (0, d.jsxs)(x, {
                        children: [
                            'Hey, I\'m Josh! I started Gimkit as a high school project.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'Games really helped me become engaged in school. That\'s why I built Gimkit \u2014 to be the kind of game I\'d want to play in class.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'Can\'t wait for you to give it a try!',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            (0, d.jsxs)('div', {
                                className: 'flex vc',
                                children: [
                                    (0, d.jsx)(z, {}),
                                    ' - Josh F.'
                                ]
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        className: 'flex flex-column vc'
                    }),
                    (0, d.jsx)(k.default, {
                        to: l.REGISTER_BASE,
                        children: (0, d.jsx)(h.default, {
                            style: {
                                width: 277,
                                height: 61
                            },
                            size: 'large',
                            icon: (0, d.jsx)(g.default, {}),
                            type: 'primary',
                            children: 'Sign Up For Free'
                        })
                    }),
                    (0, d.jsxs)('div', {
                        className: 'flex wrap vc',
                        style: {
                            marginTop: 15
                        },
                        children: [
                            (0, d.jsx)(k.default, {
                                to: '/join',
                                external: !0,
                                children: (0, d.jsxs)(h.default, {
                                    type: 'link',
                                    children: [
                                        (0, d.jsx)('i', {
                                            className: 'far fa-gamepad-alt'
                                        }),
                                        '\xA0 Join Game'
                                    ]
                                })
                            }),
                            (0, d.jsx)(i.default, {
                                type: 'vertical'
                            }),
                            (0, d.jsx)(k.default, {
                                to: l.LOGIN,
                                children: (0, d.jsxs)(h.default, {
                                    type: 'link',
                                    children: [
                                        (0, d.jsx)(f.default, {}),
                                        'Login'
                                    ]
                                })
                            }),
                            (0, d.jsxs)(A, {
                                children: [
                                    (0, d.jsx)(i.default, {
                                        type: 'vertical'
                                    }),
                                    (0, d.jsx)(k.default, {
                                        to: l.GROUP_PRICING,
                                        children: (0, d.jsxs)(h.default, {
                                            type: 'link',
                                            children: [
                                                (0, d.jsx)('i', {
                                                    className: 'far fa-users'
                                                }),
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
            (0, d.jsx)(y, {
                children: (0, d.jsx)('img', {
                    src: '/client/img/home/right.png',
                    style: {
                        width: '100%'
                    }
                })
            })
        ]
    });
}), c.register('FxhPX', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('JD8Ln'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UserAddOutlined';
    var i = e.forwardRef(h);
}), c.register('JD8Ln', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'user-add',
        theme: 'outlined'
    };
}), c.register('iYEuk12', function(b, j) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('jLleK', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('VQ9oI'),
        g = c('ddcEP'),
        h = c('vzMY4'),
        i = c('J4zTH');
    let j;
    const k = a => (0, d.jsx)('div', {
        style: {
            height: a.height
        }
    });
    var l = () => (0, d.jsxs)(m, {
        children: [
            (0, d.jsx)(f.default, {
                title: 'Answer',
                description: 'Students answer questions on their own device at their own pace.\n            Throughout a Kit, each student will get exposure to the questions\n            multiple times to ensure mastery.',
                image: '/client/img/home/answer.png',
                imageSide: 'right'
            }),
            (0, d.jsx)(k, {
                height: 50
            }),
            (0, d.jsx)(f.default, {
                title: 'Earn',
                description: 'Students earn in-game cash by answering questions correctly. But be careful, an incorrect answer will cost you!',
                image: '/client/img/home/earn.png',
                imageSide: 'left'
            }),
            (0, d.jsx)(k, {
                height: 50
            }),
            (0, d.jsx)(f.default, {
                title: 'Shop',
                description: 'Students can reinvest their money by purchasing upgrades & powerups. With millions of combinations, students can make purchases that suit their strengths.',
                image: '/client/img/home/shop.png',
                imageSide: 'right'
            }),
            (0, d.jsx)(k, {
                height: 50
            }),
            (0, d.jsx)(g.default, {}),
            (0, d.jsx)(k, {
                height: 100
            }),
            (0, d.jsx)(h.default, {
                title: 'Home works.',
                description: (0, d.jsxs)(d.Fragment, {
                    children: [
                        'Gimkit doesn\'t just have to be used in class. You can also assign it as homework. ',
                        (0, d.jsx)('br', {}),
                        ' ',
                        (0, d.jsx)('br', {}),
                        'Students love it and assignments are graded for you automatically.'
                    ]
                }),
                image: '/client/img/home/assignment.png',
                imageSide: 'right'
            }),
            (0, d.jsx)(k, {
                height: 100
            }),
            (0, d.jsx)(h.default, {
                title: 'KitCollab',
                description: (0, d.jsxs)(d.Fragment, {
                    children: [
                        'With KitCollab, students create questions for the game!',
                        (0, d.jsx)('br', {}),
                        ' ',
                        (0, d.jsx)('br', {}),
                        'In realtime, students submit questions, you accept them, and then the class plays a game with the questions they wrote!'
                    ]
                }),
                image: '/client/img/home/kitcollab.png',
                imageSide: 'left'
            }),
            (0, d.jsx)(k, {
                height: 100
            }),
            (0, d.jsx)(i.default, {})
        ]
    });
    const m = e.default.div.attrs({
        className: 'flex-center flex-column maxWidth'
    })(j || (j = (a => a)``));
}), c.register('VQ9oI', function(b, j) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('gSUVO');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('rFhVR');
    let h, i, j, k, l, m = a => a;
    const n = 670;
    var o = a => {
        const p = 'right' === a.imageSide;
        return (0, d.jsx)(g.default, {
            children: (0, d.jsxs)(p, {
                row: p,
                children: [
                    (0, d.jsxs)(q, {
                        marginLeft: p ? 0 : 55,
                        marginRight: p ? 55 : 0,
                        children: [
                            (0, d.jsx)(r, {
                                children: a.title
                            }),
                            (0, d.jsx)(s, {
                                children: a.description
                            })
                        ]
                    }),
                    (0, d.jsx)(t, {
                        style: {
                            transform: `rotate(${ p ? 2 : -2 }deg)`
                        },
                        src: a.image
                    })
                ]
            })
        });
    };
    const p = f.default.div.attrs({
            className: 'flex vc hc'
        })(h || (h = m`
  flex-direction: ${ 0 };
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), a => a.row ? 'row' : 'row-reverse', n),
        q = f.default.div(i || (i = m`
  max-width: 530px;
  margin-left: ${ 0 }px;
  margin-right: ${ 0 }px;
  @media (max-width: ${ 0 }px) {
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
  }
`), a => a.marginLeft, a => a.marginRight, n),
        r = f.default.div(j || (j = m`
  font-size: 40px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 32px;
  }
`), e.FontWeights.Bold, n),
        s = f.default.div(k || (k = m`
  font-size: 19px;
  @media (max-width: ${ 0 }px) {
    font-size: 16px;
  }
`), n),
        t = f.default.img(l || (l = m`
  height: 390px;
  @media (max-width: ${ 0 }px) {
    margin-top: 20px;
    height: 320px;
  }
`), n);
}), c.register('rFhVR', function(b, j) {
    a(b.exports, 'default', function() {
        return e;
    });
    let d;
    var e = c('h99Nu').default.div(d || (d = (a => a)`
  width: 90%;
  max-width: 900px;
`));
}), c.register('ddcEP', function(b, j) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('gSUVO');
    c('uPP4W');
    var g = c('h99Nu');
    let h, i, j, k, l, m = a => a;
    var n = () => (0, d.jsxs)(o, {
        children: [
            (0, d.jsxs)(p, {
                children: [
                    (0, d.jsx)(q, {
                        children: 'Always new ways to play...'
                    }),
                    (0, d.jsx)(r, {
                        children: 'That\'s just the core of Gimkit. With 10+ unique game modes and more in development, there\'s always a new way to play.'
                    })
                ]
            }),
            (0, d.jsx)(s, {})
        ]
    });
    const o = g.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(h || (h = m`
  background: #0a2540;
  color: ${ 0 };
  padding: 100px 30px;
`), e.default.White),
        p = g.default.div(i || (i = m`
  max-width: 600px;
  text-align: center;
`)),
        q = g.default.div(j || (j = m`
  color: ${ 0 };
  font-size: 40px;
  font-weight: ${ 0 };
  @media (max-width: 580px) {
    font-size: 27px;
  }
`), e.default.White, f.FontWeights.Bold),
        r = g.default.div(k || (k = m`
  color: #adbdcc;
  font-size: 19px;
  margin-top: 4px;
  @media (max-width: 580px) {
    font-size: 17px;
  }
`)),
        s = g.default.img.attrs({
            src: '/client/img/home/modes.png'
        })(l || (l = m`
  width: 100%;
  max-width: 1000px;
  margin-top: 35px;
  @media (max-width: 800px) {
    display: none;
  }
`));
}), c.register('vzMY4', function(b, j) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('gSUVO');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('rFhVR');
    let h, i, j, k, l, m, n = a => a;
    var o = a => {
        const p = 'left' === a.imageSide;
        return (0, d.jsx)(g.default, {
            children: (0, d.jsxs)(p, {
                flexDirection: p ? 'row-reverse' : 'row',
                children: [
                    (0, d.jsxs)(q, {
                        children: [
                            (0, d.jsx)(r, {
                                children: a.title
                            }),
                            (0, d.jsx)(s, {
                                children: a.description
                            })
                        ]
                    }),
                    (0, d.jsx)(t, {
                        marginLeft: p ? 0 : 50,
                        marginRight: p ? 50 : 0,
                        children: (0, d.jsx)(u, {
                            src: a.image
                        })
                    })
                ]
            })
        });
    };
    const p = f.default.div.attrs({
            className: 'maxWidth flex vc'
        })(h || (h = n`
  flex-direction: ${ 0 };
  @media (max-width: 890px) {
    flex-direction: column !important;
  }
`), a => a.flexDirection),
        q = f.default.div(i || (i = n`
  width: 100%;
  max-width: 420px;
  @media (max-width: 890px) {
    margin-bottom: 25px;
    text-align: center;
  }
`)),
        r = f.default.div(j || (j = n`
  font-size: 40px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold),
        s = f.default.div(k || (k = n`
  font-size: 19px;
  margin-top: 8px;
`)),
        t = f.default.div(l || (l = n`
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
`), a => a.marginLeft, a => a.marginRight),
        u = f.default.img.attrs({
            className: 'maxWidth'
        })(m || (m = n``));
}), c.register('J4zTH', function(b, j) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('FxhPX'),
        f = c('IsmrL'),
        g = c('lmfrI'),
        h = c('gSUVO'),
        i = c('q721a'),
        j = c('iYEuk12');
    c('uPP4W');
    var k = c('h99Nu');
    let l, m, n, o, p = a => a;
    var q = () => (0, d.jsxs)(r, {
        children: [
            (0, d.jsxs)(s, {
                children: [
                    (0, d.jsx)(t, {
                        children: 'Game on.'
                    }),
                    (0, d.jsx)(u, {
                        children: 'Get your first game going and see your students engaged like never before!'
                    })
                ]
            }),
            (0, d.jsx)(j.default, {
                to: i.REGISTER_BASE,
                children: (0, d.jsx)(f.default, {
                    icon: (0, d.jsx)(e.default, {}),
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
    const r = k.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(l || (l = p`
  background: #0a2540;
  color: ${ 0 };
  padding: 100px 30px;
`), g.default.White),
        s = k.default.div(m || (m = p`
  max-width: 770px;
  text-align: center;
`)),
        t = k.default.div(n || (n = p`
  font-size: 48px;
  font-weight: ${ 0 };
  @media (max-width: 580px) {
    font-size: 36px;
  }
`), h.FontWeights.Bold),
        u = k.default.div(o || (o = p`
  font-size: 22px;
  margin-top: -5px;
  margin-bottom: 20px;
  color: #adbdcc;
  @media (max-width: 580px) {
    font-size: 18px;
    margin-top: -1px;
  }
`));
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
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
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
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
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
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
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
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
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = arguments.length; f < g; f++)
                    for (var h in e = arguments[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, arguments);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
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
        return h.useLayoutEffect(function() {
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
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('bdX0N23', function(b, d) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = arguments.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = arguments[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
}), c.register('k0s2g17', function(b, d) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('iMnBi', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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