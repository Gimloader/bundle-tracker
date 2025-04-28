function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('k41Xr', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _w(b.exports, 'LIBRARY_CACHE_KEY', function() {
        return _u;
    }), _w(b.exports, 'default', function() {
        return _v;
    });
    var e = a('0hzx+'),
        f = a('Axq+p'),
        g = a('INKb2'),
        h = a('Z8D3a'),
        i = a('PMl60'),
        j = a('LEQ5w'),
        k = a('0qmC91'),
        l = a('b5kvC'),
        m = a('sHRDd'),
        n = a('ECzOP'),
        o = a('6CIVV');
    let p, q, r, s, t = e => e;
    const _u = 'GIMKIT_LIBRARY_CACHE';
    var _v = () => {
        const [_w, x] = e(j).useState(!0), [y, z] = e(j).useState([]), [A, B] = e(j).useState(!0), [C, D] = e(j).useState(0);
        e(j).useEffect(() => {
            p();
        }, []);
        const E = () => {
                x(!0), (0, i.request)({
                    cacheKey: _u,
                    url: `/api/get-school-library/${ C }`,
                    method: 'GET',
                    success: e => {
                        z([
                            ...y,
                            ...e.games
                        ]), B(e.hasMore), D(e.newPage);
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
                    const H = e(n)(x.createdDate).format('MMMM YYYY').toString();
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
                    children: _w && !y.length ? (0, e.jsx)('div', {
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
                            children: Object.keys(F).map(e => (0, e.jsxs)(_z, {
                                children: [
                                    (0, e.jsxs)(_w, {
                                        children: [
                                            (0, e.jsx)(_x, {
                                                children: e
                                            }),
                                            (0, e.jsx)(_y, {})
                                        ]
                                    }),
                                    F[e].map(e => (0, e.jsx)(h.default, {
                                        id: e._id,
                                        title: e.title,
                                        gif: e.gif,
                                        numberOfQuestions: e.questions,
                                        creator: e.creator,
                                        redirectOnImageClick: !0,
                                        size: 'small'
                                    }, e._id))
                                ]
                            }, e))
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
    const _w = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(p || (p = t`
  margin-bottom: 20px;
`)),
        _x = f.default.div(q || (q = t`
  font-weight: ${ 0 };
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`), l.FontWeights.Bold),
        _y = f.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = t`
  height: 1px;
  background: ${ 0 };
`), m.default.BorderGray),
        _z = f.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = t`
  margin-bottom: 20px;
`));
}), a.register('Z8D3a', function(b, c) {
    t(b.exports, 'default', function() {
        return _L;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('fmVdR'),
        g = a('b5kvC'),
        h = a('DKaq/'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('sHRDd'),
        l = a('2HvvA11'),
        m = a('jzxyj10'),
        n = a('ECzOP');
    let o, p, q, r, s, t, u, v, w, x, y, z = e => e;
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
    var _L = t => {
        const M = 'normal' === t.size;
        return (0, d.jsx)(A, {
            to: t.blockRedirect ? void 0 : `/view/${ t.id }`,
            children: (0, d.jsx)(B, {
                className: 'maxWidth',
                onMouseEnter: t.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !t.blockHoverable,
                style: {
                    backgroundColor: t.selected ? '#eeeeee' : k.default.White
                },
                children: (0, d.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                image: t.gif,
                                size: M ? 178 : 148,
                                onClick: t.redirectOnImageClick && (() => t.blockRedirect ? null : (0, m.NavigateTo)(`/view/${ t.id }`))
                            })
                        }),
                        (0, d.jsx)(C, {
                            children: (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        style: {
                                            fontSize: M ? 32 : 23
                                        },
                                        children: t.title
                                    }),
                                    t.creator && (0, d.jsx)(F, {
                                        style: {
                                            fontSize: M ? 18 : 16
                                        },
                                        children: (0, j.capitalizeFirstLetter)(t.creator)
                                    }),
                                    (0, d.jsx)(f.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!t.numberOfQuestions && (0, d.jsxs)(G, {
                                        children: [
                                            (0, d.jsx)(J, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    t.numberOfQuestions ? t.numberOfQuestions : '',
                                                    ' ',
                                                    t.numberOfQuestions ? (0, j.plural)('question', t.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    t.dateCreated && M && (0, d.jsxs)(H, {
                                        children: [
                                            (0, d.jsx)(K, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    e(n)(t.dateCreated).fromNow()
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