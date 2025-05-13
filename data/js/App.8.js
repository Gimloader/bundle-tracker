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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = n => {
        const {
            data: o
        } = n;
        return (0, g.jsxs)(i.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 20,
            children: [
                (0, g.jsx)(h.default, {
                    id: o._id
                }),
                (0, g.jsx)(j.default, {
                    lastPublish: o.lastPublish,
                    refetch: n.refetch
                }),
                (0, g.jsx)(k.default, {
                    total: o.plays.total,
                    last30: o.plays.last30,
                    last7: o.plays.last7
                }),
                (0, g.jsx)(l.default, {
                    id: o._id,
                    close: n.close
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    var _n = o => {
        const p = `${ (0, k.getDomain)() }/creative/map/${ o.id }`;
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
                            value: p,
                            readOnly: !0
                        }),
                        (0, f.jsx)(g.default, {
                            type: 'primary',
                            onClick: () => {
                                b(l)(p), i.default.success('Link copied to clipboard!');
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'Container', function() {
        return _k;
    }), a(d.exports, 'Title', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    let j;
    const _k = h.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = (l => l)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`)),
        _l = m => (0, f.jsx)(g.default.Title, {
            style: {
                fontFamily: i.Fonts.FugazOne,
                textTransform: 'uppercase',
                marginBottom: '0.2em'
            },
            level: 3,
            children: m.children
        });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....');
    var _r = s => {
        const [t, u, v] = (0, n.useBoolean)(!1), w = b(j).unix(s.lastPublish);
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
                                        w.format('MMMM Do'),
                                        ' at ',
                                        w.format('h:mmA'),
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
                        loading: t,
                        onClick: () => {
                            t || (u(), window.addEventListener('MAP_SAVED', () => {
                                (0, o.Request)({
                                    url: '/api/created-map/listing/publish-new-version/' + window._mapId,
                                    success: () => {
                                        h.default.success({
                                            title: 'Changes published!',
                                            content: 'Players will now experience the latest version of your map!'
                                        }), s.refetch();
                                    },
                                    error: x => {
                                        (0, n.throwMessageError)({
                                            e: x,
                                            default: {
                                                title: 'Error publishing changes',
                                                content: 'Please try again.'
                                            }
                                        });
                                    },
                                    both: v
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    const m = n => (0, f.jsxs)('div', {
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
                children: n.label
            }),
            (0, f.jsx)('div', {
                style: {
                    fontSize: 32,
                    fontWeight: i.FontWeights.Black
                },
                children: (0, k.numberWithCommas)(n.value)
            })
        ]
    });
    var _n = o => (0, f.jsxs)(l.Container, {
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
                        value: o.total
                    }),
                    (0, f.jsx)(m, {
                        label: 'Last 30 Days',
                        value: o.last30
                    }),
                    (0, f.jsx)(m, {
                        label: 'Last 7 Days',
                        value: o.last7
                    })
                ]
            })
        ]
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = n => (0, f.jsx)('div', {
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
                            url: `/api/created-map/listing/remove/${ n.id }`,
                            success: () => {
                                g.default.success('Map unpublished!'), n.close();
                            },
                            error: o => {
                                (0, l.throwMessageError)({
                                    e: o,
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