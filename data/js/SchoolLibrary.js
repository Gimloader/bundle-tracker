function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, y) {
    Object.defineProperty(a, b, {
        get: c,
        set: y,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('CIJ2q', function(y, z) {
    var d;
    d = y.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(y.exports, 'LIBRARY_CACHE_KEY', function() {
        return u;
    }), b(y.exports, 'default', function() {
        return v;
    });
    var e = c('8kSQZ'),
        f = c('h99Nu'),
        g = c('GFgjD'),
        h = c('hSkRl'),
        i = c('PjB0f'),
        j = c('uPP4W'),
        k = c('Nsg/l3'),
        l = c('gSUVO'),
        m = c('lmfrI'),
        n = c('2MCaL'),
        o = c('iHElh');
    let p, q, r, s, t = a => a;
    const u = 'GIMKIT_LIBRARY_CACHE';
    var v = () => {
        const [w, x] = a(j).useState(!0), [y, z] = a(j).useState([]), [A, B] = a(j).useState(!0), [C, D] = a(j).useState(0);
        a(j).useEffect(() => {
            p();
        }, []);
        const E = () => {
                x(!0), (0, i.request)({
                    cacheKey: u,
                    url: `/api/get-school-library/${ C }`,
                    method: 'GET',
                    success: a => {
                        z([
                            ...y,
                            ...a.games
                        ]), B(a.hasMore), D(a.newPage);
                    },
                    error: () => (0, g.throwError)({
                        title: 'Error fetching Kits'
                    }),
                    both: () => x(!1)
                });
            },
            F = (() => {
                const G = new Map();
                return y.forEach(x => {
                    const H = a(n)(x.createdDate).format('MMMM YYYY').toString();
                    G[H] ? G[H].push(x) : G[H] = [x];
                }), G;
            })();
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(i.Title, {
                    title: 'My School'
                }),
                (0, e.jsx)('div', {
                    className: 'maxHeight',
                    children: w && !y.length ? (0, e.jsx)('div', {
                        className: 'maxAll flex-center',
                        children: (0, e.jsx)(o.default, {
                            size: 'large'
                        })
                    }) : y.length ? (0, e.jsx)('div', {
                        children: (0, e.jsx)(k.default, {
                            dataLength: y.length,
                            hasMore: A,
                            style: {
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                overflow: 'visible'
                            },
                            next: E,
                            loader: null,
                            children: Object.keys(F).map(a => (0, e.jsxs)(z, {
                                children: [
                                    (0, e.jsxs)(w, {
                                        children: [
                                            (0, e.jsx)(x, {
                                                children: a
                                            }),
                                            (0, e.jsx)(y, {})
                                        ]
                                    }),
                                    F[a].map(a => (0, e.jsx)(h.default, {
                                        id: a._id,
                                        title: a.title,
                                        gif: a.gif,
                                        numberOfQuestions: a.questions,
                                        creator: a.creator,
                                        redirectOnImageClick: !0,
                                        size: 'small'
                                    }, a._id))
                                ]
                            }, a))
                        })
                    }) : (0, e.jsxs)('div', {
                        className: 'maxAll flex-center flex-column',
                        children: [
                            (0, e.jsx)('img', {
                                src: '/client/img/dashboard/bookshelf.svg',
                                style: {
                                    height: 80,
                                    marginBottom: 9
                                }
                            }),
                            (0, e.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    'Find kits made by other educators at your school (',
                                    (0, i.getUser)().schoolName,
                                    '). ',
                                    (0, e.jsx)('br', {}),
                                    ' Once they make their kits, you\'ll see them here.'
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const w = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(p || (p = t`
  margin-bottom: 20px;
`)),
        x = f.default.div(q || (q = t`
  font-weight: ${ 0 };
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`), l.FontWeights.Bold),
        y = f.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = t`
  height: 1px;
  background: ${ 0 };
`), m.default.BorderGray),
        z = f.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = t`
  margin-bottom: 20px;
`));
}), c.register('hSkRl', function(a, l) {
    b(a.exports, 'default', function() {
        return L;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('f9f+a'),
        f = c('ExtIT'),
        g = c('gSUVO'),
        h = c('qLhB38'),
        i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('lmfrI'),
        l = c('iYEuk12'),
        m = c('k0s2g17'),
        n = c('2MCaL');
    let o, p, q, r, s, t, u, v, w, x, y, z = a => a;
    const A = (0, i.default)(l.default).attrs({
            className: 'maxWidth'
        })(o || (o = z`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        B = (0, i.default)(e.default)(p || (p = z`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), k.default.White, k.default.BorderGray, g.Fonts.SFPro),
        C = i.default.div.attrs({
            className: 'flex-column'
        })(q || (q = z`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178),
        D = i.default.div(r || (r = z`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        E = i.default.div(s || (s = z`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        F = i.default.div(t || (t = z`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        G = i.default.div(u || (u = z`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        H = i.default.div(v || (v = z`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), g.Fonts.SFPro),
        I = i.default.i(w || (w = z`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        J = (0, i.default)(I).attrs({
            className: 'fad fa-list'
        })(x || (x = z``)),
        K = (0, i.default)(I).attrs({
            className: 'fad fa-calendar-alt'
        })(y || (y = z``));
    var L = b => {
        const M = 'normal' === b.size;
        return (0, d.jsx)(A, {
            to: b.blockRedirect ? void 0 : `/view/${ b.id }`,
            children: (0, d.jsx)(B, {
                className: 'maxWidth',
                onMouseEnter: b.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !b.blockHoverable,
                style: {
                    backgroundColor: b.selected ? '#eeeeee' : k.default.White
                },
                children: (0, d.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                image: b.gif,
                                size: M ? 178 : 148,
                                onClick: b.redirectOnImageClick && (() => b.blockRedirect ? null : (0, m.NavigateTo)(`/view/${ b.id }`))
                            })
                        }),
                        (0, d.jsx)(C, {
                            children: (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        style: {
                                            fontSize: M ? 32 : 23
                                        },
                                        children: b.title
                                    }),
                                    b.creator && (0, d.jsx)(F, {
                                        style: {
                                            fontSize: M ? 18 : 16
                                        },
                                        children: (0, j.capitalizeFirstLetter)(b.creator)
                                    }),
                                    (0, d.jsx)(f.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!b.numberOfQuestions && (0, d.jsxs)(G, {
                                        children: [
                                            (0, d.jsx)(J, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    b.numberOfQuestions ? b.numberOfQuestions : '',
                                                    ' ',
                                                    b.numberOfQuestions ? (0, j.plural)('question', b.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    b.dateCreated && M && (0, d.jsxs)(H, {
                                        children: [
                                            (0, d.jsx)(K, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    a(n)(b.dateCreated).fromNow()
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    };
});