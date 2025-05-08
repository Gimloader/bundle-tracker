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
        return _w;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....');
    let s, t, u = v => v;
    const v = [
        'Payment with purchase order',
        'Payment with credit/debit card',
        'Group admin panel',
        'Discounted pricing'
    ];
    var _w = () => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.Title, { title: 'Group Pricing' }),
            (0, f.jsxs)(_x, {
                children: [
                    (0, f.jsx)(r.default, { includeSpacer: !0 }),
                    (0, f.jsxs)(_y, {
                        style: { maxWidth: 700 },
                        children: [
                            (0, f.jsx)(k.default, {}),
                            (0, f.jsx)(h.default, {}),
                            (0, f.jsx)('div', { style: { height: 20 } }),
                            (0, f.jsx)(l.default, {
                                features: v.map(x => ({
                                    good: !0,
                                    text: x
                                }))
                            }),
                            (0, f.jsx)('div', { style: { height: 20 } }),
                            (0, f.jsx)(m.default, {
                                children: (0, f.jsx)('div', {
                                    style: { fontSize: 23 },
                                    children: 'Choose a plan to get a quote'
                                })
                            }),
                            (0, f.jsx)(i.default, {
                                plan: j.SchoolGroup,
                                size: 'large'
                            }),
                            (0, f.jsx)('div', { style: { height: 10 } }),
                            (0, f.jsx)(i.default, {
                                plan: j.DepartmentGroup,
                                size: 'small'
                            }),
                            (0, f.jsx)('div', { style: { height: 10 } }),
                            (0, f.jsxs)(m.default, {
                                children: [
                                    ' ',
                                    (0, f.jsx)('div', {
                                        style: { fontSize: 23 },
                                        children: 'Have some more questions?'
                                    })
                                ]
                            }),
                            (0, f.jsx)(n.default, {}),
                            (0, f.jsx)('div', { style: { height: 40 } })
                        ]
                    })
                ]
            })
        ]
    });
    const _x = o.default.div.attrs({ className: 'flex-column vc maxWidth' })(s || (s = u`
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), p.default.Snow, q.Fonts.SFPro, p.default.Black), _y = o.default.div(t || (t = u`
  width: 90%;
  max-width: 1000px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    let j;
    const k = [
        'Simple and transparent pricing.',
        'No quote forms asking a million things.',
        'No calls with the sales team.'
    ];
    var _l = () => (0, e.jsx)(h.default, {
        style: {
            color: i.default.Black,
            textAlign: 'left'
        },
        children: k.map(m => (0, e.jsx)(_m, { children: m }, m))
    });
    const _m = f.default.div(j || (j = (n => n)`
  font-size: 23px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _n;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    let l;
    const m = i.default.div(l || (l = (n => n)`
  background: ${ 0 };
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  color: ${ 0 };
  font-family: ${ 0 };
  text-align: left;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.04);
  }
`), n => n.background || '#101da5', f.default.White, g.Fonts.SFPro);
    var _n = o => {
        const p = 'large' == o.size, q = {
                imageHeight: p ? 14 : 10,
                planNameFontSize: p ? 48 : 30,
                planNameMarginTop: p ? 5 : 7,
                planNameLineHeight: p ? '35px' : '17px',
                priceFontSize: p ? 37 : 24,
                priceDescriptionFontSize: p ? 11 : 9,
                priceDescriptionMarginTop: p ? -9 : -7
            }, r = (0, h.isLoggedIn)() && o.plan.id ? k.CHECKOUT : o.plan.link;
        return (0, e.jsx)(j.default, {
            to: r,
            className: 'maxWidth',
            onClick: o.onClick,
            style: { textDecoration: 'none' },
            children: (0, e.jsx)(m, {
                background: o.plan.background,
                children: (0, e.jsxs)('div', {
                    className: 'flex flex-wrap vc',
                    style: { justifyContent: 'space-between' },
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)('img', {
                                    src: '/client/img/svgLogoWhite.svg',
                                    style: {
                                        opacity: 0.7,
                                        height: q.imageHeight
                                    }
                                }),
                                (0, e.jsx)('div', {
                                    style: {
                                        fontWeight: g.FontWeights.UltraBold,
                                        fontSize: q.planNameFontSize,
                                        marginTop: q.planNameMarginTop,
                                        lineHeight: q.planNameLineHeight
                                    },
                                    children: o.plan.name
                                })
                            ]
                        }),
                        (0, e.jsxs)('div', {
                            style: { textAlign: 'right' },
                            children: [
                                (0, e.jsx)('div', {
                                    style: {
                                        fontSize: q.priceFontSize,
                                        fontWeight: g.FontWeights.UltraBold
                                    },
                                    children: o.plan.price
                                }),
                                o.plan.description && (0, e.jsx)('div', {
                                    style: {
                                        fontSize: q.priceDescriptionFontSize,
                                        opacity: 0.7,
                                        marginTop: q.priceDescriptionMarginTop
                                    },
                                    children: o.plan.description
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'DepartmentGroup', function () {
        return _i;
    }), a(c.exports, 'SchoolGroup', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    h.PlanIds.basic, f.FontWeights.Bold, h.PlanIds.pro, h.PlanIds.pro, h.PlanIds.proPass, h.PlanIds.proPass, g.GROUP_PRICING;
    const _i = {
            name: 'Department',
            price: '$650',
            description: (0, e.jsx)('span', {
                style: { fontSize: 16 },
                children: 'per year, Pro for 20 teachers'
            }),
            background: '#311b92',
            link: '/quote/new/department-1'
        }, _j = {
            name: 'School',
            price: '$1,000',
            description: (0, e.jsx)('span', {
                style: { fontSize: 16 },
                children: 'per year, Pro for every teacher at your school'
            }),
            background: '#2e7d32',
            link: '/quote/new/school-1'
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    var _g = () => (0, e.jsxs)('div', {
        className: 'flex vc maxWidth hc flex-column',
        style: { marginTop: 35 },
        children: [
            (0, e.jsx)('img', {
                src: '/client/img/svgLogo.svg',
                style: {
                    height: 36,
                    opacity: 0.86
                }
            }),
            (0, e.jsx)('div', {
                style: {
                    fontSize: 83,
                    marginTop: -28,
                    fontWeight: f.FontWeights.UltraBold
                },
                children: 'Groups'
            })
        ]
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    let g;
    const h = i => (0, e.jsxs)('div', {
        className: 'flex vc',
        style: { margin: 10 },
        children: [
            (0, e.jsx)('div', {
                style: {
                    marginRight: 7,
                    fontSize: 25
                },
                children: i.good ? (0, e.jsx)('i', {
                    className: 'fad fa-check-circle',
                    style: { color: 'green' }
                }) : (0, e.jsx)('i', {
                    className: 'fad fa-times-circle',
                    style: { color: 'red' }
                })
            }),
            (0, e.jsx)('div', { children: i.text })
        ]
    });
    var _i = j => (0, e.jsx)(_j, {
        className: 'flex maxWidth wrap vc hc',
        children: j.features.map(k => (0, e.jsx)(h, {
            good: k.good,
            text: k.text
        }, `feat-${ k.good }-${ k.text }`))
    });
    const _j = f.default.div(g || (g = (k => k)`
  text-align: left;
  font-size: 17px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    const i = {
        width: 'calc(100% - 10px)',
        color: g.default.Black,
        textAlign: 'center',
        fontFamily: h.Fonts.SFPro,
        fontSize: 25,
        fontWeight: h.FontWeights.Bold,
        cursor: 'pointer'
    };
    var _j = () => (0, e.jsxs)('div', {
        className: 'maxWidth flex',
        children: [
            (0, e.jsx)(f.default, {
                onClick: () => window.open('https://help.gimkit.com/en/category/group-subscriptions-3m7198/'),
                style: i,
                hoverable: !0,
                children: 'FAQ'
            }),
            (0, e.jsx)('div', { style: { width: 20 } }),
            (0, e.jsx)(f.default, {
                onClick: () => window.open('mailto:groups@gimkit.com', '_self'),
                style: i,
                hoverable: !0,
                children: 'Ask a question'
            })
        ]
    });
});