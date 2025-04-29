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
c.register('IZuHX', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var g = c('gRbUn');
    c('O0Kav');
    var h = c('Kt6UF'),
        i = c('E2AMI26'),
        j = c('+pgVJ'),
        k = c('6IkLl'),
        l = c('59eoT');
    var _m = a => {
        const {
            data: n
        } = a;
        return (0, g.jsxs)(i.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 20,
            children: [
                (0, g.jsx)(h.default, {
                    id: n._id
                }),
                (0, g.jsx)(j.default, {
                    lastPublish: n.lastPublish,
                    refetch: a.refetch
                }),
                (0, g.jsx)(k.default, {
                    total: n.plays.total,
                    last30: n.plays.last30,
                    last7: n.plays.last7
                }),
                (0, g.jsx)(l.default, {
                    id: n._id,
                    close: a.close
                })
            ]
        });
    };
}), c.register('Kt6UF', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('aevdF'),
        i = c('Bjl070'),
        j = c('22RS1'),
        k = c('quE27'),
        l = c('gS4g327'),
        m = c('bZ5Pf');
    var _n = a => {
        const o = `${ (0, k.getDomain)() }/creative/map/${ a.id }`;
        return (0, f.jsxs)(m.Container, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(m.Title, {
                            children: 'Public Link'
                        }),
                        (0, f.jsx)(j.default.Text, {
                            children: 'This is a direct link to play your map! The link never expires as long as your map remains published.'
                        })
                    ]
                }),
                (0, f.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        marginTop: 10
                    },
                    children: [
                        (0, f.jsx)(h.default, {
                            style: {
                                width: '100%'
                            },
                            type: 'text',
                            value: o,
                            readOnly: !0
                        }),
                        (0, f.jsx)(g.default, {
                            type: 'primary',
                            onClick: () => {
                                b(l)(o), i.default.success('Link copied to clipboard!');
                            },
                            style: {
                                marginLeft: 10
                            },
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
}), c.register('bZ5Pf', function(d, e) {
    a(d.exports, 'Container', function() {
        return _k;
    }), a(d.exports, 'Title', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('22RS1'),
        h = c('u4s09'),
        i = c('Eh2Wh');
    let j;
    const _k = h.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = (a => a)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`)),
        _l = a => (0, f.jsx)(g.default.Title, {
            style: {
                fontFamily: i.Fonts.FugazOne,
                textTransform: 'uppercase',
                marginBottom: '0.2em'
            },
            level: 3,
            children: a.children
        });
}), c.register('+pgVJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('AE7vR'),
        i = c('22RS1');
    c('O0Kav');
    var j = c('Tzf4u'),
        k = c('FB7HT26'),
        l = c('HOIhZ'),
        m = c('bZ5Pf'),
        n = c('quE27'),
        o = c('sPeAY'),
        p = c('0v55W'),
        q = c('ywRRc');
    var _r = a => {
        const [s, t, u] = (0, n.useBoolean)(!1), v = b(j).unix(a.lastPublish);
        return (0, f.jsxs)(m.Container, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(m.Title, {
                            children: 'Publish New Version'
                        }),
                        (0, f.jsxs)(i.default.Text, {
                            children: [
                                'Your map was last published on',
                                ' ',
                                (0, f.jsxs)('b', {
                                    children: [
                                        v.format('MMMM Do'),
                                        ' at ',
                                        v.format('h:mmA'),
                                        '.'
                                    ]
                                }),
                                ' ',
                                'If you\'ve made changes since then, click the button below to publish them!'
                            ]
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: 15
                    },
                    children: (0, f.jsx)(g.default, {
                        block: !0,
                        type: 'primary',
                        loading: s,
                        onClick: () => {
                            s || (t(), window.addEventListener('MAP_SAVED', () => {
                                (0, o.Request)({
                                    url: '/api/created-map/listing/publish-new-version/' + window._mapId,
                                    success: () => {
                                        h.default.success({
                                            title: 'Changes published!',
                                            content: 'Players will now experience the latest version of your map!'
                                        }), a.refetch();
                                    },
                                    error: a => {
                                        (0, n.throwMessageError)({
                                            e: a,
                                            default: {
                                                title: 'Error publishing changes',
                                                content: 'Please try again.'
                                            }
                                        });
                                    },
                                    both: u
                                });
                            }, {
                                once: !0
                            }), (0, p.default)(q.default.save, {
                                ignoreNotification: !0
                            }));
                        },
                        children: 'Publish Changes (Free)'
                    })
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: 9
                    },
                    children: (0, f.jsxs)('div', {
                        style: {
                            fontSize: 12,
                            lineHeight: 1.2,
                            opacity: 0.9,
                            color: 'rgba(255,255,255,0.9)'
                        },
                        children: [
                            'Ensure everything in your map follows our',
                            ' ',
                            (0, f.jsx)(k.default, {
                                to: 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative',
                                external: !0,
                                target: '_blank',
                                style: {
                                    color: l.default.Yellow,
                                    textDecoration: 'underline'
                                },
                                children: 'community guidelines.'
                            }),
                            ' ',
                            'Failure to do so may result in account suspension.'
                        ]
                    })
                })
            ]
        });
    };
}), c.register('6IkLl', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('E2AMI26'),
        h = c('22RS1');
    c('O0Kav');
    var i = c('Eh2Wh'),
        j = c('8KqQ+'),
        k = c('quE27'),
        l = c('bZ5Pf');
    const m = a => (0, f.jsxs)('div', {
        className: 'maxWidth flex-column flex-center',
        style: {
            padding: 20,
            background: 'rgba(255,255,255,0.1)',
            color: j.default.White,
            borderRadius: 6,
            lineHeight: 1
        },
        children: [
            (0, f.jsx)('div', {
                style: {
                    fontFamily: i.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    opacity: 0.8,
                    fontSize: 14,
                    marginBottom: 8
                },
                children: a.label
            }),
            (0, f.jsx)('div', {
                style: {
                    fontSize: 32,
                    fontWeight: i.FontWeights.Black
                },
                children: (0, k.numberWithCommas)(a.value)
            })
        ]
    });
    var _n = a => (0, f.jsxs)(l.Container, {
        children: [
            (0, f.jsxs)('div', {
                children: [
                    (0, f.jsx)(l.Title, {
                        children: 'Analytics'
                    }),
                    (0, f.jsx)(h.default.Text, {
                        children: 'See how many times your map has been played!'
                    })
                ]
            }),
            (0, f.jsxs)(g.default, {
                direction: 'vertical',
                size: 12,
                style: {
                    marginTop: 15
                },
                className: 'maxWidth',
                children: [
                    (0, f.jsx)(m, {
                        label: 'Total Plays',
                        value: a.total
                    }),
                    (0, f.jsx)(m, {
                        label: 'Last 30 Days',
                        value: a.last30
                    }),
                    (0, f.jsx)(m, {
                        label: 'Last 7 Days',
                        value: a.last7
                    })
                ]
            })
        ]
    });
}), c.register('59eoT', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('Bjl070'),
        h = c('AE7vR'),
        i = c('FB7HT26'),
        j = c('HOIhZ'),
        k = c('sPeAY'),
        l = c('quE27');
    var _m = a => (0, f.jsx)('div', {
        children: (0, f.jsx)(i.default, {
            style: {
                color: j.default.Yellow,
                textDecoration: 'underline'
            },
            onClick: () => {
                h.default.confirm({
                    title: 'Are you sure you want to unpublish?',
                    content: 'Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.',
                    okText: 'Yes',
                    onOk: () => {
                        (0, k.Request)({
                            url: `/api/created-map/listing/remove/${ a.id }`,
                            success: () => {
                                g.default.success('Map unpublished!'), a.close();
                            },
                            error: a => {
                                (0, l.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error unpublishing map'
                                    }
                                });
                            }
                        });
                    }
                });
            },
            children: 'Unpublish map'
        })
    });
});