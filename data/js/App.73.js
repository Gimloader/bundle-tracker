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
a.register('9Q9gX', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _u(b.exports, 'default', function() {
        return _t;
    });
    var e = a('0hzx+'),
        f = a('6CIVV'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('sHRDd'),
        j = a('b5kvC'),
        k = a('PMl60'),
        l = a('kzHAL'),
        m = a('gs4MT'),
        n = a('70AkF'),
        o = a('jzxyj10'),
        p = a('RJjEi');
    let q, r, s = _u => _u;
    var _t = () => {
        const [_u, v] = g.useState(), {
            id: w
        } = (0, n.useParams)();
        g.useEffect(() => {
            (0, k.request)({
                url: `/api/map-assignment/basic-info/${ w }`,
                success: _u => {
                    v(_u);
                },
                error: () => (0, o.NavigateTo)(m.DASHBOARD)
            });
        }, []);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(k.Title, {
                    title: 'Assignment'
                }),
                (0, e.jsxs)(_u, {
                    children: [
                        (0, e.jsx)(p.default, {
                            includeSpacer: !0
                        }),
                        _u ? (0, e.jsx)(l.default, {
                            id: w,
                            info: _u
                        }) : (0, e.jsx)(_v, {
                            children: (0, e.jsx)(f.default, {
                                size: 'large'
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _u = h.default.div.attrs({
            className: 'flex flex-column'
        })(q || (q = s`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), i.default.Snow, i.default.Black, j.Fonts.SFPro),
        _v = h.default.div.attrs({
            className: 'maxAll flex-center'
        })(r || (r = s``));
}), a.register('kzHAL', function(b, c) {
    _b(b.exports, 'Tab', function() {
        return _n;
    }), _b(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('8vIP9'),
        h = a('D5CzB'),
        i = a('N+8T9'),
        j = a('PMl60'),
        k = a('NIZyA'),
        l = a('ECzOP');
    let m, _n;
    var o;
    (o = _n || (_n = {})).share = 'share', o.results = 'results', o.info = 'info';
    var _p = _b => {
        const {
            title: q,
            dueDate: r
        } = _b.info, [s, t] = e.useState(_n.share), u = _b(l)().isAfter(_b(l)(r));
        e.useEffect(() => {
            u && t(_n.results);
        }, [u]);
        const v = _b(l)((0, j.dateFromObjectId)(_b.id)).add(546, 'days'),
            w = !_b(l)().isAfter(v) && Math.abs(_b(l)().diff(v, 'months')) < 3;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                w ? (0, d.jsx)(k.default, {
                    banner: !0,
                    message: `Assignments are automatically deleted after 1.5 years. This assignment will be deleted on ${ v.format('MMMM Do') }.`
                }) : null,
                (0, d.jsxs)(_q, {
                    children: [
                        (0, d.jsx)(g.default, {
                            id: _b.id,
                            title: q,
                            dueDate: r
                        }),
                        (0, d.jsx)(i.default, {
                            tab: s,
                            onTabChange: t,
                            info: _b.info,
                            isPastDue: u
                        }),
                        (0, d.jsx)(h.default, {
                            id: _b.id,
                            info: _b.info,
                            tab: s
                        })
                    ]
                }),
                (0, d.jsx)(j.Title, {
                    title: `${ q } | Assignment`
                })
            ]
        });
    };
    const _q = f.default.div.attrs({
        className: 'maxWidth flex-column vc'
    })(m || (m = (_b => _b)`
  flex: 1;
  padding: 40px 20px 0px 20px;
`));
}), a.register('8vIP9', function(b, c) {
    _b(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('YRlpt'),
        h = a('ijg0s'),
        i = a('ECzOP'),
        j = a('LEQ5w'),
        k = a('Axq+p'),
        l = a('sHRDd'),
        m = a('b5kvC'),
        n = a('PMl60');
    let o, p, q, r, s, t, u = _b => _b;
    var _v = _b => {
        const [w, x, y] = (0, n.useBoolean)(!1), [z, A] = j.useState(_b.title), [B, C] = j.useState(''), [D, E, F] = (0, n.useBoolean)(!1), G = () => {
            D || (E(), (0, n.request)({
                url: '/api/map-assignment/change-title',
                data: {
                    id: _b.id,
                    title: B
                },
                success: _b => {
                    A(_b.title), C(''), y();
                },
                both: () => {
                    F();
                }
            }));
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_w, {
                    children: [
                        (0, d.jsxs)(_x, {
                            children: [
                                'Assignment - Due ',
                                _b(i)(_b.dueDate).format('MMMM Do')
                            ]
                        }),
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                title: 'Change Name',
                                placement: 'left',
                                children: (0, d.jsx)(_y, {
                                    onClick: x,
                                    children: z
                                })
                            })
                        })
                    ]
                }),
                (0, d.jsx)(g.default, {
                    open: w,
                    onCancel: y,
                    closable: !0,
                    footer: (0, d.jsx)(e.default, {
                        type: 'primary',
                        loading: D,
                        onClick: G,
                        children: 'Save'
                    }),
                    width: 600,
                    children: (0, d.jsxs)(_z, {
                        children: [
                            (0, d.jsx)(_A, {
                                children: 'New Name'
                            }),
                            (0, d.jsx)(_B, {
                                children: 'Leave empty to use the name of the game mode for this assignment!'
                            }),
                            (0, d.jsx)(f.default, {
                                size: 'large',
                                style: {
                                    width: '100%'
                                },
                                maxLength: 32,
                                placeholder: _b.title || 'Assignment...',
                                value: B,
                                onChange: _b => C(_b.target.value),
                                onPressEnter: G
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _w = k.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(o || (o = u``)),
        _x = k.default.div(p || (p = u`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
`)),
        _y = k.default.div(q || (q = u`
  font-size: 56px;
  font-weight: ${ 0 };
  text-align: center;
  cursor: pointer;
`), m.FontWeights.UltraBold),
        _z = k.default.div(r || (r = u`
  color: ${ 0 };
  font-family: ${ 0 };
`), l.default.Black, m.Fonts.SFPro),
        _A = k.default.div(s || (s = u`
  font-size: 22px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold),
        _B = k.default.div(t || (t = u`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`));
}), a.register('D5CzB', function(_b, c) {
    _b(_b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('kzHAL'),
        f = a('Axq+p'),
        g = a('7s5R80'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('8cQsQ'),
        k = a('ps8en'),
        l = a('sKGVY');
    let m;
    var _n = _b => {
        const {
            tab: o,
            id: p,
            info: q
        } = _b;
        return (0, d.jsx)(_o, {
            children: o === e.Tab.share ? (0, d.jsx)(j.default, {
                id: p
            }) : o === e.Tab.results ? (0, d.jsx)(k.default, {
                id: p,
                groups: q.groups
            }) : o === e.Tab.info ? (0, d.jsx)(l.default, {
                info: q
            }) : null
        });
    };
    const _o = (0, f.default)(g.default).attrs({
        className: 'scroll-x'
    })(m || (m = (_b => _b)`
  width: 1000px;
  max-width: 90%;
  flex: 1;
  padding: 0px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro);
}), a.register('7s5R80', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _b => (0, d.jsx)(_i, {
        onClick: _b.onClick,
        className: _b.className,
        style: _b.style,
        children: _b.children
    });
    const _i = e.default.div(g || (g = (_b => _b)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('8cQsQ', function(b, c) {
    _b(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('MSsQO'),
        h = a('jlX4s16');
    a('LEQ5w');
    var i = a('Axq+p'),
        j = a('sHRDd'),
        k = a('PMl60');
    let l, m, n, o = _b => _b;
    var _p = _b => {
        const q = (0, k.getDomain)() + '/join/' + _b.id;
        return (0, d.jsxs)(_q, {
            children: [
                (0, d.jsx)(_r, {
                    children: 'Share this link with your students to have them complete this assignment!'
                }),
                (0, d.jsxs)(_s, {
                    children: [
                        (0, d.jsx)(f.default, {
                            value: q,
                            style: {
                                color: j.default.Black
                            },
                            size: 'large'
                        }),
                        (0, d.jsx)(e.default, {
                            size: 'large',
                            type: 'primary',
                            style: {
                                marginLeft: 10
                            },
                            onClick: () => {
                                _c(h)(q), g.default.success('Link copied to clipboard!');
                            },
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
    const _q = i.default.div(l || (l = o`
  padding: 35px;
`)),
        _r = i.default.div(m || (m = o`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`)),
        _s = i.default.div.attrs({
            className: 'flex vc '
        })(n || (n = o`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${ 0 };
  border-radius: 4px;
  margin-top: 10px;
`), j.default.BorderGray);
}), a.register('jlX4s16', function(_b, _c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('ps8en', function(b, c) {
    _t(b.exports, 'Status', function() {
        return _m;
    }), _t(b.exports, 'Sort', function() {
        return _p;
    }), _t(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('/ZSeG'),
        h = a('Vgh6H'),
        i = a('tKH6V'),
        j = a('R+dDo');
    let k, l, _m, n = _t => _t;
    var o;
    let _p;
    var q;
    (o = _m || (_m = {})).completed = 'completed', o.inProgress = 'in-progress', o.notStarted = 'not-started', (q = _p || (_p = {})).firstName = 'firstName', q.lastName = 'lastName';
    var _r = _t => {
        const [s, t] = e.useState(_m.completed), [u, v] = e.useState(''), [w, x] = e.useState(_p.firstName);
        return (0, d.jsxs)(_s, {
            children: [
                (0, d.jsx)(h.default, {
                    group: u,
                    onGroupChange: v,
                    groups: _t.groups,
                    status: s,
                    onStatusChange: t,
                    sort: w,
                    onSortChange: x
                }),
                (0, d.jsx)(_t, {
                    children: s === _m.completed ? (0, d.jsx)(g.default, {
                        id: _t.id,
                        group: u,
                        sort: w
                    }) : s === _m.inProgress ? (0, d.jsx)(i.default, {
                        id: _t.id,
                        group: u,
                        sort: w
                    }) : s === _m.notStarted ? (0, d.jsx)(j.default, {
                        id: _t.id,
                        group: u,
                        sort: w
                    }) : null
                })
            ]
        });
    };
    const _s = f.default.div.attrs({
            className: 'flex'
        })(k || (k = n`
  padding: 0px 30px;
`)),
        _t = f.default.div.attrs({
            className: 'flex'
        })(l || (l = n`
  flex: 1;
  padding: 30px;
  padding-right: 0px;
`));
}), a.register('/ZSeG', function(b, c) {
    _t(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('NIZyA'),
        f = a('fmVdR'),
        g = a('LEQ5w'),
        h = a('b5kvC'),
        i = a('PMl60'),
        j = a('j2jOR'),
        k = a('DqHzA'),
        l = a('N+aMR'),
        m = a('V2GOM'),
        n = a('ps8en'),
        o = a('jPIot');
    var _p = _t => {
        const [q, r, s] = (0, i.useBoolean)(!0), [t, u] = g.useState([]);
        if (g.useEffect(() => {
                r(), (0, i.request)({
                    url: '/api/map-assignment/completions',
                    data: {
                        id: _t.id,
                        group: _t.group
                    },
                    success: _t => u(_t),
                    both: s,
                    cacheKey: 'ASSIGNMENT_COMPLETED'
                });
            }, [_t.group]), q)
            return (0, d.jsx)(m.default, {});
        if (!t.length)
            return (0, d.jsx)(l.default, {
                children: _t.group ? 'Nobody in this class has completed this assignment yet' : 'Nobody has completed this assignment yet'
            });
        const v = _t.sort === n.Sort.firstName ? (0, j.default)(t, _t => _t.name) : (0, k.default)(t, _t => _t.name);
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                v.length >= 1000 ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(e.default, {
                            message: (0, d.jsx)('span', {
                                style: {
                                    fontWeight: h.FontWeights.Bold
                                },
                                children: 'Only 1,000 Completions Shown'
                            }),
                            description: 'This assignment has been completed 1,000+ times. Only the first 1,000 completions are shown, meaning data for some students may be missing.',
                            showIcon: !0,
                            type: 'warning'
                        }),
                        (0, d.jsx)(f.default, {})
                    ]
                }) : null,
                v.map((_t, q) => (0, d.jsxs)(g.Fragment, {
                    children: [
                        (0, d.jsx)(o.default, {
                            data: _t
                        }),
                        q !== t.length - 1 && (0, d.jsx)('div', {
                            style: {
                                height: 10
                            }
                        })
                    ]
                }, _t._id + '-player'))
            ]
        });
    };
}), a.register('j2jOR', function(b, c) {
    _t(b.exports, 'default', function() {
        return _d;
    });
    var _d = (_t, b) => _t.sort((_t, c) => {
        const e = b(_t),
            f = b(c);
        return e.localeCompare(f);
    });
}), a.register('DqHzA', function(b, c) {
    _t(b.exports, 'default', function() {
        return _e;
    });
    const d = _t => _t.split(' ').pop() || _t;
    var _e = (_t, b) => _t.sort((_t, c) => {
        const f = d(b(_t)),
            g = d(b(c));
        return f.localeCompare(g);
    });
}), a.register('N+aMR', function(b, c) {
    _t(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC');
    let g, h, i, j, k = _t => _t;
    var _l = _t => (0, d.jsxs)(_m, {
        children: [
            (0, d.jsx)(_n, {}),
            (0, d.jsx)(_o, {
                children: 'Nothing yet...'
            }),
            (0, d.jsx)(_p, {
                children: _t.children
            })
        ]
    });
    const _m = e.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(g || (g = k`
  flex: 1;
  min-height: 400px;
  text-align: center;
`)),
        _n = e.default.img.attrs({
            src: '/client/img/assignment/box.svg'
        })(h || (h = k`
  height: 80px;
`)),
        _o = e.default.div(i || (i = k`
  font-weight: ${ 0 };
  font-size: 28px;
  margin-top: 15px;
`), f.FontWeights.UltraBold),
        _p = e.default.div(j || (j = k`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), a.register('V2GOM', function(b, c) {
    _t(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('oBBW6');
    a('LEQ5w');
    var f = a('Axq+p');
    let g;
    var _h = () => (0, d.jsx)(_i, {
        children: (0, d.jsx)(e.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            }
        })
    });
    const _i = f.default.div.attrs({
        className: 'maxWidth'
    })(g || (g = (_t => _t)`
  .ant-skeleton-paragraph li {
    width: 100% !important;
  }
`));
}), a.register('jPIot', function(b, c) {
    _t(b.exports, 'Name', function() {
        return _x;
    }), _t(b.exports, 'Description', function() {
        return _y;
    }), _t(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('oXQNI'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('Mxdoz'),
        k = a('eFGdb'),
        l = a('4meFK');
    let m, n, o, p, q, r, s = _t => _t;
    var _t = _t => {
        const {
            data: {
                name: u,
                completions: v
            }
        } = _t, w = v.length > 1;
        return (0, d.jsx)(e.default, {
            children: (0, d.jsxs)(_u, {
                children: [
                    (0, d.jsxs)(_v, {
                        children: [
                            (0, d.jsxs)(_w, {
                                children: [
                                    (0, d.jsx)(_x, {
                                        children: u
                                    }),
                                    (0, d.jsx)(_y, {
                                        children: w ? `Completed ${ v.length } times` : `Completed ${ (0, l.default)(v[0].completedAt) }`
                                    })
                                ]
                            }),
                            (0, d.jsx)(_z, {
                                children: w ? null : (0, d.jsx)(k.default, {
                                    links: v[0].links || [],
                                    playerName: u
                                })
                            })
                        ]
                    }),
                    w ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    height: 17
                                }
                            }),
                            v.map((w, e) => (0, d.jsxs)(f.Fragment, {
                                children: [
                                    (0, d.jsx)(j.default, {
                                        completion: w,
                                        playerName: u
                                    }),
                                    e !== v.length - 1 && (0, d.jsx)('div', {
                                        style: {
                                            height: 10
                                        }
                                    })
                                ]
                            }, `${ _t.data._id }-completion-${ e }`))
                        ]
                    }) : null
                ]
            })
        });
    };
    const _u = g.default.div(m || (m = s`
  color: ${ 0 };
`), h.default.Black),
        _v = g.default.div.attrs({
            className: 'flex between vc'
        })(n || (n = s``)),
        _w = g.default.div(o || (o = s``)),
        _x = g.default.div(p || (p = s`
  font-size: 18px;
  font-weight: ${ 0 };
  color: rgba(0, 0, 0, 0.9);
`), i.FontWeights.Bold),
        _y = g.default.div(q || (q = s`
  font-size: 15px;
  margin-top: 2px;
`)),
        _z = g.default.div(r || (r = s``));
}), a.register('Mxdoz', function(b, c) {
    _t(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('oXQNI');
    a('LEQ5w');
    var f = a('4meFK'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('eFGdb');
    let j, k, l, m = _t => _t;
    var _n = _t => {
        const {
            playerName: o,
            completion: p
        } = _t;
        return (0, d.jsx)(e.default, {
            bodyStyle: {
                padding: '15px 20px',
                background: h.default.Snow
            },
            style: {
                overflow: 'hidden'
            },
            children: (0, d.jsxs)(_o, {
                children: [
                    (0, d.jsxs)(_p, {
                        children: [
                            'Completed ',
                            (0, f.default)(p.completedAt)
                        ]
                    }),
                    (0, d.jsx)(_q, {
                        children: (0, d.jsx)(i.default, {
                            links: p.links || [],
                            playerName: o
                        })
                    })
                ]
            })
        });
    };
    const _o = g.default.div.attrs({
            className: 'flex between vc'
        })(j || (j = m`
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  line-height: 1;
`)),
        _p = g.default.div(k || (k = m``)),
        _q = g.default.div(l || (l = m``));
}), a.register('4meFK', function(b, c) {
    _t(b.exports, 'default', function() {
        return _e;
    });
    var d = a('ECzOP');
    var _e = _t => `${ _b(d)(_t).format('MMMM Do') } at ${ _b(d)(_t).format('h:mma') }`;
}), a.register('eFGdb', function(_b, c) {
    _t(_b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LHeQv'),
        f = a('ulE4q'),
        g = a('/rAT0'),
        h = a('WfOD7'),
        i = a('ijg0s'),
        j = a('LEQ5w'),
        k = a('/9J7G'),
        l = a('VU/uj0');
    var _m = _t => {
        const [n, o] = j.useState(), {
            links: p
        } = _t, q = j.useMemo(() => _t.links.map(_t => _t.type === k.MapAssignmentResultLinkType.gameReport ? {
            link: _t,
            handler: l.GameReportCompletionLink
        } : null).filter(_t => !!_t), [p.length]), r = j.useMemo(() => {
            if (!n)
                return null;
            const s = q.find(_t => _t.link._id === n);
            return s && s.handler.hiddenRender ? s.handler.hiddenRender({
                link: s.link,
                playerName: _t.playerName,
                close: () => o('')
            }) : null;
        }, [
            n,
            q.length
        ]);
        if (!q.length)
            return null;
        if (1 === q.length) {
            var s;
            const _t = null === (s = q[0]) || void 0 === s ? void 0 : s.handler;
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(i.default, {
                        title: _t.label,
                        children: (0, d.jsx)(f.default, {
                            shape: 'circle',
                            icon: (0, d.jsx)(_t.icon, {}),
                            onClick: () => o(q[0].link._id)
                        })
                    }),
                    r
                ]
            });
        }
        const s = (0, d.jsx)(h.default, {
            children: q.map(_i => (0, d.jsx)(h.default.Item, {
                onClick: () => o(_i.link._id),
                icon: (0, d.jsx)(_i.handler.icon, {}),
                children: _i.handler.label
            }, _i.link._id))
        });
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {
                    overlay: s,
                    children: (0, d.jsx)(f.default, {
                        shape: 'circle',
                        icon: (0, d.jsx)(e.default, {})
                    })
                }),
                r
            ]
        });
    };
}), a.register('/9J7G', function(b, c) {
    let d;
    _i(b.exports, 'MapAssignmentResultLinkType', function() {
        return d;
    }), (d || (d = {})).gameReport = 'gameReport';
}), a.register('VU/uj0', function(b, c) {
    _i(b.exports, 'GameReportCompletionLink', function() {
        return _k;
    }), _i(b.exports, 'GameReportCompletionModal', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('dtquX'),
        g = a('YRlpt'),
        h = a('oBBW6'),
        i = a('PMl60'),
        j = a('sjiOn');
    const _k = {
            icon: f.default,
            label: 'View Report',
            hiddenRender: _i => (0, d.jsx)(_l, {
                playerName: _i.playerName,
                gameReportId: _i.link.resultLinkId,
                participantId: _i.link.completionLinkId,
                close: _i.close
            })
        },
        _l = _i => {
            const [m, , n] = (0, i.useBoolean)(!0), [o, p] = e.useState();
            return e.useEffect(() => {
                (0, i.request)({
                    url: '/api/game-report/fetch-participant-data',
                    data: {
                        gameReportId: _i.gameReportId,
                        participantId: _i.participantId
                    },
                    success: _i => p(_i),
                    error: _i => {
                        n();
                    }
                });
            }, [_i.participantId]), (0, d.jsx)(g.default, {
                open: m,
                onCancel: n,
                afterClose: _i.close,
                style: {
                    top: 20,
                    maxWidth: 1200
                },
                bodyStyle: {
                    minHeight: 'max-content'
                },
                closable: !0,
                width: '85%',
                footer: null,
                children: o ? (0, d.jsx)(j.default, {
                    preventScroll: !0,
                    player: {
                        name: _i.playerName,
                        correctQuestionIds: o.correctQuestionIds,
                        incorrectQuestionIds: o.incorrectQuestionIds
                    },
                    questions: o.questions
                }) : (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, d.jsx)(h.default, {
                        paragraph: {
                            rows: 16
                        }
                    })
                })
            });
        };
}), a.register('dtquX', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('zbmhG'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'BarChartOutlined';
    var _i = e.forwardRef(h);
}), a.register('zbmhG', function(b, c) {
    _t(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), a.register('Vgh6H', function(b, c) {
    _t(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('yiusa0'),
        f = a('cvto726');
    a('LEQ5w');
    var g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('ps8en');
    let j, k, l, m = _t => _t;
    const n = {
            marginLeft: 15
        },
        o = {
            fontSize: 16,
            color: 'rgba(0,0,0,0.9)'
        },
        p = 'NO_GROUP';
    var _q = _t => (0, d.jsxs)(_r, {
        children: [
            _t.groups && _t.groups.length ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(_s, {
                        children: 'Class'
                    }),
                    (0, d.jsx)(e.default.Group, {
                        value: _t.group || p,
                        onChange: b => {
                            b.target.value === p ? _t.onGroupChange('') : _t.onGroupChange(b.target.value);
                        },
                        className: 'flex-column',
                        style: n,
                        children: (0, d.jsxs)(f.default, {
                            direction: 'vertical',
                            children: [
                                (0, d.jsx)(e.default, {
                                    value: p,
                                    style: o,
                                    children: 'Any Class'
                                }),
                                _t.groups.map(_t => (0, d.jsx)(e.default, {
                                    value: _t._id,
                                    style: o,
                                    children: _t.name
                                }, _t._id + '-class-option'))
                            ]
                        })
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            height: 40
                        }
                    })
                ]
            }) : null,
            _t.groups && _t.groups.length ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(_s, {
                        children: 'Status'
                    }),
                    (0, d.jsx)(e.default.Group, {
                        value: _t.status,
                        onChange: b => {
                            _t.onStatusChange(b.target.value);
                        },
                        style: n,
                        children: (0, d.jsxs)(f.default, {
                            direction: 'vertical',
                            children: [
                                (0, d.jsx)(e.default, {
                                    value: i.Status.completed,
                                    style: o,
                                    children: 'Completed'
                                }),
                                (0, d.jsx)(e.default, {
                                    value: i.Status.inProgress,
                                    style: o,
                                    children: 'In Progress'
                                }),
                                (0, d.jsx)(e.default, {
                                    value: i.Status.notStarted,
                                    style: o,
                                    children: 'Has Not Started'
                                })
                            ]
                        })
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            height: 40
                        }
                    })
                ]
            }) : null,
            (0, d.jsx)(_s, {
                children: 'Sort'
            }),
            (0, d.jsx)(e.default.Group, {
                value: _t.sort,
                onChange: b => {
                    _t.onSortChange(b.target.value);
                },
                style: n,
                children: (0, d.jsxs)(f.default, {
                    direction: 'vertical',
                    children: [
                        (0, d.jsx)(e.default, {
                            value: i.Sort.firstName,
                            style: o,
                            children: 'First Name'
                        }),
                        (0, d.jsx)(e.default, {
                            value: i.Sort.lastName,
                            style: o,
                            children: 'Last Initial'
                        })
                    ]
                })
            })
        ]
    });
    const _r = g.default.div(j || (j = m`
  width: 220px;
  flex-shrink: 0;
  min-height: calc(100vh - 305px); // height of the top section
  border-right: 1px solid rgb(240, 240, 240);
  padding: 30px 0px 40px 0px;
`)),
        _s = ({
            children: _t
        }) => (0, d.jsx)(_u, {
            children: (0, d.jsx)(_v, {
                children: _t
            })
        }),
        _u = g.default.div.attrs({
            className: 'flex vc'
        })(k || (k = m`
  margin-bottom: 15px;
`)),
        _v = g.default.div(l || (l = m`
  font-size: 18px;
  font-weight: ${ 0 };
  line-height: 1;
`), h.FontWeights.Bold);
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('tKH6V', function(b, c) {
    _i(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('p/yjg'),
        h = a('V2GOM'),
        i = a('ps8en'),
        j = a('j2jOR'),
        k = a('DqHzA'),
        l = a('N+aMR');
    var _m = _i => {
        const [n, o] = e.useState([]), [p, q, r] = (0, f.useBoolean)(!0);
        if (e.useEffect(() => {
                q(), (0, f.request)({
                    url: '/api/map-assignment/in-progress',
                    data: {
                        id: _i.id,
                        group: _i.group
                    },
                    success: _i => o(_i),
                    both: r,
                    cacheKey: 'ASSIGNMENT_IN_PROGRESS'
                });
            }, [_i.group]), p)
            return (0, d.jsx)(h.default, {});
        if (!n.length)
            return (0, d.jsx)(l.default, {
                children: _i.group ? 'No students in this class are currently working on this assignment' : 'Nobody is currently working on this assignment'
            });
        const s = _i.sort === i.Sort.firstName ? (0, j.default)(n, _i => _i.name) : (0, k.default)(n, _i => _i.name);
        return (0, d.jsx)('div', {
            className: 'maxWidth',
            children: s.map((_i, o) => (0, d.jsxs)(e.Fragment, {
                children: [
                    (0, d.jsx)(g.default, {
                        name: _i.name,
                        percentageComplete: _i.percentageComplete
                    }),
                    o !== n.length - 1 && (0, d.jsx)('div', {
                        style: {
                            height: 10
                        }
                    })
                ]
            }, _i._id + '-in-progress'))
        });
    };
}), a.register('p/yjg', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('oXQNI'),
        f = a('4iV4e');
    a('LEQ5w');
    var g = a('sHRDd'),
        h = a('jPIot');
    var _i = _i => (0, d.jsxs)(e.default, {
        style: {
            color: g.default.Black
        },
        children: [
            (0, d.jsx)(h.Name, {
                children: _i.name
            }),
            (0, f.isNil)(_i.percentageComplete) ? null : (0, d.jsxs)(h.Description, {
                children: [
                    _i.percentageComplete,
                    '% complete'
                ]
            })
        ]
    });
}), a.register('R+dDo', function(b, c) {
    _i(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('p/yjg'),
        h = a('V2GOM'),
        i = a('ps8en'),
        j = a('j2jOR'),
        k = a('DqHzA'),
        l = a('N+aMR');
    var _m = _i => {
        const [n, o] = e.useState([]), [p, q, r] = (0, f.useBoolean)(!0);
        if (e.useEffect(() => {
                q(), (0, f.request)({
                    url: '/api/map-assignment/not-started',
                    data: {
                        id: _i.id,
                        group: _i.group
                    },
                    success: _i => o(_i),
                    both: r,
                    cacheKey: 'ASSIGNMENT_NOT_STARTED'
                });
            }, [_i.group]), p)
            return (0, d.jsx)(h.default, {});
        if (!n.length)
            return (0, d.jsx)(l.default, {
                children: 'Looks like everybody has either completed this assignment or is working on it!'
            });
        const s = _i.sort === i.Sort.firstName ? (0, j.default)(n, _i => _i.name) : (0, k.default)(n, _i => _i.name);
        return (0, d.jsx)('div', {
            className: 'maxWidth',
            children: s.map((_i, o) => (0, d.jsxs)(e.Fragment, {
                children: [
                    (0, d.jsx)(g.default, {
                        name: _i.name
                    }),
                    o !== n.length - 1 && (0, d.jsx)('div', {
                        style: {
                            height: 10
                        }
                    })
                ]
            }, _i._id + '-not-started'))
        });
    };
}), a.register('sKGVY', function(b, c) {
    _i(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('bkqTR0'),
        g = a('ED5Qu0'),
        h = a('Axq+p'),
        i = a('fmVdR'),
        j = a('HCwHJ'),
        k = a('66RLp2');
    let l, m, n = _i => _i;
    var _o = _i => {
        const {
            hooks: p
        } = _i.info, [q, r] = e.useState([]);
        return (0, d.jsx)(_p, {
            children: (0, d.jsx)(f.default, {
                hooks: p.template,
                defaultState: p.values,
                readOnly: !0,
                modeType: k.MapModeType.assignment,
                location: g.HookFormLocation.experiencePicker,
                onConnectedResourcesChange: r,
                header: _i => _i || q.length ? _i ? (0, d.jsx)(_q, {
                    children: 'These are the options you set when creating this assignment. They cannot be changed.'
                }) : null : (0, d.jsx)(_q, {
                    children: 'There is currently no info to show for this assignment.'
                }),
                footer: _i => q.length ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        _i > 0 ? (0, d.jsx)(i.default, {
                            style: {
                                marginTop: 30,
                                marginBottom: 30
                            }
                        }) : null,
                        (0, d.jsx)(_q, {
                            children: 'Here are the resources connected to this assignment. They cannot be changed.'
                        }),
                        q.map((_i, p) => (0, d.jsxs)(e.Fragment, {
                            children: [
                                (0, d.jsx)(j.default, {
                                    connectedResource: _i
                                }),
                                p + 1 !== q.length ? (0, d.jsx)('div', {
                                    style: {
                                        height: 10
                                    }
                                }) : null
                            ]
                        }, `connected-resource-${ _i.value }`))
                    ]
                }) : null
            })
        });
    };
    const _p = h.default.div(l || (l = n`
  padding: 35px;
`)),
        _q = h.default.div(m || (m = n`
  font-size: 16px;
  margin-bottom: 16px;
`));
}), a.register('HCwHJ', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ED5Qu0'),
        f = a('N6RQ7');
    var _g = _i => {
        const {
            connectedResource: {
                value: h,
                type: i
            }
        } = _i;
        return i !== e.IHookConnectedResourceType.kit ? null : (0, d.jsx)(f.default, {
            id: h
        });
    };
}), a.register('N6RQ7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('oXQNI'),
        f = a('6CIVV'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('sHRDd'),
        j = a('b5kvC'),
        k = a('2HvvA11'),
        l = a('PMl60'),
        m = a('DKaq/');
    let n, o, p, q, r, s = _i => _i;
    var _t = _i => {
        const [u, v, w] = (0, l.useBoolean)(!0), [x, y] = g.useState();
        return g.useEffect(() => {
            (0, l.request)({
                url: `/api/games/basic-info/${ _i.id }`,
                success: _i => y(_i),
                cacheKey: 'SIMPLE_KIT',
                both: w
            });
        }, [_i.id]), u ? (0, d.jsx)(e.default, {
            style: {
                height: 110
            },
            bodyStyle: {
                height: '100%'
            },
            children: (0, d.jsx)('div', {
                className: 'maxAll flex-center',
                children: (0, d.jsx)(f.default, {})
            })
        }) : (0, d.jsx)(e.default, {
            hoverable: !0,
            children: (0, d.jsx)(k.default, {
                to: x ? `/view/${ x._id }` : void 0,
                children: (0, d.jsxs)(_u, {
                    children: [
                        (null == x ? void 0 : x.gif) ? (0, d.jsx)(m.default, {
                            size: 60,
                            blockModalOpen: !0,
                            image: x.gif
                        }) : (0, d.jsx)(_v, {}),
                        (0, d.jsxs)(_w, {
                            children: [
                                (0, d.jsx)(_x, {
                                    children: (null == x ? void 0 : x.title) || 'Deleted Kit'
                                }),
                                (0, d.jsx)(_y, {
                                    children: 'Kit'
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
    const _u = h.default.div.attrs({
            className: 'flex vc'
        })(n || (n = s`
  color: ${ 0 };
`), i.default.Black),
        _v = h.default.div(o || (o = s`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${ 0 };
`), i.default.BackgroundPurple),
        _w = h.default.div(p || (p = s`
  margin-left: 20px;
`)),
        _x = h.default.div(q || (q = s`
  font-size: 16px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold),
        _y = h.default.div(r || (r = s`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 3px;
  font-style: italic;
`));
}), a.register('2HvvA11', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _i => _i.external || !_i.to ? (0, d.jsx)('a', {
        href: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        onKeyPress: b => {
            _i.onClick && 'Enter' === b.key && (b.preventDefault(), _i.onClick());
        },
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    }) : (0, d.jsx)(e.Link, {
        to: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    });
}), a.register('DKaq/', function(b, c) {
    _i(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_i => ({
        src: _i.image
    }))(j || (j = (_i => _i)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _i => _i.size, _i => _i.size, _i => _i.customRightMargin ? _i.customRightMargin : 0, _i => _i.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _i => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._i,
                    onClick: m => {
                        m.stopPropagation(), _i.onClick && _i.onClick(), _i.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _i => {
                        _i.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_i.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _i(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _i => {
            const e = _e(_i);
            return e ? _i.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _i;
        },
        _e = _i => {
            if (!_i.some(b => _i.includes(b)))
                return null;
            if (_i.includes(_g) && !_i.includes(`/${ _h }/`))
                return null;
            const f = _i.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('66RLp2', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
}), a.register('N+8T9', function(b, c) {
    _i(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('2HvvA11'),
        i = a('kzHAL'),
        j = a('/9J7G');
    let k, l, m = _i => _i;
    var _n = _i => {
        const o = o => o === _i.tab,
            p = o => () => _i.onTabChange(o);
        return (0, d.jsxs)(_p, {
            children: [
                _i.isPastDue ? null : (0, d.jsx)(_o, {
                    selected: o(i.Tab.share),
                    onClick: p(i.Tab.share),
                    title: 'Share',
                    icon: 'fa-share'
                }),
                (0, d.jsx)(_o, {
                    selected: o(i.Tab.results),
                    onClick: p(i.Tab.results),
                    title: 'Results',
                    icon: 'fa-poll'
                }),
                _i.info.hooks.template.hooks.length ? (0, d.jsx)(_o, {
                    selected: o(i.Tab.info),
                    onClick: p(i.Tab.info),
                    title: 'Info',
                    icon: 'fa-info-circle'
                }) : null,
                _i.info.links.length ? (0, d.jsx)(d.Fragment, {
                    children: _i.info.links.map(_i => _i.linkType === j.MapAssignmentResultLinkType.gameReport ? (0, d.jsx)(_o, {
                        icon: 'fa-external-link',
                        title: 'Open Report',
                        to: `/report/${ _i.linkId }`
                    }, `link-${ _i._id }`) : null)
                }) : null
            ]
        });
    };
    const _o = _i => (0, d.jsxs)(_q, {
            selected: _i.selected,
            onClick: _i.onClick,
            to: _i.to,
            target: _i.to ? '_blank' : void 0,
            children: [
                (0, d.jsx)('i', {
                    className: `far ${ _i.icon }`,
                    style: {
                        marginRight: 10
                    }
                }),
                (0, d.jsx)('span', {
                    children: _i.title
                })
            ]
        }),
        _p = e.default.div.attrs({
            className: 'flex-center wrap'
        })(k || (k = m`
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  column-gap: 12px;
  row-gap: 12px;
`)),
        _q = (0, e.default)(h.default).attrs({
            className: 'flex vc hc'
        })(l || (l = m`
  color: rgba(0, 0, 0, 0.8);
  font-family: ${ 0 };
  background: ${ 0 };
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  height: 43px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 18px;
  transition: border-color 0.3s;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: #66bb6a;
  }
`), g.Fonts.SFPro, f.default.White, _i => _i.selected ? '#66bb6a' : f.default.BorderGray);
}), a.register('jzxyj10', function(b, c) {
    _i(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _i => {
        d.history.push(_i);
    };
}), a.register('gn3Uk7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('haBtH6'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var _i = e.forwardRef(h);
}), a.register('haBtH6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), a.register('GldUd7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('1tgJh4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var _i = e.forwardRef(h);
}), a.register('1tgJh4', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _d(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_d, b) => {
            const {
                antCls: n
            } = _d, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _d.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _d.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _d.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable'
            ]);
            const {
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _o(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]),
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _b(b.exports, 'default', function() {
        return _c;
    });
}), a.register('dDoty', function(b, _c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('l3sIa'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('l3sIa', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('8pe9D')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _i(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), a.register('Rtfgy20', function(b, c) {
    _i(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _j(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('9R7cy', function(b, c) {
    _b(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _b => (0, d.jsx)('i', {
        className: `${ _b.name }${ _b.className ? ` ${ _b.className }` : '' }`,
        style: _b.style
    });
}), a.register('7B+hJ16', function(_b, c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), _b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    _b.exports.lazyWithPreload = _d, _b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), a.register('PElTf4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F10jM4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var _i = e.forwardRef(h);
}), a.register('F10jM4', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});