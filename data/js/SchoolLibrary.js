function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'LIBRARY_CACHE_KEY', function() {
        return _w;
    }), b(d.exports, 'default', function() {
        return _x;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....');
    let r, s, t, u, v = w => w;
    const _w = 'GIMKIT_LIBRARY_CACHE';
    var _x = () => {
        const [y, z] = a(l).useState(!0), [A, B] = a(l).useState([]), [C, D] = a(l).useState(!0), [E, F] = a(l).useState(0);
        a(l).useEffect(() => {
            r();
        }, []);
        const G = () => {
                z(!0), (0, k.request)({
                    cacheKey: _w,
                    url: `/api/get-school-library/${ E }`,
                    method: 'GET',
                    success: H => {
                        B([
                            ...A,
                            ...H.games
                        ]), D(H.hasMore), F(H.newPage);
                    },
                    error: () => (0, i.throwError)({
                        title: 'Error fetching Kits'
                    }),
                    both: () => z(!1)
                });
            },
            H = (() => {
                const I = new Map();
                return A.forEach(J => {
                    const K = a(p)(J.createdDate).format('MMMM YYYY').toString();
                    I[K] ? I[K].push(J) : I[K] = [J];
                }), I;
            })();
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(k.Title, {
                    title: 'My School'
                }),
                (0, g.jsx)('div', {
                    className: 'maxHeight',
                    children: y && !A.length ? (0, g.jsx)('div', {
                        className: 'maxAll flex-center',
                        children: (0, g.jsx)(q.default, {
                            size: 'large'
                        })
                    }) : A.length ? (0, g.jsx)('div', {
                        children: (0, g.jsx)(m.default, {
                            dataLength: A.length,
                            hasMore: C,
                            style: {
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                overflow: 'visible'
                            },
                            next: G,
                            loader: null,
                            children: Object.keys(H).map(I => (0, g.jsxs)(_B, {
                                children: [
                                    (0, g.jsxs)(_y, {
                                        children: [
                                            (0, g.jsx)(_z, {
                                                children: I
                                            }),
                                            (0, g.jsx)(_A, {})
                                        ]
                                    }),
                                    H[I].map(J => (0, g.jsx)(j.default, {
                                        id: J._id,
                                        title: J.title,
                                        gif: J.gif,
                                        numberOfQuestions: J.questions,
                                        creator: J.creator,
                                        redirectOnImageClick: !0,
                                        size: 'small'
                                    }, J._id))
                                ]
                            }, I))
                        })
                    }) : (0, g.jsxs)('div', {
                        className: 'maxAll flex-center flex-column',
                        children: [
                            (0, g.jsx)('img', {
                                src: '/client/img/dashboard/bookshelf.svg',
                                style: {
                                    height: 80,
                                    marginBottom: 9
                                }
                            }),
                            (0, g.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    'Find kits made by other educators at your school (',
                                    (0, k.getUser)().schoolName,
                                    '). ',
                                    (0, g.jsx)('br', {}),
                                    ' Once they make their kits, you\'ll see them here.'
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _y = h.default.div.attrs({
            className: 'flex vc maxWidth'
        })(r || (r = v`
  margin-bottom: 20px;
`)),
        _z = h.default.div(s || (s = v`
  font-weight: ${ 0 };
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`), n.FontWeights.Bold),
        _A = h.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = v`
  height: 1px;
  background: ${ 0 };
`), o.default.BorderGray),
        _B = h.default.div.attrs({
            className: 'maxWidth'
        })(u || (u = v`
  margin-bottom: 20px;
`));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _N;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....');
    let q, r, s, t, u, v, w, x, y, z, A, B = C => C;
    const C = (0, k.default)(n.default).attrs({
            className: 'maxWidth'
        })(q || (q = B`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        D = (0, k.default)(g.default)(r || (r = B`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), m.default.White, m.default.BorderGray, i.Fonts.SFPro),
        E = k.default.div.attrs({
            className: 'flex-column'
        })(s || (s = B`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178),
        F = k.default.div(t || (t = B`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        G = k.default.div(u || (u = B`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        H = k.default.div(v || (v = B`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        I = k.default.div(w || (w = B`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        J = k.default.div(x || (x = B`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), i.Fonts.SFPro),
        K = k.default.i(y || (y = B`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        L = (0, k.default)(K).attrs({
            className: 'fad fa-list'
        })(z || (z = B``)),
        M = (0, k.default)(K).attrs({
            className: 'fad fa-calendar-alt'
        })(A || (A = B``));
    var _N = O => {
        const P = 'normal' === O.size;
        return (0, f.jsx)(C, {
            to: O.blockRedirect ? void 0 : `/view/${ O.id }`,
            children: (0, f.jsx)(D, {
                className: 'maxWidth',
                onMouseEnter: O.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !O.blockHoverable,
                style: {
                    backgroundColor: O.selected ? '#eeeeee' : m.default.White
                },
                children: (0, f.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(j.default, {
                                image: O.gif,
                                size: P ? 178 : 148,
                                onClick: O.redirectOnImageClick && (() => O.blockRedirect ? null : (0, o.NavigateTo)(`/view/${ O.id }`))
                            })
                        }),
                        (0, f.jsx)(E, {
                            children: (0, f.jsxs)(F, {
                                children: [
                                    (0, f.jsx)(G, {
                                        style: {
                                            fontSize: P ? 32 : 23
                                        },
                                        children: O.title
                                    }),
                                    O.creator && (0, f.jsx)(H, {
                                        style: {
                                            fontSize: P ? 18 : 16
                                        },
                                        children: (0, l.capitalizeFirstLetter)(O.creator)
                                    }),
                                    (0, f.jsx)(h.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!O.numberOfQuestions && (0, f.jsxs)(I, {
                                        children: [
                                            (0, f.jsx)(L, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    O.numberOfQuestions ? O.numberOfQuestions : '',
                                                    ' ',
                                                    O.numberOfQuestions ? (0, l.plural)('question', O.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    O.dateCreated && P && (0, f.jsxs)(J, {
                                        children: [
                                            (0, f.jsx)(M, {}),
                                            (0, f.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    a(p)(O.dateCreated).fromNow()
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