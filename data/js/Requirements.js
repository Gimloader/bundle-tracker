var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('E8iF1', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _v;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('gRbUn'),
        j = a('P1KtI'),
        k = a('VNuyu'),
        l = a('E2AMI26'),
        m = a('22RS1');
    a('O0Kav');
    var n = a('Eh2Wh'),
        o = a('jw1ib'),
        p = a('hupyL1'),
        q = a('LE3I425'),
        r = a('FB7HT26'),
        s = a('nKuOQ'),
        t = a('HOIhZ');
    const u = a => (0, i.jsxs)('div', {
        style: {
            padding: 25,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 8
        },
        children: [
            (0, i.jsx)('div', {
                style: {
                    marginBottom: 5
                },
                children: (0, i.jsx)(m.default.Text, {
                    style: {
                        fontWeight: n.FontWeights.Bold
                    },
                    children: a.title
                })
            }),
            (0, i.jsx)(m.default.Text, {
                italic: !0,
                children: a.description
            })
        ]
    });
    var _v = a => (0, i.jsxs)('div', {
        className: 'maxWidth',
        children: [
            (0, i.jsx)(m.default.Title, {
                style: {
                    fontFamily: n.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    marginBottom: 5
                },
                level: 3,
                children: 'Community Guidelines'
            }),
            (0, i.jsxs)(m.default.Text, {
                children: [
                    'All published content must follow our',
                    ' ',
                    (0, i.jsx)(r.default, {
                        style: {
                            color: t.default.Yellow,
                            textDecoration: 'underline'
                        },
                        to: 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative',
                        target: '_blank',
                        external: !0,
                        children: 'community guidelines.'
                    }),
                    ' ',
                    'Failure to meet our guidelines may result in permanent account suspension.'
                ]
            }),
            (0, i.jsx)(m.default.Title, {
                style: {
                    fontFamily: n.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    marginTop: 35
                },
                level: 3,
                children: 'Publishing Requirements'
            }),
            (0, i.jsxs)(l.default, {
                className: 'maxWidth',
                direction: 'vertical',
                size: 14,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, i.jsx)(u, {
                        title: 'Career Level 50+',
                        description: `You must have leveled up 50+ times in all your time playing ${ o.COMPANY_NAME }, unless you're a ${ p.SeasonTicketName.name } holder!`
                    }),
                    (0, i.jsx)(u, {
                        title: `1,000+ ${ q.default.currency }`,
                        description: `Publishing a map costs 1,000 ${ q.default.currency }. ${ p.SeasonTicketName.name } holders publish for free!`
                    })
                ]
            }),
            (0, i.jsx)(k.default, {}),
            a.publishRequirementError ? (0, i.jsx)('div', {
                style: {
                    background: 'rgba(255,0,0,0.1)',
                    padding: 25,
                    borderRadius: 8,
                    border: '1px solid rgba(255,0,0,0.5)'
                },
                children: (0, i.jsxs)(m.default.Text, {
                    children: [
                        a.publishRequirementError,
                        ' ',
                        (0, i.jsx)('br', {}),
                        (0, i.jsx)('br', {}),
                        (0, i.jsxs)(r.default, {
                            style: {
                                color: t.default.Yellow,
                                textDecoration: 'underline'
                            },
                            to: s.SEASON_TICKET_BASE,
                            target: '_blank',
                            children: [
                                'Purchase the ',
                                p.SeasonTicketName.name
                            ]
                        }),
                        ' ',
                        'to immediately become eligible & publish for free!'
                    ]
                })
            }) : (0, i.jsxs)('div', {
                className: 'maxWidth flex-center flex-column',
                children: [
                    (0, i.jsx)(j.default, {
                        size: 'large',
                        block: !0,
                        type: 'primary',
                        style: {
                            height: 55
                        },
                        onClick: a.next,
                        children: 'Continue'
                    }),
                    (0, i.jsx)(m.default.Text, {
                        italic: !0,
                        style: {
                            marginTop: 10,
                            opacity: 0.7
                        },
                        children: 'You pass all the requirements.'
                    })
                ]
            })
        ]
    });
});