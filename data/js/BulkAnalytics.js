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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}, d = c.parcelRequire388b;
d.register('.....', function (e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), b(e.exports, 'default', function () {
        return _D;
    });
    var h = d('.....');
    d('.....');
    var i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....');
    let y, z, A, B, C = D => D;
    var _D = E => {
        const {bulkId: F} = E, {
                data: G,
                isLoading: H
            } = (0, v.default)(F);
        if (H)
            return (0, h.jsx)(_E, { children: (0, h.jsx)(t.default, { paragraph: { rows: 14 } }) });
        const I = null == G ? void 0 : G.monthlyInfo;
        if (!I || !I.length) {
            const J = Math.abs(a(x)().diff(a(x)((0, q.dateFromObjectId)(F)), 'months')) < 2;
            return (0, h.jsx)(_E, {
                children: (0, h.jsxs)('div', {
                    className: 'maxWidth flex-center flex-column',
                    style: { minHeight: 400 },
                    children: [
                        (0, h.jsx)('div', {
                            style: {
                                fontSize: 54,
                                opacity: 0.8
                            },
                            children: (0, h.jsx)(u.default, {})
                        }),
                        (0, h.jsx)('div', {
                            style: {
                                fontSize: 19,
                                marginTop: 8,
                                textAlign: 'center'
                            },
                            children: J ? 'No usage data is available for this group license yet. Check back soon!' : 'No usage data is available for this group license.'
                        })
                    ]
                })
            });
        }
        return (0, h.jsxs)(_E, {
            children: [
                (0, h.jsx)(_F, { children: 'Group Usage' }),
                (0, h.jsx)(_G, { children: 'The percentage of members have hosted a live game since the group license was activated' }),
                (0, h.jsx)('div', { style: { height: 15 } }),
                (0, h.jsx)(s.default, {
                    type: 'circle',
                    width: 200,
                    percent: Math.ceil(100 * G.percentageUsage),
                    format: () => Math.ceil(100 * G.percentageUsage) + '%',
                    strokeColor: '#66bb6a'
                }),
                (0, h.jsx)('div', { style: { height: 30 } }),
                (0, h.jsx)(_F, { children: 'Monthly Usage' }),
                (0, h.jsx)(_G, { children: 'Percentage of members who hosted a live game in a given month.' }),
                (0, h.jsx)('div', { style: { height: 15 } }),
                (0, h.jsx)(_H, {
                    children: (0, h.jsx)(l.ResponsiveContainer, {
                        height: 270,
                        children: (0, h.jsxs)(j.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: I.map(K => ({
                                name: K.monthName,
                                Percentage: Math.ceil(100 * K.percentageOfMembersWhoHosted)
                            })),
                            children: [
                                (0, h.jsx)(k.CartesianGrid, { strokeDasharray: '3 3' }),
                                (0, h.jsx)(n.XAxis, { dataKey: 'name' }),
                                (0, h.jsx)(o.YAxis, { tickFormatter: K => K + '%' }),
                                (0, h.jsx)(m.Tooltip, { formatter: K => (0, q.numberWithCommas)(K) + '%' }),
                                (0, h.jsx)(i.Bar, {
                                    dataKey: 'Percentage',
                                    fill: p.default.BackgroundPurple
                                })
                            ]
                        })
                    })
                }),
                (0, h.jsx)('div', { style: { height: 30 } }),
                (0, h.jsx)(_F, { children: 'Monthly Usage Frequency' }),
                (0, h.jsx)(_G, { children: 'Average live games hosted per active member each month' }),
                (0, h.jsx)('div', { style: { height: 15 } }),
                (0, h.jsx)(_H, {
                    children: (0, h.jsx)(l.ResponsiveContainer, {
                        height: 270,
                        children: (0, h.jsxs)(j.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: I.map(K => ({
                                name: K.monthName,
                                'Average Live Games Hosted': Math.round(K.averageGamesHosted)
                            })),
                            children: [
                                (0, h.jsx)(k.CartesianGrid, { strokeDasharray: '3 3' }),
                                (0, h.jsx)(n.XAxis, { dataKey: 'name' }),
                                (0, h.jsx)(o.YAxis, {}),
                                (0, h.jsx)(m.Tooltip, { formatter: K => (0, q.numberWithCommas)(K) }),
                                (0, h.jsx)(i.Bar, {
                                    dataKey: 'Average Live Games Hosted',
                                    fill: p.default.BackgroundPurple
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    const _E = r.default.div.attrs({ className: 'maxWidth' })(y || (y = C`
  color: ${ 0 };
  font-family: ${ 0 };
  padding-top: 8px;
`), p.default.Black, w.Fonts.SFPro), _F = r.default.div(z || (z = C`
  font-size: 25px;
  font-weight: ${ 0 };
`), w.FontWeights.UltraBold), _G = r.default.div(A || (A = C`
  font-size: 17px;
`)), _H = r.default.div.attrs({ className: 'maxWidth' })(B || (B = C`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`));
}), d.register('.....', function (e, f) {
    b(e.exports, 'Bar', function () {
        return _U;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....');
    function x(y) {
        return x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (z) {
            return typeof z;
        } : function (z) {
            return z && 'function' == typeof Symbol && z.constructor === Symbol && z !== Symbol.prototype ? 'symbol' : typeof z;
        }, x(y);
    }
    function y(z, A) {
        if (null == z)
            return {};
        var B, C, D = function (E, F) {
                if (null == E)
                    return {};
                var G, H, I = {}, J = Object.keys(E);
                for (H = 0; H < J.length; H++)
                    G = J[H], F.indexOf(G) >= 0 || (I[G] = E[G]);
                return I;
            }(z, A);
        if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(z);
            for (C = 0; C < E.length; C++)
                B = E[C], A.indexOf(B) >= 0 || Object.prototype.propertyIsEnumerable.call(z, B) && (D[B] = z[B]);
        }
        return D;
    }
    function D() {
        return D = Object.assign || function (E) {
            for (var F = 1; F < arguments.length; F++) {
                var G = arguments[F];
                for (var H in G)
                    Object.prototype.hasOwnProperty.call(G, H) && (E[H] = G[H]);
            }
            return E;
        }, D.apply(this, arguments);
    }
    function E(F, G) {
        var H = Object.keys(F);
        if (Object.getOwnPropertySymbols) {
            var I = Object.getOwnPropertySymbols(F);
            G && (I = I.filter(function (J) {
                return Object.getOwnPropertyDescriptor(F, J).enumerable;
            })), H.push.apply(H, I);
        }
        return H;
    }
    function H(I) {
        for (var J = 1; J < arguments.length; J++) {
            var K = null != arguments[J] ? arguments[J] : {};
            J % 2 ? E(Object(K), !0).forEach(function (L) {
                _K(I, L, K[L]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(K)) : E(Object(K)).forEach(function (L) {
                Object.defineProperty(I, L, Object.getOwnPropertyDescriptor(K, L));
            });
        }
        return I;
    }
    function _K(L, M, N) {
        return M in L ? Object.defineProperty(L, M, {
            value: N,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : L[M] = N, L;
    }
    function L(M, N) {
        if (!(M instanceof N))
            throw new TypeError('Cannot call a class as a function');
    }
    function M(N, O) {
        for (var P = 0; P < O.length; P++) {
            var Q = O[P];
            Q.enumerable = Q.enumerable || !1, Q.configurable = !0, 'value' in Q && (Q.writable = !0), Object.defineProperty(N, Q.key, Q);
        }
    }
    function P(Q, R) {
        return P = Object.setPrototypeOf || function (S, T) {
            return S.__proto__ = T, S;
        }, P(Q, R);
    }
    function Q(R) {
        var S = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (R) {
                return !1;
            }
        }();
        return function () {
            var T, U = _T(R);
            if (S) {
                var V = _T(this).constructor;
                T = Reflect.construct(U, arguments, V);
            } else
                T = U.apply(this, arguments);
            return _S(this, T);
        };
    }
    function _S(T, U) {
        return !U || 'object' !== x(U) && 'function' != typeof U ? function (V) {
            if (void 0 === V)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return V;
        }(T) : U;
    }
    function _T(U) {
        return _T = Object.setPrototypeOf ? Object.getPrototypeOf : function (V) {
            return V.__proto__ || Object.getPrototypeOf(V);
        }, _T(U);
    }
    var _U = function (V) {
        !function (W, X) {
            if ('function' != typeof X && null !== X)
                throw new TypeError('Super expression must either be null or a function');
            W.prototype = Object.create(X && X.prototype, {
                constructor: {
                    value: W,
                    writable: !0,
                    configurable: !0
                }
            }), X && P(W, X);
        }(q, V);
        var W, X, Y, Z = Q(q);
        function $() {
            var ab;
            L(this, $);
            for (var bb = arguments.length, cb = new Array(bb), db = 0; db < bb; db++)
                cb[db] = arguments[db];
            return (ab = Z.call.apply(Z, [this].concat(cb))).state = { isAnimationFinished: !1 }, ab.id = (0, s.uniqueId)('recharts-bar-'), ab.handleAnimationEnd = function () {
                var eb = ab.props.onAnimationEnd;
                ab.setState({ isAnimationFinished: !0 }), eb && eb();
            }, ab.handleAnimationStart = function () {
                var eb = ab.props.onAnimationStart;
                ab.setState({ isAnimationFinished: !1 }), eb && eb();
            }, ab;
        }
        return cb = $, Y = [
            {
                key: 'getDerivedStateFromProps',
                value: function (eb, fb) {
                    return eb.animationId !== fb.prevAnimationId ? {
                        prevAnimationId: eb.animationId,
                        curData: eb.data,
                        prevData: fb.curData
                    } : eb.data !== fb.curData ? { curData: eb.data } : null;
                }
            },
            {
                key: 'renderRectangle',
                value: function (eb, fb) {
                    return ab(k).isValidElement(eb) ? ab(k).cloneElement(eb, fb) : ab(i)(eb) ? eb(fb) : ab(k).createElement(n.Rectangle, fb);
                }
            }
        ], (db = [
            {
                key: 'renderRectanglesStatically',
                value: function (eb) {
                    var fb = this, gb = this.props.shape, hb = (0, w.filterProps)(this.props);
                    return eb && eb.map(function (ib, jb) {
                        var kb = H(H(H({}, hb), ib), {}, { index: jb });
                        return ab(k).createElement(o.Layer, D({ className: 'recharts-bar-rectangle' }, (0, w.adaptEventsOfChild)(fb.props, ib, jb), { key: 'rectangle-'.concat(jb) }), $.renderRectangle(gb, kb));
                    });
                }
            },
            {
                key: 'renderRectanglesWithAnimation',
                value: function () {
                    var eb = this, fb = this.props, gb = fb.data, hb = fb.layout, ib = fb.isAnimationActive, jb = fb.animationBegin, kb = fb.animationDuration, lb = fb.animationEasing, mb = fb.animationId, nb = this.state.prevData;
                    return ab(k).createElement(m.default, {
                        begin: jb,
                        duration: kb,
                        isActive: ib,
                        easing: lb,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: 'bar-'.concat(mb),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart
                    }, function (ob) {
                        var pb = ob.t, qb = gb.map(function (rb, sb) {
                                var tb = nb && nb[sb];
                                if (tb) {
                                    var ub = (0, s.interpolateNumber)(tb.x, rb.x), vb = (0, s.interpolateNumber)(tb.y, rb.y), wb = (0, s.interpolateNumber)(tb.width, rb.width), xb = (0, s.interpolateNumber)(tb.height, rb.height);
                                    return H(H({}, rb), {}, {
                                        x: ub(pb),
                                        y: vb(pb),
                                        width: wb(pb),
                                        height: xb(pb)
                                    });
                                }
                                if ('horizontal' === hb) {
                                    var yb = (0, s.interpolateNumber)(0, rb.height)(pb);
                                    return H(H({}, rb), {}, {
                                        y: rb.y + rb.height - yb,
                                        height: yb
                                    });
                                }
                                var zb = (0, s.interpolateNumber)(0, rb.width)(pb);
                                return H(H({}, rb), {}, { width: zb });
                            });
                        return ab(k).createElement(o.Layer, null, eb.renderRectanglesStatically(qb));
                    });
                }
            },
            {
                key: 'renderRectangles',
                value: function () {
                    var eb = this.props, fb = eb.data, gb = eb.isAnimationActive, hb = this.state.prevData;
                    return !(gb && fb && fb.length) || hb && ab(h)(hb, fb) ? this.renderRectanglesStatically(fb) : this.renderRectanglesWithAnimation();
                }
            },
            {
                key: 'renderBackground',
                value: function () {
                    var eb = this, fb = this.props.data, gb = (0, w.filterProps)(this.props.background);
                    return fb.map(function (hb, ib) {
                        hb.value;
                        var jb = hb.background, kb = y(hb, [
                                'value',
                                'background'
                            ]);
                        if (!jb)
                            return null;
                        var lb = H(H(H(H(H({}, kb), {}, { fill: '#eee' }, jb), gb), (0, w.adaptEventsOfChild)(eb.props, hb, ib)), {}, {
                            index: ib,
                            key: 'background-bar-'.concat(ib),
                            className: 'recharts-bar-background-rectangle'
                        });
                        return $.renderRectangle(eb.props.background, lb);
                    });
                }
            },
            {
                key: 'renderErrorBar',
                value: function () {
                    if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                        return null;
                    var eb = this.props, fb = eb.data, gb = eb.xAxis, hb = eb.yAxis, ib = eb.layout, jb = eb.children, kb = (0, t.findAllByType)(jb, p.ErrorBar.displayName);
                    if (!kb)
                        return null;
                    var lb = 'vertical' === ib ? fb[0].height / 2 : fb[0].width / 2;
                    function mb(nb, ob) {
                        return {
                            x: nb.x,
                            y: nb.y,
                            value: nb.value,
                            errorVal: (0, v.getValueByDataKey)(nb, ob)
                        };
                    }
                    return kb.map(function (nb, ob) {
                        return ab(k).cloneElement(nb, {
                            key: 'error-bar-'.concat(ob),
                            data: fb,
                            xAxis: gb,
                            yAxis: hb,
                            layout: ib,
                            offset: lb,
                            dataPointFormatter: mb
                        });
                    });
                }
            },
            {
                key: 'render',
                value: function () {
                    var eb = this.props, fb = eb.hide, gb = eb.data, hb = eb.className, ib = eb.xAxis, jb = eb.yAxis, kb = eb.left, lb = eb.top, mb = eb.width, nb = eb.height, ob = eb.isAnimationActive, pb = eb.background, qb = eb.id;
                    if (fb || !gb || !gb.length)
                        return null;
                    var rb = this.state.isAnimationFinished, sb = ab(l)('recharts-bar', hb), tb = ib && ib.allowDataOverflow || jb && jb.allowDataOverflow, ub = ab(E)(qb) ? this.id : qb;
                    return ab(k).createElement(o.Layer, { className: sb }, tb ? ab(k).createElement('defs', null, ab(k).createElement('clipPath', { id: 'clipPath-'.concat(ub) }, ab(k).createElement('rect', {
                        x: kb,
                        y: lb,
                        width: mb,
                        height: nb
                    }))) : null, ab(k).createElement(o.Layer, {
                        className: 'recharts-bar-rectangles',
                        clipPath: tb ? 'url(#clipPath-'.concat(ub, ')') : null
                    }, pb ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!ob || rb) && r.LabelList.renderCallByParent(this.props, gb));
                }
            }
        ]) && M(cb.prototype, db), Y && M(cb, Y), $;
    }(k.PureComponent);
    _U.displayName = 'Bar', _U.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'rect',
        minPointSize: 0,
        hide: !1,
        data: [],
        layout: 'vertical',
        isAnimationActive: !u.Global.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: 'ease'
    }, _U.getComposedData = function (V) {
        var W = V.props, X = V.item, Y = V.barPosition, Z = V.bandSize, $ = V.xAxis, ab = V.yAxis, bb = V.xAxisTicks, cb = V.yAxisTicks, db = V.stackedData, eb = V.dataStartIndex, fb = V.displayedData, gb = V.offset, hb = (0, v.findPositionOfBar)(Y, X);
        if (!hb)
            return null;
        var ib = W.layout, jb = X.props, kb = jb.dataKey, lb = jb.children, mb = jb.minPointSize, nb = 'horizontal' === ib ? ab : $, ob = db ? nb.scale.domain() : null, pb = (0, v.getBaseValueOfBar)({ numericAxis: nb }), qb = (0, t.findAllByType)(lb, q.Cell.displayName), rb = fb.map(function (sb, tb) {
                var ub, vb, wb, xb, yb, zb;
                if (db ? ub = (0, v.truncateByDomain)(db[eb + tb], ob) : (ub = (0, v.getValueByDataKey)(sb, kb), a(j)(ub) || (ub = [
                        pb,
                        ub
                    ])), 'horizontal' === ib) {
                    if (vb = (0, v.getCateCoordinateOfBar)({
                            axis: $,
                            ticks: bb,
                            bandSize: Z,
                            offset: hb.offset,
                            entry: sb,
                            index: tb
                        }), wb = ab.scale(ub[1]), xb = hb.size, yb = ab.scale(ub[0]) - ab.scale(ub[1]), zb = {
                            x: vb,
                            y: ab.y,
                            width: xb,
                            height: ab.height
                        }, Math.abs(mb) > 0 && Math.abs(yb) < Math.abs(mb)) {
                        var Ab = (0, s.mathSign)(yb || mb) * (Math.abs(mb) - Math.abs(yb));
                        wb -= Ab, yb += Ab;
                    }
                } else
                    vb = $.scale(ub[0]), wb = (0, v.getCateCoordinateOfBar)({
                        axis: ab,
                        ticks: cb,
                        bandSize: Z,
                        offset: hb.offset,
                        entry: sb,
                        index: tb
                    }), xb = $.scale(ub[1]) - $.scale(ub[0]), yb = hb.size, zb = {
                        x: $.x,
                        y: wb,
                        width: $.width,
                        height: yb
                    }, Math.abs(mb) > 0 && Math.abs(xb) < Math.abs(mb) && (xb += (0, s.mathSign)(xb || mb) * (Math.abs(mb) - Math.abs(xb)));
                return H(H(H({}, sb), {}, {
                    x: vb,
                    y: wb,
                    width: xb,
                    height: yb,
                    value: db ? ub : ub[1],
                    payload: sb,
                    background: zb
                }, qb && qb[tb] && qb[tb].props), {}, {
                    tooltipPayload: [(0, v.getTooltipItem)(X, sb)],
                    tooltipPosition: {
                        x: vb + xb / 2,
                        y: wb + yb / 2
                    }
                });
            });
        return H({
            data: rb,
            layout: ib
        }, gb);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return null == g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        return g(h, i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function e(i, j, k, l, m) {
        return i === j || (null == i || null == j || !h(i) && !h(j) ? i != i && j != j : g(i, j, k, l, e, m));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = '[object Arguments]', p = '[object Array]', q = '[object Object]', r = Object.prototype.hasOwnProperty;
    e.exports = function (s, t, u, v, w, x) {
        var y = l(s), z = l(t), A = y ? p : k(s), B = z ? p : k(t), C = (A = A == o ? q : A) == q, D = (B = B == o ? q : B) == q, E = A == B;
        if (E && m(s)) {
            if (!m(t))
                return !1;
            y = !0, C = !1;
        }
        if (E && !C)
            return x || (x = new g()), y || n(s) ? h(s, t, u, v, w, x) : i(s, t, A, u, v, w, x);
        if (!(1 & u)) {
            var F = C && r.call(s, '__wrapped__'), G = D && r.call(t, '__wrapped__');
            if (F || G) {
                var H = F ? s.value() : s, I = G ? t.value() : t;
                return x || (x = new g()), w(H, I, u, v, x);
            }
        }
        return !!E && (x || (x = new g()), j(s, t, u, v, w, x));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function m(n) {
        var o = this.__data__ = new g(n);
        this.size = o.size;
    }
    m.prototype.clear = h, m.prototype.delete = i, m.prototype.get = j, m.prototype.has = k, m.prototype.set = l, e.exports = m;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        var n = -1, o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = o, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('.....', function (e, f) {
    e.exports = function () {
        this.__data__ = [], this.size = 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Array.prototype.splice;
    e.exports = function (i) {
        var j = this.__data__, k = g(j, i);
        return !(k < 0) && (k == j.length - 1 ? j.pop() : h.call(j, k, 1), --this.size, !0);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        for (var j = h.length; j--;)
            if (g(h[j][0], i))
                return j;
        return -1;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return g === h || g != g && h != h;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        var i = this.__data__, j = g(i, h);
        return j < 0 ? void 0 : i[j][1];
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return g(this.__data__, h) > -1;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j = this.__data__, k = g(j, h);
        return k < 0 ? (++this.size, j.push([
            h,
            i
        ])) : j[k][1] = i, this;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function () {
        this.__data__ = new g(), this.size = 0;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = this.__data__, i = h.delete(g);
        return this.size = h.size, i;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return this.__data__.get(g);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return this.__data__.has(g);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j, k) {
        var l = this.__data__;
        if (l instanceof g) {
            var m = l.__data__;
            if (!h || m.length < 199)
                return m.push([
                    j,
                    k
                ]), this.size = ++l.size, this;
            l = this.__data__ = new i(m);
        }
        return l.set(j, k), this.size = l.size, this;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'), 'Map');
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        var k = h(i, j);
        return g(k) ? k : void 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = /^\[object .+?Constructor\]$/, l = Function.prototype, m = Object.prototype, n = l.toString, o = m.hasOwnProperty, p = RegExp('^' + n.call(o).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    e.exports = function (q) {
        return !(!i(q) || h(q)) && (g(q) ? p : k).test(j(q));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        if (!h(i))
            return !1;
        var j = g(i);
        return '[object Function]' == j || '[object GeneratorFunction]' == j || '[object AsyncFunction]' == j || '[object Proxy]' == j;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = g ? g.toStringTag : void 0;
    e.exports = function (k) {
        return null == k ? void 0 === k ? '[object Undefined]' : '[object Null]' : j && j in Object(k) ? h(k) : i(k);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Symbol;
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = 'object' == typeof self && self && self.Object === Object && self, i = g || h || Function('return this')();
    e.exports = i;
}), d.register('.....', function (e, f) {
    var g = 'object' == typeof c && c && c.Object === Object && c;
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Object.prototype, i = h.hasOwnProperty, j = h.toString, k = g ? g.toStringTag : void 0;
    e.exports = function (l) {
        var m = i.call(l, k), n = l[k];
        try {
            l[k] = void 0;
            var o = !0;
        } catch (l) {
        }
        var p = j.call(l);
        return o && (m ? l[k] = n : delete l[k]), p;
    };
}), d.register('.....', function (e, f) {
    var g = Object.prototype.toString;
    e.exports = function (h) {
        return g.call(h);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = typeof g;
        return null != g && ('object' == h || 'function' == h);
    };
}), d.register('.....', function (e, f) {
    var g, h = d('.....'), i = (g = /[^.]+$/.exec(h && h.keys && h.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + g : '';
    e.exports = function (j) {
        return !!i && i in j;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')['__core-js_shared__'];
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = Function.prototype.toString;
    e.exports = function (h) {
        if (null != h) {
            try {
                return g.call(h);
            } catch (h) {
            }
            try {
                return h + '';
            } catch (h) {
            }
        }
        return '';
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return null == g ? void 0 : g[h];
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        var n = -1, o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = o, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new g(),
            map: new (i || h)(),
            string: new g()
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        var n = -1, o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = o, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function () {
        this.__data__ = g ? g(null) : {}, this.size = 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')(Object, 'create');
    e.exports = g;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = this.has(g) && delete this.__data__[g];
        return this.size -= h ? 1 : 0, h;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Object.prototype.hasOwnProperty;
    e.exports = function (i) {
        var j = this.__data__;
        if (g) {
            var k = j[i];
            return '__lodash_hash_undefined__' === k ? void 0 : k;
        }
        return h.call(j, i) ? j[i] : void 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Object.prototype.hasOwnProperty;
    e.exports = function (i) {
        var j = this.__data__;
        return g ? void 0 !== j[i] : h.call(j, i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j = this.__data__;
        return this.size += this.has(h) ? 0 : 1, j[h] = g && void 0 === i ? '__lodash_hash_undefined__' : i, this;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        var i = g(this, h).delete(h);
        return this.size -= i ? 1 : 0, i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j = h.__data__;
        return g(i) ? j['string' == typeof i ? 'string' : 'hash'] : j.map;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = typeof g;
        return 'string' == h || 'number' == h || 'symbol' == h || 'boolean' == h ? '__proto__' !== g : null === g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return g(this, h).get(h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return g(this, h).has(h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j = g(this, h), k = j.size;
        return j.set(h, i), this.size += j.size == k ? 0 : 1, this;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j, k, l, m, n, o) {
        var p = 1 & l, q = j.length, r = k.length;
        if (q != r && !(p && r > q))
            return !1;
        var s = o.get(j), t = o.get(k);
        if (s && t)
            return s == k && t == j;
        var u = -1, v = !0, w = 2 & l ? new g() : void 0;
        for (o.set(j, k), o.set(k, j); ++u < q;) {
            var x = j[u], y = k[u];
            if (m)
                var z = p ? m(y, x, u, k, j, o) : m(x, y, u, j, k, o);
            if (void 0 !== z) {
                if (z)
                    continue;
                v = !1;
                break;
            }
            if (w) {
                if (!h(k, function (A, B) {
                        if (!i(w, B) && (x === A || n(x, A, l, m, o)))
                            return w.push(B);
                    })) {
                    v = !1;
                    break;
                }
            } else if (x !== y && !n(x, y, l, m, o)) {
                v = !1;
                break;
            }
        }
        return o.delete(j), o.delete(k), v;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        var l = -1, m = null == k ? 0 : k.length;
        for (this.__data__ = new g(); ++l < m;)
            this.add(k[l]);
    }
    j.prototype.add = j.prototype.push = h, j.prototype.has = i, e.exports = j;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return this.__data__.set(g, '__lodash_hash_undefined__'), this;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return this.__data__.has(g);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = null == g ? 0 : g.length; ++i < j;)
            if (h(g[i], i, g))
                return !0;
        return !1;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return g.has(h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = g ? g.prototype : void 0, n = m ? m.valueOf : void 0;
    e.exports = function (o, p, q, r, s, t, u) {
        switch (q) {
        case '[object DataView]':
            if (o.byteLength != p.byteLength || o.byteOffset != p.byteOffset)
                return !1;
            o = o.buffer, p = p.buffer;
        case '[object ArrayBuffer]':
            return !(o.byteLength != p.byteLength || !t(new h(o), new h(p)));
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return i(+o, +p);
        case '[object Error]':
            return o.name == p.name && o.message == p.message;
        case '[object RegExp]':
        case '[object String]':
            return o == p + '';
        case '[object Map]':
            var v = k;
        case '[object Set]':
            var w = 1 & r;
            if (v || (v = l), o.size != p.size && !w)
                return !1;
            var x = u.get(o);
            if (x)
                return x == p;
            r |= 2, u.set(o, p);
            var y = j(v(o), v(p), r, s, t, u);
            return u.delete(o), y;
        case '[object Symbol]':
            if (n)
                return n.call(o) == n.call(p);
        }
        return !1;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Uint8Array;
    e.exports = g;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = -1, i = Array(g.size);
        return g.forEach(function (j, k) {
            i[++h] = [
                k,
                j
            ];
        }), i;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = -1, i = Array(g.size);
        return g.forEach(function (j) {
            i[++h] = j;
        }), i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Object.prototype.hasOwnProperty;
    e.exports = function (i, j, k, l, m, n) {
        var o = 1 & k, p = g(i), q = p.length;
        if (q != g(j).length && !o)
            return !1;
        for (var r = q; r--;) {
            var s = p[r];
            if (!(o ? s in j : h.call(j, s)))
                return !1;
        }
        var t = n.get(i), u = n.get(j);
        if (t && u)
            return t == j && u == i;
        var v = !0;
        n.set(i, j), n.set(j, i);
        for (var w = o; ++r < q;) {
            var x = i[s = p[r]], y = j[s];
            if (l)
                var z = o ? l(y, x, s, j, i, n) : l(x, y, s, i, j, n);
            if (!(void 0 === z ? x === y || m(x, y, k, l, n) : z)) {
                v = !1;
                break;
            }
            w || (w = 'constructor' == s);
        }
        if (v && !w) {
            var A = i.constructor, B = j.constructor;
            A == B || !('constructor' in i) || !('constructor' in j) || 'function' == typeof A && A instanceof A && 'function' == typeof B && B instanceof B || (v = !1);
        }
        return n.delete(i), n.delete(j), v;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return g(j, i, h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j, k) {
        var l = j(i);
        return h(i) ? l : g(l, k(i));
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = h.length, k = g.length; ++i < j;)
            g[k + i] = h[i];
        return g;
    };
}), d.register('.....', function (e, f) {
    var g = Array.isArray;
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = Object.prototype.propertyIsEnumerable, j = Object.getOwnPropertySymbols, k = j ? function (l) {
            return null == l ? [] : (l = Object(l), g(j(l), function (m) {
                return i.call(l, m);
            }));
        } : h;
    e.exports = k;
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = null == g ? 0 : g.length, k = 0, l = []; ++i < j;) {
            var m = g[i];
            h(m, i, g) && (l[k++] = m);
        }
        return l;
    };
}), d.register('.....', function (e, f) {
    e.exports = function () {
        return [];
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return i(j) ? g(j) : h(j);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = Object.prototype.hasOwnProperty;
    e.exports = function (n, o) {
        var p = i(n), q = !p && h(n), r = !p && !q && j(n), s = !p && !q && !r && l(n), t = p || q || r || s, u = t ? g(n.length, String) : [], v = u.length;
        for (var w in n)
            !o && !m.call(n, w) || t && ('length' == w || r && ('offset' == w || 'parent' == w) || s && ('buffer' == w || 'byteLength' == w || 'byteOffset' == w) || k(w, v)) || u.push(w);
        return u;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = Array(g); ++i < g;)
            j[i] = h(i);
        return j;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = Object.prototype, j = i.hasOwnProperty, k = i.propertyIsEnumerable, l = g(function () {
            return arguments;
        }()) ? g : function (m) {
            return h(m) && j.call(m, 'callee') && !k.call(m, 'callee');
        };
    e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        return h(i) && '[object Arguments]' == g(i);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return null != g && 'object' == typeof g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = f && !f.nodeType && f, j = i && e && !e.nodeType && e, k = j && j.exports === i ? g.Buffer : void 0, l = (k ? k.isBuffer : void 0) || h;
    e.exports = l;
}), d.register('.....', function (e, f) {
    e.exports = function () {
        return !1;
    };
}), d.register('.....', function (e, f) {
    var g = /^(?:0|[1-9]\d*)$/;
    e.exports = function (h, i) {
        var j = typeof h;
        return !!(i = null == i ? 9007199254740991 : i) && ('number' == j || 'symbol' != j && g.test(h)) && h > -1 && h % 1 == 0 && h < i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = i && i.isTypedArray, k = j ? h(j) : g;
    e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = {};
    j['[object Float32Array]'] = j['[object Float64Array]'] = j['[object Int8Array]'] = j['[object Int16Array]'] = j['[object Int32Array]'] = j['[object Uint8Array]'] = j['[object Uint8ClampedArray]'] = j['[object Uint16Array]'] = j['[object Uint32Array]'] = !0, j['[object Arguments]'] = j['[object Array]'] = j['[object ArrayBuffer]'] = j['[object Boolean]'] = j['[object DataView]'] = j['[object Date]'] = j['[object Error]'] = j['[object Function]'] = j['[object Map]'] = j['[object Number]'] = j['[object Object]'] = j['[object RegExp]'] = j['[object Set]'] = j['[object String]'] = j['[object WeakMap]'] = !1, e.exports = function (k) {
        return i(k) && h(k.length) && !!j[g(k)];
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return 'number' == typeof g && g > -1 && g % 1 == 0 && g <= 9007199254740991;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return function (h) {
            return g(h);
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = f && !f.nodeType && f, i = h && e && !e.nodeType && e, j = i && i.exports === h && g.process, k = function () {
            try {
                var l = i && i.require && i.require('util').types;
                return l || j && j.binding && j.binding('util');
            } catch (l) {
            }
        }();
    e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = Object.prototype.hasOwnProperty;
    e.exports = function (j) {
        if (!g(j))
            return h(j);
        var k = [];
        for (var l in Object(j))
            i.call(j, l) && 'constructor' != l && k.push(l);
        return k;
    };
}), d.register('.....', function (e, f) {
    var g = Object.prototype;
    e.exports = function (h) {
        var i = h && h.constructor;
        return h === ('function' == typeof i && i.prototype || g);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')(Object.keys, Object);
    e.exports = g;
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return function (i) {
            return g(h(i));
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        return null != i && h(i.length) && !g(i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = '[object Map]', o = '[object Promise]', p = '[object Set]', q = '[object WeakMap]', r = '[object DataView]', s = m(g), t = m(h), u = m(i), v = m(j), w = m(k), x = l;
    (g && x(new g(new ArrayBuffer(1))) != r || h && x(new h()) != n || i && x(i.resolve()) != o || j && x(new j()) != p || k && x(new k()) != q) && (x = function (y) {
        var z = l(y), A = '[object Object]' == z ? y.constructor : void 0, B = A ? m(A) : '';
        if (B)
            switch (B) {
            case s:
                return r;
            case t:
                return n;
            case u:
                return o;
            case v:
                return p;
            case w:
                return q;
            }
        return z;
    }), e.exports = x;
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'), 'DataView');
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'), 'Promise');
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'), 'Set');
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'), 'WeakMap');
    e.exports = g;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    }), b(e.exports, 'translateStyle', function () {
        return d('.....').translateStyle;
    });
    var g = d('.....'), _h = (d('.....'), d('.....'), d('.....'), g.default);
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _O;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    function n(o) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (p) {
            return typeof p;
        } : function (p) {
            return p && 'function' == typeof Symbol && p.constructor === Symbol && p !== Symbol.prototype ? 'symbol' : typeof p;
        }, n(o);
    }
    function o(p, q) {
        if (null == p)
            return {};
        var r, s, t = function (u, v) {
                if (null == u)
                    return {};
                var w, x, y = {}, z = Object.keys(u);
                for (x = 0; x < z.length; x++)
                    w = z[x], v.indexOf(w) >= 0 || (y[w] = u[w]);
                return y;
            }(p, q);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(p);
            for (s = 0; s < u.length; s++)
                r = u[s], q.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(p, r) && (t[r] = p[r]);
        }
        return t;
    }
    function t(u) {
        return function (v) {
            if (Array.isArray(v))
                return _u(v);
        }(u) || function (v) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(v))
                return Array.from(v);
        }(u) || function (v, w) {
            if (!v)
                return;
            if ('string' == typeof v)
                return _u(v, w);
            var x = Object.prototype.toString.call(v).slice(8, -1);
            'Object' === x && v.constructor && (x = v.constructor.name);
            if ('Map' === x || 'Set' === x)
                return Array.from(v);
            if ('Arguments' === x || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
                return _u(v, w);
        }(u) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _u(v, w) {
        (null == w || w > v.length) && (w = v.length);
        for (var x = 0, y = new Array(w); x < w; x++)
            y[x] = v[x];
        return y;
    }
    function x(y, z) {
        var A = Object.keys(y);
        if (Object.getOwnPropertySymbols) {
            var B = Object.getOwnPropertySymbols(y);
            z && (B = B.filter(function (C) {
                return Object.getOwnPropertyDescriptor(y, C).enumerable;
            })), A.push.apply(A, B);
        }
        return A;
    }
    function A(B) {
        for (var C = 1; C < arguments.length; C++) {
            var D = null != arguments[C] ? arguments[C] : {};
            C % 2 ? x(Object(D), !0).forEach(function (E) {
                _D(B, E, D[E]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(D)) : x(Object(D)).forEach(function (E) {
                Object.defineProperty(B, E, Object.getOwnPropertyDescriptor(D, E));
            });
        }
        return B;
    }
    function _D(E, F, G) {
        return F in E ? Object.defineProperty(E, F, {
            value: G,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : E[F] = G, E;
    }
    function E(F, G) {
        for (var H = 0; H < G.length; H++) {
            var I = G[H];
            I.enumerable = I.enumerable || !1, I.configurable = !0, 'value' in I && (I.writable = !0), Object.defineProperty(F, I.key, I);
        }
    }
    function H(I, J) {
        return H = Object.setPrototypeOf || function (K, L) {
            return K.__proto__ = L, K;
        }, H(I, J);
    }
    function I(J) {
        var K = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (J) {
                return !1;
            }
        }();
        return function () {
            var L, M = _M(J);
            if (K) {
                var N = _M(this).constructor;
                L = Reflect.construct(M, arguments, N);
            } else
                L = M.apply(this, arguments);
            return _K(this, L);
        };
    }
    function _K(L, M) {
        return !M || 'object' !== n(M) && 'function' != typeof M ? _L(L) : M;
    }
    function _L(M) {
        if (void 0 === M)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return M;
    }
    function _M(N) {
        return _M = Object.setPrototypeOf ? Object.getPrototypeOf : function (O) {
            return O.__proto__ || Object.getPrototypeOf(O);
        }, _M(N);
    }
    var N = function (O) {
        !function (P, Q) {
            if ('function' != typeof Q && null !== Q)
                throw new TypeError('Super expression must either be null or a function');
            P.prototype = Object.create(Q && Q.prototype, {
                constructor: {
                    value: P,
                    writable: !0,
                    configurable: !0
                }
            }), Q && H(P, Q);
        }(n, O);
        var P, Q, R, S = I(n);
        function T(U, V) {
            var W;
            !function (X, Y) {
                if (!(X instanceof Y))
                    throw new TypeError('Cannot call a class as a function');
            }(this, T);
            var X = (W = S.call(this, U, V)).props, Y = X.isActive, Z = X.attributeName, $ = X.from, ab = X.to, bb = X.steps, cb = X.children;
            if (W.handleStyleChange = W.handleStyleChange.bind(_L(W)), W.changeStyle = W.changeStyle.bind(_L(W)), !Y)
                return W.state = { style: {} }, 'function' == typeof cb && (W.state = { style: ab }), _K(W);
            if (bb && bb.length)
                W.state = { style: bb[0].style };
            else if ($) {
                if ('function' == typeof cb)
                    return W.state = { style: $ }, _K(W);
                W.state = { style: Z ? _D({}, Z, $) : $ };
            } else
                W.state = { style: {} };
            return W;
        }
        return W = T, (X = [
            {
                key: 'componentDidMount',
                value: function () {
                    var bb = this.props, cb = bb.isActive, db = bb.canBegin;
                    this.mounted = !0, cb && db && this.runAnimation(this.props);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function (bb) {
                    var cb = this.props, db = cb.isActive, eb = cb.canBegin, fb = cb.attributeName, gb = cb.shouldReAnimate;
                    if (eb)
                        if (db) {
                            if (!((0, $.deepEqual)(bb.to, this.props.to) && bb.canBegin && bb.isActive)) {
                                var hb = !bb.canBegin || !bb.isActive;
                                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                var ib = hb || gb ? this.props.from : bb.to;
                                if (this.state && this.state.style) {
                                    var jb = { style: fb ? _D({}, fb, ib) : ib };
                                    (fb && this.state.style[fb] !== ib || !fb && this.state.style !== ib) && this.setState(jb);
                                }
                                this.runAnimation(A(A({}, this.props), {}, {
                                    from: ib,
                                    begin: 0
                                }));
                            }
                        } else {
                            var kb = { style: fb ? _D({}, fb, this.props.to) : this.props.to };
                            this.state && this.state.style && (fb && this.state.style[fb] !== this.props.to || !fb && this.state.style !== this.props.to) && this.setState(kb);
                        }
                }
            },
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation();
                }
            },
            {
                key: 'runJSAnimation',
                value: function (bb) {
                    var cb = this, db = bb.from, eb = bb.to, fb = bb.duration, gb = bb.easing, hb = bb.begin, ib = bb.onAnimationEnd, jb = bb.onAnimationStart, kb = (0, cb.default)(db, eb, (0, bb.configEasing)(gb), fb, this.changeStyle);
                    this.manager.start([
                        jb,
                        hb,
                        function () {
                            cb.stopJSAnimation = kb();
                        },
                        fb,
                        ib
                    ]);
                }
            },
            {
                key: 'runStepAnimation',
                value: function (bb) {
                    var cb = this, db = bb.steps, eb = bb.begin, fb = bb.onAnimationStart, gb = db[0], hb = gb.style, ib = gb.duration, jb = void 0 === ib ? 0 : ib;
                    return this.manager.start([fb].concat(t(db.reduce(function (kb, lb, mb) {
                        if (0 === mb)
                            return kb;
                        var nb = lb.duration, ob = lb.easing, pb = void 0 === ob ? 'ease' : ob, qb = lb.style, rb = lb.properties, sb = lb.onAnimationEnd, tb = mb > 0 ? db[mb - 1] : lb, ub = rb || Object.keys(qb);
                        if ('function' == typeof pb || 'spring' === pb)
                            return [].concat(t(kb), [
                                cb.runJSAnimation.bind(cb, {
                                    from: tb.style,
                                    to: qb,
                                    duration: nb,
                                    easing: pb
                                }),
                                nb
                            ]);
                        var vb = (0, m.getTransitionVal)(ub, nb, pb), wb = A(A(A({}, tb.style), qb), {}, { transition: vb });
                        return [].concat(t(kb), [
                            wb,
                            nb,
                            sb
                        ]).filter(m.identity);
                    }, [
                        hb,
                        Math.max(jb, eb)
                    ])), [bb.onAnimationEnd]));
                }
            },
            {
                key: 'runAnimation',
                value: function (bb) {
                    this.manager || (this.manager = (0, ab.default)());
                    var cb = bb.begin, db = bb.duration, eb = bb.attributeName, fb = bb.to, gb = bb.easing, hb = bb.onAnimationStart, ib = bb.onAnimationEnd, jb = bb.steps, kb = bb.children, lb = this.manager;
                    if (this.unSubscribe = lb.subscribe(this.handleStyleChange), 'function' != typeof gb && 'function' != typeof kb && 'spring' !== gb)
                        if (jb.length > 1)
                            this.runStepAnimation(bb);
                        else {
                            var mb = eb ? _D({}, eb, fb) : fb, nb = (0, m.getTransitionVal)(Object.keys(mb), db, gb);
                            lb.start([
                                hb,
                                cb,
                                A(A({}, mb), {}, { transition: nb }),
                                db,
                                ib
                            ]);
                        }
                    else
                        this.runJSAnimation(bb);
                }
            },
            {
                key: 'handleStyleChange',
                value: function (bb) {
                    this.changeStyle(bb);
                }
            },
            {
                key: 'changeStyle',
                value: function (bb) {
                    this.mounted && this.setState({ style: bb });
                }
            },
            {
                key: 'render',
                value: function () {
                    var bb = this.props, cb = bb.children, db = (bb.begin, bb.duration, bb.attributeName, bb.easing, bb.isActive), eb = (bb.steps, bb.from, bb.to, bb.canBegin, bb.onAnimationEnd, bb.shouldReAnimate, bb.onAnimationReStart, o(bb, [
                            'children',
                            'begin',
                            'duration',
                            'attributeName',
                            'easing',
                            'isActive',
                            'steps',
                            'from',
                            'to',
                            'canBegin',
                            'onAnimationEnd',
                            'shouldReAnimate',
                            'onAnimationReStart'
                        ])), fb = Z.Children.count(cb), gb = (0, m.translateStyle)(this.state.style);
                    if ('function' == typeof cb)
                        return cb(gb);
                    if (!db || 0 === fb)
                        return cb;
                    var hb = function (ib) {
                        var jb = ib.props, kb = jb.style, lb = void 0 === kb ? {} : kb, mb = jb.className;
                        return (0, Z.cloneElement)(ib, A(A({}, eb), {}, {
                            style: A(A({}, lb), gb),
                            className: mb
                        }));
                    };
                    return 1 === fb ? hb(Z.Children.only(cb)) : a(Z).createElement('div', null, Z.Children.map(cb, function (ib) {
                        return hb(ib);
                    }));
                }
            }
        ]) && E(W.prototype, X), Y && E(W, Y), T;
    }(u.PureComponent);
    N.displayName = 'Animate', N.propTypes = {
        from: a(h).oneOfType([
            a(h).object,
            a(h).string
        ]),
        to: a(h).oneOfType([
            a(h).object,
            a(h).string
        ]),
        attributeName: a(h).string,
        duration: a(h).number,
        begin: a(h).number,
        easing: a(h).oneOfType([
            a(h).string,
            a(h).func
        ]),
        steps: a(h).arrayOf(a(h).shape({
            duration: a(h).number.isRequired,
            style: a(h).object.isRequired,
            easing: a(h).oneOfType([
                a(h).oneOf([
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'linear'
                ]),
                a(h).func
            ]),
            properties: a(h).arrayOf('string'),
            onAnimationEnd: a(h).func
        })),
        children: a(h).oneOfType([
            a(h).node,
            a(h).func
        ]),
        isActive: a(h).bool,
        canBegin: a(h).bool,
        onAnimationEnd: a(h).func,
        shouldReAnimate: a(h).bool,
        onAnimationStart: a(h).func,
        onAnimationReStart: a(h).func
    }, N.defaultProps = {
        begin: 0,
        duration: 1000,
        from: '',
        to: '',
        attributeName: '',
        easing: 'ease',
        isActive: !0,
        canBegin: !0,
        steps: [],
        onAnimationEnd: function () {
        },
        onAnimationStart: function () {
        }
    };
    var _O = N;
}), d.register('.....', function (e, f) {
    e.exports, function (g) {
        var h = 'function' == typeof WeakSet, i = Object.keys;
        function j(k, l) {
            return k === l || k != k && l != l;
        }
        function k(l) {
            return l.constructor === Object || null == l.constructor;
        }
        function l(m) {
            return !!m && 'function' == typeof m.then;
        }
        function m(n) {
            return !(!n || !n.$$typeof);
        }
        function n() {
            var o = [];
            return {
                add: function (p) {
                    o.push(p);
                },
                has: function (p) {
                    return -1 !== o.indexOf(p);
                }
            };
        }
        var p = h ? function () {
            return new WeakSet();
        } : n;
        function q(r) {
            return function (s) {
                var t = r || s;
                return function (u, v, w) {
                    void 0 === w && (w = p());
                    var x = !!u && 'object' == typeof u, y = !!v && 'object' == typeof v;
                    if (x || y) {
                        var z = x && w.has(u), A = y && w.has(v);
                        if (z || A)
                            return z && A;
                        x && w.add(u), y && w.add(v);
                    }
                    return t(u, v, w);
                };
            };
        }
        function r(s, t, u, v) {
            var w = s.length;
            if (t.length !== k)
                return !1;
            for (; k-- > 0;)
                if (!u(s[k], t[k], v))
                    return !1;
            return !0;
        }
        function t(u, v, w, x) {
            var y = u.size === v.size;
            if (k && u.size) {
                var z = {};
                u.forEach(function (A, B) {
                    if (k) {
                        var C = !1, D = 0;
                        v.forEach(function (E, F) {
                            C || l[D] || (C = w(B, F, x) && w(A, E, x)) && (l[D] = !0), D++;
                        }), k = C;
                    }
                });
            }
            return k;
        }
        var w = '_owner', x = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
        function y(z, A, B, C) {
            var D = i(z), E = l.length;
            if (i(A).length !== n)
                return !1;
            if (n)
                for (var F = void 0; n-- > 0;) {
                    if ((F = l[n]) === w) {
                        var G = m(z), H = m(A);
                        if ((q || r) && q !== r)
                            return !1;
                    }
                    if (!x(A, F) || !B(z[F], A[F], C))
                        return !1;
                }
            return !0;
        }
        function E(F, G) {
            return F.source === G.source && F.global === G.global && F.ignoreCase === G.ignoreCase && F.multiline === G.multiline && F.unicode === G.unicode && F.sticky === G.sticky && F.lastIndex === G.lastIndex;
        }
        function F(G, H, I, J) {
            var K = G.size === H.size;
            if (k && G.size) {
                var L = {};
                G.forEach(function (M) {
                    if (k) {
                        var N = !1, O = 0;
                        H.forEach(function (P) {
                            N || l[O] || (N = I(M, P, J)) && (l[O] = !0), O++;
                        }), k = N;
                    }
                });
            }
            return k;
        }
        var I = 'function' == typeof Map, J = 'function' == typeof Set;
        function K(L) {
            var M = 'function' == typeof L ? L(i) : i;
            function N(O, P, Q) {
                if (O === P)
                    return !0;
                if (O && P && 'object' == typeof O && 'object' == typeof P) {
                    if (k(O) && k(P))
                        return y(O, P, M, Q);
                    var R = Array.isArray(O), S = Array.isArray(P);
                    return n || S ? n === S && r(O, P, M, Q) : (n = O instanceof Date, S = P instanceof Date, n || S ? n === S && j(O.getTime(), P.getTime()) : (n = O instanceof RegExp, S = P instanceof RegExp, n || S ? n === S && E(O, P) : l(O) || l(P) ? O === P : I && (n = O instanceof Map, S = P instanceof Map, n || S) ? n === S && t(O, P, M, Q) : J && (n = O instanceof Set, S = P instanceof Set, n || S) ? n === S && F(O, P, M, Q) : y(O, P, M, Q)));
                }
                return O != O && P != P;
            }
            return N;
        }
        var O = K(), P = K(function () {
                return j;
            }), Q = K(q()), R = K(q(j));
        o.circularDeepEqual = Q, o.circularShallowEqual = R, o.createCustomEqual = K, o.deepEqual = O, o.sameValueZeroEqual = j, o.shallowEqual = P, Object.defineProperty(o, '__esModule', { value: !0 });
    }(e.exports);
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....');
    function h(i) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (j) {
            return typeof j;
        } : function (j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(i);
    }
    function i(j) {
        return function (k) {
            if (Array.isArray(k))
                return k;
        }(j) || function (k) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(k))
                return Array.from(k);
        }(j) || function (k, l) {
            if (!k)
                return;
            if ('string' == typeof k)
                return _j(k, l);
            var m = Object.prototype.toString.call(k).slice(8, -1);
            'Object' === m && k.constructor && (m = k.constructor.name);
            if ('Map' === m || 'Set' === m)
                return Array.from(k);
            if ('Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                return _j(k, l);
        }(j) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _j(k, l) {
        (null == l || l > k.length) && (l = k.length);
        for (var m = 0, n = new Array(l); m < l; m++)
            n[m] = k[m];
        return n;
    }
    function _m() {
        var n = function () {
                return null;
            }, o = !1, p = function p(q) {
                if (!o) {
                    if (Array.isArray(q)) {
                        if (!q.length)
                            return;
                        var r = i(q), s = r[0], t = r.slice(1);
                        return 'number' == typeof s ? void (0, g.default)(p.bind(null, t), s) : (p(s), void (0, g.default)(p.bind(null, t)));
                    }
                    'object' === h(q) && n(q), 'function' == typeof q && q();
                }
            };
        return {
            stop: function () {
                o = !0;
            },
            start: function (q) {
                o = !1, p(q);
            },
            subscribe: function (q) {
                return n = q, function () {
                    n = function () {
                        return null;
                    };
                };
            }
        };
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, j = -1, k = function g(l) {
                j < 0 && (j = l), l - j > i ? (h(l), j = -1) : requestAnimationFrame(g);
            };
        requestAnimationFrame(g);
    }
    i(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'configEasing', function () {
        return _v;
    });
    var g = d('.....');
    function h(i, j) {
        return function (k) {
            if (Array.isArray(k))
                return k;
        }(i) || function (k, l) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(k)))
                return;
            var m = [], n = !0, o = !1, p = void 0;
            try {
                for (var q, r = k[Symbol.iterator](); !(n = (q = r.next()).done) && (m.push(q.value), !l || m.length !== l); n = !0);
            } catch (k) {
                o = !0, p = k;
            } finally {
                try {
                    n || null == r.return || r.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(i, j) || _j(i, j) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function i(j) {
        return function (k) {
            if (Array.isArray(k))
                return _l(k);
        }(j) || function (k) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(k))
                return Array.from(k);
        }(j) || _j(j) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _j(k, l) {
        if (k) {
            if ('string' == typeof k)
                return _l(k, l);
            var m = Object.prototype.toString.call(k).slice(8, -1);
            return 'Object' === m && k.constructor && (m = k.constructor.name), 'Map' === m || 'Set' === m ? Array.from(k) : 'Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? _l(k, l) : void 0;
        }
    }
    function _l(m, n) {
        (null == n || n > m.length) && (n = m.length);
        for (var o = 0, p = new Array(n); o < n; o++)
            p[o] = m[o];
        return p;
    }
    var o = 0.0001, p = function (q, r) {
            return [
                0,
                3 * q,
                3 * r - 6 * q,
                3 * q - 3 * r + 1
            ];
        }, q = function (r, s) {
            return r.map(function (t, u) {
                return t * Math.pow(s, u);
            }).reduce(function (t, u) {
                return t + u;
            });
        }, r = function (s, t) {
            return function (u) {
                var v = p(s, t);
                return q(v, u);
            };
        }, s = function (t, u) {
            return function (v) {
                var w = p(t, u), x = [].concat(i(w.map(function (y, z) {
                        return y * z;
                    }).slice(1)), [0]);
                return q(x, v);
            };
        }, t = function () {
            for (var u = arguments.length, v = new Array(u), w = 0; w < u; w++)
                v[w] = arguments[w];
            var x = v[0], y = v[1], z = v[2], A = v[3];
            if (1 === v.length)
                switch (v[0]) {
                case 'linear':
                    x = 0, y = 0, z = 1, A = 1;
                    break;
                case 'ease':
                    x = 0.25, y = 0.1, z = 0.25, A = 1;
                    break;
                case 'ease-in':
                    x = 0.42, y = 0, z = 1, A = 1;
                    break;
                case 'ease-out':
                    x = 0.42, y = 0, z = 0.58, A = 1;
                    break;
                case 'ease-in-out':
                    x = 0, y = 0, z = 0.58, A = 1;
                    break;
                default:
                    var B = v[0].split('(');
                    if ('cubic-bezier' === B[0] && 4 === B[1].split(')')[0].split(',').length) {
                        var C = B[1].split(')')[0].split(',').map(function (D) {
                                return parseFloat(D);
                            }), D = h(C, 4);
                        x = D[0], y = D[1], z = D[2], A = D[3];
                    } else
                        (0, g.warn)(!1, '[configBezier]: arguments should be one of oneOf \'linear\', \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', instead received %s', v);
                }
            (0, g.warn)([
                x,
                z,
                y,
                A
            ].every(function (E) {
                return 'number' == typeof E && E >= 0 && E <= 1;
            }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', v);
            var E = r(x, z), F = r(y, A), G = s(x, z), H = function (I) {
                    return I > 1 ? 1 : I < 0 ? 0 : I;
                }, I = function (J) {
                    for (var K = J > 1 ? 1 : J, L = K, M = 0; M < 8; ++M) {
                        var N = E(L) - K, O = G(L);
                        if (Math.abs(N - K) < o || O < o)
                            return F(L);
                        L = H(L - N / O);
                    }
                    return F(L);
                };
            return I.isStepper = !1, I;
        }, u = function () {
            var v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, w = v.stiff, x = void 0 === w ? 100 : w, y = v.damping, z = void 0 === y ? 8 : y, A = v.dt, B = void 0 === A ? 17 : A, C = function (D, E, F) {
                    var G = F + (-(D - E) * x - F * z) * B / 1000, H = F * B / 1000 + D;
                    return Math.abs(H - E) < o && Math.abs(G) < o ? [
                        E,
                        0
                    ] : [
                        H,
                        G
                    ];
                };
            return C.isStepper = !0, C.dt = B, C;
        }, _v = function () {
            for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                x[y] = arguments[y];
            var z = x[0];
            if ('string' == typeof z)
                switch (z) {
                case 'ease':
                case 'ease-in-out':
                case 'ease-out':
                case 'ease-in':
                case 'linear':
                    return t(z);
                case 'spring':
                    return u();
                default:
                    if ('cubic-bezier' === z.split('(')[0])
                        return t(z);
                    (0, g.warn)(!1, '[configEasing]: first argument should be one of \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', \'linear\' and \'spring\', instead  received %s', x);
                }
            return 'function' == typeof z ? z : ((0, g.warn)(!1, '[configEasing]: first argument type should be function or string, instead received %s', x), null);
        };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (g = g.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, g);
        }
        return j;
    }
    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                _m(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
    function _m(n, o, p) {
        return o in n ? Object.defineProperty(n, o, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[o] = p, n;
    }
    l(e.exports, 'getIntersectionKeys', function () {
        return _q;
    }), l(e.exports, 'identity', function () {
        return _r;
    }), l(e.exports, 'mapObject', function () {
        return _s;
    }), l(e.exports, 'translateStyle', function () {
        return _t;
    }), l(e.exports, 'getTransitionVal', function () {
        return _u;
    }), l(e.exports, 'warn', function () {
        return _v;
    });
    var n = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ], o = [
            '-webkit-',
            '-moz-',
            '-o-',
            '-ms-'
        ], p = [
            'transform',
            'transformOrigin',
            'transition'
        ], _q = function (r, s) {
            return [
                Object.keys(r),
                Object.keys(s)
            ].reduce(function (t, u) {
                return t.filter(function (v) {
                    return u.includes(v);
                });
            });
        }, _r = function (s) {
            return s;
        }, _s = function (t, u) {
            return Object.keys(u).reduce(function (v, w) {
                return j(j({}, v), {}, _m({}, w, t(w, u[w])));
            }, {});
        }, _t = function (u) {
            return Object.keys(u).reduce(function (v, w) {
                return j(j({}, v), function (x, y) {
                    if (-1 === p.indexOf(x))
                        return _m({}, x, y);
                    var z = 'transition' === x, A = x.replace(/(\w)/, function (B) {
                            return B.toUpperCase();
                        }), B = y;
                    return n.reduce(function (C, D, E) {
                        return z && (B = y.replace(/(transform|transform-origin)/gim, ''.concat(o[E], '$1'))), j(j({}, C), {}, _m({}, D + A, B));
                    }, {});
                }(w, v[w]));
            }, u);
        }, _u = function (v, w, x) {
            return v.map(function (y) {
                return ''.concat((g = y, g.replace(/([A-Z])/g, function (z) {
                    return '-'.concat(z.toLowerCase());
                })), ' ').concat(w, 'ms ').concat(x);
                var z;
            }).join(',');
        }, _v = function (w, x, y, z, A, B, C, D) {
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _y;
    });
    var g = d('.....');
    function h(i) {
        return function (j) {
            if (Array.isArray(j))
                return _s(j);
        }(i) || function (j) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(j))
                return Array.from(j);
        }(i) || _q(i) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function i(j, k) {
        var l = Object.keys(j);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(j);
            k && (m = m.filter(function (n) {
                return Object.getOwnPropertyDescriptor(j, n).enumerable;
            })), l.push.apply(l, m);
        }
        return l;
    }
    function l(m) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? i(Object(o), !0).forEach(function (p) {
                _o(m, p, o[p]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function (p) {
                Object.defineProperty(m, p, Object.getOwnPropertyDescriptor(o, p));
            });
        }
        return m;
    }
    function _o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }
    function p(q, r) {
        return function (s) {
            if (Array.isArray(s))
                return s;
        }(q) || function (s, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(s)))
                return;
            var u = [], v = !0, w = !1, x = void 0;
            try {
                for (var y, z = s[Symbol.iterator](); !(v = (y = z.next()).done) && (u.push(y.value), !t || u.length !== t); v = !0);
            } catch (s) {
                w = !0, x = s;
            } finally {
                try {
                    v || null == z.return || z.return();
                } finally {
                    if (w)
                        throw x;
                }
            }
            return u;
        }(q, r) || _q(q, r) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _q(r, s) {
        if (r) {
            if ('string' == typeof r)
                return _s(r, s);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            return 'Object' === t && r.constructor && (t = r.constructor.name), 'Map' === t || 'Set' === t ? Array.from(r) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _s(r, s) : void 0;
        }
    }
    function _s(t, u) {
        (null == u || u > t.length) && (u = t.length);
        for (var v = 0, w = new Array(u); v < u; v++)
            w[v] = t[v];
        return w;
    }
    var v = function (w, x, y) {
            return w + (x - w) * y;
        }, w = function (x) {
            return x.from !== x.to;
        }, x = function e(y, z, A) {
            var B = (0, g.mapObject)(function (C, D) {
                if (w(D)) {
                    var E = p(y(D.from, D.to, D.velocity), 2), F = E[0], G = E[1];
                    return l(l({}, D), {}, {
                        from: F,
                        velocity: G
                    });
                }
                return D;
            }, z);
            return A < 1 ? (0, g.mapObject)(function (C, D) {
                return w(D) ? l(l({}, D), {}, {
                    velocity: v(D.velocity, B[C].velocity, A),
                    from: v(D.from, B[C].from, A)
                }) : D;
            }, z) : e(y, B, A - 1);
        }, _y = function (z, A, B, C, D) {
            var E, F, G = (0, g.getIntersectionKeys)(z, A), H = G.reduce(function (I, J) {
                    return l(l({}, I), {}, _o({}, J, [
                        z[J],
                        A[J]
                    ]));
                }, {}), I = G.reduce(function (J, K) {
                    return l(l({}, J), {}, _o({}, K, {
                        from: z[K],
                        velocity: 0,
                        to: A[K]
                    }));
                }, {}), J = -1, K = function () {
                    return null;
                };
            return K = B.isStepper ? function (L) {
                E || (E = L);
                var M = (L - E) / B.dt;
                I = x(B, I, M), D(l(l(l({}, z), A), (0, g.mapObject)(function (N, O) {
                    return O.from;
                }, I))), E = L, Object.values(I).filter(w).length && (J = requestAnimationFrame(K));
            } : function (L) {
                F || (F = L);
                var M = (L - F) / C, N = (0, g.mapObject)(function (O, P) {
                        return v.apply(void 0, h(P).concat([B(M)]));
                    }, H);
                if (D(l(l(l({}, z), A), N)), M < 1)
                    J = requestAnimationFrame(K);
                else {
                    var O = (0, g.mapObject)(function (P, Q) {
                        return v.apply(void 0, h(Q).concat([B(1)]));
                    }, H);
                    D(l(l(l({}, z), A), O));
                }
            }, function () {
                return requestAnimationFrame(K), function () {
                    cancelAnimationFrame(J);
                };
            };
        };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        var m = l.component, n = l.children, o = l.appear, p = l.enter, q = l.leave;
        return a(g).createElement(h.TransitionGroup, { component: m }, g.Children.map(n, function (r, s) {
            return a(g).createElement(j.default, {
                appearOptions: o,
                enterOptions: k,
                leaveOptions: q,
                key: 'child-'.concat(s)
            }, r);
        }));
    }
    k.propTypes = {
        appear: a(o).object,
        enter: a(o).object,
        leave: a(o).object,
        children: a(o).oneOfType([
            a(o).array,
            a(o).element
        ]),
        component: a(o).any
    }, k.defaultProps = { component: 'span' };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _J;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (m) {
            return typeof m;
        } : function (m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }
    function l() {
        return l = Object.assign || function (m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }
    function m(n, o) {
        if (null == n)
            return {};
        var p, q, r = function (s, t) {
                if (null == s)
                    return {};
                var u, v, w = {}, x = Object.keys(s);
                for (v = 0; v < x.length; v++)
                    u = x[v], t.indexOf(u) >= 0 || (w[u] = s[u]);
                return w;
            }(n, o);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(n, p) && (r[p] = n[p]);
        }
        return r;
    }
    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function (w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }
    function u(v) {
        for (var w = 1; w < arguments.length; w++) {
            var x = null != arguments[w] ? arguments[w] : {};
            w % 2 ? r(Object(x), !0).forEach(function (y) {
                _x(v, y, x[y]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : r(Object(x)).forEach(function (y) {
                Object.defineProperty(v, y, Object.getOwnPropertyDescriptor(x, y));
            });
        }
        return v;
    }
    function _x(y, z, A) {
        return z in y ? Object.defineProperty(y, z, {
            value: A,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[z] = A, y;
    }
    function y(z, A) {
        if (!(z instanceof A))
            throw new TypeError('Cannot call a class as a function');
    }
    function z(A, B) {
        for (var C = 0; C < B.length; C++) {
            var D = B[C];
            D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(A, D.key, D);
        }
    }
    function C(D, E) {
        return C = Object.setPrototypeOf || function (F, G) {
            return F.__proto__ = G, F;
        }, C(D, E);
    }
    function D(E) {
        var F = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (E) {
                return !1;
            }
        }();
        return function () {
            var G, H = _G(E);
            if (F) {
                var I = _G(this).constructor;
                G = Reflect.construct(H, arguments, I);
            } else
                G = H.apply(this, arguments);
            return _F(this, G);
        };
    }
    function _F(G, H) {
        return !H || 'object' !== k(H) && 'function' != typeof H ? function (I) {
            if (void 0 === I)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return I;
        }(G) : H;
    }
    function _G(H) {
        return _G = Object.setPrototypeOf ? Object.getPrototypeOf : function (I) {
            return I.__proto__ || Object.getPrototypeOf(I);
        }, _G(H);
    }
    void 0 === Number.isFinite && (Number.isFinite = function (H) {
        return 'number' == typeof H && isFinite(H);
    });
    var H = function () {
            var I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, J = I.steps, K = I.duration;
            return J && J.length ? J.reduce(function (L, M) {
                return L + (Number.isFinite(M.duration) && M.duration > 0 ? M.duration : 0);
            }, 0) : Number.isFinite(K) ? K : 0;
        }, I = function (J) {
            !function (K, L) {
                if ('function' != typeof L && null !== L)
                    throw new TypeError('Super expression must either be null or a function');
                K.prototype = Object.create(L && L.prototype, {
                    constructor: {
                        value: K,
                        writable: !0,
                        configurable: !0
                    }
                }), L && C(K, L);
            }(k, J);
            var K, L, M, N = D(k);
            function O() {
                var P;
                y(this, O);
                for (var Q = arguments.length, R = new Array(Q), S = 0; S < Q; S++)
                    R[S] = arguments[S];
                return (P = N.call.apply(N, [this].concat(R))).state = { isActive: !1 }, P.handleEnter = function (T, U) {
                    var V = P.props, W = V.appearOptions, X = V.enterOptions;
                    P.handleStyleActive(U ? W : X);
                }, P.handleExit = function () {
                    P.handleStyleActive(P.props.leaveOptions);
                }, P;
            }
            return R = O, (S = [
                {
                    key: 'handleStyleActive',
                    value: function (T) {
                        if (T) {
                            var U = T.onAnimationEnd ? function () {
                                T.onAnimationEnd();
                            } : null;
                            this.setState(u(u({}, T), {}, {
                                onAnimationEnd: U,
                                isActive: !0
                            }));
                        }
                    }
                },
                {
                    key: 'parseTimeout',
                    value: function () {
                        var T = this.props, U = T.appearOptions, V = T.enterOptions, W = T.leaveOptions;
                        return H(U) + H(V) + H(W);
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var T = this, U = this.props, V = U.children, W = (U.appearOptions, U.enterOptions, U.leaveOptions, m(U, [
                                'children',
                                'appearOptions',
                                'enterOptions',
                                'leaveOptions'
                            ]));
                        return P(s).createElement(h.Transition, l({}, W, {
                            onEnter: this.handleEnter,
                            onExit: this.handleExit,
                            timeout: this.parseTimeout()
                        }), function () {
                            return P(s).createElement(j.default, T.state, s.Children.only(V));
                        });
                    }
                }
            ]) && z(R.prototype, S), M && z(R, M), O;
        }(s.Component);
    I.propTypes = {
        appearOptions: a(i).object,
        enterOptions: a(i).object,
        leaveOptions: a(i).object,
        children: a(i).element
    };
    var _J = I;
}), d.register('.....', function (e, f) {
    b(e.exports, 'isInRectangle', function () {
        return _w;
    }), b(e.exports, 'Rectangle', function () {
        return _x;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (m) {
            return typeof m;
        } : function (m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }
    function l() {
        return l = Object.assign || function (m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }
    function m(n, o) {
        if (!(n instanceof o))
            throw new TypeError('Cannot call a class as a function');
    }
    function n(o, p) {
        for (var q = 0; q < p.length; q++) {
            var r = p[q];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(o, r.key, r);
        }
    }
    function q(r, s) {
        return q = Object.setPrototypeOf || function (t, u) {
            return t.__proto__ = u, t;
        }, q(r, s);
    }
    function r(s) {
        var t = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (s) {
                return !1;
            }
        }();
        return function () {
            var u, v = _u(s);
            if (t) {
                var w = _u(this).constructor;
                u = Reflect.construct(v, arguments, w);
            } else
                u = v.apply(this, arguments);
            return _t(this, u);
        };
    }
    function _t(u, v) {
        return !v || 'object' !== k(v) && 'function' != typeof v ? function (w) {
            if (void 0 === w)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return w;
        }(u) : v;
    }
    function _u(v) {
        return _u = Object.setPrototypeOf ? Object.getPrototypeOf : function (w) {
            return w.__proto__ || Object.getPrototypeOf(w);
        }, _u(v);
    }
    var v = function (w, x, y, z, A) {
            var B, C = Math.min(Math.abs(y) / 2, Math.abs(z) / 2), D = z >= 0 ? 1 : -1, E = y >= 0 ? 1 : -1, F = z >= 0 && y >= 0 || z < 0 && y < 0 ? 1 : 0;
            if (C > 0 && A instanceof Array) {
                for (var G = [
                            0,
                            0,
                            0,
                            0
                        ], H = 0; H < 4; H++)
                    G[H] = A[H] > C ? C : A[H];
                B = 'M'.concat(w, ',').concat(x + D * G[0]), G[0] > 0 && (B += 'A '.concat(G[0], ',').concat(G[0], ',0,0,').concat(F, ',').concat(w + E * G[0], ',').concat(x)), B += 'L '.concat(w + y - E * G[1], ',').concat(x), G[1] > 0 && (B += 'A '.concat(G[1], ',').concat(G[1], ',0,0,').concat(F, ',\n        ').concat(w + y, ',').concat(x + D * G[1])), B += 'L '.concat(w + y, ',').concat(x + z - D * G[2]), G[2] > 0 && (B += 'A '.concat(G[2], ',').concat(G[2], ',0,0,').concat(F, ',\n        ').concat(w + y - E * G[2], ',').concat(x + z)), B += 'L '.concat(w + E * G[3], ',').concat(x + z), G[3] > 0 && (B += 'A '.concat(G[3], ',').concat(G[3], ',0,0,').concat(F, ',\n        ').concat(w, ',').concat(x + z - D * G[3])), B += 'Z';
            } else if (C > 0 && A === +A && A > 0) {
                var I = Math.min(C, A);
                B = 'M '.concat(w, ',').concat(x + D * I, '\n            A ').concat(I, ',').concat(I, ',0,0,').concat(F, ',').concat(w + E * I, ',').concat(x, '\n            L ').concat(w + y - E * I, ',').concat(x, '\n            A ').concat(I, ',').concat(I, ',0,0,').concat(F, ',').concat(w + y, ',').concat(x + D * I, '\n            L ').concat(w + y, ',').concat(x + z - D * I, '\n            A ').concat(I, ',').concat(I, ',0,0,').concat(F, ',').concat(w + y - E * I, ',').concat(x + z, '\n            L ').concat(w + E * I, ',').concat(x + z, '\n            A ').concat(I, ',').concat(I, ',0,0,').concat(F, ',').concat(w, ',').concat(x + z - D * I, ' Z');
            } else
                B = 'M '.concat(w, ',').concat(x, ' h ').concat(y, ' v ').concat(z, ' h ').concat(-y, ' Z');
            return B;
        }, _w = function (x, y) {
            if (!x || !y)
                return !1;
            var z = x.x, A = x.y, B = y.x, C = y.y, D = y.width, E = y.height;
            if (Math.abs(D) > 0 && Math.abs(E) > 0) {
                var F = Math.min(B, B + D), G = Math.max(B, B + D), H = Math.min(C, C + E), I = Math.max(C, C + E);
                return z >= F && z <= G && A >= H && A <= I;
            }
            return !1;
        }, _x = function (y) {
            !function (z, A) {
                if ('function' != typeof A && null !== A)
                    throw new TypeError('Super expression must either be null or a function');
                z.prototype = Object.create(A && A.prototype, {
                    constructor: {
                        value: z,
                        writable: !0,
                        configurable: !0
                    }
                }), A && q(z, A);
            }(_t, y);
            var z, A, B, C = r(_t);
            function D() {
                var E;
                m(this, D);
                for (var F = arguments.length, G = new Array(F), H = 0; H < F; H++)
                    G[H] = arguments[H];
                return (E = C.call.apply(C, [this].concat(G))).state = { totalLength: -1 }, E.node = void 0, E;
            }
            return G = D, (H = [
                {
                    key: 'componentDidMount',
                    value: function () {
                        if (this.node && this.node.getTotalLength)
                            try {
                                var I = this.node.getTotalLength();
                                I && this.setState({ totalLength: I });
                            } catch (I) {
                            }
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var I = this, J = this.props, K = J.x, L = J.y, M = J.width, N = J.height, O = J.radius, P = J.className, Q = this.state.totalLength, R = this.props, S = R.animationEasing, T = R.animationDuration, U = R.animationBegin, V = R.isAnimationActive, W = R.isUpdateAnimationActive;
                        if (K !== +K || L !== +L || M !== +M || N !== +N || 0 === M || 0 === N)
                            return null;
                        var X = E(h)('recharts-rectangle', P);
                        return W ? E(g).createElement(i.default, {
                            canBegin: Q > 0,
                            from: {
                                width: M,
                                height: N,
                                x: K,
                                y: L
                            },
                            to: {
                                width: M,
                                height: N,
                                x: K,
                                y: L
                            },
                            duration: T,
                            animationEasing: S,
                            isActive: W
                        }, function (Y) {
                            var Z = Y.width, $ = Y.height, ab = Y.x, bb = Y.y;
                            return E(g).createElement(i.default, {
                                canBegin: Q > 0,
                                from: '0px '.concat(-1 === Q ? 1 : Q, 'px'),
                                to: ''.concat(Q, 'px 0px'),
                                attributeName: 'strokeDasharray',
                                begin: U,
                                duration: T,
                                isActive: V,
                                easing: S
                            }, E(g).createElement('path', l({}, (0, j.filterProps)(I.props, !0), {
                                className: X,
                                d: v(ab, bb, Z, $, O),
                                ref: function (cb) {
                                    I.node = cb;
                                }
                            })));
                        }) : E(g).createElement('path', l({}, (0, j.filterProps)(this.props, !0), {
                            className: X,
                            d: v(K, L, M, N, O)
                        }));
                    }
                }
            ]) && n(G.prototype, H), B && n(G, B), D;
        }(g.PureComponent);
    _x.defaultProps = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease'
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'filterProps', function () {
        return _m;
    }), b(e.exports, 'adaptEventHandlers', function () {
        return _n;
    }), b(e.exports, 'adaptEventsOfChild', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....');
    function i(j) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (k) {
            return typeof k;
        } : function (k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, i(j);
    }
    var j = [
            'viewBox',
            'children'
        ], k = [
            'aria-activedescendant',
            'aria-atomic',
            'aria-autocomplete',
            'aria-busy',
            'aria-checked',
            'aria-colcount',
            'aria-colindex',
            'aria-colspan',
            'aria-controls',
            'aria-current',
            'aria-describedby',
            'aria-details',
            'aria-disabled',
            'aria-errormessage',
            'aria-expanded',
            'aria-flowto',
            'aria-haspopup',
            'aria-hidden',
            'aria-invalid',
            'aria-keyshortcuts',
            'aria-label',
            'aria-labelledby',
            'aria-level',
            'aria-live',
            'aria-modal',
            'aria-multiline',
            'aria-multiselectable',
            'aria-orientation',
            'aria-owns',
            'aria-placeholder',
            'aria-posinset',
            'aria-pressed',
            'aria-readonly',
            'aria-relevant',
            'aria-required',
            'aria-roledescription',
            'aria-rowcount',
            'aria-rowindex',
            'aria-rowspan',
            'aria-selected',
            'aria-setsize',
            'aria-sort',
            'aria-valuemax',
            'aria-valuemin',
            'aria-valuenow',
            'aria-valuetext',
            'className',
            'color',
            'height',
            'id',
            'lang',
            'max',
            'media',
            'method',
            'min',
            'name',
            'style',
            'target',
            'type',
            'width',
            'role',
            'tabIndex',
            'accentHeight',
            'accumulate',
            'additive',
            'alignmentBaseline',
            'allowReorder',
            'alphabetic',
            'amplitude',
            'arabicForm',
            'ascent',
            'attributeName',
            'attributeType',
            'autoReverse',
            'azimuth',
            'baseFrequency',
            'baselineShift',
            'baseProfile',
            'bbox',
            'begin',
            'bias',
            'by',
            'calcMode',
            'capHeight',
            'clip',
            'clipPath',
            'clipPathUnits',
            'clipRule',
            'colorInterpolation',
            'colorInterpolationFilters',
            'colorProfile',
            'colorRendering',
            'contentScriptType',
            'contentStyleType',
            'cursor',
            'cx',
            'cy',
            'd',
            'decelerate',
            'descent',
            'diffuseConstant',
            'direction',
            'display',
            'divisor',
            'dominantBaseline',
            'dur',
            'dx',
            'dy',
            'edgeMode',
            'elevation',
            'enableBackground',
            'end',
            'exponent',
            'externalResourcesRequired',
            'fill',
            'fillOpacity',
            'fillRule',
            'filter',
            'filterRes',
            'filterUnits',
            'floodColor',
            'floodOpacity',
            'focusable',
            'fontFamily',
            'fontSize',
            'fontSizeAdjust',
            'fontStretch',
            'fontStyle',
            'fontVariant',
            'fontWeight',
            'format',
            'from',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyphName',
            'glyphOrientationHorizontal',
            'glyphOrientationVertical',
            'glyphRef',
            'gradientTransform',
            'gradientUnits',
            'hanging',
            'horizAdvX',
            'horizOriginX',
            'href',
            'ideographic',
            'imageRendering',
            'in2',
            'in',
            'intercept',
            'k1',
            'k2',
            'k3',
            'k4',
            'k',
            'kernelMatrix',
            'kernelUnitLength',
            'kerning',
            'keyPoints',
            'keySplines',
            'keyTimes',
            'lengthAdjust',
            'letterSpacing',
            'lightingColor',
            'limitingConeAngle',
            'local',
            'markerEnd',
            'markerHeight',
            'markerMid',
            'markerStart',
            'markerUnits',
            'markerWidth',
            'mask',
            'maskContentUnits',
            'maskUnits',
            'mathematical',
            'mode',
            'numOctaves',
            'offset',
            'opacity',
            'operator',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'overlinePosition',
            'overlineThickness',
            'paintOrder',
            'panose1',
            'pathLength',
            'patternContentUnits',
            'patternTransform',
            'patternUnits',
            'pointerEvents',
            'points',
            'pointsAtX',
            'pointsAtY',
            'pointsAtZ',
            'preserveAlpha',
            'preserveAspectRatio',
            'primitiveUnits',
            'r',
            'radius',
            'refX',
            'refY',
            'renderingIntent',
            'repeatCount',
            'repeatDur',
            'requiredExtensions',
            'requiredFeatures',
            'restart',
            'result',
            'rotate',
            'rx',
            'ry',
            'seed',
            'shapeRendering',
            'slope',
            'spacing',
            'specularConstant',
            'specularExponent',
            'speed',
            'spreadMethod',
            'startOffset',
            'stdDeviation',
            'stemh',
            'stemv',
            'stitchTiles',
            'stopColor',
            'stopOpacity',
            'strikethroughPosition',
            'strikethroughThickness',
            'string',
            'stroke',
            'strokeDasharray',
            'strokeDashoffset',
            'strokeLinecap',
            'strokeLinejoin',
            'strokeMiterlimit',
            'strokeOpacity',
            'strokeWidth',
            'surfaceScale',
            'systemLanguage',
            'tableValues',
            'targetX',
            'targetY',
            'textAnchor',
            'textDecoration',
            'textLength',
            'textRendering',
            'to',
            'transform',
            'u1',
            'u2',
            'underlinePosition',
            'underlineThickness',
            'unicode',
            'unicodeBidi',
            'unicodeRange',
            'unitsPerEm',
            'vAlphabetic',
            'values',
            'vectorEffect',
            'version',
            'vertAdvY',
            'vertOriginX',
            'vertOriginY',
            'vHanging',
            'vIdeographic',
            'viewTarget',
            'visibility',
            'vMathematical',
            'widths',
            'wordSpacing',
            'writingMode',
            'x1',
            'x2',
            'x',
            'xChannelSelector',
            'xHeight',
            'xlinkActuate',
            'xlinkArcrole',
            'xlinkHref',
            'xlinkRole',
            'xlinkShow',
            'xlinkTitle',
            'xlinkType',
            'xmlBase',
            'xmlLang',
            'xmlns',
            'xmlnsXlink',
            'xmlSpace',
            'y1',
            'y2',
            'y',
            'yChannelSelector',
            'z',
            'zoomAndPan',
            'ref',
            'key',
            'angle'
        ], l = [
            'dangerouslySetInnerHTML',
            'onCopy',
            'onCopyCapture',
            'onCut',
            'onCutCapture',
            'onPaste',
            'onPasteCapture',
            'onCompositionEnd',
            'onCompositionEndCapture',
            'onCompositionStart',
            'onCompositionStartCapture',
            'onCompositionUpdate',
            'onCompositionUpdateCapture',
            'onFocus',
            'onFocusCapture',
            'onBlur',
            'onBlurCapture',
            'onChange',
            'onChangeCapture',
            'onBeforeInput',
            'onBeforeInputCapture',
            'onInput',
            'onInputCapture',
            'onReset',
            'onResetCapture',
            'onSubmit',
            'onSubmitCapture',
            'onInvalid',
            'onInvalidCapture',
            'onLoad',
            'onLoadCapture',
            'onError',
            'onErrorCapture',
            'onKeyDown',
            'onKeyDownCapture',
            'onKeyPress',
            'onKeyPressCapture',
            'onKeyUp',
            'onKeyUpCapture',
            'onAbort',
            'onAbortCapture',
            'onCanPlay',
            'onCanPlayCapture',
            'onCanPlayThrough',
            'onCanPlayThroughCapture',
            'onDurationChange',
            'onDurationChangeCapture',
            'onEmptied',
            'onEmptiedCapture',
            'onEncrypted',
            'onEncryptedCapture',
            'onEnded',
            'onEndedCapture',
            'onLoadedData',
            'onLoadedDataCapture',
            'onLoadedMetadata',
            'onLoadedMetadataCapture',
            'onLoadStart',
            'onLoadStartCapture',
            'onPause',
            'onPauseCapture',
            'onPlay',
            'onPlayCapture',
            'onPlaying',
            'onPlayingCapture',
            'onProgress',
            'onProgressCapture',
            'onRateChange',
            'onRateChangeCapture',
            'onSeeked',
            'onSeekedCapture',
            'onSeeking',
            'onSeekingCapture',
            'onStalled',
            'onStalledCapture',
            'onSuspend',
            'onSuspendCapture',
            'onTimeUpdate',
            'onTimeUpdateCapture',
            'onVolumeChange',
            'onVolumeChangeCapture',
            'onWaiting',
            'onWaitingCapture',
            'onAuxClick',
            'onAuxClickCapture',
            'onClick',
            'onClickCapture',
            'onContextMenu',
            'onContextMenuCapture',
            'onDoubleClick',
            'onDoubleClickCapture',
            'onDrag',
            'onDragCapture',
            'onDragEnd',
            'onDragEndCapture',
            'onDragEnter',
            'onDragEnterCapture',
            'onDragExit',
            'onDragExitCapture',
            'onDragLeave',
            'onDragLeaveCapture',
            'onDragOver',
            'onDragOverCapture',
            'onDragStart',
            'onDragStartCapture',
            'onDrop',
            'onDropCapture',
            'onMouseDown',
            'onMouseDownCapture',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseMoveCapture',
            'onMouseOut',
            'onMouseOutCapture',
            'onMouseOver',
            'onMouseOverCapture',
            'onMouseUp',
            'onMouseUpCapture',
            'onSelect',
            'onSelectCapture',
            'onTouchCancel',
            'onTouchCancelCapture',
            'onTouchEnd',
            'onTouchEndCapture',
            'onTouchMove',
            'onTouchMoveCapture',
            'onTouchStart',
            'onTouchStartCapture',
            'onPointerDown',
            'onPointerDownCapture',
            'onPointerMove',
            'onPointerMoveCapture',
            'onPointerUp',
            'onPointerUpCapture',
            'onPointerCancel',
            'onPointerCancelCapture',
            'onPointerEnter',
            'onPointerEnterCapture',
            'onPointerLeave',
            'onPointerLeaveCapture',
            'onPointerOver',
            'onPointerOverCapture',
            'onPointerOut',
            'onPointerOutCapture',
            'onGotPointerCapture',
            'onGotPointerCaptureCapture',
            'onLostPointerCapture',
            'onLostPointerCaptureCapture',
            'onScroll',
            'onScrollCapture',
            'onWheel',
            'onWheelCapture',
            'onAnimationStart',
            'onAnimationStartCapture',
            'onAnimationEnd',
            'onAnimationEndCapture',
            'onAnimationIteration',
            'onAnimationIterationCapture',
            'onTransitionEnd',
            'onTransitionEndCapture'
        ], _m = function (n, o, p) {
            if (!n || 'function' == typeof n || 'boolean' == typeof n)
                return null;
            var q = n;
            if ((0, h.isValidElement)(n) && (q = n.props), !a(g)(q))
                return null;
            var r = {};
            return Object.keys(q).forEach(function (s) {
                (k.includes(s) || p && j.includes(s) || o && l.includes(s)) && (r[s] = q[s]);
            }), r;
        }, _n = function (o, p) {
            if (!o || 'function' == typeof o || 'boolean' == typeof o)
                return null;
            var q = o;
            if ((0, h.isValidElement)(o) && (q = o.props), !a(g)(q))
                return null;
            var r = {};
            return Object.keys(q).forEach(function (s) {
                l.includes(s) && (r[s] = p || function (t) {
                    return q[s](q, t);
                });
            }), r;
        }, _o = function (p, q, r) {
            if (!a(g)(p) || 'object' !== i(p))
                return null;
            var s = null;
            return Object.keys(p).forEach(function (t) {
                var u = p[t];
                l.includes(t) && 'function' == typeof u && (s || (s = {}), s[t] = function (v, w, x) {
                    return function (y) {
                        return v(w, x, y), null;
                    };
                }(u, q, r));
            }), s;
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Layer', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j() {
        return j = Object.assign || function (k) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }
    function k(l, m) {
        if (null == l)
            return {};
        var n, o, p = function (q, r) {
                if (null == q)
                    return {};
                var s, t, u = {}, v = Object.keys(q);
                for (t = 0; t < v.length; t++)
                    s = v[t], r.indexOf(s) >= 0 || (u[s] = q[s]);
                return u;
            }(l, m);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(l);
            for (o = 0; o < q.length; o++)
                n = q[o], m.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(l, n) && (p[n] = l[n]);
        }
        return p;
    }
    var _p = a(q).forwardRef(function (q, r) {
        var s = q.children, t = q.className, u = k(q, [
                'children',
                'className'
            ]), v = a(h)('recharts-layer', t);
        return a(q).createElement('g', j({ className: v }, (0, i.filterProps)(u, !0), { ref: r }), s);
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'ErrorBar', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j() {
        return j = Object.assign || function (k) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }
    function k(l, m) {
        return function (n) {
            if (Array.isArray(n))
                return n;
        }(l) || function (n, o) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(n)))
                return;
            var p = [], q = !0, r = !1, s = void 0;
            try {
                for (var t, u = n[Symbol.iterator](); !(q = (t = u.next()).done) && (p.push(t.value), !o || p.length !== o); q = !0);
            } catch (n) {
                r = !0, s = n;
            } finally {
                try {
                    q || null == u.return || u.return();
                } finally {
                    if (r)
                        throw s;
                }
            }
            return p;
        }(l, m) || function (n, o) {
            if (!n)
                return;
            if ('string' == typeof n)
                return _l(n, o);
            var p = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === p && n.constructor && (p = n.constructor.name);
            if ('Map' === p || 'Set' === p)
                return Array.from(n);
            if ('Arguments' === p || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                return _l(n, o);
        }(l, m) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _l(m, n) {
        (null == n || n > m.length) && (n = m.length);
        for (var o = 0, p = new Array(n); o < n; o++)
            p[o] = m[o];
        return p;
    }
    function o(p, q) {
        if (null == p)
            return {};
        var r, s, t = function (u, v) {
                if (null == u)
                    return {};
                var w, x, y = {}, z = Object.keys(u);
                for (x = 0; x < z.length; x++)
                    w = z[x], v.indexOf(w) >= 0 || (y[w] = u[w]);
                return y;
            }(p, q);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(p);
            for (s = 0; s < u.length; s++)
                r = u[s], q.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(p, r) && (t[r] = p[r]);
        }
        return t;
    }
    function _t(u) {
        var v = u.offset, w = u.layout, x = u.width, y = u.dataKey, z = u.data, A = u.dataPointFormatter, B = u.xAxis, C = u.yAxis, D = o(u, [
                'offset',
                'layout',
                'width',
                'dataKey',
                'data',
                'dataPointFormatter',
                'xAxis',
                'yAxis'
            ]), E = (0, i.filterProps)(D), F = _t.map(function (G, H) {
                var I = A(G, _l), J = I.x, K = I.y, L = I.value, M = I.errorVal;
                if (!M)
                    return null;
                var N, O, P = [];
                if (Array.isArray(M)) {
                    var Q = k(M, 2);
                    N = Q[0], O = Q[1];
                } else
                    N = O = M;
                if ('vertical' === w) {
                    var R = B.scale, S = K + v, T = S + x, U = S - x, V = R(L - N), W = R(L + O);
                    P.push({
                        x1: W,
                        y1: T,
                        x2: W,
                        y2: U
                    }), P.push({
                        x1: V,
                        y1: S,
                        x2: W,
                        y2: S
                    }), P.push({
                        x1: V,
                        y1: T,
                        x2: V,
                        y2: U
                    });
                } else if ('horizontal' === w) {
                    var X = C.scale, Y = J + v, Z = Y - x, $ = Y + x, ab = X(L - N), bb = X(L + O);
                    P.push({
                        x1: Z,
                        y1: bb,
                        x2: $,
                        y2: bb
                    }), P.push({
                        x1: Y,
                        y1: ab,
                        x2: Y,
                        y2: bb
                    }), P.push({
                        x1: Z,
                        y1: ab,
                        x2: $,
                        y2: ab
                    });
                }
                return a(u).createElement(h.Layer, j({
                    className: 'recharts-errorBar',
                    key: 'bar-'.concat(H)
                }, E), P.map(function (cb, db) {
                    return a(u).createElement('line', j({}, cb, { key: 'line-'.concat(db) }));
                }));
            });
        return a(u).createElement(h.Layer, { className: 'recharts-errorBars' }, F);
    }
    _t.defaultProps = {
        stroke: 'black',
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: 'horizontal'
    }, _t.displayName = 'ErrorBar';
}), d.register('.....', function (e, f) {
    b(e.exports, 'Cell', function () {
        return d;
    });
    var g = function (h) {
        return null;
    };
    g.displayName = 'Cell';
}), d.register('.....', function (e, f) {
    b(e.exports, 'LabelList', function () {
        return _J;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function r(s) {
        return function (t) {
            if (Array.isArray(t))
                return _s(t);
        }(s) || function (t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
        }(s) || function (t, u) {
            if (!t)
                return;
            if ('string' == typeof t)
                return _s(t, u);
            var v = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === v && t.constructor && (v = t.constructor.name);
            if ('Map' === v || 'Set' === v)
                return Array.from(t);
            if ('Arguments' === v || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
                return _s(t, u);
        }(s) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _s(t, u) {
        (null == u || u > t.length) && (u = t.length);
        for (var v = 0, w = new Array(u); v < u; v++)
            w[v] = t[v];
        return w;
    }
    function v() {
        return v = Object.assign || function (w) {
            for (var x = 1; x < arguments.length; x++) {
                var y = arguments[x];
                for (var z in y)
                    Object.prototype.hasOwnProperty.call(y, z) && (w[z] = y[z]);
            }
            return w;
        }, v.apply(this, arguments);
    }
    function w(x, y) {
        var z = Object.keys(x);
        if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(x);
            y && (A = A.filter(function (B) {
                return Object.getOwnPropertyDescriptor(x, B).enumerable;
            })), z.push.apply(z, A);
        }
        return z;
    }
    function z(A) {
        for (var B = 1; B < arguments.length; B++) {
            var C = null != arguments[B] ? arguments[B] : {};
            B % 2 ? w(Object(C), !0).forEach(function (D) {
                _C(A, D, C[D]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(C)) : w(Object(C)).forEach(function (D) {
                Object.defineProperty(A, D, Object.getOwnPropertyDescriptor(C, D));
            });
        }
        return A;
    }
    function _C(D, E, F) {
        return E in D ? Object.defineProperty(D, E, {
            value: F,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : D[E] = F, D;
    }
    function D(E, F) {
        if (null == E)
            return {};
        var G, H, I = function (J, K) {
                if (null == J)
                    return {};
                var L, M, N = {}, O = Object.keys(J);
                for (M = 0; M < O.length; M++)
                    L = O[M], K.indexOf(L) >= 0 || (N[L] = J[L]);
                return N;
            }(E, F);
        if (Object.getOwnPropertySymbols) {
            var J = Object.getOwnPropertySymbols(E);
            for (H = 0; H < J.length; H++)
                G = J[H], F.indexOf(G) >= 0 || Object.prototype.propertyIsEnumerable.call(E, G) && (I[G] = E[G]);
        }
        return I;
    }
    var I = {
        valueAccessor: function (J) {
            return a(k)(J.value) ? a(j)(J.value) : J.value;
        }
    };
    function _J(K) {
        var L = K.data, M = K.valueAccessor, N = K.dataKey, O = K.clockWise, P = K.id, Q = K.textBreakAll, R = D(K, [
                'data',
                'valueAccessor',
                'dataKey',
                'clockWise',
                'id',
                'textBreakAll'
            ]);
        return L && L.length ? a(l).createElement(n.Layer, { className: 'recharts-label-list' }, L.map(function (S, T) {
            var U = a(i)(N) ? M(S, T) : (0, p.getValueByDataKey)(S && S.payload, N), V = a(i)(P) ? {} : { id: ''.concat(P, '-').concat(T) };
            return a(l).createElement(m.Label, v({}, (0, q.filterProps)(S, !0), R, V, {
                parentViewBox: S.parentViewBox,
                index: T,
                value: U,
                textBreakAll: Q,
                viewBox: m.Label.parseViewBox(a(i)(O) ? S : z(z({}, S), {}, { clockWise: O })),
                key: 'label-'.concat(T)
            }));
        })) : null;
    }
    function R(S, T) {
        return S ? !0 === S ? a(l).createElement(_J, {
            key: 'labelList-implicit',
            data: T
        }) : a(l).isValidElement(S) || a(P)(S) ? a(l).createElement(_J, {
            key: 'labelList-implicit',
            data: T,
            content: S
        }) : a(O)(S) ? a(l).createElement(_J, v({ data: T }, S, { key: 'labelList-implicit' })) : null : null;
    }
    _J.displayName = 'LabelList', _J.renderCallByParent = function (S, T) {
        var U = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!S || !S.children && U && !S.label)
            return null;
        var V = S.children, W = (0, o.findAllByType)(V, _J.displayName).map(function (X, Y) {
                return (0, l.cloneElement)(X, {
                    data: T,
                    key: 'labelList-'.concat(Y)
                });
            });
        if (!U)
            return W;
        var X = R(S.label, T);
        return [X].concat(r(W));
    }, _J.defaultProps = I;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        var h = null == g ? 0 : g.length;
        return h ? g[h - 1] : void 0;
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Label', function () {
        return _D;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....');
    function q(r) {
        return function (s) {
            if (Array.isArray(s))
                return _r(s);
        }(r) || function (s) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(s))
                return Array.from(s);
        }(r) || function (s, t) {
            if (!s)
                return;
            if ('string' == typeof s)
                return _r(s, t);
            var u = Object.prototype.toString.call(s).slice(8, -1);
            'Object' === u && s.constructor && (u = s.constructor.name);
            if ('Map' === u || 'Set' === u)
                return Array.from(s);
            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                return _r(s, t);
        }(r) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _r(s, t) {
        (null == t || t > s.length) && (t = s.length);
        for (var u = 0, v = new Array(t); u < t; u++)
            v[u] = s[u];
        return v;
    }
    function u(v, w) {
        var x = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(v);
            w && (y = y.filter(function (z) {
                return Object.getOwnPropertyDescriptor(v, z).enumerable;
            })), x.push.apply(x, y);
        }
        return x;
    }
    function x(y) {
        for (var z = 1; z < arguments.length; z++) {
            var A = null != arguments[z] ? arguments[z] : {};
            z % 2 ? u(Object(A), !0).forEach(function (B) {
                _A(y, B, A[B]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(A)) : u(Object(A)).forEach(function (B) {
                Object.defineProperty(y, B, Object.getOwnPropertyDescriptor(A, B));
            });
        }
        return y;
    }
    function _A(B, C, D) {
        return C in B ? Object.defineProperty(B, C, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : B[C] = D, B;
    }
    function B() {
        return B = Object.assign || function (C) {
            for (var D = 1; D < arguments.length; D++) {
                var E = arguments[D];
                for (var F in E)
                    Object.prototype.hasOwnProperty.call(E, F) && (C[F] = E[F]);
            }
            return C;
        }, B.apply(this, arguments);
    }
    var C = function (D, E, F) {
        var G, H, I = D.position, J = D.viewBox, K = D.offset, L = D.className, M = J, N = M.cx, O = M.cy, P = M.innerRadius, Q = M.outerRadius, R = M.startAngle, S = M.endAngle, T = M.clockWise, U = (P + Q) / 2, V = function (W, X) {
                return (0, n.mathSign)(X - W) * Math.min(Math.abs(X - W), 360);
            }(R, S), W = V >= 0 ? 1 : -1;
        'insideStart' === I ? (G = R + W * K, H = T) : 'insideEnd' === I ? (G = S - W * K, H = !T) : 'end' === I && (G = S + W * K, H = T), H = V <= 0 ? H : !H;
        var X = (0, o.polarToCartesian)(N, O, U, G), Y = (0, o.polarToCartesian)(N, O, U, G + 359 * (H ? 1 : -1)), Z = 'M'.concat(X.x, ',').concat(X.y, '\n    A').concat(U, ',').concat(U, ',0,1,').concat(H ? 0 : 1, ',\n    ').concat(Y.x, ',').concat(Y.y), $ = a(i)(D.id) ? (0, n.uniqueId)('recharts-radial-line-') : D.id;
        return a(j).createElement('text', B({}, F, {
            dominantBaseline: 'central',
            className: a(k)('recharts-radial-bar-label', L)
        }), a(j).createElement('defs', null, a(j).createElement('path', {
            id: $,
            d: Z
        })), a(j).createElement('textPath', { xlinkHref: '#'.concat($) }, E));
    };
    function _D(E) {
        var F, G = E.viewBox, H = E.position, I = E.value, J = E.children, K = E.content, L = E.className, M = void 0 === u ? '' : u, N = E.textBreakAll;
        if (!G || a(i)(I) && a(i)(q) && !(0, j.isValidElement)(_r) && !a(h)(_r))
            return null;
        if ((0, j.isValidElement)(_r))
            return (0, j.cloneElement)(_r, E);
        if (a(h)(_r)) {
            if (F = (0, j.createElement)(_r, E), (0, j.isValidElement)(F))
                return F;
        } else
            F = function (O) {
                var P = O.value, Q = O.formatter, R = a(i)(O.children) ? P : O.children;
                return a(h)(Q) ? Q(R) : R;
            }(E);
        var O = function (P) {
                return (0, n.isNumber)(P.cx);
            }(G), P = (0, p.filterProps)(E, !0);
        if (O && ('insideStart' === H || 'insideEnd' === H || 'end' === H))
            return C(E, F, P);
        var Q = O ? function (R) {
            var S = R.viewBox, T = R.offset, U = R.position, V = S, W = V.cx, X = V.cy, Y = V.innerRadius, Z = V.outerRadius, $ = (V.startAngle + V.endAngle) / 2;
            if ('outside' === U) {
                var ab = (0, o.polarToCartesian)(W, X, Z + T, $), bb = ab.x;
                return {
                    x: bb,
                    y: ab.y,
                    textAnchor: bb >= W ? 'start' : 'end',
                    verticalAnchor: 'middle'
                };
            }
            if ('center' === U)
                return {
                    x: W,
                    y: X,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle'
                };
            if ('centerTop' === U)
                return {
                    x: W,
                    y: X,
                    textAnchor: 'middle',
                    verticalAnchor: 'start'
                };
            if ('centerBottom' === U)
                return {
                    x: W,
                    y: X,
                    textAnchor: 'middle',
                    verticalAnchor: 'end'
                };
            var cb = (Y + Z) / 2, db = (0, o.polarToCartesian)(W, X, cb, $);
            return {
                x: db.x,
                y: db.y,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            };
        }(E) : function (R) {
            var S = R.viewBox, T = R.parentViewBox, U = R.offset, V = R.position, W = S, X = W.x, Y = W.y, Z = W.width, $ = W.height, ab = $ >= 0 ? 1 : -1, bb = ab * U, cb = ab > 0 ? 'end' : 'start', db = ab > 0 ? 'start' : 'end', eb = Z >= 0 ? 1 : -1, fb = eb * U, gb = eb > 0 ? 'end' : 'start', hb = eb > 0 ? 'start' : 'end';
            if ('top' === V)
                return x(x({}, {
                    x: X + Z / 2,
                    y: Y - ab * U,
                    textAnchor: 'middle',
                    verticalAnchor: cb
                }), T ? {
                    height: Math.max(Y - T.y, 0),
                    width: Z
                } : {});
            if ('bottom' === V)
                return x(x({}, {
                    x: X + Z / 2,
                    y: Y + $ + bb,
                    textAnchor: 'middle',
                    verticalAnchor: db
                }), T ? {
                    height: Math.max(T.y + T.height - (Y + $), 0),
                    width: Z
                } : {});
            if ('left' === V) {
                var ib = {
                    x: X - fb,
                    y: Y + $ / 2,
                    textAnchor: gb,
                    verticalAnchor: 'middle'
                };
                return x(x({}, ib), T ? {
                    width: Math.max(ib.x - T.x, 0),
                    height: $
                } : {});
            }
            if ('right' === V) {
                var jb = {
                    x: X + Z + fb,
                    y: Y + $ / 2,
                    textAnchor: hb,
                    verticalAnchor: 'middle'
                };
                return x(x({}, jb), T ? {
                    width: Math.max(T.x + T.width - jb.x, 0),
                    height: $
                } : {});
            }
            var kb = T ? {
                width: Z,
                height: $
            } : {};
            return 'insideLeft' === V ? x({
                x: X + fb,
                y: Y + $ / 2,
                textAnchor: hb,
                verticalAnchor: 'middle'
            }, kb) : 'insideRight' === V ? x({
                x: X + Z - fb,
                y: Y + $ / 2,
                textAnchor: gb,
                verticalAnchor: 'middle'
            }, kb) : 'insideTop' === V ? x({
                x: X + Z / 2,
                y: Y + bb,
                textAnchor: 'middle',
                verticalAnchor: db
            }, kb) : 'insideBottom' === V ? x({
                x: X + Z / 2,
                y: Y + $ - bb,
                textAnchor: 'middle',
                verticalAnchor: cb
            }, kb) : 'insideTopLeft' === V ? x({
                x: X + fb,
                y: Y + bb,
                textAnchor: hb,
                verticalAnchor: db
            }, kb) : 'insideTopRight' === V ? x({
                x: X + Z - fb,
                y: Y + bb,
                textAnchor: gb,
                verticalAnchor: db
            }, kb) : 'insideBottomLeft' === V ? x({
                x: X + fb,
                y: Y + $ - bb,
                textAnchor: hb,
                verticalAnchor: cb
            }, kb) : 'insideBottomRight' === V ? x({
                x: X + Z - fb,
                y: Y + $ - bb,
                textAnchor: gb,
                verticalAnchor: cb
            }, kb) : a(g)(V) && ((0, n.isNumber)(V.x) || (0, n.isPercent)(V.x)) && ((0, n.isNumber)(V.y) || (0, n.isPercent)(V.y)) ? x({
                x: X + (0, n.getPercentValue)(V.x, Z),
                y: Y + (0, n.getPercentValue)(V.y, $),
                textAnchor: 'end',
                verticalAnchor: 'end'
            }, kb) : x({
                x: X + Z / 2,
                y: Y + $ / 2,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            }, kb);
        }(E);
        return a(j).createElement(l.Text, B({ className: a(k)('recharts-label', _A) }, P, Q, { breakAll: _D }), F);
    }
    _D.displayName = 'Label', _D.defaultProps = { offset: 5 };
    var Q = function (R) {
            var S = R.cx, T = R.cy, U = R.angle, V = R.startAngle, W = R.endAngle, X = R.r, Y = R.radius, Z = R.innerRadius, $ = R.outerRadius, ab = R.x, bb = R.y, cb = R.top, db = R.left, eb = R.width, fb = R.height, gb = R.clockWise, hb = R.labelViewBox;
            if (hb)
                return hb;
            if ((0, n.isNumber)(eb) && (0, n.isNumber)(fb)) {
                if ((0, n.isNumber)(ab) && (0, n.isNumber)(bb))
                    return {
                        x: ab,
                        y: bb,
                        width: eb,
                        height: fb
                    };
                if ((0, n.isNumber)(cb) && (0, n.isNumber)(db))
                    return {
                        x: cb,
                        y: db,
                        width: eb,
                        height: fb
                    };
            }
            return (0, n.isNumber)(ab) && (0, n.isNumber)(bb) ? {
                x: ab,
                y: bb,
                width: 0,
                height: 0
            } : (0, n.isNumber)(S) && (0, n.isNumber)(T) ? {
                cx: S,
                cy: T,
                startAngle: V || U || 0,
                endAngle: W || U || 0,
                innerRadius: Z || 0,
                outerRadius: $ || Y || X || 0,
                clockWise: gb
            } : R.viewBox ? R.viewBox : {};
        }, R = function (S, T) {
            return S ? !0 === S ? a(j).createElement(_D, {
                key: 'label-implicit',
                viewBox: T
            }) : (0, n.isNumOrStr)(S) ? a(j).createElement(_D, {
                key: 'label-implicit',
                viewBox: T,
                value: S
            }) : (0, j.isValidElement)(S) ? S.type === _D ? (0, j.cloneElement)(S, {
                key: 'label-implicit',
                viewBox: T
            }) : a(j).createElement(_D, {
                key: 'label-implicit',
                content: S,
                viewBox: T
            }) : a(h)(S) ? a(j).createElement(_D, {
                key: 'label-implicit',
                content: S,
                viewBox: T
            }) : a(g)(S) ? a(j).createElement(_D, B({ viewBox: T }, S, { key: 'label-implicit' })) : null : null;
        };
    _D.parseViewBox = Q, _D.renderCallByParent = function (S, T) {
        var U = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!S || !S.children && U && !S.label)
            return null;
        var V = S.children, W = Q(S), X = (0, I.findAllByType)(V, _D.displayName).map(function (Y, Z) {
                return (0, j.cloneElement)(Y, {
                    viewBox: T || W,
                    key: 'label-'.concat(Z)
                });
            });
        if (!U)
            return X;
        var Y = R(S.label, T || W);
        return [Y].concat(q(X));
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Text', function () {
        return _T;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    function o(p) {
        return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (q) {
            return typeof q;
        } : function (q) {
            return q && 'function' == typeof Symbol && q.constructor === Symbol && q !== Symbol.prototype ? 'symbol' : typeof q;
        }, o(p);
    }
    function p() {
        return p = Object.assign || function (q) {
            for (var r = 1; r < arguments.length; r++) {
                var s = arguments[r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
    }
    function q(r, s) {
        if (null == r)
            return {};
        var t, u, v = function (w, x) {
                if (null == w)
                    return {};
                var y, z, A = {}, B = Object.keys(w);
                for (z = 0; z < B.length; z++)
                    y = B[z], x.indexOf(y) >= 0 || (A[y] = w[y]);
                return A;
            }(r, s);
        if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(r);
            for (u = 0; u < w.length; u++)
                t = w[u], s.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(r, t) && (v[t] = r[t]);
        }
        return v;
    }
    function v(w, x) {
        if (!(w instanceof x))
            throw new TypeError('Cannot call a class as a function');
    }
    function w(x, y) {
        for (var z = 0; z < y.length; z++) {
            var A = y[z];
            A.enumerable = A.enumerable || !1, A.configurable = !0, 'value' in A && (A.writable = !0), Object.defineProperty(x, A.key, A);
        }
    }
    function z(A, B) {
        return z = Object.setPrototypeOf || function (C, D) {
            return C.__proto__ = D, C;
        }, z(A, B);
    }
    function A(B) {
        var C = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (B) {
                return !1;
            }
        }();
        return function () {
            var D, E = _D(B);
            if (C) {
                var F = _D(this).constructor;
                D = Reflect.construct(E, arguments, F);
            } else
                D = E.apply(this, arguments);
            return _C(this, D);
        };
    }
    function _C(D, E) {
        return !E || 'object' !== o(E) && 'function' != typeof E ? function (F) {
            if (void 0 === F)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return F;
        }(D) : E;
    }
    function _D(E) {
        return _D = Object.setPrototypeOf ? Object.getPrototypeOf : function (F) {
            return F.__proto__ || Object.getPrototypeOf(F);
        }, _D(E);
    }
    function E(F, G) {
        return function (H) {
            if (Array.isArray(H))
                return H;
        }(F) || function (H, I) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(H)))
                return;
            var J = [], K = !0, L = !1, M = void 0;
            try {
                for (var N, O = H[Symbol.iterator](); !(K = (N = O.next()).done) && (J.push(N.value), !I || J.length !== I); K = !0);
            } catch (H) {
                L = !0, M = H;
            } finally {
                try {
                    K || null == O.return || O.return();
                } finally {
                    if (L)
                        throw M;
                }
            }
            return J;
        }(F, G) || function (H, I) {
            if (!H)
                return;
            if ('string' == typeof H)
                return _F(H, I);
            var J = Object.prototype.toString.call(H).slice(8, -1);
            'Object' === J && H.constructor && (J = H.constructor.name);
            if ('Map' === J || 'Set' === J)
                return Array.from(H);
            if ('Arguments' === J || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J))
                return _F(H, I);
        }(F, G) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _F(G, H) {
        (null == H || H > G.length) && (H = G.length);
        for (var I = 0, J = new Array(H); I < H; I++)
            J[I] = G[I];
        return J;
    }
    function I(J, K) {
        var L = Object.keys(J);
        if (Object.getOwnPropertySymbols) {
            var M = Object.getOwnPropertySymbols(J);
            K && (M = M.filter(function (N) {
                return Object.getOwnPropertyDescriptor(J, N).enumerable;
            })), L.push.apply(L, M);
        }
        return L;
    }
    function L(M) {
        for (var N = 1; N < arguments.length; N++) {
            var O = null != arguments[N] ? arguments[N] : {};
            N % 2 ? I(Object(O), !0).forEach(function (P) {
                _O(M, P, O[P]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(O)) : I(Object(O)).forEach(function (P) {
                Object.defineProperty(M, P, Object.getOwnPropertyDescriptor(O, P));
            });
        }
        return M;
    }
    function _O(P, Q, R) {
        return Q in P ? Object.defineProperty(P, Q, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : P[Q] = R, P;
    }
    var P = /[ \f\n\r\t\v\u2028\u2029]+/, Q = function (R) {
            try {
                var S = [];
                return a(w)(R.children) || (S = R.breakAll ? R.children.toString().split('') : R.children.toString().split(P)), {
                    wordsWithComputedWidth: S.map(function (T) {
                        return {
                            word: T,
                            width: (0, n.getStringSize)(T, R.style).width
                        };
                    }),
                    spaceWidth: R.breakAll ? 0 : (0, n.getStringSize)('\xA0', R.style).width
                };
            } catch (a) {
                return null;
            }
        }, R = function (S) {
            return [{ words: a(w)(S) ? [] : S.toString().split(P) }];
        }, S = function (T, U) {
            if ((T.width || T.scaleToFit) && !l.Global.isSsr && U) {
                var V = Q(T);
                return V ? function (W, X, Y, Z, $) {
                    var ab = (0, k.isNumber)(W.maxLines), bb = W.children, cb = function () {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function (db, eb) {
                                var fb = eb.word, gb = eb.width, hb = db[db.length - 1];
                                if (hb && (null == Z || $ || hb.width + gb + Y < Z))
                                    hb.words.push(fb), hb.width += gb + Y;
                                else {
                                    var ib = {
                                        words: [fb],
                                        width: gb
                                    };
                                    db.push(ib);
                                }
                                return db;
                            }, []);
                        }, db = cb(X);
                    if (!ab)
                        return db;
                    for (var eb, fb = function (gb) {
                                var hb = bb.slice(0, gb), ib = Q(L(L({}, W), {}, { children: hb + '\u2026' })).wordsWithComputedWidth, jb = cb(ib), kb = jb.length > W.maxLines || function (lb) {
                                        return lb.reduce(function (mb, nb) {
                                            return mb.width > nb.width ? mb : nb;
                                        });
                                    }(jb).width > Z;
                                return [
                                    kb,
                                    jb
                                ];
                            }, gb = 0, hb = bb.length - 1, ib = 0; gb <= hb && ib <= bb.length - 1;) {
                        var jb = Math.floor((gb + hb) / 2), kb = E(fb(jb - 1), 2), lb = kb[0], mb = kb[1], nb = E(fb(jb), 1)[0];
                        if (lb || nb || (gb = jb + 1), lb && nb && (hb = jb - 1), !lb && nb) {
                            eb = mb;
                            break;
                        }
                        ib++;
                    }
                    return eb || db;
                }(T, V.wordsWithComputedWidth, V.spaceWidth, T.width, T.scaleToFit) : R(T.children);
            }
            return R(T.children);
        }, _T = function (U) {
            !function (V, W) {
                if ('function' != typeof W && null !== W)
                    throw new TypeError('Super expression must either be null or a function');
                V.prototype = Object.create(W && W.prototype, {
                    constructor: {
                        value: V,
                        writable: !0,
                        configurable: !0
                    }
                }), W && z(V, W);
            }(l, U);
            var V, W, X, Y = A(l);
            function Z() {
                var $;
                v(this, Z);
                for (var ab = arguments.length, bb = new Array(ab), cb = 0; cb < ab; cb++)
                    bb[cb] = arguments[cb];
                return ($ = Y.call.apply(Y, [this].concat(bb))).state = {}, $;
            }
            return bb = Z, X = [{
                    key: 'getDerivedStateFromProps',
                    value: function (db, eb) {
                        if (db.width !== eb.prevWidth || db.scaleToFit !== eb.prevScaleToFit || db.children !== eb.prevChildren || db.style !== eb.prevStyle || db.breakAll !== eb.prevBreakAll) {
                            var fb = db.children !== eb.prevChildren || db.style !== eb.prevStyle || db.breakAll !== eb.prevBreakAll;
                            return {
                                prevWidth: db.width,
                                prevScaleToFit: db.scaleToFit,
                                prevChildren: db.children,
                                prevStyle: db.style,
                                wordsByLines: S(db, fb)
                            };
                        }
                        return null;
                    }
                }], (cb = [{
                    key: 'render',
                    value: function () {
                        var db = this.props, eb = db.dx, fb = db.dy, gb = db.textAnchor, hb = db.verticalAnchor, ib = db.scaleToFit, jb = db.angle, kb = db.lineHeight, lb = db.capHeight, mb = db.className, nb = db.breakAll, ob = q(db, [
                                'dx',
                                'dy',
                                'textAnchor',
                                'verticalAnchor',
                                'scaleToFit',
                                'angle',
                                'lineHeight',
                                'capHeight',
                                'className',
                                'breakAll'
                            ]), pb = this.state.wordsByLines;
                        if (!(0, k.isNumOrStr)(ob.x) || !(0, k.isNumOrStr)(ob.y))
                            return null;
                        var qb, rb = ob.x + ((0, k.isNumber)(eb) ? eb : 0), sb = ob.y + ((0, k.isNumber)(fb) ? fb : 0);
                        switch (hb) {
                        case 'start':
                            qb = $(i)('calc('.concat(lb, ')'));
                            break;
                        case 'middle':
                            qb = $(i)('calc('.concat((pb.length - 1) / 2, ' * -').concat(kb, ' + (').concat(lb, ' / 2))'));
                            break;
                        default:
                            qb = $(i)('calc('.concat(pb.length - 1, ' * -').concat(kb, ')'));
                        }
                        var tb = [];
                        if (ib) {
                            var ub = pb[0].width, vb = this.props.width;
                            tb.push('scale('.concat(((0, k.isNumber)(vb) ? vb / ub : 1) / ub, ')'));
                        }
                        return jb && tb.push('rotate('.concat(jb, ', ').concat(rb, ', ').concat(sb, ')')), tb.length && (ob.transform = tb.join(' ')), $(h).createElement('text', p({}, (0, m.filterProps)(ob, !0), {
                            x: rb,
                            y: sb,
                            className: $(j)('recharts-text', mb),
                            textAnchor: gb
                        }), pb.map(function (wb, xb) {
                            return $(h).createElement('tspan', {
                                x: rb,
                                dy: 0 === xb ? qb : kb,
                                key: xb
                            }, wb.words.join(nb ? '' : ' '));
                        }));
                    }
                }]) && w(bb.prototype, cb), X && w(bb, X), Z;
        }(h.Component);
    _T.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: '1em',
        capHeight: '0.71em',
        scaleToFit: !1,
        textAnchor: 'start',
        verticalAnchor: 'end'
    };
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 });
    var g = _k(d('.....')), h = d('.....'), i = _k(d('.....')), j = _k(d('.....'));
    function _k(l) {
        return l && l.__esModule ? l : { default: l };
    }
    var l = /((?:\-[a-z]+\-)?calc)/;
    e.exports.default = function (m) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
        return (0, g.default)(m).walk(function (o) {
            if ('function' === o.type && l.test(o.value)) {
                var p = g.default.stringify(o.nodes);
                if (!(p.indexOf('constant') >= 0 || p.indexOf('env') >= 0)) {
                    var q = h.parser.parse(p), r = (0, i.default)(q, n);
                    o.type = 'word', o.value = (0, j.default)(o.value, r, n);
                }
            }
        }, !0).toString();
    }, e.exports = e.exports.default;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        return this instanceof j ? (this.nodes = g(k), this) : new j(k);
    }
    j.prototype.toString = function () {
        return Array.isArray(this.nodes) ? i(this.nodes) : '';
    }, j.prototype.walk = function (k, l) {
        return h(this.nodes, k, l), this;
    }, j.unit = d('.....'), j.walk = h, j.stringify = i, e.exports = j;
}), d.register('.....', function (e, f) {
    var g = '('.charCodeAt(0), h = ')'.charCodeAt(0), i = '\''.charCodeAt(0), j = '"'.charCodeAt(0), k = '\\'.charCodeAt(0), l = '/'.charCodeAt(0), m = ','.charCodeAt(0), n = ':'.charCodeAt(0), o = '*'.charCodeAt(0);
    e.exports = function (p) {
        for (var q, r, s, t, u, v, w, x, y = [], z = p, A = 0, B = z.charCodeAt(A), C = z.length, D = [{ nodes: y }], E = 0, F = '', G = '', H = ''; A < C;)
            if (B <= 32) {
                q = A;
                do {
                    q += 1, B = z.charCodeAt(q);
                } while (B <= 32);
                t = z.slice(A, q), s = y[y.length - 1], B === h && E ? H = t : s && 'div' === s.type ? s.after = t : B === m || B === n || B === l && z.charCodeAt(q + 1) !== o ? G = t : y.push({
                    type: 'space',
                    sourceIndex: A,
                    value: t
                }), A = q;
            } else if (B === i || B === j) {
                q = A, t = {
                    type: 'string',
                    sourceIndex: A,
                    quote: r = B === i ? '\'' : '"'
                };
                do {
                    if (u = !1, ~(q = z.indexOf(r, q + 1)))
                        for (v = q; z.charCodeAt(v - 1) === k;)
                            v -= 1, u = !u;
                    else
                        q = (z += r).length - 1, t.unclosed = !0;
                } while (u);
                t.value = z.slice(A + 1, q), y.push(t), A = q + 1, B = z.charCodeAt(A);
            } else if (B === l && z.charCodeAt(A + 1) === o)
                t = {
                    type: 'comment',
                    sourceIndex: A
                }, -1 === (q = z.indexOf('*/', A)) && (t.unclosed = !0, q = z.length), t.value = z.slice(A + 2, q), y.push(t), A = q + 2, B = z.charCodeAt(A);
            else if (B === l || B === m || B === n)
                t = z[A], y.push({
                    type: 'div',
                    sourceIndex: A - G.length,
                    value: t,
                    before: G,
                    after: ''
                }), G = '', A += 1, B = z.charCodeAt(A);
            else if (g === B) {
                q = A;
                do {
                    q += 1, B = z.charCodeAt(q);
                } while (B <= 32);
                if (t = {
                        type: 'function',
                        sourceIndex: A - F.length,
                        value: F,
                        before: z.slice(A + 1, q)
                    }, A = q, 'url' === F && B !== i && B !== j) {
                    q -= 1;
                    do {
                        if (u = !1, ~(q = z.indexOf(')', q + 1)))
                            for (v = q; z.charCodeAt(v - 1) === k;)
                                v -= 1, u = !u;
                        else
                            q = (z += ')').length - 1, t.unclosed = !0;
                    } while (u);
                    w = q;
                    do {
                        w -= 1, B = z.charCodeAt(w);
                    } while (B <= 32);
                    t.nodes = A !== w + 1 ? [{
                            type: 'word',
                            sourceIndex: A,
                            value: z.slice(A, w + 1)
                        }] : [], t.unclosed && w + 1 !== q ? (t.after = '', t.nodes.push({
                        type: 'space',
                        sourceIndex: w + 1,
                        value: z.slice(w + 1, q)
                    })) : t.after = z.slice(w + 1, q), A = q + 1, B = z.charCodeAt(A), y.push(t);
                } else
                    E += 1, t.after = '', y.push(t), D.push(t), y = t.nodes = [], x = t;
                F = '';
            } else if (h === B && E)
                A += 1, B = z.charCodeAt(A), x.after = H, H = '', E -= 1, D.pop(), y = (x = D[E]).nodes;
            else {
                q = A;
                do {
                    B === k && (q += 1), q += 1, B = z.charCodeAt(q);
                } while (q < C && !(B <= 32 || B === i || B === j || B === m || B === n || B === l || B === g || B === h && E));
                t = z.slice(A, q), g === B ? F = t : y.push({
                    type: 'word',
                    sourceIndex: A,
                    value: t
                }), A = q;
            }
        for (A = D.length - 1; A; A -= 1)
            D[A].unclosed = !0;
        return D[0].nodes;
    };
}), d.register('.....', function (e, f) {
    e.exports = function e(g, h, i) {
        var j, k, l, m;
        for (j = 0, k = g.length; j < k; j += 1)
            l = g[j], i || (m = h(l, j, g)), !1 !== m && 'function' === l.type && Array.isArray(l.nodes) && e(l.nodes, h, i), i && h(l, j, g);
    };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j, k, l = h.type, m = h.value;
        return i && void 0 !== (k = i(h)) ? k : 'word' === l || 'space' === l ? m : 'string' === l ? (g = h.quote || '') + m + (h.unclosed ? '' : g) : 'comment' === l ? '/*' + m + (h.unclosed ? '' : '*/') : 'div' === l ? (h.before || '') + m + (h.after || '') : Array.isArray(h.nodes) ? (g = d(h.nodes), 'function' !== l ? g : m + '(' + (h.before || '') + g + (h.after || '') + (h.unclosed ? '' : ')')) : m;
    }
    function l(m, n) {
        var o, p;
        if (Array.isArray(m)) {
            for (l = '', p = m.length - 1; ~p; p -= 1)
                l = g(m[p], n) + l;
            return l;
        }
        return g(m, n);
    }
    e.exports = l;
}), d.register('.....', function (e, f) {
    var g = '-'.charCodeAt(0), h = '+'.charCodeAt(0), i = '.'.charCodeAt(0), j = 'e'.charCodeAt(0), k = 'E'.charCodeAt(0);
    e.exports = function (l) {
        for (var m, n = 0, o = l.length, p = !1, q = -1, r = !1; n < o;) {
            if ((m = l.charCodeAt(n)) >= 48 && m <= 57)
                r = !0;
            else if (m === j || m === k) {
                if (q > -1)
                    break;
                q = n;
            } else if (m === i) {
                if (p)
                    break;
                p = !0;
            } else {
                if (m !== h && m !== g)
                    break;
                if (0 !== n)
                    break;
            }
            n += 1;
        }
        return q + 1 === n && n--, !!r && {
            number: l.slice(0, n),
            unit: l.slice(n)
        };
    };
}), d.register('.....', function (e, f) {
    var g;
    b(e.exports, 'parser', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = function () {
        function i(j, k) {
            var l;
            if (Object.defineProperty(this, 'name', {
                    enumerable: !1,
                    writable: !1,
                    value: 'JisonParserError'
                }), null == j && (j = '???'), Object.defineProperty(this, 'message', {
                    enumerable: !1,
                    writable: !0,
                    value: j
                }), this.hash = k, k && k.exception instanceof Error) {
                var m = k.exception;
                this.message = m.message || j, l = m.stack;
            }
            l || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : l = new Error(j).stack), l && Object.defineProperty(this, 'stack', {
                enumerable: !1,
                writable: !1,
                value: l
            });
        }
        function l(m, n, o) {
            o = o || 0;
            for (var p = 0; p < n; p++)
                this.push(m), m += o;
        }
        function n(o, p) {
            for (p += o = this.length - o; o < p; o++)
                this.push(this[o]);
        }
        function o(p) {
            for (var q = [], r = 0, s = p.length; n < o; n++) {
                var t = p[n];
                'function' == typeof t ? (n++, t.apply(l, p[n])) : l.push(t);
            }
            return l;
        }
        'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(i.prototype, Error.prototype) : i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i.prototype.name = 'JisonParserError';
        var t = {
            trace: function () {
            },
            JisonParserError: i,
            yy: {},
            options: {
                type: 'lalr',
                hasPartialLrUpgradeOnConflict: !0,
                errorRecoveryTokenDiscardCount: 3
            },
            symbols_: {
                $accept: 0,
                $end: 1,
                ADD: 3,
                ANGLE: 16,
                CHS: 22,
                COMMA: 14,
                CSS_CPROP: 13,
                CSS_VAR: 12,
                DIV: 6,
                EMS: 20,
                EOF: 1,
                EXS: 21,
                FREQ: 18,
                LENGTH: 15,
                LPAREN: 7,
                MUL: 5,
                NESTED_CALC: 9,
                NUMBER: 11,
                PERCENTAGE: 28,
                PREFIX: 10,
                REMS: 23,
                RES: 19,
                RPAREN: 8,
                SUB: 4,
                TIME: 17,
                VHS: 24,
                VMAXS: 27,
                VMINS: 26,
                VWS: 25,
                css_value: 33,
                css_variable: 32,
                error: 2,
                expression: 29,
                math_expression: 30,
                value: 31
            },
            terminals_: {
                1: 'EOF',
                2: 'error',
                3: 'ADD',
                4: 'SUB',
                5: 'MUL',
                6: 'DIV',
                7: 'LPAREN',
                8: 'RPAREN',
                9: 'NESTED_CALC',
                10: 'PREFIX',
                11: 'NUMBER',
                12: 'CSS_VAR',
                13: 'CSS_CPROP',
                14: 'COMMA',
                15: 'LENGTH',
                16: 'ANGLE',
                17: 'TIME',
                18: 'FREQ',
                19: 'RES',
                20: 'EMS',
                21: 'EXS',
                22: 'CHS',
                23: 'REMS',
                24: 'VHS',
                25: 'VWS',
                26: 'VMINS',
                27: 'VMAXS',
                28: 'PERCENTAGE'
            },
            TERROR: 2,
            EOF: 1,
            originalQuoteName: null,
            originalParseError: null,
            cleanupAfterParse: null,
            constructParseErrorInfo: null,
            yyMergeLocationInfo: null,
            __reentrant_call_depth: 0,
            __error_infos: [],
            __error_recovery_infos: [],
            quoteName: function (u) {
                return '"' + u + '"';
            },
            getSymbolName: function (u) {
                if (this.terminals_[u])
                    return this.terminals_[u];
                var v = this.symbols_;
                for (var w in v)
                    if (v[w] === u)
                        return w;
                return null;
            },
            describeSymbol: function (u) {
                if (u !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[u])
                    return this.terminal_descriptions_[u];
                if (u === this.EOF)
                    return 'end of input';
                var v = this.getSymbolName(u);
                return v ? this.quoteName(v) : null;
            },
            collect_expected_token_set: function (u, v) {
                var w = this.TERROR, x = [], y = {};
                if (!v && this.state_descriptions_ && this.state_descriptions_[u])
                    return [this.state_descriptions_[u]];
                for (var z in this.table[u])
                    if ((z = +z) !== w) {
                        var A = v ? z : this.describeSymbol(z);
                        A && !y[A] && (x.push(A), y[A] = !0);
                    }
                return x;
            },
            productions_: function (u) {
                for (var v = [], w = u.pop, x = u.rule, y = 0, z = w.length; y < z; y++)
                    v.push([
                        w[y],
                        x[y]
                    ]);
                return v;
            }({
                pop: o([
                    29,
                    l,
                    [
                        30,
                        10
                    ],
                    31,
                    31,
                    32,
                    32,
                    l,
                    [
                        33,
                        15
                    ]
                ]),
                rule: o([
                    2,
                    l,
                    [
                        3,
                        5
                    ],
                    4,
                    7,
                    l,
                    [
                        1,
                        4
                    ],
                    2,
                    4,
                    6,
                    l,
                    [
                        1,
                        14
                    ],
                    2
                ])
            }),
            performAction: function (u, v, w) {
                var x = this.yy;
                x.parser, x.lexer;
                switch (u) {
                case 0:
                case 6:
                    this.$ = w[v - 1];
                    break;
                case 1:
                    return this.$ = w[v - 1], w[v - 1];
                case 2:
                case 3:
                case 4:
                case 5:
                    this.$ = {
                        type: 'MathExpression',
                        operator: w[v - 1],
                        left: w[v - 2],
                        right: w[v]
                    };
                    break;
                case 7:
                    this.$ = {
                        type: 'Calc',
                        value: w[v - 1]
                    };
                    break;
                case 8:
                    this.$ = {
                        type: 'Calc',
                        value: w[v - 1],
                        prefix: w[v - 5]
                    };
                    break;
                case 9:
                case 10:
                case 11:
                    this.$ = w[v];
                    break;
                case 12:
                    this.$ = {
                        type: 'Value',
                        value: parseFloat(w[v])
                    };
                    break;
                case 13:
                    this.$ = {
                        type: 'Value',
                        value: -1 * parseFloat(w[v])
                    };
                    break;
                case 14:
                    this.$ = {
                        type: 'CssVariable',
                        value: w[v - 1]
                    };
                    break;
                case 15:
                    this.$ = {
                        type: 'CssVariable',
                        value: w[v - 3],
                        fallback: w[v - 1]
                    };
                    break;
                case 16:
                    this.$ = {
                        type: 'LengthValue',
                        value: parseFloat(w[v]),
                        unit: /[a-z]+/.exec(w[v])[0]
                    };
                    break;
                case 17:
                    this.$ = {
                        type: 'AngleValue',
                        value: parseFloat(w[v]),
                        unit: /[a-z]+/.exec(w[v])[0]
                    };
                    break;
                case 18:
                    this.$ = {
                        type: 'TimeValue',
                        value: parseFloat(w[v]),
                        unit: /[a-z]+/.exec(w[v])[0]
                    };
                    break;
                case 19:
                    this.$ = {
                        type: 'FrequencyValue',
                        value: parseFloat(w[v]),
                        unit: /[a-z]+/.exec(w[v])[0]
                    };
                    break;
                case 20:
                    this.$ = {
                        type: 'ResolutionValue',
                        value: parseFloat(w[v]),
                        unit: /[a-z]+/.exec(w[v])[0]
                    };
                    break;
                case 21:
                    this.$ = {
                        type: 'EmValue',
                        value: parseFloat(w[v]),
                        unit: 'em'
                    };
                    break;
                case 22:
                    this.$ = {
                        type: 'ExValue',
                        value: parseFloat(w[v]),
                        unit: 'ex'
                    };
                    break;
                case 23:
                    this.$ = {
                        type: 'ChValue',
                        value: parseFloat(w[v]),
                        unit: 'ch'
                    };
                    break;
                case 24:
                    this.$ = {
                        type: 'RemValue',
                        value: parseFloat(w[v]),
                        unit: 'rem'
                    };
                    break;
                case 25:
                    this.$ = {
                        type: 'VhValue',
                        value: parseFloat(w[v]),
                        unit: 'vh'
                    };
                    break;
                case 26:
                    this.$ = {
                        type: 'VwValue',
                        value: parseFloat(w[v]),
                        unit: 'vw'
                    };
                    break;
                case 27:
                    this.$ = {
                        type: 'VminValue',
                        value: parseFloat(w[v]),
                        unit: 'vmin'
                    };
                    break;
                case 28:
                    this.$ = {
                        type: 'VmaxValue',
                        value: parseFloat(w[v]),
                        unit: 'vmax'
                    };
                    break;
                case 29:
                    this.$ = {
                        type: 'PercentageValue',
                        value: parseFloat(w[v]),
                        unit: '%'
                    };
                    break;
                case 30:
                    var y = w[v];
                    y.value *= -1, this.$ = y;
                }
            },
            table: function (u) {
                for (var v = [], w = u.len, x = u.symbol, y = u.type, z = u.state, A = u.mode, B = u.goto, C = 0, D = w.length; C < D; C++) {
                    for (var E = w[C], F = {}, G = 0; G < E; G++) {
                        var H = x.shift();
                        switch (y.shift()) {
                        case 2:
                            F[H] = [
                                A.shift(),
                                B.shift()
                            ];
                            break;
                        case 0:
                            F[H] = z.shift();
                            break;
                        default:
                            F[H] = [3];
                        }
                    }
                    v.push(F);
                }
                return v;
            }({
                len: o([
                    24,
                    1,
                    5,
                    23,
                    1,
                    18,
                    l,
                    [
                        0,
                        3
                    ],
                    1,
                    l,
                    [
                        0,
                        16
                    ],
                    l,
                    [
                        23,
                        4
                    ],
                    n,
                    [
                        28,
                        3
                    ],
                    0,
                    0,
                    16,
                    1,
                    6,
                    6,
                    l,
                    [
                        0,
                        3
                    ],
                    5,
                    1,
                    2,
                    n,
                    [
                        37,
                        3
                    ],
                    n,
                    [
                        20,
                        3
                    ],
                    5,
                    0,
                    0
                ]),
                symbol: o([
                    4,
                    7,
                    9,
                    11,
                    12,
                    l,
                    [
                        15,
                        19,
                        1
                    ],
                    1,
                    1,
                    l,
                    [
                        3,
                        4,
                        1
                    ],
                    n,
                    [
                        30,
                        19
                    ],
                    n,
                    [
                        29,
                        4
                    ],
                    7,
                    4,
                    10,
                    11,
                    n,
                    [
                        22,
                        14
                    ],
                    n,
                    [
                        19,
                        3
                    ],
                    n,
                    [
                        43,
                        22
                    ],
                    n,
                    [
                        23,
                        69
                    ],
                    n,
                    [
                        139,
                        4
                    ],
                    8,
                    n,
                    [
                        51,
                        24
                    ],
                    4,
                    n,
                    [
                        138,
                        15
                    ],
                    13,
                    n,
                    [
                        186,
                        5
                    ],
                    8,
                    n,
                    [
                        6,
                        6
                    ],
                    n,
                    [
                        5,
                        5
                    ],
                    9,
                    8,
                    14,
                    n,
                    [
                        159,
                        47
                    ],
                    n,
                    [
                        60,
                        10
                    ]
                ]),
                type: o([
                    l,
                    [
                        2,
                        19
                    ],
                    l,
                    [
                        0,
                        5
                    ],
                    1,
                    l,
                    [
                        2,
                        24
                    ],
                    l,
                    [
                        0,
                        4
                    ],
                    n,
                    [
                        22,
                        19
                    ],
                    n,
                    [
                        43,
                        42
                    ],
                    n,
                    [
                        23,
                        70
                    ],
                    n,
                    [
                        28,
                        25
                    ],
                    n,
                    [
                        45,
                        25
                    ],
                    n,
                    [
                        113,
                        54
                    ]
                ]),
                state: o([
                    1,
                    2,
                    8,
                    6,
                    7,
                    30,
                    n,
                    [
                        4,
                        3
                    ],
                    33,
                    37,
                    n,
                    [
                        5,
                        3
                    ],
                    38,
                    n,
                    [
                        4,
                        3
                    ],
                    39,
                    n,
                    [
                        4,
                        3
                    ],
                    40,
                    n,
                    [
                        4,
                        3
                    ],
                    42,
                    n,
                    [
                        21,
                        4
                    ],
                    50,
                    n,
                    [
                        5,
                        3
                    ],
                    51,
                    n,
                    [
                        4,
                        3
                    ]
                ]),
                mode: o([
                    l,
                    [
                        1,
                        179
                    ],
                    l,
                    [
                        2,
                        3
                    ],
                    n,
                    [
                        5,
                        5
                    ],
                    n,
                    [
                        6,
                        4
                    ],
                    l,
                    [
                        1,
                        57
                    ]
                ]),
                goto: o([
                    5,
                    3,
                    4,
                    24,
                    l,
                    [
                        9,
                        15,
                        1
                    ],
                    l,
                    [
                        25,
                        5,
                        1
                    ],
                    n,
                    [
                        24,
                        19
                    ],
                    31,
                    35,
                    32,
                    34,
                    n,
                    [
                        18,
                        14
                    ],
                    36,
                    n,
                    [
                        38,
                        19
                    ],
                    n,
                    [
                        19,
                        57
                    ],
                    n,
                    [
                        118,
                        4
                    ],
                    41,
                    n,
                    [
                        24,
                        19
                    ],
                    43,
                    35,
                    n,
                    [
                        16,
                        14
                    ],
                    44,
                    l,
                    [
                        2,
                        3
                    ],
                    28,
                    29,
                    2,
                    l,
                    [
                        3,
                        3
                    ],
                    28,
                    29,
                    3,
                    n,
                    [
                        53,
                        4
                    ],
                    l,
                    [
                        45,
                        5,
                        1
                    ],
                    n,
                    [
                        100,
                        42
                    ],
                    52,
                    n,
                    [
                        5,
                        4
                    ],
                    53
                ])
            }),
            defaultActions: function (u) {
                for (var v = {}, w = u.idx, x = u.goto, y = 0, z = w.length; y < z; y++) {
                    v[w[y]] = x[y];
                }
                return v;
            }({
                idx: o([
                    6,
                    7,
                    8,
                    l,
                    [
                        10,
                        16,
                        1
                    ],
                    33,
                    34,
                    39,
                    40,
                    41,
                    45,
                    47,
                    52,
                    53
                ]),
                goto: o([
                    9,
                    10,
                    11,
                    l,
                    [
                        16,
                        14,
                        1
                    ],
                    12,
                    1,
                    30,
                    13,
                    l,
                    [
                        4,
                        4,
                        1
                    ],
                    14,
                    15,
                    8
                ])
            }),
            parseError: function (u, v, w) {
                if (!v.recoverable)
                    throw 'function' == typeof this.trace && this.trace(u), w || (w = this.JisonParserError), new w(u, v);
                'function' == typeof this.trace && this.trace(u), v.destroy();
            },
            parse: function (u) {
                var v, w = this, x = new Array(128), y = new Array(128), z = new Array(128), A = this.table, B = 0, C = 0, D = (this.TERROR, this.EOF), E = (this.options.errorRecoveryTokenDiscardCount, [
                        0,
                        54
                    ]);
                v = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
                var F = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };
                function G() {
                    var H = v.fastLex();
                    return 'number' != typeof H && (H = w.symbols_[H] || H), H || D;
                }
                'function' != typeof assert || assert, this.yyGetSharedState = function () {
                    return F;
                }, function (I, J) {
                    for (var K in J)
                        void 0 === I[K] && Object.prototype.hasOwnProperty.call(J, K) && (I[K] = J[K]);
                }(F, this.yy), F.lexer = v, F.parser = this, 'function' == typeof F.parseError ? this.parseError = function (I, J, K) {
                    return K || (K = this.JisonParserError), F.parseError.call(this, I, J, K);
                } : this.parseError = this.originalParseError, 'function' == typeof F.quoteName ? this.quoteName = function (I) {
                    return F.quoteName.call(this, I);
                } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function (I, J, K) {
                    var L, M;
                    J && ((F.post_parse || this.post_parse) && (M = this.constructParseErrorInfo(null, null, null, !1)), F.post_parse && void 0 !== (L = F.post_parse.call(this, F, I, M)) && (I = L), this.post_parse && void 0 !== (L = this.post_parse.call(this, F, I, M)) && (I = L), M && M.destroy && M.destroy());
                    if (this.__reentrant_call_depth > 1)
                        return I;
                    if (v.cleanupAfterLex && v.cleanupAfterLex(K), F && (F.lexer = void 0, F.parser = void 0, v.yy === F && (v.yy = void 0)), F = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, x.length = 0, y.length = 0, z.length = 0, B = 0, !K) {
                        for (var N = this.__error_infos.length - 1; N >= 0; N--) {
                            var O = this.__error_infos[N];
                            O && 'function' == typeof O.destroy && O.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return I;
                }, this.constructParseErrorInfo = function (I, J, K, L) {
                    var M = {
                        errStr: I,
                        exception: J,
                        text: v.match,
                        value: v.yytext,
                        token: this.describeSymbol(C) || C,
                        token_id: C,
                        line: v.yylineno,
                        expected: K,
                        recoverable: L,
                        state: _I,
                        action: _J,
                        new_state: _P,
                        symbol_stack: x,
                        state_stack: y,
                        value_stack: z,
                        stack_pointer: B,
                        yy: F,
                        lexer: v,
                        parser: this,
                        destroy: function () {
                            var N = !!this.recoverable;
                            for (var O in this)
                                this.hasOwnProperty(O) && 'object' == typeof O && (this[O] = void 0);
                            this.recoverable = N;
                        }
                    };
                    return this.__error_infos.push(M), M;
                };
                var _I, _J, K, L, M, N, O, _P, Q = function () {
                        var R = v.lex();
                        return 'number' != typeof R && (R = w.symbols_[R] || R), R || D;
                    }, R = {
                        $: !0,
                        _$: void 0,
                        yy: F
                    }, S = !1;
                try {
                    if (this.__reentrant_call_depth++, v.setInput(H, F), 'function' == typeof v.canIUse)
                        v.canIUse().fastLex && (Q = G);
                    for (z[B] = null, y[B] = 0, x[B] = 0, ++B, this.pre_parse && this.pre_parse.call(this, F), F.pre_parse && F.pre_parse.call(this, F), _P = y[B - 1];;) {
                        if (_I = _P, this.defaultActions[_I])
                            _J = 2, _P = this.defaultActions[_I];
                        else if (C || (C = Q()), L = A[_I] && A[_I][C] || E, _P = L[1], !(_J = L[0])) {
                            var T, U = this.describeSymbol(C) || C, V = this.collect_expected_token_set(_I);
                            T = 'number' == typeof v.yylineno ? 'Parse error on line ' + (v.yylineno + 1) + ': ' : 'Parse error: ', 'function' == typeof v.showPosition && (T += '\n' + v.showPosition(69, 10) + '\n'), V.length ? T += 'Expecting ' + V.join(', ') + ', got unexpected ' + U : T += 'Unexpected ' + U, M = this.constructParseErrorInfo(T, null, V, !1), void 0 !== (K = this.parseError(M.errStr, M, this.JisonParserError)) && (S = K);
                            break;
                        }
                        switch (_J) {
                        default:
                            if (_J instanceof Array) {
                                M = this.constructParseErrorInfo('Parse Error: multiple actions possible at state: ' + _I + ', token: ' + C, null, null, !1), void 0 !== (K = this.parseError(M.errStr, M, this.JisonParserError)) && (S = K);
                                break;
                            }
                            M = this.constructParseErrorInfo('Parsing halted. No viable error recovery approach available due to internal system failure.', null, null, !1), void 0 !== (K = this.parseError(M.errStr, M, this.JisonParserError)) && (S = K);
                            break;
                        case 1:
                            x[B] = C, z[B] = v.yytext, y[B] = _P, ++B, C = 0;
                            continue;
                        case 2:
                            if (N = (O = this.productions_[_P - 1])[1], void 0 !== (K = this.performAction.call(R, _P, B - 1, z))) {
                                S = K;
                                break;
                            }
                            B -= N;
                            var W = O[0];
                            x[B] = W, z[B] = R.$, _P = A[y[B - 1]][W], y[B] = _P, ++B;
                            continue;
                        case 3:
                            -2 !== B && (S = !0, B--, void 0 !== z[B] && (S = z[B]));
                        }
                        break;
                    }
                } catch (H) {
                    if (H instanceof this.JisonParserError)
                        throw H;
                    if (v && 'function' == typeof v.JisonLexerError && H instanceof v.JisonLexerError)
                        throw H;
                    M = this.constructParseErrorInfo('Parsing aborted due to exception.', H, null, !1), S = !1, void 0 !== (K = this.parseError(M.errStr, M, this.JisonParserError)) && (S = K);
                } finally {
                    S = this.cleanupAfterParse(S, !0, !0), this.__reentrant_call_depth--;
                }
                return S;
            }
        };
        t.originalParseError = t.parseError, t.originalQuoteName = t.quoteName;
        var u = function () {
            function v(w, x) {
                var y;
                if (Object.defineProperty(this, 'name', {
                        enumerable: !1,
                        writable: !1,
                        value: 'JisonLexerError'
                    }), null == w && (w = '???'), Object.defineProperty(this, 'message', {
                        enumerable: !1,
                        writable: !0,
                        value: w
                    }), this.hash = x, x && x.exception instanceof Error) {
                    var z = x.exception;
                    this.message = z.message || w, y = z.stack;
                }
                y || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : y = new Error(w).stack), y && Object.defineProperty(this, 'stack', {
                    enumerable: !1,
                    writable: !1,
                    value: y
                });
            }
            'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(v.prototype, Error.prototype) : v.prototype = Object.create(Error.prototype), v.prototype.constructor = v, v.prototype.name = 'JisonLexerError';
            var y = {
                EOF: 1,
                ERROR: 2,
                __currentRuleSet__: null,
                __error_infos: [],
                __decompressed: !1,
                done: !1,
                _backtrack: !1,
                _input: '',
                _more: !1,
                _signaled_error_token: !1,
                conditionStack: [],
                match: '',
                matched: '',
                matches: !1,
                yytext: '',
                offset: 0,
                yyleng: 0,
                yylineno: 0,
                yylloc: null,
                constructLexErrorInfo: function (z, A, B) {
                    if (z = '' + z, null == B && (B = !(z.indexOf('\n') > 0 && z.indexOf('^') > 0)), this.yylloc && B)
                        if ('function' == typeof this.prettyPrintRange) {
                            this.prettyPrintRange(this.yylloc);
                            /\n\s*$/.test(z) || (z += '\n'), z += '\n  Erroneous area:\n' + this.prettyPrintRange(this.yylloc);
                        } else if ('function' == typeof this.showPosition) {
                            var C = this.showPosition();
                            C && (z.length && '\n' !== z[z.length - 1] && '\n' !== C[0] ? z += '\n' + C : z += C);
                        }
                    var D = {
                        errStr: z,
                        recoverable: !!A,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function () {
                            var E = !!this.recoverable;
                            for (var F in this)
                                this.hasOwnProperty(F) && 'object' == typeof F && (this[F] = void 0);
                            this.recoverable = E;
                        }
                    };
                    return this.__error_infos.push(D), D;
                },
                parseError: function (z, A, B) {
                    if (B || (B = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && 'function' == typeof this.yy.parser.parseError)
                            return this.yy.parser.parseError.call(this, z, A, B) || this.ERROR;
                        if ('function' == typeof this.yy.parseError)
                            return this.yy.parseError.call(this, z, A, B) || this.ERROR;
                    }
                    throw new B(z, A);
                },
                yyerror: function (z) {
                    var A = '';
                    this.yylloc && (A = ' on line ' + (this.yylineno + 1));
                    var B = this.constructLexErrorInfo('Lexical error' + A + ': ' + z, this.options.lexerErrorsAreRecoverable), C = Array.prototype.slice.call(arguments, 1);
                    return C.length && (B.extra_error_attributes = C), this.parseError(B.errStr, B, this.JisonLexerError) || this.ERROR;
                },
                cleanupAfterLex: function (z) {
                    if (this.setInput('', {}), !z) {
                        for (var A = this.__error_infos.length - 1; A >= 0; A--) {
                            var B = this.__error_infos[A];
                            B && 'function' == typeof B.destroy && B.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return this;
                },
                clear: function () {
                    this.yytext = '', this.yyleng = 0, this.match = '', this.matches = !1, this._more = !1, this._backtrack = !1;
                    var z = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: z,
                        last_line: this.yylineno + 1,
                        last_column: z,
                        range: [
                            this.offset,
                            this.offset
                        ]
                    };
                },
                setInput: function (z, A) {
                    if (this.yy = A || this.yy || {}, !this.__decompressed) {
                        for (var B = this.rules, C = 0, D = B.length; C < D; C++) {
                            'number' == typeof (_L = B[C]) && (B[C] = B[_L]);
                        }
                        var E = this.conditions;
                        for (var F in E) {
                            var G = E[F], H = G.rules, I = (D = H.length, new Array(D + 1)), J = new Array(D + 1);
                            for (C = 0; C < D; C++) {
                                var K = H[C], _L = B[K];
                                I[C + 1] = _L, J[C + 1] = K;
                            }
                            G.rules = J, G.__rule_regexes = I, G.__rule_count = D;
                        }
                        this.__decompressed = !0;
                    }
                    return this._input = z || '', this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = '', this.conditionStack = ['INITIAL'], this.__currentRuleSet__ = null, this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [
                            0,
                            0
                        ]
                    }, this.offset = 0, this;
                },
                editRemainingInput: function (z, A) {
                    var B = z.call(this, this._input, A);
                    return 'string' != typeof B ? B && (this._input = '' + B) : this._input = B, this;
                },
                input: function () {
                    if (!this._input)
                        return null;
                    var z = this._input[0];
                    this.yytext += z, this.yyleng++, this.offset++, this.match += z, this.matched += z;
                    var A = 1, B = !1;
                    if ('\n' === z)
                        B = !0;
                    else if ('\r' === z) {
                        B = !0;
                        var C = this._input[1];
                        '\n' === C && (A++, z += C, this.yytext += C, this.yyleng++, this.offset++, this.match += C, this.matched += C, this.yylloc.range[1]++);
                    }
                    return B ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(A), z;
                },
                unput: function (z) {
                    var A = z.length, B = z.split(/(?:\r\n?|\n)/g);
                    if (this._input = z + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - A), this.yyleng = this.yytext.length, this.offset -= A, this.match = this.match.substr(0, this.match.length - A), this.matched = this.matched.substr(0, this.matched.length - A), B.length > 1) {
                        this.yylineno -= B.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var C = this.match, D = C.split(/(?:\r\n?|\n)/g);
                        1 === D.length && (D = (C = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = D[D.length - 1].length;
                    } else
                        this.yylloc.last_column -= A;
                    return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this;
                },
                more: function () {
                    return this._more = !0, this;
                },
                reject: function () {
                    if (this.options.backtrack_lexer)
                        this._backtrack = !0;
                    else {
                        var z = '';
                        this.yylloc && (z = ' on line ' + (this.yylineno + 1));
                        var A = this.constructLexErrorInfo('Lexical error' + z + ': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).', !1);
                        this._signaled_error_token = this.parseError(A.errStr, A, this.JisonLexerError) || this.ERROR;
                    }
                    return this;
                },
                less: function (z) {
                    return this.unput(this.match.slice(z));
                },
                pastInput: function (z, A) {
                    var B = this.matched.substring(0, this.matched.length - this.match.length);
                    z < 0 ? z = B.length : z || (z = 20), A < 0 ? A = B.length : A || (A = 1);
                    var C = (B = B.substr(2 * -z - 2)).replace(/\r\n|\r/g, '\n').split('\n');
                    return (B = (C = C.slice(-A)).join('\n')).length > z && (B = '...' + B.substr(-z)), B;
                },
                upcomingInput: function (z, A) {
                    var B = this.match;
                    z < 0 ? z = B.length + this._input.length : z || (z = 20), A < 0 ? A = z : A || (A = 1), B.length < 2 * z + 2 && (B += this._input.substring(0, 2 * z + 2));
                    var C = B.replace(/\r\n|\r/g, '\n').split('\n');
                    return (B = (C = C.slice(0, A)).join('\n')).length > z && (B = B.substring(0, z) + '...'), B;
                },
                showPosition: function (z, A) {
                    var B = this.pastInput(z).replace(/\s/g, ' '), C = new Array(B.length + 1).join('-');
                    return B + this.upcomingInput(A).replace(/\s/g, ' ') + '\n' + C + '^';
                },
                deriveLocationInfo: function (z, A, B, C) {
                    var D = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [
                            0,
                            0
                        ]
                    };
                    return z && (D.first_line = 0 | z.first_line, D.last_line = 0 | z.last_line, D.first_column = 0 | z.first_column, D.last_column = 0 | z.last_column, z.range && (D.range[0] = 0 | z.range[0], D.range[1] = 0 | z.range[1])), (D.first_line <= 0 || D.last_line < D.first_line) && (D.first_line <= 0 && A && (D.first_line = 0 | A.last_line, D.first_column = 0 | A.last_column, A.range && (D.range[0] = 0 | z.range[1])), (D.last_line <= 0 || D.last_line < D.first_line) && B && (D.last_line = 0 | B.first_line, D.last_column = 0 | B.first_column, B.range && (D.range[1] = 0 | z.range[0])), D.first_line <= 0 && C && (D.last_line <= 0 || C.last_line <= D.last_line) && (D.first_line = 0 | C.first_line, D.first_column = 0 | C.first_column, C.range && (D.range[0] = 0 | C.range[0])), D.last_line <= 0 && C && (D.first_line <= 0 || C.first_line >= D.first_line) && (D.last_line = 0 | C.last_line, D.last_column = 0 | C.last_column, C.range && (D.range[1] = 0 | C.range[1]))), D.last_line <= 0 && (D.first_line <= 0 ? (D.first_line = this.yylloc.first_line, D.last_line = this.yylloc.last_line, D.first_column = this.yylloc.first_column, D.last_column = this.yylloc.last_column, D.range[0] = this.yylloc.range[0], D.range[1] = this.yylloc.range[1]) : (D.last_line = this.yylloc.last_line, D.last_column = this.yylloc.last_column, D.range[1] = this.yylloc.range[1])), D.first_line <= 0 && (D.first_line = D.last_line, D.first_column = 0, D.range[1] = D.range[0]), D.first_column < 0 && (D.first_column = 0), D.last_column < 0 && (D.last_column = D.first_column > 0 ? D.first_column : 80), D;
                },
                prettyPrintRange: function (z, A, B) {
                    z = this.deriveLocationInfo(z, A, B);
                    var C = (this.matched + this._input).split('\n'), D = Math.max(1, A ? A.first_line : z.first_line - 3), E = Math.max(1, B ? B.last_line : z.last_line + 1), F = 1 + Math.log10(1 | E) | 0, G = new Array(F).join(' '), H = [], I = C.slice(D - 1, E + 1).map(function (J, K) {
                            var L = K + D, M = (G + L).substr(-F) + ': ' + J, N = new Array(F + 1).join('^'), O = 3, P = 0;
                            (L === z.first_line ? (O += z.first_column, P = Math.max(2, (L === z.last_line ? z.last_column : J.length) - z.first_column + 1)) : L === z.last_line ? P = Math.max(2, z.last_column + 1) : L > z.first_line && L < z.last_line && (P = Math.max(2, J.length + 1)), P) && (M += '\n' + N + new Array(O).join('.') + new Array(P).join('^'), J.trim().length > 0 && H.push(K));
                            return M = M.replace(/\t/g, ' ');
                        });
                    if (H.length > 4) {
                        var J = H[1] + 1, K = H[H.length - 2] - 1, L = new Array(F + 1).join(' ') + '  (...continued...)';
                        L += '\n' + new Array(F + 1).join('-') + '  (---------------)', I.splice(J, K - J + 1, L);
                    }
                    return I.join('\n');
                },
                describeYYLLOC: function (z, A) {
                    var B, C = z.first_line, D = z.last_line, E = z.first_column, F = z.last_column;
                    if (0 === D - C ? (B = 'line ' + C + ', ', B += F - E <= 1 ? 'column ' + E : 'columns ' + E + ' .. ' + F) : B = 'lines ' + C + '(column ' + E + ') .. ' + D + '(column ' + F + ')', z.range && A) {
                        var G = z.range[0], H = z.range[1] - 1;
                        B += H <= G ? ' {String Offset: ' + G + '}' : ' {String Offset range: ' + G + ' .. ' + H + '}';
                    }
                    return B;
                },
                test_match: function (z, A) {
                    var B, C, D, E, F;
                    if (this.options.backtrack_lexer && (D = {
                            yylineno: this.yylineno,
                            yylloc: {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylloc.last_line,
                                first_column: this.yylloc.first_column,
                                last_column: this.yylloc.last_column,
                                range: this.yylloc.range.slice(0)
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                        }), F = (E = z[0]).length, (C = E.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += C.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = C[C.length - 1].length) : this.yylloc.last_column += F, this.yytext += E, this.match += E, this.matched += E, this.matches = z, this.yyleng = this.yytext.length, this.yylloc.range[1] += F, this.offset += F, this._more = !1, this._backtrack = !1, this._input = this._input.slice(F), B = this.performAction.call(this, this.yy, A, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), B)
                        return B;
                    if (this._backtrack) {
                        for (var G in D)
                            this[G] = D[G];
                        return this.__currentRuleSet__ = null, !1;
                    }
                    return !!this._signaled_error_token && (B = this._signaled_error_token, this._signaled_error_token = !1, B);
                },
                next: function () {
                    if (this.done)
                        return this.clear(), this.EOF;
                    var z, A, B, C;
                    this._input || (this.done = !0), this._more || this.clear();
                    var D = this.__currentRuleSet__;
                    if (!(D || (D = this.__currentRuleSet__ = this._currentRules()) && D.rules)) {
                        var E = '';
                        this.options.trackPosition && (E = ' on line ' + (this.yylineno + 1));
                        var F = this.constructLexErrorInfo('Internal lexer engine error' + E + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(F.errStr, F, this.JisonLexerError) || this.ERROR;
                    }
                    for (var G = D.rules, H = D.__rule_regexes, I = D.__rule_count, J = 1; J <= I; J++)
                        if ((B = this._input.match(H[J])) && (!A || B[0].length > A[0].length)) {
                            if (A = B, C = J, this.options.backtrack_lexer) {
                                if (!1 !== (z = this.test_match(B, G[J])))
                                    return z;
                                if (this._backtrack) {
                                    A = void 0;
                                    continue;
                                }
                                return !1;
                            }
                            if (!this.options.flex)
                                break;
                        }
                    if (A)
                        return !1 !== (z = this.test_match(A, G[C])) && z;
                    if (this._input) {
                        E = '';
                        this.options.trackPosition && (E = ' on line ' + (this.yylineno + 1));
                        F = this.constructLexErrorInfo('Lexical error' + E + ': Unrecognized text.', this.options.lexerErrorsAreRecoverable);
                        var K = this._input, L = this.topState(), M = this.conditionStack.length;
                        return (z = this.parseError(F.errStr, F, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || K !== this._input || L !== this.topState() || M !== this.conditionStack.length || this.input()), z;
                    }
                    return this.done = !0, this.clear(), this.EOF;
                },
                lex: function () {
                    var z;
                    for ('function' == typeof this.pre_lex && (z = this.pre_lex.call(this, 0)), 'function' == typeof this.options.pre_lex && (z = this.options.pre_lex.call(this, z) || z), this.yy && 'function' == typeof this.yy.pre_lex && (z = this.yy.pre_lex.call(this, z) || z); !z;)
                        z = this.next();
                    return this.yy && 'function' == typeof this.yy.post_lex && (z = this.yy.post_lex.call(this, z) || z), 'function' == typeof this.options.post_lex && (z = this.options.post_lex.call(this, z) || z), 'function' == typeof this.post_lex && (z = this.post_lex.call(this, z) || z), z;
                },
                fastLex: function () {
                    for (var z; !z;)
                        z = this.next();
                    return z;
                },
                canIUse: function () {
                    return { fastLex: !('function' == typeof this.pre_lex || 'function' == typeof this.options.pre_lex || this.yy && 'function' == typeof this.yy.pre_lex || this.yy && 'function' == typeof this.yy.post_lex || 'function' == typeof this.options.post_lex || 'function' == typeof this.post_lex) && 'function' == typeof this.fastLex };
                },
                begin: function (z) {
                    return this.pushState(z);
                },
                pushState: function (z) {
                    return this.conditionStack.push(z), this.__currentRuleSet__ = null, this;
                },
                popState: function () {
                    return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0];
                },
                topState: function (z) {
                    return (z = this.conditionStack.length - 1 - Math.abs(z || 0)) >= 0 ? this.conditionStack[z] : 'INITIAL';
                },
                _currentRules: function () {
                    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL;
                },
                stateStackSize: function () {
                    return this.conditionStack.length;
                },
                options: { trackPosition: !0 },
                JisonLexerError: v,
                performAction: function (z, A, B) {
                    if (1 !== A)
                        return this.simpleCaseActionClusters[A];
                },
                simpleCaseActionClusters: {
                    0: 13,
                    2: 5,
                    3: 6,
                    4: 3,
                    5: 4,
                    6: 15,
                    7: 15,
                    8: 15,
                    9: 15,
                    10: 15,
                    11: 15,
                    12: 16,
                    13: 16,
                    14: 16,
                    15: 16,
                    16: 17,
                    17: 17,
                    18: 18,
                    19: 18,
                    20: 19,
                    21: 19,
                    22: 19,
                    23: 20,
                    24: 21,
                    25: 22,
                    26: 23,
                    27: 25,
                    28: 24,
                    29: 26,
                    30: 27,
                    31: 28,
                    32: 11,
                    33: 9,
                    34: 12,
                    35: 10,
                    36: 7,
                    37: 8,
                    38: 14,
                    39: 1
                },
                rules: [
                    /^(?:(--[\d\-A-Za-z]*))/,
                    /^(?:\s+)/,
                    /^(?:\*)/,
                    /^(?:\/)/,
                    /^(?:\+)/,
                    /^(?:-)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)%)/,
                    /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
                    /^(?:(calc))/,
                    /^(?:(var))/,
                    /^(?:([a-z]+))/,
                    /^(?:\()/,
                    /^(?:\))/,
                    /^(?:,)/,
                    /^(?:$)/
                ],
                conditions: {
                    INITIAL: {
                        rules: [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38,
                            39
                        ],
                        inclusive: !0
                    }
                }
            };
            return y;
        }();
        function v() {
            this.yy = {};
        }
        return t.lexer = u, v.prototype = t, t.Parser = v, new v();
    }();
    g = h, h.Parser;
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 }), e.exports.flip = _m;
    var g, h = d('.....'), i = (g = h) && g.__esModule ? g : { default: g };
    function j(k, l) {
        return 'MathExpression' === k.type ? function (m, n) {
            switch (m = function (o, p) {
                    var q = (0, i.default)(o.left, o.right, p), r = j(q.left, p), s = j(q.right, p);
                    'MathExpression' === r.type && 'MathExpression' === s.type && ('/' === r.operator && '*' === s.operator || '-' === r.operator && '+' === s.operator || '*' === r.operator && '/' === s.operator || '+' === r.operator && '-' === s.operator) && (_k(r.right, s.right) ? q = (0, i.default)(r.left, s.left, p) : _k(r.right, s.left) && (q = (0, i.default)(r.left, s.right, p)), r = j(q.left, p), s = j(q.right, p));
                    return o.left = r, o.right = s, o;
                }(m, n), m.operator) {
            case '+':
            case '-':
                return function (o, p) {
                    var q = o, r = q.left, s = q.right, t = q.operator;
                    if ('CssVariable' === r.type || 'CssVariable' === s.type)
                        return o;
                    if (0 === s.value)
                        return r;
                    if (0 === r.value && '+' === t)
                        return s;
                    if (0 === r.value && '-' === t)
                        return _n(s);
                    r.type === s.type && _l(r.type) && ((o = Object.assign({}, r)).value = '+' === t ? r.value + s.value : r.value - s.value);
                    if (_l(r.type) && ('+' === s.operator || '-' === s.operator) && 'MathExpression' === s.type) {
                        if (r.type === s.left.type)
                            return (o = Object.assign({}, o)).left = j({
                                type: 'MathExpression',
                                operator: t,
                                left: r,
                                right: s.left
                            }, p), o.right = s.right, o.operator = '-' === t ? _m(s.operator) : s.operator, j(o, p);
                        if (r.type === s.right.type)
                            return (o = Object.assign({}, o)).left = j({
                                type: 'MathExpression',
                                operator: '-' === t ? _m(s.operator) : s.operator,
                                left: r,
                                right: s.right
                            }, p), o.right = s.left, j(o, p);
                    }
                    if ('MathExpression' === r.type && ('+' === r.operator || '-' === r.operator) && _l(s.type)) {
                        if (s.type === r.left.type)
                            return (o = Object.assign({}, r)).left = j({
                                type: 'MathExpression',
                                operator: t,
                                left: r.left,
                                right: s
                            }, p), j(o, p);
                        if (s.type === r.right.type)
                            return o = Object.assign({}, r), '-' === r.operator ? (o.right = j({
                                type: 'MathExpression',
                                operator: '-' === t ? '+' : '-',
                                left: s,
                                right: r.right
                            }, p), o.operator = '-' === t ? '-' : '+') : o.right = j({
                                type: 'MathExpression',
                                operator: t,
                                left: r.right,
                                right: s
                            }, p), o.right.value < 0 && (o.right.value *= -1, o.operator = '-' === o.operator ? '+' : '-'), j(o, p);
                    }
                    return o;
                }(m, n);
            case '/':
                return function (o, p) {
                    if (!_l(o.right.type))
                        return o;
                    if ('Value' !== o.right.type)
                        throw new Error('Cannot divide by "' + o.right.unit + '", number expected');
                    if (0 === o.right.value)
                        throw new Error('Cannot divide by zero');
                    if ('MathExpression' === o.left.type)
                        return _l(o.left.left.type) && _l(o.left.right.type) ? (o.left.left.value /= o.right.value, o.left.right.value /= o.right.value, j(o.left, p)) : o;
                    if (_l(o.left.type))
                        return o.left.value /= o.right.value, o.left;
                    return o;
                }(m, n);
            case '*':
                return function (o) {
                    if ('MathExpression' === o.left.type && 'Value' === o.right.type) {
                        if (_l(o.left.left.type) && _l(o.left.right.type))
                            return o.left.left.value *= o.right.value, o.left.right.value *= o.right.value, o.left;
                    } else {
                        if (_l(o.left.type) && 'Value' === o.right.type)
                            return o.left.value *= o.right.value, o.left;
                        if ('Value' === o.left.type && 'MathExpression' === o.right.type) {
                            if (_l(o.right.left.type) && _l(o.right.right.type))
                                return o.right.left.value *= o.left.value, o.right.right.value *= o.left.value, o.right;
                        } else if ('Value' === o.left.type && _l(o.right.type))
                            return o.right.value *= o.left.value, o.right;
                    }
                    return o;
                }(m);
            }
            return m;
        }(k, l) : 'Calc' === k.type ? j(k.value, l) : k;
    }
    function _k(l, m) {
        return l.type === m.type && l.value === m.value;
    }
    function _l(m) {
        switch (m) {
        case 'LengthValue':
        case 'AngleValue':
        case 'TimeValue':
        case 'FrequencyValue':
        case 'ResolutionValue':
        case 'EmValue':
        case 'ExValue':
        case 'ChValue':
        case 'RemValue':
        case 'VhValue':
        case 'VwValue':
        case 'VminValue':
        case 'VmaxValue':
        case 'PercentageValue':
        case 'Value':
            return !0;
        }
        return !1;
    }
    function _m(n) {
        return '+' === n ? '-' : '+';
    }
    function _n(o) {
        return _l(o.type) ? o.value = -o.value : 'MathExpression' == o.type && (o.left = _n(o.left), o.right = _n(o.right)), o;
    }
    e.exports.default = j;
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 });
    var g, h = d('.....'), i = (g = h) && g.__esModule ? g : { default: g };
    e.exports.default = function (j, k, l) {
        switch (j.type) {
        case 'LengthValue':
        case 'AngleValue':
        case 'TimeValue':
        case 'FrequencyValue':
        case 'ResolutionValue':
            return function (m, n, o) {
                n.type === m.type && (n = {
                    type: m.type,
                    value: (0, i.default)(n.value, n.unit, m.unit, o),
                    unit: m.unit
                });
                return {
                    left: m,
                    right: n
                };
            }(j, k, l);
        default:
            return {
                left: j,
                right: k
            };
        }
    }, e.exports = e.exports.default;
}), d.register('.....', function (e, f) {
    var g = {
        px: {
            px: 1,
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            in: 96,
            pt: 96 / 72,
            pc: 16
        },
        cm: {
            px: 2.54 / 96,
            cm: 1,
            mm: 0.1,
            in: 2.54,
            pt: 2.54 / 72,
            pc: 2.54 / 6
        },
        mm: {
            px: 25.4 / 96,
            cm: 10,
            mm: 1,
            in: 25.4,
            pt: 25.4 / 72,
            pc: 25.4 / 6
        },
        in: {
            px: 1 / 96,
            cm: 1 / 2.54,
            mm: 1 / 25.4,
            in: 1,
            pt: 1 / 72,
            pc: 1 / 6
        },
        pt: {
            px: 0.75,
            cm: 72 / 2.54,
            mm: 72 / 25.4,
            in: 72,
            pt: 1,
            pc: 12
        },
        pc: {
            px: 0.0625,
            cm: 6 / 2.54,
            mm: 6 / 25.4,
            in: 6,
            pt: 6 / 72,
            pc: 1
        },
        deg: {
            deg: 1,
            grad: 0.9,
            rad: 180 / Math.PI,
            turn: 360
        },
        grad: {
            deg: 400 / 360,
            grad: 1,
            rad: 200 / Math.PI,
            turn: 400
        },
        rad: {
            deg: Math.PI / 180,
            grad: Math.PI / 200,
            rad: 1,
            turn: 2 * Math.PI
        },
        turn: {
            deg: 1 / 360,
            grad: 1 / 400,
            rad: 0.5 / Math.PI,
            turn: 1
        },
        s: {
            s: 1,
            ms: 0.001
        },
        ms: {
            s: 1000,
            ms: 1
        },
        Hz: {
            Hz: 1,
            kHz: 1000
        },
        kHz: {
            Hz: 0.001,
            kHz: 1
        },
        dpi: {
            dpi: 1,
            dpcm: 1 / 2.54,
            dppx: 1 / 96
        },
        dpcm: {
            dpi: 2.54,
            dpcm: 1,
            dppx: 2.54 / 96
        },
        dppx: {
            dpi: 96,
            dpcm: 96 / 2.54,
            dppx: 1
        }
    };
    e.exports = function (h, i, j, k) {
        if (!g.hasOwnProperty(j))
            throw new Error('Cannot convert to ' + j);
        if (!g[j].hasOwnProperty(i))
            throw new Error('Cannot convert from ' + i + ' to ' + j);
        var l = g[j][i] * h;
        return !1 !== k ? (k = Math.pow(10, parseInt(k) || 5), Math.round(l * k) / k) : l;
    };
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 }), e.exports.default = function (g, h, i) {
        var j = _k(h, i);
        return 'MathExpression' === h.type && (j = g + '(' + j + ')'), j;
    };
    var g = d('.....'), h = {
            '*': 0,
            '/': 0,
            '+': 1,
            '-': 1
        };
    function i(j, k) {
        if (!1 !== k) {
            var l = Math.pow(10, k);
            return Math.round(j * l) / l;
        }
        return j;
    }
    function _k(l, m) {
        switch (l.type) {
        case 'MathExpression':
            var n = l.left, o = l.right, p = l.operator, q = '';
            return 'MathExpression' === n.type && h[p] < h[n.operator] ? q += '(' + _k(n, m) + ')' : q += _k(n, m), q += ' ' + l.operator + ' ', 'MathExpression' === o.type && h[p] < h[o.operator] ? q += '(' + _k(o, m) + ')' : 'MathExpression' === o.type && '-' === p && [
                '+',
                '-'
            ].includes(o.operator) ? (o.operator = (0, l.flip)(o.operator), q += _k(o, m)) : q += _k(o, m), q;
        case 'Value':
            return i(l.value, m);
        case 'CssVariable':
            return l.fallback ? 'var(' + l.value + ', ' + _k(l.fallback, m) + ')' : 'var(' + l.value + ')';
        case 'Calc':
            return l.prefix ? '-' + l.prefix + '-calc(' + _k(l.value, m) + ')' : 'calc(' + _k(l.value, m) + ')';
        default:
            return i(l.value, m) + l.unit;
        }
    }
    e.exports = e.exports.default;
}), d.register('.....', function (e, f) {
    b(e.exports, 'mathSign', function () {
        return _l;
    }), b(e.exports, 'isPercent', function () {
        return _m;
    }), b(e.exports, 'isNumber', function () {
        return _n;
    }), b(e.exports, 'isNumOrStr', function () {
        return _o;
    }), b(e.exports, 'uniqueId', function () {
        return _q;
    }), b(e.exports, 'getPercentValue', function () {
        return _r;
    }), b(e.exports, 'getAnyElementOfObject', function () {
        return _s;
    }), b(e.exports, 'hasDuplicate', function () {
        return _t;
    }), b(e.exports, 'interpolateNumber', function () {
        return _u;
    }), b(e.exports, 'findEntryInArray', function () {
        return _v;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), _l = function (m) {
            return 0 === m ? 0 : m > 0 ? 1 : -1;
        }, _m = function (n) {
            return a(k)(n) && n.indexOf('%') === n.length - 1;
        }, _n = function (o) {
            return a(j)(o) && !a(i)(o);
        }, _o = function (p) {
            return _n(p) || a(k)(p);
        }, p = 0, _q = function (r) {
            var s = ++p;
            return ''.concat(r || '').concat(s);
        }, _r = function (s, t) {
            var u, v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, w = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!_n(s) && !a(k)(s))
                return v;
            if (_m(s)) {
                var x = s.indexOf('%');
                u = t * parseFloat(s.slice(0, x)) / 100;
            } else
                u = +s;
            return a(i)(u) && (u = v), w && u > t && (u = t), u;
        }, _s = function (t) {
            if (!t)
                return null;
            var u = Object.keys(t);
            return u && u.length ? t[u[0]] : null;
        }, _t = function (u) {
            if (!a(h)(u))
                return !1;
            for (var v = u.length, w = {}, x = 0; x < v; x++) {
                if (w[u[x]])
                    return !0;
                w[u[x]] = !0;
            }
            return !1;
        }, _u = function (v, w) {
            return _n(v) && _n(w) ? function (x) {
                return v + x * (w - v);
            } : function () {
                return w;
            };
        };
    function _v(w, x, y) {
        return w && w.length ? w.find(function (z) {
            return z && ('function' == typeof x ? x(z) : a(g)(z, x)) === y;
        }) : null;
    }
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i, j) {
        var k = null == h ? void 0 : g(h, i);
        return void 0 === k ? j : k;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        for (var k = 0, l = (j = g(j, i)).length; null != i && k < l;)
            i = i[h(j[k++])];
        return k && k == l ? i : void 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    e.exports = function (k, l) {
        return g(k) ? k : h(k, l) ? [k] : i(j(k));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, j = /^\w*$/;
    e.exports = function (k, l) {
        if (g(k))
            return !1;
        var m = typeof k;
        return !('number' != m && 'symbol' != m && 'boolean' != m && null != k && !h(k)) || (j.test(k) || !i.test(k) || null != l && k in Object(l));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        return 'symbol' == typeof i || h(i) && '[object Symbol]' == g(i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g, j = g(function (k) {
            var l = [];
            return 46 === k.charCodeAt(0) && l.push(''), k.replace(h, function (m, n, o, p) {
                l.push(o ? p.replace(i, '$1') : n || m);
            }), l;
        });
    e.exports = j;
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        var i = g(h, function (j) {
                return 500 === d.size && d.clear(), j;
            }), j = i.cache;
        return i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    function h(i, j) {
        if ('function' != typeof i || null != j && 'function' != typeof j)
            throw new TypeError('Expected a function');
        var k = function () {
            var l = arguments, m = j ? j.apply(this, l) : l[0], n = k.cache;
            if (n.has(m))
                return n.get(m);
            var o = i.apply(this, l);
            return k.cache = n.set(m, o) || n, o;
        };
        return k.cache = new (h.Cache || g)(), k;
    }
    h.Cache = g, e.exports = h;
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return null == h ? '' : g(h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = g ? g.prototype : void 0, l = k ? k.toString : void 0;
    e.exports = function e(m) {
        if ('string' == typeof m)
            return m;
        if (i(m))
            return h(m, e) + '';
        if (j(m))
            return l ? l.call(m) : '';
        var n = m + '';
        return '0' == n && 1 / m == -Infinity ? '-0' : n;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = null == g ? 0 : g.length, k = Array(j); ++i < j;)
            k[i] = h(g[i], i, g);
        return k;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        if ('string' == typeof h || g(h))
            return h;
        var i = h + '';
        return '0' == i && 1 / h == -Infinity ? '-0' : i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return g(h) && h != +h;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        return 'number' == typeof i || h(i) && '[object Number]' == g(i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return 'string' == typeof j || !h(j) && i(j) && '[object String]' == g(j);
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Global', function () {
        return d;
    });
    var g = {
        isSsr: !('undefined' != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function (h) {
            return g[h];
        },
        set: function (h, i) {
            if ('string' == typeof h)
                g[h] = i;
            else {
                var j = Object.keys(h);
                j && j.length && j.forEach(function (k) {
                    g[k] = h[k];
                });
            }
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'getStringSize', function () {
        return _x;
    }), b(e.exports, 'getOffset', function () {
        return _y;
    }), b(e.exports, 'calculateChartCoordinate', function () {
        return _z;
    });
    var g = d('.....');
    function h(i, j) {
        var k = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            j && (l = l.filter(function (m) {
                return Object.getOwnPropertyDescriptor(i, m).enumerable;
            })), k.push.apply(k, l);
        }
        return k;
    }
    function k(l) {
        for (var m = 1; m < arguments.length; m++) {
            var n = null != arguments[m] ? arguments[m] : {};
            m % 2 ? h(Object(n), !0).forEach(function (o) {
                _n(l, o, n[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (o) {
                Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(n, o));
            });
        }
        return l;
    }
    function _n(o, p, q) {
        return p in o ? Object.defineProperty(o, p, {
            value: q,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : o[p] = q, o;
    }
    function o(p) {
        return function (q) {
            if (Array.isArray(q))
                return _p(q);
        }(p) || function (q) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(q))
                return Array.from(q);
        }(p) || function (q, r) {
            if (!q)
                return;
            if ('string' == typeof q)
                return _p(q, r);
            var s = Object.prototype.toString.call(q).slice(8, -1);
            'Object' === s && q.constructor && (s = q.constructor.name);
            if ('Map' === s || 'Set' === s)
                return Array.from(q);
            if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
                return _p(q, r);
        }(p) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _p(q, r) {
        (null == r || r > q.length) && (r = q.length);
        for (var s = 0, t = new Array(r); s < r; s++)
            t[s] = q[s];
        return t;
    }
    var s = {
            widthCache: {},
            cacheCount: 0
        }, t = {
            position: 'absolute',
            top: '-20000px',
            left: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            whiteSpace: 'pre'
        }, u = [
            'minWidth',
            'maxWidth',
            'width',
            'minHeight',
            'maxHeight',
            'height',
            'top',
            'left',
            'fontSize',
            'lineHeight',
            'padding',
            'margin',
            'paddingLeft',
            'paddingRight',
            'paddingTop',
            'paddingBottom',
            'marginLeft',
            'marginRight',
            'marginTop',
            'marginBottom'
        ], v = 'recharts_measurement_span';
    var w = function (x) {
            return Object.keys(x).reduce(function (y, z) {
                return ''.concat(y).concat((h = z, h.split('').reduce(function (A, B) {
                    return B === B.toUpperCase() ? [].concat(o(A), [
                        '-',
                        B.toLowerCase()
                    ]) : [].concat(o(A), [B]);
                }, []).join('')), ':').concat((t = z, g = x[z], u.indexOf(t) >= 0 && g === +g ? ''.concat(g, 'px') : g), ';');
                var A, B, C;
            }, '');
        }, _x = function (y) {
            var z = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == y || g.Global.isSsr)
                return {
                    width: 0,
                    height: 0
                };
            var A = ''.concat(y), B = w(z), C = ''.concat(A, '-').concat(B);
            if (s.widthCache[C])
                return s.widthCache[C];
            try {
                var D = document.getElementById(v);
                D || ((D = document.createElement('span')).setAttribute('id', v), D.setAttribute('aria-hidden', 'true'), document.body.appendChild(D));
                var E = k(k({}, t), z);
                Object.keys(E).map(function (F) {
                    return D.style[F] = E[F], F;
                }), D.textContent = A;
                var F = D.getBoundingClientRect(), G = {
                        width: F.width,
                        height: F.height
                    };
                return s.widthCache[C] = G, ++s.cacheCount > 2000 && (s.cacheCount = 0, s.widthCache = {}), G;
            } catch (y) {
                return {
                    width: 0,
                    height: 0
                };
            }
        }, _y = function (z) {
            var A = z.ownerDocument.documentElement, B = {
                    top: 0,
                    left: 0
                };
            return void 0 !== z.getBoundingClientRect && (B = z.getBoundingClientRect()), {
                top: B.top + window.pageYOffset - A.clientTop,
                left: B.left + window.pageXOffset - A.clientLeft
            };
        }, _z = function (A, B) {
            return {
                chartX: Math.round(A.pageX - B.left),
                chartY: Math.round(A.pageY - B.top)
            };
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'getDisplayName', function () {
        return _u;
    }), b(e.exports, 'findAllByType', function () {
        return _y;
    }), b(e.exports, 'findChildByType', function () {
        return _z;
    }), b(e.exports, 'validateWidthHeight', function () {
        return _A;
    }), b(e.exports, 'isChildrenEqual', function () {
        return _D;
    }), b(e.exports, 'renderByOrder', function () {
        return _F;
    }), b(e.exports, 'getReactEventByType', function () {
        return _G;
    }), b(e.exports, 'parseChildIndex', function () {
        return _H;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    function o(p, q) {
        if (null == p)
            return {};
        var r, s, t = function (u, v) {
                if (null == u)
                    return {};
                var w, x, y = {}, z = Object.keys(u);
                for (x = 0; x < z.length; x++)
                    w = z[x], v.indexOf(w) >= 0 || (y[w] = u[w]);
                return y;
            }(p, q);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(p);
            for (s = 0; s < u.length; s++)
                r = u[s], q.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(p, r) && (t[r] = p[r]);
        }
        return t;
    }
    var t = {
            click: 'onClick',
            mousedown: 'onMouseDown',
            mouseup: 'onMouseUp',
            mouseover: 'onMouseOver',
            mousemove: 'onMouseMove',
            mouseout: 'onMouseOut',
            mouseenter: 'onMouseEnter',
            mouseleave: 'onMouseLeave',
            touchcancel: 'onTouchCancel',
            touchend: 'onTouchEnd',
            touchmove: 'onTouchMove',
            touchstart: 'onTouchStart'
        }, _u = function (v) {
            return 'string' == typeof v ? v : v ? v.displayName || v.name || 'Component' : '';
        }, v = null, w = null, x = function b(y) {
            if (y === v && a(j)(w))
                return w;
            var z = [];
            return k.Children.forEach(y, function (A) {
                a(i)(A) || ((0, l.isFragment)(A) ? z = z.concat(b(A.props.children)) : z.push(A));
            }), w = z, v = y, z;
        }, _y = function (z, A) {
            var B = [], C = [];
            return C = a(j)(A) ? A.map(function (D) {
                return _u(D);
            }) : [_u(A)], x(z).forEach(function (D) {
                var E = a(h)(D, 'type.displayName') || a(h)(D, 'type.name');
                -1 !== C.indexOf(E) && B.push(D);
            }), B;
        }, _z = function (A, B) {
            var C = _y(A, B);
            return C && C[0];
        }, _A = function (B) {
            if (!B || !B.props)
                return !1;
            var C = B.props, D = C.width, E = C.height;
            return !(!(0, m.isNumber)(D) || D <= 0 || !(0, m.isNumber)(E) || E <= 0);
        }, B = [
            'a',
            'altGlyph',
            'altGlyphDef',
            'altGlyphItem',
            'animate',
            'animateColor',
            'animateMotion',
            'animateTransform',
            'circle',
            'clipPath',
            'color-profile',
            'cursor',
            'defs',
            'desc',
            'ellipse',
            'feBlend',
            'feColormatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
            'filter',
            'font',
            'font-face',
            'font-face-format',
            'font-face-name',
            'font-face-url',
            'foreignObject',
            'g',
            'glyph',
            'glyphRef',
            'hkern',
            'image',
            'line',
            'lineGradient',
            'marker',
            'mask',
            'metadata',
            'missing-glyph',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'script',
            'set',
            'stop',
            'style',
            'svg',
            'switch',
            'symbol',
            'text',
            'textPath',
            'title',
            'tref',
            'tspan',
            'use',
            'view',
            'vkern'
        ], C = function (D) {
            return D && D.type && a(u)(D.type) && B.indexOf(D.type) >= 0;
        }, _D = function b(E, F) {
            if (E === F)
                return !0;
            var G = k.Children.count(E);
            if (G !== k.Children.count(F))
                return !1;
            if (0 === G)
                return !0;
            if (1 === G)
                return _E(a(j)(E) ? E[0] : E, a(j)(F) ? F[0] : F);
            for (var H = 0; H < G; H++) {
                var I = E[H], J = F[H];
                if (a(j)(I) || a(j)(J)) {
                    if (!b(I, J))
                        return !1;
                } else if (!_E(I, J))
                    return !1;
            }
            return !0;
        }, _E = function (F, G) {
            if (a(i)(F) && a(i)(G))
                return !0;
            if (!a(i)(F) && !a(i)(G)) {
                var H = F.props || {}, I = H.children, J = o(H, ['children']), K = G.props || {}, L = K.children, M = o(K, ['children']);
                return I && L ? (0, n.shallowEqual)(J, M) && _D(I, L) : !I && !L && (0, n.shallowEqual)(J, M);
            }
            return !1;
        }, _F = function (G, H) {
            var I = [], J = {};
            return x(G).forEach(function (K, L) {
                if (C(K))
                    I.push(K);
                else if (K) {
                    var M = _u(K.type), N = H[M] || {}, O = N.handler, P = N.once;
                    if (O && (!P || !J[M])) {
                        var Q = O(K, M, L);
                        I.push(Q), J[M] = !0;
                    }
                }
            }), I;
        }, _G = function (H) {
            var I = H && H.type;
            return I && t[I] ? t[I] : null;
        }, _H = function (I, J) {
            return x(J).indexOf(I);
        };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        for (var j in h)
            if ({}.hasOwnProperty.call(h, j) && (!{}.hasOwnProperty.call(i, j) || h[j] !== i[j]))
                return !1;
        for (var k in i)
            if ({}.hasOwnProperty.call(i, g) && !{}.hasOwnProperty.call(h, g))
                return !1;
        return !0;
    }
    b(e.exports, 'shallowEqual', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'RADIAN', function () {
        return _n;
    }), b(e.exports, 'polarToCartesian', function () {
        return _p;
    }), b(e.exports, 'inRangeOfSector', function () {
        return _s;
    });
    d('.....'), d('.....'), d('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                _m(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
    function _m(n, o, p) {
        return o in n ? Object.defineProperty(n, o, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[o] = p, n;
    }
    var _n = Math.PI / 180, o = function (p) {
            return 180 * p / Math.PI;
        }, _p = function (q, r, s, t) {
            return {
                x: q + Math.cos(-_n * t) * s,
                y: r + Math.sin(-_n * t) * s
            };
        }, q = function (r, s) {
            var t, u, v, w, x, y, z = r.x, A = r.y, B = s.cx, C = s.cy, D = (u = {
                    x: B,
                    y: C
                }, v = (t = {
                    x: z,
                    y: A
                }).x, w = t.y, x = u.x, y = u.y, Math.sqrt(Math.pow(v - x, 2) + Math.pow(w - y, 2)));
            if (D <= 0)
                return { radius: D };
            var E = (z - B) / D, F = Math.acos(E);
            return A > C && (F = 2 * Math.PI - F), {
                radius: D,
                angle: o(F),
                angleInRadian: F
            };
        }, r = function (s, t) {
            var u = t.startAngle, v = t.endAngle, w = Math.floor(u / 360), x = Math.floor(v / 360);
            return s + 360 * Math.min(w, x);
        }, _s = function (t, u) {
            var v = t.x, w = t.y, x = q({
                    x: v,
                    y: w
                }, u), y = x.radius, z = x.angle, A = u.innerRadius, B = u.outerRadius;
            if (y < A || y > B)
                return !1;
            if (0 === y)
                return !0;
            var C, D = function (E) {
                    var F = E.startAngle, G = E.endAngle, H = Math.floor(F / 360), I = Math.floor(G / 360), J = Math.min(H, I);
                    return {
                        startAngle: F - 360 * J,
                        endAngle: G - 360 * J
                    };
                }(u), E = D.startAngle, F = D.endAngle, G = z;
            if (E <= F) {
                for (; G > F;)
                    G -= 360;
                for (; G < E;)
                    G += 360;
                C = G >= E && G <= F;
            } else {
                for (; G > E;)
                    G -= 360;
                for (; G < F;)
                    G += 360;
                C = G >= F && G <= E;
            }
            return C ? j(j({}, u), {}, {
                radius: y,
                angle: r(G, u)
            }) : null;
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'getValueByDataKey', function () {
        return _P;
    }), b(e.exports, 'getDomainOfDataByKey', function () {
        return _Q;
    }), b(e.exports, 'calculateActiveTickIndex', function () {
        return _T;
    }), b(e.exports, 'getMainColorOfGraphicItem', function () {
        return _U;
    }), b(e.exports, 'getLegendProps', function () {
        return _V;
    }), b(e.exports, 'getBarSizeList', function () {
        return _W;
    }), b(e.exports, 'getBarPosition', function () {
        return _X;
    }), b(e.exports, 'appendOffsetOfLegend', function () {
        return _Y;
    }), b(e.exports, 'parseErrorBarsOfAxis', function () {
        return _$;
    }), b(e.exports, 'getDomainOfItemsWithSameAxis', function () {
        return _ab;
    }), b(e.exports, 'isCategoricalAxis', function () {
        return _bb;
    }), b(e.exports, 'getCoordinatesOfGrid', function () {
        return _cb;
    }), b(e.exports, 'getTicksOfAxis', function () {
        return _db;
    }), b(e.exports, 'combineEventHandlers', function () {
        return _eb;
    }), b(e.exports, 'parseScale', function () {
        return _fb;
    }), b(e.exports, 'checkDomainOfScale', function () {
        return _hb;
    }), b(e.exports, 'findPositionOfBar', function () {
        return _ib;
    }), b(e.exports, 'truncateByDomain', function () {
        return _jb;
    }), b(e.exports, 'getStackGroupsByAxisId', function () {
        return _mb;
    }), b(e.exports, 'getTicksOfScale', function () {
        return _nb;
    }), b(e.exports, 'getCateCoordinateOfBar', function () {
        return _ob;
    }), b(e.exports, 'getBaseValueOfBar', function () {
        return _pb;
    }), b(e.exports, 'getStackedDataOfItem', function () {
        return _qb;
    }), b(e.exports, 'getDomainOfStackGroups', function () {
        return _rb;
    }), b(e.exports, 'parseSpecifiedDomain', function () {
        return _ub;
    }), b(e.exports, 'getBandSizeOfAxis', function () {
        return _vb;
    }), b(e.exports, 'parseDomainOfCategoryAxis', function () {
        return _wb;
    }), b(e.exports, 'getTooltipItem', function () {
        return _xb;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    d('.....');
    var s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....'), A = d('.....'), B = d('.....'), C = d('.....'), D = d('.....');
    function E(F) {
        return function (G) {
            if (Array.isArray(G))
                return _F(G);
        }(F) || function (G) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(G))
                return Array.from(G);
        }(F) || function (G, H) {
            if (!G)
                return;
            if ('string' == typeof G)
                return _F(G, H);
            var I = Object.prototype.toString.call(G).slice(8, -1);
            'Object' === I && G.constructor && (I = G.constructor.name);
            if ('Map' === I || 'Set' === I)
                return Array.from(G);
            if ('Arguments' === I || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
                return _F(G, H);
        }(F) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _F(G, H) {
        (null == H || H > G.length) && (H = G.length);
        for (var I = 0, J = new Array(H); I < H; I++)
            J[I] = G[I];
        return J;
    }
    function I(J, K) {
        var L = Object.keys(J);
        if (Object.getOwnPropertySymbols) {
            var M = Object.getOwnPropertySymbols(J);
            K && (M = M.filter(function (N) {
                return Object.getOwnPropertyDescriptor(J, N).enumerable;
            })), L.push.apply(L, M);
        }
        return L;
    }
    function L(M) {
        for (var N = 1; N < arguments.length; N++) {
            var O = null != arguments[N] ? arguments[N] : {};
            N % 2 ? I(Object(O), !0).forEach(function (P) {
                _O(M, P, O[P]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(O)) : I(Object(O)).forEach(function (P) {
                Object.defineProperty(M, P, Object.getOwnPropertyDescriptor(O, P));
            });
        }
        return M;
    }
    function _O(P, Q, R) {
        return Q in P ? Object.defineProperty(P, Q, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : P[Q] = R, P;
    }
    function _P(Q, R, S) {
        return a(r)(Q) || a(r)(R) ? S : (0, A.isNumOrStr)(R) ? a(q)(Q, R, S) : a(p)(R) ? R(Q) : S;
    }
    function _Q(R, S, T, U) {
        var V = a(o)(R, function (W) {
            return _P(W, S);
        });
        if ('number' === T) {
            var W = V.filter(function (X) {
                return (0, A.isNumber)(X) || parseFloat(X);
            });
            return W.length ? [
                a(n)(W),
                a(m)(W)
            ] : [
                1 / 0,
                -1 / 0
            ];
        }
        return (U ? V.filter(function (X) {
            return !a(r)(X);
        }) : V).map(function (X) {
            return (0, A.isNumOrStr)(X) || X instanceof Date ? X : '';
        });
    }
    var _T = function (U) {
            var V, W = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], X = arguments.length > 2 ? arguments[2] : void 0, Y = arguments.length > 3 ? arguments[3] : void 0, Z = -1, $ = null !== (V = null == W ? void 0 : W.length) && void 0 !== V ? V : 0;
            if ($ > 1) {
                if (Y && 'angleAxis' === Y.axisType && Math.abs(Math.abs(Y.range[1] - Y.range[0]) - 360) <= 0.000001)
                    for (var ab = Y.range, bb = 0; bb < $; bb++) {
                        var cb = bb > 0 ? X[bb - 1].coordinate : X[$ - 1].coordinate, db = X[bb].coordinate, eb = bb >= $ - 1 ? X[0].coordinate : X[bb + 1].coordinate, fb = void 0;
                        if ((0, A.mathSign)(db - cb) !== (0, A.mathSign)(eb - db)) {
                            var gb = [];
                            if ((0, A.mathSign)(eb - db) === (0, A.mathSign)(ab[1] - ab[0])) {
                                fb = eb;
                                var hb = db + ab[1] - ab[0];
                                gb[0] = Math.min(hb, (hb + cb) / 2), gb[1] = Math.max(hb, (hb + cb) / 2);
                            } else {
                                fb = cb;
                                var ib = eb + ab[1] - ab[0];
                                gb[0] = Math.min(db, (ib + db) / 2), gb[1] = Math.max(db, (ib + db) / 2);
                            }
                            var jb = [
                                Math.min(db, (fb + db) / 2),
                                Math.max(db, (fb + db) / 2)
                            ];
                            if (U > jb[0] && U <= jb[1] || U >= gb[0] && U <= gb[1]) {
                                Z = X[bb].index;
                                break;
                            }
                        } else {
                            var kb = Math.min(cb, eb), lb = Math.max(cb, eb);
                            if (U > (kb + db) / 2 && U <= (lb + db) / 2) {
                                Z = X[bb].index;
                                break;
                            }
                        }
                    }
                else
                    for (var mb = 0; mb < $; mb++)
                        if (0 === mb && U <= (W[mb].coordinate + W[mb + 1].coordinate) / 2 || mb > 0 && mb < $ - 1 && U > (W[mb].coordinate + W[mb - 1].coordinate) / 2 && U <= (W[mb].coordinate + W[mb + 1].coordinate) / 2 || mb === $ - 1 && U > (W[mb].coordinate + W[mb - 1].coordinate) / 2) {
                            Z = W[mb].index;
                            break;
                        }
            } else
                Z = 0;
            return Z;
        }, _U = function (V) {
            var W, X = V.type.displayName, Y = V.props, Z = Y.stroke, $ = Y.fill;
            switch (X) {
            case 'Line':
                W = Z;
                break;
            case 'Area':
            case 'Radar':
                W = Z && 'none' !== Z ? Z : $;
                break;
            default:
                W = $;
            }
            return W;
        }, _V = function (W) {
            var X, Y = W.children, Z = W.formattedGraphicalItems, $ = W.legendWidth, ab = W.legendContent, bb = (0, C.findChildByType)(Y, B.Legend.displayName);
            return bb ? (X = bb.props && bb.props.payload ? bb.props && bb.props.payload : 'children' === ab ? (Z || []).reduce(function (cb, db) {
                var eb = db.item, fb = db.props, gb = fb.sectors || fb.data || [];
                return cb.concat(gb.map(function (hb) {
                    return {
                        type: bb.props.iconType || eb.props.legendType,
                        value: hb.name,
                        color: hb.fill,
                        payload: hb
                    };
                }));
            }, []) : (Z || []).map(function (cb) {
                var db = cb.item, eb = db.props, fb = eb.dataKey, gb = eb.name, hb = eb.legendType;
                return {
                    inactive: eb.hide,
                    dataKey: fb,
                    type: bb.props.iconType || hb || 'square',
                    color: _U(db),
                    value: gb || fb,
                    payload: db.props
                };
            }), L(L(L({}, bb.props), B.Legend.getWithHeight(bb, $)), {}, {
                payload: X,
                item: bb
            })) : null;
        }, _W = function (X) {
            var Y = X.barSize, Z = X.stackGroups, $ = void 0 === Z ? {} : Z;
            if (!$)
                return {};
            for (var ab = {}, bb = Object.keys($), cb = 0, db = bb.length; cb < db; cb++)
                for (var eb = $[bb[cb]].stackGroups, fb = Object.keys(eb), gb = 0, hb = fb.length; gb < hb; gb++) {
                    var ib = eb[fb[gb]], jb = ib.items, kb = ib.cateAxisId, lb = jb.filter(function (mb) {
                            return (0, C.getDisplayName)(mb.type).indexOf('Bar') >= 0;
                        });
                    if (lb && lb.length) {
                        var mb = lb[0].props.barSize, nb = lb[0].props[kb];
                        ab[nb] || (ab[nb] = []), ab[nb].push({
                            item: lb[0],
                            stackList: lb.slice(1),
                            barSize: a(r)(mb) ? Y : mb
                        });
                    }
                }
            return ab;
        }, _X = function (Y) {
            var Z = Y.barGap, $ = Y.barCategoryGap, ab = Y.bandSize, bb = Y.sizeList, cb = void 0 === bb ? [] : bb, db = Y.maxBarSize, eb = cb.length;
            if (eb < 1)
                return null;
            var fb, gb = (0, A.getPercentValue)(Z, ab, 0, !0);
            if (cb[0].barSize === +cb[0].barSize) {
                var hb = !1, ib = ab / eb, jb = cb.reduce(function (kb, lb) {
                        return kb + lb.barSize || 0;
                    }, 0);
                (jb += (eb - 1) * gb) >= ab && (jb -= (eb - 1) * gb, gb = 0), jb >= ab && ib > 0 && (hb = !0, jb = eb * (ib *= 0.9));
                var kb = {
                    offset: ((ab - jb) / 2 >> 0) - gb,
                    size: 0
                };
                fb = cb.reduce(function (lb, mb) {
                    var nb = [].concat(E(lb), [{
                            item: mb.item,
                            position: {
                                offset: kb.offset + kb.size + gb,
                                size: hb ? ib : mb.barSize
                            }
                        }]);
                    return kb = nb[nb.length - 1].position, mb.stackList && mb.stackList.length && mb.stackList.forEach(function (ob) {
                        nb.push({
                            item: ob,
                            position: kb
                        });
                    }), nb;
                }, []);
            } else {
                var lb = (0, A.getPercentValue)($, ab, 0, !0);
                ab - 2 * lb - (eb - 1) * gb <= 0 && (gb = 0);
                var mb = (ab - 2 * lb - (eb - 1) * gb) / eb;
                mb > 1 && (mb >>= 0);
                var nb = db === +db ? Math.min(mb, db) : mb;
                fb = cb.reduce(function (ob, pb, qb) {
                    var rb = [].concat(E(ob), [{
                            item: pb.item,
                            position: {
                                offset: lb + (mb + gb) * qb + (mb - nb) / 2,
                                size: nb
                            }
                        }]);
                    return pb.stackList && pb.stackList.length && pb.stackList.forEach(function (sb) {
                        rb.push({
                            item: sb,
                            position: rb[rb.length - 1].position
                        });
                    }), rb;
                }, []);
            }
            return fb;
        }, _Y = function (Z, $, ab, bb) {
            var cb = ab.children, db = ab.width, eb = ab.margin, fb = db - (eb.left || 0) - (eb.right || 0), gb = _V({
                    children: cb,
                    legendWidth: fb
                }), hb = Z;
            if (gb) {
                var ib = bb || {}, jb = gb.align, kb = gb.verticalAlign, lb = gb.layout;
                ('vertical' === lb || 'horizontal' === lb && 'center' === kb) && (0, A.isNumber)(Z[jb]) && (hb = L(L({}, Z), {}, _O({}, jb, hb[jb] + (ib.width || 0)))), ('horizontal' === lb || 'vertical' === lb && 'center' === jb) && (0, A.isNumber)(Z[kb]) && (hb = L(L({}, Z), {}, _O({}, kb, hb[kb] + (ib.height || 0))));
            }
            return hb;
        }, Z = function ($, ab, bb, cb, db) {
            var eb = ab.props.children, fb = (0, C.findAllByType)(eb, 'ErrorBar').filter(function (gb) {
                    return function (hb, ib, jb) {
                        return !!a(r)(ib) || ('horizontal' === hb ? 'yAxis' === ib : 'vertical' === hb || 'x' === jb ? 'xAxis' === ib : 'y' !== jb || 'yAxis' === ib);
                    }(cb, db, gb.props.direction);
                });
            if (fb && fb.length) {
                var gb = fb.map(function (hb) {
                    return hb.props.dataKey;
                });
                return $.reduce(function (hb, ib) {
                    var jb = _P(ib, bb, 0), kb = a(l)(jb) ? [
                            a(n)(jb),
                            a(m)(jb)
                        ] : [
                            jb,
                            jb
                        ], lb = gb.reduce(function (mb, nb) {
                            var ob = _P(ib, nb, 0), pb = kb[0] - Math.abs(a(l)(ob) ? ob[0] : ob), qb = kb[1] + Math.abs(a(l)(ob) ? ob[1] : ob);
                            return [
                                Math.min(pb, mb[0]),
                                Math.max(qb, mb[1])
                            ];
                        }, [
                            1 / 0,
                            -1 / 0
                        ]);
                    return [
                        Math.min(lb[0], hb[0]),
                        Math.max(lb[1], hb[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            }
            return null;
        }, _$ = function (ab, bb, cb, db, eb) {
            var fb = bb.map(function (gb) {
                return Z(ab, gb, cb, eb, db);
            }).filter(function (gb) {
                return !a(r)(gb);
            });
            return fb && fb.length ? fb.reduce(function (gb, hb) {
                return [
                    Math.min(gb[0], hb[0]),
                    Math.max(gb[1], hb[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]) : null;
        }, _ab = function (bb, cb, db, eb, fb) {
            var gb = cb.map(function (hb) {
                var ib = hb.props.dataKey;
                return 'number' === db && ib && Z(bb, hb, ib, eb) || _Q(bb, ib, db, fb);
            });
            if ('number' === db)
                return gb.reduce(function (hb, ib) {
                    return [
                        Math.min(hb[0], ib[0]),
                        Math.max(hb[1], ib[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            var hb = {};
            return gb.reduce(function (ib, jb) {
                for (var kb = 0, lb = jb.length; kb < lb; kb++)
                    hb[jb[kb]] || (hb[jb[kb]] = !0, ib.push(jb[kb]));
                return ib;
            }, []);
        }, _bb = function (cb, db) {
            return 'horizontal' === cb && 'xAxis' === db || 'vertical' === cb && 'yAxis' === db || 'centric' === cb && 'angleAxis' === db || 'radial' === cb && 'radiusAxis' === db;
        }, _cb = function (db, eb, fb) {
            var gb, hb, ib = db.map(function (jb) {
                    return jb.coordinate === eb && (gb = !0), jb.coordinate === fb && (hb = !0), jb.coordinate;
                });
            return gb || ib.push(eb), hb || ib.push(fb), ib;
        }, _db = function (eb, fb, gb) {
            if (!eb)
                return null;
            var hb = eb.scale, ib = eb.duplicateDomain, jb = eb.type, kb = eb.range, lb = 'scaleBand' === eb.realScaleType ? hb.bandwidth() / 2 : 2, mb = (fb || gb) && 'category' === jb && hb.bandwidth ? hb.bandwidth() / lb : 0;
            return mb = 'angleAxis' === eb.axisType ? 2 * (0, A.mathSign)(kb[0] - kb[1]) * mb : mb, fb && (eb.ticks || eb.niceTicks) ? (eb.ticks || eb.niceTicks).map(function (nb) {
                var ob = ib ? ib.indexOf(nb) : nb;
                return {
                    coordinate: hb(ob) + mb,
                    value: nb,
                    offset: mb
                };
            }) : eb.isCategorical && eb.categoricalDomain ? eb.categoricalDomain.map(function (nb, ob) {
                return {
                    coordinate: hb(nb) + mb,
                    value: nb,
                    index: ob,
                    offset: mb
                };
            }) : hb.ticks && !gb ? hb.ticks(eb.tickCount).map(function (nb) {
                return {
                    coordinate: hb(nb) + mb,
                    value: nb,
                    offset: mb
                };
            }) : hb.domain().map(function (nb, ob) {
                return {
                    coordinate: hb(nb) + mb,
                    value: ib ? ib[nb] : nb,
                    index: ob,
                    offset: mb
                };
            });
        }, _eb = function (fb, gb, hb) {
            var ib;
            return a(p)(hb) ? ib = hb : a(p)(gb) && (ib = gb), a(p)(fb) || ib ? function (jb, kb, lb, mb) {
                a(p)(fb) && fb(jb, kb, lb, mb), a(p)(ib) && ib(jb, kb, lb, mb);
            } : null;
        }, _fb = function (gb, hb, ib) {
            var jb = gb.scale, kb = gb.type, lb = gb.layout, mb = gb.axisType;
            if ('auto' === jb)
                return 'radial' === lb && 'radiusAxis' === mb ? {
                    scale: t.scaleBand(),
                    realScaleType: 'band'
                } : 'radial' === lb && 'angleAxis' === mb ? {
                    scale: t.scaleLinear(),
                    realScaleType: 'linear'
                } : 'category' === kb && hb && (hb.indexOf('LineChart') >= 0 || hb.indexOf('AreaChart') >= 0 || hb.indexOf('ComposedChart') >= 0 && !ib) ? {
                    scale: t.scalePoint(),
                    realScaleType: 'point'
                } : 'category' === kb ? {
                    scale: t.scaleBand(),
                    realScaleType: 'band'
                } : {
                    scale: t.scaleLinear(),
                    realScaleType: 'linear'
                };
            if (a(k)(jb)) {
                var nb = 'scale'.concat(a(j)(jb));
                return {
                    scale: (t[nb] || t.scalePoint)(),
                    realScaleType: t[nb] ? nb : 'point'
                };
            }
            return a(p)(jb) ? { scale: jb } : {
                scale: t.scalePoint(),
                realScaleType: 'point'
            };
        }, gb = 0.0001, _hb = function (ib) {
            var jb = ib.domain();
            if (jb && !(jb.length <= 2)) {
                var kb = jb.length, lb = ib.range(), mb = Math.min(lb[0], lb[1]) - gb, nb = Math.max(lb[0], lb[1]) + gb, ob = ib(jb[0]), pb = ib(jb[kb - 1]);
                (ob < mb || ob > nb || pb < mb || pb > nb) && ib.domain([
                    jb[0],
                    jb[kb - 1]
                ]);
            }
        }, _ib = function (jb, kb) {
            if (!jb)
                return null;
            for (var lb = 0, mb = jb.length; lb < mb; lb++)
                if (jb[lb].item === kb)
                    return jb[lb].position;
            return null;
        }, _jb = function (kb, lb) {
            if (!lb || 2 !== lb.length || !(0, A.isNumber)(lb[0]) || !(0, A.isNumber)(lb[1]))
                return kb;
            var mb = Math.min(lb[0], lb[1]), nb = Math.max(lb[0], lb[1]), ob = [
                    kb[0],
                    kb[1]
                ];
            return (!(0, A.isNumber)(kb[0]) || kb[0] < mb) && (ob[0] = mb), (!(0, A.isNumber)(kb[1]) || kb[1] > nb) && (ob[1] = nb), ob[0] > nb && (ob[0] = nb), ob[1] < mb && (ob[1] = mb), ob;
        }, kb = {
            sign: function (lb) {
                var mb = lb.length;
                if (!(mb <= 0))
                    for (var nb = 0, ob = lb[0].length; nb < ob; ++nb)
                        for (var pb = 0, qb = 0, rb = 0; rb < mb; ++rb) {
                            var sb = a(i)(lb[rb][nb][1]) ? lb[rb][nb][0] : lb[rb][nb][1];
                            sb >= 0 ? (lb[rb][nb][0] = pb, lb[rb][nb][1] = pb + sb, pb = lb[rb][nb][1]) : (lb[rb][nb][0] = qb, lb[rb][nb][1] = qb + sb, qb = lb[rb][nb][1]);
                        }
            },
            expand: v.default,
            none: w.default,
            silhouette: x.default,
            wiggle: y.default,
            positive: function (lb) {
                var mb = lb.length;
                if (!(mb <= 0))
                    for (var nb = 0, ob = lb[0].length; nb < ob; ++nb)
                        for (var pb = 0, qb = 0; qb < mb; ++qb) {
                            var rb = a(i)(lb[qb][nb][1]) ? lb[qb][nb][0] : lb[qb][nb][1];
                            rb >= 0 ? (lb[qb][nb][0] = pb, lb[qb][nb][1] = pb + rb, pb = lb[qb][nb][1]) : (lb[qb][nb][0] = 0, lb[qb][nb][1] = 0);
                        }
            }
        }, lb = function (mb, nb, ob) {
            var pb = nb.map(function (qb) {
                return qb.props.dataKey;
            });
            return (0, u.default)().keys(pb).value(function (qb, rb) {
                return +_P(qb, rb, 0);
            }).order(z.default).offset(kb[ob])(mb);
        }, _mb = function (nb, ob, pb, qb, rb, sb) {
            if (!nb)
                return null;
            var tb = (sb ? ob.reverse() : ob).reduce(function (ub, vb) {
                var wb = vb.props, xb = wb.stackId;
                if (wb.hide)
                    return ub;
                var yb = vb.props[pb], zb = ub[yb] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if ((0, A.isNumOrStr)(xb)) {
                    var Ab = zb.stackGroups[xb] || {
                        numericAxisId: pb,
                        cateAxisId: qb,
                        items: []
                    };
                    Ab.items.push(vb), zb.hasStack = !0, zb.stackGroups[xb] = Ab;
                } else
                    zb.stackGroups[(0, A.uniqueId)('_stackId_')] = {
                        numericAxisId: pb,
                        cateAxisId: qb,
                        items: [vb]
                    };
                return L(L({}, ub), {}, _O({}, yb, zb));
            }, {});
            return Object.keys(tb).reduce(function (ub, vb) {
                var wb = tb[vb];
                return wb.hasStack && (wb.stackGroups = Object.keys(wb.stackGroups).reduce(function (xb, yb) {
                    var zb = wb.stackGroups[yb];
                    return L(L({}, xb), {}, _O({}, yb, {
                        numericAxisId: pb,
                        cateAxisId: qb,
                        items: zb.items,
                        stackedData: lb(nb, zb.items, rb)
                    }));
                }, {})), L(L({}, ub), {}, _O({}, vb, wb));
            }, {});
        }, _nb = function (ob, pb) {
            var qb = pb.realScaleType, rb = pb.type, sb = pb.tickCount, tb = pb.originalDomain, ub = pb.allowDecimals, vb = qb || pb.scale;
            if ('auto' !== vb && 'linear' !== vb)
                return null;
            if (sb && 'number' === rb && tb && ('auto' === tb[0] || 'auto' === tb[1])) {
                var wb = ob.domain();
                if (!wb.length)
                    return null;
                var xb = (0, s.getNiceTickValues)(wb, sb, ub);
                return ob.domain(function (yb, zb) {
                    return 'number' === zb ? [
                        a(n)(yb),
                        a(m)(yb)
                    ] : yb;
                }(xb, rb)), { niceTicks: xb };
            }
            if (sb && 'number' === rb) {
                var yb = ob.domain();
                return { niceTicks: (0, s.getTickValuesFixedDomain)(yb, sb, ub) };
            }
            return null;
        }, _ob = function (pb) {
            var qb = pb.axis, rb = pb.ticks, sb = pb.offset, tb = pb.bandSize, ub = pb.entry, vb = pb.index;
            if ('category' === qb.type)
                return rb[vb] ? rb[vb].coordinate + sb : null;
            var wb = _P(ub, qb.dataKey, qb.domain[vb]);
            return a(r)(wb) ? null : qb.scale(wb) - tb / 2 + sb;
        }, _pb = function (qb) {
            var rb = qb.numericAxis, sb = rb.scale.domain();
            if ('number' === rb.type) {
                var tb = Math.min(sb[0], sb[1]), ub = Math.max(sb[0], sb[1]);
                return tb <= 0 && ub >= 0 ? 0 : ub < 0 ? ub : tb;
            }
            return sb[0];
        }, _qb = function (rb, sb) {
            var tb = rb.props.stackId;
            if ((0, A.isNumOrStr)(tb)) {
                var ub = sb[tb];
                if (ub && ub.items.length) {
                    for (var vb = -1, wb = 0, xb = ub.items.length; wb < xb; wb++)
                        if (ub.items[wb] === rb) {
                            vb = wb;
                            break;
                        }
                    return vb >= 0 ? ub.stackedData[vb] : null;
                }
            }
            return null;
        }, _rb = function (sb, tb, ub) {
            return Object.keys(sb).reduce(function (vb, wb) {
                var xb = sb[wb].stackedData.reduce(function (yb, zb) {
                    var Ab = zb.slice(tb, ub + 1).reduce(function (Bb, Cb) {
                        return [
                            a(n)(Cb.concat([Bb[0]]).filter(A.isNumber)),
                            a(m)(Cb.concat([Bb[1]]).filter(A.isNumber))
                        ];
                    }, [
                        1 / 0,
                        -1 / 0
                    ]);
                    return [
                        Math.min(yb[0], Ab[0]),
                        Math.max(yb[1], Ab[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
                return [
                    Math.min(xb[0], vb[0]),
                    Math.max(xb[1], vb[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]).map(function (vb) {
                return vb === 1 / 0 || vb === -1 / 0 ? 0 : vb;
            });
        }, sb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, tb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, _ub = function (vb, wb, xb) {
            if (a(p)(vb))
                return vb(wb, xb);
            if (!a(l)(vb))
                return wb;
            var yb = [];
            if ((0, A.isNumber)(vb[0]))
                yb[0] = xb ? vb[0] : Math.min(vb[0], wb[0]);
            else if (sb.test(vb[0])) {
                var zb = +sb.exec(vb[0])[1];
                yb[0] = wb[0] - zb;
            } else
                a(p)(vb[0]) ? yb[0] = vb[0](wb[0]) : yb[0] = wb[0];
            if ((0, A.isNumber)(vb[1]))
                yb[1] = xb ? vb[1] : Math.max(vb[1], wb[1]);
            else if (tb.test(vb[1])) {
                var Ab = +tb.exec(vb[1])[1];
                yb[1] = wb[1] + Ab;
            } else
                a(p)(vb[1]) ? yb[1] = vb[1](wb[1]) : yb[1] = wb[1];
            return yb;
        }, _vb = function (wb, xb, yb) {
            if (wb && wb.scale && wb.scale.bandwidth) {
                var zb = wb.scale.bandwidth();
                if (!yb || zb > 0)
                    return zb;
            }
            if (wb && xb && xb.length >= 2) {
                for (var Ab = a(W)(xb, function (Bb) {
                            return Bb.coordinate;
                        }), Bb = 1 / 0, Cb = 1, Db = Ab.length; Cb < Db; Cb++) {
                    var Eb = Ab[Cb], Fb = Ab[Cb - 1];
                    Bb = Math.min((Eb.coordinate || 0) - (Fb.coordinate || 0), Bb);
                }
                return Bb === 1 / 0 ? 0 : Bb;
            }
            return yb ? void 0 : 0;
        }, _wb = function (xb, yb, zb) {
            return xb && xb.length ? a(V)(xb, a(q)(zb, 'type.defaultProps.domain')) ? yb : xb : yb;
        }, _xb = function (yb, zb) {
            var Ab = yb.props, Bb = Ab.dataKey, Cb = Ab.name, Db = Ab.unit, Eb = Ab.formatter, Fb = Ab.tooltipType, Gb = Ab.chartType;
            return L(L({}, (0, D.filterProps)(yb)), {}, {
                dataKey: Bb,
                unit: Db,
                formatter: Eb,
                name: Cb || Bb,
                color: _U(yb),
                value: _P(zb, Bb),
                type: Fb,
                payload: zb,
                chartType: Gb
            });
        };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = i(function (l, m) {
            if (null == l)
                return [];
            var n = m.length;
            return n > 1 && j(l, m[0], m[1]) ? m = [] : n > 2 && j(m[0], m[1], m[2]) && (m = [m[0]]), h(l, g(m, 1), []);
        });
    e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function e(i, j, k, l, m) {
        var n = -1, o = i.length;
        for (k || (k = h), m || (m = []); ++n < o;) {
            var p = i[n];
            j > 0 && k(p) ? j > 1 ? e(p, j - 1, k, l, m) : g(m, p) : l || (m[m.length] = p);
        }
        return m;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = g ? g.isConcatSpreadable : void 0;
    e.exports = function (k) {
        return i(k) || h(k) || !!(j && k && k[j]);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    e.exports = function (p, q, r) {
        q = q.length ? g(q, function (s) {
            return o(s) ? function (t) {
                return h(t, 1 === s.length ? s[0] : s);
            } : s;
        }) : [n];
        var s = -1;
        q = g(q, l(i));
        var t = j(p, function (u, v, w) {
            return {
                criteria: g(q, function (x) {
                    return x(u);
                }),
                index: ++s,
                value: u
            };
        });
        return k(t, function (u, v) {
            return m(u, v, r);
        });
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    e.exports = function (l) {
        return 'function' == typeof l ? l : null == l ? i : 'object' == typeof l ? j(l) ? h(l[0], l[1]) : g(l) : k(l);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        var k = h(j);
        return 1 == k.length && k[0][2] ? i(k[0][0], k[0][1]) : function (l) {
            return l === j || g(l, j, k);
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j, k, l) {
        var m = k.length, n = m, o = !l;
        if (null == i)
            return !n;
        for (i = Object(i); m--;) {
            var p = k[m];
            if (o && p[2] ? p[1] !== i[p[0]] : !(p[0] in i))
                return !1;
        }
        for (; ++m < n;) {
            var q = (p = k[m])[0], r = i[q], s = p[1];
            if (o && p[2]) {
                if (void 0 === r && !(q in i))
                    return !1;
            } else {
                var t = new g();
                if (l)
                    var u = l(r, s, q, i, j, t);
                if (!(void 0 === u ? h(s, r, 3, l, t) : u))
                    return !1;
            }
        }
        return !0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        for (var j = h(i), k = j.length; k--;) {
            var l = j[k], m = i[l];
            j[k] = [
                l,
                m,
                g(m)
            ];
        }
        return j;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return h == h && !g(h);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return function (i) {
            return null != i && (i[g] === h && (void 0 !== h || g in Object(i)));
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    e.exports = function (n, o) {
        return j(n) && k(o) ? l(m(n), o) : function (p) {
            var q = h(p, n);
            return void 0 === q && q === o ? i(p, n) : g(o, q, 3);
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        return null != i && h(i, j, g);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return null != g && h in Object(g);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    e.exports = function (m, n, o) {
        for (var p = -1, q = (n = g(n, m)).length, r = !1; ++p < q;) {
            var s = l(n[p]);
            if (!(r = null != m && o(m, s)))
                break;
            m = m[s];
        }
        return r || ++p != q ? r : !!(q = null == m ? 0 : m.length) && k(q) && j(s, q) && (i(m) || h(m));
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    e.exports = function (k) {
        return i(k) ? g(j(k)) : h(k);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return function (h) {
            return null == h ? void 0 : h[g];
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return function (i) {
            return g(i, h);
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        var k = -1, l = h(i) ? Array(i.length) : [];
        return g(i, function (m, n, o) {
            l[++k] = j(m, n, o);
        }), l;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....')(g);
    e.exports = h;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        return i && g(i, j, h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')();
    e.exports = g;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return function (h, i, j) {
            for (var k = -1, l = Object(h), m = j(h), n = m.length; n--;) {
                var o = m[g ? n : ++k];
                if (!1 === i(l[o], o, l))
                    break;
            }
            return h;
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        return function (j, k) {
            if (null == j)
                return j;
            if (!g(j))
                return h(j, k);
            for (var l = j.length, m = i ? l : -1, n = Object(j); (i ? m-- : ++m < l) && !1 !== k(n[m], m, n););
            return j;
        };
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        var i = g.length;
        for (g.sort(h); i--;)
            g[i] = g[i].value;
        return g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i, j) {
        for (var k = -1, l = h.criteria, m = i.criteria, n = l.length, o = j.length; ++k < n;) {
            var p = g(l[k], m[k]);
            if (p)
                return k >= o ? p : p * ('desc' == j[k] ? -1 : 1);
        }
        return h.index - i.index;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        if (h !== i) {
            var j = void 0 !== h, k = null === h, l = h == h, m = g(h), n = void 0 !== i, o = null === i, p = i == i, q = g(i);
            if (!o && !q && !m && h > i || m && n && p && !o && !q || k && n && p || !j && p || !l)
                return 1;
            if (!k && !m && !q && h < i || q && j && l && !k && !m || o && j && l || !n && l || !p)
                return -1;
        }
        return 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j, k) {
        return i(h(j, k, g), j + '');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Math.max;
    e.exports = function (i, j, k) {
        return j = h(void 0 === j ? i.length - 1 : j, 0), function () {
            for (var l = arguments, m = -1, n = h(l.length - j, 0), o = Array(n); ++m < n;)
                o[m] = l[j + m];
            m = -1;
            for (var p = Array(j + 1); ++m < j;)
                p[m] = l[m];
            return p[j] = k(o), g(i, this, p);
        };
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h, i) {
        switch (i.length) {
        case 0:
            return g.call(h);
        case 1:
            return g.call(h, i[0]);
        case 2:
            return g.call(h, i[0], i[1]);
        case 3:
            return g.call(h, i[0], i[1], i[2]);
        }
        return g.apply(h, i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....')(g);
    e.exports = h;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = h ? function (k, l) {
            return h(k, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: g(l),
                writable: !0
            });
        } : i;
    e.exports = j;
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return function () {
            return g;
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = function () {
            try {
                var i = g(Object, 'defineProperty');
                return i({}, '', {}), i;
            } catch (i) {
            }
        }();
    e.exports = h;
}), d.register('.....', function (e, f) {
    var g = Date.now;
    e.exports = function (h) {
        var i = 0, j = 0;
        return function () {
            var k = g(), l = 16 - (k - j);
            if (j = k, l > 0) {
                if (++i >= 800)
                    return arguments[0];
            } else
                i = 0;
            return h.apply(void 0, arguments);
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    e.exports = function (k, l, m) {
        if (!j(m))
            return !1;
        var n = typeof l;
        return !!('number' == n ? h(m) && i(l, m.length) : 'string' == n && l in m) && g(m[l], k);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')('toUpperCase');
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    e.exports = function (k) {
        return function (l) {
            l = j(l);
            var m = h(l) ? i(l) : void 0, n = m ? m[0] : l.charAt(0), o = m ? g(m, 1).join('') : l.slice(1);
            return n[k]() + o;
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i, j) {
        var k = h.length;
        return j = void 0 === j ? k : j, !i && j >= k ? h : g(h, i, j);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h, i) {
        var j = -1, k = g.length;
        h < 0 && (h = -h > k ? 0 : k + h), (i = i > k ? k : i) < 0 && (i += k), k = h > i ? 0 : i - h >>> 0, h >>>= 0;
        for (var l = Array(k); ++j < k;)
            l[j] = g[j + h];
        return l;
    };
}), d.register('.....', function (e, f) {
    var g = RegExp('[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
    e.exports = function (h) {
        return g.test(h);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return h(j) ? i(j) : g(j);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return g.split('');
    };
}), d.register('.....', function (e, f) {
    var g = '[\uD800-\uDFFF]', h = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', i = '\uD83C[\uDFFB-\uDFFF]', j = '[^\uD800-\uDFFF]', k = '(?:\uD83C[\uDDE6-\uDDFF]){2}', l = '[\uD800-\uDBFF][\uDC00-\uDFFF]', m = '(?:' + h + '|' + i + ')' + '?', n = '[\\ufe0e\\ufe0f]?', o = n + m + ('(?:\\u200d(?:' + [
            j,
            k,
            l
        ].join('|') + ')' + n + m + ')*'), p = '(?:' + [
            j + h + '?',
            h,
            k,
            l,
            g
        ].join('|') + ')', q = RegExp(i + '(?=' + i + ')|' + p + o, 'g');
    e.exports = function (r) {
        return r.match(q) || [];
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return j && j.length ? g(j, i, h) : void 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i, j) {
        for (var k = -1, l = h.length; ++k < l;) {
            var m = h[k], n = i(m);
            if (null != n && (void 0 === _o ? n == n && !g(n) : j(n, _o)))
                var _o = n, p = m;
        }
        return p;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return g > h;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return j && j.length ? g(j, i, h) : void 0;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        return g < h;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        return g(h(i, j), 1);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    e.exports = function (k, l) {
        return (j(k) ? g : i)(k, h(l, 3));
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'getNiceTickValues', function () {
        return d('.....').getNiceTickValues;
    }), b(e.exports, 'getTickValuesFixedDomain', function () {
        return d('.....').getTickValuesFixedDomain;
    });
    d('.....');
}), d.register('.....', function (e, f) {
    b(e.exports, 'getNiceTickValues', function () {
        return _O;
    }), b(e.exports, 'getTickValuesFixedDomain', function () {
        return _P;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        return function (l) {
            if (Array.isArray(l))
                return _n(l);
        }(k) || function (l) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(l))
                return Array.from(l);
        }(k) || _l(k) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function k(l, m) {
        return function (n) {
            if (Array.isArray(n))
                return n;
        }(l) || function (n, o) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(n)))
                return;
            var p = [], q = !0, r = !1, s = void 0;
            try {
                for (var t, u = n[Symbol.iterator](); !(q = (t = u.next()).done) && (p.push(t.value), !o || p.length !== o); q = !0);
            } catch (n) {
                r = !0, s = n;
            } finally {
                try {
                    q || null == u.return || u.return();
                } finally {
                    if (r)
                        throw s;
                }
            }
            return p;
        }(l, m) || _l(l, m) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _l(m, n) {
        if (m) {
            if ('string' == typeof m)
                return _n(m, n);
            var o = Object.prototype.toString.call(m).slice(8, -1);
            return 'Object' === o && m.constructor && (o = m.constructor.name), 'Map' === o || 'Set' === o ? Array.from(m) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _n(m, n) : void 0;
        }
    }
    function _n(o, p) {
        (null == p || p > o.length) && (p = o.length);
        for (var q = 0, r = new Array(p); q < p; q++)
            r[q] = o[q];
        return r;
    }
    function q(r) {
        var s = k(r, 2), t = s[0], u = s[1], v = t, w = u;
        return t > u && (v = u, w = t), [
            v,
            w
        ];
    }
    function w(x, y, z) {
        if (x.lte(0))
            return new (a(w))(0);
        var A = i.default.getDigitCount(x.toNumber()), B = new (a(w))(10).pow(A), C = x.div(B), D = 1 !== A ? 0.05 : 0.1, E = new (a(w))(Math.ceil(j.div(k).toNumber())).add(z).mul(k).mul(B);
        return y ? _l : new (a(w))(Math.ceil(_l));
    }
    function C(D, E, F) {
        var G = 1, H = new (a(w))(D);
        if (!j.isint() && F) {
            var I = Math.abs(D);
            k < 1 ? (G = new (a(w))(10).pow(i.default.getDigitCount(D) - 1), j = new (a(w))(Math.floor(j.div(G).toNumber())).mul(G)) : k > 1 && (j = new (a(w))(Math.floor(D)));
        } else
            0 === D ? j = new (a(w))(Math.floor((E - 1) / 2)) : F || (j = new (a(w))(Math.floor(D)));
        var J = Math.floor((E - 1) / 2);
        return (0, B.compose)((0, B.map)(function (K) {
            return j.add(new (a(w))(K - _l).mul(G)).toNumber();
        }), B.range)(0, E);
    }
    function H(I, J, K, L) {
        var M = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((J - I) / (K - 1)))
            return {
                step: new (a(w))(0),
                tickMin: new (a(w))(0),
                tickMax: new (a(w))(0)
            };
        var N, O = w(new (a(w))(J).sub(I).div(K - 1), L, M);
        N = I <= 0 && J >= 0 ? new (a(w))(0) : (N = new (a(w))(I).add(J).div(2)).sub(new (a(w))(N).mod(j));
        var P = Math.ceil(N.sub(I).div(j).toNumber()), Q = Math.ceil(new (a(w))(J).sub(N).div(j).toNumber()), R = k + _l + 1;
        return _n > K ? H(I, J, K, L, M + 1) : (_n < K && (_l = J > 0 ? _l + (K - _n) : _l, k = J > 0 ? k : k + (K - _n)), {
            step: j,
            tickMin: N.sub(new (a(w))(k).mul(j)),
            tickMax: N.add(new (a(w))(_l).mul(j))
        });
    }
    var _O = (0, M.memoize)(function (P) {
            var Q = k(P, 2), R = Q[0], S = Q[1], T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6, U = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], V = Math.max(T, 2), W = q([
                    R,
                    S
                ]), X = k(W, 2), Y = X[0], Z = X[1];
            if (Y === -1 / 0 || Z === 1 / 0) {
                var $ = Z === 1 / 0 ? [Y].concat(j((0, M.range)(0, T - 1).map(function () {
                    return 1 / 0;
                }))) : [].concat(j((0, M.range)(0, T - 1).map(function () {
                    return -1 / 0;
                })), [Z]);
                return R > S ? (0, M.reverse)($) : $;
            }
            if (Y === Z)
                return C(Y, T, U);
            var ab = H(Y, Z, V, U), bb = ab.step, cb = ab.tickMin, db = ab.tickMax, eb = N.default.rangeStep(cb, db.add(new (a(w))(0.1).mul(bb)), bb);
            return R > S ? (0, M.reverse)(eb) : eb;
        }), _P = ((0, M.memoize)(function (Q) {
            var R = k(Q, 2), S = R[0], T = R[1], U = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6, V = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], W = Math.max(U, 2), X = q([
                    S,
                    T
                ]), Y = k(X, 2), Z = Y[0], $ = Y[1];
            if (Z === -1 / 0 || $ === 1 / 0)
                return [
                    S,
                    T
                ];
            if (Z === $)
                return C(Z, U, V);
            var ab = w(new (a(w))($).sub(Z).div(W - 1), V, 0), bb = (0, M.compose)((0, M.map)(function (cb) {
                    return new (a(w))(Z).add(new (a(w))(cb).mul(ab)).toNumber();
                }), M.range), cb = bb(0, W).filter(function (db) {
                    return db >= Z && db <= $;
                });
            return S > T ? (0, M.reverse)(cb) : cb;
        }), (0, M.memoize)(function (Q, R) {
            var S = k(Q, 2), T = S[0], U = S[1], V = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], W = q([
                    T,
                    U
                ]), X = k(W, 2), Y = X[0], Z = X[1];
            if (Y === -1 / 0 || Z === 1 / 0)
                return [
                    T,
                    U
                ];
            if (Y === Z)
                return [Y];
            var $ = Math.max(R, 2), ab = w(new (a(w))(Z).sub(Y).div($ - 1), V, 0), bb = [].concat(j(N.default.rangeStep(new (a(w))(Y), new (a(w))(Z).sub(new (a(w))(0.99).mul(ab)), ab)), [Z]);
            return T > U ? (0, M.reverse)(bb) : bb;
        }));
}), d.register('.....', function (e, f) {
    !function (g) {
        var h, i = 1000000000, j = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
            }, k = !0, l = '[DecimalError] ', m = l + 'Invalid argument: ', n = l + 'Exponent out of range: ', o = Math.floor, p = Math.pow, q = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, r = 10000000, s = 9007199254740991, t = o(1286742750677284.5), u = {};
        function v(w, x) {
            var y, z, A, B, C, D, E, F, G = w.constructor, H = G.precision;
            if (!w.s || !x.s)
                return x.s || (x = new G(w)), k ? _xb(x, H) : x;
            if (E = w.d, F = x.d, C = w.e, A = x.e, E = E.slice(), B = C - A) {
                for (B < 0 ? (z = E, B = -B, D = F.length) : (z = F, A = C, D = E.length), B > (D = (C = Math.ceil(H / 7)) > D ? C + 1 : D + 1) && (B = D, z.length = 1), z.reverse(); B--;)
                    z.push(0);
                z.reverse();
            }
            for ((D = E.length) - (B = F.length) < 0 && (B = D, z = F, F = E, E = z), y = 0; B;)
                y = (E[--B] = E[B] + F[B] + y) / r | 0, E[B] %= r;
            for (y && (E.unshift(y), ++A), D = E.length; 0 == E[--D];)
                E.pop();
            return x.d = E, x.e = A, k ? _xb(x, H) : x;
        }
        function G(H, I, J) {
            if (H !== ~~H || H < I || H > J)
                throw Error(C + H);
        }
        function H(I) {
            var J, K, L, M = I.length - 1, N = '', O = I[0];
            if (M > 0) {
                for (N += O, J = 1; J < M; J++)
                    (K = 7 - (L = I[J] + '').length) && (N += _cb(K)), N += L;
                (K = 7 - (L = (O = I[J]) + '').length) && (N += _cb(K));
            } else if (0 === O)
                return '0';
            for (; O % 10 == 0;)
                O /= 10;
            return N + O;
        }
        u.absoluteValue = u.abs = function () {
            var O = new this.constructor(this);
            return O.s && (O.s = 1), O;
        }, u.comparedTo = u.cmp = function (O) {
            var P, Q, R, S, T = this;
            if (O = new T.constructor(O), T.s !== O.s)
                return T.s || -O.s;
            if (T.e !== O.e)
                return T.e > O.e ^ T.s < 0 ? 1 : -1;
            for (P = 0, Q = (R = T.d.length) < (S = O.d.length) ? R : S; P < Q; ++P)
                if (T.d[P] !== O.d[P])
                    return T.d[P] > O.d[P] ^ T.s < 0 ? 1 : -1;
            return R === S ? 0 : R > S ^ T.s < 0 ? 1 : -1;
        }, u.decimalPlaces = u.dp = function () {
            var O = this, P = O.d.length - 1, Q = 7 * (P - O.e);
            if (P = O.d[P])
                for (; P % 10 == 0; P /= 10)
                    Q--;
            return Q < 0 ? 0 : Q;
        }, u.dividedBy = u.div = function (O) {
            return _O(this, new this.constructor(O));
        }, u.dividedToIntegerBy = u.idiv = function (O) {
            var P = this.constructor;
            return _xb(_O(this, new P(O), 0, 1), P.precision);
        }, u.equals = u.eq = function (O) {
            return !this.cmp(O);
        }, u.exponent = function () {
            return _Z(this);
        }, u.greaterThan = u.gt = function (O) {
            return this.cmp(O) > 0;
        }, u.greaterThanOrEqualTo = u.gte = function (O) {
            return this.cmp(O) >= 0;
        }, u.isInteger = u.isint = function () {
            return this.e > this.d.length - 2;
        }, u.isNegative = u.isneg = function () {
            return this.s < 0;
        }, u.isPositive = u.ispos = function () {
            return this.s > 0;
        }, u.isZero = function () {
            return 0 === this.s;
        }, u.lessThan = u.lt = function (O) {
            return this.cmp(O) < 0;
        }, u.lessThanOrEqualTo = u.lte = function (O) {
            return this.cmp(O) < 1;
        }, u.logarithm = u.log = function (O) {
            var P, Q = this, R = Q.constructor, S = R.precision, T = S + 5;
            if (void 0 === O)
                O = new R(10);
            else if ((O = new R(O)).s < 1 || O.eq(K))
                throw Error(O + 'NaN');
            if (Q.s < 1)
                throw Error(O + (Q.s ? 'NaN' : '-Infinity'));
            return Q.eq(K) ? new R(0) : (N = !1, P = _O(_eb(Q, T), _eb(O, T), T), N = !0, _xb(P, S));
        }, u.minus = u.sub = function (O) {
            var P = this;
            return O = new P.constructor(O), P.s == O.s ? _Hb(P, O) : v(P, (O.s = -O.s, O));
        }, u.modulo = u.mod = function (O) {
            var P, Q = this, R = Q.constructor, S = R.precision;
            if (!(O = new R(O)).s)
                throw Error(O + 'NaN');
            return Q.s ? (N = !1, P = _O(Q, O, 0, 1).times(O), N = !0, Q.minus(P)) : _xb(new R(Q), S);
        }, u.naturalExponential = u.exp = function () {
            return _P(this);
        }, u.naturalLogarithm = u.ln = function () {
            return _eb(this);
        }, u.negated = u.neg = function () {
            var O = new this.constructor(this);
            return O.s = -O.s || 0, O;
        }, u.plus = u.add = function (O) {
            var P = this;
            return O = new P.constructor(O), P.s == O.s ? v(P, O) : _Hb(P, (O.s = -O.s, O));
        }, u.precision = u.sd = function (O) {
            var P, Q, R, S = this;
            if (void 0 !== O && O !== !!O && 1 !== O && 0 !== O)
                throw Error(C + O);
            if (P = _Z(S) + 1, Q = 7 * (R = S.d.length - 1) + 1, R = S.d[R]) {
                for (; R % 10 == 0; R /= 10)
                    Q--;
                for (R = S.d[0]; R >= 10; R /= 10)
                    Q++;
            }
            return O && P > Q ? P : Q;
        }, u.squareRoot = u.sqrt = function () {
            var O, P, Q, R, S, T, U, V = this, W = V.constructor;
            if (V.s < 1) {
                if (!V.s)
                    return new W(0);
                throw Error(O + 'NaN');
            }
            for (O = _Z(V), N = !1, 0 == (S = Math.sqrt(+V)) || S == 1 / 0 ? (((P = H(V.d)).length + O) % 2 == 0 && (P += '0'), S = Math.sqrt(P), O = E((O + 1) / 2) - (O < 0 || O % 2), R = new W(P = S == 1 / 0 ? '5e' + O : (P = S.toExponential()).slice(0, P.indexOf('e') + 1) + O)) : R = new W(S.toString()), S = U = (Q = W.precision) + 3;;)
                if (R = (T = R).plus(_O(V, T, U + 2)).times(0.5), H(T.d).slice(0, U) === (P = H(R.d)).slice(0, U)) {
                    if (P = P.slice(U - 3, U + 1), S == U && '4999' == P) {
                        if (_xb(T, Q + 1, 0), T.times(T).eq(V)) {
                            R = T;
                            break;
                        }
                    } else if ('9999' != P)
                        break;
                    U += 4;
                }
            return N = !0, _xb(R, Q);
        }, u.times = u.mul = function (O) {
            var P, Q, R, S, T, U, V, W, X, Y = this, Z = Y.constructor, $ = Y.d, ab = (O = new Z(O)).d;
            if (!Y.s || !O.s)
                return new Z(0);
            for (O.s *= Y.s, Q = Y.e + O.e, (W = $.length) < (X = ab.length) && (T = $, $ = ab, ab = T, U = W, W = X, X = U), T = [], R = U = W + X; R--;)
                T.push(0);
            for (R = X; --R >= 0;) {
                for (P = 0, S = W + R; S > R;)
                    V = T[S] + ab[R] * $[S - R - 1] + P, T[S--] = V % r | 0, P = V / r | 0;
                T[S] = (T[S] + P) % r | 0;
            }
            for (; !T[--U];)
                T.pop();
            return P ? ++Q : T.shift(), O.d = T, O.e = Q, N ? _xb(O, Z.precision) : O;
        }, u.toDecimalPlaces = u.todp = function (O, P) {
            var Q = this, R = Q.constructor;
            return Q = new R(Q), void 0 === O ? Q : (G(O, 0, L), void 0 === P ? P = R.rounding : G(P, 0, 8), _xb(Q, O + _Z(Q) + 1, P));
        }, u.toExponential = function (O, P) {
            var Q, R = this, S = R.constructor;
            return void 0 === O ? Q = _Ub(R, !0) : (G(O, 0, L), void 0 === P ? P = S.rounding : G(P, 0, 8), Q = _Ub(R = _xb(new S(R), O + 1, P), !0, O + 1)), Q;
        }, u.toFixed = function (O, P) {
            var Q, R, S = this, T = S.constructor;
            return void 0 === O ? _Ub(S) : (G(O, 0, L), void 0 === P ? P = T.rounding : G(P, 0, 8), Q = _Ub((R = _xb(new T(S), O + _Z(S) + 1, P)).abs(), !1, O + _Z(R) + 1), S.isneg() && !S.isZero() ? '-' + Q : Q);
        }, u.toInteger = u.toint = function () {
            var O = this, P = O.constructor;
            return _xb(new P(O), _Z(O) + 1, P.rounding);
        }, u.toNumber = function () {
            return +this;
        }, u.toPower = u.pow = function (O) {
            var P, Q, R, S, T, U, V = this, W = V.constructor, X = +(O = new W(O));
            if (!O.s)
                return new W(K);
            if (!(V = new W(V)).s) {
                if (O.s < 1)
                    throw Error(O + 'Infinity');
                return V;
            }
            if (V.eq(K))
                return V;
            if (R = W.precision, O.eq(K))
                return _xb(V, R);
            if (U = (P = O.e) >= (Q = O.d.length - 1), T = V.s, U) {
                if ((Q = X < 0 ? -X : X) <= H) {
                    for (S = new W(K), P = Math.ceil(R / 7 + 4), N = !1; Q % 2 && _Zb((S = S.times(V)).d, P), 0 !== (Q = E(Q / 2));)
                        _Zb((V = V.times(V)).d, P);
                    return N = !0, O.s < 0 ? new W(K).div(S) : _xb(S, R);
                }
            } else if (T < 0)
                throw Error(O + 'NaN');
            return T = T < 0 && 1 & O.d[Math.max(P, Q)] ? -1 : 1, V.s = 1, N = !1, S = O.times(_eb(V, R + 12)), N = !0, (S = _P(S)).s = T, S;
        }, u.toPrecision = function (O, P) {
            var Q, R, S = this, T = S.constructor;
            return void 0 === O ? R = _Ub(S, (Q = _Z(S)) <= T.toExpNeg || Q >= T.toExpPos) : (G(O, 1, L), void 0 === P ? P = T.rounding : G(P, 0, 8), R = _Ub(S = _xb(new T(S), O, P), O <= (Q = _Z(S)) || Q <= T.toExpNeg, O)), R;
        }, u.toSignificantDigits = u.tosd = function (O, P) {
            var Q = this.constructor;
            return void 0 === O ? (O = Q.precision, P = Q.rounding) : (G(O, 1, L), void 0 === P ? P = Q.rounding : G(P, 0, 8)), _xb(new Q(this), O, P);
        }, u.toString = u.valueOf = u.val = u.toJSON = function () {
            var O = this, P = _Z(O), Q = O.constructor;
            return _Ub(O, P <= Q.toExpNeg || P >= Q.toExpPos);
        };
        var _O = function () {
            function P(Q, R) {
                var S, T = 0, U = Q.length;
                for (Q = Q.slice(); U--;)
                    S = Q[U] * R + T, Q[U] = S % r | 0, T = S / r | 0;
                return T && Q.unshift(T), Q;
            }
            function T(U, V, W, X) {
                var Y, Z;
                if (W != X)
                    Z = W > X ? 1 : -1;
                else
                    for (Y = Z = 0; Y < W; Y++)
                        if (U[Y] != V[Y]) {
                            Z = U[Y] > V[Y] ? 1 : -1;
                            break;
                        }
                return Z;
            }
            function W(X, Y, Z) {
                for (var $ = 0; Z--;)
                    X[Z] -= $, $ = X[Z] < Y[Z] ? 1 : 0, X[Z] = $ * r + X[Z] - Y[Z];
                for (; !X[0] && X.length > 1;)
                    X.shift();
            }
            return function (Y, Z, $, ab) {
                var bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb = Y.constructor, ub = Y.s == Z.s ? 1 : -1, vb = Y.d, wb = Z.d;
                if (!Y.s)
                    return new tb(Y);
                if (!Z.s)
                    throw Error(O + 'Division by zero');
                for (cb = Y.e - Z.e, rb = wb.length, pb = vb.length, ib = (hb = new tb(ub)).d = [], db = 0; wb[db] == (vb[db] || 0);)
                    ++db;
                if (wb[db] > (vb[db] || 0) && --cb, (mb = null == $ ? $ = tb.precision : ab ? $ + (_Z(Y) - _Z(Z)) + 1 : $) < 0)
                    return new tb(0);
                if (mb = mb / 7 + 2 | 0, db = 0, 1 == rb)
                    for (eb = 0, wb = wb[0], mb++; (db < pb || eb) && mb--; db++)
                        nb = eb * r + (vb[db] || 0), ib[db] = nb / wb | 0, eb = nb % wb | 0;
                else {
                    for ((eb = r / (wb[0] + 1) | 0) > 1 && (wb = P(wb, eb), vb = P(vb, eb), rb = wb.length, pb = vb.length), ob = rb, kb = (jb = vb.slice(0, rb)).length; kb < rb;)
                        jb[kb++] = 0;
                    (sb = wb.slice()).unshift(0), qb = wb[0], wb[1] >= r / 2 && ++qb;
                    do {
                        eb = 0, (bb = T(wb, jb, rb, kb)) < 0 ? (lb = jb[0], rb != kb && (lb = lb * r + (jb[1] || 0)), (eb = lb / qb | 0) > 1 ? (eb >= r && (eb = r - 1), 1 == (bb = T(fb = P(wb, eb), jb, gb = fb.length, kb = jb.length)) && (eb--, W(fb, rb < gb ? sb : wb, gb))) : (0 == eb && (bb = eb = 1), fb = wb.slice()), (gb = fb.length) < kb && fb.unshift(0), W(jb, fb, kb), -1 == bb && (bb = T(wb, jb, rb, kb = jb.length)) < 1 && (eb++, W(jb, rb < kb ? sb : wb, kb)), kb = jb.length) : 0 === bb && (eb++, jb = [0]), ib[db++] = eb, bb && jb[0] ? jb[kb++] = vb[ob] || 0 : (jb = [vb[ob]], kb = 1);
                    } while ((ob++ < pb || void 0 !== jb[0]) && mb--);
                }
                return ib[0] || ib.shift(), hb.e = cb, _xb(hb, ab ? $ + _Z(hb) + 1 : $);
            };
        }();
        function _P(Q, R) {
            var S, T, U, V, W, X = 0, Y = 0, Z = Q.constructor, $ = Z.precision;
            if (_Z(Q) > 16)
                throw Error(D + _Z(Q));
            if (!Q.s)
                return new Z(K);
            for (null == R ? (N = !1, W = $) : W = R, V = new Z(0.03125); Q.abs().gte(0.1);)
                Q = Q.times(V), Y += 5;
            for (W += Math.log(F(2, Y)) / Math.LN10 * 2 + 5 | 0, S = T = U = new Z(K), Z.precision = W;;) {
                if (T = _xb(T.times(Q), W), S = S.times(++X), H((V = U.plus(_O(T, S, W))).d).slice(0, W) === H(U.d).slice(0, W)) {
                    for (; Y--;)
                        U = _xb(U.times(U), W);
                    return Z.precision = $, null == R ? (N = !0, _xb(U, $)) : U;
                }
                U = V;
            }
        }
        function _Z($) {
            for (var ab = 7 * $.e, bb = $.d[0]; bb >= 10; bb /= 10)
                ab++;
            return ab;
        }
        function bb(cb, db, eb) {
            if (db > cb.LN10.sd())
                throw N = !0, eb && (cb.precision = eb), Error(U + 'LN10 precision limit exceeded');
            return _xb(new cb(cb.LN10), db);
        }
        function _cb(db) {
            for (var eb = ''; db--;)
                eb += '0';
            return eb;
        }
        function _eb(fb, gb) {
            var hb, ib, jb, kb, lb, mb, nb, ob, pb, qb = 1, rb = fb, sb = rb.d, tb = rb.constructor, ub = G.precision;
            if (rb.s < 1)
                throw Error(U + (rb.s ? 'NaN' : '-Infinity'));
            if (rb.eq(bb))
                return new G(0);
            if (null == gb ? (N = !1, ob = _P) : ob = gb, rb.eq(10))
                return null == gb && (N = !0), bb(G, ob);
            if (ob += 10, G.precision = ob, ib = (hb = H(v)).charAt(0), kb = _Z(rb), !(Math.abs(kb) < 1500000000000000))
                return nb = bb(G, ob + 2, _P).times(kb + ''), rb = _eb(new G(ib + '.' + hb.slice(1)), ob - 10).plus(nb), G.precision = _P, null == gb ? (N = !0, _xb(rb, _P)) : rb;
            for (; ib < 7 && 1 != ib || 1 == ib && hb.charAt(1) > 3;)
                ib = (hb = H((rb = rb.times(fb)).d)).charAt(0), qb++;
            for (kb = _Z(rb), ib > 1 ? (rb = new G('0.' + hb), kb++) : rb = new G(ib + '.' + hb.slice(1)), mb = lb = rb = _O(rb.minus(bb), rb.plus(bb), ob), pb = _xb(rb.times(rb), ob), jb = 3;;) {
                if (lb = _xb(lb.times(pb), ob), H((nb = mb.plus(_O(lb, new G(jb), ob))).d).slice(0, ob) === H(mb.d).slice(0, ob))
                    return mb = mb.times(2), 0 !== kb && (mb = mb.plus(bb(G, ob + 2, _P).times(kb + ''))), mb = _O(mb, new G(qb), ob), G.precision = _P, null == gb ? (N = !0, _xb(mb, _P)) : mb;
                mb = nb, jb += 2;
            }
        }
        function tb(ub, vb) {
            var wb, xb, yb;
            for ((wb = vb.indexOf('.')) > -1 && (vb = vb.replace('.', '')), (xb = vb.search(/e/i)) > 0 ? (wb < 0 && (wb = xb), wb += +vb.slice(xb + 1), vb = vb.substring(0, xb)) : wb < 0 && (wb = vb.length), xb = 0; 48 === vb.charCodeAt(xb);)
                ++xb;
            for (yb = vb.length; 48 === vb.charCodeAt(yb - 1);)
                --yb;
            if (vb = vb.slice(xb, yb)) {
                if (yb -= xb, wb = wb - xb - 1, ub.e = lb(wb / 7), ub.d = [], xb = (wb + 1) % 7, wb < 0 && (xb += 7), xb < yb) {
                    for (xb && ub.d.push(+vb.slice(0, xb)), yb -= 7; xb < yb;)
                        ub.d.push(+vb.slice(xb, xb += 7));
                    xb = 7 - (vb = vb.slice(xb)).length;
                } else
                    xb -= yb;
                for (; xb--;)
                    vb += '0';
                if (ub.d.push(+vb), N && (ub.e > qb || ub.e < -qb))
                    throw Error(kb + wb);
            } else
                ub.s = 0, ub.e = 0, ub.d = [0];
            return ub;
        }
        function _xb(yb, zb, Ab) {
            var Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb = yb.d;
            for (Eb = 1, Db = G[0]; Db >= 10; Db /= 10)
                Eb++;
            if ((Bb = zb - Eb) < 0)
                Bb += 7, Cb = zb, Hb = G[v = 0];
            else {
                if ((v = Math.ceil((Bb + 1) / 7)) >= (Db = G.length))
                    return yb;
                for (Hb = Db = G[v], Eb = 1; Db >= 10; Db /= 10)
                    Eb++;
                Cb = (Bb %= 7) - 7 + Eb;
            }
            if (void 0 !== Ab && (Fb = Hb / (Db = mb(10, Eb - Cb - 1)) % 10 | 0, Gb = zb < 0 || void 0 !== G[v + 1] || Hb % Db, Gb = Ab < 4 ? (Fb || Gb) && (0 == Ab || Ab == (yb.s < 0 ? 3 : 2)) : Fb > 5 || 5 == Fb && (4 == Ab || Gb || 6 == Ab && (Bb > 0 ? Cb > 0 ? Hb / mb(10, Eb - Cb) : 0 : G[v - 1]) % 10 & 1 || Ab == (yb.s < 0 ? 8 : 7))), zb < 1 || !G[0])
                return Gb ? (Db = _Z(yb), G.length = 1, zb = zb - Db - 1, G[0] = mb(10, (7 - zb % 7) % 7), yb.e = lb(-zb / 7) || 0) : (G.length = 1, G[0] = yb.e = yb.s = 0), yb;
            if (0 == Bb ? (G.length = v, Db = 1, v--) : (G.length = v + 1, Db = mb(10, 7 - Bb), G[v] = Cb > 0 ? (Hb / mb(10, Eb - Cb) % mb(10, Cb) | 0) * Db : 0), Gb)
                for (;;) {
                    if (0 == v) {
                        (G[0] += Db) == ob && (G[0] = 1, ++yb.e);
                        break;
                    }
                    if (G[v] += Db, G[v] != ob)
                        break;
                    G[v--] = 0, Db = 1;
                }
            for (Bb = G.length; 0 === G[--Bb];)
                G.pop();
            if (N && (yb.e > qb || yb.e < -qb))
                throw Error(kb + _Z(yb));
            return yb;
        }
        function _Hb(Ib, Jb) {
            var Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub = Ib.constructor, Vb = Ub.precision;
            if (!Ib.s || !Jb.s)
                return Jb.s ? Jb.s = -Jb.s : Jb = new Ub(Ib), N ? _xb(Jb, Vb) : Jb;
            if (Qb = Ib.d, Tb = Jb.d, Lb = Jb.e, Rb = Ib.e, Qb = Qb.slice(), Ob = Rb - Lb) {
                for ((Sb = Ob < 0) ? (Kb = Qb, Ob = -Ob, Pb = Tb.length) : (Kb = Tb, Lb = Rb, Pb = Qb.length), Ob > (Mb = Math.max(Math.ceil(Vb / 7), Pb) + 2) && (Ob = Mb, Kb.length = 1), Kb.reverse(), Mb = Ob; Mb--;)
                    Kb.push(0);
                Kb.reverse();
            } else {
                for ((Sb = (Mb = Qb.length) < (Pb = Tb.length)) && (Pb = Mb), Mb = 0; Mb < Pb; Mb++)
                    if (Qb[Mb] != Tb[Mb]) {
                        Sb = Qb[Mb] < Tb[Mb];
                        break;
                    }
                Ob = 0;
            }
            for (Sb && (Kb = Qb, Qb = Tb, Tb = Kb, Jb.s = -Jb.s), Pb = Qb.length, Mb = Tb.length - Pb; Mb > 0; --Mb)
                Qb[Pb++] = 0;
            for (Mb = Tb.length; Mb > Ob;) {
                if (Qb[--Mb] < Tb[Mb]) {
                    for (Nb = Mb; Nb && 0 === Qb[--Nb];)
                        Qb[Nb] = ob - 1;
                    --Qb[Nb], Qb[Mb] += ob;
                }
                Qb[Mb] -= Tb[Mb];
            }
            for (; 0 === Qb[--Pb];)
                Qb.pop();
            for (; 0 === Qb[0]; Qb.shift())
                --Lb;
            return Qb[0] ? (Jb.d = Qb, Jb.e = Lb, N ? _xb(Jb, Vb) : Jb) : new Ub(0);
        }
        function _Ub(Vb, Wb, Xb) {
            var Yb, Zb = _Z(Vb), $b = H(Vb.d), ac = $b.length;
            return Wb ? (Xb && (Yb = Xb - ac) > 0 ? $b = $b.charAt(0) + '.' + $b.slice(1) + _cb(Yb) : ac > 1 && ($b = $b.charAt(0) + '.' + $b.slice(1)), $b = $b + (Zb < 0 ? 'e' : 'e+') + Zb) : Zb < 0 ? ($b = '0.' + _cb(-Zb - 1) + $b, Xb && (Yb = Xb - ac) > 0 && ($b += _cb(Yb))) : Zb >= ac ? ($b += _cb(Zb + 1 - ac), Xb && (Yb = Xb - Zb - 1) > 0 && ($b = $b + '.' + _cb(Yb))) : ((Yb = Zb + 1) < ac && ($b = $b.slice(0, Yb) + '.' + $b.slice(Yb)), Xb && (Yb = Xb - ac) > 0 && (Zb + 1 === ac && ($b += '.'), $b += _cb(Yb))), Vb.s < 0 ? '-' + $b : $b;
        }
        function _Zb($b, ac) {
            if ($b.length > ac)
                return $b.length = ac, !0;
        }
        function $b(ac) {
            if (!ac || 'object' != typeof ac)
                throw Error(ac + 'Object expected');
            var bc, cc, dc, ec = [
                    'precision',
                    1,
                    Yb,
                    'rounding',
                    0,
                    8,
                    'toExpNeg',
                    -1 / 0,
                    0,
                    'toExpPos',
                    0,
                    1 / 0
                ];
            for (bc = 0; bc < ec.length; bc += 3)
                if (void 0 !== (dc = ac[cc = ec[bc]])) {
                    if (!(Qb(dc) === dc && dc >= ec[bc + 1] && dc <= ec[bc + 2]))
                        throw Error(Ob + cc + ': ' + dc);
                    this[cc] = dc;
                }
            if (void 0 !== (dc = ac[cc = 'LN10'])) {
                if (dc != Math.LN10)
                    throw Error(Ob + cc + ': ' + dc);
                this[cc] = new this(dc);
            }
            return this;
        }
        dc = function e(ec) {
            var fc, gc, hc;
            function ic(jc) {
                var kc = this;
                if (!(kc instanceof ic))
                    return new ic(jc);
                if (kc.constructor = ic, jc instanceof ic)
                    return kc.s = jc.s, kc.e = jc.e, void (kc.d = (jc = jc.d) ? jc.slice() : jc);
                if ('number' == typeof jc) {
                    if (0 * jc != 0)
                        throw Error(Ob + jc);
                    if (jc > 0)
                        kc.s = 1;
                    else {
                        if (!(jc < 0))
                            return kc.s = 0, kc.e = 0, void (kc.d = [0]);
                        jc = -jc, kc.s = -1;
                    }
                    return jc === ~~jc && jc < 10000000 ? (kc.e = 0, void (kc.d = [jc])) : tb(kc, jc.toString());
                }
                if ('string' != typeof jc)
                    throw Error(Ob + jc);
                if (45 === jc.charCodeAt(0) ? (jc = jc.slice(1), kc.s = -1) : kc.s = 1, !Sb.test(jc))
                    throw Error(Ob + jc);
                tb(kc, jc);
            }
            if (ic.prototype = Vb, ic.ROUND_UP = 0, ic.ROUND_DOWN = 1, ic.ROUND_CEIL = 2, ic.ROUND_FLOOR = 3, ic.ROUND_HALF_UP = 4, ic.ROUND_HALF_DOWN = 5, ic.ROUND_HALF_EVEN = 6, ic.ROUND_HALF_CEIL = 7, ic.ROUND_HALF_FLOOR = 8, ic.clone = e, ic.config = ic.set = $b, void 0 === kc && (kc = {}), kc)
                for (hc = [
                        'precision',
                        'rounding',
                        'toExpNeg',
                        'toExpPos',
                        'LN10'
                    ], fc = 0; fc < hc.length;)
                    kc.hasOwnProperty(gc = hc[fc++]) || (kc[gc] = this[gc]);
            return ic.config(kc), ic;
        }(dc), dc.default = dc.Decimal = dc, cc = new dc(1), 'function' == typeof define && define.amd ? define(function () {
            return dc;
        }) : e.exports ? e.exports = dc : (bc || (bc = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), bc.Decimal = dc);
    }(e.exports);
}), d.register('.....', function (e, f) {
    function g(h) {
        return function (i) {
            if (Array.isArray(i))
                return _h(i);
        }(h) || function (i) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(i))
                return Array.from(i);
        }(h) || function (i, j) {
            if (!i)
                return;
            if ('string' == typeof i)
                return _h(i, j);
            var k = Object.prototype.toString.call(i).slice(8, -1);
            'Object' === k && i.constructor && (k = i.constructor.name);
            if ('Map' === k || 'Set' === k)
                return Array.from(i);
            if ('Arguments' === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))
                return _h(i, j);
        }(h) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _h(i, j) {
        (null == j || j > i.length) && (j = i.length);
        for (var k = 0, l = new Array(j); k < j; k++)
            g[k] = i[k];
        return g;
    }
    b(e.exports, 'curry', function () {
        return _p;
    }), b(e.exports, 'range', function () {
        return _q;
    }), b(e.exports, 'map', function () {
        return _r;
    }), b(e.exports, 'compose', function () {
        return _s;
    }), b(e.exports, 'reverse', function () {
        return _t;
    }), b(e.exports, 'memoize', function () {
        return _u;
    });
    var k = function (l) {
            return l;
        }, l = { '@@functional/placeholder': !0 }, m = function (n) {
            return n === l;
        }, n = function (o) {
            return function b() {
                return 0 === arguments.length || 1 === arguments.length && m(arguments.length <= 0 ? void 0 : arguments[0]) ? b : o.apply(void 0, arguments);
            };
        }, o = function e(p, q) {
            return 1 === p ? q : n(function () {
                for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                    s[t] = arguments[t];
                var u = s.filter(function (v) {
                    return v !== l;
                }).length;
                return u >= p ? q.apply(void 0, s) : e(p - u, n(function () {
                    for (var v = arguments.length, w = new Array(v), x = 0; x < v; x++)
                        w[x] = arguments[x];
                    var y = s.map(function (z) {
                        return m(z) ? w.shift() : z;
                    });
                    return q.apply(void 0, g(y).concat(w));
                }));
            });
        }, _p = function (q) {
            return o(q.length, q);
        }, _q = function (r, s) {
            for (var t = [], u = r; u < s; ++u)
                t[u - r] = u;
            return t;
        }, _r = _p(function (s, t) {
            return Array.isArray(t) ? t.map(s) : Object.keys(t).map(function (u) {
                return t[u];
            }).map(s);
        }), _s = function () {
            for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++)
                u[v] = arguments[v];
            if (!u.length)
                return k;
            var w = u.reverse(), x = w[0], y = w.slice(1);
            return function () {
                return y.reduce(function (z, A) {
                    return A(z);
                }, x.apply(void 0, arguments));
            };
        }, _t = function (u) {
            return Array.isArray(u) ? u.reverse() : u.split('').reverse.join('');
        }, _u = function (v) {
            var w = null, x = null;
            return function () {
                for (var y = arguments.length, z = new Array(y), A = 0; A < y; A++)
                    z[A] = arguments[A];
                return w && z.every(function (B, C) {
                    return B === w[C];
                }) ? x : (w = z, x = v.apply(void 0, z));
            };
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    var _i = {
        rangeStep: function (j, k, l) {
            for (var m = new (a(g))(j), n = 0, o = []; m.lt(k) && n < 100000;)
                o.push(m.toNumber()), m = m.add(l), n++;
            return o;
        },
        getDigitCount: function (j) {
            return 0 === j ? 1 : Math.floor(new (a(g))(j).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: (0, h.curry)(function (j, k, l) {
            var m = +j;
            return m + l * (+k - m);
        }),
        uninterpolateNumber: (0, h.curry)(function (j, k, l) {
            var m = k - +j;
            return (l - j) / (m = m || 1 / 0);
        }),
        uninterpolateTruncation: (0, h.curry)(function (j, k, l) {
            var m = k - +j;
            return m = m || 1 / 0, Math.max(0, Math.min(1, (l - j) / m));
        })
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'scaleBand', function () {
        return d('.....').default;
    }), b(e.exports, 'scalePoint', function () {
        return d('.....').point;
    }), b(e.exports, 'scaleIdentity', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleLinear', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleLog', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleSymlog', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleOrdinal', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleImplicit', function () {
        return d('.....').implicit;
    }), b(e.exports, 'scalePow', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleSqrt', function () {
        return d('.....').sqrt;
    }), b(e.exports, 'scaleRadial', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleQuantile', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleQuantize', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleThreshold', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleTime', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleUtc', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleSequential', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleSequentialLog', function () {
        return d('.....').sequentialLog;
    }), b(e.exports, 'scaleSequentialPow', function () {
        return d('.....').sequentialPow;
    }), b(e.exports, 'scaleSequentialSqrt', function () {
        return d('.....').sequentialSqrt;
    }), b(e.exports, 'scaleSequentialSymlog', function () {
        return d('.....').sequentialSymlog;
    }), b(e.exports, 'scaleSequentialQuantile', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleDiverging', function () {
        return d('.....').default;
    }), b(e.exports, 'scaleDivergingLog', function () {
        return d('.....').divergingLog;
    }), b(e.exports, 'scaleDivergingPow', function () {
        return d('.....').divergingPow;
    }), b(e.exports, 'scaleDivergingSqrt', function () {
        return d('.....').divergingSqrt;
    }), b(e.exports, 'scaleDivergingSymlog', function () {
        return d('.....').divergingSymlog;
    }), b(e.exports, 'tickFormat', function () {
        return d('.....').default;
    });
    d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....'), d('.....');
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    }), b(e.exports, 'point', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function _j() {
        var k, l, m = (0, i.default)().unknown(void 0), n = m.domain, o = m.range, _p = 0, q = 1, r = !1, s = 0, t = 0, u = 0.5;
        function v() {
            var w = n().length, x = q < _p, y = x ? q : _p, z = x ? _p : q;
            k = (_j - y) / Math.max(1, w - s + 2 * t), r && (k = Math.floor(k)), y += (_j - y - k * (w - s)) * u, l = k * (1 - s), r && (y = Math.round(y), l = Math.round(l));
            var A = (0, g.default)(w).map(function (B) {
                return y + k * B;
            });
            return o(x ? v.reverse() : v);
        }
        return delete w.unknown, w.domain = function (B) {
            return arguments.length ? (n(B), v()) : n();
        }, w.range = function (B) {
            return arguments.length ? ([C, D] = B, C = +C, D = +D, v()) : [
                C,
                D
            ];
        }, w.rangeRound = function (B) {
            return [C, D] = B, C = +C, D = +D, r = !0, v();
        }, w.bandwidth = function () {
            return l;
        }, w.step = function () {
            return k;
        }, w.round = function (B) {
            return arguments.length ? (r = !!B, v()) : r;
        }, w.padding = function (B) {
            return arguments.length ? (s = Math.min(1, t = +B), v()) : s;
        }, w.paddingInner = function (B) {
            return arguments.length ? (s = Math.min(1, B), v()) : s;
        }, w.paddingOuter = function (B) {
            return arguments.length ? (t = +B, v()) : t;
        }, w.align = function (B) {
            return arguments.length ? (u = Math.max(0, Math.min(1, B)), v()) : u;
        }, w.copy = function () {
            return _j(n(), [
                _p,
                q
            ]).round(r).paddingInner(s).paddingOuter(t).align(u);
        }, x.initRange.apply(v(), arguments);
    }
    function A(B) {
        var C = B.copy;
        return B.padding = B.paddingOuter, delete B.paddingInner, delete B.paddingOuter, B.copy = function () {
            return A(C());
        }, B;
    }
    function C() {
        return A(_j.apply(null, arguments).paddingInner(1));
    }
}), d.register('.....', function (e, f) {
    function g(h, i, j) {
        h = +h, i = +i, j = (_l = arguments.length) < 2 ? (i = h, h = 0, 1) : _l < 3 ? 1 : +j;
        for (var k = -1, _l = 0 | Math.max(0, Math.ceil((i - h) / j)), m = new Array(_l); ++g < _l;)
            m[g] = h + g * j;
        return m;
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(h);
            break;
        default:
            this.range(i).domain(h);
        }
        return this;
    }
    function h(i, j) {
        switch (arguments.length) {
        case 0:
            break;
        case 1:
            'function' == typeof i ? this.interpolator(i) : this.range(i);
            break;
        default:
            this.domain(i), 'function' == typeof j ? this.interpolator(j) : this.range(j);
        }
        return this;
    }
    b(e.exports, 'initRange', function () {
        return g;
    }), b(e.exports, 'initInterpolator', function () {
        return h;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'implicit', function () {
        return _h;
    }), b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....');
    const _h = Symbol('implicit');
    function _i() {
        var j = new Map(), k = [], l = [], m = _h;
        function n(o) {
            var p = o + '', q = j.get(_i);
            if (!n) {
                if (m !== _h)
                    return m;
                j.set(_i, n = k.push(o));
            }
            return l[(n - 1) % l.length];
        }
        return n.domain = function (q) {
            if (!arguments.length)
                return k.slice();
            k = [], j = new Map();
            for (const r of q) {
                const s = r + '';
                j.has(s) || j.set(s, k.push(r));
            }
            return n;
        }, n.range = function (q) {
            return arguments.length ? (l = Array.from(q), n) : l.slice();
        }, n.unknown = function (q) {
            return arguments.length ? (m = q, n) : m;
        }, n.copy = function () {
            return _i(k, l).unknown(m);
        }, g.initRange.apply(n, arguments), n;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j) {
        var k;
        function l(m) {
            return null == m || isNaN(m = +m) ? k : m;
        }
        return l.invert = l, l.domain = l.range = function (m) {
            return arguments.length ? (j = Array.from(m, h.default), l) : j.slice();
        }, l.unknown = function (m) {
            return arguments.length ? (k = m, l) : k;
        }, l.copy = function () {
            return _i(j).unknown(k);
        }, j = arguments.length ? Array.from(j, h.default) : [
            0,
            1
        ], (0, g.linearish)(l);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'linearish', function () {
        return _k;
    }), b(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function _k(l) {
        var m = l.domain;
        return l.ticks = function (n) {
            var o = m();
            return (0, g.default)(o[0], o[o.length - 1], null == n ? 10 : n);
        }, l.tickFormat = function (n, o) {
            var p = m();
            return (0, j.default)(p[0], p[p.length - 1], null == n ? 10 : n, o);
        }, l.nice = function (n) {
            null == n && (n = 10);
            var o, p, q = m(), r = 0, s = q.length - 1, t = q[r], u = q[s], v = 10;
            for (u < t && (p = t, t = u, u = p, p = r, r = s, s = p); v-- > 0;) {
                if ((p = (0, g.tickIncrement)(t, u, n)) === o)
                    return q[r] = t, q[s] = u, m(q);
                if (p > 0)
                    t = Math.floor(t / p) * p, u = Math.ceil(u / p) * p;
                else {
                    if (!(p < 0))
                        break;
                    t = Math.ceil(t * p) / p, u = Math.floor(u * p) / p;
                }
                o = p;
            }
            return l;
        }, l;
    }
    function _m() {
        var n = (0, h.default)();
        return n.copy = function () {
            return (0, h.copy)(n, _m());
        }, i.initRange.apply(n, arguments), _k(n);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    }), b(e.exports, 'tickIncrement', function () {
        return _p;
    }), b(e.exports, 'tickStep', function () {
        return _r;
    });
    var g = Math.sqrt(50), h = Math.sqrt(10), i = Math.sqrt(2);
    function _j(k, l, m) {
        var n, o, p, q, _r = -1;
        if (m = +m, (k = +k) === (l = +l) && m > 0)
            return [k];
        if ((n = l < k) && (o = k, k = l, l = o), 0 === (_j = _p(k, l, m)) || !isFinite(_j))
            return [];
        if (_j > 0) {
            let s = Math.round(k / _j), t = Math.round(l / _j);
            for (s * _j < k && ++s, t * _j > l && --t, p = new Array(o = t - s + 1); ++_r < o;)
                p[_r] = (s + _r) * _j;
        } else {
            _j = -_j;
            let s = Math.round(k * _j), t = Math.round(l * _j);
            for (s / _j < k && ++s, t / _j > l && --t, p = new Array(o = t - s + 1); ++_r < o;)
                p[_r] = (s + _r) / _j;
        }
        return n && p.reverse(), p;
    }
    function _p(q, r, s) {
        var t = (r - q) / Math.max(0, s), u = Math.floor(Math.log(_j) / Math.LN10), v = _j / Math.pow(10, _p);
        return _p >= 0 ? (v >= n ? 10 : v >= o ? 5 : v >= p ? 2 : 1) * Math.pow(10, _p) : -Math.pow(10, -_p) / (v >= n ? 10 : v >= o ? 5 : v >= p ? 2 : 1);
    }
    function t(u, v, w) {
        var x = Math.abs(v - u) / Math.max(0, w), y = Math.pow(10, Math.floor(Math.log(_j) / Math.LN10)), z = _j / _p;
        return t >= n ? _p *= 10 : t >= o ? _p *= 5 : t >= p && (_p *= 2), v < u ? -_p : _p;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'identity', function () {
        return _n;
    }), b(e.exports, 'copy', function () {
        return _z;
    }), b(e.exports, 'transformer', function () {
        return _A;
    }), b(e.exports, 'default', function () {
        return _K;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = [
            0,
            1
        ];
    function _n(o) {
        return o;
    }
    function o(p, q) {
        return (q -= p = +p) ? function (r) {
            return (r - p) / q;
        } : (0, k.default)(isNaN(q) ? NaN : 0.5);
    }
    function p(q, r, s) {
        var t = q[0], u = q[1], v = r[0], w = r[1];
        return u < t ? (t = o(u, t), v = s(w, v)) : (t = o(t, u), v = s(v, w)), function (x) {
            return v(t(x));
        };
    }
    function u(v, w, x) {
        var y = Math.min(v.length, w.length) - 1, z = new Array(y), A = new Array(y), B = -1;
        for (v[y] < v[0] && (v = v.slice().reverse(), w = w.slice().reverse()); ++B < y;)
            z[B] = o(v[B], v[B + 1]), A[B] = x(w[B], w[B + 1]);
        return function (C) {
            var D = (0, u.default)(v, C, 1, y) - 1;
            return A[D](z[D](C));
        };
    }
    function _z(A, B) {
        return B.domain(A.domain()).range(A.range()).interpolate(A.interpolate()).clamp(A.clamp()).unknown(A.unknown());
    }
    function _A() {
        var B, C, D, E, F, G, H = m, I = m, J = z.default, _K = _n;
        function L() {
            var M, N, O, P = Math.min(o.length, _z.length);
            return _K !== _n && (M = o[0], N = o[P - 1], M > N && (O = M, M = N, N = O), _K = function (Q) {
                return Math.max(M, Math.min(N, Q));
            }), E = P > 2 ? u : p, F = G = null, _Q;
        }
        function _Q(R) {
            return null == R || isNaN(R = +R) ? O : (F || (F = E(o.map(M), _z, _A)))(M(_K(R)));
        }
        return _Q.invert = function (R) {
            return _K(N((G || (G = E(_z, o.map(M), A.default)))(R)));
        }, _Q.domain = function (R) {
            return arguments.length ? (o = Array.from(R, l.default), L()) : o.slice();
        }, _Q.range = function (R) {
            return arguments.length ? (_z = Array.from(R), L()) : _z.slice();
        }, _Q.rangeRound = function (R) {
            return _z = Array.from(R), _A = B.default, L();
        }, _Q.clamp = function (R) {
            return arguments.length ? (_K = !!R || _n, L()) : _K !== _n;
        }, _Q.interpolate = function (R) {
            return arguments.length ? (_A = R, L()) : _A;
        }, _Q.unknown = function (R) {
            return arguments.length ? (O = R, _Q) : O;
        }, function (R, S) {
            return M = R, N = S, L();
        };
    }
    function P() {
        return _A()(_n, _n);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    const j = (0, h.default)(g.default), k = j.right;
    j.left, (0, h.default)(i.default).center;
    var _l = k;
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return h < i ? -1 : h > i ? 1 : h >= i ? 0 : NaN;
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i) {
        let j = i, k = i;
        function l(m, n, o, p) {
            for (null == o && (o = 0), null == p && (p = m.length); o < p;) {
                const q = o + p >>> 1;
                k(m[_h], n) < 0 ? o = _h + 1 : p = _h;
            }
            return o;
        }
        return 1 === i.length && (j = (n, o) => i(n) - o, k = function (n) {
            return (o, p) => (0, g.default)(n(o), p);
        }(i)), {
            left: l,
            center: function (n, o, p, q) {
                null == p && (p = 0), null == q && (q = n.length);
                const r = l(n, o, p, q - 1);
                return r > p && j(n[r - 1], o) > -j(n[r], o) ? r - 1 : r;
            },
            right: function (n, o, p, q) {
                for (null == p && (p = 0), null == q && (q = n.length); p < q;) {
                    const r = p + q >>> 1;
                    k(n[r], o) > 0 ? q = r : p = r + 1;
                }
                return p;
            }
        };
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return null === h ? NaN : +h;
    }
    function* h(i, j) {
        if (void 0 === j)
            for (let k of i)
                null != k && (k = +k) >= k && (yield k);
        else {
            let l = -1;
            for (let m of i)
                null != (m = k(m, ++l, i)) && (m = +m) >= m && (yield m);
        }
    }
    b(e.exports, 'default', function () {
        return g;
    }), b(e.exports, 'numbers', function () {
        return h;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    function _p(q, r) {
        var s, t = typeof r;
        return null == r || 'boolean' === t ? (0, n.default)(r) : ('number' === t ? k.default : 'string' === t ? (s = (0, g.default)(r)) ? (r = s, h.default) : m.default : r instanceof g.default ? h.default : r instanceof Date ? j.default : (0, o.isNumberArray)(r) ? o.default : Array.isArray(r) ? i.genericArray : 'function' != typeof r.valueOf && 'function' != typeof r.toString || isNaN(r) ? l.default : k.default)(q, r);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _x;
    }), b(e.exports, 'rgb', function () {
        return _D;
    });
    var g = d('.....');
    function h() {
    }
    var i = 0.7, j = 1.4285714285714286, k = '\\s*([+-]?\\d+)\\s*', l = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*', m = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*', n = /^#([0-9a-f]{3,8})$/, o = new RegExp('^rgb\\(' + [
            k,
            k,
            k
        ] + '\\)$'), p = new RegExp('^rgb\\(' + [
            m,
            m,
            m
        ] + '\\)$'), q = new RegExp('^rgba\\(' + [
            k,
            k,
            k,
            l
        ] + '\\)$'), r = new RegExp('^rgba\\(' + [
            m,
            m,
            m,
            l
        ] + '\\)$'), s = new RegExp('^hsl\\(' + [
            l,
            m,
            m
        ] + '\\)$'), t = new RegExp('^hsla\\(' + [
            l,
            m,
            m,
            l
        ] + '\\)$'), u = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    function v() {
        return this.rgb().formatHex();
    }
    function w() {
        return this.rgb().formatRgb();
    }
    function _x(y) {
        var z, A;
        return y = (y + '').trim().toLowerCase(), (z = n.exec(y)) ? (A = z[1].length, z = parseInt(z[1], 16), 6 === A ? _A(z) : 3 === A ? new _E(z >> 8 & 15 | z >> 4 & 240, z >> 4 & 15 | 240 & z, (15 & z) << 4 | 15 & z, 1) : 8 === A ? _B(z >> 24 & 255, z >> 16 & 255, z >> 8 & 255, (255 & z) / 255) : 4 === A ? _B(z >> 12 & 15 | z >> 8 & 240, z >> 8 & 15 | z >> 4 & 240, z >> 4 & 15 | 240 & z, ((15 & z) << 4 | 15 & z) / 255) : null) : (z = o.exec(y)) ? new _E(z[1], z[2], z[3], 1) : (z = p.exec(y)) ? new _E(255 * z[1] / 100, 255 * z[2] / 100, 255 * z[3] / 100, 1) : (z = q.exec(y)) ? _B(z[1], z[2], z[3], z[4]) : (z = r.exec(y)) ? _B(255 * z[1] / 100, 255 * z[2] / 100, 255 * z[3] / 100, z[4]) : (z = s.exec(y)) ? _J(z[1], z[2] / 100, z[3] / 100, 1) : (z = t.exec(y)) ? _J(z[1], z[2] / 100, z[3] / 100, z[4]) : u.hasOwnProperty(y) ? _A(u[y]) : 'transparent' === y ? new _E(NaN, NaN, NaN, 0) : null;
    }
    function _A(B) {
        return new _E(B >> 16 & 255, B >> 8 & 255, 255 & B, 1);
    }
    function _B(C, D, E, F) {
        return F <= 0 && (C = D = E = NaN), new _E(C, D, E, F);
    }
    function C(D) {
        return D instanceof h || (D = _x(D)), D ? new _E((D = D.rgb()).r, D.g, D.b, D.opacity) : new _E();
    }
    function _D(E, F, G, H) {
        return 1 === arguments.length ? C(E) : new _E(E, F, G, null == H ? 1 : H);
    }
    function _E(F, G, H, I) {
        this.r = +F, this.g = +G, this.b = +H, this.opacity = +I;
    }
    function F() {
        return '#' + _I(this.r) + _I(this.g) + _I(this.b);
    }
    function G() {
        var H = this.opacity;
        return (1 === (H = isNaN(H) ? 1 : Math.max(0, Math.min(1, H))) ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === H ? ')' : ', ' + H + ')');
    }
    function _I(J) {
        return ((J = Math.max(0, Math.min(255, Math.round(J) || 0))) < 16 ? '0' : '') + J.toString(16);
    }
    function _J(K, L, M, N) {
        return N <= 0 ? K = L = M = NaN : M <= 0 || M >= 1 ? K = L = NaN : L <= 0 && (K = NaN), new _T(K, L, M, N);
    }
    function K(L) {
        if (L instanceof _T)
            return new _T(L.h, L.s, L.l, L.opacity);
        if (L instanceof h || (L = _x(L)), !L)
            return new _T();
        if (L instanceof _T)
            return L;
        var M = (L = L.rgb()).r / 255, N = L.g / 255, O = L.b / 255, P = Math.min(M, N, O), Q = Math.max(M, N, O), R = NaN, S = Q - P, T = (Q + P) / 2;
        return S ? (R = M === Q ? (N - O) / S + 6 * (N < O) : N === Q ? (O - M) / S + 2 : (M - N) / S + 4, S /= T < 0.5 ? Q + P : 2 - Q - P, R *= 60) : S = T > 0 && T < 1 ? 0 : R, new _T(R, S, T, L.opacity);
    }
    function _T(U, V, W, X) {
        this.h = +U, this.s = +V, this.l = +W, this.opacity = +X;
    }
    function U(V, W, X) {
        return 255 * (V < 60 ? W + (X - W) * V / 60 : V < 180 ? X : V < 240 ? W + (X - W) * (240 - V) / 60 : W);
    }
    (0, P.default)(h, _x, {
        copy: function (V) {
            return Object.assign(new this.constructor(), this, V);
        },
        displayable: function () {
            return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHsl: function () {
            return K(this).formatHsl();
        },
        formatRgb: w,
        toString: w
    }), (0, P.default)(_E, _D, (0, P.extend)(h, {
        brighter: function (V) {
            return V = null == V ? R : Math.pow(R, V), new _E(this.r * V, this.g * V, this.b * V, this.opacity);
        },
        darker: function (V) {
            return V = null == V ? Q : Math.pow(Q, V), new _E(this.r * V, this.g * V, this.b * V, this.opacity);
        },
        rgb: function () {
            return this;
        },
        displayable: function () {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: F,
        formatHex: F,
        formatRgb: G,
        toString: G
    })), (0, P.default)(_T, function (V, W, X, Y) {
        return 1 === arguments.length ? K(V) : new _T(V, W, X, null == Y ? 1 : Y);
    }, (0, P.extend)(h, {
        brighter: function (V) {
            return V = null == V ? R : Math.pow(R, V), new _T(this.h, this.s, this.l * V, this.opacity);
        },
        darker: function (V) {
            return V = null == V ? Q : Math.pow(Q, V), new _T(this.h, this.s, this.l * V, this.opacity);
        },
        rgb: function () {
            var V = this.h % 360 + 360 * (this.h < 0), W = isNaN(V) || isNaN(this.s) ? 0 : this.s, X = this.l, Y = X + (X < 0.5 ? X : 1 - X) * W, Z = 2 * X - Y;
            return new _E(U(V >= 240 ? V - 240 : V + 120, Z, Y), U(V, Z, Y), U(V < 120 ? V + 240 : V - 120, Z, Y), this.opacity);
        },
        displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl: function () {
            var V = this.opacity;
            return (1 === (V = isNaN(V) ? 1 : Math.max(0, Math.min(1, V))) ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === V ? ')' : ', ' + V + ')');
        }
    }));
}), d.register('.....', function (e, f) {
    function g(h, i, j) {
        h.prototype = i.prototype = j, j.constructor = h;
    }
    function h(i, j) {
        var k = Object.create(i.prototype);
        for (var l in j)
            k[g] = j[g];
        return k;
    }
    b(e.exports, 'default', function () {
        return g;
    }), b(e.exports, 'extend', function () {
        return h;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), _k = function e(l) {
            var m = (0, j.gamma)(l);
            function n(o, p) {
                var q = m((o = (0, g.rgb)(o)).r, (p = (0, g.rgb)(p)).r), r = m(o.g, p.g), s = m(o.b, p.b), t = (0, j.default)(o.opacity, p.opacity);
                return function (u) {
                    return o.r = n(u), o.g = r(u), o.b = s(u), o.opacity = t(u), o + '';
                };
            }
            return n.gamma = e, n;
        }(1);
    function l(m) {
        return function (n) {
            var o, p, q = n.length, r = new Array(q), s = new Array(q), t = new Array(q);
            for (o = 0; o < q; ++o)
                p = (0, g.rgb)(n[o]), r[o] = p.r || 0, s[o] = p.g || 0, t[o] = p.b || 0;
            return r = m(r), s = m(s), t = m(t), p.opacity = 1, function (u) {
                return p.r = r(u), p.g = s(u), p.b = t(u), p + '';
            };
        };
    }
    l(h.default), l(i.default);
}), d.register('.....', function (e, f) {
    function g(h, i, j, k, l) {
        var m = h * h, n = m * h;
        return ((1 - 3 * h + 3 * m - n) * i + (4 - 6 * m + 3 * n) * j + (1 + 3 * h + 3 * m - 3 * n) * k + n * l) / 6;
    }
    function j(k) {
        var l = k.length - 1;
        return function (m) {
            var n = m <= 0 ? m = 0 : m >= 1 ? (m = 1, l - 1) : Math.floor(m * l), o = k[n], p = k[n + 1], q = n > 0 ? k[n - 1] : 2 * o - p, r = n < l - 1 ? k[n + 2] : 2 * p - o;
            return g((m - n / l) * l, q, o, p, r);
        };
    }
    l(e.exports, 'basis', function () {
        return g;
    }), l(e.exports, 'default', function () {
        return j;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i) {
        var j = i.length;
        return function (k) {
            var l = Math.floor(((k %= 1) < 0 ? ++k : k) * j), m = i[(l + j - 1) % j], n = i[l % j], o = i[(l + 1) % j], p = i[(l + 2) % j];
            return (0, g.basis)((k - l / j) * j, m, n, o, p);
        };
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'gamma', function () {
        return _i;
    }), b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....');
    function h(i, j) {
        return function (k) {
            return i + k * j;
        };
    }
    function _i(j) {
        return 1 == (j = +j) ? _j : function (k, l) {
            return l - k ? function (m, n, o) {
                return m = Math.pow(m, o), n = Math.pow(n, o) - m, o = 1 / o, function (p) {
                    return Math.pow(m + p * n, o);
                };
            }(k, l, j) : (0, g.default)(isNaN(k) ? l : k);
        };
    }
    function _j(k, l) {
        var m = l - k;
        return m ? h(k, m) : (0, g.default)(isNaN(k) ? l : k);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    var g = h => () => h;
}), d.register('.....', function (e, f) {
    b(e.exports, 'genericArray', function () {
        return _h;
    });
    var g = d('.....');
    d('.....');
    function _h(i, j) {
        var k, l = j ? j.length : 0, m = i ? Math.min(l, i.length) : 0, n = new Array(_h), o = new Array(l);
        for (k = 0; k < _h; ++k)
            n[k] = (0, g.default)(i[k], j[k]);
        for (; k < l; ++k)
            o[k] = j[k];
        return function (p) {
            for (k = 0; k < _h; ++k)
                o[k] = n[k](p);
            return o;
        };
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        i || (i = []);
        var j, k = h ? Math.min(i.length, h.length) : 0, l = i.slice();
        return function (m) {
            for (j = 0; j < g; ++j)
                l[j] = h[j] * (1 - m) + i[j] * m;
            return l;
        };
    }
    function k(l) {
        return ArrayBuffer.isView(l) && !(l instanceof DataView);
    }
    b(e.exports, 'default', function () {
        return g;
    }), b(e.exports, 'isNumberArray', function () {
        return k;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j = new Date();
        return h = +h, i = +i, function (k) {
            return j.setTime(h * (1 - k) + i * k), j;
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return h = +h, i = +i, function (j) {
            return h * (1 - j) + i * j;
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        var k, l = {}, m = {};
        for (k in (null !== i && 'object' == typeof i || (i = {}), null !== j && 'object' == typeof j || (j = {}), j))
            k in i ? l[k] = (0, g.default)(i[k], j[k]) : _h[k] = j[k];
        return function (n) {
            for (k in l)
                _h[k] = l[k](n);
            return _h;
        };
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, i = new RegExp(h.source, 'g');
    function _j(k, l) {
        var m, n, o, p = h.lastIndex = i.lastIndex = 0, q = -1, r = [], s = [];
        for (k += '', l += ''; (m = h.exec(k)) && (n = i.exec(l));)
            (_j = n.index) > p && (_j = l.slice(p, _j), r[q] ? r[q] += _j : r[++q] = _j), (m = m[0]) === (n = n[0]) ? r[q] ? r[q] += n : r[++q] = n : (r[++q] = null, s.push({
                i: q,
                x: (0, g.default)(m, n)
            })), p = i.lastIndex;
        return p < l.length && (_j = l.slice(p), r[q] ? r[q] += _j : r[++q] = _j), r.length < 2 ? s[0] ? function (t) {
            return function (u) {
                return t(u) + '';
            };
        }(s[0].x) : function (t) {
            return function () {
                return t;
            };
        }(l) : (l = s.length, function (t) {
            for (var u, v = 0; v < l; ++v)
                r[(u = s[v]).i] = u.x(t);
            return r.join('');
        });
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return h = +h, i = +i, function (j) {
            return Math.round(h * (1 - j) + i * j);
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        return function () {
            return h;
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        return +h;
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function _m(n, o, p, q) {
        var r, s = (0, g.tickStep)(n, o, p);
        switch ((q = (0, i.default)(null == q ? ',f' : q)).type) {
        case 's':
            var t = Math.max(Math.abs(n), Math.abs(o));
            return null != q.precision || isNaN(_m = (0, k.default)(s, t)) || (q.precision = _m), (0, h.formatPrefix)(q, t);
        case '':
        case 'e':
        case 'g':
        case 'p':
        case 'r':
            null != q.precision || isNaN(_m = (0, l.default)(s, Math.max(Math.abs(n), Math.abs(o)))) || (q.precision = _m - ('e' === q.type));
            break;
        case 'f':
        case '%':
            null != q.precision || isNaN(_m = (0, j.default)(s)) || (q.precision = _m - 2 * ('%' === q.type));
        }
        return (0, h.format)(q);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'format', function () {
        return _h;
    }), b(e.exports, 'formatPrefix', function () {
        return _i;
    });
    var g, _h, _i, j, k = d('.....');
    j = {
        thousands: ',',
        grouping: [3],
        currency: [
            '$',
            ''
        ]
    }, g = (0, k.default)(j), _h = g.format, _i = g.formatPrefix;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _q;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = Array.prototype.map, p = [
            'y',
            'z',
            'a',
            'f',
            'p',
            'n',
            'µ',
            'm',
            '',
            'k',
            'M',
            'G',
            'T',
            'P',
            'E',
            'Z',
            'Y'
        ];
    function _q(r) {
        var s = void 0 === r.grouping || void 0 === r.thousands ? n.default : (0, h.default)(o.call(r.grouping, Number), r.thousands + ''), t = void 0 === r.currency ? '' : r.currency[0] + '', u = void 0 === r.currency ? '' : r.currency[1] + '', v = void 0 === r.decimal ? '.' : r.decimal + '', w = void 0 === r.numerals ? n.default : (0, i.default)(o.call(r.numerals, String)), x = void 0 === r.percent ? '%' : r.percent + '', y = void 0 === r.minus ? '\u2212' : r.minus + '', z = void 0 === r.nan ? 'NaN' : r.nan + '';
        function A(B) {
            var C = (B = (0, j.default)(B)).fill, D = B.align, E = B.sign, F = B.symbol, G = B.zero, H = B.width, I = B.comma, J = B.precision, K = B.trim, L = B.type;
            'n' === L ? (I = !0, L = 'g') : l.default[L] || (void 0 === J && (J = 12), K = !0, L = 'g'), (G || '0' === C && '=' === D) && (G = !0, C = '0', D = '=');
            var M = '$' === F ? t : '#' === F && /[boxX]/.test(L) ? '0' + L.toLowerCase() : '', N = '$' === F ? u : /[%p]/.test(L) ? x : '', O = l.default[L], P = /[defgprs%]/.test(L);
            function Q(R) {
                var S, T, U, V = M, W = N;
                if ('c' === L)
                    W = O(R) + W, R = '';
                else {
                    var X = (R = +R) < 0 || 1 / R < 0;
                    if (R = isNaN(R) ? z : O(Math.abs(R), J), K && (R = (0, k.default)(R)), X && 0 == +R && '+' !== E && (X = !1), V = (X ? '(' === E ? E : y : '-' === E || '(' === E ? '' : E) + V, W = ('s' === L ? p[8 + m.prefixExponent / 3] : '') + W + (X && '(' === E ? ')' : ''), P)
                        for (S = -1, T = R.length; ++S < T;)
                            if (48 > (U = R.charCodeAt(S)) || U > 57) {
                                W = (46 === U ? _q + R.slice(S + 1) : R.slice(S)) + W, R = R.slice(0, S);
                                break;
                            }
                }
                I && !G && (R = s(R, 1 / 0));
                var Y = V.length + R.length + W.length, Z = Q < A ? new Array(A - Q + 1).join(C) : '';
                switch (I && G && (R = s(Z + R, Z.length ? A - W.length : 1 / 0), Z = ''), D) {
                case '<':
                    R = V + R + W + Z;
                    break;
                case '=':
                    R = V + Z + R + W;
                    break;
                case '^':
                    R = Z.slice(0, Q = Z.length >> 1) + V + R + W + Z.slice(Q);
                    break;
                default:
                    R = Z + V + R + W;
                }
                return w(R);
            }
            return J = void 0 === J ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, J)) : Math.max(0, Math.min(20, J)), Q.toString = function () {
                return B + '';
            }, Q;
        }
        return {
            format: A,
            formatPrefix: function (X, Y) {
                var Z = A(((X = (0, U.default)(X)).type = 'f', X)), $ = 3 * Math.max(-8, Math.min(8, Math.floor((0, C.default)(Y) / 3))), ab = Math.pow(10, -$), bb = p[8 + $ / 3];
                return function (cb) {
                    return Z(ab * cb) + bb;
                };
            }
        };
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i) {
        return (i = (0, g.formatDecimalParts)(Math.abs(i))) ? i[1] : NaN;
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return Math.abs(h = Math.round(h)) >= 1e+21 ? h.toLocaleString('en').replace(/,/g, '') : h.toString(10);
    }
    function h(i, j) {
        if ((f = (i = j ? i.toExponential(j - 1) : i.toExponential()).indexOf('e')) < 0)
            return null;
        var k, l = i.slice(0, k);
        return [
            g.length > 1 ? g[0] + g.slice(2) : g,
            +i.slice(k + 1)
        ];
    }
    b(e.exports, 'default', function () {
        return g;
    }), b(e.exports, 'formatDecimalParts', function () {
        return h;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return function (j, k) {
            for (var l = j.length, m = [], n = 0, o = h[0], p = 0; l > 0 && o > 0 && (p + o + 1 > k && (o = Math.max(1, k - p)), m.push(j.substring(l -= o, l + o)), !((p += o + 1) > k));)
                o = h[n = (n + 1) % h.length];
            return m.reverse().join(i);
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        return function (i) {
            return i.replace(/[0-9]/g, function (j) {
                return h[+j];
            });
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function _h(i) {
        if (!(b = g.exec(i)))
            throw new Error('invalid format: ' + i);
        var j;
        return new _j({
            fill: j[1],
            align: j[2],
            sign: j[3],
            symbol: j[4],
            zero: j[5],
            width: j[6],
            comma: j[7],
            precision: j[8] && j[8].slice(1),
            trim: j[9],
            type: j[10]
        });
    }
    function _j(k) {
        this.fill = void 0 === k.fill ? ' ' : k.fill + '', this.align = void 0 === k.align ? '>' : k.align + '', this.sign = void 0 === k.sign ? '-' : k.sign + '', this.symbol = void 0 === k.symbol ? '' : k.symbol + '', this.zero = !!k.zero, this.width = void 0 === k.width ? void 0 : +k.width, this.comma = !!k.comma, this.precision = void 0 === k.precision ? void 0 : +k.precision, this.trim = !!k.trim, this.type = void 0 === k.type ? '' : k.type + '';
    }
    _h.prototype = _j.prototype, _j.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? '0' : '') + (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) + (this.comma ? ',' : '') + (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) + (this.trim ? '~' : '') + this.type;
    };
}), d.register('.....', function (e, f) {
    function g(h) {
        t:
            for (var i, j = h.length, k = 1, l = -1; g < j; ++g)
                switch (h[g]) {
                case '.':
                    l = i = g;
                    break;
                case '0':
                    0 === l && (l = g), i = g;
                    break;
                default:
                    if (!+h[g])
                        break t;
                    l > 0 && (l = 0);
                }
        return l > 0 ? h.slice(0, l) + h.slice(i + 1) : h;
    }
    i(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = {
            '%': (k, l) => (100 * k).toFixed(l),
            b: k => Math.round(k).toString(2),
            c: k => k + '',
            d: g.default,
            e: (k, l) => k.toExponential(l),
            f: (k, l) => k.toFixed(l),
            g: (k, l) => k.toPrecision(l),
            o: k => Math.round(k).toString(8),
            p: (k, l) => (0, i.default)(100 * k, l),
            r: i.default,
            s: h.default,
            X: k => Math.round(k).toString(16).toUpperCase(),
            x: k => Math.round(k).toString(16)
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'prefixExponent', function () {
        return _g;
    }), b(e.exports, 'default', function () {
        return _i;
    });
    var _g, h = d('.....');
    function _i(j, k) {
        var l = (0, h.formatDecimalParts)(j, k);
        if (!l)
            return j + '';
        var m = l[0], n = l[1], o = _i - (_g = 3 * Math.max(-8, Math.min(8, Math.floor(_i / 3)))) + 1, p = m.length;
        return o === p ? m : o > p ? m + new Array(o - p + 1).join('0') : o > 0 ? m.slice(0, o) + '.' + m.slice(o) : '0.' + new Array(1 - o).join('0') + (0, h.formatDecimalParts)(j, Math.max(0, k + o - 1))[0];
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        var k = (0, g.formatDecimalParts)(i, j);
        if (!k)
            return i + '';
        var l = k[0], m = k[1];
        return _h < 0 ? '0.' + new Array(-_h).join('0') + l : l.length > _h + 1 ? l.slice(0, _h + 1) + '.' + l.slice(_h + 1) : l + new Array(_h - l.length + 2).join('0');
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return h;
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i) {
        return Math.max(0, -(0, g.default)(Math.abs(i)));
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, g.default)(j) / 3))) - (0, g.default)(Math.abs(i)));
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        return i = Math.abs(i), j = Math.abs(j) - i, Math.max(0, (0, g.default)(j) - (0, g.default)(i)) + 1;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'loggish', function () {
        return _r;
    }), b(e.exports, 'default', function () {
        return _x;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        return Math.log(m);
    }
    function m(n) {
        return Math.exp(n);
    }
    function n(o) {
        return -Math.log(-o);
    }
    function o(p) {
        return -Math.exp(-p);
    }
    function p(q) {
        return isFinite(q) ? +('1e' + q) : q < 0 ? 0 : q;
    }
    function q(r) {
        return function (s) {
            return -r(-s);
        };
    }
    function _r(s) {
        var t, u, v = s(l, m), w = v.domain, x = 10;
        function y() {
            return t = function (z) {
                return z === Math.E ? Math.log : 10 === z && Math.log10 || 2 === z && Math.log2 || (z = Math.log(z), function (A) {
                    return Math.log(A) / z;
                });
            }(x), u = function (z) {
                return 10 === z ? p : z === Math.E ? Math.exp : function (A) {
                    return Math.pow(z, A);
                };
            }(x), w()[0] < 0 ? (t = q(t), u = q(u), s(n, o)) : s(l, m), v;
        }
        return v.base = function (z) {
            return arguments.length ? (x = +z, y()) : x;
        }, v.domain = function (z) {
            return arguments.length ? (w(z), y()) : w();
        }, v.ticks = function (z) {
            var A, B = w(), C = B[0], D = B[B.length - 1];
            (A = D < C) && (p = C, C = D, D = p);
            var E, F, G, H = t(C), I = t(D), J = null == z ? 10 : +z, K = [];
            if (!(x % 1) && I - H < J) {
                if (H = Math.floor(H), I = Math.ceil(I), C > 0) {
                    for (; H <= I; ++H)
                        for (F = 1, E = u(H); F < x; ++F)
                            if (!((G = E * F) < C)) {
                                if (G > D)
                                    break;
                                K.push(G);
                            }
                } else
                    for (; H <= I; ++H)
                        for (F = x - 1, E = u(H); F >= 1; --F)
                            if (!((G = E * F) < C)) {
                                if (G > D)
                                    break;
                                K.push(G);
                            }
                2 * K.length < J && (K = (0, g.default)(C, D, J));
            } else
                K = (0, g.default)(H, I, Math.min(I - H, J)).map(u);
            return A ? K.reverse() : K;
        }, v.tickFormat = function (z, A) {
            if (null == A && (A = 10 === x ? '.0e' : ','), 'function' != typeof A && (A = (0, h.format)(A)), z === 1 / 0)
                return A;
            null == z && (z = 10);
            var B = Math.max(1, x * z / v.ticks().length);
            return function (C) {
                var D = C / u(Math.round(t(C)));
                return D * x < x - 0.5 && (D *= x), D <= B ? A(C) : '';
            };
        }, v.nice = function () {
            return w((0, i.default)(w(), {
                floor: function (z) {
                    return u(Math.floor(t(z)));
                },
                ceil: function (z) {
                    return u(Math.ceil(t(z)));
                }
            }));
        }, v;
    }
    function _x() {
        var y = _r((0, w.transformer)()).domain([
            1,
            10
        ]);
        return y.copy = function () {
            return (0, w.copy)(y, _x()).base(y.base());
        }, x.initRange.apply(y, arguments), y;
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j, k = 0, l = (h = h.slice()).length - 1, m = h[g], n = h[l];
        return n < m && (j = g, g = l, l = j, j = m, m = n, n = j), h[g] = i.floor(m), h[l] = i.ceil(n), h;
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'symlogish', function () {
        return _l;
    }), b(e.exports, 'default', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        return function (l) {
            return Math.sign(l) * Math.log1p(Math.abs(l / k));
        };
    }
    function k(l) {
        return function (m) {
            return Math.sign(m) * Math.expm1(Math.abs(m)) * l;
        };
    }
    function _l(m) {
        var n = 1, o = m(j(n), k(n));
        return o.constant = function (p) {
            return arguments.length ? m(j(n = +p), k(n)) : n;
        }, (0, g.linearish)(o);
    }
    function _o() {
        var p = _l((0, h.transformer)());
        return p.copy = function () {
            return (0, h.copy)(p, _o()).constant(p.constant());
        }, i.initRange.apply(p, arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'powish', function () {
        return _m;
    }), b(e.exports, 'default', function () {
        return _p;
    }), b(e.exports, 'sqrt', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        return function (l) {
            return l < 0 ? -Math.pow(-l, k) : Math.pow(l, k);
        };
    }
    function k(l) {
        return l < 0 ? -Math.sqrt(-l) : Math.sqrt(l);
    }
    function l(m) {
        return m < 0 ? -m * m : m * m;
    }
    function _m(n) {
        var o = n(h.identity, h.identity), p = 1;
        function q() {
            return 1 === p ? n(h.identity, h.identity) : 0.5 === p ? n(k, l) : n(j(p), j(1 / p));
        }
        return o.exponent = function (r) {
            return arguments.length ? (p = +r, q()) : p;
        }, (0, g.linearish)(o);
    }
    function _p() {
        var q = _m((0, h.transformer)());
        return q.copy = function () {
            return (0, h.copy)(q, _p()).exponent(q.exponent());
        }, i.initRange.apply(q, arguments), q;
    }
    function _r() {
        return _p.apply(null, arguments).exponent(0.5);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        return Math.sign(l) * l * l;
    }
    function l(m) {
        return Math.sign(m) * Math.sqrt(Math.abs(m));
    }
    function _m() {
        var n, o = (0, g.default)(), p = [
                0,
                1
            ], q = !1;
        function r(s) {
            var t = l(o(s));
            return isNaN(t) ? n : q ? Math.round(t) : t;
        }
        return r.invert = function (t) {
            return o.invert(k(t));
        }, r.domain = function (t) {
            return arguments.length ? (o.domain(t), r) : o.domain();
        }, r.range = function (t) {
            return arguments.length ? (o.range((p = Array.from(t, j.default)).map(k)), r) : p.slice();
        }, r.rangeRound = function (t) {
            return r.range(t).round(!0);
        }, r.round = function (t) {
            return arguments.length ? (q = !!t, r) : q;
        }, r.clamp = function (t) {
            return arguments.length ? (o.clamp(t), r) : o.clamp();
        }, r.unknown = function (t) {
            return arguments.length ? (n = t, r) : n;
        }, r.copy = function () {
            return _m(o.domain(), p).round(q).clamp(o.clamp()).unknown(n);
        }, h.initRange.apply(r, arguments), (0, i.linearish)(r);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function _k() {
        var l, m = [], n = [], o = [];
        function p() {
            var q = 0, r = Math.max(1, n.length);
            for (o = new Array(r - 1); ++q < r;)
                o[q - 1] = (0, i.quantileSorted)(m, q / r);
            return _s;
        }
        function _s(t) {
            return null == t || isNaN(t = +t) ? q : n[(0, h.default)(o, t)];
        }
        return _s.invertExtent = function (t) {
            var u = n.indexOf(t);
            return u < 0 ? [
                NaN,
                NaN
            ] : [
                u > 0 ? o[u - 1] : m[0],
                u < o.length ? o[u] : m[m.length - 1]
            ];
        }, _s.domain = function (t) {
            if (!arguments.length)
                return m.slice();
            m = [];
            for (let u of t)
                null == u || isNaN(u = +u) || m.push(u);
            return m.sort(r.default), p();
        }, _s.range = function (t) {
            return arguments.length ? (n = Array.from(t), p()) : n.slice();
        }, _s.unknown = function (t) {
            return arguments.length ? (q = t, _s) : q;
        }, _s.quantiles = function () {
            return o.slice();
        }, _s.copy = function () {
            return _k().domain(m).range(n).unknown(q);
        }, j.initRange.apply(_s, arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _k;
    }), b(e.exports, 'quantileSorted', function () {
        return _q;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function _k(l, m, n) {
        if (d = (l = Float64Array.from((0, j.numbers)(l, n))).length) {
            if ((m = +m) <= 0 || d < 2)
                return (0, h.default)(l);
            if (m >= 1)
                return (0, g.default)(l);
            var o, p = (o - 1) * m, _q = Math.floor(_k), r = (0, g.default)((0, i.default)(l, _q).subarray(0, _q + 1));
            return r + ((0, h.default)(l.subarray(_q + 1)) - r) * (_k - _q);
        }
    }
    function p(q, r, s = j.default) {
        if (o = q.length) {
            if ((r = +r) <= 0 || o < 2)
                return +s(q[0], 0, q);
            if (r >= 1)
                return +s(q[o - 1], o - 1, q);
            var t, u = (t - 1) * r, v = Math.floor(u), w = +s(q[v], v, q);
            return w + (+s(q[v + 1], v + 1, q) - w) * (u - v);
        }
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        let j;
        if (void 0 === i)
            for (const k of h)
                null != i && (j < i || void 0 === j && i >= i) && (j = i);
        else {
            let l = -1;
            for (let m of h)
                null != (m = i(m, ++l, h)) && (j < m || void 0 === j && m >= m) && (j = m);
        }
        return j;
    }
    k(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        let j;
        if (void 0 === i)
            for (const k of h)
                null != i && (j > i || void 0 === j && i >= i) && (j = i);
        else {
            let l = -1;
            for (let m of h)
                null != (m = i(m, ++l, h)) && (j > m || void 0 === j && m >= m) && (j = m);
        }
        return j;
    }
    k(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j, k = 0, l = i.length - 1, m = g.default) {
        for (; l > k;) {
            if (l - k > 600) {
                const n = l - k + 1, o = j - k + 1, p = Math.log(n), q = 0.5 * Math.exp(2 * p / 3), r = 0.5 * Math.sqrt(p * q * (n - q) / n) * (o - n / 2 < 0 ? -1 : 1);
                _h(i, j, Math.max(k, Math.floor(j - o * q / n + r)), Math.min(l, Math.floor(j + (n - o) * q / n + r)), m);
            }
            const s = i[j];
            let t = k, u = l;
            for (o(i, k, j), m(i[l], s) > 0 && o(i, k, l); t < u;) {
                for (o(i, t, u), ++t, --u; m(i[t], s) < 0;)
                    ++t;
                for (; m(i[u], s) > 0;)
                    --u;
            }
            0 === m(i[k], s) ? o(i, k, u) : (++u, o(i, u, l)), u <= j && (k = u + 1), j <= u && (l = u - 1);
        }
        return i;
    }
    function o(p, q, r) {
        const s = p[q];
        p[q] = p[r], p[r] = s;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function _j() {
        var k, l = 0, m = 1, n = 1, o = [0.5], p = [
                0,
                1
            ];
        function q(r) {
            return null != r && r <= r ? p[(0, g.default)(o, r, 0, n)] : k;
        }
        function r() {
            var s = -1;
            for (o = new Array(n); ++s < n;)
                o[s] = ((s + 1) * m - (s - n) * l) / (n + 1);
            return q;
        }
        return q.domain = function (t) {
            return arguments.length ? ([u, v] = t, u = +u, v = +v, r()) : [
                u,
                v
            ];
        }, q.range = function (t) {
            return arguments.length ? (n = (p = Array.from(t)).length - 1, r()) : p.slice();
        }, q.invertExtent = function (t) {
            var u = p.indexOf(t);
            return u < 0 ? [
                NaN,
                NaN
            ] : u < 1 ? [
                l,
                o[0]
            ] : u >= n ? [
                o[n - 1],
                m
            ] : [
                o[u - 1],
                o[u]
            ];
        }, q.unknown = function (t) {
            return arguments.length ? (s = t, q) : q;
        }, q.thresholds = function () {
            return o.slice();
        }, q.copy = function () {
            return _j().domain([
                l,
                m
            ]).range(p).unknown(s);
        }, i.initRange.apply((0, h.linearish)(q), arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i() {
        var j, k = [0.5], l = [
                0,
                1
            ], m = 1;
        function n(o) {
            return null != o && o <= o ? l[(0, g.default)(k, o, 0, m)] : j;
        }
        return n.domain = function (o) {
            return arguments.length ? (k = Array.from(o), m = Math.min(k.length, l.length - 1), n) : k.slice();
        }, n.range = function (o) {
            return arguments.length ? (l = Array.from(o), m = Math.min(k.length, l.length - 1), n) : l.slice();
        }, n.invertExtent = function (o) {
            var p = l.indexOf(o);
            return [
                k[p - 1],
                k[p]
            ];
        }, n.unknown = function (o) {
            return arguments.length ? (j = o, n) : j;
        }, n.copy = function () {
            return _i().domain(k).range(l).unknown(j);
        }, h.initRange.apply(n, arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'calendar', function () {
        return _u;
    }), b(e.exports, 'default', function () {
        return _J;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    function s(t) {
        return new Date(t);
    }
    function t(u) {
        return u instanceof Date ? +u : +new Date(+u);
    }
    function _u(v, w, x, y, z, A, B, C, D, E) {
        var F = (0, p.default)(), G = F.invert, H = F.domain, I = E('.%L'), _J = E(':%S'), K = E('%I:%M'), L = E('%I %p'), M = E('%a %d'), N = E('%b %d'), O = E('%B'), P = E('%Y');
        function Q(R) {
            return (D(R) < R ? I : C(R) < R ? _J : B(R) < R ? K : A(R) < R ? L : y(R) < R ? z(R) < R ? M : N : x(R) < R ? O : P)(R);
        }
        return F.invert = function (R) {
            return new Date(G(R));
        }, F.domain = function (R) {
            return arguments.length ? H(Array.from(R, t)) : H().map(s);
        }, F.ticks = function (R) {
            var S = H();
            return v(S[0], S[S.length - 1], null == R ? 10 : R);
        }, F.tickFormat = function (R, S) {
            return null == S ? Q : E(S);
        }, F.nice = function (R) {
            var S = H();
            return R && 'function' == typeof R.range || (R = w(S[0], S[S.length - 1], null == R ? 10 : R)), R ? H((0, r.default)(S, R)) : F;
        }, F.copy = function () {
            return (0, p.copy)(F, _u(v, w, x, y, z, A, B, C, D, E));
        }, F;
    }
    function G() {
        return I.initRange.apply(_u(l.timeTicks, l.timeTickInterval, G.default, j.default, F.sunday, g.default, h.default, i.default, k.default, H.timeFormat).domain([
            new Date(2000, 0, 1),
            new Date(2000, 0, 2)
        ]), arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(j => j.setHours(0, 0, 0, 0), (j, k) => j.setDate(j.getDate() + k), (j, k) => (k - j - (k.getTimezoneOffset() - j.getTimezoneOffset()) * h.durationMinute) / h.durationDay, j => j.getDate() - 1), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = new Date(), h = new Date();
    function _i(j, k, l, m) {
        function n(o) {
            return j(o = 0 === arguments.length ? new Date() : new Date(+o)), o;
        }
        return n.floor = function (o) {
            return j(o = new Date(+o)), o;
        }, n.ceil = function (o) {
            return j(o = new Date(o - 1)), k(o, 1), j(o), o;
        }, n.round = function (o) {
            var p = n(o), q = n.ceil(o);
            return o - p < q - o ? p : q;
        }, n.offset = function (o, p) {
            return k(o = new Date(+o), null == p ? 1 : Math.floor(p)), o;
        }, n.range = function (o, p, q) {
            var r, s = [];
            if (o = n.ceil(o), q = null == q ? 1 : Math.floor(q), !(o < p && q > 0))
                return s;
            do {
                s.push(r = new Date(+o)), k(o, q), j(o);
            } while (r < o && o < p);
            return s;
        }, n.filter = function (o) {
            return _i(function (p) {
                if (p >= p)
                    for (; j(p), !o(p);)
                        p.setTime(p - 1);
            }, function (p, q) {
                if (p >= p)
                    if (q < 0)
                        for (; ++q <= 0;)
                            for (; k(p, -1), !o(p););
                    else
                        for (; --q >= 0;)
                            for (; k(p, 1), !o(p););
            });
        }, l && (n.count = function (o, p) {
            return g.setTime(+o), h.setTime(+p), j(g), j(h), Math.floor(l(g, h));
        }, n.every = function (o) {
            return o = Math.floor(o), isFinite(o) && o > 0 ? o > 1 ? n.filter(m ? function (p) {
                return m(p) % o == 0;
            } : function (p) {
                return n.count(0, p) % o == 0;
            }) : n : null;
        }), n;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'durationSecond', function () {
        return d;
    }), b(e.exports, 'durationMinute', function () {
        return _h;
    }), b(e.exports, 'durationHour', function () {
        return _i;
    }), b(e.exports, 'durationDay', function () {
        return _j;
    }), b(e.exports, 'durationWeek', function () {
        return _k;
    }), b(e.exports, 'durationMonth', function () {
        return _l;
    }), b(e.exports, 'durationYear', function () {
        return _m;
    });
    const g = 1000, _h = 60 * g, _i = 60 * _h, _j = 24 * _i, _k = 7 * _j, _l = 30 * _j, _m = 365 * _j;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setTime(j - j.getMilliseconds() - j.getSeconds() * h.durationSecond - j.getMinutes() * h.durationMinute);
        }, function (j, k) {
            j.setTime(+j + k * h.durationHour);
        }, function (j, k) {
            return (k - j) / h.durationHour;
        }, function (j) {
            return j.getHours();
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setTime(j - j.getMilliseconds() - j.getSeconds() * h.durationSecond);
        }, function (j, k) {
            j.setTime(+j + k * h.durationMinute);
        }, function (j, k) {
            return (k - j) / h.durationMinute;
        }, function (j) {
            return j.getMinutes();
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = (0, d('.....').default)(function (h) {
            h.setDate(1), h.setHours(0, 0, 0, 0);
        }, function (h, i) {
            h.setMonth(h.getMonth() + i);
        }, function (h, i) {
            return i.getMonth() - h.getMonth() + 12 * (i.getFullYear() - h.getFullYear());
        }, function (h) {
            return h.getMonth();
        }), _h = g;
    g.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setTime(j - j.getMilliseconds());
        }, function (j, k) {
            j.setTime(+j + k * h.durationSecond);
        }, function (j, k) {
            return (k - j) / h.durationSecond;
        }, function (j) {
            return j.getUTCSeconds();
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'utcTicks', function () {
        return _B;
    }), b(e.exports, 'utcTickInterval', function () {
        return _C;
    }), b(e.exports, 'timeTicks', function () {
        return _D;
    }), b(e.exports, 'timeTickInterval', function () {
        return _E;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....');
    function x(y, z, A, B, C, D) {
        const E = [
            [
                k.default,
                1,
                i.durationSecond
            ],
            [
                k.default,
                5,
                5 * i.durationSecond
            ],
            [
                k.default,
                15,
                15 * i.durationSecond
            ],
            [
                k.default,
                30,
                30 * i.durationSecond
            ],
            [
                D,
                1,
                i.durationMinute
            ],
            [
                D,
                5,
                5 * i.durationMinute
            ],
            [
                D,
                15,
                15 * i.durationMinute
            ],
            [
                D,
                30,
                30 * i.durationMinute
            ],
            [
                C,
                1,
                i.durationHour
            ],
            [
                C,
                3,
                3 * i.durationHour
            ],
            [
                C,
                6,
                6 * i.durationHour
            ],
            [
                C,
                12,
                12 * i.durationHour
            ],
            [
                B,
                1,
                i.durationDay
            ],
            [
                B,
                2,
                2 * i.durationDay
            ],
            [
                A,
                1,
                i.durationWeek
            ],
            [
                z,
                1,
                i.durationMonth
            ],
            [
                z,
                3,
                3 * i.durationMonth
            ],
            [
                y,
                1,
                i.durationYear
            ]
        ];
        function F(G, H, I) {
            const J = Math.abs(H - G) / I, K = (0, g.default)(([, , L]) => L).right(E, J);
            if (C === E.length)
                return y.every((0, h.tickStep)(G / i.durationYear, H / i.durationYear, I));
            if (0 === C)
                return j.default.every(Math.max((0, h.tickStep)(G, H, I), 1));
            const [L, M] = E[J / E[C - 1][2] < E[C][2] / J ? C - 1 : C];
            return L.every(M);
        }
        return [
            function (I, J, K) {
                const L = J < I;
                L && ([M, N] = [
                    N,
                    M
                ]);
                const O = K && 'function' == typeof K.range ? K : F(M, N, K), P = O ? O.range(M, +N + 1) : [];
                return L ? P.reverse() : P;
            },
            F
        ];
    }
    const [_B, _C] = x(w.default, v.default, u.utcSunday, t.default, s.default, r.default), [_D, _E] = x(q.default, p.default, o.sunday, E.default, m.default, K.default);
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = (0, g.default)(function () {
        }, function (i, j) {
            i.setTime(+i + j);
        }, function (i, j) {
            return j - i;
        });
    h.every = function (i) {
        return i = Math.floor(i), isFinite(i) && i > 0 ? i > 1 ? (0, g.default)(function (j) {
            j.setTime(Math.floor(j / i) * i);
        }, function (j, k) {
            j.setTime(+j + k * i);
        }, function (j, k) {
            return (k - j) / i;
        }) : h : null;
    };
    var _i = h;
    h.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'sunday', function () {
        return _j;
    }), b(e.exports, 'monday', function () {
        return _k;
    }), b(e.exports, 'thursday', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....');
    function i(j) {
        return (0, g.default)(function (k) {
            k.setDate(k.getDate() - (k.getDay() + 7 - j) % 7), k.setHours(0, 0, 0, 0);
        }, function (k, l) {
            k.setDate(k.getDate() + 7 * l);
        }, function (k, l) {
            return (l - k - (l.getTimezoneOffset() - k.getTimezoneOffset()) * h.durationMinute) / h.durationWeek;
        });
    }
    var _j = i(0), _k = i(1), l = i(2), m = i(3), _n = i(4), o = i(5), p = i(6);
    _j.range, _k.range, l.range, m.range, _n.range, o.range, p.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = (0, g.default)(function (i) {
            i.setMonth(0, 1), i.setHours(0, 0, 0, 0);
        }, function (i, j) {
            i.setFullYear(i.getFullYear() + j);
        }, function (i, j) {
            return j.getFullYear() - i.getFullYear();
        }, function (i) {
            return i.getFullYear();
        });
    h.every = function (i) {
        return isFinite(i = Math.floor(i)) && i > 0 ? (0, g.default)(function (j) {
            j.setFullYear(Math.floor(j.getFullYear() / i) * i), j.setMonth(0, 1), j.setHours(0, 0, 0, 0);
        }, function (j, k) {
            j.setFullYear(j.getFullYear() + k * i);
        }) : null;
    };
    var _i = h;
    h.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setUTCSeconds(0, 0);
        }, function (j, k) {
            j.setTime(+j + k * h.durationMinute);
        }, function (j, k) {
            return (k - j) / h.durationMinute;
        }, function (j) {
            return j.getUTCMinutes();
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setUTCMinutes(0, 0, 0);
        }, function (j, k) {
            j.setTime(+j + k * h.durationHour);
        }, function (j, k) {
            return (k - j) / h.durationHour;
        }, function (j) {
            return j.getUTCHours();
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            j.setUTCHours(0, 0, 0, 0);
        }, function (j, k) {
            j.setUTCDate(j.getUTCDate() + k);
        }, function (j, k) {
            return (k - j) / h.durationDay;
        }, function (j) {
            return j.getUTCDate() - 1;
        }), _j = i;
    i.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'utcSunday', function () {
        return _j;
    }), b(e.exports, 'utcMonday', function () {
        return _k;
    }), b(e.exports, 'utcThursday', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....');
    function i(j) {
        return (0, g.default)(function (k) {
            k.setUTCDate(k.getUTCDate() - (k.getUTCDay() + 7 - j) % 7), k.setUTCHours(0, 0, 0, 0);
        }, function (k, l) {
            k.setUTCDate(k.getUTCDate() + 7 * l);
        }, function (k, l) {
            return (l - k) / h.durationWeek;
        });
    }
    var _j = i(0), _k = i(1), l = i(2), m = i(3), _n = i(4), o = i(5), p = i(6);
    _j.range, _k.range, l.range, m.range, _n.range, o.range, p.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = (0, d('.....').default)(function (h) {
            h.setUTCDate(1), h.setUTCHours(0, 0, 0, 0);
        }, function (h, i) {
            h.setUTCMonth(h.getUTCMonth() + i);
        }, function (h, i) {
            return i.getUTCMonth() - h.getUTCMonth() + 12 * (i.getUTCFullYear() - h.getUTCFullYear());
        }, function (h) {
            return h.getUTCMonth();
        }), _h = g;
    g.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = (0, g.default)(function (i) {
            i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
        }, function (i, j) {
            i.setUTCFullYear(i.getUTCFullYear() + j);
        }, function (i, j) {
            return j.getUTCFullYear() - i.getUTCFullYear();
        }, function (i) {
            return i.getUTCFullYear();
        });
    h.every = function (i) {
        return isFinite(i = Math.floor(i)) && i > 0 ? (0, g.default)(function (j) {
            j.setUTCFullYear(Math.floor(j.getUTCFullYear() / i) * i), j.setUTCMonth(0, 1), j.setUTCHours(0, 0, 0, 0);
        }, function (j, k) {
            j.setUTCFullYear(j.getUTCFullYear() + k * i);
        }) : null;
    };
    var _i = h;
    h.range;
}), d.register('.....', function (e, f) {
    b(e.exports, 'timeFormat', function () {
        return _h;
    }), b(e.exports, 'utcFormat', function () {
        return _i;
    });
    var g, _h, _i, j, k = d('.....');
    j = {
        dateTime: '%x, %X',
        date: '%-m/%-d/%Y',
        time: '%-I:%M:%S %p',
        periods: [
            'AM',
            'PM'
        ],
        days: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        shortDays: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
    }, g = (0, k.default)(j), _h = g.format, g.parse, _i = g.utcFormat, g.utcParse;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function m(n) {
        if (0 <= n.y && n.y < 100) {
            var o = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
            return o.setFullYear(n.y), o;
        }
        return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }
    function o(p) {
        if (0 <= p.y && p.y < 100) {
            var q = new Date(Date.UTC(-1, p.m, p.d, p.H, p.M, p.S, p.L));
            return q.setUTCFullYear(p.y), q;
        }
        return new Date(Date.UTC(p.y, p.m, p.d, p.H, p.M, p.S, p.L));
    }
    function q(r, s, t) {
        return {
            y: r,
            m: s,
            d: t,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        };
    }
    function _r(s) {
        var t = s.dateTime, u = s.date, v = s.time, w = s.periods, x = s.days, y = s.shortDays, z = s.months, A = s.shortMonths, B = _ab(w), C = _bb(w), D = _ab(x), E = _bb(x), F = _ab(_r), G = _bb(_r), H = _ab(z), I = _bb(z), J = _ab(A), K = _bb(A), L = {
                a: function (M) {
                    return _r[M.getDay()];
                },
                A: function (M) {
                    return x[M.getDay()];
                },
                b: function (M) {
                    return A[M.getMonth()];
                },
                B: function (M) {
                    return z[M.getMonth()];
                },
                c: null,
                d: _Qb,
                e: _Qb,
                f: _Vb,
                g: _hc,
                G: _jc,
                H: _Rb,
                I: _Sb,
                j: _Tb,
                L: _Ub,
                m: _Wb,
                M: _Xb,
                p: function (M) {
                    return w[+(M.getHours() >= 12)];
                },
                q: function (M) {
                    return 1 + ~~(M.getMonth() / 3);
                },
                Q: _Lc,
                s: _Mc,
                S: _Yb,
                u: _Zb,
                U: _ac,
                V: _dc,
                w: _ec,
                W: _fc,
                x: null,
                X: null,
                y: _gc,
                Y: _ic,
                Z: _lc,
                '%': _Kc
            }, M = {
                a: function (N) {
                    return _r[N.getUTCDay()];
                },
                A: function (N) {
                    return x[N.getUTCDay()];
                },
                b: function (N) {
                    return A[N.getUTCMonth()];
                },
                B: function (N) {
                    return z[N.getUTCMonth()];
                },
                c: null,
                d: _nc,
                e: _nc,
                f: _sc,
                g: _Fc,
                G: _Hc,
                H: _oc,
                I: _pc,
                j: _qc,
                L: _rc,
                m: _tc,
                M: _uc,
                p: function (N) {
                    return w[+(N.getUTCHours() >= 12)];
                },
                q: function (N) {
                    return 1 + ~~(N.getUTCMonth() / 3);
                },
                Q: _Lc,
                s: _Mc,
                S: _vc,
                u: _wc,
                U: _yc,
                V: _Bc,
                w: _Cc,
                W: _Dc,
                x: null,
                X: null,
                y: _Ec,
                Y: _Gc,
                Z: _Jc,
                '%': _Kc
            }, N = {
                a: function (O, P, Q) {
                    var R = F.exec(P.slice(Q));
                    return R ? (O.w = G.get(R[0].toLowerCase()), Q + R[0].length) : -1;
                },
                A: function (O, P, Q) {
                    var R = D.exec(P.slice(Q));
                    return R ? (O.w = E.get(R[0].toLowerCase()), Q + R[0].length) : -1;
                },
                b: function (O, P, Q) {
                    var R = J.exec(P.slice(Q));
                    return R ? (O.m = K.get(R[0].toLowerCase()), Q + R[0].length) : -1;
                },
                B: function (O, P, Q) {
                    var R = H.exec(P.slice(Q));
                    return R ? (O.m = I.get(R[0].toLowerCase()), Q + R[0].length) : -1;
                },
                c: function (O, P, Q) {
                    return _Q(O, t, P, Q);
                },
                d: _wb,
                e: _wb,
                f: _Ib,
                g: _ob,
                G: _mb,
                H: _Ab,
                I: _Ab,
                j: _yb,
                L: _Gb,
                m: _ub,
                M: _Cb,
                p: function (O, P, Q) {
                    var R = B.exec(P.slice(Q));
                    return R ? (O.p = C.get(R[0].toLowerCase()), Q + R[0].length) : -1;
                },
                q: _sb,
                Q: _Mb,
                s: _Ob,
                S: _Eb,
                u: _eb,
                U: _gb,
                V: _ib,
                w: _cb,
                W: _kb,
                x: function (O, P, Q) {
                    return _Q(O, u, P, Q);
                },
                X: function (O, P, Q) {
                    return _Q(O, v, P, Q);
                },
                y: _ob,
                Y: _mb,
                Z: _qb,
                '%': _Kb
            };
        function O(P, Q) {
            return function (R) {
                var S, T, U, V = [], W = -1, X = 0, Y = P.length;
                for (R instanceof Date || (R = new Date(+R)); ++W < Y;)
                    37 === P.charCodeAt(W) && (V.push(P.slice(X, W)), null != (T = _S[S = P.charAt(++W)]) ? S = P.charAt(++W) : T = 'e' === S ? ' ' : '0', (U = Q[S]) && (S = U(R, T)), V.push(S), X = W + 1);
                return V.push(P.slice(X, W)), V.join('');
            };
        }
        function P(Q, R) {
            return function (S) {
                var T, U, V = q(1900, void 0, 1);
                if (_Q(V, Q, S += '', 0) != S.length)
                    return null;
                if ('Q' in V)
                    return new Date(V.Q);
                if ('s' in V)
                    return new Date(1000 * V.s + ('L' in V ? V.L : 0));
                if (R && !('Z' in V) && (V.Z = 0), 'p' in V && (V.H = V.H % 12 + 12 * V.p), void 0 === V.m && (V.m = 'q' in V ? V.q : 0), 'V' in V) {
                    if (V.V < 1 || V.V > 53)
                        return null;
                    'w' in V || (V.w = 1), 'Z' in V ? (U = (T = o(q(V.y, 0, 1))).getUTCDay(), T = U > 4 || 0 === U ? k.utcMonday.ceil(T) : (0, k.utcMonday)(T), T = j.default.offset(T, 7 * (V.V - 1)), V.y = T.getUTCFullYear(), V.m = T.getUTCMonth(), V.d = T.getUTCDate() + (V.w + 6) % 7) : (U = (T = m(q(V.y, 0, 1))).getDay(), T = U > 4 || 0 === U ? h.monday.ceil(T) : (0, h.monday)(T), T = g.default.offset(T, 7 * (V.V - 1)), V.y = T.getFullYear(), V.m = T.getMonth(), V.d = T.getDate() + (V.w + 6) % 7);
                } else
                    ('W' in V || 'U' in V) && ('w' in V || (V.w = 'u' in V ? V.u % 7 : 'W' in V ? 1 : 0), U = 'Z' in V ? o(q(V.y, 0, 1)).getUTCDay() : m(q(V.y, 0, 1)).getDay(), V.m = 0, V.d = 'W' in V ? (V.w + 6) % 7 + 7 * V.W - (U + 5) % 7 : V.w + 7 * V.U - (U + 6) % 7);
                return 'Z' in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, o(V)) : m(V);
            };
        }
        function _Q(R, S, T, U) {
            for (var V, W, X = 0, Y = S.length, Z = T.length; X < Y;) {
                if (U >= Z)
                    return -1;
                if (37 === (V = S.charCodeAt(X++))) {
                    if (V = S.charAt(X++), !(W = N[V in _S ? S.charAt(X++) : V]) || (U = W(R, T, U)) < 0)
                        return -1;
                } else if (V != T.charCodeAt(U++))
                    return -1;
            }
            return U;
        }
        return L.x = O(u, L), L.X = O(v, L), L.c = O(t, L), M.x = O(u, M), M.X = O(v, M), M.c = O(t, M), {
            format: function (W) {
                var X = O(W += '', L);
                return X.toString = function () {
                    return W;
                }, X;
            },
            parse: function (W) {
                var X = P(W += '', !1);
                return X.toString = function () {
                    return W;
                }, X;
            },
            utcFormat: function (W) {
                var X = O(W += '', M);
                return X.toString = function () {
                    return W;
                }, X;
            },
            utcParse: function (W) {
                var X = P(W += '', !0);
                return X.toString = function () {
                    return W;
                }, X;
            }
        };
    }
    var _S = {
            '-': '',
            _: ' ',
            0: '0'
        }, T = /^\s*\d+/, U = /^%/, V = /[\\^$*+?|[\]().{}]/g;
    function W(X, Y, Z) {
        var $ = X < 0 ? '-' : '', ab = ($ ? -X : X) + '', bb = ab.length;
        return $ + (bb < Z ? new Array(Z - bb + 1).join(Y) + ab : ab);
    }
    function $(ab) {
        return ab.replace(V, '\\$&');
    }
    function _ab(bb) {
        return new RegExp('^(?:' + bb.map($).join('|') + ')', 'i');
    }
    function _bb(cb) {
        return new Map(cb.map((db, eb) => [
            db.toLowerCase(),
            eb
        ]));
    }
    function _cb(db, eb, fb) {
        var gb = T.exec(eb.slice(fb, fb + 1));
        return gb ? (db.w = +gb[0], fb + gb[0].length) : -1;
    }
    function _eb(fb, gb, hb) {
        var ib = T.exec(gb.slice(hb, hb + 1));
        return ib ? (fb.u = +ib[0], hb + ib[0].length) : -1;
    }
    function _gb(hb, ib, jb) {
        var kb = T.exec(ib.slice(jb, jb + 2));
        return kb ? (hb.U = +kb[0], jb + kb[0].length) : -1;
    }
    function _ib(jb, kb, lb) {
        var mb = T.exec(kb.slice(lb, lb + 2));
        return mb ? (jb.V = +mb[0], lb + mb[0].length) : -1;
    }
    function _kb(lb, mb, nb) {
        var ob = T.exec(mb.slice(nb, nb + 2));
        return ob ? (lb.W = +ob[0], nb + ob[0].length) : -1;
    }
    function _mb(nb, ob, pb) {
        var qb = T.exec(ob.slice(pb, pb + 4));
        return qb ? (nb.y = +qb[0], pb + qb[0].length) : -1;
    }
    function _ob(pb, qb, rb) {
        var sb = T.exec(qb.slice(rb, rb + 2));
        return sb ? (pb.y = +sb[0] + (+sb[0] > 68 ? 1900 : 2000), rb + sb[0].length) : -1;
    }
    function _qb(rb, sb, tb) {
        var ub = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(sb.slice(tb, tb + 6));
        return ub ? (rb.Z = ub[1] ? 0 : -(ub[2] + (ub[3] || '00')), tb + ub[0].length) : -1;
    }
    function _sb(tb, ub, vb) {
        var wb = T.exec(ub.slice(vb, vb + 1));
        return wb ? (tb.q = 3 * wb[0] - 3, vb + wb[0].length) : -1;
    }
    function _ub(vb, wb, xb) {
        var yb = T.exec(wb.slice(xb, xb + 2));
        return yb ? (vb.m = yb[0] - 1, xb + yb[0].length) : -1;
    }
    function _wb(xb, yb, zb) {
        var Ab = T.exec(yb.slice(zb, zb + 2));
        return Ab ? (xb.d = +Ab[0], zb + Ab[0].length) : -1;
    }
    function _yb(zb, Ab, Bb) {
        var Cb = T.exec(Ab.slice(Bb, Bb + 3));
        return Cb ? (zb.m = 0, zb.d = +Cb[0], Bb + Cb[0].length) : -1;
    }
    function _Ab(Bb, Cb, Db) {
        var Eb = T.exec(Cb.slice(Db, Db + 2));
        return Eb ? (Bb.H = +Eb[0], Db + Eb[0].length) : -1;
    }
    function _Cb(Db, Eb, Fb) {
        var Gb = T.exec(Eb.slice(Fb, Fb + 2));
        return Gb ? (Db.M = +Gb[0], Fb + Gb[0].length) : -1;
    }
    function _Eb(Fb, Gb, Hb) {
        var Ib = T.exec(Gb.slice(Hb, Hb + 2));
        return Ib ? (Fb.S = +Ib[0], Hb + Ib[0].length) : -1;
    }
    function _Gb(Hb, Ib, Jb) {
        var Kb = T.exec(Ib.slice(Jb, Jb + 3));
        return Kb ? (Hb.L = +Kb[0], Jb + Kb[0].length) : -1;
    }
    function _Ib(Jb, Kb, Lb) {
        var Mb = T.exec(Kb.slice(Lb, Lb + 6));
        return Mb ? (Jb.L = Math.floor(Mb[0] / 1000), Lb + Mb[0].length) : -1;
    }
    function _Kb(Lb, Mb, Nb) {
        var Ob = U.exec(Mb.slice(Nb, Nb + 1));
        return Ob ? Nb + Ob[0].length : -1;
    }
    function _Mb(Nb, Ob, Pb) {
        var Qb = T.exec(Ob.slice(Pb));
        return Qb ? (Nb.Q = +Qb[0], Pb + Qb[0].length) : -1;
    }
    function _Ob(Pb, Qb, Rb) {
        var Sb = T.exec(Qb.slice(Rb));
        return Sb ? (Pb.s = +Sb[0], Rb + Sb[0].length) : -1;
    }
    function _Qb(Rb, Sb) {
        return W(Rb.getDate(), Sb, 2);
    }
    function _Rb(Sb, Tb) {
        return W(Sb.getHours(), Tb, 2);
    }
    function _Sb(Tb, Ub) {
        return W(Tb.getHours() % 12 || 12, Ub, 2);
    }
    function _Tb(Ub, Vb) {
        return W(1 + ab.default.count((0, X.default)(Ub), Ub), Vb, 3);
    }
    function _Ub(Vb, Wb) {
        return W(Vb.getMilliseconds(), Wb, 3);
    }
    function _Vb(Wb, Xb) {
        return _Ub(Wb, Xb) + '000';
    }
    function _Wb(Xb, Yb) {
        return W(Xb.getMonth() + 1, Yb, 2);
    }
    function _Xb(Yb, Zb) {
        return W(Yb.getMinutes(), Zb, 2);
    }
    function _Yb(Zb, $b) {
        return W(Zb.getSeconds(), $b, 2);
    }
    function _Zb($b) {
        var ac = $b.getDay();
        return 0 === ac ? 7 : ac;
    }
    function _ac(bc, cc) {
        return W(bb.sunday.count((0, X.default)(bc) - 1, bc), cc, 2);
    }
    function bc(cc) {
        var dc = cc.getDay();
        return dc >= 4 || 0 === dc ? (0, bb.thursday)(cc) : bb.thursday.ceil(cc);
    }
    function _dc(ec, fc) {
        return ec = bc(ec), W(bb.thursday.count((0, X.default)(ec), ec) + (4 === (0, X.default)(ec).getDay()), fc, 2);
    }
    function _ec(fc) {
        return fc.getDay();
    }
    function _fc(gc, hc) {
        return W(bb.monday.count((0, X.default)(gc) - 1, gc), hc, 2);
    }
    function _gc(hc, ic) {
        return W(hc.getFullYear() % 100, ic, 2);
    }
    function _hc(ic, jc) {
        return W((ic = bc(ic)).getFullYear() % 100, jc, 2);
    }
    function _ic(jc, kc) {
        return W(jc.getFullYear() % 10000, kc, 4);
    }
    function _jc(kc, lc) {
        var mc = kc.getDay();
        return W((kc = mc >= 4 || 0 === mc ? (0, bb.thursday)(kc) : bb.thursday.ceil(kc)).getFullYear() % 10000, lc, 4);
    }
    function _lc(mc) {
        var nc = mc.getTimezoneOffset();
        return (nc > 0 ? '-' : (nc *= -1, '+')) + W(nc / 60 | 0, '0', 2) + W(nc % 60, '0', 2);
    }
    function _nc(oc, pc) {
        return W(oc.getUTCDate(), pc, 2);
    }
    function _oc(pc, qc) {
        return W(pc.getUTCHours(), qc, 2);
    }
    function _pc(qc, rc) {
        return W(qc.getUTCHours() % 12 || 12, rc, 2);
    }
    function _qc(rc, sc) {
        return W(1 + Y.default.count((0, x.default)(rc), rc), sc, 3);
    }
    function _rc(sc, tc) {
        return W(sc.getUTCMilliseconds(), tc, 3);
    }
    function _sc(tc, uc) {
        return _rc(tc, uc) + '000';
    }
    function _tc(uc, vc) {
        return W(uc.getUTCMonth() + 1, vc, 2);
    }
    function _uc(vc, wc) {
        return W(vc.getUTCMinutes(), wc, 2);
    }
    function _vc(wc, xc) {
        return W(wc.getUTCSeconds(), xc, 2);
    }
    function _wc(xc) {
        var yc = xc.getUTCDay();
        return 0 === yc ? 7 : yc;
    }
    function _yc(zc, Ac) {
        return W(Z.utcSunday.count((0, x.default)(zc) - 1, zc), Ac, 2);
    }
    function zc(Ac) {
        var Bc = Ac.getUTCDay();
        return Bc >= 4 || 0 === Bc ? (0, Z.utcThursday)(Ac) : Z.utcThursday.ceil(Ac);
    }
    function _Bc(Cc, Dc) {
        return Cc = zc(Cc), W(Z.utcThursday.count((0, x.default)(Cc), Cc) + (4 === (0, x.default)(Cc).getUTCDay()), Dc, 2);
    }
    function _Cc(Dc) {
        return Dc.getUTCDay();
    }
    function _Dc(Ec, Fc) {
        return W(Z.utcMonday.count((0, x.default)(Ec) - 1, Ec), Fc, 2);
    }
    function _Ec(Fc, Gc) {
        return W(Fc.getUTCFullYear() % 100, Gc, 2);
    }
    function _Fc(Gc, Hc) {
        return W((Gc = zc(Gc)).getUTCFullYear() % 100, Hc, 2);
    }
    function _Gc(Hc, Ic) {
        return W(Hc.getUTCFullYear() % 10000, Ic, 4);
    }
    function _Hc(Ic, Jc) {
        var Kc = Ic.getUTCDay();
        return W((Ic = Kc >= 4 || 0 === Kc ? (0, Z.utcThursday)(Ic) : Z.utcThursday.ceil(Ic)).getUTCFullYear() % 10000, Jc, 4);
    }
    function _Jc() {
        return '+0000';
    }
    function _Kc() {
        return '%';
    }
    function _Lc(Mc) {
        return +Mc;
    }
    function _Mc(Nc) {
        return Math.floor(+Nc / 1000);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function _r() {
        return q.initRange.apply((0, p.calendar)(l.utcTicks, l.utcTickInterval, n.default, j.default, m.utcSunday, g.default, h.default, i.default, k.default, o.utcFormat).domain([
            Date.UTC(2000, 0, 1),
            Date.UTC(2000, 0, 2)
        ]), arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'copy', function () {
        return _y;
    }), b(e.exports, 'default', function () {
        return _z;
    }), b(e.exports, 'sequentialLog', function () {
        return _B;
    }), b(e.exports, 'sequentialSymlog', function () {
        return _D;
    }), b(e.exports, 'sequentialPow', function () {
        return _F;
    }), b(e.exports, 'sequentialSqrt', function () {
        return _H;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    function o() {
        var p, q, r, s, t, u = 0, v = 1, w = i.identity, x = !1;
        function y(z) {
            return null == z || isNaN(z = +z) ? t : w(0 === r ? 0.5 : (z = (s(z) - p) * r, x ? Math.max(0, Math.min(1, z)) : z));
        }
        function z(A) {
            return function (B) {
                var C, D;
                return arguments.length ? ([E, F] = B, w = A(E, F), y) : [
                    w(0),
                    w(1)
                ];
            };
        }
        return y.domain = function (A) {
            return arguments.length ? ([B, C] = A, p = s(B = +B), q = s(C = +C), r = p === q ? 0 : 1 / (q - p), y) : [
                B,
                C
            ];
        }, y.clamp = function (A) {
            return arguments.length ? (x = !!A, y) : x;
        }, y.interpolator = function (A) {
            return arguments.length ? (w = A, y) : w;
        }, y.range = z(g.default), y.rangeRound = z(h.default), y.unknown = function (A) {
            return arguments.length ? (t = A, y) : t;
        }, function (A) {
            return s = A, p = A(u), q = A(v), r = p === q ? 0 : 1 / (q - p), y;
        };
    }
    function _y(z, A) {
        return A.domain(z.domain()).interpolator(z.interpolator()).clamp(z.clamp()).unknown(z.unknown());
    }
    function _z() {
        var A = (0, u.linearish)(o()(i.identity));
        return A.copy = function () {
            return _y(A, _z());
        }, t.initInterpolator.apply(A, arguments);
    }
    function _B() {
        var C = (0, v.loggish)(o()).domain([
            1,
            10
        ]);
        return C.copy = function () {
            return _y(C, _B()).base(C.base());
        }, t.initInterpolator.apply(C, arguments);
    }
    function _D() {
        var E = (0, w.symlogish)(o());
        return E.copy = function () {
            return _y(E, _D()).constant(E.constant());
        }, t.initInterpolator.apply(E, arguments);
    }
    function _F() {
        var G = (0, x.powish)(o());
        return G.copy = function () {
            return _y(G, _F()).exponent(G.exponent());
        }, t.initInterpolator.apply(G, arguments);
    }
    function _H() {
        return _F.apply(null, arguments).exponent(0.5);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function _l() {
        var m = [], n = j.identity;
        function o(p) {
            if (null != p && !isNaN(p = +p))
                return n(((0, h.default)(m, p, 1) - 1) / (m.length - 1));
        }
        return o.domain = function (p) {
            if (!arguments.length)
                return m.slice();
            m = [];
            for (let q of p)
                null == q || isNaN(q = +q) || m.push(q);
            return m.sort(g.default), q;
        }, o.interpolator = function (p) {
            return arguments.length ? (n = p, o) : n;
        }, o.range = function () {
            return m.map((p, q) => n(q / (m.length - 1)));
        }, o.quantiles = function (p) {
            return Array.from({ length: p + 1 }, (q, r) => (0, i.default)(m, r / p));
        }, o.copy = function () {
            return _l(n).domain(m);
        }, k.initInterpolator.apply(o, arguments);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _C;
    }), b(e.exports, 'divergingLog', function () {
        return _D;
    }), b(e.exports, 'divergingSymlog', function () {
        return _I;
    }), b(e.exports, 'divergingPow', function () {
        return _K;
    }), b(e.exports, 'divergingSqrt', function () {
        return _M;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....');
    function q() {
        var r, s, t, u, v, w, x, y = 0, z = 0.5, A = 1, B = 1, _C = j.identity, _D = !1;
        function E(F) {
            return isNaN(F = +F) ? x : (F = 0.5 + ((F = +w(F)) - s) * (q * F < q * s ? u : v), _C(_D ? Math.max(0, Math.min(1, F)) : F));
        }
        function F(G) {
            return function (H) {
                var I, J, K;
                return arguments.length ? ([L, M, N] = H, _C = (0, i.default)(G, [
                    L,
                    M,
                    N
                ]), E) : [
                    _C(0),
                    _C(0.5),
                    _C(1)
                ];
            };
        }
        return E.domain = function (G) {
            return arguments.length ? ([H, I, J] = G, r = w(H = +H), s = w(I = +I), t = w(J = +J), u = r === s ? 0 : 0.5 / (s - r), v = s === t ? 0 : 0.5 / (t - s), q = s < r ? -1 : 1, E) : [
                H,
                I,
                J
            ];
        }, E.clamp = function (G) {
            return arguments.length ? (_D = !!G, E) : _D;
        }, E.interpolator = function (G) {
            return arguments.length ? (_C = G, E) : _C;
        }, E.range = F(g.default), E.rangeRound = F(h.default), E.unknown = function (G) {
            return arguments.length ? (x = G, E) : x;
        }, function (G) {
            return w = G, r = G(y), s = G(z), t = G(A), u = r === s ? 0 : 0.5 / (s - r), v = s === t ? 0 : 0.5 / (t - s), q = s < r ? -1 : 1, E;
        };
    }
    function E() {
        var F = (0, w.linearish)(q()(j.identity));
        return F.copy = function () {
            return (0, y.copy)(F, E());
        }, v.initInterpolator.apply(F, arguments);
    }
    function G() {
        var H = (0, x.loggish)(q()).domain([
            0.1,
            1,
            10
        ]);
        return H.copy = function () {
            return (0, y.copy)(H, G()).base(H.base());
        }, v.initInterpolator.apply(H, arguments);
    }
    function _I() {
        var J = (0, z.symlogish)(q());
        return J.copy = function () {
            return (0, y.copy)(J, _I()).constant(J.constant());
        }, v.initInterpolator.apply(J, arguments);
    }
    function _K() {
        var L = (0, A.powish)(q());
        return L.copy = function () {
            return (0, y.copy)(L, _K()).exponent(L.exponent());
        }, v.initInterpolator.apply(L, arguments);
    }
    function _M() {
        return _K.apply(null, arguments).exponent(0.5);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        void 0 === j && (j = i, i = g.default);
        for (var k = 0, l = j.length - 1, m = j[0], n = new Array(l < 0 ? 0 : l); k < l;)
            n[k] = i(_h, _h = j[++k]);
        return function (o) {
            var p = Math.max(0, Math.min(l - 1, Math.floor(o *= l)));
            return n[p](o - p);
        };
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l, m) {
        return l[m];
    }
    function l(m) {
        const n = [];
        return n.key = m, n;
    }
    function _n() {
        var o = (0, h.default)([]), p = j.default, q = i.default, r = k;
        function s(t) {
            var u, v, w = Array.from(o.apply(this, arguments), l), x = k.length, y = -1;
            for (const z of t)
                for (u = 0, ++y; u < s; ++u)
                    (k[u][y] = [
                        0,
                        +r(z, k[u].key, y, t)
                    ]).data = z;
            for (u = 0, v = (0, g.default)(p(k)); u < s; ++u)
                k[v[u]].index = u;
            return q(k, v), k;
        }
        return s.keys = function (z) {
            return arguments.length ? (z = 'function' == typeof z ? z : (0, h.default)(Array.from(z)), s) : z;
        }, s.value = function (z) {
            return arguments.length ? (r = 'function' == typeof z ? z : (0, h.default)(+z), s) : r;
        }, s.order = function (z) {
            return arguments.length ? (p = null == z ? v.default : 'function' == typeof z ? z : (0, h.default)(Array.from(z)), s) : p;
        }, s.offset = function (z) {
            return arguments.length ? (q = null == z ? u.default : z, s) : q;
        }, s;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    Array.prototype.slice;
    function g(h) {
        return 'object' == typeof h && 'length' in h ? h : Array.from(h);
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return function () {
            return h;
        };
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        if ((_l = h.length) > 1)
            for (var j, k, _l, m = 1, n = h[i[0]], o = n.length; m < _l; ++m)
                for (g = n, n = h[i[m]], j = 0; j < o; ++j)
                    n[j][1] += n[j][0] = isNaN(g[j][1]) ? g[j][0] : g[j][1];
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        for (var i = h.length, j = new Array(i); --i >= 0;)
            j[i] = i;
        return j;
    }
    i(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        if ((d = i.length) > 0) {
            for (var k, l, m, n = 0, o = i[0].length; n < o; ++n) {
                for (_h = k = 0; k < l; ++k)
                    _h += i[k][n][1] || 0;
                if (_h)
                    for (k = 0; k < l; ++k)
                        i[k][n][1] /= _h;
            }
            (0, g.default)(i, j);
        }
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        if ((f = i.length) > 0) {
            for (var k, l = 0, m = i[j[0]], n = _h.length; l < n; ++l) {
                for (var o = 0, p = 0; o < k; ++o)
                    p += i[o][l][1] || 0;
                _h[l][1] += _h[l][0] = -p / 2;
            }
            (0, g.default)(i, j);
        }
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        if ((_h = i.length) > 0 && (d = (f = i[j[0]]).length) > 0) {
            for (var k, l, m, n = 0, o = 1; o < l; ++o) {
                for (var p = 0, q = 0, r = 0; p < _h; ++p) {
                    for (var s = i[j[p]], t = s[o][1] || 0, u = (t - (s[o - 1][1] || 0)) / 2, v = 0; v < p; ++v) {
                        var w = i[j[v]];
                        u += (w[o][1] || 0) - (w[o - 1][1] || 0);
                    }
                    q += t, r += u * t;
                }
                k[o - 1][1] += k[o - 1][0] = n, q && (n -= r / q);
            }
            k[o - 1][1] += k[o - 1][0] = n, (0, g.default)(i, j);
        }
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'Legend', function () {
        return _J;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (n) {
            return typeof n;
        } : function (n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }
    function m(n, o) {
        var p = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(n);
            o && (q = q.filter(function (r) {
                return Object.getOwnPropertyDescriptor(n, r).enumerable;
            })), p.push.apply(p, q);
        }
        return p;
    }
    function p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? m(Object(s), !0).forEach(function (t) {
                _s(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : m(Object(s)).forEach(function (t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }
    function _s(t, u, v) {
        return u in t ? Object.defineProperty(t, u, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[u] = v, t;
    }
    function t(u, v) {
        if (!(u instanceof v))
            throw new TypeError('Cannot call a class as a function');
    }
    function u(v, w) {
        for (var x = 0; x < w.length; x++) {
            var y = w[x];
            y.enumerable = y.enumerable || !1, y.configurable = !0, 'value' in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
        }
    }
    function x(y, z) {
        return x = Object.setPrototypeOf || function (A, B) {
            return A.__proto__ = B, A;
        }, x(y, z);
    }
    function y(z) {
        var A = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (z) {
                return !1;
            }
        }();
        return function () {
            var B, C = _B(z);
            if (A) {
                var D = _B(this).constructor;
                B = Reflect.construct(C, arguments, D);
            } else
                B = C.apply(this, arguments);
            return _A(this, B);
        };
    }
    function _A(B, C) {
        return !C || 'object' !== l(C) && 'function' != typeof C ? function (D) {
            if (void 0 === D)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return D;
        }(B) : C;
    }
    function _B(C) {
        return _B = Object.setPrototypeOf ? Object.getPrototypeOf : function (D) {
            return D.__proto__ || Object.getPrototypeOf(D);
        }, _B(C);
    }
    function C(D, E) {
        if (null == D)
            return {};
        var F, G, H = function (I, J) {
                if (null == I)
                    return {};
                var K, L, M = {}, N = Object.keys(I);
                for (L = 0; L < N.length; L++)
                    K = N[L], J.indexOf(K) >= 0 || (M[K] = I[K]);
                return M;
            }(D, E);
        if (Object.getOwnPropertySymbols) {
            var I = Object.getOwnPropertySymbols(D);
            for (G = 0; G < I.length; G++)
                F = I[G], E.indexOf(F) >= 0 || Object.prototype.propertyIsEnumerable.call(D, F) && (H[F] = D[F]);
        }
        return H;
    }
    function H(I) {
        return I.value;
    }
    function I(J, K) {
        return !0 === J ? a(h)(K, H) : a(I)(J) ? a(h)(K, J) : K;
    }
    var _J = function (K) {
        !function (L, M) {
            if ('function' != typeof M && null !== M)
                throw new TypeError('Super expression must either be null or a function');
            L.prototype = Object.create(M && M.prototype, {
                constructor: {
                    value: L,
                    writable: !0,
                    configurable: !0
                }
            }), M && x(L, M);
        }(l, K);
        var L, M, N, O = y(l);
        function P() {
            var Q;
            t(this, P);
            for (var R = arguments.length, S = new Array(R), T = 0; T < R; T++)
                S[T] = arguments[T];
            return (Q = O.call.apply(O, [this].concat(S))).wrapperNode = void 0, Q.state = {
                boxWidth: -1,
                boxHeight: -1
            }, Q;
        }
        return S = P, N = [{
                key: 'getWithHeight',
                value: function (U, V) {
                    var W = U.props.layout;
                    return 'vertical' === W && (0, k.isNumber)(U.props.height) ? { height: U.props.height } : 'horizontal' === W ? { width: U.props.width || V } : null;
                }
            }], (T = [
            {
                key: 'componentDidMount',
                value: function () {
                    this.updateBBox();
                }
            },
            {
                key: 'componentDidUpdate',
                value: function () {
                    this.updateBBox();
                }
            },
            {
                key: 'getBBox',
                value: function () {
                    return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null;
                }
            },
            {
                key: 'getBBoxSnapshot',
                value: function () {
                    var U = this.state, V = U.boxWidth, W = U.boxHeight;
                    return V >= 0 && W >= 0 ? {
                        width: V,
                        height: W
                    } : null;
                }
            },
            {
                key: 'getDefaultPosition',
                value: function (U) {
                    var V, W, X = this.props, Y = X.layout, Z = X.align, $ = X.verticalAlign, ab = X.margin, bb = X.chartWidth, cb = X.chartHeight;
                    return U && (void 0 !== U.left && null !== U.left || void 0 !== U.right && null !== U.right) || (V = 'center' === Z && 'vertical' === Y ? { left: ((bb || 0) - (this.getBBoxSnapshot() || { width: 0 }).width) / 2 } : 'right' === Z ? { right: ab && ab.right || 0 } : { left: ab && ab.left || 0 }), U && (void 0 !== U.top && null !== U.top || void 0 !== U.bottom && null !== U.bottom) || (W = 'middle' === $ ? { top: ((cb || 0) - (this.getBBoxSnapshot() || { height: 0 }).height) / 2 } : 'bottom' === $ ? { bottom: ab && ab.bottom || 0 } : { top: ab && ab.top || 0 }), p(p({}, V), W);
                }
            },
            {
                key: 'updateBBox',
                value: function () {
                    var U = this.state, V = U.boxWidth, W = U.boxHeight, X = this.props.onBBoxUpdate;
                    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var Y = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(Y.width - V) > 1 || Math.abs(Y.height - W) > 1) && this.setState({
                            boxWidth: Y.width,
                            boxHeight: Y.height
                        }, function () {
                            X && X(Y);
                        });
                    } else
                        -1 === V && -1 === W || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, function () {
                            X && X(null);
                        });
                }
            },
            {
                key: 'render',
                value: function () {
                    var U = this, V = this.props, W = V.content, X = V.width, Y = V.height, Z = V.wrapperStyle, $ = V.payloadUniqBy, ab = V.payload, bb = p(p({
                            position: 'absolute',
                            width: X || 'auto',
                            height: Y || 'auto'
                        }, this.getDefaultPosition(Z)), Z);
                    return Q(i).createElement('div', {
                        className: 'recharts-legend-wrapper',
                        style: bb,
                        ref: function (cb) {
                            U.wrapperNode = cb;
                        }
                    }, function (cb, db) {
                        if (Q(i).isValidElement(cb))
                            return Q(i).cloneElement(cb, db);
                        if (Q(I)(cb))
                            return Q(i).createElement(cb, db);
                        db.ref;
                        var eb = C(db, ['ref']);
                        return Q(i).createElement(j.DefaultLegendContent, eb);
                    }(W, p(p({}, this.props), {}, { payload: I($, ab) })));
                }
            }
        ]) && u(S.prototype, T), N && u(S, N), P;
    }(i.PureComponent);
    _J.displayName = 'Legend', _J.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j) {
        return i && i.length ? h(i, g(j, 2)) : [];
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    e.exports = function (m, n, o) {
        var p = -1, q = h, r = m.length, s = !0, t = [], u = t;
        if (o)
            s = !1, q = i;
        else if (r >= 200) {
            var v = n ? null : k(m);
            if (v)
                return l(v);
            s = !1, q = j, u = new g();
        } else
            u = n ? [] : t;
        t:
            for (; ++p < r;) {
                var w = m[p], x = n ? n(w) : w;
                if (w = o || 0 !== w ? w : 0, s && x == x) {
                    for (var y = u.length; y--;)
                        if (u[y] === x)
                            continue t;
                    n && u.push(x), t.push(w);
                } else
                    q(u, x, o) || (u !== t && u.push(x), t.push(w));
            }
        return t;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        return !!(null == h ? 0 : h.length) && g(h, i, 0) > -1;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j, k, l) {
        return k == k ? i(j, k, l) : g(j, h, l);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h, i, j) {
        for (var k = g.length, l = i + (j ? 1 : -1); j ? l-- : ++l < k;)
            if (h(g[l], l, g))
                return l;
        return -1;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return g != g;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h, i) {
        for (var j = i - 1, k = g.length; ++j < k;)
            if (g[j] === h)
                return j;
        return -1;
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h, i) {
        for (var j = -1, k = null == g ? 0 : g.length; ++j < k;)
            if (i(h, g[j]))
                return !0;
        return !1;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = g && 1 / i(new g([
            ,
            -0
        ]))[1] == 1 / 0 ? function (k) {
            return new g(k);
        } : h;
    e.exports = j;
}), d.register('.....', function (e, f) {
    e.exports = function () {
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'DefaultLegendContent', function () {
        return _B;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (n) {
            return typeof n;
        } : function (n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }
    function m() {
        return m = Object.assign || function (n) {
            for (var o = 1; o < arguments.length; o++) {
                var p = arguments[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (n[q] = p[q]);
            }
            return n;
        }, m.apply(this, arguments);
    }
    function n(o, p) {
        var q = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(o);
            p && (r = r.filter(function (s) {
                return Object.getOwnPropertyDescriptor(o, s).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }
    function q(r, s, t) {
        return s in r ? Object.defineProperty(r, s, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[s] = t, r;
    }
    function r(s, t) {
        if (!(s instanceof t))
            throw new TypeError('Cannot call a class as a function');
    }
    function s(t, u) {
        for (var v = 0; v < u.length; v++) {
            var w = u[v];
            w.enumerable = w.enumerable || !1, w.configurable = !0, 'value' in w && (w.writable = !0), Object.defineProperty(t, w.key, w);
        }
    }
    function v(w, x) {
        return v = Object.setPrototypeOf || function (y, z) {
            return y.__proto__ = z, y;
        }, v(w, x);
    }
    function w(x) {
        var y = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (x) {
                return !1;
            }
        }();
        return function () {
            var z, A = _z(x);
            if (y) {
                var B = _z(this).constructor;
                z = Reflect.construct(A, arguments, B);
            } else
                z = A.apply(this, arguments);
            return _y(this, z);
        };
    }
    function _y(z, A) {
        return !A || 'object' !== l(A) && 'function' != typeof A ? function (B) {
            if (void 0 === B)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return B;
        }(z) : A;
    }
    function _z(A) {
        return _z = Object.setPrototypeOf ? Object.getPrototypeOf : function (B) {
            return B.__proto__ || Object.getPrototypeOf(B);
        }, _z(A);
    }
    var A = 32, _B = function (C) {
            !function (D, E) {
                if ('function' != typeof E && null !== E)
                    throw new TypeError('Super expression must either be null or a function');
                D.prototype = Object.create(E && E.prototype, {
                    constructor: {
                        value: D,
                        writable: !0,
                        configurable: !0
                    }
                }), E && v(D, E);
            }(_y, C);
            var D, E, F, G = w(_y);
            function H() {
                return r(this, H), G.apply(this, arguments);
            }
            return D = H, E = [
                {
                    key: 'renderIcon',
                    value: function (I) {
                        var J = this.props.inactiveColor, K = 16, L = 5.333333333333333, M = 10.666666666666666, N = I.inactive ? J : I.color;
                        if ('plainline' === I.type)
                            return a(g).createElement('line', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: N,
                                strokeDasharray: I.payload.strokeDasharray,
                                x1: 0,
                                y1: K,
                                x2: A,
                                y2: K,
                                className: 'recharts-legend-icon'
                            });
                        if ('line' === I.type)
                            return a(g).createElement('path', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: N,
                                d: 'M0,'.concat(K, 'h').concat(M, '\n            A').concat(L, ',').concat(L, ',0,1,1,').concat(2 * M, ',').concat(K, '\n            H').concat(A, 'M').concat(2 * M, ',').concat(K, '\n            A').concat(L, ',').concat(L, ',0,1,1,').concat(M, ',').concat(K),
                                className: 'recharts-legend-icon'
                            });
                        if ('rect' === I.type)
                            return a(g).createElement('path', {
                                stroke: 'none',
                                fill: N,
                                d: 'M0,'.concat(4, 'h').concat(A, 'v').concat(24, 'h').concat(-32, 'z'),
                                className: 'recharts-legend-icon'
                            });
                        if (a(g).isValidElement(I.legendIcon)) {
                            var O = function (P) {
                                for (var Q = 1; Q < arguments.length; Q++) {
                                    var R = null != arguments[Q] ? arguments[Q] : {};
                                    Q % 2 ? n(Object(R), !0).forEach(function (S) {
                                        q(P, S, R[S]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(R)) : n(Object(R)).forEach(function (S) {
                                        Object.defineProperty(P, S, Object.getOwnPropertyDescriptor(R, S));
                                    });
                                }
                                return P;
                            }({}, I);
                            return delete O.legendIcon, a(g).cloneElement(I.legendIcon, O);
                        }
                        return a(g).createElement(j.Symbols, {
                            fill: N,
                            cx: K,
                            cy: K,
                            size: A,
                            sizeType: 'diameter',
                            type: I.type
                        });
                    }
                },
                {
                    key: 'renderItems',
                    value: function () {
                        var I = this, J = this.props, K = J.payload, L = J.iconSize, M = J.layout, N = J.formatter, O = J.inactiveColor, P = {
                                x: 0,
                                y: 0,
                                width: A,
                                height: A
                            }, Q = {
                                display: 'horizontal' === M ? 'inline-block' : 'block',
                                marginRight: 10
                            }, R = {
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                marginRight: 4
                            };
                        return K.map(function (S, T) {
                            var U, V = S.formatter || N, W = a(h)((q(U = { 'recharts-legend-item': !0 }, 'legend-item-'.concat(T), !0), q(U, 'inactive', S.inactive), U));
                            if ('none' === S.type)
                                return null;
                            var X = S.inactive ? O : S.color;
                            return a(g).createElement('li', m({
                                className: W,
                                style: Q,
                                key: 'legend-item-'.concat(T)
                            }, (0, k.adaptEventsOfChild)(I.props, S, T)), a(g).createElement(i.Surface, {
                                width: L,
                                height: L,
                                viewBox: P,
                                style: R
                            }, I.renderIcon(S)), a(g).createElement('span', {
                                className: 'recharts-legend-item-text',
                                style: { color: X }
                            }, V ? V(S.value, S, T) : S.value));
                        });
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var I = this.props, J = I.payload, K = I.layout, L = I.align;
                        if (!J || !J.length)
                            return null;
                        var M = {
                            padding: 0,
                            margin: 0,
                            textAlign: 'horizontal' === K ? L : 'left'
                        };
                        return a(g).createElement('ul', {
                            className: 'recharts-default-legend',
                            style: M
                        }, this.renderItems());
                    }
                }
            ], E && s(D.prototype, E), F && s(D, F), H;
        }(g.PureComponent);
    _B.displayName = 'Legend', _B.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc'
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Surface', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j() {
        return j = Object.assign || function (k) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }
    function k(l, m) {
        if (null == l)
            return {};
        var n, o, p = function (q, r) {
                if (null == q)
                    return {};
                var s, t, u = {}, v = Object.keys(q);
                for (t = 0; t < v.length; t++)
                    s = v[t], r.indexOf(s) >= 0 || (u[s] = q[s]);
                return u;
            }(l, m);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(l);
            for (o = 0; o < q.length; o++)
                n = q[o], m.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(l, n) && (p[n] = l[n]);
        }
        return p;
    }
    function _p(q) {
        var r = q.children, s = q.width, t = q.height, u = q.viewBox, v = q.className, w = q.style, x = k(q, [
                'children',
                'width',
                'height',
                'viewBox',
                'className',
                'style'
            ]), y = _p || {
                width: s,
                height: t,
                x: 0,
                y: 0
            }, z = a(h)('recharts-surface', v);
        return a(q).createElement('svg', j({}, (0, i.filterProps)(x, !0, !0), {
            className: z,
            width: s,
            height: t,
            style: w,
            viewBox: ''.concat(y.x, ' ').concat(y.y, ' ').concat(y.width, ' ').concat(y.height),
            version: '1.1'
        }), a(q).createElement('title', null, q.title), a(q).createElement('desc', null, q.desc), r);
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'Symbols', function () {
        return _F;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    function s(t) {
        return s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (u) {
            return typeof u;
        } : function (u) {
            return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
        }, s(t);
    }
    function t() {
        return t = Object.assign || function (u) {
            for (var v = 1; v < arguments.length; v++) {
                var w = arguments[v];
                for (var x in w)
                    Object.prototype.hasOwnProperty.call(w, x) && (u[x] = w[x]);
            }
            return u;
        }, t.apply(this, arguments);
    }
    function u(v, w) {
        if (!(v instanceof w))
            throw new TypeError('Cannot call a class as a function');
    }
    function v(w, x) {
        for (var y = 0; y < x.length; y++) {
            var z = x[y];
            z.enumerable = z.enumerable || !1, z.configurable = !0, 'value' in z && (z.writable = !0), Object.defineProperty(w, z.key, z);
        }
    }
    function y(z, A) {
        return y = Object.setPrototypeOf || function (B, C) {
            return B.__proto__ = C, B;
        }, y(z, A);
    }
    function z(A) {
        var B = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (A) {
                return !1;
            }
        }();
        return function () {
            var C, D = _C(A);
            if (B) {
                var E = _C(this).constructor;
                C = Reflect.construct(D, arguments, E);
            } else
                C = D.apply(this, arguments);
            return _B(this, C);
        };
    }
    function _B(C, D) {
        return !D || 'object' !== s(D) && 'function' != typeof D ? function (E) {
            if (void 0 === E)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return E;
        }(C) : D;
    }
    function _C(D) {
        return _C = Object.setPrototypeOf ? Object.getPrototypeOf : function (E) {
            return E.__proto__ || Object.getPrototypeOf(E);
        }, _C(D);
    }
    var D = {
            symbolCircle: j.default,
            symbolCross: k.default,
            symbolDiamond: l.default,
            symbolSquare: m.default,
            symbolStar: n.default,
            symbolTriangle: o.default,
            symbolWye: p.default
        }, E = Math.PI / 180, _F = function (G) {
            !function (H, I) {
                if ('function' != typeof I && null !== I)
                    throw new TypeError('Super expression must either be null or a function');
                H.prototype = Object.create(I && I.prototype, {
                    constructor: {
                        value: H,
                        writable: !0,
                        configurable: !0
                    }
                }), I && y(H, I);
            }(l, G);
            var H, I, J, K = z(l);
            function L() {
                return u(this, L), K.apply(this, arguments);
            }
            return H = L, (I = [
                {
                    key: 'getPath',
                    value: function () {
                        var M = this.props, N = M.size, O = M.sizeType, P = M.type, Q = function (R) {
                                var S = 'symbol'.concat(a(g)(R));
                                return D[S] || j.default;
                            }(P), R = (0, i.default)().type(Q).size(function (S, T, U) {
                                if ('area' === T)
                                    return S;
                                switch (U) {
                                case 'cross':
                                    return 5 * S * S / 9;
                                case 'diamond':
                                    return 0.5 * S * S / Math.sqrt(3);
                                case 'square':
                                    return S * S;
                                case 'star':
                                    var V = 18 * E;
                                    return 1.25 * S * S * (Math.tan(V) - Math.tan(2 * V) * Math.pow(Math.tan(V), 2));
                                case 'triangle':
                                    return Math.sqrt(3) * S * S / 4;
                                case 'wye':
                                    return (21 - 10 * Math.sqrt(3)) * S * S / 8;
                                default:
                                    return Math.PI * S * S / 4;
                                }
                            }(N, O, P));
                        return R();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var M = this.props, N = M.className, O = M.cx, P = M.cy, Q = M.size;
                        return O === +O && P === +P && Q === +Q ? a(h).createElement('path', t({}, (0, r.filterProps)(this.props, !0), {
                            className: a(q)('recharts-symbols', N),
                            transform: 'translate('.concat(O, ', ').concat(P, ')'),
                            d: this.getPath()
                        })) : null;
                    }
                }
            ]) && v(H.prototype, I), J && v(H, J), L;
        }(h.PureComponent);
    _F.defaultProps = {
        type: 'circle',
        size: 64,
        sizeType: 'area'
    }, _F.registerSymbol = function (G, H) {
        D['symbol'.concat(a(g)(G))] = H;
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    h.default, i.default, j.default, l.default, k.default, m.default, n.default;
    function _p(q, r) {
        var s = null;
        function t() {
            var u;
            if (s || (s = t = (0, g.default)()), q.apply(this, arguments).draw(s, +r.apply(this, arguments)), t)
                return s = null, t + '' || null;
        }
        return q = 'function' == typeof q ? q : (0, o.default)(q || h.default), r = 'function' == typeof r ? r : (0, o.default)(void 0 === r ? 64 : +r), t.type = function (v) {
            return arguments.length ? (q = 'function' == typeof v ? v : (0, o.default)(v), t) : q;
        }, t.size = function (v) {
            return arguments.length ? (r = 'function' == typeof v ? v : (0, o.default)(+v), t) : r;
        }, t.context = function (v) {
            return arguments.length ? (s = null == v ? null : v, t) : s;
        }, t;
    }
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _m;
    });
    const g = Math.PI, h = 2 * g, i = 0.000001, j = h - i;
    function k() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = '';
    }
    function l() {
        return new k();
    }
    k.prototype = l.prototype = {
        constructor: k,
        moveTo: function (m, n) {
            this._ += 'M' + (this._x0 = this._x1 = +m) + ',' + (this._y0 = this._y1 = +n);
        },
        closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += 'Z');
        },
        lineTo: function (m, n) {
            this._ += 'L' + (this._x1 = +m) + ',' + (this._y1 = +n);
        },
        quadraticCurveTo: function (m, n, o, p) {
            this._ += 'Q' + +m + ',' + +n + ',' + (this._x1 = +o) + ',' + (this._y1 = +p);
        },
        bezierCurveTo: function (m, n, o, p, q, r) {
            this._ += 'C' + +m + ',' + +n + ',' + +o + ',' + +p + ',' + (this._x1 = +q) + ',' + (this._y1 = +r);
        },
        arcTo: function (m, n, o, p, q) {
            m = +m, n = +n, o = +o, p = +p, q = +q;
            var r = this._x1, s = this._y1, t = o - m, u = p - n, v = r - m, w = s - n, x = v * v + w * w;
            if (q < 0)
                throw new Error('negative radius: ' + q);
            if (null === this._x1)
                this._ += 'M' + (this._x1 = m) + ',' + (this._y1 = n);
            else if (x > i)
                if (Math.abs(w * t - u * v) > i && q) {
                    var y = o - r, z = p - s, A = t * t + u * u, B = y * y + z * z, C = Math.sqrt(A), D = Math.sqrt(x), E = q * Math.tan((g - Math.acos((A + x - B) / (2 * C * D))) / 2), F = E / D, G = E / C;
                    Math.abs(F - 1) > i && (this._ += 'L' + (m + F * v) + ',' + (n + F * w)), this._ += 'A' + q + ',' + q + ',0,0,' + +(w * y > v * z) + ',' + (this._x1 = m + G * t) + ',' + (this._y1 = n + G * u);
                } else
                    this._ += 'L' + (this._x1 = m) + ',' + (this._y1 = n);
            else ;
        },
        arc: function (m, n, o, p, q, r) {
            m = +m, n = +n, r = !!r;
            var s = (o = +o) * Math.cos(p), t = o * Math.sin(p), u = m + s, v = n + t, w = 1 ^ r, x = r ? p - q : q - p;
            if (o < 0)
                throw new Error('negative radius: ' + o);
            null === this._x1 ? this._ += 'M' + u + ',' + v : (Math.abs(this._x1 - u) > i || Math.abs(this._y1 - v) > i) && (this._ += 'L' + u + ',' + v), o && (x < 0 && (x = x % h + h), x > j ? this._ += 'A' + o + ',' + o + ',0,1,' + w + ',' + (m - s) + ',' + (n - t) + 'A' + o + ',' + o + ',0,1,' + w + ',' + (this._x1 = u) + ',' + (this._y1 = v) : x > i && (this._ += 'A' + o + ',' + o + ',0,' + +(x >= g) + ',' + w + ',' + (this._x1 = m + o * Math.cos(q)) + ',' + (this._y1 = n + o * Math.sin(q))));
        },
        rect: function (m, n, o, p) {
            this._ += 'M' + (this._x0 = this._x1 = +m) + ',' + (this._y0 = this._y1 = +n) + 'h' + +o + 'v' + +p + 'h' + -o + 'Z';
        },
        toString: function () {
            return this._;
        }
    };
    var _m = l;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....'), _h = {
            draw: function (i, j) {
                var k = Math.sqrt(j / g.pi);
                i.moveTo(k, 0), i.arc(0, 0, k, 0, g.tau);
            }
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'pi', function () {
        return d;
    }), b(e.exports, 'tau', function () {
        return _h;
    });
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var g = Math.PI, _h = 2 * g;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    var g = {
        draw: function (h, i) {
            var j = Math.sqrt(i / 5) / 2;
            h.moveTo(-3 * j, -j), h.lineTo(-j, -j), h.lineTo(-j, -3 * j), h.lineTo(j, -3 * j), h.lineTo(j, -j), h.lineTo(3 * j, -j), h.lineTo(3 * j, j), h.lineTo(j, j), h.lineTo(j, 3 * j), h.lineTo(-j, 3 * j), h.lineTo(-j, j), h.lineTo(-3 * j, j), h.closePath();
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = Math.sqrt(1 / 3), h = 2 * g, _i = {
            draw: function (j, k) {
                var l = Math.sqrt(k / h), m = l * g;
                j.moveTo(0, -l), j.lineTo(m, 0), j.lineTo(0, l), j.lineTo(-m, 0), j.closePath();
            }
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = Math.sin(g.pi / 10) / Math.sin(7 * g.pi / 10), i = Math.sin(g.tau / 10) * h, j = -Math.cos(g.tau / 10) * h, _k = {
            draw: function (l, m) {
                var n = Math.sqrt(0.8908130915292852 * m), o = i * n, p = j * n;
                l.moveTo(0, -n), l.lineTo(o, p);
                for (var q = 1; q < 5; ++q) {
                    var r = g.tau * q / 5, s = Math.cos(r), t = Math.sin(r);
                    l.lineTo(t * n, -s * n), l.lineTo(s * o - t * p, t * o + s * p);
                }
                l.closePath();
            }
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    var g = {
        draw: function (h, i) {
            var j = Math.sqrt(i), k = -j / 2;
            h.rect(k, k, j, j);
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _h;
    });
    var g = Math.sqrt(3), _h = {
            draw: function (i, j) {
                var k = -Math.sqrt(j / (3 * g));
                i.moveTo(0, 2 * k), i.lineTo(-g * k, -k), i.lineTo(g * k, -k), i.closePath();
            }
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _k;
    });
    var g = -0.5, h = Math.sqrt(3) / 2, i = 1 / Math.sqrt(12), j = 3 * (i / 2 + 1), _k = {
            draw: function (l, m) {
                var n = Math.sqrt(m / j), o = n / 2, p = n * i, q = o, r = n * i + n, s = -q, t = r;
                l.moveTo(o, p), l.lineTo(q, r), l.lineTo(s, t), l.lineTo(g * o - h * p, h * o + g * p), l.lineTo(g * q - h * r, h * q + g * r), l.lineTo(g * s - h * t, h * s + g * t), l.lineTo(g * o + h * p, g * p - h * o), l.lineTo(g * q + h * r, g * r - h * q), l.lineTo(g * s + h * t, g * t - h * s), l.closePath();
            }
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'BarChart', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), _l = (0, g.generateCategoricalChart)({
            chartName: 'BarChart',
            GraphicalChild: h.Bar,
            defaultTooltipEventType: 'axis',
            validateTooltipEventTypes: [
                'axis',
                'item'
            ],
            axisComponents: [
                {
                    axisType: 'xAxis',
                    AxisComp: i.XAxis
                },
                {
                    axisType: 'yAxis',
                    AxisComp: j.YAxis
                }
            ],
            formatAxisMap: k.formatAxisMap
        });
}), d.register('.....', function (e, f) {
    b(e.exports, 'generateCategoricalChart', function () {
        return _Ab;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....'), A = d('.....'), B = d('.....'), C = d('.....'), D = d('.....'), E = d('.....'), F = d('.....'), G = d('.....'), H = d('.....'), I = d('.....'), J = d('.....'), K = d('.....'), L = d('.....');
    function M(N) {
        return M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (O) {
            return typeof O;
        } : function (O) {
            return O && 'function' == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? 'symbol' : typeof O;
        }, M(N);
    }
    function N(O, P) {
        return function (Q) {
            if (Array.isArray(Q))
                return Q;
        }(O) || function (Q, R) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(Q)))
                return;
            var S = [], T = !0, U = !1, V = void 0;
            try {
                for (var W, X = Q[Symbol.iterator](); !(T = (W = X.next()).done) && (S.push(W.value), !R || S.length !== R); T = !0);
            } catch (Q) {
                U = !0, V = Q;
            } finally {
                try {
                    T || null == X.return || X.return();
                } finally {
                    if (U)
                        throw V;
                }
            }
            return S;
        }(O, P) || _db(O, P) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function O() {
        return O = Object.assign || function (P) {
            for (var Q = 1; Q < arguments.length; Q++) {
                var R = arguments[Q];
                for (var S in R)
                    Object.prototype.hasOwnProperty.call(R, S) && (P[S] = R[S]);
            }
            return P;
        }, O.apply(this, arguments);
    }
    function P(Q, R) {
        if (null == Q)
            return {};
        var S, T, U = function (V, W) {
                if (null == V)
                    return {};
                var X, Y, Z = {}, $ = Object.keys(V);
                for (Y = 0; Y < $.length; Y++)
                    X = $[Y], W.indexOf(X) >= 0 || (Z[X] = V[X]);
                return Z;
            }(Q, R);
        if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(Q);
            for (T = 0; T < V.length; T++)
                S = V[T], R.indexOf(S) >= 0 || Object.prototype.propertyIsEnumerable.call(Q, S) && (U[S] = Q[S]);
        }
        return U;
    }
    function U(V, W) {
        for (var X = 0; X < W.length; X++) {
            var Y = W[X];
            Y.enumerable = Y.enumerable || !1, Y.configurable = !0, 'value' in Y && (Y.writable = !0), Object.defineProperty(V, Y.key, Y);
        }
    }
    function X(Y, Z) {
        return X = Object.setPrototypeOf || function ($, ab) {
            return $.__proto__ = ab, $;
        }, X(Y, Z);
    }
    function Y(Z) {
        var $ = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (Z) {
                return !1;
            }
        }();
        return function () {
            var ab, bb = _bb(Z);
            if ($) {
                var cb = _bb(this).constructor;
                ab = Reflect.construct(bb, arguments, cb);
            } else
                ab = bb.apply(this, arguments);
            return _$(this, ab);
        };
    }
    function _$(ab, bb) {
        return !bb || 'object' !== M(bb) && 'function' != typeof bb ? _ab(ab) : bb;
    }
    function _ab(bb) {
        if (void 0 === bb)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return bb;
    }
    function _bb(cb) {
        return _bb = Object.setPrototypeOf ? Object.getPrototypeOf : function (db) {
            return db.__proto__ || Object.getPrototypeOf(db);
        }, _bb(cb);
    }
    function cb(db) {
        return function (eb) {
            if (Array.isArray(eb))
                return _fb(eb);
        }(db) || function (eb) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(eb))
                return Array.from(eb);
        }(db) || _db(db) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _db(eb, fb) {
        if (eb) {
            if ('string' == typeof eb)
                return _fb(eb, fb);
            var gb = Object.prototype.toString.call(eb).slice(8, -1);
            return 'Object' === gb && eb.constructor && (gb = eb.constructor.name), 'Map' === gb || 'Set' === gb ? Array.from(eb) : 'Arguments' === gb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gb) ? _fb(eb, fb) : void 0;
        }
    }
    function _fb(gb, hb) {
        (null == hb || hb > gb.length) && (hb = gb.length);
        for (var ib = 0, jb = new Array(hb); ib < hb; ib++)
            jb[ib] = gb[ib];
        return jb;
    }
    function ib(jb, kb) {
        var lb = Object.keys(jb);
        if (Object.getOwnPropertySymbols) {
            var mb = Object.getOwnPropertySymbols(jb);
            kb && (mb = mb.filter(function (nb) {
                return Object.getOwnPropertyDescriptor(jb, nb).enumerable;
            })), lb.push.apply(lb, mb);
        }
        return lb;
    }
    function lb(mb) {
        for (var nb = 1; nb < arguments.length; nb++) {
            var ob = null != arguments[nb] ? arguments[nb] : {};
            nb % 2 ? ib(Object(ob), !0).forEach(function (pb) {
                _ob(mb, pb, ob[pb]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mb, Object.getOwnPropertyDescriptors(ob)) : ib(Object(ob)).forEach(function (pb) {
                Object.defineProperty(mb, pb, Object.getOwnPropertyDescriptor(ob, pb));
            });
        }
        return mb;
    }
    function _ob(pb, qb, rb) {
        return qb in pb ? Object.defineProperty(pb, qb, {
            value: rb,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : pb[qb] = rb, pb;
    }
    var pb = {
            xAxis: [
                'bottom',
                'top'
            ],
            yAxis: [
                'left',
                'right'
            ]
        }, qb = {
            x: 0,
            y: 0
        }, rb = Number.isFinite ? Number.isFinite : isFinite, sb = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : 'function' == typeof setImmediate ? setImmediate : setTimeout, tb = 'function' == typeof cancelAnimationFrame ? cancelAnimationFrame : 'function' == typeof clearImmediate ? clearImmediate : clearTimeout, ub = function (vb, wb, xb) {
            var yb = wb.graphicalItems, zb = wb.dataStartIndex, Ab = wb.dataEndIndex, Bb = (yb || []).reduce(function (Cb, Db) {
                    var Eb = Db.props.data;
                    return Eb && Eb.length ? [].concat(cb(Cb), cb(Eb)) : Cb;
                }, []);
            return Bb && Bb.length > 0 ? Bb : xb && xb.props && xb.props.data && xb.props.data.length > 0 ? xb.props.data : vb && vb.length && (0, F.isNumber)(zb) && (0, F.isNumber)(Ab) ? vb.slice(zb, Ab + 1) : [];
        }, vb = function (wb, xb, yb, zb) {
            var Ab = wb.graphicalItems, Bb = wb.tooltipAxis, Cb = ub(xb, wb);
            return yb < 0 || !Ab || !Ab.length || yb >= Cb.length ? null : Ab.reduce(function (Db, Eb) {
                if (Eb.props.hide)
                    return Db;
                var Fb, Gb = Eb.props.data;
                if (Bb.dataKey && !Bb.allowDuplicatedCategory) {
                    var Hb = void 0 === Gb ? Cb : Gb;
                    Fb = (0, F.findEntryInArray)(Hb, Bb.dataKey, zb);
                } else
                    Fb = Gb && Gb[yb] || Cb[yb];
                return Fb ? [].concat(cb(Db), [(0, G.getTooltipItem)(Eb, Fb)]) : Db;
            }, []);
        }, wb = function (xb, yb, zb, Ab) {
            var Bb = Ab || {
                    x: xb.chartX,
                    y: xb.chartY
                }, Cb = function (Db, Eb) {
                    return 'horizontal' === Eb ? Db.x : 'vertical' === Eb ? Db.y : 'centric' === Eb ? Db.angle : Db.radius;
                }(Bb, zb), Db = xb.orderedTooltipTicks, Eb = xb.tooltipAxis, Fb = xb.tooltipTicks, Gb = (0, G.calculateActiveTickIndex)(Cb, Db, Fb, Eb);
            if (Gb >= 0 && Fb) {
                var Hb = Fb[Gb] && Fb[Gb].value, Ib = vb(xb, yb, Gb, Hb), Jb = function (Kb, Lb, Mb, Nb) {
                        var Ob = Lb.find(function (Pb) {
                            return Pb && Pb.index === Mb;
                        });
                        if (Ob) {
                            if ('horizontal' === Kb)
                                return {
                                    x: Ob.coordinate,
                                    y: Nb.y
                                };
                            if ('vertical' === Kb)
                                return {
                                    x: Nb.x,
                                    y: Ob.coordinate
                                };
                            if ('centric' === Kb) {
                                var Pb = Ob.coordinate, Qb = Nb.radius;
                                return lb(lb(lb({}, Nb), (0, I.polarToCartesian)(Nb.cx, Nb.cy, Qb, Pb)), {}, {
                                    angle: Pb,
                                    radius: Qb
                                });
                            }
                            var Rb = Ob.coordinate, Sb = Nb.angle;
                            return lb(lb(lb({}, Nb), (0, I.polarToCartesian)(Nb.cx, Nb.cy, Rb, Sb)), {}, {
                                angle: Sb,
                                radius: Rb
                            });
                        }
                        return qb;
                    }(zb, Db, Gb, Bb);
                return {
                    activeTooltipIndex: Gb,
                    activeLabel: Hb,
                    activePayload: Ib,
                    activeCoordinate: Jb
                };
            }
            return null;
        }, xb = function (yb, zb) {
            var Ab = zb.axisType, Bb = void 0 === Ab ? 'xAxis' : Ab, Cb = zb.AxisComp, Db = zb.graphicalItems, Eb = zb.stackGroups, Fb = zb.dataStartIndex, Gb = zb.dataEndIndex, Hb = yb.children, Ib = ''.concat(Bb, 'Id'), Jb = (0, B.findAllByType)(Hb, Cb), Kb = {};
            return Jb && Jb.length ? Kb = function (Lb, Mb) {
                var Nb = Mb.axes, Ob = Mb.graphicalItems, Pb = Mb.axisType, Qb = Mb.axisIdKey, Rb = Mb.stackGroups, Sb = Mb.dataStartIndex, Tb = Mb.dataEndIndex, Ub = Lb.layout, Vb = Lb.children, Wb = Lb.stackOffset, Xb = (0, G.isCategoricalAxis)(Ub, Pb);
                return Nb.reduce(function (Yb, Zb) {
                    var $b = Zb.props, ac = $b.type, bc = $b.dataKey, cc = $b.allowDataOverflow, dc = $b.allowDuplicatedCategory, ec = $b.scale, fc = $b.ticks, gc = Zb.props[Qb], hc = ub(Lb.data, {
                            graphicalItems: Ob.filter(function (ic) {
                                return ic.props[Qb] === gc;
                            }),
                            dataStartIndex: Sb,
                            dataEndIndex: Tb
                        }), ic = hc.length;
                    if (!Yb[gc]) {
                        var jc, kc, lc;
                        if (bc) {
                            if (jc = (0, G.getDomainOfDataByKey)(hc, bc, ac), 'category' === ac && Xb) {
                                var mc = (0, F.hasDuplicate)(jc);
                                dc && mc ? (kc = jc, jc = a(m)(0, ic)) : dc || (jc = (0, G.parseDomainOfCategoryAxis)(Zb.props.domain, jc, Zb).reduce(function (nc, oc) {
                                    return nc.indexOf(oc) >= 0 ? nc : [].concat(cb(nc), [oc]);
                                }, []));
                            } else if ('category' === ac)
                                jc = dc ? jc.filter(function (nc) {
                                    return '' !== nc && !a(n)(nc);
                                }) : (0, G.parseDomainOfCategoryAxis)(Zb.props.domain, jc, Zb).reduce(function (nc, oc) {
                                    return nc.indexOf(oc) >= 0 || '' === oc || a(n)(oc) ? nc : [].concat(cb(nc), [oc]);
                                }, []);
                            else if ('number' === ac) {
                                var nc = (0, G.parseErrorBarsOfAxis)(hc, Ob.filter(function (oc) {
                                    return oc.props[Qb] === gc && !oc.props.hide;
                                }), bc, Pb, Ub);
                                nc && (jc = nc);
                            }
                            !Xb || 'number' !== ac && 'auto' === ec || (lc = (0, G.getDomainOfDataByKey)(hc, bc, 'category'));
                        } else
                            jc = Xb ? a(m)(0, ic) : Rb && Rb[gc] && Rb[gc].hasStack && 'number' === ac ? 'expand' === Wb ? [
                                0,
                                1
                            ] : (0, G.getDomainOfStackGroups)(Rb[gc].stackGroups, Sb, Tb) : (0, G.getDomainOfItemsWithSameAxis)(hc, Ob.filter(function (oc) {
                                return oc.props[Qb] === gc && !oc.props.hide;
                            }), ac, Ub, !0);
                        if ('number' === ac)
                            jc = (0, H.detectReferenceElementsDomain)(Vb, jc, gc, Pb, fc), Zb.props.domain && (jc = (0, G.parseSpecifiedDomain)(Zb.props.domain, jc, cc));
                        else if ('category' === ac && Zb.props.domain) {
                            var oc = Zb.props.domain;
                            jc.every(function (pc) {
                                return oc.indexOf(pc) >= 0;
                            }) && (jc = oc);
                        }
                        return lb(lb({}, Yb), {}, _ob({}, gc, lb(lb({}, Zb.props), {}, {
                            axisType: Pb,
                            domain: jc,
                            categoricalDomain: lc,
                            duplicateDomain: kc,
                            originalDomain: Zb.props.domain,
                            isCategorical: Xb,
                            layout: Ub
                        })));
                    }
                    return Yb;
                }, {});
            }(yb, {
                axes: Jb,
                graphicalItems: Db,
                axisType: Bb,
                axisIdKey: Ib,
                stackGroups: Eb,
                dataStartIndex: Fb,
                dataEndIndex: Gb
            }) : Db && Db.length && (Kb = function (Lb, Mb) {
                var Nb = Mb.graphicalItems, Ob = Mb.Axis, Pb = Mb.axisType, Qb = Mb.axisIdKey, Rb = Mb.stackGroups, Sb = Mb.dataStartIndex, Tb = Mb.dataEndIndex, Ub = Lb.layout, Vb = Lb.children, Wb = ub(Lb.data, {
                        graphicalItems: Nb,
                        dataStartIndex: Sb,
                        dataEndIndex: Tb
                    }), Xb = Wb.length, Yb = (0, G.isCategoricalAxis)(Ub, Pb), Zb = -1;
                return Nb.reduce(function ($b, ac) {
                    var bc, cc = ac.props[Qb];
                    return $b[cc] ? $b : (Zb++, Yb ? bc = a(m)(0, Xb) : Rb && Rb[cc] && Rb[cc].hasStack ? (bc = (0, G.getDomainOfStackGroups)(Rb[cc].stackGroups, Sb, Tb), bc = (0, H.detectReferenceElementsDomain)(Vb, bc, cc, Pb)) : (bc = (0, G.parseSpecifiedDomain)(Ob.defaultProps.domain, (0, G.getDomainOfItemsWithSameAxis)(Wb, Nb.filter(function (dc) {
                        return dc.props[Qb] === cc && !dc.props.hide;
                    }), 'number', Ub), Ob.defaultProps.allowDataOverflow), bc = (0, H.detectReferenceElementsDomain)(Vb, bc, cc, Pb)), lb(lb({}, $b), {}, _ob({}, cc, lb(lb({ axisType: Pb }, Ob.defaultProps), {}, {
                        hide: !0,
                        orientation: a(l)(pb, ''.concat(Pb, '.').concat(Zb % 2), null),
                        domain: bc,
                        originalDomain: Ob.defaultProps.domain,
                        isCategorical: Yb,
                        layout: Ub
                    }))));
                }, {});
            }(yb, {
                Axis: Cb,
                graphicalItems: Db,
                axisType: Bb,
                axisIdKey: Ib,
                stackGroups: Eb,
                dataStartIndex: Fb,
                dataEndIndex: Gb
            })), Kb;
        }, yb = function (zb) {
            var Ab = zb.children, Bb = zb.defaultShowTooltip, Cb = (0, B.findChildByType)(Ab, D.Brush.displayName);
            return {
                chartX: 0,
                chartY: 0,
                dataStartIndex: Cb && Cb.props && Cb.props.startIndex || 0,
                dataEndIndex: Cb && Cb.props && Cb.props.endIndex || zb.data && zb.data.length - 1 || 0,
                activeTooltipIndex: -1,
                isTooltipActive: !a(n)(Bb) && Bb
            };
        }, zb = function (Ab) {
            return 'horizontal' === Ab ? {
                numericAxisName: 'yAxis',
                cateAxisName: 'xAxis'
            } : 'vertical' === Ab ? {
                numericAxisName: 'xAxis',
                cateAxisName: 'yAxis'
            } : 'centric' === Ab ? {
                numericAxisName: 'radiusAxis',
                cateAxisName: 'angleAxis'
            } : {
                numericAxisName: 'angleAxis',
                cateAxisName: 'radiusAxis'
            };
        }, _Ab = function (Bb) {
            var Cb, Db, Eb = Bb.chartName, Fb = Bb.GraphicalChild, Gb = Bb.defaultTooltipEventType, Hb = void 0 === Gb ? 'axis' : Gb, Ib = Bb.validateTooltipEventTypes, Jb = void 0 === Ib ? ['axis'] : Ib, Kb = Bb.axisComponents, Lb = Bb.legendContent, Mb = Bb.formatAxisMap, Nb = Bb.defaultProps, Ob = function (Pb, Qb) {
                    var Rb = Qb.graphicalItems, Sb = Qb.stackGroups, Tb = Qb.offset, Ub = Qb.updateId, Vb = Qb.dataStartIndex, Wb = Qb.dataEndIndex, Xb = Pb.barSize, Yb = Pb.layout, Zb = Pb.barGap, $b = Pb.barCategoryGap, ac = Pb.maxBarSize, bc = zb(Yb), cc = bc.numericAxisName, dc = bc.cateAxisName, ec = function (fc) {
                            return !(!fc || !fc.length) && fc.some(function (gc) {
                                var hc = (0, B.getDisplayName)(gc && gc.type);
                                return hc && hc.indexOf('Bar') >= 0;
                            });
                        }(Rb), fc = ec && (0, G.getBarSizeList)({
                            barSize: Xb,
                            stackGroups: Sb
                        }), gc = [];
                    return Rb.forEach(function (hc, ic) {
                        var jc = ub(Pb.data, {
                                dataStartIndex: Vb,
                                dataEndIndex: Wb
                            }, hc), kc = hc.props, lc = kc.dataKey, mc = kc.maxBarSize, nc = hc.props[''.concat(cc, 'Id')], oc = hc.props[''.concat(dc, 'Id')], pc = Kb.reduce(function (qc, rc) {
                                var sc, tc = Qb[''.concat(rc.axisType, 'Map')], uc = hc.props[''.concat(rc.axisType, 'Id')], vc = tc && tc[uc];
                                return lb(lb({}, qc), {}, (_ob(sc = {}, rc.axisType, vc), _ob(sc, ''.concat(rc.axisType, 'Ticks'), (0, G.getTicksOfAxis)(vc)), sc));
                            }, {}), qc = pc[dc], rc = pc[''.concat(dc, 'Ticks')], sc = Sb && Sb[nc] && Sb[nc].hasStack && (0, G.getStackedDataOfItem)(hc, Sb[nc].stackGroups), tc = (0, B.getDisplayName)(hc.type).indexOf('Bar') >= 0, uc = (0, G.getBandSizeOfAxis)(qc, rc), vc = [];
                        if (tc) {
                            var wc, xc, yc = a(n)(mc) ? ac : mc, zc = null !== (wc = null !== (xc = (0, G.getBandSizeOfAxis)(qc, rc, !0)) && void 0 !== xc ? xc : yc) && void 0 !== wc ? wc : 0;
                            vc = (0, G.getBarPosition)({
                                barGap: Zb,
                                barCategoryGap: $b,
                                bandSize: zc !== uc ? zc : uc,
                                sizeList: fc[oc],
                                maxBarSize: yc
                            }), zc !== uc && (vc = vc.map(function (Ac) {
                                return lb(lb({}, Ac), {}, { position: lb(lb({}, Ac.position), {}, { offset: Ac.position.offset - zc / 2 }) });
                            }));
                        }
                        var Ac, Bc = hc && hc.type && hc.type.getComposedData;
                        Bc && gc.push({
                            props: lb(lb({}, Bc(lb(lb({}, pc), {}, {
                                displayedData: jc,
                                props: Pb,
                                dataKey: lc,
                                item: hc,
                                bandSize: uc,
                                barPosition: vc,
                                offset: Tb,
                                stackedData: sc,
                                layout: Yb,
                                dataStartIndex: Vb,
                                dataEndIndex: Wb
                            }))), {}, (Ac = { key: hc.key || 'item-'.concat(ic) }, _ob(Ac, cc, pc[cc]), _ob(Ac, dc, pc[dc]), _ob(Ac, 'animationId', Ub), Ac)),
                            childIndex: (0, B.parseChildIndex)(hc, Pb.children),
                            item: hc
                        });
                    }), gc;
                }, Pb = function (Qb, Rb) {
                    var Sb = Qb.props, Tb = Qb.dataStartIndex, Ub = Qb.dataEndIndex, Vb = Qb.updateId;
                    if (!(0, B.validateWidthHeight)({ props: Sb }))
                        return null;
                    var Wb = Sb.children, Xb = Sb.layout, Yb = Sb.stackOffset, Zb = Sb.data, $b = Sb.reverseStackOrder, ac = zb(Xb), bc = ac.numericAxisName, cc = ac.cateAxisName, dc = (0, B.findAllByType)(Wb, Fb), ec = (0, G.getStackGroupsByAxisId)(Zb, dc, ''.concat(bc, 'Id'), ''.concat(cc, 'Id'), Yb, $b), fc = Kb.reduce(function (gc, hc) {
                            var ic = ''.concat(hc.axisType, 'Map');
                            return lb(lb({}, gc), {}, _ob({}, ic, xb(Sb, lb(lb({}, hc), {}, {
                                graphicalItems: dc,
                                stackGroups: hc.axisType === bc && ec,
                                dataStartIndex: Tb,
                                dataEndIndex: Ub
                            }))));
                        }, {}), gc = function (hc, ic) {
                            var jc = hc.props, kc = hc.graphicalItems, lc = hc.xAxisMap, mc = void 0 === lc ? {} : lc, nc = hc.yAxisMap, oc = void 0 === nc ? {} : nc, pc = jc.width, qc = jc.height, rc = jc.children, sc = jc.margin || {}, tc = (0, B.findChildByType)(rc, D.Brush.displayName), uc = (0, B.findChildByType)(rc, v.Legend.displayName), vc = Object.keys(oc).reduce(function (wc, xc) {
                                    var yc = oc[xc], zc = yc.orientation;
                                    return yc.mirror || yc.hide ? wc : lb(lb({}, wc), {}, _ob({}, zc, wc[zc] + yc.width));
                                }, {
                                    left: sc.left || 0,
                                    right: sc.right || 0
                                }), wc = Object.keys(mc).reduce(function (xc, yc) {
                                    var zc = mc[yc], Ac = zc.orientation;
                                    return zc.mirror || zc.hide ? xc : lb(lb({}, xc), {}, _ob({}, Ac, a(l)(xc, ''.concat(Ac)) + zc.height));
                                }, {
                                    top: sc.top || 0,
                                    bottom: sc.bottom || 0
                                }), xc = lb(lb({}, wc), vc), yc = xc.bottom;
                            return tc && (xc.bottom += tc.props.height || D.Brush.defaultProps.height), uc && ic && (xc = (0, G.appendOffsetOfLegend)(xc, kc, jc, ic)), lb(lb({ brushBottom: yc }, xc), {}, {
                                width: pc - xc.left - xc.right,
                                height: qc - xc.top - xc.bottom
                            });
                        }(lb(lb({}, fc), {}, {
                            props: Sb,
                            graphicalItems: dc
                        }), null == Rb ? void 0 : Rb.legendBBox);
                    Object.keys(fc).forEach(function (hc) {
                        fc[hc] = Mb(Sb, fc[hc], gc, hc.replace('Map', ''), Eb);
                    });
                    var hc, ic, jc, kc = fc[''.concat(cc, 'Map')], lc = (hc = kc, ic = (0, F.getAnyElementOfObject)(hc), {
                            tooltipTicks: jc = (0, G.getTicksOfAxis)(ic, !1, !0),
                            orderedTooltipTicks: a(k)(jc, function (mc) {
                                return mc.coordinate;
                            }),
                            tooltipAxis: ic,
                            tooltipAxisBandSize: (0, G.getBandSizeOfAxis)(ic, jc)
                        }), mc = Ob(Sb, lb(lb({}, fc), {}, {
                            dataStartIndex: Tb,
                            dataEndIndex: Ub,
                            updateId: Vb,
                            graphicalItems: dc,
                            stackGroups: ec,
                            offset: gc
                        }));
                    return lb(lb({
                        formattedGraphicalItems: mc,
                        graphicalItems: dc,
                        offset: gc,
                        stackGroups: ec
                    }, lc), fc);
                };
            return Db = Cb = function (Qb) {
                !function (Rb, Sb) {
                    if ('function' != typeof Sb && null !== Sb)
                        throw new TypeError('Super expression must either be null or a function');
                    Rb.prototype = Object.create(Sb && Sb.prototype, {
                        constructor: {
                            value: Rb,
                            writable: !0,
                            configurable: !0
                        }
                    }), Sb && X(Rb, Sb);
                }(t, Qb);
                var Rb, Sb, Tb, Ub = Y(t);
                function Vb(Wb) {
                    var Xb;
                    return function (Yb, Zb) {
                        if (!(Yb instanceof Zb))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, Vb), (Xb = Ub.call(this, Wb)).uniqueChartId = void 0, Xb.clipPathId = void 0, Xb.legendInstance = void 0, Xb.deferId = void 0, Xb.container = void 0, Xb.clearDeferId = function () {
                        !a(n)(Xb.deferId) && tb && tb(Xb.deferId), Xb.deferId = null;
                    }, Xb.handleLegendBBoxUpdate = function (Yb) {
                        if (Yb) {
                            var Zb = Xb.state, $b = Zb.dataStartIndex, ac = Zb.dataEndIndex, bc = Zb.updateId;
                            Xb.setState(lb({ legendBBox: Yb }, Pb({
                                props: Xb.props,
                                dataStartIndex: $b,
                                dataEndIndex: ac,
                                updateId: bc
                            }, lb(lb({}, Xb.state), {}, { legendBBox: Yb }))));
                        }
                    }, Xb.handleReceiveSyncEvent = function (Yb, Zb, $b) {
                        Xb.props.syncId === Yb && Zb !== Xb.uniqueChartId && (Xb.clearDeferId(), Xb.deferId = sb && sb(Xb.applySyncEvent.bind(_ab(Xb), $b)));
                    }, Xb.handleBrushChange = function (Yb) {
                        var Zb = Yb.startIndex, $b = Yb.endIndex;
                        if (Zb !== Xb.state.dataStartIndex || $b !== Xb.state.dataEndIndex) {
                            var ac = Xb.state.updateId;
                            Xb.setState(function () {
                                return lb({
                                    dataStartIndex: Zb,
                                    dataEndIndex: $b
                                }, Pb({
                                    props: Xb.props,
                                    dataStartIndex: Zb,
                                    dataEndIndex: $b,
                                    updateId: ac
                                }, Xb.state));
                            }), Xb.triggerSyncEvent({
                                dataStartIndex: Zb,
                                dataEndIndex: $b
                            });
                        }
                    }, Xb.handleMouseEnter = function (Yb) {
                        var Zb = Xb.props.onMouseEnter, $b = Xb.getMouseInfo(Yb);
                        if ($b) {
                            var ac = lb(lb({}, $b), {}, { isTooltipActive: !0 });
                            Xb.setState(ac), Xb.triggerSyncEvent(ac), a(i)(Zb) && Zb(ac, Yb);
                        }
                    }, Xb.triggeredAfterMouseMove = function (Yb) {
                        var Zb = Xb.props.onMouseMove, $b = Xb.getMouseInfo(Yb), ac = $b ? lb(lb({}, $b), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                        Xb.setState(ac), Xb.triggerSyncEvent(ac), a(i)(Zb) && Zb(ac, Yb);
                    }, Xb.handleItemMouseEnter = function (Yb) {
                        Xb.setState(function () {
                            return {
                                isTooltipActive: !0,
                                activeItem: Yb,
                                activePayload: Yb.tooltipPayload,
                                activeCoordinate: Yb.tooltipPosition || {
                                    x: Yb.cx,
                                    y: Yb.cy
                                }
                            };
                        });
                    }, Xb.handleItemMouseLeave = function () {
                        Xb.setState(function () {
                            return { isTooltipActive: !1 };
                        });
                    }, Xb.handleMouseMove = function (Yb) {
                        Yb && a(i)(Yb.persist) && Yb.persist(), Xb.triggeredAfterMouseMove(Yb);
                    }, Xb.handleMouseLeave = function (Yb) {
                        var Zb = Xb.props.onMouseLeave, $b = { isTooltipActive: !1 };
                        Xb.setState($b), Xb.triggerSyncEvent($b), a(i)(Zb) && Zb($b, Yb), Xb.cancelThrottledTriggerAfterMouseMove();
                    }, Xb.handleOuterEvent = function (Yb) {
                        var Zb = (0, B.getReactEventByType)(Yb), $b = a(l)(Xb.props, ''.concat(Zb));
                        Zb && a(i)($b) && $b(/.*touch.*/i.test(Zb) ? Xb.getMouseInfo(Yb.changedTouches[0]) : Xb.getMouseInfo(Yb), Yb);
                    }, Xb.handleClick = function (Yb) {
                        var Zb = Xb.props.onClick, $b = Xb.getMouseInfo(Yb);
                        if ($b) {
                            var ac = lb(lb({}, $b), {}, { isTooltipActive: !0 });
                            Xb.setState(ac), Xb.triggerSyncEvent(ac), a(i)(Zb) && Zb(ac, Yb);
                        }
                    }, Xb.handleMouseDown = function (Yb) {
                        var Zb = Xb.props.onMouseDown;
                        a(i)(Zb) && Zb(Xb.getMouseInfo(Yb), Yb);
                    }, Xb.handleMouseUp = function (Yb) {
                        var Zb = Xb.props.onMouseUp;
                        a(i)(Zb) && Zb(Xb.getMouseInfo(Yb), Yb);
                    }, Xb.handleTouchMove = function (Yb) {
                        null != Yb.changedTouches && Yb.changedTouches.length > 0 && Xb.handleMouseMove(Yb.changedTouches[0]);
                    }, Xb.handleTouchStart = function (Yb) {
                        null != Yb.changedTouches && Yb.changedTouches.length > 0 && Xb.handleMouseDown(Yb.changedTouches[0]);
                    }, Xb.handleTouchEnd = function (Yb) {
                        null != Yb.changedTouches && Yb.changedTouches.length > 0 && Xb.handleMouseUp(Yb.changedTouches[0]);
                    }, Xb.verticalCoordinatesGenerator = function (Yb) {
                        var Zb = Yb.xAxis, $b = Yb.width, ac = Yb.height, bc = Yb.offset;
                        return (0, G.getCoordinatesOfGrid)(C.CartesianAxis.getTicks(lb(lb(lb({}, C.CartesianAxis.defaultProps), Zb), {}, {
                            ticks: (0, G.getTicksOfAxis)(Zb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: $b,
                                height: ac
                            }
                        })), bc.left, bc.left + bc.width);
                    }, Xb.horizontalCoordinatesGenerator = function (Yb) {
                        var Zb = Yb.yAxis, $b = Yb.width, ac = Yb.height, bc = Yb.offset;
                        return (0, G.getCoordinatesOfGrid)(C.CartesianAxis.getTicks(lb(lb(lb({}, C.CartesianAxis.defaultProps), Zb), {}, {
                            ticks: (0, G.getTicksOfAxis)(Zb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: $b,
                                height: ac
                            }
                        })), bc.top, bc.top + bc.height);
                    }, Xb.axesTicksGenerator = function (Yb) {
                        return (0, G.getTicksOfAxis)(Yb, !0);
                    }, Xb.renderCursor = function (Yb) {
                        var Zb = Xb.state, $b = Zb.isTooltipActive, ac = Zb.activeCoordinate, bc = Zb.activePayload, cc = Zb.offset, dc = Zb.activeTooltipIndex, ec = Xb.getTooltipEventType();
                        if (!Yb || !Yb.props.cursor || !$b || !ac || 'ScatterChart' !== Eb && 'axis' !== ec)
                            return null;
                        var fc, gc = Xb.props.layout, hc = w.Curve;
                        if ('ScatterChart' === Eb)
                            fc = ac, hc = x.Cross;
                        else if ('BarChart' === Eb)
                            fc = Xb.getCursorRectangle(), hc = A.Rectangle;
                        else if ('radial' === gc) {
                            var ic = Xb.getCursorPoints(), jc = ic.cx, kc = ic.cy, lc = ic.radius;
                            fc = {
                                cx: jc,
                                cy: kc,
                                startAngle: ic.startAngle,
                                endAngle: ic.endAngle,
                                innerRadius: lc,
                                outerRadius: lc
                            }, hc = y.Sector;
                        } else
                            fc = { points: Xb.getCursorPoints() }, hc = w.Curve;
                        var mc = Yb.key || '_recharts-cursor', nc = lb(lb(lb(lb({
                                stroke: '#ccc',
                                pointerEvents: 'none'
                            }, cc), fc), (0, L.filterProps)(Yb.props.cursor)), {}, {
                                payload: bc,
                                payloadIndex: dc,
                                key: mc,
                                className: 'recharts-tooltip-cursor'
                            });
                        return (0, q.isValidElement)(Yb.props.cursor) ? (0, q.cloneElement)(Yb.props.cursor, nc) : (0, q.createElement)(hc, nc);
                    }, Xb.renderPolarAxis = function (Yb, Zb, $b) {
                        var ac = a(l)(Yb, 'type.axisType'), bc = a(l)(Xb.state, ''.concat(ac, 'Map'))[Yb.props[''.concat(ac, 'Id')]];
                        return (0, q.cloneElement)(Yb, lb(lb({}, bc), {}, {
                            className: ac,
                            key: Yb.key || ''.concat(Zb, '-').concat($b),
                            ticks: (0, G.getTicksOfAxis)(bc, !0)
                        }));
                    }, Xb.renderXAxis = function (Yb, Zb, $b) {
                        var ac = Xb.state.xAxisMap[Yb.props.xAxisId];
                        return Xb.renderAxis(ac, Yb, Zb, $b);
                    }, Xb.renderYAxis = function (Yb, Zb, $b) {
                        var ac = Xb.state.yAxisMap[Yb.props.yAxisId];
                        return Xb.renderAxis(ac, Yb, Zb, $b);
                    }, Xb.renderGrid = function (Yb) {
                        var Zb = Xb.state, $b = Zb.xAxisMap, ac = Zb.yAxisMap, bc = Zb.offset, cc = Xb.props, dc = cc.width, ec = cc.height, fc = (0, F.getAnyElementOfObject)($b), gc = a(h)(ac, function (hc) {
                                return a(V)(hc.domain, rb);
                            }) || (0, F.getAnyElementOfObject)(ac), hc = Yb.props || {};
                        return (0, q.cloneElement)(Yb, {
                            key: Yb.key || 'grid',
                            x: (0, F.isNumber)(hc.x) ? hc.x : bc.left,
                            y: (0, F.isNumber)(hc.y) ? hc.y : bc.top,
                            width: (0, F.isNumber)(hc.width) ? hc.width : bc.width,
                            height: (0, F.isNumber)(hc.height) ? hc.height : bc.height,
                            xAxis: fc,
                            yAxis: gc,
                            offset: bc,
                            chartWidth: dc,
                            chartHeight: ec,
                            verticalCoordinatesGenerator: hc.verticalCoordinatesGenerator || Xb.verticalCoordinatesGenerator,
                            horizontalCoordinatesGenerator: hc.horizontalCoordinatesGenerator || Xb.horizontalCoordinatesGenerator
                        });
                    }, Xb.renderPolarGrid = function (Yb) {
                        var Zb = Yb.props, $b = Zb.radialLines, ac = Zb.polarAngles, bc = Zb.polarRadius, cc = Xb.state, dc = cc.radiusAxisMap, ec = cc.angleAxisMap, fc = (0, F.getAnyElementOfObject)(dc), gc = (0, F.getAnyElementOfObject)(ec), hc = gc.cx, ic = gc.cy, jc = gc.innerRadius, kc = gc.outerRadius;
                        return (0, q.cloneElement)(Yb, {
                            polarAngles: a(p)(ac) ? ac : (0, G.getTicksOfAxis)(gc, !0).map(function (lc) {
                                return lc.coordinate;
                            }),
                            polarRadius: a(p)(bc) ? bc : (0, G.getTicksOfAxis)(fc, !0).map(function (lc) {
                                return lc.coordinate;
                            }),
                            cx: hc,
                            cy: ic,
                            innerRadius: jc,
                            outerRadius: kc,
                            key: Yb.key || 'polar-grid',
                            radialLines: $b
                        });
                    }, Xb.renderLegend = function () {
                        var Yb = Xb.state.formattedGraphicalItems, Zb = Xb.props, $b = Zb.children, ac = Zb.width, bc = Zb.height, cc = Xb.props.margin || {}, dc = ac - (cc.left || 0) - (cc.right || 0), ec = (0, G.getLegendProps)({
                                children: $b,
                                formattedGraphicalItems: Yb,
                                legendWidth: dc,
                                legendContent: Lb
                            });
                        if (!ec)
                            return null;
                        var fc = ec.item, gc = P(ec, ['item']);
                        return (0, q.cloneElement)(fc, lb(lb({}, gc), {}, {
                            chartWidth: ac,
                            chartHeight: bc,
                            margin: cc,
                            ref: function (hc) {
                                Xb.legendInstance = hc;
                            },
                            onBBoxUpdate: Xb.handleLegendBBoxUpdate
                        }));
                    }, Xb.renderTooltip = function () {
                        var Yb = Xb.props.children, Zb = (0, B.findChildByType)(Yb, u.Tooltip.displayName);
                        if (!Zb)
                            return null;
                        var $b = Xb.state, ac = $b.isTooltipActive, bc = $b.activeCoordinate, cc = $b.activePayload, dc = $b.activeLabel, ec = $b.offset;
                        return (0, q.cloneElement)(Zb, {
                            viewBox: lb(lb({}, ec), {}, {
                                x: ec.left,
                                y: ec.top
                            }),
                            active: ac,
                            label: dc,
                            payload: ac ? cc : [],
                            coordinate: bc
                        });
                    }, Xb.renderBrush = function (Yb) {
                        var Zb = Xb.props, $b = Zb.margin, ac = Zb.data, bc = Xb.state, cc = bc.offset, dc = bc.dataStartIndex, ec = bc.dataEndIndex, fc = bc.updateId;
                        return (0, q.cloneElement)(Yb, {
                            key: Yb.key || '_recharts-brush',
                            onChange: (0, G.combineEventHandlers)(Xb.handleBrushChange, null, Yb.props.onChange),
                            data: ac,
                            x: (0, F.isNumber)(Yb.props.x) ? Yb.props.x : cc.left,
                            y: (0, F.isNumber)(Yb.props.y) ? Yb.props.y : cc.top + cc.height + cc.brushBottom - ($b.bottom || 0),
                            width: (0, F.isNumber)(Yb.props.width) ? Yb.props.width : cc.width,
                            startIndex: dc,
                            endIndex: ec,
                            updateId: 'brush-'.concat(fc)
                        });
                    }, Xb.renderReferenceElement = function (Yb, Zb, $b) {
                        if (!Yb)
                            return null;
                        var ac = _ab(Xb).clipPathId, bc = Xb.state, cc = bc.xAxisMap, dc = bc.yAxisMap, ec = bc.offset, fc = Yb.props, gc = fc.xAxisId, hc = fc.yAxisId;
                        return (0, q.cloneElement)(Yb, {
                            key: Yb.key || ''.concat(Zb, '-').concat($b),
                            xAxis: cc[gc],
                            yAxis: dc[hc],
                            viewBox: {
                                x: ec.left,
                                y: ec.top,
                                width: ec.width,
                                height: ec.height
                            },
                            clipPathId: ac
                        });
                    }, Xb.renderActivePoints = function (Yb) {
                        var Zb = Yb.item, $b = Yb.activePoint, ac = Yb.basePoint, bc = Yb.childIndex, cc = Yb.isRange, dc = [], ec = Zb.props.key, fc = Zb.item.props, gc = fc.activeDot, hc = lb(lb({
                                index: bc,
                                dataKey: fc.dataKey,
                                cx: $b.x,
                                cy: $b.y,
                                r: 4,
                                fill: (0, G.getMainColorOfGraphicItem)(Zb.item),
                                strokeWidth: 2,
                                stroke: '#fff',
                                payload: $b.payload,
                                value: $b.value,
                                key: ''.concat(ec, '-activePoint-').concat(bc)
                            }, (0, L.filterProps)(gc)), (0, L.adaptEventHandlers)(gc));
                        return dc.push(Vb.renderActiveDot(gc, hc)), ac ? dc.push(Vb.renderActiveDot(gc, lb(lb({}, hc), {}, {
                            cx: ac.x,
                            cy: ac.y,
                            key: ''.concat(ec, '-basePoint-').concat(bc)
                        }))) : cc && dc.push(null), dc;
                    }, Xb.renderGraphicChild = function (Yb, Zb, $b) {
                        var ac = Xb.filterFormatItem(Yb, Zb, $b);
                        if (!ac)
                            return null;
                        var bc = Xb.getTooltipEventType(), cc = Xb.state, dc = cc.isTooltipActive, ec = cc.tooltipAxis, fc = cc.activeTooltipIndex, gc = cc.activeLabel, hc = Xb.props.children, ic = (0, B.findChildByType)(hc, u.Tooltip.displayName), jc = ac.props, kc = jc.points, lc = jc.isRange, mc = jc.baseLine, nc = ac.item.props, oc = nc.activeDot, pc = !nc.hide && dc && ic && oc && fc >= 0, qc = {};
                        'axis' !== bc && ic && 'click' === ic.props.trigger ? qc = { onClick: (0, G.combineEventHandlers)(Xb.handleItemMouseEnter, null, Yb.props.onCLick) } : 'axis' !== bc && (qc = {
                            onMouseLeave: (0, G.combineEventHandlers)(Xb.handleItemMouseLeave, null, Yb.props.onMouseLeave),
                            onMouseEnter: (0, G.combineEventHandlers)(Xb.handleItemMouseEnter, null, Yb.props.onMouseEnter)
                        });
                        var rc = (0, q.cloneElement)(Yb, lb(lb({}, ac.props), qc));
                        if (pc) {
                            var sc, tc;
                            if (ec.dataKey && !ec.allowDuplicatedCategory) {
                                var uc = 'function' == typeof ec.dataKey ? function (vc) {
                                    return 'function' == typeof ec.dataKey ? ec.dataKey(vc.payload) : null;
                                } : 'payload.'.concat(ec.dataKey.toString());
                                sc = (0, F.findEntryInArray)(kc, uc, gc), tc = lc && mc && (0, F.findEntryInArray)(mc, uc, gc);
                            } else
                                sc = kc[fc], tc = lc && mc && mc[fc];
                            if (!a(n)(sc))
                                return [rc].concat(cb(Xb.renderActivePoints({
                                    item: ac,
                                    activePoint: sc,
                                    basePoint: tc,
                                    childIndex: fc,
                                    isRange: lc
                                })));
                        }
                        return lc ? [
                            rc,
                            null,
                            null
                        ] : [
                            rc,
                            null
                        ];
                    }, Xb.renderCustomized = function (Yb, Zb, $b) {
                        return (0, q.cloneElement)(Yb, lb(lb({ key: 'recharts-customized-'.concat($b) }, Xb.props), Xb.state));
                    }, Xb.uniqueChartId = a(n)(Wb.id) ? (0, F.uniqueId)('recharts') : Wb.id, Xb.clipPathId = ''.concat(Xb.uniqueChartId, '-clip'), Wb.throttleDelay && (Xb.triggeredAfterMouseMove = a(j)(Xb.triggeredAfterMouseMove, Wb.throttleDelay)), Xb.state = {}, Xb;
                }
                return Xb = Vb, (Sb = [
                    {
                        key: 'componentDidMount',
                        value: function () {
                            a(n)(this.props.syncId) || this.addListener();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function (Xb) {
                            a(n)(Xb.syncId) && !a(n)(this.props.syncId) && this.addListener(), !a(n)(Xb.syncId) && a(n)(this.props.syncId) && this.removeListener();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this.clearDeferId(), a(n)(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove();
                        }
                    },
                    {
                        key: 'cancelThrottledTriggerAfterMouseMove',
                        value: function () {
                            'function' == typeof this.triggeredAfterMouseMove.cancel && this.triggeredAfterMouseMove.cancel();
                        }
                    },
                    {
                        key: 'getTooltipEventType',
                        value: function () {
                            var Xb = (0, B.findChildByType)(this.props.children, u.Tooltip.displayName);
                            if (Xb && a(o)(Xb.props.shared)) {
                                var Yb = Xb.props.shared ? 'axis' : 'item';
                                return Jb.indexOf(Yb) >= 0 ? Yb : Hb;
                            }
                            return Hb;
                        }
                    },
                    {
                        key: 'getMouseInfo',
                        value: function (Xb) {
                            if (!this.container)
                                return null;
                            var Yb = (0, E.getOffset)(this.container), Zb = (0, E.calculateChartCoordinate)(Xb, Yb), $b = this.inRange(Zb.chartX, Zb.chartY);
                            if (!$b)
                                return null;
                            var ac = this.state, bc = ac.xAxisMap, cc = ac.yAxisMap;
                            if ('axis' !== this.getTooltipEventType() && bc && cc) {
                                var dc = (0, F.getAnyElementOfObject)(bc).scale, ec = (0, F.getAnyElementOfObject)(cc).scale, fc = dc && dc.invert ? dc.invert(Zb.chartX) : null, gc = ec && ec.invert ? ec.invert(Zb.chartY) : null;
                                return lb(lb({}, Zb), {}, {
                                    xValue: fc,
                                    yValue: gc
                                });
                            }
                            var hc = wb(this.state, this.props.data, this.props.layout, $b);
                            return hc ? lb(lb({}, Zb), hc) : null;
                        }
                    },
                    {
                        key: 'getCursorRectangle',
                        value: function () {
                            var Xb = this.props.layout, Yb = this.state, Zb = Yb.activeCoordinate, $b = Yb.offset, ac = Yb.tooltipAxisBandSize, bc = ac / 2;
                            return {
                                stroke: 'none',
                                fill: '#ccc',
                                x: 'horizontal' === Xb ? Zb.x - bc : $b.left + 0.5,
                                y: 'horizontal' === Xb ? $b.top + 0.5 : Zb.y - bc,
                                width: 'horizontal' === Xb ? ac : $b.width - 1,
                                height: 'horizontal' === Xb ? $b.height - 1 : ac
                            };
                        }
                    },
                    {
                        key: 'getCursorPoints',
                        value: function () {
                            var Xb, Yb, Zb, $b, ac = this.props.layout, bc = this.state, cc = bc.activeCoordinate, dc = bc.offset;
                            if ('horizontal' === ac)
                                Zb = Xb = cc.x, Yb = dc.top, $b = dc.top + dc.height;
                            else if ('vertical' === ac)
                                $b = Yb = cc.y, Xb = dc.left, Zb = dc.left + dc.width;
                            else if (!a(n)(cc.cx) || !a(n)(cc.cy)) {
                                if ('centric' !== ac) {
                                    var ec = cc.cx, fc = cc.cy, gc = cc.radius, hc = cc.startAngle, ic = cc.endAngle;
                                    return {
                                        points: [
                                            (0, I.polarToCartesian)(ec, fc, gc, hc),
                                            (0, I.polarToCartesian)(ec, fc, gc, ic)
                                        ],
                                        cx: ec,
                                        cy: fc,
                                        radius: gc,
                                        startAngle: hc,
                                        endAngle: ic
                                    };
                                }
                                var jc = cc.cx, kc = cc.cy, lc = cc.innerRadius, mc = cc.outerRadius, nc = cc.angle, oc = (0, I.polarToCartesian)(jc, kc, lc, nc), pc = (0, I.polarToCartesian)(jc, kc, mc, nc);
                                Xb = oc.x, Yb = oc.y, Zb = pc.x, $b = pc.y;
                            }
                            return [
                                {
                                    x: Xb,
                                    y: Yb
                                },
                                {
                                    x: Zb,
                                    y: $b
                                }
                            ];
                        }
                    },
                    {
                        key: 'inRange',
                        value: function (Xb, Yb) {
                            var Zb = this.props.layout;
                            if ('horizontal' === Zb || 'vertical' === Zb) {
                                var $b = this.state.offset;
                                return Xb >= $b.left && Xb <= $b.left + $b.width && Yb >= $b.top && Yb <= $b.top + $b.height ? {
                                    x: Xb,
                                    y: Yb
                                } : null;
                            }
                            var ac = this.state, bc = ac.angleAxisMap, cc = ac.radiusAxisMap;
                            if (bc && cc) {
                                var dc = (0, F.getAnyElementOfObject)(bc);
                                return (0, I.inRangeOfSector)({
                                    x: Xb,
                                    y: Yb
                                }, dc);
                            }
                            return null;
                        }
                    },
                    {
                        key: 'parseEventsOfWrapper',
                        value: function () {
                            var Xb = this.props.children, Yb = this.getTooltipEventType(), Zb = (0, B.findChildByType)(Xb, u.Tooltip.displayName), $b = {};
                            return Zb && 'axis' === Yb && ($b = 'click' === Zb.props.trigger ? { onClick: this.handleClick } : {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            }), lb(lb({}, (0, L.adaptEventHandlers)(this.props, this.handleOuterEvent)), $b);
                        }
                    },
                    {
                        key: 'addListener',
                        value: function () {
                            K.eventCenter.on(K.SYNC_EVENT, this.handleReceiveSyncEvent), K.eventCenter.setMaxListeners && K.eventCenter._maxListeners && K.eventCenter.setMaxListeners(K.eventCenter._maxListeners + 1);
                        }
                    },
                    {
                        key: 'removeListener',
                        value: function () {
                            K.eventCenter.removeListener(K.SYNC_EVENT, this.handleReceiveSyncEvent), K.eventCenter.setMaxListeners && K.eventCenter._maxListeners && K.eventCenter.setMaxListeners(K.eventCenter._maxListeners - 1);
                        }
                    },
                    {
                        key: 'triggerSyncEvent',
                        value: function (Xb) {
                            var Yb = this.props.syncId;
                            a(n)(Yb) || K.eventCenter.emit(K.SYNC_EVENT, Yb, this.uniqueChartId, Xb);
                        }
                    },
                    {
                        key: 'applySyncEvent',
                        value: function (Xb) {
                            var Yb = this.props, Zb = Yb.layout, $b = Yb.syncMethod, ac = this.state.updateId, bc = Xb.dataStartIndex, cc = Xb.dataEndIndex;
                            if (a(n)(Xb.dataStartIndex) && a(n)(Xb.dataEndIndex))
                                if (a(n)(Xb.activeTooltipIndex))
                                    this.setState(Xb);
                                else {
                                    var dc = Xb.chartX, ec = Xb.chartY, fc = Xb.activeTooltipIndex, gc = this.state, hc = gc.offset, ic = gc.tooltipTicks;
                                    if (!hc)
                                        return;
                                    if ('function' == typeof $b)
                                        fc = $b(ic, Xb);
                                    else if ('value' === $b) {
                                        fc = -1;
                                        for (var jc = 0; jc < ic.length; jc++)
                                            if (ic[jc].value === Xb.activeLabel) {
                                                fc = jc;
                                                break;
                                            }
                                    }
                                    var kc = lb(lb({}, hc), {}, {
                                            x: hc.left,
                                            y: hc.top
                                        }), lc = Math.min(dc, kc.x + kc.width), mc = Math.min(ec, kc.y + kc.height), nc = ic[fc] && ic[fc].value, oc = vb(this.state, this.props.data, fc), pc = ic[fc] ? {
                                            x: 'horizontal' === Zb ? ic[fc].coordinate : lc,
                                            y: 'horizontal' === Zb ? mc : ic[fc].coordinate
                                        } : qb;
                                    this.setState(lb(lb({}, Xb), {}, {
                                        activeLabel: nc,
                                        activeCoordinate: pc,
                                        activePayload: oc,
                                        activeTooltipIndex: fc
                                    }));
                                }
                            else
                                this.setState(lb({
                                    dataStartIndex: bc,
                                    dataEndIndex: cc
                                }, Pb({
                                    props: this.props,
                                    dataStartIndex: bc,
                                    dataEndIndex: cc,
                                    updateId: ac
                                }, this.state)));
                        }
                    },
                    {
                        key: 'filterFormatItem',
                        value: function (Xb, Yb, Zb) {
                            for (var $b = this.state.formattedGraphicalItems, ac = 0, bc = $b.length; ac < bc; ac++) {
                                var cc = $b[ac];
                                if (cc.item === Xb || cc.props.key === Xb.key || Yb === (0, B.getDisplayName)(cc.item.type) && Zb === cc.childIndex)
                                    return cc;
                            }
                            return null;
                        }
                    },
                    {
                        key: 'renderAxis',
                        value: function (Xb, Yb, Zb, $b) {
                            var ac = this.props, bc = ac.width, cc = ac.height;
                            return a(q).createElement(C.CartesianAxis, O({}, Xb, {
                                className: 'recharts-'.concat(Xb.axisType, ' ').concat(Xb.axisType),
                                key: Yb.key || ''.concat(Zb, '-').concat($b),
                                viewBox: {
                                    x: 0,
                                    y: 0,
                                    width: bc,
                                    height: cc
                                },
                                ticksGenerator: this.axesTicksGenerator
                            }));
                        }
                    },
                    {
                        key: 'renderClipPath',
                        value: function () {
                            var Xb = this.clipPathId, Yb = this.state.offset, Zb = Yb.left, $b = Yb.top, ac = Yb.height, bc = Yb.width;
                            return a(q).createElement('defs', null, a(q).createElement('clipPath', { id: Xb }, a(q).createElement('rect', {
                                x: Zb,
                                y: $b,
                                height: ac,
                                width: bc
                            })));
                        }
                    },
                    {
                        key: 'getXScales',
                        value: function () {
                            var Xb = this.state.xAxisMap;
                            return Xb ? Object.entries(Xb).reduce(function (Yb, Zb) {
                                var $b = N(Zb, 2), ac = $b[0], bc = $b[1];
                                return lb(lb({}, Yb), {}, _ob({}, ac, bc.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getYScales',
                        value: function () {
                            var Xb = this.state.yAxisMap;
                            return Xb ? Object.entries(Xb).reduce(function (Yb, Zb) {
                                var $b = N(Zb, 2), ac = $b[0], bc = $b[1];
                                return lb(lb({}, Yb), {}, _ob({}, ac, bc.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getXScaleByAxisId',
                        value: function (Xb) {
                            var Yb, Zb;
                            return null === (Yb = this.state.xAxisMap) || void 0 === Yb || null === (Zb = Yb[Xb]) || void 0 === Zb ? void 0 : Zb.scale;
                        }
                    },
                    {
                        key: 'getYScaleByAxisId',
                        value: function (Xb) {
                            var Yb, Zb;
                            return null === (Yb = this.state.yAxisMap) || void 0 === Yb || null === (Zb = Yb[Xb]) || void 0 === Zb ? void 0 : Zb.scale;
                        }
                    },
                    {
                        key: 'getItemByXY',
                        value: function (Xb) {
                            var Yb = this.state.formattedGraphicalItems;
                            if (Yb && Yb.length)
                                for (var Zb = 0, $b = Yb.length; Zb < $b; Zb++) {
                                    var ac = Yb[Zb], bc = ac.props, cc = ac.item, dc = (0, B.getDisplayName)(cc.type);
                                    if ('Bar' === dc) {
                                        var ec = (bc.data || []).find(function (fc) {
                                            return (0, A.isInRectangle)(Xb, fc);
                                        });
                                        if (ec)
                                            return {
                                                graphicalItem: ac,
                                                payload: ec
                                            };
                                    } else if ('RadialBar' === dc) {
                                        var fc = (bc.data || []).find(function (gc) {
                                            return (0, I.inRangeOfSector)(Xb, gc);
                                        });
                                        if (fc)
                                            return {
                                                graphicalItem: ac,
                                                payload: fc
                                            };
                                    }
                                }
                            return null;
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var Xb = this;
                            if (!(0, B.validateWidthHeight)(this))
                                return null;
                            var Yb = this.props, Zb = Yb.children, $b = Yb.className, ac = Yb.width, bc = Yb.height, cc = Yb.style, dc = Yb.compact, ec = Yb.title, fc = Yb.desc, gc = P(Yb, [
                                    'children',
                                    'className',
                                    'width',
                                    'height',
                                    'style',
                                    'compact',
                                    'title',
                                    'desc'
                                ]), hc = (0, L.filterProps)(gc), ic = {
                                    CartesianGrid: {
                                        handler: this.renderGrid,
                                        once: !0
                                    },
                                    ReferenceArea: { handler: this.renderReferenceElement },
                                    ReferenceLine: { handler: this.renderReferenceElement },
                                    ReferenceDot: { handler: this.renderReferenceElement },
                                    XAxis: { handler: this.renderXAxis },
                                    YAxis: { handler: this.renderYAxis },
                                    Brush: {
                                        handler: this.renderBrush,
                                        once: !0
                                    },
                                    Bar: { handler: this.renderGraphicChild },
                                    Line: { handler: this.renderGraphicChild },
                                    Area: { handler: this.renderGraphicChild },
                                    Radar: { handler: this.renderGraphicChild },
                                    RadialBar: { handler: this.renderGraphicChild },
                                    Scatter: { handler: this.renderGraphicChild },
                                    Pie: { handler: this.renderGraphicChild },
                                    Funnel: { handler: this.renderGraphicChild },
                                    Tooltip: {
                                        handler: this.renderCursor,
                                        once: !0
                                    },
                                    PolarGrid: {
                                        handler: this.renderPolarGrid,
                                        once: !0
                                    },
                                    PolarAngleAxis: { handler: this.renderPolarAxis },
                                    PolarRadiusAxis: { handler: this.renderPolarAxis },
                                    Customized: { handler: this.renderCustomized }
                                };
                            if (dc)
                                return a(q).createElement(s.Surface, O({}, hc, {
                                    width: ac,
                                    height: bc,
                                    title: ec,
                                    desc: fc
                                }), this.renderClipPath(), (0, B.renderByOrder)(Zb, ic));
                            var jc = this.parseEventsOfWrapper();
                            return a(q).createElement('div', O({
                                className: a(r)('recharts-wrapper', $b),
                                style: lb({
                                    position: 'relative',
                                    cursor: 'default',
                                    width: ac,
                                    height: bc
                                }, cc)
                            }, jc, {
                                ref: function (kc) {
                                    Xb.container = kc;
                                }
                            }), a(q).createElement(s.Surface, O({}, hc, {
                                width: ac,
                                height: bc,
                                title: ec,
                                desc: fc
                            }), this.renderClipPath(), (0, B.renderByOrder)(Zb, ic)), this.renderLegend(), this.renderTooltip());
                        }
                    }
                ]) && U(Xb.prototype, Sb), Tb && U(Xb, Tb), Vb;
            }(q.Component), Cb.displayName = Eb, Cb.defaultProps = lb({
                layout: 'horizontal',
                stackOffset: 'none',
                barCategoryGap: '10%',
                barGap: 4,
                margin: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5
                },
                reverseStackOrder: !1,
                syncMethod: 'index'
            }, Nb), Cb.getDerivedStateFromProps = function (Qb, Rb) {
                var Sb = Qb.data, Tb = Qb.children, Ub = Qb.width, Vb = Qb.height, Wb = Qb.layout, Xb = Qb.stackOffset, Yb = Qb.margin;
                if (a(n)(Rb.updateId)) {
                    var Zb = yb(Qb);
                    return lb(lb(lb({}, Zb), {}, { updateId: 0 }, Pb(lb(lb({ props: Qb }, Zb), {}, { updateId: 0 }), Rb)), {}, {
                        prevData: Sb,
                        prevWidth: Ub,
                        prevHeight: Vb,
                        prevLayout: Wb,
                        prevStackOffset: Xb,
                        prevMargin: Yb,
                        prevChildren: Tb
                    });
                }
                if (Sb !== Rb.prevData || Ub !== Rb.prevWidth || Vb !== Rb.prevHeight || Wb !== Rb.prevLayout || Xb !== Rb.prevStackOffset || !(0, J.shallowEqual)(Yb, Rb.prevMargin)) {
                    var $b = yb(Qb), ac = {
                            chartX: Rb.chartX,
                            chartY: Rb.chartY,
                            isTooltipActive: Rb.isTooltipActive
                        }, bc = lb(lb({}, wb(Rb, Sb, Wb)), {}, { updateId: Rb.updateId + 1 }), cc = lb(lb(lb({}, $b), ac), bc);
                    return lb(lb(lb({}, cc), Pb(lb({ props: Qb }, cc), Rb)), {}, {
                        prevData: Sb,
                        prevWidth: Ub,
                        prevHeight: Vb,
                        prevLayout: Wb,
                        prevStackOffset: Xb,
                        prevMargin: Yb,
                        prevChildren: Tb
                    });
                }
                if (!(0, B.isChildrenEqual)(Tb, Rb.prevChildren)) {
                    var dc = !a(n)(Sb) ? Rb.updateId : Rb.updateId + 1;
                    return lb(lb({ updateId: dc }, Pb(lb(lb({ props: Qb }, Rb), {}, { updateId: dc }), Rb)), {}, { prevChildren: Tb });
                }
                return null;
            }, Cb.renderActiveDot = function (Qb, Rb) {
                var Sb;
                return Sb = (0, q.isValidElement)(Qb) ? (0, q.cloneElement)(Qb, Rb) : a(i)(Qb) ? Qb(Rb) : a(q).createElement(z.Dot, Rb), a(q).createElement(t.Layer, {
                    className: 'recharts-active-dot',
                    key: Rb.key
                }, Sb);
            }, Db;
        };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    e.exports = function (l, m, n) {
        var o = j(l) ? g : h;
        return n && k(l, m, n) && (m = void 0), o(l, i(m, 3));
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = -1, j = null == g ? 0 : g.length; ++i < j;)
            if (!h(g[i], i, g))
                return !1;
        return !0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j = !0;
        return g(h, function (k, l, m) {
            return j = !!i(k, l, m);
        }), j;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')(d('.....'));
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return function (k, l, m) {
            var n = Object(k);
            if (!h(k)) {
                var o = g(l, 3);
                k = i(k), l = function (p) {
                    return o(n[p], p, n);
                };
            }
            var p = j(k, l, m);
            return p > -1 ? n[o ? k[p] : p] : void 0;
        };
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = Math.max;
    e.exports = function (k, l, m) {
        var n = null == k ? 0 : k.length;
        if (!n)
            return -1;
        var o = null == m ? 0 : i(m);
        return o < 0 && (o = j(n + o, 0)), g(k, h(l, 3), o);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        var i = g(h), j = i % 1;
        return i == i ? j ? i - j : i : 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = 1 / 0;
    e.exports = function (i) {
        return i ? (i = g(i)) === h || i === -1 / 0 ? 1.7976931348623157e+308 * (i < 0 ? -1 : 1) : i == i ? i : 0 : 0 === i ? i : 0;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, k = /^0b[01]+$/i, l = /^0o[0-7]+$/i, m = parseInt;
    e.exports = function (n) {
        if ('number' == typeof n)
            return n;
        if (h(n))
            return NaN;
        if (g(n)) {
            var o = 'function' == typeof n.valueOf ? n.valueOf() : n;
            n = g(o) ? o + '' : o;
        }
        if ('string' != typeof n)
            return 0 === n ? n : +n;
        n = n.replace(i, '');
        var p = k.test(n);
        return p || l.test(n) ? m(n.slice(2), p ? 2 : 8) : j.test(n) ? NaN : +n;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i, j, k) {
        var l = !0, m = !0;
        if ('function' != typeof i)
            throw new TypeError('Expected a function');
        return h(k) && (l = 'leading' in k ? !!k.leading : l, m = 'trailing' in k ? !!k.trailing : m), g(i, j, {
            leading: l,
            maxWait: j,
            trailing: m
        });
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = Math.max, k = Math.min;
    e.exports = function (l, m, n) {
        var o, p, q, r, s, t, u = 0, v = !1, w = !1, x = !0;
        if ('function' != typeof l)
            throw new TypeError('Expected a function');
        function y(z) {
            var A = o, B = p;
            return o = p = void 0, u = z, r = l.apply(B, A);
        }
        function B(C) {
            return u = C, s = setTimeout(_E, m), v ? y(C) : r;
        }
        function C(D) {
            var E = D - t;
            return void 0 === t || E >= m || E < 0 || w && D - u >= q;
        }
        function _E() {
            var F = h();
            if (C(F))
                return _G(F);
            s = setTimeout(_E, function (G) {
                var H = m - (G - t);
                return w ? k(H, q - (G - u)) : H;
            }(F));
        }
        function _G(H) {
            return s = void 0, x && o ? y(H) : (o = p = void 0, r);
        }
        function H() {
            var I = h(), J = C(I);
            if (o = arguments, p = this, t = I, J) {
                if (void 0 === s)
                    return B(t);
                if (w)
                    return clearTimeout(s), s = setTimeout(_E, m), y(t);
            }
            return void 0 === s && (s = setTimeout(_E, m)), r;
        }
        return m = i(m) || 0, J(B) && (v = !!B.leading, q = (w = 'maxWait' in B) ? j(i(B.maxWait) || 0, m) : q, x = 'trailing' in B ? !!B.trailing : x), H.cancel = function () {
            void 0 !== s && clearTimeout(s), u = 0, o = t = p = s = void 0;
        }, H.flush = function () {
            return void 0 === s ? r : _G(h());
        }, H;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function () {
        return g.Date.now();
    };
}), d.register('.....', function (e, f) {
    var g = d('.....')();
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return function (k, l, m) {
            return m && 'number' != typeof m && h(k, l, m) && (l = m = void 0), k = i(k), void 0 === l ? (l = k, k = 0) : l = i(l), m = void 0 === m ? k < l ? 1 : -1 : i(m), g(k, l, m, j);
        };
    };
}), d.register('.....', function (e, f) {
    var g = Math.ceil, h = Math.max;
    e.exports = function (i, j, k, l) {
        for (var m = -1, n = h(g((j - i) / (k || 1)), 0), o = Array(n); n--;)
            o[l ? n : ++m] = i, i += k;
        return o;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    e.exports = function (i) {
        return !0 === i || !1 === i || h(i) && '[object Boolean]' == g(i);
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Tooltip', function () {
        return _I;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    d('.....');
    var k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    function p(q) {
        return p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (r) {
            return typeof r;
        } : function (r) {
            return r && 'function' == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
        }, p(q);
    }
    function q(r, s) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(r);
            s && (u = u.filter(function (v) {
                return Object.getOwnPropertyDescriptor(r, v).enumerable;
            })), t.push.apply(t, u);
        }
        return t;
    }
    function t(u) {
        for (var v = 1; v < arguments.length; v++) {
            var w = null != arguments[v] ? arguments[v] : {};
            v % 2 ? q(Object(w), !0).forEach(function (x) {
                _w(u, x, w[x]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : q(Object(w)).forEach(function (x) {
                Object.defineProperty(u, x, Object.getOwnPropertyDescriptor(w, x));
            });
        }
        return u;
    }
    function _w(x, y, z) {
        return y in x ? Object.defineProperty(x, y, {
            value: z,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : x[y] = z, x;
    }
    function x(y, z) {
        if (!(y instanceof z))
            throw new TypeError('Cannot call a class as a function');
    }
    function y(z, A) {
        for (var B = 0; B < A.length; B++) {
            var C = A[B];
            C.enumerable = C.enumerable || !1, C.configurable = !0, 'value' in C && (C.writable = !0), Object.defineProperty(z, C.key, C);
        }
    }
    function B(C, D) {
        return B = Object.setPrototypeOf || function (E, F) {
            return E.__proto__ = F, E;
        }, B(C, D);
    }
    function C(D) {
        var E = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (D) {
                return !1;
            }
        }();
        return function () {
            var F, G = _F(D);
            if (E) {
                var H = _F(this).constructor;
                F = Reflect.construct(G, arguments, H);
            } else
                F = G.apply(this, arguments);
            return _E(this, F);
        };
    }
    function _E(F, G) {
        return !G || 'object' !== p(G) && 'function' != typeof G ? function (H) {
            if (void 0 === H)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return H;
        }(F) : G;
    }
    function _F(G) {
        return _F = Object.setPrototypeOf ? Object.getPrototypeOf : function (H) {
            return H.__proto__ || Object.getPrototypeOf(H);
        }, _F(G);
    }
    var G = 'recharts-tooltip-wrapper';
    function H(I) {
        return I.dataKey;
    }
    var _I = function (J) {
        !function (K, L) {
            if ('function' != typeof L && null !== L)
                throw new TypeError('Super expression must either be null or a function');
            K.prototype = Object.create(L && L.prototype, {
                constructor: {
                    value: K,
                    writable: !0,
                    configurable: !0
                }
            }), L && B(K, L);
        }(p, J);
        var K, L, M, N = C(p);
        function O() {
            var P;
            x(this, O);
            for (var Q = arguments.length, R = new Array(Q), S = 0; S < Q; S++)
                R[S] = arguments[S];
            return (P = N.call.apply(N, [this].concat(R))).state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                }
            }, P.wrapperNode = void 0, P.getTranslate = function (T) {
                var U = T.key, V = T.tooltipDimension, W = T.viewBoxDimension, X = P.props, Y = X.allowEscapeViewBox, Z = X.coordinate, $ = X.offset, ab = X.position, bb = X.viewBox;
                if (ab && (0, o.isNumber)(ab[U]))
                    return ab[U];
                var cb = Z[U] - V - $, db = Z[U] + $;
                return Y[U] ? db : Z[U] + V + $ > bb[U] + W ? Math.max(cb, bb[U]) : Math.max(db, bb[U]);
            }, P;
        }
        return R = O, (S = [
            {
                key: 'componentDidMount',
                value: function () {
                    this.updateBBox();
                }
            },
            {
                key: 'componentDidUpdate',
                value: function () {
                    this.updateBBox();
                }
            },
            {
                key: 'updateBBox',
                value: function () {
                    var T = this.state, U = T.boxWidth, V = T.boxHeight;
                    if (T.dismissed ? (this.wrapperNode.blur(), this.props.coordinate.x === this.state.dismissedAtCoordinate.x && this.props.coordinate.y === this.state.dismissedAtCoordinate.y || this.setState({ dismissed: !1 })) : this.wrapperNode.focus({ preventScroll: !0 }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var W = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(W.width - U) > 1 || Math.abs(W.height - V) > 1) && this.setState({
                            boxWidth: W.width,
                            boxHeight: W.height
                        });
                    } else
                        -1 === U && -1 === V || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        });
                }
            },
            {
                key: 'render',
                value: function () {
                    var T, U, V, W = this, X = this.props, Y = X.payload, Z = X.isAnimationActive, $ = X.animationDuration, ab = X.animationEasing, bb = X.filterNull, cb = function (db, eb) {
                            return !0 === db ? P(i)(eb, H) : P(h)(db) ? P(i)(eb, db) : eb;
                        }(X.payloadUniqBy, bb && Y && Y.length ? Y.filter(function (db) {
                            return !P(g)(db.value);
                        }) : Y), db = cb && cb.length, eb = this.props, fb = eb.content, gb = eb.viewBox, hb = eb.coordinate, ib = eb.position, jb = eb.active, kb = eb.wrapperStyle, lb = t({
                            pointerEvents: 'none',
                            visibility: !this.state.dismissed && jb && db ? 'visible' : 'hidden',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }, kb);
                    if (ib && (0, o.isNumber)(ib.x) && (0, o.isNumber)(ib.y))
                        U = ib.x, V = ib.y;
                    else {
                        var mb = this.state, nb = mb.boxWidth, ob = mb.boxHeight;
                        nb > 0 && ob > 0 && hb ? (U = this.getTranslate({
                            key: 'x',
                            tooltipDimension: nb,
                            viewBoxDimension: gb.width
                        }), V = this.getTranslate({
                            key: 'y',
                            tooltipDimension: ob,
                            viewBoxDimension: gb.height
                        })) : lb.visibility = 'hidden';
                    }
                    lb = t(t({}, (0, k.translateStyle)({ transform: this.props.useTranslate3d ? 'translate3d('.concat(U, 'px, ').concat(V, 'px, 0)') : 'translate('.concat(U, 'px, ').concat(V, 'px)') })), lb), Z && jb && (lb = t(t({}, (0, k.translateStyle)({ transition: 'transform '.concat($, 'ms ').concat(ab) })), lb));
                    var pb = P(l)(G, (_w(T = {}, ''.concat(G, '-right'), (0, o.isNumber)(U) && hb && (0, o.isNumber)(hb.x) && U >= hb.x), _w(T, ''.concat(G, '-left'), (0, o.isNumber)(U) && hb && (0, o.isNumber)(hb.x) && U < hb.x), _w(T, ''.concat(G, '-bottom'), (0, o.isNumber)(V) && hb && (0, o.isNumber)(hb.y) && V >= hb.y), _w(T, ''.concat(G, '-top'), (0, o.isNumber)(V) && hb && (0, o.isNumber)(hb.y) && V < hb.y), T));
                    return P(j).createElement('div', {
                        tabIndex: -1,
                        role: 'dialog',
                        onKeyDown: function (qb) {
                            'Escape' === qb.key && W.setState({
                                dismissed: !0,
                                dismissedAtCoordinate: t(t({}, W.state.dismissedAtCoordinate), {}, {
                                    x: W.props.coordinate.x,
                                    y: W.props.coordinate.y
                                })
                            });
                        },
                        className: pb,
                        style: lb,
                        ref: function (qb) {
                            W.wrapperNode = qb;
                        }
                    }, function (qb, rb) {
                        return P(j).isValidElement(qb) ? P(j).cloneElement(qb, rb) : P(h)(qb) ? P(j).createElement(qb, rb) : P(j).createElement(m.DefaultTooltipContent, rb);
                    }(fb, t(t({}, this.props), {}, { payload: cb })));
                }
            }
        ]) && y(R.prototype, S), M && y(R, M), O;
    }(j.PureComponent);
    _I.displayName = 'Tooltip', _I.defaultProps = {
        active: !1,
        allowEscapeViewBox: {
            x: !1,
            y: !1
        },
        offset: 10,
        viewBox: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0
        },
        coordinate: {
            x: 0,
            y: 0
        },
        cursorStyle: {},
        separator: ' : ',
        wrapperStyle: {},
        contentStyle: {},
        itemStyle: {},
        labelStyle: {},
        cursor: !0,
        trigger: 'hover',
        isAnimationActive: !n.Global.isSsr,
        animationEasing: 'ease',
        animationDuration: 400,
        filterNull: !0,
        useTranslate3d: !1
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'DefaultTooltipContent', function () {
        return _I;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function m(n) {
        return m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (o) {
            return typeof o;
        } : function (o) {
            return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
        }, m(n);
    }
    function n(o, p) {
        return function (q) {
            if (Array.isArray(q))
                return q;
        }(o) || function (q, r) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(q)))
                return;
            var s = [], t = !0, u = !1, v = void 0;
            try {
                for (var w, x = q[Symbol.iterator](); !(t = (w = x.next()).done) && (s.push(w.value), !r || s.length !== r); t = !0);
            } catch (q) {
                u = !0, v = q;
            } finally {
                try {
                    t || null == x.return || x.return();
                } finally {
                    if (u)
                        throw v;
                }
            }
            return s;
        }(o, p) || function (q, r) {
            if (!q)
                return;
            if ('string' == typeof q)
                return _o(q, r);
            var s = Object.prototype.toString.call(q).slice(8, -1);
            'Object' === s && q.constructor && (s = q.constructor.name);
            if ('Map' === s || 'Set' === s)
                return Array.from(q);
            if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
                return _o(q, r);
        }(o, p) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _o(p, q) {
        (null == q || q > p.length) && (q = p.length);
        for (var r = 0, s = new Array(q); r < q; r++)
            s[r] = p[r];
        return s;
    }
    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function (w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }
    function u(v) {
        for (var w = 1; w < arguments.length; w++) {
            var x = null != arguments[w] ? arguments[w] : {};
            w % 2 ? r(Object(x), !0).forEach(function (y) {
                _x(v, y, x[y]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : r(Object(x)).forEach(function (y) {
                Object.defineProperty(v, y, Object.getOwnPropertyDescriptor(x, y));
            });
        }
        return v;
    }
    function _x(y, z, A) {
        return z in y ? Object.defineProperty(y, z, {
            value: A,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[z] = A, y;
    }
    function y(z, A) {
        if (!(z instanceof A))
            throw new TypeError('Cannot call a class as a function');
    }
    function z(A, B) {
        for (var C = 0; C < B.length; C++) {
            var D = B[C];
            D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(A, D.key, D);
        }
    }
    function C(D, E) {
        return C = Object.setPrototypeOf || function (F, G) {
            return F.__proto__ = G, F;
        }, C(D, E);
    }
    function D(E) {
        var F = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (E) {
                return !1;
            }
        }();
        return function () {
            var G, H = _G(E);
            if (F) {
                var I = _G(this).constructor;
                G = Reflect.construct(H, arguments, I);
            } else
                G = H.apply(this, arguments);
            return _F(this, G);
        };
    }
    function _F(G, H) {
        return !H || 'object' !== m(H) && 'function' != typeof H ? function (I) {
            if (void 0 === I)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return I;
        }(G) : H;
    }
    function _G(H) {
        return _G = Object.setPrototypeOf ? Object.getPrototypeOf : function (I) {
            return I.__proto__ || Object.getPrototypeOf(I);
        }, _G(H);
    }
    function H(I) {
        return a(i)(I) && (0, l.isNumOrStr)(I[0]) && (0, l.isNumOrStr)(I[1]) ? I.join(' ~ ') : I;
    }
    var _I = function (J) {
        !function (K, L) {
            if ('function' != typeof L && null !== L)
                throw new TypeError('Super expression must either be null or a function');
            K.prototype = Object.create(L && L.prototype, {
                constructor: {
                    value: K,
                    writable: !0,
                    configurable: !0
                }
            }), L && C(K, L);
        }(m, J);
        var K, L, M, N = D(m);
        function O() {
            return y(this, O), N.apply(this, arguments);
        }
        return K = O, (L = [
            {
                key: 'renderContent',
                value: function () {
                    var P = this.props, Q = P.payload, R = P.separator, S = P.formatter, T = P.itemStyle, U = P.itemSorter;
                    if (Q && Q.length) {
                        var V = (U ? a(h)(Q, U) : Q).map(function (W, X) {
                            if ('none' === W.type)
                                return null;
                            var Y = u({
                                    display: 'block',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: W.color || '#000'
                                }, T), Z = W.formatter || S || H, $ = W.value, ab = W.name;
                            if (Z && null != $ && null != ab) {
                                var bb = Z($, ab, W, X, Q);
                                if (Array.isArray(bb)) {
                                    var cb = n(bb, 2);
                                    $ = cb[0], ab = cb[1];
                                } else
                                    $ = bb;
                            }
                            return a(j).createElement('li', {
                                className: 'recharts-tooltip-item',
                                key: 'tooltip-item-'.concat(X),
                                style: Y
                            }, (0, l.isNumOrStr)(ab) ? a(j).createElement('span', { className: 'recharts-tooltip-item-name' }, ab) : null, (0, l.isNumOrStr)(ab) ? a(j).createElement('span', { className: 'recharts-tooltip-item-separator' }, R) : null, a(j).createElement('span', { className: 'recharts-tooltip-item-value' }, $), a(j).createElement('span', { className: 'recharts-tooltip-item-unit' }, W.unit || ''));
                        });
                        return a(j).createElement('ul', {
                            className: 'recharts-tooltip-item-list',
                            style: {
                                padding: 0,
                                margin: 0
                            }
                        }, V);
                    }
                    return null;
                }
            },
            {
                key: 'render',
                value: function () {
                    var P = this.props, Q = P.wrapperClassName, R = P.contentStyle, S = P.labelClassName, T = P.labelStyle, U = P.label, V = P.labelFormatter, W = P.payload, X = u({
                            margin: 0,
                            padding: 10,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            whiteSpace: 'nowrap'
                        }, R), Y = u({ margin: 0 }, T), Z = !a(g)(U), $ = Z ? U : '', ab = a(k)('recharts-default-tooltip', Q), bb = a(k)('recharts-tooltip-label', S);
                    return Z && V && null != W && ($ = V(U, W)), a(j).createElement('div', {
                        className: ab,
                        style: X
                    }, a(j).createElement('p', {
                        className: bb,
                        style: Y
                    }, a(j).isValidElement($) ? $ : ''.concat($)), this.renderContent());
                }
            }
        ]) && z(K.prototype, L), M && z(K, M), O;
    }(j.PureComponent);
    _I.displayName = 'DefaultTooltipContent', _I.defaultProps = {
        separator: ' : ',
        contentStyle: {},
        itemStyle: {},
        labelStyle: {}
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Curve', function () {
        return _T;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....');
    function x(y) {
        return x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (z) {
            return typeof z;
        } : function (z) {
            return z && 'function' == typeof Symbol && z.constructor === Symbol && z !== Symbol.prototype ? 'symbol' : typeof z;
        }, x(y);
    }
    function y() {
        return y = Object.assign || function (z) {
            for (var A = 1; A < arguments.length; A++) {
                var B = arguments[A];
                for (var C in B)
                    Object.prototype.hasOwnProperty.call(B, C) && (z[C] = B[C]);
            }
            return z;
        }, y.apply(this, arguments);
    }
    function z(A, B) {
        var C = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(A);
            B && (D = D.filter(function (E) {
                return Object.getOwnPropertyDescriptor(A, E).enumerable;
            })), C.push.apply(C, D);
        }
        return C;
    }
    function C(D) {
        for (var E = 1; E < arguments.length; E++) {
            var F = null != arguments[E] ? arguments[E] : {};
            E % 2 ? z(Object(F), !0).forEach(function (G) {
                _F(D, G, F[G]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(F)) : z(Object(F)).forEach(function (G) {
                Object.defineProperty(D, G, Object.getOwnPropertyDescriptor(F, G));
            });
        }
        return D;
    }
    function _F(G, H, I) {
        return H in G ? Object.defineProperty(G, H, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : G[H] = I, G;
    }
    function G(H, I) {
        if (!(H instanceof I))
            throw new TypeError('Cannot call a class as a function');
    }
    function H(I, J) {
        for (var K = 0; K < J.length; K++) {
            var L = J[K];
            L.enumerable = L.enumerable || !1, L.configurable = !0, 'value' in L && (L.writable = !0), Object.defineProperty(I, L.key, L);
        }
    }
    function K(L, M) {
        return K = Object.setPrototypeOf || function (N, O) {
            return N.__proto__ = O, N;
        }, K(L, M);
    }
    function L(M) {
        var N = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (M) {
                return !1;
            }
        }();
        return function () {
            var O, P = _O(M);
            if (N) {
                var Q = _O(this).constructor;
                O = Reflect.construct(P, arguments, Q);
            } else
                O = P.apply(this, arguments);
            return _N(this, O);
        };
    }
    function _N(O, P) {
        return !P || 'object' !== x(P) && 'function' != typeof P ? function (Q) {
            if (void 0 === Q)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return Q;
        }(O) : P;
    }
    function _O(P) {
        return _O = Object.setPrototypeOf ? Object.getPrototypeOf : function (Q) {
            return Q.__proto__ || Object.getPrototypeOf(Q);
        }, _O(P);
    }
    var P = {
            curveBasisClosed: m.default,
            curveBasisOpen: n.default,
            curveBasis: l.default,
            curveLinearClosed: p.default,
            curveLinear: o.default,
            curveMonotoneX: q.monotoneX,
            curveMonotoneY: q.monotoneY,
            curveNatural: r.default,
            curveStep: s.default,
            curveStepAfter: s.stepAfter,
            curveStepBefore: s.stepBefore
        }, Q = function (R) {
            return R.x === +R.x && R.y === +R.y;
        }, R = function (S) {
            return S.x;
        }, S = function (T) {
            return T.y;
        }, _T = function (U) {
            !function (V, W) {
                if ('function' != typeof W && null !== W)
                    throw new TypeError('Super expression must either be null or a function');
                V.prototype = Object.create(W && W.prototype, {
                    constructor: {
                        value: V,
                        writable: !0,
                        configurable: !0
                    }
                }), W && K(V, W);
            }(m, U);
            var V, W, X, Y = L(m);
            function Z() {
                return G(this, Z), Y.apply(this, arguments);
            }
            return V = Z, (W = [
                {
                    key: 'getPath',
                    value: function () {
                        var $, ab = this.props, bb = ab.type, cb = ab.points, db = ab.baseLine, eb = ab.layout, fb = ab.connectNulls, gb = function (hb, ib) {
                                if (a(i)(hb))
                                    return hb;
                                var jb = 'curve'.concat(a(h)(hb));
                                return 'curveMonotone' === jb && ib ? P[''.concat(jb).concat('vertical' === ib ? 'Y' : 'X')] : P[jb] || o.default;
                            }(bb, eb), hb = fb ? cb.filter(function (ib) {
                                return Q(ib);
                            }) : cb;
                        if (a(g)(db)) {
                            var ib = fb ? db.filter(function (jb) {
                                    return Q(jb);
                                }) : db, jb = hb.map(function (kb, lb) {
                                    return C(C({}, kb), {}, { base: ib[lb] });
                                });
                            return ($ = 'vertical' === eb ? (0, k.default)().y(S).x1(R).x0(function (kb) {
                                return kb.base.x;
                            }) : (0, k.default)().x(R).y1(S).y0(function (kb) {
                                return kb.base.y;
                            })).defined(Q).curve(gb), $(jb);
                        }
                        return ($ = 'vertical' === eb && (0, w.isNumber)(db) ? (0, k.default)().y(S).x1(R).x0(db) : (0, w.isNumber)(db) ? (0, k.default)().x(R).y1(S).y0(db) : (0, t.default)().x(R).y(S)).defined(Q).curve(gb), $(hb);
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var $ = this.props, ab = $.className, bb = $.points, cb = $.path, db = $.pathRef;
                        if (!(bb && bb.length || cb))
                            return null;
                        var eb = bb && bb.length ? this.getPath() : cb;
                        return a(j).createElement('path', y({}, (0, v.filterProps)(this.props), (0, v.adaptEventHandlers)(this.props), {
                            className: a(u)('recharts-curve', ab),
                            d: eb,
                            ref: db
                        }));
                    }
                }
            ]) && H(V.prototype, W), X && H(V, X), Z;
        }(j.PureComponent);
    _T.defaultProps = {
        type: 'linear',
        points: [],
        connectNulls: !1
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function _m(n, o, p) {
        var q = null, r = (0, i.default)(!0), s = null, t = j.default, u = null;
        function v(w) {
            var x, y, z, A, B, C = (w = (0, h.default)(w)).length, D = !1, E = new Array(C), F = new Array(C);
            for (null == s && (u = t(B = (0, g.default)())), x = 0; x <= C; ++x) {
                if (!(x < C && _m(v = w[x], x, w)) === D)
                    if (D = !D)
                        y = x, u.areaStart(), u.lineStart();
                    else {
                        for (u.lineEnd(), u.lineStart(), z = x - 1; z >= y; --z)
                            u.point(E[z], F[z]);
                        u.lineEnd(), u.areaEnd();
                    }
                D && (E[x] = +n(v, x, w), F[x] = +o(v, x, w), u.point(q ? +q(v, x, w) : E[x], p ? +p(v, x, w) : F[x]));
            }
            if (B)
                return u = null, B + '' || null;
        }
        function F() {
            return (0, y.default)().defined(_m).curve(t).context(s);
        }
        return n = 'function' == typeof n ? n : void 0 === n ? z.x : (0, i.default)(+n), o = 'function' == typeof o ? o : void 0 === o ? (0, i.default)(0) : (0, i.default)(+o), p = 'function' == typeof p ? p : void 0 === p ? z.y : (0, i.default)(+p), v.x = function (G) {
            return arguments.length ? (n = 'function' == typeof G ? G : (0, i.default)(+G), q = null, v) : n;
        }, v.x0 = function (G) {
            return arguments.length ? (n = 'function' == typeof G ? G : (0, i.default)(+G), v) : n;
        }, v.x1 = function (G) {
            return arguments.length ? (q = null == G ? null : 'function' == typeof G ? G : (0, i.default)(+G), v) : q;
        }, v.y = function (G) {
            return arguments.length ? (o = 'function' == typeof G ? G : (0, i.default)(+G), p = null, v) : o;
        }, v.y0 = function (G) {
            return arguments.length ? (o = 'function' == typeof G ? G : (0, i.default)(+G), v) : o;
        }, v.y1 = function (G) {
            return arguments.length ? (p = null == G ? null : 'function' == typeof G ? G : (0, i.default)(+G), v) : p;
        }, v.lineX0 = v.lineY0 = function () {
            return F().x(n).y(o);
        }, v.lineY1 = function () {
            return F().x(n).y(p);
        }, v.lineX1 = function () {
            return F().x(q).y(o);
        }, v.defined = function (G) {
            return arguments.length ? (_m = 'function' == typeof G ? G : (0, i.default)(!!G), v) : _m;
        }, v.curve = function (G) {
            return arguments.length ? (t = G, null != s && (u = t(s)), v) : t;
        }, v.context = function (G) {
            return arguments.length ? (null == G ? s = u = null : u = t(s = G), v) : s;
        }, v;
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        this._context = h;
    }
    function h(i) {
        return new g(i);
    }
    b(e.exports, 'default', function () {
        return h;
    }), g.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function (i, j) {
            switch (i = +i, j = +j, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(i, j) : this._context.moveTo(i, j);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(i, j);
            }
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function _l(m, n) {
        var o = (0, i.default)(!0), p = null, q = j.default, r = null;
        function s(t) {
            var u, v, w, x = (t = (0, h.default)(t)).length, y = !1;
            for (null == p && (r = _l(s = (0, g.default)())), u = 0; u <= x; ++u)
                !(u < x && o(v = t[u], u, t)) === y && ((y = !y) ? r.lineStart() : r.lineEnd()), y && r.point(+m(v, u, t), +n(v, u, t));
            if (s)
                return r = null, s + '' || null;
        }
        return m = 'function' == typeof m ? m : void 0 === m ? v.x : (0, i.default)(m), n = 'function' == typeof n ? n : void 0 === n ? v.y : (0, i.default)(n), s.x = function (y) {
            return arguments.length ? (m = 'function' == typeof y ? y : (0, i.default)(+y), s) : m;
        }, s.y = function (y) {
            return arguments.length ? (n = 'function' == typeof y ? y : (0, i.default)(+y), s) : n;
        }, s.defined = function (y) {
            return arguments.length ? (o = 'function' == typeof y ? y : (0, i.default)(!!y), s) : o;
        }, s.curve = function (y) {
            return arguments.length ? (_l = y, null != p && (r = _l(p)), s) : _l;
        }, s.context = function (y) {
            return arguments.length ? (null == y ? p = r = null : r = _l(p = y), s) : p;
        }, s;
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return h[0];
    }
    function h(i) {
        return i[1];
    }
    b(e.exports, 'x', function () {
        return g;
    }), b(e.exports, 'y', function () {
        return h;
    });
}), d.register('.....', function (e, f) {
    function g(h, i, j) {
        h._context.bezierCurveTo((2 * h._x0 + h._x1) / 3, (2 * h._y0 + h._y1) / 3, (h._x0 + 2 * h._x1) / 3, (h._y0 + 2 * h._y1) / 3, (h._x0 + 4 * h._x1 + i) / 6, (h._y0 + 4 * h._y1 + j) / 6);
    }
    function h(i) {
        this._context = i;
    }
    function i(j) {
        return new h(j);
    }
    b(e.exports, 'point', function () {
        return g;
    }), b(e.exports, 'default', function () {
        return i;
    }), h.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function () {
            switch (this._point) {
            case 3:
                g(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function (j, k) {
            switch (j = +j, k = +k, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(j, k) : this._context.moveTo(j, k);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                g(this, j, k);
            }
            this._x0 = this._x1, this._x1 = j, this._y0 = this._y1, this._y1 = k;
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....');
    function i(j) {
        this._context = j;
    }
    function _j(k) {
        return new i(k);
    }
    i.prototype = {
        areaStart: g.default,
        areaEnd: g.default,
        lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
        },
        lineEnd: function () {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
            }
        },
        point: function (k, l) {
            switch (k = +k, l = +l, this._point) {
            case 0:
                this._point = 1, this._x2 = k, this._y2 = l;
                break;
            case 1:
                this._point = 2, this._x3 = k, this._y3 = l;
                break;
            case 2:
                this._point = 3, this._x4 = k, this._y4 = l, this._context.moveTo((this._x0 + 4 * this._x1 + k) / 6, (this._y0 + 4 * this._y1 + l) / 6);
                break;
            default:
                (0, h.point)(this, k, l);
            }
            this._x0 = this._x1, this._x1 = k, this._y0 = this._y1, this._y1 = l;
        }
    };
}), d.register('.....', function (e, f) {
    function g() {
    }
    b(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....');
    function h(i) {
        this._context = i;
    }
    function _i(j) {
        return new h(j);
    }
    h.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function (j, k) {
            switch (j = +j, k = +k, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var l = (this._x0 + 4 * this._x1 + j) / 6, m = (this._y0 + 4 * this._y1 + k) / 6;
                this._line ? this._context.lineTo(l, m) : this._context.moveTo(l, m);
                break;
            case 3:
                this._point = 4;
            default:
                (0, g.point)(this, j, k);
            }
            this._x0 = this._x1, this._x1 = j, this._y0 = this._y1, this._y1 = k;
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....');
    function h(i) {
        this._context = i;
    }
    function _i(j) {
        return new h(j);
    }
    h.prototype = {
        areaStart: g.default,
        areaEnd: g.default,
        lineStart: function () {
            this._point = 0;
        },
        lineEnd: function () {
            this._point && this._context.closePath();
        },
        point: function (j, k) {
            j = +j, k = +k, this._point ? this._context.lineTo(j, k) : (this._point = 1, this._context.moveTo(j, k));
        }
    };
}), d.register('.....', function (e, f) {
    function g(h) {
        return h < 0 ? -1 : 1;
    }
    function h(i, j, k) {
        var l = i._x1 - i._x0, m = j - i._x1, n = (i._y1 - i._y0) / (h || m < 0 && -0), o = (k - i._y1) / (m || h < 0 && -0), p = (n * m + o * h) / (h + m);
        return (g(n) + g(o)) * Math.min(Math.abs(n), Math.abs(o), 0.5 * Math.abs(p)) || 0;
    }
    function n(o, p) {
        var q = o._x1 - o._x0;
        return q ? (3 * (o._y1 - o._y0) / q - p) / 2 : p;
    }
    function p(q, r, s) {
        var t = q._x0, u = q._y0, v = q._x1, w = q._y1, x = (n - g) / 3;
        q._context.bezierCurveTo(g + x, h + x * r, n - x, p - x * s, n, p);
    }
    function v(w) {
        this._context = w;
    }
    function w(x) {
        this._context = new _x(x);
    }
    function _x(y) {
        this._context = y;
    }
    function y(z) {
        return new v(z);
    }
    function z(A) {
        return new w(A);
    }
    b(e.exports, 'monotoneX', function () {
        return y;
    }), b(e.exports, 'monotoneY', function () {
        return z;
    }), v.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
        },
        lineEnd: function () {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                p(this, this._t0, n(this, this._t0));
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function (A, B) {
            var C = NaN;
            if (B = +B, (A = +A) !== this._x1 || B !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(A, B) : this._context.moveTo(A, B);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, p(this, n(this, C = h(this, A, B)), C);
                    break;
                default:
                    p(this, this._t0, C = h(this, A, B));
                }
                this._x0 = this._x1, this._x1 = A, this._y0 = this._y1, this._y1 = B, this._t0 = C;
            }
        }
    }, (w.prototype = Object.create(v.prototype)).point = function (A, B) {
        v.prototype.point.call(this, B, A);
    }, _x.prototype = {
        moveTo: function (A, B) {
            this._context.moveTo(B, A);
        },
        closePath: function () {
            this._context.closePath();
        },
        lineTo: function (A, B) {
            this._context.lineTo(B, A);
        },
        bezierCurveTo: function (A, B, C, D, E, F) {
            this._context.bezierCurveTo(B, A, D, C, F, E);
        }
    };
}), d.register('.....', function (e, f) {
    function g(h) {
        this._context = h;
    }
    function h(i) {
        var j, k, l = i.length - 1, m = new Array(g), n = new Array(g), o = new Array(g);
        for (h[0] = 0, n[0] = 2, o[0] = i[0] + 2 * i[1], j = 1; j < g - 1; ++j)
            h[j] = 1, n[j] = 4, o[j] = 4 * i[j] + 2 * i[j + 1];
        for (h[g - 1] = 2, n[g - 1] = 7, o[g - 1] = 8 * i[g - 1] + i[g], j = 1; j < g; ++j)
            k = h[j] / n[j - 1], n[j] -= k, o[j] -= k * o[j - 1];
        for (h[g - 1] = o[g - 1] / n[g - 1], j = g - 2; j >= 0; --j)
            h[j] = (o[j] - h[j + 1]) / n[j];
        for (n[g - 1] = (i[g] + h[g - 1]) / 2, j = 0; j < g - 1; ++j)
            n[j] = 2 * i[j + 1] - h[j + 1];
        return [
            h,
            n
        ];
    }
    function o(p) {
        return new g(p);
    }
    j(e.exports, 'default', function () {
        return o;
    }), g.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._x = [], this._y = [];
        },
        lineEnd: function () {
            var p = this._x, q = this._y, r = p.length;
            if (r)
                if (this._line ? this._context.lineTo(p[0], q[0]) : this._context.moveTo(p[0], q[0]), 2 === r)
                    this._context.lineTo(p[1], q[1]);
                else
                    for (var s = h(p), t = h(q), u = 0, v = 1; v < r; ++u, ++v)
                        this._context.bezierCurveTo(s[0][u], t[0][u], s[1][u], t[1][u], p[v], q[v]);
            (this._line || 0 !== this._line && 1 === r) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
        },
        point: function (p, q) {
            this._x.push(+p), this._y.push(+q);
        }
    };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        this._context = h, this._t = i;
    }
    function h(i) {
        return new g(i, 0.5);
    }
    function i(j) {
        return new g(j, 0);
    }
    function j(k) {
        return new g(k, 1);
    }
    b(e.exports, 'default', function () {
        return h;
    }), b(e.exports, 'stepBefore', function () {
        return i;
    }), b(e.exports, 'stepAfter', function () {
        return j;
    }), g.prototype = {
        areaStart: function () {
            this._line = 0;
        },
        areaEnd: function () {
            this._line = NaN;
        },
        lineStart: function () {
            this._x = this._y = NaN, this._point = 0;
        },
        lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
        },
        point: function (k, l) {
            switch (k = +k, l = +l, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(k, l) : this._context.moveTo(k, l);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0)
                    this._context.lineTo(this._x, l), this._context.lineTo(k, l);
                else {
                    var m = this._x * (1 - this._t) + k * this._t;
                    this._context.lineTo(m, this._y), this._context.lineTo(m, l);
                }
            }
            this._x = k, this._y = l;
        }
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Cross', function () {
        return _v;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (m) {
            return typeof m;
        } : function (m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }
    function l() {
        return l = Object.assign || function (m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }
    function m(n, o) {
        if (!(n instanceof o))
            throw new TypeError('Cannot call a class as a function');
    }
    function n(o, p) {
        for (var q = 0; q < p.length; q++) {
            var r = p[q];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(o, r.key, r);
        }
    }
    function q(r, s) {
        return q = Object.setPrototypeOf || function (t, u) {
            return t.__proto__ = u, t;
        }, q(r, s);
    }
    function r(s) {
        var t = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (s) {
                return !1;
            }
        }();
        return function () {
            var u, v = _u(s);
            if (t) {
                var w = _u(this).constructor;
                u = Reflect.construct(v, arguments, w);
            } else
                u = v.apply(this, arguments);
            return _t(this, u);
        };
    }
    function _t(u, v) {
        return !v || 'object' !== k(v) && 'function' != typeof v ? function (w) {
            if (void 0 === w)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return w;
        }(u) : v;
    }
    function _u(v) {
        return _u = Object.setPrototypeOf ? Object.getPrototypeOf : function (w) {
            return w.__proto__ || Object.getPrototypeOf(w);
        }, _u(v);
    }
    var _v = function (w) {
        !function (x, y) {
            if ('function' != typeof y && null !== y)
                throw new TypeError('Super expression must either be null or a function');
            x.prototype = Object.create(y && y.prototype, {
                constructor: {
                    value: x,
                    writable: !0,
                    configurable: !0
                }
            }), y && q(x, y);
        }(_t, w);
        var x, y, z, A = r(_t);
        function B() {
            return m(this, B), A.apply(this, arguments);
        }
        return x = B, z = [{
                key: 'getPath',
                value: function (C, D, E, F, G, H) {
                    return 'M'.concat(C, ',').concat(G, 'v').concat(F, 'M').concat(H, ',').concat(D, 'h').concat(E);
                }
            }], (y = [{
                key: 'render',
                value: function () {
                    var C = this.props, D = C.x, E = C.y, F = C.width, G = C.height, H = C.top, I = C.left, J = C.className;
                    return (0, i.isNumber)(D) && (0, i.isNumber)(E) && (0, i.isNumber)(F) && (0, i.isNumber)(G) && (0, i.isNumber)(H) && (0, i.isNumber)(I) ? a(g).createElement('path', l({}, (0, j.filterProps)(this.props, !0), {
                        className: a(h)('recharts-cross', J),
                        d: B.getPath(D, E, F, G, H, I)
                    })) : null;
                }
            }]) && n(x.prototype, y), z && n(x, z), B;
    }(g.PureComponent);
    _v.defaultProps = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Sector', function () {
        return _y;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (n) {
            return typeof n;
        } : function (n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }
    function m() {
        return m = Object.assign || function (n) {
            for (var o = 1; o < arguments.length; o++) {
                var p = arguments[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (n[q] = p[q]);
            }
            return n;
        }, m.apply(this, arguments);
    }
    function n(o, p) {
        if (!(o instanceof p))
            throw new TypeError('Cannot call a class as a function');
    }
    function o(p, q) {
        for (var r = 0; r < q.length; r++) {
            var s = q[r];
            s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(p, s.key, s);
        }
    }
    function r(s, t) {
        return r = Object.setPrototypeOf || function (u, v) {
            return u.__proto__ = v, u;
        }, r(s, t);
    }
    function s(t) {
        var u = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function () {
            var v, w = _v(t);
            if (u) {
                var x = _v(this).constructor;
                v = Reflect.construct(w, arguments, x);
            } else
                v = w.apply(this, arguments);
            return _u(this, v);
        };
    }
    function _u(v, w) {
        return !w || 'object' !== l(w) && 'function' != typeof w ? function (x) {
            if (void 0 === x)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return x;
        }(v) : w;
    }
    function _v(w) {
        return _v = Object.setPrototypeOf ? Object.getPrototypeOf : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
        }, _v(w);
    }
    var w = function (x) {
            var y = x.cx, z = x.cy, A = x.radius, B = x.angle, C = x.sign, D = x.isExternal, E = x.cornerRadius, F = x.cornerIsExternal, G = E * (D ? 1 : -1) + A, H = Math.asin(E / G) / j.RADIAN, I = F ? B : B + C * H, J = F ? B - C * H : B;
            return {
                center: (0, j.polarToCartesian)(y, z, G, I),
                circleTangency: (0, j.polarToCartesian)(y, z, A, I),
                lineTangency: (0, j.polarToCartesian)(y, z, G * Math.cos(H * j.RADIAN), J),
                theta: H
            };
        }, x = function (y) {
            var z = y.cx, A = y.cy, B = y.innerRadius, C = y.outerRadius, D = y.startAngle, E = function (F, G) {
                    return (0, k.mathSign)(G - F) * Math.min(Math.abs(G - F), 359.999);
                }(D, y.endAngle), F = D + E, G = (0, j.polarToCartesian)(z, A, C, D), H = (0, j.polarToCartesian)(z, A, C, F), I = 'M '.concat(G.x, ',').concat(G.y, '\n    A ').concat(C, ',').concat(C, ',0,\n    ').concat(+(Math.abs(E) > 180), ',').concat(+(D > F), ',\n    ').concat(H.x, ',').concat(H.y, '\n  ');
            if (B > 0) {
                var J = (0, j.polarToCartesian)(z, A, B, D), K = (0, j.polarToCartesian)(z, A, B, F);
                I += 'L '.concat(K.x, ',').concat(K.y, '\n            A ').concat(B, ',').concat(B, ',0,\n            ').concat(+(Math.abs(E) > 180), ',').concat(+(D <= F), ',\n            ').concat(J.x, ',').concat(J.y, ' Z');
            } else
                I += 'L '.concat(z, ',').concat(A, ' Z');
            return I;
        }, _y = function (z) {
            !function (A, B) {
                if ('function' != typeof B && null !== B)
                    throw new TypeError('Super expression must either be null or a function');
                A.prototype = Object.create(B && B.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), B && r(A, B);
            }(l, z);
            var A, B, C, D = s(l);
            function E() {
                return n(this, E), D.apply(this, arguments);
            }
            return A = E, (B = [{
                    key: 'render',
                    value: function () {
                        var F = this.props, G = F.cx, H = F.cy, I = F.innerRadius, J = F.outerRadius, K = F.cornerRadius, L = F.forceCornerRadius, M = F.cornerIsExternal, N = F.startAngle, O = F.endAngle, P = F.className;
                        if (J < I || N === O)
                            return null;
                        var Q, R = a(h)('recharts-sector', P), S = J - I, T = (0, k.getPercentValue)(K, S, 0, !0);
                        return Q = T > 0 && Math.abs(N - O) < 360 ? function (U) {
                            var V = U.cx, W = U.cy, X = U.innerRadius, Y = U.outerRadius, Z = U.cornerRadius, $ = U.forceCornerRadius, ab = U.cornerIsExternal, bb = U.startAngle, cb = U.endAngle, db = (0, k.mathSign)(cb - bb), eb = w({
                                    cx: V,
                                    cy: W,
                                    radius: Y,
                                    angle: bb,
                                    sign: db,
                                    cornerRadius: Z,
                                    cornerIsExternal: ab
                                }), fb = eb.circleTangency, gb = eb.lineTangency, hb = eb.theta, ib = w({
                                    cx: V,
                                    cy: W,
                                    radius: Y,
                                    angle: cb,
                                    sign: -db,
                                    cornerRadius: Z,
                                    cornerIsExternal: ab
                                }), jb = ib.circleTangency, kb = ib.lineTangency, lb = ib.theta, mb = ab ? Math.abs(bb - cb) : Math.abs(bb - cb) - hb - lb;
                            if (mb < 0)
                                return $ ? 'M '.concat(gb.x, ',').concat(gb.y, '\n        a').concat(Z, ',').concat(Z, ',0,0,1,').concat(2 * Z, ',0\n        a').concat(Z, ',').concat(Z, ',0,0,1,').concat(2 * -Z, ',0\n      ') : x({
                                    cx: V,
                                    cy: W,
                                    innerRadius: X,
                                    outerRadius: Y,
                                    startAngle: bb,
                                    endAngle: cb
                                });
                            var nb = 'M '.concat(gb.x, ',').concat(gb.y, '\n    A').concat(Z, ',').concat(Z, ',0,0,').concat(+(db < 0), ',').concat(fb.x, ',').concat(fb.y, '\n    A').concat(Y, ',').concat(Y, ',0,').concat(+(mb > 180), ',').concat(+(db < 0), ',').concat(jb.x, ',').concat(jb.y, '\n    A').concat(Z, ',').concat(Z, ',0,0,').concat(+(db < 0), ',').concat(kb.x, ',').concat(kb.y, '\n  ');
                            if (X > 0) {
                                var ob = w({
                                        cx: V,
                                        cy: W,
                                        radius: X,
                                        angle: bb,
                                        sign: db,
                                        isExternal: !0,
                                        cornerRadius: Z,
                                        cornerIsExternal: ab
                                    }), pb = ob.circleTangency, qb = ob.lineTangency, rb = ob.theta, sb = w({
                                        cx: V,
                                        cy: W,
                                        radius: X,
                                        angle: cb,
                                        sign: -db,
                                        isExternal: !0,
                                        cornerRadius: Z,
                                        cornerIsExternal: ab
                                    }), tb = sb.circleTangency, ub = sb.lineTangency, vb = sb.theta, wb = ab ? Math.abs(bb - cb) : Math.abs(bb - cb) - rb - vb;
                                if (wb < 0 && 0 === Z)
                                    return ''.concat(nb, 'L').concat(V, ',').concat(W, 'Z');
                                nb += 'L'.concat(ub.x, ',').concat(ub.y, '\n      A').concat(Z, ',').concat(Z, ',0,0,').concat(+(db < 0), ',').concat(tb.x, ',').concat(tb.y, '\n      A').concat(X, ',').concat(X, ',0,').concat(+(wb > 180), ',').concat(+(db > 0), ',').concat(pb.x, ',').concat(pb.y, '\n      A').concat(Z, ',').concat(Z, ',0,0,').concat(+(db < 0), ',').concat(qb.x, ',').concat(qb.y, 'Z');
                            } else
                                nb += 'L'.concat(V, ',').concat(W, 'Z');
                            return nb;
                        }({
                            cx: G,
                            cy: H,
                            innerRadius: I,
                            outerRadius: J,
                            cornerRadius: Math.min(T, S / 2),
                            forceCornerRadius: L,
                            cornerIsExternal: M,
                            startAngle: N,
                            endAngle: O
                        }) : x({
                            cx: G,
                            cy: H,
                            innerRadius: I,
                            outerRadius: J,
                            startAngle: N,
                            endAngle: O
                        }), a(g).createElement('path', m({}, (0, i.filterProps)(this.props, !0), {
                            className: R,
                            d: Q
                        }));
                    }
                }]) && o(A.prototype, B), C && o(A, C), E;
        }(g.PureComponent);
    _y.defaultProps = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Dot', function () {
        return _u;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (l) {
            return typeof l;
        } : function (l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, j(k);
    }
    function k() {
        return k = Object.assign || function (l) {
            for (var m = 1; m < arguments.length; m++) {
                var n = arguments[m];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o]);
            }
            return l;
        }, k.apply(this, arguments);
    }
    function l(m, n) {
        if (!(m instanceof n))
            throw new TypeError('Cannot call a class as a function');
    }
    function m(n, o) {
        for (var p = 0; p < o.length; p++) {
            var q = o[p];
            q.enumerable = q.enumerable || !1, q.configurable = !0, 'value' in q && (q.writable = !0), Object.defineProperty(n, q.key, q);
        }
    }
    function p(q, r) {
        return p = Object.setPrototypeOf || function (s, t) {
            return s.__proto__ = t, s;
        }, p(q, r);
    }
    function q(r) {
        var s = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (r) {
                return !1;
            }
        }();
        return function () {
            var t, u = _t(r);
            if (s) {
                var v = _t(this).constructor;
                t = Reflect.construct(u, arguments, v);
            } else
                t = u.apply(this, arguments);
            return _s(this, t);
        };
    }
    function _s(t, u) {
        return !u || 'object' !== j(u) && 'function' != typeof u ? function (v) {
            if (void 0 === v)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return v;
        }(t) : u;
    }
    function _t(u) {
        return _t = Object.setPrototypeOf ? Object.getPrototypeOf : function (v) {
            return v.__proto__ || Object.getPrototypeOf(v);
        }, _t(u);
    }
    var _u = function (v) {
        !function (w, x) {
            if ('function' != typeof x && null !== x)
                throw new TypeError('Super expression must either be null or a function');
            w.prototype = Object.create(x && x.prototype, {
                constructor: {
                    value: w,
                    writable: !0,
                    configurable: !0
                }
            }), x && p(w, x);
        }(_s, v);
        var w, x, y, z = q(_s);
        function A() {
            return l(this, A), z.apply(this, arguments);
        }
        return w = A, (x = [{
                key: 'render',
                value: function () {
                    var B = this.props, C = B.cx, D = B.cy, E = B.r, F = B.className, G = a(h)('recharts-dot', F);
                    return C === +C && D === +D && E === +E ? a(g).createElement('circle', k({}, (0, i.filterProps)(this.props), (0, i.adaptEventHandlers)(this.props), {
                        className: G,
                        cx: C,
                        cy: D,
                        r: E
                    })) : null;
                }
            }]) && m(w.prototype, x), y && m(w, y), A;
    }(g.PureComponent);
}), d.register('.....', function (e, f) {
    b(e.exports, 'CartesianAxis', function () {
        return _O;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    function s(t) {
        return s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (u) {
            return typeof u;
        } : function (u) {
            return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
        }, s(t);
    }
    function t() {
        return t = Object.assign || function (u) {
            for (var v = 1; v < arguments.length; v++) {
                var w = arguments[v];
                for (var x in w)
                    Object.prototype.hasOwnProperty.call(w, x) && (u[x] = w[x]);
            }
            return u;
        }, t.apply(this, arguments);
    }
    function u(v, w) {
        var x = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(v);
            w && (y = y.filter(function (z) {
                return Object.getOwnPropertyDescriptor(v, z).enumerable;
            })), x.push.apply(x, y);
        }
        return x;
    }
    function x(y) {
        for (var z = 1; z < arguments.length; z++) {
            var A = null != arguments[z] ? arguments[z] : {};
            z % 2 ? u(Object(A), !0).forEach(function (B) {
                _A(y, B, A[B]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(A)) : u(Object(A)).forEach(function (B) {
                Object.defineProperty(y, B, Object.getOwnPropertyDescriptor(A, B));
            });
        }
        return y;
    }
    function _A(B, C, D) {
        return C in B ? Object.defineProperty(B, C, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : B[C] = D, B;
    }
    function B(C, D) {
        if (null == C)
            return {};
        var E, F, G = function (H, I) {
                if (null == H)
                    return {};
                var J, K, L = {}, M = Object.keys(H);
                for (K = 0; K < M.length; K++)
                    J = M[K], I.indexOf(J) >= 0 || (L[J] = H[J]);
                return L;
            }(C, D);
        if (Object.getOwnPropertySymbols) {
            var H = Object.getOwnPropertySymbols(C);
            for (F = 0; F < H.length; F++)
                E = H[F], D.indexOf(E) >= 0 || Object.prototype.propertyIsEnumerable.call(C, E) && (G[E] = C[E]);
        }
        return G;
    }
    function G(H, I) {
        for (var J = 0; J < I.length; J++) {
            var K = I[J];
            K.enumerable = K.enumerable || !1, K.configurable = !0, 'value' in K && (K.writable = !0), Object.defineProperty(H, K.key, K);
        }
    }
    function J(K, L) {
        return J = Object.setPrototypeOf || function (M, N) {
            return M.__proto__ = N, M;
        }, J(K, L);
    }
    function K(L) {
        var M = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (L) {
                return !1;
            }
        }();
        return function () {
            var N, O = _N(L);
            if (M) {
                var P = _N(this).constructor;
                N = Reflect.construct(O, arguments, P);
            } else
                N = O.apply(this, arguments);
            return _M(this, N);
        };
    }
    function _M(N, O) {
        return !O || 'object' !== s(O) && 'function' != typeof O ? function (P) {
            if (void 0 === P)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return P;
        }(N) : O;
    }
    function _N(O) {
        return _N = Object.setPrototypeOf ? Object.getPrototypeOf : function (P) {
            return P.__proto__ || Object.getPrototypeOf(P);
        }, _N(O);
    }
    var _O = function (P) {
        !function (Q, R) {
            if ('function' != typeof R && null !== R)
                throw new TypeError('Super expression must either be null or a function');
            Q.prototype = Object.create(R && R.prototype, {
                constructor: {
                    value: Q,
                    writable: !0,
                    configurable: !0
                }
            }), R && J(Q, R);
        }(u, P);
        var Q, R, S, T = K(u);
        function U(V) {
            var W;
            return function (X, Y) {
                if (!(X instanceof Y))
                    throw new TypeError('Cannot call a class as a function');
            }(this, U), (W = T.call(this, V)).layerReference = void 0, W.state = {
                fontSize: '',
                letterSpacing: ''
            }, W;
        }
        return Q = U, S = [
            {
                key: 'getTicks',
                value: function (W, X, Y) {
                    var Z = W.tick, $ = W.ticks, ab = W.viewBox, bb = W.minTickGap, cb = W.orientation, db = W.interval, eb = W.tickFormatter, fb = W.unit;
                    return $ && $.length && Z ? (0, q.isNumber)(db) || p.Global.isSsr ? U.getNumberIntervalTicks($, 'number' == typeof db && (0, q.isNumber)(db) ? db : 0) : 'preserveStartEnd' === db ? U.getTicksStart({
                        ticks: $,
                        tickFormatter: eb,
                        viewBox: ab,
                        orientation: cb,
                        minTickGap: bb,
                        unit: fb,
                        fontSize: X,
                        letterSpacing: Y
                    }, !0) : 'preserveStart' === db ? U.getTicksStart({
                        ticks: $,
                        tickFormatter: eb,
                        viewBox: ab,
                        orientation: cb,
                        minTickGap: bb,
                        unit: fb,
                        fontSize: X,
                        letterSpacing: Y
                    }) : U.getTicksEnd({
                        ticks: $,
                        tickFormatter: eb,
                        viewBox: ab,
                        orientation: cb,
                        minTickGap: bb,
                        unit: fb,
                        fontSize: X,
                        letterSpacing: Y
                    }) : [];
                }
            },
            {
                key: 'getNumberIntervalTicks',
                value: function (W, X) {
                    return W.filter(function (Y, Z) {
                        return Z % (X + 1) == 0;
                    });
                }
            },
            {
                key: 'getTicksStart',
                value: function (W, X) {
                    var Y, Z, $ = W.ticks, ab = W.tickFormatter, bb = W.viewBox, cb = W.orientation, db = W.minTickGap, eb = W.unit, fb = W.fontSize, gb = W.letterSpacing, hb = bb.x, ib = bb.y, jb = bb.width, kb = bb.height, lb = 'top' === cb || 'bottom' === cb ? 'width' : 'height', mb = ($ || []).slice(), nb = eb && 'width' === lb ? (0, l.getStringSize)(eb, {
                            fontSize: fb,
                            letterSpacing: gb
                        })[lb] : 0, ob = mb.length, pb = ob >= 2 ? (0, q.mathSign)(mb[1].coordinate - mb[0].coordinate) : 1;
                    if (1 === pb ? (Y = 'width' === lb ? hb : ib, Z = 'width' === lb ? hb + jb : ib + kb) : (Y = 'width' === lb ? hb + jb : ib + kb, Z = 'width' === lb ? hb : ib), X) {
                        var qb = $[ob - 1], rb = a(h)(ab) ? ab(qb.value, ob - 1) : qb.value, sb = (0, l.getStringSize)(rb, {
                                fontSize: fb,
                                letterSpacing: gb
                            })[lb] + nb, tb = pb * (qb.coordinate + pb * sb / 2 - Z);
                        mb[ob - 1] = qb = x(x({}, qb), {}, { tickCoord: tb > 0 ? qb.coordinate - tb * pb : qb.coordinate }), pb * (qb.tickCoord - pb * sb / 2 - Y) >= 0 && pb * (qb.tickCoord + pb * sb / 2 - Z) <= 0 && (Z = qb.tickCoord - pb * (sb / 2 + db), mb[ob - 1] = x(x({}, qb), {}, { isShow: !0 }));
                    }
                    for (var ub = X ? ob - 1 : ob, vb = 0; vb < ub; vb++) {
                        var wb = mb[vb], xb = a(h)(ab) ? ab(wb.value, vb) : wb.value, yb = (0, l.getStringSize)(xb, {
                                fontSize: fb,
                                letterSpacing: gb
                            })[lb] + nb;
                        if (0 === vb) {
                            var zb = pb * (wb.coordinate - pb * yb / 2 - Y);
                            mb[vb] = wb = x(x({}, wb), {}, { tickCoord: zb < 0 ? wb.coordinate - zb * pb : wb.coordinate });
                        } else
                            mb[vb] = wb = x(x({}, wb), {}, { tickCoord: wb.coordinate });
                        pb * (wb.tickCoord - pb * yb / 2 - Y) >= 0 && pb * (wb.tickCoord + pb * yb / 2 - Z) <= 0 && (Y = wb.tickCoord + pb * (yb / 2 + db), mb[vb] = x(x({}, wb), {}, { isShow: !0 }));
                    }
                    return mb.filter(function (Ab) {
                        return Ab.isShow;
                    });
                }
            },
            {
                key: 'getTicksEnd',
                value: function (W) {
                    var X, Y, Z = W.ticks, $ = W.tickFormatter, ab = W.viewBox, bb = W.orientation, cb = W.minTickGap, db = W.unit, eb = W.fontSize, fb = W.letterSpacing, gb = ab.x, hb = ab.y, ib = ab.width, jb = ab.height, kb = 'top' === bb || 'bottom' === bb ? 'width' : 'height', lb = db && 'width' === kb ? (0, l.getStringSize)(db, {
                            fontSize: eb,
                            letterSpacing: fb
                        })[kb] : 0, mb = (Z || []).slice(), nb = mb.length, ob = nb >= 2 ? (0, q.mathSign)(mb[1].coordinate - mb[0].coordinate) : 1;
                    1 === ob ? (X = 'width' === kb ? gb : hb, Y = 'width' === kb ? gb + ib : hb + jb) : (X = 'width' === kb ? gb + ib : hb + jb, Y = 'width' === kb ? gb : hb);
                    for (var pb = nb - 1; pb >= 0; pb--) {
                        var qb = mb[pb], rb = a(h)($) ? $(qb.value, nb - pb - 1) : qb.value, sb = (0, l.getStringSize)(rb, {
                                fontSize: eb,
                                letterSpacing: fb
                            })[kb] + lb;
                        if (pb === nb - 1) {
                            var tb = ob * (qb.coordinate + ob * sb / 2 - Y);
                            mb[pb] = qb = x(x({}, qb), {}, { tickCoord: tb > 0 ? qb.coordinate - tb * ob : qb.coordinate });
                        } else
                            mb[pb] = qb = x(x({}, qb), {}, { tickCoord: qb.coordinate });
                        ob * (qb.tickCoord - ob * sb / 2 - X) >= 0 && ob * (qb.tickCoord + ob * sb / 2 - Y) <= 0 && (Y = qb.tickCoord - ob * (sb / 2 + cb), mb[pb] = x(x({}, qb), {}, { isShow: !0 }));
                    }
                    return mb.filter(function (ub) {
                        return ub.isShow;
                    });
                }
            },
            {
                key: 'renderTickItem',
                value: function (W, X, Y) {
                    return a(i).isValidElement(W) ? a(i).cloneElement(W, X) : a(h)(W) ? W(X) : a(i).createElement(n.Text, t({}, X, { className: 'recharts-cartesian-axis-tick-value' }), Y);
                }
            }
        ], (R = [
            {
                key: 'shouldComponentUpdate',
                value: function (W, X) {
                    var Y = W.viewBox, Z = B(W, ['viewBox']), $ = this.props, ab = $.viewBox, bb = B($, ['viewBox']);
                    return !(0, k.shallowEqual)(Y, ab) || !(0, k.shallowEqual)(Z, bb) || !(0, k.shallowEqual)(X, this.state);
                }
            },
            {
                key: 'componentDidMount',
                value: function () {
                    var W = this.layerReference;
                    if (W) {
                        var X = W.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
                        X && this.setState({
                            fontSize: window.getComputedStyle(X).fontSize,
                            letterSpacing: window.getComputedStyle(X).letterSpacing
                        });
                    }
                }
            },
            {
                key: 'getTickLineCoord',
                value: function (W) {
                    var X, Y, Z, $, ab, bb, cb = this.props, db = cb.x, eb = cb.y, fb = cb.width, gb = cb.height, hb = cb.orientation, ib = cb.tickSize, jb = cb.mirror, kb = cb.tickMargin, lb = jb ? -1 : 1, mb = W.tickSize || ib, nb = (0, q.isNumber)(W.tickCoord) ? W.tickCoord : W.coordinate;
                    switch (hb) {
                    case 'top':
                        X = Y = W.coordinate, bb = (Z = ($ = eb + +!jb * gb) - lb * mb) - lb * kb, ab = nb;
                        break;
                    case 'left':
                        Z = $ = W.coordinate, ab = (X = (Y = db + +!jb * fb) - lb * mb) - lb * kb, bb = nb;
                        break;
                    case 'right':
                        Z = $ = W.coordinate, ab = (X = (Y = db + +jb * fb) + lb * mb) + lb * kb, bb = nb;
                        break;
                    default:
                        X = Y = W.coordinate, bb = (Z = ($ = eb + +jb * gb) + lb * mb) + lb * kb, ab = nb;
                    }
                    return {
                        line: {
                            x1: X,
                            y1: Z,
                            x2: Y,
                            y2: $
                        },
                        tick: {
                            x: ab,
                            y: bb
                        }
                    };
                }
            },
            {
                key: 'getTickTextAnchor',
                value: function () {
                    var W, X = this.props, Y = X.orientation, Z = X.mirror;
                    switch (Y) {
                    case 'left':
                        W = Z ? 'start' : 'end';
                        break;
                    case 'right':
                        W = Z ? 'end' : 'start';
                        break;
                    default:
                        W = 'middle';
                    }
                    return W;
                }
            },
            {
                key: 'getTickVerticalAnchor',
                value: function () {
                    var W = this.props, X = W.orientation, Y = W.mirror, Z = 'end';
                    switch (X) {
                    case 'left':
                    case 'right':
                        Z = 'middle';
                        break;
                    case 'top':
                        Z = Y ? 'start' : 'end';
                        break;
                    default:
                        Z = Y ? 'end' : 'start';
                    }
                    return Z;
                }
            },
            {
                key: 'renderAxisLine',
                value: function () {
                    var W = this.props, X = W.x, Y = W.y, Z = W.width, $ = W.height, ab = W.orientation, bb = W.mirror, cb = W.axisLine, db = x(x(x({}, (0, r.filterProps)(this.props)), (0, r.filterProps)(cb)), {}, { fill: 'none' });
                    if ('top' === ab || 'bottom' === ab) {
                        var eb = +('top' === ab && !bb || 'bottom' === ab && bb);
                        db = x(x({}, db), {}, {
                            x1: X,
                            y1: Y + eb * $,
                            x2: X + Z,
                            y2: Y + eb * $
                        });
                    } else {
                        var fb = +('left' === ab && !bb || 'right' === ab && bb);
                        db = x(x({}, db), {}, {
                            x1: X + fb * Z,
                            y1: Y,
                            x2: X + fb * Z,
                            y2: Y + $
                        });
                    }
                    return a(i).createElement('line', t({}, db, { className: a(j)('recharts-cartesian-axis-line', a(H)(cb, 'className')) }));
                }
            },
            {
                key: 'renderTicks',
                value: function (W, X, Y) {
                    var Z = this, $ = this.props, ab = $.tickLine, bb = $.stroke, cb = $.tick, db = $.tickFormatter, eb = $.unit, fb = U.getTicks(x(x({}, this.props), {}, { ticks: W }), X, Y), gb = this.getTickTextAnchor(), hb = this.getTickVerticalAnchor(), ib = (0, r.filterProps)(this.props), jb = (0, r.filterProps)(cb), kb = x(x({}, ib), {}, { fill: 'none' }, (0, r.filterProps)(ab)), lb = fb.map(function (mb, nb) {
                            var ob = Z.getTickLineCoord(mb), pb = ob.line, qb = ob.tick, rb = x(x(x(x({
                                    textAnchor: gb,
                                    verticalAnchor: hb
                                }, ib), {}, {
                                    stroke: 'none',
                                    fill: bb
                                }, jb), qb), {}, {
                                    index: nb,
                                    payload: mb,
                                    visibleTicksCount: fb.length,
                                    tickFormatter: db
                                });
                            return a(i).createElement(m.Layer, t({
                                className: 'recharts-cartesian-axis-tick',
                                key: 'tick-'.concat(nb)
                            }, (0, r.adaptEventsOfChild)(Z.props, mb, nb)), ab && a(i).createElement('line', t({}, kb, pb, { className: a(j)('recharts-cartesian-axis-tick-line', a(H)(ab, 'className')) })), cb && U.renderTickItem(cb, rb, ''.concat(a(h)(db) ? db(mb.value, nb) : mb.value).concat(eb || '')));
                        });
                    return a(i).createElement('g', { className: 'recharts-cartesian-axis-ticks' }, lb);
                }
            },
            {
                key: 'render',
                value: function () {
                    var W = this, X = this.props, Y = X.axisLine, Z = X.width, $ = X.height, ab = X.ticksGenerator, bb = X.className;
                    if (X.hide)
                        return null;
                    var cb = this.props, db = cb.ticks, eb = B(cb, ['ticks']), fb = db;
                    return a(h)(ab) && (fb = db && db.length > 0 ? ab(this.props) : ab(eb)), Z <= 0 || $ <= 0 || !fb || !fb.length ? null : a(i).createElement(m.Layer, {
                        className: a(j)('recharts-cartesian-axis', bb),
                        ref: function (gb) {
                            W.layerReference = gb;
                        }
                    }, Y && this.renderAxisLine(), this.renderTicks(fb, this.state.fontSize, this.state.letterSpacing), o.Label.renderCallByParent(this.props));
                }
            }
        ]) && G(Q.prototype, R), S && G(Q, S), U;
    }(i.Component);
    _O.displayName = 'CartesianAxis', _O.defaultProps = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        viewBox: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        orientation: 'bottom',
        ticks: [],
        stroke: '#666',
        tickLine: !0,
        axisLine: !0,
        tick: !0,
        mirror: !1,
        minTickGap: 5,
        tickSize: 6,
        tickMargin: 2,
        interval: 'preserveEnd'
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'Brush', function () {
        return _K;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function r(s) {
        return r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
            return typeof t;
        } : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        }, r(s);
    }
    function s() {
        return s = Object.assign || function (t) {
            for (var u = 1; u < arguments.length; u++) {
                var v = arguments[u];
                for (var w in v)
                    Object.prototype.hasOwnProperty.call(v, w) && (t[w] = v[w]);
            }
            return t;
        }, s.apply(this, arguments);
    }
    function t(u, v) {
        var w = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var x = Object.getOwnPropertySymbols(u);
            v && (x = x.filter(function (y) {
                return Object.getOwnPropertyDescriptor(u, y).enumerable;
            })), w.push.apply(w, x);
        }
        return w;
    }
    function w(x) {
        for (var y = 1; y < arguments.length; y++) {
            var z = null != arguments[y] ? arguments[y] : {};
            y % 2 ? t(Object(z), !0).forEach(function (A) {
                _z(x, A, z[A]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(z)) : t(Object(z)).forEach(function (A) {
                Object.defineProperty(x, A, Object.getOwnPropertyDescriptor(z, A));
            });
        }
        return x;
    }
    function _z(A, B, C) {
        return B in A ? Object.defineProperty(A, B, {
            value: C,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : A[B] = C, A;
    }
    function A(B, C) {
        for (var D = 0; D < C.length; D++) {
            var E = C[D];
            E.enumerable = E.enumerable || !1, E.configurable = !0, 'value' in E && (E.writable = !0), Object.defineProperty(B, E.key, E);
        }
    }
    function D(E, F) {
        return D = Object.setPrototypeOf || function (G, H) {
            return G.__proto__ = H, G;
        }, D(E, F);
    }
    function E(F) {
        var G = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (F) {
                return !1;
            }
        }();
        return function () {
            var H, I = _I(F);
            if (G) {
                var J = _I(this).constructor;
                H = Reflect.construct(I, arguments, J);
            } else
                H = I.apply(this, arguments);
            return _G(this, H);
        };
    }
    function _G(H, I) {
        return !I || 'object' !== r(I) && 'function' != typeof I ? _H(H) : I;
    }
    function _H(I) {
        if (void 0 === I)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return I;
    }
    function _I(J) {
        return _I = Object.setPrototypeOf ? Object.getPrototypeOf : function (K) {
            return K.__proto__ || Object.getPrototypeOf(K);
        }, _I(J);
    }
    var J = function (K) {
            return K.changedTouches && !!K.changedTouches.length;
        }, _K = function (L) {
            !function (M, N) {
                if ('function' != typeof N && null !== N)
                    throw new TypeError('Super expression must either be null or a function');
                M.prototype = Object.create(N && N.prototype, {
                    constructor: {
                        value: M,
                        writable: !0,
                        configurable: !0
                    }
                }), N && D(M, N);
            }(t, L);
            var M, N, O, P = E(t);
            function Q(R) {
                var S;
                return function (T, U) {
                    if (!(T instanceof U))
                        throw new TypeError('Cannot call a class as a function');
                }(this, Q), (S = P.call(this, R)).leaveTimer = void 0, S.travellerDragStartHandlers = void 0, S.handleDrag = function (T) {
                    S.leaveTimer && (clearTimeout(S.leaveTimer), S.leaveTimer = null), S.state.isTravellerMoving ? S.handleTravellerMove(T) : S.state.isSlideMoving && S.handleSlideDrag(T);
                }, S.handleTouchMove = function (T) {
                    null != T.changedTouches && T.changedTouches.length > 0 && S.handleDrag(T.changedTouches[0]);
                }, S.handleDragEnd = function () {
                    S.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !1
                    }), S.detachDragEndListener();
                }, S.handleLeaveWrapper = function () {
                    (S.state.isTravellerMoving || S.state.isSlideMoving) && (S.leaveTimer = window.setTimeout(S.handleDragEnd, S.props.leaveTimeOut));
                }, S.handleEnterSlideOrTraveller = function () {
                    S.setState({ isTextActive: !0 });
                }, S.handleLeaveSlideOrTraveller = function () {
                    S.setState({ isTextActive: !1 });
                }, S.handleSlideDragStart = function (T) {
                    var U = J(T) ? T.changedTouches[0] : T;
                    S.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: U.pageX
                    }), S.attachDragEndListener();
                }, S.travellerDragStartHandlers = {
                    startX: S.handleTravellerDragStart.bind(_H(S), 'startX'),
                    endX: S.handleTravellerDragStart.bind(_H(S), 'endX')
                }, S.state = {}, S;
            }
            return M = Q, O = [
                {
                    key: 'renderDefaultTraveller',
                    value: function (S) {
                        var T = S.x, U = S.y, V = S.width, W = S.height, X = S.stroke, Y = Math.floor(U + W / 2) - 1;
                        return a(i).createElement(a(i).Fragment, null, a(i).createElement('rect', {
                            x: T,
                            y: U,
                            width: V,
                            height: W,
                            fill: X,
                            stroke: 'none'
                        }), a(i).createElement('line', {
                            x1: T + 1,
                            y1: Y,
                            x2: T + V - 1,
                            y2: Y,
                            fill: 'none',
                            stroke: '#fff'
                        }), a(i).createElement('line', {
                            x1: T + 1,
                            y1: Y + 2,
                            x2: T + V - 1,
                            y2: Y + 2,
                            fill: 'none',
                            stroke: '#fff'
                        }));
                    }
                },
                {
                    key: 'renderTraveller',
                    value: function (S, T) {
                        return a(i).isValidElement(S) ? a(i).cloneElement(S, T) : a(g)(S) ? S(T) : Q.renderDefaultTraveller(T);
                    }
                },
                {
                    key: 'getDerivedStateFromProps',
                    value: function (S, T) {
                        var U = S.data, V = S.width, W = S.x, X = S.travellerWidth, Y = S.updateId, Z = S.startIndex, $ = S.endIndex;
                        if (U !== T.prevData || Y !== T.prevUpdateId)
                            return w({
                                prevData: U,
                                prevTravellerWidth: X,
                                prevUpdateId: Y,
                                prevX: W,
                                prevWidth: V
                            }, U && U.length ? function (ab) {
                                var bb = ab.data, cb = ab.startIndex, db = ab.endIndex, eb = ab.x, fb = ab.width, gb = ab.travellerWidth;
                                if (!bb || !bb.length)
                                    return {};
                                var hb = bb.length, ib = (0, k.point)().domain(a(h)(0, hb)).range([
                                        eb,
                                        eb + fb - gb
                                    ]), jb = ib.domain().map(function (kb) {
                                        return ib(kb);
                                    });
                                return {
                                    isTextActive: !1,
                                    isSlideMoving: !1,
                                    isTravellerMoving: !1,
                                    startX: ib(cb),
                                    endX: ib(db),
                                    scale: ib,
                                    scaleValues: jb
                                };
                            }({
                                data: U,
                                width: V,
                                x: W,
                                travellerWidth: X,
                                startIndex: Z,
                                endIndex: $
                            }) : {
                                scale: null,
                                scaleValues: null
                            });
                        if (T.scale && (V !== T.prevWidth || W !== T.prevX || X !== T.prevTravellerWidth)) {
                            T.scale.range([
                                W,
                                W + V - X
                            ]);
                            var ab = T.scale.domain().map(function (bb) {
                                return T.scale(bb);
                            });
                            return {
                                prevData: U,
                                prevTravellerWidth: X,
                                prevUpdateId: Y,
                                prevX: W,
                                prevWidth: V,
                                startX: T.scale(S.startIndex),
                                endX: T.scale(S.endIndex),
                                scaleValues: ab
                            };
                        }
                        return null;
                    }
                },
                {
                    key: 'getIndexInRange',
                    value: function (S, T) {
                        for (var U = 0, V = S.length - 1; V - U > 1;) {
                            var W = Math.floor((U + V) / 2);
                            S[W] > T ? V = W : U = W;
                        }
                        return T >= S[V] ? V : U;
                    }
                }
            ], (N = [
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
                    }
                },
                {
                    key: 'getIndex',
                    value: function (S) {
                        var T = S.startX, U = S.endX, V = this.state.scaleValues, W = this.props, X = W.gap, Y = W.data.length - 1, Z = Math.min(T, U), $ = Math.max(T, U), ab = Q.getIndexInRange(V, Z), bb = Q.getIndexInRange(V, $);
                        return {
                            startIndex: ab - ab % X,
                            endIndex: bb === Y ? Y : bb - bb % X
                        };
                    }
                },
                {
                    key: 'getTextOfTick',
                    value: function (S) {
                        var T = this.props, U = T.data, V = T.tickFormatter, W = T.dataKey, X = (0, n.getValueByDataKey)(U[S], W, S);
                        return a(g)(V) ? V(X, S) : X;
                    }
                },
                {
                    key: 'attachDragEndListener',
                    value: function () {
                        window.addEventListener('mouseup', this.handleDragEnd, !0), window.addEventListener('touchend', this.handleDragEnd, !0);
                    }
                },
                {
                    key: 'detachDragEndListener',
                    value: function () {
                        window.removeEventListener('mouseup', this.handleDragEnd, !0), window.removeEventListener('touchend', this.handleDragEnd, !0);
                    }
                },
                {
                    key: 'handleSlideDrag',
                    value: function (S) {
                        var T = this.state, U = T.slideMoveStartX, V = T.startX, W = T.endX, X = this.props, Y = X.x, Z = X.width, $ = X.travellerWidth, ab = X.startIndex, bb = X.endIndex, cb = X.onChange, db = S.pageX - U;
                        db > 0 ? db = Math.min(db, Y + Z - $ - W, Y + Z - $ - V) : db < 0 && (db = Math.max(db, Y - V, Y - W));
                        var eb = this.getIndex({
                            startX: V + db,
                            endX: W + db
                        });
                        eb.startIndex === ab && eb.endIndex === bb || !cb || cb(eb), this.setState({
                            startX: V + db,
                            endX: W + db,
                            slideMoveStartX: S.pageX
                        });
                    }
                },
                {
                    key: 'handleTravellerDragStart',
                    value: function (S, T) {
                        var U = J(T) ? T.changedTouches[0] : T;
                        this.setState({
                            isSlideMoving: !1,
                            isTravellerMoving: !0,
                            movingTravellerId: S,
                            brushMoveStartX: U.pageX
                        }), this.attachDragEndListener();
                    }
                },
                {
                    key: 'handleTravellerMove',
                    value: function (S) {
                        var T, U = this.state, V = U.brushMoveStartX, W = U.movingTravellerId, X = U.endX, Y = U.startX, Z = this.state[W], $ = this.props, ab = $.x, bb = $.width, cb = $.travellerWidth, db = $.onChange, eb = $.gap, fb = $.data, gb = {
                                startX: this.state.startX,
                                endX: this.state.endX
                            }, hb = S.pageX - V;
                        hb > 0 ? hb = Math.min(hb, ab + bb - cb - Z) : hb < 0 && (hb = Math.max(hb, ab - Z)), gb[W] = Z + hb;
                        var ib = this.getIndex(gb), jb = ib.startIndex, kb = ib.endIndex;
                        this.setState((_z(T = {}, W, Z + hb), _z(T, 'brushMoveStartX', S.pageX), T), function () {
                            var lb;
                            db && (lb = fb.length - 1, ('startX' === W && (X > Y ? jb % eb == 0 : kb % eb == 0) || X < Y && kb === lb || 'endX' === W && (X > Y ? kb % eb == 0 : jb % eb == 0) || X > Y && kb === lb) && db(ib));
                        });
                    }
                },
                {
                    key: 'renderBackground',
                    value: function () {
                        var S = this.props, T = S.x, U = S.y, V = S.width, W = S.height, X = S.fill, Y = S.stroke;
                        return a(i).createElement('rect', {
                            stroke: Y,
                            fill: X,
                            x: T,
                            y: U,
                            width: V,
                            height: W
                        });
                    }
                },
                {
                    key: 'renderPanorama',
                    value: function () {
                        var S = this.props, T = S.x, U = S.y, V = S.width, W = S.height, X = S.data, Y = S.children, Z = S.padding, $ = i.Children.only(Y);
                        return $ ? a(i).cloneElement($, {
                            x: T,
                            y: U,
                            width: V,
                            height: W,
                            margin: Z,
                            compact: !0,
                            data: X
                        }) : null;
                    }
                },
                {
                    key: 'renderTravellerLayer',
                    value: function (S, T) {
                        var U = this.props, V = U.y, W = U.travellerWidth, X = U.height, Y = U.traveller, Z = Math.max(S, this.props.x), $ = w(w({}, (0, q.filterProps)(this.props)), {}, {
                                x: Z,
                                y: V,
                                width: W,
                                height: X
                            });
                        return a(i).createElement(l.Layer, {
                            className: 'recharts-brush-traveller',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.travellerDragStartHandlers[T],
                            onTouchStart: this.travellerDragStartHandlers[T],
                            style: { cursor: 'col-resize' }
                        }, Q.renderTraveller(Y, $));
                    }
                },
                {
                    key: 'renderSlide',
                    value: function (S, T) {
                        var U = this.props, V = U.y, W = U.height, X = U.stroke, Y = U.travellerWidth, Z = Math.min(S, T) + Y, $ = Math.max(Math.abs(T - S) - Y, 0);
                        return a(i).createElement('rect', {
                            className: 'recharts-brush-slide',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.handleSlideDragStart,
                            onTouchStart: this.handleSlideDragStart,
                            style: { cursor: 'move' },
                            stroke: 'none',
                            fill: X,
                            fillOpacity: 0.2,
                            x: Z,
                            y: V,
                            width: $,
                            height: W
                        });
                    }
                },
                {
                    key: 'renderText',
                    value: function () {
                        var S = this.props, T = S.startIndex, U = S.endIndex, V = S.y, W = S.height, X = S.travellerWidth, Y = S.stroke, Z = this.state, $ = Z.startX, ab = Z.endX, bb = {
                                pointerEvents: 'none',
                                fill: Y
                            };
                        return a(i).createElement(l.Layer, { className: 'recharts-brush-texts' }, a(i).createElement(m.Text, s({
                            textAnchor: 'end',
                            verticalAnchor: 'middle',
                            x: Math.min($, ab) - 5,
                            y: V + W / 2
                        }, bb), this.getTextOfTick(T)), a(i).createElement(m.Text, s({
                            textAnchor: 'start',
                            verticalAnchor: 'middle',
                            x: Math.max($, ab) + X + 5,
                            y: V + W / 2
                        }, bb), this.getTextOfTick(U)));
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var S = this.props, T = S.data, U = S.className, V = S.children, W = S.x, X = S.y, Y = S.width, Z = S.height, $ = S.alwaysShowText, ab = this.state, bb = ab.startX, cb = ab.endX, db = ab.isTextActive, eb = ab.isSlideMoving, fb = ab.isTravellerMoving;
                        if (!T || !T.length || !(0, o.isNumber)(W) || !(0, o.isNumber)(X) || !(0, o.isNumber)(Y) || !(0, o.isNumber)(Z) || Y <= 0 || Z <= 0)
                            return null;
                        var gb = a(j)('recharts-brush', U), hb = 1 === a(i).Children.count(V), ib = (0, p.generatePrefixStyle)('userSelect', 'none');
                        return a(i).createElement(l.Layer, {
                            className: gb,
                            onMouseMove: this.handleDrag,
                            onMouseLeave: this.handleLeaveWrapper,
                            onTouchMove: this.handleTouchMove,
                            style: ib
                        }, this.renderBackground(), hb && this.renderPanorama(), this.renderSlide(bb, cb), this.renderTravellerLayer(bb, 'startX'), this.renderTravellerLayer(cb, 'endX'), (db || eb || fb || $) && this.renderText());
                    }
                }
            ]) && A(M.prototype, N), O && A(M, O), Q;
        }(i.PureComponent);
    _K.displayName = 'Brush', _K.defaultProps = {
        height: 40,
        travellerWidth: 5,
        gap: 1,
        fill: '#fff',
        stroke: '#666',
        padding: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        },
        leaveTimeOut: 1000,
        alwaysShowText: !1
    };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (g = g.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, g);
        }
        return j;
    }
    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                _m(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
    function _m(n, o, p) {
        return o in n ? Object.defineProperty(n, o, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[o] = p, n;
    }
    l(e.exports, 'generatePrefixStyle', function () {
        return _o;
    });
    var n = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ], _o = function (p, q) {
            if (!p)
                return null;
            var r = p.replace(/(\w)/, function (s) {
                    return s.toUpperCase();
                }), s = n.reduce(function (t, u) {
                    return j(j({}, t), {}, _m({}, u + r, q));
                }, {});
            return s[p] = q, s;
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'detectReferenceElementsDomain', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), _m = function (n, o, p, q, r) {
            var s = (0, k.findAllByType)(n, h.ReferenceLine.displayName), t = (0, k.findAllByType)(n, g.ReferenceDot.displayName), u = s.concat(t), v = (0, k.findAllByType)(n, i.ReferenceArea.displayName), w = ''.concat(q, 'Id'), x = q[0], y = o;
            if (u.length && (y = u.reduce(function (z, A) {
                    if (A.props[w] === p && (0, j.ifOverflowMatches)(A.props, 'extendDomain') && (0, l.isNumber)(A.props[x])) {
                        var B = A.props[x];
                        return [
                            Math.min(z[0], B),
                            Math.max(z[1], B)
                        ];
                    }
                    return z;
                }, y)), v.length) {
                var z = ''.concat(x, '1'), A = ''.concat(x, '2');
                y = v.reduce(function (B, C) {
                    if (C.props[w] === p && (0, j.ifOverflowMatches)(C.props, 'extendDomain') && (0, l.isNumber)(C.props[z]) && (0, l.isNumber)(C.props[A])) {
                        var D = C.props[z], E = C.props[A];
                        return [
                            Math.min(B[0], D, E),
                            Math.max(B[1], D, E)
                        ];
                    }
                    return B;
                }, y);
            }
            return r && r.length && (y = r.reduce(function (B, C) {
                return (0, l.isNumber)(C) ? [
                    Math.min(B[0], C),
                    Math.max(B[1], C)
                ] : B;
            }, y)), y;
        };
}), d.register('.....', function (e, f) {
    b(e.exports, 'ReferenceDot', function () {
        return _z;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function r() {
        return r = Object.assign || function (s) {
            for (var t = 1; t < arguments.length; t++) {
                var u = arguments[t];
                for (var v in u)
                    Object.prototype.hasOwnProperty.call(u, v) && (s[v] = u[v]);
            }
            return s;
        }, r.apply(this, arguments);
    }
    function s(t, u) {
        var v = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(t);
            u && (w = w.filter(function (x) {
                return Object.getOwnPropertyDescriptor(t, x).enumerable;
            })), v.push.apply(v, w);
        }
        return v;
    }
    function v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? s(Object(y), !0).forEach(function (z) {
                _y(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : s(Object(y)).forEach(function (z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
    }
    function _y(z, A, B) {
        return A in z ? Object.defineProperty(z, A, {
            value: B,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : z[A] = B, z;
    }
    function _z(A) {
        var B = A.x, C = A.y, D = A.r, E = A.alwaysShow, F = A.clipPathId, G = (0, m.isNumOrStr)(B), H = (0, m.isNumOrStr)(C);
        if ((0, p.warn)(void 0 === E, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !r || !s)
            return null;
        var I = function (J) {
            var K = J.x, L = J.y, M = J.xAxis, N = J.yAxis, O = (0, o.createLabeledScales)({
                    x: M.scale,
                    y: N.scale
                }), P = O.apply({
                    x: K,
                    y: L
                }, { bandAware: !0 });
            return (0, n.ifOverflowMatches)(J, 'discard') && !O.isInRange(P) ? null : P;
        }(A);
        if (!_y)
            return null;
        var J = _y.x, K = _y.y, L = A.shape, M = A.className, N = v(v({ clipPath: (0, n.ifOverflowMatches)(A, 'hidden') ? 'url(#'.concat(F, ')') : void 0 }, (0, q.filterProps)(A, !0)), {}, {
                cx: J,
                cy: K
            });
        return a(h).createElement(j.Layer, { className: a(i)('recharts-reference-dot', M) }, _z.renderDot(L, N), l.Label.renderCallByParent(A, {
            x: J - D,
            y: K - D,
            width: 2 * D,
            height: 2 * D
        }));
    }
    _z.displayName = 'ReferenceDot', _z.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#fff',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1
    }, _z.renderDot = function (N, O) {
        return a(h).isValidElement(N) ? a(h).cloneElement(N, O) : a(E)(N) ? N(O) : a(h).createElement(F.Dot, r({}, O, {
            cx: O.cx,
            cy: O.cy,
            className: 'recharts-reference-dot-dot'
        }));
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'ifOverflowMatches', function () {
        return d;
    });
    var g = function (h, i) {
        var j = h.alwaysShow, k = h.ifOverflow;
        return j && (k = 'extendDomain'), k === i;
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'formatAxisMap', function () {
        return _v;
    }), b(e.exports, 'rectWithPoints', function () {
        return _w;
    }), b(e.exports, 'rectWithCoords', function () {
        return _x;
    }), b(e.exports, 'createLabeledScales', function () {
        return _z;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m, n) {
        for (var o = 0; o < n.length; o++) {
            var p = n[o];
            p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
        }
    }
    function o(p, q) {
        var r = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(p);
            q && (s = s.filter(function (t) {
                return Object.getOwnPropertyDescriptor(p, t).enumerable;
            })), r.push.apply(r, s);
        }
        return r;
    }
    function r(s) {
        for (var t = 1; t < arguments.length; t++) {
            var u = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(u), !0).forEach(function (v) {
                _u(s, v, u[v]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u)) : o(Object(u)).forEach(function (v) {
                Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(u, v));
            });
        }
        return s;
    }
    function _u(v, w, x) {
        return w in v ? Object.defineProperty(v, w, {
            value: x,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[w] = x, v;
    }
    var _v = function (w, x, y, z, A) {
            var B = w.width, C = w.height, D = w.layout, E = w.children, F = Object.keys(x), G = {
                    left: y.left,
                    leftMirror: y.left,
                    right: B - y.right,
                    rightMirror: B - y.right,
                    top: y.top,
                    topMirror: y.top,
                    bottom: C - y.bottom,
                    bottomMirror: C - y.bottom
                }, H = !!(0, j.findChildByType)(E, 'Bar');
            return F.reduce(function (I, J) {
                var K, L, M, N, O, P = x[J], Q = P.orientation, R = P.domain, S = P.padding, T = void 0 === S ? {} : S, U = P.mirror, V = P.reversed, W = ''.concat(Q).concat(U ? 'Mirror' : '');
                if ('number' === P.type && ('gap' === P.padding || 'no-gap' === P.padding)) {
                    var X = R[1] - R[0], Y = 1 / 0, Z = P.categoricalDomain.sort();
                    Z.forEach(function ($, ab) {
                        ab > 0 && (Y = Math.min(($ || 0) - (Z[ab - 1] || 0), Y));
                    });
                    var $ = Y / X, ab = 'vertical' === P.layout ? y.height : y.width;
                    if ('gap' === P.padding && (K = $ * ab / 2), 'no-gap' === P.padding) {
                        var bb = (0, k.getPercentValue)(w.barCategoryGap, $ * ab), cb = $ * ab / 2;
                        K = cb - bb - (cb - bb) / ab * bb;
                    }
                }
                L = 'xAxis' === z ? [
                    y.left + (T.left || 0) + (K || 0),
                    y.left + y.width - (T.right || 0) - (K || 0)
                ] : 'yAxis' === z ? 'horizontal' === D ? [
                    y.top + y.height - (T.bottom || 0),
                    y.top + (T.top || 0)
                ] : [
                    y.top + (T.top || 0) + (K || 0),
                    y.top + y.height - (T.bottom || 0) - (K || 0)
                ] : P.range, V && (L = [
                    L[1],
                    L[0]
                ]);
                var db = (0, i.parseScale)(P, A, H), eb = db.scale, fb = db.realScaleType;
                eb.domain(R).range(L), (0, i.checkDomainOfScale)(eb);
                var gb = (0, i.getTicksOfScale)(eb, r(r({}, P), {}, { realScaleType: fb }));
                'xAxis' === z ? (O = 'top' === Q && !U || 'bottom' === Q && U, M = y.left, N = G[W] - O * P.height) : 'yAxis' === z && (O = 'left' === Q && !U || 'right' === Q && U, M = G[W] - O * P.width, N = y.top);
                var hb = r(r(r({}, P), gb), {}, {
                    realScaleType: fb,
                    x: M,
                    y: N,
                    scale: eb,
                    width: 'xAxis' === z ? y.width : P.width,
                    height: 'yAxis' === z ? y.height : P.height
                });
                return hb.bandSize = (0, i.getBandSizeOfAxis)(hb, gb), P.hide || 'xAxis' !== z ? P.hide || (G[W] += (O ? -1 : 1) * hb.width) : G[W] += (O ? -1 : 1) * hb.height, r(r({}, I), {}, _u({}, J, hb));
            }, {});
        }, _w = function (x, y) {
            var z = x.x, A = x.y, B = y.x, C = y.y;
            return {
                x: Math.min(z, B),
                y: Math.min(A, C),
                width: Math.abs(B - z),
                height: Math.abs(C - A)
            };
        }, _x = function (y) {
            var z = y.x1, A = y.y1, B = y.x2, C = y.y2;
            return _w({
                x: z,
                y: A
            }, {
                x: B,
                y: C
            });
        }, y = function () {
            function z(A) {
                !function (B, C) {
                    if (!(B instanceof C))
                        throw new TypeError('Cannot call a class as a function');
                }(this, z), this.scale = void 0, this.scale = A;
            }
            var A, B, C;
            return A = z, B = [
                {
                    key: 'domain',
                    get: function () {
                        return this.scale.domain;
                    }
                },
                {
                    key: 'range',
                    get: function () {
                        return this.scale.range;
                    }
                },
                {
                    key: 'rangeMin',
                    get: function () {
                        return this.range()[0];
                    }
                },
                {
                    key: 'rangeMax',
                    get: function () {
                        return this.range()[1];
                    }
                },
                {
                    key: 'bandwidth',
                    get: function () {
                        return this.scale.bandwidth;
                    }
                },
                {
                    key: 'apply',
                    value: function (D) {
                        var E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, F = E.bandAware, G = E.position;
                        if (void 0 !== D) {
                            if (G)
                                switch (G) {
                                case 'start':
                                default:
                                    return this.scale(D);
                                case 'middle':
                                    var H = this.bandwidth ? this.bandwidth() / 2 : 0;
                                    return this.scale(D) + H;
                                case 'end':
                                    var I = this.bandwidth ? this.bandwidth() : 0;
                                    return this.scale(D) + I;
                                }
                            if (F) {
                                var J = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(D) + J;
                            }
                            return this.scale(D);
                        }
                    }
                },
                {
                    key: 'isInRange',
                    value: function (D) {
                        var E = this.range(), F = E[0], G = E[E.length - 1];
                        return F <= G ? D >= F && D <= G : D >= G && D <= F;
                    }
                }
            ], C = [{
                    key: 'create',
                    value: function (D) {
                        return new z(D);
                    }
                }], B && l(A.prototype, B), C && l(A, C), z;
        }();
    y.EPS = 0.0001;
    var _z = function (A) {
        var B = Object.keys(A).reduce(function (C, D) {
            return r(r({}, C), {}, _u({}, D, y.create(A[D])));
        }, {});
        return r(r({}, B), {}, {
            apply: function (C) {
                var D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, E = D.bandAware, F = D.position;
                return a(h)(C, function (G, H) {
                    return B[H].apply(G, {
                        bandAware: E,
                        position: F
                    });
                });
            },
            isInRange: function (C) {
                return a(g)(C, function (D, E) {
                    return B[E].isInRange(D);
                });
            }
        });
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    e.exports = function (j, k) {
        var l = {};
        return k = i(k, 3), h(j, function (m, n, o) {
            g(l, n, k(m, n, o));
        }), l;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i, j) {
        '__proto__' == i && g ? g(h, i, {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
        }) : h[i] = j;
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'warn', function () {
        return d;
    });
    var g = function (h, i) {
        for (var j = arguments.length, k = new Array(j > 2 ? j - 2 : 0), l = 2; l < j; l++)
            k[l - 2] = arguments[l];
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'ReferenceLine', function () {
        return _D;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function (w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }
    function u(v) {
        for (var w = 1; w < arguments.length; w++) {
            var x = null != arguments[w] ? arguments[w] : {};
            w % 2 ? r(Object(x), !0).forEach(function (y) {
                _x(v, y, x[y]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : r(Object(x)).forEach(function (y) {
                Object.defineProperty(v, y, Object.getOwnPropertyDescriptor(x, y));
            });
        }
        return v;
    }
    function _x(y, z, A) {
        return z in y ? Object.defineProperty(y, z, {
            value: A,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[z] = A, y;
    }
    function y(z, A) {
        return function (B) {
            if (Array.isArray(B))
                return B;
        }(z) || function (B, C) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(B)))
                return;
            var D = [], E = !0, F = !1, G = void 0;
            try {
                for (var H, I = B[Symbol.iterator](); !(E = (H = I.next()).done) && (D.push(H.value), !C || D.length !== C); E = !0);
            } catch (B) {
                F = !0, G = B;
            } finally {
                try {
                    E || null == I.return || I.return();
                } finally {
                    if (F)
                        throw G;
                }
            }
            return D;
        }(z, A) || function (B, C) {
            if (!B)
                return;
            if ('string' == typeof B)
                return _z(B, C);
            var D = Object.prototype.toString.call(B).slice(8, -1);
            'Object' === D && B.constructor && (D = B.constructor.name);
            if ('Map' === D || 'Set' === D)
                return Array.from(B);
            if ('Arguments' === D || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
                return _z(B, C);
        }(z, A) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _z(A, B) {
        (null == B || B > A.length) && (B = A.length);
        for (var C = 0, D = new Array(B); C < B; C++)
            D[C] = A[C];
        return D;
    }
    function C() {
        return C = Object.assign || function (D) {
            for (var E = 1; E < arguments.length; E++) {
                var F = arguments[E];
                for (var G in F)
                    Object.prototype.hasOwnProperty.call(F, G) && (D[G] = F[G]);
            }
            return D;
        }, C.apply(this, arguments);
    }
    function _D(E) {
        var F = E.x, G = E.y, H = E.segment, I = E.xAxis, J = E.yAxis, K = E.shape, L = E.className, M = E.alwaysShow, N = E.clipPathId;
        (0, p.warn)(void 0 === M, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var O = function (P, Q, R, S, T) {
            var U = T.viewBox, V = U.x, W = U.y, X = U.width, Y = U.height, Z = T.position;
            if (R) {
                var $ = T.y, ab = T.yAxis.orientation, bb = P.y.apply($, { position: Z });
                if ((0, m.ifOverflowMatches)(T, 'discard') && !P.y.isInRange(bb))
                    return null;
                var cb = [
                    {
                        x: V + X,
                        y: bb
                    },
                    {
                        x: V,
                        y: bb
                    }
                ];
                return 'left' === ab ? cb.reverse() : cb;
            }
            if (Q) {
                var db = T.x, eb = T.xAxis.orientation, fb = P.x.apply(db, { position: Z });
                if ((0, m.ifOverflowMatches)(T, 'discard') && !P.x.isInRange(fb))
                    return null;
                var gb = [
                    {
                        x: fb,
                        y: W + Y
                    },
                    {
                        x: fb,
                        y: W
                    }
                ];
                return 'top' === eb ? gb.reverse() : gb;
            }
            if (S) {
                var hb = T.segment.map(function (ib) {
                    return P.apply(ib, { position: Z });
                });
                return (0, m.ifOverflowMatches)(T, 'discard') && a(g)(hb, function (ib) {
                    return !P.isInRange(ib);
                }) ? null : hb;
            }
            return null;
        }((0, o.createLabeledScales)({
            x: r.scale,
            y: _x.scale
        }), (0, n.isNumOrStr)(F), (0, n.isNumOrStr)(G), H && 2 === H.length, E);
        if (!O)
            return null;
        var P = y(O, 2), Q = P[0], R = Q.x, S = Q.y, T = P[1], U = T.x, V = T.y, W = u(u({ clipPath: (0, m.ifOverflowMatches)(E, 'hidden') ? 'url(#'.concat(N, ')') : void 0 }, (0, q.filterProps)(E, !0)), {}, {
                x1: R,
                y1: S,
                x2: U,
                y2: V
            });
        return a(i).createElement(k.Layer, { className: a(j)('recharts-reference-line', _D) }, function (X, Y) {
            return a(i).isValidElement(X) ? a(i).cloneElement(X, Y) : a(h)(X) ? X(Y) : a(i).createElement('line', C({}, Y, { className: 'recharts-reference-line-line' }));
        }(_z, W), l.Label.renderCallByParent(E, (0, o.rectWithCoords)({
            x1: R,
            y1: S,
            x2: U,
            y2: V
        })));
    }
    _D.displayName = 'ReferenceLine', _D.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        fill: 'none',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1,
        position: 'middle'
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    e.exports = function (l, m, n) {
        var o = j(l) ? g : i;
        return n && k(l, m, n) && (m = void 0), o(l, h(m, 3));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h, i) {
        var j;
        return g(h, function (k, l, m) {
            return !(j = i(k, l, m));
        }), !!j;
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'ReferenceArea', function () {
        return _z;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    function r() {
        return r = Object.assign || function (s) {
            for (var t = 1; t < arguments.length; t++) {
                var u = arguments[t];
                for (var v in u)
                    Object.prototype.hasOwnProperty.call(u, v) && (s[v] = u[v]);
            }
            return s;
        }, r.apply(this, arguments);
    }
    function s(t, u) {
        var v = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(t);
            u && (w = w.filter(function (x) {
                return Object.getOwnPropertyDescriptor(t, x).enumerable;
            })), v.push.apply(v, w);
        }
        return v;
    }
    function v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? s(Object(y), !0).forEach(function (z) {
                _y(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : s(Object(y)).forEach(function (z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
    }
    function _y(z, A, B) {
        return A in z ? Object.defineProperty(z, A, {
            value: B,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : z[A] = B, z;
    }
    function _z(A) {
        var B = A.x1, C = A.x2, D = A.y1, E = A.y2, F = A.className, G = A.alwaysShow, H = A.clipPathId;
        (0, o.warn)(void 0 === r, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var I = (0, n.isNumOrStr)(B), J = (0, n.isNumOrStr)(C), K = (0, n.isNumOrStr)(D), L = (0, n.isNumOrStr)(E), M = A.shape;
        if (!(_y || J || K || L || M))
            return null;
        var N = function (O, P, Q, R, S) {
            var T = S.x1, U = S.x2, V = S.y1, W = S.y2, X = S.xAxis, Y = S.yAxis;
            if (!X || !Y)
                return null;
            var Z = (0, l.createLabeledScales)({
                    x: X.scale,
                    y: Y.scale
                }), $ = {
                    x: O ? Z.x.apply(T, { position: 'start' }) : Z.x.rangeMin,
                    y: Q ? Z.y.apply(V, { position: 'start' }) : Z.y.rangeMin
                }, ab = {
                    x: P ? Z.x.apply(U, { position: 'end' }) : Z.x.rangeMax,
                    y: R ? Z.y.apply(W, { position: 'end' }) : Z.y.rangeMax
                };
            return !(0, m.ifOverflowMatches)(S, 'discard') || Z.isInRange($) && Z.isInRange(ab) ? (0, l.rectWithPoints)($, ab) : null;
        }(_y, J, K, L, A);
        if (!N && !M)
            return null;
        var O = (0, m.ifOverflowMatches)(A, 'hidden') ? 'url(#'.concat(s, ')') : void 0;
        return a(h).createElement(j.Layer, { className: a(i)('recharts-reference-area', F) }, _z.renderRect(M, v(v({ clipPath: O }, (0, q.filterProps)(A, !0)), N)), k.Label.renderCallByParent(A, N));
    }
    _z.displayName = 'ReferenceArea', _z.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#ccc',
        fillOpacity: 0.5,
        stroke: 'none',
        strokeWidth: 1
    }, _z.renderRect = function (O, P) {
        return a(h).isValidElement(O) ? a(h).cloneElement(O, P) : a(E)(O) ? O(P) : a(h).createElement(F.Rectangle, r({}, P, { className: 'recharts-reference-area-rect' }));
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'eventCenter', function () {
        return _g;
    }), b(e.exports, 'SYNC_EVENT', function () {
        return _h;
    });
    var _g = new (a(d('.....')))();
    _g.setMaxListeners && _g.setMaxListeners(10);
    var _h = 'recharts.syncMouseEvents';
}), d.register('.....', function (e, f) {
    var g = Object.prototype.hasOwnProperty, h = '~';
    function i() {
    }
    function j(k, l, m) {
        this.fn = k, this.context = l, this.once = m || !1;
    }
    function k(l, m, n, o, p) {
        if ('function' != typeof n)
            throw new TypeError('The listener must be a function');
        var q = new j(n, o || l, p), r = h ? h + m : m;
        return l._events[r] ? l._events[r].fn ? l._events[r] = [
            l._events[r],
            q
        ] : l._events[r].push(q) : (l._events[r] = q, l._eventsCount++), l;
    }
    function n(o, p) {
        0 == --o._eventsCount ? o._events = new i() : delete o._events[p];
    }
    function o() {
        this._events = new i(), this._eventsCount = 0;
    }
    Object.create && (i.prototype = Object.create(null), new i().__proto__ || (h = !1)), o.prototype.eventNames = function () {
        var p, q, r = [];
        if (0 === this._eventsCount)
            return r;
        for (q in p = this._events)
            g.call(p, q) && r.push(h ? q.slice(1) : q);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(p)) : r;
    }, o.prototype.listeners = function (p) {
        var q = h ? h + p : p, r = this._events[q];
        if (!r)
            return [];
        if (r.fn)
            return [r.fn];
        for (var s = 0, t = r.length, u = new Array(t); s < t; s++)
            u[s] = r[s].fn;
        return u;
    }, o.prototype.listenerCount = function (p) {
        var q = h ? h + p : p, r = this._events[q];
        return r ? r.fn ? 1 : r.length : 0;
    }, o.prototype.emit = function (p, q, r, s, t, u) {
        var v = h ? h + p : p;
        if (!this._events[v])
            return !1;
        var w, x, y = this._events[v], z = arguments.length;
        if (y.fn) {
            switch (y.once && this.removeListener(p, y.fn, void 0, !0), z) {
            case 1:
                return y.fn.call(y.context), !0;
            case 2:
                return y.fn.call(y.context, q), !0;
            case 3:
                return y.fn.call(y.context, q, r), !0;
            case 4:
                return y.fn.call(y.context, q, r, s), !0;
            case 5:
                return y.fn.call(y.context, q, r, s, t), !0;
            case 6:
                return y.fn.call(y.context, q, r, s, t, u), !0;
            }
            for (x = 1, w = new Array(z - 1); x < z; x++)
                w[x - 1] = arguments[x];
            y.fn.apply(y.context, w);
        } else {
            var A, B = y.length;
            for (x = 0; x < B; x++)
                switch (y[x].once && this.removeListener(p, y[x].fn, void 0, !0), z) {
                case 1:
                    y[x].fn.call(y[x].context);
                    break;
                case 2:
                    y[x].fn.call(y[x].context, q);
                    break;
                case 3:
                    y[x].fn.call(y[x].context, q, r);
                    break;
                case 4:
                    y[x].fn.call(y[x].context, q, r, s);
                    break;
                default:
                    if (!w)
                        for (A = 1, w = new Array(z - 1); A < z; A++)
                            w[A - 1] = arguments[A];
                    y[x].fn.apply(y[x].context, w);
                }
        }
        return !0;
    }, o.prototype.on = function (p, q, r) {
        return k(this, p, q, r, !1);
    }, o.prototype.once = function (p, q, r) {
        return k(this, p, q, r, !0);
    }, o.prototype.removeListener = function (p, q, r, s) {
        var t = h ? h + p : p;
        if (!this._events[t])
            return this;
        if (!q)
            return n(this, t), this;
        var u = this._events[t];
        if (u.fn)
            u.fn !== q || s && !u.once || r && u.context !== r || n(this, t);
        else {
            for (var v = 0, w = [], x = u.length; v < x; v++)
                (u[v].fn !== q || s && !u[v].once || r && u[v].context !== r) && w.push(u[v]);
            w.length ? this._events[t] = 1 === w.length ? w[0] : w : n(this, t);
        }
        return this;
    }, o.prototype.removeAllListeners = function (p) {
        var q;
        return p ? (q = h ? h + p : p, this._events[q] && n(this, q)) : (this._events = new i(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = h, o.EventEmitter = o, e.exports = o;
}), d.register('.....', function (e, f) {
    b(e.exports, 'XAxis', function () {
        return d;
    });
    var g = function () {
        return null;
    };
    g.displayName = 'XAxis', g.defaultProps = {
        allowDecimals: !0,
        hide: !1,
        orientation: 'bottom',
        width: 0,
        height: 30,
        mirror: !1,
        xAxisId: 0,
        tickCount: 5,
        type: 'category',
        domain: [
            0,
            'auto'
        ],
        padding: {
            left: 0,
            right: 0
        },
        allowDataOverflow: !1,
        scale: 'auto',
        reversed: !1,
        allowDuplicatedCategory: !0
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'YAxis', function () {
        return d;
    });
    var g = function () {
        return null;
    };
    g.displayName = 'YAxis', g.defaultProps = {
        allowDuplicatedCategory: !0,
        allowDecimals: !0,
        hide: !1,
        orientation: 'left',
        width: 60,
        height: 0,
        mirror: !1,
        yAxisId: 0,
        tickCount: 5,
        type: 'number',
        domain: [
            0,
            'auto'
        ],
        padding: {
            top: 0,
            bottom: 0
        },
        allowDataOverflow: !1,
        scale: 'auto',
        reversed: !1
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'CartesianGrid', function () {
        return _H;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (m) {
            return typeof m;
        } : function (m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }
    function l() {
        return l = Object.assign || function (m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }
    function m(n, o) {
        if (null == n)
            return {};
        var p, q, r = function (s, t) {
                if (null == s)
                    return {};
                var u, v, w = {}, x = Object.keys(s);
                for (v = 0; v < x.length; v++)
                    u = x[v], t.indexOf(u) >= 0 || (w[u] = s[u]);
                return w;
            }(n, o);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(n, p) && (r[p] = n[p]);
        }
        return r;
    }
    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function (w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }
    function u(v) {
        for (var w = 1; w < arguments.length; w++) {
            var x = null != arguments[w] ? arguments[w] : {};
            w % 2 ? r(Object(x), !0).forEach(function (y) {
                _x(v, y, x[y]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : r(Object(x)).forEach(function (y) {
                Object.defineProperty(v, y, Object.getOwnPropertyDescriptor(x, y));
            });
        }
        return v;
    }
    function _x(y, z, A) {
        return z in y ? Object.defineProperty(y, z, {
            value: A,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[z] = A, y;
    }
    function y(z, A) {
        if (!(z instanceof A))
            throw new TypeError('Cannot call a class as a function');
    }
    function z(A, B) {
        for (var C = 0; C < B.length; C++) {
            var D = B[C];
            D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(A, D.key, D);
        }
    }
    function C(D, E) {
        return C = Object.setPrototypeOf || function (F, G) {
            return F.__proto__ = G, F;
        }, C(D, E);
    }
    function D(E) {
        var F = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (E) {
                return !1;
            }
        }();
        return function () {
            var G, H = _G(E);
            if (F) {
                var I = _G(this).constructor;
                G = Reflect.construct(H, arguments, I);
            } else
                G = H.apply(this, arguments);
            return _F(this, G);
        };
    }
    function _F(G, H) {
        return !H || 'object' !== k(H) && 'function' != typeof H ? function (I) {
            if (void 0 === I)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return I;
        }(G) : H;
    }
    function _G(H) {
        return _G = Object.setPrototypeOf ? Object.getPrototypeOf : function (I) {
            return I.__proto__ || Object.getPrototypeOf(I);
        }, _G(H);
    }
    var _H = function (I) {
        !function (J, K) {
            if ('function' != typeof K && null !== K)
                throw new TypeError('Super expression must either be null or a function');
            J.prototype = Object.create(K && K.prototype, {
                constructor: {
                    value: J,
                    writable: !0,
                    configurable: !0
                }
            }), K && C(J, K);
        }(r, I);
        var J, K, L, M = D(r);
        function N() {
            return y(this, N), M.apply(this, arguments);
        }
        return J = N, L = [{
                key: 'renderLineItem',
                value: function (O, P) {
                    var Q;
                    if (a(h).isValidElement(O))
                        Q = a(h).cloneElement(O, P);
                    else if (a(s)(O))
                        Q = O(P);
                    else {
                        var R = P.x1, S = P.y1, T = P.x2, U = P.y2, V = P.key, W = m(P, [
                                'x1',
                                'y1',
                                'x2',
                                'y2',
                                'key'
                            ]);
                        Q = a(h).createElement('line', l({}, (0, j.filterProps)(W), {
                            x1: R,
                            y1: S,
                            x2: T,
                            y2: U,
                            fill: 'none',
                            key: V
                        }));
                    }
                    return Q;
                }
            }], (K = [
            {
                key: 'renderHorizontal',
                value: function (O) {
                    var P = this, Q = this.props, R = Q.x, S = Q.width, T = Q.horizontal;
                    if (!O || !O.length)
                        return null;
                    var U = O.map(function (V, W) {
                        var X = u(u({}, P.props), {}, {
                            x1: R,
                            y1: V,
                            x2: R + S,
                            y2: V,
                            key: 'line-'.concat(W),
                            index: W
                        });
                        return N.renderLineItem(T, X);
                    });
                    return a(h).createElement('g', { className: 'recharts-cartesian-grid-horizontal' }, U);
                }
            },
            {
                key: 'renderVertical',
                value: function (O) {
                    var P = this, Q = this.props, R = Q.y, S = Q.height, T = Q.vertical;
                    if (!O || !O.length)
                        return null;
                    var U = O.map(function (V, W) {
                        var X = u(u({}, P.props), {}, {
                            x1: V,
                            y1: R,
                            x2: V,
                            y2: R + S,
                            key: 'line-'.concat(W),
                            index: W
                        });
                        return N.renderLineItem(T, X);
                    });
                    return a(h).createElement('g', { className: 'recharts-cartesian-grid-vertical' }, U);
                }
            },
            {
                key: 'renderVerticalStripes',
                value: function (O) {
                    var P = this.props.verticalFill;
                    if (!P || !P.length)
                        return null;
                    var Q = this.props, R = Q.fillOpacity, S = Q.x, T = Q.y, U = Q.width, V = Q.height, W = O.slice().sort(function (X, Y) {
                            return X - Y;
                        });
                    S !== W[0] && W.unshift(0);
                    var X = W.map(function (Y, Z) {
                        var $ = W[Z + 1] ? W[Z + 1] - Y : S + U - Y;
                        if ($ <= 0)
                            return null;
                        var ab = Z % P.length;
                        return a(h).createElement('rect', {
                            key: 'react-'.concat(Z),
                            x: Math.round(Y + S - S),
                            y: T,
                            width: $,
                            height: V,
                            stroke: 'none',
                            fill: P[ab],
                            fillOpacity: R,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(h).createElement('g', { className: 'recharts-cartesian-gridstripes-vertical' }, X);
                }
            },
            {
                key: 'renderHorizontalStripes',
                value: function (O) {
                    var P = this.props.horizontalFill;
                    if (!P || !P.length)
                        return null;
                    var Q = this.props, R = Q.fillOpacity, S = Q.x, T = Q.y, U = Q.width, V = Q.height, W = O.slice().sort(function (X, Y) {
                            return X - Y;
                        });
                    T !== W[0] && W.unshift(0);
                    var X = W.map(function (Y, Z) {
                        var $ = W[Z + 1] ? W[Z + 1] - Y : T + V - Y;
                        if ($ <= 0)
                            return null;
                        var ab = Z % P.length;
                        return a(h).createElement('rect', {
                            key: 'react-'.concat(Z),
                            y: Math.round(Y + T - T),
                            x: S,
                            height: $,
                            width: U,
                            stroke: 'none',
                            fill: P[ab],
                            fillOpacity: R,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(h).createElement('g', { className: 'recharts-cartesian-gridstripes-horizontal' }, X);
                }
            },
            {
                key: 'renderBackground',
                value: function () {
                    var O = this.props.fill;
                    if (!O || 'none' === O)
                        return null;
                    var P = this.props, Q = P.fillOpacity, R = P.x, S = P.y, T = P.width, U = P.height;
                    return a(h).createElement('rect', {
                        x: R,
                        y: S,
                        width: T,
                        height: U,
                        stroke: 'none',
                        fill: O,
                        fillOpacity: Q,
                        className: 'recharts-cartesian-grid-bg'
                    });
                }
            },
            {
                key: 'render',
                value: function () {
                    var O = this.props, P = O.x, Q = O.y, R = O.width, S = O.height, T = O.horizontal, U = O.vertical, V = O.horizontalCoordinatesGenerator, W = O.verticalCoordinatesGenerator, X = O.xAxis, Y = O.yAxis, Z = O.offset, $ = O.chartWidth, ab = O.chartHeight;
                    if (!(0, i.isNumber)(R) || R <= 0 || !(0, i.isNumber)(S) || S <= 0 || !(0, i.isNumber)(P) || P !== +P || !(0, i.isNumber)(Q) || Q !== +Q)
                        return null;
                    var bb = this.props, cb = bb.horizontalPoints, db = bb.verticalPoints;
                    return cb && cb.length || !a(s)(V) || (cb = V({
                        yAxis: Y,
                        width: $,
                        height: ab,
                        offset: Z
                    })), db && db.length || !a(s)(W) || (db = W({
                        xAxis: X,
                        width: $,
                        height: ab,
                        offset: Z
                    })), a(h).createElement('g', { className: 'recharts-cartesian-grid' }, this.renderBackground(), T && this.renderHorizontal(cb), U && this.renderVertical(db), T && this.renderHorizontalStripes(cb), U && this.renderVerticalStripes(db));
                }
            }
        ]) && z(J.prototype, K), L && z(J, L), N;
    }(h.PureComponent);
    _H.displayName = 'CartesianGrid', _H.defaultProps = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: []
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'ResponsiveContainer', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function m() {
        return m = Object.assign || function (n) {
            for (var o = 1; o < arguments.length; o++) {
                var p = arguments[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (n[q] = p[q]);
            }
            return n;
        }, m.apply(this, arguments);
    }
    function n(o, p) {
        return function (q) {
            if (Array.isArray(q))
                return q;
        }(o) || function (q, r) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(q)))
                return;
            var s = [], t = !0, u = !1, v = void 0;
            try {
                for (var w, x = q[Symbol.iterator](); !(t = (w = x.next()).done) && (s.push(w.value), !r || s.length !== r); t = !0);
            } catch (q) {
                u = !0, v = q;
            } finally {
                try {
                    t || null == x.return || x.return();
                } finally {
                    if (u)
                        throw v;
                }
            }
            return s;
        }(o, p) || function (q, r) {
            if (!q)
                return;
            if ('string' == typeof q)
                return _o(q, r);
            var s = Object.prototype.toString.call(q).slice(8, -1);
            'Object' === s && q.constructor && (s = q.constructor.name);
            if ('Map' === s || 'Set' === s)
                return Array.from(q);
            if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
                return _o(q, r);
        }(o, p) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function _o(p, q) {
        (null == q || q > p.length) && (q = p.length);
        for (var r = 0, s = new Array(q); r < q; r++)
            s[r] = p[r];
        return s;
    }
    var _r = (0, i.forwardRef)(function (s, t) {
        var u = s.aspect, v = s.width, w = void 0 === v ? '100%' : v, x = s.height, y = void 0 === x ? '100%' : x, z = s.minWidth, A = s.minHeight, B = s.maxHeight, C = s.children, D = s.debounce, E = void 0 === D ? 0 : D, F = s.id, G = s.className, H = n((0, i.useState)({
                containerWidth: -1,
                containerHeight: -1
            }), 2), I = H[0], J = H[1], K = (0, i.useRef)(null);
        (0, i.useImperativeHandle)(t, function () {
            return K;
        }, [K]);
        var L = n((0, i.useState)(!1), 2), M = L[0], N = L[1], O = function () {
                return K.current ? {
                    containerWidth: K.current.clientWidth,
                    containerHeight: K.current.clientHeight
                } : null;
            }, P = function () {
                if (M) {
                    var Q = O();
                    if (Q) {
                        var R = I.containerWidth, S = I.containerHeight, T = Q.containerWidth, U = Q.containerHeight;
                        T === R && U === S || J({
                            containerWidth: T,
                            containerHeight: U
                        });
                    }
                }
            }, Q = E > 0 ? a(g)(P, E) : P;
        (0, i.useEffect)(function () {
            if (M) {
                var R = O();
                R && J(R);
            }
        }, [M]), (0, i.useEffect)(function () {
            N(!0);
        }, []);
        var R = {
            width: w,
            height: y,
            minWidth: z,
            minHeight: A,
            maxHeight: B
        };
        return a(i).createElement(j.default, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: Q,
            targetRef: K
        }, a(i).createElement('div', m({}, null != F ? { id: ''.concat(F) } : {}, {
            className: a(h)('recharts-responsive-container', G),
            style: R,
            ref: K
        }), function () {
            var S = I.containerWidth, T = I.containerHeight;
            if (S < 0 || T < 0)
                return null;
            (0, l.warn)((0, k.isPercent)(w) || (0, k.isPercent)(y), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', w, y), (0, l.warn)(!u || u > 0, 'The aspect(%s) must be greater than zero.', u);
            var U = (0, k.isPercent)(w) ? S : w, V = (0, k.isPercent)(y) ? T : y;
            return u && u > 0 && (U ? V = U / u : V && (U = V * u), B && V > B && (V = B)), (0, l.warn)(U > 0 || V > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', U, V, w, y, z, A, u), (0, i.cloneElement)(C, {
                width: U,
                height: V
            });
        }()));
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _gb;
    });
    var g = d('.....'), h = (g = d('.....'), d('.....')), i = function (j, k) {
            return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (l, m) {
                l.__proto__ = m;
            } || function (l, m) {
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (l[n] = m[n]);
            }, i(j, k);
        };
    function j(k, l) {
        if ('function' != typeof l && null !== l)
            throw new TypeError('Class extends value ' + String(l) + ' is not a constructor or null');
        function m() {
            this.constructor = k;
        }
        i(k, l), k.prototype = null === l ? Object.create(l) : (m.prototype = l.prototype, new m());
    }
    function k(l, m) {
        var n = {};
        for (var o in l)
            Object.prototype.hasOwnProperty.call(l, o) && m.indexOf(o) < 0 && (n[o] = l[o]);
        if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
            var p = 0;
            for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
        }
        return n;
    }
    var o = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n ? n : 'undefined' != typeof self ? self : {};
    var p = function (q) {
            var r = typeof q;
            return null != q && ('object' == r || 'function' == r);
        }, q = 'object' == typeof o && o && o.Object === Object && o, r = 'object' == typeof self && self && self.Object === Object && self, s = q || r || Function('return this')(), t = s, u = function () {
            return t.Date.now();
        }, v = /\s/;
    var w = function (x) {
            for (var y = x.length; y-- && v.test(x.charAt(y)););
            return y;
        }, x = /^\s+/;
    var y = function (z) {
            return z ? z.slice(0, w(z) + 1).replace(x, '') : z;
        }, z = s.Symbol, A = z, B = Object.prototype, C = B.hasOwnProperty, D = B.toString, E = A ? A.toStringTag : void 0;
    var F = function (G) {
            var H = C.call(G, E), I = G[E];
            try {
                G[E] = void 0;
                var J = !0;
            } catch (G) {
            }
            var K = D.call(G);
            return J && (H ? G[E] = I : delete G[E]), K;
        }, G = Object.prototype.toString;
    var H = F, I = function (J) {
            return G.call(J);
        }, J = z ? z.toStringTag : void 0;
    var K = function (L) {
            return null == L ? void 0 === L ? '[object Undefined]' : '[object Null]' : J && J in Object(L) ? H(L) : I(L);
        }, L = function (M) {
            return null != M && 'object' == typeof M;
        };
    var M = y, N = p, O = function (P) {
            return 'symbol' == typeof P || L(P) && '[object Symbol]' == K(P);
        }, P = /^[-+]0x[0-9a-f]+$/i, Q = /^0b[01]+$/i, R = /^0o[0-7]+$/i, S = parseInt;
    var T = p, U = u, V = function (W) {
            if ('number' == typeof W)
                return W;
            if (O(W))
                return NaN;
            if (N(W)) {
                var X = 'function' == typeof W.valueOf ? W.valueOf() : W;
                W = N(X) ? X + '' : X;
            }
            if ('string' != typeof W)
                return 0 === W ? W : +W;
            W = M(W);
            var Y = Q.test(W);
            return Y || R.test(W) ? S(W.slice(2), Y ? 2 : 8) : P.test(W) ? NaN : +W;
        }, W = Math.max, X = Math.min;
    var Y = function (Z, $, ab) {
            var bb, cb, db, eb, fb, gb, hb = 0, ib = !1, jb = !1, kb = !0;
            if ('function' != typeof Z)
                throw new TypeError('Expected a function');
            function lb(mb) {
                var nb = bb, ob = cb;
                return bb = cb = void 0, hb = mb, eb = Z.apply(ob, nb);
            }
            function ob(pb) {
                return hb = pb, fb = setTimeout(u, $), ib ? lb(pb) : eb;
            }
            function pb(qb) {
                var rb = qb - gb;
                return void 0 === gb || rb >= $ || rb < 0 || jb && qb - hb >= ob;
            }
            function rb() {
                var sb = U();
                if (pb(sb))
                    return v(sb);
                fb = setTimeout(rb, function (tb) {
                    var ub = $ - (tb - gb);
                    return jb ? X(ub, ob - (tb - hb)) : ub;
                }(sb));
            }
            function tb(ub) {
                return fb = void 0, kb && bb ? lb(ub) : (bb = cb = void 0, eb);
            }
            function ub() {
                var vb = U(), wb = pb(vb);
                if (bb = arguments, cb = this, gb = vb, wb) {
                    if (void 0 === fb)
                        return ob(gb);
                    if (jb)
                        return clearTimeout(fb), fb = setTimeout(rb, $), lb(gb);
                }
                return void 0 === fb && (fb = setTimeout(rb, $)), eb;
            }
            return $ = V($) || 0, T(wb) && (ib = !!wb.leading, ob = (jb = 'maxWait' in wb) ? W(V(wb.maxWait) || 0, $) : ob, kb = 'trailing' in wb ? !!wb.trailing : kb), ub.cancel = function () {
                void 0 !== fb && clearTimeout(fb), hb = 0, bb = gb = cb = fb = void 0;
            }, ub.flush = function () {
                return void 0 === fb ? eb : tb(U());
            }, ub;
        }, Z = Y, $ = p;
    var ab = function (bb, cb, db) {
            var eb = !0, fb = !0;
            if ('function' != typeof bb)
                throw new TypeError('Expected a function');
            return $(db) && (eb = 'leading' in db ? !!db.leading : eb, fb = 'trailing' in db ? !!db.trailing : fb), Z(bb, cb, {
                leading: eb,
                maxWait: cb,
                trailing: fb
            });
        }, bb = function (cb, db, eb, fb) {
            switch (db) {
            case 'debounce':
                return Y(cb, eb, fb);
            case 'throttle':
                return ab(cb, eb, fb);
            default:
                return cb;
            }
        }, cb = function (db) {
            return 'function' == typeof db;
        }, db = function () {
            return 'undefined' == typeof window;
        }, eb = function (fb) {
            return fb instanceof Element || fb instanceof HTMLDocument;
        }, fb = function (gb, hb, ib, jb) {
            return function (kb) {
                var lb = kb.width, mb = kb.height;
                hb(function (nb) {
                    return nb.width === lb && nb.height === mb || nb.width === lb && !jb || nb.height === mb && !ib ? nb : (gb && cb(gb) && gb(lb, mb), {
                        width: lb,
                        height: mb
                    });
                });
            };
        }, _gb = function (hb) {
            function ib(jb) {
                var kb = hb.call(this, jb) || this;
                kb.cancelHandler = function () {
                    kb.resizeHandler && kb.resizeHandler.cancel && (kb.resizeHandler.cancel(), kb.resizeHandler = null);
                }, kb.attachObserver = function () {
                    var lb = kb.props, mb = lb.targetRef, nb = lb.observerOptions;
                    if (!db()) {
                        mb && mb.current && (kb.targetRef.current = mb.current);
                        var ob = kb.getElement();
                        ob && (kb.observableElement && kb.observableElement === ob || (kb.observableElement = ob, kb.resizeObserver.observe(ob, nb)));
                    }
                }, kb.getElement = function () {
                    var lb = kb.props, mb = lb.querySelector, nb = lb.targetDomEl;
                    if (db())
                        return null;
                    if (mb)
                        return document.querySelector(mb);
                    if (nb && eb(nb))
                        return nb;
                    if (kb.targetRef && eb(kb.targetRef.current))
                        return kb.targetRef.current;
                    var ob = (0, h.findDOMNode)(kb);
                    if (!ob)
                        return null;
                    switch (kb.getRenderType()) {
                    case 'renderProp':
                    case 'childFunction':
                    case 'child':
                    case 'childArray':
                        return ob;
                    default:
                        return ob.parentElement;
                    }
                }, kb.createResizeHandler = function (lb) {
                    var mb = kb.props, nb = mb.handleWidth, ob = void 0 === nb || nb, pb = mb.handleHeight, qb = void 0 === pb || pb, rb = mb.onResize;
                    if (ob || qb) {
                        var sb = fb(rb, kb.setState.bind(kb), ob, qb);
                        lb.forEach(function (tb) {
                            var ub = tb && tb.contentRect || {}, vb = ub.width, wb = ub.height;
                            !kb.skipOnMount && !db() && sb({
                                width: vb,
                                height: wb
                            }), kb.skipOnMount = !1;
                        });
                    }
                }, kb.getRenderType = function () {
                    var lb = kb.props, mb = lb.render, nb = lb.children;
                    return cb(mb) ? 'renderProp' : cb(nb) ? 'childFunction' : (0, g.isValidElement)(nb) ? 'child' : Array.isArray(nb) ? 'childArray' : 'parent';
                };
                var lb = jb.skipOnMount, mb = jb.refreshMode, nb = jb.refreshRate, ob = void 0 === nb ? 1000 : nb, pb = jb.refreshOptions;
                return kb.state = {
                    width: void 0,
                    height: void 0
                }, kb.skipOnMount = lb, kb.targetRef = (0, g.createRef)(), kb.observableElement = null, db() || (kb.resizeHandler = bb(kb.createResizeHandler, mb, ob, pb), kb.resizeObserver = new window.ResizeObserver(kb.resizeHandler)), kb;
            }
            return ob(ib, hb), ib.prototype.componentDidMount = function () {
                this.attachObserver();
            }, ib.prototype.componentDidUpdate = function () {
                this.attachObserver();
            }, ib.prototype.componentWillUnmount = function () {
                db() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
            }, ib.prototype.render = function () {
                var pb, qb = this.props, rb = qb.render, sb = qb.children, tb = qb.nodeType, ub = void 0 === tb ? 'div' : tb, vb = this.state, wb = {
                        width: vb.width,
                        height: vb.height,
                        targetRef: this.targetRef
                    };
                switch (this.getRenderType()) {
                case 'renderProp':
                    return rb && rb(wb);
                case 'childFunction':
                    return (pb = sb)(wb);
                case 'child':
                    if ((pb = sb).type && 'string' == typeof pb.type) {
                        var xb = pb(wb, ['targetRef']);
                        return (0, g.cloneElement)(pb, xb);
                    }
                    return (0, g.cloneElement)(pb, wb);
                case 'childArray':
                    return (pb = sb).map(function (yb) {
                        return !!yb && (0, g.cloneElement)(yb, wb);
                    });
                default:
                    return g.createElement(ub, null);
                }
            }, ib;
        }(g.PureComponent);
    db() ? g.useEffect : g.useLayoutEffect;
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = function (l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'BarChartOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    var g = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z' }
                }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    const i = ['bulk-analytics'];
    var _j = k => (0, g.useQuery)({
        queryKey: [
            i,
            k
        ],
        queryFn: () => (0, h.requestAsPromise)({ url: '/api/bulk/usage/' + k }),
        retry: 0
    });
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = function (l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'CheckOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function (e, f) {
    b(e.exports, 'default', function () {
        return d;
    });
    var g = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        return g && g.__esModule ? g : { default: g };
    };
});