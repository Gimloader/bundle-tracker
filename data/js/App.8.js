function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Bx8X5', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e(b.exports, 'default', function() {
        return _k;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('Yz2Bk'),
        g = a('cvto726'),
        h = a('CGys7'),
        i = a('xG58X'),
        j = a('wT7vQ');
    var _k = e => {
        const {
            data: l
        } = e;
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
                    refetch: e.refetch
                }),
                (0, e.jsx)(i.default, {
                    total: l.plays.total,
                    last30: l.plays.last30,
                    last7: l.plays.last7
                }),
                (0, e.jsx)(j.default, {
                    id: l._id,
                    close: e.close
                })
            ]
        });
    };
}), a.register('Yz2Bk', function(b, c) {
    e(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('MSsQO'),
        h = a('j2ADs'),
        i = a('PMl60'),
        j = a('jlX4s16'),
        k = a('kkK6w');
    var _l = e => {
        const m = `${ (0, i.getDomain)() }/creative/map/${ e.id }`;
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
                                _b(j)(m), g.default.success('Link copied to clipboard!');
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
}), a.register('kkK6w', function(_b, c) {
    e(_b.exports, 'Container', function() {
        return _i;
    }), e(_b.exports, 'Title', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('j2ADs'),
        f = a('Axq+p'),
        g = a('b5kvC');
    let h;
    const _i = f.default.div.attrs({
            className: 'maxWidth'
        })(h || (h = (e => e)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`)),
        _j = e => (0, d.jsx)(e.default.Title, {
            style: {
                fontFamily: g.Fonts.FugazOne,
                textTransform: 'uppercase',
                marginBottom: '0.2em'
            },
            level: 3,
            children: e.children
        });
}), a.register('CGys7', function(b, c) {
    e(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('YRlpt'),
        g = a('j2ADs');
    a('LEQ5w');
    var h = a('ECzOP'),
        i = a('2HvvA11'),
        j = a('vShe/'),
        k = a('kkK6w'),
        l = a('PMl60'),
        m = a('w0a3U'),
        n = a('Quxw3'),
        o = a('x7BBh');
    var _p = e => {
        const [q, r, s] = (0, l.useBoolean)(!1), t = _b(h).unix(e.lastPublish);
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
                                        }), e.refetch();
                                    },
                                    error: e => {
                                        (0, l.throwMessageError)({
                                            e: e,
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
}), a.register('xG58X', function(_b, c) {
    e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('cvto726'),
        f = a('j2ADs');
    a('LEQ5w');
    var g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('PMl60'),
        j = a('kkK6w');
    const k = e => (0, d.jsxs)('div', {
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
                children: e.label
            }),
            (0, d.jsx)('div', {
                style: {
                    fontSize: 32,
                    fontWeight: g.FontWeights.Black
                },
                children: (0, i.numberWithCommas)(e.value)
            })
        ]
    });
    var _l = e => (0, d.jsxs)(j.Container, {
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
                        value: e.total
                    }),
                    (0, d.jsx)(k, {
                        label: 'Last 30 Days',
                        value: e.last30
                    }),
                    (0, d.jsx)(k, {
                        label: 'Last 7 Days',
                        value: e.last7
                    })
                ]
            })
        ]
    });
}), a.register('wT7vQ', function(b, c) {
    e(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('MSsQO'),
        f = a('YRlpt'),
        g = a('2HvvA11'),
        h = a('vShe/'),
        i = a('w0a3U'),
        j = a('PMl60');
    var _k = e => (0, d.jsx)('div', {
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
                            url: `/api/created-map/listing/remove/${ e.id }`,
                            success: () => {
                                e.default.success('Map unpublished!'), e.close();
                            },
                            error: e => {
                                (0, j.throwMessageError)({
                                    e: e,
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