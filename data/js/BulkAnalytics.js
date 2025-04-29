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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('jKeM0', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), b(e.exports, 'default', function() {
        return _D;
    });
    var h = d('gRbUn');
    d('O0Kav');
    var i = d('ShGdc'),
        j = d('p+Ndh'),
        k = d('uBYxz'),
        l = d('NhCpL'),
        m = d('By6Bp'),
        n = d('Afqjn'),
        o = d('pMd/u'),
        p = d('8KqQ+'),
        q = d('quE27'),
        r = d('u4s09'),
        s = d('eyhCL'),
        t = d('ZKc1Q'),
        u = d('cOX1W'),
        v = d('OdAs9'),
        w = d('Eh2Wh'),
        x = d('Tzf4u');
    let y, z, A, B, C = a => a;
    var _D = b => {
        const {
            bulkId: E
        } = b, {
            data: F,
            isLoading: G
        } = (0, v.default)(E);
        if (G)
            return (0, h.jsx)(_E, {
                children: (0, h.jsx)(t.default, {
                    paragraph: {
                        rows: 14
                    }
                })
            });
        const H = null == F ? void 0 : F.monthlyInfo;
        if (!H || !H.length) {
            const I = Math.abs(a(x)().diff(a(x)((0, q.dateFromObjectId)(E)), 'months')) < 2;
            return (0, h.jsx)(_E, {
                children: (0, h.jsxs)('div', {
                    className: 'maxWidth flex-center flex-column',
                    style: {
                        minHeight: 400
                    },
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
                            children: I ? 'No usage data is available for this group license yet. Check back soon!' : 'No usage data is available for this group license.'
                        })
                    ]
                })
            });
        }
        return (0, h.jsxs)(_E, {
            children: [
                (0, h.jsx)(_F, {
                    children: 'Group Usage'
                }),
                (0, h.jsx)(_G, {
                    children: 'The percentage of members have hosted a live game since the group license was activated'
                }),
                (0, h.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, h.jsx)(s.default, {
                    type: 'circle',
                    width: 200,
                    percent: Math.ceil(100 * F.percentageUsage),
                    format: () => Math.ceil(100 * F.percentageUsage) + '%',
                    strokeColor: '#66bb6a'
                }),
                (0, h.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, h.jsx)(_F, {
                    children: 'Monthly Usage'
                }),
                (0, h.jsx)(_G, {
                    children: 'Percentage of members who hosted a live game in a given month.'
                }),
                (0, h.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
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
                            data: H.map(a => ({
                                name: a.monthName,
                                Percentage: Math.ceil(100 * a.percentageOfMembersWhoHosted)
                            })),
                            children: [
                                (0, h.jsx)(k.CartesianGrid, {
                                    strokeDasharray: '3 3'
                                }),
                                (0, h.jsx)(n.XAxis, {
                                    dataKey: 'name'
                                }),
                                (0, h.jsx)(o.YAxis, {
                                    tickFormatter: a => a + '%'
                                }),
                                (0, h.jsx)(m.Tooltip, {
                                    formatter: a => (0, q.numberWithCommas)(a) + '%'
                                }),
                                (0, h.jsx)(i.Bar, {
                                    dataKey: 'Percentage',
                                    fill: p.default.BackgroundPurple
                                })
                            ]
                        })
                    })
                }),
                (0, h.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, h.jsx)(_F, {
                    children: 'Monthly Usage Frequency'
                }),
                (0, h.jsx)(_G, {
                    children: 'Average live games hosted per active member each month'
                }),
                (0, h.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
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
                            data: H.map(a => ({
                                name: a.monthName,
                                'Average Live Games Hosted': Math.round(a.averageGamesHosted)
                            })),
                            children: [
                                (0, h.jsx)(k.CartesianGrid, {
                                    strokeDasharray: '3 3'
                                }),
                                (0, h.jsx)(n.XAxis, {
                                    dataKey: 'name'
                                }),
                                (0, h.jsx)(o.YAxis, {}),
                                (0, h.jsx)(m.Tooltip, {
                                    formatter: a => (0, q.numberWithCommas)(a)
                                }),
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
    const _E = r.default.div.attrs({
            className: 'maxWidth'
        })(y || (y = C`
  color: ${ 0 };
  font-family: ${ 0 };
  padding-top: 8px;
`), p.default.Black, w.Fonts.SFPro),
        _F = r.default.div(z || (z = C`
  font-size: 25px;
  font-weight: ${ 0 };
`), w.FontWeights.UltraBold),
        _G = r.default.div(A || (A = C`
  font-size: 17px;
`)),
        _H = r.default.div.attrs({
            className: 'maxWidth'
        })(B || (B = C`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`));
}), d.register('ShGdc', function(e, f) {
    b(e.exports, 'Bar', function() {
        return _J;
    });
    var g = d('lAmnl'),
        h = d('sYnlz'),
        i = d('kwUzI'),
        j = d('Tvpkn0'),
        k = d('O0Kav'),
        l = d('/U36/'),
        m = d('feG/l'),
        n = d('50CUY'),
        o = d('mzVm0'),
        p = d('IUHvY'),
        q = d('WRgdi'),
        r = d('8X3EY'),
        s = d('cUlop'),
        t = d('1aRlp'),
        u = d('9vNM9'),
        v = d('Yv4x1'),
        w = d('3mYHS');

    function x(y) {
        return x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(z) {
            return typeof z;
        } : function(z) {
            return z && 'function' == typeof Symbol && z.constructor === Symbol && z !== Symbol.prototype ? 'symbol' : typeof z;
        }, x(y);
    }

    function y(z, A) {
        if (null == z)
            return {};
        var B, C, D = function(E, F) {
            if (null == E)
                return {};
            var G, H, I = {},
                J = Object.keys(E);
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

    function z() {
        return z = Object.assign || function(A) {
            for (var B = 1; B < arguments.length; B++) {
                var C = arguments[B];
                for (var D in C)
                    Object.prototype.hasOwnProperty.call(C, D) && (A[D] = C[D]);
            }
            return A;
        }, z.apply(this, arguments);
    }

    function A(B, C) {
        var D = Object.keys(B);
        if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(B);
            C && (E = E.filter(function(F) {
                return Object.getOwnPropertyDescriptor(B, F).enumerable;
            })), D.push.apply(D, E);
        }
        return D;
    }

    function B(C) {
        for (var D = 1; D < arguments.length; D++) {
            var E = null != arguments[D] ? arguments[D] : {};
            D % 2 ? A(Object(E), !0).forEach(function(F) {
                _C(C, F, E[F]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(E)) : A(Object(E)).forEach(function(F) {
                Object.defineProperty(C, F, Object.getOwnPropertyDescriptor(E, F));
            });
        }
        return C;
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
        if (!(E instanceof F))
            throw new TypeError('Cannot call a class as a function');
    }

    function E(F, G) {
        for (var H = 0; H < G.length; H++) {
            var I = G[H];
            I.enumerable = I.enumerable || !1, I.configurable = !0, 'value' in I && (I.writable = !0), Object.defineProperty(F, I.key, I);
        }
    }

    function F(G, H) {
        return F = Object.setPrototypeOf || function(I, J) {
            return I.__proto__ = J, I;
        }, F(G, H);
    }

    function G(H) {
        var I = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (H) {
                return !1;
            }
        }();
        return function() {
            var J, K = _I(H);
            if (I) {
                var L = _I(this).constructor;
                J = Reflect.construct(K, arguments, L);
            } else
                J = K.apply(this, arguments);
            return _H(this, J);
        };
    }

    function _H(I, J) {
        return !J || 'object' !== x(J) && 'function' != typeof J ? function(K) {
            if (void 0 === K)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return K;
        }(I) : J;
    }

    function _I(J) {
        return _I = Object.setPrototypeOf ? Object.getPrototypeOf : function(K) {
            return K.__proto__ || Object.getPrototypeOf(K);
        }, _I(J);
    }
    var _J = function(K) {
        ! function(L, M) {
            if ('function' != typeof M && null !== M)
                throw new TypeError('Super expression must either be null or a function');
            L.prototype = Object.create(M && M.prototype, {
                constructor: {
                    value: L,
                    writable: !0,
                    configurable: !0
                }
            }), M && F(L, M);
        }(q, K);
        var L, M, N, O = G(q);

        function P() {
            var Q;
            D(this, P);
            for (var R = arguments.length, S = new Array(R), T = 0; T < R; T++)
                S[T] = arguments[T];
            return (Q = O.call.apply(O, [this].concat(S))).state = {
                isAnimationFinished: !1
            }, Q.id = (0, s.uniqueId)('recharts-bar-'), Q.handleAnimationEnd = function() {
                var U = Q.props.onAnimationEnd;
                Q.setState({
                    isAnimationFinished: !0
                }), U && U();
            }, Q.handleAnimationStart = function() {
                var U = Q.props.onAnimationStart;
                Q.setState({
                    isAnimationFinished: !1
                }), U && U();
            }, Q;
        }
        return L = P, N = [{
                key: 'getDerivedStateFromProps',
                value: function(Q, R) {
                    return Q.animationId !== R.prevAnimationId ? {
                        prevAnimationId: Q.animationId,
                        curData: Q.data,
                        prevData: R.curData
                    } : Q.data !== R.curData ? {
                        curData: Q.data
                    } : null;
                }
            },
            {
                key: 'renderRectangle',
                value: function(Q, R) {
                    return a(k).isValidElement(Q) ? a(k).cloneElement(Q, R) : a(i)(Q) ? Q(R) : a(k).createElement(n.Rectangle, R);
                }
            }
        ], (M = [{
                key: 'renderRectanglesStatically',
                value: function(Q) {
                    var R = this,
                        S = this.props.shape,
                        T = (0, w.filterProps)(this.props);
                    return Q && Q.map(function(U, V) {
                        var W = B(B(B({}, T), U), {}, {
                            index: V
                        });
                        return a(k).createElement(o.Layer, z({
                            className: 'recharts-bar-rectangle'
                        }, (0, w.adaptEventsOfChild)(R.props, U, V), {
                            key: 'rectangle-'.concat(V)
                        }), P.renderRectangle(S, W));
                    });
                }
            },
            {
                key: 'renderRectanglesWithAnimation',
                value: function() {
                    var Q = this,
                        R = this.props,
                        S = R.data,
                        T = R.layout,
                        U = R.isAnimationActive,
                        V = R.animationBegin,
                        W = R.animationDuration,
                        X = R.animationEasing,
                        Y = R.animationId,
                        Z = this.state.prevData;
                    return a(k).createElement(m.default, {
                        begin: V,
                        duration: W,
                        isActive: U,
                        easing: X,
                        from: {
                            t: 0
                        },
                        to: {
                            t: 1
                        },
                        key: 'bar-'.concat(Y),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart
                    }, function($) {
                        var ab = $.t,
                            bb = S.map(function(cb, db) {
                                var eb = Z && Z[db];
                                if (eb) {
                                    var fb = (0, s.interpolateNumber)(eb.x, cb.x),
                                        gb = (0, s.interpolateNumber)(eb.y, cb.y),
                                        hb = (0, s.interpolateNumber)(eb.width, cb.width),
                                        ib = (0, s.interpolateNumber)(eb.height, cb.height);
                                    return B(B({}, cb), {}, {
                                        x: fb(ab),
                                        y: gb(ab),
                                        width: hb(ab),
                                        height: ib(ab)
                                    });
                                }
                                if ('horizontal' === T) {
                                    var fb = (0, s.interpolateNumber)(0, cb.height)(ab);
                                    return B(B({}, cb), {}, {
                                        y: cb.y + cb.height - fb,
                                        height: fb
                                    });
                                }
                                var fb = (0, s.interpolateNumber)(0, cb.width)(ab);
                                return B(B({}, cb), {}, {
                                    width: fb
                                });
                            });
                        return a(k).createElement(o.Layer, null, Q.renderRectanglesStatically(bb));
                    });
                }
            },
            {
                key: 'renderRectangles',
                value: function() {
                    var Q = this.props,
                        R = Q.data,
                        S = Q.isAnimationActive,
                        T = this.state.prevData;
                    return !(S && R && R.length) || T && a(h)(T, R) ? this.renderRectanglesStatically(R) : this.renderRectanglesWithAnimation();
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var Q = this,
                        R = this.props.data,
                        S = (0, w.filterProps)(this.props.background);
                    return R.map(function(T, U) {
                        T.value;
                        var V = T.background,
                            W = y(T, [
                                'value',
                                'background'
                            ]);
                        if (!V)
                            return null;
                        var X = B(B(B(B(B({}, W), {}, {
                            fill: '#eee'
                        }, V), S), (0, w.adaptEventsOfChild)(Q.props, T, U)), {}, {
                            index: U,
                            key: 'background-bar-'.concat(U),
                            className: 'recharts-bar-background-rectangle'
                        });
                        return P.renderRectangle(Q.props.background, X);
                    });
                }
            },
            {
                key: 'renderErrorBar',
                value: function() {
                    if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                        return null;
                    var Q = this.props,
                        R = Q.data,
                        S = Q.xAxis,
                        T = Q.yAxis,
                        U = Q.layout,
                        V = Q.children,
                        W = (0, t.findAllByType)(V, p.ErrorBar.displayName);
                    if (!W)
                        return null;
                    var X = 'vertical' === U ? R[0].height / 2 : R[0].width / 2;

                    function Y(Z, $) {
                        return {
                            x: Z.x,
                            y: Z.y,
                            value: Z.value,
                            errorVal: (0, v.getValueByDataKey)(Z, $)
                        };
                    }
                    return W.map(function(Z, $) {
                        return a(k).cloneElement(Z, {
                            key: 'error-bar-'.concat($),
                            data: R,
                            xAxis: S,
                            yAxis: T,
                            layout: U,
                            offset: X,
                            dataPointFormatter: Y
                        });
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var Q = this.props,
                        R = Q.hide,
                        S = Q.data,
                        T = Q.className,
                        U = Q.xAxis,
                        V = Q.yAxis,
                        W = Q.left,
                        X = Q.top,
                        Y = Q.width,
                        Z = Q.height,
                        $ = Q.isAnimationActive,
                        ab = Q.background,
                        bb = Q.id;
                    if (R || !S || !S.length)
                        return null;
                    var cb = this.state.isAnimationFinished,
                        db = a(l)('recharts-bar', T),
                        eb = U && U.allowDataOverflow || V && V.allowDataOverflow,
                        fb = a(g)(bb) ? this.id : bb;
                    return a(k).createElement(o.Layer, {
                        className: db
                    }, eb ? a(k).createElement('defs', null, a(k).createElement('clipPath', {
                        id: 'clipPath-'.concat(fb)
                    }, a(k).createElement('rect', {
                        x: W,
                        y: X,
                        width: Y,
                        height: Z
                    }))) : null, a(k).createElement(o.Layer, {
                        className: 'recharts-bar-rectangles',
                        clipPath: eb ? 'url(#clipPath-'.concat(fb, ')') : null
                    }, ab ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!$ || cb) && r.LabelList.renderCallByParent(this.props, S));
                }
            }
        ]) && E(L.prototype, M), N && E(L, N), P;
    }(k.PureComponent);
    _J.displayName = 'Bar', _J.defaultProps = {
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
    }, _J.getComposedData = function(K) {
        var L = K.props,
            M = K.item,
            N = K.barPosition,
            O = K.bandSize,
            P = K.xAxis,
            Q = K.yAxis,
            R = K.xAxisTicks,
            S = K.yAxisTicks,
            T = K.stackedData,
            U = K.dataStartIndex,
            V = K.displayedData,
            W = K.offset,
            X = (0, v.findPositionOfBar)(N, M);
        if (!X)
            return null;
        var Y = L.layout,
            Z = M.props,
            $ = Z.dataKey,
            ab = Z.children,
            bb = Z.minPointSize,
            cb = 'horizontal' === Y ? Q : P,
            db = T ? cb.scale.domain() : null,
            eb = (0, v.getBaseValueOfBar)({
                numericAxis: cb
            }),
            fb = (0, t.findAllByType)(ab, q.Cell.displayName),
            gb = V.map(function(hb, ib) {
                var jb, kb, lb, mb, nb, ob;
                if (T ? jb = (0, v.truncateByDomain)(T[U + ib], db) : (jb = (0, v.getValueByDataKey)(hb, $), a(j)(jb) || (jb = [
                        eb,
                        jb
                    ])), 'horizontal' === Y) {
                    if (kb = (0, v.getCateCoordinateOfBar)({
                            axis: P,
                            ticks: R,
                            bandSize: O,
                            offset: X.offset,
                            entry: hb,
                            index: ib
                        }), lb = Q.scale(jb[1]), mb = X.size, nb = Q.scale(jb[0]) - Q.scale(jb[1]), ob = {
                            x: kb,
                            y: Q.y,
                            width: mb,
                            height: Q.height
                        }, Math.abs(bb) > 0 && Math.abs(nb) < Math.abs(bb)) {
                        var pb = (0, s.mathSign)(nb || bb) * (Math.abs(bb) - Math.abs(nb));
                        lb -= pb, nb += pb;
                    }
                } else
                    kb = P.scale(jb[0]), lb = (0, v.getCateCoordinateOfBar)({
                        axis: Q,
                        ticks: S,
                        bandSize: O,
                        offset: X.offset,
                        entry: hb,
                        index: ib
                    }), mb = P.scale(jb[1]) - P.scale(jb[0]), nb = X.size, ob = {
                        x: P.x,
                        y: lb,
                        width: P.width,
                        height: nb
                    }, Math.abs(bb) > 0 && Math.abs(mb) < Math.abs(bb) && (mb += (0, s.mathSign)(mb || bb) * (Math.abs(bb) - Math.abs(mb)));
                return B(B(B({}, hb), {}, {
                    x: kb,
                    y: lb,
                    width: mb,
                    height: nb,
                    value: T ? jb : jb[1],
                    payload: hb,
                    background: ob
                }, fb && fb[ib] && fb[ib].props), {}, {
                    tooltipPayload: [(0, v.getTooltipItem)(M, hb)],
                    tooltipPosition: {
                        x: kb + mb / 2,
                        y: lb + nb / 2
                    }
                });
            });
        return B({
            data: gb,
            layout: Y
        }, W);
    };
}), d.register('lAmnl', function(e, f) {
    e.exports = function(g) {
        return null == g;
    };
}), d.register('sYnlz', function(e, f) {
    var g = d('aMUlS');
    e.exports = function(h, i) {
        return g(h, i);
    };
}), d.register('aMUlS', function(e, f) {
    var g = d('4aa5i'),
        h = d('rQx8t0');
    e.exports = function e(i, j, k, l, m) {
        return i === j || (null == i || null == j || !h(i) && !h(j) ? i != i && j != j : g(i, j, k, l, e, m));
    };
}), d.register('4aa5i', function(e, f) {
    var g = d('9yY2G'),
        h = d('GEioR'),
        i = d('gGVFG'),
        j = d('yPyYQ'),
        k = d('EbWEU'),
        l = d('Tvpkn0'),
        m = d('bPEBx'),
        n = d('vogMw'),
        o = '[object Arguments]',
        p = '[object Array]',
        q = '[object Object]',
        r = Object.prototype.hasOwnProperty;
    e.exports = function(s, t, u, v, w, x) {
        var y = l(s),
            z = l(t),
            A = y ? p : k(s),
            B = z ? p : k(t),
            C = (A = A == o ? q : A) == q,
            D = (B = B == o ? q : B) == q,
            E = A == B;
        if (E && m(s)) {
            if (!m(t))
                return !1;
            y = !0, C = !1;
        }
        if (E && !C)
            return x || (x = new g()), y || n(s) ? h(s, t, u, v, w, x) : i(s, t, A, u, v, w, x);
        if (!(1 & u)) {
            var F = C && r.call(s, '__wrapped__'),
                G = D && r.call(t, '__wrapped__');
            if (F || G) {
                var H = F ? s.value() : s,
                    I = G ? t.value() : t;
                return x || (x = new g()), w(H, I, u, v, x);
            }
        }
        return !!E && (x || (x = new g()), j(s, t, u, v, w, x));
    };
}), d.register('9yY2G', function(e, f) {
    var g = d('nt1Pd'),
        h = d('nxtuv'),
        i = d('QsMnG0'),
        j = d('DxWFw0'),
        k = d('orOHV2'),
        l = d('Wo8VE');

    function m(n) {
        var o = this.__data__ = new g(n);
        this.size = o.size;
    }
    m.prototype.clear = h, m.prototype.delete = i, m.prototype.get = j, m.prototype.has = k, m.prototype.set = l, e.exports = m;
}), d.register('nt1Pd', function(e, f) {
    var g = d('7mDA90'),
        h = d('wptNH'),
        i = d('yHRoq'),
        j = d('qi1X1'),
        k = d('FS8T8');

    function l(m) {
        var n = -1,
            o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = g, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('7mDA90', function(e, f) {
    e.exports = function() {
        this.__data__ = [], this.size = 0;
    };
}), d.register('wptNH', function(e, f) {
    var g = d('LPuN/'),
        h = Array.prototype.splice;
    e.exports = function(i) {
        var j = this.__data__,
            k = g(j, i);
        return !(k < 0) && (k == j.length - 1 ? j.pop() : h.call(j, k, 1), --this.size, !0);
    };
}), d.register('LPuN/', function(e, f) {
    var g = d('E0PFn0');
    e.exports = function(h, i) {
        for (var j = h.length; j--;)
            if (g(h[j][0], i))
                return j;
        return -1;
    };
}), d.register('E0PFn0', function(e, f) {
    e.exports = function(g, h) {
        return g === h || g != g && h != h;
    };
}), d.register('yHRoq', function(e, f) {
    var g = d('LPuN/');
    e.exports = function(h) {
        var i = this.__data__,
            j = g(i, h);
        return j < 0 ? void 0 : i[j][1];
    };
}), d.register('qi1X1', function(e, f) {
    var g = d('LPuN/');
    e.exports = function(h) {
        return g(this.__data__, h) > -1;
    };
}), d.register('FS8T8', function(e, f) {
    var g = d('LPuN/');
    e.exports = function(h, i) {
        var j = this.__data__,
            k = g(j, h);
        return k < 0 ? (++this.size, j.push([
            h,
            i
        ])) : j[k][1] = i, this;
    };
}), d.register('nxtuv', function(e, f) {
    var g = d('nt1Pd');
    e.exports = function() {
        this.__data__ = new g(), this.size = 0;
    };
}), d.register('QsMnG0', function(e, f) {
    e.exports = function(g) {
        var h = this.__data__,
            i = h.delete(g);
        return this.size = h.size, i;
    };
}), d.register('DxWFw0', function(e, f) {
    e.exports = function(g) {
        return this.__data__.get(g);
    };
}), d.register('orOHV2', function(e, f) {
    e.exports = function(g) {
        return this.__data__.has(g);
    };
}), d.register('Wo8VE', function(e, f) {
    var g = d('nt1Pd'),
        h = d('wX0ki'),
        i = d('X4xJQ');
    e.exports = function(j, k) {
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
}), d.register('wX0ki', function(e, f) {
    var g = d('L5+6P')(d('ESVuQ'), 'Map');
    e.exports = g;
}), d.register('L5+6P', function(e, f) {
    var g = d('Zblq6'),
        h = d('kMLWQ0');
    e.exports = function(i, j) {
        var k = h(i, j);
        return g(k) ? k : void 0;
    };
}), d.register('Zblq6', function(e, f) {
    var g = d('kwUzI'),
        h = d('5+P3i'),
        i = d('4+6+/0'),
        j = d('OhPYl0'),
        k = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        m = Object.prototype,
        n = l.toString,
        o = m.hasOwnProperty,
        p = RegExp('^' + n.call(o).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    e.exports = function(q) {
        return !(!i(q) || h(q)) && (g(q) ? p : k).test(j(q));
    };
}), d.register('kwUzI', function(e, f) {
    var g = d('p5wQK'),
        h = d('4+6+/0');
    e.exports = function(i) {
        if (!h(i))
            return !1;
        var j = g(i);
        return '[object Function]' == j || '[object GeneratorFunction]' == j || '[object AsyncFunction]' == j || '[object Proxy]' == j;
    };
}), d.register('p5wQK', function(e, f) {
    var g = d('U/yTG'),
        h = d('Nfii2'),
        i = d('GXAM00'),
        j = g ? g.toStringTag : void 0;
    e.exports = function(k) {
        return null == k ? void 0 === k ? '[object Undefined]' : '[object Null]' : j && j in Object(k) ? h(k) : i(k);
    };
}), d.register('U/yTG', function(e, f) {
    var g = d('ESVuQ').Symbol;
    e.exports = g;
}), d.register('ESVuQ', function(e, f) {
    var g = d('C1HOr0'),
        h = 'object' == typeof self && self && self.Object === Object && self,
        i = g || h || Function('return this')();
    e.exports = i;
}), d.register('C1HOr0', function(e, f) {
    var g = 'object' == typeof c && c && c.Object === Object && c;
    e.exports = g;
}), d.register('Nfii2', function(e, f) {
    var g = d('U/yTG'),
        h = Object.prototype,
        i = h.hasOwnProperty,
        j = h.toString,
        k = g ? g.toStringTag : void 0;
    e.exports = function(l) {
        var m = i.call(l, k),
            n = l[k];
        try {
            l[k] = void 0;
            var o = !0;
        } catch (l) {}
        var o = j.call(l);
        return d && (m ? l[k] = n : delete l[k]), o;
    };
}), d.register('GXAM00', function(e, f) {
    var g = Object.prototype.toString;
    e.exports = function(h) {
        return g.call(h);
    };
}), d.register('4+6+/0', function(e, f) {
    e.exports = function(g) {
        var h = typeof g;
        return null != g && ('object' == h || 'function' == h);
    };
}), d.register('5+P3i', function(e, f) {
    var g, h = d('XJe5n'),
        i = (g = /[^.]+$/.exec(h && h.keys && h.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + g : '';
    e.exports = function(j) {
        return !!i && i in j;
    };
}), d.register('XJe5n', function(e, f) {
    var g = d('ESVuQ')['__core-js_shared__'];
    e.exports = g;
}), d.register('OhPYl0', function(e, f) {
    var g = Function.prototype.toString;
    e.exports = function(h) {
        if (null != h) {
            try {
                return g.call(h);
            } catch (h) {}
            try {
                return h + '';
            } catch (h) {}
        }
        return '';
    };
}), d.register('kMLWQ0', function(e, f) {
    e.exports = function(g, h) {
        return null == g ? void 0 : g[h];
    };
}), d.register('X4xJQ', function(e, f) {
    var g = d('NgXQ8'),
        h = d('w8ocl'),
        i = d('MTDRA'),
        j = d('Nij/m'),
        k = d('fwllx');

    function l(m) {
        var n = -1,
            o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = g, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('NgXQ8', function(e, f) {
    var g = d('ZNBAj'),
        h = d('nt1Pd'),
        i = d('wX0ki');
    e.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new g(),
            map: new(i || h)(),
            string: new g()
        };
    };
}), d.register('ZNBAj', function(e, f) {
    var g = d('COmKv'),
        h = d('Ywm9l0'),
        i = d('EfHUD'),
        j = d('XAQsb'),
        k = d('fXAGt');

    function l(m) {
        var n = -1,
            o = null == m ? 0 : m.length;
        for (this.clear(); ++n < o;) {
            var p = m[n];
            this.set(p[0], p[1]);
        }
    }
    l.prototype.clear = g, l.prototype.delete = h, l.prototype.get = i, l.prototype.has = j, l.prototype.set = k, e.exports = l;
}), d.register('COmKv', function(e, f) {
    var g = d('PcHer');
    e.exports = function() {
        this.__data__ = g ? g(null) : {}, this.size = 0;
    };
}), d.register('PcHer', function(e, f) {
    var g = d('L5+6P')(Object, 'create');
    e.exports = g;
}), d.register('Ywm9l0', function(e, f) {
    e.exports = function(g) {
        var h = this.has(g) && delete this.__data__[g];
        return this.size -= h ? 1 : 0, h;
    };
}), d.register('EfHUD', function(e, f) {
    var g = d('PcHer'),
        h = Object.prototype.hasOwnProperty;
    e.exports = function(i) {
        var j = this.__data__;
        if (g) {
            var k = j[i];
            return '__lodash_hash_undefined__' === k ? void 0 : k;
        }
        return h.call(j, i) ? j[i] : void 0;
    };
}), d.register('XAQsb', function(e, f) {
    var g = d('PcHer'),
        h = Object.prototype.hasOwnProperty;
    e.exports = function(i) {
        var j = this.__data__;
        return g ? void 0 !== j[i] : h.call(j, i);
    };
}), d.register('fXAGt', function(e, f) {
    var g = d('PcHer');
    e.exports = function(h, i) {
        var j = this.__data__;
        return this.size += this.has(h) ? 0 : 1, j[h] = g && void 0 === i ? '__lodash_hash_undefined__' : i, this;
    };
}), d.register('w8ocl', function(e, f) {
    var g = d('T/num');
    e.exports = function(h) {
        var i = g(this, h).delete(h);
        return this.size -= i ? 1 : 0, i;
    };
}), d.register('T/num', function(e, f) {
    var g = d('CKUp00');
    e.exports = function(h, i) {
        var j = h.__data__;
        return g(i) ? j['string' == typeof i ? 'string' : 'hash'] : j.map;
    };
}), d.register('CKUp00', function(e, f) {
    e.exports = function(g) {
        var h = typeof g;
        return 'string' == h || 'number' == h || 'symbol' == h || 'boolean' == h ? '__proto__' !== g : null === g;
    };
}), d.register('MTDRA', function(e, f) {
    var g = d('T/num');
    e.exports = function(h) {
        return g(this, h).get(h);
    };
}), d.register('Nij/m', function(e, f) {
    var g = d('T/num');
    e.exports = function(h) {
        return g(this, h).has(h);
    };
}), d.register('fwllx', function(e, f) {
    var g = d('T/num');
    e.exports = function(h, i) {
        var j = g(this, h),
            k = j.size;
        return j.set(h, i), this.size += j.size == k ? 0 : 1, this;
    };
}), d.register('GEioR', function(e, f) {
    var g = d('I/KJh'),
        h = d('KyQXf0'),
        i = d('IWnL60');
    e.exports = function(j, k, l, m, n, o) {
        var p = 1 & l,
            q = j.length,
            r = k.length;
        if (q != r && !(p && r > q))
            return !1;
        var s = o.get(j),
            t = o.get(k);
        if (s && t)
            return s == k && t == j;
        var u = -1,
            v = !0,
            w = 2 & l ? new g() : void 0;
        for (o.set(j, k), o.set(k, j); ++u < q;) {
            var x = j[u],
                y = k[u];
            if (m)
                var z = p ? m(y, x, u, k, j, o) : m(x, y, u, j, k, o);
            if (void 0 !== _y) {
                if (_y)
                    continue;
                v = !1;
                break;
            }
            if (w) {
                if (!h(k, function(z, A) {
                        if (!i(w, A) && (x === z || n(x, z, l, m, o)))
                            return w.push(A);
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
}), d.register('I/KJh', function(e, f) {
    var g = d('X4xJQ'),
        h = d('FZy7A0'),
        i = d('orOHV1');

    function j(k) {
        var l = -1,
            m = null == k ? 0 : k.length;
        for (this.__data__ = new g(); ++l < m;)
            this.add(k[l]);
    }
    j.prototype.add = j.prototype.push = h, j.prototype.has = i, e.exports = j;
}), d.register('FZy7A0', function(e, f) {
    e.exports = function(g) {
        return this.__data__.set(g, '__lodash_hash_undefined__'), this;
    };
}), d.register('orOHV1', function(e, f) {
    e.exports = function(g) {
        return this.__data__.has(g);
    };
}), d.register('KyQXf0', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = null == g ? 0 : g.length; ++i < j;)
            if (h(g[i], i, g))
                return !0;
        return !1;
    };
}), d.register('IWnL60', function(e, f) {
    e.exports = function(g, h) {
        return g.has(h);
    };
}), d.register('gGVFG', function(e, f) {
    var g = d('U/yTG'),
        h = d('vawhq'),
        i = d('E0PFn0'),
        j = d('GEioR'),
        k = d('GsIAh0'),
        l = d('Y5PW40'),
        m = g ? g.prototype : void 0,
        n = m ? m.valueOf : void 0;
    e.exports = function(o, p, q, r, s, t, u) {
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
}), d.register('vawhq', function(e, f) {
    var g = d('ESVuQ').Uint8Array;
    e.exports = g;
}), d.register('GsIAh0', function(e, f) {
    e.exports = function(g) {
        var h = -1,
            i = Array(g.size);
        return g.forEach(function(j, k) {
            i[++h] = [
                k,
                j
            ];
        }), i;
    };
}), d.register('Y5PW40', function(e, f) {
    e.exports = function(g) {
        var h = -1,
            i = Array(g.size);
        return g.forEach(function(j) {
            i[++h] = j;
        }), i;
    };
}), d.register('yPyYQ', function(e, f) {
    var g = d('/t/Ox'),
        h = Object.prototype.hasOwnProperty;
    e.exports = function(i, j, k, l, m, n) {
        var o = 1 & k,
            p = g(i),
            q = p.length;
        if (q != g(j).length && !o)
            return !1;
        for (var r = q; r--;) {
            var s = p[r];
            if (!(o ? s in j : h.call(j, s)))
                return !1;
        }
        var s = n.get(i),
            t = n.get(j);
        if (s && t)
            return s == j && t == i;
        var u = !0;
        n.set(i, j), n.set(j, i);
        for (var v = o; ++r < q;) {
            var w = i[_s = p[r]],
                x = j[_s];
            if (l)
                var _y = o ? l(x, w, _s, j, i, n) : l(w, x, _s, i, j, n);
            if (!(void 0 === _w ? w === x || m(w, x, k, l, n) : _w)) {
                u = !1;
                break;
            }
            v || (v = 'constructor' == _s);
        }
        if (u && !v) {
            var w = i.constructor,
                x = j.constructor;
            w == x || !('constructor' in i) || !('constructor' in j) || 'function' == typeof w && w instanceof w && 'function' == typeof x && x instanceof x || (u = !1);
        }
        return n.delete(i), n.delete(j), u;
    };
}), d.register('/t/Ox', function(e, f) {
    var g = d('Z8We6'),
        h = d('T6DUg'),
        i = d('0uRNP');
    e.exports = function(j) {
        return g(j, i, h);
    };
}), d.register('Z8We6', function(e, f) {
    var g = d('ePhvw0'),
        h = d('Tvpkn0');
    e.exports = function(i, j, k) {
        var l = j(i);
        return h(i) ? l : g(l, k(i));
    };
}), d.register('ePhvw0', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = h.length, k = g.length; ++i < j;)
            g[k + i] = h[i];
        return g;
    };
}), d.register('Tvpkn0', function(e, f) {
    var g = Array.isArray;
    e.exports = g;
}), d.register('T6DUg', function(e, f) {
    var g = d('mrLvv0'),
        h = d('1Xzun0'),
        i = Object.prototype.propertyIsEnumerable,
        j = Object.getOwnPropertySymbols,
        k = j ? function(l) {
            return null == l ? [] : (l = Object(l), g(j(l), function(m) {
                return i.call(l, m);
            }));
        } : h;
    e.exports = k;
}), d.register('mrLvv0', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = null == g ? 0 : g.length, k = 0, l = []; ++i < j;) {
            var m = g[i];
            h(m, i, g) && (l[k++] = m);
        }
        return l;
    };
}), d.register('1Xzun0', function(e, f) {
    e.exports = function() {
        return [];
    };
}), d.register('0uRNP', function(e, f) {
    var g = d('uvYZ8'),
        h = d('HGFnW'),
        i = d('wC2Rn');
    e.exports = function(j) {
        return i(j) ? g(j) : h(j);
    };
}), d.register('uvYZ8', function(e, f) {
    var g = d('w6S8c0'),
        h = d('geAd7'),
        i = d('Tvpkn0'),
        j = d('bPEBx'),
        k = d('U62iU0'),
        l = d('vogMw'),
        m = Object.prototype.hasOwnProperty;
    e.exports = function(n, o) {
        var p = i(n),
            q = !p && h(n),
            r = !p && !q && j(n),
            _s = !p && !q && !r && l(n),
            t = p || q || r || _s,
            u = t ? g(n.length, String) : [],
            v = u.length;
        for (var w in n)
            !o && !m.call(n, w) || t && ('length' == w || r && ('offset' == w || 'parent' == w) || _s && ('buffer' == w || 'byteLength' == w || 'byteOffset' == w) || k(w, v)) || u.push(w);
        return u;
    };
}), d.register('w6S8c0', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = Array(g); ++i < g;)
            j[i] = h(i);
        return j;
    };
}), d.register('geAd7', function(e, f) {
    var g = d('bQfHt'),
        h = d('rQx8t0'),
        i = Object.prototype,
        j = i.hasOwnProperty,
        k = i.propertyIsEnumerable,
        l = g(function() {
            return arguments;
        }()) ? g : function(m) {
            return h(m) && j.call(m, 'callee') && !k.call(m, 'callee');
        };
    e.exports = l;
}), d.register('bQfHt', function(e, f) {
    var g = d('p5wQK'),
        h = d('rQx8t0');
    e.exports = function(i) {
        return h(i) && '[object Arguments]' == g(i);
    };
}), d.register('rQx8t0', function(e, f) {
    e.exports = function(g) {
        return null != g && 'object' == typeof g;
    };
}), d.register('bPEBx', function(e, f) {
    var g = d('ESVuQ'),
        h = d('qLPfc0'),
        i = f && !f.nodeType && f,
        j = i && e && !e.nodeType && e,
        k = j && j.exports === i ? g.Buffer : void 0,
        l = (k ? k.isBuffer : void 0) || h;
    e.exports = l;
}), d.register('qLPfc0', function(e, f) {
    e.exports = function() {
        return !1;
    };
}), d.register('U62iU0', function(e, f) {
    var g = /^(?:0|[1-9]\d*)$/;
    e.exports = function(h, i) {
        var j = typeof h;
        return !!(i = null == i ? 9007199254740991 : i) && ('number' == j || 'symbol' != j && g.test(h)) && h > -1 && h % 1 == 0 && h < i;
    };
}), d.register('vogMw', function(e, f) {
    var g = d('17tQ5'),
        h = d('7TFiT0'),
        i = d('6Qucv'),
        j = i && i.isTypedArray,
        k = j ? h(j) : g;
    e.exports = k;
}), d.register('17tQ5', function(e, f) {
    var g = d('p5wQK'),
        h = d('thjov0'),
        i = d('rQx8t0'),
        j = {};
    j['[object Float32Array]'] = j['[object Float64Array]'] = j['[object Int8Array]'] = j['[object Int16Array]'] = j['[object Int32Array]'] = j['[object Uint8Array]'] = j['[object Uint8ClampedArray]'] = j['[object Uint16Array]'] = j['[object Uint32Array]'] = !0, j['[object Arguments]'] = j['[object Array]'] = j['[object ArrayBuffer]'] = j['[object Boolean]'] = j['[object DataView]'] = j['[object Date]'] = j['[object Error]'] = j['[object Function]'] = j['[object Map]'] = j['[object Number]'] = j['[object Object]'] = j['[object RegExp]'] = j['[object Set]'] = j['[object String]'] = j['[object WeakMap]'] = !1, e.exports = function(k) {
        return i(k) && h(k.length) && !!j[g(k)];
    };
}), d.register('thjov0', function(e, f) {
    e.exports = function(g) {
        return 'number' == typeof g && g > -1 && g % 1 == 0 && g <= 9007199254740991;
    };
}), d.register('7TFiT0', function(e, f) {
    e.exports = function(g) {
        return function(h) {
            return g(h);
        };
    };
}), d.register('6Qucv', function(e, f) {
    var g = d('C1HOr0'),
        h = f && !f.nodeType && f,
        i = h && e && !e.nodeType && e,
        j = i && i.exports === h && g.process,
        k = function() {
            try {
                var l = i && i.require && i.require('util').types;
                return l || j && j.binding && j.binding('util');
            } catch (e) {}
        }();
    e.exports = k;
}), d.register('HGFnW', function(e, f) {
    var g = d('jL53o0'),
        h = d('a/lzk'),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(j) {
        if (!g(j))
            return h(j);
        var k = [];
        for (var l in Object(j))
            i.call(j, l) && 'constructor' != l && k.push(l);
        return k;
    };
}), d.register('jL53o0', function(e, f) {
    var g = Object.prototype;
    e.exports = function(h) {
        var i = h && h.constructor;
        return h === ('function' == typeof i && i.prototype || g);
    };
}), d.register('a/lzk', function(e, f) {
    var g = d('LcJkc0')(Object.keys, Object);
    e.exports = g;
}), d.register('LcJkc0', function(e, f) {
    e.exports = function(g, h) {
        return function(i) {
            return g(h(i));
        };
    };
}), d.register('wC2Rn', function(e, f) {
    var g = d('kwUzI'),
        h = d('thjov0');
    e.exports = function(i) {
        return null != i && h(i.length) && !g(i);
    };
}), d.register('EbWEU', function(e, f) {
    var g = d('9df4p'),
        h = d('wX0ki'),
        i = d('U2VTP'),
        j = d('KxC2b'),
        k = d('RKzye'),
        l = d('p5wQK'),
        m = d('OhPYl0'),
        n = '[object Map]',
        o = '[object Promise]',
        p = '[object Set]',
        q = '[object WeakMap]',
        r = '[object DataView]',
        s = m(g),
        t = m(h),
        u = m(i),
        v = m(j),
        _w = m(k),
        x = l;
    (g && x(new g(new ArrayBuffer(1))) != r || h && x(new h()) != n || i && x(i.resolve()) != o || j && x(new j()) != p || k && x(new k()) != q) && (x = function(y) {
        var z = l(y),
            A = '[object Object]' == z ? y.constructor : void 0,
            B = A ? m(A) : '';
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
                case _w:
                    return q;
            }
        return z;
    }), e.exports = x;
}), d.register('9df4p', function(e, f) {
    var g = d('L5+6P')(d('ESVuQ'), 'DataView');
    e.exports = g;
}), d.register('U2VTP', function(e, f) {
    var g = d('L5+6P')(d('ESVuQ'), 'Promise');
    e.exports = g;
}), d.register('KxC2b', function(e, f) {
    var g = d('L5+6P')(d('ESVuQ'), 'Set');
    e.exports = g;
}), d.register('RKzye', function(e, f) {
    var g = d('L5+6P')(d('ESVuQ'), 'WeakMap');
    e.exports = g;
}), d.register('feG/l', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    }), b(e.exports, 'translateStyle', function() {
        return d('lUcoP').translateStyle;
    });
    var g = d('TBA+6'),
        _h = (d('Qxl5C'), d('lUcoP'), d('r6Rx6'), g.default);
}), d.register('TBA+6', function(e, f) {
    b(e.exports, 'default', function() {
        return _B;
    });
    var g = d('O0Kav'),
        h = d('HoW8Y'),
        i = d('XGZ3h'),
        j = d('CBG/8'),
        k = d('Qxl5C'),
        l = d('igxk3'),
        m = d('lUcoP');

    function n(o) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(p) {
            return typeof p;
        } : function(p) {
            return p && 'function' == typeof Symbol && p.constructor === Symbol && p !== Symbol.prototype ? 'symbol' : typeof p;
        }, n(o);
    }

    function o(p, q) {
        if (null == p)
            return {};
        var r, s, t = function(u, v) {
            if (null == u)
                return {};
            var w, x, y = {},
                z = Object.keys(u);
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

    function p(q) {
        return function(r) {
            if (Array.isArray(r))
                return _q(r);
        }(q) || function(r) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
                return Array.from(r);
        }(q) || function(r, s) {
            if (!r)
                return;
            if ('string' == typeof r)
                return _q(r, s);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            'Object' === t && r.constructor && (t = r.constructor.name);
            if ('Map' === t || 'Set' === t)
                return Array.from(r);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return _q(r, s);
        }(q) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _q(r, s) {
        (null == s || s > r.length) && (s = r.length);
        for (var t = 0, u = new Array(s); t < s; t++)
            u[t] = r[t];
        return u;
    }

    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function(w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }

    function s(t) {
        for (var u = 1; u < arguments.length; u++) {
            var v = null != arguments[u] ? arguments[u] : {};
            u % 2 ? r(Object(v), !0).forEach(function(w) {
                _t(t, w, v[w]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(v)) : r(Object(v)).forEach(function(w) {
                Object.defineProperty(t, w, Object.getOwnPropertyDescriptor(v, w));
            });
        }
        return t;
    }

    function _t(u, v, w) {
        return v in u ? Object.defineProperty(u, v, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[v] = w, u;
    }

    function u(v, w) {
        for (var x = 0; x < w.length; x++) {
            var y = w[x];
            y.enumerable = y.enumerable || !1, y.configurable = !0, 'value' in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
        }
    }

    function v(w, x) {
        return v = Object.setPrototypeOf || function(y, z) {
            return y.__proto__ = z, y;
        }, v(w, x);
    }

    function w(x) {
        var y = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (x) {
                return !1;
            }
        }();
        return function() {
            var z, A = _z(x);
            if (y) {
                var B = _z(this).constructor;
                z = Reflect.construct(A, arguments, B);
            } else
                z = A.apply(this, arguments);
            return _x(this, z);
        };
    }

    function _x(y, z) {
        return !z || 'object' !== n(z) && 'function' != typeof z ? _y(y) : z;
    }

    function _y(z) {
        if (void 0 === z)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return z;
    }

    function _z(A) {
        return _z = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
            return B.__proto__ || Object.getPrototypeOf(B);
        }, _z(A);
    }
    var A = function(B) {
        ! function(C, D) {
            if ('function' != typeof D && null !== D)
                throw new TypeError('Super expression must either be null or a function');
            C.prototype = Object.create(D && D.prototype, {
                constructor: {
                    value: C,
                    writable: !0,
                    configurable: !0
                }
            }), D && v(C, D);
        }(n, B);
        var C, D, E, F = w(n);

        function G(H, I) {
            var J;
            ! function(K, L) {
                if (!(K instanceof L))
                    throw new TypeError('Cannot call a class as a function');
            }(this, G);
            var K = (J = F.call(this, H, I)).props,
                L = K.isActive,
                M = K.attributeName,
                N = K.from,
                O = K.to,
                P = K.steps,
                Q = K.children;
            if (J.handleStyleChange = J.handleStyleChange.bind(_y(J)), J.changeStyle = J.changeStyle.bind(_y(J)), !L)
                return J.state = {
                    style: {}
                }, 'function' == typeof Q && (J.state = {
                    style: O
                }), _x(J);
            if (P && P.length)
                J.state = {
                    style: P[0].style
                };
            else if (N) {
                if ('function' == typeof Q)
                    return J.state = {
                        style: N
                    }, _x(J);
                J.state = {
                    style: M ? _t({}, M, N) : N
                };
            } else
                J.state = {
                    style: {}
                };
            return J;
        }
        return C = G, (D = [{
                key: 'componentDidMount',
                value: function() {
                    var H = this.props,
                        I = H.isActive,
                        J = H.canBegin;
                    this.mounted = !0, I && J && this.runAnimation(this.props);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function(H) {
                    var I = this.props,
                        J = I.isActive,
                        K = I.canBegin,
                        L = I.attributeName,
                        M = I.shouldReAnimate;
                    if (K)
                        if (J) {
                            if (!((0, i.deepEqual)(H.to, this.props.to) && H.canBegin && H.isActive)) {
                                var N = !H.canBegin || !H.isActive;
                                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                var O = N || M ? this.props.from : H.to;
                                if (this.state && this.state.style) {
                                    var P = {
                                        style: L ? _t({}, L, O) : O
                                    };
                                    (L && this.state.style[L] !== O || !L && this.state.style !== O) && this.setState(P);
                                }
                                this.runAnimation(s(s({}, this.props), {}, {
                                    from: O,
                                    begin: 0
                                }));
                            }
                        } else {
                            var N = {
                                style: L ? _t({}, L, this.props.to) : this.props.to
                            };
                            this.state && this.state.style && (L && this.state.style[L] !== this.props.to || !L && this.state.style !== this.props.to) && this.setState(N);
                        }
                }
            },
            {
                key: 'componentWillUnmount',
                value: function() {
                    this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation();
                }
            },
            {
                key: 'runJSAnimation',
                value: function(H) {
                    var I = this,
                        J = H.from,
                        K = H.to,
                        L = H.duration,
                        M = H.easing,
                        N = H.begin,
                        O = H.onAnimationEnd,
                        P = H.onAnimationStart,
                        Q = (0, l.default)(J, K, (0, k.configEasing)(M), L, this.changeStyle);
                    this.manager.start([
                        P,
                        N,
                        function() {
                            I.stopJSAnimation = Q();
                        },
                        L,
                        O
                    ]);
                }
            },
            {
                key: 'runStepAnimation',
                value: function(H) {
                    var I = this,
                        J = H.steps,
                        K = H.begin,
                        L = H.onAnimationStart,
                        M = J[0],
                        N = M.style,
                        O = M.duration,
                        P = void 0 === O ? 0 : O;
                    return this.manager.start([L].concat(p(J.reduce(function(Q, R, S) {
                        if (0 === S)
                            return Q;
                        var T = R.duration,
                            U = R.easing,
                            V = void 0 === U ? 'ease' : U,
                            W = R.style,
                            X = R.properties,
                            Y = R.onAnimationEnd,
                            Z = S > 0 ? J[S - 1] : R,
                            $ = X || Object.keys(W);
                        if ('function' == typeof V || 'spring' === V)
                            return [].concat(p(Q), [
                                I.runJSAnimation.bind(I, {
                                    from: Z.style,
                                    to: W,
                                    duration: T,
                                    easing: V
                                }),
                                T
                            ]);
                        var ab = (0, m.getTransitionVal)($, T, V),
                            bb = s(s(s({}, Z.style), W), {}, {
                                transition: ab
                            });
                        return [].concat(p(Q), [
                            bb,
                            T,
                            Y
                        ]).filter(m.identity);
                    }, [
                        N,
                        Math.max(P, K)
                    ])), [H.onAnimationEnd]));
                }
            },
            {
                key: 'runAnimation',
                value: function(H) {
                    this.manager || (this.manager = (0, j.default)());
                    var I = H.begin,
                        J = H.duration,
                        K = H.attributeName,
                        L = H.to,
                        M = H.easing,
                        N = H.onAnimationStart,
                        O = H.onAnimationEnd,
                        P = H.steps,
                        Q = H.children,
                        R = this.manager;
                    if (this.unSubscribe = R.subscribe(this.handleStyleChange), 'function' != typeof M && 'function' != typeof Q && 'spring' !== M)
                        if (P.length > 1)
                            this.runStepAnimation(H);
                        else {
                            var S = K ? _t({}, K, L) : L,
                                T = (0, m.getTransitionVal)(Object.keys(S), J, M);
                            R.start([
                                N,
                                I,
                                s(s({}, S), {}, {
                                    transition: T
                                }),
                                J,
                                O
                            ]);
                        }
                    else
                        this.runJSAnimation(H);
                }
            },
            {
                key: 'handleStyleChange',
                value: function(H) {
                    this.changeStyle(H);
                }
            },
            {
                key: 'changeStyle',
                value: function(H) {
                    this.mounted && this.setState({
                        style: H
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var H = this.props,
                        I = H.children,
                        J = (H.begin, H.duration, H.attributeName, H.easing, H.isActive),
                        K = (H.steps, H.from, H.to, H.canBegin, H.onAnimationEnd, H.shouldReAnimate, H.onAnimationReStart, o(H, [
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
                        ])),
                        L = g.Children.count(I),
                        M = (0, m.translateStyle)(this.state.style);
                    if ('function' == typeof I)
                        return I(M);
                    if (!J || 0 === L)
                        return I;
                    var N = function(O) {
                        var P = O.props,
                            Q = P.style,
                            R = void 0 === Q ? {} : Q,
                            S = P.className;
                        return (0, g.cloneElement)(O, s(s({}, K), {}, {
                            style: s(s({}, R), M),
                            className: S
                        }));
                    };
                    return 1 === L ? N(g.Children.only(I)) : a(g).createElement('div', null, g.Children.map(I, function(O) {
                        return N(O);
                    }));
                }
            }
        ]) && u(C.prototype, D), E && u(C, E), G;
    }(g.PureComponent);
    A.displayName = 'Animate', A.propTypes = {
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
    }, A.defaultProps = {
        begin: 0,
        duration: 1000,
        from: '',
        to: '',
        attributeName: '',
        easing: 'ease',
        isActive: !0,
        canBegin: !0,
        steps: [],
        onAnimationEnd: function() {},
        onAnimationStart: function() {}
    };
    var _B = A;
}), d.register('XGZ3h', function(e, f) {
    e.exports,
        function(g) {
            var h = 'function' == typeof WeakSet,
                i = Object.keys;

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
                    add: function(p) {
                        o.push(p);
                    },
                    has: function(p) {
                        return -1 !== o.indexOf(p);
                    }
                };
            }
            var o = h ? function() {
                return new WeakSet();
            } : n;

            function p(q) {
                return function(r) {
                    var s = q || r;
                    return function(t, u, v) {
                        void 0 === v && (v = o());
                        var w = !!t && 'object' == typeof t,
                            x = !!u && 'object' == typeof u;
                        if (w || x) {
                            var y = w && v.has(t),
                                z = x && v.has(u);
                            if (y || z)
                                return y && z;
                            w && v.add(t), x && v.add(u);
                        }
                        return s(t, u, v);
                    };
                };
            }

            function q(r, s, t, u) {
                var v = r.length;
                if (s.length !== v)
                    return !1;
                for (; v-- > 0;)
                    if (!t(r[v], s[v], u))
                        return !1;
                return !0;
            }

            function r(s, t, u, v) {
                var w = s.size === t.size;
                if (w && s.size) {
                    var x = {};
                    s.forEach(function(y, z) {
                        if (w) {
                            var A = !1,
                                B = 0;
                            t.forEach(function(C, D) {
                                A || x[B] || (A = u(z, D, v) && u(y, C, v)) && (x[B] = !0), B++;
                            }), w = A;
                        }
                    });
                }
                return w;
            }
            var s = '_owner',
                t = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

            function u(v, w, x, y) {
                var z = i(v),
                    A = z.length;
                if (i(w).length !== A)
                    return !1;
                if (A)
                    for (var B = void 0; A-- > 0;) {
                        if ((B = z[A]) === s) {
                            var C = m(v),
                                D = m(w);
                            if ((C || D) && C !== D)
                                return !1;
                        }
                        if (!t(w, B) || !x(v[B], w[B], y))
                            return !1;
                    }
                return !0;
            }

            function v(w, x) {
                return w.source === x.source && w.global === x.global && w.ignoreCase === x.ignoreCase && w.multiline === x.multiline && w.unicode === x.unicode && w.sticky === x.sticky && w.lastIndex === x.lastIndex;
            }

            function w(x, y, z, A) {
                var B = x.size === y.size;
                if (B && x.size) {
                    var C = {};
                    x.forEach(function(D) {
                        if (B) {
                            var E = !1,
                                F = 0;
                            y.forEach(function(G) {
                                E || C[F] || (E = z(D, G, A)) && (C[F] = !0), F++;
                            }), B = E;
                        }
                    });
                }
                return B;
            }
            var x = 'function' == typeof Map,
                y = 'function' == typeof Set;

            function z(A) {
                var B = 'function' == typeof A ? A(i) : i;

                function C(D, E, F) {
                    if (D === E)
                        return !0;
                    if (D && E && 'object' == typeof D && 'object' == typeof E) {
                        if (k(D) && k(E))
                            return u(D, E, B, F);
                        var G = Array.isArray(D),
                            H = Array.isArray(E);
                        return G || H ? G === H && q(D, E, B, F) : (G = D instanceof Date, H = E instanceof Date, G || H ? G === H && j(D.getTime(), E.getTime()) : (G = D instanceof RegExp, H = E instanceof RegExp, G || H ? G === H && v(D, E) : l(D) || l(E) ? D === E : x && (G = D instanceof Map, H = E instanceof Map, G || H) ? G === H && r(D, E, B, F) : y && (G = D instanceof Set, H = E instanceof Set, G || H) ? G === H && w(D, E, B, F) : u(D, E, B, F)));
                    }
                    return D != D && E != E;
                }
                return C;
            }
            var A = z(),
                B = z(function() {
                    return j;
                }),
                C = z(p()),
                D = z(p(j));
            g.circularDeepEqual = C, g.circularShallowEqual = D, g.createCustomEqual = z, g.deepEqual = A, g.sameValueZeroEqual = j, g.shallowEqual = B, Object.defineProperty(g, '__esModule', {
                value: !0
            });
        }(e.exports);
}), d.register('CBG/8', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('z3Vrc');

    function h(i) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(j) {
            return typeof j;
        } : function(j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(i);
    }

    function i(j) {
        return function(k) {
            if (Array.isArray(k))
                return k;
        }(j) || function(k) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(k))
                return Array.from(k);
        }(j) || function(k, l) {
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
        }(j) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _j(k, l) {
        (null == l || l > k.length) && (l = k.length);
        for (var m = 0, n = new Array(l); m < l; m++)
            n[m] = k[m];
        return n;
    }

    function _k() {
        var l = function() {
                return null;
            },
            m = !1,
            n = function n(o) {
                if (!m) {
                    if (Array.isArray(o)) {
                        if (!o.length)
                            return;
                        var p = i(o),
                            q = p[0],
                            r = p.slice(1);
                        return 'number' == typeof q ? void(0, g.default)(n.bind(null, r), q) : (n(q), void(0, g.default)(n.bind(null, r)));
                    }
                    'object' === h(o) && l(o), 'function' == typeof o && o();
                }
            };
        return {
            stop: function() {
                m = !0;
            },
            start: function(o) {
                m = !1, n(o);
            },
            subscribe: function(o) {
                return l = o,
                    function() {
                        l = function() {
                            return null;
                        };
                    };
            }
        };
    }
}), d.register('z3Vrc', function(e, f) {
    function g(h) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            j = -1,
            k = function k(l) {
                j < 0 && (j = l), l - j > i ? (h(l), j = -1) : requestAnimationFrame(k);
            };
        requestAnimationFrame(k);
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('Qxl5C', function(e, f) {
    b(e.exports, 'configEasing', function() {
        return _z;
    });
    var g = d('lUcoP');

    function h(i, j) {
        return function(k) {
            if (Array.isArray(k))
                return k;
        }(i) || function(k, l) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(k)))
                return;
            var m = [],
                n = !0,
                o = !1,
                p = void 0;
            try {
                for (var q, r = k[Symbol.iterator](); !(n = (q = r.next()).done) && (m.push(q.value), !l || m.length !== l); n = !0);
            } catch (k) {
                o = !0, p = k;
            } finally {
                try {
                    n || null == _j.return || _j.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(i, j) || _j(i, j) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function i(j) {
        return function(k) {
            if (Array.isArray(k))
                return _k(k);
        }(j) || function(k) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(k))
                return Array.from(k);
        }(j) || _j(j) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _j(k, l) {
        if (k) {
            if ('string' == typeof k)
                return _k(k, l);
            var m = Object.prototype.toString.call(k).slice(8, -1);
            return 'Object' === m && k.constructor && (m = k.constructor.name), 'Map' === m || 'Set' === m ? Array.from(k) : 'Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? _k(k, l) : void 0;
        }
    }

    function _k(l, m) {
        (null == m || m > l.length) && (m = l.length);
        for (var n = 0, o = new Array(m); n < m; n++)
            o[n] = l[n];
        return o;
    }
    var l = 0.0001,
        m = function(n, o) {
            return [
                0,
                3 * n,
                3 * o - 6 * n,
                3 * n - 3 * o + 1
            ];
        },
        n = function(o, p) {
            return o.map(function(q, r) {
                return q * Math.pow(p, r);
            }).reduce(function(q, r) {
                return q + r;
            });
        },
        o = function(p, q) {
            return function(r) {
                var s = m(p, q);
                return n(s, r);
            };
        },
        p = function(q, r) {
            return function(s) {
                var t = m(q, r),
                    u = [].concat(i(t.map(function(v, w) {
                        return v * w;
                    }).slice(1)), [0]);
                return n(u, s);
            };
        },
        q = function() {
            for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = arguments[t];
            var u = s[0],
                v = s[1],
                w = s[2],
                x = s[3];
            if (1 === s.length)
                switch (s[0]) {
                    case 'linear':
                        u = 0, v = 0, w = 1, x = 1;
                        break;
                    case 'ease':
                        u = 0.25, v = 0.1, w = 0.25, x = 1;
                        break;
                    case 'ease-in':
                        u = 0.42, v = 0, w = 1, x = 1;
                        break;
                    case 'ease-out':
                        u = 0.42, v = 0, w = 0.58, x = 1;
                        break;
                    case 'ease-in-out':
                        u = 0, v = 0, w = 0.58, x = 1;
                        break;
                    default:
                        var y = s[0].split('(');
                        if ('cubic-bezier' === y[0] && 4 === y[1].split(')')[0].split(',').length) {
                            var z = y[1].split(')')[0].split(',').map(function(A) {
                                    return parseFloat(A);
                                }),
                                A = h(z, 4);
                            u = A[0], v = A[1], w = A[2], x = A[3];
                        } else
                            (0, g.warn)(!1, '[configBezier]: arguments should be one of oneOf \'linear\', \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', instead received %s', s);
                }
                (0, g.warn)([
                    u,
                    w,
                    v,
                    x
                ].every(function(y) {
                    return 'number' == typeof y && y >= 0 && y <= 1;
                }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', s);
            var y = o(u, w),
                _z = o(v, x),
                A = p(u, w),
                B = function(C) {
                    return C > 1 ? 1 : C < 0 ? 0 : C;
                },
                C = function(D) {
                    for (var E = D > 1 ? 1 : D, F = E, G = 0; G < 8; ++G) {
                        var H = y(F) - E,
                            I = A(F);
                        if (Math.abs(H - E) < l || I < l)
                            return _z(F);
                        F = B(F - H / I);
                    }
                    return _z(F);
                };
            return C.isStepper = !1, C;
        },
        r = function() {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = s.stiff,
                u = void 0 === t ? 100 : t,
                v = s.damping,
                w = void 0 === v ? 8 : v,
                x = s.dt,
                y = void 0 === x ? 17 : x,
                z = function(A, B, C) {
                    var D = C + (-(A - B) * u - C * w) * y / 1000,
                        E = C * y / 1000 + A;
                    return Math.abs(E - B) < l && Math.abs(D) < l ? [
                        B,
                        0
                    ] : [
                        E,
                        D
                    ];
                };
            return z.isStepper = !0, z.dt = y, z;
        },
        s = function() {
            for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++)
                u[v] = arguments[v];
            var w = u[0];
            if ('string' == typeof w)
                switch (w) {
                    case 'ease':
                    case 'ease-in-out':
                    case 'ease-out':
                    case 'ease-in':
                    case 'linear':
                        return q(w);
                    case 'spring':
                        return r();
                    default:
                        if ('cubic-bezier' === w.split('(')[0])
                            return q(w);
                        (0, g.warn)(!1, '[configEasing]: first argument should be one of \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', \'linear\' and \'spring\', instead  received %s', u);
                }
            return 'function' == typeof w ? w : ((0, g.warn)(!1, '[configEasing]: first argument type should be function or string, instead received %s', u), null);
        };
}), d.register('lUcoP', function(e, f) {
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                _i(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }

    function _i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }
    b(e.exports, 'getIntersectionKeys', function() {
        return _m;
    }), b(e.exports, 'identity', function() {
        return _n;
    }), b(e.exports, 'mapObject', function() {
        return _o;
    }), b(e.exports, 'translateStyle', function() {
        return _p;
    }), b(e.exports, 'getTransitionVal', function() {
        return _q;
    }), b(e.exports, 'warn', function() {
        return _r;
    });
    var j = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        k = [
            '-webkit-',
            '-moz-',
            '-o-',
            '-ms-'
        ],
        l = [
            'transform',
            'transformOrigin',
            'transition'
        ],
        _m = function(n, o) {
            return [
                Object.keys(n),
                Object.keys(o)
            ].reduce(function(p, q) {
                return p.filter(function(r) {
                    return q.includes(r);
                });
            });
        },
        _n = function(o) {
            return o;
        },
        _o = function(p, q) {
            return Object.keys(q).reduce(function(r, s) {
                return h(h({}, r), {}, _i({}, s, p(s, q[s])));
            }, {});
        },
        _p = function(q) {
            return Object.keys(q).reduce(function(r, s) {
                return h(h({}, r), function(t, u) {
                    if (-1 === l.indexOf(t))
                        return _i({}, t, u);
                    var v = 'transition' === t,
                        w = t.replace(/(\w)/, function(x) {
                            return x.toUpperCase();
                        }),
                        x = u;
                    return j.reduce(function(y, z, A) {
                        return v && (x = u.replace(/(transform|transform-origin)/gim, ''.concat(k[A], '$1'))), h(h({}, y), {}, _i({}, z + w, x));
                    }, {});
                }(s, r[s]));
            }, q);
        },
        _q = function(r, s, t) {
            return r.map(function(u) {
                return ''.concat((g = u, g.replace(/([A-Z])/g, function(v) {
                    return '-'.concat(v.toLowerCase());
                })), ' ').concat(s, 'ms ').concat(t);
                var v;
            }).join(',');
        },
        _r = function(s, t, u, v, w, x, y, z) {};
}), d.register('igxk3', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('lUcoP');

    function h(i) {
        return function(j) {
            if (Array.isArray(j))
                return _n(j);
        }(i) || function(j) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(j))
                return Array.from(j);
        }(i) || _m(i) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function i(j, k) {
        var l = Object.keys(j);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(j);
            k && (m = m.filter(function(n) {
                return Object.getOwnPropertyDescriptor(j, n).enumerable;
            })), l.push.apply(l, m);
        }
        return l;
    }

    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? i(Object(m), !0).forEach(function(n) {
                _k(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : i(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }

    function _k(l, m, n) {
        return m in l ? Object.defineProperty(l, m, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[m] = n, l;
    }

    function l(m, n) {
        return function(o) {
            if (Array.isArray(o))
                return o;
        }(m) || function(o, p) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(o)))
                return;
            var q = [],
                r = !0,
                s = !1,
                t = void 0;
            try {
                for (var u, v = o[Symbol.iterator](); !(r = (u = v.next()).done) && (q.push(u.value), !p || q.length !== p); r = !0);
            } catch (o) {
                s = !0, t = o;
            } finally {
                try {
                    r || null == j.return || j.return();
                } finally {
                    if (s)
                        throw t;
                }
            }
            return q;
        }(m, n) || _m(m, n) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _m(n, o) {
        if (n) {
            if ('string' == typeof n)
                return _n(n, o);
            var p = Object.prototype.toString.call(n).slice(8, -1);
            return 'Object' === p && n.constructor && (p = n.constructor.name), 'Map' === p || 'Set' === p ? Array.from(n) : 'Arguments' === p || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? _n(n, o) : void 0;
        }
    }

    function _n(o, p) {
        (null == p || p > o.length) && (p = o.length);
        for (var q = 0, r = new Array(p); q < p; q++)
            r[q] = o[q];
        return r;
    }
    var o = function(p, q, r) {
            return p + (q - p) * r;
        },
        p = function(q) {
            return q.from !== q.to;
        },
        q = function e(r, s, t) {
            var u = (0, g.mapObject)(function(v, w) {
                if (p(w)) {
                    var x = l(r(w.from, w.to, w.velocity), 2),
                        y = x[0],
                        z = x[1];
                    return j(j({}, w), {}, {
                        from: y,
                        velocity: z
                    });
                }
                return w;
            }, s);
            return t < 1 ? (0, g.mapObject)(function(v, w) {
                return p(w) ? j(j({}, w), {}, {
                    velocity: o(w.velocity, u[v].velocity, t),
                    from: o(w.from, u[v].from, t)
                }) : w;
            }, s) : e(r, u, t - 1);
        },
        _r = function(s, t, u, v, w) {
            var x, y, z = (0, g.getIntersectionKeys)(s, t),
                A = z.reduce(function(B, C) {
                    return j(j({}, B), {}, _k({}, C, [
                        s[C],
                        t[C]
                    ]));
                }, {}),
                B = z.reduce(function(C, D) {
                    return j(j({}, C), {}, _k({}, D, {
                        from: s[D],
                        velocity: 0,
                        to: t[D]
                    }));
                }, {}),
                C = -1,
                D = function() {
                    return null;
                };
            return D = u.isStepper ? function(E) {
                    x || (x = E);
                    var F = (E - x) / u.dt;
                    B = q(u, B, F), w(j(j(j({}, s), t), (0, g.mapObject)(function(G, H) {
                        return H.from;
                    }, B))), x = E, Object.values(B).filter(p).length && (C = requestAnimationFrame(D));
                } : function(E) {
                    y || (y = E);
                    var F = (E - y) / v,
                        G = (0, g.mapObject)(function(H, I) {
                            return o.apply(void 0, h(I).concat([u(F)]));
                        }, A);
                    if (w(j(j(j({}, s), t), G)), F < 1)
                        C = requestAnimationFrame(D);
                    else {
                        var H = (0, g.mapObject)(function(I, J) {
                            return o.apply(void 0, h(J).concat([u(1)]));
                        }, A);
                        w(j(j(j({}, s), t), H));
                    }
                },
                function() {
                    return requestAnimationFrame(D),
                        function() {
                            cancelAnimationFrame(C);
                        };
                };
        };
}), d.register('r6Rx6', function(e, f) {
    var g = d('O0Kav'),
        h = d('upJ35'),
        i = d('HoW8Y'),
        j = d('54xjY');

    function k(l) {
        var m = l.component,
            n = l.children,
            o = l.appear,
            p = l.enter,
            q = l.leave;
        return a(g).createElement(h.TransitionGroup, {
            component: m
        }, g.Children.map(n, function(r, s) {
            return a(g).createElement(j.default, {
                appearOptions: o,
                enterOptions: p,
                leaveOptions: q,
                key: 'child-'.concat(s)
            }, r);
        }));
    }
    k.propTypes = {
        appear: a(i).object,
        enter: a(i).object,
        leave: a(i).object,
        children: a(i).oneOfType([
            a(i).array,
            a(i).element
        ]),
        component: a(i).any
    }, k.defaultProps = {
        component: 'span'
    };
}), d.register('54xjY', function(e, f) {
    b(e.exports, 'default', function() {
        return _y;
    });
    var g = d('O0Kav'),
        h = d('upJ35'),
        i = d('HoW8Y'),
        j = d('TBA+6');

    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
            return typeof m;
        } : function(m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }

    function l() {
        return l = Object.assign || function(m) {
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
        var p, q, r = function(s, t) {
            if (null == s)
                return {};
            var u, v, w = {},
                x = Object.keys(s);
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

    function n(o, p) {
        var q = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(o);
            p && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(o, s).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function o(p) {
        for (var q = 1; q < arguments.length; q++) {
            var r = null != arguments[q] ? arguments[q] : {};
            q % 2 ? n(Object(r), !0).forEach(function(s) {
                _p(p, s, r[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(s) {
                Object.defineProperty(p, s, Object.getOwnPropertyDescriptor(r, s));
            });
        }
        return p;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function q(r, s) {
        if (!(r instanceof s))
            throw new TypeError('Cannot call a class as a function');
    }

    function r(s, t) {
        for (var u = 0; u < t.length; u++) {
            var v = t[u];
            v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(s, v.key, v);
        }
    }

    function s(t, u) {
        return s = Object.setPrototypeOf || function(v, w) {
            return v.__proto__ = w, v;
        }, s(t, u);
    }

    function t(u) {
        var v = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (u) {
                return !1;
            }
        }();
        return function() {
            var w, x = _v(u);
            if (v) {
                var y = _v(this).constructor;
                w = Reflect.construct(x, arguments, y);
            } else
                w = x.apply(this, arguments);
            return _u(this, w);
        };
    }

    function _u(v, w) {
        return !w || 'object' !== k(w) && 'function' != typeof w ? function(x) {
            if (void 0 === x)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return x;
        }(v) : w;
    }

    function _v(w) {
        return _v = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
            return x.__proto__ || Object.getPrototypeOf(x);
        }, _v(w);
    }
    void 0 === Number.isFinite && (Number.isFinite = function(w) {
        return 'number' == typeof w && isFinite(w);
    });
    var w = function() {
            var x = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                y = x.steps,
                z = x.duration;
            return y && y.length ? y.reduce(function(A, B) {
                return A + (Number.isFinite(B.duration) && B.duration > 0 ? B.duration : 0);
            }, 0) : Number.isFinite(z) ? z : 0;
        },
        x = function(y) {
            ! function(z, A) {
                if ('function' != typeof A && null !== A)
                    throw new TypeError('Super expression must either be null or a function');
                z.prototype = Object.create(A && A.prototype, {
                    constructor: {
                        value: z,
                        writable: !0,
                        configurable: !0
                    }
                }), A && s(z, A);
            }(k, y);
            var z, A, B, C = t(k);

            function D() {
                var E;
                q(this, D);
                for (var F = arguments.length, G = new Array(F), H = 0; H < F; H++)
                    G[H] = arguments[H];
                return (E = C.call.apply(C, [this].concat(G))).state = {
                    isActive: !1
                }, E.handleEnter = function(I, J) {
                    var K = E.props,
                        L = K.appearOptions,
                        M = K.enterOptions;
                    E.handleStyleActive(J ? L : M);
                }, E.handleExit = function() {
                    E.handleStyleActive(E.props.leaveOptions);
                }, E;
            }
            return z = D, (A = [{
                    key: 'handleStyleActive',
                    value: function(E) {
                        if (E) {
                            var F = E.onAnimationEnd ? function() {
                                E.onAnimationEnd();
                            } : null;
                            this.setState(o(o({}, E), {}, {
                                onAnimationEnd: F,
                                isActive: !0
                            }));
                        }
                    }
                },
                {
                    key: 'parseTimeout',
                    value: function() {
                        var E = this.props,
                            F = E.appearOptions,
                            G = E.enterOptions,
                            H = E.leaveOptions;
                        return w(F) + w(G) + w(H);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var E = this,
                            F = this.props,
                            G = F.children,
                            H = (F.appearOptions, F.enterOptions, F.leaveOptions, m(F, [
                                'children',
                                'appearOptions',
                                'enterOptions',
                                'leaveOptions'
                            ]));
                        return a(g).createElement(h.Transition, l({}, H, {
                            onEnter: this.handleEnter,
                            onExit: this.handleExit,
                            timeout: this.parseTimeout()
                        }), function() {
                            return a(g).createElement(j.default, E.state, g.Children.only(G));
                        });
                    }
                }
            ]) && r(z.prototype, A), B && r(z, B), D;
        }(g.Component);
    x.propTypes = {
        appearOptions: a(i).object,
        enterOptions: a(i).object,
        leaveOptions: a(i).object,
        children: a(i).element
    };
    var _y = x;
}), d.register('50CUY', function(e, f) {
    b(e.exports, 'isInRectangle', function() {
        return _t;
    }), b(e.exports, 'Rectangle', function() {
        return _u;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('feG/l'),
        j = d('3mYHS');

    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
            return typeof m;
        } : function(m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }

    function l() {
        return l = Object.assign || function(m) {
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

    function o(p, q) {
        return o = Object.setPrototypeOf || function(r, s) {
            return r.__proto__ = s, r;
        }, o(p, q);
    }

    function p(q) {
        var r = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (q) {
                return !1;
            }
        }();
        return function() {
            var s, t = _r(q);
            if (r) {
                var u = _r(this).constructor;
                s = Reflect.construct(t, arguments, u);
            } else
                s = t.apply(this, arguments);
            return _q(this, s);
        };
    }

    function _q(r, s) {
        return !s || 'object' !== k(s) && 'function' != typeof s ? function(t) {
            if (void 0 === t)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t;
        }(r) : s;
    }

    function _r(s) {
        return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, _r(s);
    }
    var s = function(t, u, v, w, x) {
            var y, z = Math.min(Math.abs(v) / 2, Math.abs(w) / 2),
                A = w >= 0 ? 1 : -1,
                B = v >= 0 ? 1 : -1,
                C = w >= 0 && v >= 0 || w < 0 && v < 0 ? 1 : 0;
            if (z > 0 && x instanceof Array) {
                for (var D = [
                        0,
                        0,
                        0,
                        0
                    ], E = 0; E < 4; E++)
                    D[E] = x[E] > z ? z : x[E];
                y = 'M'.concat(t, ',').concat(u + A * D[0]), D[0] > 0 && (y += 'A '.concat(D[0], ',').concat(D[0], ',0,0,').concat(C, ',').concat(t + B * D[0], ',').concat(u)), y += 'L '.concat(t + v - B * D[1], ',').concat(u), D[1] > 0 && (y += 'A '.concat(D[1], ',').concat(D[1], ',0,0,').concat(C, ',\n        ').concat(t + v, ',').concat(u + A * D[1])), y += 'L '.concat(t + v, ',').concat(u + w - A * D[2]), D[2] > 0 && (y += 'A '.concat(D[2], ',').concat(D[2], ',0,0,').concat(C, ',\n        ').concat(t + v - B * D[2], ',').concat(u + w)), y += 'L '.concat(t + B * D[3], ',').concat(u + w), D[3] > 0 && (y += 'A '.concat(D[3], ',').concat(D[3], ',0,0,').concat(C, ',\n        ').concat(t, ',').concat(u + w - A * D[3])), y += 'Z';
            } else if (z > 0 && x === +x && x > 0) {
                var D = Math.min(z, x);
                y = 'M '.concat(t, ',').concat(u + A * D, '\n            A ').concat(D, ',').concat(D, ',0,0,').concat(C, ',').concat(t + B * D, ',').concat(u, '\n            L ').concat(t + v - B * D, ',').concat(u, '\n            A ').concat(D, ',').concat(D, ',0,0,').concat(C, ',').concat(t + v, ',').concat(u + A * D, '\n            L ').concat(t + v, ',').concat(u + w - A * D, '\n            A ').concat(D, ',').concat(D, ',0,0,').concat(C, ',').concat(t + v - B * D, ',').concat(u + w, '\n            L ').concat(t + B * D, ',').concat(u + w, '\n            A ').concat(D, ',').concat(D, ',0,0,').concat(C, ',').concat(t, ',').concat(u + w - A * D, ' Z');
            } else
                y = 'M '.concat(t, ',').concat(u, ' h ').concat(v, ' v ').concat(w, ' h ').concat(-v, ' Z');
            return y;
        },
        _t = function(u, v) {
            if (!u || !v)
                return !1;
            var w = u.x,
                x = u.y,
                y = v.x,
                z = v.y,
                A = v.width,
                B = v.height;
            if (Math.abs(A) > 0 && Math.abs(B) > 0) {
                var C = Math.min(y, y + A),
                    D = Math.max(y, y + A),
                    E = Math.min(z, z + B),
                    F = Math.max(z, z + B);
                return w >= C && w <= D && x >= E && x <= F;
            }
            return !1;
        },
        _u = function(v) {
            ! function(w, x) {
                if ('function' != typeof x && null !== x)
                    throw new TypeError('Super expression must either be null or a function');
                w.prototype = Object.create(x && x.prototype, {
                    constructor: {
                        value: w,
                        writable: !0,
                        configurable: !0
                    }
                }), x && o(w, x);
            }(_q, v);
            var w, x, y, z = p(_q);

            function A() {
                var B;
                m(this, A);
                for (var C = arguments.length, D = new Array(C), E = 0; E < C; E++)
                    D[E] = arguments[E];
                return (B = z.call.apply(z, [this].concat(D))).state = {
                    totalLength: -1
                }, B.node = void 0, B;
            }
            return w = A, (x = [{
                    key: 'componentDidMount',
                    value: function() {
                        if (this.node && this.node.getTotalLength)
                            try {
                                var B = this.node.getTotalLength();
                                B && this.setState({
                                    totalLength: B
                                });
                            } catch (a) {}
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var B = this,
                            C = this.props,
                            D = C.x,
                            E = C.y,
                            F = C.width,
                            G = C.height,
                            H = C.radius,
                            I = C.className,
                            J = this.state.totalLength,
                            K = this.props,
                            L = K.animationEasing,
                            M = K.animationDuration,
                            N = K.animationBegin,
                            O = K.isAnimationActive,
                            P = K.isUpdateAnimationActive;
                        if (D !== +D || E !== +E || F !== +F || G !== +G || 0 === F || 0 === G)
                            return null;
                        var Q = a(h)('recharts-rectangle', I);
                        return P ? a(g).createElement(i.default, {
                            canBegin: J > 0,
                            from: {
                                width: F,
                                height: G,
                                x: D,
                                y: E
                            },
                            to: {
                                width: F,
                                height: G,
                                x: D,
                                y: E
                            },
                            duration: M,
                            animationEasing: L,
                            isActive: P
                        }, function(R) {
                            var S = R.width,
                                T = R.height,
                                U = R.x,
                                V = R.y;
                            return a(g).createElement(i.default, {
                                canBegin: J > 0,
                                from: '0px '.concat(-1 === J ? 1 : J, 'px'),
                                to: ''.concat(J, 'px 0px'),
                                attributeName: 'strokeDasharray',
                                begin: N,
                                duration: M,
                                isActive: O,
                                easing: L
                            }, a(g).createElement('path', l({}, (0, j.filterProps)(B.props, !0), {
                                className: Q,
                                d: s(U, V, S, T, H),
                                ref: function(W) {
                                    B.node = W;
                                }
                            })));
                        }) : a(g).createElement('path', l({}, (0, j.filterProps)(this.props, !0), {
                            className: Q,
                            d: s(D, E, F, G, H)
                        }));
                    }
                }
            ]) && n(w.prototype, x), y && n(w, y), A;
        }(g.PureComponent);
    _u.defaultProps = {
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
}), d.register('3mYHS', function(e, f) {
    b(e.exports, 'filterProps', function() {
        return _m;
    }), b(e.exports, 'adaptEventHandlers', function() {
        return _n;
    }), b(e.exports, 'adaptEventsOfChild', function() {
        return _o;
    });
    var g = d('4+6+/0'),
        h = d('O0Kav');

    function i(j) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(k) {
            return typeof k;
        } : function(k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, i(j);
    }
    var j = [
            'viewBox',
            'children'
        ],
        k = [
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
        ],
        l = [
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
        ],
        _m = function(n, o, p) {
            if (!n || 'function' == typeof n || 'boolean' == typeof n)
                return null;
            var q = n;
            if ((0, h.isValidElement)(n) && (q = n.props), !a(g)(q))
                return null;
            var r = {};
            return Object.keys(q).forEach(function(s) {
                (k.includes(s) || p && j.includes(s) || o && l.includes(s)) && (r[s] = q[s]);
            }), r;
        },
        _n = function(o, p) {
            if (!o || 'function' == typeof o || 'boolean' == typeof o)
                return null;
            var q = o;
            if ((0, h.isValidElement)(o) && (q = o.props), !a(g)(q))
                return null;
            var r = {};
            return Object.keys(q).forEach(function(s) {
                l.includes(s) && (r[s] = p || function(t) {
                    return q[s](q, t);
                });
            }), r;
        },
        _o = function(p, q, r) {
            if (!a(g)(p) || 'object' !== i(p))
                return null;
            var s = null;
            return Object.keys(p).forEach(function(t) {
                var u = p[t];
                l.includes(t) && 'function' == typeof u && (s || (s = {}), s[t] = function(v, w, x) {
                    return function(y) {
                        return v(w, x, y), null;
                    };
                }(u, q, r));
            }), s;
        };
}), d.register('mzVm0', function(e, f) {
    b(e.exports, 'Layer', function() {
        return _l;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('3mYHS');

    function j() {
        return j = Object.assign || function(k) {
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
        var n, o, p = function(q, r) {
            if (null == q)
                return {};
            var s, t, u = {},
                v = Object.keys(q);
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
    var _l = a(g).forwardRef(function(m, n) {
        var o = m.children,
            p = m.className,
            q = k(m, [
                'children',
                'className'
            ]),
            r = a(h)('recharts-layer', p);
        return a(g).createElement('g', j({
            className: r
        }, (0, i.filterProps)(q, !0), {
            ref: n
        }), o);
    });
}), d.register('IUHvY', function(e, f) {
    b(e.exports, 'ErrorBar', function() {
        return _n;
    });
    var g = d('O0Kav'),
        h = d('mzVm0'),
        i = d('3mYHS');

    function j() {
        return j = Object.assign || function(k) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }

    function k(l, m) {
        return function(n) {
            if (Array.isArray(n))
                return n;
        }(l) || function(n, o) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(n)))
                return;
            var p = [],
                q = !0,
                r = !1,
                s = void 0;
            try {
                for (var t, u = n[Symbol.iterator](); !(q = (t = u.next()).done) && (p.push(t.value), !o || p.length !== o); q = !0);
            } catch (n) {
                r = !0, s = n;
            } finally {
                try {
                    q || null == i.return || i.return();
                } finally {
                    if (r)
                        throw s;
                }
            }
            return p;
        }(l, m) || function(n, o) {
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
        }(l, m) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _l(m, n) {
        (null == n || n > m.length) && (n = m.length);
        for (var o = 0, p = new Array(n); o < n; o++)
            p[o] = m[o];
        return p;
    }

    function m(n, o) {
        if (null == n)
            return {};
        var p, q, r = function(s, t) {
            if (null == s)
                return {};
            var u, v, w = {},
                x = Object.keys(s);
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

    function _n(o) {
        var p = o.offset,
            q = o.layout,
            r = o.width,
            s = o.dataKey,
            t = o.data,
            u = o.dataPointFormatter,
            v = o.xAxis,
            w = o.yAxis,
            x = m(o, [
                'offset',
                'layout',
                'width',
                'dataKey',
                'data',
                'dataPointFormatter',
                'xAxis',
                'yAxis'
            ]),
            y = (0, i.filterProps)(x),
            z = t.map(function(A, B) {
                var C = u(A, s),
                    D = C.x,
                    E = C.y,
                    F = C.value,
                    G = C.errorVal;
                if (!G)
                    return null;
                var H, I, J = [];
                if (Array.isArray(G)) {
                    var K = k(G, 2);
                    H = K[0], I = K[1];
                } else
                    H = I = G;
                if ('vertical' === q) {
                    var K = v.scale,
                        L = E + p,
                        M = L + r,
                        N = L - r,
                        O = K(F - H),
                        P = K(F + I);
                    J.push({
                        x1: P,
                        y1: M,
                        x2: P,
                        y2: N
                    }), J.push({
                        x1: O,
                        y1: L,
                        x2: P,
                        y2: L
                    }), J.push({
                        x1: O,
                        y1: M,
                        x2: O,
                        y2: N
                    });
                } else if ('horizontal' === q) {
                    var K = w.scale,
                        L = D + p,
                        M = L - r,
                        N = L + r,
                        O = K(F - H),
                        P = K(F + I);
                    J.push({
                        x1: M,
                        y1: P,
                        x2: N,
                        y2: P
                    }), J.push({
                        x1: L,
                        y1: O,
                        x2: L,
                        y2: P
                    }), J.push({
                        x1: M,
                        y1: O,
                        x2: N,
                        y2: O
                    });
                }
                return a(g).createElement(h.Layer, j({
                    className: 'recharts-errorBar',
                    key: 'bar-'.concat(B)
                }, y), J.map(function(K, L) {
                    return a(g).createElement('line', j({}, K, {
                        key: 'line-'.concat(L)
                    }));
                }));
            });
        return a(g).createElement(h.Layer, {
            className: 'recharts-errorBars'
        }, z);
    }
    _n.defaultProps = {
        stroke: 'black',
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: 'horizontal'
    }, _n.displayName = 'ErrorBar';
}), d.register('WRgdi', function(e, f) {
    b(e.exports, 'Cell', function() {
        return d;
    });
    var g = function(h) {
        return null;
    };
    g.displayName = 'Cell';
}), d.register('8X3EY', function(e, f) {
    b(e.exports, 'LabelList', function() {
        return _z;
    });
    var g = d('4+6+/0'),
        h = d('kwUzI'),
        i = d('lAmnl'),
        j = d('DNrqe'),
        k = d('Tvpkn0'),
        l = d('O0Kav'),
        m = d('3bju+'),
        n = d('mzVm0'),
        o = d('1aRlp'),
        p = d('Yv4x1'),
        q = d('3mYHS');

    function r(s) {
        return function(t) {
            if (Array.isArray(t))
                return _s(t);
        }(s) || function(t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
        }(s) || function(t, u) {
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
        }(s) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _s(t, u) {
        (null == u || u > t.length) && (u = t.length);
        for (var v = 0, w = new Array(u); v < u; v++)
            w[v] = t[v];
        return w;
    }

    function t() {
        return t = Object.assign || function(u) {
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
            w && (y = y.filter(function(z) {
                return Object.getOwnPropertyDescriptor(v, z).enumerable;
            })), x.push.apply(x, y);
        }
        return x;
    }

    function v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? u(Object(y), !0).forEach(function(z) {
                _w(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : u(Object(y)).forEach(function(z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
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
        if (null == y)
            return {};
        var A, B, C = function(D, E) {
            if (null == D)
                return {};
            var F, G, H = {},
                I = Object.keys(D);
            for (G = 0; G < I.length; G++)
                F = I[G], E.indexOf(F) >= 0 || (H[F] = D[F]);
            return H;
        }(y, z);
        if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(y);
            for (B = 0; B < D.length; B++)
                A = D[B], z.indexOf(A) >= 0 || Object.prototype.propertyIsEnumerable.call(y, A) && (C[A] = y[A]);
        }
        return C;
    }
    var y = {
        valueAccessor: function(z) {
            return a(k)(z.value) ? a(j)(z.value) : z.value;
        }
    };

    function _z(A) {
        var B = A.data,
            C = A.valueAccessor,
            D = A.dataKey,
            E = A.clockWise,
            F = A.id,
            G = A.textBreakAll,
            H = x(A, [
                'data',
                'valueAccessor',
                'dataKey',
                'clockWise',
                'id',
                'textBreakAll'
            ]);
        return B && B.length ? a(l).createElement(n.Layer, {
            className: 'recharts-label-list'
        }, B.map(function(I, J) {
            var K = a(i)(D) ? C(I, J) : (0, p.getValueByDataKey)(I && I.payload, D),
                L = a(i)(F) ? {} : {
                    id: ''.concat(F, '-').concat(J)
                };
            return a(l).createElement(m.Label, t({}, (0, q.filterProps)(I, !0), H, L, {
                parentViewBox: I.parentViewBox,
                index: J,
                value: K,
                textBreakAll: G,
                viewBox: m.Label.parseViewBox(a(i)(E) ? I : v(v({}, I), {}, {
                    clockWise: E
                })),
                key: 'label-'.concat(J)
            }));
        })) : null;
    }

    function A(B, C) {
        return B ? !0 === B ? a(l).createElement(_z, {
            key: 'labelList-implicit',
            data: C
        }) : a(l).isValidElement(B) || a(h)(B) ? a(l).createElement(_z, {
            key: 'labelList-implicit',
            data: C,
            content: B
        }) : a(g)(B) ? a(l).createElement(_z, t({
            data: C
        }, B, {
            key: 'labelList-implicit'
        })) : null : null;
    }
    _z.displayName = 'LabelList', _z.renderCallByParent = function(B, C) {
        var D = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!B || !B.children && D && !B.label)
            return null;
        var E = B.children,
            F = (0, o.findAllByType)(E, _z.displayName).map(function(G, H) {
                return (0, l.cloneElement)(G, {
                    data: C,
                    key: 'labelList-'.concat(H)
                });
            });
        if (!D)
            return F;
        var G = A(B.label, C);
        return [G].concat(r(F));
    }, _z.defaultProps = y;
}), d.register('DNrqe', function(e, f) {
    e.exports = function(g) {
        var h = null == g ? 0 : g.length;
        return h ? g[h - 1] : void 0;
    };
}), d.register('3bju+', function(e, f) {
    b(e.exports, 'Label', function() {
        return _M;
    });
    var g = d('4+6+/0'),
        h = d('kwUzI'),
        i = d('lAmnl'),
        j = d('O0Kav'),
        k = d('/U36/'),
        l = d('6aUta'),
        m = d('1aRlp'),
        n = d('cUlop'),
        o = d('sJtfb'),
        p = d('3mYHS');

    function q(r) {
        return function(s) {
            if (Array.isArray(s))
                return _r(s);
        }(r) || function(s) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(s))
                return Array.from(s);
        }(r) || function(s, t) {
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
        }(r) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _r(s, t) {
        (null == t || t > s.length) && (t = s.length);
        for (var u = 0, v = new Array(t); u < t; u++)
            v[u] = s[u];
        return v;
    }

    function s(t, u) {
        var v = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(t);
            u && (w = w.filter(function(x) {
                return Object.getOwnPropertyDescriptor(t, x).enumerable;
            })), v.push.apply(v, w);
        }
        return v;
    }

    function t(u) {
        for (var v = 1; v < arguments.length; v++) {
            var w = null != arguments[v] ? arguments[v] : {};
            v % 2 ? s(Object(w), !0).forEach(function(x) {
                _u(u, x, w[x]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : s(Object(w)).forEach(function(x) {
                Object.defineProperty(u, x, Object.getOwnPropertyDescriptor(w, x));
            });
        }
        return u;
    }

    function _u(v, w, x) {
        return w in v ? Object.defineProperty(v, w, {
            value: x,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[w] = x, v;
    }

    function v() {
        return v = Object.assign || function(w) {
            for (var x = 1; x < arguments.length; x++) {
                var y = arguments[x];
                for (var z in y)
                    Object.prototype.hasOwnProperty.call(y, z) && (w[z] = y[z]);
            }
            return w;
        }, v.apply(this, arguments);
    }
    var w = function(x, y, z) {
        var A, B, C = x.position,
            D = x.viewBox,
            E = x.offset,
            F = x.className,
            G = D,
            H = G.cx,
            I = G.cy,
            J = G.innerRadius,
            K = G.outerRadius,
            L = G.startAngle,
            _M = G.endAngle,
            N = G.clockWise,
            O = (J + K) / 2,
            P = function(Q, R) {
                return (0, n.mathSign)(R - Q) * Math.min(Math.abs(R - Q), 360);
            }(L, _M),
            Q = P >= 0 ? 1 : -1;
        'insideStart' === C ? (A = L + Q * E, B = N) : 'insideEnd' === C ? (A = _M - Q * E, B = !N) : 'end' === C && (A = _M + Q * E, B = N), B = P <= 0 ? B : !B;
        var R = (0, o.polarToCartesian)(H, I, O, A),
            S = (0, o.polarToCartesian)(H, I, O, A + 359 * (B ? 1 : -1)),
            T = 'M'.concat(R.x, ',').concat(R.y, '\n    A').concat(O, ',').concat(O, ',0,1,').concat(B ? 0 : 1, ',\n    ').concat(S.x, ',').concat(S.y),
            U = a(i)(x.id) ? (0, n.uniqueId)('recharts-radial-line-') : x.id;
        return a(j).createElement('text', v({}, z, {
            dominantBaseline: 'central',
            className: a(k)('recharts-radial-bar-label', F)
        }), a(j).createElement('defs', null, a(j).createElement('path', {
            id: U,
            d: T
        })), a(j).createElement('textPath', {
            xlinkHref: '#'.concat(U)
        }, y));
    };

    function x(y) {
        var z, A = y.viewBox,
            B = y.position,
            C = y.value,
            D = y.children,
            E = y.content,
            F = y.className,
            G = void 0 === F ? '' : F,
            H = y.textBreakAll;
        if (!A || a(i)(C) && a(i)(D) && !(0, j.isValidElement)(E) && !a(h)(E))
            return null;
        if ((0, j.isValidElement)(E))
            return (0, j.cloneElement)(E, y);
        if (a(h)(E)) {
            if (z = (0, j.createElement)(E, y), (0, j.isValidElement)(z))
                return z;
        } else
            z = function(I) {
                var J = I.value,
                    K = I.formatter,
                    L = a(i)(I.children) ? J : I.children;
                return a(h)(K) ? K(L) : L;
            }(y);
        var I = function(J) {
                return (0, n.isNumber)(J.cx);
            }(A),
            J = (0, p.filterProps)(y, !0);
        if (I && ('insideStart' === B || 'insideEnd' === B || 'end' === B))
            return w(y, z, J);
        var K = I ? function(L) {
            var M = L.viewBox,
                N = L.offset,
                O = L.position,
                P = M,
                Q = P.cx,
                R = P.cy,
                S = P.innerRadius,
                T = P.outerRadius,
                U = (P.startAngle + P.endAngle) / 2;
            if ('outside' === O) {
                var V = (0, o.polarToCartesian)(Q, R, T + N, U),
                    W = V.x;
                return {
                    x: W,
                    y: V.y,
                    textAnchor: W >= Q ? 'start' : 'end',
                    verticalAnchor: 'middle'
                };
            }
            if ('center' === O)
                return {
                    x: Q,
                    y: R,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle'
                };
            if ('centerTop' === O)
                return {
                    x: Q,
                    y: R,
                    textAnchor: 'middle',
                    verticalAnchor: 'start'
                };
            if ('centerBottom' === O)
                return {
                    x: Q,
                    y: R,
                    textAnchor: 'middle',
                    verticalAnchor: 'end'
                };
            var V = (S + T) / 2,
                W = (0, o.polarToCartesian)(Q, R, V, U);
            return {
                x: W.x,
                y: W.y,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            };
        }(y) : function(L) {
            var M = L.viewBox,
                N = L.parentViewBox,
                O = L.offset,
                P = L.position,
                Q = M,
                R = Q.x,
                S = Q.y,
                T = Q.width,
                U = Q.height,
                V = U >= 0 ? 1 : -1,
                W = V * O,
                X = V > 0 ? 'end' : 'start',
                Y = V > 0 ? 'start' : 'end',
                Z = T >= 0 ? 1 : -1,
                $ = Z * O,
                ab = Z > 0 ? 'end' : 'start',
                bb = Z > 0 ? 'start' : 'end';
            if ('top' === P)
                return t(t({}, {
                    x: R + T / 2,
                    y: S - V * O,
                    textAnchor: 'middle',
                    verticalAnchor: X
                }), N ? {
                    height: Math.max(S - N.y, 0),
                    width: T
                } : {});
            if ('bottom' === P)
                return t(t({}, {
                    x: R + T / 2,
                    y: S + U + W,
                    textAnchor: 'middle',
                    verticalAnchor: Y
                }), N ? {
                    height: Math.max(N.y + N.height - (S + U), 0),
                    width: T
                } : {});
            if ('left' === P) {
                var cb = {
                    x: R - $,
                    y: S + U / 2,
                    textAnchor: ab,
                    verticalAnchor: 'middle'
                };
                return t(t({}, cb), N ? {
                    width: Math.max(cb.x - N.x, 0),
                    height: U
                } : {});
            }
            if ('right' === P) {
                var cb = {
                    x: R + T + $,
                    y: S + U / 2,
                    textAnchor: bb,
                    verticalAnchor: 'middle'
                };
                return t(t({}, cb), N ? {
                    width: Math.max(N.x + N.width - cb.x, 0),
                    height: U
                } : {});
            }
            var cb = N ? {
                width: T,
                height: U
            } : {};
            return 'insideLeft' === P ? t({
                x: R + $,
                y: S + U / 2,
                textAnchor: bb,
                verticalAnchor: 'middle'
            }, cb) : 'insideRight' === P ? t({
                x: R + T - $,
                y: S + U / 2,
                textAnchor: ab,
                verticalAnchor: 'middle'
            }, cb) : 'insideTop' === P ? t({
                x: R + T / 2,
                y: S + W,
                textAnchor: 'middle',
                verticalAnchor: Y
            }, cb) : 'insideBottom' === P ? t({
                x: R + T / 2,
                y: S + U - W,
                textAnchor: 'middle',
                verticalAnchor: X
            }, cb) : 'insideTopLeft' === P ? t({
                x: R + $,
                y: S + W,
                textAnchor: bb,
                verticalAnchor: Y
            }, cb) : 'insideTopRight' === P ? t({
                x: R + T - $,
                y: S + W,
                textAnchor: ab,
                verticalAnchor: Y
            }, cb) : 'insideBottomLeft' === P ? t({
                x: R + $,
                y: S + U - W,
                textAnchor: bb,
                verticalAnchor: X
            }, cb) : 'insideBottomRight' === P ? t({
                x: R + T - $,
                y: S + U - W,
                textAnchor: ab,
                verticalAnchor: X
            }, cb) : a(g)(P) && ((0, n.isNumber)(P.x) || (0, n.isPercent)(P.x)) && ((0, n.isNumber)(P.y) || (0, n.isPercent)(P.y)) ? t({
                x: R + (0, n.getPercentValue)(P.x, T),
                y: S + (0, n.getPercentValue)(P.y, U),
                textAnchor: 'end',
                verticalAnchor: 'end'
            }, cb) : t({
                x: R + T / 2,
                y: S + U / 2,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            }, cb);
        }(y);
        return a(j).createElement(l.Text, v({
            className: a(k)('recharts-label', G)
        }, J, K, {
            breakAll: H
        }), z);
    }
    x.displayName = 'Label', x.defaultProps = {
        offset: 5
    };
    var y = function(z) {
            var A = z.cx,
                B = z.cy,
                C = z.angle,
                D = z.startAngle,
                E = z.endAngle,
                F = z.r,
                G = z.radius,
                H = z.innerRadius,
                I = z.outerRadius,
                J = z.x,
                K = z.y,
                L = z.top,
                M = z.left,
                N = z.width,
                O = z.height,
                P = z.clockWise,
                Q = z.labelViewBox;
            if (Q)
                return Q;
            if ((0, n.isNumber)(N) && (0, n.isNumber)(O)) {
                if ((0, n.isNumber)(J) && (0, n.isNumber)(K))
                    return {
                        x: J,
                        y: K,
                        width: N,
                        height: O
                    };
                if ((0, n.isNumber)(L) && (0, n.isNumber)(M))
                    return {
                        x: L,
                        y: M,
                        width: N,
                        height: O
                    };
            }
            return (0, n.isNumber)(J) && (0, n.isNumber)(K) ? {
                x: J,
                y: K,
                width: 0,
                height: 0
            } : (0, n.isNumber)(A) && (0, n.isNumber)(B) ? {
                cx: A,
                cy: B,
                startAngle: D || C || 0,
                endAngle: E || C || 0,
                innerRadius: H || 0,
                outerRadius: I || G || F || 0,
                clockWise: P
            } : z.viewBox ? z.viewBox : {};
        },
        z = function(A, B) {
            return A ? !0 === A ? a(j).createElement(x, {
                key: 'label-implicit',
                viewBox: B
            }) : (0, n.isNumOrStr)(A) ? a(j).createElement(x, {
                key: 'label-implicit',
                viewBox: B,
                value: A
            }) : (0, j.isValidElement)(A) ? A.type === x ? (0, j.cloneElement)(A, {
                key: 'label-implicit',
                viewBox: B
            }) : a(j).createElement(x, {
                key: 'label-implicit',
                content: A,
                viewBox: B
            }) : a(h)(A) ? a(j).createElement(x, {
                key: 'label-implicit',
                content: A,
                viewBox: B
            }) : a(g)(A) ? a(j).createElement(x, v({
                viewBox: B
            }, A, {
                key: 'label-implicit'
            })) : null : null;
        };
    x.parseViewBox = y, x.renderCallByParent = function(A, B) {
        var C = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!A || !A.children && C && !A.label)
            return null;
        var D = A.children,
            E = y(A),
            F = (0, m.findAllByType)(D, x.displayName).map(function(G, H) {
                return (0, j.cloneElement)(G, {
                    viewBox: B || E,
                    key: 'label-'.concat(H)
                });
            });
        if (!C)
            return F;
        var G = z(A.label, B || E);
        return [G].concat(q(F));
    };
}), d.register('6aUta', function(e, f) {
    b(e.exports, 'Text', function() {
        return _G;
    });
    var g = d('lAmnl'),
        h = d('O0Kav'),
        i = d('DRn6Q'),
        j = d('/U36/'),
        k = d('cUlop'),
        l = d('9vNM9'),
        m = d('3mYHS'),
        n = d('dq5ch');

    function o(p) {
        return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(q) {
            return typeof q;
        } : function(q) {
            return q && 'function' == typeof Symbol && q.constructor === Symbol && q !== Symbol.prototype ? 'symbol' : typeof q;
        }, o(p);
    }

    function p() {
        return p = Object.assign || function(q) {
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
        var t, u, v = function(w, x) {
            if (null == w)
                return {};
            var y, z, A = {},
                B = Object.keys(w);
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

    function t(u, v) {
        return t = Object.setPrototypeOf || function(w, x) {
            return w.__proto__ = x, w;
        }, t(u, v);
    }

    function u(v) {
        var w = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (v) {
                return !1;
            }
        }();
        return function() {
            var x, y = _w(v);
            if (w) {
                var z = _w(this).constructor;
                x = Reflect.construct(y, arguments, z);
            } else
                x = y.apply(this, arguments);
            return _v(this, x);
        };
    }

    function _v(w, x) {
        return !x || 'object' !== o(x) && 'function' != typeof x ? function(y) {
            if (void 0 === y)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return y;
        }(w) : x;
    }

    function _w(x) {
        return _w = Object.setPrototypeOf ? Object.getPrototypeOf : function(y) {
            return y.__proto__ || Object.getPrototypeOf(y);
        }, _w(x);
    }

    function x(y, z) {
        return function(A) {
            if (Array.isArray(A))
                return A;
        }(y) || function(A, B) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(A)))
                return;
            var C = [],
                D = !0,
                E = !1,
                F = void 0;
            try {
                for (var G, H = A[Symbol.iterator](); !(D = (G = H.next()).done) && (C.push(G.value), !B || C.length !== B); D = !0);
            } catch (A) {
                E = !0, F = A;
            } finally {
                try {
                    D || null == i.return || i.return();
                } finally {
                    if (E)
                        throw F;
                }
            }
            return C;
        }(y, z) || function(A, B) {
            if (!A)
                return;
            if ('string' == typeof A)
                return _y(A, B);
            var C = Object.prototype.toString.call(A).slice(8, -1);
            'Object' === C && A.constructor && (C = A.constructor.name);
            if ('Map' === C || 'Set' === C)
                return Array.from(A);
            if ('Arguments' === C || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
                return _y(A, B);
        }(y, z) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _y(z, A) {
        (null == A || A > z.length) && (A = z.length);
        for (var B = 0, C = new Array(A); B < A; B++)
            C[B] = z[B];
        return C;
    }

    function z(A, B) {
        var C = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(A);
            B && (D = D.filter(function(E) {
                return Object.getOwnPropertyDescriptor(A, E).enumerable;
            })), C.push.apply(C, D);
        }
        return C;
    }

    function A(B) {
        for (var C = 1; C < arguments.length; C++) {
            var D = null != arguments[C] ? arguments[C] : {};
            C % 2 ? z(Object(D), !0).forEach(function(E) {
                _B(B, E, D[E]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(D)) : z(Object(D)).forEach(function(E) {
                Object.defineProperty(B, E, Object.getOwnPropertyDescriptor(D, E));
            });
        }
        return B;
    }

    function _B(C, D, E) {
        return D in C ? Object.defineProperty(C, D, {
            value: E,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : C[D] = E, C;
    }
    var C = /[ \f\n\r\t\v\u2028\u2029]+/,
        D = function(E) {
            try {
                var F = [];
                return a(g)(E.children) || (F = E.breakAll ? E.children.toString().split('') : E.children.toString().split(C)), {
                    wordsWithComputedWidth: F.map(function(G) {
                        return {
                            word: G,
                            width: (0, n.getStringSize)(G, E.style).width
                        };
                    }),
                    spaceWidth: E.breakAll ? 0 : (0, n.getStringSize)('\xA0', E.style).width
                };
            } catch (a) {
                return null;
            }
        },
        E = function(F) {
            return [{
                words: a(g)(F) ? [] : F.toString().split(C)
            }];
        },
        F = function(G, H) {
            if ((G.width || G.scaleToFit) && !l.Global.isSsr && H) {
                var I = D(G);
                return I ? function(J, K, L, M, N) {
                    var O = (0, k.isNumber)(J.maxLines),
                        P = J.children,
                        Q = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(R, S) {
                                var T = S.word,
                                    U = S.width,
                                    V = R[R.length - 1];
                                if (V && (null == M || N || V.width + U + L < M))
                                    V.words.push(T), V.width += U + L;
                                else {
                                    var W = {
                                        words: [T],
                                        width: U
                                    };
                                    R.push(W);
                                }
                                return R;
                            }, []);
                        },
                        R = Q(K);
                    if (!O)
                        return R;
                    for (var S, T = function(U) {
                            var V = P.slice(0, U),
                                W = D(A(A({}, J), {}, {
                                    children: V + '\u2026'
                                })).wordsWithComputedWidth,
                                X = Q(W),
                                Y = X.length > J.maxLines || function(Z) {
                                    return Z.reduce(function($, ab) {
                                        return $.width > ab.width ? $ : ab;
                                    });
                                }(X).width > M;
                            return [
                                Y,
                                X
                            ];
                        }, U = 0, V = P.length - 1, W = 0; U <= V && W <= P.length - 1;) {
                        var X = Math.floor((U + V) / 2),
                            Y = x(T(X - 1), 2),
                            Z = Y[0],
                            $ = Y[1],
                            ab = x(T(X), 1)[0];
                        if (Z || ab || (U = X + 1), Z && ab && (V = X - 1), !Z && ab) {
                            S = $;
                            break;
                        }
                        W++;
                    }
                    return S || R;
                }(G, I.wordsWithComputedWidth, I.spaceWidth, G.width, G.scaleToFit) : E(G.children);
            }
            return E(G.children);
        },
        _G = function(H) {
            ! function(I, J) {
                if ('function' != typeof J && null !== J)
                    throw new TypeError('Super expression must either be null or a function');
                I.prototype = Object.create(J && J.prototype, {
                    constructor: {
                        value: I,
                        writable: !0,
                        configurable: !0
                    }
                }), J && t(I, J);
            }(l, H);
            var I, J, K, L = u(l);

            function M() {
                var N;
                r(this, M);
                for (var O = arguments.length, P = new Array(O), Q = 0; Q < O; Q++)
                    P[Q] = arguments[Q];
                return (N = L.call.apply(L, [this].concat(P))).state = {}, N;
            }
            return I = M, K = [{
                key: 'getDerivedStateFromProps',
                value: function(N, O) {
                    if (N.width !== O.prevWidth || N.scaleToFit !== O.prevScaleToFit || N.children !== O.prevChildren || N.style !== O.prevStyle || N.breakAll !== O.prevBreakAll) {
                        var P = N.children !== O.prevChildren || N.style !== O.prevStyle || N.breakAll !== O.prevBreakAll;
                        return {
                            prevWidth: N.width,
                            prevScaleToFit: N.scaleToFit,
                            prevChildren: N.children,
                            prevStyle: N.style,
                            wordsByLines: F(N, P)
                        };
                    }
                    return null;
                }
            }], (J = [{
                key: 'render',
                value: function() {
                    var N = this.props,
                        O = N.dx,
                        P = N.dy,
                        Q = N.textAnchor,
                        R = N.verticalAnchor,
                        S = N.scaleToFit,
                        T = N.angle,
                        U = N.lineHeight,
                        V = N.capHeight,
                        W = N.className,
                        X = N.breakAll,
                        Y = q(N, [
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
                        ]),
                        Z = this.state.wordsByLines;
                    if (!(0, k.isNumOrStr)(Y.x) || !(0, k.isNumOrStr)(Y.y))
                        return null;
                    var $, ab = Y.x + ((0, k.isNumber)(O) ? O : 0),
                        bb = Y.y + ((0, k.isNumber)(P) ? P : 0);
                    switch (R) {
                        case 'start':
                            $ = a(i)('calc('.concat(V, ')'));
                            break;
                        case 'middle':
                            $ = a(i)('calc('.concat((Z.length - 1) / 2, ' * -').concat(U, ' + (').concat(V, ' / 2))'));
                            break;
                        default:
                            $ = a(i)('calc('.concat(Z.length - 1, ' * -').concat(U, ')'));
                    }
                    var cb = [];
                    if (S) {
                        var db = Z[0].width,
                            eb = this.props.width;
                        cb.push('scale('.concat(((0, k.isNumber)(eb) ? eb / db : 1) / db, ')'));
                    }
                    return T && cb.push('rotate('.concat(T, ', ').concat(ab, ', ').concat(bb, ')')), cb.length && (Y.transform = cb.join(' ')), a(h).createElement('text', p({}, (0, m.filterProps)(Y, !0), {
                        x: ab,
                        y: bb,
                        className: a(j)('recharts-text', W),
                        textAnchor: Q
                    }), Z.map(function(db, eb) {
                        return a(h).createElement('tspan', {
                            x: ab,
                            dy: 0 === eb ? $ : U,
                            key: eb
                        }, db.words.join(X ? '' : ' '));
                    }));
                }
            }]) && s(I.prototype, J), K && s(I, K), M;
        }(h.Component);
    _G.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: '1em',
        capHeight: '0.71em',
        scaleToFit: !1,
        textAnchor: 'start',
        verticalAnchor: 'end'
    };
}), d.register('DRn6Q', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g = _k(d('X22eq')),
        h = d('mi+Vy'),
        i = _k(d('uGN59')),
        j = _k(d('SVcpU'));

    function _k(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    var l = /((?:\-[a-z]+\-)?calc)/;
    e.exports.default = function(m) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
        return (0, g.default)(m).walk(function(o) {
            if ('function' === o.type && l.test(o.value)) {
                var p = g.default.stringify(o.nodes);
                if (!(p.indexOf('constant') >= 0 || p.indexOf('env') >= 0)) {
                    var q = h.parser.parse(p),
                        r = (0, i.default)(q, n);
                    o.type = 'word', o.value = (0, j.default)(o.value, r, n);
                }
            }
        }, !0).toString();
    }, e.exports = e.exports.default;
}), d.register('X22eq', function(e, f) {
    var g = d('4vYsL'),
        h = d('Bvq1K'),
        i = d('+/01j');

    function j(k) {
        return this instanceof j ? (this.nodes = g(k), this) : new j(k);
    }
    j.prototype.toString = function() {
        return Array.isArray(this.nodes) ? i(this.nodes) : '';
    }, j.prototype.walk = function(k, l) {
        return h(this.nodes, k, l), this;
    }, j.unit = d('XiosP'), j.walk = h, j.stringify = i, e.exports = j;
}), d.register('4vYsL', function(e, f) {
    var g = '('.charCodeAt(0),
        h = ')'.charCodeAt(0),
        i = '\''.charCodeAt(0),
        j = '"'.charCodeAt(0),
        k = '\\'.charCodeAt(0),
        l = '/'.charCodeAt(0),
        m = ','.charCodeAt(0),
        n = ':'.charCodeAt(0),
        o = '*'.charCodeAt(0);
    e.exports = function(p) {
        for (var q, r, s, t, u, v, w, x, y = [], z = p, A = 0, B = z.charCodeAt(A), C = z.length, D = [{
                nodes: y
            }], E = 0, F = '', G = '', H = ''; A < C;)
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
}), d.register('Bvq1K', function(e, f) {
    e.exports = function e(g, h, i) {
        var j, k, l, m;
        for (j = 0, k = g.length; j < k; j += 1)
            l = g[j], i || (m = h(l, j, g)), !1 !== m && 'function' === l.type && Array.isArray(l.nodes) && e(l.nodes, h, i), i && h(l, j, g);
    };
}), d.register('+/01j', function(e, f) {
    function g(h, i) {
        var j, k, l = h.type,
            m = h.value;
        return i && void 0 !== (k = i(h)) ? k : 'word' === l || 'space' === l ? m : 'string' === l ? (j = h.quote || '') + m + (h.unclosed ? '' : j) : 'comment' === l ? '/*' + m + (h.unclosed ? '' : '*/') : 'div' === l ? (h.before || '') + m + (h.after || '') : Array.isArray(h.nodes) ? (j = d(h.nodes), 'function' !== l ? j : m + '(' + (h.before || '') + j + (h.after || '') + (h.unclosed ? '' : ')')) : m;
    }

    function h(i, j) {
        var k, l;
        if (Array.isArray(i)) {
            for (k = '', l = i.length - 1; ~l; l -= 1)
                k = g(i[l], j) + k;
            return k;
        }
        return g(i, j);
    }
    e.exports = h;
}), d.register('XiosP', function(e, f) {
    var g = '-'.charCodeAt(0),
        h = '+'.charCodeAt(0),
        i = '.'.charCodeAt(0),
        j = 'e'.charCodeAt(0),
        k = 'E'.charCodeAt(0);
    e.exports = function(l) {
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
}), d.register('mi+Vy', function(e, f) {
    var g;
    b(e.exports, 'parser', function() {
        return g;
    }, function(h) {
        return g = h;
    });
    var h = function() {
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

        function j(k, l, m) {
            m = m || 0;
            for (var n = 0; n < l; n++)
                this.push(k), k += m;
        }

        function k(l, m) {
            for (m += l = this.length - l; l < m; l++)
                this.push(this[l]);
        }

        function l(m) {
            for (var n = [], o = 0, p = m.length; o < p; o++) {
                var q = m[o];
                'function' == typeof q ? (o++, q.apply(n, m[o])) : n.push(q);
            }
            return n;
        }
        'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(i.prototype, Error.prototype) : i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i.prototype.name = 'JisonParserError';
        var m = {
            trace: function() {},
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
            quoteName: function(n) {
                return '"' + n + '"';
            },
            getSymbolName: function(n) {
                if (this.terminals_[n])
                    return this.terminals_[n];
                var o = this.symbols_;
                for (var p in o)
                    if (o[p] === n)
                        return p;
                return null;
            },
            describeSymbol: function(n) {
                if (n !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[n])
                    return this.terminal_descriptions_[n];
                if (n === this.EOF)
                    return 'end of input';
                var o = this.getSymbolName(n);
                return o ? this.quoteName(o) : null;
            },
            collect_expected_token_set: function(n, o) {
                var p = this.TERROR,
                    q = [],
                    r = {};
                if (!o && this.state_descriptions_ && this.state_descriptions_[n])
                    return [this.state_descriptions_[n]];
                for (var s in this.table[n])
                    if ((s = +s) !== p) {
                        var t = o ? s : this.describeSymbol(s);
                        t && !r[t] && (q.push(t), r[t] = !0);
                    }
                return q;
            },
            productions_: function(n) {
                for (var o = [], p = n.pop, q = n.rule, r = 0, s = p.length; r < s; r++)
                    o.push([
                        p[r],
                        q[r]
                    ]);
                return o;
            }({
                pop: l([
                    29,
                    j,
                    [
                        30,
                        10
                    ],
                    31,
                    31,
                    32,
                    32,
                    j,
                    [
                        33,
                        15
                    ]
                ]),
                rule: l([
                    2,
                    j,
                    [
                        3,
                        5
                    ],
                    4,
                    7,
                    j,
                    [
                        1,
                        4
                    ],
                    2,
                    4,
                    6,
                    j,
                    [
                        1,
                        14
                    ],
                    2
                ])
            }),
            performAction: function(n, o, p) {
                var q = this.yy;
                q.parser, q.lexer;
                switch (n) {
                    case 0:
                    case 6:
                        this.$ = p[o - 1];
                        break;
                    case 1:
                        return this.$ = p[o - 1], p[o - 1];
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$ = {
                            type: 'MathExpression',
                            operator: p[o - 1],
                            left: p[o - 2],
                            right: p[o]
                        };
                        break;
                    case 7:
                        this.$ = {
                            type: 'Calc',
                            value: p[o - 1]
                        };
                        break;
                    case 8:
                        this.$ = {
                            type: 'Calc',
                            value: p[o - 1],
                            prefix: p[o - 5]
                        };
                        break;
                    case 9:
                    case 10:
                    case 11:
                        this.$ = p[o];
                        break;
                    case 12:
                        this.$ = {
                            type: 'Value',
                            value: parseFloat(p[o])
                        };
                        break;
                    case 13:
                        this.$ = {
                            type: 'Value',
                            value: -1 * parseFloat(p[o])
                        };
                        break;
                    case 14:
                        this.$ = {
                            type: 'CssVariable',
                            value: p[o - 1]
                        };
                        break;
                    case 15:
                        this.$ = {
                            type: 'CssVariable',
                            value: p[o - 3],
                            fallback: p[o - 1]
                        };
                        break;
                    case 16:
                        this.$ = {
                            type: 'LengthValue',
                            value: parseFloat(p[o]),
                            unit: /[a-z]+/.exec(p[o])[0]
                        };
                        break;
                    case 17:
                        this.$ = {
                            type: 'AngleValue',
                            value: parseFloat(p[o]),
                            unit: /[a-z]+/.exec(p[o])[0]
                        };
                        break;
                    case 18:
                        this.$ = {
                            type: 'TimeValue',
                            value: parseFloat(p[o]),
                            unit: /[a-z]+/.exec(p[o])[0]
                        };
                        break;
                    case 19:
                        this.$ = {
                            type: 'FrequencyValue',
                            value: parseFloat(p[o]),
                            unit: /[a-z]+/.exec(p[o])[0]
                        };
                        break;
                    case 20:
                        this.$ = {
                            type: 'ResolutionValue',
                            value: parseFloat(p[o]),
                            unit: /[a-z]+/.exec(p[o])[0]
                        };
                        break;
                    case 21:
                        this.$ = {
                            type: 'EmValue',
                            value: parseFloat(p[o]),
                            unit: 'em'
                        };
                        break;
                    case 22:
                        this.$ = {
                            type: 'ExValue',
                            value: parseFloat(p[o]),
                            unit: 'ex'
                        };
                        break;
                    case 23:
                        this.$ = {
                            type: 'ChValue',
                            value: parseFloat(p[o]),
                            unit: 'ch'
                        };
                        break;
                    case 24:
                        this.$ = {
                            type: 'RemValue',
                            value: parseFloat(p[o]),
                            unit: 'rem'
                        };
                        break;
                    case 25:
                        this.$ = {
                            type: 'VhValue',
                            value: parseFloat(p[o]),
                            unit: 'vh'
                        };
                        break;
                    case 26:
                        this.$ = {
                            type: 'VwValue',
                            value: parseFloat(p[o]),
                            unit: 'vw'
                        };
                        break;
                    case 27:
                        this.$ = {
                            type: 'VminValue',
                            value: parseFloat(p[o]),
                            unit: 'vmin'
                        };
                        break;
                    case 28:
                        this.$ = {
                            type: 'VmaxValue',
                            value: parseFloat(p[o]),
                            unit: 'vmax'
                        };
                        break;
                    case 29:
                        this.$ = {
                            type: 'PercentageValue',
                            value: parseFloat(p[o]),
                            unit: '%'
                        };
                        break;
                    case 30:
                        var r = p[o];
                        r.value *= -1, this.$ = r;
                }
            },
            table: function(n) {
                for (var o = [], p = n.len, q = n.symbol, r = n.type, s = n.state, t = n.mode, u = n.goto, v = 0, w = p.length; v < w; v++) {
                    for (var x = p[v], y = {}, z = 0; z < x; z++) {
                        var A = q.shift();
                        switch (r.shift()) {
                            case 2:
                                y[A] = [
                                    t.shift(),
                                    u.shift()
                                ];
                                break;
                            case 0:
                                y[A] = s.shift();
                                break;
                            default:
                                y[A] = [3];
                        }
                    }
                    o.push(y);
                }
                return o;
            }({
                len: l([
                    24,
                    1,
                    5,
                    23,
                    1,
                    18,
                    j,
                    [
                        0,
                        3
                    ],
                    1,
                    j,
                    [
                        0,
                        16
                    ],
                    j,
                    [
                        23,
                        4
                    ],
                    k,
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
                    j,
                    [
                        0,
                        3
                    ],
                    5,
                    1,
                    2,
                    k,
                    [
                        37,
                        3
                    ],
                    k,
                    [
                        20,
                        3
                    ],
                    5,
                    0,
                    0
                ]),
                symbol: l([
                    4,
                    7,
                    9,
                    11,
                    12,
                    j,
                    [
                        15,
                        19,
                        1
                    ],
                    1,
                    1,
                    j,
                    [
                        3,
                        4,
                        1
                    ],
                    k,
                    [
                        30,
                        19
                    ],
                    k,
                    [
                        29,
                        4
                    ],
                    7,
                    4,
                    10,
                    11,
                    k,
                    [
                        22,
                        14
                    ],
                    k,
                    [
                        19,
                        3
                    ],
                    k,
                    [
                        43,
                        22
                    ],
                    k,
                    [
                        23,
                        69
                    ],
                    k,
                    [
                        139,
                        4
                    ],
                    8,
                    k,
                    [
                        51,
                        24
                    ],
                    4,
                    k,
                    [
                        138,
                        15
                    ],
                    13,
                    k,
                    [
                        186,
                        5
                    ],
                    8,
                    k,
                    [
                        6,
                        6
                    ],
                    k,
                    [
                        5,
                        5
                    ],
                    9,
                    8,
                    14,
                    k,
                    [
                        159,
                        47
                    ],
                    k,
                    [
                        60,
                        10
                    ]
                ]),
                type: l([
                    j,
                    [
                        2,
                        19
                    ],
                    j,
                    [
                        0,
                        5
                    ],
                    1,
                    j,
                    [
                        2,
                        24
                    ],
                    j,
                    [
                        0,
                        4
                    ],
                    k,
                    [
                        22,
                        19
                    ],
                    k,
                    [
                        43,
                        42
                    ],
                    k,
                    [
                        23,
                        70
                    ],
                    k,
                    [
                        28,
                        25
                    ],
                    k,
                    [
                        45,
                        25
                    ],
                    k,
                    [
                        113,
                        54
                    ]
                ]),
                state: l([
                    1,
                    2,
                    8,
                    6,
                    7,
                    30,
                    k,
                    [
                        4,
                        3
                    ],
                    33,
                    37,
                    k,
                    [
                        5,
                        3
                    ],
                    38,
                    k,
                    [
                        4,
                        3
                    ],
                    39,
                    k,
                    [
                        4,
                        3
                    ],
                    40,
                    k,
                    [
                        4,
                        3
                    ],
                    42,
                    k,
                    [
                        21,
                        4
                    ],
                    50,
                    k,
                    [
                        5,
                        3
                    ],
                    51,
                    k,
                    [
                        4,
                        3
                    ]
                ]),
                mode: l([
                    j,
                    [
                        1,
                        179
                    ],
                    j,
                    [
                        2,
                        3
                    ],
                    k,
                    [
                        5,
                        5
                    ],
                    k,
                    [
                        6,
                        4
                    ],
                    j,
                    [
                        1,
                        57
                    ]
                ]),
                goto: l([
                    5,
                    3,
                    4,
                    24,
                    j,
                    [
                        9,
                        15,
                        1
                    ],
                    j,
                    [
                        25,
                        5,
                        1
                    ],
                    k,
                    [
                        24,
                        19
                    ],
                    31,
                    35,
                    32,
                    34,
                    k,
                    [
                        18,
                        14
                    ],
                    36,
                    k,
                    [
                        38,
                        19
                    ],
                    k,
                    [
                        19,
                        57
                    ],
                    k,
                    [
                        118,
                        4
                    ],
                    41,
                    k,
                    [
                        24,
                        19
                    ],
                    43,
                    35,
                    k,
                    [
                        16,
                        14
                    ],
                    44,
                    j,
                    [
                        2,
                        3
                    ],
                    28,
                    29,
                    2,
                    j,
                    [
                        3,
                        3
                    ],
                    28,
                    29,
                    3,
                    k,
                    [
                        53,
                        4
                    ],
                    j,
                    [
                        45,
                        5,
                        1
                    ],
                    k,
                    [
                        100,
                        42
                    ],
                    52,
                    k,
                    [
                        5,
                        4
                    ],
                    53
                ])
            }),
            defaultActions: function(n) {
                for (var o = {}, p = n.idx, q = n.goto, r = 0, s = p.length; r < s; r++) {
                    o[p[r]] = q[r];
                }
                return o;
            }({
                idx: l([
                    6,
                    7,
                    8,
                    j,
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
                goto: l([
                    9,
                    10,
                    11,
                    j,
                    [
                        16,
                        14,
                        1
                    ],
                    12,
                    1,
                    30,
                    13,
                    j,
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
            parseError: function(n, o, p) {
                if (!o.recoverable)
                    throw 'function' == typeof this.trace && this.trace(n), p || (p = this.JisonParserError), new p(n, o);
                'function' == typeof this.trace && this.trace(n), o.destroy();
            },
            parse: function(n) {
                var o, p = this,
                    q = new Array(128),
                    r = new Array(128),
                    s = new Array(128),
                    t = this.table,
                    u = 0,
                    v = 0,
                    w = (this.TERROR, this.EOF),
                    x = (this.options.errorRecoveryTokenDiscardCount, [
                        0,
                        54
                    ]);
                o = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
                var y = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };

                function z() {
                    var A = o.fastLex();
                    return 'number' != typeof A && (A = p.symbols_[A] || A), A || w;
                }
                'function' != typeof assert || assert, this.yyGetSharedState = function() {
                        return y;
                    },
                    function(A, B) {
                        for (var C in B)
                            void 0 === A[C] && Object.prototype.hasOwnProperty.call(B, C) && (A[C] = B[C]);
                    }(y, this.yy), y.lexer = o, y.parser = this, 'function' == typeof y.parseError ? this.parseError = function(A, B, C) {
                        return C || (C = this.JisonParserError), y.parseError.call(this, A, B, C);
                    } : this.parseError = this.originalParseError, 'function' == typeof y.quoteName ? this.quoteName = function(A) {
                        return y.quoteName.call(this, A);
                    } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(A, B, C) {
                        var D, E;
                        B && ((y.post_parse || this.post_parse) && (E = this.constructParseErrorInfo(null, null, null, !1)), y.post_parse && void 0 !== (D = y.post_parse.call(this, y, A, E)) && (A = D), this.post_parse && void 0 !== (D = this.post_parse.call(this, y, A, E)) && (A = D), E && E.destroy && E.destroy());
                        if (this.__reentrant_call_depth > 1)
                            return A;
                        if (o.cleanupAfterLex && o.cleanupAfterLex(C), y && (y.lexer = void 0, y.parser = void 0, o.yy === y && (o.yy = void 0)), y = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, q.length = 0, r.length = 0, s.length = 0, u = 0, !C) {
                            for (var F = this.__error_infos.length - 1; F >= 0; F--) {
                                var G = this.__error_infos[F];
                                G && 'function' == typeof G.destroy && G.destroy();
                            }
                            this.__error_infos.length = 0;
                        }
                        return A;
                    }, this.constructParseErrorInfo = function(A, B, C, D) {
                        var E = {
                            errStr: A,
                            exception: B,
                            text: o.match,
                            value: o.yytext,
                            token: this.describeSymbol(v) || v,
                            token_id: v,
                            line: o.yylineno,
                            expected: C,
                            recoverable: D,
                            state: _A,
                            action: _B,
                            new_state: _H,
                            symbol_stack: q,
                            state_stack: r,
                            value_stack: s,
                            stack_pointer: u,
                            yy: y,
                            lexer: o,
                            parser: this,
                            destroy: function() {
                                var F = !!this.recoverable;
                                for (var G in this)
                                    this.hasOwnProperty(G) && 'object' == typeof G && (this[G] = void 0);
                                this.recoverable = F;
                            }
                        };
                        return this.__error_infos.push(E), E;
                    };
                var _A, _B, C, D, E, F, G, _H, I = function() {
                        var J = o.lex();
                        return 'number' != typeof J && (J = p.symbols_[J] || J), J || w;
                    },
                    J = {
                        $: !0,
                        _$: void 0,
                        yy: y
                    },
                    K = !1;
                try {
                    if (this.__reentrant_call_depth++, o.setInput(n, y), 'function' == typeof o.canIUse)
                        o.canIUse().fastLex && (I = z);
                    for (s[u] = null, r[u] = 0, q[u] = 0, ++u, this.pre_parse && this.pre_parse.call(this, y), y.pre_parse && y.pre_parse.call(this, y), _H = r[u - 1];;) {
                        if (_A = _H, this.defaultActions[_A])
                            _B = 2, _H = this.defaultActions[_A];
                        else if (v || (v = I()), D = t[_A] && t[_A][v] || x, _H = D[1], !(_B = D[0])) {
                            var L, M = this.describeSymbol(v) || v,
                                N = this.collect_expected_token_set(_A);
                            L = 'number' == typeof o.yylineno ? 'Parse error on line ' + (o.yylineno + 1) + ': ' : 'Parse error: ', 'function' == typeof o.showPosition && (L += '\n' + o.showPosition(69, 10) + '\n'), N.length ? L += 'Expecting ' + N.join(', ') + ', got unexpected ' + M : L += 'Unexpected ' + M, E = this.constructParseErrorInfo(L, null, N, !1), void 0 !== (C = this.parseError(E.errStr, E, this.JisonParserError)) && (K = C);
                            break;
                        }
                        switch (_B) {
                            default:
                                if (_B instanceof Array) {
                                    E = this.constructParseErrorInfo('Parse Error: multiple actions possible at state: ' + _A + ', token: ' + v, null, null, !1), void 0 !== (C = this.parseError(E.errStr, E, this.JisonParserError)) && (K = C);
                                    break;
                                }
                                E = this.constructParseErrorInfo('Parsing halted. No viable error recovery approach available due to internal system failure.', null, null, !1), void 0 !== (C = this.parseError(E.errStr, E, this.JisonParserError)) && (K = C);
                                break;
                            case 1:
                                q[u] = v, s[u] = o.yytext, r[u] = _H, ++u, v = 0;
                                continue;
                            case 2:
                                if (F = (G = this.productions_[_H - 1])[1], void 0 !== (C = this.performAction.call(J, _H, u - 1, s))) {
                                    K = C;
                                    break;
                                }
                                u -= F;
                                var L = G[0];
                                q[u] = L, s[u] = J.$, _H = t[r[u - 1]][L], r[u] = _H, ++u;
                                continue;
                            case 3:
                                -2 !== u && (K = !0, u--, void 0 !== s[u] && (K = s[u]));
                        }
                        break;
                    }
                } catch (n) {
                    if (n instanceof this.JisonParserError)
                        throw n;
                    if (o && 'function' == typeof o.JisonLexerError && n instanceof o.JisonLexerError)
                        throw n;
                    E = this.constructParseErrorInfo('Parsing aborted due to exception.', n, null, !1), K = !1, void 0 !== (C = this.parseError(E.errStr, E, this.JisonParserError)) && (K = C);
                } finally {
                    K = this.cleanupAfterParse(K, !0, !0), this.__reentrant_call_depth--;
                }
                return K;
            }
        };
        m.originalParseError = m.parseError, m.originalQuoteName = m.quoteName;
        var n = function() {
            function o(p, q) {
                var r;
                if (Object.defineProperty(this, 'name', {
                        enumerable: !1,
                        writable: !1,
                        value: 'JisonLexerError'
                    }), null == p && (p = '???'), Object.defineProperty(this, 'message', {
                        enumerable: !1,
                        writable: !0,
                        value: p
                    }), this.hash = q, q && q.exception instanceof Error) {
                    var s = q.exception;
                    this.message = s.message || p, r = s.stack;
                }
                r || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : r = new Error(p).stack), r && Object.defineProperty(this, 'stack', {
                    enumerable: !1,
                    writable: !1,
                    value: r
                });
            }
            'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(o.prototype, Error.prototype) : o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o.prototype.name = 'JisonLexerError';
            var p = {
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
                constructLexErrorInfo: function(q, r, s) {
                    if (q = '' + q, null == s && (s = !(q.indexOf('\n') > 0 && q.indexOf('^') > 0)), this.yylloc && s)
                        if ('function' == typeof this.prettyPrintRange) {
                            this.prettyPrintRange(this.yylloc);
                            /\n\s*$/.test(q) || (q += '\n'), q += '\n  Erroneous area:\n' + this.prettyPrintRange(this.yylloc);
                        } else if ('function' == typeof this.showPosition) {
                        var t = this.showPosition();
                        t && (q.length && '\n' !== q[q.length - 1] && '\n' !== t[0] ? q += '\n' + t : q += t);
                    }
                    var t = {
                        errStr: q,
                        recoverable: !!r,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function() {
                            var u = !!this.recoverable;
                            for (var v in this)
                                this.hasOwnProperty(v) && 'object' == typeof v && (this[v] = void 0);
                            this.recoverable = u;
                        }
                    };
                    return this.__error_infos.push(t), t;
                },
                parseError: function(q, r, s) {
                    if (s || (s = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && 'function' == typeof this.yy.parser.parseError)
                            return this.yy.parser.parseError.call(this, q, r, s) || this.ERROR;
                        if ('function' == typeof this.yy.parseError)
                            return this.yy.parseError.call(this, q, r, s) || this.ERROR;
                    }
                    throw new s(q, r);
                },
                yyerror: function(q) {
                    var r = '';
                    this.yylloc && (r = ' on line ' + (this.yylineno + 1));
                    var s = this.constructLexErrorInfo('Lexical error' + r + ': ' + q, this.options.lexerErrorsAreRecoverable),
                        t = Array.prototype.slice.call(arguments, 1);
                    return t.length && (s.extra_error_attributes = t), this.parseError(s.errStr, s, this.JisonLexerError) || this.ERROR;
                },
                cleanupAfterLex: function(q) {
                    if (this.setInput('', {}), !q) {
                        for (var r = this.__error_infos.length - 1; r >= 0; r--) {
                            var s = this.__error_infos[r];
                            s && 'function' == typeof s.destroy && s.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return this;
                },
                clear: function() {
                    this.yytext = '', this.yyleng = 0, this.match = '', this.matches = !1, this._more = !1, this._backtrack = !1;
                    var q = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: q,
                        last_line: this.yylineno + 1,
                        last_column: q,
                        range: [
                            this.offset,
                            this.offset
                        ]
                    };
                },
                setInput: function(q, r) {
                    if (this.yy = r || this.yy || {}, !this.__decompressed) {
                        for (var s = this.rules, t = 0, u = s.length; t < u; t++) {
                            'number' == typeof(_C = s[t]) && (s[t] = s[_C]);
                        }
                        var v = this.conditions;
                        for (var w in v) {
                            var x = v[w],
                                y = x.rules,
                                z = (u = y.length, new Array(u + 1)),
                                A = new Array(u + 1);
                            for (t = 0; t < u; t++) {
                                var B = y[t],
                                    _C = s[B];
                                z[t + 1] = _C, A[t + 1] = B;
                            }
                            x.rules = A, x.__rule_regexes = z, x.__rule_count = u;
                        }
                        this.__decompressed = !0;
                    }
                    return this._input = q || '', this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = '', this.conditionStack = ['INITIAL'], this.__currentRuleSet__ = null, this.yylloc = {
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
                editRemainingInput: function(q, r) {
                    var s = q.call(this, this._input, r);
                    return 'string' != typeof s ? s && (this._input = '' + s) : this._input = s, this;
                },
                input: function() {
                    if (!this._input)
                        return null;
                    var q = this._input[0];
                    this.yytext += q, this.yyleng++, this.offset++, this.match += q, this.matched += q;
                    var r = 1,
                        s = !1;
                    if ('\n' === q)
                        s = !0;
                    else if ('\r' === q) {
                        s = !0;
                        var t = this._input[1];
                        '\n' === t && (r++, q += t, this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, this.yylloc.range[1]++);
                    }
                    return s ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(r), q;
                },
                unput: function(q) {
                    var r = q.length,
                        s = q.split(/(?:\r\n?|\n)/g);
                    if (this._input = q + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - r), this.yyleng = this.yytext.length, this.offset -= r, this.match = this.match.substr(0, this.match.length - r), this.matched = this.matched.substr(0, this.matched.length - r), s.length > 1) {
                        this.yylineno -= s.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var t = this.match,
                            u = t.split(/(?:\r\n?|\n)/g);
                        1 === u.length && (u = (t = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = u[u.length - 1].length;
                    } else
                        this.yylloc.last_column -= r;
                    return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this;
                },
                more: function() {
                    return this._more = !0, this;
                },
                reject: function() {
                    if (this.options.backtrack_lexer)
                        this._backtrack = !0;
                    else {
                        var q = '';
                        this.yylloc && (q = ' on line ' + (this.yylineno + 1));
                        var r = this.constructLexErrorInfo('Lexical error' + q + ': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).', !1);
                        this._signaled_error_token = this.parseError(r.errStr, r, this.JisonLexerError) || this.ERROR;
                    }
                    return this;
                },
                less: function(q) {
                    return this.unput(this.match.slice(q));
                },
                pastInput: function(q, r) {
                    var s = this.matched.substring(0, this.matched.length - this.match.length);
                    q < 0 ? q = s.length : q || (q = 20), r < 0 ? r = s.length : r || (r = 1);
                    var t = (s = s.substr(2 * -q - 2)).replace(/\r\n|\r/g, '\n').split('\n');
                    return (s = (t = t.slice(-r)).join('\n')).length > q && (s = '...' + s.substr(-q)), s;
                },
                upcomingInput: function(q, r) {
                    var s = this.match;
                    q < 0 ? q = s.length + this._input.length : q || (q = 20), r < 0 ? r = q : r || (r = 1), s.length < 2 * q + 2 && (s += this._input.substring(0, 2 * q + 2));
                    var t = s.replace(/\r\n|\r/g, '\n').split('\n');
                    return (s = (t = t.slice(0, r)).join('\n')).length > q && (s = s.substring(0, q) + '...'), s;
                },
                showPosition: function(q, r) {
                    var s = this.pastInput(q).replace(/\s/g, ' '),
                        t = new Array(s.length + 1).join('-');
                    return s + this.upcomingInput(r).replace(/\s/g, ' ') + '\n' + t + '^';
                },
                deriveLocationInfo: function(q, r, s, t) {
                    var u = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [
                            0,
                            0
                        ]
                    };
                    return q && (u.first_line = 0 | q.first_line, u.last_line = 0 | q.last_line, u.first_column = 0 | q.first_column, u.last_column = 0 | q.last_column, q.range && (u.range[0] = 0 | q.range[0], u.range[1] = 0 | q.range[1])), (u.first_line <= 0 || u.last_line < u.first_line) && (u.first_line <= 0 && r && (u.first_line = 0 | r.last_line, u.first_column = 0 | r.last_column, r.range && (u.range[0] = 0 | q.range[1])), (u.last_line <= 0 || u.last_line < u.first_line) && s && (u.last_line = 0 | s.first_line, u.last_column = 0 | s.first_column, s.range && (u.range[1] = 0 | q.range[0])), u.first_line <= 0 && t && (u.last_line <= 0 || t.last_line <= u.last_line) && (u.first_line = 0 | t.first_line, u.first_column = 0 | t.first_column, t.range && (u.range[0] = 0 | t.range[0])), u.last_line <= 0 && t && (u.first_line <= 0 || t.first_line >= u.first_line) && (u.last_line = 0 | t.last_line, u.last_column = 0 | t.last_column, t.range && (u.range[1] = 0 | t.range[1]))), u.last_line <= 0 && (u.first_line <= 0 ? (u.first_line = this.yylloc.first_line, u.last_line = this.yylloc.last_line, u.first_column = this.yylloc.first_column, u.last_column = this.yylloc.last_column, u.range[0] = this.yylloc.range[0], u.range[1] = this.yylloc.range[1]) : (u.last_line = this.yylloc.last_line, u.last_column = this.yylloc.last_column, u.range[1] = this.yylloc.range[1])), u.first_line <= 0 && (u.first_line = u.last_line, u.first_column = 0, u.range[1] = u.range[0]), u.first_column < 0 && (u.first_column = 0), u.last_column < 0 && (u.last_column = u.first_column > 0 ? u.first_column : 80), u;
                },
                prettyPrintRange: function(q, r, s) {
                    q = this.deriveLocationInfo(q, r, s);
                    var t = (this.matched + this._input).split('\n'),
                        u = Math.max(1, r ? r.first_line : q.first_line - 3),
                        v = Math.max(1, s ? s.last_line : q.last_line + 1),
                        w = 1 + Math.log10(1 | v) | 0,
                        x = new Array(w).join(' '),
                        y = [],
                        z = t.slice(u - 1, v + 1).map(function(A, B) {
                            var C = B + u,
                                D = (x + C).substr(-w) + ': ' + A,
                                E = new Array(w + 1).join('^'),
                                F = 3,
                                G = 0;
                            (C === q.first_line ? (F += q.first_column, G = Math.max(2, (C === q.last_line ? q.last_column : A.length) - q.first_column + 1)) : C === q.last_line ? G = Math.max(2, q.last_column + 1) : C > q.first_line && C < q.last_line && (G = Math.max(2, A.length + 1)), G) && (D += '\n' + E + new Array(F).join('.') + new Array(G).join('^'), A.trim().length > 0 && y.push(B));
                            return D = D.replace(/\t/g, ' ');
                        });
                    if (y.length > 4) {
                        var A = y[1] + 1,
                            B = y[y.length - 2] - 1,
                            C = new Array(w + 1).join(' ') + '  (...continued...)';
                        C += '\n' + new Array(w + 1).join('-') + '  (---------------)', z.splice(A, B - A + 1, C);
                    }
                    return z.join('\n');
                },
                describeYYLLOC: function(q, r) {
                    var s, t = q.first_line,
                        u = q.last_line,
                        v = q.first_column,
                        w = q.last_column;
                    if (0 === u - t ? (s = 'line ' + t + ', ', s += w - v <= 1 ? 'column ' + v : 'columns ' + v + ' .. ' + w) : s = 'lines ' + t + '(column ' + v + ') .. ' + u + '(column ' + w + ')', q.range && r) {
                        var x = q.range[0],
                            y = q.range[1] - 1;
                        s += y <= x ? ' {String Offset: ' + x + '}' : ' {String Offset range: ' + x + ' .. ' + y + '}';
                    }
                    return s;
                },
                test_match: function(q, r) {
                    var s, t, u, v, w;
                    if (this.options.backtrack_lexer && (u = {
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
                        }), w = (v = q[0]).length, (t = v.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += t.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = t[t.length - 1].length) : this.yylloc.last_column += w, this.yytext += v, this.match += v, this.matched += v, this.matches = q, this.yyleng = this.yytext.length, this.yylloc.range[1] += w, this.offset += w, this._more = !1, this._backtrack = !1, this._input = this._input.slice(w), s = this.performAction.call(this, this.yy, r, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), s)
                        return s;
                    if (this._backtrack) {
                        for (var x in u)
                            this[x] = u[x];
                        return this.__currentRuleSet__ = null, !1;
                    }
                    return !!this._signaled_error_token && (s = this._signaled_error_token, this._signaled_error_token = !1, s);
                },
                next: function() {
                    if (this.done)
                        return this.clear(), this.EOF;
                    var q, r, s, t;
                    this._input || (this.done = !0), this._more || this.clear();
                    var u = this.__currentRuleSet__;
                    if (!(u || (u = this.__currentRuleSet__ = this._currentRules()) && u.rules)) {
                        var v = '';
                        this.options.trackPosition && (v = ' on line ' + (this.yylineno + 1));
                        var w = this.constructLexErrorInfo('Internal lexer engine error' + v + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(w.errStr, w, this.JisonLexerError) || this.ERROR;
                    }
                    for (var v = u.rules, w = u.__rule_regexes, x = u.__rule_count, y = 1; y <= x; y++)
                        if ((s = this._input.match(w[y])) && (!r || s[0].length > r[0].length)) {
                            if (r = s, t = y, this.options.backtrack_lexer) {
                                if (!1 !== (q = this.test_match(s, v[y])))
                                    return q;
                                if (this._backtrack) {
                                    r = void 0;
                                    continue;
                                }
                                return !1;
                            }
                            if (!this.options.flex)
                                break;
                        }
                    if (r)
                        return !1 !== (q = this.test_match(r, v[t])) && q;
                    if (this._input) {
                        n = '';
                        this.options.trackPosition && (n = ' on line ' + (this.yylineno + 1));
                        _o = this.constructLexErrorInfo('Lexical error' + n + ': Unrecognized text.', this.options.lexerErrorsAreRecoverable);
                        var z = this._input,
                            A = this.topState(),
                            B = this.conditionStack.length;
                        return (q = this.parseError(_o.errStr, _o, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || z !== this._input || A !== this.topState() || B !== this.conditionStack.length || this.input()), q;
                    }
                    return this.done = !0, this.clear(), this.EOF;
                },
                lex: function() {
                    var q;
                    for ('function' == typeof this.pre_lex && (q = this.pre_lex.call(this, 0)), 'function' == typeof this.options.pre_lex && (q = this.options.pre_lex.call(this, q) || q), this.yy && 'function' == typeof this.yy.pre_lex && (q = this.yy.pre_lex.call(this, q) || q); !q;)
                        q = this.next();
                    return this.yy && 'function' == typeof this.yy.post_lex && (q = this.yy.post_lex.call(this, q) || q), 'function' == typeof this.options.post_lex && (q = this.options.post_lex.call(this, q) || q), 'function' == typeof this.post_lex && (q = this.post_lex.call(this, q) || q), q;
                },
                fastLex: function() {
                    for (var q; !q;)
                        q = this.next();
                    return q;
                },
                canIUse: function() {
                    return {
                        fastLex: !('function' == typeof this.pre_lex || 'function' == typeof this.options.pre_lex || this.yy && 'function' == typeof this.yy.pre_lex || this.yy && 'function' == typeof this.yy.post_lex || 'function' == typeof this.options.post_lex || 'function' == typeof this.post_lex) && 'function' == typeof this.fastLex
                    };
                },
                begin: function(q) {
                    return this.pushState(q);
                },
                pushState: function(q) {
                    return this.conditionStack.push(q), this.__currentRuleSet__ = null, this;
                },
                popState: function() {
                    return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0];
                },
                topState: function(q) {
                    return (q = this.conditionStack.length - 1 - Math.abs(q || 0)) >= 0 ? this.conditionStack[q] : 'INITIAL';
                },
                _currentRules: function() {
                    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL;
                },
                stateStackSize: function() {
                    return this.conditionStack.length;
                },
                options: {
                    trackPosition: !0
                },
                JisonLexerError: o,
                performAction: function(q, r, s) {
                    if (1 !== r)
                        return this.simpleCaseActionClusters[r];
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
            return p;
        }();

        function _o() {
            this.yy = {};
        }
        return m.lexer = n, _o.prototype = m, m.Parser = _o, new _o();
    }();
    g = h, h.Parser;
}), d.register('uGN59', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.flip = _m;
    var g, h = d('e9tXi'),
        i = (g = h) && g.__esModule ? g : {
            default: g
        };

    function j(k, l) {
        return 'MathExpression' === k.type ? function(m, n) {
            switch (m = function(o, p) {
                    var q = (0, i.default)(o.left, o.right, p),
                        r = j(q.left, p),
                        s = j(q.right, p);
                    'MathExpression' === r.type && 'MathExpression' === s.type && ('/' === r.operator && '*' === s.operator || '-' === r.operator && '+' === s.operator || '*' === r.operator && '/' === s.operator || '+' === r.operator && '-' === s.operator) && (_k(r.right, s.right) ? q = (0, i.default)(r.left, s.left, p) : _k(r.right, s.left) && (q = (0, i.default)(r.left, s.right, p)), r = j(q.left, p), s = j(q.right, p));
                    return o.left = r, o.right = s, o;
                }(m, n), m.operator) {
                case '+':
                case '-':
                    return function(o, p) {
                        var q = o,
                            r = q.left,
                            s = q.right,
                            t = q.operator;
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
                    return function(o, p) {
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
                    return function(o) {
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
}), d.register('e9tXi', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = d('JvIgV'),
        i = (g = h) && g.__esModule ? g : {
            default: g
        };
    e.exports.default = function(j, k, l) {
        switch (j.type) {
            case 'LengthValue':
            case 'AngleValue':
            case 'TimeValue':
            case 'FrequencyValue':
            case 'ResolutionValue':
                return function(m, n, o) {
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
}), d.register('JvIgV', function(e, f) {
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
    e.exports = function(h, i, j, k) {
        if (!g.hasOwnProperty(j))
            throw new Error('Cannot convert to ' + j);
        if (!g[j].hasOwnProperty(i))
            throw new Error('Cannot convert from ' + i + ' to ' + j);
        var l = g[j][i] * h;
        return !1 !== k ? (k = Math.pow(10, parseInt(k) || 5), Math.round(l * k) / k) : l;
    };
}), d.register('SVcpU', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.default = function(g, h, i) {
        var j = _j(h, i);
        return 'MathExpression' === h.type && (j = g + '(' + j + ')'), j;
    };
    var g = d('uGN59'),
        h = {
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

    function _j(k, l) {
        switch (k.type) {
            case 'MathExpression':
                var m = k.left,
                    n = k.right,
                    o = k.operator,
                    p = '';
                return 'MathExpression' === m.type && h[o] < h[m.operator] ? p += '(' + _j(m, l) + ')' : p += _j(m, l), p += ' ' + k.operator + ' ', 'MathExpression' === n.type && h[o] < h[n.operator] ? p += '(' + _j(n, l) + ')' : 'MathExpression' === n.type && '-' === o && [
                    '+',
                    '-'
                ].includes(n.operator) ? (n.operator = (0, g.flip)(n.operator), p += _j(n, l)) : p += _j(n, l), p;
            case 'Value':
                return i(k.value, l);
            case 'CssVariable':
                return k.fallback ? 'var(' + k.value + ', ' + _j(k.fallback, l) + ')' : 'var(' + k.value + ')';
            case 'Calc':
                return k.prefix ? '-' + k.prefix + '-calc(' + _j(k.value, l) + ')' : 'calc(' + _j(k.value, l) + ')';
            default:
                return i(k.value, l) + k.unit;
        }
    }
    e.exports = e.exports.default;
}), d.register('cUlop', function(e, f) {
    b(e.exports, 'mathSign', function() {
        return _l;
    }), b(e.exports, 'isPercent', function() {
        return _m;
    }), b(e.exports, 'isNumber', function() {
        return _n;
    }), b(e.exports, 'isNumOrStr', function() {
        return _o;
    }), b(e.exports, 'uniqueId', function() {
        return _q;
    }), b(e.exports, 'getPercentValue', function() {
        return _r;
    }), b(e.exports, 'getAnyElementOfObject', function() {
        return _s;
    }), b(e.exports, 'hasDuplicate', function() {
        return _t;
    }), b(e.exports, 'interpolateNumber', function() {
        return _u;
    }), b(e.exports, 'findEntryInArray', function() {
        return _v;
    });
    var g = d('MsaPk'),
        h = d('Tvpkn0'),
        i = d('9AJ+T'),
        j = d('IIAoM'),
        k = d('P6tY1'),
        _l = function(m) {
            return 0 === m ? 0 : m > 0 ? 1 : -1;
        },
        _m = function(n) {
            return a(k)(n) && n.indexOf('%') === n.length - 1;
        },
        _n = function(o) {
            return a(j)(o) && !a(i)(o);
        },
        _o = function(p) {
            return _n(p) || a(k)(p);
        },
        p = 0,
        _q = function(r) {
            var s = ++p;
            return ''.concat(r || '').concat(s);
        },
        _r = function(s, t) {
            var u, v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                w = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!_n(s) && !a(k)(s))
                return v;
            if (_m(s)) {
                var x = s.indexOf('%');
                u = t * parseFloat(s.slice(0, x)) / 100;
            } else
                u = +s;
            return a(i)(u) && (u = v), w && u > t && (u = t), u;
        },
        _s = function(t) {
            if (!t)
                return null;
            var u = Object.keys(t);
            return u && u.length ? t[u[0]] : null;
        },
        _t = function(u) {
            if (!a(h)(u))
                return !1;
            for (var v = u.length, w = {}, x = 0; x < v; x++) {
                if (w[u[x]])
                    return !0;
                w[u[x]] = !0;
            }
            return !1;
        },
        _u = function(v, w) {
            return _n(v) && _n(w) ? function(x) {
                return v + x * (w - v);
            } : function() {
                return w;
            };
        };

    function _v(w, x, y) {
        return w && w.length ? w.find(function(z) {
            return z && ('function' == typeof x ? x(z) : a(g)(z, x)) === y;
        }) : null;
    }
}), d.register('MsaPk', function(e, f) {
    var g = d('G6hlX');
    e.exports = function(h, i, j) {
        var k = null == h ? void 0 : g(h, i);
        return void 0 === k ? j : k;
    };
}), d.register('G6hlX', function(e, f) {
    var g = d('+AsgS'),
        h = d('Dafyg');
    e.exports = function(i, j) {
        for (var k = 0, l = (j = g(j, i)).length; null != i && k < l;)
            i = i[h(j[k++])];
        return k && k == l ? i : void 0;
    };
}), d.register('+AsgS', function(e, f) {
    var g = d('Tvpkn0'),
        h = d('gwc2L'),
        i = d('ajrdv'),
        j = d('ujU+T');
    e.exports = function(k, l) {
        return g(k) ? k : h(k, l) ? [k] : i(j(k));
    };
}), d.register('gwc2L', function(e, f) {
    var g = d('Tvpkn0'),
        h = d('mJ9/X'),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        j = /^\w*$/;
    e.exports = function(k, l) {
        if (g(k))
            return !1;
        var m = typeof k;
        return !('number' != m && 'symbol' != m && 'boolean' != m && null != k && !h(k)) || (j.test(k) || !i.test(k) || null != l && k in Object(l));
    };
}), d.register('mJ9/X', function(e, f) {
    var g = d('p5wQK'),
        h = d('rQx8t0');
    e.exports = function(i) {
        return 'symbol' == typeof i || h(i) && '[object Symbol]' == g(i);
    };
}), d.register('ajrdv', function(e, f) {
    var g = d('rd6Ee'),
        h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        j = g(function(k) {
            var l = [];
            return 46 === k.charCodeAt(0) && l.push(''), k.replace(h, function(m, n, o, p) {
                l.push(o ? p.replace(i, '$1') : n || m);
            }), l;
        });
    e.exports = j;
}), d.register('rd6Ee', function(e, f) {
    var g = d('NbQb5');
    e.exports = function(h) {
        var i = g(h, function(j) {
                return 500 === d.size && d.clear(), j;
            }),
            j = i.cache;
        return i;
    };
}), d.register('NbQb5', function(e, f) {
    var g = d('X4xJQ');

    function h(i, j) {
        if ('function' != typeof i || null != j && 'function' != typeof j)
            throw new TypeError('Expected a function');
        var k = function() {
            var l = arguments,
                m = j ? j.apply(this, l) : l[0],
                n = k.cache;
            if (n.has(m))
                return n.get(m);
            var o = i.apply(this, l);
            return k.cache = n.set(m, o) || n, o;
        };
        return k.cache = new(h.Cache || g)(), k;
    }
    h.Cache = g, e.exports = h;
}), d.register('ujU+T', function(e, f) {
    var g = d('SplJe');
    e.exports = function(h) {
        return null == h ? '' : g(h);
    };
}), d.register('SplJe', function(e, f) {
    var g = d('U/yTG'),
        h = d('6W4FR0'),
        i = d('Tvpkn0'),
        j = d('mJ9/X'),
        k = g ? g.prototype : void 0,
        l = k ? k.toString : void 0;
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
}), d.register('6W4FR0', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = null == g ? 0 : g.length, k = Array(j); ++i < j;)
            k[i] = h(g[i], i, g);
        return k;
    };
}), d.register('Dafyg', function(e, f) {
    var g = d('mJ9/X');
    e.exports = function(h) {
        if ('string' == typeof h || g(h))
            return h;
        var i = h + '';
        return '0' == i && 1 / h == -Infinity ? '-0' : i;
    };
}), d.register('9AJ+T', function(e, f) {
    var g = d('IIAoM');
    e.exports = function(h) {
        return g(h) && h != +h;
    };
}), d.register('IIAoM', function(e, f) {
    var g = d('p5wQK'),
        h = d('rQx8t0');
    e.exports = function(i) {
        return 'number' == typeof i || h(i) && '[object Number]' == g(i);
    };
}), d.register('P6tY1', function(e, f) {
    var g = d('p5wQK'),
        h = d('Tvpkn0'),
        i = d('rQx8t0');
    e.exports = function(j) {
        return 'string' == typeof j || !h(j) && i(j) && '[object String]' == g(j);
    };
}), d.register('9vNM9', function(e, f) {
    b(e.exports, 'Global', function() {
        return d;
    });
    var g = {
        isSsr: !('undefined' != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function(h) {
            return g[h];
        },
        set: function(h, i) {
            if ('string' == typeof h)
                g[h] = i;
            else {
                var j = Object.keys(h);
                j && j.length && j.forEach(function(k) {
                    g[k] = h[k];
                });
            }
        }
    };
}), d.register('dq5ch', function(e, f) {
    b(e.exports, 'getStringSize', function() {
        return _r;
    }), b(e.exports, 'getOffset', function() {
        return _s;
    }), b(e.exports, 'calculateChartCoordinate', function() {
        return _t;
    });
    var g = d('9vNM9');

    function h(i, j) {
        var k = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            j && (l = l.filter(function(m) {
                return Object.getOwnPropertyDescriptor(i, m).enumerable;
            })), k.push.apply(k, l);
        }
        return k;
    }

    function i(j) {
        for (var k = 1; k < arguments.length; k++) {
            var l = null != arguments[k] ? arguments[k] : {};
            k % 2 ? h(Object(l), !0).forEach(function(m) {
                _j(j, m, l[m]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(l)) : h(Object(l)).forEach(function(m) {
                Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(l, m));
            });
        }
        return j;
    }

    function _j(k, l, m) {
        return l in k ? Object.defineProperty(k, l, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[l] = m, k;
    }

    function k(l) {
        return function(m) {
            if (Array.isArray(m))
                return _l(m);
        }(l) || function(m) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(m))
                return Array.from(m);
        }(l) || function(m, n) {
            if (!m)
                return;
            if ('string' == typeof m)
                return _l(m, n);
            var o = Object.prototype.toString.call(m).slice(8, -1);
            'Object' === o && m.constructor && (o = m.constructor.name);
            if ('Map' === o || 'Set' === o)
                return Array.from(m);
            if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                return _l(m, n);
        }(l) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _l(m, n) {
        (null == n || n > m.length) && (n = m.length);
        for (var o = 0, p = new Array(n); o < n; o++)
            p[o] = m[o];
        return p;
    }
    var m = {
            widthCache: {},
            cacheCount: 0
        },
        n = {
            position: 'absolute',
            top: '-20000px',
            left: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            whiteSpace: 'pre'
        },
        o = [
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
        ],
        p = 'recharts_measurement_span';
    var q = function(r) {
            return Object.keys(r).reduce(function(s, t) {
                return ''.concat(s).concat((h = t, h.split('').reduce(function(u, v) {
                    return v === v.toUpperCase() ? [].concat(k(u), [
                        '-',
                        v.toLowerCase()
                    ]) : [].concat(k(u), [v]);
                }, []).join('')), ':').concat((d = t, g = r[t], o.indexOf(d) >= 0 && g === +g ? ''.concat(g, 'px') : g), ';');
                var u, v, w;
            }, '');
        },
        _r = function(s) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == s || g.Global.isSsr)
                return {
                    width: 0,
                    height: 0
                };
            var u = ''.concat(s),
                v = q(t),
                w = ''.concat(u, '-').concat(v);
            if (m.widthCache[w])
                return m.widthCache[w];
            try {
                var x = document.getElementById(p);
                x || ((x = document.createElement('span')).setAttribute('id', p), x.setAttribute('aria-hidden', 'true'), document.body.appendChild(x));
                var y = i(i({}, n), t);
                Object.keys(y).map(function(z) {
                    return x.style[z] = y[z], z;
                }), x.textContent = u;
                var z = x.getBoundingClientRect(),
                    A = {
                        width: z.width,
                        height: z.height
                    };
                return m.widthCache[w] = A, ++m.cacheCount > 2000 && (m.cacheCount = 0, m.widthCache = {}), A;
            } catch (s) {
                return {
                    width: 0,
                    height: 0
                };
            }
        },
        _s = function(t) {
            var u = t.ownerDocument.documentElement,
                v = {
                    top: 0,
                    left: 0
                };
            return void 0 !== t.getBoundingClientRect && (v = t.getBoundingClientRect()), {
                top: v.top + window.pageYOffset - u.clientTop,
                left: v.left + window.pageXOffset - u.clientLeft
            };
        },
        _t = function(u, v) {
            return {
                chartX: Math.round(u.pageX - v.left),
                chartY: Math.round(u.pageY - v.top)
            };
        };
}), d.register('1aRlp', function(e, f) {
    b(e.exports, 'getDisplayName', function() {
        return _q;
    }), b(e.exports, 'findAllByType', function() {
        return _u;
    }), b(e.exports, 'findChildByType', function() {
        return _v;
    }), b(e.exports, 'validateWidthHeight', function() {
        return _w;
    }), b(e.exports, 'isChildrenEqual', function() {
        return _z;
    }), b(e.exports, 'renderByOrder', function() {
        return _B;
    }), b(e.exports, 'getReactEventByType', function() {
        return _C;
    }), b(e.exports, 'parseChildIndex', function() {
        return _D;
    });
    var g = d('P6tY1'),
        h = d('MsaPk'),
        i = d('lAmnl'),
        j = d('Tvpkn0'),
        k = d('O0Kav'),
        l = d('tN5vn'),
        m = d('cUlop'),
        n = d('5NNbF');

    function o(p, q) {
        if (null == p)
            return {};
        var r, s, t = function(u, v) {
            if (null == u)
                return {};
            var w, x, y = {},
                z = Object.keys(u);
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
    var p = {
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
        },
        _q = function(r) {
            return 'string' == typeof r ? r : r ? r.displayName || r.name || 'Component' : '';
        },
        r = null,
        s = null,
        t = function b(u) {
            if (u === r && a(j)(s))
                return s;
            var v = [];
            return k.Children.forEach(u, function(w) {
                a(i)(w) || ((0, l.isFragment)(w) ? v = v.concat(b(w.props.children)) : v.push(w));
            }), s = v, r = u, v;
        },
        _u = function(v, w) {
            var x = [],
                y = [];
            return y = a(j)(w) ? w.map(function(z) {
                return _q(z);
            }) : [_q(w)], t(v).forEach(function(z) {
                var A = a(h)(z, 'type.displayName') || a(h)(z, 'type.name'); -
                1 !== y.indexOf(A) && x.push(z);
            }), x;
        },
        _v = function(w, x) {
            var y = _u(w, x);
            return y && y[0];
        },
        _w = function(x) {
            if (!x || !x.props)
                return !1;
            var y = x.props,
                z = y.width,
                A = y.height;
            return !(!(0, m.isNumber)(z) || z <= 0 || !(0, m.isNumber)(A) || A <= 0);
        },
        x = [
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
        ],
        y = function(z) {
            return z && z.type && a(g)(z.type) && x.indexOf(z.type) >= 0;
        },
        _z = function b(A, B) {
            if (A === B)
                return !0;
            var C = k.Children.count(A);
            if (C !== k.Children.count(B))
                return !1;
            if (0 === C)
                return !0;
            if (1 === C)
                return _A(a(j)(A) ? A[0] : A, a(j)(B) ? B[0] : B);
            for (var D = 0; D < C; D++) {
                var E = A[D],
                    F = B[D];
                if (a(j)(E) || a(j)(F)) {
                    if (!b(E, F))
                        return !1;
                } else if (!_A(E, F))
                    return !1;
            }
            return !0;
        },
        _A = function(B, C) {
            if (a(i)(B) && a(i)(C))
                return !0;
            if (!a(i)(B) && !a(i)(C)) {
                var D = B.props || {},
                    E = D.children,
                    F = o(D, ['children']),
                    G = C.props || {},
                    H = G.children,
                    I = o(G, ['children']);
                return E && H ? (0, n.shallowEqual)(F, I) && _z(E, H) : !E && !H && (0, n.shallowEqual)(F, I);
            }
            return !1;
        },
        _B = function(C, D) {
            var E = [],
                F = {};
            return t(C).forEach(function(G, H) {
                if (y(G))
                    E.push(G);
                else if (G) {
                    var I = _q(G.type),
                        J = D[I] || {},
                        K = J.handler,
                        L = J.once;
                    if (K && (!L || !F[I])) {
                        var M = K(G, I, H);
                        E.push(M), F[I] = !0;
                    }
                }
            }), E;
        },
        _C = function(D) {
            var E = D && D.type;
            return E && p[E] ? p[E] : null;
        },
        _D = function(E, F) {
            return t(F).indexOf(E);
        };
}), d.register('5NNbF', function(e, f) {
    function g(h, i) {
        for (var j in h)
            if ({}.hasOwnProperty.call(h, j) && (!{}.hasOwnProperty.call(i, j) || h[j] !== i[j]))
                return !1;
        for (var k in i)
            if ({}.hasOwnProperty.call(i, k) && !{}.hasOwnProperty.call(h, k))
                return !1;
        return !0;
    }
    b(e.exports, 'shallowEqual', function() {
        return g;
    });
}), d.register('sJtfb', function(e, f) {
    b(e.exports, 'RADIAN', function() {
        return _j;
    }), b(e.exports, 'polarToCartesian', function() {
        return _l;
    }), b(e.exports, 'inRangeOfSector', function() {
        return _y;
    });
    d('lAmnl'), d('cUlop'), d('Yv4x1');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                _i(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }

    function _i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }
    var _j = Math.PI / 180,
        k = function(l) {
            return 180 * l / Math.PI;
        },
        _l = function(m, n, o, p) {
            return {
                x: m + Math.cos(-_j * p) * o,
                y: n + Math.sin(-_j * p) * o
            };
        },
        m = function(n, o) {
            var p, q, r, s, t, u, v = n.x,
                w = n.y,
                x = o.cx,
                _y = o.cy,
                z = (q = {
                    x: x,
                    y: _y
                }, r = (p = {
                    x: v,
                    y: w
                }).x, s = p.y, t = q.x, u = q.y, Math.sqrt(Math.pow(r - t, 2) + Math.pow(s - u, 2)));
            if (z <= 0)
                return {
                    radius: z
                };
            var A = (v - x) / z,
                B = Math.acos(A);
            return w > _y && (B = 2 * Math.PI - B), {
                radius: z,
                angle: k(B),
                angleInRadian: B
            };
        },
        n = function(o, p) {
            var q = p.startAngle,
                r = p.endAngle,
                s = Math.floor(q / 360),
                t = Math.floor(r / 360);
            return o + 360 * Math.min(s, t);
        },
        o = function(p, q) {
            var r = p.x,
                s = p.y,
                t = m({
                    x: r,
                    y: s
                }, q),
                u = t.radius,
                v = t.angle,
                w = q.innerRadius,
                x = q.outerRadius;
            if (u < w || u > x)
                return !1;
            if (0 === u)
                return !0;
            var y, z = function(A) {
                    var B = A.startAngle,
                        C = A.endAngle,
                        D = Math.floor(B / 360),
                        E = Math.floor(C / 360),
                        F = Math.min(D, E);
                    return {
                        startAngle: B - 360 * F,
                        endAngle: C - 360 * F
                    };
                }(q),
                A = z.startAngle,
                B = z.endAngle,
                C = v;
            if (A <= B) {
                for (; C > B;)
                    C -= 360;
                for (; C < A;)
                    C += 360;
                y = C >= A && C <= B;
            } else {
                for (; C > A;)
                    C -= 360;
                for (; C < B;)
                    C += 360;
                y = C >= B && C <= A;
            }
            return y ? h(h({}, q), {}, {
                radius: u,
                angle: n(C, q)
            }) : null;
        };
}), d.register('Yv4x1', function(e, f) {
    b(e.exports, 'getValueByDataKey', function() {
        return _J;
    }), b(e.exports, 'getDomainOfDataByKey', function() {
        return _K;
    }), b(e.exports, 'calculateActiveTickIndex', function() {
        return _L;
    }), b(e.exports, 'getMainColorOfGraphicItem', function() {
        return _M;
    }), b(e.exports, 'getLegendProps', function() {
        return _N;
    }), b(e.exports, 'getBarSizeList', function() {
        return _O;
    }), b(e.exports, 'getBarPosition', function() {
        return _P;
    }), b(e.exports, 'appendOffsetOfLegend', function() {
        return _Q;
    }), b(e.exports, 'parseErrorBarsOfAxis', function() {
        return _S;
    }), b(e.exports, 'getDomainOfItemsWithSameAxis', function() {
        return _T;
    }), b(e.exports, 'isCategoricalAxis', function() {
        return _U;
    }), b(e.exports, 'getCoordinatesOfGrid', function() {
        return _V;
    }), b(e.exports, 'getTicksOfAxis', function() {
        return _W;
    }), b(e.exports, 'combineEventHandlers', function() {
        return _X;
    }), b(e.exports, 'parseScale', function() {
        return _Y;
    }), b(e.exports, 'checkDomainOfScale', function() {
        return _$;
    }), b(e.exports, 'findPositionOfBar', function() {
        return _ab;
    }), b(e.exports, 'truncateByDomain', function() {
        return _bb;
    }), b(e.exports, 'getStackGroupsByAxisId', function() {
        return _eb;
    }), b(e.exports, 'getTicksOfScale', function() {
        return _fb;
    }), b(e.exports, 'getCateCoordinateOfBar', function() {
        return _gb;
    }), b(e.exports, 'getBaseValueOfBar', function() {
        return _hb;
    }), b(e.exports, 'getStackedDataOfItem', function() {
        return _ib;
    }), b(e.exports, 'getDomainOfStackGroups', function() {
        return _jb;
    }), b(e.exports, 'parseSpecifiedDomain', function() {
        return _mb;
    }), b(e.exports, 'getBandSizeOfAxis', function() {
        return _nb;
    }), b(e.exports, 'parseDomainOfCategoryAxis', function() {
        return _ob;
    }), b(e.exports, 'getTooltipItem', function() {
        return _pb;
    });
    var g = d('sYnlz'),
        h = d('0WHNs'),
        i = d('9AJ+T'),
        j = d('v36TS'),
        k = d('P6tY1'),
        l = d('Tvpkn0'),
        m = d('OW8UC'),
        n = d('FYBIj'),
        o = d('0Oczp'),
        p = d('kwUzI'),
        q = d('MsaPk'),
        r = d('lAmnl');
    d('FoCM7');
    var s = d('Hb0AB'),
        t = d('AA3q+'),
        u = d('Q7nNA'),
        v = d('PVS31'),
        w = d('F+pD/'),
        x = d('RKpGZ'),
        y = d('ZcxdS'),
        z = d('0w2ds'),
        A = d('cUlop'),
        B = d('wr7e+'),
        C = d('1aRlp'),
        D = d('3mYHS');

    function E(F) {
        return function(G) {
            if (Array.isArray(G))
                return _F(G);
        }(F) || function(G) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(G))
                return Array.from(G);
        }(F) || function(G, H) {
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
        }(F) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _F(G, H) {
        (null == H || H > G.length) && (H = G.length);
        for (var I = 0, J = new Array(H); I < H; I++)
            J[I] = G[I];
        return J;
    }

    function G(H, I) {
        var J = Object.keys(H);
        if (Object.getOwnPropertySymbols) {
            var K = Object.getOwnPropertySymbols(H);
            I && (K = K.filter(function(L) {
                return Object.getOwnPropertyDescriptor(H, L).enumerable;
            })), J.push.apply(J, K);
        }
        return J;
    }

    function H(I) {
        for (var J = 1; J < arguments.length; J++) {
            var K = null != arguments[J] ? arguments[J] : {};
            J % 2 ? G(Object(K), !0).forEach(function(L) {
                _I(I, L, K[L]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(K)) : G(Object(K)).forEach(function(L) {
                Object.defineProperty(I, L, Object.getOwnPropertyDescriptor(K, L));
            });
        }
        return I;
    }

    function _I(J, K, L) {
        return K in J ? Object.defineProperty(J, K, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : J[K] = L, J;
    }

    function _J(K, L, M) {
        return a(r)(K) || a(r)(L) ? M : (0, A.isNumOrStr)(L) ? a(q)(K, L, M) : a(p)(L) ? L(K) : M;
    }

    function _K(L, M, N, O) {
        var P = a(o)(L, function(Q) {
            return _J(Q, M);
        });
        if ('number' === N) {
            var Q = P.filter(function(R) {
                return (0, A.isNumber)(R) || parseFloat(R);
            });
            return Q.length ? [
                a(n)(Q),
                a(m)(Q)
            ] : [
                1 / 0,
                -1 / 0
            ];
        }
        return (O ? P.filter(function(Q) {
            return !a(r)(Q);
        }) : P).map(function(Q) {
            return (0, A.isNumOrStr)(Q) || Q instanceof Date ? Q : '';
        });
    }
    var _L = function(M) {
            var N, O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                P = arguments.length > 2 ? arguments[2] : void 0,
                Q = arguments.length > 3 ? arguments[3] : void 0,
                R = -1,
                S = null !== (N = null == O ? void 0 : O.length) && void 0 !== N ? N : 0;
            if (S > 1) {
                if (Q && 'angleAxis' === Q.axisType && Math.abs(Math.abs(Q.range[1] - Q.range[0]) - 360) <= 0.000001)
                    for (var T = Q.range, U = 0; U < S; U++) {
                        var V = U > 0 ? P[U - 1].coordinate : P[S - 1].coordinate,
                            W = P[U].coordinate,
                            X = U >= S - 1 ? P[0].coordinate : P[U + 1].coordinate,
                            Y = void 0;
                        if ((0, A.mathSign)(W - V) !== (0, A.mathSign)(X - W)) {
                            var Z = [];
                            if ((0, A.mathSign)(X - W) === (0, A.mathSign)(T[1] - T[0])) {
                                Y = X;
                                var $ = W + T[1] - T[0];
                                Z[0] = Math.min($, ($ + V) / 2), Z[1] = Math.max($, ($ + V) / 2);
                            } else {
                                Y = V;
                                var $ = X + T[1] - T[0];
                                Z[0] = Math.min(W, ($ + W) / 2), Z[1] = Math.max(W, ($ + W) / 2);
                            }
                            var $ = [
                                Math.min(W, (Y + W) / 2),
                                Math.max(W, (Y + W) / 2)
                            ];
                            if (M > $[0] && M <= $[1] || M >= Z[0] && M <= Z[1]) {
                                R = P[U].index;
                                break;
                            }
                        } else {
                            var Z = Math.min(V, X),
                                $ = Math.max(V, X);
                            if (M > (Z + W) / 2 && M <= ($ + W) / 2) {
                                R = P[U].index;
                                break;
                            }
                        }
                    }
                else
                    for (var V = 0; V < S; V++)
                        if (0 === V && M <= (O[V].coordinate + O[V + 1].coordinate) / 2 || V > 0 && V < S - 1 && M > (O[V].coordinate + O[V - 1].coordinate) / 2 && M <= (O[V].coordinate + O[V + 1].coordinate) / 2 || V === S - 1 && M > (O[V].coordinate + O[V - 1].coordinate) / 2) {
                            R = O[V].index;
                            break;
                        }
            } else
                R = 0;
            return R;
        },
        _M = function(N) {
            var O, P = N.type.displayName,
                Q = N.props,
                R = Q.stroke,
                S = Q.fill;
            switch (P) {
                case 'Line':
                    O = R;
                    break;
                case 'Area':
                case 'Radar':
                    O = R && 'none' !== R ? R : S;
                    break;
                default:
                    O = S;
            }
            return O;
        },
        _N = function(O) {
            var P, Q = O.children,
                R = O.formattedGraphicalItems,
                S = O.legendWidth,
                T = O.legendContent,
                U = (0, C.findChildByType)(Q, B.Legend.displayName);
            return U ? (P = U.props && U.props.payload ? U.props && U.props.payload : 'children' === T ? (R || []).reduce(function(V, W) {
                var X = W.item,
                    Y = W.props,
                    Z = Y.sectors || Y.data || [];
                return V.concat(Z.map(function($) {
                    return {
                        type: U.props.iconType || X.props.legendType,
                        value: $.name,
                        color: $.fill,
                        payload: $
                    };
                }));
            }, []) : (R || []).map(function(V) {
                var W = V.item,
                    X = W.props,
                    Y = X.dataKey,
                    Z = X.name,
                    $ = X.legendType;
                return {
                    inactive: X.hide,
                    dataKey: Y,
                    type: U.props.iconType || $ || 'square',
                    color: _M(W),
                    value: Z || Y,
                    payload: W.props
                };
            }), H(H(H({}, U.props), B.Legend.getWithHeight(U, S)), {}, {
                payload: P,
                item: U
            })) : null;
        },
        _O = function(P) {
            var Q = P.barSize,
                R = P.stackGroups,
                S = void 0 === R ? {} : R;
            if (!S)
                return {};
            for (var T = {}, U = Object.keys(S), V = 0, W = U.length; V < W; V++)
                for (var X = S[U[V]].stackGroups, Y = Object.keys(X), Z = 0, $ = Y.length; Z < $; Z++) {
                    var ab = X[Y[Z]],
                        bb = ab.items,
                        cb = ab.cateAxisId,
                        db = bb.filter(function(eb) {
                            return (0, C.getDisplayName)(eb.type).indexOf('Bar') >= 0;
                        });
                    if (db && db.length) {
                        var eb = db[0].props.barSize,
                            fb = db[0].props[cb];
                        T[fb] || (T[fb] = []), T[fb].push({
                            item: db[0],
                            stackList: db.slice(1),
                            barSize: a(r)(eb) ? Q : eb
                        });
                    }
                }
            return T;
        },
        _P = function(Q) {
            var R = Q.barGap,
                S = Q.barCategoryGap,
                T = Q.bandSize,
                U = Q.sizeList,
                V = void 0 === U ? [] : U,
                W = Q.maxBarSize,
                X = V.length;
            if (X < 1)
                return null;
            var Y, Z = (0, A.getPercentValue)(R, T, 0, !0);
            if (V[0].barSize === +V[0].barSize) {
                var $ = !1,
                    ab = T / X,
                    bb = V.reduce(function(cb, db) {
                        return cb + db.barSize || 0;
                    }, 0);
                (bb += (X - 1) * Z) >= T && (bb -= (X - 1) * Z, Z = 0), bb >= T && ab > 0 && ($ = !0, bb = X * (ab *= 0.9));
                var cb = {
                    offset: ((T - bb) / 2 >> 0) - Z,
                    size: 0
                };
                Y = V.reduce(function(db, eb) {
                    var fb = [].concat(E(db), [{
                        item: eb.item,
                        position: {
                            offset: cb.offset + cb.size + Z,
                            size: $ ? ab : eb.barSize
                        }
                    }]);
                    return cb = fb[fb.length - 1].position, eb.stackList && eb.stackList.length && eb.stackList.forEach(function(gb) {
                        fb.push({
                            item: gb,
                            position: cb
                        });
                    }), fb;
                }, []);
            } else {
                var $ = (0, A.getPercentValue)(S, T, 0, !0);
                T - 2 * $ - (X - 1) * Z <= 0 && (Z = 0);
                var ab = (T - 2 * $ - (X - 1) * Z) / X;
                ab > 1 && (ab >>= 0);
                var bb = W === +W ? Math.min(ab, W) : ab;
                Y = V.reduce(function(cb, db, eb) {
                    var fb = [].concat(E(cb), [{
                        item: db.item,
                        position: {
                            offset: $ + (ab + Z) * eb + (ab - bb) / 2,
                            size: bb
                        }
                    }]);
                    return db.stackList && db.stackList.length && db.stackList.forEach(function(gb) {
                        fb.push({
                            item: gb,
                            position: fb[fb.length - 1].position
                        });
                    }), fb;
                }, []);
            }
            return Y;
        },
        _Q = function(R, S, T, U) {
            var V = T.children,
                W = T.width,
                X = T.margin,
                Y = W - (X.left || 0) - (X.right || 0),
                Z = _N({
                    children: V,
                    legendWidth: Y
                }),
                $ = R;
            if (Z) {
                var ab = U || {},
                    bb = Z.align,
                    cb = Z.verticalAlign,
                    db = Z.layout;
                ('vertical' === db || 'horizontal' === db && 'center' === cb) && (0, A.isNumber)(R[bb]) && ($ = H(H({}, R), {}, _I({}, bb, $[bb] + (ab.width || 0)))), ('horizontal' === db || 'vertical' === db && 'center' === bb) && (0, A.isNumber)(R[cb]) && ($ = H(H({}, R), {}, _I({}, cb, $[cb] + (ab.height || 0))));
            }
            return $;
        },
        R = function(S, T, U, V, W) {
            var X = T.props.children,
                Y = (0, C.findAllByType)(X, 'ErrorBar').filter(function(Z) {
                    return function($, ab, bb) {
                        return !!a(r)(ab) || ('horizontal' === $ ? 'yAxis' === ab : 'vertical' === $ || 'x' === bb ? 'xAxis' === ab : 'y' !== bb || 'yAxis' === ab);
                    }(V, W, Z.props.direction);
                });
            if (Y && Y.length) {
                var Z = Y.map(function($) {
                    return $.props.dataKey;
                });
                return S.reduce(function($, ab) {
                    var bb = _J(ab, U, 0),
                        cb = a(l)(bb) ? [
                            a(n)(bb),
                            a(m)(bb)
                        ] : [
                            bb,
                            bb
                        ],
                        db = Z.reduce(function(eb, fb) {
                            var gb = _J(ab, fb, 0),
                                hb = cb[0] - Math.abs(a(l)(gb) ? gb[0] : gb),
                                ib = cb[1] + Math.abs(a(l)(gb) ? gb[1] : gb);
                            return [
                                Math.min(hb, eb[0]),
                                Math.max(ib, eb[1])
                            ];
                        }, [
                            1 / 0,
                            -1 / 0
                        ]);
                    return [
                        Math.min(db[0], $[0]),
                        Math.max(db[1], $[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            }
            return null;
        },
        _S = function(T, U, V, W, X) {
            var Y = U.map(function(Z) {
                return R(T, Z, V, X, W);
            }).filter(function(Z) {
                return !a(r)(Z);
            });
            return Y && Y.length ? Y.reduce(function(Z, $) {
                return [
                    Math.min(Z[0], $[0]),
                    Math.max(Z[1], $[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]) : null;
        },
        _T = function(U, V, W, X, Y) {
            var Z = V.map(function($) {
                var ab = $.props.dataKey;
                return 'number' === W && ab && R(U, $, ab, X) || _K(U, ab, W, Y);
            });
            if ('number' === W)
                return Z.reduce(function($, ab) {
                    return [
                        Math.min($[0], ab[0]),
                        Math.max($[1], ab[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            var $ = {};
            return Z.reduce(function(ab, bb) {
                for (var cb = 0, db = bb.length; cb < db; cb++)
                    $[bb[cb]] || ($[bb[cb]] = !0, ab.push(bb[cb]));
                return ab;
            }, []);
        },
        _U = function(V, W) {
            return 'horizontal' === V && 'xAxis' === W || 'vertical' === V && 'yAxis' === W || 'centric' === V && 'angleAxis' === W || 'radial' === V && 'radiusAxis' === W;
        },
        _V = function(W, X, Y) {
            var Z, $, ab = W.map(function(bb) {
                return bb.coordinate === X && (Z = !0), bb.coordinate === Y && ($ = !0), bb.coordinate;
            });
            return Z || ab.push(X), $ || ab.push(Y), ab;
        },
        _W = function(X, Y, Z) {
            if (!X)
                return null;
            var $ = X.scale,
                ab = X.duplicateDomain,
                bb = X.type,
                cb = X.range,
                db = 'scaleBand' === X.realScaleType ? $.bandwidth() / 2 : 2,
                eb = (Y || Z) && 'category' === bb && $.bandwidth ? $.bandwidth() / db : 0;
            return eb = 'angleAxis' === X.axisType ? 2 * (0, A.mathSign)(cb[0] - cb[1]) * eb : eb, Y && (X.ticks || X.niceTicks) ? (X.ticks || X.niceTicks).map(function(fb) {
                var gb = ab ? ab.indexOf(fb) : fb;
                return {
                    coordinate: $(gb) + eb,
                    value: fb,
                    offset: eb
                };
            }) : X.isCategorical && X.categoricalDomain ? X.categoricalDomain.map(function(fb, gb) {
                return {
                    coordinate: $(fb) + eb,
                    value: fb,
                    index: gb,
                    offset: eb
                };
            }) : $.ticks && !Z ? $.ticks(X.tickCount).map(function(fb) {
                return {
                    coordinate: $(fb) + eb,
                    value: fb,
                    offset: eb
                };
            }) : $.domain().map(function(fb, gb) {
                return {
                    coordinate: $(fb) + eb,
                    value: ab ? ab[fb] : fb,
                    index: gb,
                    offset: eb
                };
            });
        },
        _X = function(Y, Z, $) {
            var ab;
            return a(p)($) ? ab = $ : a(p)(Z) && (ab = Z), a(p)(Y) || ab ? function(bb, cb, db, eb) {
                a(p)(Y) && Y(bb, cb, db, eb), a(p)(ab) && ab(bb, cb, db, eb);
            } : null;
        },
        _Y = function(Z, $, ab) {
            var bb = Z.scale,
                cb = Z.type,
                db = Z.layout,
                eb = Z.axisType;
            if ('auto' === bb)
                return 'radial' === db && 'radiusAxis' === eb ? {
                    scale: t.scaleBand(),
                    realScaleType: 'band'
                } : 'radial' === db && 'angleAxis' === eb ? {
                    scale: t.scaleLinear(),
                    realScaleType: 'linear'
                } : 'category' === cb && $ && ($.indexOf('LineChart') >= 0 || $.indexOf('AreaChart') >= 0 || $.indexOf('ComposedChart') >= 0 && !ab) ? {
                    scale: t.scalePoint(),
                    realScaleType: 'point'
                } : 'category' === cb ? {
                    scale: t.scaleBand(),
                    realScaleType: 'band'
                } : {
                    scale: t.scaleLinear(),
                    realScaleType: 'linear'
                };
            if (a(k)(bb)) {
                var fb = 'scale'.concat(a(j)(bb));
                return {
                    scale: (t[fb] || t.scalePoint)(),
                    realScaleType: t[fb] ? fb : 'point'
                };
            }
            return a(p)(bb) ? {
                scale: bb
            } : {
                scale: t.scalePoint(),
                realScaleType: 'point'
            };
        },
        Z = 0.0001,
        _$ = function(ab) {
            var bb = ab.domain();
            if (bb && !(bb.length <= 2)) {
                var cb = bb.length,
                    db = ab.range(),
                    eb = Math.min(db[0], db[1]) - Z,
                    fb = Math.max(db[0], db[1]) + Z,
                    gb = ab(bb[0]),
                    hb = ab(bb[cb - 1]);
                (gb < eb || gb > fb || hb < eb || hb > fb) && ab.domain([
                    bb[0],
                    bb[cb - 1]
                ]);
            }
        },
        _ab = function(bb, cb) {
            if (!bb)
                return null;
            for (var db = 0, eb = bb.length; db < eb; db++)
                if (bb[db].item === cb)
                    return bb[db].position;
            return null;
        },
        _bb = function(cb, db) {
            if (!db || 2 !== db.length || !(0, A.isNumber)(db[0]) || !(0, A.isNumber)(db[1]))
                return cb;
            var eb = Math.min(db[0], db[1]),
                fb = Math.max(db[0], db[1]),
                gb = [
                    cb[0],
                    cb[1]
                ];
            return (!(0, A.isNumber)(cb[0]) || cb[0] < eb) && (gb[0] = eb), (!(0, A.isNumber)(cb[1]) || cb[1] > fb) && (gb[1] = fb), gb[0] > fb && (gb[0] = fb), gb[1] < eb && (gb[1] = eb), gb;
        },
        cb = {
            sign: function(db) {
                var eb = db.length;
                if (!(eb <= 0))
                    for (var fb = 0, gb = db[0].length; fb < gb; ++fb)
                        for (var hb = 0, ib = 0, jb = 0; jb < eb; ++jb) {
                            var kb = a(i)(db[jb][fb][1]) ? db[jb][fb][0] : db[jb][fb][1];
                            kb >= 0 ? (db[jb][fb][0] = hb, db[jb][fb][1] = hb + kb, hb = db[jb][fb][1]) : (db[jb][fb][0] = ib, db[jb][fb][1] = ib + kb, ib = db[jb][fb][1]);
                        }
            },
            expand: v.default,
            none: w.default,
            silhouette: x.default,
            wiggle: y.default,
            positive: function(db) {
                var eb = db.length;
                if (!(eb <= 0))
                    for (var fb = 0, gb = db[0].length; fb < gb; ++fb)
                        for (var hb = 0, ib = 0; ib < eb; ++ib) {
                            var jb = a(i)(db[ib][fb][1]) ? db[ib][fb][0] : db[ib][fb][1];
                            jb >= 0 ? (db[ib][fb][0] = hb, db[ib][fb][1] = hb + jb, hb = db[ib][fb][1]) : (db[ib][fb][0] = 0, db[ib][fb][1] = 0);
                        }
            }
        },
        db = function(eb, fb, gb) {
            var hb = fb.map(function(ib) {
                return ib.props.dataKey;
            });
            return (0, u.default)().keys(hb).value(function(ib, jb) {
                return +_J(ib, jb, 0);
            }).order(z.default).offset(cb[gb])(eb);
        },
        _eb = function(fb, gb, hb, ib, jb, kb) {
            if (!fb)
                return null;
            var lb = (kb ? gb.reverse() : gb).reduce(function(mb, nb) {
                var ob = nb.props,
                    pb = ob.stackId;
                if (ob.hide)
                    return mb;
                var qb = nb.props[hb],
                    rb = mb[qb] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if ((0, A.isNumOrStr)(pb)) {
                    var sb = rb.stackGroups[pb] || {
                        numericAxisId: hb,
                        cateAxisId: ib,
                        items: []
                    };
                    sb.items.push(nb), rb.hasStack = !0, rb.stackGroups[pb] = sb;
                } else
                    rb.stackGroups[(0, A.uniqueId)('_stackId_')] = {
                        numericAxisId: hb,
                        cateAxisId: ib,
                        items: [nb]
                    };
                return H(H({}, mb), {}, _I({}, qb, rb));
            }, {});
            return Object.keys(lb).reduce(function(mb, nb) {
                var ob = lb[nb];
                return ob.hasStack && (ob.stackGroups = Object.keys(ob.stackGroups).reduce(function(pb, qb) {
                    var rb = ob.stackGroups[qb];
                    return H(H({}, pb), {}, _I({}, qb, {
                        numericAxisId: hb,
                        cateAxisId: ib,
                        items: rb.items,
                        stackedData: db(fb, rb.items, jb)
                    }));
                }, {})), H(H({}, mb), {}, _I({}, nb, ob));
            }, {});
        },
        _fb = function(gb, hb) {
            var ib = hb.realScaleType,
                jb = hb.type,
                kb = hb.tickCount,
                lb = hb.originalDomain,
                mb = hb.allowDecimals,
                nb = ib || hb.scale;
            if ('auto' !== nb && 'linear' !== nb)
                return null;
            if (kb && 'number' === jb && lb && ('auto' === lb[0] || 'auto' === lb[1])) {
                var ob = gb.domain();
                if (!ob.length)
                    return null;
                var pb = (0, s.getNiceTickValues)(ob, kb, mb);
                return gb.domain(function(qb, rb) {
                    return 'number' === rb ? [
                        a(n)(qb),
                        a(m)(qb)
                    ] : qb;
                }(pb, jb)), {
                    niceTicks: pb
                };
            }
            if (kb && 'number' === jb) {
                var ob = gb.domain();
                return {
                    niceTicks: (0, s.getTickValuesFixedDomain)(ob, kb, mb)
                };
            }
            return null;
        },
        _gb = function(hb) {
            var ib = hb.axis,
                jb = hb.ticks,
                kb = hb.offset,
                lb = hb.bandSize,
                mb = hb.entry,
                nb = hb.index;
            if ('category' === ib.type)
                return jb[nb] ? jb[nb].coordinate + kb : null;
            var ob = _J(mb, ib.dataKey, ib.domain[nb]);
            return a(r)(ob) ? null : ib.scale(ob) - lb / 2 + kb;
        },
        _hb = function(ib) {
            var jb = ib.numericAxis,
                kb = jb.scale.domain();
            if ('number' === jb.type) {
                var lb = Math.min(kb[0], kb[1]),
                    mb = Math.max(kb[0], kb[1]);
                return lb <= 0 && mb >= 0 ? 0 : mb < 0 ? mb : lb;
            }
            return kb[0];
        },
        _ib = function(jb, kb) {
            var lb = jb.props.stackId;
            if ((0, A.isNumOrStr)(lb)) {
                var mb = kb[lb];
                if (mb && mb.items.length) {
                    for (var nb = -1, ob = 0, pb = mb.items.length; ob < pb; ob++)
                        if (mb.items[ob] === jb) {
                            nb = ob;
                            break;
                        }
                    return nb >= 0 ? mb.stackedData[nb] : null;
                }
            }
            return null;
        },
        _jb = function(kb, lb, mb) {
            return Object.keys(kb).reduce(function(nb, ob) {
                var pb = kb[ob].stackedData.reduce(function(qb, rb) {
                    var sb = rb.slice(lb, mb + 1).reduce(function(tb, ub) {
                        return [
                            a(n)(ub.concat([tb[0]]).filter(A.isNumber)),
                            a(m)(ub.concat([tb[1]]).filter(A.isNumber))
                        ];
                    }, [
                        1 / 0,
                        -1 / 0
                    ]);
                    return [
                        Math.min(qb[0], sb[0]),
                        Math.max(qb[1], sb[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
                return [
                    Math.min(pb[0], nb[0]),
                    Math.max(pb[1], nb[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]).map(function(nb) {
                return nb === 1 / 0 || nb === -1 / 0 ? 0 : nb;
            });
        },
        kb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        lb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        _mb = function(nb, ob, pb) {
            if (a(p)(nb))
                return nb(ob, pb);
            if (!a(l)(nb))
                return ob;
            var qb = [];
            if ((0, A.isNumber)(nb[0]))
                qb[0] = pb ? nb[0] : Math.min(nb[0], ob[0]);
            else if (kb.test(nb[0])) {
                var rb = +kb.exec(nb[0])[1];
                qb[0] = ob[0] - rb;
            } else
                a(p)(nb[0]) ? qb[0] = nb[0](ob[0]) : qb[0] = ob[0];
            if ((0, A.isNumber)(nb[1]))
                qb[1] = pb ? nb[1] : Math.max(nb[1], ob[1]);
            else if (lb.test(nb[1])) {
                var rb = +lb.exec(nb[1])[1];
                qb[1] = ob[1] + rb;
            } else
                a(p)(nb[1]) ? qb[1] = nb[1](ob[1]) : qb[1] = ob[1];
            return qb;
        },
        _nb = function(ob, pb, qb) {
            if (ob && ob.scale && ob.scale.bandwidth) {
                var rb = ob.scale.bandwidth();
                if (!qb || rb > 0)
                    return rb;
            }
            if (ob && pb && pb.length >= 2) {
                for (var rb = a(h)(pb, function(sb) {
                        return sb.coordinate;
                    }), sb = 1 / 0, tb = 1, ub = rb.length; tb < ub; tb++) {
                    var vb = rb[tb],
                        wb = rb[tb - 1];
                    sb = Math.min((vb.coordinate || 0) - (wb.coordinate || 0), sb);
                }
                return sb === 1 / 0 ? 0 : sb;
            }
            return qb ? void 0 : 0;
        },
        _ob = function(pb, qb, rb) {
            return pb && pb.length ? a(g)(pb, a(q)(rb, 'type.defaultProps.domain')) ? qb : pb : qb;
        },
        _pb = function(qb, rb) {
            var sb = qb.props,
                tb = sb.dataKey,
                ub = sb.name,
                vb = sb.unit,
                wb = sb.formatter,
                xb = sb.tooltipType,
                yb = sb.chartType;
            return H(H({}, (0, D.filterProps)(qb)), {}, {
                dataKey: tb,
                unit: vb,
                formatter: wb,
                name: ub || tb,
                color: _M(qb),
                value: _J(rb, tb),
                type: xb,
                payload: rb,
                chartType: yb
            });
        };
}), d.register('0WHNs', function(e, f) {
    var g = d('m1/E6'),
        h = d('84JOE'),
        i = d('+x49Y'),
        j = d('A3i5x'),
        k = i(function(l, m) {
            if (null == l)
                return [];
            var n = m.length;
            return n > 1 && j(l, m[0], m[1]) ? m = [] : n > 2 && j(m[0], m[1], m[2]) && (m = [m[0]]), h(l, g(m, 1), []);
        });
    e.exports = k;
}), d.register('m1/E6', function(e, f) {
    var g = d('ePhvw0'),
        h = d('XVmoZ');
    e.exports = function e(i, j, k, l, m) {
        var n = -1,
            o = i.length;
        for (k || (k = h), m || (m = []); ++n < o;) {
            var p = i[n];
            j > 0 && k(p) ? j > 1 ? e(p, j - 1, k, l, m) : g(m, p) : l || (m[m.length] = p);
        }
        return m;
    };
}), d.register('XVmoZ', function(e, f) {
    var g = d('U/yTG'),
        h = d('geAd7'),
        i = d('Tvpkn0'),
        j = g ? g.isConcatSpreadable : void 0;
    e.exports = function(k) {
        return i(k) || h(k) || !!(j && k && k[j]);
    };
}), d.register('84JOE', function(e, f) {
    var g = d('6W4FR0'),
        h = d('G6hlX'),
        i = d('JIf8c'),
        j = d('Fe2A+'),
        k = d('7Nykn'),
        l = d('7TFiT0'),
        m = d('GNBfe'),
        n = d('xcuDs'),
        o = d('Tvpkn0');
    e.exports = function(p, q, r) {
        q = q.length ? g(q, function(s) {
            return o(s) ? function(t) {
                return h(t, 1 === s.length ? s[0] : s);
            } : s;
        }) : [n];
        var s = -1;
        q = g(q, l(i));
        var t = j(p, function(u, v, w) {
            return {
                criteria: g(q, function(x) {
                    return x(u);
                }),
                index: ++s,
                value: u
            };
        });
        return k(t, function(u, v) {
            return m(u, v, r);
        });
    };
}), d.register('JIf8c', function(e, f) {
    var g = d('DhRkQ'),
        h = d('1qtsd'),
        i = d('xcuDs'),
        j = d('Tvpkn0'),
        k = d('U2LyM');
    e.exports = function(l) {
        return 'function' == typeof l ? l : null == l ? i : 'object' == typeof l ? j(l) ? h(l[0], l[1]) : g(l) : k(l);
    };
}), d.register('DhRkQ', function(e, f) {
    var g = d('3Pa8/'),
        h = d('8oiC2'),
        i = d('Nud/E');
    e.exports = function(j) {
        var k = h(j);
        return 1 == k.length && k[0][2] ? i(k[0][0], k[0][1]) : function(l) {
            return l === j || g(l, j, k);
        };
    };
}), d.register('3Pa8/', function(e, f) {
    var g = d('9yY2G'),
        h = d('aMUlS');
    e.exports = function(i, j, k, l) {
        var m = k.length,
            n = m,
            o = !l;
        if (null == i)
            return !n;
        for (i = Object(i); m--;) {
            var p = k[m];
            if (o && p[2] ? p[1] !== i[p[0]] : !(p[0] in i))
                return !1;
        }
        for (; ++m < n;) {
            var p = (_m = k[m])[0],
                q = i[p],
                r = _m[1];
            if (o && _m[2]) {
                if (void 0 === q && !(p in i))
                    return !1;
            } else {
                var s = new g();
                if (l)
                    var t = l(q, r, p, i, j, s);
                if (!(void 0 === _p ? h(r, q, 3, l, s) : _p))
                    return !1;
            }
        }
        return !0;
    };
}), d.register('8oiC2', function(e, f) {
    var g = d('6RVR4'),
        h = d('0uRNP');
    e.exports = function(i) {
        for (var j = h(i), k = j.length; k--;) {
            var l = j[k],
                m = i[l];
            j[k] = [
                l,
                m,
                g(m)
            ];
        }
        return j;
    };
}), d.register('6RVR4', function(e, f) {
    var g = d('4+6+/0');
    e.exports = function(h) {
        return h == h && !g(h);
    };
}), d.register('Nud/E', function(e, f) {
    e.exports = function(g, h) {
        return function(i) {
            return null != i && (i[g] === h && (void 0 !== h || g in Object(i)));
        };
    };
}), d.register('1qtsd', function(e, f) {
    var g = d('aMUlS'),
        h = d('MsaPk'),
        i = d('T700F'),
        j = d('gwc2L'),
        k = d('6RVR4'),
        l = d('Nud/E'),
        _m = d('Dafyg');
    e.exports = function(n, o) {
        return j(n) && k(o) ? l(_m(n), o) : function(p) {
            var q = h(p, n);
            return void 0 === q && q === o ? i(p, n) : g(o, q, 3);
        };
    };
}), d.register('T700F', function(e, f) {
    var g = d('/gH84'),
        h = d('0jZZS');
    e.exports = function(i, j) {
        return null != i && h(i, j, g);
    };
}), d.register('/gH84', function(e, f) {
    e.exports = function(g, h) {
        return null != g && h in Object(g);
    };
}), d.register('0jZZS', function(e, f) {
    var g = d('+AsgS'),
        h = d('geAd7'),
        i = d('Tvpkn0'),
        j = d('U62iU0'),
        k = d('thjov0'),
        l = d('Dafyg');
    e.exports = function(m, n, o) {
        for (var p = -1, q = (n = g(n, m)).length, r = !1; ++p < q;) {
            var s = l(n[p]);
            if (!(r = null != m && o(m, s)))
                break;
            m = m[s];
        }
        return r || ++p != q ? r : !!(q = null == m ? 0 : m.length) && k(q) && j(_q, q) && (i(m) || h(m));
    };
}), d.register('xcuDs', function(e, f) {
    e.exports = function(g) {
        return g;
    };
}), d.register('U2LyM', function(e, f) {
    var g = d('UB26y'),
        h = d('jM+Nk'),
        i = d('gwc2L'),
        j = d('Dafyg');
    e.exports = function(k) {
        return i(k) ? g(j(k)) : h(k);
    };
}), d.register('UB26y', function(e, f) {
    e.exports = function(g) {
        return function(h) {
            return null == h ? void 0 : h[g];
        };
    };
}), d.register('jM+Nk', function(e, f) {
    var g = d('G6hlX');
    e.exports = function(h) {
        return function(i) {
            return g(i, h);
        };
    };
}), d.register('Fe2A+', function(e, f) {
    var g = d('8ukQ1'),
        h = d('wC2Rn');
    e.exports = function(i, j) {
        var k = -1,
            l = h(i) ? Array(i.length) : [];
        return g(i, function(m, n, o) {
            l[++k] = j(m, n, o);
        }), l;
    };
}), d.register('8ukQ1', function(e, f) {
    var g = d('e6KST'),
        h = d('U5rCn')(g);
    e.exports = h;
}), d.register('e6KST', function(e, f) {
    var g = d('atysm'),
        h = d('0uRNP');
    e.exports = function(i, j) {
        return i && g(i, j, h);
    };
}), d.register('atysm', function(e, f) {
    var g = d('D5x2X')();
    e.exports = g;
}), d.register('D5x2X', function(e, f) {
    e.exports = function(g) {
        return function(h, i, j) {
            for (var k = -1, l = Object(h), m = j(h), n = m.length; n--;) {
                var o = m[g ? n : ++k];
                if (!1 === i(l[o], o, l))
                    break;
            }
            return h;
        };
    };
}), d.register('U5rCn', function(e, f) {
    var g = d('wC2Rn');
    e.exports = function(h, i) {
        return function(j, k) {
            if (null == j)
                return j;
            if (!g(j))
                return h(j, k);
            for (var l = j.length, m = i ? l : -1, n = Object(j);
                (i ? m-- : ++m < l) && !1 !== k(n[m], m, n););
            return j;
        };
    };
}), d.register('7Nykn', function(e, f) {
    e.exports = function(g, h) {
        var i = g.length;
        for (g.sort(h); i--;)
            g[i] = g[i].value;
        return g;
    };
}), d.register('GNBfe', function(e, f) {
    var g = d('tHf8i');
    e.exports = function(h, i, j) {
        for (var k = -1, l = h.criteria, m = i.criteria, n = l.length, o = j.length; ++k < n;) {
            var p = g(l[k], m[k]);
            if (p)
                return k >= o ? p : p * ('desc' == j[k] ? -1 : 1);
        }
        return h.index - i.index;
    };
}), d.register('tHf8i', function(e, f) {
    var g = d('mJ9/X');
    e.exports = function(h, i) {
        if (h !== i) {
            var j = void 0 !== h,
                k = null === h,
                l = h == h,
                m = g(h),
                n = void 0 !== i,
                o = null === i,
                p = i == i,
                q = g(i);
            if (!o && !q && !m && h > i || m && n && p && !o && !q || k && n && p || !j && p || !l)
                return 1;
            if (!k && !m && !q && h < i || q && j && l && !k && !m || o && j && l || !n && l || !p)
                return -1;
        }
        return 0;
    };
}), d.register('+x49Y', function(e, f) {
    var g = d('xcuDs'),
        h = d('Xi2Nl'),
        i = d('A6tt1');
    e.exports = function(j, k) {
        return i(h(j, k, g), j + '');
    };
}), d.register('Xi2Nl', function(e, f) {
    var g = d('Lonpj'),
        h = Math.max;
    e.exports = function(i, j, k) {
        return j = h(void 0 === j ? i.length - 1 : j, 0),
            function() {
                for (var l = arguments, m = -1, n = h(l.length - j, 0), o = Array(n); ++m < n;)
                    o[m] = l[j + m];
                m = -1;
                for (var p = Array(j + 1); ++m < j;)
                    p[m] = l[m];
                return p[j] = k(o), g(i, this, p);
            };
    };
}), d.register('Lonpj', function(e, f) {
    e.exports = function(g, h, i) {
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
}), d.register('A6tt1', function(e, f) {
    var g = d('bGF7n'),
        h = d('3lOr2')(g);
    e.exports = h;
}), d.register('bGF7n', function(e, f) {
    var g = d('FM6aN'),
        h = d('fWZn8'),
        i = d('xcuDs'),
        j = h ? function(k, l) {
            return h(k, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: g(l),
                writable: !0
            });
        } : i;
    e.exports = j;
}), d.register('FM6aN', function(e, f) {
    e.exports = function(g) {
        return function() {
            return g;
        };
    };
}), d.register('fWZn8', function(e, f) {
    var g = d('L5+6P'),
        h = function() {
            try {
                var i = g(Object, 'defineProperty');
                return i({}, '', {}), i;
            } catch (e) {}
        }();
    e.exports = h;
}), d.register('3lOr2', function(e, f) {
    var g = Date.now;
    e.exports = function(h) {
        var i = 0,
            j = 0;
        return function() {
            var k = g(),
                l = 16 - (k - j);
            if (j = k, l > 0) {
                if (++i >= 800)
                    return arguments[0];
            } else
                i = 0;
            return h.apply(void 0, arguments);
        };
    };
}), d.register('A3i5x', function(e, f) {
    var g = d('E0PFn0'),
        h = d('wC2Rn'),
        i = d('U62iU0'),
        j = d('4+6+/0');
    e.exports = function(k, l, m) {
        if (!j(m))
            return !1;
        var n = typeof l;
        return !!('number' == n ? h(m) && i(l, m.length) : 'string' == n && l in m) && g(m[l], k);
    };
}), d.register('v36TS', function(e, f) {
    var g = d('78Ezw')('toUpperCase');
    e.exports = g;
}), d.register('78Ezw', function(e, f) {
    var g = d('kwX6h'),
        h = d('SqzUh'),
        i = d('0R9KZ'),
        j = d('ujU+T');
    e.exports = function(k) {
        return function(l) {
            l = j(l);
            var m = h(l) ? i(l) : void 0,
                n = m ? m[0] : l.charAt(0),
                o = m ? g(m, 1).join('') : l.slice(1);
            return n[k]() + o;
        };
    };
}), d.register('kwX6h', function(e, f) {
    var g = d('DZKj4');
    e.exports = function(h, i, j) {
        var k = h.length;
        return j = void 0 === j ? k : j, !i && j >= k ? h : g(h, i, j);
    };
}), d.register('DZKj4', function(e, f) {
    e.exports = function(g, h, i) {
        var j = -1,
            k = g.length;
        h < 0 && (h = -h > k ? 0 : k + h), (i = i > k ? k : i) < 0 && (i += k), k = h > i ? 0 : i - h >>> 0, h >>>= 0;
        for (var l = Array(k); ++j < k;)
            l[j] = g[j + h];
        return l;
    };
}), d.register('SqzUh', function(e, f) {
    var g = RegExp('[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
    e.exports = function(h) {
        return g.test(h);
    };
}), d.register('0R9KZ', function(e, f) {
    var g = d('JGacO'),
        h = d('SqzUh'),
        i = d('cr/RH');
    e.exports = function(j) {
        return h(j) ? i(j) : g(j);
    };
}), d.register('JGacO', function(e, f) {
    e.exports = function(g) {
        return g.split('');
    };
}), d.register('cr/RH', function(e, f) {
    var g = '[\uD800-\uDFFF]',
        h = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        i = '\uD83C[\uDFFB-\uDFFF]',
        j = '[^\uD800-\uDFFF]',
        k = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
        l = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
        m = '(?:' + h + '|' + i + ')' + '?',
        n = '[\\ufe0e\\ufe0f]?',
        o = n + m + ('(?:\\u200d(?:' + [
            j,
            k,
            l
        ].join('|') + ')' + n + m + ')*'),
        p = '(?:' + [
            j + h + '?',
            h,
            k,
            l,
            g
        ].join('|') + ')',
        _q = RegExp(i + '(?=' + i + ')|' + p + o, 'g');
    e.exports = function(r) {
        return r.match(_q) || [];
    };
}), d.register('OW8UC', function(e, f) {
    var g = d('t0d+r'),
        h = d('yK3Bf'),
        i = d('xcuDs');
    e.exports = function(j) {
        return j && j.length ? g(j, i, h) : void 0;
    };
}), d.register('t0d+r', function(e, f) {
    var g = d('mJ9/X');
    e.exports = function(h, i, j) {
        for (var k = -1, l = h.length; ++k < l;) {
            var m = h[k],
                n = i(m);
            if (null != n && (void 0 === _o ? n == n && !g(n) : j(n, _o)))
                var _o = n,
                    p = m;
        }
        return _k;
    };
}), d.register('yK3Bf', function(e, f) {
    e.exports = function(g, h) {
        return g > h;
    };
}), d.register('FYBIj', function(e, f) {
    var g = d('t0d+r'),
        h = d('K3E2Y'),
        i = d('xcuDs');
    e.exports = function(j) {
        return j && j.length ? g(j, i, h) : void 0;
    };
}), d.register('K3E2Y', function(e, f) {
    e.exports = function(g, h) {
        return g < h;
    };
}), d.register('0Oczp', function(e, f) {
    var g = d('m1/E6'),
        h = d('DIqgX');
    e.exports = function(i, j) {
        return g(h(i, j), 1);
    };
}), d.register('DIqgX', function(e, f) {
    var g = d('6W4FR0'),
        h = d('JIf8c'),
        i = d('Fe2A+'),
        j = d('Tvpkn0');
    e.exports = function(k, l) {
        return (j(k) ? g : i)(k, h(l, 3));
    };
}), d.register('FoCM7', function(e, f) {
    b(e.exports, 'getNiceTickValues', function() {
        return d('Hb0AB').getNiceTickValues;
    }), b(e.exports, 'getTickValuesFixedDomain', function() {
        return d('Hb0AB').getTickValuesFixedDomain;
    });
    d('Hb0AB');
}), d.register('Hb0AB', function(e, f) {
    b(e.exports, 'getNiceTickValues', function() {
        return _r;
    }), b(e.exports, 'getTickValuesFixedDomain', function() {
        return _A;
    });
    var g = d('qVCz5'),
        h = d('fitOO'),
        i = d('TbPH/');

    function j(k) {
        return function(l) {
            if (Array.isArray(l))
                return _m(l);
        }(k) || function(l) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(l))
                return Array.from(l);
        }(k) || _l(k) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _k(l, m) {
        return function(n) {
            if (Array.isArray(n))
                return n;
        }(l) || function(n, o) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(n)))
                return;
            var p = [],
                q = !0,
                r = !1,
                s = void 0;
            try {
                for (var t, u = n[Symbol.iterator](); !(q = (t = u.next()).done) && (p.push(t.value), !o || p.length !== o); q = !0);
            } catch (n) {
                r = !0, s = n;
            } finally {
                try {
                    q || null == i.return || i.return();
                } finally {
                    if (r)
                        throw s;
                }
            }
            return p;
        }(l, m) || _l(l, m) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _l(m, n) {
        if (m) {
            if ('string' == typeof m)
                return _m(m, n);
            var o = Object.prototype.toString.call(m).slice(8, -1);
            return 'Object' === o && m.constructor && (o = m.constructor.name), 'Map' === o || 'Set' === o ? Array.from(m) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _m(m, n) : void 0;
        }
    }

    function _m(n, o) {
        (null == o || o > n.length) && (o = n.length);
        for (var p = 0, q = new Array(o); p < o; p++)
            q[p] = n[p];
        return q;
    }

    function n(o) {
        var p = _k(o, 2),
            q = p[0],
            r = p[1],
            s = q,
            t = r;
        return q > r && (s = r, t = q), [
            s,
            t
        ];
    }

    function o(p, q, r) {
        if (p.lte(0))
            return new(a(g))(0);
        var s = i.default.getDigitCount(p.toNumber()),
            t = new(a(g))(10).pow(s),
            u = p.div(t),
            v = 1 !== s ? 0.05 : 0.1,
            w = new(a(g))(Math.ceil(u.div(v).toNumber())).add(r).mul(v).mul(t);
        return q ? w : new(a(g))(Math.ceil(w));
    }

    function _p(q, r, s) {
        var t = 1,
            u = new(a(g))(q);
        if (!u.isint() && s) {
            var v = Math.abs(q);
            v < 1 ? (t = new(a(g))(10).pow(i.default.getDigitCount(q) - 1), u = new(a(g))(Math.floor(u.div(t).toNumber())).mul(t)) : v > 1 && (u = new(a(g))(Math.floor(q)));
        } else
            0 === q ? u = new(a(g))(Math.floor((r - 1) / 2)) : s || (u = new(a(g))(Math.floor(q)));
        var v = Math.floor((r - 1) / 2);
        return (0, h.compose)((0, h.map)(function(w) {
            return u.add(new(a(g))(w - v).mul(t)).toNumber();
        }), h.range)(0, r);
    }

    function q(r, s, t, u) {
        var v = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((s - r) / (t - 1)))
            return {
                step: new(a(g))(0),
                tickMin: new(a(g))(0),
                tickMax: new(a(g))(0)
            };
        var w, x = o(new(a(g))(s).sub(r).div(t - 1), u, v);
        w = r <= 0 && s >= 0 ? new(a(g))(0) : (w = new(a(g))(r).add(s).div(2)).sub(new(a(g))(w).mod(x));
        var y = Math.ceil(w.sub(r).div(x).toNumber()),
            z = Math.ceil(new(a(g))(s).sub(w).div(x).toNumber()),
            A = y + z + 1;
        return A > t ? q(r, s, t, u, v + 1) : (A < t && (z = s > 0 ? z + (t - A) : z, y = s > 0 ? y : y + (t - A)), {
            step: x,
            tickMin: w.sub(new(a(g))(y).mul(x)),
            tickMax: w.add(new(a(g))(z).mul(x))
        });
    }
    var _r = (0, h.memoize)(function(s) {
            var t = _k(s, 2),
                u = t[0],
                v = t[1],
                w = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                x = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                y = Math.max(w, 2),
                z = n([
                    u,
                    v
                ]),
                _A = _k(z, 2),
                B = _A[0],
                C = _A[1];
            if (B === -1 / 0 || C === 1 / 0) {
                var D = C === 1 / 0 ? [B].concat(j((0, h.range)(0, w - 1).map(function() {
                    return 1 / 0;
                }))) : [].concat(j((0, h.range)(0, w - 1).map(function() {
                    return -1 / 0;
                })), [C]);
                return u > v ? (0, h.reverse)(D) : D;
            }
            if (B === C)
                return _p(B, w, x);
            var D = q(B, C, y, x),
                E = D.step,
                F = D.tickMin,
                G = D.tickMax,
                H = i.default.rangeStep(F, G.add(new(a(g))(0.1).mul(E)), E);
            return u > v ? (0, h.reverse)(H) : H;
        }),
        s = ((0, h.memoize)(function(t) {
            var u = _k(t, 2),
                v = u[0],
                w = u[1],
                x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                y = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                z = Math.max(x, 2),
                A = n([
                    v,
                    w
                ]),
                B = _k(A, 2),
                C = B[0],
                D = B[1];
            if (C === -1 / 0 || D === 1 / 0)
                return [
                    v,
                    w
                ];
            if (C === D)
                return _p(C, x, y);
            var E = o(new(a(g))(D).sub(C).div(z - 1), y, 0),
                F = (0, h.compose)((0, h.map)(function(G) {
                    return new(a(g))(C).add(new(a(g))(G).mul(E)).toNumber();
                }), h.range),
                G = F(0, z).filter(function(H) {
                    return H >= C && H <= D;
                });
            return v > w ? (0, h.reverse)(G) : G;
        }), (0, h.memoize)(function(t, u) {
            var v = _k(t, 2),
                w = v[0],
                x = v[1],
                y = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                z = n([
                    w,
                    x
                ]),
                A = _k(z, 2),
                B = A[0],
                C = A[1];
            if (B === -1 / 0 || C === 1 / 0)
                return [
                    w,
                    x
                ];
            if (B === C)
                return [B];
            var D = Math.max(u, 2),
                E = o(new(a(g))(C).sub(B).div(D - 1), y, 0),
                F = [].concat(j(i.default.rangeStep(new(a(g))(B), new(a(g))(C).sub(new(a(g))(0.99).mul(E)), E)), [C]);
            return w > x ? (0, h.reverse)(F) : F;
        }));
}), d.register('qVCz5', function(e, f) {
    ! function(g) {
        var h, i = 1000000000,
            j = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
            },
            k = !0,
            l = '[DecimalError] ',
            m = l + 'Invalid argument: ',
            n = l + 'Exponent out of range: ',
            o = Math.floor,
            p = Math.pow,
            q = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            r = 10000000,
            s = 9007199254740991,
            t = o(1286742750677284.5),
            u = {};

        function v(w, x) {
            var y, z, A, B, C, D, E, F, G = w.constructor,
                H = G.precision;
            if (!w.s || !x.s)
                return x.s || (x = new G(w)), k ? _F(x, H) : x;
            if (E = w.d, F = x.d, C = w.e, A = x.e, E = E.slice(), B = C - A) {
                for (B < 0 ? (z = E, B = -B, D = F.length) : (z = F, A = C, D = E.length), B > (D = (C = Math.ceil(H / 7)) > D ? C + 1 : D + 1) && (B = D, z.length = 1), z.reverse(); B--;)
                    z.push(0);
                z.reverse();
            }
            for ((D = E.length) - (B = F.length) < 0 && (B = D, z = F, F = E, E = z), y = 0; B;)
                y = (E[--B] = E[B] + F[B] + y) / r | 0, E[B] %= r;
            for (y && (E.unshift(y), ++A), D = E.length; 0 == E[--D];)
                E.pop();
            return x.d = E, x.e = A, k ? _F(x, H) : x;
        }

        function w(x, y, z) {
            if (x !== ~~x || x < y || x > z)
                throw Error(m + x);
        }

        function x(y) {
            var z, A, B, C = y.length - 1,
                D = '',
                E = y[0];
            if (C > 0) {
                for (D += E, z = 1; z < C; z++)
                    (A = 7 - (B = y[z] + '').length) && (D += _T(A)), D += B;
                (A = 7 - (B = (E = y[z]) + '').length) && (D += _T(A));
            } else if (0 === E)
                return '0';
            for (; E % 10 == 0;)
                E /= 10;
            return D + E;
        }
        u.absoluteValue = u.abs = function() {
            var y = new this.constructor(this);
            return y.s && (y.s = 1), y;
        }, u.comparedTo = u.cmp = function(y) {
            var z, A, B, C, D = this;
            if (y = new D.constructor(y), D.s !== y.s)
                return D.s || -y.s;
            if (D.e !== y.e)
                return D.e > y.e ^ D.s < 0 ? 1 : -1;
            for (z = 0, A = (B = D.d.length) < (C = y.d.length) ? B : C; z < A; ++z)
                if (D.d[z] !== y.d[z])
                    return D.d[z] > y.d[z] ^ D.s < 0 ? 1 : -1;
            return B === C ? 0 : B > C ^ D.s < 0 ? 1 : -1;
        }, u.decimalPlaces = u.dp = function() {
            var y = this,
                z = y.d.length - 1,
                A = 7 * (z - y.e);
            if (z = y.d[z])
                for (; z % 10 == 0; z /= 10)
                    A--;
            return A < 0 ? 0 : A;
        }, u.dividedBy = u.div = function(y) {
            return _y(this, new this.constructor(y));
        }, u.dividedToIntegerBy = u.idiv = function(y) {
            var z = this.constructor;
            return _F(_y(this, new z(y), 0, 1), z.precision);
        }, u.equals = u.eq = function(y) {
            return !this.cmp(y);
        }, u.exponent = function() {
            return _A(this);
        }, u.greaterThan = u.gt = function(y) {
            return this.cmp(y) > 0;
        }, u.greaterThanOrEqualTo = u.gte = function(y) {
            return this.cmp(y) >= 0;
        }, u.isInteger = u.isint = function() {
            return this.e > this.d.length - 2;
        }, u.isNegative = u.isneg = function() {
            return this.s < 0;
        }, u.isPositive = u.ispos = function() {
            return this.s > 0;
        }, u.isZero = function() {
            return 0 === this.s;
        }, u.lessThan = u.lt = function(y) {
            return this.cmp(y) < 0;
        }, u.lessThanOrEqualTo = u.lte = function(y) {
            return this.cmp(y) < 1;
        }, u.logarithm = u.log = function(y) {
            var z, A = this,
                B = A.constructor,
                C = B.precision,
                D = C + 5;
            if (void 0 === y)
                y = new B(10);
            else if ((y = new B(y)).s < 1 || y.eq(h))
                throw Error(l + 'NaN');
            if (A.s < 1)
                throw Error(l + (A.s ? 'NaN' : '-Infinity'));
            return A.eq(h) ? new B(0) : (k = !1, z = _y(_U(A, D), _U(y, D), D), k = !0, _F(z, C));
        }, u.minus = u.sub = function(y) {
            var z = this;
            return y = new z.constructor(y), z.s == y.s ? _W(z, y) : v(z, (y.s = -y.s, y));
        }, u.modulo = u.mod = function(y) {
            var z, A = this,
                B = A.constructor,
                C = B.precision;
            if (!(y = new B(y)).s)
                throw Error(l + 'NaN');
            return A.s ? (k = !1, z = _y(A, y, 0, 1).times(y), k = !0, A.minus(z)) : _F(new B(A), C);
        }, u.naturalExponential = u.exp = function() {
            return _R(this);
        }, u.naturalLogarithm = u.ln = function() {
            return _U(this);
        }, u.negated = u.neg = function() {
            var y = new this.constructor(this);
            return y.s = -y.s || 0, y;
        }, u.plus = u.add = function(y) {
            var z = this;
            return y = new z.constructor(y), z.s == y.s ? v(z, y) : _W(z, (y.s = -y.s, y));
        }, u.precision = u.sd = function(y) {
            var z, A, B, C = this;
            if (void 0 !== y && y !== !!y && 1 !== y && 0 !== y)
                throw Error(m + y);
            if (z = _A(C) + 1, A = 7 * (B = C.d.length - 1) + 1, B = C.d[B]) {
                for (; B % 10 == 0; B /= 10)
                    A--;
                for (B = C.d[0]; B >= 10; B /= 10)
                    A++;
            }
            return y && z > A ? z : A;
        }, u.squareRoot = u.sqrt = function() {
            var y, z, A, B, C, D, E, F = this,
                G = F.constructor;
            if (F.s < 1) {
                if (!F.s)
                    return new G(0);
                throw Error(l + 'NaN');
            }
            for (y = _A(F), k = !1, 0 == (C = Math.sqrt(+F)) || C == 1 / 0 ? (((z = x(F.d)).length + y) % 2 == 0 && (z += '0'), C = Math.sqrt(z), y = o((y + 1) / 2) - (y < 0 || y % 2), B = new G(z = C == 1 / 0 ? '5e' + y : (z = C.toExponential()).slice(0, z.indexOf('e') + 1) + y)) : B = new G(C.toString()), C = E = (A = G.precision) + 3;;)
                if (B = (D = B).plus(_y(F, D, E + 2)).times(0.5), x(D.d).slice(0, E) === (z = x(B.d)).slice(0, E)) {
                    if (z = z.slice(E - 3, E + 1), C == E && '4999' == z) {
                        if (_F(D, A + 1, 0), D.times(D).eq(F)) {
                            B = D;
                            break;
                        }
                    } else if ('9999' != z)
                        break;
                    E += 4;
                }
            return k = !0, _F(B, A);
        }, u.times = u.mul = function(y) {
            var z, A, B, C, D, E, F, G, H, I = this,
                J = I.constructor,
                K = I.d,
                L = (y = new J(y)).d;
            if (!I.s || !y.s)
                return new J(0);
            for (y.s *= I.s, A = I.e + y.e, (G = K.length) < (H = L.length) && (D = K, K = L, L = D, E = G, G = H, H = E), D = [], B = E = G + H; B--;)
                D.push(0);
            for (B = H; --B >= 0;) {
                for (z = 0, C = G + B; C > B;)
                    F = D[C] + L[B] * K[C - B - 1] + z, D[C--] = F % r | 0, z = F / r | 0;
                D[C] = (D[C] + z) % r | 0;
            }
            for (; !D[--E];)
                D.pop();
            return z ? ++A : D.shift(), y.d = D, y.e = A, k ? _F(y, J.precision) : y;
        }, u.toDecimalPlaces = u.todp = function(y, z) {
            var A = this,
                B = A.constructor;
            return A = new B(A), void 0 === y ? A : (w(y, 0, i), void 0 === z ? z = B.rounding : w(z, 0, 8), _F(A, y + _A(A) + 1, z));
        }, u.toExponential = function(y, z) {
            var A, B = this,
                C = B.constructor;
            return void 0 === y ? A = _X(B, !0) : (w(y, 0, i), void 0 === z ? z = C.rounding : w(z, 0, 8), A = _X(B = _F(new C(B), y + 1, z), !0, y + 1)), A;
        }, u.toFixed = function(y, z) {
            var A, B, C = this,
                D = C.constructor;
            return void 0 === y ? _X(C) : (w(y, 0, i), void 0 === z ? z = D.rounding : w(z, 0, 8), A = _X((B = _F(new D(C), y + _A(C) + 1, z)).abs(), !1, y + _A(B) + 1), C.isneg() && !C.isZero() ? '-' + A : A);
        }, u.toInteger = u.toint = function() {
            var y = this,
                z = y.constructor;
            return _F(new z(y), _A(y) + 1, z.rounding);
        }, u.toNumber = function() {
            return +this;
        }, u.toPower = u.pow = function(y) {
            var z, A, B, C, D, E, F = this,
                G = F.constructor,
                H = +(y = new G(y));
            if (!y.s)
                return new G(h);
            if (!(F = new G(F)).s) {
                if (y.s < 1)
                    throw Error(l + 'Infinity');
                return F;
            }
            if (F.eq(h))
                return F;
            if (B = G.precision, y.eq(h))
                return _F(F, B);
            if (E = (z = y.e) >= (A = y.d.length - 1), D = F.s, E) {
                if ((A = H < 0 ? -H : H) <= s) {
                    for (C = new G(h), z = Math.ceil(B / 7 + 4), k = !1; A % 2 && _Y((C = C.times(F)).d, z), 0 !== (A = o(A / 2));)
                        _Y((F = F.times(F)).d, z);
                    return k = !0, y.s < 0 ? new G(h).div(C) : _F(C, B);
                }
            } else if (D < 0)
                throw Error(l + 'NaN');
            return D = D < 0 && 1 & y.d[Math.max(z, A)] ? -1 : 1, F.s = 1, k = !1, C = y.times(_U(F, B + 12)), k = !0, (C = _R(C)).s = D, C;
        }, u.toPrecision = function(y, z) {
            var A, B, C = this,
                D = C.constructor;
            return void 0 === y ? B = _X(C, (A = _A(C)) <= D.toExpNeg || A >= D.toExpPos) : (w(y, 1, i), void 0 === z ? z = D.rounding : w(z, 0, 8), B = _X(C = _F(new D(C), y, z), y <= (A = _A(C)) || A <= D.toExpNeg, y)), B;
        }, u.toSignificantDigits = u.tosd = function(y, z) {
            var A = this.constructor;
            return void 0 === y ? (y = A.precision, z = A.rounding) : (w(y, 1, i), void 0 === z ? z = A.rounding : w(z, 0, 8)), _F(new A(this), y, z);
        }, u.toString = u.valueOf = u.val = u.toJSON = function() {
            var y = this,
                z = _A(y),
                A = y.constructor;
            return _X(y, z <= A.toExpNeg || z >= A.toExpPos);
        };
        var _y = function() {
            function z(A, B) {
                var C, D = 0,
                    E = A.length;
                for (A = A.slice(); E--;)
                    C = A[E] * B + D, A[E] = C % r | 0, D = C / r | 0;
                return D && A.unshift(D), A;
            }

            function A(B, C, D, E) {
                var F, G;
                if (D != E)
                    G = D > E ? 1 : -1;
                else
                    for (F = G = 0; F < D; F++)
                        if (B[F] != C[F]) {
                            G = B[F] > C[F] ? 1 : -1;
                            break;
                        }
                return G;
            }

            function B(C, D, E) {
                for (var F = 0; E--;)
                    C[E] -= F, F = C[E] < D[E] ? 1 : 0, C[E] = F * r + C[E] - D[E];
                for (; !C[0] && C.length > 1;)
                    C.shift();
            }
            return function(C, D, E, F) {
                var G, H, I, J, K, L, M, N, O, P, Q, _R, S, _T, _U, V, _W, _X, _Y = C.constructor,
                    Z = C.s == D.s ? 1 : -1,
                    $ = C.d,
                    ab = D.d;
                if (!C.s)
                    return new _Y(C);
                if (!D.s)
                    throw Error(l + 'Division by zero');
                for (H = C.e - D.e, _W = ab.length, _U = $.length, N = (M = new _Y(Z)).d = [], I = 0; ab[I] == ($[I] || 0);)
                    ++I;
                if (ab[I] > ($[I] || 0) && --H, (_R = null == E ? E = _Y.precision : F ? E + (_A(C) - _A(D)) + 1 : E) < 0)
                    return new _Y(0);
                if (_R = _R / 7 + 2 | 0, I = 0, 1 == _W)
                    for (J = 0, ab = ab[0], _R++;
                        (I < _U || J) && _R--; I++)
                        S = J * r + ($[I] || 0), N[I] = S / ab | 0, J = S % ab | 0;
                else {
                    for ((J = r / (ab[0] + 1) | 0) > 1 && (ab = z(ab, J), $ = z($, J), _W = ab.length, _U = $.length), _T = _W, P = (O = $.slice(0, _W)).length; P < _W;)
                        O[P++] = 0;
                    (_X = ab.slice()).unshift(0), V = ab[0], ab[1] >= r / 2 && ++V;
                    do {
                        J = 0, (G = A(ab, O, _W, P)) < 0 ? (Q = O[0], _W != P && (Q = Q * r + (O[1] || 0)), (J = Q / V | 0) > 1 ? (J >= r && (J = r - 1), 1 == (G = A(K = z(ab, J), O, L = K.length, P = O.length)) && (J--, B(K, _W < L ? _X : ab, L))) : (0 == J && (G = J = 1), K = ab.slice()), (L = K.length) < P && K.unshift(0), B(O, K, P), -1 == G && (G = A(ab, O, _W, P = O.length)) < 1 && (J++, B(O, _W < P ? _X : ab, P)), P = O.length) : 0 === G && (J++, O = [0]), N[I++] = J, G && O[0] ? O[P++] = $[_T] || 0 : (O = [$[_T]], P = 1);
                    } while ((_T++ < _U || void 0 !== O[0]) && _R--);
                }
                return N[0] || N.shift(), M.e = H, _F(M, F ? E + _A(M) + 1 : E);
            };
        }();

        function z(A, B) {
            var C, D, E, F, G, H = 0,
                I = 0,
                J = A.constructor,
                K = J.precision;
            if (_A(A) > 16)
                throw Error(n + _A(A));
            if (!A.s)
                return new J(h);
            for (null == B ? (k = !1, G = K) : G = B, F = new J(0.03125); A.abs().gte(0.1);)
                A = A.times(F), I += 5;
            for (G += Math.log(p(2, I)) / Math.LN10 * 2 + 5 | 0, C = D = E = new J(h), J.precision = G;;) {
                if (D = _F(D.times(A), G), C = C.times(++H), x((F = E.plus(_y(D, C, G))).d).slice(0, G) === x(E.d).slice(0, G)) {
                    for (; I--;)
                        E = _F(E.times(E), G);
                    return J.precision = K, null == B ? (k = !0, _F(E, K)) : E;
                }
                E = F;
            }
        }

        function _A(B) {
            for (var C = 7 * B.e, D = B.d[0]; D >= 10; D /= 10)
                C++;
            return C;
        }

        function B(C, D, E) {
            if (D > C.LN10.sd())
                throw k = !0, E && (C.precision = E), Error(l + 'LN10 precision limit exceeded');
            return _F(new C(C.LN10), D);
        }

        function C(D) {
            for (var E = ''; D--;)
                E += '0';
            return E;
        }

        function D(E, F) {
            var G, H, I, J, K, L, M, N, O, P = 1,
                Q = E,
                R = Q.d,
                S = Q.constructor,
                T = S.precision;
            if (Q.s < 1)
                throw Error(l + (Q.s ? 'NaN' : '-Infinity'));
            if (Q.eq(h))
                return new S(0);
            if (null == F ? (k = !1, N = T) : N = F, Q.eq(10))
                return null == F && (k = !0), B(S, N);
            if (N += 10, S.precision = N, H = (G = x(R)).charAt(0), J = _A(Q), !(Math.abs(J) < 1500000000000000))
                return M = B(S, N + 2, T).times(J + ''), Q = D(new S(H + '.' + G.slice(1)), N - 10).plus(M), S.precision = T, null == F ? (k = !0, _F(Q, T)) : Q;
            for (; H < 7 && 1 != H || 1 == H && G.charAt(1) > 3;)
                H = (G = x((Q = Q.times(E)).d)).charAt(0), P++;
            for (J = _A(Q), H > 1 ? (Q = new S('0.' + G), J++) : Q = new S(H + '.' + G.slice(1)), L = K = Q = _y(Q.minus(h), Q.plus(h), N), O = _F(Q.times(Q), N), I = 3;;) {
                if (K = _F(K.times(O), N), x((M = L.plus(_y(K, new S(I), N))).d).slice(0, N) === x(L.d).slice(0, N))
                    return L = L.times(2), 0 !== J && (L = L.plus(B(S, N + 2, T).times(J + ''))), L = _y(L, new S(P), N), S.precision = T, null == F ? (k = !0, _F(L, T)) : L;
                L = M, I += 2;
            }
        }

        function E(F, G) {
            var H, I, J;
            for ((H = G.indexOf('.')) > -1 && (G = G.replace('.', '')), (I = G.search(/e/i)) > 0 ? (H < 0 && (H = I), H += +G.slice(I + 1), G = G.substring(0, I)) : H < 0 && (H = G.length), I = 0; 48 === G.charCodeAt(I);)
                ++I;
            for (J = G.length; 48 === G.charCodeAt(J - 1);)
                --J;
            if (G = G.slice(I, J)) {
                if (J -= I, H = H - I - 1, F.e = o(H / 7), F.d = [], I = (H + 1) % 7, H < 0 && (I += 7), I < J) {
                    for (I && F.d.push(+G.slice(0, I)), J -= 7; I < J;)
                        F.d.push(+G.slice(I, I += 7));
                    I = 7 - (G = G.slice(I)).length;
                } else
                    I -= J;
                for (; I--;)
                    G += '0';
                if (F.d.push(+G), k && (F.e > t || F.e < -t))
                    throw Error(n + H);
            } else
                F.s = 0, F.e = 0, F.d = [0];
            return F;
        }

        function _F(G, H, I) {
            var J, K, L, M, N, O, P, Q, R = G.d;
            for (M = 1, L = R[0]; L >= 10; L /= 10)
                M++;
            if ((J = H - M) < 0)
                J += 7, K = H, P = R[Q = 0];
            else {
                if ((Q = Math.ceil((J + 1) / 7)) >= (L = R.length))
                    return G;
                for (P = L = R[Q], M = 1; L >= 10; L /= 10)
                    M++;
                K = (J %= 7) - 7 + M;
            }
            if (void 0 !== I && (N = P / (L = p(10, M - K - 1)) % 10 | 0, O = H < 0 || void 0 !== R[Q + 1] || P % L, O = I < 4 ? (N || O) && (0 == I || I == (G.s < 0 ? 3 : 2)) : N > 5 || 5 == N && (4 == I || O || 6 == I && (J > 0 ? K > 0 ? P / p(10, M - K) : 0 : R[Q - 1]) % 10 & 1 || I == (G.s < 0 ? 8 : 7))), H < 1 || !R[0])
                return O ? (L = _A(G), R.length = 1, H = H - L - 1, R[0] = p(10, (7 - H % 7) % 7), G.e = o(-H / 7) || 0) : (R.length = 1, R[0] = G.e = G.s = 0), G;
            if (0 == J ? (R.length = Q, L = 1, Q--) : (R.length = Q + 1, L = p(10, 7 - J), R[Q] = K > 0 ? (P / p(10, M - K) % p(10, K) | 0) * L : 0), O)
                for (;;) {
                    if (0 == Q) {
                        (R[0] += L) == r && (R[0] = 1, ++G.e);
                        break;
                    }
                    if (R[Q] += L, R[Q] != r)
                        break;
                    R[Q--] = 0, L = 1;
                }
            for (J = R.length; 0 === R[--J];)
                R.pop();
            if (k && (G.e > t || G.e < -t))
                throw Error(n + _A(G));
            return G;
        }

        function G(H, I) {
            var J, K, L, M, N, O, P, Q, R, S, T = H.constructor,
                U = T.precision;
            if (!H.s || !I.s)
                return I.s ? I.s = -I.s : I = new T(H), k ? _F(I, U) : I;
            if (P = H.d, S = I.d, K = I.e, Q = H.e, P = P.slice(), N = Q - K) {
                for ((R = N < 0) ? (J = P, N = -N, O = S.length) : (J = S, K = Q, O = P.length), N > (L = Math.max(Math.ceil(U / 7), O) + 2) && (N = L, J.length = 1), J.reverse(), L = N; L--;)
                    J.push(0);
                J.reverse();
            } else {
                for ((R = (L = P.length) < (O = S.length)) && (O = L), L = 0; L < O; L++)
                    if (P[L] != S[L]) {
                        R = P[L] < S[L];
                        break;
                    }
                N = 0;
            }
            for (R && (J = P, P = S, S = J, I.s = -I.s), O = P.length, L = S.length - O; L > 0; --L)
                P[O++] = 0;
            for (L = S.length; L > N;) {
                if (P[--L] < S[L]) {
                    for (M = L; M && 0 === P[--M];)
                        P[M] = r - 1;
                    --P[M], P[L] += r;
                }
                P[L] -= S[L];
            }
            for (; 0 === P[--O];)
                P.pop();
            for (; 0 === P[0]; P.shift())
                --K;
            return P[0] ? (I.d = P, I.e = K, k ? _F(I, U) : I) : new T(0);
        }

        function H(I, J, K) {
            var L, M = _A(I),
                N = x(I.d),
                O = N.length;
            return J ? (K && (L = K - O) > 0 ? N = N.charAt(0) + '.' + N.slice(1) + C(L) : O > 1 && (N = N.charAt(0) + '.' + N.slice(1)), N = N + (M < 0 ? 'e' : 'e+') + M) : M < 0 ? (N = '0.' + C(-M - 1) + N, K && (L = K - O) > 0 && (N += C(L))) : M >= O ? (N += C(M + 1 - O), K && (L = K - M - 1) > 0 && (N = N + '.' + C(L))) : ((L = M + 1) < O && (N = N.slice(0, L) + '.' + N.slice(L)), K && (L = K - O) > 0 && (M + 1 === O && (N += '.'), N += C(L))), I.s < 0 ? '-' + N : N;
        }

        function I(J, K) {
            if (J.length > K)
                return J.length = K, !0;
        }

        function J(K) {
            if (!K || 'object' != typeof K)
                throw Error(l + 'Object expected');
            var L, M, N, O = [
                'precision',
                1,
                i,
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
            for (L = 0; L < O.length; L += 3)
                if (void 0 !== (N = K[M = O[L]])) {
                    if (!(o(N) === N && N >= O[L + 1] && N <= O[L + 2]))
                        throw Error(m + M + ': ' + N);
                    this[M] = N;
                }
            if (void 0 !== (N = K[M = 'LN10'])) {
                if (N != Math.LN10)
                    throw Error(m + M + ': ' + N);
                this[M] = new this(N);
            }
            return this;
        }
        j = function e(K) {
            var L, M, N;

            function O(P) {
                var Q = this;
                if (!(Q instanceof O))
                    return new O(P);
                if (Q.constructor = O, P instanceof O)
                    return Q.s = P.s, Q.e = P.e, void(Q.d = (P = P.d) ? P.slice() : P);
                if ('number' == typeof P) {
                    if (0 * P != 0)
                        throw Error(m + P);
                    if (P > 0)
                        Q.s = 1;
                    else {
                        if (!(P < 0))
                            return Q.s = 0, Q.e = 0, void(Q.d = [0]);
                        P = -P, Q.s = -1;
                    }
                    return P === ~~P && P < 10000000 ? (Q.e = 0, void(Q.d = [P])) : E(Q, P.toString());
                }
                if ('string' != typeof P)
                    throw Error(m + P);
                if (45 === P.charCodeAt(0) ? (P = P.slice(1), Q.s = -1) : Q.s = 1, !q.test(P))
                    throw Error(m + P);
                E(Q, P);
            }
            if (O.prototype = u, O.ROUND_UP = 0, O.ROUND_DOWN = 1, O.ROUND_CEIL = 2, O.ROUND_FLOOR = 3, O.ROUND_HALF_UP = 4, O.ROUND_HALF_DOWN = 5, O.ROUND_HALF_EVEN = 6, O.ROUND_HALF_CEIL = 7, O.ROUND_HALF_FLOOR = 8, O.clone = e, O.config = O.set = J, void 0 === K && (K = {}), K)
                for (N = [
                        'precision',
                        'rounding',
                        'toExpNeg',
                        'toExpPos',
                        'LN10'
                    ], L = 0; L < N.length;)
                    K.hasOwnProperty(M = N[L++]) || (K[M] = this[M]);
            return O.config(K), O;
        }(j), j.default = j.Decimal = j, h = new j(1), 'function' == typeof define && define.amd ? define(function() {
            return j;
        }) : e.exports ? e.exports = j : (g || (g = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), g.Decimal = j);
    }(e.exports);
}), d.register('fitOO', function(e, f) {
    function g(h) {
        return function(i) {
            if (Array.isArray(i))
                return _h(i);
        }(h) || function(i) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(i))
                return Array.from(i);
        }(h) || function(i, j) {
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
        }(h) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _h(i, j) {
        (null == j || j > i.length) && (j = i.length);
        for (var k = 0, l = new Array(j); k < j; k++)
            l[k] = i[k];
        return l;
    }
    b(e.exports, 'curry', function() {
        return _s;
    }), b(e.exports, 'range', function() {
        return _o;
    }), b(e.exports, 'map', function() {
        return _p;
    }), b(e.exports, 'compose', function() {
        return _q;
    }), b(e.exports, 'reverse', function() {
        return _r;
    }), b(e.exports, 'memoize', function() {
        return _s;
    });
    var i = function(j) {
            return j;
        },
        j = {
            '@@functional/placeholder': !0
        },
        k = function(l) {
            return l === j;
        },
        l = function(m) {
            return function b() {
                return 0 === arguments.length || 1 === arguments.length && k(arguments.length <= 0 ? void 0 : arguments[0]) ? b : m.apply(void 0, arguments);
            };
        },
        m = function e(n, o) {
            return 1 === n ? o : l(function() {
                for (var p = arguments.length, q = new Array(p), r = 0; r < p; r++)
                    q[r] = arguments[r];
                var _s = q.filter(function(t) {
                    return t !== j;
                }).length;
                return _s >= n ? o.apply(void 0, q) : e(n - _s, l(function() {
                    for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++)
                        u[v] = arguments[v];
                    var w = q.map(function(x) {
                        return k(x) ? u.shift() : x;
                    });
                    return o.apply(void 0, g(w).concat(u));
                }));
            });
        },
        n = function(o) {
            return m(o.length, o);
        },
        _o = function(p, q) {
            for (var r = [], s = p; s < q; ++s)
                r[s - p] = s;
            return r;
        },
        _p = n(function(q, r) {
            return Array.isArray(r) ? r.map(q) : Object.keys(r).map(function(s) {
                return r[s];
            }).map(q);
        }),
        _q = function() {
            for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = arguments[t];
            if (!s.length)
                return i;
            var u = s.reverse(),
                v = u[0],
                w = u.slice(1);
            return function() {
                return w.reduce(function(x, y) {
                    return y(x);
                }, v.apply(void 0, arguments));
            };
        },
        _r = function(s) {
            return Array.isArray(s) ? s.reverse() : s.split('').reverse.join('');
        },
        _s = function(t) {
            var u = null,
                v = null;
            return function() {
                for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                    x[y] = arguments[y];
                return u && x.every(function(z, A) {
                    return z === u[A];
                }) ? v : (u = x, v = t.apply(void 0, x));
            };
        };
}), d.register('TbPH/', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('qVCz5'),
        h = d('fitOO');
    var _i = {
        rangeStep: function(j, k, l) {
            for (var m = new(a(g))(j), n = 0, o = []; m.lt(k) && n < 100000;)
                o.push(m.toNumber()), m = m.add(l), n++;
            return o;
        },
        getDigitCount: function(j) {
            return 0 === j ? 1 : Math.floor(new(a(g))(j).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: (0, h.curry)(function(j, k, l) {
            var m = +j;
            return m + l * (+k - m);
        }),
        uninterpolateNumber: (0, h.curry)(function(j, k, l) {
            var m = k - +j;
            return (l - j) / (m = m || 1 / 0);
        }),
        uninterpolateTruncation: (0, h.curry)(function(j, k, l) {
            var m = k - +j;
            return m = m || 1 / 0, Math.max(0, Math.min(1, (l - j) / m));
        })
    };
}), d.register('AA3q+', function(e, f) {
    b(e.exports, 'scaleBand', function() {
        return d('sGImq').default;
    }), b(e.exports, 'scalePoint', function() {
        return d('sGImq').point;
    }), b(e.exports, 'scaleIdentity', function() {
        return d('IGEUl').default;
    }), b(e.exports, 'scaleLinear', function() {
        return d('smHnl').default;
    }), b(e.exports, 'scaleLog', function() {
        return d('wwKA7').default;
    }), b(e.exports, 'scaleSymlog', function() {
        return d('NLDjj').default;
    }), b(e.exports, 'scaleOrdinal', function() {
        return d('fkNYI').default;
    }), b(e.exports, 'scaleImplicit', function() {
        return d('fkNYI').implicit;
    }), b(e.exports, 'scalePow', function() {
        return d('neWRJ').default;
    }), b(e.exports, 'scaleSqrt', function() {
        return d('neWRJ').sqrt;
    }), b(e.exports, 'scaleRadial', function() {
        return d('UUgAQ').default;
    }), b(e.exports, 'scaleQuantile', function() {
        return d('st7pk').default;
    }), b(e.exports, 'scaleQuantize', function() {
        return d('8AblR').default;
    }), b(e.exports, 'scaleThreshold', function() {
        return d('NA2g7').default;
    }), b(e.exports, 'scaleTime', function() {
        return d('2dEqb').default;
    }), b(e.exports, 'scaleUtc', function() {
        return d('xW688').default;
    }), b(e.exports, 'scaleSequential', function() {
        return d('NrRHW').default;
    }), b(e.exports, 'scaleSequentialLog', function() {
        return d('NrRHW').sequentialLog;
    }), b(e.exports, 'scaleSequentialPow', function() {
        return d('NrRHW').sequentialPow;
    }), b(e.exports, 'scaleSequentialSqrt', function() {
        return d('NrRHW').sequentialSqrt;
    }), b(e.exports, 'scaleSequentialSymlog', function() {
        return d('NrRHW').sequentialSymlog;
    }), b(e.exports, 'scaleSequentialQuantile', function() {
        return d('7RvAo').default;
    }), b(e.exports, 'scaleDiverging', function() {
        return d('GhhS5').default;
    }), b(e.exports, 'scaleDivergingLog', function() {
        return d('GhhS5').divergingLog;
    }), b(e.exports, 'scaleDivergingPow', function() {
        return d('GhhS5').divergingPow;
    }), b(e.exports, 'scaleDivergingSqrt', function() {
        return d('GhhS5').divergingSqrt;
    }), b(e.exports, 'scaleDivergingSymlog', function() {
        return d('GhhS5').divergingSymlog;
    }), b(e.exports, 'tickFormat', function() {
        return d('ObPyn').default;
    });
    d('sGImq'), d('IGEUl'), d('smHnl'), d('wwKA7'), d('NLDjj'), d('fkNYI'), d('neWRJ'), d('UUgAQ'), d('st7pk'), d('8AblR'), d('NA2g7'), d('2dEqb'), d('xW688'), d('NrRHW'), d('7RvAo'), d('GhhS5'), d('ObPyn');
}), d.register('sGImq', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    }), b(e.exports, 'point', function() {
        return _p;
    });
    var g = d('ambpK'),
        h = d('7bben'),
        i = d('fkNYI');

    function _j() {
        var k, l, m = (0, i.default)().unknown(void 0),
            n = m.domain,
            o = m.range,
            _p = 0,
            q = 1,
            r = !1,
            s = 0,
            t = 0,
            u = 0.5;

        function v() {
            var w = n().length,
                x = q < _p,
                y = x ? q : _p,
                z = x ? _p : q;
            k = (z - y) / Math.max(1, w - s + 2 * t), r && (k = Math.floor(k)), y += (z - y - k * (w - s)) * u, l = k * (1 - s), r && (y = Math.round(y), l = Math.round(l));
            var A = (0, g.default)(w).map(function(B) {
                return y + k * B;
            });
            return o(x ? A.reverse() : A);
        }
        return delete m.unknown, m.domain = function(w) {
            return arguments.length ? (n(w), v()) : n();
        }, m.range = function(w) {
            return arguments.length ? ([x, y] = w, x = +x, y = +y, v()) : [
                x,
                y
            ];
        }, m.rangeRound = function(w) {
            return [x, y] = w, x = +x, y = +y, r = !0, v();
        }, m.bandwidth = function() {
            return l;
        }, m.step = function() {
            return k;
        }, m.round = function(w) {
            return arguments.length ? (r = !!w, v()) : r;
        }, m.padding = function(w) {
            return arguments.length ? (s = Math.min(1, t = +w), v()) : s;
        }, m.paddingInner = function(w) {
            return arguments.length ? (s = Math.min(1, w), v()) : s;
        }, m.paddingOuter = function(w) {
            return arguments.length ? (t = +w, v()) : t;
        }, m.align = function(w) {
            return arguments.length ? (u = Math.max(0, Math.min(1, w)), v()) : u;
        }, m.copy = function() {
            return _j(n(), [
                _p,
                q
            ]).round(r).paddingInner(s).paddingOuter(t).align(u);
        }, h.initRange.apply(v(), arguments);
    }

    function k(l) {
        var m = l.copy;
        return l.padding = l.paddingOuter, delete l.paddingInner, delete l.paddingOuter, l.copy = function() {
            return k(m());
        }, l;
    }

    function l() {
        return k(_j.apply(null, arguments).paddingInner(1));
    }
}), d.register('ambpK', function(e, f) {
    function g(h, i, j) {
        h = +h, i = +i, j = (_l = arguments.length) < 2 ? (i = h, h = 0, 1) : _l < 3 ? 1 : +j;
        for (var k = -1, _l = 0 | Math.max(0, Math.ceil((i - h) / j)), m = new Array(_l); ++k < _l;)
            m[k] = h + k * j;
        return m;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('7bben', function(e, f) {
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
    b(e.exports, 'initRange', function() {
        return g;
    }), b(e.exports, 'initInterpolator', function() {
        return h;
    });
}), d.register('fkNYI', function(e, f) {
    b(e.exports, 'implicit', function() {
        return _h;
    }), b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('7bben');
    const _h = Symbol('implicit');

    function _i() {
        var j = new Map(),
            k = [],
            l = [],
            m = _h;

        function n(o) {
            var p = o + '',
                q = j.get(p);
            if (!q) {
                if (m !== _h)
                    return m;
                j.set(p, q = k.push(o));
            }
            return l[(q - 1) % l.length];
        }
        return n.domain = function(o) {
            if (!arguments.length)
                return k.slice();
            k = [], j = new Map();
            for (const p of o) {
                const q = p + '';
                j.has(q) || j.set(q, k.push(p));
            }
            return n;
        }, n.range = function(o) {
            return arguments.length ? (l = Array.from(o), n) : l.slice();
        }, n.unknown = function(o) {
            return arguments.length ? (m = o, n) : m;
        }, n.copy = function() {
            return _i(k, l).unknown(m);
        }, g.initRange.apply(n, arguments), n;
    }
}), d.register('IGEUl', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('smHnl'),
        h = d('flE2d');

    function _i(j) {
        var k;

        function l(m) {
            return null == m || isNaN(m = +m) ? k : m;
        }
        return l.invert = l, l.domain = l.range = function(m) {
            return arguments.length ? (j = Array.from(m, h.default), l) : j.slice();
        }, l.unknown = function(m) {
            return arguments.length ? (k = m, l) : k;
        }, l.copy = function() {
            return _i(j).unknown(k);
        }, j = arguments.length ? Array.from(j, h.default) : [
            0,
            1
        ], (0, g.linearish)(l);
    }
}), d.register('smHnl', function(e, f) {
    b(e.exports, 'linearish', function() {
        return _k;
    }), b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('3phdV'),
        h = d('wdLSO'),
        i = d('7bben'),
        j = d('ObPyn');

    function _k(l) {
        var m = l.domain;
        return l.ticks = function(n) {
            var o = m();
            return (0, g.default)(o[0], o[o.length - 1], null == n ? 10 : n);
        }, l.tickFormat = function(n, o) {
            var p = m();
            return (0, j.default)(p[0], p[p.length - 1], null == n ? 10 : n, o);
        }, l.nice = function(n) {
            null == n && (n = 10);
            var o, p, q = m(),
                r = 0,
                s = q.length - 1,
                _t = q[r],
                u = q[s],
                v = 10;
            for (u < _t && (p = _t, _t = u, u = p, p = r, r = s, s = p); v-- > 0;) {
                if ((p = (0, g.tickIncrement)(_t, u, n)) === o)
                    return q[r] = _t, q[s] = u, m(q);
                if (p > 0)
                    _t = Math.floor(_t / p) * p, u = Math.ceil(u / p) * p;
                else {
                    if (!(p < 0))
                        break;
                    _t = Math.ceil(_t * p) / p, u = Math.floor(u * p) / p;
                }
                o = p;
            }
            return l;
        }, l;
    }

    function l() {
        var m = (0, h.default)();
        return m.copy = function() {
            return (0, h.copy)(m, l());
        }, i.initRange.apply(m, arguments), _k(m);
    }
}), d.register('3phdV', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    }), b(e.exports, 'tickIncrement', function() {
        return _k;
    }), b(e.exports, 'tickStep', function() {
        return _r;
    });
    var g = Math.sqrt(50),
        h = Math.sqrt(10),
        i = Math.sqrt(2);

    function _j(k, l, m) {
        var n, o, p, q, _r = -1;
        if (m = +m, (k = +k) === (l = +l) && m > 0)
            return [k];
        if ((n = l < k) && (o = k, k = l, l = o), 0 === (q = _k(k, l, m)) || !isFinite(q))
            return [];
        if (q > 0) {
            let s = Math.round(k / q),
                t = Math.round(l / q);
            for (s * q < k && ++s, t * q > l && --t, p = new Array(o = t - s + 1); ++_r < o;)
                p[_r] = (s + _r) * q;
        } else {
            q = -q;
            let s = Math.round(k * q),
                t = Math.round(l * q);
            for (s / q < k && ++s, t / q > l && --t, p = new Array(o = t - s + 1); ++_r < o;)
                p[_r] = (s + _r) / q;
        }
        return n && p.reverse(), p;
    }

    function _k(l, m, n) {
        var o = (m - l) / Math.max(0, n),
            p = Math.floor(Math.log(o) / Math.LN10),
            q = o / Math.pow(10, p);
        return p >= 0 ? (q >= g ? 10 : q >= h ? 5 : q >= i ? 2 : 1) * Math.pow(10, p) : -Math.pow(10, -p) / (q >= g ? 10 : q >= h ? 5 : q >= i ? 2 : 1);
    }

    function l(m, n, o) {
        var p = Math.abs(n - m) / Math.max(0, o),
            q = Math.pow(10, Math.floor(Math.log(p) / Math.LN10)),
            r = p / q;
        return r >= g ? q *= 10 : r >= h ? q *= 5 : r >= i && (q *= 2), n < m ? -q : q;
    }
}), d.register('wdLSO', function(e, f) {
    b(e.exports, 'identity', function() {
        return _n;
    }), b(e.exports, 'copy', function() {
        return _r;
    }), b(e.exports, 'transformer', function() {
        return _s;
    }), b(e.exports, 'default', function() {
        return _C;
    });
    var g = d('zF3sh'),
        h = d('4+u8a'),
        i = d('c4NiA'),
        j = d('23eaA'),
        k = d('n7Dwj0'),
        l = d('flE2d'),
        m = [
            0,
            1
        ];

    function _n(o) {
        return o;
    }

    function o(p, q) {
        return (q -= p = +p) ? function(r) {
            return (r - p) / q;
        } : (0, k.default)(isNaN(q) ? NaN : 0.5);
    }

    function p(q, r, s) {
        var t = q[0],
            u = q[1],
            v = r[0],
            w = r[1];
        return u < t ? (t = o(u, t), v = s(w, v)) : (t = o(t, u), v = s(v, w)),
            function(x) {
                return v(t(x));
            };
    }

    function q(r, s, t) {
        var u = Math.min(r.length, s.length) - 1,
            v = new Array(u),
            w = new Array(u),
            x = -1;
        for (r[u] < r[0] && (r = r.slice().reverse(), s = s.slice().reverse()); ++x < u;)
            v[x] = o(r[x], r[x + 1]), w[x] = t(s[x], s[x + 1]);
        return function(y) {
            var z = (0, g.default)(r, y, 1, u) - 1;
            return w[z](v[z](y));
        };
    }

    function _r(s, t) {
        return t.domain(s.domain()).range(s.range()).interpolate(s.interpolate()).clamp(s.clamp()).unknown(s.unknown());
    }

    function _s() {
        var t, u, v, w, x, y, z = m,
            A = m,
            B = h.default,
            _C = _n;

        function D() {
            var E, F, G, H = Math.min(z.length, A.length);
            return _C !== _n && (E = z[0], F = z[H - 1], E > F && (G = E, E = F, F = G), _C = function(I) {
                return Math.max(E, Math.min(F, I));
            }), w = H > 2 ? q : p, x = y = null, _E;
        }

        function _E(F) {
            return null == F || isNaN(F = +F) ? v : (x || (x = w(z.map(t), A, B)))(t(_C(F)));
        }
        return _E.invert = function(F) {
                return _C(u((y || (y = w(A, z.map(t), i.default)))(F)));
            }, _E.domain = function(F) {
                return arguments.length ? (z = Array.from(F, l.default), D()) : z.slice();
            }, _E.range = function(F) {
                return arguments.length ? (A = Array.from(F), D()) : A.slice();
            }, _E.rangeRound = function(F) {
                return A = Array.from(F), B = j.default, D();
            }, _E.clamp = function(F) {
                return arguments.length ? (_C = !!F || _n, D()) : _C !== _n;
            }, _E.interpolate = function(F) {
                return arguments.length ? (B = F, D()) : B;
            }, _E.unknown = function(F) {
                return arguments.length ? (v = F, _E) : v;
            },
            function(F, G) {
                return t = F, u = G, D();
            };
    }

    function t() {
        return _s()(_n, _n);
    }
}), d.register('zF3sh', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('/XFPM'),
        h = d('cCjUn'),
        i = d('HGwwe');
    const j = (0, h.default)(g.default),
        k = j.right;
    j.left, (0, h.default)(i.default).center;
    var _l = k;
}), d.register('/XFPM', function(e, f) {
    function g(h, i) {
        return h < i ? -1 : h > i ? 1 : h >= i ? 0 : NaN;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('cCjUn', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('/XFPM');

    function _h(i) {
        let j = i,
            k = i;

        function l(m, n, o, p) {
            for (null == o && (o = 0), null == p && (p = m.length); o < p;) {
                const q = o + p >>> 1;
                k(m[q], n) < 0 ? o = q + 1 : p = q;
            }
            return o;
        }
        return 1 === i.length && (j = (j, k) => i(j) - k, k = function(m) {
            return (j, k) => (0, g.default)(m(j), k);
        }(i)), {
            left: l,
            center: function(m, n, o, p) {
                null == o && (o = 0), null == p && (p = m.length);
                const q = l(m, n, o, p - 1);
                return q > o && j(m[q - 1], n) > -j(m[q], n) ? q - 1 : q;
            },
            right: function(m, n, o, p) {
                for (null == o && (o = 0), null == p && (p = m.length); o < p;) {
                    const q = o + p >>> 1;
                    k(m[q], n) > 0 ? p = q : o = q + 1;
                }
                return o;
            }
        };
    }
}), d.register('HGwwe', function(e, f) {
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
    b(e.exports, 'default', function() {
        return g;
    }), b(e.exports, 'numbers', function() {
        return h;
    });
}), d.register('4+u8a', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('ZQvcN'),
        h = d('6MhXL'),
        i = d('3Z5sH'),
        j = d('taXnj'),
        k = d('c4NiA'),
        l = d('wB6do'),
        m = d('DBFuw'),
        n = d('N1aFI'),
        o = d('JAhCs');

    function _p(q, r) {
        var s, t = typeof r;
        return null == r || 'boolean' === t ? (0, n.default)(r) : ('number' === t ? k.default : 'string' === t ? (s = (0, g.default)(r)) ? (r = s, h.default) : m.default : r instanceof g.default ? h.default : r instanceof Date ? j.default : (0, o.isNumberArray)(r) ? o.default : Array.isArray(r) ? i.genericArray : 'function' != typeof r.valueOf && 'function' != typeof r.toString || isNaN(r) ? l.default : k.default)(q, r);
    }
}), d.register('ZQvcN', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    }), b(e.exports, 'rgb', function() {
        return _B;
    });
    var g = d('rbpWk');

    function h() {}
    var i = 0.7,
        j = 1.4285714285714286,
        k = '\\s*([+-]?\\d+)\\s*',
        l = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        m = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        n = /^#([0-9a-f]{3,8})$/,
        o = new RegExp('^rgb\\(' + [
            k,
            k,
            k
        ] + '\\)$'),
        p = new RegExp('^rgb\\(' + [
            m,
            m,
            m
        ] + '\\)$'),
        q = new RegExp('^rgba\\(' + [
            k,
            k,
            k,
            l
        ] + '\\)$'),
        r = new RegExp('^rgba\\(' + [
            m,
            m,
            m,
            l
        ] + '\\)$'),
        s = new RegExp('^hsl\\(' + [
            l,
            m,
            m
        ] + '\\)$'),
        t = new RegExp('^hsla\\(' + [
            l,
            m,
            m,
            l
        ] + '\\)$'),
        u = {
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
        return y = (y + '').trim().toLowerCase(), (z = n.exec(y)) ? (A = z[1].length, z = parseInt(z[1], 16), 6 === A ? _y(z) : 3 === A ? new _C(z >> 8 & 15 | z >> 4 & 240, z >> 4 & 15 | 240 & z, (15 & z) << 4 | 15 & z, 1) : 8 === A ? _z(z >> 24 & 255, z >> 16 & 255, z >> 8 & 255, (255 & z) / 255) : 4 === A ? _z(z >> 12 & 15 | z >> 8 & 240, z >> 8 & 15 | z >> 4 & 240, z >> 4 & 15 | 240 & z, ((15 & z) << 4 | 15 & z) / 255) : null) : (z = o.exec(y)) ? new _C(z[1], z[2], z[3], 1) : (z = p.exec(y)) ? new _C(255 * z[1] / 100, 255 * z[2] / 100, 255 * z[3] / 100, 1) : (z = q.exec(y)) ? _z(z[1], z[2], z[3], z[4]) : (z = r.exec(y)) ? _z(255 * z[1] / 100, 255 * z[2] / 100, 255 * z[3] / 100, z[4]) : (z = s.exec(y)) ? _G(z[1], z[2] / 100, z[3] / 100, 1) : (z = t.exec(y)) ? _G(z[1], z[2] / 100, z[3] / 100, z[4]) : u.hasOwnProperty(y) ? _y(u[y]) : 'transparent' === y ? new _C(NaN, NaN, NaN, 0) : null;
    }

    function _y(z) {
        return new _C(z >> 16 & 255, z >> 8 & 255, 255 & z, 1);
    }

    function _z(A, B, C, D) {
        return D <= 0 && (A = B = C = NaN), new _C(A, B, C, D);
    }

    function A(B) {
        return B instanceof h || (B = _x(B)), B ? new _C((B = B.rgb()).r, B.g, B.b, B.opacity) : new _C();
    }

    function _B(C, D, E, F) {
        return 1 === arguments.length ? A(C) : new _C(C, D, E, null == F ? 1 : F);
    }

    function _C(D, E, F, G) {
        this.r = +D, this.g = +E, this.b = +F, this.opacity = +G;
    }

    function D() {
        return '#' + _F(this.r) + _F(this.g) + _F(this.b);
    }

    function E() {
        var F = this.opacity;
        return (1 === (F = isNaN(F) ? 1 : Math.max(0, Math.min(1, F))) ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === F ? ')' : ', ' + F + ')');
    }

    function _F(G) {
        return ((G = Math.max(0, Math.min(255, Math.round(G) || 0))) < 16 ? '0' : '') + G.toString(16);
    }

    function _G(H, I, J, K) {
        return K <= 0 ? H = I = J = NaN : J <= 0 || J >= 1 ? H = I = NaN : I <= 0 && (H = NaN), new _I(H, I, J, K);
    }

    function H(I) {
        if (I instanceof _I)
            return new _I(I.h, I.s, I.l, I.opacity);
        if (I instanceof h || (I = _x(I)), !I)
            return new _I();
        if (I instanceof _I)
            return I;
        var J = (I = I.rgb()).r / 255,
            K = I.g / 255,
            L = I.b / 255,
            M = Math.min(J, K, L),
            N = Math.max(J, K, L),
            O = NaN,
            P = N - M,
            Q = (N + M) / 2;
        return P ? (O = J === N ? (K - L) / P + 6 * (K < L) : K === N ? (L - J) / P + 2 : (J - K) / P + 4, P /= Q < 0.5 ? N + M : 2 - N - M, O *= 60) : P = Q > 0 && Q < 1 ? 0 : O, new _I(O, P, Q, I.opacity);
    }

    function _I(J, K, L, M) {
        this.h = +J, this.s = +K, this.l = +L, this.opacity = +M;
    }

    function J(K, L, M) {
        return 255 * (K < 60 ? L + (M - L) * K / 60 : K < 180 ? M : K < 240 ? L + (M - L) * (240 - K) / 60 : L);
    }
    (0, g.default)(h, _x, {
        copy: function(K) {
            return Object.assign(new this.constructor(), this, K);
        },
        displayable: function() {
            return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHsl: function() {
            return H(this).formatHsl();
        },
        formatRgb: w,
        toString: w
    }), (0, g.default)(_C, _B, (0, g.extend)(h, {
        brighter: function(K) {
            return K = null == K ? j : Math.pow(j, K), new _C(this.r * K, this.g * K, this.b * K, this.opacity);
        },
        darker: function(K) {
            return K = null == K ? i : Math.pow(i, K), new _C(this.r * K, this.g * K, this.b * K, this.opacity);
        },
        rgb: function() {
            return this;
        },
        displayable: function() {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: D,
        formatHex: D,
        formatRgb: E,
        toString: E
    })), (0, g.default)(_I, function(K, L, M, N) {
        return 1 === arguments.length ? H(K) : new _I(K, L, M, null == N ? 1 : N);
    }, (0, g.extend)(h, {
        brighter: function(K) {
            return K = null == K ? j : Math.pow(j, K), new _I(this.h, this.s, this.l * K, this.opacity);
        },
        darker: function(K) {
            return K = null == K ? i : Math.pow(i, K), new _I(this.h, this.s, this.l * K, this.opacity);
        },
        rgb: function() {
            var K = this.h % 360 + 360 * (this.h < 0),
                L = isNaN(K) || isNaN(this.s) ? 0 : this.s,
                M = this.l,
                N = M + (M < 0.5 ? M : 1 - M) * L,
                O = 2 * M - N;
            return new _C(J(K >= 240 ? K - 240 : K + 120, O, N), J(K, O, N), J(K < 120 ? K + 240 : K - 120, O, N), this.opacity);
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl: function() {
            var K = this.opacity;
            return (1 === (K = isNaN(K) ? 1 : Math.max(0, Math.min(1, K))) ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === K ? ')' : ', ' + K + ')');
        }
    }));
}), d.register('rbpWk', function(e, f) {
    function g(h, i, j) {
        h.prototype = i.prototype = j, j.constructor = h;
    }

    function h(i, j) {
        var k = Object.create(i.prototype);
        for (var l in j)
            k[l] = j[l];
        return k;
    }
    b(e.exports, 'default', function() {
        return g;
    }), b(e.exports, 'extend', function() {
        return h;
    });
}), d.register('6MhXL', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('ZQvcN'),
        h = d('ZHon0'),
        i = d('7nr9T'),
        j = d('QNHIp'),
        _k = function e(l) {
            var m = (0, j.gamma)(l);

            function n(o, p) {
                var q = m((o = (0, g.rgb)(o)).r, (p = (0, g.rgb)(p)).r),
                    r = m(o.g, p.g),
                    s = m(o.b, p.b),
                    t = (0, j.default)(o.opacity, p.opacity);
                return function(u) {
                    return o.r = q(u), o.g = r(u), o.b = s(u), o.opacity = t(u), o + '';
                };
            }
            return n.gamma = e, n;
        }(1);

    function l(m) {
        return function(n) {
            var o, p, q = n.length,
                r = new Array(q),
                s = new Array(q),
                t = new Array(q);
            for (o = 0; o < q; ++o)
                p = (0, g.rgb)(n[o]), r[o] = p.r || 0, s[o] = p.g || 0, t[o] = p.b || 0;
            return r = m(r), s = m(s), t = m(t), p.opacity = 1,
                function(u) {
                    return p.r = r(u), p.g = s(u), p.b = t(u), p + '';
                };
        };
    }
    l(h.default), l(i.default);
}), d.register('ZHon0', function(e, f) {
    function g(h, i, j, k, l) {
        var m = h * h,
            n = m * h;
        return ((1 - 3 * h + 3 * m - n) * i + (4 - 6 * m + 3 * n) * j + (1 + 3 * h + 3 * m - 3 * n) * k + n * l) / 6;
    }

    function h(i) {
        var j = i.length - 1;
        return function(k) {
            var l = k <= 0 ? k = 0 : k >= 1 ? (k = 1, j - 1) : Math.floor(k * j),
                m = i[l],
                n = i[l + 1],
                o = l > 0 ? i[l - 1] : 2 * m - n,
                p = l < j - 1 ? i[l + 2] : 2 * n - m;
            return g((k - l / j) * j, o, m, n, p);
        };
    }
    b(e.exports, 'basis', function() {
        return g;
    }), b(e.exports, 'default', function() {
        return h;
    });
}), d.register('7nr9T', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('ZHon0');

    function _h(i) {
        var j = i.length;
        return function(k) {
            var l = Math.floor(((k %= 1) < 0 ? ++k : k) * j),
                m = i[(l + j - 1) % j],
                n = i[l % j],
                o = i[(l + 1) % j],
                p = i[(l + 2) % j];
            return (0, g.basis)((k - l / j) * j, m, n, o, p);
        };
    }
}), d.register('QNHIp', function(e, f) {
    b(e.exports, 'gamma', function() {
        return _i;
    }), b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('N1aFI');

    function h(i, j) {
        return function(k) {
            return i + k * j;
        };
    }

    function _i(j) {
        return 1 == (j = +j) ? _j : function(k, l) {
            return l - k ? function(m, n, o) {
                return m = Math.pow(m, o), n = Math.pow(n, o) - m, o = 1 / o,
                    function(p) {
                        return Math.pow(m + p * n, o);
                    };
            }(k, l, j) : (0, g.default)(isNaN(k) ? l : k);
        };
    }

    function _j(k, l) {
        var m = l - k;
        return m ? h(k, m) : (0, g.default)(isNaN(k) ? l : k);
    }
}), d.register('N1aFI', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = e => () => e;
}), d.register('3Z5sH', function(e, f) {
    b(e.exports, 'genericArray', function() {
        return _h;
    });
    var g = d('4+u8a');
    d('JAhCs');

    function _h(i, j) {
        var k, l = j ? j.length : 0,
            m = i ? Math.min(l, i.length) : 0,
            n = new Array(m),
            o = new Array(l);
        for (k = 0; k < m; ++k)
            n[k] = (0, g.default)(i[k], j[k]);
        for (; k < l; ++k)
            o[k] = j[k];
        return function(p) {
            for (k = 0; k < m; ++k)
                o[k] = n[k](p);
            return o;
        };
    }
}), d.register('JAhCs', function(e, f) {
    function g(h, i) {
        i || (i = []);
        var j, k = h ? Math.min(i.length, h.length) : 0,
            l = i.slice();
        return function(m) {
            for (j = 0; j < k; ++j)
                l[j] = h[j] * (1 - m) + i[j] * m;
            return l;
        };
    }

    function h(i) {
        return ArrayBuffer.isView(i) && !(i instanceof DataView);
    }
    b(e.exports, 'default', function() {
        return g;
    }), b(e.exports, 'isNumberArray', function() {
        return h;
    });
}), d.register('taXnj', function(e, f) {
    function g(h, i) {
        var j = new Date();
        return h = +h, i = +i,
            function(k) {
                return j.setTime(h * (1 - k) + i * k), j;
            };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('c4NiA', function(e, f) {
    function g(h, i) {
        return h = +h, i = +i,
            function(j) {
                return h * (1 - j) + i * j;
            };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('wB6do', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('4+u8a');

    function _h(i, j) {
        var k, l = {},
            m = {};
        for (k in (null !== i && 'object' == typeof i || (i = {}), null !== j && 'object' == typeof j || (j = {}), j))
            k in i ? l[k] = (0, g.default)(i[k], j[k]) : m[k] = j[k];
        return function(n) {
            for (k in l)
                m[k] = l[k](n);
            return m;
        };
    }
}), d.register('DBFuw', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('c4NiA'),
        h = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        i = new RegExp(h.source, 'g');

    function _j(k, l) {
        var m, n, o, p = h.lastIndex = i.lastIndex = 0,
            q = -1,
            r = [],
            s = [];
        for (k += '', l += '';
            (m = h.exec(k)) && (n = i.exec(l));)
            (o = n.index) > p && (o = l.slice(p, o), r[q] ? r[q] += o : r[++q] = o), (m = m[0]) === (n = n[0]) ? r[q] ? r[q] += n : r[++q] = n : (r[++q] = null, s.push({
                i: q,
                x: (0, g.default)(m, n)
            })), p = i.lastIndex;
        return p < l.length && (o = l.slice(p), r[q] ? r[q] += o : r[++q] = o), r.length < 2 ? s[0] ? function(t) {
            return function(u) {
                return t(u) + '';
            };
        }(s[0].x) : function(t) {
            return function() {
                return t;
            };
        }(l) : (l = s.length, function(t) {
            for (var u, v = 0; v < l; ++v)
                r[(u = s[v]).i] = u.x(t);
            return r.join('');
        });
    }
}), d.register('23eaA', function(e, f) {
    function g(h, i) {
        return h = +h, i = +i,
            function(j) {
                return Math.round(h * (1 - j) + i * j);
            };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('n7Dwj0', function(e, f) {
    function g(h) {
        return function() {
            return h;
        };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('flE2d', function(e, f) {
    function g(h) {
        return +h;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('ObPyn', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('3phdV'),
        h = d('7eS+R'),
        i = d('L0gFr'),
        j = d('+hZRq'),
        k = d('0KhYm'),
        l = d('531yQ');

    function _m(n, o, p, q) {
        var r, s = (0, g.tickStep)(n, o, p);
        switch ((q = (0, i.default)(null == q ? ',f' : q)).type) {
            case 's':
                var t = Math.max(Math.abs(n), Math.abs(o));
                return null != q.precision || isNaN(r = (0, k.default)(s, t)) || (q.precision = r), (0, h.formatPrefix)(q, t);
            case '':
            case 'e':
            case 'g':
            case 'p':
            case 'r':
                null != q.precision || isNaN(r = (0, l.default)(s, Math.max(Math.abs(n), Math.abs(o)))) || (q.precision = r - ('e' === q.type));
                break;
            case 'f':
            case '%':
                null != q.precision || isNaN(r = (0, j.default)(s)) || (q.precision = r - 2 * ('%' === q.type));
        }
        return (0, h.format)(q);
    }
}), d.register('7eS+R', function(e, f) {
    b(e.exports, 'format', function() {
        return _h;
    }), b(e.exports, 'formatPrefix', function() {
        return _i;
    });
    var g, _h, _i, j, k = d('j6/gi');
    j = {
        thousands: ',',
        grouping: [3],
        currency: [
            '$',
            ''
        ]
    }, g = (0, k.default)(j), _h = g.format, _i = g.formatPrefix;
}), d.register('j6/gi', function(e, f) {
    b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('Q0kGp'),
        h = d('o7j1c'),
        i = d('ASkqT'),
        j = d('L0gFr'),
        k = d('KS0l1'),
        l = d('vZgsH'),
        m = d('leYAb'),
        n = d('v0y+v'),
        o = Array.prototype.map,
        p = [
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
        var s = void 0 === r.grouping || void 0 === r.thousands ? n.default : (0, h.default)(o.call(r.grouping, Number), r.thousands + ''),
            t = void 0 === r.currency ? '' : r.currency[0] + '',
            u = void 0 === r.currency ? '' : r.currency[1] + '',
            v = void 0 === r.decimal ? '.' : r.decimal + '',
            w = void 0 === r.numerals ? n.default : (0, i.default)(o.call(r.numerals, String)),
            x = void 0 === r.percent ? '%' : r.percent + '',
            y = void 0 === r.minus ? '\u2212' : r.minus + '',
            z = void 0 === r.nan ? 'NaN' : r.nan + '';

        function A(B) {
            var C = (B = (0, j.default)(B)).fill,
                D = B.align,
                E = B.sign,
                F = B.symbol,
                G = B.zero,
                H = B.width,
                I = B.comma,
                J = B.precision,
                K = B.trim,
                L = B.type;
            'n' === L ? (I = !0, L = 'g') : l.default[L] || (void 0 === J && (J = 12), K = !0, L = 'g'), (G || '0' === C && '=' === D) && (G = !0, C = '0', D = '=');
            var M = '$' === F ? t : '#' === F && /[boxX]/.test(L) ? '0' + L.toLowerCase() : '',
                N = '$' === F ? u : /[%p]/.test(L) ? x : '',
                O = l.default[L],
                P = /[defgprs%]/.test(L);

            function Q(R) {
                var S, T, U, V = M,
                    W = N;
                if ('c' === L)
                    W = O(R) + W, R = '';
                else {
                    var X = (R = +R) < 0 || 1 / R < 0;
                    if (R = isNaN(R) ? z : O(Math.abs(R), J), K && (R = (0, k.default)(R)), X && 0 == +R && '+' !== E && (X = !1), V = (X ? '(' === E ? E : y : '-' === E || '(' === E ? '' : E) + V, W = ('s' === L ? p[8 + m.prefixExponent / 3] : '') + W + (X && '(' === E ? ')' : ''), P)
                        for (S = -1, T = R.length; ++S < T;)
                            if (48 > (U = R.charCodeAt(S)) || U > 57) {
                                W = (46 === U ? v + R.slice(S + 1) : R.slice(S)) + W, R = R.slice(0, S);
                                break;
                            }
                }
                I && !G && (R = s(R, 1 / 0));
                var X = V.length + R.length + W.length,
                    Y = X < H ? new Array(H - X + 1).join(C) : '';
                switch (I && G && (R = s(Y + R, Y.length ? H - W.length : 1 / 0), Y = ''), D) {
                    case '<':
                        R = V + R + W + Y;
                        break;
                    case '=':
                        R = V + Y + R + W;
                        break;
                    case '^':
                        R = Y.slice(0, X = Y.length >> 1) + V + R + W + Y.slice(X);
                        break;
                    default:
                        R = Y + V + R + W;
                }
                return w(R);
            }
            return J = void 0 === J ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, J)) : Math.max(0, Math.min(20, J)), Q.toString = function() {
                return B + '';
            }, Q;
        }
        return {
            format: A,
            formatPrefix: function(B, C) {
                var D = A(((B = (0, j.default)(B)).type = 'f', B)),
                    E = 3 * Math.max(-8, Math.min(8, Math.floor((0, g.default)(C) / 3))),
                    F = Math.pow(10, -E),
                    G = p[8 + E / 3];
                return function(H) {
                    return D(F * H) + G;
                };
            }
        };
    }
}), d.register('Q0kGp', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('5S+PY');

    function _h(i) {
        return (i = (0, g.formatDecimalParts)(Math.abs(i))) ? i[1] : NaN;
    }
}), d.register('5S+PY', function(e, f) {
    function g(h) {
        return Math.abs(h = Math.round(h)) >= 1e+21 ? h.toLocaleString('en').replace(/,/g, '') : h.toString(10);
    }

    function h(i, j) {
        if ((f = (i = j ? i.toExponential(j - 1) : i.toExponential()).indexOf('e')) < 0)
            return null;
        var k, l = i.slice(0, k);
        return [
            l.length > 1 ? l[0] + l.slice(2) : l,
            +i.slice(k + 1)
        ];
    }
    b(e.exports, 'default', function() {
        return g;
    }), b(e.exports, 'formatDecimalParts', function() {
        return h;
    });
}), d.register('o7j1c', function(e, f) {
    function g(h, i) {
        return function(j, k) {
            for (var l = j.length, m = [], n = 0, o = h[0], p = 0; l > 0 && o > 0 && (p + o + 1 > k && (o = Math.max(1, k - p)), m.push(j.substring(l -= o, l + o)), !((p += o + 1) > k));)
                o = h[n = (n + 1) % h.length];
            return m.reverse().join(i);
        };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('ASkqT', function(e, f) {
    function g(h) {
        return function(i) {
            return i.replace(/[0-9]/g, function(j) {
                return h[+j];
            });
        };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('L0gFr', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function _h(i) {
        if (!(b = g.exec(i)))
            throw new Error('invalid format: ' + i);
        var j;
        return new _i({
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

    function _i(j) {
        this.fill = void 0 === j.fill ? ' ' : j.fill + '', this.align = void 0 === j.align ? '>' : j.align + '', this.sign = void 0 === j.sign ? '-' : j.sign + '', this.symbol = void 0 === j.symbol ? '' : j.symbol + '', this.zero = !!j.zero, this.width = void 0 === j.width ? void 0 : +j.width, this.comma = !!j.comma, this.precision = void 0 === j.precision ? void 0 : +j.precision, this.trim = !!j.trim, this.type = void 0 === j.type ? '' : j.type + '';
    }
    _h.prototype = _i.prototype, _i.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? '0' : '') + (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) + (this.comma ? ',' : '') + (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) + (this.trim ? '~' : '') + this.type;
    };
}), d.register('KS0l1', function(e, f) {
    function g(h) {
        t: for (var i, j = h.length, k = 1, l = -1; k < j; ++k)
            switch (h[k]) {
                case '.':
                    l = i = k;
                    break;
                case '0':
                    0 === l && (l = k), i = k;
                    break;
                default:
                    if (!+h[k])
                        break t;
                    l > 0 && (l = 0);
            }
        return l > 0 ? h.slice(0, l) + h.slice(i + 1) : h;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('vZgsH', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('5S+PY'),
        h = d('leYAb'),
        i = d('6Zi1l'),
        _j = {
            '%': (e, b) => (100 * e).toFixed(b),
            b: e => Math.round(e).toString(2),
            c: e => e + '',
            d: g.default,
            e: (e, b) => e.toExponential(b),
            f: (e, b) => e.toFixed(b),
            g: (e, b) => e.toPrecision(b),
            o: e => Math.round(e).toString(8),
            p: (e, b) => (0, i.default)(100 * e, b),
            r: i.default,
            s: h.default,
            X: e => Math.round(e).toString(16).toUpperCase(),
            x: e => Math.round(e).toString(16)
        };
}), d.register('leYAb', function(e, f) {
    b(e.exports, 'prefixExponent', function() {
        return _g;
    }), b(e.exports, 'default', function() {
        return _i;
    });
    var _g, h = d('5S+PY');

    function _i(j, k) {
        var l = (0, h.formatDecimalParts)(j, k);
        if (!l)
            return j + '';
        var m = l[0],
            n = l[1],
            o = n - (_g = 3 * Math.max(-8, Math.min(8, Math.floor(n / 3)))) + 1,
            p = m.length;
        return o === p ? m : o > p ? m + new Array(o - p + 1).join('0') : o > 0 ? m.slice(0, o) + '.' + m.slice(o) : '0.' + new Array(1 - o).join('0') + (0, h.formatDecimalParts)(j, Math.max(0, k + o - 1))[0];
    }
}), d.register('6Zi1l', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('5S+PY');

    function _h(i, j) {
        var k = (0, g.formatDecimalParts)(i, j);
        if (!k)
            return i + '';
        var l = k[0],
            m = k[1];
        return m < 0 ? '0.' + new Array(-m).join('0') + l : l.length > m + 1 ? l.slice(0, m + 1) + '.' + l.slice(m + 1) : l + new Array(m - l.length + 2).join('0');
    }
}), d.register('v0y+v', function(e, f) {
    function g(h) {
        return h;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('+hZRq', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('Q0kGp');

    function _h(i) {
        return Math.max(0, -(0, g.default)(Math.abs(i)));
    }
}), d.register('0KhYm', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('Q0kGp');

    function _h(i, j) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, g.default)(j) / 3))) - (0, g.default)(Math.abs(i)));
    }
}), d.register('531yQ', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('Q0kGp');

    function _h(i, j) {
        return i = Math.abs(i), j = Math.abs(j) - i, Math.max(0, (0, g.default)(j) - (0, g.default)(i)) + 1;
    }
}), d.register('wwKA7', function(e, f) {
    b(e.exports, 'loggish', function() {
        return _r;
    }), b(e.exports, 'default', function() {
        return _K;
    });
    var g = d('3phdV'),
        h = d('7eS+R'),
        i = d('OO5pR'),
        j = d('wdLSO'),
        k = d('7bben');

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
        return function(s) {
            return -r(-s);
        };
    }

    function _r(s) {
        var t, u, v = s(l, m),
            w = v.domain,
            x = 10;

        function y() {
            return t = function(z) {
                return z === Math.E ? Math.log : 10 === z && Math.log10 || 2 === z && Math.log2 || (z = Math.log(z), function(A) {
                    return Math.log(A) / z;
                });
            }(x), u = function(z) {
                return 10 === z ? p : z === Math.E ? Math.exp : function(A) {
                    return Math.pow(z, A);
                };
            }(x), w()[0] < 0 ? (t = q(t), u = q(u), s(n, o)) : s(l, m), v;
        }
        return v.base = function(z) {
            return arguments.length ? (x = +z, y()) : x;
        }, v.domain = function(z) {
            return arguments.length ? (w(z), y()) : w();
        }, v.ticks = function(z) {
            var A, B = w(),
                C = B[0],
                D = B[B.length - 1];
            (A = D < C) && (p = C, C = D, D = p);
            var E, F, G, H = t(C),
                I = t(D),
                J = null == z ? 10 : +z,
                _K = [];
            if (!(x % 1) && I - H < J) {
                if (H = Math.floor(H), I = Math.ceil(I), C > 0) {
                    for (; H <= I; ++H)
                        for (F = 1, E = u(H); F < x; ++F)
                            if (!((G = E * F) < C)) {
                                if (G > D)
                                    break;
                                _K.push(G);
                            }
                } else
                    for (; H <= I; ++H)
                        for (F = x - 1, E = u(H); F >= 1; --F)
                            if (!((G = E * F) < C)) {
                                if (G > D)
                                    break;
                                _K.push(G);
                            }
                2 * _K.length < J && (_K = (0, g.default)(C, D, J));
            } else
                _K = (0, g.default)(H, I, Math.min(I - H, J)).map(u);
            return A ? _K.reverse() : _K;
        }, v.tickFormat = function(z, A) {
            if (null == A && (A = 10 === x ? '.0e' : ','), 'function' != typeof A && (A = (0, h.format)(A)), z === 1 / 0)
                return A;
            null == z && (z = 10);
            var B = Math.max(1, x * z / v.ticks().length);
            return function(C) {
                var D = C / u(Math.round(t(C)));
                return D * x < x - 0.5 && (D *= x), D <= B ? A(C) : '';
            };
        }, v.nice = function() {
            return w((0, i.default)(w(), {
                floor: function(z) {
                    return u(Math.floor(t(z)));
                },
                ceil: function(z) {
                    return u(Math.ceil(t(z)));
                }
            }));
        }, v;
    }

    function s() {
        var t = _r((0, j.transformer)()).domain([
            1,
            10
        ]);
        return t.copy = function() {
            return (0, j.copy)(t, s()).base(t.base());
        }, k.initRange.apply(t, arguments), t;
    }
}), d.register('OO5pR', function(e, f) {
    function g(h, i) {
        var j, k = 0,
            l = (h = h.slice()).length - 1,
            m = h[k],
            n = h[l];
        return n < m && (j = k, k = l, l = j, j = m, m = n, n = j), h[k] = i.floor(m), h[l] = i.ceil(n), h;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('NLDjj', function(e, f) {
    b(e.exports, 'symlogish', function() {
        return _l;
    }), b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('smHnl'),
        h = d('wdLSO'),
        i = d('7bben');

    function j(k) {
        return function(l) {
            return Math.sign(l) * Math.log1p(Math.abs(l / k));
        };
    }

    function k(l) {
        return function(m) {
            return Math.sign(m) * Math.expm1(Math.abs(m)) * l;
        };
    }

    function _l(m) {
        var n = 1,
            o = m(j(n), k(n));
        return o.constant = function(p) {
            return arguments.length ? m(j(n = +p), k(n)) : n;
        }, (0, g.linearish)(o);
    }

    function _m() {
        var n = _l((0, h.transformer)());
        return n.copy = function() {
            return (0, h.copy)(n, _m()).constant(n.constant());
        }, i.initRange.apply(n, arguments);
    }
}), d.register('neWRJ', function(e, f) {
    b(e.exports, 'powish', function() {
        return _m;
    }), b(e.exports, 'default', function() {
        return _n;
    }), b(e.exports, 'sqrt', function() {
        return _o;
    });
    var g = d('smHnl'),
        h = d('wdLSO'),
        i = d('7bben');

    function j(k) {
        return function(l) {
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
        var o = n(h.identity, h.identity),
            p = 1;

        function q() {
            return 1 === p ? n(h.identity, h.identity) : 0.5 === p ? n(k, l) : n(j(p), j(1 / p));
        }
        return o.exponent = function(r) {
            return arguments.length ? (p = +r, q()) : p;
        }, (0, g.linearish)(o);
    }

    function _n() {
        var o = _m((0, h.transformer)());
        return o.copy = function() {
            return (0, h.copy)(o, _n()).exponent(o.exponent());
        }, i.initRange.apply(o, arguments), o;
    }

    function _o() {
        return _n.apply(null, arguments).exponent(0.5);
    }
}), d.register('UUgAQ', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('wdLSO'),
        h = d('7bben'),
        i = d('smHnl'),
        j = d('flE2d');

    function k(l) {
        return Math.sign(l) * l * l;
    }

    function l(m) {
        return Math.sign(m) * Math.sqrt(Math.abs(m));
    }

    function _m() {
        var n, o = (0, g.default)(),
            p = [
                0,
                1
            ],
            q = !1;

        function r(s) {
            var t = l(o(s));
            return isNaN(t) ? n : q ? Math.round(t) : t;
        }
        return r.invert = function(s) {
            return o.invert(k(s));
        }, r.domain = function(s) {
            return arguments.length ? (o.domain(s), r) : o.domain();
        }, r.range = function(s) {
            return arguments.length ? (o.range((p = Array.from(s, j.default)).map(k)), r) : p.slice();
        }, r.rangeRound = function(s) {
            return r.range(s).round(!0);
        }, r.round = function(s) {
            return arguments.length ? (q = !!s, r) : q;
        }, r.clamp = function(s) {
            return arguments.length ? (o.clamp(s), r) : o.clamp();
        }, r.unknown = function(s) {
            return arguments.length ? (n = s, r) : n;
        }, r.copy = function() {
            return _m(o.domain(), p).round(q).clamp(o.clamp()).unknown(n);
        }, h.initRange.apply(r, arguments), (0, i.linearish)(r);
    }
}), d.register('st7pk', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('/XFPM'),
        h = d('zF3sh'),
        i = d('GS0lI'),
        j = d('7bben');

    function _k() {
        var l, m = [],
            n = [],
            o = [];

        function p() {
            var q = 0,
                r = Math.max(1, n.length);
            for (o = new Array(r - 1); ++q < r;)
                o[q - 1] = (0, i.quantileSorted)(m, q / r);
            return _q;
        }

        function _q(r) {
            return null == r || isNaN(r = +r) ? l : n[(0, h.default)(o, r)];
        }
        return _q.invertExtent = function(r) {
            var s = n.indexOf(r);
            return s < 0 ? [
                NaN,
                NaN
            ] : [
                s > 0 ? o[s - 1] : m[0],
                s < o.length ? o[s] : m[m.length - 1]
            ];
        }, _q.domain = function(r) {
            if (!arguments.length)
                return m.slice();
            m = [];
            for (let s of r)
                null == s || isNaN(s = +s) || m.push(s);
            return m.sort(g.default), p();
        }, _q.range = function(r) {
            return arguments.length ? (n = Array.from(r), p()) : n.slice();
        }, _q.unknown = function(r) {
            return arguments.length ? (l = r, _q) : l;
        }, _q.quantiles = function() {
            return o.slice();
        }, _q.copy = function() {
            return _k().domain(m).range(n).unknown(l);
        }, j.initRange.apply(_q, arguments);
    }
}), d.register('GS0lI', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    }), b(e.exports, 'quantileSorted', function() {
        return _q;
    });
    var g = d('Se9e1'),
        h = d('eYaLI'),
        i = d('K60F6'),
        j = d('HGwwe');

    function _k(l, m, n) {
        if (d = (l = Float64Array.from((0, j.numbers)(l, n))).length) {
            if ((m = +m) <= 0 || d < 2)
                return (0, h.default)(l);
            if (m >= 1)
                return (0, g.default)(l);
            var o, p = (o - 1) * m,
                _q = Math.floor(p),
                r = (0, g.default)((0, i.default)(l, _q).subarray(0, _q + 1));
            return r + ((0, h.default)(l.subarray(_q + 1)) - r) * (p - _q);
        }
    }

    function l(m, n, o = j.default) {
        if (d = m.length) {
            if ((n = +n) <= 0 || d < 2)
                return +o(m[0], 0, m);
            if (n >= 1)
                return +o(m[d - 1], d - 1, m);
            var p, q = (p - 1) * n,
                r = Math.floor(q),
                s = +o(m[r], r, m);
            return s + (+o(m[r + 1], r + 1, m) - s) * (q - r);
        }
    }
}), d.register('Se9e1', function(e, f) {
    function g(h, i) {
        let j;
        if (void 0 === i)
            for (const k of h)
                null != k && (j < k || void 0 === j && k >= k) && (j = k);
        else {
            let l = -1;
            for (let m of h)
                null != (m = k(m, ++l, h)) && (j < m || void 0 === j && m >= m) && (j = m);
        }
        return j;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('eYaLI', function(e, f) {
    function g(h, i) {
        let j;
        if (void 0 === i)
            for (const k of h)
                null != k && (j > k || void 0 === j && k >= k) && (j = k);
        else {
            let l = -1;
            for (let m of h)
                null != (m = k(m, ++l, h)) && (j > m || void 0 === j && m >= m) && (j = m);
        }
        return j;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('K60F6', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('/XFPM');

    function _h(i, j, k = 0, l = i.length - 1, m = g.default) {
        for (; l > k;) {
            if (l - k > 600) {
                const n = l - k + 1,
                    o = j - k + 1,
                    p = Math.log(n),
                    q = 0.5 * Math.exp(2 * p / 3),
                    r = 0.5 * Math.sqrt(p * q * (n - q) / n) * (o - n / 2 < 0 ? -1 : 1);
                _h(i, j, Math.max(k, Math.floor(j - o * q / n + r)), Math.min(l, Math.floor(j + (n - o) * q / n + r)), m);
            }
            const n = i[j];
            let o = k,
                p = l;
            for (_i(i, k, j), m(i[l], n) > 0 && _i(i, k, l); o < p;) {
                for (_i(i, o, p), ++o, --p; m(i[o], n) < 0;)
                    ++o;
                for (; m(i[p], n) > 0;)
                    --p;
            }
            0 === m(i[k], n) ? _i(i, k, p) : (++p, _i(i, p, l)), p <= j && (k = p + 1), j <= p && (l = p - 1);
        }
        return i;
    }

    function _i(j, k, l) {
        const m = j[k];
        j[k] = j[l], j[l] = m;
    }
}), d.register('8AblR', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('zF3sh'),
        h = d('smHnl'),
        i = d('7bben');

    function _j() {
        var k, l = 0,
            m = 1,
            n = 1,
            o = [0.5],
            p = [
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
        return q.domain = function(s) {
            return arguments.length ? ([t, u] = s, t = +t, u = +u, r()) : [
                t,
                u
            ];
        }, q.range = function(s) {
            return arguments.length ? (n = (p = Array.from(s)).length - 1, r()) : p.slice();
        }, q.invertExtent = function(s) {
            var t = p.indexOf(s);
            return t < 0 ? [
                NaN,
                NaN
            ] : t < 1 ? [
                l,
                o[0]
            ] : t >= n ? [
                o[n - 1],
                m
            ] : [
                o[t - 1],
                o[t]
            ];
        }, q.unknown = function(s) {
            return arguments.length ? (k = s, q) : q;
        }, q.thresholds = function() {
            return o.slice();
        }, q.copy = function() {
            return _j().domain([
                l,
                m
            ]).range(p).unknown(k);
        }, i.initRange.apply((0, h.linearish)(q), arguments);
    }
}), d.register('NA2g7', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('zF3sh'),
        h = d('7bben');

    function _i() {
        var j, k = [0.5],
            l = [
                0,
                1
            ],
            m = 1;

        function n(o) {
            return null != o && o <= o ? l[(0, g.default)(k, o, 0, m)] : j;
        }
        return n.domain = function(o) {
            return arguments.length ? (k = Array.from(o), m = Math.min(k.length, l.length - 1), n) : k.slice();
        }, n.range = function(o) {
            return arguments.length ? (l = Array.from(o), m = Math.min(k.length, l.length - 1), n) : l.slice();
        }, n.invertExtent = function(o) {
            var p = l.indexOf(o);
            return [
                k[p - 1],
                k[p]
            ];
        }, n.unknown = function(o) {
            return arguments.length ? (j = o, n) : j;
        }, n.copy = function() {
            return _i().domain(k).range(l).unknown(j);
        }, h.initRange.apply(n, arguments);
    }
}), d.register('2dEqb', function(e, f) {
    b(e.exports, 'calendar', function() {
        return _u;
    }), b(e.exports, 'default', function() {
        return _J;
    });
    var g = d('ADG9b'),
        h = d('IeWih'),
        i = d('sLep7'),
        j = d('DEIX/'),
        k = d('0ixdr'),
        l = d('D2MRR'),
        m = d('hBel9'),
        n = d('bTXhG'),
        o = d('57sno'),
        p = d('wdLSO'),
        q = d('7bben'),
        r = d('OO5pR');

    function s(t) {
        return new Date(t);
    }

    function t(u) {
        return u instanceof Date ? +u : +new Date(+u);
    }

    function _u(v, w, x, y, z, A, B, C, D, E) {
        var F = (0, p.default)(),
            G = F.invert,
            H = F.domain,
            I = E('.%L'),
            _J = E(':%S'),
            K = E('%I:%M'),
            L = E('%I %p'),
            M = E('%a %d'),
            N = E('%b %d'),
            O = E('%B'),
            P = E('%Y');

        function Q(R) {
            return (D(R) < R ? I : C(R) < R ? _J : B(R) < R ? K : A(R) < R ? L : y(R) < R ? z(R) < R ? M : N : x(R) < R ? O : P)(R);
        }
        return F.invert = function(R) {
            return new Date(G(R));
        }, F.domain = function(R) {
            return arguments.length ? H(Array.from(R, t)) : H().map(s);
        }, F.ticks = function(R) {
            var S = H();
            return v(S[0], S[S.length - 1], null == R ? 10 : R);
        }, F.tickFormat = function(R, S) {
            return null == S ? Q : E(S);
        }, F.nice = function(R) {
            var S = H();
            return R && 'function' == typeof R.range || (R = w(S[0], S[S.length - 1], null == R ? 10 : R)), R ? H((0, r.default)(S, R)) : F;
        }, F.copy = function() {
            return (0, p.copy)(F, _u(v, w, x, y, z, A, B, C, D, E));
        }, F;
    }

    function v() {
        return q.initRange.apply(_u(l.timeTicks, l.timeTickInterval, n.default, j.default, m.sunday, g.default, h.default, i.default, k.default, o.timeFormat).domain([
            new Date(2000, 0, 1),
            new Date(2000, 0, 2)
        ]), arguments);
    }
}), d.register('ADG9b', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(e => e.setHours(0, 0, 0, 0), (e, b) => e.setDate(e.getDate() + b), (e, b) => (b - e - (b.getTimezoneOffset() - e.getTimezoneOffset()) * h.durationMinute) / h.durationDay, e => e.getDate() - 1),
        _j = i;
    i.range;
}), d.register('bX0eN', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = new Date(),
        h = new Date();

    function _i(j, k, l, m) {
        function n(o) {
            return j(o = 0 === arguments.length ? new Date() : new Date(+o)), o;
        }
        return n.floor = function(o) {
            return j(o = new Date(+o)), o;
        }, n.ceil = function(o) {
            return j(o = new Date(o - 1)), k(o, 1), j(o), o;
        }, n.round = function(o) {
            var p = n(o),
                q = n.ceil(o);
            return o - p < q - o ? p : q;
        }, n.offset = function(o, p) {
            return k(o = new Date(+o), null == p ? 1 : Math.floor(p)), o;
        }, n.range = function(o, p, q) {
            var r, s = [];
            if (o = n.ceil(o), q = null == q ? 1 : Math.floor(q), !(o < p && q > 0))
                return s;
            do {
                s.push(r = new Date(+o)), k(o, q), j(o);
            } while (r < o && o < p);
            return s;
        }, n.filter = function(o) {
            return _i(function(p) {
                if (p >= p)
                    for (; j(p), !o(p);)
                        p.setTime(p - 1);
            }, function(p, q) {
                if (p >= p)
                    if (q < 0)
                        for (; ++q <= 0;)
                            for (; k(p, -1), !o(p););
                    else
                        for (; --q >= 0;)
                            for (; k(p, 1), !o(p););
            });
        }, l && (n.count = function(o, p) {
            return g.setTime(+o), h.setTime(+p), j(g), j(h), Math.floor(l(g, h));
        }, n.every = function(o) {
            return o = Math.floor(o), isFinite(o) && o > 0 ? o > 1 ? n.filter(m ? function(p) {
                return m(p) % o == 0;
            } : function(p) {
                return n.count(0, p) % o == 0;
            }) : n : null;
        }), n;
    }
}), d.register('kLrP4', function(e, f) {
    b(e.exports, 'durationSecond', function() {
        return d;
    }), b(e.exports, 'durationMinute', function() {
        return _h;
    }), b(e.exports, 'durationHour', function() {
        return _i;
    }), b(e.exports, 'durationDay', function() {
        return _j;
    }), b(e.exports, 'durationWeek', function() {
        return _k;
    }), b(e.exports, 'durationMonth', function() {
        return _l;
    }), b(e.exports, 'durationYear', function() {
        return _m;
    });
    const g = 1000,
        _h = 60 * g,
        _i = 60 * _h,
        _j = 24 * _i,
        _k = 7 * _j,
        _l = 30 * _j,
        _m = 365 * _j;
}), d.register('IeWih', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setTime(j - j.getMilliseconds() - j.getSeconds() * h.durationSecond - j.getMinutes() * h.durationMinute);
        }, function(j, k) {
            j.setTime(+j + k * h.durationHour);
        }, function(j, k) {
            return (k - j) / h.durationHour;
        }, function(j) {
            return j.getHours();
        }),
        _j = i;
    i.range;
}), d.register('sLep7', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setTime(j - j.getMilliseconds() - j.getSeconds() * h.durationSecond);
        }, function(j, k) {
            j.setTime(+j + k * h.durationMinute);
        }, function(j, k) {
            return (k - j) / h.durationMinute;
        }, function(j) {
            return j.getMinutes();
        }),
        _j = i;
    i.range;
}), d.register('DEIX/', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = (0, d('bX0eN').default)(function(h) {
            h.setDate(1), h.setHours(0, 0, 0, 0);
        }, function(h, i) {
            h.setMonth(h.getMonth() + i);
        }, function(h, i) {
            return i.getMonth() - h.getMonth() + 12 * (i.getFullYear() - h.getFullYear());
        }, function(h) {
            return h.getMonth();
        }),
        _h = g;
    g.range;
}), d.register('0ixdr', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setTime(j - j.getMilliseconds());
        }, function(j, k) {
            j.setTime(+j + k * h.durationSecond);
        }, function(j, k) {
            return (k - j) / h.durationSecond;
        }, function(j) {
            return j.getUTCSeconds();
        }),
        _j = i;
    i.range;
}), d.register('D2MRR', function(e, f) {
    b(e.exports, 'utcTicks', function() {
        return _y;
    }), b(e.exports, 'utcTickInterval', function() {
        return _z;
    }), b(e.exports, 'timeTicks', function() {
        return _A;
    }), b(e.exports, 'timeTickInterval', function() {
        return _B;
    });
    var g = d('cCjUn'),
        h = d('3phdV'),
        i = d('kLrP4'),
        j = d('cq8wB'),
        k = d('0ixdr'),
        l = d('sLep7'),
        m = d('IeWih'),
        n = d('ADG9b'),
        o = d('hBel9'),
        p = d('DEIX/'),
        q = d('bTXhG'),
        r = d('31E4Q'),
        s = d('C2NsO'),
        t = d('k9Yzx'),
        u = d('87MtP'),
        v = d('xKcLs'),
        w = d('rQp4j');

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
            const J = Math.abs(H - G) / I,
                K = (0, g.default)(([, , L]) => L).right(E, J);
            if (K === E.length)
                return L.every((0, h.tickStep)(G / i.durationYear, H / i.durationYear, I));
            if (0 === K)
                return j.default.every(Math.max((0, h.tickStep)(G, H, I), 1));
            const [M, N] = E[J / E[K - 1][2] < E[K][2] / J ? K - 1 : K];
            return M.every(N);
        }
        return [
            function(G, H, I) {
                const J = H < G;
                J && ([K, L] = [
                    L,
                    K
                ]);
                const M = I && 'function' == typeof I.range ? I : F(K, L, I),
                    N = M ? M.range(K, +L + 1) : [];
                return J ? N.reverse() : N;
            },
            F
        ];
    }
    const [_y, _z] = x(w.default, v.default, u.utcSunday, t.default, s.default, r.default), [_A, _B] = x(q.default, p.default, o.sunday, n.default, m.default, l.default);
}), d.register('cq8wB', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('bX0eN'),
        h = (0, g.default)(function() {}, function(i, j) {
            i.setTime(+i + j);
        }, function(i, j) {
            return j - i;
        });
    h.every = function(i) {
        return i = Math.floor(i), isFinite(i) && i > 0 ? i > 1 ? (0, g.default)(function(j) {
            j.setTime(Math.floor(j / i) * i);
        }, function(j, k) {
            j.setTime(+j + k * i);
        }, function(j, k) {
            return (k - j) / i;
        }) : h : null;
    };
    var _i = h;
    h.range;
}), d.register('hBel9', function(e, f) {
    b(e.exports, 'sunday', function() {
        return _j;
    }), b(e.exports, 'monday', function() {
        return _k;
    }), b(e.exports, 'thursday', function() {
        return _n;
    });
    var g = d('bX0eN'),
        h = d('kLrP4');

    function i(j) {
        return (0, g.default)(function(k) {
            k.setDate(k.getDate() - (k.getDay() + 7 - j) % 7), k.setHours(0, 0, 0, 0);
        }, function(k, l) {
            k.setDate(k.getDate() + 7 * l);
        }, function(k, l) {
            return (l - k - (l.getTimezoneOffset() - k.getTimezoneOffset()) * h.durationMinute) / h.durationWeek;
        });
    }
    var _j = i(0),
        _k = i(1),
        l = i(2),
        m = i(3),
        _n = i(4),
        o = i(5),
        p = i(6);
    _j.range, _k.range, l.range, m.range, _n.range, o.range, p.range;
}), d.register('bTXhG', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('bX0eN'),
        h = (0, g.default)(function(i) {
            i.setMonth(0, 1), i.setHours(0, 0, 0, 0);
        }, function(i, j) {
            i.setFullYear(i.getFullYear() + j);
        }, function(i, j) {
            return j.getFullYear() - i.getFullYear();
        }, function(i) {
            return i.getFullYear();
        });
    h.every = function(i) {
        return isFinite(i = Math.floor(i)) && i > 0 ? (0, g.default)(function(j) {
            j.setFullYear(Math.floor(j.getFullYear() / i) * i), j.setMonth(0, 1), j.setHours(0, 0, 0, 0);
        }, function(j, k) {
            j.setFullYear(j.getFullYear() + k * i);
        }) : null;
    };
    var _i = h;
    h.range;
}), d.register('31E4Q', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setUTCSeconds(0, 0);
        }, function(j, k) {
            j.setTime(+j + k * h.durationMinute);
        }, function(j, k) {
            return (k - j) / h.durationMinute;
        }, function(j) {
            return j.getUTCMinutes();
        }),
        _j = i;
    i.range;
}), d.register('C2NsO', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setUTCMinutes(0, 0, 0);
        }, function(j, k) {
            j.setTime(+j + k * h.durationHour);
        }, function(j, k) {
            return (k - j) / h.durationHour;
        }, function(j) {
            return j.getUTCHours();
        }),
        _j = i;
    i.range;
}), d.register('k9Yzx', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('bX0eN'),
        h = d('kLrP4'),
        i = (0, g.default)(function(j) {
            j.setUTCHours(0, 0, 0, 0);
        }, function(j, k) {
            j.setUTCDate(j.getUTCDate() + k);
        }, function(j, k) {
            return (k - j) / h.durationDay;
        }, function(j) {
            return j.getUTCDate() - 1;
        }),
        _j = i;
    i.range;
}), d.register('87MtP', function(e, f) {
    b(e.exports, 'utcSunday', function() {
        return _j;
    }), b(e.exports, 'utcMonday', function() {
        return _k;
    }), b(e.exports, 'utcThursday', function() {
        return _n;
    });
    var g = d('bX0eN'),
        h = d('kLrP4');

    function i(j) {
        return (0, g.default)(function(k) {
            k.setUTCDate(k.getUTCDate() - (k.getUTCDay() + 7 - j) % 7), k.setUTCHours(0, 0, 0, 0);
        }, function(k, l) {
            k.setUTCDate(k.getUTCDate() + 7 * l);
        }, function(k, l) {
            return (l - k) / h.durationWeek;
        });
    }
    var _j = i(0),
        _k = i(1),
        l = i(2),
        m = i(3),
        _n = i(4),
        o = i(5),
        p = i(6);
    _j.range, _k.range, l.range, m.range, _n.range, o.range, p.range;
}), d.register('xKcLs', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = (0, d('bX0eN').default)(function(h) {
            h.setUTCDate(1), h.setUTCHours(0, 0, 0, 0);
        }, function(h, i) {
            h.setUTCMonth(h.getUTCMonth() + i);
        }, function(h, i) {
            return i.getUTCMonth() - h.getUTCMonth() + 12 * (i.getUTCFullYear() - h.getUTCFullYear());
        }, function(h) {
            return h.getUTCMonth();
        }),
        _h = g;
    g.range;
}), d.register('rQp4j', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('bX0eN'),
        h = (0, g.default)(function(i) {
            i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
        }, function(i, j) {
            i.setUTCFullYear(i.getUTCFullYear() + j);
        }, function(i, j) {
            return j.getUTCFullYear() - i.getUTCFullYear();
        }, function(i) {
            return i.getUTCFullYear();
        });
    h.every = function(i) {
        return isFinite(i = Math.floor(i)) && i > 0 ? (0, g.default)(function(j) {
            j.setUTCFullYear(Math.floor(j.getUTCFullYear() / i) * i), j.setUTCMonth(0, 1), j.setUTCHours(0, 0, 0, 0);
        }, function(j, k) {
            j.setUTCFullYear(j.getUTCFullYear() + k * i);
        }) : null;
    };
    var _i = h;
    h.range;
}), d.register('57sno', function(e, f) {
    b(e.exports, 'timeFormat', function() {
        return _h;
    }), b(e.exports, 'utcFormat', function() {
        return _i;
    });
    var g, _h, _i, j, k = d('DWKC7');
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
}), d.register('DWKC7', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('ADG9b'),
        h = d('hBel9'),
        i = d('bTXhG'),
        j = d('k9Yzx'),
        k = d('87MtP'),
        l = d('rQp4j');

    function m(n) {
        if (0 <= n.y && n.y < 100) {
            var o = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
            return o.setFullYear(n.y), o;
        }
        return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }

    function n(o) {
        if (0 <= o.y && o.y < 100) {
            var p = new Date(Date.UTC(-1, o.m, o.d, o.H, o.M, o.S, o.L));
            return p.setUTCFullYear(o.y), p;
        }
        return new Date(Date.UTC(o.y, o.m, o.d, o.H, o.M, o.S, o.L));
    }

    function o(p, q, r) {
        return {
            y: p,
            m: q,
            d: r,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        };
    }

    function _p(q) {
        var r = q.dateTime,
            s = q.date,
            t = q.time,
            u = q.periods,
            v = q.days,
            w = q.shortDays,
            x = q.months,
            y = q.shortMonths,
            z = _w(u),
            A = _x(u),
            B = _w(v),
            C = _x(v),
            D = _w(w),
            E = _x(w),
            F = _w(x),
            G = _x(x),
            H = _w(y),
            I = _x(y),
            J = {
                a: function(K) {
                    return w[K.getDay()];
                },
                A: function(K) {
                    return v[K.getDay()];
                },
                b: function(K) {
                    return y[K.getMonth()];
                },
                B: function(K) {
                    return x[K.getMonth()];
                },
                c: null,
                d: _S,
                e: _S,
                f: _X,
                g: _hb,
                G: _jb,
                H: _T,
                I: _U,
                j: _V,
                L: _W,
                m: _Y,
                M: _Z,
                p: function(K) {
                    return u[+(K.getHours() >= 12)];
                },
                q: function(K) {
                    return 1 + ~~(K.getMonth() / 3);
                },
                Q: _Gb,
                s: _Hb,
                S: _$,
                u: _ab,
                U: _bb,
                V: _db,
                w: _eb,
                W: _fb,
                x: null,
                X: null,
                y: _gb,
                Y: _ib,
                Z: _kb,
                '%': _Fb
            },
            K = {
                a: function(L) {
                    return w[L.getUTCDay()];
                },
                A: function(L) {
                    return v[L.getUTCDay()];
                },
                b: function(L) {
                    return y[L.getUTCMonth()];
                },
                B: function(L) {
                    return x[L.getUTCMonth()];
                },
                c: null,
                d: _lb,
                e: _lb,
                f: _qb,
                g: _Bb,
                G: _Db,
                H: _mb,
                I: _nb,
                j: _ob,
                L: _pb,
                m: _rb,
                M: _sb,
                p: function(L) {
                    return u[+(L.getUTCHours() >= 12)];
                },
                q: function(L) {
                    return 1 + ~~(L.getUTCMonth() / 3);
                },
                Q: _Gb,
                s: _Hb,
                S: _tb,
                u: _ub,
                U: _vb,
                V: _xb,
                w: _yb,
                W: _zb,
                x: null,
                X: null,
                y: _Ab,
                Y: _Cb,
                Z: _Eb,
                '%': _Fb
            },
            L = {
                a: function(M, N, O) {
                    var P = D.exec(N.slice(O));
                    return P ? (M.w = E.get(P[0].toLowerCase()), O + P[0].length) : -1;
                },
                A: function(M, N, O) {
                    var P = B.exec(N.slice(O));
                    return P ? (M.w = C.get(P[0].toLowerCase()), O + P[0].length) : -1;
                },
                b: function(M, N, O) {
                    var P = H.exec(N.slice(O));
                    return P ? (M.m = I.get(P[0].toLowerCase()), O + P[0].length) : -1;
                },
                B: function(M, N, O) {
                    var P = F.exec(N.slice(O));
                    return P ? (M.m = G.get(P[0].toLowerCase()), O + P[0].length) : -1;
                },
                c: function(M, N, O) {
                    return _O(M, r, N, O);
                },
                d: _I,
                e: _I,
                f: _O,
                g: _E,
                G: _D,
                H: _K,
                I: _K,
                j: _J,
                L: _N,
                m: _H,
                M: _L,
                p: function(M, N, O) {
                    var P = z.exec(N.slice(O));
                    return P ? (M.p = A.get(P[0].toLowerCase()), O + P[0].length) : -1;
                },
                q: _G,
                Q: _Q,
                s: _R,
                S: _M,
                u: _z,
                U: _A,
                V: _B,
                w: _y,
                W: _C,
                x: function(M, N, O) {
                    return _O(M, s, N, O);
                },
                X: function(M, N, O) {
                    return _O(M, t, N, O);
                },
                y: _E,
                Y: _D,
                Z: _F,
                '%': _P
            };

        function M(N, O) {
            return function(P) {
                var Q, R, S, T = [],
                    U = -1,
                    V = 0,
                    W = N.length;
                for (P instanceof Date || (P = new Date(+P)); ++U < W;)
                    37 === N.charCodeAt(U) && (T.push(N.slice(V, U)), null != (R = _q[Q = N.charAt(++U)]) ? Q = N.charAt(++U) : R = 'e' === Q ? ' ' : '0', (S = O[Q]) && (Q = S(P, R)), T.push(Q), V = U + 1);
                return T.push(N.slice(V, U)), T.join('');
            };
        }

        function N(O, P) {
            return function(Q) {
                var R, S, T = o(1900, void 0, 1);
                if (_O(T, O, Q += '', 0) != Q.length)
                    return null;
                if ('Q' in T)
                    return new Date(T.Q);
                if ('s' in T)
                    return new Date(1000 * T.s + ('L' in T ? T.L : 0));
                if (P && !('Z' in T) && (T.Z = 0), 'p' in T && (T.H = T.H % 12 + 12 * T.p), void 0 === T.m && (T.m = 'q' in T ? T.q : 0), 'V' in T) {
                    if (T.V < 1 || T.V > 53)
                        return null;
                    'w' in T || (T.w = 1), 'Z' in T ? (S = (R = n(o(T.y, 0, 1))).getUTCDay(), R = S > 4 || 0 === S ? k.utcMonday.ceil(R) : (0, k.utcMonday)(R), R = j.default.offset(R, 7 * (T.V - 1)), T.y = R.getUTCFullYear(), T.m = R.getUTCMonth(), T.d = R.getUTCDate() + (T.w + 6) % 7) : (S = (R = m(o(T.y, 0, 1))).getDay(), R = S > 4 || 0 === S ? h.monday.ceil(R) : (0, h.monday)(R), R = g.default.offset(R, 7 * (T.V - 1)), T.y = R.getFullYear(), T.m = R.getMonth(), T.d = R.getDate() + (T.w + 6) % 7);
                } else
                    ('W' in T || 'U' in T) && ('w' in T || (T.w = 'u' in T ? T.u % 7 : 'W' in T ? 1 : 0), S = 'Z' in T ? n(o(T.y, 0, 1)).getUTCDay() : m(o(T.y, 0, 1)).getDay(), T.m = 0, T.d = 'W' in T ? (T.w + 6) % 7 + 7 * T.W - (S + 5) % 7 : T.w + 7 * T.U - (S + 6) % 7);
                return 'Z' in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, n(T)) : m(T);
            };
        }

        function _O(P, Q, R, S) {
            for (var T, U, V = 0, W = Q.length, X = R.length; V < W;) {
                if (S >= X)
                    return -1;
                if (37 === (T = Q.charCodeAt(V++))) {
                    if (T = Q.charAt(V++), !(U = L[T in _q ? Q.charAt(V++) : T]) || (S = U(P, R, S)) < 0)
                        return -1;
                } else if (T != R.charCodeAt(S++))
                    return -1;
            }
            return S;
        }
        return J.x = M(s, J), J.X = M(t, J), J.c = M(r, J), K.x = M(s, K), K.X = M(t, K), K.c = M(r, K), {
            format: function(P) {
                var Q = M(P += '', J);
                return Q.toString = function() {
                    return P;
                }, Q;
            },
            parse: function(P) {
                var Q = N(P += '', !1);
                return Q.toString = function() {
                    return P;
                }, Q;
            },
            utcFormat: function(P) {
                var Q = M(P += '', K);
                return Q.toString = function() {
                    return P;
                }, Q;
            },
            utcParse: function(P) {
                var Q = N(P += '', !0);
                return Q.toString = function() {
                    return P;
                }, Q;
            }
        };
    }
    var _q = {
            '-': '',
            _: ' ',
            0: '0'
        },
        r = /^\s*\d+/,
        s = /^%/,
        t = /[\\^$*+?|[\]().{}]/g;

    function u(v, w, x) {
        var y = v < 0 ? '-' : '',
            z = (y ? -v : v) + '',
            A = z.length;
        return y + (A < x ? new Array(x - A + 1).join(w) + z : z);
    }

    function v(w) {
        return w.replace(t, '\\$&');
    }

    function _w(x) {
        return new RegExp('^(?:' + x.map(v).join('|') + ')', 'i');
    }

    function _x(y) {
        return new Map(y.map((y, b) => [
            y.toLowerCase(),
            b
        ]));
    }

    function _y(z, A, B) {
        var C = r.exec(A.slice(B, B + 1));
        return C ? (z.w = +C[0], B + C[0].length) : -1;
    }

    function _z(A, B, C) {
        var D = r.exec(B.slice(C, C + 1));
        return D ? (A.u = +D[0], C + D[0].length) : -1;
    }

    function _A(B, C, D) {
        var E = r.exec(C.slice(D, D + 2));
        return E ? (B.U = +E[0], D + E[0].length) : -1;
    }

    function _B(C, D, E) {
        var F = r.exec(D.slice(E, E + 2));
        return F ? (C.V = +F[0], E + F[0].length) : -1;
    }

    function _C(D, E, F) {
        var G = r.exec(E.slice(F, F + 2));
        return G ? (D.W = +G[0], F + G[0].length) : -1;
    }

    function _D(E, F, G) {
        var H = r.exec(F.slice(G, G + 4));
        return H ? (E.y = +H[0], G + H[0].length) : -1;
    }

    function _E(F, G, H) {
        var I = r.exec(G.slice(H, H + 2));
        return I ? (F.y = +I[0] + (+I[0] > 68 ? 1900 : 2000), H + I[0].length) : -1;
    }

    function _F(G, H, I) {
        var J = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(H.slice(I, I + 6));
        return J ? (G.Z = J[1] ? 0 : -(J[2] + (J[3] || '00')), I + J[0].length) : -1;
    }

    function _G(H, I, J) {
        var K = r.exec(I.slice(J, J + 1));
        return K ? (H.q = 3 * K[0] - 3, J + K[0].length) : -1;
    }

    function _H(I, J, K) {
        var L = r.exec(J.slice(K, K + 2));
        return L ? (I.m = L[0] - 1, K + L[0].length) : -1;
    }

    function _I(J, K, L) {
        var M = r.exec(K.slice(L, L + 2));
        return M ? (J.d = +M[0], L + M[0].length) : -1;
    }

    function _J(K, L, M) {
        var N = r.exec(L.slice(M, M + 3));
        return N ? (K.m = 0, K.d = +N[0], M + N[0].length) : -1;
    }

    function _K(L, M, N) {
        var O = r.exec(M.slice(N, N + 2));
        return O ? (L.H = +O[0], N + O[0].length) : -1;
    }

    function _L(M, N, O) {
        var P = r.exec(N.slice(O, O + 2));
        return P ? (M.M = +P[0], O + P[0].length) : -1;
    }

    function _M(N, O, P) {
        var Q = r.exec(O.slice(P, P + 2));
        return Q ? (N.S = +Q[0], P + Q[0].length) : -1;
    }

    function _N(O, P, Q) {
        var R = r.exec(P.slice(Q, Q + 3));
        return R ? (O.L = +R[0], Q + R[0].length) : -1;
    }

    function _O(P, Q, R) {
        var S = r.exec(Q.slice(R, R + 6));
        return S ? (P.L = Math.floor(S[0] / 1000), R + S[0].length) : -1;
    }

    function _P(Q, R, S) {
        var T = s.exec(R.slice(S, S + 1));
        return T ? S + T[0].length : -1;
    }

    function _Q(R, S, T) {
        var U = r.exec(S.slice(T));
        return U ? (R.Q = +U[0], T + U[0].length) : -1;
    }

    function _R(S, T, U) {
        var V = r.exec(T.slice(U));
        return V ? (S.s = +V[0], U + V[0].length) : -1;
    }

    function _S(T, U) {
        return u(T.getDate(), U, 2);
    }

    function _T(U, V) {
        return u(U.getHours(), V, 2);
    }

    function _U(V, W) {
        return u(V.getHours() % 12 || 12, W, 2);
    }

    function _V(W, X) {
        return u(1 + g.default.count((0, i.default)(W), W), X, 3);
    }

    function _W(X, Y) {
        return u(X.getMilliseconds(), Y, 3);
    }

    function _X(Y, Z) {
        return _W(Y, Z) + '000';
    }

    function _Y(Z, $) {
        return u(Z.getMonth() + 1, $, 2);
    }

    function _Z($, ab) {
        return u($.getMinutes(), ab, 2);
    }

    function _$(ab, bb) {
        return u(ab.getSeconds(), bb, 2);
    }

    function _ab(bb) {
        var cb = bb.getDay();
        return 0 === cb ? 7 : cb;
    }

    function _bb(cb, db) {
        return u(h.sunday.count((0, i.default)(cb) - 1, cb), db, 2);
    }

    function cb(db) {
        var eb = db.getDay();
        return eb >= 4 || 0 === eb ? (0, h.thursday)(db) : h.thursday.ceil(db);
    }

    function _db(eb, fb) {
        return eb = cb(eb), u(h.thursday.count((0, i.default)(eb), eb) + (4 === (0, i.default)(eb).getDay()), fb, 2);
    }

    function _eb(fb) {
        return fb.getDay();
    }

    function _fb(gb, hb) {
        return u(h.monday.count((0, i.default)(gb) - 1, gb), hb, 2);
    }

    function _gb(hb, ib) {
        return u(hb.getFullYear() % 100, ib, 2);
    }

    function _hb(ib, jb) {
        return u((ib = cb(ib)).getFullYear() % 100, jb, 2);
    }

    function _ib(jb, kb) {
        return u(jb.getFullYear() % 10000, kb, 4);
    }

    function _jb(kb, lb) {
        var mb = kb.getDay();
        return u((kb = mb >= 4 || 0 === mb ? (0, h.thursday)(kb) : h.thursday.ceil(kb)).getFullYear() % 10000, lb, 4);
    }

    function _kb(lb) {
        var mb = lb.getTimezoneOffset();
        return (mb > 0 ? '-' : (mb *= -1, '+')) + u(mb / 60 | 0, '0', 2) + u(mb % 60, '0', 2);
    }

    function _lb(mb, nb) {
        return u(mb.getUTCDate(), nb, 2);
    }

    function _mb(nb, ob) {
        return u(nb.getUTCHours(), ob, 2);
    }

    function _nb(ob, pb) {
        return u(ob.getUTCHours() % 12 || 12, pb, 2);
    }

    function _ob(pb, qb) {
        return u(1 + j.default.count((0, l.default)(pb), pb), qb, 3);
    }

    function _pb(qb, rb) {
        return u(qb.getUTCMilliseconds(), rb, 3);
    }

    function _qb(rb, sb) {
        return _pb(rb, sb) + '000';
    }

    function _rb(sb, tb) {
        return u(sb.getUTCMonth() + 1, tb, 2);
    }

    function _sb(tb, ub) {
        return u(tb.getUTCMinutes(), ub, 2);
    }

    function _tb(ub, vb) {
        return u(ub.getUTCSeconds(), vb, 2);
    }

    function _ub(vb) {
        var wb = vb.getUTCDay();
        return 0 === wb ? 7 : wb;
    }

    function _vb(wb, xb) {
        return u(k.utcSunday.count((0, l.default)(wb) - 1, wb), xb, 2);
    }

    function wb(xb) {
        var yb = xb.getUTCDay();
        return yb >= 4 || 0 === yb ? (0, k.utcThursday)(xb) : k.utcThursday.ceil(xb);
    }

    function _xb(yb, zb) {
        return yb = wb(yb), u(k.utcThursday.count((0, l.default)(yb), yb) + (4 === (0, l.default)(yb).getUTCDay()), zb, 2);
    }

    function _yb(zb) {
        return zb.getUTCDay();
    }

    function _zb(Ab, Bb) {
        return u(k.utcMonday.count((0, l.default)(Ab) - 1, Ab), Bb, 2);
    }

    function _Ab(Bb, Cb) {
        return u(Bb.getUTCFullYear() % 100, Cb, 2);
    }

    function _Bb(Cb, Db) {
        return u((Cb = wb(Cb)).getUTCFullYear() % 100, Db, 2);
    }

    function _Cb(Db, Eb) {
        return u(Db.getUTCFullYear() % 10000, Eb, 4);
    }

    function _Db(Eb, Fb) {
        var Gb = Eb.getUTCDay();
        return u((Eb = Gb >= 4 || 0 === Gb ? (0, k.utcThursday)(Eb) : k.utcThursday.ceil(Eb)).getUTCFullYear() % 10000, Fb, 4);
    }

    function _Eb() {
        return '+0000';
    }

    function _Fb() {
        return '%';
    }

    function _Gb(Hb) {
        return +Hb;
    }

    function _Hb(Ib) {
        return Math.floor(+Ib / 1000);
    }
}), d.register('xW688', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('k9Yzx'),
        h = d('C2NsO'),
        i = d('31E4Q'),
        j = d('xKcLs'),
        k = d('0ixdr'),
        l = d('D2MRR'),
        m = d('87MtP'),
        n = d('rQp4j'),
        o = d('57sno'),
        p = d('2dEqb'),
        q = d('7bben');

    function _r() {
        return q.initRange.apply((0, p.calendar)(l.utcTicks, l.utcTickInterval, n.default, j.default, m.utcSunday, g.default, h.default, i.default, k.default, o.utcFormat).domain([
            Date.UTC(2000, 0, 1),
            Date.UTC(2000, 0, 2)
        ]), arguments);
    }
}), d.register('NrRHW', function(e, f) {
    b(e.exports, 'copy', function() {
        return _z;
    }), b(e.exports, 'default', function() {
        return _q;
    }), b(e.exports, 'sequentialLog', function() {
        return _r;
    }), b(e.exports, 'sequentialSymlog', function() {
        return _s;
    }), b(e.exports, 'sequentialPow', function() {
        return _t;
    }), b(e.exports, 'sequentialSqrt', function() {
        return _u;
    });
    var g = d('4+u8a'),
        h = d('23eaA'),
        i = d('wdLSO'),
        j = d('7bben'),
        k = d('smHnl'),
        l = d('wwKA7'),
        m = d('NLDjj'),
        n = d('neWRJ');

    function o() {
        var p, q, r, s, t, u = 0,
            v = 1,
            w = i.identity,
            x = !1;

        function y(z) {
            return null == z || isNaN(z = +z) ? t : w(0 === r ? 0.5 : (z = (s(z) - p) * r, x ? Math.max(0, Math.min(1, z)) : z));
        }

        function _z(A) {
            return function(B) {
                var C, D;
                return arguments.length ? ([E, F] = B, w = A(E, F), y) : [
                    w(0),
                    w(1)
                ];
            };
        }
        return y.domain = function(A) {
                return arguments.length ? ([B, C] = A, p = s(B = +B), q = s(C = +C), r = p === q ? 0 : 1 / (q - p), y) : [
                    B,
                    C
                ];
            }, y.clamp = function(A) {
                return arguments.length ? (x = !!A, y) : x;
            }, y.interpolator = function(A) {
                return arguments.length ? (w = A, y) : w;
            }, y.range = _z(g.default), y.rangeRound = _z(h.default), y.unknown = function(A) {
                return arguments.length ? (t = A, y) : t;
            },
            function(A) {
                return s = A, p = A(u), q = A(v), r = p === q ? 0 : 1 / (q - p), y;
            };
    }

    function p(q, r) {
        return r.domain(q.domain()).interpolator(q.interpolator()).clamp(q.clamp()).unknown(q.unknown());
    }

    function _q() {
        var r = (0, k.linearish)(o()(i.identity));
        return r.copy = function() {
            return p(r, _q());
        }, j.initInterpolator.apply(r, arguments);
    }

    function _r() {
        var s = (0, l.loggish)(o()).domain([
            1,
            10
        ]);
        return s.copy = function() {
            return p(s, _r()).base(s.base());
        }, j.initInterpolator.apply(s, arguments);
    }

    function _s() {
        var t = (0, m.symlogish)(o());
        return t.copy = function() {
            return p(t, _s()).constant(t.constant());
        }, j.initInterpolator.apply(t, arguments);
    }

    function _t() {
        var u = (0, n.powish)(o());
        return u.copy = function() {
            return p(u, _t()).exponent(u.exponent());
        }, j.initInterpolator.apply(u, arguments);
    }

    function _u() {
        return _t.apply(null, arguments).exponent(0.5);
    }
}), d.register('7RvAo', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('/XFPM'),
        h = d('zF3sh'),
        i = d('GS0lI'),
        j = d('wdLSO'),
        k = d('7bben');

    function _l() {
        var m = [],
            n = j.identity;

        function o(p) {
            if (null != p && !isNaN(p = +p))
                return n(((0, h.default)(m, p, 1) - 1) / (m.length - 1));
        }
        return o.domain = function(p) {
            if (!arguments.length)
                return m.slice();
            m = [];
            for (let q of p)
                null == q || isNaN(q = +q) || m.push(q);
            return m.sort(g.default), q;
        }, o.interpolator = function(p) {
            return arguments.length ? (n = p, o) : n;
        }, o.range = function() {
            return m.map((o, d) => n(d / (m.length - 1)));
        }, o.quantiles = function(p) {
            return Array.from({
                length: p + 1
            }, (o, d) => (0, i.default)(m, d / p));
        }, o.copy = function() {
            return _l(n).domain(m);
        }, k.initInterpolator.apply(o, arguments);
    }
}), d.register('GhhS5', function(e, f) {
    b(e.exports, 'default', function() {
        return _C;
    }), b(e.exports, 'divergingLog', function() {
        return _D;
    }), b(e.exports, 'divergingSymlog', function() {
        return _E;
    }), b(e.exports, 'divergingPow', function() {
        return _F;
    }), b(e.exports, 'divergingSqrt', function() {
        return _v;
    });
    var g = d('4+u8a'),
        h = d('23eaA'),
        i = d('QNfJ+'),
        j = d('wdLSO'),
        k = d('7bben'),
        l = d('smHnl'),
        m = d('wwKA7'),
        n = d('NrRHW'),
        o = d('NLDjj'),
        p = d('neWRJ');

    function q() {
        var r, s, t, u, v, w, x, y = 0,
            z = 0.5,
            A = 1,
            B = 1,
            _C = j.identity,
            _D = !1;

        function _E(F) {
            return isNaN(F = +F) ? x : (F = 0.5 + ((F = +w(F)) - s) * (B * F < B * s ? u : v), _C(_D ? Math.max(0, Math.min(1, F)) : F));
        }

        function _F(G) {
            return function(H) {
                var I, J, K;
                return arguments.length ? ([L, M, N] = H, _C = (0, i.default)(G, [
                    L,
                    M,
                    N
                ]), _E) : [
                    _C(0),
                    _C(0.5),
                    _C(1)
                ];
            };
        }
        return _E.domain = function(G) {
                return arguments.length ? ([H, I, J] = G, r = w(H = +H), s = w(I = +I), t = w(J = +J), u = r === s ? 0 : 0.5 / (s - r), v = s === t ? 0 : 0.5 / (t - s), B = s < r ? -1 : 1, _E) : [
                    H,
                    I,
                    J
                ];
            }, _E.clamp = function(G) {
                return arguments.length ? (_D = !!G, _E) : _D;
            }, _E.interpolator = function(G) {
                return arguments.length ? (_C = G, _E) : _C;
            }, _E.range = _F(g.default), _E.rangeRound = _F(h.default), _E.unknown = function(G) {
                return arguments.length ? (x = G, _E) : x;
            },
            function(G) {
                return w = G, r = G(y), s = G(z), t = G(A), u = r === s ? 0 : 0.5 / (s - r), v = s === t ? 0 : 0.5 / (t - s), B = s < r ? -1 : 1, _E;
            };
    }

    function r() {
        var s = (0, l.linearish)(q()(j.identity));
        return s.copy = function() {
            return (0, n.copy)(s, r());
        }, k.initInterpolator.apply(s, arguments);
    }

    function s() {
        var t = (0, m.loggish)(q()).domain([
            0.1,
            1,
            10
        ]);
        return t.copy = function() {
            return (0, n.copy)(t, s()).base(t.base());
        }, k.initInterpolator.apply(t, arguments);
    }

    function t() {
        var u = (0, o.symlogish)(q());
        return u.copy = function() {
            return (0, n.copy)(u, t()).constant(u.constant());
        }, k.initInterpolator.apply(u, arguments);
    }

    function u() {
        var v = (0, p.powish)(q());
        return v.copy = function() {
            return (0, n.copy)(v, u()).exponent(v.exponent());
        }, k.initInterpolator.apply(v, arguments);
    }

    function _v() {
        return u.apply(null, arguments).exponent(0.5);
    }
}), d.register('QNfJ+', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('4+u8a');

    function _h(i, j) {
        void 0 === j && (j = i, i = g.default);
        for (var k = 0, l = j.length - 1, m = j[0], n = new Array(l < 0 ? 0 : l); k < l;)
            n[k] = i(m, m = j[++k]);
        return function(o) {
            var p = Math.max(0, Math.min(l - 1, Math.floor(o *= l)));
            return n[p](o - p);
        };
    }
}), d.register('Q7nNA', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('eiH9U'),
        h = d('n7Dwj'),
        i = d('F+pD/'),
        j = d('0w2ds');

    function k(l, m) {
        return l[m];
    }

    function l(m) {
        const n = [];
        return n.key = m, n;
    }

    function _m() {
        var n = (0, h.default)([]),
            o = j.default,
            p = i.default,
            q = k;

        function r(s) {
            var t, u, v = Array.from(n.apply(this, arguments), l),
                w = v.length,
                x = -1;
            for (const y of s)
                for (t = 0, ++x; t < w; ++t)
                    (v[t][x] = [
                        0,
                        +q(y, v[t].key, x, s)
                    ]).data = y;
            for (t = 0, u = (0, g.default)(o(v)); t < w; ++t)
                v[u[t]].index = t;
            return p(v, u), v;
        }
        return r.keys = function(s) {
            return arguments.length ? (n = 'function' == typeof s ? s : (0, h.default)(Array.from(s)), r) : n;
        }, r.value = function(s) {
            return arguments.length ? (q = 'function' == typeof s ? s : (0, h.default)(+s), r) : q;
        }, r.order = function(s) {
            return arguments.length ? (o = null == s ? j.default : 'function' == typeof s ? s : (0, h.default)(Array.from(s)), r) : o;
        }, r.offset = function(s) {
            return arguments.length ? (p = null == s ? i.default : s, r) : p;
        }, r;
    }
}), d.register('eiH9U', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    Array.prototype.slice;

    function g(h) {
        return 'object' == typeof h && 'length' in h ? h : Array.from(h);
    }
}), d.register('n7Dwj', function(e, f) {
    function g(h) {
        return function() {
            return h;
        };
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('F+pD/', function(e, f) {
    function g(h, i) {
        if ((_l = h.length) > 1)
            for (var j, k, _l, m = 1, n = h[i[0]], o = n.length; m < _l; ++m)
                for (k = n, n = h[i[m]], j = 0; j < o; ++j)
                    n[j][1] += n[j][0] = isNaN(k[j][1]) ? k[j][0] : k[j][1];
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('0w2ds', function(e, f) {
    function g(h) {
        for (var i = h.length, j = new Array(i); --i >= 0;)
            j[i] = i;
        return j;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('PVS31', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('F+pD/');

    function _h(i, j) {
        if ((d = i.length) > 0) {
            for (var k, l, m, n = 0, o = i[0].length; n < o; ++n) {
                for (m = k = 0; k < l; ++k)
                    m += i[k][n][1] || 0;
                if (m)
                    for (k = 0; k < l; ++k)
                        i[k][n][1] /= m;
            }
            (0, g.default)(i, j);
        }
    }
}), d.register('RKpGZ', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('F+pD/');

    function _h(i, j) {
        if ((f = i.length) > 0) {
            for (var k, l = 0, m = i[j[0]], n = m.length; l < n; ++l) {
                for (var o = 0, p = 0; o < k; ++o)
                    p += i[o][l][1] || 0;
                m[l][1] += m[l][0] = -p / 2;
            }
            (0, g.default)(i, j);
        }
    }
}), d.register('ZcxdS', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('F+pD/');

    function _h(i, j) {
        if ((_h = i.length) > 0 && (d = (f = i[j[0]]).length) > 0) {
            for (var k, l, m, n = 0, o = 1; o < l; ++o) {
                for (var p = 0, q = 0, r = 0; p < m; ++p) {
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
}), d.register('wr7e+', function(e, f) {
    b(e.exports, 'Legend', function() {
        return _y;
    });
    var g = d('kwUzI'),
        h = d('obo8c'),
        i = d('O0Kav'),
        j = d('uUHd9'),
        k = d('cUlop');

    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }

    function m(n, o) {
        var p = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(n);
            o && (q = q.filter(function(r) {
                return Object.getOwnPropertyDescriptor(n, r).enumerable;
            })), p.push.apply(p, q);
        }
        return p;
    }

    function n(o) {
        for (var p = 1; p < arguments.length; p++) {
            var q = null != arguments[p] ? arguments[p] : {};
            p % 2 ? m(Object(q), !0).forEach(function(r) {
                _o(o, r, q[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(q)) : m(Object(q)).forEach(function(r) {
                Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(q, r));
            });
        }
        return o;
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
        if (!(q instanceof r))
            throw new TypeError('Cannot call a class as a function');
    }

    function q(r, s) {
        for (var t = 0; t < s.length; t++) {
            var u = s[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
        }
    }

    function r(s, t) {
        return r = Object.setPrototypeOf || function(u, v) {
            return u.__proto__ = v, u;
        }, r(s, t);
    }

    function s(t) {
        var u = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function() {
            var v, w = _u(t);
            if (u) {
                var x = _u(this).constructor;
                v = Reflect.construct(w, arguments, x);
            } else
                v = w.apply(this, arguments);
            return _t(this, v);
        };
    }

    function _t(u, v) {
        return !v || 'object' !== l(v) && 'function' != typeof v ? function(w) {
            if (void 0 === w)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return w;
        }(u) : v;
    }

    function _u(v) {
        return _u = Object.setPrototypeOf ? Object.getPrototypeOf : function(w) {
            return w.__proto__ || Object.getPrototypeOf(w);
        }, _u(v);
    }

    function v(w, x) {
        if (null == w)
            return {};
        var y, z, A = function(B, C) {
            if (null == B)
                return {};
            var D, E, F = {},
                G = Object.keys(B);
            for (E = 0; E < G.length; E++)
                D = G[E], C.indexOf(D) >= 0 || (F[D] = B[D]);
            return F;
        }(w, x);
        if (Object.getOwnPropertySymbols) {
            var B = Object.getOwnPropertySymbols(w);
            for (z = 0; z < B.length; z++)
                y = B[z], x.indexOf(y) >= 0 || Object.prototype.propertyIsEnumerable.call(w, y) && (A[y] = w[y]);
        }
        return A;
    }

    function w(x) {
        return x.value;
    }

    function x(y, z) {
        return !0 === y ? a(h)(z, w) : a(g)(y) ? a(h)(z, y) : z;
    }
    var _y = function(z) {
        ! function(A, B) {
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
            var F;
            p(this, E);
            for (var G = arguments.length, H = new Array(G), I = 0; I < G; I++)
                H[I] = arguments[I];
            return (F = D.call.apply(D, [this].concat(H))).wrapperNode = void 0, F.state = {
                boxWidth: -1,
                boxHeight: -1
            }, F;
        }
        return A = E, C = [{
            key: 'getWithHeight',
            value: function(F, G) {
                var H = F.props.layout;
                return 'vertical' === H && (0, k.isNumber)(F.props.height) ? {
                    height: F.props.height
                } : 'horizontal' === H ? {
                    width: F.props.width || G
                } : null;
            }
        }], (B = [{
                key: 'componentDidMount',
                value: function() {
                    this.updateBBox();
                }
            },
            {
                key: 'componentDidUpdate',
                value: function() {
                    this.updateBBox();
                }
            },
            {
                key: 'getBBox',
                value: function() {
                    return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null;
                }
            },
            {
                key: 'getBBoxSnapshot',
                value: function() {
                    var F = this.state,
                        G = F.boxWidth,
                        H = F.boxHeight;
                    return G >= 0 && H >= 0 ? {
                        width: G,
                        height: H
                    } : null;
                }
            },
            {
                key: 'getDefaultPosition',
                value: function(F) {
                    var G, H, I = this.props,
                        J = I.layout,
                        K = I.align,
                        L = I.verticalAlign,
                        M = I.margin,
                        N = I.chartWidth,
                        O = I.chartHeight;
                    return F && (void 0 !== F.left && null !== F.left || void 0 !== F.right && null !== F.right) || (G = 'center' === K && 'vertical' === J ? {
                        left: ((N || 0) - (this.getBBoxSnapshot() || {
                            width: 0
                        }).width) / 2
                    } : 'right' === K ? {
                        right: M && M.right || 0
                    } : {
                        left: M && M.left || 0
                    }), F && (void 0 !== F.top && null !== F.top || void 0 !== F.bottom && null !== F.bottom) || (H = 'middle' === L ? {
                        top: ((O || 0) - (this.getBBoxSnapshot() || {
                            height: 0
                        }).height) / 2
                    } : 'bottom' === L ? {
                        bottom: M && M.bottom || 0
                    } : {
                        top: M && M.top || 0
                    }), n(n({}, G), H);
                }
            },
            {
                key: 'updateBBox',
                value: function() {
                    var F = this.state,
                        G = F.boxWidth,
                        H = F.boxHeight,
                        I = this.props.onBBoxUpdate;
                    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var J = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(J.width - G) > 1 || Math.abs(J.height - H) > 1) && this.setState({
                            boxWidth: J.width,
                            boxHeight: J.height
                        }, function() {
                            I && I(J);
                        });
                    } else
                        -
                        1 === G && -1 === H || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, function() {
                            I && I(null);
                        });
                }
            },
            {
                key: 'render',
                value: function() {
                    var F = this,
                        G = this.props,
                        H = G.content,
                        I = G.width,
                        J = G.height,
                        K = G.wrapperStyle,
                        L = G.payloadUniqBy,
                        M = G.payload,
                        N = n(n({
                            position: 'absolute',
                            width: I || 'auto',
                            height: J || 'auto'
                        }, this.getDefaultPosition(K)), K);
                    return a(i).createElement('div', {
                        className: 'recharts-legend-wrapper',
                        style: N,
                        ref: function(O) {
                            F.wrapperNode = O;
                        }
                    }, function(O, P) {
                        if (a(i).isValidElement(O))
                            return a(i).cloneElement(O, P);
                        if (a(g)(O))
                            return a(i).createElement(O, P);
                        P.ref;
                        var Q = v(P, ['ref']);
                        return a(i).createElement(j.DefaultLegendContent, Q);
                    }(H, n(n({}, this.props), {}, {
                        payload: x(L, M)
                    })));
                }
            }
        ]) && q(A.prototype, B), C && q(A, C), E;
    }(i.PureComponent);
    _y.displayName = 'Legend', _y.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    };
}), d.register('obo8c', function(e, f) {
    var g = d('JIf8c'),
        h = d('XlmwI');
    e.exports = function(i, j) {
        return i && i.length ? h(i, g(j, 2)) : [];
    };
}), d.register('XlmwI', function(e, f) {
    var g = d('I/KJh'),
        h = d('a3k+z'),
        i = d('KVXKU'),
        j = d('IWnL60'),
        k = d('KgB43'),
        l = d('Y5PW40');
    e.exports = function(m, n, o) {
        var p = -1,
            q = h,
            r = m.length,
            s = !0,
            t = [],
            u = t;
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
                var v = m[p],
                    w = n ? n(v) : v;
                if (v = o || 0 !== v ? v : 0, s && w == w) {
                    for (var x = u.length; x--;)
                        if (u[x] === w)
                            continue t;
                    n && u.push(w), t.push(v);
                } else
                    q(u, w, o) || (u !== t && u.push(w), t.push(v));
            }
        return t;
    };
}), d.register('a3k+z', function(e, f) {
    var g = d('g6wdH');
    e.exports = function(h, i) {
        return !!(null == h ? 0 : h.length) && g(h, i, 0) > -1;
    };
}), d.register('g6wdH', function(e, f) {
    var g = d('Eokem'),
        h = d('vIp0b0'),
        i = d('JlAKI');
    e.exports = function(j, k, l) {
        return k == k ? i(j, k, l) : g(j, h, l);
    };
}), d.register('Eokem', function(e, f) {
    e.exports = function(g, h, i, j) {
        for (var k = g.length, l = i + (j ? 1 : -1); j ? l-- : ++l < k;)
            if (h(g[l], l, g))
                return l;
        return -1;
    };
}), d.register('vIp0b0', function(e, f) {
    e.exports = function(g) {
        return g != g;
    };
}), d.register('JlAKI', function(e, f) {
    e.exports = function(g, h, i) {
        for (var j = i - 1, k = g.length; ++j < k;)
            if (g[j] === h)
                return j;
        return -1;
    };
}), d.register('KVXKU', function(e, f) {
    e.exports = function(g, h, i) {
        for (var j = -1, k = null == g ? 0 : g.length; ++j < k;)
            if (i(h, g[j]))
                return !0;
        return !1;
    };
}), d.register('KgB43', function(e, f) {
    var g = d('KxC2b'),
        h = d('YWo/b0'),
        i = d('Y5PW40'),
        j = g && 1 / i(new g([,
            -0
        ]))[1] == 1 / 0 ? function(k) {
            return new g(k);
        } : h;
    e.exports = j;
}), d.register('YWo/b0', function(e, f) {
    e.exports = function() {};
}), d.register('uUHd9', function(e, f) {
    b(e.exports, 'DefaultLegendContent', function() {
        return _w;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('IOIhL'),
        j = d('Ph7jV'),
        k = d('3mYHS');

    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }

    function m() {
        return m = Object.assign || function(n) {
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
            p && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(o, s).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }

    function p(q, r) {
        if (!(q instanceof r))
            throw new TypeError('Cannot call a class as a function');
    }

    function q(r, s) {
        for (var t = 0; t < s.length; t++) {
            var u = s[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
        }
    }

    function r(s, t) {
        return r = Object.setPrototypeOf || function(u, v) {
            return u.__proto__ = v, u;
        }, r(s, t);
    }

    function s(t) {
        var u = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function() {
            var v, w = _u(t);
            if (u) {
                var x = _u(this).constructor;
                v = Reflect.construct(w, arguments, x);
            } else
                v = w.apply(this, arguments);
            return _t(this, v);
        };
    }

    function _t(u, v) {
        return !v || 'object' !== l(v) && 'function' != typeof v ? function(w) {
            if (void 0 === w)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return w;
        }(u) : v;
    }

    function _u(v) {
        return _u = Object.setPrototypeOf ? Object.getPrototypeOf : function(w) {
            return w.__proto__ || Object.getPrototypeOf(w);
        }, _u(v);
    }
    var v = 32,
        _w = function(x) {
            ! function(y, z) {
                if ('function' != typeof z && null !== z)
                    throw new TypeError('Super expression must either be null or a function');
                y.prototype = Object.create(z && z.prototype, {
                    constructor: {
                        value: y,
                        writable: !0,
                        configurable: !0
                    }
                }), z && r(y, z);
            }(_t, x);
            var y, z, A, B = s(_t);

            function C() {
                return p(this, C), B.apply(this, arguments);
            }
            return y = C, z = [{
                    key: 'renderIcon',
                    value: function(D) {
                        var E = this.props.inactiveColor,
                            F = 16,
                            G = 5.333333333333333,
                            H = 10.666666666666666,
                            I = D.inactive ? E : D.color;
                        if ('plainline' === D.type)
                            return a(g).createElement('line', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: I,
                                strokeDasharray: D.payload.strokeDasharray,
                                x1: 0,
                                y1: F,
                                x2: v,
                                y2: F,
                                className: 'recharts-legend-icon'
                            });
                        if ('line' === D.type)
                            return a(g).createElement('path', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: I,
                                d: 'M0,'.concat(F, 'h').concat(H, '\n            A').concat(G, ',').concat(G, ',0,1,1,').concat(2 * H, ',').concat(F, '\n            H').concat(v, 'M').concat(2 * H, ',').concat(F, '\n            A').concat(G, ',').concat(G, ',0,1,1,').concat(H, ',').concat(F),
                                className: 'recharts-legend-icon'
                            });
                        if ('rect' === D.type)
                            return a(g).createElement('path', {
                                stroke: 'none',
                                fill: I,
                                d: 'M0,'.concat(4, 'h').concat(v, 'v').concat(24, 'h').concat(-32, 'z'),
                                className: 'recharts-legend-icon'
                            });
                        if (a(g).isValidElement(D.legendIcon)) {
                            var J = function(K) {
                                for (var L = 1; L < arguments.length; L++) {
                                    var M = null != arguments[L] ? arguments[L] : {};
                                    L % 2 ? n(Object(M), !0).forEach(function(N) {
                                        o(K, N, M[N]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(M)) : n(Object(M)).forEach(function(N) {
                                        Object.defineProperty(K, N, Object.getOwnPropertyDescriptor(M, N));
                                    });
                                }
                                return K;
                            }({}, D);
                            return delete J.legendIcon, a(g).cloneElement(D.legendIcon, J);
                        }
                        return a(g).createElement(j.Symbols, {
                            fill: I,
                            cx: F,
                            cy: F,
                            size: v,
                            sizeType: 'diameter',
                            type: D.type
                        });
                    }
                },
                {
                    key: 'renderItems',
                    value: function() {
                        var D = this,
                            E = this.props,
                            F = E.payload,
                            G = E.iconSize,
                            H = E.layout,
                            I = E.formatter,
                            J = E.inactiveColor,
                            K = {
                                x: 0,
                                y: 0,
                                width: v,
                                height: v
                            },
                            L = {
                                display: 'horizontal' === H ? 'inline-block' : 'block',
                                marginRight: 10
                            },
                            M = {
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                marginRight: 4
                            };
                        return F.map(function(N, O) {
                            var P, Q = N.formatter || I,
                                R = a(h)((o(P = {
                                    'recharts-legend-item': !0
                                }, 'legend-item-'.concat(O), !0), o(P, 'inactive', N.inactive), P));
                            if ('none' === N.type)
                                return null;
                            var S = N.inactive ? J : N.color;
                            return a(g).createElement('li', m({
                                className: R,
                                style: L,
                                key: 'legend-item-'.concat(O)
                            }, (0, k.adaptEventsOfChild)(D.props, N, O)), a(g).createElement(i.Surface, {
                                width: G,
                                height: G,
                                viewBox: K,
                                style: M
                            }, D.renderIcon(N)), a(g).createElement('span', {
                                className: 'recharts-legend-item-text',
                                style: {
                                    color: S
                                }
                            }, Q ? Q(N.value, N, O) : N.value));
                        });
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var D = this.props,
                            E = D.payload,
                            F = D.layout,
                            G = D.align;
                        if (!E || !E.length)
                            return null;
                        var H = {
                            padding: 0,
                            margin: 0,
                            textAlign: 'horizontal' === F ? G : 'left'
                        };
                        return a(g).createElement('ul', {
                            className: 'recharts-default-legend',
                            style: H
                        }, this.renderItems());
                    }
                }
            ], z && q(y.prototype, z), A && q(y, A), C;
        }(g.PureComponent);
    _w.displayName = 'Legend', _w.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc'
    };
}), d.register('IOIhL', function(e, f) {
    b(e.exports, 'Surface', function() {
        return _l;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('3mYHS');

    function j() {
        return j = Object.assign || function(k) {
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
        var n, o, p = function(q, r) {
            if (null == q)
                return {};
            var s, t, u = {},
                v = Object.keys(q);
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

    function _l(m) {
        var n = m.children,
            o = m.width,
            p = m.height,
            q = m.viewBox,
            r = m.className,
            s = m.style,
            t = k(m, [
                'children',
                'width',
                'height',
                'viewBox',
                'className',
                'style'
            ]),
            u = q || {
                width: o,
                height: p,
                x: 0,
                y: 0
            },
            v = a(h)('recharts-surface', r);
        return a(g).createElement('svg', j({}, (0, i.filterProps)(t, !0, !0), {
            className: v,
            width: o,
            height: p,
            style: s,
            viewBox: ''.concat(u.x, ' ').concat(u.y, ' ').concat(u.width, ' ').concat(u.height),
            version: '1.1'
        }), a(g).createElement('title', null, m.title), a(g).createElement('desc', null, m.desc), n);
    }
}), d.register('Ph7jV', function(e, f) {
    b(e.exports, 'Symbols', function() {
        return _C;
    });
    var g = d('v36TS'),
        h = d('O0Kav'),
        i = d('wiOkI'),
        j = d('76q90'),
        k = d('rMmDK'),
        l = d('01na+'),
        m = d('H87cX'),
        n = d('7hGxQ'),
        o = d('4B5E2'),
        p = d('Gr63Q'),
        q = d('/U36/'),
        r = d('3mYHS');

    function s(t) {
        return s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(u) {
            return typeof u;
        } : function(u) {
            return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
        }, s(t);
    }

    function t() {
        return t = Object.assign || function(u) {
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

    function w(x, y) {
        return w = Object.setPrototypeOf || function(z, A) {
            return z.__proto__ = A, z;
        }, w(x, y);
    }

    function x(y) {
        var z = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (y) {
                return !1;
            }
        }();
        return function() {
            var A, B = _z(y);
            if (z) {
                var C = _z(this).constructor;
                A = Reflect.construct(B, arguments, C);
            } else
                A = B.apply(this, arguments);
            return _y(this, A);
        };
    }

    function _y(z, A) {
        return !A || 'object' !== s(A) && 'function' != typeof A ? function(B) {
            if (void 0 === B)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return B;
        }(z) : A;
    }

    function _z(A) {
        return _z = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
            return B.__proto__ || Object.getPrototypeOf(B);
        }, _z(A);
    }
    var A = {
            symbolCircle: j.default,
            symbolCross: k.default,
            symbolDiamond: l.default,
            symbolSquare: m.default,
            symbolStar: n.default,
            symbolTriangle: o.default,
            symbolWye: p.default
        },
        B = Math.PI / 180,
        _C = function(D) {
            ! function(E, F) {
                if ('function' != typeof F && null !== F)
                    throw new TypeError('Super expression must either be null or a function');
                E.prototype = Object.create(F && F.prototype, {
                    constructor: {
                        value: E,
                        writable: !0,
                        configurable: !0
                    }
                }), F && w(E, F);
            }(l, D);
            var E, F, G, H = x(l);

            function I() {
                return u(this, I), H.apply(this, arguments);
            }
            return E = I, (F = [{
                    key: 'getPath',
                    value: function() {
                        var J = this.props,
                            K = J.size,
                            L = J.sizeType,
                            M = J.type,
                            N = function(O) {
                                var P = 'symbol'.concat(a(g)(O));
                                return A[P] || j.default;
                            }(M),
                            O = (0, i.default)().type(N).size(function(P, Q, R) {
                                if ('area' === Q)
                                    return P;
                                switch (R) {
                                    case 'cross':
                                        return 5 * P * P / 9;
                                    case 'diamond':
                                        return 0.5 * P * P / Math.sqrt(3);
                                    case 'square':
                                        return P * P;
                                    case 'star':
                                        var S = 18 * B;
                                        return 1.25 * P * P * (Math.tan(S) - Math.tan(2 * S) * Math.pow(Math.tan(S), 2));
                                    case 'triangle':
                                        return Math.sqrt(3) * P * P / 4;
                                    case 'wye':
                                        return (21 - 10 * Math.sqrt(3)) * P * P / 8;
                                    default:
                                        return Math.PI * P * P / 4;
                                }
                            }(K, L, M));
                        return O();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var J = this.props,
                            K = J.className,
                            L = J.cx,
                            M = J.cy,
                            N = J.size;
                        return L === +L && M === +M && N === +N ? a(h).createElement('path', t({}, (0, r.filterProps)(this.props, !0), {
                            className: a(q)('recharts-symbols', K),
                            transform: 'translate('.concat(L, ', ').concat(M, ')'),
                            d: this.getPath()
                        })) : null;
                    }
                }
            ]) && v(E.prototype, F), G && v(E, G), I;
        }(h.PureComponent);
    _C.defaultProps = {
        type: 'circle',
        size: 64,
        sizeType: 'area'
    }, _C.registerSymbol = function(D, E) {
        A['symbol'.concat(a(g)(D))] = E;
    };
}), d.register('wiOkI', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('YTZPw'),
        h = d('76q90'),
        i = d('rMmDK'),
        j = d('01na+'),
        k = d('7hGxQ'),
        l = d('H87cX'),
        m = d('4B5E2'),
        n = d('Gr63Q'),
        o = d('n7Dwj');
    h.default, i.default, j.default, l.default, k.default, m.default, n.default;

    function _p(q, r) {
        var s = null;

        function t() {
            var u;
            if (s || (s = u = (0, g.default)()), q.apply(this, arguments).draw(s, +r.apply(this, arguments)), u)
                return s = null, u + '' || null;
        }
        return q = 'function' == typeof q ? q : (0, o.default)(q || h.default), r = 'function' == typeof r ? r : (0, o.default)(void 0 === r ? 64 : +r), t.type = function(u) {
            return arguments.length ? (q = 'function' == typeof u ? u : (0, o.default)(u), t) : q;
        }, t.size = function(u) {
            return arguments.length ? (r = 'function' == typeof u ? u : (0, o.default)(+u), t) : r;
        }, t.context = function(u) {
            return arguments.length ? (s = null == u ? null : u, t) : s;
        }, t;
    }
}), d.register('YTZPw', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    const g = Math.PI,
        h = 2 * g,
        i = 0.000001,
        j = h - i;

    function k() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = '';
    }

    function l() {
        return new k();
    }
    k.prototype = l.prototype = {
        constructor: k,
        moveTo: function(m, n) {
            this._ += 'M' + (this._x0 = this._x1 = +m) + ',' + (this._y0 = this._y1 = +n);
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += 'Z');
        },
        lineTo: function(m, n) {
            this._ += 'L' + (this._x1 = +m) + ',' + (this._y1 = +n);
        },
        quadraticCurveTo: function(m, n, o, p) {
            this._ += 'Q' + +m + ',' + +n + ',' + (this._x1 = +o) + ',' + (this._y1 = +p);
        },
        bezierCurveTo: function(m, n, o, p, q, r) {
            this._ += 'C' + +m + ',' + +n + ',' + +o + ',' + +p + ',' + (this._x1 = +q) + ',' + (this._y1 = +r);
        },
        arcTo: function(m, n, o, p, q) {
            m = +m, n = +n, o = +o, p = +p, q = +q;
            var r = this._x1,
                s = this._y1,
                _t = o - m,
                u = p - n,
                v = r - m,
                w = s - n,
                x = v * v + w * w;
            if (q < 0)
                throw new Error('negative radius: ' + q);
            if (null === this._x1)
                this._ += 'M' + (this._x1 = m) + ',' + (this._y1 = n);
            else if (x > i)
                if (Math.abs(w * _t - u * v) > i && q) {
                    var y = o - r,
                        z = p - s,
                        A = _t * _t + u * u,
                        B = y * y + z * z,
                        C = Math.sqrt(A),
                        D = Math.sqrt(x),
                        E = q * Math.tan((g - Math.acos((A + x - B) / (2 * C * D))) / 2),
                        F = E / D,
                        G = E / C;
                    Math.abs(F - 1) > i && (this._ += 'L' + (m + F * v) + ',' + (n + F * w)), this._ += 'A' + q + ',' + q + ',0,0,' + +(w * y > v * z) + ',' + (this._x1 = m + G * _t) + ',' + (this._y1 = n + G * u);
                } else
                    this._ += 'L' + (this._x1 = m) + ',' + (this._y1 = n);
            else;
        },
        arc: function(m, n, o, p, q, r) {
            m = +m, n = +n, r = !!r;
            var s = (o = +o) * Math.cos(p),
                t = o * Math.sin(p),
                u = m + s,
                v = n + t,
                w = 1 ^ r,
                x = r ? p - q : q - p;
            if (o < 0)
                throw new Error('negative radius: ' + o);
            null === this._x1 ? this._ += 'M' + u + ',' + v : (Math.abs(this._x1 - u) > i || Math.abs(this._y1 - v) > i) && (this._ += 'L' + u + ',' + v), o && (x < 0 && (x = x % h + h), x > j ? this._ += 'A' + o + ',' + o + ',0,1,' + w + ',' + (m - s) + ',' + (n - t) + 'A' + o + ',' + o + ',0,1,' + w + ',' + (this._x1 = u) + ',' + (this._y1 = v) : x > i && (this._ += 'A' + o + ',' + o + ',0,' + +(x >= g) + ',' + w + ',' + (this._x1 = m + o * Math.cos(q)) + ',' + (this._y1 = n + o * Math.sin(q))));
        },
        rect: function(m, n, o, p) {
            this._ += 'M' + (this._x0 = this._x1 = +m) + ',' + (this._y0 = this._y1 = +n) + 'h' + +o + 'v' + +p + 'h' + -o + 'Z';
        },
        toString: function() {
            return this._;
        }
    };
    var m = l;
}), d.register('76q90', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('xvVcj'),
        _h = {
            draw: function(i, j) {
                var k = Math.sqrt(j / g.pi);
                i.moveTo(k, 0), i.arc(0, 0, k, 0, g.tau);
            }
        };
}), d.register('xvVcj', function(e, f) {
    b(e.exports, 'pi', function() {
        return d;
    }), b(e.exports, 'tau', function() {
        return _h;
    });
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var g = Math.PI,
        _h = 2 * g;
}), d.register('rMmDK', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
        draw: function(h, i) {
            var j = Math.sqrt(i / 5) / 2;
            h.moveTo(-3 * j, -j), h.lineTo(-j, -j), h.lineTo(-j, -3 * j), h.lineTo(j, -3 * j), h.lineTo(j, -j), h.lineTo(3 * j, -j), h.lineTo(3 * j, j), h.lineTo(j, j), h.lineTo(j, 3 * j), h.lineTo(-j, 3 * j), h.lineTo(-j, j), h.lineTo(-3 * j, j), h.closePath();
        }
    };
}), d.register('01na+', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = Math.sqrt(1 / 3),
        h = 2 * g,
        _i = {
            draw: function(j, k) {
                var l = Math.sqrt(k / h),
                    m = l * g;
                j.moveTo(0, -l), j.lineTo(m, 0), j.lineTo(0, l), j.lineTo(-m, 0), j.closePath();
            }
        };
}), d.register('7hGxQ', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('xvVcj'),
        h = Math.sin(g.pi / 10) / Math.sin(7 * g.pi / 10),
        i = Math.sin(g.tau / 10) * h,
        j = -Math.cos(g.tau / 10) * h,
        _k = {
            draw: function(l, m) {
                var n = Math.sqrt(0.8908130915292852 * m),
                    o = i * n,
                    p = j * n;
                l.moveTo(0, -n), l.lineTo(o, p);
                for (var q = 1; q < 5; ++q) {
                    var r = g.tau * q / 5,
                        s = Math.cos(r),
                        t = Math.sin(r);
                    l.lineTo(t * n, -s * n), l.lineTo(s * o - t * p, t * o + s * p);
                }
                l.closePath();
            }
        };
}), d.register('H87cX', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
        draw: function(h, i) {
            var j = Math.sqrt(i),
                k = -j / 2;
            h.rect(k, k, j, j);
        }
    };
}), d.register('4B5E2', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = Math.sqrt(3),
        _h = {
            draw: function(i, j) {
                var k = -Math.sqrt(j / (3 * g));
                i.moveTo(0, 2 * k), i.lineTo(-g * k, -k), i.lineTo(g * k, -k), i.closePath();
            }
        };
}), d.register('Gr63Q', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = -0.5,
        h = Math.sqrt(3) / 2,
        i = 1 / Math.sqrt(12),
        j = 3 * (i / 2 + 1),
        _k = {
            draw: function(l, m) {
                var n = Math.sqrt(m / j),
                    o = n / 2,
                    p = n * i,
                    q = o,
                    r = n * i + n,
                    s = -q,
                    t = r;
                l.moveTo(o, p), l.lineTo(q, r), l.lineTo(s, t), l.lineTo(g * o - h * p, h * o + g * p), l.lineTo(g * q - h * r, h * q + g * r), l.lineTo(g * s - h * t, h * s + g * t), l.lineTo(g * o + h * p, g * p - h * o), l.lineTo(g * q + h * r, g * r - h * q), l.lineTo(g * s + h * t, g * t - h * s), l.closePath();
            }
        };
}), d.register('p+Ndh', function(e, f) {
    b(e.exports, 'BarChart', function() {
        return _l;
    });
    var g = d('GQArm'),
        h = d('ShGdc'),
        i = d('Afqjn'),
        j = d('pMd/u'),
        k = d('hSdFZ'),
        _l = (0, g.generateCategoricalChart)({
            chartName: 'BarChart',
            GraphicalChild: h.Bar,
            defaultTooltipEventType: 'axis',
            validateTooltipEventTypes: [
                'axis',
                'item'
            ],
            axisComponents: [{
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
}), d.register('GQArm', function(e, f) {
    b(e.exports, 'generateCategoricalChart', function() {
        return _mb;
    });
    var g = d('Ivp/C'),
        h = d('W1zb8'),
        i = d('kwUzI'),
        j = d('DNB+2'),
        k = d('0WHNs'),
        l = d('MsaPk'),
        m = d('X3YvP'),
        n = d('lAmnl'),
        o = d('VBeWX'),
        p = d('Tvpkn0'),
        q = d('O0Kav'),
        r = d('/U36/'),
        s = d('IOIhL'),
        t = d('mzVm0'),
        u = d('By6Bp'),
        v = d('wr7e+'),
        w = d('dk8OI'),
        x = d('6PVsb'),
        y = d('EgZ6Y'),
        z = d('bU6S4'),
        A = d('50CUY'),
        B = d('1aRlp'),
        C = d('Ayvzs'),
        D = d('YE7BT'),
        E = d('dq5ch'),
        F = d('cUlop'),
        G = d('Yv4x1'),
        H = d('9smbJ'),
        I = d('sJtfb'),
        J = d('5NNbF'),
        K = d('F9VSb'),
        L = d('3mYHS');

    function M(N) {
        return M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(O) {
            return typeof O;
        } : function(O) {
            return O && 'function' == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? 'symbol' : typeof O;
        }, M(N);
    }

    function N(O, P) {
        return function(Q) {
            if (Array.isArray(Q))
                return Q;
        }(O) || function(Q, R) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(Q)))
                return;
            var S = [],
                T = !0,
                U = !1,
                V = void 0;
            try {
                for (var W, X = Q[Symbol.iterator](); !(T = (W = X.next()).done) && (S.push(W.value), !R || S.length !== R); T = !0);
            } catch (Q) {
                U = !0, V = Q;
            } finally {
                try {
                    T || null == i.return || i.return();
                } finally {
                    if (U)
                        throw V;
                }
            }
            return S;
        }(O, P) || _X(O, P) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function O() {
        return O = Object.assign || function(P) {
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
        var S, T, U = function(V, W) {
            if (null == V)
                return {};
            var X, Y, Z = {},
                $ = Object.keys(V);
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

    function Q(R, S) {
        for (var T = 0; T < S.length; T++) {
            var U = S[T];
            U.enumerable = U.enumerable || !1, U.configurable = !0, 'value' in U && (U.writable = !0), Object.defineProperty(R, U.key, U);
        }
    }

    function R(S, T) {
        return R = Object.setPrototypeOf || function(U, V) {
            return U.__proto__ = V, U;
        }, R(S, T);
    }

    function S(T) {
        var U = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (T) {
                return !1;
            }
        }();
        return function() {
            var V, W = _V(T);
            if (U) {
                var X = _V(this).constructor;
                V = Reflect.construct(W, arguments, X);
            } else
                V = W.apply(this, arguments);
            return _T(this, V);
        };
    }

    function _T(U, V) {
        return !V || 'object' !== M(V) && 'function' != typeof V ? _U(U) : V;
    }

    function _U(V) {
        if (void 0 === V)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return V;
    }

    function _V(W) {
        return _V = Object.setPrototypeOf ? Object.getPrototypeOf : function(X) {
            return X.__proto__ || Object.getPrototypeOf(X);
        }, _V(W);
    }

    function W(X) {
        return function(Y) {
            if (Array.isArray(Y))
                return _Y(Y);
        }(X) || function(Y) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(Y))
                return Array.from(Y);
        }(X) || _X(X) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _X(Y, Z) {
        if (Y) {
            if ('string' == typeof Y)
                return _Y(Y, Z);
            var $ = Object.prototype.toString.call(Y).slice(8, -1);
            return 'Object' === $ && Y.constructor && ($ = Y.constructor.name), 'Map' === $ || 'Set' === $ ? Array.from(Y) : 'Arguments' === $ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($) ? _Y(Y, Z) : void 0;
        }
    }

    function _Y(Z, $) {
        (null == $ || $ > Z.length) && ($ = Z.length);
        for (var ab = 0, bb = new Array($); ab < $; ab++)
            bb[ab] = Z[ab];
        return bb;
    }

    function Z($, ab) {
        var bb = Object.keys($);
        if (Object.getOwnPropertySymbols) {
            var cb = Object.getOwnPropertySymbols($);
            ab && (cb = cb.filter(function(db) {
                return Object.getOwnPropertyDescriptor($, db).enumerable;
            })), bb.push.apply(bb, cb);
        }
        return bb;
    }

    function $(ab) {
        for (var bb = 1; bb < arguments.length; bb++) {
            var cb = null != arguments[bb] ? arguments[bb] : {};
            bb % 2 ? Z(Object(cb), !0).forEach(function(db) {
                _ab(ab, db, cb[db]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ab, Object.getOwnPropertyDescriptors(cb)) : Z(Object(cb)).forEach(function(db) {
                Object.defineProperty(ab, db, Object.getOwnPropertyDescriptor(cb, db));
            });
        }
        return ab;
    }

    function _ab(bb, cb, db) {
        return cb in bb ? Object.defineProperty(bb, cb, {
            value: db,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : bb[cb] = db, bb;
    }
    var bb = {
            xAxis: [
                'bottom',
                'top'
            ],
            yAxis: [
                'left',
                'right'
            ]
        },
        cb = {
            x: 0,
            y: 0
        },
        db = Number.isFinite ? Number.isFinite : isFinite,
        eb = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : 'function' == typeof setImmediate ? setImmediate : setTimeout,
        fb = 'function' == typeof cancelAnimationFrame ? cancelAnimationFrame : 'function' == typeof clearImmediate ? clearImmediate : clearTimeout,
        gb = function(hb, ib, jb) {
            var kb = ib.graphicalItems,
                lb = ib.dataStartIndex,
                mb = ib.dataEndIndex,
                nb = (kb || []).reduce(function(ob, pb) {
                    var qb = pb.props.data;
                    return qb && qb.length ? [].concat(W(ob), W(qb)) : ob;
                }, []);
            return nb && nb.length > 0 ? nb : jb && jb.props && jb.props.data && jb.props.data.length > 0 ? jb.props.data : hb && hb.length && (0, F.isNumber)(lb) && (0, F.isNumber)(mb) ? hb.slice(lb, mb + 1) : [];
        },
        hb = function(ib, jb, kb, lb) {
            var mb = ib.graphicalItems,
                nb = ib.tooltipAxis,
                ob = gb(jb, ib);
            return kb < 0 || !mb || !mb.length || kb >= ob.length ? null : mb.reduce(function(pb, qb) {
                if (qb.props.hide)
                    return pb;
                var rb, sb = qb.props.data;
                if (nb.dataKey && !nb.allowDuplicatedCategory) {
                    var tb = void 0 === sb ? ob : sb;
                    rb = (0, F.findEntryInArray)(tb, nb.dataKey, lb);
                } else
                    rb = sb && sb[kb] || ob[kb];
                return rb ? [].concat(W(pb), [(0, G.getTooltipItem)(qb, rb)]) : pb;
            }, []);
        },
        ib = function(jb, kb, lb, mb) {
            var nb = mb || {
                    x: jb.chartX,
                    y: jb.chartY
                },
                ob = function(pb, qb) {
                    return 'horizontal' === qb ? pb.x : 'vertical' === qb ? pb.y : 'centric' === qb ? pb.angle : pb.radius;
                }(nb, lb),
                pb = jb.orderedTooltipTicks,
                qb = jb.tooltipAxis,
                rb = jb.tooltipTicks,
                sb = (0, G.calculateActiveTickIndex)(ob, pb, rb, qb);
            if (sb >= 0 && rb) {
                var tb = rb[sb] && rb[sb].value,
                    ub = hb(jb, kb, sb, tb),
                    vb = function(wb, xb, yb, zb) {
                        var Ab = xb.find(function(Bb) {
                            return Bb && Bb.index === yb;
                        });
                        if (Ab) {
                            if ('horizontal' === wb)
                                return {
                                    x: Ab.coordinate,
                                    y: zb.y
                                };
                            if ('vertical' === wb)
                                return {
                                    x: zb.x,
                                    y: Ab.coordinate
                                };
                            if ('centric' === wb) {
                                var Bb = Ab.coordinate,
                                    Cb = zb.radius;
                                return $($($({}, zb), (0, I.polarToCartesian)(zb.cx, zb.cy, Cb, Bb)), {}, {
                                    angle: Bb,
                                    radius: Cb
                                });
                            }
                            var Bb = Ab.coordinate,
                                Cb = zb.angle;
                            return $($($({}, zb), (0, I.polarToCartesian)(zb.cx, zb.cy, Bb, Cb)), {}, {
                                angle: Cb,
                                radius: Bb
                            });
                        }
                        return cb;
                    }(lb, pb, sb, nb);
                return {
                    activeTooltipIndex: sb,
                    activeLabel: tb,
                    activePayload: ub,
                    activeCoordinate: vb
                };
            }
            return null;
        },
        jb = function(kb, lb) {
            var mb = lb.axisType,
                nb = void 0 === mb ? 'xAxis' : mb,
                ob = lb.AxisComp,
                pb = lb.graphicalItems,
                qb = lb.stackGroups,
                rb = lb.dataStartIndex,
                sb = lb.dataEndIndex,
                tb = kb.children,
                ub = ''.concat(nb, 'Id'),
                vb = (0, B.findAllByType)(tb, ob),
                wb = {};
            return vb && vb.length ? wb = function(xb, yb) {
                var zb = yb.axes,
                    Ab = yb.graphicalItems,
                    Bb = yb.axisType,
                    Cb = yb.axisIdKey,
                    Db = yb.stackGroups,
                    Eb = yb.dataStartIndex,
                    Fb = yb.dataEndIndex,
                    Gb = xb.layout,
                    Hb = xb.children,
                    Ib = xb.stackOffset,
                    Jb = (0, G.isCategoricalAxis)(Gb, Bb);
                return zb.reduce(function(Kb, Lb) {
                    var Mb = Lb.props,
                        Nb = Mb.type,
                        Ob = Mb.dataKey,
                        Pb = Mb.allowDataOverflow,
                        Qb = Mb.allowDuplicatedCategory,
                        Rb = Mb.scale,
                        Sb = Mb.ticks,
                        Tb = Lb.props[Cb],
                        Ub = gb(xb.data, {
                            graphicalItems: Ab.filter(function(Vb) {
                                return Vb.props[Cb] === Tb;
                            }),
                            dataStartIndex: Eb,
                            dataEndIndex: Fb
                        }),
                        Vb = Ub.length;
                    if (!Kb[Tb]) {
                        var Wb, Xb, Yb;
                        if (Ob) {
                            if (Wb = (0, G.getDomainOfDataByKey)(Ub, Ob, Nb), 'category' === Nb && Jb) {
                                var Zb = (0, F.hasDuplicate)(Wb);
                                Qb && Zb ? (Xb = Wb, Wb = a(m)(0, Vb)) : Qb || (Wb = (0, G.parseDomainOfCategoryAxis)(Lb.props.domain, Wb, Lb).reduce(function($b, ac) {
                                    return $b.indexOf(ac) >= 0 ? $b : [].concat(W($b), [ac]);
                                }, []));
                            } else if ('category' === Nb)
                                Wb = Qb ? Wb.filter(function(Zb) {
                                    return '' !== Zb && !a(n)(Zb);
                                }) : (0, G.parseDomainOfCategoryAxis)(Lb.props.domain, Wb, Lb).reduce(function(Zb, $b) {
                                    return Zb.indexOf($b) >= 0 || '' === $b || a(n)($b) ? Zb : [].concat(W(Zb), [$b]);
                                }, []);
                            else if ('number' === Nb) {
                                var Zb = (0, G.parseErrorBarsOfAxis)(Ub, Ab.filter(function($b) {
                                    return $b.props[Cb] === Tb && !$b.props.hide;
                                }), Ob, Bb, Gb);
                                Zb && (Wb = Zb);
                            }!Jb || 'number' !== Nb && 'auto' === Rb || (Yb = (0, G.getDomainOfDataByKey)(Ub, Ob, 'category'));
                        } else
                            Wb = Jb ? a(m)(0, Vb) : Db && Db[Tb] && Db[Tb].hasStack && 'number' === Nb ? 'expand' === Ib ? [
                                0,
                                1
                            ] : (0, G.getDomainOfStackGroups)(Db[Tb].stackGroups, Eb, Fb) : (0, G.getDomainOfItemsWithSameAxis)(Ub, Ab.filter(function(Zb) {
                                return Zb.props[Cb] === Tb && !Zb.props.hide;
                            }), Nb, Gb, !0);
                        if ('number' === Nb)
                            Wb = (0, H.detectReferenceElementsDomain)(Hb, Wb, Tb, Bb, Sb), Lb.props.domain && (Wb = (0, G.parseSpecifiedDomain)(Lb.props.domain, Wb, Pb));
                        else if ('category' === Nb && Lb.props.domain) {
                            var Zb = Lb.props.domain;
                            Wb.every(function($b) {
                                return Zb.indexOf($b) >= 0;
                            }) && (Wb = Zb);
                        }
                        return $($({}, Kb), {}, _ab({}, Tb, $($({}, Lb.props), {}, {
                            axisType: Bb,
                            domain: Wb,
                            categoricalDomain: Yb,
                            duplicateDomain: Xb,
                            originalDomain: Lb.props.domain,
                            isCategorical: Jb,
                            layout: Gb
                        })));
                    }
                    return Kb;
                }, {});
            }(kb, {
                axes: vb,
                graphicalItems: pb,
                axisType: nb,
                axisIdKey: ub,
                stackGroups: qb,
                dataStartIndex: rb,
                dataEndIndex: sb
            }) : pb && pb.length && (wb = function(xb, yb) {
                var zb = yb.graphicalItems,
                    Ab = yb.Axis,
                    Bb = yb.axisType,
                    Cb = yb.axisIdKey,
                    Db = yb.stackGroups,
                    Eb = yb.dataStartIndex,
                    Fb = yb.dataEndIndex,
                    Gb = xb.layout,
                    Hb = xb.children,
                    Ib = gb(xb.data, {
                        graphicalItems: zb,
                        dataStartIndex: Eb,
                        dataEndIndex: Fb
                    }),
                    Jb = Ib.length,
                    Kb = (0, G.isCategoricalAxis)(Gb, Bb),
                    Lb = -1;
                return zb.reduce(function(Mb, Nb) {
                    var Ob, Pb = Nb.props[Cb];
                    return Mb[Pb] ? Mb : (Lb++, Kb ? Ob = a(m)(0, Jb) : Db && Db[Pb] && Db[Pb].hasStack ? (Ob = (0, G.getDomainOfStackGroups)(Db[Pb].stackGroups, Eb, Fb), Ob = (0, H.detectReferenceElementsDomain)(Hb, Ob, Pb, Bb)) : (Ob = (0, G.parseSpecifiedDomain)(Ab.defaultProps.domain, (0, G.getDomainOfItemsWithSameAxis)(Ib, zb.filter(function(Qb) {
                        return Qb.props[Cb] === Pb && !Qb.props.hide;
                    }), 'number', Gb), Ab.defaultProps.allowDataOverflow), Ob = (0, H.detectReferenceElementsDomain)(Hb, Ob, Pb, Bb)), $($({}, Mb), {}, _ab({}, Pb, $($({
                        axisType: Bb
                    }, Ab.defaultProps), {}, {
                        hide: !0,
                        orientation: a(l)(bb, ''.concat(Bb, '.').concat(Lb % 2), null),
                        domain: Ob,
                        originalDomain: Ab.defaultProps.domain,
                        isCategorical: Kb,
                        layout: Gb
                    }))));
                }, {});
            }(kb, {
                Axis: ob,
                graphicalItems: pb,
                axisType: nb,
                axisIdKey: ub,
                stackGroups: qb,
                dataStartIndex: rb,
                dataEndIndex: sb
            })), wb;
        },
        kb = function(lb) {
            var mb = lb.children,
                nb = lb.defaultShowTooltip,
                ob = (0, B.findChildByType)(mb, D.Brush.displayName);
            return {
                chartX: 0,
                chartY: 0,
                dataStartIndex: ob && ob.props && ob.props.startIndex || 0,
                dataEndIndex: ob && ob.props && ob.props.endIndex || lb.data && lb.data.length - 1 || 0,
                activeTooltipIndex: -1,
                isTooltipActive: !a(n)(nb) && nb
            };
        },
        lb = function(mb) {
            return 'horizontal' === mb ? {
                numericAxisName: 'yAxis',
                cateAxisName: 'xAxis'
            } : 'vertical' === mb ? {
                numericAxisName: 'xAxis',
                cateAxisName: 'yAxis'
            } : 'centric' === mb ? {
                numericAxisName: 'radiusAxis',
                cateAxisName: 'angleAxis'
            } : {
                numericAxisName: 'angleAxis',
                cateAxisName: 'radiusAxis'
            };
        },
        _mb = function(nb) {
            var ob, pb, qb = nb.chartName,
                rb = nb.GraphicalChild,
                sb = nb.defaultTooltipEventType,
                tb = void 0 === sb ? 'axis' : sb,
                ub = nb.validateTooltipEventTypes,
                vb = void 0 === ub ? ['axis'] : ub,
                wb = nb.axisComponents,
                xb = nb.legendContent,
                yb = nb.formatAxisMap,
                zb = nb.defaultProps,
                Ab = function(Bb, Cb) {
                    var Db = Cb.graphicalItems,
                        Eb = Cb.stackGroups,
                        Fb = Cb.offset,
                        Gb = Cb.updateId,
                        Hb = Cb.dataStartIndex,
                        Ib = Cb.dataEndIndex,
                        Jb = Bb.barSize,
                        Kb = Bb.layout,
                        Lb = Bb.barGap,
                        Mb = Bb.barCategoryGap,
                        Nb = Bb.maxBarSize,
                        Ob = lb(Kb),
                        Pb = Ob.numericAxisName,
                        Qb = Ob.cateAxisName,
                        Rb = function(Sb) {
                            return !(!Sb || !Sb.length) && Sb.some(function(Tb) {
                                var Ub = (0, B.getDisplayName)(Tb && Tb.type);
                                return Ub && Ub.indexOf('Bar') >= 0;
                            });
                        }(Db),
                        Sb = Rb && (0, G.getBarSizeList)({
                            barSize: Jb,
                            stackGroups: Eb
                        }),
                        Tb = [];
                    return Db.forEach(function(Ub, Vb) {
                        var Wb = gb(Bb.data, {
                                dataStartIndex: Hb,
                                dataEndIndex: Ib
                            }, Ub),
                            Xb = Ub.props,
                            Yb = Xb.dataKey,
                            Zb = Xb.maxBarSize,
                            $b = Ub.props[''.concat(Pb, 'Id')],
                            ac = Ub.props[''.concat(Qb, 'Id')],
                            bc = wb.reduce(function(cc, dc) {
                                var ec, fc = Cb[''.concat(dc.axisType, 'Map')],
                                    gc = Ub.props[''.concat(dc.axisType, 'Id')],
                                    hc = fc && fc[gc];
                                return $($({}, cc), {}, (_ab(ec = {}, dc.axisType, hc), _ab(ec, ''.concat(dc.axisType, 'Ticks'), (0, G.getTicksOfAxis)(hc)), ec));
                            }, {}),
                            cc = bc[Qb],
                            dc = bc[''.concat(Qb, 'Ticks')],
                            ec = Eb && Eb[$b] && Eb[$b].hasStack && (0, G.getStackedDataOfItem)(Ub, Eb[$b].stackGroups),
                            fc = (0, B.getDisplayName)(Ub.type).indexOf('Bar') >= 0,
                            gc = (0, G.getBandSizeOfAxis)(cc, dc),
                            hc = [];
                        if (fc) {
                            var ic, jc, kc = a(n)(Zb) ? Nb : Zb,
                                lc = null !== (ic = null !== (jc = (0, G.getBandSizeOfAxis)(cc, dc, !0)) && void 0 !== jc ? jc : kc) && void 0 !== ic ? ic : 0;
                            hc = (0, G.getBarPosition)({
                                barGap: Lb,
                                barCategoryGap: Mb,
                                bandSize: lc !== gc ? lc : gc,
                                sizeList: Sb[ac],
                                maxBarSize: kc
                            }), lc !== gc && (hc = hc.map(function(mc) {
                                return $($({}, mc), {}, {
                                    position: $($({}, mc.position), {}, {
                                        offset: mc.position.offset - lc / 2
                                    })
                                });
                            }));
                        }
                        var ic, jc = Ub && Ub.type && Ub.type.getComposedData;
                        jc && Tb.push({
                            props: $($({}, jc($($({}, bc), {}, {
                                displayedData: Wb,
                                props: Bb,
                                dataKey: Yb,
                                item: Ub,
                                bandSize: gc,
                                barPosition: hc,
                                offset: Fb,
                                stackedData: ec,
                                layout: Kb,
                                dataStartIndex: Hb,
                                dataEndIndex: Ib
                            }))), {}, (ic = {
                                key: Ub.key || 'item-'.concat(Vb)
                            }, _ab(ic, Pb, bc[Pb]), _ab(ic, Qb, bc[Qb]), _ab(ic, 'animationId', Gb), ic)),
                            childIndex: (0, B.parseChildIndex)(Ub, Bb.children),
                            item: Ub
                        });
                    }), Tb;
                },
                Bb = function(Cb, Db) {
                    var Eb = Cb.props,
                        Fb = Cb.dataStartIndex,
                        Gb = Cb.dataEndIndex,
                        Hb = Cb.updateId;
                    if (!(0, B.validateWidthHeight)({
                            props: Eb
                        }))
                        return null;
                    var Ib = Eb.children,
                        Jb = Eb.layout,
                        Kb = Eb.stackOffset,
                        Lb = Eb.data,
                        Mb = Eb.reverseStackOrder,
                        Nb = lb(Jb),
                        Ob = Nb.numericAxisName,
                        Pb = Nb.cateAxisName,
                        Qb = (0, B.findAllByType)(Ib, rb),
                        Rb = (0, G.getStackGroupsByAxisId)(Lb, Qb, ''.concat(Ob, 'Id'), ''.concat(Pb, 'Id'), Kb, Mb),
                        Sb = wb.reduce(function(Tb, Ub) {
                            var Vb = ''.concat(Ub.axisType, 'Map');
                            return $($({}, Tb), {}, _ab({}, Vb, jb(Eb, $($({}, Ub), {}, {
                                graphicalItems: Qb,
                                stackGroups: Ub.axisType === Ob && Rb,
                                dataStartIndex: Fb,
                                dataEndIndex: Gb
                            }))));
                        }, {}),
                        Tb = function(Ub, Vb) {
                            var Wb = Ub.props,
                                Xb = Ub.graphicalItems,
                                Yb = Ub.xAxisMap,
                                Zb = void 0 === Yb ? {} : Yb,
                                $b = Ub.yAxisMap,
                                ac = void 0 === $b ? {} : $b,
                                bc = Wb.width,
                                cc = Wb.height,
                                dc = Wb.children,
                                ec = Wb.margin || {},
                                fc = (0, B.findChildByType)(dc, D.Brush.displayName),
                                gc = (0, B.findChildByType)(dc, v.Legend.displayName),
                                hc = Object.keys(ac).reduce(function(ic, jc) {
                                    var kc = ac[jc],
                                        lc = kc.orientation;
                                    return kc.mirror || kc.hide ? ic : $($({}, ic), {}, _ab({}, lc, ic[lc] + kc.width));
                                }, {
                                    left: ec.left || 0,
                                    right: ec.right || 0
                                }),
                                ic = Object.keys(Zb).reduce(function(jc, kc) {
                                    var lc = Zb[kc],
                                        mc = lc.orientation;
                                    return lc.mirror || lc.hide ? jc : $($({}, jc), {}, _ab({}, mc, a(l)(jc, ''.concat(mc)) + lc.height));
                                }, {
                                    top: ec.top || 0,
                                    bottom: ec.bottom || 0
                                }),
                                jc = $($({}, ic), hc),
                                kc = jc.bottom;
                            return fc && (jc.bottom += fc.props.height || D.Brush.defaultProps.height), gc && Vb && (jc = (0, G.appendOffsetOfLegend)(jc, Xb, Wb, Vb)), $($({
                                brushBottom: kc
                            }, jc), {}, {
                                width: bc - jc.left - jc.right,
                                height: cc - jc.top - jc.bottom
                            });
                        }($($({}, Sb), {}, {
                            props: Eb,
                            graphicalItems: Qb
                        }), null == Db ? void 0 : Db.legendBBox);
                    Object.keys(Sb).forEach(function(Ub) {
                        Sb[Ub] = yb(Eb, Sb[Ub], Tb, Ub.replace('Map', ''), qb);
                    });
                    var Ub, Vb, Wb, Xb = Sb[''.concat(Pb, 'Map')],
                        Yb = (Ub = Xb, Vb = (0, F.getAnyElementOfObject)(Ub), {
                            tooltipTicks: Wb = (0, G.getTicksOfAxis)(Vb, !1, !0),
                            orderedTooltipTicks: a(k)(Wb, function(Zb) {
                                return Zb.coordinate;
                            }),
                            tooltipAxis: Vb,
                            tooltipAxisBandSize: (0, G.getBandSizeOfAxis)(Vb, Wb)
                        }),
                        Zb = Ab(Eb, $($({}, Sb), {}, {
                            dataStartIndex: Fb,
                            dataEndIndex: Gb,
                            updateId: Hb,
                            graphicalItems: Qb,
                            stackGroups: Rb,
                            offset: Tb
                        }));
                    return $($({
                        formattedGraphicalItems: Zb,
                        graphicalItems: Qb,
                        offset: Tb,
                        stackGroups: Rb
                    }, Yb), Sb);
                };
            return pb = ob = function(Cb) {
                ! function(Db, Eb) {
                    if ('function' != typeof Eb && null !== Eb)
                        throw new TypeError('Super expression must either be null or a function');
                    Db.prototype = Object.create(Eb && Eb.prototype, {
                        constructor: {
                            value: Db,
                            writable: !0,
                            configurable: !0
                        }
                    }), Eb && R(Db, Eb);
                }(t, Cb);
                var Db, Eb, Fb, Gb = S(t);

                function Hb(Ib) {
                    var Jb;
                    return function(Kb, Lb) {
                        if (!(Kb instanceof Lb))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, Hb), (Jb = Gb.call(this, Ib)).uniqueChartId = void 0, Jb.clipPathId = void 0, Jb.legendInstance = void 0, Jb.deferId = void 0, Jb.container = void 0, Jb.clearDeferId = function() {
                        !a(n)(Jb.deferId) && fb && fb(Jb.deferId), Jb.deferId = null;
                    }, Jb.handleLegendBBoxUpdate = function(Kb) {
                        if (Kb) {
                            var Lb = Jb.state,
                                Mb = Lb.dataStartIndex,
                                Nb = Lb.dataEndIndex,
                                Ob = Lb.updateId;
                            Jb.setState($({
                                legendBBox: Kb
                            }, Bb({
                                props: Jb.props,
                                dataStartIndex: Mb,
                                dataEndIndex: Nb,
                                updateId: Ob
                            }, $($({}, Jb.state), {}, {
                                legendBBox: Kb
                            }))));
                        }
                    }, Jb.handleReceiveSyncEvent = function(Kb, Lb, Mb) {
                        Jb.props.syncId === Kb && Lb !== Jb.uniqueChartId && (Jb.clearDeferId(), Jb.deferId = eb && eb(Jb.applySyncEvent.bind(_U(Jb), Mb)));
                    }, Jb.handleBrushChange = function(Kb) {
                        var Lb = Kb.startIndex,
                            Mb = Kb.endIndex;
                        if (Lb !== Jb.state.dataStartIndex || Mb !== Jb.state.dataEndIndex) {
                            var Nb = Jb.state.updateId;
                            Jb.setState(function() {
                                return $({
                                    dataStartIndex: Lb,
                                    dataEndIndex: Mb
                                }, Bb({
                                    props: Jb.props,
                                    dataStartIndex: Lb,
                                    dataEndIndex: Mb,
                                    updateId: Nb
                                }, Jb.state));
                            }), Jb.triggerSyncEvent({
                                dataStartIndex: Lb,
                                dataEndIndex: Mb
                            });
                        }
                    }, Jb.handleMouseEnter = function(Kb) {
                        var Lb = Jb.props.onMouseEnter,
                            Mb = Jb.getMouseInfo(Kb);
                        if (Mb) {
                            var Nb = $($({}, Mb), {}, {
                                isTooltipActive: !0
                            });
                            Jb.setState(Nb), Jb.triggerSyncEvent(Nb), a(i)(Lb) && Lb(Nb, Kb);
                        }
                    }, Jb.triggeredAfterMouseMove = function(Kb) {
                        var Lb = Jb.props.onMouseMove,
                            Mb = Jb.getMouseInfo(Kb),
                            Nb = Mb ? $($({}, Mb), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        Jb.setState(Nb), Jb.triggerSyncEvent(Nb), a(i)(Lb) && Lb(Nb, Kb);
                    }, Jb.handleItemMouseEnter = function(Kb) {
                        Jb.setState(function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: Kb,
                                activePayload: Kb.tooltipPayload,
                                activeCoordinate: Kb.tooltipPosition || {
                                    x: Kb.cx,
                                    y: Kb.cy
                                }
                            };
                        });
                    }, Jb.handleItemMouseLeave = function() {
                        Jb.setState(function() {
                            return {
                                isTooltipActive: !1
                            };
                        });
                    }, Jb.handleMouseMove = function(Kb) {
                        Kb && a(i)(Kb.persist) && Kb.persist(), Jb.triggeredAfterMouseMove(Kb);
                    }, Jb.handleMouseLeave = function(Kb) {
                        var Lb = Jb.props.onMouseLeave,
                            Mb = {
                                isTooltipActive: !1
                            };
                        Jb.setState(Mb), Jb.triggerSyncEvent(Mb), a(i)(Lb) && Lb(Mb, Kb), Jb.cancelThrottledTriggerAfterMouseMove();
                    }, Jb.handleOuterEvent = function(Kb) {
                        var Lb = (0, B.getReactEventByType)(Kb),
                            Mb = a(l)(Jb.props, ''.concat(Lb));
                        Lb && a(i)(Mb) && Mb(/.*touch.*/i.test(Lb) ? Jb.getMouseInfo(Kb.changedTouches[0]) : Jb.getMouseInfo(Kb), Kb);
                    }, Jb.handleClick = function(Kb) {
                        var Lb = Jb.props.onClick,
                            Mb = Jb.getMouseInfo(Kb);
                        if (Mb) {
                            var Nb = $($({}, Mb), {}, {
                                isTooltipActive: !0
                            });
                            Jb.setState(Nb), Jb.triggerSyncEvent(Nb), a(i)(Lb) && Lb(Nb, Kb);
                        }
                    }, Jb.handleMouseDown = function(Kb) {
                        var Lb = Jb.props.onMouseDown;
                        a(i)(Lb) && Lb(Jb.getMouseInfo(Kb), Kb);
                    }, Jb.handleMouseUp = function(Kb) {
                        var Lb = Jb.props.onMouseUp;
                        a(i)(Lb) && Lb(Jb.getMouseInfo(Kb), Kb);
                    }, Jb.handleTouchMove = function(Kb) {
                        null != Kb.changedTouches && Kb.changedTouches.length > 0 && Jb.handleMouseMove(Kb.changedTouches[0]);
                    }, Jb.handleTouchStart = function(Kb) {
                        null != Kb.changedTouches && Kb.changedTouches.length > 0 && Jb.handleMouseDown(Kb.changedTouches[0]);
                    }, Jb.handleTouchEnd = function(Kb) {
                        null != Kb.changedTouches && Kb.changedTouches.length > 0 && Jb.handleMouseUp(Kb.changedTouches[0]);
                    }, Jb.verticalCoordinatesGenerator = function(Kb) {
                        var Lb = Kb.xAxis,
                            Mb = Kb.width,
                            Nb = Kb.height,
                            Ob = Kb.offset;
                        return (0, G.getCoordinatesOfGrid)(C.CartesianAxis.getTicks($($($({}, C.CartesianAxis.defaultProps), Lb), {}, {
                            ticks: (0, G.getTicksOfAxis)(Lb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: Mb,
                                height: Nb
                            }
                        })), Ob.left, Ob.left + Ob.width);
                    }, Jb.horizontalCoordinatesGenerator = function(Kb) {
                        var Lb = Kb.yAxis,
                            Mb = Kb.width,
                            Nb = Kb.height,
                            Ob = Kb.offset;
                        return (0, G.getCoordinatesOfGrid)(C.CartesianAxis.getTicks($($($({}, C.CartesianAxis.defaultProps), Lb), {}, {
                            ticks: (0, G.getTicksOfAxis)(Lb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: Mb,
                                height: Nb
                            }
                        })), Ob.top, Ob.top + Ob.height);
                    }, Jb.axesTicksGenerator = function(Kb) {
                        return (0, G.getTicksOfAxis)(Kb, !0);
                    }, Jb.renderCursor = function(Kb) {
                        var Lb = Jb.state,
                            Mb = Lb.isTooltipActive,
                            Nb = Lb.activeCoordinate,
                            Ob = Lb.activePayload,
                            Pb = Lb.offset,
                            Qb = Lb.activeTooltipIndex,
                            Rb = Jb.getTooltipEventType();
                        if (!Kb || !Kb.props.cursor || !Mb || !Nb || 'ScatterChart' !== qb && 'axis' !== Rb)
                            return null;
                        var Sb, Tb = Jb.props.layout,
                            Ub = w.Curve;
                        if ('ScatterChart' === qb)
                            Sb = Nb, Ub = x.Cross;
                        else if ('BarChart' === qb)
                            Sb = Jb.getCursorRectangle(), Ub = A.Rectangle;
                        else if ('radial' === Tb) {
                            var Vb = Jb.getCursorPoints(),
                                Wb = Vb.cx,
                                Xb = Vb.cy,
                                Yb = Vb.radius;
                            Sb = {
                                cx: Wb,
                                cy: Xb,
                                startAngle: Vb.startAngle,
                                endAngle: Vb.endAngle,
                                innerRadius: Yb,
                                outerRadius: Yb
                            }, Ub = y.Sector;
                        } else
                            Sb = {
                                points: Jb.getCursorPoints()
                            }, Ub = w.Curve;
                        var Vb = Kb.key || '_recharts-cursor',
                            Wb = $($($($({
                                stroke: '#ccc',
                                pointerEvents: 'none'
                            }, Pb), Sb), (0, L.filterProps)(Kb.props.cursor)), {}, {
                                payload: Ob,
                                payloadIndex: Qb,
                                key: Vb,
                                className: 'recharts-tooltip-cursor'
                            });
                        return (0, q.isValidElement)(Kb.props.cursor) ? (0, q.cloneElement)(Kb.props.cursor, Wb) : (0, q.createElement)(Ub, Wb);
                    }, Jb.renderPolarAxis = function(Kb, Lb, Mb) {
                        var Nb = a(l)(Kb, 'type.axisType'),
                            Ob = a(l)(Jb.state, ''.concat(Nb, 'Map'))[Kb.props[''.concat(Nb, 'Id')]];
                        return (0, q.cloneElement)(Kb, $($({}, Ob), {}, {
                            className: Nb,
                            key: Kb.key || ''.concat(Lb, '-').concat(Mb),
                            ticks: (0, G.getTicksOfAxis)(Ob, !0)
                        }));
                    }, Jb.renderXAxis = function(Kb, Lb, Mb) {
                        var Nb = Jb.state.xAxisMap[Kb.props.xAxisId];
                        return Jb.renderAxis(Nb, Kb, Lb, Mb);
                    }, Jb.renderYAxis = function(Kb, Lb, Mb) {
                        var Nb = Jb.state.yAxisMap[Kb.props.yAxisId];
                        return Jb.renderAxis(Nb, Kb, Lb, Mb);
                    }, Jb.renderGrid = function(Kb) {
                        var Lb = Jb.state,
                            Mb = Lb.xAxisMap,
                            Nb = Lb.yAxisMap,
                            Ob = Lb.offset,
                            Pb = Jb.props,
                            Qb = Pb.width,
                            Rb = Pb.height,
                            Sb = (0, F.getAnyElementOfObject)(Mb),
                            Tb = a(h)(Nb, function(Ub) {
                                return a(g)(Ub.domain, db);
                            }) || (0, F.getAnyElementOfObject)(Nb),
                            Ub = Kb.props || {};
                        return (0, q.cloneElement)(Kb, {
                            key: Kb.key || 'grid',
                            x: (0, F.isNumber)(Ub.x) ? Ub.x : Ob.left,
                            y: (0, F.isNumber)(Ub.y) ? Ub.y : Ob.top,
                            width: (0, F.isNumber)(Ub.width) ? Ub.width : Ob.width,
                            height: (0, F.isNumber)(Ub.height) ? Ub.height : Ob.height,
                            xAxis: Sb,
                            yAxis: Tb,
                            offset: Ob,
                            chartWidth: Qb,
                            chartHeight: Rb,
                            verticalCoordinatesGenerator: Ub.verticalCoordinatesGenerator || Jb.verticalCoordinatesGenerator,
                            horizontalCoordinatesGenerator: Ub.horizontalCoordinatesGenerator || Jb.horizontalCoordinatesGenerator
                        });
                    }, Jb.renderPolarGrid = function(Kb) {
                        var Lb = Kb.props,
                            Mb = Lb.radialLines,
                            Nb = Lb.polarAngles,
                            Ob = Lb.polarRadius,
                            Pb = Jb.state,
                            Qb = Pb.radiusAxisMap,
                            Rb = Pb.angleAxisMap,
                            Sb = (0, F.getAnyElementOfObject)(Qb),
                            Tb = (0, F.getAnyElementOfObject)(Rb),
                            Ub = Tb.cx,
                            Vb = Tb.cy,
                            Wb = Tb.innerRadius,
                            Xb = Tb.outerRadius;
                        return (0, q.cloneElement)(Kb, {
                            polarAngles: a(p)(Nb) ? Nb : (0, G.getTicksOfAxis)(Tb, !0).map(function(Yb) {
                                return Yb.coordinate;
                            }),
                            polarRadius: a(p)(Ob) ? Ob : (0, G.getTicksOfAxis)(Sb, !0).map(function(Yb) {
                                return Yb.coordinate;
                            }),
                            cx: Ub,
                            cy: Vb,
                            innerRadius: Wb,
                            outerRadius: Xb,
                            key: Kb.key || 'polar-grid',
                            radialLines: Mb
                        });
                    }, Jb.renderLegend = function() {
                        var Kb = Jb.state.formattedGraphicalItems,
                            Lb = Jb.props,
                            Mb = Lb.children,
                            Nb = Lb.width,
                            Ob = Lb.height,
                            Pb = Jb.props.margin || {},
                            Qb = Nb - (Pb.left || 0) - (Pb.right || 0),
                            Rb = (0, G.getLegendProps)({
                                children: Mb,
                                formattedGraphicalItems: Kb,
                                legendWidth: Qb,
                                legendContent: xb
                            });
                        if (!Rb)
                            return null;
                        var Sb = Rb.item,
                            Tb = P(Rb, ['item']);
                        return (0, q.cloneElement)(Sb, $($({}, Tb), {}, {
                            chartWidth: Nb,
                            chartHeight: Ob,
                            margin: Pb,
                            ref: function(Ub) {
                                Jb.legendInstance = Ub;
                            },
                            onBBoxUpdate: Jb.handleLegendBBoxUpdate
                        }));
                    }, Jb.renderTooltip = function() {
                        var Kb = Jb.props.children,
                            Lb = (0, B.findChildByType)(Kb, u.Tooltip.displayName);
                        if (!Lb)
                            return null;
                        var Mb = Jb.state,
                            Nb = Mb.isTooltipActive,
                            Ob = Mb.activeCoordinate,
                            Pb = Mb.activePayload,
                            Qb = Mb.activeLabel,
                            Rb = Mb.offset;
                        return (0, q.cloneElement)(Lb, {
                            viewBox: $($({}, Rb), {}, {
                                x: Rb.left,
                                y: Rb.top
                            }),
                            active: Nb,
                            label: Qb,
                            payload: Nb ? Pb : [],
                            coordinate: Ob
                        });
                    }, Jb.renderBrush = function(Kb) {
                        var Lb = Jb.props,
                            Mb = Lb.margin,
                            Nb = Lb.data,
                            Ob = Jb.state,
                            Pb = Ob.offset,
                            Qb = Ob.dataStartIndex,
                            Rb = Ob.dataEndIndex,
                            Sb = Ob.updateId;
                        return (0, q.cloneElement)(Kb, {
                            key: Kb.key || '_recharts-brush',
                            onChange: (0, G.combineEventHandlers)(Jb.handleBrushChange, null, Kb.props.onChange),
                            data: Nb,
                            x: (0, F.isNumber)(Kb.props.x) ? Kb.props.x : Pb.left,
                            y: (0, F.isNumber)(Kb.props.y) ? Kb.props.y : Pb.top + Pb.height + Pb.brushBottom - (Mb.bottom || 0),
                            width: (0, F.isNumber)(Kb.props.width) ? Kb.props.width : Pb.width,
                            startIndex: Qb,
                            endIndex: Rb,
                            updateId: 'brush-'.concat(Sb)
                        });
                    }, Jb.renderReferenceElement = function(Kb, Lb, Mb) {
                        if (!Kb)
                            return null;
                        var Nb = _U(Jb).clipPathId,
                            Ob = Jb.state,
                            Pb = Ob.xAxisMap,
                            Qb = Ob.yAxisMap,
                            Rb = Ob.offset,
                            Sb = Kb.props,
                            Tb = Sb.xAxisId,
                            Ub = Sb.yAxisId;
                        return (0, q.cloneElement)(Kb, {
                            key: Kb.key || ''.concat(Lb, '-').concat(Mb),
                            xAxis: Pb[Tb],
                            yAxis: Qb[Ub],
                            viewBox: {
                                x: Rb.left,
                                y: Rb.top,
                                width: Rb.width,
                                height: Rb.height
                            },
                            clipPathId: Nb
                        });
                    }, Jb.renderActivePoints = function(Kb) {
                        var Lb = Kb.item,
                            Mb = Kb.activePoint,
                            Nb = Kb.basePoint,
                            Ob = Kb.childIndex,
                            Pb = Kb.isRange,
                            Qb = [],
                            Rb = Lb.props.key,
                            Sb = Lb.item.props,
                            Tb = Sb.activeDot,
                            Ub = $($({
                                index: Ob,
                                dataKey: Sb.dataKey,
                                cx: Mb.x,
                                cy: Mb.y,
                                r: 4,
                                fill: (0, G.getMainColorOfGraphicItem)(Lb.item),
                                strokeWidth: 2,
                                stroke: '#fff',
                                payload: Mb.payload,
                                value: Mb.value,
                                key: ''.concat(Rb, '-activePoint-').concat(Ob)
                            }, (0, L.filterProps)(Tb)), (0, L.adaptEventHandlers)(Tb));
                        return Qb.push(Hb.renderActiveDot(Tb, Ub)), Nb ? Qb.push(Hb.renderActiveDot(Tb, $($({}, Ub), {}, {
                            cx: Nb.x,
                            cy: Nb.y,
                            key: ''.concat(Rb, '-basePoint-').concat(Ob)
                        }))) : Pb && Qb.push(null), Qb;
                    }, Jb.renderGraphicChild = function(Kb, Lb, Mb) {
                        var Nb = Jb.filterFormatItem(Kb, Lb, Mb);
                        if (!Nb)
                            return null;
                        var Ob = Jb.getTooltipEventType(),
                            Pb = Jb.state,
                            Qb = Pb.isTooltipActive,
                            Rb = Pb.tooltipAxis,
                            Sb = Pb.activeTooltipIndex,
                            Tb = Pb.activeLabel,
                            Ub = Jb.props.children,
                            Vb = (0, B.findChildByType)(Ub, u.Tooltip.displayName),
                            Wb = Nb.props,
                            Xb = Wb.points,
                            Yb = Wb.isRange,
                            Zb = Wb.baseLine,
                            $b = Nb.item.props,
                            ac = $b.activeDot,
                            bc = !$b.hide && Qb && Vb && ac && Sb >= 0,
                            cc = {};
                        'axis' !== Ob && Vb && 'click' === Vb.props.trigger ? cc = {
                            onClick: (0, G.combineEventHandlers)(Jb.handleItemMouseEnter, null, Kb.props.onCLick)
                        } : 'axis' !== Ob && (cc = {
                            onMouseLeave: (0, G.combineEventHandlers)(Jb.handleItemMouseLeave, null, Kb.props.onMouseLeave),
                            onMouseEnter: (0, G.combineEventHandlers)(Jb.handleItemMouseEnter, null, Kb.props.onMouseEnter)
                        });
                        var dc = (0, q.cloneElement)(Kb, $($({}, Nb.props), cc));
                        if (bc) {
                            var ec, fc;
                            if (Rb.dataKey && !Rb.allowDuplicatedCategory) {
                                var gc = 'function' == typeof Rb.dataKey ? function(hc) {
                                    return 'function' == typeof Rb.dataKey ? Rb.dataKey(hc.payload) : null;
                                } : 'payload.'.concat(Rb.dataKey.toString());
                                ec = (0, F.findEntryInArray)(Xb, gc, Tb), fc = Yb && Zb && (0, F.findEntryInArray)(Zb, gc, Tb);
                            } else
                                ec = Xb[Sb], fc = Yb && Zb && Zb[Sb];
                            if (!a(n)(ec))
                                return [dc].concat(W(Jb.renderActivePoints({
                                    item: Nb,
                                    activePoint: ec,
                                    basePoint: fc,
                                    childIndex: Sb,
                                    isRange: Yb
                                })));
                        }
                        return Yb ? [
                            dc,
                            null,
                            null
                        ] : [
                            dc,
                            null
                        ];
                    }, Jb.renderCustomized = function(Kb, Lb, Mb) {
                        return (0, q.cloneElement)(Kb, $($({
                            key: 'recharts-customized-'.concat(Mb)
                        }, Jb.props), Jb.state));
                    }, Jb.uniqueChartId = a(n)(Ib.id) ? (0, F.uniqueId)('recharts') : Ib.id, Jb.clipPathId = ''.concat(Jb.uniqueChartId, '-clip'), Ib.throttleDelay && (Jb.triggeredAfterMouseMove = a(j)(Jb.triggeredAfterMouseMove, Ib.throttleDelay)), Jb.state = {}, Jb;
                }
                return Db = Hb, (Eb = [{
                        key: 'componentDidMount',
                        value: function() {
                            a(n)(this.props.syncId) || this.addListener();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function(Ib) {
                            a(n)(Ib.syncId) && !a(n)(this.props.syncId) && this.addListener(), !a(n)(Ib.syncId) && a(n)(this.props.syncId) && this.removeListener();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.clearDeferId(), a(n)(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove();
                        }
                    },
                    {
                        key: 'cancelThrottledTriggerAfterMouseMove',
                        value: function() {
                            'function' == typeof this.triggeredAfterMouseMove.cancel && this.triggeredAfterMouseMove.cancel();
                        }
                    },
                    {
                        key: 'getTooltipEventType',
                        value: function() {
                            var Ib = (0, B.findChildByType)(this.props.children, u.Tooltip.displayName);
                            if (Ib && a(o)(Ib.props.shared)) {
                                var Jb = Ib.props.shared ? 'axis' : 'item';
                                return vb.indexOf(Jb) >= 0 ? Jb : tb;
                            }
                            return tb;
                        }
                    },
                    {
                        key: 'getMouseInfo',
                        value: function(Ib) {
                            if (!this.container)
                                return null;
                            var Jb = (0, E.getOffset)(this.container),
                                Kb = (0, E.calculateChartCoordinate)(Ib, Jb),
                                Lb = this.inRange(Kb.chartX, Kb.chartY);
                            if (!Lb)
                                return null;
                            var Mb = this.state,
                                Nb = Mb.xAxisMap,
                                Ob = Mb.yAxisMap;
                            if ('axis' !== this.getTooltipEventType() && Nb && Ob) {
                                var Pb = (0, F.getAnyElementOfObject)(Nb).scale,
                                    Qb = (0, F.getAnyElementOfObject)(Ob).scale,
                                    Rb = Pb && Pb.invert ? Pb.invert(Kb.chartX) : null,
                                    Sb = Qb && Qb.invert ? Qb.invert(Kb.chartY) : null;
                                return $($({}, Kb), {}, {
                                    xValue: Rb,
                                    yValue: Sb
                                });
                            }
                            var Pb = ib(this.state, this.props.data, this.props.layout, Lb);
                            return Pb ? $($({}, Kb), Pb) : null;
                        }
                    },
                    {
                        key: 'getCursorRectangle',
                        value: function() {
                            var Ib = this.props.layout,
                                Jb = this.state,
                                Kb = Jb.activeCoordinate,
                                Lb = Jb.offset,
                                Mb = Jb.tooltipAxisBandSize,
                                Nb = Mb / 2;
                            return {
                                stroke: 'none',
                                fill: '#ccc',
                                x: 'horizontal' === Ib ? Kb.x - Nb : Lb.left + 0.5,
                                y: 'horizontal' === Ib ? Lb.top + 0.5 : Kb.y - Nb,
                                width: 'horizontal' === Ib ? Mb : Lb.width - 1,
                                height: 'horizontal' === Ib ? Lb.height - 1 : Mb
                            };
                        }
                    },
                    {
                        key: 'getCursorPoints',
                        value: function() {
                            var Ib, Jb, Kb, Lb, Mb = this.props.layout,
                                Nb = this.state,
                                Ob = Nb.activeCoordinate,
                                Pb = Nb.offset;
                            if ('horizontal' === Mb)
                                Kb = Ib = Ob.x, Jb = Pb.top, Lb = Pb.top + Pb.height;
                            else if ('vertical' === Mb)
                                Lb = Jb = Ob.y, Ib = Pb.left, Kb = Pb.left + Pb.width;
                            else if (!a(n)(Ob.cx) || !a(n)(Ob.cy)) {
                                if ('centric' !== Mb) {
                                    var Qb = Ob.cx,
                                        Rb = Ob.cy,
                                        Sb = Ob.radius,
                                        Tb = Ob.startAngle,
                                        Ub = Ob.endAngle;
                                    return {
                                        points: [
                                            (0, I.polarToCartesian)(Qb, Rb, Sb, Tb),
                                            (0, I.polarToCartesian)(Qb, Rb, Sb, Ub)
                                        ],
                                        cx: Qb,
                                        cy: Rb,
                                        radius: Sb,
                                        startAngle: Tb,
                                        endAngle: Ub
                                    };
                                }
                                var Qb = Ob.cx,
                                    Rb = Ob.cy,
                                    Sb = Ob.innerRadius,
                                    Tb = Ob.outerRadius,
                                    Ub = Ob.angle,
                                    Vb = (0, I.polarToCartesian)(Qb, Rb, Sb, Ub),
                                    Wb = (0, I.polarToCartesian)(Qb, Rb, Tb, Ub);
                                Ib = Vb.x, Jb = Vb.y, Kb = Wb.x, Lb = Wb.y;
                            }
                            return [{
                                    x: Ib,
                                    y: Jb
                                },
                                {
                                    x: Kb,
                                    y: Lb
                                }
                            ];
                        }
                    },
                    {
                        key: 'inRange',
                        value: function(Ib, Jb) {
                            var Kb = this.props.layout;
                            if ('horizontal' === Kb || 'vertical' === Kb) {
                                var Lb = this.state.offset;
                                return Ib >= Lb.left && Ib <= Lb.left + Lb.width && Jb >= Lb.top && Jb <= Lb.top + Lb.height ? {
                                    x: Ib,
                                    y: Jb
                                } : null;
                            }
                            var Lb = this.state,
                                Mb = Lb.angleAxisMap,
                                Nb = Lb.radiusAxisMap;
                            if (Mb && Nb) {
                                var Ob = (0, F.getAnyElementOfObject)(Mb);
                                return (0, I.inRangeOfSector)({
                                    x: Ib,
                                    y: Jb
                                }, Ob);
                            }
                            return null;
                        }
                    },
                    {
                        key: 'parseEventsOfWrapper',
                        value: function() {
                            var Ib = this.props.children,
                                Jb = this.getTooltipEventType(),
                                Kb = (0, B.findChildByType)(Ib, u.Tooltip.displayName),
                                Lb = {};
                            return Kb && 'axis' === Jb && (Lb = 'click' === Kb.props.trigger ? {
                                onClick: this.handleClick
                            } : {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            }), $($({}, (0, L.adaptEventHandlers)(this.props, this.handleOuterEvent)), Lb);
                        }
                    },
                    {
                        key: 'addListener',
                        value: function() {
                            K.eventCenter.on(K.SYNC_EVENT, this.handleReceiveSyncEvent), K.eventCenter.setMaxListeners && K.eventCenter._maxListeners && K.eventCenter.setMaxListeners(K.eventCenter._maxListeners + 1);
                        }
                    },
                    {
                        key: 'removeListener',
                        value: function() {
                            K.eventCenter.removeListener(K.SYNC_EVENT, this.handleReceiveSyncEvent), K.eventCenter.setMaxListeners && K.eventCenter._maxListeners && K.eventCenter.setMaxListeners(K.eventCenter._maxListeners - 1);
                        }
                    },
                    {
                        key: 'triggerSyncEvent',
                        value: function(Ib) {
                            var Jb = this.props.syncId;
                            a(n)(Jb) || K.eventCenter.emit(K.SYNC_EVENT, Jb, this.uniqueChartId, Ib);
                        }
                    },
                    {
                        key: 'applySyncEvent',
                        value: function(Ib) {
                            var Jb = this.props,
                                Kb = Jb.layout,
                                Lb = Jb.syncMethod,
                                Mb = this.state.updateId,
                                Nb = Ib.dataStartIndex,
                                Ob = Ib.dataEndIndex;
                            if (a(n)(Ib.dataStartIndex) && a(n)(Ib.dataEndIndex))
                                if (a(n)(Ib.activeTooltipIndex))
                                    this.setState(Ib);
                                else {
                                    var Pb = Ib.chartX,
                                        Qb = Ib.chartY,
                                        Rb = Ib.activeTooltipIndex,
                                        Sb = this.state,
                                        Tb = Sb.offset,
                                        Ub = Sb.tooltipTicks;
                                    if (!Tb)
                                        return;
                                    if ('function' == typeof Lb)
                                        Rb = Lb(Ub, Ib);
                                    else if ('value' === Lb) {
                                        Rb = -1;
                                        for (var Vb = 0; Vb < Ub.length; Vb++)
                                            if (Ub[Vb].value === Ib.activeLabel) {
                                                Rb = Vb;
                                                break;
                                            }
                                    }
                                    var Vb = $($({}, Tb), {}, {
                                            x: Tb.left,
                                            y: Tb.top
                                        }),
                                        Wb = Math.min(Pb, Vb.x + Vb.width),
                                        Xb = Math.min(Qb, Vb.y + Vb.height),
                                        Yb = Ub[Rb] && Ub[Rb].value,
                                        Zb = hb(this.state, this.props.data, Rb),
                                        $b = Ub[Rb] ? {
                                            x: 'horizontal' === Kb ? Ub[Rb].coordinate : Wb,
                                            y: 'horizontal' === Kb ? Xb : Ub[Rb].coordinate
                                        } : cb;
                                    this.setState($($({}, Ib), {}, {
                                        activeLabel: Yb,
                                        activeCoordinate: $b,
                                        activePayload: Zb,
                                        activeTooltipIndex: Rb
                                    }));
                                }
                            else
                                this.setState($({
                                    dataStartIndex: Nb,
                                    dataEndIndex: Ob
                                }, Bb({
                                    props: this.props,
                                    dataStartIndex: Nb,
                                    dataEndIndex: Ob,
                                    updateId: Mb
                                }, this.state)));
                        }
                    },
                    {
                        key: 'filterFormatItem',
                        value: function(Ib, Jb, Kb) {
                            for (var Lb = this.state.formattedGraphicalItems, Mb = 0, Nb = Lb.length; Mb < Nb; Mb++) {
                                var Ob = Lb[Mb];
                                if (Ob.item === Ib || Ob.props.key === Ib.key || Jb === (0, B.getDisplayName)(Ob.item.type) && Kb === Ob.childIndex)
                                    return Ob;
                            }
                            return null;
                        }
                    },
                    {
                        key: 'renderAxis',
                        value: function(Ib, Jb, Kb, Lb) {
                            var Mb = this.props,
                                Nb = Mb.width,
                                Ob = Mb.height;
                            return a(q).createElement(C.CartesianAxis, O({}, Ib, {
                                className: 'recharts-'.concat(Ib.axisType, ' ').concat(Ib.axisType),
                                key: Jb.key || ''.concat(Kb, '-').concat(Lb),
                                viewBox: {
                                    x: 0,
                                    y: 0,
                                    width: Nb,
                                    height: Ob
                                },
                                ticksGenerator: this.axesTicksGenerator
                            }));
                        }
                    },
                    {
                        key: 'renderClipPath',
                        value: function() {
                            var Ib = this.clipPathId,
                                Jb = this.state.offset,
                                Kb = Jb.left,
                                Lb = Jb.top,
                                Mb = Jb.height,
                                Nb = Jb.width;
                            return a(q).createElement('defs', null, a(q).createElement('clipPath', {
                                id: Ib
                            }, a(q).createElement('rect', {
                                x: Kb,
                                y: Lb,
                                height: Mb,
                                width: Nb
                            })));
                        }
                    },
                    {
                        key: 'getXScales',
                        value: function() {
                            var Ib = this.state.xAxisMap;
                            return Ib ? Object.entries(Ib).reduce(function(Jb, Kb) {
                                var Lb = N(Kb, 2),
                                    Mb = Lb[0],
                                    Nb = Lb[1];
                                return $($({}, Jb), {}, _ab({}, Mb, Nb.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getYScales',
                        value: function() {
                            var Ib = this.state.yAxisMap;
                            return Ib ? Object.entries(Ib).reduce(function(Jb, Kb) {
                                var Lb = N(Kb, 2),
                                    Mb = Lb[0],
                                    Nb = Lb[1];
                                return $($({}, Jb), {}, _ab({}, Mb, Nb.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getXScaleByAxisId',
                        value: function(Ib) {
                            var Jb, Kb;
                            return null === (Jb = this.state.xAxisMap) || void 0 === Jb || null === (Kb = Jb[Ib]) || void 0 === Kb ? void 0 : Kb.scale;
                        }
                    },
                    {
                        key: 'getYScaleByAxisId',
                        value: function(Ib) {
                            var Jb, Kb;
                            return null === (Jb = this.state.yAxisMap) || void 0 === Jb || null === (Kb = Jb[Ib]) || void 0 === Kb ? void 0 : Kb.scale;
                        }
                    },
                    {
                        key: 'getItemByXY',
                        value: function(Ib) {
                            var Jb = this.state.formattedGraphicalItems;
                            if (Jb && Jb.length)
                                for (var Kb = 0, Lb = Jb.length; Kb < Lb; Kb++) {
                                    var Mb = Jb[Kb],
                                        Nb = Mb.props,
                                        Ob = Mb.item,
                                        Pb = (0, B.getDisplayName)(Ob.type);
                                    if ('Bar' === Pb) {
                                        var Qb = (Nb.data || []).find(function(Rb) {
                                            return (0, A.isInRectangle)(Ib, Rb);
                                        });
                                        if (Qb)
                                            return {
                                                graphicalItem: Mb,
                                                payload: Qb
                                            };
                                    } else if ('RadialBar' === Pb) {
                                        var Qb = (Nb.data || []).find(function(Rb) {
                                            return (0, I.inRangeOfSector)(Ib, Rb);
                                        });
                                        if (Qb)
                                            return {
                                                graphicalItem: Mb,
                                                payload: Qb
                                            };
                                    }
                                }
                            return null;
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            var Ib = this;
                            if (!(0, B.validateWidthHeight)(this))
                                return null;
                            var Jb = this.props,
                                Kb = Jb.children,
                                Lb = Jb.className,
                                Mb = Jb.width,
                                Nb = Jb.height,
                                Ob = Jb.style,
                                Pb = Jb.compact,
                                Qb = Jb.title,
                                Rb = Jb.desc,
                                Sb = P(Jb, [
                                    'children',
                                    'className',
                                    'width',
                                    'height',
                                    'style',
                                    'compact',
                                    'title',
                                    'desc'
                                ]),
                                Tb = (0, L.filterProps)(Sb),
                                Ub = {
                                    CartesianGrid: {
                                        handler: this.renderGrid,
                                        once: !0
                                    },
                                    ReferenceArea: {
                                        handler: this.renderReferenceElement
                                    },
                                    ReferenceLine: {
                                        handler: this.renderReferenceElement
                                    },
                                    ReferenceDot: {
                                        handler: this.renderReferenceElement
                                    },
                                    XAxis: {
                                        handler: this.renderXAxis
                                    },
                                    YAxis: {
                                        handler: this.renderYAxis
                                    },
                                    Brush: {
                                        handler: this.renderBrush,
                                        once: !0
                                    },
                                    Bar: {
                                        handler: this.renderGraphicChild
                                    },
                                    Line: {
                                        handler: this.renderGraphicChild
                                    },
                                    Area: {
                                        handler: this.renderGraphicChild
                                    },
                                    Radar: {
                                        handler: this.renderGraphicChild
                                    },
                                    RadialBar: {
                                        handler: this.renderGraphicChild
                                    },
                                    Scatter: {
                                        handler: this.renderGraphicChild
                                    },
                                    Pie: {
                                        handler: this.renderGraphicChild
                                    },
                                    Funnel: {
                                        handler: this.renderGraphicChild
                                    },
                                    Tooltip: {
                                        handler: this.renderCursor,
                                        once: !0
                                    },
                                    PolarGrid: {
                                        handler: this.renderPolarGrid,
                                        once: !0
                                    },
                                    PolarAngleAxis: {
                                        handler: this.renderPolarAxis
                                    },
                                    PolarRadiusAxis: {
                                        handler: this.renderPolarAxis
                                    },
                                    Customized: {
                                        handler: this.renderCustomized
                                    }
                                };
                            if (Pb)
                                return a(q).createElement(s.Surface, O({}, Tb, {
                                    width: Mb,
                                    height: Nb,
                                    title: Qb,
                                    desc: Rb
                                }), this.renderClipPath(), (0, B.renderByOrder)(Kb, Ub));
                            var Vb = this.parseEventsOfWrapper();
                            return a(q).createElement('div', O({
                                className: a(r)('recharts-wrapper', Lb),
                                style: $({
                                    position: 'relative',
                                    cursor: 'default',
                                    width: Mb,
                                    height: Nb
                                }, Ob)
                            }, Vb, {
                                ref: function(Wb) {
                                    Ib.container = Wb;
                                }
                            }), a(q).createElement(s.Surface, O({}, Tb, {
                                width: Mb,
                                height: Nb,
                                title: Qb,
                                desc: Rb
                            }), this.renderClipPath(), (0, B.renderByOrder)(Kb, Ub)), this.renderLegend(), this.renderTooltip());
                        }
                    }
                ]) && Q(Db.prototype, Eb), Fb && Q(Db, Fb), Hb;
            }(q.Component), ob.displayName = qb, ob.defaultProps = $({
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
            }, zb), ob.getDerivedStateFromProps = function(Cb, Db) {
                var Eb = Cb.data,
                    Fb = Cb.children,
                    Gb = Cb.width,
                    Hb = Cb.height,
                    Ib = Cb.layout,
                    Jb = Cb.stackOffset,
                    Kb = Cb.margin;
                if (a(n)(Db.updateId)) {
                    var Lb = kb(Cb);
                    return $($($({}, Lb), {}, {
                        updateId: 0
                    }, Bb($($({
                        props: Cb
                    }, Lb), {}, {
                        updateId: 0
                    }), Db)), {}, {
                        prevData: Eb,
                        prevWidth: Gb,
                        prevHeight: Hb,
                        prevLayout: Ib,
                        prevStackOffset: Jb,
                        prevMargin: Kb,
                        prevChildren: Fb
                    });
                }
                if (Eb !== Db.prevData || Gb !== Db.prevWidth || Hb !== Db.prevHeight || Ib !== Db.prevLayout || Jb !== Db.prevStackOffset || !(0, J.shallowEqual)(Kb, Db.prevMargin)) {
                    var Lb = kb(Cb),
                        Mb = {
                            chartX: Db.chartX,
                            chartY: Db.chartY,
                            isTooltipActive: Db.isTooltipActive
                        },
                        Nb = $($({}, ib(Db, Eb, Ib)), {}, {
                            updateId: Db.updateId + 1
                        }),
                        Ob = $($($({}, Lb), Mb), Nb);
                    return $($($({}, Ob), Bb($({
                        props: Cb
                    }, Ob), Db)), {}, {
                        prevData: Eb,
                        prevWidth: Gb,
                        prevHeight: Hb,
                        prevLayout: Ib,
                        prevStackOffset: Jb,
                        prevMargin: Kb,
                        prevChildren: Fb
                    });
                }
                if (!(0, B.isChildrenEqual)(Fb, Db.prevChildren)) {
                    var Lb = !a(n)(Eb) ? Db.updateId : Db.updateId + 1;
                    return $($({
                        updateId: Lb
                    }, Bb($($({
                        props: Cb
                    }, Db), {}, {
                        updateId: Lb
                    }), Db)), {}, {
                        prevChildren: Fb
                    });
                }
                return null;
            }, ob.renderActiveDot = function(Cb, Db) {
                var Eb;
                return Eb = (0, q.isValidElement)(Cb) ? (0, q.cloneElement)(Cb, Db) : a(i)(Cb) ? Cb(Db) : a(q).createElement(z.Dot, Db), a(q).createElement(t.Layer, {
                    className: 'recharts-active-dot',
                    key: Db.key
                }, Eb);
            }, pb;
        };
}), d.register('Ivp/C', function(e, f) {
    var g = d('hB4a8'),
        h = d('7/uY9'),
        i = d('JIf8c'),
        j = d('Tvpkn0'),
        k = d('A3i5x');
    e.exports = function(l, m, n) {
        var o = j(l) ? g : h;
        return n && k(l, m, n) && (m = void 0), o(l, i(m, 3));
    };
}), d.register('hB4a8', function(e, f) {
    e.exports = function(g, h) {
        for (var i = -1, j = null == g ? 0 : g.length; ++i < j;)
            if (!h(g[i], i, g))
                return !1;
        return !0;
    };
}), d.register('7/uY9', function(e, f) {
    var g = d('8ukQ1');
    e.exports = function(h, i) {
        var j = !0;
        return g(h, function(k, l, m) {
            return j = !!i(k, l, m);
        }), j;
    };
}), d.register('W1zb8', function(e, f) {
    var g = d('aHCSj')(d('2MpA2'));
    e.exports = g;
}), d.register('aHCSj', function(e, f) {
    var g = d('JIf8c'),
        h = d('wC2Rn'),
        i = d('0uRNP');
    e.exports = function(j) {
        return function(k, l, m) {
            var n = Object(k);
            if (!h(k)) {
                var o = g(l, 3);
                k = i(k), l = function(p) {
                    return o(n[p], p, n);
                };
            }
            var o = j(k, l, m);
            return o > -1 ? n[_o ? k[o] : o] : void 0;
        };
    };
}), d.register('2MpA2', function(e, f) {
    var g = d('Eokem'),
        h = d('JIf8c'),
        i = d('bWctr'),
        j = Math.max;
    e.exports = function(k, l, m) {
        var n = null == k ? 0 : k.length;
        if (!n)
            return -1;
        var _o = null == m ? 0 : i(m);
        return _o < 0 && (_o = j(n + _o, 0)), g(k, h(l, 3), _o);
    };
}), d.register('bWctr', function(e, f) {
    var g = d('104WZ');
    e.exports = function(h) {
        var i = g(h),
            j = i % 1;
        return i == i ? j ? i - j : i : 0;
    };
}), d.register('104WZ', function(e, f) {
    var g = d('l5VRj'),
        h = 1 / 0;
    e.exports = function(i) {
        return i ? (i = g(i)) === h || i === -1 / 0 ? 1.7976931348623157e+308 * (i < 0 ? -1 : 1) : i == i ? i : 0 : 0 === i ? i : 0;
    };
}), d.register('l5VRj', function(e, f) {
    var g = d('4+6+/0'),
        h = d('mJ9/X'),
        i = /^\s+|\s+$/g,
        j = /^[-+]0x[0-9a-f]+$/i,
        k = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        m = parseInt;
    e.exports = function(n) {
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
        var o = k.test(n);
        return o || l.test(n) ? m(n.slice(2), o ? 2 : 8) : j.test(n) ? NaN : +n;
    };
}), d.register('DNB+2', function(e, f) {
    var g = d('CNFOx'),
        h = d('4+6+/0');
    e.exports = function(i, j, k) {
        var l = !0,
            m = !0;
        if ('function' != typeof i)
            throw new TypeError('Expected a function');
        return h(k) && (l = 'leading' in k ? !!k.leading : l, m = 'trailing' in k ? !!k.trailing : m), g(i, j, {
            leading: l,
            maxWait: j,
            trailing: m
        });
    };
}), d.register('CNFOx', function(e, f) {
    var g = d('4+6+/0'),
        h = d('nHnAr'),
        i = d('l5VRj'),
        j = Math.max,
        k = Math.min;
    e.exports = function(l, m, n) {
        var o, p, q, r, s, t, u = 0,
            v = !1,
            w = !1,
            x = !0;
        if ('function' != typeof l)
            throw new TypeError('Expected a function');

        function y(z) {
            var A = o,
                B = p;
            return o = p = void 0, u = z, r = l.apply(B, A);
        }

        function z(A) {
            return u = A, s = setTimeout(_B, m), v ? y(A) : r;
        }

        function A(B) {
            var C = B - t;
            return void 0 === t || C >= m || C < 0 || w && B - u >= q;
        }

        function _B() {
            var C = h();
            if (A(C))
                return _C(C);
            s = setTimeout(_B, function(D) {
                var E = m - (D - t);
                return w ? k(E, q - (D - u)) : E;
            }(C));
        }

        function _C(D) {
            return s = void 0, x && o ? y(D) : (o = p = void 0, r);
        }

        function D() {
            var E = h(),
                F = A(E);
            if (o = arguments, p = this, t = E, F) {
                if (void 0 === s)
                    return z(t);
                if (w)
                    return clearTimeout(s), s = setTimeout(_B, m), y(t);
            }
            return void 0 === s && (s = setTimeout(_B, m)), r;
        }
        return m = i(m) || 0, g(n) && (v = !!n.leading, q = (w = 'maxWait' in n) ? j(i(n.maxWait) || 0, m) : q, x = 'trailing' in n ? !!n.trailing : x), D.cancel = function() {
            void 0 !== s && clearTimeout(s), u = 0, o = t = p = s = void 0;
        }, D.flush = function() {
            return void 0 === s ? r : _C(h());
        }, D;
    };
}), d.register('nHnAr', function(e, f) {
    var g = d('ESVuQ');
    e.exports = function() {
        return g.Date.now();
    };
}), d.register('X3YvP', function(e, f) {
    var g = d('QJd9U')();
    e.exports = g;
}), d.register('QJd9U', function(e, f) {
    var g = d('cSNAv0'),
        h = d('A3i5x'),
        i = d('104WZ');
    e.exports = function(j) {
        return function(k, l, m) {
            return m && 'number' != typeof m && h(k, l, m) && (l = m = void 0), k = i(k), void 0 === l ? (l = k, k = 0) : l = i(l), m = void 0 === m ? k < l ? 1 : -1 : i(m), g(k, l, m, j);
        };
    };
}), d.register('cSNAv0', function(e, f) {
    var g = Math.ceil,
        h = Math.max;
    e.exports = function(i, j, k, l) {
        for (var m = -1, n = h(g((j - i) / (k || 1)), 0), o = Array(n); n--;)
            o[l ? n : ++m] = i, i += k;
        return o;
    };
}), d.register('VBeWX', function(e, f) {
    var g = d('p5wQK'),
        h = d('rQx8t0');
    e.exports = function(i) {
        return !0 === i || !1 === i || h(i) && '[object Boolean]' == g(i);
    };
}), d.register('By6Bp', function(e, f) {
    b(e.exports, 'Tooltip', function() {
        return _B;
    });
    var g = d('lAmnl'),
        h = d('kwUzI'),
        i = d('obo8c'),
        j = d('O0Kav');
    d('feG/l');
    var k = d('lUcoP'),
        l = d('/U36/'),
        m = d('F4syR'),
        n = d('9vNM9'),
        o = d('cUlop');

    function p(q) {
        return p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(r) {
            return typeof r;
        } : function(r) {
            return r && 'function' == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
        }, p(q);
    }

    function q(r, s) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(r);
            s && (u = u.filter(function(v) {
                return Object.getOwnPropertyDescriptor(r, v).enumerable;
            })), t.push.apply(t, u);
        }
        return t;
    }

    function r(s) {
        for (var t = 1; t < arguments.length; t++) {
            var u = null != arguments[t] ? arguments[t] : {};
            t % 2 ? q(Object(u), !0).forEach(function(v) {
                _s(s, v, u[v]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u)) : q(Object(u)).forEach(function(v) {
                Object.defineProperty(s, v, Object.getOwnPropertyDescriptor(u, v));
            });
        }
        return s;
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

    function v(w, x) {
        return v = Object.setPrototypeOf || function(y, z) {
            return y.__proto__ = z, y;
        }, v(w, x);
    }

    function w(x) {
        var y = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (x) {
                return !1;
            }
        }();
        return function() {
            var z, A = _y(x);
            if (y) {
                var B = _y(this).constructor;
                z = Reflect.construct(A, arguments, B);
            } else
                z = A.apply(this, arguments);
            return _x(this, z);
        };
    }

    function _x(y, z) {
        return !z || 'object' !== p(z) && 'function' != typeof z ? function(A) {
            if (void 0 === A)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return A;
        }(y) : z;
    }

    function _y(z) {
        return _y = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
            return A.__proto__ || Object.getPrototypeOf(A);
        }, _y(z);
    }
    var z = 'recharts-tooltip-wrapper';

    function A(B) {
        return B.dataKey;
    }
    var _B = function(C) {
        ! function(D, E) {
            if ('function' != typeof E && null !== E)
                throw new TypeError('Super expression must either be null or a function');
            D.prototype = Object.create(E && E.prototype, {
                constructor: {
                    value: D,
                    writable: !0,
                    configurable: !0
                }
            }), E && v(D, E);
        }(p, C);
        var D, E, F, G = w(p);

        function H() {
            var I;
            t(this, H);
            for (var J = arguments.length, K = new Array(J), L = 0; L < J; L++)
                K[L] = arguments[L];
            return (I = G.call.apply(G, [this].concat(K))).state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                }
            }, I.wrapperNode = void 0, I.getTranslate = function(M) {
                var N = M.key,
                    O = M.tooltipDimension,
                    P = M.viewBoxDimension,
                    Q = I.props,
                    R = Q.allowEscapeViewBox,
                    S = Q.coordinate,
                    T = Q.offset,
                    U = Q.position,
                    V = Q.viewBox;
                if (U && (0, o.isNumber)(U[N]))
                    return U[N];
                var W = S[N] - O - T,
                    X = S[N] + T;
                return R[N] ? X : S[N] + O + T > V[N] + P ? Math.max(W, V[N]) : Math.max(X, V[N]);
            }, I;
        }
        return D = H, (E = [{
                key: 'componentDidMount',
                value: function() {
                    this.updateBBox();
                }
            },
            {
                key: 'componentDidUpdate',
                value: function() {
                    this.updateBBox();
                }
            },
            {
                key: 'updateBBox',
                value: function() {
                    var I = this.state,
                        J = I.boxWidth,
                        K = I.boxHeight;
                    if (I.dismissed ? (this.wrapperNode.blur(), this.props.coordinate.x === this.state.dismissedAtCoordinate.x && this.props.coordinate.y === this.state.dismissedAtCoordinate.y || this.setState({
                            dismissed: !1
                        })) : this.wrapperNode.focus({
                            preventScroll: !0
                        }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var L = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(L.width - J) > 1 || Math.abs(L.height - K) > 1) && this.setState({
                            boxWidth: L.width,
                            boxHeight: L.height
                        });
                    } else
                        -
                        1 === J && -1 === K || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        });
                }
            },
            {
                key: 'render',
                value: function() {
                    var I, J, K, L = this,
                        M = this.props,
                        N = M.payload,
                        O = M.isAnimationActive,
                        P = M.animationDuration,
                        Q = M.animationEasing,
                        R = M.filterNull,
                        S = function(T, U) {
                            return !0 === T ? a(i)(U, A) : a(h)(T) ? a(i)(U, T) : U;
                        }(M.payloadUniqBy, R && N && N.length ? N.filter(function(T) {
                            return !a(g)(T.value);
                        }) : N),
                        T = S && S.length,
                        U = this.props,
                        V = U.content,
                        W = U.viewBox,
                        X = U.coordinate,
                        Y = U.position,
                        Z = U.active,
                        $ = U.wrapperStyle,
                        ab = r({
                            pointerEvents: 'none',
                            visibility: !this.state.dismissed && Z && T ? 'visible' : 'hidden',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }, $);
                    if (Y && (0, o.isNumber)(Y.x) && (0, o.isNumber)(Y.y))
                        J = Y.x, K = Y.y;
                    else {
                        var bb = this.state,
                            cb = bb.boxWidth,
                            db = bb.boxHeight;
                        cb > 0 && db > 0 && X ? (J = this.getTranslate({
                            key: 'x',
                            tooltipDimension: cb,
                            viewBoxDimension: W.width
                        }), K = this.getTranslate({
                            key: 'y',
                            tooltipDimension: db,
                            viewBoxDimension: W.height
                        })) : ab.visibility = 'hidden';
                    }
                    ab = r(r({}, (0, k.translateStyle)({
                        transform: this.props.useTranslate3d ? 'translate3d('.concat(J, 'px, ').concat(K, 'px, 0)') : 'translate('.concat(J, 'px, ').concat(K, 'px)')
                    })), ab), O && Z && (ab = r(r({}, (0, k.translateStyle)({
                        transition: 'transform '.concat(P, 'ms ').concat(Q)
                    })), ab));
                    var bb = a(l)(z, (_s(I = {}, ''.concat(z, '-right'), (0, o.isNumber)(J) && X && (0, o.isNumber)(X.x) && J >= X.x), _s(I, ''.concat(z, '-left'), (0, o.isNumber)(J) && X && (0, o.isNumber)(X.x) && J < X.x), _s(I, ''.concat(z, '-bottom'), (0, o.isNumber)(K) && X && (0, o.isNumber)(X.y) && K >= X.y), _s(I, ''.concat(z, '-top'), (0, o.isNumber)(K) && X && (0, o.isNumber)(X.y) && K < X.y), I));
                    return a(j).createElement('div', {
                        tabIndex: -1,
                        role: 'dialog',
                        onKeyDown: function(cb) {
                            'Escape' === cb.key && L.setState({
                                dismissed: !0,
                                dismissedAtCoordinate: r(r({}, L.state.dismissedAtCoordinate), {}, {
                                    x: L.props.coordinate.x,
                                    y: L.props.coordinate.y
                                })
                            });
                        },
                        className: bb,
                        style: ab,
                        ref: function(cb) {
                            L.wrapperNode = cb;
                        }
                    }, function(cb, db) {
                        return a(j).isValidElement(cb) ? a(j).cloneElement(cb, db) : a(h)(cb) ? a(j).createElement(cb, db) : a(j).createElement(m.DefaultTooltipContent, db);
                    }(V, r(r({}, this.props), {}, {
                        payload: S
                    })));
                }
            }
        ]) && u(D.prototype, E), F && u(D, F), H;
    }(j.PureComponent);
    _B.displayName = 'Tooltip', _B.defaultProps = {
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
}), d.register('F4syR', function(e, f) {
    b(e.exports, 'DefaultTooltipContent', function() {
        return _z;
    });
    var g = d('lAmnl'),
        h = d('0WHNs'),
        i = d('Tvpkn0'),
        j = d('O0Kav'),
        k = d('/U36/'),
        l = d('cUlop');

    function m(n) {
        return m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
        }, m(n);
    }

    function n(o, p) {
        return function(q) {
            if (Array.isArray(q))
                return q;
        }(o) || function(q, r) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(q)))
                return;
            var s = [],
                t = !0,
                u = !1,
                v = void 0;
            try {
                for (var w, x = q[Symbol.iterator](); !(t = (w = x.next()).done) && (s.push(w.value), !r || s.length !== r); t = !0);
            } catch (q) {
                u = !0, v = q;
            } finally {
                try {
                    t || null == i.return || i.return();
                } finally {
                    if (u)
                        throw v;
                }
            }
            return s;
        }(o, p) || function(q, r) {
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
        }(o, p) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _o(p, q) {
        (null == q || q > p.length) && (q = p.length);
        for (var r = 0, s = new Array(q); r < q; r++)
            s[r] = p[r];
        return s;
    }

    function p(q, r) {
        var s = Object.keys(q);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(q);
            r && (t = t.filter(function(u) {
                return Object.getOwnPropertyDescriptor(q, u).enumerable;
            })), s.push.apply(s, t);
        }
        return s;
    }

    function q(r) {
        for (var s = 1; s < arguments.length; s++) {
            var t = null != arguments[s] ? arguments[s] : {};
            s % 2 ? p(Object(t), !0).forEach(function(u) {
                _r(r, u, t[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(u) {
                Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(t, u));
            });
        }
        return r;
    }

    function _r(s, t, u) {
        return t in s ? Object.defineProperty(s, t, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[t] = u, s;
    }

    function s(t, u) {
        if (!(t instanceof u))
            throw new TypeError('Cannot call a class as a function');
    }

    function t(u, v) {
        for (var w = 0; w < v.length; w++) {
            var x = v[w];
            x.enumerable = x.enumerable || !1, x.configurable = !0, 'value' in x && (x.writable = !0), Object.defineProperty(u, x.key, x);
        }
    }

    function u(v, w) {
        return u = Object.setPrototypeOf || function(x, y) {
            return x.__proto__ = y, x;
        }, u(v, w);
    }

    function v(w) {
        var x = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (w) {
                return !1;
            }
        }();
        return function() {
            var y, z = _x(w);
            if (x) {
                var A = _x(this).constructor;
                y = Reflect.construct(z, arguments, A);
            } else
                y = z.apply(this, arguments);
            return _w(this, y);
        };
    }

    function _w(x, y) {
        return !y || 'object' !== m(y) && 'function' != typeof y ? function(z) {
            if (void 0 === z)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return z;
        }(x) : y;
    }

    function _x(y) {
        return _x = Object.setPrototypeOf ? Object.getPrototypeOf : function(z) {
            return z.__proto__ || Object.getPrototypeOf(z);
        }, _x(y);
    }

    function y(z) {
        return a(i)(z) && (0, l.isNumOrStr)(z[0]) && (0, l.isNumOrStr)(z[1]) ? z.join(' ~ ') : z;
    }
    var _z = function(A) {
        ! function(B, C) {
            if ('function' != typeof C && null !== C)
                throw new TypeError('Super expression must either be null or a function');
            B.prototype = Object.create(C && C.prototype, {
                constructor: {
                    value: B,
                    writable: !0,
                    configurable: !0
                }
            }), C && u(B, C);
        }(m, A);
        var B, C, D, E = v(m);

        function F() {
            return s(this, F), E.apply(this, arguments);
        }
        return B = F, (C = [{
                key: 'renderContent',
                value: function() {
                    var G = this.props,
                        H = G.payload,
                        I = G.separator,
                        J = G.formatter,
                        K = G.itemStyle,
                        L = G.itemSorter;
                    if (H && H.length) {
                        var M = (L ? a(h)(H, L) : H).map(function(N, O) {
                            if ('none' === N.type)
                                return null;
                            var P = q({
                                    display: 'block',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: N.color || '#000'
                                }, K),
                                Q = N.formatter || J || y,
                                R = N.value,
                                S = N.name;
                            if (Q && null != R && null != S) {
                                var T = Q(R, S, N, O, H);
                                if (Array.isArray(T)) {
                                    var U = n(T, 2);
                                    R = U[0], S = U[1];
                                } else
                                    R = T;
                            }
                            return a(j).createElement('li', {
                                className: 'recharts-tooltip-item',
                                key: 'tooltip-item-'.concat(O),
                                style: P
                            }, (0, l.isNumOrStr)(S) ? a(j).createElement('span', {
                                className: 'recharts-tooltip-item-name'
                            }, S) : null, (0, l.isNumOrStr)(S) ? a(j).createElement('span', {
                                className: 'recharts-tooltip-item-separator'
                            }, I) : null, a(j).createElement('span', {
                                className: 'recharts-tooltip-item-value'
                            }, R), a(j).createElement('span', {
                                className: 'recharts-tooltip-item-unit'
                            }, N.unit || ''));
                        });
                        return a(j).createElement('ul', {
                            className: 'recharts-tooltip-item-list',
                            style: {
                                padding: 0,
                                margin: 0
                            }
                        }, M);
                    }
                    return null;
                }
            },
            {
                key: 'render',
                value: function() {
                    var G = this.props,
                        H = G.wrapperClassName,
                        I = G.contentStyle,
                        J = G.labelClassName,
                        K = G.labelStyle,
                        L = G.label,
                        M = G.labelFormatter,
                        N = G.payload,
                        O = q({
                            margin: 0,
                            padding: 10,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            whiteSpace: 'nowrap'
                        }, I),
                        P = q({
                            margin: 0
                        }, K),
                        Q = !a(g)(L),
                        R = Q ? L : '',
                        S = a(k)('recharts-default-tooltip', H),
                        T = a(k)('recharts-tooltip-label', J);
                    return Q && M && null != N && (R = M(L, N)), a(j).createElement('div', {
                        className: S,
                        style: O
                    }, a(j).createElement('p', {
                        className: T,
                        style: P
                    }, a(j).isValidElement(R) ? R : ''.concat(R)), this.renderContent());
                }
            }
        ]) && t(B.prototype, C), D && t(B, D), F;
    }(j.PureComponent);
    _z.displayName = 'DefaultTooltipContent', _z.defaultProps = {
        separator: ' : ',
        contentStyle: {},
        itemStyle: {},
        labelStyle: {}
    };
}), d.register('dk8OI', function(e, f) {
    b(e.exports, 'Curve', function() {
        return _M;
    });
    var g = d('Tvpkn0'),
        h = d('v36TS'),
        i = d('kwUzI'),
        j = d('O0Kav'),
        k = d('d6BZh'),
        l = d('snBAq'),
        m = d('n2u+N'),
        n = d('NNT7y'),
        o = d('5kKwn'),
        p = d('sbP3T'),
        q = d('p4YU2'),
        r = d('q+k5y'),
        s = d('EikCV'),
        t = d('fVXBz'),
        u = d('/U36/'),
        v = d('3mYHS'),
        w = d('cUlop');

    function x(y) {
        return x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(z) {
            return typeof z;
        } : function(z) {
            return z && 'function' == typeof Symbol && z.constructor === Symbol && z !== Symbol.prototype ? 'symbol' : typeof z;
        }, x(y);
    }

    function y() {
        return y = Object.assign || function(z) {
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
            B && (D = D.filter(function(E) {
                return Object.getOwnPropertyDescriptor(A, E).enumerable;
            })), C.push.apply(C, D);
        }
        return C;
    }

    function A(B) {
        for (var C = 1; C < arguments.length; C++) {
            var D = null != arguments[C] ? arguments[C] : {};
            C % 2 ? z(Object(D), !0).forEach(function(E) {
                _B(B, E, D[E]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(D)) : z(Object(D)).forEach(function(E) {
                Object.defineProperty(B, E, Object.getOwnPropertyDescriptor(D, E));
            });
        }
        return B;
    }

    function _B(C, D, E) {
        return D in C ? Object.defineProperty(C, D, {
            value: E,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : C[D] = E, C;
    }

    function C(D, E) {
        if (!(D instanceof E))
            throw new TypeError('Cannot call a class as a function');
    }

    function D(E, F) {
        for (var G = 0; G < F.length; G++) {
            var H = F[G];
            H.enumerable = H.enumerable || !1, H.configurable = !0, 'value' in H && (H.writable = !0), Object.defineProperty(E, H.key, H);
        }
    }

    function E(F, G) {
        return E = Object.setPrototypeOf || function(H, I) {
            return H.__proto__ = I, H;
        }, E(F, G);
    }

    function F(G) {
        var H = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (G) {
                return !1;
            }
        }();
        return function() {
            var I, J = _H(G);
            if (H) {
                var K = _H(this).constructor;
                I = Reflect.construct(J, arguments, K);
            } else
                I = J.apply(this, arguments);
            return _G(this, I);
        };
    }

    function _G(H, I) {
        return !I || 'object' !== x(I) && 'function' != typeof I ? function(J) {
            if (void 0 === J)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return J;
        }(H) : I;
    }

    function _H(I) {
        return _H = Object.setPrototypeOf ? Object.getPrototypeOf : function(J) {
            return J.__proto__ || Object.getPrototypeOf(J);
        }, _H(I);
    }
    var I = {
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
        },
        J = function(K) {
            return K.x === +K.x && K.y === +K.y;
        },
        K = function(L) {
            return L.x;
        },
        L = function(M) {
            return M.y;
        },
        _M = function(N) {
            ! function(O, P) {
                if ('function' != typeof P && null !== P)
                    throw new TypeError('Super expression must either be null or a function');
                O.prototype = Object.create(P && P.prototype, {
                    constructor: {
                        value: O,
                        writable: !0,
                        configurable: !0
                    }
                }), P && E(O, P);
            }(m, N);
            var O, P, Q, R = F(m);

            function S() {
                return C(this, S), R.apply(this, arguments);
            }
            return O = S, (P = [{
                    key: 'getPath',
                    value: function() {
                        var T, U = this.props,
                            V = U.type,
                            W = U.points,
                            X = U.baseLine,
                            Y = U.layout,
                            Z = U.connectNulls,
                            $ = function(ab, bb) {
                                if (a(i)(ab))
                                    return ab;
                                var cb = 'curve'.concat(a(h)(ab));
                                return 'curveMonotone' === cb && bb ? I[''.concat(cb).concat('vertical' === bb ? 'Y' : 'X')] : I[cb] || o.default;
                            }(V, Y),
                            ab = Z ? W.filter(function(bb) {
                                return J(bb);
                            }) : W;
                        if (a(g)(X)) {
                            var bb = Z ? X.filter(function(cb) {
                                    return J(cb);
                                }) : X,
                                cb = ab.map(function(db, eb) {
                                    return A(A({}, db), {}, {
                                        base: bb[eb]
                                    });
                                });
                            return (T = 'vertical' === Y ? (0, k.default)().y(L).x1(K).x0(function(db) {
                                return db.base.x;
                            }) : (0, k.default)().x(K).y1(L).y0(function(db) {
                                return db.base.y;
                            })).defined(J).curve($), T(cb);
                        }
                        return (T = 'vertical' === Y && (0, w.isNumber)(X) ? (0, k.default)().y(L).x1(K).x0(X) : (0, w.isNumber)(X) ? (0, k.default)().x(K).y1(L).y0(X) : (0, t.default)().x(K).y(L)).defined(J).curve($), T(ab);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var T = this.props,
                            U = T.className,
                            V = T.points,
                            W = T.path,
                            X = T.pathRef;
                        if (!(V && V.length || W))
                            return null;
                        var Y = V && V.length ? this.getPath() : W;
                        return a(j).createElement('path', y({}, (0, v.filterProps)(this.props), (0, v.adaptEventHandlers)(this.props), {
                            className: a(u)('recharts-curve', U),
                            d: Y,
                            ref: X
                        }));
                    }
                }
            ]) && D(O.prototype, P), Q && D(O, Q), S;
        }(j.PureComponent);
    _M.defaultProps = {
        type: 'linear',
        points: [],
        connectNulls: !1
    };
}), d.register('d6BZh', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('YTZPw'),
        h = d('eiH9U'),
        i = d('n7Dwj'),
        j = d('5kKwn'),
        k = d('fVXBz'),
        l = d('14klJ');

    function _m(n, o, p) {
        var q = null,
            r = (0, i.default)(!0),
            s = null,
            t = j.default,
            u = null;

        function v(w) {
            var x, y, z, A, B, C = (w = (0, h.default)(w)).length,
                D = !1,
                E = new Array(C),
                F = new Array(C);
            for (null == s && (u = t(B = (0, g.default)())), x = 0; x <= C; ++x) {
                if (!(x < C && r(A = w[x], x, w)) === D)
                    if (D = !D)
                        y = x, u.areaStart(), u.lineStart();
                    else {
                        for (u.lineEnd(), u.lineStart(), z = x - 1; z >= y; --z)
                            u.point(E[z], F[z]);
                        u.lineEnd(), u.areaEnd();
                    }
                D && (E[x] = +n(A, x, w), F[x] = +o(A, x, w), u.point(q ? +q(A, x, w) : E[x], p ? +p(A, x, w) : F[x]));
            }
            if (B)
                return u = null, B + '' || null;
        }

        function w() {
            return (0, k.default)().defined(r).curve(t).context(s);
        }
        return n = 'function' == typeof n ? n : void 0 === n ? l.x : (0, i.default)(+n), o = 'function' == typeof o ? o : void 0 === o ? (0, i.default)(0) : (0, i.default)(+o), p = 'function' == typeof p ? p : void 0 === p ? l.y : (0, i.default)(+p), v.x = function(x) {
            return arguments.length ? (n = 'function' == typeof x ? x : (0, i.default)(+x), q = null, v) : n;
        }, v.x0 = function(x) {
            return arguments.length ? (n = 'function' == typeof x ? x : (0, i.default)(+x), v) : n;
        }, v.x1 = function(x) {
            return arguments.length ? (q = null == x ? null : 'function' == typeof x ? x : (0, i.default)(+x), v) : q;
        }, v.y = function(x) {
            return arguments.length ? (o = 'function' == typeof x ? x : (0, i.default)(+x), p = null, v) : o;
        }, v.y0 = function(x) {
            return arguments.length ? (o = 'function' == typeof x ? x : (0, i.default)(+x), v) : o;
        }, v.y1 = function(x) {
            return arguments.length ? (p = null == x ? null : 'function' == typeof x ? x : (0, i.default)(+x), v) : p;
        }, v.lineX0 = v.lineY0 = function() {
            return w().x(n).y(o);
        }, v.lineY1 = function() {
            return w().x(n).y(p);
        }, v.lineX1 = function() {
            return w().x(q).y(o);
        }, v.defined = function(x) {
            return arguments.length ? (r = 'function' == typeof x ? x : (0, i.default)(!!x), v) : r;
        }, v.curve = function(x) {
            return arguments.length ? (t = x, null != s && (u = t(s)), v) : t;
        }, v.context = function(x) {
            return arguments.length ? (null == x ? s = u = null : u = t(s = x), v) : s;
        }, v;
    }
}), d.register('5kKwn', function(e, f) {
    function g(h) {
        this._context = h;
    }

    function h(i) {
        return new g(i);
    }
    b(e.exports, 'default', function() {
        return h;
    }), g.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._point = 0;
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(i, j) {
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
}), d.register('fVXBz', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('YTZPw'),
        h = d('eiH9U'),
        i = d('n7Dwj'),
        j = d('5kKwn'),
        k = d('14klJ');

    function _l(m, n) {
        var o = (0, i.default)(!0),
            p = null,
            q = j.default,
            r = null;

        function s(t) {
            var u, v, w, x = (t = (0, h.default)(t)).length,
                y = !1;
            for (null == p && (r = q(w = (0, g.default)())), u = 0; u <= x; ++u)
                !(u < x && o(v = t[u], u, t)) === y && ((y = !y) ? r.lineStart() : r.lineEnd()), y && r.point(+m(v, u, t), +n(v, u, t));
            if (w)
                return r = null, w + '' || null;
        }
        return m = 'function' == typeof m ? m : void 0 === m ? k.x : (0, i.default)(m), n = 'function' == typeof n ? n : void 0 === n ? k.y : (0, i.default)(n), s.x = function(t) {
            return arguments.length ? (m = 'function' == typeof t ? t : (0, i.default)(+t), s) : m;
        }, s.y = function(t) {
            return arguments.length ? (n = 'function' == typeof t ? t : (0, i.default)(+t), s) : n;
        }, s.defined = function(t) {
            return arguments.length ? (o = 'function' == typeof t ? t : (0, i.default)(!!t), s) : o;
        }, s.curve = function(t) {
            return arguments.length ? (q = t, null != p && (r = q(p)), s) : q;
        }, s.context = function(t) {
            return arguments.length ? (null == t ? p = r = null : r = q(p = t), s) : p;
        }, s;
    }
}), d.register('14klJ', function(e, f) {
    function g(h) {
        return h[0];
    }

    function h(i) {
        return i[1];
    }
    b(e.exports, 'x', function() {
        return g;
    }), b(e.exports, 'y', function() {
        return h;
    });
}), d.register('snBAq', function(e, f) {
    function g(h, i, j) {
        h._context.bezierCurveTo((2 * h._x0 + h._x1) / 3, (2 * h._y0 + h._y1) / 3, (h._x0 + 2 * h._x1) / 3, (h._y0 + 2 * h._y1) / 3, (h._x0 + 4 * h._x1 + i) / 6, (h._y0 + 4 * h._y1 + j) / 6);
    }

    function h(i) {
        this._context = i;
    }

    function i(j) {
        return new h(j);
    }
    b(e.exports, 'point', function() {
        return g;
    }), b(e.exports, 'default', function() {
        return i;
    }), h.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    g(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(j, k) {
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
}), d.register('n2u+N', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('Xzbjz'),
        h = d('snBAq');

    function i(j) {
        this._context = j;
    }

    function _j(k) {
        return new i(k);
    }
    i.prototype = {
        areaStart: g.default,
        areaEnd: g.default,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
        },
        lineEnd: function() {
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
        point: function(k, l) {
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
}), d.register('Xzbjz', function(e, f) {
    function g() {}
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('NNT7y', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('snBAq');

    function h(i) {
        this._context = i;
    }

    function _i(j) {
        return new h(j);
    }
    h.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(j, k) {
            switch (j = +j, k = +k, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var l = (this._x0 + 4 * this._x1 + j) / 6,
                        m = (this._y0 + 4 * this._y1 + k) / 6;
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
}), d.register('sbP3T', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('Xzbjz');

    function h(i) {
        this._context = i;
    }

    function _i(j) {
        return new h(j);
    }
    h.prototype = {
        areaStart: g.default,
        areaEnd: g.default,
        lineStart: function() {
            this._point = 0;
        },
        lineEnd: function() {
            this._point && this._context.closePath();
        },
        point: function(j, k) {
            j = +j, k = +k, this._point ? this._context.lineTo(j, k) : (this._point = 1, this._context.moveTo(j, k));
        }
    };
}), d.register('p4YU2', function(e, f) {
    function g(h) {
        return h < 0 ? -1 : 1;
    }

    function h(i, j, k) {
        var l = i._x1 - i._x0,
            m = j - i._x1,
            n = (i._y1 - i._y0) / (l || m < 0 && -0),
            o = (k - i._y1) / (m || l < 0 && -0),
            p = (n * m + o * l) / (l + m);
        return (g(n) + g(o)) * Math.min(Math.abs(n), Math.abs(o), 0.5 * Math.abs(p)) || 0;
    }

    function i(j, k) {
        var l = j._x1 - j._x0;
        return l ? (3 * (j._y1 - j._y0) / l - k) / 2 : k;
    }

    function j(k, l, m) {
        var n = k._x0,
            o = k._y0,
            p = k._x1,
            q = k._y1,
            r = (p - n) / 3;
        k._context.bezierCurveTo(n + r, o + r * l, p - r, q - r * m, p, q);
    }

    function k(l) {
        this._context = l;
    }

    function l(m) {
        this._context = new _m(m);
    }

    function _m(n) {
        this._context = n;
    }

    function n(o) {
        return new k(o);
    }

    function o(p) {
        return new l(p);
    }
    b(e.exports, 'monotoneX', function() {
        return n;
    }), b(e.exports, 'monotoneY', function() {
        return o;
    }), k.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    j(this, this._t0, i(this, this._t0));
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(p, q) {
            var r = NaN;
            if (q = +q, (p = +p) !== this._x1 || q !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(p, q) : this._context.moveTo(p, q);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, j(this, i(this, r = h(this, p, q)), r);
                        break;
                    default:
                        j(this, this._t0, r = h(this, p, q));
                }
                this._x0 = this._x1, this._x1 = p, this._y0 = this._y1, this._y1 = q, this._t0 = r;
            }
        }
    }, (l.prototype = Object.create(k.prototype)).point = function(p, q) {
        k.prototype.point.call(this, q, p);
    }, _m.prototype = {
        moveTo: function(p, q) {
            this._context.moveTo(q, p);
        },
        closePath: function() {
            this._context.closePath();
        },
        lineTo: function(p, q) {
            this._context.lineTo(q, p);
        },
        bezierCurveTo: function(p, q, r, s, t, u) {
            this._context.bezierCurveTo(q, p, s, r, u, t);
        }
    };
}), d.register('q+k5y', function(e, f) {
    function g(h) {
        this._context = h;
    }

    function h(i) {
        var j, k, l = i.length - 1,
            m = new Array(l),
            n = new Array(l),
            o = new Array(l);
        for (m[0] = 0, n[0] = 2, o[0] = i[0] + 2 * i[1], j = 1; j < l - 1; ++j)
            m[j] = 1, n[j] = 4, o[j] = 4 * i[j] + 2 * i[j + 1];
        for (m[l - 1] = 2, n[l - 1] = 7, o[l - 1] = 8 * i[l - 1] + i[l], j = 1; j < l; ++j)
            k = m[j] / n[j - 1], n[j] -= k, o[j] -= k * o[j - 1];
        for (m[l - 1] = o[l - 1] / n[l - 1], j = l - 2; j >= 0; --j)
            m[j] = (o[j] - m[j + 1]) / n[j];
        for (n[l - 1] = (i[l] + m[l - 1]) / 2, j = 0; j < l - 1; ++j)
            n[j] = 2 * i[j + 1] - m[j + 1];
        return [
            m,
            n
        ];
    }

    function i(j) {
        return new g(j);
    }
    b(e.exports, 'default', function() {
        return i;
    }), g.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._x = [], this._y = [];
        },
        lineEnd: function() {
            var j = this._x,
                k = this._y,
                l = j.length;
            if (l)
                if (this._line ? this._context.lineTo(j[0], k[0]) : this._context.moveTo(j[0], k[0]), 2 === l)
                    this._context.lineTo(j[1], k[1]);
                else
                    for (var m = h(j), n = h(k), o = 0, p = 1; p < l; ++o, ++p)
                        this._context.bezierCurveTo(m[0][o], n[0][o], m[1][o], n[1][o], j[p], k[p]);
            (this._line || 0 !== this._line && 1 === l) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
        },
        point: function(j, k) {
            this._x.push(+j), this._y.push(+k);
        }
    };
}), d.register('EikCV', function(e, f) {
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
    b(e.exports, 'default', function() {
        return h;
    }), b(e.exports, 'stepBefore', function() {
        return i;
    }), b(e.exports, 'stepAfter', function() {
        return j;
    }), g.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = NaN;
        },
        lineStart: function() {
            this._x = this._y = NaN, this._point = 0;
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
        },
        point: function(k, l) {
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
}), d.register('6PVsb', function(e, f) {
    b(e.exports, 'Cross', function() {
        return _s;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('cUlop'),
        j = d('3mYHS');

    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
            return typeof m;
        } : function(m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }

    function l() {
        return l = Object.assign || function(m) {
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

    function o(p, q) {
        return o = Object.setPrototypeOf || function(r, s) {
            return r.__proto__ = s, r;
        }, o(p, q);
    }

    function p(q) {
        var r = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (q) {
                return !1;
            }
        }();
        return function() {
            var s, t = _r(q);
            if (r) {
                var u = _r(this).constructor;
                s = Reflect.construct(t, arguments, u);
            } else
                s = t.apply(this, arguments);
            return _q(this, s);
        };
    }

    function _q(r, s) {
        return !s || 'object' !== k(s) && 'function' != typeof s ? function(t) {
            if (void 0 === t)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t;
        }(r) : s;
    }

    function _r(s) {
        return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, _r(s);
    }
    var _s = function(t) {
        ! function(u, v) {
            if ('function' != typeof v && null !== v)
                throw new TypeError('Super expression must either be null or a function');
            u.prototype = Object.create(v && v.prototype, {
                constructor: {
                    value: u,
                    writable: !0,
                    configurable: !0
                }
            }), v && o(u, v);
        }(_q, t);
        var u, v, w, x = p(_q);

        function y() {
            return m(this, y), x.apply(this, arguments);
        }
        return u = y, w = [{
            key: 'getPath',
            value: function(z, A, B, C, D, E) {
                return 'M'.concat(z, ',').concat(D, 'v').concat(C, 'M').concat(E, ',').concat(A, 'h').concat(B);
            }
        }], (v = [{
            key: 'render',
            value: function() {
                var z = this.props,
                    A = z.x,
                    B = z.y,
                    C = z.width,
                    D = z.height,
                    E = z.top,
                    F = z.left,
                    G = z.className;
                return (0, i.isNumber)(A) && (0, i.isNumber)(B) && (0, i.isNumber)(C) && (0, i.isNumber)(D) && (0, i.isNumber)(E) && (0, i.isNumber)(F) ? a(g).createElement('path', l({}, (0, j.filterProps)(this.props, !0), {
                    className: a(h)('recharts-cross', G),
                    d: y.getPath(A, B, C, D, E, F)
                })) : null;
            }
        }]) && n(u.prototype, v), w && n(u, w), y;
    }(g.PureComponent);
    _s.defaultProps = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
}), d.register('EgZ6Y', function(e, f) {
    b(e.exports, 'Sector', function() {
        return _v;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('3mYHS'),
        j = d('sJtfb'),
        k = d('cUlop');

    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }

    function m() {
        return m = Object.assign || function(n) {
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

    function p(q, r) {
        return p = Object.setPrototypeOf || function(s, t) {
            return s.__proto__ = t, s;
        }, p(q, r);
    }

    function q(r) {
        var s = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (r) {
                return !1;
            }
        }();
        return function() {
            var t, u = _s(r);
            if (s) {
                var v = _s(this).constructor;
                t = Reflect.construct(u, arguments, v);
            } else
                t = u.apply(this, arguments);
            return _r(this, t);
        };
    }

    function _r(s, t) {
        return !t || 'object' !== l(t) && 'function' != typeof t ? function(u) {
            if (void 0 === u)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return u;
        }(s) : t;
    }

    function _s(t) {
        return _s = Object.setPrototypeOf ? Object.getPrototypeOf : function(u) {
            return u.__proto__ || Object.getPrototypeOf(u);
        }, _s(t);
    }
    var t = function(u) {
            var v = u.cx,
                w = u.cy,
                x = u.radius,
                y = u.angle,
                z = u.sign,
                A = u.isExternal,
                B = u.cornerRadius,
                C = u.cornerIsExternal,
                D = B * (A ? 1 : -1) + x,
                E = Math.asin(B / D) / j.RADIAN,
                F = C ? y : y + z * E,
                G = C ? y - z * E : y;
            return {
                center: (0, j.polarToCartesian)(v, w, D, F),
                circleTangency: (0, j.polarToCartesian)(v, w, x, F),
                lineTangency: (0, j.polarToCartesian)(v, w, D * Math.cos(E * j.RADIAN), G),
                theta: E
            };
        },
        u = function(v) {
            var w = v.cx,
                x = v.cy,
                y = v.innerRadius,
                z = v.outerRadius,
                A = v.startAngle,
                B = function(C, D) {
                    return (0, k.mathSign)(D - C) * Math.min(Math.abs(D - C), 359.999);
                }(A, v.endAngle),
                C = A + B,
                D = (0, j.polarToCartesian)(w, x, z, A),
                E = (0, j.polarToCartesian)(w, x, z, C),
                F = 'M '.concat(D.x, ',').concat(D.y, '\n    A ').concat(z, ',').concat(z, ',0,\n    ').concat(+(Math.abs(B) > 180), ',').concat(+(A > C), ',\n    ').concat(E.x, ',').concat(E.y, '\n  ');
            if (y > 0) {
                var G = (0, j.polarToCartesian)(w, x, y, A),
                    H = (0, j.polarToCartesian)(w, x, y, C);
                F += 'L '.concat(H.x, ',').concat(H.y, '\n            A ').concat(y, ',').concat(y, ',0,\n            ').concat(+(Math.abs(B) > 180), ',').concat(+(A <= C), ',\n            ').concat(G.x, ',').concat(G.y, ' Z');
            } else
                F += 'L '.concat(w, ',').concat(x, ' Z');
            return F;
        },
        _v = function(w) {
            ! function(x, y) {
                if ('function' != typeof y && null !== y)
                    throw new TypeError('Super expression must either be null or a function');
                x.prototype = Object.create(y && y.prototype, {
                    constructor: {
                        value: x,
                        writable: !0,
                        configurable: !0
                    }
                }), y && p(x, y);
            }(l, w);
            var x, y, z, A = q(l);

            function B() {
                return n(this, B), A.apply(this, arguments);
            }
            return x = B, (y = [{
                key: 'render',
                value: function() {
                    var C = this.props,
                        D = C.cx,
                        E = C.cy,
                        F = C.innerRadius,
                        G = C.outerRadius,
                        H = C.cornerRadius,
                        I = C.forceCornerRadius,
                        J = C.cornerIsExternal,
                        K = C.startAngle,
                        L = C.endAngle,
                        M = C.className;
                    if (G < F || K === L)
                        return null;
                    var N, O = a(h)('recharts-sector', M),
                        P = G - F,
                        Q = (0, k.getPercentValue)(H, P, 0, !0);
                    return N = Q > 0 && Math.abs(K - L) < 360 ? function(R) {
                        var S = R.cx,
                            T = R.cy,
                            U = R.innerRadius,
                            V = R.outerRadius,
                            W = R.cornerRadius,
                            X = R.forceCornerRadius,
                            Y = R.cornerIsExternal,
                            Z = R.startAngle,
                            $ = R.endAngle,
                            ab = (0, k.mathSign)($ - Z),
                            bb = t({
                                cx: S,
                                cy: T,
                                radius: V,
                                angle: Z,
                                sign: ab,
                                cornerRadius: W,
                                cornerIsExternal: Y
                            }),
                            cb = bb.circleTangency,
                            db = bb.lineTangency,
                            eb = bb.theta,
                            fb = t({
                                cx: S,
                                cy: T,
                                radius: V,
                                angle: $,
                                sign: -ab,
                                cornerRadius: W,
                                cornerIsExternal: Y
                            }),
                            gb = fb.circleTangency,
                            hb = fb.lineTangency,
                            ib = fb.theta,
                            jb = Y ? Math.abs(Z - $) : Math.abs(Z - $) - eb - ib;
                        if (jb < 0)
                            return X ? 'M '.concat(db.x, ',').concat(db.y, '\n        a').concat(W, ',').concat(W, ',0,0,1,').concat(2 * W, ',0\n        a').concat(W, ',').concat(W, ',0,0,1,').concat(2 * -W, ',0\n      ') : u({
                                cx: S,
                                cy: T,
                                innerRadius: U,
                                outerRadius: V,
                                startAngle: Z,
                                endAngle: $
                            });
                        var kb = 'M '.concat(db.x, ',').concat(db.y, '\n    A').concat(W, ',').concat(W, ',0,0,').concat(+(ab < 0), ',').concat(cb.x, ',').concat(cb.y, '\n    A').concat(V, ',').concat(V, ',0,').concat(+(jb > 180), ',').concat(+(ab < 0), ',').concat(gb.x, ',').concat(gb.y, '\n    A').concat(W, ',').concat(W, ',0,0,').concat(+(ab < 0), ',').concat(hb.x, ',').concat(hb.y, '\n  ');
                        if (U > 0) {
                            var lb = t({
                                    cx: S,
                                    cy: T,
                                    radius: U,
                                    angle: Z,
                                    sign: ab,
                                    isExternal: !0,
                                    cornerRadius: W,
                                    cornerIsExternal: Y
                                }),
                                mb = lb.circleTangency,
                                nb = lb.lineTangency,
                                ob = lb.theta,
                                pb = t({
                                    cx: S,
                                    cy: T,
                                    radius: U,
                                    angle: $,
                                    sign: -ab,
                                    isExternal: !0,
                                    cornerRadius: W,
                                    cornerIsExternal: Y
                                }),
                                qb = pb.circleTangency,
                                rb = pb.lineTangency,
                                sb = pb.theta,
                                tb = Y ? Math.abs(Z - $) : Math.abs(Z - $) - ob - sb;
                            if (tb < 0 && 0 === W)
                                return ''.concat(kb, 'L').concat(S, ',').concat(T, 'Z');
                            kb += 'L'.concat(rb.x, ',').concat(rb.y, '\n      A').concat(W, ',').concat(W, ',0,0,').concat(+(ab < 0), ',').concat(qb.x, ',').concat(qb.y, '\n      A').concat(U, ',').concat(U, ',0,').concat(+(tb > 180), ',').concat(+(ab > 0), ',').concat(mb.x, ',').concat(mb.y, '\n      A').concat(W, ',').concat(W, ',0,0,').concat(+(ab < 0), ',').concat(nb.x, ',').concat(nb.y, 'Z');
                        } else
                            kb += 'L'.concat(S, ',').concat(T, 'Z');
                        return kb;
                    }({
                        cx: D,
                        cy: E,
                        innerRadius: F,
                        outerRadius: G,
                        cornerRadius: Math.min(Q, P / 2),
                        forceCornerRadius: I,
                        cornerIsExternal: J,
                        startAngle: K,
                        endAngle: L
                    }) : u({
                        cx: D,
                        cy: E,
                        innerRadius: F,
                        outerRadius: G,
                        startAngle: K,
                        endAngle: L
                    }), a(g).createElement('path', m({}, (0, i.filterProps)(this.props, !0), {
                        className: O,
                        d: N
                    }));
                }
            }]) && o(x.prototype, y), z && o(x, z), B;
        }(g.PureComponent);
    _v.defaultProps = {
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
}), d.register('bU6S4', function(e, f) {
    b(e.exports, 'Dot', function() {
        return _r;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('3mYHS');

    function j(k) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
            return typeof l;
        } : function(l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, j(k);
    }

    function k() {
        return k = Object.assign || function(l) {
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

    function n(o, p) {
        return n = Object.setPrototypeOf || function(q, r) {
            return q.__proto__ = r, q;
        }, n(o, p);
    }

    function o(p) {
        var q = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (p) {
                return !1;
            }
        }();
        return function() {
            var r, s = _q(p);
            if (q) {
                var t = _q(this).constructor;
                r = Reflect.construct(s, arguments, t);
            } else
                r = s.apply(this, arguments);
            return _p(this, r);
        };
    }

    function _p(q, r) {
        return !r || 'object' !== j(r) && 'function' != typeof r ? function(s) {
            if (void 0 === s)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return s;
        }(q) : r;
    }

    function _q(r) {
        return _q = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
            return s.__proto__ || Object.getPrototypeOf(s);
        }, _q(r);
    }
    var _r = function(s) {
        ! function(t, u) {
            if ('function' != typeof u && null !== u)
                throw new TypeError('Super expression must either be null or a function');
            t.prototype = Object.create(u && u.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), u && n(t, u);
        }(_p, s);
        var t, u, v, w = o(_p);

        function x() {
            return l(this, x), w.apply(this, arguments);
        }
        return t = x, (u = [{
            key: 'render',
            value: function() {
                var y = this.props,
                    z = y.cx,
                    A = y.cy,
                    B = y.r,
                    C = y.className,
                    D = a(h)('recharts-dot', C);
                return z === +z && A === +A && B === +B ? a(g).createElement('circle', k({}, (0, i.filterProps)(this.props), (0, i.adaptEventHandlers)(this.props), {
                    className: D,
                    cx: z,
                    cy: A,
                    r: B
                })) : null;
            }
        }]) && m(t.prototype, u), v && m(t, v), x;
    }(g.PureComponent);
}), d.register('Ayvzs', function(e, f) {
    b(e.exports, 'CartesianAxis', function() {
        return _D;
    });
    var g = d('MsaPk'),
        h = d('kwUzI'),
        i = d('O0Kav'),
        j = d('/U36/'),
        k = d('5NNbF'),
        l = d('dq5ch'),
        m = d('mzVm0'),
        n = d('6aUta'),
        o = d('3bju+'),
        p = d('9vNM9'),
        q = d('cUlop'),
        r = d('3mYHS');

    function s(t) {
        return s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(u) {
            return typeof u;
        } : function(u) {
            return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
        }, s(t);
    }

    function t() {
        return t = Object.assign || function(u) {
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
            w && (y = y.filter(function(z) {
                return Object.getOwnPropertyDescriptor(v, z).enumerable;
            })), x.push.apply(x, y);
        }
        return x;
    }

    function v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? u(Object(y), !0).forEach(function(z) {
                _w(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : u(Object(y)).forEach(function(z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
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
        if (null == y)
            return {};
        var A, B, C = function(D, E) {
            if (null == D)
                return {};
            var F, G, H = {},
                I = Object.keys(D);
            for (G = 0; G < I.length; G++)
                F = I[G], E.indexOf(F) >= 0 || (H[F] = D[F]);
            return H;
        }(y, z);
        if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(y);
            for (B = 0; B < D.length; B++)
                A = D[B], z.indexOf(A) >= 0 || Object.prototype.propertyIsEnumerable.call(y, A) && (C[A] = y[A]);
        }
        return C;
    }

    function y(z, A) {
        for (var B = 0; B < A.length; B++) {
            var C = A[B];
            C.enumerable = C.enumerable || !1, C.configurable = !0, 'value' in C && (C.writable = !0), Object.defineProperty(z, C.key, C);
        }
    }

    function z(A, B) {
        return z = Object.setPrototypeOf || function(C, D) {
            return C.__proto__ = D, C;
        }, z(A, B);
    }

    function A(B) {
        var C = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (B) {
                return !1;
            }
        }();
        return function() {
            var D, E = _C(B);
            if (C) {
                var F = _C(this).constructor;
                D = Reflect.construct(E, arguments, F);
            } else
                D = E.apply(this, arguments);
            return _B(this, D);
        };
    }

    function _B(C, D) {
        return !D || 'object' !== s(D) && 'function' != typeof D ? function(E) {
            if (void 0 === E)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return E;
        }(C) : D;
    }

    function _C(D) {
        return _C = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
            return E.__proto__ || Object.getPrototypeOf(E);
        }, _C(D);
    }
    var _D = function(E) {
        ! function(F, G) {
            if ('function' != typeof G && null !== G)
                throw new TypeError('Super expression must either be null or a function');
            F.prototype = Object.create(G && G.prototype, {
                constructor: {
                    value: F,
                    writable: !0,
                    configurable: !0
                }
            }), G && z(F, G);
        }(u, E);
        var F, G, H, I = A(u);

        function J(K) {
            var L;
            return function(M, N) {
                if (!(M instanceof N))
                    throw new TypeError('Cannot call a class as a function');
            }(this, J), (L = I.call(this, K)).layerReference = void 0, L.state = {
                fontSize: '',
                letterSpacing: ''
            }, L;
        }
        return F = J, H = [{
                key: 'getTicks',
                value: function(K, L, M) {
                    var N = K.tick,
                        O = K.ticks,
                        P = K.viewBox,
                        Q = K.minTickGap,
                        R = K.orientation,
                        S = K.interval,
                        T = K.tickFormatter,
                        U = K.unit;
                    return O && O.length && N ? (0, q.isNumber)(S) || p.Global.isSsr ? J.getNumberIntervalTicks(O, 'number' == typeof S && (0, q.isNumber)(S) ? S : 0) : 'preserveStartEnd' === S ? J.getTicksStart({
                        ticks: O,
                        tickFormatter: T,
                        viewBox: P,
                        orientation: R,
                        minTickGap: Q,
                        unit: U,
                        fontSize: L,
                        letterSpacing: M
                    }, !0) : 'preserveStart' === S ? J.getTicksStart({
                        ticks: O,
                        tickFormatter: T,
                        viewBox: P,
                        orientation: R,
                        minTickGap: Q,
                        unit: U,
                        fontSize: L,
                        letterSpacing: M
                    }) : J.getTicksEnd({
                        ticks: O,
                        tickFormatter: T,
                        viewBox: P,
                        orientation: R,
                        minTickGap: Q,
                        unit: U,
                        fontSize: L,
                        letterSpacing: M
                    }) : [];
                }
            },
            {
                key: 'getNumberIntervalTicks',
                value: function(K, L) {
                    return K.filter(function(M, N) {
                        return N % (L + 1) == 0;
                    });
                }
            },
            {
                key: 'getTicksStart',
                value: function(K, L) {
                    var M, N, O = K.ticks,
                        P = K.tickFormatter,
                        Q = K.viewBox,
                        R = K.orientation,
                        S = K.minTickGap,
                        T = K.unit,
                        U = K.fontSize,
                        V = K.letterSpacing,
                        W = Q.x,
                        X = Q.y,
                        Y = Q.width,
                        Z = Q.height,
                        $ = 'top' === R || 'bottom' === R ? 'width' : 'height',
                        ab = (O || []).slice(),
                        bb = T && 'width' === $ ? (0, l.getStringSize)(T, {
                            fontSize: U,
                            letterSpacing: V
                        })[$] : 0,
                        cb = ab.length,
                        db = cb >= 2 ? (0, q.mathSign)(ab[1].coordinate - ab[0].coordinate) : 1;
                    if (1 === db ? (M = 'width' === $ ? W : X, N = 'width' === $ ? W + Y : X + Z) : (M = 'width' === $ ? W + Y : X + Z, N = 'width' === $ ? W : X), L) {
                        var eb = O[cb - 1],
                            fb = a(h)(P) ? P(eb.value, cb - 1) : eb.value,
                            gb = (0, l.getStringSize)(fb, {
                                fontSize: U,
                                letterSpacing: V
                            })[$] + bb,
                            hb = db * (eb.coordinate + db * gb / 2 - N);
                        ab[cb - 1] = eb = v(v({}, eb), {}, {
                            tickCoord: hb > 0 ? eb.coordinate - hb * db : eb.coordinate
                        }), db * (eb.tickCoord - db * gb / 2 - M) >= 0 && db * (eb.tickCoord + db * gb / 2 - N) <= 0 && (N = eb.tickCoord - db * (gb / 2 + S), ab[cb - 1] = v(v({}, eb), {}, {
                            isShow: !0
                        }));
                    }
                    for (var eb = L ? cb - 1 : cb, fb = 0; fb < eb; fb++) {
                        var gb = ab[fb],
                            hb = a(h)(P) ? P(gb.value, fb) : gb.value,
                            ib = (0, l.getStringSize)(hb, {
                                fontSize: U,
                                letterSpacing: V
                            })[$] + bb;
                        if (0 === fb) {
                            var jb = db * (gb.coordinate - db * ib / 2 - M);
                            ab[fb] = gb = v(v({}, gb), {}, {
                                tickCoord: jb < 0 ? gb.coordinate - jb * db : gb.coordinate
                            });
                        } else
                            ab[fb] = gb = v(v({}, gb), {}, {
                                tickCoord: gb.coordinate
                            });
                        db * (gb.tickCoord - db * ib / 2 - M) >= 0 && db * (gb.tickCoord + db * ib / 2 - N) <= 0 && (M = gb.tickCoord + db * (ib / 2 + S), ab[fb] = v(v({}, gb), {}, {
                            isShow: !0
                        }));
                    }
                    return ab.filter(function(gb) {
                        return gb.isShow;
                    });
                }
            },
            {
                key: 'getTicksEnd',
                value: function(K) {
                    var L, M, N = K.ticks,
                        O = K.tickFormatter,
                        P = K.viewBox,
                        Q = K.orientation,
                        R = K.minTickGap,
                        S = K.unit,
                        T = K.fontSize,
                        U = K.letterSpacing,
                        V = P.x,
                        W = P.y,
                        X = P.width,
                        Y = P.height,
                        Z = 'top' === Q || 'bottom' === Q ? 'width' : 'height',
                        $ = S && 'width' === Z ? (0, l.getStringSize)(S, {
                            fontSize: T,
                            letterSpacing: U
                        })[Z] : 0,
                        ab = (N || []).slice(),
                        bb = ab.length,
                        cb = bb >= 2 ? (0, q.mathSign)(ab[1].coordinate - ab[0].coordinate) : 1;
                    1 === cb ? (L = 'width' === Z ? V : W, M = 'width' === Z ? V + X : W + Y) : (L = 'width' === Z ? V + X : W + Y, M = 'width' === Z ? V : W);
                    for (var db = bb - 1; db >= 0; db--) {
                        var eb = ab[db],
                            fb = a(h)(O) ? O(eb.value, bb - db - 1) : eb.value,
                            gb = (0, l.getStringSize)(fb, {
                                fontSize: T,
                                letterSpacing: U
                            })[Z] + $;
                        if (db === bb - 1) {
                            var hb = cb * (eb.coordinate + cb * gb / 2 - M);
                            ab[db] = eb = v(v({}, eb), {}, {
                                tickCoord: hb > 0 ? eb.coordinate - hb * cb : eb.coordinate
                            });
                        } else
                            ab[db] = eb = v(v({}, eb), {}, {
                                tickCoord: eb.coordinate
                            });
                        cb * (eb.tickCoord - cb * gb / 2 - L) >= 0 && cb * (eb.tickCoord + cb * gb / 2 - M) <= 0 && (M = eb.tickCoord - cb * (gb / 2 + R), ab[db] = v(v({}, eb), {}, {
                            isShow: !0
                        }));
                    }
                    return ab.filter(function(eb) {
                        return eb.isShow;
                    });
                }
            },
            {
                key: 'renderTickItem',
                value: function(K, L, M) {
                    return a(i).isValidElement(K) ? a(i).cloneElement(K, L) : a(h)(K) ? K(L) : a(i).createElement(n.Text, t({}, L, {
                        className: 'recharts-cartesian-axis-tick-value'
                    }), M);
                }
            }
        ], (G = [{
                key: 'shouldComponentUpdate',
                value: function(K, L) {
                    var M = K.viewBox,
                        N = x(K, ['viewBox']),
                        O = this.props,
                        P = O.viewBox,
                        Q = x(O, ['viewBox']);
                    return !(0, k.shallowEqual)(M, P) || !(0, k.shallowEqual)(N, Q) || !(0, k.shallowEqual)(L, this.state);
                }
            },
            {
                key: 'componentDidMount',
                value: function() {
                    var K = this.layerReference;
                    if (K) {
                        var L = K.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
                        L && this.setState({
                            fontSize: window.getComputedStyle(L).fontSize,
                            letterSpacing: window.getComputedStyle(L).letterSpacing
                        });
                    }
                }
            },
            {
                key: 'getTickLineCoord',
                value: function(K) {
                    var L, M, N, O, P, Q, R = this.props,
                        S = R.x,
                        T = R.y,
                        U = R.width,
                        V = R.height,
                        W = R.orientation,
                        X = R.tickSize,
                        Y = R.mirror,
                        Z = R.tickMargin,
                        $ = Y ? -1 : 1,
                        ab = K.tickSize || X,
                        bb = (0, q.isNumber)(K.tickCoord) ? K.tickCoord : K.coordinate;
                    switch (W) {
                        case 'top':
                            L = M = K.coordinate, Q = (N = (O = T + +!Y * V) - $ * ab) - $ * Z, P = bb;
                            break;
                        case 'left':
                            N = O = K.coordinate, P = (L = (M = S + +!Y * U) - $ * ab) - $ * Z, Q = bb;
                            break;
                        case 'right':
                            N = O = K.coordinate, P = (L = (M = S + +Y * U) + $ * ab) + $ * Z, Q = bb;
                            break;
                        default:
                            L = M = K.coordinate, Q = (N = (O = T + +Y * V) + $ * ab) + $ * Z, P = bb;
                    }
                    return {
                        line: {
                            x1: L,
                            y1: N,
                            x2: M,
                            y2: O
                        },
                        tick: {
                            x: P,
                            y: Q
                        }
                    };
                }
            },
            {
                key: 'getTickTextAnchor',
                value: function() {
                    var K, L = this.props,
                        M = L.orientation,
                        N = L.mirror;
                    switch (M) {
                        case 'left':
                            K = N ? 'start' : 'end';
                            break;
                        case 'right':
                            K = N ? 'end' : 'start';
                            break;
                        default:
                            K = 'middle';
                    }
                    return K;
                }
            },
            {
                key: 'getTickVerticalAnchor',
                value: function() {
                    var K = this.props,
                        L = K.orientation,
                        M = K.mirror,
                        N = 'end';
                    switch (L) {
                        case 'left':
                        case 'right':
                            N = 'middle';
                            break;
                        case 'top':
                            N = M ? 'start' : 'end';
                            break;
                        default:
                            N = M ? 'end' : 'start';
                    }
                    return N;
                }
            },
            {
                key: 'renderAxisLine',
                value: function() {
                    var K = this.props,
                        L = K.x,
                        M = K.y,
                        N = K.width,
                        O = K.height,
                        P = K.orientation,
                        Q = K.mirror,
                        R = K.axisLine,
                        S = v(v(v({}, (0, r.filterProps)(this.props)), (0, r.filterProps)(R)), {}, {
                            fill: 'none'
                        });
                    if ('top' === P || 'bottom' === P) {
                        var T = +('top' === P && !Q || 'bottom' === P && Q);
                        S = v(v({}, S), {}, {
                            x1: L,
                            y1: M + T * O,
                            x2: L + N,
                            y2: M + T * O
                        });
                    } else {
                        var T = +('left' === P && !Q || 'right' === P && Q);
                        S = v(v({}, S), {}, {
                            x1: L + T * N,
                            y1: M,
                            x2: L + T * N,
                            y2: M + O
                        });
                    }
                    return a(i).createElement('line', t({}, S, {
                        className: a(j)('recharts-cartesian-axis-line', a(g)(R, 'className'))
                    }));
                }
            },
            {
                key: 'renderTicks',
                value: function(K, L, M) {
                    var N = this,
                        O = this.props,
                        P = O.tickLine,
                        Q = O.stroke,
                        R = O.tick,
                        S = O.tickFormatter,
                        T = O.unit,
                        U = J.getTicks(v(v({}, this.props), {}, {
                            ticks: K
                        }), L, M),
                        V = this.getTickTextAnchor(),
                        W = this.getTickVerticalAnchor(),
                        X = (0, r.filterProps)(this.props),
                        Y = (0, r.filterProps)(R),
                        Z = v(v({}, X), {}, {
                            fill: 'none'
                        }, (0, r.filterProps)(P)),
                        $ = U.map(function(ab, bb) {
                            var cb = N.getTickLineCoord(ab),
                                db = cb.line,
                                eb = cb.tick,
                                fb = v(v(v(v({
                                    textAnchor: V,
                                    verticalAnchor: W
                                }, X), {}, {
                                    stroke: 'none',
                                    fill: Q
                                }, Y), eb), {}, {
                                    index: bb,
                                    payload: ab,
                                    visibleTicksCount: U.length,
                                    tickFormatter: S
                                });
                            return a(i).createElement(m.Layer, t({
                                className: 'recharts-cartesian-axis-tick',
                                key: 'tick-'.concat(bb)
                            }, (0, r.adaptEventsOfChild)(N.props, ab, bb)), P && a(i).createElement('line', t({}, Z, db, {
                                className: a(j)('recharts-cartesian-axis-tick-line', a(g)(P, 'className'))
                            })), R && J.renderTickItem(R, fb, ''.concat(a(h)(S) ? S(ab.value, bb) : ab.value).concat(T || '')));
                        });
                    return a(i).createElement('g', {
                        className: 'recharts-cartesian-axis-ticks'
                    }, $);
                }
            },
            {
                key: 'render',
                value: function() {
                    var K = this,
                        L = this.props,
                        M = L.axisLine,
                        N = L.width,
                        O = L.height,
                        P = L.ticksGenerator,
                        Q = L.className;
                    if (L.hide)
                        return null;
                    var R = this.props,
                        S = R.ticks,
                        T = x(R, ['ticks']),
                        U = S;
                    return a(h)(P) && (U = S && S.length > 0 ? P(this.props) : P(T)), N <= 0 || O <= 0 || !U || !U.length ? null : a(i).createElement(m.Layer, {
                        className: a(j)('recharts-cartesian-axis', Q),
                        ref: function(V) {
                            K.layerReference = V;
                        }
                    }, M && this.renderAxisLine(), this.renderTicks(U, this.state.fontSize, this.state.letterSpacing), o.Label.renderCallByParent(this.props));
                }
            }
        ]) && y(F.prototype, G), H && y(F, H), J;
    }(i.Component);
    _D.displayName = 'CartesianAxis', _D.defaultProps = {
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
}), d.register('YE7BT', function(e, f) {
    b(e.exports, 'Brush', function() {
        return _D;
    });
    var g = d('kwUzI'),
        h = d('X3YvP'),
        i = d('O0Kav'),
        j = d('/U36/'),
        k = d('sGImq'),
        l = d('mzVm0'),
        m = d('6aUta'),
        n = d('Yv4x1'),
        o = d('cUlop'),
        p = d('rLVRH'),
        q = d('3mYHS');

    function r(s) {
        return r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        }, r(s);
    }

    function s() {
        return s = Object.assign || function(t) {
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
            v && (x = x.filter(function(y) {
                return Object.getOwnPropertyDescriptor(u, y).enumerable;
            })), w.push.apply(w, x);
        }
        return w;
    }

    function u(v) {
        for (var w = 1; w < arguments.length; w++) {
            var x = null != arguments[w] ? arguments[w] : {};
            w % 2 ? t(Object(x), !0).forEach(function(y) {
                _v(v, y, x[y]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : t(Object(x)).forEach(function(y) {
                Object.defineProperty(v, y, Object.getOwnPropertyDescriptor(x, y));
            });
        }
        return v;
    }

    function _v(w, x, y) {
        return x in w ? Object.defineProperty(w, x, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : w[x] = y, w;
    }

    function w(x, y) {
        for (var z = 0; z < y.length; z++) {
            var A = y[z];
            A.enumerable = A.enumerable || !1, A.configurable = !0, 'value' in A && (A.writable = !0), Object.defineProperty(x, A.key, A);
        }
    }

    function x(y, z) {
        return x = Object.setPrototypeOf || function(A, B) {
            return A.__proto__ = B, A;
        }, x(y, z);
    }

    function y(z) {
        var A = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (z) {
                return !1;
            }
        }();
        return function() {
            var B, C = _B(z);
            if (A) {
                var D = _B(this).constructor;
                B = Reflect.construct(C, arguments, D);
            } else
                B = C.apply(this, arguments);
            return _z(this, B);
        };
    }

    function _z(A, B) {
        return !B || 'object' !== r(B) && 'function' != typeof B ? _A(A) : B;
    }

    function _A(B) {
        if (void 0 === B)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return B;
    }

    function _B(C) {
        return _B = Object.setPrototypeOf ? Object.getPrototypeOf : function(D) {
            return D.__proto__ || Object.getPrototypeOf(D);
        }, _B(C);
    }
    var C = function(D) {
            return D.changedTouches && !!D.changedTouches.length;
        },
        _D = function(E) {
            ! function(F, G) {
                if ('function' != typeof G && null !== G)
                    throw new TypeError('Super expression must either be null or a function');
                F.prototype = Object.create(G && G.prototype, {
                    constructor: {
                        value: F,
                        writable: !0,
                        configurable: !0
                    }
                }), G && x(F, G);
            }(t, E);
            var F, G, H, I = y(t);

            function J(K) {
                var L;
                return function(M, N) {
                    if (!(M instanceof N))
                        throw new TypeError('Cannot call a class as a function');
                }(this, J), (L = I.call(this, K)).leaveTimer = void 0, L.travellerDragStartHandlers = void 0, L.handleDrag = function(M) {
                    L.leaveTimer && (clearTimeout(L.leaveTimer), L.leaveTimer = null), L.state.isTravellerMoving ? L.handleTravellerMove(M) : L.state.isSlideMoving && L.handleSlideDrag(M);
                }, L.handleTouchMove = function(M) {
                    null != M.changedTouches && M.changedTouches.length > 0 && L.handleDrag(M.changedTouches[0]);
                }, L.handleDragEnd = function() {
                    L.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !1
                    }), L.detachDragEndListener();
                }, L.handleLeaveWrapper = function() {
                    (L.state.isTravellerMoving || L.state.isSlideMoving) && (L.leaveTimer = window.setTimeout(L.handleDragEnd, L.props.leaveTimeOut));
                }, L.handleEnterSlideOrTraveller = function() {
                    L.setState({
                        isTextActive: !0
                    });
                }, L.handleLeaveSlideOrTraveller = function() {
                    L.setState({
                        isTextActive: !1
                    });
                }, L.handleSlideDragStart = function(M) {
                    var N = C(M) ? M.changedTouches[0] : M;
                    L.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: N.pageX
                    }), L.attachDragEndListener();
                }, L.travellerDragStartHandlers = {
                    startX: L.handleTravellerDragStart.bind(_A(L), 'startX'),
                    endX: L.handleTravellerDragStart.bind(_A(L), 'endX')
                }, L.state = {}, L;
            }
            return F = J, H = [{
                    key: 'renderDefaultTraveller',
                    value: function(K) {
                        var L = K.x,
                            M = K.y,
                            N = K.width,
                            O = K.height,
                            P = K.stroke,
                            Q = Math.floor(M + O / 2) - 1;
                        return a(i).createElement(a(i).Fragment, null, a(i).createElement('rect', {
                            x: L,
                            y: M,
                            width: N,
                            height: O,
                            fill: P,
                            stroke: 'none'
                        }), a(i).createElement('line', {
                            x1: L + 1,
                            y1: Q,
                            x2: L + N - 1,
                            y2: Q,
                            fill: 'none',
                            stroke: '#fff'
                        }), a(i).createElement('line', {
                            x1: L + 1,
                            y1: Q + 2,
                            x2: L + N - 1,
                            y2: Q + 2,
                            fill: 'none',
                            stroke: '#fff'
                        }));
                    }
                },
                {
                    key: 'renderTraveller',
                    value: function(K, L) {
                        return a(i).isValidElement(K) ? a(i).cloneElement(K, L) : a(g)(K) ? K(L) : J.renderDefaultTraveller(L);
                    }
                },
                {
                    key: 'getDerivedStateFromProps',
                    value: function(K, L) {
                        var M = K.data,
                            N = K.width,
                            O = K.x,
                            P = K.travellerWidth,
                            Q = K.updateId,
                            R = K.startIndex,
                            S = K.endIndex;
                        if (M !== L.prevData || Q !== L.prevUpdateId)
                            return u({
                                prevData: M,
                                prevTravellerWidth: P,
                                prevUpdateId: Q,
                                prevX: O,
                                prevWidth: N
                            }, M && M.length ? function(T) {
                                var U = T.data,
                                    V = T.startIndex,
                                    W = T.endIndex,
                                    X = T.x,
                                    Y = T.width,
                                    Z = T.travellerWidth;
                                if (!U || !U.length)
                                    return {};
                                var $ = U.length,
                                    ab = (0, k.point)().domain(a(h)(0, $)).range([
                                        X,
                                        X + Y - Z
                                    ]),
                                    bb = ab.domain().map(function(cb) {
                                        return ab(cb);
                                    });
                                return {
                                    isTextActive: !1,
                                    isSlideMoving: !1,
                                    isTravellerMoving: !1,
                                    startX: ab(V),
                                    endX: ab(W),
                                    scale: ab,
                                    scaleValues: bb
                                };
                            }({
                                data: M,
                                width: N,
                                x: O,
                                travellerWidth: P,
                                startIndex: R,
                                endIndex: S
                            }) : {
                                scale: null,
                                scaleValues: null
                            });
                        if (L.scale && (N !== L.prevWidth || O !== L.prevX || P !== L.prevTravellerWidth)) {
                            L.scale.range([
                                O,
                                O + N - P
                            ]);
                            var T = L.scale.domain().map(function(U) {
                                return L.scale(U);
                            });
                            return {
                                prevData: M,
                                prevTravellerWidth: P,
                                prevUpdateId: Q,
                                prevX: O,
                                prevWidth: N,
                                startX: L.scale(K.startIndex),
                                endX: L.scale(K.endIndex),
                                scaleValues: T
                            };
                        }
                        return null;
                    }
                },
                {
                    key: 'getIndexInRange',
                    value: function(K, L) {
                        for (var M = 0, N = K.length - 1; N - M > 1;) {
                            var O = Math.floor((M + N) / 2);
                            K[O] > L ? N = O : M = O;
                        }
                        return L >= K[N] ? N : M;
                    }
                }
            ], (G = [{
                    key: 'componentWillUnmount',
                    value: function() {
                        this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
                    }
                },
                {
                    key: 'getIndex',
                    value: function(K) {
                        var L = K.startX,
                            M = K.endX,
                            N = this.state.scaleValues,
                            O = this.props,
                            P = O.gap,
                            Q = O.data.length - 1,
                            R = Math.min(L, M),
                            S = Math.max(L, M),
                            T = J.getIndexInRange(N, R),
                            U = J.getIndexInRange(N, S);
                        return {
                            startIndex: T - T % P,
                            endIndex: U === Q ? Q : U - U % P
                        };
                    }
                },
                {
                    key: 'getTextOfTick',
                    value: function(K) {
                        var L = this.props,
                            M = L.data,
                            N = L.tickFormatter,
                            O = L.dataKey,
                            P = (0, n.getValueByDataKey)(M[K], O, K);
                        return a(g)(N) ? N(P, K) : P;
                    }
                },
                {
                    key: 'attachDragEndListener',
                    value: function() {
                        window.addEventListener('mouseup', this.handleDragEnd, !0), window.addEventListener('touchend', this.handleDragEnd, !0);
                    }
                },
                {
                    key: 'detachDragEndListener',
                    value: function() {
                        window.removeEventListener('mouseup', this.handleDragEnd, !0), window.removeEventListener('touchend', this.handleDragEnd, !0);
                    }
                },
                {
                    key: 'handleSlideDrag',
                    value: function(K) {
                        var L = this.state,
                            M = L.slideMoveStartX,
                            N = L.startX,
                            O = L.endX,
                            P = this.props,
                            Q = P.x,
                            R = P.width,
                            S = P.travellerWidth,
                            T = P.startIndex,
                            U = P.endIndex,
                            V = P.onChange,
                            W = K.pageX - M;
                        W > 0 ? W = Math.min(W, Q + R - S - O, Q + R - S - N) : W < 0 && (W = Math.max(W, Q - N, Q - O));
                        var X = this.getIndex({
                            startX: N + W,
                            endX: O + W
                        });
                        X.startIndex === T && X.endIndex === U || !V || V(X), this.setState({
                            startX: N + W,
                            endX: O + W,
                            slideMoveStartX: K.pageX
                        });
                    }
                },
                {
                    key: 'handleTravellerDragStart',
                    value: function(K, L) {
                        var M = C(L) ? L.changedTouches[0] : L;
                        this.setState({
                            isSlideMoving: !1,
                            isTravellerMoving: !0,
                            movingTravellerId: K,
                            brushMoveStartX: M.pageX
                        }), this.attachDragEndListener();
                    }
                },
                {
                    key: 'handleTravellerMove',
                    value: function(K) {
                        var L, M = this.state,
                            N = M.brushMoveStartX,
                            O = M.movingTravellerId,
                            P = M.endX,
                            Q = M.startX,
                            R = this.state[O],
                            S = this.props,
                            T = S.x,
                            U = S.width,
                            V = S.travellerWidth,
                            W = S.onChange,
                            X = S.gap,
                            Y = S.data,
                            Z = {
                                startX: this.state.startX,
                                endX: this.state.endX
                            },
                            $ = K.pageX - N;
                        $ > 0 ? $ = Math.min($, T + U - V - R) : $ < 0 && ($ = Math.max($, T - R)), Z[O] = R + $;
                        var ab = this.getIndex(Z),
                            bb = ab.startIndex,
                            cb = ab.endIndex;
                        this.setState((_v(L = {}, O, R + $), _v(L, 'brushMoveStartX', K.pageX), L), function() {
                            var db;
                            W && (db = Y.length - 1, ('startX' === O && (P > Q ? bb % X == 0 : cb % X == 0) || P < Q && cb === db || 'endX' === O && (P > Q ? cb % X == 0 : bb % X == 0) || P > Q && cb === db) && W(ab));
                        });
                    }
                },
                {
                    key: 'renderBackground',
                    value: function() {
                        var K = this.props,
                            L = K.x,
                            M = K.y,
                            N = K.width,
                            O = K.height,
                            P = K.fill,
                            Q = K.stroke;
                        return a(i).createElement('rect', {
                            stroke: Q,
                            fill: P,
                            x: L,
                            y: M,
                            width: N,
                            height: O
                        });
                    }
                },
                {
                    key: 'renderPanorama',
                    value: function() {
                        var K = this.props,
                            L = K.x,
                            M = K.y,
                            N = K.width,
                            O = K.height,
                            P = K.data,
                            Q = K.children,
                            R = K.padding,
                            S = i.Children.only(Q);
                        return S ? a(i).cloneElement(S, {
                            x: L,
                            y: M,
                            width: N,
                            height: O,
                            margin: R,
                            compact: !0,
                            data: P
                        }) : null;
                    }
                },
                {
                    key: 'renderTravellerLayer',
                    value: function(K, L) {
                        var M = this.props,
                            N = M.y,
                            O = M.travellerWidth,
                            P = M.height,
                            Q = M.traveller,
                            R = Math.max(K, this.props.x),
                            S = u(u({}, (0, q.filterProps)(this.props)), {}, {
                                x: R,
                                y: N,
                                width: O,
                                height: P
                            });
                        return a(i).createElement(l.Layer, {
                            className: 'recharts-brush-traveller',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.travellerDragStartHandlers[L],
                            onTouchStart: this.travellerDragStartHandlers[L],
                            style: {
                                cursor: 'col-resize'
                            }
                        }, J.renderTraveller(Q, S));
                    }
                },
                {
                    key: 'renderSlide',
                    value: function(K, L) {
                        var M = this.props,
                            N = M.y,
                            O = M.height,
                            P = M.stroke,
                            Q = M.travellerWidth,
                            R = Math.min(K, L) + Q,
                            S = Math.max(Math.abs(L - K) - Q, 0);
                        return a(i).createElement('rect', {
                            className: 'recharts-brush-slide',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.handleSlideDragStart,
                            onTouchStart: this.handleSlideDragStart,
                            style: {
                                cursor: 'move'
                            },
                            stroke: 'none',
                            fill: P,
                            fillOpacity: 0.2,
                            x: R,
                            y: N,
                            width: S,
                            height: O
                        });
                    }
                },
                {
                    key: 'renderText',
                    value: function() {
                        var K = this.props,
                            L = K.startIndex,
                            M = K.endIndex,
                            N = K.y,
                            O = K.height,
                            P = K.travellerWidth,
                            Q = K.stroke,
                            R = this.state,
                            S = R.startX,
                            T = R.endX,
                            U = {
                                pointerEvents: 'none',
                                fill: Q
                            };
                        return a(i).createElement(l.Layer, {
                            className: 'recharts-brush-texts'
                        }, a(i).createElement(m.Text, s({
                            textAnchor: 'end',
                            verticalAnchor: 'middle',
                            x: Math.min(S, T) - 5,
                            y: N + O / 2
                        }, U), this.getTextOfTick(L)), a(i).createElement(m.Text, s({
                            textAnchor: 'start',
                            verticalAnchor: 'middle',
                            x: Math.max(S, T) + P + 5,
                            y: N + O / 2
                        }, U), this.getTextOfTick(M)));
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var K = this.props,
                            L = K.data,
                            M = K.className,
                            N = K.children,
                            O = K.x,
                            P = K.y,
                            Q = K.width,
                            R = K.height,
                            S = K.alwaysShowText,
                            T = this.state,
                            U = T.startX,
                            V = T.endX,
                            W = T.isTextActive,
                            X = T.isSlideMoving,
                            Y = T.isTravellerMoving;
                        if (!L || !L.length || !(0, o.isNumber)(O) || !(0, o.isNumber)(P) || !(0, o.isNumber)(Q) || !(0, o.isNumber)(R) || Q <= 0 || R <= 0)
                            return null;
                        var Z = a(j)('recharts-brush', M),
                            $ = 1 === a(i).Children.count(N),
                            ab = (0, p.generatePrefixStyle)('userSelect', 'none');
                        return a(i).createElement(l.Layer, {
                            className: Z,
                            onMouseMove: this.handleDrag,
                            onMouseLeave: this.handleLeaveWrapper,
                            onTouchMove: this.handleTouchMove,
                            style: ab
                        }, this.renderBackground(), $ && this.renderPanorama(), this.renderSlide(U, V), this.renderTravellerLayer(U, 'startX'), this.renderTravellerLayer(V, 'endX'), (W || X || Y || S) && this.renderText());
                    }
                }
            ]) && w(F.prototype, G), H && w(F, H), J;
        }(i.PureComponent);
    _D.displayName = 'Brush', _D.defaultProps = {
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
}), d.register('rLVRH', function(e, f) {
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                _i(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }

    function _i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }
    b(e.exports, 'generatePrefixStyle', function() {
        return _k;
    });
    var j = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        _k = function(l, m) {
            if (!l)
                return null;
            var n = l.replace(/(\w)/, function(o) {
                    return o.toUpperCase();
                }),
                o = j.reduce(function(p, q) {
                    return h(h({}, p), {}, _i({}, q + n, m));
                }, {});
            return o[l] = m, o;
        };
}), d.register('9smbJ', function(e, f) {
    b(e.exports, 'detectReferenceElementsDomain', function() {
        return _m;
    });
    var g = d('uziEt'),
        h = d('slUpP'),
        i = d('aVJ0l'),
        j = d('eMUtI'),
        k = d('1aRlp'),
        l = d('cUlop'),
        _m = function(n, o, p, q, r) {
            var s = (0, k.findAllByType)(n, h.ReferenceLine.displayName),
                t = (0, k.findAllByType)(n, g.ReferenceDot.displayName),
                u = s.concat(t),
                v = (0, k.findAllByType)(n, i.ReferenceArea.displayName),
                w = ''.concat(q, 'Id'),
                x = q[0],
                y = o;
            if (u.length && (y = u.reduce(function(z, A) {
                    if (A.props[w] === p && (0, j.ifOverflowMatches)(A.props, 'extendDomain') && (0, l.isNumber)(A.props[x])) {
                        var B = A.props[x];
                        return [
                            Math.min(z[0], B),
                            Math.max(z[1], B)
                        ];
                    }
                    return z;
                }, y)), v.length) {
                var z = ''.concat(x, '1'),
                    A = ''.concat(x, '2');
                y = v.reduce(function(B, C) {
                    if (C.props[w] === p && (0, j.ifOverflowMatches)(C.props, 'extendDomain') && (0, l.isNumber)(C.props[z]) && (0, l.isNumber)(C.props[A])) {
                        var D = C.props[z],
                            E = C.props[A];
                        return [
                            Math.min(B[0], D, E),
                            Math.max(B[1], D, E)
                        ];
                    }
                    return B;
                }, y);
            }
            return r && r.length && (y = r.reduce(function(z, A) {
                return (0, l.isNumber)(A) ? [
                    Math.min(z[0], A),
                    Math.max(z[1], A)
                ] : z;
            }, y)), y;
        };
}), d.register('uziEt', function(e, f) {
    b(e.exports, 'ReferenceDot', function() {
        return _v;
    });
    var g = d('kwUzI'),
        h = d('O0Kav'),
        i = d('/U36/'),
        j = d('mzVm0'),
        k = d('bU6S4'),
        l = d('3bju+'),
        m = d('cUlop'),
        n = d('eMUtI'),
        o = d('hSdFZ'),
        p = d('B3yYZ'),
        q = d('3mYHS');

    function r() {
        return r = Object.assign || function(s) {
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
            u && (w = w.filter(function(x) {
                return Object.getOwnPropertyDescriptor(t, x).enumerable;
            })), v.push.apply(v, w);
        }
        return v;
    }

    function t(u) {
        for (var v = 1; v < arguments.length; v++) {
            var w = null != arguments[v] ? arguments[v] : {};
            v % 2 ? s(Object(w), !0).forEach(function(x) {
                _u(u, x, w[x]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : s(Object(w)).forEach(function(x) {
                Object.defineProperty(u, x, Object.getOwnPropertyDescriptor(w, x));
            });
        }
        return u;
    }

    function _u(v, w, x) {
        return w in v ? Object.defineProperty(v, w, {
            value: x,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[w] = x, v;
    }

    function _v(w) {
        var x = w.x,
            y = w.y,
            z = w.r,
            A = w.alwaysShow,
            B = w.clipPathId,
            C = (0, m.isNumOrStr)(x),
            D = (0, m.isNumOrStr)(y);
        if ((0, p.warn)(void 0 === A, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !C || !D)
            return null;
        var E = function(F) {
            var G = F.x,
                H = F.y,
                I = F.xAxis,
                J = F.yAxis,
                K = (0, o.createLabeledScales)({
                    x: I.scale,
                    y: J.scale
                }),
                L = K.apply({
                    x: G,
                    y: H
                }, {
                    bandAware: !0
                });
            return (0, n.ifOverflowMatches)(F, 'discard') && !K.isInRange(L) ? null : L;
        }(w);
        if (!E)
            return null;
        var F = E.x,
            G = E.y,
            H = w.shape,
            I = w.className,
            J = t(t({
                clipPath: (0, n.ifOverflowMatches)(w, 'hidden') ? 'url(#'.concat(B, ')') : void 0
            }, (0, q.filterProps)(w, !0)), {}, {
                cx: F,
                cy: G
            });
        return a(h).createElement(j.Layer, {
            className: a(i)('recharts-reference-dot', I)
        }, _v.renderDot(H, J), l.Label.renderCallByParent(w, {
            x: F - z,
            y: G - z,
            width: 2 * z,
            height: 2 * z
        }));
    }
    _v.displayName = 'ReferenceDot', _v.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#fff',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1
    }, _v.renderDot = function(w, x) {
        return a(h).isValidElement(w) ? a(h).cloneElement(w, x) : a(g)(w) ? w(x) : a(h).createElement(k.Dot, r({}, x, {
            cx: x.cx,
            cy: x.cy,
            className: 'recharts-reference-dot-dot'
        }));
    };
}), d.register('eMUtI', function(e, f) {
    b(e.exports, 'ifOverflowMatches', function() {
        return d;
    });
    var g = function(h, i) {
        var j = h.alwaysShow,
            k = h.ifOverflow;
        return j && (k = 'extendDomain'), k === i;
    };
}), d.register('hSdFZ', function(e, f) {
    b(e.exports, 'formatAxisMap', function() {
        return _p;
    }), b(e.exports, 'rectWithPoints', function() {
        return _A;
    }), b(e.exports, 'rectWithCoords', function() {
        return _B;
    }), b(e.exports, 'createLabeledScales', function() {
        return _I;
    });
    var g = d('Ivp/C'),
        h = d('dBBoV'),
        i = d('Yv4x1'),
        j = d('1aRlp'),
        k = d('cUlop');

    function l(m, n) {
        for (var o = 0; o < n.length; o++) {
            var p = n[o];
            p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
        }
    }

    function m(n, o) {
        var p = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(n);
            o && (q = q.filter(function(r) {
                return Object.getOwnPropertyDescriptor(n, r).enumerable;
            })), p.push.apply(p, q);
        }
        return p;
    }

    function n(o) {
        for (var p = 1; p < arguments.length; p++) {
            var q = null != arguments[p] ? arguments[p] : {};
            p % 2 ? m(Object(q), !0).forEach(function(r) {
                _o(o, r, q[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(q)) : m(Object(q)).forEach(function(r) {
                Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(q, r));
            });
        }
        return o;
    }

    function _o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }
    var _p = function(q, r, s, t, u) {
            var v = q.width,
                w = q.height,
                x = q.layout,
                y = q.children,
                z = Object.keys(r),
                _A = {
                    left: s.left,
                    leftMirror: s.left,
                    right: v - s.right,
                    rightMirror: v - s.right,
                    top: s.top,
                    topMirror: s.top,
                    bottom: w - s.bottom,
                    bottomMirror: w - s.bottom
                },
                _B = !!(0, j.findChildByType)(y, 'Bar');
            return z.reduce(function(C, D) {
                var E, F, G, H, _I, J = r[D],
                    K = J.orientation,
                    L = J.domain,
                    M = J.padding,
                    N = void 0 === M ? {} : M,
                    O = J.mirror,
                    P = J.reversed,
                    Q = ''.concat(K).concat(O ? 'Mirror' : '');
                if ('number' === J.type && ('gap' === J.padding || 'no-gap' === J.padding)) {
                    var R = L[1] - L[0],
                        S = 1 / 0,
                        T = J.categoricalDomain.sort();
                    T.forEach(function(U, V) {
                        V > 0 && (S = Math.min((U || 0) - (T[V - 1] || 0), S));
                    });
                    var U = S / R,
                        V = 'vertical' === J.layout ? s.height : s.width;
                    if ('gap' === J.padding && (E = U * V / 2), 'no-gap' === J.padding) {
                        var W = (0, k.getPercentValue)(q.barCategoryGap, U * V),
                            X = U * V / 2;
                        E = X - W - (X - W) / V * W;
                    }
                }
                F = 'xAxis' === t ? [
                    s.left + (N.left || 0) + (E || 0),
                    s.left + s.width - (N.right || 0) - (E || 0)
                ] : 'yAxis' === t ? 'horizontal' === x ? [
                    s.top + s.height - (N.bottom || 0),
                    s.top + (N.top || 0)
                ] : [
                    s.top + (N.top || 0) + (E || 0),
                    s.top + s.height - (N.bottom || 0) - (E || 0)
                ] : J.range, P && (F = [
                    F[1],
                    F[0]
                ]);
                var R = (0, i.parseScale)(J, u, _B),
                    S = R.scale,
                    T = R.realScaleType;
                S.domain(L).range(F), (0, i.checkDomainOfScale)(S);
                var U = (0, i.getTicksOfScale)(S, n(n({}, J), {}, {
                    realScaleType: T
                }));
                'xAxis' === t ? (_I = 'top' === K && !O || 'bottom' === K && O, G = s.left, H = _A[Q] - _I * J.height) : 'yAxis' === t && (_I = 'left' === K && !O || 'right' === K && O, G = _A[Q] - _I * J.width, H = s.top);
                var V = n(n(n({}, J), U), {}, {
                    realScaleType: T,
                    x: G,
                    y: H,
                    scale: S,
                    width: 'xAxis' === t ? s.width : J.width,
                    height: 'yAxis' === t ? s.height : J.height
                });
                return V.bandSize = (0, i.getBandSizeOfAxis)(V, U), J.hide || 'xAxis' !== t ? J.hide || (_A[Q] += (_I ? -1 : 1) * V.width) : _A[Q] += (_I ? -1 : 1) * V.height, n(n({}, C), {}, _o({}, D, V));
            }, {});
        },
        q = function(r, s) {
            var t = r.x,
                u = r.y,
                v = s.x,
                w = s.y;
            return {
                x: Math.min(t, v),
                y: Math.min(u, w),
                width: Math.abs(v - t),
                height: Math.abs(w - u)
            };
        },
        r = function(s) {
            var t = s.x1,
                u = s.y1,
                v = s.x2,
                w = s.y2;
            return q({
                x: t,
                y: u
            }, {
                x: v,
                y: w
            });
        },
        s = function() {
            function t(u) {
                ! function(v, w) {
                    if (!(v instanceof w))
                        throw new TypeError('Cannot call a class as a function');
                }(this, t), this.scale = void 0, this.scale = u;
            }
            var u, v, w;
            return u = t, v = [{
                    key: 'domain',
                    get: function() {
                        return this.scale.domain;
                    }
                },
                {
                    key: 'range',
                    get: function() {
                        return this.scale.range;
                    }
                },
                {
                    key: 'rangeMin',
                    get: function() {
                        return this.range()[0];
                    }
                },
                {
                    key: 'rangeMax',
                    get: function() {
                        return this.range()[1];
                    }
                },
                {
                    key: 'bandwidth',
                    get: function() {
                        return this.scale.bandwidth;
                    }
                },
                {
                    key: 'apply',
                    value: function(x) {
                        var y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            z = y.bandAware,
                            A = y.position;
                        if (void 0 !== x) {
                            if (A)
                                switch (A) {
                                    case 'start':
                                    default:
                                        return this.scale(x);
                                    case 'middle':
                                        var B = this.bandwidth ? this.bandwidth() / 2 : 0;
                                        return this.scale(x) + B;
                                    case 'end':
                                        var C = this.bandwidth ? this.bandwidth() : 0;
                                        return this.scale(x) + C;
                                }
                            if (z) {
                                var B = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(x) + B;
                            }
                            return this.scale(x);
                        }
                    }
                },
                {
                    key: 'isInRange',
                    value: function(x) {
                        var y = this.range(),
                            z = y[0],
                            A = y[y.length - 1];
                        return z <= A ? x >= z && x <= A : x >= A && x <= z;
                    }
                }
            ], w = [{
                key: 'create',
                value: function(x) {
                    return new t(x);
                }
            }], v && l(u.prototype, v), w && l(u, w), t;
        }();
    s.EPS = 0.0001;
    var t = function(u) {
        var v = Object.keys(u).reduce(function(w, x) {
            return n(n({}, w), {}, _o({}, x, s.create(u[x])));
        }, {});
        return n(n({}, v), {}, {
            apply: function(w) {
                var x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    y = x.bandAware,
                    z = x.position;
                return a(h)(w, function(A, B) {
                    return v[B].apply(A, {
                        bandAware: y,
                        position: z
                    });
                });
            },
            isInRange: function(w) {
                return a(g)(w, function(x, y) {
                    return v[y].isInRange(x);
                });
            }
        });
    };
}), d.register('dBBoV', function(e, f) {
    var g = d('1/YBw'),
        h = d('e6KST'),
        i = d('JIf8c');
    e.exports = function(j, k) {
        var l = {};
        return k = i(k, 3), h(j, function(m, n, o) {
            g(l, n, k(m, n, o));
        }), l;
    };
}), d.register('1/YBw', function(e, f) {
    var g = d('fWZn8');
    e.exports = function(h, i, j) {
        '__proto__' == i && g ? g(h, i, {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
        }) : h[i] = j;
    };
}), d.register('B3yYZ', function(e, f) {
    b(e.exports, 'warn', function() {
        return d;
    });
    var g = function(h, i) {
        for (var j = arguments.length, k = new Array(j > 2 ? j - 2 : 0), l = 2; l < j; l++)
            k[l - 2] = arguments[l];
    };
}), d.register('slUpP', function(e, f) {
    b(e.exports, 'ReferenceLine', function() {
        return _x;
    });
    var g = d('Soj5s'),
        h = d('kwUzI'),
        i = d('O0Kav'),
        j = d('/U36/'),
        k = d('mzVm0'),
        l = d('3bju+'),
        m = d('eMUtI'),
        n = d('cUlop'),
        o = d('hSdFZ'),
        p = d('B3yYZ'),
        q = d('3mYHS');

    function r(s, t) {
        var u = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(s);
            t && (v = v.filter(function(w) {
                return Object.getOwnPropertyDescriptor(s, w).enumerable;
            })), u.push.apply(u, v);
        }
        return u;
    }

    function s(t) {
        for (var u = 1; u < arguments.length; u++) {
            var v = null != arguments[u] ? arguments[u] : {};
            u % 2 ? r(Object(v), !0).forEach(function(w) {
                _t(t, w, v[w]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(v)) : r(Object(v)).forEach(function(w) {
                Object.defineProperty(t, w, Object.getOwnPropertyDescriptor(v, w));
            });
        }
        return t;
    }

    function _t(u, v, w) {
        return v in u ? Object.defineProperty(u, v, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[v] = w, u;
    }

    function u(v, w) {
        return function(x) {
            if (Array.isArray(x))
                return x;
        }(v) || function(x, y) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(x)))
                return;
            var z = [],
                A = !0,
                B = !1,
                C = void 0;
            try {
                for (var D, E = x[Symbol.iterator](); !(A = (D = E.next()).done) && (z.push(D.value), !y || z.length !== y); A = !0);
            } catch (x) {
                B = !0, C = x;
            } finally {
                try {
                    A || null == i.return || i.return();
                } finally {
                    if (B)
                        throw C;
                }
            }
            return z;
        }(v, w) || function(x, y) {
            if (!x)
                return;
            if ('string' == typeof x)
                return _v(x, y);
            var z = Object.prototype.toString.call(x).slice(8, -1);
            'Object' === z && x.constructor && (z = x.constructor.name);
            if ('Map' === z || 'Set' === z)
                return Array.from(x);
            if ('Arguments' === z || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))
                return _v(x, y);
        }(v, w) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _v(w, x) {
        (null == x || x > w.length) && (x = w.length);
        for (var y = 0, z = new Array(x); y < x; y++)
            z[y] = w[y];
        return z;
    }

    function w() {
        return w = Object.assign || function(x) {
            for (var y = 1; y < arguments.length; y++) {
                var z = arguments[y];
                for (var A in z)
                    Object.prototype.hasOwnProperty.call(z, A) && (x[A] = z[A]);
            }
            return x;
        }, w.apply(this, arguments);
    }

    function _x(y) {
        var z = y.x,
            A = y.y,
            B = y.segment,
            C = y.xAxis,
            D = y.yAxis,
            E = y.shape,
            F = y.className,
            G = y.alwaysShow,
            H = y.clipPathId;
        (0, p.warn)(void 0 === G, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var I = function(J, K, L, M, N) {
            var O = N.viewBox,
                P = O.x,
                Q = O.y,
                R = O.width,
                S = O.height,
                T = N.position;
            if (L) {
                var U = N.y,
                    V = N.yAxis.orientation,
                    W = J.y.apply(U, {
                        position: T
                    });
                if ((0, m.ifOverflowMatches)(N, 'discard') && !J.y.isInRange(W))
                    return null;
                var X = [{
                        x: P + R,
                        y: W
                    },
                    {
                        x: P,
                        y: W
                    }
                ];
                return 'left' === V ? X.reverse() : X;
            }
            if (K) {
                var U = N.x,
                    V = N.xAxis.orientation,
                    W = J.x.apply(U, {
                        position: T
                    });
                if ((0, m.ifOverflowMatches)(N, 'discard') && !J.x.isInRange(W))
                    return null;
                var X = [{
                        x: W,
                        y: Q + S
                    },
                    {
                        x: W,
                        y: Q
                    }
                ];
                return 'top' === V ? X.reverse() : X;
            }
            if (M) {
                var U = N.segment.map(function(V) {
                    return J.apply(V, {
                        position: T
                    });
                });
                return (0, m.ifOverflowMatches)(N, 'discard') && a(g)(U, function(V) {
                    return !J.isInRange(V);
                }) ? null : U;
            }
            return null;
        }((0, o.createLabeledScales)({
            x: C.scale,
            y: D.scale
        }), (0, n.isNumOrStr)(z), (0, n.isNumOrStr)(A), B && 2 === B.length, y);
        if (!I)
            return null;
        var J = u(I, 2),
            K = J[0],
            L = K.x,
            M = K.y,
            N = J[1],
            O = N.x,
            P = N.y,
            Q = s(s({
                clipPath: (0, m.ifOverflowMatches)(y, 'hidden') ? 'url(#'.concat(H, ')') : void 0
            }, (0, q.filterProps)(y, !0)), {}, {
                x1: L,
                y1: M,
                x2: O,
                y2: P
            });
        return a(i).createElement(k.Layer, {
            className: a(j)('recharts-reference-line', F)
        }, function(R, S) {
            return a(i).isValidElement(R) ? a(i).cloneElement(R, S) : a(h)(R) ? R(S) : a(i).createElement('line', w({}, S, {
                className: 'recharts-reference-line-line'
            }));
        }(E, Q), l.Label.renderCallByParent(y, (0, o.rectWithCoords)({
            x1: L,
            y1: M,
            x2: O,
            y2: P
        })));
    }
    _x.displayName = 'ReferenceLine', _x.defaultProps = {
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
}), d.register('Soj5s', function(e, f) {
    var g = d('KyQXf0'),
        h = d('JIf8c'),
        i = d('+zHoe'),
        j = d('Tvpkn0'),
        k = d('A3i5x');
    e.exports = function(l, m, n) {
        var o = j(l) ? g : i;
        return n && k(l, m, n) && (m = void 0), o(l, h(m, 3));
    };
}), d.register('+zHoe', function(e, f) {
    var g = d('8ukQ1');
    e.exports = function(h, i) {
        var j;
        return g(h, function(k, l, m) {
            return !(j = i(k, l, m));
        }), !!j;
    };
}), d.register('aVJ0l', function(e, f) {
    b(e.exports, 'ReferenceArea', function() {
        return _v;
    });
    var g = d('kwUzI'),
        h = d('O0Kav'),
        i = d('/U36/'),
        j = d('mzVm0'),
        k = d('3bju+'),
        l = d('hSdFZ'),
        m = d('eMUtI'),
        n = d('cUlop'),
        o = d('B3yYZ'),
        p = d('50CUY'),
        q = d('3mYHS');

    function r() {
        return r = Object.assign || function(s) {
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
            u && (w = w.filter(function(x) {
                return Object.getOwnPropertyDescriptor(t, x).enumerable;
            })), v.push.apply(v, w);
        }
        return v;
    }

    function t(u) {
        for (var v = 1; v < arguments.length; v++) {
            var w = null != arguments[v] ? arguments[v] : {};
            v % 2 ? s(Object(w), !0).forEach(function(x) {
                _u(u, x, w[x]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : s(Object(w)).forEach(function(x) {
                Object.defineProperty(u, x, Object.getOwnPropertyDescriptor(w, x));
            });
        }
        return u;
    }

    function _u(v, w, x) {
        return w in v ? Object.defineProperty(v, w, {
            value: x,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[w] = x, v;
    }

    function _v(w) {
        var x = w.x1,
            y = w.x2,
            z = w.y1,
            A = w.y2,
            B = w.className,
            C = w.alwaysShow,
            D = w.clipPathId;
        (0, o.warn)(void 0 === C, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var E = (0, n.isNumOrStr)(x),
            F = (0, n.isNumOrStr)(y),
            G = (0, n.isNumOrStr)(z),
            H = (0, n.isNumOrStr)(A),
            I = w.shape;
        if (!(E || F || G || H || I))
            return null;
        var J = function(K, L, M, N, O) {
            var P = O.x1,
                Q = O.x2,
                R = O.y1,
                S = O.y2,
                T = O.xAxis,
                U = O.yAxis;
            if (!T || !U)
                return null;
            var V = (0, l.createLabeledScales)({
                    x: T.scale,
                    y: U.scale
                }),
                W = {
                    x: K ? V.x.apply(P, {
                        position: 'start'
                    }) : V.x.rangeMin,
                    y: M ? V.y.apply(R, {
                        position: 'start'
                    }) : V.y.rangeMin
                },
                X = {
                    x: L ? V.x.apply(Q, {
                        position: 'end'
                    }) : V.x.rangeMax,
                    y: N ? V.y.apply(S, {
                        position: 'end'
                    }) : V.y.rangeMax
                };
            return !(0, m.ifOverflowMatches)(O, 'discard') || V.isInRange(W) && V.isInRange(X) ? (0, l.rectWithPoints)(W, X) : null;
        }(E, F, G, H, w);
        if (!J && !I)
            return null;
        var K = (0, m.ifOverflowMatches)(w, 'hidden') ? 'url(#'.concat(D, ')') : void 0;
        return a(h).createElement(j.Layer, {
            className: a(i)('recharts-reference-area', B)
        }, _v.renderRect(I, t(t({
            clipPath: K
        }, (0, q.filterProps)(w, !0)), J)), k.Label.renderCallByParent(w, J));
    }
    _v.displayName = 'ReferenceArea', _v.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#ccc',
        fillOpacity: 0.5,
        stroke: 'none',
        strokeWidth: 1
    }, _v.renderRect = function(w, x) {
        return a(h).isValidElement(w) ? a(h).cloneElement(w, x) : a(g)(w) ? w(x) : a(h).createElement(p.Rectangle, r({}, x, {
            className: 'recharts-reference-area-rect'
        }));
    };
}), d.register('F9VSb', function(e, f) {
    b(e.exports, 'eventCenter', function() {
        return _g;
    }), b(e.exports, 'SYNC_EVENT', function() {
        return _h;
    });
    var _g = new(a(d('QbOiC')))();
    _g.setMaxListeners && _g.setMaxListeners(10);
    var _h = 'recharts.syncMouseEvents';
}), d.register('QbOiC', function(e, f) {
    var g = Object.prototype.hasOwnProperty,
        h = '~';

    function i() {}

    function j(k, l, m) {
        this.fn = k, this.context = l, this.once = m || !1;
    }

    function k(l, m, n, o, p) {
        if ('function' != typeof n)
            throw new TypeError('The listener must be a function');
        var q = new j(n, o || l, p),
            r = h ? h + m : m;
        return l._events[r] ? l._events[r].fn ? l._events[r] = [
            l._events[r],
            q
        ] : l._events[r].push(q) : (l._events[r] = q, l._eventsCount++), l;
    }

    function l(m, n) {
        0 == --m._eventsCount ? m._events = new i() : delete m._events[n];
    }

    function m() {
        this._events = new i(), this._eventsCount = 0;
    }
    Object.create && (i.prototype = Object.create(null), new i().__proto__ || (h = !1)), m.prototype.eventNames = function() {
        var n, o, p = [];
        if (0 === this._eventsCount)
            return p;
        for (o in n = this._events)
            g.call(n, o) && p.push(h ? o.slice(1) : o);
        return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(n)) : p;
    }, m.prototype.listeners = function(n) {
        var o = h ? h + n : n,
            p = this._events[o];
        if (!p)
            return [];
        if (p.fn)
            return [p.fn];
        for (var q = 0, r = p.length, s = new Array(r); q < r; q++)
            s[q] = p[q].fn;
        return s;
    }, m.prototype.listenerCount = function(n) {
        var o = h ? h + n : n,
            p = this._events[o];
        return p ? p.fn ? 1 : p.length : 0;
    }, m.prototype.emit = function(n, o, p, q, r, s) {
        var t = h ? h + n : n;
        if (!this._events[t])
            return !1;
        var u, v, w = this._events[t],
            x = arguments.length;
        if (w.fn) {
            switch (w.once && this.removeListener(n, w.fn, void 0, !0), x) {
                case 1:
                    return w.fn.call(w.context), !0;
                case 2:
                    return w.fn.call(w.context, o), !0;
                case 3:
                    return w.fn.call(w.context, o, p), !0;
                case 4:
                    return w.fn.call(w.context, o, p, q), !0;
                case 5:
                    return w.fn.call(w.context, o, p, q, r), !0;
                case 6:
                    return w.fn.call(w.context, o, p, q, r, s), !0;
            }
            for (v = 1, u = new Array(x - 1); v < x; v++)
                u[v - 1] = arguments[v];
            w.fn.apply(w.context, u);
        } else {
            var y, z = w.length;
            for (v = 0; v < z; v++)
                switch (w[v].once && this.removeListener(n, w[v].fn, void 0, !0), x) {
                    case 1:
                        w[v].fn.call(w[v].context);
                        break;
                    case 2:
                        w[v].fn.call(w[v].context, o);
                        break;
                    case 3:
                        w[v].fn.call(w[v].context, o, p);
                        break;
                    case 4:
                        w[v].fn.call(w[v].context, o, p, q);
                        break;
                    default:
                        if (!u)
                            for (y = 1, u = new Array(x - 1); y < x; y++)
                                u[y - 1] = arguments[y];
                        w[v].fn.apply(w[v].context, u);
                }
        }
        return !0;
    }, m.prototype.on = function(n, o, p) {
        return k(this, n, o, p, !1);
    }, m.prototype.once = function(n, o, p) {
        return k(this, n, o, p, !0);
    }, m.prototype.removeListener = function(n, o, p, q) {
        var r = h ? h + n : n;
        if (!this._events[r])
            return this;
        if (!o)
            return l(this, r), this;
        var s = this._events[r];
        if (s.fn)
            s.fn !== o || q && !s.once || p && s.context !== p || l(this, r);
        else {
            for (var t = 0, u = [], v = s.length; t < v; t++)
                (s[t].fn !== o || q && !s[t].once || p && s[t].context !== p) && u.push(s[t]);
            u.length ? this._events[r] = 1 === u.length ? u[0] : u : l(this, r);
        }
        return this;
    }, m.prototype.removeAllListeners = function(n) {
        var o;
        return n ? (o = h ? h + n : n, this._events[o] && l(this, o)) : (this._events = new i(), this._eventsCount = 0), this;
    }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = h, m.EventEmitter = m, e.exports = m;
}), d.register('Afqjn', function(e, f) {
    b(e.exports, 'XAxis', function() {
        return d;
    });
    var g = function() {
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
}), d.register('pMd/u', function(e, f) {
    b(e.exports, 'YAxis', function() {
        return d;
    });
    var g = function() {
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
}), d.register('uBYxz', function(e, f) {
    b(e.exports, 'CartesianGrid', function() {
        return _w;
    });
    var g = d('kwUzI'),
        h = d('O0Kav'),
        i = d('cUlop'),
        j = d('3mYHS');

    function k(l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
            return typeof m;
        } : function(m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(l);
    }

    function l() {
        return l = Object.assign || function(m) {
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
        var p, q, r = function(s, t) {
            if (null == s)
                return {};
            var u, v, w = {},
                x = Object.keys(s);
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

    function n(o, p) {
        var q = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(o);
            p && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(o, s).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function o(p) {
        for (var q = 1; q < arguments.length; q++) {
            var r = null != arguments[q] ? arguments[q] : {};
            q % 2 ? n(Object(r), !0).forEach(function(s) {
                _p(p, s, r[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(s) {
                Object.defineProperty(p, s, Object.getOwnPropertyDescriptor(r, s));
            });
        }
        return p;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function q(r, s) {
        if (!(r instanceof s))
            throw new TypeError('Cannot call a class as a function');
    }

    function r(s, t) {
        for (var u = 0; u < t.length; u++) {
            var v = t[u];
            v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(s, v.key, v);
        }
    }

    function s(t, u) {
        return s = Object.setPrototypeOf || function(v, w) {
            return v.__proto__ = w, v;
        }, s(t, u);
    }

    function t(u) {
        var v = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (u) {
                return !1;
            }
        }();
        return function() {
            var w, x = _v(u);
            if (v) {
                var y = _v(this).constructor;
                w = Reflect.construct(x, arguments, y);
            } else
                w = x.apply(this, arguments);
            return _u(this, w);
        };
    }

    function _u(v, w) {
        return !w || 'object' !== k(w) && 'function' != typeof w ? function(x) {
            if (void 0 === x)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return x;
        }(v) : w;
    }

    function _v(w) {
        return _v = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
            return x.__proto__ || Object.getPrototypeOf(x);
        }, _v(w);
    }
    var _w = function(x) {
        ! function(y, z) {
            if ('function' != typeof z && null !== z)
                throw new TypeError('Super expression must either be null or a function');
            y.prototype = Object.create(z && z.prototype, {
                constructor: {
                    value: y,
                    writable: !0,
                    configurable: !0
                }
            }), z && s(y, z);
        }(n, x);
        var y, z, A, B = t(n);

        function C() {
            return q(this, C), B.apply(this, arguments);
        }
        return y = C, A = [{
            key: 'renderLineItem',
            value: function(D, E) {
                var F;
                if (a(h).isValidElement(D))
                    F = a(h).cloneElement(D, E);
                else if (a(g)(D))
                    F = D(E);
                else {
                    var G = E.x1,
                        H = E.y1,
                        I = E.x2,
                        J = E.y2,
                        K = E.key,
                        L = m(E, [
                            'x1',
                            'y1',
                            'x2',
                            'y2',
                            'key'
                        ]);
                    F = a(h).createElement('line', l({}, (0, j.filterProps)(L), {
                        x1: G,
                        y1: H,
                        x2: I,
                        y2: J,
                        fill: 'none',
                        key: K
                    }));
                }
                return F;
            }
        }], (z = [{
                key: 'renderHorizontal',
                value: function(D) {
                    var E = this,
                        F = this.props,
                        G = F.x,
                        H = F.width,
                        I = F.horizontal;
                    if (!D || !D.length)
                        return null;
                    var J = D.map(function(K, L) {
                        var M = o(o({}, E.props), {}, {
                            x1: G,
                            y1: K,
                            x2: G + H,
                            y2: K,
                            key: 'line-'.concat(L),
                            index: L
                        });
                        return C.renderLineItem(I, M);
                    });
                    return a(h).createElement('g', {
                        className: 'recharts-cartesian-grid-horizontal'
                    }, J);
                }
            },
            {
                key: 'renderVertical',
                value: function(D) {
                    var E = this,
                        F = this.props,
                        G = F.y,
                        H = F.height,
                        I = F.vertical;
                    if (!D || !D.length)
                        return null;
                    var J = D.map(function(K, L) {
                        var M = o(o({}, E.props), {}, {
                            x1: K,
                            y1: G,
                            x2: K,
                            y2: G + H,
                            key: 'line-'.concat(L),
                            index: L
                        });
                        return C.renderLineItem(I, M);
                    });
                    return a(h).createElement('g', {
                        className: 'recharts-cartesian-grid-vertical'
                    }, J);
                }
            },
            {
                key: 'renderVerticalStripes',
                value: function(D) {
                    var E = this.props.verticalFill;
                    if (!E || !E.length)
                        return null;
                    var F = this.props,
                        G = F.fillOpacity,
                        H = F.x,
                        I = F.y,
                        J = F.width,
                        K = F.height,
                        L = D.slice().sort(function(M, N) {
                            return M - N;
                        });
                    H !== L[0] && L.unshift(0);
                    var M = L.map(function(N, O) {
                        var P = L[O + 1] ? L[O + 1] - N : H + J - N;
                        if (P <= 0)
                            return null;
                        var Q = O % E.length;
                        return a(h).createElement('rect', {
                            key: 'react-'.concat(O),
                            x: Math.round(N + H - H),
                            y: I,
                            width: P,
                            height: K,
                            stroke: 'none',
                            fill: E[Q],
                            fillOpacity: G,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(h).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-vertical'
                    }, M);
                }
            },
            {
                key: 'renderHorizontalStripes',
                value: function(D) {
                    var E = this.props.horizontalFill;
                    if (!E || !E.length)
                        return null;
                    var F = this.props,
                        G = F.fillOpacity,
                        H = F.x,
                        I = F.y,
                        J = F.width,
                        K = F.height,
                        L = D.slice().sort(function(M, N) {
                            return M - N;
                        });
                    I !== L[0] && L.unshift(0);
                    var M = L.map(function(N, O) {
                        var P = L[O + 1] ? L[O + 1] - N : I + K - N;
                        if (P <= 0)
                            return null;
                        var Q = O % E.length;
                        return a(h).createElement('rect', {
                            key: 'react-'.concat(O),
                            y: Math.round(N + I - I),
                            x: H,
                            height: P,
                            width: J,
                            stroke: 'none',
                            fill: E[Q],
                            fillOpacity: G,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(h).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-horizontal'
                    }, M);
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var D = this.props.fill;
                    if (!D || 'none' === D)
                        return null;
                    var E = this.props,
                        F = E.fillOpacity,
                        G = E.x,
                        H = E.y,
                        I = E.width,
                        J = E.height;
                    return a(h).createElement('rect', {
                        x: G,
                        y: H,
                        width: I,
                        height: J,
                        stroke: 'none',
                        fill: D,
                        fillOpacity: F,
                        className: 'recharts-cartesian-grid-bg'
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var D = this.props,
                        E = D.x,
                        F = D.y,
                        G = D.width,
                        H = D.height,
                        I = D.horizontal,
                        J = D.vertical,
                        K = D.horizontalCoordinatesGenerator,
                        L = D.verticalCoordinatesGenerator,
                        M = D.xAxis,
                        N = D.yAxis,
                        O = D.offset,
                        P = D.chartWidth,
                        Q = D.chartHeight;
                    if (!(0, i.isNumber)(G) || G <= 0 || !(0, i.isNumber)(H) || H <= 0 || !(0, i.isNumber)(E) || E !== +E || !(0, i.isNumber)(F) || F !== +F)
                        return null;
                    var R = this.props,
                        S = R.horizontalPoints,
                        T = R.verticalPoints;
                    return S && S.length || !a(g)(K) || (S = K({
                        yAxis: N,
                        width: P,
                        height: Q,
                        offset: O
                    })), T && T.length || !a(g)(L) || (T = L({
                        xAxis: M,
                        width: P,
                        height: Q,
                        offset: O
                    })), a(h).createElement('g', {
                        className: 'recharts-cartesian-grid'
                    }, this.renderBackground(), I && this.renderHorizontal(S), J && this.renderVertical(T), I && this.renderHorizontalStripes(S), J && this.renderVerticalStripes(T));
                }
            }
        ]) && r(y.prototype, z), A && r(y, A), C;
    }(h.PureComponent);
    _w.displayName = 'CartesianGrid', _w.defaultProps = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: []
    };
}), d.register('NhCpL', function(e, f) {
    b(e.exports, 'ResponsiveContainer', function() {
        return _p;
    });
    var g = d('CNFOx'),
        h = d('/U36/'),
        i = d('O0Kav'),
        j = d('Xykhy'),
        k = d('cUlop'),
        l = d('B3yYZ');

    function m() {
        return m = Object.assign || function(n) {
            for (var o = 1; o < arguments.length; o++) {
                var p = arguments[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (n[q] = p[q]);
            }
            return n;
        }, m.apply(this, arguments);
    }

    function n(o, p) {
        return function(q) {
            if (Array.isArray(q))
                return q;
        }(o) || function(q, r) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(q)))
                return;
            var s = [],
                t = !0,
                u = !1,
                v = void 0;
            try {
                for (var w, x = q[Symbol.iterator](); !(t = (w = x.next()).done) && (s.push(w.value), !r || s.length !== r); t = !0);
            } catch (q) {
                u = !0, v = q;
            } finally {
                try {
                    t || null == i.return || i.return();
                } finally {
                    if (u)
                        throw v;
                }
            }
            return s;
        }(o, p) || function(q, r) {
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
        }(o, p) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _o(p, q) {
        (null == q || q > p.length) && (q = p.length);
        for (var r = 0, s = new Array(q); r < q; r++)
            s[r] = p[r];
        return s;
    }
    var _p = (0, i.forwardRef)(function(q, r) {
        var s = q.aspect,
            t = q.width,
            u = void 0 === t ? '100%' : t,
            v = q.height,
            w = void 0 === v ? '100%' : v,
            x = q.minWidth,
            y = q.minHeight,
            z = q.maxHeight,
            A = q.children,
            B = q.debounce,
            C = void 0 === B ? 0 : B,
            D = q.id,
            E = q.className,
            F = n((0, i.useState)({
                containerWidth: -1,
                containerHeight: -1
            }), 2),
            G = F[0],
            H = F[1],
            I = (0, i.useRef)(null);
        (0, i.useImperativeHandle)(r, function() {
            return I;
        }, [I]);
        var J = n((0, i.useState)(!1), 2),
            K = J[0],
            L = J[1],
            M = function() {
                return I.current ? {
                    containerWidth: I.current.clientWidth,
                    containerHeight: I.current.clientHeight
                } : null;
            },
            N = function() {
                if (K) {
                    var O = M();
                    if (O) {
                        var P = G.containerWidth,
                            Q = G.containerHeight,
                            R = O.containerWidth,
                            S = O.containerHeight;
                        R === P && S === Q || H({
                            containerWidth: R,
                            containerHeight: S
                        });
                    }
                }
            },
            O = C > 0 ? a(g)(N, C) : N;
        (0, i.useEffect)(function() {
            if (K) {
                var P = M();
                P && H(P);
            }
        }, [K]), (0, i.useEffect)(function() {
            L(!0);
        }, []);
        var P = {
            width: u,
            height: w,
            minWidth: x,
            minHeight: y,
            maxHeight: z
        };
        return a(i).createElement(j.default, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: O,
            targetRef: I
        }, a(i).createElement('div', m({}, null != D ? {
            id: ''.concat(D)
        } : {}, {
            className: a(h)('recharts-responsive-container', E),
            style: P,
            ref: I
        }), function() {
            var Q = G.containerWidth,
                R = G.containerHeight;
            if (Q < 0 || R < 0)
                return null;
            (0, l.warn)((0, k.isPercent)(u) || (0, k.isPercent)(w), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', u, w), (0, l.warn)(!s || s > 0, 'The aspect(%s) must be greater than zero.', s);
            var S = (0, k.isPercent)(u) ? Q : u,
                T = (0, k.isPercent)(w) ? R : w;
            return s && s > 0 && (S ? T = S / s : T && (S = T * s), z && T > z && (T = z)), (0, l.warn)(S > 0 || T > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', S, T, u, w, x, y, s), (0, i.cloneElement)(A, {
                width: S,
                height: T
            });
        }()));
    });
}), d.register('Xykhy', function(e, f) {
    b(e.exports, 'default', function() {
        return _db;
    });
    var g = d('O0Kav'),
        h = (g = d('O0Kav'), d('kZLBJ')),
        i = function(j, k) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(l, m) {
                l.__proto__ = m;
            } || function(l, m) {
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
    var l = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== c ? c : 'undefined' != typeof self ? self : {};
    var m = function(n) {
            var o = typeof n;
            return null != n && ('object' == o || 'function' == o);
        },
        n = 'object' == typeof l && l && l.Object === Object && l,
        o = 'object' == typeof self && self && self.Object === Object && self,
        p = n || o || Function('return this')(),
        q = p,
        r = function() {
            return q.Date.now();
        },
        s = /\s/;
    var t = function(u) {
            for (var v = u.length; v-- && s.test(u.charAt(v)););
            return v;
        },
        u = /^\s+/;
    var v = function(w) {
            return w ? w.slice(0, t(w) + 1).replace(u, '') : w;
        },
        w = p.Symbol,
        x = w,
        y = Object.prototype,
        z = y.hasOwnProperty,
        A = y.toString,
        B = x ? x.toStringTag : void 0;
    var C = function(D) {
            var E = z.call(D, B),
                F = D[B];
            try {
                D[B] = void 0;
                var G = !0;
            } catch (D) {}
            var G = A.call(D);
            return d && (E ? D[B] = F : delete D[B]), G;
        },
        D = Object.prototype.toString;
    var E = C,
        F = function(G) {
            return D.call(G);
        },
        G = w ? w.toStringTag : void 0;
    var H = function(I) {
            return null == I ? void 0 === I ? '[object Undefined]' : '[object Null]' : G && G in Object(I) ? E(I) : F(I);
        },
        I = function(J) {
            return null != J && 'object' == typeof J;
        };
    var J = v,
        K = m,
        L = function(M) {
            return 'symbol' == typeof M || I(M) && '[object Symbol]' == H(M);
        },
        M = /^[-+]0x[0-9a-f]+$/i,
        N = /^0b[01]+$/i,
        O = /^0o[0-7]+$/i,
        P = parseInt;
    var Q = m,
        R = r,
        S = function(T) {
            if ('number' == typeof T)
                return T;
            if (L(T))
                return NaN;
            if (K(T)) {
                var U = 'function' == typeof T.valueOf ? T.valueOf() : T;
                T = K(U) ? U + '' : U;
            }
            if ('string' != typeof T)
                return 0 === T ? T : +T;
            T = J(T);
            var U = N.test(T);
            return U || O.test(T) ? P(T.slice(2), U ? 2 : 8) : M.test(T) ? NaN : +T;
        },
        T = Math.max,
        U = Math.min;
    var V = function(W, X, Y) {
            var Z, $, ab, bb, cb, db, eb = 0,
                fb = !1,
                gb = !1,
                hb = !0;
            if ('function' != typeof W)
                throw new TypeError('Expected a function');

            function ib(jb) {
                var kb = Z,
                    lb = $;
                return Z = $ = void 0, eb = jb, bb = W.apply(lb, kb);
            }

            function jb(kb) {
                return eb = kb, cb = setTimeout(r, X), fb ? ib(kb) : bb;
            }

            function kb(lb) {
                var mb = lb - db;
                return void 0 === db || mb >= X || mb < 0 || gb && lb - eb >= ab;
            }

            function lb() {
                var mb = R();
                if (kb(mb))
                    return s(mb);
                cb = setTimeout(lb, function(nb) {
                    var ob = X - (nb - db);
                    return gb ? U(ob, ab - (nb - eb)) : ob;
                }(mb));
            }

            function mb(nb) {
                return cb = void 0, hb && Z ? ib(nb) : (Z = $ = void 0, bb);
            }

            function nb() {
                var ob = R(),
                    pb = kb(ob);
                if (Z = arguments, $ = this, db = ob, pb) {
                    if (void 0 === cb)
                        return jb(db);
                    if (gb)
                        return clearTimeout(cb), cb = setTimeout(lb, X), ib(db);
                }
                return void 0 === cb && (cb = setTimeout(lb, X)), bb;
            }
            return X = S(X) || 0, Q(Y) && (fb = !!Y.leading, ab = (gb = 'maxWait' in Y) ? T(S(Y.maxWait) || 0, X) : ab, hb = 'trailing' in Y ? !!Y.trailing : hb), nb.cancel = function() {
                void 0 !== cb && clearTimeout(cb), eb = 0, Z = db = $ = cb = void 0;
            }, nb.flush = function() {
                return void 0 === cb ? bb : mb(R());
            }, nb;
        },
        W = V,
        X = m;
    var Y = function(Z, $, ab) {
            var bb = !0,
                cb = !0;
            if ('function' != typeof Z)
                throw new TypeError('Expected a function');
            return X(ab) && (bb = 'leading' in ab ? !!ab.leading : bb, cb = 'trailing' in ab ? !!ab.trailing : cb), W(Z, $, {
                leading: bb,
                maxWait: $,
                trailing: cb
            });
        },
        Z = function($, ab, bb, cb) {
            switch (ab) {
                case 'debounce':
                    return V($, bb, cb);
                case 'throttle':
                    return Y($, bb, cb);
                default:
                    return $;
            }
        },
        $ = function(ab) {
            return 'function' == typeof ab;
        },
        ab = function() {
            return 'undefined' == typeof window;
        },
        bb = function(cb) {
            return cb instanceof Element || cb instanceof HTMLDocument;
        },
        cb = function(db, eb, fb, gb) {
            return function(hb) {
                var ib = hb.width,
                    jb = hb.height;
                eb(function(kb) {
                    return kb.width === ib && kb.height === jb || kb.width === ib && !gb || kb.height === jb && !fb ? kb : (db && $(db) && db(ib, jb), {
                        width: ib,
                        height: jb
                    });
                });
            };
        },
        _db = function(eb) {
            function fb(gb) {
                var hb = eb.call(this, gb) || this;
                hb.cancelHandler = function() {
                    hb.resizeHandler && hb.resizeHandler.cancel && (hb.resizeHandler.cancel(), hb.resizeHandler = null);
                }, hb.attachObserver = function() {
                    var ib = hb.props,
                        jb = ib.targetRef,
                        kb = ib.observerOptions;
                    if (!ab()) {
                        jb && jb.current && (hb.targetRef.current = jb.current);
                        var lb = hb.getElement();
                        lb && (hb.observableElement && hb.observableElement === lb || (hb.observableElement = lb, hb.resizeObserver.observe(lb, kb)));
                    }
                }, hb.getElement = function() {
                    var ib = hb.props,
                        jb = ib.querySelector,
                        kb = ib.targetDomEl;
                    if (ab())
                        return null;
                    if (jb)
                        return document.querySelector(jb);
                    if (kb && bb(kb))
                        return kb;
                    if (hb.targetRef && bb(hb.targetRef.current))
                        return hb.targetRef.current;
                    var lb = (0, h.findDOMNode)(hb);
                    if (!lb)
                        return null;
                    switch (hb.getRenderType()) {
                        case 'renderProp':
                        case 'childFunction':
                        case 'child':
                        case 'childArray':
                            return lb;
                        default:
                            return lb.parentElement;
                    }
                }, hb.createResizeHandler = function(ib) {
                    var jb = hb.props,
                        kb = jb.handleWidth,
                        lb = void 0 === kb || kb,
                        mb = jb.handleHeight,
                        nb = void 0 === mb || mb,
                        ob = jb.onResize;
                    if (lb || nb) {
                        var pb = cb(ob, hb.setState.bind(hb), lb, nb);
                        ib.forEach(function(qb) {
                            var rb = qb && qb.contentRect || {},
                                sb = rb.width,
                                tb = rb.height;
                            !hb.skipOnMount && !ab() && pb({
                                width: sb,
                                height: tb
                            }), hb.skipOnMount = !1;
                        });
                    }
                }, hb.getRenderType = function() {
                    var ib = hb.props,
                        jb = ib.render,
                        kb = ib.children;
                    return $(jb) ? 'renderProp' : $(kb) ? 'childFunction' : (0, g.isValidElement)(kb) ? 'child' : Array.isArray(kb) ? 'childArray' : 'parent';
                };
                var ib = gb.skipOnMount,
                    jb = gb.refreshMode,
                    kb = gb.refreshRate,
                    lb = void 0 === kb ? 1000 : kb,
                    mb = gb.refreshOptions;
                return hb.state = {
                    width: void 0,
                    height: void 0
                }, hb.skipOnMount = ib, hb.targetRef = (0, g.createRef)(), hb.observableElement = null, ab() || (hb.resizeHandler = Z(hb.createResizeHandler, jb, lb, mb), hb.resizeObserver = new window.ResizeObserver(hb.resizeHandler)), hb;
            }
            return j(fb, eb), fb.prototype.componentDidMount = function() {
                this.attachObserver();
            }, fb.prototype.componentDidUpdate = function() {
                this.attachObserver();
            }, fb.prototype.componentWillUnmount = function() {
                ab() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
            }, fb.prototype.render = function() {
                var gb, hb = this.props,
                    ib = hb.render,
                    jb = hb.children,
                    kb = hb.nodeType,
                    lb = void 0 === kb ? 'div' : kb,
                    mb = this.state,
                    nb = {
                        width: mb.width,
                        height: mb.height,
                        targetRef: this.targetRef
                    };
                switch (this.getRenderType()) {
                    case 'renderProp':
                        return ib && ib(nb);
                    case 'childFunction':
                        return (gb = jb)(nb);
                    case 'child':
                        if ((gb = jb).type && 'string' == typeof gb.type) {
                            var ob = k(nb, ['targetRef']);
                            return (0, g.cloneElement)(gb, ob);
                        }
                        return (0, g.cloneElement)(gb, nb);
                    case 'childArray':
                        return (gb = jb).map(function(ob) {
                            return !!ob && (0, g.cloneElement)(ob, nb);
                        });
                    default:
                        return g.createElement(lb, null);
                }
            }, fb;
        }(g.PureComponent);
    ab() ? g.useEffect : g.useLayoutEffect;
}), d.register('cOX1W', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('/raBs'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'BarChartOutlined';
    var _l = h.forwardRef(k);
}), d.register('/raBs', function(e, f) {
    b(e.exports, 'default', function() {
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
                attrs: {
                    d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), d.register('OdAs9', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('GmO9j'),
        h = d('quE27');
    d('V69Df');
    const i = ['bulk-analytics'];
    var _j = e => (0, g.useQuery)({
        queryKey: [
            i,
            e
        ],
        queryFn: () => (0, h.requestAsPromise)({
            url: '/api/bulk/usage/' + e
        }),
        retry: 0
    });
}), d.register('BA14D', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('+iTmi'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'CheckOutlined';
    var _l = h.forwardRef(k);
}), d.register('+iTmi', function(e, f) {
    b(e.exports, 'default', function() {
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
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), d.register('C0gCp', function(e, f) {
    e.exports = function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
});