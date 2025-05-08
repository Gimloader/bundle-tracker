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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _z;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x = y => y;
    const y = j.default.div(v || (v = x`
  height: 100%;
  display: flex;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), z => z.customBackgroundColor || l.default.Snow, k.Fonts.SFPro, l.default.Black);
    var _z = () => {
        const [A, B] = h.useState(null), {id: C} = (0, s.useParams)();
        h.useEffect(() => {
            (0, i.request)({
                url: `/api/game-report/fetch/${ C }`,
                method: 'GET',
                success: D => {
                    B(D);
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
                            (0, g.jsx)(m.default, { gameReport: A }),
                            (0, g.jsx)(n.default, { gameReport: A })
                        ]
                    }) : (0, g.jsx)('div', {
                        className: 'flex-center maxAll',
                        children: (0, g.jsx)(r.default, { size: 'large' })
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _G;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = (n = c('.....'), c('.....')), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....');
    let z, A, B, C = D => D;
    const D = h.default.div.attrs({ className: 'scroll-y' })(z || (z = C`
  width: 390px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`), i.default.White, i.default.BorderGray), E = h.default.div(A || (A = C`
  font-weight: ${ 0 };
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`), j.FontWeights.UltraBold), F = h.default.div(B || (B = C`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`));
    var _G = (0, p.observer)(H => {
        const {gameReport: I} = H, {navigation: J} = g.useContext(q.default), K = I.expiration ? b(v)(I.expiration) : b(v)((0, n.dateFromObjectId)(I._id)).add(546, 'days'), L = K.diff(b(v)((0, n.dateFromObjectId)(I._id)), 'days'), M = !b(v)().isAfter(K) && Math.abs(b(v)().diff(K, 'months')) < 3;
        return (0, f.jsxs)(D, {
            children: [
                (0, f.jsx)(n.Title, { title: `Report - ${ I.game.title } - ${ I.players.length } ${ (0, n.plural)('participant', I.players.length) } - ${ b(v)(I.dateCreated).format('L') }` }),
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
                            image: I.game.gif,
                            style: { marginTop: 27 }
                        }),
                        (0, f.jsx)(w.default, {
                            style: {
                                color: i.default.Black,
                                textDecoration: 'none'
                            },
                            to: `/view/${ I.game._id }`,
                            children: (0, f.jsx)(E, { children: I.game.title })
                        }),
                        (0, f.jsxs)(F, {
                            children: [
                                I.players.length + ' ' + (0, n.plural)('participant', I.players.length),
                                ' ',
                                '-',
                                ' ',
                                I.mapAssignment ? (0, f.jsx)(w.default, {
                                    to: `/assignment/${ I.mapAssignment }`,
                                    children: 'Assignment'
                                }) : b(v)(I.dateCreated).format('MMMM Do [at] LT')
                            ]
                        })
                    ]
                }),
                M ? (0, f.jsx)(k.default, {
                    banner: !0,
                    message: `${ L >= 365 ? 'Reports are automatically deleted after 1.5 years. ' : '' }This report will be deleted on ${ K.format('MMMM Do') }.`
                }) : null,
                (0, f.jsx)(l.default, { style: { marginBottom: 10 } }),
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(y.default, {
                            icon: t.default,
                            onClick: () => J.currentTab = r.default.breakdown,
                            title: 'Question Breakdown',
                            selected: J.currentTab === r.default.breakdown
                        }, 'breakdown'),
                        (0, f.jsx)(y.default, {
                            icon: u.default,
                            onClick: () => J.currentTab = r.default.overview,
                            title: 'Student Overview',
                            selected: J.currentTab === r.default.overview
                        }, 'studentOverview'),
                        (0, f.jsx)(y.default, {
                            icon: s.default,
                            onClick: () => J.currentTab = r.default.general,
                            title: 'Quick Stats',
                            selected: J.currentTab === r.default.general
                        }, 'overview'),
                        (0, f.jsx)(l.default, {}),
                        (0, f.jsx)(m.default, { gameReport: I })
                    ]
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = (m, n) => {
        var o = m.name.toLowerCase(), p = n.name.toLowerCase();
        return o < p ? -1 : o > p ? 1 : 0;
    };
    var _m = (0, h.observer)(n => {
        const {gameReport: o} = n, {navigation: p} = g.useContext(i.default);
        return (0, f.jsx)(f.Fragment, {
            children: o.players.sort(l).map((q, r) => (0, f.jsx)(k.default, {
                icon: null,
                title: q.name,
                onClick: () => {
                    p.currentTab = j.default.player, p.currentPlayer = r;
                },
                selected: p.currentTab === j.default.player && p.currentPlayer === r
            }, r))
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = { navigation: new (0, (c('.....')).default)() };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    class i {
        constructor() {
            this.currentTab = h.default.breakdown, this.currentPlayer = null, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'currentTab', void 0), (0, f.__decorate)([g.observable], i.prototype, 'currentPlayer', void 0);
    var _j = i;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).general = 'general', g.breakdown = 'breakdown', g.player = 'player', g.overview = 'overview';
    var _h = f;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    const o = '#1890FF', p = h.default.div(k || (k = n`
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
`), j.Fonts.SFPro, 14, q => q.selected && !q.blockBackground ? '#E5F7FE' : i.default.White, q => q.selected ? o : 'rgba(0,0,0,.65)', q => q.selected && !q.blockStripe && 'border-right: 3px solid ' + o + ';', o), q = h.default.div.attrs({ className: 'flex vc maxWidth' })(l || (l = n``)), r = h.default.div(m || (m = n``));
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
                            (0, f.jsx)(r, { children: t }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({ src: n.image }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: { width: '100%' }
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getCloudinaryUrl', function () {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        }, _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2], k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        }, _h = 'media.gimkit.com', _i = 'res.cloudinary.com', _j = 'gimkit-production', _k = [
            _h,
            _i
        ];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ProjectOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z' }
                }]
        },
        name: 'project',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TeamOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z' }
                }]
        },
        name: 'team',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    var _r = (0, m.observer)(s => {
        const {navigation: t} = g.useContext(l.default), {gameReport: u} = s, {
                currentTab: v,
                currentPlayer: w
            } = t;
        return (0, f.jsxs)(_s, {
            children: [
                (0, f.jsx)(o.default, {}),
                v === n.default.general ? (0, f.jsx)(h.default, { gameReport: u }) : v === n.default.overview ? (0, f.jsx)(k.default, { gameReport: u }) : v === n.default.breakdown ? (0, f.jsx)(i.default, { gameReport: u }) : v === n.default.player && u.players[w] ? (0, f.jsx)(j.default, {
                    player: u.players[w],
                    questions: u.questions
                }) : null
            ]
        }, `${ v }-${ w }`);
    });
    const _s = p.default.div.attrs({ className: 'maxWidth scroll-y' })(q || (q = (t => t)`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        const {gameReport: o} = n, p = g.useMemo(() => o.players.reduce((q, r) => r.correctQuestionIds.length + q, 0), [o.players.length]), q = g.useMemo(() => o.players.reduce((r, s) => s.incorrectQuestionIds.length + r, 0), [o.players.length]), r = g.useMemo(() => (0, h.calculateAccuracy)(p, q), [
                p,
                q
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
                        content: p,
                        contentColor: i.default.Green
                    }),
                    (0, f.jsx)(k.default, {
                        header: 'Questions Answered Incorrectly',
                        content: q,
                        contentColor: i.default.Red
                    }),
                    (0, f.jsx)(k.default, {
                        header: 'Accuracy',
                        content: `${ r }%`,
                        contentColor: i.default.Blue
                    })
                ]
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = o => {
        const {
                players: p,
                questions: q
            } = o.gameReport, r = g.useMemo(() => q.map(s => {
                let t = 0, u = 0;
                return p.forEach(v => {
                    v.correctQuestionIds.forEach(w => {
                        w === s._id && t++;
                    }), v.incorrectQuestionIds.forEach(w => {
                        w === s._id && u++;
                    });
                }), {
                    question: s,
                    resultData: {
                        correct: t,
                        incorrect: u,
                        accuracy: (0, k.calculateAccuracy)(t, u)
                    }
                };
            }), [
                p.length,
                q.length
            ]).sort((s, t) => s.resultData.accuracy > t.resultData.accuracy ? 1 : -1);
        return (0, f.jsxs)(j.default, {
            children: [
                (0, f.jsx)(i.default, {
                    title: 'Question Breakdown',
                    description: 'See which questions students have down or need help with',
                    download: () => {
                        const s = l.unparse(r.map(t => {
                            var u, v;
                            return {
                                Question: null !== (v = null === (u = t.question) || void 0 === u ? void 0 : u.text) && void 0 !== v ? v : 'Media Question',
                                'Correct Count': t.resultData.correct,
                                'Incorrect Count': t.resultData.incorrect,
                                Accuracy: t.resultData.accuracy + '%'
                            };
                        }));
                        (0, m.DownloadReportCSV)({
                            csv: s,
                            fileName: `${ o.gameReport.game.title } Question Breakdown`
                        });
                    }
                }),
                (0, f.jsx)('div', {
                    children: r.map(s => (0, f.jsx)(h.default, {
                        question: s.question,
                        correct: s.resultData.correct,
                        incorrect: s.resultData.incorrect,
                        accuracy: s.resultData.accuracy
                    }, s.question._id + '-breakdown'))
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'DownloadReportCSV', function () {
        return _f;
    });
    const _f = g => {
        const h = new Blob([g.csv], { type: 'text/csv' }), i = URL.createObjectURL(h), j = document.createElement('a');
        j.href = i;
        let k = g.fileName;
        k = k.replace(/ /g, '_'), j.download = `${ k }.csv`, j.click();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    let u, v, w = x => x;
    const x = i.default.div(u || (u = w`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`)), y = (0, i.default)(h.default)(v || (v = w`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${ 0 } !important;
  color: ${ 0 } !important;
`), k.FontWeights.Bold, j.default.Black);
    var _z = (0, l.observer)(A => {
        const {gameReport: B} = A, {navigation: C} = g.useContext(m.default);
        return (0, f.jsxs)(q.default, {
            children: [
                (0, f.jsx)(o.default, {
                    title: 'Student Overview',
                    description: 'Quick look on how each student performed',
                    download: () => {
                        const D = s.unparse(B.players.map(E => {
                            const F = (0, r.calculateAccuracy)(E.correctQuestionIds.length, E.incorrectQuestionIds.length);
                            var G, H;
                            return {
                                'Player Name': E.name,
                                'Questions Answered Correctly': null !== (G = E.correctQuestionIds.length) && void 0 !== G ? G : 0,
                                'Questions Answered Incorrectly': null !== (H = E.incorrectQuestionIds.length) && void 0 !== H ? H : 0,
                                Accuracy: F + '%'
                            };
                        }));
                        (0, t.DownloadReportCSV)({
                            csv: D,
                            fileName: `${ A.gameReport.game.title } Student Overview`
                        });
                    }
                }),
                (0, f.jsx)('div', {
                    children: B.players.map((D, E) => {
                        const F = (0, r.calculateAccuracy)(D.correctQuestionIds.length, D.incorrectQuestionIds.length);
                        return (0, f.jsxs)(x, {
                            children: [
                                (0, f.jsx)(y, {
                                    hoverable: !0,
                                    onClick: () => {
                                        C.currentPlayer = E, C.currentTab = n.default.player;
                                    },
                                    children: (0, f.jsx)('div', { children: D.name })
                                }),
                                (0, f.jsx)(p.default, {
                                    correct: D.correctQuestionIds.length,
                                    incorrect: D.incorrectQuestionIds.length,
                                    accuracy: F
                                })
                            ]
                        }, `student-overview-student-${ E }`);
                    })
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => {
        const j = (0, g.use100vh)();
        return (0, f.jsx)('div', {
            style: {
                height: j,
                width: '100%'
            },
            className: i.className,
            children: i.children
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'use100vh', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = function () {
            return g = Object.assign || function (h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }, g.apply(this, arguments);
        }, h = function (i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        }, i = !1, j = (0, f.forwardRef)(function (k, l) {
            var m = k.style, n = h(k, ['style']), o = _k();
            !i && (null == m ? void 0 : m.height) && (i = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var p = g(g({}, m), { height: o ? o + 'px' : '100vh' });
            return b(f).createElement('div', g({
                ref: l,
                style: p
            }, n));
        });
    j.displayName = 'Div100vh';
    function _k() {
        var l = (0, f.useState)(_p), m = l[0], n = l[1], o = function () {
                var p = (0, f.useState)(!1), q = p[0], r = p[1];
                return (0, f.useEffect)(function () {
                    _q() && r(!0);
                }, []), q;
            }();
        return (0, f.useEffect)(function () {
            if (o)
                return window.addEventListener('resize', l), function () {
                    return window.removeEventListener('resize', l);
                };
            function p() {
                var q = _p();
                n(p);
            }
        }, [o]), o ? m : null;
    }
    function _p() {
        return _q() ? window.innerHeight : null;
    }
    function _q() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z' }
                }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z' }
                }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
    const o = (p, q) => {
            var {
                    prefixCls: r,
                    className: s,
                    rootClassName: t,
                    style: u,
                    children: v,
                    icon: w,
                    color: x,
                    onClose: y,
                    closeIcon: z,
                    closable: A = !1
                } = p, B = n(p, [
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
                    getPrefixCls: C,
                    direction: D
                } = h.useContext(i.ConfigContext), [E, F] = h.useState(!0);
            h.useEffect(() => {
                'visible' in B && F(B.visible);
            }, [B.visible]);
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x), H = Object.assign({ backgroundColor: x && !G ? x : void 0 }, u), I = C('tag', r), [J, K] = (0, m.default)(I), L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K), M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                }, N = 'function' == typeof B.onClick || v && 'a' === v.type, O = w || null, P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v, Q = h.createElement('span', Object.assign({}, B, {
                    ref: q,
                    className: L,
                    style: H
                }), P, A ? z ? h.createElement('span', {
                    className: `${ I }-close-icon`,
                    onClick: M
                }, z) : h.createElement(f.default, {
                    className: `${ I }-close-icon`,
                    onClick: M
                }) : null);
            return J(N ? h.createElement(k.default, null, Q) : Q);
        }, p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
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
    var _k = l => {
        var {
                prefixCls: m,
                className: n,
                checked: o,
                onChange: p,
                onClick: q
            } = l, r = j(l, [
                'prefixCls',
                'className',
                'checked',
                'onChange',
                'onClick'
            ]);
        const {getPrefixCls: s} = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
                [`${ t }-checkable`]: !0,
                [`${ t }-checkable-checked`]: o
            }, n, v);
        return u(g.createElement('span', Object.assign({}, r, {
            className: w,
            onClick: x => {
                null == p || p(!o), null == q || q(x);
            }
        })));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        }, l = m => (0, i.genPresetColor)(m, (n, o) => {
            let {
                textColor: p,
                lightBorderColor: q,
                lightColor: r,
                darkColor: s
            } = o;
            return {
                [`${ m.componentCls }-${ n }`]: {
                    color: p,
                    background: r,
                    borderColor: q,
                    '&-inverse': {
                        color: m.colorTextLightSolid,
                        background: s,
                        borderColor: s
                    }
                }
            };
        }), m = n => {
            const {
                    paddingXXS: o,
                    lineWidth: p,
                    tagPaddingHorizontal: q,
                    componentCls: r
                } = n, s = q - p, t = o - p;
            return {
                [r]: Object.assign(Object.assign({}, (0, j.resetComponent)(n)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: n.marginXS,
                    paddingInline: s,
                    fontSize: n.tagFontSize,
                    lineHeight: `${ n.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: n.tagDefaultBg,
                    border: `${ n.lineWidth }px ${ n.lineType } ${ n.colorBorder }`,
                    borderRadius: n.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ n.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ r }-rtl`]: { direction: 'rtl' },
                    '&, a, a:hover': { color: n.tagDefaultColor },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': { color: n.colorTextHeading }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: { color: n.colorTextLightSolid }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': { color: n.colorTextLightSolid },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': { backgroundColor: n.colorPrimaryHover }
                        },
                        '&:active': { backgroundColor: n.colorPrimaryActive }
                    },
                    '&-hidden': { display: 'none' },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: { marginInlineStart: s }
                })
            };
        };
    var _n = (0, f.default)('Tag', o => {
        const {
                fontSize: p,
                lineHeight: q,
                lineWidth: r,
                fontSizeIcon: s
            } = o, t = Math.round(p * q), u = o.fontSizeSM, v = t - 2 * r, w = o.colorFillAlter, x = o.colorText, y = (0, g.merge)(o, {
                tagFontSize: u,
                tagLineHeight: v,
                tagDefaultBg: w,
                tagDefaultColor: x,
                tagIconSize: s - 2 * r,
                tagPaddingHorizontal: 8
            });
        return [
            m(y),
            l(y),
            k(y, 'success', 'Success'),
            k(y, 'processing', 'Info'),
            k(y, 'error', 'Error'),
            k(y, 'warning', 'Warning')
        ];
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);
            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function (v) {
                    var w = u.props, x = w.disabled, y = w.onChange;
                    x || ('checked' in u.props || u.setState({ checked: v.target.checked }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, { checked: v.target.checked }),
                        stopPropagation: function () {
                            v.stopPropagation();
                        },
                        preventDefault: function () {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function (v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = { checked: v }, u;
            }
            return (0, k.default)(s, [
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var v, w = this.props, x = w.prefixCls, y = w.className, z = w.style, A = w.name, B = w.id, C = w.type, D = w.disabled, E = w.readOnly, F = w.tabIndex, G = w.onClick, H = w.onFocus, I = w.onBlur, J = w.onKeyDown, K = w.onKeyPress, L = w.onKeyUp, M = w.autoFocus, N = w.value, O = w.required, P = (0, h.default)(w, [
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
                            ]), Q = Object.keys(P).reduce(function (R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}), R = this.state.checked, S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', { className: ''.concat(x, '-inner') }));
                    }
                }
            ], [{
                    key: 'getDerivedStateFromProps',
                    value: function (v, w) {
                        return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, { checked: v.checked }) : null;
                    }
                }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {
        },
        onBlur: function () {
        },
        onChange: function () {
        },
        onKeyDown: function () {
        },
        onKeyPress: function () {
        },
        onKeyUp: function () {
        }
    };
    var _q = p;
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
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
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, { latex: j.latex })
    });
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'download',
        theme: 'outlined'
    };
});