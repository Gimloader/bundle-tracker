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
a.register('1/SGr', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _i(b.exports, 'default', function() {
        return _E;
    });
    var e = a('0hzx+'),
        f = a('LHeQv'),
        g = a('fmVdR'),
        h = a('/rAT0'),
        i = a('WfOD7'),
        j = a('6CIVV'),
        k = a('sHRDd'),
        l = a('b5kvC'),
        m = a('PMl60'),
        n = a('ECzOP');
    a('LEQ5w');
    var o = a('+i8ep'),
        p = a('Axq+p'),
        q = a('I1JN8'),
        r = a('RJjEi');
    let s, t, u, v, w, x, y, z, A, B, C = _b => _b;
    const D = _i => {
        const {
            item: {
                _id: E,
                image: F,
                term: G,
                createdAt: H
            }
        } = _i;
        return (0, e.jsxs)(_K, {
            children: [
                (0, e.jsxs)(_L, {
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)(_M, {
                                    children: G
                                }),
                                (0, e.jsxs)(_N, {
                                    children: [
                                        'Added to the gallery ',
                                        _b(n)(H).fromNow()
                                    ]
                                })
                            ]
                        }),
                        (0, e.jsx)('div', {
                            children: (0, e.jsx)(h.default, {
                                overlay: (0, e.jsx)(i.default, {
                                    children: (0, e.jsx)(i.default.Item, {
                                        children: (0, e.jsx)('a', {
                                            href: `mailto:hello@gimkit.com?body=Art ID: ${ E }`,
                                            children: 'Report Abuse'
                                        })
                                    })
                                }),
                                children: (0, e.jsx)(f.default, {
                                    style: {
                                        cursor: 'pointer'
                                    }
                                })
                            })
                        })
                    ]
                }),
                (0, e.jsx)(_O, {
                    src: F
                })
            ]
        });
    };
    var _E = () => ((0, o.useDidMount)(() => {
        (0, m.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
    }), (0, e.jsxs)(_F, {
        children: [
            (0, e.jsx)(m.Title, {
                title: 'Draw That - Student Art Gallery',
                description: 'Art created by students in Gimkit\'s Draw That!',
                override: !0
            }),
            (0, e.jsx)(r.default, {
                includeSpacer: !0
            }),
            (0, e.jsxs)(_G, {
                children: [
                    (0, e.jsx)(_H, {}),
                    (0, e.jsx)(_I, {
                        children: 'Draw That!'
                    }),
                    (0, e.jsx)(_J, {
                        children: 'Student Art Gallery - est. 2021'
                    }),
                    (0, e.jsx)(g.default, {}),
                    (0, e.jsx)(q.default, {
                        url: '/api/v1/fun/draw-that/fetch',
                        limit: 7,
                        defaultPage: 1,
                        scrollStyle: {
                            width: '100%',
                            overflow: 'hidden'
                        },
                        toRender: _b => (0, e.jsx)(D, {
                            item: _b
                        }, _b._id),
                        loader: (0, e.jsx)('div', {
                            className: 'maxWidth flex hc',
                            style: {
                                marginTop: 20
                            },
                            children: (0, e.jsx)(j.default, {
                                size: 'large'
                            })
                        })
                    })
                ]
            })
        ]
    }));
    const _F = p.default.div.attrs({
            className: 'flex-column vc'
        })(s || (s = C`
  flex: 1;
  background: linear-gradient(
      rgba(253, 250, 250, 0.4),
      rgba(253, 250, 250, 0.4)
    ),
    url('/client/img/drawThat/pattern.png') repeat 0 0;
  color: ${ 0 };
  font-family: 'Pangolin', sans-serif;
`), k.default.Black),
        _G = p.default.div.attrs({
            className: 'flex flex-column vc'
        })(t || (t = C`
  width: 90%;
  max-width: 650px;
  margin: 40px 0px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
`)),
        _H = p.default.img.attrs({
            src: '/client/img/drawThat/art-gallery.svg'
        })(u || (u = C`
  height: 150px;
  margin-bottom: 12px;
`)),
        _I = p.default.div(v || (v = C`
  font-size: 65px;
  font-weight: ${ 0 };
  text-align: center;
`), l.FontWeights.Black),
        _J = p.default.div(w || (w = C`
  font-size: 19px;
`)),
        _K = p.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = C`
  margin-bottom: 30px;
`)),
        _L = p.default.div.attrs({
            className: 'flex maxWidth vc'
        })(y || (y = C`
  justify-content: space-between;
  margin-bottom: 12px;
`)),
        _M = p.default.div(z || (z = C`
  font-size: 26px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold),
        _N = p.default.div(A || (A = C`
  font-size: 14px;
  opacity: 0.8;
`)),
        _O = p.default.img.attrs({
            className: 'maxWidth'
        })(B || (B = C`
  border-radius: 5px;
  border: 1px solid ${ 0 };
`), k.default.BorderGray);
}), a.register('I1JN8', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0qmC91'),
        g = a('PMl60');
    var _h = _b => {
        const [_i, j] = e.useState([]), [k] = e.useState(_b.limit), [l, m] = e.useState(_b.defaultPage), [n, o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (_b.modifyItems ? _b.modifyItems(p) : p).map((_i, j) => _b.toRender(_i, j)), [
            p.length,
            _b.toRender
        ]), u = () => {
            if (_i.includes(l))
                return;
            j(_b => [
                ..._b,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: _b.url,
                method: 'post',
                cacheKey: _b.cacheKey,
                data: _b.modifyBody ? _b.modifyBody(v) : v,
                success: (_i, j) => {
                    _b.onTotalItems && !r && (_b.onTotalItems(_i.totalItems), s(!0)), _i.items.forEach(_i => {
                        _b.onItemFetched && _b.onItemFetched(_i, j);
                    }), q(_b => [
                        ..._b,
                        ..._i.items
                    ]), o(_i.hasNextPage), m(_i.nextPage);
                },
                error: () => {
                    _b.onTotalItems && !r && (_b.onTotalItems(0), s(!0)), o(!1);
                },
                both: () => j(_b => _b.filter(_b => _b !== v.page))
            });
        };
        return e.useEffect(u, []), !n && _b.forceEmptyMessage || !n && 0 === p.length && _b.emptyMessage ? _b.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: _b.scrollStyle,
            next: u,
            loader: _b.loader || (0, d.jsx)('div', {}),
            scrollThreshold: _b.scrollThreshold,
            endMessage: _b.endMessage ? _b.endMessage(p) : null,
            scrollableTarget: _b.scrollableTarget,
            children: [
                _b.prefix ? _b.prefix() : null,
                t
            ]
        });
    };
}), a.register('0qmC91', function(b, c) {
    _g(b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = function(f, _g) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, i) {
                h.__proto__ = i;
            } || function(h, i) {
                for (var j in i)
                    i.hasOwnProperty(j) && (h[j] = i[j]);
            }, e(f, _g);
        };
    var f = function() {
        return f = Object.assign || function(g) {
            for (var h, i = 1, j = arguments.length; i < j; i++)
                for (var k in h = arguments[i])
                    Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
            return g;
        }, f.apply(this, arguments);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(k) {
        return 'number' == typeof k ? {
            unit: h,
            value: 100 * k
        } : 'string' == typeof k ? k.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(k)
        } : k.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(k)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var j = function(k) {
            function l(m) {
                var n = k.call(this, m) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : 'string' == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, n.onStart = function(o) {
                    n.lastScrollTop || (n.dragging = !0, o instanceof MouseEvent ? n.startY = o.pageY : o instanceof TouchEvent && (n.startY = o.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = 'transform', n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, n.onMove = function(o) {
                    n.dragging && (o instanceof MouseEvent ? n.currentY = o.pageY : o instanceof TouchEvent && (n.currentY = o.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = 'visible', n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')));
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        n._infScroll && (n._infScroll.style.overflow = 'auto', n._infScroll.style.transform = 'none', n._infScroll.style.willChange = 'none');
                    });
                }, n.onScrollListener = function(o) {
                    'function' == typeof n.props.onScroll && setTimeout(function() {
                        return n.props.onScroll && n.props.onScroll(o);
                    }, 0);
                    var p = n.props.height || n._scrollableNode ? o.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(p, n.props.scrollThreshold) : n.isElementAtBottom(p, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = p.scrollTop);
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(o, p, q, r) {
                    var s, t = !1,
                        u = 0;

                    function v() {
                        s && clearTimeout(s);
                    }

                    function v() {
                        var w = this,
                            x = Date.now() - u,
                            y = arguments;

                        function z() {
                            u = Date.now(), q.apply(w, y);
                        }

                        function z() {
                            s = void 0;
                        }
                        t || (r && !s && _p(), f(), void 0 === r && x > o ? _p() : !0 !== p && (s = setTimeout(r ? j : _p, void 0 === r ? o - x : o)));
                    }
                    return 'boolean' != typeof p && (r = q, q = p, p = void 0), g.cancel = function() {
                        f(), t = !0;
                    }, g;
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n;
            }
            return function(l, m) {
                function n() {
                    this.constructor = l;
                }
                e(l, m), l.prototype = null === m ? Object.create(m) : (a.prototype = m.prototype, new a());
            }(a, k), a.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, a.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, a.prototype.UNSAFE_componentWillReceiveProps = function(l) {
                this.props.dataLength !== l.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, a.prototype.isElementAtTop = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _p(m);
                return o.unit === g ? l.scrollTop <= o.value + n - l.scrollHeight + 1 || 0 === l.scrollTop : l.scrollTop <= o.value / 100 + n - l.scrollHeight + 1 || 0 === l.scrollTop;
            }, a.prototype.isElementAtBottom = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _p(m);
                return o.unit === g ? l.scrollTop + n >= l.scrollHeight - o.value : l.scrollTop + n >= o.value / 100 * l.scrollHeight;
            }, a.prototype.render = function() {
                var l = this,
                    m = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return _p(d).createElement('div', {
                    style: o,
                    className: 'infinite-scroll-component__outerdiv'
                }, _p(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(_p) {
                        return l._infScroll = _p;
                    },
                    style: m
                }, this.props.pullDownToRefresh && _p(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(_p) {
                        return l._pullDown = _p;
                    }
                }, _b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, a;
        }(d.Component),
        _k = j;
}), a.register('kRwUk25', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(h, _i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, _p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(_i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            _p(x.offsetHeight + 8), r(x.offsetWidth);
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
            }, e.createElement(h, Object.assign({}, k, {
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
    _n(b.exports, 'initMoveMotion', function() {
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
        _m = (b, _n) => {
            const {
                antCls: n
            } = b, o = `${ n }-${ _n }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[_n];
            return [
                (0, e.initMotion)(o, p, q, b.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: b.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: b.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('cvto726', function(b, c) {
    _n(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(d) {
        return _m = d;
    }), _n(b.exports, 'default', function() {
        return _u;
    }, function(d) {
        return _u = d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, _n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && _n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    _n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
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
    const o = _h => {
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
        } = _h, C = l(_h, [
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
        }(_b)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_b, _h) => {
                null != _b && (O = _h);
                const Q = _b && _b.key || `${ M }-${ _h }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _h,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _b);
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
    _h(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [g, _h] = d.useState(!1);
            return d.useEffect(() => {
                _h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), a.register('P8P+826', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(g) {
        let {
            className: _h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = g;
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
            className: _h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ _h }-split`,
            style: s
        }, m));
    }
}), a.register('jlX4s16', function(b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    b.exports = function(f, g) {
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
}), a.register('Kc6XZ23', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _g(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var _g = (0, d.useMemo)(function() {
                return window.matchMedia(f);
            }, [f]),
            h = (0, d.useState)(function() {
                return _g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(_g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return _g.addEventListener ? (_g.addEventListener('change', k), function() {
                return _g.removeEventListener('change', k);
            }) : (_g.addListener(k), function() {
                return _g.removeListener(k);
            });
        }, [_g]), i;
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
    _j(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _j(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _j(b.exports, 'default', function() {
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
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('2HvvA11', function(b, c) {
    _j(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = b => b.external || !b.to ? (0, d.jsx)('a', {
        href: b.to,
        tabIndex: Number(b.tabIndex || '0'),
        onClick: b.onClick,
        onKeyPress: _j => {
            b.onClick && 'Enter' === _j.key && (_j.preventDefault(), b.onClick());
        },
        className: b.className,
        target: b.target,
        style: b.style,
        children: b.children
    }) : (0, d.jsx)(e.Link, {
        to: b.to,
        tabIndex: Number(b.tabIndex || '0'),
        onClick: b.onClick,
        className: b.className,
        target: b.target,
        style: b.style,
        children: b.children
    });
}), a.register('Rtfgy20', function(b, c) {
    _j(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
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
    var _g = (b, _j) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = b && 'current' in b ? b.current : b;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == _j ? void 0 : _j.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == _j ? void 0 : _j.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const _j = b && 'current' in b ? b.current : b;
            _j && i([
                _j.offsetWidth,
                _j.offsetHeight
            ]);
        }, [b]), (0, e.default)(b, b => {
            const j = b.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            _k = new(0, d.default)((0, g.default)((_k, a) => {
                var l;
                if (1 === _k.length)
                    null === (l = j.get(_k[0].target)) || void 0 === l || l(_k[0], a);
                else
                    for (let m = 0; m < _k.length; m++) {
                        var n;
                        null === (n = j.get(_k[m].target)) || void 0 === n || n(_k[m], a);
                    }
            }));
        return {
            observer: _k,
            subscribe(l, m) {
                _k.observe(l), j.set(l, m);
            },
            unsubscribe(l) {
                _k.unobserve(l), j.delete(l);
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
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _f(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _b => {
        const _f = d.useRef(_b);
        return d.useEffect(() => {
            _f.current = _b;
        }), _f;
    };
}), a.register('18t62', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(e) {
        var _f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                _f = j, g || (g = requestAnimationFrame(function() {
                    g = null, e.apply(void 0, _f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('jzxyj10', function(b, c) {
    _c(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = b => {
        d.history.push(b);
    };
}), a.register('9R7cy', function(b, c) {
    _c(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = b => (0, d.jsx)('i', {
        className: `${ b.name }${ b.className ? ` ${ b.className }` : '' }`,
        style: b.style
    });
}), a.register('7B+hJ16', function(b, _c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
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
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _j(b.exports, 'default', function() {
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
    _j(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    t(b.exports, 'default', function() {
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
});