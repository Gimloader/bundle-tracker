var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('J9gPG', function(t, i) {
    var b, c, d, e, f;
    b = t.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = t.exports, d = 'default', e = function() {
        return t;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ'),
        h = a('IsmrL'),
        i = a('ExtIT'),
        j = a('5nJMd26'),
        k = a('UzdPH');
    a('uPP4W');
    var l = a('gSUVO'),
        m = a('0wLl2'),
        n = a('ImHrc1'),
        o = a('y8lS825'),
        p = a('iYEuk12'),
        q = a('q721a'),
        r = a('S/jX4');
    const s = a => (0, g.jsxs)('div', {
        style: {
            padding: 25,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 8
        },
        children: [
            (0, g.jsx)('div', {
                style: {
                    marginBottom: 5
                },
                children: (0, g.jsx)(k.default.Text, {
                    style: {
                        fontWeight: l.FontWeights.Bold
                    },
                    children: a.title
                })
            }),
            (0, g.jsx)(k.default.Text, {
                italic: !0,
                children: a.description
            })
        ]
    });
    var t = a => (0, g.jsxs)('div', {
        className: 'maxWidth',
        children: [
            (0, g.jsx)(k.default.Title, {
                style: {
                    fontFamily: l.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    marginBottom: 5
                },
                level: 3,
                children: 'Community Guidelines'
            }),
            (0, g.jsxs)(k.default.Text, {
                children: [
                    'All published content must follow our',
                    ' ',
                    (0, g.jsx)(p.default, {
                        style: {
                            color: r.default.Yellow,
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
            (0, g.jsx)(k.default.Title, {
                style: {
                    fontFamily: l.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    marginTop: 35
                },
                level: 3,
                children: 'Publishing Requirements'
            }),
            (0, g.jsxs)(j.default, {
                className: 'maxWidth',
                direction: 'vertical',
                size: 14,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, g.jsx)(s, {
                        title: 'Career Level 50+',
                        description: `You must have leveled up 50+ times in all your time playing ${ m.COMPANY_NAME }, unless you're a ${ n.SeasonTicketName.name } holder!`
                    }),
                    (0, g.jsx)(s, {
                        title: `1,000+ ${ o.default.currency }`,
                        description: `Publishing a map costs 1,000 ${ o.default.currency }. ${ n.SeasonTicketName.name } holders publish for free!`
                    })
                ]
            }),
            (0, g.jsx)(i.default, {}),
            a.publishRequirementError ? (0, g.jsx)('div', {
                style: {
                    background: 'rgba(255,0,0,0.1)',
                    padding: 25,
                    borderRadius: 8,
                    border: '1px solid rgba(255,0,0,0.5)'
                },
                children: (0, g.jsxs)(k.default.Text, {
                    children: [
                        a.publishRequirementError,
                        ' ',
                        (0, g.jsx)('br', {}),
                        (0, g.jsx)('br', {}),
                        (0, g.jsxs)(p.default, {
                            style: {
                                color: r.default.Yellow,
                                textDecoration: 'underline'
                            },
                            to: q.SEASON_TICKET_BASE,
                            target: '_blank',
                            children: [
                                'Purchase the ',
                                n.SeasonTicketName.name
                            ]
                        }),
                        ' ',
                        'to immediately become eligible & publish for free!'
                    ]
                })
            }) : (0, g.jsxs)('div', {
                className: 'maxWidth flex-center flex-column',
                children: [
                    (0, g.jsx)(h.default, {
                        size: 'large',
                        block: !0,
                        type: 'primary',
                        style: {
                            height: 55
                        },
                        onClick: a.next,
                        children: 'Continue'
                    }),
                    (0, g.jsx)(k.default.Text, {
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