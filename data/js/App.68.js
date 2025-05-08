function a(b) {
    return b && b.__esModule ? b.default : b;
}
function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function () {
        return _G;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    c('.....');
    var q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    let u, v, w, x, y, z, A, B, C, D, E = F => F;
    const F = G => {
        const {
            item: {
                _id: H,
                image: I,
                term: J,
                createdAt: K
            }
        } = G;
        return (0, g.jsxs)(_M, {
            children: [
                (0, g.jsxs)(_N, {
                    children: [
                        (0, g.jsxs)('div', {
                            children: [
                                (0, g.jsx)(_O, { children: J }),
                                (0, g.jsxs)(_P, {
                                    children: [
                                        'Added to the gallery ',
                                        a(p)(K).fromNow()
                                    ]
                                })
                            ]
                        }),
                        (0, g.jsx)('div', {
                            children: (0, g.jsx)(j.default, {
                                overlay: (0, g.jsx)(k.default, {
                                    children: (0, g.jsx)(k.default.Item, {
                                        children: (0, g.jsx)('a', {
                                            href: `mailto:hello@gimkit.com?body=Art ID: ${ H }`,
                                            children: 'Report Abuse'
                                        })
                                    })
                                }),
                                children: (0, g.jsx)(h.default, { style: { cursor: 'pointer' } })
                            })
                        })
                    ]
                }),
                (0, g.jsx)(_Q, { src: I })
            ]
        });
    };
    var _G = () => ((0, q.useDidMount)(() => {
        (0, o.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
    }), (0, g.jsxs)(_H, {
        children: [
            (0, g.jsx)(o.Title, {
                title: 'Draw That - Student Art Gallery',
                description: 'Art created by students in Gimkit\'s Draw That!',
                override: !0
            }),
            (0, g.jsx)(t.default, { includeSpacer: !0 }),
            (0, g.jsxs)(_I, {
                children: [
                    (0, g.jsx)(_J, {}),
                    (0, g.jsx)(_K, { children: 'Draw That!' }),
                    (0, g.jsx)(_L, { children: 'Student Art Gallery - est. 2021' }),
                    (0, g.jsx)(i.default, {}),
                    (0, g.jsx)(s.default, {
                        url: '/api/v1/fun/draw-that/fetch',
                        limit: 7,
                        defaultPage: 1,
                        scrollStyle: {
                            width: '100%',
                            overflow: 'hidden'
                        },
                        toRender: H => (0, g.jsx)(F, { item: H }, H._id),
                        loader: (0, g.jsx)('div', {
                            className: 'maxWidth flex hc',
                            style: { marginTop: 20 },
                            children: (0, g.jsx)(l.default, { size: 'large' })
                        })
                    })
                ]
            })
        ]
    }));
    const _H = r.default.div.attrs({ className: 'flex-column vc' })(u || (u = E`
  flex: 1;
  background: linear-gradient(
      rgba(253, 250, 250, 0.4),
      rgba(253, 250, 250, 0.4)
    ),
    url('/client/img/drawThat/pattern.png') repeat 0 0;
  color: ${ 0 };
  font-family: 'Pangolin', sans-serif;
`), m.default.Black), _I = r.default.div.attrs({ className: 'flex flex-column vc' })(v || (v = E`
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
`)), _J = r.default.img.attrs({ src: '/client/img/drawThat/art-gallery.svg' })(w || (w = E`
  height: 150px;
  margin-bottom: 12px;
`)), _K = r.default.div(x || (x = E`
  font-size: 65px;
  font-weight: ${ 0 };
  text-align: center;
`), n.FontWeights.Black), _L = r.default.div(y || (y = E`
  font-size: 19px;
`)), _M = r.default.div.attrs({ className: 'maxWidth' })(z || (z = E`
  margin-bottom: 30px;
`)), _N = r.default.div.attrs({ className: 'flex maxWidth vc' })(A || (A = E`
  justify-content: space-between;
  margin-bottom: 12px;
`)), _O = r.default.div(B || (B = E`
  font-size: 26px;
  font-weight: ${ 0 };
`), n.FontWeights.Bold), _P = r.default.div(C || (C = E`
  font-size: 14px;
  opacity: 0.8;
`)), _Q = r.default.img.attrs({ className: 'maxWidth' })(D || (D = E`
  border-radius: 5px;
  border: 1px solid ${ 0 };
`), m.default.BorderGray);
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const [l, m] = g.useState([]), [n] = g.useState(k.limit), [o, p] = g.useState(k.defaultPage), [q, r] = g.useState(!0), [s, t] = g.useState([]), [u, v] = g.useState(!1), w = g.useMemo(() => (k.modifyItems ? k.modifyItems(s) : s).map((x, y) => k.toRender(x, y)), [
                s.length,
                k.toRender
            ]), x = () => {
                if (l.includes(o))
                    return;
                m(y => [
                    ...y,
                    o
                ]);
                const y = {
                    page: o,
                    limit: n
                };
                (0, i.request)({
                    url: k.url,
                    method: 'post',
                    cacheKey: k.cacheKey,
                    data: k.modifyBody ? k.modifyBody(y) : y,
                    success: (z, A) => {
                        k.onTotalItems && !u && (k.onTotalItems(z.totalItems), v(!0)), z.items.forEach(B => {
                            k.onItemFetched && k.onItemFetched(B, A);
                        }), t(B => [
                            ...B,
                            ...z.items
                        ]), r(z.hasNextPage), p(z.nextPage);
                    },
                    error: () => {
                        k.onTotalItems && !u && (k.onTotalItems(0), v(!0)), r(!1);
                    },
                    both: () => m(z => z.filter(A => A !== y.page))
                });
            };
        return g.useEffect(x, []), !q && k.forceEmptyMessage || !q && 0 === s.length && k.emptyMessage ? k.emptyMessage(s) : (0, f.jsxs)(h.default, {
            dataLength: s.length,
            hasMore: q,
            style: k.scrollStyle,
            next: x,
            loader: k.loader || (0, f.jsx)('div', {}),
            scrollThreshold: k.scrollThreshold,
            endMessage: k.endMessage ? k.endMessage(s) : null,
            scrollableTarget: k.scrollableTarget,
            children: [
                k.prefix ? k.prefix() : null,
                w
            ]
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = function (h, i) {
            return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (j, k) {
                j.__proto__ = k;
            } || function (j, k) {
                for (var l in k)
                    k.hasOwnProperty(l) && (j[l] = k[l]);
            }, g(h, i);
        };
    var h = function () {
        return h = Object.assign || function (i) {
            for (var j, k = 1, l = arguments.length; k < l; k++)
                for (var m in j = arguments[k])
                    Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
            return i;
        }, h.apply(this, arguments);
    };
    var i = 'Pixel', j = 'Percent', k = {
            unit: j,
            value: 0.8
        };
    function l(m) {
        return 'number' == typeof m ? {
            unit: j,
            value: 100 * m
        } : 'string' == typeof m ? m.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: i,
            value: parseFloat(m)
        } : m.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: j,
            value: parseFloat(m)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), k) : (console.warn('scrollThreshold should be string or number'), k);
    }
    var m = function (n) {
            function o(p) {
                var q = n.call(this, p) || this;
                return o.lastScrollTop = 0, o.actionTriggered = !1, o.startY = 0, o.currentY = 0, o.dragging = !1, o.maxPullDownDistance = 0, o.getScrollableTarget = function () {
                    return o.props.scrollableTarget instanceof HTMLElement ? o.props.scrollableTarget : 'string' == typeof o.props.scrollableTarget ? document.getElementById(o.props.scrollableTarget) : (null === o.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, o.onStart = function (r) {
                    o.lastScrollTop || (o.dragging = !0, r instanceof MouseEvent ? o.startY = r.pageY : r instanceof TouchEvent && (o.startY = r.touches[0].pageY), o.currentY = o.startY, o._infScroll && (o._infScroll.style.willChange = 'transform', o._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, o.onMove = function (r) {
                    o.dragging && (r instanceof MouseEvent ? o.currentY = r.pageY : r instanceof TouchEvent && (o.currentY = r.touches[0].pageY), o.currentY < o.startY || (o.currentY - o.startY >= Number(o.props.pullDownToRefreshThreshold) && o.setState({ pullToRefreshThresholdBreached: !0 }), o.currentY - o.startY > 1.5 * o.maxPullDownDistance || o._infScroll && (o._infScroll.style.overflow = 'visible', o._infScroll.style.transform = 'translate3d(0px, ' + (o.currentY - o.startY) + 'px, 0px)')));
                }, o.onEnd = function () {
                    o.startY = 0, o.currentY = 0, o.dragging = !1, o.state.pullToRefreshThresholdBreached && (o.props.refreshFunction && o.props.refreshFunction(), o.setState({ pullToRefreshThresholdBreached: !1 })), requestAnimationFrame(function () {
                        o._infScroll && (o._infScroll.style.overflow = 'auto', o._infScroll.style.transform = 'none', o._infScroll.style.willChange = 'none');
                    });
                }, o.onScrollListener = function (r) {
                    'function' == typeof o.props.onScroll && setTimeout(function () {
                        return o.props.onScroll && o.props.onScroll(r);
                    }, 0);
                    var s = o.props.height || o._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    o.actionTriggered || ((o.props.inverse ? o.isElementAtTop(s, o.props.scrollThreshold) : o.isElementAtBottom(s, o.props.scrollThreshold)) && o.props.hasMore && (o.actionTriggered = !0, o.setState({ showLoader: !0 }), o.props.next && o.props.next()), o.lastScrollTop = s.scrollTop);
                }, o.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, o.throttledOnScrollListener = function (r, s, t, u) {
                    var v, w = !1, x = 0;
                    function y() {
                        v && clearTimeout(v);
                    }
                    function z() {
                        var A = this, B = Date.now() - x, C = arguments;
                        function D() {
                            x = Date.now(), t.apply(z, C);
                        }
                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function () {
                        y(), w = !0;
                    }, z;
                }(150, o.onScrollListener).bind(o), o.onStart = o.onStart.bind(o), o.onMove = o.onMove.bind(o), o.onEnd = o.onEnd.bind(o), o;
            }
            return function (q, r) {
                function s() {
                    this.constructor = q;
                }
                g(q, r), q.prototype = null === r ? Object.create(r) : (s.prototype = r.prototype, new s());
            }(o, n), o.prototype.componentDidMount = function () {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function () {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function (q) {
                this.props.dataLength !== q.dataLength && (this.actionTriggered = !1, this.setState({ showLoader: !1 }));
            }, o.prototype.isElementAtTop = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop <= t.value + s - q.scrollHeight + 1 || 0 === q.scrollTop : q.scrollTop <= t.value / 100 + s - q.scrollHeight + 1 || 0 === q.scrollTop;
            }, o.prototype.isElementAtBottom = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop + s >= q.scrollHeight - t.value : q.scrollTop + s >= t.value / 100 * q.scrollHeight;
            }, o.prototype.render = function () {
                var q = this, r = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style), s = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length), t = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {};
                return a(f).createElement('div', {
                    style: t,
                    className: 'infinite-scroll-component__outerdiv'
                }, a(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function (u) {
                        return q._infScroll = u;
                    },
                    style: r
                }, this.props.pullDownToRefresh && a(f).createElement('div', {
                    style: { position: 'relative' },
                    ref: function (u) {
                        return q._pullDown = u;
                    }
                }, a(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !s && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component), _n = m;
});