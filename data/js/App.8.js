function a(a, b, c, r) {
    Object.defineProperty(a, b, {
        get: c,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('G2ekc', function(b, r) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return k;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('5pxna'),
        g = c('5nJMd26'),
        h = c('60KV4'),
        i = c('fUu8s'),
        j = c('Xj2uw');
    var k = a => {
        const {
            data: l
        } = m;
        return (0, e.jsxs)(g.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 20,
            children: [
                (0, e.jsx)(f.default, {
                    id: l._id
                }),
                (0, e.jsx)(h.default, {
                    lastPublish: l.lastPublish,
                    refetch: m.refetch
                }),
                (0, e.jsx)(i.default, {
                    total: l.plays.total,
                    last30: l.plays.last30,
                    last7: l.plays.last7
                }),
                (0, e.jsx)(j.default, {
                    id: l._id,
                    close: m.close
                })
            ]
        });
    };
}), c.register('5pxna', function(r, d) {
    a(r.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('c6x8w'),
        g = c('jrTkz0'),
        h = c('UzdPH'),
        i = c('PjB0f'),
        j = c('SlNZ027'),
        k = c('n5LnU');
    var l = a => {
        const m = `${ (0, i.getDomain)() }/creative/map/${ a.id }`;
        return (0, d.jsxs)(k.Container, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(k.Title, {
                            children: 'Public Link'
                        }),
                        (0, d.jsx)(h.default.Text, {
                            children: 'This is a direct link to play your map! The link never expires as long as your map remains published.'
                        })
                    ]
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        marginTop: 10
                    },
                    children: [
                        (0, d.jsx)(f.default, {
                            style: {
                                width: '100%'
                            },
                            type: 'text',
                            value: m,
                            readOnly: !0
                        }),
                        (0, d.jsx)(e.default, {
                            type: 'primary',
                            onClick: () => {
                                b(j)(m), g.default.success('Link copied to clipboard!');
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
}), c.register('n5LnU', function(b, r) {
    a(b.exports, 'Container', function() {
        return i;
    }), a(b.exports, 'Title', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH'),
        f = c('h99Nu'),
        g = c('gSUVO');
    let h;
    const i = f.default.div.attrs({
            className: 'maxWidth'
        })(h || (h = (a => a)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`)),
        j = a => (0, d.jsx)(e.default.Title, {
            style: {
                fontFamily: g.Fonts.FugazOne,
                textTransform: 'uppercase',
                marginBottom: '0.2em'
            },
            level: 3,
            children: a.children
        });
}), c.register('60KV4', function(r, s) {
    a(r.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('cR5QE'),
        g = c('UzdPH');
    c('uPP4W');
    var h = c('2MCaL'),
        i = c('iYEuk12'),
        j = c('S/jX4'),
        k = c('n5LnU'),
        l = c('PjB0f'),
        m = c('uVDHR'),
        n = c('DM38W'),
        o = c('sPSvg');
    var p = a => {
        const [q, r, s] = (0, l.useBoolean)(!1), t = b(h).unix(a.lastPublish);
        return (0, d.jsxs)(k.Container, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(k.Title, {
                            children: 'Publish New Version'
                        }),
                        (0, d.jsxs)(g.default.Text, {
                            children: [
                                'Your map was last published on',
                                ' ',
                                (0, d.jsxs)('b', {
                                    children: [
                                        t.format('MMMM Do'),
                                        ' at ',
                                        t.format('h:mmA'),
                                        '.'
                                    ]
                                }),
                                ' ',
                                'If you\'ve made changes since then, click the button below to publish them!'
                            ]
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 15
                    },
                    children: (0, d.jsx)(e.default, {
                        block: !0,
                        type: 'primary',
                        loading: q,
                        onClick: () => {
                            q || (r(), window.addEventListener('MAP_SAVED', () => {
                                (0, m.Request)({
                                    url: '/api/created-map/listing/publish-new-version/' + window._mapId,
                                    success: () => {
                                        f.default.success({
                                            title: 'Changes published!',
                                            content: 'Players will now experience the latest version of your map!'
                                        }), a.refetch();
                                    },
                                    error: a => {
                                        (0, l.throwMessageError)({
                                            e: a,
                                            default: {
                                                title: 'Error publishing changes',
                                                content: 'Please try again.'
                                            }
                                        });
                                    },
                                    both: s
                                });
                            }, {
                                once: !0
                            }), (0, n.default)(o.default.save, {
                                ignoreNotification: !0
                            }));
                        },
                        children: 'Publish Changes (Free)'
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 9
                    },
                    children: (0, d.jsxs)('div', {
                        style: {
                            fontSize: 12,
                            lineHeight: 1.2,
                            opacity: 0.9,
                            color: 'rgba(255,255,255,0.9)'
                        },
                        children: [
                            'Ensure everything in your map follows our',
                            ' ',
                            (0, d.jsx)(i.default, {
                                to: 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative',
                                external: !0,
                                target: '_blank',
                                style: {
                                    color: j.default.Yellow,
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
}), c.register('fUu8s', function(b, l) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('5nJMd26'),
        f = c('UzdPH');
    c('uPP4W');
    var g = c('gSUVO'),
        h = c('lmfrI'),
        i = c('PjB0f'),
        j = c('n5LnU');
    const k = a => (0, d.jsxs)('div', {
        className: 'maxWidth flex-column flex-center',
        style: {
            padding: 20,
            background: 'rgba(255,255,255,0.1)',
            color: h.default.White,
            borderRadius: 6,
            lineHeight: 1
        },
        children: [
            (0, d.jsx)('div', {
                style: {
                    fontFamily: g.Fonts.FugazOne,
                    textTransform: 'uppercase',
                    opacity: 0.8,
                    fontSize: 14,
                    marginBottom: 8
                },
                children: a.label
            }),
            (0, d.jsx)('div', {
                style: {
                    fontSize: 32,
                    fontWeight: g.FontWeights.Black
                },
                children: (0, i.numberWithCommas)(a.value)
            })
        ]
    });
    var l = a => (0, d.jsxs)(j.Container, {
        children: [
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsx)(j.Title, {
                        children: 'Analytics'
                    }),
                    (0, d.jsx)(f.default.Text, {
                        children: 'See how many times your map has been played!'
                    })
                ]
            }),
            (0, d.jsxs)(e.default, {
                direction: 'vertical',
                size: 12,
                style: {
                    marginTop: 15
                },
                className: 'maxWidth',
                children: [
                    (0, d.jsx)(k, {
                        label: 'Total Plays',
                        value: a.total
                    }),
                    (0, d.jsx)(k, {
                        label: 'Last 30 Days',
                        value: a.last30
                    }),
                    (0, d.jsx)(k, {
                        label: 'Last 7 Days',
                        value: a.last7
                    })
                ]
            })
        ]
    });
}), c.register('Xj2uw', function(b, l) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('jrTkz0'),
        f = c('cR5QE'),
        g = c('iYEuk12'),
        h = c('S/jX4'),
        i = c('uVDHR'),
        j = c('PjB0f');
    var k = a => (0, d.jsx)('div', {
        children: (0, d.jsx)(g.default, {
            style: {
                color: h.default.Yellow,
                textDecoration: 'underline'
            },
            onClick: () => {
                f.default.confirm({
                    title: 'Are you sure you want to unpublish?',
                    content: 'Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.',
                    okText: 'Yes',
                    onOk: () => {
                        (0, i.Request)({
                            url: `/api/created-map/listing/remove/${ a.id }`,
                            success: () => {
                                e.default.success('Map unpublished!'), a.close();
                            },
                            error: a => {
                                (0, j.throwMessageError)({
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