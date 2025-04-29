function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('o0cSf', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _z;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('quE27'),
        j = c('u4s09'),
        k = c('Eh2Wh'),
        l = c('8KqQ+'),
        m = c('k5I1S'),
        n = c('ag1pa'),
        o = c('lptuh'),
        p = c('nKuOQ'),
        q = c('/TQKb3'),
        r = c('yruHD'),
        s = c('zcfNM'),
        t = c('KxkP827'),
        u = c('tBC08');
    let v, w, x = a => a;
    const y = j.default.div(v || (v = x`
  height: 100%;
  display: flex;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), a => a.customBackgroundColor || l.default.Snow, k.Fonts.SFPro, l.default.Black);
    var _z = () => {
        const [A, B] = h.useState(null), {
            id: C
        } = (0, s.useParams)();
        h.useEffect(() => {
            (0, i.request)({
                url: `/api/game-report/fetch/${ C }`,
                method: 'GET',
                success: A => {
                    B(A);
                },
                error: () => (0, o.throwError)({
                    title: 'Failed to fetch report',
                    content: 'Please try again or contact support',
                    onOk: () => (0, t.NavigateTo)(p.DASHBOARD)
                })
            });
        }, []);
        return (0, g.jsx)(_A, {
            children: (0, g.jsxs)(y, {
                children: [
                    (0, g.jsx)(u.default, {}),
                    A ? (0, g.jsxs)('div', {
                        className: 'maxAll flex',
                        style: {
                            flex: 1,
                            overflow: 'hidden'
                        },
                        children: [
                            (0, g.jsx)(m.default, {
                                gameReport: A
                            }),
                            (0, g.jsx)(n.default, {
                                gameReport: A
                            })
                        ]
                    }) : (0, g.jsx)('div', {
                        className: 'flex-center maxAll',
                        children: (0, g.jsx)(r.default, {
                            size: 'large'
                        })
                    })
                ]
            })
        });
    };
    const _A = (0, j.default)(q.default)(w || (w = x`
  @media print {
    height: auto !important;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`));
}), c.register('k5I1S', function(d, e) {
    a(d.exports, 'default', function() {
        return _G;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('Eh2Wh'),
        k = c('qMSe6'),
        l = c('VNuyu'),
        m = c('ocC2n'),
        n = c('quE27'),
        o = c('HFnro8'),
        p = c('6jmvl'),
        q = c('JLfu+'),
        r = c('J7eIn'),
        s = (n = c('quE27'), c('2BZLH')),
        t = c('hxyXq25'),
        u = c('EUNz6'),
        v = c('Tzf4u'),
        w = c('FB7HT26'),
        x = c('tJvRE'),
        y = c('0rXvy3');
    let z, A, B, C = a => a;
    const D = h.default.div.attrs({
            className: 'scroll-y'
        })(z || (z = C`
  width: 390px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`), i.default.White, i.default.BorderGray),
        E = h.default.div(A || (A = C`
  font-weight: ${ 0 };
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`), j.FontWeights.UltraBold),
        F = h.default.div(B || (B = C`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`));
    var _G = (0, p.observer)(a => {
        const {
            gameReport: H
        } = a, {
            navigation: I
        } = g.useContext(q.default), J = H.expiration ? b(v)(H.expiration) : b(v)((0, n.dateFromObjectId)(H._id)).add(546, 'days'), K = J.diff(b(v)((0, n.dateFromObjectId)(H._id)), 'days'), L = !b(v)().isAfter(J) && Math.abs(b(v)().diff(J, 'months')) < 3;
        return (0, f.jsxs)(D, {
            children: [
                (0, f.jsx)(n.Title, {
                    title: `Report - ${ H.game.title } - ${ H.players.length } ${ (0, n.plural)('participant', H.players.length) } - ${ b(v)(H.dateCreated).format('L') }`
                }),
                (0, f.jsx)(x.default, {}),
                (0, f.jsxs)('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: 15
                    },
                    children: [
                        (0, f.jsx)(o.default, {
                            size: 150,
                            image: H.game.gif,
                            style: {
                                marginTop: 27
                            }
                        }),
                        (0, f.jsx)(w.default, {
                            style: {
                                color: i.default.Black,
                                textDecoration: 'none'
                            },
                            to: `/view/${ H.game._id }`,
                            children: (0, f.jsx)(E, {
                                children: H.game.title
                            })
                        }),
                        (0, f.jsxs)(F, {
                            children: [
                                H.players.length + ' ' + (0, n.plural)('participant', H.players.length),
                                ' ',
                                '-',
                                ' ',
                                H.mapAssignment ? (0, f.jsx)(w.default, {
                                    to: `/assignment/${ H.mapAssignment }`,
                                    children: 'Assignment'
                                }) : b(v)(H.dateCreated).format('MMMM Do [at] LT')
                            ]
                        })
                    ]
                }),
                L ? (0, f.jsx)(k.default, {
                    banner: !0,
                    message: `${ K >= 365 ? 'Reports are automatically deleted after 1.5 years. ' : '' }This report will be deleted on ${ J.format('MMMM Do') }.`
                }) : null,
                (0, f.jsx)(l.default, {
                    style: {
                        marginBottom: 10
                    }
                }),
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(y.default, {
                            icon: t.default,
                            onClick: () => I.currentTab = r.default.breakdown,
                            title: 'Question Breakdown',
                            selected: I.currentTab === r.default.breakdown
                        }, 'breakdown'),
                        (0, f.jsx)(y.default, {
                            icon: u.default,
                            onClick: () => I.currentTab = r.default.overview,
                            title: 'Student Overview',
                            selected: I.currentTab === r.default.overview
                        }, 'studentOverview'),
                        (0, f.jsx)(y.default, {
                            icon: s.default,
                            onClick: () => I.currentTab = r.default.general,
                            title: 'Quick Stats',
                            selected: I.currentTab === r.default.general
                        }, 'overview'),
                        (0, f.jsx)(l.default, {}),
                        (0, f.jsx)(m.default, {
                            gameReport: H
                        })
                    ]
                })
            ]
        });
    });
}), c.register('ocC2n', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('6jmvl'),
        i = c('JLfu+'),
        j = c('J7eIn'),
        k = c('0rXvy3');
    const l = (a, d) => {
        var m = a.name.toLowerCase(),
            n = d.name.toLowerCase();
        return m < n ? -1 : m > n ? 1 : 0;
    };
    var _m = (0, h.observer)(a => {
        const {
            gameReport: n
        } = a, {
            navigation: o
        } = g.useContext(i.default);
        return (0, f.jsx)(f.Fragment, {
            children: n.players.sort(l).map((a, n) => (0, f.jsx)(k.default, {
                icon: null,
                title: a.name,
                onClick: () => {
                    o.currentTab = j.default.player, o.currentPlayer = n;
                },
                selected: o.currentTab === j.default.player && o.currentPlayer === n
            }, n))
        });
    });
}), c.register('JLfu+', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('vfDW7');
    var _h = f.createContext(g.default);
}), c.register('vfDW7', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        navigation: new(0, (c('1s16R')).default)()
    };
}), c.register('1s16R', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT'),
        h = c('J7eIn');
    class i {
        constructor() {
            this.currentTab = h.default.breakdown, this.currentPlayer = null, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'currentTab', void 0), (0, f.__decorate)([g.observable], i.prototype, 'currentPlayer', void 0);
    var _j = i;
}), c.register('J7eIn', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).general = 'general', g.breakdown = 'breakdown', g.player = 'player', g.overview = 'overview';
    var _h = f;
}), c.register('0rXvy3', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('Eh2Wh');
    let k, l, m, n = a => a;
    const o = '#1890FF',
        p = h.default.div(k || (k = n`
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
`), j.Fonts.SFPro, 14, a => a.selected && !a.blockBackground ? '#E5F7FE' : i.default.White, a => a.selected ? o : 'rgba(0,0,0,.65)', a => a.selected && !a.blockStripe && 'border-right: 3px solid ' + o + ';', o),
        q = h.default.div.attrs({
            className: 'flex vc maxWidth'
        })(l || (l = n``)),
        r = h.default.div(m || (m = n``));
    class s extends g.Component {
        render() {
            const {
                title: t,
                onClick: u,
                selected: v,
                blockStripe: w,
                blockBackground: x
            } = this.props, y = this.props.icon;
            return (0, f.jsxs)(p, {
                selected: v,
                blockStripe: w,
                blockBackground: x,
                onClick: u,
                className: this.props.className,
                ...this.props.style,
                children: [
                    y ? (0, f.jsx)(y, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, f.jsxs)(q, {
                        children: [
                            (0, f.jsx)(r, {
                                children: t
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
}), c.register('HFnro8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('HloXO');
    let l;
    const m = h.default.img.attrs(a => ({
        src: a.image
    }))(l || (l = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = a => {
        const [o, p] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...a,
                    onClick: o => {
                        o.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || p(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: o,
                    onCancel: a => {
                        a.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('HloXO', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = a => {
            const g = _g(a);
            return g ? a.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : a;
        },
        _g = a => {
            if (!_k.some(d => a.includes(d)))
                return null;
            if (a.includes(_i) && !a.includes(`/${ _j }/`))
                return null;
            const h = a.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('2BZLH', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('o3DfG'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ProjectOutlined';
    var _k = g.forwardRef(j);
}), c.register('o3DfG', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('hxyXq25', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1XwWU13'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('1XwWU13', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('EUNz6', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('NPVsN'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TeamOutlined';
    var _k = g.forwardRef(j);
}), c.register('NPVsN', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('FB7HT26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('+cTfn');
    c('O0Kav');
    var _h = a => a.external || !a.to ? (0, f.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: d => {
            a.onClick && 'Enter' === d.key && (d.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, f.jsx)(g.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('ag1pa', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('yEuGb'),
        i = c('FgbrH'),
        j = c('6IEcI'),
        k = c('ZYTvy'),
        l = c('JLfu+'),
        m = c('6jmvl'),
        n = c('J7eIn'),
        o = c('tJvRE'),
        p = c('u4s09');
    let q;
    var _r = (0, m.observer)(a => {
        const {
            navigation: s
        } = g.useContext(l.default), {
            gameReport: t
        } = a, {
            currentTab: u,
            currentPlayer: v
        } = s;
        return (0, f.jsxs)(_s, {
            children: [
                (0, f.jsx)(o.default, {}),
                u === n.default.general ? (0, f.jsx)(h.default, {
                    gameReport: t
                }) : u === n.default.overview ? (0, f.jsx)(k.default, {
                    gameReport: t
                }) : u === n.default.breakdown ? (0, f.jsx)(i.default, {
                    gameReport: t
                }) : u === n.default.player && t.players[v] ? (0, f.jsx)(j.default, {
                    player: t.players[v],
                    questions: t.questions
                }) : null
            ]
        }, `${ u }-${ v }`);
    });
    const _s = p.default.div.attrs({
        className: 'maxWidth scroll-y'
    })(q || (q = (a => a)`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`));
}), c.register('yEuGb', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('quE27'),
        i = c('4h4H+'),
        j = c('Qz2bf'),
        k = c('TdznM'),
        l = c('WSTHs');
    var _m = a => {
        const {
            gameReport: n
        } = a, o = g.useMemo(() => n.players.reduce((a, n) => n.correctQuestionIds.length + a, 0), [n.players.length]), p = g.useMemo(() => n.players.reduce((a, n) => n.incorrectQuestionIds.length + a, 0), [n.players.length]), q = g.useMemo(() => (0, h.calculateAccuracy)(o, p), [
            o,
            p
        ]);
        return (0, f.jsx)(l.default, {
            children: (0, f.jsxs)('div', {
                children: [
                    (0, f.jsx)(j.default, {
                        title: 'Quick Stats',
                        description: 'The stats on how the game went down'
                    }),
                    (0, f.jsx)(k.default, {
                        header: 'Questions Answered Correctly',
                        content: o,
                        contentColor: i.default.Green
                    }),
                    (0, f.jsx)(k.default, {
                        header: 'Questions Answered Incorrectly',
                        content: p,
                        contentColor: i.default.Red
                    }),
                    (0, f.jsx)(k.default, {
                        header: 'Accuracy',
                        content: `${ q }%`,
                        contentColor: i.default.Blue
                    })
                ]
            })
        });
    };
}), c.register('FgbrH', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('HP1aQ'),
        i = c('Qz2bf'),
        j = c('WSTHs'),
        k = c('quE27'),
        l = c('mcC/4'),
        m = c('uxZvZ');
    var _n = a => {
        const {
            players: o,
            questions: p
        } = a.gameReport, q = g.useMemo(() => p.map(a => {
            let r = 0,
                s = 0;
            return o.forEach(o => {
                o.correctQuestionIds.forEach(o => {
                    o === a._id && r++;
                }), o.incorrectQuestionIds.forEach(o => {
                    o === a._id && s++;
                });
            }), {
                question: a,
                resultData: {
                    correct: r,
                    incorrect: s,
                    accuracy: (0, k.calculateAccuracy)(r, s)
                }
            };
        }), [
            o.length,
            p.length
        ]).sort((a, o) => a.resultData.accuracy > o.resultData.accuracy ? 1 : -1);
        return (0, f.jsxs)(j.default, {
            children: [
                (0, f.jsx)(i.default, {
                    title: 'Question Breakdown',
                    description: 'See which questions students have down or need help with',
                    download: () => {
                        const r = l.unparse(q.map(a => {
                            var s, t;
                            return {
                                Question: null !== (t = null === (s = a.question) || void 0 === s ? void 0 : s.text) && void 0 !== t ? t : 'Media Question',
                                'Correct Count': a.resultData.correct,
                                'Incorrect Count': a.resultData.incorrect,
                                Accuracy: a.resultData.accuracy + '%'
                            };
                        }));
                        (0, m.DownloadReportCSV)({
                            csv: r,
                            fileName: `${ a.gameReport.game.title } Question Breakdown`
                        });
                    }
                }),
                (0, f.jsx)('div', {
                    children: q.map(a => (0, f.jsx)(h.default, {
                        question: a.question,
                        correct: a.resultData.correct,
                        incorrect: a.resultData.incorrect,
                        accuracy: a.resultData.accuracy
                    }, a.question._id + '-breakdown'))
                })
            ]
        });
    };
}), c.register('uxZvZ', function(d, e) {
    a(d.exports, 'DownloadReportCSV', function() {
        return _f;
    });
    const _f = a => {
        const g = new Blob([a.csv], {
                type: 'text/csv'
            }),
            h = URL.createObjectURL(g),
            i = document.createElement('a');
        i.href = h;
        let j = a.fileName;
        j = j.replace(/ /g, '_'), i.download = `${ j }.csv`, i.click();
    };
}), c.register('ZYTvy', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('QZ0Z+'),
        i = c('u4s09'),
        j = c('8KqQ+'),
        k = c('Eh2Wh'),
        l = c('6jmvl'),
        m = c('JLfu+'),
        n = c('J7eIn'),
        o = c('Qz2bf'),
        p = c('ZLehh'),
        q = c('WSTHs'),
        r = c('quE27'),
        s = c('mcC/4'),
        t = c('uxZvZ');
    let u, v, w = a => a;
    const x = i.default.div(u || (u = w`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`)),
        y = (0, i.default)(h.default)(v || (v = w`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${ 0 } !important;
  color: ${ 0 } !important;
`), k.FontWeights.Bold, j.default.Black);
    var _z = (0, l.observer)(a => {
        const {
            gameReport: A
        } = a, {
            navigation: B
        } = g.useContext(m.default);
        return (0, f.jsxs)(q.default, {
            children: [
                (0, f.jsx)(o.default, {
                    title: 'Student Overview',
                    description: 'Quick look on how each student performed',
                    download: () => {
                        const C = s.unparse(A.players.map(a => {
                            const D = (0, r.calculateAccuracy)(a.correctQuestionIds.length, a.incorrectQuestionIds.length);
                            var E, F;
                            return {
                                'Player Name': a.name,
                                'Questions Answered Correctly': null !== (E = a.correctQuestionIds.length) && void 0 !== E ? E : 0,
                                'Questions Answered Incorrectly': null !== (F = a.incorrectQuestionIds.length) && void 0 !== F ? F : 0,
                                Accuracy: D + '%'
                            };
                        }));
                        (0, t.DownloadReportCSV)({
                            csv: C,
                            fileName: `${ a.gameReport.game.title } Student Overview`
                        });
                    }
                }),
                (0, f.jsx)('div', {
                    children: A.players.map((a, A) => {
                        const C = (0, r.calculateAccuracy)(a.correctQuestionIds.length, a.incorrectQuestionIds.length);
                        return (0, f.jsxs)(x, {
                            children: [
                                (0, f.jsx)(y, {
                                    hoverable: !0,
                                    onClick: () => {
                                        B.currentPlayer = A, B.currentTab = n.default.player;
                                    },
                                    children: (0, f.jsx)('div', {
                                        children: a.name
                                    })
                                }),
                                (0, f.jsx)(p.default, {
                                    correct: a.correctQuestionIds.length,
                                    incorrect: a.incorrectQuestionIds.length,
                                    accuracy: C
                                })
                            ]
                        }, `student-overview-student-${ A }`);
                    })
                })
            ]
        });
    });
}), c.register('/TQKb3', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('whfeO2');
    var _h = a => {
        const i = (0, g.use100vh)();
        return (0, f.jsx)('div', {
            style: {
                height: i,
                width: '100%'
            },
            className: a.className,
            children: a.children
        });
    };
}), c.register('whfeO2', function(d, e) {
    a(d.exports, 'use100vh', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('O0Kav'),
        g = function() {
            return g = Object.assign || function(h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }, g.apply(this, arguments);
        },
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        },
        i = !1,
        j = (0, f.forwardRef)(function(k, l) {
            var m = k.style,
                n = h(k, ['style']),
                o = _k();
            !i && (null == m ? void 0 : m.height) && (i = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var p = g(g({}, m), {
                height: o ? o + 'px' : '100vh'
            });
            return b(f).createElement('div', g({
                ref: l,
                style: p
            }, n));
        });
    j.displayName = 'Div100vh';

    function _k() {
        var l = (0, f.useState)(_l),
            m = l[0],
            n = l[1],
            o = function() {
                var p = (0, f.useState)(!1),
                    q = p[0],
                    r = p[1];
                return (0, f.useEffect)(function() {
                    _m() && r(!0);
                }, []), q;
            }();
        return (0, f.useEffect)(function() {
            if (o)
                return window.addEventListener('resize', l),
                    function() {
                        return window.removeEventListener('resize', l);
                    };

            function p() {
                var q = _l();
                n(q);
            }
        }, [o]), o ? m : null;
    }

    function _l() {
        return _m() ? window.innerHeight : null;
    }

    function _m() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('rLQJQ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('M2CB57'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('M2CB57', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('+Nyqr7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lzm1Z7'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('lzm1Z7', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('e5xHg25', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('MsxQz'),
        g = c('O0Kav'),
        h = c('R2nG3');

    function _i(j, k, l) {
        return function(m) {
            const {
                prefixCls: n,
                style: o
            } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, {
                value: m.open
            }), {
                getPrefixCls: w
            } = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(y => {
                            const z = y[0].target;
                            r(z.offsetHeight + 8), t(z.offsetWidth);
                        }),
                        z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`,
                                C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), {
                    margin: 0
                }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('kufQf25', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('ZyWBF'),
        g = c('6vEai');
    const h = new(0, f.Keyframes)('antMoveDownIn', {
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
        i = new(0, f.Keyframes)('antMoveDownOut', {
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
        j = new(0, f.Keyframes)('antMoveLeftIn', {
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
        k = new(0, f.Keyframes)('antMoveLeftOut', {
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
        l = new(0, f.Keyframes)('antMoveRightIn', {
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
        m = new(0, f.Keyframes)('antMoveRightOut', {
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
        n = {
            'move-up': {
                inKeyframes: new(0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, f.Keyframes)('antMoveUpOut', {
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
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        },
        _o = (a, d) => {
            const {
                antCls: p
            } = a, q = `${ p }-${ d }`, {
                inKeyframes: r,
                outKeyframes: s
            } = n[d];
            return [
                (0, g.initMotion)(q, r, s, a.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('E2AMI26', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('42T6R26'),
        k = c('yRLYd'),
        l = c('qW/eZ26'),
        m = c('AzDc2'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = a => {
        const {
            getPrefixCls: r,
            space: s,
            direction: t
        } = h.useContext(i.ConfigContext), {
            size: u = (null == s ? void 0 : s.size) || 'small',
            align: v,
            className: _w,
            rootClassName: x,
            children: y,
            direction: z = 'horizontal',
            prefixCls: A,
            split: B,
            style: C,
            wrap: D = !1
        } = a, E = n(a, [
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
        ]), F = (0, j.default)(), [G, H] = h.useMemo(() => (Array.isArray(u) ? u : [
            u,
            u
        ]).map(a => function(I) {
            return 'string' == typeof I ? p[I] : I || 0;
        }(a)), [u]), I = (0, g.default)(y, {
            keepEmpty: !0
        }), J = void 0 === v && 'horizontal' === z ? 'center' : v, K = r('space', A), [L, M] = (0, m.default)(K), N = b(f)(K, M, `${ K }-${ z }`, {
            [`${ K }-rtl`]: 'rtl' === t,
            [`${ K }-align-${ J }`]: J
        }, _w, x), O = `${ K }-item`, P = 'rtl' === t ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((a, b) => {
                null != a && (Q = b);
                const S = a && a.key || `${ O }-${ b }`;
                return h.createElement(l.default, {
                    className: O,
                    key: S,
                    direction: z,
                    index: b,
                    marginDirection: P,
                    split: B,
                    wrap: D
                }, a);
            }),
            S = h.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return D && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(h.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), C)
        }, E), h.createElement(_o.Provider, {
            value: S
        }, R)));
    };
    q.Compact = k.default;
    var r = q;
}), c.register('42T6R26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nzHVd'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('qW/eZ26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('E2AMI26');

    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = {
            marginBottom: q / (o ? 2 : 1)
        }) : u = Object.assign(Object.assign({}, l < s && {
            [m]: q / (o ? 2 : 1)
        }), p && {
            paddingBottom: r
        })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('gS4g327', function(d, e) {
    var f = c('OG3rI27'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('OG3rI27', function(d, e) {
    d.exports = function() {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function() {};
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                g.blur();
                break;
            default:
                g = null;
        }
        return f.removeAllRanges(),
            function() {
                'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function(j) {
                    f.addRange(j);
                }), g && g.focus();
            };
    };
}), c.register('LBLT38', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    }, function(f) {
        return _u = f;
    });
    var f = c('ReZvd'),
        g = c('/U36/'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('puH1V'),
        k = c('Zs019'),
        l = c('4AW2P8'),
        m = c('8/APV8'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (a, c) => {
            var {
                prefixCls: p,
                className: q,
                rootClassName: r,
                style: s,
                children: t,
                icon: _u,
                color: v,
                onClose: w,
                closeIcon: x,
                closable: y = !1
            } = a, z = n(a, [
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
                getPrefixCls: A,
                direction: B
            } = h.useContext(i.ConfigContext), [C, D] = h.useState(!0);
            h.useEffect(() => {
                'visible' in z && D(z.visible);
            }, [z.visible]);
            const E = (0, j.isPresetColor)(v) || (0, j.isPresetStatusColor)(v),
                F = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, s),
                G = A('tag', p),
                [H, I] = (0, m.default)(G),
                J = b(g)(G, {
                    [`${ G }-${ v }`]: E,
                    [`${ G }-has-color`]: v && !E,
                    [`${ G }-hidden`]: !C,
                    [`${ G }-rtl`]: 'rtl' === B
                }, q, r, I),
                K = a => {
                    a.stopPropagation(), null == w || w(a), a.defaultPrevented || D(!1);
                },
                L = 'function' == typeof z.onClick || t && 'a' === t.type,
                M = _u || null,
                N = M ? h.createElement(h.Fragment, null, M, h.createElement('span', null, t)) : t,
                O = h.createElement('span', Object.assign({}, z, {
                    ref: c,
                    className: J,
                    style: F
                }), N, y ? x ? h.createElement('span', {
                    className: `${ G }-close-icon`,
                    onClick: K
                }, x) : h.createElement(f.default, {
                    className: `${ G }-close-icon`,
                    onClick: K
                }) : null);
            return H(L ? h.createElement(k.default, null, O) : O);
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var q = p;
}), c.register('4AW2P8', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('/U36/'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('8/APV8'),
        j = function(k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    var _k = a => {
        var {
            prefixCls: l,
            className: m,
            checked: n,
            onChange: o,
            onClick: p
        } = a, q = j(a, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: r
        } = g.useContext(h.ConfigContext), s = r('tag', l), [t, u] = (0, i.default)(s), v = b(f)(s, {
            [`${ s }-checkable`]: !0,
            [`${ s }-checkable-checked`]: n
        }, m, u);
        return t(g.createElement('span', Object.assign({}, q, {
            className: v,
            onClick: a => {
                null == o || o(!n), null == p || p(a);
            }
        })));
    };
}), c.register('8/APV8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('zn07B8'),
        i = c('OVjjp'),
        j = c('/zzpx');
    const k = (a, d, c) => {
            const l = (0, h.default)(c);
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ l }Bg`],
                    borderColor: a[`color${ l }Border`]
                }
            };
        },
        l = a => (0, i.genPresetColor)(a, (d, c) => {
            let {
                textColor: m,
                lightBorderColor: n,
                lightColor: o,
                darkColor: p
            } = c;
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: m,
                    background: o,
                    borderColor: n,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: p,
                        borderColor: p
                    }
                }
            };
        }),
        m = a => {
            const {
                paddingXXS: n,
                lineWidth: o,
                tagPaddingHorizontal: p,
                componentCls: q
            } = a, r = p - o, s = n - o;
            return {
                [q]: Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: a.marginXS,
                    paddingInline: r,
                    fontSize: a.tagFontSize,
                    lineHeight: `${ a.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: a.tagDefaultBg,
                    border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                    borderRadius: a.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ a.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ q }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: a.tagDefaultColor
                    },
                    [`${ q }-close-icon`]: {
                        marginInlineStart: s,
                        color: a.colorTextDescription,
                        fontSize: a.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ a.motionDurationMid }`,
                        '&:hover': {
                            color: a.colorTextHeading
                        }
                    },
                    [`&${ q }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ a.iconCls }-close, ${ a.iconCls }-close:hover`]: {
                            color: a.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ q }-checkable-checked):hover`]: {
                            color: a.colorPrimary,
                            backgroundColor: a.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: a.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: a.colorPrimary,
                            '&:hover': {
                                backgroundColor: a.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: a.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ a.iconCls } + span, > span + ${ a.iconCls }`]: {
                        marginInlineStart: r
                    }
                })
            };
        };
    var _n = (0, f.default)('Tag', a => {
        const {
            fontSize: o,
            lineHeight: p,
            lineWidth: q,
            fontSizeIcon: r
        } = a, s = Math.round(o * p), t = a.fontSizeSM, u = s - 2 * q, v = a.colorFillAlter, w = a.colorText, x = (0, g.merge)(a, {
            tagFontSize: t,
            tagLineHeight: u,
            tagDefaultBg: v,
            tagDefaultColor: w,
            tagIconSize: r - 2 * q,
            tagPaddingHorizontal: 8
        });
        return [
            m(x),
            l(x),
            k(x, 'success', 'Success'),
            k(x, 'processing', 'Info'),
            k(x, 'error', 'Error'),
            k(x, 'warning', 'Warning')
        ];
    });
}), c.register('zn07B8', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('ZIYAX24', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function() {
                return window.matchMedia(h);
            }, [h]),
            j = (0, f.useState)(function() {
                return i.matches;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useEffect)(function() {
            l(i.matches);
            var m = function(n) {
                return l(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('d/TAL25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__exportStar || function(h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), g(c('Tn4aA25'), d.exports), g(c('R+vNj25'), d.exports), g(c('5nRuZ25'), d.exports);
}), c.register('Tn4aA25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('5nRuZ25');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('5nRuZ25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__setModuleDefault || (Object.create ? function(h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function(h, i) {
            h.default = i;
        }),
        h = d.exports && d.exports.__importStar || function(i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useWindowSize = void 0;
    var i = h(c('O0Kav'));

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function() {
        var k = i.useState(j()),
            l = k[0],
            m = k[1];
        return i.useLayoutEffect(function() {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n),
                function() {
                    return window.removeEventListener('resize', n);
                };
        }, []), l;
    };
}), c.register('R+vNj25', function(d, e) {
    var f = d.exports && d.exports.__assign || function() {
            return f = Object.assign || function(g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        },
        g = d.exports && d.exports.__createBinding || (Object.create ? function(h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function() {
                    return i[j];
                }
            });
        } : function(h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }),
        h = d.exports && d.exports.__setModuleDefault || (Object.create ? function(i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function(i, j) {
            i.default = j;
        }),
        i = d.exports && d.exports.__importStar || function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useComponentSize = void 0;
    var j = i(c('O0Kav'));
    d.exports.useComponentSize = function() {
        var k = j.useState({
                height: 0,
                width: 0
            }),
            l = k[0],
            m = k[1],
            n = j.useRef(),
            o = j.useCallback(function() {
                if (n.current) {
                    var p = n.current.offsetHeight,
                        q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function() {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current),
                    function() {
                        return p.disconnect();
                    };
            }
        }, [
            n,
            o
        ]), f({
            ref: n
        }, l);
    };
}), c.register('W/XnX24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('zOtFd24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('vJWh924', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('LE3I425').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('LE3I425', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('8sxYw24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('2lnmQ24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('2lnmQ24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('JTTlV24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('P++lt24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('P++lt24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('y095j9', function(d, e) {
    a(d.exports, 'default', function() {
        return _D;
    });
    var f = c('+pD1R20'),
        g = c('KQrGU18'),
        h = c('N14UI9'),
        i = c('fS0tD9'),
        j = c('/3DFz16'),
        k = c('oFGsY16'),
        l = c('pjWA99'),
        m = c('86FOw9'),
        n = c('O0Kav'),
        o = c('/U36/'),
        p = function(q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);

            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function(v) {
                    var w = u.props,
                        x = w.disabled,
                        y = w.onChange;
                    x || ('checked' in u.props || u.setState({
                        checked: v.target.checked
                    }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, {
                            checked: v.target.checked
                        }),
                        stopPropagation: function() {
                            v.stopPropagation();
                        },
                        preventDefault: function() {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function(v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = {
                    checked: v
                }, u;
            }
            return (0, k.default)(s, [{
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
                        var t, u = this.props,
                            v = u.prefixCls,
                            w = u.className,
                            x = u.style,
                            y = u.name,
                            z = u.id,
                            A = u.type,
                            B = u.disabled,
                            C = u.readOnly,
                            _D = u.tabIndex,
                            E = u.onClick,
                            F = u.onFocus,
                            G = u.onBlur,
                            H = u.onKeyDown,
                            I = u.onKeyPress,
                            J = u.onKeyUp,
                            K = u.autoFocus,
                            L = u.value,
                            M = u.required,
                            N = (0, h.default)(u, [
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
                            O = Object.keys(N).reduce(function(P, Q) {
                                return 'aria-' !== Q.substr(0, 5) && 'data-' !== Q.substr(0, 5) && 'role' !== Q || (P[Q] = N[Q]), P;
                            }, {}),
                            P = this.state.checked,
                            Q = b(o)(v, w, (t = {}, (0, g.default)(t, ''.concat(v, '-checked'), P), (0, g.default)(t, ''.concat(v, '-disabled'), B), t));
                        return b(n).createElement('span', {
                            className: Q,
                            style: x
                        }, b(n).createElement('input', (0, f.default)({
                            name: y,
                            id: z,
                            type: A,
                            required: M,
                            readOnly: C,
                            disabled: B,
                            tabIndex: _D,
                            className: ''.concat(v, '-input'),
                            checked: !!P,
                            onClick: E,
                            onFocus: F,
                            onBlur: G,
                            onKeyUp: J,
                            onKeyDown: H,
                            onKeyPress: I,
                            onChange: this.handleChange,
                            autoFocus: K,
                            ref: this.saveInput,
                            value: L
                        }, O)), b(n).createElement('span', {
                            className: ''.concat(v, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(t, u) {
                    return 'checked' in t ? (0, i.default)((0, i.default)({}, u), {}, {
                        checked: t.checked
                    }) : null;
                }
            }]), s;
        }(n.Component);
    p.defaultProps = {
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
    var q = p;
}), c.register('+pD1R20', function(d, e) {
    function f() {
        return f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('KQrGU18', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('N14UI9', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('wlMK917');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
}), c.register('wlMK917', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('fS0tD9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KQrGU18');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function _h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                (0, f.default)(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }
}), c.register('/3DFz16', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('oFGsY16', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function g(h, i, j) {
        return i && f(h.prototype, i), j && f(h, j), h;
    }
    a(d.exports, 'default', function() {
        return g;
    });
}), c.register('pjWA99', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('/dMWm15');

    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('/dMWm15', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('86FOw9', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('FRSEq15'),
        g = c('kgMwM15'),
        h = c('qEFpg9');

    function _i(j) {
        var k = (0, g.default)();
        return function() {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('FRSEq15', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('kgMwM15', function(d, e) {
    function f() {
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
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('qEFpg9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('nPZ0615'),
        g = c('SUQix17');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('nPZ0615', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('SUQix17', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('JuRCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = g.lazy(() => c('bPSSr0'));
    var _i = a => (0, f.jsx)(g.Suspense, {
        fallback: a.fallback || null,
        children: (0, f.jsx)(h, {
            latex: a.latex
        })
    });
}), c.register('bPSSr0', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('emcKB')),
        import('./' + c('Dq3qN').resolve('5OCdz'))
    ]).then(() => c('vZVkZ'));
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
}), c.register('/poDA27', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('mQ0iF27'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('mQ0iF27', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('bQWYI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('GkLtI'),
        h = c('Nnw7z');
    var _i = (a, d) => {
        const [j, k] = f.useState(() => {
            var l, m;
            const n = a && 'current' in a ? a.current : a;
            return n ? [
                n.offsetWidth,
                n.offsetHeight
            ] : [
                null !== (l = null == d ? void 0 : d.initialWidth) && void 0 !== l ? l : 0,
                null !== (m = null == d ? void 0 : d.initialHeight) && void 0 !== m ? m : 0
            ];
        });
        return (0, h.default)(() => {
            const l = a && 'current' in a ? a.current : a;
            l && k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }, [a]), (0, g.default)(a, a => {
            const l = a.target;
            k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }), j;
    };
}), c.register('GkLtI', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('1PitP'),
        g = c('Nnw7z'),
        h = c('xRoVg'),
        i = c('8Q3ZG');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((m, c) => {
                var n;
                if (1 === m.length)
                    null === (n = l.get(m[0].target)) || void 0 === n || n(m[0], c);
                else
                    for (let o = 0; o < m.length; o++) {
                        var p;
                        null === (p = l.get(m[o].target)) || void 0 === p || p(m[o], c);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function(m, n) {
        const o = k(),
            p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (m, o) => {
                    q || p.current(m, o);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('Nnw7z', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('xRoVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = a => {
        const h = f.useRef(a);
        return f.useEffect(() => {
            h.current = a;
        }), h;
    };
}), c.register('8Q3ZG', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = [],
            i = null,
            j = function() {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function() {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function() {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('t52Ep', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('AKtTq25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('O0Kav');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : k);
                return (0, f.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, m));
            });
        return l.preload = function() {
            return j || (j = h().then(function(m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('44iM223', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('jS3EY5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('K5dB24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('K5dB24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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