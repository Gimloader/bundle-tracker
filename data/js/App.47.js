function a(a, b, c, H) {
    Object.defineProperty(a, b, {
        get: c,
        set: H,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('IzC5y', function(b, H) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return x;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('PjB0f'),
        h = c('h99Nu'),
        i = c('gSUVO'),
        j = c('lmfrI'),
        k = c('fAnCc'),
        l = c('uhdn+'),
        m = c('GFgjD'),
        n = c('q721a'),
        o = c('kMQjd3'),
        p = c('iHElh'),
        q = c('0R8EW'),
        r = c('k0s2g17'),
        s = c('1//3g');
    let t, u, v = a => a;
    const w = h.default.div(t || (t = v`
  height: 100%;
  display: flex;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), a => a.customBackgroundColor || j.default.Snow, i.Fonts.SFPro, j.default.Black);
    var x = () => {
        const [y, z] = f.useState(null), {
            id: A
        } = (0, q.useParams)();
        f.useEffect(() => {
            (0, g.request)({
                url: `/api/game-report/fetch/${ A }`,
                method: 'GET',
                success: y => {
                    z(y);
                },
                error: () => (0, m.throwError)({
                    title: 'Failed to fetch report',
                    content: 'Please try again or contact support',
                    onOk: () => (0, r.NavigateTo)(n.DASHBOARD)
                })
            });
        }, []);
        return (0, e.jsx)(y, {
            children: (0, e.jsxs)(w, {
                children: [
                    (0, e.jsx)(s.default, {}),
                    y ? (0, e.jsxs)('div', {
                        className: 'maxAll flex',
                        style: {
                            flex: 1,
                            overflow: 'hidden'
                        },
                        children: [
                            (0, e.jsx)(k.default, {
                                gameReport: y
                            }),
                            (0, e.jsx)(l.default, {
                                gameReport: y
                            })
                        ]
                    }) : (0, e.jsx)('div', {
                        className: 'flex-center maxAll',
                        children: (0, e.jsx)(p.default, {
                            size: 'large'
                        })
                    })
                ]
            })
        });
    };
    const y = (0, h.default)(o.default)(u || (u = v`
  @media print {
    height: auto !important;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`));
}), c.register('fAnCc', function(H, I) {
    a(H.exports, 'default', function() {
        return E;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('gSUVO'),
        i = c('bPH7V'),
        j = c('ExtIT'),
        k = c('T0Oog'),
        l = c('PjB0f'),
        m = c('qLhB38'),
        n = c('Vlfxs'),
        o = c('cbOcU'),
        p = c('IxDFI'),
        q = (l = c('PjB0f'), c('Gxgc3')),
        r = c('b+LEP25'),
        s = c('Hu/Y9'),
        t = c('2MCaL'),
        u = c('iYEuk12'),
        v = c('C891a'),
        w = c('U31rS3');
    let x, y, z, A = a => a;
    const B = f.default.div.attrs({
            className: 'scroll-y'
        })(x || (x = A`
  width: 390px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`), g.default.White, g.default.BorderGray),
        C = f.default.div(y || (y = A`
  font-weight: ${ 0 };
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`), h.FontWeights.UltraBold),
        D = f.default.div(z || (z = A`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`));
    var E = (0, n.observer)(a => {
        const {
            gameReport: F
        } = G, {
            navigation: H
        } = e.useContext(o.default), I = F.expiration ? b(t)(F.expiration) : b(t)((0, l.dateFromObjectId)(F._id)).add(546, 'days'), J = I.diff(b(t)((0, l.dateFromObjectId)(F._id)), 'days'), K = !b(t)().isAfter(I) && Math.abs(b(t)().diff(I, 'months')) < 3;
        return (0, d.jsxs)(B, {
            children: [
                (0, d.jsx)(l.Title, {
                    title: `Report - ${ F.game.title } - ${ F.players.length } ${ (0, l.plural)('participant', F.players.length) } - ${ b(t)(F.dateCreated).format('L') }`
                }),
                (0, d.jsx)(v.default, {}),
                (0, d.jsxs)('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: 15
                    },
                    children: [
                        (0, d.jsx)(m.default, {
                            size: 150,
                            image: F.game.gif,
                            style: {
                                marginTop: 27
                            }
                        }),
                        (0, d.jsx)(u.default, {
                            style: {
                                color: g.default.Black,
                                textDecoration: 'none'
                            },
                            to: `/view/${ F.game._id }`,
                            children: (0, d.jsx)(C, {
                                children: F.game.title
                            })
                        }),
                        (0, d.jsxs)(D, {
                            children: [
                                F.players.length + ' ' + (0, l.plural)('participant', F.players.length),
                                ' ',
                                '-',
                                ' ',
                                F.mapAssignment ? (0, d.jsx)(u.default, {
                                    to: `/assignment/${ F.mapAssignment }`,
                                    children: 'Assignment'
                                }) : b(t)(F.dateCreated).format('MMMM Do [at] LT')
                            ]
                        })
                    ]
                }),
                K ? (0, d.jsx)(i.default, {
                    banner: !0,
                    message: `${ J >= 365 ? 'Reports are automatically deleted after 1.5 years. ' : '' }This report will be deleted on ${ I.format('MMMM Do') }.`
                }) : null,
                (0, d.jsx)(j.default, {
                    style: {
                        marginBottom: 10
                    }
                }),
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(w.default, {
                            icon: r.default,
                            onClick: () => H.currentTab = p.default.breakdown,
                            title: 'Question Breakdown',
                            selected: H.currentTab === p.default.breakdown
                        }, 'breakdown'),
                        (0, d.jsx)(w.default, {
                            icon: s.default,
                            onClick: () => H.currentTab = p.default.overview,
                            title: 'Student Overview',
                            selected: H.currentTab === p.default.overview
                        }, 'studentOverview'),
                        (0, d.jsx)(w.default, {
                            icon: q.default,
                            onClick: () => H.currentTab = p.default.general,
                            title: 'Quick Stats',
                            selected: H.currentTab === p.default.general
                        }, 'overview'),
                        (0, d.jsx)(j.default, {}),
                        (0, d.jsx)(k.default, {
                            gameReport: F
                        })
                    ]
                })
            ]
        });
    });
}), c.register('T0Oog', function(b, l) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Vlfxs'),
        g = c('cbOcU'),
        h = c('IxDFI'),
        i = c('U31rS3');
    const j = (a, b) => {
        var k = a.name.toLowerCase(),
            l = b.name.toLowerCase();
        return k < l ? -1 : k > l ? 1 : 0;
    };
    var k = (0, f.observer)(a => {
        const {
            gameReport: l
        } = m, {
            navigation: n
        } = e.useContext(g.default);
        return (0, d.jsx)(d.Fragment, {
            children: l.players.sort(j).map((m, l) => (0, d.jsx)(i.default, {
                icon: null,
                title: m.name,
                onClick: () => {
                    n.currentTab = h.default.player, n.currentPlayer = l;
                },
                selected: n.currentTab === h.default.player && n.currentPlayer === l
            }, l))
        });
    });
}), c.register('cbOcU', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('p/V7n');
    var f = d.createContext(e.default);
}), c.register('p/V7n', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        navigation: new(0, (c('XNTdB')).default)()
    };
}), c.register('XNTdB', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('6gioo'),
        e = c('UnUp5'),
        f = c('IxDFI');
    class g {
        constructor() {
            this.currentTab = f.default.breakdown, this.currentPlayer = null, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'currentTab', void 0), (0, d.__decorate)([e.observable], g.prototype, 'currentPlayer', void 0);
    var h = i;
}), c.register('IxDFI', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).general = 'general', e.breakdown = 'breakdown', e.player = 'player', e.overview = 'overview';
    var f = g;
}), c.register('U31rS3', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('gSUVO');
    let i, j, k, l = a => a;
    const m = '#1890FF',
        n = f.default.div(i || (i = l`
  width: 100%;
  box-sizing: border-box;
  font-family: ${ 0 };
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${ 0 }px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  transition: all 0.25s;
  &:hover {
    color: ${ 0 };
  }
`), h.Fonts.SFPro, 14, a => a.selected && !a.blockBackground ? '#E5F7FE' : g.default.White, a => a.selected ? m : 'rgba(0,0,0,.65)', a => a.selected && !a.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: r,
                onClick: s,
                selected: t,
                blockStripe: u,
                blockBackground: v
            } = this.props, w = this.props.icon;
            return (0, d.jsxs)(n, {
                selected: t,
                blockStripe: u,
                blockBackground: v,
                onClick: s,
                className: this.props.className,
                ...this.props.style,
                children: [
                    w ? (0, d.jsx)(w, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, d.jsxs)(o, {
                        children: [
                            (0, d.jsx)(p, {
                                children: r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var r = s;
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('Gxgc3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('VuVyf'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ProjectOutlined';
    var i = e.forwardRef(h);
}), c.register('VuVyf', function(b, c) {
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
                    d: 'M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'
                }
            }]
        },
        name: 'project',
        theme: 'outlined'
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
}), c.register('Hu/Y9', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('jhMVx'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'TeamOutlined';
    var i = e.forwardRef(h);
}), c.register('jhMVx', function(b, c) {
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
                    d: 'M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z'
                }
            }]
        },
        name: 'team',
        theme: 'outlined'
    };
}), c.register('iYEuk12', function(b, t) {
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
}), c.register('uhdn+', function(b, t) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('zmvgA'),
        g = c('oZZgh'),
        h = c('9TAjB'),
        i = c('D6jv4'),
        j = c('cbOcU'),
        k = c('Vlfxs'),
        l = c('IxDFI'),
        m = c('C891a'),
        n = c('h99Nu');
    let o;
    var p = (0, k.observer)(a => {
        const {
            navigation: q
        } = e.useContext(j.default), {
            gameReport: r
        } = s, {
            currentTab: t,
            currentPlayer: u
        } = v;
        return (0, d.jsxs)(q, {
            children: [
                (0, d.jsx)(m.default, {}),
                t === l.default.general ? (0, d.jsx)(f.default, {
                    gameReport: r
                }) : t === l.default.overview ? (0, d.jsx)(i.default, {
                    gameReport: r
                }) : t === l.default.breakdown ? (0, d.jsx)(g.default, {
                    gameReport: r
                }) : t === l.default.player && r.players[u] ? (0, d.jsx)(h.default, {
                    player: r.players[u],
                    questions: r.questions
                }) : null
            ]
        }, `${ t }-${ u }`);
    });
    const q = n.default.div.attrs({
        className: 'maxWidth scroll-y'
    })(o || (o = (a => a)`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`));
}), c.register('zmvgA', function(b, o) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f'),
        g = c('ABRlx'),
        h = c('1oJMT'),
        i = c('/mQJs'),
        j = c('9rz8D');
    var k = a => {
        const {
            gameReport: l
        } = m, n = e.useMemo(() => l.players.reduce((m, l) => l.correctQuestionIds.length + m, 0), [l.players.length]), o = e.useMemo(() => l.players.reduce((m, l) => l.incorrectQuestionIds.length + m, 0), [l.players.length]), p = e.useMemo(() => (0, f.calculateAccuracy)(n, o), [
            n,
            o
        ]);
        return (0, d.jsx)(j.default, {
            children: (0, d.jsxs)('div', {
                children: [
                    (0, d.jsx)(h.default, {
                        title: 'Quick Stats',
                        description: 'The stats on how the game went down'
                    }),
                    (0, d.jsx)(i.default, {
                        header: 'Questions Answered Correctly',
                        content: n,
                        contentColor: g.default.Green
                    }),
                    (0, d.jsx)(i.default, {
                        header: 'Questions Answered Incorrectly',
                        content: o,
                        contentColor: g.default.Red
                    }),
                    (0, d.jsx)(i.default, {
                        header: 'Accuracy',
                        content: `${ p }%`,
                        contentColor: g.default.Blue
                    })
                ]
            })
        });
    };
}), c.register('oZZgh', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('7W7GT'),
        g = c('1oJMT'),
        h = c('9rz8D'),
        i = c('PjB0f'),
        j = c('UB3CJ'),
        k = c('Ru7Z6');
    var l = a => {
        const {
            players: m,
            questions: n
        } = a.gameReport, o = e.useMemo(() => n.map(a => {
            let p = 0,
                q = 0;
            return m.forEach(m => {
                m.correctQuestionIds.forEach(m => {
                    m === a._id && p++;
                }), m.incorrectQuestionIds.forEach(m => {
                    m === a._id && q++;
                });
            }), {
                question: a,
                resultData: {
                    correct: p,
                    incorrect: q,
                    accuracy: (0, i.calculateAccuracy)(p, q)
                }
            };
        }), [
            m.length,
            n.length
        ]).sort((a, m) => a.resultData.accuracy > m.resultData.accuracy ? 1 : -1);
        return (0, d.jsxs)(h.default, {
            children: [
                (0, d.jsx)(g.default, {
                    title: 'Question Breakdown',
                    description: 'See which questions students have down or need help with',
                    download: () => {
                        const p = j.unparse(o.map(a => {
                            var q, r;
                            return {
                                Question: null !== (r = null === (q = a.question) || void 0 === q ? void 0 : q.text) && void 0 !== r ? r : 'Media Question',
                                'Correct Count': a.resultData.correct,
                                'Incorrect Count': a.resultData.incorrect,
                                Accuracy: a.resultData.accuracy + '%'
                            };
                        }));
                        (0, k.DownloadReportCSV)({
                            csv: p,
                            fileName: `${ a.gameReport.game.title } Question Breakdown`
                        });
                    }
                }),
                (0, d.jsx)('div', {
                    children: o.map(a => (0, d.jsx)(f.default, {
                        question: a.question,
                        correct: a.resultData.correct,
                        incorrect: a.resultData.incorrect,
                        accuracy: a.resultData.accuracy
                    }, a.question._id + '-breakdown'))
                })
            ]
        });
    };
}), c.register('Ru7Z6', function(b, c) {
    a(b.exports, 'DownloadReportCSV', function() {
        return d;
    });
    const d = a => {
        const e = new Blob([a.csv], {
                type: 'text/csv'
            }),
            f = URL.createObjectURL(e),
            g = document.createElement('a');
        g.href = f;
        let h = a.fileName;
        h = h.replace(/ /g, '_'), g.download = `${ h }.csv`, g.click();
    };
}), c.register('D6jv4', function(b, E) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('f9f+a'),
        g = c('h99Nu'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('Vlfxs'),
        k = c('cbOcU'),
        l = c('IxDFI'),
        m = c('1oJMT'),
        n = c('O5zf8'),
        o = c('9rz8D'),
        p = c('PjB0f'),
        q = c('UB3CJ'),
        r = c('Ru7Z6');
    let s, t, u = a => a;
    const v = g.default.div(s || (s = u`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`)),
        w = (0, g.default)(f.default)(t || (t = u`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${ 0 } !important;
  color: ${ 0 } !important;
`), i.FontWeights.Bold, h.default.Black);
    var x = (0, j.observer)(a => {
        const {
            gameReport: y
        } = z, {
            navigation: A
        } = e.useContext(k.default);
        return (0, d.jsxs)(o.default, {
            children: [
                (0, d.jsx)(m.default, {
                    title: 'Student Overview',
                    description: 'Quick look on how each student performed',
                    download: () => {
                        const B = q.unparse(y.players.map(z => {
                            const C = (0, p.calculateAccuracy)(z.correctQuestionIds.length, z.incorrectQuestionIds.length);
                            var D, E;
                            return {
                                'Player Name': z.name,
                                'Questions Answered Correctly': null !== (D = z.correctQuestionIds.length) && void 0 !== D ? D : 0,
                                'Questions Answered Incorrectly': null !== (E = z.incorrectQuestionIds.length) && void 0 !== E ? E : 0,
                                Accuracy: C + '%'
                            };
                        }));
                        (0, r.DownloadReportCSV)({
                            csv: B,
                            fileName: `${ z.gameReport.game.title } Student Overview`
                        });
                    }
                }),
                (0, d.jsx)('div', {
                    children: y.players.map((z, y) => {
                        const B = (0, p.calculateAccuracy)(z.correctQuestionIds.length, z.incorrectQuestionIds.length);
                        return (0, d.jsxs)(v, {
                            children: [
                                (0, d.jsx)(w, {
                                    hoverable: !0,
                                    onClick: () => {
                                        A.currentPlayer = y, A.currentTab = l.default.player;
                                    },
                                    children: (0, d.jsx)('div', {
                                        children: z.name
                                    })
                                }),
                                (0, d.jsx)(n.default, {
                                    correct: z.correctQuestionIds.length,
                                    incorrect: z.incorrectQuestionIds.length,
                                    accuracy: B
                                })
                            ]
                        }, `student-overview-student-${ y }`);
                    })
                })
            ]
        });
    });
}), c.register('kMQjd3', function(b, h) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('GQAFg1');
    var f = a => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: a.className,
            children: a.children
        });
    };
}), c.register('GQAFg1', function(h, i) {
    a(h.exports, 'use100vh', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('uPP4W'),
        e = function() {
            return e = Object.assign || function(a) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (a[i] = f[i]);
                return a;
            }, e.apply(this, arguments);
        },
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        },
        g = !1,
        h = (0, d.forwardRef)(function(a, c) {
            var i = a.style,
                j = f(a, ['style']),
                k = i();
            !g && (null == i ? void 0 : i.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var l = e(e({}, i), {
                height: k ? k + 'px' : '100vh'
            });
            return b(d).createElement('div', e({
                ref: c,
                style: l
            }, j));
        });
    h.displayName = 'Div100vh';

    function i() {
        var j = (0, d.useState)(j),
            k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    k() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = j();
                l(o);
            }
        }, [m]), m ? k : null;
    }

    function j() {
        return k() ? window.innerHeight : null;
    }

    function k() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('k0s2g17', function(b, d) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('SHiyt7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Gxa0x7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var i = e.forwardRef(h);
}), c.register('Gxa0x7', function(b, c) {
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
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('Ynp9Z7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('6bYDI7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var i = e.forwardRef(h);
}), c.register('6bYDI7', function(b, c) {
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
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
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
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
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
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable'
            ]);
            const {
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
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
}), c.register('CrMLT9', function(p, t) {
    a(p.exports, 'default', function() {
        return A;
    });
    var d = c('b5p1k13'),
        e = c('WfHYJ18'),
        f = c('cabca9'),
        g = c('aCkIb5'),
        h = c('PKxjP16'),
        i = c('zTitA16'),
        j = c('MvitG9'),
        k = c('oG3bd5'),
        l = c('uPP4W'),
        m = c('VAIs1'),
        n = function(a) {
            (0, j.default)(p, a);
            var o = (0, k.default)(p);

            function p(a) {
                var q;
                (0, h.default)(this, p), (q = o.call(this, a)).handleChange = function(a) {
                    var r = q.props,
                        s = r.disabled,
                        t = r.onChange;
                    s || ('checked' in q.props || q.setState({
                        checked: a.target.checked
                    }), t && t({
                        target: (0, g.default)((0, g.default)({}, q.props), {}, {
                            checked: a.target.checked
                        }),
                        stopPropagation: function() {
                            a.stopPropagation();
                        },
                        preventDefault: function() {
                            a.preventDefault();
                        },
                        nativeEvent: a.nativeEvent
                    }));
                }, q.saveInput = function(a) {
                    q.input = a;
                };
                var r = 'checked' in a ? a.checked : a.defaultChecked;
                return q.state = {
                    checked: r
                }, q;
            }
            return (0, i.default)(p, [{
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
                            A = r.tabIndex,
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
                            L = Object.keys(K).reduce(function(q, b) {
                                return 'aria-' !== b.substr(0, 5) && 'data-' !== b.substr(0, 5) && 'role' !== b || (q[b] = K[b]), q;
                            }, {}),
                            M = this.state.checked,
                            N = b(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return b(l).createElement('span', {
                            className: N,
                            style: u
                        }, b(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: A,
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
                        }, L)), b(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return 'checked' in a ? (0, g.default)((0, g.default)({}, b), {}, {
                        checked: a.checked
                    }) : null;
                }
            }]), p;
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
    var o = p;
}), c.register('b5p1k13', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, arguments);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WfHYJ18', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cabca9', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd17');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd17', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('aCkIb5', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ18');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('PKxjP16', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA16', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('MvitG9', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl15');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl15', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('oG3bd5', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g15'),
        e = c('5UNjR15'),
        f = c('EDgo89');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, arguments, k);
            } else
                i = j.apply(this, arguments);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g15', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR15', function(b, c) {
    function d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('EDgo89', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX15'),
        e = c('//YgM17');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX15', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM17', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('bTRJM', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = e.lazy(() => c('FhxEZ0'));
    var g = a => (0, d.jsx)(e.Suspense, {
        fallback: a.fallback || null,
        children: (0, d.jsx)(f, {
            latex: a.latex
        })
    });
}), c.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('8pe9D')),
        import('./' + c('tIOy4').resolve('5OCdz'))
    ]).then(() => c('feyVh'));
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
}), c.register('bzteU5', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('edRUl4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var i = e.forwardRef(h);
}), c.register('edRUl4', function(b, c) {
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
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});